

const somefun = (a, b) => {
    if (!Number.isInteger(a)){
      return ('ke 1 Bukan angka')
    } 
    if (!Number.isInteger(b)){
        return ('ke 2 Bukan angka')
      } 
    return('Angka')
}
console.log(somefun(null,2));
