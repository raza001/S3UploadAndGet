var express = require('express');
const PutUrlRequest = require('../controller/putUrl');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
       PutUrlRequest(req,res,next)
});

module.exports = router;
