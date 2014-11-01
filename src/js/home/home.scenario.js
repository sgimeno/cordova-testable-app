describe('Home page', function() {
  
  it('should have a title', function() {
    
    browser.get('http://localhost:8000/browser/www/#/');

    expect(element(by.binding('state.title')).getText()).toEqual('Home');

  });

});