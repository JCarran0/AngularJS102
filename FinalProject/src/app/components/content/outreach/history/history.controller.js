(function() {
  'use strict';

  angular.module('template')

  .controller('ViewHistoryController', function (State, CONSTANTS) {
    var self = this;
    self.header = CONSTANTS.headers.outreachLogs;
    self.state = State;
  });
})();
