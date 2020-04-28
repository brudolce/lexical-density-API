let router = require("express").Router();
Word = require('../models/Word.js');


//functions
const lexicalDensity = (str, comparisonArr) => {
  if (
    str.length > 1000 ||
    typeof str !== "string" ||
    !comparisonArr ||
    str.length < 1
  ) return false;

  let sentences = str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(' ')


  if (sentences.length > 100) {
    return false
  } else {
    const wordCount = sentences.length;
    let res = sentences.filter(word => !comparisonArr.includes(word));
    let overall_ld = Number((res.length / wordCount).toFixed(2));
    return overall_ld;
  }
};



//GET && POST complexity
router.route('/')
  .get((req, res) => {
    Word.find({}).then(words => {
      let nonLexicalWords = words.map(el => el.term);
      res.json({
        message: 'Non Lexical word list',
        data: nonLexicalWords
      });
    });
  })
  .post((req, res) => {
    //body
    let = { inputString } = req.body;
    if (!inputString) res.status(400).send({ error: 'No user input received.' });
    
    //querry
    let { mode } = req.query
    let overall_ld;

    if (mode === 'verbose') {
      let sentence_ld = inputString.match(/[^\.\!\?]+/g);

      Word.find({}).then(words => {
        let nonLexicalWords = words.map(el => el.term);
        sentence_ld = sentence_ld.map(el => lexicalDensity(el, nonLexicalWords))
        overall_ld = sentence_ld.reduce((acc, el) => acc + el, 0) / sentence_ld.length;
        res.json({
          data: { sentence_ld, overall_ld }
        });
      });

    } else {
      Word.find({}).then(words => {
        let nonLexicalWords = words.map(el => el.term);
        overall_ld = lexicalDensity(inputString, nonLexicalWords);
        res.json({
          data: { overall_ld }
        });
      });
    }

  });

module.exports = router;