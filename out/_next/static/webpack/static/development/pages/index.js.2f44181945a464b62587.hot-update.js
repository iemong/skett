webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/organisms/tab/index.tsx":
/*!********************************************!*\
  !*** ./components/organisms/tab/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _assets_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/constant */ "./assets/constant.ts");
/* harmony import */ var _reducers_tab_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../reducers/tab/actions */ "./reducers/tab/actions.ts");
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/Button */ "./components/atoms/Button.tsx");


var _jsxFileName = "/Users/itabashi/Documents/git/iemong/skett/components/organisms/tab/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-decoration: none;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    text-align: left;\n    color: #fff;\n    line-height: 1.2;\n    font-size: 40px;\n    white-space: pre-wrap;\n    margin-bottom: 24px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 40px 60px;\n    box-sizing: border-box;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 690px;\n    &[data-side='help'] {\n        background-image: linear-gradient(to left, #00b4ed, #0091db);\n    }\n    &[data-side='support'] {\n        background-image: linear-gradient(to left, #35b597, #00a968);\n    }\n    &[data-side='organization'] {\n        background-image: linear-gradient(to left, #e85625, #fd7823);\n    }\n    margin: 40px auto;\n    border-radius: 16px;\n    overflow: hidden;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    & > div {\n        display: flex;\n        flex-wrap: wrap;\n        max-width: 780px;\n        width: 100%;\n        margin: 0 auto;\n    }\n\n    & > div > div {\n        width: calc(100% / 2 - 16px);\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 11px;\n\n    &[data-tab='help'] {\n        background-image: linear-gradient(to right, #00b4ed, #0091db);\n    }\n    &[data-tab='support'] {\n        background-image: linear-gradient(to right, #1aab92 33%, #00a968 66%);\n    }\n    &[data-tab='organization'] {\n        background-image: linear-gradient(to right, #ef6123 0%, #ef6123 66%, #e85625 100%);\n    }\n\n    @media (min-width: 751px) {\n        height: 6px;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: absolute;\n    width: 250px;\n    height: 81px;\n    box-sizing: border-box;\n    z-index: ", ";\n    background-repeat: no-repeat;\n    background-size: contain;\n    opacity: 0.5;\n    cursor: pointer;\n\n    &[data-selected='true'] {\n        /* background-image: url(/img/tab_support_on.png); */\n        z-index: ", ";\n        pointer-events: none;\n        opacity: 1;\n    }\n\n    @media (min-width: 751px) {\n        width: 260px;\n        height: 45px;\n\n        &[data-selected='true'] {\n        }\n    }\n\n    &[data-tab='help'] {\n        left: 0;\n        background-image: url(/img/tab_help_sp.png);\n\n        @media (min-width: 751px) {\n            background-image: url(/img/tab_help_pc.png);\n        }\n    }\n    &[data-tab='support'] {\n        left: 0;\n        right: 0;\n        width: 270px;\n        margin: 0 auto;\n        background-image: url(/img/tab_support_sp.png);\n\n        @media (min-width: 751px) {\n            background-image: url(/img/tab_support_pc.png);\n        }\n    }\n    &[data-tab='organization'] {\n        right: 0;\n        background-image: url(/img/tab_organization_sp.png);\n\n        @media (min-width: 751px) {\n            background-image: url(/img/tab_organization_pc.png);\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    max-width: 780px;\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    height: 91px;\n    background-color: #dbdcdc;\n    @media (min-width: 751px) {\n        height: 46px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Tab = function Tab(props) {
  var helpContents = props.helpContents,
      supportContents = props.supportContents,
      organizationContents = props.organizationContents,
      onClickHelp = props.onClickHelp,
      onClickSupport = props.onClickSupport,
      onClickOrganization = props.onClickOrganization,
      className = props.className,
      tabSide = props.tabSide;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.rootReducer.tab;
  }),
      side = _useSelector.side;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](tabSide),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      tabName = _React$useState2[0],
      setTabName = _React$useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var actions = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () {
    return Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_reducers_tab_actions__WEBPACK_IMPORTED_MODULE_8__, dispatch);
  }, [dispatch]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    setTabName(side);
  }, [side]);

  var changeTab = function changeTab(side) {
    if (router.pathname !== '/') {
      return;
    }

    setTabName(side);
    actions.update(side);

    if (side === 'help') {
      onClickHelp === null || onClickHelp === void 0 ? void 0 : onClickHelp();
    }

    if (side === 'support') {
      onClickSupport === null || onClickSupport === void 0 ? void 0 : onClickSupport();
    }

    if (side === 'organization') {
      onClickOrganization === null || onClickOrganization === void 0 ? void 0 : onClickOrganization();
    }
  };

  var styleType = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () {
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
  }, [side]);
  return __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(TabInner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(Tabs, {
    onClick: function onClick() {
      return changeTab('help');
    },
    "data-selected": tabName === 'help',
    "data-tab": "help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(Tabs, {
    onClick: function onClick() {
      return changeTab('support');
    },
    "data-selected": tabName === 'support',
    "data-tab": "support",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx(Tabs, {
    onClick: function onClick() {
      return changeTab('organization');
    },
    "data-selected": tabName === 'organization',
    "data-tab": "organization",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })), __jsx(TabBorder, {
    "data-tab": tabName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(InsuranceCard, {
    "data-side": side,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(TextBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, '活動に参加するには\nこちらの保険をご利用ください'), __jsx(Link, {
    href: '/omamori',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    width: '270px',
    height: '50px',
    styleType: styleType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "\u4FDD\u967A\u306E\u5185\u5BB9\u306F\u3053\u3061\u3089")))), __jsx(ContentsContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, tabName === 'help' && helpContents, tabName === 'support' && supportContents, tabName === 'organization' && organizationContents)));
};

var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
var TabInner = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2());
var Tabs = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject3(), _assets_constant__WEBPACK_IMPORTED_MODULE_7__["Z_INDEX_LIST"].TAB_BACK, _assets_constant__WEBPACK_IMPORTED_MODULE_7__["Z_INDEX_LIST"].TAB_FRONT);
var TabBorder = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject4());
var ContentsContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject5());
var InsuranceCard = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject6());
var TextBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject7());
var Description = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].p(_templateObject8());
var Link = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].a(_templateObject9());
/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ })

})
//# sourceMappingURL=index.js.2f44181945a464b62587.hot-update.js.map