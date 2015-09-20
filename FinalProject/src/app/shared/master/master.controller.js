(function() {
  'use strict';

  angular.module('template')

  .controller('MasterController', function (dataObj, $rootScope, State, StudentService, OutreachService, ContactService) {
    var self = this;

    StudentService.init(dataObj.data, dataObj.list);
    StudentService.setActive(dataObj.data[0]);
    ContactService.formatActiveStudent();

    self.displayList = dataObj.list;

    self.onUpdate = function(selectedStudent){
      StudentService.setActive(selectedStudent);
      OutreachService.loadOutreachLogs(State.activeStudent._id);
    };

  });

})();
