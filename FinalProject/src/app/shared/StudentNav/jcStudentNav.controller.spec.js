(function() {
  'use strict';

  beforeEach(function() {
    module('template');
  });

  describe('StudentNavService Testing', function(){
    var serviceToTest;

    beforeEach(inject(function(_StudentNavService_) {
      serviceToTest = _StudentNavService_;
    }));

    it('increments the index by 1', function() {
      // don't know how to properly unit test my nav service
      // since none of the methods return anything
    });

  });

})();
