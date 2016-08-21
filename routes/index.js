/**
 * Created by increment on 21.08.16.
 */

var express = require('express'),
	path = require('path'),
	router = express.Router(),
	userCtrl = require('../controller/user.ctrl'),
	checkToken = require('../middleware/check-token');

router.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname, '../index.html'));
});

router.post('/login', userCtrl.login);
router.get('/getusers', checkToken, userCtrl.getUsers);
router.post('/reguser', userCtrl.registerUser);
router.get('/finduserid/:id', userCtrl.findUserId);
router.post('/edituserid', userCtrl.editUserId);

module.exports = router;