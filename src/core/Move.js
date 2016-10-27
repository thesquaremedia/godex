/** Move.js | The Move Object **/

var Move = function(name, stats, type) {
  var data = movesData[name],
    avgdef = Dex.prototype._average.defense;
  this.key = name;
  this.name = data.name;
  this.type = data.type;
  this.attack = data.attack;
  this.cooldown = data.cooldown;
  if (data.dodge) this.dodge = data.dodge;
  if (data.energy) this.energy = data.energy;
  if (data.charges) this.charges = data.charges;

  var mod = stats ? 0.5 : 1;
  var vs = stats ? (stats.attack / avgdef) : 1;
  var stab = type ? (type.indexOf(this.type) > -1) ? 1.25 : 1 : 1;

  this.stab = (stab == 1.25);
  this.damage = Math.floor(mod * vs * this.attack * stab) + 1;
  this.dps = rnd(this.damage / this.cooldown);
  this.dpsGym = rnd(this.damage / (this.cooldown + 2));
};

// only need to find this once
var findAvgDefense = function() {
  var avg = 0, defense = 0;
  for (var poke in pokemonData) {
    avg += 1; defense += pokemonData[poke].stats.defense;
  }
  var avgdefense = Math.floor(defense / avg);
  Note("Found Avg Defense: " + avgdefense);
  return avgdefense;
};

Move.prototype = {
  avgDefense: findAvgDefense()
};
