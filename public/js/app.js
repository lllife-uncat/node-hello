var app = angular.module("helloApplication", []);

app.controller("helloController", function($scope, $http, test){

  $scope.users = [];
  $scope.time = "00.00";
  $scope.deleteUser = function(user) {
      var userIndex = $scope.users.indexOf(user);
      $scope.users.splice(userIndex, 1);
  };


  setInterval(function(){
    $scope.time = new Date();
    $scope.$apply();
  }, 5000);

});

app.controller("testController", function($scope, test){
  $scope.value = "Hello value";
  $scope.testNumbers = test.numbers;
});

app.controller("slickController", function($scope, test, userService){
  $scope.items = [];
  userService.get(function(data){
    $scope.items = data;
    setTimeout(function(){
      startRender();
    }, 0);
  });

  function startRender() {
    	$('.ko-slick').slick({ });
  }
});

app.factory("userService", function($http){

  function getUser(callback) {
    var request = $http({
      method: "GET",
      url: "/user"
    });

    request.success(function(data){
      callback(data);
    });
  }

  return {
    get: function(callback) {
      getUser(callback);
    }
  };

});

app.factory("test", function(){
  return {
      numbers: ["First", "Second", "Thrid", "Fourt", "Five"]
  }
});
