
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();
    
        users
          .string('username', 20)
          .notNullable()
          .unique();
        users.string('password', 20).notNullable();
        users.string('role', 10).notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};