/**
 * 프로미스
 */

//resolve 함수: 비동기 작업이 성공했을 때 호출
//reject(실패이유) 함수: 비동기 작업이 실패했을 때 호출
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //resolve(20);
    reject("~ 때문에 실패");
  }, 3000); //3초 뒤에 resolve호출, 결과값으로 숫자 20 return
});

//resolve 성공
promise.then((response) => {
  console.log(response * 10); //200
  // 기본적으로는 unknown타입이지만, Promise에 결과값의 타입변수(<number>) 정의 설정
});

//reject 실패
promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

//promise타입 <Post>를 상단에 정의하면 가독성이 좋아진다.
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
