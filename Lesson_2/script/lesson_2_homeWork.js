/*Дополнительные видео перед выполнением домашнего задания посмотреть не успел, поэтому, возможно код написан не совсем эстетично.
к следующему дз исправлюсь */

'use strict';
// ЗАДАНИЕ №1


// ПРИМЕР №1
let a = 1,
    b = 1,
    c, d;
c = ++a;
// alert(c);

/*  ++ Это икремент он увеличивает значение переменной на 1,
    поэтому значение переменной с будет 2 */

//ПРИМЕР №2
d = b++;
// alert(d);

/*  В случае применения оператора ++ качестве окончания он сначала возвратит значение переменной b,
    а потом добавит к ней единицу.*/

//ПРИМЕР №3
c = 2 + ++a;
// alert(c);

/* Тут все легко, в переменной а было значение 2 с помощью икремента прибавилась еденица, получилось значение 3,
которое прибавилось к числу 2, на выходе получили 5*/

//ПРИМЕР №4
d = 2 + b++;
// alert(d);
// alert(a);
// alert(b);

/* В этом примере инкремент стоит после переменной, как была сказано выше,
в этом случае значение переменной сначала вернется, и только потом прибавится,
поэтому получаем значение переменной d = 4, переменная а остается со значением 3, а переменная b = 3*/

// ЗАДАНИЕ №2
// Изменил букву переменной а на z т.к. хром ругался на то что такая переменная уже существует
let z = 2;
let x = 1 + (z *= 2);
console.log(x);

/*так как значения в скобках имеют больший приоритет, поэтому сначала выполнилась операция умножения,
потом к результату прибавилась еденица, получилось 5*/

// ЗАДАНИЕ №3
let numberOne = 7;
let numberTwo = 2;

if (numberOne >= 0, numberTwo >= 0) {
    console.log(numberOne - numberTwo);
} else if (numberOne < 0, numberTwo < 0) {
    console.log(numberOne * numberTwo);
} else if (numberOne < 0, numberTwo >= 0) {
    console.log + (numberOne + numberTwo);
}

// ЗАДАНИЕ №4

// Функция сложения
function numPlus(numA, numB) {
    let result = numA + numB;
    return result;
}
console.log(numPlus(15, 5));

// Функция вычитания
function numMinus(numA, numB) {
    let result = numA - numB;
    return result;
}
console.log(numMinus(15, 5));

// Функция деления
function numDivision(numA, numB) {
    let result = numA / numB;
    return result;
}
console.log(numDivision(15, 5));

// Функция умножения
function numMultiplying(numA, numB) {
    let result = numA * numB;
    return result;
}
console.log(numMultiplying(15, 5));

//ЗАДАНИЕ №5

function mathOperation(arg1, arg2, operation) {
    let result;

    switch ("plus") {
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

