angular.module('TestableApp.filters.i18n', [
    'TestableApp.locales'
])

.filter('i18n', function($injector){
    
    return function(word, language){
        var dictionary, userLanguage;
        
        if (word && language){
            //Load translations map
            userLanguage = /^([a-z]{2})(?:-[A-Z]{2})?$/
                .exec(language)
                .pop();

            dictionary = $injector.get(userLanguage);
            return dictionary[word];
        }
        return word;
    };
})