let input = prompt("what would you like to do?");

// 객체를 사용하면 단순하게 생각했을 때, 인덱스 역할인 key 부분의 수가 고정되기에 수정에 용이하지 않음  
const todos = ["Collect Chicken", "Clean Litter Box"];

while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("***********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("***********");
    } else if (input === "new") {
        const newTodo = prompt("Ok, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (input === "delete") {
        // prompt 값은 문자열이기에 정수형으로 변환시켜줄 필요가 있음
        const index = parseInt(prompt("Ok, enter an index to delete:"));
        // splice 시작점에 문자열을 넣으면 0으로 dafault되어 인덱스 0이 됨
        // Number.isNaN(21) = false, Number.isNaN(NaN) = true
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index");
        }

    }
    input = prompt("What would you like to do?");

}