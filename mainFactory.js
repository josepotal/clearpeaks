(function() {
        'use strict'

        angular
            .module('clearpeaksApp')
            .factory('MainFactory', MainFactory)

        MainFactory.$inject = ['$http', '$rootScope']

        function MainFactory($http, $rootScope) {

            return {
                getData: getData,
                removeData: removeData
            }
            
            function getData() {
                var url = "http://jsonplaceholder.typicode.com/posts";
                return $http.get(url)
            }

            function removeData(id) {
                var url = `http://jsonplaceholder.typicode.com/posts/${id}`;
                return $http.delete(url)
            }

            

        }
  })()
