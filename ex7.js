import prompt from 'prompt-sync'
let ler = prompt();

console.log('INGRESSO');

console.log('Informe a quantidade de ingressos');
let qtd = Number(ler());

console.log('Informe o código do ingresso');
let cod = ler();

let resul=[];

for(let cont = 0+1; cont <= qtd; cont++){
    resul.push(cod+cont);
}

for(let item of resul){
    console.log(item);
}