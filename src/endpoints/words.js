let router = require("express").Router();
Word = require('../models/Word.js');


// Word routes

//GET && POST /word
router.route("/")
  .get((req, res) => {
    Word.find({}, "term", (err, words) => {
      if (err) {
        console.log(err);
      }
      res.json({
        status: "success",
        message: "Words retrieved successfully",
        data: words
      });
    });
  })
  .post((req, res) => {
    let word = new Word();
    word.term = req.body.term;

    // save the word and handle errors
    word.save(err => {
      if (err) {
        res.json(err);
        console.log(err.message);
      } else {
        res.json({
          message: `New Word Added to DB`,
          data: word
        });
      }
    });
  });


//GET ID && DELETE ID /word/:id
router.route("/:id")
  .get((req, res) => {
    Word.findById(req.params._id, (err, word) => {
      if (err) {
        res.json(err);
        console.log(err.message);
      } else {
        res.json({
          message: `Viewing one word by Id`,
          data: word
        });
      }
    });
  })
  .delete((req, res) => {
    Word.remove(
      {
        _id: req.body._id
      },
      (err, word) => {
        if (err) {
          res.json(err);
          console.log(err.message);
        } else {
          res.json({
            status: "success",
            message: "Word deleted"
          });
        }
      }
    )
  })

module.exports = router;