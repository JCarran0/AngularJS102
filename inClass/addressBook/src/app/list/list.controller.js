(function() {
  'use strict';

  angular.module('template')

  .controller('ListController', function (ContactList) {
    var self = this;

    self.list = ContactList.list;

    self.deleteThisUser = function(user){
      ContactList.deleteUser(user);
    };
  })

  .directive('jcContact', function(){
    return {
      templateUrl: 'app/list/jc-contact.html',
      controller: 'JcListController',
      controllerAs: 'contactCtrl',
      bindToController: true,
      scope: {
        contact: '=',
        deleteUser: '&'
      }
    }
  })

  .controller("JcListController", function(){
    var self = this;

    self.showDetails = function(){
      self.show = true;
    }
    self.editDetails = function(){
      console.log('edit details')
    }
  })

})();


