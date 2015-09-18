(function() {
  'use strict';

  angular.module('StudentNavModule')

  .directive('jcStudentNav', function ($q){

    return {
      templateUrl: 'app/shared/studentNav/jcStudentNav.html',
      controller: 'StudentNavController',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        displayList: '=',
        onUpdate: '&'
      }
    };
  });

})();
