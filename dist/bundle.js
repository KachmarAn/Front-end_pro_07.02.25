/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPost: () => (/* binding */ createPost),\n/* harmony export */   fetchComments: () => (/* binding */ fetchComments),\n/* harmony export */   fetchPosts: () => (/* binding */ fetchPosts)\n/* harmony export */ });\nasync function fetchPosts() {\n  let limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);\n  if (!response.ok) {\n    throw new Error(`Failed to fetch posts: ${response.status}`);\n  }\n  return await response.json();\n}\nasync function fetchComments(postId) {\n  let limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;\n  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=${limit}`);\n  if (!response.ok) {\n    throw new Error(`Failed to fetch comments for post ${postId}: ${response.status}`);\n  }\n  return await response.json();\n}\nasync function createPost(postData) {\n  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(postData)\n  });\n  if (!response.ok) {\n    throw new Error(`Failed to create post: ${response.status}`);\n  }\n  return await response.json();\n}\n\n//# sourceURL=webpack://front-end_pro_07.02.25/./src/api.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCommentElement: () => (/* binding */ createCommentElement),\n/* harmony export */   createPostElement: () => (/* binding */ createPostElement)\n/* harmony export */ });\nfunction createPostElement(post) {\n  const postEl = document.createElement('div');\n  postEl.classList.add('post');\n  postEl.innerHTML = `\n    <h3>${post.title}</h3>\n    <p>${post.body}</p>\n    <button data-post-id=\"${post.id}\">Завантажити коментарі</button>\n    <div class=\"comments\" id=\"comments-${post.id}\"></div>\n  `;\n  return postEl;\n}\nfunction createCommentElement(comment) {\n  const commentEl = document.createElement('div');\n  commentEl.classList.add('comment');\n  commentEl.innerHTML = `\n    <strong>${comment.name}</strong> (<a href=\"mailto:${comment.email}\">${comment.email}</a>)<br/>\n    ${comment.body}\n  `;\n  return commentEl;\n}\n\n//# sourceURL=webpack://front-end_pro_07.02.25/./src/dom.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\nfunction setupEventListeners(postsContainer, form, successMessage) {\n  postsContainer.addEventListener('click', async e => {\n    if (e.target.tagName === 'BUTTON' && e.target.dataset.postId) {\n      const postId = e.target.dataset.postId;\n      const commentsContainer = document.getElementById(`comments-${postId}`);\n      if (!commentsContainer.hasChildNodes()) {\n        try {\n          e.target.disabled = true;\n          const comments = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchComments)(postId);\n          comments.forEach(comment => {\n            commentsContainer.appendChild((0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createCommentElement)(comment));\n          });\n        } catch (error) {\n          console.error('Error loading comments:', error);\n        }\n      } else {\n        commentsContainer.classList.toggle('hidden');\n      }\n    }\n  });\n  form.addEventListener('submit', async e => {\n    e.preventDefault();\n    const title = document.getElementById('title').value.trim();\n    const body = document.getElementById('body').value.trim();\n    if (!title || !body) {\n      alert('Будь ласка, заповніть усі поля.');\n      return;\n    }\n    try {\n      const newPost = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.createPost)({\n        title,\n        body,\n        userId: 1\n      });\n      successMessage.textContent = 'Пост створено успішно!';\n      postsContainer.prepend((0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createPostElement)(newPost));\n      form.reset();\n    } catch (error) {\n      console.error('Error creating post:', error);\n    }\n  });\n}\n\n//# sourceURL=webpack://front-end_pro_07.02.25/./src/events.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.js */ \"./src/events.js\");\n\n\n\n\n\n\nconst postsContainer = document.getElementById('posts');\nconst form = document.getElementById('postForm');\nconst successMessage = document.getElementById('successMessage');\nasync function init() {\n  try {\n    const posts = await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.fetchPosts)();\n    posts.forEach(post => {\n      postsContainer.appendChild((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createPostElement)(post));\n    });\n  } catch (error) {\n    console.error('Error loading posts:', error);\n  }\n  (0,_events_js__WEBPACK_IMPORTED_MODULE_3__.setupEventListeners)(postsContainer, form, successMessage);\n}\ninit();\n\n//# sourceURL=webpack://front-end_pro_07.02.25/./src/script.js?");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://front-end_pro_07.02.25/./src/style/main.scss?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;