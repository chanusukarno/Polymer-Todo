(function(document) {
    'use strict';

    document.addEventListener('polymer-ready', function() {
        // Perform some behaviour
        console.log('Polymer is ready to rock!');
    });

    // Menu actions
    var scope = document.querySelector('template[is=auto-binding]');

    scope.menuClearDone = function(e) {
        for (var i = 0; i < scope.todos.length; i++) {
            if (scope.todos[i].status) {
                scope.todos.splice(i, scope.todos.length);
            }
        }
        console.log('Clear Done! ' + scope.todos);

    };

    scope.menuClearAll = function(e) {
        scope.todos = [];
        console.log('Clear All!');
    };

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
