/** Pokemon.rank.js | ranking a pokemon **/

Pokemon.prototype.rank = function() {
  // only run generators once!
  if (this.rankings) return this.rankings;
  var _avg = Dex.prototype._average, _best = Dex.prototype._best;

  var rankStats = function(score, avgScore, bestScore) {
    var avg = pc(score / avgScore),
      best = pc(score / bestScore.score);

    return {
      score: score,
      average: avgScore,
      best: bestScore,
      rank: {
        best: best,
        average: avg,
        gorank: Math.floor((best + avg) / 2)
      }
    };
  };

  // rank pokemon's stats
  this.rankings = {
    stat: {
      attack: rankStats(this.stats.attack, _avg.attack, _best.attack),
      defense: rankStats(this.stats.defense, _avg.defense, _best.defense),
      stamina: rankStats(this.stats.stamina, _avg.stamina, _best.stamina)
    }
  };
  return this.rankings;
};
