(function() {
  'use strict';

  angular.module('template')


  .directive('jcContactField', function(){
    return {
      templateUrl: 'app/ViewContacts/jc-contact-field.html',
      controller: 'JcContactFieldController',
      controllerAs: 'contactCtrl',
      bindToController: true,
      scope: {
        contact: '=',
        saveAtsMetaData: '&'
      }
    }
  })

  .controller('JcContactFieldController', function($scope, $modal, $log, ContactService){
    var self = this;
    self.editFieldIsCollapsed = true;

    self.editContact = function(contactType){
      if (contactType === 'ats') {
        self.editFieldIsCollapsed = !self.editFieldIsCollapsed;
      } else {
        ContactService.createOrEdit(self.contact);
      }
    }

    self.openDialerModal = function(phoneNumber){
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/ngBootstrapModal/modals/auto-dialer.html',
        controller: 'DialerModalInstanceCtrl',
        controllerAs: 'modalCtrl',
        bindToController: true,
        size: 'md',
        resolve: {
          phoneNumber: function () {
            // return $scope.items;
            return phoneNumber
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    }
  })

  .controller('DialerModalInstanceCtrl', function ($scope, $modalInstance, phoneNumber) {
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








