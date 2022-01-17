var dataNasc = "17/01/1991";

var dataAtual = new Date();
var anoAtual = dataAtual.getFullYear();
var mesAtual = dataAtual.getMonth() + 1;
var diaAtual = dataAtual.getDay();
var anoNascParts = dataNasc.split('/');

var diaNasc = anoNascParts[0];
var mesNasc = anoNascParts[1];
var anoNasc = anoNascParts[2];

var idade = anoAtual - anoNasc;

if(mesAtual < mesNasc){
    //Se o mês atual for menor que o nascimento, não fez aniversário ainda;
    console.log(idade - 1);

}else if(mesAtual == mesNasc){
    //Se estiver no mês do nascimento, verificar o dia;

    if(new Date().getDate() < diaNasc){
        //Se a data for menor que o dia de nascimento ele ainda não fez aniversário;
        console.log(idade - 1);

    }else{
        console.log(idade);
    }
}