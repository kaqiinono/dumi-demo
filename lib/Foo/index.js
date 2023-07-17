"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Foo = function Foo(props) {
  return /*#__PURE__*/_react.default.createElement("h4", null, props.title, /*#__PURE__*/_react.default.createElement(_antd.Button, null, "i am a button333"));
};
var _default = Foo;
exports.default = _default;