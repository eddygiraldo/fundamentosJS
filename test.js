//Variables
let nombre = 'Eddy Giraldo';
let edad = new Date().getFullYear() - 1994;
let precio = 245.3
let variableLocal = 'variable local';
var variableGlobal = 'variable global';

let persona = {
  nombre: 'Eddy',
  apellido: 'Giraldo',
  edad: 25,
  peso: 75,
  ingeniero: true,
  cocinero: false,
  cantante: false
}

let otraPersona = {
  nombre: 'Angie',
  apellido: 'Martinez',
  edad: 25,
  peso: 54,
  ingeniero: true,
  cocinero: false,
  cantante: false
}

//Strings
//Mayus
console.log('Mayus ' + nombre.toUpperCase());
//Minus
console.log('Mayus ' + nombre.toLowerCase());
//Posición caracter
console.log('Letra 4 ' + nombre.charAt(3));
//Cantidad
console.log('Cantidad ' + nombre.length);
//Concatenación
console.log(`Mi nombre es ${nombre}`);
//Substring
console.log(`Mi apellido es ${nombre.substr(5, 7)}`);
//Última letra
console.log(`La última letra de mi nombre es ${nombre.charAt(nombre.length - 1)}`);

//Numbers
//Enteros
console.log(`Mi edad el siguiente año es ${edad + 1}`);
//Decimales
console.log(`Precio de tres unidades ${precio * 3}`);
//Fix de los decimales
console.log(`Precio de tres unidades ${Math.round(precio * 100 * 3) / 100}`);

//Functions
printInformation(nombre);

//Scope
function printInformation(nombre) {
  // nombre is local scope, global scope it´s window.nombre  
  nombre = nombre.toUpperCase();
  console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
}


//Objetos
printPersons(persona);
desctructurePersons(persona);

function printPersons({ nombre, edad }) {
  console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
}

function desctructurePersons(persona) {
  var { nombre } = persona;
  console.log(`Mi nombre es ${nombre} y tengo 25 años`);
}

//Tipos parámetros (Valor, Referencia)

function cumpleEdadReferencia(persona) {
  persona.edad += 1;
}

function cumpleEdadValor(persona) {
  return {
    ...persona,
    edad: persona.edad + 1,
  }
}

//Comparaciones
let x = 4, y = '4';
console.log(x == y); //true, == compara valores
console.log(x === y); //false, === compara valores y tipos
console.log(persona == otraPersona); //false, == para objetos compara referencias

//Estructuras de control
profesiones(persona);
function profesiones(persona) {
  console.log(`${persona.nombre} es:`);
  if (persona.ingeniero) {
    console.log(`Ingeniero`);
  }
}

//Arrow function
//Función anónima asiganada a una variable
const mayorEdad = function (persona) {
  return persona.edad >= 18;
}

//Función flecha
const arrowMayorEdad = ({ edad }) => edad >= 18;

//Pedir datos
//let signo = prompt('Cuál es tu signo');

//Arrays
let personas = [persona, otraPersona];
for (let i = 0; i < personas.length; i++) {
  let persona = personas[i];
  console.log(`${persona.nombre} pesa ${persona.peso}Kg`);
}
//Filtrar más de 70KG
const esAlta = (persona) => persona.peso >= 70;
let personasPesadas = personas.filter(esAlta);
console.log(personasPesadas);

//Trasnformación de array, Kg a Gr
const conversionKg = persona => ({
  ...persona,
  peso: persona.peso * 1000,
});

let personasGrs = personas.map(conversionKg);

//Reducir array a un valor
const contarPeso = (acum, persona) =>
  acum + persona.peso;

let pesoTotal = personas.reduce(contarPeso, 0);
console.log(`El peso total es ${pesoTotal}`);

//Prototipos (Clases)
function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

//Definir prototipos y métodos antes de usarlos
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8;
}

let eddy = new Persona('Eddy', 'Giraldo', 1.82);
console.log(eddy);
eddy.saludar();
eddy.soyAlto();

