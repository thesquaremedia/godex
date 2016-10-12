/** Dex.js | Data & Tools wrapper **/

var Dex = function(opts) {
  // function to find what we're looking for!
  var find = function(opts) {
    // clean a string into a key
    var key = function(s) {
      if (typeof s !== "string") return s;
      return s.replace(".","").replace(" ","-").replace("'","")
        .replace("♀","f").replace("♂","m").toLowerCase();
    };

    var data, result, search, subtype, target, location;
    if (!opts.length) return { err: "Nothing to find!" };

    target = opts[opts.length - 1];
    location = opts.length < 2 ? "pokemon" : opts[0].toLowerCase();

    // check for subproperty
    if (location.indexOf(".") > -1) {
      subtype = location.split(".")[1];
      location = location.split(".")[0];
    }

    // define data for location
    if (location.indexOf("type") > -1) data = typesData;
    if (location.indexOf("move") > -1) data = movesData;
    if (location.indexOf("level") > -1) data = levelsData;
    if (location.indexOf("pokemon") > -1) data = pokemonData;

    if (!data) return { err: "Couldn't find: " + location };

    // was there a subtype?
    if (subtype) {
      result = [];
      for (var subtypes in data) {
        // get all data with that subtype
        var fetch = data[subtypes], _data = fetch[subtype];
        fetch.key = subtypes; // save this for later
        if (!_data) {
          // couldn't find anything!
          return { err: "Couldn't find subtype: " + subtype };
        } else if (Array.isArray(_data)) {
          // if an array, does it contain the target?
          if (_data.indexOf(target) > -1) result.push(fetch);
        } else if (isNaN(_data)) {
          // if a string, does it by chance match?
          if (key(_data) == key(target)) result.push(fetch);
        } else {
          // else..is...is IT the target?
          if (_data == target) result.push(fetch);
        }
      }
      // and we're done (if it was a subtype)
      return result;
    }

    if (target == "all") return data; // if we want it all, return it all
    if (target == "list") {
      // alternatively, we could create a list
      result = [];
      for (var d in data) {
        if (data[d].name) {
          // if it's got a name, just a a list of names
          // and maybe ID's
          result.push({ key: d, name: data[d].name,
            id: data[d].id ? data[d].id : 0 });
        } else {
          // just return data if no names?
          result.push({ key: d, data: data[d] });
        }
      }
      // done if it's a list!
      return result;
    }

    if (data[key(target)]) {
      // maybe it could be this easy!
      result = data[key(target)];
    } else {
      // or I guess we'll look deeper.
      for (search in data) {
        // is it a name?
        if (data[search].name == target) {
          result = data[search];
          target = search;
        }
        // or an ID?
        if (data[search].id == parseInt(target)) {
          result = data[search];
          target = search;
        }
      }
    }

    // well, we've looked everywhere.
    // did we find it?
    if (!result) {
      // well, darn.
      result = { err: "Couldn't find: " + target };
    } else {
      // tell the people where we found it.
      result.is = location;
      result.key = key(target);
    }
    return result;
  };

  if (opts.length) {
    this.data = find(opts);
    if (this.data) {
      if (this.data.err) this.err = this.data.err;
    }
  }
};

Dex.prototype = {
  version: "2.0.0",

  // tools
  Gym: function() { return new Gym(); },

  // static data
  _aZ: [ "a","b","c","d","e","f","g","h","i","j","k",
      "l","m","n","o","p","r","s","t","v","w","z" ],

  _dustLevels: [ 200, 400, 600, 800, 1000, 1300, 1600, 1900, 2200, 2500,
    3000, 3500, 4000, 4500, 5000, 6000, 7000, 8000, 9000, 10000 ]
};
