const btn_encriptar = document.getElementById("encriptar");
const btn_desencriptar = document.getElementById("desencriptar");
const mostrar = document.getElementById("resultado");
let textoUsuario = document.getElementById("text-usuario");
let textoEncriptado = "";
let textoDesencriptado = "";

btn_encriptar.addEventListener("click", function(){
    encriptarTexto(textoUsuario.value);
});

btn_desencriptar.addEventListener("click", function(){
    desencriptarTexto(textoUsuario.value);
});

//Funciones para encriptar o desencriptar
function encriptarTexto(texto){
    textoEncriptado = "";
    for(let letra of texto){
        let vocal = "";
        if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
            switch(letra){
                case "a":
                    vocal = "ai";
                    break;

                case "e":
                    vocal = "enter";
                    break;

                case "i":
                    vocal = "imes";
                    break;

                case "o":
                    vocal = "ober";
                    break;

                case "u":
                    vocal = "ufat";
                    break;
            }
            textoEncriptado += vocal;
        } else {
            textoEncriptado += letra
        }
    }
    mostrarTexto(textoEncriptado);
}

function desencriptarTexto(texto){
    textoEncriptado = "";
    for(let i = 0; i < texto.length; i++){
        let letra = texto[i];
        if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
            switch(letra){
                case "a":
                    i+=1;
                    break;

                case "e":
                    i+=4;
                    break;

                case "i":
                    i+=3;
                    break;

                case "o":
                    i+=3;
                    break;

                case "u":
                    i+=3;
                    break;
            }
        }
        textoEncriptado += letra
    }
    mostrarTexto(textoEncriptado);
}

function mostrarTexto(texto){
    mostrar.innerHTML = texto;
}

function copiarTexto(){
    navigator.clipboard.writeText(mostrar.outerText)
}