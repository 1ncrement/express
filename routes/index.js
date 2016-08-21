/**
 * Created by increment on 21.08.16.
 */

var express = require('express'),
	path = require('path'),
	router = express.Router();

router.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = router;