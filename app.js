module.exports = function () {

	var express = require('express');
	var app = express();
	var bodyParser = require('body-parser');
	var request = require('request');
	var path = require('path');
	var ejs = require('ejs');

	//Globals
	global.keys = require('./config/keys.js');

	function setUpFEServices() {
		try {
			if (process.env["CLOUDBOOST_USER_SERVICE_SERVICE_HOST"]) {
				global.keys.frontendServerUrl = "http://" + process.env["CLOUDBOOST_USER_SERVICE_SERVICE_HOST"] + ":" + process.env["CLOUDBOOST_USER_SERVICE_SERVICE_PORT"];
			}

			console.log("FE Services URL : " + global.keys.frontendServerUrl);

		} catch (err) {
			console.log('Setup user service error', err)
		}
	}

	setUpFEServices()

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	//View engine setup
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'ejs');
	app.use('*/public/',express.static(path.join(__dirname, 'public')));

	//Usefull functions for ejs
	app.locals.nospacelowcase = function (text) {
		return (text.toLowerCase()).replace(/\s+/g, '');
	};

	//Routers
	var routes = require('./routes/routes');
	app.use('/', routes);

	return app;
}