(function() {
  'use strict';

  angular.module('template')

  .controller('HomeContactDialerInstanceController', function ($scope, $modalInstance, phoneNumber) {
    var self = this;

    self.phoneNumber = phoneNumber;

    self.ok = function () {
      $modalInstance.close(self.phoneNumber);
    };

    self.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  })

})();
