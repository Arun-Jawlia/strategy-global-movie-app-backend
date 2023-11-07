const express = require('express');
const cors = require('cors');
const { movieRouter } = require('./routes/movie.route');
const app = express();
app.use(cors())
require('dotenv').config();
app.use(express.json())


app.get('/', (req,res)=>
{
    res.send('Welcome to home')
})


app.use('/movie',movieRouter)


const PORT= process.env.PORT || 8000
app.listen(PORT ,()=>
{
    console.log("Listening on port " + PORT);
})