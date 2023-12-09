export type Obj = {
  [key: string]: boolean | number;
};

export type Func = {
  arg1: string;
  arg2: boolean;
  myFunc: () => string;
};

export interface Inumbers {
  a: number;
  b?: number | null;
}

export interface person {
  name: string;
  surname: string;
  parameters: Inumbers;
}
