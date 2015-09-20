(function() {
  'use strict';

  angular.module('template')


  .controller('ContactEditInstanceController', function ($modalInstance, contact, header, ContactService) {
    var self = this;

    self.stagedContact = angular.copy(contact);
    self.header = header;

    self.save = function (modContact) {
      if (modContact.isNew){
        ContactService.addNewContact(modContact);
      } else {
        ContactService.swapContacts(modContact, contact);
      }
      ContactService.formatActiveStudent();
      $modalInstance.close();
    };

    self.cancel = function () {
      self.stagedContact = angular.copy(contact);
      $modalInstance.dismiss();
    };

    self.deleteContact = function(){
      ContactService.deleteContact(contact);
      ContactService.formatActiveStudent();
      $modalInstance.close();
    };

    self.setDirty = function(){
      self.editContactForm.$setDirty();
    };
  });

})();
