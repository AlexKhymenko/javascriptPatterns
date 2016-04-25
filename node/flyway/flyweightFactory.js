/**
 * Created by alexkhymenko on 4/25/16.
 */
var FlyWay = require('./flyweight');

var FLyWayFactory = function() {
    "use strict";
    var flyweights = {

    };
    var get = function(name, age, nickName) {
        if(!flyweights[name + age + nickName]) {
            flyweights[name + age + nickName] = new FlyWay(name, age, nickName);
        }
        return flyweights[name + age + nickName];
    };
};

module.exports = {
    get
};