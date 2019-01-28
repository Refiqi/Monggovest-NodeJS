const express = require('express');
const app = express();



const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/monggovest', {useNewUrlParser: true}, (err) => {
    if (err) throw err;
    console.log('MongoDB Connected');
});


const port = process.env.PORT || 5000;
app.listen(port, (err) =>{
    if (err) throw err;
    console.log(`Server Listening at Port: ${port}`)
});