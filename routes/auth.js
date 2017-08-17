const express = require('express');
const router = express.Router();
const knex = require('../db/knex')
const queries = require('../db/queries')
const validate = require('../utils/validation')
const auth = require('../utils/auth')

router.get('/users', (req,res,next) => {
  queries.getUser().then( users => {
    res.json({users})
  })
})

router.post('/login', validate.login, (req,res,next) => {
  queries.getUserByEmail(req.body.email).then(user => {
    if(user.length == 0){
      res.json ({error: 'User Not Found'})
    }
    else{
      auth.comparePassword(req.body.password, user[0])
        .then(auth.generateJWT)
        .then(jwt => {
          res.json({data:jwt})
        })
        .catch(error => {
          res.json({error})
        })
      }
    })
})

router.post('/signup', validate.signup, (req,res,next) => {
  queries.getUserByEmail(req.body.email).then(user => {
    if(user.length == 0){
      auth.hashPassword(req.body)
        .then(queries.createUser)
        .then(auth.generateJWT)
        .then(jwt => {
          res.json({data: jwt})
        })
        .catch(error => {
          res.json({error})
        })
    } else {
      res.json ({error: 'Email already in Use'})
    }
  })
})

module.exports = router;
