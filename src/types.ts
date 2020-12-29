export type MappedUnion<T extends string> = {
  [k in T]: string;
};
