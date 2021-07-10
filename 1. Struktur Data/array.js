const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);


const myArray2 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 2);   // Menhapus dari index 2 sebanyak 2 elemen
console.log(myArray2);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/



/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/