---
date: 2024-07-10
category: 前端
tag:
  - 浏览器 密码
---

# 禁止浏览器自动保存密码

## Chromium系内核

### 方法1(测试不生效)

> 向页面中添加假登录表单并隐藏，代码如下

```html
<div style="display:block;opacity: 0;width:0px;height:0px;overflow: hidden">
  <input type="text" name="username" autocomplete="off" />
  <input type="password" name="password" autocomplete="off" readonly />
</div>
```

### 方法2

> form表单设置`autocomplete`值为`off`

```vue
<el-form autocomplete="off">
  ...
</el-form>
```

## Firefox浏览器

> 登录成功跳转页面前清空登录表单即可
