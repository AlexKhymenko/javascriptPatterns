require(['factory/init', 'pubsub/init', 'strategy/init', 'observer/init', 'chain/init'], function(factory, pubsub, strategy, observer, chain) {
    "use strict";
    var examples = {
        factory: factory,
        pubsub: pubsub,
        strategy: strategy,
        observer: observer,
        chain: chain
    };

    window.runExample = function(example) {
        examples[example].init();
    };
});