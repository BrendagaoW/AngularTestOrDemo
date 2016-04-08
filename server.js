var express = require('express');
var server = express();

var bodyPaser = require('body-parser');

server.use(express.static(__dirname));
server.use(bodyPaser.json());

var port = process.env.EXPRESS_PORT || 9090;
server.listen(port);

console.log('Server is listening at', port);



var results = [];

server.get('/getRegions', function(req, res){
	res.send(['锦江', '武侯' , '高新']);
});

server.get('/getTypes', function(req, res){
	res.send(['买房', '租房']);
});

server.post('/getSearchResults', function(req, res) {

	var homeInformations = [
		{region : '锦江', type : '买房', name : '张三'},
		{region : '锦江', type : '租房', name : '李四'},
		{region : '武侯', type : '买房', name : '王五'},
		{region : '武侯', type : '租房', name : '赵六'},
		{region : '高新', type : '买房', name : '吴七'},
		{region : '高新', type : '租房', name : '张三'}
	];
	
	var searchResult = homeInformations.filter(function(item) {
		if((req.body.region === undefined || item.region === req.body.region) &&
			(req.body.type === undefined || item.type === req.body.type)) {
				return item;
			}
	})
	res.send(searchResult);
});