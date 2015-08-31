(function() {
  'use strict';

  angular.module('contactCustomDirective', [])

  .controller('contactController', function(){
    var self = this;

    self.string = "hello world"
  })

  .directive('homeContact', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/ViewContacts/partials/contact.template.html'
    };
  });

})();
