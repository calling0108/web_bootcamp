const tweetForm = document.querySelector("#tweetForm");

// form #tweetForm 안에 넣기
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener('submit', function(e) {
    // 1. event를 막아줌, 여기서는 새로고침
    e.preventDefault();
    
    // 2. 입력(input)에서 값 가져오기
    // const usernameInput = document.querySelectorAll("input")[0];
    // const tweetInput = document.querySelectorAll("input")[1];
    
    // 3. 입력에서 값 가져왔는지 확인
    // console.log(usernameInput.value, tweetInput.value);
    
    // 4. input name 속성을 이용한 호출
    // console.dir에서 elements를 보면  input값에 username이 부여된 것을 볼 수 있음
    // name은 요소의 특성 이름으로 설정됨
    // value값도 설정하면 되는데, 아래 addTweet 인자값에 value 추가하고, 초기화를 조금 더 쉽게하기 위해 username -> usernameInput으로 변경 후 value값을 빼주었음.
    // elements는 순서대로 정렬된 집합
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    // 7. addTweet 함수에 username, tweet값 넣기
    addTweet(usernameInput.value, tweetInput.value);

    // 8. input값 초기화
    usernameInput.value = "";
    tweetInput.value = "";
    
    
    // 정상 작동 여부 확인
    // console.log("Submit~@!!");
    
});

const addTweet = (username, tweet) => {
    // 5. 새로운 li 생성
    const newTweet = document.createElement("li");
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    // 6. ul 안에 넣기
    tweetsContainer.append(newTweet);
}