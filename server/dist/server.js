/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/Main.jsx":
/*!*****************************!*\
  !*** ./client/src/Main.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Pictures_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Pictures.jsx */ \"./client/src/components/Pictures.jsx\");\n/* harmony import */ var _components_Popup_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Popup.jsx */ \"./client/src/components/Popup.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* eslint-disable */\n\n/* eslint-disable import/extensions */\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props)); // console.log(props.data)\n\n    _this.state = {\n      data: _this.props.data,\n      popCurr: null,\n      popCheck: false,\n      prevSpot: null\n    };\n    _this.rightRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    _this.scrollRight = _this.scrollRight.bind(_assertThisInitialized(_this));\n    _this.scrollLeft = _this.scrollLeft.bind(_assertThisInitialized(_this));\n    _this.popCurrStart = _this.popCurrStart.bind(_assertThisInitialized(_this));\n    _this.currChange = _this.currChange.bind(_assertThisInitialized(_this));\n    _this.closePop = _this.closePop.bind(_assertThisInitialized(_this));\n    _this.houseView = _this.houseView.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"houseView\",\n    value: function houseView() {}\n  }, {\n    key: \"popCurrStart\",\n    value: function popCurrStart(e) {}\n  }, {\n    key: \"closePop\",\n    value: function closePop() {\n      var prevSpot = this.state.prevSpot;\n      this.rightRef.scrollLeft += prevSpot;\n      this.setState({\n        popCheck: false\n      });\n    } //method to change the insex of the pop up\n\n  }, {\n    key: \"currChange\",\n    value: function currChange(e) {\n      var popCurr = this.state.popCurr;\n      var data = this.state.data;\n\n      if (e.target.className === \"next\") {\n        popCurr = Number(popCurr) + 1;\n      } else {\n        popCurr = Number(popCurr) - 1;\n      }\n\n      if (popCurr > 0 && popCurr < data.length) {\n        this.setState({\n          popCurr: popCurr\n        });\n      }\n    } //methods to make the picture div scroll on click\n\n  }, {\n    key: \"scrollRight\",\n    value: function scrollRight() {\n      this.rightRef.scrollLeft += 500;\n    }\n  }, {\n    key: \"scrollLeft\",\n    value: function scrollLeft() {\n      this.rightRef.scrollLeft -= 500;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var left = '<';\n      var right = '>';\n      var _this$state = this.state,\n          data = _this$state.data,\n          popCheck = _this$state.popCheck,\n          popCurr = _this$state.popCurr;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"mainDiv\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        type: \"submit\",\n        id: \"left\",\n        onClick: this.scrollLeft,\n        className: \"leftButton\"\n      }, left), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"mainContainer\",\n        ref: function ref(r) {\n          return _this2.rightRef = r;\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pictures_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        data: data,\n        scrollRight: this.scrollRight,\n        currChange: this.popCurrStart\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Popup_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        check: popCheck,\n        curr: popCurr,\n        photos: data,\n        change: this.currChange,\n        close: this.closePop\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        type: \"submit\",\n        id: \"right\",\n        onClick: this.scrollRight,\n        className: \"rightButton\"\n      }, right));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL01haW4uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9NYWluLmpzeD84MjAyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQaWN0dXJlcyBmcm9tICcuL2NvbXBvbmVudHMvUGljdHVyZXMuanN4JztcbmltcG9ydCBQb3B1cCBmcm9tICcuL2NvbXBvbmVudHMvUG9wdXAuanN4JztcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLmRhdGEpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcbiAgICAgIHBvcEN1cnI6IG51bGwsXG4gICAgICBwb3BDaGVjazogZmFsc2UsXG4gICAgICBwcmV2U3BvdDogbnVsbCxcbiAgICB9O1xuICAgIHRoaXMucmlnaHRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLnNjcm9sbFJpZ2h0ID0gdGhpcy5zY3JvbGxSaWdodC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHRoaXMuc2Nyb2xsTGVmdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9wQ3VyclN0YXJ0ID0gdGhpcy5wb3BDdXJyU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmN1cnJDaGFuZ2UgPSB0aGlzLmN1cnJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlUG9wID0gdGhpcy5jbG9zZVBvcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaG91c2VWaWV3ID0gdGhpcy5ob3VzZVZpZXcuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhvdXNlVmlldygpIHtcbiAgfVxuICBwb3BDdXJyU3RhcnQoZSkge1xuICB9XG5cbiAgY2xvc2VQb3AoKSB7XG4gICAgY29uc3QgeyBwcmV2U3BvdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnJpZ2h0UmVmLnNjcm9sbExlZnQgKz0gcHJldlNwb3Q7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwb3BDaGVjazogZmFsc2UsXG4gICAgfSk7XG4gIH1cbiAgLy9tZXRob2QgdG8gY2hhbmdlIHRoZSBpbnNleCBvZiB0aGUgcG9wIHVwXG4gIGN1cnJDaGFuZ2UoZSkge1xuICAgIGxldCB7IHBvcEN1cnIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwibmV4dFwiKSB7XG4gICAgICBwb3BDdXJyID0gTnVtYmVyKHBvcEN1cnIpICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9wQ3VyciA9IE51bWJlcihwb3BDdXJyKSAtIDE7XG4gICAgfVxuICAgIGlmIChwb3BDdXJyID4gMCAmJiBwb3BDdXJyIDwgZGF0YS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwb3BDdXJyLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vbWV0aG9kcyB0byBtYWtlIHRoZSBwaWN0dXJlIGRpdiBzY3JvbGwgb24gY2xpY2tcbiAgc2Nyb2xsUmlnaHQoKSB7XG4gICAgdGhpcy5yaWdodFJlZi5zY3JvbGxMZWZ0ICs9IDUwMDtcbiAgfVxuXG4gIHNjcm9sbExlZnQoKSB7XG4gICAgdGhpcy5yaWdodFJlZi5zY3JvbGxMZWZ0IC09IDUwMDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsZWZ0ID0gJzwnO1xuICAgIGNvbnN0IHJpZ2h0ID0gJz4nO1xuICAgIGNvbnN0IHsgZGF0YSwgcG9wQ2hlY2ssIHBvcEN1cnIgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkRpdlwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgaWQ9XCJsZWZ0XCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNjcm9sbExlZnR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibGVmdEJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICB7bGVmdH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYWluQ29udGFpbmVyXCJcbiAgICAgICAgICByZWY9e3IgPT4gdGhpcy5yaWdodFJlZiA9IHJ9XG4gICAgICAgID5cbiAgICAgICAgICA8UGljdHVyZXNcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICBzY3JvbGxSaWdodD17dGhpcy5zY3JvbGxSaWdodH1cbiAgICAgICAgICAgIGN1cnJDaGFuZ2U9e3RoaXMucG9wQ3VyclN0YXJ0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFBvcHVwXG4gICAgICAgICAgICBjaGVjaz17cG9wQ2hlY2t9XG4gICAgICAgICAgICBjdXJyPXtwb3BDdXJyfVxuICAgICAgICAgICAgcGhvdG9zPXtkYXRhfVxuICAgICAgICAgICAgY2hhbmdlPXt0aGlzLmN1cnJDaGFuZ2V9XG4gICAgICAgICAgICBjbG9zZT17dGhpcy5jbG9zZVBvcH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGlkPVwicmlnaHRcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsUmlnaHR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicmlnaHRCdXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAge3JpZ2h0fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBZ0JBO0FBQ0E7OztBQUNBOzs7QUFFQTs7O0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7Ozs7QUFoR0E7QUFDQTtBQWtHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/Main.jsx\n");

