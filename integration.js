var http = require('http');
var https = require('https');
var fs = require('fs');
var xml2js = require('xml2js');
var username = 'puaberg@yahoo.se';
var password = 'edgeguidestuds';
var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
var highrisedeals = { 	
					host: 'froxy.highrisehq.com',
    				path: '/deals.xml',
				    headers: {
				     'Authorization': 'Basic cHVhYmVyZ0B5YWhvby5zZTplZGdlZ3VpZGVzdHVkcw=='
				    }
		};
console.info(highrisedeals);


function checkupdate() { 
	var parser = new xml2js.Parser(); 

	http.request(highrisedeals, function(resp){
		console.log(resp.statusCode);
		resp.on('data', function(chunk){
			console.log(string);
			//var string = parser.parseString(chunk); 
			console.log(chunk);
		});
	}).on("error", function(e){
	  console.log("Got error: " + e.message);
	});

    console.log('Echo');
}

setInterval(checkupdate, 2000);