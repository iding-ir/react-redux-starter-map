"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../constants");

var initialState = {
  open: false
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.SIDEBAR_OPEN:
      return {
        open: true
      };

    case _constants.SIDEBAR_CLOSE:
      return {
        open: false
      };

    case _constants.SIDEBAR_TOGGLE:
      return {
        open: !state.open
      };

    default:
      return state;
  }
};

var _default = reducer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zaWRlYmFyLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm9wZW4iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0lERUJBUl9PUEVOIiwiU0lERUJBUl9DTE9TRSIsIlNJREVCQVJfVE9HR0xFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBT0EsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxFQUFBQSxJQUFJLEVBQUU7QUFEYSxDQUFyQjs7QUFJQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUEyQztBQUFBLE1BQTFDQyxLQUEwQyx1RUFBbENILFlBQWtDO0FBQUEsTUFBcEJJLE1BQW9COztBQUN6RCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyx1QkFBTDtBQUNFLGFBQU87QUFDTEwsUUFBQUEsSUFBSSxFQUFFO0FBREQsT0FBUDs7QUFHRixTQUFLTSx3QkFBTDtBQUNFLGFBQU87QUFDTE4sUUFBQUEsSUFBSSxFQUFFO0FBREQsT0FBUDs7QUFHRixTQUFLTyx5QkFBTDtBQUNFLGFBQU87QUFDTFAsUUFBQUEsSUFBSSxFQUFFLENBQUNFLEtBQUssQ0FBQ0Y7QUFEUixPQUFQOztBQUdGO0FBQ0UsYUFBT0UsS0FBUDtBQWRKO0FBZ0JELENBakJEOztlQW1CZUQsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNJREVCQVJfT1BFTiwgU0lERUJBUl9DTE9TRSwgU0lERUJBUl9UT0dHTEUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IElBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9zaWRlYmFyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZVNpZGViYXIge1xyXG4gIG9wZW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBvcGVuOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogSUFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU0lERUJBUl9PUEVOOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNJREVCQVJfQ0xPU0U6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNJREVCQVJfVE9HR0xFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wZW46ICFzdGF0ZS5vcGVuLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdfQ==