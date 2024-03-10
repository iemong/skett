webpackHotUpdate("static/development/pages/posts/[postId].js",{

/***/ "./components/molecules/detailCard/index.tsx":
/*!***************************************************!*\
  !*** ./components/molecules/detailCard/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_utils_convertLinkHTML__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/utils/convertLinkHTML */ "./assets/utils/convertLinkHTML.ts");

var _jsxFileName = "/Users/itabashi/git/iemong/skett/components/molecules/detailCard/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject16() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 41px;\n    height: 41px;\n    background-image: url(/img/svg/icn_facebook_off.svg);\n    &[data-active='true'] {\n        background-image: url(/img/svg/icn_facebook_on.svg);\n    }\n    cursor: pointer;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 41px;\n    height: 33px;\n    background-image: url(/img/svg/icn_twitter_off.svg);\n    margin-right: 24px;\n    &[data-active='true'] {\n        background-image: url(/img/svg/icn_twitter_on.svg);\n    }\n    cursor: pointer;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    align-items: center;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    margin-top: 10px;\n    font-size: 18px;\n    color: #fff;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 22px;\n    color: #fff;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    width: 67px;\n    height: 67px;\n    margin-right: 24px;\n    border-radius: 50%;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    align-items: center;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    padding-top: 30px;\n    border-top: 1px solid #fff;\n    box-sizing: border-box;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    text-align: left;\n    color: #fff;\n    font-size: 25px;\n    line-height: 1.5;\n    margin-bottom: 48px;\n    white-space: pre-wrap;\n\n    & a {\n        color: #fff;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    text-align: left;\n    color: #fff;\n    line-height: 1.2;\n    font-size: 48px;\n    margin-bottom: 24px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px 30px 45px 30px;\n    box-sizing: border-box;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    color: #fff;\n    font-size: 36px;\n    white-space: pre-wrap;\n    line-height: 1.5;\n    text-align: center;\n"]);

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    min-height: 386px;\n    background-color: #fff;\n"]);

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






var DetailCard = function DetailCard(props) {
  var imgUrl = props.imgUrl,
      title = props.title,
      description = props.description,
      side = props.side,
      user = props.user,
      updateDate = props.updateDate,
      isEnd = props.isEnd,
      className = props.className;
  console.log('user', user);
  return __jsx(Wrapper, {
    "data-side": side,
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, imgUrl && __jsx(ThumbnailWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(Thumbnail, {
    src: imgUrl,
    alt: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), isEnd && __jsx(ClosedThumbnailCover, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, 'この募集は\n終了しました')), __jsx(TextBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, title), __jsx(Description, {
    dangerouslySetInnerHTML: {
      __html: Object(_assets_utils_convertLinkHTML__WEBPACK_IMPORTED_MODULE_4__["convertLinkHTML"])(description)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(User, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, side !== 'organization' && __jsx(Icon, {
    src: user.photoURL || '/img/icn_default.png',
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(UserInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, side !== 'organization' && __jsx(UserName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, user.displayName), __jsx(UpdateDate, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, luxon__WEBPACK_IMPORTED_MODULE_3__["DateTime"].fromISO(updateDate).toFormat('yyyy/MM/dd HH:mm:ss')))), __jsx(SnsWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(Twitter, {
    "data-active": user.providerId === 'twitter.com',
    onClick: function onClick() {
      if (user.userName) {
        window.open("https://twitter.com/".concat(user.userName));
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(Facebook, {
    "data-active": user.providerId === 'facebook.com',
    onClick: function onClick() {
      window.open(user.link);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailCard);
var Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var ThumbnailWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var Thumbnail = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject3());
var ClosedThumbnailCover = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
var TextBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5());
var Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject6());
var Description = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject7());
var Footer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject8());
var User = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject9());
var Icon = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject10());
var UserInfo = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject11());
var UserName = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject12());
var UpdateDate = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].time(_templateObject13());
var SnsWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject14());
var Twitter = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject15());
var Facebook = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject16());

/***/ })

})
//# sourceMappingURL=[postId].js.a8ca3d117012b2f30bcf.hot-update.js.map