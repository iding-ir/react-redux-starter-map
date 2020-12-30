"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  isSignedIn: null,
  user: null
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.SIGN_IN:
      return _objectSpread(_objectSpread({}, state), {}, {
        isSignedIn: true,
        user: action.payload.user
      });

    case _constants.SIGN_OUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        isSignedIn: false,
        user: null
      });

    default:
      return state;
  }
};

var _default = reducer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9hdXRoLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzU2lnbmVkSW4iLCJ1c2VyIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNJR05fSU4iLCJwYXlsb2FkIiwiU0lHTl9PVVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFTQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLEVBQUFBLFVBQVUsRUFBRSxJQURPO0FBRW5CQyxFQUFBQSxJQUFJLEVBQUU7QUFGYSxDQUFyQjs7QUFLQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUEyQztBQUFBLE1BQTFDQyxLQUEwQyx1RUFBbENKLFlBQWtDO0FBQUEsTUFBcEJLLE1BQW9COztBQUN6RCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxrQkFBTDtBQUNFLDZDQUNLSCxLQURMO0FBRUVILFFBQUFBLFVBQVUsRUFBRSxJQUZkO0FBR0VDLFFBQUFBLElBQUksRUFBRUcsTUFBTSxDQUFDRyxPQUFQLENBQWVOO0FBSHZCOztBQUtGLFNBQUtPLG1CQUFMO0FBQ0UsNkNBQ0tMLEtBREw7QUFFRUgsUUFBQUEsVUFBVSxFQUFFLEtBRmQ7QUFHRUMsUUFBQUEsSUFBSSxFQUFFO0FBSFI7O0FBS0Y7QUFDRSxhQUFPRSxLQUFQO0FBZEo7QUFnQkQsQ0FqQkQ7O2VBbUJlRCxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0lHTl9JTiwgU0lHTl9PVVQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IElBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BdXRoXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZUF1dGgge1xyXG4gIGlzU2lnbmVkSW46IGJvb2xlYW47XHJcbiAgdXNlcjogVXNlcjtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzU2lnbmVkSW46IG51bGwsXHJcbiAgdXNlcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogSUFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU0lHTl9JTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NpZ25lZEluOiB0cnVlLFxyXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNJR05fT1VUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2lnbmVkSW46IGZhbHNlLFxyXG4gICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl19