const Recipe = require('../models/recipe')
// 7 RESTful ROUTES
// 4 OPERATIONS CRUD
module.exports = {
    index: (req, res)=>{
        // We render the index template
        // We provide a CONTEXT object containing the recipes data
        res.render('recipes/index', {
            // The recipe model has our data
            // We use its methods to access the data
            recipes: recipe.getAll()
        })
    },
    new: (req, res)=>{
        res.render('recipes/new')
    },
    create: (req, res)=>{
        // Pull in the form data
        const recipeToCreate = req.body;
        // Use the model to create based on the form data
        recipe.create(recipeToCreate);
        // Send the user back to a different page
        res.redirect('/recipes');
    },
    delete: (req, res)=>{
        recipe.deleteById(req.params.id)
        res.redirect('/recipes');
    }
}