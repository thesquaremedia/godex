/** duelrank.js | Ranking movesets and DPS **/

var _duelrank = function(mon) {
  var duel = [];
  // apply grades to array
  var rank = function(arr,key) {
    arr.sort(function(a,b) { return a[key] < b[key]; });
    for (var r = 0;r < arr.length;r++) {
      arr[r][key + "Grade"] = Math.floor(((arr.length - r) / arr.length) * 100);
    }
  };

  for (var quickMove in mon.quickMoves) {
    var quick = mon.quickMoves[quickMove];
    for (var chargeMove in mon.chargeMoves) {
      var charge = mon.chargeMoves[chargeMove];
      // get every possible combination of movesets

      var tankiness = mon.stats.stamina * mon.stats.defense;

      var noweave = quick.dps * 100; // over 100 seconds

      // weave
      var weave, gymweave,
        energy = 100 / charge.charges,
        quick2Charge = energy / quick.energy,
        time2Charge = quick2Charge * quick.cooldown,
        time2ChargeGym = quick2Charge * (quick.cooldown + 2),
        time2Cycle = time2Charge + charge.cooldown,
        time2CycleGym = time2ChargeGym + (charge.cooldown + 2),
        totalCycles = Math.floor(100 / time2Cycle),
        totalCyclesGym = Math.floor(100 / time2CycleGym),
        cycleDmg = (time2Charge * quick.dps) + (charge.attack),
        cycleDmgGym = (time2ChargeGym * quick.dpsGym) + (charge.attack),
        bonusTime = 100 - (time2Cycle * totalCycles),
        bonusTimeGym = 100 - (time2CycleGym * totalCyclesGym);

      weave = (cycleDmg * totalCycles) + (bonusTime * quick.dps);
      gymweave = (cycleDmgGym * totalCyclesGym) + (bonusTimeGym * quick.dpsGym);

      var offense = (noweave > weave ? noweave : weave) * mon.stats.attack;
      var defense = gymweave * mon.stats.attack * tankiness;

      duel.push({
        quick: quick.key,
        charge: charge.key,
        offense: Math.floor(offense),
        defense: Math.floor(defense),
        dueling: Math.floor(offense * tankiness),
        toweave: weave > noweave,
        noweave: Math.floor(noweave),
        weave: Math.floor(weave),
        gymweave: Math.floor(gymweave)
      });

    }
  }

  // grade 'em
  rank(duel, "defense");
  rank(duel, "offense");

  return duel;
};
