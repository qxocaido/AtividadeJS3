const valores = [5, 8, 12, 8, 3];
const a = valores.find(v => v === 8);
const b = valores.filter(v => v === 8);
const c = valores.some(v => v === 8);
console.log(a, b, c);

// .find retorna apenas UM do valor escolhido caso exista no array, nao importando se existe mais de um do mesmo dentro do array;'
// .filter ele retorna OS VALORES que condizem com o 'filtro' passado, ou seja, irá retorna todos do mesmo;
// .some ele irá testar, nesse caso o array 'valores', se ao menos um elemento passa na condiçao especificada retornando true ou false;