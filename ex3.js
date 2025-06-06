import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DO VETOR');

console.log('Informe quantos números serão digitados:');
let qtd = Number(ler());

let numeros = []

for(let cont = 0; cont < qtd; cont++){
    let num = Number(ler());
    numeros.push(num);
}


console.log('\nVocê digitou os números:');

for(let item of numeros){
    console.log(item);
}