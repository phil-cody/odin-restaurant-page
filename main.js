/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/style.scss"
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUvc3R5bGUuc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzPzQ1NmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/style/style.scss\n\n}");

/***/ },

/***/ "./src/assets/img/burger.png"
/*!***********************************!*\
  !*** ./src/assets/img/burger.png ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/burger.png";

/***/ },

/***/ "./src/assets/img/french-fry.png"
/*!***************************************!*\
  !*** ./src/assets/img/french-fry.png ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/french-fry.png";

/***/ },

/***/ "./src/assets/img/healthy.svg"
/*!************************************!*\
  !*** ./src/assets/img/healthy.svg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/healthy.svg";

/***/ },

/***/ "./src/assets/img/images.webp"
/*!************************************!*\
  !*** ./src/assets/img/images.webp ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/images.webp";

/***/ },

/***/ "./src/assets/img/online.svg"
/*!***********************************!*\
  !*** ./src/assets/img/online.svg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/online.svg";

/***/ },

/***/ "./src/assets/img/order.svg"
/*!**********************************!*\
  !*** ./src/assets/img/order.svg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/order.svg";

/***/ },

/***/ "./src/assets/img/pasta.png"
/*!**********************************!*\
  !*** ./src/assets/img/pasta.png ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pasta.png";

/***/ },

/***/ "./src/assets/img/pizza.png"
/*!**********************************!*\
  !*** ./src/assets/img/pizza.png ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pizza.png";

/***/ },

/***/ "./src/main.js"
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ \"./src/style/style.scss\");\n/* harmony import */ var _modules_addHero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/addHero */ \"./src/modules/addHero.js\");\n/* harmony import */ var _modules_addAbout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modules/addAbout */ \"./src/modules/addAbout.js\");\n/* harmony import */ var _modules_addMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/addMenu */ \"./src/modules/addMenu.js\");\n\n\nconst contentDiv = document.querySelector(\"#content\");\nconst slogan = \"Crispy, Every Bite Taste\";\n\n\n\n\n\nconst navTab = document.querySelector(\"header nav\");\n\nnavTab.addEventListener(\"click\", (event) => {\n  const target = event.target;\n\n  if (!target.dataset.tab) return;\n\n  const currentTab = target.dataset.tab;\n\n  contentDiv.replaceChildren();\n\n  Array.from(navTab.querySelectorAll(\"ul li button\")).forEach((btn) =>\n    btn.classList.remove(\"active\"),\n  );\n\n  target.classList.add(\"active\");\n\n  switch (currentTab) {\n    case \"hero\":\n      (0,_modules_addHero__WEBPACK_IMPORTED_MODULE_1__.addHero)(contentDiv, slogan);\n      break;\n    case \"about\":\n      (0,_modules_addAbout__WEBPACK_IMPORTED_MODULE_2__.addAbout)(contentDiv);\n      break;\n    case \"menu\":\n      (0,_modules_addMenu__WEBPACK_IMPORTED_MODULE_3__.addMenu)(contentDiv, slogan);\n      break;\n  }\n});\n\nconst firstOpen = () => {\n  contentDiv.replaceChildren();\n\n  (0,_modules_addHero__WEBPACK_IMPORTED_MODULE_1__.addHero)(contentDiv, slogan);\n  (0,_modules_addMenu__WEBPACK_IMPORTED_MODULE_3__.addMenu)(contentDiv, slogan);\n  (0,_modules_addAbout__WEBPACK_IMPORTED_MODULE_2__.addAbout)(contentDiv);\n};\n\n\nfirstOpen();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0Qjs7QUFFNUI7QUFDQTs7QUFFNEM7QUFDRTtBQUNGOztBQUU1Qzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSx5REFBTztBQUNiO0FBQ0E7QUFDQSxNQUFNLDJEQUFRO0FBQ2Q7QUFDQTtBQUNBLE1BQU0seURBQU87QUFDYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBLEVBQUUseURBQU87QUFDVCxFQUFFLHlEQUFPO0FBQ1QsRUFBRSwyREFBUTtBQUNWOzs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4uanM/ZTBkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlL3N0eWxlLnNjc3NcIjtcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IHNsb2dhbiA9IFwiQ3Jpc3B5LCBFdmVyeSBCaXRlIFRhc3RlXCI7XG5cbmltcG9ydCB7IGFkZEhlcm8gfSBmcm9tIFwiQC9tb2R1bGVzL2FkZEhlcm9cIjtcbmltcG9ydCB7IGFkZEFib3V0IH0gZnJvbSBcIkAvbW9kdWxlcy9hZGRBYm91dFwiO1xuaW1wb3J0IHsgYWRkTWVudSB9IGZyb20gXCJAL21vZHVsZXMvYWRkTWVudVwiO1xuXG5jb25zdCBuYXZUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyIG5hdlwiKTtcblxubmF2VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gIGlmICghdGFyZ2V0LmRhdGFzZXQudGFiKSByZXR1cm47XG5cbiAgY29uc3QgY3VycmVudFRhYiA9IHRhcmdldC5kYXRhc2V0LnRhYjtcblxuICBjb250ZW50RGl2LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIEFycmF5LmZyb20obmF2VGFiLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bCBsaSBidXR0b25cIikpLmZvckVhY2goKGJ0bikgPT5cbiAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSxcbiAgKTtcblxuICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICBzd2l0Y2ggKGN1cnJlbnRUYWIpIHtcbiAgICBjYXNlIFwiaGVyb1wiOlxuICAgICAgYWRkSGVybyhjb250ZW50RGl2LCBzbG9nYW4pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImFib3V0XCI6XG4gICAgICBhZGRBYm91dChjb250ZW50RGl2KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJtZW51XCI6XG4gICAgICBhZGRNZW51KGNvbnRlbnREaXYsIHNsb2dhbik7XG4gICAgICBicmVhaztcbiAgfVxufSk7XG5cbmNvbnN0IGZpcnN0T3BlbiA9ICgpID0+IHtcbiAgY29udGVudERpdi5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBhZGRIZXJvKGNvbnRlbnREaXYsIHNsb2dhbik7XG4gIGFkZE1lbnUoY29udGVudERpdiwgc2xvZ2FuKTtcbiAgYWRkQWJvdXQoY29udGVudERpdik7XG59O1xuXG5cbmZpcnN0T3BlbigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n\n}");

