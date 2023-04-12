const router = require('express').Router();
const recipeController = require('../controllers/recipeController')

// 7 RESTFUL routes
// index: list all of a collection
// /recipes
router.get('/', recipeController.index)

// new: display the form to create a recipe
// /recipes/new
router.get('/new', recipeController.new)

// show: display just one
// /recipes/:id

// create: add a new one to the collection
// POST /recipes
router.post('/', recipeController.create)

// delete route: 
// DELETE localhost:3000/recipes/:id
router.delete('/:id', recipeController.delete)


// edit route: GET /recipes/:id/edit
// show a form letting the user edit an individual thing
// pre-fill the form with the existing data

// update route: PUT /recipes/:id
// process the information from the edit form
// REPLACE the existing data in the model's array
// redirect back somewhere

module.exports = router; 