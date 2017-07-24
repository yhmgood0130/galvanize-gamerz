const knex = require ('./knex')

module.exports = {
  getALl: function(){
    return knex('game')
  }
}
