define(function(require) {
    "use strict";
    return {
        init: function() {
            var myVideo, myImage
                ,mediaFactory = require('factory/mediaFactory');

           myVideo = mediaFactory.createMedia('Video', {
               length: 5,
               name: 'TestVideo'
           });

            myImage = mediaFactory.createMedia('Image', {
                width: 555,
                name: 'Test  Image',
                height: '777'
            });

            console.log(myImage);
            console.log(myVideo);
        }
    }
});