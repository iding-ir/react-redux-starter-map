"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _axios.default.create({
  baseURL: process.env.REACT_APP_API_URL
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGlzL21hcC50cyJdLCJuYW1lcyI6WyJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0FQSV9VUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUVlQSxlQUFNQyxNQUFOLENBQWE7QUFDMUJDLEVBQUFBLE9BQU8sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBREssQ0FBYixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX1VSTCxcclxufSk7Il19