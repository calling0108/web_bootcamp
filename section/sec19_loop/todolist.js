
// ✅1. prompt("What would you like to do?")

// ✅1-1. "new" 입력 시, prompt("Enter new todo") 새로운 할 일 목록 추가 메시지 출력

// ✅1-2. 입력된 할 일 목록은 객체로 저장됨

/* ✅1-3. console에 해당 목록 출력
ex) console.log(`${할 일 목록} + added to list`); 
*/

// ✅1-4. 다시 1번 prompt 출력

/* ✅2. list 입력 시 출력

**********
0: Buy New Turtle
1: Collect Eggs
2: Feed Chickens
**********

숫자로 된 인덱스는 할 일을 삭제할 때 중요함
*/

/* ✅3. delete 입력 시 메시지 출력
prompt("Enter index of todo to delete");
*/

// ✅3-1. 삭제 후 console.log("Todo removed") 출력

// ✅4. quit 입력 시 프로그램 종료

// ✅4-1. 종료 후 console.log("OK, YOU QUIT THE APP") 출력


let quit = true;
let new_ = "가나다라";

const list = {

}

while (quit) {
    let order = prompt("What would you like to do?");

    if (order === "new") {
        let newTodo = prompt("Enter new todo");
        console.log(`${newTodo} + added to list`);
        
    } else if (order === "list") {
        console.log("list")
    } else if (order === "delete") {
        console.log("delete")
        console.log("Todo Removed")
    } else if (order === "quit") {
        quit = false;
    } else {
        console.log("invalid order. Enter a valid order.")
    }

}