(function() {
  'use strict';

  angular.module('template')

  .controller('HomeController', function ($scope, $modal, $log, StudentNavService) {
    var self = this;
    self.state = StudentNavService.state;
    self.isActive = {log: true};

    self.activateTab = function(tab){
      self.isActive = {};
      self.isActive[tab] = true;
    };
  });

})();
