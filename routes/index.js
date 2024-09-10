var express = require('express');
const GetUrlRequest = require('../controller/getUrl');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
     GetUrlRequest(req,res,next)
});

module.exports = router;
