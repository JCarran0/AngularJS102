(function() {
  'use strict';

  angular.module('template')

  .controller('NavController', function (StudentNavService) {
    var self = this;

    self.state = StudentNavService.state;
    self.list = StudentNavService.state.list;

    self.setIndex = function(selectedStudent) {
      StudentNavService.setIndex(selectedStudent);
    };
    self.next = StudentNavService.next;
    self.previous = StudentNavService.previous;
  });

})();
