(function() {
  'use strict';

  angular.module('template')

  .directive('jcContactEditButton', function(){
    return {
      templateUrl: 'app/components/home/contacts/contactEditor/jcContactEditButton.html',
      controller: 'ContactEditButtonController',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        contact: '=',
        type: '@'
      }
    };
  });

})();
