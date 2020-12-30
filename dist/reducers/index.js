"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _auth = _interopRequireDefault(require("./auth"));

var _sidebar = _interopRequireDefault(require("./sidebar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var combinedReducers = (0, _redux.combineReducers)({
  auth: _auth.default,
  sidebar: _sidebar.default
});
var _default = combinedReducers;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6WyJjb21iaW5lZFJlZHVjZXJzIiwiYXV0aCIsImF1dGhSZWR1Y2VyIiwic2lkZWJhciIsInNpZGViYXJSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7QUFPQSxJQUFNQSxnQkFBZ0IsR0FBRyw0QkFBZ0I7QUFDdkNDLEVBQUFBLElBQUksRUFBRUMsYUFEaUM7QUFFdkNDLEVBQUFBLE9BQU8sRUFBRUM7QUFGOEIsQ0FBaEIsQ0FBekI7ZUFLZUosZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCBhdXRoUmVkdWNlciwgeyBJU3RhdGVBdXRoIH0gZnJvbSBcIi4vYXV0aFwiO1xyXG5pbXBvcnQgc2lkZWJhclJlZHVjZXIsIHsgSVN0YXRlU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcclxuICBhdXRoOiBJU3RhdGVBdXRoO1xyXG4gIHNpZGViYXI6IElTdGF0ZVNpZGViYXI7XHJcbn1cclxuXHJcbmNvbnN0IGNvbWJpbmVkUmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGF1dGg6IGF1dGhSZWR1Y2VyLFxyXG4gIHNpZGViYXI6IHNpZGViYXJSZWR1Y2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVkUmVkdWNlcnM7XHJcbiJdfQ==