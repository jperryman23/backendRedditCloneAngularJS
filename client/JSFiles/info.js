angular.module("app")
    .controller("info",
        function controller() {
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
            }

        })
