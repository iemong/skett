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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layouts/Main */ "./components/templates/layouts/Main.tsx");
/* harmony import */ var _organisms_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../organisms/tab */ "./components/organisms/tab/index.tsx");
/* harmony import */ var _molecules_detailCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../molecules/detailCard */ "./components/molecules/detailCard/index.tsx");
/* harmony import */ var _molecules_theme_ThemeButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../molecules/theme/ThemeButton */ "./components/molecules/theme/ThemeButton.tsx");
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../atoms/Button */ "./components/atoms/Button.tsx");
/* harmony import */ var _hooks_useLogin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useLogin */ "./components/hooks/useLogin.tsx");
/* harmony import */ var _organisms_post_Applicant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../organisms/post/Applicant */ "./components/organisms/post/Applicant.tsx");
/* harmony import */ var _reducers_tab_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../reducers/tab/actions */ "./reducers/tab/actions.ts");
/* harmony import */ var _molecules_shares__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../molecules/shares */ "./components/molecules/shares/index.tsx");
/* harmony import */ var _assets_utils_share__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../assets/utils/share */ "./assets/utils/share.ts");
/* harmony import */ var _molecules_theme_ThemeTitle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../molecules/theme/ThemeTitle */ "./components/molecules/theme/ThemeTitle.tsx");
/* harmony import */ var _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../assets/utils/firebaseApp */ "./assets/utils/firebaseApp.ts");
/* harmony import */ var _assets_constant__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../assets/constant */ "./assets/constant.ts");

