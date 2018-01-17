module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStatelessComponent;
function isStatelessComponent(type) {
  return typeof type.prototype === 'undefined' || typeof type.prototype.render !== 'function';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultTraverse = undefined;
exports.kindOf = kindOf;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function kindOf(node) {
  if (node === null || node === void 0 || typeof node === 'boolean') {
    return 'Empty';
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return 'Text';
  }
  if (Array.isArray(node)) {
    return 'Fragment';
  }
  var type = node.type;

  if (typeof type === 'string') {
    return 'DOMElement';
  }
  return 'ComponentElement';
}

function _defaultTraverse(path) {
  var kind = kindOf(path.node);
  if (kind === 'Empty') {
    return path.node;
  }
  if (kind === 'Text') {
    return path.node;
  }
  if (kind === 'Fragment') {
    return path.node.map(path.traverse);
  }
  return _react2.default.cloneElement.apply(_react2.default, [path.node, path.node.props].concat(_toConsumableArray(path.traverseChildren())));
}

exports.defaultTraverse = _defaultTraverse;
function _traverse(node, visitor) {
  var _visitor$Empty = visitor.Empty,
      Empty = _visitor$Empty === undefined ? _defaultTraverse : _visitor$Empty,
      _visitor$Text = visitor.Text,
      Text = _visitor$Text === undefined ? _defaultTraverse : _visitor$Text,
      _visitor$Fragment = visitor.Fragment,
      Fragment = _visitor$Fragment === undefined ? _defaultTraverse : _visitor$Fragment,
      _visitor$DOMElement = visitor.DOMElement,
      DOMElement = _visitor$DOMElement === undefined ? _defaultTraverse : _visitor$DOMElement,
      _visitor$ComponentEle = visitor.ComponentElement,
      ComponentElement = _visitor$ComponentEle === undefined ? _defaultTraverse : _visitor$ComponentEle;

  var path = {
    node: node,
    kindOf: kindOf,
    defaultTraverse: function defaultTraverse() {
      return _defaultTraverse(path);
    },
    traverse: function traverse(childNode) {
      var childVisitor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : visitor;

      return _traverse(childNode, childVisitor);
    },
    traverseChildren: function traverseChildren() {
      var childVisitor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : visitor;

      return _react2.default.Children.toArray(path.node.props.children).map(function (childNode) {
        return path.traverse(childNode, childVisitor);
      });
    },

    visitor: visitor
  };
  if (node === null || node === void 0 || typeof node === 'boolean') {
    return Empty(path); // eslint-disable-line new-cap
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return Text(path); // eslint-disable-line new-cap
  }
  if (Array.isArray(node)) {
    return Fragment(path); // eslint-disable-line new-cap
  }
  var type = node.type;

  if (typeof type === 'string') {
    return DOMElement(path); // eslint-disable-line new-cap
  }
  return ComponentElement(path); // eslint-disable-line new-cap
}
exports.default = _traverse;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = wrapRender;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _isStatelessComponent = __webpack_require__(1);

var _isStatelessComponent2 = _interopRequireDefault(_isStatelessComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wrapRenderMemo = new WeakMap();
function wrapRender(transformNode) {
  if (!wrapRenderMemo.has(transformNode)) {
    wrapRenderMemo.set(transformNode, new WeakMap());
  }
  var memo = wrapRenderMemo.get(transformNode);
  return function (type) {
    if (!memo.has(type)) {
      memo.set(type, function () {
        if ((0, _isStatelessComponent2.default)(type)) {
          return function (_React$Component) {
            _inherits(_class, _React$Component);

            function _class() {
              _classCallCheck(this, _class);

              return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
            }

            _createClass(_class, [{
              key: 'render',
              value: function render() {
                return transformNode(type(this.props));
              }
            }], [{
              key: 'propTypes',
              get: function get() {
                return type.propTypes;
              }
            }, {
              key: 'displayName',
              get: function get() {
                return type.displayName || type.name;
              }
            }]);

            return _class;
          }(_react2.default.Component);
        }
        return function (_type) {
          _inherits(_class2, _type);

          function _class2() {
            _classCallCheck(this, _class2);

            return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
          }

          _createClass(_class2, [{
            key: 'render',
            value: function render() {
              return transformNode(_get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'render', this).call(this));
            }
          }]);

          return _class2;
        }(type);
      }());
    }
    return memo.get(type);
  };
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapRender = exports.transformComponents = exports.isStatelessComponent = undefined;

var _isStatelessComponent = __webpack_require__(1);

var _isStatelessComponent2 = _interopRequireDefault(_isStatelessComponent);

var _traverse = __webpack_require__(2);

var _traverse2 = _interopRequireDefault(_traverse);

var _transformComponents = __webpack_require__(5);

var _transformComponents2 = _interopRequireDefault(_transformComponents);

var _wrapRender = __webpack_require__(3);

var _wrapRender2 = _interopRequireDefault(_wrapRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.isStatelessComponent = _isStatelessComponent2.default;
exports.transformComponents = _transformComponents2.default;
exports.wrapRender = _wrapRender2.default;
exports.default = _traverse2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformComponentsInNode = transformComponentsInNode;
exports.default = transformComponents;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _traverse = __webpack_require__(2);

var _traverse2 = _interopRequireDefault(_traverse);

var _wrapRender = __webpack_require__(3);

var _wrapRender2 = _interopRequireDefault(_wrapRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformComponentsInNode(node, transformComponent) {
  return (0, _traverse2.default)(node, {
    ComponentElement: function ComponentElement(path) {
      var _path$node = path.node,
          type = _path$node.type,
          props = _path$node.props;

      return _react2.default.createElement(transformComponent(type), props);
    }
  });
}

var transformComponentsMemo = new WeakMap();
function transformComponents(transformComponent) {
  if (!transformComponentsMemo.has(transformComponent)) {
    transformComponentsMemo.set(transformComponent, new WeakMap());
  }
  var transformComponentMemo = transformComponentsMemo.get(transformComponent);
  return function (type) {
    if (typeof type === 'string') {
      return type;
    }
    if (!transformComponentMemo.has(type)) {
      if (_react2.default.isValidElement(type)) {
        transformComponentMemo.set(type, _react2.default.createElement(transformComponents(transformComponent)(function () {
          return type;
        })));
      } else {
        transformComponentMemo.set(type, transformComponent((0, _wrapRender2.default)(function (node) {
          return transformComponentsInNode(node, function (childType) {
            return transformComponents(transformComponent)(childType);
          });
        })(type)));
      }
    }
    return transformComponentMemo.get(type);
  };
}

/***/ })
/******/ ]);