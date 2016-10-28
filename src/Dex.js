/** Dex.js | Data & Tools wrapper **/

var Dex = function(opts) {
  if (opts.length) {
    var get, location, subtype, data;
    // what are we looking for, and where are we looking?
    get = opts[opts.length - 1];
    location = opts.length < 2 ? "pokemon" : opts[0].toLowerCase();

    // is the location a subproperty?
    if (location.indexOf(".") > -1) {
      subtype = location.split(".")[1];
      location = location.split(".")[0];
    }

    // define data based on location
    if (location.indexOf("type") > -1) data = typesData;
    if (location.indexOf("move") > -1) data = movesData;
    if (location.indexOf("level") > -1) data = levelsData;
    if (location.indexOf("pokemon") > -1) data = pokemonData;
    if (!data) return (this.err = "Couldn't find: " + location);

    // was there a subtype?
    if (subtype) {
      this.data = [];
      for (var subtypes in data) {
        var fetch = data[subtypes], got = fetch[subtype];
        fetch.key = subtypes; // objects, amirite

        if (!got) return (this.err = "Couldn't find subtype: " + subtype);
        else if (isArr(got) && got.indexOf(get > -1)) this.data.push(fetch);
        else if (isNaN(got) && key(got) == key(get)) this.data.push(fetch);
        else if (got == get) this.data.push(fetch);
      }
      return;
    }

    // if we want it all, give it all
    if (get == "all") return (this.data = data);
    if (get == "list") {
      // alternatively, make a brief list
      this.data = [];
      for (var d in data) {
        var item = data[d],
          name = item.name, id = item.id ? item.id : 0;
        if (!name) this.data.push({ key: d, data: item });
        else this.data.push({ key: d, name: name, id: id });
      }
      return;
    }

    // All right,
    // let's find something
    var result;
    if (data[key(get)]) result = data[key(get)];
    else {
      for (var search in data) {
        if (data[search].name == get) result = data[search]; // is it a name?
        if (data[search].id == parseInt(get)) result = data[search]; // or id?
        if (result) {
          get = search;
          break;
        }
      }
    }

    // did we find anything?
    if (!result) return (this.err = "Couldn't find: " + get);
    else {
      // tell the people where we found it
      result.is = location;
      result.key = key(get);
    }
    this.data = result;
  } else {
    this.err = "Nothing to find!";
  }
};

Dex.prototype = {
  version: "2.5.0",

  // tools
  Gym: function() { return new Gym(); },

  // generator
  // NOTE TODO README WHATEVER
  // If data changes (pokemon, moves, type, etc), run
  // the generator with Go().makeStatic(). This will
  // re-generate all the static data here and print it
  // in the log all nice and pretty. This data should
  // remain static! Too intense to be running all the time.
  makeStatic: function() {
    // loop through all pokemon and collect data
    var avg = 0, letters = [], dust = [];
    var avgAtk = 0, avgDef = 0, avgSta = 0, avgDmg = 0;
    var topAtk = { s: 0 }, topDef = { s: 0 };
    var topSta = { s: 0 }, topDmg = { s: 0 };

    for (var poke in pokemonData) {
      var mon = Go(poke), stats = mon.stats;
      avg += 1; // running tally of average
      mon.duel(); // make sure we generate this
      var duel = mon.dueling[0].output; // to set it here

      // running alphabet of first-letters
      // useful for letter tabs and sorting
      // example: gen 1 has no 'U' pokemon.
      var letter = poke.charAt(0);
      if (letters.indexOf(letter) < 0) letters.push(letter);

      // Find the best stats
      if (stats.attack > topAtk.s) topAtk = { s: stats.attack, k: mon.key };
      if (stats.defense > topDef.s) topDef = { s: stats.defense, k: mon.key };
      if (stats.stamina > topSta.s) topSta = { s: stats.stamina, k: mon.key };
      if (duel > topDmg.s) topDmg = { s: duel, k: mon.key };

      // Tally for averages
      var avgDuel = 0;
      avgAtk += stats.attack;
      avgDef += stats.defense;
      avgSta += stats.stamina;
      for (var i = 0; i < mon.dueling.length; i++) {
        avgDuel += mon.dueling[i].output;
      }
      avgDmg += (avgDuel / mon.dueling.length);
    }

    for (var level in levelsData) {
      // get all the unique dust options
      // for filters as well.
      var option = levelsData[level].dust;
      if (dust.indexOf(option) < 0) dust.push(option);
    }

    avgAtk = Math.floor(avgAtk / avg);
    avgDef = Math.floor(avgDef / avg);
    avgSta = Math.floor(avgSta / avg);
    avgDmg = Math.floor(avgDmg / avg);

    console.log("letters");
    console.log(letters.sort());

    console.log("dust");
    console.log(dust);

    console.log("average");
    console.log({
      attack: avgAtk,
      defense: avgDef,
      stamina: avgSta,
      damage: avgDmg
    });

    console.log("best");
    console.log({
      attack: topAtk,
      defense: topDef,
      stamina: topSta,
      damage: topDmg
    });
  },

  // static data
  _aZ: [ 'a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','r','s','t','v','w','z' ],

  _dustLevels: [ 200,400,600,800,1000,1300,1600,1900,2200,
    2500,3000,3500,4000,4500,5000,6000,7000,8000,9000,10000 ],

  _best: {
    attack: { key: 'mewtwo', name: 'Mewtwo', score: 284 },
    defense: { key: 'articuno', name: 'Articuno', score: 242 },
    stamina: { key: 'chansey', name: 'Chansey', score: 500 },
    damage: { key: 'mewtwo', name: 'Mewtwo', score: 1866 }
  },
  _average: { attack: 151, defense: 146, stamina: 128, damage: 1194 }
};
