const auth = require('../utils/auth')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {

      var password1 = auth.hashSyncPassword('lampard')
      var password2 = auth.hashSyncPassword('gerrard')

      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'chelsea@fc.com', username: 'frank', password: password1},
        {id: 2, email: 'liverpool@fc.com', username: 'steven', password: password2}
      ]);
    });
};
