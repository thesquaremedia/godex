/** Pokemon.js | The Pokemon Object **/

var Pokemon = function(data) {
  // User Input storage
  this._ = {
    candy: 0, // candy on hand
    quickMove: null,
    chargeMove: null,
    powered: false, // powered up?
    strongHP: false,
    strongAtk: false,
    strongDef: false // from team leader
  };

  this.id = data.id;
  this.egg = data.egg;
  this.candy = data.candy;
  this.name = data.name;
  if (data.cpm) this.cpm = data.cpm;
  this.stats = data.stats;
  this.type = data.type;
  this.moves = {
    quick: {}, charge: {}
  };

  var topQuick = 0, topCharge = 0;
  for (var qM in data.quickMoves) {
    var qmKey = data.quickMoves[qM];
    this.moves.quick[qmKey] = new Move(qmKey, data.stats, data.type);
    if (this.moves.quick[qmKey].dps > topQuick) {
      this._.quickMove = qmKey; // set as best
      topQuick = this.moves.quick[qmKey].dps;
    }
  }

  for (var cM in data.chargeMoves) {
    var cmKey = data.chargeMoves[cM];
    this.moves.charge[cmKey] = new Move(cmKey, data.stats, data.type);
    if (this.moves.charge[cmKey].dps > topCharge) {
      this._.chargeMove = cmKey; // set as best
      topCharge = this.moves.charge[cmKey].dps;
    }
  }

  this.maxCP = this.getCP(40, 15, 15, 15);

  // Set defaults to level 20
  this._.cp = this.getCP(20);
  this._.hp = this.getHP(20);
  this._.dust = levelsData["20"].dust;

  this.tree = this.buildTree(data);

  Note("Built Pokemon: " + this.name);
};

Pokemon.prototype = {
  // setter function
  _set: function(obj) {
    var self = this;
    for (var val in obj) {
      if (self._.hasOwnProperty(val)) self._[val] = obj[val];
    }
    return self;
  },

  // calculate CP at a given level
  getCP: function(lvl, attack, defense, stamina) {
    var atk, def, sta, mod;
    atk = this.stats.attack + (attack ? attack : 0);
    def = Math.pow(this.stats.defense + (defense ? defense : 0), 0.5);
    sta = Math.pow(this.stats.stamina + (stamina ? stamina : 0), 0.5);
    mod = Math.pow(levelsData[lvl].cpm, 2);
    return Math.floor(atk * (def * sta * mod) / 10);
  },

  // calculate HP at a given level
  getHP: function(lvl, stamina) {
    var sta = this.stats.stamina + (stamina ? stamina : 0);
    return parseInt(Math.floor(sta * levelsData[lvl].cpm), 10);
  },

  // build family tree (evolves)
  buildTree: function(data) {
    var result = { stages: 1, current: 1, };
    if (data.evolveTo) {
      if (isArr(data.evolveTo)) {
        // Eevee support lolol
        result.evolveTo = [];
        for (var a = 0;a < data.evolveTo.length;a++) {
          result.evolveTo.push(pokemonData[data.evolveTo[a]]);
        }
      } else result.evolveTo = pokemonData[data.evolveTo];
    }
    if (data.evolveFrom) result.evolveFrom = pokemonData[data.evolveFrom];
    if (data.evolveTo && result.evolveTo.evolveTo) {
      result.evolveEnd = pokemonData[result.evolveTo.evolveTo];
    }
    if (data.evolveFrom && result.evolveFrom.evolveFrom) {
      result.evolveStart = pokemonData[result.evolveFrom.evolveFrom];
    }
    return result;
  },

  // evolve calculator
  canEvolve: function() {
    var cp = this._.cp, has = this._.candy, result = {},
      evo = function(req) { return Math.floor(has/req + ((has/req)/req)); };

    // calculate CP of evolved mon
    var cpcalc = function(first, second) {
      if (!cp) return 0;
      if (!second) second = [1,1];
      var min = cp * first[0] * second[0];
      var max = cp * first[1] * second[1];
      return Math.floor(min) + "-" + Math.floor(max);
    };

    // next stage
    if (this.tree.evolveTo) {
      result.evolveTo = [];
      if (isArr(this.tree.evolveTo)) {
        // Eevee support again
        for (var a = 0;a < this.tree.evolveTo.length;a++) {
          result.evolveTo.push({
            cp: cpcalc(this.tree.evolveTo[a].cpm),
            evolves: evo(this.candy)
          });
        }
      } else {
        result.evolveTo.push({
          cp: cpcalc(this.cpm),
          evolves: evo(this.candy)
        });
      }
    }

    // last stage
    if (this.tree.evolveEnd) {
      result.evolveEnd = {
        cp: cpcalc(this.cpm, this.tree.evolveTo.cpm),
        evolves: evo(this.candy + this.tree.evolveTo.candy)
      };
    }
    return result;
  },

  // get moveset rankings
  duel: function() {
    // only generate data once per pokemon
    if (!this.dueling) this.dueling = DuelRank(this);
    for (var score in this.dueling) {
      var rank = this.dueling[score];
      if (rank.quick == this._.quickMove && rank.charge == this._.chargeMove) {
        return rank;
      }
    }

  }
};
