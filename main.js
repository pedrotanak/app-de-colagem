var reconhecimebtofalla = window.webkitSpeechRecognition;
var escuta = new reconhecimebtofalla();
var textbox = document.getElementById("textbox");
function botao() {
    textbox.innerHTML = "";
    escuta.start();
}
escuta.onresult = function (evento) {
    var conteudo = evento.results[0][0].transcript;
    textbox.innerHTML = conteudo;
    if (conteudo == "minha selfie") {
        fala();

    }
}
function fala() {
    var sintetizador = window.speechSynthesis;
    guardaFrase = "Tirando sua Selfie em 5 segundos";
    var fale = new SpeechSynthesisUtterance(guardaFrase);
    sintetizador.speak(fale);
    Webcam.attach(camera);
    setTimeout(function () {
        tirefoto();
        salvafoto();
    }, 5000
    );

}
var camera = document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 200,
    image_format: "jpeg",
    jpeg_quality: 90
});

function tirefoto() {
    Webcam.snap(function (endereco) {
        document.getElementById("resultado").innerHTML = "<img id='selfie' src='" + endereco + "'> ";
    });
}
function salvafoto() {
    var link=document.getElementById("salva");
    img=document.getElementById("selfie").src;
    link.href=img;
    link.click()
}