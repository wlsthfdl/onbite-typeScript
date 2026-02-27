/** enum 타입 */
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0, //숫자할당을 제거해도 자동으로 0,1,2,... 할당됨
  USER = 1,
  GUEST = 2,
}
enum Language {
  korean = "ko",
  english = "en",
}
const user1 = {
  name: "홍길동",
  role: Role.ADMIN,
  language: Language.korean,
};

const user2 = {
  name: "아무개",
  role: Role.GUEST,
};

console.log(user1, user2);
//{ name: '홍길동', role: 0 } { name: '아무개', role: 2 }
