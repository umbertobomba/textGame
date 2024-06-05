const calculator = (firstNumber, operator, secondNumber) => {
	if(operator === "add") {
        console.log(firstNumber + secondNumber)
    } else if(operator === "sub") {
        console.log(firstNumber - secondNumber)
    } else if(operator === "div") {
        console.log(firstNumber / secondNumber)
    } else if(operator === "mul") {
        console.log(firstNumber * secondNumber)
    } else {
        console.log("An error occured")
    }
}

console.log("7 + 3")
calculator(7, "add", 3)

console.log("10 - 5")
calculator(10, "sub", 5)

console.log("30 / 10")
calculator(30, "div", 10)

console.log("3 * 8")
calculator(3, "mul", 8)