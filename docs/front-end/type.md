---
date: 2024-07-18
category: 前端
tag:
  - TypeScript
---

# TypeScript相关

## TS常用类型定义

### Tree树类型定义

> Tree类型使用泛型，第一个参数是节点的数据类型，第二个参数是子节点属性的名称

```ts
type Tree<T, C extends string = 'children'> = T & { [K in C]?: Array<Tree<T, C>> };
```


用例

```ts
interface ITest {
  a: number,
  b: number
}

type TestTree = Tree<ITest>


// 等同于

interface ITest {
  a: number,
  b: number,
  children?: ITest
}
```

### 将Object类型中的某些key改为选填属性

```ts
type PartiallyOptional<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>;
```

用例

```ts
interface ITest {
  a: number,
  b: number,
  c: number,
  d: number,
}

PartiallyOptional<ITest, 'a' | 'b'>

// 等同于

interface ITest {
  a?: number,
  b?: number,
  c: number,
  d: number,
}
```

### 提取对象的部分属性并将其设置为可选项

```ts
  type PartialPick<Type, Keys> = Partial<Pick<Type, Keys>>;
```

用例

```ts
interface ITest {
  a: number,
  b: number,
  c: number,
  d: number,
}

PartialPick<ITest, 'a' | 'b'>

// 等同于

interface ITest {
  a?: number,
  b?: number
}
``
