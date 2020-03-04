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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _molecules_detailCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../molecules/detailCard */ "./components/molecules/detailCard/index.tsx");
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../atoms/Button */ "./components/atoms/Button.tsx");
/* harmony import */ var _molecules_theme_ThemeButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../molecules/theme/ThemeButton */ "./components/molecules/theme/ThemeButton.tsx");
/* harmony import */ var _molecules_theme_ThemeTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../molecules/theme/ThemeTitle */ "./components/molecules/theme/ThemeTitle.tsx");
/* harmony import */ var _assets_utils_makeOgp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../assets/utils/makeOgp */ "./assets/utils/makeOgp.ts");




var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/components/organisms/register/confirm/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4__["createElement"];

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 0 auto;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 0 auto 50px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

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
      user = props.user,
      side = props.side,
      _props$confirmText = props.confirmText,
      confirmText = _props$confirmText === void 0 ? '声をつくる' : _props$confirmText,
      imgUrl = props.imgUrl,
      title = props.title,
      cardProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["onSubmit", "onBack", "user", "side", "confirmText", "imgUrl", "title"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"](''),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      imgSrc = _React$useState2[0],
      setImgSrc = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
    Object(_assets_utils_makeOgp__WEBPACK_IMPORTED_MODULE_10__["default"])({
      text: title,
      imageData: imgUrl,
      postType: side
    }).then(function (canvas) {
      setImgSrc(Object(_assets_utils_makeOgp__WEBPACK_IMPORTED_MODULE_10__["exportDataURL"])(canvas));
    });
  }, [imgUrl, side, title]);
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(ConfirmTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(ConfirmTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\u5185\u5BB9\u78BA\u8A8D")), __jsx(_molecules_detailCard__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, cardProps, {
    title: title,
    imgUrl: imgUrl,
    side: side,
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx(ConfirmTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(ConfirmTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "\u30B7\u30A7\u30A2\u3057\u305F\u6642\u306E\u898B\u3048\u65B9")), __jsx(Preview, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(PreviewImage, {
    src: imgSrc,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx(RegisterButton, {
    width: '400px',
    height: '80px',
    onClick: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, confirmText), __jsx(BackButton, {
    width: '400px',
    height: '80px',
    styleType: "cancel",
    onClick: onBack,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\u623B\u308B"));
};

/* harmony default export */ __webpack_exports__["default"] = (Confirm);
var Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
var ConfirmTitleWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2());
var ConfirmTitle = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"])(_molecules_theme_ThemeTitle__WEBPACK_IMPORTED_MODULE_9__["default"])(_templateObject3());
var Preview = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject4());
var PreviewImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].img(_templateObject5());
var RegisterButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"])(_molecules_theme_ThemeButton__WEBPACK_IMPORTED_MODULE_8__["default"])(_templateObject6());
var BackButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"])(_atoms_Button__WEBPACK_IMPORTED_MODULE_7__["default"])(_templateObject7());

/***/ })

})
//# sourceMappingURL=register.js.cbad67657ddece5e2f32.hot-update.js.map