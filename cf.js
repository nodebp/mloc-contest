"use strict";

var Stream = require("stream"),
    util = require("util");

function ConnectFour() {
  Stream.Transform.apply(this, arguments);
}

util.inherits(ConnectFour, Stream.Transform);

ConnectFour.prototype._transform = function _transform(chunk, encoding, callback) {
  // Do you magic here :)
};


module.exports = ConnectFour;
