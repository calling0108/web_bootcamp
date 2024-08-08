
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

// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }