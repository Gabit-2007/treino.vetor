import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa dos nomes');

console.log('Informe a quantidade de nomes');
let qtd = Number(ler());

let nomes = [];
console.log('Informe os nomes');
for(let con = 0; con < qtd; con++){
    let nom = ler();
    nomes.push(nom);
}


console.log('Os nomes informados são:');
for(let item of nomes){
    console.log(item);
}

console.log('Os nomes que começam com L são:')
for(let n = 0; n < qtd; n++){
    if(nomes[n].toUpperCase().startsWith('L')){
        console.log(nomes[n]);
    }
}