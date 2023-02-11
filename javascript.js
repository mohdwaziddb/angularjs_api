angular.module('myApp', [])
    .controller('MyController', ['$scope', '$http', function($scope, $http) {
      $http.get('https://mocki.io/v1/2cb17c57-4387-4b6b-af6f-e02997ba2e48')
        .then(function(response) {
          $scope.data = response.data.data_array;
          console.log($scope.data);
        });
    }]);

