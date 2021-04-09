var express = require('express');
var router = express.Router();
// Require controller modules
var api_controller = require('../controllers/api');
var car_controller = require('../controllers/car');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// car ROUTES ///
// POST request for creating a car.
router.post('/car', car_controller.car_create_post);
// DELETE request to delete car.
router.delete('/cars/:id', car_controller.car_delete);
// PUT request to update car.
router.put('/car/:id', car_controller.car_update_put);
if (req.body.checkboxsale) toUpdate.sale = true;
else toUpdate.same = false;

// GET request for one car.
router.get('/car/:id', car_controller.car_detail);
// GET request for list of all car items.
router.get('/car', car_controller.car_list);
module.exports = router;