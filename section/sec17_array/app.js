// ✅array
let days = ["Monday", "Tuesday", "Wednesday"];

// 배열에 다양한 type을 넣을 수 있음
// let kitchenSink = [true, undefined, 12, 9.99999, NaN, false, null, 'HIIII!']


// ✅배열에 빈 공간을 넣을 수 있음.

let colors = ["red", 70, "yellow"];

// colors[10] = "indigo" ) 값은 (11) ['red', 70, 'yellow', empty × 7, 'indigo']
// colors[5]는 undefined 가 나옴

// ✅push : 배열 맨 끝에 추가
let cat = ["blue"];

cat.push("eva".toUpperCase());
cat.push("harry", "hermione");

console.log(cat);
console.log(cat.length);

// ✅pop : 배열 마지막 값 제거
cat.pop();
console.log(cat);


// ✅shift : 맨 처음 제거


// ✅Unshift : 맨 처음 추가

// ✅ 배열 빈 항목에서 shift or pop을 사용하면 오류는 뜨지 않고, undefined가 뜸

// ✅concat(접합)
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3)

// ✅include : 배열에 특정값 포함 유무 확인 true/false로 결과 도출
const array4 = [1, 2, 3];

console.log(array4.includes(2));

// ✅배열 내 indexOf : 배열 indes를 알려줌,  없을 시 -1 도출
// 중복값 존재 시 첫번째 결과만 도출함
console.log(array1.indexOf('c'));
console.log(array1.indexOf('f'));

// ✅reverse : 배열 뒤집기, original array를 변경시킴 주의(destructive 파괴)

console.log("array1:", array1);
const reversed = array1.reverse();
console.log('reversed:', reversed);

console.log('array1:', array1);

// ✅slice : 배열의 일부 복사 방법
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice());
console.log(animals.slice(2));
console.log(animals.slice(2,4));
console.log(animals.slice(1,5));
console.log(animals.slice(-3));

// ✅splice : 시작 index에서 몇 개를 삭제하고, 무엇을 넣을 것인가
// start, deleteCount, items
// 배열 중간값을 수정하는 건 좋은 방법은 아님, 맨 끝 수정이 좋음
const months = ['Jan', 'March', 'April', 'June'];

months.splice(1,0,'Feb');
console.log(months)
months.splice(4,1,"May");
console.log(months);
months.splice(0,4,"1개","이상","값을","추가","할 수", "있음");
console.log(months);

// ✅sort : 배열, 방법에 따라 다양하게 배열됨. 웹사이트 참조할 것
let scores = [1, 70, 100, 2500, 9, -12, 0, 34];

scores.sort();

console.log(scores); // 전체 수가 아닌 1의 자리 크기에 따라 배열된 것을 볼 수 있음


// ✅참조 타입과 동일성 테스트
// [] === [] 값은 False가 나옴
// JS는 배열 안의 값에 관심을 가지지 않음.
// 실제 비교되는 것은 메모리에서 참조되는 값
let nums = [1, 2, 3];
let numsCopy = nums;

// nums.push(4);를 할 경우 numsCopy 값도 동일하게 변함

// nums === numsCopy는 True
// numsCopy.pop()도 nums의 값이 변함
// python이랑은 다르네..?

// ✅배열과 const
// 배열은 메모리 참조값, 배열 내의 내용은 중요하지 않음, const 배열은 참조 주소는 변할 수 없으나 내용은 변할 수 있다는 이야기
const const_nums = [1,2,3];

const_nums.push(4);
console.log(const_nums);

// error, 참조 주소를 변경할 경우
// ex) const_nums = 1;
// ex) const_nums = [1,2,3];

// ✅다차원 배열(Nested Arrays)
const gameBoard = [["X", "O", "X"], ["O", null, "X"], ["O", "O", "X"]];

console.log(gameBoard);

// 호출 gameBoard[0][1] : "O"