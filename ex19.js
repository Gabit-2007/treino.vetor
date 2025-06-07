import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DA NOTA');

console.log('\nInforme a quantidade de notas:');
let qtd = Number(ler());

let num = [];

console.log('\nInforme as notas:');
for(let cont=0; cont < qtd; cont++){
    let numeros = Number(ler());
    num.push(numeros);
}

let MeNota = num[0];
for(let i = 0; i < qtd; i++){
    if(num[i] < MeNota){
        MeNota = num[i];
    }
}

let MaNota = num[0];
for(let i = 0; i < qtd; i++){
    if(num[i] > MaNota){
        MaNota = num[i];
    }
}


let soma = 0;
for(let i = 0; i < qtd; i++){
    soma += num[i];
}

let media = soma / num.length;

console.log('Notas digitadas');
for(let item of num){
    process.stdout.write(item + '-');
}

console.log('\nA menor nota é ' + MeNota);
console.log('\nA maior nota é ' + MaNota);
console.log('\nA média é ' + media);