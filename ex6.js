import prompt from 'prompt-sync';
let ler = prompt();

console.log('SOLETRAR');

console.log('\nInforme a frase:');
let fra = ler();

let i = 0;
let con = 1; 


console.log('A frase é:')
while (i < fra.length) {
    let carac = fra[i];
    if (carac == " ") {
        console.log(' ');
    } else {
        console.log(carac);
        con++;
    }
    i++;
}
