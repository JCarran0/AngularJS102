(function() {
  'use strict';

  angular.module('template')

  .directive('jcContact', function(){
    return {
      templateUrl: 'app/components/content/contacts/jcContact.html',
      controller: 'ContactController',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        contact: '='
      }
    };
  });

})();








