"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _mapboxGl = _interopRequireDefault(require("mapbox-gl"));

require("mapbox-gl/dist/mapbox-gl.css");

var _StateProvider = require("./StateProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    map: {
      width: "100%",
      height: "100%",
      flexGrow: 10
    }
  });
});

var MapContainer = function MapContainer(props) {
  var classes = useStyles();

  var _useContext = (0, _react.useContext)(_StateProvider.StateContext),
      state = _useContext.state,
      setState = _useContext.setState;

  (0, _react.useEffect)(function () {
    _mapboxGl.default.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    var map = new _mapboxGl.default.Map({
      container: "map",
      center: [10, 45],
      zoom: 3.5,
      minZoom: 2,
      maxZoom: 20,
      style: "mapbox://styles/mapbox/streets-v11"
    });
    var navigationControl = new _mapboxGl.default.NavigationControl({});
    map.addControl(navigationControl, "top-left");
    setState(_objectSpread(_objectSpread({}, state), {}, {
      map: map
    })); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.map,
    id: "map"
  });
};

var _default = MapContainer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01hcENvbnRhaW5lci50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwidGhlbWUiLCJtYXAiLCJ3aWR0aCIsImhlaWdodCIsImZsZXhHcm93IiwiTWFwQ29udGFpbmVyIiwicHJvcHMiLCJjbGFzc2VzIiwiU3RhdGVDb250ZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX01BUEJPWF9UT0tFTiIsIk1hcCIsImNvbnRhaW5lciIsImNlbnRlciIsInpvb20iLCJtaW5ab29tIiwibWF4Wm9vbSIsInN0eWxlIiwibmF2aWdhdGlvbkNvbnRyb2wiLCJOYXZpZ2F0aW9uQ29udHJvbCIsImFkZENvbnRyb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyx3QkFBVyxVQUFDQyxLQUFEO0FBQUEsU0FDM0IsMEJBQWE7QUFDWEMsSUFBQUEsR0FBRyxFQUFFO0FBQ0hDLE1BQUFBLEtBQUssRUFBRSxNQURKO0FBRUhDLE1BQUFBLE1BQU0sRUFBRSxNQUZMO0FBR0hDLE1BQUFBLFFBQVEsRUFBRTtBQUhQO0FBRE0sR0FBYixDQUQyQjtBQUFBLENBQVgsQ0FBbEI7O0FBWUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFrQjtBQUNyQyxNQUFNQyxPQUFPLEdBQUdSLFNBQVMsRUFBekI7O0FBRHFDLG9CQUVULHVCQUFXUywyQkFBWCxDQUZTO0FBQUEsTUFFN0JDLEtBRjZCLGVBRTdCQSxLQUY2QjtBQUFBLE1BRXRCQyxRQUZzQixlQUV0QkEsUUFGc0I7O0FBSXJDLHdCQUFVLFlBQU07QUFDZEMsc0JBQVNDLFdBQVQsR0FBdUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxzQkFBbkM7QUFFQSxRQUFNZCxHQUFRLEdBQUcsSUFBSVUsa0JBQVNLLEdBQWIsQ0FBaUI7QUFDaENDLE1BQUFBLFNBQVMsRUFBRSxLQURxQjtBQUVoQ0MsTUFBQUEsTUFBTSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FGd0I7QUFHaENDLE1BQUFBLElBQUksRUFBRSxHQUgwQjtBQUloQ0MsTUFBQUEsT0FBTyxFQUFFLENBSnVCO0FBS2hDQyxNQUFBQSxPQUFPLEVBQUUsRUFMdUI7QUFNaENDLE1BQUFBLEtBQUssRUFBRTtBQU55QixLQUFqQixDQUFqQjtBQVNBLFFBQU1DLGlCQUFpQixHQUFHLElBQUlaLGtCQUFTYSxpQkFBYixDQUErQixFQUEvQixDQUExQjtBQUVBdkIsSUFBQUEsR0FBRyxDQUFDd0IsVUFBSixDQUFlRixpQkFBZixFQUFrQyxVQUFsQztBQUVBYixJQUFBQSxRQUFRLGlDQUFNRCxLQUFOO0FBQWFSLE1BQUFBLEdBQUcsRUFBSEE7QUFBYixPQUFSLENBaEJjLENBaUJkO0FBQ0QsR0FsQkQsRUFrQkcsRUFsQkg7QUFvQkEsc0JBQU87QUFBSyxJQUFBLFNBQVMsRUFBRU0sT0FBTyxDQUFDTixHQUF4QjtBQUE2QixJQUFBLEVBQUUsRUFBQztBQUFoQyxJQUFQO0FBQ0QsQ0F6QkQ7O2VBMkJlSSxZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgbWFwYm94Z2wsIHsgTWFwIH0gZnJvbSBcIm1hcGJveC1nbFwiO1xyXG5pbXBvcnQgXCJtYXBib3gtZ2wvZGlzdC9tYXBib3gtZ2wuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tIFwiLi9TdGF0ZVByb3ZpZGVyXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIG1hcDoge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgIGZsZXhHcm93OiAxMCxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7fVxyXG5cclxuY29uc3QgTWFwQ29udGFpbmVyID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IHN0YXRlLCBzZXRTdGF0ZSB9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfTUFQQk9YX1RPS0VOIGFzIHN0cmluZztcclxuXHJcbiAgICBjb25zdCBtYXA6IE1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xyXG4gICAgICBjb250YWluZXI6IFwibWFwXCIsXHJcbiAgICAgIGNlbnRlcjogWzEwLCA0NV0sXHJcbiAgICAgIHpvb206IDMuNSxcclxuICAgICAgbWluWm9vbTogMixcclxuICAgICAgbWF4Wm9vbTogMjAsXHJcbiAgICAgIHN0eWxlOiBcIm1hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12MTFcIixcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG5hdmlnYXRpb25Db250cm9sID0gbmV3IG1hcGJveGdsLk5hdmlnYXRpb25Db250cm9sKHt9KTtcclxuXHJcbiAgICBtYXAuYWRkQ29udHJvbChuYXZpZ2F0aW9uQ29udHJvbCwgXCJ0b3AtbGVmdFwiKTtcclxuXHJcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBtYXAgfSk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFwfSBpZD1cIm1hcFwiPjwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcENvbnRhaW5lcjtcclxuIl19