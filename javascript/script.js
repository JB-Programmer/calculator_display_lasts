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

//VariableForTheBox
//var bigBox;
bigBox = document.getElementById("cuadroOperaciones");

//Operation toDo
var input1;
var input2;
var operationToDo = "sumar";
var aMostrar = 0;
//var operationSimbol;

function operate() {
    //Variables to get the content of the inputs. //Ojo, esto tiene que ir dentro de la funcion para que cada vez que actue, revise lo que quiero hacer.

    input1 = parseInt(document.getElementById("num1").value); 

    input2 = parseInt(document.getElementById("num2").value);

    operationToDo = document.querySelector("input[name='op']:checked").value; 



    if (operationToDo == "sumar" ) {
        aMostrar = add(input1, input2);
        operationSimbol = " + ";

    } else if (operationToDo == "restar") {
        aMostrar = minus(input1, input2);
        operationSimbol = " - ";


    } else if (operationToDo == "multiplicar") {
        aMostrar = multi(input1, input2);
        operationSimbol = " * ";

    } else if (operationToDo == "dividir"){
        aMostrar = divi(input1, input2);
        operationSimbol = " / ";
    
    } else {
        alert("Please select operation to do");
    }
    
    resultado.value = parseInt(aMostrar);
}

myButton.addEventListener("click", function(){operate(), toBox()});


//OJO BORRE DE AQUI LA OTRA FUNCION GOTOBOX


var lastTenOperations = [];
var strInput1;
var strInput2;
var strAmuestra;
var operationSimbol;
    function  toBox(){
        strInput1 = document.getElementById("num1").value;
        strInput2 = document.getElementById("num2").value;
        strAmuestra = aMostrar.toString();
        if (lastTenOperations.length<10) {
                lastTenOperations.unshift((strInput1 + operationSimbol + strInput2 + " = " + strAmuestra));

        } else {
                lastTenOperations.pop();
                lastTenOperations.unshift((strInput1 + operationSimbol + strInput2 + " = " + strAmuestra));
         }
        console.log(strInput1 + operationSimbol + strInput2 + " = " + strAmuestra);
        console.log(lastTenOperations);
        bigBox.innerHTML = lastTenOperations.join("<br>");
}


