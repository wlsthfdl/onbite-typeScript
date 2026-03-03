/**
 * 제네릭
 */
// <T>: 타입변수
function func(value) {
    return value;
}
let num = func(10);
let bool = func(true);
let str = func("string");
let arr = func([1, 2, 3]);
export {};
