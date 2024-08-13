
// ✅onclick
const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

// ✅onmouseenter
function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;



document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}

// ✅addEventListener
// addEventListener("어떤 행동", function() {})
// function의 자리에 미리 설정해둔 함수명을 넣어도 가능 e.g. scream
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})

// addEventListener 사용 이유 예시
function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// 함수가 덮어쓰기되어 하나 이상 값을 줄 수 없음
// tasButton.onclick = twist;
// tasButton.onclick = shout;

// 몇 개를 설정해도 값이 출력됨.
// 다양한 옵션을 설정할 수 있음
// e.g. once: 처음 한번 실행, 이후 실행 안됨
tasButton.addEventListener('click', twist, {once: true})
tasButton.addEventListener('click', shout)

// ✅addEventListener를 사용할 때 더 유연성이 발휘됨
// 모두가 사용함..ㅎㅎ
// onclick은 가끔 보게 됨