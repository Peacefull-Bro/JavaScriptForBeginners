
/*Дополнительные видео перед выполнением домашнего задания посмотреть не успел, поэтому, возможно код написан не совсем эстетично.
к следующему дз исправлюсь */

'use strict'
// ЗАДАНИЕ №1


// ПРИМЕР №1
    let a = 1, b = 1, c, d;
    c = ++a;
    alert(c);

/*  ++ Это икремент он увеличивает значение переменной на 1,
    поэтому значение переменной с будет 2 */

//ПРИМЕР №2
    d = b++;
    alert(d); 

/*  В случае применения оператора ++ качестве окончания он сначала возвратит значение переменной b,
    а потом добавит к ней единицу.*/

    //ПРИМЕР №3
    c = 2 + ++a;
    alert(c); 

    /* Тут все легко, в переменной а было значение 2 с помощью икремента прибавилась еденица, получилось значение 3,
    которое прибавилось к числу 2, на выходе получили 5*/

    //ПРИМЕР №4
    d = 2 + b++;
    alert(d); 
    alert(a); 
    alert(b); 

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
        console.log+(numberOne + numberTwo);
    } 

    // ЗАДАНИЕ №4

    // Функция сложения
    function numPlus() {
        let numA = 15;
        let numB = 5;
        let result = numA + numB;
        return result;
    }
    console.log(numPlus());

    // Функция вычитания
    function numMinus() {
        let numA = 15;
        let numB = 5;
        let result = numA - numB;
        return result;
    }
    console.log(numMinus());

    // Функция деления
    function numDivision() {
        let numA = 15;
        let numB = 5;
        let result = numA / numB;
        return result;
    }
    console.log(numDivision());

    // Функция умножения
    function numMultiplying() {
        let numA = 15;
        let numB = 5;
        let result = numA * numB;
        return result;
    }
    console.log(numMultiplying());

    ЗАДАНИЕ №5