(function() {
  'use strict';

  angular.module('template')

  .controller('ContactEditButtonController', function($scope, $modal, $log, ContactService){
    var self = this;

    if (self.type === 'btn') {
      self.isButton = true;
    }
    if (self.type === 'icon') {
      self.isIcon = true;
    }

    self.openEditor = function(existingContact){
      var contact;
      var header;

      if (existingContact){
        contact = existingContact;
        header = existingContact.isAts ? "Edit ATS Contact" : "Edit Custom Contact";
      } else {
        contact = ContactService.createNewContact();
        header = "New Custom Contact";
      }

      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/components/home/contacts/contactEditor/jcContactEditInstance.html',
        controller: 'ContactEditInstanceController',
        controllerAs: 'ctrl',
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
    }

  })
})();
