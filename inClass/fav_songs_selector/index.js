var MyApp = angular.module('MyApp', ['CustomServices']);

MyApp.controller('MyController', function(SONGLIST, PendingSubmission) {
  var self = this;

  self.pendingSubmission = new PendingSubmission();

  // defaults
  self.selectedGenre = 'all';
  self.type = 'clean';
  self.disallowExplicit = true;

  self.songList = SONGLIST;

  self.addOrRemoveSong = function(songObj){
  	if (songObj.isSelected){
  		self.pendingSubmission.addSong({
  			title: songObj.title,
  			type: self.type
  		});
  	} else {
  		self.pendingSubmission.removeSong(songObj.title);
  	}
  }

  self.checkAge = function(){
  	if (self.pendingSubmission.age < 16){
  		self.disallowExplicit = true;
  	} else {
  		self.disallowExplicit = false;
  	}
  }
});