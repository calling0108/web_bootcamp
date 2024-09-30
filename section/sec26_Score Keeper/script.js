// ✅ code refactoring
// 객체를 통해 그룹화 하기

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');
const resetButton = document.querySelector('#reset');

// let p1Score = 0;
// let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            // ✅ classList로 html <style> 태그를 control
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            // ✅ 게임이 종료되었을 경우 버튼 비활성화
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
})

// // ✅ p1 버튼
// p1Button.addEventListener('click', function () {
//     // ✅ 게임이 끝날 경우 if문 실행 x
//     if (!isGameOver) {
//         p1Score += 1;
//         if (p1Score === winningScore) {
//             isGameOver = true;
//             // ✅ classList로 html <style> 태그를 control
//             p1Display.classList.add('has-text-success');
//             p2Display.classList.add('has-text-danger');
//             // ✅ 게임이 종료되었을 경우 버튼 비활성화
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p1Display.textContent = p1Score;
//     }
// })

// // ✅ p2 버튼
// p2Button.addEventListener('click', function () {
//     if (!isGameOver) {
//         p2Score += 1;
//         if (p2Score === winningScore) {
//             isGameOver = true;
//             p2Display.classList.add('has-text-success');
//             p1Display.classList.add('has-text-danger');
//             // ✅ 게임이 종료되었을 경우 버튼 비활성화
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p2Display.textContent = p2Score;
//     }
// })

// ✅ 점수가 select될 때마다 이벤트 발생, reset 진행
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    // alert(winningScore);
    reset();
})

resetButton.addEventListener('click', reset)

// ✅ 점수 초기화
function reset() {
    isGameOver = false;

    // ✅ for loop 활용
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }

    // p1.score = 0;
    // p2.score = 0;
    // p1.display.textContent = 0;
    // p2.display.textContent = 0;
    // p1.display.classList.remove('has-text-success', 'has-text-danger');
    // p2.display.classList.remove('has-text-success', 'has-text-danger');
    // // ✅ 게임이 종료되었을 경우 버튼 비활성화
    // p1.button.disabled = false;
    // p2.button.disabled = false;
}