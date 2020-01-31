document.querySelector(".botones").addEventListener("click",function(event){

    buttonClick(event.target.innerText);
});

function buttonClick(value){
    console.log("El valor es: " +value);
    eleccionDeFuncion(value);

}

function eleccionDeFuncion(funcionElegida){
    switch(funcionElegida){
        case 'Sumar':
            Sumar ();
            break;

    }
}
function Sumar () {
  var numero1 = document.getElementById("num1").value;
  var numero2 = document.getElementById("num2").value;
  var resultadoDeSuma = parseInt(numero1) + parseInt(numero2);
  alert("La suma es: "+ resultadoDeSuma);
}