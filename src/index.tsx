/*
 * @Author: DianaTang
 * @Date: 2024-07-08 16:23:40
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /DT-Web3-Interface/src/index.tsx
 */

type DeepReadonly<T> = T extends Function
  ? T // 如果 T 是函数，直接返回 T
  : T extends Array<infer U>
    ? ReadonlyArray<DeepReadonly<U>> // 如果 T 是数组，递归应用 DeepReadonly 于数组元素
    : T extends object
      ? { readonly [P in keyof T]: DeepReadonly<T[P]> } // 如果 T 是对象，递归应用 DeepReadonly 于每个属性
      : T; // 其他情况，直接返回 T
type cases = [
  Expect<Equal<DeepReadonly<X1>, Expected1>>,
  Expect<Equal<DeepReadonly<X2>, Expected2>>,
];

type X1 = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 'string';
        };
        k: 'hello';
      };
      l: [
        'hi',
        {
          m: ['hey'];
        },
      ];
    };
  };
};

type X2 = { a: string } | { b: number };

type Expected1 = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 'string';
        };
        readonly k: 'hello';
      };
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey'];
        },
      ];
    };
  };
};

type Expected2 = { readonly a: string } | { readonly b: number };

type r = DeepReadonly<X1>;
