// practicing about splice and slice
// so slice method create the copy of image, means that origin al ne not changed 
// but in case of splice method it changed the original array 

const x = [1, 2, 3, 4, 5];
const y = x.slice(1, 2);
console.log(x, y);


// splice 

const numbers = [12, 24, 56, 76, 9, 8];

let num = numbers.splice(0, 2);
console.log(num);
console.log(numbers); // [ 56, 76, 9, 8 ]

const num2 = numbers.splice(2, 1, 69, 96);
console.log(num2, numbers);



