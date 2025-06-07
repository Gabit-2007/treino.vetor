import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa do piloto');

console.log('Informe a quantidade de pilotos');
let qtd = Number(ler());

let pos1 = [];
console.log('Informe a posição que eles ocupam no inicio da corrida');
for(let con = 0; con < qtd; con++){
    let num1 = Number(ler());
    pos1.push(num1);
}

let pos2 = [];
console.log('Informe a posição que eles ocupam na linha de chegada');
for(let i = 0; i < qtd; i++){
    let num2 = Number(ler());
    pos2.push(num2);
}

for(let n = 0; n < qtd; n++){
    if(pos1[n] < pos2[n]){
        console.log('O piloto ' + (n+1) + ' Avançou ' + (pos2[n]-pos1[n]) + ' posições.');
    }

    else if(pos1[n] > pos2[n]){
        console.log('O piloto ' + (n+1) + ' Retrocedeu ' + (pos1[n]-pos2[n]) + ' posições');
    }

    else if(pos1[n] == pos2[n]){
        console.log('O piloto ' + (n+1) + ' Manteve a posição');
    }
}