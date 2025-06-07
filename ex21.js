import prompt from 'prompt-sync'
let ler = prompt();

console.log('DIA DA SEMANA');

console.log('Informe o dia da semana');
let num = Number(ler());

let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

let resul = '';

if(num == 0){
    resul = dias[0];
}

else if(num == 1){
    resul = dias[1];
}

else if(num == 2){
    resul = dias[2];
}

else if(num == 3){
    resul = dias[3];
}

else if(num == 4){
    resul = dias[4];
}

else if(num == 5){
    resul = dias[5];
}

else if(num == 6){
    resul = dias[6];
}

console.log(resul)