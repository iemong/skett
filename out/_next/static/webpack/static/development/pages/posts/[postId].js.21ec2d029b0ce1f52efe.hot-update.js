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
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/Main */ "./components/templates/layouts/Main.tsx");
/* harmony import */ var _organisms_tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../organisms/tab */ "./components/organisms/tab/index.tsx");
/* harmony import */ var _molecules_detailCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules/detailCard */ "./components/molecules/detailCard/index.tsx");

var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/components/templates/posts/detail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    width: 401px;\n    height: 81px;\n    background-image: url(/img/btn_back.png);\n    margin: 0 auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    width: 401px;\n    height: 81px;\n    background-image: url(/img/btn_apply_help.png);\n    margin: 0 auto 48px;\n"]);

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-top: 60px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var PostDetail = function PostDetail(props) {
  var data = props.data;
  if (!data) return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, "Loading");

  var helpPostElement = __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(DetailCardWithMargin, {
    imgUrl: data.imageUrl,
    title: data.title,
    description: data.description,
    userId: data.userId,
    side: 'help',
    updateDate: data.updateDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: '/apply',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(ApplyButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx(BackButton, {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }));

  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_organisms_tab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    leftContent: helpPostElement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PostDetail);
var Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var DetailCardWithMargin = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_molecules_detailCard__WEBPACK_IMPORTED_MODULE_7__["default"])(_templateObject2());
var ApplyButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject3());
var BackButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject4());

/***/ })

})
//# sourceMappingURL=[postId].js.21ec2d029b0ce1f52efe.hot-update.js.map