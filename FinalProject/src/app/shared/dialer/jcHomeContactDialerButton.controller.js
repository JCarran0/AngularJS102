(function() {
  'use strict';

  angular.module('template')

  .controller('HomeContactDialerButtonController', function($scope, $modal, $log){
    var self = this;

    self.openDialerModal = function(phoneNumber){
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/shared/dialer/homeContactDialer.modal.html',
        controller: 'HomeContactDialerInstanceController',
        controllerAs: 'modalCtrl',
        bindToController: true,
        size: 'md',
        resolve: {
          phoneNumber: function () {
            return phoneNumber;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  })

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
