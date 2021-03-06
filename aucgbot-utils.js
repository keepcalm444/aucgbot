// -*- Mode: JavaScript; tab-width: 4 -*- vim:tabstop=4:
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

run("es5-shim.js");

if (typeof randint !== "function")
/**
 * Generate a psuedo-random integer. Similar to Python's random.randint method.
 *
 * @param {number} [min] Minimum number (default: 1).
 * @param {number} [max] Maximum number (default: 10).
 * @return {number} Random integer.
 */
randint = function randint(min, max) {
	min = min != null ? +min : 1;
	max = max != null ? +max : 10;
	if (min >= max)
		return NaN;
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

if (typeof Array.random !== "function")
Array.random = function random(a) {
	return a[Math.floor(Math.random() * a.length)];
};
if (typeof Array.prototype.random !== "function")
/**
 * Get a random element of an array. http://svendtofte.com/code/usefull_prototypes
 *
 * @this {Array}
 * @return {*} Random element from array.
 */
Array.prototype.random = function random() {
	return this[Math.floor(Math.random() * this.length)];
};

if (typeof Array.contains !== "function")
Array.contains = function contains(a, e) {
	return Array.indexOf(a, e) !== -1;
};
if (typeof Array.prototype.contains !== "function")
/**
 * ES6 shim: Check if an array contains an element.
 *
 * @this {Array} The array to check the contents of.
 * @param {*} e An element to check.
 * @return {Boolean} Whether the string contains the substring.
 */
Array.prototype.contains = function contains(e) {
	return this.indexOf(e) !== -1;
};

if (typeof String.prototype.contains !== "function")
/**
 * ES6 shim: Check if a string contains a substring.
 *
 * @this {String} The string to check the contents of.
 * @param {String} s The substring to check.
 * @param {Number} [pos] Where to start searching.
 * @return {Boolean} Whether the string contains the substring.
 */
String.prototype.contains = function contains(s, pos) {
	//"use asm";
	s = s + "";
	pos = pos | 0;
	var S = this + "";
	return S.indexOf(s, pos) !== -1;
};

if (typeof String.prototype.startsWith !== "function")
/**
 * ES6 shim: Check if a string starts with a substring.
 *
 * @this {String} The string to check the contents of.
 * @param {String} s The substring to check.
 * @param {Number} [pos] Where to start searching.
 * @return {Boolean} Whether the string starts with the substring.
 */
String.prototype.startsWith = function startsWith(s, pos) {
	//"use asm";
	s = s + "";
	pos = pos | 0;
	var S = this + "";
	//return S.indexOf(s, pos) === pos;
	return S.substr(pos, s.length) === s;
};

if (typeof Object.is !== "function")
Object.is = function is(x, y) {
	return x === y ? x !== 0 || 1 / x == 1 / y : x !== x && y !== y;
};

// and now, for something completely different
if (typeof btoa !== "function" && typeof encodeB64 === "function") {
	btoa = encodeB64;
}
if (typeof atob !== "function" && typeof decodeB64 === "function") {
	atob = decodeB64;
}
