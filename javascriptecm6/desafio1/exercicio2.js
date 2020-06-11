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
    const {idade} = item;
    return idade;
})

const filter = usuarios.filter((item) => {
    const {idade} = item;
    const {empresa} = item;
    
    
    if (idade > 18 && empresa === "Rockeatseat") {
        return item;
    }
})

const find = usuarios.find((item) => {
    const {empresa} = item;

    if (empresa === "Google") {
        return item;
    }
})

const MapAndFilter = usuarios.map((item) => {
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