import prompt from 'prompt-sync'
let ler = prompt();

console.log('MÊS');

console.log('Informe o mês');
let num = Number(ler());

let mes= ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

let resul = '';

if(num == 0){
    resul = mes[0];
}

else if(num == 1){
    resul = mes[1];
}

else if(num == 2){
    resul = mes[2];
}

else if(num == 3){
    resul = mes[3];
}

else if(num == 4){
    resul = mes[4];
}

else if(num == 5){
    resul = mes[5];
}

else if(num == 6){
    resul = mes[6];
}

else if(num == 7){
    resul = mes[7];
}

else if(num == 8){
    resul = mes[8];
}

else if(num == 9){
    resul = mes[9];
}

else if(num == 10){
    resul = mes[10];
}

else if(num == 11){
    resul = mes[11];
}

console.log(resul)