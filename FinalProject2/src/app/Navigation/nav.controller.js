(function() {
  'use strict';

  angular.module('template')

  .controller('NavController', function (StudentNavService) {
    var self = this;

    self.state = StudentNavService.state;
    self.list = StudentNavService.list;

    self.setSelected = function(selectedStudent) {
      console.log(selectedStudent);
      StudentNavService.setSelected(selectedStudent);
    };
    self.next = StudentNavService.next;
    self.previous = StudentNavService.previous;
  });

})();
