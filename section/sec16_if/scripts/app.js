// console.log("ITS WORKING!!!")

// if (1 + 1 === 2) {
//     console.log("MATH STILL WORKS!")
// }

// let random = Math.random();

// if (random < 0.5) {
//     console.log("lower than 0.5".toUpperCase())
// } else {
//     console.log("your number is greater (or equal) than 0.5!!!".toUpperCase())
// }
// console.log("random value: " + random)


// ✅조건문 중첩(nesting)
// const password = prompt("please enter a new password");

// if (password.length >= 6) {
//     // ✅indexOf : 주어진 요소를 찾을 수 없을 때 -1, 찾을 수 있을 때 0을 반환
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid Password!")
//     } else {
//         console.log("Password cannot contain spaces!")
//     }
// } else {
//     console.log("password too short! must be 6+ characters".toUpperCase())
// }

// ✅AND 논리 함수
// const password = prompt("Enter your password")
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("VALID PASSWORD")
// } else {
//     console.log("INCORRECT FORMAT FOR PASSWORD!")
// }

// ✅OR 논리 함수
// const age = -1;
// // AND가 OR보다 먼저 실행됨, 괄호 표기는 더 명확하게 표현할 수 있음
// if ((age >= 0 && age < 5) || age >= 65) {
//     console.log("FREE");
// }
// // 나이가 음수일 경우 age < 10에 포함되므로 앞에 age >= 5를 넣어줌 
// else if (age >= 5 && age < 10) {
//     console.log("$10");
// } else if (age >= 10 && age < 65) {
//     console.log("$20");
// } else {
//     console.log("INVALID AGE!")
// }

// ✅NOT 논리 함수
// let firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN!");
// }

// const age = 8;
// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log("YOU ARE NOT A BABY OR A SENIOR!")
// }

// ✅switch 조건문
// switch조건문은 적절한 값을 찾은 case부터 종단점까지 계속 실행됨. 그래서 break가 필요함
const day = 2;
switch (day) {
    case 1:
        console.log("MONDAY!");
        break;
    case 2:
        console.log("TUESDAY!");
        break;
    case 3:
        console.log("WEDNESDAY!");
        break;
    case 4:
        console.log("THURSDAY!");
        break;
    case 5:
        console.log("FRIDAY!");
        break;
    case 6:
    case 7:
        console.log("WEEKEND!");
        break;
    default:
        console.log("I DONT KNOW THAT!");
}