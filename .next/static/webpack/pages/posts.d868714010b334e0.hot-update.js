"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./pages/posts/index.js":
/*!******************************!*\
  !*** ./pages/posts/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_Joaquin_Maurtua_Desktop_DEVELOPER_primer_proyecto_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Joaquin_Maurtua_Desktop_DEVELOPER_primer_proyecto_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Joaquin_Maurtua_Desktop_DEVELOPER_primer_proyecto_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ \"./pages/components/navbar.js\");\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/title */ \"./pages/components/title.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ \"./pages/components/layout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar posts = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), posts = ref[0], setPosts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchPosts = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_Joaquin_Maurtua_Desktop_DEVELOPER_primer_proyecto_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data;\n                return C_Users_Joaquin_Maurtua_Desktop_DEVELOPER_primer_proyecto_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"https://jsonplaceholder.typicode.com/posts\");\n                        case 2:\n                            data = _ctx.sent.data;\n                            setPosts(data);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchPosts() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchPosts();\n    }, []);\n    console.log(\"posts:\", posts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_title__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: \"Post Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: posts.map(function(post) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Link, {\n                        href: \"/pots/[id]\",\n                        as: \"/posts/\".concat(post.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: post\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(posts, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (posts);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBZ0Q7QUFDTjtBQUNGO0FBQ0U7QUFDaEI7O0FBRTFCLElBQU1PLEtBQUssR0FBRyxXQUFNOztJQUNsQixJQUEwQk4sR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQk0sS0FBSyxHQUFjTixHQUFZLEdBQTFCLEVBQUVPLFFBQVEsR0FBSVAsR0FBWSxHQUFoQjtJQUV0QkMsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1osSUFBTU8sVUFBVTt1QkFBRyxtUkFBVztvQkFDckJDLElBQUk7Ozs7O21DQUFVSixnREFBUyxDQUFDLDRDQUE0QyxDQUFDOzs0QkFBdEUsSUFBSyxhQUFKSSxJQUFJLENBQWlFOzRCQUM1RUYsUUFBUSxDQUFDRSxJQUFJLENBQUMsQ0FBQzs7Ozs7O2FBQ2hCOzRCQUhLRCxVQUFVOzs7V0FHZjtRQUNEQSxVQUFVLEVBQUUsQ0FBQztLQUNkLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFFTkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFDTixLQUFLLENBQUMsQ0FBQztJQUU1QixxQkFDRSw4REFBQ0YsMERBQU07OzBCQUNMLDhEQUFDRCx5REFBSzswQkFBQyxXQUFTOzs7OztxQkFBUTswQkFDeEIsOERBQUNVLEtBQUc7MEJBQ0RQLEtBQUssQ0FBQ1EsR0FBRyxDQUFDQyxTQUFBQSxJQUFJLEVBQUk7b0JBQ2pCLHFCQUNFLDhEQUFDQyxJQUFJO3dCQUFDQyxJQUFJLEVBQUcsWUFBVTt3QkFBR0MsRUFBRSxFQUFFLFNBQVEsQ0FBVSxPQUFSSCxJQUFJLENBQUNJLEVBQUUsQ0FBRTtrQ0FDL0MsNEVBQUNDLEdBQUM7OzhDQUNBLDhEQUFDQyxJQUFFOzhDQUFFTixJQUFJLENBQUNPLEtBQUs7Ozs7O3lDQUFNOzhDQUNyQiw4REFBQ0MsR0FBQzs4Q0FBRVIsSUFBSTs7Ozs7eUNBQUs7Ozs7OztpQ0FDWDs7Ozs7NkJBQ0MsQ0FDUjtpQkFDRixDQUFDOzs7OztxQkFDRTs7Ozs7O2FBQ0MsQ0FDVjtDQUNGO0dBOUJLVCxLQUFLO0FBZ0NYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL2luZGV4LmpzPzNiMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL3RpdGxlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgcG9zdHMgPSAoKSA9PiB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAoKSA9PntcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJyk7XG4gICAgICBzZXRQb3N0cyhkYXRhKTtcbiAgICB9XG4gICAgZmV0Y2hQb3N0cygpO1xuICB9LFtdKTtcblxuICBjb25zb2xlLmxvZygncG9zdHM6Jyxwb3N0cyk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8VGl0bGU+UG9zdCBQYWdlPC9UaXRsZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiB7XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3RzL1tpZF1gfSBhcz17YC9wb3N0cy8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxoMz57cG9zdC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgIDxwPntwb3N0fTwvcD5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwb3N0c1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZiYXIiLCJUaXRsZSIsIkxheW91dCIsImF4aW9zIiwicG9zdHMiLCJzZXRQb3N0cyIsImZldGNoUG9zdHMiLCJkYXRhIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRpdiIsIm1hcCIsInBvc3QiLCJMaW5rIiwiaHJlZiIsImFzIiwiaWQiLCJhIiwiaDMiLCJ0aXRsZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n"));

/***/ })

});