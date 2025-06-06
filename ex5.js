import prompt from 'prompt-sync'
let ler = prompt();

console.log('---PROGRAMA DO VETOR---');

console.log('Informe um número:');
let num = Number(ler());

let numeros = [];

for(let cont = 0; cont <= 10; cont++){
    let conta = num*cont;
    numeros.push(conta);
}

for(let item of numeros){
    console.log(item);
}