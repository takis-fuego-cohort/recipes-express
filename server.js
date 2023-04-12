const express = require('express')
const app = express()
const recipesRouter = require('./routes/recipesRouter')
app.set('view engine', 'ejs')
// MIDDLEWARE SECTION
app.use(express.urlencoded({ extended: false }));

// 
app.use('/recipes', recipesRouter)
app.listen('3000', ()=>{
    console.log("express is running...")
})
// /recipes/new
// render a template