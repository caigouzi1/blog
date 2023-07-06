---
date: 2023-07-06
category: 后端
tag:
  - Spring
  - Java
---

# Spring Security鉴权相关

## 过滤器配置

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
                .anyRequest().denyAll()
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
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(user, user.getPassword());
        // 将认证信息存储在 SecurityContextHolder 中
        SecurityContextHolder.getContext().setAuthentication(token);
        // 生成session下发给浏览器
        request.getSession().setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY, SecurityContextHolder.getContext());
    }

    public static User getCurrentUser() {
        // 从SecurityContextHolder中取出保存的用户登录信息
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }


    public static boolean isLogin() {
        // 判断用户是否已登录
        return !(SecurityContextHolder.getContext().getAuthentication() instanceof AnonymousAuthenticationToken);
    }
}
```
