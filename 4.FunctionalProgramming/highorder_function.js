//JavaScript memiliki kemampuan First Class Functions, karena itu fungsi pada JavaScript dapat diperlakukan layaknya sebuah data. Kita bisa menyimpan function dalam variabel, memberikan function sebagai parameter pada fungsi lainnya, hingga mengembalikan function di dalam function.

const hello = () => {
    console.log('Hello 1!')
  };
  
const say = (someFunction) => {
    someFunction();
}

const sayHello = () => {
    return () => {
        console.log('Hello 2!');
    }
}
  
  hello();
  say(hello);
  sayHello()();
  
  /**
   * Hello!
   * Hello!
   * Hello!
   */

// Karena dengan kemampuan First Class Functions-nya itu, kita dapat membuat Higher-Order Function secara mudah. Tunggu, tunggu. Apa itu Higher-Order Function?
// Higher-Order Function menjadi bagian konsep pada paradigma FP. Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.

// Teknik Higher-Order Function biasanya digunakan untuk:

// Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
// Membuat utilities yang dapat digunakan diberbagai tipe data.
// Membuat teknik currying atau function composition.


// Fungsi array.map()
// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// const arrayMap = (arr, action) => {
//   const loopTrough = (arr, action, newArray = [], index = 0) => {
//     const item = arr[index];
//     if(!item) return newArray;
//     return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
//   }

//   return loopTrough(arr, action);
// }


// const newNames = arrayMap(names, (name) => `${name}!` );

// console.log({
//     names,
//     newNames,
// });

// /**
//  * output:
//  * {
//  *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
//  *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
//  * }
//  */