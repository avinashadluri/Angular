angular.module('myModule', []).controller('myController', function($scope){
	$scope.test = "avinash!";
	$scope.test1 = $scope.test.toUpperCase();
	$scope.get = function() {
		alert($scope.test1);
	}	
}) 	