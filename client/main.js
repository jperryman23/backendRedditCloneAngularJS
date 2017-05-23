(function() {

    angular.module("app", ['angularMoment'])
        .component("redditBody", {
            controller: "/JSFiles/info",
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
