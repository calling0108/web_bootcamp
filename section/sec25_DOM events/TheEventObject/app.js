document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

// const input = document.querySelector('input');

// key: 입력된게 a인지 c인지 알아낼 때, 일반적인 글자를 입력할 때
// code: 실제로 눌린 키의 위치를 알아낼 때, 게임 속 캐릭터 방향 전환할 때 사용
// input.addEventListener('keydown', function (e) {
//     console.log(e.key)
//     console.log(e.code)
// })
// input.addEventListener('keyup', function () {
//     console.log("KEYUP")
// })

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        default:
            console.log("IGNORED!")
    }
})