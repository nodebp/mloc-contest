"use strict";

var Klass = require( "../" );
var Stream = require( "stream" );

describe( "the interface", function(){
  beforeEach(function(){
    this.klass = new Klass();
  });

  it( "should be a instanceof Stream.Transform", function(){
    this.klass.should.be.an.instanceOf( Stream.Transform );
  });
});
