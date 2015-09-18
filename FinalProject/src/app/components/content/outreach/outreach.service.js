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
      var selected = StudentNavService.state.selectedStudent;
      if (!selected.outreachLogs){
        selected.outreachLogs = [];
      }
      selected.outreachLogs.push(newLog);
      self.loadOutreachLogs();
      $log.debug('Save to db here');
    };
  });
})();
