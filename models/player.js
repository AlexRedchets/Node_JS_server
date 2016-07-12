//dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//schema
var playerSchema = new mongoose.Schema({
	position: String,
	team: String,
	number: Number,
	birthdate: String,
	birthplace: String,
	imageUrl: String,
	height: Number,
	weight: Number,
	name: String,
	create_date:{
		type: Date,
		default: Date.now
	}
});

//return models
module.exports = restful.model('player', playerSchema);
