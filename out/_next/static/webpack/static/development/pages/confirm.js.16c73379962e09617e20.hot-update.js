webpackHotUpdate("static/development/pages/confirm.js",{

/***/ "./components/templates/Confirm.tsx":
/*!******************************************!*\
  !*** ./components/templates/Confirm.tsx ***!
  \******************************************/
/*! exports provided: Confirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Confirm", function() { return Confirm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../atoms/Button */ "./components/atoms/Button.tsx");
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/Main */ "./components/templates/layouts/Main.tsx");
/* harmony import */ var _reducers_tab_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/tab/actions */ "./reducers/tab/actions.ts");

var _jsxFileName = "/Users/itabashi/Documents/git/iemong/skett/components/templates/Confirm.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 400px;\n    margin: 0 auto 80px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: space-between;\n    width: 480px;\n    height: calc(120px * 3 + 40px * 2);\n    margin: 60px auto 120px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 12px;\n    color: #666;\n\n    @media (min-width: 751px) {\n        font-size: 24px;\n    }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    border: none;\n    width: 540px;\n    height: 2px;\n    margin: 80px auto 80px;\n    background-color: #ccc;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 540px;\n    margin: 20px auto 0;\n    color: #aaa;\n    font-size: 8px;\n    text-align: left;\n    line-height: 1.5;\n\n    @media (min-width: 751px) {\n        font-size: 16px;\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    width: 20px;\n    height: 20px;\n    transform: translateX(120px) rotate(45deg);\n\n    &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        display: block;\n        width: 100%;\n        height: 2px;\n        background-color: #fff;\n    }\n    &::after {\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        display: block;\n        width: 2px;\n        height: 100%;\n        background-color: #fff;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    appearance: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    width: 560px;\n    height: 120px;\n    border-radius: 60px;\n    margin: 0 auto;\n    background-color: #5dc3de;\n    font-size: 30px;\n    color: #fff;\n    text-decoration: none;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 525px;\n    margin-bottom: 80px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 160px;\n    font-size: 12px;\n    color: #666;\n    line-height: 1.5;\n\n    @media (min-width: 751px) {\n        font-size: 24px;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    margin-bottom: 60px;\n    padding-bottom: 33px;\n    font-size: 38px;\n    text-align: center;\n    color: #000;\n\n    &::before {\n        content: '';\n        position: absolute;\n        left: 50%;\n        bottom: 0;\n        width: 100px;\n        height: 5px;\n        background-image: linear-gradient(to left, #00b4ed, #0091db);\n        transform: translateX(-50%);\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 292px;\n    height: 86px;\n    margin-bottom: 60px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: calc(100% - 40px);\n    margin: 60px auto 80px;\n    padding: 80px 0 40px;\n    border-radius: 12px;\n    background-color: #fff;\n    text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Confirm = function Confirm() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var actions = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_reducers_tab_actions__WEBPACK_IMPORTED_MODULE_8__, dispatch);
  }, [dispatch]);

  var moveToHome = function moveToHome(side) {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    actions.update(side);
  };

  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(MainImg, {
    src: "/img/omamori_hero.png",
    alt: "\u3057\u3048\u3093\u306E\u304A\u307E\u3082\u308A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "\u300C\u3057\u3048\u3093\u306E\u304A\u307E\u3082\u308A\u300D\u306F\u3001", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), "\u88AB\u707D\u5730\u306E\u52A9\u3063\u4EBA\u30DE\u30C3\u30C1\u30F3\u30B0\u300C\u30B9\u30B1\u30C3\u30C8\u300D\u3067\u52DF\u96C6\u3055\u308C\u305F", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), "\u6D3B\u52D5\u304C\u5BFE\u8C61\u306B\u306A\u308B\u4FDD\u967A\u3067\u3059\u3002", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), "\u3053\u3061\u3089\u306E\u30DA\u30FC\u30B8\u3092\u78BA\u8A8D\u3044\u305F\u3060\u3051\u308C\u3070\u3001", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), "\u4FDD\u967A\u306B\u52A0\u5165\u3067\u304D\u307E\u3059\u3002"), __jsx(ApplyButton, {
    href: "https://s-omamori.jp/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\u78BA\u8A8D\u3057\u3066\u7533\u3057\u8FBC\u307F\u306B\u623B\u308B", __jsx(Arrow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx(HorizontalLine, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\u6D3B\u52D5\u3092\u77E5\u308A\u305F\u3044\u4EBA\u306F\u4EE5\u4E0B\u3092\u3054\u89A7\u304F\u3060\u3055\u3044"), __jsx(ButtonContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleType: "default",
    width: "100%",
    height: "120px",
    onClick: function onClick() {
      return moveToHome('help');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\u73FE\u5730\u306E\u58F0"), __jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleType: "invert",
    width: "100%",
    height: "120px",
    onClick: function onClick() {
      return moveToHome('support');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\u652F\u63F4\u306E\u58F0"), __jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleType: "organization",
    width: "100%",
    height: "120px",
    onClick: function onClick() {
      return moveToHome('organization');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\u56E3\u4F53\u306E\u58F0"))), __jsx(BackButtonContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    width: '400px',
    height: '80px',
    styleType: "cancel",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "\u623B\u308B"))));
};
var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var MainImg = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject2());
var Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject3());
var Description = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject4());
var Logo = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject5());
var ApplyButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject6());
var Arrow = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7());
var Annotation = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject8());
var HorizontalLine = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].hr(_templateObject9());
var Paragraph = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject10());
var ButtonContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject11());
var BackButtonContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject12());

/***/ })

})
//# sourceMappingURL=confirm.js.16c73379962e09617e20.hot-update.js.map