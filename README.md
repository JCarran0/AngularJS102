# AngularJS102
  NYCDA July

## Outstanding Questions

  1. When do we need to use the $scope service, vs using 'this'?

     I thought that when you use the 'controller as' syntax you have access to 'this'.  When would you use $scope vs 'this' (i.e. 'var self = this')

     I think the answer is that there are methods on the $scope that can be handy, I.e. $scope.$watch.

  2. How would I dynamically assign an angular controller value to an html id attribute?  I tried both id='{{}}' and ng-attr-id='{{}}'

  3. From homework assignment:  I created a factory with a method to add an item to a folder.  But I needed to create a 'wrapper' function that both called this method on button click, and then reset the user input field.  Is there a better way?

  4. Why do I get this 'Error: [ngRepeat:dupes]' error when I try to submit the same value to an ng-repeat iterator?  I think George was able to do this no problem.

  5. General questions about where to put things:  I.e. Where should I put the page header string?  Directly in markup, in the controller, or in the model?

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
 1. (i.e an obj constructor - use 'DTO' data transfer obj)
4. Service
5. Provider





### Don't Use
  + $scope.$watch()
  + $scope.$watchCollection()
  + $scope.$watch(itemToWatch, callback, true)


