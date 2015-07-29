var myApp = angular.module('lesson1', []);


myApp.controller('MyController', function() {
  var self = this;

  self.user = {
  	first: "",
  	last: ""
  }

  self.restorePoint = {};

  self.isEditing = false;

  self.setEdit = function(){
	self.restorePoint = angular.copy(self.user);
	self.isEditing = true;
  }

  self.cancelEdits = function(){
  	self.user = angular.copy(self.restorePoint);
  	self.isEditing = false;
  }

  self.saveEdits = function(){
  	self.isEditing = false;
  }  

});