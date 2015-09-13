(function() {
  'use strict';

  angular.module('template')

  .service('ContactService', function(StudentNavService){
    var self = this;
    self.state = StudentNavService.state;

    self.loadStudents = function(){
      StudentNavService.loadStudents();
    }

  })

})();

