/**
 *  타입 추론
 */

let a = 10; //변수의 타입을 알아서 추론해준다.
let b = "hello"; //초깃값을 기준으로 추론해준다.

let c = {
  id: 1,
  name: "박보검",
  urls: ["http://..."],
};

//암묵적 any타입의 진화 (추천하지 않음)
let d; //any
d = 10; //any
d.toFixed(); //number

d = "hello"; //any
d.toUpperCase(); //string
//d.toFixed();      x

const num = 10;
const str = "hello";

let arr = [1, "string"];

/**
 *  + 
 * let의 타입추론 : 타입을 넓게 추론
 * const의 타입추론: 타입을 좁게(리터럴 그대로) 추론
 * 
    ex) 
    let num = 10;       //number
    const num2 = 10;    //10


    단, const obj = { name: "kim" };
    ==> 이럴 때는 string   (객체는 기본적으로 넓어짐, as const 필요)

 */
