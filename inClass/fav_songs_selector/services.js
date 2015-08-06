var MyApp = angular.module('CustomServices', []);


MyApp.factory('PendingSubmission', function(){

	function PendingSubmission(){
		this.userName = "";
		this.selectedSongs = [];
	}


	PendingSubmission.prototype.addSong = function(songObj) {
		this.selectedSongs.push(songObj);
	}

	PendingSubmission.prototype.removeSong = function(songTitle) {
		for (var i = 0, x = this.selectedSongs.length; i < x; i++){
			if (this.selectedSongs[i].title === songTitle){
				return this.selectedSongs.splice(i, 1);
			}
		}
	}

	PendingSubmission.prototype.submitSelection = function() {
		console.log(JSON.stringify(this.selectedSongs));
	};	

	return PendingSubmission;
});



MyApp.value('SONGLIST', [
  	{
  		title: "Bad Blood by Taylor Swift",
  		genre: "pop"
  	},
  	{
  		title: "Confused by Kid Cudi",
  		genre: "rap"
  	},
  	{
  		title: "Back to Back by Drake",
  		genre: "rap"
  	},
  	{
  		title: "Can't Feel My Face by The Weeknd",
  		genre: "pop"
  	},
  	{
  		title: "Take Me To Church by Hozier",
  		genre: "rock"
  	},
  	{
  		title: "Shut up and dance by WALK THE MOON",
  		genre: "rock"
  	},  	  	  	  	
  ]);