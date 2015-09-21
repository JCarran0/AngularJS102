(function() {
  'use strict';

  beforeEach(function(){
    module('template');
  });

  var mockState, mockNewContact, testContactService;

  beforeEach(inject(function(State, _ContactService_){
    mockState = State;
    mockNewContact = {
      isNew: true,
      title: "Custom Contact",
      type: "User Created",
      first: "",
      last: "",
      email: "",
      phone: "",
      phoneType: ""
    };
    testContactService = _ContactService_;
  }));


  describe('ContactService', function(){
    describe('ContactService.addNewContact', function(){
      beforeEach(function(){
        mockState.activeStudent = {
          additionalContactDetails: {
            altContacts: [{
              title: "Custom Contact",
              type: "User Created",
              first: "Jared",
              last: "Carrano",
              email: "jared@email.org",
              phone: "555 555 5555",
              phoneType: "mobile"
            }]
          }
        };
      });

      it('deletes the isNew field before adding', function(){
        testContactService.addNewContact(mockNewContact);
        expect(mockNewContact.isNew).not.toBeDefined();
      });

      it('pushes a new contact to the altContacts array', function(){
        var numInitialContacts = testContactService.state.activeStudent.additionalContactDetails.altContacts.length;
        testContactService.addNewContact(mockNewContact);
        var finalContacts = testContactService.state.activeStudent.additionalContactDetails.altContacts;
        var numFinalContacts = finalContacts.length;
        expect(numFinalContacts).toEqual(numInitialContacts + 1);
      });
    });
  });


  describe('ContactService.createNewContact', function(){
    it('instantiates a NewContactFactory instance', function(){

      // Not sure why this works without injecting NewContactFactory.
      // How is it available inside the context of the ContactService?

      // var NewContactFactory;
      // inject(function(_NewContactFactory_){
      //   NewContactFactory = _NewContactFactory_;
      // });

      var newContact = testContactService.createNewContact();
      expect(newContact).toBeDefined();
      expect(newContact.isNew).toBe(true);
      expect(newContact.title).toEqual('Custom Contact');
      expect(newContact.type).toEqual('User Created');
    });
  });

  describe('ContactService.confirmContactExistence', function(){

    it('throws an error when the obj does not exist in the array', function(){
      var arr = [{one: 1}, {two: 2}];
      var obj = {three: 3};
      var test = function(){
        testContactService.confirmContactExistence(arr, obj);
      };
      expect(test).toThrowError('Selected contact does not exist in contact array');
    });

    it('returns the index of an objects location within an array', function(){
      var arr = [{one: 1}, {two: 2}];
      var obj = arr[1];
      var indx = testContactService.confirmContactExistence(arr, obj);
      expect(indx).toEqual(1);
    });
  });

  describe('ContactService.deleteContact', function(){

    var altContacts;
    beforeEach(function(){
      mockState.activeStudent = {
        additionalContactDetails: {
          altContacts: [{
            title: "ATS: Crosby Cat",
            first: "Crosby",
            last: "Cat",
            phone: "444 444 4444",
          },
          {
            title: "Custom Contact",
            type: "User Created",
            first: "Jared",
            last: "Carrano",
            email: "jared@email.org",
            phone: "555 555 5555",
            phoneType: "mobile"
          }]
        }
      };
      altContacts = mockState.activeStudent.additionalContactDetails.altContacts;
    });

    it('does not allow non-custom contacts to be deleted', function(){
      var contactToDelete = altContacts[0];
      contactToDelete.type = null;
      var test = function(){
        testContactService.deleteContact(contactToDelete);
      };
      expect(test).toThrowError('Cannot delete non-custom contacts');
    });

    it('deletes an existing contact', function(){
      var contactToDelete = altContacts[1];
      testContactService.deleteContact(contactToDelete);
      expect(altContacts).not.toContain(contactToDelete);
    });
  });

  describe('ContactService.swapContacts', function(){
    var altContacts;
    beforeEach(function(){
      mockState.activeStudent = {
        additionalContactDetails: {
          altContacts: [{
            type: "User Created",
            title: "ATS: Crosby Cat",
            first: "Crosby",
            last: "Cat",
            phone: "444 444 4444",
          }]
        }
      };
      altContacts = mockState.activeStudent.additionalContactDetails.altContacts;
    });

    it('swaps an existing custom contact', function(){
      var existingContact = altContacts[0];
      var updatedContact = angular.copy(existingContact);
      updatedContact.phone = "1234567890"
      testContactService.swapContacts(updatedContact, existingContact);
      expect(altContacts).not.toContain(existingContact);
      expect(altContacts).toContain(updatedContact);
    });

    it('swaps an existing ats contact', function(){
      console.log('Need to do this')
    });
  });

  describe('ContactService.formatActiveStudent', function(){
    var studentDataFixture;
    beforeEach(inject(function(Fixtures){
      studentDataFixture = Fixtures.studentData;
      mockState.activeStudent = studentDataFixture[0];
    }));

    it('formats the active student', function(){
      var actStu = mockState.activeStudent;
      testContactService.formatActiveStudent();
      expect(actStu.contacts).toBeDefined();
      expect(actStu.atsContacts.home.address).toBeDefined();
      expect(actStu.atsContacts.adult1.name).toBeDefined();
      expect(actStu.additionalContactDetails.altContacts[0].name).toBeDefined();
      expect(actStu.additionalContactDetails.altContacts[0].type).toEqual('User Created');
    });
  });
})();






