(function() {
  'use strict';

  beforeEach(module('template'));

  describe('StudentService', function(){

    var lodash, mockState, mockContactService, testStudentService, data, list;

    beforeEach(inject(function(_lodash_, _State_, ContactService, _StudentService_){
      lodash = _lodash_;
      mockState = _State_;
      mockContactService = ContactService;
      testStudentService = _StudentService_;
      data = [{_id: 1}, {_id: 2}];
      list = [{_id: 1}, {_id: 2}, {_id: 3}, {_id: 4}];
      testStudentService.init(data, list); // don't know how to test that this worked because the arrays are not stored on 'this';
    }));

    it('gets the stored data array', function(){
      var fetchedData = testStudentService.getData();
      expect(fetchedData).toEqual(data);
    });

    it('gets the stored list array', function(){
      var fetchedList = testStudentService.getList();
      expect(fetchedList).toEqual(list);
    });

    it('sets the active student', function(){
      testStudentService.setActive(list[0]);
      expect(mockState.activeStudent).toBeDefined();
      expect(mockState.activeStudent).toEqual(list[0]);
    });

    it('doesn\'t find the selected student in the data array', inject(function(State){
      mockState.activeStudent = undefined;
      var test = function(){
        testStudentService.setActive(list[2]);
      }
      expect(test).toThrowError("Not in list, make call to db here.");
      expect(mockState.activeStudent).not.toBeDefined();  // why is this defined????  Shouldn't it get reset in the beforeEach()????
    }));

  });
})();
