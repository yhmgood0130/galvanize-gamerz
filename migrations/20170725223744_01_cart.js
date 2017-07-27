
exports.up = function(knex, Promise) {

  return knex.schema.createTable('cart', (table) =>{
    table.increments();
    table.text("title");
    table.text("platform");
    table.float("price");
    table.text("url");
    table.integer("quantity");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cart');
};
