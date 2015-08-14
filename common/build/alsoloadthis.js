webpackJsonp([0,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// alsoloadthis.js
	
	var x = __webpack_require__(2);
	
	console.log('alsoloadthis.js finished');

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var NAME = 'synchronousloaded';
	__webpack_require__(3);
	
	console.log('synchron.js finished');


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {// shared.js
	
	module.export = 'shared.js';
	
	console.log('shared.js finished');
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
]);
//# sourceMappingURL=alsoloadthis.js.map