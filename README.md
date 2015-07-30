# AngularJS102
  NYCDA July

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

### Custom Services (i.e. Model)
Features you want to work across components and controllers

+ Business logic
+ Data persistence
+ Server communication
+ Shared state
+ Caching
+ Factories
+ Third-party JS libraries (wrapped in order to be injectable/testable)


Five Types

1. Value
2. Constant
3. Factory
4. Service
5. Provider



### Don't Use
  + $scope.$watch()
  + $scope.$watchCollection()
  + $scope.$watch(itemToWatch, callback, true)


