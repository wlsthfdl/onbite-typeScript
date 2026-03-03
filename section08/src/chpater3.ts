/**
 *  맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// mapped타입은 interface 불가. type별칭으로만 사용
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key]; // key?: value
};

type BooleanUser = {
  [p in keyof User]?: boolean;
};

type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};

//한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadOnlyUser {
  ///... 기능
  return {
    id: 1,
    name: "박보검",
    age: 33,
  };
}

function updateUser(user: PartialUser) {
  //..수정하는 기능
}

//선택적으로 원하는 프로퍼티만 보내기가 어렵다. --> mapped 타입
updateUser({});
