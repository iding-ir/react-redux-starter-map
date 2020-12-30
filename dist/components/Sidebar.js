"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _styles = require("@material-ui/core/styles");

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _HelpOutline = _interopRequireDefault(require("@material-ui/icons/HelpOutline"));

var _Mail = _interopRequireDefault(require("@material-ui/icons/Mail"));

var _reactI18next = require("react-i18next");

var _sidebar = require("../actions/sidebar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    list: {
      width: 250
    }
  });
});

var Sidebar = function Sidebar() {
  var classes = useStyles();

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var dispatch = (0, _reactRedux.useDispatch)();
  var open = (0, _reactRedux.useSelector)(function (state) {
    return state.sidebar.open;
  });
  return /*#__PURE__*/_react.default.createElement(_Drawer.default, {
    anchor: "left",
    open: open,
    onClose: function onClose() {
      dispatch((0, _sidebar.closeSidebar)());
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.list,
    role: "presentation",
    onClick: function onClick() {
      dispatch((0, _sidebar.closeSidebar)());
    },
    onKeyDown: function onKeyDown() {
      dispatch((0, _sidebar.closeSidebar)());
    }
  }, /*#__PURE__*/_react.default.createElement(_List.default, null, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    button: true,
    key: "about"
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_HelpOutline.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: t("sidebar.about")
  }))), /*#__PURE__*/_react.default.createElement(_Divider.default, null), /*#__PURE__*/_react.default.createElement(_List.default, null, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    button: true,
    key: "contact"
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_Mail.default, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: t("sidebar.contact")
  })))));
};

var _default = Sidebar;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NpZGViYXIudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsInRoZW1lIiwibGlzdCIsIndpZHRoIiwiU2lkZWJhciIsImNsYXNzZXMiLCJ0IiwiZGlzcGF0Y2giLCJvcGVuIiwic3RhdGUiLCJzaWRlYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsd0JBQVcsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCLDBCQUFhO0FBQ1hDLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxLQUFLLEVBQUU7QUFESDtBQURLLEdBQWIsQ0FEMkI7QUFBQSxDQUFYLENBQWxCOztBQVFBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsTUFBTUMsT0FBTyxHQUFHTCxTQUFTLEVBQXpCOztBQURvQix3QkFHTixtQ0FITTtBQUFBLE1BR1pNLENBSFksbUJBR1pBLENBSFk7O0FBS3BCLE1BQU1DLFFBQVEsR0FBRyw4QkFBakI7QUFFQSxNQUFNQyxJQUFJLEdBQUcsNkJBQVksVUFBQ0MsS0FBRDtBQUFBLFdBQW1CQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsSUFBakM7QUFBQSxHQUFaLENBQWI7QUFFQSxzQkFDRSw2QkFBQyxlQUFEO0FBQ0UsSUFBQSxNQUFNLEVBQUMsTUFEVDtBQUVFLElBQUEsSUFBSSxFQUFFQSxJQUZSO0FBR0UsSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYkQsTUFBQUEsUUFBUSxDQUFDLDRCQUFELENBQVI7QUFDRDtBQUxILGtCQU9FO0FBQ0UsSUFBQSxTQUFTLEVBQUVGLE9BQU8sQ0FBQ0gsSUFEckI7QUFFRSxJQUFBLElBQUksRUFBQyxjQUZQO0FBR0UsSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYkssTUFBQUEsUUFBUSxDQUFDLDRCQUFELENBQVI7QUFDRCxLQUxIO0FBTUUsSUFBQSxTQUFTLEVBQUUscUJBQU07QUFDZkEsTUFBQUEsUUFBUSxDQUFDLDRCQUFELENBQVI7QUFDRDtBQVJILGtCQVVFLDZCQUFDLGFBQUQscUJBQ0UsNkJBQUMsaUJBQUQ7QUFBVSxJQUFBLE1BQU0sTUFBaEI7QUFBaUIsSUFBQSxHQUFHLEVBQUM7QUFBckIsa0JBQ0UsNkJBQUMscUJBQUQscUJBQ0UsNkJBQUMsb0JBQUQsT0FERixDQURGLGVBS0UsNkJBQUMscUJBQUQ7QUFBYyxJQUFBLE9BQU8sRUFBRUQsQ0FBQyxDQUFDLGVBQUQ7QUFBeEIsSUFMRixDQURGLENBVkYsZUFvQkUsNkJBQUMsZ0JBQUQsT0FwQkYsZUFzQkUsNkJBQUMsYUFBRCxxQkFDRSw2QkFBQyxpQkFBRDtBQUFVLElBQUEsTUFBTSxNQUFoQjtBQUFpQixJQUFBLEdBQUcsRUFBQztBQUFyQixrQkFDRSw2QkFBQyxxQkFBRCxxQkFDRSw2QkFBQyxhQUFELE9BREYsQ0FERixlQUtFLDZCQUFDLHFCQUFEO0FBQWMsSUFBQSxPQUFPLEVBQUVBLENBQUMsQ0FBQyxpQkFBRDtBQUF4QixJQUxGLENBREYsQ0F0QkYsQ0FQRixDQURGO0FBMENELENBbkREOztlQXFEZUYsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IEhlbHAgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9IZWxwT3V0bGluZVwiO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuXHJcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBjbG9zZVNpZGViYXIgfSBmcm9tIFwiLi4vYWN0aW9ucy9zaWRlYmFyXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIGxpc3Q6IHtcclxuICAgICAgd2lkdGg6IDI1MCxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3Qgb3BlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSVN0YXRlKSA9PiBzdGF0ZS5zaWRlYmFyLm9wZW4pIGFzIGJvb2xlYW47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyXHJcbiAgICAgIGFuY2hvcj1cImxlZnRcIlxyXG4gICAgICBvcGVuPXtvcGVufVxyXG4gICAgICBvbkNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goY2xvc2VTaWRlYmFyKCkpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9XHJcbiAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goY2xvc2VTaWRlYmFyKCkpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25LZXlEb3duPXsoKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChjbG9zZVNpZGViYXIoKSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9XCJhYm91dFwiPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxIZWxwIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0KFwic2lkZWJhci5hYm91dFwiKX0gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPC9MaXN0PlxyXG5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PVwiY29udGFjdFwiPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxNYWlsSWNvbiAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dChcInNpZGViYXIuY29udGFjdFwiKX0gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iXX0=