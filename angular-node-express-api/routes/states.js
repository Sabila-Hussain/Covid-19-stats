var express = require('express');
var router = express.Router();
var fs = require('fs');
const fetch = require("node-fetch");
// console.log(dataPath);
/* GET users listing. */
const path = "data/statesdata.json";

router.get('/', async function( req, res, next) {

    const api_url = 'https://covidtracking.com/api/states';
    const response = await fetch (api_url);
    const data = await response.json();
    
    fs.writeFileSync(path, JSON.stringify(data), err => { 
    // Checking for errors 
        if (err) throw err;  

   // Success 
    }); 
      
    const stats = require('../data/statesdata.json');
    res.json(stats);
    
});

module.exports = router;