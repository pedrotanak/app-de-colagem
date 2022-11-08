var reconhecimebtofalla=window.webkitSpeechRecognition;
var escuta=new reconhecimebtofalla();
var textbox=document.getElementById("textbox");
function botao(){
    textbox.innerHTML="";
    escuta.start();
}
escuta.onresult=function (evento){
    var conteudo=evento.results[0][0].transcript;
    textbox.innerHTML=conteudo;
}