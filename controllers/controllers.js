//ROutng function 

var express - require('express');
var router = express.router();
var burgers = require('../models/burger.js');

//Route for the root 
route.get('/burgers', function (req, res){
	res.redirect('/burgers'); 
}); 

//ROUTE FOR THE BURGERS WHICH CREATES WITH THE BURGERS DATA AND RENDERS IN USING HANDLEBARS
router.get('/burgers', function(req, res){ 
	burger.all(function(data){
		var hbsObject ={
			burger: data
		};
		//console.log(hbsObjects); 
		res.render('index', hbsObjects);
	});

	//POST ROUTE WHICH POST A BURGER NAME
	route.post('/burgers/create', function(req, res){
		console.log(req.body.name); 
		console.log(req.body.devoured);
		burgers.create['name', 'devoured'], [req.body.name, req.body.devoured], fucntion(){
			res.redirect('/burgers');
		});
});

//PUT ROUTE
router.delete('burgers/clean/:id', function(req, res){
	var condition ='id = ' + req.params.id;

	console.log('burgers', condition);

	burgers.clean(condition, function(){
		res.redirect('/burgers');
	});
});

module.exports = router;