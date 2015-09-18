(function() {
  'use strict';

  angular.module('template')

  .controller('ContentController', function (State, $state, $modal, ContactService, OutreachService, CONSTANTS) {
    var self = this;
    self.state = State;
    self.isActive = {log: true};
    self.header = CONSTANTS.headers.home;
    self.tabLabels = CONSTANTS.tabLabels;
    self.isActive = {};
    self.isActive[$state.current.data.tab] = true;

    self.activateTab = function(tab){
      self.isActive = {};
      self.isActive[tab] = true;
    };
  });

})();
