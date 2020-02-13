webpackHotUpdate("static/development/pages/posts/[postId].js",{

/***/ "./components/templates/posts/detail.tsx":
/*!***********************************************!*\
  !*** ./components/templates/posts/detail.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/Main */ "./components/templates/layouts/Main.tsx");
/* harmony import */ var _organisms_tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../organisms/tab */ "./components/organisms/tab/index.tsx");
/* harmony import */ var _molecules_detailCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../molecules/detailCard */ "./components/molecules/detailCard/index.tsx");
/* harmony import */ var _molecules_theme_ThemeButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../molecules/theme/ThemeButton */ "./components/molecules/theme/ThemeButton.tsx");
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/Button */ "./components/atoms/Button.tsx");
/* harmony import */ var _hooks_useLogin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useLogin */ "./components/hooks/useLogin.tsx");
/* harmony import */ var _organisms_post_Applicant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../organisms/post/Applicant */ "./components/organisms/post/Applicant.tsx");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_tab_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../reducers/tab/actions */ "./reducers/tab/actions.ts");

var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/components/templates/posts/detail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 0 auto;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 0 auto 48px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 0 auto 48px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 80px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-top: 60px;\n    padding-bottom: 100px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
















var PostDetail = function PostDetail(props) {
  var data = props.data; // const { side } = useSelector((state: rootState) => state.rootReducer.tab)

  var side = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return data === null || data === void 0 ? void 0 : data.side;
  }, [data]);
  var user = Object(_hooks_useLogin__WEBPACK_IMPORTED_MODULE_11__["default"])();
  console.log(side);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var actions = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return Object(redux__WEBPACK_IMPORTED_MODULE_13__["bindActionCreators"])(_reducers_tab_actions__WEBPACK_IMPORTED_MODULE_14__, dispatch);
  }, [dispatch]);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    actions.update(side);
  }, [actions, side]);
  var isMyPost = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return (user === null || user === void 0 ? void 0 : user.uid) === (data === null || data === void 0 ? void 0 : data.user.uid);
  }, [data, user]);
  var postElement = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    var _data$user;

    if (!data || !side) return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, "Loading");
    return __jsx(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(DetailCardWithMargin, {
      imgUrl: data.imageUrl,
      title: data.title,
      description: data.description,
      user: data.user,
      side: side,
      updateDate: data.updateDate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), isMyPost && __jsx(_organisms_post_Applicant__WEBPACK_IMPORTED_MODULE_12__["default"], {
      users: data === null || data === void 0 ? void 0 : data.applicants,
      side: side,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), (user === null || user === void 0 ? void 0 : user.uid) === ((_data$user = data.user) === null || _data$user === void 0 ? void 0 : _data$user.uid) ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: '/edit',
        query: {
          postId: data.id,
          side: side
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(EditButton, {
      width: '400px',
      height: '80px',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "\u7DE8\u96C6\u3059\u308B")) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: '/apply',
        query: {
          postId: data.id
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(ApplyButton, {
      width: '400px',
      height: '80px',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "\u5FDC\u52DF\u3059\u308B")), __jsx(BackButton, {
      width: '400px',
      height: '80px',
      styleType: "cancel",
      onClick: function onClick() {
        return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "\u623B\u308B"));
  }, [data, isMyPost, side, user]);
  var tabElement = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return side === 'help' ? __jsx(_organisms_tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
      leftContent: postElement,
      tabSide: "left",
      onClickLeft: function onClickLeft() {
        return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }) : __jsx(_organisms_tab__WEBPACK_IMPORTED_MODULE_7__["default"], {
      rightContent: postElement,
      tabSide: "right",
      onClickRight: function onClickRight() {
        return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    });
  }, [postElement, side]);
  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, tabElement);
};

/* harmony default export */ __webpack_exports__["default"] = (PostDetail);
var Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var DetailCardWithMargin = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_molecules_detailCard__WEBPACK_IMPORTED_MODULE_8__["default"])(_templateObject2());
var EditButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_molecules_theme_ThemeButton__WEBPACK_IMPORTED_MODULE_9__["default"])(_templateObject3());
var ApplyButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_molecules_theme_ThemeButton__WEBPACK_IMPORTED_MODULE_9__["default"])(_templateObject4());
var BackButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_atoms_Button__WEBPACK_IMPORTED_MODULE_10__["default"])(_templateObject5());

/***/ })

})
//# sourceMappingURL=[postId].js.00fe142b0c692d0fc6af.hot-update.js.map