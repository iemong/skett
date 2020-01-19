webpackHotUpdate("static/development/pages/posts/[postId].js",{

/***/ "./components/organisms/post/Applicant.tsx":
/*!*************************************************!*\
  !*** ./components/organisms/post/Applicant.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _molecules_theme_ThemeTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/theme/ThemeTitle */ "./components/molecules/theme/ThemeTitle.tsx");

var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/components/organisms/post/Applicant.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject13() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 41px;\n    height: 41px;\n    background-image: url(/img/svg/icn_facebook_off.svg);\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 41px;\n    height: 33px;\n    background-image: url(/img/svg/icn_twitter_off.svg);\n    margin-right: 24px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    align-items: center;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 22px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    width: 67px;\n    height: 67px;\n    margin-right: 24px;\n    border-radius: 50%;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    align-items: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    justify-content: space-between;\n    width: 690px;\n    margin: 0 auto 40px;\n    padding: 36px;\n    box-sizing: border-box;\n    background-color: #fff;\n    border: 3px solid ", ";\n    border-radius: 14px;\n    &:last-of-type {\n        margin-bottom: 0;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 120px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 22px;\n    line-height: 1.75;\n    text-align: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 45px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 600px;\n    margin: 60px auto 70px;\n    padding: 75px 40px 75px;\n    background-color: #fff;\n    border-radius: 16px;\n    box-sizing: border-box;\n    overflow: hidden;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Applicant = function Applicant(props) {
  var users = props.users,
      side = props.side;
  var usersElm = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    if (!users) return;
    return users.reverse().map(function (user) {
      return __jsx(UserWrapper, {
        key: user.uid,
        side: side,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(User, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(Icon, {
        src: user.photoURL || '/img/icn_default.png',
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), __jsx(UserInfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx(UserName, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, user.displayName))), __jsx(SnsWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx(Twitter, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), __jsx(Facebook, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })));
    });
  }, [side, users]);
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(TitleBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\u3053\u306E\u52DF\u96C6\u306B\u5FDC\u52DF\u3057\u305F\u4EBA"), __jsx(Lead, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "\u983C\u307F\u305F\u3044\u4EBA\u306B\u3001SNS\u3067", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), "\u76F4\u63A5\u9023\u7D61\u3092\u3068\u3063\u3066\u307F\u307E\u3057\u3087\u3046\u3002")), __jsx(Users, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, users && usersElm));
};

/* harmony default export */ __webpack_exports__["default"] = (Applicant);
var Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var TitleBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var Title = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_molecules_theme_ThemeTitle__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject3());
var Lead = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject4());
var Users = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5());
var UserWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6(), function (props) {
  return props.side === 'help' ? '#0091DB' : '#00A968';
});
var User = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7());
var Icon = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject8());
var UserInfo = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject9());
var UserName = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject10());
var SnsWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject11());
var Twitter = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject12());
var Facebook = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject13());

/***/ })

})
//# sourceMappingURL=[postId].js.a33a7f535356326d6e45.hot-update.js.map