

// ✅ 아래와 같이 하면 첫번째 setTimeout값에서 초를 계산해서 함수를 관리해야 하는 일이 생긴다.
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// }, 1000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
// }, 2000)


// ✅setTimeout에 중첩하기
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
const delayedColorChange