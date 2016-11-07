# godex.js
The godex is a javascript library full of Pokemon Go data.

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
  // User Input
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
  id: 1,
  egg: 2,
  candy: 25,
  name: 'Bulbasaur',
  cpm: [ 1.53, 1.58 ],
  stats: { stamina: 90, attack: 126, defense: 126 },
  type: [ 'grass', 'poison' ],
  moves: {
    quick: {
      tackle: [Object],
      'vine-whip': [Object]
    },
    charge: {
      'power-whip': [Object],
      'seed-bomb': [Object],
      'sludge-bomb': [Object]
    }
  },
  maxCP: 1071,
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
  }
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
- [jeff-wolff](https://github.com/jeff-wolff)

---

### Built with godex

- [pogoto](http://pogo.to) - pokemon review tool
