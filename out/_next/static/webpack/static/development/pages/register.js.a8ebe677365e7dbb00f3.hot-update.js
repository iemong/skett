webpackHotUpdate("static/development/pages/register.js",{

/***/ "./assets/utils/makeOgp.ts":
/*!*********************************!*\
  !*** ./assets/utils/makeOgp.ts ***!
  \*********************************/
/*! exports provided: exportDataURL, exportBlob, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportDataURL", function() { return exportDataURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportBlob", function() { return exportBlob; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _preloadImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preloadImage */ "./assets/utils/preloadImage.ts");
/* harmony import */ var _drawImageProp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawImageProp */ "./assets/utils/drawImageProp.ts");




var WIDTH = 1200;
var HEIGHT = 630;

var drawBG = function drawBG(context, postType) {
  context.save();
  var gradient = context.createLinearGradient(0, 0, WIDTH / 2, 0);

  if (postType === 'help') {
    gradient.addColorStop(0, '#00B4ED');
    gradient.addColorStop(1, '#0091DB');
  } else {
    gradient.addColorStop(0, '#35B597');
    gradient.addColorStop(1, '#00A968');
  }

  context.fillStyle = gradient;
  context.rect(0, 0, WIDTH / 2, HEIGHT);
  context.fill();
  context.restore();
  return context;
};

var drawImage =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context, imageData) {
    var image, offset;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_preloadImage__WEBPACK_IMPORTED_MODULE_2__["preloadImage"])(imageData);

          case 2:
            image = _context.sent;
            context.save();
            offset = {
              x: 0.5,
              y: 0.5
            };
            Object(_drawImageProp__WEBPACK_IMPORTED_MODULE_3__["default"])(context, image, WIDTH / 2, 0, WIDTH / 2, HEIGHT, offset.x, offset.y);
            context.restore();
            return _context.abrupt("return", context);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function drawImage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var drawText = function drawText(context, text) {
  var fontSize = 84;
  var lineHeight = 1.25;
  var x = 50;
  var y = 150;
  var lengthPerLine = 6;
  var maxLines = 4;
  var reg = new RegExp("(.{".concat(lengthPerLine, "})"));
  var trimedText = text.length > lengthPerLine * maxLines ? text.slice(0, lengthPerLine * maxLines - 1).replace(/$/, '…') : text;
  context.save();
  context.beginPath();
  context.font = "bold ".concat(fontSize, "px Arial");
  context.fillStyle = '#fff';
  trimedText.split(reg).filter(function (s) {
    return s;
  }).forEach(function (str, index) {
    context.fillText(str, x, y + index * 84 * lineHeight);
  });
  context.restore();
  return context;
};

var drawMore =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(context) {
    var image;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            context.save(); // 文字を入力する

            _context2.next = 3;
            return Object(_preloadImage__WEBPACK_IMPORTED_MODULE_2__["preloadImage"])('/img/svg/ogp_btn_more.svg');

          case 3:
            image = _context2.sent;
            context.drawImage(image, 158, 510);
            context.restore();
            return _context2.abrupt("return", context);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function drawMore(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var exportDataURL = function exportDataURL(canvas) {
  return canvas.toDataURL('image/png');
};
var exportBlob = function exportBlob(canvas) {
  var base64 = exportDataURL(canvas);
  var bin = atob(base64);
  var buffer = new Uint8Array(bin.length);

  for (var i = 0; i < bin.length; i++) {
    buffer[i] = bin.charCodeAt(i);
  }

  return new Blob([buffer.buffer], {
    type: type
  });
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(options) {
    var canvas, ctx;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            canvas = options.canvas || document.createElement('canvas');

            if (!options.canvas) {
              canvas.width = WIDTH;
              canvas.height = HEIGHT;
            }

            ctx = canvas.getContext('2d');

            if (ctx) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return");

          case 5:
            drawBG(ctx, options.postType);
            _context3.next = 8;
            return drawImage(ctx, options.imageData);

          case 8:
            drawText(ctx, options.text);
            _context3.next = 11;
            return drawMore(ctx);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
})());

/***/ })

})
//# sourceMappingURL=register.js.a8ebe677365e7dbb00f3.hot-update.js.map