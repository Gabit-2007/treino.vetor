import prompt from 'prompt-sync'
let ler = prompt();

console.log('---0PROGRAMA DOS NÚMERO---');

console.log('Informe os 5 números');
let n1 = Number(ler());
let n2 = Number(ler());
let n3 = Number(ler());
let n4 = Number(ler());
let n5 = Number(ler());

let nomes = [];

nomes.push(n1);
nomes.push(n2);
nomes.push(n3);
nomes.push(n4);
nomes.push(n5);


console.log('\nVocê digitou os números:')
for(let item of nomes){
    console.log(item);
}