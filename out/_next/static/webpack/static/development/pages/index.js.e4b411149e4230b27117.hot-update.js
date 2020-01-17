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
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _assets_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/constant */ "./assets/constant.ts");
/* harmony import */ var _reducers_tab_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../reducers/tab/actions */ "./reducers/tab/actions.ts");


var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/components/organisms/tab/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: absolute;\n    width: 750px;\n    height: 100%;\n    box-sizing: border-box;\n    background-image: url(/img/tab_support_off.png);\n    z-index: ", ";\n    &[data-selected='true'] {\n        background-image: url(/img/tab_support_on.png);\n        z-index: ", ";\n        pointer-events: none;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: absolute;\n    width: 750px;\n    height: 100%;\n    box-sizing: border-box;\n    background-image: url(/img/tab_help_off.png);\n    z-index: ", ";\n    &[data-selected='true'] {\n        background-image: url(/img/tab_help_on.png);\n        z-index: ", ";\n        pointer-events: none;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    height: 91px;\n"]);

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









var Tab = function Tab(props) {
  var leftContent = props.leftContent,
      rightContent = props.rightContent,
      onClickLeft = props.onClickLeft,
      onClickRight = props.onClickRight,
      className = props.className,
      tabSide = props.tabSide;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](tabSide),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      tabName = _React$useState2[0],
      setTabName = _React$useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.rootReducer.tab;
  }),
      side = _useSelector.side;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var actions = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () {
    return Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])(_reducers_tab_actions__WEBPACK_IMPORTED_MODULE_8__, dispatch);
  }, [dispatch]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (router.query.side && router.query.side !== side) {
      actions.update(router.query.side);
    }
  }, [actions, router, side]);
  var helpClickHandler = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    if (router.pathname !== '/') return;
    setTabName('left');
    actions.update('help');
    if (onClickLeft) onClickLeft();
    if (!rightContent) next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
  }, [actions, onClickLeft, rightContent, router.pathname]);
  var supportClickHandler = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    if (router.pathname !== '/') return;
    setTabName('right');
    actions.update('support');
    if (onClickRight) onClickRight();
    if (!leftContent) next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
  }, [actions, leftContent, onClickRight, router.pathname]);
  return __jsx(Tabs, {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(TabList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(TabHelp, {
    onClick: helpClickHandler,
    "data-selected": tabName === 'left',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(TabSupport, {
    onClick: supportClickHandler,
    "data-selected": tabName === 'right',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), tabName === 'left' && __jsx(TabPanel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, leftContent) || tabName === 'right' && __jsx(TabPanel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, rightContent));
};

/* harmony default export */ __webpack_exports__["default"] = (Tab);
var Tabs = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var TabList = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var TabHelp = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3(), _assets_constant__WEBPACK_IMPORTED_MODULE_7__["Z_INDEX_LIST"].TAB_FRONT, _assets_constant__WEBPACK_IMPORTED_MODULE_7__["Z_INDEX_LIST"].TAB_FRONT);
var TabSupport = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4(), _assets_constant__WEBPACK_IMPORTED_MODULE_7__["Z_INDEX_LIST"].TAB_BACK, _assets_constant__WEBPACK_IMPORTED_MODULE_7__["Z_INDEX_LIST"].TAB_FRONT);
var TabPanel = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject5());

/***/ })

})
//# sourceMappingURL=index.js.e4b411149e4230b27117.hot-update.js.map