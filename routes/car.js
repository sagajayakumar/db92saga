var express = require('express');
var router = express.Router();
const car_controlers = require('../controllers/car');


/* GET costumes */
router.get('/', car_controlers.car_view_all_Page);
module.exports = router;