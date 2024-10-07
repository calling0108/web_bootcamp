

// ✅ 아래와 같이 하면 첫번째 setTimeout값에서 초를 계산해서 함수를 관리해야 하는 일이 생긴다.
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// }, 1000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
// }, 2000)


// ✅setTimeout에 중첩하기
// ✅중첩하면 연속해서 시간을 계산
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'navy';
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = 'purple';
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// ✅ 함수를 만들어서 사용도 가능
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        // ✅doNext 인자는 함수로 사용
        doNext();
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000)
            });
        });
    });
});


// ✅콜백 지옥이 발생하기에 promises가 필요함
// ✅각각 다른 콜백을 가질 수 있지만 작동하거나 작동하지 않는 경우가 생긴다면 중첩이 많이 생기고 콜백 지옥에 빠지게 된다.

// ✅ 예시
// searchMoviesAPI("amadeus", () => {
//     saveToMyDB(movies, () => {
//         //if it works, run this:
//     }, () => {
//         // if it doesn't work, run this:
//     })
// }, () => {
//     //if API is down, or request failed
// })