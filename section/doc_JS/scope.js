
// ✅ 함수 범위 (function scope)

let bird = "Scarlet Macaw";

function birdWatch() {
    bird = "Great Blue Heron";
    console.log(bird);
}

console.log(bird); // Scarlet Macaw

birdWatch(); // Great Blue Heron

console.log(bird); // Great Blue Heron

// 만약 아래와 같다면
// function birdWatch() {
//     let bird = "Great Blue Heron";
//     console.log(bird);
// } 

//  console.log(bird)는 Scarlet Macaw이 출력됨


// ✅블록 범위(Block scope)
// 블록 : 함수를 제외하고 중괄호가 있는 모든 곳
// 블록에는 조건문과 루프 같은게 많이 들어있음

let radius = 8;

if (radius > 0) {
    const PI = 3.14159;
    let msg = "Hiii!!";
}

console.log(radius);
// console.log(PI); // 오류 발생
// console.log(msg); // 오류 발생


// let 정의는 변수의 번위가 블록으로 지정됨
// var 정의는 변수의 범위가 전역/함수로 지정됨
for (let i = 0; i < 5; i++) {
    var msg = "ASFADFSADFASDF";
    console.log(msg);
}

console.log(msg); // ASFADFSADFASDF
// console.log(i); // 에러 발생

// ✅ let과 const를 사용하는 이유 : 유효 범위 규칙을 따르는 변수들을 추가하기 위해서.

// ✅ scope chain(스코프 체인)
//  내부 함수에서는 외부 함수의 변수에 접근 가능하지만, 외부 함수에서는 내부 함수의 변수에 접근할 수 없음
// 모든 함수는 전역 객체에 접근할 수 있음

