(function() {
  'use strict';

  angular.module('template')

  .controller('MasterController', function (State, DataService, StudentService, OutreachService) {
    var self = this;

    self.onUpdate = function(selectedStudent){
      StudentService.setActive(selectedStudent);
    }

    DataService.loadStudents(function(err, dataObj){
      StudentService.init(dataObj.data, dataObj.list);
      StudentService.setActive(dataObj.list[0]);
      self.displayList = dataObj.list;
    });
    OutreachService.loadOutreachLogs("90998754796B049");
  });

})();
