/**
 * Created by alexkhymenko on 4/17/16.
 */
define(function() {
    "use strict";

    var Observers = function() {
        this.observers = [];
    };

    Observers.prototype.addObserver = function(observer) {
        this.observers.push(observer);
    };

    Observers.prototype.removeObserver = function(removeObserver) {
        this.observer = observer.filter(function(observer) {
            return observer !== removeObserver;
        });
    };

    Observers.prototype.get = function() {
        return this.observers;
    };

    return Observers;

});