/***/ },

/***/ "./src/modules/addAbout.js"
/*!*********************************!*\
  !*** ./src/modules/addAbout.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAbout: () => (/* binding */ addAbout)\n/* harmony export */ });\n/* harmony import */ var _assets_img_images_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/img/images.webp */ \"./src/assets/img/images.webp\");\n/* harmony import */ var _assets_img_online_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/img/online.svg */ \"./src/assets/img/online.svg\");\n/* harmony import */ var _assets_img_healthy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/img/healthy.svg */ \"./src/assets/img/healthy.svg\");\n\n\n\n\nconst addAbout = (contentDiv) => {\n  const about = document.createElement(\"section\");\n  about.classList.add(\"about\");\n  contentDiv.appendChild(about);\n\n  const container = document.createElement(\"div\");\n  container.classList.add(\"container\");\n  about.appendChild(container);\n\n  const aboutTitle = document.createElement(\"h2\");\n  aboutTitle.textContent = \"Perfect Place For An Exeptional Experience\";\n  container.appendChild(aboutTitle);\n\n  const aboutContent = document.createElement(\"div\");\n  aboutContent.classList.add(\"about__content\");\n  container.appendChild(aboutContent);\n\n  const aboutImage = document.createElement(\"img\");\n  aboutImage.setAttribute(\"src\", _assets_img_images_webp__WEBPACK_IMPORTED_MODULE_0__);\n  aboutImage.classList.add(\"about__image\");\n  aboutContent.appendChild(aboutImage);\n\n  const aboutText = document.createElement(\"p\");\n  aboutText.classList.add(\"about__text\");\n  aboutText.textContent =\n    \"Nisl quam nestibulum ac quam nec odio elementu sceisue the aucan ligula. Orci varius natoque pena culus mus nellentesque ha um ac quam nec odio aibulum ac quam nec odio elrbine.\";\n  aboutContent.appendChild(aboutText);\n\n  const aboutNote = document.createElement('div');\n  aboutNote.classList.add('about__note');\n  aboutContent.appendChild(aboutNote);\n\n  const noteImage = document.createElement('div');\n  noteImage.classList.add('note__img');\n  aboutNote.appendChild(noteImage);\n\n  const noteImg = document.createElement('img');\n  noteImg.setAttribute('src', _assets_img_online_svg__WEBPACK_IMPORTED_MODULE_1__);\n  noteImage.appendChild(noteImg);\n\n  const noteText = document.createElement('div');\n  noteText.classList.add('note__text');\n  aboutNote.appendChild(noteText);\n\n  const noteTitle = document.createElement('h3');\n  noteTitle.textContent = 'Online Food Ordering';\n  noteText.appendChild(noteTitle);\n\n  const noteDescription = document.createElement('p');\n  noteDescription.textContent = 'Easy Food delivery from the best restaurants.';\n  noteText.appendChild(noteDescription);\n\n  const aboutNoteSecond = aboutNote.cloneNode(true);\n  aboutContent.appendChild(aboutNoteSecond);\n\n  aboutNoteSecond.querySelector('img').setAttribute('src', _assets_img_healthy_svg__WEBPACK_IMPORTED_MODULE_2__);\n\n  aboutNoteSecond.querySelector('h3').textContent = '100% Healthy Food';\n\n  aboutNoteSecond.querySelector('p').textContent = 'Eating a wide variety of nutritious Healthy foods';\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hZGRBYm91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBQ007QUFDRTs7QUFFakQ7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsb0RBQVE7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsbURBQWU7QUFDN0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyREFBMkQsb0RBQWdCOztBQUUzRTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9hZGRBYm91dC5qcz9kNDc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhYm91dEltZyBmcm9tIFwiQC9hc3NldHMvaW1nL2ltYWdlcy53ZWJwXCI7XG5pbXBvcnQgbm90ZUltYWdlT25saW5lIGZyb20gJ0AvYXNzZXRzL2ltZy9vbmxpbmUuc3ZnJztcbmltcG9ydCBub3RlSW1hZ2VIZWFsdGh5IGZyb20gJ0AvYXNzZXRzL2ltZy9oZWFsdGh5LnN2Zyc7XG5cbmV4cG9ydCBjb25zdCBhZGRBYm91dCA9IChjb250ZW50RGl2KSA9PiB7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChhYm91dCk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGFib3V0LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgYWJvdXRUaXRsZS50ZXh0Q29udGVudCA9IFwiUGVyZmVjdCBQbGFjZSBGb3IgQW4gRXhlcHRpb25hbCBFeHBlcmllbmNlXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFRpdGxlKTtcblxuICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImFib3V0X19jb250ZW50XCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50KTtcblxuICBjb25zdCBhYm91dEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgYWJvdXRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYWJvdXRJbWcpO1xuICBhYm91dEltYWdlLmNsYXNzTGlzdC5hZGQoXCJhYm91dF9faW1hZ2VcIik7XG4gIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dEltYWdlKTtcblxuICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWJvdXRUZXh0LmNsYXNzTGlzdC5hZGQoXCJhYm91dF9fdGV4dFwiKTtcbiAgYWJvdXRUZXh0LnRleHRDb250ZW50ID1cbiAgICBcIk5pc2wgcXVhbSBuZXN0aWJ1bHVtIGFjIHF1YW0gbmVjIG9kaW8gZWxlbWVudHUgc2NlaXN1ZSB0aGUgYXVjYW4gbGlndWxhLiBPcmNpIHZhcml1cyBuYXRvcXVlIHBlbmEgY3VsdXMgbXVzIG5lbGxlbnRlc3F1ZSBoYSB1bSBhYyBxdWFtIG5lYyBvZGlvIGFpYnVsdW0gYWMgcXVhbSBuZWMgb2RpbyBlbHJiaW5lLlwiO1xuICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KTtcblxuICBjb25zdCBhYm91dE5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXROb3RlLmNsYXNzTGlzdC5hZGQoJ2Fib3V0X19ub3RlJyk7XG4gIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dE5vdGUpO1xuXG4gIGNvbnN0IG5vdGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub3RlSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbm90ZV9faW1nJyk7XG4gIGFib3V0Tm90ZS5hcHBlbmRDaGlsZChub3RlSW1hZ2UpO1xuXG4gIGNvbnN0IG5vdGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbm90ZUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIG5vdGVJbWFnZU9ubGluZSk7XG4gIG5vdGVJbWFnZS5hcHBlbmRDaGlsZChub3RlSW1nKTtcblxuICBjb25zdCBub3RlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub3RlVGV4dC5jbGFzc0xpc3QuYWRkKCdub3RlX190ZXh0Jyk7XG4gIGFib3V0Tm90ZS5hcHBlbmRDaGlsZChub3RlVGV4dCk7XG5cbiAgY29uc3Qgbm90ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbm90ZVRpdGxlLnRleHRDb250ZW50ID0gJ09ubGluZSBGb29kIE9yZGVyaW5nJztcbiAgbm90ZVRleHQuYXBwZW5kQ2hpbGQobm90ZVRpdGxlKTtcblxuICBjb25zdCBub3RlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vdGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdFYXN5IEZvb2QgZGVsaXZlcnkgZnJvbSB0aGUgYmVzdCByZXN0YXVyYW50cy4nO1xuICBub3RlVGV4dC5hcHBlbmRDaGlsZChub3RlRGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGFib3V0Tm90ZVNlY29uZCA9IGFib3V0Tm90ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dE5vdGVTZWNvbmQpO1xuXG4gIGFib3V0Tm90ZVNlY29uZC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG5vdGVJbWFnZUhlYWx0aHkpO1xuXG4gIGFib3V0Tm90ZVNlY29uZC5xdWVyeVNlbGVjdG9yKCdoMycpLnRleHRDb250ZW50ID0gJzEwMCUgSGVhbHRoeSBGb29kJztcblxuICBhYm91dE5vdGVTZWNvbmQucXVlcnlTZWxlY3RvcigncCcpLnRleHRDb250ZW50ID0gJ0VhdGluZyBhIHdpZGUgdmFyaWV0eSBvZiBudXRyaXRpb3VzIEhlYWx0aHkgZm9vZHMnO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/addAbout.js\n\n}");

