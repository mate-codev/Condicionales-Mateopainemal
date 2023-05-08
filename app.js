// N°1
/* const num1 = Number(prompt("Ingrese el primer número:"));
const num2 = Number(prompt("Ingrese el segundo número:"));

if (num1 > num2) {
	console.log(`${num1} es mayor que ${num2}`);
} else {
	console.log(`${num1} no es mayor que ${num2}`);
} */

// N°2
/* const num1 = Number(prompt("Ingrese el primer numero"));
const num2 = Number(prompt("Ingrese el segundo numero"));

if (num1 === num2) {
	console.log(`${num1} y ${num2} son iguales.`);
} else {
	console.log(`${num1} y ${num2} son diferentes.`);
} */

// N°3
/* const num1 = Number(prompt("Ingrese el primer numero"));
const num2 = Number(prompt("Ingrese el segundo numero"));

if (num1 > num2) {
	console.log(`${num1} es mas grande que ${num2}`);
} else if (num2 > num1) {
	console.log(`${num2} es mas grande que ${num1}`);
} else {
	console.log(`${num1} y ${num2} son iguales`);
}
 */

// N°4
/* const num1 = Number(prompt("Ingrese el primer numero"));
const num2 = Number(prompt("Ingrese el segundo numero"));
const num3 = Number(prompt("Ingrese el tercer numero"));

if (num1 <= num2 && num1 <= num3) {
	console.log(`${num1} es el mas chico`);
} else if (num2 <= num1 && num2 <= num3) {
	console.log(`${num2} es el mas chico`);
} else {
	console.log(`${num3} es el mas chico`);
} */

// N°5
/* const persona1 = {
	nombre: "Mateo",
	edad: 22,
	altura: 1.65,
};

const persona2 = {
	nombre: "Brenda",
	edad: 21,
	altura: 1.63,
};

if (persona1.altura > persona2.altura) {
	console.log(`${persona1.nombre} es mas alta que ${persona2.nombre}`);
} else if (persona2.altura > persona1.altura) {
	console.log(`${persona2.nombre} es mas alta que ${persona1.nombre}`);
} else {
	console.log(`${persona1.nombre} y ${persona2.nombre} tienen la misma altura`);
}

if (persona1.edad > persona2.edad) {
	console.log(`${persona1.nombre} es mayor que ${persona2.nombre}`);
} else if (persona2.edad > persona1.edad) {
	console.log(`${persona2.nombre} es mayor que ${persona1.nombre}`);
} else {
	console.log(`${persona1.nombre} y ${persona2.nombre} tienen la misma edad`);
} */

// N°6
/* let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad"));
let altura = parseInt(prompt("Ingrese su altura"));
let vision = parseFloat(prompt("Ingrese su visión en una escala de 1 a 10:"));

if (edad >= 18 && altura > 150 && vision >= 8) {
	console.log(nombre + ", estás capacitado para conducir");
} else {
	console.log(nombre + ", no estás capacitado para conducir");
} */

// N°7
/* const nombre = prompt("Ingrese su nombre:");
const pase = prompt("¿Tiene pase VIP o normal?");
const tieneEntrada = prompt("¿Tiene entrada? (Si/No)");

if (nombre === "Mateo" || pase === "VIP") {
	console.log(`Bienvenidos al evento, pueden pasar`);
}
if (tieneEntrada === "Si") {
	const usarMiEntrada = prompt("¿Queres usar tu entrada? (Si/No)");
	if (usarMiEntrada === "Si") {
		console.log("Puede pasar al evento.");
	} else {
		console.log("Puede comprar una entrada.");
	}
} else {
	const comprarEntrada = prompt("¿Desea comprar la entrada? (Si/No)");
	if (comprarEntrada === "Si") {
		const dineroDisponible = prompt("¿Cuanto dinero disponible tenes?");
		if (dineroDisponible >= 1000) {
			console.log("La venta a sido exitosa, puede pasar al evento.");
		} else {
			console.log(
				"Lo lamento, no posee el dinero suficiente para abonar la entrada."
			);
		}
	}
} */

// N°8
/* let numeroIncognita = 7;
let intentos = 3;
let numeroIngresado = prompt("Adivina el número (entre 1 y 10):");

if (numeroIngresado == numeroIncognita) {
	console.log("Ganaste, has adivinado el número.");
} else {
	intentos--;
	if (numeroIngresado < numeroIncognita) {
		console.log("El numero ingresado es menor, vuelve a intentarlo.");
	} else {
		console.log("El numero ingresado es mayor, vuelve a intentarlo.");
	}
	numeroIngresado = prompt("Intenta nuevamente:");
}

if (intentos > 0 && numeroIngresado == numeroIncognita) {
	console.log("Ganaste, has adivinado el número.");
} else if (intentos > 0) {
	intentos--;
	if (numeroIngresado < numeroIncognita) {
		console.log("El numero ingresado es menor, vuelve a intentarlo.");
	} else {
		console.log("El numero ingresado es mayor, vuelve a intentarlo.");
	}
	numeroIngresado = prompt("Intenta nuevamente:");
}

if (intentos > 0 && numeroIngresado == numeroIncognita) {
	console.log("Ganaste, has adivinado el número.");
} else if (intentos > 0) {
	console.log("Lo siento, perdiste.");
} */

