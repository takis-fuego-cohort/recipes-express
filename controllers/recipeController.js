const Recipe = require('../models/recipe')
// 7 RESTful ROUTES
// 4 OPERATIONS CRUD
module.exports = {
    // async/await
    index: async (req, res)=>{
        const recipes = await Recipe.find()
        // We render the index template
        // We provide a CONTEXT object containing the recipes data
        res.render('recipes/index', {
            // The recipe model has our data
            // We use its methods to access the data
            recipes: recipes
        })

    },
    new: (req, res)=>{
        res.render('recipes/new')
    },
    create: async (req, res)=>{
        // Pull in the form data
        const recipeToCreate = req.body;
        // Use the model to create based on the form data
        const newRecipe = await Recipe.create(recipeToCreate);
        // Send the user back to a different page
        res.redirect('/recipes');
    },
    delete: async (req, res)=>{
        await Recipe.findByIdAndDelete(req.params.id)
        res.redirect('/recipes');
    }
}