/**
 * Created by increment on 21.08.16.
 */
var mg = require('mongoose'),
	path = require('path'),
	config = require('../config');

mg.connect(config.mongoose.uri);

module.exports = mg;