/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/wbroberts-quadtree-outline/lib/area-boundary/area-boundary.js":
/*!************************************************************************************!*\
  !*** ./node_modules/wbroberts-quadtree-outline/lib/area-boundary/area-boundary.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AreaBoundary {
    constructor(area) {
        this.width = area.width;
        this.height = area.height;
        this.x = area.x;
        this.y = area.y;
        this.center = {
            x: (this.x + this.width) / 2,
            y: (this.y + this.height) / 2
        };
    }
    contains(point) {
        const left = this.x;
        const right = this.x + this.width;
        const top = this.y;
        const bottom = this.y + this.height;
        return point.x >= left && point.x <= right && point.y >= top && point.y <= bottom;
    }
    intersects(range) {
        return !(range.x > this.x + this.width ||
            range.y > this.y + this.height ||
            range.x + range.width < this.x ||
            range.y + range.height < this.y);
    }
}
exports.AreaBoundary = AreaBoundary;


/***/ }),

/***/ "./node_modules/wbroberts-quadtree-outline/lib/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/wbroberts-quadtree-outline/lib/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./quadtree/quadtree */ "./node_modules/wbroberts-quadtree-outline/lib/quadtree/quadtree.js"));
__export(__webpack_require__(/*! ./area-boundary/area-boundary */ "./node_modules/wbroberts-quadtree-outline/lib/area-boundary/area-boundary.js"));


/***/ }),

/***/ "./node_modules/wbroberts-quadtree-outline/lib/quadtree/quadtree.js":
/*!**************************************************************************!*\
  !*** ./node_modules/wbroberts-quadtree-outline/lib/quadtree/quadtree.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const area_boundary_1 = __webpack_require__(/*! ../area-boundary/area-boundary */ "./node_modules/wbroberts-quadtree-outline/lib/area-boundary/area-boundary.js");
class QuadTree {
    constructor(boundary, ctx, capacity = 3) {
        this.boundary = boundary;
        this.ctx = ctx;
        this.capacity = capacity;
        this.items = [];
        this.isDivided = false;
        this.topLeft = null;
        this.topRight = null;
        this.bottomLeft = null;
        this.bottomRight = null;
        this.draw(ctx);
    }
    divide() {
        const halfWidth = this.boundary.width / 2;
        const halfHeight = this.boundary.height / 2;
        this.topLeft = new QuadTree(new area_boundary_1.AreaBoundary({
            x: this.boundary.x,
            y: this.boundary.y,
            width: halfWidth,
            height: halfHeight
        }), this.ctx);
        this.topRight = new QuadTree(new area_boundary_1.AreaBoundary({
            x: this.boundary.x + halfWidth,
            y: this.boundary.y,
            width: halfWidth,
            height: halfHeight
        }), this.ctx);
        this.bottomLeft = new QuadTree(new area_boundary_1.AreaBoundary({
            x: this.boundary.x,
            y: this.boundary.y + halfHeight,
            width: halfWidth,
            height: halfHeight
        }), this.ctx);
        this.bottomRight = new QuadTree(new area_boundary_1.AreaBoundary({
            x: this.boundary.x + halfWidth,
            y: this.boundary.y + halfHeight,
            width: halfWidth,
            height: halfHeight
        }), this.ctx);
        this.isDivided = true;
    }
    insert(point) {
        if (!this.boundary.contains(point)) {
            return false;
        }
        if (this.boundary.contains(point) && !this.isFull()) {
            this.items.push(point);
            return true;
        }
        if (!this.isDivided) {
            this.divide();
        }
        return (this.topLeft.insert(point) ||
            this.topRight.insert(point) ||
            this.bottomLeft.insert(point) ||
            this.bottomRight.insert(point));
    }
    isFull() {
        return this.items.length === this.capacity;
    }
    query(range, array = []) {
        if (!this.boundary.intersects(range)) {
            return array;
        }
        for (let p of this.items) {
            if (range.contains(p)) {
                array.push(p);
            }
        }
        if (this.isDivided) {
            this.topLeft.query(range, array);
            this.topRight.query(range, array);
            this.bottomLeft.query(range, array);
            this.bottomRight.query(range, array);
        }
        return array;
    }
    draw(ctx) {
        ctx.lineWidth = 1;
        !this.isDivided ? (ctx.strokeStyle = 'yellow') : (ctx.strokeStyle = 'red');
        ctx.strokeRect(this.boundary.x, this.boundary.y, this.boundary.width, this.boundary.height);
        ctx.stroke();
    }
}
exports.QuadTree = QuadTree;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var wbroberts_quadtree_outline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wbroberts-quadtree-outline */ "./node_modules/wbroberts-quadtree-outline/lib/index.js");
/* harmony import */ var wbroberts_quadtree_outline__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wbroberts_quadtree_outline__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rendering_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rendering-point */ "./src/rendering-point.ts");


var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
var canvasBoundary = new wbroberts_quadtree_outline__WEBPACK_IMPORTED_MODULE_0__["AreaBoundary"]({
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height
});
var qTree;
var points = [];

for (var i = 0; i < 500; i++) {
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var radius = 5;
  var point = new _rendering_point__WEBPACK_IMPORTED_MODULE_1__["RenderingPoint"](x, y, radius, {
    i: i,
    collided: false
  });
  points.push(point);
}

var mouse = new _rendering_point__WEBPACK_IMPORTED_MODULE_1__["RenderingPoint"](50, 50, 10, {
  i: 'mouse',
  collided: false
});

