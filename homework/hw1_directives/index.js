var myApp = angular.module('MyApp', []);


myApp.controller('MyController', function() {
  var self = this;

  self.headerTitle = "Welcome To Jared's First Homework";
  self.colors = ['red', 'blue', 'green', 'orange', 'gray', 'none'];
  self.selectedColor = 'none';
});