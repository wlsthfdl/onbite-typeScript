/**
 * 대수 타입
 * --> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * --> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1.합집합 - Union
 */

let a: string | number | boolean;

a = 1;
a = "hello";
a = false;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
}; // union1은 Dog에만 해당

let union2: Union1 = {
  name: "",
  color: "",
  language: "",
}; // union2는 Dog와 Person 중간(교집합)부분에 해당

// let union3: Union1 = {
//   name: "",
// };
// // union3는 name만 가지고 있기 때문에 그 어디에도 해당되지 않음. (Dog | Person의 바깥쪽에 존재)

/**
 * 2. 교집합 타입 - Intersection 타입
 */
let variable: number & string; //variable은 never타입

type Intersection = Dog & Person;
let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
