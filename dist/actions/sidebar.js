"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sidebarToggle = exports.closeSidebar = exports.openSidebar = void 0;

var _constants = require("../constants");

var openSidebar = function openSidebar() {
  return {
    type: _constants.SIDEBAR_OPEN
  };
};

exports.openSidebar = openSidebar;

var closeSidebar = function closeSidebar() {
  return {
    type: _constants.SIDEBAR_CLOSE
  };
};

exports.closeSidebar = closeSidebar;

var sidebarToggle = function sidebarToggle() {
  return {
    type: _constants.SIDEBAR_TOGGLE
  };
};

exports.sidebarToggle = sidebarToggle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NpZGViYXIudHMiXSwibmFtZXMiOlsib3BlblNpZGViYXIiLCJ0eXBlIiwiU0lERUJBUl9PUEVOIiwiY2xvc2VTaWRlYmFyIiwiU0lERUJBUl9DTE9TRSIsInNpZGViYXJUb2dnbGUiLCJTSURFQkFSX1RPR0dMRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQU1PLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQWU7QUFDeEMsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUVDO0FBREQsR0FBUDtBQUdELENBSk07Ozs7QUFNQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFlO0FBQ3pDLFNBQU87QUFDTEYsSUFBQUEsSUFBSSxFQUFFRztBQURELEdBQVA7QUFHRCxDQUpNOzs7O0FBTUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFlO0FBQzFDLFNBQU87QUFDTEosSUFBQUEsSUFBSSxFQUFFSztBQURELEdBQVA7QUFHRCxDQUpNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0lERUJBUl9PUEVOLCBTSURFQkFSX0NMT1NFLCBTSURFQkFSX1RPR0dMRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjdGlvbiB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgb3BlblNpZGViYXIgPSAoKTogSUFjdGlvbiA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJREVCQVJfT1BFTixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsb3NlU2lkZWJhciA9ICgpOiBJQWN0aW9uID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0lERUJBUl9DTE9TRSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZGViYXJUb2dnbGUgPSAoKTogSUFjdGlvbiA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJREVCQVJfVE9HR0xFLFxyXG4gIH07XHJcbn07XHJcbiJdfQ==