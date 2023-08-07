/////////////////////////////////EJERCICIO 1///////////////////////////////////

const e1=document.querySelector("#e1");
e1.addEventListener("click", ()=>{
    console.log("Al agregar una escucha de eventos al botón del ejercicio 1 estamos haciendo uso de una función tipo callback ya que recibe como parámetro otra función cuyoobjetivo es imprimir precisamente este texto. :)");
});



/////////////////////////////////EJERCICIO 2///////////////////////////////////
const e2= document.querySelector("#e2");

/* e2.addEventListener("click", ejercicio2(3, (valor)=>{
    console.log(typeof valor);
})); 
    ////NOTA: Si lo hacemos así se ejecuta inmediatamente al cargar la página
*/
e2.addEventListener("click", disparadorE2);

function disparadorE2(){
    ejercicio2(3, (valor)=>{
        console.log(typeof valor);
    })
}

function ejercicio2(parametroE2, ejercicio2Callback){
    console.log("2.- Crear una función que reciba como argumento una variable de cualquier tipo y un callback. La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido typeof.");
    ejercicio2Callback(parametroE2);
}



/////////////////////////////////EJERCICIO 3///////////////////////////////////

const e3Suma=document.querySelector("#e3Suma");
const e3Resta=document.querySelector("#e3Resta");
const e3Multiplicacion=document.querySelector("#e3Multiplicacion");
const e3Division=document.querySelector("#e3Division");
const e3Input1=document.querySelector("#e3Input1");
const e3Input2=document.querySelector("#e3Input2");

e3Suma.addEventListener("click", disparadorSE3);
e3Resta.addEventListener("click", disparadorRE3);
e3Multiplicacion.addEventListener("click", disparadorME3);
e3Division.addEventListener("click", disparadorDE3);

function disparadorSE3(){
    ejercicio3(e3Input1.value, e3Input2.value, (valor1, valor2)=>{
        let suma= Number(valor1) + Number(valor2);
        console.log(` La suma es: ${suma}`);
    })
}

function disparadorRE3(){
    ejercicio3(e3Input1.value, e3Input2.value, (valor1, valor2)=>{
        let resta= Number(valor1) - Number(valor2);
        console.log(` La resta es: ${resta}`);
    })
}

function disparadorME3(){
    ejercicio3(e3Input1.value, e3Input2.value, (valor1, valor2)=>{
        console.log("La multiplicación es: "+ valor1 * valor2);
    })
}

function disparadorDE3(){
    ejercicio3(e3Input1.value, e3Input2.value, (valor1, valor2)=>{
        console.log("La división es: "+ valor1 / valor2);
    })
}

function ejercicio3(valor1, valor2, ejercicio3Callback){
    console.log("3.- Crear una función que reciba como argumentos, dos números y un callback. Según el callback que se pase a la función, se devuelve la suma de los dos números, la resta de los dos números, la multiplicación de los dos números o división.");
    ejercicio3Callback(valor1, valor2);
}



/////////////////////////////////EJERCICIO 4///////////////////////////////////
const e4Mayusculas=document.querySelector("#e4Mayusculas");
const e4Minusculas=document.querySelector("#e4Minusculas");
const e4Input=document.querySelector("#e4Input");

e4Mayusculas.addEventListener("click", disparadorMayusculasE4);
e4Minusculas.addEventListener("click", disparadorMinusculasE4);

function disparadorMayusculasE4(){
    ejercicio4(e4Input.value, (cadena)=>{
        let texto=cadena.toUpperCase();
        console.log(texto);
    })
}

function disparadorMinusculasE4(){
    ejercicio4(e4Input.value, (cadena)=>{
        let texto=cadena.toLowerCase();
        console.log(texto);
    })
}

function ejercicio4(cadena, ejercicio4Callback){
    console.log('4.- Escribe una función que reciba una cadena de caracteres y debe devolver, mediante un callback, la cadena de caracteres en mayúsculas o en minúsculas.ordenSuperior("PejeLagarto", minus); -> pejelagarto ordenSuperior("PejeLagarto", mayus); -> PEJELAGARTO');
    ejercicio4Callback(cadena);
}


/////////////////////////////////EJERCICIO 5///////////////////////////////////
const arreglo=[120, 80, 200, 100, 500, 85, 9854];

e5.addEventListener("click", disparadorE5);

function disparadorE5(){
    console.log("Arreglo original: "+arreglo);
    ejercicio2(arreglo, (arreglo)=>{
        arreglo.filter(element => {
            if(element>120){
                console.log(element);
            }
            
        });
    })
}

function ejercicio2(arreglo, ejercicio5Callback){
    console.log("5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos) EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades mayores a dos horas (hacer la comparación en horas) regresar el nuevo array mediante un callback.");
    ejercicio5Callback(arreglo);
}