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
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.App = void 0;\nvar Header_1 = __webpack_require__(/*! ./components/Header */ \"./src/client/components/Header/index.ts\");\nvar Header = new Header_1.Header().render();\nvar AppComponent = /** @class */ (function () {\n    function AppComponent(content) {\n        this.content = content;\n    }\n    AppComponent.prototype.render = function () {\n        return \"\\n      <div class=\\\"grid container appspace\\\">\\n        \" + Header + \"\\n        \" + this.content + \"\\n      </div>\";\n    };\n    return AppComponent;\n}());\nexports.App = {\n    component: AppComponent,\n};\n\n\n//# sourceURL=webpack://ivan/./src/client/App.ts?");

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

/***/ "./src/client/components/Grid/Container.css.ts":
/*!*****************************************************!*\
  !*** ./src/client/components/Grid/Container.css.ts ***!
  \*****************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export styles [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.styles = void 0;\nexports.styles = [\n    \".grid.container {\\n    display: grid;\\n    }\\n  \",\n    \".inline-grid.container {\\n    display: inline-grid;\\n    }\\n  \",\n];\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Grid/Container.css.ts?");

/***/ }),

/***/ "./src/client/components/Grid/Container.ts":
/*!*************************************************!*\
  !*** ./src/client/components/Grid/Container.ts ***!
  \*************************************************/
/*! flagged exports */
/*! export Container [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Container = void 0;\nvar sheet_1 = __webpack_require__(/*! ../../sheet */ \"./src/client/sheet.ts\");\nvar Container_css_1 = __webpack_require__(/*! ./Container.css */ \"./src/client/components/Grid/Container.css.ts\");\nvar helpers_1 = __webpack_require__(/*! ./helpers/ */ \"./src/client/components/Grid/helpers/index.ts\");\nsheet_1.insertRule(sheet_1.sheet, Container_css_1.styles);\nvar Container = /** @class */ (function () {\n    function Container() {\n    }\n    Container.render = function (children, props) {\n        var containerProps = {\n            container: props,\n            item: {},\n            isContainer: true,\n        };\n        var style = helpers_1.createProps(containerProps);\n        var grid = props.inlineGrid ? 'inline-grid' : 'grid';\n        var className = grid + \" container \" + helpers_1.hasString(props.class);\n        var hasId = helpers_1.hasString(props.id).length !== 0\n            ? \"id='\" + helpers_1.hasString(props.id).trim() + \"'\"\n            : ''.trim();\n        return \"<div \" + hasId + \" class='\" + className.trim() + \"' style=\\\"\" + style + \"\\\">\" + children + \"</div>\";\n    };\n    return Container;\n}());\nexports.Container = Container;\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Grid/Container.ts?");

/***/ }),

/***/ "./src/client/components/Grid/GridItem.ts":
/*!************************************************!*\
  !*** ./src/client/components/Grid/GridItem.ts ***!
  \************************************************/
/*! flagged exports */
/*! export GridItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GridItem = void 0;\nvar helpers_1 = __webpack_require__(/*! ./helpers/ */ \"./src/client/components/Grid/helpers/index.ts\");\nvar GridItem = /** @class */ (function () {\n    function GridItem() {\n    }\n    GridItem.render = function (children, props) {\n        var itemProps = {\n            container: {},\n            item: props,\n            isContainer: false,\n        };\n        var style = helpers_1.createProps(itemProps);\n        var className = \"grid item \" + helpers_1.hasString(props.class);\n        var hasId = helpers_1.hasString(props.id).length !== 0\n            ? \"id='\" + helpers_1.hasString(props.id).trim() + \"'\"\n            : ''.trim();\n        return \"<div \" + hasId + \" class='\" + className.trim() + \"' style='\" + style + \"'>\" + children + \"</div>\";\n    };\n    return GridItem;\n}());\nexports.GridItem = GridItem;\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Grid/GridItem.ts?");

/***/ }),

