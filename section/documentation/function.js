

// ✅ 함수 정의(선언)

function funcName() {
    // do something
    console.log("Do");
    console.log("Some");
    console.log("thing");
}

// 호이스팅 이슈가 있음 -> JS의 불안정한 점 중 1개
// 함수를 정의한 다음 사용하는 습관 들이기
// 지금은 함수 정의 전에도 호출이 가능함

// 모든 메서드는 곧 함수

// ✅인수(argument) 정의 -> 입력값

// ✅매개변수(parameter)
// 매개변수는 일종의 플레이스 홀더(placeholder)

function funcNameIs(parameter) {
    console.log(`Hi, ${parameter}`);
}

function greet(firstName) {
    console.log(`Hey there, ${firstName}!`);
}

// ✅인수를 대입하지 않으면 인수 자리에 undefined를 출력함
// 인수가 코드에서 이용되어 오류를 일으키지만 않는다면 인수가 없어도 오류를 발생시키지는 않음
greet(); // Hey there, undefined!


// ✅여러 개의 인수를 전달하는 함수 정의
// 인수의 순서가 중요함

function greetTwo(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

greet("Elvis", "Presley"); // Elvis P.


function repeat(str, numTimes) {
    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

// ✅ 반환 키워드(return) -> 출력값

// toUpperCase나 indexOf 같은 내장 메서드는 변수 내의 값을 캡처해서 다른 것으로 전달이 가능
// 반환 키워드는 함수 실행을 중단시킴
// 반환값은 배열, 객체일 수도 있지만 하나의 값만 나옴

function add(x, y) {
    // x, y의 type이 number가 아니면 false값을 반환하고 함수의 실행이 중지됨
    if (typeof x !== "number" || typeof y !== "number") {
        return false;
    } else {
        return x + y;
    }

}

const sum = add(9, 4);

console.log(sum); // 13

