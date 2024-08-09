
// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }


// ✅Manipulate (조작)


// ✅innerText
// 내부의 텍스트를 반환, 태그는 모두 무시, 현재 표시되고 있는 내용에 따라 달라지게 되며 숨겨진 항목은 무시됨
document.querySelector("h1").innerText = "Kimchi";

const links = document.querySelectorAll('p a');

for (let link of links) {
    link.innerText = "I AM LINK!!!!"
}
// ✅textContent
// innerText와 비슷하지만 현재 나타난 내용이나 사용자에게 보이는 내용은 신경쓰지 않음
// 작성된 문서를 기반으로 태그를 제외한 모든 텍스트가 나옴
// 줄바꿈은 마크업 텍스트 그대로 나옴

// ✅innerHTML
// 태그 이름을 포함해서 여는 태그와 닫는 태그 사이에 있는, 요소 내부의 모든 것 즉, 전체 콘텐츠를 검색하는 것
document.querySelector("h1").innerHTML = "<i>KIMCHI</>"

// ✅ += : 추가 기호
document.querySelector("h1").innerHTML += "<sup>위첨자 추가</sup>"

// ✅ property 속성
document.querySelector("#banner");

// 속성에 접근하는 방법 및 새로운 ID 부여
document.querySelector("#banner").id = "whoops";
document.querySelector("#whoops").id = "banner";

// ✅getAttribute() : 속성에 접근하는 법
const firstLink = document.querySelector("a");

// href와 getAttribute("href") 차이점
firstLink.href;
// HTML 자체에서 직접 가져옴
firstLink.getAttribute("href");

// ✅setAttribute: 2번째 인수 변경
firstLink.setAttribute("href", "http://www.google.com");

// 문서 내 input이 2개 있음
// 아래는 별로 쓰이지 않는 방법
// document.querySelectorAll("input")[1];
// 아래 방법 선호
const input = document.querySelector("input[type='text']");

input.type = "password";
input.type = "color";

input.setAttribute("type", "text");

// ✅JS로 style 변경
// JS에서는 카멜 케이스로 나타냄, -(dash ) 기호가 아닌
const h1 = document.querySelector("h1");

// 빈 값이 나옴. 아래 style 객체에 스타일 시트(css)에서 지정한 스타일이 포함되지 않았음
// 따로 지정하거나 HTML 문서 내 인라인으로 설정하지 않는 한 빈 문자열로 나오는데 사실 그렇게는 거의 하지 않음 
h1.style.color;

// 아래 style 객체를 사용해서 이 값을 변경하는 방법도 가능
// JS를 사용해서 인라인 스타일을 변경하는 방식, 선호되는 방식은 아님
// JS로 많은 스타일을 변경할 때는 힘듦
// 클래스를 사용하는게 좋음
h1.style.color = "green";
h1.style.fontSize = "3em";
h1.style.border = "2px solid pink";



const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
    link.style.color = "rgb(0, 108, 134";
    link.style.textDecorationColor = "magenta";
    link.style.textDecorationStyle = "wavy";
}

// 어떤 요소의 현재 스타일을 알아내는 법
// const h1 = document.querySelector("h1")에 저장해놓은 변수를 불러오기
window.getComputedStyle(h1);
window.getComputedStyle(h1).color;
window.getComputedStyle(h1).fontSize;


// ✅class 사용

// const h2 = document.querySelector("h2");

// purple 클래스 적용
// h2.setAttribute("class", "purple");
// border 클래스 적용 시 덮어쓰게 됨
// h2.setAttribute("class", "border");

// 2개 클래스 동시 적용
// 문자열 리터럴 사용해서 적용
// let currentClasses = h2.getAttribute("class");

// h2.setAttribute("class", `${currentClasses} purple`)

// 위 방법은 힘들다
// 한번에 적용하는 방법

// ✅classList
// 변수명.classList.메소드

const h2 = document.querySelector("h2");
// h2.classList;

// 추가
h2.classList.add("purple");
h2.classList.add("border");
// 제거
h2.classList.remove("border");
// 포함 여부
h2.classList.contains("border");
// toggle :껏다 켰다
// 많은 클래스가 있고 특정 스타일이 토글되는 인터페이스가 있는 경우 유용
// 버튼, 체크리스트나 할 일 목록 등을 클릭하면 아이템이 체크 해제되거나 회색 처리되고 또는 사라졌다가 다시 클릭하면 돌아오는 경우
// 또는 google의 아코디언처럼 클릭에 따라 메뉴가 토글되는 것 ㅏㅕ
h2.classList.toggle("border"); // true
h2.classList.toggle("border"); // false
h2.classList.toggle("border"); // true



