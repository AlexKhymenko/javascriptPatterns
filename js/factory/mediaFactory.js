/**
 * Created by alexkhymenko on 4/16/16.
 */
define(function(require) {
    "use strict";
    var media = {
        Video: require('factory/video'),
        Image: require('factory/image')
    };

    return {
        createMedia: function(type, attr) {
            var MediaType = media[type];
            return new MediaType(attr);
        }
    }
});