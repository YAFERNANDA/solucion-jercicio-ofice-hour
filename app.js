/*
Crear una funcion que reciba como parametro un array y retorne una cadena
-> retorne quack! sneeze! boom!
*/
var arr = ["quack","sneeze","boom"];

function arrToStr(arr){
  // quiero convertir mi array a cadena.
  arr = arr.join() ;

  return arr;
}
// ahora quiero que mi cadena tenga un separador ! con un espacio adicional.
console.log(arr.join('! ') + '!');
