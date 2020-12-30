"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StateProvider = exports.StateContext = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StateContext = /*#__PURE__*/(0, _react.createContext)({
  state: {},
  setState: function setState() {}
});
exports.StateContext = StateContext;

var StateProvider = function StateProvider(props) {
  var children = props.children;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(StateContext.Provider, {
    value: {
      state: state,
      setState: setState
    }
  }, children);
};

exports.StateProvider = StateProvider;
var _default = StateProvider;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1N0YXRlUHJvdmlkZXIudHN4Il0sIm5hbWVzIjpbIlN0YXRlQ29udGV4dCIsInN0YXRlIiwic2V0U3RhdGUiLCJTdGF0ZVByb3ZpZGVyIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9PLElBQU1BLFlBQTBCLGdCQUFHLDBCQUFjO0FBQ3REQyxFQUFBQSxLQUFLLEVBQUUsRUFEK0M7QUFFdERDLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFO0FBRm9DLENBQWQsQ0FBbkM7OztBQVNBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFrQjtBQUFBLE1BQ3JDQyxRQURxQyxHQUN4QkQsS0FEd0IsQ0FDckNDLFFBRHFDOztBQUFBLGtCQUduQixxQkFBZ0IsRUFBaEIsQ0FIbUI7QUFBQTtBQUFBLE1BR3RDSixLQUhzQztBQUFBLE1BRy9CQyxRQUgrQjs7QUFLN0Msc0JBQ0UsNkJBQUMsWUFBRCxDQUFjLFFBQWQ7QUFBdUIsSUFBQSxLQUFLLEVBQUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFMQSxLQUFGO0FBQVNDLE1BQUFBLFFBQVEsRUFBUkE7QUFBVDtBQUE5QixLQUNHRyxRQURILENBREY7QUFLRCxDQVZNOzs7ZUFZUUYsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb250ZXh0LCB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNYXAgfSBmcm9tIFwibWFwYm94LWdsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuICBtYXA/OiBNYXA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTdGF0ZUNvbnRleHQ6IENvbnRleHQ8YW55PiA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gIHN0YXRlOiB7fSxcclxuICBzZXRTdGF0ZTogKCkgPT4ge30sXHJcbn0pO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogSlNYLkVsZW1lbnRbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRlUHJvdmlkZXIgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8U3RhdGU+KHt9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIHNldFN0YXRlIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdGVQcm92aWRlcjtcclxuIl19