import { Option } from "effect";

export const getSafe = <T>(xs: T[], i: number): Option.Option<T> => {
  return i >= 0 && i < xs.length ? Option.some(xs[i]) : Option.none();
};

export const findSafe = <T>(xs: T[], el: T): Option.Option<number> => {
  const index = xs.indexOf(el);
  return index !== -1 ? Option.some(index) : Option.none();
};
