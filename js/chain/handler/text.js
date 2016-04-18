/**
 * Created by alexkhymenko on 4/18/16.
 */
define(function(require) {
    "use strict";

    var emailHandler = require('chain/handler/email'),
        Handler = require('chain/core');
    
    var textHandler = new Handler('text', handleText, emailHandler);
    
    function handleText(text) {
        console.log('text', text);
    }

    return textHandler;
});