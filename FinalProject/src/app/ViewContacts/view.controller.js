(function() {
  'use strict';

  angular.module('template')

  .controller('ViewController', function ($scope, $modal, $log, StudentNavService, ContactService) {
    var self = this;
    self.state = StudentNavService.state;
    self.isActive = {log: true};

    self.activateTab = function(tab){
      self.isActive = {};
      self.isActive[tab] = true;
    }

    self.saveNewContact = function(newContact){
      console.log(newContact)
    }

    self.saveAtsMetaData = function(metaData, contactType){
      StudentNavService.saveAtsMetaData(metaData, contactType);
    }

    self.createOrEditContact = function(){
      console.log('inside createOrEditContact')
      ContactService.createOrEdit();
    };
    // self.createOrEditContact = function(existingContact){
    //   // if no contact is passed through, create a new one
    //   var newContact = existingContact || StudentNavService.createNewContact();
    //   var modalInstance = $modal.open({
    //     animation: true,
    //     templateUrl: 'app/ngBootstrapModal/modals/new-student-form.html',
    //     controller: 'NewStudentInstanceCtrl',
    //     controllerAs: 'newCtrl',
    //     bindToController: true,
    //     size: 'lg',
    //     resolve: {
    //       newContact: function () {
    //         // return $scope.items;
    //         return newContact
    //       }
    //     }
    //   });
    //   // may or may not need this
    //   modalInstance.result.then(function (selectedItem) {
    //     $scope.selected = selectedItem;
    //     console.log('back from modal')
    //   }, function () {
    //     $log.info('Modal dismissed at: ' + new Date());
    //   });
    // };
  })


  // .controller('NewStudentInstanceCtrl', function ($modalInstance, newContact, StudentNavService) {
  //   var self = this;

  //   self.newContact = newContact;

  //   self.save = function (newContact) {
  //     $modalInstance.close('saving new contact');
  //     StudentNavService.addNewContact(newContact);
  //   };

  //   self.cancel = function () {
  //     $modalInstance.dismiss('cancel');
  //   };
  // })


})();
