var btnCodificar = document.getElementById("codificar");
var btnDecodificar = document.getElementById("decodificar");

function codifica(){
    let texto = document.getElementById("resultado");
    if(texto.value == ""){
        alert('Codificar mensagem!')
    } else {
        texto.value = btoa(texto.value);
    }
}

function decodifica(){
    let texto = document.getElementById('resultado');
    if(texto.value == ""){
        alert('Decodificar mensagem!')
    } else {
        texto.value = atob(texto.value);
    }
}