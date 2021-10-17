/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("// Set the date we're counting down to\nconst countDownDate = new Date(\"Mar 5, 2022 00:00:00\").getTime();\n\n// Update the count down every 1 second\nconst x = setInterval(function() {\n\n    // Get today's date and time\n    const now = new Date().getTime();\n\n    // Find the distance between now and the count down date\n    const distance = countDownDate - now;\n\n    // Time calculations for days, hours, minutes and seconds\n    const days = Math.floor(distance / (1000 * 60 * 60 * 24));\n    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\n    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));\n    const seconds = Math.floor((distance % (1000 * 60)) / 1000);\n\n    // Display the result in the element with id=\"demo\"\n    document.getElementById(\"timeout\").innerHTML = days + \"j \" + hours + \"h \"\n    + minutes + \"m \" + seconds + \"s \";\n    document.getElementById(\"timeout-desc\").innerHTML = \"Temps restant pour s'inscrire\";\n\n    // If the count down is finished, write some text\n    if (distance < 0) {\n        clearInterval(x);\n        document.getElementById(\"timeout\").innerHTML = \"Oups, c'est trop tard... Vous pouvez quand même vous inscrire pour 2027 !\";\n        document.getElementById(\"timeout-desc\").innerHTML = \"\";\n    }\n}, 1000);\n\n\n//# sourceURL=webpack://clickbaitpourlademocratie/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;