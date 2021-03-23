// ЗАДАНИЕ №4

// Функция сложения
function numPlus(numA, numB) {
    return numA + numB;
     
}
console.log(numPlus(15, 5));

// Функция вычитания
function numMinus(numA, numB) {
    return numA - numB;
}
console.log(numMinus(15, 5));

// Функция деления
function numDivision(numA, numB) {
    return numA / numB;
}
console.log(numDivision(15, 5));

// Функция умножения
function numMultiplying(numA, numB) {
    return numA * numB;
}
console.log(numMultiplying(15, 5));

//ЗАДАНИЕ №5

function mathOperation(arg1, arg2, operation) {
    let result;

    switch (operation) {
        case "plus":
            result = numPlus(arg1, arg2);
            return result;
            break;
        case "minus":
            result = numMinus(arg1, arg2);
            return result;
            break;
        case "division":
            result = numDivision(arg1, arg2);
            return result;
            break;
        case "multiplying":
            result = numMultiplying(arg1, arg2);
            return result;
            break;
    }
}
let plusOperation = mathOperation(15, 5, "plus");
console.log(plusOperation);
let minusOperation = mathOperation(15, 5, "minus");
console.log(minusOperation);
let divisionOperation = mathOperation(15, 5, "division");
console.log(divisionOperation);
let multiplyingOperation = mathOperation(15, 5, "multiplying");
console.log(multiplyingOperation);

