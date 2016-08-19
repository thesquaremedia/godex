/*
  pokemon.js
  godex - list of pokemon
*/

// merge with godex if exists
var godex = godex ? godex : {};

godex.pokemon = {
  "bulbasaur": {
    id: 1,
    egg: 2,
    candy: 25,
    name: "Bulbasaur",
    type: ["grass", "poison"],
    quickMoves: ["tackle", "vine-whip"],
    chargeMoves: ["power-whip", "seed-bomb", "sludge-bomb"],
    evolveTo: "ivysaur"
  },
  "ivysaur": {
    id: 2,
    egg: 0,
    candy: 100,
    name: "Ivysaur",
    type: ["grass", "poison"],
    quickMoves: ["vine-whip", "razor-leaf"],
    chargeMoves: ["power-whip", "sludge-bomb", "solar-beam"],
    evolveFrom: "bulbasaur",
    evolveTo: "venusaur"
  },
  "venusaur": {
    id: 3,
    egg: 0,
    candy: 0,
    name: "Venusaur",
    type: ["grass", "poison"],
    quickMoves: ["vine-whip", "razor-leaf"],
    chargeMoves: ["petal-blizzard", "sludge-bomb", "solar-beam"],
    evolveFrom: "ivysaur"
  },
  "charmander": {
    id: 4,
    egg: 2,
    candy: 25,
    name: "Charmander",
    type: ["fire"],
    quickMoves: ["ember", "scratch"],
    chargeMoves: ["flame-burst", "flame-charge", "flamethrower"],
    evolveTo: "charmeleon"
  },
  "charmeleon": {
    id: 5,
    egg: 0,
    candy: 100,
    name: "Charmeleon",
    type: ["fire"],
    quickMoves: ["ember", "scratch"],
    chargeMoves: ["fire-punch", "flame-burst", "flamethrower"],
    evolveFrom: "charmander",
    evolveTo: "charizard"
  },
  "charizard": {
    id: 6,
    egg: 0,
    candy: 0,
    name: "Charizard",
    type: ["fire", "flying"],
    quickMoves: ["ember", "wing-attack"],
    chargeMoves: ["dragon-claw", "fire-blast", "flamethrower"],
    evolveFrom: "charmeleon"
  },
  "squirtle": {
    id: 7,
    egg: 2,
    candy: 25,
    name: "Squirtle",
    type: ["water"],
    quickMoves: ["bubble", "tackle"],
    chargeMoves: ["aqua-jet", "aqua-tail", "water-pulse"],
    evolveTo: "wartortle"
  },
  "wartortle": {
    id: 8,
    egg: 0,
    candy: 100,
    name: "Wartortle",
    type: ["water"],
    quickMoves: ["bite", "water-gun"],
    chargeMoves: ["aqua-jet", "hydro-pump", "ice-beam"],
    evolveFrom: "squirtle",
    evolveTo: "blastoise"
  },
  "blastoise": {
    id: 9,
    egg: 0,
    candy: 0,
    name: "Blastoise",
    type: ["water"],
    quickMoves: ["bite", "water-gun"],
    chargeMoves: ["flash-cannon", "hydro-pump", "ice-beam"],
    evolveFrom: "wartortle"
  },
  "caterpie": {
    id: 10,
    egg: 2,
    candy: 12,
    name: "Caterpie",
    type: ["bug"],
    quickMoves: ["bug-bite", "tackle"],
    chargeMoves: ["struggle"],
    evolveTo: "metapod"
  },
  "metapod": {
    id: 11,
    egg: 0,
    candy: 50,
    name: "Metapod",
    type: ["bug"],
    quickMoves: ["bug-bite", "tackle"],
    chargeMoves: ["struggle"],
    evolveFrom: "caterpie",
    evolveTo: "butterfree"
  },
  "butterfree": {
    id: 12,
    egg: 0,
    candy: 0,
    name: "Butterfree",
    type: ["bug", "flying"],
    quickMoves: ["bug-bite", "confusion"],
    chargeMoves: ["bug-buzz", "signal-beam", "psychic"],
    evolveFrom: "metapod"
  },
  "weedle": {
    id: 13,
    egg: 2,
    candy: 12,
    name: "Weedle",
    type: ["bug", "poison"],
    quickMoves: ["bug-bite", "poison-sting"],
    chargeMoves: ["struggle"],
    evolveTo: "kakuna"
  },
  "kakuna": {
    id: 14,
    egg: 0,
    candy: 50,
    name: "Kakuna",
    type: ["bug", "poison"],
    quickMoves: ["bug-bite", "poison-sting"],
    chargeMoves: ["struggle"],
    evolveFrom: "weedle",
    evolveTo: "beedrill"
  },
  "beedrill": {
    id: 15,
    egg: 0,
    candy: 0,
    name: "Beedrill",
    type: ["bug", "poison"],
    quickMoves: ["bug-bite", "poison-jab"],
    chargeMoves: ["aerial-ace", "sludge-bomb", "x-scissor"],
    evolveFrom: "kakuna"
  },
  "pidgey": {
    id: 16,
    egg: 2,
    candy: 12,
    name: "Pidgey",
    type: ["normal", "flying"],
    quickMoves: ["tackle", "quick-attack"],
    chargeMoves: ["aerial-ace", "air-cutter", "twister"],
    evolveTo: "pidgeotto"
  },
  "pidgeotto": {
    id: 17,
    egg: 0,
    candy: 50,
    name: "Pidgeotto",
    type: ["normal", "flying"],
    quickMoves: ["steel-wing", "wing-attack"],
    chargeMoves: ["aerial-ace", "air-cutter", "twister"],
    evolveFrom: "pidgeot",
    evolveTo: "pidgeot"
  },
  "pidgeot": {
    id: 18,
    egg: 0,
    candy: 0,
    name: "Pidgeot",
    type: ["normal", "flying"],
    quickMoves: ["steel-wing", "wing-attack"],
    chargeMoves: ["aerial-ace", "air-cutter", "hurricane"],
    evolveFrom: "pidgeotto"
  },
  "rattata": {
    id: 19,
    egg: 2,
    candy: 25,
    name: "Rattata",
    type: ["normal"],
    quickMoves: ["tackle", "quick-attack"],
    chargeMoves: ["body-slam", "dig", "hyper-fang"],
    evolveTo: "raticate"
  },
  "raticate": {
    id: 20,
    egg: 0,
    candy: 0,
    name: "Raticate",
    type: ["normal"],
    quickMoves: ["bite", "quick-attack"],
    chargeMoves: ["dig", "hyper-beam", "hyper-fang"],
    evolveFrom: "rattata"
  },
  "spearow": {
    id: 21,
    egg: 2,
    candy: 50,
    name: "Spearow",
    type: ["normal", "flying"],
    quickMoves: ["peck", "quick-attack"],
    chargeMoves: ["aerial-ace", "drill-peck", "twister"],
    evolveTo: "Fearow"
  },
  "fearow": {
    id: 22,
    egg: 0,
    candy: 0,
    name: "Fearow",
    type: ["normal", "flying"],
    quickMoves: ["peck", "steel-wing"],
    chargeMoves: ["aerial-ace", "drill-run", "twister"],
    evolveFrom: "spearow"
  },
  "ekans": {
    id: 23,
    egg: 5,
    candy: 50,
    name: "Ekans",
    type: ["poison"],
    quickMoves: ["acid", "poison-sting"],
    chargeMoves: ["gunk-shot", "sludge-bomb", "wrap"],
    evolveTo: "arbok"
  },
  "arbok": {
    id: 24,
    egg: 0,
    candy: 0,
    name: "Arbok",
    type: ["poison"],
    quickMoves: ["acid", "bite"],
    chargeMoves: ["dark-pulse", "gunk-shot", "sludge-wave"],
    evolveFrom: "ekans"
  },
  "pikachu": {
    id: 25,
    egg: 2,
    candy: 50,
    name: "Pikachu",
    type: ["electric"],
    quickMoves: ["thunder-shock", "quick-attack"],
    chargeMoves: ["discharge", "thunder", "thunderbolt"],
    evolveTo: "raichu"
  },
  "raichu": {
    id: 26,
    egg: 0,
    candy: 0,
    name: "Raichu",
    type: ["electric"],
    quickMoves: ["spark", "thunder-shock"],
    chargeMoves: ["brick-break", "thunder", "thunder-punch"],
    evolveFrom: "pikachu"
  },
  "sandshrew": {
    id: 27,
    egg: 5,
    candy: 50,
    name: "Sandshrew",
    type: ["ground"],
    quickMoves: ["mud-shot", "scratch"],
    chargeMoves: ["dig", "rock-slide", "rock-tomb"],
    evolveTo: "Sandslash"
  },
  "sandslash": {
    id: 28,
    egg: 0,
    candy: 0,
    name: "Sandslash",
    type: ["ground"],
    quickMoves: ["metal-claw", "mud-shot"],
    chargeMoves: ["bulldoze", "earthquake", "rock-tomb"],
    evolveFrom: "sandshrew"
  },
  "nidoran-f": {
    id: 29,
    egg: 5,
    candy: 25,
    name: "Nidoran ♀",
    type: ["poison"],
    quickMoves: ["bite", "poison-sting"],
    chargeMoves: ["body-slam", "poison-fang", "sludge-bomb"],
    evolveTo: "nidorina"
  },
  "nidorina": {
    id: 30,
    egg: 0,
    candy: 100,
    name: "Nidorina",
    type: ["poison"],
    quickMoves: ["bite", "poison-sting"],
    chargeMoves: ["dig", "poison-fang", "sludge-bomb"],
    evolveFrom: "nidoran-f",
    evolveTo: "nidoqueen"
  },
  "nidoqueen": {
    id: 31,
    egg: 0,
    candy: 0,
    name: "Nidoqueen",
    type: ["poison", "ground"],
    quickMoves: ["bite", "poison-jab"],
    chargeMoves: ["earthquake", "sludge-wave", "stone-edge"],
    evolveFrom: "nidorina"
  },
  "nidoran-m": {
    id: 32,
    egg: 5,
    candy: 25,
    name: "Nidoran ♂",
    type: ["poison"],
    quickMoves: ["peck", "poison-sting"],
    chargeMoves: ["body-slam", "horn-attack", "sludge-bomb"],
    evolveTo: "nidorino"
  },
  "nidorino": {
    id: 33,
    egg: 0,
    candy: 100,
    name: "Nidorino",
    type: ["poison"],
    quickMoves: ["bite", "poison-jab"],
    chargeMoves: ["dig", "horn-attack", "sludge-bomb"],
    evolveFrom: "nidoran-m",
    evolveTo: "nidoking"
  },
  "nidoking": {
    id: 34,
    egg: 0,
    candy: 0,
    name: "Nidoking",
    type: ["poison", "ground"],
    quickMoves: ["fury-cutter", "poison-jab"],
    chargeMoves: ["earthquake", "megahorn", "sludge-wave"],
    evolveFrom: "nidorino"
  },
  "clefairy": {
    id: 35,
    egg: 2,
    candy: 50,
    name: "Clefairy",
    type: ["fairy"],
    quickMoves: ["pound", "zen-headbutt"],
    chargeMoves: ["body-slam", "disarming-voice", "moonblast"],
    evolveTo: "clefable"
  },
  "clefable": {
    id: 36,
    egg: 0,
    candy: 0,
    name: "Clefable",
    type: ["fairy"],
    quickMoves: ["pound", "zen-headbutt"],
    chargeMoves: ["dazzling-gleam", "moonblast", "psychic"],
    evolveFrom: "clefairy"
  },
  "vulpix": {
    id: 37,
    egg: 5,
    candy: 50,
    name: "Vulpix",
    type: ["fire"],
    quickMoves: ["ember", "quick-attack"],
    chargeMoves: ["body-slam", "flame-charge", "flamethrower"],
    evolveTo: "ninetales"
  },
  "ninetales": {
    id: 38,
    egg: 0,
    candy: 0,
    name: "Ninetales",
    type: ["fire"],
    quickMoves: ["ember", "feint-attack"],
    chargeMoves: ["fire-blast", "flamethrower", "heat-wave"],
    evolveFrom: "vulpix"
  },
  "jigglypuff": {
    id: 39,
    egg: 2,
    candy: 50,
    name: "Jigglypuff",
    type: ["normal", "fairy"],
    quickMoves: ["feint-attack", "pound"],
    chargeMoves: ["body-slam", "disarming-voice", "play-rough"],
    evolveTo: "wigglytuff"
  },
  "wigglytuff": {
    id: 40,
    egg: 0,
    candy: 0,
    name: "Wigglytuff",
    type: ["normal", "fairy"],
    quickMoves: ["feint-attack", "pound"],
    chargeMoves: ["dazzling-gleam", "hyper-beam", "play-rough"],
    evolveFrom: "jigglypuff"
  },
  "zubat": {
    id: 41,
    egg: 2,
    candy: 50,
    name: "Zubat",
    type: ["poison", "flying"],
    quickMoves: ["bite", "quick-attack"],
    chargeMoves: ["air-cutter", "poison-fang", "sludge-bomb"],
    evolveTo: "golbat"
  },
  "golbat": {
    id: 42,
    egg: 0,
    candy: 0,
    name: "Golbat",
    type: ["poison", "flying"],
    quickMoves: ["bite", "wing-attack"],
    chargeMoves: ["air-cutter", "ominous-wind", "poison-fang"],
    evolveFrom: "Zubat"
  },
  "oddish": {
    id: 43,
    egg: 5,
    candy: 25,
    name: "Oddish",
    type: ["poison", "grass"],
    quickMoves: ["acid", "razor-leaf"],
    chargeMoves: ["moonblast", "seed-bomb", "sludge-bomb"],
    evolveTo: "gloom"
  },
  "gloom": {
    id: 44,
    egg: 0,
    candy: 100,
    name: "Gloom",
    type: ["poison", "grass"],
    quickMoves: ["acid", "razor-leaf"],
    chargeMoves: ["moonblast", "petal-blizzard", "sludge-bomb"],
    evolveFrom: "oddish",
    evolveTo: "vileplume"
  },
  "vileplume": {
    id: 45,
    egg: 0,
    candy: 0,
    name: "Vileplume",
    type: ["poison", "grass"],
    quickMoves: ["acid", "razor-leaf"],
    chargeMoves: ["moonblast", "sludge-bomb", "solar-beam"],
    evolveFrom: "gloom"
  },
  "paras": {
    id: 46,
    egg: 5,
    candy: 50,
    name: "Paras",
    type: ["bug", "grass"],
    quickMoves: ["bug-bite", "scratch"],
    chargeMoves: ["cross-poison", "seed-bomb", "x-scissor"],
    evolveTo: "parasect"
  },
  "parasect": {
    id: 47,
    egg: 0,
    candy: 0,
    name: "Parasect",
    type: ["bug", "grass"],
    quickMoves: ["bug-bite", "fury-cutter"],
    chargeMoves: ["cross-poison", "solar-beam", "x-scissor"],
    evolveFrom: "paras"
  },
  "venonat": {
    id: 48,
    egg: 5,
    candy: 50,
    name: "Venonat",
    type: ["bug", "poison"],
    quickMoves: ["bug-bite", "confusion"],
    chargeMoves: ["poison-fang", "psybeam", "signal-beam"],
    evolveTo: "venomoth"
  },
  "venomoth": {
    id: 49,
    egg: 0,
    candy: 0,
    name: "Venomoth",
    type: ["bug", "poison"],
    quickMoves: ["bug-bite", "confusion"],
    chargeMoves: ["bug-buzz", "poison-fang", "psychic"],
    evolveFrom: "venonat"
  },
  "diglett": {
    id: 50,
    egg: 5,
    candy: 50,
    name: "Diglett",
    type: ["ground"],
    quickMoves: ["mud-shot", "scratch"],
    chargeMoves: ["dig", "mud-bomb", "rock-tomb"],
    evolveTo: "dugtrio"
  },
  "dugtrio": {
    id: 51,
    egg: 0,
    candy: 0,
    name: "Dugtrio",
    type: ["ground"],
    quickMoves: ["mud-shot", "sucker-punch"],
    chargeMoves: ["earthquake", "mud-bomb", "stone-edge"],
    evolveFrom: "diglett"
  },
  "meowth": {
    id: 52,
    egg: 5,
    candy: 50,
    name: "Meowth",
    type: ["normal"],
    quickMoves: ["bite", "scratch"],
    chargeMoves: ["body-slam", "dark-pulse", "night-slash"],
    evolveTo: "persian"
  },
  "persian": {
    id: 53,
    egg: 0,
    candy: 0,
    name: "Persian",
    type: ["normal"],
    quickMoves: ["feint-attack", "scratch"],
    chargeMoves: ["night-slash", "play-rough", "power-gem"],
    evolveFrom: "meowth"
  },
  "psyduck": {
    id: 54,
    egg: 5,
    candy: 50,
    name: "Psyduck",
    type: ["water"],
    quickMoves: ["water-gun", "zen-headbutt"],
    chargeMoves: ["aqua-tail", "cross-chop", "psybeam"],
    evolveTo: "golduck"
  },
  "golduck": {
    id: 55,
    egg: 0,
    candy: 0,
    name: "Golduck",
    type: ["water"],
    quickMoves: ["confusion", "water-gun"],
    chargeMoves: ["hydro-pump", "ice-beam", "psychic"],
    evolveFrom: "psyduck"
  },
  "mankey": {
    id: 56,
    egg: 5,
    candy: 50,
    name: "Mankey",
    type: ["fighting"],
    quickMoves: ["karate-chop", "scratch"],
    chargeMoves: ["brick-break", "cross-chop", "low-sweep"],
    evolveTo: "primeape"
  },
  "primeape": {
    id: 57,
    egg: 0,
    candy: 0,
    name: "Primeape",
    type: ["fighting"],
    quickMoves: ["karate-chop", "low-kick"],
    chargeMoves: ["cross-chop", "low-sweep", "night-slash"],
    evolveFrom: "mankey"
  },
  "growlithe": {
    id: 58,
    egg: 5,
    candy: 50,
    name: "Growlithe",
    type: ["fire"],
    quickMoves: ["bite", "ember"],
    chargeMoves: ["body-slam", "flame-wheel", "flamethrower"],
    evolveTo: "arcanine"
  },
  "arcanine": {
    id: 59,
    egg: 0,
    candy: 0,
    name: "Arcanine",
    type: ["fire"],
    quickMoves: ["bite", "fire-fang"],
    chargeMoves: ["bulldoze", "fire-blast", "flamethrower"],
    evolveFrom: "growlithe"
  },
  "poliwag": {
    id: 60,
    egg: 5,
    candy: 25,
    name: "Poliwag",
    type: ["water"],
    quickMoves: ["bubble", "mud-shot"],
    chargeMoves: ["body-slam", "bubble-beam", "mud-bomb"],
    evolveTo: "poliwhirl"
  },
  "poliwhirl": {
    id: 61,
    egg: 0,
    candy: 100,
    name: "Poliwhirl",
    type: ["water"],
    quickMoves: ["bubble", "mud-shot"],
    chargeMoves: ["bubble-beam", "scald", "mud-bomb"],
    evolveFrom: "poliwag",
    evolveTo: "poliwrath"
  },
  "poliwrath": {
    id: 62,
    egg: 0,
    candy: 0,
    name: "Poliwrath",
    type: ["water", "fighting"],
    quickMoves: ["bubble", "mud-shot"],
    chargeMoves: ["hydro-pump", "ice-punch", "submission"],
    evolveFrom: "poliwhirl"
  },
  "abra": {
    id: 63,
    egg: 5,
    candy: 25,
    name: "Abra",
    type: ["psychic"],
    quickMoves: ["zen-headbutt"],
    chargeMoves: ["psyshock", "shadow-ball", "signal-beam"],
    evolveTo: "kadabra"
  },
  "kadabra": {
    id: 64,
    egg: 0,
    candy: 100,
    name: "Kadabra",
    type: ["psychic"],
    quickMoves: ["confusion", "psycho-cut"],
    chargeMoves: ["dazzling-gleam", "psybeam", "shadow-ball"],
    evolveFrom: "abra",
    evolveTo: "alakazam"
  },
  "alakazam": {
    id: 65,
    egg: 0,
    candy: 0,
    name: "Alakazam",
    type: ["psychic"],
    quickMoves: ["confusion", "psycho-cut"],
    chargeMoves: ["dazzling-gleam", "psychic", "shadow-ball"],
    evolveFrom: "kadabra"
  },
  "machop": {
    id: 66,
    egg: 5,
    candy: 25,
    name: "Machop",
    type: ["fighting"],
    quickMoves: ["karate-chop", "low-kick"],
    chargeMoves: ["brick-break", "cross-chop", "low-sweep"],
    evolveTo: "machoke"
  },
  "machoke": {
    id: 67,
    egg: 0,
    candy: 100,
    name: "Machoke",
    type: ["fighting"],
    quickMoves: ["karate-chop", "low-kick"],
    chargeMoves: ["brick-break", "cross-chop", "submission"],
    evolveFrom: "machop",
    evolveTo: "machamp"
  },
  "machamp": {
    id: 68,
    egg: 0,
    candy: 0,
    name: "Machamp",
    type: ["fighting"],
    quickMoves: ["bullet-punch", "karate-chop"],
    chargeMoves: ["cross-chop", "stone-edge", "submission"],
    evolveFrom: "machoke"
  },
  "bellsprout": {
    id: 69,
    egg: 5,
    candy: 25,
    name: "Bellsprout",
    type: ["grass", "poison"],
    quickMoves: ["acid", "vine-whip"],
    chargeMoves: ["power-whip", "sludge-bomb", "seed-bomb"],
    evolveTo: "weepinbell"
  },
  "weepinbell": {
    id: 70,
    egg: 0,
    candy: 100,
    name: "Weepinbell",
    type: ["grass", "poison"],
    quickMoves: ["acid", "razor-leaf"],
    chargeMoves: ["power-whip", "seed-bomb", "sludge-bomb"],
    evolveFrom: "bellsprout",
    evolveTo: "victreebel"
  },
  "victreebel": {
    id: 71,
    egg: 0,
    candy: 0,
    name: "Victreebel",
    type: ["grass", "poison"],
    quickMoves: ["acid", "razor-leaf"],
    chargeMoves: ["leaf-blade", "sludge-bomb", "solar-beam"],
    evolveFrom: "weepinbell"
  },
  "tentacool": {
    id: 72,
    egg: 5,
    candy: 50,
    name: "Tentacool",
    type: ["water", "poison"],
    quickMoves: ["bubble", "poison-sting"],
    chargeMoves: ["bubble-beam", "water-pulse", "wrap"],
    evolveTo: "tentacruel"
  },
  "tentacruel": {
    id: 73,
    egg: 0,
    candy: 0,
    name: "Tentacruel",
    type: ["water", "poison"],
    quickMoves: ["acid", "poison-jab"],
    chargeMoves: ["blizzard", "hydro-pump", "sludge-wave"],
    evolveFrom: "tentacool"
  },
  "geodude": {
    id: 74,
    egg: 2,
    candy: 25,
    name: "Geodude",
    type: ["rock", "ground"],
    quickMoves: ["rock-throw", "tackle"],
    chargeMoves: ["dig", "rock-slide", "rock-tomb"],
    evolveTo: "graveler"
  },
  "graveler": {
    id: 75,
    egg: 0,
    candy: 100,
    name: "Graveler",
    type: ["rock", "ground"],
    quickMoves: ["mud-shot", "rock-throw"],
    chargeMoves: ["dig", "rock-slide", "stone-edge"],
    evolveFrom: "geodude",
    evolveTo: "golem"
  },
  "golem": {
    id: 76,
    egg: 0,
    candy: 0,
    name: "Golem",
    type: ["rock", "ground"],
    quickMoves: ["mud-shot", "rock-throw"],
    chargeMoves: ["ancient-power", "earthquake", "stone-edge"],
    evolveFrom: "graveler"
  },
  "ponyta": {
    id: 77,
    egg: 5,
    candy: 50,
    name: "Ponyta",
    type: ["fire"],
    quickMoves: ["ember", "tackle"],
    chargeMoves: ["fire-blast", "flame-charge", "flame-wheel"],
    evolveTo: "rapidash"
  },
  "rapidash": {
    id: 78,
    egg: 0,
    candy: 0,
    name: "Rapidash",
    type: ["fire"],
    quickMoves: ["ember", "low-kick"],
    chargeMoves: ["drill-run", "fire-blast", "heat-wave"],
    evolveFrom: "ponyta"
  },
  "slowpoke": {
    id: 79,
    egg: 5,
    candy: 50,
    name: "Slowpoke",
    type: ["water", "psychic"],
    quickMoves: ["confusion", "water-gun"],
    chargeMoves: ["water-pulse", "psybeam", "psychic"],
    evolveTo: "slowbro"
  },
  "slowbro": {
    id: 80,
    egg: 0,
    candy: 0,
    name: "Slowbro",
    type: ["water", "psychic"],
    quickMoves: ["confusion", "water-gun"],
    chargeMoves: ["ice-beam", "psychic", "water-pulse"],
    evolveFrom: "slowpoke"
  },
  "magnemite": {
    id: 81,
    egg: 0,
    candy: 0,
    name: "Magnemite",
    type: ["electric", "steel"],
    quickMoves: ["spark", "thunder-shock"],
    chargeMoves: ["discharge", "magnet-bomb", "thunderbolt"],
    evolveFrom: "magneton"
  },
  "magneton": {
    id: 82,
    egg: 5,
    candy: 50,
    name: "Magneton",
    type: ["electric", "steel"],
    quickMoves: ["spark", "thunder-shock"],
    chargeMoves: ["discharge", "flash-cannon", "magnet-bomb"],
    evolveTo: "magnemite"
  },
  "farfetchd": {
    id: 83,
    egg: 5,
    candy: 0,
    name: "Farfetch'd",
    type: ["normal", "flying"],
    quickMoves: ["cut", "fury-cutter"],
    chargeMoves: ["aerial-ace", "air-cutter", "leaf-blade"]
  },
  "doduo": {
    id: 84,
    egg: 5,
    candy: 50,
    name: "Doduo",
    type: ["normal", "flying"],
    quickMoves: ["peck", "quick-attack"],
    chargeMoves: ["aerial-ace", "drill-peck", "swift"],
    evolveTo: "dodrio"
  },
  "dodrio": {
    id: 85,
    egg: 0,
    candy: 0,
    name: "Dodrio",
    type: ["normal", "flying"],
    quickMoves: ["feint-attack", "steel-wing"],
    chargeMoves: ["aerial-ace", "air-cutter", "drill-peck"],
    evolveFrom: "doduo"
  },
  "seel": {
    id: 86,
    egg: 5,
    candy: 50,
    name: "Seel",
    type: ["water"],
    quickMoves: ["ice-shard", "water-gun"],
    chargeMoves: ["aqua-jet", "aqua-tail", "icy-wind"],
    evolveTo: "dewgong"
  },
  "dewgong": {
    id: 87,
    egg: 0,
    candy: 0,
    name: "Dewgong",
    type: ["water", "ice"],
    quickMoves: ["frost-breath", "ice-shard"],
    chargeMoves: ["aqua-jet", "blizzard", "icy-wind"],
    evolveFrom: "seel"
  },
  "grimer": {
    id: 88,
    egg: 5,
    candy: 50,
    name: "Grimer",
    type: ["poison"],
    quickMoves: ["acid", "mud-slap"],
    chargeMoves: ["sludge", "sludge-bomb", "sludge-wave"],
    evolveTo: "muk"
  },
  "muk": {
    id: 89,
    egg: 0,
    candy: 0,
    name: "Muk",
    type: ["poison"],
    quickMoves: ["acid", "poison-jab"],
    chargeMoves: ["dark-pulse", "sludge", "sludge-bomb"],
    evolveFrom: "grimer"
  },
  "shellder": {
    id: 90,
    egg: 5,
    candy: 50,
    name: "Shellder",
    type: ["water"],
    quickMoves: ["ice-shard", "tackle"],
    chargeMoves: ["bubble-beam", "icy-wind", "water-pulse"],
    evolveTo: "cloyster"
  },
  "cloyster": {
    id: 91,
    egg: 0,
    candy: 0,
    name: "Cloyster",
    type: ["water", "ice"],
    quickMoves: ["frost-breath", "ice-shard"],
    chargeMoves: ["blizzard", "icy-wind", "hydro-pump"],
    evolveFrom: "shellder"
  },
  "gastly": {
    id: 92,
    egg: 5,
    candy: 25,
    name: "Gastly",
    type: ["ghost", "poison"],
    quickMoves: ["lick", "sucker-punch"],
    chargeMoves: ["dark-pulse", "ominous-wind", "sludge-bomb"],
    evolveTo: "haunter"
  },
  "haunter": {
    id: 93,
    egg: 0,
    candy: 100,
    name: "Haunter",
    type: ["ghost", "poison"],
    quickMoves: ["lick", "shadow-claw"],
    chargeMoves: ["dark-pulse", "shadow-ball", "sludge-bomb"],
    evolveFrom: "gastly",
    evolveTo: "gengar"
  },
  "gengar": {
    id: 94,
    egg: 0,
    candy: 0,
    name: "Gengar",
    type: ["ghost", "poison"],
    quickMoves: ["shadow-claw", "sucker-punch"],
    chargeMoves: ["dark-pulse", "shadow-ball", "sludge-wave"],
    evolveFrom: "haunter"
  },
  "onix": {
    id: 95,
    egg: 10,
    candy: 0,
    name: "Onix",
    type: ["rock", "ground"],
    quickMoves: ["rock-throw", "tackle"],
    chargeMoves: ["iron-head", "rock-slide", "stone-edge"]
  },
  "drowzee": {
    id: 96,
    egg: 5,
    candy: 50,
    name: "Drowzee",
    type: ["psychic"],
    quickMoves: ["confusion", "pound"],
    chargeMoves: ["psybeam", "psychic", "psyshock"],
    evolveTo: "hypno"
  },
  "hypno": {
    id: 97,
    egg: 0,
    candy: 0,
    name: "Hypno",
    type: ["psychic"],
    quickMoves: ["confusion", "zen-headbutt"],
    chargeMoves: ["psychic", "psyshock", "shadow-ball"],
    evolveFrom: "drowzee"
  },
  "krabby": {
    id: 98,
    egg: 5,
    candy: 50,
    name: "Krabby",
    type: ["water"],
    quickMoves: ["bubble", "mud-shot"],
    chargeMoves: ["bubble-beam", "vice-grip", "water-pulse"],
    evolveTo: "kingler"
  },
  "kingler": {
    id: 99,
    egg: 0,
    candy: 0,
    name: "Kingler",
    type: ["water"],
    quickMoves: ["metal-claw", "mud-shot"],
    chargeMoves: ["vice-grip", "water-pulse", "x-scissor"],
    evolveFrom: "krabby"
  },
  "voltorb": {
    id: 100,
    egg: 5,
    candy: 50,
    name: "Voltorb",
    type: ["electric"],
    quickMoves: ["spark", "tackle"],
    chargeMoves: ["discharge", "signal-beam", "thunderbolt"],
    evolveTo: "electrode"
  },
  "electrode": {
    id: 101,
    egg: 0,
    candy: 0,
    name: "Electrode",
    type: ["electric"],
    quickMoves: ["spark", "tackle"],
    chargeMoves: ["discharge", "hyper-beam", "thunderbolt"],
    evolveFrom: "voltorb"
  },
  "exeggcute": {
    id: 102,
    egg: 5,
    candy: 50,
    name: "Exeggcute",
    type: ["grass", "psychic"],
    quickMoves: ["confusion"],
    chargeMoves: ["ancient-power", "psychic", "seed-bomb"],
    evolveTo: "exeggutor"
  },
  "exeggutor": {
    id: 103,
    egg: 0,
    candy: 0,
    name: "Exeggutor",
    type: ["grass", "psychic"],
    quickMoves: ["confusion", "zen-headbutt"],
    chargeMoves: ["psychic", "seed-bomb", "solar-beam"],
    evolveFrom: "exeggcute"
  },
  "cubone": {
    id: 104,
    egg: 5,
    candy: 50,
    name: "Cubone",
    type: ["ground"],
    quickMoves: ["mud-slap", "rock-smash"],
    chargeMoves: ["bone-club", "bulldoze", "dig"],
    evolveTo: "marowak"
  },
  "marowak": {
    id: 105,
    egg: 0,
    candy: 0,
    name: "Marowak",
    type: ["ground"],
    quickMoves: ["mud-slap", "rock-smash"],
    chargeMoves: ["bone-club", "dig", "earthquake"],
    evolveFrom: "cubone"
  },
  "hitmonlee": {
    id: 106,
    egg: 10,
    candy: 0,
    name: "Hitmonlee",
    type: ["fighting"],
    quickMoves: ["low-kick", "rock-smash"],
    chargeMoves: ["low-sweep", "stomp", "stone-edge"]
  },
  "hitmonchan": {
    id: 107,
    egg: 10,
    candy: 0,
    name: "Hitmonchan",
    type: ["fighting"],
    quickMoves: ["bullet-punch", "rock-smash"],
    chargeMoves: ["brick-break", "fire-punch", "ice-punch", "thunder-punch"]
  },
  "lickitung": {
    id: 108,
    egg: 5,
    candy: 0,
    name: "Lickitung",
    type: ["normal"],
    quickMoves: ["lick", "zen-headbutt"],
    chargeMoves: ["hyper-beam", "power-whip", "hyper-beam"]
  },
  "koffing": {
    id: 109,
    egg: 5,
    candy: 50,
    name: "Koffing",
    type: ["poison"],
    quickMoves: ["acid", "tackle"],
    chargeMoves: ["dark-pulse", "sludge", "sludge-bomb"],
    evolveTo: "weezing"
  },
  "weezing": {
    id: 110,
    egg: 0,
    candy: 0,
    name: "Weezing",
    type: ["poison"],
    quickMoves: ["acid", "tackle"],
    chargeMoves: ["dark-pulse", "shadow-ball", "sludge-bomb"],
    evolveFrom: "koffing"
  },
  "rhyhorn": {
    id: 111,
    egg: 5,
    candy: 50,
    name: "Rhyhorn",
    type: ["ground", "rock"],
    quickMoves: ["mud-slap", "rock-smash"],
    chargeMoves: ["bulldoze", "horn-attack", "stomp"],
    evolveTo: "rhydon"
  },
  "rhydon": {
    id: 112,
    egg: 0,
    candy: 0,
    name: "Rhydon",
    type: ["ground", "rock"],
    quickMoves: ["mud-slap", "rock-smash"],
    chargeMoves: ["earthquake", "megahorn", "stone-edge"],
    evolveFrom: "rhyhorn"
  },
  "chansey": {
    id: 113,
    egg: 10,
    candy: 0,
    name: "Chansey",
    type: ["normal"],
    quickMoves: ["pound", "zen-headbutt"],
    chargeMoves: ["dazzling-gleam", "psybeam", "psychic"]
  },
  "tangela": {
    id: 114,
    egg: 5,
    candy: 0,
    name: "Tangela",
    type: ["grass"],
    quickMoves: ["vine-whip"],
    chargeMoves: ["power-whip", "sludge-bomb", "solar-beam"]
  },
  "kangaskhan": {
    id: 115,
    egg: 5,
    candy: 0,
    name: "Kangaskhan",
    type: ["normal"],
    quickMoves: ["low-kick", "mud-slap"],
    chargeMoves: ["brick-break", "earthquake", "stomp"]
  },
  "horsea": {
    id: 116,
    egg: 5,
    candy: 50,
    name: "Horsea",
    type: ["water"],
    quickMoves: ["bubble", "water-gun"],
    chargeMoves: ["bubble-beam", "dragon-pulse", "flash-cannon"],
    evolveTo: "seadra"
  },
  "seadra": {
    id: 117,
    egg: 0,
    candy: 0,
    name: "Seadra",
    type: ["water"],
    quickMoves: ["dragon-breath", "water-gun"],
    chargeMoves: ["blizzard", "dragon-pulse", "hydro-pump"],
    evolveFrom: "horsea"
  },
  "goldeen": {
    id: 118,
    egg: 5,
    candy: 50,
    name: "Goldeen",
    type: ["water"],
    quickMoves: ["mud-shot", "peck"],
    chargeMoves: ["aqua-tail", "horn-attack", "water-pulse"],
    evolveTo: "seaking"
  },
  "seaking": {
    id: 119,
    egg: 0,
    candy: 0,
    name: "Seaking",
    type: ["water"],
    quickMoves: ["quick-attack", "water-gun"],
    chargeMoves: ["drill-run", "icy-wind", "megahorn"],
    evolveFrom: 'goldeen'
  },
  "staryu": {
    id: 120,
    egg: 5,
    candy: 50,
    name: "Staryu",
    type: ["water"],
    quickMoves: ["quick-attack", "water-gun"],
    chargeMoves: ["bubble-beam", "power-gem", "swift"],
    evolveTo: "starmie"
  },
  "starmie": {
    id: 121,
    egg: 0,
    candy: 0,
    name: "Starmie",
    quickMoves: ["quick-attack", "water-gun"],
    chargeMoves: ["hydro-pump", "power-gem", "psybeam"],
    type: ["water", "psychic"],
    evolveFrom: "staryu"
  },
  "mr-mime": {
    id: 122,
    egg: 10,
    candy: 0,
    name: "Mr. Mime",
    type: ["psychic", "fairy"],
    quickMoves: ["confusion", "zen-headbutt"],
    chargeMoves: ["psybeam", "psychic", "shadow-ball"]
  },
  "scyther": {
    id: 123,
    egg: 01,
    candy: 0,
    name: "Scyther",
    type: ["bug", "flying"],
    quickMoves: ["fury-cutter", "steel-wing"],
    chargeMoves: ["bug-buzz", "night-slash", "x-scissor"]
  },
  "jynx": {
    id: 124,
    egg: 10,
    candy: 0,
    name: "Jynx",
    type: ["ice", "psychic"],
    quickMoves: ["frost-breath", "pound"],
    chargeMoves: ["draining-kiss", "psybeam", "psyshock"]
  },
  "electabuzz": {
    id: 125,
    egg: 10,
    candy: 0,
    name: "Electabuzz",
    type: ["electric"],
    quickMoves: ["low-kick", "thunder-shock"],
    chargeMoves: ["thunder", "thunder-punch", "thunderbolt"]
  },
  "magmar": {
    id: 126,
    egg: 10,
    candy: 0,
    name: "Magmar",
    type: ["fire"],
    quickMoves: ["ember", "karate-chop"],
    chargeMoves: ["fire-blast", "fire-punch", "flamethrower"]
  },
  "pinsir": {
    id: 127,
    egg: 10,
    candy: 0,
    name: "Pinsir",
    type: ["bug"],
    quickMoves: ["fury-cutter", "rock-smash"],
    chargeMoves: ["submission", "vice-grip", "x-scissor"]
  },
  "tauros": {
    id: 128,
    egg: 5,
    candy: 0,
    name: "Tauros",
    type: ["normal"],
    quickMoves: ["tackle", "zen-headbutt"],
    chargeMoves: ["earthquake", "horn-attack", "iron-head"]
  },
  "magikarp": {
    id: 129,
    egg: 2,
    candy: 400,
    name: "Magikarp",
    type: ["water"],
    quickMoves: ["splash"],
    chargeMoves: ["struggle"],
    evolveTo: "gyarados"
  },
  "gyarados": {
    id: 130,
    egg: 0,
    candy: 0,
    name: "Gyarados",
    type: ["water", "flying"],
    quickMoves: ["bite", "dragon-breath"],
    chargeMoves: ["dragon-pulse", "hydro-pump", "twister"],
    evolveFrom: "magikarp"
  },
  "lapras": {
    id: 131,
    egg: 10,
    candy: 0,
    name: "Lapras",
    type: ["water", "ice"],
    quickMoves: ["frost-breath", "ice-shard"],
    chargeMoves: ["blizzard", "dragon-pulse", "ice-beam"]
  },
  "ditto": {
    id: 132,
    egg: 0,
    candy: 0,
    name: "Ditto",
    type: ["normal"],
    quickMoves: ["pound"],
    chargeMoves: ["struggle"]
  },
  "eevee": {
    id: 133,
    egg: 10,
    candy: 25,
    name: "Eevee",
    type: ["normal"],
    quickMoves: ["quick-attack", "tackle"],
    chargeMoves: ["body-slam", "dig", "swift"],
    evolveTo: ["vaporeon", "jolteon", "flareon"]
  },
  "vaporeon": {
    id: 134,
    egg: 0,
    candy: 0,
    name: "Vaporeon",
    type: ["water"],
    quickMoves: ["water-gun"],
    chargeMoves: ["aqua-tail", "hydro-pump", "water-pulse"],
    evolveFrom: "eevee"
  },
  "jolteon": {
    id: 135,
    egg: 0,
    candy: 0,
    name: "Jolteon",
    type: ["electric"],
    quickMoves: ["thunder-shock"],
    chargeMoves: ["discharge", "thunder", "thunderbolt"],
    evolveFrom: "eevee"
  },
  "flareon": {
    id: 136,
    egg: 0,
    candy: 0,
    name: "Flareon",
    type: ["fire"],
    quickMoves: ["ember"],
    chargeMoves: ["fire-blast", "flamethrower", "heat-wave"],
    evolveFrom: "eevee"
  },
  "porygon": {
    id: 137,
    egg: 5,
    candy: 0,
    name: "Porygon",
    quickMoves: ["quick-attack", "tackle"],
    chargeMoves: ["discharge", "signal-beam", "psybeam"],
    type: ["normal"]
  },
  "omanyte": {
    id: 138,
    egg: 10,
    candy: 50,
    name: "Omanyte",
    type: ["rock", "water"],
    quickMoves: ["mud-shot", "water-gun"],
    chargeMoves: ["ancient-power", "brine", "rock-tomb"],
    evolveTo: "omastar"
  },
  "omastar": {
    id: 139,
    egg: 0,
    candy: 0,
    name: "Omastar",
    type: ["rock", "water"],
    quickMoves: ["rock-throw", "water-gun"],
    chargeMoves: ["ancient-power", "hydro-pump", "rock-slide"],
    evolveFrom: "omanyte"
  },
  "kabuto": {
    id: 140,
    egg: 10,
    candy: 50,
    name: "Kabuto",
    type: ["rock", "water"],
    quickMoves: ["mud-shot", "scratch"],
    chargeMoves: ["ancient-power", "aqua-jet", "rock-tomb"],
    evolveTo: "kabutops"
  },
  "kabutops": {
    id: 141,
    egg: 0,
    candy: 0,
    name: "Kabutops",
    type: ["rock", "water"],
    quickMoves: ["fury-cutter", "mud-shot"],
    chargeMoves: ["ancient-power", "stone-edge", "water-pulse"],
    evolveFrom: "kabuto"
  },
  "aerodactyl": {
    id: 142,
    egg: 10,
    candy: 0,
    name: "Aerodactyl",
    type: ["rock", "flying"],
    quickMoves: ["bite", "steel-wing"],
    chargeMoves: ["ancient-power", "hyper-beam", "iron-head"]
  },
  "snorlax": {
    id: 143,
    egg: 10,
    candy: 0,
    name: "Snorlax",
    quickMoves: ["lick", "zen-headbutt"],
    chargeMoves: ["body-slam", "earthquake", "hyper-beam"],
    type: ["normal"]
  },
  "articuno": {
    id: 144,
    egg: 0,
    candy: 0,
    name: "Articuno",
    type: ["ice", "flying"],
    quickMoves: ["frost-breath"],
    chargeMoves: ["blizzard", "ice-beam", "icy-wind"]
  },
  "zapdos": {
    id: 145,
    egg: 0,
    candy: 0,
    name: "Zapdos",
    type: ["electric", "flying"],
    quickMoves: ["thunder-shock"],
    chargeMoves: ["discharge", "thunder", "thunderbolt"]
  },
  "moltres": {
    id: 146,
    egg: 0,
    candy: 0,
    name: "Moltres",
    type: ["fire", "flying"],
    quickMoves: ["ember"],
    chargeMoves: ["fire-blast", "flamethrower", "heat-wave"]
  },
  "dratini": {
    id: 147,
    egg: 10,
    candy: 25,
    name: "Dratini",
    type: ["dragon"],
    quickMoves: ["dragon-breath"],
    chargeMoves: ["aqua-tail", "twister", "wrap"],
    evolveTo: "dragonair"
  },
  "dragonair": {
    id: 148,
    egg: 0,
    candy: 100,
    name: "Dragonair",
    type: ["dragon"],
    quickMoves: ["dragon-breath"],
    chargeMoves: ["aqua-tail", "dragon-pulse", "wrap"],
    evolveFrom: "dratini",
    evolveTo: "dragonite"
  },
  "dragonite": {
    id: 149,
    egg: 0,
    candy: 0,
    name: "Dragonite",
    type: ["dragon", "flying"],
    quickMoves: ["dragon-breath", "steel-wing"],
    chargeMoves: ["dragon-claw", "dragon-pulse", "hyper-beam"],
    evolveFrom: "dragonair"
  },
  "mewtwo": {
    id: 150,
    egg: 0,
    candy: 0,
    name: "Mewtwo",
    type: ["psychic"],
    quickMoves: ["confusion", "psycho-cut"],
    chargeMoves: ["hyper-beam", "psychic", "shadow-ball"]
  },
  "mew": {
    id: 151,
    egg: 0,
    candy: 0,
    name: "Mew",
    type: ["psychic"],
    quickMoves: ["pound"],
    chargeMoves: ["dragon-pulse", "earthquake", "fire-blast", "hurricane",
      "hyper-beam", "moonblast", "psychic", "solar-beam"]
  }
};
