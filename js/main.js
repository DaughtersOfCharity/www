/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/van11y-accessible-carrousel-aria/dist/van11y-accessible-carrousel-aria.min.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/van11y-accessible-carrousel-aria/dist/van11y-accessible-carrousel-aria.min.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * van11y-accessible-carrousel-aria - ES2015 accessible carrousel system, using ARIA (compatible IE9+ when transpiled)
 * @version v1.3.0
 * @link https://van11y.net/accessible-carrousel/
 * @license undefined : undefined
 */
function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!function(e){var t="js-carrousel",r="js-carrousel__container",n="js-carrousel__content",o="js-carrousel__control__list",i="js-carrousel__control__list__item",a="js-carrousel__control__list__link",l="carrousel__control__list",u="carrousel__control__list__item",c="carrousel__control__list__link",s="carrousel",d="carrousel__container",_="carrousel__content",b="js-carrousel__button-container",f="carrousel__button-container",p="carrousel__button__previous",y="carrousel__button__next",v="js-carrousel__button__previous",A="js-carrousel__button__next",g="carrousel__button__button",m="carrousel__button__img",C="id_carrousel_content_",P="label_",h="data-carrousel-prefix-class",x="data-carrousel-btn-previous-img",L="data-carrousel-btn-previous-text",k="data-carrousel-btn-next-img",N="data-carrousel-btn-next-text",E="data-carrousel-span-text-class",S="data-carrousel-transition",q="data-carrousel-active-slide",T="data-carrousel-control-element-number",j="data-carrousel-existing-hx",M="data-carrousel-hx",w="data-carrousel-span-text",I="data-carousel-hide-arrows-focus",O="invisible",B="role",H="aria-controls",D="aria-labelledby",K="aria-hidden",F="aria-selected",G="type",U="button",V="alt",R="src",$="class",z="tablist",J="tabpanel",Q="tab",W="presentation",X=function(t){return e.getElementById(t)},Y=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},Z=function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},ee=function(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})},te=function(e,t){for(var r=!1,n=e;n&&r===!1;)Z(n,t)===!0?r=!0:n=n.parentNode;return r===!0?n.getAttribute("id"):""},re=function(e,t){for(var r=!1,n=e.parentNode;n&&r===!1;)Z(n,t)===!0?r=!0:n=n.parentNode;return r===!0?n:""},ne=function(e){var t=e.id,r=e.text,n=e.spanClass,o=e.prefixClass+u,l=e.prefixClass+c,s=e.controlsId,d=e.selected,_=d?"0":"-1",b=e.numberElement;return'<li class="'+i+" "+o+'" '+B+'="'+W+'"><a class="'+a+" "+l+'" id="'+t+'" '+B+'="'+Q+'" '+H+'="'+s+'" '+F+'="'+d+'" '+T+'="'+b+'" tabindex="'+_+'"><span class="'+n+'">'+r+"</span></a></li>"},oe=function(e){var t,r,n=e.controlListLink,o=e.panelControled,i=e.carrouselContainer,l=i.parentNode,u=!!e.giveFocus,c=Number(i.getAttribute(q)),s=l.querySelector("."+a+"["+T+'="'+c+'"]'),d=X(s.getAttribute(H));ee(s,(t={},_defineProperty(t,F,"false"),_defineProperty(t,"tabindex","-1"),t)),ee(d,_defineProperty({},K,"true")),ee(n,(r={},_defineProperty(r,F,"true"),_defineProperty(r,"tabindex","0"),r)),ee(o,_defineProperty({},K,"false")),ee(i,_defineProperty({},q,Number(n.getAttribute(T)))),u&&setTimeout(function(){return n.focus()},0)},ie=function(){var r=arguments.length<=0||void 0===arguments[0]?e:arguments[0];return[].slice.call(r.querySelectorAll("."+t))},ae=function(u){var c=arguments.length<=1||void 0===arguments[1]||arguments[1];ie(u).forEach(function(t){var i=Math.random().toString(32).slice(2,12),a=t.querySelector("."+r),u=a.hasAttribute(S)===!0?a.getAttribute(S):"",c=a.hasAttribute(h)===!0?a.getAttribute(h)+"-":"",T=a.hasAttribute(j)===!0?a.getAttribute(j):"",H=a.hasAttribute(M)===!0?a.getAttribute(M):"span",F=a.hasAttribute(w)===!0?a.getAttribute(w)+" ":"",Q=a.hasAttribute(E)===!0?a.getAttribute(E):O,W=a.hasAttribute(I)===!0,X=a.hasAttribute(L)===!0?a.getAttribute(L):"",Z=e.createElement("SPAN");Z.innerHTML=X,Z=Z.textContent;var te=a.hasAttribute(x)===!0?a.getAttribute(x):"",re=a.hasAttribute(N)===!0?a.getAttribute(N):"",oe=e.createElement("SPAN");oe.innerHTML=re,oe=oe.textContent;var ie=a.hasAttribute(k)===!0?a.getAttribute(k):"",ae=a.hasAttribute(q)===!0?Number(a.getAttribute(q)):1;Y(t,c+s),Y(a,c+d),""!==u&&Y(a,u);var le=document.createElement("OL");Y(le,o),Y(le,c+l),ee(le,_defineProperty({},B,z));var ue=[].slice.call(a.querySelectorAll("."+n));if(ue.forEach(function(e,t){var r,n=""+C+i+"_"+t,o=""+P+n,a=ae===t+1,l=void 0,u=void 0;if(Y(e,c+_),Y(e,_),ee(e,(r={},_defineProperty(r,B,J),_defineProperty(r,"id",n),_defineProperty(r,K,a?"false":"true"),_defineProperty(r,D,o),r)),""!==T)l=e.querySelector(T),l&&(ee(l,{tabindex:"-1"}),u=l.textContent);else{u=F+(t+1);var s=document.createElement(H);ee(s,{tabindex:"-1"}),s.innerHTML=u,Y(s,O),s=e.insertBefore(s,e.firstChild)}le.innerHTML+=ne({id:o,text:u,spanClass:Q,prefixClass:c,controlsId:n,selected:a,numberElement:t+1})}),le=t.insertBefore(le,a),""!==X){var ce,se=document.createElement("DIV");Y(se,b),Y(se,c+f),Y(se,c+p);var de=document.createElement("BUTTON");if(ee(de,(ce={},_defineProperty(ce,G,U),_defineProperty(ce,"id",v+"_"+i),_defineProperty(ce,"title",X),ce)),W){var _e;ee(de,(_e={},_defineProperty(_e,K,!0),_defineProperty(_e,"tabindex","-1"),_e))}if(Y(de,v),Y(de,c+g),de=se.appendChild(de),""!==te){var be,fe=document.createElement("IMG");ee(fe,(be={},_defineProperty(be,R,te),_defineProperty(be,V,Z),_defineProperty(be,$,c+m),be)),fe=de.appendChild(fe)}else de.innerHTML=X;se=t.insertBefore(se,a)}if(""!==re){var pe,ye=document.createElement("DIV");Y(ye,b),Y(ye,c+f),Y(ye,c+y);var ve=document.createElement("BUTTON");if(ee(ve,(pe={},_defineProperty(pe,G,U),_defineProperty(pe,"id",A+"_"+i),_defineProperty(pe,"title",re),pe)),W){var Ae;ee(ve,(Ae={},_defineProperty(Ae,K,!0),_defineProperty(Ae,"tabindex","-1"),Ae))}if(Y(ve,A),Y(ve,c+g),ve=ye.appendChild(ve),""!==ie){var ge,me=document.createElement("IMG");ee(me,(ge={},_defineProperty(ge,R,ie),_defineProperty(ge,V,oe),_defineProperty(ge,$,c+m),ge)),me=ve.appendChild(me)}else ve.innerHTML=re;t.appendChild(ye)}ee(a,_defineProperty({},q,ae))}),c&&["click","keydown"].forEach(function(o){e.body.addEventListener(o,function(e){var l=te(e.target,a),u=te(e.target,n),c=te(e.target,v),s=te(e.target,A);if(""!==l&&"click"===o){var d=X(l),_=X(d.getAttribute(H)),b=_.parentNode;oe({controlListLink:d,panelControled:_,carrouselContainer:b})}if(""!==c&&"click"===o){var f=X(c),p=f.parentNode.parentNode,b=p.querySelector("."+r),d=void 0,_=void 0,y=Number(b.getAttribute(q));y>1?(d=p.querySelector("."+a+"["+T+'="'+(y-1)+'"]'),_=X(d.getAttribute(H))):(d=p.querySelector("."+i+":last-child > ."+a),_=X(d.getAttribute(H))),oe({controlListLink:d,panelControled:_,carrouselContainer:b})}if(""!==s&&"click"===o){var g=X(s),p=g.parentNode.parentNode,b=p.querySelector("."+r),y=Number(b.getAttribute(q)),d=p.querySelector("."+a+"["+T+'="'+(y+1)+'"]'),_=void 0;d?_=X(d.getAttribute(H)):(d=p.querySelector("."+a+"["+T+'="1"]'),_=X(d.getAttribute(H))),oe({controlListLink:d,panelControled:_,carrouselContainer:b})}if(""!==l&&"keydown"===o){var m=X(l),p=re(m,t),b=p.querySelector("."+r),d=void 0,_=void 0,y=void 0;if(36===e.keyCode)d=p.querySelector("."+a+"["+T+'="1"]'),_=X(d.getAttribute(H));else if(35===e.keyCode)d=p.querySelector("."+i+":last-child > ."+a),_=X(d.getAttribute(H));else if(37!==e.keyCode&&38!==e.keyCode||e.ctrlKey){if(40!==e.keyCode&&39!==e.keyCode||e.ctrlKey)return;y=Number(b.getAttribute(q)),d=p.querySelector("."+a+"["+T+'="'+(y+1)+'"]'),d?_=X(d.getAttribute(H)):(d=p.querySelector("."+a+"["+T+'="1"]'),_=X(d.getAttribute(H)))}else y=Number(b.getAttribute(q)),y>1?(d=p.querySelector("."+a+"["+T+'="'+(y-1)+'"]'),_=X(d.getAttribute(H))):(d=p.querySelector("."+i+":last-child > ."+a),_=X(d.getAttribute(H)));oe({controlListLink:d,panelControled:_,carrouselContainer:b,giveFocus:!0})}""!==u&&"keydown"===o&&!function(){var t=X(u),r=X(t.getAttribute(D));37!==e.keyCode&&38!==e.keyCode||!e.ctrlKey||setTimeout(function(){return r.focus()},0)}()},!0)})},le=function ue(){ae(),document.removeEventListener("DOMContentLoaded",ue)};document.addEventListener("DOMContentLoaded",le),window.van11yAccessibleCarrouselAria=ae}(document);

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mobile_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/mobile-nav */ "./resources/js/modules/mobile-nav/index.js");
/* harmony import */ var _modules_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/lazyload */ "./resources/js/modules/lazyload/index.js");
/* harmony import */ var van11y_accessible_carrousel_aria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! van11y-accessible-carrousel-aria */ "./node_modules/van11y-accessible-carrousel-aria/dist/van11y-accessible-carrousel-aria.min.js");
/* harmony import */ var van11y_accessible_carrousel_aria__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(van11y_accessible_carrousel_aria__WEBPACK_IMPORTED_MODULE_2__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Import local modules




_toConsumableArray(document.getElementsByClassName("js-carrousel")).forEach(function (x) {
  return van11yAccessibleCarrouselAria(x);
});

/***/ }),

