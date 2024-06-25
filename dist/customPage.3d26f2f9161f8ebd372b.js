"use strict";
(self["webpackChunkwebpack5"] = self["webpackChunkwebpack5"] || []).push([["customPage"],{

/***/ 284:
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 44:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ 284);
/* harmony import */ var _icon_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.jpg */ 416);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 543);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./print.js */ 619);





console.log('a', lodash__WEBPACK_IMPORTED_MODULE_2___default().join(['c','d']));

function component() {
    const element = document.createElement('div');
  
    // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
    element.innerHTML = '2vv444';
    element.classList.add('hello');
      // 将图像添加到已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = _icon_jpg__WEBPACK_IMPORTED_MODULE_1__;
  element.appendChild(myIcon);

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_3__["default"];
  element.appendChild(btn);

    return element;
  }
  
  document.body.appendChild(component());

/***/ }),

/***/ 619:
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });

Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ 543, 23)).then(({default: _}) => {
    console.log(_.join(['a', 'b']));

});
function printMe() {
    console.log('I get called from print.js!', a);
  }

/***/ }),

/***/ 416:
/*!**********************!*\
  !*** ./src/icon.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b85ca43cb234ea5dbd7.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(44)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tUGFnZS4zZDI2ZjJmOTE2MWY4ZWJkMzcyYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1M7QUFDUDtBQUNVOztBQUVqQyxpQkFBaUIsa0RBQU07O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNDQUFJO0FBQ25COztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQU87QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQSw2R0FBZ0IsUUFBUSxXQUFXO0FBQ25DOztBQUVBLENBQUM7QUFDYztBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEljb24gZnJvbSAnLi9pY29uLmpwZyc7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgcHJpbnRNZSBmcm9tICcuL3ByaW50LmpzJztcblxuY29uc29sZS5sb2coJ2EnLCBfLmpvaW4oWydjJywnZCddKSk7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIFxuICAgIC8vIOaJp+ihjOi/meS4gOihjOmcgOimgeW8leWFpSBsb2Rhc2jvvIjnm67liY3pgJrov4cgc2NyaXB0IOiEmuacrOW8leWFpe+8iVxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJzJ2djQ0NCc7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWxsbycpO1xuICAgICAgLy8g5bCG5Zu+5YOP5re75Yqg5Yiw5bey57uP5a2Y5Zyo55qEIGRpdiDkuK3jgIJcbiAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gIG15SWNvbi5zcmMgPSBJY29uO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbik7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlISc7XG4gIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbiAgXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyIsIlxuaW1wb3J0KCdsb2Rhc2gnKS50aGVuKCh7ZGVmYXVsdDogX30pID0+IHtcbiAgICBjb25zb2xlLmxvZyhfLmpvaW4oWydhJywgJ2InXSkpO1xuXG59KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TWUoKSB7XG4gICAgY29uc29sZS5sb2coJ0kgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzIScsIGEpO1xuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9