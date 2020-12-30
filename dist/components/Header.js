"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _styles = require("@material-ui/core/styles");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _reactI18next = require("react-i18next");

var _Auth = _interopRequireDefault(require("./Auth"));

var _sidebar = require("../actions/sidebar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    root: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    }
  });
});

var Header = function Header() {
  var classes = useStyles();

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/_react.default.createElement(_AppBar.default, {
    position: "static"
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, null, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    onClick: function onClick() {
      dispatch((0, _sidebar.openSidebar)());
    }
  }, /*#__PURE__*/_react.default.createElement(_Menu.default, null)), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6",
    className: classes.title
  }, t("header.title")), /*#__PURE__*/_react.default.createElement(_Auth.default, null)));
};

var _default = Header;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlci50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJmbGV4R3JvdyIsImxpc3QiLCJ3aWR0aCIsImZ1bGxMaXN0IiwiSGVhZGVyIiwiY2xhc3NlcyIsInQiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLHdCQUFXLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQiwwQkFBYTtBQUNYQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsTUFBTSxFQUFFLE1BREo7QUFFSkMsTUFBQUEsT0FBTyxFQUFFLE1BRkw7QUFHSkMsTUFBQUEsYUFBYSxFQUFFO0FBSFgsS0FESztBQU1YQyxJQUFBQSxVQUFVLEVBQUU7QUFDVkMsTUFBQUEsV0FBVyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkO0FBREgsS0FORDtBQVNYQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsUUFBUSxFQUFFO0FBREwsS0FUSTtBQVlYQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsS0FBSyxFQUFFO0FBREgsS0FaSztBQWVYQyxJQUFBQSxRQUFRLEVBQUU7QUFDUkQsTUFBQUEsS0FBSyxFQUFFO0FBREM7QUFmQyxHQUFiLENBRDJCO0FBQUEsQ0FBWCxDQUFsQjs7QUFzQkEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixNQUFNQyxPQUFPLEdBQUdmLFNBQVMsRUFBekI7O0FBRG1CLHdCQUdMLG1DQUhLO0FBQUEsTUFHWGdCLENBSFcsbUJBR1hBLENBSFc7O0FBS25CLE1BQU1DLFFBQVEsR0FBRyw4QkFBakI7QUFFQSxzQkFDRSw2QkFBQyxlQUFEO0FBQVEsSUFBQSxRQUFRLEVBQUM7QUFBakIsa0JBQ0UsNkJBQUMsZ0JBQUQscUJBQ0UsNkJBQUMsbUJBQUQ7QUFDRSxJQUFBLElBQUksRUFBQyxPQURQO0FBRUUsSUFBQSxTQUFTLEVBQUVGLE9BQU8sQ0FBQ1QsVUFGckI7QUFHRSxJQUFBLEtBQUssRUFBQyxTQUhSO0FBSUUsa0JBQVcsTUFKYjtBQUtFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JXLE1BQUFBLFFBQVEsQ0FBQywyQkFBRCxDQUFSO0FBQ0Q7QUFQSCxrQkFTRSw2QkFBQyxhQUFELE9BVEYsQ0FERixlQWFFLDZCQUFDLG1CQUFEO0FBQVksSUFBQSxPQUFPLEVBQUMsSUFBcEI7QUFBeUIsSUFBQSxTQUFTLEVBQUVGLE9BQU8sQ0FBQ047QUFBNUMsS0FDR08sQ0FBQyxDQUFDLGNBQUQsQ0FESixDQWJGLGVBaUJFLDZCQUFDLGFBQUQsT0FqQkYsQ0FERixDQURGO0FBdUJELENBOUJEOztlQWdDZUYsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5cclxuaW1wb3J0IEF1dGggZnJvbSBcIi4vQXV0aFwiO1xyXG5pbXBvcnQgeyBvcGVuU2lkZWJhciB9IGZyb20gXCIuLi9hY3Rpb25zL3NpZGViYXJcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIH0sXHJcbiAgICBtZW51QnV0dG9uOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIGxpc3Q6IHtcclxuICAgICAgd2lkdGg6IDI1MCxcclxuICAgIH0sXHJcbiAgICBmdWxsTGlzdDoge1xyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICB9LFxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cclxuICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwibWVudVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKG9wZW5TaWRlYmFyKCkpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICB7dChcImhlYWRlci50aXRsZVwiKX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgIDxBdXRoIC8+XHJcbiAgICAgIDwvVG9vbGJhcj5cclxuICAgIDwvQXBwQmFyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdfQ==