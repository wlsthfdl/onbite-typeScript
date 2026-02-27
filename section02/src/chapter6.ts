/** 1. any 타입 */
//특정 변수의 타입을 모를 때
let anyVar: any = 10;

anyVar = "hello";
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

/** 2. unknown 타입 */
// type of로 타입을 정제 후에 사용할 수 있다. (타입 좁히기)
// any 타입보다 조금 더 안전
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number") {
  //typeof는 타입 문자열을 반환
  num = unknownVar;
}
