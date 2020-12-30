"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _styles = require("@material-ui/core/styles");

var _reactGoogleLogin = require("react-google-login");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _reactI18next = require("react-i18next");

var _auth = require("../actions/auth");

var _user = require("../actions/user");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return (0, _styles.createStyles)({
    name: _defineProperty({
      marginRight: theme.spacing(2)
    }, theme.breakpoints.down("xs"), {
      display: "none"
    })
  });
});

var Auth = function Auth(props) {
  var classes = useStyles();

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var dispatch = (0, _reactRedux.useDispatch)();
  var user = (0, _reactRedux.useSelector)(function (state) {
    return state.auth.user;
  });
  var isSignedIn = (0, _reactRedux.useSelector)(function (state) {
    return state.auth.isSignedIn;
  });

  var onSuccess = function onSuccess(response) {
    var name = response.profileObj.name;
    var email = response.profileObj.email;
    var user = {
      name: name,
      email: email
    };
    dispatch((0, _auth.signIn)(user));
    dispatch((0, _user.registerUser)(user));
  };

  var onFailure = function onFailure(response) {
    var name = null;
    var email = null;
    dispatch((0, _auth.signIn)({
      name: name,
      email: email
    }));
  };

  var onSignOut = function onSignOut(event) {
    dispatch((0, _auth.signOut)());
  };

  return isSignedIn ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
    className: classes.name
  }, user.name), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    color: "default",
    onClick: onSignOut
  }, t("header.logout"))) : /*#__PURE__*/_react.default.createElement(_reactGoogleLogin.GoogleLogin, {
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    buttonText: "Login",
    onSuccess: onSuccess,
    onFailure: onFailure,
    cookiePolicy: "single_host_origin"
  });
};