/***/ }),

/***/ "./client/src/components/Pictures.jsx":
/*!********************************************!*\
  !*** ./client/src/components/Pictures.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dataParser_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dataParser.jsx */ \"./client/src/utils/dataParser.jsx\");\n/* eslint-disable import/extensions */\n\n // eslint-disable-next-line react/prop-types\n\nvar Pictures = function Pictures(_ref) {\n  var data = _ref.data,\n      currChange = _ref.currChange;\n\n  if (data.length > 0) {\n    var photos = Object(_utils_dataParser_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, currChange);\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"photoContainer\"\n    }, photos);\n  }\n\n  return null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pictures);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUGljdHVyZXMuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1BpY3R1cmVzLmpzeD85YzcwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGxpc3RQYXJzZXIgZnJvbSAnLi4vdXRpbHMvZGF0YVBhcnNlci5qc3gnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuY29uc3QgUGljdHVyZXMgPSAoeyBkYXRhLCBjdXJyQ2hhbmdlIH0pID0+IHtcbiAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHBob3RvcyA9IGxpc3RQYXJzZXIoZGF0YSwgY3VyckNoYW5nZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9Db250YWluZXJcIj5cbiAgICAgICAge3Bob3Rvc31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuZXhwb3J0IGRlZmF1bHQgUGljdHVyZXM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Pictures.jsx\n");

