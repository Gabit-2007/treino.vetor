import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DO DOBRO');

console.log('\nInforme a quantidade de números no vetor:');
let qtd = Number(ler());

let num = [];

console.log('\nInforme os números:');
for(let cont=0; cont < qtd; cont++){
    let numeros = Number(ler());
    num.push(numeros);
}

let num2=[];

for(let i = 0; i < qtd; i++){
    num2.push(num[i]*2);
}

console.log('Os números que você escreveu são:');
for(let item of num){
    console.log(item);
}

console.log('O dobro desses números é:');
for(let item2 of num2){
    console.log(item2);
}