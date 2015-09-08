(function() {
  'use strict';

  angular.module('template')

  .controller('ViewController', function (StudentNavService) {
    var self = this;
    self.state = StudentNavService.state;
    self.isActive = {log: true};

    self.activateTab = function(tab){
      self.isActive = {};
      self.isActive[tab] = true;
    }

    self.addBlankContact = function(){
      console.log('adding blank contact');
      var blankContact = {
        isBlank: true,
        title: 'Custom Contact:'
      }
      StudentNavService.addNewContact(blankContact);
    }

    self.saveNewContact = function(newContact){
      console.log(newContact)
    }
  })

  .directive('jcContactField', function(){
    return {
      templateUrl: 'app/ViewContacts/jc-contact-field.html',
      controller: 'JcContactFieldController',
      controllerAs: 'contactCtrl',
      bindToController: true,
      scope: {
        contact: '=',
        saveNewContact: '&'
      }
    }
  })

  .controller('JcContactFieldController', function($scope, $modal, $log){
    var self = this;
    self.editFieldIsCollapsed = true;

    self.saveNewContact = function(newContact){
      console.log(newContact);
    }

    self.openDialerModal = function(phoneNumber){
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/ngBootstrapModal/modals/auto-dialer.html',
        controller: 'ModalInstanceCtrl',
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

  .controller('ModalInstanceCtrl', function ($scope, $modalInstance, phoneNumber) {
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
