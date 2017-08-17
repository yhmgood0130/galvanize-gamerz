const knex = require ('./knex')

module.exports = {
  getUser: function() {
    return knex('users').select();
  },
  getUserByEmail: email => {
    return knex('users').select().where('email',email)
  },
  createUser: user => {
    return knex('users').insert(user).returning('id')
      .then(id => {
        user.id = id[0]
        return user;
      })
  },
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
  addCart: function(game,id){
    return knex('cart').insert(game,'*');
  },
  showCart: function(id){
    return knex('cart').select().where('cart_id',id)
  },
  modifyCart: function(itemId,quantity){
    return knex('cart').where('id',itemId).update(quantity)
  },
  deleteItem: function(itemId){
    return knex('cart').where('id',itemId).del();
  }
}
