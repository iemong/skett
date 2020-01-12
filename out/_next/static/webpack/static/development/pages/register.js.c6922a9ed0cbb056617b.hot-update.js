webpackHotUpdate("static/development/pages/register.js",{

/***/ "./components/organisms/register/login/index.tsx":
/*!*******************************************************!*\
  !*** ./components/organisms/register/login/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../login */ "./components/organisms/login/index.tsx");
/* harmony import */ var _molecules_theme_ThemeButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../molecules/theme/ThemeButton */ "./components/molecules/theme/ThemeButton.tsx");
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../atoms/Button */ "./components/atoms/Button.tsx");


var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/components/organisms/register/login/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 0 auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 80px auto 50px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var RegisterLogin = function RegisterLogin(props) {
  var title = props.title,
      onConsent = props.onConsent;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      canAdd = _React$useState2[0],
      setCanAdd = _React$useState2[1];

  var handleCheck = function handleCheck(value) {
    setCanAdd(value);
  };

  var handleConsent = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    onConsent();
    localStorage.setItem('isConsent', 'true');
  }, [onConsent]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_login__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: title,
    onChangeCheck: handleCheck,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(AddButton, {
    width: '400px',
    height: '80px',
    disable: !canAdd,
    onClick: handleConsent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\u58F0\u306E\u8FFD\u52A0"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: '/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(BackButton, {
    width: '400px',
    height: '80px',
    styleType: "cancel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "\u623B\u308B")));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterLogin);
var AddButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"])(_molecules_theme_ThemeButton__WEBPACK_IMPORTED_MODULE_6__["default"])(_templateObject());
var BackButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"])(_atoms_Button__WEBPACK_IMPORTED_MODULE_7__["default"])(_templateObject2());

/***/ })

})
//# sourceMappingURL=register.js.c6922a9ed0cbb056617b.hot-update.js.map