var _default = Auth;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0F1dGgudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsInRoZW1lIiwibmFtZSIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwiZG93biIsImRpc3BsYXkiLCJBdXRoIiwicHJvcHMiLCJjbGFzc2VzIiwidCIsImRpc3BhdGNoIiwidXNlciIsInN0YXRlIiwiYXV0aCIsImlzU2lnbmVkSW4iLCJvblN1Y2Nlc3MiLCJyZXNwb25zZSIsInByb2ZpbGVPYmoiLCJlbWFpbCIsIm9uRmFpbHVyZSIsIm9uU2lnbk91dCIsImV2ZW50IiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9HT09HTEVfQ0xJRU5UX0lEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQVFBLElBQU1BLFNBQVMsR0FBRyx3QkFBVyxVQUFDQyxLQUFEO0FBQUEsU0FDM0IsMEJBQWE7QUFDWEMsSUFBQUEsSUFBSTtBQUNGQyxNQUFBQSxXQUFXLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFEWCxPQUVESCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRkMsRUFFOEI7QUFDOUJDLE1BQUFBLE9BQU8sRUFBRTtBQURxQixLQUY5QjtBQURPLEdBQWIsQ0FEMkI7QUFBQSxDQUFYLENBQWxCOztBQWFBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBa0I7QUFDN0IsTUFBTUMsT0FBTyxHQUFHVixTQUFTLEVBQXpCOztBQUQ2Qix3QkFHZixtQ0FIZTtBQUFBLE1BR3JCVyxDQUhxQixtQkFHckJBLENBSHFCOztBQUs3QixNQUFNQyxRQUFRLEdBQUcsOEJBQWpCO0FBRUEsTUFBTUMsSUFBSSxHQUFHLDZCQUFZLFVBQUNDLEtBQUQ7QUFBQSxXQUFtQkEsS0FBSyxDQUFDQyxJQUFOLENBQVdGLElBQTlCO0FBQUEsR0FBWixDQUFiO0FBQ0EsTUFBTUcsVUFBVSxHQUFHLDZCQUNqQixVQUFDRixLQUFEO0FBQUEsV0FBbUJBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxVQUE5QjtBQUFBLEdBRGlCLENBQW5COztBQUlBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLFFBQUQsRUFBbUI7QUFDbkMsUUFBTWhCLElBQUksR0FBR2dCLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQmpCLElBQWpDO0FBQ0EsUUFBTWtCLEtBQUssR0FBR0YsUUFBUSxDQUFDQyxVQUFULENBQW9CQyxLQUFsQztBQUNBLFFBQU1QLElBQUksR0FBRztBQUFFWCxNQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUWtCLE1BQUFBLEtBQUssRUFBTEE7QUFBUixLQUFiO0FBRUFSLElBQUFBLFFBQVEsQ0FBQyxrQkFBT0MsSUFBUCxDQUFELENBQVI7QUFDQUQsSUFBQUEsUUFBUSxDQUFDLHdCQUFhQyxJQUFiLENBQUQsQ0FBUjtBQUNELEdBUEQ7O0FBU0EsTUFBTVEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0gsUUFBRCxFQUFtQjtBQUNuQyxRQUFNaEIsSUFBSSxHQUFHLElBQWI7QUFDQSxRQUFNa0IsS0FBSyxHQUFHLElBQWQ7QUFFQVIsSUFBQUEsUUFBUSxDQUFDLGtCQUFPO0FBQUVWLE1BQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRa0IsTUFBQUEsS0FBSyxFQUFMQTtBQUFSLEtBQVAsQ0FBRCxDQUFSO0FBQ0QsR0FMRDs7QUFPQSxNQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQWdCO0FBQ2hDWCxJQUFBQSxRQUFRLENBQUMsb0JBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsU0FBT0ksVUFBVSxnQkFDZix1REFDRTtBQUFNLElBQUEsU0FBUyxFQUFFTixPQUFPLENBQUNSO0FBQXpCLEtBQWdDVyxJQUFJLENBQUNYLElBQXJDLENBREYsZUFHRSw2QkFBQyxlQUFEO0FBQVEsSUFBQSxPQUFPLEVBQUMsV0FBaEI7QUFBNEIsSUFBQSxLQUFLLEVBQUMsU0FBbEM7QUFBNEMsSUFBQSxPQUFPLEVBQUVvQjtBQUFyRCxLQUNHWCxDQUFDLENBQUMsZUFBRCxDQURKLENBSEYsQ0FEZSxnQkFTZiw2QkFBQyw2QkFBRDtBQUNFLElBQUEsUUFBUSxFQUFFYSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsMEJBRHhCO0FBRUUsSUFBQSxVQUFVLEVBQUMsT0FGYjtBQUdFLElBQUEsU0FBUyxFQUFFVCxTQUhiO0FBSUUsSUFBQSxTQUFTLEVBQUVJLFNBSmI7QUFLRSxJQUFBLFlBQVksRUFBRTtBQUxoQixJQVRGO0FBaUJELENBakREOztlQW1EZWIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEdvb2dsZUxvZ2luIH0gZnJvbSBcInJlYWN0LWdvb2dsZS1sb2dpblwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5cclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIi4uL2FjdGlvbnMvYXV0aFwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclVzZXIgfSBmcm9tIFwiLi4vYWN0aW9ucy91c2VyXCI7XHJcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcclxuICBuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gIGVtYWlsOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pXHJcbik7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge31cclxuXHJcbmNvbnN0IEF1dGggPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSVN0YXRlKSA9PiBzdGF0ZS5hdXRoLnVzZXIpIGFzIFVzZXI7XHJcbiAgY29uc3QgaXNTaWduZWRJbiA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBJU3RhdGUpID0+IHN0YXRlLmF1dGguaXNTaWduZWRJblxyXG4gICkgYXMgYm9vbGVhbjtcclxuXHJcbiAgY29uc3Qgb25TdWNjZXNzID0gKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSByZXNwb25zZS5wcm9maWxlT2JqLm5hbWU7XHJcbiAgICBjb25zdCBlbWFpbCA9IHJlc3BvbnNlLnByb2ZpbGVPYmouZW1haWw7XHJcbiAgICBjb25zdCB1c2VyID0geyBuYW1lLCBlbWFpbCB9O1xyXG5cclxuICAgIGRpc3BhdGNoKHNpZ25Jbih1c2VyKSk7XHJcbiAgICBkaXNwYXRjaChyZWdpc3RlclVzZXIodXNlcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmFpbHVyZSA9IChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gbnVsbDtcclxuICAgIGNvbnN0IGVtYWlsID0gbnVsbDtcclxuXHJcbiAgICBkaXNwYXRjaChzaWduSW4oeyBuYW1lLCBlbWFpbCB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TaWduT3V0ID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIGRpc3BhdGNoKHNpZ25PdXQoKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGlzU2lnbmVkSW4gPyAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMubmFtZX0+e3VzZXIubmFtZX08L3NwYW4+XHJcblxyXG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cImRlZmF1bHRcIiBvbkNsaWNrPXtvblNpZ25PdXR9PlxyXG4gICAgICAgIHt0KFwiaGVhZGVyLmxvZ291dFwiKX1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgIGNsaWVudElkPXtwcm9jZXNzLmVudi5SRUFDVF9BUFBfR09PR0xFX0NMSUVOVF9JRCBhcyBzdHJpbmd9XHJcbiAgICAgIGJ1dHRvblRleHQ9XCJMb2dpblwiXHJcbiAgICAgIG9uU3VjY2Vzcz17b25TdWNjZXNzfVxyXG4gICAgICBvbkZhaWx1cmU9e29uRmFpbHVyZX1cclxuICAgICAgY29va2llUG9saWN5PXtcInNpbmdsZV9ob3N0X29yaWdpblwifVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aDtcclxuIl19