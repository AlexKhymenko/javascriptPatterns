/**
 * Created by alexkhymenko on 4/20/16.
 */


var app = angular.module('Facade');
var Facade = function(taskService) {
    "use strict";
    var complexOperation = function() {
        "use strict";
        taskService.notify();
        taskService.load();
        taskService.save();
    };
    return {
        complexOperation
    };
};
app.service('Facade', Facade);

