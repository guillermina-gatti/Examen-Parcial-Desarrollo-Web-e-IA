// Stats del personaje
const name = "Zara Darkbane";
const characterClass = "Hechicera";
let level = 7;
let health = 100;
let mana = 50;
const attack = 25;
const defense = 15;

// Variables de prueba
const enemyDefense = 10;
const spellCost = 30;
const isStunned = false;

// Funciones
function calculateDamage(attack, defense) {
    const damage = attack - defense;
    return damage > 0 ? damage : 0;
}

const isAlive = (health) => health > 0;

const canCastSpell = (currentMana, spellCost, isStunned) => currentMana >= spellCost && !isStunned;

function getPresentation(name, characterClass, level) {
    return `${name} — ${characterClass} (Nivel ${level})`;
}

// Ejecucion
console.log(getPresentation(name, characterClass, level));
console.log("Daño:", calculateDamage(attack, enemyDefense));
console.log("Vivo:", isAlive(health));
console.log("Puede usar magia:", canCastSpell(mana, spellCost, isStunned));