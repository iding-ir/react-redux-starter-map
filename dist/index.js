"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRedux = require("react-redux");

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

require("./index.css");

require("./localization");

var _stores = _interopRequireDefault(require("./stores"));

var _App = _interopRequireDefault(require("./components/App"));

var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));

var _StateProvider = _interopRequireDefault(require("./components/StateProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: _stores.default
}, /*#__PURE__*/_react.default.createElement(_StateProvider.default, null, /*#__PURE__*/_react.default.createElement(_CssBaseline.default, null), /*#__PURE__*/_react.default.createElement(_App.default, null)))), document.getElementById("root")); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


(0, _reportWebVitals.default)();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiUmVhY3RET00iLCJyZW5kZXIiLCJzdG9yZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQUEsa0JBQVNDLE1BQVQsZUFDRSw2QkFBQyxjQUFELENBQU8sVUFBUCxxQkFDRSw2QkFBQyxvQkFBRDtBQUFVLEVBQUEsS0FBSyxFQUFFQztBQUFqQixnQkFDRSw2QkFBQyxzQkFBRCxxQkFDRSw2QkFBQyxvQkFBRCxPQURGLGVBR0UsNkJBQUMsWUFBRCxPQUhGLENBREYsQ0FERixDQURGLEVBVUVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQVZGLEUsQ0FhQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XG5cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL2xvY2FsaXphdGlvblwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3Jlc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9jb21wb25lbnRzL0FwcFwiO1xuaW1wb3J0IHJlcG9ydFdlYlZpdGFscyBmcm9tIFwiLi9yZXBvcnRXZWJWaXRhbHNcIjtcbmltcG9ydCBTdGF0ZVByb3ZpZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvU3RhdGVQcm92aWRlclwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFN0YXRlUHJvdmlkZXI+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICBcbiAgICAgICAgPEFwcCAvPlxuICAgICAgPC9TdGF0ZVByb3ZpZGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxuKTtcblxuLy8gSWYgeW91IHdhbnQgdG8gc3RhcnQgbWVhc3VyaW5nIHBlcmZvcm1hbmNlIGluIHlvdXIgYXBwLCBwYXNzIGEgZnVuY3Rpb25cbi8vIHRvIGxvZyByZXN1bHRzIChmb3IgZXhhbXBsZTogcmVwb3J0V2ViVml0YWxzKGNvbnNvbGUubG9nKSlcbi8vIG9yIHNlbmQgdG8gYW4gYW5hbHl0aWNzIGVuZHBvaW50LiBMZWFybiBtb3JlOiBodHRwczovL2JpdC5seS9DUkEtdml0YWxzXG5yZXBvcnRXZWJWaXRhbHMoKTtcbiJdfQ==