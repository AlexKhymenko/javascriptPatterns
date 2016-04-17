define(function(require) {
    "use strict";
    return {
        init: function() {
            var subject, observer, otherObserver, data, moreData,
                Subject = require('observer/subject'),
                Observer = require('observer/observer');

            observer = new Observer();
            otherObserver = new Observer();
            subject = new Subject();

            data = {
                prop: 'something'
            };
            moreData = {
                prop: 'More something'
            };

            subject.observe(observer);
            subject.observe(otherObserver);

            subject.add(data);
            subject.add(moreData);
        }
    }
});