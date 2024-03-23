//using if-else statment calculator and continue execuation till user dnt want to continue.
//we use function.

//but in this code is minor problem , thats is 1st program take all input from user then perform the all input 
//like.. enter 1st no
//enter 2nd no
//do you wawnt to continue?
//than give output 
//this problem comes because we use if or else statement but for this program we use switch case 
//then we resolve our minor problem!!

import inquirer from "inquirer";

console.log("\n\t\t\t***~SIMPLE CALCULATOR~***");
console.log("\t\t\t=========================\n");

function performCalculation() {
const questions = [
{ message: "\tPlease enter 1st number:", type: "number", name: "firstNumber" },
{ message: "\tPlease enter 2nd number:", type: "number", name: "secondNumber" },
{
message: "\tPlease select one of the operators to perform operation",
type: "list",
name: "operator",
choices: ["Addition", "Subtraction", "Multiplication", "Division", "Remainder"],
},
{ message: "\tDo you wish to continue calculation YES or NO = (Y/N)?", type: "list", name: "wantagain", choices: ["YES", "NO"] }
];

inquirer.prompt(questions).then((answers) => {
// Conditional statements to perform calculations based on the selected operator
let result;
if (answers.operator === "Addition") {
result = answers.firstNumber + answers.secondNumber;
console.log(`\tYour result of Addition is: ${result}`);
} else if (answers.operator === "Subtraction") {
result = answers.firstNumber - answers.secondNumber;
console.log(`\tYour result of Subtraction is: ${result}`);
} else if (answers.operator === "Multiplication") {
result = answers.firstNumber * answers.secondNumber;
console.log(`\tYour result of Multiplication is: ${result}`);
} else if (answers.operator === "Division") {
result = answers.firstNumber / answers.secondNumber;
console.log(`\tYour result of Division is: ${result}`);
} else if (answers.operator === "Remainder") {
result = answers.firstNumber % answers.secondNumber;
console.log(`\tRemainder of two numbers is: ${result}`);
} else {
console.log("\tInvalid operator selected.");
}

console.log("\t-----------------------------------\n");

if (answers.wantagain === "YES") {
performCalculation(); // Recursive call to perform calculations again
} else {
console.log("\n\tThank you for using the calculator. See you next time!");
}
});
}

performCalculation();