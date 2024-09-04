const input = document.querySelector("input");

const h1 = document.querySelector("h1");

// ✅change : 변경 입력은 오직 입력을 블러 아웃(blur out)할 때만 발동됨
// 즉 다른 곳에 집중할 때 (다른 동작이 있을 때)
// 입력을 떠날 때 (Enter키를 친다는게 아님)
// 없던 뭔가를 타이핑하고 떠나는 것이 '변경'
input.addEventListener("change", function(e) {
    console.log("dsalfads");
})

// ✅input event : 입력 내의 값이 달라질 때마다 발동하게 하고 싶다면!
// 뭔가 타이핑하면 그게 바로 입력 이벤트가 됨
input.addEventListener("input", function(e) {
    h1.innerText = input.value;
})





// ✅Answer
// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// // input.addEventListener('change', function (e) {
// //     console.log("CASKDJASKJHD")
// // })

// input.addEventListener('input', function (e) {
//     h1.innerText = input.value;
// })