const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

router.get('/product', (req,res,next) => {
  queries.getAll().then(games => {
    res.status(200).json(games);
  })
})

router.get('/product/ps4', (req,res,next) => {
  queries.getPS4().then(ps4 => {
    res.status(200).json(ps4);
  })
})

router.get('/product/xbox', (req,res,next) => {
  queries.getXbox().then(xbox => {
    res.status(200).json(xbox);
  })
})

router.get('/product/switch', (req,res,next) => {
  queries.getSwitch().then(nintendoSwitch => {
    res.status(200).json(nintendoSwitch);
  })
})

router.get('/product/:id', (req,res,next) => {
  queries.getProduct(req.params.id).then(game => {
    res.status(200).json(game);
  })

})
module.exports = router;
