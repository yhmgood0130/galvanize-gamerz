const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config();

module.exports = {

  hashPassword: user => {
    const saltRound = 10;
    return bcrypt.hash(user.password, saltRound)
      .then(hash => {
        user.password = hash;
        return user;
      })
  },
  hashSyncPassword: password => {
    const saltRound = 10;
    return bcrypt.hashSync(password, saltRound);
  },
  generateJWT: user => {
    delete user.password;
    return jwt.sign(user,process.env.TOKEN_SECRET)
  },
  comparePassword: (password,user) => {
    const valid = bcrypt.compareSync(password, user.password)
    if(valid){
      return Promise.resolve(user)
    } else {
      return Promise.reject('Incorrect email or password')
    }
  },
  authorize: (req, res, next) => {
    console.log();
    if (req.user && req.params.id && req.user.id == req.params.id) {
      next()
    } else {
      res.status(401)
      res.json({error: 'Unathorized'})
    }
  },
  token: (req,res,next) => {
    const authHeader = req.headers.authorization
    if (authHeader){
      const token = authHeader.substring(7)
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = decoded
    }
    next()
  }
}