// ✅주어진 요소에서 부모, 자식, 형제 요소 등에 액세스하는 역할
// 한 요소에서 다른 친척이나 부모 또는 조부 요소로 이동 및 순회하게 해줌

const firstBold = document.querySelector("b");

firstBold; //<b>Silkie</b>

// 부모 요소인 <p> 요소에 접근
firstBold.parentElement; 

// 한번 더 부모 요소에 접근 
firstBold.parentElement.parentElement; // <body> 요소
firstBold.parentElement.parentElement.parentElement; // <HTML> 요소

// 모든 요소에게 그 요소를 포함하고 있는 직속 부모 요소는 단 하나
// 여러 자식 요소는 가능함, 열개의 자식 요소가 있을 수 있음

const paragraph = firstBold.parentElement;

// 자식 요소의 개수를 알려줌
paragraph.childElementCount; //8
// 배열은 아니지만 HTMLCollection 중 하나, 배열 메서드는 없지만 인덱스는 있어서 반복 가능
paragraph.children; //[b, b, a, a, a, a, a, a]

paragraph.children[0]; //<b>Silkie</b>
paragraph.children[0].parentElement; //<p>...</p>

// previousSibiling, nextSibling : 한 요소에서 인접한 형제 요소로 이동하게 해줌
// text node가 나온다고 하는데 무슨 소리인지 모르겠음..!
const squareImg = document.querySelector(".square");

// 우리가 원하는대로 출력하려면
squareImg.nextElementSibling; // <img>
squareImg.previousElementSibling; // <p>...</p>


// ✅새 요소를 처음부터 만드는 방법

// 출처는 없는 상태
const newImg = document.createElement('img');
// 출처 만들어주기
newImg.src = "https://images.unsplash.com/photo-1722648404131-a69c35a706fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// 페이지에 추가해주기(1): appendChild
// body의 마지막 자식으로 추가
document.body.appendChild(newImg);

newImg.classList.add("square");


const newH3 = document.createElement("h3");
newH3; //<h3></h3>
newH3.innerText = "I am new!"; // <h3>I am new!</h3>
document.body.appendChild(newH3);

// 페이지에 추가해주기(2): append

// <p> 태그의 끝에 추가
// append를 통해 텍스트를 추가할 수 있음
const p = document.querySelector("p");

// appendChild 작업으로는 할 수 없음
// 하나 이상을 추가할 수 있음
p.append("I am new text yaaaaaaaaayy!!!", "ㅁaasdfadfasdf");

// prepend() : 어떤 항목을 요소의 첫번째 자녀로 삽입
const newB = document.createElement("b");

newB.append("Hi! ");
newB; // <b>Hi!</b>
p.prepend(newB);

// insertAdjacentElement(): 사이 요소 삽입
// 위치를 지정해주어야 함, 4개의 위치값 존재
// beforebegin, afterbegin, beforeend, afterend
// h1와 이미지 사이에 넣어주기
const newH2 = document.createElement("h2");
newH2.append("Are adorable chickens");
newH2; // <h2>Are adrable chickens</h2>

const newH1 = document.querySelector("h1");
newH1.insertAdjacentElement("afterend", newH2)
h1.nextElementSibling; //<h2>Are adorable chickens</h2>

// after(): 요소를 다른 요소 다음에 삽입
const h3 = document.createElement("h3");

h3.innerText = "I am h3";
h1.after(h3);

// before() 메서드도 가능


// ✅요소를 제거하는 방법
// removeChild()
// 옛날 방법
// 요소에서 자식을 제거하는 방식
// 제거하려는 요소의 부모의 메서드를 호출해야 함

// li를 제거하려고 하면,
const firstLi = document.querySelector("li");
const ul = firstLi.parentElement;
ul.removeChild(firstLi);

// 첫번째 b 태그를 제거하고 싶다면
const b = document.querySelector("b");

// b.parentElement.removeChild(b);

// remove(): 제거하려는 요소 호출 메서드
const img = document.querySelector("img");

img.remove();