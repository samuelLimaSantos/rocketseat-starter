/** 2º exercício 
 * A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
 * const usuarios = [
    {
        nome: "Diego",
        idade: 23,
        empresa: "Rockeatseat"
    },
    {
        nome: "Gabriel",
        idade: 15,
        empresa: "Rockeatseat"
    },
    {
        nome: "Lucas",
        idade: 30,
        empresa: "Facebook"
    }
]
 */

const usuarios = [
    {
        nome: "Diego",
        idade: 23,
        empresa: "Rockeatseat"
    },
    {
        nome: "Gabriel",
        idade: 15,
        empresa: "Rockeatseat"
    },
    {
        nome: "Lucas",
        idade: 30,
        empresa: "Facebook"
    }
]

const idades = usuarios.map((item) => {
    // Cria um array só com as idades dos usuários
    const {idade} = item;
    return idade;
})

const filter = usuarios.filter((item) => {
    // Cria um array apenas com usuários com mais de 18 anos e que trabalham na rocketseat
    const {idade} = item;
    const {empresa} = item;
    
    
    if (idade > 18 && empresa === "Rockeatseat") {
        return item;
    }
})

const find = usuarios.find((item) => {
    // Cria um array com objeto da pessoa que trabalha no google => undefined
    const {empresa} = item;

    if (empresa === "Google") {
        return item;
    }
})

const MapAndFilter = usuarios.map((item) => {
    // Multiplica a idade de todos por 2 e retorna quem tem a idade menor que 50 anos.
    item.idade *= 2
    return item;
}).filter((item) => {
    const {idade} = item;
    
    if ( idade < 50 ) {
        return item;
    }
})


console.log(idades); 
console.log(filter);
console.log(find);
console.log(MapAndFilter);