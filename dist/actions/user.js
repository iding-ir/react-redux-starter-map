"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerUser = void 0;

var _map = _interopRequireDefault(require("../apis/map"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var registerUser = function registerUser(user) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _map.default.post("/user", user);

            case 2:
              response = _context.sent;
              dispatch({
                type: _constants.USER_REGISTER,
                payload: response.data
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.registerUser = registerUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3VzZXIudHMiXSwibmFtZXMiOlsicmVnaXN0ZXJVc2VyIiwidXNlciIsImRpc3BhdGNoIiwibm90ZXMiLCJwb3N0IiwicmVzcG9uc2UiLCJ0eXBlIiwiVVNFUl9SRUdJU1RFUiIsInBheWxvYWQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0FBR08sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRDtBQUFBO0FBQUEsdUVBQWdCLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ25CQyxhQUFNQyxJQUFOLENBQVcsT0FBWCxFQUFvQkgsSUFBcEIsQ0FEbUI7O0FBQUE7QUFDcENJLGNBQUFBLFFBRG9DO0FBRzFDSCxjQUFBQSxRQUFRLENBQUM7QUFDUEksZ0JBQUFBLElBQUksRUFBRUMsd0JBREM7QUFFUEMsZ0JBQUFBLE9BQU8sRUFBRUgsUUFBUSxDQUFDSTtBQUZYLGVBQUQsQ0FBUjs7QUFIMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub3RlcyBmcm9tIFwiLi4vYXBpcy9tYXBcIjtcclxuaW1wb3J0IHsgVVNFUl9SRUdJU1RFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0F1dGhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSAodXNlcjogVXNlcikgPT4gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5vdGVzLnBvc3QoXCIvdXNlclwiLCB1c2VyKTtcclxuXHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogVVNFUl9SRUdJU1RFUixcclxuICAgIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbiJdfQ==