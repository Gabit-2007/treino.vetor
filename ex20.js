import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DA SITUAÇÃO');

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

let resul = '';
if(MeNota < 6){
    resul = 'Nem todos os alunos passaram';
}

else if(MeNota >= 6){
    resul = 'Todos os alunos passaram';
}

console.log(resul);