const express = require('express');
const app = express();
const user = require('./models/details')
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const details = require('./models/details');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


app.get('/', function(req,res){
    res.send("The page is ready to views");
})

app.post('/', async function(req,res){
    let {name, number, course}= req.body;
   let user = await user.create({
        name,
        number,
        course
    })
    let token = jwt.sign({name: name, number: number, course:course},"shhhhh")
    res.cookie("token", token);
    res.send("Form Submited Succefully");
})


app.listen(3000)