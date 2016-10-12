/*
  testing.js
  run this file to make sure it all works, I guess.
*/

var Go = require('./godex'),
  details = false; // change to true to print data

// Some Helper Functions

function note(message, data) {
  if (data && details) console.log("[GO]Dex:", message, data);
  else console.log("[GO]Dex:", message);
}

function space(num) {
  for (var x = 0; x < num;x++) {
    console.log(""); // for pretty printing in console.
  }
}

function check(thing) {
  if (Array.isArray(thing)) {
    return (thing.length > 0) ? "SUCCESS" : "ERROR!";
  } else {
    return thing ? "SUCCESS" : "ERROR!";
  }
}

// AND NOW WE TEST
space(1);
note("------------TESTING DATA------------");
space(1);

var pokemon = Go("pokemon", "list").data;
note("# OF POKEMON: " + pokemon.length, pokemon);

var types = Go("types", "list").data;
note("# OF POKEMON TYPES: " + types.length, types);

var moves = Go("moves", "list").data;
note("# OF POKEMON MOVES: " + moves.length, moves);
//
space(2);
note("---------VERIFYING: METHODS---------");
space(1);

var i, methodData;

note("VERIFYING: Go(pokemon)");
for (i in pokemon) {
  methodData = Go(pokemon[i].key);
}
methodData = Go('Bulbasaur');
note("METHOD: Go('Bulbasaur'): " + check(methodData), methodData);

methodData = Go(1);
note("METHOD: Go(1): " + check(methodData), methodData);

methodData = Go('type', 'bug');
note("METHOD: Go('type', 'bug'): " + check(methodData), methodData);

methodData = Go('move', 'Twister');
note("METHOD: Go('move', 'Twister'): " + check(methodData), methodData);

methodData = Go('pokemon.type', 'bug');
note("METHOD: Go('pokemon.type', 'bug'): " + check(methodData), methodData);

space(1);

note("VERIFYING: Pokemon.appraise()");
methodData = Go('Aerodactyl');
var appraisal = methodData.appraise({
  cp: 1495,
  hp: 113,
  dust: 3500,
  powered: true,
  strongAtk: false,
  strongDef: true,
  strongHP: false
});
note("METHOD: Pokemon.appraise(): " + check(appraisal), appraisal);

space(2);
note("---------VERIFYING: POKEMON---------");
space(1);
//
var vPoke = 0, uPoke = 0, // counting
  ePoke = {}; // error collection

for (var _p in pokemon) {
  var isGood = true,
    key = pokemon[_p].key,
    poke = Go(key);

  if (!poke) {
    if (!ePoke[key]) ePoke[key] = [];
    ePoke[key].push(key + " CRITICAL ERROR, NO DATA FOUND.");
    isGood = false;
  }

  if (!isGood) {
    uPoke += 1;
  } else {
    vPoke += 1;
  }
}

note("POKEMON VERIFIED: " + vPoke + ", ERROR: " + uPoke);
if (uPoke > 1 || ePoke.length) {
  for (var mon in ePoke) {
    for (var err in ePoke[mon]) {
      note(ePoke[mon][err]);
    }
  }
}

space(2);
note("------------DONE-CHECKING-----------");
space(1);
