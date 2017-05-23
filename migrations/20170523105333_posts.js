
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) =>{
      table.increments()
      table.integer('title')
      table.string('body')
      table.integer('author_id').references("authors.id")
      table.string('image')
      table.string('createdOn')
      table.integer('votes').defaultTo(0)


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
