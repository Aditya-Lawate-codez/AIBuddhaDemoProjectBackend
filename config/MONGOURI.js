const  path = require('path');
require("dotenv").config({path: path.join(__dirname,'.env')});

const MONGODB_URI = process.env.MONGOURI;
module.exports ={
    MONGODB_URI
}