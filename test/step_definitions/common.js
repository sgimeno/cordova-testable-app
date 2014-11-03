// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

// Chai expect().to.exist syntax makes default jshint unhappy.
// jshint expr:true

module.exports = function(){
    
    this.Given(/^I load the app$/, function (callback) {
      callback();
    });

    this.Then(/^I should see a "([^"]*)" (containing|equal to) "([^"]*)"$/, 
        function(selector, matcher, text, next) {
            var elementText = element(by.css('.' + selector)).getText();

            switch (matcher) {
                case 'equal to':
                    expect(elementText).to.eventually.equal(text).notify(next);
                    break;
                case 'containing':
                    expect(elementText).to.eventually.contain(text).notify(next);
                    break;
                default:
                    break;
            }
        
        
    });

};