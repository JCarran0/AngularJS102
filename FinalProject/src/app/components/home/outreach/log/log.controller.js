(function() {
  'use strict';

  angular.module('template')

  .controller('LogOutreachController', function (OutreachService) {
    var self = this;
    self.outreachState = OutreachService.outreachState;

    self.activities = [
      {
        _id: "general",
        name: "General home outreach"
      },
      {
        _id: "attendance",
        name: "Attendance"
      },
      {
        _id: "discipline",
        name: "Discipline"
      },
      {
        _id: "regents",
        name: "Regents"
      },
    ];

    self.options = ["Phone call home", "Email sent home", "Spoke with student"];


    self.submitLog = function(){
      self.selectedActivity.timestamp = new Date().toLocaleString();
      self.selectedActivity = {};
    };

  });
})();
