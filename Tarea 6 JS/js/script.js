// DOM

//Obtener por ID

document.getElementById("demo").innerHTML = 'Este párrafo tiene un ID "demo"';


//Por Nombre de Etiqueta
var btn = document.getElementById("contador");

btn.addEventListener("click", () => 
{ var h2s = document.getElementsByTagName("h2");
  alert(`Numero de H2: ${h2s.length}`); });

//Por clase
var divs = document.getElementsByClassName("Ejemplo color");
divs[0].style.backgroundColor = "red";

//Por css
document.querySelector(".azul").style.color = "blue";

//colecciones html

var coleccion = document.getElementsByTagName("span");

var btn2 = document.getElementById("spanCh");

btn2.addEventListener("click", () => 
{ coleccion[1].innerHTML = 'Cambié :D'});




// Control de Flujo

// If y else
var btn3 = document.getElementById("pares");

btn3.addEventListener("click", () => 
{ 
  if(document.getElementById('even').value%2==0){
    alert(`Numero par`);
  } else {
    alert(`Numero impar`);
  }
});

// Switch

var btn4 = document.getElementById("dia");

switch (new Date().getDay()) {
  case 0:
    day = "Domingo";
    break;
  case 1:
    day = "Lunes";
    break;
  case 2:
    day = "Martes";
    break;
  case 3:
    day = "Miércoles";
    break;
  case 4:
    day = "Jueves";
    break;
  case 5:
    day = "Viernes";
    break;
  case 6:
    day = "Sábado";
}

btn4.addEventListener("click", () => 
{ 
  alert(`Hoy es: ` + day);
});

// Try catch y Objeto Error 

function myFunction() {
  const message = document.getElementById("mensaje");
  message.innerHTML = "";
  let x = document.getElementById("input2").value;
  try { 
    if(x == "")  throw "Vacío";
    if(isNaN(x)) throw "No es un número";
    if(x > 10)   throw "Muy alto, menor a 10";
    if(x < 5)  throw "Muy bajo, mayor a 5";
  }
  catch(err) {
    message.innerHTML = "Error: " + err;
  }
}





// Iteraciones

//for

var n = 5;
var forbtn = document.getElementById("forbtn");

forbtn.addEventListener("click", () => 
{ 
  for (let i = 1; i <= n; i++) {
    console.log(`Diseño de Aplicaciones Web`);
  }
});

//while

var whilebtn = document.getElementById("whilebtn");

whilebtn.addEventListener("click", () => {
  var texto = "";
  var i = 0;
  while (i < 10) {
    texto += "<br>El número es " + i;
    i++;
  }
  document.getElementById("whileR").innerHTML = texto;
});


// do while

var dowhilebtn = document.getElementById("dowhilebtn");

dowhilebtn.addEventListener("click", () => {
  var texto = "";
  var i = 0;
  do {
    texto += "<br>El número es " + i;
    i++;
  } while (i< 5)
  document.getElementById("dowhileR").innerHTML = texto;
});

// Comparadores

function IgnoreType(){
  alert(123 == '123');
}

function CompareType(){
  alert(123 === '123');
}

//Operadores aritmeticos

function Sumar(){
  var suma =  Number(document.getElementById('valor1').value) + Number(document.getElementById('valor2').value);

  alert("Resultado: "+ suma);
}

function Restar(){
  var suma =  Number(document.getElementById('valor1').value) - Number(document.getElementById('valor2').value);

  alert("Resultado: "+ suma);
}

//Operadores lógicos

function AND(){
  alert(document.getElementById('chk1').checked&&document.getElementById('chk2').checked);
}

function OR(){
  alert(document.getElementById('chk1').checked||document.getElementById('chk2').checked);
}

function NOT(){
  alert(!(document.getElementById('chk1').checked&&document.getElementById('chk2').checked));
}











// Objeto Number

function ProbarNumber(){
  var b = Number('123');
  alert(b === 123);
}

// MAth

function AlertE(){
  alert(Math.E);
}

function AlertRaiz(){
  alert(Math.SQRT2);
}

function AlertPI(){
  alert(Math.PI);
}

//date
var hoy = new Date();
function AlertToday(){
  alert(hoy);
}

function AlertDAY(){
  alert(hoy.getDay());
}
function AlertMonth(){
  alert(hoy.getMonth());
}
function AlertYear(){
  alert(hoy.getFullYear());
}









//Cadenas Literales
function NoCadenasLiterales() {
  console.log("línea 1 de cadena de texto" + 
  "línea 2 de cadena de texto");
}

function CadenasLiterales() {
  console.log(`línea 1 de la cadena de texto
  línea 2 de la cadena de texto`);
}

//Objeto String

function Mayuscula(){
  var text = document.getElementById("Mayus");
  text.innerHTML = text.innerHTML.toUpperCase();
}













//Arreglos

function PrintArray() {
  var mensaje = document.getElementById("arrayR");
  var frutas = ["Manzana", "Banana"];

  mensaje.innerHTML = frutas;
}

//arreglos tipados

function PrintTArray() {
  var buffer = new ArrayBuffer(16);
  if (buffer.byteLength === 16) {
    alert("Sí, son 16 bytes");
  } else {
    alert("¡Oh no, es del tamaño incorrecto!");
  }
}
