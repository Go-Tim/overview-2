var request = require('request');
var fs = require('fs');
var expect = require('chai').expect;

describe('server', function() {

  before(function(done) {
    // Before all of the tests run, reset the dogs.txt file with these dogs
    // This means the test will destroy all of the dogs you already saved. :(
    var dogs = ['Lucky, Beagle, HJiJmXH4Z', 
      'Casey, unknown, SkeoyQXHNZ',
      'Scout, Husky, r1-s1Q7rNA',
      'Midnight, Labrador, SyMsy7XHNb',
      'Marley, French Bulldog, ryXoJQmHEZ',
    ];

    fs.writeFile(__dirname + '/../data/dogs.txt', dogs.join('\n') + '\n' , function(err) {
      if(err) {
        throw err;
      } else {
        done();
      }
    });
  })

  describe('basic server', function() {
    // If you are getting a timeout error here, what does that mean?
    it('Should respond', function(done) {
      request('http://127.0.0.1:3000/', function(error, response, body) {
        // If you are getting a connection refused error here, what does that mean?
        expect(error).to.not.exist;
        done();
      });
    });
  });

  describe('GET requests to /api/dogs', function() {
    it('should respond with a 200 status code', function(done) {
      request('http://127.0.0.1:3000/api/dogs', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    xit('should indicate what type of data the response body contains', function(done) {
      request('http://127.0.0.1:3000/api/dogs', function(error, response, body) {
        expect(response.headers).to.have.own.property('content-type', 'application/json');
        done();
      });
    });

    xit('should send back parsable stringified JSON', function(done) {
      request('http://127.0.0.1:3000/api/dogs', function(error, response, body) {
        expect(JSON.parse.bind(this, body)).to.not.throw();
        done();
      });
    });

    xit('should send back an array', function(done) {
      request('http://127.0.0.1:3000/api/dogs', function(error, response, body) {
        var parsedBody = JSON.parse(body);
        expect(parsedBody).to.be.an('array');
        done();
      });
    });

    xit('should send an array containing dog objects', function(done) {
      request('http://127.0.0.1:3000/api/dogs', function(error, response, body) {
        var parsedBody = JSON.parse(body);
        expect(parsedBody).to.be.an('array');
        expect(parsedBody[0]).to.be.an('object');
        done();
      });
    });

    xit('should send an array containing dog objects that have name, breed, id', function(done) {
      request('http://127.0.0.1:3000/api/dogs', function(error, response, body) {
        var parsedBody = JSON.parse(body);
        expect(parsedBody).to.be.an('array');
        expect(parsedBody[0]).to.be.an('object');
        expect(parsedBody[0]).to.have.keys('name', 'id', 'breed');
        done();
      });
    });
  });

  describe('GET requests to /api/dogs/:id', function() {
    it('should respond with a 200 status code', function(done) {
      request('http://127.0.0.1:3000/api/dogs/r1-s1Q7rNA', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    xit('should send back parsable stringified JSON', function(done) {
      request('http://127.0.0.1:3000/api/dogs/r1-s1Q7rNA', function(error, response, body) {
        expect(JSON.parse.bind(this, body)).to.not.throw();
        done();
      });
    });

    xit('should send back an object', function(done) {
      request('http://127.0.0.1:3000/api/dogs/r1-s1Q7rNA', function(error, response, body) {
        var parsedBody = JSON.parse(body);
        expect(parsedBody).to.be.an('object');
        done();
      });
    });

    xit('should send a dog object that has name, breed, id', function(done) {
      request('http://127.0.0.1:3000/api/dogs/r1-s1Q7rNA', function(error, response, body) {
        var parsedBody = JSON.parse(body);
        expect(parsedBody).to.be.an('object');
        expect(parsedBody).to.have.keys('name', 'id', 'breed');
        done();
      });
    });

    xit('should respond to requests for nonexistent dogs with a 404', function(done) {
      request('http://127.0.0.1:3000/api/dogs/fakeid123', function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('POST requests to /api/dogs', function() {
    it('should accept POST requests to /api/dogs', function(done) {
      var requestParams = {
        method: 'POST',
        uri: 'http://127.0.0.1:3000/api/dogs',
        json: {
          name: 'Chewbacca',
          breed: 'Yorkshire Terrier'
        }
      };

      request(requestParams, function(error, response, body) {
        expect(response.statusCode).to.equal(201);
        done();
      });
    });

    xit('should respond with dogs that were previously posted', function(done) {
      var requestParams = {
        method: 'POST',
        uri: 'http://127.0.0.1:3000/api/dogs',
        json: {
          name: 'Missy',
          breed: 'Toy Manchester Terrier'
        }
      };

      // First, POST TO /api/dogs
      request(requestParams, function(error, response, body) {
        // Now if we request all dogs, that dog we posted should be there:
        request('http://127.0.0.1:3000/api/dogs', function(error, response, body) {
          var dogs = JSON.parse(body);
          // Find the dog with the name Missy
          var missy = dogs.find(dog => dog.name === 'Missy');
          // Check that it has the properties we expect
          expect(missy).to.have.own.property('name', 'Missy');
          expect(missy).to.have.own.property('breed', 'Toy Manchester Terrier');
          expect(missy).to.have.own.property('id');
          done();
        });
      });
    });
  });

  xdescribe('advanced server', function () {
    it('Should 404 when asked for a nonexistent endpoint', function(done) {
      request('http://127.0.0.1:3000/arglebargle', function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

    it('Should serve the index.html', function(done) {
      request('http://127.0.0.1:3000/', function(error, response, body) {
        // just looking for a phrase from the index.html
        expect(body).to.contain('Dog API Guide');
        done();
      });
    });

    it('Should serve the css', function(done) {
      request('http://127.0.0.1:3000/style.css', function(error, response, body) {
        // just looking for a section of the css
        expect(body).to.contain('background-color');
        done();
      });
    });
  });

});