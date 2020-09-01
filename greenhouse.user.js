// ==UserScript==
// @name         Remove "Mixed Rating" Option
// @namespace    presynce.com
// @license      MIT
// @version      0.1
// @description  try to take over the world!
// @author       artburkart
// @match        https://*.greenhouse.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll("span.selectable.mixed-rating.rating-icon").forEach(e => e.parentNode.removeChild(e))
    // Your code here...
})();
