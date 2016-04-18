/**
 * Created by alexkhymenko on 4/18/16.
 */

define(function() {
    "use strict";
    var Handler = function(type, handler, nextHandler) {
        this.type = type;
        this.handler = handler;
        this.nextHandler = nextHandler;
    };

    Handler.prototype.handleCommunication = function(communication) {
        if(communication.type !== this.type) {
            this.nextHandler ? this.nextHandler.handleCommunication(communication) :
                console.log('i cant handle request');
            return
        }

        this.handler(communication);
    };

    return Handler;
});