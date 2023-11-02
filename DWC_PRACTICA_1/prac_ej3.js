"use strict";

// Paso 1: Definimos la clase base Consumible
class Consumible {
  constructor(nombre) {
    this.nombre = nombre;
  }

  // Método consumir en la clase base que muestra un mensaje predeterminado
  consumir(jugador) {
    console.log(
      jugador.nombre + " consume una " + this.nombre + " y no tiene ningún efecto"
    );
  }
}

// Paso 2: Creamos una subclase PlantaCurativa que hereda de Consumible
class PlantaCurativa extends Consumible {
  constructor(nombre, poder) {
    super(nombre);
    this.poder = poder;
  }

  // Sobrescribimos el método consumir para agregar efectos personalizados
  consumir(jugador) {
    if ((this.poder + jugador.puntosVida) > jugador.maxPuntosVida) {
      // Si el jugador ya tiene la cantidad máxima de puntos de vida
      console.log(jugador.nombre + " consume una " + this.nombre + " y ya tiene el máximo de puntos de vida.");
    } else {
      // Si el jugador no alcanza el máximo de puntos de vida
      jugador.puntosVida += this.poder;
      console.log(jugador.nombre + " consume una " + this.nombre + " y recupera " + this.poder + " puntos de vida.");
      
      // Verificamos de nuevo si los puntos de vida superan el máximo permitido
      if (jugador.puntosVida > jugador.maxPuntosVida) {
        jugador.puntosVida = jugador.maxPuntosVida;
      }
    }
  }
}

// Paso 3: Creamos instancias de consumibles con efectos personalizados
let manzana = new Consumible("Manzana"); // Una manzana como Consumible regular
let plantaCurativa = new PlantaCurativa("Planta Curativa", 5); // planta curativa y "efecto de curación = 8"

// Paso 4: Creamos un objeto "ricardo" que simula un jugador
let ricardo = {
  nombre: "Ricardo",
  potencia: 1,
  puntosVida: 6,
  maxPuntosVida: 10,

  // Método "consumir" en el objeto "ricardo" que permite consumir un consumible
  consumir: function (consumible) {
    consumible.consumir(this);
  },
};

// Paso 5: "ricardo" consume una manzana (sin efecto)
ricardo.consumir(manzana);

// Paso 6: "ricardo" consume una planta curativa (recupera puntos de vida)
ricardo.consumir(plantaCurativa);
