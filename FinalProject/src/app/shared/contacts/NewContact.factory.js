(function() {
  'use strict';

  angular.module('template')

  .factory('NewContactFactory', function(){
    return function(){
      this.isNew = true;
      this.type = "User Created";
      this.title = "Custom Contact";
      this.first = "";
      this.last = "";
      this.email = "";
      this.phone = "";
      this.phoneType = "";
    };
  });
})();
