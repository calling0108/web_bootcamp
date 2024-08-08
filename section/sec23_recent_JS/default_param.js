// ✅default params(디폴트 매개변수)

// Old way
// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

// New way
// numSides의 default값이 6이고, 다른 값을 넣으면 그게 numSides의 값이 됨
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

function multiply(a, b = 1) {
    return a * b;
}

// 디폴트 매개변수는 디폴트 값이 없는 매개변수 뒤에 있어야 함
function greet(person, msg = "Hey there", punc = "!") {
    console.log(`${msg}, ${person}${punc}`);
}

greet("Kim");