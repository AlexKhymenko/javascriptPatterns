/**
 * Created by alexkhymenko on 4/17/16.
 */
define(function() {
    "use strict";
    return {
        validate: function(value) {
            return value.includes('@');
        }
    }
});