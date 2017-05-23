
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
			post_id: 1,
			text: 'Shitpost',
			author: 'Jules is a bitch',
			createdOn: '1495072634391',
		},
		{
			post_id: 2,
			text: 'FIRST!',
			author: 'Derek',
			createdOn: '1495072634391',
		},
		{
			post_id: 3,
			text: 'Binding of Isaac Blows!',
			author: 'Jordan Fred',
			createdOn: '1495072634391',
		},
		{
			post_id: 4,
			text: 'Hey cool',
			author: 'James Schultz',
			createdOn: '1495072634391',
		},
      ]);
    });
};
