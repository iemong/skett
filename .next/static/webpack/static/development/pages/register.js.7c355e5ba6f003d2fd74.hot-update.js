webpackHotUpdate("static/development/pages/register.js",{

/***/ "./components/organisms/register/confirm/index.tsx":
/*!*********************************************************!*\
  !*** ./components/organisms/register/confirm/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _molecules_detailCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../molecules/detailCard */ "./components/molecules/detailCard/index.tsx");



var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/components/organisms/register/confirm/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    width: 400px;\n    height: 80px;\n    margin: 0 auto;\n    background-image: url(/img/btn_back.png);\n    color: transparent;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    margin: 0 auto 50px;\n    width: 400px;\n    height: 80px;\n    background-image: url(/img/btn_register_help.png);\n    color: transparent;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    padding-bottom: 33px;\n    font-size: 38px;\n    text-align: center;\n    color: #000;\n    &::before {\n        content: '';\n        position: absolute;\n        left: 50%;\n        bottom: 0;\n        width: 100px;\n        height: 5px;\n        background-image: linear-gradient(to left, #00b4ed, #0091db);\n        transform: translateX(-50%);\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 600px;\n    height: 230px;\n    margin: 0 auto 80px;\n    border-radius: 16px;\n    background-color: #fff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 60px auto 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Confirm = function Confirm(props) {
  var onSubmit = props.onSubmit,
      onBack = props.onBack,
      cardProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["onSubmit", "onBack"]);

  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(ConfirmTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(ConfirmTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "\u5185\u5BB9\u78BA\u8A8D")), __jsx(_molecules_detailCard__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, cardProps, {
    side: 'help',
    userId: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx(RegisterButton, {
    onClick: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "\u58F0\u3092\u4F5C\u308B"), __jsx(BackButton, {
    onClick: onBack,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "\u623B\u308B"));
};

/* harmony default export */ __webpack_exports__["default"] = (Confirm);
var Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var ConfirmTitleWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
var ConfirmTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].h1(_templateObject3());
var RegisterButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject4());
var BackButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject5());

/***/ })

})
//# sourceMappingURL=register.js.7c355e5ba6f003d2fd74.hot-update.js.map