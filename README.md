# godex.js
The godex is a javascript library full of Pokemon Go data.   
_Note: `v1.3.3` and below will break when upgraded to `v1.4.5+`_.  
_Note: `v1.4.5` and below will break when upgraded to `v2.0.0+`_.  

---

### Build

Requirements: `gulp`, `gulp-concat`, `gulp-minify`.
If you have these installed globally, you're set. If not, run `npm install` inside the root directory.

To build:
```
$ cd /path/to/godex
$ gulp
```

---

### Install
##### Bower   
```
$ cd your/app/directory
$ bower install godex --save
```
##### NPM
```
$ cd your/app/directory
$ npm install godex --save
```
##### Download
Alternatively, download the repo and use the files that way!

---

### Useage

##### Browser
```
<script src="/path/to/godex.min.js"></script>
```
Add script before your other scripts in your HTML. Exports as `dex`.

##### Node
`var dex = require('godex');`

---

### Methods
_Variables passed in [] are optional._

##### `Go([location], thing)`
The main function, this is your bread and butter.

`var bulbasaur = Go("Bulbasaur");`   
*(If location is blank, assumes thing is pokemon.)*
```
{
    id: 1,
    egg: 2,
    candy: 25,
    key: 'bulbasaur',
    name: 'Bulbasaur',
    maxCP: 1071,
    cpm: [1.53, 1.58],
    stats: {
        stamina: 90,
        attack: 126,
        defense: 126
    },
    type: ['grass', 'poison'],
    quickMoves: [{
        name: 'Tackle',
        moveType: 'quick',
        type: 'normal',
        attack: 12,
        cooldown: 1.1,
        energy: 10,
        key: 'tackle',
        dps: 10.91,
        dpsGym: 3.87
    }, {
        name: 'Vine Whip',
        moveType: 'quick',
        type: 'grass',
        attack: 8.75,
        cooldown: 0.65,
        energy: 7,
        key: 'vine-whip',
        dps: 13.46,
        dpsGym: 3.3,
        stab: true
    }],
    chargeMoves: [{
        name: 'Power Whip',
        moveType: 'charge',
        type: 'grass',
        charges: 1,
        cooldown: 2.8,
        dodge: 1.3,
        critical: 0.25,
        attack: 87.5,
        key: 'power-whip',
        dps: 31.25,
        dpsGym: 18.23,
        stab: true
    }, {
        name: 'Seed Bomb',
        moveType: 'charge',
        type: 'bug',
        charges: 3,
        cooldown: 2.4,
        dodge: 0.5,
        critical: 0.05,
        attack: 40,
        key: 'seed-bomb',
        dps: 16.67,
        dpsGym: 9.09
    }, {
        name: 'Sludge Bomb',
        moveType: 'charge',
        type: 'poison',
        charges: 2,
        cooldown: 2.6,
        dodge: 0.5,
        critical: 0.05,
        attack: 68.75,
        key: 'sludge-bomb',
        dps: 26.44,
        dpsGym: 14.95,
        stab: true
    }],
    _: {
        candy: 0,
        quickMove: 'vine-whip',
        chargeMove: 'power-whip',
        powered: false,
        strongHP: false,
        strongAtk: false,
        strongDef: false,
        cp: 478,
        hp: 53,
        dust: 2500
    },
    resistance: {
        electric: 0.8,
        grass: 0.64,
        ground: 1,
        water: 0.8,
        bug: 1,
        fire: 1.25,
        flying: 1.25,
        ice: 1.25,
        poison: 1,
        fairy: 0.8,
        fighting: 0.8,
        psychic: 1.25
    },
    evolveTo: 'ivysaur',
    evolveEnd: 'venusaur',
    tree: {
        stages: 1,
        current: 1,
        evolveTo: {
            id: 2,
            egg: 0,
            candy: 100,
            name: 'Ivysaur',
            cpm: [Object],
            stats: [Object],
            type: [Object],
            quickMoves: [Object],
            chargeMoves: [Object],
            evolveFrom: 'bulbasaur',
            evolveTo: 'venusaur'
        },
        evolveFrom: 0,
        evolveStart: 0,
        evolveEnd: {
            id: 3,
            egg: 0,
            candy: 0,
            name: 'Venusaur',
            stats: [Object],
            type: [Object],
            quickMoves: [Object],
            chargeMoves: [Object],
            evolveFrom: 'ivysaur'
        }
    },
    dueling: [
        {
            quick: 'vine-whip',
            charge: 'sludge-bomb',
            offense: 224885,
            defense: 777689035,
            dueling: 2550196489,
            toweave: true,
            noweave: 1346,
            weave: 1784,
            gymweave: 544,
            defenseGrade: 83,
            offenseGrade: 100
        }, {
            quick: 'vine-whip',
            charge: 'power-whip',
            offense: 219806,
            defense: 676298548,
            dueling: 2492605664,
            toweave: true,
            noweave: 1346,
            weave: 1744,
            gymweave: 473,
            defenseGrade: 33,
            offenseGrade: 83
        }, {
            quick: 'tackle',
            charge: 'sludge-bomb',
            offense: 198526,
            defense: 844147241,
            dueling: 2251291734,
            toweave: true,
            noweave: 1091,
            weave: 1575,
            gymweave: 590,
            defenseGrade: 100,
            offenseGrade: 66
        }, {
            quick: 'tackle',
            charge: 'power-whip',
            offense: 187697,
            defense: 749923816,
            dueling: 2128491509,
            toweave: true,
            noweave: 1091,
            weave: 1489,
            gymweave: 524,
            defenseGrade: 66,
            offenseGrade: 50
        }, {
            quick: 'vine-whip',
            charge: 'seed-bomb',
            offense: 187050,
            defense: 653551415,
            dueling: 2121152987,
            toweave: true,
            noweave: 1346,
            weave: 1484,
            gymweave: 457,
            defenseGrade: 16,
            offenseGrade: 33
        }, {
            quick: 'tackle',
            charge: 'seed-bomb',
            offense: 165319,
            defense: 749900954,
            dueling: 1874718095,
            toweave: true,
            noweave: 1091,
            weave: 1312,
            gymweave: 524,
            defenseGrade: 50,
            offenseGrade: 16
        }
    ]
}
```

#### *For more options, browse testing.js.*

### Contribute

Fork me and open up a pull request, or just shoot me an email - me [at] yayramen.com - I'd love the help!   
Version guide:

- +0.0.1 for patches/minor things
- +0.1.0 for new feature
- +1.0.0 for something drastic!


---


### Contributors

- [xssc](https://github.com/xssc)

---

### Built with godex

- [pogoto](http://pogo.to) - pokemon review tool
