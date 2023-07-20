---
date: 2023-07-06
category: 后端
tag:
  - Spring
  - Java
---

# 使用Spring Security鉴权及异常捕获

## 添加依赖 Spring Security 依赖

```xml
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
  </dependency>
```

## 过滤器配置

[参考文档](https://docs.spring.io/spring-security/reference/servlet/configuration/java.html)

```java
@EnableWebSecurity
@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // permitAll表示允许未登录的状态下访问
        // denyAll表示未登录的状态下禁止访问
        http.authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/resources/**", "/user/**").permitAll()
                .requestMatchers("/user/**").permitAll()
                .requestMatchers("/error").permitAll()
                // 其他请求都需要校验登录状态
                .anyRequest().authenticated()
        //  关闭csrf，否则用户未登录时无法发送post请求
        ).csrf(AbstractHttpConfigurer::disable);

        return http.build();
    }
}
```

## Security登录相关工具类

```java
import com.caigouzi1.webServer.entity.User;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

public class SpringSecurityUtil {

    public static void login(User user) {
        HttpServletRequest request = ((ServletRequestAttributes) (RequestContextHolder.currentRequestAttributes())).getRequest();
        // 构造用户认证信息
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(user, user.getPassword(), null);
        // 将认证信息存储在 SecurityContextHolder 中
        SecurityContextHolder.getContext().setAuthentication(token);
        // 生成session下发给浏览器
        request.getSession().setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY, SecurityContextHolder.getContext());
    }


    public static User getCurrentUser() {
        // 从SecurityContextHolder中取出保存的用户登录信息
        var user = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        // 当用户未授权是抛出异常信息
        if (!SecurityContextHolder.getContext().getAuthentication().isAuthenticated()) {
            throw new AuthorizationError("用户未登录");
        }

        return (User) user;
    }


    public static boolean isLogin() {
        // 判断用户是否已登录
        return !(SecurityContextHolder.getContext().getAuthentication() instanceof AnonymousAuthenticationToken);
    }


    public static void logout() {
        HttpServletRequest request = ((ServletRequestAttributes) (RequestContextHolder.currentRequestAttributes())).getRequest();
         // 从SecurityContextHolder设置为空
        SecurityContextHolder.getContext().setAuthentication(null);
        // Session设置失效
        request.getSession().invalidate();
    }
}
```

## 使用Spring Session将session信息存储在Redis中

[参考文档](https://docs.spring.io/spring-session/reference/getting-started/using-redis.html)

1. 添加依赖

    ```xml
        <dependency>
          <groupId>org.springframework.session</groupId>
          <artifactId>spring-session-data-redis</artifactId>
        </dependency>
        <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>
    ```

1. 配置创建SessionConfig类

    ```java
    @Configuration(proxyBeanMethods = false)
    @EnableRedisHttpSession(redisNamespace = "spring:session:order")
    public class SessionConfig implements BeanClassLoaderAware {

        private ClassLoader loader;

        @Bean
        public RedisSerializer<Object> springSessionDefaultRedisSerializer() {
            return new GenericJackson2JsonRedisSerializer(objectMapper());
        }

        /**
        * Customized {@link ObjectMapper} to add mix-in for class that doesn't have default
        * constructors
        *
        * @return the {@link ObjectMapper} to use
        */
        private ObjectMapper objectMapper() {
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModules(SecurityJackson2Modules.getModules(this.loader));
            return mapper;
        }

        /*
        * @see
        * org.springframework.beans.factory.BeanClassLoaderAware#setBeanClassLoader(java.lang
        * .ClassLoader)
        */
        @Override
        public void setBeanClassLoader(ClassLoader classLoader) {
            this.loader = classLoader;
        }
    }
    ```

1. User类添加注解支持JSON转换

      ```java
      @Data
      @TableName("user")
      @JsonDeserialize
      @JsonSerialize
      public class User {

          @TableId(type = IdType.AUTO)
          private Integer id;

          private String username;

          private String password;

          private String phone;

          private Byte disable;

          private String salt;

          private LocalDateTime lastLoginTime;

          @TableField(fill = FieldFill.INSERT)
          private LocalDateTime createTime;

          @TableField(fill = FieldFill.UPDATE)
          private LocalDateTime updateTime;
      }
      ```

## 全局异常捕获

[参考文档](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-exceptionhandler.html)

1. 创建用户为授权的异常类

    ```java
    public class AuthorizationError extends RuntimeException {

        public AuthorizationError(String msg) {
            super(msg);
        }
    }
    ```

1. 创建异常捕获控制器

    ```java
    import com.caigouzi1.webServer.exception.AuthorizationError;
    import com.caigouzi1.webServer.model.vo.ResultVO;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.ExceptionHandler;
    import org.springframework.web.bind.annotation.ResponseBody;
    import org.springframework.web.bind.annotation.RestControllerAdvice;


    @RestControllerAdvice
    public class ErrorController {

        @ExceptionHandler(AuthorizationError.class)
        @ResponseBody
        public ResponseEntity<ResultVO<Object>> handlerAuthorizationError(Exception ex) {
            // 返回数据并将http状态码设置为401
            return new ResponseEntity<>(ResultVO.fail(ex.getMessage()), HttpStatus.UNAUTHORIZED);
        }
    }
    ```
