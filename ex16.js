import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DA MÉDIA');

console.log('\nInforme a quantidade de médias:');
let qtd = Number(ler());

let num = [];

console.log('\nInforme as médias:');
for(let cont=0; cont < qtd; cont++){
    let numeros = Number(ler());
    num.push(numeros);
}

let soma = 0;
for(let i = 0; i < qtd; i++){
    soma += num[i];
}

let media = soma / num.length;

for(let item of num){
    process.stdout.write(item + '-');
}

console.log('\nA média é' + media.toFixed(2));