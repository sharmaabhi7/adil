const express = require('express');
const app = express();
const user = require('./models/details')
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const details = require('./models/details');
const axios=require('axios')
const cors = require('cors');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());

app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
  

app.get('/', function(req,res){
    res.send("The page is ready to views");
})

app.post('/', async function(req,res){
    let {name, number, course}= req.body;
   let users = await user.create({
        name,
        number,
        course
    })
    let token = jwt.sign({name: name, number: number, course:course},"shhhhh")
    res.cookie("token", token);
    res.send("Form Submited Succefully");
})

const port=3002
app.listen(port,(req,res)=>{
    console.log(`server is running at port ${port}`)
})