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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/title */ \"./pages/components/title.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./pages/components/layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\n\n\n\n\n\n\nvar posts = function(param) {\n    var posts = param.posts;\n    //***ESTE METODO ES client Side Generation(CSG)***\n    /* const [posts, setPosts] = useState([]);\n\n  useEffect(()=>{\n    const fetchPosts = async () =>{\n      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');\n      setPosts(data);\n    }\n    fetchPosts();\n  },[]);\n\n  console.log('posts:',posts); */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    className: \"jsx-495437e0eba26f40\",\n                    children: \"Landing page de posts\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: \"Post Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-495437e0eba26f40\" + \" \" + \"grid\",\n                children: posts.map(function(post) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/posts/[id]\",\n                        as: \"/posts/\".concat(post.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"jsx-495437e0eba26f40\" + \" \" + \"card\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"jsx-495437e0eba26f40\",\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-495437e0eba26f40\",\n                                    children: post.body\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, _this)\n                    }, post.id, false, {\n                        fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"495437e0eba26f40\",\n                children: \".grid.jsx-495437e0eba26f40{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (posts);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUFnRDtBQUNSO0FBQ0U7QUFFYjtBQUNBO0FBRTdCLElBQU1PLEtBQUssR0FBRyxnQkFBYTtRQUFYQSxLQUFLLFNBQUxBLEtBQUs7SUFFbkIsa0RBQWtEO0lBQ2xEOzs7Ozs7Ozs7O2lDQVUrQixDQUUvQixxQkFDRTs7MEJBQ0UsOERBQUNELGtEQUFJOzBCQUNILDRFQUFDRSxPQUFLOzs4QkFBQyx1QkFBcUI7Ozs7O3lCQUFROzs7OztxQkFDL0I7MEJBQ1AsOERBQUNMLHlEQUFLOzBCQUFDLFdBQVM7Ozs7O3FCQUFROzBCQUN4Qiw4REFBQ00sS0FBRzswREFBYSxNQUFNOzBCQUNwQkYsS0FBSyxDQUFDRyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO29CQUNuQixxQkFDRSw4REFBQ04sa0RBQUk7d0JBQUNPLElBQUksRUFBRyxhQUFXO3dCQUFHQyxFQUFFLEVBQUUsU0FBUSxDQUFVLE9BQVJGLElBQUksQ0FBQ0csRUFBRSxDQUFFO2tDQUNoRCw0RUFBQ0MsR0FBQztzRUFBVyxNQUFNOzs4Q0FDakIsOERBQUNDLElBQUU7OzhDQUFFTCxJQUFJLENBQUNILEtBQUs7Ozs7O3lDQUFNOzhDQUNyQiw4REFBQ1MsR0FBQzs7OENBQUVOLElBQUksQ0FBQ08sSUFBSTs7Ozs7eUNBQUs7Ozs7OztpQ0FDaEI7dUJBSm1EUCxJQUFJLENBQUNHLEVBQUU7Ozs7NkJBS3pELENBQ1I7aUJBQ0YsQ0FBQzs7Ozs7cUJBQ0U7Ozs7OztvQkFXTCxDQUNKO0NBQ0Y7O0FBRUQsK0RBQWVQLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9pbmRleC5qcz8zYjE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGUnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IHBvc3RzID0gKHtwb3N0c30pID0+IHtcblxuICAvLyoqKkVTVEUgTUVUT0RPIEVTIGNsaWVudCBTaWRlIEdlbmVyYXRpb24oQ1NHKSoqKlxuICAvKiBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCkgPT57XG4gICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpO1xuICAgICAgc2V0UG9zdHMoZGF0YSk7XG4gICAgfVxuICAgIGZldGNoUG9zdHMoKTtcbiAgfSxbXSk7XG5cbiAgY29uc29sZS5sb2coJ3Bvc3RzOicscG9zdHMpOyAqL1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5MYW5kaW5nIHBhZ2UgZGUgcG9zdHM8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRpdGxlPlBvc3QgUGFnZTwvVGl0bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdncmlkJz5cbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvW2lkXWB9IGFzPXtgL3Bvc3RzLyR7cG9zdC5pZH1gfSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgICAgICAgICAgIDxoMz57cG9zdC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgIDxwPntwb3N0LmJvZHl9PC9wPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuZ3JpZHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogXG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdHM7XG5cbi8vKioqRVNURSBFUyBFTCBNRVRPRE8gUEFSQSBIQUNFUiAgU2VydmVyIFNpZGUgR2VuZXJhdGlvbihTU0cpKioqXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXsgLy9Fc3RhIGZ1bmNpb24gY29ycmUgZGVsIGxhZG8gZGVsIHNlcnZpZG9yLCBubyBkZWwgY2xpZW50ZShicm93c2VyKVxuICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpO1xuICBjb25zdCBwb3N0cyA9IGRhdGE7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6e1xuICAgICAgcG9zdHNcbiAgICB9XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUaXRsZSIsIkxheW91dCIsIkxpbmsiLCJIZWFkIiwicG9zdHMiLCJ0aXRsZSIsImRpdiIsIm1hcCIsInBvc3QiLCJocmVmIiwiYXMiLCJpZCIsImEiLCJoMyIsInAiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n"));

/***/ })

});