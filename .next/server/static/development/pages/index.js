module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/templates/home/index.tsx":
/*!*********************************************!*\
  !*** ./components/templates/home/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/components/templates/home/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



const PC_SCALE = 0.7;

const Home = () => {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Inner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
    src: "/img/svg/logo.svg",
    alt: "\u30B9\u30B1\u30C3\u30C8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "\u88AB\u707D\u8005\u306E\u304A\u56F0\u308A\u3054\u3068\u3092\u52A9\u3051\u5408\u3046", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), "\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u30FB\u30DE\u30C3\u30C1\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(ComingSoon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "\u8FD1\u65E5\u516C\u958B"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(HashTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "#\u88AB\u707D\u8005\u30B9\u30B1\u30C3\u30C8")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

const Wrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "eldwnmd0",
  label: "Wrapper"
})( false ? undefined : {
  name: "c7esc3",
  styles: "position:absolute;top:0;left:0;width:100%;height:100%;background-image:linear-gradient(to right,#00b4ed,#0091db);color:#fff;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmllLXNoaW5ub3N1a2UvRG9jdW1lbnRzL3dvcmtzL3NrZXR0L3NrZXR0L2NvbXBvbmVudHMvdGVtcGxhdGVzL2hvbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCMEIiLCJmaWxlIjoiL1VzZXJzL2lyaWUtc2hpbm5vc3VrZS9Eb2N1bWVudHMvd29ya3Mvc2tldHQvc2tldHQvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBQQ19TQ0FMRSA9IDAuN1xuXG5jb25zdCBIb21lID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxJbm5lcj5cbiAgICAgICAgICAgICAgICA8TG9nbz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3N2Zy9sb2dvLnN2Z1wiIGFsdD1cIuOCueOCseODg+ODiFwiIC8+XG4gICAgICAgICAgICAgICAgPC9Mb2dvPlxuICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICDooqvngb3ogIXjga7jgYrlm7DjgorjgZTjgajjgpLliqnjgZHlkIjjgYZcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIOODnOODqeODs+ODhuOCo+OCouODu+ODnuODg+ODgeODs+OCsOOCteODvOODk+OCuVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Q29taW5nU29vbj7ov5Hml6Xlhazplos8L0NvbWluZ1Nvb24+XG4gICAgICAgICAgICAgICAgPEhhc2hUYWc+I+iiq+eBveiAheOCueOCseODg+ODiDwvSGFzaFRhZz5cbiAgICAgICAgICAgIDwvSW5uZXI+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGI0ZWQsICMwMDkxZGIpO1xuICAgIGNvbG9yOiAjZmZmO1xuYFxuXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZy10b3A6IDIwdmg7XG5gXG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA1MjVweDtcbiAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICB3aWR0aDogJHs1MjUgKiBQQ19TQ0FMRX1weDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHs1MCAqIFBDX1NDQUxFfXB4O1xuICAgIH1cbiAgICAmID4gaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuYFxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAgIHdpZHRoOiAxNmVtO1xuICAgIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsxMDAgKiBQQ19TQ0FMRX1weDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6ICR7MzQgKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG5cbmNvbnN0IENvbWluZ1Nvb24gPSBzdHlsZWQucGBcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkezEwMCAqIFBDX1NDQUxFfXB4O1xuICAgICAgICBmb250LXNpemU6ICR7NDggKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG5cbmNvbnN0IEhhc2hUYWcgPSBzdHlsZWQucGBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICBmb250LXNpemU6ICR7NDggKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Inner = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "eldwnmd1",
  label: "Inner"
})( false ? undefined : {
  name: "1ohnanh",
  styles: "padding-top:20vh;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmllLXNoaW5ub3N1a2UvRG9jdW1lbnRzL3dvcmtzL3NrZXR0L3NrZXR0L2NvbXBvbmVudHMvdGVtcGxhdGVzL2hvbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Dd0IiLCJmaWxlIjoiL1VzZXJzL2lyaWUtc2hpbm5vc3VrZS9Eb2N1bWVudHMvd29ya3Mvc2tldHQvc2tldHQvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBQQ19TQ0FMRSA9IDAuN1xuXG5jb25zdCBIb21lID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxJbm5lcj5cbiAgICAgICAgICAgICAgICA8TG9nbz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3N2Zy9sb2dvLnN2Z1wiIGFsdD1cIuOCueOCseODg+ODiFwiIC8+XG4gICAgICAgICAgICAgICAgPC9Mb2dvPlxuICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICDooqvngb3ogIXjga7jgYrlm7DjgorjgZTjgajjgpLliqnjgZHlkIjjgYZcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIOODnOODqeODs+ODhuOCo+OCouODu+ODnuODg+ODgeODs+OCsOOCteODvOODk+OCuVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Q29taW5nU29vbj7ov5Hml6Xlhazplos8L0NvbWluZ1Nvb24+XG4gICAgICAgICAgICAgICAgPEhhc2hUYWc+I+iiq+eBveiAheOCueOCseODg+ODiDwvSGFzaFRhZz5cbiAgICAgICAgICAgIDwvSW5uZXI+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGI0ZWQsICMwMDkxZGIpO1xuICAgIGNvbG9yOiAjZmZmO1xuYFxuXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZy10b3A6IDIwdmg7XG5gXG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA1MjVweDtcbiAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICB3aWR0aDogJHs1MjUgKiBQQ19TQ0FMRX1weDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHs1MCAqIFBDX1NDQUxFfXB4O1xuICAgIH1cbiAgICAmID4gaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuYFxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAgIHdpZHRoOiAxNmVtO1xuICAgIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsxMDAgKiBQQ19TQ0FMRX1weDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6ICR7MzQgKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG5cbmNvbnN0IENvbWluZ1Nvb24gPSBzdHlsZWQucGBcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkezEwMCAqIFBDX1NDQUxFfXB4O1xuICAgICAgICBmb250LXNpemU6ICR7NDggKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG5cbmNvbnN0IEhhc2hUYWcgPSBzdHlsZWQucGBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICBmb250LXNpemU6ICR7NDggKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Logo = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "eldwnmd2",
  label: "Logo"
})("width:525px;margin:0 auto 50px;@media (min-width:750px){width:", 525 * PC_SCALE, "px;margin-bottom:", 50 * PC_SCALE, "px;}& > img{width:100%;}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmllLXNoaW5ub3N1a2UvRG9jdW1lbnRzL3dvcmtzL3NrZXR0L3NrZXR0L2NvbXBvbmVudHMvdGVtcGxhdGVzL2hvbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDdUIiLCJmaWxlIjoiL1VzZXJzL2lyaWUtc2hpbm5vc3VrZS9Eb2N1bWVudHMvd29ya3Mvc2tldHQvc2tldHQvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBQQ19TQ0FMRSA9IDAuN1xuXG5jb25zdCBIb21lID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxJbm5lcj5cbiAgICAgICAgICAgICAgICA8TG9nbz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3N2Zy9sb2dvLnN2Z1wiIGFsdD1cIuOCueOCseODg+ODiFwiIC8+XG4gICAgICAgICAgICAgICAgPC9Mb2dvPlxuICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICDooqvngb3ogIXjga7jgYrlm7DjgorjgZTjgajjgpLliqnjgZHlkIjjgYZcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIOODnOODqeODs+ODhuOCo+OCouODu+ODnuODg+ODgeODs+OCsOOCteODvOODk+OCuVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Q29taW5nU29vbj7ov5Hml6Xlhazplos8L0NvbWluZ1Nvb24+XG4gICAgICAgICAgICAgICAgPEhhc2hUYWc+I+iiq+eBveiAheOCueOCseODg+ODiDwvSGFzaFRhZz5cbiAgICAgICAgICAgIDwvSW5uZXI+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGI0ZWQsICMwMDkxZGIpO1xuICAgIGNvbG9yOiAjZmZmO1xuYFxuXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZy10b3A6IDIwdmg7XG5gXG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA1MjVweDtcbiAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICB3aWR0aDogJHs1MjUgKiBQQ19TQ0FMRX1weDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHs1MCAqIFBDX1NDQUxFfXB4O1xuICAgIH1cbiAgICAmID4gaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuYFxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAgIHdpZHRoOiAxNmVtO1xuICAgIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsxMDAgKiBQQ19TQ0FMRX1weDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6ICR7MzQgKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG5cbmNvbnN0IENvbWluZ1Nvb24gPSBzdHlsZWQucGBcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkezEwMCAqIFBDX1NDQUxFfXB4O1xuICAgICAgICBmb250LXNpemU6ICR7NDggKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG5cbmNvbnN0IEhhc2hUYWcgPSBzdHlsZWQucGBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICBmb250LXNpemU6ICR7NDggKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG4iXX0= */"));

