//Object
//구조적 타입 시스템
//Property Based Type System
// 1)
let user = {
    id: 1,
    name: "김진솔",
};
user = {
    name: "홍길동", //id가 없어도 됨
};
// 2)
let config = {
    apiKey: "MY API KEY",
};
export {};
//config.apiKey = "hacked";  >> 읽기전용 속성이므로 할당할 수 없습니다.
