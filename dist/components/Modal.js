"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./styles/Modal.css");

const Modal = _ref => {
  let {
    isOpen,
    setIsOpen
  } = _ref;

  const handleModal = () => setIsOpen(false);

  return /*#__PURE__*/React.createElement(React.Fragment, null, isOpen && /*#__PURE__*/React.createElement("div", {
    className: "modal-bg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("p", null, "Employee Created!"), /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: handleModal
  }, "X"))));
};

var _default = Modal;
exports.default = _default;