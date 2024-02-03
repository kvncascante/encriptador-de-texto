


function Encriptar(){
    let mensaje= document.getElementById("mensaje").value;

    let msjCifrado = mensaje.replace(/a|e|i|o|u/gi,function(x){

        if (x === "a"){
            return x = "ai";
        }
        if (x === "e"){
            return x = "enter";
        }
        if (x === "i"){
            return x = "imes";
        }
        if (x === "o"){
            return x = "ober";
        }
        if (x === "u"){
            return x = "ufat";
        }

    });

    document.getElementById("parrafo").innerHTML= msjCifrado;


    console.log(msjCifrado);

}


function Desencriptar(){
    let mensaje= document.getElementById("mensaje").value;

    let msjCifrado = mensaje.replace(/ai|enter|imes|ober|ufat/gi,function(x){

        if (x === "ai"){
            return x = "a";
        }
        if (x === "enter"){
            return x = "e";
        }
        if (x === "imes"){
            return x = "i";
        }
        if (x === "ober"){
            return x = "o";
        }
        if (x === "ufat"){
            return x = "u";
        }

    });

    document.getElementById("parrafo").innerHTML= msjCifrado;


    console.log(msjCifrado);

}