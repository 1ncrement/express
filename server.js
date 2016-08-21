/**
 * Created by increment on 21.08.16.
 */
var path = require('path'),
	http = require('http'),
	config = require('./config'),
	bodyParser = require('body-parser'),

	express = require('express'),
	app = express(),
	router = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.use((err, req, res, next) => {
	res.status(err.status || 500).json({
		error: {
			status: err.status,
			message: err.message
		}
	});
});

app.listen(config.server.port, ()=>{
	console.info(`Listening on port ${config.server.port} http://localhost:${config.server.port}/`);
});