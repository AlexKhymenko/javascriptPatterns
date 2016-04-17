/**
 * Created by alexkhymenko on 4/17/16.
 */

define(function() {
    "use strict";

    var Observer = function(name) {
        this.name = name;
    };

    Observer.prototype.notify = function(event, data) {
        console.log('this is awesome' + event  + 'and' + data);
        console.log(data);
    };
    return Observer;
});