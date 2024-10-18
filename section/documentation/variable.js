// ✅ let, const

// let 재선언 불가, 재할당 가능
// const 재선언/재할당 불가

// let, const 작성 없이 선언은 가능하지만 주소값이 할당되지 않아 변수의 유일성을 점검하기 힘듦

// 변하는 값은 let
let name = "Mike";

// ❌ let name = "Kimchi"; 이렇게 재선언은 불가능
// 🟢 name = "Kimchi"; 이렇게 재할당 가능

// 변하지 않는 값은 const

// var은 호이스팅 이슈가 있음

