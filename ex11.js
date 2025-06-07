import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DA SOMA');

console.log('\nInforme a quantidade de números no vetor:');
let qtd = Number(ler());

let num = [];

console.log('\nInforme os números:');
for(let cont=0; cont < qtd; cont++){
    let numeros = Number(ler());
    num.push(numeros);
}

let num2=[];

console.log('\nInforme os outros números:');
for(let i = 0; i < qtd; i++){
    let numeros2 = Number(ler());
    num2.push(numeros2);
}

let num3 = [];
for(let n = 0; n < qtd; n++){
    let numeros3 = num[n]+num2[n];
    num3.push(numeros3);
}

console.log('Primeiro vetor:');
for(let item of num){
    console.log(item);
}

console.log('Segundo vetor:');
for(let item2 of num2){
    console.log(item2);
}

console.log('Soma:');
for(let item3 of num3){
    console.log(item3);
}