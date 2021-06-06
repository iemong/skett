webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/templates/home/index.tsx":
/*!*********************************************!*\
  !*** ./components/templates/home/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/Main */ "./components/templates/layouts/Main.tsx");
/* harmony import */ var _organisms_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../organisms/tab */ "./components/organisms/tab/index.tsx");
/* harmony import */ var _molecules_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../molecules/card */ "./components/molecules/card/index.tsx");
/* harmony import */ var _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/utils/firebaseApp */ "./assets/utils/firebaseApp.ts");
/* harmony import */ var _assets_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/constant */ "./assets/constant.ts");




var _jsxFileName = "/Users/itabashi/Documents/git/iemong/skett/components/templates/home/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4__["createElement"];

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    @media (min-width: 751px) {\n        & > div > div > div:nth-child(2) {\n            display: flex;\n            flex-wrap: wrap;\n            max-width: 780px;\n            width: 100%;\n            margin: 0 auto;\n            &:after {\n                width: calc(100% / 2 - 32px);\n                display: block;\n                content: '';\n            }\n\n            & > div {\n                width: calc(100% / 2 - 32px);\n            }\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 120px;\n    background-image: linear-gradient(to right, #e8563a 0%, #e53a2b 100%);\n    color: #fff;\n    font-size: 28px;\n    font-weight: bold;\n    text-decoration: none;\n\n    &::before {\n        content: '+';\n        font-size: 48px;\n        font-weight: normal;\n        margin-right: 8px;\n    }\n\n    @media (min-width: 751px) {\n        max-width: 780px;\n        height: 60px;\n        left: 0;\n        right: 0;\n        margin: 0 auto;\n        font-size: 14px;\n\n        &::before {\n            font-size: 24px;\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-top: 60px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var Home = function Home() {
  var db = _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_11__["default"].firestore();
  var docRef = db.collection(_assets_constant__WEBPACK_IMPORTED_MODULE_12__["COLLECTIONS"].POSTS);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"]([]),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      posts = _React$useState2[0],
      setPosts = _React$useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.rootReducer.tab;
  }),
      side = _useSelector.side;

  var loadPostsData = react__WEBPACK_IMPORTED_MODULE_4__["useCallback"](
  /*#__PURE__*/
  Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var data, docs, posts;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return docRef.where('isEnd', '==', false).where('isDeleted', '==', false).orderBy('timestamp', 'desc').get()["catch"](function (e) {
              return console.error(e);
            });

          case 2:
            data = _context.sent;

            if (data) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return");

          case 5:
            docs = data.docs;
            posts = docs.map(function (doc) {
              return doc.data();
            });
            setPosts(posts);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [docRef]);
  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
    loadPostsData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var helpPosts = react__WEBPACK_IMPORTED_MODULE_4__["useMemo"](function () {
    var filteredPosts = posts.filter(function (post) {
      return post.side === 'help';
    });
    return filteredPosts.map(function (post, index) {
      var _post$id;

      return __jsx(_molecules_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: index,
        imgUrl: post.imageUrl,
        description: post.title,
        link: "/posts/".concat((_post$id = post.id) !== null && _post$id !== void 0 ? _post$id : ''),
        side: 'help',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      });
    });
  }, [posts]);
  var supportPosts = react__WEBPACK_IMPORTED_MODULE_4__["useMemo"](function () {
    var filteredPosts = posts.filter(function (post) {
      return post.side === 'support';
    });
    return filteredPosts.map(function (post, index) {
      var _post$id2;

      return __jsx(_molecules_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: index,
        imgUrl: post.imageUrl,
        description: post.title,
        link: "/posts/".concat((_post$id2 = post.id) !== null && _post$id2 !== void 0 ? _post$id2 : ''),
        side: 'support',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      });
    });
  }, [posts]);
  var organizationPosts = react__WEBPACK_IMPORTED_MODULE_4__["useMemo"](function () {
    var filteredPosts = posts.filter(function (post) {
      return post.side === 'organization';
    });
    return filteredPosts.map(function (post, index) {
      var _post$id3;

      return __jsx(_molecules_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: index,
        imgUrl: post.imageUrl,
        description: post.title,
        link: "/posts/".concat((_post$id3 = post.id) !== null && _post$id3 !== void 0 ? _post$id3 : ''),
        side: 'organization',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      });
    });
  }, [posts]);

  var helpPostElement = __jsx(ItemWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, helpPosts);

  var supportPostElement = __jsx(ItemWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, supportPosts);

  var organizationPostElement = __jsx(ItemWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, organizationPosts);

  var href = react__WEBPACK_IMPORTED_MODULE_4__["useMemo"](function () {
    return side === 'organization' ? 'https://forms.gle/xqosY3davqivXJDd7' : '/register';
  }, [side]);
  var target = react__WEBPACK_IMPORTED_MODULE_4__["useMemo"](function () {
    return side === 'organization' ? '_blank' : '_self';
  }, [side]);
  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(ContentsContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_organisms_tab__WEBPACK_IMPORTED_MODULE_9__["default"], {
    helpContents: helpPostElement,
    supportContents: supportPostElement,
    organizationContents: organizationPostElement,
    tabSide: side,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(AddButton, {
    href: href,
    target: target,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "\u58F0\u3092\u3064\u304F\u308B"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
var ItemWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
var AddButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].a(_templateObject2());
var ContentsContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject3());

/***/ })

})
//# sourceMappingURL=index.js.f22864c7971b50247f3b.hot-update.js.map