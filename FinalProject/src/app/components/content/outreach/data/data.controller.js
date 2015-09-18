(function() {
  'use strict';

  angular.module('template')

  .controller('StudentDataController', function (CONSTANTS) {
    var self = this;
    self.header = CONSTANTS.headers.studentData;

  });
})();
