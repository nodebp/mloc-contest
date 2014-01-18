"use strict";

var Stream = require("stream"),
    util = require("util");

function ConnectFour() {
  Stream.Transform.apply(this, arguments);
};

ConnectFour.prototype._transform = function _transform(chunk, encoding, callback) {
  // Do you magic here :)
}

util.inherits(ConnectFour, Stream.Transform);

module.exports = ConnectFour;
