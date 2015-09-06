var express = require('express');
var router = express.Router();

//var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert', function(req, res, next) {
  var email = req.body.email;
  console.log('recebendo email:',email);

//fs.writeFile("bd_temp.txt", "Hey there txt!", function(err) {
/* 	fs.appendFile('bd_temp.txt',  ';'+email, function (err) {
		if(err) {
			return console.log(err);
		}

		console.log("EMAIL SALVO", email);
	});    */

  res.render('index', { title: 'Seu e-mail foi cadastrado com sucesso.' });
});


router.get('/show', function(req, res, next) {
/* 	fs.readFile('bd_temp.txt', function (err, data) {
	  if (err) throw err;
	  console.log(data);
	  res.render('show', { bd: data });
	}); */

  
});


module.exports = router;
