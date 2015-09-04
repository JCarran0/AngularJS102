(function() {
  'use strict';

  angular.module('template')

  .controller('MainController', function (Contact, ContactList) {
    var self = this;

    self.contacts = ContactList.list;

    self.addNewContact = function(){
      ContactList.add(new Contact(self.newContact));
      self.newContact = {};
    }

    self.deleteUser = function(){
      ContactList.deleteUser();
    }
  });

})();
