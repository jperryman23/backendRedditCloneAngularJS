(function() {
    angular.module('app', ['angularMoment'])
        .component('reddit', {
            controller: function(moment) {
                const vm = this

                vm.tab = 1
                vm.setTab = function(selected, toPost) {
                    vm.tab = selected
                    vm.post = toPost
                }

                vm.isSet = function(tab) {
                    return vm.tab === tab
                }

                posts = [{
                        title: "Turtles",
                        body: "look a them",
                        author: "Jules Perryman",
                        image: "https://baby-animals.net/wp-content/gallery/baby-turtles-wallpapers/Sweet-turtle-wallpapers.jpg",
                        createdOn: 1495072634391,
                        votes: 10,
                        comments: [{
                                text: "love it!",
                                author: "Izabela",
                                createdOn: 1495072634391,
                            },
                            {
                                text: "baby ralf",
                                author: "Brad",
                                createdOn: 1495072634391,
                            }
                        ]
                    },
                    {
                        title: "Elephants",
                        body: "they are so cute",
                        author: "Joran Fred",
                        image: "http://blog.humanesociety.org/wp-content/uploads/2015/07/ELEPHANT-ivory-rule-announced-1220x813.jpg",
                        createdOn: 1495072634391,
                        votes: 1,
                        comments: [{
                            text: "so fricking cute",
                            author: "Chris",
                            createdOn: 1495072634391,
                        }]
                    },
                    {
                        title: "Tigers are legit",
                        body: "Tigers are probably the coolest animals",
                        author: "James Schultz",
                        image: "http://goodnature.nathab.com/wp-content/uploads/2011/03/19-baby-tiger.jpg",
                        createdOn: 1495072634391,
                        votes: 15,
                        comments: []
                    },
                    {
                        title: "Are orcas the smartest marine animal",
                        body: "Orca's are extremely intelligent did you know...",
                        author: "Devin Hanaway",
                        image: "http://www.defenders.org/sites/default/files/magaizine-spring-2016-orca-dave-ellifrit-center-for-whale-research-nmfs-permit-15569-dfo-sara-272_.jpg",
                        createdOn: 1495072634391,
                        votes: 9,
                        comments: [{
                            text: "Probably they are",
                            author: "Derek Cramer",
                            createdOn: 1495072634391,
                        }]
                    },
                    {
                        title: "Drop Bears",
                        body: "wtf is a drop bear",
                        author: "Brooks Patton",
                        image: "https://i.ytimg.com/vi/fAD0sqLzhRs/maxresdefault.jpg",
                        createdOn: 1495072634391,
                        votes: 3,
                        comments: [{
                            text: "pretty sure they area joke",
                            author: "Jules Perryman",
                            createdOn: 1495072634391,
                        }]
                    }


                ]

                vm.posts = posts

                vm.addPost = function() {
                    console.log(posts);
                    vm.post.createdOn = Date.now()
                    vm.post.votes = 0
                    vm.post.comments = []
                    posts.push(vm.post)
                    console.log(posts);
                    delete vm.post
                }

                vm.deletePost = function(e, post) {
                    e.preventDefault()
                    vm.posts.splice(vm.posts.indexOf(post), 1)
                    delete vm.edit
                }


                 vm.editPost = function(post) {
                    vm.setTab(1)
                 }

                vm.upVote = function(post) {
                    post.votes++
                }

                vm.downVote = function(post) {
                    if (post.votes >= 1) {
                        post.votes--
                    }
                }

                vm.addComment = function(post) {
                    vm.newComment.createdOn = Date.now()
                    var commentSection = post.comments
                    commentSection.push(vm.newComment)
                    delete vm.newComment
                }
            },
            templateUrl: "reddit.html"
        })
})()
