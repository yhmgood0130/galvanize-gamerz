
exports.up = function(knex, Promise) {

  return knex.schema.createTable('cart', (table) =>{
    table.increments('id').primary();
    table.text("title");
    table.text("platform");
    table.float("price");
    table.text("url");
    table.integer("quantity");
    table.bigInteger('cart_id').references('id').inTable('users').notNull().onDelete('cascade');;
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cart');
};
