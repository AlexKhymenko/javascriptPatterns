define(function(require) {
    "use strict";
    return {
        init: function() {
            var moduleA = require('pubsub/moduleA');
            var moduleB = require('pubsub/moduleB');

        moduleB.publishEvent();
        moduleB.publishEvent();
        }
    }
});