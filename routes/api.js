////dependencies
var express = require('express');
var router = express.Router();

//get models
var Player = require('../models/player');
var Team = require('../models/team');

//routes
Player.methods(['get', 'post', 'put', 'delete']);
Player.register(router, '/player');
Team.methods(['get', 'post', 'put', 'delete']);
Team.register(router, '/team');

//return router
module.exports = router;