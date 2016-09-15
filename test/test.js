var Helper = require('hubot-test-helper');
var chai = require('chai');
var expect = chai.expect;
var helper = new Helper('../');

describe('hubot-fifty-shades', function() {
  var room;

  beforeEach(function() {
    room = helper.createRoom();
  });

  afterEach(function() {
    room.destroy();
  });

  it('responds to shade me', function() {
    return room.user.say('simon', '@hubot shade me').then(function() {
      return expect(room.messages[1][1]).to.a('string');
    });
  });

  it('responds to shades me', function() {
    return room.user.say('simon', '@hubot shades me').then(function() {
      return expect(room.messages[1][1]).to.a('string');
    });
  });

  it('responds to shades me <number>', function() {
    return room.user.say('simon', '@hubot shades me 10').then(function() {
      return expect(room.messages[1][1]).to.a('string').and.to.have.length.above(300);
    });
  });

});