var _jsxFileName = "/Users/itabashi/Documents/git/iemong/skett/components/templates/posts/detail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 690px;\n    border-radius: 16px;\n    overflow: hidden;\n    margin: 0 auto 40px;\n    border: 2px solid black;\n    border-radius: 16px;\n    &[data-type='help'] {\n        border-color: linear-gradient(to left, #00b4ed, #0091db);\n    }\n    &[data-type='support'] {\n        border-color: linear-gradient(to left, #35b597, #00a968);\n    }\n    &[data-type='organization'] {\n        border-color: linear-gradient(to left, #e85625, #fd7823);\n    }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 55px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 600px;\n    margin: 0 auto 80px;\n    padding: 70px 45px 70px;\n    border-radius: 16px;\n    background-color: #fff;\n    box-sizing: border-box;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 0 auto;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 0 auto 48px;\n"]);

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
  var data = props.data;
  var side = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return data === null || data === void 0 ? void 0 : data.side;
  }, [data]);
  var user = Object(_hooks_useLogin__WEBPACK_IMPORTED_MODULE_12__["default"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var actions = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])(_reducers_tab_actions__WEBPACK_IMPORTED_MODULE_14__, dispatch);
  }, [dispatch]);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (side) actions.update(side);
  }, [actions, side]);
  var isMyPost = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return (user === null || user === void 0 ? void 0 : user.uid) === (data === null || data === void 0 ? void 0 : data.user.uid);
  }, [data, user]);
  var db = _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_18__["default"].firestore();
  var docRef = db.collection(_assets_constant__WEBPACK_IMPORTED_MODULE_19__["COLLECTIONS"].POSTS);
  var updatePost = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (id, data) {
    docRef.doc(id).update(data).then(function () {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/mypage');
    });
  }, [docRef]);
  var postElement = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    var _data$user;

    if (!data || !side) return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, "Loading");
    return __jsx(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
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
        lineNumber: 64
      },
      __self: this
    }), __jsx(Notice, {
      "data-type": side,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "\u5FDC\u52DF\u306E\u969B\u306E\u6CE8\u610F"), __jsx(ShareWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "\u3053\u306E\u58F0\u3092\u30B7\u30A7\u30A2\u3059\u308B"), __jsx(_molecules_shares__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onClickTwitter: function onClickTwitter() {
        var intent = Object(_assets_utils_share__WEBPACK_IMPORTED_MODULE_16__["createTwitterIntent"])({
          url: data.url,
          text: '',
          hashtags: '被災地のスケット'
        });
        window.open(intent);
      },
      onClickFacebook: function onClickFacebook() {
        var intent = Object(_assets_utils_share__WEBPACK_IMPORTED_MODULE_16__["createFacebookIntent"])(data.url);
        window.open(intent);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })), isMyPost && __jsx(_organisms_post_Applicant__WEBPACK_IMPORTED_MODULE_13__["default"], {
      users: data === null || data === void 0 ? void 0 : data.applicants,
      side: side,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), (user === null || user === void 0 ? void 0 : user.uid) === ((_data$user = data.user) === null || _data$user === void 0 ? void 0 : _data$user.uid) ? __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(EditButton, {
      width: '400px',
      height: '80px',
      onClick: function onClick() {
        return updatePost(data.id, {
          isEnd: true
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "\u52DF\u96C6\u7D42\u4E86\u3059\u308B"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: '/edit',
        query: {
          postId: data.id,
          side: side
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(EditButton, {
      width: '400px',
      height: '80px',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "\u7DE8\u96C6\u3059\u308B")), __jsx(DeleteButton, {
      styleType: 'organization',
      width: '400px',
      height: '80px',
      onClick: function onClick() {
        return updatePost(data.id, {
          isDeleted: true
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "\u3053\u306E\u52DF\u96C6\u3092\u524A\u9664\u3059\u308B")) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: '/apply',
        query: {
          postId: data.id
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx(ApplyButton, {
      width: '400px',
      height: '80px',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
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
        lineNumber: 123
      },
      __self: this
    }, "\u623B\u308B"));
  }, [data, isMyPost, side, updatePost, user]);
  var tabElement = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    if (side === 'help') {
      return __jsx(_organisms_tab__WEBPACK_IMPORTED_MODULE_8__["default"], {
        helpContents: postElement,
        tabSide: "help",
        onClickHelp: function onClickHelp() {
          return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      });
    }

    if (side === 'support') {
      return __jsx(_organisms_tab__WEBPACK_IMPORTED_MODULE_8__["default"], {
        supportContents: postElement,
        tabSide: "support",
        onClickSupport: function onClickSupport() {
          return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      });
    }

    if (side === 'organization') {
      return __jsx(_organisms_tab__WEBPACK_IMPORTED_MODULE_8__["default"], {
        organizationContents: postElement,
        tabSide: "organization",
        onClickOrganization: function onClickOrganization() {
          return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      });
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null);
  }, [postElement, side]);
  var shouldRedirect = (user === null || user === void 0 ? void 0 : user.uid) !== (data === null || data === void 0 ? void 0 : data.user.uid);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (user) {
      if ((data === null || data === void 0 ? void 0 : data.isDeleted) && shouldRedirect) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
      }
    }
  }, [data, user]);

  if (data === null || data === void 0 ? void 0 : data.isDeleted) {
    if (shouldRedirect) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      });
    }
  }

  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, tabElement);
};

/* harmony default export */ __webpack_exports__["default"] = (PostDetail);
var Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var DetailCardWithMargin = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_molecules_detailCard__WEBPACK_IMPORTED_MODULE_9__["default"])(_templateObject2());
var EditButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_molecules_theme_ThemeButton__WEBPACK_IMPORTED_MODULE_10__["default"])(_templateObject3());
var ApplyButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_molecules_theme_ThemeButton__WEBPACK_IMPORTED_MODULE_10__["default"])(_templateObject4());
var DeleteButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_atoms_Button__WEBPACK_IMPORTED_MODULE_11__["default"])(_templateObject5());
var BackButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_atoms_Button__WEBPACK_IMPORTED_MODULE_11__["default"])(_templateObject6());
var ShareWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7());
var Title = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_molecules_theme_ThemeTitle__WEBPACK_IMPORTED_MODULE_17__["default"])(_templateObject8());
var Notice = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject9());

/***/ })

})
//# sourceMappingURL=[postId].js.d374bc9cbc9b45dccda4.hot-update.js.map