/*
  testing.js
  run this file to make sure it all works, I guess.
*/

var Go = require('./godex'),
  details = false; // change to true to print data

// Helper Functions
var space = function(num) { for (var i = 0;i < num;i++) console.log(""); };
var note = function(msg, data) { var pre = "GoDEX >>";
  return (details && data) ? console.log(pre,msg,data) : console.log(pre,msg);
};
var chk = function(x) {
  if (Array.isArray(x)) return (x.length > 0) ? "SUCCESS" : "ERROR";
  else return x ? "SUCCESS" : "ERROR";
};

// -------- TESTING BABY -------- //
var h1 = "** ";

space(1);
note(h1 + "TESTING DATA");
space(1);

var pokemon = Go("pokemon", "list").data;
note("# of Pokemon: " + pokemon.length, pokemon);

var types = Go("types", "list").data;
note("# of Types:" + types.length, types);

var moves = Go("moves", "list").data;
note("# of Moves: " + moves.length, moves);

space(2);
note(h1 + "VERIFYING METHODS");
space(1);

var i, methodData;

note("VERIFYING: Go(pokemon)");
for (i in pokemon) methodData = Go(pokemon[i].key);
note("METHOD: Go('Mewtwo'): " + chk(methodData), methodData);
methodData = Go(151);
note("METHOD: GO(151): " + chk(methodData), methodData);
space(1);

note("VERIFYING: Go(location, thing)");
methodData = Go('type', 'psychic');
note("METHOD: GO('type', 'psychic'): " + chk(methodData), methodData);
methodData = Go('move', 'twister');
note("METHOD: GO('move', 'twister'): " + chk(methodData), methodData);
methodData = Go('pokemon.type', 'psychic');
note("METHOD: GO('pokemon.type', 'psychic'): " + chk(methodData), methodData);
space(1);

note("VERIFYING: Go(pokemon).IVs()");
for (i in pokemon) methodData = Go(pokemon[i].key).IVs();
note("METHOD: GO('Mewtwo').IVs(): " + chk(methodData), methodData);
space(1);

note("VERIFYING: Go(pokemon).duel()");
for (i in pokemon) methodData = Go(pokemon[i].key).duel();
note("METHOD: GO('Mewtwo').duel(): " + chk(methodData), methodData);

space(2);
note(h1 + "VERIFYING POKEMON");
space(1);

var verified = 0, bad = 0, err = [];
for (var p in pokemon) {
  var good = true, key = pokemon[p].key, poke = Go(key);
  if (!poke) { good = false; err.push(key + ": NO DATA"); }
  if (!poke.IVs().ivs.length) { good = false; err.push(key + ": BAD IVs"); }
  if (!poke.duel().weave) { good = false; err.push(key + ": BAD DUEL"); }
  if (good) { verified += 1; } else { bad += 1; }
}
note("POKEMON VERIFIED: " + verified + "; ERROR: " + bad);
for (i in err) note(err[i]);

space(2);
note(h1 + "DONE CHECKING");
space(1);