const Text = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("p", {
  target: "eldwnmd3",
  label: "Text"
})("width:16em;margin:0 auto 100px;line-height:1.75;font-size:34px;@media (min-width:750px){margin-bottom:", 100 * PC_SCALE, "px;text-align:center;font-size:", 34 * PC_SCALE, "px;}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmllLXNoaW5ub3N1a2UvRG9jdW1lbnRzL3dvcmtzL3NrZXR0L3NrZXR0L2NvbXBvbmVudHMvdGVtcGxhdGVzL2hvbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EcUIiLCJmaWxlIjoiL1VzZXJzL2lyaWUtc2hpbm5vc3VrZS9Eb2N1bWVudHMvd29ya3Mvc2tldHQvc2tldHQvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBQQ19TQ0FMRSA9IDAuN1xuXG5jb25zdCBIb21lID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxJbm5lcj5cbiAgICAgICAgICAgICAgICA8TG9nbz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3N2Zy9sb2dvLnN2Z1wiIGFsdD1cIuOCueOCseODg+ODiFwiIC8+XG4gICAgICAgICAgICAgICAgPC9Mb2dvPlxuICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICDooqvngb3ogIXjga7jgYrlm7DjgorjgZTjgajjgpLliqnjgZHlkIjjgYZcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIOODnOODqeODs+ODhuOCo+OCouODu+ODnuODg+ODgeODs+OCsOOCteODvOODk+OCuVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Q29taW5nU29vbj7ov5Hml6Xlhazplos8L0NvbWluZ1Nvb24+XG4gICAgICAgICAgICAgICAgPEhhc2hUYWc+I+iiq+eBveiAheOCueOCseODg+ODiDwvSGFzaFRhZz5cbiAgICAgICAgICAgIDwvSW5uZXI+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGI0ZWQsICMwMDkxZGIpO1xuICAgIGNvbG9yOiAjZmZmO1xuYFxuXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZy10b3A6IDIwdmg7XG5gXG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA1MjVweDtcbiAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICB3aWR0aDogJHs1MjUgKiBQQ19TQ0FMRX1weDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHs1MCAqIFBDX1NDQUxFfXB4O1xuICAgIH1cbiAgICAmID4gaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuYFxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAgIHdpZHRoOiAxNmVtO1xuICAgIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsxMDAgKiBQQ19TQ0FMRX1weDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6ICR7MzQgKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG5cbmNvbnN0IENvbWluZ1Nvb24gPSBzdHlsZWQucGBcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkezEwMCAqIFBDX1NDQUxFfXB4O1xuICAgICAgICBmb250LXNpemU6ICR7NDggKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG5cbmNvbnN0IEhhc2hUYWcgPSBzdHlsZWQucGBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICBmb250LXNpemU6ICR7NDggKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG4iXX0= */"));

