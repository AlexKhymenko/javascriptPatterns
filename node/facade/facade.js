/**
 * Created by alexkhymenko on 4/20/16.
 */

//Wrong usage of creational pattern dont use like this use prototype.
// just focus on facad pattern
var Task = function() {
    "use strict";
    this.load = function() {
        console.log('load');
    };
    this.check = function() {
        console.log('check');
    };

    this.save = function() {
        console.log('save');
    };
};

var Facade = function() {
    "use strict";
    //simplify api and return singleton with new Facade of just execute function
    return {
        ComplexOperation: function(){
            Task.load();
            Task.check();
            Task.save();
        }
    }
};

module.exports = new Facade();