import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DAS DOAÇÕES');

console.log('\nInforme o nome do projeto:');
let nome = ler();

console.log('Informe a quantidade de doações:')
let qtd = Number(ler());

console.log('Informe a meta de doações:')
let meta = Number(ler());

let num = [];

console.log('\nInforme o valor das doações:');
for(let cont=0; cont < qtd; cont++){
    let numeros = Number(ler());
    num.push(numeros);
}

let maior = num[0];
for(let i = 0; i < qtd; i++){
    if(num[i] > maior){
        maior = num[i];
    }
}

let soma = 0;
for(let cont = 0; cont < qtd; cont++){
    soma += num[cont];
}


console.log('O projeto '+ nome+ ' recebeu '+ qtd + ' doações, totalizando ' + soma + ' reais');
console.log('As doações recebidas foram');
for(let item of num){
    process.stdout.write(item + '-');
}
console.log('\nA maior doação foi ' + maior + ' reais');
if(soma > meta){
    console.log('A meta foi atingida!');
}

else{
    console.log('A meta ainda não foi atingida...');
}