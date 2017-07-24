
exports.up = function(knex, Promise) {

  return knex.schema.createTable('game', (table) => {
    table.increments();
    table.text("title");
    table.text("platform");
    table.float("price");
    table.text("url");
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('game');

};
