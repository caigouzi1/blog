---
date: 2023-08-15
category: 开发者手册
tag:
  - SQL
---

# SQL使用

## 导出MySQL数据库中的表结构

```sql
SELECT
 COLUMN_NAME 列名,
 COLUMN_TYPE 数据类型,
 DATA_TYPE 字段类型,
 IF(IS_NULLABLE='NO','否','是') 是否为空,
 COLUMN_DEFAULT 默认值,
 COLUMN_COMMENT 备注,
 TABLE_NAME  表名
FROM
  INFORMATION_SCHEMA.COLUMNS 
WHERE 
  TABLE_SCHEMA = '数据库名称' 
AND TABLE_NAME = '您的表名称'
```

将查询结果导出即可。

> MySQL的INFORMATION_SCHEMA为系统默认库，存储数据库相关信息。  
> COLUMNS表： 存储设置的列的相关信息。

## MySQL数据备份和恢复

```sh
# 备份
mysqldump -u 用户名 -p 数据库名 > 备份文件名.sql
mysqldump -u 用户名 -p 数据库名 表名 > 备份文件名.sql

# 恢复
mysql -u用户名 -p 数据库名 < 备份文件名.sql
```
