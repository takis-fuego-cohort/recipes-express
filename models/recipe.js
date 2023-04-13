const mongoose = require('mongoose')

// Create Schema
const recipeSchema = new mongoose.Schema({
    name: String,
    description: String
})
// Connect your schema to a Model
const Recipe = mongoose.model('Recipe', recipeSchema)
// Export the model
module.exports = Recipe