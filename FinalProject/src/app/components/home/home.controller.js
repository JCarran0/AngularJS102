(function() {
  'use strict';

  angular.module('template')

  .controller('HomeController', function ($rootScope, $modal, $log, ContactService) {
    var self = this;
    self.state = ContactService.state;
    self.isActive = {log: true};

    self.activateTab = function(tab){
      self.isActive = {};
      self.isActive[tab] = true;
    };

    $rootScope.$on('newStudentLoaded', function (event, count) {
      event.preventDefault(); // signal to nested child scopes that action has already been taken
      ContactService.formatSelectedStudent();
    });


    ContactService.loadStudents();
  });

})();
