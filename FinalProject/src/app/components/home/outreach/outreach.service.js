(function() {
  'use strict';

  angular.module('template')

  .service('OutreachService', function ($log, StudentNavService) {
    var self = this;

    self.state = StudentNavService.state;
    self.outreachState = {};
    self.outreachLogs = [
      { "outreachType": "attendance", "outreachMethod": "Phone call home", "dateOfAbsence": "2015-09-11T04:00:00.000Z", "durationOfAbsence": 1, "outreachNotes": "Jared was absent again on Friday. Called his mother. She was very upset.", "timestamp": "9/13/2015, 2:00:19 PM" },
      {"outreachType":"discipline","outreachMethod":"Phone call home","numberDialed":"(222) 494-0002","outreachNotes":"Jared was using really inappropriate language. Told his mother.","timestamp":"9/13/2015, 5:43:22 PM"},
      {"outreachType":"regents","outreachMethod":"Email sent home","recipientEmail":"paul@email.com","outreachNotes":"Emailed Jared's father to remind him how important the upcoming exam is.","timestamp":"9/13/2015, 5:45:53 PM"}
    ];

    self.saveOutreachLog = function(newLog){
      self.outreachLogs.push(newLog);
      $log.debug('Save to db here')
    }

  });

})();
