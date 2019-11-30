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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/Main */ "./components/templates/layouts/Main.tsx");
/* harmony import */ var _organisms_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../organisms/tab */ "./components/organisms/tab/index.tsx");
/* harmony import */ var _molecules_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/card */ "./components/molecules/card/index.tsx");

var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/components/templates/home/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    right: 0;\n    bottom: 100px;\n    display: block;\n    width: 251px;\n    height: 81px;\n    background-image: url(/img/btn_add.png);\n    color: transparent;\n"]);

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








var Home = function Home(props) {
  var posts = props.data; // TODO ちゃんとしたID渡す

  var helpPosts = posts.map(function (post, index) {
    var _post$id;

    return __jsx(_molecules_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      imgUrl: post.imageUrl,
      description: post.title,
      link: "/posts/".concat((_post$id = post.id) !== null && _post$id !== void 0 ? _post$id : ''),
      side: 'help',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    });
  });
  var supportPosts = posts.map(function (post, index) {
    var _post$id2;

    return __jsx(_molecules_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      imgUrl: post.imageUrl,
      description: post.description,
      link: "/posts/".concat((_post$id2 = post.id) !== null && _post$id2 !== void 0 ? _post$id2 : ''),
      side: 'support',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  });

  var helpPostElement = __jsx(ItemWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, helpPosts);

  var supportPostElement = __jsx(ItemWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, supportPosts);

  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_organisms_tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    leftContent: helpPostElement,
    rightContent: supportPostElement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: '/register',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(AddButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\u58F0\u306E\u8FFD\u52A0"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
var ItemWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var AddButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject2());

/***/ })

})
//# sourceMappingURL=index.js.7f9554587870428f5d8d.hot-update.js.map