/***/ "./resources/js/modules/lazyload/index.js":
/*!************************************************!*\
  !*** ./resources/js/modules/lazyload/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");
/* harmony import */ var _utilities_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utilities/helpers */ "./resources/js/utilities/helpers/index.js");



var Lazyload = function Lazyload() {
  // lazyload our images
  var images = _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].wrapper.querySelectorAll("[data-lazy]");

  if (Object(_utilities_helpers__WEBPACK_IMPORTED_MODULE_1__["exists"])(images)) {
    // options
    var options = {
      threshold: 0.5
    };

    var preloadImage = function preloadImage(img) {
      // find and store the image's data-lazy attribute
      // commented out for now, but if you want to go the extra mile, then you can do all the srcset attribute stuff on the images ;)
      // const srcset = img.dataset.srcset
      var src = img.dataset.lazy;
      img.src = src; // img.srcset = srcset
      // add a class of loaded
      // we can then use this as a hook for fade-in animations etc

      img.classList.add("loaded");
    };

    var lazyLoad = new IntersectionObserver(function (entries, lazyLoad) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          preloadImage(entry.target);
          lazyLoad.unobserve(entry.target);
        }
      });
    }, options);
    images.forEach(function (image) {
      lazyLoad.observe(image);
    });
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (Lazyload);

