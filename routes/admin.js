var router = require('express').Router();
var path = require('path');

router.get('/', function(req, res){
  var createPath = path.join(__dirname, '../public/views/admin/index.html');
  res.sendFile(createPath);
})

module.exports = router;
