// Soldier
class Soldier {
  constructor(theFirstArg, theSecondArg) {
    this.health = theFirstArg;
    this.strength = theSecondArg;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(amountOfDamage) {
    this.health -= amountOfDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(theFirstArg, theSecondArg, theThirdArg) {
    super(theSecondArg, theThirdArg);
    this.name = theFirstArg;
  }

  receiveDamage(amount) {
    super.receiveDamage(amount);
    if (this.health > 0) {
      return `${this.name} has received ${amount} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(amount) {
    super.receiveDamage(amount);
    if (this.health > 0) {
      return `A Saxon has received ${amount} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

class War {
  // Quando definimos atributos de classe fora do constructor, não precisamos usar o 'this'
  vikingArmy = [];
  saxonArmy = [];

  addViking(vikingInstance) {
    this.vikingArmy.push(vikingInstance);
  }

  addSaxon(saxonInstance) {
    this.saxonArmy.push(saxonInstance);
  }

  armyAttack(army) {
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const randomVikingSoldier = this.vikingArmy[randomVikingIndex];
    const randomSaxonSoldier = this.saxonArmy[randomSaxonIndex];

    if (army === "Viking") {
      const attackResult = randomSaxonSoldier.receiveDamage(
        randomVikingSoldier.strength
      );

      this.checkDead(randomSaxonSoldier);

      return attackResult;
    }

    const attackResult = randomVikingSoldier.receiveDamage(
      randomSaxonSoldier.strength
    );

    this.checkDead(randomVikingSoldier);

    return attackResult;
  }

  checkDead(soldier) {
    if (soldier.health <= 0) {
      if (soldier instanceof Viking) {
        const index = this.vikingArmy.indexOf(soldier);

        if (index > -1) {
          this.vikingArmy.splice(index, 1);
        }
      } else {
        const index = this.saxonArmy.indexOf(soldier);

        if (index > -1) {
          this.saxonArmy.splice(index, 1);
        }
      }
    }
  }

  vikingAttack() {
    return this.armyAttack("Viking");
  }

  saxonAttack() {
    return this.armyAttack("Saxon");
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    }

    if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    }

    return "Vikings and Saxons are still in the thick of battle.";
  }
}

const war = new War();

war.addSaxon(new Saxon(2, 4));
war.addSaxon(new Saxon(2, 4));
war.addSaxon(new Saxon(2, 4));
war.addSaxon(new Saxon(2, 4));

war.addViking(new Viking("Ragnar", 4, 5));
war.addViking(new Viking("Rudá", 4, 5));
war.addViking(new Viking("Rollo", 4, 5));
war.addViking(new Viking("Ivar", 4, 5));

console.log(war.vikingArmy);
console.log(war.saxonArmy);

war.vikingAttack();

console.log(war);

war.saxonAttack();

console.log(war);

console.log(war.showStatus());

const newViking = new Viking();