/***/ }),

/***/ "./resources/js/modules/mobile-nav/index.js":
/*!**************************************************!*\
  !*** ./resources/js/modules/mobile-nav/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");


var MobileNav = function MobileNav() {
  _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].mobileNavToggle.addEventListener("click", function () {
    this.classList.toggle("menu-toggle-active");
    _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].mobileNav.classList.toggle("menu-visible"); // set aria-expanded attribute on menu toggle button

    if (this.getAttribute("aria-expanded") === "false") {
      this.setAttribute("aria-expanded", "true");
    } else {
      this.setAttribute("aria-expanded", "false");
    }
  });
}();

/* harmony default export */ __webpack_exports__["default"] = (MobileNav);

/***/ }),

/***/ "./resources/js/utilities/helpers/index.js":
/*!*************************************************!*\
  !*** ./resources/js/utilities/helpers/index.js ***!
  \*************************************************/
/*! exports provided: page, exists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "page", function() { return page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");

/**
 * @description Test if the body id is something
 * @param  		{string}
 * @return 		{bool}
 *
 */

var page = function page(name) {
  if (!name) {
    return _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].body.getAttribute("id");
  }

  return _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].body.getAttribute("id") == name;
};
/**
 * @description Check if element exists the page
 * @param  		{string} Element selector
 * @param  		{string} Minimum number of elements
 * @return 		{bool}
 */


