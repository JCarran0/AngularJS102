(function() {
  'use strict';

  angular.module('template')

  .controller('MasterController', function (State, DataService, StudentService, OutreachService) {
    var self = this;

    self.onUpdate = function(selectedStudent){
      StudentService.setActive(selectedStudent);
      console.log('onUpdate', State.activeStudent._id)
      OutreachService.loadOutreachLogs(State.activeStudent._id);
    }

    DataService.loadStudents(function(err, dataObj){
      StudentService.init(dataObj.data, dataObj.list);
      StudentService.setActive(dataObj.list[0]);
      self.displayList = dataObj.list;
      console.log('onLoad', dataObj.data[0]._id)
      OutreachService.loadOutreachLogs(dataObj.data[0]._id);
    });

  });

})();
