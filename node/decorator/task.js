/**
 * Created by alexkhymenko on 4/20/16.
 */

var Task = function(name) {
    "use strict";
    this.name = name;
    this.completed = false;
};


Task.prototype.complete = function() {
    "use strict";
    console.log('complete');
    this.completed = true;
};

Task.prototype.save = function() {
    "use strict";
    console.log('task Save');  
};


//Simple Decorator

var urgentTask = new Task("urgent");
urgentTask.priority = 2;


urgentTask.notify = function() {
    "use strict";
   console.log('i will notify urgent');
};

urgentTask.complete = function() {
    "use strict";
    this.notify();
    Task.prototype.complete.call(this);
};

//end SImple Decorator

//Another Decorator
var UrgentTask = function(name, priority) {
    "use strict";
    Task.call(this, name);
    this.priority = priority;
};
// inheritance
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.save = function() {
    "use strict";
    console.log('Saving urgent task');

    // call the parent save
    Task.prototype.save.call(this);
};
var ut = new UrgentTask('This is urgent', 2);
ut.complete();
ut.save();
console.log(ut);