var exists = function exists(el, limit) {
  return el.length > 0;
};



/***/ }),

/***/ "./resources/js/utilities/selectors/index.js":
/*!***************************************************!*\
  !*** ./resources/js/utilities/selectors/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $$ = {
  body: document.querySelector("body"),
  wrapper: document.getElementById("wrapper"),
  header: document.getElementById("header"),
  nav: document.getElementById("nav"),
  hero: document.getElementById("hero"),
  main: document.getElementById("main"),
  containerCentre: document.getElementById("container-centre"),
  containerRight: document.getElementById("container-right"),
  preFooter: document.getElementById("pre-footer"),
  footer: document.getElementById("footer"),
  mobileNav: document.getElementById("mobile-nav"),
  mobileNavToggle: document.getElementById("mobile-nav-toggle")
};
/* harmony default export */ __webpack_exports__["default"] = ($$);

/***/ }),

/***/ "./resources/sass/main.scss":
/*!**********************************!*\
  !*** ./resources/sass/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./resources/js/main.js ./resources/sass/main.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/boris/Projects/asso/maisonstvincent-new/resources/js/main.js */"./resources/js/main.js");
module.exports = __webpack_require__(/*! /Users/boris/Projects/asso/maisonstvincent-new/resources/sass/main.scss */"./resources/sass/main.scss");


/***/ })

/******/ });