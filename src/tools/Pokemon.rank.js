/** Pokemon.rank.js | ranking a pokemon **/

Pokemon.prototype.rank = function() {
  // only run generators once!
  if (this.rankings) return this.rankings;
  var d = Dex.prototype, avg = d._average, best = d._best, rank = {}, data = {};

  rank.stat = function(stat, mid, top) {
    var rank = pc(stat / mid) - 100;
    return {
      score: stat,
      average: mid,
      best: top,
      rank: rank
    };
  };

  rank.stats = function(stats) {
    var total = stats.attack.rank + stats.defense.rank + stats.stamina.rank;
    return Math.floor(total / 3);
  };

  data.stat = {
    attack: rank.stat(this.stats.attack, avg.attack, best.attack),
    defense: rank.stat(this.stats.defense, avg.defense, best.defense),
    stamina: rank.stat(this.stats.stamina, avg.stamina, best.stamina)
  };
  data.stats = rank.stats(data.stat);

  this.rankings = data;
  Note("Ranked Pokemon: " + this.name);
  return this.rank();
};
