// ✅spread(확장) "..."
// 배열과 같이 반복 가능한 객체를 전개 구문을 사용해서 확장
// 정보의 소스를 펼쳐서 다른 용도로 만드는 것!

const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7];

// 배열을 인수로 전개함
Math.max(...nums); // 21
Math.min(...nums); // 1

console.log(nums);
console.log(...nums);

console.log("hello");
console.log(..."hello");
console.log("h", "e", "l");


const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

// 전개를 이용한 새로운 배열 만들기
const allPets = [...cats, ...dogs, "speedy"];

const arr = ["hello"];
const spreadArr = [..."hello"];

// ✅ Spread in Object Literals (객체 리터럴에서 전개를 사용하는 경우)
// 왜 전개를 사용하는가? 왜 새로운 객체를 만드는가?
// 객체를 복사할 때는 라이브러리나 React 도구로 작업할 때
// 나중에 중요함. 객체를 변형하지 않고 복사하는 방법을 배우는 것



// feline : 고양이과, canline: 개과

const feline = {legs: 4, family: "Feliadae"};
const canline = {isFurry: true, family: "Caninae"};

// 고양이과 특성 추가
let objectSpread = {...feline, color: "Black"};

// 순서에 따라 중복되는 특성 덮어쓰기가 달라짐 -> 뒤에 오는 특성으로 덮어짐
const catDog = {...feline, ...canline};

const dogCat = {...canline, ...feline};

const newDogCat = {...canline, ...feline, family: "Steele"};

console.log(catDog);
console.log(dogCat);
console.log(newDogCat);

const newObject = {...[2, 4, 6, 8]};

console.log(newObject);


// 복사하는 경우_데이터를 예로 들면
// 아래 정보를 묶어서 새로운 객체를 만들고 정보를 추가하기
// 사용자가 웹사이트에 등록하려면 아래 정보를 모두 제공해야 함

const dataFromForm = {
    email: "Blueman@gmail.com",
    password: "tobias123!",
    username: "tfunke"
};

const newUser = {...dataFromForm, id: 2345, isAdmin: false};