var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('car', { title: 'Search Results for Car' });
});

module.exports = router;