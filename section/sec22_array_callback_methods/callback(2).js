// 콜백 함수는 전달해줘야 하지만 배열 메서드는 아닌 함수들


// ✅setTimeout
console.log("1번째 출력");
// 3초가 지난 뒤 hello 출력
setTimeout(()=> {
    console.log("HELLO!!!")
}, 3000);

console.log("2번째 출력");


// ✅setInterval
// 전달할 함수를 호출하는데 콜백을 매 특정 밀리 초마다 호출하는 함수
// 이 함수는 호출할 때마다 설정해놓은 인터벌에 해당하는 ID를 반환함
// 서로 다른 인터벌로 실행되는 setInterval 함수를 여러 개 호출 가능힘
// 이때 ID를 사용해서 중단하고 싶은 함수를 지정할 수 있음

// 2초마다 random 값 출력 
const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

// 인터벌 중지 명령
// clearInterval(id);

