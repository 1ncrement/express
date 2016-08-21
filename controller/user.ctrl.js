/**
 * Created by increment on 21.08.16.
 */
let userExportObject = {};

var UserSchema = require('../mongoose/models/users'),
	statusErrors = require('status-errors');

userExportObject.login = (req, res, next)=>{
	UserSchema.findOne({
		"email": req.body.email
	})
		.then((data)=>{
			data.token = 'succesToken';
			data.save();
			res.json(data);
		})
		.catch((err)=>{
			res.json(err);
		});
};

userExportObject.getUsers = (req, res, next)=>{
	UserSchema.find({})
		.then((data)=>{
			res.json(data);
		})
		.catch((err)=>{
			res.json(err);
		});
};

userExportObject.registerUser = (req, res, next)=>{
	let body = req.body;

	let user = new UserSchema({
		firstname: body.fname,
		lastname: body.lname,
		email: body.email,
		password: body.pass
	});

	user.save()
		.then((data)=>{res.json(data)})
		.catch((err)=>{res.json(err)});
};

userExportObject.findUserId = (req, res, next)=>{
	UserSchema.findOne({
		"_id": req.params.id
	})
		.then((data)=>{
			res.json(data);
		})
		.catch((err)=>{
			res.json(err);
		});
};

userExportObject.editUserId = (req, res, next)=>{
	let body = req.body;

	UserSchema.findOneAndUpdate({
		"_id": body.id
	},{
		$set: {
			"firstname": body.fname
		}
	})
		.then((data)=>{
			res.json(data);
		})
		.catch((err)=>{
			res.json(err);
		});
};

module.exports = userExportObject;