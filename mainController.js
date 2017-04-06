(function() {
    'use strict'
    angular

        .module('clearpeaksApp')
        .controller('mainController', mainController)

    mainController.$inject = ['$scope', '$route', 'MainFactory']

    function mainController($scope, $route, MainFactory) {

        MainFactory.getData()
            .then(function(response) {
                $scope.posts = response.data
            });

        $scope.removeElements = function(event, post) {
            event.preventDefault()
            var id = post.id
            var index = $scope.posts.indexOf(post);
            $scope.posts.splice((index), 1);

            MainFactory.removeData(id)
        }

        $scope.reverse = false
        $scope.sortElements = function(event) {
            $scope.reverse = !$scope.reverse
        }

    }
})();
