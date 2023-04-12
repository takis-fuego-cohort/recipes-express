const recipes = [
    {"name": "lasagna", "description": "put italian stuff in a casserole dish and figure it out"},
    {"name": "salad", "description": "vegetables having a party"}
]

module.exports = {
    getAll: function(){
        return recipes
    },
    create: function(recipeToCreate){
        recipes.push(recipeToCreate)
        return recipeToCreate
    },
    deleteById: function(recipeToDeleteIndex){
        deletedRecipe = recipes.splice(recipeToDeleteIndex, 1)[0]
        return deletedRecipe
    }
}