/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/App.ts":
/*!***************************!*\
  !*** ./src/client/App.ts ***!
  \***************************/
/*! flagged exports */
/*! export App [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.App = void 0;\nvar AppComponent = /** @class */ (function () {\n    function AppComponent(content) {\n        this.content = content;\n    }\n    AppComponent.prototype.render = function () {\n        return \"\" + this.content;\n    };\n    return AppComponent;\n}());\nexports.App = {\n    component: AppComponent,\n};\n\n\n//# sourceURL=webpack://ivan/./src/client/App.ts?");

/***/ }),

/***/ "./src/client/Routes.ts":
/*!******************************!*\
  !*** ./src/client/Routes.ts ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Routes = void 0;\nvar App_1 = __webpack_require__(/*! ./App */ \"./src/client/App.ts\");\nvar pages_1 = __webpack_require__(/*! ./pages/ */ \"./src/client/pages/index.ts\");\nvar pages_2 = __webpack_require__(/*! ./pages/ */ \"./src/client/pages/index.ts\");\nexports.Routes = [\n    __assign(__assign({}, App_1.App), { routes: [\n            __assign(__assign({}, pages_1.Home), { path: '/', exact: true }),\n            __assign(__assign({}, pages_2.NotFound), { path: 'not-found' }),\n        ] }),\n];\n\n\n//# sourceURL=webpack://ivan/./src/client/Routes.ts?");

/***/ }),

/***/ "./src/client/components/Bio.ts":
/*!**************************************!*\
  !*** ./src/client/components/Bio.ts ***!
  \**************************************/
/*! flagged exports */
/*! export Bio [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Bio = void 0;\nvar BioComponent = /** @class */ (function () {\n    function BioComponent() {\n    }\n    BioComponent.prototype.render = function () {\n        return '<h2>Ivan Baena</h2>';\n    };\n    return BioComponent;\n}());\nexports.Bio = new BioComponent().render();\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Bio.ts?");

/***/ }),

/***/ "./src/client/components/Link.ts":
/*!***************************************!*\
  !*** ./src/client/components/Link.ts ***!
  \***************************************/
/*! flagged exports */
/*! export Link [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Link = void 0;\nvar utils_1 = __webpack_require__(/*! ../../utils/ */ \"./src/utils/index.ts\");\nvar params = {\n    attributes: true,\n    childList: true,\n    subtree: true,\n    characterData: true,\n};\nvar LinkComponent = /** @class */ (function () {\n    function LinkComponent(innerText, anchor) {\n        this.innerText = innerText;\n        this.anchor = anchor;\n        this.rendered = false;\n        this.didRender();\n        if (typeof window !== 'undefined') {\n            this.anchor = document.createElement('a');\n        }\n        this.addEvents = this.addEvents.bind(this);\n    }\n    LinkComponent.prototype.onClick = function (e) {\n        e.preventDefault();\n        var url = 'hello-world';\n        utils_1.pushUrl(url);\n    };\n    LinkComponent.prototype.didRender = function () {\n        var _this = this;\n        var observer = function () { return utils_1.observe('#link', params, _this.addEvents); };\n        utils_1.isWindow(observer);\n    };\n    LinkComponent.prototype.addEvents = function (target) {\n        var _this = this;\n        if (target) {\n            console.log('why', target);\n            target.onclick = function (e) { return _this.onClick(e); };\n        }\n    };\n    LinkComponent.prototype.createProps = function () {\n        if (this.anchor) {\n            this.anchor.setAttribute('to', '/notfound');\n            this.anchor.innerText = this.innerText;\n            this.anchor.href = '#';\n            this.anchor.id = 'link';\n        }\n    };\n    LinkComponent.prototype.render = function () {\n        if (typeof window !== 'undefined' && this.anchor) {\n            this.createProps();\n            return this.anchor.outerHTML;\n        }\n        else {\n            return '<h1>Skeleton</h1>';\n        }\n    };\n    return LinkComponent;\n}());\nexports.Link = new LinkComponent('Link', null).render();\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Link.ts?");

/***/ }),

/***/ "./src/client/pages/Home.ts":
/*!**********************************!*\
  !*** ./src/client/pages/Home.ts ***!
  \**********************************/
