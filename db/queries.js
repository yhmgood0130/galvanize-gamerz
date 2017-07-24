const knex = require ('./knex')

module.exports = {
  getAll: function(){
    return knex('game')
  }
}
