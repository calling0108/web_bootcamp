// ✅scope(범위)
// 범위는 Variable visibility(변수 가시성)을 참조함
// 변수를 JS의 어느 부분에 정의하느냐가 액세스 지점을 결정함
// 전역변수 vs 지역변수 이야기하는 거네~


function bird() {
    let b = "abd";
    console.log(b);
}

let b = "kimchi";
bird();
console.log(b);

// ✅block Scope(블록 범위) 
// block은 함수를 제외하고 중괄호가 있는 모든 곳을 가리킴
// 조건문과 루프
// 변수 선언 var은 변수의 범위가 함수로 지정되지만 블록으로 지정되지는 않음
// let & const는 블록 범위
// let & const를 사용하는 이유가 됨. 유효 범위 변수 지정

let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = "HIII!";
}

console.log(radius);
// console.log(PI); 출력 안됨
// console.log(msg); 출력 안됨


// ✅Lexical Scope(렉시컬 범위)
// 부모 함수의 안에 중첩된 내부 함수는 해당 외부 함수의 범위에나 또는 범위 내에서 정의된 변수에 액세스할 수 있다
// 상위 몇 레벨 위에 있든 상관 없이 부모 함수나 조부모 함수 등이 액세스하는 동일한 항목에 액세스할 수 있음

function bankRobbery() {
    const heroes = ["Spiderman", "Wolverine", "Black Panther"];

    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`Please help us, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}

bankRobbery();

// ✅Function expressions(함수 표현식)
// 변수 안에 함수를 저장하는 표현 방식

// 함수 선언 후 함수명 선언을 하지 않고 바로 매개변수 형성
// 함수명 대신 변수명 사용
const add = function(x,y) {
    return x + y;
}

// 호출방법
add(3, 4);

// 기본적으로 JS는 함수를 배열 같은 값의 하나로 간주함


// ✅Higher Order Fucntions(고차함수)
// ✅고차함수(1) - 타함수를 인자로 받기
// 다른 함수와 작동하거나 다른 함수에서 작동하는 함수를 고급스럽게 표현한 것
// 다른 함수를 인수로 받아서 보통은 그 인수로 어떤 작업을 하는 함수이자 또 함수를 반환할 수 있는 함수

function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

// callTwice(rollDie()); 는 rollDie()함수를 실행한 결과값이 callTwice()의 인자로 들어가기에 실행이 안됨
callTwice(rollDie);

// ✅고차함수(2) - 함수를 값으로 반환하기

function makeMysteryFucn() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log("Congrats, I am a good function!");
            console.log("You win a million dallars!!");
        }
    } else {
        return function() {
            // alert("You have been infected by a computer virus!!");
            // alert("Stop trying to close this window!");
            console.log("You have been infected by a computer virus!!");
            console.log("Stop trying to close this window!");
        }
    }
}

const mystery = makeMysteryFucn();
mystery();

// 팩토리 함수 : 함수를 만들어주는 함수
function makeBetweenFunc(min, max) {
    // 함수명이 없음
    return function(num) {
        return num >= min && num <= max;
    }
}

// 만들어진 함수를 다양한 변수명에 적용해서 호출 가능
const isChild = makeBetweenFunc(0, 18);

isChild(29);
isChild(5); 

const isAdult = makeBetweenFunc(19, 60);

const isSenior = makeBetweenFunc(61, 100);




// num가 50보다 크고 100보다 작은지 확인하는 함수, true/false로 반환되어 확인 가능함
function isBetween(num) {
    return num >= 50 && num <= 100;
}

// ✅Method(메서드)
// 메서드는 객체에 종속된 특성으로 함수에 포함되는 개념
// 모든 메서드는 함수이지만 모든 함수가 메서드인 건 아님

const myMath = {
    PI: 3.14159,
    // 속기법
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
    // 기본 작성법
    // square: function(num) {
    //     return num * num;
    // },
    // cube: function(num) {
    //     return num ** 3;
    // }
}

// PI는 value값이 함수가 아니기에 ()를 붙이지 않음
myMath.PI

myMath.square(3);
myMath.cube(2);


// ✅ 'This' in Methods
// 메서드에 있는 객체를 가리킬 때 this 키워드를 사용

const cat = {
    name: "Blue Steele",
    color: "grey",
    breed: "scottish fold",
    meow() {
        // 여기서 this는 cat 객체를 가리킴
        console.log(`${this.name} says MEOWWWW`);
        console.log("This is", this);
    }
}

cat.meow();

// 호출 컨텍스트 차이로 this가 가리키는 객체가 달라짐
const meow2 = cat.meow;

// this는 .(point)의 왼쪽을 가리킴, 지금 같은 경우는 window 객체(JS 최상위 객체)를 가리킴
meow2();

// 브라우저 콘솔에 window를 치면 기본값이 나옴