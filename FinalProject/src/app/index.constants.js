(function() {
  'use strict';

  angular.module('template')

  .constant('CONSTANTS', {
    headers: {
      home: "Home Contacts",
      logOutreach: "New Outreach Log",
      outreachLogs: "Outreach History",
      studentData: "Relevant Student Data"
    },
    tabLabels: {
      logOutreach: "Log Outreach",
      outreachLogs: "View Logs",
      studentData: "Student Data"
    }
  });

})();
