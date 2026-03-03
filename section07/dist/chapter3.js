/**
 * 제네릭 인터페이스
 */
let keyPair = {
    key: "key",
    value: 0,
};
let keyPair2 = {
    key: true,
    value: ["1"],
};
let stringMap = {
    key: "value",
};
let booleanMap = {
    key: true,
};
let stringMap2 = {
    key: "hello",
};
function goToSchool(user) {
    if (user.profile.type !== "student") {
        console.log("잘못오셨습니다.");
        return;
    }
    const school = user.profile.school;
    console.log(`${school}로 등교완료`);
}
const developerUser = {
    name: "박보검",
    profile: {
        type: "developer",
        skill: "TypeScript",
    },
};
const studentUser = {
    name: "홍길동",
    profile: {
        type: "student",
        school: "건국대학교",
    },
};
export {};
