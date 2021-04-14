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
exports.car_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await car.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.car_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await car.findById(req.query.id)
        res.render('cardetail', { title: 'car Detail', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
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

// for a specific Car.
exports.car_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await car.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.car_create_Page = function(req, res) {
    console.log("create view")
    try {
        res.render('carcreate', { title: 'car Create' });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a car.
// query provides the id
exports.car_update_Page = async function(req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await car.findById(req.query.id)
        res.render('carupdate', { title: 'Car Update', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.car_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await car.findById(req.query.id)
        res.render('cardelete', { title: 'car Delete', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle car update form on PUT.
exports.car_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await car.findById(req.params.id)
            // Do updates of properties
        if (req.body.Name) toUpdate.Name = req.body.Name;
        if (req.body.Company) toUpdate.Company = req.body.Company;
        if (req.body.Price) toUpdate.Price = req.body.Price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};