define(function(require) {
    "use strict";
    return {
        init: function() {
            var Validator = require('strategy/strategy');
            var emailValidator = require('strategy/emailValidator');
            var phoneValidator = require('strategy/phoneValidator');

            var validator = new Validator();

            console.log(validator.selectValidator(emailValidator).validate('@lalalla'));
            console.log(validator.selectValidator(phoneValidator).validate('nice'));
        }
    }
});