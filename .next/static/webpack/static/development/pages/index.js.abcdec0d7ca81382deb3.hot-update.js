webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/utils/firebaseApp */ "./assets/utils/firebaseApp.ts");
/* harmony import */ var _assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/constant */ "./assets/constant.ts");
/* harmony import */ var _components_templates_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/templates/home */ "./components/templates/home/index.tsx");



var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];





var PageHome = function PageHome(props) {
  var data = props.data;
  return __jsx(_components_templates_home__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  });
};

PageHome.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req, db, docRef, postData, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;

            if (!req) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", {
              data: null
            });

          case 5:
            db = _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();
            docRef = db.collection(_assets_constant__WEBPACK_IMPORTED_MODULE_5__["COLLECTIONS"].POSTS);
            _context.next = 9;
            return docRef.orderBy('timestamp', 'desc').get()["catch"](function (e) {
              return console.error(e);
            });

          case 9:
            postData = _context.sent;
            data = postData && postData.docs.map(function (doc) {
              return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, doc.data());
            });
            return _context.abrupt("return", {
              data: data
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (PageHome);

/***/ })

})
//# sourceMappingURL=index.js.abcdec0d7ca81382deb3.hot-update.js.map