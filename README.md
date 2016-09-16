# hubot-fifty-shades

[![Build Status](https://travis-ci.org/simonsmith/hubot-fifty-shades.svg?branch=master)](https://travis-ci.org/simonsmith/hubot-fifty-shades)

Generates sentences taken from http://www.fiftyshadesgenerator.com/

Full credit goes to the author of https://github.com/50shadesgen/50shadesgen

## Installation

In hubot project repo, run:

`npm install hubot-fifty-shades --save`

Then add **hubot-fifty-shades** to your `external-scripts.json`:

```json
[
  "hubot-fifty-shades"
]
```

## Sample Interaction

```
simon>> shade me
hubot>> <one random phrase>
```

```
simon>> shades me
hubot>> <one sentence of generated text>
```

```
simon>> shades me 5
hubot>> <five sentences of generated text>
```

## NPM Module

https://www.npmjs.com/package/hubot-fifty-shades
