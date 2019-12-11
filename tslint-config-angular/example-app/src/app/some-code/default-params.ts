export function sum1(x: number, y: number = 0): number {
  return x + y;
}

export function sum2(x: number, y = 0): number { // should fail lint
  return x + y;
}

export function sum3(x: number, y: number): number {
  return x + y;
}
