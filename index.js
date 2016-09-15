var generate = require('./lib/generator');

module.exports = function(robot) {
  robot.respond(/shade(?:s)?\s(?:me)\s?(\d+)?/, function(res) {
    var count = Number(res.match[1]) || 1;

    return res.send(generate(count));
  });
};
