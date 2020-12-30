"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonAppBar;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _StateProvider = require("./StateProvider");

var _MapContainer = _interopRequireDefault(require("./MapContainer"));

var _Header = _interopRequireDefault(require("./Header"));

var _Sidebar = _interopRequireDefault(require("./Sidebar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    root: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  });
});

function ButtonAppBar() {
  var classes = useStyles();

  var _useContext = (0, _react.useContext)(_StateProvider.StateContext),
      state = _useContext.state,
      setState = _useContext.setState;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_Sidebar.default, null), /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement(_MapContainer.default, null));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJCdXR0b25BcHBCYXIiLCJjbGFzc2VzIiwiU3RhdGVDb250ZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLHdCQUFXLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQiwwQkFBYTtBQUNYQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsTUFBTSxFQUFFLE1BREo7QUFFSkMsTUFBQUEsT0FBTyxFQUFFLE1BRkw7QUFHSkMsTUFBQUEsYUFBYSxFQUFFO0FBSFg7QUFESyxHQUFiLENBRDJCO0FBQUEsQ0FBWCxDQUFsQjs7QUFVZSxTQUFTQyxZQUFULEdBQXdCO0FBQ3JDLE1BQU1DLE9BQU8sR0FBR1AsU0FBUyxFQUF6Qjs7QUFEcUMsb0JBR1QsdUJBQVdRLDJCQUFYLENBSFM7QUFBQSxNQUc3QkMsS0FINkIsZUFHN0JBLEtBSDZCO0FBQUEsTUFHdEJDLFFBSHNCLGVBR3RCQSxRQUhzQjs7QUFLckMsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRUgsT0FBTyxDQUFDTDtBQUF4QixrQkFDRSw2QkFBQyxnQkFBRCxPQURGLGVBR0UsNkJBQUMsZUFBRCxPQUhGLGVBS0UsNkJBQUMscUJBQUQsT0FMRixDQURGO0FBU0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSBcIi4vU3RhdGVQcm92aWRlclwiO1xuaW1wb3J0IE1hcENvbnRhaW5lciBmcm9tIFwiLi9NYXBDb250YWluZXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9TaWRlYmFyXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25BcHBCYXIoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCB7IHN0YXRlLCBzZXRTdGF0ZSB9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8U2lkZWJhciAvPlxuXG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxNYXBDb250YWluZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ==