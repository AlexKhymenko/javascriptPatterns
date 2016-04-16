/**
 * Created by alexkhymenko on 4/16/16.
 */
define(function() {
    "use strict";
    var Video = function(attr) {
        this.length =  attr.length || 0;
        this.name = attr.name || 'Test Name';

    };
    return Video;
});