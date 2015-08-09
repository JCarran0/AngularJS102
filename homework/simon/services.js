"use strict";

var MyApp = angular.module('CustomServices', []);

MyApp.factory('GameBuilder', function(){
	
	var GameBuilder = function (){
		this.test = [];
		/* self.turn can = null, 'simon' or 'user'.
		** This helps toggle various clickable actions*/
		this.turn = 'user';
		
		this.isClicked = {
			red: false,
			blue: false,
			green: false,
			yellow: false
		}		
	};

	GameBuilder.prototype.processClick = function(color) {
		console.log(this.turn)
		console.log(this.test)
		if (!this.turn) return;
		this.currentSequence[this.turn].push(color);
		flashOneColor(color);
	};

	function flashOneColor(color){
		this.isClicked[color] = true;
		this.currentSequence.display.push(color);
		return $timeout(function(){
			this.isClicked[color] = false;
		}, 500);
	}	

	return GameBuilder;
});