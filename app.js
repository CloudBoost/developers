module.exports = function(){

	var express = require('express');
	var app = express();
	var bodyParser = require('body-parser');
	var request = require('request');
	var path = require('path');
	var ejs = require('ejs');

	//Globals
	global.keys = require('./config/keys.js');

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	//View engine setup
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'ejs');
	app.use(express.static(path.join(__dirname, 'public')));

	//Usefull functions for ejs
	app.locals.nospacelowcase=function(text){
		return (text.toLowerCase()).replace(/\s+/g, '');
	};

	//Routers
	var routes = require('./routes/routes');
	app.use('/', routes);
	
	return app;
}