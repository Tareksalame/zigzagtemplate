const express = require('express')
const app = express()
const bp = require('body-parser')
const db = require('mongoose')
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;
app.use(express.static('pages'))
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
db.connect(dbURI);

app.get('/',(req,res)=>
{
    res.sendFile(__dirname + '/pages/index.html')
})
app.get('/Products',(req,res)=>
{
    res.sendFile(__dirname + '/pages/LandingPage.html')
})


app.listen(process.env.PORT || 2222, () => console.log('Server running on port', process.env.PORT || 2222));
