// import { memoize } from "lodash-es";

const fibonacci = (val: number): number => {
  // console.log({ val });

  if (val === 0 || val === 1) {
    return 1;
  } else {
    return fibonacci(val - 1) + fibonacci(val - 2);
  }
};

export interface FibonacciReturnType {
  value: number;
  fib?: number;
  duration: number | "aborted";
}

export function fibonacciPerf(value: number): FibonacciReturnType {
  const begin = performance.now();

  const fib = fibonacci(value);

  const end = performance.now();

  return { value, fib, duration: end - begin };
}
