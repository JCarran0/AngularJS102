"use strict";

var MyApp = angular.module('MyApp', ['CustomServices'])

.controller('MyController', function(GameBuilder, $timeout, $interval){
	var self = this;

	/*
	** self.turn can = 'simon' or 'user'.
	** This helps toggle various clickable actions
	** Choice of values is because they will be displayed to user.
	*/
	self.turn = null;

	// mode controls the speed of the game.
	// i.e. slow, fast, insane.
	self.mode = 'fast';
	var modeSpeeds = {
		normal: 800,
		fast: 500,
		insane: 200
	}
	
	/*
	** The simon and user array hold their respective sequences
	** as the game progresses.
	** The display array holds an array that will be tied to the view
	** and will be emptied and rebuilt during each turn.
	*/
	self.currentSequence = {
		simon: [],
		user: [],
		display: []
	};

	self.isClicked = {
		red: false,
		blue: false,
		green: false,
		yellow: false
	}

	// var game = new GameBuilder();
	// self.processClick = game.processClick;
	self.startGame = function(){
		console.log('clicked');
		self.gameHasStarted = true;
		runSimonsTurn();
	};

	this.processUsersTurn = function(color){
		if (!self.gameHasStarted || self.turn !== 'user' || self.isRunning) return;
		
		self.isRunning = true;

		var simonPicks = self.currentSequence.simon;
		var userPicks = self.currentSequence.user;
		if (color !== simonPicks[userPicks.length]){
			gameOver();
		} else{
			userPicks.push(color);
			flashOneColor(color).then(function(){
				if(userPicks.length === simonPicks.length){
					console.log('changing turns')
					self.currentSequence.user = [];
					self.currentSequence.display = [];
					$timeout(function(){
						self.turn = 'simon';
					}, 500).then(function(){				
						runSimonsTurn();
					});
				} else{
					console.log('still users turn');
					self.isRunning = false;
				}				
			});
		}
	};

	function flashOneColor(color){
		self.isClicked[color] = true;
		self.currentSequence.display.push(color);
		return $timeout(function(){
			self.isClicked[color] = false;
		}, modeSpeeds[self.mode]/2);
	}


	
    var stop;
    var tempArray = [];
    var runSimonsTurn = function() {
		self.turn = "simon";
		self.currentSequence.simon.push(generateRandomColor());
    	tempArray = angular.copy(self.currentSequence.simon);
    	console.log(tempArray);
    	var stop = $interval(function(){
    		flashOneColor(tempArray.shift(0)).then(function(){
	    		console.log('Remaining: ' + JSON.stringify(tempArray));
	    		if(tempArray.length === 0){
	    			resetRound(stop);
	    		}
    		});
    	}, modeSpeeds[self.mode]);
    };

    function resetRound(stop){
    	$interval.cancel(stop);
    	$timeout(function() {
    		self.currentSequence.display = [];
    		self.turn = 'user';
    		self.isRunning = false;
    	}, 500);
    }

    function gameOver(){
    	alert('GAME OVER!');
		self.currentSequence = {
			simon: [],
			user: [],
			display: []
		};
		self.gameHasStarted = false;
		self.turn = null;
		self.isRunning = false;
    }


	var colors = ['red', 'yellow', 'green', 'blue'];

	function generateRandomColor(){
		var index = Math.floor((Math.random() * 4) + 1) - 1;
		return colors[index];
	}

	self.test = self.runSimonsTurn;

});