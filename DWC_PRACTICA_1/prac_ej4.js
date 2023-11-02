"use strict";

let puntuaciones = [
  { nombre: "Pablo", puntuacion: 180 },
  { nombre: "Javier", puntuacion: 270 },
  { nombre: "Raquel", puntuacion: 70 },
  { nombre: "Mario", puntuacion: 310 },
  { nombre: "Miriam", puntuacion: 90 },
  { nombre: "Fernando", puntuacion: 105 },
  { nombre: "Laura", puntuacion: 210 },
  { nombre: "Julian", puntuacion: 520 },
];

// Paso 1: Mostrar por consola cada elemento del array puntuaciones - 2 FORMAS DE HACERLO:
/* 1º
puntuaciones.forEach((jugador) => {
  console.log(jugador);
});
*/
// 2º Utilizamos un bucle for para mostrar por consola cada elemento del array puntuaciones
for (let i = 0; i < puntuaciones.length; i++) {
    console.log(puntuaciones[i].nombre, puntuaciones[i]);
  } 

// Paso 2: Implementar la función jugadoresTop
function jugadoresTop(array) {

  // Utilizamos el método filter() para crear un nuevo array con jugadores que tienen más de 100 puntos.
  let jugadoresMaxPunt = array.filter((jugador) => jugador.puntuacion > 100);

  // Utilizamos el método sort() para ordenar el array en orden descendente (de mayor a menor) por puntuación.
  jugadoresMaxPunt.sort((a, b) => b.puntuacion - a.puntuacion);
  return jugadoresMaxPunt;
}

// Paso 3: Llamamos a la función jugadoresTop con el array de puntuaciones
let jugadoresMaxPunt = jugadoresTop(puntuaciones);

console.log("Esta es la lista de los mejores jugadores con mas de 100 puntos ordenadas de mayor a menor: ");
// Paso 4: Mostrar por consola los nombres de los jugadores destacados en el nuevo array (3 FORMAS DE HACERLO)
for (let i = 0; i < jugadoresMaxPunt.length; i++) {
    
    console.log(jugadoresMaxPunt[i].nombre, jugadoresMaxPunt[i].puntuacion);
  }
/* 2º forma de hacerlo ----------------------------------------------------------------
jugadoresMaxPunt.forEach((jugador) => {
  console.log(jugador.nombre, jugador.puntuacion);
});

3º forma de hacerlo --------------------------------------------------------------------
jugadoresMaxPunt.forEach(({ nombre, puntuacion }) => {
    console.log(nombre, puntuacion);
  });
  */
  