/***/ }),

/***/ "./client/src/components/Popup.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Popup.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable react/prop-types */\n\n\nvar Popup = function Popup(props) {\n  var check = props.check,\n      curr = props.curr,\n      photos = props.photos,\n      change = props.change,\n      close = props.close;\n\n  if (check) {\n    var prev = '<';\n    var next = '>';\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"popMainContainer\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"prev\",\n      type: \"submit\",\n      onClick: change\n    }, prev), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"popImageStyle\",\n      src: photos[curr].url,\n      alt: \"house\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"closeStyle\",\n      type: \"submit\",\n      onClick: close\n    }, \"X\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"next\",\n      type: \"submit\",\n      onClick: change\n    }, next));\n  }\n\n  return null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Popup);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUG9wdXAuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1BvcHVwLmpzeD9kMmVkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBvcHVwID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGVjaywgY3VyciwgcGhvdG9zLCBjaGFuZ2UsIGNsb3NlLFxuICB9ID0gcHJvcHM7XG4gIGlmIChjaGVjaykge1xuICAgIGNvbnN0IHByZXYgPSAnPCc7XG4gICAgY29uc3QgbmV4dCA9ICc+JztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3BNYWluQ29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJldlwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtjaGFuZ2V9PntwcmV2fTwvYnV0dG9uPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvcEltYWdlU3R5bGVcIiBzcmM9e3Bob3Rvc1tjdXJyXS51cmx9IGFsdD1cImhvdXNlXCIgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZVN0eWxlXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2Nsb3NlfT5YPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dFwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtjaGFuZ2V9PntuZXh0fTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/Popup.jsx\n");

/***/ }),

