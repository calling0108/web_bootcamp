
// ✅REST

// sum(argument)에서 인수란이 비워지면 어떤 값이든 들어갈 수 있음
// 동시에 배열 객체가 아니기에 sum, reduce 등의 메서드를 사용할 수 없음

// function sum() {
//     return arguments.reduce((total, el) => total + el);
// }


// Rest 연산자는 점 세 개로 만들고 매개변수 목록에 들어감
function sum(...nums) {
    console.log(nums);
    return nums.reduce((total, el) => total + el);
}

// 매개변수에 몇 개를 넣어도 가능함
const totalSum = sum(2, 23, 3, 1, 2, 1, 123, 12, 12, 31, 2);


// 처음 2개 매개변수 입력 후, 나머지는 모든 참가자로 모으기
function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold Medal goes to: ${gold}`);
    console.log(`Silver Medal goes to: ${silver}`);
    console.log(`And thanks to everyone else: ${everyoneElse}`);
}

raceResults("tina", "kimchi", "luke", "laod", "skaf", "sdialsdf");