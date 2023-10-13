/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
    return x === y;
}
console.log(sonIguales(5, 5))
 console.log(sonIguales(5, 3))

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
return str1.length === str2.length;
}
console.log(tienenMismaLongitud("hola", "adios"));
console.log(tienenMismaLongitud("perro", "gorro")); 

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
 return num < 90;
} 
console.log(menosQueNoventa(90))
console.log(menosQueNoventa(80))

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   return num > 50;
}
console.log(mayorQueCincuenta(51))
console.log(mayorQueCincuenta(50))

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   return num % 2 == 0;
}
console.log(esPar(4))
console.log(esPar(7))

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   return num % 2 !== 0;
}
console.log(esImpar(4))
console.log(esImpar(7))


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
