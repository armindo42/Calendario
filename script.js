  function getDay() {
  var date = document.getElementById("date").value;
  
 
  const diasDaSemana = [
    'O dia da semana é sabado ',
  'O dia da semana é Domingo',
   'O dia da semana é Segunda-feira', 
   'O dia da semana é Terça-feira', 
   'O dia da semana é Quarta-feira', 
   'O dia da semana é Quinta-feira', 
   'O dia da semana é Sexta-feira', 
   'O dia da semana é Sábado'];


var xxdate = date;

  
  
 var somames =  [9, 0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
 var somames1 = 0;
 
 
// Separar em três partes
var dia = xxdate.slice(8);
var mes = xxdate.slice(5, 7);
var ano = xxdate.slice(0, 4);
 
   
    var anonumerico = parseInt(ano);
    var mesnumerico = parseInt(mes);
    var dianumerico = parseInt(dia);


   somames1 = somames[mesnumerico];
   somadia1 = dianumerico;

    

     var ano1582 = -401;

     var diasemana = 5;
     var bissexto1 = "N";
     var bissexto1externo = "N";

      var resto4 = 0;
      var resto100 = 0;
      var resto400 = 0;
    
     
     while (ano1582 < anonumerico) {
      diasemana = diasemana + 1;
      ano1582 = ano1582 + 1;
       resto4 = ano1582 % 4;
       resto100 = ano1582 % 100;
       resto400 = ano1582 % 400;
       
      if (resto4 == 0 ) { bissexto1 = "S"};
      if (resto100 == 0 ) {bissexto1 = "N"};
      if (resto400 == 0) {bissexto1 = "S"};
      bissexto1externo = "N";
      if (bissexto1 == "S" ) {
      bissexto1externo = "S";
      diasemana = diasemana + 1;

     //  ano1582 = ano1582 + 1;

      bissexto1 = "N";
} 
  }


 diasemana = diasemana + somames[mesnumerico];
 diasemana = diasemana + dianumerico;

 if (bissexto1externo = "S" && mesnumerico < 3) {diasemana = diasemana -1};
  
 var esteébissexto = 0;

 
diasemana = diasemana % 7;

 

day = diasDaSemana[diasemana];
document.getElementById("day").innerHTML = day;

 
nova(anonumerico, mesnumerico, somadia1)

 
}  

 function nova (anonumerico, mesnumerico, somadia1) {

    
   const diasDaSemana1 = [
    'O dia da semana é sabado1 ',
  'O dia da semana é Domingo1',
   'O dia da semana é Segunda-feira1', 
   'O dia da semana é Terça-feira1', 
   'O dia da semana é Quarta-feira1', 
   'O dia da semana é Quinta-feira1', 
   'O dia da semana é Sexta-feira1', 
   'O dia da semana é Sábado1'];
    
   
var somamesx =  [9, 0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];

    
 
    var anox = (anonumerico );
     
    var bissextox = ~~(anonumerico / 4);
    
    var ano100x = ~~(anonumerico / 100);
       
 var ano400x = ~~(anonumerico /400);
  
 var diasemanax = (anox + bissextox - ano100x + ano400x);
  
 
 
  

  
 

 if (anonumerico % 4 === 0 && (anonumerico % 100 !== 0 || anonumerico % 400 === 0) ) {
  alert ("anomumerico = " + anonumerico + "este ano é bissexto");
  if (mesnumerico < 3) {diasemanax = diasemanax  - 1; alert("subtraiu  1 mes < 3");}
  } 
  
 
  
  

  diasemanax = diasemanax + somamesx[mesnumerico];
  diasemanax = diasemanax + somadia1;
  
   
  
  
 
  diasemanax1 = diasemanax % 7;
 
  

    

 

var diasemana
  day = diasDaSemana1[diasemanax1];
   
document.getElementById("day1").innerHTML = day;

  
 }

  

 


