/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*
 * @Author: DianaTang
 * @Date: 2024-07-08 16:23:40
 * @LastEditors: DianaTang
 * @Description: some description
 * @FilePath: /DT-Web3-Interface/src/index.tsx
 */ (function() {
    function fibonacci(x) {
        return x <= 1 ? x : fibonacci(x - 1) + fibonacci(x - 2);
    }
    __webpack_require__.g.x = fibonacci(15);
})();

/******/ })()
;