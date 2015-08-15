"use strict";

angular.module('MyApp', ['CustomServices'])

.controller('MyController', function(GameFactory, modeObj){
	this.game = new GameFactory();
	this.isClicked = this.game.colorManager.isClicked;
	this.mode = modeObj;
	this.sequence = this.game.sequences;
});
