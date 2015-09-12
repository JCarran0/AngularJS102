(function() {
  'use strict';

  angular.module('template')

  .directive('jcContact', function(){
    return {
      templateUrl: 'app/components/home/contacts/jcContact.html',
      controller: 'ContactController',
      controllerAs: 'contactCtrl',
      bindToController: true,
      scope: {
        contact: '=',
        saveAtsMetaData: '&'
      }
    };
  })

  .controller('ContactController', function(ContactService){
    var self = this;
    self.editFieldIsCollapsed = true;

    self.editContact = function(contact){
      ContactService.createOrEdit(contact);
    };
  })
})();








