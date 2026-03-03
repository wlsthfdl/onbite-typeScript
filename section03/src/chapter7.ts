/**
 *  타입 좁히기
 *  조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 *  타입을 상황에 따라 좁히는 방법
 */
type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  //타입 가드
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    //null은 이 조건을 통과할 수 없음
    console.log(value.getTime());
  } else if (value && "age" in value) {
    //value가 있을때, age가 value에 있냐 == Person
  }
}
