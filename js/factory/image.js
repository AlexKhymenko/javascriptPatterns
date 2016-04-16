/**
 * Created by alexkhymenko on 4/16/16.
 */
define(function() {
    "use strict";
    var Image = function(attr) {
        this.width =  attr.width || 0;
        this.height = attr.height || 0;
        this.name = attr.name || 'Test Name';


    };
    return Image;
}); 