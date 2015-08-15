var MyApp = angular.module('CustomServices', []);

MyApp.value('modeObj', {
	modes: [
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
		}],
	selected: 800
});


MyApp.factory('ColorFactory', function(modeObj, $timeout){

	var ColorFactory = function(){
		this.colors = ['red', 'yellow', 'green', 'blue'];

		this.isClicked = {
			red: false,
			blue: false,
			green: false,
			yellow: false
		};
	};

	ColorFactory.prototype.generateRandomColor = function(){
		var index = Math.floor((Math.random() * 4) + 1) - 1;
		return this.colors[index];
	};

	ColorFactory.prototype.flashOneColor = function(color){
		var self = this;
		self.isClicked[color] = true;
		return $timeout(function(){
			self.isClicked[color] = false;
		}, modeObj.selected / 2);
	};

	return ColorFactory;
});



MyApp.factory('GameFactory', function(modeObj, ColorFactory, $interval, $timeout){

	var GameFactory = function(){
		this.sequences = {
			simon: [],
			user: [],
			display: []
		};
		this.gameHasStarted = false;
		this.colorManager = new ColorFactory();
	};

    GameFactory.prototype.resetRound = function(stop){
		var self = this;
		$interval.cancel(stop);
		$timeout(function() {
			self.sequences.display = [];
			self.turn = 'user';
			self.isRunning = false;
		}, 300);
	};

    GameFactory.prototype.runSimonsTurn = function() {
		var self = this;
		self.turn = "simon";
		self.sequences.simon.push(self.colorManager.generateRandomColor());
		var tempArray = angular.copy(self.sequences.simon);
		var stop = $interval(function(){
		var nextSimonColor = tempArray.shift(0);
		self.sequences.display.push(nextSimonColor);
		self.colorManager.flashOneColor(nextSimonColor).then(function(){
			if(tempArray.length === 0){
				self.resetRound(stop);
			}
		});
		}, modeObj.selected);
	};

	GameFactory.prototype.processUsersClick = function(color){
		if (!this.gameHasStarted || this.turn !== 'user' || this.isRunning) return;
		var self = this;
		self.isRunning = true;
		var simonPicks = self.sequences.simon;
		var userPicks = self.sequences.user;
		var display = self.sequences.display;
		if (color !== simonPicks[userPicks.length]){
			self.gameOver();
		} else{
			userPicks.push(color);
			display.push(color);
			self.colorManager.flashOneColor(color).then(function(){
				if(userPicks.length === simonPicks.length){
					// Simon's turn
					$timeout(function(){
						self.turn = 'simon';
						self.sequences.user = [];
						self.sequences.display = [];
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
		this.gameHasStarted = true;
		this.runSimonsTurn();
	};

    GameFactory.prototype.gameOver = function(){
		this.sequences.simon = [];
		this.sequences.user = [];
		this.sequences.display = [];
		this.gameHasStarted = false;
		this.turn = null;
		this.isRunning = false;
		alert('GAME OVER!');
    };

    return GameFactory;
});





