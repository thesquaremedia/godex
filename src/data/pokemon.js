/** pokemon.js | list of pokemon data **/

var pokemonData = {
  "bulbasaur": {
    id: 1,
    egg: 2,
    candy: 25,
    name: "Bulbasaur",
    cpm: [1.53, 1.58],
    stats: {
      stamina: 90,
      attack: 126,
      defense: 126
    },
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
    cpm: [1.2, 1.6],
    stats: {
      stamina: 120,
      attack: 156,
      defense: 158
    },
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
    stats: {
      stamina: 160,
      attack: 198,
      defense: 200
    },
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
    cpm: [1.64, 1.7],
    stats: {
      stamina: 78,
      attack: 128,
      defense: 108
    },
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
    cpm: [1.71, 1.79],
    stats: {
      stamina: 116,
      attack: 160,
      defense: 140
    },
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
    stats: {
      stamina: 156,
      attack: 212,
      defense: 182
    },
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
    cpm: [1.58, 2.1],
    stats: {
      stamina: 88,
      attack: 112,
      defense: 142
    },
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
    cpm: [1.4, 1.68],
    stats: {
      stamina: 118,
      attack: 144,
      defense: 176
    },
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
    stats: {
      stamina: 158,
      attack: 186,
      defense: 222
    },
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
    cpm: [1.04, 1.08],
    stats: {
      stamina: 90,
      attack: 62,
      defense: 66
    },
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
    cpm: [3.05, 3.79],
    stats: {
      stamina: 100,
      attack: 56,
      defense: 86
    },
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
    stats: {
      stamina: 120,
      attack: 144,
      defense: 144
    },
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
    cpm: [1.06, 1.13],
    stats: {
      stamina: 80,
      attack: 68,
      defense: 64
    },
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
    cpm: [3.01, 3.42],
    stats: {
      stamina: 90,
      attack: 62,
      defense: 82
    },
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
    stats: {
      stamina: 130,
      attack: 144,
      defense: 130
    },
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
    cpm: [1.71, 1.95],
    stats: {
      stamina: 80,
      attack: 94,
      defense: 90
    },
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
    cpm: [1.73, 1.8],
    stats: {
      stamina: 126,
      attack: 126,
      defense: 122
    },
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
    stats: {
      stamina: 166,
      attack: 170,
      defense: 166
    },
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
    cpm: [2.55, 2.73],
    stats: {
      stamina: 60,
      attack: 92,
      defense: 86
    },
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
    stats: {
      stamina: 110,
      attack: 146,
      defense: 150
    },
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
    cpm: [2.58, 2.81],
    stats: {
      stamina: 80,
      attack: 102,
      defense: 78
    },
    type: ["normal", "flying"],
    quickMoves: ["peck", "quick-attack"],
    chargeMoves: ["aerial-ace", "drill-peck", "twister"],
    evolveTo: "fearow"
  },
  "fearow": {
    id: 22,
    egg: 0,
    candy: 0,
    name: "Fearow",
    stats: {
      stamina: 130,
      attack: 168,
      defense: 146
    },
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
    cpm: [2.21, 2.27],
    stats: {
      stamina: 70,
      attack: 112,
      defense: 112
    },
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
    stats: {
      stamina: 120,
      attack: 166,
      defense: 166
    },
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
    cpm: [2.33, 2.38],
    stats: {
      stamina: 70,
      attack: 124,
      defense: 108
    },
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
    stats: {
      stamina: 120,
      attack: 200,
      defense: 154
    },
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
    cpm: [2.3, 2.76],
    stats: {
      stamina: 100,
      attack: 90,
      defense: 114
    },
    type: ["ground"],
    quickMoves: ["mud-shot", "scratch"],
    chargeMoves: ["dig", "rock-slide", "rock-tomb"],
    evolveTo: "sandslash"
  },
  "sandslash": {
    id: 28,
    egg: 0,
    candy: 0,
    name: "Sandslash",
    stats: {
      stamina: 150,
      attack: 150,
      defense: 172
    },
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
    cpm: [1.62, 1.66],
    stats: {
      stamina: 110,
      attack: 100,
      defense: 104
    },
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
    cpm: [1.83, 2.48],
    stats: {
      stamina: 140,
      attack: 132,
      defense: 136
    },
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
    stats: {
      stamina: 180,
      attack: 184,
      defense: 190
    },
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
    cpm: [1.64, 1.7],
    stats: {
      stamina: 92,
      attack: 110,
      defense: 94
    },
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
    cpm: [1.64, 1.86],
    stats: {
      stamina: 122,
      attack: 142,
      defense: 128
    },
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
    stats: {
      stamina: 162,
      attack: 204,
      defense: 170
    },
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
    cpm: [2.03, 2.14],
    stats: {
      stamina: 140,
      attack: 116,
      defense: 124
    },
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
    stats: {
      stamina: 190,
      attack: 178,
      defense: 178
    },
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
    cpm: [2.74, 2.81],
    stats: {
      stamina: 76,
      attack: 106,
      defense: 118
    },
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
    stats: {
      stamina: 146,
      attack: 176,
      defense: 194
    },
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
    cpm: [2.41, 2.47],
    stats: {
      stamina: 230,
      attack: 98,
      defense: 54
    },
    type: ["normal", "fairy"],
    quickMoves: ["feint-attack", "pound"],
    chargeMoves: ["body-slam", "disarming-voice", "dazzling-gleam"],
    legacyMoves: ["play-rough"],
    evolveTo: "wigglytuff"
  },
  "wigglytuff": {
    id: 40,
    egg: 0,
    candy: 0,
    name: "Wigglytuff",
    stats: {
      stamina: 280,
      attack: 168,
      defense: 108
    },
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
    cpm: [2.6, 3.67],
    stats: {
      stamina: 80,
      attack: 88,
      defense: 90
    },
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
    stats: {
      stamina: 150,
      attack: 164,
      defense: 164
    },
    type: ["poison", "flying"],
    quickMoves: ["bite", "wing-attack"],
    chargeMoves: ["air-cutter", "ominous-wind", "poison-fang"],
    evolveFrom: "zubat"
  },
  "oddish": {
    id: 43,
    egg: 5,
    candy: 25,
    name: "Oddish",
    cpm: [1.48, 1.51],
    stats: {
      stamina: 90,
      attack: 134,
      defense: 130
    },
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
    cpm: [1.48, 1.53],
    stats: {
      stamina: 120,
      attack: 162,
      defense: 158
    },
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
    stats: {
      stamina: 150,
      attack: 202,
      defense: 190
    },
    type: ["poison", "grass"],
    quickMoves: ["acid", "razor-leaf"],
    chargeMoves: ["moonblast", "petal-blizzard", "solar-beam"],
    evolveFrom: "gloom"
  },
  "paras": {
    id: 46,
    egg: 5,
    candy: 50,
    name: "Paras",
    cpm: [1.92, 2.02],
    stats: {
      stamina: 70,
      attack: 122,
      defense: 120
    },
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
    stats: {
      stamina: 120,
      attack: 162,
      defense: 170
    },
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
    cpm: [1.86, 1.9],
    stats: {
      stamina: 120,
      attack: 108,
      defense: 118
    },
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
    stats: {
      stamina: 140,
      attack: 172,
      defense: 154
    },
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
    cpm: [2.68, 2.77],
    stats: {
      stamina: 20,
      attack: 108,
      defense: 86
    },
    type: ["ground"],
    quickMoves: ["mud-slap", "scratch"],
    chargeMoves: ["dig", "mud-bomb", "rock-tomb"],
    legacyMoves: ["mud-shot"],
    evolveTo: "dugtrio"
  },
  "dugtrio": {
    id: 51,
    egg: 0,
    candy: 0,
    name: "Dugtrio",
    stats: {
      stamina: 70,
      attack: 148,
      defense: 140
    },
    type: ["ground"],
    quickMoves: ["mud-slap", "sucker-punch"],
    chargeMoves: ["earthquake", "mud-bomb", "stone-edge"],
    legacyMoves: ["mud-shot"],
    evolveFrom: "diglett"
  },
  "meowth": {
    id: 52,
    egg: 5,
    candy: 50,
    name: "Meowth",
    cpm: [1.98, 2.24],
    stats: {
      stamina: 80,
      attack: 104,
      defense: 94
    },
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
    stats: {
      stamina: 130,
      attack: 156,
      defense: 146
    },
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
    cpm: [2.22, 2.29],
    stats: {
      stamina: 100,
      attack: 132,
      defense: 112
    },
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
    stats: {
      stamina: 160,
      attack: 194,
      defense: 176
    },
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
    cpm: [2.18, 2.28],
    stats: {
      stamina: 80,
      attack: 122,
      defense: 96
    },
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
    stats: {
      stamina: 130,
      attack: 178,
      defense: 150
    },
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
    cpm: [2.31, 2.36],
    stats: {
      stamina: 110,
      attack: 156,
      defense: 110
    },
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
    stats: {
      stamina: 180,
      attack: 230,
      defense: 180
    },
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
    cpm: [1.72, 1.77],
    stats: {
      stamina: 80,
      attack: 108,
      defense: 98
    },
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
    cpm: [1.9, 1.96],
    stats: {
      stamina: 130,
      attack: 132,
      defense: 132
    },
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
    stats: {
      stamina: 180,
      attack: 180,
      defense: 202
    },
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
    stats: {
      stamina: 50,
      attack: 110,
      defense: 76
    },
    type: ["psychic"],
    cpm: [1.36, 1.95],
    quickMoves: ["zen-headbutt"],
    chargeMoves: ["psyshock", "shadow-ball", "signal-beam"],
    evolveTo: "kadabra"
  },
  "kadabra": {
    id: 64,
    egg: 0,
    candy: 100,
    name: "Kadabra",
    cpm: [1.4, 1.65],
    stats: {
      stamina: 80,
      attack: 150,
      defense: 112
    },
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
    stats: {
      stamina: 110,
      attack: 186,
      defense: 152
    },
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
    cpm: [1.62, 1.67],
    stats: {
      stamina: 140,
      attack: 118,
      defense: 96
    },
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
    cpm: [1.48, 1.7],
    stats: {
      stamina: 160,
      attack: 154,
      defense: 144
    },
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
    stats: {
      stamina: 180,
      attack: 198,
      defense: 180
    },
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
    cpm: [1.54, 1.6],
    stats: {
      stamina: 100,
      attack: 158,
      defense: 78
    },
    type: ["grass", "poison"],
    quickMoves: ["acid", "vine-whip"],
    chargeMoves: ["power-whip", "sludge-bomb", "wrap"],
    evolveTo: "weepinbell"
  },
  "weepinbell": {
    id: 70,
    egg: 0,
    candy: 100,
    name: "Weepinbell",
    cpm: [1.47, 1.59],
    stats: {
      stamina: 130,
      attack: 190,
      defense: 110
    },
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
    stats: {
      stamina: 160,
      attack: 222,
      defense: 152
    },
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
    cpm: [2.47, 2.6],
    stats: {
      stamina: 80,
      attack: 106,
      defense: 136
    },
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
    stats: {
      stamina: 160,
      attack: 170,
      defense: 196
    },
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
    cpm: [1.7, 1.76],
    stats: {
      stamina: 80,
      attack: 106,
      defense: 118
    },
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
    cpm: [1.62, 1.72],
    stats: {
      stamina: 110,
      attack: 142,
      defense: 156
    },
    type: ["rock", "ground"],
    quickMoves: ["mud-slap", "rock-throw"],
    chargeMoves: ["dig", "rock-slide", "stone-edge"],
    legacyMoves: ["mud-shot"],
    evolveFrom: "geodude",
    evolveTo: "golem"
  },
  "golem": {
    id: 76,
    egg: 0,
    candy: 0,
    name: "Golem",
    stats: {
      stamina: 160,
      attack: 176,
      defense: 198
    },
    type: ["rock", "ground"],
    quickMoves: ["mud-slap", "rock-throw"],
    chargeMoves: ["ancient-power", "earthquake", "stone-edge"],
    legacyMoves: ["mud-shot"],
    evolveFrom: "graveler"
  },
  "ponyta": {
    id: 77,
    egg: 5,
    candy: 50,
    name: "Ponyta",
    cpm: [1.46, 1.5],
    stats: {
      stamina: 100,
      attack: 168,
      defense: 138
    },
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
    stats: {
      stamina: 130,
      attack: 200,
      defense: 170
    },
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
    cpm: [2.19, 2.21],
    stats: {
      stamina: 180,
      attack: 110,
      defense: 110
    },
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
    stats: {
      stamina: 190,
      attack: 184,
      defense: 198
    },
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
    cpm: [2.16, 2.18],
    stats: {
      stamina: 50,
      attack: 128,
      defense: 138
    },
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
    stats: {
      stamina: 100,
      attack: 186,
      defense: 180
    },
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
    stats: {
      stamina: 104,
      attack: 138,
      defense: 132
    },
    type: ["normal", "flying"],
    quickMoves: ["cut", "fury-cutter"],
    chargeMoves: ["aerial-ace", "air-cutter", "leaf-blade"]
  },
  "doduo": {
    id: 84,
    egg: 5,
    candy: 50,
    name: "Doduo",
    cpm: [2.19, 2.3],
    stats: {
      stamina: 70,
      attack: 126,
      defense: 96
    },
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
    stats: {
      stamina: 120,
      attack: 182,
      defense: 150
    },
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
    cpm: [1.04, 1.96],
    stats: {
      stamina: 130,
      attack: 104,
      defense: 138
    },
    type: ["water"],
    quickMoves: ["ice-shard", "lick"],
    chargeMoves: ["aqua-jet", "aqua-tail", "icy-wind"],
    legacyMoves: ["water-gun"],
    evolveTo: "dewgong"
  },
  "dewgong": {
    id: 87,
    egg: 0,
    candy: 0,
    name: "Dewgong",
    stats: {
      stamina: 180,
      attack: 156,
      defense: 192
    },
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
    cpm: [2.01, 2.44],
    stats: {
      stamina: 160,
      attack: 124,
      defense: 110
    },
    type: ["poison"],
    quickMoves: ["poison-jab", "mud-slap"],
    chargeMoves: ["sludge", "sludge-bomb", "mud-bomb"],
    legacyMoves: ["acid"],
    evolveTo: "muk"
  },
  "muk": {
    id: 89,
    egg: 0,
    candy: 0,
    name: "Muk",
    stats: {
      stamina: 210,
      attack: 180,
      defense: 188
    },
    type: ["poison"],
    quickMoves: ["poison-jab", "lick"],
    chargeMoves: ["dark-pulse", "gunk-shot", "sludge-wave"],
    legacyMoves: ["acid"],
    evolveFrom: "grimer"
  },
  "shellder": {
    id: 90,
    egg: 5,
    candy: 50,
    name: "Shellder",
    cpm: [2.62, 2.65],
    stats: {
      stamina: 60,
      attack: 120,
      defense: 112
    },
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
    stats: {
      stamina: 100,
      attack: 196,
      defense: 196
    },
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
    cpm: [1.75, 1.83],
    stats: {
      stamina: 60,
      attack: 136,
      defense: 82
    },
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
    cpm: [1.56, 1.58],
    stats: {
      stamina: 90,
      attack: 172,
      defense: 118
    },
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
    stats: {
      stamina: 120,
      attack: 204,
      defense: 156
    },
    type: ["ghost", "poison"],
    quickMoves: ["shadow-claw", "sucker-punch"],
    chargeMoves: ["sludge-bomb", "dark-pulse", "shadow-ball"],
    legacyMoves: ["sludge-wave"],
    evolveFrom: "haunter"
  },
  "onix": {
    id: 95,
    egg: 10,
    candy: 0,
    name: "Onix",
    stats: {
      stamina: 70,
      attack: 90,
      defense: 186
    },
    type: ["rock", "ground"],
    quickMoves: ["rock-throw", "tackle"],
    chargeMoves: ["iron-head", "rock-slide", "stone-edge"]
  },
  "drowzee": {
    id: 96,
    egg: 5,
    candy: 50,
    name: "Drowzee",
    cpm: [2.06, 2.09],
    stats: {
      stamina: 120,
      attack: 104,
      defense: 140
    },
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
    stats: {
      stamina: 170,
      attack: 162,
      defense: 196
    },
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
    cpm: [2.32, 2.4],
    stats: {
      stamina: 60,
      attack: 116,
      defense: 110
    },
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
    stats: {
      stamina: 110,
      attack: 178,
      defense: 168
    },
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
    cpm: [2.01, 2.01],
    stats: {
      stamina: 80,
      attack: 102,
      defense: 124
    },
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
    stats: {
      stamina: 120,
      attack: 150,
      defense: 174
    },
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
    cpm: [2.7, 3.18],
    stats: {
      stamina: 120,
      attack: 110,
      defense: 132
    },
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
    stats: {
      stamina: 190,
      attack: 232,
      defense: 164
    },
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
    cpm: [1.65, 1.67],
    stats: {
      stamina: 100,
      attack: 102,
      defense: 150
    },
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
    stats: {
      stamina: 120,
      attack: 140,
      defense: 202
    },
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
    stats: {
      stamina: 100,
      attack: 148,
      defense: 172
    },
    type: ["fighting"],
    quickMoves: ["low-kick", "rock-smash"],
    chargeMoves: ["low-sweep", "brick-break", "stone-edge"],
    legacyMoves: ["stomp"]
  },
  "hitmonchan": {
    id: 107,
    egg: 10,
    candy: 0,
    name: "Hitmonchan",
    stats: {
      stamina: 100,
      attack: 138,
      defense: 204
    },
    type: ["fighting"],
    quickMoves: ["bullet-punch", "rock-smash"],
    chargeMoves: ["brick-break", "fire-punch", "ice-punch", "thunder-punch"]
  },
  "lickitung": {
    id: 108,
    egg: 5,
    candy: 0,
    name: "Lickitung",
    stats: {
      stamina: 180,
      attack: 126,
      defense: 160
    },
    type: ["normal"],
    quickMoves: ["lick", "zen-headbutt"],
    chargeMoves: ["hyper-beam", "power-whip", "hyper-beam"]
  },
  "koffing": {
    id: 109,
    egg: 5,
    candy: 50,
    name: "Koffing",
    cpm: [1.95, 2.03],
    stats: {
      stamina: 80,
      attack: 136,
      defense: 142
    },
    type: ["poison"],
    quickMoves: ["tackle"],
    chargeMoves: ["dark-pulse", "sludge", "sludge-bomb"],
    legacyMoves: ["acid"],
    evolveTo: "weezing"
  },
  "weezing": {
    id: 110,
    egg: 0,
    candy: 0,
    name: "Weezing",
    stats: {
      stamina: 130,
      attack: 190,
      defense: 198
    },
    type: ["poison"],
    quickMoves: ["tackle"],
    chargeMoves: ["dark-pulse", "shadow-ball", "sludge-bomb"],
    legacyMoves: ["acid"],
    evolveFrom: "koffing"
  },
  "rhyhorn": {
    id: 111,
    egg: 5,
    candy: 50,
    name: "Rhyhorn",
    cpm: [1.9, 1.91],
    stats: {
      stamina: 160,
      attack: 110,
      defense: 116
    },
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
    stats: {
      stamina: 210,
      attack: 166,
      defense: 160
    },
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
    stats: {
      stamina: 500,
      attack: 40,
      defense: 60
    },
    type: ["normal"],
    quickMoves: ["pound", "zen-headbutt"],
    chargeMoves: ["dazzling-gleam", "hyper-beam", "psychic"],
    legacyMoves: ["psybeam"]
  },
  "tangela": {
    id: 114,
    egg: 5,
    candy: 0,
    name: "Tangela",
    stats: {
      stamina: 130,
      attack: 164,
      defense: 152
    },
    type: ["grass"],
    quickMoves: ["vine-whip"],
    chargeMoves: ["power-whip", "sludge-bomb", "solar-beam"]
  },
  "kangaskhan": {
    id: 115,
    egg: 5,
    candy: 0,
    name: "Kangaskhan",
    stats: {
      stamina: 210,
      attack: 142,
      defense: 178
    },
    type: ["normal"],
    quickMoves: ["low-kick", "mud-slap"],
    chargeMoves: ["brick-break", "earthquake", "stomp"]
  },
  "horsea": {
    id: 116,
    egg: 5,
    candy: 50,
    name: "Horsea",
    cpm: [2.19, 2.23],
    stats: {
      stamina: 60,
      attack: 122,
      defense: 100
    },
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
    stats: {
      stamina: 110,
      attack: 176,
      defense: 150
    },
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
    cpm: [2.14, 2.24],
    stats: {
      stamina: 90,
      attack: 112,
      defense: 126
    },
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
    stats: {
      stamina: 160,
      attack: 172,
      defense: 160
    },
    type: ["water"],
    quickMoves: ["peck", "poison-jab"],
    chargeMoves: ["drill-run", "icy-wind", "megahorn"],
    evolveFrom: 'goldeen'
  },
  "staryu": {
    id: 120,
    egg: 5,
    candy: 50,
    name: "Staryu",
    cpm: [2.34, 2.41],
    stats: {
      stamina: 60,
      attack: 130,
      defense: 128
    },
    type: ["water"],
    quickMoves: ["tackle", "water-gun"],
    chargeMoves: ["bubble-beam", "power-gem", "swift"],
    legacyMoves: ["quick-attack"],
    evolveTo: "starmie"
  },
  "starmie": {
    id: 121,
    egg: 0,
    candy: 0,
    name: "Starmie",
    quickMoves: ["tackle", "water-gun"],
    chargeMoves: ["hydro-pump", "power-gem", "psychic"],
    stats: {
      stamina: 120,
      attack: 194,
      defense: 192
    },
    type: ["water", "psychic"],
    evolveFrom: "staryu"
  },
  "mr-mime": {
    id: 122,
    egg: 10,
    candy: 0,
    name: "Mr. Mime",
    stats: {
      stamina: 80,
      attack: 154,
      defense: 196
    },
    type: ["psychic", "fairy"],
    quickMoves: ["confusion", "zen-headbutt"],
    chargeMoves: ["psybeam", "psychic", "shadow-ball"]
  },
  "scyther": {
    id: 123,
    egg: 01,
    candy: 0,
    name: "Scyther",
    stats: {
      stamina: 140,
      attack: 176,
      defense: 180
    },
    type: ["bug", "flying"],
    quickMoves: ["fury-cutter", "steel-wing"],
    chargeMoves: ["bug-buzz", "night-slash", "x-scissor"]
  },
  "jynx": {
    id: 124,
    egg: 10,
    candy: 0,
    name: "Jynx",
    stats: {
      stamina: 130,
      attack: 172,
      defense: 134
    },
    type: ["ice", "psychic"],
    quickMoves: ["frost-breath", "pound"],
    chargeMoves: ["draining-kiss", "psybeam", "psyshock"]
  },
  "electabuzz": {
    id: 125,
    egg: 10,
    candy: 0,
    name: "Electabuzz",
    stats: {
      stamina: 130,
      attack: 198,
      defense: 160
    },
    type: ["electric"],
    quickMoves: ["low-kick", "thunder-shock"],
    chargeMoves: ["thunder", "thunder-punch", "thunderbolt"]
  },
  "magmar": {
    id: 126,
    egg: 10,
    candy: 0,
    name: "Magmar",
    stats: {
      stamina: 130,
      attack: 214,
      defense: 158
    },
    type: ["fire"],
    quickMoves: ["ember", "karate-chop"],
    chargeMoves: ["fire-blast", "fire-punch", "flamethrower"]
  },
  "pinsir": {
    id: 127,
    egg: 10,
    candy: 0,
    name: "Pinsir",
    stats: {
      stamina: 130,
      attack: 184,
      defense: 186
    },
    type: ["bug"],
    quickMoves: ["fury-cutter", "rock-smash"],
    chargeMoves: ["submission", "vice-grip", "x-scissor"]
  },
  "tauros": {
    id: 128,
    egg: 5,
    candy: 0,
    name: "Tauros",
    stats: {
      stamina: 150,
      attack: 148,
      defense: 184
    },
    type: ["normal"],
    quickMoves: ["tackle", "zen-headbutt"],
    chargeMoves: ["earthquake", "horn-attack", "iron-head"]
  },
  "magikarp": {
    id: 129,
    egg: 2,
    candy: 400,
    name: "Magikarp",
    cpm: [10.1, 11.8],
    stats: {
      stamina: 40,
      attack: 42,
      defense: 84
    },
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
    stats: {
      stamina: 190,
      attack: 192,
      defense: 196
    },
    type: ["water", "flying"],
    quickMoves: ["bite"],
    chargeMoves: ["dragon-pulse", "hydro-pump", "twister"],
    legacyMoves: ["dragon-breath"],
    evolveFrom: "magikarp"
  },
  "lapras": {
    id: 131,
    egg: 10,
    candy: 0,
    name: "Lapras",
    stats: {
      stamina: 260,
      attack: 186,
      defense: 190
    },
    type: ["water", "ice"],
    quickMoves: ["frost-breath", "ice-shard"],
    chargeMoves: ["blizzard", "dragon-pulse", "ice-beam"]
  },
  "ditto": {
    id: 132,
    egg: 0,
    candy: 0,
    name: "Ditto",
    stats: {
      stamina: 96,
      attack: 110,
      defense: 110
    },
    type: ["normal"],
    quickMoves: ["pound"],
    chargeMoves: ["struggle"]
  },
  "eevee": {
    id: 133,
    egg: 10,
    candy: 25,
    name: "Eevee",
    cpm: [2.02, 2.64],
    stats: {
      stamina: 110,
      attack: 114,
      defense: 128
    },
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
    cpm: [2.63, 2.73],
    stats: {
      stamina: 260,
      attack: 186,
      defense: 168
    },
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
    cpm: [2, 2.1],
    stats: {
      stamina: 130,
      attack: 192,
      defense: 174
    },
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
    cpm: [2.48, 2.48],
    stats: {
      stamina: 130,
      attack: 238,
      defense: 178
    },
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
    quickMoves: ["zen-headbutt", "tackle"],
    chargeMoves: ["discharge", "signal-beam", "psybeam"],
    legacyMoves: ["quick-attack"],
    stats: {
      stamina: 130,
      attack: 156,
      defense: 158
    },
    type: ["normal"]
  },
  "omanyte": {
    id: 138,
    egg: 10,
    candy: 50,
    name: "Omanyte",
    cpm: [1.99, 2.12],
    stats: {
      stamina: 70,
      attack: 132,
      defense: 160
    },
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
    stats: {
      stamina: 140,
      attack: 180,
      defense: 202
    },
    type: ["rock", "water"],
    quickMoves: ["mud-shot", "water-gun"],
    chargeMoves: ["ancient-power", "hydro-pump", "rock-slide"],
    legacyMoves: ["rock-throw"],
    evolveFrom: "omanyte"
  },
  "kabuto": {
    id: 140,
    egg: 10,
    candy: 50,
    name: "Kabuto",
    cpm: [1.97, 2.37],
    stats: {
      stamina: 60,
      attack: 148,
      defense: 142
    },
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
    stats: {
      stamina: 120,
      attack: 190,
      defense: 190
    },
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
    stats: {
      stamina: 160,
      attack: 182,
      defense: 162
    },
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
    stats: {
      stamina: 320,
      attack: 180,
      defense: 180
    },
    type: ["normal"]
  },
  "articuno": {
    id: 144,
    egg: 0,
    candy: 0,
    name: "Articuno",
    stats: {
      stamina: 180,
      attack: 198,
      defense: 242
    },
    type: ["ice", "flying"],
    quickMoves: ["frost-breath"],
    chargeMoves: ["blizzard", "ice-beam", "icy-wind"]
  },
  "zapdos": {
    id: 145,
    egg: 0,
    candy: 0,
    name: "Zapdos",
    stats: {
      stamina: 180,
      attack: 232,
      defense: 194
    },
    type: ["electric", "flying"],
    quickMoves: ["thunder-shock"],
    chargeMoves: ["discharge", "thunder", "thunderbolt"]
  },
  "moltres": {
    id: 146,
    egg: 0,
    candy: 0,
    name: "Moltres",
    stats: {
      stamina: 180,
      attack: 242,
      defense: 194
    },
    type: ["fire", "flying"],
    quickMoves: ["ember"],
    chargeMoves: ["fire-blast", "flamethrower", "heat-wave"]
  },
  "dratini": {
    id: 147,
    egg: 10,
    candy: 25,
    name: "Dratini",
    cpm: [1.79, 1.85],
    stats: {
      stamina: 82,
      attack: 128,
      defense: 110
    },
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
    cpm: [2.03, 2.08],
    stats: {
      stamina: 122,
      attack: 170,
      defense: 152
    },
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
    stats: {
      stamina: 182,
      attack: 250,
      defense: 212
    },
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
    stats: {
      stamina: 212,
      attack: 284,
      defense: 202
    },
    type: ["psychic"],
    quickMoves: ["confusion", "psycho-cut"],
    chargeMoves: ["hyper-beam", "psychic", "shadow-ball"]
  },
  "mew": {
    id: 151,
    egg: 0,
    candy: 0,
    name: "Mew",
    stats: {
      stamina: 200,
      attack: 220,
      defense: 220
    },
    type: ["psychic"],
    quickMoves: ["pound"],
    chargeMoves: ["dragon-pulse", "earthquake", "fire-blast", "blizzard",
      "hyper-beam", "psychic", "solar-beam"],
    legacyMoves: ["moonblast","hurricane"]
  }
};
