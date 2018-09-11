webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/mitzuuuu/code/personal/nodejs/with-redux-app/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "onClick1", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var href = '/?index=1';
        var as = href;
        __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push(href, as, {
          shallow: true
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onClick2", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var href = '/?index=2';
        var as = href;
        __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push(href, as, {
          shallow: true
        });
      }
    });
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _props$router = this.props.router,
          pathname = _props$router.pathname,
          query = _props$router.query; // verify props have changed to avoid an infinite loop

      if (query.index !== prevProps.router.query.index) {
        console.log('index changed to ' + query.index);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-1362455275" + " " + 'hello'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-1362455275"
      }, "Hello World"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.onClick1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-1362455275"
      }, "&index=1"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.onClick2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-1362455275"
      }, "&index=2"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1362455275",
        css: ".hello.jsx-1362455275{font:15px Helvetica,Arial,sans-serif;background:#eee;padding:100px;text-align:center;-webkit-transition:100ms ease-in background;transition:100ms ease-in background;}.hello.jsx-1362455275:hover{background:#ccc;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDa0IsQUFHa0QsQUFPdkIsZ0JBQ2xCLHFCQVBrQixnQkFDRixjQUNJLGtCQUNrQixnRkFDdEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21pdHp1dXV1L2NvZGUvcGVyc29uYWwvbm9kZWpzL3dpdGgtcmVkdXgtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbiAgaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuICBpbXBvcnQgUm91dGVyLCB7d2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG4gIGltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbiAgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcy5wcm9wcy5yb3V0ZXJcbiAgICAvLyB2ZXJpZnkgcHJvcHMgaGF2ZSBjaGFuZ2VkIHRvIGF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICBpZiAocXVlcnkuaW5kZXggIT09IHByZXZQcm9wcy5yb3V0ZXIucXVlcnkuaW5kZXgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdpbmRleCBjaGFuZ2VkIHRvICcgKyBxdWVyeS5pbmRleCk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljazEgPSAoKSA9PiB7XG4gICAgY29uc3QgaHJlZiA9ICcvP2luZGV4PTEnXG4gICAgY29uc3QgYXMgPSBocmVmXG4gICAgUm91dGVyLnB1c2goaHJlZiwgYXMsIHsgc2hhbGxvdzogdHJ1ZSB9KVxuICB9XG5cbiAgb25DbGljazIgPSAoKSA9PiB7XG4gICAgY29uc3QgaHJlZiA9ICcvP2luZGV4PTInXG4gICAgY29uc3QgYXMgPSBocmVmXG4gICAgUm91dGVyLnB1c2goaHJlZiwgYXMsIHsgc2hhbGxvdzogdHJ1ZSB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWxsbyc+XG4gICAgICA8cD5IZWxsbyBXb3JsZDwvcD5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkNsaWNrMX0+JmluZGV4PTE8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkNsaWNrMn0+JmluZGV4PTI8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlbGxvIHtcbiAgICAgICAgICBmb250OiAxNXB4IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICBwYWRkaW5nOiAxMDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMTAwbXMgZWFzZS1pbiBiYWNrZ3JvdW5kO1xuICAgICAgICB9XG4gICAgICAgIC5oZWxsbzpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KCkoSW5kZXgpKTsgLy93b3Jrc1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkod2l0aFJvdXRlcihJbmRleCkpOyAvL2RvZXNuJ3QiXX0= */\n/*@ sourceURL=pages/index.js */"
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component); // export default withRouter(connect()(Index)); //works


/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])()(Object(__WEBPACK_IMPORTED_MODULE_3_next_router__["withRouter"])(Index))); //doesn't
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.c7e3f513254fed27d120.hot-update.js.map