/*! flagged exports */
/*! export Home [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Home = void 0;\nvar Bio_1 = __webpack_require__(/*! ../components/Bio */ \"./src/client/components/Bio.ts\");\nvar Link_1 = __webpack_require__(/*! ../components/Link */ \"./src/client/components/Link.ts\");\nvar HomeComponent = /** @class */ (function () {\n    function HomeComponent() {\n    }\n    HomeComponent.prototype.render = function () {\n        return \"\\n      <div id='home-page'>\\n        <h1>Home Page</h1>\\n        \" + Bio_1.Bio + \"\\n        \" + Link_1.Link + \"\\n      </div>\\n    \";\n    };\n    return HomeComponent;\n}());\nexports.Home = {\n    component: HomeComponent,\n};\n\n\n//# sourceURL=webpack://ivan/./src/client/pages/Home.ts?");

/***/ }),

/***/ "./src/client/pages/NotFound.ts":
/*!**************************************!*\
  !*** ./src/client/pages/NotFound.ts ***!
  \**************************************/
/*! flagged exports */
/*! export NotFound [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.NotFound = void 0;\nvar NotFoundComponent = /** @class */ (function () {\n    function NotFoundComponent() {\n    }\n    NotFoundComponent.prototype.render = function () {\n        return \"\\n      <div id='not-found'>\\n        <h1>We're sorry!</h1>\\n      </div>\\n    \";\n    };\n    return NotFoundComponent;\n}());\nexports.NotFound = {\n    component: NotFoundComponent,\n};\n\n\n//# sourceURL=webpack://ivan/./src/client/pages/NotFound.ts?");

/***/ }),

/***/ "./src/client/pages/index.ts":
/*!***********************************!*\
  !*** ./src/client/pages/index.ts ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./Home */ \"./src/client/pages/Home.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./NotFound */ \"./src/client/pages/NotFound.ts\"), exports);\n\n\n//# sourceURL=webpack://ivan/./src/client/pages/index.ts?");

/***/ }),

/***/ "./src/helpers/Html.ts":
/*!*****************************!*\
  !*** ./src/helpers/Html.ts ***!
  \*****************************/
/*! flagged exports */
/*! export Html [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Html = void 0;\nvar Html = function (route) { return \"\\n    <html lang='en-us'>\\n      <head>\\n        <link rel='stylesheet' href='/main.css' />\\n      </head>\\n      <body>\\n        <div id='root'>\\n        \" + route + \"\\n        </div>\\n        <script src='/bundle.js'></script>\\n      </body>\\n    </html>\"; };\nexports.Html = Html;\n\n\n//# sourceURL=webpack://ivan/./src/helpers/Html.ts?");

/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./renderer */ \"./src/helpers/renderer.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./renderRoutes */ \"./src/helpers/renderRoutes.ts\"), exports);\n\n\n//# sourceURL=webpack://ivan/./src/helpers/index.ts?");

/***/ }),

/***/ "./src/helpers/renderRoutes.ts":
/*!*************************************!*\
  !*** ./src/helpers/renderRoutes.ts ***!
  \*************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export onUrlChange [provided] [no usage info] [missing usage info prevents renaming] */
/*! export renderRoutes [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.onUrlChange = exports.renderRoutes = void 0;\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\nvar activeRoute = function (routeArr, path) {\n    return routeArr[0].routes.filter(function (route) { return route.path === path; });\n};\nvar notFoundRoute = function (routeArr, path) {\n    return routeArr[0].routes.filter(function (route) { return route.path === 'not-found'; });\n};\nvar renderRoutes = function (routesArray, req) {\n    var path;\n    if (typeof window !== 'undefined') {\n        path = window.location.pathname;\n        console.log('path', path);\n    }\n    else {\n        path = req ? req.originalUrl : '/';\n    }\n    var route = activeRoute(routesArray, path);\n    if (!route.length) {\n        route = notFoundRoute(routesArray, path);\n    }\n    var component = new route[0].component();\n    return component.render();\n};\nexports.renderRoutes = renderRoutes;\nvar onUrlChange = function (cb) {\n    window.addEventListener('popstate', function () {\n        utils_1.debounce(cb, 10);\n    });\n    cb();\n};\nexports.onUrlChange = onUrlChange;\n\n\n//# sourceURL=webpack://ivan/./src/helpers/renderRoutes.ts?");

/***/ }),

