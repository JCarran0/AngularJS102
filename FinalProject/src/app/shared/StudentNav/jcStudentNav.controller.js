(function() {
  'use strict';

  angular.module('StudentNavModule')

  .controller('StudentNavController', function (StudentNavService) {
    var self = this;

    self.state = StudentNavService.state;
    self.list = StudentNavService.state.list;

    self.setIndex = function(selectedStudent) {
      StudentNavService.setIndex(selectedStudent);
    };

    self.next = function(){
      StudentNavService.next();
    };

    self.previous = function(){
      StudentNavService.previous();
    };
  });

})();
