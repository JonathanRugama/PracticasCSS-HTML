document.querySelector(".botones").addEventListener("click",function(event){

    buttonClick(event.target.innerText);
});

function buttonClick(value){
    console.log("La operación seleccionada es: " +value);
    eleccionDeFuncion(value);

}

function eleccionDeFuncion(funcionElegida){
    switch(funcionElegida){
        case 'Sumar':
            Sumar ();
            break;
        case 'Prototype':
            var deepJS = new Taller ("Kyle");
            var reactJS = new Taller ("Suzy");
            deepJS.preguntar("Es 'prototype' una clase?");
            reactJS.preguntar("No es feo el prototipo?");
            break;
        case 'Clases':
            var visualStudio = new TallerDos("Jonathan");
            visualStudio.Preguntar("Este es un curso de 'Clases'?");
            break;


    }
}

function Taller(profesor) {
    this.profesor = profesor;
}
Taller.prototype.preguntar = function (pregunta) {
    console.log(this.profesor, pregunta);
}


class TallerDos {
    constructor(profesor) {
        this.profesor = profesor;
    }
    Preguntar(pregunta) {
        console.log (this.profesor, pregunta);
    }
}

function Sumar () {
    var numero1 = document.getElementById("num1").value;
    var numero2 = document.getElementById("num2").value;
    var resultadoDeSuma = parseInt(numero1) + parseInt(numero2);
    alert("La suma es: "+ resultadoDeSuma);
  }