webpackHotUpdate("static/development/pages/posts/[postId].js",{

/***/ "./pages/posts/[postId].tsx":
/*!**********************************!*\
  !*** ./pages/posts/[postId].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/utils/firebaseApp */ "./assets/utils/firebaseApp.ts");
/* harmony import */ var _assets_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/constant */ "./assets/constant.ts");
/* harmony import */ var _components_templates_posts_detail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/templates/posts/detail */ "./components/templates/posts/detail.tsx");
/* harmony import */ var _reducers_tab_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../reducers/tab/types */ "./reducers/tab/types.ts");








var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/pages/posts/[postId].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8__["createElement"];







var PagePostDetail =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(PagePostDetail, _React$Component);

  function PagePostDetail() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, PagePostDetail);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(PagePostDetail).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(PagePostDetail, [{
    key: "render",
    value: function render() {
      return __jsx(_components_templates_posts_detail__WEBPACK_IMPORTED_MODULE_12__["default"], {
        data: this.props.data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, req, store, db, docRef, postData, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, req = _ref.req, store = _ref.store;

                if (!(req && "development" !== 'development')) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", {
                  data: null
                });

              case 5:
                db = _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_10__["default"].firestore();
                docRef = db.collection(_assets_constant__WEBPACK_IMPORTED_MODULE_11__["COLLECTIONS"].POSTS);
                _context.next = 9;
                return docRef.doc(query.postId).get()["catch"](function (e) {
                  return console.error(e);
                });

              case 9:
                postData = _context.sent;
                data = postData && postData.exists ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, postData.data(), {
                  id: postData.id
                }) : null;
                store.dispatch({
                  type: _reducers_tab_types__WEBPACK_IMPORTED_MODULE_13__["UPDATE"],
                  payload: {
                    side: query.side
                  }
                });
                return _context.abrupt("return", {
                  data: data
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return PagePostDetail;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return state;
})(PagePostDetail));

/***/ })

})
//# sourceMappingURL=[postId].js.770e8660cae53ac52f51.hot-update.js.map