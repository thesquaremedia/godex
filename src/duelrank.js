/*
  gymtool.js
  Allow for a collection of pokemon to review
*/

var duelrank = function(mon) {
  var duel = [];

  // simple function to apply grades!
  var rank = function(arr, key) {
    // sort by the key we're ranking
    arr.sort(function(a,b) { return a[key] < b[key]; });
    // give it a letter grade (position / available positions)
    for (var r = 0;r < arr.length;r++) {
      arr[r][key + "Grade"] = Math.floor(((arr.length - r) / arr.length) * 100);
    }
    // return the array
    return arr;
  };

  // loop through all the pokemon's quick moves
  for (var _quickMove in mon.moves.quick) {
    var qm = mon.moves.quick[_quickMove];
    // and loop through all charge moves, to get all combos!
    for (var _chargeMove in mon.moves.charge) {
      var cm = mon.moves.charge[_chargeMove];

      // Tankiness, quick attack DPS, charge attack DPS, defense quick DPS
      var tank = mon.stats.stamina * mon.stats.defense,
        qDPS = (qm.offenseADPS ? qm.offenseADPS : qm.offenseDPS),
        DqDPS = (qm.defenseADPS ? qm.defenseADPS : qm.defenseDPS),
        cDPS = (cm.offenseADPS ? cm.offenseADPS : cm.offenseDPS);

      // noweave: how much damage does just the quick attack do?
      var noweave = qDPS * 100;

      // weave: how much damage does quick to charge, then charge do?
      var energy = 100 / cm.charges, // energy required for charge moves
        q2Charge = energy / qm.energy, // quick moves to build required energy
        t2Charge = q2Charge * qm.cooldown, // time to get required energy
        t2ChargeD = q2Charge * (qm.cooldown + 2), // for defense
        t2Cycle = t2Charge + cm.cooldown, // time for a full quick-charge cycle
        t2CycleD = t2Charge + (cm.cooldown + 2), // for defense
        cycles = Math.floor(100 / t2Cycle), // cycles you can perform
        cyclesD = Math.floor(100 / t2CycleD), // for defense,
        cycleDmg = (t2Cycle * qDPS) + (cm.sAttack ? cm.sAttack : cm.attack),
        cycleDmgD = (t2CycleD * DqDPS) + (cm.sAttack ? cm.sAttack : cm.attack),
        tBonus = 100 - (t2Cycle * cycles), // how much time left from cycles
        tBonusD = 100 - (t2CycleD * cyclesD); // for defense

      // calculate weave damage!
      var weave = Math.floor(cycleDmg * cycles) + Math.floor(tBonus * qDPS);
      var gymweave = Math.floor(cycleDmgD * cyclesD) + Math.floor(tBonusD * DqDPS);

      var offense = (noweave > weave ? noweave : weave) * mon.stats.attack;
      var defense = gymweave * mon.stats.attack * tank;

      duel.push({
        qMove: _quickMove,
        cMove: _chargeMove,
        offense: offense,
        defense: defense,
        dueling: offense * tank,
        toweave: weave > noweave
      });
    }
  }

  // Rank!
  rank(duel, "offense");
  rank(duel, "defense");

  return duel;
};
