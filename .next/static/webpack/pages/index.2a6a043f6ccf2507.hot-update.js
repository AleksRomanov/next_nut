"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MainLayout */ \"./components/MainLayout.js\");\n/* harmony import */ var _services_useAppSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/useAppSelector */ \"./services/useAppSelector.ts\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/aleksromanov/Aleks_Dev/WebDevProjects/2022/garmony_of_health/pages/index.js\";\n\n\n\n\n // import React, {useEffect, useState} from \"react\";\n\n\nvar StyledCard = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_4__.Card).withConfig({\n  displayName: \"pages__StyledCard\",\n  componentId: \"sc-du36m6-0\"\n})([\"align-items:center;.ant-card-body{background-color:darkred;}\"]);\n_c = StyledCard;\nvar __N_SSP = true;\nfunction Index(_ref) {\n  var data = _ref.data;\n\n  // console.log(data);\n  // const data = useAppSelector((state) => state.offersReducer.pickedOffers);\n  // const [bookList, setBookList] = useState([]);\n  //\n  // useEffect(() => {\n  //     async function load() {\n  //         const response = await fetch('http://localhost:4200/bookList')\n  //         const json = await response.json()\n  //         setBookList(json)\n  //     }\n  //     load()\n  // }, [])\n  function renderBook(book) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Col, {\n      span: 8,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledCard, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Image, {\n          height: 200,\n          src: book.img\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this)\n    }, (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.nanoid)(), false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_MainLayout__WEBPACK_IMPORTED_MODULE_0__.MainLayout, {\n    title: 'Page Index',\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n      style: {\n        display: \"flex\",\n        justifyContent: \"center\"\n      },\n      children: \"List of Books\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Row, {\n        gutter: 16,\n        children: data.bookList.map(function (item) {\n          return renderBook(item);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 9\n  }, this);\n}\n_c2 = Index;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledCard\");\n$RefreshReg$(_c2, \"Index\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7Q0FFQTs7O0FBRUEsSUFBTVEsVUFBVSxHQUFHRCw2REFBTSxDQUFDTCxzQ0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLG9FQUFoQjtLQUFNTTs7QUFPUyxTQUFTQyxLQUFULE9BQXVCO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPOztBQUNsQztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxXQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUN0Qix3QkFDSSw4REFBQyxxQ0FBRDtBQUFvQixVQUFJLEVBQUUsQ0FBMUI7QUFBQSw2QkFJSSw4REFBQyxVQUFEO0FBQUEsK0JBQ0ksOERBQUMsdUNBQUQ7QUFBTyxnQkFBTSxFQUFFLEdBQWY7QUFDTyxhQUFHLEVBQUVBLElBQUksQ0FBQ0M7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSixPQUFVUCx3REFBTSxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFjSDs7QUFFRCxzQkFDSSw4REFBQyw4REFBRDtBQUFZLFNBQUssRUFBRSxZQUFuQjtBQUFBLDRCQUNJO0FBQUksV0FBSyxFQUFFO0FBQUNRLFFBQUFBLE9BQU8sRUFBRSxNQUFWO0FBQWtCQyxRQUFBQSxjQUFjLEVBQUU7QUFBbEMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSw2QkFDSSw4REFBQyxxQ0FBRDtBQUFLLGNBQU0sRUFBRSxFQUFiO0FBQUEsa0JBRUtMLElBQUksQ0FBQ00sUUFBTCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLElBQUQ7QUFBQSxpQkFBVVAsVUFBVSxDQUFDTyxJQUFELENBQXBCO0FBQUEsU0FBbEI7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7TUE1Q3VCVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWFpbkxheW91dH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpbkxheW91dFwiO1xuaW1wb3J0IHtyZWR1eFdyYXBwZXJ9IGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IHtnZXREYXRhLCBnZXRSdW5uaW5nT3BlcmF0aW9uUHJvbWlzZXN9IGZyb20gXCIuLi9zdG9yZS9hcGktcmVkdWNlclwiO1xuaW1wb3J0IHt1c2VBcHBTZWxlY3Rvcn0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZUFwcFNlbGVjdG9yXCI7XG5pbXBvcnQge0NhcmQsIENvbCwgSW1hZ2UsIFJvd30gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7bmFub2lkfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbi8vIGltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTdHlsZWRDYXJkID0gc3R5bGVkKENhcmQpYFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5hbnQtY2FyZC1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkOyAgXG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHtkYXRhfSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vIGNvbnN0IGRhdGEgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm9mZmVyc1JlZHVjZXIucGlja2VkT2ZmZXJzKTtcblxuICAgIC8vIGNvbnN0IFtib29rTGlzdCwgc2V0Qm9va0xpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIC8vXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9ib29rTGlzdCcpXG4gICAgLy8gICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgLy8gICAgICAgICBzZXRCb29rTGlzdChqc29uKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGxvYWQoKVxuICAgIC8vIH0sIFtdKVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyQm9vayhib29rKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29sIGtleT17bmFub2lkKCl9IHNwYW49ezh9PlxuXG4gICAgICAgICAgICAgICAgey8qPENhcmQgdGl0bGU9e2Jvb2sudGl0bGV9IGJvcmRlcmVkPXtmYWxzZX0+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIDxkaXY+Ki99XG4gICAgICAgICAgICAgICAgPFN0eWxlZENhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Ym9vay5pbWd9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkPlxuICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgICAgIHsvKjwvQ2FyZD4qL31cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNYWluTGF5b3V0IHRpdGxlPXsnUGFnZSBJbmRleCd9PlxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwifX0+TGlzdCBvZiBCb29rczwvaDE+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNn0+XG4gICAgICAgICAgICAgICAgICAgIHsvKjx1bD4qL31cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuYm9va0xpc3QubWFwKChpdGVtKSA9PiByZW5kZXJCb29rKGl0ZW0pKX1cbiAgICAgICAgICAgICAgICAgICAgey8qPC91bD4qL31cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01haW5MYXlvdXQ+XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gcmVkdXhXcmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcbiAgICAoc3RvcmUpID0+IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGdldERhdGEuaW5pdGlhdGUoKSk7XG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbChnZXRSdW5uaW5nT3BlcmF0aW9uUHJvbWlzZXMoKSkudGhlbihcbiAgICAgICAgICAgIHJlc3VsdCA9PiByZXN1bHQsXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhcIlJlamVjdGVkXCIpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7cHJvcHM6IHtkYXRhOiByZXNbMF0uZGF0YX19O1xuICAgIH1cbik7XG5cbiJdLCJuYW1lcyI6WyJNYWluTGF5b3V0IiwidXNlQXBwU2VsZWN0b3IiLCJDYXJkIiwiQ29sIiwiSW1hZ2UiLCJSb3ciLCJuYW5vaWQiLCJzdHlsZWQiLCJTdHlsZWRDYXJkIiwiSW5kZXgiLCJkYXRhIiwicmVuZGVyQm9vayIsImJvb2siLCJpbWciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJib29rTGlzdCIsIm1hcCIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});