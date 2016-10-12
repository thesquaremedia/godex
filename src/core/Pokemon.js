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

  // let's build out the moveset
  var _qm, qm, _cm, cm;
  for (_qm in this.quickMoves) {
    if (!this.quickMoves[_qm].key) {
      qm = movesData[this.quickMoves[_qm]];
      qm.key = this.quickMoves[_qm];
      qm.dps = rnd(qm.attack / qm.cooldown);
      qm.dpsGym = rnd(qm.attack / (qm.cooldown + 2));
      this.quickMoves[_qm] = qm;
    }
  }
  for (_cm in this.chargeMoves) {
    if (!this.chargeMoves[_cm].key) {
      cm = movesData[this.chargeMoves[_cm]];
      cm.key = this.chargeMoves[_cm];
      cm.dps = rnd(cm.attack / cm.cooldown);
      cm.dpsGym = rnd(cm.attack / (cm.cooldown + 2));
      this.chargeMoves[_cm] = cm;
    }
  }

  // add STAB bonuses to movesets!
  for (_qm in this.quickMoves) {
    qm = this.quickMoves[_qm];
    if (this.type.indexOf(qm.type) > -1) {
      qm.stab = true;
      qm.dps = rnd(qm.dps * 1.25);
      qm.dpsGym = rnd(qm.dpsGym * 1.25);
      qm.attack = rnd(qm.attack * 1.25);
    }
  }
  for (_cm in this.chargeMoves) {
    cm = this.chargeMoves[_cm];
    if (this.type.indexOf(cm.type) > -1) {
      cm.stab = true;
      cm.dps = rnd(cm.dps * 1.25);
      cm.dpsGym = rnd(cm.dpsGym * 1.25);
      cm.attack = rnd(cm.attack * 1.25);
    }
  }

  // identify best moves by DPS
  var bQuick = 0, bCharge = 0;
  for (_qm in this.quickMoves) {
    qm = this.quickMoves[_qm];
    if (qm.dps > bQuick) {
      bQuick = qm.dps;
      this._.quickMove = qm.key;
    }
  }
  for (_cm in this.chargeMoves) {
    cm = this.chargeMoves[_cm];
    if (cm.dps > bCharge) {
      bCharge = cm.dps;
      this._.chargeMove = cm.key;
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
