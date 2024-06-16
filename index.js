const readline = require('readline-sync');

//Ask the user, "What operation would you like to perform?"
//Then the user enters one of these options: "/" "*" "-" "+"
//If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
//After the user enters a valid operation, ask the user, "Please enter the first number"
//The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
//After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
//Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result

function getValidOperation() {
    const operations = ['/', '*', '-', '+'];
    while (true) {
        const operation = readline.question('What operation would you like to perform? (type "exit" to quit) ');
        if (operation === 'exit') {
            process.exit(0);
        } else if (operations.includes(operation)) {
            return operation;
        } else {
            console.log('That is not a valid operation');
        }
    }
}

function getValidNumber(prompt) {
    while (true) {
        const input = readline.question(prompt);
        if (input === 'exit') {
            process.exit(0);
        }
        const number = parseFloat(input);
        if (!isNaN(number)) {
            return number;
        } else {
            console.log('This is not a number');
        }
    }
}

function calculate(operation, num1, num2) {
    switch (operation) {
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
        case '-':
            return num1 - num2;
        case '+':
            return num1 + num2;
        default:
            throw new Error('Invalid operation');
    }
}

function main() {
    while (true) {
        const operation = getValidOperation();
        const num1 = getValidNumber('Please enter the first number (type "exit" to quit): ');
        const num2 = getValidNumber('Please enter the second number (type "exit" to quit): ');

        const result = calculate(operation, num1, num2);
        console.log(`The result is: ${result}`);
    }
}

main();








