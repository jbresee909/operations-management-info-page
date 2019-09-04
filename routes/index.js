var express = require('express');
var unirest = require("unirest");
var router = express.Router();

// javascript file imports
var words = require('../public/javascripts/exampleDefinitions');


//ROUTES

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Operations Management - Home',
    words: words
  });
})

/* GET Random Definition */
router.get('/definitions', function(req, res, next) {
  res.render('definitions', {
    title: 'Operations Management - Definitions',
    words: words
  });
})

/* GET About Page */
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'Operations Management - About',
    words: words
  });
})

/* GET Definition of a searched word */
router.get('/dictionary/:word', function(req, res, next) {

  var word = req.params.word

  var req = unirest("GET", "https://wordsapiv1.p.rapidapi.com/words/" + word + "/definitions");
  var wordSearched = {}
  var definition = {}

  // Provide the api host and key to the server
  req.headers({
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    "x-rapidapi-key": "986702405amshcaabbc02abdfee2p104391jsn7df4ef122669"
  });

  // Send response back and render the template with the word and definition
  req.end(function (response) {
    if (response.error) {
      res.render('error', {
        title: 'Error Page'
      });
      return console.log('error')
    }; 
    
    if(response.body.word === undefined) {
      res.render('error', {
        title: 'Error Page'
      });
      return console.log('error')
    }
    
    wordSearched = response.body.word;
    definition = response.body.definitions[0].definition;
  
    res.render('display-definition', {
      title: 'Search- Definition',
      words: words,
      wordSearched: wordSearched,
      definition: definition
    });
  });
});


module.exports = router;
