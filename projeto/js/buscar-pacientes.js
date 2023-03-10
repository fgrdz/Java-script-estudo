let botaoAdicionar = document.querySelector("#buscar=paciente");

botaoAdicionar.addEventListener('click', function(){
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){

        if( xhr.status == 200){

        let resposta = xhr.responseText;
        let pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        })
    }else{
        alert("erro ao buscar pacientes");
        console.log(xhr.status);
    }
    });

    xhr.send();

});