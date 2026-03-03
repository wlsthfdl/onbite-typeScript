/**
 * 프로미스
 */
//resolve 함수: 비동기 작업이 성공했을 때 호출
//reject(실패이유) 함수: 비동기 작업이 실패했을 때 호출
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 3000); //3초 뒤에 resolve호출, 결과값으로 숫자 20 return
});
promise.then((response) => {
    console.log(response * 10);
});
export {};
