const express = require('express')
const app = express()
// imports
const recipesRouter = require('./routes/recipesRouter')
const logger = require('morgan')
// 4 types of requests: GET, POST, PUT, DELETE
// ?_method=delete POST => DELETE
// ?_method=put POST => PUT
const methodOverride = require('method-override')
// Tell express we want to render EJS templates
app.set('view engine', 'ejs')
// MIDDLEWARE SECTION
// Console.logs useful stuff about incoming requests
app.use(logger('dev'));
// Transforms request methods when we want to
app.use(methodOverride('_method'))
// Gives us form data as req.body
app.use(express.urlencoded({ extended: false }));

// IF a request URL starts with /recipes, send the rest to recipesRouter
app.use('/recipes', recipesRouter)



app.listen('3000', ()=>{
    console.log("express is running...")
})