/***/ "./src/client/components/Grid/helpers/gridHelper.ts":
/*!**********************************************************!*\
  !*** ./src/client/components/Grid/helpers/gridHelper.ts ***!
  \**********************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createProps [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hasString [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.hasString = exports.createProps = void 0;\nvar createProps = function (_a) {\n    var _b = _a.container, gridTemplateColumns = _b.gridTemplateColumns, gridTemplateRows = _b.gridTemplateRows, gridTemplateAreas = _b.gridTemplateAreas, grid = _b.grid, gap = _b.gap, placeContent = _b.placeContent, gridAutoColumns = _b.gridAutoColumns, gridAutoRows = _b.gridAutoRows, _c = _a.item, gridColumnStart = _c.gridColumnStart, gridColumnEnd = _c.gridColumnEnd, gridRowStart = _c.gridRowStart, gridRowEnd = _c.gridRowEnd, gridArea = _c.gridArea, justifySelf = _c.justifySelf, alignSelf = _c.alignSelf, placeSelf = _c.placeSelf, isContainer = _a.isContainer;\n    var props = isContainer\n        ? {\n            'grid-template-columns': gridTemplateColumns,\n            'grid-template-rows': gridTemplateRows,\n            'grid-template-areas': gridTemplateAreas,\n            grid: grid,\n            gap: gap,\n            'place-content': placeContent,\n            'grid-auto-columns': gridAutoColumns,\n            'grid-auto-rows': gridAutoRows,\n        }\n        : {\n            'grid-column-start': gridColumnStart,\n            'grid-column-end': gridColumnEnd,\n            'grid-row-start': gridRowStart,\n            'grid-row-end': gridRowEnd,\n            'grid-area': gridArea,\n            'justify-self': justifySelf,\n            'align-self': alignSelf,\n            'place-self': placeSelf,\n        };\n    var propString = '';\n    for (var prop in props) {\n        if (typeof props[prop] !== 'undefined') {\n            propString += prop + \":\" + props[prop] + \";\";\n        }\n    }\n    return propString;\n};\nexports.createProps = createProps;\nvar hasString = function (str) {\n    return typeof str === 'undefined' ? '' : str;\n};\nexports.hasString = hasString;\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Grid/helpers/gridHelper.ts?");

/***/ }),

/***/ "./src/client/components/Grid/helpers/index.ts":
/*!*****************************************************!*\
  !*** ./src/client/components/Grid/helpers/index.ts ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./gridHelper */ \"./src/client/components/Grid/helpers/gridHelper.ts\"), exports);\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Grid/helpers/index.ts?");

/***/ }),

/***/ "./src/client/components/Grid/index.ts":
/*!*********************************************!*\
  !*** ./src/client/components/Grid/index.ts ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./GridItem */ \"./src/client/components/Grid/GridItem.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./Container */ \"./src/client/components/Grid/Container.ts\"), exports);\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Grid/index.ts?");

/***/ }),

/***/ "./src/client/components/Header/Header.inline.css.ts":
/*!***********************************************************!*\
  !*** ./src/client/components/Header/Header.inline.css.ts ***!
  \***********************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export styles [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.styles = void 0;\nexports.styles = \"\\n  .header {\\n    display: flex;\\n  }\\n\\n  .header a {\\n    padding-right: 1rem;\\n  }\\n\";\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Header/Header.inline.css.ts?");

/***/ }),

/***/ "./src/client/components/Header/Header.ts":
/*!************************************************!*\
  !*** ./src/client/components/Header/Header.ts ***!
  \************************************************/
/*! flagged exports */
/*! export Header [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Header = void 0;\nvar Link_1 = __webpack_require__(/*! ../Link */ \"./src/client/components/Link/index.ts\");\nvar data_1 = __webpack_require__(/*! ./data */ \"./src/client/components/Header/data.ts\");\nvar Header_inline_css_1 = __webpack_require__(/*! ./Header.inline.css */ \"./src/client/components/Header/Header.inline.css.ts\");\nvar sheet_1 = __webpack_require__(/*! ../../sheet */ \"./src/client/sheet.ts\");\nvar style = sheet_1.inlineStyle(Header_inline_css_1.styles);\nvar Header = /** @class */ (function () {\n    function Header() {\n        this.renderNavItems = this.renderNavItems.bind(this);\n    }\n    Header.prototype.createEvents = function () { };\n    Header.prototype.createProps = function () { };\n    Header.prototype.didRender = function () { };\n    Header.prototype.renderNavItems = function () {\n        return data_1.navData\n            .map(function (item) {\n            var linkProps = {\n                innerHTML: item.name,\n                to: item.to,\n                id: item.name + \"-nav\",\n            };\n            var link = new Link_1.LinkComponent(linkProps).render();\n            return link;\n        })\n            .join('');\n    };\n    Header.prototype.render = function () {\n        return style + \"<header class=\\\"header\\\">\" + this.renderNavItems() + \"</header>\";\n    };\n    return Header;\n}());\nexports.Header = Header;\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Header/Header.ts?");

