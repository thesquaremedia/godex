/** DuelRank.js | Ranking movesets and DPS **/

var DuelRank = function(mon) {
  var result = [];

  // rank the combos!
  var rank = function(arr, key) {
    var total = arr.length;
    // sort by key, so 0 is lowest, and length -1 is highest!
    arr.sort(function(a,b) { return a[key] < b[key]; });
    for (var i = 0; i < total; i++) {
      var grade = Math.floor(((total - i) / total) * 100);
      arr[i][key + "Grade"] = grade;
    }
    return arr;
  };

  for (var qMove in mon.moves.quick) {
    for (var cMove in mon.moves.charge) {
      // get every possible combo of moves
      var quick = mon.moves.quick[qMove],
        charge = mon.moves.charge[cMove];

      var tankiness = mon.stats.stamina * mon.stats.defense;

      // get damage over 100 seconds
      var noweave = quick.dps * 100; // just quick attacks

      // weave; quick attacks + charge attacks
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

      result.push({
        quick: quick.key,
        charge: charge.key,
        offense: Math.floor(offense),
        defense: Math.floor(defense),
        dueling: Math.floor(offense * tankiness),
        toweave: (weave > noweave),
        noweave: Math.floor(noweave),
        weave: Math.floor(weave),
        gymweave: Math.floor(gymweave)
      });
    }
  }

  // now we grade the results!
  result = rank(result, "defense");
  result = rank(result, "offense");

  Note("Ranked Pokemon: " + mon.name);
  return result;
};
