const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

// 이벤트 버블링을 멈추는 방법.
// function()을 function(e)로 변경
button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandColor();
    // 이벤트가 더이상 버블링하지 않도록 막아줌
    e.stopPropagation();
})``
container.addEventListener('click', function () {
    container.classList.toggle('hide');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}