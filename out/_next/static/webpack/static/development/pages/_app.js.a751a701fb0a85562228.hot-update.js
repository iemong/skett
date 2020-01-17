webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var emotion_reset__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! emotion-reset */ "./node_modules/emotion-reset/dist/index.js");
/* harmony import */ var emotion_reset__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(emotion_reset__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _store_createStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store/createStore */ "./store/createStore.ts");









var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/pages/_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n                        ", ";\n                        body {\n                            position: absolute;\n                            width: 100%;\n                            height: 100%;\n                            font-family: 'Noto Sans JP', sans-serif;\n                            font-smoothing: antialiased;\n                        }\n                        input {\n                            padding: 0;\n                            border: none;\n                            border-radius: 0;\n                            outline: none;\n                            background: none;\n                        }\n                        textarea {\n                            appearance: none;\n                            resize: none;\n                            padding: 0;\n                            border: 0;\n                            outline: none;\n                            background: transparent;\n                        }\n                        button {\n                            background-color: transparent;\n                            border: none;\n                            cursor: pointer;\n                            outline: none;\n                            padding: 0;\n                            appearance: none;\n                        }\n                    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "\u30B9\u30B1\u30C3\u30C8 | \u88AB\u707D\u5730\u306E\u52A9\u3063\u4EBA\u30DE\u30C3\u30C1\u30F3\u30B0"), __jsx("meta", {
        name: "viewport",
        content: "width=750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), __jsx("meta", {
        name: "keywords",
        content: "\u30B9\u30B1\u30C3\u30C8, skett, \u30DC\u30E9\u30F3\u30C6\u30A3\u30A2, \u88AB\u707D\u5730, \u88AB\u707D, \u30DE\u30C3\u30C1\u30F3\u30B0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), __jsx("meta", {
        name: "description",
        content: "\u30B9\u30B1\u30C3\u30C8\u306F\u88AB\u707D\u3057\u305F\u5730\u57DF\u306E\u73FE\u5730\u306E\u58F0\u3068\u3001\u652F\u63F4\u8005\u3092\u76F4\u63A5\u7D50\u3073\u3064\u3051\u308B\u30B5\u30FC\u30D3\u30B9\u3067\u3059\u3002\u652F\u63F4\u8005\u3068\u3057\u3066\u3001\u4E8B\u524D\u306B\u767B\u9332\u3057\u3066\u304A\u304F\u3053\u3068\u3067\u3001\u4E07\u304C\u4E00\u306B\u5099\u3048\u307E\u3059\u3002",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), __jsx("meta", {
        property: "og:type",
        content: "website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), __jsx("meta", {
        property: "og:description",
        content: "\u30B9\u30B1\u30C3\u30C8\u306F\u88AB\u707D\u3057\u305F\u5730\u57DF\u306E\u73FE\u5730\u306E\u58F0\u3068\u3001\u652F\u63F4\u8005\u3092\u76F4\u63A5\u7D50\u3073\u3064\u3051\u308B\u30B5\u30FC\u30D3\u30B9\u3067\u3059\u3002\u652F\u63F4\u8005\u3068\u3057\u3066\u3001\u4E8B\u524D\u306B\u767B\u9332\u3057\u3066\u304A\u304F\u3053\u3068\u3067\u3001\u4E07\u304C\u4E00\u306B\u5099\u3048\u307E\u3059\u3002",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx("meta", {
        property: "og:url",
        content: "https://fukko-skett.jp/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), __jsx("meta", {
        property: "og:image",
        content: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx("meta", {
        property: "og:title",
        content: "\u30B9\u30B1\u30C3\u30C8 | \u88AB\u707D\u5730\u306E\u52A9\u3063\u4EBA\u30DE\u30C3\u30C1\u30F3\u30B0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx("link", {
        rel: "canonical",
        href: "https://fukko-skett.jp/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap&subset=japanese",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), __jsx(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["Global"], {
        styles: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_13__["css"])(_templateObject(), emotion_reset__WEBPACK_IMPORTED_MODULE_14___default.a),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                pageProps = _context.t0;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 10:
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

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_10___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_15__["default"])(_store_createStore__WEBPACK_IMPORTED_MODULE_16__["default"])(MyApp));

/***/ })

})
//# sourceMappingURL=_app.js.a751a701fb0a85562228.hot-update.js.map