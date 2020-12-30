"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signOut = exports.signIn = void 0;

var _constants = require("../constants");

var signIn = function signIn(user) {
  return {
    type: _constants.SIGN_IN,
    payload: {
      user: user
    }
  };
};

exports.signIn = signIn;

var signOut = function signOut() {
  return {
    type: _constants.SIGN_OUT,
    payload: {
      user: null
    }
  };
};

exports.signOut = signOut;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2F1dGgudHMiXSwibmFtZXMiOlsic2lnbkluIiwidXNlciIsInR5cGUiLCJTSUdOX0lOIiwicGF5bG9hZCIsInNpZ25PdXQiLCJTSUdOX09VVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQVFPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBeUI7QUFDN0MsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUVDLGtCQUREO0FBRUxDLElBQUFBLE9BQU8sRUFBRTtBQUFFSCxNQUFBQSxJQUFJLEVBQUpBO0FBQUY7QUFGSixHQUFQO0FBSUQsQ0FMTTs7OztBQU9BLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWU7QUFDcEMsU0FBTztBQUNMSCxJQUFBQSxJQUFJLEVBQUVJLG1CQUREO0FBRUxGLElBQUFBLE9BQU8sRUFBRTtBQUFFSCxNQUFBQSxJQUFJLEVBQUU7QUFBUjtBQUZKLEdBQVA7QUFJRCxDQUxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0lHTl9JTiwgU0lHTl9PVVQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BdXRoXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBY3Rpb24ge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBwYXlsb2FkOiB7IHVzZXI6IFVzZXIgfCBudWxsIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaWduSW4gPSAodXNlcjogVXNlcik6IElBY3Rpb24gPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOX0lOLFxyXG4gICAgcGF5bG9hZDogeyB1c2VyIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduT3V0ID0gKCk6IElBY3Rpb24gPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOX09VVCxcclxuICAgIHBheWxvYWQ6IHsgdXNlcjogbnVsbCB9LFxyXG4gIH07XHJcbn07XHJcbiJdfQ==