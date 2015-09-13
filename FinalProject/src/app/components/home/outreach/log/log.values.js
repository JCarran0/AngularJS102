(function() {
  'use strict';

  angular.module('template')

  .value('ActivityTypes', [
    {
      _id: "general",
      name: "General outreach"
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
    }
  ])

  .value('OutreachMethods', [
    "Phone call home",
    "Email sent home",
    "Spoke with student"
  ])

})();
