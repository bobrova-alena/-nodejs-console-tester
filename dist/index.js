/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/test.ts":
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nonDivisibleSubset": () => (/* binding */ nonDivisibleSubset)
/* harmony export */ });
function nonDivisibleSubset(k, s) {
    for (var i = s.length; i > 0; i--) {
        var firstSubRange = checkSubRanges(s, i, k);
        if (firstSubRange.length > 0) {
            return firstSubRange.length;
        }
    }
    return 0;
}
function checkSubRanges(s, length, k) {
    var subArray = s.slice(0, length);
    if (check(s, k, subArray)) {
        return subArray;
    }
    var outerPointer = length - 1;
    while (outerPointer > 0 && s.length - subArray.length > 0) {
        for (var i = 1; i <= s.length - subArray.length; i++) {
            subArray[outerPointer] = s[outerPointer + i];
            if (check(s, k, subArray)) {
                return subArray;
            }
        }
        outerPointer--;
    }
    return [];
}
function check(s, k, subArray) {
    var sum = 0;
    console.log('Sum: ');
    for (var j = 0; j < subArray.length; j++) {
        console.log('Item ' + subArray[j]);
        sum += subArray[j];
    }
    if (sum % k == 0) {
        return true;
    }
    return false;
}


/***/ })

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ "./src/test.ts");

var result = (0,_test__WEBPACK_IMPORTED_MODULE_0__.nonDivisibleSubset)(7, '278 576 496 727 410 124 338 149 209 702 282 718 771 575 436'
    .split(' ')
    .map(function (item) { return parseInt(item, 10); }));
console.log(result);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map