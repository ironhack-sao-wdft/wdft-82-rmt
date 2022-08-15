class Car {
  constructor(doors, motor, model) {
    this.doors = doors;
    this.motor = motor;
    this.model = model;
    this.audio = "SOM DE PAREDÃO";
  }

  ligarOSom(musica) {
    console.log(`Está tocando ${musica} no porta-mala da sua nave!`);
  }

  ligarOAr() {
    console.log("Desligue, gasolina está cara!");
  }
}

const car = new Car(4, 2.0, "Carro do BATIMA");
const car2 = new Car(2, 1.0, "Uno");

// console.log(car.audio);
// console.log(car2.audio);

// car2.audio = "Radinho de pilha";

// car.ligarOSom("Dust in the wind - Calsinha preta");

// car.ligarOAr();

class KarroDoOvo extends Car {
  constructor(doors, motor, model, qntOvos) {
    super(doors, motor, model);
    this.qntOvos = qntOvos;
  }

  musicaDeVendas() {
    console.log(
      "CHEGOU O CARRO DO OVO, OVOS FRESQUINHOS, OVOS SELECIONADOS, POR APENAS, 10 REAIS, EU DISSE 10 REAAAIS"
    );
  }

  ligarOAr() {
    console.log("KKKKKKKKKKKKK, que ar oq maluco, abre a janela ai");
  }
}

const kombi = new KarroDoOvo(3, 0.5, "Kombi 96", 100);

kombi.ligarOSom("Banda Dejavu");
kombi.ligarOAr();
