
// ✅ getElementById() : 요소 선택 메서드
// ID로 선택할 때만 작용, class는 작용하지 않음
// 이용하려는 요소를 객체로 나타냄

// banner라는 ID를 가진 요소를 변수에 저장
const banner = document.getElementById("banner");

// banner 변수에 대한 정보 보여줌
// console.dir(banner);

const toc = document.getElementById("toc");

// console.dir(toc);


// ✅getElementsByTagName (복수형)
// HTMLcollection을 반환함 -> 배열로 보이나 아님

const allImages = document.getElementsByTagName("img");

console.log(allImages[0]);
console.log(allImages);

for (let img of allImages) {
    console.log(img.src);
}

// ✅getElementsByClassName (복수형)
// 클래스로 선택

const squareImages = document.getElementsByClassName("square");

for (let img of squareImages) {
    img.src = "https://images.unsplash.com/photo-1722778610374-3064fe20ae83?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
}

// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }



// ✅querySelector

// querySelector는 첫번째로 일치하는 값을 준다
document.querySelector("p");

// ID 선택
document.querySelector("#banner");

// class 선택
document.querySelector(".square");

// 2번째 이미지 선택
document.querySelector("img:nth-of-type(2)");

// title "java"를 가지고 있는 a 태그 선택
document.querySelector("a[title='java']");

// ✅querySelectorAll
// 일치하는 모든 요소를 반환

document.querySelectorAll("a");

// 반복 처리
// const links = document.querySelectorAll("p a");

// for (let link of links) {
//     // var.href: 모든 a태그 출처 출력
//     console.log(link.href);
// }

