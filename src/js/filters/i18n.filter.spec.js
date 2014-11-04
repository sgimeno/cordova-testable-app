'use strict';

describe('i18n module', function() {

  beforeEach(module('TestableApp.filters.i18n'));

  describe('i18n filter', function(){

    it('should translate texts to Spanish (ES)', inject(function($filter, es) {
        
        var i18nFilter = $filter('i18n');
        var expectedResult = es.home;
        
        expect(i18nFilter('home', 'es')).toBe(expectedResult);

    }));

  });
});