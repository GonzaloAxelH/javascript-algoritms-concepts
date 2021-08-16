const stri = "gonzalo valdez quispe gonzalo axel valdez quispe gonzalo";

const contadorPalabras = str => {
  let arr = str.split(' '); 
  let res = arr.reduce((acc,el) =>  {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  },{})
  return res;
}


console.log(contadorPalabras(stri))
