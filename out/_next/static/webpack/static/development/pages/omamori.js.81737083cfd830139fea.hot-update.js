webpackHotUpdate("static/development/pages/omamori.js",{

/***/ "./components/molecules/Footer.tsx":
/*!*****************************************!*\
  !*** ./components/molecules/Footer.tsx ***!
  \*****************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./components/molecules/Menu.tsx");
/* harmony import */ var _shares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shares */ "./components/molecules/shares/index.tsx");
/* harmony import */ var _assets_utils_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/utils/share */ "./assets/utils/share.ts");

var _jsxFileName = "/Users/itabashi/Documents/git/iemong/skett/components/molecules/Footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 510px;\n    margin: 0 auto 160px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background-color: #fff;\n    text-align: center;\n    padding: 80px 0 160px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Footer = function Footer() {
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_3__["MenuContents"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(ShareContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_shares__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClickTwitter: function onClickTwitter() {
      var intent = Object(_assets_utils_share__WEBPACK_IMPORTED_MODULE_5__["createTwitterIntent"])({
        url: location.href,
        text: '',
        hashtags: ''
      });
      window.open(intent);
    },
    onClickFacebook: function onClickFacebook() {
      var intent = Object(_assets_utils_share__WEBPACK_IMPORTED_MODULE_5__["createFacebookIntent"])(location.href);
      window.open(intent);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx("img", {
    src: "/img/fukko-design.png",
    alt: "fukko design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("img", {
    src: "/img/jvoad.png",
    alt: "jvoad",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_3__["Logo"], {
    src: "/img/logo_gray.png",
    alt: "\u30ED\u30B4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_3__["Copyright"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\xA9 FUKKO DESIGN All Rights Reserved."));
};
var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].footer(_templateObject());
var ShareContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());

/***/ })

})
//# sourceMappingURL=omamori.js.81737083cfd830139fea.hot-update.js.map