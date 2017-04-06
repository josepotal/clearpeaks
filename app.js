var clearpeaksApp = angular.module("clearpeaksApp",[]);

clearpeaksApp.controller("MainController", function($scope, $rootScope, MainFactory) {

    MainFactory.getData()
      .then(function(response) {
        $scope.posts = response.data
        console.log(response.data);
      });

    $scope.removeElements = function(event, post){
      event.preventDefault()
      var id = post.id
      var index = $scope.posts.indexOf(post);
      $scope.posts.splice((index), 1);     

      MainFactory.removeData(id)
    }

    $scope.reverse=false
    $scope.sortElements = function(event) {
      $scope.reverse = !$scope.reverse
    }

})


clearpeaksApp.factory("MainFactory", function($http) {

  function getData() {
    var url = "http://jsonplaceholder.typicode.com/posts";
    return $http.get(url)
  }

  function removeData(id) {
    var url = `http://jsonplaceholder.typicode.com/posts/${id}`;
    return $http.delete(url)
  }


  return {
    getData: getData,
    removeData: removeData
  }

})