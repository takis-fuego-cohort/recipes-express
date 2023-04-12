const express = require('express')
const app = express()
const recipesRouter = require('./routes/recipesRouter')
app.set('view engine', 'ejs')
app.use('/recipes', recipesRouter)
app.listen('3000', ()=>{
    console.log("express is running...")
})