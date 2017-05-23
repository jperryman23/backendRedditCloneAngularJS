
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {name: 'Jules Perryman'},
		{name: 'Joran Fred'},	
		{name: 'Derek Kramer'},
		{name: 'James Schultz'},
		{name: 'Devin Hanaway'}
      ]);
    });
};
