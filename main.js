var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("output");

function criptografar(){
    var texto = textInput.value; 

    var resultCripto = texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");

    document.getElementById('output').innerHTML=`<textarea readonly id="input-texto">`+resultCripto +`</textarea>`+`<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>`
}


function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");

    document.getElementById ('output').innerHTML=`<textarea readonly id="input-texto">`+resultDescripto+`</textarea>`+`<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>`
}

function copiar() {
    var textoCopiado = document.getElementById('input-texto');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand('copy');
    alert("O texto copiado é: " + textoCopiado.value);
}