const ComingSoon = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("p", {
  target: "eldwnmd4",
  label: "ComingSoon"
})("margin-bottom:100px;text-align:center;font-size:48px;font-weight:bold;@media (min-width:750px){margin-bottom:", 100 * PC_SCALE, "px;font-size:", 48 * PC_SCALE, "px;}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmllLXNoaW5ub3N1a2UvRG9jdW1lbnRzL3dvcmtzL3NrZXR0L3NrZXR0L2NvbXBvbmVudHMvdGVtcGxhdGVzL2hvbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEMkIiLCJmaWxlIjoiL1VzZXJzL2lyaWUtc2hpbm5vc3VrZS9Eb2N1bWVudHMvd29ya3Mvc2tldHQvc2tldHQvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBQQ19TQ0FMRSA9IDAuN1xuXG5jb25zdCBIb21lID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxJbm5lcj5cbiAgICAgICAgICAgICAgICA8TG9nbz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3N2Zy9sb2dvLnN2Z1wiIGFsdD1cIuOCueOCseODg+ODiFwiIC8+XG4gICAgICAgICAgICAgICAgPC9Mb2dvPlxuICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICDooqvngb3ogIXjga7jgYrlm7DjgorjgZTjgajjgpLliqnjgZHlkIjjgYZcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIOODnOODqeODs+ODhuOCo+OCouODu+ODnuODg+ODgeODs+OCsOOCteODvOODk+OCuVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Q29taW5nU29vbj7ov5Hml6Xlhazplos8L0NvbWluZ1Nvb24+XG4gICAgICAgICAgICAgICAgPEhhc2hUYWc+I+iiq+eBveiAheOCueOCseODg+ODiDwvSGFzaFRhZz5cbiAgICAgICAgICAgIDwvSW5uZXI+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGI0ZWQsICMwMDkxZGIpO1xuICAgIGNvbG9yOiAjZmZmO1xuYFxuXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZy10b3A6IDIwdmg7XG5gXG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA1MjVweDtcbiAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICB3aWR0aDogJHs1MjUgKiBQQ19TQ0FMRX1weDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHs1MCAqIFBDX1NDQUxFfXB4O1xuICAgIH1cbiAgICAmID4gaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuYFxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAgIHdpZHRoOiAxNmVtO1xuICAgIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsxMDAgKiBQQ19TQ0FMRX1weDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6ICR7MzQgKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG5cbmNvbnN0IENvbWluZ1Nvb24gPSBzdHlsZWQucGBcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkezEwMCAqIFBDX1NDQUxFfXB4O1xuICAgICAgICBmb250LXNpemU6ICR7NDggKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG5cbmNvbnN0IEhhc2hUYWcgPSBzdHlsZWQucGBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICBmb250LXNpemU6ICR7NDggKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG4iXX0= */"));

