//Dependencies
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const DatabaseConnection = require('./../db/connection.js');
require('dotenv').config();

// Start Express
const app = express();

// Database Connection
DatabaseConnection();

// API Init
const HTTP_SERVER = process.env.PORT;
app.listen(HTTP_SERVER, () => {
  console.log(`server listening on port ${HTTP_SERVER}!`);
});

//Routes Response Listener
app.use(morgan('combined'));

// Body Parser Init
app.use(bodyParser.json());

//require end-poits
const complexity = require(`../endpoints/complexity`);
app.use("/complexity", complexity);

const words = require("../endpoints/words");
app.use("/words", words);


app.get('/', (req,res)=>{
  res.json({
    message: 'You are in the Lexical Density API',
    instructions: 'Submit a post request to /complexity containing {"inputString": "content to be analized"}',
    extra: 'to have a text analysis, submit a post request exactly like the previous one to /complexity?mode=verbose'
  })  
})


module.exports = app;
