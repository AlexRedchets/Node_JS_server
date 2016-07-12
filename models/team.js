//dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//schema
var teamSchema = new mongoose.Schema({
	flag: String,
	name: String,
	head_coach: String,
	captain: String,
	header_pic: String
});

//return models
module.exports = restful.model('team', teamSchema);
