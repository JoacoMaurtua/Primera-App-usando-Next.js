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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/title */ \"./pages/components/title.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\nvar posts = function(param) {\n    var posts = param.posts;\n    //***ESTE METODO ES client Side Generation(CSG)***\n    /* const [posts, setPosts] = useState([]);\n\n  useEffect(()=>{\n    const fetchPosts = async () =>{\n      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');\n      setPosts(data);\n    }\n    fetchPosts();\n  },[]);\n\n  console.log('posts:',posts); */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    className: \"jsx-d92a8a4a3c98b59d\",\n                    children: \"Landing page de posts\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: \"Post Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-d92a8a4a3c98b59d\" + \" \" + \"grid\",\n                children: posts.map(function(post) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/posts/[id]\",\n                        as: \"/posts/\".concat(post.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"jsx-d92a8a4a3c98b59d\" + \" \" + \"card\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"jsx-d92a8a4a3c98b59d\",\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-d92a8a4a3c98b59d\",\n                                    children: post.body\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                            lineNumber: 32,\n                            columnNumber: 15\n                        }, _this)\n                    }, post.id, false, {\n                        fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"d92a8a4a3c98b59d\",\n                children: \".grid.jsx-d92a8a4a3c98b59d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:2rem}.card.jsx-d92a8a4a3c98b59d{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;color:black;text-decoration:none;border:2px solid#eaeaea;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-transition:color;-moz-transition:color;-o-transition:color;transition:color}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (posts);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQWdEO0FBQ1I7QUFFWDtBQUNBO0FBRTdCLElBQU1NLEtBQUssR0FBRyxnQkFBYTtRQUFYQSxLQUFLLFNBQUxBLEtBQUs7SUFFbkIsa0RBQWtEO0lBQ2xEOzs7Ozs7Ozs7O2lDQVUrQixDQUUvQixxQkFDRTs7MEJBQ0UsOERBQUNELGtEQUFJOzBCQUNILDRFQUFDRSxPQUFLOzs4QkFBQyx1QkFBcUI7Ozs7O3lCQUFROzs7OztxQkFDL0I7MEJBQ1AsOERBQUNKLHlEQUFLOzBCQUFDLFdBQVM7Ozs7O3FCQUFROzBCQUN4Qiw4REFBQ0ssS0FBRzswREFBYSxNQUFNOzBCQUNwQkYsS0FBSyxDQUFDRyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO29CQUNuQixxQkFDRSw4REFBQ04sa0RBQUk7d0JBQUNPLElBQUksRUFBRyxhQUFXO3dCQUFHQyxFQUFFLEVBQUUsU0FBUSxDQUFVLE9BQVJGLElBQUksQ0FBQ0csRUFBRSxDQUFFO2tDQUNoRCw0RUFBQ0MsR0FBQztzRUFBVyxNQUFNOzs4Q0FDakIsOERBQUNDLElBQUU7OzhDQUFFTCxJQUFJLENBQUNILEtBQUs7Ozs7O3lDQUFNOzhDQUNyQiw4REFBQ1MsR0FBQzs7OENBQUVOLElBQUksQ0FBQ08sSUFBSTs7Ozs7eUNBQUs7Ozs7OztpQ0FDaEI7dUJBSm1EUCxJQUFJLENBQUNHLEVBQUU7Ozs7NkJBS3pELENBQ1I7aUJBQ0YsQ0FBQzs7Ozs7cUJBQ0U7Ozs7OztvQkFzQkwsQ0FDSjtDQUNGOztBQUVELCtEQUFlUCxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvaW5kZXguanM/M2IxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL3RpdGxlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3QgcG9zdHMgPSAoe3Bvc3RzfSkgPT4ge1xuXG4gIC8vKioqRVNURSBNRVRPRE8gRVMgY2xpZW50IFNpZGUgR2VuZXJhdGlvbihDU0cpKioqXG4gIC8qIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAoKSA9PntcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJyk7XG4gICAgICBzZXRQb3N0cyhkYXRhKTtcbiAgICB9XG4gICAgZmV0Y2hQb3N0cygpO1xuICB9LFtdKTtcblxuICBjb25zb2xlLmxvZygncG9zdHM6Jyxwb3N0cyk7ICovXG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkxhbmRpbmcgcGFnZSBkZSBwb3N0czwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGl0bGU+UG9zdCBQYWdlPC9UaXRsZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2dyaWQnPlxuICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy9baWRdYH0gYXM9e2AvcG9zdHMvJHtwb3N0LmlkfWB9IGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICAgICAgICAgICAgPGgzPntwb3N0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5ncmlke1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgICAgZmxleC1iYXNpczogNDUlO1xuICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciBcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0cztcblxuLy8qKipFU1RFIEVTIEVMIE1FVE9ETyBQQVJBIEhBQ0VSICBTZXJ2ZXIgU2lkZSBHZW5lcmF0aW9uKFNTRykqKipcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpeyAvL0VzdGEgZnVuY2lvbiBjb3JyZSBkZWwgbGFkbyBkZWwgc2Vydmlkb3IsIG5vIGRlbCBjbGllbnRlKGJyb3dzZXIpXG4gIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJyk7XG4gIGNvbnN0IHBvc3RzID0gZGF0YTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczp7XG4gICAgICBwb3N0c1xuICAgIH1cbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRpdGxlIiwiTGluayIsIkhlYWQiLCJwb3N0cyIsInRpdGxlIiwiZGl2IiwibWFwIiwicG9zdCIsImhyZWYiLCJhcyIsImlkIiwiYSIsImgzIiwicCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n"));

/***/ })

});