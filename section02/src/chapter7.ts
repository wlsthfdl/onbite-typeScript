/** 1. viod 타입 */
function func(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
//a = 1;
//a = "hello";
a = undefined; // 예외적으로 undefined만 가능

/** 2. never 타입 */
//끝나지 않을 경우, 에러/무한루프/타입안정성
function fun3(): never {
  while (true) {}
}

function fun4(): never {
  throw new Error();
}
