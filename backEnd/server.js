const express = require('express');
const app = express();
const path = require("path");
const api = require('./server/routes/api')
const loginAPI = require('./server/routes/loginAPI')
const {connectToDataBase} = require('./server/utilities/DBConnection')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

connectToDataBase()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/' , loginAPI)
app.use('/' , api)

const port =4000
app.listen(port,()=>{
    console.log(`Runing on port:  http://localhost:${port}`);
})