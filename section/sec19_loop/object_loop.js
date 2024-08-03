const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// ✅객체 반복 방법(1) : for..in loop

for (let person in testScores) {
    console.log(person);
}

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}


// ✅객체 반복 방법(2) : Object.keys(values, entries)
// Object.keys/values/entries 각각 키, 값, 키-값을 배열(array) 형태로 만들어 줌
// score의 총합을 구하는 상황
let total = 0;

for (let score of Object.values(testScores)) {
    total += score;
}
console.log(total);

// score의 평균 구하는 상황
let scores = Object.values(testScores);

console.log(total / scores.length);