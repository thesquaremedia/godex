/** Pokemon.js | The Pokemon Object **/

var Pokemon = function(data) {
  // store the data
  for (var val in data) this[val] = data[val];
  this._ = { // user input storage
    candy: 0, quickMove: null, chargeMove: null, powered: false,
    strongHP: false, strongAtk: false, strongDef: false
  };

  // helper function to round numbers nicely
  var rnd = function(n) { return Math.round(n * 100) / 100; };

  // calculate attack/dps for moves
  var bestQuick = 0, bestCharge = 0; // best moves by DPS

  var move = function(move, self) {
    var stabBonus = 1, avgDefense = 0, avg = 0, atkdef, attack;

    // get average defense
    for (var poke in pokemonData) {
      avg += 1; avgDefense += pokemonData[poke].stats.defense;
    }
    avgDefense = Math.floor(avgDefense / avg);
    // vs score
    atkdef = self.stats.attack / avgDefense;

    // damage
    damage = Math.floor(0.5 * atkdef * move.attack) + 1;

    // check for STAB
    if (self.type.indexOf(move.type) > -1) stab = 1.25;

    // build move
    move.stab = (stabBonus == 1.25);
    move.damage = rnd(damage * stabBonus);
    move.dps = rnd(move.damage / move.cooldown);
    move.dpsGym = rnd(move.damage / (move.cooldown + 2));
    // get best by DPS
    if (move.moveType == "quick") {
      if (move.dps > bestQuick) {
        bestQuick = move.dps;
        self._.quickMove = move.key;
      }
    } else {
      if (move.dps > bestCharge) {
        bestCharge = move.dps;
        self._.chargeMove = move.key;
      }
    }
    return move;
  };

  // let's build out the moveset
  var _qm, qm, _cm, cm;
  for (_qm in this.quickMoves) {
    if (!this.quickMoves[_qm].key) {
      qm = movesData[this.quickMoves[_qm]];
      qm.key = this.quickMoves[_qm];
      this.quickMoves[_qm] = move(qm, this);
      if (qm.name == "Ember") {}
    }
  }
  for (_cm in this.chargeMoves) {
    if (!this.chargeMoves[_cm].key) {
      cm = movesData[this.chargeMoves[_cm]];
      cm.key = this.chargeMoves[_cm];
      this.chargeMoves[_cm] = move(cm, this);
    }
  }

  // get type resistance
  var i, _type, type, mod,
    target, score, resistance = {};
  for (_type in this.type) {
    type = typesData[this.type[_type]];

    // for each mod this type has
    for (mod in type) {
      // if it's a defense modifier
      if (mod.indexOf("From") > -1) {
        // then we loop again!
        for (i = 0;i < type[mod].length;i++) {
          target = type[mod][i];
          score = resistance[target];
          if (mod.indexOf("half") > -1) {
            // not very effective
            if (!score) resistance[target] = 0.8;
            else resistance[target] = rnd(score * 0.8);
          } else {
            // super effective
            if (!score) resistance[target] = 1.25;
            else resistance[target] = rnd(score * 1.25);
          }
        }
      }
    }
  }
  this.resistance = resistance;

  // give the family tree some love
  this.tree = { stages: 1, current: 1 };
  this.tree.evolveTo = this.evolveTo ? pokemonData[this.evolveTo] : 0;
  this.tree.evolveFrom = this.evolveFrom ? pokemonData[this.evolveFrom] : 0;

  if (this.tree.evolveFrom && this.tree.evolveFrom.evolveFrom) {
    this.evolveStart = this.tree.evolveFrom.evolveFrom;
  }
  if (this.tree.evolveTo && this.tree.evolveTo.evolveTo) {
    this.evolveEnd = this.tree.evolveTo.evolveTo;
  }

  this.tree.evolveStart = this.evolveStart ? pokemonData[this.evolveStart] : 0;
  this.tree.evolveEnd = this.evolveEnd ? pokemonData[this.evolveEnd] : 0;

  // Misc
  this.maxCP = this.getCP(40, { atk: 15, def: 15, sta: 15 });

  // Figure out stats at level 20 (for default reasons)
  this._.cp = this.getCP(20);
  this._.hp = this.getHP(20);
  this._.dust = levelsData["20"].dust;

  // external tools
  this.dueling = _duelrank(this);
};

Pokemon.prototype = {
  // setter functions
  _cp: function(cp) { this._.cp = parseInt(cp); return this; },
  _hp: function(hp) { this._.hp = parseInt(hp); return this; },
  _dust: function(dust) { this._.dust = parseInt(dust); return this; },
  _candy: function(candy) { this._.candy = parseInt(candy); return this; },
  _powered: function(p) { this._.powered = p ? true : false; return this; },
  _strongAtk: function(s) { this._.strongAtk = s ? true : false; return this; },
  _strongDef: function(s) { this._.strongDef = s ? true : false; return this; },
  _strongHP: function(s) { this._.strongHP = s ? true : false; return this; },
  _quickMove: function(m) { this._.quickMove = m; return this; },
  _chargeMove: function(m) { this._.chargeMove = m; return this; },


  // calculate CP at given level
  getCP: function(lvl, stats) {
    var atk, def, sta, mod;
    atk = this.stats.attack + (stats ? stats.atk : 0);
    def = Math.pow(this.stats.defense + (stats ? stats.def : 0), 0.5);
    sta = Math.pow(this.stats.stamina + (stats ? stats.sta : 0), 0.5);
    mod = Math.pow(levelsData[lvl].cpm, 2);
    return Math.floor(atk * (def * sta * mod) / 10);
  },

  // calculate HP at a given level
  getHP: function(lvl, stats) {
    var sta = this.stats.stamina + (stats ? stats.sta : 0);
    return parseInt(Math.floor(sta * levelsData[lvl].cpm), 10);
  },

  // get a pokeon's IV's
  appraise: _appraise,

  // evolve calculator
  // returns evolves and cp
  canEvolve: function() {
    var cp = this._.cp,
      has = this._.candy,
      result = this.tree;

    // quick math function
    var evo = function(req) {
      return Math.floor(has/req + Math.floor((has/req)/req));
    };

    var cpcalc = function(first, second) {
      if (cp) {
        var min = cp * first[0],
          max = cp * first[1];
        if (second) {
          min *= second[0];
          max *= second[1];
        }
        return Math.floor(min) + "-" + Math.floor(max);
      } else {
        return 0;
      }
    };

    if (result.evolveTo) {
      result.evolveTo.cp = cpcalc(this.cpm);
      result.evolveTo.evolves = evo(this.candy);
    }
    if (result.evolveEnd) {
      result.evolveEnd.cp = cpcalc(this.cpm, result.evolveTo.cpm);
      result.evolveEnd.evolves = evo(this.candy + result.evolveTo.candy);
    }

    return result;
  }
};
