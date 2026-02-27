/** 1. 타입 별칭 */
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  location: string;
  extra?: string;
};

function func() {
  type User = {}; //func 안에서는 User를 또 정의해줘도 된다.
}

let user: User = {
  id: 1,
  name: "김미미",
  nickname: "wlsthfdl",
  birth: "1234.11.11",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "박보검",
  nickname: "babBuger",
  birth: "1111.11.11",
  location: "서울특별시",
};

/** 2. 인덱스 시그니처 */
type ContryCodes = {
  [key: string]: string;
  //[key: key의 type] : value의 type
};

let contryCodes: ContryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type ContryNumCodes = {
  [key: string]: number;
  //Korea: string;      >>라고 쓴다면 Korea:number 프로퍼티는 꼭 있어야함
};

let contryNumCodes: ContryNumCodes = {
  UnitedState: 840,
  UnitedKingdom: 826,
};
