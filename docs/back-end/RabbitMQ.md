---
date: 2023-08-11
category: 后端
tag:
  - Spring
  - RabbitMQ
---

# RabbitMQ的简单使用

## 简介

RabbitMQ是流行的开源消息队列系统。  
消息队列系统是指保存消息的一个容器，本质是个队列。系统整体架构为:  

1. Producer 消息生产者：负责产生和发送消息到 Broker。
1. Broker 消息处理中心：负责消息存储、确认、重试等，一般其中会包含多个 queue。
1. Consumer 消息消费者：负责从 Broker 中获取消息，并进行相应处理。

## 使用Docker环境搭建

  RabbitMQ的镜像默认不支持web管理页面，需选择tag为management才支持web页面访问

1. 启动

    ```sh
    docker run -d --name myRabbit -p 15672:15672 -p 5672:5672 rabbitmq:management
    ```

1. 浏览器访问本地15672端口即可，[访问地址](http://localhost:15672)

    >账号： guest  
    >密码： guest

## SpringBoot中使用代码

  以下为简单的邮件发送的案例

### Config配置

Exchange：消息队列交换机。按一定的规则将消息路由转发到某个队列。  
Queue：消息队列，存储消息的队列。  
Binding：绑定Exchange和Queue的对应关系。  

```java
@Configuration
public class RabbitMQConfig {
    @Bean
    public Queue emailQueue() {
        return QueueBuilder.durable(EMAIL_QUEUE).deadLetterExchange(DEAD_LETTER_EMAIL_EXCHANGE).deadLetterRoutingKey(DEAD_LETTER_EMAIL_ROUTING_KEY).build();
    }

    @Bean
    public FanoutExchange emailExchange() {
        return new FanoutExchange(EMAIL_EXCHANGE, true, false);
    }

    @Bean
    public Binding bindingEmailDirect() {
        return BindingBuilder.bind(emailQueue()).to(emailExchange());
    }

    // 声明死信交换机和死信队列
    @Bean
    public Queue deadLetterEmailQueue() {
        return QueueBuilder.durable(DEAD_LETTER_EMAIL_QUEUE).build();
    }

    @Bean
    public DirectExchange deadLetterEmailExchange() {
        return new DirectExchange(DEAD_LETTER_EMAIL_EXCHANGE, true, false);
    }

    @Bean
    public Binding deadLetterEmailBinding() {
        return BindingBuilder.bind(deadLetterEmailQueue()).to(deadLetterEmailExchange()).with(DEAD_LETTER_EMAIL_ROUTING_KEY);
    }
}
```

### Consumer消息消费者处理

```java
public class CommentNoticeConsumer {

    @Autowired
    private EmailUtil emailUtil;

    @RabbitListener(queues = EMAIL_QUEUE)
    public void process(byte[] data) {
        EmailDTO emailDTO = JSON.parseObject(new String(data), EmailDTO.class);
        emailUtil.sendHtmlMail(emailDTO);
        emailUtil.onSuccess(emailDTO);
    }

    @RabbitListener(queues = DEAD_LETTER_EMAIL_QUEUE)
    public void onError(byte[] data) {
        EmailDTO emailDTO = JSON.parseObject(new String(data), EmailDTO.class);
        emailUtil.onError(emailDTO);
    }
}
```

发送Email代码如下

```java
public class EmailUtil {
      public void sendHtmlMail(EmailDTO emailDTO) {
        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);
            Context context = new Context();
            context.setVariables(emailDTO.getCommentMap());
            String process = templateEngine.process(emailDTO.getTemplate(), context);
            mimeMessageHelper.setFrom(email);
            mimeMessageHelper.setTo(emailDTO.getEmail());
            mimeMessageHelper.setSubject(emailDTO.getSubject());
            mimeMessageHelper.setText(process, true);
            javaMailSender.send(mimeMessage);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
```

### Producer消息生产者

```java
    public void sendAuthCode(String username,String authCode) {
        if (!checkEmail(username)) {
            throw new BizException("Please enter the correct email address");
        }
        Map<String, Object> map = new HashMap<>();
        map.put("content", websiteUrl + "/authorize/" + authCode);
        map.put("webUrl", websiteUrl);

        EmailDTO emailDTO = EmailDTO.builder()
                .email(username)
                .subject(CommonConstant.AUTH_CODE)
                .template("authCode.html")
                .commentMap(map)
                .build();
        rabbitTemplate.convertAndSend(EMAIL_EXCHANGE, "*", new Message(JSON.toJSONBytes(emailDTO), new MessageProperties()));
        redisService.set(AUTH_CODE_KEY + username, authCode);
    }
```

## Consumer消息消费者异常处理与死信  

死信是RabbitMQ中的一种消息机制，当你在消费消息时，如果队列里的消息出现以下情况那么该消息将成为“死信”：

1. 消息被否定确认，使用 channel.basicNack 或 channel.basicReject ，并且此时requeue 属性被设置为false。
2. 消息在队列的存活时间超过设置的TTL时间。
3. 消息队列的消息数量已经超过最大队列长度。

死信消息会被RabbitMQ进行特殊处理，如果配置了死信队列信息，那么该消息将会被丢进死信队列中，如果没有配置，则该消息将会被丢弃。

> 当邮件发送异常产生报错时，会重复执行相关代码。执行次数与配置的retry.max-attempts的值相关。当超过重试次数时，如该队列配置死信相关信息则会将该信息发送到死信队列。
