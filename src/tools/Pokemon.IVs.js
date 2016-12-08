/** Pokemon.IVs.js | calculate iv's **/
/** credits to: https://github.com/andromedado/pokemon-go-iv-calculator/ **/

Pokemon.prototype.IVs = function() {
  var ivs = [], result = {};

  // Filter out all but the highest stats
  var byHighest = function(s, atk, def, sta) {
    var sA = s.strongAtk, sD = s.strongDef, sH = s.strongHP;
    if (!sA && !sD && !sH) return true;
    else if (sA && !sD && !sH) return (atk > def && atk > sta);
    else if (!sA && sD && !sH) return (def > atk && def > sta);
    else if (!sA && !sD && sH) return (sta > atk && sta > def);
    else if (sA && sD && !sH) return (atk == def && atk > sta);
    else if (sA && !sD && sH) return (atk == sta && atk > def);
    else if (!sA && sD && sH) return (def == sta && def > atk);
    else if (sA && sD && sH) return (atk == def && atk == sta);
  };

  // Filter out all but best appraised stat
  var byBest = function(s, atk, def, sta) {
    var sBest = s.bestStat, sA = s.strongAtk, sD = s.strongDef, sH = s.strongHP;
    if (sBest == 0) return true;
    else if (sBest == 1 && sA) return (atk <= 7);
    else if (sBest == 1 && sD) return (def <= 7);
    else if (sBest == 1 && sH) return (sta <= 7);

    else if (sBest == 2 && sA) return (atk >= 8 && atk <= 12);
    else if (sBest == 2 && sD) return (def >= 8 && def <= 12);
    else if (sBest == 2 && sH) return (sta >= 8 && sta <= 12);

    else if (sBest == 3 && sA) return (atk >= 13 && atk <= 14);
    else if (sBest == 3 && sD) return (def >= 13 && def <= 14);
    else if (sBest == 3 && sH) return (sta >= 13 && sta <= 14);

    else if (sBest == 4 && sA) return (atk == 15);
    else if (sBest == 4 && sD) return (def == 15);
    else if (sBest == 4 && sH) return (sta == 15);
  };
  
  // Get levels by dust value
  var levels = [];
  for (var dustLevel in levelsData) {
    // Unless it's been powered up, don't count half levels
    if (this._.powered || dustLevel.toString().indexOf(".5") < 0) {
      if (levelsData[dustLevel].dust == this._.dust) {
        levels.push({
          level: dustLevel,
          cpm: levelsData[dustLevel].cpm
        });
      }
    }
  }
  if (!levels.length) return { err: "Dust Invalid." };

  // hunt down the stamina by HP
  var hpIVs = [], stamina;
  for (var hpLevel in levels) {
    // loop through all the possible stamina IVs
    for (stamina = 0;stamina <= 15;stamina++) {
      var lvl = levels[hpLevel].level,
        testHP = this.getHP(lvl, stamina);
      if (testHP == this._.hp) hpIVs.push({ level: lvl, iv: stamina });
    }
  }

  // use the stamina IV to find the others!
  var attack, defense;
  for (var i = 0;i < hpIVs.length;i++) {
    var level = hpIVs[i].level; stamina = hpIVs[i].iv;

    // loop through all the attack/defense IVs
    for (attack = 0;attack <= 15;attack++) {
      for (defense = 0;defense <= 15;defense++) {
        // now we have a set of IVs, let's check!
        if (this.getCP(level, attack, defense, stamina) == this._.cp) {
          // Woo, this set of IVs works!
          // Check it against highest stats...
          if (byHighest(this._, attack, defense, stamina)) {
            if (byBest(this._, attack, defense, stamina)) {
              // Passed the second check, let's push it!
              ivs.push({
                atk: attack,
                def: defense,
                sta: stamina,
                lvl: level,
                perf: Math.floor(((attack + defense + stamina) / 45) * 100)
              });
            }
          }
        }
      }
    }
  }

  // sort
  ivs.sort(function(a,b) {
    if (a.perf == b.perf) return 0;
    return a.perf > b.perf ? 1 : -1;
  });

  // build and grade
  result.ivs = ivs;
  result.grade = {
    avg: 0,
    min: ivs[0].perf,
    max: ivs[ivs.length - 1].perf
  };
  for (var p = 0;p < ivs.length;p++) result.grade.avg += ivs[p].perf;
  result.grade.avg = Math.floor(result.grade.avg / ivs.length);

  return result;
};
