(function() {
  'use strict';

  angular.module('template')

  .controller('LogOutreachController', function (OutreachService, ActivityTypes, OutreachMethods) {
    var self = this;
    self.outreachState = OutreachService.outreachState; // outreach state allows the selected values to persist when views change
    self.activities = ActivityTypes;
    self.outreachMethod = OutreachMethods;

    self.submitOutreachLog = function(){
      self.outreachState.newLog.timestamp = new Date().toLocaleString();
      OutreachService.saveOutreachLog(self.outreachState.newLog);
      self.outreachState.newLog = {};
    };

  });
})();
