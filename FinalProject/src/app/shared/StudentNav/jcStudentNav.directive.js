(function() {
  'use strict';

  angular.module('StudentNavModule')

  .directive('jcStudentNav', function (){
    return {
      templateUrl: 'app/shared/studentNav/jcStudentNav.html',
      controller: 'StudentNavController',
      controllerAs: 'ctrl',
      bindToController: true
    };
  });

})();
