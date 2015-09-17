(function() {
  'use strict';

  angular.module('template')

  .service('OutreachService', function ($log) {
    var self = this;
    self.state = {};

    // self.loadOutreachLogs = function(){
    //   self.state.outreachLogs = StudentNavService.state.selectedStudent.outreachLogs;
    // };

    // self.saveOutreachLog = function(newLog){
    //   var selected = StudentNavService.state.selectedStudent;
    //   if (!selected.outreachLogs){
    //     selected.outreachLogs = [];
    //   }
    //   selected.outreachLogs.push(newLog);
    //   self.loadOutreachLogs();
    //   $log.debug('Save to db here');
    // };
  });

})();
