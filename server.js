const express = require('express')
const app = express()
const recipesRouter = require('./routes/recipesRouter')
const logger = require('morgan')
const methodOverride = require('method-override')
app.set('view engine', 'ejs')
// MIDDLEWARE SECTION
app.use(logger('dev'));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));


app.use('/recipes', recipesRouter)
app.listen('3000', ()=>{
    console.log("express is running...")
})