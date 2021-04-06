'use strict';

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];


products.forEach(function(element) {
    let discount;
    let percent = 15;
    discount = element.price; 
    let number_pecent = discount / 100 * percent;
    
    console.log(discount - number_pecent);
    
});

