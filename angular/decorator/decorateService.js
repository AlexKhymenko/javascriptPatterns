/**
 * Created by alexkhymenko on 4/20/16.
 */
var app = angular.module('mainModule');

// the order in index file matters this file should go after original

app.decorator('Repository i want to decorate', function($delegate) {
    "use strict";
    // closure the old save method cause it will be replaces
    var oldSave = $delegate.save;

    //replace old savev method

    $delegate.save = function() {
        console.log('special save decorator');

        oldSave(task)
    };
    return $delegate;
});