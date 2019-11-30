webpackHotUpdate("static/development/pages/register.js",{

/***/ "./components/templates/register/index.tsx":
/*!*************************************************!*\
  !*** ./components/templates/register/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts/Main */ "./components/templates/layouts/Main.tsx");
/* harmony import */ var _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/utils/firebaseApp */ "./assets/utils/firebaseApp.ts");
/* harmony import */ var _assets_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/constant */ "./assets/constant.ts");
/* harmony import */ var _organisms_tab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../organisms/tab */ "./components/organisms/tab/index.tsx");
/* harmony import */ var _organisms_register_confirm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../organisms/register/confirm */ "./components/organisms/register/confirm/index.tsx");
/* harmony import */ var _organisms_register_result__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../organisms/register/result */ "./components/organisms/register/result/index.tsx");





var _jsxFileName = "/Users/irie-shinnosuke/Documents/works/skett/skett/components/templates/register/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5__["createElement"];

function _templateObject14() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    width: 400px;\n    height: 80px;\n    margin: 0 auto;\n    background-image: url(/img/btn_back.png);\n    color: transparent;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    margin: 0 auto 50px;\n    width: 400px;\n    height: 80px;\n    background-image: url(/img/btn_confirm_help.png);\n    color: transparent;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 4em;\n    margin: 80px auto;\n    text-decoration: underline;\n    font-size: 24px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: none;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    width: 520px;\n    height: 56px;\n    text-align: center;\n    line-height: 56px;\n    background-color: #efefef;\n    font-size: 18px;\n    color: #9fa0a0;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 520px;\n    min-height: 320px;\n    font-size: 18px;\n    background-color: #efefef;\n    padding: 17px 22px;\n    box-sizing: border-box;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 520px;\n    height: 56px;\n    font-size: 18px;\n    background-color: #efefef;\n    text-indent: 1em;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    margin-bottom: 0.5em;\n    font-size: 22px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 50px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 50px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    margin-bottom: 45px;\n    padding-bottom: 33px;\n    font-size: 38px;\n    text-align: center;\n    color: #000;\n    &::before {\n        content: '';\n        position: absolute;\n        left: 50%;\n        bottom: 0;\n        width: 100px;\n        height: 5px;\n        background-image: linear-gradient(to left, #00b4ed, #0091db);\n        transform: translateX(-50%);\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 600px;\n    height: 950px;\n    margin: 60px auto 0;\n    padding: 75px 40px 102px;\n    background-color: #fff;\n    border-radius: 16px;\n    box-sizing: border-box;\n    overflow: hidden;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding-bottom: 100px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var Register = function Register() {
  var db = _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_10__["default"].firestore();
  var storage = _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_10__["default"].storage(_assets_constant__WEBPACK_IMPORTED_MODULE_11__["STRAGE_BACKET"]);
  var storageRef = storage.ref();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__["useState"](null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState, 2),
      currentFormData = _React$useState2[0],
      setCurrentFormData = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5__["useState"](null),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState3, 2),
      time = _React$useState4[0],
      setTime = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_5__["useState"](null),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState5, 2),
      currentImgSrc = _React$useState6[0],
      setCurrentImgSrc = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_5__["useState"](''),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState7, 2),
      postUrl = _React$useState8[0],
      setPostUrl = _React$useState8[1];

  var onRegister = function onRegister(data) {
    console.log('send', data);
    setCurrentFormData(data);
    var now = luxon__WEBPACK_IMPORTED_MODULE_8__["DateTime"].local().toString();
    setTime(now);
  };

  react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](function () {
    if (!currentFormData) return;
    var fileList = currentFormData.image;
    var file = fileList[0];
    if (!['image/jpeg', 'image/png'].includes(file.type)) throw new Error('画像形式がサポートされていません');
    var reader = new FileReader();

    reader.onload = function (e) {
      return setCurrentImgSrc(e.target.result);
    };

    reader.readAsDataURL(file);
  }, [currentFormData]);
  var onSubmit = react__WEBPACK_IMPORTED_MODULE_5__["useCallback"](
  /*#__PURE__*/
  Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var _currentFormData$desc;

    var fileList, file, imageRef, snapshot, url, postData;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (currentFormData && time) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            fileList = currentFormData.image;
            file = fileList[0];

            if (['image/jpeg', 'image/png'].includes(file.type)) {
              _context.next = 6;
              break;
            }

            throw new Error('画像形式がサポートされていません');

          case 6:
            imageRef = storageRef.child("images/".concat(file.name.split('.')[0], "_").concat(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()(), ".jpg"));
            _context.next = 9;
            return imageRef.put(file);

          case 9:
            snapshot = _context.sent;
            console.log(snapshot);
            _context.next = 13;
            return imageRef.getDownloadURL();

          case 13:
            url = _context.sent;
            console.log(url);
            postData = {
              userId: 1,
              title: currentFormData.title,
              description: (_currentFormData$desc = currentFormData.description) !== null && _currentFormData$desc !== void 0 ? _currentFormData$desc : '',
              isOpen: true,
              createDate: time,
              updateDate: time,
              url: 'google.com',
              imageUrl: "".concat(snapshot.metadata.fullPath),
              side: 'help'
            };
            _context.next = 18;
            return db.collection(_assets_constant__WEBPACK_IMPORTED_MODULE_11__["COLLECTIONS"].POSTS).add(postData).then(function (docRef) {
              console.log('Document written with ID: ', docRef.id);
            })["catch"](function (error) {
              console.error(error);
            });

          case 18:
            // TODO シェアURL
            setPostUrl('google.com');

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [currentFormData, db, storageRef, time]);
  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_organisms_tab__WEBPACK_IMPORTED_MODULE_12__["default"], {
    leftContent: __jsx(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, !postUrl ? !(currentFormData && currentImgSrc && time) ? __jsx("form", {
      onSubmit: handleSubmit(onRegister),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(FormBox, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "\u52DF\u96C6\u3092\u4F5C\u308B"), __jsx(FormTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx(TitleLabel, {
      htmlFor: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "\u984C\u540D"), __jsx(InputText, {
      type: "text",
      id: "title",
      name: "title",
      placeholder: "\u52DF\u96C6\u3057\u305F\u3044\u3053\u3068\u3092\u66F8\u3044\u3066\u304F\u3060\u3055\u3044",
      ref: register({
        required: true
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), errors.title && __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "This field is required")), __jsx(FormDescription, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx(TitleLabel, {
      htmlFor: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "\u5185\u5BB9"), __jsx(TextArea, {
      id: "description",
      name: "description",
      placeholder: "\u8A73\u7D30\u5185\u5BB9\u3092\u66F8\u3044\u3066\u304F\u3060\u3055\u3044",
      ref: register,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    })), __jsx(FormImage, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx(TitleLabel, {
      htmlFor: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "\u5199\u771F\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"), __jsx(ImageLabelBox, {
      htmlFor: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E"), __jsx(InputImage, {
      type: "file",
      id: "image",
      name: "image",
      ref: register({
        required: true
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }))), __jsx(Howto, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "\u4F7F\u3044\u304B\u305F"), __jsx(ConfirmButton, {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "\u9001\u4FE1"), __jsx(BackButton, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, "\u623B\u308B")) : __jsx(_organisms_register_confirm__WEBPACK_IMPORTED_MODULE_13__["default"], {
      title: currentFormData.title,
      description: currentFormData.description,
      imgUrl: currentImgSrc,
      updateDate: time,
      onSubmit: onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }) : __jsx(_organisms_register_result__WEBPACK_IMPORTED_MODULE_14__["default"], {
      url: postUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Register);
var Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
var FormBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2());
var Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].h1(_templateObject3());
var FormTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject4());
var FormDescription = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject5());
var FormImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject6());
var TitleLabel = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].label(_templateObject7());
var InputText = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].input(_templateObject8());
var TextArea = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].textarea(_templateObject9());
var ImageLabelBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].label(_templateObject10());
var InputImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].input(_templateObject11());
var Howto = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].p(_templateObject12());
var ConfirmButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].button(_templateObject13());
var BackButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].button(_templateObject14());

/***/ })

})
//# sourceMappingURL=register.js.1e0783cf717039648e24.hot-update.js.map