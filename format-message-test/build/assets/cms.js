webpackJsonp([3,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(12);\n__webpack_require__(13);\nmodule.exports = __webpack_require__(5);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi cms.js\n ** module id = 0\n ** module chunks = 3\n **/\n//# sourceURL=webpack:///multi_cms.js?");

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = {\n    'en': __webpack_require__(11),\n    'de': __webpack_require__(10)\n}\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./locales/index.js\n ** module id = 4\n ** module chunks = 0 3\n **/\n//# sourceURL=webpack:///./locales/index.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar trGet = __webpack_require__(1);\nconsole.log('TRANSLATED: ', trGet({\n  id: 'Hellssso from web -- can be found in web.js and cms.js',\n  default: 'Hellssso from web -- can be found in web.js and cms.js'\n}));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/fromweb.esnext.js\n ** module id = 5\n ** module chunks = 0 3\n **/\n//# sourceURL=webpack:///./src/fromweb.esnext.js?");

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	eval("module.exports = {\n\t\"A translation only from CMS -- only be found in CMS.js\": {\n\t\t\"message\": \"A translation only from CMS -- only be found in CMS.js\"\n\t},\n\t\"Hellssso from web -- can be found in web.js and cms.js\": {\n\t\t\"message\": \"Hellssso from web -- can be found in web.js and cms.js\"\n\t}\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./locales/de.json\n ** module id = 10\n ** module chunks = 0 3\n **/\n//# sourceURL=webpack:///./locales/de.json?");

/***/ },
/* 11 */
/***/ function(module, exports) {

	eval("module.exports = {};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./locales/en.json\n ** module id = 11\n ** module chunks = 0 3\n **/\n//# sourceURL=webpack:///./locales/en.json?");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	eval("var formatMessage = __webpack_require__(1);\n\nformatMessage.setup({\n    locale: 'de',\n    translations: __webpack_require__(4)\n})\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/astart.js\n ** module id = 12\n ** module chunks = 0 3\n **/\n//# sourceURL=webpack:///./src/astart.js?");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.BLA = undefined;\n\nvar _formatMessage = __webpack_require__(1);\n\nvar _formatMessage2 = _interopRequireDefault(_formatMessage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar BLA = exports.BLA = 'bla';\n\nconsole.log('TRANSLATED: ', (0, _formatMessage2.default)({\n  id: 'A translation only from CMS -- only be found in CMS.js',\n  default: 'A translation only from CMS -- only be found in CMS.js'\n}));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/bstart.esnext.js\n ** module id = 13\n ** module chunks = 3\n **/\n//# sourceURL=webpack:///./src/bstart.esnext.js?");

/***/ }
]);