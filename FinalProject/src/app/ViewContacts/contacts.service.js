(function() {
  'use strict';

  angular.module('template')

  .controller('CreateOrEditContactInstanceCtrl', function ($modalInstance, contact, header, StudentNavService) {
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

    self.setDirty = function(){
      self.editContactForm.$setDirty();
    };
  })

  .service('ContactService', function($modal, $log, StudentNavService){
    var self = this;

    self.createOrEdit = function(existingContact){
      var contact;
      var header;
      if (existingContact){
        contact = existingContact;
        header = existingContact.isAts ? "Edit ATS Contact" : "Edit Custom Contact";
      } else {
        contact = StudentNavService.createNewContact();
        header = "New Custom Contact";
      }

      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/ngBootstrapModal/modals/edit-contact-form.html',
        controller: 'CreateOrEditContactInstanceCtrl',
        controllerAs: 'contCtrl',
        bindToController: true,
        size: 'md',
        resolve: {
          contact: function () {
            return contact;
          },
          header: function(){
            return header;
          }
        }
      });
      // may or may not need this
      modalInstance.result.then(function () {
        $log.debug('Update database here');
      }, function () {
        $log.info('Action cancelled - contact reset');
      });
    };
  });


})();
