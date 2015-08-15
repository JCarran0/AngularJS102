var MyApp = angular.module('CustomServices', []);


MyApp.factory('ModeFactory', function(){

	function ModeManager(){
		this.modes = [
		{
			mode: 'normal',
			speed: 800
		},
		{
			mode: 'fast',
			speed: 500
		},
		{
			mode: 'insane',
			speed: 200
		}];

		this.selected = 800;	
	}

	return ModeManager;
});



function generateRandomColor(){
	var index = Math.floor((Math.random() * 4) + 1) - 1;
	return ['red', 'yellow', 'green', 'blue'][index];
}


MyApp.factory('GameFactory', function(ModeFactory, $interval, $timeout){
	

	var GameFactory = function(){
		this.gameHasStarted = false;
		/*
		** The simon and user array hold their respective sequences
		** as the game progresses.
		** The display array holds an array that will be tied to the view
		** and will be emptied and rebuilt during each turn.
		*/
		this.currentSequence = {
			simon: [],
			user: [],
			display: []
		};

		this.isClicked = {
			red: false,
			blue: false,
			green: false,
			yellow: false
		}

		this.gameHasStarted = false;

		this.modeManager = new ModeFactory();
	}


    GameFactory.prototype.resetRound = function(stop){
    	var self = this;
    	$interval.cancel(stop);
    	$timeout(function() {
    		self.currentSequence.display = [];
    		self.turn = 'user';
    		self.isRunning = false;
    	}, 500);
    }

	GameFactory.prototype.flashOneColor = function(color){
		var self = this;
		self.isClicked[color] = true;
		self.currentSequence.display.push(color);
		console.log(self.currentSequence);
		console.log($timeout);
		return $timeout(function(){
			self.isClicked[color] = false;
		}, self.modeManager.selected/2);
	} 	

    var stop;
    var tempArray = [];
    GameFactory.prototype.runSimonsTurn = function() {
		var self = this;
		self.turn = "simon";
		console.log(89)
		self.currentSequence.simon.push(generateRandomColor());
    	tempArray = angular.copy(self.currentSequence.simon);
    	var stop = $interval(function(){
    		self.flashOneColor(tempArray.shift(0)).then(function(){
	    		if(tempArray.length === 0){
	    			self.resetRound(stop);
	    		}
    		});
    	}, self.modeManager.selected);
    };

	GameFactory.prototype.processUsersTurn = function(color){
		if (!this.gameHasStarted || this.turn !== 'user' || this.isRunning) return;
		var self = this;
		self.isRunning = true;

		var simonPicks = self.currentSequence.simon;
		var userPicks = self.currentSequence.user;
		if (color !== simonPicks[userPicks.length]){
			self.gameOver();
		} else{
			userPicks.push(color);
			self.flashOneColor(color).then(function(){
				if(userPicks.length === simonPicks.length){
					// Simon's turn
					self.currentSequence.user = [];
					self.currentSequence.display = [];
					$timeout(function(){
						self.turn = 'simon';
					}, 500).then(function(){				
						self.runSimonsTurn();
					});
				} else{
					// Still user's turn
					self.isRunning = false;
				}				
			});
		}
	};       

	GameFactory.prototype.startGame = function(){
		console.log('start')
		this.gameHasStarted = true;
		this.runSimonsTurn();
	};

    GameFactory.prototype.gameOver = function(){
    	alert('GAME OVER!');
		this.currentSequence = {
			simon: [],
			user: [],
			display: []
		};
		this.gameHasStarted = false;
		this.turn = null;
		this.isRunning = false;
    }	

    return GameFactory;
});





