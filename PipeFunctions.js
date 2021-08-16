const _pipe = (f,g) => (...args) => g(f(...args));
const instrucciones = (...fns) => fns.reduce(_pipe);



const normalizarStrig = str => str.toLowerCase(str);
const splitStringArray = str => str.split(' ');
const counterRepeats = arr => {
  let res = arr.reduce((acc,palabra)=> {
    acc[palabra] = (acc[palabra] || 0) + 1;
    return acc;
  },{})
  return res;
}


const cadena = "gonzalo valdez quispe gonzalo axel valdez quispe gonzalo";
const contadorPalabrasRepetidas = instrucciones(normalizarStrig,splitStringArray,counterRepeats);
const res = contadorPalabrasRepetidas(cadena);
console.log(res)






