"use strict";

class Zombi {
  constructor(nombre, puntosVida, potencia) {
    this.nombre = nombre;
    this.puntosVida = puntosVida;
    this.potencia = potencia;
  }
  atacar(objetivo) {
    console.log(
      `${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`
    );
  }
}

/* EJERCICIO 1 */
// Paso 1: Creamos la clase Jugador
class Jugador {
  // Paso 2: Definimos el constructor de la clase Jugador
  constructor(nombre, ocupacion, faccion) {
    this.nombre = nombre; // Asignamos el nombre del jugador
    this.ocupacion = ocupacion; // Asignamos la ocupación del jugador
    this.puntosVida = 100; // Establecemos los puntos de vida a 100 (propiedad fija)
    this.faccion = faccion; // Asignamos la facción del jugador
  }

  // Paso 3: Implementamos el método toString para mostrar información del jugador
  toString() {
    return `Nombre: ${this.nombre}, Ocupación: ${this.ocupacion}, Puntos de Vida: ${this.puntosVida}, Facción: ${this.faccion}`;
  }
}

// Paso 4: Creamos dos jugadores de ejemplo
let jugador1 = new Jugador("Leugim", "Guerrero", "Pilasia"); // Crear jugador 1
let jugador2 = new Jugador("Legna", "Mago", "Doñana"); // Crear jugador 2

// Paso 5: Mostrar la información de los jugadores utilizando el método toString
console.log("Jugador 1: " + jugador1.toString()); // Mostrar información del jugador 1
console.log("Jugador 2: " + jugador2.toString()); // Mostrar información del jugador 2

/* EJERCICIO 2 */
// Paso 6: Crear la subclase Abominacion que hereda de Zombi
class Abominacion extends Zombi {
  constructor(nombre, puntosVida, potencia) {
    super(nombre, puntosVida, potencia); // Llamar al constructor de Zombi con los mismos parámetros
  }
  // Paso 7: Agregar el método ataqueMultiple(objetivo) -> permite a la Abominación realizar un ataque múltiple contra un objetivo.
  ataqueMultiple(objetivo) {
    // Iniciar un bucle que se ejecutará tres veces para realizar tres ataques consecutivos.
    for (let i = 0; i < 3; i++) {
      //Llamar al método "atacar" de la clase padre (Zombi) y pasar el "objetivo" como argumento.
      super.atacar(objetivo);
    }
    // Mostrar un mensaje en la consola que indica que la Abominación realizó un ataque múltiple al objetivo.
    console.log(`${this.nombre} realiza un ataque múltiple a ${jugador1.nombre} el ${jugador1.ocupacion}.`);
  }
}

// Paso 8: Crear un objeto Abominacion y ejecutar el ataqueMultiple(objetivo)
let abominacion = new Abominacion("Abominación", 200, 20); // Crear una Abominación
abominacion.ataqueMultiple(jugador1.nombre + " el guerrero"); // Ejecutar el ataque múltiple
