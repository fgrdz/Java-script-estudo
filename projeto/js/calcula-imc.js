
var pacienteS = document.querySelectorAll(".paciente");

for(var i = 0; i < pacienteS.length ; i++ ){

var paciente = pacienteS[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura =  tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var AlturaEhValida = validaAltura(altura);
var PesoEhValido = validaPeso(peso);


if(!PesoEhValido){
    console.log("Peso inválido");
    PesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("invalid");
}
if(!AlturaEhValida){

    console.log("Altura inválida");
    AlturaEhValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("invalid");
    
}

if(PesoEhValido && AlturaEhValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);    
} 
};


if(PesoEhValido && AlturaEhValida){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;    
};

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso/ (altura*altura);

    return imc.toFixed(2);
}

function validaPeso(peso){

    if(peso >= 0 && peso < 1000){
        
        return true;
    }else{
        return false;
    }

}
function validaAltura(altura){

    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}
