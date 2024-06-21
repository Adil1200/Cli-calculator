#! /usr/bin/env node         
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter yor first number", type: "number", name: "FirstNumber" },
    {
        message: "Enter your second number",
        type: "number",
        name: "SecondNumber",
    },
    {
        message: "Select one of operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator == "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator == "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator == "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator == "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    "Please select correct operator";
}