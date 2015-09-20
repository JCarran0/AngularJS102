(function() {
  'use strict';

  angular.module('template')

  .directive('jcContact', function(){
    return {
      templateUrl: 'app/shared/contacts/jcContact.html',
      controller: 'ContactController',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        contact: '='
      }
    };
  });

})();








