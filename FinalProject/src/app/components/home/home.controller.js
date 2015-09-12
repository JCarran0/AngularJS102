(function() {
  'use strict';

  angular.module('template')

  .controller('HomeController', function ($scope, $modal, $log, StudentNavService, ContactService) {
    var self = this;
    self.state = StudentNavService.state;
    self.isActive = {log: true};

    self.activateTab = function(tab){
      self.isActive = {};
      self.isActive[tab] = true;
    };

    self.saveNewContact = function(newContact){
      $log.debug('save new contact??? ', newContact)
    };

    // self.saveAtsMetaData = function(metaData, contactType){
    //   StudentNavService.saveAtsMetaData(metaData, contactType);
    // }

    self.createOrEditContact = function(){
      ContactService.createOrEdit();
    };
  });

})();
