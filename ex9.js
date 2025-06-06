import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DO DOBRO');

console.log('\nInforme a quantidade de números no vetor:');
let qtd = Number(ler());

let num = [];

console.log('\nInforme os números:');
for(let cont=0; cont <= qtd; cont++){
    let numeros = Number(ler());
    num.push(numeros);
}

let num2=[];

for(let i = 0; i <= qtd; i++){
    num2.push(num[i]*2);
}

console.log('Os números ')