// ✅ JS는 최대 한 번에 한 줄의 코드만 실행

// ✅ setTimeout은 지연 후 코들르 실행하는 방법

console.log("Sending request to server!");

setTimeout(() => {
    console.log("Here is your data from the server...");
}, 3000)

console.log("I AM THE END OF THE FILE!");


// ✅브라우저는 JS가 아닌 C++ 같은 언어로 작성되기에 JS가 할 수 없는 것들을 한다. 

// ✅Web APIs는 일반적으로 JS에서 호출하여 브라우저로 전달하는 방법. JS 대신 browser가 대신 처리하는.

