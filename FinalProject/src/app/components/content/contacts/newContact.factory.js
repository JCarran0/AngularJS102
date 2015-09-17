(function() {
  'use strict';

  angular.module('template')

  .factory('NewContactFactory', function(){
    return function(){
      this.isNew = true;
      this.title = "Cutsom Contact";
      this.first = "";
      this.last = "";
      this.email = "";
      this.phone = "";
      this.phoneType = "";
    };
  });
})();
