const car = require('../models/car');

// List of all car
exports.car_list = async function(req, res) {
    try {
        theCars = await car.find();
        res.send(theCars);
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }

};

// for a specific car.
exports.car_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: car detail: ' + req.params.id);
};

// Handle car create on POST.
exports.car_create_post = async function(req, res) {
    console.log(req.body)
    let document = new car();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.Name = req.body.Name;
    document.Company = req.body.Company;
    document.Price = req.body.Price;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};

// Handle car delete form on DELETE.
exports.car_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: car delete DELETE ' + req.params.id);
};

// Handle car update form on PUT.
exports.car_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.car_view_all_Page = async function(req, res) {
    try {
        theCar = await car.find();
        res.render('car', { title: 'cars Search Results', results: theCar });
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};