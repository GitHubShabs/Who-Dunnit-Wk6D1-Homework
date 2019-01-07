const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// The weapon is the Revolver, this is deduced by working backwards:
// line 17, line 16, line 11, line 12, line8,line7, leads to const  changeweapon, ie
// revolver in line 15.
