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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layouts/Main */ "./components/templates/layouts/Main.tsx");
/* harmony import */ var _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/utils/firebaseApp */ "./assets/utils/firebaseApp.ts");
/* harmony import */ var _assets_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/constant */ "./assets/constant.ts");
/* harmony import */ var _organisms_tab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../organisms/tab */ "./components/organisms/tab/index.tsx");
/* harmony import */ var _organisms_register_confirm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../organisms/register/confirm */ "./components/organisms/register/confirm/index.tsx");
/* harmony import */ var _organisms_register_result__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../organisms/register/result */ "./components/organisms/register/result/index.tsx");
/* harmony import */ var _organisms_register_login__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../organisms/register/login */ "./components/organisms/register/login/index.tsx");
/* harmony import */ var _hooks_useLogin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../hooks/useLogin */ "./components/hooks/useLogin.tsx");
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../atoms/Button */ "./components/atoms/Button.tsx");
/* harmony import */ var _molecules_theme_ThemeButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../molecules/theme/ThemeButton */ "./components/molecules/theme/ThemeButton.tsx");
/* harmony import */ var _molecules_theme_ThemeTitle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../molecules/theme/ThemeTitle */ "./components/molecules/theme/ThemeTitle.tsx");
/* harmony import */ var _hooks_useModal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../hooks/useModal */ "./components/hooks/useModal.ts");
/* harmony import */ var _molecules_theme_ThemeHowtoModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../molecules/theme/ThemeHowtoModal */ "./components/molecules/theme/ThemeHowtoModal.tsx");
/* harmony import */ var _assets_utils_makeOgp__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../assets/utils/makeOgp */ "./assets/utils/makeOgp.ts");





var _jsxFileName = "/Users/itabashi/Documents/git/iemong/skett/components/templates/register/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5__["createElement"];

function _templateObject16() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 0 auto;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 0 auto 50px;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 4em;\n    margin: 80px auto;\n    text-decoration: underline;\n    font-size: 24px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: none;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    width: 520px;\n    height: 56px;\n    text-align: center;\n    line-height: 56px;\n    background-color: #efefef;\n    font-size: 18px;\n    color: #9fa0a0;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-width: 100%;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    justify-content: center;\n    margin-bottom: 8px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 520px;\n    min-height: 320px;\n    font-size: 20px;\n    background-color: #efefef;\n    padding: 17px 22px;\n    box-sizing: border-box;\n    font-family: 'Noto Sans JP', sans-serif;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 520px;\n    height: 56px;\n    font-size: 20px;\n    background-color: #efefef;\n    text-indent: 1em;\n    font-family: 'Noto Sans JP', sans-serif;\n"]);

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 45px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 600px;\n    min-height: 950px;\n    margin: 60px auto 0;\n    padding: 75px 40px 102px;\n    background-color: #fff;\n    border-radius: 16px;\n    box-sizing: border-box;\n    overflow: hidden;\n"]);

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




















 // const FUKKO_DESIGN_UID = 'UeR6nHmPLKZPyIuR1yrA9d0be9t1'

var FUKKO_DESIGN_UID = 'qY8sGcFGtCf6gdHSHs9i89yk46r1';

