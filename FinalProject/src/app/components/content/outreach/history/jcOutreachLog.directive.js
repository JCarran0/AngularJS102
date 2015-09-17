(function() {
  'use strict';

  angular.module('template')

  .directive('jcOutreachLog', function(){
    return {
      templateUrl: 'app/components/content/outreach/history/jcOutreachLog.html',
      controller: 'JcOutreachLogController',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        log: '='
      }
    };
  });

})();








