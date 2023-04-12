const recipe = require('../models/recipe')

module.exports = {
    index: (req, res)=>{
        res.render('recipes/index', {
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