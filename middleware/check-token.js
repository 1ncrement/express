/**
 * Created by increment on 21.08.16.
 */
var UserSchema = require('../mongoose/models/users'),
	statusErrors = require('status-errors');

module.exports = (req, res, next) => {
	if(!!req.headers.token){
		UserSchema.findOne({
			"token": req.headers.token
		})
			.then((data)=>{
				if(!data){
					res.json({err: 'sorry bro!'});
				}else{
					next()
				}
			})
			.catch((err)=>{
				res.json(err)
			});
	}else{
		res.end();
	}
};