/***/ }),

/***/ "./src/client/components/Header/data.ts":
/*!**********************************************!*\
  !*** ./src/client/components/Header/data.ts ***!
  \**********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export navData [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.navData = void 0;\nexports.navData = [\n    { name: 'Home', to: '/' },\n    { name: 'About', to: '/about' },\n    { name: 'Contact', to: '/contact' },\n];\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Header/data.ts?");

/***/ }),

/***/ "./src/client/components/Header/index.ts":
/*!***********************************************!*\
  !*** ./src/client/components/Header/index.ts ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/client/components/Header/Header.ts\"), exports);\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Header/index.ts?");

/***/ }),

/***/ "./src/client/components/Link/Link.css.ts":
/*!************************************************!*\
  !*** ./src/client/components/Link/Link.css.ts ***!
  \************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export styles [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.styles = void 0;\nexports.styles = [\n    \"\\n  .link-route {\\n    color:green\\n  }\\n\",\n];\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Link/Link.css.ts?");

/***/ }),

/***/ "./src/client/components/Link/Link.ts":
/*!********************************************!*\
  !*** ./src/client/components/Link/Link.ts ***!
  \********************************************/
/*! flagged exports */
/*! export LinkComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LinkComponent = void 0;\nvar utils_1 = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.ts\");\nvar Skeleton_1 = __webpack_require__(/*! ../Skeleton */ \"./src/client/components/Skeleton/index.ts\");\nvar sheet_1 = __webpack_require__(/*! ../../sheet */ \"./src/client/sheet.ts\");\nvar Link_css_1 = __webpack_require__(/*! ./Link.css */ \"./src/client/components/Link/Link.css.ts\");\nvar Skeleton_2 = __webpack_require__(/*! ./Skeleton */ \"./src/client/components/Link/Skeleton.ts\");\n/*\n * LinkComponent responsible for handling routing within app\n */\n// add css\nsheet_1.insertRule(sheet_1.sheet, Link_css_1.styles);\nvar LinkComponent = /** @class */ (function () {\n    function LinkComponent(linkProps) {\n        this.linkProps = linkProps;\n        this.didRender();\n        this.createAnchor();\n        this.createEvents = this.createEvents.bind(this);\n        this.createAnchor = this.createAnchor.bind(this);\n    }\n    LinkComponent.prototype.onClick = function (e, url) {\n        e.preventDefault();\n        utils_1.pushUrl(url);\n    };\n    LinkComponent.prototype.createAnchor = function () {\n        if (typeof window !== 'undefined') {\n            this.anchor = document.createElement('a');\n        }\n    };\n    LinkComponent.prototype.didRender = function () {\n        var _this = this;\n        var params = {\n            attributes: true,\n            childList: true,\n            subtree: true,\n            characterData: true,\n        };\n        var observer = function () {\n            return utils_1.Observe.domObserver(\"#\" + _this.linkProps.id, params, _this.createEvents);\n        };\n        utils_1.isWindow(observer);\n    };\n    LinkComponent.prototype.createEvents = function (target) {\n        var _this = this;\n        if (target) {\n            target.onclick = function (e) { return _this.onClick(e, _this.linkProps.to); };\n        }\n    };\n    LinkComponent.prototype.createProps = function (linkProps) {\n        if (this.anchor) {\n            this.anchor.setAttribute('to', linkProps.to);\n            this.anchor.innerHTML = linkProps.innerHTML;\n            this.anchor.href = '#';\n            this.anchor.id = linkProps.id;\n            this.anchor.classList = \"link-route \" + (linkProps.class && linkProps.class);\n        }\n    };\n    LinkComponent.prototype.render = function () {\n        if (typeof window !== 'undefined' && this.anchor) {\n            this.createProps(this.linkProps);\n            return this.anchor.outerHTML;\n        }\n        else {\n            return Skeleton_1.Skeleton.render(Skeleton_2.LinkSkeleton);\n        }\n    };\n    return LinkComponent;\n}());\nexports.LinkComponent = LinkComponent;\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Link/Link.ts?");

/***/ }),

