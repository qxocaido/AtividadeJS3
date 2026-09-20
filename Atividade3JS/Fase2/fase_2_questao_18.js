const lista = [4, 8, 12, 16];
const r = lista.splice(1, 2);
console.log(lista, r);

// .splice REMOVE os valores do array original
// Primeria forma seria utilizar o .toSliced, ele nao modifica o array original
// Segunda forma o .slice, tbm n modifica o array original