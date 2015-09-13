(function() {
  'use strict';

  angular.module('template')

  .service('OutreachService', function (StudentNavService) {
    var self = this;

    self.state = StudentNavService.state;
    self.outreachState = {};

  });

})();
