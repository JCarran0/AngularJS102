# AngularJS102

## Notes

### Useful

	myApp.controller('MyController', function($scope, $timeout){
		$timeout(function() {
			//do something after 3 seconds
		}, 3000);
	});


### Don't Use
  + $scope.$watch()
  + $scope.$watchCollection()
  + $scope.$watch(itemToWatch, callback, true)


