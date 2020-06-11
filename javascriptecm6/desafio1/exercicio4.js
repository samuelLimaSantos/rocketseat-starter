/** 
 * 4º Exercício:
 * 
 * 4.1 Desestruturação simples:
 * A partir do seguinte objeto:
 * const empresa = {  nome: 'Rocketseat',  endereco: {
 *     cidade: 'Rio do Sul',
 *     estado: 'SC',
 *   }
 * };
 * Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, nofim deve ser possível fazer o seguinte:
 * console.log(nome); // Rocketseat
 * console.log(cidade); // Rio do Sul
 * console.log(estado); // SC
 * 
 * 
 * 4.2 Destruturação em parâmetros
 * Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuários
 * separadamente e a função poder retornar apenas:
 * return `${nome} tem ${idade} anos.`;
*/


//4.1

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


// 4.2

function mostraInfo({nome, endereco: {cidade}}) {
    return `${nome} esta localizada em ${cidade}`;
}

console.log(mostraInfo(empresa));