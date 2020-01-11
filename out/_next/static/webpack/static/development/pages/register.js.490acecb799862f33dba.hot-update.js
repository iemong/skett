webpackHotUpdate("static/development/pages/register.js",{

/***/ "./components/molecules/ogp/Canvas.tsx":
/*!*********************************************!*\
  !*** ./components/molecules/ogp/Canvas.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _assets_utils_makeOgp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/utils/makeOgp */ "./assets/utils/makeOgp.ts");

var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/components/molecules/ogp/Canvas.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

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





var Canvas = function Canvas(props) {
  var image = props.image,
      title = props.title,
      postType = props.postType;
  var canvasElm = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    console.log('run');
    if (!canvasElm) return;
    if (!canvasElm.current) return;
    if (!image) return;
    Object(_assets_utils_makeOgp__WEBPACK_IMPORTED_MODULE_3__["default"])({
      canvas: canvasElm.current,
      imageData: image,
      postType: postType,
      text: title
    });
    console.log('hoge');
  }, [image, postType, title]);
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(CanvasElm, {
    ref: canvasElm,
    width: 1200,
    height: 630,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Canvas);
var Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var CanvasElm = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].canvas(_templateObject2());

/***/ })

})
//# sourceMappingURL=register.js.490acecb799862f33dba.hot-update.js.map