/**
 * Created by alexkhymenko on 4/18/16.
 */
define(function(require) {
    "use strict";
    var Handler = require('chain/core'),
        emailHandler;

    emailHandler = new Handler('email', handleEmail, null);

    function handleEmail(email) {
        console.log('email', email);
    }

    return emailHandler; 
});