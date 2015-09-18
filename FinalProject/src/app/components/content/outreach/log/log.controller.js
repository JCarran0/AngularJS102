(function() {
  'use strict';

  angular.module('template')

  .controller('LogOutreachController', function (State, OutreachService, ActivityTypes, OutreachMethods, CONSTANTS) {
    var self = this;
    self.header = CONSTANTS.headers.logOutreach;
    self.state = State;
    self.activities = ActivityTypes;
    self.outreachMethod = OutreachMethods;

    self.submitOutreachLog = function(){
      self.state.outreachState.newLog.timestamp = new Date().toLocaleString();
      console.log(15)
      OutreachService.saveOutreachLog(self.state.outreachState.newLog);
      console.log(17)
      self.state.outreachState.newLog = {};
    };

  });
})();
