(function() {
  'use strict';

  angular.module('template')


  .controller('ContactEditInstanceController', function ($modalInstance, contact, header, StudentNavService) {
    var self = this;

    self.contact = contact;
    self.header = header;

    self.save = function (contact) {
      if (contact.isNew){
        StudentNavService.addNewContact(contact);
      }
      $modalInstance.close();
    };

    self.cancel = function () {
      StudentNavService.restoreSelectedStudent();
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
