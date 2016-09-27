/**
 *   @author Johnson, Anne (johnson.anne07@gmail.com)
 *   @version 0.0.1
 *   @summary Project 2 || created: 09.27.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');
const CURRENT_YEAR = 2016;

let continueResponse;
let policyNumber, dueDay, dueMonth, dueYear, birthDate, currentDate, numberAccidents, monthlyInsurancePremium, customerAge;
let customerFirstName, customerLastName;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setPolicyNumber();
        setDueDay();
        setDueMonth();
        setDueYear();
        setBirthDate();
        setNumberAccidents();
        setCustomerFirstName();
        setCustomerLastName();
        setCustomerAge();
        setMonthlyInsurancePremium();
        printMonthlyInsurancePremium();
        setContinueResponse();
        return main();
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
    } else {
        continueResponse = 1;
    }
}

function setPolicyNumber() {
    policyNumber = Math.floor((Math.random() * 10000) + 1);  //JavaScript random number 1 - 10000
}

function setDueDay() {
    dueDay = Number(PROMPT.question(`\nPlease enter the day of your premium due date (in XX format): `));
}

function setDueMonth() {
    dueMonth = Number(PROMPT.question(`\nPlease enter the month of your premium due month (in XX format): `));
}

function setDueYear() {
    dueYear = Number(PROMPT.question(`\nPlease enter the year of your premium due year (in XXXX format): `));
}

function setNumberAccidents() {
    numberAccidents = Number(PROMPT.question(`\nPlease enter the number of at-fault accidents in the last three years: `));
}

function setBirthDate() {
    birthDate = Number(PROMPT.question(`\nPlease enter your birth year: `));
}

function setCustomerFirstName() {
    customerFirstName = PROMPT.question(`\nPlease enter your name: `);
}

function setCustomerLastName() {
    customerLastName = PROMPT.question(`\nPlease enter last name: `);
}

function setCustomerAge() {
    customerAge = CURRENT_YEAR - birthDate;
}

function setMonthlyInsurancePremium() {
    monthlyInsurancePremium = 0;
    const BASE_PRICE = 100
    if (customerAge > 0) {
        if (customerAge > 15 && customerAge < 30) {
            monthlyInsurancePremium = BASE_PRICE + 20 + (numberAccidents * 50);
        } else if (customerAge >= 30 && customerAge < 45) {
            monthlyInsurancePremium = BASE_PRICE + 10 + (numberAccidents * 50);
        } else if (customerAge >= 60) {
            monthlyInsurancePremium = BASE_PRICE + 30 + (numberAccidents * 50);
        }
    }
}

function printMonthlyInsurancePremium() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\t${customerFirstName}'s bill: \$${monthlyInsurancePremium}. Customer#: ${policyNumber}`);
}

function printGoodbye() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\tGoodbye.`);
}
