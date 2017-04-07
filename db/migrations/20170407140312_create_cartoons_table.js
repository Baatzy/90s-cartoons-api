exports.up = (knex) => {
  return knex.schema.createTable('cartoons', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.string('network').notNullable()
    table.integer('rating').defaultsTo(0)
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('cartoons')
}
