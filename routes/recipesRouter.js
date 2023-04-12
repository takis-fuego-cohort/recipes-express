const router = require('express').Router();
const recipeController = require('../controllers/recipeController')

// 7 RESTFUL routes
// index: list all of a collection
// /recipes
router.get('/', recipeController.index)
// show: display just one
// /recipes/:id
// new: display the form to create a recipe
router.get('/new', recipeController.new)
// create: add a new one to the collection
router.post('/', recipeController.create)
// create route: POST /
router.delete('/:id', recipeController.delete)
// delete route: DELETE localhost:3000/recipes/:id

// edit route: GET /recipes/:id/edit
// show a form letting the user edit an individual thing
// pre-fill the form with the existing data

// update route: PUT /recipes/:id
// process the information from the edit form
// REPLACE the existing data in the model's array
// redirect back somewhere
module.exports = router; 