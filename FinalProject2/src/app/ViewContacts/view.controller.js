(function() {
  'use strict';

  angular.module('template')

  .controller('ViewController', function (StudentNavService) {
    var self = this;
    self.state = StudentNavService.state;
  })

  .directive('jcContactField', function(){
    return {
      templateUrl: 'app/ViewContacts/jc-contact-field.html',
      controller: 'JcContactFieldController',
      controllerAs: 'contactCtrl',
      bindToController: true,
      scope: {
        state: '='
      }
    }
  })

  .controller('JcContactFieldController', function(){
    var self = this;

    console.log('hello world!')
  })

})();
