"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles/Modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = props => {
  const handleModal = () => props.setIsOpen(false);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-bg"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Employee Created!"), /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-close",
    onClick: handleModal
  }, "X"))));
};

var _default = Modal;
exports.default = _default;