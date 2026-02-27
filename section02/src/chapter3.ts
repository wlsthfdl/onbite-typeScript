//Object
//구조적 타입 시스템
//Property Based Type System

// 1)
let user: {
  id?: number; // ? (Optional Property) : id프로퍼티가 있어도 되고 없어도 된다.
  name: string;
} = {
  id: 1,
  name: "김진솔",
};

user = {
  name: "홍길동", //id가 없어도 됨
};

// 2)
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

//config.apiKey = "hacked";  >> 읽기전용 속성이므로 할당할 수 없습니다.
