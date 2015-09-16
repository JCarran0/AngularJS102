(function() {
  'use strict';

  beforeEach(function() {
    module('template');
  });

  describe('StudentNavService Testing', function(){
    var serviceToTest;

    beforeEach(inject(function(_StudentNavService_) {
      serviceToTest = _StudentNavService_;
      serviceToTest.loadStudents();
    }));

    it('confirms that loadStudents loaded 2 student fixtures', function(){
      expect(serviceToTest.state.list.length).toEqual(2);
      expect(serviceToTest.state.data.length).toEqual(2);
    });

    it('increments the index by 1', function() {
      var initialIndex = serviceToTest.index;
      serviceToTest.next();
      expect(serviceToTest.index).toEqual(1);
      expect(serviceToTest.index).toEqual(initialIndex + 1);
    });

    it('increments the index by 2 to ensure the index return to the beginning of the list array', function() {
      serviceToTest.next();
      serviceToTest.next();
      expect(serviceToTest.index).toEqual(0);
    });

    it('decreases the index by 1', function() {
      serviceToTest.index = 1;
      serviceToTest.previous();
      expect(serviceToTest.index).toEqual(0);
    });

    it('decreases the index by 1 to ensure the index jumps to the end of the list array', function() {
      serviceToTest.next();
      serviceToTest.next();
      expect(serviceToTest.index).toEqual(0);
    });

    it('sets the index equal to student at index 1', function(){
      var student = serviceToTest.state.list[1];
      serviceToTest.setIndex(student);
      expect(serviceToTest.index).toEqual(1);
    });
  });
})();
