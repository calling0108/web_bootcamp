// ✅forEach 메서드
// 함수를 인수로 받아들임
// for..of loop 등장 전 많이 사용되었음
// 배열 안의 아이템 각각에 대해 함수와 코드를 한번씩 실행함

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// 이미 정의한 함수를 forEach로 사용하는 법
// function print(element) {
//     console.log(element);
// }

// numberes.forEach(print);

// 한 줄로 해결방법

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }

})

// for..of loop

for (let el of numbers) {
    console.log(el);
}


const movies = [
    {
        title: "Amadeus",
        score: 99
    },
    {
        title: "Stand By Me",
        score: 85
    },
    {
        title: "Parasite",
        score: 95
    },
    {
        title: "Alien",
        score: 90
    },
]

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`)
// })

// ✅ MAP
// 콜백 함수를 수령해서 배열의 요소당 1번씩 실행한다는 점에서 forEach와 비슷함
// 차이점 : 그 다음에 그 콜백의 반환값을 이용해서 새로운 배열을 생성한다는 것
// 즉, 배열 을 다른 상태로 매핑하는 것

const doubles = numbers.map(function (num) {
    return num * 2;
})

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})


// ✅ Arrow function
// function 키워드가 없어도 함수 입력 가능
// 함수는 값이기에 함수명 없이 단독으로 존재 불가, 화살표도 마찬가지

// const add = (x, y) => {
//     return x + y;
// }

// 매개변수가 1개일 때는 괄호가 없어도 가능
const square = x => {
    return x * x;
}

// 매개변수가 없을 때는 공백도 가능
// const rollDie = () => {
//     return Math.floor(Math.random() * 6 + 1);
// }

// ✅암시적 반환 : 화살표 함수는 특정 상황에서 반환하기 위해 return을 뺄 수 있음
// 함수의 바디에 표현식이 1개만 있어 그 값이 유일할 때 작동함

// 중괄호를 괄호로 바꾸기

const rollDie = () => (
    Math.floor(Math.random() * 6 + 1)
)

// 괄호 제거
const add = (a, b) => a + b


// ✅ 요약 정리

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score}/100`
// })

// 문자열 템플릿일 경우 이렇게 하진 않겠지만..! 한 줄로 가능함!
const newMovies = movies.map(movie => `${movie.title} - ${movie.score}/10`
)