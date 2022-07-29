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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/title */ \"./pages/components/title.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./pages/components/layout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\nvar posts = function() {\n    //***ESTE METODO ES client Side Generation(CSG)***\n    /* const [posts, setPosts] = useState([]);\n\n  useEffect(()=>{\n    const fetchPosts = async () =>{\n      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');\n      setPosts(data);\n    }\n    fetchPosts();\n  },[]);\n\n  console.log('posts:',posts); */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: \"Post Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: posts.map(function(post) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/posts/[id]\",\n                        as: \"/posts/\".concat(post.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: post.body\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, _this)\n                    }, post.id, false, {\n                        fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Joaquin Maurtua\\\\Desktop\\\\DEVELOPER\\\\primer-proyecto-nextjs\\\\pages\\\\posts\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (posts); //***ESTE ES EL METODO PARA HACER  Server Side Generation(SSG)***\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFnRDtBQUNSO0FBQ0U7QUFDaEI7QUFDRztBQUU3QixJQUFNTyxLQUFLLEdBQUcsV0FBTTtJQUVsQixrREFBa0Q7SUFDbEQ7Ozs7Ozs7Ozs7aUNBVStCLENBRS9CLHFCQUNFLDhEQUFDSCwwREFBTTs7MEJBQ0wsOERBQUNELHlEQUFLOzBCQUFDLFdBQVM7Ozs7O3FCQUFROzBCQUN4Qiw4REFBQ0ssS0FBRzswQkFDREQsS0FBSyxDQUFDRSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO29CQUNuQixxQkFDRSw4REFBQ0osa0RBQUk7d0JBQUNLLElBQUksRUFBRyxhQUFXO3dCQUFHQyxFQUFFLEVBQUUsU0FBUSxDQUFVLE9BQVJGLElBQUksQ0FBQ0csRUFBRSxDQUFFO2tDQUNoRCw0RUFBQ0MsR0FBQzs7OENBQ0EsOERBQUNDLElBQUU7OENBQUVMLElBQUksQ0FBQ00sS0FBSzs7Ozs7eUNBQU07OENBQ3JCLDhEQUFDQyxHQUFDOzhDQUFFUCxJQUFJLENBQUNRLElBQUk7Ozs7O3lDQUFLOzs7Ozs7aUNBQ2hCO3VCQUptRFIsSUFBSSxDQUFDRyxFQUFFOzs7OzZCQUt6RCxDQUNSO2lCQUNGLENBQUM7Ozs7O3FCQUNFOzs7Ozs7YUFDQyxDQUNWO0NBQ0Y7QUFFRCwrREFBZU4sS0FBSyxFQUFDLENBRXJCLGlFQUFpRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9pbmRleC5qcz8zYjE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGUnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgcG9zdHMgPSAoKSA9PiB7XG5cbiAgLy8qKipFU1RFIE1FVE9ETyBFUyBjbGllbnQgU2lkZSBHZW5lcmF0aW9uKENTRykqKipcbiAgLyogY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+e1xuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKTtcbiAgICAgIHNldFBvc3RzKGRhdGEpO1xuICAgIH1cbiAgICBmZXRjaFBvc3RzKCk7XG4gIH0sW10pO1xuXG4gIGNvbnNvbGUubG9nKCdwb3N0czonLHBvc3RzKTsgKi9cbiAgXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxUaXRsZT5Qb3N0IFBhZ2U8L1RpdGxlPlxuICAgICAgPGRpdj5cbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvW2lkXWB9IGFzPXtgL3Bvc3RzLyR7cG9zdC5pZH1gfSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8aDM+e3Bvc3QudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cD57cG9zdC5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdHM7XG5cbi8vKioqRVNURSBFUyBFTCBNRVRPRE8gUEFSQSBIQUNFUiAgU2VydmVyIFNpZGUgR2VuZXJhdGlvbihTU0cpKioqXG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUaXRsZSIsIkxheW91dCIsImF4aW9zIiwiTGluayIsInBvc3RzIiwiZGl2IiwibWFwIiwicG9zdCIsImhyZWYiLCJhcyIsImlkIiwiYSIsImgzIiwidGl0bGUiLCJwIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n"));

/***/ })

});