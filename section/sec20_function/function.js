// ✅함수 function

singSong();

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

console.log("함수 정의 전에  singSong()을 실행해도 가능, 이게 JS의 불안정한 부분 중 하나라고 하네~?. 함수 정의 후 사용하라고 이야기함")

singSong();


// ✅greet(매개변수), 매개변수는 인수가 들어가는 곳
// 여러 개의 인자를 넣을 때 순서가 중요
function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

// 매개변수 미입력 시, undefined 출력됨
// 다중변수 때는 공백 출력이 안되는 듯..?
// greet();

greet("Elvis", "Presley");

function repeat(str, numTimes) {
    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat("h", 5);

// ✅반환값 return
// 반환값은 함수를 중지시킨다. 뒤에 값이 오면 그 값은 실행이 안됨
// 반환값이 배열, 객체일 수도 있지만 1개만 반환된다.
function add(x, y) {
    // 또는 let sum = x + y; return sum;
    return x + y;
}
