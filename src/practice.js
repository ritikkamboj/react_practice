// practicing about splice and slice
// so slice method create the copy of image, means that origin al ne not changed 
// but in case of splice method it changed the original array 

const x = [1, 2, 3, 4, 5];
const y = x.slice(1, 2);
console.log(x, y);
