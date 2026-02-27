/**
 * unknown 타입 (최상위)
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  let f: number = 1;

  let unknownVar: unknown;
  unknownVar = f; // (O)
  //f = unknownVar;  (X)
}

/**
 * Never 타입 (최하위)
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc(); //업캐스팅

  //let never1: never = "string"; //다운캐스팅

  //==> never타입에는 아무런 값도 저장할 수가 없음.
}

/**
 * Void 타입 (중간에있다)
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined; //undefined가 void를 업캐스팅하기 때문에 가능
  }

  let voidVar: void = undefined;
}

/**
 * any 타입 (치트키)
 * 특수적으로 모든 룰을 무시할 수 있다(never만 빼고)
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = undefinedVar; //다운캐스팅이지만, 특수적으로 가능함
  undefinedVar = anyVar; //업캐스팅

  //neverVar = anyVar;    //다운캐스팅 : 특수적으로 never는 또 안됨

  // ==> 위험한 타입
}
