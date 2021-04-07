'use strict';

const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let pictureProducts = products.filter(function (element) {
    if ("photos" in element && element.photos.length > 0) {
        return element;
    }
});

console.log(pictureProducts);


let testFunction = products.filter(function (element) {
    //return IF()
    return ("photos" in element && element.photos.length > 0);

});

console.log(testFunction);


let testFunction1 = products.filter((element) => ("photos" in element && element.photos.length > 0));
console.log(testFunction1);

products.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }

    return 0;
});

console.log()

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}