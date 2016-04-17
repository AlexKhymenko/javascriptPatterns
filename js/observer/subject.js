/**
 * Created by alexkhymenko on 4/17/16.
 */


define(function(require) {
    "use strict";

    var Observers = require('observer/observers');
    var Collection = function(collection) {
        this.observers = new Observers();
        this.name = "LOl";
        this.collection = collection || [];
    };

    Collection.prototype.observe = function(observer) {
        this.observers.addObserver(observer);
    };

    Collection.prototype.unObserve = function(observer) {
        this.observers.removeObserver(observer);
    };

    Collection.prototype.notify = function(event, data) {
      this.observers.get().forEach(function(observer) {
          observer.notify(event, data);
      })
    };

    Collection.prototype.add = function(item) {
        this.collection.push(item);
        this.notify('Added', item);
    };

    Collection.prototype.remove = function(itemToRemove) {
        this.collection = this.collection.filter(function(remove) {
            if(itemToRemove !== remove) {
                return true;
            }

            this.notify('remove', remove);
            return false;
        }, this);
    };

    return Collection;

});