/***/ "./src/client/components/Link/Skeleton.ts":
/*!************************************************!*\
  !*** ./src/client/components/Link/Skeleton.ts ***!
  \************************************************/
/*! flagged exports */
/*! export LinkSkeleton [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LinkSkeleton = void 0;\nvar styles_1 = __webpack_require__(/*! ../../styles/ */ \"./src/client/styles/index.ts\");\nexports.LinkSkeleton = {\n    style: \"<style>\\n  .skeleton {\\n    background-color: \" + styles_1.skeletonColor + \";\\n  }\\n  .link {\\n    height: 30px;\\n    width: 90px;\\n    margin-right: 1rem;\\n  }\\n</style>\",\n    component: \"<div class=\\\"skeleton link\\\" style=\\\"background-color: \" + styles_1.skeletonColor + \"; height: 30px;width: 90px;margin-right: 1rem;\\\"></div>\\n\",\n};\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Link/Skeleton.ts?");

/***/ }),

/***/ "./src/client/components/Link/index.ts":
/*!*********************************************!*\
  !*** ./src/client/components/Link/index.ts ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./Link */ \"./src/client/components/Link/Link.ts\"), exports);\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Link/index.ts?");

/***/ }),

/***/ "./src/client/components/Skeleton/Skeleton.ts":
/*!****************************************************!*\
  !*** ./src/client/components/Skeleton/Skeleton.ts ***!
  \****************************************************/
/*! flagged exports */
/*! export Skeleton [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Skeleton = void 0;\nvar Skeleton = /** @class */ (function () {\n    function Skeleton() {\n    }\n    Skeleton.render = function (props) {\n        return \"\" + props.component;\n    };\n    return Skeleton;\n}());\nexports.Skeleton = Skeleton;\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Skeleton/Skeleton.ts?");

/***/ }),

/***/ "./src/client/components/Skeleton/index.ts":
/*!*************************************************!*\
  !*** ./src/client/components/Skeleton/index.ts ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./Skeleton */ \"./src/client/components/Skeleton/Skeleton.ts\"), exports);\n\n\n//# sourceURL=webpack://ivan/./src/client/components/Skeleton/index.ts?");

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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Home = void 0;\nvar Grid_1 = __webpack_require__(/*! ../components/Grid */ \"./src/client/components/Grid/index.ts\");\nvar renderGrid = function () {\n    return [\n        { region: 'main', name: 'main-1', gridColumnStart: '2' },\n        { region: 'main', name: 'main-2', gridColumnStart: '2' },\n        { region: 'main', name: 'main-3', gridColumnStart: '2' },\n        { region: 'header', name: 'header-1', gridColumnStart: '1' },\n        { region: 'header', name: 'header-2', gridColumnStart: '1' },\n        { region: 'header', name: 'header-3', gridColumnStart: '1' },\n        { region: 'footer', name: 'footer-1', gridColumnStart: '3' },\n        { region: 'footer', name: 'footer-2', gridColumnStart: '3' },\n        { region: 'footer', name: 'footer-3', gridColumnStart: '3' },\n    ]\n        .map(function (item) {\n        return Grid_1.GridItem.render(item.name, {\n            gridArea: item.region + \" \" + item.gridColumnStart,\n        });\n    })\n        .join('');\n};\nvar HomeComponent = /** @class */ (function () {\n    function HomeComponent() {\n    }\n    HomeComponent.prototype.render = function () {\n        return \"\\n      <div id='home-page'>\\n        \" + Grid_1.Container.render(renderGrid(), {\n            grid: \"\\n          'header header header'\\n          'main   main   main  '\\n          'footer footer footer'\\n          \",\n            gap: '10px 15px',\n            class: 'home-grid',\n        }) + \"\\n      </div>\\n    \";\n    };\n    return HomeComponent;\n}());\nexports.Home = {\n    component: HomeComponent,\n};\n\n\n//# sourceURL=webpack://ivan/./src/client/pages/Home.ts?");

/***/ }),

/***/ "./src/client/pages/NotFound.ts":
/*!**************************************!*\
  !*** ./src/client/pages/NotFound.ts ***!
  \**************************************/
