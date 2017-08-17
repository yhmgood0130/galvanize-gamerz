
exports.up = function(knex, Promise) {

  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('email');
    table.string('username');
    table.string('password');
  })

};

exports.down = function(knex, Promise) {

  return knex.schema.dropTableIfExists('users');

};
