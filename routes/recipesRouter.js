const router = require('express').Router();
const recipeController = require('../controllers/recipeController')


router.get('/', recipeController.index)

module.exports = router;