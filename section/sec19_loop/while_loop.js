// ✅while loop
// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count);
// }

// // 반복 횟수를 정하지 않을 때 좋음
// const secret = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== secret) {
//     guess = prompt("enter the secret code...")
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!")


// let input = prompt("Hey, say something!");
// while (true) {
//     input = prompt(input);
//     if (input === "Stop copying me") {
//         break;
//     }
// }
// console.log("OK YOU WIN!")

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum + 1);

console.log(targetNum);

let guess = prompt("Enter your first guess! (Type 'q' to quit)");

let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    
    // guess 값이 NaN일 경우, targetNum값보다 크거나 작지도 않으니 else문으로 작동함.
    if ( guess < targetNum) {
        guess = prompt("To low! Enter a new guess:");
        attempts++;
    } else if (guess > targetNum) {
        guess = prompt("To high! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' t quit")
    }
}
if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`);
}


