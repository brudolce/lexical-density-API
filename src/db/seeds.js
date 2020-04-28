const DatabaseConnection = require('./connection.js');
const Word = require('../models/Word.js');
const mongoose = require('mongoose');
const words = require('../helpers/nonLexicalWords.js')

DatabaseConnection()

let data = [];

words.forEach(el => {
  data.push({ "term": el })
})


Word.create(data, (err) => {
  if (err) throw (err);
  console.log(`Created ${data.length} records`);
  mongoose.connection.close();
});

// console.log(words)