/***/ },

/***/ "./src/modules/addHero.js"
/*!********************************!*\
  !*** ./src/modules/addHero.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addHero: () => (/* binding */ addHero),\n/* harmony export */   x: () => (/* binding */ x)\n/* harmony export */ });\n/* harmony import */ var _assets_img_order_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/img/order.svg */ \"./src/assets/img/order.svg\");\n\n\nconst addHero = (contentDiv, slogan) => {\n  const hero = document.createElement(\"section\");\n  hero.classList.add(\"hero\");\n  contentDiv.appendChild(hero);\n\n  const container = document.createElement(\"div\");\n  container.classList.add(\"container\");\n  console.log(container);\n  hero.appendChild(container);\n\n  const heroText = document.createElement(\"div\");\n  heroText.classList.add(\"hero__text\");\n  container.appendChild(heroText);\n\n  const heroSlogan = document.createElement(\"p\");\n  heroSlogan.classList.add(\"slogan\");\n  heroSlogan.textContent = slogan;\n  heroText.appendChild(heroSlogan);\n\n  const heroTitle = document.createElement(\"h1\");\n  heroTitle.classList.add(\"title\");\n  heroTitle.textContent = \"Hot spicy chicken burger\";\n  heroText.appendChild(heroTitle);\n\n  const heroSubtitle = document.createElement(\"p\");\n  heroSubtitle.classList.add(\"subtitle\");\n  heroSubtitle.textContent = \"Limited offer/\";\n  heroText.appendChild(heroSubtitle);\n\n  const heroSpan = document.createElement(\"span\");\n  heroSpan.textContent = \"$5\";\n  heroSubtitle.appendChild(heroSpan);\n\n  const orderBtn = document.createElement(\"button\");\n  orderBtn.classList.add(\"order-btn\", \"btn\");\n  heroText.appendChild(orderBtn);\n\n  const orderBtnImg = document.createElement(\"img\");\n  orderBtnImg.setAttribute(\"src\", _assets_img_order_svg__WEBPACK_IMPORTED_MODULE_0__);\n  orderBtnImg.setAttribute(\"alt\", \"Order Now\");\n  orderBtn.appendChild(orderBtnImg);\n\n  const orderBtnText = document.createElement(\"p\");\n  orderBtnText.textContent = \"Order Now\";\n  orderBtn.appendChild(orderBtnText);\n};\n\nconst x = 3;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hZGRIZXJvLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4Qzs7QUFFdkM7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0Msa0RBQVE7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvYWRkSGVyby5qcz8xNDRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvcmRlckltZyBmcm9tIFwiQC9hc3NldHMvaW1nL29yZGVyLnN2Z1wiO1xuXG5leHBvcnQgY29uc3QgYWRkSGVybyA9IChjb250ZW50RGl2LCBzbG9nYW4pID0+IHtcbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlcm8pO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBjb25zb2xlLmxvZyhjb250YWluZXIpO1xuICBoZXJvLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZXJvVGV4dC5jbGFzc0xpc3QuYWRkKFwiaGVyb19fdGV4dFwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcblxuICBjb25zdCBoZXJvU2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGhlcm9TbG9nYW4uY2xhc3NMaXN0LmFkZChcInNsb2dhblwiKTtcbiAgaGVyb1Nsb2dhbi50ZXh0Q29udGVudCA9IHNsb2dhbjtcbiAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoaGVyb1Nsb2dhbik7XG5cbiAgY29uc3QgaGVyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZXJvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICBoZXJvVGl0bGUudGV4dENvbnRlbnQgPSBcIkhvdCBzcGljeSBjaGlja2VuIGJ1cmdlclwiO1xuICBoZXJvVGV4dC5hcHBlbmRDaGlsZChoZXJvVGl0bGUpO1xuXG4gIGNvbnN0IGhlcm9TdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBoZXJvU3VidGl0bGUuY2xhc3NMaXN0LmFkZChcInN1YnRpdGxlXCIpO1xuICBoZXJvU3VidGl0bGUudGV4dENvbnRlbnQgPSBcIkxpbWl0ZWQgb2ZmZXIvXCI7XG4gIGhlcm9UZXh0LmFwcGVuZENoaWxkKGhlcm9TdWJ0aXRsZSk7XG5cbiAgY29uc3QgaGVyb1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaGVyb1NwYW4udGV4dENvbnRlbnQgPSBcIiQ1XCI7XG4gIGhlcm9TdWJ0aXRsZS5hcHBlbmRDaGlsZChoZXJvU3Bhbik7XG5cbiAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBvcmRlckJ0bi5jbGFzc0xpc3QuYWRkKFwib3JkZXItYnRuXCIsIFwiYnRuXCIpO1xuICBoZXJvVGV4dC5hcHBlbmRDaGlsZChvcmRlckJ0bik7XG5cbiAgY29uc3Qgb3JkZXJCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBvcmRlckJ0bkltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgb3JkZXJJbWcpO1xuICBvcmRlckJ0bkltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJPcmRlciBOb3dcIik7XG4gIG9yZGVyQnRuLmFwcGVuZENoaWxkKG9yZGVyQnRuSW1nKTtcblxuICBjb25zdCBvcmRlckJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgb3JkZXJCdG5UZXh0LnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIjtcbiAgb3JkZXJCdG4uYXBwZW5kQ2hpbGQob3JkZXJCdG5UZXh0KTtcbn07XG5cbmV4cG9ydCBjb25zdCB4ID0gMzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/addHero.js\n\n}");

