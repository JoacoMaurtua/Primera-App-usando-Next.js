"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/title */ \"./pages/components/title.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./pages/components/layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar User = function(param) {\n    var user = param.user;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    if (router.isFallback) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"CARGANDO...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 10,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_title__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                children: [\n                    \"User ID \",\n                    user.id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(User, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = User;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDRTtBQUVKOztBQUV0QyxJQUFNRyxJQUFJLEdBQUcsZ0JBQVk7UUFBVkMsSUFBSSxTQUFKQSxJQUFJOztJQUNqQixJQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQUU7SUFFMUIsSUFBR0csTUFBTSxDQUFDQyxVQUFVLEVBQUM7UUFDbkIscUJBQU8sOERBQUNDLEtBQUc7c0JBQUMsYUFBVzs7Ozs7aUJBQU07S0FDOUI7SUFFRCxxQkFDRSw4REFBQ04sMERBQU07OzBCQUNMLDhEQUFDRCx5REFBSzs7b0JBQUMsVUFBUTtvQkFBQ0ksSUFBSSxDQUFDSSxFQUFFOzs7Ozs7cUJBQVM7MEJBQ2hDLDhEQUFDQyxJQUFFOzs7O3FCQUFNOzs7Ozs7YUFFRixDQUNWO0NBQ0Y7R0FkS04sSUFBSTs7UUFDT0Qsa0RBQVM7OztBQURwQkMsS0FBQUEsSUFBSTs7QUFnQlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGUnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgVXNlciA9ICh7dXNlcn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgaWYocm91dGVyLmlzRmFsbGJhY2spe1xuICAgIHJldHVybiA8ZGl2PkNBUkdBTkRPLi4uPC9kaXY+XG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxUaXRsZT5Vc2VyIElEIHt1c2VyLmlkfTwvVGl0bGU+XG4gICAgICA8aDM+PC9oMz5cbiAgICAgXG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcblxuLy9zdGF0aWMgcGF0aHMgcGFyYSBydXRhcyBkaW5hbWljYXNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xuICBjb25zdCBwYXRocyA9IFtcbiAgICB7cGFyYW1zOntpZDonMSd9fSxcbiAgICB7cGFyYW1zOntpZDonMid9fSxcbiAgXVxuICByZXR1cm57XG4gICAgcGF0aHMsIC8vZGV0ZXJtaW5hIGN1YWxlcyBzb24gbG9zIHBhdGhzIHByZXJlbmRlcml6YWRvc1xuICAgIGZhbGxiYWNrOiB0cnVlIC8vc2kgZXhpc3RlIGxhIHBvc2liaWxpZGFkIGRlIHF1ZSBzZSBhZ3JlZ3VlbiBtYXMgdXN1YXJpb3MsIGZhbGxiYWNrIGRlYmUgc2VyIHRydWVcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pe1xuICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke3BhcmFtcy5pZH1gKTtcbiAgY29uc3QgdXNlciA9IGRhdGE7XG4gIHJldHVybntcbiAgICBwcm9wczp7XG4gICAgICB1c2VyXG4gICAgfVxuICB9XG59XG5cbi8vU2llbXByZSBzZSByZXF1aWVyZSBkZSBnZXRTdGF0aWNQYXRocyBwYXJhIHBhZ2luYXMgZGluYW1pY2FzIGNvbiBjb250ZW5pZG8gZXN0YXRpY29cbiJdLCJuYW1lcyI6WyJUaXRsZSIsIkxheW91dCIsInVzZVJvdXRlciIsIlVzZXIiLCJ1c2VyIiwicm91dGVyIiwiaXNGYWxsYmFjayIsImRpdiIsImlkIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});