exports.up = async function(knex) {
  await knex.schema.createTable('cars', tbl => {
    tbl.increments('id');
    tbl.string('make').notNull();
    tbl.string('model').notNull();
    tbl
      .integer('vin')
      .notNull()
      .unique();
    tbl.float('mileage').notNull();
    tbl.string('transmission');
    tbl.string('titleStatus');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('cars');
};