var loop = function loop() {
  ctx.fillStyle = '#2D3748';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  qTree = new wbroberts_quadtree_outline__WEBPACK_IMPORTED_MODULE_0__["QuadTree"](canvasBoundary, ctx);
  mouse.render(ctx, false);
  qTree.insert(mouse);

  for (var _i = 0, _points = points; _i < _points.length; _i++) {
    var p = _points[_i];
    p.render(ctx, false, '#319795');
    p.move();
    qTree.insert(p);
    var boundary = {
      x: p.left,
      y: p.top,
      width: p.maxDistance() * 2,
      height: p.maxDistance() * 2
    };
    var area = new wbroberts_quadtree_outline__WEBPACK_IMPORTED_MODULE_0__["AreaBoundary"](boundary);
    var toCheck = qTree.query(area);
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = toCheck[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var c = _step2.value;

        if (p !== c && p.distance(c) / 2 <= p.maxDistance() && p.isColliding(c)) {
          p.render(ctx, true, '#E53E3E');
          c.render(ctx, true, '#E53E3E');
          p.data.collided = true;
          c.data.collided = true;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  var mouseBoundary = {
    x: mouse.left,
    y: mouse.top,
    width: mouse.maxDistance() * 2,
    height: mouse.maxDistance() * 2
  };
  var mouseArea = new wbroberts_quadtree_outline__WEBPACK_IMPORTED_MODULE_0__["AreaBoundary"](mouseBoundary);
  var mtoCheck = qTree.query(mouseArea);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = mtoCheck[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _c = _step.value;

      if (mouse !== _c && mouse.distance(_c) / 2 <= mouse.maxDistance() && mouse.isColliding(_c)) {
        mouse.render(ctx, true, '#742A2A');

        _c.render(ctx, true, '#FAF089');

        mouse.data.collided = true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  requestAnimationFrame(loop);
};

window.onload = function () {
  document.body.querySelector('#container').appendChild(canvas);
  document.addEventListener('mousemove', function (e) {
    var x = e.clientX - canvas.getBoundingClientRect().left;
    var y = e.clientY - canvas.getBoundingClientRect().top;
    mouse.x = x;
    mouse.y = y;
  });
  loop();
};

/***/ }),

/***/ "./src/rendering-point.ts":
/*!********************************!*\
  !*** ./src/rendering-point.ts ***!
  \********************************/
/*! exports provided: RenderingPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderingPoint", function() { return RenderingPoint; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RenderingPoint =
/*#__PURE__*/
function () {
  function RenderingPoint(x, y, radius, data) {
    _classCallCheck(this, RenderingPoint);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.data = data;

    _defineProperty(this, "center", {
      x: this.x,
      y: this.y
    });
  }

  _createClass(RenderingPoint, [{
    key: "isColliding",
    value: function isColliding(point) {
      return this.right >= point.left && this.left <= point.right && this.bottom >= point.top && this.top <= point.bottom;
    }
  }, {
    key: "distance",
    value: function distance(point) {
      var xDist = Math.abs(this.x - point.x);
      var yDist = Math.abs(this.y - point.y);
      return Math.floor(Math.sqrt(xDist * xDist + yDist * yDist));
    }
  }, {
    key: "maxDistance",
    value: function maxDistance() {
      return Math.ceil(Math.sqrt(this.radius * this.radius + this.radius * this.radius));
    }
  }, {
    key: "move",
    value: function move() {
      this.x += Math.random() > 0.5 ? -1 : 1;
      this.y += Math.random() > 0.5 ? -1 : 1;
      this.updateCenter(this.x, this.y);
    }
  }, {
    key: "render",
    value: function render(ctx, colliding) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'white';
      var radius = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.radius;

      if (colliding) {
        ctx.fillStyle = color;
      } else {
        ctx.fillStyle = color;
      }

      ctx.fillRect(this.left, this.top, radius * 2, radius * 2);
      this.updateCenter(this.x, this.y);
    }
  }, {
    key: "updateCenter",
    value: function updateCenter(x, y) {
      this.center.x = x;
      this.center.y = y;
    }
  }, {
    key: "left",
    get: function get() {
      return this.x - this.radius;
    }
  }, {
    key: "right",
    get: function get() {
      return this.x + this.radius;
    }
  }, {
    key: "top",
    get: function get() {
      return this.y - this.radius;
    }
  }, {
    key: "bottom",
    get: function get() {
      return this.y + this.radius;
    }
  }]);

  return RenderingPoint;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dicm9iZXJ0cy1xdWFkdHJlZS1vdXRsaW5lL2xpYi9hcmVhLWJvdW5kYXJ5L2FyZWEtYm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dicm9iZXJ0cy1xdWFkdHJlZS1vdXRsaW5lL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2Jyb2JlcnRzLXF1YWR0cmVlLW91dGxpbmUvbGliL3F1YWR0cmVlL3F1YWR0cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyaW5nLXBvaW50LnRzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImNhbnZhc0JvdW5kYXJ5IiwiQXJlYUJvdW5kYXJ5IiwieCIsInkiLCJxVHJlZSIsInBvaW50cyIsImkiLCJNYXRoIiwicmFuZG9tIiwicmFkaXVzIiwicG9pbnQiLCJSZW5kZXJpbmdQb2ludCIsImNvbGxpZGVkIiwicHVzaCIsIm1vdXNlIiwibG9vcCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiUXVhZFRyZWUiLCJyZW5kZXIiLCJpbnNlcnQiLCJwIiwibW92ZSIsImJvdW5kYXJ5IiwibGVmdCIsInRvcCIsIm1heERpc3RhbmNlIiwiYXJlYSIsInRvQ2hlY2siLCJxdWVyeSIsImMiLCJkaXN0YW5jZSIsImlzQ29sbGlkaW5nIiwiZGF0YSIsIm1vdXNlQm91bmRhcnkiLCJtb3VzZUFyZWEiLCJtdG9DaGVjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndpbmRvdyIsIm9ubG9hZCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNsaWVudFgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRZIiwicmlnaHQiLCJib3R0b20iLCJ4RGlzdCIsImFicyIsInlEaXN0IiwiZmxvb3IiLCJzcXJ0IiwiY2VpbCIsInVwZGF0ZUNlbnRlciIsImNvbGxpZGluZyIsImNvbG9yIiwiY2VudGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNCYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELFNBQVMsbUJBQU8sQ0FBQywrRkFBcUI7QUFDdEMsU0FBUyxtQkFBTyxDQUFDLG1IQUErQjs7Ozs7Ozs7Ozs7OztBQ05uQztBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHdCQUF3QixtQkFBTyxDQUFDLG9IQUFnQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQUosTUFBTSxDQUFDSyxLQUFQLEdBQWUsR0FBZjtBQUNBTCxNQUFNLENBQUNNLE1BQVAsR0FBZ0IsR0FBaEI7QUFFQSxJQUFNQyxjQUFjLEdBQUcsSUFBSUMsdUVBQUosQ0FBaUI7QUFBRUMsR0FBQyxFQUFFLENBQUw7QUFBUUMsR0FBQyxFQUFFLENBQVg7QUFBY0wsT0FBSyxFQUFFTCxNQUFNLENBQUNLLEtBQTVCO0FBQW1DQyxRQUFNLEVBQUVOLE1BQU0sQ0FBQ007QUFBbEQsQ0FBakIsQ0FBdkI7QUFDQSxJQUFJSyxLQUFKO0FBQ0EsSUFBSUMsTUFBd0IsR0FBRyxFQUEvQjs7QUFFQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsR0FBcEIsRUFBeUJBLENBQUMsRUFBMUIsRUFBOEI7QUFDNUIsTUFBTUosQ0FBQyxHQUFHSyxJQUFJLENBQUNDLE1BQUwsS0FBZ0JmLE1BQU0sQ0FBQ0ssS0FBakM7QUFDQSxNQUFNSyxDQUFDLEdBQUdJLElBQUksQ0FBQ0MsTUFBTCxLQUFnQmYsTUFBTSxDQUFDTSxNQUFqQztBQUNBLE1BQU1VLE1BQU0sR0FBRyxDQUFmO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLElBQUlDLCtEQUFKLENBQW1CVCxDQUFuQixFQUFzQkMsQ0FBdEIsRUFBeUJNLE1BQXpCLEVBQWlDO0FBQUVILEtBQUMsRUFBREEsQ0FBRjtBQUFLTSxZQUFRLEVBQUU7QUFBZixHQUFqQyxDQUFkO0FBRUFQLFFBQU0sQ0FBQ1EsSUFBUCxDQUFZSCxLQUFaO0FBQ0Q7O0FBRUQsSUFBTUksS0FBSyxHQUFHLElBQUlILCtEQUFKLENBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLEVBQStCO0FBQUVMLEdBQUMsRUFBRSxPQUFMO0FBQWNNLFVBQVEsRUFBRTtBQUF4QixDQUEvQixDQUFkOztBQUVBLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakJuQixLQUFHLENBQUNvQixTQUFKLEdBQWdCLFNBQWhCO0FBQ0FwQixLQUFHLENBQUNxQixRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQnhCLE1BQU0sQ0FBQ0ssS0FBMUIsRUFBaUNMLE1BQU0sQ0FBQ00sTUFBeEM7QUFFQUssT0FBSyxHQUFHLElBQUljLG1FQUFKLENBQWFsQixjQUFiLEVBQTZCSixHQUE3QixDQUFSO0FBQ0FrQixPQUFLLENBQUNLLE1BQU4sQ0FBYXZCLEdBQWIsRUFBa0IsS0FBbEI7QUFDQVEsT0FBSyxDQUFDZ0IsTUFBTixDQUFhTixLQUFiOztBQUVBLDZCQUFnQlQsTUFBaEIsNkJBQXdCO0FBQW5CLFFBQU1nQixDQUFDLGNBQVA7QUFDSEEsS0FBQyxDQUFDRixNQUFGLENBQVN2QixHQUFULEVBQWMsS0FBZCxFQUFxQixTQUFyQjtBQUNBeUIsS0FBQyxDQUFDQyxJQUFGO0FBQ0FsQixTQUFLLENBQUNnQixNQUFOLENBQWFDLENBQWI7QUFFQSxRQUFNRSxRQUFRLEdBQUc7QUFDZnJCLE9BQUMsRUFBRW1CLENBQUMsQ0FBQ0csSUFEVTtBQUVmckIsT0FBQyxFQUFFa0IsQ0FBQyxDQUFDSSxHQUZVO0FBR2YzQixXQUFLLEVBQUV1QixDQUFDLENBQUNLLFdBQUYsS0FBa0IsQ0FIVjtBQUlmM0IsWUFBTSxFQUFFc0IsQ0FBQyxDQUFDSyxXQUFGLEtBQWtCO0FBSlgsS0FBakI7QUFPQSxRQUFNQyxJQUFJLEdBQUcsSUFBSTFCLHVFQUFKLENBQWlCc0IsUUFBakIsQ0FBYjtBQUNBLFFBQU1LLE9BQU8sR0FBR3hCLEtBQUssQ0FBQ3lCLEtBQU4sQ0FBWUYsSUFBWixDQUFoQjtBQWJzQjtBQUFBO0FBQUE7O0FBQUE7QUFldEIsNEJBQWNDLE9BQWQsbUlBQXVCO0FBQUEsWUFBZEUsQ0FBYzs7QUFDckIsWUFBSVQsQ0FBQyxLQUFLUyxDQUFOLElBQVdULENBQUMsQ0FBQ1UsUUFBRixDQUFXRCxDQUFYLElBQWdCLENBQWhCLElBQXFCVCxDQUFDLENBQUNLLFdBQUYsRUFBaEMsSUFBbURMLENBQUMsQ0FBQ1csV0FBRixDQUFjRixDQUFkLENBQXZELEVBQXlFO0FBQ3ZFVCxXQUFDLENBQUNGLE1BQUYsQ0FBU3ZCLEdBQVQsRUFBYyxJQUFkLEVBQW9CLFNBQXBCO0FBQ0FrQyxXQUFDLENBQUNYLE1BQUYsQ0FBU3ZCLEdBQVQsRUFBYyxJQUFkLEVBQW9CLFNBQXBCO0FBRUF5QixXQUFDLENBQUNZLElBQUYsQ0FBT3JCLFFBQVAsR0FBa0IsSUFBbEI7QUFDQWtCLFdBQUMsQ0FBQ0csSUFBRixDQUFPckIsUUFBUCxHQUFrQixJQUFsQjtBQUNEO0FBQ0Y7QUF2QnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF3QnZCOztBQUVELE1BQU1zQixhQUFhLEdBQUc7QUFDcEJoQyxLQUFDLEVBQUVZLEtBQUssQ0FBQ1UsSUFEVztBQUVwQnJCLEtBQUMsRUFBRVcsS0FBSyxDQUFDVyxHQUZXO0FBR3BCM0IsU0FBSyxFQUFFZ0IsS0FBSyxDQUFDWSxXQUFOLEtBQXNCLENBSFQ7QUFJcEIzQixVQUFNLEVBQUVlLEtBQUssQ0FBQ1ksV0FBTixLQUFzQjtBQUpWLEdBQXRCO0FBT0EsTUFBTVMsU0FBUyxHQUFHLElBQUlsQyx1RUFBSixDQUFpQmlDLGFBQWpCLENBQWxCO0FBQ0EsTUFBTUUsUUFBUSxHQUFHaEMsS0FBSyxDQUFDeUIsS0FBTixDQUFZTSxTQUFaLENBQWpCO0FBMUNpQjtBQUFBO0FBQUE7O0FBQUE7QUE0Q2pCLHlCQUFjQyxRQUFkLDhIQUF3QjtBQUFBLFVBQWZOLEVBQWU7O0FBQ3RCLFVBQ0VoQixLQUFLLEtBQUtnQixFQUFWLElBQ0FoQixLQUFLLENBQUNpQixRQUFOLENBQWVELEVBQWYsSUFBb0IsQ0FBcEIsSUFBeUJoQixLQUFLLENBQUNZLFdBQU4sRUFEekIsSUFFQVosS0FBSyxDQUFDa0IsV0FBTixDQUFrQkYsRUFBbEIsQ0FIRixFQUlFO0FBQ0FoQixhQUFLLENBQUNLLE1BQU4sQ0FBYXZCLEdBQWIsRUFBa0IsSUFBbEIsRUFBd0IsU0FBeEI7O0FBQ0FrQyxVQUFDLENBQUNYLE1BQUYsQ0FBU3ZCLEdBQVQsRUFBYyxJQUFkLEVBQW9CLFNBQXBCOztBQUVBa0IsYUFBSyxDQUFDbUIsSUFBTixDQUFXckIsUUFBWCxHQUFzQixJQUF0QjtBQUNEO0FBQ0Y7QUF2RGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBeURqQnlCLHVCQUFxQixDQUFDdEIsSUFBRCxDQUFyQjtBQUNELENBMUREOztBQTREQXVCLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixZQUFNO0FBQ3BCN0MsVUFBUSxDQUFDOEMsSUFBVCxDQUFjQyxhQUFkLENBQTRCLFlBQTVCLEVBQTBDQyxXQUExQyxDQUFzRGpELE1BQXREO0FBQ0FDLFVBQVEsQ0FBQ2lELGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLFVBQUFDLENBQUMsRUFBSTtBQUMxQyxRQUFNMUMsQ0FBQyxHQUFHMEMsQ0FBQyxDQUFDQyxPQUFGLEdBQVlwRCxNQUFNLENBQUNxRCxxQkFBUCxHQUErQnRCLElBQXJEO0FBQ0EsUUFBTXJCLENBQUMsR0FBR3lDLENBQUMsQ0FBQ0csT0FBRixHQUFZdEQsTUFBTSxDQUFDcUQscUJBQVAsR0FBK0JyQixHQUFyRDtBQUVBWCxTQUFLLENBQUNaLENBQU4sR0FBVUEsQ0FBVjtBQUNBWSxTQUFLLENBQUNYLENBQU4sR0FBVUEsQ0FBVjtBQUNELEdBTkQ7QUFPQVksTUFBSTtBQUNMLENBVkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGTyxJQUFNSixjQUFiO0FBQUE7QUFBQTtBQUdFLDBCQUFvQlQsQ0FBcEIsRUFBc0NDLENBQXRDLEVBQXdETSxNQUF4RCxFQUErRXdCLElBQS9FLEVBQTBGO0FBQUE7O0FBQUEsU0FBdEUvQixDQUFzRSxHQUF0RUEsQ0FBc0U7QUFBQSxTQUFwREMsQ0FBb0QsR0FBcERBLENBQW9EO0FBQUEsU0FBbENNLE1BQWtDLEdBQWxDQSxNQUFrQztBQUFBLFNBQVh3QixJQUFXLEdBQVhBLElBQVc7O0FBQUEsb0NBRnpFO0FBQUUvQixPQUFDLEVBQUUsS0FBS0EsQ0FBVjtBQUFhQyxPQUFDLEVBQUUsS0FBS0E7QUFBckIsS0FFeUU7QUFBRzs7QUFIL0Y7QUFBQTtBQUFBLGdDQVVjTyxLQVZkLEVBVThDO0FBQzFDLGFBQ0UsS0FBS3NDLEtBQUwsSUFBY3RDLEtBQUssQ0FBQ2MsSUFBcEIsSUFDQSxLQUFLQSxJQUFMLElBQWFkLEtBQUssQ0FBQ3NDLEtBRG5CLElBRUEsS0FBS0MsTUFBTCxJQUFldkMsS0FBSyxDQUFDZSxHQUZyQixJQUdBLEtBQUtBLEdBQUwsSUFBWWYsS0FBSyxDQUFDdUMsTUFKcEI7QUFNRDtBQWpCSDtBQUFBO0FBQUEsNkJBbUJXdkMsS0FuQlgsRUFtQjBDO0FBQ3RDLFVBQU13QyxLQUFLLEdBQUczQyxJQUFJLENBQUM0QyxHQUFMLENBQVMsS0FBS2pELENBQUwsR0FBU1EsS0FBSyxDQUFDUixDQUF4QixDQUFkO0FBQ0EsVUFBTWtELEtBQUssR0FBRzdDLElBQUksQ0FBQzRDLEdBQUwsQ0FBUyxLQUFLaEQsQ0FBTCxHQUFTTyxLQUFLLENBQUNQLENBQXhCLENBQWQ7QUFFQSxhQUFPSSxJQUFJLENBQUM4QyxLQUFMLENBQVc5QyxJQUFJLENBQUMrQyxJQUFMLENBQVVKLEtBQUssR0FBR0EsS0FBUixHQUFnQkUsS0FBSyxHQUFHQSxLQUFsQyxDQUFYLENBQVA7QUFDRDtBQXhCSDtBQUFBO0FBQUEsa0NBMEJ3QjtBQUNwQixhQUFPN0MsSUFBSSxDQUFDZ0QsSUFBTCxDQUFVaEQsSUFBSSxDQUFDK0MsSUFBTCxDQUFVLEtBQUs3QyxNQUFMLEdBQWMsS0FBS0EsTUFBbkIsR0FBNEIsS0FBS0EsTUFBTCxHQUFjLEtBQUtBLE1BQXpELENBQVYsQ0FBUDtBQUNEO0FBNUJIO0FBQUE7QUFBQSwyQkE4QmU7QUFDWCxXQUFLUCxDQUFMLElBQVVLLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFoQixHQUFzQixDQUFDLENBQXZCLEdBQTJCLENBQXJDO0FBQ0EsV0FBS0wsQ0FBTCxJQUFVSSxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBaEIsR0FBc0IsQ0FBQyxDQUF2QixHQUEyQixDQUFyQztBQUNBLFdBQUtnRCxZQUFMLENBQWtCLEtBQUt0RCxDQUF2QixFQUEwQixLQUFLQyxDQUEvQjtBQUNEO0FBbENIO0FBQUE7QUFBQSwyQkFxQ0lQLEdBckNKLEVBc0NJNkQsU0F0Q0osRUF5Q0k7QUFBQSxVQUZBQyxLQUVBLHVFQUZRLE9BRVI7QUFBQSxVQURBakQsTUFDQSx1RUFEUyxLQUFLQSxNQUNkOztBQUNBLFVBQUlnRCxTQUFKLEVBQWU7QUFDYjdELFdBQUcsQ0FBQ29CLFNBQUosR0FBZ0IwQyxLQUFoQjtBQUNELE9BRkQsTUFFTztBQUNMOUQsV0FBRyxDQUFDb0IsU0FBSixHQUFnQjBDLEtBQWhCO0FBQ0Q7O0FBQ0Q5RCxTQUFHLENBQUNxQixRQUFKLENBQWEsS0FBS08sSUFBbEIsRUFBd0IsS0FBS0MsR0FBN0IsRUFBa0NoQixNQUFNLEdBQUcsQ0FBM0MsRUFBOENBLE1BQU0sR0FBRyxDQUF2RDtBQUVBLFdBQUsrQyxZQUFMLENBQWtCLEtBQUt0RCxDQUF2QixFQUEwQixLQUFLQyxDQUEvQjtBQUNEO0FBbERIO0FBQUE7QUFBQSxpQ0FvRGVELENBcERmLEVBb0QwQkMsQ0FwRDFCLEVBb0RxQztBQUNqQyxXQUFLd0QsTUFBTCxDQUFZekQsQ0FBWixHQUFnQkEsQ0FBaEI7QUFDQSxXQUFLeUQsTUFBTCxDQUFZeEQsQ0FBWixHQUFnQkEsQ0FBaEI7QUFDRDtBQXZESDtBQUFBO0FBQUEsd0JBS2E7QUFBRSxhQUFPLEtBQUtELENBQUwsR0FBUyxLQUFLTyxNQUFyQjtBQUE2QjtBQUw1QztBQUFBO0FBQUEsd0JBTWM7QUFBRSxhQUFPLEtBQUtQLENBQUwsR0FBUyxLQUFLTyxNQUFyQjtBQUE2QjtBQU43QztBQUFBO0FBQUEsd0JBT1k7QUFBRSxhQUFPLEtBQUtOLENBQUwsR0FBUyxLQUFLTSxNQUFyQjtBQUE2QjtBQVAzQztBQUFBO0FBQUEsd0JBUWU7QUFBRSxhQUFPLEtBQUtOLENBQUwsR0FBUyxLQUFLTSxNQUFyQjtBQUE2QjtBQVI5Qzs7QUFBQTtBQUFBLEkiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEFyZWFCb3VuZGFyeSB7XG4gICAgY29uc3RydWN0b3IoYXJlYSkge1xuICAgICAgICB0aGlzLndpZHRoID0gYXJlYS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBhcmVhLmhlaWdodDtcbiAgICAgICAgdGhpcy54ID0gYXJlYS54O1xuICAgICAgICB0aGlzLnkgPSBhcmVhLnk7XG4gICAgICAgIHRoaXMuY2VudGVyID0ge1xuICAgICAgICAgICAgeDogKHRoaXMueCArIHRoaXMud2lkdGgpIC8gMixcbiAgICAgICAgICAgIHk6ICh0aGlzLnkgKyB0aGlzLmhlaWdodCkgLyAyXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnRhaW5zKHBvaW50KSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLng7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy54ICsgdGhpcy53aWR0aDtcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy55O1xuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLnkgKyB0aGlzLmhlaWdodDtcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPj0gbGVmdCAmJiBwb2ludC54IDw9IHJpZ2h0ICYmIHBvaW50LnkgPj0gdG9wICYmIHBvaW50LnkgPD0gYm90dG9tO1xuICAgIH1cbiAgICBpbnRlcnNlY3RzKHJhbmdlKSB7XG4gICAgICAgIHJldHVybiAhKHJhbmdlLnggPiB0aGlzLnggKyB0aGlzLndpZHRoIHx8XG4gICAgICAgICAgICByYW5nZS55ID4gdGhpcy55ICsgdGhpcy5oZWlnaHQgfHxcbiAgICAgICAgICAgIHJhbmdlLnggKyByYW5nZS53aWR0aCA8IHRoaXMueCB8fFxuICAgICAgICAgICAgcmFuZ2UueSArIHJhbmdlLmhlaWdodCA8IHRoaXMueSk7XG4gICAgfVxufVxuZXhwb3J0cy5BcmVhQm91bmRhcnkgPSBBcmVhQm91bmRhcnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9xdWFkdHJlZS9xdWFkdHJlZVwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hcmVhLWJvdW5kYXJ5L2FyZWEtYm91bmRhcnlcIikpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhcmVhX2JvdW5kYXJ5XzEgPSByZXF1aXJlKFwiLi4vYXJlYS1ib3VuZGFyeS9hcmVhLWJvdW5kYXJ5XCIpO1xuY2xhc3MgUXVhZFRyZWUge1xuICAgIGNvbnN0cnVjdG9yKGJvdW5kYXJ5LCBjdHgsIGNhcGFjaXR5ID0gMykge1xuICAgICAgICB0aGlzLmJvdW5kYXJ5ID0gYm91bmRhcnk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhcGFjaXR5ID0gY2FwYWNpdHk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5pc0RpdmlkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b3BMZWZ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy50b3BSaWdodCA9IG51bGw7XG4gICAgICAgIHRoaXMuYm90dG9tTGVmdCA9IG51bGw7XG4gICAgICAgIHRoaXMuYm90dG9tUmlnaHQgPSBudWxsO1xuICAgICAgICB0aGlzLmRyYXcoY3R4KTtcbiAgICB9XG4gICAgZGl2aWRlKCkge1xuICAgICAgICBjb25zdCBoYWxmV2lkdGggPSB0aGlzLmJvdW5kYXJ5LndpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgaGFsZkhlaWdodCA9IHRoaXMuYm91bmRhcnkuaGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy50b3BMZWZ0ID0gbmV3IFF1YWRUcmVlKG5ldyBhcmVhX2JvdW5kYXJ5XzEuQXJlYUJvdW5kYXJ5KHtcbiAgICAgICAgICAgIHg6IHRoaXMuYm91bmRhcnkueCxcbiAgICAgICAgICAgIHk6IHRoaXMuYm91bmRhcnkueSxcbiAgICAgICAgICAgIHdpZHRoOiBoYWxmV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhhbGZIZWlnaHRcbiAgICAgICAgfSksIHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy50b3BSaWdodCA9IG5ldyBRdWFkVHJlZShuZXcgYXJlYV9ib3VuZGFyeV8xLkFyZWFCb3VuZGFyeSh7XG4gICAgICAgICAgICB4OiB0aGlzLmJvdW5kYXJ5LnggKyBoYWxmV2lkdGgsXG4gICAgICAgICAgICB5OiB0aGlzLmJvdW5kYXJ5LnksXG4gICAgICAgICAgICB3aWR0aDogaGFsZldpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoYWxmSGVpZ2h0XG4gICAgICAgIH0pLCB0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuYm90dG9tTGVmdCA9IG5ldyBRdWFkVHJlZShuZXcgYXJlYV9ib3VuZGFyeV8xLkFyZWFCb3VuZGFyeSh7XG4gICAgICAgICAgICB4OiB0aGlzLmJvdW5kYXJ5LngsXG4gICAgICAgICAgICB5OiB0aGlzLmJvdW5kYXJ5LnkgKyBoYWxmSGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGg6IGhhbGZXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGFsZkhlaWdodFxuICAgICAgICB9KSwgdGhpcy5jdHgpO1xuICAgICAgICB0aGlzLmJvdHRvbVJpZ2h0ID0gbmV3IFF1YWRUcmVlKG5ldyBhcmVhX2JvdW5kYXJ5XzEuQXJlYUJvdW5kYXJ5KHtcbiAgICAgICAgICAgIHg6IHRoaXMuYm91bmRhcnkueCArIGhhbGZXaWR0aCxcbiAgICAgICAgICAgIHk6IHRoaXMuYm91bmRhcnkueSArIGhhbGZIZWlnaHQsXG4gICAgICAgICAgICB3aWR0aDogaGFsZldpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoYWxmSGVpZ2h0XG4gICAgICAgIH0pLCB0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuaXNEaXZpZGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5zZXJ0KHBvaW50KSB7XG4gICAgICAgIGlmICghdGhpcy5ib3VuZGFyeS5jb250YWlucyhwb2ludCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ib3VuZGFyeS5jb250YWlucyhwb2ludCkgJiYgIXRoaXMuaXNGdWxsKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChwb2ludCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNEaXZpZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRpdmlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodGhpcy50b3BMZWZ0Lmluc2VydChwb2ludCkgfHxcbiAgICAgICAgICAgIHRoaXMudG9wUmlnaHQuaW5zZXJ0KHBvaW50KSB8fFxuICAgICAgICAgICAgdGhpcy5ib3R0b21MZWZ0Lmluc2VydChwb2ludCkgfHxcbiAgICAgICAgICAgIHRoaXMuYm90dG9tUmlnaHQuaW5zZXJ0KHBvaW50KSk7XG4gICAgfVxuICAgIGlzRnVsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoID09PSB0aGlzLmNhcGFjaXR5O1xuICAgIH1cbiAgICBxdWVyeShyYW5nZSwgYXJyYXkgPSBbXSkge1xuICAgICAgICBpZiAoIXRoaXMuYm91bmRhcnkuaW50ZXJzZWN0cyhyYW5nZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgIGlmIChyYW5nZS5jb250YWlucyhwKSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2gocCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNEaXZpZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRvcExlZnQucXVlcnkocmFuZ2UsIGFycmF5KTtcbiAgICAgICAgICAgIHRoaXMudG9wUmlnaHQucXVlcnkocmFuZ2UsIGFycmF5KTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tTGVmdC5xdWVyeShyYW5nZSwgYXJyYXkpO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21SaWdodC5xdWVyeShyYW5nZSwgYXJyYXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICF0aGlzLmlzRGl2aWRlZCA/IChjdHguc3Ryb2tlU3R5bGUgPSAneWVsbG93JykgOiAoY3R4LnN0cm9rZVN0eWxlID0gJ3JlZCcpO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLmJvdW5kYXJ5LngsIHRoaXMuYm91bmRhcnkueSwgdGhpcy5ib3VuZGFyeS53aWR0aCwgdGhpcy5ib3VuZGFyeS5oZWlnaHQpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxufVxuZXhwb3J0cy5RdWFkVHJlZSA9IFF1YWRUcmVlO1xuIiwiaW1wb3J0IHsgQXJlYUJvdW5kYXJ5LCBRdWFkVHJlZSB9IGZyb20gJ3dicm9iZXJ0cy1xdWFkdHJlZS1vdXRsaW5lJztcblxuaW1wb3J0IHsgUmVuZGVyaW5nUG9pbnQgfSBmcm9tICcuL3JlbmRlcmluZy1wb2ludCc7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jYW52YXMud2lkdGggPSA1MDA7XG5jYW52YXMuaGVpZ2h0ID0gNTAwO1xuXG5jb25zdCBjYW52YXNCb3VuZGFyeSA9IG5ldyBBcmVhQm91bmRhcnkoeyB4OiAwLCB5OiAwLCB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfSk7XG5sZXQgcVRyZWU6IFF1YWRUcmVlO1xubGV0IHBvaW50czogUmVuZGVyaW5nUG9pbnRbXSA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDUwMDsgaSsrKSB7XG4gIGNvbnN0IHggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xuICBjb25zdCB5ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XG4gIGNvbnN0IHJhZGl1cyA9IDU7XG4gIGNvbnN0IHBvaW50ID0gbmV3IFJlbmRlcmluZ1BvaW50KHgsIHksIHJhZGl1cywgeyBpLCBjb2xsaWRlZDogZmFsc2UgfSk7XG5cbiAgcG9pbnRzLnB1c2gocG9pbnQpO1xufVxuXG5jb25zdCBtb3VzZSA9IG5ldyBSZW5kZXJpbmdQb2ludCg1MCwgNTAsIDEwLCB7IGk6ICdtb3VzZScsIGNvbGxpZGVkOiBmYWxzZSB9KTtcblxuY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgY3R4LmZpbGxTdHlsZSA9ICcjMkQzNzQ4JztcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgcVRyZWUgPSBuZXcgUXVhZFRyZWUoY2FudmFzQm91bmRhcnksIGN0eCk7XG4gIG1vdXNlLnJlbmRlcihjdHgsIGZhbHNlKTtcbiAgcVRyZWUuaW5zZXJ0KG1vdXNlKTtcblxuICBmb3IgKGNvbnN0IHAgb2YgcG9pbnRzKSB7XG4gICAgcC5yZW5kZXIoY3R4LCBmYWxzZSwgJyMzMTk3OTUnKTtcbiAgICBwLm1vdmUoKTtcbiAgICBxVHJlZS5pbnNlcnQocCk7XG5cbiAgICBjb25zdCBib3VuZGFyeSA9IHtcbiAgICAgIHg6IHAubGVmdCxcbiAgICAgIHk6IHAudG9wLFxuICAgICAgd2lkdGg6IHAubWF4RGlzdGFuY2UoKSAqIDIsXG4gICAgICBoZWlnaHQ6IHAubWF4RGlzdGFuY2UoKSAqIDJcbiAgICB9O1xuXG4gICAgY29uc3QgYXJlYSA9IG5ldyBBcmVhQm91bmRhcnkoYm91bmRhcnkpO1xuICAgIGNvbnN0IHRvQ2hlY2sgPSBxVHJlZS5xdWVyeShhcmVhKTtcblxuICAgIGZvciAobGV0IGMgb2YgdG9DaGVjaykge1xuICAgICAgaWYgKHAgIT09IGMgJiYgcC5kaXN0YW5jZShjKSAvIDIgPD0gcC5tYXhEaXN0YW5jZSgpICYmIHAuaXNDb2xsaWRpbmcoYykpIHtcbiAgICAgICAgcC5yZW5kZXIoY3R4LCB0cnVlLCAnI0U1M0UzRScpO1xuICAgICAgICBjLnJlbmRlcihjdHgsIHRydWUsICcjRTUzRTNFJyk7XG5cbiAgICAgICAgcC5kYXRhLmNvbGxpZGVkID0gdHJ1ZTtcbiAgICAgICAgYy5kYXRhLmNvbGxpZGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBtb3VzZUJvdW5kYXJ5ID0ge1xuICAgIHg6IG1vdXNlLmxlZnQsXG4gICAgeTogbW91c2UudG9wLFxuICAgIHdpZHRoOiBtb3VzZS5tYXhEaXN0YW5jZSgpICogMixcbiAgICBoZWlnaHQ6IG1vdXNlLm1heERpc3RhbmNlKCkgKiAyXG4gIH07XG5cbiAgY29uc3QgbW91c2VBcmVhID0gbmV3IEFyZWFCb3VuZGFyeShtb3VzZUJvdW5kYXJ5KTtcbiAgY29uc3QgbXRvQ2hlY2sgPSBxVHJlZS5xdWVyeShtb3VzZUFyZWEpO1xuXG4gIGZvciAobGV0IGMgb2YgbXRvQ2hlY2spIHtcbiAgICBpZiAoXG4gICAgICBtb3VzZSAhPT0gYyAmJlxuICAgICAgbW91c2UuZGlzdGFuY2UoYykgLyAyIDw9IG1vdXNlLm1heERpc3RhbmNlKCkgJiZcbiAgICAgIG1vdXNlLmlzQ29sbGlkaW5nKGMpXG4gICAgKSB7XG4gICAgICBtb3VzZS5yZW5kZXIoY3R4LCB0cnVlLCAnIzc0MkEyQScpO1xuICAgICAgYy5yZW5kZXIoY3R4LCB0cnVlLCAnI0ZBRjA4OScpO1xuXG4gICAgICBtb3VzZS5kYXRhLmNvbGxpZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG59O1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHtcbiAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICBtb3VzZS54ID0geDtcbiAgICBtb3VzZS55ID0geTtcbiAgfSk7XG4gIGxvb3AoKTtcbn07XG4iLCJleHBvcnQgY2xhc3MgUmVuZGVyaW5nUG9pbnQge1xuICBwcml2YXRlIGNlbnRlciA9IHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcblxuICBjb25zdHJ1Y3RvciAocHVibGljIHg6IG51bWJlciwgcHVibGljIHk6IG51bWJlciwgcHVibGljIHJhZGl1czogbnVtYmVyLCBwdWJsaWMgZGF0YTogYW55KSB7IH1cblxuICBnZXQgbGVmdCgpIHsgcmV0dXJuIHRoaXMueCAtIHRoaXMucmFkaXVzIH1cbiAgZ2V0IHJpZ2h0KCkgeyByZXR1cm4gdGhpcy54ICsgdGhpcy5yYWRpdXMgfVxuICBnZXQgdG9wKCkgeyByZXR1cm4gdGhpcy55IC0gdGhpcy5yYWRpdXMgfVxuICBnZXQgYm90dG9tKCkgeyByZXR1cm4gdGhpcy55ICsgdGhpcy5yYWRpdXMgfVxuXG4gIGlzQ29sbGlkaW5nKHBvaW50OiBSZW5kZXJpbmdQb2ludCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnJpZ2h0ID49IHBvaW50LmxlZnQgJiZcbiAgICAgIHRoaXMubGVmdCA8PSBwb2ludC5yaWdodCAmJlxuICAgICAgdGhpcy5ib3R0b20gPj0gcG9pbnQudG9wICYmXG4gICAgICB0aGlzLnRvcCA8PSBwb2ludC5ib3R0b21cbiAgICApO1xuICB9XG5cbiAgZGlzdGFuY2UocG9pbnQ6IFJlbmRlcmluZ1BvaW50KTogbnVtYmVyIHtcbiAgICBjb25zdCB4RGlzdCA9IE1hdGguYWJzKHRoaXMueCAtIHBvaW50LngpO1xuICAgIGNvbnN0IHlEaXN0ID0gTWF0aC5hYnModGhpcy55IC0gcG9pbnQueSk7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnNxcnQoeERpc3QgKiB4RGlzdCArIHlEaXN0ICogeURpc3QpKTtcbiAgfVxuXG4gIG1heERpc3RhbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLnNxcnQodGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cyArIHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXMpKTtcbiAgfVxuXG4gIG1vdmUoKTogdm9pZCB7XG4gICAgdGhpcy54ICs9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDE7XG4gICAgdGhpcy55ICs9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDE7XG4gICAgdGhpcy51cGRhdGVDZW50ZXIodGhpcy54LCB0aGlzLnkpO1xuICB9XG5cbiAgcmVuZGVyKFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIGNvbGxpZGluZzogYm9vbGVhbixcbiAgICBjb2xvciA9ICd3aGl0ZScsXG4gICAgcmFkaXVzID0gdGhpcy5yYWRpdXNcbiAgKSB7XG4gICAgaWYgKGNvbGxpZGluZykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgfVxuICAgIGN0eC5maWxsUmVjdCh0aGlzLmxlZnQsIHRoaXMudG9wLCByYWRpdXMgKiAyLCByYWRpdXMgKiAyKTtcblxuICAgIHRoaXMudXBkYXRlQ2VudGVyKHRoaXMueCwgdGhpcy55KTtcbiAgfVxuXG4gIHVwZGF0ZUNlbnRlcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIHRoaXMuY2VudGVyLnggPSB4O1xuICAgIHRoaXMuY2VudGVyLnkgPSB5O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==