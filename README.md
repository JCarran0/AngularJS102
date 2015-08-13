# AngularJS102
  NYCDA July

## Outstanding Questions



## Notes

### Web Tools
[Modernizr](http://modernizr.com/) - Adds CSS classes to <html> tag

Polyfills - fills in missing features from older browsers (i.e. IE8 doesn't support JSON.stringify())
  1. json2.js
  2. es5-shim
  3. CSS3 PIE

[caniuse](http://caniuse.com/)
[Normalize.css](http://necolas.github.io/normalize.css/)
[HTML5 Boilerplate](http://html5boilerplate.com/) - includes modernizr, jQuery
[SASS](http://sass-lang.com/) - A CSS pre processor; store in .scss files
[Protractor]() A testing harness; test your code in a browser
[Bower](http://bower.io/) - Package manager for JS libraries; Used to manage application dependencies;
[Gulp](http://gulpjs.com/) Front-end build tool; optimizes JS, CSS, images; Creates dev and distrbutes build; specific tools for Angular, SASS, etc.
[Yeoman](http://yeaman.io/) Scaffolding tool for the modern web stack; Creators of Modernizr, HTML5 Boilerplate, CSS3; Goal is to encapsulate best practices

[Installing Yeoman for Angular + Gulp](https://github.com/Swiip/generator-gulp-angular);

Gulp is the conductor!

[Gulp Vs. Grunt](https://github.com/markdalgleish/presentation-build-wars-gulp-vs-grunt)

Call 'gulp serve' from command line to start your app server;

###Promises and ngResource
HTTP requests (CRUD operations)
*PUT - C - Update
*GET - R - Retrieve
*POST - U - Create
*DELETE - D - Delete

###ngResource
[$resource](https://docs.angularjs.org/api/ngResource/service/$resource) is built on top of $http
add ngResouce module to application and
inject $resource into your controller

#####Three steps to working with $resource
1. Building the $resource
2. Using the resource (i.e. making the request)
3. Dealing with the response

#####1. Building The Resource
First you need to instantiate:
```javascript
var myResource = $resource(url, [{paramDefaults}], [actions], options);
var myResource = $resource('http://path/to/url/:id',
	{
		id: @id, 
		type: 'red' //'red' will be default
	},
	getUsers: {
		method: 'GET',
		headers: {},
		isArray: true
	},
	createUser: {
		method: 'POST',
		headers: {
			Accept: "application/json"
		},
		isArray: false
	}); 
```
####2. Using The Resource
After it's been instantiated, the resource can be used by calling one of
the custom actions added

```javascript
myResource.getUsers({ALL URL PARAMS}, [{RequestBody if POST/PUT}]);
myResource.getUsers({id: 'xyz', type: 'blue'}, null);
```


####3. Dealing With The Response
Use a callback or promise
```javascript
//Callback
myResource.getUsers({ALL URL PARAMS}, [{RequestBody if POST/PUT}, callback]);
myResource.getUsers({id: 'xyz', type: 'blue'}, null);

//Promise
myResource.getUsers({ALL URL PARAMS}, [{RequestBody if POST/PUT}]).$promise().then();
myResource.getUsers({id: 'xyz', type: 'blue'}, null).$promise
  .then(function(response, resHeader){
  	//do something with response
  })
  .catch(function(err){
  	//manage error
  });
```





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


