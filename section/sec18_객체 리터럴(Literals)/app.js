
// ✅객체는 property라는 키와 값의 쌍
// python의 dictionary

// JS에서 typeOf []는 object로 나옴
// 배열은 순서가 있지만 object는 없음

const person = {fisrtName: 'Mick', lastName: 'Jagger'}

console.log(person);

const kitchenSink = {
    favNum: 129321,
    isFunny: true,
    colors: ['red', 'blue']
};

console.log(kitchenSink);

const nums = [23, 45, 99];

console.log(nums[1]);

// ✅객체에서 정보를 엑세스하는 방법(1)
// person["firstName"]


// ✅객체에서 정보를 엑세스하는 방법(2)
// person.firstName

// 객체에서 모든 key는 string(문자열)로 변환된다. * 기호를 제외하고, boolean, null, 숫자 모두 string으로 변경됨.

// . 과 구문과의 차이점
const years = {
    1999: "GOOD",
    2020: "BAD"
};

let birthyear = 2020

// years.birthyear는 불가능
// years[birthyear]는 가능 -> "BAD"


// ✅객체 수정
const midterms = {
    danielle: 96,
    thomas: 78
};

midterms["thomas"] = 79;
midterms["thomas"] = "C+";

midterms.danielle = 89;

// ✅객체 추가
midterms.ezra = "B+";
midterms["Antonio"] = "A-";


// ✅Array + Objects (중첩)
// 배열 안에 객체, 객체 안에 배열

const comments = [
    {username: "Tammy",
        text: "lololo",
        votes: 9
    },{
        username: "FishBoi",
        text: "glub glub",
        votes: 12387
    }
];

// 호출
// comments[0]["username"]
// comments[0].text