/*! flagged exports */
/*! export NotFound [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.NotFound = void 0;\nvar Link_1 = __webpack_require__(/*! ../components/Link/ */ \"./src/client/components/Link/index.ts\");\nvar sheet_1 = __webpack_require__(/*! ../sheet */ \"./src/client/sheet.ts\");\nvar HomeLink = new Link_1.LinkComponent({\n    innerHTML: 'Back',\n    to: '/',\n    id: 'back-btn',\n}).render();\n// demo css overwrite same component\nsheet_1.insertRule(sheet_1.sheet, [\n    '#back-btn {color:yellow; background:black; padding:1rem;}',\n]);\nvar NotFoundComponent = /** @class */ (function () {\n    function NotFoundComponent() {\n    }\n    NotFoundComponent.prototype.render = function () {\n        return \"\\n      <div id='not-found'>\\n        <h1>We're sorry!</h1>\\n        \" + HomeLink + \"\\n      </div>\\n    \";\n    };\n    return NotFoundComponent;\n}());\nexports.NotFound = {\n    component: NotFoundComponent,\n};\n\n\n//# sourceURL=webpack://ivan/./src/client/pages/NotFound.ts?");

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

/***/ "./src/client/sheet.ts":
/*!*****************************!*\
  !*** ./src/client/sheet.ts ***!
  \*****************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clientSheet [provided] [no usage info] [missing usage info prevents renaming] */
/*! export inlineStyle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export insertRule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sheet [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n/* Constructed css sheet - chrome only */\n// export const sheet: undefined | CSSStyleSheet =\n//   typeof window !== 'undefined' ? new CSSStyleSheet() : undefined;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.clientSheet = exports.inlineStyle = exports.insertRule = exports.sheet = void 0;\n// const style: HTMLStyleElement | undefined =\n//   typeof window !== 'undefined' ? document.createElement('style') : undefined;\nvar Sheet = /** @class */ (function () {\n    function Sheet(id) {\n        this.id = id;\n        this.id = id;\n        var a = document.createElement('style');\n        a.id = id;\n        return a;\n    }\n    return Sheet;\n}());\nexports.sheet = typeof window !== 'undefined' ? new Sheet('main') : null;\nvar insertRule = function (sheet, style) {\n    typeof window !== 'undefined' && sheet && exports.clientSheet(sheet, style);\n};\nexports.insertRule = insertRule;\nvar inlineStyle = function (style) {\n    return (\"\\n    <style>\\n      \" + style.replace(/\\n|\\r/g, '').trim() + \"\\n    </style>\\n  \")\n        .replace(/\\n|\\r/g, '')\n        .trim();\n};\nexports.inlineStyle = inlineStyle;\nvar clientSheet = function (sheet, rules) {\n    if (typeof window !== 'undefined') {\n        var domReady_1 = setInterval(function () {\n            var in_dom = document.head.contains(sheet);\n            if (in_dom) {\n                var cssSheet = sheet.sheet;\n                for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {\n                    var rule = rules_1[_i];\n                    cssSheet === null || cssSheet === void 0 ? void 0 : cssSheet.insertRule(rule);\n                }\n                clearInterval(domReady_1);\n                return;\n            }\n        }, 10);\n    }\n};\nexports.clientSheet = clientSheet;\n\n\n//# sourceURL=webpack://ivan/./src/client/sheet.ts?");

/***/ }),

/***/ "./src/client/styles/index.ts":
/*!************************************!*\
  !*** ./src/client/styles/index.ts ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./variables.css */ \"./src/client/styles/variables.css.ts\"), exports);\n\n\n//# sourceURL=webpack://ivan/./src/client/styles/index.ts?");

/***/ }),

/***/ "./src/client/styles/variables.css.ts":
/*!********************************************!*\
  !*** ./src/client/styles/variables.css.ts ***!
  \********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export skeletonColor [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.skeletonColor = void 0;\n/* Skeleton color */\nexports.skeletonColor = 'hsl(0,0%,89%)';\n\n\n//# sourceURL=webpack://ivan/./src/client/styles/variables.css.ts?");

/***/ }),

/***/ "./src/helpers/Html.ts":
/*!*****************************!*\
  !*** ./src/helpers/Html.ts ***!
  \*****************************/
