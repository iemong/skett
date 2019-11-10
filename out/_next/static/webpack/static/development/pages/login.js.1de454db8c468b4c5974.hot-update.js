webpackHotUpdate("static/development/pages/login.js",{

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
var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/pages/login.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



 // import '../assets/css/firebaseui-styling.global.css'

var Login = function Login() {
  var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider();
  provider.setCustomParameters({
    display: 'popup'
  });
  var uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider.PROVIDER_ID, firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].TwitterAuthProvider.PROVIDER_ID]
  };
  return __jsx(_components_templates_layouts_Main__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(react_firebaseui__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuth"], {
    uiConfig: uiConfig,
    firebaseAuth: firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"](),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.1de454db8c468b4c5974.hot-update.js.map