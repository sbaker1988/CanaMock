app = angular.module("myApp", ['ui.bootstrap', 'ngSanitize']);


app.config(
    function configureApplication($rootScopeProvider) {
       // $rootScopeProvider.digestTtl(14);
    }

);
/// STUFF

app.controller("mainCtrl", ['$scope', '$http', '$q', '$location', '$timeout',  '$parse', '$window', 
    function ($scope, $http, $q, $location, $timeout, $parse, $window) {
          
        $scope.Section1 = true;
        
        $scope.onlyNumbers = /^\d+$/;
$scope.SetSection = function (data)
{
 

  if ($scope.Section1 )
 {
    $scope.Section1 = false;
 }
 else
 {
    $scope.Section1 = true;
 }

}

$scope.submit = function (data) {
    //mock
    alert($scope.sectionA.name);


};


    }
]);

