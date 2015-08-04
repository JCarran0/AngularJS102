var myApp = angular.module('MyApp', ['CustomServices']);

myApp.controller('MyController', function(Student) {
  var self = this;

  self.student = new Student('Jared');
  
  self.activeStudent = {
  	name: '',
  	assignmentName: '',
  	score: 0
  };
});
