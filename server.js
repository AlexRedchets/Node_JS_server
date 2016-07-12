//dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var scribe = require('./node_modules/scribe-js/scribe')();
var console = process.console;

//Connect to mongoDB
mongoose.connect('mongodb://localhost/national_team');

//express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('images'));
app.use(express.static('Pictures'));

//routes
app.use('/api', require('./routes/api'));

app.get('/api/player/:name', function(req, res){
	var Player = require('./models/player');
	Player.find({national_team:req.params.name},function(err, players){
		if(err || !players){
			console.dir('Error in searching team');
			res.send('Error in searching team');
		}
		else{
			console.dir('Players found');
			res.send(players);
		}
	});
});

app.post('/api/player/search', function(req, res){
	var Player = require('./models/player');
	Player.findOne({name:req.body.name},function(err, player){
		if(err || !player){
			console.dir('Error in searching player');
			req.body.name = null;
			res.send(req.body);
		}
		else{
			console.dir('Player found');
			res.send(player);
		}
	});
});

app.post('/api/login', function(req, res){
	var User = require('./models/user');
	User.findOne({username:req.body.username, password:req.body.password}, function(err,response){
		if (err || !response) {
			req.body.username = null;
			console.dir(req.body);
			res.send(req.body);}
		else {
			console.dir(req.body);
			res.send(req.body);}
	});
});

app.post('/api/registration', function(req, res){
	var User = require('./models/user');
	User.findOne({username:req.body.username}, function(err, response){
		if(response){
			req.body.username = null;
			console.dir(req.body);
			res.send(req.body);
		}
		else{
			var newUser = new User({username:req.body.username, password:req.body.password});
			newUser.save(function (err){
				if (err) {
					console.log ('Error on save!');
					req.body.username = null;
					console.dir(req.body);
					res.send(req.body);
				}
				else{
					console.log ('all good!');
					res.send(req.body);
				}
			});

		}
	});

});

//start server
app.listen(8080);
console.log('Server is running on port 8080');