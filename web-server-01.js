var http = require('http');
console.log('about to build a web server');
var counter = 0;
http.createServer(function(request,response){
	counter++;
	console.log('request has come in')
	response.writeHead(200,{
		'Content-Type':'text/plain'
	})
	response.end('Server responding = ' + counter + ' requests')

}).listen(8080,'127.0.0.1')

function pushToScreen (){
	response.writeHead(200,{})
}