(function() {
  'use strict';

  angular.module('template')

  .controller('ListController', function (ContactList) {
    var self = this;

    self.list = ContactList.list;
  });

})();
