/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Pagina/form-control.ts":
/*!************************************!*\
  !*** ./src/Pagina/form-control.ts ***!
  \************************************/
/***/ (() => {


const Email = document.getElementById("Email-Input");
const Password = document.getElementById("PassWord-Input");
const Button = document.getElementById("LOGIN-BUTTON");
const ErrorMessage = document.getElementById("Error-Message");
const ObjectDados = {
    Email: "Guilherme@gmail.com",
    Password: "GambiarraMerda"
};
const Verify = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
};
const VerifyLogin = (email, password) => {
    return email === ObjectDados.Email && password === ObjectDados.Password;
};
Button.addEventListener("click", e => {
    e.preventDefault();
    const emailValue = Email.value;
    const passwordValue = Password.value;
    if (Verify(emailValue)) {
        if (VerifyLogin(emailValue, passwordValue)) {
            console.log("Login feito");
            ErrorMessage.innerText = "";
        }
        else {
            ErrorMessage.innerText = "Email ou senha invalidos!";
        }
    }
    else {
        ErrorMessage.innerText = "Email invalido!";
    }
});


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./src/Pagina/In.ts ***!
  \**************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./form-control */ "./src/Pagina/form-control.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map