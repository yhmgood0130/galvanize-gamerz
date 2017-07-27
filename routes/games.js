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

router.get('/product/cart', (req,res,next) => {
  queries.showCart().then(cart => {
    res.status(200).json(cart);
  })
})

router.delete('/product/:id', (req,res,next) => {
  let id = req.params.id;
  queries.deleteItem(id).then(deleted => {
    message: 'Record deleted!'
  })
})

router.put('/product/:id', (req,res,next) => {
  let id = req.params.id;
  queries.modifyCart(id,req.body).then(cart => {
    res.status(200).json(cart[0]);
  })
})

router.post('/product', (req,res,next) => {
  let addItem = req.body;
  queries.addCart(addItem).then(cart => {
    res.status(200).json(cart[0]);
  })
})

router.get('/product/:id', (req,res,next) => {
  let name = req.params.id;
  queries.getProduct(name).then(title => {
    res.status(200).json(title);
  })
})

module.exports = router;
