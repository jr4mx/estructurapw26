let numeros = [1, 2, 3, 4, 5,10, 20, 30, 40, 50];
let pares = [];
let impares =[];
for(let i=0;i<numeros.length;i++) {
    console.log(`Posición ${i}:${numeros[i]}`);
   if(numeros[i] % 2 === 0){
      pares.push(
        {
         tipo:"par",
         valor:numeros[i]
        }
      );
   } else {
      impares.push(
        {
         tipo:"par",
         valor:numeros[i]
        }
      );
   }
}
//voy a imprimir mi array pares
console.table(pares,["tipo","valor"]);
document.writeln(JSON.stringify(pares));
console.table(pares,["tipo","valor"]);
document.writeln(JSON.stringify(impares));



