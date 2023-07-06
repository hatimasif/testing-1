// const me = {
//     motherName: 'Sandhya',
//     age: 24,
// };

// const bro = { ...me, age: 25 };

// const colors = ['red', 'green', 'blue', 'orange', 'purple'];
// const moreColors = [...colors, 'white', 'black'];

// console.log(colors, moreColors);

// const squareNumbers = numbers.map(num => num * num);

// const getLength = strings.map(str => str.length);

// const getNames = thisIsAnArrayOfObjects.map(obj => obj.name);

// const numbers = [5, 20, 15, 40, 3, 30, 11];
// const divisibleByTen = numbers.filter((num) => !(num % 10));
// console.log(divisibleByTen);

// const getNumbersGreaterThanTen = numbers.filter((num) => num > 10);
// console.log(getNumbersGreaterThanTen);

// Ankit Singhania's questions
// Q.1 Write a function that takes an array and returns all the numbers in a
//     new array increased by 10.

// Q.2 Write a arrow function which takes an object and prints the particular sentence
// My name is Ankit Singhania. I scored 99 in Math and 96 in Computer from ISC board.

// const obj ={
//     name: 'Ankit Singhania',
//     school: {
//         board:['ISC'],
//         marks: [{
//             subject: 'Math',
//             percent: 99
//         },
//                 {
//             subject: 'Computer',
//             percent: 96
//         }]}
// }

// Part 2: What if the marks contain more than 2 objects (more subject marks) then how will you print all the subject details in the sentence

// Q.3 Write a function to calculate sum of n elements where n >=2

// console.log(sumOfN(1,2,3)) // output: 6
// console.log(sumOfN(1,2,3,4)) // output: 10

// Q.4 write a function which will take an array of "n" numbers as an argument and will return the object containing maximum number, minimum number and avg of all numbers in array.

//  sample e.g. -
//  console.log(getOutput([1,2,3,4,5])) // output : {max: 5, min: 1, avg: 3}

// note: do it without using any inbuilt function

// Q.5 write a function getArea which will accept either one or two arguments and return the area of geometrical figure.

//   if function is called with one arguments then consider it as side of square
//   and
//     if it is called with two arguments then consider it as length and breadth of rectangle

// sample eg.
//   console.log(getArea(4)) // output : 16
//   console.log(getArea(4,8)) // output : 32

// Q.6 write a function to calculate factorial of number using
//  loop

// write a function which will take `n` (provided n>=2) numbers as an argument and will return the the sum of factorial of all the numbers

// eg.

// console.log(getSumOfFacts(1,2,3)) // output: 9
// console.log(getSumOfFacts(1,2,3,4)) // output: 33

// Q.7 Write a function that takes an array and returns a new array having
//     even numbers multiplied by 20 and odd numbers multiplied by 30.

// Write a function that takes an array and returns a new array having
//     even indexes numbers subtracted by 2 and odd indexes numbers added by 3.

// const obj = {
//     a: 10,
//     b: 12,
//     arr: [10, 8, 15, 14],
// };
// Write a program using destructing to find a number in this object which
// is divisible both by 3 and 5

// ------------------------------------------------------

let iterations = 1000000;
function functionNiharika(arr) {
    let equalNum = 0;
    if (arr[0] === arr[1] || arr[0] === arr[2]) {
        equalNum = arr[0];
    } else {
        equalNum = arr[1];
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != equalNum) {
            return arr[i];
        }
    }
}
function functionVivek(arr) {
    // do magic
    let first = arr[0];
    let second = arr[1];
    if (first !== second) {
        for (let i = 2; i < arr.length; i++) {
            return arr[i] === first ? second : first;
        }
    } else {
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] !== first) {
                return arr[i];
            }
        }
    }
}
function functionSharath(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            if (i === arr.length - 2) {
                // special case if unique element is last
                return arr[arr.length - 1]; //  or arr[i+1] here
            } else if (arr[i] !== arr[i + 2]) {
                return arr[i];
            } else return arr[i + 1];
        }
    }
}
console.time('Function #Niharika');
for (let i = 0; i < iterations; i++) {
    functionNiharika([1, 1, 1, 2, 1, 1]);
}
console.timeEnd('Function #Niharika');

console.time('Function #Vivek');
for (let i = 0; i < iterations; i++) {
    functionVivek([1, 1, 1, 2, 1, 1]);
}
console.timeEnd('Function #Vivek');

console.time('Function #Sharath');
for (let i = 0; i < iterations; i++) {
    functionSharath([1, 1, 1, 2, 1, 1]);
}
console.timeEnd('Function #Sharath');
