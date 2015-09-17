(function() {
  'use strict';

  angular.module('template')

  .controller('ViewHistoryController', function (OutreachService, CONSTANTS) {
    var self = this;
    self.header = CONSTANTS.headers.outreachLogs;
    self.state = OutreachService.state;
  });
})();
