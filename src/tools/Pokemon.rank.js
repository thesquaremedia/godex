/** Pokemon.rank.js | ranking a pokemon **/

Pokemon.prototype.rank = function() {
  var d = Dex.prototype, avg = d._average, best = d._best, grade, gradeStats;

  grade = function(stat, mid, top) {
    var rank = pc(stat / mid) - 100;
    return { score: stat, average: mid, best: top, rank: rank };
  };

  gradeStats = function(s) {
    var t = s.attack.rank + s.defense.rank + s.stamina.rank + s.damage.rank;
    return Math.floor(t / 4);
  };

  // only run generators once!
  if (!this.rankings) {
    this.rankings = {
      stat: {
        attack: grade(this.stats.attack, avg.attack, best.attack),
        defense: grade(this.stats.defense, avg.defense, best.defense),
        stamina: grade(this.stats.stamina, avg.stamina, best.stamina)
      }
    };
    Note("Ranked Pokemon: " + this.name);
  }

  // rank duel
  this.rankings.stat.damage = grade(this.duel().output, avg.damage, best.damage);
  this.rankings.stats = gradeStats(this.rankings.stat);
  return this.rankings;
};
