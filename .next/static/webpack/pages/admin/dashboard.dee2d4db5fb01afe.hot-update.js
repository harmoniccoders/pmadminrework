"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/dashboard",{

/***/ "./src/lib/components/Utilities/MiniCards.tsx":
/*!****************************************************!*\
  !*** ./src/lib/components/Utilities/MiniCards.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\nfunction MiniCards(param) {\n    var label = param.label, increase = param.increase, value = param.value;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        bgColor: \"white\",\n        fontWeight: \"semibold\",\n        borderRadius: \"6px\",\n        boxShadow: \"0 2px 2px 0 rgba(0,0,0,0.12)\",\n        h: \"auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                p: \"1rem\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    fontSize: \"1rem\",\n                    children: label\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\brain\\\\OneDrive\\\\Desktop\\\\Vsc Projects\\\\pmadminrework\\\\src\\\\lib\\\\components\\\\Utilities\\\\MiniCards.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\brain\\\\OneDrive\\\\Desktop\\\\Vsc Projects\\\\pmadminrework\\\\src\\\\lib\\\\components\\\\Utilities\\\\MiniCards.tsx\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {\n                color: \"gray.50\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\brain\\\\OneDrive\\\\Desktop\\\\Vsc Projects\\\\pmadminrework\\\\src\\\\lib\\\\components\\\\Utilities\\\\MiniCards.tsx\",\n                lineNumber: 21,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                fontSize: \"30px\",\n                p: \"1rem\",\n                children: value\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\brain\\\\OneDrive\\\\Desktop\\\\Vsc Projects\\\\pmadminrework\\\\src\\\\lib\\\\components\\\\Utilities\\\\MiniCards.tsx\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\brain\\\\OneDrive\\\\Desktop\\\\Vsc Projects\\\\pmadminrework\\\\src\\\\lib\\\\components\\\\Utilities\\\\MiniCards.tsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, this);\n}\n_c = MiniCards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiniCards);\nvar _c;\n$RefreshReg$(_c, \"MiniCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2NvbXBvbmVudHMvVXRpbGl0aWVzL01pbmlDYXJkcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQTREO0FBTzVELFNBQVNJLFNBQVMsQ0FBQyxLQUFvQyxFQUFFO1FBQXBDQyxLQUFLLEdBQVAsS0FBb0MsQ0FBbENBLEtBQUssRUFBRUMsUUFBUSxHQUFqQixLQUFvQyxDQUEzQkEsUUFBUSxFQUFFQyxLQUFLLEdBQXhCLEtBQW9DLENBQWpCQSxLQUFLO0lBQzFDLHFCQUNDLDhEQUFDUCxpREFBRztRQUNIUSxPQUFPLEVBQUMsT0FBTztRQUNmQyxVQUFVLEVBQUMsVUFBVTtRQUNyQkMsWUFBWSxFQUFDLEtBQUs7UUFDbEJDLFNBQVMsRUFBQyw4QkFBOEI7UUFDeENDLENBQUMsRUFBQyxNQUFNOzswQkFHUiw4REFBQ1Ysa0RBQUk7Z0JBQUNXLGNBQWMsRUFBQyxlQUFlO2dCQUFDQyxVQUFVLEVBQUMsUUFBUTtnQkFBQ0MsQ0FBQyxFQUFDLE1BQU07MEJBQ2hFLDRFQUFDWixrREFBSTtvQkFBQ2EsUUFBUSxFQUFDLE1BQU07OEJBQUVYLEtBQUs7Ozs7O3dCQUFROzs7OztvQkFDOUI7MEJBQ1AsOERBQUNKLHFEQUFPO2dCQUFDZ0IsS0FBSyxFQUFDLFNBQVM7Ozs7O29CQUFHOzBCQUMzQiw4REFBQ2Qsa0RBQUk7Z0JBQUNhLFFBQVEsRUFBQyxNQUFNO2dCQUFDRCxDQUFDLEVBQUMsTUFBTTswQkFDNUJSLEtBQUs7Ozs7O29CQUNBOzs7Ozs7WUFDRixDQUNMO0NBQ0Y7QUFuQlFILEtBQUFBLFNBQVM7QUFxQmxCLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9jb21wb25lbnRzL1V0aWxpdGllcy9NaW5pQ2FyZHMudHN4P2FmNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBEaXZpZGVyLCBGbGV4LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgY2FyZFR5cGUge1xyXG5cdGxhYmVsOiBzdHJpbmc7XHJcblx0aW5jcmVhc2U/OiBzdHJpbmc7XHJcblx0dmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxufVxyXG5mdW5jdGlvbiBNaW5pQ2FyZHMoeyBsYWJlbCwgaW5jcmVhc2UsIHZhbHVlIH06IGNhcmRUeXBlKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3hcclxuXHRcdFx0YmdDb2xvcj1cIndoaXRlXCJcclxuXHRcdFx0Zm9udFdlaWdodD1cInNlbWlib2xkXCJcclxuXHRcdFx0Ym9yZGVyUmFkaXVzPVwiNnB4XCJcclxuXHRcdFx0Ym94U2hhZG93PVwiMCAycHggMnB4IDAgcmdiYSgwLDAsMCwwLjEyKVwiXHJcblx0XHRcdGg9XCJhdXRvXCJcclxuXHRcdFx0Ly8gcHk9XCIxcmVtXCJcclxuXHRcdD5cclxuXHRcdFx0PEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHA9XCIxcmVtXCI+XHJcblx0XHRcdFx0PFRleHQgZm9udFNpemU9XCIxcmVtXCI+e2xhYmVsfTwvVGV4dD5cclxuXHRcdFx0PC9GbGV4PlxyXG5cdFx0XHQ8RGl2aWRlciBjb2xvcj1cImdyYXkuNTBcIiAvPlxyXG5cdFx0XHQ8VGV4dCBmb250U2l6ZT1cIjMwcHhcIiBwPVwiMXJlbVwiPlxyXG5cdFx0XHRcdHt2YWx1ZX1cclxuXHRcdFx0PC9UZXh0PlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWluaUNhcmRzO1xyXG4iXSwibmFtZXMiOlsiQm94IiwiRGl2aWRlciIsIkZsZXgiLCJUZXh0IiwiTWluaUNhcmRzIiwibGFiZWwiLCJpbmNyZWFzZSIsInZhbHVlIiwiYmdDb2xvciIsImZvbnRXZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJoIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicCIsImZvbnRTaXplIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/components/Utilities/MiniCards.tsx\n");

/***/ })

});