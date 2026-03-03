/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }
type Person = typeof person; //person 타입을 뽑아낸다.

function getPropertyKey(person: Person, key: keyof typeof person) {
  //typeof person는 Person을 뜻함
  return person[key];
}

const person = {
  name: "박보검",
  age: 33,
};

getPropertyKey(person, "name");

typeof person === "object";
