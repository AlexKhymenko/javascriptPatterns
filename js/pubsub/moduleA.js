define(function(require) {
    "use strict";
    var pubsub = require('pubsub/pubsub');
    var subscription;
    subscription = pubsub.subscribe('atopic', function(data) {
        console.log('atopic was published with data', data);
        subscription.dispose();
    });
});