// N°9
/* alert('Hola necesitamos saber tu edad')
let edad = prompt('Pon aqui tu edad')
if( edad>= 0 && edad<=12){
    alert(`Tu edad es ${edad}, eso quiere decir que eres un infante`)
}else if (edad>= 13 && edad<=18){
    alert(`Tu edad es ${edad}, eso quiere decir que eres un adolescente`)
}else if (edad>= 19 && edad<=45){
    alert(`Tu edad es ${edad}, eso quiere decir que eres un mayor joven`)
}else if(edad > 100){
    alert('¿ENREALIDAD TIENES ESAD EDAD?')
}else{
    edad > 45 && edad < 100;
    alert(`Tu edad es ${edad}, eso quiere decir que eres un anciano :')`)  
} */

// N°10
/* alert(`OK, llego el momento de ¡¡PIEDRA, PAPEL o TIJERA!!`)

 jugadadeljugador1 = prompt(`${jugador1} Te toca empezar el juego, ¡¡Te toca elejir: PAPEL, TIJERA o PIEDRA!!`);
jugadadeljugador2 = prompt(`${jugador2} Ahora es tu turno, ¡¡Te toca elejir: PAPEL, TIJERA o PIEDRA!!`);
if (jugadadeljugador1 === jugadadeljugador2){
    alert(`Los jugadores han empatado`);   
    }else if (jugadadeljugador1 === 'piedra' && jugadadeljugador2 === 'tijera'){
        alert(`${jugador1} GANA!`);
    }else if (jugadadeljugador1 === 'tijera' && jugadadeljugador2 === 'papel'){
            alert(`${jugador1} GANA!`);
    }else if(jugadadeljugador1 === 'papel' && jugadadeljugador2 === 'piedra'){
                alert(`${jugador1} GANA!`);
    }else if(jugadadeljugador1 != posibilidad || jugadadeljugador2 != posibilidad){
        alert('Uno de los jugadores hizo trampa');
    }
        else{
            alert(`${jugador2} ¡¡GANA!!`)
    } */

// N°11
/* let color = prompt('Elegi el color: puede ser blanco, negro, verde, azul, amarillo, rojo')
switch(color){
    case 'blanco': case 'negro':
        alert('Falta de color');
        break;
    case 'verde':
        alert('El color de la naturaleza');
        break;
    case 'azul':
        alert('El color del agua');
        break;
    case 'amarillo':
        alert('El color del sol');
        break;
    case 'rojo':
        alert('El color del fuego');
        break;
    default:
        alert('Excelente elección, no lo teníamos pensado');
        break;
} */

// N°12
/* let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let operacion = prompt("Ingresa la operación a realizar (+ para suma, - para resta, * para multiplicación, / para división):");

if (operacion == "+") {
let resultado = num1 + num2;
alert("El resultado de la suma es: " + resultado);
} else if (operacion == "-") {
let resultado = num1 - num2;
alert("El resultado de la resta es: " + resultado);
} else if (operacion == "*") {
  let resultado = num1 * num2;
alert("El resultado de la multiplicación es: " + resultado);
} else if (operacion == "/") {
if (num2 == 0) {
    calert("ERROR: No se puede dividir entre cero.");
} else {
    let resultado = num1 / num2;
    alert("El resultado de la división es: " + resultado);
}
} else {
    alert("ERROR, algun numero es invalido");
} */

// N°13
/* let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let fechaDeNacimiento = prompt("Ingrese su fecha de nacimiento");
let documento = Number(prompt("Ingrese su DNI:"));

alert(
${nombre}, ${apellido}, ${fechaDeNacimiento}, ${documento} ¿Estos datos estan correctos?
);

const DNI = {
nombre: ${nombre},
apellido: ${apellido},
fechaDeNacimiento: ${fechaDeNacimiento},
documento: ${documento},
};

console.table(DNI);
let mensajeDeConfirmacion = prompt("¿Queres modificar tus datos? (si/no)");

if (mensajeDeConfirmacion === "no") {
alert("¡Registro exitoso!");
} else if (mensajeDeConfirmacion === "si") {
alert("Volve a intentarlo en 1 mes.");
} */


