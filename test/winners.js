"use strict";

var Klass = require( "../" );
var concat = require( "concat-stream" );
var should = require( "should" );
var fixtures = require( "./fixtures" );

describe( "the interface", function(){
  beforeEach(function(){
    this.klass = new Klass();
  });

  it( "should have a winner", function( done ){
    var c = concat(function( result ){
      should.exist( result );
      result.toString().should.equal( "a" );
      done();
    });
    this.klass.pipe( c );
    this.klass.write( "1 1 2 2 3 3 4" );
    this.klass.end();
  });

  it( "should not have a winner", function( done ){
    var c = concat(function( result ){
      result.toString().should.exactly( "" );
      done();
    });
    this.klass.pipe( c );
    this.klass.write( "1" );
    this.klass.end();
  });
});

describe( "Alice should won", function(){
  beforeEach(function(){
    this.klass = new Klass();
  });
  fixtures.a.forEach( function( fixture ){
    it( "using steps: " + fixture.join( "" ), function( done ){
      var c = concat( function( result ){
        should.exist( result );
        result.toString().should.equal( "a" );
        done();
      });
      this.klass.pipe( c );
      fixture.forEach( function( chunk ){
        this.klass.write( chunk );
      }, this);
      this.klass.end();
    });
  });
});

describe( "Bob should won", function(){

});
