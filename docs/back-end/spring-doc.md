---
date: 2023-06-19
category: 后端
tag:
  - Spring
  - Java
---

# Spring Boot基础配置

## 查找Spring Boot的配置项

Spring Boot支持配置静态文件代理，但需注意不同版本的配置项存在差异。需根据使用的版本查看具体配置项。

[最新版本配置项文档地址](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#appendix.application-properties)  
[历史版本文档访问地址](https://docs.spring.io/spring-boot/docs/)  
[spring中文文档](https://springdoc.cn/)  

## 静态文件目录代理

在文档中搜索`static-locations`配置项，该配置项为需要静态代理的目录。配置如下

`spring-boot`2.3.7版本的配置参数：

```yaml
spring:
  resources:
    static-locations: classpath:/META-INF/resources/, file:D:/test/, classpath:/resources/, classpath:/static/, classpath:/public/ classpath:templates/
```

## 基础配置参考

```yaml
  <!-- @include: code/spring.yml -->
```
