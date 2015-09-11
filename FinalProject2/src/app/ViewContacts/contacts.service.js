(function() {
  'use strict';

  angular.module('template')

  .controller('CreateOrEditContactInstanceCtrl', function ($modalInstance, contact, header, StudentNavService) {
    var self = this;

    self.contact = contact;
    self.header = header;

    self.save = function (contact) {
      $modalInstance.close('saving contact');
      StudentNavService.addNewContact(contact);
    };

    self.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  })

  .service('ContactService', function($modal, $log, StudentNavService){
    var self = this;

    self.createOrEdit = function(existingContact){
      // if no contact is passed through, create a new one
      if (existingContact){
        var contact = existingContact;
        var header = "Edit Custom Contact";
      } else {
        var contact = StudentNavService.createNewContact();
        var header = "New Custom Contact";
      }

      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/ngBootstrapModal/modals/edit-contact-form.html',
        controller: 'CreateOrEditContactInstanceCtrl',
        controllerAs: 'contCtrl',
        bindToController: true,
        size: 'lg',
        resolve: {
          contact: function () {
            // return $scope.items;
            return contact;
          },
          header: function(){
            return header;
          }
        }
      });
      // may or may not need this
      modalInstance.result.then(function () {
        $log.info('back from modal')
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    }
  });


})();
