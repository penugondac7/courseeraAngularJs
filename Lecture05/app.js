(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Yaakov";
  $scope.message="Please enter data first";
  
  $scope.checkifTooMuch= function()
  {
    //alert($scope.name);
    if($scope.name.trim() == "")
       $scope.message = "Please enter data first";
    else{
    var arrayofstrings = $scope.name.split(",");

    if(arrayofstrings.length > 3)
      $scope.message="Too much!";
    else
      $scope.message="Enjoy!";
   }
  }
});

})();