/***/ "./src/helpers/renderer.ts":
/*!*********************************!*\
  !*** ./src/helpers/renderer.ts ***!
  \*********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export renderer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderer = void 0;\nvar Html_1 = __webpack_require__(/*! ./Html */ \"./src/helpers/Html.ts\");\nvar _1 = __webpack_require__(/*! ./ */ \"./src/helpers/index.ts\");\nvar Routes_1 = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.ts\");\nvar renderer = function (req, res) {\n    // Generate the html on the server\n    var html = Html_1.Html(_1.renderRoutes(Routes_1.Routes, req));\n    res.status(200);\n    res.send(\"<!doctype html>\\n\" + html);\n    res.end();\n};\nexports.renderer = renderer;\n\n\n//# sourceURL=webpack://ivan/./src/helpers/renderer.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar index_1 = __webpack_require__(/*! ./helpers/index */ \"./src/helpers/index.ts\");\nvar app = express_1.default();\napp.use(express_1.default.static('dist'));\n// Page Renderer\napp.use(function (req, res) {\n    index_1.renderer(req, res);\n});\napp.listen(3000, function () {\n    console.log('ssr is ready on PORT: 3000');\n});\n\n\n//# sourceURL=webpack://ivan/./src/index.ts?");

/***/ }),

/***/ "./src/utils/debounce.ts":
/*!*******************************!*\
  !*** ./src/utils/debounce.ts ***!
  \*******************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export debounce [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.debounce = void 0;\nvar debounce = function (func, delay) {\n    var debounceTimer;\n    return (function () {\n        clearTimeout(debounceTimer);\n        debounceTimer = setTimeout(function () { return func(); }, delay);\n    })();\n};\nexports.debounce = debounce;\n\n\n//# sourceURL=webpack://ivan/./src/utils/debounce.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/*! CommonJS bailout: this is used directly at 9:20-24 */
/*! CommonJS bailout: exports is used directly at 13:36-43 */
/*! CommonJS bailout: exports is used directly at 14:34-41 */
/*! CommonJS bailout: exports is used directly at 15:36-43 */
/*! CommonJS bailout: exports is used directly at 16:36-43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./debounce */ \"./src/utils/debounce.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./router */ \"./src/utils/router.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./observer */ \"./src/utils/observer.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./isWindow */ \"./src/utils/isWindow.ts\"), exports);\n\n\n//# sourceURL=webpack://ivan/./src/utils/index.ts?");

/***/ }),

/***/ "./src/utils/isWindow.ts":
/*!*******************************!*\
  !*** ./src/utils/isWindow.ts ***!
  \*******************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isWindow [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isWindow = void 0;\nvar isWindow = function (cb) {\n    var windowReady = setInterval(function () {\n        if (typeof window !== 'undefined') {\n            cb();\n            clearInterval(windowReady);\n        }\n    }, 10);\n};\nexports.isWindow = isWindow;\n\n\n//# sourceURL=webpack://ivan/./src/utils/isWindow.ts?");

/***/ }),

/***/ "./src/utils/observer.ts":
/*!*******************************!*\
  !*** ./src/utils/observer.ts ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:16-20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.observe = void 0;\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\nvar observe = function (target, params, initProps) {\n    // Select the node that will be observed for mutations\n    var targetNode = document.querySelector('#root');\n    var link = document.querySelector('#link');\n    // If no target exit\n    if (!targetNode)\n        return;\n    // initlize element props\n    initProps(link);\n    // Options for the observer (which mutations to observe)\n    var config = __assign({}, params);\n    // Callback function to execute when mutations are observed\n    var callback = function (mutationsList, observer) {\n        // Use traditional 'for loops' for IE 11\n        for (var _i = 0, mutationsList_1 = mutationsList; _i < mutationsList_1.length; _i++) {\n            var mutation = mutationsList_1[_i];\n            console.log(mutation);\n            if (mutation.type === 'childList') {\n                link = document.querySelector('#link');\n                console.log('A child node has been added or removed.', link);\n                if (link) {\n                    utils_1.debounce(function () { return initProps(link); }, 1000);\n                }\n            }\n            else if (mutation.type === 'attributes') {\n                console.log('The ' + mutation.attributeName + ' attribute was modified.');\n            }\n        }\n    };\n    // Create an observer instance linked to the callback function\n    var observer = new MutationObserver(callback);\n    // Start observing the target node for configured mutations\n    observer.observe(targetNode, config);\n    // // Later, you can stop observing\n    // observer.disconnect();\n};\nexports.observe = observe;\n\n\n//# sourceURL=webpack://ivan/./src/utils/observer.ts?");

/***/ }),

/***/ "./src/utils/router.ts":
/*!*****************************!*\
  !*** ./src/utils/router.ts ***!
  \*****************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export pushUrl [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.pushUrl = void 0;\nvar pushUrl = function (href) {\n    history.pushState({}, '', href);\n    window.dispatchEvent(new Event('popstate'));\n};\nexports.pushUrl = pushUrl;\n\n\n//# sourceURL=webpack://ivan/./src/utils/router.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://ivan/external_%22express%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.ts");
/******/ })()
;