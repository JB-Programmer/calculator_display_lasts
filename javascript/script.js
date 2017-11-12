//Operation functions

function add(a,b) {
    return a + b;
}

function minus(a,b) {
    return a - b;
}

function multi(a,b) {
    return a * b;
}

function divi(a,b) {
    return a / b;
}



//Operation that the user wants to do

//Result display
var resultado = document.getElementById("resul");

//Variable for the button
var myButton = document.getElementById("calcu");

//Operation toDo

function operate() {
    var aMostrar;
    //Variables to get the content of the inputs
    var input1 = parseInt(document.getElementById("num1").value); 
    var input2 = parseInt(document.getElementById("num2").value);
    var operationToDo = document.querySelector("input[name='op']:checked").value; //Ojo, esto tiene que ir dentro de la funcion para que cada vez que actue, revise lo que quiero hacer.



    if (operationToDo == "sumar" ) {
        aMostrar = add(input1, input2);

    } else if (operationToDo == "restar") {
        aMostrar = minus(input1, input2);

    } else if (operationToDo == "multiplicar") {
       aMostrar = multi(input1, input2);

    } else {
        aMostrar = divi(input1, input2);
    
    }
    resultado.value = aMostrar;
}

myButton.addEventListener("click", operate)

  


