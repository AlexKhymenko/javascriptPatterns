/**
 * Created by alexkhymenko on 4/20/16.
 */


var singleton = function() {
    "use strict";
    var called = 0;

    var save = function() {
        called++;
        console.log('im saving');
    };

    return {
        save
    }
};

//To create singletoon you should use either () in exports or add new

// module.exports = singleton()
module.exports = new  singleton;