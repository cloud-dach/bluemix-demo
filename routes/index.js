/*
 * GET home page.
 */

'use strict';

module.exports = function (app) {
    app.get('/', function (req, res) {
    	var fs = require("fs");
    	var file = __dirname + "";
    	var aboutmebuf = "";
    	var file = __dirname + "";
    	var theprojectbuf = "";
    	var file = __dirname + "";
    	var thedaybuf = "";
    	
        res.render('carousel', {
            'aboutme' : aboutmebuf,
            'theproject' : theprojectbuf,
            'theday' : thedaybuf
        });
    });
};