// alert('Hello JS');

/* 
    - number => 20, 20.1
    - string => 'some text', "some text", `some text`
    - boolean => true, false
    - undefined 
    - null
    - symbol
    - object => object, array

    ecmascript => es6 => 2015 => 2016
                  es10 => 2019 => 2020
                  
    javascript, es6+

    var, let, conts
*/

var a = 1000; // number
let b = 'Arsenal'; // string
const c = false; // boolean
let d; // undefined
let e = null; // null
let f = Symbol(); // symbol

let arr = [1,'some text', true, null, [10,20]];
let obj = {
    userLogin: 'admin',
    userPassword: 1111
};

// alert(a);

// console.log(a);
// a = 2000;
// console.log(a);
// a = a + 500;
// console.log(a);
// a = 'some text';
// console.log(a);
// var a = 'opacha';
// console.log(a);

// console.log(b);
// b = 'Arsenal FC';
// console.log(b);
// b = 1886;
// console.log(b);
// let b = 'opacha'; // error

// console.log(c);
// c = true; // error
// console.log(c);

// console.log(s);
// const s = 'some text';

// let num1 = 20;
// let num2 = num1;
// console.log(num2);

// let str1 = 'Hello ';
// let str2 = 'world!';
// let message = str1 + str2;
// console.log(message);

// let n1 = '10';
// let n2 = 2;
// // let addition = n1 + n2;
// let addition = 3 + 5 + n1 + (n2 + 5);
// console.log(addition);
// let division = n1/n2;
// console.log(division);
// let multiplication = n1 * n2;
// console.log(multiplication);
// let substraction = n1 - n2;
// console.log(substraction);

// NaN = > Not a Number
// Infinity
// console.log(1/0);

// let numb = '100.9';
// console.log(numb, typeof numb);
// let test1 = parseInt(numb);
// console.log(test1, typeof test1);
// let test2 = parseFloat(numb);
// console.log(test2, typeof test2);
// let test3 = +numb;
// console.log(test3, typeof test3);

// alert();
// let mess = confirm('Some message');
// console.log(mess);

// let m1 = prompt('write some message', 'Arsenal');
// console.log(m1);

// document.write('Hello');

// let message = 'Hello';
// document.write(message);

let myName = prompt('write your name');
// document.write('Hello,my name is '+myName+'. I live in Lviv');
document.write(`Hello, my name is ${myName}. I live in Lviv`);