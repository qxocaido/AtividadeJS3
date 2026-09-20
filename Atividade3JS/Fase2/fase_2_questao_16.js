const arr = [1, 2, 3, 4, 5];
const resultado = arr.filter(n => n % 2 === 1).map(n => n * 3).reduce((acc, v) => acc + v, 10);
console.log(resultado);

// Resultado sera 37 pois: ocorre um .filter onde pegara os valores com o resto da divisao por 2 que seja igual 1;
// Depois um .map onde todos os elementos da nova lista sera multiplicado por 3;
// E por fim no .reduce todos os valores serao somados com a base inicial sendo 10;