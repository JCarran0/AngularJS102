(function() {
  'use strict';

  angular.module('template')

  .service('OutreachService', function (State, DataService) {
    var self = this;

    self.loadOutreachLogs = function(studentId){
      DataService.loadOutreachLogs(studentId, function(err, logs){
        if (err) {
          throw err;
        }
        State.outreachLogs = logs;
      });
    };

    self.saveOutreachLog = function(newLog){
      if (!State.outreachLogs){
        State.outreachLogs = [];
      }
      State.outreachLogs.push(newLog);
      console.log('>> Need to >> Save to db here');
    };
  });
})();
