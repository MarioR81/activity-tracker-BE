
exports.up = function(knex) {
    return knex.schema
      .createTable('users', tbl => {
        tbl.increments();
    
        tbl
          .string('username', 20)
          .notNullable()
          .unique();
        tbl.string('password', 50).notNullable();
        tbl.string('first_name', 50).notNullable();
        tbl.string('last_name', 50).notNullable();
        tbl.string('email', 30).notNullable().unique();
      })

      .createTable('kids', tbl => {
        tbl.increments();
    
        tbl
        .string('name', 30)
        .notNullable()
        .unique();
        tbl.integer('points', 50).notNullable();
        tbl.date('created_on', 90).defaultTo(knex.fn.now());
        tbl.specificType('rewards_array', 'string[]');
        tbl.integer("parents_id").unsigned().notNullable().references("id").inTable("users");
      })

      .createTable('activites', tbl => {
        tbl.increments();
    
        tbl.integer("parents_id").unsigned().notNullable().references("id").inTable("users");
        tbl
          .string('name', 20)
          .notNullable()
          .unique();
        tbl.integer('points', 50).notNullable();
        tbl.date('created_on', 50).defaultTo(knex.fn.now());
      });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('activites')
    .dropTableIfExists('kids')
    .dropTableIfExists('users');
};
