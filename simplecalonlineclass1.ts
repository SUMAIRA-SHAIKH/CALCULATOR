
//RAMDAN ONLINE CLASS 2 
//SIMPLE CALCULATOR NO CHANGE
import inquirer from "inquirer";
console.log("\n\t\t\t***~SIMPLE CALCULATOR~***")
console.log("\t\t\t=========================\n")

const answer = await inquirer.prompt([
  { message: "\tPlease enter 1st number:", type: "number", name: "firstNumber" },
  { message: "\tplease enter 2nd number:", type: "number", name: "secondNumber" },
  {
    message: "\tPlease select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction","Multipilication","Division","Remainder"],
  },
]);

//conditional statement
if(answer.operator==="Addition")
{
    console.log( "\tYour result of Addition is: ",answer.firstNumber + answer.secondNumber)
}else if(answer.operator==="Subtraction")
{
console.log( "\tYour result of Subtraction is: ",answer.firstNumber - answer.secondNumber);
}
else if( answer.operator=== "Multipilication")
{
    console.log("\tYour result of Multiplication is: ", answer.firstNumber * answer.secondNumber);  
}
else if(answer.operator=== "Division")
{
    console.log("\tYour result of Division is: ", answer.firstNumber / answer.secondNumber);  
}
else if(answer.operator=== "Remainder")
{
    console.log( "\tRemainder of two number's is: ",answer.firstNumber % answer.secondNumber);  
}
