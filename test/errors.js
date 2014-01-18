var Klass = require( "../" );
var should = require( "should" );
describe( "the interface", function(){
  beforeEach(function(){
    this.klass = new Klass();
  });

  describe( "non integer values should raise error", function(){
    it( "strings", function( done ){
      this.klass
        .on( "error", function( err ){
          should.exist( err );
          err.should.be.an.instanceOf( Error );
          done();
        })
        .write( "foo" );
    });
    it( "symbols", function( done ){
      this.klass
        .on( "error", function( err ){
          should.exist( err );
          err.should.be.an.instanceOf( Error );
          done();
        })
        .write( "#?" );
    });
    it( "even accented characters", function( done ){
      this.klass
        .on( "error", function( err ){
          should.exist( err );
          err.should.be.an.instanceOf( Error );
          done();
        })
        .write( "árvíztűrőtükörfúrógép" );
    });
  });

  it( "should accept the first value and throw error on the next one", function( done ){
    // FIXME i don't know which values should trigger error (@oroce)
    var fn = function(){
      this.klass
        .once( "error", function( err ){
          should.exist( err );
          err.should.be.an.instanceOf( Error );
          done();
        })
      this.klass.write( "WRONG VALUE" );
    }.bind( this );
    var result = this.klass.write( "1" );
    // if result is false then we should wait until drain event emitted
    // this makes sure the solution throws error, this saves us from false negative and positive
    // solutions
    if( result === false ){
      return this.klass
        .once( "drain", fn );
    }
    fn();
  });

});