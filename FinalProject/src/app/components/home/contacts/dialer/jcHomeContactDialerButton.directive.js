(function() {
  'use strict';

  angular.module('template')

  .directive('jcHomeContactDialerButton', function(){
    return {
      animation: true,
      templateUrl: 'app/components/home/contacts/dialer/jcHomeContactDialerButton.html',
      controller: 'HomeContactDialerButtonController',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        contact: '='
      }
    }
  })

})();
