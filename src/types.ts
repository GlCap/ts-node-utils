export type MappedUnion<T extends string> = {
  [k in T]: string;
};

export type RequiredAndNotNull<T> = {
  [P in keyof T]-?: Exclude<T[P], null | undefined>;
};
