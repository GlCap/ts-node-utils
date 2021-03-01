import type { RequiredAndNotNull } from '../types';

export const hasAllKeys = <T extends Record<string, any>>(
  obj: T,
): obj is RequiredAndNotNull<T> => {
  const keys = Object.keys(obj);

  for (const k of keys) {
    if (obj[k] == null) return false;
  }

  return true;
};
