/**
 * Created by increment on 21.08.16.
 */
var mg = require('../index');

let usersSchema = new mg.Schema({
	firstname: {type: String},
	lastname: {type: String},
	email: {type: String},
	password: {type: String},
	token: {type: String}
});

let usersDB = mg.model('Users', usersSchema);

module.exports = usersDB;