const empresa = {
    nome: "Rocketseat",
    endereco: {
        cidade: "Rio do Sul",
        estado: "SC"
    }
};

const {nome} = empresa;
const {endereco: {cidade}} = empresa;
const {endereco: {estado}} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo({nome, endereco: {cidade}}) {
    return `${nome} esta localizada em ${cidade}`;
}

console.log(mostraInfo(empresa));