/*! flagged exports */
/*! export Html [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Html = void 0;\nvar Header_1 = __webpack_require__(/*! ../client/components/Header */ \"./src/client/components/Header/index.ts\");\nvar Header = new Header_1.Header().render();\nvar Html = function (route) { return \"\\n    <html lang='en-us'>\\n      <head>\\n      <title>Ivan!</title>\\n      <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n      <meta name=\\\"description\\\" content=\\\"portfolio:javascript developer\\\">\\n      <meta name=\\\"robots\\\" content=\\\"index, follow\\\" />\\n      <meta charset=\\\"UTF-8\\\">\\n      <link rel=\\\"icon\\\" href=\\\"data:,\\\">\\n      </head>\\n      <body>\\n        <div id='root'>\\n        \" + Header + \"\\n        \" + route + \"\\n        </div>\\n        <script src='/bundle.js'></script>\\n      </body>\\n    </html>\"; };\nexports.Html = Html;\n\n\n//# sourceURL=webpack://ivan/./src/helpers/Html.ts?");

/***/ }),

/***/ "./src/helpers/constructSheet.ts":
/*!***************************************!*\
  !*** ./src/helpers/constructSheet.ts ***!
  \***************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export constructSheet [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.constructSheet = void 0;\nvar constructSheet = function (styleSheet) {\n    if (!styleSheet)\n        return null;\n    // Apply the stylesheet to document:\n    var Document = document;\n    // Document.adoptedStyleSheets = [styleSheet];\n    var style = Document.head.appendChild(styleSheet);\n    return style.sheet;\n};\nexports.constructSheet = constructSheet;\n\n\n//# sourceURL=webpack://ivan/./src/helpers/constructSheet.ts?");

/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./renderer */ \"./src/helpers/renderer.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./renderRoutes */ \"./src/helpers/renderRoutes.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./constructSheet */ \"./src/helpers/constructSheet.ts\"), exports);\n\n\n//# sourceURL=webpack://ivan/./src/helpers/index.ts?");

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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.onUrlChange = exports.renderRoutes = void 0;\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\nvar activeRoute = function (routeArr, path) {\n    return routeArr[0].routes.filter(function (route) { return route.path === path; });\n};\nvar notFoundRoute = function (routeArr, path) {\n    return routeArr[0].routes.filter(function (route) { return route.path === 'not-found'; });\n};\nvar renderRoutes = function (routesArray, req) {\n    var path;\n    if (typeof window !== 'undefined') {\n        path = window.location.pathname;\n    }\n    else {\n        path = req ? req.originalUrl : '/';\n    }\n    var route = activeRoute(routesArray, path);\n    if (!route.length) {\n        route = notFoundRoute(routesArray, path);\n    }\n    var component = new route[0].component();\n    return component.render();\n};\nexports.renderRoutes = renderRoutes;\nvar onUrlChange = function (cb) {\n    window.addEventListener('popstate', function () {\n        utils_1.debounce(cb, 10);\n    });\n    cb();\n};\nexports.onUrlChange = onUrlChange;\n\n\n//# sourceURL=webpack://ivan/./src/helpers/renderRoutes.ts?");

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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Observe = void 0;\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\nvar Observe = /** @class */ (function () {\n    function Observe() {\n    }\n    Observe.domObserver = function (target, params, initProps) {\n        // Select the node that will be observed for mutations\n        var root = document.querySelector('#root');\n        var targetNode = document.querySelector(target);\n        // If no targetNode exit\n        if (!root)\n            return;\n        // initlize element props\n        initProps(targetNode);\n        // Options for the observer (which mutations to observe)\n        var config = __assign({}, params);\n        // Callback function to execute when mutations are observed\n        var callback = function (mutationsList, observer) {\n            // Use traditional 'for loops' for IE 11\n            for (var _i = 0, mutationsList_1 = mutationsList; _i < mutationsList_1.length; _i++) {\n                var mutation = mutationsList_1[_i];\n                if (mutation.type === 'childList') {\n                    targetNode = document.querySelector(target);\n                    if (targetNode) {\n                        utils_1.debounce(function () { return initProps(targetNode); }, 10);\n                    }\n                }\n                else if (mutation.type === 'attributes') {\n                    console.log('The ' + mutation.attributeName + ' attribute was modified.');\n                }\n            }\n        };\n        // Create an observer instance linked to the callback function\n        var observer = new MutationObserver(callback);\n        // Start observing the target node for configured mutations\n        observer.observe(root, config);\n        // // Later, you can stop observing\n        // observer.disconnect();\n    };\n    return Observe;\n}());\nexports.Observe = Observe;\n\n\n//# sourceURL=webpack://ivan/./src/utils/observer.ts?");

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