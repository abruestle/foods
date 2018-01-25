// 3. Inside the `burgers_controller.js` file, import the following:

// * Express
// * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

var foods = require("./../models/foods");
var express = require("express");

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  foods.all(function(data) {
    var hbsObject = {
      foods: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/foods", function(req, res) {
  foods.create([
    "food_name", "allergens"
  ], [
    req.body.food_name, req.body.allergens
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/foods/:id", function(req, res) {
  console.log("That was the put");
  console.log(req.body);
  console.log("------");
  console.log(req.params);
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  foods.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/foods/:id", function(req, res) {
  console.log("That was the delete");
  var condition = "id = " + req.params.id;

  foods.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
