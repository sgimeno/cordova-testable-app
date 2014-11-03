module.exports = function() {

    this.Before(function(callback){
        browser.driver.getAllWindowHandles().then(function(handles) {
            browser.driver.switchTo().window(handles[1]).then(callback);
        });
    });

};