var Register = function Register() {
  var db = _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_12__["default"].firestore();
  var storage = _assets_utils_firebaseApp__WEBPACK_IMPORTED_MODULE_12__["default"].storage(_assets_constant__WEBPACK_IMPORTED_MODULE_13__["STRAGE_BACKET"]);
  var storageRef = storage.ref();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors,
      reset = _useForm.reset;

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

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_5__["useState"](),
      _React$useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState9, 2),
      isConsent = _React$useState10[0],
      setIsConsent = _React$useState10[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.rootReducer.tab;
  }),
      side = _useSelector.side;

  var user = Object(_hooks_useLogin__WEBPACK_IMPORTED_MODULE_18__["default"])();

  var _useModal = Object(_hooks_useModal__WEBPACK_IMPORTED_MODULE_22__["default"])(),
      isShowing = _useModal.isShowing,
      toggle = _useModal.toggle;

  var isFukkoDesign = react__WEBPACK_IMPORTED_MODULE_5__["useMemo"](function () {
    if (user) {
      return user.uid === FUKKO_DESIGN_UID;
    }

    return false;
  }, [user]);
  console.log('isFukkoDesign', isFukkoDesign);
  var imageRequired = react__WEBPACK_IMPORTED_MODULE_5__["useMemo"](function () {
    return isFukkoDesign === false;
  }, [isFukkoDesign]);
  var onChangeFileInput = react__WEBPACK_IMPORTED_MODULE_5__["useCallback"](function (event) {
    var _ref = event.target,
        files = _ref.files;
    var file = files === null || files === void 0 ? void 0 : files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function (e) {
        return setCurrentImgSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  }, []);

  var onRegister = function onRegister(data) {
    setCurrentFormData(data);
    var now = luxon__WEBPACK_IMPORTED_MODULE_8__["DateTime"].local().toString();
    setTime(now);
  };

  react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](function () {
    setIsConsent(localStorage.getItem('isConsent') === 'true');
  }, []);
  react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](function () {
    if (!currentFormData) return;
    var fileList = currentFormData.image;
    var file = fileList[0];

    if (file) {
      if (!['image/jpeg', 'image/png'].includes(file.type)) throw new Error('画像形式がサポートされていません');
      var reader = new FileReader();

      reader.onload = function (e) {
        return setCurrentImgSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  }, [currentFormData]);
  var onSubmit = react__WEBPACK_IMPORTED_MODULE_5__["useCallback"](
  /*#__PURE__*/
  Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
    var _currentFormData$desc;

    var fileList, file, now, postType, imageUrl, ogpImageUrl, uniqDocRef, uniqUrl, postData;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (currentFormData && time && user) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return");

          case 2:
            fileList = currentFormData.image;
            file = fileList[0];

            if (!file) {
              _context3.next = 7;
              break;
            }

            if (['image/jpeg', 'image/png'].includes(file.type)) {
              _context3.next = 7;
              break;
            }

            throw new Error('画像形式がサポートされていません');

          case 7:
            now = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()();
            postType = isFukkoDesign ? 'organization' : side;
            _context3.next = 11;
            return Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
            /*#__PURE__*/
            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
              var imageRef;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!imageRequired) {
                        _context.next = 7;
                        break;
                      }

                      imageRef = storageRef.child("images/".concat(file.name.split('.')[0], "_").concat(now, ".jpg"));
                      _context.next = 4;
                      return imageRef.put(file);

                    case 4:
                      _context.next = 6;
                      return imageRef.getDownloadURL();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                      return _context.abrupt("return", null);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }))();

          case 11:
            imageUrl = _context3.sent;
            _context3.next = 14;
            return Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
            /*#__PURE__*/
            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
              var ogpImageRef, ogpCanvas, blob;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!imageRequired) {
                        _context2.next = 17;
                        break;
                      }

                      ogpImageRef = storageRef.child("images/".concat(file.name.split('.')[0], "_").concat(now, "_ogp.jpg"));

                      if (currentImgSrc) {
                        _context2.next = 4;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 4:
                      _context2.next = 6;
                      return Object(_assets_utils_makeOgp__WEBPACK_IMPORTED_MODULE_24__["default"])({
                        imageData: currentImgSrc,
                        postType: postType,
                        text: currentFormData.title
                      });

                    case 6:
                      ogpCanvas = _context2.sent;
                      _context2.next = 9;
                      return Object(_assets_utils_makeOgp__WEBPACK_IMPORTED_MODULE_24__["exportBlob"])(ogpCanvas);

                    case 9:
                      blob = _context2.sent;

                      if (blob) {
                        _context2.next = 12;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 12:
                      _context2.next = 14;
                      return ogpImageRef.put(blob);

                    case 14:
                      _context2.next = 16;
                      return ogpImageRef.getDownloadURL();

                    case 16:
                      return _context2.abrupt("return", _context2.sent);

                    case 17:
                      return _context2.abrupt("return", null);

                    case 18:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }))();

          case 14:
            ogpImageUrl = _context3.sent;
            uniqDocRef = db.collection(_assets_constant__WEBPACK_IMPORTED_MODULE_13__["COLLECTIONS"].POSTS).doc();
            uniqUrl = "".concat(_assets_constant__WEBPACK_IMPORTED_MODULE_13__["BASE_OGP_URL"]).concat(uniqDocRef.id);
            postData = {
              id: uniqDocRef.id,
              user: {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL
              },
              title: currentFormData.title,
              description: (_currentFormData$desc = currentFormData.description) !== null && _currentFormData$desc !== void 0 ? _currentFormData$desc : '',
              isOpen: true,
              createDate: time,
              updateDate: time,
              url: uniqUrl,
              imageUrl: imageUrl,
              ogpImageUrl: ogpImageUrl,
              side: postType,
              timestamp: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()(),
              applicants: [],
              isEnd: false,
              isDeleted: false
            };
            _context3.next = 20;
            return uniqDocRef.set(postData)["catch"](function (error) {
              console.error(error);
            });

          case 20:
            setPostUrl(uniqUrl);

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), [currentFormData, currentImgSrc, db, side, storageRef, time, user]);
  var onBack = react__WEBPACK_IMPORTED_MODULE_5__["useCallback"](function () {
    reset();
    setCurrentFormData(null);
    setTime(null);
    setCurrentImgSrc(null);
  }, [reset]);
  var innerElement = react__WEBPACK_IMPORTED_MODULE_5__["useMemo"](function () {
    return __jsx(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, user && isConsent ? !postUrl ? !(currentFormData && (imageRequired ? currentImgSrc : true) && time) ? __jsx("form", {
      onSubmit: handleSubmit(onRegister),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx(FormBox, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, side === 'help' ? '募集を作る' : '支援者になる'), __jsx(FormTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx(TitleLabel, {
      htmlFor: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
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
        lineNumber: 173
      },
      __self: this
    }), errors.title && __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, "This field is required")), __jsx(FormDescription, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, __jsx(TitleLabel, {
      htmlFor: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, "\u5185\u5BB9"), __jsx(TextArea, {
      id: "description",
      name: "description",
      placeholder: "\u8A73\u7D30\u5185\u5BB9\u3092\u66F8\u3044\u3066\u304F\u3060\u3055\u3044",
      ref: register,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    })), __jsx(FormImage, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx(TitleLabel, {
      htmlFor: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "\u5199\u771F\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"), currentImgSrc && __jsx(ImagePreview, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, __jsx(Preview, {
      src: currentImgSrc,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    })), __jsx(ImageLabelBox, {
      htmlFor: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, "\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E"), __jsx(InputImage, {
      type: "file",
      id: "image",
      name: "image",
      accept: "image/jpeg, image/png",
      ref: register({
        required: imageRequired
      }),
      onChange: onChangeFileInput,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }))), __jsx(Howto, {
      onClick: toggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, "\u4F7F\u3044\u304B\u305F"), __jsx(_molecules_theme_ThemeHowtoModal__WEBPACK_IMPORTED_MODULE_23__["default"], {
      isShowing: isShowing,
      toggle: toggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }), __jsx(ConfirmButton, {
      width: '400px',
      height: '80px',
      onClick: handleSubmit(onRegister),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, "\u5185\u5BB9\u78BA\u8A8D"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: '/',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, __jsx(BackButton, {
      width: '400px',
      height: '80px',
      styleType: "cancel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, "\u623B\u308B"))) : __jsx(_organisms_register_confirm__WEBPACK_IMPORTED_MODULE_15__["default"], {
      title: currentFormData.title,
      description: currentFormData.description,
      imgUrl: currentImgSrc,
      updateDate: time,
      onSubmit: onSubmit,
      onBack: onBack,
      user: user,
      side: side,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }) : __jsx(_organisms_register_result__WEBPACK_IMPORTED_MODULE_16__["default"], {
      url: postUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }) : __jsx(_organisms_register_login__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: side === 'help' ? '募集を作る' : '支援者になる',
      onConsent: function onConsent() {
        setIsConsent(true);
      },
      hasUser: !!user,
      user: user,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }));
  }, [currentFormData, currentImgSrc, errors.title, handleSubmit, isConsent, isShowing, onBack, onSubmit, postUrl, register, side, time, toggle, user]);
  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx(_organisms_tab__WEBPACK_IMPORTED_MODULE_14__["default"], {
    tabSide: side,
    helpContents: innerElement,
    supportContents: innerElement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Register);
var Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
var FormBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2());
var Title = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"])(_molecules_theme_ThemeTitle__WEBPACK_IMPORTED_MODULE_21__["default"])(_templateObject3());
var FormTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject4());
var FormDescription = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject5());
var FormImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject6());
var TitleLabel = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].label(_templateObject7());
var InputText = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].input(_templateObject8());
var TextArea = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].textarea(_templateObject9());
var ImagePreview = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject10());
var Preview = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].img(_templateObject11());
var ImageLabelBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].label(_templateObject12());
var InputImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].input(_templateObject13());
var Howto = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].p(_templateObject14());
var ConfirmButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"])(_molecules_theme_ThemeButton__WEBPACK_IMPORTED_MODULE_20__["default"])(_templateObject15());
var BackButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"])(_atoms_Button__WEBPACK_IMPORTED_MODULE_19__["default"])(_templateObject16());

/***/ })

})
//# sourceMappingURL=register.js.ee13ed09a09c178f1ad3.hot-update.js.map