/***/ "./client/src/utils/dataParser.jsx":
/*!*****************************************!*\
  !*** ./client/src/utils/dataParser.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n/* eslint-disable jsx-a11y/click-events-have-key-events */\n\n/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */\n\n/* eslint-disable no-underscore-dangle */\n // function to parse incoming photo data into image elements\n\nvar listParser = function listParser(data, fn) {\n  var newData = _toConsumableArray(data);\n\n  var first = newData.shift();\n  var index = 0;\n  var list = newData.reduce(function (acc, curr, idx) {\n    acc.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      onClick: fn,\n      key: idx,\n      id: index += 1,\n      src: curr.url,\n      alt: \"house\",\n      className: \"smallImages\"\n    }));\n    return acc;\n  }, []);\n  list.unshift(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    onClick: fn,\n    key: Math.floor(Math.random() * 50000 + 100),\n    id: 0,\n    src: first.url,\n    className: \"firstImage\",\n    alt: \"house\"\n  }));\n  return list;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (listParser);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL3V0aWxzL2RhdGFQYXJzZXIuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy91dGlscy9kYXRhUGFyc2VyLmpzeD9lMWQzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGZ1bmN0aW9uIHRvIHBhcnNlIGluY29taW5nIHBob3RvIGRhdGEgaW50byBpbWFnZSBlbGVtZW50c1xuY29uc3QgbGlzdFBhcnNlciA9IChkYXRhLCBmbikgPT4ge1xuICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdO1xuICBjb25zdCBmaXJzdCA9IG5ld0RhdGEuc2hpZnQoKTtcbiAgbGV0IGluZGV4ID0gMDtcbiAgY29uc3QgbGlzdCA9IG5ld0RhdGEucmVkdWNlKChhY2MsIGN1cnIsIGlkeCkgPT4ge1xuICAgIGFjYy5wdXNoKChcbiAgICAgIDxpbWcgb25DbGljaz17Zm59IGtleT17aWR4fSBpZD17aW5kZXggKz0gMX0gc3JjPXtjdXJyLnVybH0gYWx0PVwiaG91c2VcIiBjbGFzc05hbWU9XCJzbWFsbEltYWdlc1wiIC8+XG4gICAgKSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xuICBsaXN0LnVuc2hpZnQoKFxuICAgIDxpbWcgb25DbGljaz17Zm59IGtleT17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAwMDAgKyAxMDApfSBpZD17MH0gc3JjPXtmaXJzdC51cmx9IGNsYXNzTmFtZT1cImZpcnN0SW1hZ2VcIiBhbHQ9XCJob3VzZVwiIC8+XG4gICkpO1xuICByZXR1cm4gbGlzdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RQYXJzZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/utils/dataParser.jsx\n");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_src_Main_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/src/Main.jsx */ \"./client/src/Main.jsx\");\nvar newrelic = __webpack_require__(/*! newrelic */ \"newrelic\");\n\nvar http = __webpack_require__(/*! http */ \"http\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar _require = __webpack_require__(/*! pg */ \"pg\"),\n    Client = _require.Client;\n\nvar ReactDOM = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar redis = __webpack_require__(/*! redis */ \"redis\");\n\nvar redisClient = redis.createClient({\n  host: \"ec2-18-222-87-5.us-east-2.compute.amazonaws.com\",\n  port: \"6379\"\n});\n\n\nvar publicDirectory = path.join(__dirname, '../client/dist');\nvar PORT = process.env.PORT || 80;\nvar postgres = new Client({\n  user: \"postgres\",\n  host: \"ec2-18-189-189-135.us-east-2.compute.amazonaws.com\",\n  database: \"pictureservice\",\n  password: \"root\"\n});\npostgres.connect();\n\nfunction getImage(image, cb) {\n  redisClient.get(image.toString(), function (err, reply) {\n    if (err) {\n      cb(err, null);\n      console.log(err);\n    } else {\n      if (reply === null) {\n        postgres.query(\"select * from images where id = \".concat(image), function (err, res) {\n          if (err) {\n            cb(err, null);\n          } else {\n            cb(null, res.rows[0]);\n            redisClient.set(image.toString(), JSON.stringify(res.rows[0]), function (err, success) {\n              if (err) {\n                console.log(err);\n              }\n            });\n          }\n        });\n      } else {\n        cb(null, JSON.parse(reply));\n      }\n    }\n  });\n} // service loader key (no nginx): loaderio-b065f3c5c19458f32e5b0af7b3c50eb5\n// key with nginx: loaderio-372a02b594c312c1ccfcf251ba4f8f9c\n\n\nhttp.createServer(function (req, res) {\n  if (req.method === 'GET') {\n    if (req.url === \"/loaderio-96f0eb9b3c102d6951c4a887003ce871/\") {\n      res.end('loaderio-96f0eb9b3c102d6951c4a887003ce871', 'utf-8');\n      return; // mcowden8808+0@gmail.com\n    } else if (req.url === \"/loaderio-b065f3c5c19458f32e5b0af7b3c50eb5/\") {\n      res.end('loaderio-b065f3c5c19458f32e5b0af7b3c50eb5', 'utf-8');\n      return; // mcowden8808+1@gmail.com\n    } else {\n      var _contentType = 'text/html';\n      var extension = path.extname(req.url);\n\n      if (extension === '.js') {\n        _contentType = 'text/javascript';\n        hostJsOrCss();\n      } else if (extension === '.css') {\n        _contentType = 'text/css';\n        hostJsOrCss();\n      } else {\n        (function () {\n          var photoArr = [];\n          var count = 0;\n          var randomNumber = 4; //Math.floor(Math.random() * 16 + 1);\n\n          for (var i = 0; i < randomNumber; i++) {\n            var randomPhoto = Math.floor(Math.random() * 2500000 + 7500000);\n            getImage(randomPhoto, function (err, data) {\n              count++;\n\n              if (err) {\n                console.log('getImage cb: ', err);\n              } else {\n                photoArr.push(data);\n              }\n\n              if (count === randomNumber) {\n                res.writeHead(200, {\n                  'Content-Type': 'text/html',\n                  \"Access-Control-Allow-Origin\": \"*\",\n                  \"Access-Control-Allow-Headers\": \"X-Requested-With\"\n                });\n                var reactString = ReactDOM.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_src_Main_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                  data: photoArr\n                }));\n                res.end(reactString, 'utf-8');\n              }\n            });\n          }\n        })();\n      }\n    }\n  }\n\n  function hostJsOrCss() {\n    fs.readFile(req.url === '/' ? publicDirectory + '/index.html' : publicDirectory + req.url, function (err, content) {\n      res.writeHead(200, {\n        'Content-Type': contentType,\n        \"Access-Control-Allow-Origin\": \"*\",\n        \"Access-Control-Allow-Headers\": \"X-Requested-With\"\n      });\n      res.end(content, 'utf-8');\n    });\n  }\n}).listen(PORT, function () {});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvc2VydmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NlcnZlci5qcz9mMTQwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5ld3JlbGljID0gcmVxdWlyZSgnbmV3cmVsaWMnKTtcbmNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgeyBDbGllbnQgfSA9IHJlcXVpcmUoJ3BnJyk7XG5jb25zdCBSZWFjdERPTSA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuY29uc3QgcmVkaXMgPSByZXF1aXJlKFwicmVkaXNcIik7XG5cbmNvbnN0IHJlZGlzQ2xpZW50ID0gcmVkaXMuY3JlYXRlQ2xpZW50KHtcbiAgaG9zdDogXCJlYzItMTgtMjIyLTg3LTUudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbVwiLFxuICBwb3J0OiBcIjYzNzlcIlxufSk7XG5cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vY2xpZW50L3NyYy9NYWluLmpzeFwiXG5cbmNvbnN0IHB1YmxpY0RpcmVjdG9yeSA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9jbGllbnQvZGlzdCcpXG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwO1xuXG5jb25zdCBwb3N0Z3JlcyA9IG5ldyBDbGllbnQoe1xuICB1c2VyOiBcInBvc3RncmVzXCIsXG4gIGhvc3Q6IFwiZWMyLTE4LTE4OS0xODktMTM1LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb21cIixcbiAgZGF0YWJhc2U6IFwicGljdHVyZXNlcnZpY2VcIixcbiAgcGFzc3dvcmQ6IFwicm9vdFwiXG59KTtcblxucG9zdGdyZXMuY29ubmVjdCgpO1xuXG5mdW5jdGlvbiBnZXRJbWFnZShpbWFnZSwgY2IpIHtcbiAgcmVkaXNDbGllbnQuZ2V0KGltYWdlLnRvU3RyaW5nKCksIGZ1bmN0aW9uIChlcnIsIHJlcGx5KSB7XG4gICAgaWYgKGVycikge1xuICAgICAgY2IoZXJyLCBudWxsKVxuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVwbHkgPT09IG51bGwpIHtcbiAgICAgICAgcG9zdGdyZXMucXVlcnkoYHNlbGVjdCAqIGZyb20gaW1hZ2VzIHdoZXJlIGlkID0gJHtpbWFnZX1gLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjYihlcnIsIG51bGwpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNiKG51bGwsIHJlcy5yb3dzWzBdKVxuICAgICAgICAgICAgcmVkaXNDbGllbnQuc2V0KGltYWdlLnRvU3RyaW5nKCksIEpTT04uc3RyaW5naWZ5KHJlcy5yb3dzWzBdKSwgZnVuY3Rpb24gKGVyciwgc3VjY2Vzcykge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYihudWxsLCBKU09OLnBhcnNlKHJlcGx5KSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbi8vIHNlcnZpY2UgbG9hZGVyIGtleSAobm8gbmdpbngpOiBsb2FkZXJpby1iMDY1ZjNjNWMxOTQ1OGYzMmU1YjBhZjdiM2M1MGViNVxuLy8ga2V5IHdpdGggbmdpbng6IGxvYWRlcmlvLTM3MmEwMmI1OTRjMzEyYzFjY2ZjZjI1MWJhNGY4ZjljXG5cbmh0dHAuY3JlYXRlU2VydmVyKGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICBpZiAocmVxLnVybCA9PT0gYC9sb2FkZXJpby05NmYwZWI5YjNjMTAyZDY5NTFjNGE4ODcwMDNjZTg3MS9gKSB7XG4gICAgICByZXMuZW5kKCdsb2FkZXJpby05NmYwZWI5YjNjMTAyZDY5NTFjNGE4ODcwMDNjZTg3MScsICd1dGYtOCcpO1xuICAgICAgcmV0dXJuO1xuICAgICAgLy8gbWNvd2Rlbjg4MDgrMEBnbWFpbC5jb21cbiAgICB9IGVsc2UgaWYgKHJlcS51cmwgPT09IGAvbG9hZGVyaW8tYjA2NWYzYzVjMTk0NThmMzJlNWIwYWY3YjNjNTBlYjUvYCkge1xuICAgICAgcmVzLmVuZCgnbG9hZGVyaW8tYjA2NWYzYzVjMTk0NThmMzJlNWIwYWY3YjNjNTBlYjUnLCAndXRmLTgnKTtcbiAgICAgIHJldHVybjtcbiAgICAgIC8vIG1jb3dkZW44ODA4KzFAZ21haWwuY29tXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb250ZW50VHlwZSA9ICd0ZXh0L2h0bWwnO1xuICAgICAgbGV0IGV4dGVuc2lvbiA9IHBhdGguZXh0bmFtZShyZXEudXJsKVxuICAgICAgaWYgKGV4dGVuc2lvbiA9PT0gJy5qcycpIHtcbiAgICAgICAgY29udGVudFR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgICAgICBob3N0SnNPckNzcygpXG4gICAgICB9IGVsc2UgaWYgKGV4dGVuc2lvbiA9PT0gJy5jc3MnKSB7XG4gICAgICAgIGNvbnRlbnRUeXBlID0gJ3RleHQvY3NzJ1xuICAgICAgICBob3N0SnNPckNzcygpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcGhvdG9BcnIgPSBbXVxuICAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgIGxldCByYW5kb21OdW1iZXIgPSA0Ly9NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNiArIDEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbU51bWJlcjsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJhbmRvbVBob3RvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUwMDAwMCArIDc1MDAwMDApXG4gICAgICAgICAgZ2V0SW1hZ2UocmFuZG9tUGhvdG8sIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldEltYWdlIGNiOiAnLCBlcnIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwaG90b0Fyci5wdXNoKGRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQgPT09IHJhbmRvbU51bWJlcikge1xuICAgICAgICAgICAgICByZXMud3JpdGVIZWFkKDIwMCwge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sJyxcbiAgICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIjogXCJYLVJlcXVlc3RlZC1XaXRoXCJcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgY29uc3QgcmVhY3RTdHJpbmcgPSBSZWFjdERPTS5yZW5kZXJUb1N0cmluZyg8QXBwIGRhdGE9e3Bob3RvQXJyfSAvPilcbiAgICAgICAgICAgICAgcmVzLmVuZChyZWFjdFN0cmluZywgJ3V0Zi04JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaG9zdEpzT3JDc3MoKSB7XG4gICAgZnMucmVhZEZpbGUocmVxLnVybCA9PT0gJy8nID8gcHVibGljRGlyZWN0b3J5ICsgJy9pbmRleC5odG1sJyA6IHB1YmxpY0RpcmVjdG9yeSArIHJlcS51cmwsIChlcnIsIGNvbnRlbnQpID0+IHtcblxuICAgICAgcmVzLndyaXRlSGVhZCgyMDAsIHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IGNvbnRlbnRUeXBlLFxuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCI6IFwiWC1SZXF1ZXN0ZWQtV2l0aFwiXG4gICAgICB9KTtcbiAgICAgIHJlcy5lbmQoY29udGVudCwgJ3V0Zi04Jyk7XG4gICAgfSlcbiAgfVxuXG59KS5saXN0ZW4oUE9SVCwgKCkgPT4ge1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVkE7QUFEQTtBQWNBO0FBQ0E7QUFDQTtBQXJCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBREE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUF2QkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUEE7QUFTQTtBQXpEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/server.js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIj84ZDE5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///http\n");

/***/ }),

/***/ "newrelic":
/*!***************************!*\
  !*** external "newrelic" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"newrelic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cmVsaWMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXdyZWxpY1wiPzc0NjYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV3cmVsaWNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///newrelic\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj83NGJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwZ1wiPzRkYTIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGdcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///pg\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9tL3NlcnZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj85NDM5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redis\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWRpc1wiPzcwNmMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkaXNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///redis\n");

/***/ })

/******/ });