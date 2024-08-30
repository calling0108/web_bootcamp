

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    // 함수명.preventDefault(): 특정 이벤트의 기본 동작이 수행되지 않도록 막아줌
    // form event 만이 아님
    // 여기서는 form action="/shelter" 값으로 새로운 웹페이지로 이동하지 않도록 막아줌
    // 싱글 페이지 방식으로 앱을 구성할 경우, 사용자가 폼을 입력하고 제출했을 때 해당 데이터를 가져와 동일 페이지 내에서 처리해야 함
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const catName = input.value;
    const newLi = document.createAttribute("li");
    newLi.innerText = catName;
})