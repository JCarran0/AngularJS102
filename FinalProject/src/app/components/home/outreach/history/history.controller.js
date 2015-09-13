(function() {
  'use strict';

  angular.module('template')

  .controller('ViewHistoryController', function (OutreachService) {
    var self = this;
    self.outreachLogs = OutreachService.outreachLogs;

  });
})();
