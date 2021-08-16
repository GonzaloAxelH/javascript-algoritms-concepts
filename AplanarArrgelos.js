let MyArreglo = [1,[[2,9]],7,3,[10,[]]];

const res = MyArreglo.reduce((acc,el) => acc.concat(el),[])

console.log(res)
// [1,[2,9],7,3,10,[]]
