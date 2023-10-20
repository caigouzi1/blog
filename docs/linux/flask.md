---
date: 2023-10-20
category: 后端
tag:
  - Flask
---

# Flask联调过程中问题处理

## 静态文件访问添加前缀

```python
app = Flask(__name__, static_folder='static', static_url_path="/api/static")
```

> static_folder 参数确定静态文件访问路径  
> static_url_path 静态文件的访问前缀

参考文档：[application-object](https://flask.github.net.cn/api.html#application-object)
