webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/molecules/card/index.tsx":
/*!*********************************************!*\
  !*** ./components/molecules/card/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/Button */ "./components/atoms/Button.tsx");

var _jsxFileName = "/Users/itabashi/Documents/git/iemong/skett/components/molecules/card/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-decoration: none;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    text-align: left;\n    color: #fff;\n    line-height: 1.2;\n    font-size: 48px;\n    margin-bottom: 24px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px 30px 30px 30px;\n    box-sizing: border-box;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background-color: #fff;\n\n    &::before {\n        display: block;\n        width: 100%;\n        padding-bottom: 56.25%;\n        content: '';\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 690px;\n    &[data-side='help'] {\n        background-image: linear-gradient(to left, #00b4ed, #0091db);\n    }\n    &[data-side='support'] {\n        background-image: linear-gradient(to left, #35b597, #00a968);\n    }\n    &[data-side='organization'] {\n        background-image: linear-gradient(to left, #e85625, #fd7823);\n    }\n    margin: 0 auto 40px;\n    border-radius: 16px;\n    overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Card = function Card(props) {
  var imgUrl = props.imgUrl,
      description = props.description,
      link = props.link,
      side = props.side;

  var styleType = function () {
    if (side === 'help') {
      return 'secondary';
    }

    if (side === 'support') {
      return 'invertSecondary';
    }

    if (side === 'organization') {
      return 'organizationSecondary';
    }

    return 'secondary';
  }();

  return __jsx(Wrapper, {
    "data-side": side,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, imgUrl && __jsx(ThumbnailWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(Thumbnail, {
    src: imgUrl,
    alt: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx(TextBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, description), __jsx(Link, {
    href: "".concat(link, "?side=").concat(side),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(DetailButton, {
    width: '270px',
    height: '50px',
    styleType: styleType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "\u8A73\u3057\u304F\u898B\u308B"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);
var Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var ThumbnailWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var Thumbnail = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject3());
var TextBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
var Description = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject5());
var DetailButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_atoms_Button__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject6());
var Link = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject7());

/***/ })

})
//# sourceMappingURL=index.js.c04648c57c8f87e21feb.hot-update.js.map