
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
			title: 'Jules article',
			body: 'This is a body',
			author_id: 1,
			image: 'https://baby-animals.net/wp-content/gallery/baby-turtles-wallpapers/Sweet-turtle-wallpapers.jpg',
			createdOn: '1495072634391',
			votes: 0
		},
		{
			title: 'Derek Article',
			body: 'This is a Derek body',
			author_id: 3,
			image: 'https://baby-animals.net/wp-content/gallery/baby-turtles-wallpapers/Sweet-turtle-wallpapers.jpg',
			createdOn: '1495072634391',
			votes: 0
		},
		{
			title: 'Jordan\'s article',
			body: 'This is a Jordan body',
			author_id: 2,
			image: 'https://baby-animals.net/wp-content/gallery/baby-turtles-wallpapers/Sweet-turtle-wallpapers.jpg',
			createdOn: '1495072634391',
			votes: 0
		},
		{
			title: 'Jules\'s second article',
			body: 'This is a second body',
			author_id: 1,
			image: 'https://baby-animals.net/wp-content/gallery/baby-turtles-wallpapers/Sweet-turtle-wallpapers.jpg',
			createdOn: '1495072634391',
			votes: 0
		},
		{
			title: 'Jordan\'s second article',
			body: 'This is a second jordan body',
			author_id: 2,
			image: 'https://baby-animals.net/wp-content/gallery/baby-turtles-wallpapers/Sweet-turtle-wallpapers.jpg',
			createdOn: '1495072634391',
			votes: 0
		}
      ]);
    });
};
