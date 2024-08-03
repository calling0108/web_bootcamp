
// for loop
// while loop
// for...of loop
// for...in loop

// ✅for loop
// start at 1(initialExpression), stop at 10(condition), add 1 each time(incrementExpression)
for (let i = 1; i <= 10; i++) {
    console.log(i)
};


for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`     j is: ${j}`)
    }
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

// ✅loop nesting
for (let i = 0; i < seatingChart.length;i++) {
    const row = seatingChart[i]
    console.log(`# row${i}`)
    for (let j = 0; j<row.length;j++){
        console.log("    " + row[j]);
    }
}
