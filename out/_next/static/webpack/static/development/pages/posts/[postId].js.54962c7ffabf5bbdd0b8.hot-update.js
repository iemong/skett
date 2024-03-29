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

var _jsxFileName = "/Users/itabashi/git/iemong/skett/components/templates/posts/detail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    position: relative;\n    margin-top: 8px;\n    padding-right: 30px;\n    font-size: 20px;\n    font-weight: bold;\n    text-align: right;\n    text-decoration: none;\n\n    &::after {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 12px;\n        right: 0;\n        width: 12px;\n        height: 12px;\n        border-top: 2px solid;\n        border-right: 2px solid;\n        transform: rotate(45deg);\n    }\n\n    [data-type='help'] & {\n        color: #00B4ED;\n    }\n    [data-type='support'] & {\n        color: #00A968;\n    }\n    [data-type='organization'] & {\n        color: #e85625;\n    }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 20px;\n    line-height: 36px;\n    color: #999999;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 40px;\n    font-size: 30px;\n    font-weight: bold;\n    text-align: center;\n    color: #999999;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 690px;\n    border-radius: 16px;\n    overflow: hidden;\n    box-sizing: border-box;\n    margin: 0 auto 40px;\n    padding: 48px;\n    border: 4px solid;\n    border-radius: 16px;\n    background: #fff;\n\n    &[data-type='help'] {\n        border-color: #00B4ED;\n    }\n    &[data-type='support'] {\n        border-color: #00A968;\n    }\n    &[data-type='organization'] {\n        border-color: #e85625;\n    }\n"]);

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
        lineNumber: 64
      },
      __self: this
    }, __jsx(DetailCardWithMargin, {
      imgUrl: data.imageUrl,
      title: data.title,
      description: data.description,
      user: data.user,
      side: side,
      updateDate: data.updateDate,
      isEnd: data.isEnd,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), __jsx(Notice, {
      "data-type": side,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(NoticeTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "\u5FDC\u52DF\u306E\u969B\u306E\u6CE8\u610F"), __jsx(NoticeText, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "\u7533\u3057\u8FBC\u3080\u524D\u306B\u3001\u81EA\u6CBB\u4F53\u306E\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u306E\u53D7\u3051\u5165\u308C\u72B6\u6CC1\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u8A73\u3057\u304F\u306F\u3001\u5168\u56FD\u793E\u4F1A\u798F\u7949\u5354\u8B70\u4F1A\u306E\u88AB\u707D\u5730\u652F\u63F4\u3001\u707D\u5BB3\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u60C5\u5831\u306E\u30DA\u30FC\u30B8\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002", __jsx(NoticeLink, {
      href: "https://www.saigaivc.com/archives/",
      target: "_blank",
      rel: "noopener",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "\u53D7\u3051\u5165\u308C\u72B6\u6CC1\u3092\u78BA\u8A8D\u3059\u308B"))), __jsx(ShareWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
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
        lineNumber: 85
      },
      __self: this
    })), isMyPost && __jsx(_organisms_post_Applicant__WEBPACK_IMPORTED_MODULE_13__["default"], {
      users: data === null || data === void 0 ? void 0 : data.applicants,
      side: side,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
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
        lineNumber: 103
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
        lineNumber: 110
      },
      __self: this
    }, __jsx(EditButton, {
      width: '400px',
      height: '80px',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
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
        lineNumber: 115
      },
      __self: this
    }, "\u3053\u306E\u52DF\u96C6\u3092\u524A\u9664\u3059\u308B")) : data.side !== 'organization' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: '/apply',
        query: {
          postId: data.id
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx(ApplyButton, {
      width: '400px',
      height: '80px',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "\u5FDC\u52DF\u3059\u308B")) : null, __jsx(BackButton, {
      width: '400px',
      height: '80px',
      styleType: "cancel",
      onClick: function onClick() {
        return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "\u623B\u308B"));
  }, [data, isMyPost, side, updatePost, user]);
  var tabElement = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    if (side === undefined) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null);
    }

    return __jsx(_organisms_tab__WEBPACK_IMPORTED_MODULE_8__["default"], {
      tabSide: side,
      helpContents: postElement,
      supportContents: postElement,
      organizationContents: postElement,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    });
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
          lineNumber: 162
        },
        __self: this
      });
    }
  }

  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
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
var NoticeTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].h3(_templateObject10());
var NoticeText = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject11());
var NoticeLink = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject12());

/***/ })

})
//# sourceMappingURL=[postId].js.54962c7ffabf5bbdd0b8.hot-update.js.map