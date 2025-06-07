import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa do par');

console.log('Informe a quantidade de números');
let qtd = Number(ler());

let numeros = [];
console.log('Informe os números');
for(let con = 0; con < qtd; con++){
    let num1 = Number(ler());
    numeros.push(num1);
}


console.log('Os números informados são:');
for(let item of numeros){
    console.log(item);
}

console.log('Os números pares são:')
for(let n = 0; n < qtd; n++){
    if((numeros[n]% 2) == 0){
        console.log(numeros[n]);
    }
}