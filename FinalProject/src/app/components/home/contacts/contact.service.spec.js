(function() {
  'use strict';

  beforeEach(function() {
    module('template');
  });

  describe('ContactService Testing', function(){
    var serviceToTest;

    beforeEach(inject(function(_ContactService_) {
      serviceToTest = _ContactService_;
      serviceToTest.loadStudents();
    }));

    it('confirms 2 student fixtures were loaded', function(){
      expect(serviceToTest.state.list.length).toEqual(2);
      expect(serviceToTest.state.data.length).toEqual(2);
    });

    it('confirms the selected student was loaded and formatted appropriately', function(){
      expect(serviceToTest.state.selectedStudent).toBeDefined();
      expect(serviceToTest.state.selectedStudent.contacts).toBeDefined();
      expect(serviceToTest.state.selectedStudent.contacts.length).toEqual(5);
      expect(serviceToTest.state.selectedStudent.contacts[0].isAts).toBe(true);
    });

    it('creates a new contact from newContactFactory', function(){
      var newContact = serviceToTest.createNewContact();
      expect(newContact).toBeDefined();
      expect(newContact.isNew).toBe(true);
    });

    it('adds a new contact', function(){
      var numInitialContacts = serviceToTest.state.selectedStudent.contacts.length;
      var newContact = serviceToTest.createNewContact();
      newContact.first = "First";
      newContact.last = "Last";
      newContact.email = "email@domain.org";
      serviceToTest.addNewContact(newContact);
      var finalCountacts = serviceToTest.state.selectedStudent.contacts;
      var numFinalContacts = finalCountacts.length;
      expect(numFinalContacts).toEqual(numInitialContacts + 1);
      expect(finalCountacts[finalCountacts.length-1].first).toEqual("First");
      expect(finalCountacts[finalCountacts.length-1].last).toEqual("Last");
      expect(finalCountacts[finalCountacts.length-1].email).toEqual("email@domain.org");
    });

    it('deletes a contact', function(){
      var newContact = serviceToTest.createNewContact();
      newContact.first = "First";
      serviceToTest.addNewContact(newContact);
      var initialContacts = serviceToTest.state.selectedStudent.contacts;
      var numInitialContacts = initialContacts.length;
      var contactToDelete = initialContacts[initialContacts.length-1];
      serviceToTest.deleteContact(contactToDelete);
      var finalContacts = serviceToTest.state.selectedStudent.contacts;
      var numFinalContacts = finalContacts.length;
      expect(numFinalContacts).toEqual(numInitialContacts - 1);
      expect(finalContacts).not.toContain(newContact);
    });

    it('swaps out an existing contact with an updated contact', function(){
      var contacts = serviceToTest.state.selectedStudent.contacts;
      var existingContact = contacts[contacts.length-1];
      var updatedContact = angular.copy(existingContact);
      updatedContact.phone = "NEW PHONE NUMBER";
      serviceToTest.swapContacts(updatedContact, existingContact);
      var updatedContacts = serviceToTest.state.selectedStudent.contacts;
      expect(updatedContacts).toContain(updatedContact);
      expect(updatedContacts).not.toContain(existingContact);
    });
  });
})();