//Herencia de prototipos
function heredaDe(hijo, padre) {
  var fn = function () { };
  fn.prototype = padre.prototype;
  hijo.prototype = new fn;
  hijo.prototype.constructor = hijo;
}

function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

let angie = new Desarrollador('Angie', 'Martinez', 1.82);

//Clases en JS: ES2015
class PersonaClass {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar(fn) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)

    if (fn) {
      fn(nombre, apellido, false);
    }
  }
}

class DesarrolladorClass extends PersonaClass {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }

  saludar(fn) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)

    if (fn) {
      fn(this.nombre, this.apellido, true);
    }
  }
}

let _eddy = new PersonaClass('Eddy', 'Giraldo', 1.82);
_eddy.saludar();

//Asincronismo
let desarrollador = new DesarrolladorClass('Eddy', 'Giraldo', 1.82);

function responserSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`NO sabía que eras desarrollador`);
  }
}

desarrollador.saludar(responserSaludo);

//Tiempo en JS
console.log('a');
//setTimeout(() => console.log('b'), 0);
console.log('c');
// setTimeout(() => console.log('d'), 2000);

//Request Jquery
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const url = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;

const onResponse = (data) => {
  console.log(`Hola, yo soy ${data.name}`);
}

function obtenerPersonaje(id, callback) {

  const url_ = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
  $.get(url_, { crossDomain: true }, callback).fail(function () {
    console.log('Error');
  });

}

//Paralelo
// obtenerPersonaje(1);
// obtenerPersonaje(2);
// obtenerPersonaje(3);

//Serie
// obtenerPersonaje(1, function (data) {
//   console.log(`Hola, yo soy ${data.name}`);
//   obtenerPersonaje(2, function (data) {
//     console.log(`Hola, yo soy ${data.name}`);
//     obtenerPersonaje(3, function (data) {
//       console.log(`Hola, yo soy ${data.name}`);
//       obtenerPersonaje(4, function (data) {
//         console.log(`Hola, yo soy ${data.name}`);
//         obtenerPersonaje(5, function (data) {
//           console.log(`Hola, yo soy ${data.name}`);
//           obtenerPersonaje(6, function (data) {
//             console.log(`Hola, yo soy ${data.name}`);
//             obtenerPersonaje(7, function (data) {
//               console.log(`Hola, yo soy ${data.name}`);
//               obtenerPersonaje(8);
//             });
//           });
//         });
//       });
//     });
//   });
// });

//Promesas (pending, fulfiled .then(val => ...), rejected(.catch(err => ...)))
function obtenerPersonajePromesa(id) {
  return new Promise((resolve, reject) => {
    const url_ = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url_, { crossDomain: true }, function(data) {
      resolve(data);
    })
    .fail(() => reject(id));

  })
}

// obtenerPersonajePromesa(1)
//   .then((personaje) => {
//     console.log(`El personaje es ${personaje.name}`);
//     return obtenerPersonajePromesa(2);
//   })
//   .then((personaje) => {
//     console.log(`El personaje es ${personaje.name}`);
//     return obtenerPersonajePromesa(3);
//   })
//   .then((personaje) => {
//     console.log(`El personaje es ${personaje.name}`);
//     return obtenerPersonajePromesa(4);
//   })
//   .then((personaje) => {
//     console.log(`El personaje es ${personaje.name}`);
//   })
//   .catch(function (id) {
//     console.log(`Error en ${id}`);
//   });

async function obtenerPersonajes () {
  var ids = [1, 2, 3, 4, 5, 6, 7];
  var promesas = ids.map((id) => obtenerPersonajePromesa(id));

  try {
    var personajes = await Promise.all(promesas);
    console.log(personajes)
  } catch (id) {
    console.log("Error" + id);
  }
  

  // Promise
  //   .all(promesas)
  //   .then(personajes => console.log(personajes))
  //   .catch(function (id) {
  //     console.log("Error")
  //   });
}

obtenerPersonajes();