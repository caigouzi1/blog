---
date: 2024-11-30
category: 前端
tag:
  - TypeScript
---

# TS枚举最佳最佳实践

## 定义枚举工厂类

```ts
<!-- @include: code/EnumFactory.ts -->
```

## 定义枚举类型

```ts
enum Type {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
}

const typeEnumData = new EnumFactory(new Map([
  [Type.Success, { label: '成功' }],
  [Type.Error, { label: '错误' }],
  [Type.Warning, { label: '警告' }],
]));

enum Status {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
}

const statusEnumData = new EnumFactory<Status, { label: string， color: string }>(new Map([
  [Type.Success, { label: '成功', color: '#00ff00' }],
  [Type.Error, { label: '错误', color: '#ff0000' }],
  [Type.Warning, { label: '警告', color: '#ffff00' }],
]));
```

## 项目中使用

### 下拉列表

```vue
<template>
  <ElSelect>
    <ElOption v-for="item in typeEnumData.list" :key="item.value" :value="item.value" :label="item.label" />
  </ElSelect>
</template>

<script setup type="ts">
import { typeEnumData } from '@/typeData' 
</script>
```

### 在表格中使用

```vue
<template>
  <ElTable>
    <ElTableColumn prop="type" label="类型" width="100" >
      <template #default="{row }">
        <ElTag :color="statusEnumData.valueOf(row.type).color" >{{ typeEnumData.valueOf(row.type).label }}</ElTag>
      </template>
    </ElTableColumn>
  </ElTable>
</template>

<script setup type="ts">
import { statusEnumData } from '@/typeData' 
</script>
```
