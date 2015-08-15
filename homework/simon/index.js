"use strict";

var MyApp = angular.module('MyApp', ['CustomServices'])

.controller('MyController', function(GameFactory){
	this.game = new GameFactory();
});