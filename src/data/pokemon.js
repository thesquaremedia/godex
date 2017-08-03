/** pokemon.js | list of pokemon data **/
var pokemonData = {
	"bulbasaur": {
		id: 1,
		egg: 2,
		buddy: 3,
		candy: 25,
		name: "Bulbasaur",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/001.gif",
		cpm: [1.53, 1.58],
		stats: {
			stamina: 90,
			attack: 118,
			defense: 118
		},
		type: ["grass", "poison"],
		weaknesses: [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		],
		quickMoves: ["tackle", "vine-whip"],
		chargeMoves: ["power-whip", "seed-bomb", "sludge-bomb"],
		evolveTo: "ivysaur",
		fleeRate: 0.1
	},
	"ivysaur": {
		id: 2,
		egg: 0,
		buddy: 3,
		candy: 100,
		name: "Ivysaur",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/002.gif",
		cpm: [1.2, 1.6],
		stats: {
			stamina: 120,
			attack: 151,
			defense: 151
		},
		type: ["grass", "poison"],
		weaknesses: [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		],
		quickMoves: ["vine-whip", "razor-leaf"],
		chargeMoves: ["power-whip", "sludge-bomb", "solar-beam"],
		evolveFrom: "bulbasaur",
		evolveTo: "venusaur",
		fleeRate: 0.07
	},
	"venusaur": {
		id: 3,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Venusaur",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/003.gif",
		stats: {
			stamina: 160,
			attack: 198,
			defense: 198
		},
		type: ["grass", "poison"],
		weaknesses: [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		],
		quickMoves: ["vine-whip", "razor-leaf"],
		chargeMoves: ["petal-blizzard", "sludge-bomb", "solar-beam"],
		evolveFrom: "ivysaur",
		fleeRate: 0.05
	},
	"charmander": {
		id: 4,
		egg: 2,
		buddy: 3,
		candy: 25,
		name: "Charmander",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/004.gif",
		cpm: [1.64, 1.7],
		stats: {
			stamina: 78,
			attack: 116,
			defense: 96
		},
		type: ["fire"],
		weaknesses: [
			"Ground",
			"Rock",
			"Water"
		],
		quickMoves: ["ember", "scratch"],
		chargeMoves: ["flame-burst", "flame-charge", "flamethrower"],
		evolveTo: "charmeleon",
		fleeRate: 0.1
	},
	"charmeleon": {
		id: 5,
		egg: 0,
		buddy: 3,
		candy: 100,
		name: "Charmeleon",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/005.gif",
		cpm: [1.71, 1.79],
		stats: {
			stamina: 116,
			attack: 158,
			defense: 129
		},
		weaknesses: [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		],
		quickMoves: ["ember", "scratch"],
		chargeMoves: ["fire-punch", "flame-burst", "flamethrower"],
		evolveFrom: "charmander",
		evolveTo: "charizard",
		fleeRate: 0.07
	},
	"charizard": {
		id: 6,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Charizard",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/006.gif",
		stats: {
			stamina: 156,
			attack: 223,
			defense: 176
		},
		type: ["fire", "flying"],
		weaknesses: [
			"Water",
			"Electric",
			"Rock"
		],
		quickMoves: ["ember", "wing-attack"],
		chargeMoves: ["dragon-claw", "fire-blast", "flamethrower"],
		evolveFrom: "charmeleon",
		fleeRate: 0.05
	},
	"squirtle": {
		id: 7,
		egg: 2,
		buddy: 3,
		candy: 25,
		name: "Squirtle",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/007.gif",
		cpm: [1.58, 2.1],
		stats: {
			stamina: 88,
			attack: 94,
			defense: 122
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["bubble", "tackle"],
		chargeMoves: ["aqua-jet", "aqua-tail", "water-pulse"],
		evolveTo: "wartortle",
		fleeRate: 0.1
	},
	"wartortle": {
		id: 8,
		egg: 0,
		buddy: 3,
		candy: 100,
		name: "Wartortle",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/008.gif",
		cpm: [1.4, 1.68],
		stats: {
			stamina: 118,
			attack: 126,
			defense: 155
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["bite", "water-gun"],
		chargeMoves: ["aqua-jet", "hydro-pump", "ice-beam"],
		evolveFrom: "squirtle",
		evolveTo: "blastoise",
		fleeRate: 0.07
	},
	"blastoise": {
		id: 9,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Blastoise",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/009.gif",
		stats: {
			stamina: 158,
			attack: 171,
			defense: 210
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["bite", "water-gun"],
		chargeMoves: ["flash-cannon", "hydro-pump", "ice-beam"],
		evolveFrom: "wartortle",
		fleeRate: 0.05
	},
	"caterpie": {
		id: 10,
		egg: 2,
		buddy: 1,
		candy: 12,
		name: "Caterpie",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/010.gif",
		cpm: [1.04, 1.08],
		stats: {
			stamina: 90,
			attack: 55,
			defense: 62
		},
		type: ["bug"],
		weaknesses: [
			"Fire",
			"Flying",
			"Rock"
		],
		quickMoves: ["bug-bite", "tackle"],
		chargeMoves: ["struggle"],
		evolveTo: "metapod",
		fleeRate: 0.2
	},
	"metapod": {
		id: 11,
		egg: 0,
		buddy: 1,
		candy: 50,
		name: "Metapod",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/011.gif",
		cpm: [3.05, 3.79],
		stats: {
			stamina: 100,
			attack: 45,
			defense: 94
		},
		type: ["bug"],
		weaknesses: [
			"Fire",
			"Flying",
			"Rock"
		],
		quickMoves: ["bug-bite", "tackle"],
		chargeMoves: ["struggle"],
		evolveFrom: "caterpie",
		evolveTo: "butterfree",
		fleeRate: 0.09
	},
	"butterfree": {
		id: 12,
		egg: 0,
		buddy: 1,
		candy: 0,
		name: "Butterfree",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/012.gif",
		stats: {
			stamina: 120,
			attack: 167,
			defense: 151
		},
		type: ["bug", "flying"],
		weaknesses: [
			"Fire",
			"Electric",
			"Ice",
			"Flying",
			"Rock"
		],
		quickMoves: ["bug-bite", "confusion"],
		chargeMoves: ["bug-buzz", "signal-beam", "psychic"],
		evolveFrom: "metapod",
		fleeRate: 0.06
	},
	"weedle": {
		id: 13,
		egg: 2,
		buddy: 1,
		candy: 12,
		name: "Weedle",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/013.gif",
		cpm: [1.06, 1.13],
		stats: {
			stamina: 80,
			attack: 63,
			defense: 55
		},
		type: ["bug", "poison"],
		weaknesses: [
			"Fire",
			"Flying",
			"Psychic",
			"Rock"
		],
		quickMoves: ["bug-bite", "poison-sting"],
		chargeMoves: ["struggle"],
		evolveTo: "kakuna",
		fleeRate: 0.2
	},
	"kakuna": {
		id: 14,
		egg: 0,
		buddy: 1,
		candy: 50,
		name: "Kakuna",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/014.gif",
		cpm: [3.01, 3.42],
		stats: {
			stamina: 90,
			attack: 46,
			defense: 86
		},
		type: ["bug", "poison"],
		weaknesses: [
			"Fire",
			"Flying",
			"Psychic",
			"Rock"
		],
		quickMoves: ["bug-bite", "poison-sting"],
		chargeMoves: ["struggle"],
		evolveFrom: "weedle",
		evolveTo: "beedrill",
		fleeRate: 0.09
	},
	"beedrill": {
		id: 15,
		egg: 0,
		buddy: 1,
		candy: 0,
		name: "Beedrill",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/015.gif",
		stats: {
			stamina: 130,
			attack: 169,
			defense: 150
		},
		type: ["bug", "poison"],
		weaknesses: [
			"Fire",
			"Flying",
			"Psychic",
			"Rock"
		],
		quickMoves: ["bug-bite", "poison-jab"],
		chargeMoves: ["aerial-ace", "sludge-bomb", "x-scissor"],
		evolveFrom: "kakuna",
		fleeRate: 0.06
	},
	"pidgey": {
		id: 16,
		egg: 2,
		buddy: 1,
		candy: 12,
		name: "Pidgey",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/016.gif",
		cpm: [1.71, 1.95],
		stats: {
			stamina: 80,
			attack: 85,
			defense: 76
		},
		type: ["normal", "flying"],
		weaknesses: [
			"Electric",
			"Rock"
		],
		quickMoves: ["tackle", "quick-attack"],
		chargeMoves: ["aerial-ace", "air-cutter", "twister"],
		evolveTo: "pidgeotto",
		fleeRate: 0.2
	},
	"pidgeotto": {
		id: 17,
		egg: 0,
		buddy: 1,
		candy: 50,
		name: "Pidgeotto",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/017.gif",
		cpm: [1.73, 1.8],
		stats: {
			stamina: 126,
			attack: 117,
			defense: 108
		},
		type: ["normal", "flying"],
		weaknesses: [
			"Electric",
			"Rock"
		],
		quickMoves: ["steel-wing", "wing-attack"],
		chargeMoves: ["aerial-ace", "air-cutter", "twister"],
		evolveFrom: "pidgeot",
		evolveTo: "pidgeot",
		fleeRate: 0.09
	},
	"pidgeot": {
		id: 18,
		egg: 0,
		buddy: 1,
		candy: 0,
		name: "Pidgeot",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/018.gif",
		stats: {
			stamina: 166,
			attack: 166,
			defense: 157
		},
		type: ["normal", "flying"],
		weaknesses: [
			"Electric",
			"Rock"
		],
		quickMoves: ["steel-wing", "wing-attack"],
		chargeMoves: ["aerial-ace", "air-cutter", "hurricane"],
		evolveFrom: "pidgeotto",
		fleeRate: 0.06
	},
	"rattata": {
		id: 19,
		egg: 2,
		buddy: 1,
		candy: 25,
		name: "Rattata",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/019.gif",
		cpm: [2.55, 2.73],
		stats: {
			stamina: 60,
			attack: 103,
			defense: 70
		},
		type: ["normal"],
		weaknesses: [
			"Fighting"
		],
		quickMoves: ["tackle", "quick-attack"],
		chargeMoves: ["body-slam", "dig", "hyper-fang"],
		evolveTo: "raticate",
		fleeRate: 0.2
	},
	"raticate": {
		id: 20,
		egg: 0,
		buddy: 1,
		candy: 0,
		name: "Raticate",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/020.gif",
		stats: {
			stamina: 110,
			attack: 161,
			defense: 144
		},
		type: ["normal"],
		weaknesses: [
			"Fighting"
		],
		quickMoves: ["bite", "quick-attack"],
		chargeMoves: ["dig", "hyper-beam", "hyper-fang"],
		evolveFrom: "rattata",
		fleeRate: 0.07
	},
	"spearow": {
		id: 21,
		egg: 2,
		buddy: 1,
		candy: 50,
		name: "Spearow",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/021.gif",
		cpm: [2.58, 2.81],
		stats: {
			stamina: 80,
			attack: 112,
			defense: 61
		},
		type: ["normal", "flying"],
		weaknesses: [
			"Electric",
			"Rock"
		],
		quickMoves: ["peck", "quick-attack"],
		chargeMoves: ["aerial-ace", "drill-peck", "twister"],
		evolveTo: "fearow",
		fleeRate: 0.15
	},
	"fearow": {
		id: 22,
		egg: 0,
		buddy: 1,
		candy: 0,
		name: "Fearow",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/022.gif",
		stats: {
			stamina: 130,
			attack: 182,
			defense: 135
		},
		type: ["normal", "flying"],
		weaknesses: [
			"Electric",
			"Rock"
		],
		quickMoves: ["peck", "steel-wing"],
		chargeMoves: ["aerial-ace", "drill-run", "twister"],
		evolveFrom: "spearow",
		fleeRate: 0.07
	},
	"ekans": {
		id: 23,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Ekans",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/023.gif",
		cpm: [2.21, 2.27],
		stats: {
			stamina: 70,
			attack: 110,
			defense: 102
		},
		type: ["poison"],
		weaknesses: [
			"Ground",
			"Psychic"
		],
		quickMoves: ["acid", "poison-sting"],
		chargeMoves: ["gunk-shot", "sludge-bomb", "wrap"],
		evolveTo: "arbok",
		fleeRate: 0.15
	},
	"arbok": {
		id: 24,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Arbok",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/024.gif",
		stats: {
			stamina: 120,
			attack: 167,
			defense: 158
		},
		type: ["poison"],
		weaknesses: [
			"Ground",
			"Psychic"
		],
		quickMoves: ["acid", "bite"],
		chargeMoves: ["dark-pulse", "gunk-shot", "sludge-wave"],
		evolveFrom: "ekans",
		fleeRate: 0.07
	},
	"pikachu": {
		id: 25,
		egg: 2,
		buddy: 1,
		candy: 50,
		name: "Pikachu",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/025.gif",
		cpm: [2.33, 2.38],
		stats: {
			stamina: 70,
			attack: 112,
			defense: 101
		},
		type: ["electric"],
		weaknesses: [
			"Ground"
		],
		quickMoves: ["thunder-shock", "quick-attack"],
		chargeMoves: ["discharge", "thunder", "thunderbolt"],
		evolveFrom: "pichu",
		evolveTo: "raichu",
		fleeRate: 0.1
	},
	"raichu": {
		id: 26,
		egg: 0,
		buddy: 1,
		candy: 0,
		name: "Raichu",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/026.gif",
		stats: {
			stamina: 120,
			attack: 193,
			defense: 165
		},
		type: ["electric"],
		weaknesses: [
			"Ground"
		],
		quickMoves: ["spark", "thunder-shock"],
		chargeMoves: ["brick-break", "thunder", "thunder-punch"],
		evolveFrom: "pikachu",
		fleeRate: 0.06
	},
	"sandshrew": {
		id: 27,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Sandshrew",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/027.gif",
		cpm: [2.3, 2.76],
		stats: {
			stamina: 100,
			attack: 126,
			defense: 145
		},
		type: ["ground"],
		weaknesses: [
			"Water",
			"Grass",
			"Ice"
		],
		quickMoves: ["mud-shot", "scratch"],
		chargeMoves: ["dig", "rock-slide", "rock-tomb"],
		evolveTo: "sandslash",
		fleeRate: 0.1
	},
	"sandslash": {
		id: 28,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Sandslash",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/028.gif",
		stats: {
			stamina: 150,
			attack: 182,
			defense: 202
		},
		type: ["ground"],
		weaknesses: [
			"Water",
			"Grass",
			"Ice"
		],
		quickMoves: ["metal-claw", "mud-shot"],
		chargeMoves: ["bulldoze", "earthquake", "rock-tomb"],
		evolveFrom: "sandshrew",
		fleeRate: 0.06
	},
	"nidoran-f": {
		id: 29,
		egg: 5,
		buddy: 3,
		candy: 25,
		name: "Nidoran ♀",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/029.gif",
		cpm: [1.62, 1.66],
		stats: {
			stamina: 110,
			attack: 86,
			defense: 94
		},
		type: ["poison"],
		weaknesses: [
			"Ground",
			"Psychic"
		],
		quickMoves: ["bite", "poison-sting"],
		chargeMoves: ["body-slam", "poison-fang", "sludge-bomb"],
		evolveTo: "nidorina",
		fleeRate: 0.15
	},
	"nidorina": {
		id: 30,
		egg: 0,
		buddy: 3,
		candy: 100,
		name: "Nidorina",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/030.gif",
		cpm: [1.83, 2.48],
		stats: {
			stamina: 140,
			attack: 117,
			defense: 126
		},
		type: ["poison"],
		weaknesses: [
			"Ground",
			"Psychic"
		],
		quickMoves: ["bite", "poison-sting"],
		chargeMoves: ["dig", "poison-fang", "sludge-bomb"],
		evolveFrom: "nidoran-f",
		evolveTo: "nidoqueen",
		fleeRate: 0.07
	},
	"nidoqueen": {
		id: 31,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Nidoqueen",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/031.gif",
		stats: {
			stamina: 180,
			attack: 180,
			defense: 174
		},
		type: ["poison", "ground"],
		weaknesses: [
			"Water",
			"Ice",
			"Ground",
			"Psychic"
		],
		quickMoves: ["bite", "poison-jab"],
		chargeMoves: ["earthquake", "sludge-wave", "stone-edge"],
		evolveFrom: "nidorina",
		fleeRate: 0.05
	},
	"nidoran-m": {
		id: 32,
		egg: 5,
		buddy: 3,
		candy: 25,
		name: "Nidoran ♂",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/032.gif",
		cpm: [1.64, 1.7],
		stats: {
			stamina: 92,
			attack: 105,
			defense: 76
		},
		type: ["poison"],
		weaknesses: [
			"Ground",
			"Psychic"
		],
		quickMoves: ["peck", "poison-sting"],
		chargeMoves: ["body-slam", "horn-attack", "sludge-bomb"],
		evolveTo: "nidorino",
		fleeRate: 0.15
	},
	"nidorino": {
		id: 33,
		egg: 0,
		buddy: 3,
		candy: 100,
		name: "Nidorino",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/033.gif",
		cpm: [1.64, 1.86],
		stats: {
			stamina: 122,
			attack: 137,
			defense: 112
		},
		type: ["poison"],
		weaknesses: [
			"Ground",
			"Psychic"
		],
		quickMoves: ["bite", "poison-jab"],
		chargeMoves: ["dig", "horn-attack", "sludge-bomb"],
		evolveFrom: "nidoran-m",
		evolveTo: "nidoking",
		fleeRate: 0.07
	},
	"nidoking": {
		id: 34,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Nidoking",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/034.gif",
		stats: {
			stamina: 162,
			attack: 204,
			defense: 157
		},
		type: ["poison", "ground"],
		weaknesses: [
			"Water",
			"Ice",
			"Ground",
			"Psychic"
		],
		quickMoves: ["fury-cutter", "poison-jab"],
		chargeMoves: ["earthquake", "megahorn", "sludge-wave"],
		evolveFrom: "nidorino",
		fleeRate: 0.05
	},
	"clefairy": {
		id: 35,
		egg: 2,
		buddy: 1,
		candy: 50,
		name: "Clefairy",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/035.gif",
		cpm: [2.03, 2.14],
		stats: {
			stamina: 140,
			attack: 107,
			defense: 116
		},
		type: ["fairy"],
		weaknesses: [
			"Poison", "Steel",
		],
		quickMoves: ["pound", "zen-headbutt"],
		chargeMoves: ["body-slam", "disarming-voice", "moonblast"],
		evolveFrom: "cleffa",
		evolveTo: "clefable",
		fleeRate: 0.1
	},
	"clefable": {
		id: 36,
		egg: 0,
		buddy: 1,
		candy: 0,
		name: "Clefable",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/036.gif",
		stats: {
			stamina: 190,
			attack: 178,
			defense: 171
		},
		type: ["fairy"],
		weaknesses: [
			"Poison", "Steel",
		],
		quickMoves: ["pound", "zen-headbutt"],
		chargeMoves: ["dazzling-gleam", "moonblast", "psychic"],
		evolveFrom: "clefairy",
		fleeRate: 0.06
	},
	"vulpix": {
		id: 37,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Vulpix",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/037.gif",
		cpm: [2.74, 2.81],
		stats: {
			stamina: 76,
			attack: 96,
			defense: 122
		},
		type: ["fire"],
		weaknesses: [
			"Ground",
			"Rock",
			"Water"
		],
		quickMoves: ["ember", "quick-attack"],
		chargeMoves: ["body-slam", "flame-charge", "flamethrower"],
		evolveTo: "ninetales",
		fleeRate: 0.1
	},
	"ninetales": {
		id: 38,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Ninetales",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/038.gif",
		stats: {
			stamina: 146,
			attack: 169,
			defense: 204
		},
		type: ["fire"],
		weaknesses: [
			"Ground",
			"Rock",
			"Water"
		],
		quickMoves: ["ember", "feint-attack"],
		chargeMoves: ["fire-blast", "flamethrower", "heat-wave"],
		evolveFrom: "vulpix",
		fleeRate: 0.06
	},
	"jigglypuff": {
		id: 39,
		egg: 2,
		buddy: 1,
		candy: 50,
		name: "Jigglypuff",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/039.gif",
		cpm: [2.41, 2.47],
		stats: {
			stamina: 230,
			attack: 80,
			defense: 44
		},
		type: ["normal", "fairy"],
		weaknesses: [
			"Poison",
			"Steel"
		],
		quickMoves: ["feint-attack", "pound"],
		chargeMoves: ["body-slam", "disarming-voice", "dazzling-gleam"],
		legacyMoves: ["play-rough"],
		evovleFrom: "igglybuff",
		evolveTo: "wigglytuff",
		fleeRate: 0.1
	},
	"wigglytuff": {
		id: 40,
		egg: 0,
		buddy: 1,
		candy: 0,
		name: "Wigglytuff",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/040.gif",
		stats: {
			stamina: 280,
			attack: 156,
			defense: 93
		},
		type: ["normal", "fairy"],
		weaknesses: [
			"Poison",
			"Steel"
		],
		quickMoves: ["feint-attack", "pound"],
		chargeMoves: ["dazzling-gleam", "hyper-beam", "play-rough"],
		evolveFrom: "jigglypuff",
		fleeRate: 0.06
	},
	"zubat": {
		id: 41,
		egg: 2,
		buddy: 1,
		candy: 50,
		name: "Zubat",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/041.gif",
		cpm: [2.6, 3.67],
		stats: {
			stamina: 80,
			attack: 83,
			defense: 76
		},
		type: ["poison", "flying"],
		weaknesses: [
			"Electric",
			"Ice",
			"Psychic",
			"Rock"
		],
		quickMoves: ["bite", "quick-attack"],
		chargeMoves: ["air-cutter", "poison-fang", "sludge-bomb"],
		evolveTo: "golbat",
		fleeRate: 0.2
	},
	"golbat": {
		id: 42,
		egg: 0,
		buddy: 1,
		candy: 0,
		name: "Golbat",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/042.gif",
		stats: {
			stamina: 150,
			attack: 161,
			defense: 153
		},
		type: ["poison", "flying"],
		weaknesses: [
			"Electric",
			"Ice",
			"Psychic",
			"Rock"
		],
		quickMoves: ["bite", "wing-attack"],
		chargeMoves: ["air-cutter", "ominous-wind", "poison-fang"],
		evolveFrom: "zubat",
		fleeRate: 0.07
	},
	"oddish": {
		id: 43,
		egg: 5,
		buddy: 3,
		candy: 25,
		name: "Oddish",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/043.gif",
		cpm: [1.48, 1.51],
		stats: {
			stamina: 90,
			attack: 131,
			defense: 116
		},
		type: ["poison", "grass"],
		weaknesses: [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		],
		quickMoves: ["acid", "razor-leaf"],
		chargeMoves: ["moonblast", "seed-bomb", "sludge-bomb"],
		evolveTo: "gloom",
		fleeRate: 0.15
	},
	"gloom": {
		id: 44,
		egg: 0,
		buddy: 3,
		candy: 100,
		name: "Gloom",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/044.gif",
		cpm: [1.48, 1.53],
		stats: {
			stamina: 120,
			attack: 153,
			defense: 139
		},
		type: ["poison", "grass"],
		weaknesses: [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		],
		quickMoves: ["acid", "razor-leaf"],
		chargeMoves: ["moonblast", "petal-blizzard", "sludge-bomb"],
		evolveFrom: "oddish",
		evolveTo: "vileplume",
		fleeRate: 0.07
	},
	"vileplume": {
		id: 45,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Vileplume",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/045.gif",
		stats: {
			stamina: 150,
			attack: 202,
			defense: 170
		},
		type: ["poison", "grass"],
		weaknesses: [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		],
		quickMoves: ["acid", "razor-leaf"],
		chargeMoves: ["moonblast", "petal-blizzard", "solar-beam"],
		evolveFrom: "gloom",
		fleeRate: 0.05
	},
	"paras": {
		id: 46,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Paras",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/046.gif",
		cpm: [1.92, 2.02],
		stats: {
			stamina: 70,
			attack: 121,
			defense: 99
		},
		type: ["bug", "grass"],
		weaknesses: [
			"Fire",
			"Ice",
			"Poison",
			"Flying",
			"Bug",
			"Rock"
		],
		quickMoves: ["bug-bite", "scratch"],
		chargeMoves: ["cross-poison", "seed-bomb", "x-scissor"],
		evolveTo: "parasect",
		fleeRate: 0.15
	},
	"parasect": {
		id: 47,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Parasect",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/047.gif",
		stats: {
			stamina: 120,
			attack: 165,
			defense: 146
		},
		type: ["bug", "grass"],
		weaknesses: [
			"Fire",
			"Ice",
			"Poison",
			"Flying",
			"Bug",
			"Rock"
		],
		quickMoves: ["bug-bite", "fury-cutter"],
		chargeMoves: ["cross-poison", "solar-beam", "x-scissor"],
		evolveFrom: "paras",
		fleeRate: 0.07
	},
	"venonat": {
		id: 48,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Venonat",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/048.gif",
		cpm: [1.86, 1.9],
		stats: {
			stamina: 120,
			attack: 100,
			defense: 102
		},
		type: ["bug", "poison"],
		weaknesses: [
			"Fire",
			"Flying",
			"Psychic",
			"Rock"
		],
		quickMoves: ["bug-bite", "confusion"],
		chargeMoves: ["poison-fang", "psybeam", "signal-beam"],
		evolveTo: "venomoth",
		fleeRate: 0.15
	},
	"venomoth": {
		id: 49,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Venomoth",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/049.gif",
		stats: {
			stamina: 140,
			attack: 179,
			defense: 150
		},
		type: ["bug", "poison"],
		weaknesses: [
			"Fire",
			"Flying",
			"Psychic",
			"Rock"
		],
		quickMoves: ["bug-bite", "confusion"],
		chargeMoves: ["bug-buzz", "poison-fang", "psychic"],
		evolveFrom: "venonat",
		fleeRate: 0.07
	},
	"diglett": {
		id: 50,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Diglett",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/050.gif",
		cpm: [2.68, 2.77],
		stats: {
			stamina: 20,
			attack: 109,
			defense: 88
		},
		type: ["ground"],
		weaknesses: [
			"Water",
			"Grass",
			"Ice"
		],
		quickMoves: ["mud-slap", "scratch"],
		chargeMoves: ["dig", "mud-bomb", "rock-tomb"],
		legacyMoves: ["mud-shot"],
		evolveTo: "dugtrio",
		fleeRate: 0.1
	},
	"dugtrio": {
		id: 51,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Dugtrio",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/051.gif",
		stats: {
			stamina: 70,
			attack: 167,
			defense: 147
		},
		type: ["ground"],
		weaknesses: [
			"Water",
			"Grass",
			"Ice"
		],
		quickMoves: ["mud-slap", "sucker-punch"],
		chargeMoves: ["earthquake", "mud-bomb", "stone-edge"],
		legacyMoves: ["mud-shot"],
		evolveFrom: "diglett",
		fleeRate: 0.06
	},
	"meowth": {
		id: 52,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Meowth",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/052.gif",
		cpm: [1.98, 2.24],
		stats: {
			stamina: 80,
			attack: 92,
			defense: 81
		},
		type: ["normal"],
		weaknesses: [
			"Fighting"
		],
		quickMoves: ["bite", "scratch"],
		chargeMoves: ["body-slam", "dark-pulse", "night-slash"],
		evolveTo: "persian",
		fleeRate: 0.15
	},
	"persian": {
		id: 53,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Persian",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/053.gif",
		stats: {
			stamina: 130,
			attack: 150,
			defense: 139
		},
		type: ["normal"],
		weaknesses: [
			"Fighting"
		],
		quickMoves: ["feint-attack", "scratch"],
		chargeMoves: ["night-slash", "play-rough", "power-gem"],
		evolveFrom: "meowth",
		fleeRate: 0.07
	},
	"psyduck": {
		id: 54,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Psyduck",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/054.gif",
		cpm: [2.22, 2.29],
		stats: {
			stamina: 100,
			attack: 122,
			defense: 96
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["water-gun", "zen-headbutt"],
		chargeMoves: ["aqua-tail", "cross-chop", "psybeam"],
		evolveTo: "golduck",
		fleeRate: 0.1
	},
	"golduck": {
		id: 55,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Golduck",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/055.gif",
		stats: {
			stamina: 160,
			attack: 191,
			defense: 163
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["confusion", "water-gun"],
		chargeMoves: ["hydro-pump", "ice-beam", "psychic"],
		evolveFrom: "psyduck",
		fleeRate: 0.06
	},
	"mankey": {
		id: 56,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Mankey",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/056.gif",
		cpm: [2.18, 2.28],
		stats: {
			stamina: 80,
			attack: 148,
			defense: 87
		},
		type: ["fighting"],
		weaknesses: [
			"Flying",
			"Psychic",
			"Fairy"
		],
		quickMoves: ["karate-chop", "scratch"],
		chargeMoves: ["brick-break", "cross-chop", "low-sweep"],
		evolveTo: "primeape",
		fleeRate: 0.1
	},
	"primeape": {
		id: 57,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Primeape",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/057.gif",
		stats: {
			stamina: 130,
			attack: 207,
			defense: 144
		},
		type: ["fighting"],
		weaknesses: [
			"Flying",
			"Psychic",
			"Fairy"
		],
		quickMoves: ["karate-chop", "low-kick"],
		chargeMoves: ["cross-chop", "low-sweep", "night-slash"],
		evolveFrom: "mankey",
		fleeRate: 0.06
	},
	"growlithe": {
		id: 58,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Growlithe",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/058.gif",
		cpm: [2.31, 2.36],
		stats: {
			stamina: 110,
			attack: 136,
			defense: 96
		},
		type: ["fire"],
		weaknesses: [
			"Ground",
			"Rock",
			"Water"
		],
		quickMoves: ["bite", "ember"],
		chargeMoves: ["body-slam", "flame-wheel", "flamethrower"],
		evolveTo: "arcanine",
		fleeRate: 0.1
	},
	"arcanine": {
		id: 59,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Arcanine",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/059.gif",
		stats: {
			stamina: 180,
			attack: 227,
			defense: 166
		},
		type: ["fire"],
		weaknesses: [
			"Ground",
			"Rock",
			"Water"
		],
		quickMoves: ["bite", "fire-fang"],
		chargeMoves: ["bulldoze", "fire-blast", "flamethrower"],
		evolveFrom: "growlithe",
		fleeRate: 0.06
	},
	"poliwag": {
		id: 60,
		egg: 5,
		buddy: 3,
		candy: 25,
		name: "Poliwag",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/060.gif",
		cpm: [1.72, 1.77],
		stats: {
			stamina: 80,
			attack: 101,
			defense: 82
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["bubble", "mud-shot"],
		chargeMoves: ["body-slam", "bubble-beam", "mud-bomb"],
		evolveTo: "poliwhirl",
		fleeRate: 0.15
	},
	"poliwhirl": {
		id: 61,
		egg: 0,
		buddy: 3,
		candy: 100,
		name: "Poliwhirl",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/061.gif",
		cpm: [1.9, 1.96],
		stats: {
			stamina: 130,
			attack: 130,
			defense: 130
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["bubble", "mud-shot"],
		chargeMoves: ["bubble-beam", "scald", "mud-bomb"],
		evolveFrom: "poliwag",
		evolveTo: "poliwrath",
		fleeRate: 0.07
	},
	"poliwrath": {
		id: 62,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Poliwrath",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/062.gif",
		stats: {
			stamina: 180,
			attack: 182,
			defense: 187
		},
		type: ["water", "fighting"],
		weaknesses: [
			"Electric",
			"Grass",
			"Flying",
			"Psychic",
			"Fairy"
		],
		quickMoves: ["bubble", "mud-shot"],
		chargeMoves: ["hydro-pump", "ice-punch", "submission"],
		evolveFrom: "poliwhirl",
		fleeRate: 0.05
	},
	"abra": {
		id: 63,
		egg: 5,
		buddy: 3,
		candy: 25,
		name: "Abra",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/063.gif",
		stats: {
			stamina: 50,
			attack: 195,
			defense: 103
		},
		type: ["psychic"],
		weaknesses: [
			"Bug",
			"Ghost",
			"Dark"
		],
		cpm: [1.36, 1.95],
		quickMoves: ["zen-headbutt"],
		chargeMoves: ["psyshock", "shadow-ball", "signal-beam"],
		evolveTo: "kadabra",
		fleeRate: 0.99
	},
	"kadabra": {
		id: 64,
		egg: 0,
		buddy: 3,
		candy: 100,
		name: "Kadabra",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/064.gif",
		cpm: [1.4, 1.65],
		stats: {
			stamina: 80,
			attack: 232,
			defense: 138
		},
		type: ["psychic"],
		weaknesses: [
			"Bug",
			"Ghost",
			"Dark"
		],
		quickMoves: ["confusion", "psycho-cut"],
		chargeMoves: ["dazzling-gleam", "psybeam", "shadow-ball"],
		evolveFrom: "abra",
		evolveTo: "alakazam",
		fleeRate: 0.07
	},
	"alakazam": {
		id: 65,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Alakazam",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/065.gif",
		stats: {
			stamina: 110,
			attack: 271,
			defense: 194
		},
		type: ["psychic"],
		weaknesses: [
			"Bug",
			"Ghost",
			"Dark"
		],
		quickMoves: ["confusion", "psycho-cut"],
		chargeMoves: ["dazzling-gleam", "psychic", "shadow-ball"],
		evolveFrom: "kadabra",
		fleeRate: 0.05
	},
	"machop": {
		id: 66,
		egg: 5,
		buddy: 3,
		candy: 25,
		name: "Machop",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/066.gif",
		cpm: [1.62, 1.67],
		stats: {
			stamina: 140,
			attack: 137,
			defense: 88
		},
		type: ["fighting"],
		weaknesses: [
			"Flying",
			"Psychic",
			"Fairy"
		],
		quickMoves: ["karate-chop", "low-kick"],
		chargeMoves: ["brick-break", "cross-chop", "low-sweep"],
		evolveTo: "machoke",
		fleeRate: 0.1
	},
	"machoke": {
		id: 67,
		egg: 0,
		buddy: 3,
		candy: 100,
		name: "Machoke",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/067.gif",
		cpm: [1.48, 1.7],
		stats: {
			stamina: 160,
			attack: 177,
			defense: 130
		},
		type: ["fighting"],
		weaknesses: [
			"Flying",
			"Psychic",
			"Fairy"
		],
		quickMoves: ["karate-chop", "low-kick"],
		chargeMoves: ["brick-break", "cross-chop", "submission"],
		evolveFrom: "machop",
		evolveTo: "machamp",
		fleeRate: 0.07
	},
	"machamp": {
		id: 68,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Machamp",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/068.gif",
		stats: {
			stamina: 180,
			attack: 234,
			defense: 162
		},
		type: ["fighting"],
		weaknesses: [
			"Flying",
			"Psychic",
			"Fairy"
		],
		quickMoves: ["bullet-punch", "karate-chop"],
		chargeMoves: ["cross-chop", "stone-edge", "submission"],
		evolveFrom: "machoke",
		fleeRate: 0.05
	},
	"bellsprout": {
		id: 69,
		egg: 5,
		buddy: 3,
		candy: 25,
		name: "Bellsprout",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/069.gif",
		cpm: [1.54, 1.6],
		stats: {
			stamina: 100,
			attack: 139,
			defense: 64
		},
		type: ["grass", "poison"],
		quickMoves: ["acid", "vine-whip"],
		chargeMoves: ["power-whip", "sludge-bomb", "wrap"],
		evolveTo: "weepinbell",
		fleeRate: 0.15
	},
	"weepinbell": {
		id: 70,
		egg: 0,
		buddy: 3,
		candy: 100,
		name: "Weepinbell",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/070.gif",
		cpm: [1.47, 1.59],
		stats: {
			stamina: 130,
			attack: 172,
			defense: 95
		},
		type: ["grass", "poison"],
		weaknesses: [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		],
		quickMoves: ["acid", "razor-leaf"],
		chargeMoves: ["power-whip", "seed-bomb", "sludge-bomb"],
		evolveFrom: "bellsprout",
		evolveTo: "victreebel",
		fleeRate: 0.07
	},
	"victreebel": {
		id: 71,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Victreebel",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/071.gif",
		stats: {
			stamina: 160,
			attack: 207,
			defense: 138
		},
		type: ["grass", "poison"],
		weaknesses: [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		],
		quickMoves: ["acid", "razor-leaf"],
		chargeMoves: ["leaf-blade", "sludge-bomb", "solar-beam"],
		evolveFrom: "weepinbell",
		fleeRate: 0.05
	},
	"tentacool": {
		id: 72,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Tentacool",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/072.gif",
		cpm: [2.47, 2.6],
		stats: {
			stamina: 80,
			attack: 97,
			defense: 182
		},
		type: ["water", "poison"],
		weaknesses: [
			"Electric",
			"Ground",
			"Psychic"
		],
		quickMoves: ["bubble", "poison-sting"],
		chargeMoves: ["bubble-beam", "water-pulse", "wrap"],
		evolveTo: "tentacruel",
		fleeRate: 0.15
	},
	"tentacruel": {
		id: 73,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Tentacruel",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/073.gif",
		stats: {
			stamina: 160,
			attack: 166,
			defense: 237
		},
		type: ["water", "poison"],
		weaknesses: [
			"Electric",
			"Ground",
			"Psychic"
		],
		quickMoves: ["acid", "poison-jab"],
		chargeMoves: ["blizzard", "hydro-pump", "sludge-wave"],
		evolveFrom: "tentacool",
		fleeRate: 0.07
	},
	"geodude": {
		id: 74,
		egg: 2,
		buddy: 1,
		candy: 25,
		name: "Geodude",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/074.gif",
		cpm: [1.7, 1.76],
		stats: {
			stamina: 80,
			attack: 132,
			defense: 163
		},
		type: ["rock", "ground"],
		weaknesses: [
			"Water",
			"Grass",
			"Ice",
			"Fighting",
			"Ground",
			"Steel"
		],
		quickMoves: ["rock-throw", "tackle"],
		chargeMoves: ["dig", "rock-slide", "rock-tomb"],
		evolveTo: "graveler",
		fleeRate: 0.1
	},
	"graveler": {
		id: 75,
		egg: 0,
		buddy: 1,
		candy: 100,
		name: "Graveler",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/075.gif",
		cpm: [1.62, 1.72],
		stats: {
			stamina: 110,
			attack: 164,
			defense: 196
		},
		type: ["rock", "ground"],
		weaknesses: [
			"Water",
			"Grass",
			"Ice",
			"Fighting",
			"Ground",
			"Steel"
		],
		quickMoves: ["mud-slap", "rock-throw"],
		chargeMoves: ["dig", "rock-slide", "stone-edge"],
		legacyMoves: ["mud-shot"],
		evolveFrom: "geodude",
		evolveTo: "golem",
		fleeRate: 0.07
	},
	"golem": {
		id: 76,
		egg: 0,
		buddy: 1,
		candy: 0,
		name: "Golem",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/076.gif",
		stats: {
			stamina: 160,
			attack: 211,
			defense: 229
		},
		type: ["rock", "ground"],
		weaknesses: [
			"Water",
			"Grass",
			"Ice",
			"Fighting",
			"Ground",
			"Steel"
		],
		quickMoves: ["mud-slap", "rock-throw"],
		chargeMoves: ["ancient-power", "earthquake", "stone-edge"],
		legacyMoves: ["mud-shot"],
		evolveFrom: "graveler",
		fleeRate: 0.05
	},
	"ponyta": {
		id: 77,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Ponyta",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/077.gif",
		cpm: [1.46, 1.5],
		stats: {
			stamina: 100,
			attack: 170,
			defense: 132
		},
		type: ["fire"],
		weaknesses: [
			"Ground",
			"Rock",
			"Water"
		],
		quickMoves: ["ember", "tackle"],
		chargeMoves: ["fire-blast", "flame-charge", "flame-wheel"],
		evolveTo: "rapidash",
		fleeRate: 0.1
	},
	"rapidash": {
		id: 78,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Rapidash",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/078.gif",
		stats: {
			stamina: 130,
			attack: 207,
			defense: 167
		},
		type: ["fire"],
		weaknesses: [
			"Ground",
			"Rock",
			"Water"
		],
		quickMoves: ["ember", "low-kick"],
		chargeMoves: ["drill-run", "fire-blast", "heat-wave"],
		evolveFrom: "ponyta",
		fleeRate: 0.06
	},
	"slowpoke": {
		id: 79,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Slowpoke",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/079.gif",
		cpm: [2.19, 2.21],
		stats: {
			stamina: 180,
			attack: 109,
			defense: 109
		},
		type: ["water", "psychic"],
		weaknesses: [
			"Electric",
			"Grass",
			"Bug",
			"Ghost",
			"Dark"
		],
		quickMoves: ["confusion", "water-gun"],
		chargeMoves: ["water-pulse", "psybeam", "psychic"],
		evolveTo: "slowbro",
		fleeRate: 0.1
	},
	"slowbro": {
		id: 80,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Slowbro",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/080.gif",
		stats: {
			stamina: 190,
			attack: 177,
			defense: 194
		},
		type: ["water", "psychic"],
		weaknesses: [
			"Electric",
			"Grass",
			"Bug",
			"Ghost",
			"Dark"
		],
		quickMoves: ["confusion", "water-gun"],
		chargeMoves: ["ice-beam", "psychic", "water-pulse"],
		evolveFrom: "slowpoke",
		fleeRate: 0.06
	},
	"magnemite": {
		id: 81,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Magnemite",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/081.gif",
		cpm: [2.16, 2.18],
		stats: {
			stamina: 50,
			attack: 165,
			defense: 128
		},
		type: ["electric", "steel"],
		weaknesses: [
			"Fire",
			"Fighting",
			"Ground"
		],
		quickMoves: ["spark", "thunder-shock"],
		chargeMoves: ["discharge", "magnet-bomb", "thunderbolt"],
		evolveFrom: "magneton",
		fleeRate: 0.1
	},
	"magneton": {
		id: 82,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Magneton",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/082.gif",
		stats: {
			stamina: 100,
			attack: 223,
			defense: 182
		},
		type: ["electric", "steel"],
		weaknesses: [
			"Fire",
			"Fighting",
			"Ground"
		],
		quickMoves: ["spark", "thunder-shock"],
		chargeMoves: ["discharge", "flash-cannon", "magnet-bomb"],
		evolveTo: "magnemite",
		fleeRate: 0.06
	},
	"farfetchd": {
		id: 83,
		egg: 5,
		buddy: 3,
		candy: 0,
		name: "Farfetch'd",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/083.gif",
		stats: {
			stamina: 104,
			attack: 124,
			defense: 118
		},
		type: ["normal", "flying"],
		weaknesses: [
			"Electric",
			"Rock"
		],
		quickMoves: ["cut", "fury-cutter"],
		chargeMoves: ["aerial-ace", "air-cutter", "leaf-blade"],
		fleeRate: 0.09
	},
	"doduo": {
		id: 84,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Doduo",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/084.gif",
		cpm: [2.19, 2.3],
		stats: {
			stamina: 70,
			attack: 158,
			defense: 88
		},
		type: ["normal", "flying"],
		weaknesses: [
			"Electric",
			"Rock"
		],
		quickMoves: ["peck", "quick-attack"],
		chargeMoves: ["aerial-ace", "drill-peck", "swift"],
		evolveTo: "dodrio",
		fleeRate: 0.1
	},
	"dodrio": {
		id: 85,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Dodrio",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/085.gif",
		stats: {
			stamina: 120,
			attack: 218,
			defense: 145
		},
		type: ["normal", "flying"],
		weaknesses: [
			"Electric",
			"Rock"
		],
		quickMoves: ["feint-attack", "steel-wing"],
		chargeMoves: ["aerial-ace", "air-cutter", "drill-peck"],
		evolveFrom: "doduo",
		fleeRate: 0.06
	},
	"seel": {
		id: 86,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Seel",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/086.gif",
		cpm: [1.04, 1.96],
		stats: {
			stamina: 130,
			attack: 85,
			defense: 128
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["ice-shard", "lick"],
		chargeMoves: ["aqua-jet", "aqua-tail", "icy-wind"],
		legacyMoves: ["water-gun"],
		evolveTo: "dewgong",
		fleeRate: 0.09
	},
	"dewgong": {
		id: 87,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Dewgong",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/087.gif",
		stats: {
			stamina: 180,
			attack: 139,
			defense: 184
		},
		type: ["water", "ice"],
		weaknesses: [
			"Electric",
			"Grass",
			"Fighting",
			"Rock"
		],
		quickMoves: ["frost-breath", "ice-shard"],
		chargeMoves: ["aqua-jet", "blizzard", "icy-wind"],
		evolveFrom: "seel",
		fleeRate: 0.06
	},
	"grimer": {
		id: 88,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Grimer",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/088.gif",
		cpm: [2.01, 2.44],
		stats: {
			stamina: 160,
			attack: 135,
			defense: 90
		},
		type: ["poison"],
		weaknesses: [
			"Ground",
			"Psychic"
		],
		quickMoves: ["poison-jab", "mud-slap"],
		chargeMoves: ["sludge", "sludge-bomb", "mud-bomb"],
		legacyMoves: ["acid"],
		evolveTo: "muk",
		fleeRate: 0.1
	},
	"muk": {
		id: 89,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Muk",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/089.gif",
		stats: {
			stamina: 210,
			attack: 190,
			defense: 184
		},
		type: ["poison"],
		weaknesses: [
			"Ground",
			"Psychic"
		],
		quickMoves: ["poison-jab", "lick"],
		chargeMoves: ["dark-pulse", "gunk-shot", "sludge-wave"],
		legacyMoves: ["acid"],
		evolveFrom: "grimer",
		fleeRate: 0.06
	},
	"shellder": {
		id: 90,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Shellder",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/090.gif",
		cpm: [2.62, 2.65],
		stats: {
			stamina: 60,
			attack: 116,
			defense: 168
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["ice-shard", "tackle"],
		chargeMoves: ["bubble-beam", "icy-wind", "water-pulse"],
		evolveTo: "cloyster",
		fleeRate: 0.1
	},
	"cloyster": {
		id: 91,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Cloyster",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/091.gif",
		stats: {
			stamina: 100,
			attack: 186,
			defense: 323
		},
		type: ["water", "ice"],
		weaknesses: [
			"Electric",
			"Grass",
			"Fighting",
			"Rock"
		],
		quickMoves: ["frost-breath", "ice-shard"],
		chargeMoves: ["blizzard", "icy-wind", "hydro-pump"],
		evolveFrom: "shellder",
		fleeRate: 0.06
	},
	"gastly": {
		id: 92,
		egg: 5,
		buddy: 3,
		candy: 25,
		name: "Gastly",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/092.gif",
		cpm: [1.75, 1.83],
		stats: {
			stamina: 60,
			attack: 186,
			defense: 70
		},
		type: ["ghost", "poison"],
		weaknesses: [
			"Ground",
			"Psychic",
			"Ghost",
			"Dark"
		],
		quickMoves: ["lick", "sucker-punch"],
		chargeMoves: ["dark-pulse", "ominous-wind", "sludge-bomb"],
		evolveTo: "haunter",
		fleeRate: 0.1
	},
	"haunter": {
		id: 93,
		egg: 0,
		buddy: 3,
		candy: 100,
		name: "Haunter",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/093.gif",
		cpm: [1.56, 1.58],
		stats: {
			stamina: 90,
			attack: 223,
			defense: 112
		},
		type: ["ghost", "poison"],
		weaknesses: [
			"Ground",
			"Psychic",
			"Ghost",
			"Dark"
		],
		quickMoves: ["lick", "shadow-claw"],
		chargeMoves: ["dark-pulse", "shadow-ball", "sludge-bomb"],
		evolveFrom: "gastly",
		evolveTo: "gengar",
		fleeRate: 0.07
	},
	"gengar": {
		id: 94,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Gengar",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/094.gif",
		stats: {
			stamina: 120,
			attack: 261,
			defense: 156
		},
		type: ["ghost", "poison"],
		weaknesses: [
			"Ground",
			"Psychic",
			"Ghost",
			"Dark"
		],
		quickMoves: ["shadow-claw", "sucker-punch"],
		chargeMoves: ["sludge-bomb", "dark-pulse", "shadow-ball"],
		legacyMoves: ["sludge-wave"],
		evolveFrom: "haunter",
		fleeRate: 0.05
	},
	"onix": {
		id: 95,
		egg: 10,
		buddy: 5,
		candy: 0,
		name: "Onix",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/095.gif",
		stats: {
			stamina: 70,
			attack: 85,
			defense: 288
		},
		type: ["rock", "ground"],
		weaknesses: [
			"Water",
			"Grass",
			"Ice",
			"Fighting",
			"Ground",
			"Steel"
		],
		quickMoves: ["rock-throw", "tackle"],
		chargeMoves: ["iron-head", "rock-slide", "stone-edge"],
		fleeRate: 0.09
	},
	"drowzee": {
		id: 96,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Drowzee",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/096.gif",
		cpm: [2.06, 2.09],
		stats: {
			stamina: 120,
			attack: 89,
			defense: 158
		},
		type: ["psychic"],
		weaknesses: [
			"Bug",
			"Ghost",
			"Dark"
		],
		quickMoves: ["confusion", "pound"],
		chargeMoves: ["psybeam", "psychic", "psyshock"],
		evolveTo: "hypno",
		fleeRate: 0.1
	},
	"hypno": {
		id: 97,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Hypno",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/097.gif",
		stats: {
			stamina: 170,
			attack: 144,
			defense: 215
		},
		type: ["psychic"],
		weaknesses: [
			"Bug",
			"Ghost",
			"Dark"
		],
		quickMoves: ["confusion", "zen-headbutt"],
		chargeMoves: ["psychic", "psyshock", "shadow-ball"],
		evolveFrom: "drowzee",
		fleeRate: 0.06
	},
	"krabby": {
		id: 98,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Krabby",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/098.gif",
		cpm: [2.32, 2.4],
		stats: {
			stamina: 60,
			attack: 181,
			defense: 156
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["bubble", "mud-shot"],
		chargeMoves: ["bubble-beam", "vice-grip", "water-pulse"],
		evolveTo: "kingler",
		fleeRate: 0.15
	},
	"kingler": {
		id: 99,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Kingler",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/099.gif",
		stats: {
			stamina: 110,
			attack: 240,
			defense: 214
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["metal-claw", "mud-shot"],
		chargeMoves: ["vice-grip", "water-pulse", "x-scissor"],
		evolveFrom: "krabby",
		fleeRate: 0.07
	},
	"voltorb": {
		id: 100,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Voltorb",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/100.gif",
		cpm: [2.01, 2.01],
		stats: {
			stamina: 80,
			attack: 109,
			defense: 114
		},
		type: ["electric"],
		weaknesses: [
			"Ground"
		],
		quickMoves: ["spark", "tackle"],
		chargeMoves: ["discharge", "signal-beam", "thunderbolt"],
		evolveTo: "electrode",
		fleeRate: 0.1
	},
	"electrode": {
		id: 101,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Electrode",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/101.gif",
		stats: {
			stamina: 120,
			attack: 173,
			defense: 179
		},
		type: ["electric"],
		weaknesses: [
			"Ground"
		],
		quickMoves: ["spark", "tackle"],
		chargeMoves: ["discharge", "hyper-beam", "thunderbolt"],
		evolveFrom: "voltorb",
		fleeRate: 0.06
	},
	"exeggcute": {
		id: 102,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Exeggcute",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/102.gif",
		cpm: [2.7, 3.18],
		stats: {
			stamina: 120,
			attack: 107,
			defense: 140
		},
		type: ["grass", "psychic"],
		weaknesses: [
			"Fire",
			"Ice",
			"Poison",
			"Flying",
			"Bug",
			"Ghost",
			"Dark"
		],
		quickMoves: ["confusion"],
		chargeMoves: ["ancient-power", "psychic", "seed-bomb"],
		evolveTo: "exeggutor",
		fleeRate: 0.1
	},
	"exeggutor": {
		id: 103,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Exeggutor",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/103.gif",
		stats: {
			stamina: 190,
			attack: 233,
			defense: 158
		},
		type: ["grass", "psychic"],
		weaknesses: [
			"Fire",
			"Ice",
			"Poison",
			"Flying",
			"Bug",
			"Ghost",
			"Dark"
		],
		quickMoves: ["confusion", "zen-headbutt"],
		chargeMoves: ["psychic", "seed-bomb", "solar-beam"],
		evolveFrom: "exeggcute",
		fleeRate: 0.06
	},
	"cubone": {
		id: 104,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Cubone",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/104.gif",
		cpm: [1.65, 1.67],
		stats: {
			stamina: 100,
			attack: 90,
			defense: 165
		},
		type: ["ground"],
		weaknesses: [
			"Water",
			"Grass",
			"Ice"
		],
		quickMoves: ["mud-slap", "rock-smash"],
		chargeMoves: ["bone-club", "bulldoze", "dig"],
		evolveTo: "marowak",
		fleeRate: 0.1
	},
	"marowak": {
		id: 105,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Marowak",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/105.gif",
		stats: {
			stamina: 120,
			attack: 144,
			defense: 200
		},
		type: ["ground"],
		weaknesses: [
			"Water",
			"Grass",
			"Ice"
		],
		quickMoves: ["mud-slap", "rock-smash"],
		chargeMoves: ["bone-club", "dig", "earthquake"],
		evolveFrom: "cubone",
		fleeRate: 0.06
	},
	"hitmonlee": {
		id: 106,
		egg: 10,
		buddy: 5,
		candy: 0,
		name: "Hitmonlee",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/106.gif",
		stats: {
			stamina: 100,
			attack: 224,
			defense: 211
		},
		type: ["fighting"],
		weaknesses: [
			"Flying",
			"Psychic",
			"Fairy"
		],
		quickMoves: ["low-kick", "rock-smash"],
		chargeMoves: ["low-sweep", "brick-break", "stone-edge"],
		legacyMoves: ["stomp"],
		fleeRate: 0.09
	},
	"hitmonchan": {
		id: 107,
		egg: 10,
		buddy: 5,
		candy: 0,
		name: "Hitmonchan",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/107.gif",
		stats: {
			stamina: 100,
			attack: 193,
			defense: 212
		},
		type: ["fighting"],
		weaknesses: [
			"Flying",
			"Psychic",
			"Fairy"
		],
		quickMoves: ["bullet-punch", "rock-smash"],
		chargeMoves: ["brick-break", "fire-punch", "ice-punch", "thunder-punch"],
		fleeRate: 0.09
	},
	"lickitung": {
		id: 108,
		egg: 5,
		buddy: 3,
		candy: 0,
		name: "Lickitung",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/108.gif",
		stats: {
			stamina: 180,
			attack: 108,
			defense: 137
		},
		type: ["normal"],
		weaknesses: [
			"Fighting"
		],
		quickMoves: ["lick", "zen-headbutt"],
		chargeMoves: ["hyper-beam", "power-whip", "hyper-beam"],
		fleeRate: 0.09
	},
	"koffing": {
		id: 109,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Koffing",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/109.gif",
		cpm: [1.95, 2.03],
		stats: {
			stamina: 80,
			attack: 119,
			defense: 164
		},
		type: ["poison"],
		weaknesses: [
			"Ground",
			"Psychic"
		],
		quickMoves: ["tackle"],
		chargeMoves: ["dark-pulse", "sludge", "sludge-bomb"],
		legacyMoves: ["acid"],
		evolveTo: "weezing",
		fleeRate: 0.1
	},
	"weezing": {
		id: 110,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Weezing",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/110.gif",
		stats: {
			stamina: 130,
			attack: 174,
			defense: 221
		},
		type: ["poison"],
		weaknesses: [
			"Ground",
			"Psychic"
		],
		quickMoves: ["tackle"],
		chargeMoves: ["dark-pulse", "shadow-ball", "sludge-bomb"],
		legacyMoves: ["acid"],
		evolveFrom: "koffing",
		fleeRate: 0.06
	},
	"rhyhorn": {
		id: 111,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Rhyhorn",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/111.gif",
		cpm: [1.9, 1.91],
		stats: {
			stamina: 160,
			attack: 140,
			defense: 157
		},
		type: ["ground", "rock"],
		weaknesses: [
			"Water",
			"Grass",
			"Ice",
			"Fighting",
			"Ground",
			"Steel"
		],
		quickMoves: ["mud-slap", "rock-smash"],
		chargeMoves: ["bulldoze", "horn-attack", "stomp"],
		evolveTo: "rhydon",
		fleeRate: 0.1
	},
	"rhydon": {
		id: 112,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Rhydon",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/112.gif",
		stats: {
			stamina: 210,
			attack: 222,
			defense: 206
		},
		type: ["ground", "rock"],
		weaknesses: [
			"Water",
			"Grass",
			"Ice",
			"Fighting",
			"Ground",
			"Steel"
		],
		quickMoves: ["mud-slap", "rock-smash"],
		chargeMoves: ["earthquake", "megahorn", "stone-edge"],
		evolveFrom: "rhyhorn",
		fleeRate: 0.06
	},
	"chansey": {
		id: 113,
		egg: 10,
		buddy: 5,
		candy: 0,
		name: "Chansey",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/113.gif",
		stats: {
			stamina: 500,
			attack: 60,
			defense: 176
		},
		type: ["normal"],
		weaknesses: [
			"Fighting"
		],
		quickMoves: ["pound", "zen-headbutt"],
		chargeMoves: ["dazzling-gleam", "hyper-beam", "psychic"],
		legacyMoves: ["psybeam"],
		fleeRate: 0.09
	},
	"tangela": {
		id: 114,
		egg: 5,
		buddy: 3,
		candy: 0,
		name: "Tangela",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/114.gif",
		stats: {
			stamina: 130,
			attack: 183,
			defense: 205
		},
		type: ["grass"],
		weaknesses: [
			"Fire",
			"Ice",
			"Poison",
			"Flying",
			"Bug"
		],
		quickMoves: ["vine-whip"],
		chargeMoves: ["power-whip", "sludge-bomb", "solar-beam"],
		fleeRate: 0.09
	},
	"kangaskhan": {
		id: 115,
		egg: 5,
		buddy: 3,
		candy: 0,
		name: "Kangaskhan",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/115.gif",
		stats: {
			stamina: 210,
			attack: 181,
			defense: 165
		},
		type: ["normal"],
		weaknesses: [
			"Fighting"
		],
		quickMoves: ["low-kick", "mud-slap"],
		chargeMoves: ["brick-break", "earthquake", "stomp"],
		fleeRate: 0.09
	},
	"horsea": {
		id: 116,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Horsea",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/116.gif",
		cpm: [2.19, 2.23],
		stats: {
			stamina: 60,
			attack: 129,
			defense: 125
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["bubble", "water-gun"],
		chargeMoves: ["bubble-beam", "dragon-pulse", "flash-cannon"],
		evolveTo: "seadra",
		fleeRate: 0.1
	},
	"seadra": {
		id: 117,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Seadra",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/117.gif",
		stats: {
			stamina: 110,
			attack: 187,
			defense: 182
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["dragon-breath", "water-gun"],
		chargeMoves: ["blizzard", "dragon-pulse", "hydro-pump"],
		evolveFrom: "horsea",
		fleeRate: 0.06
	},
	"goldeen": {
		id: 118,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Goldeen",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/118.gif",
		cpm: [2.14, 2.24],
		stats: {
			stamina: 90,
			attack: 123,
			defense: 115
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["mud-shot", "peck"],
		chargeMoves: ["aqua-tail", "horn-attack", "water-pulse"],
		evolveTo: "seaking",
		fleeRate: 0.15
	},
	"seaking": {
		id: 119,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Seaking",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/119.gif",
		stats: {
			stamina: 160,
			attack: 175,
			defense: 154
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["peck", "poison-jab"],
		chargeMoves: ["drill-run", "icy-wind", "megahorn"],
		evolveFrom: 'goldeen',
		fleeRate: 0.07
	},
	"staryu": {
		id: 120,
		egg: 5,
		buddy: 3,
		candy: 50,
		name: "Staryu",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/120.gif",
		cpm: [2.34, 2.41],
		stats: {
			stamina: 60,
			attack: 137,
			defense: 112
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["tackle", "water-gun"],
		chargeMoves: ["bubble-beam", "power-gem", "swift"],
		legacyMoves: ["quick-attack"],
		evolveTo: "starmie",
		fleeRate: 0.15
	},
	"starmie": {
		id: 121,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Starmie",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/121.gif",
		quickMoves: ["tackle", "water-gun"],
		chargeMoves: ["hydro-pump", "power-gem", "psychic"],
		legacyMoves: ["quick-attack", "psybeam"],
		stats: {
			stamina: 120,
			attack: 210,
			defense: 184
		},
		type: ["water", "psychic"],
		weaknesses: [
			"Electric",
			"Grass",
			"Bug",
			"Ghost",
			"Dark"
		],
		evolveFrom: "staryu",
		fleeRate: 0.06
	},
	"mr-mime": {
		id: 122,
		egg: 10,
		buddy: 5,
		candy: 0,
		name: "Mr. Mime",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/122.gif",
		stats: {
			stamina: 80,
			attack: 192,
			defense: 233
		},
		type: ["psychic", "fairy"],
		weaknesses: [
			"Bug",
			"Ghost",
			"Dark"
		],
		quickMoves: ["confusion", "zen-headbutt"],
		chargeMoves: ["psybeam", "psychic", "shadow-ball"],
		fleeRate: 0.09
	},
	"scyther": {
		id: 123,
		egg: 01,
		buddy: 5,
		candy: 0,
		name: "Scyther",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/123.gif",
		stats: {
			stamina: 140,
			attack: 218,
			defense: 170
		},
		type: ["bug", "flying"],
		weaknesses: [
			"Fire",
			"Electric",
			"Ice",
			"Flying",
			"Rock"
		],
		quickMoves: ["fury-cutter", "steel-wing"],
		chargeMoves: ["bug-buzz", "night-slash", "x-scissor"],
		fleeRate: 0.09
	},
	"jynx": {
		id: 124,
		egg: 10,
		buddy: 5,
		candy: 0,
		name: "Jynx",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/124.gif",
		stats: {
			stamina: 130,
			attack: 223,
			defense: 182
		},
		type: ["ice", "psychic"],
		weaknesses: [
			"Fire",
			"Bug",
			"Rock",
			"Ghost",
			"Dark",
			"Steel"
		],
		quickMoves: ["frost-breath", "pound"],
		chargeMoves: ["draining-kiss", "psybeam", "psyshock"],
		evolveFrom: "smoochum",
		fleeRate: 0.09
	},
	"electabuzz": {
		id: 125,
		egg: 10,
		buddy: 5,
		candy: 0,
		name: "Electabuzz",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/125.gif",
		stats: {
			stamina: 130,
			attack: 198,
			defense: 173
		},
		type: ["electric"],
		weaknesses: [
			"Ground"
		],
		quickMoves: ["low-kick", "thunder-shock"],
		chargeMoves: ["thunder", "thunder-punch", "thunderbolt"],
		evolveFrom: "elekid",
		fleeRate: 0.09
	},
	"magmar": {
		id: 126,
		egg: 10,
		buddy: 5,
		candy: 0,
		name: "Magmar",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/126.gif",
		stats: {
			stamina: 130,
			attack: 206,
			defense: 169
		},
		type: ["fire"],
		weaknesses: [
			"Ground",
			"Rock",
			"Water"
		],
		quickMoves: ["ember", "karate-chop"],
		chargeMoves: ["fire-blast", "fire-punch", "flamethrower"],
		evolveFrom: "magby",
		fleeRate: 0.09
	},
	"pinsir": {
		id: 127,
		egg: 10,
		buddy: 5,
		candy: 0,
		name: "Pinsir",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/127.gif",
		stats: {
			stamina: 130,
			attack: 238,
			defense: 197
		},
		type: ["bug"],
		weaknesses: [
			"Fire",
			"Flying",
			"Rock"
		],
		quickMoves: ["fury-cutter", "rock-smash"],
		chargeMoves: ["submission", "vice-grip", "x-scissor"],
		fleeRate: 0.09
	},
	"tauros": {
		id: 128,
		egg: 5,
		buddy: 3,
		candy: 0,
		name: "Tauros",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/128.gif",
		stats: {
			stamina: 150,
			attack: 198,
			defense: 197
		},
		type: ["normal"],
		weaknesses: [
			"Fighting"
		],
		quickMoves: ["tackle", "zen-headbutt"],
		chargeMoves: ["earthquake", "horn-attack", "iron-head"],
		fleeRate: 0.09
	},
	"magikarp": {
		id: 129,
		egg: 2,
		buddy: 1,
		candy: 400,
		name: "Magikarp",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/129.gif",
		cpm: [10.1, 11.8],
		stats: {
			stamina: 40,
			attack: 29,
			defense: 102
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["splash"],
		chargeMoves: ["struggle"],
		evolveTo: "gyarados",
		fleeRate: 0.15
	},
	"gyarados": {
		id: 130,
		egg: 0,
		buddy: 1,
		candy: 0,
		name: "Gyarados",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/130.gif",
		stats: {
			stamina: 190,
			attack: 237,
			defense: 197
		},
		type: ["water", "flying"],
		weaknesses: [
			"Electric",
			"Rock"
		],
		quickMoves: ["bite"],
		chargeMoves: ["dragon-pulse", "hydro-pump", "twister"],
		legacyMoves: ["dragon-breath"],
		evolveFrom: "magikarp",
		fleeRate: 0.07
	},
	"lapras": {
		id: 131,
		egg: 10,
		buddy: 5,
		candy: 0,
		name: "Lapras",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/131.gif",
		stats: {
			stamina: 260,
			attack: 186,
			defense: 190
		},
		type: ["water", "ice"],
		weaknesses: [
			"Electric",
			"Grass",
			"Fighting",
			"Rock"
		],
		quickMoves: ["frost-breath", "ice-shard"],
		chargeMoves: ["blizzard", "dragon-pulse", "ice-beam"],
		fleeRate: 0.09
	},
	"ditto": {
		id: 132,
		egg: 0,
		buddy: 3,
		candy: 0,
		name: "Ditto",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/132.gif",
		stats: {
			stamina: 96,
			attack: 91,
			defense: 91
		},
		type: ["normal"],
		weaknesses: [
			"Fighting"
		],
		quickMoves: ["pound"],
		chargeMoves: ["struggle"],
		fleeRate: 0.1
	},
	"eevee": {
		id: 133,
		egg: 10,
		buddy: 5,
		candy: 25,
		name: "Eevee",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/133.gif",
		cpm: [2.02, 2.64],
		stats: {
			stamina: 110,
			attack: 104,
			defense: 121
		},
		type: ["normal"],
		weaknesses: [
			"Fighting"
		],
		quickMoves: ["quick-attack", "tackle"],
		chargeMoves: ["body-slam", "dig", "swift"],
		evolveTo: ["vaporeon", "jolteon", "flareon"],
		fleeRate: 0.1
	},
	"vaporeon": {
		id: 134,
		egg: 0,
		buddy: 5,
		candy: 0,
		name: "Vaporeon",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/134.gif",
		cpm: [2.63, 2.73],
		stats: {
			stamina: 260,
			attack: 205,
			defense: 177
		},
		type: ["water"],
		weaknesses: [
			"Electric",
			"Grass"
		],
		quickMoves: ["water-gun"],
		chargeMoves: ["aqua-tail", "hydro-pump", "water-pulse"],
		evolveFrom: "eevee",
		fleeRate: 0.06
	},
	"jolteon": {
		id: 135,
		egg: 0,
		buddy: 5,
		candy: 0,
		name: "Jolteon",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/135.gif",
		cpm: [2, 2.1],
		stats: {
			stamina: 130,
			attack: 232,
			defense: 201
		},
		type: ["electric"],
		weaknesses: [
			"Ground"
		],
		quickMoves: ["thunder-shock"],
		chargeMoves: ["discharge", "thunder", "thunderbolt"],
		evolveFrom: "eevee",
		fleeRate: 0.06
	},
	"flareon": {
		id: 136,
		egg: 0,
		buddy: 5,
		candy: 0,
		name: "Flareon",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/136.gif",
		cpm: [2.48, 2.48],
		stats: {
			stamina: 130,
			attack: 246,
			defense: 204
		},
		type: ["fire"],
		weaknesses: [
			"Ground",
			"Rock",
			"Water"
		],
		quickMoves: ["ember"],
		chargeMoves: ["fire-blast", "flamethrower", "heat-wave"],
		evolveFrom: "eevee",
		fleeRate: 0.06
	},
	"porygon": {
		id: 137,
		egg: 5,
		buddy: 3,
		candy: 0,
		name: "Porygon",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/137.gif",
		quickMoves: ["zen-headbutt", "tackle"],
		chargeMoves: ["discharge", "signal-beam", "psybeam"],
		legacyMoves: ["quick-attack"],
		stats: {
			stamina: 130,
			attack: 153,
			defense: 139
		},
		type: ["normal"],
		weaknesses: [
			"Fighting"
		],
		fleeRate: 0.09
	},
	"omanyte": {
		id: 138,
		egg: 10,
		buddy: 5,
		candy: 50,
		name: "Omanyte",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/138.gif",
		cpm: [1.99, 2.12],
		stats: {
			stamina: 70,
			attack: 155,
			defense: 174
		},
		type: ["rock", "water"],
		weaknesses: [
			"Electric",
			"Grass",
			"Fighting",
			"Ground"
		],
		quickMoves: ["mud-shot", "water-gun"],
		chargeMoves: ["ancient-power", "brine", "rock-tomb"],
		evolveTo: "omastar",
		fleeRate: 0.09
	},
	"omastar": {
		id: 139,
		egg: 0,
		buddy: 5,
		candy: 0,
		name: "Omastar",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/139.gif",
		stats: {
			stamina: 140,
			attack: 207,
			defense: 227
		},
		type: ["rock", "water"],
		weaknesses: [
			"Electric",
			"Grass",
			"Fighting",
			"Ground"
		],
		quickMoves: ["mud-shot", "water-gun"],
		chargeMoves: ["ancient-power", "hydro-pump", "rock-slide"],
		legacyMoves: ["rock-throw"],
		evolveFrom: "omanyte",
		fleeRate: 0.05
	},
	"kabuto": {
		id: 140,
		egg: 10,
		buddy: 5,
		candy: 50,
		name: "Kabuto",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/140.gif",
		cpm: [1.97, 2.37],
		stats: {
			stamina: 60,
			attack: 148,
			defense: 162
		},
		type: ["rock", "water"],
		weaknesses: [
			"Electric",
			"Grass",
			"Fighting",
			"Ground"
		],
		quickMoves: ["mud-shot", "scratch"],
		chargeMoves: ["ancient-power", "aqua-jet", "rock-tomb"],
		evolveTo: "kabutops",
		fleeRate: 0.09
	},
	"kabutops": {
		id: 141,
		egg: 0,
		buddy: 5,
		candy: 0,
		name: "Kabutops",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/141.gif",
		stats: {
			stamina: 120,
			attack: 220,
			defense: 203
		},
		type: ["rock", "water"],
		weaknesses: [
			"Electric",
			"Grass",
			"Fighting",
			"Ground"
		],
		quickMoves: ["fury-cutter", "mud-shot"],
		chargeMoves: ["ancient-power", "stone-edge", "water-pulse"],
		evolveFrom: "kabuto",
		fleeRate: 0.05
	},
	"aerodactyl": {
		id: 142,
		egg: 10,
		buddy: 5,
		candy: 0,
		name: "Aerodactyl",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/142.gif",
		stats: {
			stamina: 160,
			attack: 221,
			defense: 164
		},
		type: ["rock", "flying"],
		weaknesses: [
			"Water",
			"Electric",
			"Ice",
			"Rock",
			"Steel"
		],
		quickMoves: ["bite", "steel-wing"],
		chargeMoves: ["ancient-power", "hyper-beam", "iron-head"],
		fleeRate: 0.09
	},
	"snorlax": {
		id: 143,
		egg: 10,
		buddy: 5,
		candy: 0,
		name: "Snorlax",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/143.gif",
		quickMoves: ["lick", "zen-headbutt"],
		chargeMoves: ["body-slam", "earthquake", "hyper-beam"],
		stats: {
			stamina: 320,
			attack: 190,
			defense: 190
		},
		type: ["normal"],
		weaknesses: [
			"Fighting"
		],
		fleeRate: 0.09
	},
	"articuno": {
		id: 144,
		egg: 0,
		buddy: 5,
		candy: 0,
		name: "Articuno",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/144.gif",
		stats: {
			stamina: 180,
			attack: 192,
			defense: 249
		},
		type: ["ice", "flying"],
		weaknesses: [
			"Fire",
			"Electric",
			"Rock",
			"Steel"
		],
		quickMoves: ["frost-breath"],
		chargeMoves: ["blizzard", "ice-beam", "icy-wind"],
		fleeRate: 0.1
	},
	"zapdos": {
		id: 145,
		egg: 0,
		buddy: 5,
		candy: 0,
		name: "Zapdos",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/145.gif",
		stats: {
			stamina: 180,
			attack: 253,
			defense: 188
		},
		type: ["electric", "flying"],
		weaknesses: [
			"Ice",
			"Rock"
		],
		quickMoves: ["thunder-shock"],
		chargeMoves: ["discharge", "thunder", "thunderbolt"],
		fleeRate: 0.1
	},
	"moltres": {
		id: 146,
		egg: 0,
		buddy: 5,
		candy: 0,
		name: "Moltres",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/146.gif",
		stats: {
			stamina: 180,
			attack: 251,
			defense: 184
		},
		type: ["fire", "flying"],
		weaknesses: [
			"Water",
			"Electric",
			"Rock"
		],
		quickMoves: ["ember"],
		chargeMoves: ["fire-blast", "flamethrower", "heat-wave"],
		fleeRate: 0.1
	},
	"dratini": {
		id: 147,
		egg: 10,
		buddy: 5,
		candy: 25,
		name: "Dratini",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/147.gif",
		cpm: [1.79, 1.85],
		stats: {
			stamina: 82,
			attack: 119,
			defense: 94
		},
		type: ["dragon"],
		weaknesses: [
			"Ice",
			"Dragon",
			"Fairy"
		],
		quickMoves: ["dragon-breath"],
		chargeMoves: ["aqua-tail", "twister", "wrap"],
		evolveTo: "dragonair",
		fleeRate: 0.09
	},
	"dragonair": {
		id: 148,
		egg: 0,
		buddy: 5,
		candy: 100,
		name: "Dragonair",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/148.gif",
		cpm: [2.03, 2.08],
		stats: {
			stamina: 122,
			attack: 163,
			defense: 138
		},
		type: ["dragon"],
		weaknesses: [
			"Ice",
			"Dragon",
			"Fairy"
		],
		quickMoves: ["dragon-breath"],
		chargeMoves: ["aqua-tail", "dragon-pulse", "wrap"],
		evolveFrom: "dratini",
		evolveTo: "dragonite",
		fleeRate: 0.06
	},
	"dragonite": {
		id: 149,
		egg: 0,
		buddy: 5,
		candy: 0,
		name: "Dragonite",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/149.gif",
		stats: {
			stamina: 182,
			attack: 263,
			defense: 201
		},
		type: ["dragon", "flying"],
		weaknesses: [
			"Ice",
			"Dragon",
			"Fairy"
		],
		quickMoves: ["dragon-breath", "steel-wing"],
		chargeMoves: ["dragon-claw", "dragon-pulse", "hyper-beam"],
		evolveFrom: "dragonair",
		fleeRate: 0.05
	},
	"mewtwo": {
		id: 150,
		egg: 0,
		buddy: 5,
		candy: 0,
		name: "Mewtwo",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/152.gif",
		stats: {
			stamina: 212,
			attack: 330,
			defense: 200
		},
		type: ["psychic"],
		weaknesses: [
			"Bug",
			"Ghost",
			"Dark"
		],
		quickMoves: ["confusion", "psycho-cut"],
		chargeMoves: ["hyper-beam", "psychic", "shadow-ball"],
		fleeRate: 0.1
	},
	"mew": {
		id: 151,
		egg: 0,
		buddy: 5,
		candy: 0,
		name: "Mew",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/151.gif",
		stats: {
			stamina: 200,
			attack: 210,
			defense: 210
		},
		type: ["psychic"],
		weaknesses: [
			"Bug",
			"Ghost",
			"Dark"
		],
		quickMoves: ["pound"],
		chargeMoves: ["dragon-pulse", "earthquake", "fire-blast", "blizzard",
			"hyper-beam", "psychic", "solar-beam"
		],
		legacyMoves: ["moonblast", "hurricane"],
		fleeRate: 0.1
	},
	"pichu": {
		id: 172,
		egg: 5,
		buddy: 1,
		candy: 25,
		name: "Pichu",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/172.gif",
		stats: {
			stamina: 40,
			attack: 77,
			defense: 63
		},
		type: ["electric"],
		weaknesses: [
			"Ground"
		],
		quickMoves: ["thunder-shock", "quick-attack"],
		chargeMoves: ["thunderbolt", "disarming-voice", "thunder-punch"],
		evolveTo: "pikachu",
		fleeRate: 0.05
	},
	"cleffa": {
		id: 173,
		egg: 2,
		buddy: 1,
		candy: 25,
		name: "Cleffa",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/173.gif",
		stats: {
			stamina: 100,
			attack: 75,
			defense: 91
		},
		type: ["fairy"],
		weaknesses: [
			"Poison", "Steel",
		],
		quickMoves: ["pound", "zen-headbutt"],
		chargeMoves: ["body-slam", "psychic", "signal-beam"],
		evolveTo: "clefairy",
		fleeRate: 0.05
	},
	"igglybuff": {
		id: 174,
		egg: 2,
		buddy: 1,
		candy: 25,
		name: "Igglybuff",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/174.gif",
		stats: {
			stamina: 180,
			attack: 69,
			defense: 34
		},
		type: ["fairy"],
		weaknesses: [
			"Poison", "Steel",
		],
		quickMoves: ["pound", "feint-attack"],
		chargeMoves: ["body-slam", "shadow-ball", "psychic"],
		evolveTo: "jigglypuff",
		fleeRate: 0.05
	},
	"togepi": {
		id: 175,
		egg: 5,
		buddy: 5,
		candy: 50,
		name: "Togepi",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/175.gif",
		stats: {
			stamina: 70,
			attack: 67,
			defense: 116
		},
		type: ["fairy"],
		weaknesses: [
			"Poison", "Steel",
		],
		quickMoves: ["zen-headbutt", "peck"],
		chargeMoves: ["ancient-power", "psyshock", "dazzling-gleam"],
		evolveTo: "togetic",
		fleeRate: 0.05
	},
	"togetic": {
		id: 176,
		egg: 0,
		buddy: 5,
		candy: 0,
		name: "Togetic",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/176.gif",
		stats: {
			stamina: 110,
			attack: 139,
			defense: 191
		},
		type: ["fairy", "flying"],
		weaknesses: [
			"Electric",
			"Steel",
			"Poison",
			"Ice",
			"Rock"
		],
		quickMoves: ["zen-headbutt", "steel-wing"],
		chargeMoves: ["ancient-power", "dazzling-gleam", "aerial-ace"],
		evolveFrom: "togepi",
		fleeRate: 0.05
	},
	"smoochum": {
		id: 238,
		egg: 10,
		buddy: 5,
		candy: 25,
		name: "Smoochum",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/238.gif",
		stats: {
			stamina: 90,
			attack: 153,
			defense: 116
		},
		type: ["ice", "psychic"],
		weaknesses: [
			"Fire",
			"Rock",
			"Steel",
			"Bug",
			"Dark",
			"Ghost"
		],
		quickMoves: ["frost-breath", "pound"],
		chargeMoves: ["ice-beam", "ice-punch", "psyshock"],
		evolveTo: "jynx",
		fleeRate: 0.05
	},
	"elekid": {
		id: 239,
		egg: 10,
		buddy: 5,
		candy: 25,
		name: "Elekid",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/239.gif",
		stats: {
			stamina: 90,
			attack: 135,
			defense: 110
		},
		type: ["electric"],
		weaknesses: [
			"Ground"
		],
		quickMoves: ["thunder-shock", "low-kick"],
		chargeMoves: ["thunder-punch", "thunderbolt", "discharge"],
		evolveTo: "electabuzz",
		fleeRate: 0.05
	},
	"magby": {
		id: 240,
		egg: 10,
		buddy: 5,
		candy: 25,
		name: "Magby",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/240.gif",
		stats: {
			stamina: 90,
			attack: 151,
			defense: 108
		},
		type: ["fire"],
		weaknesses: [
			"Ground",
			"Rock",
			"Water"
		],
		quickMoves: ["ember", "karate-chop"],
		chargeMoves: ["brick-break", "fire-punch", "flamethrower"],
		evolveTo: "magmar",
		fleeRate: 0.05
	},
	"raikou": {
		id: 243,
		egg: 0,
		buddy: 20,
		candy: 0,
		name: "Raikou",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/243.gif",
		stats: {
			stamina: 180,
			attack: 241,
			defense: 210
		},
		type: ["electric"],
		weaknesses: [
			"ground",
		],
		quickMoves: ["colt-switch", "thunder-shock"],
		chargeMoves: ["thunder", "wild-carge", "thunderbolt"],
		evolveTo: "",
		fleeRate: 0.04
	},
	"entei": {
		id: 244,
		egg: 0,
		buddy: 20,
		candy: 0,
		name: "Entei",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/244.gif",
		stats: {
			stamina: 230,
			attack: 235,
			defense: 180
		},
		type: ["fire"],
		weaknesses: [
			"ground",
			"rock",
			"water",
		],
		quickMoves: ["fire-spin", "fire-fang"],
		chargeMoves: ["overheat", "fire-blast", "flamethrower"],
		evolveTo: "",
		fleeRate: 0.04
	},
	"suicune": {
		id: 245,
		egg: 0,
		buddy: 20,
		candy: 0,
		name: "Suicune",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/245.gif",
		stats: {
			stamina: 200,
			attack: 180,
			defense: 235
		},
		type: ["water"],
		weaknesses: [
			"electric",
			"grass",
		],
		quickMoves: ["extrasensory", "snarl"],
		chargeMoves: ["water-pulse", "bubble-beam", "hydro-pump"],
		evolveTo: "",
		fleeRate: 0.04
	},
	"larvitar": {
		id: 246,
		egg: 10,
		buddy: 5,
		candy: 25,
		name: "Larvitar",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/246.gif",
		stats: {
			stamina: 100,
			attack: 115,
			defense: 93
		},
		type: ["rock", "ground"],
		weaknesses: [
			"fighting",
			"grass",
			"ground",
			"steel",
			"water",
			"ice",
		],
		quickMoves: ["rock-smash", "bite"],
		chargeMoves: ["ancient-power", "stomp", "crunch"],
		evolveTo: "Pupitar",
		fleeRate: 0.10
	},
	"pupitar": {
		id: 247,
		egg: 0,
		buddy: 5,
		candy: 100,
		name: "Pupitar",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/247.gif",
		stats: {
			stamina: 140,
			attack: 155,
			defense: 133
		},
		type: ["rock", "ground"],
		weaknesses: [
			"fighting",
			"grass",
			"ground",
			"steel",
			"water",
			"ice",
		],
		quickMoves: ["rock-smash", "bite"],
		chargeMoves: ["ancient-power", "dig", "crunch"],
		evolveTo: "Tyranitar",
		fleeRate: 0.07
	},
	"tyranitar": {
		id: 248,
		egg: 0,
		buddy: 5,
		candy: 0,
		name: "Tyranitar",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/248.gif",
		stats: {
			stamina: 200,
			attack: 251,
			defense: 212
		},
		type: ["rock", "dark"],
		weaknesses: [
			"fighting",
			"grass",
			"ground",
			"steel",
			"water",
			"bug",
			"fairy",
		],
		quickMoves: ["iron-tail", "bite"],
		chargeMoves: ["stone-edge", "fire-blast", "crunch"],
		evolveTo: "",
		fleeRate: 0.04
	},
	"lugia": {
		id: 249,
		egg: 0,
		buddy: 20,
		candy: 0,
		name: "Lugia",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/249.gif",
		stats: {
			stamina: 212,
			attack: 193,
			defense: 323
		},
		type: ["psychic", "flying"],
		weaknesses: [
			"dark",
			"ghost",
			"electric",
			"ice",
			"rock",
		],
		quickMoves: ["extrasensory", "dragon-tail"],
		chargeMoves: ["future-sight", "sky-attack", "hydro-pump"],
		evolveTo: "",
		fleeRate: 0.04
	},
	"ho-oh": {
		id: 250,
		egg: 0,
		buddy: 20,
		candy: 0,
		name: "Ho-oh",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/250.gif",
		stats: {
			stamina: 212,
			attack: 263,
			defense: 301
		},
		type: ["fire", "flying"],
		weaknesses: [
			"rock",
			"water",
			"electric",
		],
		quickMoves: ["extrasensory", "steel-wing"],
		chargeMoves: ["brave-bird", "fire-blast", "solar-beam"],
		evolveTo: "",
		fleeRate: 0.04
	},
	"celebi": {
		id: 251,
		egg: 0,
		buddy: 20,
		candy: 0,
		name: "Celebi",
		img: "https://s3.us-east-2.amazonaws.com/pokemongohub-db-web/normal-animated/251.gif",
		stats: {
			stamina: 200,
			attack: 210,
			defense: 210
		},
		type: ["psychic", "grass"],
		weaknesses: [
			"bug",
			"dark",
			"ghost",
			"flying",
			"fire",
			"ice",
			"poison"
		],
		quickMoves: ["confusion", "charge-beam"],
		chargeMoves: ["hyper-beam", "psychic", "dazzling-gleam"],
		evolveTo: "",
		fleeRate: 0.04
	},

};