var generate = require('./lib/generator');
var vocab = require('./lib/vocabulary');
var merge = require('lodash/merge');
var values = require('lodash/fp/values');
var flatten = require('lodash/fp/flatten');
var get = require('lodash/fp/get');
var flow = require('lodash/fp/flow');
var random = require('lodash/random');

var getNouns = get('nouns');
var getSimiles = get('similies');
var getAllPhrases = flow(
  function(data) {
    return merge({}, getNouns(data), getSimiles(data));
  },
  values,
  flatten
);

var phrases = getAllPhrases(vocab);

module.exports = function(robot) {
  robot.respond(/shades\s(?:me)\s?(\d+)?/, function(res) {
    var count = Number(res.match[1]) || 1;
    return res.send(generate(count));
  });

  robot.respond(/shade me/, function(res) {
    return res.send(phrases[random(0, phrases.length)]);
  });
};
