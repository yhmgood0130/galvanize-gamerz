const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

router.get('/product', (req,res,next) => {
  queries.getAll().then(games => {
    res.status(200).json(games);
  })
})

module.exports = router;
