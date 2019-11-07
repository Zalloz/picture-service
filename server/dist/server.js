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

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/michaelcowden/sdc/picture-service/server/server.js: Identifier 'publicDirectory' has already been declared (66:6)\\n\\n\\u001b[0m \\u001b[90m 64 | \\u001b[39m\\u001b[90m// })\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 65 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 66 | \\u001b[39m\\u001b[36mconst\\u001b[39m publicDirectory \\u001b[33m=\\u001b[39m path\\u001b[33m.\\u001b[39mjoin(__dirname\\u001b[33m,\\u001b[39m \\u001b[32m'public'\\u001b[39m)\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 67 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 68 | \\u001b[39m\\u001b[36mconst\\u001b[39m postgres \\u001b[33m=\\u001b[39m \\u001b[36mnew\\u001b[39m \\u001b[33mClient\\u001b[39m({\\u001b[0m\\n\\u001b[0m \\u001b[90m 69 | \\u001b[39m  user\\u001b[33m:\\u001b[39m \\u001b[32m\\\"postgres\\\"\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n    at Object.raise (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/parser/lib/index.js:3851:17)\\n    at ScopeHandler.declareName (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/parser/lib/index.js:8819:12)\\n    at Object.checkLVal (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/parser/lib/index.js:5537:22)\\n    at Object.parseVarId (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/parser/lib/index.js:7977:10)\\n    at Object.parseVar (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/parser/lib/index.js:7948:12)\\n    at Object.parseVarStatement (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/parser/lib/index.js:7773:10)\\n    at Object.parseStatementContent (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/parser/lib/index.js:7360:21)\\n    at Object.parseStatement (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/parser/lib/index.js:7293:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/parser/lib/index.js:7879:25)\\n    at Object.parseBlockBody (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/parser/lib/index.js:7866:10)\\n    at Object.parseTopLevel (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/parser/lib/index.js:7222:10)\\n    at Object.parse (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/parser/lib/index.js:8871:17)\\n    at parse (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/parser/lib/index.js:11133:38)\\n    at parser (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/michaelcowden/sdc/picture-service/node_modules/@babel/core/lib/transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvc2VydmVyLmpzLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/server.js\n");

/***/ })

/******/ });