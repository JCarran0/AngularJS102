(function() {
  'use strict';

  angular.module('template')

  .directive('jcDialerButton', function(){
    return {
      animation: true,
      templateUrl: 'app/components/content/contacts/dialer/jcDialerButton.html',
      controller: 'DialerButtonController',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        contact: '='
      }
    };
  });

})();
