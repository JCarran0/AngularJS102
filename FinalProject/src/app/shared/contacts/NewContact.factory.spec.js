(function() {
  'use strict';

  beforeEach(function() {
    module('template');
  });

  describe('NewContactFactory', function(){
    var testFactory;

    beforeEach(inject(function(_NewContactFactory_) {
      testFactory = _NewContactFactory_;
    }));

    it('confirms the new contact has the proper key/values',function(){
      var newContact = new testFactory();
      expect(newContact.isNew).toBe(true);
      expect(newContact.title).toEqual('Custom Contact');
      expect(newContact.type).toEqual('User Created');
    })
  });
})();
