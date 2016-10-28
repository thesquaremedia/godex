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
      rank: (rank > 1 ? ("+" + rank) : rank)
    };
  };

  rank.stats = function(atk, def, sta) {
    return Math.floor((parseInt(atk) + parseInt(def) + parseInt(sta)) / 3);
  };

  data.attack = rank.stat(this.stats.attack, avg.attack, best.attack);
  data.defense = rank.stat(this.stats.defense, avg.defense, best.defense);
  data.stamina = rank.stat(this.stats.stamina, avg.stamina, best.stamina);
  data.stats = rank.stats(data.attack.rank, data.defense.rank, data.stamina.rank);

  this.rankings = data;
  Note("Ranked Pokemon: " + this.name);
  return this.rank();
};
