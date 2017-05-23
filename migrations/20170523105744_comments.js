
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) =>{
      table.increments()
      table.integer('post_id').references('posts.id')
      table.text('text')
      table.text('author')
      table.string('createdOn')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
