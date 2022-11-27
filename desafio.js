/* Criar um algoritmo capaz de receber uma data de nascimento e verificar quantos dias se passaram desde
    aquela data.
    O algoritmo tem que considerar os anos bissextos tbm.*/


var day1 = new Date(prompt('Digite a data'));
var day2 =  new Date();

var difference = day2.getTime() - day1.getTime();
var days =parseInt(difference / (1000 * 3600 * 24)) ;

document.write(`Se passaram ${days} dias desde a sua data de nascimento.`);











