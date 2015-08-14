webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var x = __webpack_require__(2);
	
	setTimeout(function () {
	    __webpack_require__.e/* nsure */(1, function (require) {
	        __webpack_require__(3);
	    });
	}, 2000);
	
	console.log('loadthis.js finished');

/***/ },
/* 2 */
/***/ function(module, exports) {

	var NAME = 'synchronousloaded';
	console.log('synchron.js finished');


/***/ }
]);
//# sourceMappingURL=loadthis.js.map