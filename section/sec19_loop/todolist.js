

// ✅1. prompt("What would you like to do?")

// ✅1-1. "new" 입력 시, prompt("Enter new todo") 새로운 할 일 목록 추가 메시지 출력

/* ✅1-2. console에 해당 목록 출력
ex) console.log(`${할 일 목록} + added to list`); 
*/

// ✅1-3. 다시 1번 prompt 출력

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


let todoObject = {};
let quit = true;
let indexCount = 0;

while (quit) {
    let order = prompt("What would you like to do?");
    // 할 일 목록을 선택했을 때, 콘솔에 할 일이 추가되었다고 출력이 되고, "list"에 객체로 항목이 등록되어야 함.
    if (order === "new") {
        let newTodo = prompt("Enter new todo");
        console.log(`${newTodo} added to list`);
        todoObject[indexCount] = newTodo;
        indexCount ++;
        console.log(todoObject); 


    } else if (order === "list") {
        console.log("**********");
        for (const [key, values] of Object.entries(todoObject)) {
            console.log(`${key}: ${values}`);
        }
        console.log("**********");

    } else if (order === "delete") {
        let deleteNum = prompt("Enter index of todo to delete");
        delete todoObject[deleteNum];
        console.log("Todo Removed");
    } else if (order === "quit") {
        quit = false;
        console.log("OK, YOU QUIT THE APP");
    } else {
        console.log("invalid order. Enter a valid order.");
    }

}