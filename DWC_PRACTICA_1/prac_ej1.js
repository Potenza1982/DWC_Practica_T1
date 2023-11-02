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

