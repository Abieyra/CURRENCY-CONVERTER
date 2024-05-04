#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1, //BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let userAns = await inquirer.prompt([
    {
        name: "from",
        message: "ENTRE FROM CURRENCY",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "ENTRE TO CURRENCY",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "Amount",
        message: "ENTRE YOUR AMOUNT",
        type: "number",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
]);
let userFromCurrency = userAns.from;
let userToCurrency = userAns.to;
let fromAmount = currency[userFromCurrency]; //exchange rate
let toAmount = currency[userToCurrency]; // exchange rate
let amount = userAns.Amount;
let baseAmount = amount / fromAmount; //USD base currency
let convertedamount = baseAmount * toAmount;
console.log(chalk.blue(convertedamount));
