(function() {
  'use strict';

  angular.module('template')

  .service('ContactService', function($log, StudentNavService, NewContactFactory){
    var self = this;
    self.state = StudentNavService.state;

    self.loadStudents = function(){
      StudentNavService.loadStudents(function(){
        self.formatSelectedStudent();
      });
    };

    // All this contact business should be moved to another service
    // Possibly the contact.controller.js file???
    // Or else a new service.
    self.addNewContact = function(newContact){
      delete newContact.isNew;
      self.state.selectedStudent.additionalContactDetails.altContacts.push(newContact);
      self.formatSelectedStudent();
    };

    self.createNewContact = function(){
      return new NewContactFactory();
    };

    self.deleteContact = function(contact){
      var alts = self.state.selectedStudent.additionalContactDetails.altContacts;
      var indx = alts.indexOf(contact);
      alts.splice(indx, 1);
      self.formatSelectedStudent();
    };

    self.swapContacts = function(newContact, existingContact){
      var contacts = self.state.selectedStudent.contacts;
      var indx = contacts.indexOf(existingContact);
      contacts.splice(indx, 1, newContact); // swap existing with new
    };

    /* This function builds an array of contacts and collapses
    ** some of the contact fields for easier use within the markup
    ** I.e. creates 'address' field from 'street', 'apt', 'zip', etc.
    **
    ** Also joins ATS contacts with custom contacts
    **/
    self.formatSelectedStudent = function(){
      var contactList = [];
      var student = self.state.selectedStudent;
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
        alts[altContact].contactField = altContact;
        alts[altContact].title = "Custom Contact: " + (alts[altContact].name || "");
        contactList.push(alts[altContact]);
      }
      student.contacts = contactList;
    };

  });

})();

