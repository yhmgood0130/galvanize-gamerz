const knex = require ('./knex')

module.exports = {
  getAll: function(){
    return knex('game')
  },
  getPS4: function() {
    return knex('game').where('platform','PS4')
  },
  getXbox: function() {
    return knex('game').where('platform','XBOX ONE')
  },
  getSwitch: function() {
    return knex('game').where('platform','SWITCH')
  },
  getProduct: function(id){
    return knex('game').whereRaw("title ILIKE '%' || ? || '%'", id);
  },
  addCart: function(game){
    return knex('cart').insert(game,'*');
  },
  showCart: function(){
    return knex('cart')
  },
  modifyCart: function(id,quantity){
    return knex('cart').where('id',id).update(quantity)
  },
  deleteItem: function(id){
    return knex('cart').where('id',id).del();
  }
}
