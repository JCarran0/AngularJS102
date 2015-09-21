(function() {
  'use strict';

  angular.module('template')

  .service('ContactService', function(State, NewContactFactory){
    var self = this;
    self.state = State;

    // All this contact business should be moved to another service
    // Possibly the contact.controller.js file???
    // Or else a new service.
    self.addNewContact = function(newContact){
      delete newContact.isNew;
      self.state.activeStudent.additionalContactDetails.altContacts.push(newContact);
    };

    self.createNewContact = function(){
      return new NewContactFactory();
    };

    self.confirmContactExistence = function(arr, item){
      var indx = arr.indexOf(item);
      if (indx === -1) {
        throw new Error("Selected contact does not exist in contact array");
      } else {
        return indx;
      }
    };

    self.deleteContact = function(contact){
      if(contact.type !== 'User Created'){
        throw new Error('Cannot delete non-custom contacts');
      }
      var alts = self.state.activeStudent.additionalContactDetails.altContacts;
      var indx = self.confirmContactExistence(alts, contact);
      alts.splice(indx, 1);
    };

    self.swapContacts = function(updatedContact, existingContact){
      var active = self.state.activeStudent;
      if(existingContact.type === 'User Created'){
        var alts = active.additionalContactDetails.altContacts;
        var indx = self.confirmContactExistence(alts, existingContact);
        alts.splice(indx, 1, updatedContact);
      } else {
        var contactField = existingContact.contactField;
        var metaData = active.additionalContactDetails.atsMetaData[contactField];
        metaData.email = updatedContact.email || "";
        if (!metaData.notes){
          metaData.notes = [];
        }
        if(updatedContact.newNote){
          metaData.notes.push(updatedContact.newNote);
        }
        metaData.emailIsBad = updatedContact.atsMetaData.emailIsBad || false;
        metaData.numberIsBad = updatedContact.atsMetaData.numberIsBad || false;
        metaData.isCellPhone = updatedContact.atsMetaData.isCellPhone || false;
        metaData.relationship = updatedContact.atsMetaData.relationship || null;
      }
    };

    /* This function builds an array of contacts and collapses
    ** some of the contact fields for easier use within the markup
    ** I.e. creates 'address' field from 'street', 'apt', 'zip', etc.
    **
    ** Also joins ATS contacts with custom contacts
    **/
    self.formatActiveStudent = function(){
      var contactList = [];
      var student = self.state.activeStudent;
      var ats = student.atsContacts;
      var addlDetails = student.additionalContactDetails;
      var alts = addlDetails.altContacts;
      for (var atsContact in ats){
        // concatentate ATS data with ATS meta data
        var metaData = addlDetails.atsMetaData[atsContact];
        ats[atsContact].atsMetaData = metaData;
        ats[atsContact].email = metaData.email || ats[atsContact].email || '';
        ats[atsContact].notes = metaData.notes ? metaData.notes.join('<br>') : '';
        // make address a single entity for readability
        if (ats[atsContact].street){
          var address = ats[atsContact].street;
          address = ats[atsContact].apt ? (address + ' ' + ats[atsContact].apt) : address;
          address += ', ' + ats[atsContact].city + ', NY ' + ats[atsContact].zip;
          ats[atsContact].address = address;
        }
        // concat first + last name
        if (ats[atsContact].first){
          ats[atsContact].name = ats[atsContact].first;
          ats[atsContact].name += " " + ats[atsContact].last;
        }
        ats[atsContact].isAts = true;
        ats[atsContact].contactField = atsContact;
        ats[atsContact].title = "ATS: " + (ats[atsContact].name || "");
        contactList.push(ats[atsContact]);
      }

      // add alternative contacts to contacts array
      for (var altContact in alts){
        if (alts[altContact].first){
          alts[altContact].name = alts[altContact].first;
          alts[altContact].name += " " + alts[altContact].last;
        }
        // alts[altContact].contactField = altContact;
        alts[altContact].title = "Custom Contact: " + (alts[altContact].name || "");
        alts[altContact].type = 'User Created';
        contactList.push(alts[altContact]);
      }
      student.contacts = contactList;
    };

  });

})();

