var mes_ext = new Array();
mes_ext[0] = "Janeiro";
mes_ext[1] = "Fevereiro";
mes_ext[2] = "Março";
mes_ext[3] = "Abril";
mes_ext[4] = "Maio";
mes_ext[5] = "Junho";
mes_ext[6] = "Julho";
mes_ext[7] = "Agosto";
mes_ext[8] = "Setembro";
mes_ext[9] = "Outubro";
mes_ext[10] = "Novembro";
mes_ext[11] = "Dezembro";

var sema = new Array();
sema[0] = "Domingo";
sema[1] = "Segunda-Feira";
sema[2] = "Terça-Feira";
sema[3] = "Quarta-Feira";
sema[4] = "Quinta-Feira";
sema[5] = "Sexta-Feira";

function Exibir() {
    rep = setInterval(Repetir, 1000);
}

function Repetir() {
    //criando variavel dia 
    var hoje = new Date();
    var dia = hoje.getDate();

    if (dia < 10) {

        dia = "0" + dia;
    }
    //criando variavel mes 
    var mes = hoje.getMonth();
    mes = mes + 1;
    if (mes < 10) {
        mes = "0" + mes;
    }
    //criando ano atual
    var ano = hoje.getFullYear();

    //criando hora
    var hora = hoje.getHours();
    if (hora < 10) {
        hora = "0" + hora;
    }

    //criando minuto
    var minu = hoje.getMinutes();
    if (minu < 10) {
        minu = "0" + minu;
    }

    //criando segundo
    var segun = hoje.getSeconds();
    if (segun < 10) {
        segun = "0" + segun;
    }
//criando variavel semana
var sm = hoje.getDay();


//passando todas as variaveis para o html

document.getElementById("Dia").value=dia;
document.getElementById("Mes").value=mes;
document.getElementById("Ano").value=ano;
document.getElementById("noMes").value=mes_ext[mes-1];
document.getElementById("Hr").value=hora;
document.getElementById("Mim").value=minu;
document.getElementById("Seg").value=segun;
document.getElementById("diaSe").value=sema[sm];

}

function Parar()
{
    //criando o botão parar o tempo 
    clearInterval(rep);
}

function Limpar()
{
    clearInterval(rep);
    document.getElementById("Dia").value="";
    document.getElementById("Mes").value="";
    document.getElementById("Ano").value="";
    document.getElementById("noMes").value="";
    document.getElementById("Hr").value="";
    document.getElementById("Mim").value="";
    document.getElementById("Seg").value="";
    document.getElementById("diaSe").value="";  
}