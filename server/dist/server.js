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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Pictures_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Pictures.jsx */ \"./client/src/components/Pictures.jsx\");\n/* harmony import */ var _components_Popup_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Popup.jsx */ \"./client/src/components/Popup.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* eslint-disable */\n\n/* eslint-disable import/extensions */\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props)); // console.log(props.data)\n\n    _this.state = {\n      data: _this.props.data,\n      popCurr: null,\n      popCheck: false,\n      prevSpot: null\n    };\n    _this.rightRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    _this.scrollRight = _this.scrollRight.bind(_assertThisInitialized(_this));\n    _this.scrollLeft = _this.scrollLeft.bind(_assertThisInitialized(_this));\n    _this.popCurrStart = _this.popCurrStart.bind(_assertThisInitialized(_this));\n    _this.currChange = _this.currChange.bind(_assertThisInitialized(_this));\n    _this.closePop = _this.closePop.bind(_assertThisInitialized(_this));\n    _this.houseView = _this.houseView.bind(_assertThisInitialized(_this));\n    return _this;\n  } //fetching links on mount\n  // componentWillMount() {\n  //   fetch('http://picturescomponent-env.rvmps3ehip.us-east-2.elasticbeanstalk.com/links', {\n  //     method: 'GET',\n  //   }).then(res => res.json())\n  //     .then((newData) => {\n  //       this.setState({\n  //         data: newData,\n  //       });\n  //     }).catch(err => console.log(err));\n  // }\n  //method to refresh the picture component when other microservices trigger it with global event\n\n\n  _createClass(App, [{\n    key: \"houseView\",\n    value: function houseView() {} // fetch('http://picturescomponent-env.rvmps3ehip.us-east-2.elasticbeanstalk.com/links', {\n    //   method: 'GET',\n    // }).then(res => res.json())\n    //   .then((newData) => {\n    //     this.setState({\n    //       data: newData,\n    //     });\n    //   }).catch(err => console.log(err));\n    //method to set the index of where the pop up will start\n\n  }, {\n    key: \"popCurrStart\",\n    value: function popCurrStart(e) {} // if (window.innerWidth >= 995) {\n    //   this.setState({\n    //     popCurr: e.target.id,\n    //     popCheck: true,\n    //     prevSpot: this.rightRef.scrollLeft,\n    //   });\n    //   //this moves div to pop up if it is scrolled over\n    //   this.rightRef.scrollLeft -= 6750;\n    // }\n    //method to close the pop up\n\n  }, {\n    key: \"closePop\",\n    value: function closePop() {\n      var prevSpot = this.state.prevSpot;\n      this.rightRef.scrollLeft += prevSpot;\n      this.setState({\n        popCheck: false\n      });\n    } //method to change the insex of the pop up\n\n  }, {\n    key: \"currChange\",\n    value: function currChange(e) {\n      var popCurr = this.state.popCurr;\n      var data = this.state.data;\n\n      if (e.target.className === \"next\") {\n        popCurr = Number(popCurr) + 1;\n      } else {\n        popCurr = Number(popCurr) - 1;\n      }\n\n      if (popCurr > 0 && popCurr < data.length) {\n        this.setState({\n          popCurr: popCurr\n        });\n      }\n    } //methods to make the picture div scroll on click\n\n  }, {\n    key: \"scrollRight\",\n    value: function scrollRight() {\n      this.rightRef.scrollLeft += 500;\n    }\n  }, {\n    key: \"scrollLeft\",\n    value: function scrollLeft() {\n      this.rightRef.scrollLeft -= 500;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var left = '<';\n      var right = '>';\n      var _this$state = this.state,\n          data = _this$state.data,\n          popCheck = _this$state.popCheck,\n          popCurr = _this$state.popCurr;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"mainDiv\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        type: \"submit\",\n        id: \"left\",\n        onClick: this.scrollLeft,\n        className: \"leftButton\"\n      }, left), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"mainContainer\",\n        ref: function ref(r) {\n          return _this2.rightRef = r;\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pictures_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        data: data,\n        scrollRight: this.scrollRight,\n        currChange: this.popCurrStart\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Popup_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        check: popCheck,\n        curr: popCurr,\n        photos: data,\n        change: this.currChange,\n        close: this.closePop\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        type: \"submit\",\n        id: \"right\",\n        onClick: this.scrollRight,\n        className: \"rightButton\"\n      }, right));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL01haW4uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9NYWluLmpzeD84MjAyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQaWN0dXJlcyBmcm9tICcuL2NvbXBvbmVudHMvUGljdHVyZXMuanN4JztcbmltcG9ydCBQb3B1cCBmcm9tICcuL2NvbXBvbmVudHMvUG9wdXAuanN4JztcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLmRhdGEpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcbiAgICAgIHBvcEN1cnI6IG51bGwsXG4gICAgICBwb3BDaGVjazogZmFsc2UsXG4gICAgICBwcmV2U3BvdDogbnVsbCxcbiAgICB9O1xuICAgIHRoaXMucmlnaHRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLnNjcm9sbFJpZ2h0ID0gdGhpcy5zY3JvbGxSaWdodC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHRoaXMuc2Nyb2xsTGVmdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucG9wQ3VyclN0YXJ0ID0gdGhpcy5wb3BDdXJyU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmN1cnJDaGFuZ2UgPSB0aGlzLmN1cnJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlUG9wID0gdGhpcy5jbG9zZVBvcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaG91c2VWaWV3ID0gdGhpcy5ob3VzZVZpZXcuYmluZCh0aGlzKTtcbiAgfVxuICAvL2ZldGNoaW5nIGxpbmtzIG9uIG1vdW50XG4gIC8vIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAvLyAgIGZldGNoKCdodHRwOi8vcGljdHVyZXNjb21wb25lbnQtZW52LnJ2bXBzM2VoaXAudXMtZWFzdC0yLmVsYXN0aWNiZWFuc3RhbGsuY29tL2xpbmtzJywge1xuICAvLyAgICAgbWV0aG9kOiAnR0VUJyxcbiAgLy8gICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAvLyAgICAgLnRoZW4oKG5ld0RhdGEpID0+IHtcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICAgICAgZGF0YTogbmV3RGF0YSxcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIC8vIH1cbiAgLy9tZXRob2QgdG8gcmVmcmVzaCB0aGUgcGljdHVyZSBjb21wb25lbnQgd2hlbiBvdGhlciBtaWNyb3NlcnZpY2VzIHRyaWdnZXIgaXQgd2l0aCBnbG9iYWwgZXZlbnRcbiAgaG91c2VWaWV3KCkge1xuICAgIC8vIGZldGNoKCdodHRwOi8vcGljdHVyZXNjb21wb25lbnQtZW52LnJ2bXBzM2VoaXAudXMtZWFzdC0yLmVsYXN0aWNiZWFuc3RhbGsuY29tL2xpbmtzJywge1xuICAgIC8vICAgbWV0aG9kOiAnR0VUJyxcbiAgICAvLyB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC8vICAgLnRoZW4oKG5ld0RhdGEpID0+IHtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgZGF0YTogbmV3RGF0YSxcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cblxuICAvL21ldGhvZCB0byBzZXQgdGhlIGluZGV4IG9mIHdoZXJlIHRoZSBwb3AgdXAgd2lsbCBzdGFydFxuICBwb3BDdXJyU3RhcnQoZSkge1xuICAgIC8vIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA5OTUpIHtcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICBwb3BDdXJyOiBlLnRhcmdldC5pZCxcbiAgICAvLyAgICAgcG9wQ2hlY2s6IHRydWUsXG4gICAgLy8gICAgIHByZXZTcG90OiB0aGlzLnJpZ2h0UmVmLnNjcm9sbExlZnQsXG4gICAgLy8gICB9KTtcbiAgICAvLyAgIC8vdGhpcyBtb3ZlcyBkaXYgdG8gcG9wIHVwIGlmIGl0IGlzIHNjcm9sbGVkIG92ZXJcbiAgICAvLyAgIHRoaXMucmlnaHRSZWYuc2Nyb2xsTGVmdCAtPSA2NzUwO1xuICAgIC8vIH1cbiAgfVxuICAvL21ldGhvZCB0byBjbG9zZSB0aGUgcG9wIHVwXG4gIGNsb3NlUG9wKCkge1xuICAgIGNvbnN0IHsgcHJldlNwb3QgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5yaWdodFJlZi5zY3JvbGxMZWZ0ICs9IHByZXZTcG90O1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcG9wQ2hlY2s6IGZhbHNlLFxuICAgIH0pO1xuICB9XG4gIC8vbWV0aG9kIHRvIGNoYW5nZSB0aGUgaW5zZXggb2YgdGhlIHBvcCB1cFxuICBjdXJyQ2hhbmdlKGUpIHtcbiAgICBsZXQgeyBwb3BDdXJyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcIm5leHRcIikge1xuICAgICAgcG9wQ3VyciA9IE51bWJlcihwb3BDdXJyKSArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcEN1cnIgPSBOdW1iZXIocG9wQ3VycikgLSAxO1xuICAgIH1cbiAgICBpZiAocG9wQ3VyciA+IDAgJiYgcG9wQ3VyciA8IGRhdGEubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG9wQ3VycixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvL21ldGhvZHMgdG8gbWFrZSB0aGUgcGljdHVyZSBkaXYgc2Nyb2xsIG9uIGNsaWNrXG4gIHNjcm9sbFJpZ2h0KCkge1xuICAgIHRoaXMucmlnaHRSZWYuc2Nyb2xsTGVmdCArPSA1MDA7XG4gIH1cblxuICBzY3JvbGxMZWZ0KCkge1xuICAgIHRoaXMucmlnaHRSZWYuc2Nyb2xsTGVmdCAtPSA1MDA7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbGVmdCA9ICc8JztcbiAgICBjb25zdCByaWdodCA9ICc+JztcbiAgICBjb25zdCB7IGRhdGEsIHBvcENoZWNrLCBwb3BDdXJyIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5EaXZcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGlkPVwibGVmdFwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5zY3JvbGxMZWZ0fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnRCdXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAge2xlZnR9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWFpbkNvbnRhaW5lclwiXG4gICAgICAgICAgcmVmPXtyID0+IHRoaXMucmlnaHRSZWYgPSByfVxuICAgICAgICA+XG4gICAgICAgICAgPFBpY3R1cmVzXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgc2Nyb2xsUmlnaHQ9e3RoaXMuc2Nyb2xsUmlnaHR9XG4gICAgICAgICAgICBjdXJyQ2hhbmdlPXt0aGlzLnBvcEN1cnJTdGFydH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgY2hlY2s9e3BvcENoZWNrfVxuICAgICAgICAgICAgY3Vycj17cG9wQ3Vycn1cbiAgICAgICAgICAgIHBob3Rvcz17ZGF0YX1cbiAgICAgICAgICAgIGNoYW5nZT17dGhpcy5jdXJyQ2hhbmdlfVxuICAgICAgICAgICAgY2xvc2U9e3RoaXMuY2xvc2VQb3B9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBpZD1cInJpZ2h0XCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNjcm9sbFJpZ2h0fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJpZ2h0QnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtyaWdodH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWdCQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7Ozs7QUEvSEE7QUFDQTtBQWlJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/Main.jsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n/* eslint-disable jsx-a11y/click-events-have-key-events */\n\n/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */\n\n/* eslint-disable no-underscore-dangle */\n // function to parse incoming photo data into image elements\n\nvar listParser = function listParser(data, fn) {\n  var newData = _toConsumableArray(data);\n\n  var first = newData.shift();\n  var index = 0;\n  var list = newData.reduce(function (acc, curr) {\n    acc.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      onClick: fn,\n      key: curr._id,\n      id: index += 1,\n      src: curr.url,\n      alt: \"house\",\n      className: \"smallImages\"\n    }));\n    return acc;\n  }, []);\n  list.unshift(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    onClick: fn,\n    key: first._id,\n    id: 0,\n    src: first.url,\n    className: \"firstImage\",\n    alt: \"house\"\n  }));\n  return list;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (listParser);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL3V0aWxzL2RhdGFQYXJzZXIuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy91dGlscy9kYXRhUGFyc2VyLmpzeD9lMWQzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGZ1bmN0aW9uIHRvIHBhcnNlIGluY29taW5nIHBob3RvIGRhdGEgaW50byBpbWFnZSBlbGVtZW50c1xuY29uc3QgbGlzdFBhcnNlciA9IChkYXRhLCBmbikgPT4ge1xuICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdO1xuICBjb25zdCBmaXJzdCA9IG5ld0RhdGEuc2hpZnQoKTtcbiAgbGV0IGluZGV4ID0gMDtcbiAgY29uc3QgbGlzdCA9IG5ld0RhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcbiAgICBhY2MucHVzaCgoXG4gICAgICA8aW1nIG9uQ2xpY2s9e2ZufSBrZXk9e2N1cnIuX2lkfSBpZD17aW5kZXggKz0gMX0gc3JjPXtjdXJyLnVybH0gYWx0PVwiaG91c2VcIiBjbGFzc05hbWU9XCJzbWFsbEltYWdlc1wiIC8+XG4gICAgKSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xuICBsaXN0LnVuc2hpZnQoKFxuICAgIDxpbWcgb25DbGljaz17Zm59IGtleT17Zmlyc3QuX2lkfSBpZD17MH0gc3JjPXtmaXJzdC51cmx9IGNsYXNzTmFtZT1cImZpcnN0SW1hZ2VcIiBhbHQ9XCJob3VzZVwiIC8+XG4gICkpO1xuICByZXR1cm4gbGlzdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RQYXJzZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/utils/dataParser.jsx\n");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_src_Main_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/src/Main.jsx */ \"./client/src/Main.jsx\");\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar _require = __webpack_require__(/*! pg */ \"pg\"),\n    Client = _require.Client;\n\nvar ReactDOM = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\n\n\nvar app = express();\napp.use(express.static(path.join(__dirname, '/../client/dist')));\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({\n  extended: false\n}));\nvar PORT = process.env.PORT || 8082;\nvar postgres = new Client({\n  user: \"michaelcowden\",\n  host: \"localhost\",\n  database: \"pictureservice\"\n});\npostgres.connect();\n\nfunction getImage(image, cb) {\n  postgres.query(\"select * from images where id = \".concat(image), function (err, res) {\n    if (err) {\n      cb(err, null);\n    } else {\n      cb(null, res);\n    }\n  });\n}\n\napp.get('/', function (req, res) {\n  var picsArrayOfImages = [];\n  var count = 0;\n  var randomNumber = Math.floor(Math.random() * 16 + 1);\n\n  for (var i = 0; i < randomNumber; i++) {\n    var randomImage = Math.floor(Math.random() * 10000000);\n    getImage(randomImage, function (err, data) {\n      count++;\n\n      if (err) {} else {\n        picsArrayOfImages.push(data.rows[0]); // console.log(Object.keys(data))\n      }\n\n      if (count === randomNumber) {\n        res.writeHead(200, {\n          'Content-Type': 'text/html',\n          \"Access-Control-Allow-Origin\": \"*\",\n          \"Access-Control-Allow-Headers\": \"X-Requested-With\"\n        });\n        var reactString = ReactDOM.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_src_Main_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          data: picsArrayOfImages\n        })); // console.log(reactString)\n\n        res.end(reactString, 'utf-8');\n      }\n    });\n  }\n});\napp.listen(PORT, function () {\n  console.log(\"Server running!\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvc2VydmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NlcnZlci5qcz9mMTQwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgeyBDbGllbnQgfSA9IHJlcXVpcmUoJ3BnJyk7XG5cbmNvbnN0IFJlYWN0RE9NID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL2NsaWVudC9zcmMvTWFpbi5qc3hcIlxuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy8uLi9jbGllbnQvZGlzdCcpKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcblxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MjtcblxuY29uc3QgcG9zdGdyZXMgPSBuZXcgQ2xpZW50KHtcbiAgdXNlcjogXCJtaWNoYWVsY293ZGVuXCIsXG4gIGhvc3Q6IFwibG9jYWxob3N0XCIsXG4gIGRhdGFiYXNlOiBcInBpY3R1cmVzZXJ2aWNlXCJcbn0pO1xuXG5wb3N0Z3Jlcy5jb25uZWN0KCk7XG5cbmZ1bmN0aW9uIGdldEltYWdlKGltYWdlLCBjYikge1xuICBwb3N0Z3Jlcy5xdWVyeShgc2VsZWN0ICogZnJvbSBpbWFnZXMgd2hlcmUgaWQgPSAke2ltYWdlfWAsIChlcnIsIHJlcykgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNiKGVyciwgbnVsbClcbiAgICB9IGVsc2Uge1xuICAgICAgY2IobnVsbCwgcmVzKVxuICAgIH1cbiAgfSlcbn1cblxuYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xuICBsZXQgcGljc0FycmF5T2ZJbWFnZXMgPSBbXVxuICBsZXQgY291bnQgPSAwXG4gIGxldCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNiArIDEpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbU51bWJlcjsgaSsrKSB7XG4gICAgbGV0IHJhbmRvbUltYWdlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDApXG4gICAgZ2V0SW1hZ2UocmFuZG9tSW1hZ2UsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGNvdW50KytcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBpY3NBcnJheU9mSW1hZ2VzLnB1c2goZGF0YS5yb3dzWzBdKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhkYXRhKSlcbiAgICAgIH1cbiAgICAgIGlmIChjb3VudCA9PT0gcmFuZG9tTnVtYmVyKSB7XG4gICAgICAgIHJlcy53cml0ZUhlYWQoMjAwLCB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWwnLFxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiOiBcIlgtUmVxdWVzdGVkLVdpdGhcIlxuICAgICAgICB9KVxuICAgICAgICBjb25zdCByZWFjdFN0cmluZyA9IFJlYWN0RE9NLnJlbmRlclRvU3RyaW5nKDxBcHAgZGF0YT17cGljc0FycmF5T2ZJbWFnZXN9IC8+KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZWFjdFN0cmluZylcbiAgICAgICAgcmVzLmVuZChyZWFjdFN0cmluZywgJ3V0Zi04JylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJTZXJ2ZXIgcnVubmluZyFcIilcbn0pOyJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUF4QkE7QUEyQkE7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/server.js\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

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

/***/ })

/******/ });