(function() {
  'use strict';

  angular.module('template')

  .directive('jcOutreachLog', function(){
    return {
      templateUrl: 'app/components/home/outreach/history/jcOutreachLog.html',
      controller: 'JcOutreachLogController',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        log: '='
      }
    };
  });

})();








