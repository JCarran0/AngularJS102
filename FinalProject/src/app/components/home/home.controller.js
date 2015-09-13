(function() {
  'use strict';

  angular.module('template')

  .controller('HomeController', function ($scope, $modal, $log, ContactService) {
    var self = this;
    self.state = ContactService.state;
    self.isActive = {log: true};

    self.activateTab = function(tab){
      self.isActive = {};
      self.isActive[tab] = true;
    };

    ContactService.loadStudents();
  });

})();
