import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DAS DOAÇÕES');

console.log('\nInforme o nome do projeto:');
let nome = ler();


let num = [];

console.log('\nInforme o valor das doações:');
while(true){
    let numeros = Number(ler());

    if( numeros == -1){
        break;
    }
    num.push(numeros);
}

let maior = num[0];
for(let i = 0; i < num.length; i++){
    if(num[i] > maior){
        maior = num[i];
    }
}

let soma = 0;
for(let cont = 0; cont < num.length; cont++){
    soma += num[cont];
}


console.log('O projeto '+ nome+ ' recebeu '+ num.length + ' doações, totalizando ' + soma + ' reais');
console.log('As doações recebidas foram');
for(let item of num){
    process.stdout.write(item + '-');
}
console.log('\nA maior doação foi ' + maior + ' reais');