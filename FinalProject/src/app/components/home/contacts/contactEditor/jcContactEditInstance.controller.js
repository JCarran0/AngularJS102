(function() {
  'use strict';

  angular.module('template')


  .controller('ContactEditInstanceController', function ($modalInstance, contact, header, StudentNavService) {
    var self = this;

    self.stagedContact = angular.copy(contact);
    self.header = header;

    self.save = function (modContact) {
      if (modContact.isNew){
        StudentNavService.addNewContact(modContact);
      } else {
        StudentNavService.swapContacts(modContact, contact);
      }
      $modalInstance.close();
    };

    self.cancel = function () {
      self.stagedContact = angular.copy(contact);
      $modalInstance.dismiss();
    };

    self.deleteContact = function(contact){
      $modalInstance.close();
      StudentNavService.deleteContact(contact);
    };

    self.setDirty = function(){
      self.editContactForm.$setDirty();
    };
  })

})();
