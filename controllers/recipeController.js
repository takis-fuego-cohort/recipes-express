const recipe = require('../models/recipe')

module.exports = {
    index: (req, res)=>{
        res.render('recipes/index', {
            recipes: recipe.getAll()
        })
    }
}