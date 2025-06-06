import prompt from 'prompt-sync'
let ler = prompt();

console.log('NÚMEROS ALEATÓRIOS');

console.log('\nInforme a quantidade de números a gerar:');
let qtd= Number(ler());

let numeros= [];

for(let cont = 0; cont <= qtd; cont++){
    let num = parseInt(Math.random()*100);
    numeros.push(num);
}

for(let item of numeros){
    console.log(item);
}