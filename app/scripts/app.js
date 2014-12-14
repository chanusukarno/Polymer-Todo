(function(document) {
    'use strict';

    document.addEventListener('polymer-ready', function() {
        // Perform some behaviour
        console.log('Polymer is ready to rock!');
    });

    // add todo
    var scope = document.querySelector('template[is=auto-binding]');

    scope.toggleAdd = function(e) {
        var d = document.querySelector('paper-action-dialog');
        d.toggle();
    };
    
    scope.addTodo = function(e) {
        console.log(scope.todos);
        console.log(scope.title + ", " + scope.notes);
    };

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
