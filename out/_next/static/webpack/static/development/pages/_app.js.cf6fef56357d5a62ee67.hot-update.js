webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/tab/index.ts":
/*!*******************************!*\
  !*** ./reducers/tab/index.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./reducers/tab/types.ts");


var initialState = {
  side: 'help'
};

var tabReducer = function tabReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]:
      {
        var side = action.payload.side;
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          side: side
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (tabReducer);

/***/ })

})
//# sourceMappingURL=_app.js.cf6fef56357d5a62ee67.hot-update.js.map