/***/ },

/***/ "./src/modules/addMenu.js"
/*!********************************!*\
  !*** ./src/modules/addMenu.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addMenu: () => (/* binding */ addMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_img_pizza_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/img/pizza.png */ \"./src/assets/img/pizza.png\");\n/* harmony import */ var _assets_img_pasta_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/img/pasta.png */ \"./src/assets/img/pasta.png\");\n/* harmony import */ var _assets_img_burger_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/img/burger.png */ \"./src/assets/img/burger.png\");\n/* harmony import */ var _assets_img_french_fry_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/img/french-fry.png */ \"./src/assets/img/french-fry.png\");\n\n\n\n\n\nconst foodItemsArray = [\n  {\n    src: _assets_img_pizza_png__WEBPACK_IMPORTED_MODULE_0__,\n    name: 'Pizza',\n    price: '$4',\n  },\n  {\n    src: _assets_img_pasta_png__WEBPACK_IMPORTED_MODULE_1__,\n    name: 'Pasta',\n    price: '$5',\n  },\n  {\n    src: _assets_img_burger_png__WEBPACK_IMPORTED_MODULE_2__,\n    name: 'Burger',\n    price: '$7',\n  },\n  {\n    src: _assets_img_french_fry_png__WEBPACK_IMPORTED_MODULE_3__,\n    name: 'French Fries',\n    price: '$2.95',\n  }\n];\n\nconst addMenu = (contentDiv, slogan) => {\n  const menu = document.createElement('section');\n  menu.classList.add('menu');\n  contentDiv.appendChild(menu);\n\n  const container = document.createElement(\"div\");\n  container.classList.add(\"container\");\n  menu.appendChild(container);\n\n  const menuSlogan = document.createElement('p');\n  menuSlogan.textContent = slogan;\n  container.appendChild(menuSlogan);\n\n  const menuTitle = document.createElement(\"h2\");\n  menuTitle.textContent = \"Popular Food Items\";\n  container.appendChild(menuTitle);\n\n  const menuCards = document.createElement('div');\n  menuCards.classList.add('menu__cards');\n  container.appendChild(menuCards);\n\n  foodItemsArray.forEach(food => {\n    const menuItem = document.createElement('div');\n    menuItem.classList.add('menu__item');\n    menuCards.appendChild(menuItem);\n\n    const itemImg = document.createElement('img');\n    itemImg.setAttribute('src', food.src);\n    itemImg.setAttribute('alt', food.name);\n    itemImg.classList.add('item__img');\n    menuItem.appendChild(itemImg);\n\n    const itemName = document.createElement('h4');\n    itemName.textContent = food.name;\n    menuItem.appendChild(itemName);\n\n    const itemHrLine = document.createElement('hr');\n    menuItem.appendChild(itemHrLine);\n\n    const itemPrice = document.createElement('p');\n    itemPrice.textContent = food.price;\n    menuItem.appendChild(itemPrice);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hZGRNZW51LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDO0FBQ0E7QUFDRTtBQUNPOztBQUV2RDtBQUNBO0FBQ0EsU0FBUyxrREFBUTtBQUNqQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsU0FBUyxrREFBUTtBQUNqQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsU0FBUyxtREFBUztBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsU0FBUyx1REFBWTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2FkZE1lbnUuanM/ODUwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGl6emFJbWcgZnJvbSAnQC9hc3NldHMvaW1nL3BpenphLnBuZyc7XG5pbXBvcnQgcGFzdGFJbWcgZnJvbSAnQC9hc3NldHMvaW1nL3Bhc3RhLnBuZyc7XG5pbXBvcnQgYnVyZ2VySW1nIGZyb20gJ0AvYXNzZXRzL2ltZy9idXJnZXIucG5nJztcbmltcG9ydCBmcmVuY2hGcnlJbWcgZnJvbSAnQC9hc3NldHMvaW1nL2ZyZW5jaC1mcnkucG5nJztcblxuY29uc3QgZm9vZEl0ZW1zQXJyYXkgPSBbXG4gIHtcbiAgICBzcmM6IHBpenphSW1nLFxuICAgIG5hbWU6ICdQaXp6YScsXG4gICAgcHJpY2U6ICckNCcsXG4gIH0sXG4gIHtcbiAgICBzcmM6IHBhc3RhSW1nLFxuICAgIG5hbWU6ICdQYXN0YScsXG4gICAgcHJpY2U6ICckNScsXG4gIH0sXG4gIHtcbiAgICBzcmM6IGJ1cmdlckltZyxcbiAgICBuYW1lOiAnQnVyZ2VyJyxcbiAgICBwcmljZTogJyQ3JyxcbiAgfSxcbiAge1xuICAgIHNyYzogZnJlbmNoRnJ5SW1nLFxuICAgIG5hbWU6ICdGcmVuY2ggRnJpZXMnLFxuICAgIHByaWNlOiAnJDIuOTUnLFxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgYWRkTWVudSA9IChjb250ZW50RGl2LCBzbG9nYW4pID0+IHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBtZW51U2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZW51U2xvZ2FuLnRleHRDb250ZW50ID0gc2xvZ2FuO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVNsb2dhbik7XG5cbiAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSBcIlBvcHVsYXIgRm9vZCBJdGVtc1wiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcblxuICBjb25zdCBtZW51Q2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUNhcmRzLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NhcmRzJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q2FyZHMpO1xuXG4gIGZvb2RJdGVtc0FycmF5LmZvckVhY2goZm9vZCA9PiB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtJyk7XG4gICAgbWVudUNhcmRzLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcblxuICAgIGNvbnN0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpdGVtSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgZm9vZC5zcmMpO1xuICAgIGl0ZW1JbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBmb29kLm5hbWUpO1xuICAgIGl0ZW1JbWcuY2xhc3NMaXN0LmFkZCgnaXRlbV9faW1nJyk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUltZyk7XG5cbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBmb29kLm5hbWU7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuXG4gICAgY29uc3QgaXRlbUhyTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUhyTGluZSk7XG5cbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gZm9vZC5wcmljZTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuICB9KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/addMenu.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;