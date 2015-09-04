(function() {
  'use strict';

  angular.module('template')

  .controller('ViewController', function (StudentNavService) {
    var self = this;
    self.state = StudentNavService.state;
  })

  .directive('jcEditContactFields', function(){
    return {
      templateUrl: 'app/ViewContacts/jc-edit-contact-fields.html'
    }
  })

})();
