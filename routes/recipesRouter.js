const router = require('express').Router();
const recipeController = require('../controllers/recipeController')


router.get('/', recipeController.index)
router.get('/new', recipeController.new)
router.post('/', recipeController.create)
// create route: POST /
module.exports = router;