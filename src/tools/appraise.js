/** appraise.js | calculate iv's **/
/** partial: 'this' refers to Pokemon class **/
/** credit to: https://github.com/andromedado/pokemon-go-iv-calculator/ **/

var _appraise = function() {
  var lvl;
  var hpIVs = [], potential = [], result = {}, levels = [];

  // a lot of redundancy to make sure x is strongest
  // for when the trainer appraises it so!
  var reappraise = function(_, atk, def, sta) {
    var strA = _.strongAtk, strD = _.strongDef, strS = _.strongHP;

    if (!strA && !strD && !strA) return true;
    else if (strA && !strD && !strS) return (atk > def && atk > sta);
    else if (!strA && strD && !strS) return (def > atk && def > sta);
    else if (!strA && !strD && strS) return (sta > atk && sta > def);
    else if (strA && strD && !strS) return (atk == def && atk > sta);
    else if (strA && !strD && strS) return (atk == sta && atk > def);
    else if (!strA && strD && strS) return (def == sta && def > atk);
    else if (strA && strD && strS) return (atk == def && atk == sta);
  };

  var howPerf = function(ivs) {
    return Math.floor(((ivs.atk + ivs.def + ivs.sta) / 45) * 100);
  };

  var grade = function(ivs) {
    var grades = {}, toGrade = [],
      add = function(a,b) {
        return a + b;
      };
    if (ivs.length) {
      grades.min = ivs[0].perf;
      grades.max = ivs[0].perf;
      for (var _g = 0;_g < ivs.length;_g++) {
        toGrade.push(ivs[_g].perf);
        if (ivs[_g].perf > grades.max) grades.max = ivs[_g].perf;
        if (ivs[_g].perf < grades.min) grades.min = ivs[_g].perf;
      }
      grades.avg = Math.floor(toGrade.reduce(add, 0) / toGrade.length);
    }
    return grades;
  };

  for (lvl in levelsData) {
    if (levelsData[lvl].dust == this._.dust) {
      levels.push({ key: lvl, cpm: levelsData[lvl].cpm });
    }
  }

  if (!levels.length) return { err: "Dust invalid." };

  if (!this._.powered) {
    // if never upgraded, remove half levels
    for (lvl in levels) {
      if (levels[lvl].key.toString().indexOf(".5") > -1) delete levels[lvl];
    }
  }

  // get levels where HP matches
  for (lvl in levels) {
    var level = levels[lvl].key;
    // loop through all possible sta IVs
    for (staIV = 0;staIV < 16;staIV++) {
      if (this.getHP(level, { sta: staIV }) == this._.hp) {
        hpIVs.push({ level: level, iv: staIV });
      }
    }
  }

  // loop through stamina ivs
  for (var h = 0;h < hpIVs.length;h++) {
    staIV = hpIVs[h].iv;
    // loop through all attack and defense IVs
    for (atkIV = 0;atkIV < 16;atkIV++) {
      for (defIV = 0;defIV < 16;defIV++) {
        // now we have a combo of 3 IVs,
        // let's calculate the CP!
        var testCP = this.getCP(hpIVs[h].level, {
          atk: atkIV, def: defIV, sta: staIV
        });
        // if test CP matches, we found a working set of IVs!
        if (testCP == this._.cp) {
          // quick reappraisal to filter!
          if (reappraise(this._, atkIV, defIV, staIV)) {
            potential.push({
              atk: atkIV,
              def: defIV,
              sta: staIV,
              lvl: hpIVs[h].level
            });
          }
        }
      }
    }
  }

  // get percents for IV scores
  for (var i = 0;i < potential.length;i++) {
    potential[i].perf = howPerf(potential[i]);
  }

  // sort
    potential.sort(function(a,b) {
    if (a.perf == b.perf) return 0;
    return a.perf > b.perf ? 1 : -1;
  });

  // build and grade
  result.ivs = potential;
  result.grade = grade(potential);

  return result;
};
