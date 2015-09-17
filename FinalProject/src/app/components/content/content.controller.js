(function() {
  'use strict';

  angular.module('template')

  .controller('ContentController', function ($rootScope, $modal, $log, ContactService, OutreachService, CONSTANTS) {
    var self = this;
    self.state = ContactService.state;
    self.isActive = {log: true};
    self.header = CONSTANTS.headers.home;
    self.tabLabels = CONSTANTS.tabLabels;
    self.activateTab = function(tab){
      self.isActive = {};
      self.isActive[tab] = true;
    };

    $rootScope.$on('newStudentLoaded', function (event) {
      event.preventDefault(); // signal to nested child scopes that action has already been taken
      ContactService.formatSelectedStudent();
      OutreachService.loadOutreachLogs();
    });


    ContactService.loadStudents();
  });

})();
