import prompt from 'prompt-sync'
let ler = prompt();

console.log('---0PROGRAMA DOS NOMES---');

console.log('Informe os 5 nomes');
let n1 = ler();
let n2 = ler();
let n3 = ler();
let n4 = ler();
let n5 = ler();

let nomes = [];

nomes.push(n1);
nomes.push(n2);
nomes.push(n3);
nomes.push(n4);
nomes.push(n5);


console.log('\nVocê digitou os nomes:')
for(let item of nomes){
    console.log(item);
}