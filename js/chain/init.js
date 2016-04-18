define(function(require) {
    "use strict";
    return {
        init: function() {
           var CoreHandler = require('chain/core');
            var textHandler = require('chain/handler/text');

            var email = {
                type: 'email',
                message: 'nice'
            };

            var text = {
                type: 'text',
                message: 'this is text'
            };

            var coreHandler = new CoreHandler(null, null, textHandler);
            coreHandler.handleCommunication(text);
            coreHandler.handleCommunication(email);
        }
    }
});