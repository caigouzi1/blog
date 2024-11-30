type EnumFactoryValue<T, K> = { value: T } & K;

export default class EnumFactory<T extends string | number, K = { label: string }> {
  enumObj: Map<T, EnumFactoryValue<T, K>>;

  list: EnumFactoryValue<T, K>[];

  constructor(enumMap: Map<T, K>) {
    this.enumObj = new Map();

    enumMap.forEach((item, key) => {
      this.enumObj.set(key, { ...item, value: key });
    });

    this.list = Array.from(this.enumObj.values());
  }

  valueOf(val: T): EnumFactoryValue<T, K> {
    const result = this.enumObj.get(val);
    if (result) {
      return result
    } else {
      throw new Error(`无效的枚举值: ${val}`);
    }
  }
}
