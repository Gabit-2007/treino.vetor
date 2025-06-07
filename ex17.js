import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DA MAIOR NOTA');

console.log('\nInforme a quantidade de notas:');
let qtd = Number(ler());

let num = [];

console.log('\nInforme as notas:');
for(let cont=0; cont < qtd; cont++){
    let numeros = Number(ler());
    num.push(numeros);
}

let Mnota = num[0];
for(let i = 0; i < qtd; i++){
    if(num[i] > Mnota){
        Mnota = num[i];
    }
}

console.log('Notas digitadas');
for(let item of num){
    process.stdout.write(item + '-');
}

console.log('\nA maior nota é ' + Mnota);