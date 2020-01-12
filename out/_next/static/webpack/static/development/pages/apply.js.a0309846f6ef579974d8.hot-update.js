webpackHotUpdate("static/development/pages/apply.js",{

/***/ "./components/templates/apply/index.tsx":
/*!**********************************************!*\
  !*** ./components/templates/apply/index.tsx ***!
  \**********************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/Main */ "./components/templates/layouts/Main.tsx");
/* harmony import */ var _organisms_apply_result__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../organisms/apply/result */ "./components/organisms/apply/result/index.tsx");
/* harmony import */ var _organisms_tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../organisms/tab */ "./components/organisms/tab/index.tsx");
/* harmony import */ var _hooks_useLogin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useLogin */ "./components/hooks/useLogin.tsx");
/* harmony import */ var _organisms_apply_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../organisms/apply/login */ "./components/organisms/apply/login/index.tsx");
/* harmony import */ var _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/utils/firebaseApp */ "./assets/utils/firebaseApp.ts");
/* harmony import */ var _assets_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/constant */ "./assets/constant.ts");




var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/components/templates/apply/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-top: 60px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}













var Apply = function Apply(props) {
  var postId = props.postId;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.rootReducer.tab;
  }),
      side = _useSelector.side;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"](undefined),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      currentPost = _React$useState2[0],
      setCurrentPost = _React$useState2[1];

  var user = Object(_hooks_useLogin__WEBPACK_IMPORTED_MODULE_11__["default"])();

  var updatePostData =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(user) {
      var db, docRef, data, postData;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              db = _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_13__["default"].firestore();
              docRef = db.collection(_assets_constant__WEBPACK_IMPORTED_MODULE_14__["COLLECTIONS"].POSTS);
              _context.next = 5;
              return docRef.doc(postId).update({
                applicants: firebase__WEBPACK_IMPORTED_MODULE_7___default.a.firestore.FieldValue.arrayUnion(user.uid)
              })["catch"](function (e) {
                console.log(e);
              });

            case 5:
              _context.next = 7;
              return docRef.doc(postId).get()["catch"](function (e) {
                return console.error(e);
              });

            case 7:
              data = _context.sent;
              postData = data && data.exists ? data.data() : undefined;
              setCurrentPost(postData);
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function updatePostData(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
    if (!user) return;
    updatePostData(user); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  var innerElement = react__WEBPACK_IMPORTED_MODULE_4__["useMemo"](function () {
    return user ? __jsx(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(_organisms_apply_result__WEBPACK_IMPORTED_MODULE_9__["default"], {
      post: currentPost,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })) : __jsx(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(_organisms_apply_login__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onConsent: function onConsent() {
        setIsConsent(true);
      },
      hasUser: !!user,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }));
  }, [currentPost, user]);
  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, side === 'help' ? __jsx(_organisms_tab__WEBPACK_IMPORTED_MODULE_10__["default"], {
    leftContent: innerElement,
    tabSide: 'left',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }) : __jsx(_organisms_tab__WEBPACK_IMPORTED_MODULE_10__["default"], {
    rightContent: innerElement,
    tabSide: 'right',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Apply);
var Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());

/***/ })

})
//# sourceMappingURL=apply.js.a0309846f6ef579974d8.hot-update.js.map