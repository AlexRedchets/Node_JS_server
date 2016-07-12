//dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//schema
var userSchema = new mongoose.Schema({
	username: String,
	password: String
});

//return models
module.exports = restful.model('users', userSchema);
