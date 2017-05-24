(function() {

    angular.module("app", ['angularMoment'])
        .component("redditBody", {
            controller: "redditBodyController",
            templateUrl: "/templates/reddit.html"
        })
        .component('redditNavbar', {
            // controller:
            templateUrl: "/templates/navbar.html"
        })
        .component('redditFooter', {
            // controller:
            templateUrl: "/templates/footer.html"
        })

})()
