# AngularJS102

## Notes
### Useful

	myApp.controller('MyController', function($scope, $timeout $interval){

		$timeout(function() {
			//do something after 3 seconds
		}, 3000);

		$interval(function(){
			// do something every second
			// for 10 intervals
		}, 1000, 10);
	});

[Find other service components](https://docs.angularjs.org/api/ng/service)



### Don't Use
  + $scope.$watch()
  + $scope.$watchCollection()
  + $scope.$watch(itemToWatch, callback, true)


