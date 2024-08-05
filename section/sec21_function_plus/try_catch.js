// ✅ try, catch
// 둘은 별개지만 항상 함께 일하며 JS의 오류 및 예외를 처리함
// 특히 오류를 잡아내서 코드 실행이 정지되거나 중단되지 않도록 하는 역할을 함

// 오류가 예상되면 try문으로 감싸주기
try {
    hello.toUpperCase();
} catch {
    console.log("ERROR!!!!");
}

// 위 구문이 error 발생할 경우 아래 "After"문이 실행되지 않음
console.log("After");

// 비동기 함수를 다룰 때 더 자세히 배울 것
// node와 express에서는 항상 try, catch를 사용하게 될 것

// 간단한 예시

function yell(msg) {
    // toUpperCase()에 문자열 외 숫자, 배열 등이 입력될 경우 에러가 발생함
    try {
        console.log(msg.toUpperCase().repeat(3))
    } catch (e) {
        console.log("Please pass a string next time!")
    }
}