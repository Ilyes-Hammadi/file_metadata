var express = require('express');
var multer = require('multer');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.post('/', multer({ dest: './uploads/'}).single('upl'), function(req,res){
	res.json({
    fileSize: req.file.size
  })
});

module.exports = router;
