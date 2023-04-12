const recipes = [
    {"name": "lasagna", "description": "put italian stuff in a casserole dish and figure it out"},
    {"name": "salad", "description": "vegetables having a party"}
]

module.exports = {
    getAll: function(){
        return recipes
    }
}