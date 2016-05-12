/* global __webpack_public_path__:true */
(function (jimdoData) {
    "use strict";

    __webpack_public_path__ = 'http://google.de/';

})();


var x = require('./synchron.js');

console.log('here', __webpack_public_path__);

setTimeout(function () {
    require.ensure([], function (require) {
        require('async.js');

        console.log('here2', __webpack_public_path__);

    });
}, 2000);

console.log('loadthis.js finished');