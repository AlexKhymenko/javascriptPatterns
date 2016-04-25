
var FlyWayFactory = require('./flyweightFactory');

var Task = function(data) {
    "use strict";
    this.flyweight = FlyWayFactory.get(data.name, data.age, data.nickName);
    this.awesome = data.awesome;
};