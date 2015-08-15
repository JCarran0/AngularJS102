var MyApp = angular.module('CustomServices', []);


MyApp.factory('ModeManager', function(){

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


MyApp.value('colorsArray', ['red', 'yellow', 'green', 'blue']);