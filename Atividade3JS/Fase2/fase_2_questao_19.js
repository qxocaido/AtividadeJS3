const pessoas = [ { nome: 'Ana', cidade: 'SP' }, { nome: 'Lucas', cidade: 'RJ' }, { nome: 'Bruna', 
cidade: 'SP' }, { nome: 'Caio', cidade: 'MG' } ];

const agrupadas = pessoas.reduce((grupos, pessoa) => {
    if (!grupos[pessoa.cidade]) {
        grupos[pessoa.cidade] = [];
    }

    grupos[pessoa.cidade].push(pessoa.nome);

    return grupos;
}, {});

console.log(agrupadas);
