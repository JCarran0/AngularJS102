(function() {
  'use strict';

  angular.module('template')

  .controller('ContentController', function (State, $modal, ContactService, OutreachService, CONSTANTS) {
    var self = this;
    self.state = State;
    self.isActive = {log: true};
    self.header = CONSTANTS.headers.home;
    self.tabLabels = CONSTANTS.tabLabels;
    self.isActive = {

    };
    console.log('>> Need to >> activate log outreach tab on load')

    self.activateTab = function(tab){
      self.isActive = {};
      self.isActive[tab] = true;
    };
  });

})();
