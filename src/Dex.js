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

// One-Time Generators
var alphabet = [], dustOptions = [], avg = 0,
  average = { attack: 0, defense: 0, stamina: 0 },
  best = { attack: { score: 0 }, defense: { score: 0 }, stamina: { score: 0 } };

for (var poke in pokemonData) {
  // get first letter of possible
  // pokemon names (for filters)
  var letter = poke.charAt(0), mon = pokemonData[poke];
  if (alphabet.indexOf(letter) < 0) alphabet.push(letter);

  // find best attack/defense/stamina
  if (mon.stats.attack > best.attack.score) {
    best.attack = { key: poke, name: mon.name, score: mon.stats.attack };
  }
  if (mon.stats.defense > best.defense.score) {
    best.defense = { key: poke, name: mon.name, score: mon.stats.defense };
  }
  if (mon.stats.stamina > best.stamina.score) {
    best.stamina = { key: poke, name: mon.name, score: mon.stats.stamina };
  }

  // collect for average attack/defense/stamina
  avg += 1;
  average.attack += mon.stats.attack;
  average.defense += mon.stats.defense;
  average.stamina += mon.stats.stamina;
}

for (var level in levelsData) {
  // get all the unique dust options
  // for filters as well.
  var option = levelsData[level].dust;
  if (dustOptions.indexOf(option) < 0) dustOptions.push(option);
}

// Calculate averages for average stats
average.attack = Math.floor(average.attack / avg);
average.defense = Math.floor(average.defense / avg);
average.stamina = Math.floor(average.stamina / avg);


Dex.prototype = {
  version: "2.5.0",

  // tools
  Gym: function() { return new Gym(); },

  // static data
  _aZ: alphabet.sort(),
  _best: best,
  _average: average,
  _dustLevels: dustOptions
};
