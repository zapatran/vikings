// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damageArg) {
    this.health = this.health - damageArg;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damageArg) {
    this.health = this.health - damageArg;
    if (this.health > 0) {
      return `${this.name} has received ${damageArg} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damageArg) {
    this.health = this.health - damageArg;
    if (this.health > 0) {
      return `A Saxon has received ${damageArg} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var returnValue = this.saxonArmy[indexSaxon].receiveDamage(
      this.vikingArmy[indexViking].strength
    );

    if (this.saxonArmy[indexSaxon].health <= 0) {
      this.saxonArmy.splice(indexSaxon, 1);
    }

    return returnValue;
  }

  saxonAttack() {
    var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var returnValue = this.vikingArmy[indexViking].receiveDamage(
      this.saxonArmy[indexSaxon].strength
    );
    if (this.vikingArmy[indexViking].health <= 0) {
      this.vikingArmy.splice(indexViking, 1);
    }
    return returnValue;
  }

  showStatus() {
    if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
