var x = "global";

function foo() {
    var x = "local";
    console.log(x);
    var b = "test"
    return console.log(b);
}

foo();
console.log(x);


console.log(foo2);
let foo2;
console.log(foo2);
foo2 = 1;
console.log(foo2);