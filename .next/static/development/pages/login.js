(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/login.js"],{

/***/ "./assets/utils/firebase.ts":
/*!**********************************!*\
  !*** ./assets/utils/firebase.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/analytics */ "./node_modules/firebase/analytics/dist/index.esm.js");



var firebaseConfig = {
  apiKey: 'AIzaSyBr0FCyYPvxlzYpIE-hdGyqd6eo2firVFU',
  authDomain: 'skett-ffff1.firebaseapp.com',
  databaseURL: 'https://skett-ffff1.firebaseio.com',
  projectId: 'skett-ffff1',
  storageBucket: 'skett-ffff1.appspot.com',
  messagingSenderId: '1010617732801',
  appId: '1:1010617732801:web:b9095e9dcbf7ff922b0e40',
  measurementId: 'G-LBFMB8G803'
};
/* harmony default export */ __webpack_exports__["default"] = (!firebase_app__WEBPACK_IMPORTED_MODULE_0__["apps"].length ? firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](firebaseConfig) : firebase_app__WEBPACK_IMPORTED_MODULE_0__["app"]());

/***/ }),

/***/ "./components/templates/layouts/Main.tsx":
/*!***********************************************!*\
  !*** ./components/templates/layouts/Main.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_utils_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/utils/firebase */ "./assets/utils/firebase.ts");
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/analytics */ "./node_modules/firebase/analytics/dist/index.esm.js");
var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/components/templates/layouts/Main.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





var Main = function Main(props) {
  var children = props.children;
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    _assets_utils_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].analytics();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Skett")), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/from.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/is-iterable.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/set.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");

var _isIterable = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/set.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/set.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.set.js");
__webpack_require__(/*! ../modules/es7.set.to-json */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.to-json.js");
__webpack_require__(/*! ../modules/es7.set.of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.of.js");
__webpack_require__(/*! ../modules/es7.set.from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Set;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.10' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.set.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.set.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.from.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.from.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.of.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.of.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.to-json.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.to-json.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/@firebase/analytics/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/analytics/dist/index.esm.js ***!
  \************************************************************/
/*! exports provided: factory, registerAnalytics, resetGlobalVars, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return factory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAnalytics", function() { return registerAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetGlobalVars", function() { return resetGlobalVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/installations */ "./node_modules/@firebase/installations/dist/index.esm.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_firebase_util__WEBPACK_IMPORTED_MODULE_3__);





/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ANALYTICS_ID_FIELD = 'measurementId';
// Key to attach FID to in gtag params.
var GA_FID_KEY = 'firebase_id';
var ORIGIN_KEY = 'origin';
var GtagCommand;
(function (GtagCommand) {
    GtagCommand["EVENT"] = "event";
    GtagCommand["SET"] = "set";
    GtagCommand["CONFIG"] = "config";
})(GtagCommand || (GtagCommand = {}));
/*
 * Officially recommended event names for gtag.js
 * Any other string is also allowed.
 */
var EventName;
(function (EventName) {
    EventName["ADD_PAYMENT_INFO"] = "add_payment_info";
    EventName["ADD_TO_CART"] = "add_to_cart";
    EventName["ADD_TO_WISHLIST"] = "add_to_wishlist";
    EventName["BEGIN_CHECKOUT"] = "begin_checkout";
    EventName["CHECKOUT_PROGRESS"] = "checkout_progress";
    EventName["EXCEPTION"] = "exception";
    EventName["GENERATE_LEAD"] = "generate_lead";
    EventName["LOGIN"] = "login";
    EventName["PAGE_VIEW"] = "page_view";
    EventName["PURCHASE"] = "purchase";
    EventName["REFUND"] = "refund";
    EventName["REMOVE_FROM_CART"] = "remove_from_cart";
    EventName["SCREEN_VIEW"] = "screen_view";
    EventName["SEARCH"] = "search";
    EventName["SELECT_CONTENT"] = "select_content";
    EventName["SET_CHECKOUT_OPTION"] = "set_checkout_option";
    EventName["SHARE"] = "share";
    EventName["SIGN_UP"] = "sign_up";
    EventName["TIMING_COMPLETE"] = "timing_complete";
    EventName["VIEW_ITEM"] = "view_item";
    EventName["VIEW_ITEM_LIST"] = "view_item_list";
    EventName["VIEW_PROMOTION"] = "view_promotion";
    EventName["VIEW_SEARCH_RESULTS"] = "view_search_results";
})(EventName || (EventName = {}));

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Logs an analytics event through the Firebase SDK.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param eventName Google Analytics event name, choose from standard list or use a custom string.
 * @param eventParams Analytics event parameters.
 */
function logEvent(gtagFunction, analyticsId, eventName, eventParams, options) {
    var params = eventParams || {};
    if (!options || !options.global) {
        params = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, eventParams), { 'send_to': analyticsId });
    }
    // Workaround for http://b/141370449 - third argument cannot be undefined.
    gtagFunction(GtagCommand.EVENT, eventName, params || {});
}
// TODO: Brad is going to add `screen_name` to GA Gold config parameter schema
/**
 * Set screen_name parameter for this Google Analytics ID.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param screenName Screen name string to set.
 */
function setCurrentScreen(gtagFunction, analyticsId, screenName, options) {
    if (options && options.global) {
        gtagFunction(GtagCommand.SET, { 'screen_name': screenName });
    }
    else {
        gtagFunction(GtagCommand.CONFIG, analyticsId, {
            update: true,
            'screen_name': screenName
        });
    }
}
/**
 * Set user_id parameter for this Google Analytics ID.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param id User ID string to set
 */
function setUserId(gtagFunction, analyticsId, id, options) {
    if (options && options.global) {
        gtagFunction(GtagCommand.SET, { 'user_id': id });
    }
    else {
        gtagFunction(GtagCommand.CONFIG, analyticsId, {
            update: true,
            'user_id': id
        });
    }
}
/**
 * Set all other user properties other than user_id and screen_name.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param properties Map of user properties to set
 */
function setUserProperties(gtagFunction, analyticsId, properties, options) {
    if (options && options.global) {
        var flatProperties = {};
        for (var _i = 0, _a = Object.keys(properties); _i < _a.length; _i++) {
            var key = _a[_i];
            // use dot notation for merge behavior in gtag.js
            flatProperties["user_properties." + key] = properties[key];
        }
        gtagFunction(GtagCommand.SET, flatProperties);
    }
    else {
        gtagFunction(GtagCommand.CONFIG, analyticsId, {
            update: true,
            'user_properties': properties
        });
    }
}
/**
 * Set whether collection is enabled for this ID.
 *
 * @param enabled If true, collection is enabled for this ID.
 */
function setAnalyticsCollectionEnabled(analyticsId, enabled) {
    window["ga-disable-" + analyticsId] = !enabled;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Initialize the analytics instance in gtag.js by calling config command with fid.
 *
 * NOTE: We combine analytics initialization and setting fid together because we want fid to be
 * part of the `page_view` event that's sent during the initialization
 * @param app Firebase app
 * @param gtagCore The gtag function that's not wrapped.
 */
function initializeGAId(app, gtagCore) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var fid;
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, app.installations().getId()];
                case 1:
                    fid = _b.sent();
                    // This command initializes gtag.js and only needs to be called once for the entire web app,
                    // but since it is idempotent, we can call it multiple times.
                    // We keep it together with other initialization logic for better code structure.
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    gtagCore('js', new Date());
                    // It should be the first config command called on this GA-ID
                    // Initialize this GA-ID and set FID on it using the gtag config API.
                    gtagCore(GtagCommand.CONFIG, app.options[ANALYTICS_ID_FIELD], (_a = {},
                        _a[GA_FID_KEY] = fid,
                        // guard against developers accidentally setting properties with prefix `firebase_`
                        _a[ORIGIN_KEY] = 'firebase',
                        _a.update = true,
                        _a));
                    return [2 /*return*/];
            }
        });
    });
}
function hasDataLayer(dataLayerName) {
    return Array.isArray(window[dataLayerName]);
}
function insertScriptTag(dataLayerName) {
    var script = document.createElement('script');
    // We are not providing an analyticsId in the URL because it would trigger a `page_view`
    // without fid. We will initialize ga-id using gtag (config) command together with fid.
    script.src = "https://www.googletagmanager.com/gtag/js?l=" + dataLayerName;
    script.async = true;
    document.head.appendChild(script);
}
/** Get reference to, or create, global datalayer.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer")
 */
function getOrCreateDataLayer(dataLayerName) {
    // Check for existing dataLayer and create if needed.
    var dataLayer = [];
    if (hasDataLayer(dataLayerName)) {
        dataLayer = window[dataLayerName];
    }
    else {
        dataLayer = window[dataLayerName] = [];
    }
    return dataLayer;
}
/**
 * Wraps a standard gtag function with extra code to wait for completion of
 * relevant initialization promises before sending requests.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer
 * @param initializedIdPromisesMap Map of gaIds to their initialization promises
 */
function wrapGtag(gtagCore, initializedIdPromisesMap) {
    return function (command, idOrNameOrParams, gtagParams) {
        // If event, check that relevant initialization promises have completed.
        if (command === GtagCommand.EVENT) {
            var initializationPromisesToWaitFor = [];
            // If there's a 'send_to' param, check if any ID specified matches
            // a FID we have begun a fetch on.
            if (gtagParams && gtagParams['send_to']) {
                var gaSendToList = gtagParams['send_to'];
                // Make it an array if is isn't, so it can be dealt with the same way.
                if (!Array.isArray(gaSendToList)) {
                    gaSendToList = [gaSendToList];
                }
                for (var _i = 0, gaSendToList_1 = gaSendToList; _i < gaSendToList_1.length; _i++) {
                    var sendToId = gaSendToList_1[_i];
                    var initializationPromise = initializedIdPromisesMap[sendToId];
                    // Groups will not be in the map.
                    if (initializationPromise) {
                        initializationPromisesToWaitFor.push(initializationPromise);
                    }
                    else {
                        // There is an item in 'send_to' that is not associated
                        // directly with an FID, possibly a group.  Empty this array
                        // and let it get populated below.
                        initializationPromisesToWaitFor = [];
                        break;
                    }
                }
            }
            // This will be unpopulated if there was no 'send_to' field , or
            // if not all entries in the 'send_to' field could be mapped to
            // a FID. In these cases, wait on all pending initialization promises.
            if (initializationPromisesToWaitFor.length === 0) {
                for (var _a = 0, _b = Object.values(initializedIdPromisesMap); _a < _b.length; _a++) {
                    var idPromise = _b[_a];
                    initializationPromisesToWaitFor.push(idPromise);
                }
            }
            // Run core gtag function with args after all relevant initialization
            // promises have been resolved.
            Promise.all(initializationPromisesToWaitFor)
                // Workaround for http://b/141370449 - third argument cannot be undefined.
                .then(function () {
                return gtagCore(GtagCommand.EVENT, idOrNameOrParams, gtagParams || {});
            })
                .catch(function (e) { return console.error(e); });
        }
        else if (command === GtagCommand.CONFIG) {
            var initializationPromiseToWait = initializedIdPromisesMap[idOrNameOrParams] ||
                Promise.resolve();
            initializationPromiseToWait
                .then(function () {
                gtagCore(GtagCommand.CONFIG, idOrNameOrParams, gtagParams);
            })
                .catch(function (e) { return console.error(e); });
        }
        else {
            // SET command.
            // Splitting calls for CONFIG and SET to make it clear which signature
            // Typescript is checking.
            gtagCore(GtagCommand.SET, idOrNameOrParams);
        }
    };
}
/**
 * Creates global gtag function or wraps existing one if found.
 * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
 * 'event' calls that belong to the GAID associated with this Firebase instance.
 *
 * @param initializedIdPromisesMap Map of gaId to initialization promises.
 * @param dataLayerName Name of global GA datalayer array.
 * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified)
 */
function wrapOrCreateGtag(initializedIdPromisesMap, dataLayerName, gtagFunctionName) {
    // Create a basic core gtag function
    var gtagCore = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Must push IArguments object, not an array.
        window[dataLayerName].push(arguments);
    };
    // Replace it with existing one if found
    if (window[gtagFunctionName] &&
        typeof window[gtagFunctionName] === 'function') {
        // @ts-ignore
        gtagCore = window[gtagFunctionName];
    }
    window[gtagFunctionName] = wrapGtag(gtagCore, initializedIdPromisesMap);
    return {
        gtagCore: gtagCore,
        wrappedGtag: window[gtagFunctionName]
    };
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-ga-id" /* NO_GA_ID */] = "\"" + ANALYTICS_ID_FIELD + "\" field is empty in " +
        'Firebase config. Firebase Analytics ' +
        'requires this field to contain a valid measurement ID.',
    _a["already-exists" /* ALREADY_EXISTS */] = 'A Firebase Analytics instance with the measurement ID ${id} ' +
        ' already exists. ' +
        'Only one Firebase Analytics instance can be created for each measurement ID.',
    _a["already-initialized" /* ALREADY_INITIALIZED */] = 'Firebase Analytics has already been initialized.' +
        'settings() must be called before initializing any Analytics instance' +
        'or it will have no effect.',
    _a);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__["ErrorFactory"]('analytics', 'Analytics', ERRORS);

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Maps gaId to FID fetch promises.
 */
var initializedIdPromisesMap = {};
/**
 * Name for window global data layer array used by GA: defaults to 'dataLayer'.
 */
var dataLayerName = 'dataLayer';
/**
 * Name for window global gtag function used by GA: defaults to 'gtag'.
 */
var gtagName = 'gtag';
/**
 * Reproduction of standard gtag function or reference to existing
 * gtag function on window object.
 */
var gtagCoreFunction;
/**
 * Wrapper around gtag function that ensures FID is sent with all
 * relevant event and config calls.
 */
var wrappedGtagFunction;
/**
 * Flag to ensure page initialization steps (creation or wrapping of
 * dataLayer and gtag script) are only run once per page load.
 */
var globalInitDone = false;
/**
 * For testing
 */
function resetGlobalVars(newGlobalInitDone, newGaInitializedPromise) {
    if (newGlobalInitDone === void 0) { newGlobalInitDone = false; }
    if (newGaInitializedPromise === void 0) { newGaInitializedPromise = {}; }
    globalInitDone = newGlobalInitDone;
    initializedIdPromisesMap = newGaInitializedPromise;
    dataLayerName = 'dataLayer';
    gtagName = 'gtag';
}
/**
 * This must be run before calling firebase.analytics() or it won't
 * have any effect.
 * @param options Custom gtag and dataLayer names.
 */
function settings(options) {
    if (globalInitDone) {
        throw ERROR_FACTORY.create("already-initialized" /* ALREADY_INITIALIZED */);
    }
    if (options.dataLayerName) {
        dataLayerName = options.dataLayerName;
    }
    if (options.gtagName) {
        gtagName = options.gtagName;
    }
}
function factory(app, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
extendApp) {
    var analyticsId = app.options[ANALYTICS_ID_FIELD];
    if (!analyticsId) {
        throw ERROR_FACTORY.create("no-ga-id" /* NO_GA_ID */);
    }
    if (initializedIdPromisesMap[analyticsId] != null) {
        throw ERROR_FACTORY.create("already-exists" /* ALREADY_EXISTS */, {
            id: analyticsId
        });
    }
    if (!globalInitDone) {
        // Steps here should only be done once per page: creation or wrapping
        // of dataLayer and global gtag function.
        // Presence of previously existing dataLayer used to detect if user has
        // already put the gtag snippet on this page.
        if (!hasDataLayer(dataLayerName)) {
            insertScriptTag(dataLayerName);
        }
        getOrCreateDataLayer(dataLayerName);
        var _a = wrapOrCreateGtag(initializedIdPromisesMap, dataLayerName, gtagName), wrappedGtag = _a.wrappedGtag, gtagCore = _a.gtagCore;
        wrappedGtagFunction = wrappedGtag;
        gtagCoreFunction = gtagCore;
        globalInitDone = true;
    }
    // Async but non-blocking.
    initializedIdPromisesMap[analyticsId] = initializeGAId(app, gtagCoreFunction);
    var analyticsInstance = {
        app: app,
        logEvent: function (eventName, eventParams, options) {
            return logEvent(wrappedGtagFunction, analyticsId, eventName, eventParams, options);
        },
        setCurrentScreen: function (screenName, options) {
            return setCurrentScreen(wrappedGtagFunction, analyticsId, screenName, options);
        },
        setUserId: function (id, options) {
            return setUserId(wrappedGtagFunction, analyticsId, id, options);
        },
        setUserProperties: function (properties, options) {
            return setUserProperties(wrappedGtagFunction, analyticsId, properties, options);
        },
        setAnalyticsCollectionEnabled: function (enabled) {
            return setAnalyticsCollectionEnabled(analyticsId, enabled);
        }
    };
    extendApp({
        INTERNAL: {
            analytics: {
                logEvent: analyticsInstance.logEvent
            }
        }
    });
    return analyticsInstance;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Analytics.
 */
var ANALYTICS_TYPE = 'analytics';
function registerAnalytics(instance) {
    instance.INTERNAL.registerService(ANALYTICS_TYPE, factory, {
        settings: settings,
        EventName: EventName
    }, 
    // We don't need to wait on any AppHooks.
    undefined, 
    // Allow multiple analytics instances per app.
    false);
}
registerAnalytics(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/app/dist/index.cjs.js":
/*!******************************************************!*\
  !*** ./node_modules/@firebase/app/dist/index.cjs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var util = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");
var logger$1 = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js");

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    _a["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists",
    _a["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a);
var ERROR_FACTORY = new util.ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        var _this = this;
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.services_ = {};
        // An array to capture listeners before the true auth functions exist
        this.tokenListeners_ = [];
        // An array to capture requests to send events before analytics component loads. Use type any to make using function.apply easier
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.analyticsEventRequests_ = [];
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
        this.options_ = util.deepCopy(options);
        var self = this;
        this.INTERNAL = {
            getUid: function () { return null; },
            getToken: function () { return Promise.resolve(null); },
            addAuthTokenListener: function (callback) {
                _this.tokenListeners_.push(callback);
                // Make sure callback is called, asynchronously, in the absence of the auth module
                setTimeout(function () { return callback(null); }, 0);
            },
            removeAuthTokenListener: function (callback) {
                _this.tokenListeners_ = _this.tokenListeners_.filter(function (listener) { return listener !== callback; });
            },
            analytics: {
                logEvent: function () {
                    self.analyticsEventRequests_.push(arguments);
                }
            }
        };
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function (val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            var services = [];
            for (var _i = 0, _a = Object.keys(_this.services_); _i < _a.length; _i++) {
                var serviceKey = _a[_i];
                for (var _b = 0, _c = Object.keys(_this.services_[serviceKey]); _b < _c.length; _b++) {
                    var instanceKey = _c[_b];
                    services.push(_this.services_[serviceKey][instanceKey]);
                }
            }
            return Promise.all(services
                .filter(function (service) { return 'INTERNAL' in service; })
                .map(function (service) { return service.INTERNAL.delete(); }));
        })
            .then(function () {
            _this.isDeleted_ = true;
            _this.services_ = {};
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        this.checkDestroyed_();
        if (!this.services_[name]) {
            this.services_[name] = {};
        }
        if (!this.services_[name][instanceIdentifier]) {
            /**
             * If a custom instance has been defined (i.e. not '[DEFAULT]')
             * then we will pass that instance on, otherwise we pass `null`
             */
            var instanceSpecifier = instanceIdentifier !== DEFAULT_ENTRY_NAME
                ? instanceIdentifier
                : undefined;
            var service = this.firebase_.INTERNAL.factories[name](this, this.extendApp.bind(this), instanceSpecifier);
            this.services_[name][instanceIdentifier] = service;
        }
        return this.services_[name][instanceIdentifier];
    };
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get this service again.
     *
     * NOTE: currently only firestore is using this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */
    FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        if (this.services_[name] && this.services_[name][instanceIdentifier]) {
            delete this.services_[name][instanceIdentifier];
        }
    };
    /**
     * Callback function used to extend an App instance at the time
     * of service instance creation.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    FirebaseAppImpl.prototype.extendApp = function (props) {
        // Copy the object onto the FirebaseAppImpl prototype
        util.deepExtend(this, props);
        if (props.INTERNAL) {
            /**
             * If the app has overwritten the addAuthTokenListener stub, forward
             * the active token listeners on to the true fxn.
             *
             * TODO: This function is required due to our current module
             * structure. Once we are able to rely strictly upon a single module
             * implementation, this code should be refactored and Auth should
             * provide these stubs and the upgrade logic
             */
            if (props.INTERNAL.addAuthTokenListener) {
                for (var _i = 0, _a = this.tokenListeners_; _i < _a.length; _i++) {
                    var listener = _a[_i];
                    this.INTERNAL.addAuthTokenListener(listener);
                }
                this.tokenListeners_ = [];
            }
            if (props.INTERNAL.analytics) {
                for (var _b = 0, _c = this.analyticsEventRequests_; _b < _c.length; _b++) {
                    var request = _c[_b];
                    // logEvent is the actual implementation at this point.
                    // We forward the queued events to it.
                    this.INTERNAL.analytics.logEvent.apply(undefined, request);
                }
                this.analyticsEventRequests_ = [];
            }
        }
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');

var version = "7.3.0";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new logger$1.Logger('@firebase/app');

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {};
    var factories = {};
    var appHooks = {};
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version,
        INTERNAL: {
            registerService: registerService,
            removeApp: removeApp,
            factories: factories,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        var app = apps[name];
        callAppHooks(app, 'delete');
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!util.contains(apps, name)) {
            throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
        }
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
                appName: String(name)
            });
        }
        if (util.contains(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        callAppHooks(app, 'create');
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) { return apps[name]; });
    }
    /*
     * Register a Firebase Service.
     *
     * firebase.INTERNAL.registerService()
     *
     * TODO: Implement serviceProperties.
     */
    function registerService(name, createService, serviceProperties, appHook, allowMultipleInstances) {
        if (allowMultipleInstances === void 0) { allowMultipleInstances = false; }
        // If re-registering a service that already exists, return existing service
        if (factories[name]) {
            logger.debug("There were multiple attempts to register service " + name + ".");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return namespace[name];
        }
        // Capture the service factory for later service instantiation
        factories[name] = createService;
        // Capture the appHook, if passed
        if (appHook) {
            appHooks[name] = appHook;
            // Run the **new** app hook on all existing apps
            getApps().forEach(function (app) {
                appHook('create', app);
            });
        }
        // The Service namespace is an accessor function ...
        function serviceNamespace(appArg) {
            if (appArg === void 0) { appArg = app(); }
            // @ts-ignore
            if (typeof appArg[name] !== 'function') {
                // Invalid argument.
                // This happens in the following case: firebase.storage('gs:/')
                throw ERROR_FACTORY.create("invalid-app-argument" /* INVALID_APP_ARGUMENT */, {
                    appName: name
                });
            }
            // Forward service instance lookup to the FirebaseApp.
            // @ts-ignore
            return appArg[name]();
        }
        // ... and a container for service-level properties.
        if (serviceProperties !== undefined) {
            util.deepExtend(serviceNamespace, serviceProperties);
        }
        // Monkey-patch the serviceNamespace onto the firebase namespace
        // @ts-ignore
        namespace[name] = serviceNamespace;
        // Patch the FirebaseAppImpl prototype
        // @ts-ignore
        firebaseAppImpl.prototype[name] =
            // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
            // option added to the no-explicit-any rule when ESlint releases it.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var serviceFxn = this._getService.bind(this, name);
                return serviceFxn.apply(this, allowMultipleInstances ? args : []);
            };
        return serviceNamespace;
    }
    function callAppHooks(app, eventName) {
        for (var _i = 0, _a = Object.keys(factories); _i < _a.length; _i++) {
            var serviceName = _a[_i];
            // Ignore virtual services
            var factoryName = useAsService(app, serviceName);
            if (factoryName === null) {
                return;
            }
            if (appHooks[factoryName]) {
                appHooks[factoryName](eventName, app);
            }
        }
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = tslib.__assign(tslib.__assign({}, namespace.INTERNAL), { createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: util.createSubscribe,
        ErrorFactory: util.ErrorFactory,
        deepExtend: util.deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        util.deepExtend(namespace, props);
    }
    return namespace;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (util.isBrowser() && self.firebase !== undefined) {
    logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    // eslint-disable-next-line
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
}
var firebaseNamespace = createFirebaseNamespace();
var initializeApp = firebaseNamespace.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebaseNamespace.initializeApp = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Environment check before initializing app
    // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
    // in @firebase/logger
    if (util.isNode()) {
        logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ");
    }
    return initializeApp.apply(undefined, args);
};
var firebase = firebaseNamespace;

exports.default = firebase;
exports.firebase = firebase;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/auth/dist/auth.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@firebase/auth/dist/auth.esm.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
(function() {var k,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ca(a,b){if(b){var c=ba;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function da(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ea(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:da(a)}}
ca("Promise",function(a){function b(g){this.b=0;this.c=void 0;this.a=[];var h=this.f();try{g(h.resolve,h.reject)}catch(m){h.reject(m)}}function c(){this.a=null}function d(g){return g instanceof b?g:new b(function(h){h(g)})}if(a)return a;c.prototype.b=function(g){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g()})}this.a.push(g)};var e=ba.setTimeout;c.prototype.c=function(g){e(g,0)};c.prototype.g=function(){for(;this.a&&this.a.length;){var g=this.a;this.a=[];for(var h=0;h<g.length;++h){var m=
g[h];g[h]=null;try{m()}catch(p){this.f(p)}}}this.a=null};c.prototype.f=function(g){this.c(function(){throw g;})};b.prototype.f=function(){function g(p){return function(u){m||(m=!0,p.call(h,u))}}var h=this,m=!1;return{resolve:g(this.m),reject:g(this.g)}};b.prototype.m=function(g){if(g===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.o(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.u(g):this.h(g)}};
b.prototype.u=function(g){var h=void 0;try{h=g.then}catch(m){this.g(m);return}"function"==typeof h?this.v(h,g):this.h(g)};b.prototype.g=function(g){this.i(2,g)};b.prototype.h=function(g){this.i(1,g)};b.prototype.i=function(g,h){if(0!=this.b)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.b);this.b=g;this.c=h;this.l()};b.prototype.l=function(){if(null!=this.a){for(var g=0;g<this.a.length;++g)f.b(this.a[g]);this.a=null}};var f=new c;b.prototype.o=function(g){var h=this.f();
g.Ja(h.resolve,h.reject)};b.prototype.v=function(g,h){var m=this.f();try{g.call(h,m.resolve,m.reject)}catch(p){m.reject(p)}};b.prototype.then=function(g,h){function m(C,N){return"function"==typeof C?function(wa){try{p(C(wa))}catch(ld){u(ld)}}:N}var p,u,A=new b(function(C,N){p=C;u=N});this.Ja(m(g,p),m(h,u));return A};b.prototype.catch=function(g){return this.then(void 0,g)};b.prototype.Ja=function(g,h){function m(){switch(p.b){case 1:g(p.c);break;case 2:h(p.c);break;default:throw Error("Unexpected state: "+
p.b);}}var p=this;null==this.a?f.b(m):this.a.push(m)};b.resolve=d;b.reject=function(g){return new b(function(h,m){m(g)})};b.race=function(g){return new b(function(h,m){for(var p=ea(g),u=p.next();!u.done;u=p.next())d(u.value).Ja(h,m)})};b.all=function(g){var h=ea(g),m=h.next();return m.done?d([]):new b(function(p,u){function A(wa){return function(ld){C[wa]=ld;N--;0==N&&p(C)}}var C=[],N=0;do C.push(void 0),N++,d(m.value).Ja(A(C.length-1),u),m=h.next();while(!m.done)})};return b});
var fa=fa||{},l=this||self;function n(a){return"string"==typeof a}function ha(a){return"boolean"==typeof a}var ia=/^[\w+/_-]+[=]{0,2}$/,ja=null;function ka(){}
function la(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ma(a){return null===a}function na(a){return"array"==la(a)}function oa(a){var b=la(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"function"==la(a)}function r(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var pa="closure_uid_"+(1E9*Math.random()>>>0),qa=0;function ra(a,b,c){return a.call.apply(a.bind,arguments)}
function sa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=ra:t=sa;return t.apply(null,arguments)}
function ta(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}var ua=Date.now||function(){return+new Date};function v(a,b){function c(){}c.prototype=b.prototype;a.qb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fd=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}};function va(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function w(a){if(Error.captureStackTrace)Error.captureStackTrace(this,w);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}v(w,Error);w.prototype.name="CustomError";function xa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");w.call(this,c+a[d])}v(xa,w);xa.prototype.name="AssertionError";function ya(a,b){throw new xa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function za(a,b){this.c=a;this.f=b;this.b=0;this.a=null}za.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function Aa(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)};function Ba(){this.b=this.a=null}var Da=new za(function(){return new Ca},function(a){a.reset()});Ba.prototype.add=function(a,b){var c=Da.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};function Ea(){var a=Fa,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function Ca(){this.next=this.b=this.a=null}Ca.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};Ca.prototype.reset=function(){this.next=this.b=this.a=null};function Ga(a,b){a:{try{var c=a&&a.ownerDocument,d=c&&(c.defaultView||c.parentWindow);d=d||l;if(d.Element&&d.Location){var e=d;break a}}catch(g){}e=null}if(e&&"undefined"!=typeof e[b]&&(!a||!(a instanceof e[b])&&(a instanceof e.Location||a instanceof e.Element))){if(r(a))try{var f=a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a)}catch(g){f="<object could not be stringified>"}else f=void 0===a?"undefined":null===a?"null":typeof a;ya("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
b,f)}};var Ha=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(n(a))return n(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function Ia(a,b){for(var c=n(a)?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)}
var Ja=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=n(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},Ka=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};
function La(a){a:{var b=Ma;for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:n(a)?a.charAt(b):a[b]}function Na(a,b){return 0<=Ha(a,b)}function Oa(a,b){b=Ha(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}function Pa(a,b){var c=0;Ia(a,function(d,e){b.call(void 0,d,e,a)&&1==Array.prototype.splice.call(a,e,1).length&&c++})}function Qa(a){return Array.prototype.concat.apply([],arguments)}
function Ra(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function Sa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ta(a){for(var b in a)return!1;return!0}function Ua(a){var b={},c;for(c in a)b[c]=a[c];return b}var Va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Va.length;f++)c=Va[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Xa(a,b){this.a=a===Ya&&b||"";this.b=Za}Xa.prototype.qa=!0;Xa.prototype.pa=function(){return this.a};Xa.prototype.toString=function(){return"Const{"+this.a+"}"};function $a(a){if(a instanceof Xa&&a.constructor===Xa&&a.b===Za)return a.a;ya("expected object of type Const, got '"+a+"'");return"type_error:Const"}var Za={},Ya={},ab=new Xa(Ya,"");function bb(){this.a="";this.b=cb}bb.prototype.qa=!0;bb.prototype.pa=function(){return this.a.toString()};bb.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function db(a){if(a instanceof bb&&a.constructor===bb&&a.b===cb)return a.a;ya("expected object of type TrustedResourceUrl, got '"+a+"' of type "+la(a));return"type_error:TrustedResourceUrl"}
function eb(a,b){var c=$a(a);if(!fb.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(gb,function(d,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));d=b[e];return d instanceof Xa?$a(d):encodeURIComponent(String(d))});return hb(a)}var gb=/%{(\w+)}/g,fb=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,cb={};
function hb(a){var b=new bb;b.a=a;return b};var ib=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},jb=/&/g,kb=/</g,lb=/>/g,mb=/"/g,nb=/'/g,ob=/\x00/g,pb=/[\x00&<>"']/;function y(a,b){return-1!=a.indexOf(b)}function qb(a,b){return a<b?-1:a>b?1:0};function rb(){this.a="";this.b=sb}rb.prototype.qa=!0;rb.prototype.pa=function(){return this.a.toString()};rb.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function tb(a){if(a instanceof rb&&a.constructor===rb&&a.b===sb)return a.a;ya("expected object of type SafeUrl, got '"+a+"' of type "+la(a));return"type_error:SafeUrl"}var ub=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function vb(a){if(a instanceof rb)return a;a="object"==typeof a&&a.qa?a.pa():String(a);ub.test(a)||(a="about:invalid#zClosurez");return wb(a)}var sb={};function wb(a){var b=new rb;b.a=a;return b}wb("about:blank");var xb;a:{var yb=l.navigator;if(yb){var zb=yb.userAgent;if(zb){xb=zb;break a}}xb=""}function z(a){return y(xb,a)};function Ab(){this.a="";this.b=Bb}Ab.prototype.qa=!0;Ab.prototype.pa=function(){return this.a.toString()};Ab.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function Cb(a){if(a instanceof Ab&&a.constructor===Ab&&a.b===Bb)return a.a;ya("expected object of type SafeHtml, got '"+a+"' of type "+la(a));return"type_error:SafeHtml"}var Bb={};function Db(a){var b=new Ab;b.a=a;return b}Db("<!DOCTYPE html>");var Eb=Db("");Db("<br>");function Fb(a){var b=hb($a(ab));Ga(a,"HTMLIFrameElement");a.src=db(b).toString()}function Gb(a,b){Ga(a,"HTMLScriptElement");a.src=db(b);if(null===ja)b:{b=l.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&ia.test(b)){ja=b;break b}ja=""}b=ja;b&&a.setAttribute("nonce",b)};function Hb(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function Ib(a){pb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(jb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(kb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(lb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(mb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(nb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(ob,"&#0;")));return a};function Jb(a){l.setTimeout(function(){throw a;},0)}var Kb;
function Lb(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!z("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Fb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Cb(Eb));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=t(function(m){if(("*"==h||m.origin==h)&&m.data==
g)this.port1.onmessage()},this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!z("Trident")&&!z("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.yb;c.yb=null;e()}};return function(e){d.next={yb:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};document.documentElement.appendChild(f)}:function(e){l.setTimeout(e,0)}};function Mb(a,b){Nb||Ob();Pb||(Nb(),Pb=!0);Fa.add(a,b)}var Nb;function Ob(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);Nb=function(){a.then(Qb)}}else Nb=function(){var b=Qb;!q(l.setImmediate)||l.Window&&l.Window.prototype&&!z("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Kb||(Kb=Lb()),Kb(b)):l.setImmediate(b)}}var Pb=!1,Fa=new Ba;function Qb(){for(var a;a=Ea();){try{a.a.call(a.b)}catch(b){Jb(b)}Aa(Da,a)}Pb=!1};function B(a,b){this.a=Rb;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=ka)try{var c=this;a.call(b,function(d){Sb(c,Tb,d)},function(d){if(!(d instanceof Ub))try{if(d instanceof Error)throw d;throw Error("Promise rejected.");}catch(e){}Sb(c,Vb,d)})}catch(d){Sb(this,Vb,d)}}var Rb=0,Tb=2,Vb=3;function Wb(){this.next=this.f=this.b=this.g=this.a=null;this.c=!1}Wb.prototype.reset=function(){this.f=this.b=this.g=this.a=null;this.c=!1};var Xb=new za(function(){return new Wb},function(a){a.reset()});
function Yb(a,b,c){var d=Xb.get();d.g=a;d.b=b;d.f=c;return d}function D(a){if(a instanceof B)return a;var b=new B(ka);Sb(b,Tb,a);return b}function E(a){return new B(function(b,c){c(a)})}function Zb(a,b,c){$b(a,b,c,null)||Mb(ta(b,a))}function ac(a){return new B(function(b,c){var d=a.length,e=[];if(d)for(var f=function(p,u){d--;e[p]=u;0==d&&b(e)},g=function(p){c(p)},h=0,m;h<a.length;h++)m=a[h],Zb(m,ta(f,h),g);else b(e)})}
function bc(a){return new B(function(b){var c=a.length,d=[];if(c)for(var e=function(h,m,p){c--;d[h]=m?{Gb:!0,value:p}:{Gb:!1,reason:p};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Zb(g,ta(e,f,!0),ta(e,f,!1));else b(d)})}B.prototype.then=function(a,b,c){return cc(this,q(a)?a:null,q(b)?b:null,c)};B.prototype.$goog_Thenable=!0;k=B.prototype;k.ka=function(a,b){a=Yb(a,a,b);a.c=!0;dc(this,a);return this};k.s=function(a,b){return cc(this,null,a,b)};
k.cancel=function(a){this.a==Rb&&Mb(function(){var b=new Ub(a);ec(this,b)},this)};function ec(a,b){if(a.a==Rb)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.c||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==Rb&&1==d?ec(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):fc(c),gc(c,e,Vb,b)))}a.c=null}else Sb(a,Vb,b)}function dc(a,b){a.b||a.a!=Tb&&a.a!=Vb||hc(a);a.f?a.f.next=b:a.b=b;a.f=b}
function cc(a,b,c,d){var e=Yb(null,null,null);e.a=new B(function(f,g){e.g=b?function(h){try{var m=b.call(d,h);f(m)}catch(p){g(p)}}:f;e.b=c?function(h){try{var m=c.call(d,h);void 0===m&&h instanceof Ub?g(h):f(m)}catch(p){g(p)}}:g});e.a.c=a;dc(a,e);return e.a}k.Oc=function(a){this.a=Rb;Sb(this,Tb,a)};k.Pc=function(a){this.a=Rb;Sb(this,Vb,a)};
function Sb(a,b,c){a.a==Rb&&(a===c&&(b=Vb,c=new TypeError("Promise cannot resolve to itself")),a.a=1,$b(c,a.Oc,a.Pc,a)||(a.i=c,a.a=b,a.c=null,hc(a),b!=Vb||c instanceof Ub||ic(a,c)))}function $b(a,b,c,d){if(a instanceof B)return dc(a,Yb(b||ka,c||null,d)),!0;if(va(a))return a.then(b,c,d),!0;if(r(a))try{var e=a.then;if(q(e))return jc(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function jc(a,b,c,d,e){function f(m){h||(h=!0,d.call(e,m))}function g(m){h||(h=!0,c.call(e,m))}var h=!1;try{b.call(a,g,f)}catch(m){f(m)}}function hc(a){a.h||(a.h=!0,Mb(a.Zb,a))}function fc(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}k.Zb=function(){for(var a;a=fc(this);)gc(this,a,this.a,this.i);this.h=!1};
function gc(a,b,c,d){if(c==Vb&&b.b&&!b.c)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,kc(b,c,d);else try{b.c?b.g.call(b.f):kc(b,c,d)}catch(e){lc.call(null,e)}Aa(Xb,b)}function kc(a,b,c){b==Tb?a.g.call(a.f,c):a.b&&a.b.call(a.f,c)}function ic(a,b){a.g=!0;Mb(function(){a.g&&lc.call(null,b)})}var lc=Jb;function Ub(a){w.call(this,a)}v(Ub,w);Ub.prototype.name="cancel";function mc(){0!=nc&&(oc[this[pa]||(this[pa]=++qa)]=this);this.ta=this.ta;this.la=this.la}var nc=0,oc={};mc.prototype.ta=!1;function pc(a){if(!a.ta&&(a.ta=!0,a.xa(),0!=nc)){var b=a[pa]||(a[pa]=++qa);if(0!=nc&&a.la&&0<a.la.length)throw Error(a+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete oc[b]}}mc.prototype.xa=function(){if(this.la)for(;this.la.length;)this.la.shift()()};function qc(a){qc[" "](a);return a}qc[" "]=ka;function rc(a,b){var c=sc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var tc=z("Opera"),uc=z("Trident")||z("MSIE"),vc=z("Edge"),wc=vc||uc,xc=z("Gecko")&&!(y(xb.toLowerCase(),"webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),yc=y(xb.toLowerCase(),"webkit")&&!z("Edge");function zc(){var a=l.document;return a?a.documentMode:void 0}var Ac;
a:{var Bc="",Cc=function(){var a=xb;if(xc)return/rv:([^\);]+)(\)|;)/.exec(a);if(vc)return/Edge\/([\d\.]+)/.exec(a);if(uc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(yc)return/WebKit\/(\S+)/.exec(a);if(tc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Cc&&(Bc=Cc?Cc[1]:"");if(uc){var Dc=zc();if(null!=Dc&&Dc>parseFloat(Bc)){Ac=String(Dc);break a}}Ac=Bc}var sc={};
function Ec(a){return rc(a,function(){for(var b=0,c=ib(String(Ac)).split("."),d=ib(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=qb(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||qb(0==g[2].length,0==h[2].length)||qb(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}var Fc;
Fc=l.document&&uc?zc():void 0;var Gc=Object.freeze||function(a){return a};var Hc=!uc||9<=Number(Fc),Ic=uc&&!Ec("9"),Jc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{l.addEventListener("test",ka,b),l.removeEventListener("test",ka,b)}catch(c){}return a}();function F(a,b){this.type=a;this.b=this.target=b;this.Mb=!0}F.prototype.preventDefault=function(){this.Mb=!1};function Kc(a,b){F.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(xc){a:{try{qc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=n(a.pointerType)?a.pointerType:Lc[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.preventDefault()}}v(Kc,F);var Lc=Gc({2:"touch",3:"pen",4:"mouse"});Kc.prototype.preventDefault=function(){Kc.qb.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ic)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};Kc.prototype.f=function(){return this.a};var Mc="closure_listenable_"+(1E6*Math.random()|0),Nc=0;function Oc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Na=e;this.key=++Nc;this.ra=this.Ia=!1}function Pc(a){a.ra=!0;a.listener=null;a.proxy=null;a.src=null;a.Na=null};function Qc(a){this.src=a;this.a={};this.b=0}Qc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=Rc(a,b,d,e);-1<g?(b=a[g],c||(b.Ia=!1)):(b=new Oc(b,this.src,f,!!d,e),b.Ia=c,a.push(b));return b};function Sc(a,b){var c=b.type;c in a.a&&Oa(a.a[c],b)&&(Pc(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function Rc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ra&&f.listener==b&&f.capture==!!c&&f.Na==d)return e}return-1};var Tc="closure_lm_"+(1E6*Math.random()|0),Uc={},Vc=0;function Wc(a,b,c,d,e){if(d&&d.once)Xc(a,b,c,d,e);else if(na(b))for(var f=0;f<b.length;f++)Wc(a,b[f],c,d,e);else c=Yc(c),a&&a[Mc]?Zc(a,b,c,r(d)?!!d.capture:!!d,e):$c(a,b,c,!1,d,e)}
function $c(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=r(e)?!!e.capture:!!e,h=ad(a);h||(a[Tc]=h=new Qc(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=bd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Jc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(cd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Vc++}}
function bd(){var a=dd,b=Hc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function Xc(a,b,c,d,e){if(na(b))for(var f=0;f<b.length;f++)Xc(a,b[f],c,d,e);else c=Yc(c),a&&a[Mc]?ed(a,b,c,r(d)?!!d.capture:!!d,e):$c(a,b,c,!0,d,e)}
function fd(a,b,c,d,e){if(na(b))for(var f=0;f<b.length;f++)fd(a,b[f],c,d,e);else(d=r(d)?!!d.capture:!!d,c=Yc(c),a&&a[Mc])?(a=a.u,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Rc(f,c,d,e),-1<c&&(Pc(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=ad(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Rc(b,c,d,e)),(c=-1<a?b[a]:null)&&gd(c))}
function gd(a){if("number"!=typeof a&&a&&!a.ra){var b=a.src;if(b&&b[Mc])Sc(b.u,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(cd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Vc--;(c=ad(b))?(Sc(c,a),0==c.b&&(c.src=null,b[Tc]=null)):Pc(a)}}}function cd(a){return a in Uc?Uc[a]:Uc[a]="on"+a}
function hd(a,b,c,d){var e=!0;if(a=ad(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.ra&&(f=id(f,d),e=e&&!1!==f)}return e}function id(a,b){var c=a.listener,d=a.Na||a.src;a.Ia&&gd(a);return c.call(d,b)}
function dd(a,b){if(a.ra)return!0;if(!Hc){if(!b)a:{b=["window","event"];for(var c=l,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new Kc(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.b=d[e];var f=hd(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.b=d[e],f=hd(d[e],a,!1,b),c=c&&f}return c}return id(a,
new Kc(b,this))}function ad(a){a=a[Tc];return a instanceof Qc?a:null}var jd="__closure_events_fn_"+(1E9*Math.random()>>>0);function Yc(a){if(q(a))return a;a[jd]||(a[jd]=function(b){return a.handleEvent(b)});return a[jd]};function G(){mc.call(this);this.u=new Qc(this);this.Sb=this;this.Wa=null}v(G,mc);G.prototype[Mc]=!0;G.prototype.addEventListener=function(a,b,c,d){Wc(this,a,b,c,d)};G.prototype.removeEventListener=function(a,b,c,d){fd(this,a,b,c,d)};
G.prototype.dispatchEvent=function(a){var b,c=this.Wa;if(c)for(b=[];c;c=c.Wa)b.push(c);c=this.Sb;var d=a.type||a;if(n(a))a=new F(a,c);else if(a instanceof F)a.target=a.target||c;else{var e=a;a=new F(d,c);Wa(a,e)}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var g=a.b=b[f];e=kd(g,d,!0,a)&&e}g=a.b=c;e=kd(g,d,!0,a)&&e;e=kd(g,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)g=a.b=b[f],e=kd(g,d,!1,a)&&e;return e};
G.prototype.xa=function(){G.qb.xa.call(this);if(this.u){var a=this.u,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,Pc(d[e]);delete a.a[c];a.b--}}this.Wa=null};function Zc(a,b,c,d,e){a.u.add(String(b),c,!1,d,e)}function ed(a,b,c,d,e){a.u.add(String(b),c,!0,d,e)}
function kd(a,b,c,d){b=a.u.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ra&&g.capture==c){var h=g.listener,m=g.Na||g.src;g.Ia&&Sc(a.u,g);e=!1!==h.call(m,d)&&e}}return e&&0!=d.Mb};function md(a,b,c){if(q(a))c&&(a=t(a,c));else if(a&&"function"==typeof a.handleEvent)a=t(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)}function nd(a){var b=null;return(new B(function(c,d){b=md(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).s(function(c){l.clearTimeout(b);throw c;})};function od(a){if(a.U&&"function"==typeof a.U)return a.U();if(n(a))return a.split("");if(oa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}function pd(a){if(a.X&&"function"==typeof a.X)return a.X();if(!a.U||"function"!=typeof a.U){if(oa(a)||n(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}
function qd(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(oa(a)||n(a))x(a,b,void 0);else for(var c=pd(a),d=od(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};function rd(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof rd)for(c=a.X(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}k=rd.prototype;k.U=function(){sd(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};k.X=function(){sd(this);return this.a.concat()};
k.clear=function(){this.b={};this.c=this.a.length=0};function sd(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];td(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],td(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}k.get=function(a,b){return td(this.b,a)?this.b[a]:b};k.set=function(a,b){td(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};
k.forEach=function(a,b){for(var c=this.X(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};function td(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var ud=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function vd(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};function wd(a,b){this.b=this.i=this.f="";this.l=null;this.g=this.c="";this.h=!1;var c;a instanceof wd?(this.h=void 0!==b?b:a.h,xd(this,a.f),this.i=a.i,this.b=a.b,yd(this,a.l),this.c=a.c,zd(this,Ad(a.a)),this.g=a.g):a&&(c=String(a).match(ud))?(this.h=!!b,xd(this,c[1]||"",!0),this.i=Bd(c[2]||""),this.b=Bd(c[3]||"",!0),yd(this,c[4]),this.c=Bd(c[5]||"",!0),zd(this,c[6]||"",!0),this.g=Bd(c[7]||"")):(this.h=!!b,this.a=new Cd(null,this.h))}
wd.prototype.toString=function(){var a=[],b=this.f;b&&a.push(Dd(b,Ed,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.i)&&a.push(Dd(b,Ed,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.l,null!=c&&a.push(":",String(c));if(c=this.c)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(Dd(c,"/"==c.charAt(0)?Fd:Gd,!0));(c=this.a.toString())&&a.push("?",c);(c=this.g)&&a.push("#",Dd(c,Hd));return a.join("")};
wd.prototype.resolve=function(a){var b=new wd(this),c=!!a.f;c?xd(b,a.f):c=!!a.i;c?b.i=a.i:c=!!a.b;c?b.b=a.b:c=null!=a.l;var d=a.c;if(c)yd(b,a.l);else if(c=!!a.c){if("/"!=d.charAt(0))if(this.b&&!this.c)d="/"+d;else{var e=b.c.lastIndexOf("/");-1!=e&&(d=b.c.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(y(e,"./")||y(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==h?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),
d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.c=d:c=""!==a.a.toString();c?zd(b,Ad(a.a)):c=!!a.g;c&&(b.g=a.g);return b};function xd(a,b,c){a.f=c?Bd(b,!0):b;a.f&&(a.f=a.f.replace(/:$/,""))}function yd(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.l=b}else a.l=null}function zd(a,b,c){b instanceof Cd?(a.a=b,Id(a.a,a.h)):(c||(b=Dd(b,Jd)),a.a=new Cd(b,a.h))}function H(a,b,c){a.a.set(b,c)}function Kd(a,b){return a.a.get(b)}
function Ld(a){return a instanceof wd?new wd(a):new wd(a,void 0)}function Md(a,b){var c=new wd(null,void 0);xd(c,"https");a&&(c.b=a);b&&(c.c=b);return c}function Bd(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Dd(a,b,c){return n(a)?(a=encodeURI(a).replace(b,Nd),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Nd(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Ed=/[#\/\?@]/g,Gd=/[#\?:]/g,Fd=/[#\?]/g,Jd=/[#\?@]/g,Hd=/#/g;function Cd(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b}function Od(a){a.a||(a.a=new rd,a.b=0,a.c&&vd(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function Pd(a){var b=pd(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Cd(null,void 0);a=od(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];na(f)?Qd(c,e,f):c.add(e,f)}return c}k=Cd.prototype;
k.add=function(a,b){Od(this);this.c=null;a=Rd(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};function Sd(a,b){Od(a);b=Rd(a,b);td(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,td(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&sd(a)))}k.clear=function(){this.a=this.c=null;this.b=0};function Td(a,b){Od(a);b=Rd(a,b);return td(a.a.b,b)}k.forEach=function(a,b){Od(this);this.a.forEach(function(c,d){x(c,function(e){a.call(b,e,d,this)},this)},this)};
k.X=function(){Od(this);for(var a=this.a.U(),b=this.a.X(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};k.U=function(a){Od(this);var b=[];if(n(a))Td(this,a)&&(b=Qa(b,this.a.get(Rd(this,a))));else{a=this.a.U();for(var c=0;c<a.length;c++)b=Qa(b,a[c])}return b};k.set=function(a,b){Od(this);this.c=null;a=Rd(this,a);Td(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};
k.get=function(a,b){if(!a)return b;a=this.U(a);return 0<a.length?String(a[0]):b};function Qd(a,b,c){Sd(a,b);0<c.length&&(a.c=null,a.a.set(Rd(a,b),Ra(c)),a.b+=c.length)}k.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.X(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.U(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.c=a.join("&")};
function Ad(a){var b=new Cd;b.c=a.c;a.a&&(b.a=new rd(a.a),b.b=a.b);return b}function Rd(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function Id(a,b){b&&!a.f&&(Od(a),a.c=null,a.a.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(Sd(this,d),Qd(this,e,c))},a));a.f=b};var Ud=!uc||9<=Number(Fc);function Vd(a){var b=document;return n(a)?b.getElementById(a):a}function Wd(a,b){Sa(b,function(c,d){c&&"object"==typeof c&&c.qa&&(c=c.pa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Xd.hasOwnProperty(d)?a.setAttribute(Xd[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Xd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Yd(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Ud&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ib(g.name),'"');if(g.type){f.push(' type="',Ib(g.type),'"');var h={};Wa(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(n(g)?f.className=g:na(g)?f.className=g.join(" "):Wd(f,g));2<d.length&&Zd(e,f,d);return f}
function Zd(a,b,c){function d(g){g&&b.appendChild(n(g)?a.createTextNode(g):g)}for(var e=2;e<c.length;e++){var f=c[e];!oa(f)||r(f)&&0<f.nodeType?d(f):x($d(f)?Ra(f):f,d)}}function $d(a){if(a&&"number"==typeof a.length){if(r(a))return"function"==typeof a.item||"string"==typeof a.item;if(q(a))return"function"==typeof a.item}return!1};function ae(a){var b=[];be(new ce,a,b);return b.join("")}function ce(){}
function be(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(na(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),be(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),de(d,c),c.push(":"),be(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":de(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var ee={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},fe=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;
function de(a,b){b.push('"',a.replace(fe,function(c){var d=ee[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),ee[c]=d);return d}),'"')};/*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function ge(){var a=I();return uc&&!!Fc&&11==Fc||/Edge\/\d+/.test(a)}function he(){return l.window&&l.window.location.href||self&&self.location&&self.location.href||""}function ie(a,b){b=b||l.window;var c="about:blank";a&&(c=tb(vb(a)).toString());b.location.href=c}function je(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<je(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c}
function ke(){var a=I();a=le(a)!=me?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!uc||!Fc||9<Fc}function ne(a){a=(a||I()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1}function oe(a){a=a||l.window;try{a.close()}catch(b){}}
function pe(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=I().toLowerCase();d&&(b.target=d,y(c,"crios/")&&(b.target="_blank"));le(I())==qe&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(a=b)||(a={});d=window;b=c instanceof rb?c:vb("undefined"!=typeof c.href?c.href:String(c));c=a.target||c.target;e=[];
for(g in a)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+a[g]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(g+"="+(a[g]?1:0))}var g=e.join(",");(z("iPhone")&&!z("iPod")&&!z("iPad")||z("iPad")||z("iPod"))&&d.navigator&&d.navigator.standalone&&c&&"_self"!=c?(g=d.document.createElement("A"),Ga(g,"HTMLAnchorElement"),b instanceof rb||b instanceof rb||(b="object"==typeof b&&b.qa?b.pa():String(b),ub.test(b)||(b="about:invalid#zClosurez"),b=wb(b)),
g.href=tb(b),g.setAttribute("target",c),a.noreferrer&&g.setAttribute("rel","noreferrer"),a=document.createEvent("MouseEvent"),a.initMouseEvent("click",!0,!0,d,1),g.dispatchEvent(a),g={}):a.noreferrer?(g=d.open("",c,g),a=tb(b).toString(),g&&(wc&&y(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'"),g.opener=null,a=Db('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Ib(a)+'">'),g.document.write(Cb(a)),g.document.close())):(g=d.open(tb(b).toString(),c,g))&&a.noopener&&
(g.opener=null);if(g)try{g.focus()}catch(h){}return g}function re(a){return new B(function(b){function c(){nd(2E3).then(function(){if(!a||a.closed)b();else return c()})}return c()})}var se=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,te=/^[^@]+@[^@]+$/;function ue(){var a=null;return(new B(function(b){"complete"==l.document.readyState?b():(a=function(){b()},Xc(window,"load",a))})).s(function(b){fd(window,"load",a);throw b;})}
function ve(){return we(void 0)?ue().then(function(){return new B(function(a,b){var c=l.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):E(Error("Cordova must run in an Android or iOS file scheme."))}function we(a){a=a||I();return!("file:"!==xe()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))}function ye(){var a=l.window;try{return!(!a||a==a.top)}catch(b){return!1}}
function ze(){return"undefined"!==typeof l.WorkerGlobalScope&&"function"===typeof l.importScripts}function Ae(){return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.hasOwnProperty("node")?"Node":ze()?"Worker":"Browser"}function Be(){var a=Ae();return"ReactNative"===a||"Node"===a}function Ce(){for(var a=50,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}
var qe="Firefox",me="Chrome";
function le(a){var b=a.toLowerCase();if(y(b,"opera/")||y(b,"opr/")||y(b,"opios/"))return"Opera";if(y(b,"iemobile"))return"IEMobile";if(y(b,"msie")||y(b,"trident/"))return"IE";if(y(b,"edge/"))return"Edge";if(y(b,"firefox/"))return qe;if(y(b,"silk/"))return"Silk";if(y(b,"blackberry"))return"Blackberry";if(y(b,"webos"))return"Webos";if(!y(b,"safari/")||y(b,"chrome/")||y(b,"crios/")||y(b,"android"))if(!y(b,"chrome/")&&!y(b,"crios/")||y(b,"edge/")){if(y(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&
2==a.length)return a[1]}else return me;else return"Safari";return"Other"}var De={Vc:"FirebaseCore-web",Xc:"FirebaseUI-web"};function Ee(a,b){b=b||[];var c=[],d={},e;for(e in De)d[De[e]]=!0;for(e=0;e<b.length;e++)"undefined"!==typeof d[b[e]]&&(delete d[b[e]],c.push(b[e]));c.sort();b=c;b.length||(b=["FirebaseCore-web"]);c=Ae();"Browser"===c?(d=I(),c=le(d)):"Worker"===c&&(d=I(),c=le(d)+"-"+c);return c+"/JsCore/"+a+"/"+b.join(",")}function I(){return l.navigator&&l.navigator.userAgent||""}
function J(a,b){a=a.split(".");b=b||l;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b}function Fe(){try{var a=l.localStorage,b=Ge();if(a)return a.setItem(b,"1"),a.removeItem(b),ge()?!!l.indexedDB:!0}catch(c){return ze()&&!!l.indexedDB}return!1}function He(){return(Ie()||"chrome-extension:"===xe()||we())&&!Be()&&Fe()&&!ze()}function Ie(){return"http:"===xe()||"https:"===xe()}function xe(){return l.location&&l.location.protocol||null}
function Je(a){a=a||I();return ne(a)||le(a)==qe?!1:!0}function Ke(a){return"undefined"===typeof a?null:ae(a)}function Le(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b}function Me(a){if(null!==a)return JSON.parse(a)}function Ge(a){return a?a:Math.floor(1E9*Math.random()).toString()}function Ne(a){a=a||I();return"Safari"==le(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0}
function Oe(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null}function Pe(a,b){if(a>b)throw Error("Short delay should be less than long delay!");this.a=a;this.c=b;a=I();b=Ae();this.b=ne(a)||"ReactNative"===b}
Pe.prototype.get=function(){var a=l.navigator;return(a&&"boolean"===typeof a.onLine&&(Ie()||"chrome-extension:"===xe()||"undefined"!==typeof a.connection)?a.onLine:1)?this.b?this.c:this.a:Math.min(5E3,this.a)};function Qe(){var a=l.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0}
function Re(){var a=l.document,b=null;return Qe()||!a?D():(new B(function(c){b=function(){Qe()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).s(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})}function Se(a){try{var b=new Date(parseInt(a,10));if(!isNaN(b.getTime())&&!/[^0-9]/.test(a))return b.toUTCString()}catch(c){}return null}function Te(){return!(!J("fireauth.oauthhelper",l)&&!J("fireauth.iframe",l))}
function Ue(){var a=l.navigator;return a&&a.serviceWorker&&a.serviceWorker.controller||null}function Ve(){var a=l.navigator;return a&&a.serviceWorker?D().then(function(){return a.serviceWorker.ready}).then(function(b){return b.active||null}).s(function(){return null}):D(null)};var We={};function Xe(a){We[a]||(We[a]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(a))};var Ye;try{var Ze={};Object.defineProperty(Ze,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Ze,"abcd",{configurable:!0,enumerable:!0,value:2});Ye=2==Ze.abcd}catch(a){Ye=!1}function K(a,b,c){Ye?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c}function L(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&K(a,c,b[c])}function $e(a){var b={};L(b,a);return b}function af(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}
function bf(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0}function cf(a){var b=a;if("object"==typeof a&&null!=a){b="length"in a?[]:{};for(var c in a)K(b,c,cf(a[c]))}return b};function df(a){var b={},c=a[ef],d=a[ff];a=a[gf];if(!a||a!=hf&&!c)throw Error("Invalid provider user info!");b[jf]=d||null;b[kf]=c||null;K(this,lf,a);K(this,mf,cf(b))}var hf="EMAIL_SIGNIN",ef="email",ff="newEmail",gf="requestType",kf="email",jf="fromEmail",mf="data",lf="operation";function M(a,b){this.code=nf+a;this.message=b||of[a]||""}v(M,Error);M.prototype.A=function(){return{code:this.code,message:this.message}};M.prototype.toJSON=function(){return this.A()};function pf(a){var b=a&&a.code;return b?new M(b.substring(nf.length),a.message):null}
var nf="auth/",of={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
"captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.",
"requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.",
"internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.",
"invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
"invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.",
"invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
"invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
"invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.",
"missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.",
"missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The OIDC ID token requires a valid unhashed nonce.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.",
"account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.",
"operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.",
"popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.",
"tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.",
"unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.",
"web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};function qf(a){a=Ld(a);var b=Kd(a,rf)||null,c=Kd(a,sf)||null,d=Kd(a,tf)||null;d=d?uf[d]||null:null;if(!b||!c||!d)throw new M("argument-error",rf+", "+sf+"and "+tf+" are required in a valid action code URL.");L(this,{apiKey:b,operation:d,code:c,continueUrl:Kd(a,vf)||null,languageCode:Kd(a,wf)||null,tenantId:Kd(a,xf)||null})}var rf="apiKey",sf="oobCode",vf="continueUrl",wf="languageCode",tf="mode",xf="tenantId",uf={recoverEmail:"RECOVER_EMAIL",resetPassword:"PASSWORD_RESET",signIn:hf,verifyEmail:"VERIFY_EMAIL"};
function yf(a){try{return new qf(a)}catch(b){return null}};function zf(a){var b=a[Af];if("undefined"===typeof b)throw new M("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new M("invalid-continue-uri");this.h=b;this.b=this.a=null;this.g=!1;var c=a[Bf];if(c&&"object"===typeof c){b=c[Cf];var d=c[Df];c=c[Ef];if("string"===typeof b&&b.length){this.a=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new M("argument-error",Df+" property must be a boolean when specified.");this.g=!!d;if("undefined"!==typeof c&&("string"!==
typeof c||"string"===typeof c&&!c.length))throw new M("argument-error",Ef+" property must be a non empty string when specified.");this.b=c||null}else{if("undefined"!==typeof b)throw new M("argument-error",Cf+" property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new M("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new M("argument-error",Bf+" property must be a non null object when specified.");this.f=null;if((b=a[Ff])&&"object"===
typeof b)if(b=b[Gf],"string"===typeof b&&b.length)this.f=b;else{if("undefined"!==typeof b)throw new M("argument-error",Gf+" property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new M("argument-error",Ff+" property must be a non null object when specified.");b=a[Hf];if("undefined"!==typeof b&&"boolean"!==typeof b)throw new M("argument-error",Hf+" property must be a boolean when specified.");this.c=!!b;a=a[If];if("undefined"!==typeof a&&("string"!==typeof a||"string"===
typeof a&&!a.length))throw new M("argument-error",If+" property must be a non empty string when specified.");this.i=a||null}var Bf="android",If="dynamicLinkDomain",Hf="handleCodeInApp",Ff="iOS",Af="url",Df="installApp",Ef="minimumVersion",Cf="packageName",Gf="bundleId";
function Jf(a){var b={};b.continueUrl=a.h;b.canHandleCodeInApp=a.c;if(b.androidPackageName=a.a)b.androidMinimumVersion=a.b,b.androidInstallApp=a.g;b.iOSBundleId=a.f;b.dynamicLinkDomain=a.i;for(var c in b)null===b[c]&&delete b[c];return b};function Kf(a){return Ja(a,function(b){b=b.toString(16);return 1<b.length?b:"0"+b}).join("")};var Lf=null,Mf=null;function Nf(a){var b="";Of(a,function(c){b+=String.fromCharCode(c)});return b}function Of(a,b){function c(m){for(;d<a.length;){var p=a.charAt(d++),u=Mf[p];if(null!=u)return u;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p);}return m}Pf();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Pf(){if(!Lf){Lf={};Mf={};for(var a=0;65>a;a++)Lf[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Mf[Lf[a]]=a,62<=a&&(Mf["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};function Qf(a){this.f=a.sub;ua();this.a=a.provider_id||a.firebase&&a.firebase.sign_in_provider||null;this.c=a.firebase&&a.firebase.tenant||null;this.b=!!a.is_anonymous||"anonymous"==this.a}Qf.prototype.R=function(){return this.c};Qf.prototype.g=function(){return this.b};function Rf(a){return(a=Sf(a))&&a.sub&&a.iss&&a.aud&&a.exp?new Qf(a):null}
function Sf(a){if(!a)return null;a=a.split(".");if(3!=a.length)return null;a=a[1];for(var b=(4-a.length%4)%4,c=0;c<b;c++)a+=".";try{return JSON.parse(Nf(a))}catch(d){}return null};var Tf={ad:{bb:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",ib:"https://securetoken.googleapis.com/v1/token",id:"p"},cd:{bb:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",ib:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},dd:{bb:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",ib:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}};
function Uf(a){for(var b in Tf)if(Tf[b].id===a)return a=Tf[b],{firebaseEndpoint:a.bb,secureTokenEndpoint:a.ib};return null}var Vf;Vf=Uf("__EID__")?"__EID__":void 0;var Wf="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),Xf=["client_id","response_type","scope","redirect_uri","state"],Yf={Wc:{Oa:"locale",Da:500,Ca:600,Pa:"facebook.com",hb:Xf},Yc:{Oa:null,Da:500,Ca:620,Pa:"github.com",hb:Xf},Zc:{Oa:"hl",Da:515,Ca:680,Pa:"google.com",hb:Xf},ed:{Oa:"lang",Da:485,Ca:705,Pa:"twitter.com",hb:Wf}};function Zf(a){for(var b in Yf)if(Yf[b].Pa==a)return Yf[b];return null};function $f(a){var b={};b["facebook.com"]=ag;b["google.com"]=bg;b["github.com"]=cg;b["twitter.com"]=dg;var c=a&&a[eg];try{if(c)return b[c]?new b[c](a):new fg(a);if("undefined"!==typeof a[gg])return new hg(a)}catch(d){}return null}var gg="idToken",eg="providerId";
function hg(a){var b=a[eg];if(!b&&a[gg]){var c=Rf(a[gg]);c&&c.a&&(b=c.a)}if(!b)throw Error("Invalid additional user info!");if("anonymous"==b||"custom"==b)b=null;c=!1;"undefined"!==typeof a.isNewUser?c=!!a.isNewUser:"identitytoolkit#SignupNewUserResponse"===a.kind&&(c=!0);K(this,"providerId",b);K(this,"isNewUser",c)}function fg(a){hg.call(this,a);a=Me(a.rawUserInfo||"{}");K(this,"profile",cf(a||{}))}v(fg,hg);
function ag(a){fg.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider ID!");}v(ag,fg);function cg(a){fg.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider ID!");K(this,"username",this.profile&&this.profile.login||null)}v(cg,fg);function bg(a){fg.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider ID!");}v(bg,fg);
function dg(a){fg.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider ID!");K(this,"username",a.screenName||null)}v(dg,fg);function ig(a){var b=Ld(a),c=Kd(b,"link"),d=Kd(Ld(c),"link");b=Kd(b,"deep_link_id");return Kd(Ld(b),"link")||b||d||c||a};function jg(){}function kg(a,b){return a.then(function(c){if(c[lg]){var d=Rf(c[lg]);if(!d||b!=d.f)throw new M("user-mismatch");return c}throw new M("user-mismatch");}).s(function(c){throw c&&c.code&&c.code==nf+"user-not-found"?new M("user-mismatch"):c;})}function mg(a,b){if(b)this.a=b;else throw new M("internal-error","failed to construct a credential");K(this,"providerId",a);K(this,"signInMethod",a)}mg.prototype.na=function(a){return ng(a,og(this))};
mg.prototype.b=function(a,b){var c=og(this);c.idToken=b;return pg(a,c)};mg.prototype.f=function(a,b){return kg(qg(a,og(this)),b)};function og(a){return{pendingToken:a.a,requestUri:"http://localhost"}}mg.prototype.A=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}};function rg(a){if(a&&a.providerId&&a.signInMethod&&0==a.providerId.indexOf("saml.")&&a.pendingToken)try{return new mg(a.providerId,a.pendingToken)}catch(b){}return null}
function sg(a,b,c){this.a=null;if(b.idToken||b.accessToken)b.idToken&&K(this,"idToken",b.idToken),b.accessToken&&K(this,"accessToken",b.accessToken),b.nonce&&!b.pendingToken&&K(this,"nonce",b.nonce),b.pendingToken&&(this.a=b.pendingToken);else if(b.oauthToken&&b.oauthTokenSecret)K(this,"accessToken",b.oauthToken),K(this,"secret",b.oauthTokenSecret);else throw new M("internal-error","failed to construct a credential");K(this,"providerId",a);K(this,"signInMethod",c)}
sg.prototype.na=function(a){return ng(a,tg(this))};sg.prototype.b=function(a,b){var c=tg(this);c.idToken=b;return pg(a,c)};sg.prototype.f=function(a,b){var c=tg(this);return kg(qg(a,c),b)};
function tg(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;a.nonce&&!a.a&&(b.nonce=a.nonce);b={postBody:Pd(b).toString(),requestUri:"http://localhost"};a.a&&(delete b.postBody,b.pendingToken=a.a);return b}
sg.prototype.A=function(){var a={providerId:this.providerId,signInMethod:this.signInMethod};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);this.nonce&&(a.nonce=this.nonce);this.a&&(a.pendingToken=this.a);return a};
function ug(a){if(a&&a.providerId&&a.signInMethod){var b={idToken:a.oauthIdToken,accessToken:a.oauthTokenSecret?null:a.oauthAccessToken,oauthTokenSecret:a.oauthTokenSecret,oauthToken:a.oauthTokenSecret&&a.oauthAccessToken,nonce:a.nonce,pendingToken:a.pendingToken};try{return new sg(a.providerId,b,a.signInMethod)}catch(c){}}return null}function vg(a,b){this.Fc=b||[];L(this,{providerId:a,isOAuthProvider:!0});this.zb={};this.cb=(Zf(a)||{}).Oa||null;this.ab=null}
vg.prototype.Ea=function(a){this.zb=Ua(a);return this};function wg(a){if("string"!==typeof a||0!=a.indexOf("saml."))throw new M("argument-error",'SAML provider IDs must be prefixed with "saml."');vg.call(this,a,[])}v(wg,vg);function O(a){vg.call(this,a,Xf);this.a=[]}v(O,vg);O.prototype.wa=function(a){Na(this.a,a)||this.a.push(a);return this};O.prototype.Hb=function(){return Ra(this.a)};
O.prototype.credential=function(a,b){var c;r(a)?c={idToken:a.idToken||null,accessToken:a.accessToken||null,nonce:a.rawNonce||null}:c={idToken:a||null,accessToken:b||null};if(!c.idToken&&!c.accessToken)throw new M("argument-error","credential failed: must provide the ID token and/or the access token.");return new sg(this.providerId,c,this.providerId)};function xg(){O.call(this,"facebook.com")}v(xg,O);K(xg,"PROVIDER_ID","facebook.com");K(xg,"FACEBOOK_SIGN_IN_METHOD","facebook.com");
function yg(a){if(!a)throw new M("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;r(a)&&(b=a.accessToken);return(new xg).credential({accessToken:b})}function zg(){O.call(this,"github.com")}v(zg,O);K(zg,"PROVIDER_ID","github.com");K(zg,"GITHUB_SIGN_IN_METHOD","github.com");
function Ag(a){if(!a)throw new M("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;r(a)&&(b=a.accessToken);return(new zg).credential({accessToken:b})}function Bg(){O.call(this,"google.com");this.wa("profile")}v(Bg,O);K(Bg,"PROVIDER_ID","google.com");K(Bg,"GOOGLE_SIGN_IN_METHOD","google.com");function Cg(a,b){var c=a;r(a)&&(c=a.idToken,b=a.accessToken);return(new Bg).credential({idToken:c,accessToken:b})}function Dg(){vg.call(this,"twitter.com",Wf)}v(Dg,vg);
K(Dg,"PROVIDER_ID","twitter.com");K(Dg,"TWITTER_SIGN_IN_METHOD","twitter.com");function Eg(a,b){var c=a;r(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new M("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new sg("twitter.com",c,"twitter.com")}
function Fg(a,b,c){this.a=a;this.c=b;K(this,"providerId","password");K(this,"signInMethod",c===Gg.EMAIL_LINK_SIGN_IN_METHOD?Gg.EMAIL_LINK_SIGN_IN_METHOD:Gg.EMAIL_PASSWORD_SIGN_IN_METHOD)}Fg.prototype.na=function(a){return this.signInMethod==Gg.EMAIL_LINK_SIGN_IN_METHOD?P(a,Hg,{email:this.a,oobCode:this.c}):P(a,Ig,{email:this.a,password:this.c})};
Fg.prototype.b=function(a,b){return this.signInMethod==Gg.EMAIL_LINK_SIGN_IN_METHOD?P(a,Jg,{idToken:b,email:this.a,oobCode:this.c}):P(a,Kg,{idToken:b,email:this.a,password:this.c})};Fg.prototype.f=function(a,b){return kg(this.na(a),b)};Fg.prototype.A=function(){return{email:this.a,password:this.c,signInMethod:this.signInMethod}};function Lg(a){return a&&a.email&&a.password?new Fg(a.email,a.password,a.signInMethod):null}function Gg(){L(this,{providerId:"password",isOAuthProvider:!1})}
function Mg(a,b){b=Ng(b);if(!b)throw new M("argument-error","Invalid email link!");return new Fg(a,b.code,Gg.EMAIL_LINK_SIGN_IN_METHOD)}function Ng(a){a=ig(a);return(a=yf(a))&&a.operation===hf?a:null}L(Gg,{PROVIDER_ID:"password"});L(Gg,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"});L(Gg,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"});function Og(a){if(!(a.Ua&&a.Ta||a.Fa&&a.ba))throw new M("internal-error");this.a=a;K(this,"providerId","phone");K(this,"signInMethod","phone")}Og.prototype.na=function(a){return a.Va(Pg(this))};
Og.prototype.b=function(a,b){var c=Pg(this);c.idToken=b;return P(a,Qg,c)};Og.prototype.f=function(a,b){var c=Pg(this);c.operation="REAUTH";a=P(a,Rg,c);return kg(a,b)};Og.prototype.A=function(){var a={providerId:"phone"};this.a.Ua&&(a.verificationId=this.a.Ua);this.a.Ta&&(a.verificationCode=this.a.Ta);this.a.Fa&&(a.temporaryProof=this.a.Fa);this.a.ba&&(a.phoneNumber=this.a.ba);return a};
function Sg(a){if(a&&"phone"===a.providerId&&(a.verificationId&&a.verificationCode||a.temporaryProof&&a.phoneNumber)){var b={};x(["verificationId","verificationCode","temporaryProof","phoneNumber"],function(c){a[c]&&(b[c]=a[c])});return new Og(b)}return null}function Pg(a){return a.a.Fa&&a.a.ba?{temporaryProof:a.a.Fa,phoneNumber:a.a.ba}:{sessionInfo:a.a.Ua,code:a.a.Ta}}
function Tg(a){try{this.a=a||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth()}catch(b){throw new M("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}L(this,{providerId:"phone",isOAuthProvider:!1})}
Tg.prototype.Va=function(a,b){var c=this.a.b;return D(b.verify()).then(function(d){if(!n(d))throw new M("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return Ug(c,{phoneNumber:a,recaptchaToken:d}).then(function(e){"function"===typeof b.reset&&b.reset();return e},function(e){"function"===typeof b.reset&&b.reset();throw e;});default:throw new M("argument-error",
'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};function Vg(a,b){if(!a)throw new M("missing-verification-id");if(!b)throw new M("missing-verification-code");return new Og({Ua:a,Ta:b})}L(Tg,{PROVIDER_ID:"phone"});L(Tg,{PHONE_SIGN_IN_METHOD:"phone"});
function Wg(a){if(a.temporaryProof&&a.phoneNumber)return new Og({Fa:a.temporaryProof,ba:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret,e=a&&a.nonce,f=a&&a.oauthIdToken,g=a&&a.pendingToken;try{switch(b){case "google.com":return Cg(f,c);case "facebook.com":return yg(c);case "github.com":return Ag(c);case "twitter.com":return Eg(c,d);default:return c||d||f||g?g?0==b.indexOf("saml.")?new mg(b,g):new sg(b,{pendingToken:g,idToken:a.oauthIdToken,
accessToken:a.oauthAccessToken},b):(new O(b)).credential({idToken:f,accessToken:c,rawNonce:e}):null}}catch(h){return null}}function Xg(a){if(!a.isOAuthProvider)throw new M("invalid-oauth-provider");};function Yg(a,b,c,d,e,f,g){this.c=a;this.b=b||null;this.g=c||null;this.f=d||null;this.i=f||null;this.h=g||null;this.a=e||null;if(this.g||this.a){if(this.g&&this.a)throw new M("invalid-auth-event");if(this.g&&!this.f)throw new M("invalid-auth-event");}else throw new M("invalid-auth-event");}Yg.prototype.getUid=function(){var a=[];a.push(this.c);this.b&&a.push(this.b);this.f&&a.push(this.f);this.h&&a.push(this.h);return a.join("-")};Yg.prototype.R=function(){return this.h};
Yg.prototype.A=function(){return{type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.i,tenantId:this.h,error:this.a&&this.a.A()}};function Zg(a){a=a||{};return a.type?new Yg(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&pf(a.error),a.postBody,a.tenantId):null};/*

 Copyright 2018 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function $g(){this.b=null;this.a=[]}var ah=null;function bh(a){var b=ah;b.a.push(a);b.b||(b.b=function(c){for(var d=0;d<b.a.length;d++)b.a[d](c)},a=J("universalLinks.subscribe",l),"function"===typeof a&&a(null,b.b))};function ch(a){var b="unauthorized-domain",c=void 0,d=Ld(a);a=d.b;d=d.f;"chrome-extension"==d?c=Hb("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=Hb("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b="operation-not-supported-in-this-environment";
M.call(this,b,c)}v(ch,M);function dh(a,b,c){M.call(this,a,c);a=b||{};a.Ab&&K(this,"email",a.Ab);a.ba&&K(this,"phoneNumber",a.ba);a.credential&&K(this,"credential",a.credential);a.Qb&&K(this,"tenantId",a.Qb)}v(dh,M);dh.prototype.A=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);this.tenantId&&(a.tenantId=this.tenantId);var b=this.credential&&this.credential.A();b&&Wa(a,b);return a};dh.prototype.toJSON=function(){return this.A()};
function eh(a){if(a.code){var b=a.code||"";0==b.indexOf(nf)&&(b=b.substring(nf.length));var c={credential:Wg(a),Qb:a.tenantId};if(a.email)c.Ab=a.email;else if(a.phoneNumber)c.ba=a.phoneNumber;else if(!c.credential)return new M(b,a.message||void 0);return new dh(b,c,a.message)}return null};function fh(){}fh.prototype.c=null;function gh(a){return a.c||(a.c=a.b())};var hh;function ih(){}v(ih,fh);ih.prototype.a=function(){var a=jh(this);return a?new ActiveXObject(a):new XMLHttpRequest};ih.prototype.b=function(){var a={};jh(this)&&(a[0]=!0,a[1]=!0);return a};
function jh(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}hh=new ih;function kh(){}v(kh,fh);kh.prototype.a=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new lh;throw Error("Unsupported browser");};kh.prototype.b=function(){return{}};
function lh(){this.a=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseType=this.responseText=this.response="";this.status=-1;this.statusText="";this.a.onload=t(this.fc,this);this.a.onerror=t(this.Ib,this);this.a.onprogress=t(this.gc,this);this.a.ontimeout=t(this.kc,this)}k=lh.prototype;k.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.a.open(a,b)};
k.send=function(a){if(a)if("string"==typeof a)this.a.send(a);else throw Error("Only string data is supported");else this.a.send()};k.abort=function(){this.a.abort()};k.setRequestHeader=function(){};k.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.a.contentType:""};k.fc=function(){this.status=200;this.response=this.responseText=this.a.responseText;mh(this,4)};k.Ib=function(){this.status=500;this.response=this.responseText="";mh(this,4)};k.kc=function(){this.Ib()};
k.gc=function(){this.status=200;mh(this,1)};function mh(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}k.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType};function nh(a,b,c){this.reset(a,b,c,void 0,void 0)}nh.prototype.a=null;var oh=0;nh.prototype.reset=function(a,b,c,d,e){"number"==typeof e||oh++;d||ua();delete this.a};function ph(a){this.f=a;this.b=this.c=this.a=null}function qh(a,b){this.name=a;this.value=b}qh.prototype.toString=function(){return this.name};var rh=new qh("SEVERE",1E3),sh=new qh("WARNING",900),th=new qh("CONFIG",700),uh=new qh("FINE",500);function vh(a){if(a.c)return a.c;if(a.a)return vh(a.a);ya("Root logger has no level set.");return null}ph.prototype.log=function(a,b,c){if(a.value>=vh(this).value)for(q(b)&&(b=b()),a=new nh(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a};var wh={},xh=null;
function yh(a){xh||(xh=new ph(""),wh[""]=xh,xh.c=th);var b;if(!(b=wh[a])){b=new ph(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=yh(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;wh[a]=b}return b};function zh(a,b){a&&a.log(uh,b,void 0)};function Ah(a){this.f=a}v(Ah,fh);Ah.prototype.a=function(){return new Bh(this.f)};Ah.prototype.b=function(a){return function(){return a}}({});function Bh(a){G.call(this);this.o=a;this.readyState=Ch;this.status=0;this.responseType=this.responseText=this.response=this.statusText="";this.onreadystatechange=null;this.i=new Headers;this.b=null;this.m="GET";this.g="";this.a=!1;this.h=yh("goog.net.FetchXmlHttp");this.l=this.c=this.f=null}v(Bh,G);var Ch=0;k=Bh.prototype;
k.open=function(a,b){if(this.readyState!=Ch)throw this.abort(),Error("Error reopening a connection");this.m=a;this.g=b;this.readyState=1;Dh(this)};k.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var b={headers:this.i,method:this.m,credentials:void 0,cache:void 0};a&&(b.body=a);this.o.fetch(new Request(this.g,b)).then(this.jc.bind(this),this.Ma.bind(this))};
k.abort=function(){this.response=this.responseText="";this.i=new Headers;this.status=0;this.c&&this.c.cancel("Request was aborted.");1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,Eh(this,!1));this.readyState=Ch};
k.jc=function(a){this.a&&(this.f=a,this.b||(this.b=a.headers,this.readyState=2,Dh(this)),this.a&&(this.readyState=3,Dh(this),this.a&&("arraybuffer"===this.responseType?a.arrayBuffer().then(this.hc.bind(this),this.Ma.bind(this)):"undefined"!==typeof l.ReadableStream&&"body"in a?(this.response=this.responseText="",this.c=a.body.getReader(),this.l=new TextDecoder,Fh(this)):a.text().then(this.ic.bind(this),this.Ma.bind(this)))))};function Fh(a){a.c.read().then(a.ec.bind(a)).catch(a.Ma.bind(a))}
k.ec=function(a){if(this.a){var b=this.l.decode(a.value?a.value:new Uint8Array(0),{stream:!a.done});b&&(this.response=this.responseText+=b);a.done?Eh(this,!0):Dh(this);3==this.readyState&&Fh(this)}};k.ic=function(a){this.a&&(this.response=this.responseText=a,Eh(this,!0))};k.hc=function(a){this.a&&(this.response=a,Eh(this,!0))};k.Ma=function(a){var b=this.h;b&&b.log(sh,"Failed to fetch url "+this.g,a instanceof Error?a:Error(a));this.a&&Eh(this,!0)};
function Eh(a,b){b&&a.f&&(a.status=a.f.status,a.statusText=a.f.statusText);a.readyState=4;a.f=null;a.c=null;a.l=null;Dh(a)}k.setRequestHeader=function(a,b){this.i.append(a,b)};k.getResponseHeader=function(a){return this.b?this.b.get(a.toLowerCase())||"":((a=this.h)&&a.log(sh,"Attempting to get response header but no headers have been received for url: "+this.g,void 0),"")};
k.getAllResponseHeaders=function(){if(!this.b){var a=this.h;a&&a.log(sh,"Attempting to get all response headers but no headers have been received for url: "+this.g,void 0);return""}a=[];for(var b=this.b.entries(),c=b.next();!c.done;)c=c.value,a.push(c[0]+": "+c[1]),c=b.next();return a.join("\r\n")};function Dh(a){a.onreadystatechange&&a.onreadystatechange.call(a)};function Gh(a){G.call(this);this.headers=new rd;this.B=a||null;this.c=!1;this.w=this.a=null;this.h=this.O=this.l="";this.f=this.J=this.i=this.I=!1;this.g=0;this.o=null;this.m=Hh;this.v=this.P=!1}v(Gh,G);var Hh="";Gh.prototype.b=yh("goog.net.XhrIo");var Ih=/^https?$/i,Jh=["POST","PUT"];
function Kh(a,b,c,d,e){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);c=c?c.toUpperCase():"GET";a.l=b;a.h="";a.O=c;a.I=!1;a.c=!0;a.a=a.B?a.B.a():hh.a();a.w=a.B?gh(a.B):gh(hh);a.a.onreadystatechange=t(a.Lb,a);try{zh(a.b,Lh(a,"Opening Xhr")),a.J=!0,a.a.open(c,String(b),!0),a.J=!1}catch(g){zh(a.b,Lh(a,"Error opening Xhr: "+g.message));Mh(a,g);return}b=d||"";var f=new rd(a.headers);e&&qd(e,function(g,h){f.set(h,g)});e=La(f.X());d=l.FormData&&b instanceof
l.FormData;!Na(Jh,c)||e||d||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(g,h){this.a.setRequestHeader(h,g)},a);a.m&&(a.a.responseType=a.m);"withCredentials"in a.a&&a.a.withCredentials!==a.P&&(a.a.withCredentials=a.P);try{Nh(a),0<a.g&&(a.v=Oh(a.a),zh(a.b,Lh(a,"Will abort after "+a.g+"ms if incomplete, xhr2 "+a.v)),a.v?(a.a.timeout=a.g,a.a.ontimeout=t(a.Ga,a)):a.o=md(a.Ga,a.g,a)),zh(a.b,Lh(a,"Sending request")),a.i=!0,a.a.send(b),a.i=!1}catch(g){zh(a.b,
Lh(a,"Send error: "+g.message)),Mh(a,g)}}function Oh(a){return uc&&Ec(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function Ma(a){return"content-type"==a.toLowerCase()}k=Gh.prototype;k.Ga=function(){"undefined"!=typeof fa&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",zh(this.b,Lh(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))};function Mh(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;Ph(a);Qh(a)}
function Ph(a){a.I||(a.I=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}k.abort=function(){this.a&&this.c&&(zh(this.b,Lh(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Qh(this))};k.xa=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),Qh(this,!0));Gh.qb.xa.call(this)};k.Lb=function(){this.ta||(this.J||this.i||this.f?Rh(this):this.yc())};k.yc=function(){Rh(this)};
function Rh(a){if(a.c&&"undefined"!=typeof fa)if(a.w[1]&&4==Sh(a)&&2==Th(a))zh(a.b,Lh(a,"Local request error detected and ignored"));else if(a.i&&4==Sh(a))md(a.Lb,0,a);else if(a.dispatchEvent("readystatechange"),4==Sh(a)){zh(a.b,Lh(a,"Request complete"));a.c=!1;try{var b=Th(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.l).match(ud)[1]||null;if(!f&&l.self&&l.self.location){var g=l.self.location.protocol;
f=g.substr(0,g.length-1)}e=!Ih.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var h=2<Sh(a)?a.a.statusText:""}catch(m){zh(a.b,"Can not get status: "+m.message),h=""}a.h=h+" ["+Th(a)+"]";Ph(a)}}finally{Qh(a)}}}function Qh(a,b){if(a.a){Nh(a);var c=a.a,d=a.w[0]?ka:null;a.a=null;a.w=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.b)&&a.log(rh,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}
function Nh(a){a.a&&a.v&&(a.a.ontimeout=null);a.o&&(l.clearTimeout(a.o),a.o=null)}function Sh(a){return a.a?a.a.readyState:0}function Th(a){try{return 2<Sh(a)?a.a.status:-1}catch(b){return-1}}function Uh(a){try{return a.a?a.a.responseText:""}catch(b){return zh(a.b,"Can not get responseText: "+b.message),""}}
k.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.m){case Hh:case "text":return this.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var a=this.b;a&&a.log(rh,"Response type "+this.m+" is not supported on this browser",void 0);return null}catch(b){return zh(this.b,"Can not get response: "+b.message),null}};function Lh(a,b){return b+" ["+a.O+" "+a.l+" "+Th(a)+"]"};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Vh(a){var b=Wh;this.g=[];this.v=b;this.o=a||null;this.f=this.a=!1;this.c=void 0;this.u=this.w=this.i=!1;this.h=0;this.b=null;this.l=0}Vh.prototype.cancel=function(a){if(this.a)this.c instanceof Vh&&this.c.cancel();else{if(this.b){var b=this.b;delete this.b;a?b.cancel(a):(b.l--,0>=b.l&&b.cancel())}this.v?this.v.call(this.o,this):this.u=!0;this.a||(a=new Xh(this),Yh(this),Zh(this,!1,a))}};Vh.prototype.m=function(a,b){this.i=!1;Zh(this,a,b)};function Zh(a,b,c){a.a=!0;a.c=c;a.f=!b;$h(a)}
function Yh(a){if(a.a){if(!a.u)throw new ai(a);a.u=!1}}function bi(a,b){ci(a,null,b,void 0)}function ci(a,b,c,d){a.g.push([b,c,d]);a.a&&$h(a)}Vh.prototype.then=function(a,b,c){var d,e,f=new B(function(g,h){d=g;e=h});ci(this,d,function(g){g instanceof Xh?f.cancel():e(g)});return f.then(a,b,c)};Vh.prototype.$goog_Thenable=!0;function di(a){return Ka(a.g,function(b){return q(b[1])})}
function $h(a){if(a.h&&a.a&&di(a)){var b=a.h,c=ei[b];c&&(l.clearTimeout(c.a),delete ei[b]);a.h=0}a.b&&(a.b.l--,delete a.b);b=a.c;for(var d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],g=e[1];e=e[2];if(f=a.f?g:f)try{var h=f.call(e||a.o,b);void 0!==h&&(a.f=a.f&&(h==b||h instanceof Error),a.c=b=h);if(va(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.i=!0}catch(m){b=m,a.f=!0,di(a)||(c=!0)}}a.c=b;d&&(h=t(a.m,a,!0),d=t(a.m,a,!1),b instanceof Vh?(ci(b,h,d),b.w=!0):b.then(h,d));c&&(b=
new fi(b),ei[b.a]=b,a.h=b.a)}function ai(){w.call(this)}v(ai,w);ai.prototype.message="Deferred has already fired";ai.prototype.name="AlreadyCalledError";function Xh(){w.call(this)}v(Xh,w);Xh.prototype.message="Deferred was canceled";Xh.prototype.name="CanceledError";function fi(a){this.a=l.setTimeout(t(this.c,this),0);this.b=a}fi.prototype.c=function(){delete ei[this.a];throw this.b;};var ei={};function gi(a){var b={},c=b.document||document,d=db(a).toString(),e=document.createElement("SCRIPT"),f={Nb:e,Ga:void 0},g=new Vh(f),h=null,m=null!=b.timeout?b.timeout:5E3;0<m&&(h=window.setTimeout(function(){hi(e,!0);var p=new ii(ji,"Timeout reached for loading script "+d);Yh(g);Zh(g,!1,p)},m),f.Ga=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(hi(e,b.gd||!1,h),Yh(g),Zh(g,!0,null))};e.onerror=function(){hi(e,!0,h);var p=new ii(ki,"Error while loading script "+
d);Yh(g);Zh(g,!1,p)};f=b.attributes||{};Wa(f,{type:"text/javascript",charset:"UTF-8"});Wd(e,f);Gb(e,a);li(c).appendChild(e);return g}function li(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}function Wh(){if(this&&this.Nb){var a=this.Nb;a&&"SCRIPT"==a.tagName&&hi(a,!0,this.Ga)}}
function hi(a,b,c){null!=c&&l.clearTimeout(c);a.onload=ka;a.onerror=ka;a.onreadystatechange=ka;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}var ki=0,ji=1;function ii(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);w.call(this,c);this.code=a}v(ii,w);function mi(a){this.f=a}v(mi,fh);mi.prototype.a=function(){return new this.f};mi.prototype.b=function(){return{}};
function ni(a,b,c){this.c=a;a=b||{};this.l=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.u=a.secureTokenTimeout||oi;this.g=Ua(a.secureTokenHeaders||pi);this.h=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.i=a.firebaseTimeout||qi;this.a=Ua(a.firebaseHeaders||ri);c&&(this.a["X-Client-Version"]=c,this.g["X-Client-Version"]=c);c="Node"==Ae();c=l.XMLHttpRequest||c&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.XMLHttpRequest;if(!c&&
!ze())throw new M("internal-error","The XMLHttpRequest compatibility library was not found.");this.f=void 0;ze()?this.f=new Ah(self):Be()?this.f=new mi(c):this.f=new kh;this.b=null}var si,lg="idToken",oi=new Pe(3E4,6E4),pi={"Content-Type":"application/x-www-form-urlencoded"},qi=new Pe(3E4,6E4),ri={"Content-Type":"application/json"};function ti(a,b){b?a.a["X-Firebase-Locale"]=b:delete a.a["X-Firebase-Locale"]}
function ui(a,b){b?(a.a["X-Client-Version"]=b,a.g["X-Client-Version"]=b):(delete a.a["X-Client-Version"],delete a.g["X-Client-Version"])}ni.prototype.R=function(){return this.b};function vi(a,b,c,d,e,f,g){ke()||ze()?a=t(a.o,a):(si||(si=new B(function(h,m){wi(h,m)})),a=t(a.m,a));a(b,c,d,e,f,g)}
ni.prototype.o=function(a,b,c,d,e,f){if(ze()&&("undefined"===typeof l.fetch||"undefined"===typeof l.Headers||"undefined"===typeof l.Request))throw new M("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var g=new Gh(this.f);if(f){g.g=Math.max(0,f);var h=setTimeout(function(){g.dispatchEvent("timeout")},f)}Zc(g,"complete",function(){h&&clearTimeout(h);var m=null;try{m=
JSON.parse(Uh(this))||null}catch(p){m=null}b&&b(m)});ed(g,"ready",function(){h&&clearTimeout(h);pc(this)});ed(g,"timeout",function(){h&&clearTimeout(h);pc(this);b&&b(null)});Kh(g,a,c,d,e)};var xi=new Xa(Ya,"https://apis.google.com/js/client.js?onload=%{onload}"),yi="__fcb"+Math.floor(1E6*Math.random()).toString();
function wi(a,b){if(((window.gapi||{}).client||{}).request)a();else{l[yi]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=eb(xi,{onload:yi});bi(gi(c),function(){b(Error("CORS_UNSUPPORTED"))})}}
ni.prototype.m=function(a,b,c,d,e){var f=this;si.then(function(){window.gapi.client.setApiKey(f.c);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(h){window.gapi.auth.setToken(g);b&&b(h)}})}).s(function(g){b&&b({error:{message:g&&g.message||"CORS_UNSUPPORTED"}})})};
function zi(a,b){return new B(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?vi(a,a.l+"?key="+encodeURIComponent(a.c),function(e){e?e.error?d(Ai(e)):e.access_token&&e.refresh_token?c(e):d(new M("internal-error")):d(new M("network-request-failed"))},"POST",Pd(b).toString(),a.g,a.u.get()):d(new M("internal-error"))})}
function Bi(a,b,c,d,e,f){var g=Ld(a.h+b);H(g,"key",a.c);f&&H(g,"cb",ua().toString());var h="GET"==c;if(h)for(var m in d)d.hasOwnProperty(m)&&H(g,m,d[m]);return new B(function(p,u){vi(a,g.toString(),function(A){A?A.error?u(Ai(A,e||{})):p(A):u(new M("network-request-failed"))},c,h?void 0:ae(Le(d)),a.a,a.i.get())})}function Ci(a){a=a.email;if(!n(a)||!te.test(a))throw new M("invalid-email");}function Di(a){"email"in a&&Ci(a)}
function Ei(a,b){return P(a,Fi,{identifier:b,continueUri:Ie()?he():"http://localhost"}).then(function(c){return c.signinMethods||[]})}function Gi(a){return P(a,Hi,{}).then(function(b){return b.authorizedDomains||[]})}function Ii(a){if(!a[lg])throw new M("internal-error");}
function Ji(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new M("internal-error");}else{if(!a.sessionInfo)throw new M("missing-verification-id");if(!a.code)throw new M("missing-verification-code");}}ni.prototype.ob=function(){return P(this,Ki,{})};ni.prototype.rb=function(a,b){return P(this,Li,{idToken:a,email:b})};ni.prototype.sb=function(a,b){return P(this,Kg,{idToken:a,password:b})};var Mi={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};k=ni.prototype;
k.tb=function(a,b){var c={idToken:a},d=[];Sa(Mi,function(e,f){var g=b[f];null===g?d.push(e):f in b&&(c[f]=g)});d.length&&(c.deleteAttribute=d);return P(this,Li,c)};k.kb=function(a,b){a={requestType:"PASSWORD_RESET",email:a};Wa(a,b);return P(this,Ni,a)};k.lb=function(a,b){a={requestType:"EMAIL_SIGNIN",email:a};Wa(a,b);return P(this,Oi,a)};k.jb=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};Wa(a,b);return P(this,Pi,a)};function Ug(a,b){return P(a,Qi,b)}k.Va=function(a){return P(this,Ri,a)};
function Si(a,b,c){return P(a,Ti,{idToken:b,deleteProvider:c})}function Ui(a){if(!a.requestUri||!a.sessionId&&!a.postBody&&!a.pendingToken)throw new M("internal-error");}function Vi(a,b){b.oauthIdToken&&b.providerId&&0==b.providerId.indexOf("oidc.")&&!b.pendingToken&&(a.sessionId?b.nonce=a.sessionId:a.postBody&&(a=new Cd(a.postBody),Td(a,"nonce")&&(b.nonce=a.get("nonce"))));return b}
function Wi(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=eh(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=eh(a)):"EMAIL_EXISTS"==a.errorMessage?(a.code="email-already-in-use",b=eh(a)):a.errorMessage&&(b=Xi(a.errorMessage));if(b)throw b;if(!a[lg])throw new M("internal-error");}function ng(a,b){b.returnIdpCredential=!0;return P(a,Yi,b)}function pg(a,b){b.returnIdpCredential=!0;return P(a,Zi,b)}
function qg(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return P(a,$i,b)}function aj(a){if(!a.oobCode)throw new M("invalid-action-code");}k.$a=function(a,b){return P(this,bj,{oobCode:a,newPassword:b})};k.Ka=function(a){return P(this,cj,{oobCode:a})};k.Xa=function(a){return P(this,dj,{oobCode:a})};
var dj={endpoint:"setAccountInfo",D:aj,fa:"email",F:!0},cj={endpoint:"resetPassword",D:aj,K:function(a){var b=a.requestType;if(!b||!a.email&&"EMAIL_SIGNIN"!=b)throw new M("internal-error");},F:!0},ej={endpoint:"signupNewUser",D:function(a){Ci(a);if(!a.password)throw new M("weak-password");},K:Ii,T:!0,F:!0},Fi={endpoint:"createAuthUri",F:!0},fj={endpoint:"deleteAccount",V:["idToken"]},Ti={endpoint:"setAccountInfo",V:["idToken","deleteProvider"],D:function(a){if(!na(a.deleteProvider))throw new M("internal-error");
}},Hg={endpoint:"emailLinkSignin",V:["email","oobCode"],D:Ci,K:Ii,T:!0,F:!0},Jg={endpoint:"emailLinkSignin",V:["idToken","email","oobCode"],D:Ci,K:Ii,T:!0},gj={endpoint:"getAccountInfo"},Oi={endpoint:"getOobConfirmationCode",V:["requestType"],D:function(a){if("EMAIL_SIGNIN"!=a.requestType)throw new M("internal-error");Ci(a)},fa:"email",F:!0},Pi={endpoint:"getOobConfirmationCode",V:["idToken","requestType"],D:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new M("internal-error");},fa:"email",F:!0},
Ni={endpoint:"getOobConfirmationCode",V:["requestType"],D:function(a){if("PASSWORD_RESET"!=a.requestType)throw new M("internal-error");Ci(a)},fa:"email",F:!0},Hi={wb:!0,endpoint:"getProjectConfig",Kb:"GET"},hj={wb:!0,endpoint:"getRecaptchaParam",Kb:"GET",K:function(a){if(!a.recaptchaSiteKey)throw new M("internal-error");}},bj={endpoint:"resetPassword",D:aj,fa:"email",F:!0},Qi={endpoint:"sendVerificationCode",V:["phoneNumber","recaptchaToken"],fa:"sessionInfo",F:!0},Li={endpoint:"setAccountInfo",V:["idToken"],
D:Di,T:!0},Kg={endpoint:"setAccountInfo",V:["idToken"],D:function(a){Di(a);if(!a.password)throw new M("weak-password");},K:Ii,T:!0},Ki={endpoint:"signupNewUser",K:Ii,T:!0,F:!0},Yi={endpoint:"verifyAssertion",D:Ui,Qa:Vi,K:Wi,T:!0,F:!0},$i={endpoint:"verifyAssertion",D:Ui,Qa:Vi,K:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new M("user-not-found");if(a.errorMessage)throw Xi(a.errorMessage);if(!a[lg])throw new M("internal-error");},T:!0,F:!0},Zi={endpoint:"verifyAssertion",D:function(a){Ui(a);
if(!a.idToken)throw new M("internal-error");},Qa:Vi,K:Wi,T:!0},ij={endpoint:"verifyCustomToken",D:function(a){if(!a.token)throw new M("invalid-custom-token");},K:Ii,T:!0,F:!0},Ig={endpoint:"verifyPassword",D:function(a){Ci(a);if(!a.password)throw new M("wrong-password");},K:Ii,T:!0,F:!0},Ri={endpoint:"verifyPhoneNumber",D:Ji,K:Ii,F:!0},Qg={endpoint:"verifyPhoneNumber",D:function(a){if(!a.idToken)throw new M("internal-error");Ji(a)},K:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",
eh(a);Ii(a)}},Rg={Yb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",D:Ji,K:Ii,F:!0};
function P(a,b,c){if(!bf(c,b.V))return E(new M("internal-error"));var d=b.Kb||"POST",e;return D(c).then(b.D).then(function(){b.T&&(c.returnSecureToken=!0);b.F&&a.b&&"undefined"===typeof c.tenantId&&(c.tenantId=a.b);return Bi(a,b.endpoint,d,c,b.Yb,b.wb||!1)}).then(function(f){e=f;return b.Qa?b.Qa(c,e):e}).then(b.K).then(function(){if(!b.fa)return e;if(!(b.fa in e))throw new M("internal-error");return e[b.fa]})}function Xi(a){return Ai({error:{errors:[{message:a}],code:400,message:a}})}
function Ai(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new M(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",
EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",
OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",
QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",UNSUPPORTED_TENANT_OPERATION:"unsupported-tenant-operation",
INVALID_TENANT_ID:"invalid-tenant-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation"};Wa(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new M(d[e],b);!b&&a&&(b=Ke(a));return new M("internal-error",b)};function jj(a){this.b=a;this.a=null;this.fb=kj(this)}
function kj(a){return lj().then(function(){return new B(function(b,c){J("gapi.iframes.getContext")().open({where:document.body,url:a.b,messageHandlersFilter:J("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(d){function e(){clearTimeout(f);b()}a.a=d;a.a.restyle({setHideOnLeave:!1});var f=setTimeout(function(){c(Error("Network Error"))},mj.get());d.ping(e).then(e,function(){c(Error("Network Error"))})})})})}
function nj(a,b){return a.fb.then(function(){return new B(function(c){a.a.send(b.type,b,c,J("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}function oj(a,b){a.fb.then(function(){a.a.register("authEvent",b,J("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}var pj=new Xa(Ya,"https://apis.google.com/js/api.js?onload=%{onload}"),qj=new Pe(3E4,6E4),mj=new Pe(5E3,15E3),rj=null;
function lj(){return rj?rj:rj=(new B(function(a,b){function c(){Oe();J("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Oe();b(Error("Network Error"))},timeout:qj.get()})}if(J("gapi.iframes.Iframe"))a();else if(J("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();l[d]=function(){J("gapi.load")?c():b(Error("Network Error"))};d=eb(pj,{onload:d});D(gi(d)).s(function(){b(Error("Network Error"))})}})).s(function(a){rj=null;throw a;})};function sj(a,b,c){this.i=a;this.g=b;this.h=c;this.f=null;this.a=Md(this.i,"/__/auth/iframe");H(this.a,"apiKey",this.g);H(this.a,"appName",this.h);this.b=null;this.c=[]}sj.prototype.toString=function(){this.f?H(this.a,"v",this.f):Sd(this.a.a,"v");this.b?H(this.a,"eid",this.b):Sd(this.a.a,"eid");this.c.length?H(this.a,"fw",this.c.join(",")):Sd(this.a.a,"fw");return this.a.toString()};function tj(a,b,c,d,e){this.o=a;this.m=b;this.c=c;this.u=d;this.i=this.g=this.l=null;this.a=e;this.h=this.f=null}
tj.prototype.nb=function(a){this.h=a;return this};
tj.prototype.toString=function(){var a=Md(this.o,"/__/auth/handler");H(a,"apiKey",this.m);H(a,"appName",this.c);H(a,"authType",this.u);if(this.a.isOAuthProvider){var b=this.a;try{var c=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(this.c).auth().ha()}catch(h){c=null}b.ab=c;H(a,"providerId",this.a.providerId);b=this.a;c=Le(b.zb);for(var d in c)c[d]=c[d].toString();d=b.Fc;c=Ua(c);for(var e=0;e<d.length;e++){var f=d[e];f in c&&delete c[f]}b.cb&&b.ab&&!c[b.cb]&&(c[b.cb]=b.ab);Ta(c)||H(a,"customParameters",Ke(c))}"function"===typeof this.a.Hb&&
(b=this.a.Hb(),b.length&&H(a,"scopes",b.join(",")));this.l?H(a,"redirectUrl",this.l):Sd(a.a,"redirectUrl");this.g?H(a,"eventId",this.g):Sd(a.a,"eventId");this.i?H(a,"v",this.i):Sd(a.a,"v");if(this.b)for(var g in this.b)this.b.hasOwnProperty(g)&&!Kd(a,g)&&H(a,g,this.b[g]);this.h?H(a,"tid",this.h):Sd(a.a,"tid");this.f?H(a,"eid",this.f):Sd(a.a,"eid");g=uj(this.c);g.length&&H(a,"fw",g.join(","));return a.toString()};function uj(a){try{return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(a).auth().Aa()}catch(b){return[]}}
function vj(a,b,c,d,e){this.u=a;this.f=b;this.b=c;this.c=d||null;this.h=e||null;this.m=this.o=this.v=null;this.g=[];this.l=this.a=null}
function wj(a){var b=he();return Gi(a).then(function(c){a:{var d=Ld(b),e=d.f;d=d.b;for(var f=0;f<c.length;f++){var g=c[f];var h=d;var m=e;0==g.indexOf("chrome-extension://")?h=Ld(g).b==h&&"chrome-extension"==m:"http"!=m&&"https"!=m?h=!1:se.test(g)?h=h==g:(g=g.split(".").join("\\."),h=(new RegExp("^(.+\\."+g+"|"+g+")$","i")).test(h));if(h){c=!0;break a}}c=!1}if(!c)throw new ch(he());})}
function xj(a){if(a.l)return a.l;a.l=ue().then(function(){if(!a.o){var b=a.c,c=a.h,d=uj(a.b),e=new sj(a.u,a.f,a.b);e.f=b;e.b=c;e.c=Ra(d||[]);a.o=e.toString()}a.i=new jj(a.o);yj(a)});return a.l}k=vj.prototype;k.Fb=function(a,b,c){var d=new M("popup-closed-by-user"),e=new M("web-storage-unsupported"),f=this,g=!1;return this.ia().then(function(){zj(f).then(function(h){h||(a&&oe(a),b(e),g=!0)})}).s(function(){}).then(function(){if(!g)return re(a)}).then(function(){if(!g)return nd(c).then(function(){b(d)})})};
k.Ob=function(){var a=I();return!Je(a)&&!Ne(a)};k.Jb=function(){return!1};
k.Db=function(a,b,c,d,e,f,g,h){if(!a)return E(new M("popup-blocked"));if(g&&!Je())return this.ia().s(function(p){oe(a);e(p)}),d(),D();this.a||(this.a=wj(Aj(this)));var m=this;return this.a.then(function(){var p=m.ia().s(function(u){oe(a);e(u);throw u;});d();return p}).then(function(){Xg(c);if(!g){var p=Bj(m.u,m.f,m.b,b,c,null,f,m.c,void 0,m.h,h);ie(p,a)}}).s(function(p){"auth/network-request-failed"==p.code&&(m.a=null);throw p;})};
function Aj(a){a.m||(a.v=a.c?Ee(a.c,uj(a.b)):null,a.m=new ni(a.f,Uf(a.h),a.v));return a.m}k.Eb=function(a,b,c,d){this.a||(this.a=wj(Aj(this)));var e=this;return this.a.then(function(){Xg(b);var f=Bj(e.u,e.f,e.b,a,b,he(),c,e.c,void 0,e.h,d);ie(f)}).s(function(f){"auth/network-request-failed"==f.code&&(e.a=null);throw f;})};k.ia=function(){var a=this;return xj(this).then(function(){return a.i.fb}).s(function(){a.a=null;throw new M("network-request-failed");})};k.Rb=function(){return!0};
function Bj(a,b,c,d,e,f,g,h,m,p,u){a=new tj(a,b,c,d,e);a.l=f;a.g=g;a.i=h;a.b=Ua(m||null);a.f=p;return a.nb(u).toString()}function yj(a){if(!a.i)throw Error("IfcHandler must be initialized!");oj(a.i,function(b){var c={};if(b&&b.authEvent){var d=!1;b=Zg(b.authEvent);for(c=0;c<a.g.length;c++)d=a.g[c](b)||d;c={};c.status=d?"ACK":"ERROR";return D(c)}c.status="ERROR";return D(c)})}
function zj(a){var b={type:"webStorageSupport"};return xj(a).then(function(){return nj(a.i,b)}).then(function(c){if(c&&c.length&&"undefined"!==typeof c[0].webStorageSupport)return c[0].webStorageSupport;throw Error();})}k.ya=function(a){this.g.push(a)};k.La=function(a){Pa(this.g,function(b){return b==a})};function Cj(a){this.a=a||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.reactNative&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.reactNative.AsyncStorage;if(!this.a)throw new M("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage"}k=Cj.prototype;k.get=function(a){return D(this.a.getItem(a)).then(function(b){return b&&Me(b)})};k.set=function(a,b){return D(this.a.setItem(a,Ke(b)))};k.S=function(a){return D(this.a.removeItem(a))};k.$=function(){};k.ea=function(){};function Dj(a){this.b=a;this.a={};this.f=t(this.c,this)}var Ej=[];function Fj(){var a=ze()?self:null;x(Ej,function(c){c.b==a&&(b=c)});if(!b){var b=new Dj(a);Ej.push(b)}return b}
Dj.prototype.c=function(a){var b=a.data.eventType,c=a.data.eventId,d=this.a[b];if(d&&0<d.length){a.ports[0].postMessage({status:"ack",eventId:c,eventType:b,response:null});var e=[];x(d,function(f){e.push(D().then(function(){return f(a.origin,a.data.data)}))});bc(e).then(function(f){var g=[];x(f,function(h){g.push({fulfilled:h.Gb,value:h.value,reason:h.reason?h.reason.message:void 0})});x(g,function(h){for(var m in h)"undefined"===typeof h[m]&&delete h[m]});a.ports[0].postMessage({status:"done",eventId:c,
eventType:b,response:g})})}};function Gj(a,b,c){Ta(a.a)&&a.b.addEventListener("message",a.f);"undefined"===typeof a.a[b]&&(a.a[b]=[]);a.a[b].push(c)};function Hj(a){this.a=a}Hj.prototype.postMessage=function(a,b){this.a.postMessage(a,b)};function Ij(a){this.c=a;this.b=!1;this.a=[]}
function Jj(a,b,c,d){var e,f=c||{},g,h,m,p=null;if(a.b)return E(Error("connection_unavailable"));var u=d?800:50,A="undefined"!==typeof MessageChannel?new MessageChannel:null;return(new B(function(C,N){A?(e=Math.floor(Math.random()*Math.pow(10,20)).toString(),A.port1.start(),h=setTimeout(function(){N(Error("unsupported_event"))},u),g=function(wa){wa.data.eventId===e&&("ack"===wa.data.status?(clearTimeout(h),m=setTimeout(function(){N(Error("timeout"))},3E3)):"done"===wa.data.status?(clearTimeout(m),
"undefined"!==typeof wa.data.response?C(wa.data.response):N(Error("unknown_error"))):(clearTimeout(h),clearTimeout(m),N(Error("invalid_response"))))},p={messageChannel:A,onMessage:g},a.a.push(p),A.port1.addEventListener("message",g),a.c.postMessage({eventType:b,eventId:e,data:f},[A.port2])):N(Error("connection_unavailable"))})).then(function(C){Kj(a,p);return C}).s(function(C){Kj(a,p);throw C;})}
function Kj(a,b){if(b){var c=b.messageChannel,d=b.onMessage;c&&(c.port1.removeEventListener("message",d),c.port1.close());Pa(a.a,function(e){return e==b})}}Ij.prototype.close=function(){for(;0<this.a.length;)Kj(this,this.a[0]);this.b=!0};function Lj(){if(!Mj())throw new M("web-storage-unsupported");this.c={};this.a=[];this.b=0;this.u=l.indexedDB;this.type="indexedDB";this.g=this.l=this.f=this.i=null;this.o=!1;this.h=null;var a=this;ze()&&self?(this.l=Fj(),Gj(this.l,"keyChanged",function(b,c){return Nj(a).then(function(d){0<d.length&&x(a.a,function(e){e(d)});return{keyProcessed:Na(d,c.key)}})}),Gj(this.l,"ping",function(){return D(["keyChanged"])})):Ve().then(function(b){if(a.h=b)a.g=new Ij(new Hj(b)),Jj(a.g,"ping",null,!0).then(function(c){c[0].fulfilled&&
Na(c[0].value,"keyChanged")&&(a.o=!0)}).s(function(){})})}var Oj;function Pj(a){return new B(function(b,c){var d=a.u.deleteDatabase("firebaseLocalStorageDb");d.onsuccess=function(){b()};d.onerror=function(e){c(Error(e.target.error))}})}
function Qj(a){return new B(function(b,c){var d=a.u.open("firebaseLocalStorageDb",1);d.onerror=function(e){try{e.preventDefault()}catch(f){}c(Error(e.target.error))};d.onupgradeneeded=function(e){e=e.target.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(f){c(f)}};d.onsuccess=function(e){e=e.target.result;e.objectStoreNames.contains("firebaseLocalStorage")?b(e):Pj(a).then(function(){return Qj(a)}).then(function(f){b(f)}).s(function(f){c(f)})}})}
function Rj(a){a.m||(a.m=Qj(a));return a.m}function Mj(){try{return!!l.indexedDB}catch(a){return!1}}function Sj(a){return a.objectStore("firebaseLocalStorage")}function Tj(a,b){return a.transaction(["firebaseLocalStorage"],b?"readwrite":"readonly")}function Uj(a){return new B(function(b,c){a.onsuccess=function(d){d&&d.target?b(d.target.result):b()};a.onerror=function(d){c(d.target.error)}})}k=Lj.prototype;
k.set=function(a,b){var c=!1,d,e=this;return Rj(this).then(function(f){d=f;f=Sj(Tj(d,!0));return Uj(f.get(a))}).then(function(f){var g=Sj(Tj(d,!0));if(f)return f.value=b,Uj(g.put(f));e.b++;c=!0;f={};f.fbase_key=a;f.value=b;return Uj(g.add(f))}).then(function(){e.c[a]=b;return Vj(e,a)}).ka(function(){c&&e.b--})};function Vj(a,b){return a.g&&a.h&&Ue()===a.h?Jj(a.g,"keyChanged",{key:b},a.o).then(function(){}).s(function(){}):D()}
k.get=function(a){return Rj(this).then(function(b){return Uj(Sj(Tj(b,!1)).get(a))}).then(function(b){return b&&b.value})};k.S=function(a){var b=!1,c=this;return Rj(this).then(function(d){b=!0;c.b++;return Uj(Sj(Tj(d,!0))["delete"](a))}).then(function(){delete c.c[a];return Vj(c,a)}).ka(function(){b&&c.b--})};
function Nj(a){return Rj(a).then(function(b){var c=Sj(Tj(b,!1));return c.getAll?Uj(c.getAll()):new B(function(d,e){var f=[],g=c.openCursor();g.onsuccess=function(h){(h=h.target.result)?(f.push(h.value),h["continue"]()):d(f)};g.onerror=function(h){e(h.target.error)}})}).then(function(b){var c={},d=[];if(0==a.b){for(d=0;d<b.length;d++)c[b[d].fbase_key]=b[d].value;d=je(a.c,c);a.c=c}return d})}k.$=function(a){0==this.a.length&&Wj(this);this.a.push(a)};
k.ea=function(a){Pa(this.a,function(b){return b==a});0==this.a.length&&Xj(this)};function Wj(a){function b(){a.f=setTimeout(function(){a.i=Nj(a).then(function(c){0<c.length&&x(a.a,function(d){d(c)})}).then(function(){b()}).s(function(c){"STOP_EVENT"!=c.message&&b()})},800)}Xj(a);b()}function Xj(a){a.i&&a.i.cancel("STOP_EVENT");a.f&&(clearTimeout(a.f),a.f=null)};function Yj(a){var b=this,c=null;this.a=[];this.type="indexedDB";this.c=a;this.b=D().then(function(){if(Mj()){var d=Ge(),e="__sak"+d;Oj||(Oj=new Lj);c=Oj;return c.set(e,d).then(function(){return c.get(e)}).then(function(f){if(f!==d)throw Error("indexedDB not supported!");return c.S(e)}).then(function(){return c}).s(function(){return b.c})}return b.c}).then(function(d){b.type=d.type;d.$(function(e){x(b.a,function(f){f(e)})});return d})}k=Yj.prototype;k.get=function(a){return this.b.then(function(b){return b.get(a)})};
k.set=function(a,b){return this.b.then(function(c){return c.set(a,b)})};k.S=function(a){return this.b.then(function(b){return b.S(a)})};k.$=function(a){this.a.push(a)};k.ea=function(a){Pa(this.a,function(b){return b==a})};function Zj(){this.a={};this.type="inMemory"}k=Zj.prototype;k.get=function(a){return D(this.a[a])};k.set=function(a,b){this.a[a]=b;return D()};k.S=function(a){delete this.a[a];return D()};k.$=function(){};k.ea=function(){};function ak(){if(!bk()){if("Node"==Ae())throw new M("internal-error","The LocalStorage compatibility library was not found.");throw new M("web-storage-unsupported");}this.a=ck()||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.localStorage;this.type="localStorage"}function ck(){try{var a=l.localStorage,b=Ge();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function bk(){var a="Node"==Ae();a=ck()||a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}k=ak.prototype;k.get=function(a){var b=this;return D().then(function(){var c=b.a.getItem(a);return Me(c)})};k.set=function(a,b){var c=this;return D().then(function(){var d=Ke(b);null===d?c.S(a):c.a.setItem(a,d)})};k.S=function(a){var b=this;return D().then(function(){b.a.removeItem(a)})};
k.$=function(a){l.window&&Wc(l.window,"storage",a)};k.ea=function(a){l.window&&fd(l.window,"storage",a)};function dk(){this.type="nullStorage"}k=dk.prototype;k.get=function(){return D(null)};k.set=function(){return D()};k.S=function(){return D()};k.$=function(){};k.ea=function(){};function ek(){if(!fk()){if("Node"==Ae())throw new M("internal-error","The SessionStorage compatibility library was not found.");throw new M("web-storage-unsupported");}this.a=gk()||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.sessionStorage;this.type="sessionStorage"}function gk(){try{var a=l.sessionStorage,b=Ge();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function fk(){var a="Node"==Ae();a=gk()||a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}k=ek.prototype;k.get=function(a){var b=this;return D().then(function(){var c=b.a.getItem(a);return Me(c)})};k.set=function(a,b){var c=this;return D().then(function(){var d=Ke(b);null===d?c.S(a):c.a.setItem(a,d)})};k.S=function(a){var b=this;return D().then(function(){b.a.removeItem(a)})};k.$=function(){};
k.ea=function(){};function hk(){var a={};a.Browser=ik;a.Node=jk;a.ReactNative=kk;a.Worker=lk;this.a=a[Ae()]}var mk,ik={C:ak,Sa:ek},jk={C:ak,Sa:ek},kk={C:Cj,Sa:dk},lk={C:ak,Sa:dk};var nk={$c:"local",NONE:"none",bd:"session"};function ok(a){var b=new M("invalid-persistence-type"),c=new M("unsupported-persistence-type");a:{for(d in nk)if(nk[d]==a){var d=!0;break a}d=!1}if(!d||"string"!==typeof a)throw b;switch(Ae()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;default:if(!Fe()&&"none"!==a)throw c;}}
function pk(){var a=!Ne(I())&&ye()?!0:!1,b=Je(),c=Fe();this.m=a;this.h=b;this.l=c;this.a={};mk||(mk=new hk);a=mk;try{this.g=!ge()&&Te()||!l.indexedDB?new a.a.C:new Yj(ze()?new Zj:new a.a.C)}catch(d){this.g=new Zj,this.h=!0}try{this.i=new a.a.Sa}catch(d){this.i=new Zj}this.u=new Zj;this.f=t(this.Pb,this);this.b={}}var qk;function rk(){qk||(qk=new pk);return qk}function sk(a,b){switch(b){case "session":return a.i;case "none":return a.u;default:return a.g}}
function tk(a,b){return"firebase:"+a.name+(b?":"+b:"")}function uk(a,b,c){var d=tk(b,c),e=sk(a,b.C);return a.get(b,c).then(function(f){var g=null;try{g=Me(l.localStorage.getItem(d))}catch(h){}if(g&&!f)return l.localStorage.removeItem(d),a.set(b,g,c);g&&f&&"localStorage"!=e.type&&l.localStorage.removeItem(d)})}k=pk.prototype;k.get=function(a,b){return sk(this,a.C).get(tk(a,b))};function vk(a,b,c){c=tk(b,c);"local"==b.C&&(a.b[c]=null);return sk(a,b.C).S(c)}
k.set=function(a,b,c){var d=tk(a,c),e=this,f=sk(this,a.C);return f.set(d,b).then(function(){return f.get(d)}).then(function(g){"local"==a.C&&(e.b[d]=g)})};k.addListener=function(a,b,c){a=tk(a,b);this.l&&(this.b[a]=l.localStorage.getItem(a));Ta(this.a)&&(sk(this,"local").$(this.f),this.h||(ge()||!Te())&&l.indexedDB||!this.l||wk(this));this.a[a]||(this.a[a]=[]);this.a[a].push(c)};
k.removeListener=function(a,b,c){a=tk(a,b);this.a[a]&&(Pa(this.a[a],function(d){return d==c}),0==this.a[a].length&&delete this.a[a]);Ta(this.a)&&(sk(this,"local").ea(this.f),xk(this))};function wk(a){xk(a);a.c=setInterval(function(){for(var b in a.a){var c=l.localStorage.getItem(b),d=a.b[b];c!=d&&(a.b[b]=c,c=new Kc({type:"storage",key:b,target:window,oldValue:d,newValue:c,a:!0}),a.Pb(c))}},1E3)}function xk(a){a.c&&(clearInterval(a.c),a.c=null)}
k.Pb=function(a){if(a&&a.f){var b=a.a.key;if(null==b)for(var c in this.a){var d=this.b[c];"undefined"===typeof d&&(d=null);var e=l.localStorage.getItem(c);e!==d&&(this.b[c]=e,this.Za(c))}else if(0==b.indexOf("firebase:")&&this.a[b]){"undefined"!==typeof a.a.a?sk(this,"local").ea(this.f):xk(this);if(this.m)if(c=l.localStorage.getItem(b),d=a.a.newValue,d!==c)null!==d?l.localStorage.setItem(b,d):l.localStorage.removeItem(b);else if(this.b[b]===d&&"undefined"===typeof a.a.a)return;var f=this;c=function(){if("undefined"!==
typeof a.a.a||f.b[b]!==l.localStorage.getItem(b))f.b[b]=l.localStorage.getItem(b),f.Za(b)};uc&&Fc&&10==Fc&&l.localStorage.getItem(b)!==a.a.newValue&&a.a.newValue!==a.a.oldValue?setTimeout(c,10):c()}}else x(a,t(this.Za,this))};k.Za=function(a){this.a[a]&&x(this.a[a],function(b){b()})};function yk(a){this.a=a;this.b=rk()}var zk={name:"authEvent",C:"local"};function Ak(a){return a.b.get(zk,a.a).then(function(b){return Zg(b)})};function Bk(){this.a=rk()};function Ck(){this.b=-1};function Dk(a,b){this.b=Ek;this.f=l.Uint8Array?new Uint8Array(this.b):Array(this.b);this.g=this.c=0;this.a=[];this.i=a;this.h=b;this.l=l.Int32Array?new Int32Array(64):Array(64);void 0!==Fk||(l.Int32Array?Fk=new Int32Array(Gk):Fk=Gk);this.reset()}var Fk;v(Dk,Ck);for(var Ek=64,Hk=Ek-1,Ik=[],Jk=0;Jk<Hk;Jk++)Ik[Jk]=0;var Kk=Qa(128,Ik);Dk.prototype.reset=function(){this.g=this.c=0;this.a=l.Int32Array?new Int32Array(this.h):Ra(this.h)};
function Lk(a){for(var b=a.f,c=a.l,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,g=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+g|0}d=a.a[0]|0;e=a.a[1]|0;var h=a.a[2]|0,m=a.a[3]|0,p=a.a[4]|0,u=a.a[5]|0,A=a.a[6]|0;f=a.a[7]|0;for(b=0;64>b;b++){var C=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&h^e&h)|0;g=p&u^~p&A;f=f+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<
7))|0;g=g+(Fk[b]|0)|0;g=f+(g+(c[b]|0)|0)|0;f=A;A=u;u=p;p=m+g|0;m=h;h=e;e=d;d=g+C|0}a.a[0]=a.a[0]+d|0;a.a[1]=a.a[1]+e|0;a.a[2]=a.a[2]+h|0;a.a[3]=a.a[3]+m|0;a.a[4]=a.a[4]+p|0;a.a[5]=a.a[5]+u|0;a.a[6]=a.a[6]+A|0;a.a[7]=a.a[7]+f|0}
function Mk(a,b,c){void 0===c&&(c=b.length);var d=0,e=a.c;if(n(b))for(;d<c;)a.f[e++]=b.charCodeAt(d++),e==a.b&&(Lk(a),e=0);else if(oa(b))for(;d<c;){var f=b[d++];if(!("number"==typeof f&&0<=f&&255>=f&&f==(f|0)))throw Error("message must be a byte array");a.f[e++]=f;e==a.b&&(Lk(a),e=0)}else throw Error("message must be string or array");a.c=e;a.g+=c}
var Gk=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function Nk(){Dk.call(this,8,Ok)}v(Nk,Dk);var Ok=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function Pk(a,b,c,d,e){this.u=a;this.i=b;this.l=c;this.m=d||null;this.o=e||null;this.h=b+":"+c;this.v=new Bk;this.g=new yk(this.h);this.f=null;this.b=[];this.a=this.c=null}function Qk(a){return new M("invalid-cordova-configuration",a)}k=Pk.prototype;
k.ia=function(){return this.Ba?this.Ba:this.Ba=ve().then(function(){if("function"!==typeof J("universalLinks.subscribe",l))throw Qk("cordova-universal-links-plugin-fix is not installed");if("undefined"===typeof J("BuildInfo.packageName",l))throw Qk("cordova-plugin-buildinfo is not installed");if("function"!==typeof J("cordova.plugins.browsertab.openUrl",l))throw Qk("cordova-plugin-browsertab is not installed");if("function"!==typeof J("cordova.InAppBrowser.open",l))throw Qk("cordova-plugin-inappbrowser is not installed");
},function(){throw new M("cordova-not-ready");})};function Rk(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function Sk(a){var b=new Nk;Mk(b,a);a=[];var c=8*b.g;56>b.c?Mk(b,Kk,56-b.c):Mk(b,Kk,b.b-(b.c-56));for(var d=63;56<=d;d--)b.f[d]=c&255,c/=256;Lk(b);for(d=c=0;d<b.i;d++)for(var e=24;0<=e;e-=8)a[c++]=b.a[d]>>e&255;return Kf(a)}
k.Fb=function(a,b){b(new M("operation-not-supported-in-this-environment"));return D()};k.Db=function(){return E(new M("operation-not-supported-in-this-environment"))};k.Rb=function(){return!1};k.Ob=function(){return!0};k.Jb=function(){return!0};
k.Eb=function(a,b,c,d){if(this.c)return E(new M("redirect-operation-pending"));var e=this,f=l.document,g=null,h=null,m=null,p=null;return this.c=D().then(function(){Xg(b);return Tk(e)}).then(function(){return Uk(e,a,b,c,d)}).then(function(){return(new B(function(u,A){h=function(){var C=J("cordova.plugins.browsertab.close",l);u();"function"===typeof C&&C();e.a&&"function"===typeof e.a.close&&(e.a.close(),e.a=null);return!1};e.ya(h);m=function(){g||(g=nd(2E3).then(function(){A(new M("redirect-cancelled-by-user"))}))};
p=function(){Qe()&&m()};f.addEventListener("resume",m,!1);I().toLowerCase().match(/android/)||f.addEventListener("visibilitychange",p,!1)})).s(function(u){return Vk(e).then(function(){throw u;})})}).ka(function(){m&&f.removeEventListener("resume",m,!1);p&&f.removeEventListener("visibilitychange",p,!1);g&&g.cancel();h&&e.La(h);e.c=null})};
function Uk(a,b,c,d,e){var f=Rk(),g=new Yg(b,d,null,f,new M("no-auth-event"),null,e),h=J("BuildInfo.packageName",l);if("string"!==typeof h)throw new M("invalid-cordova-configuration");var m=J("BuildInfo.displayName",l),p={};if(I().toLowerCase().match(/iphone|ipad|ipod/))p.ibi=h;else if(I().toLowerCase().match(/android/))p.apn=h;else return E(new M("operation-not-supported-in-this-environment"));m&&(p.appDisplayName=m);f=Sk(f);p.sessionId=f;var u=Bj(a.u,a.i,a.l,b,c,null,d,a.m,p,a.o,e);return a.ia().then(function(){var A=
a.h;return a.v.a.set(zk,g.A(),A)}).then(function(){var A=J("cordova.plugins.browsertab.isAvailable",l);if("function"!==typeof A)throw new M("invalid-cordova-configuration");var C=null;A(function(N){if(N){C=J("cordova.plugins.browsertab.openUrl",l);if("function"!==typeof C)throw new M("invalid-cordova-configuration");C(u)}else{C=J("cordova.InAppBrowser.open",l);if("function"!==typeof C)throw new M("invalid-cordova-configuration");N=I();a.a=C(u,N.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||N.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?
"_blank":"_system","location=yes")}})})}function Wk(a,b){for(var c=0;c<a.b.length;c++)try{a.b[c](b)}catch(d){}}function Tk(a){a.f||(a.f=a.ia().then(function(){return new B(function(b){function c(d){b(d);a.La(c);return!1}a.ya(c);Xk(a)})}));return a.f}function Vk(a){var b=null;return Ak(a.g).then(function(c){b=c;c=a.g;return vk(c.b,zk,c.a)}).then(function(){return b})}
function Xk(a){function b(g){d=!0;e&&e.cancel();Vk(a).then(function(h){var m=c;if(h&&g&&g.url){var p=null;m=ig(g.url);-1!=m.indexOf("/__/auth/callback")&&(p=Ld(m),p=Me(Kd(p,"firebaseError")||null),p=(p="object"===typeof p?pf(p):null)?new Yg(h.c,h.b,null,null,p,null,h.R()):new Yg(h.c,h.b,m,h.f,null,null,h.R()));m=p||c}Wk(a,m)})}var c=new Yg("unknown",null,null,null,new M("no-auth-event")),d=!1,e=nd(500).then(function(){return Vk(a).then(function(){d||Wk(a,c)})}),f=l.handleOpenURL;l.handleOpenURL=function(g){0==
g.toLowerCase().indexOf(J("BuildInfo.packageName",l).toLowerCase()+"://")&&b({url:g});if("function"===typeof f)try{f(g)}catch(h){console.error(h)}};ah||(ah=new $g);bh(b)}k.ya=function(a){this.b.push(a);Tk(this).s(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new Yg("unknown",null,null,null,new M("no-auth-event")),a(b))})};k.La=function(a){Pa(this.b,function(b){return b==a})};function Yk(a){this.a=a;this.b=rk()}var Zk={name:"pendingRedirect",C:"session"};function $k(a){return a.b.set(Zk,"pending",a.a)}function al(a){return vk(a.b,Zk,a.a)}function bl(a){return a.b.get(Zk,a.a).then(function(b){return"pending"==b})};function cl(a,b,c){this.i={};this.v=0;this.B=a;this.u=b;this.m=c;this.h=[];this.f=!1;this.l=t(this.o,this);this.b=new dl;this.w=new el;this.g=new Yk(this.u+":"+this.m);this.c={};this.c.unknown=this.b;this.c.signInViaRedirect=this.b;this.c.linkViaRedirect=this.b;this.c.reauthViaRedirect=this.b;this.c.signInViaPopup=this.w;this.c.linkViaPopup=this.w;this.c.reauthViaPopup=this.w;this.a=fl(this.B,this.u,this.m,Vf)}
function fl(a,b,c,d){var e=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION||null;return we()?new Pk(a,b,c,e,d):new vj(a,b,c,e,d)}cl.prototype.reset=function(){this.f=!1;this.a.La(this.l);this.a=fl(this.B,this.u,this.m);this.i={}};function gl(a){a.f||(a.f=!0,a.a.ya(a.l));var b=a.a;return a.a.ia().s(function(c){a.a==b&&a.reset();throw c;})}function hl(a){a.a.Ob()&&gl(a).s(function(b){var c=new Yg("unknown",null,null,null,new M("operation-not-supported-in-this-environment"));il(b)&&a.o(c)});a.a.Jb()||jl(a.b)}
function kl(a,b){Na(a.h,b)||a.h.push(b);a.f||bl(a.g).then(function(c){c?al(a.g).then(function(){gl(a).s(function(d){var e=new Yg("unknown",null,null,null,new M("operation-not-supported-in-this-environment"));il(d)&&a.o(e)})}):hl(a)}).s(function(){hl(a)})}function ll(a,b){Pa(a.h,function(c){return c==b})}
cl.prototype.o=function(a){if(!a)throw new M("invalid-auth-event");6E5<=ua()-this.v&&(this.i={},this.v=0);if(a&&a.getUid()&&this.i.hasOwnProperty(a.getUid()))return!1;for(var b=!1,c=0;c<this.h.length;c++){var d=this.h[c];if(d.xb(a.c,a.b)){if(b=this.c[a.c])b.h(a,d),a&&(a.f||a.b)&&(this.i[a.getUid()]=!0,this.v=ua());b=!0;break}}jl(this.b);return b};var ml=new Pe(2E3,1E4),nl=new Pe(3E4,6E4);cl.prototype.oa=function(){return this.b.oa()};
function ol(a,b,c,d,e,f,g){return a.a.Db(b,c,d,function(){a.f||(a.f=!0,a.a.ya(a.l))},function(){a.reset()},e,f,g)}function il(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1}
function pl(a,b,c,d,e){var f;return $k(a.g).then(function(){return a.a.Eb(b,c,d,e).s(function(g){if(il(g))throw new M("operation-not-supported-in-this-environment");f=g;return al(a.g).then(function(){throw f;})}).then(function(){return a.a.Rb()?new B(function(){}):al(a.g).then(function(){return a.oa()}).then(function(){}).s(function(){})})})}function ql(a,b,c,d,e){return a.a.Fb(d,function(f){b.ja(c,null,f,e)},ml.get())}var rl={};
function sl(a,b,c){var d=b+":"+c;rl[d]||(rl[d]=new cl(a,b,c));return rl[d]}function dl(){this.b=null;this.f=[];this.c=[];this.a=null;this.i=this.g=!1}dl.prototype.reset=function(){this.b=null;this.a&&(this.a.cancel(),this.a=null)};
dl.prototype.h=function(a,b){if(a){this.reset();this.g=!0;var c=a.c,d=a.b,e=a.a&&"auth/web-storage-unsupported"==a.a.code,f=a.a&&"auth/operation-not-supported-in-this-environment"==a.a.code;this.i=!(!e&&!f);"unknown"!=c||e||f?a.a?(tl(this,!0,null,a.a),D()):b.za(c,d)?ul(this,a,b):E(new M("invalid-auth-event")):(tl(this,!1,null,null),D())}else E(new M("invalid-auth-event"))};function jl(a){a.g||(a.g=!0,tl(a,!1,null,null))}function vl(a){a.g&&!a.i&&tl(a,!1,null,null)}
function ul(a,b,c){c=c.za(b.c,b.b);var d=b.g,e=b.f,f=b.i,g=b.R(),h=!!b.c.match(/Redirect$/);c(d,e,g,f).then(function(m){tl(a,h,m,null)}).s(function(m){tl(a,h,null,m)})}function wl(a,b){a.b=function(){return E(b)};if(a.c.length)for(var c=0;c<a.c.length;c++)a.c[c](b)}function xl(a,b){a.b=function(){return D(b)};if(a.f.length)for(var c=0;c<a.f.length;c++)a.f[c](b)}function tl(a,b,c,d){b?d?wl(a,d):xl(a,c):xl(a,{user:null});a.f=[];a.c=[]}
dl.prototype.oa=function(){var a=this;return new B(function(b,c){a.b?a.b().then(b,c):(a.f.push(b),a.c.push(c),yl(a))})};function yl(a){var b=new M("timeout");a.a&&a.a.cancel();a.a=nd(nl.get()).then(function(){a.b||(a.g=!0,tl(a,!0,null,b))})}function el(){}el.prototype.h=function(a,b){if(a){var c=a.c,d=a.b;a.a?(b.ja(a.c,null,a.a,a.b),D()):b.za(c,d)?zl(a,b):E(new M("invalid-auth-event"))}else E(new M("invalid-auth-event"))};
function zl(a,b){var c=a.b,d=a.c;b.za(d,c)(a.g,a.f,a.R(),a.i).then(function(e){b.ja(d,e,null,c)}).s(function(e){b.ja(d,null,e,c)})};function Al(){this.vb=!1;Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.vb},set:function(a){this.vb=a},enumerable:!1})};function Bl(a,b){this.a=b;K(this,"verificationId",a)}Bl.prototype.confirm=function(a){a=Vg(this.verificationId,a);return this.a(a)};function Cl(a,b,c,d){return(new Tg(a)).Va(b,c).then(function(e){return new Bl(e,d)})};function Dl(a){var b=Sf(a);if(!(b&&b.exp&&b.auth_time&&b.iat))throw new M("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");L(this,{token:a,expirationTime:Se(1E3*b.exp),authTime:Se(1E3*b.auth_time),issuedAtTime:Se(1E3*b.iat),signInProvider:b.firebase&&b.firebase.sign_in_provider?b.firebase.sign_in_provider:null,claims:b})};function El(a,b,c){this.h=a;this.i=b;this.g=c;this.c=3E4;this.f=96E4;this.b=null;this.a=this.c;if(this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!");}El.prototype.start=function(){this.a=this.c;Fl(this,!0)};function Gl(a,b){if(b)return a.a=a.c,a.g();b=a.a;a.a*=2;a.a>a.f&&(a.a=a.f);return b}function Fl(a,b){a.stop();a.b=nd(Gl(a,b)).then(function(){return Re()}).then(function(){return a.h()}).then(function(){Fl(a,!0)}).s(function(c){a.i(c)&&Fl(a,!1)})}
El.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)};function Hl(a){this.f=a;this.b=this.a=null;this.c=0}Hl.prototype.A=function(){return{apiKey:this.f.c,refreshToken:this.a,accessToken:this.b,expirationTime:this.c}};function Il(a,b){var c=b[lg],d=b.refreshToken;b=Jl(b.expiresIn);a.b=c;a.c=b;a.a=d}function Kl(a,b){a.b=b.b;a.a=b.a;a.c=b.c}function Jl(a){return ua()+1E3*parseInt(a,10)}
function Ll(a,b){return zi(a.f,b).then(function(c){a.b=c.access_token;a.c=Jl(c.expires_in);a.a=c.refresh_token;return{accessToken:a.b,expirationTime:a.c,refreshToken:a.a}}).s(function(c){"auth/user-token-expired"==c.code&&(a.a=null);throw c;})}Hl.prototype.getToken=function(a){a=!!a;return this.b&&!this.a?E(new M("user-token-expired")):a||!this.b||ua()>this.c-3E4?this.a?Ll(this,{grant_type:"refresh_token",refresh_token:this.a}):D(null):D({accessToken:this.b,expirationTime:this.c,refreshToken:this.a})};function Ml(a,b){this.a=a||null;this.b=b||null;L(this,{lastSignInTime:Se(b||null),creationTime:Se(a||null)})}function Nl(a){return new Ml(a.a,a.b)}Ml.prototype.A=function(){return{lastLoginAt:this.b,createdAt:this.a}};function Ol(a,b,c,d,e,f){L(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b})}function Pl(a,b){F.call(this,a);for(var c in b)this[c]=b[c]}v(Pl,F);
function Q(a,b,c){this.I=[];this.l=a.apiKey;this.m=a.appName;this.o=a.authDomain||null;a=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?Ee(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION):null;this.a=new ni(this.l,Uf(Vf),a);this.b=new Hl(this.a);Ql(this,b[lg]);Il(this.b,b);K(this,"refreshToken",this.b.a);Rl(this,c||{});G.call(this);this.J=!1;this.o&&He()&&(this.i=sl(this.o,this.l,this.m));this.O=[];this.h=null;this.w=Sl(this);this.W=t(this.Ha,this);var d=this;this.ga=null;this.va=function(e){d.sa(e.g)};this.Z=null;this.P=[];this.ua=function(e){Tl(d,
e.c)};this.Y=null}v(Q,G);Q.prototype.sa=function(a){this.ga=a;ti(this.a,a)};Q.prototype.ha=function(){return this.ga};function Ul(a,b){a.Z&&fd(a.Z,"languageCodeChanged",a.va);(a.Z=b)&&Wc(b,"languageCodeChanged",a.va)}function Tl(a,b){a.P=b;ui(a.a,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?Ee(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION,a.P):null)}Q.prototype.Aa=function(){return Ra(this.P)};function Vl(a,b){a.Y&&fd(a.Y,"frameworkChanged",a.ua);(a.Y=b)&&Wc(b,"frameworkChanged",a.ua)}Q.prototype.Ha=function(){this.w.b&&(this.w.stop(),this.w.start())};
function Wl(a){try{return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(a.m).auth()}catch(b){throw new M("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.m+"'!");}}function Sl(a){return new El(function(){return a.G(!0)},function(b){return b&&"auth/network-request-failed"==b.code?!0:!1},function(){var b=a.b.c-ua()-3E5;return 0<b?b:0})}function Xl(a){a.B||a.w.b||(a.w.start(),fd(a,"tokenChanged",a.W),Wc(a,"tokenChanged",a.W))}function Yl(a){fd(a,"tokenChanged",a.W);a.w.stop()}
function Ql(a,b){a.ma=b;K(a,"_lat",b)}function Zl(a,b){Pa(a.O,function(c){return c==b})}function $l(a){for(var b=[],c=0;c<a.O.length;c++)b.push(a.O[c](a));return bc(b).then(function(){return a})}function am(a){a.i&&!a.J&&(a.J=!0,kl(a.i,a))}
function Rl(a,b){L(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,tenantId:b.tenantId||null,metadata:new Ml(b.createdAt,b.lastLoginAt),providerData:[]});a.a.b=a.tenantId}K(Q.prototype,"providerId","firebase");function bm(){}function cm(a){return D().then(function(){if(a.B)throw new M("app-deleted");})}
function dm(a){return Ja(a.providerData,function(b){return b.providerId})}function em(a,b){b&&(fm(a,b.providerId),a.providerData.push(b))}function fm(a,b){Pa(a.providerData,function(c){return c.providerId==b})}function gm(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&K(a,b,c)}
function hm(a,b){a!=b&&(L(a,{uid:b.uid,displayName:b.displayName,photoURL:b.photoURL,email:b.email,emailVerified:b.emailVerified,phoneNumber:b.phoneNumber,isAnonymous:b.isAnonymous,tenantId:b.tenantId,providerData:[]}),b.metadata?K(a,"metadata",Nl(b.metadata)):K(a,"metadata",new Ml),x(b.providerData,function(c){em(a,c)}),Kl(a.b,b.b),K(a,"refreshToken",a.b.a))}k=Q.prototype;k.reload=function(){var a=this;return R(this,cm(this).then(function(){return im(a).then(function(){return $l(a)}).then(bm)}))};
function im(a){return a.G().then(function(b){var c=a.isAnonymous;return jm(a,b).then(function(){c||gm(a,"isAnonymous",!1);return b})})}k.dc=function(a){return this.G(a).then(function(b){return new Dl(b)})};k.G=function(a){var b=this;return R(this,cm(this).then(function(){return b.b.getToken(a)}).then(function(c){if(!c)throw new M("internal-error");c.accessToken!=b.ma&&(Ql(b,c.accessToken),b.dispatchEvent(new Pl("tokenChanged")));gm(b,"refreshToken",c.refreshToken);return c.accessToken}))};
function km(a,b){b[lg]&&a.ma!=b[lg]&&(Il(a.b,b),a.dispatchEvent(new Pl("tokenChanged")),Ql(a,b[lg]),gm(a,"refreshToken",a.b.a))}function jm(a,b){return P(a.a,gj,{idToken:b}).then(t(a.zc,a))}
k.zc=function(a){a=a.users;if(!a||!a.length)throw new M("internal-error");a=a[0];Rl(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber,lastLoginAt:a.lastLoginAt,createdAt:a.createdAt,tenantId:a.tenantId});for(var b=lm(a),c=0;c<b.length;c++)em(this,b[c]);gm(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
function lm(a){return(a=a.providerUserInfo)&&a.length?Ja(a,function(b){return new Ol(b.rawId,b.providerId,b.email,b.displayName,b.photoUrl,b.phoneNumber)}):[]}k.Ac=function(a){Xe("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");return this.gb(a)};
k.gb=function(a){var b=this,c=null;return R(this,a.f(this.a,this.uid).then(function(d){km(b,d);c=mm(b,d,"reauthenticate");b.h=null;return b.reload()}).then(function(){return c}),!0)};function nm(a,b){return im(a).then(function(){if(Na(dm(a),b))return $l(a).then(function(){throw new M("provider-already-linked");})})}k.rc=function(a){Xe("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");return this.eb(a)};
k.eb=function(a){var b=this,c=null;return R(this,nm(this,a.providerId).then(function(){return b.G()}).then(function(d){return a.b(b.a,d)}).then(function(d){c=mm(b,d,"link");return om(b,d)}).then(function(){return c}))};k.sc=function(a,b){var c=this;return R(this,nm(this,"phone").then(function(){return Cl(Wl(c),a,b,t(c.eb,c))}))};k.Bc=function(a,b){var c=this;return R(this,D().then(function(){return Cl(Wl(c),a,b,t(c.gb,c))}),!0)};
function mm(a,b,c){var d=Wg(b);b=$f(b);return $e({user:a,credential:d,additionalUserInfo:b,operationType:c})}function om(a,b){km(a,b);return a.reload().then(function(){return a})}k.rb=function(a){var b=this;return R(this,this.G().then(function(c){return b.a.rb(c,a)}).then(function(c){km(b,c);return b.reload()}))};k.Sc=function(a){var b=this;return R(this,this.G().then(function(c){return a.b(b.a,c)}).then(function(c){km(b,c);return b.reload()}))};
k.sb=function(a){var b=this;return R(this,this.G().then(function(c){return b.a.sb(c,a)}).then(function(c){km(b,c);return b.reload()}))};
k.tb=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return cm(this);var b=this;return R(this,this.G().then(function(c){return b.a.tb(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(c){km(b,c);gm(b,"displayName",c.displayName||null);gm(b,"photoURL",c.photoUrl||null);x(b.providerData,function(d){"password"===d.providerId&&(K(d,"displayName",b.displayName),K(d,"photoURL",b.photoURL))});return $l(b)}).then(bm))};
k.Qc=function(a){var b=this;return R(this,im(this).then(function(c){return Na(dm(b),a)?Si(b.a,c,[a]).then(function(d){var e={};x(d.providerUserInfo||[],function(f){e[f.providerId]=!0});x(dm(b),function(f){e[f]||fm(b,f)});e[Tg.PROVIDER_ID]||K(b,"phoneNumber",null);return $l(b)}):$l(b).then(function(){throw new M("no-such-provider");})}))};
k.delete=function(){var a=this;return R(this,this.G().then(function(b){return P(a.a,fj,{idToken:b})}).then(function(){a.dispatchEvent(new Pl("userDeleted"))})).then(function(){for(var b=0;b<a.I.length;b++)a.I[b].cancel("app-deleted");Ul(a,null);Vl(a,null);a.I=[];a.B=!0;Yl(a);K(a,"refreshToken",null);a.i&&ll(a.i,a)})};
k.xb=function(a,b){return"linkViaPopup"==a&&(this.g||null)==b&&this.f||"reauthViaPopup"==a&&(this.g||null)==b&&this.f||"linkViaRedirect"==a&&(this.ca||null)==b||"reauthViaRedirect"==a&&(this.ca||null)==b?!0:!1};k.ja=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.g||null)||(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};
k.za=function(a,b){return"linkViaPopup"==a&&b==(this.g||null)?t(this.Bb,this):"reauthViaPopup"==a&&b==(this.g||null)?t(this.Cb,this):"linkViaRedirect"==a&&(this.ca||null)==b?t(this.Bb,this):"reauthViaRedirect"==a&&(this.ca||null)==b?t(this.Cb,this):null};k.tc=function(a){var b=this;return pm(this,"linkViaPopup",a,function(){return nm(b,a.providerId).then(function(){return $l(b)})},!1)};k.Cc=function(a){return pm(this,"reauthViaPopup",a,function(){return D()},!0)};
function pm(a,b,c,d,e){if(!He())return E(new M("operation-not-supported-in-this-environment"));if(a.h&&!e)return E(a.h);var f=Zf(c.providerId),g=Ge(a.uid+":::"),h=null;(!Je()||ye())&&a.o&&c.isOAuthProvider&&(h=Bj(a.o,a.l,a.m,b,c,null,g,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION||null,null,null,a.tenantId));var m=pe(h,f&&f.Da,f&&f.Ca);d=d().then(function(){qm(a);if(!e)return a.G().then(function(){})}).then(function(){return ol(a.i,m,b,c,g,!!h,a.tenantId)}).then(function(){return new B(function(p,u){a.ja(b,null,new M("cancelled-popup-request"),
a.g||null);a.f=p;a.v=u;a.g=g;a.c=ql(a.i,a,b,m,g)})}).then(function(p){m&&oe(m);return p?$e(p):null}).s(function(p){m&&oe(m);throw p;});return R(a,d,e)}k.uc=function(a){var b=this;return rm(this,"linkViaRedirect",a,function(){return nm(b,a.providerId)},!1)};k.Dc=function(a){return rm(this,"reauthViaRedirect",a,function(){return D()},!0)};
function rm(a,b,c,d,e){if(!He())return E(new M("operation-not-supported-in-this-environment"));if(a.h&&!e)return E(a.h);var f=null,g=Ge(a.uid+":::");d=d().then(function(){qm(a);if(!e)return a.G().then(function(){})}).then(function(){a.ca=g;return $l(a)}).then(function(h){a.da&&(h=a.da,h=h.b.set(sm,a.A(),h.a));return h}).then(function(){return pl(a.i,b,c,g,a.tenantId)}).s(function(h){f=h;if(a.da)return tm(a.da);throw f;}).then(function(){if(f)throw f;});return R(a,d,e)}
function qm(a){if(!a.i||!a.J){if(a.i&&!a.J)throw new M("internal-error");throw new M("auth-domain-config-required");}}k.Bb=function(a,b,c,d){var e=this;this.c&&(this.c.cancel(),this.c=null);var f=null;c=this.G().then(function(g){return pg(e.a,{requestUri:a,postBody:d,sessionId:b,idToken:g})}).then(function(g){f=mm(e,g,"link");return om(e,g)}).then(function(){return f});return R(this,c)};
k.Cb=function(a,b,c,d){var e=this;this.c&&(this.c.cancel(),this.c=null);var f=null,g=D().then(function(){return kg(qg(e.a,{requestUri:a,sessionId:b,postBody:d,tenantId:c}),e.uid)}).then(function(h){f=mm(e,h,"reauthenticate");km(e,h);e.h=null;return e.reload()}).then(function(){return f});return R(this,g,!0)};
k.jb=function(a){var b=this,c=null;return R(this,this.G().then(function(d){c=d;return"undefined"===typeof a||Ta(a)?{}:Jf(new zf(a))}).then(function(d){return b.a.jb(c,d)}).then(function(d){if(b.email!=d)return b.reload()}).then(function(){}))};function R(a,b,c){var d=um(a,b,c);a.I.push(d);d.ka(function(){Oa(a.I,d)});return d}
function um(a,b,c){return a.h&&!c?(b.cancel(),E(a.h)):b.s(function(d){!d||"auth/user-disabled"!=d.code&&"auth/user-token-expired"!=d.code||(a.h||a.dispatchEvent(new Pl("userInvalidated")),a.h=d);throw d;})}k.toJSON=function(){return this.A()};
k.A=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,tenantId:this.tenantId,providerData:[],apiKey:this.l,appName:this.m,authDomain:this.o,stsTokenManager:this.b.A(),redirectEventId:this.ca||null};this.metadata&&Wa(a,this.metadata.A());x(this.providerData,function(b){a.providerData.push(af(b))});return a};
function vm(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c[lg]=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-ua())/1E3;else return null;var d=new Q(b,c,a);a.providerData&&x(a.providerData,function(e){e&&em(d,$e(e))});a.redirectEventId&&(d.ca=a.redirectEventId);return d}
function wm(a,b,c,d){var e=new Q(a,b);c&&(e.da=c);d&&Tl(e,d);return e.reload().then(function(){return e})}function xm(a,b,c,d){b=b||{apiKey:a.l,authDomain:a.o,appName:a.m};var e=a.b,f={};f[lg]=e.b;f.refreshToken=e.a;f.expiresIn=(e.c-ua())/1E3;b=new Q(b,f);c&&(b.da=c);d&&Tl(b,d);hm(b,a);return b};function ym(a){this.a=a;this.b=rk()}var sm={name:"redirectUser",C:"session"};function tm(a){return vk(a.b,sm,a.a)}function zm(a,b){return a.b.get(sm,a.a).then(function(c){c&&b&&(c.authDomain=b);return vm(c||{})})};function Am(a){this.a=a;this.b=rk();this.c=null;this.f=Bm(this);this.b.addListener(Cm("local"),this.a,t(this.g,this))}Am.prototype.g=function(){var a=this,b=Cm("local");Dm(this,function(){return D().then(function(){return a.c&&"local"!=a.c.C?a.b.get(b,a.a):null}).then(function(c){if(c)return Em(a,"local").then(function(){a.c=b})})})};function Em(a,b){var c=[],d;for(d in nk)nk[d]!==b&&c.push(vk(a.b,Cm(nk[d]),a.a));c.push(vk(a.b,Fm,a.a));return ac(c)}
function Bm(a){var b=Cm("local"),c=Cm("session"),d=Cm("none");return uk(a.b,b,a.a).then(function(){return a.b.get(c,a.a)}).then(function(e){return e?c:a.b.get(d,a.a).then(function(f){return f?d:a.b.get(b,a.a).then(function(g){return g?b:a.b.get(Fm,a.a).then(function(h){return h?Cm(h):b})})})}).then(function(e){a.c=e;return Em(a,e.C)}).s(function(){a.c||(a.c=b)})}var Fm={name:"persistence",C:"session"};function Cm(a){return{name:"authUser",C:a}}
Am.prototype.mb=function(a){var b=null,c=this;ok(a);return Dm(this,function(){return a!=c.c.C?c.b.get(c.c,c.a).then(function(d){b=d;return Em(c,a)}).then(function(){c.c=Cm(a);if(b)return c.b.set(c.c,b,c.a)}):D()})};function Gm(a){return Dm(a,function(){return a.b.set(Fm,a.c.C,a.a)})}function Hm(a,b){return Dm(a,function(){return a.b.set(a.c,b.A(),a.a)})}function Im(a){return Dm(a,function(){return vk(a.b,a.c,a.a)})}
function Jm(a,b){return Dm(a,function(){return a.b.get(a.c,a.a).then(function(c){c&&b&&(c.authDomain=b);return vm(c||{})})})}function Dm(a,b){a.f=a.f.then(b,b);return a.f};function Km(a){this.l=!1;K(this,"settings",new Al);K(this,"app",a);if(S(this).options&&S(this).options.apiKey)a=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?Ee(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION):null,this.b=new ni(S(this).options&&S(this).options.apiKey,Uf(Vf),a);else throw new M("invalid-api-key");this.O=[];this.m=[];this.J=[];this.Ub=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.createSubscribe(t(this.oc,this));this.W=void 0;this.Vb=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.createSubscribe(t(this.pc,this));Lm(this,null);this.h=new Am(S(this).options.apiKey+":"+S(this).name);this.w=
new ym(S(this).options.apiKey+":"+S(this).name);this.Y=T(this,Mm(this));this.i=T(this,Nm(this));this.ga=!1;this.ma=t(this.Nc,this);this.ub=t(this.aa,this);this.ua=t(this.bc,this);this.va=t(this.mc,this);this.Ha=t(this.nc,this);this.a=null;Om(this);this.INTERNAL={};this.INTERNAL["delete"]=t(this.delete,this);this.INTERNAL.logFramework=t(this.vc,this);this.o=0;G.call(this);Pm(this);this.I=[]}v(Km,G);function Qm(a){F.call(this,"languageCodeChanged");this.g=a}v(Qm,F);
function Rm(a){F.call(this,"frameworkChanged");this.c=a}v(Rm,F);k=Km.prototype;k.mb=function(a){a=this.h.mb(a);return T(this,a)};k.sa=function(a){this.Z===a||this.l||(this.Z=a,ti(this.b,this.Z),this.dispatchEvent(new Qm(this.ha())))};k.ha=function(){return this.Z};k.Tc=function(){var a=l.navigator;this.sa(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null)};k.vc=function(a){this.I.push(a);ui(this.b,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?Ee(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION,this.I):null);this.dispatchEvent(new Rm(this.I))};
k.Aa=function(){return Ra(this.I)};k.nb=function(a){this.P===a||this.l||(this.P=a,this.b.b=this.P)};k.R=function(){return this.P};function Pm(a){Object.defineProperty(a,"lc",{get:function(){return this.ha()},set:function(b){this.sa(b)},enumerable:!1});a.Z=null;Object.defineProperty(a,"ti",{get:function(){return this.R()},set:function(b){this.nb(b)},enumerable:!1});a.P=null}
k.toJSON=function(){return{apiKey:S(this).options.apiKey,authDomain:S(this).options.authDomain,appName:S(this).name,currentUser:U(this)&&U(this).A()}};function Sm(a){return a.Tb||E(new M("auth-domain-config-required"))}function Om(a){var b=S(a).options.authDomain,c=S(a).options.apiKey;b&&He()&&(a.Tb=a.Y.then(function(){if(!a.l){a.a=sl(b,c,S(a).name);kl(a.a,a);U(a)&&am(U(a));if(a.B){am(a.B);var d=a.B;d.sa(a.ha());Ul(d,a);d=a.B;Tl(d,a.I);Vl(d,a);a.B=null}return a.a}}))}
k.xb=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.g==b&&!!this.f;default:return!1}};k.ja=function(a,b,c,d){"signInViaPopup"==a&&this.g==d&&(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};k.za=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.g==b&&this.f?t(this.ac,this):null};
k.ac=function(a,b,c,d){var e=this;a={requestUri:a,postBody:d,sessionId:b,tenantId:c};this.c&&(this.c.cancel(),this.c=null);var f=null,g=null,h=ng(e.b,a).then(function(m){f=Wg(m);g=$f(m);return m});a=e.Y.then(function(){return h}).then(function(m){return Tm(e,m)}).then(function(){return $e({user:U(e),credential:f,additionalUserInfo:g,operationType:"signIn"})});return T(this,a)};
k.Lc=function(a){if(!He())return E(new M("operation-not-supported-in-this-environment"));var b=this,c=Zf(a.providerId),d=Ge(),e=null;(!Je()||ye())&&S(this).options.authDomain&&a.isOAuthProvider&&(e=Bj(S(this).options.authDomain,S(this).options.apiKey,S(this).name,"signInViaPopup",a,null,d,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION||null,null,null,this.R()));var f=pe(e,c&&c.Da,c&&c.Ca);c=Sm(this).then(function(g){return ol(g,f,"signInViaPopup",a,d,!!e,b.R())}).then(function(){return new B(function(g,h){b.ja("signInViaPopup",
null,new M("cancelled-popup-request"),b.g);b.f=g;b.v=h;b.g=d;b.c=ql(b.a,b,"signInViaPopup",f,d)})}).then(function(g){f&&oe(f);return g?$e(g):null}).s(function(g){f&&oe(f);throw g;});return T(this,c)};k.Mc=function(a){if(!He())return E(new M("operation-not-supported-in-this-environment"));var b=this,c=Sm(this).then(function(){return Gm(b.h)}).then(function(){return pl(b.a,"signInViaRedirect",a,void 0,b.R())});return T(this,c)};
function Um(a){if(!He())return E(new M("operation-not-supported-in-this-environment"));var b=Sm(a).then(function(){return a.a.oa()}).then(function(c){return c?$e(c):null});return T(a,b)}k.oa=function(){var a=this;return Um(this).then(function(b){a.a&&vl(a.a.b);return b}).s(function(b){a.a&&vl(a.a.b);throw b;})};
k.Rc=function(a){if(!a)return E(new M("null-user"));if(this.P!=a.tenantId)return E(new M("tenant-id-mismatch"));var b=this,c={};c.apiKey=S(this).options.apiKey;c.authDomain=S(this).options.authDomain;c.appName=S(this).name;var d=xm(a,c,b.w,b.Aa());return T(this,this.i.then(function(){if(S(b).options.apiKey!=a.l)return d.reload()}).then(function(){if(U(b)&&a.uid==U(b).uid)return hm(U(b),a),b.aa(a);Lm(b,d);am(d);return b.aa(d)}).then(function(){Vm(b)}))};
function Tm(a,b){var c={};c.apiKey=S(a).options.apiKey;c.authDomain=S(a).options.authDomain;c.appName=S(a).name;return a.Y.then(function(){return wm(c,b,a.w,a.Aa())}).then(function(d){if(U(a)&&d.uid==U(a).uid)return hm(U(a),d),a.aa(d);Lm(a,d);am(d);return a.aa(d)}).then(function(){Vm(a)})}
function Lm(a,b){U(a)&&(Zl(U(a),a.ub),fd(U(a),"tokenChanged",a.ua),fd(U(a),"userDeleted",a.va),fd(U(a),"userInvalidated",a.Ha),Yl(U(a)));b&&(b.O.push(a.ub),Wc(b,"tokenChanged",a.ua),Wc(b,"userDeleted",a.va),Wc(b,"userInvalidated",a.Ha),0<a.o&&Xl(b));K(a,"currentUser",b);b&&(b.sa(a.ha()),Ul(b,a),Tl(b,a.I),Vl(b,a))}k.pb=function(){var a=this,b=this.i.then(function(){a.a&&vl(a.a.b);if(!U(a))return D();Lm(a,null);return Im(a.h).then(function(){Vm(a)})});return T(this,b)};
function Wm(a){var b=zm(a.w,S(a).options.authDomain).then(function(c){if(a.B=c)c.da=a.w;return tm(a.w)});return T(a,b)}function Mm(a){var b=S(a).options.authDomain,c=Wm(a).then(function(){return Jm(a.h,b)}).then(function(d){return d?(d.da=a.w,a.B&&(a.B.ca||null)==(d.ca||null)?d:d.reload().then(function(){return Hm(a.h,d).then(function(){return d})}).s(function(e){return"auth/network-request-failed"==e.code?d:Im(a.h)})):null}).then(function(d){Lm(a,d||null)});return T(a,c)}
function Nm(a){return a.Y.then(function(){return Um(a)}).s(function(){}).then(function(){if(!a.l)return a.ma()}).s(function(){}).then(function(){if(!a.l){a.ga=!0;var b=a.h;b.b.addListener(Cm("local"),b.a,a.ma)}})}
k.Nc=function(){var a=this;return Jm(this.h,S(this).options.authDomain).then(function(b){if(!a.l){var c;if(c=U(a)&&b){c=U(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return hm(U(a),b),U(a).G();if(U(a)||b)Lm(a,b),b&&(am(b),b.da=a.w),a.a&&kl(a.a,a),Vm(a)}})};k.aa=function(a){return Hm(this.h,a)};k.bc=function(){Vm(this);this.aa(U(this))};k.mc=function(){this.pb()};k.nc=function(){this.pb()};
function Xm(a,b){var c=null,d=null;return T(a,b.then(function(e){c=Wg(e);d=$f(e);return Tm(a,e)}).then(function(){return $e({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))}k.oc=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};k.pc=function(a){var b=this;Ym(this,function(){a.next(U(b))})};k.xc=function(a,b,c){var d=this;this.ga&&Promise.resolve().then(function(){q(a)?a(U(d)):q(a.next)&&a.next(U(d))});return this.Ub(a,b,c)};
k.wc=function(a,b,c){var d=this;this.ga&&Promise.resolve().then(function(){d.W=d.getUid();q(a)?a(U(d)):q(a.next)&&a.next(U(d))});return this.Vb(a,b,c)};k.cc=function(a){var b=this,c=this.i.then(function(){return U(b)?U(b).G(a).then(function(d){return{accessToken:d}}):null});return T(this,c)};k.Hc=function(a){var b=this;return this.i.then(function(){return Xm(b,P(b.b,ij,{token:a}))}).then(function(c){var d=c.user;gm(d,"isAnonymous",!1);b.aa(d);return c})};
k.Ic=function(a,b){var c=this;return this.i.then(function(){return Xm(c,P(c.b,Ig,{email:a,password:b}))})};k.Xb=function(a,b){var c=this;return this.i.then(function(){return Xm(c,P(c.b,ej,{email:a,password:b}))})};k.Ra=function(a){var b=this;return this.i.then(function(){return Xm(b,a.na(b.b))})};k.Gc=function(a){Xe("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");return this.Ra(a)};
k.ob=function(){var a=this;return this.i.then(function(){var b=U(a);if(b&&b.isAnonymous){var c=$e({providerId:null,isNewUser:!1});return $e({user:b,credential:null,additionalUserInfo:c,operationType:"signIn"})}return Xm(a,a.b.ob()).then(function(d){var e=d.user;gm(e,"isAnonymous",!0);a.aa(e);return d})})};function S(a){return a.app}function U(a){return a.currentUser}k.getUid=function(){return U(this)&&U(this).uid||null};function Zm(a){return U(a)&&U(a)._lat||null}
function Vm(a){if(a.ga){for(var b=0;b<a.m.length;b++)if(a.m[b])a.m[b](Zm(a));if(a.W!==a.getUid()&&a.J.length)for(a.W=a.getUid(),b=0;b<a.J.length;b++)if(a.J[b])a.J[b](Zm(a))}}k.Wb=function(a){this.addAuthTokenListener(a);this.o++;0<this.o&&U(this)&&Xl(U(this))};k.Ec=function(a){var b=this;x(this.m,function(c){c==a&&b.o--});0>this.o&&(this.o=0);0==this.o&&U(this)&&Yl(U(this));this.removeAuthTokenListener(a)};
k.addAuthTokenListener=function(a){var b=this;this.m.push(a);T(this,this.i.then(function(){b.l||Na(b.m,a)&&a(Zm(b))}))};k.removeAuthTokenListener=function(a){Pa(this.m,function(b){return b==a})};function Ym(a,b){a.J.push(b);T(a,a.i.then(function(){!a.l&&Na(a.J,b)&&a.W!==a.getUid()&&(a.W=a.getUid(),b(Zm(a)))}))}
k.delete=function(){this.l=!0;for(var a=0;a<this.O.length;a++)this.O[a].cancel("app-deleted");this.O=[];this.h&&(a=this.h,a.b.removeListener(Cm("local"),a.a,this.ma));this.a&&(ll(this.a,this),vl(this.a.b));return Promise.resolve()};function T(a,b){a.O.push(b);b.ka(function(){Oa(a.O,b)});return b}k.$b=function(a){return T(this,Ei(this.b,a))};k.qc=function(a){return!!Ng(a)};
k.lb=function(a,b){var c=this;return T(this,D().then(function(){var d=new zf(b);if(!d.c)throw new M("argument-error",Hf+" must be true when sending sign in link to email");return Jf(d)}).then(function(d){return c.b.lb(a,d)}).then(function(){}))};k.Uc=function(a){return this.Ka(a).then(function(b){return b.data.email})};k.$a=function(a,b){return T(this,this.b.$a(a,b).then(function(){}))};k.Ka=function(a){return T(this,this.b.Ka(a).then(function(b){return new df(b)}))};
k.Xa=function(a){return T(this,this.b.Xa(a).then(function(){}))};k.kb=function(a,b){var c=this;return T(this,D().then(function(){return"undefined"===typeof b||Ta(b)?{}:Jf(new zf(b))}).then(function(d){return c.b.kb(a,d)}).then(function(){}))};k.Kc=function(a,b){return T(this,Cl(this,a,b,t(this.Ra,this)))};
k.Jc=function(a,b){var c=this;return T(this,D().then(function(){var d=b||he(),e=Mg(a,d);d=Ng(d);if(!d)throw new M("argument-error","Invalid email link!");if(d.tenantId!==c.R())throw new M("tenant-id-mismatch");return c.Ra(e)}))};function $m(){}$m.prototype.render=function(){};$m.prototype.reset=function(){};$m.prototype.getResponse=function(){};$m.prototype.execute=function(){};function an(){this.a={};this.b=1E12}var bn=null;an.prototype.render=function(a,b){this.a[this.b.toString()]=new cn(a,b);return this.b++};an.prototype.reset=function(a){var b=dn(this,a);a=en(a);b&&a&&(b.delete(),delete this.a[a])};an.prototype.getResponse=function(a){return(a=dn(this,a))?a.getResponse():null};an.prototype.execute=function(a){(a=dn(this,a))&&a.execute()};function dn(a,b){return(b=en(b))?a.a[b]||null:null}function en(a){return(a="undefined"===typeof a?1E12:a)?a.toString():null}
function cn(a,b){this.g=!1;this.c=b;this.a=this.b=null;this.h="invisible"!==this.c.size;this.f=Vd(a);var c=this;this.i=function(){c.execute()};this.h?this.execute():Wc(this.f,"click",this.i)}cn.prototype.getResponse=function(){fn(this);return this.b};
cn.prototype.execute=function(){fn(this);var a=this;this.a||(this.a=setTimeout(function(){a.b=Ce();var b=a.c.callback,c=a.c["expired-callback"];if(b)try{b(a.b)}catch(d){}a.a=setTimeout(function(){a.a=null;a.b=null;if(c)try{c()}catch(d){}a.h&&a.execute()},6E4)},500))};cn.prototype.delete=function(){fn(this);this.g=!0;clearTimeout(this.a);this.a=null;fd(this.f,"click",this.i)};function fn(a){if(a.g)throw Error("reCAPTCHA mock was already deleted!");};function gn(){}gn.prototype.g=function(){bn||(bn=new an);return D(bn)};gn.prototype.c=function(){};var hn=null;function jn(){this.b=l.grecaptcha?Infinity:0;this.f=null;this.a="__rcb"+Math.floor(1E6*Math.random()).toString()}var kn=new Xa(Ya,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),ln=new Pe(3E4,6E4);
jn.prototype.g=function(a){var b=this;return new B(function(c,d){var e=setTimeout(function(){d(new M("network-request-failed"))},ln.get());if(!l.grecaptcha||a!==b.f&&!b.b){l[b.a]=function(){if(l.grecaptcha){b.f=a;var g=l.grecaptcha.render;l.grecaptcha.render=function(h,m){h=g(h,m);b.b++;return h};clearTimeout(e);c(l.grecaptcha)}else clearTimeout(e),d(new M("internal-error"));delete l[b.a]};var f=eb(kn,{onload:b.a,hl:a||""});D(gi(f)).s(function(){clearTimeout(e);d(new M("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else clearTimeout(e),
c(l.grecaptcha)})};jn.prototype.c=function(){this.b--};var mn=null;function nn(a,b,c,d,e,f,g){K(this,"type","recaptcha");this.c=this.f=null;this.B=!1;this.u=b;this.g=null;g?(hn||(hn=new gn),g=hn):(mn||(mn=new jn),g=mn);this.m=g;this.a=c||{theme:"light",type:"image"};this.h=[];if(this.a[on])throw new M("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.i="invisible"===this.a[pn];if(!l.document)throw new M("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
if(!Vd(b)||!this.i&&Vd(b).hasChildNodes())throw new M("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.o=new ni(a,f||null,e||null);this.v=d||function(){return null};var h=this;this.l=[];var m=this.a[qn];this.a[qn]=function(u){rn(h,u);if("function"===typeof m)m(u);else if("string"===typeof m){var A=J(m,l);"function"===typeof A&&A(u)}};var p=this.a[sn];this.a[sn]=function(){rn(h,null);if("function"===typeof p)p();else if("string"===typeof p){var u=
J(p,l);"function"===typeof u&&u()}}}var qn="callback",sn="expired-callback",on="sitekey",pn="size";function rn(a,b){for(var c=0;c<a.l.length;c++)try{a.l[c](b)}catch(d){}}function tn(a,b){Pa(a.l,function(c){return c==b})}function un(a,b){a.h.push(b);b.ka(function(){Oa(a.h,b)});return b}k=nn.prototype;
k.Ba=function(){var a=this;return this.f?this.f:this.f=un(this,D().then(function(){if(Ie()&&!ze())return ue();throw new M("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return a.m.g(a.v())}).then(function(b){a.g=b;return P(a.o,hj,{})}).then(function(b){a.a[on]=b.recaptchaSiteKey}).s(function(b){a.f=null;throw b;}))};
k.render=function(){vn(this);var a=this;return un(this,this.Ba().then(function(){if(null===a.c){var b=a.u;if(!a.i){var c=Vd(b);b=Yd("DIV");c.appendChild(b)}a.c=a.g.render(b,a.a)}return a.c}))};k.verify=function(){vn(this);var a=this;return un(this,this.render().then(function(b){return new B(function(c){var d=a.g.getResponse(b);if(d)c(d);else{var e=function(f){f&&(tn(a,e),c(f))};a.l.push(e);a.i&&a.g.execute(a.c)}})}))};k.reset=function(){vn(this);null!==this.c&&this.g.reset(this.c)};
function vn(a){if(a.B)throw new M("internal-error","RecaptchaVerifier instance has been destroyed.");}k.clear=function(){vn(this);this.B=!0;this.m.c();for(var a=0;a<this.h.length;a++)this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.i){a=Vd(this.u);for(var b;b=a.firstChild;)a.removeChild(b)}};
function wn(a,b,c){var d=!1;try{this.b=c||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app()}catch(g){throw new M("argument-error","No firebase.app.App instance is currently initialized.");}if(this.b.options&&this.b.options.apiKey)c=this.b.options.apiKey;else throw new M("invalid-api-key");var e=this,f=null;try{f=this.b.auth().Aa()}catch(g){}try{d=this.b.auth().settings.appVerificationDisabledForTesting}catch(g){}f=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?Ee(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION,f):null;nn.call(this,c,a,b,function(){try{var g=e.b.auth().ha()}catch(h){g=
null}return g},f,Uf(Vf),d)}v(wn,nn);function xn(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,g=0;g<b.length;g++)if(b[g].optional)f=!0;else{if(f)throw new M("internal-error","Argument validator encountered a required argument after an optional argument.");e++}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else{for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].N(c[e])&&!f){b=b[e];if(0>e||e>=yn.length)throw new M("internal-error",
"Argument validator received an unsupported number of arguments.");c=yn[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.M+".";break a}d=null}}if(d)throw new M("argument-error",a+" failed: "+d);}var yn="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function V(a,b){return{name:a||"",M:"a valid string",optional:!!b,N:n}}function zn(a,b){return{name:a||"",M:"a boolean",optional:!!b,N:ha}}
function W(a,b){return{name:a||"",M:"a valid object",optional:!!b,N:r}}function An(a,b){return{name:a||"",M:"a function",optional:!!b,N:q}}function Bn(a,b){return{name:a||"",M:"null",optional:!!b,N:ma}}function Cn(){return{name:"",M:"an HTML element",optional:!1,N:function(a){return!!(a&&a instanceof Element)}}}function Dn(){return{name:"auth",M:"an instance of Firebase Auth",optional:!0,N:function(a){return!!(a&&a instanceof Km)}}}
function En(){return{name:"app",M:"an instance of Firebase App",optional:!0,N:function(a){return!!(a&&a instanceof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app.App)}}}function Fn(a){return{name:a?a+"Credential":"credential",M:a?"a valid "+a+" credential":"a valid credential",optional:!1,N:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.na||!c)}}}
function Gn(){return{name:"authProvider",M:"a valid Auth provider",optional:!1,N:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}}function Hn(){return{name:"applicationVerifier",M:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,N:function(a){return!!(a&&n(a.type)&&q(a.verify))}}}function X(a,b,c,d){return{name:c||"",M:a.M+" or "+b.M,optional:!!d,N:function(e){return a.N(e)||b.N(e)}}};function Y(a,b){for(var c in b){var d=b[c].name;a[d]=In(d,a[c],b[c].j)}}function Jn(a,b){for(var c in b){var d=b[c].name;d!==c&&Object.defineProperty(a,d,{get:ta(function(e){return this[e]},c),set:ta(function(e,f,g,h){xn(e,[g],[h],!0);this[f]=h},d,c,b[c].Ya),enumerable:!0})}}function Z(a,b,c,d){a[b]=In(b,c,d)}
function In(a,b,c){function d(){var g=Array.prototype.slice.call(arguments);xn(e,c,g);return b.apply(this,g)}if(!c)return b;var e=Kn(a),f;for(f in b)d[f]=b[f];for(f in b.prototype)d.prototype[f]=b.prototype[f];return d}function Kn(a){a=a.split(".");return a[a.length-1]};Y(Km.prototype,{Xa:{name:"applyActionCode",j:[V("code")]},Ka:{name:"checkActionCode",j:[V("code")]},$a:{name:"confirmPasswordReset",j:[V("code"),V("newPassword")]},Xb:{name:"createUserWithEmailAndPassword",j:[V("email"),V("password")]},$b:{name:"fetchSignInMethodsForEmail",j:[V("email")]},oa:{name:"getRedirectResult",j:[]},qc:{name:"isSignInWithEmailLink",j:[V("emailLink")]},wc:{name:"onAuthStateChanged",j:[X(W(),An(),"nextOrObserver"),An("opt_error",!0),An("opt_completed",!0)]},xc:{name:"onIdTokenChanged",
j:[X(W(),An(),"nextOrObserver"),An("opt_error",!0),An("opt_completed",!0)]},kb:{name:"sendPasswordResetEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),Bn(null,!0),"opt_actionCodeSettings",!0)]},lb:{name:"sendSignInLinkToEmail",j:[V("email"),W("actionCodeSettings")]},mb:{name:"setPersistence",j:[V("persistence")]},Gc:{name:"signInAndRetrieveDataWithCredential",j:[Fn()]},ob:{name:"signInAnonymously",j:[]},Ra:{name:"signInWithCredential",j:[Fn()]},Hc:{name:"signInWithCustomToken",j:[V("token")]},
Ic:{name:"signInWithEmailAndPassword",j:[V("email"),V("password")]},Jc:{name:"signInWithEmailLink",j:[V("email"),V("emailLink",!0)]},Kc:{name:"signInWithPhoneNumber",j:[V("phoneNumber"),Hn()]},Lc:{name:"signInWithPopup",j:[Gn()]},Mc:{name:"signInWithRedirect",j:[Gn()]},Rc:{name:"updateCurrentUser",j:[X(function(a){return{name:"user",M:"an instance of Firebase User",optional:!!a,N:function(b){return!!(b&&b instanceof Q)}}}(),Bn(),"user")]},pb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[V(null,!0)]},
Tc:{name:"useDeviceLanguage",j:[]},Uc:{name:"verifyPasswordResetCode",j:[V("code")]}});Jn(Km.prototype,{lc:{name:"languageCode",Ya:X(V(),Bn(),"languageCode")},ti:{name:"tenantId",Ya:X(V(),Bn(),"tenantId")}});Km.Persistence=nk;Km.Persistence.LOCAL="local";Km.Persistence.SESSION="session";Km.Persistence.NONE="none";
Y(Q.prototype,{"delete":{name:"delete",j:[]},dc:{name:"getIdTokenResult",j:[zn("opt_forceRefresh",!0)]},G:{name:"getIdToken",j:[zn("opt_forceRefresh",!0)]},rc:{name:"linkAndRetrieveDataWithCredential",j:[Fn()]},eb:{name:"linkWithCredential",j:[Fn()]},sc:{name:"linkWithPhoneNumber",j:[V("phoneNumber"),Hn()]},tc:{name:"linkWithPopup",j:[Gn()]},uc:{name:"linkWithRedirect",j:[Gn()]},Ac:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Fn()]},gb:{name:"reauthenticateWithCredential",j:[Fn()]},Bc:{name:"reauthenticateWithPhoneNumber",
j:[V("phoneNumber"),Hn()]},Cc:{name:"reauthenticateWithPopup",j:[Gn()]},Dc:{name:"reauthenticateWithRedirect",j:[Gn()]},reload:{name:"reload",j:[]},jb:{name:"sendEmailVerification",j:[X(W("opt_actionCodeSettings",!0),Bn(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[V(null,!0)]},Qc:{name:"unlink",j:[V("provider")]},rb:{name:"updateEmail",j:[V("email")]},sb:{name:"updatePassword",j:[V("password")]},Sc:{name:"updatePhoneNumber",j:[Fn("phone")]},tb:{name:"updateProfile",j:[W("profile")]}});
Y(an.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y($m.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(B.prototype,{ka:{name:"finally"},s:{name:"catch"},then:{name:"then"}});Jn(Al.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",Ya:zn("appVerificationDisabledForTesting")}});Y(Bl.prototype,{confirm:{name:"confirm",j:[V("verificationCode")]}});
Z(jg,"fromJSON",function(a){a=n(a)?JSON.parse(a):a;for(var b,c=[ug,Lg,Sg,rg],d=0;d<c.length;d++)if(b=c[d](a))return b;return null},[X(V(),W(),"json")]);Z(Gg,"credential",function(a,b){return new Fg(a,b)},[V("email"),V("password")]);Y(Fg.prototype,{A:{name:"toJSON",j:[V(null,!0)]}});Y(xg.prototype,{wa:{name:"addScope",j:[V("scope")]},Ea:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(xg,"credential",yg,[X(V(),W(),"token")]);Z(Gg,"credentialWithLink",Mg,[V("email"),V("emailLink")]);
Y(zg.prototype,{wa:{name:"addScope",j:[V("scope")]},Ea:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(zg,"credential",Ag,[X(V(),W(),"token")]);Y(Bg.prototype,{wa:{name:"addScope",j:[V("scope")]},Ea:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Bg,"credential",Cg,[X(V(),X(W(),Bn()),"idToken"),X(V(),Bn(),"accessToken",!0)]);Y(Dg.prototype,{Ea:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Dg,"credential",Eg,[X(V(),W(),"token"),V("secret",!0)]);
Y(O.prototype,{wa:{name:"addScope",j:[V("scope")]},credential:{name:"credential",j:[X(V(),X(W(),Bn()),"optionsOrIdToken"),X(V(),Bn(),"accessToken",!0)]},Ea:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Y(sg.prototype,{A:{name:"toJSON",j:[V(null,!0)]}});Y(mg.prototype,{A:{name:"toJSON",j:[V(null,!0)]}});Z(Tg,"credential",Vg,[V("verificationId"),V("verificationCode")]);Y(Tg.prototype,{Va:{name:"verifyPhoneNumber",j:[V("phoneNumber"),Hn()]}});
Y(Og.prototype,{A:{name:"toJSON",j:[V(null,!0)]}});Y(M.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(dh.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(ch.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(wn.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}});Z(qf,"parseLink",yf,[V("link")]);
(function(){if("undefined"!==typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.registerService){var a={ActionCodeInfo:{Operation:{EMAIL_SIGNIN:hf,PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"}},Auth:Km,AuthCredential:jg,Error:M};Z(a,"EmailAuthProvider",Gg,[]);Z(a,"FacebookAuthProvider",xg,[]);Z(a,"GithubAuthProvider",zg,[]);Z(a,"GoogleAuthProvider",Bg,[]);Z(a,"TwitterAuthProvider",Dg,[]);Z(a,"OAuthProvider",O,[V("providerId")]);Z(a,"SAMLAuthProvider",
wg,[V("providerId")]);Z(a,"PhoneAuthProvider",Tg,[Dn()]);Z(a,"RecaptchaVerifier",wn,[X(V(),Cn(),"recaptchaContainer"),W("recaptchaParameters",!0),En()]);Z(a,"ActionCodeURL",qf,[]);_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.registerService("auth",function(b,c){b=new Km(b);c({INTERNAL:{getUid:t(b.getUid,b),getToken:t(b.cc,b),addAuthTokenListener:t(b.Wb,b),removeAuthTokenListener:t(b.Ec,b)}});return b},a,function(b,c){if("create"===b)try{c.auth()}catch(d){}});_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.extendNamespace({User:Q})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
})();}).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});

//# sourceMappingURL=auth.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@firebase/installations/dist/index.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@firebase/installations/dist/index.esm.js ***!
  \****************************************************************/
/*! exports provided: registerInstallations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerInstallations", function() { return registerInstallations; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/idb.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_3__);





var version = "0.3.4";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PENDING_TIMEOUT_MS = 10000;
var PACKAGE_VERSION = "w:" + version;
var INTERNAL_AUTH_VERSION = 'FIS_v2';
var INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
var SERVICE = 'installations';
var SERVICE_NAME = 'Installations';

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERROR_DESCRIPTION_MAP = (_a = {},
    _a["missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */] = 'Missing App configuration value: "{$valueName}"',
    _a["not-registered" /* NOT_REGISTERED */] = 'Firebase Installation is not registered.',
    _a["installation-not-found" /* INSTALLATION_NOT_FOUND */] = 'Firebase Installation not found.',
    _a["request-failed" /* REQUEST_FAILED */] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    _a["app-offline" /* APP_OFFLINE */] = 'Could not process request. Application offline.',
    _a["delete-pending-registration" /* DELETE_PENDING_REGISTRATION */] = "Can't delete installation while there is a pending registration request.",
    _a);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["ErrorFactory"](SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/** Returns true if error is a FirebaseError that is based on an error from the server. */
function isServerError(error) {
    return (error instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__["FirebaseError"] &&
        error.code.includes("request-failed" /* REQUEST_FAILED */));
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
    var e_1, _a;
    if (!app || !app.options) {
        throw getMissingValueError('App Configuration');
    }
    if (!app.name) {
        throw getMissingValueError('App Name');
    }
    // Required app config keys
    var configKeys = [
        'projectId',
        'apiKey',
        'appId'
    ];
    try {
        for (var configKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
            var keyName = configKeys_1_1.value;
            if (!app.options[keyName]) {
                throw getMissingValueError(keyName);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1.return)) _a.call(configKeys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return {
        appName: app.name,
        projectId: app.options.projectId,
        apiKey: app.options.apiKey,
        appId: app.options.appId
    };
}
function getMissingValueError(valueName) {
    return ERROR_FACTORY.create("missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */, {
        valueName: valueName
    });
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationsEndpoint(_a) {
    var projectId = _a.projectId;
    return INSTALLATIONS_API_URL + "/projects/" + projectId + "/installations";
}
function extractAuthTokenInfoFromResponse(response) {
    return {
        token: response.token,
        requestStatus: 2 /* COMPLETED */,
        expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
        creationTime: Date.now()
    };
}
function getErrorFromResponse(requestName, response) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var responseJson, errorData;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, response.json()];
                case 1:
                    responseJson = _a.sent();
                    errorData = responseJson.error;
                    return [2 /*return*/, ERROR_FACTORY.create("request-failed" /* REQUEST_FAILED */, {
                            requestName: requestName,
                            serverCode: errorData.code,
                            serverMessage: errorData.message,
                            serverStatus: errorData.status
                        })];
            }
        });
    });
}
function getHeaders(_a) {
    var apiKey = _a.apiKey;
    return new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-goog-api-key': apiKey
    });
}
function getHeadersWithAuth(appConfig, _a) {
    var refreshToken = _a.refreshToken;
    var headers = getHeaders(appConfig);
    headers.append('Authorization', getAuthorizationHeader(refreshToken));
    return headers;
}
/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */
function retryIfServerError(fn) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var result;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fn()];
                case 1:
                    result = _a.sent();
                    if (result.status >= 500 && result.status < 600) {
                        // Internal Server Error. Retry request.
                        return [2 /*return*/, fn()];
                    }
                    return [2 /*return*/, result];
            }
        });
    });
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
    // This works because the server will never respond with fractions of a second.
    return Number(responseExpiresIn.replace('s', '000'));
}
function getAuthorizationHeader(refreshToken) {
    return INTERNAL_AUTH_VERSION + " " + refreshToken;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createInstallation(appConfig, _a) {
    var fid = _a.fid;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var endpoint, headers, body, request, response, responseValue, registeredInstallationEntry;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0:
                    endpoint = getInstallationsEndpoint(appConfig);
                    headers = getHeaders(appConfig);
                    body = {
                        fid: fid,
                        authVersion: INTERNAL_AUTH_VERSION,
                        appId: appConfig.appId,
                        sdkVersion: PACKAGE_VERSION
                    };
                    request = {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(body)
                    };
                    return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                case 1:
                    response = _b.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    responseValue = _b.sent();
                    registeredInstallationEntry = {
                        fid: responseValue.fid || fid,
                        registrationStatus: 2 /* COMPLETED */,
                        refreshToken: responseValue.refreshToken,
                        authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
                    };
                    return [2 /*return*/, registeredInstallationEntry];
                case 3: return [4 /*yield*/, getErrorFromResponse('Create Installation', response)];
                case 4: throw _b.sent();
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a promise that resolves after given time passes. */
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bufferToBase64UrlSafe(array) {
    var b64 = btoa(String.fromCharCode.apply(String, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(array)));
    return b64.replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
var INVALID_FID = '';
/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */
function generateFid() {
    try {
        // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
        // bytes. our implementation generates a 17 byte array instead.
        var fidByteArray = new Uint8Array(17);
        var crypto_1 = self.crypto || self.msCrypto;
        crypto_1.getRandomValues(fidByteArray);
        // Replace the first 4 random bits with the constant FID header of 0b0111.
        fidByteArray[0] = 112 + (fidByteArray[0] % 16);
        var fid = encode(fidByteArray);
        return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
    }
    catch (_a) {
        // FID generation errored
        return INVALID_FID;
    }
}
/** Converts a FID Uint8Array to a base64 string representation. */
function encode(fidByteArray) {
    var b64String = bufferToBase64UrlSafe(fidByteArray);
    // Remove the 23rd character that was added because of the extra 4 bits at the
    // end of our 17 byte array, and the '=' padding.
    return b64String.substr(0, 22);
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DATABASE_NAME = 'firebase-installations-database';
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = 'firebase-installations-store';
var dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_3__["openDb"])(DATABASE_NAME, DATABASE_VERSION, function (upgradeDB) {
            // We don't use 'break' in this switch statement, the fall-through
            // behavior is what we want, because if there are multiple versions between
            // the old version and the current version, we want ALL the migrations
            // that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch (upgradeDB.oldVersion) {
                case 0:
                    upgradeDB.createObjectStore(OBJECT_STORE_NAME);
            }
        });
    }
    return dbPromise;
}
/** Assigns or overwrites the record for the given key with the given value. */
function set(appConfig, value) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    return [4 /*yield*/, tx.objectStore(OBJECT_STORE_NAME).put(value, key)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, tx.complete];
                case 3:
                    _a.sent();
                    return [2 /*return*/, value];
            }
        });
    });
}
/** Removes record(s) from the objectStore that match the given key. */
function remove(appConfig) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    return [4 /*yield*/, tx.objectStore(OBJECT_STORE_NAME).delete(key)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, tx.complete];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */
function update(appConfig, updateFn) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx, store, oldValue, newValue;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    store = tx.objectStore(OBJECT_STORE_NAME);
                    return [4 /*yield*/, store.get(key)];
                case 2:
                    oldValue = _a.sent();
                    newValue = updateFn(oldValue);
                    if (!(newValue === undefined)) return [3 /*break*/, 4];
                    return [4 /*yield*/, store.delete(key)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, store.put(newValue, key)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [4 /*yield*/, tx.complete];
                case 7:
                    _a.sent();
                    return [2 /*return*/, newValue];
            }
        });
    });
}
function getKey(appConfig) {
    return appConfig.appName + "!" + appConfig.appId;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */
function getInstallationEntry(appConfig) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var registrationPromise, installationEntry, _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, update(appConfig, function (oldEntry) {
                        var installationEntry = updateOrCreateInstallationEntry(oldEntry);
                        var entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry);
                        registrationPromise = entryWithPromise.registrationPromise;
                        return entryWithPromise.installationEntry;
                    })];
                case 1:
                    installationEntry = _b.sent();
                    if (!(installationEntry.fid === INVALID_FID)) return [3 /*break*/, 3];
                    _a = {};
                    return [4 /*yield*/, registrationPromise];
                case 2: 
                // FID generation failed. Waiting for the FID from the server.
                return [2 /*return*/, (_a.installationEntry = _b.sent(), _a)];
                case 3: return [2 /*return*/, {
                        installationEntry: installationEntry,
                        registrationPromise: registrationPromise
                    }];
            }
        });
    });
}
/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */
function updateOrCreateInstallationEntry(oldEntry) {
    var entry = oldEntry || {
        fid: generateFid(),
        registrationStatus: 0 /* NOT_STARTED */
    };
    return clearTimedOutRequest(entry);
}
/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */
function triggerRegistrationIfNecessary(appConfig, installationEntry) {
    if (installationEntry.registrationStatus === 0 /* NOT_STARTED */) {
        if (!navigator.onLine) {
            // Registration required but app is offline.
            var registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */));
            return {
                installationEntry: installationEntry,
                registrationPromise: registrationPromiseWithError
            };
        }
        // Try registering. Change status to IN_PROGRESS.
        var inProgressEntry = {
            fid: installationEntry.fid,
            registrationStatus: 1 /* IN_PROGRESS */,
            registrationTime: Date.now()
        };
        var registrationPromise = registerInstallation(appConfig, inProgressEntry);
        return { installationEntry: inProgressEntry, registrationPromise: registrationPromise };
    }
    else if (installationEntry.registrationStatus === 1 /* IN_PROGRESS */) {
        return {
            installationEntry: installationEntry,
            registrationPromise: waitUntilFidRegistration(appConfig)
        };
    }
    else {
        return { installationEntry: installationEntry };
    }
}
/** This will be executed only once for each new Firebase Installation. */
function registerInstallation(appConfig, installationEntry) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var registeredInstallationEntry, e_1;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 7]);
                    return [4 /*yield*/, createInstallation(appConfig, installationEntry)];
                case 1:
                    registeredInstallationEntry = _a.sent();
                    return [2 /*return*/, set(appConfig, registeredInstallationEntry)];
                case 2:
                    e_1 = _a.sent();
                    if (!(isServerError(e_1) && e_1.serverCode === 409)) return [3 /*break*/, 4];
                    // Server returned a "FID can not be used" error.
                    // Generate a new ID next time.
                    return [4 /*yield*/, remove(appConfig)];
                case 3:
                    // Server returned a "FID can not be used" error.
                    // Generate a new ID next time.
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4: 
                // Registration failed. Set FID as not registered.
                return [4 /*yield*/, set(appConfig, {
                        fid: installationEntry.fid,
                        registrationStatus: 0 /* NOT_STARTED */
                    })];
                case 5:
                    // Registration failed. Set FID as not registered.
                    _a.sent();
                    _a.label = 6;
                case 6: throw e_1;
                case 7: return [2 /*return*/];
            }
        });
    });
}
/** Call if FID registration is pending in another request. */
function waitUntilFidRegistration(appConfig) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var entry, _a, installationEntry, registrationPromise;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, updateInstallationRequest(appConfig)];
                case 1:
                    entry = _b.sent();
                    _b.label = 2;
                case 2:
                    if (!(entry.registrationStatus === 1 /* IN_PROGRESS */)) return [3 /*break*/, 5];
                    // createInstallation request still in progress.
                    return [4 /*yield*/, sleep(100)];
                case 3:
                    // createInstallation request still in progress.
                    _b.sent();
                    return [4 /*yield*/, updateInstallationRequest(appConfig)];
                case 4:
                    entry = _b.sent();
                    return [3 /*break*/, 2];
                case 5:
                    if (!(entry.registrationStatus === 0 /* NOT_STARTED */)) return [3 /*break*/, 7];
                    return [4 /*yield*/, getInstallationEntry(appConfig)];
                case 6:
                    _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;
                    if (registrationPromise) {
                        return [2 /*return*/, registrationPromise];
                    }
                    else {
                        // if there is no registrationPromise, entry is registered.
                        return [2 /*return*/, installationEntry];
                    }
                case 7: return [2 /*return*/, entry];
            }
        });
    });
}
/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */
function updateInstallationRequest(appConfig) {
    return update(appConfig, function (oldEntry) {
        if (!oldEntry) {
            throw ERROR_FACTORY.create("installation-not-found" /* INSTALLATION_NOT_FOUND */);
        }
        return clearTimedOutRequest(oldEntry);
    });
}
function clearTimedOutRequest(entry) {
    if (hasInstallationRequestTimedOut(entry)) {
        return {
            fid: entry.fid,
            registrationStatus: 0 /* NOT_STARTED */
        };
    }
    return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
    return (installationEntry.registrationStatus === 1 /* IN_PROGRESS */ &&
        installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now());
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function generateAuthToken(appConfig, installationEntry) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var endpoint, headers, body, request, response, responseValue, completedAuthToken;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
                    headers = getHeadersWithAuth(appConfig, installationEntry);
                    body = {
                        installation: {
                            sdkVersion: PACKAGE_VERSION
                        }
                    };
                    request = {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(body)
                    };
                    return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    responseValue = _a.sent();
                    completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
                    return [2 /*return*/, completedAuthToken];
                case 3: return [4 /*yield*/, getErrorFromResponse('Generate Auth Token', response)];
                case 4: throw _a.sent();
            }
        });
    });
}
function getGenerateAuthTokenEndpoint(appConfig, _a) {
    var fid = _a.fid;
    return getInstallationsEndpoint(appConfig) + "/" + fid + "/authTokens:generate";
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */
function refreshAuthToken(appConfig, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var tokenPromise, entry, authToken, _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, update(appConfig, function (oldEntry) {
                        if (!isEntryRegistered(oldEntry)) {
                            throw ERROR_FACTORY.create("not-registered" /* NOT_REGISTERED */);
                        }
                        var oldAuthToken = oldEntry.authToken;
                        if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
                            // There is a valid token in the DB.
                            return oldEntry;
                        }
                        else if (oldAuthToken.requestStatus === 1 /* IN_PROGRESS */) {
                            // There already is a token request in progress.
                            tokenPromise = waitUntilAuthTokenRequest(appConfig, forceRefresh);
                            return oldEntry;
                        }
                        else {
                            // No token or token expired.
                            if (!navigator.onLine) {
                                throw ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */);
                            }
                            var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
                            tokenPromise = fetchAuthTokenFromServer(appConfig, inProgressEntry);
                            return inProgressEntry;
                        }
                    })];
                case 1:
                    entry = _b.sent();
                    if (!tokenPromise) return [3 /*break*/, 3];
                    return [4 /*yield*/, tokenPromise];
                case 2:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    _a = entry.authToken;
                    _b.label = 4;
                case 4:
                    authToken = _a;
                    return [2 /*return*/, authToken];
            }
        });
    });
}
/**
 * Call only if FID is registered and Auth Token request is in progress.
 */
function waitUntilAuthTokenRequest(appConfig, forceRefresh) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var entry, authToken;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateAuthTokenRequest(appConfig)];
                case 1:
                    entry = _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(entry.authToken.requestStatus === 1 /* IN_PROGRESS */)) return [3 /*break*/, 5];
                    // generateAuthToken still in progress.
                    return [4 /*yield*/, sleep(100)];
                case 3:
                    // generateAuthToken still in progress.
                    _a.sent();
                    return [4 /*yield*/, updateAuthTokenRequest(appConfig)];
                case 4:
                    entry = _a.sent();
                    return [3 /*break*/, 2];
                case 5:
                    authToken = entry.authToken;
                    if (authToken.requestStatus === 0 /* NOT_STARTED */) {
                        // The request timed out or failed in a different call. Try again.
                        return [2 /*return*/, refreshAuthToken(appConfig, forceRefresh)];
                    }
                    else {
                        return [2 /*return*/, authToken];
                    }
            }
        });
    });
}
/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */
function updateAuthTokenRequest(appConfig) {
    return update(appConfig, function (oldEntry) {
        if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered" /* NOT_REGISTERED */);
        }
        var oldAuthToken = oldEntry.authToken;
        if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, oldEntry), { authToken: { requestStatus: 0 /* NOT_STARTED */ } });
        }
        return oldEntry;
    });
}
function fetchAuthTokenFromServer(appConfig, installationEntry) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var authToken, updatedInstallationEntry, e_1, updatedInstallationEntry;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 8]);
                    return [4 /*yield*/, generateAuthToken(appConfig, installationEntry)];
                case 1:
                    authToken = _a.sent();
                    updatedInstallationEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, installationEntry), { authToken: authToken });
                    return [4 /*yield*/, set(appConfig, updatedInstallationEntry)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, authToken];
                case 3:
                    e_1 = _a.sent();
                    if (!(isServerError(e_1) && (e_1.serverCode === 401 || e_1.serverCode === 404))) return [3 /*break*/, 5];
                    // Server returned a "FID not found" or a "Invalid authentication" error.
                    // Generate a new ID next time.
                    return [4 /*yield*/, remove(appConfig)];
                case 4:
                    // Server returned a "FID not found" or a "Invalid authentication" error.
                    // Generate a new ID next time.
                    _a.sent();
                    return [3 /*break*/, 7];
                case 5:
                    updatedInstallationEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, installationEntry), { authToken: { requestStatus: 0 /* NOT_STARTED */ } });
                    return [4 /*yield*/, set(appConfig, updatedInstallationEntry)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: throw e_1;
                case 8: return [2 /*return*/];
            }
        });
    });
}
function isEntryRegistered(installationEntry) {
    return (installationEntry !== undefined &&
        installationEntry.registrationStatus === 2 /* COMPLETED */);
}
function isAuthTokenValid(authToken) {
    return (authToken.requestStatus === 2 /* COMPLETED */ &&
        !isAuthTokenExpired(authToken));
}
function isAuthTokenExpired(authToken) {
    var now = Date.now();
    return (now < authToken.creationTime ||
        authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER);
}
/** Returns an updated InstallationEntry with an InProgressAuthToken. */
function makeAuthTokenRequestInProgressEntry(oldEntry) {
    var inProgressAuthToken = {
        requestStatus: 1 /* IN_PROGRESS */,
        requestTime: Date.now()
    };
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, oldEntry), { authToken: inProgressAuthToken });
}
function hasAuthTokenRequestTimedOut(authToken) {
    return (authToken.requestStatus === 1 /* IN_PROGRESS */ &&
        authToken.requestTime + PENDING_TIMEOUT_MS < Date.now());
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getId(app) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var appConfig, _a, installationEntry, registrationPromise;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0:
                    appConfig = extractAppConfig(app);
                    return [4 /*yield*/, getInstallationEntry(appConfig)];
                case 1:
                    _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;
                    if (registrationPromise) {
                        registrationPromise.catch(console.error);
                    }
                    else {
                        // If the installation is already registered, update the authentication
                        // token if needed.
                        refreshAuthToken(appConfig).catch(console.error);
                    }
                    return [2 /*return*/, installationEntry.fid];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getToken(app, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var appConfig, authToken;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appConfig = extractAppConfig(app);
                    return [4 /*yield*/, completeInstallationRegistration(appConfig)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, refreshAuthToken(appConfig, forceRefresh)];
                case 2:
                    authToken = _a.sent();
                    return [2 /*return*/, authToken.token];
            }
        });
    });
}
function completeInstallationRegistration(appConfig) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var registrationPromise;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getInstallationEntry(appConfig)];
                case 1:
                    registrationPromise = (_a.sent()).registrationPromise;
                    if (!registrationPromise) return [3 /*break*/, 3];
                    // A createInstallation request is in progress. Wait until it finishes.
                    return [4 /*yield*/, registrationPromise];
                case 2:
                    // A createInstallation request is in progress. Wait until it finishes.
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deleteInstallation(appConfig, installationEntry) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var endpoint, headers, request, response;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = getDeleteEndpoint(appConfig, installationEntry);
                    headers = getHeadersWithAuth(appConfig, installationEntry);
                    request = {
                        method: 'DELETE',
                        headers: headers
                    };
                    return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, getErrorFromResponse('Delete Installation', response)];
                case 2: throw _a.sent();
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getDeleteEndpoint(appConfig, _a) {
    var fid = _a.fid;
    return getInstallationsEndpoint(appConfig) + "/" + fid;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deleteInstallation$1(app) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var appConfig, entry;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appConfig = extractAppConfig(app);
                    return [4 /*yield*/, update(appConfig, function (oldEntry) {
                            if (oldEntry && oldEntry.registrationStatus === 0 /* NOT_STARTED */) {
                                // Delete the unregistered entry without sending a deleteInstallation request.
                                return undefined;
                            }
                            return oldEntry;
                        })];
                case 1:
                    entry = _a.sent();
                    if (!entry) return [3 /*break*/, 6];
                    if (!(entry.registrationStatus === 1 /* IN_PROGRESS */)) return [3 /*break*/, 2];
                    // Can't delete while trying to register.
                    throw ERROR_FACTORY.create("delete-pending-registration" /* DELETE_PENDING_REGISTRATION */);
                case 2:
                    if (!(entry.registrationStatus === 2 /* COMPLETED */)) return [3 /*break*/, 6];
                    if (!!navigator.onLine) return [3 /*break*/, 3];
                    throw ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */);
                case 3: return [4 /*yield*/, deleteInstallation(appConfig, entry)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, remove(appConfig)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerInstallations(instance) {
    var installationsName = 'installations';
    var factoryMethod = function (app) {
        // Throws if app isn't configured properly.
        extractAppConfig(app);
        return {
            app: app,
            getId: function () { return getId(app); },
            getToken: function (forceRefresh) { return getToken(app, forceRefresh); },
            delete: function () { return deleteInstallation$1(app); }
        };
    };
    instance.INTERNAL.registerService(installationsName, factoryMethod);
}
registerInstallations(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/index.esm.js ***!
  \*********************************************************/
/*! exports provided: LogLevel, Logger, setLogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return setLogLevel; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    switch (logType) {
        /**
         * By default, `console.debug` is not displayed in the developer console (in
         * chrome). To avoid forcing users to have to opt-in to these logs twice
         * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
         * logs to the `console.log` function.
         */
        case LogLevel.DEBUG:
            console.log.apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
            break;
        case LogLevel.VERBOSE:
            console.log.apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
            break;
        case LogLevel.INFO:
            console.info.apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
            break;
        case LogLevel.WARN:
            console.warn.apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
            break;
        case LogLevel.ERROR:
            console.error.apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
            break;
        default:
            throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The log handler for the Logger instance.
         */
        this._logHandler = defaultLogHandler;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError('Invalid value assigned to `logLevel`');
            }
            this._logLevel = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
    };
    return Logger;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function setLogLevel(level) {
    instances.forEach(function (inst) {
        inst.logLevel = level;
    });
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/util/dist/index.cjs.js":
/*!*******************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.cjs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
var assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
var assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray = function (str) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
var byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var pos = 0, c = 0;
    while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray: function (input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray: function (input, webSafe) {
        this.init_();
        var charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
var base64Encode = function (str) {
    var utf8Bytes = stringToByteArray(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
var base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.reject = function () { };
        this.resolve = function () { };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(global.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    tslib.__extends(FirebaseError, _super);
    function FirebaseError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var customData = data[0] || {};
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage);
        // Keys with an underscore at the end of their name are not included in
        // error.data for some reason.
        // TODO: Replace with Object.entries when lib is updated to es2017.
        for (var _a = 0, _b = Object.keys(customData); _a < _b.length; _a++) {
            var key = _b[_a];
            if (key.slice(-1) !== '_') {
                if (key in error) {
                    console.warn("Overwriting FirebaseError base field \"" + key + "\" can cause unexpected behavior.");
                }
                error[key] = customData[key];
            }
        }
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? value.toString() : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var decode = function (token) {
    var header = {}, claims = {}, data = {}, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidTimestamp = function (token) {
    var claims = decode(token).claims;
    var now = Math.floor(new Date().getTime() / 1000);
    var validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var issuedAtTime = function (token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidFormat = function (token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isAdmin = function (token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    var res = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    var params = [];
    var _loop_1 = function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    };
    for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
        }
    });
    return obj;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = /** @class */ (function () {
    function Sha1() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, offset) {
        if (!offset) {
            offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (var i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        var lengthMinusBlock = length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}());

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/** Turn synchronous function into one called asynchronously. */
function async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Promise.resolve(true)
            .then(function () {
            fn.apply(void 0, args);
        })
            .catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
var validateArgCount = function (fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argumentNumber The index of the argument
 * @param optional Whether or not the argument is optional
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argumentNumber, optional) {
    var argName = '';
    switch (argumentNumber) {
        case 1:
            argName = optional ? 'first' : 'First';
            break;
        case 2:
            argName = optional ? 'second' : 'Second';
            break;
        case 3:
            argName = optional ? 'third' : 'Third';
            break;
        case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;
        default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
    }
    var error = fnName + ' failed: ';
    error += argName + ' argument ';
    return error;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, argumentNumber, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentNumber, callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentNumber, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray$1 = function (str) {
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

exports.CONSTANTS = CONSTANTS;
exports.Deferred = Deferred;
exports.ErrorFactory = ErrorFactory;
exports.FirebaseError = FirebaseError;
exports.Sha1 = Sha1;
exports.assert = assert;
exports.assertionError = assertionError;
exports.async = async;
exports.base64 = base64;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.contains = contains;
exports.createSubscribe = createSubscribe;
exports.decode = decode;
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.getUA = getUA;
exports.isAdmin = isAdmin;
exports.isBrowser = isBrowser;
exports.isEmpty = isEmpty;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isValidFormat = isValidFormat;
exports.isValidTimestamp = isValidTimestamp;
exports.issuedAtTime = issuedAtTime;
exports.jsonEval = jsonEval;
exports.map = map;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringLength = stringLength;
exports.stringToByteArray = stringToByteArray$1;
exports.stringify = stringify;
exports.validateArgCount = validateArgCount;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateNamespace = validateNamespace;
//# sourceMappingURL=index.cjs.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/dialog-polyfill/dialog-polyfill.js":
/*!*********************************************************!*\
  !*** ./node_modules/dialog-polyfill/dialog-polyfill.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function() {

  // nb. This is for IE10 and lower _only_.
  var supportCustomEvent = window.CustomEvent;
  if (!supportCustomEvent || typeof supportCustomEvent === 'object') {
    supportCustomEvent = function CustomEvent(event, x) {
      x = x || {};
      var ev = document.createEvent('CustomEvent');
      ev.initCustomEvent(event, !!x.bubbles, !!x.cancelable, x.detail || null);
      return ev;
    };
    supportCustomEvent.prototype = window.Event.prototype;
  }

  /**
   * @param {Element} el to check for stacking context
   * @return {boolean} whether this el or its parents creates a stacking context
   */
  function createsStackingContext(el) {
    while (el && el !== document.body) {
      var s = window.getComputedStyle(el);
      var invalid = function(k, ok) {
        return !(s[k] === undefined || s[k] === ok);
      }
      if (s.opacity < 1 ||
          invalid('zIndex', 'auto') ||
          invalid('transform', 'none') ||
          invalid('mixBlendMode', 'normal') ||
          invalid('filter', 'none') ||
          invalid('perspective', 'none') ||
          s['isolation'] === 'isolate' ||
          s.position === 'fixed' ||
          s.webkitOverflowScrolling === 'touch') {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  }

  /**
   * Finds the nearest <dialog> from the passed element.
   *
   * @param {Element} el to search from
   * @return {HTMLDialogElement} dialog found
   */
  function findNearestDialog(el) {
    while (el) {
      if (el.localName === 'dialog') {
        return /** @type {HTMLDialogElement} */ (el);
      }
      el = el.parentElement;
    }
    return null;
  }

  /**
   * Blur the specified element, as long as it's not the HTML body element.
   * This works around an IE9/10 bug - blurring the body causes Windows to
   * blur the whole application.
   *
   * @param {Element} el to blur
   */
  function safeBlur(el) {
    if (el && el.blur && el !== document.body) {
      el.blur();
    }
  }

  /**
   * @param {!NodeList} nodeList to search
   * @param {Node} node to find
   * @return {boolean} whether node is inside nodeList
   */
  function inNodeList(nodeList, node) {
    for (var i = 0; i < nodeList.length; ++i) {
      if (nodeList[i] === node) {
        return true;
      }
    }
    return false;
  }

  /**
   * @param {HTMLFormElement} el to check
   * @return {boolean} whether this form has method="dialog"
   */
  function isFormMethodDialog(el) {
    if (!el || !el.hasAttribute('method')) {
      return false;
    }
    return el.getAttribute('method').toLowerCase() === 'dialog';
  }

  /**
   * @param {!HTMLDialogElement} dialog to upgrade
   * @constructor
   */
  function dialogPolyfillInfo(dialog) {
    this.dialog_ = dialog;
    this.replacedStyleTop_ = false;
    this.openAsModal_ = false;

    // Set a11y role. Browsers that support dialog implicitly know this already.
    if (!dialog.hasAttribute('role')) {
      dialog.setAttribute('role', 'dialog');
    }

    dialog.show = this.show.bind(this);
    dialog.showModal = this.showModal.bind(this);
    dialog.close = this.close.bind(this);

    if (!('returnValue' in dialog)) {
      dialog.returnValue = '';
    }

    if ('MutationObserver' in window) {
      var mo = new MutationObserver(this.maybeHideModal.bind(this));
      mo.observe(dialog, {attributes: true, attributeFilter: ['open']});
    } else {
      // IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also
      // seem to fire even if the element was removed as part of a parent removal. Use the removed
      // events to force downgrade (useful if removed/immediately added).
      var removed = false;
      var cb = function() {
        removed ? this.downgradeModal() : this.maybeHideModal();
        removed = false;
      }.bind(this);
      var timeout;
      var delayModel = function(ev) {
        if (ev.target !== dialog) { return; }  // not for a child element
        var cand = 'DOMNodeRemoved';
        removed |= (ev.type.substr(0, cand.length) === cand);
        window.clearTimeout(timeout);
        timeout = window.setTimeout(cb, 0);
      };
      ['DOMAttrModified', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument'].forEach(function(name) {
        dialog.addEventListener(name, delayModel);
      });
    }
    // Note that the DOM is observed inside DialogManager while any dialog
    // is being displayed as a modal, to catch modal removal from the DOM.

    Object.defineProperty(dialog, 'open', {
      set: this.setOpen.bind(this),
      get: dialog.hasAttribute.bind(dialog, 'open')
    });

    this.backdrop_ = document.createElement('div');
    this.backdrop_.className = 'backdrop';
    this.backdrop_.addEventListener('click', this.backdropClick_.bind(this));
  }

  dialogPolyfillInfo.prototype = {

    get dialog() {
      return this.dialog_;
    },

    /**
     * Maybe remove this dialog from the modal top layer. This is called when
     * a modal dialog may no longer be tenable, e.g., when the dialog is no
     * longer open or is no longer part of the DOM.
     */
    maybeHideModal: function() {
      if (this.dialog_.hasAttribute('open') && document.body.contains(this.dialog_)) { return; }
      this.downgradeModal();
    },

    /**
     * Remove this dialog from the modal top layer, leaving it as a non-modal.
     */
    downgradeModal: function() {
      if (!this.openAsModal_) { return; }
      this.openAsModal_ = false;
      this.dialog_.style.zIndex = '';

      // This won't match the native <dialog> exactly because if the user set top on a centered
      // polyfill dialog, that top gets thrown away when the dialog is closed. Not sure it's
      // possible to polyfill this perfectly.
      if (this.replacedStyleTop_) {
        this.dialog_.style.top = '';
        this.replacedStyleTop_ = false;
      }

      // Clear the backdrop and remove from the manager.
      this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_);
      dialogPolyfill.dm.removeDialog(this);
    },

    /**
     * @param {boolean} value whether to open or close this dialog
     */
    setOpen: function(value) {
      if (value) {
        this.dialog_.hasAttribute('open') || this.dialog_.setAttribute('open', '');
      } else {
        this.dialog_.removeAttribute('open');
        this.maybeHideModal();  // nb. redundant with MutationObserver
      }
    },

    /**
     * Handles clicks on the fake .backdrop element, redirecting them as if
     * they were on the dialog itself.
     *
     * @param {!Event} e to redirect
     */
    backdropClick_: function(e) {
      if (!this.dialog_.hasAttribute('tabindex')) {
        // Clicking on the backdrop should move the implicit cursor, even if dialog cannot be
        // focused. Create a fake thing to focus on. If the backdrop was _before_ the dialog, this
        // would not be needed - clicks would move the implicit cursor there.
        var fake = document.createElement('div');
        this.dialog_.insertBefore(fake, this.dialog_.firstChild);
        fake.tabIndex = -1;
        fake.focus();
        this.dialog_.removeChild(fake);
      } else {
        this.dialog_.focus();
      }

      var redirectedEvent = document.createEvent('MouseEvents');
      redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window,
          e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey,
          e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
      this.dialog_.dispatchEvent(redirectedEvent);
      e.stopPropagation();
    },

    /**
     * Focuses on the first focusable element within the dialog. This will always blur the current
     * focus, even if nothing within the dialog is found.
     */
    focus_: function() {
      // Find element with `autofocus` attribute, or fall back to the first form/tabindex control.
      var target = this.dialog_.querySelector('[autofocus]:not([disabled])');
      if (!target && this.dialog_.tabIndex >= 0) {
        target = this.dialog_;
      }
      if (!target) {
        // Note that this is 'any focusable area'. This list is probably not exhaustive, but the
        // alternative involves stepping through and trying to focus everything.
        var opts = ['button', 'input', 'keygen', 'select', 'textarea'];
        var query = opts.map(function(el) {
          return el + ':not([disabled])';
        });
        // TODO(samthor): tabindex values that are not numeric are not focusable.
        query.push('[tabindex]:not([disabled]):not([tabindex=""])');  // tabindex != "", not disabled
        target = this.dialog_.querySelector(query.join(', '));
      }
      safeBlur(document.activeElement);
      target && target.focus();
    },

    /**
     * Sets the zIndex for the backdrop and dialog.
     *
     * @param {number} dialogZ
     * @param {number} backdropZ
     */
    updateZIndex: function(dialogZ, backdropZ) {
      if (dialogZ < backdropZ) {
        throw new Error('dialogZ should never be < backdropZ');
      }
      this.dialog_.style.zIndex = dialogZ;
      this.backdrop_.style.zIndex = backdropZ;
    },

    /**
     * Shows the dialog. If the dialog is already open, this does nothing.
     */
    show: function() {
      if (!this.dialog_.open) {
        this.setOpen(true);
        this.focus_();
      }
    },

    /**
     * Show this dialog modally.
     */
    showModal: function() {
      if (this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is already open, and therefore cannot be opened modally.');
      }
      if (!document.body.contains(this.dialog_)) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is not in a Document.');
      }
      if (!dialogPolyfill.dm.pushDialog(this)) {
        throw new Error('Failed to execute \'showModal\' on dialog: There are too many open modal dialogs.');
      }

      if (createsStackingContext(this.dialog_.parentElement)) {
        console.warn('A dialog is being shown inside a stacking context. ' +
            'This may cause it to be unusable. For more information, see this link: ' +
            'https://github.com/GoogleChrome/dialog-polyfill/#stacking-context');
      }

      this.setOpen(true);
      this.openAsModal_ = true;

      // Optionally center vertically, relative to the current viewport.
      if (dialogPolyfill.needsCentering(this.dialog_)) {
        dialogPolyfill.reposition(this.dialog_);
        this.replacedStyleTop_ = true;
      } else {
        this.replacedStyleTop_ = false;
      }

      // Insert backdrop.
      this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling);

      // Focus on whatever inside the dialog.
      this.focus_();
    },

    /**
     * Closes this HTMLDialogElement. This is optional vs clearing the open
     * attribute, however this fires a 'close' event.
     *
     * @param {string=} opt_returnValue to use as the returnValue
     */
    close: function(opt_returnValue) {
      if (!this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'close\' on dialog: The element does not have an \'open\' attribute, and therefore cannot be closed.');
      }
      this.setOpen(false);

      // Leave returnValue untouched in case it was set directly on the element
      if (opt_returnValue !== undefined) {
        this.dialog_.returnValue = opt_returnValue;
      }

      // Triggering "close" event for any attached listeners on the <dialog>.
      var closeEvent = new supportCustomEvent('close', {
        bubbles: false,
        cancelable: false
      });
      this.dialog_.dispatchEvent(closeEvent);
    }

  };

  var dialogPolyfill = {};

  dialogPolyfill.reposition = function(element) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var topValue = scrollTop + (window.innerHeight - element.offsetHeight) / 2;
    element.style.top = Math.max(scrollTop, topValue) + 'px';
  };

  dialogPolyfill.isInlinePositionSetByStylesheet = function(element) {
    for (var i = 0; i < document.styleSheets.length; ++i) {
      var styleSheet = document.styleSheets[i];
      var cssRules = null;
      // Some browsers throw on cssRules.
      try {
        cssRules = styleSheet.cssRules;
      } catch (e) {}
      if (!cssRules) { continue; }
      for (var j = 0; j < cssRules.length; ++j) {
        var rule = cssRules[j];
        var selectedNodes = null;
        // Ignore errors on invalid selector texts.
        try {
          selectedNodes = document.querySelectorAll(rule.selectorText);
        } catch(e) {}
        if (!selectedNodes || !inNodeList(selectedNodes, element)) {
          continue;
        }
        var cssTop = rule.style.getPropertyValue('top');
        var cssBottom = rule.style.getPropertyValue('bottom');
        if ((cssTop && cssTop !== 'auto') || (cssBottom && cssBottom !== 'auto')) {
          return true;
        }
      }
    }
    return false;
  };

  dialogPolyfill.needsCentering = function(dialog) {
    var computedStyle = window.getComputedStyle(dialog);
    if (computedStyle.position !== 'absolute') {
      return false;
    }

    // We must determine whether the top/bottom specified value is non-auto.  In
    // WebKit/Blink, checking computedStyle.top == 'auto' is sufficient, but
    // Firefox returns the used value. So we do this crazy thing instead: check
    // the inline style and then go through CSS rules.
    if ((dialog.style.top !== 'auto' && dialog.style.top !== '') ||
        (dialog.style.bottom !== 'auto' && dialog.style.bottom !== '')) {
      return false;
    }
    return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);
  };

  /**
   * @param {!Element} element to force upgrade
   */
  dialogPolyfill.forceRegisterDialog = function(element) {
    if (window.HTMLDialogElement || element.showModal) {
      console.warn('This browser already supports <dialog>, the polyfill ' +
          'may not work correctly', element);
    }
    if (element.localName !== 'dialog') {
      throw new Error('Failed to register dialog: The element is not a dialog.');
    }
    new dialogPolyfillInfo(/** @type {!HTMLDialogElement} */ (element));
  };

  /**
   * @param {!Element} element to upgrade, if necessary
   */
  dialogPolyfill.registerDialog = function(element) {
    if (!element.showModal) {
      dialogPolyfill.forceRegisterDialog(element);
    }
  };

  /**
   * @constructor
   */
  dialogPolyfill.DialogManager = function() {
    /** @type {!Array<!dialogPolyfillInfo>} */
    this.pendingDialogStack = [];

    var checkDOM = this.checkDOM_.bind(this);

    // The overlay is used to simulate how a modal dialog blocks the document.
    // The blocking dialog is positioned on top of the overlay, and the rest of
    // the dialogs on the pending dialog stack are positioned below it. In the
    // actual implementation, the modal dialog stacking is controlled by the
    // top layer, where z-index has no effect.
    this.overlay = document.createElement('div');
    this.overlay.className = '_dialog_overlay';
    this.overlay.addEventListener('click', function(e) {
      this.forwardTab_ = undefined;
      e.stopPropagation();
      checkDOM([]);  // sanity-check DOM
    }.bind(this));

    this.handleKey_ = this.handleKey_.bind(this);
    this.handleFocus_ = this.handleFocus_.bind(this);

    this.zIndexLow_ = 100000;
    this.zIndexHigh_ = 100000 + 150;

    this.forwardTab_ = undefined;

    if ('MutationObserver' in window) {
      this.mo_ = new MutationObserver(function(records) {
        var removed = [];
        records.forEach(function(rec) {
          for (var i = 0, c; c = rec.removedNodes[i]; ++i) {
            if (!(c instanceof Element)) {
              continue;
            } else if (c.localName === 'dialog') {
              removed.push(c);
            }
            removed = removed.concat(c.querySelectorAll('dialog'));
          }
        });
        removed.length && checkDOM(removed);
      });
    }
  };

  /**
   * Called on the first modal dialog being shown. Adds the overlay and related
   * handlers.
   */
  dialogPolyfill.DialogManager.prototype.blockDocument = function() {
    document.documentElement.addEventListener('focus', this.handleFocus_, true);
    document.addEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.observe(document, {childList: true, subtree: true});
  };

  /**
   * Called on the first modal dialog being removed, i.e., when no more modal
   * dialogs are visible.
   */
  dialogPolyfill.DialogManager.prototype.unblockDocument = function() {
    document.documentElement.removeEventListener('focus', this.handleFocus_, true);
    document.removeEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.disconnect();
  };

  /**
   * Updates the stacking of all known dialogs.
   */
  dialogPolyfill.DialogManager.prototype.updateStacking = function() {
    var zIndex = this.zIndexHigh_;

    for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
      dpi.updateZIndex(--zIndex, --zIndex);
      if (i === 0) {
        this.overlay.style.zIndex = --zIndex;
      }
    }

    // Make the overlay a sibling of the dialog itself.
    var last = this.pendingDialogStack[0];
    if (last) {
      var p = last.dialog.parentNode || document.body;
      p.appendChild(this.overlay);
    } else if (this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
  };

  /**
   * @param {Element} candidate to check if contained or is the top-most modal dialog
   * @return {boolean} whether candidate is contained in top dialog
   */
  dialogPolyfill.DialogManager.prototype.containedByTopDialog_ = function(candidate) {
    while (candidate = findNearestDialog(candidate)) {
      for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
        if (dpi.dialog === candidate) {
          return i === 0;  // only valid if top-most
        }
      }
      candidate = candidate.parentElement;
    }
    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleFocus_ = function(event) {
    if (this.containedByTopDialog_(event.target)) { return; }

    event.preventDefault();
    event.stopPropagation();
    safeBlur(/** @type {Element} */ (event.target));

    if (this.forwardTab_ === undefined) { return; }  // move focus only from a tab key

    var dpi = this.pendingDialogStack[0];
    var dialog = dpi.dialog;
    var position = dialog.compareDocumentPosition(event.target);
    if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      if (this.forwardTab_) {  // forward
        dpi.focus_();
      } else {  // backwards
        document.documentElement.focus();
      }
    } else {
      // TODO: Focus after the dialog, is ignored.
    }

    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleKey_ = function(event) {
    this.forwardTab_ = undefined;
    if (event.keyCode === 27) {
      event.preventDefault();
      event.stopPropagation();
      var cancelEvent = new supportCustomEvent('cancel', {
        bubbles: false,
        cancelable: true
      });
      var dpi = this.pendingDialogStack[0];
      if (dpi && dpi.dialog.dispatchEvent(cancelEvent)) {
        dpi.dialog.close();
      }
    } else if (event.keyCode === 9) {
      this.forwardTab_ = !event.shiftKey;
    }
  };

  /**
   * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are
   * removed and immediately readded don't stay modal, they become normal.
   *
   * @param {!Array<!HTMLDialogElement>} removed that have definitely been removed
   */
  dialogPolyfill.DialogManager.prototype.checkDOM_ = function(removed) {
    // This operates on a clone because it may cause it to change. Each change also calls
    // updateStacking, which only actually needs to happen once. But who removes many modal dialogs
    // at a time?!
    var clone = this.pendingDialogStack.slice();
    clone.forEach(function(dpi) {
      if (removed.indexOf(dpi.dialog) !== -1) {
        dpi.downgradeModal();
      } else {
        dpi.maybeHideModal();
      }
    });
  };

  /**
   * @param {!dialogPolyfillInfo} dpi
   * @return {boolean} whether the dialog was allowed
   */
  dialogPolyfill.DialogManager.prototype.pushDialog = function(dpi) {
    var allowed = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;
    if (this.pendingDialogStack.length >= allowed) {
      return false;
    }
    if (this.pendingDialogStack.unshift(dpi) === 1) {
      this.blockDocument();
    }
    this.updateStacking();
    return true;
  };

  /**
   * @param {!dialogPolyfillInfo} dpi
   */
  dialogPolyfill.DialogManager.prototype.removeDialog = function(dpi) {
    var index = this.pendingDialogStack.indexOf(dpi);
    if (index === -1) { return; }

    this.pendingDialogStack.splice(index, 1);
    if (this.pendingDialogStack.length === 0) {
      this.unblockDocument();
    }
    this.updateStacking();
  };

  dialogPolyfill.dm = new dialogPolyfill.DialogManager();
  dialogPolyfill.formSubmitter = null;
  dialogPolyfill.useValue = null;

  /**
   * Installs global handlers, such as click listers and native method overrides. These are needed
   * even if a no dialog is registered, as they deal with <form method="dialog">.
   */
  if (window.HTMLDialogElement === undefined) {

    /**
     * If HTMLFormElement translates method="DIALOG" into 'get', then replace the descriptor with
     * one that returns the correct value.
     */
    var testForm = document.createElement('form');
    testForm.setAttribute('method', 'dialog');
    if (testForm.method !== 'dialog') {
      var methodDescriptor = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'method');
      if (methodDescriptor) {
        // nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything
        // and don't bother to update the element.
        var realGet = methodDescriptor.get;
        methodDescriptor.get = function() {
          if (isFormMethodDialog(this)) {
            return 'dialog';
          }
          return realGet.call(this);
        };
        var realSet = methodDescriptor.set;
        methodDescriptor.set = function(v) {
          if (typeof v === 'string' && v.toLowerCase() === 'dialog') {
            return this.setAttribute('method', v);
          }
          return realSet.call(this, v);
        };
        Object.defineProperty(HTMLFormElement.prototype, 'method', methodDescriptor);
      }
    }

    /**
     * Global 'click' handler, to capture the <input type="submit"> or <button> element which has
     * submitted a <form method="dialog">. Needed as Safari and others don't report this inside
     * document.activeElement.
     */
    document.addEventListener('click', function(ev) {
      dialogPolyfill.formSubmitter = null;
      dialogPolyfill.useValue = null;
      if (ev.defaultPrevented) { return; }  // e.g. a submit which prevents default submission

      var target = /** @type {Element} */ (ev.target);
      if (!target || !isFormMethodDialog(target.form)) { return; }

      var valid = (target.type === 'submit' && ['button', 'input'].indexOf(target.localName) > -1);
      if (!valid) {
        if (!(target.localName === 'input' && target.type === 'image')) { return; }
        // this is a <input type="image">, which can submit forms
        dialogPolyfill.useValue = ev.offsetX + ',' + ev.offsetY;
      }

      var dialog = findNearestDialog(target);
      if (!dialog) { return; }

      dialogPolyfill.formSubmitter = target;
    }, false);

    /**
     * Replace the native HTMLFormElement.submit() method, as it won't fire the
     * submit event and give us a chance to respond.
     */
    var nativeFormSubmit = HTMLFormElement.prototype.submit;
    var replacementFormSubmit = function () {
      if (!isFormMethodDialog(this)) {
        return nativeFormSubmit.call(this);
      }
      var dialog = findNearestDialog(this);
      dialog && dialog.close();
    };
    HTMLFormElement.prototype.submit = replacementFormSubmit;

    /**
     * Global form 'dialog' method handler. Closes a dialog correctly on submit
     * and possibly sets its return value.
     */
    document.addEventListener('submit', function(ev) {
      var form = /** @type {HTMLFormElement} */ (ev.target);
      if (!isFormMethodDialog(form)) { return; }
      ev.preventDefault();

      var dialog = findNearestDialog(form);
      if (!dialog) { return; }

      // Forms can only be submitted via .submit() or a click (?), but anyway: sanity-check that
      // the submitter is correct before using its value as .returnValue.
      var s = dialogPolyfill.formSubmitter;
      if (s && s.form === form) {
        dialog.close(dialogPolyfill.useValue || s.value);
      } else {
        dialog.close();
      }
      dialogPolyfill.formSubmitter = null;
    }, true);
  }

  dialogPolyfill['forceRegisterDialog'] = dialogPolyfill.forceRegisterDialog;
  dialogPolyfill['registerDialog'] = dialogPolyfill.registerDialog;

  if ( true && 'amd' in __webpack_require__(/*! !webpack amd define */ "./node_modules/next/node_modules/webpack/buildin/amd-define.js")) {
    // AMD support
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return dialogPolyfill; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( true && typeof module['exports'] === 'object') {
    // CommonJS support
    module['exports'] = dialogPolyfill;
  } else {
    // all others
    window['dialogPolyfill'] = dialogPolyfill;
  }
})();


/***/ }),

/***/ "./node_modules/firebase/analytics/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/analytics/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/analytics */ "./node_modules/@firebase/analytics/dist/index.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/app/dist/index.cjs.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(__webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js"));

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = firebase;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ "./node_modules/@firebase/auth/dist/auth.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebaseui/dist/esm.js":
/*!*********************************************!*\
  !*** ./node_modules/firebaseui/dist/esm.js ***!
  \*********************************************/
/*! exports provided: auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var dialog_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dialog-polyfill */ "./node_modules/dialog-polyfill/dialog-polyfill.js");
/* harmony import */ var dialog_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dialog_polyfill__WEBPACK_IMPORTED_MODULE_2__);
(function() {/*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var componentHandler={upgradeDom:function(optJsClass,optCssClass){},upgradeElement:function(element,optJsClass){},upgradeElements:function(elements){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(jsClass,callback){},register:function(config){},downgradeElements:function(nodes){}};
componentHandler=function(){var registeredComponents_=[];var createdComponents_=[];var componentConfigProperty_="mdlComponentConfigInternal_";function findRegisteredClass_(name,optReplace){for(var i=0;i<registeredComponents_.length;i++)if(registeredComponents_[i].className===name){if(typeof optReplace!=="undefined")registeredComponents_[i]=optReplace;return registeredComponents_[i]}return false}function getUpgradedListOfElement_(element){var dataUpgraded=element.getAttribute("data-upgraded");return dataUpgraded===
null?[""]:dataUpgraded.split(",")}function isElementUpgraded_(element,jsClass){var upgradedList=getUpgradedListOfElement_(element);return upgradedList.indexOf(jsClass)!==-1}function createEvent_(eventType,bubbles,cancelable){if("CustomEvent"in window&&typeof window.CustomEvent==="function")return new CustomEvent(eventType,{bubbles:bubbles,cancelable:cancelable});else{var ev=document.createEvent("Events");ev.initEvent(eventType,bubbles,cancelable);return ev}}function upgradeDomInternal(optJsClass,
optCssClass){if(typeof optJsClass==="undefined"&&typeof optCssClass==="undefined")for(var i=0;i<registeredComponents_.length;i++)upgradeDomInternal(registeredComponents_[i].className,registeredComponents_[i].cssClass);else{var jsClass=optJsClass;if(typeof optCssClass==="undefined"){var registeredClass=findRegisteredClass_(jsClass);if(registeredClass)optCssClass=registeredClass.cssClass}var elements=document.querySelectorAll("."+optCssClass);for(var n=0;n<elements.length;n++)upgradeElementInternal(elements[n],
jsClass)}}function upgradeElementInternal(element,optJsClass){if(!(typeof element==="object"&&element instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var upgradingEv=createEvent_("mdl-componentupgrading",true,true);element.dispatchEvent(upgradingEv);if(upgradingEv.defaultPrevented)return;var upgradedList=getUpgradedListOfElement_(element);var classesToUpgrade=[];if(!optJsClass){var classList=element.classList;registeredComponents_.forEach(function(component){if(classList.contains(component.cssClass)&&
classesToUpgrade.indexOf(component)===-1&&!isElementUpgraded_(element,component.className))classesToUpgrade.push(component)})}else if(!isElementUpgraded_(element,optJsClass))classesToUpgrade.push(findRegisteredClass_(optJsClass));for(var i=0,n=classesToUpgrade.length,registeredClass;i<n;i++){registeredClass=classesToUpgrade[i];if(registeredClass){upgradedList.push(registeredClass.className);element.setAttribute("data-upgraded",upgradedList.join(","));var instance=new registeredClass.classConstructor(element);
instance[componentConfigProperty_]=registeredClass;createdComponents_.push(instance);for(var j=0,m=registeredClass.callbacks.length;j<m;j++)registeredClass.callbacks[j](element);if(registeredClass.widget)element[registeredClass.className]=instance}else throw new Error("Unable to find a registered component for the given class.");var upgradedEv=createEvent_("mdl-componentupgraded",true,false);element.dispatchEvent(upgradedEv)}}function upgradeElementsInternal(elements){if(!Array.isArray(elements))if(elements instanceof
Element)elements=[elements];else elements=Array.prototype.slice.call(elements);for(var i=0,n=elements.length,element;i<n;i++){element=elements[i];if(element instanceof HTMLElement){upgradeElementInternal(element);if(element.children.length>0)upgradeElementsInternal(element.children)}}}function registerInternal(config){var widgetMissing=typeof config.widget==="undefined"&&typeof config["widget"]==="undefined";var widget=true;if(!widgetMissing)widget=config.widget||config["widget"];var newConfig={classConstructor:config.constructor||
config["constructor"],className:config.classAsString||config["classAsString"],cssClass:config.cssClass||config["cssClass"],widget:widget,callbacks:[]};registeredComponents_.forEach(function(item){if(item.cssClass===newConfig.cssClass)throw new Error("The provided cssClass has already been registered: "+item.cssClass);if(item.className===newConfig.className)throw new Error("The provided className has already been registered");});if(config.constructor.prototype.hasOwnProperty(componentConfigProperty_))throw new Error("MDL component classes must not have "+
componentConfigProperty_+" defined as a property.");var found=findRegisteredClass_(config.classAsString,newConfig);if(!found)registeredComponents_.push(newConfig)}function registerUpgradedCallbackInternal(jsClass,callback){var regClass=findRegisteredClass_(jsClass);if(regClass)regClass.callbacks.push(callback)}function upgradeAllRegisteredInternal(){for(var n=0;n<registeredComponents_.length;n++)upgradeDomInternal(registeredComponents_[n].className)}function deconstructComponentInternal(component){if(component){var componentIndex=
createdComponents_.indexOf(component);createdComponents_.splice(componentIndex,1);var upgrades=component.element_.getAttribute("data-upgraded").split(",");var componentPlace=upgrades.indexOf(component[componentConfigProperty_].classAsString);upgrades.splice(componentPlace,1);component.element_.setAttribute("data-upgraded",upgrades.join(","));var ev=createEvent_("mdl-componentdowngraded",true,false);component.element_.dispatchEvent(ev)}}function downgradeNodesInternal(nodes){var downgradeNode=function(node){createdComponents_.filter(function(item){return item.element_===
node}).forEach(deconstructComponentInternal)};if(nodes instanceof Array||nodes instanceof NodeList)for(var n=0;n<nodes.length;n++)downgradeNode(nodes[n]);else if(nodes instanceof Node)downgradeNode(nodes);else throw new Error("Invalid argument provided to downgrade MDL nodes.");}return{upgradeDom:upgradeDomInternal,upgradeElement:upgradeElementInternal,upgradeElements:upgradeElementsInternal,upgradeAllRegistered:upgradeAllRegisteredInternal,registerUpgradedCallback:registerUpgradedCallbackInternal,
register:registerInternal,downgradeElements:downgradeNodesInternal}}();componentHandler.ComponentConfigPublic;componentHandler.ComponentConfig;componentHandler.Component;componentHandler["upgradeDom"]=componentHandler.upgradeDom;componentHandler["upgradeElement"]=componentHandler.upgradeElement;componentHandler["upgradeElements"]=componentHandler.upgradeElements;componentHandler["upgradeAllRegistered"]=componentHandler.upgradeAllRegistered;componentHandler["registerUpgradedCallback"]=componentHandler.registerUpgradedCallback;
componentHandler["register"]=componentHandler.register;componentHandler["downgradeElements"]=componentHandler.downgradeElements;window.componentHandler=componentHandler;window["componentHandler"]=componentHandler;
window.addEventListener("load",function(){if("classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach){document.documentElement.classList.add("mdl-js");componentHandler.upgradeAllRegistered()}else{componentHandler.upgradeElement=function(){};componentHandler.register=function(){}}});(function(){var MaterialButton=function MaterialButton(element){this.element_=element;this.init()};window["MaterialButton"]=MaterialButton;MaterialButton.prototype.Constant_={};MaterialButton.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"};MaterialButton.prototype.blurHandler_=function(event){if(event)this.element_.blur()};MaterialButton.prototype.disable=function(){this.element_.disabled=true};MaterialButton.prototype["disable"]=
MaterialButton.prototype.disable;MaterialButton.prototype.enable=function(){this.element_.disabled=false};MaterialButton.prototype["enable"]=MaterialButton.prototype.enable;MaterialButton.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var rippleContainer=document.createElement("span");rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);this.rippleElement_=document.createElement("span");this.rippleElement_.classList.add(this.CssClasses_.RIPPLE);
rippleContainer.appendChild(this.rippleElement_);this.boundRippleBlurHandler=this.blurHandler_.bind(this);this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler);this.element_.appendChild(rippleContainer)}this.boundButtonBlurHandler=this.blurHandler_.bind(this);this.element_.addEventListener("mouseup",this.boundButtonBlurHandler);this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}};componentHandler.register({constructor:MaterialButton,classAsString:"MaterialButton",
cssClass:"mdl-js-button",widget:true})})();(function(){var MaterialProgress=function MaterialProgress(element){this.element_=element;this.init()};window["MaterialProgress"]=MaterialProgress;MaterialProgress.prototype.Constant_={};MaterialProgress.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"};MaterialProgress.prototype.setProgress=function(p){if(this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS))return;this.progressbar_.style.width=p+"%"};MaterialProgress.prototype["setProgress"]=MaterialProgress.prototype.setProgress;
MaterialProgress.prototype.setBuffer=function(p){this.bufferbar_.style.width=p+"%";this.auxbar_.style.width=100-p+"%"};MaterialProgress.prototype["setBuffer"]=MaterialProgress.prototype.setBuffer;MaterialProgress.prototype.init=function(){if(this.element_){var el=document.createElement("div");el.className="progressbar bar bar1";this.element_.appendChild(el);this.progressbar_=el;el=document.createElement("div");el.className="bufferbar bar bar2";this.element_.appendChild(el);this.bufferbar_=el;el=document.createElement("div");
el.className="auxbar bar bar3";this.element_.appendChild(el);this.auxbar_=el;this.progressbar_.style.width="0%";this.bufferbar_.style.width="100%";this.auxbar_.style.width="0%";this.element_.classList.add("is-upgraded")}};componentHandler.register({constructor:MaterialProgress,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:true})})();(function(){var MaterialSpinner=function MaterialSpinner(element){this.element_=element;this.init()};window["MaterialSpinner"]=MaterialSpinner;MaterialSpinner.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4};MaterialSpinner.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"};
MaterialSpinner.prototype.createLayer=function(index){var layer=document.createElement("div");layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER);layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+index);var leftClipper=document.createElement("div");leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var gapPatch=document.createElement("div");gapPatch.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var rightClipper=
document.createElement("div");rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);var circleOwners=[leftClipper,gapPatch,rightClipper];for(var i=0;i<circleOwners.length;i++){var circle=document.createElement("div");circle.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE);circleOwners[i].appendChild(circle)}layer.appendChild(leftClipper);layer.appendChild(gapPatch);layer.appendChild(rightClipper);this.element_.appendChild(layer)};
MaterialSpinner.prototype["createLayer"]=MaterialSpinner.prototype.createLayer;MaterialSpinner.prototype.stop=function(){this.element_.classList.remove("is-active")};MaterialSpinner.prototype["stop"]=MaterialSpinner.prototype.stop;MaterialSpinner.prototype.start=function(){this.element_.classList.add("is-active")};MaterialSpinner.prototype["start"]=MaterialSpinner.prototype.start;MaterialSpinner.prototype.init=function(){if(this.element_){for(var i=1;i<=this.Constant_.MDL_SPINNER_LAYER_COUNT;i++)this.createLayer(i);
this.element_.classList.add("is-upgraded")}};componentHandler.register({constructor:MaterialSpinner,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:true})})();(function(){var MaterialTextfield=function MaterialTextfield(element){this.element_=element;this.maxRows=this.Constant_.NO_MAX_ROWS;this.init()};window["MaterialTextfield"]=MaterialTextfield;MaterialTextfield.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"};MaterialTextfield.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"};
MaterialTextfield.prototype.onKeyDown_=function(event){var currentRowCount=event.target.value.split("\n").length;if(event.keyCode===13)if(currentRowCount>=this.maxRows)event.preventDefault()};MaterialTextfield.prototype.onFocus_=function(event){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)};MaterialTextfield.prototype.onBlur_=function(event){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)};MaterialTextfield.prototype.onReset_=function(event){this.updateClasses_()};MaterialTextfield.prototype.updateClasses_=
function(){this.checkDisabled();this.checkValidity();this.checkDirty();this.checkFocus()};MaterialTextfield.prototype.checkDisabled=function(){if(this.input_.disabled)this.element_.classList.add(this.CssClasses_.IS_DISABLED);else this.element_.classList.remove(this.CssClasses_.IS_DISABLED)};MaterialTextfield.prototype["checkDisabled"]=MaterialTextfield.prototype.checkDisabled;MaterialTextfield.prototype.checkFocus=function(){if(Boolean(this.element_.querySelector(":focus")))this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
else this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)};MaterialTextfield.prototype["checkFocus"]=MaterialTextfield.prototype.checkFocus;MaterialTextfield.prototype.checkValidity=function(){if(this.input_.validity)if(this.input_.validity.valid)this.element_.classList.remove(this.CssClasses_.IS_INVALID);else this.element_.classList.add(this.CssClasses_.IS_INVALID)};MaterialTextfield.prototype["checkValidity"]=MaterialTextfield.prototype.checkValidity;MaterialTextfield.prototype.checkDirty=
function(){if(this.input_.value&&this.input_.value.length>0)this.element_.classList.add(this.CssClasses_.IS_DIRTY);else this.element_.classList.remove(this.CssClasses_.IS_DIRTY)};MaterialTextfield.prototype["checkDirty"]=MaterialTextfield.prototype.checkDirty;MaterialTextfield.prototype.disable=function(){this.input_.disabled=true;this.updateClasses_()};MaterialTextfield.prototype["disable"]=MaterialTextfield.prototype.disable;MaterialTextfield.prototype.enable=function(){this.input_.disabled=false;
this.updateClasses_()};MaterialTextfield.prototype["enable"]=MaterialTextfield.prototype.enable;MaterialTextfield.prototype.change=function(value){this.input_.value=value||"";this.updateClasses_()};MaterialTextfield.prototype["change"]=MaterialTextfield.prototype.change;MaterialTextfield.prototype.init=function(){if(this.element_){this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL);this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT);if(this.input_){if(this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)){this.maxRows=
parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10);if(isNaN(this.maxRows))this.maxRows=this.Constant_.NO_MAX_ROWS}if(this.input_.hasAttribute("placeholder"))this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER);this.boundUpdateClassesHandler=this.updateClasses_.bind(this);this.boundFocusHandler=this.onFocus_.bind(this);this.boundBlurHandler=this.onBlur_.bind(this);this.boundResetHandler=this.onReset_.bind(this);this.input_.addEventListener("input",this.boundUpdateClassesHandler);
this.input_.addEventListener("focus",this.boundFocusHandler);this.input_.addEventListener("blur",this.boundBlurHandler);this.input_.addEventListener("reset",this.boundResetHandler);if(this.maxRows!==this.Constant_.NO_MAX_ROWS){this.boundKeyDownHandler=this.onKeyDown_.bind(this);this.input_.addEventListener("keydown",this.boundKeyDownHandler)}var invalid=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_();this.element_.classList.add(this.CssClasses_.IS_UPGRADED);if(invalid)this.element_.classList.add(this.CssClasses_.IS_INVALID);
if(this.input_.hasAttribute("autofocus")){this.element_.focus();this.checkFocus()}}}};componentHandler.register({constructor:MaterialTextfield,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:true})})();(function(){var supportCustomEvent=window.CustomEvent;if(!supportCustomEvent||typeof supportCustomEvent==="object"){supportCustomEvent=function CustomEvent(event,x){x=x||{};var ev=document.createEvent("CustomEvent");ev.initCustomEvent(event,!!x.bubbles,!!x.cancelable,x.detail||null);return ev};supportCustomEvent.prototype=window.Event.prototype}function createsStackingContext(el){while(el&&el!==document.body){var s=window.getComputedStyle(el);var invalid=function(k,ok){return!(s[k]===undefined||s[k]===
ok)};if(s.opacity<1||invalid("zIndex","auto")||invalid("transform","none")||invalid("mixBlendMode","normal")||invalid("filter","none")||invalid("perspective","none")||s["isolation"]==="isolate"||s.position==="fixed"||s.webkitOverflowScrolling==="touch")return true;el=el.parentElement}return false}function findNearestDialog(el){while(el){if(el.localName==="dialog")return el;el=el.parentElement}return null}function safeBlur(el){if(el&&el.blur&&el!==document.body)el.blur()}function inNodeList(nodeList,
node){for(var i=0;i<nodeList.length;++i)if(nodeList[i]===node)return true;return false}function isFormMethodDialog(el){if(!el||!el.hasAttribute("method"))return false;return el.getAttribute("method").toLowerCase()==="dialog"}function dialogPolyfillInfo(dialog){this.dialog_=dialog;this.replacedStyleTop_=false;this.openAsModal_=false;if(!dialog.hasAttribute("role"))dialog.setAttribute("role","dialog");dialog.show=this.show.bind(this);dialog.showModal=this.showModal.bind(this);dialog.close=this.close.bind(this);
if(!("returnValue"in dialog))dialog.returnValue="";if("MutationObserver"in window){var mo=new MutationObserver(this.maybeHideModal.bind(this));mo.observe(dialog,{attributes:true,attributeFilter:["open"]})}else{var removed=false;var cb=function(){removed?this.downgradeModal():this.maybeHideModal();removed=false}.bind(this);var timeout;var delayModel=function(ev){if(ev.target!==dialog)return;var cand="DOMNodeRemoved";removed|=ev.type.substr(0,cand.length)===cand;window.clearTimeout(timeout);timeout=
window.setTimeout(cb,0)};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(name){dialog.addEventListener(name,delayModel)})}Object.defineProperty(dialog,"open",{set:this.setOpen.bind(this),get:dialog.hasAttribute.bind(dialog,"open")});this.backdrop_=document.createElement("div");this.backdrop_.className="backdrop";this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}dialogPolyfillInfo.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){if(this.dialog_.hasAttribute("open")&&
document.body.contains(this.dialog_))return;this.downgradeModal()},downgradeModal:function(){if(!this.openAsModal_)return;this.openAsModal_=false;this.dialog_.style.zIndex="";if(this.replacedStyleTop_){this.dialog_.style.top="";this.replacedStyleTop_=false}this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_);dialogPolyfill.dm.removeDialog(this)},setOpen:function(value){if(value)this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open","");else{this.dialog_.removeAttribute("open");
this.maybeHideModal()}},backdropClick_:function(e){if(!this.dialog_.hasAttribute("tabindex")){var fake=document.createElement("div");this.dialog_.insertBefore(fake,this.dialog_.firstChild);fake.tabIndex=-1;fake.focus();this.dialog_.removeChild(fake)}else this.dialog_.focus();var redirectedEvent=document.createEvent("MouseEvents");redirectedEvent.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget);
this.dialog_.dispatchEvent(redirectedEvent);e.stopPropagation()},focus_:function(){var target=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!target&&this.dialog_.tabIndex>=0)target=this.dialog_;if(!target){var opts=["button","input","keygen","select","textarea"];var query=opts.map(function(el){return el+":not([disabled])"});query.push('[tabindex]:not([disabled]):not([tabindex=""])');target=this.dialog_.querySelector(query.join(", "))}safeBlur(document.activeElement);target&&target.focus()},
updateZIndex:function(dialogZ,backdropZ){if(dialogZ<backdropZ)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=dialogZ;this.backdrop_.style.zIndex=backdropZ},show:function(){if(!this.dialog_.open){this.setOpen(true);this.focus_()}},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");
if(!dialogPolyfill.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");if(createsStackingContext(this.dialog_.parentElement))console.warn("A dialog is being shown inside a stacking context. "+"This may cause it to be unusable. For more information, see this link: "+"https://github.com/GoogleChrome/dialog-polyfill/#stacking-context");this.setOpen(true);this.openAsModal_=true;if(dialogPolyfill.needsCentering(this.dialog_)){dialogPolyfill.reposition(this.dialog_);
this.replacedStyleTop_=true}else this.replacedStyleTop_=false;this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling);this.focus_()},close:function(opt_returnValue){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(false);if(opt_returnValue!==undefined)this.dialog_.returnValue=opt_returnValue;var closeEvent=new supportCustomEvent("close",{bubbles:false,
cancelable:false});this.dialog_.dispatchEvent(closeEvent)}};var dialogPolyfill={};dialogPolyfill.reposition=function(element){var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;var topValue=scrollTop+(window.innerHeight-element.offsetHeight)/2;element.style.top=Math.max(scrollTop,topValue)+"px"};dialogPolyfill.isInlinePositionSetByStylesheet=function(element){for(var i=0;i<document.styleSheets.length;++i){var styleSheet=document.styleSheets[i];var cssRules=null;try{cssRules=
styleSheet.cssRules}catch(e){}if(!cssRules)continue;for(var j=0;j<cssRules.length;++j){var rule=cssRules[j];var selectedNodes=null;try{selectedNodes=document.querySelectorAll(rule.selectorText)}catch(e$0){}if(!selectedNodes||!inNodeList(selectedNodes,element))continue;var cssTop=rule.style.getPropertyValue("top");var cssBottom=rule.style.getPropertyValue("bottom");if(cssTop&&cssTop!=="auto"||cssBottom&&cssBottom!=="auto")return true}}return false};dialogPolyfill.needsCentering=function(dialog){var computedStyle=
window.getComputedStyle(dialog);if(computedStyle.position!=="absolute")return false;if(dialog.style.top!=="auto"&&dialog.style.top!==""||dialog.style.bottom!=="auto"&&dialog.style.bottom!=="")return false;return!dialogPolyfill.isInlinePositionSetByStylesheet(dialog)};dialogPolyfill.forceRegisterDialog=function(element){if(window.HTMLDialogElement||element.showModal)console.warn("This browser already supports <dialog>, the polyfill "+"may not work correctly",element);if(element.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");
new dialogPolyfillInfo(element)};dialogPolyfill.registerDialog=function(element){if(!element.showModal)dialogPolyfill.forceRegisterDialog(element)};dialogPolyfill.DialogManager=function(){this.pendingDialogStack=[];var checkDOM=this.checkDOM_.bind(this);this.overlay=document.createElement("div");this.overlay.className="_dialog_overlay";this.overlay.addEventListener("click",function(e){this.forwardTab_=undefined;e.stopPropagation();checkDOM([])}.bind(this));this.handleKey_=this.handleKey_.bind(this);
this.handleFocus_=this.handleFocus_.bind(this);this.zIndexLow_=1E5;this.zIndexHigh_=1E5+150;this.forwardTab_=undefined;if("MutationObserver"in window)this.mo_=new MutationObserver(function(records){var removed=[];records.forEach(function(rec){for(var i=0,c;c=rec.removedNodes[i];++i){if(!(c instanceof Element))continue;else if(c.localName==="dialog")removed.push(c);removed=removed.concat(c.querySelectorAll("dialog"))}});removed.length&&checkDOM(removed)})};dialogPolyfill.DialogManager.prototype.blockDocument=
function(){document.documentElement.addEventListener("focus",this.handleFocus_,true);document.addEventListener("keydown",this.handleKey_);this.mo_&&this.mo_.observe(document,{childList:true,subtree:true})};dialogPolyfill.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,true);document.removeEventListener("keydown",this.handleKey_);this.mo_&&this.mo_.disconnect()};dialogPolyfill.DialogManager.prototype.updateStacking=function(){var zIndex=
this.zIndexHigh_;for(var i=0,dpi;dpi=this.pendingDialogStack[i];++i){dpi.updateZIndex(--zIndex,--zIndex);if(i===0)this.overlay.style.zIndex=--zIndex}var last=this.pendingDialogStack[0];if(last){var p=last.dialog.parentNode||document.body;p.appendChild(this.overlay)}else if(this.overlay.parentNode)this.overlay.parentNode.removeChild(this.overlay)};dialogPolyfill.DialogManager.prototype.containedByTopDialog_=function(candidate){while(candidate=findNearestDialog(candidate)){for(var i=0,dpi;dpi=this.pendingDialogStack[i];++i)if(dpi.dialog===
candidate)return i===0;candidate=candidate.parentElement}return false};dialogPolyfill.DialogManager.prototype.handleFocus_=function(event){if(this.containedByTopDialog_(event.target))return;event.preventDefault();event.stopPropagation();safeBlur(event.target);if(this.forwardTab_===undefined)return;var dpi=this.pendingDialogStack[0];var dialog=dpi.dialog;var position=dialog.compareDocumentPosition(event.target);if(position&Node.DOCUMENT_POSITION_PRECEDING)if(this.forwardTab_)dpi.focus_();else document.documentElement.focus();
else;return false};dialogPolyfill.DialogManager.prototype.handleKey_=function(event){this.forwardTab_=undefined;if(event.keyCode===27){event.preventDefault();event.stopPropagation();var cancelEvent=new supportCustomEvent("cancel",{bubbles:false,cancelable:true});var dpi=this.pendingDialogStack[0];if(dpi&&dpi.dialog.dispatchEvent(cancelEvent))dpi.dialog.close()}else if(event.keyCode===9)this.forwardTab_=!event.shiftKey};dialogPolyfill.DialogManager.prototype.checkDOM_=function(removed){var clone=this.pendingDialogStack.slice();
clone.forEach(function(dpi){if(removed.indexOf(dpi.dialog)!==-1)dpi.downgradeModal();else dpi.maybeHideModal()})};dialogPolyfill.DialogManager.prototype.pushDialog=function(dpi){var allowed=(this.zIndexHigh_-this.zIndexLow_)/2-1;if(this.pendingDialogStack.length>=allowed)return false;if(this.pendingDialogStack.unshift(dpi)===1)this.blockDocument();this.updateStacking();return true};dialogPolyfill.DialogManager.prototype.removeDialog=function(dpi){var index=this.pendingDialogStack.indexOf(dpi);if(index===
-1)return;this.pendingDialogStack.splice(index,1);if(this.pendingDialogStack.length===0)this.unblockDocument();this.updateStacking()};dialogPolyfill.dm=new dialogPolyfill.DialogManager;dialogPolyfill.formSubmitter=null;dialogPolyfill.useValue=null;if(window.HTMLDialogElement===undefined){var testForm=document.createElement("form");testForm.setAttribute("method","dialog");if(testForm.method!=="dialog"){var methodDescriptor=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(methodDescriptor){var realGet=
methodDescriptor.get;methodDescriptor.get=function(){if(isFormMethodDialog(this))return"dialog";return realGet.call(this)};var realSet=methodDescriptor.set;methodDescriptor.set=function(v){if(typeof v==="string"&&v.toLowerCase()==="dialog")return this.setAttribute("method",v);return realSet.call(this,v)};Object.defineProperty(HTMLFormElement.prototype,"method",methodDescriptor)}}document.addEventListener("click",function(ev){dialogPolyfill.formSubmitter=null;dialogPolyfill.useValue=null;if(ev.defaultPrevented)return;
var target=ev.target;if(!target||!isFormMethodDialog(target.form))return;var valid=target.type==="submit"&&["button","input"].indexOf(target.localName)>-1;if(!valid){if(!(target.localName==="input"&&target.type==="image"))return;dialogPolyfill.useValue=ev.offsetX+","+ev.offsetY}var dialog=findNearestDialog(target);if(!dialog)return;dialogPolyfill.formSubmitter=target},false);var nativeFormSubmit=HTMLFormElement.prototype.submit;var replacementFormSubmit=function(){if(!isFormMethodDialog(this))return nativeFormSubmit.call(this);
var dialog=findNearestDialog(this);dialog&&dialog.close()};HTMLFormElement.prototype.submit=replacementFormSubmit;document.addEventListener("submit",function(ev){var form=ev.target;if(!isFormMethodDialog(form))return;ev.preventDefault();var dialog=findNearestDialog(form);if(!dialog)return;var s=dialogPolyfill.formSubmitter;if(s&&s.form===form)dialog.close(dialogPolyfill.useValue||s.value);else dialog.close();dialogPolyfill.formSubmitter=null},true)}dialogPolyfill["forceRegisterDialog"]=dialogPolyfill.forceRegisterDialog;
dialogPolyfill["registerDialog"]=dialogPolyfill.registerDialog;if(typeof define==="function"&&"amd"in define)define(function(){return dialogPolyfill});else if( true&&typeof module["exports"]==="object")module["exports"]=dialogPolyfill;else window["dialogPolyfill"]=dialogPolyfill})();(function(){var m,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function da(a,b){if(b){var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}function ea(a){var b=0;return function(){return b<
a.length?{done:!1,value:a[b++]}:{done:!0}}}function fa(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ea(a)}}da("Promise",function(a){function b(g){this.f=0;this.h=void 0;this.a=[];var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.a=null}function d(g){return g instanceof b?g:new b(function(h){h(g)})}if(a)return a;c.prototype.f=function(g){if(null==this.a){this.a=[];var h=this;this.h(function(){h.i()})}this.a.push(g)};
var e=ca.setTimeout;c.prototype.h=function(g){e(g,0)};c.prototype.i=function(){for(;this.a&&this.a.length;){var g=this.a;this.a=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.a=null};c.prototype.j=function(g){this.h(function(){throw g;})};b.prototype.j=function(){function g(l){return function(v){k||(k=!0,l.call(h,v))}}var h=this,k=!1;return{resolve:g(this.I),reject:g(this.i)}};b.prototype.I=function(g){if(g===this)this.i(new TypeError("A Promise cannot resolve to itself"));
else if(g instanceof b)this.K(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.v(g)}};b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(k){this.i(k);return}"function"==typeof h?this.O(h,g):this.v(g)};b.prototype.i=function(g){this.w(2,g)};b.prototype.v=function(g){this.w(1,g)};b.prototype.w=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.h=h;
this.C()};b.prototype.C=function(){if(null!=this.a){for(var g=0;g<this.a.length;++g)f.f(this.a[g]);this.a=null}};var f=new c;b.prototype.K=function(g){var h=this.j();g.Da(h.resolve,h.reject)};b.prototype.O=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(g,h){function k(sa,Da){return"function"==typeof sa?function(Ka){try{l(sa(Ka))}catch(ba){v(ba)}}:Da}var l,v,ya=new b(function(sa,Da){l=sa;v=Da});this.Da(k(g,l),k(h,v));return ya};b.prototype.catch=
function(g){return this.then(void 0,g)};b.prototype.Da=function(g,h){function k(){switch(l.f){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.f);}}var l=this;null==this.a?f.f(k):this.a.push(k)};b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};b.race=function(g){return new b(function(h,k){for(var l=fa(g),v=l.next();!v.done;v=l.next())d(v.value).Da(h,k)})};b.all=function(g){var h=fa(g),k=h.next();return k.done?d([]):new b(function(l,v){function ya(Ka){return function(ba){sa[Ka]=
ba;Da--;0==Da&&l(sa)}}var sa=[],Da=0;do sa.push(void 0),Da++,d(k.value).Da(ya(sa.length-1),v),k=h.next();while(!k.done)})};return b});var n=this;function ha(a){return void 0!==a}function p(a){return"string"==typeof a}var ia=/^[\w+/_-]+[=]{0,2}$/,ja=null;function ka(){}function la(a){a.V=void 0;a.Sa=function(){return a.V?a.V:a.V=new a}}function ma(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==
c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function na(a){return null!=a}function oa(a){return"array"==ma(a)}function pa(a){var b=
ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}function qa(a){return"function"==ma(a)}function ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ta="closure_uid_"+(1E9*Math.random()>>>0),ua=0;function va(a,b,c){return a.call.apply(a.bind,arguments)}function wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,
e)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?q=va:q=wa;return q.apply(null,arguments)}function xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}function r(a,b){for(var c in b)a[c]=b[c]}var za=Date.now||function(){return+new Date};function Aa(a,b){a=a.split(".");var c=n;a[0]in c||"undefined"==typeof c.execScript||
c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&ha(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}function t(a,b){function c(){}c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.gc=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}function Ba(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ba);else{var b=Error().stack;b&&(this.stack=
b)}a&&(this.message=String(a))}t(Ba,Error);Ba.prototype.name="CustomError";var Ca;function Ea(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");Ba.call(this,c+a[d])}t(Ea,Ba);Ea.prototype.name="AssertionError";function Fa(a,b){throw new Ea("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));}var Ga=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(p(a))return p(b)&&1==b.length?a.indexOf(b,0):
-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ha=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function Ia(a,b){for(var c=p(a)?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)}var Ja=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=p(a)?a.split(""):a,g=
0;g<c;g++)if(g in f){var h=f[g];b.call(void 0,h,g,a)&&(d[e++]=h)}return d},La=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=p(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},Ma=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};function Na(a,
b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Oa(a,b){return 0<=Ga(a,b)}function Pa(a,b){b=Ga(a,b);var c;(c=0<=b)&&Qa(a,b);return c}function Qa(a,b){return 1==Array.prototype.splice.call(a,b,1).length}function Ra(a,b){b=Na(a,b,void 0);0<=b&&Qa(a,b)}function Sa(a,b){var c=0;Ia(a,function(d,e){b.call(void 0,d,e,a)&&Qa(a,e)&&c++})}function Ta(a){return Array.prototype.concat.apply([],arguments)}function Ua(a){var b=a.length;if(0<b){for(var c=
Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function Va(a,b,c,d){return Array.prototype.splice.apply(a,Wa(arguments,1))}function Wa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}var Xa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ya=/&/g,Za=/</g,$a=/>/g,ab=/"/g,bb=/'/g,cb=/\x00/g,db=/[\x00&<>"']/;function eb(a,b){return a<b?-1:a>b?1:0}var fb;a:{var gb=n.navigator;if(gb){var hb=
gb.userAgent;if(hb){fb=hb;break a}}fb=""}function u(a){return-1!=fb.indexOf(a)}function ib(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function jb(a){var b={},c;for(c in a)b[c]=a[c];return b}var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<kb.length;f++)c=kb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}function mb(){return(u("Chrome")||
u("CriOS"))&&!u("Edge")}function nb(a){db.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ya,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Za,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace($a,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(ab,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(bb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(cb,"&#0;")));return a}function ob(a){ob[" "](a);return a}ob[" "]=ka;function pb(a,b){var c=qb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}var rb=u("Opera"),w=u("Trident")||
u("MSIE"),sb=u("Edge"),tb=sb||w,ub=u("Gecko")&&!(-1!=fb.toLowerCase().indexOf("webkit")&&!u("Edge"))&&!(u("Trident")||u("MSIE"))&&!u("Edge"),vb=-1!=fb.toLowerCase().indexOf("webkit")&&!u("Edge"),wb=vb&&u("Mobile"),xb=u("Macintosh");function yb(){var a=n.document;return a?a.documentMode:void 0}var zb;a:{var Ab="",Bb=function(){var a=fb;if(ub)return/rv:([^\);]+)(\)|;)/.exec(a);if(sb)return/Edge\/([\d\.]+)/.exec(a);if(w)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(vb)return/WebKit\/(\S+)/.exec(a);
if(rb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Bb&&(Ab=Bb?Bb[1]:"");if(w){var Cb=yb();if(null!=Cb&&Cb>parseFloat(Ab)){zb=String(Cb);break a}}zb=Ab}var qb={};function Db(a){return pb(a,function(){for(var b=0,c=Xa(String(zb)).split("."),d=Xa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=eb(0==g[1].length?0:parseInt(g[1],
10),0==h[1].length?0:parseInt(h[1],10))||eb(0==g[2].length,0==h[2].length)||eb(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}var Eb;var Fb=n.document;Eb=Fb&&w?yb()||("CSS1Compat"==Fb.compatMode?parseInt(zb,10):5):void 0;function Gb(a,b){this.a=a===Hb&&b||"";this.f=Ib}Gb.prototype.la=!0;Gb.prototype.ja=function(){return this.a};Gb.prototype.toString=function(){return"Const{"+this.a+"}"};function Jb(a){if(a instanceof Gb&&a.constructor===Gb&&a.f===Ib)return a.a;Fa("expected object of type Const, got '"+
a+"'");return"type_error:Const"}var Ib={},Hb={};function Kb(){this.a="";this.h=Lb}Kb.prototype.la=!0;Kb.prototype.ja=function(){return this.a.toString()};Kb.prototype.f=function(){return 1};Kb.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function Mb(a){if(a instanceof Kb&&a.constructor===Kb&&a.h===Lb)return a.a;Fa("expected object of type TrustedResourceUrl, got '"+a+"' of type "+ma(a));return"type_error:TrustedResourceUrl"}var Lb={};function Nb(a){var b=new Kb;b.a=a;return b}
function Ob(){this.a="";this.h=Pb}Ob.prototype.la=!0;Ob.prototype.ja=function(){return this.a.toString()};Ob.prototype.f=function(){return 1};Ob.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function Qb(a){return Rb(a).toString()}function Rb(a){if(a instanceof Ob&&a.constructor===Ob&&a.h===Pb)return a.a;Fa("expected object of type SafeUrl, got '"+a+"' of type "+ma(a));return"type_error:SafeUrl"}var Sb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Tb(a){if(a instanceof Ob)return a;
a="object"==typeof a&&a.la?a.ja():String(a);Sb.test(a)||(a="about:invalid#zClosurez");return Ub(a)}var Pb={};function Ub(a){var b=new Ob;b.a=a;return b}Ub("about:blank");function Vb(){this.a="";this.f=Wb}Vb.prototype.la=!0;var Wb={};Vb.prototype.ja=function(){return this.a};Vb.prototype.toString=function(){return"SafeStyle{"+this.a+"}"};function Xb(){this.a="";this.j=Yb;this.h=null}Xb.prototype.f=function(){return this.h};Xb.prototype.la=!0;Xb.prototype.ja=function(){return this.a.toString()};Xb.prototype.toString=
function(){return"SafeHtml{"+this.a+"}"};function Zb(a){if(a instanceof Xb&&a.constructor===Xb&&a.j===Yb)return a.a;Fa("expected object of type SafeHtml, got '"+a+"' of type "+ma(a));return"type_error:SafeHtml"}var Yb={};function $b(a,b){var c=new Xb;c.a=a;c.h=b;return c}$b("<!DOCTYPE html>",0);var ac=$b("",0);$b("<br>",0);var bc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");
b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;b=a.firstChild.firstChild;a.innerHTML=Zb(ac);return!b.parentElement});function cc(a,b){a.src=Mb(b);if(null===ja)b:{b=n.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&ia.test(b)){ja=b;break b}ja=""}b=ja;b&&a.setAttribute("nonce",b)}function dc(a,b){this.a=ha(a)?a:0;this.f=ha(b)?b:0}dc.prototype.toString=function(){return"("+this.a+", "+this.f+")"};dc.prototype.ceil=
function(){this.a=Math.ceil(this.a);this.f=Math.ceil(this.f);return this};dc.prototype.floor=function(){this.a=Math.floor(this.a);this.f=Math.floor(this.f);return this};dc.prototype.round=function(){this.a=Math.round(this.a);this.f=Math.round(this.f);return this};function ec(a,b){this.width=a;this.height=b}m=ec.prototype;m.toString=function(){return"("+this.width+" x "+this.height+")"};m.aspectRatio=function(){return this.width/this.height};m.ceil=function(){this.width=Math.ceil(this.width);this.height=
Math.ceil(this.height);return this};m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function fc(a){return a?new gc(hc(a)):Ca||(Ca=new gc)}function ic(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):jc(document,a,b)}function kc(a,b){var c=b||document;if(c.getElementsByClassName)a=c.getElementsByClassName(a)[0];
else{c=document;var d=b||c;a=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):jc(c,a,b)[0]||null}return a||null}function jc(a,b,c){var d;a=c||a;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var f={};for(c=d=0;a=e[c];c++){var g=a.className;"function"==typeof g.split&&Oa(g.split(/\s+/),b)&&(f[d++]=a)}f.length=d;return f}return e}function lc(a,
b){ib(b,function(c,d){c&&"object"==typeof c&&c.la&&(c=c.ja());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:mc.hasOwnProperty(d)?a.setAttribute(mc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}var mc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function nc(a){return a.scrollingElement?a.scrollingElement:vb||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement}function oc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}function hc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}function pc(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=
a.firstChild;)a.removeChild(c);a.appendChild(hc(a).createTextNode(String(b)))}}function qc(a,b){return b?rc(a,function(c){return!b||p(c.className)&&Oa(c.className.split(/\s+/),b)}):null}function rc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}function gc(a){this.a=a||n.document||document}gc.prototype.N=function(){return p(void 0)?this.a.getElementById(void 0):void 0};var sc="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function tc(){}tc.prototype.next=
function(){throw sc;};tc.prototype.ga=function(){return this};function uc(a){if(a instanceof tc)return a;if("function"==typeof a.ga)return a.ga(!1);if(pa(a)){var b=0,c=new tc;c.next=function(){for(;;){if(b>=a.length)throw sc;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");}function vc(a,b){if(pa(a))try{Ha(a,b,void 0)}catch(c){if(c!==sc)throw c;}else{a=uc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c$1){if(c$1!==sc)throw c$1;}}}function wc(a){if(pa(a))return Ua(a);a=
uc(a);var b=[];vc(a,function(c){b.push(c)});return b}function xc(a,b){this.f={};this.a=[];this.j=this.h=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof xc)for(c=a.ia(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}m=xc.prototype;m.ka=function(){yc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.f[this.a[b]]);return a};m.ia=function(){yc(this);
return this.a.concat()};m.clear=function(){this.f={};this.j=this.h=this.a.length=0};function yc(a){if(a.h!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];zc(a.f,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.h!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],zc(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}m.get=function(a,b){return zc(this.f,a)?this.f[a]:b};m.set=function(a,b){zc(this.f,a)||(this.h++,this.a.push(a),this.j++);this.f[a]=b};m.forEach=function(a,b){for(var c=this.ia(),d=0;d<c.length;d++){var e=
c[d],f=this.get(e);a.call(b,f,e,this)}};m.ga=function(a){yc(this);var b=0,c=this.j,d=this,e=new tc;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw sc;var f=d.a[b++];return a?f:d.f[f]};return e};function zc(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var Ac=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Bc(a,b){if(a){a=a.split("&");for(var c=
0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}}function Cc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}var Dc=/#|$/;function Ec(a,b){var c=a.search(Dc),d=Cc(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,
e-d).replace(/\+/g," "))}var Fc=/[?&]($|#)/;function Gc(a,b){this.h=this.w=this.j="";this.C=null;this.i=this.f="";this.v=!1;var c;a instanceof Gc?(this.v=ha(b)?b:a.v,Hc(this,a.j),this.w=a.w,this.h=a.h,Ic(this,a.C),this.f=a.f,Jc(this,Kc(a.a)),this.i=a.i):a&&(c=String(a).match(Ac))?(this.v=!!b,Hc(this,c[1]||"",!0),this.w=Lc(c[2]||""),this.h=Lc(c[3]||"",!0),Ic(this,c[4]),this.f=Lc(c[5]||"",!0),Jc(this,c[6]||"",!0),this.i=Lc(c[7]||"")):(this.v=!!b,this.a=new Mc(null,this.v))}Gc.prototype.toString=function(){var a=
[],b=this.j;b&&a.push(Nc(b,Oc,!0),":");var c=this.h;if(c||"file"==b)a.push("//"),(b=this.w)&&a.push(Nc(b,Oc,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.C,null!=c&&a.push(":",String(c));if(c=this.f)this.h&&"/"!=c.charAt(0)&&a.push("/"),a.push(Nc(c,"/"==c.charAt(0)?Pc:Qc,!0));(c=this.a.toString())&&a.push("?",c);(c=this.i)&&a.push("#",Nc(c,Rc));return a.join("")};Gc.prototype.resolve=function(a){var b=new Gc(this),c=!!a.j;c?Hc(b,a.j):c=!!a.w;c?b.w=a.w:
c=!!a.h;c?b.h=a.h:c=null!=a.C;var d=a.f;if(c)Ic(b,a.C);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.h&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==h?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?
b.f=d:c=""!==a.a.toString();c?Jc(b,Kc(a.a)):c=!!a.i;c&&(b.i=a.i);return b};function Hc(a,b,c){a.j=c?Lc(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}function Ic(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.C=b}else a.C=null}function Jc(a,b,c){b instanceof Mc?(a.a=b,Sc(a.a,a.v)):(c||(b=Nc(b,Tc)),a.a=new Mc(b,a.v))}function Uc(a){return a instanceof Gc?new Gc(a):new Gc(a,void 0)}function Vc(a,b){a instanceof Gc||(a=Uc(a));b instanceof Gc||(b=Uc(b));return a.resolve(b)}function Lc(a,
b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Nc(a,b,c){return p(a)?(a=encodeURI(a).replace(b,Wc),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Wc(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Oc=/[#\/\?@]/g,Qc=/[#\?:]/g,Pc=/[#\?]/g,Tc=/[#\?@]/g,Rc=/#/g;function Mc(a,b){this.f=this.a=null;this.h=a||null;this.j=!!b}function Xc(a){a.a||(a.a=new xc,a.f=0,a.h&&Bc(a.h,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g,
" ")),c)}))}m=Mc.prototype;m.add=function(a,b){Xc(this);this.h=null;a=Yc(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.f+=1;return this};function Zc(a,b){Xc(a);b=Yc(a,b);zc(a.a.f,b)&&(a.h=null,a.f-=a.a.get(b).length,a=a.a,zc(a.f,b)&&(delete a.f[b],a.h--,a.j++,a.a.length>2*a.h&&yc(a)))}m.clear=function(){this.a=this.h=null;this.f=0};function $c(a,b){Xc(a);b=Yc(a,b);return zc(a.a.f,b)}m.forEach=function(a,b){Xc(this);this.a.forEach(function(c,d){Ha(c,function(e){a.call(b,e,d,this)},
this)},this)};m.ia=function(){Xc(this);for(var a=this.a.ka(),b=this.a.ia(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};m.ka=function(a){Xc(this);var b=[];if(p(a))$c(this,a)&&(b=Ta(b,this.a.get(Yc(this,a))));else{a=this.a.ka();for(var c=0;c<a.length;c++)b=Ta(b,a[c])}return b};m.set=function(a,b){Xc(this);this.h=null;a=Yc(this,a);$c(this,a)&&(this.f-=this.a.get(a).length);this.a.set(a,[b]);this.f+=1;return this};m.get=function(a,b){if(!a)return b;a=this.ka(a);return 0<
a.length?String(a[0]):b};m.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var a=[],b=this.a.ia(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.ka(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.h=a.join("&")};function Kc(a){var b=new Mc;b.h=a.h;a.a&&(b.a=new xc(a.a),b.f=a.f);return b}function Yc(a,b){b=String(b);a.j&&(b=b.toLowerCase());return b}function Sc(a,b){b&&!a.j&&(Xc(a),a.h=null,
a.a.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(Zc(this,d),Zc(this,e),0<c.length&&(this.h=null,this.a.set(Yc(this,e),Ua(c)),this.f+=c.length))},a));a.j=b}var ad={rc:!0},bd={tc:!0},cd={qc:!0},dd={sc:!0};function ed(){throw Error("Do not instantiate directly");}ed.prototype.ta=null;ed.prototype.toString=function(){return this.content};function fd(a,b,c,d){a=a(b||gd,void 0,c);d=(d||fc()).a.createElement("DIV");a=hd(a);a.match(id);a=$b(a,null);if(bc())for(;d.lastChild;)d.removeChild(d.lastChild);
d.innerHTML=Zb(a);1==d.childNodes.length&&(a=d.firstChild,1==a.nodeType&&(d=a));return d}function hd(a){if(!ra(a))return nb(String(a));if(a instanceof ed){if(a.ea===ad)return a.content;if(a.ea===dd)return nb(a.content)}Fa("Soy template output is unsafe for use as HTML: "+a);return"zSoyz"}var id=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,gd={};function jd(a){if(null!=a)switch(a.ta){case 1:return 1;case -1:return-1;case 0:return 0}return null}function kd(){ed.call(this)}
t(kd,ed);kd.prototype.ea=ad;function x(a){return null!=a&&a.ea===ad?a:a instanceof Xb?y(Zb(a).toString(),a.f()):y(nb(String(String(a))),jd(a))}function ld(){ed.call(this)}t(ld,ed);ld.prototype.ea=bd;ld.prototype.ta=1;function md(a,b){this.content=String(a);this.ta=null!=b?b:null}t(md,ed);md.prototype.ea=dd;function z(a){return new md(a,void 0)}var y=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c,d){c=new b(String(c));void 0!==d&&(c.ta=d);return c}}(kd),nd=function(a){function b(c){this.content=
c}b.prototype=a.prototype;return function(c){return new b(String(c))}}(ld);function od(a){function b(){}var c={label:A("New password")};b.prototype=a;a=new b;for(var d in c)a[d]=c[d];return a}function A(a){return(a=String(a))?new md(a,void 0):""}var pd=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c,d){c=String(c);if(!c)return"";c=new b(c);void 0!==d&&(c.ta=d);return c}}(kd);function qd(a){return null!=a&&a.ea===ad?String(String(a.content).replace(rd,"").replace(sd,
"&lt;")).replace(td,vd):nb(String(a))}function wd(a){null!=a&&a.ea===bd?a=String(a).replace(xd,yd):a instanceof Ob?a=String(Qb(a)).replace(xd,yd):(a=String(a),zd.test(a)?a=a.replace(xd,yd):(Fa("Bad value `%s` for |filterNormalizeUri",[a]),a="#zSoyz"));return a}var Ad={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;",
"\u2028":"&#8232;","\u2029":"&#8233;"};function vd(a){return Ad[a]}var Bd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10","\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D",
"\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D",
"\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"};function yd(a){return Bd[a]}var td=/[\x00\x22\x27\x3c\x3e]/g,xd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Cd=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,zd=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
rd=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,sd=/</g;function Dd(){return z("Enter a valid phone number")}function Ed(){return z("Something went wrong. Please try again.")}function Fd(){return z("This email already exists without any means of sign-in. Please reset the password to recover.")}function Gd(){return z("Please login again to perform this operation")}function Hd(a,b,c){this.code=Id+a;if(!(a=b)){a="";switch(this.code){case "firebaseui/merge-conflict":a+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";
break;default:a+=Ed()}a=z(a).toString()}this.message=a||"";this.credential=c||null}t(Hd,Error);Hd.prototype.Z=function(){return{code:this.code,message:this.message}};Hd.prototype.toJSON=function(){return this.Z()};var Id="firebaseui/";function Jd(){this.V={}}function Kd(a,b,c){if(b.toLowerCase()in a.V)throw Error("Configuration "+b+" has already been defined.");a.V[b.toLowerCase()]=c}function Ld(a,b,c){if(!(b.toLowerCase()in a.V))throw Error("Configuration "+b+" is not defined.");a.V[b.toLowerCase()]=
c}Jd.prototype.get=function(a){if(!(a.toLowerCase()in this.V))throw Error("Configuration "+a+" is not defined.");return this.V[a.toLowerCase()]};function Md(a,b){a=a.get(b);if(!a)throw Error("Configuration "+b+" is required.");return a}function Nd(){this.f=void 0;this.a={}}m=Nd.prototype;m.set=function(a,b){Od(this,a,b,!1)};m.add=function(a,b){Od(this,a,b,!0)};function Od(a,b,c,d){for(var e=0;e<b.length;e++){var f=b.charAt(e);a.a[f]||(a.a[f]=new Nd);a=a.a[f]}if(d&&void 0!==a.f)throw Error('The collection already contains the key "'+
b+'"');a.f=c}m.get=function(a){a:{for(var b=this,c=0;c<a.length;c++)if(b=b.a[a.charAt(c)],!b){a=void 0;break a}a=b}return a?a.f:void 0};m.ka=function(){var a=[];Pd(this,a);return a};function Pd(a,b){void 0!==a.f&&b.push(a.f);for(var c in a.a)Pd(a.a[c],b)}m.ia=function(){var a=[];Qd(this,"",a);return a};function Qd(a,b,c){void 0!==a.f&&c.push(b);for(var d in a.a)Qd(a.a[d],b+d,c)}m.clear=function(){this.a={};this.f=void 0};function Rd(a){this.a=a;this.f=new Nd;for(a=0;a<this.a.length;a++){var b=this.f.get("+"+
this.a[a].b);b?b.push(this.a[a]):this.f.add("+"+this.a[a].b,[this.a[a]])}}function Sd(a,b){a=a.f;var c={},d=0;void 0!==a.f&&(c[d]=a.f);for(;d<b.length;d++){var e=b.charAt(d);if(!(e in a.a))break;a=a.a[e];void 0!==a.f&&(c[d]=a.f)}for(var f in c)if(c.hasOwnProperty(f))return c[f];return[]}function Td(a){for(var b=0;b<Ud.length;b++)if(Ud[b].c===a)return Ud[b];return null}function Vd(a){a=a.toUpperCase();for(var b=[],c=0;c<Ud.length;c++)Ud[c].g===a&&b.push(Ud[c]);return b}function Wd(a){if(0<a.length&&
"+"==a.charAt(0)){a=a.substring(1);for(var b=[],c=0;c<Ud.length;c++)Ud[c].b==a&&b.push(Ud[c]);a=b}else a=Vd(a);return a}function Xd(a){a.sort(function(b,c){return b.name.localeCompare(c.name,"en")})}var Ud=[{name:"Afghanistan",c:"93-AF-0",b:"93",g:"AF"},{name:"\u00c5land Islands",c:"358-AX-0",b:"358",g:"AX"},{name:"Albania",c:"355-AL-0",b:"355",g:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",g:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",g:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",g:"AD"},{name:"Angola",
c:"244-AO-0",b:"244",g:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",g:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",g:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",g:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",g:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",g:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",g:"AC"},{name:"Australia",c:"61-AU-0",b:"61",g:"AU"},{name:"Austria",c:"43-AT-0",b:"43",g:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",g:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",g:"BS"},{name:"Bahrain",
c:"973-BH-0",b:"973",g:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",g:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",g:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",g:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",g:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",g:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",g:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",g:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",g:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",g:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",g:"BA"},{name:"Botswana",
c:"267-BW-0",b:"267",g:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",g:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",g:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",g:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",g:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",g:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",g:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",g:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",g:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",g:"CM"},{name:"Canada",c:"1-CA-0",b:"1",
g:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",g:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",g:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",g:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",g:"CF"},{name:"Chad",c:"235-TD-0",b:"235",g:"TD"},{name:"Chile",c:"56-CL-0",b:"56",g:"CL"},{name:"China",c:"86-CN-0",b:"86",g:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",g:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",g:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",g:"CO"},
{name:"Comoros",c:"269-KM-0",b:"269",g:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",g:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",g:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",g:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",g:"CR"},{name:"C\u00f4te d'Ivoire",c:"225-CI-0",b:"225",g:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",g:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",g:"CU"},{name:"Cura\u00e7ao",c:"599-CW-0",b:"599",g:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",g:"CY"},{name:"Czech Republic",
c:"420-CZ-0",b:"420",g:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",g:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",g:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",g:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",g:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",g:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",g:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",g:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",g:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",g:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",g:"ER"},{name:"Estonia",
c:"372-EE-0",b:"372",g:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",g:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",g:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",g:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",g:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",g:"FI"},{name:"France",c:"33-FR-0",b:"33",g:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",g:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",g:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",g:"GA"},{name:"Gambia",c:"220-GM-0",
b:"220",g:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",g:"GE"},{name:"Germany",c:"49-DE-0",b:"49",g:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",g:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",g:"GI"},{name:"Greece",c:"30-GR-0",b:"30",g:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",g:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",g:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",g:"GP"},{name:"Guam",c:"1-GU-0",b:"1",g:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",g:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",g:"GG"},
{name:"Guinea Conakry",c:"224-GN-0",b:"224",g:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",g:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",g:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",g:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",g:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",g:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",g:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",g:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",g:"IS"},{name:"India",c:"91-IN-0",b:"91",g:"IN"},{name:"Indonesia",
c:"62-ID-0",b:"62",g:"ID"},{name:"Iran",c:"98-IR-0",b:"98",g:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",g:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",g:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",g:"IM"},{name:"Israel",c:"972-IL-0",b:"972",g:"IL"},{name:"Italy",c:"39-IT-0",b:"39",g:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",g:"JM"},{name:"Japan",c:"81-JP-0",b:"81",g:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",g:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",g:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",g:"KZ"},{name:"Kenya",
c:"254-KE-0",b:"254",g:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",g:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",g:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",g:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",g:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",g:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",g:"KG"},{name:"Laos",c:"856-LA-0",b:"856",g:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",g:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",g:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",g:"LS"},{name:"Liberia",c:"231-LR-0",
b:"231",g:"LR"},{name:"Libya",c:"218-LY-0",b:"218",g:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",g:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",g:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",g:"LU"},{name:"Macau",c:"853-MO-0",b:"853",g:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",g:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",g:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",g:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",g:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",g:"MV"},{name:"Mali",c:"223-ML-0",
b:"223",g:"ML"},{name:"Malta",c:"356-MT-0",b:"356",g:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",g:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",g:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",g:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",g:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",g:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",g:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",g:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",g:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",g:"MC"},{name:"Mongolia",c:"976-MN-0",
b:"976",g:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",g:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",g:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",g:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",g:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",g:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",g:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",g:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",g:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",g:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",g:"NC"},{name:"New Zealand",
c:"64-NZ-0",b:"64",g:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",g:"NI"},{name:"Niger",c:"227-NE-0",b:"227",g:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",g:"NG"},{name:"Niue",c:"683-NU-0",b:"683",g:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",g:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",g:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",g:"MP"},{name:"Norway",c:"47-NO-0",b:"47",g:"NO"},{name:"Oman",c:"968-OM-0",b:"968",g:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",g:"PK"},{name:"Palau",
c:"680-PW-0",b:"680",g:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",g:"PS"},{name:"Panama",c:"507-PA-0",b:"507",g:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",g:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",g:"PY"},{name:"Peru",c:"51-PE-0",b:"51",g:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",g:"PH"},{name:"Poland",c:"48-PL-0",b:"48",g:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",g:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",g:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",g:"QA"},{name:"R\u00e9union",
c:"262-RE-0",b:"262",g:"RE"},{name:"Romania",c:"40-RO-0",b:"40",g:"RO"},{name:"Russia",c:"7-RU-0",b:"7",g:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",g:"RW"},{name:"Saint Barth\u00e9lemy",c:"590-BL-0",b:"590",g:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",g:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",g:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",g:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",g:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",g:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",
g:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",g:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",g:"SM"},{name:"S\u00e3o Tom\u00e9 and Pr\u00edncipe",c:"239-ST-0",b:"239",g:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",g:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",g:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",g:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",g:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",g:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",g:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",g:"SX"},
{name:"Slovakia",c:"421-SK-0",b:"421",g:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",g:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",g:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",g:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",g:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",g:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",g:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",g:"SS"},{name:"Spain",c:"34-ES-0",b:"34",g:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",g:"LK"},
{name:"Sudan",c:"249-SD-0",b:"249",g:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",g:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",g:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",g:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",g:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",g:"CH"},{name:"Syria",c:"963-SY-0",b:"963",g:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",g:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",g:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",g:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",g:"TH"},
{name:"Togo",c:"228-TG-0",b:"228",g:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",g:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",g:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",g:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",g:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",g:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",g:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",g:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",g:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",g:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",
g:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",g:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",g:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",g:"GB"},{name:"United States",c:"1-US-0",b:"1",g:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",g:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",g:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",g:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",g:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",g:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",g:"VN"},{name:"Wallis and Futuna",
c:"681-WF-0",b:"681",g:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",g:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",g:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",g:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",g:"ZW"}];Xd(Ud);var Yd=new Rd(Ud);function Zd(a,b){this.a=a;this.va=b}function $d(a){a=Xa(a);var b=Sd(Yd,a);return 0<b.length?new Zd("1"==b[0].b?"1-US-0":b[0].c,Xa(a.substr(b[0].b.length+1))):null}function ae(a){var b=Td(a.a);if(!b)throw Error("Country ID "+a.a+" not found.");return"+"+b.b+a.va}
function be(a,b){for(var c=0;c<a.length;c++)if(!Oa(ce,a[c])&&(null!==de&&a[c]in de||Oa(b,a[c])))return a[c];return null}var ce=["emailLink","password","phone"],de={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};var ee=Object.freeze||function(a){return a};function fe(a,b,c){this.reset(a,b,c,void 0,void 0)}fe.prototype.a=null;var ge=0;fe.prototype.reset=
function(a,b,c,d,e){"number"==typeof e||ge++;this.h=d||za();this.j=a;this.i=b;this.f=c;delete this.a};function he(a){this.i=a;this.a=this.h=this.j=this.f=null}function ie(a,b){this.name=a;this.value=b}ie.prototype.toString=function(){return this.name};var je=new ie("SEVERE",1E3),ke=new ie("WARNING",900),le=new ie("CONFIG",700);function me(a){if(a.j)return a.j;if(a.f)return me(a.f);Fa("Root logger has no level set.");return null}he.prototype.log=function(a,b,c){if(a.value>=me(this).value)for(qa(b)&&
(b=b()),a=new fe(a,String(b),this.i),c&&(a.a=c),c=this;c;){var d=c,e=a;if(d.a)for(var f=0;b=d.a[f];f++)b(e);c=c.f}};var ne={},oe=null;function pe(){oe||(oe=new he(""),ne[""]=oe,oe.j=le)}function qe(a){pe();var b;if(!(b=ne[a])){b=new he(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=qe(a.substr(0,c));c.h||(c.h={});c.h[d]=b;b.f=c;ne[a]=b}return b}function re(){this.a=za()}var se=null;re.prototype.set=function(a){this.a=a};re.prototype.reset=function(){this.set(za())};re.prototype.get=function(){return this.a};
function te(a){this.j=a||"";se||(se=new re);this.i=se}te.prototype.a=!0;te.prototype.f=!0;te.prototype.h=!1;function ue(a){return 10>a?"0"+a:String(a)}function ve(a,b){a=(a.h-b)/1E3;b=a.toFixed(3);var c=0;if(1>a)c=2;else for(;100>a;)c++,a*=10;for(;0<c--;)b=" "+b;return b}function we(a){te.call(this,a)}t(we,te);function xe(a,b){var c=[];c.push(a.j," ");if(a.f){var d=new Date(b.h);c.push("[",ue(d.getFullYear()-2E3)+ue(d.getMonth()+1)+ue(d.getDate())+" "+ue(d.getHours())+":"+ue(d.getMinutes())+":"+ue(d.getSeconds())+
"."+ue(Math.floor(d.getMilliseconds()/10)),"] ")}c.push("[",ve(b,a.i.get()),"s] ");c.push("[",b.f,"] ");c.push(b.i);a.h&&(b=b.a)&&c.push("\n",b instanceof Error?b.message:b.toString());a.a&&c.push("\n");return c.join("")}function ye(){this.i=q(this.h,this);this.a=new we;this.a.f=!1;this.a.h=!1;this.f=this.a.a=!1;this.j={}}ye.prototype.h=function(a){function b(f){if(f){if(f.value>=je.value)return"error";if(f.value>=ke.value)return"warn";if(f.value>=le.value)return"log"}return"debug"}if(!this.j[a.f]){var c=
xe(this.a,a),d=ze;if(d){var e=b(a.j);Ae(d,e,c,a.a)}}};var ze=n.console;function Ae(a,b,c,d){if(a[b])a[b](c,d||"");else a.log(c,d||"")}function Be(a,b){var c=Ce;c&&c.log(je,a,b)}var Ce;Ce=qe("firebaseui");var De=new ye;if(1!=De.f){var Ee;pe();Ee=oe;var Fe=De.i;Ee.a||(Ee.a=[]);Ee.a.push(Fe);De.f=!0}function Ge(a){var b=Ce;b&&b.log(ke,a,void 0)}function He(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}function Ie(a,b){this.h=a;this.j=b;this.f=0;this.a=null}Ie.prototype.get=function(){if(0<
this.f){this.f--;var a=this.a;this.a=a.next;a.next=null}else a=this.h();return a};function Je(a,b){a.j(b);100>a.f&&(a.f++,b.next=a.a,a.a=b)}function Ke(){this.f=this.a=null}var Me=new Ie(function(){return new Le},function(a){a.reset()});Ke.prototype.add=function(a,b){var c=Me.get();c.set(a,b);this.f?this.f.next=c:this.a=c;this.f=c};function Ne(){var a=Oe,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.f=null),b.next=null);return b}function Le(){this.next=this.f=this.a=null}Le.prototype.set=function(a,b){this.a=
a;this.f=b;this.next=null};Le.prototype.reset=function(){this.next=this.f=this.a=null};function Pe(a){n.setTimeout(function(){throw a;},0)}var Qe;function Re(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!u("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";e.src="";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write("");e.close();var g="callImmediate"+
Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=q(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!u("Trident")&&!u("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(ha(c.next)){c=c.next;var e=c.ab;c.ab=null;e()}};return function(e){d.next={ab:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==
typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};document.documentElement.appendChild(f)}:function(e){n.setTimeout(e,0)}}function Se(a,b){Te||Ue();Ve||(Te(),Ve=!0);Oe.add(a,b)}var Te;function Ue(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);Te=function(){a.then(We)}}else Te=function(){var b=We;!qa(n.setImmediate)||
n.Window&&n.Window.prototype&&!u("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(Qe||(Qe=Re()),Qe(b)):n.setImmediate(b)}}var Ve=!1,Oe=new Ke;function We(){for(var a;a=Ne();){try{a.a.call(a.f)}catch(b){Pe(b)}Je(Me,a)}Ve=!1}function Xe(a){this.a=Ye;this.w=void 0;this.j=this.f=this.h=null;this.i=this.v=!1;if(a!=ka)try{var b=this;a.call(void 0,function(c){Ze(b,$e,c)},function(c){if(!(c instanceof af))try{if(c instanceof Error)throw c;throw Error("Promise rejected.");}catch(d){}Ze(b,bf,c)})}catch(c){Ze(this,
bf,c)}}var Ye=0,$e=2,bf=3;function cf(){this.next=this.context=this.f=this.h=this.a=null;this.j=!1}cf.prototype.reset=function(){this.context=this.f=this.h=this.a=null;this.j=!1};var df=new Ie(function(){return new cf},function(a){a.reset()});function ef(a,b,c){var d=df.get();d.h=a;d.f=b;d.context=c;return d}function B(a){if(a instanceof Xe)return a;var b=new Xe(ka);Ze(b,$e,a);return b}function ff(a){return new Xe(function(b,c){c(a)})}Xe.prototype.then=function(a,b,c){return gf(this,qa(a)?a:null,
qa(b)?b:null,c)};Xe.prototype.$goog_Thenable=!0;function hf(a,b){return gf(a,null,b,void 0)}Xe.prototype.cancel=function(a){this.a==Ye&&Se(function(){var b=new af(a);jf(this,b)},this)};function jf(a,b){if(a.a==Ye)if(a.h){var c=a.h;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.j||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==Ye&&1==d?jf(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):kf(c),lf(c,e,bf,b)))}a.h=null}else Ze(a,bf,b)}function mf(a,b){a.f||a.a!=$e&&a.a!=bf||nf(a);a.j?a.j.next=
b:a.f=b;a.j=b}function gf(a,b,c,d){var e=ef(null,null,null);e.a=new Xe(function(f,g){e.h=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;e.f=c?function(h){try{var k=c.call(d,h);!ha(k)&&h instanceof af?g(h):f(k)}catch(l){g(l)}}:g});e.a.h=a;mf(a,e);return e.a}Xe.prototype.F=function(a){this.a=Ye;Ze(this,$e,a)};Xe.prototype.I=function(a){this.a=Ye;Ze(this,bf,a)};function Ze(a,b,c){if(a.a==Ye){a===c&&(b=bf,c=new TypeError("Promise cannot resolve to itself"));a.a=1;a:{var d=c,e=a.F,f=a.I;if(d instanceof
Xe){mf(d,ef(e||ka,f||null,a));var g=!0}else if(He(d))d.then(e,f,a),g=!0;else{if(ra(d))try{var h=d.then;if(qa(h)){of(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.w=c,a.a=b,a.h=null,nf(a),b!=bf||c instanceof af||pf(a,c))}}function of(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}function g(k){h||(h=!0,c.call(e,k))}var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}function nf(a){a.v||(a.v=!0,Se(a.C,a))}function kf(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.j=null);return b}
Xe.prototype.C=function(){for(var a;a=kf(this);)lf(this,a,this.a,this.w);this.v=!1};function lf(a,b,c,d){if(c==bf&&b.f&&!b.j)for(;a&&a.i;a=a.h)a.i=!1;if(b.a)b.a.h=null,qf(b,c,d);else try{b.j?b.h.call(b.context):qf(b,c,d)}catch(e){rf.call(null,e)}Je(df,b)}function qf(a,b,c){b==$e?a.h.call(a.context,c):a.f&&a.f.call(a.context,c)}function pf(a,b){a.i=!0;Se(function(){a.i&&rf.call(null,b)})}var rf=Pe;function af(a){Ba.call(this,a)}t(af,Ba);af.prototype.name="cancel";var sf=!w||9<=Number(Eb),tf=w&&!Db("9"),
uf=function(){if(!n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{n.addEventListener("test",ka,b),n.removeEventListener("test",ka,b)}catch(c){}return a}();function vf(){0!=wf&&(xf[this[ta]||(this[ta]=++ua)]=this);this.O=this.O;this.C=this.C}var wf=0,xf={};vf.prototype.O=!1;vf.prototype.m=function(){if(!this.O&&(this.O=!0,this.l(),0!=wf)){var a=this[ta]||(this[ta]=++ua);if(0!=wf&&this.C&&0<this.C.length)throw Error(this+
" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete xf[a]}};function yf(a,b){a.O?ha(void 0)?b.call(void 0):b():(a.C||(a.C=[]),a.C.push(ha(void 0)?q(b,void 0):b))}vf.prototype.l=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function zf(a){a&&"function"==typeof a.m&&a.m()}function Af(a,b){this.type=a;this.f=this.target=b;this.h=!1;this.ib=!0}Af.prototype.stopPropagation=function(){this.h=
!0};Af.prototype.preventDefault=function(){this.ib=!1};function Bf(a,b){Af.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.j=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;if(b=a.relatedTarget){if(ub){a:{try{ob(b.nodeName);
var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||
"";this.j=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=p(a.pointerType)?a.pointerType:Cf[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.preventDefault()}}t(Bf,Af);var Cf=ee({2:"touch",3:"pen",4:"mouse"});Bf.prototype.stopPropagation=function(){Bf.o.stopPropagation.call(this);this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0};Bf.prototype.preventDefault=
function(){Bf.o.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,tf)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Df="closure_listenable_"+(1E6*Math.random()|0),Ef=0;function Ff(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Fa=e;this.key=++Ef;this.qa=this.Ca=!1}function Gf(a){a.qa=!0;a.listener=null;a.proxy=null;a.src=null;a.Fa=null}function Hf(a){this.src=a;this.a={};this.f=
0}Hf.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.f++);var g=If(a,b,d,e);-1<g?(b=a[g],c||(b.Ca=!1)):(b=new Ff(b,this.src,f,!!d,e),b.Ca=c,a.push(b));return b};function Jf(a,b){var c=b.type;c in a.a&&Pa(a.a[c],b)&&(Gf(b),0==a.a[c].length&&(delete a.a[c],a.f--))}function If(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.qa&&f.listener==b&&f.capture==!!c&&f.Fa==d)return e}return-1}var Kf="closure_lm_"+(1E6*Math.random()|0),Lf={},Mf=0;function Nf(a,b,
c,d,e){if(d&&d.once)return Of(a,b,c,d,e);if(oa(b)){for(var f=0;f<b.length;f++)Nf(a,b[f],c,d,e);return null}c=Pf(c);return a&&a[Df]?a.F.add(String(b),c,!1,ra(d)?!!d.capture:!!d,e):Qf(a,b,c,!1,d,e)}function Qf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=ra(e)?!!e.capture:!!e,h=Rf(a);h||(a[Kf]=h=new Hf(a));c=h.add(b,c,d,g,f);if(c.proxy)return c;d=Sf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)uf||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Tf(b.toString()),
d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Mf++;return c}function Sf(){var a=Uf,b=sf?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function Of(a,b,c,d,e){if(oa(b)){for(var f=0;f<b.length;f++)Of(a,b[f],c,d,e);return null}c=Pf(c);return a&&a[Df]?a.F.add(String(b),c,!0,ra(d)?!!d.capture:!!d,e):Qf(a,b,c,!0,d,e)}function Vf(a,b,c,d,e){if(oa(b))for(var f=
0;f<b.length;f++)Vf(a,b[f],c,d,e);else(d=ra(d)?!!d.capture:!!d,c=Pf(c),a&&a[Df])?(a=a.F,b=String(b).toString(),b in a.a&&(f=a.a[b],c=If(f,c,d,e),-1<c&&(Gf(f[c]),Qa(f,c),0==f.length&&(delete a.a[b],a.f--)))):a&&(a=Rf(a))&&(b=a.a[b.toString()],a=-1,b&&(a=If(b,c,d,e)),(c=-1<a?b[a]:null)&&Wf(c))}function Wf(a){if("number"!=typeof a&&a&&!a.qa){var b=a.src;if(b&&b[Df])Jf(b.F,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Tf(c),d):b.addListener&&
b.removeListener&&b.removeListener(d);Mf--;(c=Rf(b))?(Jf(c,a),0==c.f&&(c.src=null,b[Kf]=null)):Gf(a)}}}function Tf(a){return a in Lf?Lf[a]:Lf[a]="on"+a}function Xf(a,b,c,d){var e=!0;if(a=Rf(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.qa&&(f=Yf(f,d),e=e&&!1!==f)}return e}function Yf(a,b){var c=a.listener,d=a.Fa||a.src;a.Ca&&Wf(a);return c.call(d,b)}function Uf(a,b){if(a.qa)return!0;if(!sf){if(!b)a:{b=["window","event"];for(var c=n,d=0;d<b.length;d++)if(c=
c[b[d]],null==c){b=null;break a}b=c}d=b;b=new Bf(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.f;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.h&&0<=e;e--){b.f=d[e];var f=Xf(d[e],a,!0,b);c=c&&f}for(e=0;!b.h&&e<d.length;e++)b.f=d[e],f=Xf(d[e],a,!1,b),c=c&&f}return c}return Yf(a,new Bf(b,this))}function Rf(a){a=a[Kf];return a instanceof Hf?a:null}var Zf="__closure_events_fn_"+
(1E9*Math.random()>>>0);function Pf(a){if(qa(a))return a;a[Zf]||(a[Zf]=function(b){return a.handleEvent(b)});return a[Zf]}function $f(a,b,c){b||(b={});c=c||window;var d=a instanceof Ob?a:Tb("undefined"!=typeof a.href?a.href:String(a));a=b.target||a.target;var e=[];for(f in b)switch(f){case "width":case "height":case "top":case "left":e.push(f+"="+b[f]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(f+"="+(b[f]?1:0))}var f=e.join(",");(u("iPhone")&&!u("iPod")&&!u("iPad")||
u("iPad")||u("iPod"))&&c.navigator&&c.navigator.standalone&&a&&"_self"!=a?(f=c.document.createElement("A"),d instanceof Ob||d instanceof Ob||(d="object"==typeof d&&d.la?d.ja():String(d),Sb.test(d)||(d="about:invalid#zClosurez"),d=Ub(d)),f.href=Rb(d),f.setAttribute("target",a),b.noreferrer&&f.setAttribute("rel","noreferrer"),b=document.createEvent("MouseEvent"),b.initMouseEvent("click",!0,!0,c,1),f.dispatchEvent(b),c={}):b.noreferrer?(c=c.open("",a,f),b=Qb(d),c&&(tb&&-1!=b.indexOf(";")&&(b="'"+b.replace(/'/g,
"%27")+"'"),c.opener=null,b=$b('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+nb(b)+'">',null),c.document.write(Zb(b)),c.document.close())):(c=c.open(Qb(d),a,f))&&b.noopener&&(c.opener=null);return c}function ag(a){window.location.assign(Qb(Tb(a)))}function bg(){try{return!!(window.opener&&window.opener.location&&window.opener.location.assign&&window.opener.location.hostname===window.location.hostname&&window.opener.location.protocol===window.location.protocol)}catch(a){}return!1}
function cg(a){$f(a,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function dg(a){a=ra(a)&&1==a.nodeType?a:document.querySelector(String(a));if(null==a)throw Error("Could not find the FirebaseUI widget element on the page.");return a}function eg(){return window.location.href}function fg(){var a=null;return hf(new Xe(function(b){"complete"==n.document.readyState?b():(a=function(){b()},Of(window,"load",a))}),function(b){Vf(window,"load",a);throw b;})}function gg(){for(var a=
32,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function hg(){this.a=new Jd;Kd(this.a,"acUiConfig");Kd(this.a,"autoUpgradeAnonymousUsers");Kd(this.a,"callbacks");Kd(this.a,"credentialHelper",ig);Kd(this.a,"immediateFederatedRedirect",!1);Kd(this.a,"popupMode",!1);Kd(this.a,"privacyPolicyUrl");Kd(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl");Kd(this.a,"queryParameterForWidgetMode","mode");
Kd(this.a,"signInFlow");Kd(this.a,"signInOptions");Kd(this.a,"signInSuccessUrl");Kd(this.a,"siteName");Kd(this.a,"tosUrl");Kd(this.a,"widgetUrl")}var ig="accountchooser.com",jg={Wb:ig,Zb:"googleyolo",NONE:"none"},kg={$b:"popup",bc:"redirect"};function lg(a){return a.a.get("acUiConfig")||null}var mg={Yb:"callback",ac:"recoverEmail",cc:"resetPassword",dc:"select",ec:"signIn",fc:"verifyEmail"},og=["anonymous"],pg=["sitekey","tabindex","callback","expired-callback"];function qg(a){var b=a.a.get("widgetUrl")||
eg();return rg(a,b)}function rg(a,b){a=sg(a);for(var c=b.search(Dc),d=0,e,f=[];0<=(e=Cc(b,d,a,c));)f.push(b.substring(d,e)),d=Math.min(b.indexOf("&",e)+1||c,c);f.push(b.substr(d));b=f.join("").replace(Fc,"$1");c="="+encodeURIComponent("select");(a+=c)?(c=b.indexOf("#"),0>c&&(c=b.length),d=b.indexOf("?"),0>d||d>c?(d=c,e=""):e=b.substring(d+1,c),b=[b.substr(0,d),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a}function tg(a){var b=!!a.a.get("autoUpgradeAnonymousUsers");
b&&!ug(a)&&Be('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0);return b}function vg(a){a=a.a.get("signInOptions")||[];for(var b=[],c=0;c<a.length;c++){var d=a[c];d=ra(d)?d:{provider:d};d.provider&&b.push(d)}return b}function wg(a,b){a=vg(a);for(var c=0;c<a.length;c++)if(a[c].provider===b)return a[c];return null}function xg(a){return La(vg(a),function(b){return b.provider})}function yg(a,b){a=zg(a);for(var c=
0;c<a.length;c++)if(a[c].providerId===b)return a[c];return null}function zg(a){return La(vg(a),function(b){return de[b.provider]||Oa(og,b.provider)?{providerId:b.provider}:{providerId:b.provider,hb:b.providerName||b.provider,pb:b.buttonColor||null,fb:b.iconUrl?Qb(Tb(b.iconUrl)):null,Eb:b.loginHintKey||null}})}function Ag(a){var b=[],c=[];Ha(vg(a),function(e){e.authMethod&&(b.push(e.authMethod),e.clientId&&c.push({uri:e.authMethod,clientId:e.clientId}))});var d=null;"googleyolo"===Bg(a)&&b.length&&
(d={supportedIdTokenProviders:c,supportedAuthMethods:b});return d}function Cg(a,b){var c=null;Ha(vg(a),function(d){d.authMethod===b&&(c=d.provider)});return c}function Dg(a){var b=null;Ha(vg(a),function(d){d.provider==firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].PhoneAuthProvider.PROVIDER_ID&&ra(d.recaptchaParameters)&&!oa(d.recaptchaParameters)&&(b=jb(d.recaptchaParameters))});if(b){var c=[];Ha(pg,function(d){"undefined"!==typeof b[d]&&(c.push(d),delete b[d])});c.length&&Ge('The following provided "recaptchaParameters" keys are not allowed: '+
c.join(", "))}return b}function Eg(a,b){a=(a=wg(a,b))&&a.scopes;return oa(a)?a:[]}function Fg(a,b){a=(a=wg(a,b))&&a.customParameters;return ra(a)?(a=jb(a),b===firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.PROVIDER_ID&&delete a.login_hint,b===firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GithubAuthProvider.PROVIDER_ID&&delete a.login,a):null}function Gg(a){a=wg(a,firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].PhoneAuthProvider.PROVIDER_ID);var b=null;a&&p(a.loginHint)&&(b=$d(a.loginHint));return a&&a.defaultNationalNumber||b&&b.va||null}function Hg(a){var b=(a=wg(a,firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].PhoneAuthProvider.PROVIDER_ID))&&
a.defaultCountry||null;b=b&&Vd(b);var c=null;a&&p(a.loginHint)&&(c=$d(a.loginHint));return b&&b[0]||c&&Td(c.a)||null}function Ig(a){a=wg(a,firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].PhoneAuthProvider.PROVIDER_ID);if(!a)return null;var b=a.whitelistedCountries,c=a.blacklistedCountries;if("undefined"!==typeof b&&(!oa(b)||0==b.length))throw Error("WhitelistedCountries must be a non-empty array.");if("undefined"!==typeof c&&!oa(c))throw Error("BlacklistedCountries must be an array.");if(b&&c)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");
if(!b&&!c)return Ud;a=[];if(b){c={};for(var d=0;d<b.length;d++){var e=Wd(b[d]);for(var f=0;f<e.length;f++)c[e[f].c]=e[f]}for(var g in c)c.hasOwnProperty(g)&&a.push(c[g])}else{g={};for(d=0;d<c.length;d++)for(e=Wd(c[d]),f=0;f<e.length;f++)g[e[f].c]=e[f];for(b=0;b<Ud.length;b++)null!==g&&Ud[b].c in g||a.push(Ud[b])}return a}function sg(a){return Md(a.a,"queryParameterForWidgetMode")}function C(a){var b=a.a.get("tosUrl")||null;a=a.a.get("privacyPolicyUrl")||null;b&&!a&&Ge("Privacy Policy URL is missing, the link will not be displayed.");
if(b&&a){if(qa(b))return b;if(p(b))return function(){cg(b)}}return null}function D(a){var b=a.a.get("tosUrl")||null,c=a.a.get("privacyPolicyUrl")||null;c&&!b&&Ge("Term of Service URL is missing, the link will not be displayed.");if(b&&c){if(qa(c))return c;if(p(c))return function(){cg(c)}}return null}function Jg(a){return(a=wg(a,firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.PROVIDER_ID))&&"undefined"!==typeof a.requireDisplayName?!!a.requireDisplayName:!0}function Kg(a){a=wg(a,firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.PROVIDER_ID);
return!(!a||a.signInMethod!==firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function Lg(a){a=wg(a,firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.PROVIDER_ID);return!(!a||!a.forceSameDevice)}function Mg(a){if(Kg(a)){var b={url:eg(),handleCodeInApp:!0};(a=wg(a,firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.PROVIDER_ID))&&"function"===typeof a.emailLinkSignIn&&lb(b,a.emailLinkSignIn());b.url=Vc(eg(),b.url).toString();return b}return null}function Ng(a){var b=!!a.a.get("immediateFederatedRedirect"),c=xg(a);a=Og(a);return b&&
1==c.length&&!Oa(ce,c[0])&&"redirect"==a}function Og(a){a=a.a.get("signInFlow");for(var b in kg)if(kg[b]==a)return kg[b];return"redirect"}function Pg(a){return Qg(a).uiShown||null}function Rg(a){return Qg(a).signInSuccess||null}function Sg(a){return Qg(a).signInSuccessWithAuthResult||null}function ug(a){return Qg(a).signInFailure||null}function Qg(a){return a.a.get("callbacks")||{}}function Bg(a){if("http:"!==(window.location&&window.location.protocol)&&"https:"!==(window.location&&window.location.protocol))return"none";
a=a.a.get("credentialHelper");for(var b in jg)if(jg[b]==a)return jg[b];return ig}function Tg(a){this.a=Uc(a)}var E={Ja:"ui_auid",Xb:"apiKey",Ka:"ui_sd",lb:"mode",Va:"oobCode",PROVIDER_ID:"ui_pid",Na:"ui_sid",mb:"tenantId"};function Ug(a,b){b?a.a.a.set(E.Na,b):Zc(a.a.a,E.Na)}function Vg(a,b){null!==b?a.a.a.set(E.Ka,b?"1":"0"):Zc(a.a.a,E.Ka)}function Wg(a){return a.a.a.get(E.Ja)||null}function Xg(a,b){b?a.a.a.set(E.PROVIDER_ID,b):Zc(a.a.a,E.PROVIDER_ID)}Tg.prototype.toString=function(){return this.a.toString()};
function F(){vf.call(this);this.F=new Hf(this);this.nb=this;this.Ba=null}t(F,vf);F.prototype[Df]=!0;F.prototype.Ua=function(a){this.Ba=a};F.prototype.removeEventListener=function(a,b,c,d){Vf(this,a,b,c,d)};function Yg(a,b){var c,d=a.Ba;if(d)for(c=[];d;d=d.Ba)c.push(d);a=a.nb;d=b.type||b;if(p(b))b=new Af(b,a);else if(b instanceof Af)b.target=b.target||a;else{var e=b;b=new Af(d,a);lb(b,e)}e=!0;if(c)for(var f=c.length-1;!b.h&&0<=f;f--){var g=b.f=c[f];e=Zg(g,d,!0,b)&&e}b.h||(g=b.f=a,e=Zg(g,d,!0,b)&&e,
b.h||(e=Zg(g,d,!1,b)&&e));if(c)for(f=0;!b.h&&f<c.length;f++)g=b.f=c[f],e=Zg(g,d,!1,b)&&e;return e}F.prototype.l=function(){F.o.l.call(this);if(this.F){var a=this.F,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,Gf(d[e]);delete a.a[c];a.f--}}this.Ba=null};function Zg(a,b,c,d){b=a.F.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.qa&&g.capture==c){var h=g.listener,k=g.Fa||g.src;g.Ca&&Jf(a.F,g);e=!1!==h.call(k,d)&&e}}return e&&0!=d.ib}var $g=
{},ah=0;function bh(a,b){if(!a)throw Error("Event target element must be provided!");a=ch(a);if($g[a]&&$g[a].length)for(var c=0;c<$g[a].length;c++)Yg($g[a][c],b)}function dh(a){var b=ch(a.N());$g[b]&&$g[b].length&&(Ra($g[b],function(c){return c==a}),$g[b].length||delete $g[b])}function ch(a){"undefined"===typeof a.a&&(a.a=ah,ah++);return a.a}function eh(a){if(!a)throw Error("Event target element must be provided!");this.a=a;F.call(this)}t(eh,F);eh.prototype.N=function(){return this.a};eh.prototype.register=
function(){var a=ch(this.N());$g[a]?Oa($g[a],this)||$g[a].push(this):$g[a]=[this]};function fh(a){var b=gh;this.i=[];this.O=b;this.K=a||null;this.j=this.a=!1;this.h=void 0;this.F=this.s=this.w=!1;this.v=0;this.f=null;this.C=0}fh.prototype.cancel=function(a){if(this.a)this.h instanceof fh&&this.h.cancel();else{if(this.f){var b=this.f;delete this.f;a?b.cancel(a):(b.C--,0>=b.C&&b.cancel())}this.O?this.O.call(this.K,this):this.F=!0;this.a||(a=new hh(this),ih(this),jh(this,!1,a))}};fh.prototype.I=function(a,
b){this.w=!1;jh(this,a,b)};function jh(a,b,c){a.a=!0;a.h=c;a.j=!b;kh(a)}function ih(a){if(a.a){if(!a.F)throw new lh(a);a.F=!1}}function mh(a,b,c){a.i.push([b,c,void 0]);a.a&&kh(a)}fh.prototype.then=function(a,b,c){var d,e,f=new Xe(function(g,h){d=g;e=h});mh(this,d,function(g){g instanceof hh?f.cancel():e(g)});return f.then(a,b,c)};fh.prototype.$goog_Thenable=!0;function nh(a){return Ma(a.i,function(b){return qa(b[1])})}function kh(a){if(a.v&&a.a&&nh(a)){var b=a.v,c=oh[b];c&&(n.clearTimeout(c.a),delete oh[b]);
a.v=0}a.f&&(a.f.C--,delete a.f);b=a.h;for(var d=c=!1;a.i.length&&!a.w;){var e=a.i.shift(),f=e[0],g=e[1];e=e[2];if(f=a.j?g:f)try{var h=f.call(e||a.K,b);ha(h)&&(a.j=a.j&&(h==b||h instanceof Error),a.h=b=h);if(He(b)||"function"===typeof n.Promise&&b instanceof n.Promise)d=!0,a.w=!0}catch(k){b=k,a.j=!0,nh(a)||(c=!0)}}a.h=b;d&&(h=q(a.I,a,!0),d=q(a.I,a,!1),b instanceof fh?(mh(b,h,d),b.s=!0):b.then(h,d));c&&(b=new ph(b),oh[b.a]=b,a.v=b.a)}function lh(){Ba.call(this)}t(lh,Ba);lh.prototype.message="Deferred has already fired";
lh.prototype.name="AlreadyCalledError";function hh(){Ba.call(this)}t(hh,Ba);hh.prototype.message="Deferred was canceled";hh.prototype.name="CanceledError";function ph(a){this.a=n.setTimeout(q(this.h,this),0);this.f=a}ph.prototype.h=function(){delete oh[this.a];throw this.f;};var oh={};function qh(a){var b={},c=b.document||document,d=Mb(a).toString(),e=document.createElement("SCRIPT"),f={jb:e,kb:void 0},g=new fh(f),h=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(h=window.setTimeout(function(){rh(e,!0);
var l=new sh(th,"Timeout reached for loading script "+d);ih(g);jh(g,!1,l)},k),f.kb=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(rh(e,b.ic||!1,h),ih(g),jh(g,!0,null))};e.onerror=function(){rh(e,!0,h);var l=new sh(uh,"Error while loading script "+d);ih(g);jh(g,!1,l)};f=b.attributes||{};lb(f,{type:"text/javascript",charset:"UTF-8"});lc(e,f);cc(e,a);vh(c).appendChild(e);return g}function vh(a){var b=(a||document).getElementsByTagName("HEAD");
return b&&0!=b.length?b[0]:a.documentElement}function gh(){if(this&&this.jb){var a=this.jb;a&&"SCRIPT"==a.tagName&&rh(a,!0,this.kb)}}function rh(a,b,c){null!=c&&n.clearTimeout(c);a.onload=ka;a.onerror=ka;a.onreadystatechange=ka;b&&window.setTimeout(function(){oc(a)},0)}var uh=0,th=1;function sh(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);Ba.call(this,c);this.code=a}t(sh,Ba);function wh(a){this.a=a||n.googleyolo;this.f=null;this.h=!1}la(wh);var xh=new Gb(Hb,"https://smartlock.google.com/client");
wh.prototype.cancel=function(){this.a&&this.h&&(this.f=this.a.cancelLastOperation().catch(function(){}))};function yh(a,b,c){if(a.a&&b){var d=function(){a.h=!0;var e=Promise.resolve(null);c||(e=a.a.retrieve(b).catch(function(f){if("userCanceled"===f.type||"illegalConcurrentRequest"===f.type)throw f;return null}));return e.then(function(f){return f?f:a.a.hint(b)}).catch(function(f){if("userCanceled"===f.type)a.f=Promise.resolve();else if("illegalConcurrentRequest"===f.type)return a.cancel(),yh(a,b,
c);return null})};return a.f?a.f.then(d):d()}if(b)return d=hf(zh.Sa().load().then(function(){a.a=n.googleyolo;return yh(a,b,c)}),function(){return null}),Promise.resolve(d);if("undefined"!==typeof Promise)return Promise.resolve(null);throw Error("One-Tap sign in not supported in the current browser!");}function zh(){this.a=null}la(zh);zh.prototype.load=function(){var a=this;if(this.a)return this.a;var b=Nb(Jb(xh));return n.googleyolo?B():this.a=fg().then(function(){if(!n.googleyolo)return new Xe(function(c,
d){var e=setTimeout(function(){a.a=null;d(Error("Network error!"))},1E4);n.onGoogleYoloLoad=function(){clearTimeout(e);c()};hf(B(qh(b)),function(f){clearTimeout(e);a.a=null;d(f)})})})};function Ah(a,b){this.a=a;this.f=b||function(c){throw c;}}Ah.prototype.confirm=function(a){return hf(B(this.a.confirm(a)),this.f)};function Bh(a,b,c,d){this.a=a;this.h=b||null;this.j=c||null;this.f=d||null}Bh.prototype.Z=function(){return{email:this.a,displayName:this.h,photoUrl:this.j,providerId:this.f}};function Ch(a){return a.email?
new Bh(a.email,a.displayName,a.photoUrl,a.providerId):null}function Dh(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}m=Dh.prototype;m.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');ha(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(za()+1E3*c)).toUTCString();this.a.cookie=
a+"="+b+e+d+c+f};m.get=function(a,b){for(var c=a+"=",d=(this.a.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Xa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};m.ia=function(){return Eh(this).keys};m.ka=function(){return Eh(this).values};m.clear=function(){for(var a=Eh(this).keys,b=a.length-1;0<=b;b--){var c=a[b];this.get(c);this.set(c,"",0,void 0,void 0)}};function Eh(a){a=(a.a.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Xa(a[f]),d=e.indexOf("="),
-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}var Fh=new Dh;function Gh(){}function Hh(a,b,c,d){this.h="undefined"!==typeof a&&null!==a?a:-1;this.f=b||null;this.a=c||null;this.j=!!d}t(Hh,Gh);Hh.prototype.set=function(a,b){Fh.set(a,b,this.h,this.f,this.a,this.j)};Hh.prototype.get=function(a){return Fh.get(a)||null};Hh.prototype.pa=function(a){var b=this.f,c=this.a;Fh.get(a);Fh.set(a,"",0,b,c)};function Ih(a,b){this.f=a;this.a=b||null}Ih.prototype.Z=
function(){return{email:this.f,credential:this.a&&this.a.toJSON()}};function Jh(a){if(a&&a.email){var b=a.credential&&firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].AuthCredential.fromJSON(a.credential);return new Ih(a.email,b)}return null}function Kh(a){this.a=a||null}Kh.prototype.Z=function(){return{tenantId:this.a}};function Lh(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return b}function Mh(a){return La(a,function(b){b=b.toString(16);return 1<b.length?b:"0"+b}).join("")}
function Nh(a){this.v=a;this.f=this.v.length/4;this.j=this.f+6;this.h=[[],[],[],[]];this.i=[[],[],[],[]];this.a=Array(Oh*(this.j+1));for(a=0;a<this.f;a++)this.a[a]=[this.v[4*a],this.v[4*a+1],this.v[4*a+2],this.v[4*a+3]];var b=Array(4);for(a=this.f;a<Oh*(this.j+1);a++){b[0]=this.a[a-1][0];b[1]=this.a[a-1][1];b[2]=this.a[a-1][2];b[3]=this.a[a-1][3];if(0==a%this.f){var c=b,d=c[0];c[0]=c[1];c[1]=c[2];c[2]=c[3];c[3]=d;Ph(b);b[0]^=Qh[a/this.f][0];b[1]^=Qh[a/this.f][1];b[2]^=Qh[a/this.f][2];b[3]^=Qh[a/this.f][3]}else 6<
this.f&&4==a%this.f&&Ph(b);this.a[a]=Array(4);this.a[a][0]=this.a[a-this.f][0]^b[0];this.a[a][1]=this.a[a-this.f][1]^b[1];this.a[a][2]=this.a[a-this.f][2]^b[2];this.a[a][3]=this.a[a-this.f][3]^b[3]}}Nh.prototype.w=16;var Oh=Nh.prototype.w/4;function Rh(a,b){for(var c,d=0;d<Oh;d++)for(var e=0;4>e;e++)c=4*e+d,c=b[c],a.h[d][e]=c}function Sh(a){for(var b=[],c=0;c<Oh;c++)for(var d=0;4>d;d++)b[4*d+c]=a.h[c][d];return b}function Th(a,b){for(var c=0;4>c;c++)for(var d=0;4>d;d++)a.h[c][d]^=a.a[4*b+d][c]}function Uh(a,
b){for(var c=0;4>c;c++)for(var d=0;4>d;d++)a.h[c][d]=b[a.h[c][d]]}function Vh(a){for(var b=1;4>b;b++)for(var c=0;4>c;c++)a.i[b][c]=a.h[b][c];for(b=1;4>b;b++)for(c=0;4>c;c++)a.h[b][c]=a.i[b][(c+b)%Oh]}function Wh(a){for(var b=1;4>b;b++)for(var c=0;4>c;c++)a.i[b][(c+b)%Oh]=a.h[b][c];for(b=1;4>b;b++)for(c=0;4>c;c++)a.h[b][c]=a.i[b][c]}function Ph(a){a[0]=Xh[a[0]];a[1]=Xh[a[1]];a[2]=Xh[a[2]];a[3]=Xh[a[3]]}var Xh=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,
173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,
92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],Yh=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,
8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,
120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],Qh=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Zh=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,
94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,
109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],$h=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,
202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,
84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],ai=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,
174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,
186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],bi=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,
242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,
190,181,168,163],ci=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,
244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],di=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,
216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,
251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function ei(a,b){a=new Nh(fi(a));b=Lh(b);for(var c=Va(b,0,16),d="",e;c.length;){e=16-c.length;for(var f=0;f<e;f++)c.push(0);e=a;Rh(e,c);Th(e,0);for(c=1;c<
e.j;++c){Uh(e,Xh);Vh(e);f=e.h;for(var g=e.i[0],h=0;4>h;h++)g[0]=f[0][h],g[1]=f[1][h],g[2]=f[2][h],g[3]=f[3][h],f[0][h]=Zh[g[0]]^$h[g[1]]^g[2]^g[3],f[1][h]=g[0]^Zh[g[1]]^$h[g[2]]^g[3],f[2][h]=g[0]^g[1]^Zh[g[2]]^$h[g[3]],f[3][h]=$h[g[0]]^g[1]^g[2]^Zh[g[3]];Th(e,c)}Uh(e,Xh);Vh(e);Th(e,e.j);d+=Mh(Sh(e));c=Va(b,0,16)}return d}function gi(a,b){a=new Nh(fi(a));for(var c=[],d=0;d<b.length;d+=2)c.push(parseInt(b.substring(d,d+2),16));var e=Va(c,0,16);for(b="";e.length;){d=a;Rh(d,e);Th(d,d.j);for(e=1;e<d.j;++e){Wh(d);
Uh(d,Yh);Th(d,d.j-e);for(var f=d.h,g=d.i[0],h=0;4>h;h++)g[0]=f[0][h],g[1]=f[1][h],g[2]=f[2][h],g[3]=f[3][h],f[0][h]=di[g[0]]^bi[g[1]]^ci[g[2]]^ai[g[3]],f[1][h]=ai[g[0]]^di[g[1]]^bi[g[2]]^ci[g[3]],f[2][h]=ci[g[0]]^ai[g[1]]^di[g[2]]^bi[g[3]],f[3][h]=bi[g[0]]^ci[g[1]]^ai[g[2]]^di[g[3]]}Wh(d);Uh(d,Yh);Th(d,0);d=Sh(d);if(8192>=d.length)d=String.fromCharCode.apply(null,d);else{e="";for(f=0;f<d.length;f+=8192)e+=String.fromCharCode.apply(null,Wa(d,f,f+8192));d=e}b+=d;e=Va(c,0,16)}return b.replace(/(\x00)+$/,
"")}function fi(a){a=Lh(a.substring(0,32));for(var b=32-a.length,c=0;c<b;c++)a.push(0);return a}function hi(a){var b=[];ii(new ji,a,b);return b.join("")}function ji(){}function ii(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(oa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ii(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,
d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ki(d,c),c.push(":"),ii(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ki(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var li={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},mi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:
/[\\"\x00-\x1f\x7f-\xff]/g;function ki(a,b){b.push('"',a.replace(mi,function(c){var d=li[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),li[c]=d);return d}),'"')}function ni(a){this.a=a}ni.prototype.set=function(a,b){ha(b)?this.a.set(a,hi(b)):this.a.pa(a)};ni.prototype.get=function(a){try{var b=this.a.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c$2){throw"Storage: Invalid value was encountered";}};function oi(){}t(oi,Gh);oi.prototype.clear=function(){var a=wc(this.ga(!0)),
b=this;Ha(a,function(c){b.pa(c)})};function pi(a){this.a=a}t(pi,oi);function qi(a){if(!a.a)return!1;try{return a.a.setItem("__sak","1"),a.a.removeItem("__sak"),!0}catch(b){return!1}}m=pi.prototype;m.set=function(a,b){try{this.a.setItem(a,b)}catch(c){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};m.get=function(a){a=this.a.getItem(a);if(!p(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};m.pa=function(a){this.a.removeItem(a)};
m.ga=function(a){var b=0,c=this.a,d=new tc;d.next=function(){if(b>=c.length)throw sc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!p(e))throw"Storage mechanism: Invalid value was encountered";return e};return d};m.clear=function(){this.a.clear()};m.key=function(a){return this.a.key(a)};function ri(){var a=null;try{a=window.localStorage||null}catch(b){}this.a=a}t(ri,pi);function si(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.a=a}t(si,pi);function ti(a,b){this.f=a;this.a=b+"::"}
t(ti,oi);ti.prototype.set=function(a,b){this.f.set(this.a+a,b)};ti.prototype.get=function(a){return this.f.get(this.a+a)};ti.prototype.pa=function(a){this.f.pa(this.a+a)};ti.prototype.ga=function(a){var b=this.f.ga(!0),c=this,d=new tc;d.next=function(){for(var e=b.next();e.substr(0,c.a.length)!=c.a;)e=b.next();return a?e.substr(c.a.length):c.f.get(e)};return d};var ui,vi=new ri;ui=qi(vi)?new ti(vi,"firebaseui"):null;var wi=new ni(ui),xi,yi=new si;xi=qi(yi)?new ti(yi,"firebaseui"):null;var zi=new ni(xi),
Ai={name:"pendingEmailCredential",storage:zi},Bi={name:"redirectStatus",storage:zi},Ci={name:"redirectUrl",storage:zi},Di={name:"rememberAccount",storage:zi},Ei={name:"rememberedAccounts",storage:wi},Fi={name:"emailForSignIn",storage:new ni(new Hh(3600,"/"))},Gi={name:"pendingEncryptedCredential",storage:new ni(new Hh(3600,"/"))};function Hi(a,b){return a.storage.get(b?a.name+":"+b:a.name)}function G(a,b){a.storage.a.pa(b?a.name+":"+b:a.name)}function Ii(a,b,c){a.storage.set(c?a.name+":"+c:a.name,
b)}function Ji(a){return Hi(Ci,a)||null}function Ki(a,b){Ii(Ci,a,b)}function Li(a,b){Ii(Di,a,b)}function Mi(a){a=Hi(Ei,a)||[];a=La(a,function(b){return Ch(b)});return Ja(a,na)}function Ni(a,b){var c=Mi(b),d=Na(c,function(e){return e.a==a.a&&(e.f||null)==(a.f||null)});-1<d&&Qa(c,d);c.unshift(a);Ii(Ei,La(c,function(e){return e.Z()}),b)}function Oi(a){a=Hi(Ai,a)||null;return Jh(a)}function Pi(a){G(Ai,a)}function Qi(a,b){Ii(Ai,a.Z(),b)}function Ri(a){return(a=Hi(Bi,a)||null)&&"undefined"!==typeof a.tenantId?
new Kh(a.tenantId):null}function Si(a,b){Ii(Bi,a.Z(),b)}function Ti(a,b){b=Hi(Fi,b);var c=null;if(b)try{var d=gi(a,b),e=JSON.parse(d);c=e&&e.email||null}catch(f){}return c}function Ui(a,b){b=Hi(Gi,b);var c=null;if(b)try{var d=gi(a,b);c=JSON.parse(d)}catch(e){}return Jh(c||null)}function Vi(a,b,c){Ii(Gi,ei(a,JSON.stringify(b.Z())),c)}var Wi=null;function Xi(a){return!(!a||-32E3!=a.code||"Service unavailable"!=a.message)}function Yi(a,b,c,d){Wi||(a={callbacks:{empty:a,select:function(e,f){e&&e.account&&
b?b(Ch(e.account)):c&&c(!Xi(f))},store:a,update:a},language:"en",providers:void 0,ui:d},"undefined"!=typeof accountchooser&&accountchooser.Api&&accountchooser.Api.init?Wi=accountchooser.Api.init(a):(Wi=new Zi(a),$i()))}function aj(a,b,c){function d(){var e=Vc(window.location.href,c).toString();Wi.select(La(b||[],function(f){return f.Z()}),{clientCallbackUrl:e})}b&&b.length?d():Wi.checkEmpty(function(e,f){e||f?a(!Xi(f)):d()})}function Zi(a){this.a=a;this.a.callbacks=this.a.callbacks||{}}function $i(){var a=
Wi;qa(a.a.callbacks.empty)&&a.a.callbacks.empty()}var bj={code:-32E3,message:"Service unavailable",data:"Service is unavailable."};m=Zi.prototype;m.store=function(){qa(this.a.callbacks.store)&&this.a.callbacks.store(void 0,bj)};m.select=function(){qa(this.a.callbacks.select)&&this.a.callbacks.select(void 0,bj)};m.update=function(){qa(this.a.callbacks.update)&&this.a.callbacks.update(void 0,bj)};m.checkDisabled=function(a){a(!0)};m.checkEmpty=function(a){a(void 0,bj)};m.checkAccountExist=function(a,
b){b(void 0,bj)};m.checkShouldUpdate=function(a,b){b(void 0,bj)};var cj,dj,ej,fj,H={};function I(a,b,c,d){H[a].apply(null,Array.prototype.slice.call(arguments,1))}var gj=/MSIE ([\d.]+).*Windows NT ([\d.]+)/,hj=/Firefox\/([\d.]+)/,ij=/Opera[ \/]([\d.]+)(.*Version\/([\d.]+))?/,jj=/Chrome\/([\d.]+)/,kj=/((Windows NT ([\d.]+))|(Mac OS X ([\d_]+))).*Version\/([\d.]+).*Safari/,lj=/Mac OS X;.*(?!(Version)).*Safari/,mj=/Android ([\d.]+).*Safari/,nj=/OS ([\d_]+) like Mac OS X.*Mobile.*Safari/,oj=/Konqueror\/([\d.]+)/,
pj=/MSIE ([\d.]+).*Windows Phone OS ([\d.]+)/;function qj(a,b){a=a.split(b||".");this.a=[];for(b=0;b<a.length;b++)this.a.push(parseInt(a[b],10))}function rj(a,b){b instanceof qj||(b=new qj(String(b)));for(var c=Math.max(a.a.length,b.a.length),d=0;d<c;d++){var e=a.a[d],f=b.a[d];if(void 0!==e&&void 0!==f&&e!==f)return e-f;if(void 0===e)return-1;if(void 0===f)return 1}return 0}function sj(a,b){return 0<=rj(a,b)}function tj(){var a=window.navigator&&window.navigator.userAgent;if(a){var b;if(b=a.match(ij)){var c=
new qj(b[3]||b[1]);return 0<=a.indexOf("Opera Mini")?!1:0<=a.indexOf("Opera Mobi")?0<=a.indexOf("Android")&&sj(c,"10.1"):sj(c,"8.0")}if(b=a.match(hj))return sj(new qj(b[1]),"2.0");if(b=a.match(jj))return sj(new qj(b[1]),"6.0");if(b=a.match(kj))return c=new qj(b[6]),a=b[3]&&new qj(b[3]),b=b[5]&&new qj(b[5],"_"),(!(!a||!sj(a,"6.0"))||!(!b||!sj(b,"10.5.6")))&&sj(c,"3.0");if(b=a.match(mj))return sj(new qj(b[1]),"3.0");if(b=a.match(nj))return sj(new qj(b[1],"_"),"4.0");if(b=a.match(oj))return sj(new qj(b[1]),
"4.7");if(b=a.match(pj))return c=new qj(b[1]),a=new qj(b[2]),sj(c,"7.0")&&sj(a,"7.0");if(b=a.match(gj))return c=new qj(b[1]),a=new qj(b[2]),sj(c,"7.0")&&sj(a,"6.0");if(a.match(lj))return!1}return!0}function uj(a){if(a.classList)return a.classList;a=a.className;return p(a)&&a.match(/\S+/g)||[]}function vj(a,b){return a.classList?a.classList.contains(b):Oa(uj(a),b)}function wj(a,b){a.classList?a.classList.add(b):vj(a,b)||(a.className+=0<a.className.length?" "+b:b)}function xj(a,b){a.classList?a.classList.remove(b):
vj(a,b)&&(a.className=Ja(uj(a),function(c){return c!=b}).join(" "))}function J(a){var b=a.type;switch(p(b)&&b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null;default:return null!=a.value?a.value:null}}function yj(a,b){var c=a.type;switch(p(c)&&c.toLowerCase()){case "checkbox":case "radio":a.checked=
b;break;case "select-one":a.selectedIndex=-1;if(p(b))for(var d=0;c=a.options[d];d++)if(c.value==b){c.selected=!0;break}break;case "select-multiple":p(b)&&(b=[b]);for(d=0;c=a.options[d];d++)if(c.selected=!1,b)for(var e,f=0;e=b[f];f++)c.value==e&&(c.selected=!0);break;default:a.value=null!=b?b:""}}function zj(a){if(a.altKey&&!a.ctrlKey||a.metaKey||112<=a.keyCode&&123>=a.keyCode)return!1;if(Aj(a.keyCode))return!0;switch(a.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;
case 0:return!ub;default:return 166>a.keyCode||183<a.keyCode}}function Bj(a,b,c,d,e,f){if(vb&&!Db("525"))return!0;if(xb&&e)return Aj(a);if(e&&!d)return!1;if(!ub){"number"==typeof b&&(b=Cj(b));var g=17==b||18==b||xb&&91==b;if((!c||xb)&&g||xb&&16==b&&(d||f))return!1}if((vb||sb)&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(w&&d&&b==a)return!1;switch(a){case 13:return ub?f||e?!1:!(c&&d):!0;case 27:return!(vb||sb||
ub)}return ub&&(d||e||f)?!1:Aj(a)}function Aj(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||(vb||sb)&&0==a)return!0;switch(a){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return ub;default:return!1}}function Cj(a){if(ub)a=Dj(a);else if(xb&&vb)switch(a){case 93:a=91}return a}function Dj(a){switch(a){case 61:return 187;case 59:return 186;
case 173:return 189;case 224:return 91;case 0:return 224;default:return a}}function Ej(a){F.call(this);this.a=a;Nf(a,"keydown",this.f,!1,this);Nf(a,"click",this.h,!1,this)}t(Ej,F);Ej.prototype.f=function(a){(13==a.keyCode||vb&&3==a.keyCode)&&Fj(this,a)};Ej.prototype.h=function(a){Fj(this,a)};function Fj(a,b){var c=new Gj(b);if(Yg(a,c)){c=new Hj(b);try{Yg(a,c)}finally{b.stopPropagation()}}}Ej.prototype.l=function(){Ej.o.l.call(this);Vf(this.a,"keydown",this.f,!1,this);Vf(this.a,"click",this.h,!1,this);
delete this.a};function Hj(a){Bf.call(this,a.a);this.type="action"}t(Hj,Bf);function Gj(a){Bf.call(this,a.a);this.type="beforeaction"}t(Gj,Bf);function Ij(a){F.call(this);this.a=a;a=w?"focusout":"blur";this.f=Nf(this.a,w?"focusin":"focus",this,!w);this.h=Nf(this.a,a,this,!w)}t(Ij,F);Ij.prototype.handleEvent=function(a){var b=new Bf(a.a);b.type="focusin"==a.type||"focus"==a.type?"focusin":"focusout";Yg(this,b)};Ij.prototype.l=function(){Ij.o.l.call(this);Wf(this.f);Wf(this.h);delete this.a};function Jj(a,
b){F.call(this);this.f=a||1;this.a=b||n;this.h=q(this.Sb,this);this.j=za()}t(Jj,F);m=Jj.prototype;m.Ea=!1;m.Y=null;m.Sb=function(){if(this.Ea){var a=za()-this.j;0<a&&a<.8*this.f?this.Y=this.a.setTimeout(this.h,this.f-a):(this.Y&&(this.a.clearTimeout(this.Y),this.Y=null),Yg(this,"tick"),this.Ea&&(Kj(this),this.start()))}};m.start=function(){this.Ea=!0;this.Y||(this.Y=this.a.setTimeout(this.h,this.f),this.j=za())};function Kj(a){a.Ea=!1;a.Y&&(a.a.clearTimeout(a.Y),a.Y=null)}m.l=function(){Jj.o.l.call(this);
Kj(this);delete this.a};function Lj(a,b){if(qa(a))b&&(a=q(a,b));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(0)?-1:n.setTimeout(a,0)}function Mj(a){vf.call(this);this.f=a;this.a={}}t(Mj,vf);var Nj=[];function Oj(a,b,c,d){oa(c)||(c&&(Nj[0]=c.toString()),c=Nj);for(var e=0;e<c.length;e++){var f=Nf(b,c[e],d||a.handleEvent,!1,a.f||a);if(!f)break;a.a[f.key]=f}}function Pj(a){ib(a.a,function(b,c){this.a.hasOwnProperty(c)&&
Wf(b)},a);a.a={}}Mj.prototype.l=function(){Mj.o.l.call(this);Pj(this)};Mj.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Qj(a){F.call(this);this.a=null;this.f=a;a=w||sb||vb&&!Db("531")&&"TEXTAREA"==a.tagName;this.h=new Mj(this);Oj(this.h,this.f,a?["keydown","paste","cut","drop","input"]:"input",this)}t(Qj,F);Qj.prototype.handleEvent=function(a){if("input"==a.type)w&&Db(10)&&0==a.keyCode&&0==a.j||(Rj(this),Yg(this,Sj(a)));else if("keydown"!=a.type||
zj(a)){var b="keydown"==a.type?this.f.value:null;w&&229==a.keyCode&&(b=null);var c=Sj(a);Rj(this);this.a=Lj(function(){this.a=null;this.f.value!=b&&Yg(this,c)},this)}};function Rj(a){null!=a.a&&(n.clearTimeout(a.a),a.a=null)}function Sj(a){a=new Bf(a.a);a.type="input";return a}Qj.prototype.l=function(){Qj.o.l.call(this);this.h.m();Rj(this);delete this.f};function Tj(a,b){F.call(this);a&&(this.Ia&&Uj(this),this.oa=a,this.Ha=Nf(this.oa,"keypress",this,b),this.Ta=Nf(this.oa,"keydown",this.yb,b,this),
this.Ia=Nf(this.oa,"keyup",this.Bb,b,this))}t(Tj,F);m=Tj.prototype;m.oa=null;m.Ha=null;m.Ta=null;m.Ia=null;m.S=-1;m.W=-1;m.Pa=!1;var Vj={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Wj={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,
F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Xj=!vb||Db("525"),Yj=xb&&ub;m=Tj.prototype;m.yb=function(a){if(vb||sb)if(17==this.S&&!a.ctrlKey||18==this.S&&!a.altKey||xb&&91==this.S&&!a.metaKey)this.W=this.S=-1;-1==this.S&&(a.ctrlKey&&17!=a.keyCode?this.S=17:a.altKey&&18!=a.keyCode?this.S=18:a.metaKey&&91!=a.keyCode&&(this.S=91));Xj&&!Bj(a.keyCode,this.S,a.shiftKey,a.ctrlKey,a.altKey,a.metaKey)?this.handleEvent(a):(this.W=Cj(a.keyCode),Yj&&(this.Pa=a.altKey))};m.Bb=function(a){this.W=
this.S=-1;this.Pa=a.altKey};m.handleEvent=function(a){var b=a.a,c=b.altKey;if(w&&"keypress"==a.type){var d=this.W;var e=13!=d&&27!=d?b.keyCode:0}else(vb||sb)&&"keypress"==a.type?(d=this.W,e=0<=b.charCode&&63232>b.charCode&&Aj(d)?b.charCode:0):rb&&!vb?(d=this.W,e=Aj(d)?b.keyCode:0):("keypress"==a.type?(Yj&&(c=this.Pa),b.keyCode==b.charCode?32>b.keyCode?(d=b.keyCode,e=0):(d=this.W,e=b.charCode):(d=b.keyCode||this.W,e=b.charCode||0)):(d=b.keyCode||this.W,e=b.charCode||0),xb&&63==e&&224==d&&(d=191));
var f=d=Cj(d);d?63232<=d&&d in Vj?f=Vj[d]:25==d&&a.shiftKey&&(f=9):b.keyIdentifier&&b.keyIdentifier in Wj&&(f=Wj[b.keyIdentifier]);ub&&Xj&&"keypress"==a.type&&!Bj(f,this.S,a.shiftKey,a.ctrlKey,c,a.metaKey)||(a=f==this.S,this.S=f,b=new Zj(f,e,a,b),b.altKey=c,Yg(this,b))};m.N=function(){return this.oa};function Uj(a){a.Ha&&(Wf(a.Ha),Wf(a.Ta),Wf(a.Ia),a.Ha=null,a.Ta=null,a.Ia=null);a.oa=null;a.S=-1;a.W=-1}m.l=function(){Tj.o.l.call(this);Uj(this)};function Zj(a,b,c,d){Bf.call(this,d);this.type="key";
this.keyCode=a;this.j=b;this.repeat=c}t(Zj,Bf);function ak(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}ak.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};ak.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};ak.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=
Math.floor(this.bottom);this.left=Math.floor(this.left);return this};ak.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function bk(a,b){var c=hc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=c.defaultView.getComputedStyle(a,null))?a[b]||a.getPropertyValue(b)||"":""}function ck(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}w&&
a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}function dk(a,b){b=b||nc(document);var c=b||nc(document);var d=ek(a),e=ek(c);if(!w||9<=Number(Eb)){g=bk(c,"borderLeftWidth");var f=bk(c,"borderRightWidth");h=bk(c,"borderTopWidth");k=bk(c,"borderBottomWidth");f=new ak(parseFloat(h),parseFloat(f),parseFloat(k),parseFloat(g))}else{var g=fk(c,"borderLeft");f=fk(c,"borderRight");var h=fk(c,"borderTop"),
k=fk(c,"borderBottom");f=new ak(h,f,k,g)}c==nc(document)?(g=d.a-c.scrollLeft,d=d.f-c.scrollTop,!w||10<=Number(Eb)||(g+=f.left,d+=f.top)):(g=d.a-e.a-f.left,d=d.f-e.f-f.top);e=a.offsetWidth;f=a.offsetHeight;h=vb&&!e&&!f;ha(e)&&!h||!a.getBoundingClientRect?a=new ec(e,f):(a=ck(a),a=new ec(a.right-a.left,a.bottom-a.top));e=c.clientHeight-a.height;f=c.scrollLeft;h=c.scrollTop;f+=Math.min(g,Math.max(g-(c.clientWidth-a.width),0));h+=Math.min(d,Math.max(d-e,0));c=new dc(f,h);b.scrollLeft=c.a;b.scrollTop=c.f}
function ek(a){var b=hc(a),c=new dc(0,0);var d=b?hc(b):document;d=!w||9<=Number(Eb)||"CSS1Compat"==fc(d).a.compatMode?d.documentElement:d.body;if(a==d)return c;a=ck(a);d=fc(b).a;b=nc(d);d=d.parentWindow||d.defaultView;b=w&&Db("10")&&d.pageYOffset!=b.scrollTop?new dc(b.scrollLeft,b.scrollTop):new dc(d.pageXOffset||b.scrollLeft,d.pageYOffset||b.scrollTop);c.a=a.left+b.a;c.f=a.top+b.f;return c}var gk={thin:2,medium:4,thick:6};function fk(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;
var c=a.currentStyle?a.currentStyle[b+"Width"]:null;if(c in gk)a=gk[c];else if(/^\d+px?$/.test(c))a=parseInt(c,10);else{b=a.style.left;var d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=b;a.runtimeStyle.left=d;a=+c}return a}function hk(){}la(hk);hk.prototype.a=0;function ik(a){F.call(this);this.w=a||fc();this.Ya=null;this.ma=!1;this.j=null;this.I=void 0;this.xa=this.za=this.$=null}t(ik,F);m=ik.prototype;m.Db=hk.Sa();m.N=function(){return this.j};
function K(a,b){return a.j?kc(b,a.j||a.w.a):null}function jk(a){a.I||(a.I=new Mj(a));return a.I}m.Ua=function(a){if(this.$&&this.$!=a)throw Error("Method not supported");ik.o.Ua.call(this,a)};m.eb=function(){this.j=this.w.a.createElement("DIV")};m.render=function(a){if(this.ma)throw Error("Component already rendered");this.j||this.eb();a?a.insertBefore(this.j,null):this.w.a.body.appendChild(this.j);this.$&&!this.$.ma||this.u()};m.u=function(){this.ma=!0;kk(this,function(a){!a.ma&&a.N()&&a.u()})};
m.ua=function(){kk(this,function(a){a.ma&&a.ua()});this.I&&Pj(this.I);this.ma=!1};m.l=function(){this.ma&&this.ua();this.I&&(this.I.m(),delete this.I);kk(this,function(a){a.m()});this.j&&oc(this.j);this.$=this.j=this.xa=this.za=null;ik.o.l.call(this)};function kk(a,b){a.za&&Ha(a.za,b,void 0)}m.removeChild=function(a,b){if(a){var c=p(a)?a:a.Ya||(a.Ya=":"+(a.Db.a++).toString(36));this.xa&&c?(a=this.xa,a=(null!==a&&c in a?a[c]:void 0)||null):a=null;if(c&&a){var d=this.xa;c in d&&delete d[c];Pa(this.za,
a);b&&(a.ua(),a.j&&oc(a.j));b=a;if(null==b)throw Error("Unable to set parent component");b.$=null;ik.o.Ua.call(b,null)}}if(!a)throw Error("Child is not in parent component");return a};function L(a,b){var c=qc(a,"firebaseui-textfield");b?(xj(a,"firebaseui-input-invalid"),wj(a,"firebaseui-input"),c&&xj(c,"firebaseui-textfield-invalid")):(xj(a,"firebaseui-input"),wj(a,"firebaseui-input-invalid"),c&&wj(c,"firebaseui-textfield-invalid"))}function lk(a,b,c){b=new Qj(b);yf(a,xa(zf,b));Oj(jk(a),b,"input",
c)}function mk(a,b,c){b=new Tj(b);yf(a,xa(zf,b));Oj(jk(a),b,"key",function(d){13==d.keyCode&&(d.stopPropagation(),d.preventDefault(),c(d))})}function nk(a,b,c){b=new Ij(b);yf(a,xa(zf,b));Oj(jk(a),b,"focusin",c)}function ok(a,b,c){b=new Ij(b);yf(a,xa(zf,b));Oj(jk(a),b,"focusout",c)}function M(a,b,c){b=new Ej(b);yf(a,xa(zf,b));Oj(jk(a),b,"action",function(d){d.stopPropagation();d.preventDefault();c(d)})}function pk(a){wj(a,"firebaseui-hidden")}function N(a,b){b&&pc(a,b);xj(a,"firebaseui-hidden")}function qk(a){return!vj(a,
"firebaseui-hidden")&&"none"!=a.style.display}function rk(a){a=a||{};var b=a.email,c=a.disabled,d='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="email">';d=a.hc?d+"Enter new email address":d+"Email";d+='</label><input type="email" name="email" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+qd(null!=b?b:"")+'"'+(c?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>';
return y(d)}function sk(a){a=a||{};a=a.label;var b='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';b=a?b+x(a):b+"Next";return y(b+"</button>")}function tk(){var a=""+sk({label:A("Sign In")});return y(a)}function uk(){var a=""+sk({label:A("Save")});return y(a)}function vk(){var a=""+sk({label:A("Continue")});return y(a)}function wk(a){a=a||{};a=a.label;var b='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="newPassword">';
b=a?b+x(a):b+"Choose password";return y(b+'</label><input type="password" name="newPassword" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}
function xk(){var a={};var b='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="password">';b=a.current?b+"Current password":b+"Password";return y(b+'</label><input type="password" name="password" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}
function yk(){return y('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function zk(a){a=a||{};a=a.label;var b='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';b=a?b+x(a):b+"Cancel";return y(b+"</button>")}function Ak(a){var b="";a.H&&a.G&&(b+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>');
return y(b)}function Bk(a){var b="";a.H&&a.G&&(b+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>');return y(b)}function Ck(a){a='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+
x(a.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>';return y(a)}Ck.B="firebaseui.auth.soy2.element.infoBar";function Dk(a){var b=a.content;a=a.rb;return y('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(a?" "+qd(a):"")+'">'+x(b)+"</dialog>")}function Ek(a){var b=a.message;return y(Dk({content:pd('<div class="firebaseui-dialog-icon-wrapper"><div class="'+qd(a.Ga)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+
x(b)+"</div>")}))}Ek.B="firebaseui.auth.soy2.element.progressDialog";function Fk(a){var b='<div class="firebaseui-list-box-actions">';a=a.items;for(var c=a.length,d=0;d<c;d++){var e=a[d];b+='<button type="button" data-listboxid="'+qd(e.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(e.Ga?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+qd(e.Ga)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+
x(e.label)+"</div></button>"}b=""+Dk({rb:A("firebaseui-list-box-dialog"),content:pd(b+"</div>")});return y(b)}Fk.B="firebaseui.auth.soy2.element.listBoxDialog";function Gk(a){a=a||{};return y(a.Ub?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}Gk.B="firebaseui.auth.soy2.element.busyIndicator";
function Hk(a){a=a||{};a=a.na;var b="";if(a.hb)b+=a.hb;else switch(a.providerId){case "google.com":b+="Google";break;case "github.com":b+="GitHub";break;case "facebook.com":b+="Facebook";break;case "twitter.com":b+="Twitter";break;case "anonymous":b+="Guest";break;default:b+="Password"}return z(b)}function Ik(a){Jk(a,"upgradeElement")}function Kk(a){Jk(a,"downgradeElements")}var Lk=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function Jk(a,b){a&&window.componentHandler&&
window.componentHandler[b]&&Ha(Lk,function(c){if(vj(a,c))window.componentHandler[b](a);Ha(ic(c,a),function(d){window.componentHandler[b](d)})})}function Mk(a,b,c){Nk.call(this);document.body.appendChild(a);a.showModal||window.dialogPolyfill.registerDialog(a);a.showModal();Ik(a);b&&M(this,a,function(f){var g=a.getBoundingClientRect();(f.clientX<g.left||g.left+g.width<f.clientX||f.clientY<g.top||g.top+g.height<f.clientY)&&Nk.call(this)});if(!c){var d=this.N().parentElement||this.N().parentNode;if(d){var e=
this;this.ca=function(){if(a.open){var f=a.getBoundingClientRect().height,g=d.getBoundingClientRect().height,h=d.getBoundingClientRect().top-document.body.getBoundingClientRect().top,k=d.getBoundingClientRect().left-document.body.getBoundingClientRect().left,l=a.getBoundingClientRect().width,v=d.getBoundingClientRect().width;a.style.top=(h+(g-f)/2).toString()+"px";f=k+(v-l)/2;a.style.left=f.toString()+"px";a.style.right=(document.body.getBoundingClientRect().width-f-l).toString()+"px"}else window.removeEventListener("resize",
e.ca)};this.ca();window.addEventListener("resize",this.ca,!1)}}}function Nk(){var a=Ok.call(this);a&&(Kk(a),a.open&&a.close(),oc(a),this.ca&&window.removeEventListener("resize",this.ca))}function Ok(){return kc("firebaseui-id-dialog")}function Pk(){oc(Qk.call(this))}function Qk(){return K(this,"firebaseui-id-info-bar")}function Rk(){return K(this,"firebaseui-id-dismiss-info-bar")}var Sk={zb:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",xb:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg",
ub:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg",Tb:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",Fb:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",Hb:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",ob:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png"};function Tk(a,b,c){Af.call(this,a,b);for(var d in c)this[d]=c[d]}t(Tk,Af);function O(a,b,c,d,e){ik.call(this,c);this.$a=a;this.Za=b;this.Aa=
!1;this.Ma=d||null;this.v=this.fa=null;this.aa=jb(Sk);lb(this.aa,e||{})}t(O,ik);m=O.prototype;m.eb=function(){var a=fd(this.$a,this.Za,this.aa,this.w);Ik(a);this.j=a};m.u=function(){O.o.u.call(this);bh(P(this),new Tk("pageEnter",P(this),{pageId:this.Ma}));if(this.Xa()&&this.aa.H){var a=this.aa.H;M(this,this.Xa(),function(){a()})}if(this.Wa()&&this.aa.G){var b=this.aa.G;M(this,this.Wa(),function(){b()})}};m.ua=function(){bh(P(this),new Tk("pageExit",P(this),{pageId:this.Ma}));O.o.ua.call(this)};m.l=
function(){window.clearTimeout(this.fa);this.Za=this.$a=this.fa=null;this.Aa=!1;this.v=null;Kk(this.N());O.o.l.call(this)};function Uk(a){a.Aa=!0;var b=vj(a.N(),"firebaseui-use-spinner");a.fa=window.setTimeout(function(){a.N()&&null===a.v&&(a.v=fd(Gk,{Ub:b},null,a.w),a.N().appendChild(a.v),Ik(a.v))},500)}m.M=function(a,b,c,d){function e(){if(f.O)return null;f.Aa=!1;window.clearTimeout(f.fa);f.fa=null;f.v&&(Kk(f.v),oc(f.v),f.v=null)}var f=this;if(f.Aa)return null;Uk(f);return a.apply(null,b).then(c,
d).then(e,e)};function P(a){return a.N().parentElement||a.N().parentNode}function Vk(a,b,c){mk(a,b,function(){c.focus()})}function Wk(a,b,c){mk(a,b,function(){c()})}r(O.prototype,{f:function(a){Pk.call(this);var b=fd(Ck,{message:a},null,this.w);this.N().appendChild(b);M(this,Rk.call(this),function(){oc(b)})},jc:Pk,mc:Qk,lc:Rk,X:function(a,b){a=fd(Ek,{Ga:a,message:b},null,this.w);Mk.call(this,a)},h:Nk,qb:Ok,oc:function(){return K(this,"firebaseui-tos")},Xa:function(){return K(this,"firebaseui-tos-link")},
Wa:function(){return K(this,"firebaseui-pp-link")},pc:function(){return K(this,"firebaseui-tos-list")}});function Xk(a,b,c){a=a||{};b=a.Qa;var d=a.ha;a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+rk(a)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+
(b?zk(null):"")+sk(null)+'</div></div><div class="firebaseui-card-footer">'+(d?Bk(c):Ak(c))+"</div></form></div>";return y(a)}Xk.B="firebaseui.auth.soy2.page.signIn";function Yk(a,b,c){a=a||{};b=a.ha;a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+rk(a)+xk()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+
yk()+'</div><div class="firebaseui-form-actions">'+tk()+'</div></div><div class="firebaseui-card-footer">'+(b?Bk(c):Ak(c))+"</div></form></div>";return y(a)}Yk.B="firebaseui.auth.soy2.page.passwordSignIn";function Zk(a,b,c){a=a||{};var d=a.Jb;b=a.Oa;var e=a.ha,f='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+
rk(a);d?(a=a||{},a=a.name,a='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="name">First &amp; last name</label><input type="text" name="name" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+qd(null!=a?a:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',
a=y(a)):a="";c=f+a+wk(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(b?zk(null):"")+uk()+'</div></div><div class="firebaseui-card-footer">'+(e?Bk(c):Ak(c))+"</div></form></div>";return y(c)}Zk.B="firebaseui.auth.soy2.page.passwordSignUp";function $k(a,b,c){a=a||{};b=a.Oa;a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+
rk(a)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(b?zk(null):"")+sk({label:A("Send")})+'</div></div><div class="firebaseui-card-footer">'+Ak(c)+"</div></form></div>";return y(a)}$k.B="firebaseui.auth.soy2.page.passwordRecovery";function al(a,b,c){b=a.T;var d="";a="Follow the instructions sent to <strong>"+(x(a.email)+"</strong> to recover your password");d+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+
a+'</p></div><div class="firebaseui-card-actions">';b&&(d+='<div class="firebaseui-form-actions">'+sk({label:A("Done")})+"</div>");d+='</div><div class="firebaseui-card-footer">'+Ak(c)+"</div></div>";return y(d)}al.B="firebaseui.auth.soy2.page.passwordRecoveryEmailSent";function bl(a,b,c){return y('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+Gk(null,null,c)+"</div></div>")}bl.B="firebaseui.auth.soy2.page.callback";
function cl(){return y('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}cl.B="firebaseui.auth.soy2.page.blank";function dl(a,b,c){b="";a="A sign-in email with additional instructions was sent to <strong>"+(x(a.email)+"</strong>. Check your email to complete sign-in.");var d=y('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>');b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+
a+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+d+'</div><div class="firebaseui-form-actions">'+zk({label:A("Back")})+'</div></div><div class="firebaseui-card-footer">'+Ak(c)+"</div></form></div>";return y(b)}dl.B="firebaseui.auth.soy2.page.emailLinkSignInSent";function el(a,b,c){a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+
y('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+zk({label:A("Back")})+'</div></div><div class="firebaseui-card-footer">'+Ak(c)+"</div></form></div>";return y(a)}el.B="firebaseui.auth.soy2.page.emailNotReceived";function fl(a,b,c){a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+
rk(a)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+zk(null)+sk(null)+'</div></div><div class="firebaseui-card-footer">'+Ak(c)+"</div></form></div>";return y(a)}fl.B="firebaseui.auth.soy2.page.emailLinkSignInConfirmation";function gl(){var a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+
zk({label:A("Dismiss")})+"</div></div></div>";return y(a)}gl.B="firebaseui.auth.soy2.page.differentDeviceError";function hl(){var a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+
zk({label:A("Dismiss")})+"</div></div></div>";return y(a)}hl.B="firebaseui.auth.soy2.page.anonymousUserMismatch";function il(a,b,c){b="";a="You\u2019ve already used <strong>"+(x(a.email)+"</strong> to sign in. Enter your password for that account.");b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+
a+"</p>"+xk()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+yk()+'</div><div class="firebaseui-form-actions">'+tk()+'</div></div><div class="firebaseui-card-footer">'+Ak(c)+"</div></form></div>";return y(b)}il.B="firebaseui.auth.soy2.page.passwordLinking";function jl(a,b,c){var d=a.email;b="";a=""+Hk(a);a=A(a);d="You\u2019ve already used <strong>"+(x(d)+("</strong>. You can connect your <strong>"+(x(a)+("</strong> account with <strong>"+(x(d)+"</strong> by signing in with email link below.")))));
a="For this flow to successfully connect your "+(x(a)+" account with this email, you have to open the link on the same device or browser.");b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+
d+'<p class="firebaseui-text firebaseui-text-justify">'+a+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+tk()+'</div></div><div class="firebaseui-card-footer">'+Ak(c)+"</div></form></div>";return y(b)}jl.B="firebaseui.auth.soy2.page.emailLinkSignInLinking";function kl(a,b,c){b="";var d=""+Hk(a);d=A(d);a="You originally intended to connect <strong>"+(x(d)+"</strong> to your email account but have opened the link on a different device where you are not signed in.");
d="If you still want to connect your <strong>"+(x(d)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.");b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+
a+'</p><p class="firebaseui-text firebaseui-text-justify">'+d+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+vk()+'</div></div><div class="firebaseui-card-footer">'+Ak(c)+"</div></form></div>";return y(b)}kl.B="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice";function ll(a,b,c){var d=a.email;b="";a=""+Hk(a);a=A(a);d="You\u2019ve already used <strong>"+(x(d)+("</strong>. Sign in with "+(x(a)+" to continue.")));b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+
d+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+sk({label:A("Sign in with "+a)})+'</div></div><div class="firebaseui-card-footer">'+Ak(c)+"</div></form></div>";return y(b)}ll.B="firebaseui.auth.soy2.page.federatedLinking";function ml(a,b,c){b="";a="To continue sign in with <strong>"+(x(a.email)+"</strong> on this device, you have to recover the password.");b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+
a+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+zk(null)+sk({label:A("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+Ak(c)+"</div></form></div>";return y(b)}ml.B="firebaseui.auth.soy2.page.unsupportedProvider";function nl(a){var b="",c='<p class="firebaseui-text">for <strong>'+(x(a.email)+"</strong></p>");b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+
c+wk(od(a))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uk()+"</div></div></form></div>";return y(b)}nl.B="firebaseui.auth.soy2.page.passwordReset";function ol(a){a=a||{};a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+
(a.T?'<div class="firebaseui-form-actions">'+vk()+"</div>":"")+"</div></div>";return y(a)}ol.B="firebaseui.auth.soy2.page.passwordResetSuccess";function pl(a){a=a||{};a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+
(a.T?'<div class="firebaseui-form-actions">'+sk(null)+"</div>":"")+"</div></div>";return y(a)}pl.B="firebaseui.auth.soy2.page.passwordResetFailure";function ql(a){var b=a.T,c="";a="Your sign-in email address has been changed back to <strong>"+(x(a.email)+"</strong>.");c+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+
a+'</p><p class="firebaseui-text">If you didn\u2019t ask to change your sign-in email, it\u2019s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(b?'<div class="firebaseui-form-actions">'+sk(null)+"</div>":"")+"</div></form></div>";return y(c)}ql.B="firebaseui.auth.soy2.page.emailChangeRevokeSuccess";function rl(a){a=
a||{};a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can\u2019t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+
(a.T?'<div class="firebaseui-form-actions">'+sk(null)+"</div>":"")+"</div></div>";return y(a)}rl.B="firebaseui.auth.soy2.page.emailChangeRevokeFailure";function sl(a){a=a||{};a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+
(a.T?'<div class="firebaseui-form-actions">'+vk()+"</div>":"")+"</div></div>";return y(a)}sl.B="firebaseui.auth.soy2.page.emailVerificationSuccess";function tl(a){a=a||{};a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+
(a.T?'<div class="firebaseui-form-actions">'+sk(null)+"</div>":"")+"</div></div>";return y(a)}tl.B="firebaseui.auth.soy2.page.emailVerificationFailure";function ul(a){a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+x(a.errorMessage)+"</p></div></div>";return y(a)}ul.B="firebaseui.auth.soy2.page.unrecoverableError";
function vl(a,b,c){var d=a.Gb;b="";a="Continue with "+(x(a.Vb)+"?");d="You originally wanted to sign in with "+x(d);b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+a+'</h2><p class="firebaseui-text">'+d+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+
zk(null)+sk({label:A("Continue")})+'</div></div><div class="firebaseui-card-footer">'+Ak(c)+"</div></form></div>";return y(b)}vl.B="firebaseui.auth.soy2.page.emailMismatch";function wl(a,b,c){var d='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';a=a.Ib;b=a.length;for(var e=0;e<b;e++){var f={na:a[e]};var g=c;f=f||{};var h=
f.na,k=f;k=k||{};var l="";switch(k.na.providerId){case "google.com":l+="firebaseui-idp-google";break;case "github.com":l+="firebaseui-idp-github";break;case "facebook.com":l+="firebaseui-idp-facebook";break;case "twitter.com":l+="firebaseui-idp-twitter";break;case "phone":l+="firebaseui-idp-phone";break;case "anonymous":l+="firebaseui-idp-anonymous";break;case "password":l+="firebaseui-idp-password";break;default:l+="firebaseui-idp-generic"}k='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+
qd(z(l))+' firebaseui-id-idp-button" data-provider-id="'+qd(h.providerId)+'" style="background-color:';l=h.pb;null!=l&&l.ea===cd?l=l.content:null==l?l="":l instanceof Vb?l instanceof Vb&&l.constructor===Vb&&l.f===Wb?l=l.a:(Fa("expected object of type SafeStyle, got '"+l+"' of type "+ma(l)),l="type_error:SafeStyle"):(l=String(l),Cd.test(l)||(Fa("Bad value `%s` for |filterCssValue",[l]),l="zSoyz"));k=k+qd(l)+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';
l=(l=f)||{};l=l.na;var v="";if(l.fb)v+=wd(l.fb);else switch(l.providerId){case "google.com":v+=wd(g.zb);break;case "github.com":v+=wd(g.xb);break;case "facebook.com":v+=wd(g.ub);break;case "twitter.com":v+=wd(g.Tb);break;case "phone":v+=wd(g.Hb);break;case "anonymous":v+=wd(g.ob);break;default:v+=wd(g.Fb)}g=nd(v);g=k+qd(wd(g))+'"></span>';"password"==h.providerId?g+='<span class="firebaseui-idp-text firebaseui-idp-text-long">Sign in with email</span><span class="firebaseui-idp-text firebaseui-idp-text-short">Email</span>':
"phone"==h.providerId?g+='<span class="firebaseui-idp-text firebaseui-idp-text-long">Sign in with phone</span><span class="firebaseui-idp-text firebaseui-idp-text-short">Phone</span>':"anonymous"==h.providerId?g+='<span class="firebaseui-idp-text firebaseui-idp-text-long">Continue as guest</span><span class="firebaseui-idp-text firebaseui-idp-text-short">Guest</span>':(h="Sign in with "+x(Hk(f)),g+='<span class="firebaseui-idp-text firebaseui-idp-text-long">'+h+'</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+
x(Hk(f))+"</span>");f=y(g+"</button>");d+='<li class="firebaseui-list-item">'+f+"</li>"}d+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+Bk(c)+"</div></div>";return y(d)}wl.B="firebaseui.auth.soy2.page.providerSignIn";function xl(a,b,c){a=a||{};var d=a.tb,e=a.Qa;b=a.ha;a=a||{};a=a.va;a='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="phoneNumber">Phone number</label><input type="tel" name="phoneNumber" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+
qd(null!=a?a:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>';a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+
y(a);var f;d?f=y('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):f="";f=a+f+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(e?zk(null):"")+sk({label:A("Verify")})+'</div></div><div class="firebaseui-card-footer">';b?(b='<p class="firebaseui-tos firebaseui-phone-tos">',
b=c.H&&c.G?b+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':b+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",c=y(b+"</p>")):c=y('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+
Ak(c);return y(f+c+"</div></form></div>")}xl.B="firebaseui.auth.soy2.page.phoneSignInStart";function yl(a,b,c){a=a||{};b=a.phoneNumber;var d="";a='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+(x(b)+"</a>");x(b);b=d;d=y('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="phoneConfirmationCode">6-digit code</label><input type="number" name="phoneConfirmationCode" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>');
c='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+a+"</p>"+d+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+zk(null)+sk({label:A("Continue")})+'</div></div><div class="firebaseui-card-footer">'+Ak(c)+"</div></form>";
a=y('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>');return y(b+(c+a+"</div>"))}yl.B="firebaseui.auth.soy2.page.phoneSignInFinish";function zl(){return K(this,"firebaseui-id-submit")}function Q(){return K(this,"firebaseui-id-secondary-link")}function Al(a,b){M(this,zl.call(this),function(d){a(d)});var c=Q.call(this);c&&b&&M(this,c,function(d){b(d)})}
function Bl(){return K(this,"firebaseui-id-password")}function Cl(){return K(this,"firebaseui-id-password-error")}function Dl(){var a=Bl.call(this),b=Cl.call(this);lk(this,a,function(){qk(b)&&(L(a,!0),pk(b))})}function El(){var a=Bl.call(this);var b=Cl.call(this);J(a)?(L(a,!0),pk(b),b=!0):(L(a,!1),N(b,z("Enter your password").toString()),b=!1);return b?J(a):null}function Fl(a,b,c,d,e,f){O.call(this,il,{email:a},f,"passwordLinking",{H:d,G:e});this.a=b;this.L=c}t(Fl,O);Fl.prototype.u=function(){this.R();
this.P(this.a,this.L);Wk(this,this.i(),this.a);this.i().focus();Fl.o.u.call(this)};Fl.prototype.l=function(){this.a=null;Fl.o.l.call(this)};Fl.prototype.J=function(){return J(K(this,"firebaseui-id-email"))};r(Fl.prototype,{i:Bl,D:Cl,R:Dl,A:El,ba:zl,da:Q,P:Al});var Gl=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function Hl(){return K(this,"firebaseui-id-email")}function Il(){return K(this,"firebaseui-id-email-error")}function Jl(a){var b=Hl.call(this),c=Il.call(this);
lk(this,b,function(){qk(c)&&(L(b,!0),pk(c))});a&&mk(this,b,function(){a()})}function Kl(){return Xa(J(Hl.call(this))||"")}function Ll(){var a=Hl.call(this);var b=Il.call(this);var c=J(a)||"";c?Gl.test(c)?(L(a,!0),pk(b),b=!0):(L(a,!1),N(b,z("That email address isn't correct").toString()),b=!1):(L(a,!1),N(b,z("Enter your email address to continue").toString()),b=!1);return b?Xa(J(a)):null}function Ml(a,b,c,d,e,f,g){O.call(this,Yk,{email:c,ha:!!f},g,"passwordSignIn",{H:d,G:e});this.a=a;this.L=b}t(Ml,
O);Ml.prototype.u=function(){this.R();this.ba();this.da(this.a,this.L);Vk(this,this.s(),this.i());Wk(this,this.i(),this.a);J(this.s())?this.i().focus():this.s().focus();Ml.o.u.call(this)};Ml.prototype.l=function(){this.L=this.a=null;Ml.o.l.call(this)};r(Ml.prototype,{s:Hl,U:Il,R:Jl,P:Kl,J:Ll,i:Bl,D:Cl,ba:Dl,A:El,sa:zl,ra:Q,da:Al});function R(a,b,c,d,e,f){O.call(this,a,b,d,e||"notice",f);this.a=c||null}t(R,O);R.prototype.u=function(){this.a&&(this.s(this.a),this.i().focus());R.o.u.call(this)};R.prototype.l=
function(){this.a=null;R.o.l.call(this)};r(R.prototype,{i:zl,A:Q,s:Al});function Nl(a,b,c,d,e){R.call(this,al,{email:a,T:!!b},b,e,"passwordRecoveryEmailSent",{H:c,G:d})}t(Nl,R);function Ol(a,b){R.call(this,sl,{T:!!a},a,b,"emailVerificationSuccess")}t(Ol,R);function Pl(a,b){R.call(this,tl,{T:!!a},a,b,"emailVerificationFailure")}t(Pl,R);function Ql(a,b){R.call(this,ol,{T:!!a},a,b,"passwordResetSuccess")}t(Ql,R);function Rl(a,b){R.call(this,pl,{T:!!a},a,b,"passwordResetFailure")}t(Rl,R);function Sl(a,
b){R.call(this,rl,{T:!!a},a,b,"emailChangeRevokeFailure")}t(Sl,R);function Tl(a,b){R.call(this,ul,{errorMessage:a},void 0,b,"unrecoverableError")}t(Tl,R);var Ul=!1,Vl=null;function Wl(a,b){Ul=!!b;Vl||("undefined"==typeof accountchooser&&tj()?(b=Nb(Jb(new Gb(Hb,"//www.gstatic.com/accountchooser/client.js"))),Vl=hf(B(qh(b)),function(){})):Vl=B());Vl.then(a,a)}function Xl(a,b){a=S(a);(a=Qg(a).accountChooserInvoked||null)?a(b):b()}function Yl(a,b,c){a=S(a);(a=Qg(a).accountChooserResult||null)?a(b,c):
c()}function Zl(a,b,c,d,e){d?(I("callback",a,b),Ul&&c()):Xl(a,function(){Si(new Kh(a.a.tenantId||null),T(a));aj(function(f){G(Bi,T(a));Yl(a,f?"empty":"unavailable",function(){I("signIn",a,b);(f||Ul)&&c()})},Mi(T(a)),e)})}function $l(a,b,c,d){function e(f){f=U(f);V(b,c,void 0,f);d()}Yl(b,"accountSelected",function(){Li(!1,T(b));var f=am(b);W(b,X(b).fetchSignInMethodsForEmail(a.a).then(function(g){bm(b,c,g,a.a,a.h||void 0,void 0,f);d()},e))})}function cm(a,b,c,d){Yl(b,a?"addAccount":"unavailable",function(){I("signIn",
b,c);(a||Ul)&&d()})}function dm(a,b,c,d){function e(){var f=a();f&&(f=Pg(S(f)))&&f()}Yi(function(){var f=a();f&&Zl(f,b,e,c,d)},function(f){var g=a();g&&$l(f,g,b,e)},function(f){var g=a();g&&cm(f,g,b,e)},a()&&lg(S(a())))}function em(a,b,c,d){function e(g){if(!g.name||"cancel"!=g.name){a:{var h=g.message;try{var k=((JSON.parse(h).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(k&&k.length){var l=!0;break a}}catch(v){}l=!1}if(l)g=P(b),b.m(),V(a,g,void 0,z("Your sign-in session has expired. Please try again.").toString());
else{l=g&&g.message||"";if(g.code){if("auth/email-already-in-use"==g.code||"auth/credential-already-in-use"==g.code)return;l=U(g)}b.f(l)}}}fm(a);if(d)return gm(a,c),B();if(!c.credential)throw Error("No credential found!");d=X(a).currentUser||c.user;if(!d)throw Error("User not logged in.");d=new Bh(d.email,d.displayName,d.photoURL,"password"==c.credential.providerId?null:c.credential.providerId);null!=Hi(Di,T(a))&&!Hi(Di,T(a))||Ni(d,T(a));G(Di,T(a));try{var f=hm(a,c)}catch(g){return Be(g.code||g.message,
g),b.f(g.code||g.message),B()}c=f.then(function(g){gm(a,g)},e).then(void 0,e);W(a,f);return B(c)}function gm(a,b){if(!b.user)throw Error("No user found");var c=Sg(S(a));Rg(S(a))&&c&&Ge("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked.");if(c){c=Sg(S(a));var d=Ji(T(a))||void 0;G(Ci,T(a));var e=!1;if(bg()){if(!c||c(b,d))e=!0,window.opener.location.assign(Qb(Tb(im(a,d))));c||window.close()}else if(!c||c(b,d))e=!0,ag(im(a,
d));e||a.reset()}else{c=b.user;b=b.credential;d=Rg(S(a));e=Ji(T(a))||void 0;G(Ci,T(a));var f=!1;if(bg()){if(!d||d(c,b,e))f=!0,window.opener.location.assign(Qb(Tb(im(a,e))));d||window.close()}else if(!d||d(c,b,e))f=!0,ag(im(a,e));f||a.reset()}}function im(a,b){a=b||S(a).a.get("signInSuccessUrl");if(!a)throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return a}function U(a){var b=
"";switch(a.code){case "auth/email-already-in-use":b+="The email address is already used by another account";break;case "auth/requires-recent-login":b+=Gd();break;case "auth/too-many-requests":b+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case "auth/user-cancelled":b+="Please authorize the required permissions to sign in to the application";break;case "auth/user-not-found":b+="That email address doesn't match an existing account";break;case "auth/user-token-expired":b+=
Gd();break;case "auth/weak-password":b+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case "auth/wrong-password":b+="The email and password you entered don't match";break;case "auth/network-request-failed":b+="A network error has occurred";break;case "auth/invalid-phone-number":b+=Dd();break;case "auth/invalid-verification-code":b+=z("Wrong code. Try again.");break;case "auth/code-expired":b+="This code is no longer valid";break;case "auth/expired-action-code":b+=
"This code has expired.";break;case "auth/invalid-action-code":b+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(b=z(b).toString())return b;try{return JSON.parse(a.message),Be("Internal error: "+a.message,void 0),Ed().toString()}catch(c){return a.message}}function jm(a,b,c){var d=de[b]&&firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"][de[b]]?new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"][de[b]]:0==b.indexOf("saml.")?new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].SAMLAuthProvider(b):new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].OAuthProvider(b);if(!d)throw Error("Invalid Firebase Auth provider!");
var e=Eg(S(a),b);if(d.addScope)for(var f=0;f<e.length;f++)d.addScope(e[f]);e=Fg(S(a),b)||{};c&&(b==firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.PROVIDER_ID?a="login_hint":b==firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GithubAuthProvider.PROVIDER_ID?a="login":a=(a=yg(S(a),b))&&a.Eb,a&&(e[a]=c));d.setCustomParameters&&d.setCustomParameters(e);return d}function km(a,b,c,d){function e(){Si(new Kh(a.a.tenantId||null),T(a));W(a,b.M(q(a.Rb,a),[k],function(){if("file:"===(window.location&&window.location.protocol))return W(a,lm(a).then(function(l){b.m();
G(Bi,T(a));I("callback",a,h,B(l))},f))},g))}function f(l){G(Bi,T(a));if(!l.name||"cancel"!=l.name)switch(l.code){case "auth/popup-blocked":e();break;case "auth/popup-closed-by-user":case "auth/cancelled-popup-request":break;case "auth/credential-already-in-use":break;case "auth/network-request-failed":case "auth/too-many-requests":case "auth/user-cancelled":b.f(U(l));break;default:b.m(),I("callback",a,h,ff(l))}}function g(l){G(Bi,T(a));l.name&&"cancel"==l.name||(Be("signInWithRedirect: "+l.code,void 0),
l=U(l),"blank"==b.Ma&&Ng(S(a))?(b.m(),I("providerSignIn",a,h,l)):b.f(l))}var h=P(b),k=jm(a,c,d);"redirect"==Og(S(a))?e():W(a,mm(a,k).then(function(l){b.m();I("callback",a,h,B(l))},f))}function nm(a,b){W(a,b.M(q(a.Nb,a),[],function(c){b.m();return em(a,b,c,!0)},function(c){c.name&&"cancel"==c.name||(Be("ContinueAsGuest: "+c.code,void 0),c=U(c),b.f(c))}))}function om(a,b,c){function d(f){var g=!1;f=b.M(q(a.Ob,a),[f],function(h){var k=P(b);b.m();I("callback",a,k,B(h));g=!0},function(h){if(!h.name||"cancel"!=
h.name)if(!h||"auth/credential-already-in-use"!=h.code)if(h&&"auth/email-already-in-use"==h.code&&h.email&&h.credential){var k=P(b);b.m();I("callback",a,k,ff(h))}else h=U(h),b.f(h)});W(a,f);return f.then(function(){return g},function(){return!1})}var e=Cg(S(a),c&&c.authMethod||null);if(c&&c.idToken&&e===firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.PROVIDER_ID)return Eg(S(a),firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.PROVIDER_ID).length?(km(a,b,e,c.id),c=B(!0)):c=d(firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.credential(c.idToken)),
c;c&&b.f(z("The selected credential for the authentication provider is not supported!").toString());return B(!1)}function pm(a,b){var c=b.J(),d=b.A();if(c)if(d){var e=firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.credential(c,d);W(a,b.M(q(a.Pb,a),[c,d],function(f){return em(a,b,{user:f.user,credential:e,operationType:f.operationType,additionalUserInfo:f.additionalUserInfo})},function(f){if(!f.name||"cancel"!=f.name)switch(f.code){case "auth/email-already-in-use":break;case "auth/email-exists":L(b.s(),!1);N(b.U(),
U(f));break;case "auth/too-many-requests":case "auth/wrong-password":L(b.i(),!1);N(b.D(),U(f));break;default:Be("verifyPassword: "+f.message,void 0),b.f(U(f))}}))}else b.i().focus();else b.s().focus()}function am(a){a=xg(S(a));return 1==a.length&&a[0]==firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.PROVIDER_ID}function qm(a){a=xg(S(a));return 1==a.length&&a[0]==firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].PhoneAuthProvider.PROVIDER_ID}function V(a,b,c,d){am(a)?d?I("signIn",a,b,c,d):rm(a,b,c):a&&qm(a)&&!d?I("phoneSignInStart",a,b):a&&Ng(S(a))&&
!d?I("federatedRedirect",a,b):I("providerSignIn",a,b,d)}function sm(a,b,c,d){var e=P(b);W(a,b.M(q(X(a).fetchSignInMethodsForEmail,X(a)),[c],function(f){Li(Bg(S(a))==ig,T(a));b.m();bm(a,e,f,c,void 0,d)},function(f){f=U(f);b.f(f)}))}function bm(a,b,c,d,e,f,g){c.length||Kg(S(a))?!c.length&&Kg(S(a))?I("sendEmailLinkForSignIn",a,b,d,function(){I("signIn",a,b)}):Oa(c,firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?I("passwordSignIn",a,b,d,g):1==c.length&&c[0]===firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?
I("sendEmailLinkForSignIn",a,b,d,function(){I("signIn",a,b)}):(c=be(c,xg(S(a))))?(Qi(new Ih(d),T(a)),I("federatedSignIn",a,b,d,c,f)):I("unsupportedProvider",a,b,d):I("passwordSignUp",a,b,d,e,void 0,g)}function tm(a,b,c,d,e,f){var g=P(b);W(a,b.M(q(a.wb,a),[c,f],function(){b.m();I("emailLinkSignInSent",a,g,c,d,f)},e))}function rm(a,b,c){Bg(S(a))==ig?Wl(function(){Wi?Xl(a,function(){Si(new Kh(a.a.tenantId||null),T(a));aj(function(d){G(Bi,T(a));Yl(a,d?"empty":"unavailable",function(){I("signIn",a,b,c)})},
Mi(T(a)),qg(S(a)))}):(Y(a),dm(um,b,!1,qg(S(a))))},!1):(Ul=!1,Xl(a,function(){Yl(a,"unavailable",function(){I("signIn",a,b,c)})}))}function vm(a){var b=eg();a=sg(S(a));b=Ec(b,a)||"";for(var c in mg)if(mg[c].toLowerCase()==b.toLowerCase())return mg[c];return"callback"}function wm(a){var b=eg();a=Md(S(a).a,"queryParameterForSignInSuccessUrl");return(b=Ec(b,a))?Qb(Tb(b)):null}function xm(){return Ec(eg(),"oobCode")}function ym(){var a=Ec(eg(),"continueUrl");return a?function(){ag(a)}:null}function zm(a,
b){var c=dg(b);switch(vm(a)){case "callback":(b=wm(a))&&Ki(b,T(a));a.gb()?I("callback",a,c):V(a,c);break;case "resetPassword":I("passwordReset",a,c,xm(),ym());break;case "recoverEmail":I("emailChangeRevocation",a,c,xm());break;case "verifyEmail":I("emailVerification",a,c,xm(),ym());break;case "signIn":I("emailLinkSignInCallback",a,c,eg());Am();break;case "select":if((b=wm(a))&&Ki(b,T(a)),Wi){V(a,c);break}else{Wl(function(){Y(a);dm(um,c,!0)},!0);return}default:throw Error("Unhandled widget operation.");
}(b=Pg(S(a)))&&b()}function Bm(a,b){O.call(this,hl,void 0,b,"anonymousUserMismatch");this.a=a}t(Bm,O);Bm.prototype.u=function(){var a=this;M(this,this.i(),function(){a.a()});this.i().focus();Bm.o.u.call(this)};Bm.prototype.l=function(){this.a=null;Bm.o.l.call(this)};r(Bm.prototype,{i:Q});H.anonymousUserMismatch=function(a,b){var c=new Bm(function(){c.m();V(a,b)});c.render(b);Z(a,c)};function Cm(a){O.call(this,bl,void 0,a,"callback")}t(Cm,O);Cm.prototype.M=function(a,b,c,d){return a.apply(null,b).then(c,
d)};function Dm(a,b,c){if(c.user){var d={user:c.user,credential:c.credential,operationType:c.operationType,additionalUserInfo:c.additionalUserInfo},e=Oi(T(a)),f=e&&e.f;if(f&&!Em(c.user,f))Fm(a,b,d);else{var g=e&&e.a;g?W(a,c.user.linkWithCredential(g).then(function(h){d={user:h.user,credential:g,operationType:h.operationType,additionalUserInfo:h.additionalUserInfo};Gm(a,b,d)},function(h){Hm(a,b,h)})):Gm(a,b,d)}}else c=P(b),b.m(),Pi(T(a)),V(a,c)}function Gm(a,b,c){Pi(T(a));em(a,b,c)}function Hm(a,b,
c){var d=P(b);Pi(T(a));c=U(c);b.m();V(a,d,void 0,c)}function Im(a,b,c,d){var e=P(b);W(a,X(a).fetchSignInMethodsForEmail(c).then(function(f){b.m();f.length?Oa(f,firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?I("passwordLinking",a,e,c):1==f.length&&f[0]===firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?I("emailLinkSignInLinking",a,e,c):(f=be(f,xg(S(a))))?I("federatedLinking",a,e,c,f,d):(Pi(T(a)),I("unsupportedProvider",a,e,c)):(Pi(T(a)),I("passwordRecovery",a,e,c,!1,Fd().toString()))},
function(f){Hm(a,b,f)}))}function Fm(a,b,c){var d=P(b);W(a,Jm(a).then(function(){b.m();I("emailMismatch",a,d,c)},function(e){e.name&&"cancel"==e.name||(e=U(e.code),b.f(e))}))}function Em(a,b){if(b==a.email)return!0;if(a.providerData)for(var c=0;c<a.providerData.length;c++)if(b==a.providerData[c].email)return!0;return!1}H.callback=function(a,b,c){var d=new Cm;d.render(b);Z(a,d);b=c||lm(a);W(a,b.then(function(e){Dm(a,d,e)},function(e){if(e&&("auth/account-exists-with-different-credential"==e.code||
"auth/email-already-in-use"==e.code)&&e.email&&e.credential)Qi(new Ih(e.email,e.credential),T(a)),Im(a,d,e.email);else if(e&&"auth/user-cancelled"==e.code){var f=Oi(T(a)),g=U(e);f&&f.a?Im(a,d,f.f,g):f?sm(a,d,f.f,g):Hm(a,d,e)}else e&&"auth/credential-already-in-use"==e.code||(e&&"auth/operation-not-supported-in-this-environment"==e.code&&am(a)?Dm(a,d,{user:null,credential:null}):Hm(a,d,e))}))};function Km(a,b){O.call(this,gl,void 0,b,"differentDeviceError");this.a=a}t(Km,O);Km.prototype.u=function(){var a=
this;M(this,this.i(),function(){a.a()});this.i().focus();Km.o.u.call(this)};Km.prototype.l=function(){this.a=null;Km.o.l.call(this)};r(Km.prototype,{i:Q});H.differentDeviceError=function(a,b){var c=new Km(function(){c.m();V(a,b)});c.render(b);Z(a,c)};function Lm(a,b,c,d){O.call(this,ql,{email:a,T:!!c},d,"emailChangeRevoke");this.i=b;this.a=c||null}t(Lm,O);Lm.prototype.u=function(){var a=this;M(this,K(this,"firebaseui-id-reset-password-link"),function(){a.i()});this.a&&(this.A(this.a),this.s().focus());
Lm.o.u.call(this)};Lm.prototype.l=function(){this.i=this.a=null;Lm.o.l.call(this)};r(Lm.prototype,{s:zl,D:Q,A:Al});function Mm(){return K(this,"firebaseui-id-new-password")}function Nm(){return K(this,"firebaseui-id-password-toggle")}function Om(){this.La=!this.La;var a=Nm.call(this),b=Mm.call(this);this.La?(b.type="text",wj(a,"firebaseui-input-toggle-off"),xj(a,"firebaseui-input-toggle-on")):(b.type="password",wj(a,"firebaseui-input-toggle-on"),xj(a,"firebaseui-input-toggle-off"));b.focus()}function Pm(){return K(this,
"firebaseui-id-new-password-error")}function Qm(){this.La=!1;var a=Mm.call(this);a.type="password";var b=Pm.call(this);lk(this,a,function(){qk(b)&&(L(a,!0),pk(b))});var c=Nm.call(this);wj(c,"firebaseui-input-toggle-on");xj(c,"firebaseui-input-toggle-off");nk(this,a,function(){wj(c,"firebaseui-input-toggle-focus");xj(c,"firebaseui-input-toggle-blur")});ok(this,a,function(){wj(c,"firebaseui-input-toggle-blur");xj(c,"firebaseui-input-toggle-focus")});M(this,c,q(Om,this))}function Rm(){var a=Mm.call(this);
var b=Pm.call(this);J(a)?(L(a,!0),pk(b),b=!0):(L(a,!1),N(b,z("Enter your password").toString()),b=!1);return b?J(a):null}function Sm(a,b,c){O.call(this,nl,{email:a},c,"passwordReset");this.a=b}t(Sm,O);Sm.prototype.u=function(){this.J();this.D(this.a);Wk(this,this.i(),this.a);this.i().focus();Sm.o.u.call(this)};Sm.prototype.l=function(){this.a=null;Sm.o.l.call(this)};r(Sm.prototype,{i:Mm,A:Pm,L:Nm,J:Qm,s:Rm,R:zl,P:Q,D:Al});function Tm(a,b,c,d,e){var f=c.s();f&&W(a,c.M(q(X(a).confirmPasswordReset,X(a)),
[d,f],function(){c.m();var g=new Ql(e);g.render(b);Z(a,g)},function(g){Um(a,b,c,g)}))}function Um(a,b,c,d){"auth/weak-password"==(d&&d.code)?(a=U(d),L(c.i(),!1),N(c.A(),a),c.i().focus()):(c&&c.m(),c=new Rl,c.render(b),Z(a,c))}function Vm(a,b,c){var d=new Lm(c,function(){W(a,d.M(q(X(a).sendPasswordResetEmail,X(a)),[c],function(){d.m();d=new Nl(c,void 0,C(S(a)),D(S(a)));d.render(b);Z(a,d)},function(){d.f(z("Unable to send password reset code to specified email").toString())}))});d.render(b);Z(a,d)}
H.passwordReset=function(a,b,c,d){W(a,X(a).verifyPasswordResetCode(c).then(function(e){var f=new Sm(e,function(){Tm(a,b,f,c,d)});f.render(b);Z(a,f)},function(){Um(a,b)}))};H.emailChangeRevocation=function(a,b,c){var d=null;W(a,X(a).checkActionCode(c).then(function(e){d=e.data.email;return X(a).applyActionCode(c)}).then(function(){Vm(a,b,d)},function(){var e=new Sl;e.render(b);Z(a,e)}))};H.emailVerification=function(a,b,c,d){W(a,X(a).applyActionCode(c).then(function(){var e=new Ol(d);e.render(b);Z(a,
e)},function(){var e=new Pl;e.render(b);Z(a,e)}))};function Wm(a,b){try{var c="number"==typeof a.selectionStart}catch(d){c=!1}c?(a.selectionStart=b,a.selectionEnd=b):w&&!Db("9")&&("textarea"==a.type&&(b=a.value.substring(0,b).replace(/(\r\n|\r|\n)/g,"\n").length),a=a.createTextRange(),a.collapse(!0),a.move("character",b),a.select())}function Xm(a,b,c,d,e,f){O.call(this,fl,{email:c},f,"emailLinkSignInConfirmation",{H:d,G:e});this.i=a;this.s=b}t(Xm,O);Xm.prototype.u=function(){this.D(this.i);this.J(this.i,
this.s);this.a().focus();Wm(this.a(),(this.a().value||"").length);Xm.o.u.call(this)};Xm.prototype.l=function(){this.s=this.i=null;Xm.o.l.call(this)};r(Xm.prototype,{a:Hl,P:Il,D:Jl,L:Kl,A:Ll,U:zl,R:Q,J:Al});H.emailLinkConfirmation=function(a,b,c,d,e,f){var g=new Xm(function(){var h=g.A();h?(g.m(),d(a,b,h,c)):g.a().focus()},function(){g.m();V(a,b,e||void 0)},e||void 0,C(S(a)),D(S(a)));g.render(b);Z(a,g);f&&g.f(f)};function Ym(a,b,c,d,e){O.call(this,kl,{na:a},e,"emailLinkSignInLinkingDifferentDevice",
{H:c,G:d});this.a=b}t(Ym,O);Ym.prototype.u=function(){this.s(this.a);this.i().focus();Ym.o.u.call(this)};Ym.prototype.l=function(){this.a=null;Ym.o.l.call(this)};r(Ym.prototype,{i:zl,s:Al});H.emailLinkNewDeviceLinking=function(a,b,c,d){var e=new Tg(c);c=e.a.a.get(E.PROVIDER_ID)||null;Xg(e,null);if(c){var f=new Ym(yg(S(a),c),function(){f.m();d(a,b,e.toString())},C(S(a)),D(S(a)));f.render(b);Z(a,f)}else V(a,b)};function Zm(a){O.call(this,cl,void 0,a,"blank")}t(Zm,O);function $m(a,b,c,d,e){var f=new Zm,
g=new Tg(c),h=g.a.a.get(E.Va)||"",k=g.a.a.get(E.Na)||"",l="1"===g.a.a.get(E.Ka),v=Wg(g),ya=g.a.a.get(E.PROVIDER_ID)||null;g=g.a.a.get(E.mb)||null;an(a,g);var sa=!Hi(Fi,T(a)),Da=d||Ti(k,T(a)),Ka=(d=Ui(k,T(a)))&&d.a;ya&&Ka&&Ka.providerId!==ya&&(Ka=null);f.render(b);Z(a,f);W(a,f.M(function(){var ba=B(null);ba=v&&sa||sa&&l?ff(Error("anonymous-user-not-found")):bn(a,c).then(function(ng){if(ya&&!Ka)throw Error("pending-credential-not-found");return ng});var ud=null;return ba.then(function(ng){ud=ng;return e?
null:X(a).checkActionCode(h)}).then(function(){return ud})},[],function(ba){Da?cn(a,f,Da,c,Ka,ba):l?(f.m(),I("differentDeviceError",a,b)):(f.m(),I("emailLinkConfirmation",a,b,c,dn))},function(ba){var ud=void 0;if(!ba||!ba.name||"cancel"!=ba.name)switch(f.m(),ba&&ba.message){case "anonymous-user-not-found":I("differentDeviceError",a,b);break;case "anonymous-user-mismatch":I("anonymousUserMismatch",a,b);break;case "pending-credential-not-found":I("emailLinkNewDeviceLinking",a,b,c,en);break;default:ba&&
(ud=U(ba)),V(a,b,void 0,ud)}}))}function dn(a,b,c,d){$m(a,b,d,c,!0)}function en(a,b,c){$m(a,b,c)}function cn(a,b,c,d,e,f){var g=P(b);b.X("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",z("Signing in...").toString());var h=null;e=(f?fn(a,f,c,d,e):gn(a,c,d,e)).then(function(k){G(Gi,T(a));G(Fi,T(a));b.h();b.X("firebaseui-icon-done",z("Signed in!").toString());h=setTimeout(function(){b.h();em(a,b,k,!0)},1E3);W(a,function(){b&&(b.h(),b.m());clearTimeout(h)})},
function(k){b.h();b.m();if(!k.name||"cancel"!=k.name){var l=U(k);"auth/email-already-in-use"==k.code||"auth/credential-already-in-use"==k.code?(G(Gi,T(a)),G(Fi,T(a))):"auth/invalid-email"==k.code?(l=z("The email provided does not match the current sign-in session.").toString(),I("emailLinkConfirmation",a,g,d,dn,null,l)):V(a,g,c,l)}});W(a,e)}H.emailLinkSignInCallback=$m;function hn(a,b,c,d,e,f){O.call(this,jl,{email:a,na:b},f,"emailLinkSignInLinking",{H:d,G:e});this.a=c}t(hn,O);hn.prototype.u=function(){this.s(this.a);
this.i().focus();hn.o.u.call(this)};hn.prototype.l=function(){this.a=null;hn.o.l.call(this)};r(hn.prototype,{i:zl,s:Al});function jn(a,b,c,d){var e=P(b);tm(a,b,c,function(){V(a,e,c)},function(f){if(!f.name||"cancel"!=f.name){var g=U(f);f&&"auth/network-request-failed"==f.code?b.f(g):(b.m(),V(a,e,c,g))}},d)}H.emailLinkSignInLinking=function(a,b,c){var d=Oi(T(a));Pi(T(a));if(d){var e=d.a.providerId,f=new hn(c,yg(S(a),e),function(){jn(a,f,c,d)},C(S(a)),D(S(a)));f.render(b);Z(a,f)}else V(a,b)};function kn(a,
b,c,d,e,f){O.call(this,dl,{email:a},f,"emailLinkSignInSent",{H:d,G:e});this.s=b;this.a=c}t(kn,O);kn.prototype.u=function(){var a=this;M(this,this.i(),function(){a.a()});M(this,K(this,"firebaseui-id-trouble-getting-email-link"),function(){a.s()});this.i().focus();kn.o.u.call(this)};kn.prototype.l=function(){this.a=this.s=null;kn.o.l.call(this)};r(kn.prototype,{i:Q});H.emailLinkSignInSent=function(a,b,c,d,e){var f=new kn(c,function(){f.m();I("emailNotReceived",a,b,c,d,e)},function(){f.m();d()},C(S(a)),
D(S(a)));f.render(b);Z(a,f)};function ln(a,b,c,d,e,f,g){O.call(this,vl,{Vb:a,Gb:b},g,"emailMismatch",{H:e,G:f});this.s=c;this.i=d}t(ln,O);ln.prototype.u=function(){this.D(this.s,this.i);this.A().focus();ln.o.u.call(this)};ln.prototype.l=function(){this.i=this.a=null;ln.o.l.call(this)};r(ln.prototype,{A:zl,J:Q,D:Al});H.emailMismatch=function(a,b,c){var d=Oi(T(a));if(d){var e=new ln(c.user.email,d.f,function(){var f=e;Pi(T(a));em(a,f,c)},function(){var f=c.credential.providerId,g=P(e);e.m();d.a?I("federatedLinking",
a,g,d.f,f):I("federatedSignIn",a,g,d.f,f)},C(S(a)),D(S(a)));e.render(b);Z(a,e)}else V(a,b)};function mn(a,b,c,d,e){O.call(this,el,void 0,e,"emailNotReceived",{H:c,G:d});this.i=a;this.a=b}t(mn,O);mn.prototype.u=function(){var a=this;M(this,this.s(),function(){a.a()});M(this,this.ya(),function(){a.i()});this.s().focus();mn.o.u.call(this)};mn.prototype.ya=function(){return K(this,"firebaseui-id-resend-email-link")};mn.prototype.l=function(){this.a=this.i=null;mn.o.l.call(this)};r(mn.prototype,{s:Q});
H.emailNotReceived=function(a,b,c,d,e){var f=new mn(function(){tm(a,f,c,d,function(g){g=U(g);f.f(g)},e)},function(){f.m();V(a,b,c)},C(S(a)),D(S(a)));f.render(b);Z(a,f)};function nn(a,b,c,d,e,f){O.call(this,ll,{email:a,na:b},f,"federatedLinking",{H:d,G:e});this.a=c}t(nn,O);nn.prototype.u=function(){this.s(this.a);this.i().focus();nn.o.u.call(this)};nn.prototype.l=function(){this.a=null;nn.o.l.call(this)};r(nn.prototype,{i:zl,s:Al});H.federatedLinking=function(a,b,c,d,e){var f=Oi(T(a));if(f&&f.a){var g=
new nn(c,yg(S(a),d),function(){km(a,g,d,c)},C(S(a)),D(S(a)));g.render(b);Z(a,g);e&&g.f(e)}else V(a,b)};H.federatedRedirect=function(a,b){var c=new Zm;c.render(b);Z(a,c);b=xg(S(a))[0];km(a,c,b)};H.federatedSignIn=function(a,b,c,d,e){var f=new nn(c,yg(S(a),d),function(){km(a,f,d,c)},C(S(a)),D(S(a)));f.render(b);Z(a,f);e&&f.f(e)};function on(a,b,c,d){var e=b.A();e?W(a,b.M(q(a.Lb,a),[c,e],function(f){f=f.user.linkWithCredential(d).then(function(g){return em(a,b,{user:g.user,credential:d,operationType:g.operationType,
additionalUserInfo:g.additionalUserInfo})});W(a,f);return f},function(f){if(!f.name||"cancel"!=f.name)switch(f.code){case "auth/wrong-password":L(b.i(),!1);N(b.D(),U(f));break;case "auth/too-many-requests":b.f(U(f));break;default:Be("signInWithEmailAndPassword: "+f.message,void 0),b.f(U(f))}})):b.i().focus()}H.passwordLinking=function(a,b,c){var d=Oi(T(a));Pi(T(a));var e=d&&d.a;if(e){var f=new Fl(c,function(){on(a,f,c,e)},function(){f.m();I("passwordRecovery",a,b,c)},C(S(a)),D(S(a)));f.render(b);
Z(a,f)}else V(a,b)};function pn(a,b,c,d,e,f){O.call(this,$k,{email:c,Oa:!!b},f,"passwordRecovery",{H:d,G:e});this.a=a;this.s=b}t(pn,O);pn.prototype.u=function(){this.J();this.L(this.a,this.s);J(this.i())||this.i().focus();Wk(this,this.i(),this.a);pn.o.u.call(this)};pn.prototype.l=function(){this.s=this.a=null;pn.o.l.call(this)};r(pn.prototype,{i:Hl,D:Il,J:Jl,P:Kl,A:Ll,U:zl,R:Q,L:Al});function qn(a,b){var c=b.A();if(c){var d=P(b);W(a,b.M(q(X(a).sendPasswordResetEmail,X(a)),[c],function(){b.m();var e=
new Nl(c,function(){e.m();V(a,d)},C(S(a)),D(S(a)));e.render(d);Z(a,e)},function(e){L(b.i(),!1);N(b.D(),U(e))}))}else b.i().focus()}H.passwordRecovery=function(a,b,c,d,e){var f=new pn(function(){qn(a,f)},d?void 0:function(){f.m();V(a,b)},c,C(S(a)),D(S(a)));f.render(b);Z(a,f);e&&f.f(e)};H.passwordSignIn=function(a,b,c,d){var e=new Ml(function(){pm(a,e)},function(){var f=e.P();e.m();I("passwordRecovery",a,b,f)},c,C(S(a)),D(S(a)),d);e.render(b);Z(a,e)};function rn(){return K(this,"firebaseui-id-name")}
function sn(){return K(this,"firebaseui-id-name-error")}function tn(a,b,c,d,e,f,g,h,k){O.call(this,Zk,{email:d,Jb:a,name:e,Oa:!!c,ha:!!h},k,"passwordSignUp",{H:f,G:g});this.a=b;this.J=c;this.D=a}t(tn,O);tn.prototype.u=function(){this.ba();this.D&&this.Ra();this.sa();this.ra(this.a,this.J);this.D?(Vk(this,this.i(),this.A()),Vk(this,this.A(),this.s())):Vk(this,this.i(),this.s());this.a&&Wk(this,this.s(),this.a);J(this.i())?this.D&&!J(this.A())?this.A().focus():this.s().focus():this.i().focus();tn.o.u.call(this)};
tn.prototype.l=function(){this.J=this.a=null;tn.o.l.call(this)};r(tn.prototype,{i:Hl,U:Il,ba:Jl,bb:Kl,P:Ll,A:rn,nc:sn,Ra:function(){var a=rn.call(this),b=sn.call(this);lk(this,a,function(){qk(b)&&(L(a,!0),pk(b))})},L:function(){var a=rn.call(this);var b=sn.call(this);var c=J(a);c=!/^[\s\xa0]*$/.test(null==c?"":String(c));L(a,c);c?(pk(b),b=!0):(N(b,z("Enter your account name").toString()),b=!1);return b?Xa(J(a)):null},s:Mm,da:Pm,Ab:Nm,sa:Qm,R:Rm,kc:zl,Cb:Q,ra:Al});function un(a,b){var c=Jg(S(a)),d=
b.P(),e=null;c&&(e=b.L());var f=b.R();if(d){if(c)if(e)e=nb(e);else{b.A().focus();return}if(f){var g=firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.credential(d,f);W(a,b.M(q(a.Mb,a),[d,f],function(h){var k={user:h.user,credential:g,operationType:h.operationType,additionalUserInfo:h.additionalUserInfo};return c?(h=h.user.updateProfile({displayName:e}).then(function(){return em(a,b,k)}),W(a,h),h):em(a,b,k)},function(h){if(!h.name||"cancel"!=h.name){var k=U(h);switch(h.code){case "auth/email-already-in-use":return vn(a,
b,d,h);case "auth/too-many-requests":k=z("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case "auth/operation-not-allowed":case "auth/weak-password":L(b.s(),!1);N(b.da(),k);break;default:h="setAccountInfo: "+hi(h),Be(h,void 0),b.f(k)}}}))}else b.s().focus()}else b.i().focus()}function vn(a,b,c,d){function e(){var g=U(d);L(b.i(),!1);N(b.U(),g);b.i().focus()}var f=X(a).fetchSignInMethodsForEmail(c).then(function(g){g.length?e():(g=P(b),b.m(),I("passwordRecovery",
a,g,c,!1,Fd().toString()))},function(){e()});W(a,f);return f}H.passwordSignUp=function(a,b,c,d,e,f){function g(){h.m();V(a,b)}var h=new tn(Jg(S(a)),function(){un(a,h)},e?void 0:g,c,d,C(S(a)),D(S(a)),f);h.render(b);Z(a,h)};function wn(){return K(this,"firebaseui-id-phone-confirmation-code")}function xn(){return K(this,"firebaseui-id-phone-confirmation-code-error")}function yn(){return K(this,"firebaseui-id-resend-countdown")}function zn(a,b,c,d,e,f,g,h,k){O.call(this,yl,{phoneNumber:e},k,"phoneSignInFinish",
{H:g,G:h});this.Ra=f;this.i=new Jj(1E3);this.D=f;this.P=a;this.a=b;this.J=c;this.L=d}t(zn,O);zn.prototype.u=function(){var a=this;this.R(this.Ra);Nf(this.i,"tick",this.A,!1,this);this.i.start();M(this,K(this,"firebaseui-id-change-phone-number-link"),function(){a.P()});M(this,this.ya(),function(){a.L()});this.sa(this.a);this.da(this.a,this.J);this.s().focus();zn.o.u.call(this)};zn.prototype.l=function(){this.L=this.J=this.a=this.P=null;Kj(this.i);Vf(this.i,"tick",this.A);this.i=null;zn.o.l.call(this)};
zn.prototype.A=function(){--this.D;0<this.D?this.R(this.D):(Kj(this.i),Vf(this.i,"tick",this.A),this.ra(),this.bb())};r(zn.prototype,{s:wn,ba:xn,sa:function(a){var b=wn.call(this),c=xn.call(this);lk(this,b,function(){qk(c)&&(L(b,!0),pk(c))});a&&mk(this,b,function(){a()})},U:function(){var a=Xa(J(wn.call(this))||"");return/^\d{6}$/.test(a)?a:null},sb:yn,R:function(a){pc(yn.call(this),z("Resend code in "+((9<a?"0:":"0:0")+a)).toString())},ra:function(){pk(this.sb())},ya:function(){return K(this,"firebaseui-id-resend-link")},
bb:function(){N(this.ya())},Cb:zl,Ab:Q,da:Al});function An(a,b,c,d){function e(g){b.s().focus();L(b.s(),!1);N(b.ba(),g)}var f=b.U();f?(b.X("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",z("Verifying...").toString()),W(a,b.M(q(d.confirm,d),[f],function(g){b.h();b.X("firebaseui-icon-done",z("Verified!").toString());var h=setTimeout(function(){b.h();b.m();var k={user:Bn(a).currentUser,credential:null,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo};
em(a,b,k,!0)},1E3);W(a,function(){b&&b.h();clearTimeout(h)})},function(g){if(g.name&&"cancel"==g.name)b.h();else{var h=U(g);switch(g.code){case "auth/credential-already-in-use":b.h();break;case "auth/code-expired":g=P(b);b.h();b.m();I("phoneSignInStart",a,g,c,h);break;case "auth/missing-verification-code":case "auth/invalid-verification-code":b.h();e(h);break;default:b.h(),b.f(h)}}}))):e(z("Wrong code. Try again.").toString())}H.phoneSignInFinish=function(a,b,c,d,e,f){var g=new zn(function(){g.m();
I("phoneSignInStart",a,b,c)},function(){An(a,g,c,e)},function(){g.m();V(a,b)},function(){g.m();I("phoneSignInStart",a,b,c)},ae(c),d,C(S(a)),D(S(a)));g.render(b);Z(a,g);f&&g.f(f)};var Cn=!w&&!(u("Safari")&&!(mb()||u("Coast")||u("Opera")||u("Edge")||u("Firefox")||u("FxiOS")||u("Silk")||u("Android")));function Dn(a,b){if(/-[a-z]/.test(b))return null;if(Cn&&a.dataset){if(!(!u("Android")||mb()||u("Firefox")||u("FxiOS")||u("Opera")||u("Silk")||b in a.dataset))return null;a=a.dataset[b];return void 0===
a?null:a}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}function En(a,b,c){var d=this;a=fd(Fk,{items:a},null,this.w);Mk.call(this,a,!0,!0);c&&(c=Fn(a,c))&&(c.focus(),dk(c,a));M(this,a,function(e){if(e=(e=qc(e.target,"firebaseui-id-list-box-dialog-button"))&&Dn(e,"listboxid"))Nk.call(d),b(e)})}function Fn(a,b){a=(a||document).getElementsByTagName("BUTTON");for(var c=0;c<a.length;c++)if(Dn(a[c],"listboxid")===b)return a[c];return null}function Gn(){return K(this,"firebaseui-id-phone-number")}
function Hn(){return K(this,"firebaseui-id-country-selector")}function In(){return K(this,"firebaseui-id-phone-number-error")}function Jn(a,b){var c=a.a,d=Kn("1-US-0",c),e=null;b&&Kn(b,c)?e=b:d?e="1-US-0":e=0<c.length?c[0].c:null;if(!e)throw Error("No available default country");Ln.call(this,e,a)}function Kn(a,b){a=Td(a);return!(!a||!Oa(b,a))}function Mn(a){return La(a,function(b){return{id:b.c,Ga:"firebaseui-flag "+Nn(b),label:b.name+" "+("\u200e+"+b.b)}})}function Nn(a){return"firebaseui-flag-"+
a.g}function On(a){var b=this;En.call(this,Mn(a.a),function(c){Ln.call(b,c,a,!0);b.K().focus()},this.wa)}function Ln(a,b,c){var d=Td(a);d&&(c&&(c=Xa(J(Gn.call(this))||""),b=Sd(b,c),b.length&&b[0].b!=d.b&&(c="+"+d.b+c.substr(b[0].b.length+1),yj(Gn.call(this),c))),b=Td(this.wa),this.wa=a,a=K(this,"firebaseui-id-country-selector-flag"),b&&xj(a,Nn(b)),wj(a,Nn(d)),pc(K(this,"firebaseui-id-country-selector-code"),"\u200e+"+d.b))}function Pn(a,b,c,d,e,f,g,h,k,l){O.call(this,xl,{tb:b,va:k||null,Qa:!!c,ha:!!f},
l,"phoneSignInStart",{H:d,G:e});this.J=h||null;this.L=b;this.a=a;this.A=c||null;this.ba=g||null}t(Pn,O);Pn.prototype.u=function(){this.da(this.ba,this.J);this.P(this.a,this.A||void 0);this.L||Vk(this,this.K(),this.i());Wk(this,this.i(),this.a);this.K().focus();Wm(this.K(),(this.K().value||"").length);Pn.o.u.call(this)};Pn.prototype.l=function(){this.A=this.a=null;Pn.o.l.call(this)};r(Pn.prototype,{qb:Ok,K:Gn,D:In,da:function(a,b,c){var d=this,e=Gn.call(this),f=Hn.call(this),g=In.call(this),h=a||Yd,
k=h.a;if(0==k.length)throw Error("No available countries provided.");Jn.call(d,h,b);M(this,f,function(){On.call(d,h)});lk(this,e,function(){qk(g)&&(L(e,!0),pk(g));var l=Xa(J(e)||""),v=Td(this.wa),ya=Sd(h,l);l=Kn("1-US-0",k);ya.length&&ya[0].b!=v.b&&(v=ya[0],Ln.call(d,"1"==v.b&&l?"1-US-0":v.c,h))});c&&mk(this,e,function(){c()})},R:function(a){var b=Xa(J(Gn.call(this))||"");a=a||Yd;var c=a.a,d=Sd(Yd,b);if(d.length&&!Oa(c,d[0]))throw yj(Gn.call(this)),Gn.call(this).focus(),N(In.call(this),z("The country code provided is not supported.").toString()),
Error("The country code provided is not supported.");c=Td(this.wa);d.length&&d[0].b!=c.b&&Ln.call(this,d[0].c,a);d.length&&(b=b.substr(d[0].b.length+1));return b?new Zd(this.wa,b):null},sa:Hn,U:function(){return K(this,"firebaseui-recaptcha-container")},s:function(){return K(this,"firebaseui-id-recaptcha-error")},i:zl,ra:Q,P:Al});function Qn(a,b,c,d){try{var e=b.R(ej)}catch(f){return}e?cj?(b.X("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",
z("Verifying...").toString()),W(a,b.M(q(a.Qb,a),[ae(e),c],function(f){var g=P(b);b.X("firebaseui-icon-done",z("Code sent!").toString());var h=setTimeout(function(){b.h();b.m();I("phoneSignInFinish",a,g,e,15,f)},1E3);W(a,function(){b&&b.h();clearTimeout(h)})},function(f){b.h();if(!f.name||"cancel"!=f.name){grecaptcha.reset(fj);cj=null;var g=f&&f.message||"";if(f.code)switch(f.code){case "auth/too-many-requests":g=z("This phone number has been used too many times").toString();break;case "auth/invalid-phone-number":case "auth/missing-phone-number":b.K().focus();
N(b.D(),Dd().toString());return;default:g=U(f)}b.f(g)}}))):dj?N(b.s(),z("Solve the reCAPTCHA").toString()):!dj&&d&&b.i().click():(b.K().focus(),N(b.D(),Dd().toString()))}H.phoneSignInStart=function(a,b,c,d){var e=Dg(S(a))||{};cj=null;dj=!(e&&"invisible"===e.size);var f=qm(a),g=Hg(S(a)),h=f?Gg(S(a)):null;g=c&&c.a||g&&g.c||null;c=c&&c.va||h;(h=Ig(S(a)))&&Xd(h);ej=h?new Rd(Ig(S(a))):Yd;var k=new Pn(function(v){Qn(a,k,l,!(!v||!v.keyCode))},dj,f?null:function(){l.clear();k.m();V(a,b)},C(S(a)),D(S(a)),
f,ej,g,c);k.render(b);Z(a,k);d&&k.f(d);e.callback=function(v){k.s()&&pk(k.s());cj=v;dj||Qn(a,k,l)};e["expired-callback"]=function(){cj=null};var l=new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].RecaptchaVerifier(dj?k.U():k.i(),e,Bn(a).app);W(a,k.M(q(l.render,l),[],function(v){fj=v},function(v){v.name&&"cancel"==v.name||(v=U(v),k.m(),V(a,b,void 0,v))}))};function Rn(a,b,c,d,e){O.call(this,wl,{Ib:b},e,"providerSignIn",{H:c,G:d});this.a=a}t(Rn,O);Rn.prototype.u=function(){this.i(this.a);Rn.o.u.call(this)};Rn.prototype.l=function(){this.a=
null;Rn.o.l.call(this)};r(Rn.prototype,{i:function(a){function b(g){a(g)}for(var c=this.j?ic("firebaseui-id-idp-button",this.j||this.w.a):[],d=0;d<c.length;d++){var e=c[d],f=Dn(e,"providerId");M(this,e,xa(b,f))}}});H.providerSignIn=function(a,b,c){var d=new Rn(function(e){e==firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.PROVIDER_ID?(d.m(),rm(a,b)):e==firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].PhoneAuthProvider.PROVIDER_ID?(d.m(),I("phoneSignInStart",a,b)):"anonymous"==e?nm(a,d):km(a,d,e);Y(a);a.O.cancel()},zg(S(a)),C(S(a)),D(S(a)));d.render(b);
Z(a,d);c&&d.f(c);Sn(a)};H.sendEmailLinkForSignIn=function(a,b,c,d){var e=new Cm;e.render(b);Z(a,e);tm(a,e,c,d,function(f){e.m();f=U(f);I("signIn",a,b,c,f)})};function Tn(a,b,c,d,e,f,g){O.call(this,Xk,{email:c,Qa:!!b,ha:!!f},g,"signIn",{H:d,G:e});this.a=a;this.s=b}t(Tn,O);Tn.prototype.u=function(){this.D(this.a);this.J(this.a,this.s||void 0);this.i().focus();Wm(this.i(),(this.i().value||"").length);Tn.o.u.call(this)};Tn.prototype.l=function(){this.s=this.a=null;Tn.o.l.call(this)};r(Tn.prototype,{i:Hl,
P:Il,D:Jl,L:Kl,A:Ll,U:zl,R:Q,J:Al});H.signIn=function(a,b,c,d){var e=am(a),f=e&&Bg(S(a))!=ig,g=new Tn(function(){var h=g,k=h.A()||"";k&&sm(a,h,k)},f?null:function(){g.m();V(a,b,c)},c,C(S(a)),D(S(a)),e);g.render(b);Z(a,g);d&&g.f(d)};function Un(a,b,c,d,e,f){O.call(this,ml,{email:a},f,"unsupportedProvider",{H:d,G:e});this.a=b;this.i=c}t(Un,O);Un.prototype.u=function(){this.A(this.a,this.i);this.s().focus();Un.o.u.call(this)};Un.prototype.l=function(){this.i=this.a=null;Un.o.l.call(this)};r(Un.prototype,
{s:zl,D:Q,A:Al});H.unsupportedProvider=function(a,b,c){var d=new Un(c,function(){d.m();I("passwordRecovery",a,b,c)},function(){d.m();V(a,b,c)},C(S(a)),D(S(a)));d.render(b);Z(a,d)};function Vn(a,b){this.aa=!1;var c=Wn(b);if(Xn[c])throw Error('An AuthUI instance already exists for the key "'+c+'"');Xn[c]=this;this.f=a;this.A=null;this.s=!1;Yn(this.f);this.a=firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]({apiKey:a.app.options.apiKey,authDomain:a.app.options.authDomain},a.app.name+"-firebaseui-temp").auth();Yn(this.a);this.a.setPersistence&&
this.a.setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].Auth.Persistence.SESSION);this.fa=b;this.X=new hg;this.h=this.K=this.v=this.F=null;this.i=[];this.$=!1;this.O=wh.Sa();this.j=this.C=null;this.ca=this.w=!1}function Yn(a){a&&a.INTERNAL&&a.INTERNAL.logFramework&&a.INTERNAL.logFramework("FirebaseUI-web")}var Xn={};function Wn(a){return a||"[DEFAULT]"}function lm(a){Y(a);a.v||(a.v=Zn(a,function(b){return b&&!Oi(T(a))?B(Bn(a).getRedirectResult().then(function(c){return c},function(c){if(c&&"auth/email-already-in-use"==
c.code&&c.email&&c.credential)throw c;return $n(a,c)})):B(X(a).getRedirectResult().then(function(c){return tg(S(a))&&!c.user&&a.j&&!a.j.isAnonymous?Bn(a).getRedirectResult():c}))}));return a.v}function Z(a,b){Y(a);a.h=b}var ao=null;function um(){return ao}function X(a){Y(a);return a.a}function Bn(a){Y(a);return a.f}function T(a){Y(a);return a.fa}m=Vn.prototype;m.gb=function(){Y(this);return!!Ri(T(this))||bo(eg())};function bo(a){a=new Tg(a);return"signIn"===(a.a.a.get(E.lb)||null)&&!!a.a.a.get(E.Va)}
m.start=function(a,b){Y(this);var c=this;"undefined"!==typeof this.f.languageCode&&(this.A=this.f.languageCode);var d="en".replace(/_/g,"-");this.f.languageCode=d;this.a.languageCode=d;this.s=!0;"undefined"!==typeof this.f.tenantId&&(this.a.tenantId=this.f.tenantId);this.cb(b);var e=n.document;this.C?this.C.then(function(){"complete"==e.readyState?co(c,a):Of(window,"load",function(){co(c,a)})}):"complete"==e.readyState?co(c,a):Of(window,"load",function(){co(c,a)})};function co(a,b){var c=dg(b);c.setAttribute("lang",
"en".replace(/_/g,"-"));if(ao){var d=ao;Y(d);Oi(T(d))&&Ge("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset.");ao.reset()}ao=a;a.K=c;eo(a,c);qi(new ri)&&qi(new si)?zm(a,b):(b=dg(b),c=new Tl(z("The browser you are using does not support Web Storage. Please try again in a different browser.").toString()),c.render(b),Z(a,c));Ri(T(a))&&(b=Ri(T(a)),an(a,b.a),G(Bi,T(a)))}
function Zn(a,b){if(a.w)return b(fo(a));W(a,function(){a.w=!1});if(tg(S(a))){var c=new Xe(function(d){W(a,a.f.onAuthStateChanged(function(e){a.j=e;a.w||(a.w=!0,d(b(fo(a))))}))});W(a,c);return c}a.w=!0;return b(null)}function fo(a){Y(a);return tg(S(a))&&a.j&&a.j.isAnonymous?a.j:null}function W(a,b){Y(a);if(b){a.i.push(b);var c=function(){Sa(a.i,function(d){return d==b})};"function"!=typeof b&&b.then(c,c)}}m.disableAutoSignIn=function(){Y(this);this.$=!0};function go(a){Y(a);var b;(b=a.$)||(a=S(a),
a=Fg(a,firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.PROVIDER_ID),b=!(!a||"select_account"!==a.prompt));return b}function fm(a){"undefined"!==typeof a.f.languageCode&&a.s&&(a.s=!1,a.f.languageCode=a.A)}function an(a,b){a.f.tenantId=b;a.a.tenantId=b}m.reset=function(){Y(this);var a=this;this.K&&this.K.removeAttribute("lang");this.F&&dh(this.F);fm(this);Am();G(Bi,T(this));Y(this);this.O.cancel();this.v=B({user:null,credential:null});ao==this&&(ao=null);this.K=null;for(var b=0;b<this.i.length;b++)if("function"==
typeof this.i[b])this.i[b]();else this.i[b].cancel&&this.i[b].cancel();this.i=[];Pi(T(this));this.h&&(this.h.m(),this.h=null);this.I=null;this.a&&(this.C=Jm(this).then(function(){a.C=null},function(){a.C=null}))};function eo(a,b){a.I=null;a.F=new eh(b);a.F.register();Nf(a.F,"pageEnter",function(c){c=c&&c.pageId;if(a.I!=c){var d=S(a);(d=Qg(d).uiChanged||null)&&d(a.I,c);a.I=c}})}m.cb=function(a){Y(this);var b=this.X,c;for(c in a)try{Ld(b.a,c,a[c])}catch(d){Be('Invalid config: "'+c+'"',void 0)}wb&&Ld(b.a,
"popupMode",!1);Ig(b);!this.ca&&Rg(S(this))&&(Ge("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.ca=!0)};function S(a){Y(a);return a.X}m.Kb=function(){Y(this);var a=S(this),b=Md(a.a,"widgetUrl");var c=rg(a,b);S(this).a.get("popupMode")?(a=(window.screen.availHeight-600)/2,b=(window.screen.availWidth-500)/2,c=c||"about:blank",a={width:500,height:600,top:0<a?a:0,left:0<b?b:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},a.target=a.target||c.target||
"google_popup",a.width=a.width||690,a.height=a.height||500,(a=$f(c,a))&&a.focus()):ag(c)};function Y(a){if(a.aa)throw Error("AuthUI instance is deleted!");}m.vb=function(){var a=this;Y(this);return this.a.app.delete().then(function(){var b=Wn(T(a));delete Xn[b];a.reset();a.aa=!0})};function Sn(a){Y(a);try{yh(a.O,Ag(S(a)),go(a)).then(function(b){return a.h?om(a,a.h,b):!1})}catch(b){}}m.wb=function(a,b){Y(this);var c=this,d=gg();if(!Kg(S(this)))throw Error("Email link sign-in should be enabled to trigger email sending.");
var e=Mg(S(this)),f=new Tg(e.url);Ug(f,d);b&&b.a&&(Vi(d,b,T(this)),Xg(f,b.a.providerId));Vg(f,Lg(S(this)));return Zn(this,function(g){g&&((g=g.uid)?f.a.a.set(E.Ja,g):Zc(f.a.a,E.Ja));e.url=f.toString();return X(c).sendSignInLinkToEmail(a,e)}).then(function(){var g=T(c),h={};h.email=a;Ii(Fi,ei(d,JSON.stringify(h)),g)},function(g){G(Gi,T(c));G(Fi,T(c));throw g;})};function bn(a,b){var c=Wg(new Tg(b));if(!c)return B(null);b=new Xe(function(d,e){var f=Bn(a).onAuthStateChanged(function(g){f();g&&g.isAnonymous&&
g.uid===c?d(g):g&&g.isAnonymous&&g.uid!==c?e(Error("anonymous-user-mismatch")):e(Error("anonymous-user-not-found"))});W(a,f)});W(a,b);return b}function fn(a,b,c,d,e){Y(a);var f=e||null,g=firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.credentialWithLink(c,d);c=f?X(a).signInWithEmailLink(c,d).then(function(h){return h.user.linkWithCredential(f)}).then(function(){return Jm(a)}).then(function(){return $n(a,{code:"auth/email-already-in-use"},f)}):X(a).fetchSignInMethodsForEmail(c).then(function(h){return h.length?$n(a,
{code:"auth/email-already-in-use"},g):b.linkWithCredential(g)});W(a,c);return c}function gn(a,b,c,d){Y(a);var e=d||null,f;b=X(a).signInWithEmailLink(b,c).then(function(g){f={user:g.user,credential:null,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo};if(e)return g.user.linkWithCredential(e).then(function(h){f={user:h.user,credential:e,operationType:f.operationType,additionalUserInfo:h.additionalUserInfo}})}).then(function(){Jm(a)}).then(function(){return Bn(a).updateCurrentUser(f.user)}).then(function(){f.user=
Bn(a).currentUser;return f});W(a,b);return b}function Am(){var a=eg();if(bo(a)){a=new Tg(a);for(var b in E)E.hasOwnProperty(b)&&Zc(a.a.a,E[b]);b={state:"signIn",mode:"emailLink",operation:"clear"};var c=n.document.title;n.history&&n.history.replaceState&&n.history.replaceState(b,c,a.toString())}}m.Pb=function(a,b){Y(this);var c=this;return X(this).signInWithEmailAndPassword(a,b).then(function(d){return Zn(c,function(e){return e?Jm(c).then(function(){return $n(c,{code:"auth/email-already-in-use"},
firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.credential(a,b))}):d})})};m.Mb=function(a,b){Y(this);var c=this;return Zn(this,function(d){if(d){var e=firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.credential(a,b);return d.linkWithCredential(e)}return X(c).createUserWithEmailAndPassword(a,b)})};m.Ob=function(a){Y(this);var b=this;return Zn(this,function(c){return c?c.linkWithCredential(a).then(function(d){return d},function(d){if(d&&"auth/email-already-in-use"==d.code&&d.email&&d.credential)throw d;return $n(b,d,a)}):X(b).signInWithCredential(a)})};
function mm(a,b){Y(a);return Zn(a,function(c){return c&&!Oi(T(a))?c.linkWithPopup(b).then(function(d){return d},function(d){if(d&&"auth/email-already-in-use"==d.code&&d.email&&d.credential)throw d;return $n(a,d)}):X(a).signInWithPopup(b)})}m.Rb=function(a){Y(this);var b=this,c=this.v;this.v=null;return Zn(this,function(d){return d&&!Oi(T(b))?d.linkWithRedirect(a):X(b).signInWithRedirect(a)}).then(function(){},function(d){b.v=c;throw d;})};m.Qb=function(a,b){Y(this);var c=this;return Zn(this,function(d){return d?
d.linkWithPhoneNumber(a,b).then(function(e){return new Ah(e,function(f){if("auth/credential-already-in-use"==f.code)return $n(c,f);throw f;})}):Bn(c).signInWithPhoneNumber(a,b).then(function(e){return new Ah(e)})})};m.Nb=function(){Y(this);return Bn(this).signInAnonymously()};function hm(a,b){Y(a);return Zn(a,function(c){if(a.j&&!a.j.isAnonymous&&tg(S(a))&&!X(a).currentUser)return Jm(a).then(function(){"password"==b.credential.providerId&&(b.credential=null);return b});if(c)return Jm(a).then(function(){return c.linkWithCredential(b.credential)}).then(function(d){b.user=
d.user;b.credential=d.credential;b.operationType=d.operationType;b.additionalUserInfo=d.additionalUserInfo;return b},function(d){if(d&&"auth/email-already-in-use"==d.code&&d.email&&d.credential)throw d;return $n(a,d,b.credential)});if(!b.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return Jm(a).then(function(){return Bn(a).updateCurrentUser(b.user)}).then(function(){b.user=Bn(a).currentUser;b.operationType="signIn";b.credential&&b.credential.providerId&&
"password"==b.credential.providerId&&(b.credential=null);return b})})}m.Lb=function(a,b){Y(this);return X(this).signInWithEmailAndPassword(a,b)};function Jm(a){Y(a);return X(a).signOut()}function $n(a,b,c){Y(a);if(b&&b.code&&("auth/email-already-in-use"==b.code||"auth/credential-already-in-use"==b.code)){var d=ug(S(a));return B().then(function(){return d(new Hd("anonymous-upgrade-merge-conflict",null,c||b.credential))}).then(function(){a.h&&(a.h.m(),a.h=null);throw b;})}return ff(b)}Aa("firebaseui.auth.AuthUI",
Vn);Aa("firebaseui.auth.AuthUI.getInstance",function(a){a=Wn(a);return Xn[a]?Xn[a]:null});Aa("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",Vn.prototype.disableAutoSignIn);Aa("firebaseui.auth.AuthUI.prototype.start",Vn.prototype.start);Aa("firebaseui.auth.AuthUI.prototype.setConfig",Vn.prototype.cb);Aa("firebaseui.auth.AuthUI.prototype.signIn",Vn.prototype.Kb);Aa("firebaseui.auth.AuthUI.prototype.reset",Vn.prototype.reset);Aa("firebaseui.auth.AuthUI.prototype.delete",Vn.prototype.vb);Aa("firebaseui.auth.AuthUI.prototype.isPendingRedirect",
Vn.prototype.gb);Aa("firebaseui.auth.AuthUIError",Hd);Aa("firebaseui.auth.AuthUIError.prototype.toJSON",Hd.prototype.toJSON);Aa("firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM",ig);Aa("firebaseui.auth.CredentialHelper.GOOGLE_YOLO","googleyolo");Aa("firebaseui.auth.CredentialHelper.NONE","none");Aa("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous")}).apply(typeof global!=="undefined"?global:typeof self!=="undefined"?self:window);}).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : window );if(typeof window!=='undefined'){window.dialogPolyfill=dialog_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a;}const auth = firebaseui.auth;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/idb/build/idb.js":
/*!***************************************!*\
  !*** ./node_modules/idb/build/idb.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function() {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function(resolve, reject) {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });

    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function(value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function(prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function() {
          return this[targetProp][prop];
        },
        set: function(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', [
    'name',
    'keyPath',
    'multiEntry',
    'unique'
  ]);

  proxyRequestMethods(Index, '_index', IDBIndex, [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(Index, '_index', IDBIndex, [
    'openCursor',
    'openKeyCursor'
  ]);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', [
    'direction',
    'key',
    'primaryKey',
    'value'
  ]);

  proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
    'update',
    'delete'
  ]);

  // proxy 'next' methods
  ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
    if (!(methodName in IDBCursor.prototype)) return;
    Cursor.prototype[methodName] = function() {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function() {
        cursor._cursor[methodName].apply(cursor._cursor, args);
        return promisifyRequest(cursor._request).then(function(value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function() {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function() {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', [
    'name',
    'keyPath',
    'indexNames',
    'autoIncrement'
  ]);

  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'put',
    'add',
    'delete',
    'clear',
    'get',
    'getAll',
    'getKey',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'openCursor',
    'openKeyCursor'
  ]);

  proxyMethods(ObjectStore, '_store', IDBObjectStore, [
    'deleteIndex'
  ]);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function(resolve, reject) {
      idbTransaction.oncomplete = function() {
        resolve();
      };
      idbTransaction.onerror = function() {
        reject(idbTransaction.error);
      };
      idbTransaction.onabort = function() {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function() {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', [
    'objectStoreNames',
    'mode'
  ]);

  proxyMethods(Transaction, '_tx', IDBTransaction, [
    'abort'
  ]);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function() {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(UpgradeDB, '_db', IDBDatabase, [
    'deleteObjectStore',
    'close'
  ]);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function() {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(DB, '_db', IDBDatabase, [
    'close'
  ]);

  // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises
  ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
    [ObjectStore, Index].forEach(function(Constructor) {
      // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
      if (!(funcName in Constructor.prototype)) return;

      Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
        request.onsuccess = function() {
          callback(request.result);
        };
      };
    });
  });

  // polyfill getAll
  [Index, ObjectStore].forEach(function(Constructor) {
    if (Constructor.prototype.getAll) return;
    Constructor.prototype.getAll = function(query, count) {
      var instance = this;
      var items = [];

      return new Promise(function(resolve) {
        instance.iterateCursor(query, function(cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }
          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }
          cursor.continue();
        });
      });
    };
  });

  function openDb(name, version, upgradeCallback) {
    var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
    var request = p.request;

    if (request) {
      request.onupgradeneeded = function(event) {
        if (upgradeCallback) {
          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
        }
      };
    }

    return p.then(function(db) {
      return new DB(db);
    });
  }

  function deleteDb(name) {
    return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
  }

  exports.openDb = openDb;
  exports.deleteDb = deleteDb;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=%2FUsers%2Firie-shinnosuke%2FDocuments%2Fworks%2Fskett%2Fskett%2Fpages%2Flogin.tsx!./":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=%2FUsers%2Firie-shinnosuke%2FDocuments%2Fworks%2Fskett%2Fskett%2Fpages%2Flogin.tsx ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/login", function() {
      var mod = __webpack_require__(/*! ./pages/login.tsx */ "./pages/login.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/login.tsx */ "./pages/login.tsx", function() {
          if(!next.router.components["/login"]) return
          var updatedPage = __webpack_require__(/*! ./pages/login.tsx */ "./pages/login.tsx")
          next.router.update("/login", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Set = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    key: "charSet",
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      key: "viewport",
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new _Set();
  var tags = new _Set();
  var metaTypes = new _Set();
  var metaCategories = {};
  return function (h) {
    if (h.key && typeof h.key !== 'number' && h.key.indexOf('.$') === 0) {
      if (keys.has(h.key)) return false;
      keys.add(h.key);
      return true;
    }

    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) return false;
        tags.add(h.type);
        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) return false;
            metaTypes.add(metatype);
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new _Set();
            if (categories.has(category)) return false;
            categories.add(category);
            metaCategories[metatype] = categories;
          }
        }

        break;
    }

    return true;
  };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js");

var _Set = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new _Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return (
    /*#__PURE__*/
    function (_react_1$Component) {
      _inherits(_class, _react_1$Component);

      _createClass(_class, null, [{
        key: "rewind",
        // Used when server rendering
        value: function rewind() {
          var recordedState = state;
          state = undefined;
          mountedInstances.clear();
          return recordedState;
        }
      }]);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));

        if (isServer) {
          mountedInstances.add(_assertThisInitialized(_this));
          emitChange(_assertThisInitialized(_this));
        }

        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          mountedInstances.add(this);
          emitChange(this);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          emitChange(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          mountedInstances["delete"](this);
          emitChange(this);
        }
      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);

      return _class;
    }(react_1.Component)
  );
};

/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/react-firebaseui/FirebaseAuth.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-firebaseui/FirebaseAuth.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ELEMENT_ID = 'firebaseui_container';

var firebaseUiDeletion = Promise.resolve();

var FirebaseAuth = function (_React$Component) {
  _inherits(FirebaseAuth, _React$Component);

  function FirebaseAuth(props) {
    _classCallCheck(this, FirebaseAuth);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.uiConfig = props.uiConfig;
    _this.firebaseAuth = props.firebaseAuth;
    _this.className = props.className;
    _this.uiCallback = props.uiCallback;
    _this.unregisterAuthObserver = function () {};
    return _this;
  }

  FirebaseAuth.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    __webpack_require__(/*! firebaseui/dist/firebaseui.css */ "./node_modules/firebaseui/dist/firebaseui.css");

    var firebaseui = __webpack_require__(/*! firebaseui */ "./node_modules/firebaseui/dist/esm.js");

    return firebaseUiDeletion.then(function () {
      _this2.firebaseUiWidget = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(_this2.firebaseAuth);
      if (_this2.uiConfig.signInFlow === 'popup') {
        _this2.firebaseUiWidget.reset();
      }

      _this2.userSignedIn = false;
      _this2.unregisterAuthObserver = _this2.firebaseAuth.onAuthStateChanged(function (user) {
        if (!user && _this2.userSignedIn) {
          _this2.firebaseUiWidget.reset();
        }
        _this2.userSignedIn = !!user;
      });

      if (_this2.uiCallback) {
        _this2.uiCallback(_this2.firebaseUiWidget);
      }

      _this2.firebaseUiWidget.start('#' + ELEMENT_ID, _this2.uiConfig);
    });
  };

  FirebaseAuth.prototype.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;

    firebaseUiDeletion = firebaseUiDeletion.then(function () {
      _this3.unregisterAuthObserver();
      return _this3.firebaseUiWidget.delete();
    });
    return firebaseUiDeletion;
  };

  FirebaseAuth.prototype.render = function render() {
    return _react2.default.createElement('div', { className: this.className, id: ELEMENT_ID });
  };

  return FirebaseAuth;
}(_react2.default.Component);

exports.default = FirebaseAuth;
//# sourceMappingURL=FirebaseAuth.js.map

/***/ }),

/***/ "./node_modules/react-firebaseui/StyledFirebaseAuth.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-firebaseui/StyledFirebaseAuth.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(i){var e={};function o(t){if(e[t])return e[t].exports;var a=e[t]={i:t,l:!1,exports:{}};return i[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=i,o.c=e,o.d=function(i,e,t){o.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:t})},o.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},o.t=function(i,e){if(1&e&&(i=o(i)),8&e)return i;if(4&e&&"object"==typeof i&&i&&i.__esModule)return i;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var a in i)o.d(t,a,function(e){return i[e]}.bind(null,a));return t},o.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return o.d(e,"a",e),e},o.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},o.p="",o(o.s=0)}([function(i,e,o){"use strict";e.__esModule=!0;var t=function(i){return i&&i.__esModule?i:{default:i}}(o(1));var a=Promise.resolve(),r=function(i){function e(o){!function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?i:e}(this,i.call(this,o));return t.uiConfig=o.uiConfig,t.firebaseAuth=o.firebaseAuth,t.className=o.className,t.uiCallback=o.uiCallback,t.unregisterAuthObserver=function(){},t}return function(i,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)}(e,i),e.prototype.componentDidMount=function(){var i=this;o(2);var e=o(7);return a.then(function(){i.firebaseUiWidget=e.auth.AuthUI.getInstance()||new e.auth.AuthUI(i.firebaseAuth),"popup"===i.uiConfig.signInFlow&&i.firebaseUiWidget.reset(),i.userSignedIn=!1,i.unregisterAuthObserver=i.firebaseAuth.onAuthStateChanged(function(e){!e&&i.userSignedIn&&i.firebaseUiWidget.reset(),i.userSignedIn=!!e}),i.uiCallback&&i.uiCallback(i.firebaseUiWidget),i.firebaseUiWidget.start("#firebaseui_container",i.uiConfig)})},e.prototype.componentWillUnmount=function(){var i=this;return a=a.then(function(){return i.unregisterAuthObserver(),i.firebaseUiWidget.delete()})},e.prototype.render=function(){return t.default.createElement("div",{className:this.className,id:"firebaseui_container"})},e}(t.default.Component);e.default=r},function(i,e){i.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")},function(i,e,o){var t=o(3);"string"==typeof t&&(t=[[i.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(5)(t,a);t.locals&&(i.exports=t.locals)},function(i,e,o){(e=i.exports=o(4)(!1)).push([i.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700);",""]),e.push([i.i,'.mdl-button{background:0 0;border:none;border-radius:2px;color:#000;position:relative;height:36px;margin:0;min-width:64px;padding:0 16px;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;line-height:1;letter-spacing:0;overflow:hidden;will-change:box-shadow;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);outline:0;cursor:pointer;text-decoration:none;text-align:center;line-height:36px;vertical-align:middle}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:hsla(0,0%,62%,.2)}.mdl-button:focus:not(:active){background-color:rgba(0,0,0,.12)}.mdl-button:active{background-color:hsla(0,0%,62%,.4)}.mdl-button.mdl-button--colored{color:#3f51b5}.mdl-button.mdl-button--colored:focus:not(:active){background-color:rgba(0,0,0,.12)}input.mdl-button[type=submit]{-webkit-appearance:none}.mdl-button--raised{background:hsla(0,0%,62%,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-button--raised:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised.mdl-button--colored{background:#3f51b5;color:#fff}.mdl-button--raised.mdl-button--colored:active,.mdl-button--raised.mdl-button--colored:focus:not(:active),.mdl-button--raised.mdl-button--colored:hover{background-color:#3f51b5}.mdl-button--raised.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--fab{border-radius:50%;font-size:24px;height:56px;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;background:hsla(0,0%,62%,.2);box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);position:relative;line-height:normal}.mdl-button--fab .material-icons{position:absolute;top:50%;left:50%;transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--fab.mdl-button--mini-fab{height:40px;min-width:40px;width:40px}.mdl-button--fab .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button--fab:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab.mdl-button--colored{background:#ff4081;color:#fff}.mdl-button--fab.mdl-button--colored:active,.mdl-button--fab.mdl-button--colored:focus:not(:active),.mdl-button--fab.mdl-button--colored:hover{background-color:#ff4081}.mdl-button--fab.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--icon{border-radius:50%;font-size:24px;height:32px;margin-left:0;margin-right:0;min-width:32px;width:32px;padding:0;overflow:hidden;color:inherit;line-height:normal}.mdl-button--icon .material-icons{position:absolute;top:50%;left:50%;transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon{height:24px;min-width:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon .material-icons{top:0;left:0}.mdl-button--icon .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button__ripple-container{display:block;height:100%;left:0;position:absolute;top:0;width:100%;z-index:0;overflow:hidden}.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple,.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple{background-color:transparent}.mdl-button--primary.mdl-button--primary{color:#3f51b5}.mdl-button--primary.mdl-button--primary .mdl-ripple{background:#fff}.mdl-button--primary.mdl-button--primary.mdl-button--fab,.mdl-button--primary.mdl-button--primary.mdl-button--raised{color:#fff;background-color:#3f51b5}.mdl-button--accent.mdl-button--accent{color:#ff4081}.mdl-button--accent.mdl-button--accent .mdl-ripple{background:#fff}.mdl-button--accent.mdl-button--accent.mdl-button--fab,.mdl-button--accent.mdl-button--accent.mdl-button--raised{color:#fff;background-color:#ff4081}.mdl-button.mdl-button--disabled.mdl-button--disabled,.mdl-button[disabled][disabled]{color:rgba(0,0,0,.26);cursor:default;background-color:transparent}.mdl-button--fab.mdl-button--disabled.mdl-button--disabled,.mdl-button--fab[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-button--raised.mdl-button--disabled.mdl-button--disabled,.mdl-button--raised[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26);box-shadow:none}.mdl-button--colored.mdl-button--disabled.mdl-button--disabled,.mdl-button--colored[disabled][disabled]{color:rgba(0,0,0,.26)}.mdl-button .material-icons{vertical-align:middle}.mdl-card{display:flex;flex-direction:column;font-size:16px;font-weight:400;min-height:200px;overflow:hidden;width:330px;z-index:1;position:relative;background:#fff;border-radius:2px;box-sizing:border-box}.mdl-card__media{background-color:#ff4081;background-repeat:repeat;background-position:50% 50%;background-size:cover;background-origin:padding-box;background-attachment:scroll;box-sizing:border-box}.mdl-card__title{align-items:center;color:#000;display:block;display:flex;justify-content:stretch;line-height:normal;padding:16px;perspective-origin:165px 56px;transform-origin:165px 56px;box-sizing:border-box}.mdl-card__title.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__title-text{align-self:flex-end;color:inherit;display:block;display:flex;font-size:24px;font-weight:300;line-height:normal;overflow:hidden;transform-origin:149px 48px;margin:0}.mdl-card__subtitle-text{font-size:14px;color:rgba(0,0,0,.54);margin:0}.mdl-card__supporting-text{color:rgba(0,0,0,.54);font-size:1rem;line-height:18px;overflow:hidden;padding:16px;width:90%}.mdl-card__supporting-text.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__actions{font-size:16px;line-height:normal;width:100%;background-color:transparent;padding:8px;box-sizing:border-box}.mdl-card__actions.mdl-card--border{border-top:1px solid rgba(0,0,0,.1)}.mdl-card--expand{flex-grow:1}.mdl-card__menu{position:absolute;right:16px;top:16px}.mdl-dialog{border:none;box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2);width:280px}.mdl-dialog__title{padding:24px 24px 0;margin:0;font-size:2.5rem}.mdl-dialog__actions{padding:8px 8px 8px 24px;display:flex;flex-direction:row-reverse;flex-wrap:wrap}.mdl-dialog__actions>*{margin-right:8px;height:36px}.mdl-dialog__actions>:first-child{margin-right:0}.mdl-dialog__actions--full-width{padding:0 0 8px}.mdl-dialog__actions--full-width>*{height:48px;flex:0 0 100%;padding-right:16px;margin-right:0;text-align:right}.mdl-dialog__content{padding:20px 24px 24px;color:rgba(0,0,0,.54)}.mdl-progress{display:block;position:relative;height:4px;width:500px;max-width:100%}.mdl-progress>.bar{display:block;position:absolute;top:0;bottom:0;width:0;transition:width .2s cubic-bezier(.4,0,.2,1)}.mdl-progress>.progressbar{background-color:#3f51b5;z-index:1;left:0}.mdl-progress>.bufferbar{background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);z-index:0;left:0}.mdl-progress>.auxbar{right:0}@supports (-webkit-appearance:none){.mdl-progress:not(.mdl-progress--indeterminate):not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate)>.auxbar{background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);mask:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=)}}.mdl-progress:not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate)>.auxbar{background-image:linear-gradient(90deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.9)),linear-gradient(90deg,#3f51b5,#3f51b5)}.mdl-progress.mdl-progress--indeterminate>.bar1,.mdl-progress.mdl-progress__indeterminate>.bar1{background-color:#3f51b5;animation-name:indeterminate1;animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:linear}.mdl-progress.mdl-progress--indeterminate>.bar3,.mdl-progress.mdl-progress__indeterminate>.bar3{background-image:none;background-color:#3f51b5;animation-name:indeterminate2;animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:linear}@keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}.mdl-shadow--2dp{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-shadow--3dp{box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)}.mdl-shadow--4dp{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.mdl-shadow--6dp{box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)}.mdl-shadow--8dp{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.mdl-shadow--16dp{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)}.mdl-shadow--24dp{box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2)}.mdl-spinner{display:inline-block;position:relative;width:28px;height:28px}.mdl-spinner:not(.is-upgraded).is-active:after{content:"Loading..."}.mdl-spinner.is-upgraded.is-active{animation:mdl-spinner__container-rotate 1.568s linear infinite}@keyframes mdl-spinner__container-rotate{to{transform:rotate(1turn)}}.mdl-spinner__layer{position:absolute;width:100%;height:100%;opacity:0}.mdl-spinner__layer-1{border-color:#42a5f5}.mdl-spinner--single-color .mdl-spinner__layer-1{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-1{animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-2{border-color:#f44336}.mdl-spinner--single-color .mdl-spinner__layer-2{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-2{animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-3{border-color:#fdd835}.mdl-spinner--single-color .mdl-spinner__layer-3{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-3{animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-4{border-color:#4caf50}.mdl-spinner--single-color .mdl-spinner__layer-4{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-4{animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}@keyframes mdl-spinner__fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@keyframes mdl-spinner__layer-1-fade-in-out{0%{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdl-spinner__layer-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}}@keyframes mdl-spinner__layer-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}}@keyframes mdl-spinner__layer-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}.mdl-spinner__gap-patch{position:absolute;box-sizing:border-box;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.mdl-spinner__gap-patch .mdl-spinner__circle{width:1000%;left:-450%}.mdl-spinner__circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.mdl-spinner__circle-clipper.mdl-spinner__left{float:left}.mdl-spinner__circle-clipper.mdl-spinner__right{float:right}.mdl-spinner__circle-clipper .mdl-spinner__circle{width:200%}.mdl-spinner__circle{box-sizing:border-box;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent!important;border-radius:50%;animation:none;position:absolute;top:0;right:0;bottom:0;left:0}.mdl-spinner__left .mdl-spinner__circle{border-right-color:transparent!important;transform:rotate(129deg)}.mdl-spinner.is-active .mdl-spinner__left .mdl-spinner__circle{animation:mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__right .mdl-spinner__circle{left:-100%;border-left-color:transparent!important;transform:rotate(-129deg)}.mdl-spinner.is-active .mdl-spinner__right .mdl-spinner__circle{animation:mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}@keyframes mdl-spinner__left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes mdl-spinner__right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}.mdl-textfield{position:relative;font-size:16px;display:inline-block;box-sizing:border-box;width:300px;max-width:100%;margin:0;padding:20px 0}.mdl-textfield .mdl-button{position:absolute;bottom:20px}.mdl-textfield--align-right{text-align:right}.mdl-textfield--full-width{width:100%}.mdl-textfield--expandable{min-width:32px;width:auto;min-height:32px}.mdl-textfield--expandable .mdl-button--icon{top:16px}.mdl-textfield__input{border:none;border-bottom:1px solid rgba(0,0,0,.12);display:block;font-size:16px;font-family:Helvetica,Arial,sans-serif;margin:0;padding:4px 0;width:100%;background:0 0;text-align:left;color:inherit}.mdl-textfield__input[type=number]{-moz-appearance:textfield}.mdl-textfield__input[type=number]::-webkit-inner-spin-button,.mdl-textfield__input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.mdl-textfield.is-focused .mdl-textfield__input{outline:0}.mdl-textfield.is-invalid .mdl-textfield__input{border-color:#d50000;box-shadow:none}.mdl-textfield.is-disabled .mdl-textfield__input,fieldset[disabled] .mdl-textfield .mdl-textfield__input{background-color:transparent;border-bottom:1px dotted rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-textfield textarea.mdl-textfield__input{display:block}.mdl-textfield__label{bottom:0;color:rgba(0,0,0,.26);font-size:16px;left:0;right:0;pointer-events:none;position:absolute;display:block;top:24px;width:100%;overflow:hidden;white-space:nowrap;text-align:left}.mdl-textfield.has-placeholder .mdl-textfield__label,.mdl-textfield.is-dirty .mdl-textfield__label{visibility:hidden}.mdl-textfield--floating-label .mdl-textfield__label{transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label{transition:none}.mdl-textfield.is-disabled.is-disabled .mdl-textfield__label,fieldset[disabled] .mdl-textfield .mdl-textfield__label{color:rgba(0,0,0,.26)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__label{color:#3f51b5;font-size:12px;top:4px;visibility:visible}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__expandable-holder .mdl-textfield__label{top:-16px}.mdl-textfield--floating-label.is-invalid .mdl-textfield__label{color:#d50000;font-size:12px}.mdl-textfield__label:after{background-color:#3f51b5;bottom:20px;content:"";height:2px;left:45%;position:absolute;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);visibility:hidden;width:10px}.mdl-textfield.is-focused .mdl-textfield__label:after{left:0;visibility:visible;width:100%}.mdl-textfield.is-invalid .mdl-textfield__label:after{background-color:#d50000}.mdl-textfield__error{color:#d50000;position:absolute;font-size:12px;margin-top:3px;visibility:hidden;display:block}.mdl-textfield.is-invalid .mdl-textfield__error{visibility:visible}.mdl-textfield__expandable-holder{position:relative;margin-left:32px;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-block;max-width:.1px}.mdl-textfield.is-dirty .mdl-textfield__expandable-holder,.mdl-textfield.is-focused .mdl-textfield__expandable-holder{max-width:600px}.mdl-textfield__expandable-holder .mdl-textfield__label:after{bottom:0}dialog{position:absolute;left:0;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border:solid;padding:1em;background:#fff;color:#000;display:block}dialog:not([open]){display:none}dialog+.backdrop{background:rgba(0,0,0,.1)}._dialog_overlay,dialog+.backdrop{position:fixed;top:0;right:0;bottom:0;left:0}dialog.fixed{position:fixed;top:50%;transform:translateY(-50%)}.firebaseui-container{background-color:#fff;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;color:rgba(0,0,0,.87);direction:ltr;font:16px Roboto,arial,sans-serif;margin:0 auto;max-width:360px;overflow:visible;position:relative;text-align:left;width:100%}.firebaseui-container.mdl-card{overflow:visible}.firebaseui-card-header{padding:24px 24px 0}.firebaseui-card-content,.firebaseui-card-footer{padding:0 24px}.firebaseui-card-actions{box-sizing:border-box;display:table;font-size:14px;padding:8px 24px 24px;text-align:left;width:100%}.firebaseui-form-links{display:table-cell;vertical-align:middle;width:100%}.firebaseui-form-actions{display:table-cell;text-align:right;white-space:nowrap;width:100%}.firebaseui-subtitle,.firebaseui-title{color:rgba(0,0,0,.87);direction:ltr;font-size:20px;font-weight:500;line-height:24px;margin:0;padding:0;text-align:left}.firebaseui-title{padding-bottom:16px}.firebaseui-subtitle{margin:16px 0}.firebaseui-text{color:rgba(0,0,0,.87);direction:ltr;font-size:16px;line-height:24px;text-align:left}.firebaseui-id-page-password-recovery-email-sent p.firebaseui-text{margin:16px 0}.firebaseui-text-emphasis{font-weight:700}.firebaseui-error{color:#dd2c00;direction:ltr;font-size:12px;line-height:16px;margin:0;text-align:left}.firebaseui-text-input-error{margin:-16px 0 16px}.firebaseui-error-wrapper{min-height:16px}.firebaseui-list-item{direction:ltr;margin:0;padding:0;text-align:left}.firebaseui-hidden{display:none}.firebaseui-relative-wrapper{position:relative}.firebaseui-label{color:rgba(0,0,0,.54);direction:ltr;font-size:16px;text-align:left}.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__label{color:#757575}.firebaseui-input,.firebaseui-input-invalid{border-radius:0;color:rgba(0,0,0,.87);direction:ltr;font-size:16px;width:100%}input.firebaseui-input,input.firebaseui-input-invalid{direction:ltr;text-align:left}.firebaseui-input-invalid{border-color:#dd2c00}.firebaseui-textfield{width:100%}.firebaseui-textfield.mdl-textfield .firebaseui-input{border-color:rgba(0,0,0,.12)}.firebaseui-textfield.mdl-textfield .firebaseui-label:after{background-color:#3f51b5}.firebaseui-textfield-invalid.mdl-textfield .firebaseui-input{border-color:#dd2c00}.firebaseui-textfield-invalid.mdl-textfield .firebaseui-label:after{background-color:#dd2c00}.firebaseui-button{display:inline-block;height:36px;margin-left:8px;min-width:88px}.firebaseui-link{color:#4285f4;font-variant:normal;font-weight:400;text-decoration:none}.firebaseui-link:hover{text-decoration:underline}.firebaseui-indent{margin-left:1em}.firebaseui-tos{color:#757575;direction:ltr;font-size:12px;line-height:16px;margin-bottom:24px;margin-top:0;text-align:left}.firebaseui-provider-sign-in-footer>.firebaseui-tos{text-align:center}.firebaseui-tos-list{list-style:none;text-align:right}.firebaseui-inline-list-item{display:inline-block;margin-left:5px;margin-right:5px}.firebaseui-page-provider-sign-in{background:inherit}.firebaseui-idp-list{list-style:none;margin:1em 0;padding:0}.firebaseui-idp-button{direction:ltr;font-weight:500;height:auto;line-height:normal;max-width:220px;min-height:40px;padding:8px 16px;text-align:left;width:100%}.firebaseui-idp-list>.firebaseui-list-item{margin-bottom:15px;text-align:center}.firebaseui-idp-icon-wrapper{display:table-cell;vertical-align:middle}.firebaseui-idp-icon{height:18px;width:18px}.firebaseui-idp-favicon,.firebaseui-idp-icon{border:none;display:inline-block;vertical-align:middle}.firebaseui-idp-favicon{height:14px;margin-right:5px;width:14px}.firebaseui-idp-text{color:#fff;display:table-cell;font-size:14px;padding-left:16px;text-transform:none;vertical-align:middle}.firebaseui-idp-text.firebaseui-idp-text-long{display:table-cell}.firebaseui-idp-text.firebaseui-idp-text-short{display:none}@media (max-width:268px){.firebaseui-idp-text.firebaseui-idp-text-long{display:none}.firebaseui-idp-text.firebaseui-idp-text-short{display:table-cell}}@media (max-width:320px){.firebaseui-recaptcha-container>div>div{transform:scale(.9);-webkit-transform:scale(.9);transform-origin:0 0;-webkit-transform-origin:0 0}}.firebaseui-idp-password,.firebaseui-idp-password:hover,.mdl-button.firebaseui-idp-password:active,.mdl-button.firebaseui-idp-password:focus{background-color:#db4437}.firebaseui-idp-phone,.firebaseui-idp-phone:hover,.mdl-button.firebaseui-idp-phone:active,.mdl-button.firebaseui-idp-phone:focus{background-color:#02bd7e}.firebaseui-idp-google,.firebaseui-idp-google:hover,.mdl-button.firebaseui-idp-google:active,.mdl-button.firebaseui-idp-google:focus{background-color:#fff}.firebaseui-idp-google>.firebaseui-idp-text{color:#757575}.firebaseui-idp-github,.firebaseui-idp-github:hover,.mdl-button.firebaseui-idp-github:active,.mdl-button.firebaseui-idp-github:focus{background-color:#333}.firebaseui-idp-facebook,.firebaseui-idp-facebook:hover,.mdl-button.firebaseui-idp-facebook:active,.mdl-button.firebaseui-idp-facebook:focus{background-color:#3b5998}.firebaseui-idp-twitter,.firebaseui-idp-twitter:hover,.mdl-button.firebaseui-idp-twitter:active,.mdl-button.firebaseui-idp-twitter:focus{background-color:#55acee}.firebaseui-idp-anonymous,.firebaseui-idp-anonymous:hover,.mdl-button.firebaseui-idp-anonymous:active,.mdl-button.firebaseui-idp-anonymous:focus{background-color:#f4b400}.firebaseui-info-bar{background-color:#f9edbe;border:1px solid #f0c36d;box-shadow:0 2px 4px rgba(0,0,0,.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);-moz-box-shadow:0 2px 4px rgba(0,0,0,.2);left:10%;padding:8px 16px;position:absolute;right:10%;text-align:center;top:0}.firebaseui-info-bar-message{font-size:12px;margin:0}.firebaseui-dialog{box-sizing:border-box;color:rgba(0,0,0,.87);font:16px Roboto,arial,sans-serif;height:auto;padding:24px;text-align:left}.firebaseui-dialog-icon-wrapper{display:table-cell;vertical-align:middle}.firebaseui-dialog-icon{float:left;height:40px;margin-right:24px;width:40px}.firebaseui-progress-dialog-message{display:table-cell;font-size:16px;font-weight:400;min-height:40px;vertical-align:middle}.firebaseui-progress-dialog-loading-icon{height:28px;margin:6px 30px 6px 6px;width:28px}.firebaseui-icon-done{background-image:url(https://www.gstatic.com/images/icons/material/system/2x/done_googgreen_36dp.png);background-position:50%;background-repeat:no-repeat;background-size:36px 36px}.firebaseui-phone-number{display:flex}.firebaseui-country-selector{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_grey600_18dp.png);background-position:100%;background-repeat:no-repeat;background-size:18px auto;border-radius:0;border-bottom:1px solid rgba(0,0,0,.12);color:rgba(0,0,0,.87);flex-shrink:0;font-size:16px;font-weight:400;height:auto;line-height:normal;margin:20px 24px 20px 0;padding:4px 20px 4px 0;width:90px}.firebaseui-country-selector-flag{display:inline-block;margin-right:1ex}.firebaseui-flag{background-image:url(https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/flags_sprite_2x.png);background-size:100% auto;filter:drop-shadow(1px 1px 1px rgba(0,0,0,.54));height:14px;width:24px}.firebaseui-list-box-dialog{max-height:90%;overflow:auto;padding:8px 0 0}.firebaseui-list-box-actions{padding-bottom:8px}.firebaseui-list-box-icon-wrapper{padding-right:24px}.firebaseui-list-box-icon-wrapper,.firebaseui-list-box-label-wrapper{display:table-cell;vertical-align:top}.firebaseui-list-box-dialog-button{color:rgba(0,0,0,.87);direction:ltr;font-size:16px;font-weight:400;height:auto;line-height:normal;min-height:48px;padding:14px 24px;text-align:left;text-transform:none;width:100%}.firebaseui-phone-number-error{margin-left:114px}.mdl-progress.firebaseui-busy-indicator{height:2px;left:0;position:absolute;top:55px;width:100%}.mdl-spinner.firebaseui-busy-indicator{height:56px;left:0;margin:auto;position:absolute;right:0;top:30%;width:56px}.firebaseui-callback-indicator-container .firebaseui-busy-indicator{top:0}.firebaseui-callback-indicator-container{height:120px}.firebaseui-new-password-component{display:inline-block;position:relative;width:100%}.firebaseui-input-floating-button{background-position:50%;background-repeat:no-repeat;display:block;height:24px;position:absolute;right:0;top:20px;width:24px}.firebaseui-input-toggle-on{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/visibility_black_24dp.png)}.firebaseui-input-toggle-off{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/visibility_off_black_24dp.png)}.firebaseui-input-toggle-focus{opacity:.87}.firebaseui-input-toggle-blur{opacity:.38}.firebaseui-recaptcha-wrapper{display:table;margin:0 auto;padding-bottom:8px}.firebaseui-recaptcha-container{display:table-cell}.firebaseui-recaptcha-error-wrapper{caption-side:bottom;display:table-caption}.firebaseui-change-phone-number-link{display:block}.firebaseui-resend-container{direction:ltr;margin:20px 0;text-align:center}.firebaseui-id-resend-countdown{color:rgba(0,0,0,.38)}.firebaseui-id-page-phone-sign-in-start .firebaseui-form-actions div{float:left}@media (max-width:480px){.firebaseui-container{box-shadow:none;max-width:none;width:100%}.firebaseui-card-header{border-bottom:1px solid #e0e0e0;margin-bottom:16px;padding:16px 24px 0}.firebaseui-title{padding-bottom:16px}.firebaseui-card-actions{padding-right:24px}.firebaseui-busy-indicator{top:0}}.mdl-textfield__label{font-weight:400;margin-bottom:0}.firebaseui-id-page-blank{background:inherit;height:64px}.firebaseui-email-sent{background-image:url(https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/success_status.png);background-position:50%;background-repeat:no-repeat;background-size:64px 64px;height:64px;margin-top:16px;text-align:center}.firebaseui-text-justify{text-align:justify}.firebaseui-flag-KY{background-position:0 0}.firebaseui-flag-AC{background-position:0 -14px}.firebaseui-flag-AE{background-position:0 -28px}.firebaseui-flag-AF{background-position:0 -42px}.firebaseui-flag-AG{background-position:0 -56px}.firebaseui-flag-AI{background-position:0 -70px}.firebaseui-flag-AL{background-position:0 -84px}.firebaseui-flag-AM{background-position:0 -98px}.firebaseui-flag-AO{background-position:0 -112px}.firebaseui-flag-AQ{background-position:0 -126px}.firebaseui-flag-AR{background-position:0 -140px}.firebaseui-flag-AS{background-position:0 -154px}.firebaseui-flag-AT{background-position:0 -168px}.firebaseui-flag-AU{background-position:0 -182px}.firebaseui-flag-AW{background-position:0 -196px}.firebaseui-flag-AX{background-position:0 -210px}.firebaseui-flag-AZ{background-position:0 -224px}.firebaseui-flag-BA{background-position:0 -238px}.firebaseui-flag-BB{background-position:0 -252px}.firebaseui-flag-BD{background-position:0 -266px}.firebaseui-flag-BE{background-position:0 -280px}.firebaseui-flag-BF{background-position:0 -294px}.firebaseui-flag-BG{background-position:0 -308px}.firebaseui-flag-BH{background-position:0 -322px}.firebaseui-flag-BI{background-position:0 -336px}.firebaseui-flag-BJ{background-position:0 -350px}.firebaseui-flag-BL{background-position:0 -364px}.firebaseui-flag-BM{background-position:0 -378px}.firebaseui-flag-BN{background-position:0 -392px}.firebaseui-flag-BO{background-position:0 -406px}.firebaseui-flag-BQ{background-position:0 -420px}.firebaseui-flag-BR{background-position:0 -434px}.firebaseui-flag-BS{background-position:0 -448px}.firebaseui-flag-BT{background-position:0 -462px}.firebaseui-flag-BV{background-position:0 -476px}.firebaseui-flag-BW{background-position:0 -490px}.firebaseui-flag-BY{background-position:0 -504px}.firebaseui-flag-BZ{background-position:0 -518px}.firebaseui-flag-CA{background-position:0 -532px}.firebaseui-flag-CC{background-position:0 -546px}.firebaseui-flag-CD{background-position:0 -560px}.firebaseui-flag-CF{background-position:0 -574px}.firebaseui-flag-CG{background-position:0 -588px}.firebaseui-flag-CH{background-position:0 -602px}.firebaseui-flag-CI{background-position:0 -616px}.firebaseui-flag-CK{background-position:0 -630px}.firebaseui-flag-CL{background-position:0 -644px}.firebaseui-flag-CM{background-position:0 -658px}.firebaseui-flag-CN{background-position:0 -672px}.firebaseui-flag-CO{background-position:0 -686px}.firebaseui-flag-CP{background-position:0 -700px}.firebaseui-flag-CR{background-position:0 -714px}.firebaseui-flag-CU{background-position:0 -728px}.firebaseui-flag-CV{background-position:0 -742px}.firebaseui-flag-CW{background-position:0 -756px}.firebaseui-flag-CX{background-position:0 -770px}.firebaseui-flag-CY{background-position:0 -784px}.firebaseui-flag-CZ{background-position:0 -798px}.firebaseui-flag-DE{background-position:0 -812px}.firebaseui-flag-DG{background-position:0 -826px}.firebaseui-flag-DJ{background-position:0 -840px}.firebaseui-flag-DK{background-position:0 -854px}.firebaseui-flag-DM{background-position:0 -868px}.firebaseui-flag-DO{background-position:0 -882px}.firebaseui-flag-DZ{background-position:0 -896px}.firebaseui-flag-EA{background-position:0 -910px}.firebaseui-flag-EC{background-position:0 -924px}.firebaseui-flag-EE{background-position:0 -938px}.firebaseui-flag-EG{background-position:0 -952px}.firebaseui-flag-EH{background-position:0 -966px}.firebaseui-flag-ER{background-position:0 -980px}.firebaseui-flag-ES{background-position:0 -994px}.firebaseui-flag-ET{background-position:0 -1008px}.firebaseui-flag-EU{background-position:0 -1022px}.firebaseui-flag-FI{background-position:0 -1036px}.firebaseui-flag-FJ{background-position:0 -1050px}.firebaseui-flag-FK{background-position:0 -1064px}.firebaseui-flag-FM{background-position:0 -1078px}.firebaseui-flag-FO{background-position:0 -1092px}.firebaseui-flag-FR{background-position:0 -1106px}.firebaseui-flag-GA{background-position:0 -1120px}.firebaseui-flag-GB{background-position:0 -1134px}.firebaseui-flag-GD{background-position:0 -1148px}.firebaseui-flag-GE{background-position:0 -1162px}.firebaseui-flag-GF{background-position:0 -1176px}.firebaseui-flag-GG{background-position:0 -1190px}.firebaseui-flag-GH{background-position:0 -1204px}.firebaseui-flag-GI{background-position:0 -1218px}.firebaseui-flag-GL{background-position:0 -1232px}.firebaseui-flag-GM{background-position:0 -1246px}.firebaseui-flag-GN{background-position:0 -1260px}.firebaseui-flag-GP{background-position:0 -1274px}.firebaseui-flag-GQ{background-position:0 -1288px}.firebaseui-flag-GR{background-position:0 -1302px}.firebaseui-flag-GS{background-position:0 -1316px}.firebaseui-flag-GT{background-position:0 -1330px}.firebaseui-flag-GU{background-position:0 -1344px}.firebaseui-flag-GW{background-position:0 -1358px}.firebaseui-flag-GY{background-position:0 -1372px}.firebaseui-flag-HK{background-position:0 -1386px}.firebaseui-flag-HM{background-position:0 -1400px}.firebaseui-flag-HN{background-position:0 -1414px}.firebaseui-flag-HR{background-position:0 -1428px}.firebaseui-flag-HT{background-position:0 -1442px}.firebaseui-flag-HU{background-position:0 -1456px}.firebaseui-flag-IC{background-position:0 -1470px}.firebaseui-flag-ID{background-position:0 -1484px}.firebaseui-flag-IE{background-position:0 -1498px}.firebaseui-flag-IL{background-position:0 -1512px}.firebaseui-flag-IM{background-position:0 -1526px}.firebaseui-flag-IN{background-position:0 -1540px}.firebaseui-flag-IO{background-position:0 -1554px}.firebaseui-flag-IQ{background-position:0 -1568px}.firebaseui-flag-IR{background-position:0 -1582px}.firebaseui-flag-IS{background-position:0 -1596px}.firebaseui-flag-IT{background-position:0 -1610px}.firebaseui-flag-JE{background-position:0 -1624px}.firebaseui-flag-JM{background-position:0 -1638px}.firebaseui-flag-JO{background-position:0 -1652px}.firebaseui-flag-JP{background-position:0 -1666px}.firebaseui-flag-KE{background-position:0 -1680px}.firebaseui-flag-KG{background-position:0 -1694px}.firebaseui-flag-KH{background-position:0 -1708px}.firebaseui-flag-KI{background-position:0 -1722px}.firebaseui-flag-KM{background-position:0 -1736px}.firebaseui-flag-KN{background-position:0 -1750px}.firebaseui-flag-KP{background-position:0 -1764px}.firebaseui-flag-KR{background-position:0 -1778px}.firebaseui-flag-KW{background-position:0 -1792px}.firebaseui-flag-AD{background-position:0 -1806px}.firebaseui-flag-KZ{background-position:0 -1820px}.firebaseui-flag-LA{background-position:0 -1834px}.firebaseui-flag-LB{background-position:0 -1848px}.firebaseui-flag-LC{background-position:0 -1862px}.firebaseui-flag-LI{background-position:0 -1876px}.firebaseui-flag-LK{background-position:0 -1890px}.firebaseui-flag-LR{background-position:0 -1904px}.firebaseui-flag-LS{background-position:0 -1918px}.firebaseui-flag-LT{background-position:0 -1932px}.firebaseui-flag-LU{background-position:0 -1946px}.firebaseui-flag-LV{background-position:0 -1960px}.firebaseui-flag-LY{background-position:0 -1974px}.firebaseui-flag-MA{background-position:0 -1988px}.firebaseui-flag-MC{background-position:0 -2002px}.firebaseui-flag-MD{background-position:0 -2016px}.firebaseui-flag-ME{background-position:0 -2030px}.firebaseui-flag-MF{background-position:0 -2044px}.firebaseui-flag-MG{background-position:0 -2058px}.firebaseui-flag-MH{background-position:0 -2072px}.firebaseui-flag-MK{background-position:0 -2086px}.firebaseui-flag-ML{background-position:0 -2100px}.firebaseui-flag-MM{background-position:0 -2114px}.firebaseui-flag-MN{background-position:0 -2128px}.firebaseui-flag-MO{background-position:0 -2142px}.firebaseui-flag-MP{background-position:0 -2156px}.firebaseui-flag-MQ{background-position:0 -2170px}.firebaseui-flag-MR{background-position:0 -2184px}.firebaseui-flag-MS{background-position:0 -2198px}.firebaseui-flag-MT{background-position:0 -2212px}.firebaseui-flag-MU{background-position:0 -2226px}.firebaseui-flag-MV{background-position:0 -2240px}.firebaseui-flag-MW{background-position:0 -2254px}.firebaseui-flag-MX{background-position:0 -2268px}.firebaseui-flag-MY{background-position:0 -2282px}.firebaseui-flag-MZ{background-position:0 -2296px}.firebaseui-flag-NA{background-position:0 -2310px}.firebaseui-flag-NC{background-position:0 -2324px}.firebaseui-flag-NE{background-position:0 -2338px}.firebaseui-flag-NF{background-position:0 -2352px}.firebaseui-flag-NG{background-position:0 -2366px}.firebaseui-flag-NI{background-position:0 -2380px}.firebaseui-flag-NL{background-position:0 -2394px}.firebaseui-flag-NO{background-position:0 -2408px}.firebaseui-flag-NP{background-position:0 -2422px}.firebaseui-flag-NR{background-position:0 -2436px}.firebaseui-flag-NU{background-position:0 -2450px}.firebaseui-flag-NZ{background-position:0 -2464px}.firebaseui-flag-OM{background-position:0 -2478px}.firebaseui-flag-PA{background-position:0 -2492px}.firebaseui-flag-PE{background-position:0 -2506px}.firebaseui-flag-PF{background-position:0 -2520px}.firebaseui-flag-PG{background-position:0 -2534px}.firebaseui-flag-PH{background-position:0 -2548px}.firebaseui-flag-PK{background-position:0 -2562px}.firebaseui-flag-PL{background-position:0 -2576px}.firebaseui-flag-PM{background-position:0 -2590px}.firebaseui-flag-PN{background-position:0 -2604px}.firebaseui-flag-PR{background-position:0 -2618px}.firebaseui-flag-PS{background-position:0 -2632px}.firebaseui-flag-PT{background-position:0 -2646px}.firebaseui-flag-PW{background-position:0 -2660px}.firebaseui-flag-PY{background-position:0 -2674px}.firebaseui-flag-QA{background-position:0 -2688px}.firebaseui-flag-RE{background-position:0 -2702px}.firebaseui-flag-RO{background-position:0 -2716px}.firebaseui-flag-RS{background-position:0 -2730px}.firebaseui-flag-RU{background-position:0 -2744px}.firebaseui-flag-RW{background-position:0 -2758px}.firebaseui-flag-SA{background-position:0 -2772px}.firebaseui-flag-SB{background-position:0 -2786px}.firebaseui-flag-SC{background-position:0 -2800px}.firebaseui-flag-SD{background-position:0 -2814px}.firebaseui-flag-SE{background-position:0 -2828px}.firebaseui-flag-SG{background-position:0 -2842px}.firebaseui-flag-SH{background-position:0 -2856px}.firebaseui-flag-SI{background-position:0 -2870px}.firebaseui-flag-SJ{background-position:0 -2884px}.firebaseui-flag-SK{background-position:0 -2898px}.firebaseui-flag-SL{background-position:0 -2912px}.firebaseui-flag-SM{background-position:0 -2926px}.firebaseui-flag-SN{background-position:0 -2940px}.firebaseui-flag-SO{background-position:0 -2954px}.firebaseui-flag-SR{background-position:0 -2968px}.firebaseui-flag-SS{background-position:0 -2982px}.firebaseui-flag-ST{background-position:0 -2996px}.firebaseui-flag-SV{background-position:0 -3010px}.firebaseui-flag-SX{background-position:0 -3024px}.firebaseui-flag-SY{background-position:0 -3038px}.firebaseui-flag-SZ{background-position:0 -3052px}.firebaseui-flag-TA{background-position:0 -3066px}.firebaseui-flag-TC{background-position:0 -3080px}.firebaseui-flag-TD{background-position:0 -3094px}.firebaseui-flag-TF{background-position:0 -3108px}.firebaseui-flag-TG{background-position:0 -3122px}.firebaseui-flag-TH{background-position:0 -3136px}.firebaseui-flag-TJ{background-position:0 -3150px}.firebaseui-flag-TK{background-position:0 -3164px}.firebaseui-flag-TL{background-position:0 -3178px}.firebaseui-flag-TM{background-position:0 -3192px}.firebaseui-flag-TN{background-position:0 -3206px}.firebaseui-flag-TO{background-position:0 -3220px}.firebaseui-flag-TR{background-position:0 -3234px}.firebaseui-flag-TT{background-position:0 -3248px}.firebaseui-flag-TV{background-position:0 -3262px}.firebaseui-flag-TW{background-position:0 -3276px}.firebaseui-flag-TZ{background-position:0 -3290px}.firebaseui-flag-UA{background-position:0 -3304px}.firebaseui-flag-UG{background-position:0 -3318px}.firebaseui-flag-UM{background-position:0 -3332px}.firebaseui-flag-UN{background-position:0 -3346px}.firebaseui-flag-US{background-position:0 -3360px}.firebaseui-flag-UY{background-position:0 -3374px}.firebaseui-flag-UZ{background-position:0 -3388px}.firebaseui-flag-VA{background-position:0 -3402px}.firebaseui-flag-VC{background-position:0 -3416px}.firebaseui-flag-VE{background-position:0 -3430px}.firebaseui-flag-VG{background-position:0 -3444px}.firebaseui-flag-VI{background-position:0 -3458px}.firebaseui-flag-VN{background-position:0 -3472px}.firebaseui-flag-VU{background-position:0 -3486px}.firebaseui-flag-WF{background-position:0 -3500px}.firebaseui-flag-WS{background-position:0 -3514px}.firebaseui-flag-XK{background-position:0 -3528px}.firebaseui-flag-YE{background-position:0 -3542px}.firebaseui-flag-YT{background-position:0 -3556px}.firebaseui-flag-ZA{background-position:0 -3570px}.firebaseui-flag-ZM{background-position:0 -3584px}.firebaseui-flag-ZW{background-position:0 -3598px}',""])},function(i,e){i.exports=function(i){var e=[];return e.toString=function(){return this.map(function(e){var o=function(i,e){var o=i[1]||"",t=i[3];if(!t)return o;if(e&&"function"==typeof btoa){var a=function(i){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"}(t),r=t.sources.map(function(i){return"/*# sourceURL="+t.sourceRoot+i+" */"});return[o].concat(r).concat([a]).join("\n")}return[o].join("\n")}(e,i);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(i,o){"string"==typeof i&&(i=[[null,i,""]]);for(var t={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(t[r]=!0)}for(a=0;a<i.length;a++){var n=i[a];"number"==typeof n[0]&&t[n[0]]||(o&&!n[2]?n[2]=o:o&&(n[2]="("+n[2]+") and ("+o+")"),e.push(n))}},e}},function(i,e,o){var t={},a=function(i){var e;return function(){return void 0===e&&(e=i.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),r=function(i){var e={};return function(i){if("function"==typeof i)return i();if(void 0===e[i]){var o=function(i){return document.querySelector(i)}.call(this,i);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(i){o=null}e[i]=o}return e[i]}}(),n=null,l=0,s=[],d=o(6);function p(i,e){for(var o=0;o<i.length;o++){var a=i[o],r=t[a.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](a.parts[n]);for(;n<a.parts.length;n++)r.parts.push(x(a.parts[n],e))}else{var l=[];for(n=0;n<a.parts.length;n++)l.push(x(a.parts[n],e));t[a.id]={id:a.id,refs:1,parts:l}}}}function b(i,e){for(var o=[],t={},a=0;a<i.length;a++){var r=i[a],n=e.base?r[0]+e.base:r[0],l={css:r[1],media:r[2],sourceMap:r[3]};t[n]?t[n].parts.push(l):o.push(t[n]={id:n,parts:[l]})}return o}function f(i,e){var o=r(i.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=s[s.length-1];if("top"===i.insertAt)t?t.nextSibling?o.insertBefore(e,t.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),s.push(e);else if("bottom"===i.insertAt)o.appendChild(e);else{if("object"!=typeof i.insertAt||!i.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=r(i.insertInto+" "+i.insertAt.before);o.insertBefore(e,a)}}function u(i){if(null===i.parentNode)return!1;i.parentNode.removeChild(i);var e=s.indexOf(i);e>=0&&s.splice(e,1)}function g(i){var e=document.createElement("style");return void 0===i.attrs.type&&(i.attrs.type="text/css"),c(e,i.attrs),f(i,e),e}function c(i,e){Object.keys(e).forEach(function(o){i.setAttribute(o,e[o])})}function x(i,e){var o,t,a,r;if(e.transform&&i.css){if(!(r=e.transform(i.css)))return function(){};i.css=r}if(e.singleton){var s=l++;o=n||(n=g(e)),t=h.bind(null,o,s,!1),a=h.bind(null,o,s,!0)}else i.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(i){var e=document.createElement("link");return void 0===i.attrs.type&&(i.attrs.type="text/css"),i.attrs.rel="stylesheet",c(e,i.attrs),f(i,e),e}(e),t=function(i,e,o){var t=o.css,a=o.sourceMap,r=void 0===e.convertToAbsoluteUrls&&a;(e.convertToAbsoluteUrls||r)&&(t=d(t));a&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var n=new Blob([t],{type:"text/css"}),l=i.href;i.href=URL.createObjectURL(n),l&&URL.revokeObjectURL(l)}.bind(null,o,e),a=function(){u(o),o.href&&URL.revokeObjectURL(o.href)}):(o=g(e),t=function(i,e){var o=e.css,t=e.media;t&&i.setAttribute("media",t);if(i.styleSheet)i.styleSheet.cssText=o;else{for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(document.createTextNode(o))}}.bind(null,o),a=function(){u(o)});return t(i),function(e){if(e){if(e.css===i.css&&e.media===i.media&&e.sourceMap===i.sourceMap)return;t(i=e)}else a()}}i.exports=function(i,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=b(i,e);return p(o,e),function(i){for(var a=[],r=0;r<o.length;r++){var n=o[r];(l=t[n.id]).refs--,a.push(l)}i&&p(b(i,e),e);for(r=0;r<a.length;r++){var l;if(0===(l=a[r]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete t[l.id]}}}};var m=function(){var i=[];return function(e,o){return i[e]=o,i.filter(Boolean).join("\n")}}();function h(i,e,o,t){var a=o?"":t.css;if(i.styleSheet)i.styleSheet.cssText=m(e,a);else{var r=document.createTextNode(a),n=i.childNodes;n[e]&&i.removeChild(n[e]),n.length?i.insertBefore(r,n[e]):i.appendChild(r)}}},function(i,e){i.exports=function(i){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!i||"string"!=typeof i)return i;var o=e.protocol+"//"+e.host,t=o+e.pathname.replace(/\/[^\/]*$/,"/");return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(i,e){var a,r=e.trim().replace(/^"(.*)"$/,function(i,e){return e}).replace(/^'(.*)'$/,function(i,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?i:(a=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:t+r.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(i,e){i.exports=__webpack_require__(/*! firebaseui */ "./node_modules/firebaseui/dist/esm.js")}]);
//# sourceMappingURL=StyledFirebaseAuth.js.map

/***/ }),

/***/ "./node_modules/react-firebaseui/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-firebaseui/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FirebaseAuth = __webpack_require__(/*! ./FirebaseAuth */ "./node_modules/react-firebaseui/FirebaseAuth.js");

var _FirebaseAuth2 = _interopRequireDefault(_FirebaseAuth);

var _StyledFirebaseAuth = __webpack_require__(/*! ./StyledFirebaseAuth */ "./node_modules/react-firebaseui/StyledFirebaseAuth.js");

var _StyledFirebaseAuth2 = _interopRequireDefault(_StyledFirebaseAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FirebaseAuth = _FirebaseAuth2.default;
exports.StyledFirebaseAuth = _StyledFirebaseAuth2.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_13346faca0e924a89b24 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_13346faca0e924a89b24 */ "dll-reference dll_13346faca0e924a89b24"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_templates_layouts_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/templates/layouts/Main */ "./components/templates/layouts/Main.tsx");
/* harmony import */ var react_firebaseui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebaseui */ "./node_modules/react-firebaseui/index.js");
/* harmony import */ var react_firebaseui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_css_firebaseui_styling_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/css/firebaseui-styling.global.css */ "./assets/css/firebaseui-styling.global.css");
/* harmony import */ var _assets_css_firebaseui_styling_global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_firebaseui_styling_global_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/pages/login.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






var Login = function Login() {
  var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider();
  provider.setCustomParameters({
    display: 'popup'
  });
  var uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].EmailAuthProvider.PROVIDER_ID, firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider.PROVIDER_ID, firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].TwitterAuthProvider.PROVIDER_ID]
  };
  return __jsx(_components_templates_layouts_Main__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(react_firebaseui__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuth"], {
    uiConfig: uiConfig,
    firebaseAuth: firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"](),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ 1:
/*!********************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Flogin&absolutePagePath=%2FUsers%2Firie-shinnosuke%2FDocuments%2Fworks%2Fskett%2Fskett%2Fpages%2Flogin.tsx ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Flogin&absolutePagePath=%2FUsers%2Firie-shinnosuke%2FDocuments%2Fworks%2Fskett%2Fskett%2Fpages%2Flogin.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=%2FUsers%2Firie-shinnosuke%2FDocuments%2Fworks%2Fskett%2Fskett%2Fpages%2Flogin.tsx!./");


/***/ }),

/***/ "dll-reference dll_13346faca0e924a89b24":
/*!*******************************************!*\
  !*** external "dll_13346faca0e924a89b24" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_13346faca0e924a89b24;

/***/ })

},[[1,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=login.js.map