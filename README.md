

Structural patterns:
Concerned How objects are made up and simplify relationship beetween objects.
Deal with relationship of objects,
Extend functionality,
Simplify functionality,

Decorator Pattern :
More complete Inheritance,
Wraps an object,
Protects existing objects,
Allows Extended functionality

Used to add functionality to an existing object without being obtrusive.
Use newObject.prototype = Object.create(parentObject.prototype);


Facade Pattern:
Used to provide a simplified interface to a complicated system,
Facade hides the chaos from us,
Simplifies the interface,
Think about the facade of building. Example jQuery.


Difference between Facade and Decorator:
Decorator adds functionality, Facade dont.


Flyweight pattern:
If our Tasks has a lor of not unique data
Flyweight share data across objects
Results in a smaller memory footprint
But its only useful large number of objects


Behavioral Design Patterns:
Concerned with the assignment of responsibilities between objects and how the communicate;
Help Object Cooperate
Assign Clear Hierarchy
Can encapsulate requests


Observer Pattern:
Allows a collection of objects to watch an object and be notified of changes;
Allow Loosely coupled system
One object is focal point
Group of objects watch for changes