const HashTag = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("p", {
  target: "eldwnmd5",
  label: "HashTag"
})("text-align:center;font-size:48px;font-weight:bold;@media (min-width:750px){font-size:", 48 * PC_SCALE, "px;}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcmllLXNoaW5ub3N1a2UvRG9jdW1lbnRzL3dvcmtzL3NrZXR0L3NrZXR0L2NvbXBvbmVudHMvdGVtcGxhdGVzL2hvbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFd0IiLCJmaWxlIjoiL1VzZXJzL2lyaWUtc2hpbm5vc3VrZS9Eb2N1bWVudHMvd29ya3Mvc2tldHQvc2tldHQvY29tcG9uZW50cy90ZW1wbGF0ZXMvaG9tZS9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBQQ19TQ0FMRSA9IDAuN1xuXG5jb25zdCBIb21lID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxJbm5lcj5cbiAgICAgICAgICAgICAgICA8TG9nbz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3N2Zy9sb2dvLnN2Z1wiIGFsdD1cIuOCueOCseODg+ODiFwiIC8+XG4gICAgICAgICAgICAgICAgPC9Mb2dvPlxuICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICDooqvngb3ogIXjga7jgYrlm7DjgorjgZTjgajjgpLliqnjgZHlkIjjgYZcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIOODnOODqeODs+ODhuOCo+OCouODu+ODnuODg+ODgeODs+OCsOOCteODvOODk+OCuVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Q29taW5nU29vbj7ov5Hml6Xlhazplos8L0NvbWluZ1Nvb24+XG4gICAgICAgICAgICAgICAgPEhhc2hUYWc+I+iiq+eBveiAheOCueOCseODg+ODiDwvSGFzaFRhZz5cbiAgICAgICAgICAgIDwvSW5uZXI+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGI0ZWQsICMwMDkxZGIpO1xuICAgIGNvbG9yOiAjZmZmO1xuYFxuXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZy10b3A6IDIwdmg7XG5gXG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA1MjVweDtcbiAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICB3aWR0aDogJHs1MjUgKiBQQ19TQ0FMRX1weDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHs1MCAqIFBDX1NDQUxFfXB4O1xuICAgIH1cbiAgICAmID4gaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuYFxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAgIHdpZHRoOiAxNmVtO1xuICAgIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsxMDAgKiBQQ19TQ0FMRX1weDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6ICR7MzQgKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG5cbmNvbnN0IENvbWluZ1Nvb24gPSBzdHlsZWQucGBcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkezEwMCAqIFBDX1NDQUxFfXB4O1xuICAgICAgICBmb250LXNpemU6ICR7NDggKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG5cbmNvbnN0IEhhc2hUYWcgPSBzdHlsZWQucGBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICBmb250LXNpemU6ICR7NDggKiBQQ19TQ0FMRX1weDtcbiAgICB9XG5gXG4iXX0= */"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/templates/home */ "./components/templates/home/index.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const PageHome = () => {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_templates_home__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PageHome);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/irie-shinnosuke/Documents/works/skett/skett/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@emotion/styled-base":
/*!***************************************!*\
  !*** external "@emotion/styled-base" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled-base");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map