var x = require('./synchron.js');

setTimeout(function () {
    require.ensure([], function (require) {
        require('async.js');
    });
}, 2000);

console.log('loadthis.js finished');