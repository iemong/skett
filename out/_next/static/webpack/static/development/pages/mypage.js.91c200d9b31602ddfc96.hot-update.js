webpackHotUpdate("static/development/pages/mypage.js",{

/***/ "./assets/api/auth.ts":
/*!****************************!*\
  !*** ./assets/api/auth.ts ***!
  \****************************/
/*! exports provided: createUser, signInUser, signInFacebook, signInTwitter, signOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInUser", function() { return signInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInFacebook", function() { return signInFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInTwitter", function() { return signInTwitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return signOut; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_firebaseApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/firebaseApp */ "./assets/utils/firebaseApp.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant */ "./assets/constant.ts");





var createUser =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email, password) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, password);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var signInUser =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, password) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signInUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var signInFacebook =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var _result$user, _result$user2, _result$user3, _result$user4, _result$user5, _result$additionalUse;

    var provider, result, token, db, hoge, userDocRef, userInfo;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
            provider.addScope('user_link');
            _context3.next = 4;
            return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithPopup(provider);

          case 4:
            result = _context3.sent;
            console.log(result);
            token = (result === null || result === void 0 ? void 0 : result.credential).accessToken;
            db = _utils_firebaseApp__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
            _context3.next = 10;
            return fetch("https://graph.facebook.com/me?fields=id,name,user_link&access_token=".concat(token));

          case 10:
            hoge = _context3.sent;
            console.log(hoge.json());
            userDocRef = db.collection(_constant__WEBPACK_IMPORTED_MODULE_4__["COLLECTIONS"].USERS).doc((_result$user = result.user) === null || _result$user === void 0 ? void 0 : _result$user.uid);
            userInfo = {
              uid: (_result$user2 = result.user) === null || _result$user2 === void 0 ? void 0 : _result$user2.uid,
              displayName: (_result$user3 = result.user) === null || _result$user3 === void 0 ? void 0 : _result$user3.displayName,
              email: (_result$user4 = result.user) === null || _result$user4 === void 0 ? void 0 : _result$user4.email,
              photoURL: (_result$user5 = result.user) === null || _result$user5 === void 0 ? void 0 : _result$user5.photoURL,
              providerId: (_result$additionalUse = result.additionalUserInfo) === null || _result$additionalUse === void 0 ? void 0 : _result$additionalUse.providerId
            };
            _context3.next = 16;
            return userDocRef.set(userInfo)["catch"](function (error) {
              console.error(error);
            });

          case 16:
            return _context3.abrupt("return", result);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function signInFacebook() {
    return _ref3.apply(this, arguments);
  };
}();
var signInTwitter =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    var _result$user6, _result$user7, _result$user8, _result$user9, _result$user10, _result$additionalUse2, _result$additionalUse3;

    var provider, result, db, userDocRef, userInfo;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].TwitterAuthProvider();
            _context4.next = 3;
            return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithPopup(provider);

          case 3:
            result = _context4.sent;
            db = _utils_firebaseApp__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
            userDocRef = db.collection(_constant__WEBPACK_IMPORTED_MODULE_4__["COLLECTIONS"].USERS).doc((_result$user6 = result.user) === null || _result$user6 === void 0 ? void 0 : _result$user6.uid);
            userInfo = {
              uid: (_result$user7 = result.user) === null || _result$user7 === void 0 ? void 0 : _result$user7.uid,
              displayName: (_result$user8 = result.user) === null || _result$user8 === void 0 ? void 0 : _result$user8.displayName,
              email: (_result$user9 = result.user) === null || _result$user9 === void 0 ? void 0 : _result$user9.email,
              photoURL: (_result$user10 = result.user) === null || _result$user10 === void 0 ? void 0 : _result$user10.photoURL,
              providerId: (_result$additionalUse2 = result.additionalUserInfo) === null || _result$additionalUse2 === void 0 ? void 0 : _result$additionalUse2.providerId,
              userName: (_result$additionalUse3 = result.additionalUserInfo) === null || _result$additionalUse3 === void 0 ? void 0 : _result$additionalUse3.username
            };
            _context4.next = 9;
            return userDocRef.set(userInfo)["catch"](function (error) {
              console.error(error);
            });

          case 9:
            return _context4.abrupt("return", result);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function signInTwitter() {
    return _ref4.apply(this, arguments);
  };
}();
var signOut =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function signOut() {
    return _ref5.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=mypage.js.91c200d9b31602ddfc96.hot-update.js.map