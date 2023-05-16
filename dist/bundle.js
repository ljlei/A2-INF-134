/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/dist/svg.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "Animator": () => (/* binding */ Animator),
/* harmony export */   "Array": () => (/* binding */ SVGArray),
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "ClipPath": () => (/* binding */ ClipPath),
/* harmony export */   "Color": () => (/* binding */ Color),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Controller": () => (/* binding */ Controller),
/* harmony export */   "Defs": () => (/* binding */ Defs),
/* harmony export */   "Dom": () => (/* binding */ Dom),
/* harmony export */   "Ease": () => (/* binding */ Ease),
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "Ellipse": () => (/* binding */ Ellipse),
/* harmony export */   "EventTarget": () => (/* binding */ EventTarget),
/* harmony export */   "ForeignObject": () => (/* binding */ ForeignObject),
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "G": () => (/* binding */ G),
/* harmony export */   "Gradient": () => (/* binding */ Gradient),
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "Marker": () => (/* binding */ Marker),
/* harmony export */   "Mask": () => (/* binding */ Mask),
/* harmony export */   "Matrix": () => (/* binding */ Matrix),
/* harmony export */   "Morphable": () => (/* binding */ Morphable),
/* harmony export */   "NonMorphable": () => (/* binding */ NonMorphable),
/* harmony export */   "Number": () => (/* binding */ SVGNumber),
/* harmony export */   "ObjectBag": () => (/* binding */ ObjectBag),
/* harmony export */   "PID": () => (/* binding */ PID),
/* harmony export */   "Path": () => (/* binding */ Path),
/* harmony export */   "PathArray": () => (/* binding */ PathArray),
/* harmony export */   "Pattern": () => (/* binding */ Pattern),
/* harmony export */   "Point": () => (/* binding */ Point),
/* harmony export */   "PointArray": () => (/* binding */ PointArray),
/* harmony export */   "Polygon": () => (/* binding */ Polygon),
/* harmony export */   "Polyline": () => (/* binding */ Polyline),
/* harmony export */   "Queue": () => (/* binding */ Queue),
/* harmony export */   "Rect": () => (/* binding */ Rect),
/* harmony export */   "Runner": () => (/* binding */ Runner),
/* harmony export */   "SVG": () => (/* binding */ SVG),
/* harmony export */   "Shape": () => (/* binding */ Shape),
/* harmony export */   "Spring": () => (/* binding */ Spring),
/* harmony export */   "Stop": () => (/* binding */ Stop),
/* harmony export */   "Style": () => (/* binding */ Style),
/* harmony export */   "Svg": () => (/* binding */ Svg),
/* harmony export */   "Symbol": () => (/* binding */ Symbol),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "TextPath": () => (/* binding */ TextPath),
/* harmony export */   "Timeline": () => (/* binding */ Timeline),
/* harmony export */   "TransformBag": () => (/* binding */ TransformBag),
/* harmony export */   "Tspan": () => (/* binding */ Tspan),
/* harmony export */   "Use": () => (/* binding */ Use),
/* harmony export */   "adopt": () => (/* binding */ adopt),
/* harmony export */   "assignNewId": () => (/* binding */ assignNewId),
/* harmony export */   "clearEvents": () => (/* binding */ clearEvents),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "defaults": () => (/* binding */ defaults),
/* harmony export */   "dispatch": () => (/* binding */ dispatch),
/* harmony export */   "easing": () => (/* binding */ easing),
/* harmony export */   "eid": () => (/* binding */ eid),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "find": () => (/* binding */ baseFind),
/* harmony export */   "getClass": () => (/* binding */ getClass),
/* harmony export */   "getEventTarget": () => (/* binding */ getEventTarget),
/* harmony export */   "getEvents": () => (/* binding */ getEvents),
/* harmony export */   "getWindow": () => (/* binding */ getWindow),
/* harmony export */   "makeInstance": () => (/* binding */ makeInstance),
/* harmony export */   "makeMorphable": () => (/* binding */ makeMorphable),
/* harmony export */   "mockAdopt": () => (/* binding */ mockAdopt),
/* harmony export */   "namespaces": () => (/* binding */ namespaces),
/* harmony export */   "nodeOrNew": () => (/* binding */ nodeOrNew),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "parser": () => (/* binding */ parser),
/* harmony export */   "regex": () => (/* binding */ regex),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "registerMorphableType": () => (/* binding */ registerMorphableType),
/* harmony export */   "registerWindow": () => (/* binding */ registerWindow),
/* harmony export */   "restoreWindow": () => (/* binding */ restoreWindow),
/* harmony export */   "root": () => (/* binding */ root),
/* harmony export */   "saveWindow": () => (/* binding */ saveWindow),
/* harmony export */   "utils": () => (/* binding */ utils),
/* harmony export */   "windowEvents": () => (/* binding */ windowEvents),
/* harmony export */   "withWindow": () => (/* binding */ withWindow),
/* harmony export */   "wrapWithAttrCheck": () => (/* binding */ wrapWithAttrCheck)
/* harmony export */ });
/*!
* @svgdotjs/svg.js - A lightweight library for manipulating and animating SVG.
* @version 3.1.2
* https://svgjs.dev/
*
* @copyright Wout Fierens <wout@mick-wout.com>
* @license MIT
*
* BUILT: Wed Jan 26 2022 23:19:07 GMT+0100 (Mitteleuropäische Normalzeit)
*/;
const methods$1 = {};
const names = [];
function registerMethods(name, m) {
  if (Array.isArray(name)) {
    for (const _name of name) {
      registerMethods(_name, m);
    }

    return;
  }

  if (typeof name === 'object') {
    for (const _name in name) {
      registerMethods(_name, name[_name]);
    }

    return;
  }

  addMethodNames(Object.getOwnPropertyNames(m));
  methods$1[name] = Object.assign(methods$1[name] || {}, m);
}
function getMethodsFor(name) {
  return methods$1[name] || {};
}
function getMethodNames() {
  return [...new Set(names)];
}
function addMethodNames(_names) {
  names.push(..._names);
}

// Map function
function map(array, block) {
  let i;
  const il = array.length;
  const result = [];

  for (i = 0; i < il; i++) {
    result.push(block(array[i]));
  }

  return result;
} // Filter function

function filter(array, block) {
  let i;
  const il = array.length;
  const result = [];

  for (i = 0; i < il; i++) {
    if (block(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
} // Degrees to radians

function radians(d) {
  return d % 360 * Math.PI / 180;
} // Radians to degrees

function degrees(r) {
  return r * 180 / Math.PI % 360;
} // Convert dash-separated-string to camelCase

function camelCase(s) {
  return s.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  });
} // Convert camel cased string to dash separated

function unCamelCase(s) {
  return s.replace(/([A-Z])/g, function (m, g) {
    return '-' + g.toLowerCase();
  });
} // Capitalize first letter of a string

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
} // Calculate proportional width and height values when necessary

function proportionalSize(element, width, height, box) {
  if (width == null || height == null) {
    box = box || element.bbox();

    if (width == null) {
      width = box.width / box.height * height;
    } else if (height == null) {
      height = box.height / box.width * width;
    }
  }

  return {
    width: width,
    height: height
  };
}
/**
 * This function adds support for string origins.
 * It searches for an origin in o.origin o.ox and o.originX.
 * This way, origin: {x: 'center', y: 50} can be passed as well as ox: 'center', oy: 50
**/

function getOrigin(o, element) {
  const origin = o.origin; // First check if origin is in ox or originX

  let ox = o.ox != null ? o.ox : o.originX != null ? o.originX : 'center';
  let oy = o.oy != null ? o.oy : o.originY != null ? o.originY : 'center'; // Then check if origin was used and overwrite in that case

  if (origin != null) {
    [ox, oy] = Array.isArray(origin) ? origin : typeof origin === 'object' ? [origin.x, origin.y] : [origin, origin];
  } // Make sure to only call bbox when actually needed


  const condX = typeof ox === 'string';
  const condY = typeof oy === 'string';

  if (condX || condY) {
    const {
      height,
      width,
      x,
      y
    } = element.bbox(); // And only overwrite if string was passed for this specific axis

    if (condX) {
      ox = ox.includes('left') ? x : ox.includes('right') ? x + width : x + width / 2;
    }

    if (condY) {
      oy = oy.includes('top') ? y : oy.includes('bottom') ? y + height : y + height / 2;
    }
  } // Return the origin as it is if it wasn't a string


  return [ox, oy];
}

var utils = {
  __proto__: null,
  map: map,
  filter: filter,
  radians: radians,
  degrees: degrees,
  camelCase: camelCase,
  unCamelCase: unCamelCase,
  capitalize: capitalize,
  proportionalSize: proportionalSize,
  getOrigin: getOrigin
};

// Default namespaces
const svg = 'http://www.w3.org/2000/svg';
const html = 'http://www.w3.org/1999/xhtml';
const xmlns = 'http://www.w3.org/2000/xmlns/';
const xlink = 'http://www.w3.org/1999/xlink';
const svgjs = 'http://svgjs.dev/svgjs';

var namespaces = {
  __proto__: null,
  svg: svg,
  html: html,
  xmlns: xmlns,
  xlink: xlink,
  svgjs: svgjs
};

const globals = {
  window: typeof window === 'undefined' ? null : window,
  document: typeof document === 'undefined' ? null : document
};
function registerWindow(win = null, doc = null) {
  globals.window = win;
  globals.document = doc;
}
const save = {};
function saveWindow() {
  save.window = globals.window;
  save.document = globals.document;
}
function restoreWindow() {
  globals.window = save.window;
  globals.document = save.document;
}
function withWindow(win, fn) {
  saveWindow();
  registerWindow(win, win.document);
  fn(win, win.document);
  restoreWindow();
}
function getWindow() {
  return globals.window;
}

class Base {// constructor (node/*, {extensions = []} */) {
  //   // this.tags = []
  //   //
  //   // for (let extension of extensions) {
  //   //   extension.setup.call(this, node)
  //   //   this.tags.push(extension.name)
  //   // }
  // }
}

const elements = {};
const root = '___SYMBOL___ROOT___'; // Method for element creation

function create(name, ns = svg) {
  // create element
  return globals.document.createElementNS(ns, name);
}
function makeInstance(element, isHTML = false) {
  if (element instanceof Base) return element;

  if (typeof element === 'object') {
    return adopter(element);
  }

  if (element == null) {
    return new elements[root]();
  }

  if (typeof element === 'string' && element.charAt(0) !== '<') {
    return adopter(globals.document.querySelector(element));
  } // Make sure, that HTML elements are created with the correct namespace


  const wrapper = isHTML ? globals.document.createElement('div') : create('svg');
  wrapper.innerHTML = element; // We can use firstChild here because we know,
  // that the first char is < and thus an element

  element = adopter(wrapper.firstChild); // make sure, that element doesnt have its wrapper attached

  wrapper.removeChild(wrapper.firstChild);
  return element;
}
function nodeOrNew(name, node) {
  return node && node.ownerDocument && node instanceof node.ownerDocument.defaultView.Node ? node : create(name);
} // Adopt existing svg elements

function adopt(node) {
  // check for presence of node
  if (!node) return null; // make sure a node isn't already adopted

  if (node.instance instanceof Base) return node.instance;

  if (node.nodeName === '#document-fragment') {
    return new elements.Fragment(node);
  } // initialize variables


  let className = capitalize(node.nodeName || 'Dom'); // Make sure that gradients are adopted correctly

  if (className === 'LinearGradient' || className === 'RadialGradient') {
    className = 'Gradient'; // Fallback to Dom if element is not known
  } else if (!elements[className]) {
    className = 'Dom';
  }

  return new elements[className](node);
}
let adopter = adopt;
function mockAdopt(mock = adopt) {
  adopter = mock;
}
function register(element, name = element.name, asRoot = false) {
  elements[name] = element;
  if (asRoot) elements[root] = element;
  addMethodNames(Object.getOwnPropertyNames(element.prototype));
  return element;
}
function getClass(name) {
  return elements[name];
} // Element id sequence

let did = 1000; // Get next named element id

function eid(name) {
  return 'Svgjs' + capitalize(name) + did++;
} // Deep new id assignment

function assignNewId(node) {
  // do the same for SVG child nodes as well
  for (let i = node.children.length - 1; i >= 0; i--) {
    assignNewId(node.children[i]);
  }

  if (node.id) {
    node.id = eid(node.nodeName);
    return node;
  }

  return node;
} // Method for extending objects

function extend(modules, methods) {
  let key, i;
  modules = Array.isArray(modules) ? modules : [modules];

  for (i = modules.length - 1; i >= 0; i--) {
    for (key in methods) {
      modules[i].prototype[key] = methods[key];
    }
  }
}
function wrapWithAttrCheck(fn) {
  return function (...args) {
    const o = args[args.length - 1];

    if (o && o.constructor === Object && !(o instanceof Array)) {
      return fn.apply(this, args.slice(0, -1)).attr(o);
    } else {
      return fn.apply(this, args);
    }
  };
}

function siblings() {
  return this.parent().children();
} // Get the current position siblings

function position() {
  return this.parent().index(this);
} // Get the next element (will return null if there is none)

function next() {
  return this.siblings()[this.position() + 1];
} // Get the next element (will return null if there is none)

function prev() {
  return this.siblings()[this.position() - 1];
} // Send given element one step forward

function forward() {
  const i = this.position();
  const p = this.parent(); // move node one step forward

  p.add(this.remove(), i + 1);
  return this;
} // Send given element one step backward

function backward() {
  const i = this.position();
  const p = this.parent();
  p.add(this.remove(), i ? i - 1 : 0);
  return this;
} // Send given element all the way to the front

function front() {
  const p = this.parent(); // Move node forward

  p.add(this.remove());
  return this;
} // Send given element all the way to the back

function back() {
  const p = this.parent(); // Move node back

  p.add(this.remove(), 0);
  return this;
} // Inserts a given element before the targeted element

function before(element) {
  element = makeInstance(element);
  element.remove();
  const i = this.position();
  this.parent().add(element, i);
  return this;
} // Inserts a given element after the targeted element

function after(element) {
  element = makeInstance(element);
  element.remove();
  const i = this.position();
  this.parent().add(element, i + 1);
  return this;
}
function insertBefore(element) {
  element = makeInstance(element);
  element.before(this);
  return this;
}
function insertAfter(element) {
  element = makeInstance(element);
  element.after(this);
  return this;
}
registerMethods('Dom', {
  siblings,
  position,
  next,
  prev,
  forward,
  backward,
  front,
  back,
  before,
  after,
  insertBefore,
  insertAfter
});

// Parse unit value
const numberAndUnit = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i; // Parse hex value

const hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i; // Parse rgb value

const rgb = /rgb\((\d+),(\d+),(\d+)\)/; // Parse reference id

const reference = /(#[a-z_][a-z0-9\-_]*)/i; // splits a transformation chain

const transforms = /\)\s*,?\s*/; // Whitespace

const whitespace = /\s/g; // Test hex value

const isHex = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i; // Test rgb value

const isRgb = /^rgb\(/; // Test for blank string

const isBlank = /^(\s+)?$/; // Test for numeric string

const isNumber = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i; // Test for image url

const isImage = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i; // split at whitespace and comma

const delimiter = /[\s,]+/; // Test for path letter

const isPathLetter = /[MLHVCSQTAZ]/i;

var regex = {
  __proto__: null,
  numberAndUnit: numberAndUnit,
  hex: hex,
  rgb: rgb,
  reference: reference,
  transforms: transforms,
  whitespace: whitespace,
  isHex: isHex,
  isRgb: isRgb,
  isBlank: isBlank,
  isNumber: isNumber,
  isImage: isImage,
  delimiter: delimiter,
  isPathLetter: isPathLetter
};

function classes() {
  const attr = this.attr('class');
  return attr == null ? [] : attr.trim().split(delimiter);
} // Return true if class exists on the node, false otherwise

function hasClass(name) {
  return this.classes().indexOf(name) !== -1;
} // Add class to the node

function addClass(name) {
  if (!this.hasClass(name)) {
    const array = this.classes();
    array.push(name);
    this.attr('class', array.join(' '));
  }

  return this;
} // Remove class from the node

function removeClass(name) {
  if (this.hasClass(name)) {
    this.attr('class', this.classes().filter(function (c) {
      return c !== name;
    }).join(' '));
  }

  return this;
} // Toggle the presence of a class on the node

function toggleClass(name) {
  return this.hasClass(name) ? this.removeClass(name) : this.addClass(name);
}
registerMethods('Dom', {
  classes,
  hasClass,
  addClass,
  removeClass,
  toggleClass
});

function css(style, val) {
  const ret = {};

  if (arguments.length === 0) {
    // get full style as object
    this.node.style.cssText.split(/\s*;\s*/).filter(function (el) {
      return !!el.length;
    }).forEach(function (el) {
      const t = el.split(/\s*:\s*/);
      ret[t[0]] = t[1];
    });
    return ret;
  }

  if (arguments.length < 2) {
    // get style properties as array
    if (Array.isArray(style)) {
      for (const name of style) {
        const cased = camelCase(name);
        ret[name] = this.node.style[cased];
      }

      return ret;
    } // get style for property


    if (typeof style === 'string') {
      return this.node.style[camelCase(style)];
    } // set styles in object


    if (typeof style === 'object') {
      for (const name in style) {
        // set empty string if null/undefined/'' was given
        this.node.style[camelCase(name)] = style[name] == null || isBlank.test(style[name]) ? '' : style[name];
      }
    }
  } // set style for property


  if (arguments.length === 2) {
    this.node.style[camelCase(style)] = val == null || isBlank.test(val) ? '' : val;
  }

  return this;
} // Show element

function show() {
  return this.css('display', '');
} // Hide element

function hide() {
  return this.css('display', 'none');
} // Is element visible?

function visible() {
  return this.css('display') !== 'none';
}
registerMethods('Dom', {
  css,
  show,
  hide,
  visible
});

function data(a, v, r) {
  if (a == null) {
    // get an object of attributes
    return this.data(map(filter(this.node.attributes, el => el.nodeName.indexOf('data-') === 0), el => el.nodeName.slice(5)));
  } else if (a instanceof Array) {
    const data = {};

    for (const key of a) {
      data[key] = this.data(key);
    }

    return data;
  } else if (typeof a === 'object') {
    for (v in a) {
      this.data(v, a[v]);
    }
  } else if (arguments.length < 2) {
    try {
      return JSON.parse(this.attr('data-' + a));
    } catch (e) {
      return this.attr('data-' + a);
    }
  } else {
    this.attr('data-' + a, v === null ? null : r === true || typeof v === 'string' || typeof v === 'number' ? v : JSON.stringify(v));
  }

  return this;
}
registerMethods('Dom', {
  data
});

function remember(k, v) {
  // remember every item in an object individually
  if (typeof arguments[0] === 'object') {
    for (const key in k) {
      this.remember(key, k[key]);
    }
  } else if (arguments.length === 1) {
    // retrieve memory
    return this.memory()[k];
  } else {
    // store memory
    this.memory()[k] = v;
  }

  return this;
} // Erase a given memory

function forget() {
  if (arguments.length === 0) {
    this._memory = {};
  } else {
    for (let i = arguments.length - 1; i >= 0; i--) {
      delete this.memory()[arguments[i]];
    }
  }

  return this;
} // This triggers creation of a new hidden class which is not performant
// However, this function is not rarely used so it will not happen frequently
// Return local memory object

function memory() {
  return this._memory = this._memory || {};
}
registerMethods('Dom', {
  remember,
  forget,
  memory
});

function sixDigitHex(hex) {
  return hex.length === 4 ? ['#', hex.substring(1, 2), hex.substring(1, 2), hex.substring(2, 3), hex.substring(2, 3), hex.substring(3, 4), hex.substring(3, 4)].join('') : hex;
}

function componentHex(component) {
  const integer = Math.round(component);
  const bounded = Math.max(0, Math.min(255, integer));
  const hex = bounded.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function is(object, space) {
  for (let i = space.length; i--;) {
    if (object[space[i]] == null) {
      return false;
    }
  }

  return true;
}

function getParameters(a, b) {
  const params = is(a, 'rgb') ? {
    _a: a.r,
    _b: a.g,
    _c: a.b,
    _d: 0,
    space: 'rgb'
  } : is(a, 'xyz') ? {
    _a: a.x,
    _b: a.y,
    _c: a.z,
    _d: 0,
    space: 'xyz'
  } : is(a, 'hsl') ? {
    _a: a.h,
    _b: a.s,
    _c: a.l,
    _d: 0,
    space: 'hsl'
  } : is(a, 'lab') ? {
    _a: a.l,
    _b: a.a,
    _c: a.b,
    _d: 0,
    space: 'lab'
  } : is(a, 'lch') ? {
    _a: a.l,
    _b: a.c,
    _c: a.h,
    _d: 0,
    space: 'lch'
  } : is(a, 'cmyk') ? {
    _a: a.c,
    _b: a.m,
    _c: a.y,
    _d: a.k,
    space: 'cmyk'
  } : {
    _a: 0,
    _b: 0,
    _c: 0,
    space: 'rgb'
  };
  params.space = b || params.space;
  return params;
}

function cieSpace(space) {
  if (space === 'lab' || space === 'xyz' || space === 'lch') {
    return true;
  } else {
    return false;
  }
}

function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

class Color {
  constructor(...inputs) {
    this.init(...inputs);
  } // Test if given value is a color


  static isColor(color) {
    return color && (color instanceof Color || this.isRgb(color) || this.test(color));
  } // Test if given value is an rgb object


  static isRgb(color) {
    return color && typeof color.r === 'number' && typeof color.g === 'number' && typeof color.b === 'number';
  }
  /*
  Generating random colors
  */


  static random(mode = 'vibrant', t, u) {
    // Get the math modules
    const {
      random,
      round,
      sin,
      PI: pi
    } = Math; // Run the correct generator

    if (mode === 'vibrant') {
      const l = (81 - 57) * random() + 57;
      const c = (83 - 45) * random() + 45;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'sine') {
      t = t == null ? random() : t;
      const r = round(80 * sin(2 * pi * t / 0.5 + 0.01) + 150);
      const g = round(50 * sin(2 * pi * t / 0.5 + 4.6) + 200);
      const b = round(100 * sin(2 * pi * t / 0.5 + 2.3) + 150);
      const color = new Color(r, g, b);
      return color;
    } else if (mode === 'pastel') {
      const l = (94 - 86) * random() + 86;
      const c = (26 - 9) * random() + 9;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'dark') {
      const l = 10 + 10 * random();
      const c = (125 - 75) * random() + 86;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'rgb') {
      const r = 255 * random();
      const g = 255 * random();
      const b = 255 * random();
      const color = new Color(r, g, b);
      return color;
    } else if (mode === 'lab') {
      const l = 100 * random();
      const a = 256 * random() - 128;
      const b = 256 * random() - 128;
      const color = new Color(l, a, b, 'lab');
      return color;
    } else if (mode === 'grey') {
      const grey = 255 * random();
      const color = new Color(grey, grey, grey);
      return color;
    } else {
      throw new Error('Unsupported random color mode');
    }
  } // Test if given value is a color string


  static test(color) {
    return typeof color === 'string' && (isHex.test(color) || isRgb.test(color));
  }

  cmyk() {
    // Get the rgb values for the current color
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const [r, g, b] = [_a, _b, _c].map(v => v / 255); // Get the cmyk values in an unbounded format

    const k = Math.min(1 - r, 1 - g, 1 - b);

    if (k === 1) {
      // Catch the black case
      return new Color(0, 0, 0, 1, 'cmyk');
    }

    const c = (1 - r - k) / (1 - k);
    const m = (1 - g - k) / (1 - k);
    const y = (1 - b - k) / (1 - k); // Construct the new color

    const color = new Color(c, m, y, k, 'cmyk');
    return color;
  }

  hsl() {
    // Get the rgb values
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const [r, g, b] = [_a, _b, _c].map(v => v / 255); // Find the maximum and minimum values to get the lightness

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2; // If the r, g, v values are identical then we are grey

    const isGrey = max === min; // Calculate the hue and saturation

    const delta = max - min;
    const s = isGrey ? 0 : l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    const h = isGrey ? 0 : max === r ? ((g - b) / delta + (g < b ? 6 : 0)) / 6 : max === g ? ((b - r) / delta + 2) / 6 : max === b ? ((r - g) / delta + 4) / 6 : 0; // Construct and return the new color

    const color = new Color(360 * h, 100 * s, 100 * l, 'hsl');
    return color;
  }

  init(a = 0, b = 0, c = 0, d = 0, space = 'rgb') {
    // This catches the case when a falsy value is passed like ''
    a = !a ? 0 : a; // Reset all values in case the init function is rerun with new color space

    if (this.space) {
      for (const component in this.space) {
        delete this[this.space[component]];
      }
    }

    if (typeof a === 'number') {
      // Allow for the case that we don't need d...
      space = typeof d === 'string' ? d : space;
      d = typeof d === 'string' ? 0 : d; // Assign the values straight to the color

      Object.assign(this, {
        _a: a,
        _b: b,
        _c: c,
        _d: d,
        space
      }); // If the user gave us an array, make the color from it
    } else if (a instanceof Array) {
      this.space = b || (typeof a[3] === 'string' ? a[3] : a[4]) || 'rgb';
      Object.assign(this, {
        _a: a[0],
        _b: a[1],
        _c: a[2],
        _d: a[3] || 0
      });
    } else if (a instanceof Object) {
      // Set the object up and assign its values directly
      const values = getParameters(a, b);
      Object.assign(this, values);
    } else if (typeof a === 'string') {
      if (isRgb.test(a)) {
        const noWhitespace = a.replace(whitespace, '');
        const [_a, _b, _c] = rgb.exec(noWhitespace).slice(1, 4).map(v => parseInt(v));
        Object.assign(this, {
          _a,
          _b,
          _c,
          _d: 0,
          space: 'rgb'
        });
      } else if (isHex.test(a)) {
        const hexParse = v => parseInt(v, 16);

        const [, _a, _b, _c] = hex.exec(sixDigitHex(a)).map(hexParse);
        Object.assign(this, {
          _a,
          _b,
          _c,
          _d: 0,
          space: 'rgb'
        });
      } else throw Error('Unsupported string format, can\'t construct Color');
    } // Now add the components as a convenience


    const {
      _a,
      _b,
      _c,
      _d
    } = this;
    const components = this.space === 'rgb' ? {
      r: _a,
      g: _b,
      b: _c
    } : this.space === 'xyz' ? {
      x: _a,
      y: _b,
      z: _c
    } : this.space === 'hsl' ? {
      h: _a,
      s: _b,
      l: _c
    } : this.space === 'lab' ? {
      l: _a,
      a: _b,
      b: _c
    } : this.space === 'lch' ? {
      l: _a,
      c: _b,
      h: _c
    } : this.space === 'cmyk' ? {
      c: _a,
      m: _b,
      y: _c,
      k: _d
    } : {};
    Object.assign(this, components);
  }

  lab() {
    // Get the xyz color
    const {
      x,
      y,
      z
    } = this.xyz(); // Get the lab components

    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z); // Construct and return a new color

    const color = new Color(l, a, b, 'lab');
    return color;
  }

  lch() {
    // Get the lab color directly
    const {
      l,
      a,
      b
    } = this.lab(); // Get the chromaticity and the hue using polar coordinates

    const c = Math.sqrt(a ** 2 + b ** 2);
    let h = 180 * Math.atan2(b, a) / Math.PI;

    if (h < 0) {
      h *= -1;
      h = 360 - h;
    } // Make a new color and return it


    const color = new Color(l, c, h, 'lch');
    return color;
  }
  /*
  Conversion Methods
  */


  rgb() {
    if (this.space === 'rgb') {
      return this;
    } else if (cieSpace(this.space)) {
      // Convert to the xyz color space
      let {
        x,
        y,
        z
      } = this;

      if (this.space === 'lab' || this.space === 'lch') {
        // Get the values in the lab space
        let {
          l,
          a,
          b
        } = this;

        if (this.space === 'lch') {
          const {
            c,
            h
          } = this;
          const dToR = Math.PI / 180;
          a = c * Math.cos(dToR * h);
          b = c * Math.sin(dToR * h);
        } // Undo the nonlinear function


        const yL = (l + 16) / 116;
        const xL = a / 500 + yL;
        const zL = yL - b / 200; // Get the xyz values

        const ct = 16 / 116;
        const mx = 0.008856;
        const nm = 7.787;
        x = 0.95047 * (xL ** 3 > mx ? xL ** 3 : (xL - ct) / nm);
        y = 1.00000 * (yL ** 3 > mx ? yL ** 3 : (yL - ct) / nm);
        z = 1.08883 * (zL ** 3 > mx ? zL ** 3 : (zL - ct) / nm);
      } // Convert xyz to unbounded rgb values


      const rU = x * 3.2406 + y * -1.5372 + z * -0.4986;
      const gU = x * -0.9689 + y * 1.8758 + z * 0.0415;
      const bU = x * 0.0557 + y * -0.2040 + z * 1.0570; // Convert the values to true rgb values

      const pow = Math.pow;
      const bd = 0.0031308;
      const r = rU > bd ? 1.055 * pow(rU, 1 / 2.4) - 0.055 : 12.92 * rU;
      const g = gU > bd ? 1.055 * pow(gU, 1 / 2.4) - 0.055 : 12.92 * gU;
      const b = bU > bd ? 1.055 * pow(bU, 1 / 2.4) - 0.055 : 12.92 * bU; // Make and return the color

      const color = new Color(255 * r, 255 * g, 255 * b);
      return color;
    } else if (this.space === 'hsl') {
      // https://bgrins.github.io/TinyColor/docs/tinycolor.html
      // Get the current hsl values
      let {
        h,
        s,
        l
      } = this;
      h /= 360;
      s /= 100;
      l /= 100; // If we are grey, then just make the color directly

      if (s === 0) {
        l *= 255;
        const color = new Color(l, l, l);
        return color;
      } // TODO I have no idea what this does :D If you figure it out, tell me!


      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q; // Get the rgb values

      const r = 255 * hueToRgb(p, q, h + 1 / 3);
      const g = 255 * hueToRgb(p, q, h);
      const b = 255 * hueToRgb(p, q, h - 1 / 3); // Make a new color

      const color = new Color(r, g, b);
      return color;
    } else if (this.space === 'cmyk') {
      // https://gist.github.com/felipesabino/5066336
      // Get the normalised cmyk values
      const {
        c,
        m,
        y,
        k
      } = this; // Get the rgb values

      const r = 255 * (1 - Math.min(1, c * (1 - k) + k));
      const g = 255 * (1 - Math.min(1, m * (1 - k) + k));
      const b = 255 * (1 - Math.min(1, y * (1 - k) + k)); // Form the color and return it

      const color = new Color(r, g, b);
      return color;
    } else {
      return this;
    }
  }

  toArray() {
    const {
      _a,
      _b,
      _c,
      _d,
      space
    } = this;
    return [_a, _b, _c, _d, space];
  }

  toHex() {
    const [r, g, b] = this._clamped().map(componentHex);

    return `#${r}${g}${b}`;
  }

  toRgb() {
    const [rV, gV, bV] = this._clamped();

    const string = `rgb(${rV},${gV},${bV})`;
    return string;
  }

  toString() {
    return this.toHex();
  }

  xyz() {
    // Normalise the red, green and blue values
    const {
      _a: r255,
      _b: g255,
      _c: b255
    } = this.rgb();
    const [r, g, b] = [r255, g255, b255].map(v => v / 255); // Convert to the lab rgb space

    const rL = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    const gL = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    const bL = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92; // Convert to the xyz color space without bounding the values

    const xU = (rL * 0.4124 + gL * 0.3576 + bL * 0.1805) / 0.95047;
    const yU = (rL * 0.2126 + gL * 0.7152 + bL * 0.0722) / 1.00000;
    const zU = (rL * 0.0193 + gL * 0.1192 + bL * 0.9505) / 1.08883; // Get the proper xyz values by applying the bounding

    const x = xU > 0.008856 ? Math.pow(xU, 1 / 3) : 7.787 * xU + 16 / 116;
    const y = yU > 0.008856 ? Math.pow(yU, 1 / 3) : 7.787 * yU + 16 / 116;
    const z = zU > 0.008856 ? Math.pow(zU, 1 / 3) : 7.787 * zU + 16 / 116; // Make and return the color

    const color = new Color(x, y, z, 'xyz');
    return color;
  }
  /*
  Input and Output methods
  */


  _clamped() {
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const {
      max,
      min,
      round
    } = Math;

    const format = v => max(0, min(round(v), 255));

    return [_a, _b, _c].map(format);
  }
  /*
  Constructing colors
  */


}

class Point {
  // Initialize
  constructor(...args) {
    this.init(...args);
  } // Clone point


  clone() {
    return new Point(this);
  }

  init(x, y) {
    const base = {
      x: 0,
      y: 0
    }; // ensure source as object

    const source = Array.isArray(x) ? {
      x: x[0],
      y: x[1]
    } : typeof x === 'object' ? {
      x: x.x,
      y: x.y
    } : {
      x: x,
      y: y
    }; // merge source

    this.x = source.x == null ? base.x : source.x;
    this.y = source.y == null ? base.y : source.y;
    return this;
  }

  toArray() {
    return [this.x, this.y];
  }

  transform(m) {
    return this.clone().transformO(m);
  } // Transform point with matrix


  transformO(m) {
    if (!Matrix.isMatrixLike(m)) {
      m = new Matrix(m);
    }

    const {
      x,
      y
    } = this; // Perform the matrix multiplication

    this.x = m.a * x + m.c * y + m.e;
    this.y = m.b * x + m.d * y + m.f;
    return this;
  }

}
function point(x, y) {
  return new Point(x, y).transform(this.screenCTM().inverse());
}

function closeEnough(a, b, threshold) {
  return Math.abs(b - a) < (threshold || 1e-6);
}

class Matrix {
  constructor(...args) {
    this.init(...args);
  }

  static formatTransforms(o) {
    // Get all of the parameters required to form the matrix
    const flipBoth = o.flip === 'both' || o.flip === true;
    const flipX = o.flip && (flipBoth || o.flip === 'x') ? -1 : 1;
    const flipY = o.flip && (flipBoth || o.flip === 'y') ? -1 : 1;
    const skewX = o.skew && o.skew.length ? o.skew[0] : isFinite(o.skew) ? o.skew : isFinite(o.skewX) ? o.skewX : 0;
    const skewY = o.skew && o.skew.length ? o.skew[1] : isFinite(o.skew) ? o.skew : isFinite(o.skewY) ? o.skewY : 0;
    const scaleX = o.scale && o.scale.length ? o.scale[0] * flipX : isFinite(o.scale) ? o.scale * flipX : isFinite(o.scaleX) ? o.scaleX * flipX : flipX;
    const scaleY = o.scale && o.scale.length ? o.scale[1] * flipY : isFinite(o.scale) ? o.scale * flipY : isFinite(o.scaleY) ? o.scaleY * flipY : flipY;
    const shear = o.shear || 0;
    const theta = o.rotate || o.theta || 0;
    const origin = new Point(o.origin || o.around || o.ox || o.originX, o.oy || o.originY);
    const ox = origin.x;
    const oy = origin.y; // We need Point to be invalid if nothing was passed because we cannot default to 0 here. Thats why NaN

    const position = new Point(o.position || o.px || o.positionX || NaN, o.py || o.positionY || NaN);
    const px = position.x;
    const py = position.y;
    const translate = new Point(o.translate || o.tx || o.translateX, o.ty || o.translateY);
    const tx = translate.x;
    const ty = translate.y;
    const relative = new Point(o.relative || o.rx || o.relativeX, o.ry || o.relativeY);
    const rx = relative.x;
    const ry = relative.y; // Populate all of the values

    return {
      scaleX,
      scaleY,
      skewX,
      skewY,
      shear,
      theta,
      rx,
      ry,
      tx,
      ty,
      ox,
      oy,
      px,
      py
    };
  }

  static fromArray(a) {
    return {
      a: a[0],
      b: a[1],
      c: a[2],
      d: a[3],
      e: a[4],
      f: a[5]
    };
  }

  static isMatrixLike(o) {
    return o.a != null || o.b != null || o.c != null || o.d != null || o.e != null || o.f != null;
  } // left matrix, right matrix, target matrix which is overwritten


  static matrixMultiply(l, r, o) {
    // Work out the product directly
    const a = l.a * r.a + l.c * r.b;
    const b = l.b * r.a + l.d * r.b;
    const c = l.a * r.c + l.c * r.d;
    const d = l.b * r.c + l.d * r.d;
    const e = l.e + l.a * r.e + l.c * r.f;
    const f = l.f + l.b * r.e + l.d * r.f; // make sure to use local variables because l/r and o could be the same

    o.a = a;
    o.b = b;
    o.c = c;
    o.d = d;
    o.e = e;
    o.f = f;
    return o;
  }

  around(cx, cy, matrix) {
    return this.clone().aroundO(cx, cy, matrix);
  } // Transform around a center point


  aroundO(cx, cy, matrix) {
    const dx = cx || 0;
    const dy = cy || 0;
    return this.translateO(-dx, -dy).lmultiplyO(matrix).translateO(dx, dy);
  } // Clones this matrix


  clone() {
    return new Matrix(this);
  } // Decomposes this matrix into its affine parameters


  decompose(cx = 0, cy = 0) {
    // Get the parameters from the matrix
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;
    const e = this.e;
    const f = this.f; // Figure out if the winding direction is clockwise or counterclockwise

    const determinant = a * d - b * c;
    const ccw = determinant > 0 ? 1 : -1; // Since we only shear in x, we can use the x basis to get the x scale
    // and the rotation of the resulting matrix

    const sx = ccw * Math.sqrt(a * a + b * b);
    const thetaRad = Math.atan2(ccw * b, ccw * a);
    const theta = 180 / Math.PI * thetaRad;
    const ct = Math.cos(thetaRad);
    const st = Math.sin(thetaRad); // We can then solve the y basis vector simultaneously to get the other
    // two affine parameters directly from these parameters

    const lam = (a * c + b * d) / determinant;
    const sy = c * sx / (lam * a - b) || d * sx / (lam * b + a); // Use the translations

    const tx = e - cx + cx * ct * sx + cy * (lam * ct * sx - st * sy);
    const ty = f - cy + cx * st * sx + cy * (lam * st * sx + ct * sy); // Construct the decomposition and return it

    return {
      // Return the affine parameters
      scaleX: sx,
      scaleY: sy,
      shear: lam,
      rotate: theta,
      translateX: tx,
      translateY: ty,
      originX: cx,
      originY: cy,
      // Return the matrix parameters
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  } // Check if two matrices are equal


  equals(other) {
    if (other === this) return true;
    const comp = new Matrix(other);
    return closeEnough(this.a, comp.a) && closeEnough(this.b, comp.b) && closeEnough(this.c, comp.c) && closeEnough(this.d, comp.d) && closeEnough(this.e, comp.e) && closeEnough(this.f, comp.f);
  } // Flip matrix on x or y, at a given offset


  flip(axis, around) {
    return this.clone().flipO(axis, around);
  }

  flipO(axis, around) {
    return axis === 'x' ? this.scaleO(-1, 1, around, 0) : axis === 'y' ? this.scaleO(1, -1, 0, around) : this.scaleO(-1, -1, axis, around || axis); // Define an x, y flip point
  } // Initialize


  init(source) {
    const base = Matrix.fromArray([1, 0, 0, 1, 0, 0]); // ensure source as object

    source = source instanceof Element ? source.matrixify() : typeof source === 'string' ? Matrix.fromArray(source.split(delimiter).map(parseFloat)) : Array.isArray(source) ? Matrix.fromArray(source) : typeof source === 'object' && Matrix.isMatrixLike(source) ? source : typeof source === 'object' ? new Matrix().transform(source) : arguments.length === 6 ? Matrix.fromArray([].slice.call(arguments)) : base; // Merge the source matrix with the base matrix

    this.a = source.a != null ? source.a : base.a;
    this.b = source.b != null ? source.b : base.b;
    this.c = source.c != null ? source.c : base.c;
    this.d = source.d != null ? source.d : base.d;
    this.e = source.e != null ? source.e : base.e;
    this.f = source.f != null ? source.f : base.f;
    return this;
  }

  inverse() {
    return this.clone().inverseO();
  } // Inverses matrix


  inverseO() {
    // Get the current parameters out of the matrix
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;
    const e = this.e;
    const f = this.f; // Invert the 2x2 matrix in the top left

    const det = a * d - b * c;
    if (!det) throw new Error('Cannot invert ' + this); // Calculate the top 2x2 matrix

    const na = d / det;
    const nb = -b / det;
    const nc = -c / det;
    const nd = a / det; // Apply the inverted matrix to the top right

    const ne = -(na * e + nc * f);
    const nf = -(nb * e + nd * f); // Construct the inverted matrix

    this.a = na;
    this.b = nb;
    this.c = nc;
    this.d = nd;
    this.e = ne;
    this.f = nf;
    return this;
  }

  lmultiply(matrix) {
    return this.clone().lmultiplyO(matrix);
  }

  lmultiplyO(matrix) {
    const r = this;
    const l = matrix instanceof Matrix ? matrix : new Matrix(matrix);
    return Matrix.matrixMultiply(l, r, this);
  } // Left multiplies by the given matrix


  multiply(matrix) {
    return this.clone().multiplyO(matrix);
  }

  multiplyO(matrix) {
    // Get the matrices
    const l = this;
    const r = matrix instanceof Matrix ? matrix : new Matrix(matrix);
    return Matrix.matrixMultiply(l, r, this);
  } // Rotate matrix


  rotate(r, cx, cy) {
    return this.clone().rotateO(r, cx, cy);
  }

  rotateO(r, cx = 0, cy = 0) {
    // Convert degrees to radians
    r = radians(r);
    const cos = Math.cos(r);
    const sin = Math.sin(r);
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a * cos - b * sin;
    this.b = b * cos + a * sin;
    this.c = c * cos - d * sin;
    this.d = d * cos + c * sin;
    this.e = e * cos - f * sin + cy * sin - cx * cos + cx;
    this.f = f * cos + e * sin - cx * sin - cy * cos + cy;
    return this;
  } // Scale matrix


  scale(x, y, cx, cy) {
    return this.clone().scaleO(...arguments);
  }

  scaleO(x, y = x, cx = 0, cy = 0) {
    // Support uniform scaling
    if (arguments.length === 3) {
      cy = cx;
      cx = y;
      y = x;
    }

    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a * x;
    this.b = b * y;
    this.c = c * x;
    this.d = d * y;
    this.e = e * x - cx * x + cx;
    this.f = f * y - cy * y + cy;
    return this;
  } // Shear matrix


  shear(a, cx, cy) {
    return this.clone().shearO(a, cx, cy);
  }

  shearO(lx, cx = 0, cy = 0) {
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a + b * lx;
    this.c = c + d * lx;
    this.e = e + f * lx - cy * lx;
    return this;
  } // Skew Matrix


  skew(x, y, cx, cy) {
    return this.clone().skewO(...arguments);
  }

  skewO(x, y = x, cx = 0, cy = 0) {
    // support uniformal skew
    if (arguments.length === 3) {
      cy = cx;
      cx = y;
      y = x;
    } // Convert degrees to radians


    x = radians(x);
    y = radians(y);
    const lx = Math.tan(x);
    const ly = Math.tan(y);
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a + b * lx;
    this.b = b + a * ly;
    this.c = c + d * lx;
    this.d = d + c * ly;
    this.e = e + f * lx - cy * lx;
    this.f = f + e * ly - cx * ly;
    return this;
  } // SkewX


  skewX(x, cx, cy) {
    return this.skew(x, 0, cx, cy);
  } // SkewY


  skewY(y, cx, cy) {
    return this.skew(0, y, cx, cy);
  }

  toArray() {
    return [this.a, this.b, this.c, this.d, this.e, this.f];
  } // Convert matrix to string


  toString() {
    return 'matrix(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ')';
  } // Transform a matrix into another matrix by manipulating the space


  transform(o) {
    // Check if o is a matrix and then left multiply it directly
    if (Matrix.isMatrixLike(o)) {
      const matrix = new Matrix(o);
      return matrix.multiplyO(this);
    } // Get the proposed transformations and the current transformations


    const t = Matrix.formatTransforms(o);
    const current = this;
    const {
      x: ox,
      y: oy
    } = new Point(t.ox, t.oy).transform(current); // Construct the resulting matrix

    const transformer = new Matrix().translateO(t.rx, t.ry).lmultiplyO(current).translateO(-ox, -oy).scaleO(t.scaleX, t.scaleY).skewO(t.skewX, t.skewY).shearO(t.shear).rotateO(t.theta).translateO(ox, oy); // If we want the origin at a particular place, we force it there

    if (isFinite(t.px) || isFinite(t.py)) {
      const origin = new Point(ox, oy).transform(transformer); // TODO: Replace t.px with isFinite(t.px)
      // Doesnt work because t.px is also 0 if it wasnt passed

      const dx = isFinite(t.px) ? t.px - origin.x : 0;
      const dy = isFinite(t.py) ? t.py - origin.y : 0;
      transformer.translateO(dx, dy);
    } // Translate now after positioning


    transformer.translateO(t.tx, t.ty);
    return transformer;
  } // Translate matrix


  translate(x, y) {
    return this.clone().translateO(x, y);
  }

  translateO(x, y) {
    this.e += x || 0;
    this.f += y || 0;
    return this;
  }

  valueOf() {
    return {
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  }

}
function ctm() {
  return new Matrix(this.node.getCTM());
}
function screenCTM() {
  /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
     This is needed because FF does not return the transformation matrix
     for the inner coordinate system when getScreenCTM() is called on nested svgs.
     However all other Browsers do that */
  if (typeof this.isRoot === 'function' && !this.isRoot()) {
    const rect = this.rect(1, 1);
    const m = rect.node.getScreenCTM();
    rect.remove();
    return new Matrix(m);
  }

  return new Matrix(this.node.getScreenCTM());
}
register(Matrix, 'Matrix');

function parser() {
  // Reuse cached element if possible
  if (!parser.nodes) {
    const svg = makeInstance().size(2, 0);
    svg.node.style.cssText = ['opacity: 0', 'position: absolute', 'left: -100%', 'top: -100%', 'overflow: hidden'].join(';');
    svg.attr('focusable', 'false');
    svg.attr('aria-hidden', 'true');
    const path = svg.path().node;
    parser.nodes = {
      svg,
      path
    };
  }

  if (!parser.nodes.svg.node.parentNode) {
    const b = globals.document.body || globals.document.documentElement;
    parser.nodes.svg.addTo(b);
  }

  return parser.nodes;
}

function isNulledBox(box) {
  return !box.width && !box.height && !box.x && !box.y;
}
function domContains(node) {
  return node === globals.document || (globals.document.documentElement.contains || function (node) {
    // This is IE - it does not support contains() for top-level SVGs
    while (node.parentNode) {
      node = node.parentNode;
    }

    return node === globals.document;
  }).call(globals.document.documentElement, node);
}
class Box {
  constructor(...args) {
    this.init(...args);
  }

  addOffset() {
    // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
    this.x += globals.window.pageXOffset;
    this.y += globals.window.pageYOffset;
    return new Box(this);
  }

  init(source) {
    const base = [0, 0, 0, 0];
    source = typeof source === 'string' ? source.split(delimiter).map(parseFloat) : Array.isArray(source) ? source : typeof source === 'object' ? [source.left != null ? source.left : source.x, source.top != null ? source.top : source.y, source.width, source.height] : arguments.length === 4 ? [].slice.call(arguments) : base;
    this.x = source[0] || 0;
    this.y = source[1] || 0;
    this.width = this.w = source[2] || 0;
    this.height = this.h = source[3] || 0; // Add more bounding box properties

    this.x2 = this.x + this.w;
    this.y2 = this.y + this.h;
    this.cx = this.x + this.w / 2;
    this.cy = this.y + this.h / 2;
    return this;
  }

  isNulled() {
    return isNulledBox(this);
  } // Merge rect box with another, return a new instance


  merge(box) {
    const x = Math.min(this.x, box.x);
    const y = Math.min(this.y, box.y);
    const width = Math.max(this.x + this.width, box.x + box.width) - x;
    const height = Math.max(this.y + this.height, box.y + box.height) - y;
    return new Box(x, y, width, height);
  }

  toArray() {
    return [this.x, this.y, this.width, this.height];
  }

  toString() {
    return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height;
  }

  transform(m) {
    if (!(m instanceof Matrix)) {
      m = new Matrix(m);
    }

    let xMin = Infinity;
    let xMax = -Infinity;
    let yMin = Infinity;
    let yMax = -Infinity;
    const pts = [new Point(this.x, this.y), new Point(this.x2, this.y), new Point(this.x, this.y2), new Point(this.x2, this.y2)];
    pts.forEach(function (p) {
      p = p.transform(m);
      xMin = Math.min(xMin, p.x);
      xMax = Math.max(xMax, p.x);
      yMin = Math.min(yMin, p.y);
      yMax = Math.max(yMax, p.y);
    });
    return new Box(xMin, yMin, xMax - xMin, yMax - yMin);
  }

}

function getBox(el, getBBoxFn, retry) {
  let box;

  try {
    // Try to get the box with the provided function
    box = getBBoxFn(el.node); // If the box is worthless and not even in the dom, retry
    // by throwing an error here...

    if (isNulledBox(box) && !domContains(el.node)) {
      throw new Error('Element not in the dom');
    }
  } catch (e) {
    // ... and calling the retry handler here
    box = retry(el);
  }

  return box;
}

function bbox() {
  // Function to get bbox is getBBox()
  const getBBox = node => node.getBBox(); // Take all measures so that a stupid browser renders the element
  // so we can get the bbox from it when we try again


  const retry = el => {
    try {
      const clone = el.clone().addTo(parser().svg).show();
      const box = clone.node.getBBox();
      clone.remove();
      return box;
    } catch (e) {
      // We give up...
      throw new Error(`Getting bbox of element "${el.node.nodeName}" is not possible: ${e.toString()}`);
    }
  };

  const box = getBox(this, getBBox, retry);
  const bbox = new Box(box);
  return bbox;
}
function rbox(el) {
  const getRBox = node => node.getBoundingClientRect();

  const retry = el => {
    // There is no point in trying tricks here because if we insert the element into the dom ourselves
    // it obviously will be at the wrong position
    throw new Error(`Getting rbox of element "${el.node.nodeName}" is not possible`);
  };

  const box = getBox(this, getRBox, retry);
  const rbox = new Box(box); // If an element was passed, we want the bbox in the coordinate system of that element

  if (el) {
    return rbox.transform(el.screenCTM().inverseO());
  } // Else we want it in absolute screen coordinates
  // Therefore we need to add the scrollOffset


  return rbox.addOffset();
} // Checks whether the given point is inside the bounding box

function inside(x, y) {
  const box = this.bbox();
  return x > box.x && y > box.y && x < box.x + box.width && y < box.y + box.height;
}
registerMethods({
  viewbox: {
    viewbox(x, y, width, height) {
      // act as getter
      if (x == null) return new Box(this.attr('viewBox')); // act as setter

      return this.attr('viewBox', new Box(x, y, width, height));
    },

    zoom(level, point) {
      // Its best to rely on the attributes here and here is why:
      // clientXYZ: Doesn't work on non-root svgs because they dont have a CSSBox (silly!)
      // getBoundingClientRect: Doesn't work because Chrome just ignores width and height of nested svgs completely
      //                        that means, their clientRect is always as big as the content.
      //                        Furthermore this size is incorrect if the element is further transformed by its parents
      // computedStyle: Only returns meaningful values if css was used with px. We dont go this route here!
      // getBBox: returns the bounding box of its content - that doesnt help!
      let {
        width,
        height
      } = this.attr(['width', 'height']); // Width and height is a string when a number with a unit is present which we can't use
      // So we try clientXYZ

      if (!width && !height || typeof width === 'string' || typeof height === 'string') {
        width = this.node.clientWidth;
        height = this.node.clientHeight;
      } // Giving up...


      if (!width || !height) {
        throw new Error('Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element');
      }

      const v = this.viewbox();
      const zoomX = width / v.width;
      const zoomY = height / v.height;
      const zoom = Math.min(zoomX, zoomY);

      if (level == null) {
        return zoom;
      }

      let zoomAmount = zoom / level; // Set the zoomAmount to the highest value which is safe to process and recover from
      // The * 100 is a bit of wiggle room for the matrix transformation

      if (zoomAmount === Infinity) zoomAmount = Number.MAX_SAFE_INTEGER / 100;
      point = point || new Point(width / 2 / zoomX + v.x, height / 2 / zoomY + v.y);
      const box = new Box(v).transform(new Matrix({
        scale: zoomAmount,
        origin: point
      }));
      return this.viewbox(box);
    }

  }
});
register(Box, 'Box');

class List extends Array {
  constructor(arr = [], ...args) {
    super(arr, ...args);
    if (typeof arr === 'number') return this;
    this.length = 0;
    this.push(...arr);
  }

}
extend([List], {
  each(fnOrMethodName, ...args) {
    if (typeof fnOrMethodName === 'function') {
      return this.map((el, i, arr) => {
        return fnOrMethodName.call(el, el, i, arr);
      });
    } else {
      return this.map(el => {
        return el[fnOrMethodName](...args);
      });
    }
  },

  toArray() {
    return Array.prototype.concat.apply([], this);
  }

});
const reserved = ['toArray', 'constructor', 'each'];

List.extend = function (methods) {
  methods = methods.reduce((obj, name) => {
    // Don't overwrite own methods
    if (reserved.includes(name)) return obj; // Don't add private methods

    if (name[0] === '_') return obj; // Relay every call to each()

    obj[name] = function (...attrs) {
      return this.each(name, ...attrs);
    };

    return obj;
  }, {});
  extend([List], methods);
};

function baseFind(query, parent) {
  return new List(map((parent || globals.document).querySelectorAll(query), function (node) {
    return adopt(node);
  }));
} // Scoped find method

function find(query) {
  return baseFind(query, this.node);
}
function findOne(query) {
  return adopt(this.node.querySelector(query));
}

let listenerId = 0;
const windowEvents = {};
function getEvents(instance) {
  let n = instance.getEventHolder(); // We dont want to save events in global space

  if (n === globals.window) n = windowEvents;
  if (!n.events) n.events = {};
  return n.events;
}
function getEventTarget(instance) {
  return instance.getEventTarget();
}
function clearEvents(instance) {
  let n = instance.getEventHolder();
  if (n === globals.window) n = windowEvents;
  if (n.events) n.events = {};
} // Add event binder in the SVG namespace

function on(node, events, listener, binding, options) {
  const l = listener.bind(binding || node);
  const instance = makeInstance(node);
  const bag = getEvents(instance);
  const n = getEventTarget(instance); // events can be an array of events or a string of events

  events = Array.isArray(events) ? events : events.split(delimiter); // add id to listener

  if (!listener._svgjsListenerId) {
    listener._svgjsListenerId = ++listenerId;
  }

  events.forEach(function (event) {
    const ev = event.split('.')[0];
    const ns = event.split('.')[1] || '*'; // ensure valid object

    bag[ev] = bag[ev] || {};
    bag[ev][ns] = bag[ev][ns] || {}; // reference listener

    bag[ev][ns][listener._svgjsListenerId] = l; // add listener

    n.addEventListener(ev, l, options || false);
  });
} // Add event unbinder in the SVG namespace

function off(node, events, listener, options) {
  const instance = makeInstance(node);
  const bag = getEvents(instance);
  const n = getEventTarget(instance); // listener can be a function or a number

  if (typeof listener === 'function') {
    listener = listener._svgjsListenerId;
    if (!listener) return;
  } // events can be an array of events or a string or undefined


  events = Array.isArray(events) ? events : (events || '').split(delimiter);
  events.forEach(function (event) {
    const ev = event && event.split('.')[0];
    const ns = event && event.split('.')[1];
    let namespace, l;

    if (listener) {
      // remove listener reference
      if (bag[ev] && bag[ev][ns || '*']) {
        // removeListener
        n.removeEventListener(ev, bag[ev][ns || '*'][listener], options || false);
        delete bag[ev][ns || '*'][listener];
      }
    } else if (ev && ns) {
      // remove all listeners for a namespaced event
      if (bag[ev] && bag[ev][ns]) {
        for (l in bag[ev][ns]) {
          off(n, [ev, ns].join('.'), l);
        }

        delete bag[ev][ns];
      }
    } else if (ns) {
      // remove all listeners for a specific namespace
      for (event in bag) {
        for (namespace in bag[event]) {
          if (ns === namespace) {
            off(n, [event, ns].join('.'));
          }
        }
      }
    } else if (ev) {
      // remove all listeners for the event
      if (bag[ev]) {
        for (namespace in bag[ev]) {
          off(n, [ev, namespace].join('.'));
        }

        delete bag[ev];
      }
    } else {
      // remove all listeners on a given node
      for (event in bag) {
        off(n, event);
      }

      clearEvents(instance);
    }
  });
}
function dispatch(node, event, data, options) {
  const n = getEventTarget(node); // Dispatch event

  if (event instanceof globals.window.Event) {
    n.dispatchEvent(event);
  } else {
    event = new globals.window.CustomEvent(event, {
      detail: data,
      cancelable: true,
      ...options
    });
    n.dispatchEvent(event);
  }

  return event;
}

class EventTarget extends Base {
  addEventListener() {}

  dispatch(event, data, options) {
    return dispatch(this, event, data, options);
  }

  dispatchEvent(event) {
    const bag = this.getEventHolder().events;
    if (!bag) return true;
    const events = bag[event.type];

    for (const i in events) {
      for (const j in events[i]) {
        events[i][j](event);
      }
    }

    return !event.defaultPrevented;
  } // Fire given event


  fire(event, data, options) {
    this.dispatch(event, data, options);
    return this;
  }

  getEventHolder() {
    return this;
  }

  getEventTarget() {
    return this;
  } // Unbind event from listener


  off(event, listener, options) {
    off(this, event, listener, options);
    return this;
  } // Bind given event to listener


  on(event, listener, binding, options) {
    on(this, event, listener, binding, options);
    return this;
  }

  removeEventListener() {}

}
register(EventTarget, 'EventTarget');

function noop() {} // Default animation values

const timeline = {
  duration: 400,
  ease: '>',
  delay: 0
}; // Default attribute values

const attrs = {
  // fill and stroke
  'fill-opacity': 1,
  'stroke-opacity': 1,
  'stroke-width': 0,
  'stroke-linejoin': 'miter',
  'stroke-linecap': 'butt',
  fill: '#000000',
  stroke: '#000000',
  opacity: 1,
  // position
  x: 0,
  y: 0,
  cx: 0,
  cy: 0,
  // size
  width: 0,
  height: 0,
  // radius
  r: 0,
  rx: 0,
  ry: 0,
  // gradient
  offset: 0,
  'stop-opacity': 1,
  'stop-color': '#000000',
  // text
  'text-anchor': 'start'
};

var defaults = {
  __proto__: null,
  noop: noop,
  timeline: timeline,
  attrs: attrs
};

class SVGArray extends Array {
  constructor(...args) {
    super(...args);
    this.init(...args);
  }

  clone() {
    return new this.constructor(this);
  }

  init(arr) {
    // This catches the case, that native map tries to create an array with new Array(1)
    if (typeof arr === 'number') return this;
    this.length = 0;
    this.push(...this.parse(arr));
    return this;
  } // Parse whitespace separated string


  parse(array = []) {
    // If already is an array, no need to parse it
    if (array instanceof Array) return array;
    return array.trim().split(delimiter).map(parseFloat);
  }

  toArray() {
    return Array.prototype.concat.apply([], this);
  }

  toSet() {
    return new Set(this);
  }

  toString() {
    return this.join(' ');
  } // Flattens the array if needed


  valueOf() {
    const ret = [];
    ret.push(...this);
    return ret;
  }

}

class SVGNumber {
  // Initialize
  constructor(...args) {
    this.init(...args);
  }

  convert(unit) {
    return new SVGNumber(this.value, unit);
  } // Divide number


  divide(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this / number, this.unit || number.unit);
  }

  init(value, unit) {
    unit = Array.isArray(value) ? value[1] : unit;
    value = Array.isArray(value) ? value[0] : value; // initialize defaults

    this.value = 0;
    this.unit = unit || ''; // parse value

    if (typeof value === 'number') {
      // ensure a valid numeric value
      this.value = isNaN(value) ? 0 : !isFinite(value) ? value < 0 ? -3.4e+38 : +3.4e+38 : value;
    } else if (typeof value === 'string') {
      unit = value.match(numberAndUnit);

      if (unit) {
        // make value numeric
        this.value = parseFloat(unit[1]); // normalize

        if (unit[5] === '%') {
          this.value /= 100;
        } else if (unit[5] === 's') {
          this.value *= 1000;
        } // store unit


        this.unit = unit[5];
      }
    } else {
      if (value instanceof SVGNumber) {
        this.value = value.valueOf();
        this.unit = value.unit;
      }
    }

    return this;
  } // Subtract number


  minus(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this - number, this.unit || number.unit);
  } // Add number


  plus(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this + number, this.unit || number.unit);
  } // Multiply number


  times(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this * number, this.unit || number.unit);
  }

  toArray() {
    return [this.value, this.unit];
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    return (this.unit === '%' ? ~~(this.value * 1e8) / 1e6 : this.unit === 's' ? this.value / 1e3 : this.value) + this.unit;
  }

  valueOf() {
    return this.value;
  }

}

const hooks = [];
function registerAttrHook(fn) {
  hooks.push(fn);
} // Set svg element attribute

function attr(attr, val, ns) {
  // act as full getter
  if (attr == null) {
    // get an object of attributes
    attr = {};
    val = this.node.attributes;

    for (const node of val) {
      attr[node.nodeName] = isNumber.test(node.nodeValue) ? parseFloat(node.nodeValue) : node.nodeValue;
    }

    return attr;
  } else if (attr instanceof Array) {
    // loop through array and get all values
    return attr.reduce((last, curr) => {
      last[curr] = this.attr(curr);
      return last;
    }, {});
  } else if (typeof attr === 'object' && attr.constructor === Object) {
    // apply every attribute individually if an object is passed
    for (val in attr) this.attr(val, attr[val]);
  } else if (val === null) {
    // remove value
    this.node.removeAttribute(attr);
  } else if (val == null) {
    // act as a getter if the first and only argument is not an object
    val = this.node.getAttribute(attr);
    return val == null ? attrs[attr] : isNumber.test(val) ? parseFloat(val) : val;
  } else {
    // Loop through hooks and execute them to convert value
    val = hooks.reduce((_val, hook) => {
      return hook(attr, _val, this);
    }, val); // ensure correct numeric values (also accepts NaN and Infinity)

    if (typeof val === 'number') {
      val = new SVGNumber(val);
    } else if (Color.isColor(val)) {
      // ensure full hex color
      val = new Color(val);
    } else if (val.constructor === Array) {
      // Check for plain arrays and parse array values
      val = new SVGArray(val);
    } // if the passed attribute is leading...


    if (attr === 'leading') {
      // ... call the leading method instead
      if (this.leading) {
        this.leading(val);
      }
    } else {
      // set given attribute on node
      typeof ns === 'string' ? this.node.setAttributeNS(ns, attr, val.toString()) : this.node.setAttribute(attr, val.toString());
    } // rebuild if required


    if (this.rebuild && (attr === 'font-size' || attr === 'x')) {
      this.rebuild();
    }
  }

  return this;
}

class Dom extends EventTarget {
  constructor(node, attrs) {
    super();
    this.node = node;
    this.type = node.nodeName;

    if (attrs && node !== attrs) {
      this.attr(attrs);
    }
  } // Add given element at a position


  add(element, i) {
    element = makeInstance(element); // If non-root svg nodes are added we have to remove their namespaces

    if (element.removeNamespace && this.node instanceof globals.window.SVGElement) {
      element.removeNamespace();
    }

    if (i == null) {
      this.node.appendChild(element.node);
    } else if (element.node !== this.node.childNodes[i]) {
      this.node.insertBefore(element.node, this.node.childNodes[i]);
    }

    return this;
  } // Add element to given container and return self


  addTo(parent, i) {
    return makeInstance(parent).put(this, i);
  } // Returns all child elements


  children() {
    return new List(map(this.node.children, function (node) {
      return adopt(node);
    }));
  } // Remove all elements in this container


  clear() {
    // remove children
    while (this.node.hasChildNodes()) {
      this.node.removeChild(this.node.lastChild);
    }

    return this;
  } // Clone element


  clone(deep = true) {
    // write dom data to the dom so the clone can pickup the data
    this.writeDataToDom(); // clone element and assign new id

    return new this.constructor(assignNewId(this.node.cloneNode(deep)));
  } // Iterates over all children and invokes a given block


  each(block, deep) {
    const children = this.children();
    let i, il;

    for (i = 0, il = children.length; i < il; i++) {
      block.apply(children[i], [i, children]);

      if (deep) {
        children[i].each(block, deep);
      }
    }

    return this;
  }

  element(nodeName, attrs) {
    return this.put(new Dom(create(nodeName), attrs));
  } // Get first child


  first() {
    return adopt(this.node.firstChild);
  } // Get a element at the given index


  get(i) {
    return adopt(this.node.childNodes[i]);
  }

  getEventHolder() {
    return this.node;
  }

  getEventTarget() {
    return this.node;
  } // Checks if the given element is a child


  has(element) {
    return this.index(element) >= 0;
  }

  html(htmlOrFn, outerHTML) {
    return this.xml(htmlOrFn, outerHTML, html);
  } // Get / set id


  id(id) {
    // generate new id if no id set
    if (typeof id === 'undefined' && !this.node.id) {
      this.node.id = eid(this.type);
    } // don't set directly with this.node.id to make `null` work correctly


    return this.attr('id', id);
  } // Gets index of given element


  index(element) {
    return [].slice.call(this.node.childNodes).indexOf(element.node);
  } // Get the last child


  last() {
    return adopt(this.node.lastChild);
  } // matches the element vs a css selector


  matches(selector) {
    const el = this.node;
    const matcher = el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector || null;
    return matcher && matcher.call(el, selector);
  } // Returns the parent element instance


  parent(type) {
    let parent = this; // check for parent

    if (!parent.node.parentNode) return null; // get parent element

    parent = adopt(parent.node.parentNode);
    if (!type) return parent; // loop trough ancestors if type is given

    do {
      if (typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent;
    } while (parent = adopt(parent.node.parentNode));

    return parent;
  } // Basically does the same as `add()` but returns the added element instead


  put(element, i) {
    element = makeInstance(element);
    this.add(element, i);
    return element;
  } // Add element to given container and return container


  putIn(parent, i) {
    return makeInstance(parent).add(this, i);
  } // Remove element


  remove() {
    if (this.parent()) {
      this.parent().removeElement(this);
    }

    return this;
  } // Remove a given child


  removeElement(element) {
    this.node.removeChild(element.node);
    return this;
  } // Replace this with element


  replace(element) {
    element = makeInstance(element);

    if (this.node.parentNode) {
      this.node.parentNode.replaceChild(element.node, this.node);
    }

    return element;
  }

  round(precision = 2, map = null) {
    const factor = 10 ** precision;
    const attrs = this.attr(map);

    for (const i in attrs) {
      if (typeof attrs[i] === 'number') {
        attrs[i] = Math.round(attrs[i] * factor) / factor;
      }
    }

    this.attr(attrs);
    return this;
  } // Import / Export raw svg


  svg(svgOrFn, outerSVG) {
    return this.xml(svgOrFn, outerSVG, svg);
  } // Return id on string conversion


  toString() {
    return this.id();
  }

  words(text) {
    // This is faster than removing all children and adding a new one
    this.node.textContent = text;
    return this;
  }

  wrap(node) {
    const parent = this.parent();

    if (!parent) {
      return this.addTo(node);
    }

    const position = parent.index(this);
    return parent.put(node, position).put(this);
  } // write svgjs data to the dom


  writeDataToDom() {
    // dump variables recursively
    this.each(function () {
      this.writeDataToDom();
    });
    return this;
  } // Import / Export raw svg


  xml(xmlOrFn, outerXML, ns) {
    if (typeof xmlOrFn === 'boolean') {
      ns = outerXML;
      outerXML = xmlOrFn;
      xmlOrFn = null;
    } // act as getter if no svg string is given


    if (xmlOrFn == null || typeof xmlOrFn === 'function') {
      // The default for exports is, that the outerNode is included
      outerXML = outerXML == null ? true : outerXML; // write svgjs data to the dom

      this.writeDataToDom();
      let current = this; // An export modifier was passed

      if (xmlOrFn != null) {
        current = adopt(current.node.cloneNode(true)); // If the user wants outerHTML we need to process this node, too

        if (outerXML) {
          const result = xmlOrFn(current);
          current = result || current; // The user does not want this node? Well, then he gets nothing

          if (result === false) return '';
        } // Deep loop through all children and apply modifier


        current.each(function () {
          const result = xmlOrFn(this);

          const _this = result || this; // If modifier returns false, discard node


          if (result === false) {
            this.remove(); // If modifier returns new node, use it
          } else if (result && this !== _this) {
            this.replace(_this);
          }
        }, true);
      } // Return outer or inner content


      return outerXML ? current.node.outerHTML : current.node.innerHTML;
    } // Act as setter if we got a string
    // The default for import is, that the current node is not replaced


    outerXML = outerXML == null ? false : outerXML; // Create temporary holder

    const well = create('wrapper', ns);
    const fragment = globals.document.createDocumentFragment(); // Dump raw svg

    well.innerHTML = xmlOrFn; // Transplant nodes into the fragment

    for (let len = well.children.length; len--;) {
      fragment.appendChild(well.firstElementChild);
    }

    const parent = this.parent(); // Add the whole fragment at once

    return outerXML ? this.replace(fragment) && parent : this.add(fragment);
  }

}
extend(Dom, {
  attr,
  find,
  findOne
});
register(Dom, 'Dom');

class Element extends Dom {
  constructor(node, attrs) {
    super(node, attrs); // initialize data object

    this.dom = {}; // create circular reference

    this.node.instance = this;

    if (node.hasAttribute('svgjs:data')) {
      // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
      this.setData(JSON.parse(node.getAttribute('svgjs:data')) || {});
    }
  } // Move element by its center


  center(x, y) {
    return this.cx(x).cy(y);
  } // Move by center over x-axis


  cx(x) {
    return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2);
  } // Move by center over y-axis


  cy(y) {
    return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2);
  } // Get defs


  defs() {
    const root = this.root();
    return root && root.defs();
  } // Relative move over x and y axes


  dmove(x, y) {
    return this.dx(x).dy(y);
  } // Relative move over x axis


  dx(x = 0) {
    return this.x(new SVGNumber(x).plus(this.x()));
  } // Relative move over y axis


  dy(y = 0) {
    return this.y(new SVGNumber(y).plus(this.y()));
  }

  getEventHolder() {
    return this;
  } // Set height of element


  height(height) {
    return this.attr('height', height);
  } // Move element to given x and y values


  move(x, y) {
    return this.x(x).y(y);
  } // return array of all ancestors of given type up to the root svg


  parents(until = this.root()) {
    const isSelector = typeof until === 'string';

    if (!isSelector) {
      until = makeInstance(until);
    }

    const parents = new List();
    let parent = this;

    while ((parent = parent.parent()) && parent.node !== globals.document && parent.nodeName !== '#document-fragment') {
      parents.push(parent);

      if (!isSelector && parent.node === until.node) {
        break;
      }

      if (isSelector && parent.matches(until)) {
        break;
      }

      if (parent.node === this.root().node) {
        // We worked our way to the root and didn't match `until`
        return null;
      }
    }

    return parents;
  } // Get referenced element form attribute value


  reference(attr) {
    attr = this.attr(attr);
    if (!attr) return null;
    const m = (attr + '').match(reference);
    return m ? makeInstance(m[1]) : null;
  } // Get parent document


  root() {
    const p = this.parent(getClass(root));
    return p && p.root();
  } // set given data to the elements data property


  setData(o) {
    this.dom = o;
    return this;
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.width(new SVGNumber(p.width)).height(new SVGNumber(p.height));
  } // Set width of element


  width(width) {
    return this.attr('width', width);
  } // write svgjs data to the dom


  writeDataToDom() {
    // remove previously set data
    this.node.removeAttribute('svgjs:data');

    if (Object.keys(this.dom).length) {
      this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)); // see #428
    }

    return super.writeDataToDom();
  } // Move over x-axis


  x(x) {
    return this.attr('x', x);
  } // Move over y-axis


  y(y) {
    return this.attr('y', y);
  }

}
extend(Element, {
  bbox,
  rbox,
  inside,
  point,
  ctm,
  screenCTM
});
register(Element, 'Element');

const sugar = {
  stroke: ['color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset'],
  fill: ['color', 'opacity', 'rule'],
  prefix: function (t, a) {
    return a === 'color' ? t : t + '-' + a;
  }
} // Add sugar for fill and stroke
;
['fill', 'stroke'].forEach(function (m) {
  const extension = {};
  let i;

  extension[m] = function (o) {
    if (typeof o === 'undefined') {
      return this.attr(m);
    }

    if (typeof o === 'string' || o instanceof Color || Color.isRgb(o) || o instanceof Element) {
      this.attr(m, o);
    } else {
      // set all attributes from sugar.fill and sugar.stroke list
      for (i = sugar[m].length - 1; i >= 0; i--) {
        if (o[sugar[m][i]] != null) {
          this.attr(sugar.prefix(m, sugar[m][i]), o[sugar[m][i]]);
        }
      }
    }

    return this;
  };

  registerMethods(['Element', 'Runner'], extension);
});
registerMethods(['Element', 'Runner'], {
  // Let the user set the matrix directly
  matrix: function (mat, b, c, d, e, f) {
    // Act as a getter
    if (mat == null) {
      return new Matrix(this);
    } // Act as a setter, the user can pass a matrix or a set of numbers


    return this.attr('transform', new Matrix(mat, b, c, d, e, f));
  },
  // Map rotation to transform
  rotate: function (angle, cx, cy) {
    return this.transform({
      rotate: angle,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map skew to transform
  skew: function (x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      skew: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      skew: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  shear: function (lam, cx, cy) {
    return this.transform({
      shear: lam,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map scale to transform
  scale: function (x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      scale: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      scale: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  // Map translate to transform
  translate: function (x, y) {
    return this.transform({
      translate: [x, y]
    }, true);
  },
  // Map relative translations to transform
  relative: function (x, y) {
    return this.transform({
      relative: [x, y]
    }, true);
  },
  // Map flip to transform
  flip: function (direction = 'both', origin = 'center') {
    if ('xybothtrue'.indexOf(direction) === -1) {
      origin = direction;
      direction = 'both';
    }

    return this.transform({
      flip: direction,
      origin: origin
    }, true);
  },
  // Opacity
  opacity: function (value) {
    return this.attr('opacity', value);
  }
});
registerMethods('radius', {
  // Add x and y radius
  radius: function (x, y = x) {
    const type = (this._element || this).type;
    return type === 'radialGradient' ? this.attr('r', new SVGNumber(x)) : this.rx(x).ry(y);
  }
});
registerMethods('Path', {
  // Get path length
  length: function () {
    return this.node.getTotalLength();
  },
  // Get point at length
  pointAt: function (length) {
    return new Point(this.node.getPointAtLength(length));
  }
});
registerMethods(['Element', 'Runner'], {
  // Set font
  font: function (a, v) {
    if (typeof a === 'object') {
      for (v in a) this.font(v, a[v]);

      return this;
    }

    return a === 'leading' ? this.leading(v) : a === 'anchor' ? this.attr('text-anchor', v) : a === 'size' || a === 'family' || a === 'weight' || a === 'stretch' || a === 'variant' || a === 'style' ? this.attr('font-' + a, v) : this.attr(a, v);
  }
}); // Add events to elements

const methods = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mouseleave', 'touchstart', 'touchmove', 'touchleave', 'touchend', 'touchcancel'].reduce(function (last, event) {
  // add event to Element
  const fn = function (f) {
    if (f === null) {
      this.off(event);
    } else {
      this.on(event, f);
    }

    return this;
  };

  last[event] = fn;
  return last;
}, {});
registerMethods('Element', methods);

function untransform() {
  return this.attr('transform', null);
} // merge the whole transformation chain into one matrix and returns it

function matrixify() {
  const matrix = (this.attr('transform') || '' // split transformations
  ).split(transforms).slice(0, -1).map(function (str) {
    // generate key => value pairs
    const kv = str.trim().split('(');
    return [kv[0], kv[1].split(delimiter).map(function (str) {
      return parseFloat(str);
    })];
  }).reverse() // merge every transformation into one matrix
  .reduce(function (matrix, transform) {
    if (transform[0] === 'matrix') {
      return matrix.lmultiply(Matrix.fromArray(transform[1]));
    }

    return matrix[transform[0]].apply(matrix, transform[1]);
  }, new Matrix());
  return matrix;
} // add an element to another parent without changing the visual representation on the screen

function toParent(parent, i) {
  if (this === parent) return this;
  const ctm = this.screenCTM();
  const pCtm = parent.screenCTM().inverse();
  this.addTo(parent, i).untransform().transform(pCtm.multiply(ctm));
  return this;
} // same as above with parent equals root-svg

function toRoot(i) {
  return this.toParent(this.root(), i);
} // Add transformations

function transform(o, relative) {
  // Act as a getter if no object was passed
  if (o == null || typeof o === 'string') {
    const decomposed = new Matrix(this).decompose();
    return o == null ? decomposed : decomposed[o];
  }

  if (!Matrix.isMatrixLike(o)) {
    // Set the origin according to the defined transform
    o = { ...o,
      origin: getOrigin(o, this)
    };
  } // The user can pass a boolean, an Element or an Matrix or nothing


  const cleanRelative = relative === true ? this : relative || false;
  const result = new Matrix(cleanRelative).transform(o);
  return this.attr('transform', result);
}
registerMethods('Element', {
  untransform,
  matrixify,
  toParent,
  toRoot,
  transform
});

class Container extends Element {
  flatten(parent = this, index) {
    this.each(function () {
      if (this instanceof Container) {
        return this.flatten().ungroup();
      }
    });
    return this;
  }

  ungroup(parent = this.parent(), index = parent.index(this)) {
    // when parent != this, we want append all elements to the end
    index = index === -1 ? parent.children().length : index;
    this.each(function (i, children) {
      // reverse each
      return children[children.length - i - 1].toParent(parent, index);
    });
    return this.remove();
  }

}
register(Container, 'Container');

class Defs extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('defs', node), attrs);
  }

  flatten() {
    return this;
  }

  ungroup() {
    return this;
  }

}
register(Defs, 'Defs');

class Shape extends Element {}
register(Shape, 'Shape');

function rx(rx) {
  return this.attr('rx', rx);
} // Radius y value

function ry(ry) {
  return this.attr('ry', ry);
} // Move over x-axis

function x$3(x) {
  return x == null ? this.cx() - this.rx() : this.cx(x + this.rx());
} // Move over y-axis

function y$3(y) {
  return y == null ? this.cy() - this.ry() : this.cy(y + this.ry());
} // Move by center over x-axis

function cx$1(x) {
  return this.attr('cx', x);
} // Move by center over y-axis

function cy$1(y) {
  return this.attr('cy', y);
} // Set width of element

function width$2(width) {
  return width == null ? this.rx() * 2 : this.rx(new SVGNumber(width).divide(2));
} // Set height of element

function height$2(height) {
  return height == null ? this.ry() * 2 : this.ry(new SVGNumber(height).divide(2));
}

var circled = {
  __proto__: null,
  rx: rx,
  ry: ry,
  x: x$3,
  y: y$3,
  cx: cx$1,
  cy: cy$1,
  width: width$2,
  height: height$2
};

class Ellipse extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('ellipse', node), attrs);
  }

  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.rx(new SVGNumber(p.width).divide(2)).ry(new SVGNumber(p.height).divide(2));
  }

}
extend(Ellipse, circled);
registerMethods('Container', {
  // Create an ellipse
  ellipse: wrapWithAttrCheck(function (width = 0, height = width) {
    return this.put(new Ellipse()).size(width, height).move(0, 0);
  })
});
register(Ellipse, 'Ellipse');

class Fragment extends Dom {
  constructor(node = globals.document.createDocumentFragment()) {
    super(node);
  } // Import / Export raw xml


  xml(xmlOrFn, outerXML, ns) {
    if (typeof xmlOrFn === 'boolean') {
      ns = outerXML;
      outerXML = xmlOrFn;
      xmlOrFn = null;
    } // because this is a fragment we have to put all elements into a wrapper first
    // before we can get the innerXML from it


    if (xmlOrFn == null || typeof xmlOrFn === 'function') {
      const wrapper = new Dom(create('wrapper', ns));
      wrapper.add(this.node.cloneNode(true));
      return wrapper.xml(false, ns);
    } // Act as setter if we got a string


    return super.xml(xmlOrFn, false, ns);
  }

}

register(Fragment, 'Fragment');

function from(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    fx: new SVGNumber(x),
    fy: new SVGNumber(y)
  }) : this.attr({
    x1: new SVGNumber(x),
    y1: new SVGNumber(y)
  });
}
function to(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    cx: new SVGNumber(x),
    cy: new SVGNumber(y)
  }) : this.attr({
    x2: new SVGNumber(x),
    y2: new SVGNumber(y)
  });
}

var gradiented = {
  __proto__: null,
  from: from,
  to: to
};

class Gradient extends Container {
  constructor(type, attrs) {
    super(nodeOrNew(type + 'Gradient', typeof type === 'string' ? null : type), attrs);
  } // custom attr to handle transform


  attr(a, b, c) {
    if (a === 'transform') a = 'gradientTransform';
    return super.attr(a, b, c);
  }

  bbox() {
    return new Box();
  }

  targets() {
    return baseFind('svg [fill*="' + this.id() + '"]');
  } // Alias string conversion to fill


  toString() {
    return this.url();
  } // Update gradient


  update(block) {
    // remove all stops
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Return the fill id


  url() {
    return 'url("#' + this.id() + '")';
  }

}
extend(Gradient, gradiented);
registerMethods({
  Container: {
    // Create gradient element in defs
    gradient(...args) {
      return this.defs().gradient(...args);
    }

  },
  // define gradient
  Defs: {
    gradient: wrapWithAttrCheck(function (type, block) {
      return this.put(new Gradient(type)).update(block);
    })
  }
});
register(Gradient, 'Gradient');

class Pattern extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('pattern', node), attrs);
  } // custom attr to handle transform


  attr(a, b, c) {
    if (a === 'transform') a = 'patternTransform';
    return super.attr(a, b, c);
  }

  bbox() {
    return new Box();
  }

  targets() {
    return baseFind('svg [fill*="' + this.id() + '"]');
  } // Alias string conversion to fill


  toString() {
    return this.url();
  } // Update pattern by rebuilding


  update(block) {
    // remove content
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Return the fill id


  url() {
    return 'url("#' + this.id() + '")';
  }

}
registerMethods({
  Container: {
    // Create pattern element in defs
    pattern(...args) {
      return this.defs().pattern(...args);
    }

  },
  Defs: {
    pattern: wrapWithAttrCheck(function (width, height, block) {
      return this.put(new Pattern()).update(block).attr({
        x: 0,
        y: 0,
        width: width,
        height: height,
        patternUnits: 'userSpaceOnUse'
      });
    })
  }
});
register(Pattern, 'Pattern');

class Image extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('image', node), attrs);
  } // (re)load image


  load(url, callback) {
    if (!url) return this;
    const img = new globals.window.Image();
    on(img, 'load', function (e) {
      const p = this.parent(Pattern); // ensure image size

      if (this.width() === 0 && this.height() === 0) {
        this.size(img.width, img.height);
      }

      if (p instanceof Pattern) {
        // ensure pattern size if not set
        if (p.width() === 0 && p.height() === 0) {
          p.size(this.width(), this.height());
        }
      }

      if (typeof callback === 'function') {
        callback.call(this, e);
      }
    }, this);
    on(img, 'load error', function () {
      // dont forget to unbind memory leaking events
      off(img);
    });
    return this.attr('href', img.src = url, xlink);
  }

}
registerAttrHook(function (attr, val, _this) {
  // convert image fill and stroke to patterns
  if (attr === 'fill' || attr === 'stroke') {
    if (isImage.test(val)) {
      val = _this.root().defs().image(val);
    }
  }

  if (val instanceof Image) {
    val = _this.root().defs().pattern(0, 0, pattern => {
      pattern.add(val);
    });
  }

  return val;
});
registerMethods({
  Container: {
    // create image element, load image and set its size
    image: wrapWithAttrCheck(function (source, callback) {
      return this.put(new Image()).size(0, 0).load(source, callback);
    })
  }
});
register(Image, 'Image');

class PointArray extends SVGArray {
  // Get bounding box of points
  bbox() {
    let maxX = -Infinity;
    let maxY = -Infinity;
    let minX = Infinity;
    let minY = Infinity;
    this.forEach(function (el) {
      maxX = Math.max(el[0], maxX);
      maxY = Math.max(el[1], maxY);
      minX = Math.min(el[0], minX);
      minY = Math.min(el[1], minY);
    });
    return new Box(minX, minY, maxX - minX, maxY - minY);
  } // Move point string


  move(x, y) {
    const box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y; // move every point

    if (!isNaN(x) && !isNaN(y)) {
      for (let i = this.length - 1; i >= 0; i--) {
        this[i] = [this[i][0] + x, this[i][1] + y];
      }
    }

    return this;
  } // Parse point string and flat array


  parse(array = [0, 0]) {
    const points = []; // if it is an array, we flatten it and therefore clone it to 1 depths

    if (array instanceof Array) {
      array = Array.prototype.concat.apply([], array);
    } else {
      // Else, it is considered as a string
      // parse points
      array = array.trim().split(delimiter).map(parseFloat);
    } // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
    // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.


    if (array.length % 2 !== 0) array.pop(); // wrap points in two-tuples

    for (let i = 0, len = array.length; i < len; i = i + 2) {
      points.push([array[i], array[i + 1]]);
    }

    return points;
  } // Resize poly string


  size(width, height) {
    let i;
    const box = this.bbox(); // recalculate position of all points according to new size

    for (i = this.length - 1; i >= 0; i--) {
      if (box.width) this[i][0] = (this[i][0] - box.x) * width / box.width + box.x;
      if (box.height) this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
    }

    return this;
  } // Convert array to line object


  toLine() {
    return {
      x1: this[0][0],
      y1: this[0][1],
      x2: this[1][0],
      y2: this[1][1]
    };
  } // Convert array to string


  toString() {
    const array = []; // convert to a poly point string

    for (let i = 0, il = this.length; i < il; i++) {
      array.push(this[i].join(','));
    }

    return array.join(' ');
  }

  transform(m) {
    return this.clone().transformO(m);
  } // transform points with matrix (similar to Point.transform)


  transformO(m) {
    if (!Matrix.isMatrixLike(m)) {
      m = new Matrix(m);
    }

    for (let i = this.length; i--;) {
      // Perform the matrix multiplication
      const [x, y] = this[i];
      this[i][0] = m.a * x + m.c * y + m.e;
      this[i][1] = m.b * x + m.d * y + m.f;
    }

    return this;
  }

}

const MorphArray = PointArray; // Move by left top corner over x-axis

function x$2(x) {
  return x == null ? this.bbox().x : this.move(x, this.bbox().y);
} // Move by left top corner over y-axis

function y$2(y) {
  return y == null ? this.bbox().y : this.move(this.bbox().x, y);
} // Set width of element

function width$1(width) {
  const b = this.bbox();
  return width == null ? b.width : this.size(width, b.height);
} // Set height of element

function height$1(height) {
  const b = this.bbox();
  return height == null ? b.height : this.size(b.width, height);
}

var pointed = {
  __proto__: null,
  MorphArray: MorphArray,
  x: x$2,
  y: y$2,
  width: width$1,
  height: height$1
};

class Line extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('line', node), attrs);
  } // Get array


  array() {
    return new PointArray([[this.attr('x1'), this.attr('y1')], [this.attr('x2'), this.attr('y2')]]);
  } // Move by left top corner


  move(x, y) {
    return this.attr(this.array().move(x, y).toLine());
  } // Overwrite native plot() method


  plot(x1, y1, x2, y2) {
    if (x1 == null) {
      return this.array();
    } else if (typeof y1 !== 'undefined') {
      x1 = {
        x1,
        y1,
        x2,
        y2
      };
    } else {
      x1 = new PointArray(x1).toLine();
    }

    return this.attr(x1);
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.attr(this.array().size(p.width, p.height).toLine());
  }

}
extend(Line, pointed);
registerMethods({
  Container: {
    // Create a line element
    line: wrapWithAttrCheck(function (...args) {
      // make sure plot is called as a setter
      // x1 is not necessarily a number, it can also be an array, a string and a PointArray
      return Line.prototype.plot.apply(this.put(new Line()), args[0] != null ? args : [0, 0, 0, 0]);
    })
  }
});
register(Line, 'Line');

class Marker extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('marker', node), attrs);
  } // Set height of element


  height(height) {
    return this.attr('markerHeight', height);
  }

  orient(orient) {
    return this.attr('orient', orient);
  } // Set marker refX and refY


  ref(x, y) {
    return this.attr('refX', x).attr('refY', y);
  } // Return the fill id


  toString() {
    return 'url(#' + this.id() + ')';
  } // Update marker


  update(block) {
    // remove all content
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Set width of element


  width(width) {
    return this.attr('markerWidth', width);
  }

}
registerMethods({
  Container: {
    marker(...args) {
      // Create marker element in defs
      return this.defs().marker(...args);
    }

  },
  Defs: {
    // Create marker
    marker: wrapWithAttrCheck(function (width, height, block) {
      // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
      return this.put(new Marker()).size(width, height).ref(width / 2, height / 2).viewbox(0, 0, width, height).attr('orient', 'auto').update(block);
    })
  },
  marker: {
    // Create and attach markers
    marker(marker, width, height, block) {
      let attr = ['marker']; // Build attribute name

      if (marker !== 'all') attr.push(marker);
      attr = attr.join('-'); // Set marker attribute

      marker = arguments[1] instanceof Marker ? arguments[1] : this.defs().marker(width, height, block);
      return this.attr(attr, marker);
    }

  }
});
register(Marker, 'Marker');

/***
Base Class
==========
The base stepper class that will be
***/

function makeSetterGetter(k, f) {
  return function (v) {
    if (v == null) return this[k];
    this[k] = v;
    if (f) f.call(this);
    return this;
  };
}

const easing = {
  '-': function (pos) {
    return pos;
  },
  '<>': function (pos) {
    return -Math.cos(pos * Math.PI) / 2 + 0.5;
  },
  '>': function (pos) {
    return Math.sin(pos * Math.PI / 2);
  },
  '<': function (pos) {
    return -Math.cos(pos * Math.PI / 2) + 1;
  },
  bezier: function (x1, y1, x2, y2) {
    // see https://www.w3.org/TR/css-easing-1/#cubic-bezier-algo
    return function (t) {
      if (t < 0) {
        if (x1 > 0) {
          return y1 / x1 * t;
        } else if (x2 > 0) {
          return y2 / x2 * t;
        } else {
          return 0;
        }
      } else if (t > 1) {
        if (x2 < 1) {
          return (1 - y2) / (1 - x2) * t + (y2 - x2) / (1 - x2);
        } else if (x1 < 1) {
          return (1 - y1) / (1 - x1) * t + (y1 - x1) / (1 - x1);
        } else {
          return 1;
        }
      } else {
        return 3 * t * (1 - t) ** 2 * y1 + 3 * t ** 2 * (1 - t) * y2 + t ** 3;
      }
    };
  },
  // see https://www.w3.org/TR/css-easing-1/#step-timing-function-algo
  steps: function (steps, stepPosition = 'end') {
    // deal with "jump-" prefix
    stepPosition = stepPosition.split('-').reverse()[0];
    let jumps = steps;

    if (stepPosition === 'none') {
      --jumps;
    } else if (stepPosition === 'both') {
      ++jumps;
    } // The beforeFlag is essentially useless


    return (t, beforeFlag = false) => {
      // Step is called currentStep in referenced url
      let step = Math.floor(t * steps);
      const jumping = t * step % 1 === 0;

      if (stepPosition === 'start' || stepPosition === 'both') {
        ++step;
      }

      if (beforeFlag && jumping) {
        --step;
      }

      if (t >= 0 && step < 0) {
        step = 0;
      }

      if (t <= 1 && step > jumps) {
        step = jumps;
      }

      return step / jumps;
    };
  }
};
class Stepper {
  done() {
    return false;
  }

}
/***
Easing Functions
================
***/

class Ease extends Stepper {
  constructor(fn = timeline.ease) {
    super();
    this.ease = easing[fn] || fn;
  }

  step(from, to, pos) {
    if (typeof from !== 'number') {
      return pos < 1 ? from : to;
    }

    return from + (to - from) * this.ease(pos);
  }

}
/***
Controller Types
================
***/

class Controller extends Stepper {
  constructor(fn) {
    super();
    this.stepper = fn;
  }

  done(c) {
    return c.done;
  }

  step(current, target, dt, c) {
    return this.stepper(current, target, dt, c);
  }

}

function recalculate() {
  // Apply the default parameters
  const duration = (this._duration || 500) / 1000;
  const overshoot = this._overshoot || 0; // Calculate the PID natural response

  const eps = 1e-10;
  const pi = Math.PI;
  const os = Math.log(overshoot / 100 + eps);
  const zeta = -os / Math.sqrt(pi * pi + os * os);
  const wn = 3.9 / (zeta * duration); // Calculate the Spring values

  this.d = 2 * zeta * wn;
  this.k = wn * wn;
}

class Spring extends Controller {
  constructor(duration = 500, overshoot = 0) {
    super();
    this.duration(duration).overshoot(overshoot);
  }

  step(current, target, dt, c) {
    if (typeof current === 'string') return current;
    c.done = dt === Infinity;
    if (dt === Infinity) return target;
    if (dt === 0) return current;
    if (dt > 100) dt = 16;
    dt /= 1000; // Get the previous velocity

    const velocity = c.velocity || 0; // Apply the control to get the new position and store it

    const acceleration = -this.d * velocity - this.k * (current - target);
    const newPosition = current + velocity * dt + acceleration * dt * dt / 2; // Store the velocity

    c.velocity = velocity + acceleration * dt; // Figure out if we have converged, and if so, pass the value

    c.done = Math.abs(target - newPosition) + Math.abs(velocity) < 0.002;
    return c.done ? target : newPosition;
  }

}
extend(Spring, {
  duration: makeSetterGetter('_duration', recalculate),
  overshoot: makeSetterGetter('_overshoot', recalculate)
});
class PID extends Controller {
  constructor(p = 0.1, i = 0.01, d = 0, windup = 1000) {
    super();
    this.p(p).i(i).d(d).windup(windup);
  }

  step(current, target, dt, c) {
    if (typeof current === 'string') return current;
    c.done = dt === Infinity;
    if (dt === Infinity) return target;
    if (dt === 0) return current;
    const p = target - current;
    let i = (c.integral || 0) + p * dt;
    const d = (p - (c.error || 0)) / dt;
    const windup = this._windup; // antiwindup

    if (windup !== false) {
      i = Math.max(-windup, Math.min(i, windup));
    }

    c.error = p;
    c.integral = i;
    c.done = Math.abs(p) < 0.001;
    return c.done ? target : current + (this.P * p + this.I * i + this.D * d);
  }

}
extend(PID, {
  windup: makeSetterGetter('_windup'),
  p: makeSetterGetter('P'),
  i: makeSetterGetter('I'),
  d: makeSetterGetter('D')
});

const segmentParameters = {
  M: 2,
  L: 2,
  H: 1,
  V: 1,
  C: 6,
  S: 4,
  Q: 4,
  T: 2,
  A: 7,
  Z: 0
};
const pathHandlers = {
  M: function (c, p, p0) {
    p.x = p0.x = c[0];
    p.y = p0.y = c[1];
    return ['M', p.x, p.y];
  },
  L: function (c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['L', c[0], c[1]];
  },
  H: function (c, p) {
    p.x = c[0];
    return ['H', c[0]];
  },
  V: function (c, p) {
    p.y = c[0];
    return ['V', c[0]];
  },
  C: function (c, p) {
    p.x = c[4];
    p.y = c[5];
    return ['C', c[0], c[1], c[2], c[3], c[4], c[5]];
  },
  S: function (c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['S', c[0], c[1], c[2], c[3]];
  },
  Q: function (c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['Q', c[0], c[1], c[2], c[3]];
  },
  T: function (c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['T', c[0], c[1]];
  },
  Z: function (c, p, p0) {
    p.x = p0.x;
    p.y = p0.y;
    return ['Z'];
  },
  A: function (c, p) {
    p.x = c[5];
    p.y = c[6];
    return ['A', c[0], c[1], c[2], c[3], c[4], c[5], c[6]];
  }
};
const mlhvqtcsaz = 'mlhvqtcsaz'.split('');

for (let i = 0, il = mlhvqtcsaz.length; i < il; ++i) {
  pathHandlers[mlhvqtcsaz[i]] = function (i) {
    return function (c, p, p0) {
      if (i === 'H') c[0] = c[0] + p.x;else if (i === 'V') c[0] = c[0] + p.y;else if (i === 'A') {
        c[5] = c[5] + p.x;
        c[6] = c[6] + p.y;
      } else {
        for (let j = 0, jl = c.length; j < jl; ++j) {
          c[j] = c[j] + (j % 2 ? p.y : p.x);
        }
      }
      return pathHandlers[i](c, p, p0);
    };
  }(mlhvqtcsaz[i].toUpperCase());
}

function makeAbsolut(parser) {
  const command = parser.segment[0];
  return pathHandlers[command](parser.segment.slice(1), parser.p, parser.p0);
}

function segmentComplete(parser) {
  return parser.segment.length && parser.segment.length - 1 === segmentParameters[parser.segment[0].toUpperCase()];
}

function startNewSegment(parser, token) {
  parser.inNumber && finalizeNumber(parser, false);
  const pathLetter = isPathLetter.test(token);

  if (pathLetter) {
    parser.segment = [token];
  } else {
    const lastCommand = parser.lastCommand;
    const small = lastCommand.toLowerCase();
    const isSmall = lastCommand === small;
    parser.segment = [small === 'm' ? isSmall ? 'l' : 'L' : lastCommand];
  }

  parser.inSegment = true;
  parser.lastCommand = parser.segment[0];
  return pathLetter;
}

function finalizeNumber(parser, inNumber) {
  if (!parser.inNumber) throw new Error('Parser Error');
  parser.number && parser.segment.push(parseFloat(parser.number));
  parser.inNumber = inNumber;
  parser.number = '';
  parser.pointSeen = false;
  parser.hasExponent = false;

  if (segmentComplete(parser)) {
    finalizeSegment(parser);
  }
}

function finalizeSegment(parser) {
  parser.inSegment = false;

  if (parser.absolute) {
    parser.segment = makeAbsolut(parser);
  }

  parser.segments.push(parser.segment);
}

function isArcFlag(parser) {
  if (!parser.segment.length) return false;
  const isArc = parser.segment[0].toUpperCase() === 'A';
  const length = parser.segment.length;
  return isArc && (length === 4 || length === 5);
}

function isExponential(parser) {
  return parser.lastToken.toUpperCase() === 'E';
}

function pathParser(d, toAbsolute = true) {
  let index = 0;
  let token = '';
  const parser = {
    segment: [],
    inNumber: false,
    number: '',
    lastToken: '',
    inSegment: false,
    segments: [],
    pointSeen: false,
    hasExponent: false,
    absolute: toAbsolute,
    p0: new Point(),
    p: new Point()
  };

  while (parser.lastToken = token, token = d.charAt(index++)) {
    if (!parser.inSegment) {
      if (startNewSegment(parser, token)) {
        continue;
      }
    }

    if (token === '.') {
      if (parser.pointSeen || parser.hasExponent) {
        finalizeNumber(parser, false);
        --index;
        continue;
      }

      parser.inNumber = true;
      parser.pointSeen = true;
      parser.number += token;
      continue;
    }

    if (!isNaN(parseInt(token))) {
      if (parser.number === '0' || isArcFlag(parser)) {
        parser.inNumber = true;
        parser.number = token;
        finalizeNumber(parser, true);
        continue;
      }

      parser.inNumber = true;
      parser.number += token;
      continue;
    }

    if (token === ' ' || token === ',') {
      if (parser.inNumber) {
        finalizeNumber(parser, false);
      }

      continue;
    }

    if (token === '-') {
      if (parser.inNumber && !isExponential(parser)) {
        finalizeNumber(parser, false);
        --index;
        continue;
      }

      parser.number += token;
      parser.inNumber = true;
      continue;
    }

    if (token.toUpperCase() === 'E') {
      parser.number += token;
      parser.hasExponent = true;
      continue;
    }

    if (isPathLetter.test(token)) {
      if (parser.inNumber) {
        finalizeNumber(parser, false);
      } else if (!segmentComplete(parser)) {
        throw new Error('parser Error');
      } else {
        finalizeSegment(parser);
      }

      --index;
    }
  }

  if (parser.inNumber) {
    finalizeNumber(parser, false);
  }

  if (parser.inSegment && segmentComplete(parser)) {
    finalizeSegment(parser);
  }

  return parser.segments;
}

function arrayToString(a) {
  let s = '';

  for (let i = 0, il = a.length; i < il; i++) {
    s += a[i][0];

    if (a[i][1] != null) {
      s += a[i][1];

      if (a[i][2] != null) {
        s += ' ';
        s += a[i][2];

        if (a[i][3] != null) {
          s += ' ';
          s += a[i][3];
          s += ' ';
          s += a[i][4];

          if (a[i][5] != null) {
            s += ' ';
            s += a[i][5];
            s += ' ';
            s += a[i][6];

            if (a[i][7] != null) {
              s += ' ';
              s += a[i][7];
            }
          }
        }
      }
    }
  }

  return s + ' ';
}

class PathArray extends SVGArray {
  // Get bounding box of path
  bbox() {
    parser().path.setAttribute('d', this.toString());
    return new Box(parser.nodes.path.getBBox());
  } // Move path string


  move(x, y) {
    // get bounding box of current situation
    const box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y;

    if (!isNaN(x) && !isNaN(y)) {
      // move every point
      for (let l, i = this.length - 1; i >= 0; i--) {
        l = this[i][0];

        if (l === 'M' || l === 'L' || l === 'T') {
          this[i][1] += x;
          this[i][2] += y;
        } else if (l === 'H') {
          this[i][1] += x;
        } else if (l === 'V') {
          this[i][1] += y;
        } else if (l === 'C' || l === 'S' || l === 'Q') {
          this[i][1] += x;
          this[i][2] += y;
          this[i][3] += x;
          this[i][4] += y;

          if (l === 'C') {
            this[i][5] += x;
            this[i][6] += y;
          }
        } else if (l === 'A') {
          this[i][6] += x;
          this[i][7] += y;
        }
      }
    }

    return this;
  } // Absolutize and parse path to array


  parse(d = 'M0 0') {
    if (Array.isArray(d)) {
      d = Array.prototype.concat.apply([], d).toString();
    }

    return pathParser(d);
  } // Resize path string


  size(width, height) {
    // get bounding box of current situation
    const box = this.bbox();
    let i, l; // If the box width or height is 0 then we ignore
    // transformations on the respective axis

    box.width = box.width === 0 ? 1 : box.width;
    box.height = box.height === 0 ? 1 : box.height; // recalculate position of all points according to new size

    for (i = this.length - 1; i >= 0; i--) {
      l = this[i][0];

      if (l === 'M' || l === 'L' || l === 'T') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
      } else if (l === 'H') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
      } else if (l === 'V') {
        this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
      } else if (l === 'C' || l === 'S' || l === 'Q') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
        this[i][3] = (this[i][3] - box.x) * width / box.width + box.x;
        this[i][4] = (this[i][4] - box.y) * height / box.height + box.y;

        if (l === 'C') {
          this[i][5] = (this[i][5] - box.x) * width / box.width + box.x;
          this[i][6] = (this[i][6] - box.y) * height / box.height + box.y;
        }
      } else if (l === 'A') {
        // resize radii
        this[i][1] = this[i][1] * width / box.width;
        this[i][2] = this[i][2] * height / box.height; // move position values

        this[i][6] = (this[i][6] - box.x) * width / box.width + box.x;
        this[i][7] = (this[i][7] - box.y) * height / box.height + box.y;
      }
    }

    return this;
  } // Convert array to string


  toString() {
    return arrayToString(this);
  }

}

const getClassForType = value => {
  const type = typeof value;

  if (type === 'number') {
    return SVGNumber;
  } else if (type === 'string') {
    if (Color.isColor(value)) {
      return Color;
    } else if (delimiter.test(value)) {
      return isPathLetter.test(value) ? PathArray : SVGArray;
    } else if (numberAndUnit.test(value)) {
      return SVGNumber;
    } else {
      return NonMorphable;
    }
  } else if (morphableTypes.indexOf(value.constructor) > -1) {
    return value.constructor;
  } else if (Array.isArray(value)) {
    return SVGArray;
  } else if (type === 'object') {
    return ObjectBag;
  } else {
    return NonMorphable;
  }
};

class Morphable {
  constructor(stepper) {
    this._stepper = stepper || new Ease('-');
    this._from = null;
    this._to = null;
    this._type = null;
    this._context = null;
    this._morphObj = null;
  }

  at(pos) {
    return this._morphObj.morph(this._from, this._to, pos, this._stepper, this._context);
  }

  done() {
    const complete = this._context.map(this._stepper.done).reduce(function (last, curr) {
      return last && curr;
    }, true);

    return complete;
  }

  from(val) {
    if (val == null) {
      return this._from;
    }

    this._from = this._set(val);
    return this;
  }

  stepper(stepper) {
    if (stepper == null) return this._stepper;
    this._stepper = stepper;
    return this;
  }

  to(val) {
    if (val == null) {
      return this._to;
    }

    this._to = this._set(val);
    return this;
  }

  type(type) {
    // getter
    if (type == null) {
      return this._type;
    } // setter


    this._type = type;
    return this;
  }

  _set(value) {
    if (!this._type) {
      this.type(getClassForType(value));
    }

    let result = new this._type(value);

    if (this._type === Color) {
      result = this._to ? result[this._to[4]]() : this._from ? result[this._from[4]]() : result;
    }

    if (this._type === ObjectBag) {
      result = this._to ? result.align(this._to) : this._from ? result.align(this._from) : result;
    }

    result = result.toConsumable();
    this._morphObj = this._morphObj || new this._type();
    this._context = this._context || Array.apply(null, Array(result.length)).map(Object).map(function (o) {
      o.done = true;
      return o;
    });
    return result;
  }

}
class NonMorphable {
  constructor(...args) {
    this.init(...args);
  }

  init(val) {
    val = Array.isArray(val) ? val[0] : val;
    this.value = val;
    return this;
  }

  toArray() {
    return [this.value];
  }

  valueOf() {
    return this.value;
  }

}
class TransformBag {
  constructor(...args) {
    this.init(...args);
  }

  init(obj) {
    if (Array.isArray(obj)) {
      obj = {
        scaleX: obj[0],
        scaleY: obj[1],
        shear: obj[2],
        rotate: obj[3],
        translateX: obj[4],
        translateY: obj[5],
        originX: obj[6],
        originY: obj[7]
      };
    }

    Object.assign(this, TransformBag.defaults, obj);
    return this;
  }

  toArray() {
    const v = this;
    return [v.scaleX, v.scaleY, v.shear, v.rotate, v.translateX, v.translateY, v.originX, v.originY];
  }

}
TransformBag.defaults = {
  scaleX: 1,
  scaleY: 1,
  shear: 0,
  rotate: 0,
  translateX: 0,
  translateY: 0,
  originX: 0,
  originY: 0
};

const sortByKey = (a, b) => {
  return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
};

class ObjectBag {
  constructor(...args) {
    this.init(...args);
  }

  align(other) {
    const values = this.values;

    for (let i = 0, il = values.length; i < il; ++i) {
      // If the type is the same we only need to check if the color is in the correct format
      if (values[i + 1] === other[i + 1]) {
        if (values[i + 1] === Color && other[i + 7] !== values[i + 7]) {
          const space = other[i + 7];
          const color = new Color(this.values.splice(i + 3, 5))[space]().toArray();
          this.values.splice(i + 3, 0, ...color);
        }

        i += values[i + 2] + 2;
        continue;
      }

      if (!other[i + 1]) {
        return this;
      } // The types differ, so we overwrite the new type with the old one
      // And initialize it with the types default (e.g. black for color or 0 for number)


      const defaultObject = new other[i + 1]().toArray(); // Than we fix the values array

      const toDelete = values[i + 2] + 3;
      values.splice(i, toDelete, other[i], other[i + 1], other[i + 2], ...defaultObject);
      i += values[i + 2] + 2;
    }

    return this;
  }

  init(objOrArr) {
    this.values = [];

    if (Array.isArray(objOrArr)) {
      this.values = objOrArr.slice();
      return;
    }

    objOrArr = objOrArr || {};
    const entries = [];

    for (const i in objOrArr) {
      const Type = getClassForType(objOrArr[i]);
      const val = new Type(objOrArr[i]).toArray();
      entries.push([i, Type, val.length, ...val]);
    }

    entries.sort(sortByKey);
    this.values = entries.reduce((last, curr) => last.concat(curr), []);
    return this;
  }

  toArray() {
    return this.values;
  }

  valueOf() {
    const obj = {};
    const arr = this.values; // for (var i = 0, len = arr.length; i < len; i += 2) {

    while (arr.length) {
      const key = arr.shift();
      const Type = arr.shift();
      const num = arr.shift();
      const values = arr.splice(0, num);
      obj[key] = new Type(values); // .valueOf()
    }

    return obj;
  }

}
const morphableTypes = [NonMorphable, TransformBag, ObjectBag];
function registerMorphableType(type = []) {
  morphableTypes.push(...[].concat(type));
}
function makeMorphable() {
  extend(morphableTypes, {
    to(val) {
      return new Morphable().type(this.constructor).from(this.toArray()) // this.valueOf())
      .to(val);
    },

    fromArray(arr) {
      this.init(arr);
      return this;
    },

    toConsumable() {
      return this.toArray();
    },

    morph(from, to, pos, stepper, context) {
      const mapper = function (i, index) {
        return stepper.step(i, to[index], pos, context[index], context);
      };

      return this.fromArray(from.map(mapper));
    }

  });
}

class Path extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('path', node), attrs);
  } // Get array


  array() {
    return this._array || (this._array = new PathArray(this.attr('d')));
  } // Clear array cache


  clear() {
    delete this._array;
    return this;
  } // Set height of element


  height(height) {
    return height == null ? this.bbox().height : this.size(this.bbox().width, height);
  } // Move by left top corner


  move(x, y) {
    return this.attr('d', this.array().move(x, y));
  } // Plot new path


  plot(d) {
    return d == null ? this.array() : this.clear().attr('d', typeof d === 'string' ? d : this._array = new PathArray(d));
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.attr('d', this.array().size(p.width, p.height));
  } // Set width of element


  width(width) {
    return width == null ? this.bbox().width : this.size(width, this.bbox().height);
  } // Move by left top corner over x-axis


  x(x) {
    return x == null ? this.bbox().x : this.move(x, this.bbox().y);
  } // Move by left top corner over y-axis


  y(y) {
    return y == null ? this.bbox().y : this.move(this.bbox().x, y);
  }

} // Define morphable array

Path.prototype.MorphArray = PathArray; // Add parent method

registerMethods({
  Container: {
    // Create a wrapped path element
    path: wrapWithAttrCheck(function (d) {
      // make sure plot is called as a setter
      return this.put(new Path()).plot(d || new PathArray());
    })
  }
});
register(Path, 'Path');

function array() {
  return this._array || (this._array = new PointArray(this.attr('points')));
} // Clear array cache

function clear() {
  delete this._array;
  return this;
} // Move by left top corner

function move$2(x, y) {
  return this.attr('points', this.array().move(x, y));
} // Plot new path

function plot(p) {
  return p == null ? this.array() : this.clear().attr('points', typeof p === 'string' ? p : this._array = new PointArray(p));
} // Set element size to given width and height

function size$1(width, height) {
  const p = proportionalSize(this, width, height);
  return this.attr('points', this.array().size(p.width, p.height));
}

var poly = {
  __proto__: null,
  array: array,
  clear: clear,
  move: move$2,
  plot: plot,
  size: size$1
};

class Polygon extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('polygon', node), attrs);
  }

}
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polygon: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polygon()).plot(p || new PointArray());
    })
  }
});
extend(Polygon, pointed);
extend(Polygon, poly);
register(Polygon, 'Polygon');

class Polyline extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('polyline', node), attrs);
  }

}
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polyline: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polyline()).plot(p || new PointArray());
    })
  }
});
extend(Polyline, pointed);
extend(Polyline, poly);
register(Polyline, 'Polyline');

class Rect extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('rect', node), attrs);
  }

}
extend(Rect, {
  rx,
  ry
});
registerMethods({
  Container: {
    // Create a rect element
    rect: wrapWithAttrCheck(function (width, height) {
      return this.put(new Rect()).size(width, height);
    })
  }
});
register(Rect, 'Rect');

class Queue {
  constructor() {
    this._first = null;
    this._last = null;
  } // Shows us the first item in the list


  first() {
    return this._first && this._first.value;
  } // Shows us the last item in the list


  last() {
    return this._last && this._last.value;
  }

  push(value) {
    // An item stores an id and the provided value
    const item = typeof value.next !== 'undefined' ? value : {
      value: value,
      next: null,
      prev: null
    }; // Deal with the queue being empty or populated

    if (this._last) {
      item.prev = this._last;
      this._last.next = item;
      this._last = item;
    } else {
      this._last = item;
      this._first = item;
    } // Return the current item


    return item;
  } // Removes the item that was returned from the push


  remove(item) {
    // Relink the previous item
    if (item.prev) item.prev.next = item.next;
    if (item.next) item.next.prev = item.prev;
    if (item === this._last) this._last = item.prev;
    if (item === this._first) this._first = item.next; // Invalidate item

    item.prev = null;
    item.next = null;
  }

  shift() {
    // Check if we have a value
    const remove = this._first;
    if (!remove) return null; // If we do, remove it and relink things

    this._first = remove.next;
    if (this._first) this._first.prev = null;
    this._last = this._first ? this._last : null;
    return remove.value;
  }

}

const Animator = {
  nextDraw: null,
  frames: new Queue(),
  timeouts: new Queue(),
  immediates: new Queue(),
  timer: () => globals.window.performance || globals.window.Date,
  transforms: [],

  frame(fn) {
    // Store the node
    const node = Animator.frames.push({
      run: fn
    }); // Request an animation frame if we don't have one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    } // Return the node so we can remove it easily


    return node;
  },

  timeout(fn, delay) {
    delay = delay || 0; // Work out when the event should fire

    const time = Animator.timer().now() + delay; // Add the timeout to the end of the queue

    const node = Animator.timeouts.push({
      run: fn,
      time: time
    }); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },

  immediate(fn) {
    // Add the immediate fn to the end of the queue
    const node = Animator.immediates.push(fn); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },

  cancelFrame(node) {
    node != null && Animator.frames.remove(node);
  },

  clearTimeout(node) {
    node != null && Animator.timeouts.remove(node);
  },

  cancelImmediate(node) {
    node != null && Animator.immediates.remove(node);
  },

  _draw(now) {
    // Run all the timeouts we can run, if they are not ready yet, add them
    // to the end of the queue immediately! (bad timeouts!!! [sarcasm])
    let nextTimeout = null;
    const lastTimeout = Animator.timeouts.last();

    while (nextTimeout = Animator.timeouts.shift()) {
      // Run the timeout if its time, or push it to the end
      if (now >= nextTimeout.time) {
        nextTimeout.run();
      } else {
        Animator.timeouts.push(nextTimeout);
      } // If we hit the last item, we should stop shifting out more items


      if (nextTimeout === lastTimeout) break;
    } // Run all of the animation frames


    let nextFrame = null;
    const lastFrame = Animator.frames.last();

    while (nextFrame !== lastFrame && (nextFrame = Animator.frames.shift())) {
      nextFrame.run(now);
    }

    let nextImmediate = null;

    while (nextImmediate = Animator.immediates.shift()) {
      nextImmediate();
    } // If we have remaining timeouts or frames, draw until we don't anymore


    Animator.nextDraw = Animator.timeouts.first() || Animator.frames.first() ? globals.window.requestAnimationFrame(Animator._draw) : null;
  }

};

const makeSchedule = function (runnerInfo) {
  const start = runnerInfo.start;
  const duration = runnerInfo.runner.duration();
  const end = start + duration;
  return {
    start: start,
    duration: duration,
    end: end,
    runner: runnerInfo.runner
  };
};

const defaultSource = function () {
  const w = globals.window;
  return (w.performance || w.Date).now();
};

class Timeline extends EventTarget {
  // Construct a new timeline on the given element
  constructor(timeSource = defaultSource) {
    super();
    this._timeSource = timeSource; // Store the timing variables

    this._startTime = 0;
    this._speed = 1.0; // Determines how long a runner is hold in memory. Can be a dt or true/false

    this._persist = 0; // Keep track of the running animations and their starting parameters

    this._nextFrame = null;
    this._paused = true;
    this._runners = [];
    this._runnerIds = [];
    this._lastRunnerId = -1;
    this._time = 0;
    this._lastSourceTime = 0;
    this._lastStepTime = 0; // Make sure that step is always called in class context

    this._step = this._stepFn.bind(this, false);
    this._stepImmediate = this._stepFn.bind(this, true);
  }

  active() {
    return !!this._nextFrame;
  }

  finish() {
    // Go to end and pause
    this.time(this.getEndTimeOfTimeline() + 1);
    return this.pause();
  } // Calculates the end of the timeline


  getEndTime() {
    const lastRunnerInfo = this.getLastRunnerInfo();
    const lastDuration = lastRunnerInfo ? lastRunnerInfo.runner.duration() : 0;
    const lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
    return lastStartTime + lastDuration;
  }

  getEndTimeOfTimeline() {
    const endTimes = this._runners.map(i => i.start + i.runner.duration());

    return Math.max(0, ...endTimes);
  }

  getLastRunnerInfo() {
    return this.getRunnerInfoById(this._lastRunnerId);
  }

  getRunnerInfoById(id) {
    return this._runners[this._runnerIds.indexOf(id)] || null;
  }

  pause() {
    this._paused = true;
    return this._continue();
  }

  persist(dtOrForever) {
    if (dtOrForever == null) return this._persist;
    this._persist = dtOrForever;
    return this;
  }

  play() {
    // Now make sure we are not paused and continue the animation
    this._paused = false;
    return this.updateTime()._continue();
  }

  reverse(yes) {
    const currentSpeed = this.speed();
    if (yes == null) return this.speed(-currentSpeed);
    const positive = Math.abs(currentSpeed);
    return this.speed(yes ? -positive : positive);
  } // schedules a runner on the timeline


  schedule(runner, delay, when) {
    if (runner == null) {
      return this._runners.map(makeSchedule);
    } // The start time for the next animation can either be given explicitly,
    // derived from the current timeline time or it can be relative to the
    // last start time to chain animations directly


    let absoluteStartTime = 0;
    const endTime = this.getEndTime();
    delay = delay || 0; // Work out when to start the animation

    if (when == null || when === 'last' || when === 'after') {
      // Take the last time and increment
      absoluteStartTime = endTime;
    } else if (when === 'absolute' || when === 'start') {
      absoluteStartTime = delay;
      delay = 0;
    } else if (when === 'now') {
      absoluteStartTime = this._time;
    } else if (when === 'relative') {
      const runnerInfo = this.getRunnerInfoById(runner.id);

      if (runnerInfo) {
        absoluteStartTime = runnerInfo.start + delay;
        delay = 0;
      }
    } else if (when === 'with-last') {
      const lastRunnerInfo = this.getLastRunnerInfo();
      const lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
      absoluteStartTime = lastStartTime;
    } else {
      throw new Error('Invalid value for the "when" parameter');
    } // Manage runner


    runner.unschedule();
    runner.timeline(this);
    const persist = runner.persist();
    const runnerInfo = {
      persist: persist === null ? this._persist : persist,
      start: absoluteStartTime + delay,
      runner
    };
    this._lastRunnerId = runner.id;

    this._runners.push(runnerInfo);

    this._runners.sort((a, b) => a.start - b.start);

    this._runnerIds = this._runners.map(info => info.runner.id);

    this.updateTime()._continue();

    return this;
  }

  seek(dt) {
    return this.time(this._time + dt);
  }

  source(fn) {
    if (fn == null) return this._timeSource;
    this._timeSource = fn;
    return this;
  }

  speed(speed) {
    if (speed == null) return this._speed;
    this._speed = speed;
    return this;
  }

  stop() {
    // Go to start and pause
    this.time(0);
    return this.pause();
  }

  time(time) {
    if (time == null) return this._time;
    this._time = time;
    return this._continue(true);
  } // Remove the runner from this timeline


  unschedule(runner) {
    const index = this._runnerIds.indexOf(runner.id);

    if (index < 0) return this;

    this._runners.splice(index, 1);

    this._runnerIds.splice(index, 1);

    runner.timeline(null);
    return this;
  } // Makes sure, that after pausing the time doesn't jump


  updateTime() {
    if (!this.active()) {
      this._lastSourceTime = this._timeSource();
    }

    return this;
  } // Checks if we are running and continues the animation


  _continue(immediateStep = false) {
    Animator.cancelFrame(this._nextFrame);
    this._nextFrame = null;
    if (immediateStep) return this._stepImmediate();
    if (this._paused) return this;
    this._nextFrame = Animator.frame(this._step);
    return this;
  }

  _stepFn(immediateStep = false) {
    // Get the time delta from the last time and update the time
    const time = this._timeSource();

    let dtSource = time - this._lastSourceTime;
    if (immediateStep) dtSource = 0;
    const dtTime = this._speed * dtSource + (this._time - this._lastStepTime);
    this._lastSourceTime = time; // Only update the time if we use the timeSource.
    // Otherwise use the current time

    if (!immediateStep) {
      // Update the time
      this._time += dtTime;
      this._time = this._time < 0 ? 0 : this._time;
    }

    this._lastStepTime = this._time;
    this.fire('time', this._time); // This is for the case that the timeline was seeked so that the time
    // is now before the startTime of the runner. Thats why we need to set
    // the runner to position 0
    // FIXME:
    // However, reseting in insertion order leads to bugs. Considering the case,
    // where 2 runners change the same attribute but in different times,
    // reseting both of them will lead to the case where the later defined
    // runner always wins the reset even if the other runner started earlier
    // and therefore should win the attribute battle
    // this can be solved by reseting them backwards

    for (let k = this._runners.length; k--;) {
      // Get and run the current runner and ignore it if its inactive
      const runnerInfo = this._runners[k];
      const runner = runnerInfo.runner; // Make sure that we give the actual difference
      // between runner start time and now

      const dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet
      // and try to reset it

      if (dtToStart <= 0) {
        runner.reset();
      }
    } // Run all of the runners directly


    let runnersLeft = false;

    for (let i = 0, len = this._runners.length; i < len; i++) {
      // Get and run the current runner and ignore it if its inactive
      const runnerInfo = this._runners[i];
      const runner = runnerInfo.runner;
      let dt = dtTime; // Make sure that we give the actual difference
      // between runner start time and now

      const dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet

      if (dtToStart <= 0) {
        runnersLeft = true;
        continue;
      } else if (dtToStart < dt) {
        // Adjust dt to make sure that animation is on point
        dt = dtToStart;
      }

      if (!runner.active()) continue; // If this runner is still going, signal that we need another animation
      // frame, otherwise, remove the completed runner

      const finished = runner.step(dt).done;

      if (!finished) {
        runnersLeft = true; // continue
      } else if (runnerInfo.persist !== true) {
        // runner is finished. And runner might get removed
        const endTime = runner.duration() - runner.time() + this._time;

        if (endTime + runnerInfo.persist < this._time) {
          // Delete runner and correct index
          runner.unschedule();
          --i;
          --len;
        }
      }
    } // Basically: we continue when there are runners right from us in time
    // when -->, and when runners are left from us when <--


    if (runnersLeft && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0) {
      this._continue();
    } else {
      this.pause();
      this.fire('finished');
    }

    return this;
  }

}
registerMethods({
  Element: {
    timeline: function (timeline) {
      if (timeline == null) {
        this._timeline = this._timeline || new Timeline();
        return this._timeline;
      } else {
        this._timeline = timeline;
        return this;
      }
    }
  }
});

class Runner extends EventTarget {
  constructor(options) {
    super(); // Store a unique id on the runner, so that we can identify it later

    this.id = Runner.id++; // Ensure a default value

    options = options == null ? timeline.duration : options; // Ensure that we get a controller

    options = typeof options === 'function' ? new Controller(options) : options; // Declare all of the variables

    this._element = null;
    this._timeline = null;
    this.done = false;
    this._queue = []; // Work out the stepper and the duration

    this._duration = typeof options === 'number' && options;
    this._isDeclarative = options instanceof Controller;
    this._stepper = this._isDeclarative ? options : new Ease(); // We copy the current values from the timeline because they can change

    this._history = {}; // Store the state of the runner

    this.enabled = true;
    this._time = 0;
    this._lastTime = 0; // At creation, the runner is in reseted state

    this._reseted = true; // Save transforms applied to this runner

    this.transforms = new Matrix();
    this.transformId = 1; // Looping variables

    this._haveReversed = false;
    this._reverse = false;
    this._loopsDone = 0;
    this._swing = false;
    this._wait = 0;
    this._times = 1;
    this._frameId = null; // Stores how long a runner is stored after beeing done

    this._persist = this._isDeclarative ? true : null;
  }

  static sanitise(duration, delay, when) {
    // Initialise the default parameters
    let times = 1;
    let swing = false;
    let wait = 0;
    duration = duration || timeline.duration;
    delay = delay || timeline.delay;
    when = when || 'last'; // If we have an object, unpack the values

    if (typeof duration === 'object' && !(duration instanceof Stepper)) {
      delay = duration.delay || delay;
      when = duration.when || when;
      swing = duration.swing || swing;
      times = duration.times || times;
      wait = duration.wait || wait;
      duration = duration.duration || timeline.duration;
    }

    return {
      duration: duration,
      delay: delay,
      swing: swing,
      times: times,
      wait: wait,
      when: when
    };
  }

  active(enabled) {
    if (enabled == null) return this.enabled;
    this.enabled = enabled;
    return this;
  }
  /*
  Private Methods
  ===============
  Methods that shouldn't be used externally
  */


  addTransform(transform, index) {
    this.transforms.lmultiplyO(transform);
    return this;
  }

  after(fn) {
    return this.on('finished', fn);
  }

  animate(duration, delay, when) {
    const o = Runner.sanitise(duration, delay, when);
    const runner = new Runner(o.duration);
    if (this._timeline) runner.timeline(this._timeline);
    if (this._element) runner.element(this._element);
    return runner.loop(o).schedule(o.delay, o.when);
  }

  clearTransform() {
    this.transforms = new Matrix();
    return this;
  } // TODO: Keep track of all transformations so that deletion is faster


  clearTransformsFromQueue() {
    if (!this.done || !this._timeline || !this._timeline._runnerIds.includes(this.id)) {
      this._queue = this._queue.filter(item => {
        return !item.isTransform;
      });
    }
  }

  delay(delay) {
    return this.animate(0, delay);
  }

  duration() {
    return this._times * (this._wait + this._duration) - this._wait;
  }

  during(fn) {
    return this.queue(null, fn);
  }

  ease(fn) {
    this._stepper = new Ease(fn);
    return this;
  }
  /*
  Runner Definitions
  ==================
  These methods help us define the runtime behaviour of the Runner or they
  help us make new runners from the current runner
  */


  element(element) {
    if (element == null) return this._element;
    this._element = element;

    element._prepareRunner();

    return this;
  }

  finish() {
    return this.step(Infinity);
  }

  loop(times, swing, wait) {
    // Deal with the user passing in an object
    if (typeof times === 'object') {
      swing = times.swing;
      wait = times.wait;
      times = times.times;
    } // Sanitise the values and store them


    this._times = times || Infinity;
    this._swing = swing || false;
    this._wait = wait || 0; // Allow true to be passed

    if (this._times === true) {
      this._times = Infinity;
    }

    return this;
  }

  loops(p) {
    const loopDuration = this._duration + this._wait;

    if (p == null) {
      const loopsDone = Math.floor(this._time / loopDuration);
      const relativeTime = this._time - loopsDone * loopDuration;
      const position = relativeTime / this._duration;
      return Math.min(loopsDone + position, this._times);
    }

    const whole = Math.floor(p);
    const partial = p % 1;
    const time = loopDuration * whole + this._duration * partial;
    return this.time(time);
  }

  persist(dtOrForever) {
    if (dtOrForever == null) return this._persist;
    this._persist = dtOrForever;
    return this;
  }

  position(p) {
    // Get all of the variables we need
    const x = this._time;
    const d = this._duration;
    const w = this._wait;
    const t = this._times;
    const s = this._swing;
    const r = this._reverse;
    let position;

    if (p == null) {
      /*
      This function converts a time to a position in the range [0, 1]
      The full explanation can be found in this desmos demonstration
        https://www.desmos.com/calculator/u4fbavgche
      The logic is slightly simplified here because we can use booleans
      */
      // Figure out the value without thinking about the start or end time
      const f = function (x) {
        const swinging = s * Math.floor(x % (2 * (w + d)) / (w + d));
        const backwards = swinging && !r || !swinging && r;
        const uncliped = Math.pow(-1, backwards) * (x % (w + d)) / d + backwards;
        const clipped = Math.max(Math.min(uncliped, 1), 0);
        return clipped;
      }; // Figure out the value by incorporating the start time


      const endTime = t * (w + d) - w;
      position = x <= 0 ? Math.round(f(1e-5)) : x < endTime ? f(x) : Math.round(f(endTime - 1e-5));
      return position;
    } // Work out the loops done and add the position to the loops done


    const loopsDone = Math.floor(this.loops());
    const swingForward = s && loopsDone % 2 === 0;
    const forwards = swingForward && !r || r && swingForward;
    position = loopsDone + (forwards ? p : 1 - p);
    return this.loops(position);
  }

  progress(p) {
    if (p == null) {
      return Math.min(1, this._time / this.duration());
    }

    return this.time(p * this.duration());
  }
  /*
  Basic Functionality
  ===================
  These methods allow us to attach basic functions to the runner directly
  */


  queue(initFn, runFn, retargetFn, isTransform) {
    this._queue.push({
      initialiser: initFn || noop,
      runner: runFn || noop,
      retarget: retargetFn,
      isTransform: isTransform,
      initialised: false,
      finished: false
    });

    const timeline = this.timeline();
    timeline && this.timeline()._continue();
    return this;
  }

  reset() {
    if (this._reseted) return this;
    this.time(0);
    this._reseted = true;
    return this;
  }

  reverse(reverse) {
    this._reverse = reverse == null ? !this._reverse : reverse;
    return this;
  }

  schedule(timeline, delay, when) {
    // The user doesn't need to pass a timeline if we already have one
    if (!(timeline instanceof Timeline)) {
      when = delay;
      delay = timeline;
      timeline = this.timeline();
    } // If there is no timeline, yell at the user...


    if (!timeline) {
      throw Error('Runner cannot be scheduled without timeline');
    } // Schedule the runner on the timeline provided


    timeline.schedule(this, delay, when);
    return this;
  }

  step(dt) {
    // If we are inactive, this stepper just gets skipped
    if (!this.enabled) return this; // Update the time and get the new position

    dt = dt == null ? 16 : dt;
    this._time += dt;
    const position = this.position(); // Figure out if we need to run the stepper in this frame

    const running = this._lastPosition !== position && this._time >= 0;
    this._lastPosition = position; // Figure out if we just started

    const duration = this.duration();
    const justStarted = this._lastTime <= 0 && this._time > 0;
    const justFinished = this._lastTime < duration && this._time >= duration;
    this._lastTime = this._time;

    if (justStarted) {
      this.fire('start', this);
    } // Work out if the runner is finished set the done flag here so animations
    // know, that they are running in the last step (this is good for
    // transformations which can be merged)


    const declarative = this._isDeclarative;
    this.done = !declarative && !justFinished && this._time >= duration; // Runner is running. So its not in reseted state anymore

    this._reseted = false;
    let converged = false; // Call initialise and the run function

    if (running || declarative) {
      this._initialise(running); // clear the transforms on this runner so they dont get added again and again


      this.transforms = new Matrix();
      converged = this._run(declarative ? dt : position);
      this.fire('step', this);
    } // correct the done flag here
    // declaritive animations itself know when they converged


    this.done = this.done || converged && declarative;

    if (justFinished) {
      this.fire('finished', this);
    }

    return this;
  }
  /*
  Runner animation methods
  ========================
  Control how the animation plays
  */


  time(time) {
    if (time == null) {
      return this._time;
    }

    const dt = time - this._time;
    this.step(dt);
    return this;
  }

  timeline(timeline) {
    // check explicitly for undefined so we can set the timeline to null
    if (typeof timeline === 'undefined') return this._timeline;
    this._timeline = timeline;
    return this;
  }

  unschedule() {
    const timeline = this.timeline();
    timeline && timeline.unschedule(this);
    return this;
  } // Run each initialise function in the runner if required


  _initialise(running) {
    // If we aren't running, we shouldn't initialise when not declarative
    if (!running && !this._isDeclarative) return; // Loop through all of the initialisers

    for (let i = 0, len = this._queue.length; i < len; ++i) {
      // Get the current initialiser
      const current = this._queue[i]; // Determine whether we need to initialise

      const needsIt = this._isDeclarative || !current.initialised && running;
      running = !current.finished; // Call the initialiser if we need to

      if (needsIt && running) {
        current.initialiser.call(this);
        current.initialised = true;
      }
    }
  } // Save a morpher to the morpher list so that we can retarget it later


  _rememberMorpher(method, morpher) {
    this._history[method] = {
      morpher: morpher,
      caller: this._queue[this._queue.length - 1]
    }; // We have to resume the timeline in case a controller
    // is already done without being ever run
    // This can happen when e.g. this is done:
    //    anim = el.animate(new SVG.Spring)
    // and later
    //    anim.move(...)

    if (this._isDeclarative) {
      const timeline = this.timeline();
      timeline && timeline.play();
    }
  } // Try to set the target for a morpher if the morpher exists, otherwise
  // Run each run function for the position or dt given


  _run(positionOrDt) {
    // Run all of the _queue directly
    let allfinished = true;

    for (let i = 0, len = this._queue.length; i < len; ++i) {
      // Get the current function to run
      const current = this._queue[i]; // Run the function if its not finished, we keep track of the finished
      // flag for the sake of declarative _queue

      const converged = current.runner.call(this, positionOrDt);
      current.finished = current.finished || converged === true;
      allfinished = allfinished && current.finished;
    } // We report when all of the constructors are finished


    return allfinished;
  } // do nothing and return false


  _tryRetarget(method, target, extra) {
    if (this._history[method]) {
      // if the last method wasnt even initialised, throw it away
      if (!this._history[method].caller.initialised) {
        const index = this._queue.indexOf(this._history[method].caller);

        this._queue.splice(index, 1);

        return false;
      } // for the case of transformations, we use the special retarget function
      // which has access to the outer scope


      if (this._history[method].caller.retarget) {
        this._history[method].caller.retarget.call(this, target, extra); // for everything else a simple morpher change is sufficient

      } else {
        this._history[method].morpher.to(target);
      }

      this._history[method].caller.finished = false;
      const timeline = this.timeline();
      timeline && timeline.play();
      return true;
    }

    return false;
  }

}
Runner.id = 0;
class FakeRunner {
  constructor(transforms = new Matrix(), id = -1, done = true) {
    this.transforms = transforms;
    this.id = id;
    this.done = done;
  }

  clearTransformsFromQueue() {}

}
extend([Runner, FakeRunner], {
  mergeWith(runner) {
    return new FakeRunner(runner.transforms.lmultiply(this.transforms), runner.id);
  }

}); // FakeRunner.emptyRunner = new FakeRunner()

const lmultiply = (last, curr) => last.lmultiplyO(curr);

const getRunnerTransform = runner => runner.transforms;

function mergeTransforms() {
  // Find the matrix to apply to the element and apply it
  const runners = this._transformationRunners.runners;
  const netTransform = runners.map(getRunnerTransform).reduce(lmultiply, new Matrix());
  this.transform(netTransform);

  this._transformationRunners.merge();

  if (this._transformationRunners.length() === 1) {
    this._frameId = null;
  }
}

class RunnerArray {
  constructor() {
    this.runners = [];
    this.ids = [];
  }

  add(runner) {
    if (this.runners.includes(runner)) return;
    const id = runner.id + 1;
    this.runners.push(runner);
    this.ids.push(id);
    return this;
  }

  clearBefore(id) {
    const deleteCnt = this.ids.indexOf(id + 1) || 1;
    this.ids.splice(0, deleteCnt, 0);
    this.runners.splice(0, deleteCnt, new FakeRunner()).forEach(r => r.clearTransformsFromQueue());
    return this;
  }

  edit(id, newRunner) {
    const index = this.ids.indexOf(id + 1);
    this.ids.splice(index, 1, id + 1);
    this.runners.splice(index, 1, newRunner);
    return this;
  }

  getByID(id) {
    return this.runners[this.ids.indexOf(id + 1)];
  }

  length() {
    return this.ids.length;
  }

  merge() {
    let lastRunner = null;

    for (let i = 0; i < this.runners.length; ++i) {
      const runner = this.runners[i];
      const condition = lastRunner && runner.done && lastRunner.done // don't merge runner when persisted on timeline
      && (!runner._timeline || !runner._timeline._runnerIds.includes(runner.id)) && (!lastRunner._timeline || !lastRunner._timeline._runnerIds.includes(lastRunner.id));

      if (condition) {
        // the +1 happens in the function
        this.remove(runner.id);
        const newRunner = runner.mergeWith(lastRunner);
        this.edit(lastRunner.id, newRunner);
        lastRunner = newRunner;
        --i;
      } else {
        lastRunner = runner;
      }
    }

    return this;
  }

  remove(id) {
    const index = this.ids.indexOf(id + 1);
    this.ids.splice(index, 1);
    this.runners.splice(index, 1);
    return this;
  }

}
registerMethods({
  Element: {
    animate(duration, delay, when) {
      const o = Runner.sanitise(duration, delay, when);
      const timeline = this.timeline();
      return new Runner(o.duration).loop(o).element(this).timeline(timeline.play()).schedule(o.delay, o.when);
    },

    delay(by, when) {
      return this.animate(0, by, when);
    },

    // this function searches for all runners on the element and deletes the ones
    // which run before the current one. This is because absolute transformations
    // overwfrite anything anyway so there is no need to waste time computing
    // other runners
    _clearTransformRunnersBefore(currentRunner) {
      this._transformationRunners.clearBefore(currentRunner.id);
    },

    _currentTransform(current) {
      return this._transformationRunners.runners // we need the equal sign here to make sure, that also transformations
      // on the same runner which execute before the current transformation are
      // taken into account
      .filter(runner => runner.id <= current.id).map(getRunnerTransform).reduce(lmultiply, new Matrix());
    },

    _addRunner(runner) {
      this._transformationRunners.add(runner); // Make sure that the runner merge is executed at the very end of
      // all Animator functions. Thats why we use immediate here to execute
      // the merge right after all frames are run


      Animator.cancelImmediate(this._frameId);
      this._frameId = Animator.immediate(mergeTransforms.bind(this));
    },

    _prepareRunner() {
      if (this._frameId == null) {
        this._transformationRunners = new RunnerArray().add(new FakeRunner(new Matrix(this)));
      }
    }

  }
}); // Will output the elements from array A that are not in the array B

const difference = (a, b) => a.filter(x => !b.includes(x));

extend(Runner, {
  attr(a, v) {
    return this.styleAttr('attr', a, v);
  },

  // Add animatable styles
  css(s, v) {
    return this.styleAttr('css', s, v);
  },

  styleAttr(type, nameOrAttrs, val) {
    if (typeof nameOrAttrs === 'string') {
      return this.styleAttr(type, {
        [nameOrAttrs]: val
      });
    }

    let attrs = nameOrAttrs;
    if (this._tryRetarget(type, attrs)) return this;
    let morpher = new Morphable(this._stepper).to(attrs);
    let keys = Object.keys(attrs);
    this.queue(function () {
      morpher = morpher.from(this.element()[type](keys));
    }, function (pos) {
      this.element()[type](morpher.at(pos).valueOf());
      return morpher.done();
    }, function (newToAttrs) {
      // Check if any new keys were added
      const newKeys = Object.keys(newToAttrs);
      const differences = difference(newKeys, keys); // If their are new keys, initialize them and add them to morpher

      if (differences.length) {
        // Get the values
        const addedFromAttrs = this.element()[type](differences); // Get the already initialized values

        const oldFromAttrs = new ObjectBag(morpher.from()).valueOf(); // Merge old and new

        Object.assign(oldFromAttrs, addedFromAttrs);
        morpher.from(oldFromAttrs);
      } // Get the object from the morpher


      const oldToAttrs = new ObjectBag(morpher.to()).valueOf(); // Merge in new attributes

      Object.assign(oldToAttrs, newToAttrs); // Change morpher target

      morpher.to(oldToAttrs); // Make sure that we save the work we did so we don't need it to do again

      keys = newKeys;
      attrs = newToAttrs;
    });

    this._rememberMorpher(type, morpher);

    return this;
  },

  zoom(level, point) {
    if (this._tryRetarget('zoom', level, point)) return this;
    let morpher = new Morphable(this._stepper).to(new SVGNumber(level));
    this.queue(function () {
      morpher = morpher.from(this.element().zoom());
    }, function (pos) {
      this.element().zoom(morpher.at(pos), point);
      return morpher.done();
    }, function (newLevel, newPoint) {
      point = newPoint;
      morpher.to(newLevel);
    });

    this._rememberMorpher('zoom', morpher);

    return this;
  },

  /**
   ** absolute transformations
   **/
  //
  // M v -----|-----(D M v = F v)------|----->  T v
  //
  // 1. define the final state (T) and decompose it (once)
  //    t = [tx, ty, the, lam, sy, sx]
  // 2. on every frame: pull the current state of all previous transforms
  //    (M - m can change)
  //   and then write this as m = [tx0, ty0, the0, lam0, sy0, sx0]
  // 3. Find the interpolated matrix F(pos) = m + pos * (t - m)
  //   - Note F(0) = M
  //   - Note F(1) = T
  // 4. Now you get the delta matrix as a result: D = F * inv(M)
  transform(transforms, relative, affine) {
    // If we have a declarative function, we should retarget it if possible
    relative = transforms.relative || relative;

    if (this._isDeclarative && !relative && this._tryRetarget('transform', transforms)) {
      return this;
    } // Parse the parameters


    const isMatrix = Matrix.isMatrixLike(transforms);
    affine = transforms.affine != null ? transforms.affine : affine != null ? affine : !isMatrix; // Create a morepher and set its type

    const morpher = new Morphable(this._stepper).type(affine ? TransformBag : Matrix);
    let origin;
    let element;
    let current;
    let currentAngle;
    let startTransform;

    function setup() {
      // make sure element and origin is defined
      element = element || this.element();
      origin = origin || getOrigin(transforms, element);
      startTransform = new Matrix(relative ? undefined : element); // add the runner to the element so it can merge transformations

      element._addRunner(this); // Deactivate all transforms that have run so far if we are absolute


      if (!relative) {
        element._clearTransformRunnersBefore(this);
      }
    }

    function run(pos) {
      // clear all other transforms before this in case something is saved
      // on this runner. We are absolute. We dont need these!
      if (!relative) this.clearTransform();
      const {
        x,
        y
      } = new Point(origin).transform(element._currentTransform(this));
      let target = new Matrix({ ...transforms,
        origin: [x, y]
      });
      let start = this._isDeclarative && current ? current : startTransform;

      if (affine) {
        target = target.decompose(x, y);
        start = start.decompose(x, y); // Get the current and target angle as it was set

        const rTarget = target.rotate;
        const rCurrent = start.rotate; // Figure out the shortest path to rotate directly

        const possibilities = [rTarget - 360, rTarget, rTarget + 360];
        const distances = possibilities.map(a => Math.abs(a - rCurrent));
        const shortest = Math.min(...distances);
        const index = distances.indexOf(shortest);
        target.rotate = possibilities[index];
      }

      if (relative) {
        // we have to be careful here not to overwrite the rotation
        // with the rotate method of Matrix
        if (!isMatrix) {
          target.rotate = transforms.rotate || 0;
        }

        if (this._isDeclarative && currentAngle) {
          start.rotate = currentAngle;
        }
      }

      morpher.from(start);
      morpher.to(target);
      const affineParameters = morpher.at(pos);
      currentAngle = affineParameters.rotate;
      current = new Matrix(affineParameters);
      this.addTransform(current);

      element._addRunner(this);

      return morpher.done();
    }

    function retarget(newTransforms) {
      // only get a new origin if it changed since the last call
      if ((newTransforms.origin || 'center').toString() !== (transforms.origin || 'center').toString()) {
        origin = getOrigin(newTransforms, element);
      } // overwrite the old transformations with the new ones


      transforms = { ...newTransforms,
        origin
      };
    }

    this.queue(setup, run, retarget, true);
    this._isDeclarative && this._rememberMorpher('transform', morpher);
    return this;
  },

  // Animatable x-axis
  x(x, relative) {
    return this._queueNumber('x', x);
  },

  // Animatable y-axis
  y(y) {
    return this._queueNumber('y', y);
  },

  dx(x = 0) {
    return this._queueNumberDelta('x', x);
  },

  dy(y = 0) {
    return this._queueNumberDelta('y', y);
  },

  dmove(x, y) {
    return this.dx(x).dy(y);
  },

  _queueNumberDelta(method, to) {
    to = new SVGNumber(to); // Try to change the target if we have this method already registerd

    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    const morpher = new Morphable(this._stepper).to(to);
    let from = null;
    this.queue(function () {
      from = this.element()[method]();
      morpher.from(from);
      morpher.to(from + to);
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }, function (newTo) {
      morpher.to(from + new SVGNumber(newTo));
    }); // Register the morpher so that if it is changed again, we can retarget it

    this._rememberMorpher(method, morpher);

    return this;
  },

  _queueObject(method, to) {
    // Try to change the target if we have this method already registerd
    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    const morpher = new Morphable(this._stepper).to(to);
    this.queue(function () {
      morpher.from(this.element()[method]());
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }); // Register the morpher so that if it is changed again, we can retarget it

    this._rememberMorpher(method, morpher);

    return this;
  },

  _queueNumber(method, value) {
    return this._queueObject(method, new SVGNumber(value));
  },

  // Animatable center x-axis
  cx(x) {
    return this._queueNumber('cx', x);
  },

  // Animatable center y-axis
  cy(y) {
    return this._queueNumber('cy', y);
  },

  // Add animatable move
  move(x, y) {
    return this.x(x).y(y);
  },

  // Add animatable center
  center(x, y) {
    return this.cx(x).cy(y);
  },

  // Add animatable size
  size(width, height) {
    // animate bbox based size for all other elements
    let box;

    if (!width || !height) {
      box = this._element.bbox();
    }

    if (!width) {
      width = box.width / box.height * height;
    }

    if (!height) {
      height = box.height / box.width * width;
    }

    return this.width(width).height(height);
  },

  // Add animatable width
  width(width) {
    return this._queueNumber('width', width);
  },

  // Add animatable height
  height(height) {
    return this._queueNumber('height', height);
  },

  // Add animatable plot
  plot(a, b, c, d) {
    // Lines can be plotted with 4 arguments
    if (arguments.length === 4) {
      return this.plot([a, b, c, d]);
    }

    if (this._tryRetarget('plot', a)) return this;
    const morpher = new Morphable(this._stepper).type(this._element.MorphArray).to(a);
    this.queue(function () {
      morpher.from(this._element.array());
    }, function (pos) {
      this._element.plot(morpher.at(pos));

      return morpher.done();
    });

    this._rememberMorpher('plot', morpher);

    return this;
  },

  // Add leading method
  leading(value) {
    return this._queueNumber('leading', value);
  },

  // Add animatable viewbox
  viewbox(x, y, width, height) {
    return this._queueObject('viewbox', new Box(x, y, width, height));
  },

  update(o) {
    if (typeof o !== 'object') {
      return this.update({
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      });
    }

    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
    if (o.color != null) this.attr('stop-color', o.color);
    if (o.offset != null) this.attr('offset', o.offset);
    return this;
  }

});
extend(Runner, {
  rx,
  ry,
  from,
  to
});
register(Runner, 'Runner');

class Svg extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('svg', node), attrs);
    this.namespace();
  } // Creates and returns defs element


  defs() {
    if (!this.isRoot()) return this.root().defs();
    return adopt(this.node.querySelector('defs')) || this.put(new Defs());
  }

  isRoot() {
    return !this.node.parentNode || !(this.node.parentNode instanceof globals.window.SVGElement) && this.node.parentNode.nodeName !== '#document-fragment';
  } // Add namespaces


  namespace() {
    if (!this.isRoot()) return this.root().namespace();
    return this.attr({
      xmlns: svg,
      version: '1.1'
    }).attr('xmlns:xlink', xlink, xmlns).attr('xmlns:svgjs', svgjs, xmlns);
  }

  removeNamespace() {
    return this.attr({
      xmlns: null,
      version: null
    }).attr('xmlns:xlink', null, xmlns).attr('xmlns:svgjs', null, xmlns);
  } // Check if this is a root svg
  // If not, call root() from this element


  root() {
    if (this.isRoot()) return this;
    return super.root();
  }

}
registerMethods({
  Container: {
    // Create nested svg document
    nested: wrapWithAttrCheck(function () {
      return this.put(new Svg());
    })
  }
});
register(Svg, 'Svg', true);

class Symbol extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('symbol', node), attrs);
  }

}
registerMethods({
  Container: {
    symbol: wrapWithAttrCheck(function () {
      return this.put(new Symbol());
    })
  }
});
register(Symbol, 'Symbol');

function plain(text) {
  // clear if build mode is disabled
  if (this._build === false) {
    this.clear();
  } // create text node


  this.node.appendChild(globals.document.createTextNode(text));
  return this;
} // Get length of text element

function length() {
  return this.node.getComputedTextLength();
} // Move over x-axis
// Text is moved by its bounding box
// text-anchor does NOT matter

function x$1(x, box = this.bbox()) {
  if (x == null) {
    return box.x;
  }

  return this.attr('x', this.attr('x') + x - box.x);
} // Move over y-axis

function y$1(y, box = this.bbox()) {
  if (y == null) {
    return box.y;
  }

  return this.attr('y', this.attr('y') + y - box.y);
}
function move$1(x, y, box = this.bbox()) {
  return this.x(x, box).y(y, box);
} // Move center over x-axis

function cx(x, box = this.bbox()) {
  if (x == null) {
    return box.cx;
  }

  return this.attr('x', this.attr('x') + x - box.cx);
} // Move center over y-axis

function cy(y, box = this.bbox()) {
  if (y == null) {
    return box.cy;
  }

  return this.attr('y', this.attr('y') + y - box.cy);
}
function center(x, y, box = this.bbox()) {
  return this.cx(x, box).cy(y, box);
}
function ax(x) {
  return this.attr('x', x);
}
function ay(y) {
  return this.attr('y', y);
}
function amove(x, y) {
  return this.ax(x).ay(y);
} // Enable / disable build mode

function build(build) {
  this._build = !!build;
  return this;
}

var textable = {
  __proto__: null,
  plain: plain,
  length: length,
  x: x$1,
  y: y$1,
  move: move$1,
  cx: cx,
  cy: cy,
  center: center,
  ax: ax,
  ay: ay,
  amove: amove,
  build: build
};

class Text extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('text', node), attrs);
    this.dom.leading = new SVGNumber(1.3); // store leading value for rebuilding

    this._rebuild = true; // enable automatic updating of dy values

    this._build = false; // disable build mode for adding multiple lines
  } // Set / get leading


  leading(value) {
    // act as getter
    if (value == null) {
      return this.dom.leading;
    } // act as setter


    this.dom.leading = new SVGNumber(value);
    return this.rebuild();
  } // Rebuild appearance type


  rebuild(rebuild) {
    // store new rebuild flag if given
    if (typeof rebuild === 'boolean') {
      this._rebuild = rebuild;
    } // define position of all lines


    if (this._rebuild) {
      const self = this;
      let blankLineOffset = 0;
      const leading = this.dom.leading;
      this.each(function (i) {
        const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
        const dy = leading * new SVGNumber(fontSize);

        if (this.dom.newLined) {
          this.attr('x', self.attr('x'));

          if (this.text() === '\n') {
            blankLineOffset += dy;
          } else {
            this.attr('dy', i ? dy + blankLineOffset : 0);
            blankLineOffset = 0;
          }
        }
      });
      this.fire('rebuild');
    }

    return this;
  } // overwrite method from parent to set data properly


  setData(o) {
    this.dom = o;
    this.dom.leading = new SVGNumber(o.leading || 1.3);
    return this;
  } // Set the text content


  text(text) {
    // act as getter
    if (text === undefined) {
      const children = this.node.childNodes;
      let firstLine = 0;
      text = '';

      for (let i = 0, len = children.length; i < len; ++i) {
        // skip textPaths - they are no lines
        if (children[i].nodeName === 'textPath') {
          if (i === 0) firstLine = 1;
          continue;
        } // add newline if its not the first child and newLined is set to true


        if (i !== firstLine && children[i].nodeType !== 3 && adopt(children[i]).dom.newLined === true) {
          text += '\n';
        } // add content of this node


        text += children[i].textContent;
      }

      return text;
    } // remove existing content


    this.clear().build(true);

    if (typeof text === 'function') {
      // call block
      text.call(this, this);
    } else {
      // store text and make sure text is not blank
      text = (text + '').split('\n'); // build new lines

      for (let j = 0, jl = text.length; j < jl; j++) {
        this.newLine(text[j]);
      }
    } // disable build mode and rebuild lines


    return this.build(false).rebuild();
  }

}
extend(Text, textable);
registerMethods({
  Container: {
    // Create text element
    text: wrapWithAttrCheck(function (text = '') {
      return this.put(new Text()).text(text);
    }),
    // Create plain text element
    plain: wrapWithAttrCheck(function (text = '') {
      return this.put(new Text()).plain(text);
    })
  }
});
register(Text, 'Text');

class Tspan extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('tspan', node), attrs);
    this._build = false; // disable build mode for adding multiple lines
  } // Shortcut dx


  dx(dx) {
    return this.attr('dx', dx);
  } // Shortcut dy


  dy(dy) {
    return this.attr('dy', dy);
  } // Create new line


  newLine() {
    // mark new line
    this.dom.newLined = true; // fetch parent

    const text = this.parent(); // early return in case we are not in a text element

    if (!(text instanceof Text)) {
      return this;
    }

    const i = text.index(this);
    const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
    const dy = text.dom.leading * new SVGNumber(fontSize); // apply new position

    return this.dy(i ? dy : 0).attr('x', text.x());
  } // Set text content


  text(text) {
    if (text == null) return this.node.textContent + (this.dom.newLined ? '\n' : '');

    if (typeof text === 'function') {
      this.clear().build(true);
      text.call(this, this);
      this.build(false);
    } else {
      this.plain(text);
    }

    return this;
  }

}
extend(Tspan, textable);
registerMethods({
  Tspan: {
    tspan: wrapWithAttrCheck(function (text = '') {
      const tspan = new Tspan(); // clear if build mode is disabled

      if (!this._build) {
        this.clear();
      } // add new tspan


      return this.put(tspan).text(text);
    })
  },
  Text: {
    newLine: function (text = '') {
      return this.tspan(text).newLine();
    }
  }
});
register(Tspan, 'Tspan');

class Circle extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('circle', node), attrs);
  }

  radius(r) {
    return this.attr('r', r);
  } // Radius x value


  rx(rx) {
    return this.attr('r', rx);
  } // Alias radius x value


  ry(ry) {
    return this.rx(ry);
  }

  size(size) {
    return this.radius(new SVGNumber(size).divide(2));
  }

}
extend(Circle, {
  x: x$3,
  y: y$3,
  cx: cx$1,
  cy: cy$1,
  width: width$2,
  height: height$2
});
registerMethods({
  Container: {
    // Create circle element
    circle: wrapWithAttrCheck(function (size = 0) {
      return this.put(new Circle()).size(size).move(0, 0);
    })
  }
});
register(Circle, 'Circle');

class ClipPath extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('clipPath', node), attrs);
  } // Unclip all clipped elements and remove itself


  remove() {
    // unclip all targets
    this.targets().forEach(function (el) {
      el.unclip();
    }); // remove clipPath from parent

    return super.remove();
  }

  targets() {
    return baseFind('svg [clip-path*="' + this.id() + '"]');
  }

}
registerMethods({
  Container: {
    // Create clipping element
    clip: wrapWithAttrCheck(function () {
      return this.defs().put(new ClipPath());
    })
  },
  Element: {
    // Distribute clipPath to svg element
    clipper() {
      return this.reference('clip-path');
    },

    clipWith(element) {
      // use given clip or create a new one
      const clipper = element instanceof ClipPath ? element : this.parent().clip().add(element); // apply mask

      return this.attr('clip-path', 'url("#' + clipper.id() + '")');
    },

    // Unclip element
    unclip() {
      return this.attr('clip-path', null);
    }

  }
});
register(ClipPath, 'ClipPath');

class ForeignObject extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('foreignObject', node), attrs);
  }

}
registerMethods({
  Container: {
    foreignObject: wrapWithAttrCheck(function (width, height) {
      return this.put(new ForeignObject()).size(width, height);
    })
  }
});
register(ForeignObject, 'ForeignObject');

function dmove(dx, dy) {
  this.children().forEach((child, i) => {
    let bbox; // We have to wrap this for elements that dont have a bbox
    // e.g. title and other descriptive elements

    try {
      // Get the childs bbox
      bbox = child.bbox();
    } catch (e) {
      return;
    } // Get childs matrix


    const m = new Matrix(child); // Translate childs matrix by amount and
    // transform it back into parents space

    const matrix = m.translate(dx, dy).transform(m.inverse()); // Calculate new x and y from old box

    const p = new Point(bbox.x, bbox.y).transform(matrix); // Move element

    child.move(p.x, p.y);
  });
  return this;
}
function dx(dx) {
  return this.dmove(dx, 0);
}
function dy(dy) {
  return this.dmove(0, dy);
}
function height(height, box = this.bbox()) {
  if (height == null) return box.height;
  return this.size(box.width, height, box);
}
function move(x = 0, y = 0, box = this.bbox()) {
  const dx = x - box.x;
  const dy = y - box.y;
  return this.dmove(dx, dy);
}
function size(width, height, box = this.bbox()) {
  const p = proportionalSize(this, width, height, box);
  const scaleX = p.width / box.width;
  const scaleY = p.height / box.height;
  this.children().forEach((child, i) => {
    const o = new Point(box).transform(new Matrix(child).inverse());
    child.scale(scaleX, scaleY, o.x, o.y);
  });
  return this;
}
function width(width, box = this.bbox()) {
  if (width == null) return box.width;
  return this.size(width, box.height, box);
}
function x(x, box = this.bbox()) {
  if (x == null) return box.x;
  return this.move(x, box.y, box);
}
function y(y, box = this.bbox()) {
  if (y == null) return box.y;
  return this.move(box.x, y, box);
}

var containerGeometry = {
  __proto__: null,
  dmove: dmove,
  dx: dx,
  dy: dy,
  height: height,
  move: move,
  size: size,
  width: width,
  x: x,
  y: y
};

class G extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('g', node), attrs);
  }

}
extend(G, containerGeometry);
registerMethods({
  Container: {
    // Create a group element
    group: wrapWithAttrCheck(function () {
      return this.put(new G());
    })
  }
});
register(G, 'G');

class A extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('a', node), attrs);
  } // Link target attribute


  target(target) {
    return this.attr('target', target);
  } // Link url


  to(url) {
    return this.attr('href', url, xlink);
  }

}
extend(A, containerGeometry);
registerMethods({
  Container: {
    // Create a hyperlink element
    link: wrapWithAttrCheck(function (url) {
      return this.put(new A()).to(url);
    })
  },
  Element: {
    unlink() {
      const link = this.linker();
      if (!link) return this;
      const parent = link.parent();

      if (!parent) {
        return this.remove();
      }

      const index = parent.index(link);
      parent.add(this, index);
      link.remove();
      return this;
    },

    linkTo(url) {
      // reuse old link if possible
      let link = this.linker();

      if (!link) {
        link = new A();
        this.wrap(link);
      }

      if (typeof url === 'function') {
        url.call(link, link);
      } else {
        link.to(url);
      }

      return this;
    },

    linker() {
      const link = this.parent();

      if (link && link.node.nodeName.toLowerCase() === 'a') {
        return link;
      }

      return null;
    }

  }
});
register(A, 'A');

class Mask extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('mask', node), attrs);
  } // Unmask all masked elements and remove itself


  remove() {
    // unmask all targets
    this.targets().forEach(function (el) {
      el.unmask();
    }); // remove mask from parent

    return super.remove();
  }

  targets() {
    return baseFind('svg [mask*="' + this.id() + '"]');
  }

}
registerMethods({
  Container: {
    mask: wrapWithAttrCheck(function () {
      return this.defs().put(new Mask());
    })
  },
  Element: {
    // Distribute mask to svg element
    masker() {
      return this.reference('mask');
    },

    maskWith(element) {
      // use given mask or create a new one
      const masker = element instanceof Mask ? element : this.parent().mask().add(element); // apply mask

      return this.attr('mask', 'url("#' + masker.id() + '")');
    },

    // Unmask element
    unmask() {
      return this.attr('mask', null);
    }

  }
});
register(Mask, 'Mask');

class Stop extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('stop', node), attrs);
  } // add color stops


  update(o) {
    if (typeof o === 'number' || o instanceof SVGNumber) {
      o = {
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      };
    } // set attributes


    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
    if (o.color != null) this.attr('stop-color', o.color);
    if (o.offset != null) this.attr('offset', new SVGNumber(o.offset));
    return this;
  }

}
registerMethods({
  Gradient: {
    // Add a color stop
    stop: function (offset, color, opacity) {
      return this.put(new Stop()).update(offset, color, opacity);
    }
  }
});
register(Stop, 'Stop');

function cssRule(selector, rule) {
  if (!selector) return '';
  if (!rule) return selector;
  let ret = selector + '{';

  for (const i in rule) {
    ret += unCamelCase(i) + ':' + rule[i] + ';';
  }

  ret += '}';
  return ret;
}

class Style extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('style', node), attrs);
  }

  addText(w = '') {
    this.node.textContent += w;
    return this;
  }

  font(name, src, params = {}) {
    return this.rule('@font-face', {
      fontFamily: name,
      src: src,
      ...params
    });
  }

  rule(selector, obj) {
    return this.addText(cssRule(selector, obj));
  }

}
registerMethods('Dom', {
  style(selector, obj) {
    return this.put(new Style()).rule(selector, obj);
  },

  fontface(name, src, params) {
    return this.put(new Style()).font(name, src, params);
  }

});
register(Style, 'Style');

class TextPath extends Text {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('textPath', node), attrs);
  } // return the array of the path track element


  array() {
    const track = this.track();
    return track ? track.array() : null;
  } // Plot path if any


  plot(d) {
    const track = this.track();
    let pathArray = null;

    if (track) {
      pathArray = track.plot(d);
    }

    return d == null ? pathArray : this;
  } // Get the path element


  track() {
    return this.reference('href');
  }

}
registerMethods({
  Container: {
    textPath: wrapWithAttrCheck(function (text, path) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = this.text(text);
      }

      return text.path(path);
    })
  },
  Text: {
    // Create path for text to run on
    path: wrapWithAttrCheck(function (track, importNodes = true) {
      const textPath = new TextPath(); // if track is a path, reuse it

      if (!(track instanceof Path)) {
        // create path element
        track = this.defs().path(track);
      } // link textPath to path and add content


      textPath.attr('href', '#' + track, xlink); // Transplant all nodes from text to textPath

      let node;

      if (importNodes) {
        while (node = this.node.firstChild) {
          textPath.node.appendChild(node);
        }
      } // add textPath element as child node and return textPath


      return this.put(textPath);
    }),

    // Get the textPath children
    textPath() {
      return this.findOne('textPath');
    }

  },
  Path: {
    // creates a textPath from this path
    text: wrapWithAttrCheck(function (text) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = new Text().addTo(this.parent()).text(text);
      } // Create textPath from text and path and return


      return text.path(this);
    }),

    targets() {
      return baseFind('svg textPath').filter(node => {
        return (node.attr('href') || '').includes(this.id());
      }); // Does not work in IE11. Use when IE support is dropped
      // return baseFind('svg textPath[*|href*="' + this.id() + '"]')
    }

  }
});
TextPath.prototype.MorphArray = PathArray;
register(TextPath, 'TextPath');

class Use extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('use', node), attrs);
  } // Use element as a reference


  use(element, file) {
    // Set lined element
    return this.attr('href', (file || '') + '#' + element, xlink);
  }

}
registerMethods({
  Container: {
    // Create a use element
    use: wrapWithAttrCheck(function (element, file) {
      return this.put(new Use()).use(element, file);
    })
  }
});
register(Use, 'Use');

/* Optional Modules */
const SVG = makeInstance;
extend([Svg, Symbol, Image, Pattern, Marker], getMethodsFor('viewbox'));
extend([Line, Polyline, Polygon, Path], getMethodsFor('marker'));
extend(Text, getMethodsFor('Text'));
extend(Path, getMethodsFor('Path'));
extend(Defs, getMethodsFor('Defs'));
extend([Text, Tspan], getMethodsFor('Tspan'));
extend([Rect, Ellipse, Gradient, Runner], getMethodsFor('radius'));
extend(EventTarget, getMethodsFor('EventTarget'));
extend(Dom, getMethodsFor('Dom'));
extend(Element, getMethodsFor('Element'));
extend(Shape, getMethodsFor('Shape'));
extend([Container, Fragment], getMethodsFor('Container'));
extend(Gradient, getMethodsFor('Gradient'));
extend(Runner, getMethodsFor('Runner'));
List.extend(getMethodNames());
registerMorphableType([SVGNumber, Color, Box, Matrix, SVGArray, PointArray, PathArray, Point]);
makeMorphable();


//# sourceMappingURL=svg.esm.js.map


/***/ }),

/***/ "./src/core/ui.ts":
/*!************************!*\
  !*** ./src/core/ui.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box": () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Box),
/* harmony export */   "Circle": () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Circle),
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "Container": () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Container),
/* harmony export */   "DragWindowState": () => (/* binding */ DragWindowState),
/* harmony export */   "EventArgs": () => (/* binding */ EventArgs),
/* harmony export */   "G": () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   "HoverPressedWidgetState": () => (/* binding */ HoverPressedWidgetState),
/* harmony export */   "HoverWidgetState": () => (/* binding */ HoverWidgetState),
/* harmony export */   "IdleDownWidgetState": () => (/* binding */ IdleDownWidgetState),
/* harmony export */   "IdleUpWidgetState": () => (/* binding */ IdleUpWidgetState),
/* harmony export */   "Number": () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Number),
/* harmony export */   "PressedOutWidgetState": () => (/* binding */ PressedOutWidgetState),
/* harmony export */   "PressedWidgetState": () => (/* binding */ PressedWidgetState),
/* harmony export */   "Rect": () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect),
/* harmony export */   "RoleType": () => (/* binding */ RoleType),
/* harmony export */   "SVG": () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG),
/* harmony export */   "Svg": () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Svg),
/* harmony export */   "Text": () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "Widget": () => (/* binding */ Widget),
/* harmony export */   "Window": () => (/* binding */ Window)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RoleType;
(function (RoleType) {
    RoleType["button"] = "button";
    RoleType["group"] = "group";
    RoleType["heading"] = "heading";
    RoleType["none"] = "none";
    RoleType["scrollbar"] = "scrollbar";
    RoleType["window"] = "window";
})(RoleType || (RoleType = {}));
var IdleUpWidgetState = /** @class */ (function () {
    function IdleUpWidgetState() {
    }
    IdleUpWidgetState.prototype.onEnter = function (component) {
        if (component.parent.getState() instanceof IdleDownWidgetState) {
            component.setState(new HoverPressedWidgetState());
            component.hoverPressedState();
        }
        else {
            component.setState(new HoverWidgetState());
            component.hoverState();
        }
    };
    IdleUpWidgetState.prototype.onLeave = function (component) { };
    IdleUpWidgetState.prototype.onPress = function (component) {
        component.setState(new IdleDownWidgetState());
        component.idledownState();
    };
    IdleUpWidgetState.prototype.onRelease = function (component) { };
    IdleUpWidgetState.prototype.onMove = function (component) {
    };
    IdleUpWidgetState.prototype.onKeyup = function (component) {
        component.keyupState();
    };
    return IdleUpWidgetState;
}());
var IdleDownWidgetState = /** @class */ (function () {
    function IdleDownWidgetState() {
    }
    IdleDownWidgetState.prototype.onEnter = function (component) { };
    IdleDownWidgetState.prototype.onLeave = function (component) { };
    IdleDownWidgetState.prototype.onPress = function (component) { };
    IdleDownWidgetState.prototype.onRelease = function (component) {
        component.setState(new IdleUpWidgetState());
        component.idleupState();
    };
    IdleDownWidgetState.prototype.onMove = function (component) {
        component.moveState();
    };
    IdleDownWidgetState.prototype.onKeyup = function (component) {
    };
    return IdleDownWidgetState;
}());
var HoverWidgetState = /** @class */ (function () {
    function HoverWidgetState() {
    }
    HoverWidgetState.prototype.onEnter = function (component) {
    };
    HoverWidgetState.prototype.onLeave = function (component) {
        component.setState(new IdleUpWidgetState());
        component.idleupState();
    };
    HoverWidgetState.prototype.onPress = function (component) {
        component.setState(new PressedWidgetState());
        component.pressedState();
    };
    HoverWidgetState.prototype.onRelease = function (component) {
    };
    HoverWidgetState.prototype.onMove = function (component) { };
    HoverWidgetState.prototype.onKeyup = function (component) {
    };
    return HoverWidgetState;
}());
var HoverPressedWidgetState = /** @class */ (function () {
    function HoverPressedWidgetState() {
    }
    HoverPressedWidgetState.prototype.onEnter = function (component) { };
    HoverPressedWidgetState.prototype.onLeave = function (component) {
        component.setState(new IdleUpWidgetState());
        component.idleupState();
    };
    HoverPressedWidgetState.prototype.onPress = function (component) { };
    HoverPressedWidgetState.prototype.onRelease = function (component) {
        component.setState(new HoverWidgetState());
        component.hoverState();
    };
    HoverPressedWidgetState.prototype.onMove = function (component) { };
    HoverPressedWidgetState.prototype.onKeyup = function (component) {
    };
    return HoverPressedWidgetState;
}());
var PressedWidgetState = /** @class */ (function () {
    function PressedWidgetState() {
    }
    PressedWidgetState.prototype.onEnter = function (component) {
    };
    PressedWidgetState.prototype.onLeave = function (component) {
        component.setState(new PressedOutWidgetState());
        component.pressedoutState();
    };
    PressedWidgetState.prototype.onPress = function (component) {
    };
    PressedWidgetState.prototype.onRelease = function (component) {
        component.setState(new HoverWidgetState());
        component.pressReleaseState();
    };
    PressedWidgetState.prototype.onMove = function (component) {
        if (component.isDraggable) {
            component.setState(new DragWindowState());
            component.moveState();
        }
    };
    PressedWidgetState.prototype.onKeyup = function (component) {
    };
    return PressedWidgetState;
}());
var PressedOutWidgetState = /** @class */ (function () {
    function PressedOutWidgetState() {
    }
    PressedOutWidgetState.prototype.onEnter = function (component) {
        component.setState(new PressedWidgetState());
        component.pressedState();
    };
    PressedOutWidgetState.prototype.onLeave = function (component) { };
    PressedOutWidgetState.prototype.onPress = function (component) { };
    PressedOutWidgetState.prototype.onRelease = function (component) {
        component.setState(new IdleUpWidgetState());
        component.idleupState();
    };
    PressedOutWidgetState.prototype.onMove = function (component) {
        if (component.isDraggable) {
            component.moveState();
        }
    };
    PressedOutWidgetState.prototype.onKeyup = function (component) {
    };
    return PressedOutWidgetState;
}());
var DragWindowState = /** @class */ (function () {
    function DragWindowState() {
    }
    DragWindowState.prototype.onEnter = function (component) { };
    DragWindowState.prototype.onLeave = function (component) {
        component.setState(new PressedOutWidgetState());
        component.pressedoutState();
    };
    DragWindowState.prototype.onPress = function (component) { };
    DragWindowState.prototype.onRelease = function (component) {
        component.setState(new HoverWidgetState());
        component.hoverState();
    };
    DragWindowState.prototype.onMove = function (component) {
        component.moveState();
    };
    DragWindowState.prototype.onKeyup = function (component) { };
    return DragWindowState;
}());
var KeypressWidgetState = /** @class */ (function () {
    function KeypressWidgetState() {
    }
    KeypressWidgetState.prototype.onEnter = function (component) { };
    KeypressWidgetState.prototype.onLeave = function (component) { };
    KeypressWidgetState.prototype.onPress = function (component) { };
    KeypressWidgetState.prototype.onRelease = function (component) { };
    KeypressWidgetState.prototype.onMove = function (component) { };
    KeypressWidgetState.prototype.onKeyup = function (component) {
        component.keyupState();
    };
    return KeypressWidgetState;
}());
/**
 * A simple class for passing event arguments containing an object, event, and an optional item reference.
 */
var EventArgs = /** @class */ (function () {
    /**
     * Creates a new EventArgs instance.
     * @param obj The object associated with the event.
     * @param event (Optional) The event that occurred.
     * @param itemRef (Optional) A reference to the item associated with the event.
     */
    function EventArgs(obj, event, itemRef) {
        this._event = event;
        this._obj = obj;
        if (typeof itemRef !== 'undefined') {
            this._itemRef = itemRef;
        }
    }
    Object.defineProperty(EventArgs.prototype, "event", {
        /**
         * Gets the event associated with the EventArgs instance.
         */
        get: function () {
            return this._event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventArgs.prototype, "obj", {
        /**
         * Gets the object associated with the EventArgs instance.
         */
        get: function () {
            return this._obj;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventArgs.prototype, "itemRef", {
        /**
         * Gets the item reference associated with the EventArgs instance.
         */
        get: function () {
            return this._itemRef;
        },
        enumerable: false,
        configurable: true
    });
    return EventArgs;
}());
var Component = /** @class */ (function () {
    function Component() {
        this.tabindex = 0;
        this._handlers = new Map();
        this.previousState = null;
        /**
         * flag true if widget needs to support a draggable state e.g., scrollbar
         */
        this.isDraggable = false;
        /* accessibility properties */
        this._role = null;
    }
    Object.defineProperty(Component.prototype, "role", {
        get: function () {
            return this._role;
        },
        /*
            Accessibility is opinionated. If role is not set, throw error.
        */
        set: function (role) {
            this._role = role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Component.prototype, "selectable", {
        get: function () {
            return this._isselectable;
        },
        /*
            Selectable is a flag to control whether or not a widget gets selected on a browser drag action.
            Generally, this should be set to false for widgets like a button, but true for widgets that support
            text input
        */
        set: function (val) {
            this._isselectable = val;
        },
        enumerable: false,
        configurable: true
    });
    Component.prototype.attach = function (handler, state) {
        this._handlers.set(state, handler);
    };
    Component.prototype.raise = function (event, state) {
        this._handlers.forEach(function (e, s) {
            //if state can be found, raise, otherwise raise everything (for backwards compat)
            if (state && s instanceof state.constructor) {
                e(event);
            }
            //if s is undefined, assume only one event attached, so raise
            if (s == undefined) {
                e(event);
            }
        });
    };
    Component.prototype.move = function (x, y) {
        if (this.outerSvg != null)
            this.outerSvg.move(x, y);
        this.update();
    };
    Component.prototype.getState = function () {
        return this.state;
    };
    Component.prototype.setState = function (state) {
        this.previousState = this.state;
        this.state = state;
    };
    /* override to handle graphical updates in derived widgets */
    Component.prototype.update = function () {
        if (this.role != null)
            this.outerSvg.attr({
                role: this.role,
                tabindex: this.tabindex
            });
        else
            throw new Error('Aria Role not implemented.');
    };
    return Component;
}());
var Window = /** @class */ (function (_super) {
    __extends(Window, _super);
    function Window(height, width) {
        var _this = _super.call(this) || this;
        _this.keyEvent = null;
        var body = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().addTo('body').size(width, height);
        var rect = body.rect(width, height).fill("white").stroke("black")
            .attr({ 'stroke-width': 3 });
        _this._window = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().addTo(body);
        _this.outerSvg = _this._window;
        _this.registerEvent(body);
        // set Aria role
        _this.role = RoleType.window;
        // set default state
        _this.setState(new IdleUpWidgetState());
        _this.observers = [];
        return _this;
    }
    Window.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Window.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    };
    Window.prototype.notifyObservers = function (state) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer(state);
        }
    };
    Window.prototype.registerEvent = function (obj) {
        var _this = this;
        (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)(window).on('keyup', function (event) {
            _this.keyEvent = event;
            _this.state.onKeyup(_this);
        }, window);
        (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)(window).on('selectionchange', function (event) {
            console.log(window.getSelection().toString());
        }, window);
        obj.mouseup(function (event) {
            _this.state.onRelease(_this);
        });
        obj.mousedown(function (event) {
            if (!_this.selectable) {
                // prevents draggable text selection
                event.preventDefault();
            }
            _this.state.onPress(_this);
        });
        obj.mouseover(function (event) {
        });
        obj.mouseout(function (event) {
        });
        obj.mousemove(function (event) {
            _this.state.onMove(_this);
        });
    };
    Object.defineProperty(Window.prototype, "window", {
        get: function () {
            return this._window;
        },
        enumerable: false,
        configurable: true
    });
    Window.prototype.idleupState = function () {
        this.notifyObservers(this.getState());
    };
    Window.prototype.idledownState = function () {
        this.notifyObservers(this.getState());
    };
    Window.prototype.moveState = function () {
        this.notifyObservers(this.getState());
    };
    Window.prototype.keyupState = function () {
        this.notifyObservers(new KeypressWidgetState());
    };
    //required to fulfill inheritance requirements
    //but not implemented for the window component
    Window.prototype.pressedState = function () { };
    Window.prototype.pressReleaseState = function () { };
    Window.prototype.hoverState = function () { };
    Window.prototype.hoverPressedState = function () { };
    Window.prototype.pressedoutState = function () { };
    return Window;
}(Component));
var Widget = /** @class */ (function (_super) {
    __extends(Widget, _super);
    function Widget(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.selectable = true;
        _this.registerWindowEvents();
        return _this;
    }
    Widget.prototype.registerWindowEvents = function () {
        var _this = this;
        this.parent.addObserver(function (state) {
            //We only want to modify widget state outside of the 
            //widget for state transitions that occur outside of
            //the widget's bounds.
            if (state instanceof IdleUpWidgetState &&
                _this.getState() instanceof PressedOutWidgetState) {
                _this.setState(new IdleUpWidgetState());
            }
            if (state instanceof IdleDownWidgetState) {
                _this.idledownState();
            }
            if (state instanceof KeypressWidgetState) {
                _this.keyupState(_this.parent.keyEvent);
            }
            if (_this.state instanceof DragWindowState) {
                _this.moveState();
            }
        });
    };
    /**
     * Registers SVG.js event handlers for the given object.
     * @param obj The object to register event handlers for.
     * @returns void.
     *
     * @description registerEvent serves as a coupling method
     * between the SVG.js library event handlers and the state
     * and observer patterns used by the toolkit. To gain access
     * to the source event data simply assign the event parameter
     * to the current object using this and the rawEvent property.
     */
    Widget.prototype.registerEvent = function (obj) {
        var _this = this;
        obj.mouseup(function (event) {
            _this.state.onRelease(_this);
        });
        obj.mousedown(function (event) {
            if (!_this.selectable) {
                // prevents draggable text selection
                event.preventDefault();
            }
            _this.state.onPress(_this);
        });
        obj.mouseover(function (event) {
            _this.state.onEnter(_this);
        });
        obj.mouseout(function (event) {
            _this.state.onLeave(_this);
        });
        obj.mousemove(function (event) {
            //mouse move events generate positional information
            //about the cursor, likely needed for widgets that track
            //cursor movement.
            _this.rawEvent = event;
            _this.state.onMove(_this);
        });
    };
    Object.defineProperty(Widget.prototype, "backcolor", {
        get: function () {
            return this._backcolor;
        },
        set: function (color) {
            this._backcolor = color;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "forecolor", {
        get: function () {
            return this._forecolor;
        },
        set: function (color) {
            this._forecolor = color;
        },
        enumerable: false,
        configurable: true
    });
    return Widget;
}(Component));
// local


// from svg.js



/***/ }),

/***/ "./src/widgets/button.ts":
/*!*******************************!*\
  !*** ./src/widgets/button.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _core_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ui */ "./src/core/ui.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// importing local code, code we have written


var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    // private isChecked: boolean;
    function Button(parent) {
        var _this = _super.call(this, parent) || this;
        _this.defaultText = "Click here";
        _this.defaultFontSize = 18;
        _this.defaultWidth = 80;
        _this.defaultHeight = 30;
        _this.headerString = 'Button has NOT been clicked';
        // set defaults
        _this.height = _this.defaultHeight;
        _this.width = _this.defaultWidth;
        _this._input = _this.defaultText;
        _this._fontSize = _this.defaultFontSize;
        // set Aria role
        _this.role = _core_ui__WEBPACK_IMPORTED_MODULE_0__.RoleType.button;
        // render widget
        _this.render();
        // set default or starting state
        _this.setState(new _core_ui__WEBPACK_IMPORTED_MODULE_0__.IdleUpWidgetState());
        // prevent text selection
        _this.selectable = false;
        return _this;
        // this.isChecked = false;
    }
    Object.defineProperty(Button.prototype, "fontSize", {
        set: function (size) {
            this._fontSize = size;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Button.prototype.positionText = function () {
        var box = this._text.bbox();
        // in TS, the prepending with + performs a type conversion from string to number
        this._text_y = (+this._rect.y() + ((+this._rect.height() / 2)) - (box.height / 2));
        this._text.x(+this._rect.x() + 4);
        if (this._text_y > 0) {
            this._text.y(this._text_y);
        }
    };
    Button.prototype.render = function () {
        this._group = this.parent.window.group();
        this._rect = this._group.rect(this.width, this.height);
        this._rect.stroke("black");
        this._text = this._group.text(this._input);
        // Set the outer svg element 
        this.outerSvg = this._group;
        // Add a transparent rect on top of text to 
        // prevent selection cursor and to handle mouse events
        this.eventrect = this._group.rect(this.width, this.height).opacity(0).attr('id', 0);
        // register objects that should receive event notifications.
        // for this widget, we want to know when the group or rect objects
        // receive events
        this.registerEvent(this.eventrect);
    };
    Button.prototype.update = function () {
        if (this._text != null)
            this._text.font('size', this._fontSize);
        this._text.text(this._input);
        this.positionText();
        if (this._rect != null)
            // this._rect = this._group.rect(this.width, this.height);
            this._rect.fill(this.backcolor);
        if (this.height != this.defaultHeight)
            this._rect.width(this.width);
        this._rect.height(this.height);
        this.eventrect.width(this.width);
        this.eventrect.height(this.height);
        // this.registerEvent(this.eventrect);
        _super.prototype.update.call(this);
    };
    Button.prototype.pressReleaseState = function () {
        if (this.previousState instanceof _core_ui__WEBPACK_IMPORTED_MODULE_0__.PressedWidgetState)
            this.raise(new _core_ui__WEBPACK_IMPORTED_MODULE_0__.EventArgs(this));
    };
    //TODO: implement the onClick event using a callback passed as a parameter
    Button.prototype.onClick = function (callback) {
        this.attach(callback);
        console.log("clicked");
    };
    //TODO: give the states something to do! Use these methods to control the visual appearance of your
    //widget
    Button.prototype.idleupState = function () {
        this.backcolor = "gray";
    };
    Button.prototype.idledownState = function () {
        console.log("Idle down");
    };
    Button.prototype.pressedState = function (callback) {
        console.log("pressed");
        this.btnLabel = "+1";
    };
    Button.prototype.hoverState = function () {
        console.log("Mouse hover triggered");
        this.backcolor = 'silver';
    };
    Button.prototype.hoverPressedState = function () {
        throw new Error("Method not implemented.");
    };
    Button.prototype.pressedoutState = function () {
        throw new Error("Method not implemented.");
    };
    Button.prototype.moveState = function () {
        throw new Error("Method not implemented.");
    };
    Button.prototype.keyupState = function (keyEvent) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(Button.prototype, "btnHeight", {
        get: function () {
            return this.height;
        },
        set: function (height) {
            this.height = height;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "btnWidth", {
        get: function () {
            return this.width;
        },
        set: function (width) {
            this.width = width;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "btnLabel", {
        get: function () {
            return this._input;
        },
        set: function (label) {
            this._input = label;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    return Button;
}(_core_ui__WEBPACK_IMPORTED_MODULE_0__.Widget));



/***/ }),

/***/ "./src/widgets/checkbox.ts":
/*!*********************************!*\
  !*** ./src/widgets/checkbox.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckBox": () => (/* binding */ CheckBox)
/* harmony export */ });
/* harmony import */ var _core_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ui */ "./src/core/ui.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// importing local code, code we have written


var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox(parent) {
        var _this = _super.call(this, parent) || this;
        _this.defaultText = " ";
        _this.defaultFontSize = 18;
        _this.defaultWidth = 21;
        _this.defaultHeight = 22;
        _this.isChecked = false;
        _this.headerString = 'Button has NOT been clicked';
        // set defaults
        _this._backcolor = 'white';
        _this.height = _this.defaultHeight;
        _this.width = _this.defaultWidth;
        _this._input = _this.defaultText;
        _this.boxFill = " ";
        _this._fontSize = _this.defaultFontSize;
        // set Aria role
        _this.role = _core_ui__WEBPACK_IMPORTED_MODULE_0__.RoleType.button;
        // render widget
        _this.render();
        // set default or starting state
        _this.setState(new _core_ui__WEBPACK_IMPORTED_MODULE_0__.IdleUpWidgetState());
        // prevent text selection
        _this.selectable = false;
        return _this;
        // this.isChecked = false;
    }
    Object.defineProperty(CheckBox.prototype, "fontSize", {
        set: function (size) {
            this._fontSize = size;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    CheckBox.prototype.positionText = function () {
        var box = this._text.bbox();
        // in TS, the prepending with + performs a type conversion from string to number
        this._text_y = (+this._rect.y() + ((+this._rect.height() / 2)) - (box.height / 2));
        this._text.x(+this._rect.x() + 4);
        if (this._text_y > 0) {
            this._text.y(this._text_y);
        }
    };
    CheckBox.prototype.positionFill = function () {
        var box = this.boxText.bbox();
        this._text_y = (+this._rect.y() + ((+this._rect.height() / 2)) - (box.height / 2));
        this.boxText.x(+this._rect.x() + 4);
        if (this._text_y > 0) {
            this._text.y(this._text_y);
        }
    };
    CheckBox.prototype.render = function () {
        this._group = this.parent.window.group();
        this._rect = this._group.rect(this.width, this.height);
        this._rect.stroke("black");
        this._text = this._group.text(this._input);
        this.boxText = this._group.text(this.boxFill);
        // this.rightLabel = this._group.text(this.rightText);
        // Set the outer svg element 
        this.outerSvg = this._group;
        // Add a transparent rect on top of text to 
        // prevent selection cursor and to handle mouse events
        this.eventrect = this._group.rect(this.width, this.height).opacity(0).attr('id', 0);
        // register objects that should receive event notifications.
        // for this widget, we want to know when the group or rect objects
        // receive events
        this.registerEvent(this.eventrect);
    };
    CheckBox.prototype.update = function () {
        // if(this.boxFill != null) 
        // this.boxText.text(this.boxFill);
        // this.positionFill();
        if (this._text != null)
            this._text.font('size', this._fontSize);
        this._text.text(this._input);
        this.positionText();
        if (this._rect != null)
            // this._rect = this._group.rect(this.width, this.height);
            this._rect.fill(this.backcolor);
        if (this.height != this.defaultHeight)
            this._rect.width(this.width);
        this._rect.height(this.height);
        this.eventrect.width(this.width);
        this.eventrect.height(this.height);
        // this.registerEvent(this.eventrect);
        _super.prototype.update.call(this);
    };
    CheckBox.prototype.pressReleaseState = function () {
        if (this.previousState instanceof _core_ui__WEBPACK_IMPORTED_MODULE_0__.PressedWidgetState)
            this.raise(new _core_ui__WEBPACK_IMPORTED_MODULE_0__.EventArgs(this));
    };
    //TODO: implement the onClick event using a callback passed as a parameter
    CheckBox.prototype.onClick = function (callback) {
        this.attach(callback);
        //console.log("clicked");
        // if(this.isChecked == true) {
        //     this.checkboxFill = " ";
        //     this.isChecked = false;
        //     this.btnLabel = "not checked";
        // }
        // else {
        //     this.checkboxFill = "✓";
        //     this.isChecked = true;
        //     this.btnLabel = "checked";
        // }
    };
    //TODO: give the states something to do! Use these methods to control the visual appearance of your
    //widget
    CheckBox.prototype.idleupState = function () {
        this.backcolor = "white";
    };
    CheckBox.prototype.idledownState = function () {
        console.log("Idle down");
    };
    CheckBox.prototype.pressedState = function (callback) {
        console.log("pressed");
        this.attach(callback);
        // this.backcolor = "gray";
        // this.btnLabel = "+1";
    };
    CheckBox.prototype.hoverState = function () {
        console.log("Mouse hover triggered");
        // this.backcolor = 'silver';
    };
    CheckBox.prototype.hoverPressedState = function () {
        throw new Error("Method not implemented.");
    };
    CheckBox.prototype.pressedoutState = function () {
        throw new Error("Method not implemented.");
    };
    CheckBox.prototype.moveState = function () {
        throw new Error("Method not implemented.");
    };
    CheckBox.prototype.keyupState = function (keyEvent) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(CheckBox.prototype, "btnHeight", {
        get: function () {
            return this.height;
        },
        set: function (height) {
            this.height = height;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "btnWidth", {
        get: function () {
            return this.width;
        },
        set: function (width) {
            this.width = width;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "btnLabel", {
        get: function () {
            return this._input;
        },
        set: function (label) {
            this._input = label;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "checkboxFill", {
        get: function () {
            return this.boxFill;
        },
        // set checkLabel(text: string) {
        //     this._input = text;
        //     this.update();
        // }
        // get checkLabel() {
        //     return this._input;
        // }
        set: function (text) {
            this.boxFill = text;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    return CheckBox;
}(_core_ui__WEBPACK_IMPORTED_MODULE_0__.Widget));



/***/ }),

/***/ "./src/widgets/heading.ts":
/*!********************************!*\
  !*** ./src/widgets/heading.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Heading": () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var _core_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ui */ "./src/core/ui.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// importing local code, code we have written

var Heading = /** @class */ (function (_super) {
    __extends(Heading, _super);
    function Heading(parent) {
        var _this = _super.call(this, parent) || this;
        _this.defaultText = "Heading";
        _this.defaultFontSize = 18;
        _this.defaultWidth = 80;
        _this.defaultHeight = 30;
        // set defaults
        _this.height = _this.defaultHeight;
        _this.width = _this.defaultWidth;
        _this._input = _this.defaultText;
        _this._fontSize = _this.defaultFontSize;
        /* aria */
        _this.role = _core_ui__WEBPACK_IMPORTED_MODULE_0__.RoleType.heading;
        // render widget
        _this.render();
        // set default or starting state
        _this.setState(new _core_ui__WEBPACK_IMPORTED_MODULE_0__.IdleUpWidgetState());
        // prevent text selection
        _this.selectable = false;
        _this.backcolor = "white";
        return _this;
    }
    Object.defineProperty(Heading.prototype, "text", {
        get: function () {
            return this._input;
        },
        set: function (text) {
            this._input = text;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Heading.prototype, "fontSize", {
        set: function (size) {
            this._fontSize = size;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Heading.prototype.positionText = function () {
        var box = this._text.bbox();
        // in TS, the prepending with + performs a type conversion from string to number
        this._text_y = (+this._rect.y() + ((+this._rect.height() / 2)) - (box.height / 2));
        this._text.x(+this._rect.x() + 4);
        if (this._text_y > 0) {
            this._text.y(this._text_y);
        }
        // resize container rect to match fontSize
        this._rect.width(box.width);
        this._rect.height(box.height);
    };
    Heading.prototype.move = function (x, y) {
        if (this._group != null)
            this._group.move(x, y);
        this.update();
    };
    Heading.prototype.render = function () {
        this._group = this.parent.window.group();
        this._rect = this._group.rect(this.width, this.height);
        this._text = this._group.text(this._input);
        this.outerSvg = this._group;
        // register objects that should receive event notifications.
        // for this widget, we want to know when the group or rect objects
        // receive events
        this.registerEvent(this._group);
        this.registerEvent(this._rect);
    };
    Heading.prototype.update = function () {
        if (this._text != null)
            this._text.font('size', this._fontSize);
        this._text.text(this._input);
        this.positionText();
        if (this._rect != null)
            this._rect.fill(this.backcolor);
        _super.prototype.update.call(this);
    };
    Heading.prototype.idleupState = function () {
    };
    Heading.prototype.idledownState = function () {
    };
    Heading.prototype.pressedState = function () {
    };
    Heading.prototype.pressReleaseState = function () {
    };
    Heading.prototype.hoverState = function () {
    };
    Heading.prototype.hoverPressedState = function () {
    };
    Heading.prototype.pressedoutState = function () {
    };
    Heading.prototype.moveState = function () { };
    Heading.prototype.keyupState = function () { };
    return Heading;
}(_core_ui__WEBPACK_IMPORTED_MODULE_0__.Widget));



/***/ }),

/***/ "./src/widgets/radiobutton.ts":
/*!************************************!*\
  !*** ./src/widgets/radiobutton.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButton": () => (/* binding */ RadioButton)
/* harmony export */ });
/* harmony import */ var _core_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ui */ "./src/core/ui.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// importing local code, code we have written


var RadioButton = /** @class */ (function (_super) {
    __extends(RadioButton, _super);
    // private isChecked: boolean;
    function RadioButton(parent) {
        var _this = _super.call(this, parent) || this;
        _this.defaultText = "";
        _this.defaultFontSize = 18;
        _this.defaultWidth = 21;
        _this.defaultHeight = 21;
        _this.headerString = 'Button has NOT been clicked';
        // set defaults
        _this.height = _this.defaultHeight;
        _this.width = _this.defaultWidth;
        _this._input = _this.defaultText;
        _this._fontSize = _this.defaultFontSize;
        // set Aria role
        _this.role = _core_ui__WEBPACK_IMPORTED_MODULE_0__.RoleType.button;
        // render widget
        _this.render();
        // set default or starting state
        _this.setState(new _core_ui__WEBPACK_IMPORTED_MODULE_0__.IdleUpWidgetState());
        // prevent text selection
        _this.selectable = false;
        return _this;
        // this.isChecked = false;
    }
    Object.defineProperty(RadioButton.prototype, "fontSize", {
        set: function (size) {
            this._fontSize = size;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    RadioButton.prototype.positionText = function () {
        var box = this._text.bbox();
        // in TS, the prepending with + performs a type conversion from string to number
        this._text_y = (+this._rect.y() + ((+this._rect.height() / 2)) - (box.height / 2));
        this._text.x(+this._rect.x() + 4);
        if (this._text_y > 0) {
            this._text.y(this._text_y);
        }
    };
    RadioButton.prototype.addRadio = function () {
        var newRadio = this._group.rect(this.width, this.height).radius(30);
        newRadio.move(50, 200);
    };
    RadioButton.prototype.render = function () {
        this._group = this.parent.window.group();
        this._rect = this._group.rect(this.width, this.height).radius(30);
        this._rect.fill("white");
        this._rect.stroke("black");
        this._text = this._group.text(this._input);
        // Set the outer svg element 
        this.outerSvg = this._group;
        // Add a transparent rect on top of text to 
        // prevent selection cursor and to handle mouse events
        this.eventrect = this._group.rect(this.width, this.height).opacity(0).attr('id', 0);
        // register objects that should receive event notifications.
        // for this widget, we want to know when the group or rect objects
        // receive events
        this.registerEvent(this.eventrect);
    };
    RadioButton.prototype.update = function () {
        if (this._text != null)
            this._text.font('size', this._fontSize);
        this._text.text(this._input);
        this.positionText();
        if (this._rect != null)
            // this._rect = this._group.rect(this.width, this.height);
            this._rect.fill(this.backcolor);
        if (this.height != this.defaultHeight)
            this._rect.width(this.width);
        this._rect.height(this.height);
        this.eventrect.width(this.width);
        this.eventrect.height(this.height);
        // this.registerEvent(this.eventrect);
        _super.prototype.update.call(this);
    };
    RadioButton.prototype.pressReleaseState = function () {
        if (this.previousState instanceof _core_ui__WEBPACK_IMPORTED_MODULE_0__.PressedWidgetState)
            this.raise(new _core_ui__WEBPACK_IMPORTED_MODULE_0__.EventArgs(this));
    };
    //TODO: implement the onClick event using a callback passed as a parameter
    RadioButton.prototype.onClick = function (callback) {
        this.attach(callback);
        console.log("clicked");
    };
    //TODO: give the states something to do! Use these methods to control the visual appearance of your
    //widget
    RadioButton.prototype.idleupState = function () {
        this.backcolor = 'white';
    };
    RadioButton.prototype.idledownState = function () {
        console.log("Idle down");
    };
    RadioButton.prototype.pressedState = function (callback) {
        console.log("pressed");
        this.backcolor = 'silver';
    };
    RadioButton.prototype.hoverState = function () {
        console.log("Mouse hover triggered");
        this.backcolor = 'silver';
    };
    RadioButton.prototype.hoverPressedState = function () {
        throw new Error("Method not implemented.");
    };
    RadioButton.prototype.pressedoutState = function () {
        throw new Error("Method not implemented.");
    };
    RadioButton.prototype.moveState = function () {
        throw new Error("Method not implemented.");
    };
    RadioButton.prototype.keyupState = function (keyEvent) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(RadioButton.prototype, "btnHeight", {
        get: function () {
            return this.height;
        },
        set: function (height) {
            this.height = height;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "btnWidth", {
        get: function () {
            return this.width;
        },
        set: function (width) {
            this.width = width;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "btnLabel", {
        get: function () {
            return this._input;
        },
        set: function (label) {
            this._input = label;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    return RadioButton;
}(_core_ui__WEBPACK_IMPORTED_MODULE_0__.Widget));



/***/ }),

/***/ "./src/widgets/scrollbar.ts":
/*!**********************************!*\
  !*** ./src/widgets/scrollbar.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollBar": () => (/* binding */ ScrollBar)
/* harmony export */ });
/* harmony import */ var _core_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ui */ "./src/core/ui.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// importing local code, code we have written


var ScrollBar = /** @class */ (function (_super) {
    __extends(ScrollBar, _super);
    // private isChecked: boolean;
    function ScrollBar(parent) {
        var _this = _super.call(this, parent) || this;
        _this.defaultText = "";
        _this.defaultFontSize = 18;
        _this.defaultWidth = 19;
        _this.defaultHeight = 150;
        _this.headerString = 'Button has NOT been clicked';
        // set defaults
        _this.height = _this.defaultHeight;
        _this.width = _this.defaultWidth;
        _this._input = _this.defaultText;
        _this._fontSize = _this.defaultFontSize;
        // set Aria role
        _this.role = _core_ui__WEBPACK_IMPORTED_MODULE_0__.RoleType.button;
        // render widget
        _this.render();
        // set default or starting state
        _this.setState(new _core_ui__WEBPACK_IMPORTED_MODULE_0__.IdleUpWidgetState());
        // prevent text selection
        _this.selectable = false;
        return _this;
        // this.isChecked = false;
    }
    Object.defineProperty(ScrollBar.prototype, "fontSize", {
        set: function (size) {
            this._fontSize = size;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    ScrollBar.prototype.positionText = function () {
        var box = this._text.bbox();
        // in TS, the prepending with + performs a type conversion from string to number
        this._text_y = (+this._rect.y());
        this._text.x(+this._rect.x() + 4);
        if (this._text_y > 0) {
            this._text.y(this._text_y);
        }
    };
    ScrollBar.prototype.render = function () {
        this._group = this.parent.window.group();
        this._rect = this._group.rect(this.width, this.height);
        this.thumb = this._group.rect(this.width, this.height / 3);
        this._rect.stroke("black");
        this._text = this._group.text(this._input);
        // Set the outer svg element 
        this.outerSvg = this._group;
        // Add a transparent rect on top of text to 
        // prevent selection cursor and to handle mouse events
        this.eventrect = this._group.rect(this.width, this.height).opacity(0).attr('id', 0);
        // register objects that should receive event notifications.
        // for this widget, we want to know when the group or rect objects
        // receive events
        this.registerEvent(this.eventrect);
    };
    ScrollBar.prototype.update = function () {
        if (this._text != null)
            this._text.font('size', this._fontSize);
        this._text.text(this._input);
        this.positionText();
        if (this._rect != null)
            // this._rect = this._group.rect(this.width, this.height);
            this._rect.fill(this.backcolor);
        this.thumb.fill("gray");
        if (this.height != this.defaultHeight)
            this._rect.width(this.width);
        this._rect.height(this.height);
        this.eventrect.width(this.width);
        this.eventrect.height(this.height);
        // this.registerEvent(this.eventrect);
        _super.prototype.update.call(this);
    };
    ScrollBar.prototype.pressReleaseState = function () {
        if (this.previousState instanceof _core_ui__WEBPACK_IMPORTED_MODULE_0__.PressedWidgetState)
            this.raise(new _core_ui__WEBPACK_IMPORTED_MODULE_0__.EventArgs(this));
    };
    //TODO: implement the onClick event using a callback passed as a parameter
    ScrollBar.prototype.onClick = function (callback) {
        this.attach(callback);
        console.log("clicked");
    };
    //TODO: give the states something to do! Use these methods to control the visual appearance of your
    //widget
    ScrollBar.prototype.idleupState = function () {
        this.backcolor = "white";
    };
    ScrollBar.prototype.idledownState = function () {
        console.log("Idle down");
    };
    ScrollBar.prototype.pressedState = function (callback) {
        console.log("pressed");
    };
    ScrollBar.prototype.hoverState = function () {
        console.log("Mouse hover triggered");
    };
    ScrollBar.prototype.hoverPressedState = function () {
        throw new Error("Method not implemented.");
    };
    ScrollBar.prototype.pressedoutState = function () {
        throw new Error("Method not implemented.");
    };
    ScrollBar.prototype.moveState = function () {
        throw new Error("Method not implemented.");
    };
    ScrollBar.prototype.keyupState = function (keyEvent) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(ScrollBar.prototype, "btnHeight", {
        get: function () {
            return this.height;
        },
        set: function (height) {
            this.height = height;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScrollBar.prototype, "btnWidth", {
        get: function () {
            return this.width;
        },
        set: function (width) {
            this.width = width;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScrollBar.prototype, "btnLabel", {
        get: function () {
            return this._input;
        },
        set: function (label) {
            this._input = label;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    return ScrollBar;
}(_core_ui__WEBPACK_IMPORTED_MODULE_0__.Widget));



/***/ }),

/***/ "./src/widgets/textbox.ts":
/*!********************************!*\
  !*** ./src/widgets/textbox.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextBox": () => (/* binding */ TextBox)
/* harmony export */ });
/* harmony import */ var _core_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ui */ "./src/core/ui.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// importing local code, code we have written


var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    // private isChecked: boolean;
    function TextBox(parent) {
        var _this = _super.call(this, parent) || this;
        _this.defaultText = "|";
        _this.defaultFontSize = 18;
        _this.defaultWidth = 300;
        _this.defaultHeight = 150;
        _this.headerString = 'Button has NOT been clicked';
        // set defaults
        _this.height = _this.defaultHeight;
        _this.width = _this.defaultWidth;
        _this._input = _this.defaultText;
        _this._fontSize = _this.defaultFontSize;
        // set Aria role
        _this.role = _core_ui__WEBPACK_IMPORTED_MODULE_0__.RoleType.button;
        // render widget
        _this.render();
        // set default or starting state
        _this.setState(new _core_ui__WEBPACK_IMPORTED_MODULE_0__.IdleUpWidgetState());
        // prevent text selection
        _this.selectable = false;
        return _this;
        // this.isChecked = false;
    }
    Object.defineProperty(TextBox.prototype, "fontSize", {
        set: function (size) {
            this._fontSize = size;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    TextBox.prototype.positionText = function () {
        var box = this._text.bbox();
        // in TS, the prepending with + performs a type conversion from string to number
        this._text_y = (+this._rect.y());
        this._text.x(+this._rect.x() + 4);
        if (this._text_y > 0) {
            this._text.y(this._text_y);
        }
    };
    TextBox.prototype.render = function () {
        this._group = this.parent.window.group();
        this._rect = this._group.rect(this.width, this.height);
        this._rect.stroke("black");
        this._text = this._group.text(this._input);
        // Set the outer svg element 
        this.outerSvg = this._group;
        // Add a transparent rect on top of text to 
        // prevent selection cursor and to handle mouse events
        this.eventrect = this._group.rect(this.width, this.height).opacity(0).attr('id', 0);
        // register objects that should receive event notifications.
        // for this widget, we want to know when the group or rect objects
        // receive events
        this.registerEvent(this.eventrect);
    };
    TextBox.prototype.update = function () {
        if (this._text != null)
            this._text.font('size', this._fontSize);
        this._text.text(this._input);
        this.positionText();
        if (this._rect != null)
            // this._rect = this._group.rect(this.width, this.height);
            this._rect.fill(this.backcolor);
        if (this.height != this.defaultHeight)
            this._rect.width(this.width);
        this._rect.height(this.height);
        this.eventrect.width(this.width);
        this.eventrect.height(this.height);
        // this.registerEvent(this.eventrect);
        _super.prototype.update.call(this);
    };
    TextBox.prototype.pressReleaseState = function () {
        if (this.previousState instanceof _core_ui__WEBPACK_IMPORTED_MODULE_0__.PressedWidgetState)
            this.raise(new _core_ui__WEBPACK_IMPORTED_MODULE_0__.EventArgs(this));
    };
    //TODO: implement the onClick event using a callback passed as a parameter
    TextBox.prototype.onClick = function (callback) {
        this.attach(callback);
        console.log("clicked");
    };
    //TODO: give the states something to do! Use these methods to control the visual appearance of your
    //widget
    TextBox.prototype.idleupState = function () {
        this.backcolor = "white";
    };
    TextBox.prototype.idledownState = function () {
        console.log("Idle down");
    };
    TextBox.prototype.pressedState = function (callback) {
        console.log("pressed");
    };
    TextBox.prototype.hoverState = function () {
        console.log("Mouse hover triggered");
    };
    TextBox.prototype.hoverPressedState = function () {
        throw new Error("Method not implemented.");
    };
    TextBox.prototype.pressedoutState = function () {
        throw new Error("Method not implemented.");
    };
    TextBox.prototype.moveState = function () {
        throw new Error("Method not implemented.");
    };
    TextBox.prototype.keyupState = function (keyEvent) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(TextBox.prototype, "btnHeight", {
        get: function () {
            return this.height;
        },
        set: function (height) {
            this.height = height;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextBox.prototype, "btnWidth", {
        get: function () {
            return this.width;
        },
        set: function (width) {
            this.width = width;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextBox.prototype, "btnLabel", {
        get: function () {
            return this._input;
        },
        set: function (label) {
            this._input = label;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    return TextBox;
}(_core_ui__WEBPACK_IMPORTED_MODULE_0__.Widget));



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/ui */ "./src/core/ui.ts");
/* harmony import */ var _widgets_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/button */ "./src/widgets/button.ts");
/* harmony import */ var _widgets_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/checkbox */ "./src/widgets/checkbox.ts");
/* harmony import */ var _widgets_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/heading */ "./src/widgets/heading.ts");
/* harmony import */ var _widgets_textbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/textbox */ "./src/widgets/textbox.ts");
/* harmony import */ var _widgets_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/scrollbar */ "./src/widgets/scrollbar.ts");
/* harmony import */ var _widgets_radiobutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/radiobutton */ "./src/widgets/radiobutton.ts");







var w = new _core_ui__WEBPACK_IMPORTED_MODULE_0__.Window(window.innerHeight - 10, '100%');
var lbl1 = new _widgets_heading__WEBPACK_IMPORTED_MODULE_3__.Heading(w);
lbl1.text = "Visually distinct (from default) button!";
lbl1.tabindex = 1;
lbl1.fontSize = 14;
lbl1.move(10, 20);
var btn = new _widgets_button__WEBPACK_IMPORTED_MODULE_1__.Button(w);
btn.tabindex = 2;
btn.fontSize = 16;
btn.backcolor = 'gray';
btn.move(12, 50);
var n = 0;
var callback = function (event) {
    btn.backcolor = 'aqua';
    console.log("clicked");
    lbl1.text = "Button has been clicked!";
    n++;
    btn.btnLabel = n + " time(s)";
};
btn.onClick(callback);
var lbl2 = new _widgets_heading__WEBPACK_IMPORTED_MODULE_3__.Heading(w);
lbl2.text = "Checkbox";
lbl2.tabindex = 1;
lbl2.fontSize = 14;
lbl2.move(10, 100);
var lbl2_5 = new _widgets_heading__WEBPACK_IMPORTED_MODULE_3__.Heading(w);
lbl2_5.text = "not checked";
lbl2_5.tabindex = 1;
lbl2_5.fontSize = 14;
lbl2_5.move(40, 135);
var checkbox = new _widgets_checkbox__WEBPACK_IMPORTED_MODULE_2__.CheckBox(w);
checkbox.move(12, 130);
var isChecked = false;
var callback2 = function (event) {
    if (isChecked == true) {
        checkbox.btnLabel = " ";
        isChecked = false;
        lbl2_5.text = "not checked";
    }
    else {
        checkbox.btnLabel = "X";
        isChecked = true;
        lbl2_5.text = "checked";
    }
};
checkbox.onClick(callback2);
var lbl3 = new _widgets_heading__WEBPACK_IMPORTED_MODULE_3__.Heading(w);
lbl3.text = "Radio Button";
lbl3.tabindex = 1;
lbl3.fontSize = 14;
lbl3.move(12, 170);
var radioButton = new _widgets_radiobutton__WEBPACK_IMPORTED_MODULE_6__.RadioButton(w);
radioButton.move(12, 200);
radioButton.addRadio();
var lbl5 = new _widgets_heading__WEBPACK_IMPORTED_MODULE_3__.Heading(w);
lbl5.text = "Text Box";
lbl5.tabindex = 1;
lbl5.fontSize = 14;
lbl5.move(12, 240);
var textbox = new _widgets_textbox__WEBPACK_IMPORTED_MODULE_4__.TextBox(w);
textbox.backcolor = "white";
textbox.move(12, 255);
var lbl6 = new _widgets_heading__WEBPACK_IMPORTED_MODULE_3__.Heading(w);
lbl6.text = "Scroll Bar";
lbl6.tabindex = 1;
lbl6.fontSize = 14;
lbl6.move(12, 435);
var scrollbar = new _widgets_scrollbar__WEBPACK_IMPORTED_MODULE_5__.ScrollBar(w);
scrollbar.backcolor = "white";
scrollbar.move(12, 460);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CO0FBQzFDOztBQUVBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBLDJFQUEyRTs7QUFFM0U7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrQkFBa0I7O0FBRXhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVkseUJBQXlCLGlCQUFpQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUEseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0osc0RBQXNEOztBQUV0RDtBQUNBLDRCQUE0QjtBQUM1QixJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSx5Q0FBeUMsUUFBUTtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsNEVBQTRFOztBQUU1RSx5QkFBeUIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU07O0FBRXpELHdDQUF3Qzs7QUFFeEMsNENBQTRDOztBQUU1QyxpQ0FBaUM7O0FBRWpDLDBCQUEwQjs7QUFFMUIsMEJBQTBCLEVBQUUsYUFBYSxFQUFFLEtBQUs7O0FBRWhELHdCQUF3Qjs7QUFFeEIsNEJBQTRCOztBQUU1Qiw0REFBNEQ7O0FBRTVELHlEQUF5RDs7QUFFekQsNEJBQTRCOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLElBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFFBQVE7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixzREFBc0Q7O0FBRXREOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFFBQVE7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0EsaUVBQWlFOztBQUVqRTtBQUNBLHVFQUF1RTs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvSkFBb0o7QUFDcEosSUFBSTs7O0FBR0o7QUFDQSx1REFBdUQ7O0FBRXZELHlaQUF5Wjs7QUFFelo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0Esd0RBQXdEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDRDQUE0Qzs7QUFFbEQsNk1BQTZNOztBQUU3TTtBQUNBLCtEQUErRDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTs7O0FBR1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNULElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUssUUFBUTs7QUFFYjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyxRQUFRO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQSx1QkFBdUI7O0FBRXZCLDhDQUE4Qzs7QUFFOUM7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQSxVQUFVOzs7QUFHVjtBQUNBOztBQUVBLHdDQUF3Qzs7O0FBR3hDO0FBQ0EsMkJBQTJCO0FBQzNCLFlBQVk7QUFDWjtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7OztBQUdSO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQSxvREFBb0Q7O0FBRXBEO0FBQ0EsZ0VBQWdFOztBQUVoRSw4QkFBOEI7O0FBRTlCLHlDQUF5QyxNQUFNO0FBQy9DO0FBQ0E7O0FBRUEsa0NBQWtDOztBQUVsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEIsbUJBQW1COztBQUVuQjs7QUFFQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFO0FBQ3RFOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLEdBQUc7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNI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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEIsc0NBQXNDOztBQUV0QztBQUNBLDhFQUE4RTs7QUFFOUUsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0EsdUNBQXVDLHNDQUFzQztBQUM3RTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQ0FBaUMsUUFBUTtBQUN6Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxvREFBb0Q7O0FBRXBELDhCQUE4QixRQUFRO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjs7O0FBR0EsMERBQTBEOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLHFDQUFxQyxTQUFTOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRix1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTs7O0FBR04saUNBQWlDO0FBQ2pDOztBQUVBLCtEQUErRDs7QUFFL0QsMkRBQTJEOztBQUUzRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FB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QUM3QixPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUM1QixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUdyQixJQUFJLElBQUksR0FBRyxJQUFJLHFEQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7QUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsR0FBRyxDQUFDLENBQUM7QUFFbEIsSUFBSSxTQUFTLEdBQUcsSUFBSSx5REFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO0FBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXJhc21hcy8uL25vZGVfbW9kdWxlcy9Ac3ZnZG90anMvc3ZnLmpzL2Rpc3Qvc3ZnLmVzbS5qcyIsIndlYnBhY2s6Ly9lcmFzbWFzLy4vc3JjL2NvcmUvdWkudHMiLCJ3ZWJwYWNrOi8vZXJhc21hcy8uL3NyYy93aWRnZXRzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9lcmFzbWFzLy4vc3JjL3dpZGdldHMvY2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vZXJhc21hcy8uL3NyYy93aWRnZXRzL2hlYWRpbmcudHMiLCJ3ZWJwYWNrOi8vZXJhc21hcy8uL3NyYy93aWRnZXRzL3JhZGlvYnV0dG9uLnRzIiwid2VicGFjazovL2VyYXNtYXMvLi9zcmMvd2lkZ2V0cy9zY3JvbGxiYXIudHMiLCJ3ZWJwYWNrOi8vZXJhc21hcy8uL3NyYy93aWRnZXRzL3RleHRib3gudHMiLCJ3ZWJwYWNrOi8vZXJhc21hcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lcmFzbWFzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lcmFzbWFzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXJhc21hcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VyYXNtYXMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4qIEBzdmdkb3Rqcy9zdmcuanMgLSBBIGxpZ2h0d2VpZ2h0IGxpYnJhcnkgZm9yIG1hbmlwdWxhdGluZyBhbmQgYW5pbWF0aW5nIFNWRy5cbiogQHZlcnNpb24gMy4xLjJcbiogaHR0cHM6Ly9zdmdqcy5kZXYvXG4qXG4qIEBjb3B5cmlnaHQgV291dCBGaWVyZW5zIDx3b3V0QG1pY2std291dC5jb20+XG4qIEBsaWNlbnNlIE1JVFxuKlxuKiBCVUlMVDogV2VkIEphbiAyNiAyMDIyIDIzOjE5OjA3IEdNVCswMTAwIChNaXR0ZWxldXJvcMOkaXNjaGUgTm9ybWFsemVpdClcbiovO1xuY29uc3QgbWV0aG9kcyQxID0ge307XG5jb25zdCBuYW1lcyA9IFtdO1xuZnVuY3Rpb24gcmVnaXN0ZXJNZXRob2RzKG5hbWUsIG0pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkobmFtZSkpIHtcbiAgICBmb3IgKGNvbnN0IF9uYW1lIG9mIG5hbWUpIHtcbiAgICAgIHJlZ2lzdGVyTWV0aG9kcyhfbmFtZSwgbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAoY29uc3QgX25hbWUgaW4gbmFtZSkge1xuICAgICAgcmVnaXN0ZXJNZXRob2RzKF9uYW1lLCBuYW1lW19uYW1lXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYWRkTWV0aG9kTmFtZXMoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobSkpO1xuICBtZXRob2RzJDFbbmFtZV0gPSBPYmplY3QuYXNzaWduKG1ldGhvZHMkMVtuYW1lXSB8fCB7fSwgbSk7XG59XG5mdW5jdGlvbiBnZXRNZXRob2RzRm9yKG5hbWUpIHtcbiAgcmV0dXJuIG1ldGhvZHMkMVtuYW1lXSB8fCB7fTtcbn1cbmZ1bmN0aW9uIGdldE1ldGhvZE5hbWVzKCkge1xuICByZXR1cm4gWy4uLm5ldyBTZXQobmFtZXMpXTtcbn1cbmZ1bmN0aW9uIGFkZE1ldGhvZE5hbWVzKF9uYW1lcykge1xuICBuYW1lcy5wdXNoKC4uLl9uYW1lcyk7XG59XG5cbi8vIE1hcCBmdW5jdGlvblxuZnVuY3Rpb24gbWFwKGFycmF5LCBibG9jaykge1xuICBsZXQgaTtcbiAgY29uc3QgaWwgPSBhcnJheS5sZW5ndGg7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBpbDsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2goYmxvY2soYXJyYXlbaV0pKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59IC8vIEZpbHRlciBmdW5jdGlvblxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIGJsb2NrKSB7XG4gIGxldCBpO1xuICBjb25zdCBpbCA9IGFycmF5Lmxlbmd0aDtcbiAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IGlsOyBpKyspIHtcbiAgICBpZiAoYmxvY2soYXJyYXlbaV0pKSB7XG4gICAgICByZXN1bHQucHVzaChhcnJheVtpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0gLy8gRGVncmVlcyB0byByYWRpYW5zXG5cbmZ1bmN0aW9uIHJhZGlhbnMoZCkge1xuICByZXR1cm4gZCAlIDM2MCAqIE1hdGguUEkgLyAxODA7XG59IC8vIFJhZGlhbnMgdG8gZGVncmVlc1xuXG5mdW5jdGlvbiBkZWdyZWVzKHIpIHtcbiAgcmV0dXJuIHIgKiAxODAgLyBNYXRoLlBJICUgMzYwO1xufSAvLyBDb252ZXJ0IGRhc2gtc2VwYXJhdGVkLXN0cmluZyB0byBjYW1lbENhc2VcblxuZnVuY3Rpb24gY2FtZWxDYXNlKHMpIHtcbiAgcmV0dXJuIHMudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKC4pL2csIGZ1bmN0aW9uIChtLCBnKSB7XG4gICAgcmV0dXJuIGcudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59IC8vIENvbnZlcnQgY2FtZWwgY2FzZWQgc3RyaW5nIHRvIGRhc2ggc2VwYXJhdGVkXG5cbmZ1bmN0aW9uIHVuQ2FtZWxDYXNlKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbiAobSwgZykge1xuICAgIHJldHVybiAnLScgKyBnLnRvTG93ZXJDYXNlKCk7XG4gIH0pO1xufSAvLyBDYXBpdGFsaXplIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZ1xuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHMpIHtcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xufSAvLyBDYWxjdWxhdGUgcHJvcG9ydGlvbmFsIHdpZHRoIGFuZCBoZWlnaHQgdmFsdWVzIHdoZW4gbmVjZXNzYXJ5XG5cbmZ1bmN0aW9uIHByb3BvcnRpb25hbFNpemUoZWxlbWVudCwgd2lkdGgsIGhlaWdodCwgYm94KSB7XG4gIGlmICh3aWR0aCA9PSBudWxsIHx8IGhlaWdodCA9PSBudWxsKSB7XG4gICAgYm94ID0gYm94IHx8IGVsZW1lbnQuYmJveCgpO1xuXG4gICAgaWYgKHdpZHRoID09IG51bGwpIHtcbiAgICAgIHdpZHRoID0gYm94LndpZHRoIC8gYm94LmhlaWdodCAqIGhlaWdodDtcbiAgICB9IGVsc2UgaWYgKGhlaWdodCA9PSBudWxsKSB7XG4gICAgICBoZWlnaHQgPSBib3guaGVpZ2h0IC8gYm94LndpZHRoICogd2lkdGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn1cbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGFkZHMgc3VwcG9ydCBmb3Igc3RyaW5nIG9yaWdpbnMuXHJcbiAqIEl0IHNlYXJjaGVzIGZvciBhbiBvcmlnaW4gaW4gby5vcmlnaW4gby5veCBhbmQgby5vcmlnaW5YLlxyXG4gKiBUaGlzIHdheSwgb3JpZ2luOiB7eDogJ2NlbnRlcicsIHk6IDUwfSBjYW4gYmUgcGFzc2VkIGFzIHdlbGwgYXMgb3g6ICdjZW50ZXInLCBveTogNTBcclxuKiovXG5cbmZ1bmN0aW9uIGdldE9yaWdpbihvLCBlbGVtZW50KSB7XG4gIGNvbnN0IG9yaWdpbiA9IG8ub3JpZ2luOyAvLyBGaXJzdCBjaGVjayBpZiBvcmlnaW4gaXMgaW4gb3ggb3Igb3JpZ2luWFxuXG4gIGxldCBveCA9IG8ub3ggIT0gbnVsbCA/IG8ub3ggOiBvLm9yaWdpblggIT0gbnVsbCA/IG8ub3JpZ2luWCA6ICdjZW50ZXInO1xuICBsZXQgb3kgPSBvLm95ICE9IG51bGwgPyBvLm95IDogby5vcmlnaW5ZICE9IG51bGwgPyBvLm9yaWdpblkgOiAnY2VudGVyJzsgLy8gVGhlbiBjaGVjayBpZiBvcmlnaW4gd2FzIHVzZWQgYW5kIG92ZXJ3cml0ZSBpbiB0aGF0IGNhc2VcblxuICBpZiAob3JpZ2luICE9IG51bGwpIHtcbiAgICBbb3gsIG95XSA9IEFycmF5LmlzQXJyYXkob3JpZ2luKSA/IG9yaWdpbiA6IHR5cGVvZiBvcmlnaW4gPT09ICdvYmplY3QnID8gW29yaWdpbi54LCBvcmlnaW4ueV0gOiBbb3JpZ2luLCBvcmlnaW5dO1xuICB9IC8vIE1ha2Ugc3VyZSB0byBvbmx5IGNhbGwgYmJveCB3aGVuIGFjdHVhbGx5IG5lZWRlZFxuXG5cbiAgY29uc3QgY29uZFggPSB0eXBlb2Ygb3ggPT09ICdzdHJpbmcnO1xuICBjb25zdCBjb25kWSA9IHR5cGVvZiBveSA9PT0gJ3N0cmluZyc7XG5cbiAgaWYgKGNvbmRYIHx8IGNvbmRZKSB7XG4gICAgY29uc3Qge1xuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGgsXG4gICAgICB4LFxuICAgICAgeVxuICAgIH0gPSBlbGVtZW50LmJib3goKTsgLy8gQW5kIG9ubHkgb3ZlcndyaXRlIGlmIHN0cmluZyB3YXMgcGFzc2VkIGZvciB0aGlzIHNwZWNpZmljIGF4aXNcblxuICAgIGlmIChjb25kWCkge1xuICAgICAgb3ggPSBveC5pbmNsdWRlcygnbGVmdCcpID8geCA6IG94LmluY2x1ZGVzKCdyaWdodCcpID8geCArIHdpZHRoIDogeCArIHdpZHRoIC8gMjtcbiAgICB9XG5cbiAgICBpZiAoY29uZFkpIHtcbiAgICAgIG95ID0gb3kuaW5jbHVkZXMoJ3RvcCcpID8geSA6IG95LmluY2x1ZGVzKCdib3R0b20nKSA/IHkgKyBoZWlnaHQgOiB5ICsgaGVpZ2h0IC8gMjtcbiAgICB9XG4gIH0gLy8gUmV0dXJuIHRoZSBvcmlnaW4gYXMgaXQgaXMgaWYgaXQgd2Fzbid0IGEgc3RyaW5nXG5cblxuICByZXR1cm4gW294LCBveV07XG59XG5cbnZhciB1dGlscyA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBtYXA6IG1hcCxcbiAgZmlsdGVyOiBmaWx0ZXIsXG4gIHJhZGlhbnM6IHJhZGlhbnMsXG4gIGRlZ3JlZXM6IGRlZ3JlZXMsXG4gIGNhbWVsQ2FzZTogY2FtZWxDYXNlLFxuICB1bkNhbWVsQ2FzZTogdW5DYW1lbENhc2UsXG4gIGNhcGl0YWxpemU6IGNhcGl0YWxpemUsXG4gIHByb3BvcnRpb25hbFNpemU6IHByb3BvcnRpb25hbFNpemUsXG4gIGdldE9yaWdpbjogZ2V0T3JpZ2luXG59O1xuXG4vLyBEZWZhdWx0IG5hbWVzcGFjZXNcbmNvbnN0IHN2ZyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5jb25zdCBodG1sID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuY29uc3QgeG1sbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nO1xuY29uc3QgeGxpbmsgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG5jb25zdCBzdmdqcyA9ICdodHRwOi8vc3ZnanMuZGV2L3N2Z2pzJztcblxudmFyIG5hbWVzcGFjZXMgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgc3ZnOiBzdmcsXG4gIGh0bWw6IGh0bWwsXG4gIHhtbG5zOiB4bWxucyxcbiAgeGxpbms6IHhsaW5rLFxuICBzdmdqczogc3ZnanNcbn07XG5cbmNvbnN0IGdsb2JhbHMgPSB7XG4gIHdpbmRvdzogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93LFxuICBkb2N1bWVudDogdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBkb2N1bWVudFxufTtcbmZ1bmN0aW9uIHJlZ2lzdGVyV2luZG93KHdpbiA9IG51bGwsIGRvYyA9IG51bGwpIHtcbiAgZ2xvYmFscy53aW5kb3cgPSB3aW47XG4gIGdsb2JhbHMuZG9jdW1lbnQgPSBkb2M7XG59XG5jb25zdCBzYXZlID0ge307XG5mdW5jdGlvbiBzYXZlV2luZG93KCkge1xuICBzYXZlLndpbmRvdyA9IGdsb2JhbHMud2luZG93O1xuICBzYXZlLmRvY3VtZW50ID0gZ2xvYmFscy5kb2N1bWVudDtcbn1cbmZ1bmN0aW9uIHJlc3RvcmVXaW5kb3coKSB7XG4gIGdsb2JhbHMud2luZG93ID0gc2F2ZS53aW5kb3c7XG4gIGdsb2JhbHMuZG9jdW1lbnQgPSBzYXZlLmRvY3VtZW50O1xufVxuZnVuY3Rpb24gd2l0aFdpbmRvdyh3aW4sIGZuKSB7XG4gIHNhdmVXaW5kb3coKTtcbiAgcmVnaXN0ZXJXaW5kb3cod2luLCB3aW4uZG9jdW1lbnQpO1xuICBmbih3aW4sIHdpbi5kb2N1bWVudCk7XG4gIHJlc3RvcmVXaW5kb3coKTtcbn1cbmZ1bmN0aW9uIGdldFdpbmRvdygpIHtcbiAgcmV0dXJuIGdsb2JhbHMud2luZG93O1xufVxuXG5jbGFzcyBCYXNlIHsvLyBjb25zdHJ1Y3RvciAobm9kZS8qLCB7ZXh0ZW5zaW9ucyA9IFtdfSAqLykge1xuICAvLyAgIC8vIHRoaXMudGFncyA9IFtdXG4gIC8vICAgLy9cbiAgLy8gICAvLyBmb3IgKGxldCBleHRlbnNpb24gb2YgZXh0ZW5zaW9ucykge1xuICAvLyAgIC8vICAgZXh0ZW5zaW9uLnNldHVwLmNhbGwodGhpcywgbm9kZSlcbiAgLy8gICAvLyAgIHRoaXMudGFncy5wdXNoKGV4dGVuc2lvbi5uYW1lKVxuICAvLyAgIC8vIH1cbiAgLy8gfVxufVxuXG5jb25zdCBlbGVtZW50cyA9IHt9O1xuY29uc3Qgcm9vdCA9ICdfX19TWU1CT0xfX19ST09UX19fJzsgLy8gTWV0aG9kIGZvciBlbGVtZW50IGNyZWF0aW9uXG5cbmZ1bmN0aW9uIGNyZWF0ZShuYW1lLCBucyA9IHN2Zykge1xuICAvLyBjcmVhdGUgZWxlbWVudFxuICByZXR1cm4gZ2xvYmFscy5kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIG5hbWUpO1xufVxuZnVuY3Rpb24gbWFrZUluc3RhbmNlKGVsZW1lbnQsIGlzSFRNTCA9IGZhbHNlKSB7XG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQmFzZSkgcmV0dXJuIGVsZW1lbnQ7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBhZG9wdGVyKGVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBuZXcgZWxlbWVudHNbcm9vdF0oKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgJiYgZWxlbWVudC5jaGFyQXQoMCkgIT09ICc8Jykge1xuICAgIHJldHVybiBhZG9wdGVyKGdsb2JhbHMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KSk7XG4gIH0gLy8gTWFrZSBzdXJlLCB0aGF0IEhUTUwgZWxlbWVudHMgYXJlIGNyZWF0ZWQgd2l0aCB0aGUgY29ycmVjdCBuYW1lc3BhY2VcblxuXG4gIGNvbnN0IHdyYXBwZXIgPSBpc0hUTUwgPyBnbG9iYWxzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIDogY3JlYXRlKCdzdmcnKTtcbiAgd3JhcHBlci5pbm5lckhUTUwgPSBlbGVtZW50OyAvLyBXZSBjYW4gdXNlIGZpcnN0Q2hpbGQgaGVyZSBiZWNhdXNlIHdlIGtub3csXG4gIC8vIHRoYXQgdGhlIGZpcnN0IGNoYXIgaXMgPCBhbmQgdGh1cyBhbiBlbGVtZW50XG5cbiAgZWxlbWVudCA9IGFkb3B0ZXIod3JhcHBlci5maXJzdENoaWxkKTsgLy8gbWFrZSBzdXJlLCB0aGF0IGVsZW1lbnQgZG9lc250IGhhdmUgaXRzIHdyYXBwZXIgYXR0YWNoZWRcblxuICB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuZnVuY3Rpb24gbm9kZU9yTmV3KG5hbWUsIG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgJiYgbm9kZS5vd25lckRvY3VtZW50ICYmIG5vZGUgaW5zdGFuY2VvZiBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuTm9kZSA/IG5vZGUgOiBjcmVhdGUobmFtZSk7XG59IC8vIEFkb3B0IGV4aXN0aW5nIHN2ZyBlbGVtZW50c1xuXG5mdW5jdGlvbiBhZG9wdChub2RlKSB7XG4gIC8vIGNoZWNrIGZvciBwcmVzZW5jZSBvZiBub2RlXG4gIGlmICghbm9kZSkgcmV0dXJuIG51bGw7IC8vIG1ha2Ugc3VyZSBhIG5vZGUgaXNuJ3QgYWxyZWFkeSBhZG9wdGVkXG5cbiAgaWYgKG5vZGUuaW5zdGFuY2UgaW5zdGFuY2VvZiBCYXNlKSByZXR1cm4gbm9kZS5pbnN0YW5jZTtcblxuICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJyNkb2N1bWVudC1mcmFnbWVudCcpIHtcbiAgICByZXR1cm4gbmV3IGVsZW1lbnRzLkZyYWdtZW50KG5vZGUpO1xuICB9IC8vIGluaXRpYWxpemUgdmFyaWFibGVzXG5cblxuICBsZXQgY2xhc3NOYW1lID0gY2FwaXRhbGl6ZShub2RlLm5vZGVOYW1lIHx8ICdEb20nKTsgLy8gTWFrZSBzdXJlIHRoYXQgZ3JhZGllbnRzIGFyZSBhZG9wdGVkIGNvcnJlY3RseVxuXG4gIGlmIChjbGFzc05hbWUgPT09ICdMaW5lYXJHcmFkaWVudCcgfHwgY2xhc3NOYW1lID09PSAnUmFkaWFsR3JhZGllbnQnKSB7XG4gICAgY2xhc3NOYW1lID0gJ0dyYWRpZW50JzsgLy8gRmFsbGJhY2sgdG8gRG9tIGlmIGVsZW1lbnQgaXMgbm90IGtub3duXG4gIH0gZWxzZSBpZiAoIWVsZW1lbnRzW2NsYXNzTmFtZV0pIHtcbiAgICBjbGFzc05hbWUgPSAnRG9tJztcbiAgfVxuXG4gIHJldHVybiBuZXcgZWxlbWVudHNbY2xhc3NOYW1lXShub2RlKTtcbn1cbmxldCBhZG9wdGVyID0gYWRvcHQ7XG5mdW5jdGlvbiBtb2NrQWRvcHQobW9jayA9IGFkb3B0KSB7XG4gIGFkb3B0ZXIgPSBtb2NrO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXIoZWxlbWVudCwgbmFtZSA9IGVsZW1lbnQubmFtZSwgYXNSb290ID0gZmFsc2UpIHtcbiAgZWxlbWVudHNbbmFtZV0gPSBlbGVtZW50O1xuICBpZiAoYXNSb290KSBlbGVtZW50c1tyb290XSA9IGVsZW1lbnQ7XG4gIGFkZE1ldGhvZE5hbWVzKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGVsZW1lbnQucHJvdG90eXBlKSk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuZnVuY3Rpb24gZ2V0Q2xhc3MobmFtZSkge1xuICByZXR1cm4gZWxlbWVudHNbbmFtZV07XG59IC8vIEVsZW1lbnQgaWQgc2VxdWVuY2VcblxubGV0IGRpZCA9IDEwMDA7IC8vIEdldCBuZXh0IG5hbWVkIGVsZW1lbnQgaWRcblxuZnVuY3Rpb24gZWlkKG5hbWUpIHtcbiAgcmV0dXJuICdTdmdqcycgKyBjYXBpdGFsaXplKG5hbWUpICsgZGlkKys7XG59IC8vIERlZXAgbmV3IGlkIGFzc2lnbm1lbnRcblxuZnVuY3Rpb24gYXNzaWduTmV3SWQobm9kZSkge1xuICAvLyBkbyB0aGUgc2FtZSBmb3IgU1ZHIGNoaWxkIG5vZGVzIGFzIHdlbGxcbiAgZm9yIChsZXQgaSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBhc3NpZ25OZXdJZChub2RlLmNoaWxkcmVuW2ldKTtcbiAgfVxuXG4gIGlmIChub2RlLmlkKSB7XG4gICAgbm9kZS5pZCA9IGVpZChub2RlLm5vZGVOYW1lKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufSAvLyBNZXRob2QgZm9yIGV4dGVuZGluZyBvYmplY3RzXG5cbmZ1bmN0aW9uIGV4dGVuZChtb2R1bGVzLCBtZXRob2RzKSB7XG4gIGxldCBrZXksIGk7XG4gIG1vZHVsZXMgPSBBcnJheS5pc0FycmF5KG1vZHVsZXMpID8gbW9kdWxlcyA6IFttb2R1bGVzXTtcblxuICBmb3IgKGkgPSBtb2R1bGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgbW9kdWxlc1tpXS5wcm90b3R5cGVba2V5XSA9IG1ldGhvZHNba2V5XTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHdyYXBXaXRoQXR0ckNoZWNrKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IG8gPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAobyAmJiBvLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgIShvIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncy5zbGljZSgwLCAtMSkpLmF0dHIobyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNpYmxpbmdzKCkge1xuICByZXR1cm4gdGhpcy5wYXJlbnQoKS5jaGlsZHJlbigpO1xufSAvLyBHZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gc2libGluZ3NcblxuZnVuY3Rpb24gcG9zaXRpb24oKSB7XG4gIHJldHVybiB0aGlzLnBhcmVudCgpLmluZGV4KHRoaXMpO1xufSAvLyBHZXQgdGhlIG5leHQgZWxlbWVudCAod2lsbCByZXR1cm4gbnVsbCBpZiB0aGVyZSBpcyBub25lKVxuXG5mdW5jdGlvbiBuZXh0KCkge1xuICByZXR1cm4gdGhpcy5zaWJsaW5ncygpW3RoaXMucG9zaXRpb24oKSArIDFdO1xufSAvLyBHZXQgdGhlIG5leHQgZWxlbWVudCAod2lsbCByZXR1cm4gbnVsbCBpZiB0aGVyZSBpcyBub25lKVxuXG5mdW5jdGlvbiBwcmV2KCkge1xuICByZXR1cm4gdGhpcy5zaWJsaW5ncygpW3RoaXMucG9zaXRpb24oKSAtIDFdO1xufSAvLyBTZW5kIGdpdmVuIGVsZW1lbnQgb25lIHN0ZXAgZm9yd2FyZFxuXG5mdW5jdGlvbiBmb3J3YXJkKCkge1xuICBjb25zdCBpID0gdGhpcy5wb3NpdGlvbigpO1xuICBjb25zdCBwID0gdGhpcy5wYXJlbnQoKTsgLy8gbW92ZSBub2RlIG9uZSBzdGVwIGZvcndhcmRcblxuICBwLmFkZCh0aGlzLnJlbW92ZSgpLCBpICsgMSk7XG4gIHJldHVybiB0aGlzO1xufSAvLyBTZW5kIGdpdmVuIGVsZW1lbnQgb25lIHN0ZXAgYmFja3dhcmRcblxuZnVuY3Rpb24gYmFja3dhcmQoKSB7XG4gIGNvbnN0IGkgPSB0aGlzLnBvc2l0aW9uKCk7XG4gIGNvbnN0IHAgPSB0aGlzLnBhcmVudCgpO1xuICBwLmFkZCh0aGlzLnJlbW92ZSgpLCBpID8gaSAtIDEgOiAwKTtcbiAgcmV0dXJuIHRoaXM7XG59IC8vIFNlbmQgZ2l2ZW4gZWxlbWVudCBhbGwgdGhlIHdheSB0byB0aGUgZnJvbnRcblxuZnVuY3Rpb24gZnJvbnQoKSB7XG4gIGNvbnN0IHAgPSB0aGlzLnBhcmVudCgpOyAvLyBNb3ZlIG5vZGUgZm9yd2FyZFxuXG4gIHAuYWRkKHRoaXMucmVtb3ZlKCkpO1xuICByZXR1cm4gdGhpcztcbn0gLy8gU2VuZCBnaXZlbiBlbGVtZW50IGFsbCB0aGUgd2F5IHRvIHRoZSBiYWNrXG5cbmZ1bmN0aW9uIGJhY2soKSB7XG4gIGNvbnN0IHAgPSB0aGlzLnBhcmVudCgpOyAvLyBNb3ZlIG5vZGUgYmFja1xuXG4gIHAuYWRkKHRoaXMucmVtb3ZlKCksIDApO1xuICByZXR1cm4gdGhpcztcbn0gLy8gSW5zZXJ0cyBhIGdpdmVuIGVsZW1lbnQgYmVmb3JlIHRoZSB0YXJnZXRlZCBlbGVtZW50XG5cbmZ1bmN0aW9uIGJlZm9yZShlbGVtZW50KSB7XG4gIGVsZW1lbnQgPSBtYWtlSW5zdGFuY2UoZWxlbWVudCk7XG4gIGVsZW1lbnQucmVtb3ZlKCk7XG4gIGNvbnN0IGkgPSB0aGlzLnBvc2l0aW9uKCk7XG4gIHRoaXMucGFyZW50KCkuYWRkKGVsZW1lbnQsIGkpO1xuICByZXR1cm4gdGhpcztcbn0gLy8gSW5zZXJ0cyBhIGdpdmVuIGVsZW1lbnQgYWZ0ZXIgdGhlIHRhcmdldGVkIGVsZW1lbnRcblxuZnVuY3Rpb24gYWZ0ZXIoZWxlbWVudCkge1xuICBlbGVtZW50ID0gbWFrZUluc3RhbmNlKGVsZW1lbnQpO1xuICBlbGVtZW50LnJlbW92ZSgpO1xuICBjb25zdCBpID0gdGhpcy5wb3NpdGlvbigpO1xuICB0aGlzLnBhcmVudCgpLmFkZChlbGVtZW50LCBpICsgMSk7XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKGVsZW1lbnQpIHtcbiAgZWxlbWVudCA9IG1ha2VJbnN0YW5jZShlbGVtZW50KTtcbiAgZWxlbWVudC5iZWZvcmUodGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIoZWxlbWVudCkge1xuICBlbGVtZW50ID0gbWFrZUluc3RhbmNlKGVsZW1lbnQpO1xuICBlbGVtZW50LmFmdGVyKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cbnJlZ2lzdGVyTWV0aG9kcygnRG9tJywge1xuICBzaWJsaW5ncyxcbiAgcG9zaXRpb24sXG4gIG5leHQsXG4gIHByZXYsXG4gIGZvcndhcmQsXG4gIGJhY2t3YXJkLFxuICBmcm9udCxcbiAgYmFjayxcbiAgYmVmb3JlLFxuICBhZnRlcixcbiAgaW5zZXJ0QmVmb3JlLFxuICBpbnNlcnRBZnRlclxufSk7XG5cbi8vIFBhcnNlIHVuaXQgdmFsdWVcbmNvbnN0IG51bWJlckFuZFVuaXQgPSAvXihbKy1dPyhcXGQrKFxcLlxcZCopP3xcXC5cXGQrKShlWystXT9cXGQrKT8pKFthLXolXSopJC9pOyAvLyBQYXJzZSBoZXggdmFsdWVcblxuY29uc3QgaGV4ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaTsgLy8gUGFyc2UgcmdiIHZhbHVlXG5cbmNvbnN0IHJnYiA9IC9yZ2JcXCgoXFxkKyksKFxcZCspLChcXGQrKVxcKS87IC8vIFBhcnNlIHJlZmVyZW5jZSBpZFxuXG5jb25zdCByZWZlcmVuY2UgPSAvKCNbYS16X11bYS16MC05XFwtX10qKS9pOyAvLyBzcGxpdHMgYSB0cmFuc2Zvcm1hdGlvbiBjaGFpblxuXG5jb25zdCB0cmFuc2Zvcm1zID0gL1xcKVxccyosP1xccyovOyAvLyBXaGl0ZXNwYWNlXG5cbmNvbnN0IHdoaXRlc3BhY2UgPSAvXFxzL2c7IC8vIFRlc3QgaGV4IHZhbHVlXG5cbmNvbnN0IGlzSGV4ID0gL14jW2EtZjAtOV17M30kfF4jW2EtZjAtOV17Nn0kL2k7IC8vIFRlc3QgcmdiIHZhbHVlXG5cbmNvbnN0IGlzUmdiID0gL15yZ2JcXCgvOyAvLyBUZXN0IGZvciBibGFuayBzdHJpbmdcblxuY29uc3QgaXNCbGFuayA9IC9eKFxccyspPyQvOyAvLyBUZXN0IGZvciBudW1lcmljIHN0cmluZ1xuXG5jb25zdCBpc051bWJlciA9IC9eWystXT8oXFxkKyhcXC5cXGQqKT98XFwuXFxkKykoZVsrLV0/XFxkKyk/JC9pOyAvLyBUZXN0IGZvciBpbWFnZSB1cmxcblxuY29uc3QgaXNJbWFnZSA9IC9cXC4oanBnfGpwZWd8cG5nfGdpZnxzdmcpKFxcP1tePV0rLiopPy9pOyAvLyBzcGxpdCBhdCB3aGl0ZXNwYWNlIGFuZCBjb21tYVxuXG5jb25zdCBkZWxpbWl0ZXIgPSAvW1xccyxdKy87IC8vIFRlc3QgZm9yIHBhdGggbGV0dGVyXG5cbmNvbnN0IGlzUGF0aExldHRlciA9IC9bTUxIVkNTUVRBWl0vaTtcblxudmFyIHJlZ2V4ID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIG51bWJlckFuZFVuaXQ6IG51bWJlckFuZFVuaXQsXG4gIGhleDogaGV4LFxuICByZ2I6IHJnYixcbiAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gIHRyYW5zZm9ybXM6IHRyYW5zZm9ybXMsXG4gIHdoaXRlc3BhY2U6IHdoaXRlc3BhY2UsXG4gIGlzSGV4OiBpc0hleCxcbiAgaXNSZ2I6IGlzUmdiLFxuICBpc0JsYW5rOiBpc0JsYW5rLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzSW1hZ2U6IGlzSW1hZ2UsXG4gIGRlbGltaXRlcjogZGVsaW1pdGVyLFxuICBpc1BhdGhMZXR0ZXI6IGlzUGF0aExldHRlclxufTtcblxuZnVuY3Rpb24gY2xhc3NlcygpIHtcbiAgY29uc3QgYXR0ciA9IHRoaXMuYXR0cignY2xhc3MnKTtcbiAgcmV0dXJuIGF0dHIgPT0gbnVsbCA/IFtdIDogYXR0ci50cmltKCkuc3BsaXQoZGVsaW1pdGVyKTtcbn0gLy8gUmV0dXJuIHRydWUgaWYgY2xhc3MgZXhpc3RzIG9uIHRoZSBub2RlLCBmYWxzZSBvdGhlcndpc2VcblxuZnVuY3Rpb24gaGFzQ2xhc3MobmFtZSkge1xuICByZXR1cm4gdGhpcy5jbGFzc2VzKCkuaW5kZXhPZihuYW1lKSAhPT0gLTE7XG59IC8vIEFkZCBjbGFzcyB0byB0aGUgbm9kZVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhuYW1lKSB7XG4gIGlmICghdGhpcy5oYXNDbGFzcyhuYW1lKSkge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5jbGFzc2VzKCk7XG4gICAgYXJyYXkucHVzaChuYW1lKTtcbiAgICB0aGlzLmF0dHIoJ2NsYXNzJywgYXJyYXkuam9pbignICcpKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufSAvLyBSZW1vdmUgY2xhc3MgZnJvbSB0aGUgbm9kZVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhuYW1lKSB7XG4gIGlmICh0aGlzLmhhc0NsYXNzKG5hbWUpKSB7XG4gICAgdGhpcy5hdHRyKCdjbGFzcycsIHRoaXMuY2xhc3NlcygpLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGMgIT09IG5hbWU7XG4gICAgfSkuam9pbignICcpKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufSAvLyBUb2dnbGUgdGhlIHByZXNlbmNlIG9mIGEgY2xhc3Mgb24gdGhlIG5vZGVcblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MobmFtZSkge1xuICByZXR1cm4gdGhpcy5oYXNDbGFzcyhuYW1lKSA/IHRoaXMucmVtb3ZlQ2xhc3MobmFtZSkgOiB0aGlzLmFkZENsYXNzKG5hbWUpO1xufVxucmVnaXN0ZXJNZXRob2RzKCdEb20nLCB7XG4gIGNsYXNzZXMsXG4gIGhhc0NsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzXG59KTtcblxuZnVuY3Rpb24gY3NzKHN0eWxlLCB2YWwpIHtcbiAgY29uc3QgcmV0ID0ge307XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBnZXQgZnVsbCBzdHlsZSBhcyBvYmplY3RcbiAgICB0aGlzLm5vZGUuc3R5bGUuY3NzVGV4dC5zcGxpdCgvXFxzKjtcXHMqLykuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuICEhZWwubGVuZ3RoO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBjb25zdCB0ID0gZWwuc3BsaXQoL1xccyo6XFxzKi8pO1xuICAgICAgcmV0W3RbMF1dID0gdFsxXTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgLy8gZ2V0IHN0eWxlIHByb3BlcnRpZXMgYXMgYXJyYXlcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZSkpIHtcbiAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBzdHlsZSkge1xuICAgICAgICBjb25zdCBjYXNlZCA9IGNhbWVsQ2FzZShuYW1lKTtcbiAgICAgICAgcmV0W25hbWVdID0gdGhpcy5ub2RlLnN0eWxlW2Nhc2VkXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9IC8vIGdldCBzdHlsZSBmb3IgcHJvcGVydHlcblxuXG4gICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGUuc3R5bGVbY2FtZWxDYXNlKHN0eWxlKV07XG4gICAgfSAvLyBzZXQgc3R5bGVzIGluIG9iamVjdFxuXG5cbiAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlKSB7XG4gICAgICAgIC8vIHNldCBlbXB0eSBzdHJpbmcgaWYgbnVsbC91bmRlZmluZWQvJycgd2FzIGdpdmVuXG4gICAgICAgIHRoaXMubm9kZS5zdHlsZVtjYW1lbENhc2UobmFtZSldID0gc3R5bGVbbmFtZV0gPT0gbnVsbCB8fCBpc0JsYW5rLnRlc3Qoc3R5bGVbbmFtZV0pID8gJycgOiBzdHlsZVtuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gc2V0IHN0eWxlIGZvciBwcm9wZXJ0eVxuXG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICB0aGlzLm5vZGUuc3R5bGVbY2FtZWxDYXNlKHN0eWxlKV0gPSB2YWwgPT0gbnVsbCB8fCBpc0JsYW5rLnRlc3QodmFsKSA/ICcnIDogdmFsO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59IC8vIFNob3cgZWxlbWVudFxuXG5mdW5jdGlvbiBzaG93KCkge1xuICByZXR1cm4gdGhpcy5jc3MoJ2Rpc3BsYXknLCAnJyk7XG59IC8vIEhpZGUgZWxlbWVudFxuXG5mdW5jdGlvbiBoaWRlKCkge1xuICByZXR1cm4gdGhpcy5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xufSAvLyBJcyBlbGVtZW50IHZpc2libGU/XG5cbmZ1bmN0aW9uIHZpc2libGUoKSB7XG4gIHJldHVybiB0aGlzLmNzcygnZGlzcGxheScpICE9PSAnbm9uZSc7XG59XG5yZWdpc3Rlck1ldGhvZHMoJ0RvbScsIHtcbiAgY3NzLFxuICBzaG93LFxuICBoaWRlLFxuICB2aXNpYmxlXG59KTtcblxuZnVuY3Rpb24gZGF0YShhLCB2LCByKSB7XG4gIGlmIChhID09IG51bGwpIHtcbiAgICAvLyBnZXQgYW4gb2JqZWN0IG9mIGF0dHJpYnV0ZXNcbiAgICByZXR1cm4gdGhpcy5kYXRhKG1hcChmaWx0ZXIodGhpcy5ub2RlLmF0dHJpYnV0ZXMsIGVsID0+IGVsLm5vZGVOYW1lLmluZGV4T2YoJ2RhdGEtJykgPT09IDApLCBlbCA9PiBlbC5ub2RlTmFtZS5zbGljZSg1KSkpO1xuICB9IGVsc2UgaWYgKGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcblxuICAgIGZvciAoY29uc3Qga2V5IG9mIGEpIHtcbiAgICAgIGRhdGFba2V5XSA9IHRoaXMuZGF0YShrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodiBpbiBhKSB7XG4gICAgICB0aGlzLmRhdGEodiwgYVt2XSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuYXR0cignZGF0YS0nICsgYSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ2RhdGEtJyArIGEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmF0dHIoJ2RhdGEtJyArIGEsIHYgPT09IG51bGwgPyBudWxsIDogciA9PT0gdHJ1ZSB8fCB0eXBlb2YgdiA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHYgPT09ICdudW1iZXInID8gdiA6IEpTT04uc3RyaW5naWZ5KHYpKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxucmVnaXN0ZXJNZXRob2RzKCdEb20nLCB7XG4gIGRhdGFcbn0pO1xuXG5mdW5jdGlvbiByZW1lbWJlcihrLCB2KSB7XG4gIC8vIHJlbWVtYmVyIGV2ZXJ5IGl0ZW0gaW4gYW4gb2JqZWN0IGluZGl2aWR1YWxseVxuICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBrKSB7XG4gICAgICB0aGlzLnJlbWVtYmVyKGtleSwga1trZXldKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIHJldHJpZXZlIG1lbW9yeVxuICAgIHJldHVybiB0aGlzLm1lbW9yeSgpW2tdO1xuICB9IGVsc2Uge1xuICAgIC8vIHN0b3JlIG1lbW9yeVxuICAgIHRoaXMubWVtb3J5KClba10gPSB2O1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59IC8vIEVyYXNlIGEgZ2l2ZW4gbWVtb3J5XG5cbmZ1bmN0aW9uIGZvcmdldCgpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICB0aGlzLl9tZW1vcnkgPSB7fTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBkZWxldGUgdGhpcy5tZW1vcnkoKVthcmd1bWVudHNbaV1dO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufSAvLyBUaGlzIHRyaWdnZXJzIGNyZWF0aW9uIG9mIGEgbmV3IGhpZGRlbiBjbGFzcyB3aGljaCBpcyBub3QgcGVyZm9ybWFudFxuLy8gSG93ZXZlciwgdGhpcyBmdW5jdGlvbiBpcyBub3QgcmFyZWx5IHVzZWQgc28gaXQgd2lsbCBub3QgaGFwcGVuIGZyZXF1ZW50bHlcbi8vIFJldHVybiBsb2NhbCBtZW1vcnkgb2JqZWN0XG5cbmZ1bmN0aW9uIG1lbW9yeSgpIHtcbiAgcmV0dXJuIHRoaXMuX21lbW9yeSA9IHRoaXMuX21lbW9yeSB8fCB7fTtcbn1cbnJlZ2lzdGVyTWV0aG9kcygnRG9tJywge1xuICByZW1lbWJlcixcbiAgZm9yZ2V0LFxuICBtZW1vcnlcbn0pO1xuXG5mdW5jdGlvbiBzaXhEaWdpdEhleChoZXgpIHtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDQgPyBbJyMnLCBoZXguc3Vic3RyaW5nKDEsIDIpLCBoZXguc3Vic3RyaW5nKDEsIDIpLCBoZXguc3Vic3RyaW5nKDIsIDMpLCBoZXguc3Vic3RyaW5nKDIsIDMpLCBoZXguc3Vic3RyaW5nKDMsIDQpLCBoZXguc3Vic3RyaW5nKDMsIDQpXS5qb2luKCcnKSA6IGhleDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50SGV4KGNvbXBvbmVudCkge1xuICBjb25zdCBpbnRlZ2VyID0gTWF0aC5yb3VuZChjb21wb25lbnQpO1xuICBjb25zdCBib3VuZGVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBpbnRlZ2VyKSk7XG4gIGNvbnN0IGhleCA9IGJvdW5kZWQudG9TdHJpbmcoMTYpO1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/ICcwJyArIGhleCA6IGhleDtcbn1cblxuZnVuY3Rpb24gaXMob2JqZWN0LCBzcGFjZSkge1xuICBmb3IgKGxldCBpID0gc3BhY2UubGVuZ3RoOyBpLS07KSB7XG4gICAgaWYgKG9iamVjdFtzcGFjZVtpXV0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBnZXRQYXJhbWV0ZXJzKGEsIGIpIHtcbiAgY29uc3QgcGFyYW1zID0gaXMoYSwgJ3JnYicpID8ge1xuICAgIF9hOiBhLnIsXG4gICAgX2I6IGEuZyxcbiAgICBfYzogYS5iLFxuICAgIF9kOiAwLFxuICAgIHNwYWNlOiAncmdiJ1xuICB9IDogaXMoYSwgJ3h5eicpID8ge1xuICAgIF9hOiBhLngsXG4gICAgX2I6IGEueSxcbiAgICBfYzogYS56LFxuICAgIF9kOiAwLFxuICAgIHNwYWNlOiAneHl6J1xuICB9IDogaXMoYSwgJ2hzbCcpID8ge1xuICAgIF9hOiBhLmgsXG4gICAgX2I6IGEucyxcbiAgICBfYzogYS5sLFxuICAgIF9kOiAwLFxuICAgIHNwYWNlOiAnaHNsJ1xuICB9IDogaXMoYSwgJ2xhYicpID8ge1xuICAgIF9hOiBhLmwsXG4gICAgX2I6IGEuYSxcbiAgICBfYzogYS5iLFxuICAgIF9kOiAwLFxuICAgIHNwYWNlOiAnbGFiJ1xuICB9IDogaXMoYSwgJ2xjaCcpID8ge1xuICAgIF9hOiBhLmwsXG4gICAgX2I6IGEuYyxcbiAgICBfYzogYS5oLFxuICAgIF9kOiAwLFxuICAgIHNwYWNlOiAnbGNoJ1xuICB9IDogaXMoYSwgJ2NteWsnKSA/IHtcbiAgICBfYTogYS5jLFxuICAgIF9iOiBhLm0sXG4gICAgX2M6IGEueSxcbiAgICBfZDogYS5rLFxuICAgIHNwYWNlOiAnY215aydcbiAgfSA6IHtcbiAgICBfYTogMCxcbiAgICBfYjogMCxcbiAgICBfYzogMCxcbiAgICBzcGFjZTogJ3JnYidcbiAgfTtcbiAgcGFyYW1zLnNwYWNlID0gYiB8fCBwYXJhbXMuc3BhY2U7XG4gIHJldHVybiBwYXJhbXM7XG59XG5cbmZ1bmN0aW9uIGNpZVNwYWNlKHNwYWNlKSB7XG4gIGlmIChzcGFjZSA9PT0gJ2xhYicgfHwgc3BhY2UgPT09ICd4eXonIHx8IHNwYWNlID09PSAnbGNoJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBodWVUb1JnYihwLCBxLCB0KSB7XG4gIGlmICh0IDwgMCkgdCArPSAxO1xuICBpZiAodCA+IDEpIHQgLT0gMTtcbiAgaWYgKHQgPCAxIC8gNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XG4gIGlmICh0IDwgMSAvIDIpIHJldHVybiBxO1xuICBpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XG4gIHJldHVybiBwO1xufVxuXG5jbGFzcyBDb2xvciB7XG4gIGNvbnN0cnVjdG9yKC4uLmlucHV0cykge1xuICAgIHRoaXMuaW5pdCguLi5pbnB1dHMpO1xuICB9IC8vIFRlc3QgaWYgZ2l2ZW4gdmFsdWUgaXMgYSBjb2xvclxuXG5cbiAgc3RhdGljIGlzQ29sb3IoY29sb3IpIHtcbiAgICByZXR1cm4gY29sb3IgJiYgKGNvbG9yIGluc3RhbmNlb2YgQ29sb3IgfHwgdGhpcy5pc1JnYihjb2xvcikgfHwgdGhpcy50ZXN0KGNvbG9yKSk7XG4gIH0gLy8gVGVzdCBpZiBnaXZlbiB2YWx1ZSBpcyBhbiByZ2Igb2JqZWN0XG5cblxuICBzdGF0aWMgaXNSZ2IoY29sb3IpIHtcbiAgICByZXR1cm4gY29sb3IgJiYgdHlwZW9mIGNvbG9yLnIgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5nID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYiA9PT0gJ251bWJlcic7XG4gIH1cbiAgLypcclxuICBHZW5lcmF0aW5nIHJhbmRvbSBjb2xvcnNcclxuICAqL1xuXG5cbiAgc3RhdGljIHJhbmRvbShtb2RlID0gJ3ZpYnJhbnQnLCB0LCB1KSB7XG4gICAgLy8gR2V0IHRoZSBtYXRoIG1vZHVsZXNcbiAgICBjb25zdCB7XG4gICAgICByYW5kb20sXG4gICAgICByb3VuZCxcbiAgICAgIHNpbixcbiAgICAgIFBJOiBwaVxuICAgIH0gPSBNYXRoOyAvLyBSdW4gdGhlIGNvcnJlY3QgZ2VuZXJhdG9yXG5cbiAgICBpZiAobW9kZSA9PT0gJ3ZpYnJhbnQnKSB7XG4gICAgICBjb25zdCBsID0gKDgxIC0gNTcpICogcmFuZG9tKCkgKyA1NztcbiAgICAgIGNvbnN0IGMgPSAoODMgLSA0NSkgKiByYW5kb20oKSArIDQ1O1xuICAgICAgY29uc3QgaCA9IDM2MCAqIHJhbmRvbSgpO1xuICAgICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IobCwgYywgaCwgJ2xjaCcpO1xuICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ3NpbmUnKSB7XG4gICAgICB0ID0gdCA9PSBudWxsID8gcmFuZG9tKCkgOiB0O1xuICAgICAgY29uc3QgciA9IHJvdW5kKDgwICogc2luKDIgKiBwaSAqIHQgLyAwLjUgKyAwLjAxKSArIDE1MCk7XG4gICAgICBjb25zdCBnID0gcm91bmQoNTAgKiBzaW4oMiAqIHBpICogdCAvIDAuNSArIDQuNikgKyAyMDApO1xuICAgICAgY29uc3QgYiA9IHJvdW5kKDEwMCAqIHNpbigyICogcGkgKiB0IC8gMC41ICsgMi4zKSArIDE1MCk7XG4gICAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihyLCBnLCBiKTtcbiAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdwYXN0ZWwnKSB7XG4gICAgICBjb25zdCBsID0gKDk0IC0gODYpICogcmFuZG9tKCkgKyA4NjtcbiAgICAgIGNvbnN0IGMgPSAoMjYgLSA5KSAqIHJhbmRvbSgpICsgOTtcbiAgICAgIGNvbnN0IGggPSAzNjAgKiByYW5kb20oKTtcbiAgICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKGwsIGMsIGgsICdsY2gnKTtcbiAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdkYXJrJykge1xuICAgICAgY29uc3QgbCA9IDEwICsgMTAgKiByYW5kb20oKTtcbiAgICAgIGNvbnN0IGMgPSAoMTI1IC0gNzUpICogcmFuZG9tKCkgKyA4NjtcbiAgICAgIGNvbnN0IGggPSAzNjAgKiByYW5kb20oKTtcbiAgICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKGwsIGMsIGgsICdsY2gnKTtcbiAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdyZ2InKSB7XG4gICAgICBjb25zdCByID0gMjU1ICogcmFuZG9tKCk7XG4gICAgICBjb25zdCBnID0gMjU1ICogcmFuZG9tKCk7XG4gICAgICBjb25zdCBiID0gMjU1ICogcmFuZG9tKCk7XG4gICAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihyLCBnLCBiKTtcbiAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdsYWInKSB7XG4gICAgICBjb25zdCBsID0gMTAwICogcmFuZG9tKCk7XG4gICAgICBjb25zdCBhID0gMjU2ICogcmFuZG9tKCkgLSAxMjg7XG4gICAgICBjb25zdCBiID0gMjU2ICogcmFuZG9tKCkgLSAxMjg7XG4gICAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihsLCBhLCBiLCAnbGFiJyk7XG4gICAgICByZXR1cm4gY29sb3I7XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAnZ3JleScpIHtcbiAgICAgIGNvbnN0IGdyZXkgPSAyNTUgKiByYW5kb20oKTtcbiAgICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKGdyZXksIGdyZXksIGdyZXkpO1xuICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHJhbmRvbSBjb2xvciBtb2RlJyk7XG4gICAgfVxuICB9IC8vIFRlc3QgaWYgZ2l2ZW4gdmFsdWUgaXMgYSBjb2xvciBzdHJpbmdcblxuXG4gIHN0YXRpYyB0ZXN0KGNvbG9yKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgKGlzSGV4LnRlc3QoY29sb3IpIHx8IGlzUmdiLnRlc3QoY29sb3IpKTtcbiAgfVxuXG4gIGNteWsoKSB7XG4gICAgLy8gR2V0IHRoZSByZ2IgdmFsdWVzIGZvciB0aGUgY3VycmVudCBjb2xvclxuICAgIGNvbnN0IHtcbiAgICAgIF9hLFxuICAgICAgX2IsXG4gICAgICBfY1xuICAgIH0gPSB0aGlzLnJnYigpO1xuICAgIGNvbnN0IFtyLCBnLCBiXSA9IFtfYSwgX2IsIF9jXS5tYXAodiA9PiB2IC8gMjU1KTsgLy8gR2V0IHRoZSBjbXlrIHZhbHVlcyBpbiBhbiB1bmJvdW5kZWQgZm9ybWF0XG5cbiAgICBjb25zdCBrID0gTWF0aC5taW4oMSAtIHIsIDEgLSBnLCAxIC0gYik7XG5cbiAgICBpZiAoayA9PT0gMSkge1xuICAgICAgLy8gQ2F0Y2ggdGhlIGJsYWNrIGNhc2VcbiAgICAgIHJldHVybiBuZXcgQ29sb3IoMCwgMCwgMCwgMSwgJ2NteWsnKTtcbiAgICB9XG5cbiAgICBjb25zdCBjID0gKDEgLSByIC0gaykgLyAoMSAtIGspO1xuICAgIGNvbnN0IG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gayk7XG4gICAgY29uc3QgeSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKTsgLy8gQ29uc3RydWN0IHRoZSBuZXcgY29sb3JcblxuICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKGMsIG0sIHksIGssICdjbXlrJyk7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgaHNsKCkge1xuICAgIC8vIEdldCB0aGUgcmdiIHZhbHVlc1xuICAgIGNvbnN0IHtcbiAgICAgIF9hLFxuICAgICAgX2IsXG4gICAgICBfY1xuICAgIH0gPSB0aGlzLnJnYigpO1xuICAgIGNvbnN0IFtyLCBnLCBiXSA9IFtfYSwgX2IsIF9jXS5tYXAodiA9PiB2IC8gMjU1KTsgLy8gRmluZCB0aGUgbWF4aW11bSBhbmQgbWluaW11bSB2YWx1ZXMgdG8gZ2V0IHRoZSBsaWdodG5lc3NcblxuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgIGNvbnN0IGwgPSAobWF4ICsgbWluKSAvIDI7IC8vIElmIHRoZSByLCBnLCB2IHZhbHVlcyBhcmUgaWRlbnRpY2FsIHRoZW4gd2UgYXJlIGdyZXlcblxuICAgIGNvbnN0IGlzR3JleSA9IG1heCA9PT0gbWluOyAvLyBDYWxjdWxhdGUgdGhlIGh1ZSBhbmQgc2F0dXJhdGlvblxuXG4gICAgY29uc3QgZGVsdGEgPSBtYXggLSBtaW47XG4gICAgY29uc3QgcyA9IGlzR3JleSA/IDAgOiBsID4gMC41ID8gZGVsdGEgLyAoMiAtIG1heCAtIG1pbikgOiBkZWx0YSAvIChtYXggKyBtaW4pO1xuICAgIGNvbnN0IGggPSBpc0dyZXkgPyAwIDogbWF4ID09PSByID8gKChnIC0gYikgLyBkZWx0YSArIChnIDwgYiA/IDYgOiAwKSkgLyA2IDogbWF4ID09PSBnID8gKChiIC0gcikgLyBkZWx0YSArIDIpIC8gNiA6IG1heCA9PT0gYiA/ICgociAtIGcpIC8gZGVsdGEgKyA0KSAvIDYgOiAwOyAvLyBDb25zdHJ1Y3QgYW5kIHJldHVybiB0aGUgbmV3IGNvbG9yXG5cbiAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcigzNjAgKiBoLCAxMDAgKiBzLCAxMDAgKiBsLCAnaHNsJyk7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgaW5pdChhID0gMCwgYiA9IDAsIGMgPSAwLCBkID0gMCwgc3BhY2UgPSAncmdiJykge1xuICAgIC8vIFRoaXMgY2F0Y2hlcyB0aGUgY2FzZSB3aGVuIGEgZmFsc3kgdmFsdWUgaXMgcGFzc2VkIGxpa2UgJydcbiAgICBhID0gIWEgPyAwIDogYTsgLy8gUmVzZXQgYWxsIHZhbHVlcyBpbiBjYXNlIHRoZSBpbml0IGZ1bmN0aW9uIGlzIHJlcnVuIHdpdGggbmV3IGNvbG9yIHNwYWNlXG5cbiAgICBpZiAodGhpcy5zcGFjZSkge1xuICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgaW4gdGhpcy5zcGFjZSkge1xuICAgICAgICBkZWxldGUgdGhpc1t0aGlzLnNwYWNlW2NvbXBvbmVudF1dO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYSA9PT0gJ251bWJlcicpIHtcbiAgICAgIC8vIEFsbG93IGZvciB0aGUgY2FzZSB0aGF0IHdlIGRvbid0IG5lZWQgZC4uLlxuICAgICAgc3BhY2UgPSB0eXBlb2YgZCA9PT0gJ3N0cmluZycgPyBkIDogc3BhY2U7XG4gICAgICBkID0gdHlwZW9mIGQgPT09ICdzdHJpbmcnID8gMCA6IGQ7IC8vIEFzc2lnbiB0aGUgdmFsdWVzIHN0cmFpZ2h0IHRvIHRoZSBjb2xvclxuXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgICAgX2E6IGEsXG4gICAgICAgIF9iOiBiLFxuICAgICAgICBfYzogYyxcbiAgICAgICAgX2Q6IGQsXG4gICAgICAgIHNwYWNlXG4gICAgICB9KTsgLy8gSWYgdGhlIHVzZXIgZ2F2ZSB1cyBhbiBhcnJheSwgbWFrZSB0aGUgY29sb3IgZnJvbSBpdFxuICAgIH0gZWxzZSBpZiAoYSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICB0aGlzLnNwYWNlID0gYiB8fCAodHlwZW9mIGFbM10gPT09ICdzdHJpbmcnID8gYVszXSA6IGFbNF0pIHx8ICdyZ2InO1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICAgIF9hOiBhWzBdLFxuICAgICAgICBfYjogYVsxXSxcbiAgICAgICAgX2M6IGFbMl0sXG4gICAgICAgIF9kOiBhWzNdIHx8IDBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoYSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgLy8gU2V0IHRoZSBvYmplY3QgdXAgYW5kIGFzc2lnbiBpdHMgdmFsdWVzIGRpcmVjdGx5XG4gICAgICBjb25zdCB2YWx1ZXMgPSBnZXRQYXJhbWV0ZXJzKGEsIGIpO1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB2YWx1ZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaXNSZ2IudGVzdChhKSkge1xuICAgICAgICBjb25zdCBub1doaXRlc3BhY2UgPSBhLnJlcGxhY2Uod2hpdGVzcGFjZSwgJycpO1xuICAgICAgICBjb25zdCBbX2EsIF9iLCBfY10gPSByZ2IuZXhlYyhub1doaXRlc3BhY2UpLnNsaWNlKDEsIDQpLm1hcCh2ID0+IHBhcnNlSW50KHYpKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICAgICAgX2EsXG4gICAgICAgICAgX2IsXG4gICAgICAgICAgX2MsXG4gICAgICAgICAgX2Q6IDAsXG4gICAgICAgICAgc3BhY2U6ICdyZ2InXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc0hleC50ZXN0KGEpKSB7XG4gICAgICAgIGNvbnN0IGhleFBhcnNlID0gdiA9PiBwYXJzZUludCh2LCAxNik7XG5cbiAgICAgICAgY29uc3QgWywgX2EsIF9iLCBfY10gPSBoZXguZXhlYyhzaXhEaWdpdEhleChhKSkubWFwKGhleFBhcnNlKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICAgICAgX2EsXG4gICAgICAgICAgX2IsXG4gICAgICAgICAgX2MsXG4gICAgICAgICAgX2Q6IDAsXG4gICAgICAgICAgc3BhY2U6ICdyZ2InXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHRocm93IEVycm9yKCdVbnN1cHBvcnRlZCBzdHJpbmcgZm9ybWF0LCBjYW5cXCd0IGNvbnN0cnVjdCBDb2xvcicpO1xuICAgIH0gLy8gTm93IGFkZCB0aGUgY29tcG9uZW50cyBhcyBhIGNvbnZlbmllbmNlXG5cblxuICAgIGNvbnN0IHtcbiAgICAgIF9hLFxuICAgICAgX2IsXG4gICAgICBfYyxcbiAgICAgIF9kXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuc3BhY2UgPT09ICdyZ2InID8ge1xuICAgICAgcjogX2EsXG4gICAgICBnOiBfYixcbiAgICAgIGI6IF9jXG4gICAgfSA6IHRoaXMuc3BhY2UgPT09ICd4eXonID8ge1xuICAgICAgeDogX2EsXG4gICAgICB5OiBfYixcbiAgICAgIHo6IF9jXG4gICAgfSA6IHRoaXMuc3BhY2UgPT09ICdoc2wnID8ge1xuICAgICAgaDogX2EsXG4gICAgICBzOiBfYixcbiAgICAgIGw6IF9jXG4gICAgfSA6IHRoaXMuc3BhY2UgPT09ICdsYWInID8ge1xuICAgICAgbDogX2EsXG4gICAgICBhOiBfYixcbiAgICAgIGI6IF9jXG4gICAgfSA6IHRoaXMuc3BhY2UgPT09ICdsY2gnID8ge1xuICAgICAgbDogX2EsXG4gICAgICBjOiBfYixcbiAgICAgIGg6IF9jXG4gICAgfSA6IHRoaXMuc3BhY2UgPT09ICdjbXlrJyA/IHtcbiAgICAgIGM6IF9hLFxuICAgICAgbTogX2IsXG4gICAgICB5OiBfYyxcbiAgICAgIGs6IF9kXG4gICAgfSA6IHt9O1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29tcG9uZW50cyk7XG4gIH1cblxuICBsYWIoKSB7XG4gICAgLy8gR2V0IHRoZSB4eXogY29sb3JcbiAgICBjb25zdCB7XG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHpcbiAgICB9ID0gdGhpcy54eXooKTsgLy8gR2V0IHRoZSBsYWIgY29tcG9uZW50c1xuXG4gICAgY29uc3QgbCA9IDExNiAqIHkgLSAxNjtcbiAgICBjb25zdCBhID0gNTAwICogKHggLSB5KTtcbiAgICBjb25zdCBiID0gMjAwICogKHkgLSB6KTsgLy8gQ29uc3RydWN0IGFuZCByZXR1cm4gYSBuZXcgY29sb3JcblxuICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKGwsIGEsIGIsICdsYWInKTtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBsY2goKSB7XG4gICAgLy8gR2V0IHRoZSBsYWIgY29sb3IgZGlyZWN0bHlcbiAgICBjb25zdCB7XG4gICAgICBsLFxuICAgICAgYSxcbiAgICAgIGJcbiAgICB9ID0gdGhpcy5sYWIoKTsgLy8gR2V0IHRoZSBjaHJvbWF0aWNpdHkgYW5kIHRoZSBodWUgdXNpbmcgcG9sYXIgY29vcmRpbmF0ZXNcblxuICAgIGNvbnN0IGMgPSBNYXRoLnNxcnQoYSAqKiAyICsgYiAqKiAyKTtcbiAgICBsZXQgaCA9IDE4MCAqIE1hdGguYXRhbjIoYiwgYSkgLyBNYXRoLlBJO1xuXG4gICAgaWYgKGggPCAwKSB7XG4gICAgICBoICo9IC0xO1xuICAgICAgaCA9IDM2MCAtIGg7XG4gICAgfSAvLyBNYWtlIGEgbmV3IGNvbG9yIGFuZCByZXR1cm4gaXRcblxuXG4gICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IobCwgYywgaCwgJ2xjaCcpO1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuICAvKlxyXG4gIENvbnZlcnNpb24gTWV0aG9kc1xyXG4gICovXG5cblxuICByZ2IoKSB7XG4gICAgaWYgKHRoaXMuc3BhY2UgPT09ICdyZ2InKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2UgaWYgKGNpZVNwYWNlKHRoaXMuc3BhY2UpKSB7XG4gICAgICAvLyBDb252ZXJ0IHRvIHRoZSB4eXogY29sb3Igc3BhY2VcbiAgICAgIGxldCB7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHpcbiAgICAgIH0gPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5zcGFjZSA9PT0gJ2xhYicgfHwgdGhpcy5zcGFjZSA9PT0gJ2xjaCcpIHtcbiAgICAgICAgLy8gR2V0IHRoZSB2YWx1ZXMgaW4gdGhlIGxhYiBzcGFjZVxuICAgICAgICBsZXQge1xuICAgICAgICAgIGwsXG4gICAgICAgICAgYSxcbiAgICAgICAgICBiXG4gICAgICAgIH0gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnNwYWNlID09PSAnbGNoJykge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICBoXG4gICAgICAgICAgfSA9IHRoaXM7XG4gICAgICAgICAgY29uc3QgZFRvUiA9IE1hdGguUEkgLyAxODA7XG4gICAgICAgICAgYSA9IGMgKiBNYXRoLmNvcyhkVG9SICogaCk7XG4gICAgICAgICAgYiA9IGMgKiBNYXRoLnNpbihkVG9SICogaCk7XG4gICAgICAgIH0gLy8gVW5kbyB0aGUgbm9ubGluZWFyIGZ1bmN0aW9uXG5cblxuICAgICAgICBjb25zdCB5TCA9IChsICsgMTYpIC8gMTE2O1xuICAgICAgICBjb25zdCB4TCA9IGEgLyA1MDAgKyB5TDtcbiAgICAgICAgY29uc3QgekwgPSB5TCAtIGIgLyAyMDA7IC8vIEdldCB0aGUgeHl6IHZhbHVlc1xuXG4gICAgICAgIGNvbnN0IGN0ID0gMTYgLyAxMTY7XG4gICAgICAgIGNvbnN0IG14ID0gMC4wMDg4NTY7XG4gICAgICAgIGNvbnN0IG5tID0gNy43ODc7XG4gICAgICAgIHggPSAwLjk1MDQ3ICogKHhMICoqIDMgPiBteCA/IHhMICoqIDMgOiAoeEwgLSBjdCkgLyBubSk7XG4gICAgICAgIHkgPSAxLjAwMDAwICogKHlMICoqIDMgPiBteCA/IHlMICoqIDMgOiAoeUwgLSBjdCkgLyBubSk7XG4gICAgICAgIHogPSAxLjA4ODgzICogKHpMICoqIDMgPiBteCA/IHpMICoqIDMgOiAoekwgLSBjdCkgLyBubSk7XG4gICAgICB9IC8vIENvbnZlcnQgeHl6IHRvIHVuYm91bmRlZCByZ2IgdmFsdWVzXG5cblxuICAgICAgY29uc3QgclUgPSB4ICogMy4yNDA2ICsgeSAqIC0xLjUzNzIgKyB6ICogLTAuNDk4NjtcbiAgICAgIGNvbnN0IGdVID0geCAqIC0wLjk2ODkgKyB5ICogMS44NzU4ICsgeiAqIDAuMDQxNTtcbiAgICAgIGNvbnN0IGJVID0geCAqIDAuMDU1NyArIHkgKiAtMC4yMDQwICsgeiAqIDEuMDU3MDsgLy8gQ29udmVydCB0aGUgdmFsdWVzIHRvIHRydWUgcmdiIHZhbHVlc1xuXG4gICAgICBjb25zdCBwb3cgPSBNYXRoLnBvdztcbiAgICAgIGNvbnN0IGJkID0gMC4wMDMxMzA4O1xuICAgICAgY29uc3QgciA9IHJVID4gYmQgPyAxLjA1NSAqIHBvdyhyVSwgMSAvIDIuNCkgLSAwLjA1NSA6IDEyLjkyICogclU7XG4gICAgICBjb25zdCBnID0gZ1UgPiBiZCA/IDEuMDU1ICogcG93KGdVLCAxIC8gMi40KSAtIDAuMDU1IDogMTIuOTIgKiBnVTtcbiAgICAgIGNvbnN0IGIgPSBiVSA+IGJkID8gMS4wNTUgKiBwb3coYlUsIDEgLyAyLjQpIC0gMC4wNTUgOiAxMi45MiAqIGJVOyAvLyBNYWtlIGFuZCByZXR1cm4gdGhlIGNvbG9yXG5cbiAgICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKDI1NSAqIHIsIDI1NSAqIGcsIDI1NSAqIGIpO1xuICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zcGFjZSA9PT0gJ2hzbCcpIHtcbiAgICAgIC8vIGh0dHBzOi8vYmdyaW5zLmdpdGh1Yi5pby9UaW55Q29sb3IvZG9jcy90aW55Y29sb3IuaHRtbFxuICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IGhzbCB2YWx1ZXNcbiAgICAgIGxldCB7XG4gICAgICAgIGgsXG4gICAgICAgIHMsXG4gICAgICAgIGxcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaCAvPSAzNjA7XG4gICAgICBzIC89IDEwMDtcbiAgICAgIGwgLz0gMTAwOyAvLyBJZiB3ZSBhcmUgZ3JleSwgdGhlbiBqdXN0IG1ha2UgdGhlIGNvbG9yIGRpcmVjdGx5XG5cbiAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgIGwgKj0gMjU1O1xuICAgICAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihsLCBsLCBsKTtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgfSAvLyBUT0RPIEkgaGF2ZSBubyBpZGVhIHdoYXQgdGhpcyBkb2VzIDpEIElmIHlvdSBmaWd1cmUgaXQgb3V0LCB0ZWxsIG1lIVxuXG5cbiAgICAgIGNvbnN0IHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgY29uc3QgcCA9IDIgKiBsIC0gcTsgLy8gR2V0IHRoZSByZ2IgdmFsdWVzXG5cbiAgICAgIGNvbnN0IHIgPSAyNTUgKiBodWVUb1JnYihwLCBxLCBoICsgMSAvIDMpO1xuICAgICAgY29uc3QgZyA9IDI1NSAqIGh1ZVRvUmdiKHAsIHEsIGgpO1xuICAgICAgY29uc3QgYiA9IDI1NSAqIGh1ZVRvUmdiKHAsIHEsIGggLSAxIC8gMyk7IC8vIE1ha2UgYSBuZXcgY29sb3JcblxuICAgICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IociwgZywgYik7XG4gICAgICByZXR1cm4gY29sb3I7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNwYWNlID09PSAnY215aycpIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ZlbGlwZXNhYmluby81MDY2MzM2XG4gICAgICAvLyBHZXQgdGhlIG5vcm1hbGlzZWQgY215ayB2YWx1ZXNcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYyxcbiAgICAgICAgbSxcbiAgICAgICAgeSxcbiAgICAgICAga1xuICAgICAgfSA9IHRoaXM7IC8vIEdldCB0aGUgcmdiIHZhbHVlc1xuXG4gICAgICBjb25zdCByID0gMjU1ICogKDEgLSBNYXRoLm1pbigxLCBjICogKDEgLSBrKSArIGspKTtcbiAgICAgIGNvbnN0IGcgPSAyNTUgKiAoMSAtIE1hdGgubWluKDEsIG0gKiAoMSAtIGspICsgaykpO1xuICAgICAgY29uc3QgYiA9IDI1NSAqICgxIC0gTWF0aC5taW4oMSwgeSAqICgxIC0gaykgKyBrKSk7IC8vIEZvcm0gdGhlIGNvbG9yIGFuZCByZXR1cm4gaXRcblxuICAgICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IociwgZywgYik7XG4gICAgICByZXR1cm4gY29sb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIHRvQXJyYXkoKSB7XG4gICAgY29uc3Qge1xuICAgICAgX2EsXG4gICAgICBfYixcbiAgICAgIF9jLFxuICAgICAgX2QsXG4gICAgICBzcGFjZVxuICAgIH0gPSB0aGlzO1xuICAgIHJldHVybiBbX2EsIF9iLCBfYywgX2QsIHNwYWNlXTtcbiAgfVxuXG4gIHRvSGV4KCkge1xuICAgIGNvbnN0IFtyLCBnLCBiXSA9IHRoaXMuX2NsYW1wZWQoKS5tYXAoY29tcG9uZW50SGV4KTtcblxuICAgIHJldHVybiBgIyR7cn0ke2d9JHtifWA7XG4gIH1cblxuICB0b1JnYigpIHtcbiAgICBjb25zdCBbclYsIGdWLCBiVl0gPSB0aGlzLl9jbGFtcGVkKCk7XG5cbiAgICBjb25zdCBzdHJpbmcgPSBgcmdiKCR7clZ9LCR7Z1Z9LCR7YlZ9KWA7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnRvSGV4KCk7XG4gIH1cblxuICB4eXooKSB7XG4gICAgLy8gTm9ybWFsaXNlIHRoZSByZWQsIGdyZWVuIGFuZCBibHVlIHZhbHVlc1xuICAgIGNvbnN0IHtcbiAgICAgIF9hOiByMjU1LFxuICAgICAgX2I6IGcyNTUsXG4gICAgICBfYzogYjI1NVxuICAgIH0gPSB0aGlzLnJnYigpO1xuICAgIGNvbnN0IFtyLCBnLCBiXSA9IFtyMjU1LCBnMjU1LCBiMjU1XS5tYXAodiA9PiB2IC8gMjU1KTsgLy8gQ29udmVydCB0byB0aGUgbGFiIHJnYiBzcGFjZVxuXG4gICAgY29uc3QgckwgPSByID4gMC4wNDA0NSA/IE1hdGgucG93KChyICsgMC4wNTUpIC8gMS4wNTUsIDIuNCkgOiByIC8gMTIuOTI7XG4gICAgY29uc3QgZ0wgPSBnID4gMC4wNDA0NSA/IE1hdGgucG93KChnICsgMC4wNTUpIC8gMS4wNTUsIDIuNCkgOiBnIC8gMTIuOTI7XG4gICAgY29uc3QgYkwgPSBiID4gMC4wNDA0NSA/IE1hdGgucG93KChiICsgMC4wNTUpIC8gMS4wNTUsIDIuNCkgOiBiIC8gMTIuOTI7IC8vIENvbnZlcnQgdG8gdGhlIHh5eiBjb2xvciBzcGFjZSB3aXRob3V0IGJvdW5kaW5nIHRoZSB2YWx1ZXNcblxuICAgIGNvbnN0IHhVID0gKHJMICogMC40MTI0ICsgZ0wgKiAwLjM1NzYgKyBiTCAqIDAuMTgwNSkgLyAwLjk1MDQ3O1xuICAgIGNvbnN0IHlVID0gKHJMICogMC4yMTI2ICsgZ0wgKiAwLjcxNTIgKyBiTCAqIDAuMDcyMikgLyAxLjAwMDAwO1xuICAgIGNvbnN0IHpVID0gKHJMICogMC4wMTkzICsgZ0wgKiAwLjExOTIgKyBiTCAqIDAuOTUwNSkgLyAxLjA4ODgzOyAvLyBHZXQgdGhlIHByb3BlciB4eXogdmFsdWVzIGJ5IGFwcGx5aW5nIHRoZSBib3VuZGluZ1xuXG4gICAgY29uc3QgeCA9IHhVID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4VSwgMSAvIDMpIDogNy43ODcgKiB4VSArIDE2IC8gMTE2O1xuICAgIGNvbnN0IHkgPSB5VSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeVUsIDEgLyAzKSA6IDcuNzg3ICogeVUgKyAxNiAvIDExNjtcbiAgICBjb25zdCB6ID0gelUgPiAwLjAwODg1NiA/IE1hdGgucG93KHpVLCAxIC8gMykgOiA3Ljc4NyAqIHpVICsgMTYgLyAxMTY7IC8vIE1ha2UgYW5kIHJldHVybiB0aGUgY29sb3JcblxuICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKHgsIHksIHosICd4eXonKTtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cbiAgLypcclxuICBJbnB1dCBhbmQgT3V0cHV0IG1ldGhvZHNcclxuICAqL1xuXG5cbiAgX2NsYW1wZWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgX2EsXG4gICAgICBfYixcbiAgICAgIF9jXG4gICAgfSA9IHRoaXMucmdiKCk7XG4gICAgY29uc3Qge1xuICAgICAgbWF4LFxuICAgICAgbWluLFxuICAgICAgcm91bmRcbiAgICB9ID0gTWF0aDtcblxuICAgIGNvbnN0IGZvcm1hdCA9IHYgPT4gbWF4KDAsIG1pbihyb3VuZCh2KSwgMjU1KSk7XG5cbiAgICByZXR1cm4gW19hLCBfYiwgX2NdLm1hcChmb3JtYXQpO1xuICB9XG4gIC8qXHJcbiAgQ29uc3RydWN0aW5nIGNvbG9yc1xyXG4gICovXG5cblxufVxuXG5jbGFzcyBQb2ludCB7XG4gIC8vIEluaXRpYWxpemVcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHRoaXMuaW5pdCguLi5hcmdzKTtcbiAgfSAvLyBDbG9uZSBwb2ludFxuXG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzKTtcbiAgfVxuXG4gIGluaXQoeCwgeSkge1xuICAgIGNvbnN0IGJhc2UgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07IC8vIGVuc3VyZSBzb3VyY2UgYXMgb2JqZWN0XG5cbiAgICBjb25zdCBzb3VyY2UgPSBBcnJheS5pc0FycmF5KHgpID8ge1xuICAgICAgeDogeFswXSxcbiAgICAgIHk6IHhbMV1cbiAgICB9IDogdHlwZW9mIHggPT09ICdvYmplY3QnID8ge1xuICAgICAgeDogeC54LFxuICAgICAgeTogeC55XG4gICAgfSA6IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfTsgLy8gbWVyZ2Ugc291cmNlXG5cbiAgICB0aGlzLnggPSBzb3VyY2UueCA9PSBudWxsID8gYmFzZS54IDogc291cmNlLng7XG4gICAgdGhpcy55ID0gc291cmNlLnkgPT0gbnVsbCA/IGJhc2UueSA6IHNvdXJjZS55O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG9BcnJheSgpIHtcbiAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgfVxuXG4gIHRyYW5zZm9ybShtKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS50cmFuc2Zvcm1PKG0pO1xuICB9IC8vIFRyYW5zZm9ybSBwb2ludCB3aXRoIG1hdHJpeFxuXG5cbiAgdHJhbnNmb3JtTyhtKSB7XG4gICAgaWYgKCFNYXRyaXguaXNNYXRyaXhMaWtlKG0pKSB7XG4gICAgICBtID0gbmV3IE1hdHJpeChtKTtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH0gPSB0aGlzOyAvLyBQZXJmb3JtIHRoZSBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuICAgIHRoaXMueCA9IG0uYSAqIHggKyBtLmMgKiB5ICsgbS5lO1xuICAgIHRoaXMueSA9IG0uYiAqIHggKyBtLmQgKiB5ICsgbS5mO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbmZ1bmN0aW9uIHBvaW50KHgsIHkpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KS50cmFuc2Zvcm0odGhpcy5zY3JlZW5DVE0oKS5pbnZlcnNlKCkpO1xufVxuXG5mdW5jdGlvbiBjbG9zZUVub3VnaChhLCBiLCB0aHJlc2hvbGQpIHtcbiAgcmV0dXJuIE1hdGguYWJzKGIgLSBhKSA8ICh0aHJlc2hvbGQgfHwgMWUtNik7XG59XG5cbmNsYXNzIE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICB0aGlzLmluaXQoLi4uYXJncyk7XG4gIH1cblxuICBzdGF0aWMgZm9ybWF0VHJhbnNmb3JtcyhvKSB7XG4gICAgLy8gR2V0IGFsbCBvZiB0aGUgcGFyYW1ldGVycyByZXF1aXJlZCB0byBmb3JtIHRoZSBtYXRyaXhcbiAgICBjb25zdCBmbGlwQm90aCA9IG8uZmxpcCA9PT0gJ2JvdGgnIHx8IG8uZmxpcCA9PT0gdHJ1ZTtcbiAgICBjb25zdCBmbGlwWCA9IG8uZmxpcCAmJiAoZmxpcEJvdGggfHwgby5mbGlwID09PSAneCcpID8gLTEgOiAxO1xuICAgIGNvbnN0IGZsaXBZID0gby5mbGlwICYmIChmbGlwQm90aCB8fCBvLmZsaXAgPT09ICd5JykgPyAtMSA6IDE7XG4gICAgY29uc3Qgc2tld1ggPSBvLnNrZXcgJiYgby5za2V3Lmxlbmd0aCA/IG8uc2tld1swXSA6IGlzRmluaXRlKG8uc2tldykgPyBvLnNrZXcgOiBpc0Zpbml0ZShvLnNrZXdYKSA/IG8uc2tld1ggOiAwO1xuICAgIGNvbnN0IHNrZXdZID0gby5za2V3ICYmIG8uc2tldy5sZW5ndGggPyBvLnNrZXdbMV0gOiBpc0Zpbml0ZShvLnNrZXcpID8gby5za2V3IDogaXNGaW5pdGUoby5za2V3WSkgPyBvLnNrZXdZIDogMDtcbiAgICBjb25zdCBzY2FsZVggPSBvLnNjYWxlICYmIG8uc2NhbGUubGVuZ3RoID8gby5zY2FsZVswXSAqIGZsaXBYIDogaXNGaW5pdGUoby5zY2FsZSkgPyBvLnNjYWxlICogZmxpcFggOiBpc0Zpbml0ZShvLnNjYWxlWCkgPyBvLnNjYWxlWCAqIGZsaXBYIDogZmxpcFg7XG4gICAgY29uc3Qgc2NhbGVZID0gby5zY2FsZSAmJiBvLnNjYWxlLmxlbmd0aCA/IG8uc2NhbGVbMV0gKiBmbGlwWSA6IGlzRmluaXRlKG8uc2NhbGUpID8gby5zY2FsZSAqIGZsaXBZIDogaXNGaW5pdGUoby5zY2FsZVkpID8gby5zY2FsZVkgKiBmbGlwWSA6IGZsaXBZO1xuICAgIGNvbnN0IHNoZWFyID0gby5zaGVhciB8fCAwO1xuICAgIGNvbnN0IHRoZXRhID0gby5yb3RhdGUgfHwgby50aGV0YSB8fCAwO1xuICAgIGNvbnN0IG9yaWdpbiA9IG5ldyBQb2ludChvLm9yaWdpbiB8fCBvLmFyb3VuZCB8fCBvLm94IHx8IG8ub3JpZ2luWCwgby5veSB8fCBvLm9yaWdpblkpO1xuICAgIGNvbnN0IG94ID0gb3JpZ2luLng7XG4gICAgY29uc3Qgb3kgPSBvcmlnaW4ueTsgLy8gV2UgbmVlZCBQb2ludCB0byBiZSBpbnZhbGlkIGlmIG5vdGhpbmcgd2FzIHBhc3NlZCBiZWNhdXNlIHdlIGNhbm5vdCBkZWZhdWx0IHRvIDAgaGVyZS4gVGhhdHMgd2h5IE5hTlxuXG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoby5wb3NpdGlvbiB8fCBvLnB4IHx8IG8ucG9zaXRpb25YIHx8IE5hTiwgby5weSB8fCBvLnBvc2l0aW9uWSB8fCBOYU4pO1xuICAgIGNvbnN0IHB4ID0gcG9zaXRpb24ueDtcbiAgICBjb25zdCBweSA9IHBvc2l0aW9uLnk7XG4gICAgY29uc3QgdHJhbnNsYXRlID0gbmV3IFBvaW50KG8udHJhbnNsYXRlIHx8IG8udHggfHwgby50cmFuc2xhdGVYLCBvLnR5IHx8IG8udHJhbnNsYXRlWSk7XG4gICAgY29uc3QgdHggPSB0cmFuc2xhdGUueDtcbiAgICBjb25zdCB0eSA9IHRyYW5zbGF0ZS55O1xuICAgIGNvbnN0IHJlbGF0aXZlID0gbmV3IFBvaW50KG8ucmVsYXRpdmUgfHwgby5yeCB8fCBvLnJlbGF0aXZlWCwgby5yeSB8fCBvLnJlbGF0aXZlWSk7XG4gICAgY29uc3QgcnggPSByZWxhdGl2ZS54O1xuICAgIGNvbnN0IHJ5ID0gcmVsYXRpdmUueTsgLy8gUG9wdWxhdGUgYWxsIG9mIHRoZSB2YWx1ZXNcblxuICAgIHJldHVybiB7XG4gICAgICBzY2FsZVgsXG4gICAgICBzY2FsZVksXG4gICAgICBza2V3WCxcbiAgICAgIHNrZXdZLFxuICAgICAgc2hlYXIsXG4gICAgICB0aGV0YSxcbiAgICAgIHJ4LFxuICAgICAgcnksXG4gICAgICB0eCxcbiAgICAgIHR5LFxuICAgICAgb3gsXG4gICAgICBveSxcbiAgICAgIHB4LFxuICAgICAgcHlcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheShhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGE6IGFbMF0sXG4gICAgICBiOiBhWzFdLFxuICAgICAgYzogYVsyXSxcbiAgICAgIGQ6IGFbM10sXG4gICAgICBlOiBhWzRdLFxuICAgICAgZjogYVs1XVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgaXNNYXRyaXhMaWtlKG8pIHtcbiAgICByZXR1cm4gby5hICE9IG51bGwgfHwgby5iICE9IG51bGwgfHwgby5jICE9IG51bGwgfHwgby5kICE9IG51bGwgfHwgby5lICE9IG51bGwgfHwgby5mICE9IG51bGw7XG4gIH0gLy8gbGVmdCBtYXRyaXgsIHJpZ2h0IG1hdHJpeCwgdGFyZ2V0IG1hdHJpeCB3aGljaCBpcyBvdmVyd3JpdHRlblxuXG5cbiAgc3RhdGljIG1hdHJpeE11bHRpcGx5KGwsIHIsIG8pIHtcbiAgICAvLyBXb3JrIG91dCB0aGUgcHJvZHVjdCBkaXJlY3RseVxuICAgIGNvbnN0IGEgPSBsLmEgKiByLmEgKyBsLmMgKiByLmI7XG4gICAgY29uc3QgYiA9IGwuYiAqIHIuYSArIGwuZCAqIHIuYjtcbiAgICBjb25zdCBjID0gbC5hICogci5jICsgbC5jICogci5kO1xuICAgIGNvbnN0IGQgPSBsLmIgKiByLmMgKyBsLmQgKiByLmQ7XG4gICAgY29uc3QgZSA9IGwuZSArIGwuYSAqIHIuZSArIGwuYyAqIHIuZjtcbiAgICBjb25zdCBmID0gbC5mICsgbC5iICogci5lICsgbC5kICogci5mOyAvLyBtYWtlIHN1cmUgdG8gdXNlIGxvY2FsIHZhcmlhYmxlcyBiZWNhdXNlIGwvciBhbmQgbyBjb3VsZCBiZSB0aGUgc2FtZVxuXG4gICAgby5hID0gYTtcbiAgICBvLmIgPSBiO1xuICAgIG8uYyA9IGM7XG4gICAgby5kID0gZDtcbiAgICBvLmUgPSBlO1xuICAgIG8uZiA9IGY7XG4gICAgcmV0dXJuIG87XG4gIH1cblxuICBhcm91bmQoY3gsIGN5LCBtYXRyaXgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmFyb3VuZE8oY3gsIGN5LCBtYXRyaXgpO1xuICB9IC8vIFRyYW5zZm9ybSBhcm91bmQgYSBjZW50ZXIgcG9pbnRcblxuXG4gIGFyb3VuZE8oY3gsIGN5LCBtYXRyaXgpIHtcbiAgICBjb25zdCBkeCA9IGN4IHx8IDA7XG4gICAgY29uc3QgZHkgPSBjeSB8fCAwO1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZU8oLWR4LCAtZHkpLmxtdWx0aXBseU8obWF0cml4KS50cmFuc2xhdGVPKGR4LCBkeSk7XG4gIH0gLy8gQ2xvbmVzIHRoaXMgbWF0cml4XG5cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IE1hdHJpeCh0aGlzKTtcbiAgfSAvLyBEZWNvbXBvc2VzIHRoaXMgbWF0cml4IGludG8gaXRzIGFmZmluZSBwYXJhbWV0ZXJzXG5cblxuICBkZWNvbXBvc2UoY3ggPSAwLCBjeSA9IDApIHtcbiAgICAvLyBHZXQgdGhlIHBhcmFtZXRlcnMgZnJvbSB0aGUgbWF0cml4XG4gICAgY29uc3QgYSA9IHRoaXMuYTtcbiAgICBjb25zdCBiID0gdGhpcy5iO1xuICAgIGNvbnN0IGMgPSB0aGlzLmM7XG4gICAgY29uc3QgZCA9IHRoaXMuZDtcbiAgICBjb25zdCBlID0gdGhpcy5lO1xuICAgIGNvbnN0IGYgPSB0aGlzLmY7IC8vIEZpZ3VyZSBvdXQgaWYgdGhlIHdpbmRpbmcgZGlyZWN0aW9uIGlzIGNsb2Nrd2lzZSBvciBjb3VudGVyY2xvY2t3aXNlXG5cbiAgICBjb25zdCBkZXRlcm1pbmFudCA9IGEgKiBkIC0gYiAqIGM7XG4gICAgY29uc3QgY2N3ID0gZGV0ZXJtaW5hbnQgPiAwID8gMSA6IC0xOyAvLyBTaW5jZSB3ZSBvbmx5IHNoZWFyIGluIHgsIHdlIGNhbiB1c2UgdGhlIHggYmFzaXMgdG8gZ2V0IHRoZSB4IHNjYWxlXG4gICAgLy8gYW5kIHRoZSByb3RhdGlvbiBvZiB0aGUgcmVzdWx0aW5nIG1hdHJpeFxuXG4gICAgY29uc3Qgc3ggPSBjY3cgKiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG4gICAgY29uc3QgdGhldGFSYWQgPSBNYXRoLmF0YW4yKGNjdyAqIGIsIGNjdyAqIGEpO1xuICAgIGNvbnN0IHRoZXRhID0gMTgwIC8gTWF0aC5QSSAqIHRoZXRhUmFkO1xuICAgIGNvbnN0IGN0ID0gTWF0aC5jb3ModGhldGFSYWQpO1xuICAgIGNvbnN0IHN0ID0gTWF0aC5zaW4odGhldGFSYWQpOyAvLyBXZSBjYW4gdGhlbiBzb2x2ZSB0aGUgeSBiYXNpcyB2ZWN0b3Igc2ltdWx0YW5lb3VzbHkgdG8gZ2V0IHRoZSBvdGhlclxuICAgIC8vIHR3byBhZmZpbmUgcGFyYW1ldGVycyBkaXJlY3RseSBmcm9tIHRoZXNlIHBhcmFtZXRlcnNcblxuICAgIGNvbnN0IGxhbSA9IChhICogYyArIGIgKiBkKSAvIGRldGVybWluYW50O1xuICAgIGNvbnN0IHN5ID0gYyAqIHN4IC8gKGxhbSAqIGEgLSBiKSB8fCBkICogc3ggLyAobGFtICogYiArIGEpOyAvLyBVc2UgdGhlIHRyYW5zbGF0aW9uc1xuXG4gICAgY29uc3QgdHggPSBlIC0gY3ggKyBjeCAqIGN0ICogc3ggKyBjeSAqIChsYW0gKiBjdCAqIHN4IC0gc3QgKiBzeSk7XG4gICAgY29uc3QgdHkgPSBmIC0gY3kgKyBjeCAqIHN0ICogc3ggKyBjeSAqIChsYW0gKiBzdCAqIHN4ICsgY3QgKiBzeSk7IC8vIENvbnN0cnVjdCB0aGUgZGVjb21wb3NpdGlvbiBhbmQgcmV0dXJuIGl0XG5cbiAgICByZXR1cm4ge1xuICAgICAgLy8gUmV0dXJuIHRoZSBhZmZpbmUgcGFyYW1ldGVyc1xuICAgICAgc2NhbGVYOiBzeCxcbiAgICAgIHNjYWxlWTogc3ksXG4gICAgICBzaGVhcjogbGFtLFxuICAgICAgcm90YXRlOiB0aGV0YSxcbiAgICAgIHRyYW5zbGF0ZVg6IHR4LFxuICAgICAgdHJhbnNsYXRlWTogdHksXG4gICAgICBvcmlnaW5YOiBjeCxcbiAgICAgIG9yaWdpblk6IGN5LFxuICAgICAgLy8gUmV0dXJuIHRoZSBtYXRyaXggcGFyYW1ldGVyc1xuICAgICAgYTogdGhpcy5hLFxuICAgICAgYjogdGhpcy5iLFxuICAgICAgYzogdGhpcy5jLFxuICAgICAgZDogdGhpcy5kLFxuICAgICAgZTogdGhpcy5lLFxuICAgICAgZjogdGhpcy5mXG4gICAgfTtcbiAgfSAvLyBDaGVjayBpZiB0d28gbWF0cmljZXMgYXJlIGVxdWFsXG5cblxuICBlcXVhbHMob3RoZXIpIHtcbiAgICBpZiAob3RoZXIgPT09IHRoaXMpIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IGNvbXAgPSBuZXcgTWF0cml4KG90aGVyKTtcbiAgICByZXR1cm4gY2xvc2VFbm91Z2godGhpcy5hLCBjb21wLmEpICYmIGNsb3NlRW5vdWdoKHRoaXMuYiwgY29tcC5iKSAmJiBjbG9zZUVub3VnaCh0aGlzLmMsIGNvbXAuYykgJiYgY2xvc2VFbm91Z2godGhpcy5kLCBjb21wLmQpICYmIGNsb3NlRW5vdWdoKHRoaXMuZSwgY29tcC5lKSAmJiBjbG9zZUVub3VnaCh0aGlzLmYsIGNvbXAuZik7XG4gIH0gLy8gRmxpcCBtYXRyaXggb24geCBvciB5LCBhdCBhIGdpdmVuIG9mZnNldFxuXG5cbiAgZmxpcChheGlzLCBhcm91bmQpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmZsaXBPKGF4aXMsIGFyb3VuZCk7XG4gIH1cblxuICBmbGlwTyhheGlzLCBhcm91bmQpIHtcbiAgICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gdGhpcy5zY2FsZU8oLTEsIDEsIGFyb3VuZCwgMCkgOiBheGlzID09PSAneScgPyB0aGlzLnNjYWxlTygxLCAtMSwgMCwgYXJvdW5kKSA6IHRoaXMuc2NhbGVPKC0xLCAtMSwgYXhpcywgYXJvdW5kIHx8IGF4aXMpOyAvLyBEZWZpbmUgYW4geCwgeSBmbGlwIHBvaW50XG4gIH0gLy8gSW5pdGlhbGl6ZVxuXG5cbiAgaW5pdChzb3VyY2UpIHtcbiAgICBjb25zdCBiYXNlID0gTWF0cml4LmZyb21BcnJheShbMSwgMCwgMCwgMSwgMCwgMF0pOyAvLyBlbnN1cmUgc291cmNlIGFzIG9iamVjdFxuXG4gICAgc291cmNlID0gc291cmNlIGluc3RhbmNlb2YgRWxlbWVudCA/IHNvdXJjZS5tYXRyaXhpZnkoKSA6IHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnID8gTWF0cml4LmZyb21BcnJheShzb3VyY2Uuc3BsaXQoZGVsaW1pdGVyKS5tYXAocGFyc2VGbG9hdCkpIDogQXJyYXkuaXNBcnJheShzb3VyY2UpID8gTWF0cml4LmZyb21BcnJheShzb3VyY2UpIDogdHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcgJiYgTWF0cml4LmlzTWF0cml4TGlrZShzb3VyY2UpID8gc291cmNlIDogdHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcgPyBuZXcgTWF0cml4KCkudHJhbnNmb3JtKHNvdXJjZSkgOiBhcmd1bWVudHMubGVuZ3RoID09PSA2ID8gTWF0cml4LmZyb21BcnJheShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpIDogYmFzZTsgLy8gTWVyZ2UgdGhlIHNvdXJjZSBtYXRyaXggd2l0aCB0aGUgYmFzZSBtYXRyaXhcblxuICAgIHRoaXMuYSA9IHNvdXJjZS5hICE9IG51bGwgPyBzb3VyY2UuYSA6IGJhc2UuYTtcbiAgICB0aGlzLmIgPSBzb3VyY2UuYiAhPSBudWxsID8gc291cmNlLmIgOiBiYXNlLmI7XG4gICAgdGhpcy5jID0gc291cmNlLmMgIT0gbnVsbCA/IHNvdXJjZS5jIDogYmFzZS5jO1xuICAgIHRoaXMuZCA9IHNvdXJjZS5kICE9IG51bGwgPyBzb3VyY2UuZCA6IGJhc2UuZDtcbiAgICB0aGlzLmUgPSBzb3VyY2UuZSAhPSBudWxsID8gc291cmNlLmUgOiBiYXNlLmU7XG4gICAgdGhpcy5mID0gc291cmNlLmYgIT0gbnVsbCA/IHNvdXJjZS5mIDogYmFzZS5mO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaW52ZXJzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmludmVyc2VPKCk7XG4gIH0gLy8gSW52ZXJzZXMgbWF0cml4XG5cblxuICBpbnZlcnNlTygpIHtcbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgcGFyYW1ldGVycyBvdXQgb2YgdGhlIG1hdHJpeFxuICAgIGNvbnN0IGEgPSB0aGlzLmE7XG4gICAgY29uc3QgYiA9IHRoaXMuYjtcbiAgICBjb25zdCBjID0gdGhpcy5jO1xuICAgIGNvbnN0IGQgPSB0aGlzLmQ7XG4gICAgY29uc3QgZSA9IHRoaXMuZTtcbiAgICBjb25zdCBmID0gdGhpcy5mOyAvLyBJbnZlcnQgdGhlIDJ4MiBtYXRyaXggaW4gdGhlIHRvcCBsZWZ0XG5cbiAgICBjb25zdCBkZXQgPSBhICogZCAtIGIgKiBjO1xuICAgIGlmICghZGV0KSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBpbnZlcnQgJyArIHRoaXMpOyAvLyBDYWxjdWxhdGUgdGhlIHRvcCAyeDIgbWF0cml4XG5cbiAgICBjb25zdCBuYSA9IGQgLyBkZXQ7XG4gICAgY29uc3QgbmIgPSAtYiAvIGRldDtcbiAgICBjb25zdCBuYyA9IC1jIC8gZGV0O1xuICAgIGNvbnN0IG5kID0gYSAvIGRldDsgLy8gQXBwbHkgdGhlIGludmVydGVkIG1hdHJpeCB0byB0aGUgdG9wIHJpZ2h0XG5cbiAgICBjb25zdCBuZSA9IC0obmEgKiBlICsgbmMgKiBmKTtcbiAgICBjb25zdCBuZiA9IC0obmIgKiBlICsgbmQgKiBmKTsgLy8gQ29uc3RydWN0IHRoZSBpbnZlcnRlZCBtYXRyaXhcblxuICAgIHRoaXMuYSA9IG5hO1xuICAgIHRoaXMuYiA9IG5iO1xuICAgIHRoaXMuYyA9IG5jO1xuICAgIHRoaXMuZCA9IG5kO1xuICAgIHRoaXMuZSA9IG5lO1xuICAgIHRoaXMuZiA9IG5mO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG11bHRpcGx5KG1hdHJpeCkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkubG11bHRpcGx5TyhtYXRyaXgpO1xuICB9XG5cbiAgbG11bHRpcGx5TyhtYXRyaXgpIHtcbiAgICBjb25zdCByID0gdGhpcztcbiAgICBjb25zdCBsID0gbWF0cml4IGluc3RhbmNlb2YgTWF0cml4ID8gbWF0cml4IDogbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBNYXRyaXgubWF0cml4TXVsdGlwbHkobCwgciwgdGhpcyk7XG4gIH0gLy8gTGVmdCBtdWx0aXBsaWVzIGJ5IHRoZSBnaXZlbiBtYXRyaXhcblxuXG4gIG11bHRpcGx5KG1hdHJpeCkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkubXVsdGlwbHlPKG1hdHJpeCk7XG4gIH1cblxuICBtdWx0aXBseU8obWF0cml4KSB7XG4gICAgLy8gR2V0IHRoZSBtYXRyaWNlc1xuICAgIGNvbnN0IGwgPSB0aGlzO1xuICAgIGNvbnN0IHIgPSBtYXRyaXggaW5zdGFuY2VvZiBNYXRyaXggPyBtYXRyaXggOiBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIE1hdHJpeC5tYXRyaXhNdWx0aXBseShsLCByLCB0aGlzKTtcbiAgfSAvLyBSb3RhdGUgbWF0cml4XG5cblxuICByb3RhdGUociwgY3gsIGN5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5yb3RhdGVPKHIsIGN4LCBjeSk7XG4gIH1cblxuICByb3RhdGVPKHIsIGN4ID0gMCwgY3kgPSAwKSB7XG4gICAgLy8gQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICByID0gcmFkaWFucyhyKTtcbiAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyKTtcbiAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyKTtcbiAgICBjb25zdCB7XG4gICAgICBhLFxuICAgICAgYixcbiAgICAgIGMsXG4gICAgICBkLFxuICAgICAgZSxcbiAgICAgIGZcbiAgICB9ID0gdGhpcztcbiAgICB0aGlzLmEgPSBhICogY29zIC0gYiAqIHNpbjtcbiAgICB0aGlzLmIgPSBiICogY29zICsgYSAqIHNpbjtcbiAgICB0aGlzLmMgPSBjICogY29zIC0gZCAqIHNpbjtcbiAgICB0aGlzLmQgPSBkICogY29zICsgYyAqIHNpbjtcbiAgICB0aGlzLmUgPSBlICogY29zIC0gZiAqIHNpbiArIGN5ICogc2luIC0gY3ggKiBjb3MgKyBjeDtcbiAgICB0aGlzLmYgPSBmICogY29zICsgZSAqIHNpbiAtIGN4ICogc2luIC0gY3kgKiBjb3MgKyBjeTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBTY2FsZSBtYXRyaXhcblxuXG4gIHNjYWxlKHgsIHksIGN4LCBjeSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuc2NhbGVPKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICBzY2FsZU8oeCwgeSA9IHgsIGN4ID0gMCwgY3kgPSAwKSB7XG4gICAgLy8gU3VwcG9ydCB1bmlmb3JtIHNjYWxpbmdcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgY3kgPSBjeDtcbiAgICAgIGN4ID0geTtcbiAgICAgIHkgPSB4O1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIGEsXG4gICAgICBiLFxuICAgICAgYyxcbiAgICAgIGQsXG4gICAgICBlLFxuICAgICAgZlxuICAgIH0gPSB0aGlzO1xuICAgIHRoaXMuYSA9IGEgKiB4O1xuICAgIHRoaXMuYiA9IGIgKiB5O1xuICAgIHRoaXMuYyA9IGMgKiB4O1xuICAgIHRoaXMuZCA9IGQgKiB5O1xuICAgIHRoaXMuZSA9IGUgKiB4IC0gY3ggKiB4ICsgY3g7XG4gICAgdGhpcy5mID0gZiAqIHkgLSBjeSAqIHkgKyBjeTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBTaGVhciBtYXRyaXhcblxuXG4gIHNoZWFyKGEsIGN4LCBjeSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuc2hlYXJPKGEsIGN4LCBjeSk7XG4gIH1cblxuICBzaGVhck8obHgsIGN4ID0gMCwgY3kgPSAwKSB7XG4gICAgY29uc3Qge1xuICAgICAgYSxcbiAgICAgIGIsXG4gICAgICBjLFxuICAgICAgZCxcbiAgICAgIGUsXG4gICAgICBmXG4gICAgfSA9IHRoaXM7XG4gICAgdGhpcy5hID0gYSArIGIgKiBseDtcbiAgICB0aGlzLmMgPSBjICsgZCAqIGx4O1xuICAgIHRoaXMuZSA9IGUgKyBmICogbHggLSBjeSAqIGx4O1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFNrZXcgTWF0cml4XG5cblxuICBza2V3KHgsIHksIGN4LCBjeSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuc2tld08oLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNrZXdPKHgsIHkgPSB4LCBjeCA9IDAsIGN5ID0gMCkge1xuICAgIC8vIHN1cHBvcnQgdW5pZm9ybWFsIHNrZXdcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgY3kgPSBjeDtcbiAgICAgIGN4ID0geTtcbiAgICAgIHkgPSB4O1xuICAgIH0gLy8gQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcblxuXG4gICAgeCA9IHJhZGlhbnMoeCk7XG4gICAgeSA9IHJhZGlhbnMoeSk7XG4gICAgY29uc3QgbHggPSBNYXRoLnRhbih4KTtcbiAgICBjb25zdCBseSA9IE1hdGgudGFuKHkpO1xuICAgIGNvbnN0IHtcbiAgICAgIGEsXG4gICAgICBiLFxuICAgICAgYyxcbiAgICAgIGQsXG4gICAgICBlLFxuICAgICAgZlxuICAgIH0gPSB0aGlzO1xuICAgIHRoaXMuYSA9IGEgKyBiICogbHg7XG4gICAgdGhpcy5iID0gYiArIGEgKiBseTtcbiAgICB0aGlzLmMgPSBjICsgZCAqIGx4O1xuICAgIHRoaXMuZCA9IGQgKyBjICogbHk7XG4gICAgdGhpcy5lID0gZSArIGYgKiBseCAtIGN5ICogbHg7XG4gICAgdGhpcy5mID0gZiArIGUgKiBseSAtIGN4ICogbHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gU2tld1hcblxuXG4gIHNrZXdYKHgsIGN4LCBjeSkge1xuICAgIHJldHVybiB0aGlzLnNrZXcoeCwgMCwgY3gsIGN5KTtcbiAgfSAvLyBTa2V3WVxuXG5cbiAgc2tld1koeSwgY3gsIGN5KSB7XG4gICAgcmV0dXJuIHRoaXMuc2tldygwLCB5LCBjeCwgY3kpO1xuICB9XG5cbiAgdG9BcnJheSgpIHtcbiAgICByZXR1cm4gW3RoaXMuYSwgdGhpcy5iLCB0aGlzLmMsIHRoaXMuZCwgdGhpcy5lLCB0aGlzLmZdO1xuICB9IC8vIENvbnZlcnQgbWF0cml4IHRvIHN0cmluZ1xuXG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICdtYXRyaXgoJyArIHRoaXMuYSArICcsJyArIHRoaXMuYiArICcsJyArIHRoaXMuYyArICcsJyArIHRoaXMuZCArICcsJyArIHRoaXMuZSArICcsJyArIHRoaXMuZiArICcpJztcbiAgfSAvLyBUcmFuc2Zvcm0gYSBtYXRyaXggaW50byBhbm90aGVyIG1hdHJpeCBieSBtYW5pcHVsYXRpbmcgdGhlIHNwYWNlXG5cblxuICB0cmFuc2Zvcm0obykge1xuICAgIC8vIENoZWNrIGlmIG8gaXMgYSBtYXRyaXggYW5kIHRoZW4gbGVmdCBtdWx0aXBseSBpdCBkaXJlY3RseVxuICAgIGlmIChNYXRyaXguaXNNYXRyaXhMaWtlKG8pKSB7XG4gICAgICBjb25zdCBtYXRyaXggPSBuZXcgTWF0cml4KG8pO1xuICAgICAgcmV0dXJuIG1hdHJpeC5tdWx0aXBseU8odGhpcyk7XG4gICAgfSAvLyBHZXQgdGhlIHByb3Bvc2VkIHRyYW5zZm9ybWF0aW9ucyBhbmQgdGhlIGN1cnJlbnQgdHJhbnNmb3JtYXRpb25zXG5cblxuICAgIGNvbnN0IHQgPSBNYXRyaXguZm9ybWF0VHJhbnNmb3JtcyhvKTtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICB4OiBveCxcbiAgICAgIHk6IG95XG4gICAgfSA9IG5ldyBQb2ludCh0Lm94LCB0Lm95KS50cmFuc2Zvcm0oY3VycmVudCk7IC8vIENvbnN0cnVjdCB0aGUgcmVzdWx0aW5nIG1hdHJpeFxuXG4gICAgY29uc3QgdHJhbnNmb3JtZXIgPSBuZXcgTWF0cml4KCkudHJhbnNsYXRlTyh0LnJ4LCB0LnJ5KS5sbXVsdGlwbHlPKGN1cnJlbnQpLnRyYW5zbGF0ZU8oLW94LCAtb3kpLnNjYWxlTyh0LnNjYWxlWCwgdC5zY2FsZVkpLnNrZXdPKHQuc2tld1gsIHQuc2tld1kpLnNoZWFyTyh0LnNoZWFyKS5yb3RhdGVPKHQudGhldGEpLnRyYW5zbGF0ZU8ob3gsIG95KTsgLy8gSWYgd2Ugd2FudCB0aGUgb3JpZ2luIGF0IGEgcGFydGljdWxhciBwbGFjZSwgd2UgZm9yY2UgaXQgdGhlcmVcblxuICAgIGlmIChpc0Zpbml0ZSh0LnB4KSB8fCBpc0Zpbml0ZSh0LnB5KSkge1xuICAgICAgY29uc3Qgb3JpZ2luID0gbmV3IFBvaW50KG94LCBveSkudHJhbnNmb3JtKHRyYW5zZm9ybWVyKTsgLy8gVE9ETzogUmVwbGFjZSB0LnB4IHdpdGggaXNGaW5pdGUodC5weClcbiAgICAgIC8vIERvZXNudCB3b3JrIGJlY2F1c2UgdC5weCBpcyBhbHNvIDAgaWYgaXQgd2FzbnQgcGFzc2VkXG5cbiAgICAgIGNvbnN0IGR4ID0gaXNGaW5pdGUodC5weCkgPyB0LnB4IC0gb3JpZ2luLnggOiAwO1xuICAgICAgY29uc3QgZHkgPSBpc0Zpbml0ZSh0LnB5KSA/IHQucHkgLSBvcmlnaW4ueSA6IDA7XG4gICAgICB0cmFuc2Zvcm1lci50cmFuc2xhdGVPKGR4LCBkeSk7XG4gICAgfSAvLyBUcmFuc2xhdGUgbm93IGFmdGVyIHBvc2l0aW9uaW5nXG5cblxuICAgIHRyYW5zZm9ybWVyLnRyYW5zbGF0ZU8odC50eCwgdC50eSk7XG4gICAgcmV0dXJuIHRyYW5zZm9ybWVyO1xuICB9IC8vIFRyYW5zbGF0ZSBtYXRyaXhcblxuXG4gIHRyYW5zbGF0ZSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS50cmFuc2xhdGVPKHgsIHkpO1xuICB9XG5cbiAgdHJhbnNsYXRlTyh4LCB5KSB7XG4gICAgdGhpcy5lICs9IHggfHwgMDtcbiAgICB0aGlzLmYgKz0geSB8fCAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFsdWVPZigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYTogdGhpcy5hLFxuICAgICAgYjogdGhpcy5iLFxuICAgICAgYzogdGhpcy5jLFxuICAgICAgZDogdGhpcy5kLFxuICAgICAgZTogdGhpcy5lLFxuICAgICAgZjogdGhpcy5mXG4gICAgfTtcbiAgfVxuXG59XG5mdW5jdGlvbiBjdG0oKSB7XG4gIHJldHVybiBuZXcgTWF0cml4KHRoaXMubm9kZS5nZXRDVE0oKSk7XG59XG5mdW5jdGlvbiBzY3JlZW5DVE0oKSB7XG4gIC8qIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzNDQ1MzdcclxuICAgICBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIEZGIGRvZXMgbm90IHJldHVybiB0aGUgdHJhbnNmb3JtYXRpb24gbWF0cml4XHJcbiAgICAgZm9yIHRoZSBpbm5lciBjb29yZGluYXRlIHN5c3RlbSB3aGVuIGdldFNjcmVlbkNUTSgpIGlzIGNhbGxlZCBvbiBuZXN0ZWQgc3Zncy5cclxuICAgICBIb3dldmVyIGFsbCBvdGhlciBCcm93c2VycyBkbyB0aGF0ICovXG4gIGlmICh0eXBlb2YgdGhpcy5pc1Jvb3QgPT09ICdmdW5jdGlvbicgJiYgIXRoaXMuaXNSb290KCkpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5yZWN0KDEsIDEpO1xuICAgIGNvbnN0IG0gPSByZWN0Lm5vZGUuZ2V0U2NyZWVuQ1RNKCk7XG4gICAgcmVjdC5yZW1vdmUoKTtcbiAgICByZXR1cm4gbmV3IE1hdHJpeChtKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgTWF0cml4KHRoaXMubm9kZS5nZXRTY3JlZW5DVE0oKSk7XG59XG5yZWdpc3RlcihNYXRyaXgsICdNYXRyaXgnKTtcblxuZnVuY3Rpb24gcGFyc2VyKCkge1xuICAvLyBSZXVzZSBjYWNoZWQgZWxlbWVudCBpZiBwb3NzaWJsZVxuICBpZiAoIXBhcnNlci5ub2Rlcykge1xuICAgIGNvbnN0IHN2ZyA9IG1ha2VJbnN0YW5jZSgpLnNpemUoMiwgMCk7XG4gICAgc3ZnLm5vZGUuc3R5bGUuY3NzVGV4dCA9IFsnb3BhY2l0eTogMCcsICdwb3NpdGlvbjogYWJzb2x1dGUnLCAnbGVmdDogLTEwMCUnLCAndG9wOiAtMTAwJScsICdvdmVyZmxvdzogaGlkZGVuJ10uam9pbignOycpO1xuICAgIHN2Zy5hdHRyKCdmb2N1c2FibGUnLCAnZmFsc2UnKTtcbiAgICBzdmcuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGNvbnN0IHBhdGggPSBzdmcucGF0aCgpLm5vZGU7XG4gICAgcGFyc2VyLm5vZGVzID0ge1xuICAgICAgc3ZnLFxuICAgICAgcGF0aFxuICAgIH07XG4gIH1cblxuICBpZiAoIXBhcnNlci5ub2Rlcy5zdmcubm9kZS5wYXJlbnROb2RlKSB7XG4gICAgY29uc3QgYiA9IGdsb2JhbHMuZG9jdW1lbnQuYm9keSB8fCBnbG9iYWxzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBwYXJzZXIubm9kZXMuc3ZnLmFkZFRvKGIpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlci5ub2Rlcztcbn1cblxuZnVuY3Rpb24gaXNOdWxsZWRCb3goYm94KSB7XG4gIHJldHVybiAhYm94LndpZHRoICYmICFib3guaGVpZ2h0ICYmICFib3gueCAmJiAhYm94Lnk7XG59XG5mdW5jdGlvbiBkb21Db250YWlucyhub2RlKSB7XG4gIHJldHVybiBub2RlID09PSBnbG9iYWxzLmRvY3VtZW50IHx8IChnbG9iYWxzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyB8fCBmdW5jdGlvbiAobm9kZSkge1xuICAgIC8vIFRoaXMgaXMgSUUgLSBpdCBkb2VzIG5vdCBzdXBwb3J0IGNvbnRhaW5zKCkgZm9yIHRvcC1sZXZlbCBTVkdzXG4gICAgd2hpbGUgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZSA9PT0gZ2xvYmFscy5kb2N1bWVudDtcbiAgfSkuY2FsbChnbG9iYWxzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgbm9kZSk7XG59XG5jbGFzcyBCb3gge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgdGhpcy5pbml0KC4uLmFyZ3MpO1xuICB9XG5cbiAgYWRkT2Zmc2V0KCkge1xuICAgIC8vIG9mZnNldCBieSB3aW5kb3cgc2Nyb2xsIHBvc2l0aW9uLCBiZWNhdXNlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBjaGFuZ2VzIHdoZW4gd2luZG93IGlzIHNjcm9sbGVkXG4gICAgdGhpcy54ICs9IGdsb2JhbHMud2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgIHRoaXMueSArPSBnbG9iYWxzLndpbmRvdy5wYWdlWU9mZnNldDtcbiAgICByZXR1cm4gbmV3IEJveCh0aGlzKTtcbiAgfVxuXG4gIGluaXQoc291cmNlKSB7XG4gICAgY29uc3QgYmFzZSA9IFswLCAwLCAwLCAwXTtcbiAgICBzb3VyY2UgPSB0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyA/IHNvdXJjZS5zcGxpdChkZWxpbWl0ZXIpLm1hcChwYXJzZUZsb2F0KSA6IEFycmF5LmlzQXJyYXkoc291cmNlKSA/IHNvdXJjZSA6IHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnID8gW3NvdXJjZS5sZWZ0ICE9IG51bGwgPyBzb3VyY2UubGVmdCA6IHNvdXJjZS54LCBzb3VyY2UudG9wICE9IG51bGwgPyBzb3VyY2UudG9wIDogc291cmNlLnksIHNvdXJjZS53aWR0aCwgc291cmNlLmhlaWdodF0gOiBhcmd1bWVudHMubGVuZ3RoID09PSA0ID8gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpIDogYmFzZTtcbiAgICB0aGlzLnggPSBzb3VyY2VbMF0gfHwgMDtcbiAgICB0aGlzLnkgPSBzb3VyY2VbMV0gfHwgMDtcbiAgICB0aGlzLndpZHRoID0gdGhpcy53ID0gc291cmNlWzJdIHx8IDA7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmggPSBzb3VyY2VbM10gfHwgMDsgLy8gQWRkIG1vcmUgYm91bmRpbmcgYm94IHByb3BlcnRpZXNcblxuICAgIHRoaXMueDIgPSB0aGlzLnggKyB0aGlzLnc7XG4gICAgdGhpcy55MiA9IHRoaXMueSArIHRoaXMuaDtcbiAgICB0aGlzLmN4ID0gdGhpcy54ICsgdGhpcy53IC8gMjtcbiAgICB0aGlzLmN5ID0gdGhpcy55ICsgdGhpcy5oIC8gMjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlzTnVsbGVkKCkge1xuICAgIHJldHVybiBpc051bGxlZEJveCh0aGlzKTtcbiAgfSAvLyBNZXJnZSByZWN0IGJveCB3aXRoIGFub3RoZXIsIHJldHVybiBhIG5ldyBpbnN0YW5jZVxuXG5cbiAgbWVyZ2UoYm94KSB7XG4gICAgY29uc3QgeCA9IE1hdGgubWluKHRoaXMueCwgYm94LngpO1xuICAgIGNvbnN0IHkgPSBNYXRoLm1pbih0aGlzLnksIGJveC55KTtcbiAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KHRoaXMueCArIHRoaXMud2lkdGgsIGJveC54ICsgYm94LndpZHRoKSAtIHg7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy55ICsgdGhpcy5oZWlnaHQsIGJveC55ICsgYm94LmhlaWdodCkgLSB5O1xuICAgIHJldHVybiBuZXcgQm94KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgdG9BcnJheSgpIHtcbiAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodF07XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy54ICsgJyAnICsgdGhpcy55ICsgJyAnICsgdGhpcy53aWR0aCArICcgJyArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgdHJhbnNmb3JtKG0pIHtcbiAgICBpZiAoIShtIGluc3RhbmNlb2YgTWF0cml4KSkge1xuICAgICAgbSA9IG5ldyBNYXRyaXgobSk7XG4gICAgfVxuXG4gICAgbGV0IHhNaW4gPSBJbmZpbml0eTtcbiAgICBsZXQgeE1heCA9IC1JbmZpbml0eTtcbiAgICBsZXQgeU1pbiA9IEluZmluaXR5O1xuICAgIGxldCB5TWF4ID0gLUluZmluaXR5O1xuICAgIGNvbnN0IHB0cyA9IFtuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpLCBuZXcgUG9pbnQodGhpcy54MiwgdGhpcy55KSwgbmV3IFBvaW50KHRoaXMueCwgdGhpcy55MiksIG5ldyBQb2ludCh0aGlzLngyLCB0aGlzLnkyKV07XG4gICAgcHRzLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgIHAgPSBwLnRyYW5zZm9ybShtKTtcbiAgICAgIHhNaW4gPSBNYXRoLm1pbih4TWluLCBwLngpO1xuICAgICAgeE1heCA9IE1hdGgubWF4KHhNYXgsIHAueCk7XG4gICAgICB5TWluID0gTWF0aC5taW4oeU1pbiwgcC55KTtcbiAgICAgIHlNYXggPSBNYXRoLm1heCh5TWF4LCBwLnkpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgQm94KHhNaW4sIHlNaW4sIHhNYXggLSB4TWluLCB5TWF4IC0geU1pbik7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBnZXRCb3goZWwsIGdldEJCb3hGbiwgcmV0cnkpIHtcbiAgbGV0IGJveDtcblxuICB0cnkge1xuICAgIC8vIFRyeSB0byBnZXQgdGhlIGJveCB3aXRoIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICAgIGJveCA9IGdldEJCb3hGbihlbC5ub2RlKTsgLy8gSWYgdGhlIGJveCBpcyB3b3J0aGxlc3MgYW5kIG5vdCBldmVuIGluIHRoZSBkb20sIHJldHJ5XG4gICAgLy8gYnkgdGhyb3dpbmcgYW4gZXJyb3IgaGVyZS4uLlxuXG4gICAgaWYgKGlzTnVsbGVkQm94KGJveCkgJiYgIWRvbUNvbnRhaW5zKGVsLm5vZGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgbm90IGluIHRoZSBkb20nKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyAuLi4gYW5kIGNhbGxpbmcgdGhlIHJldHJ5IGhhbmRsZXIgaGVyZVxuICAgIGJveCA9IHJldHJ5KGVsKTtcbiAgfVxuXG4gIHJldHVybiBib3g7XG59XG5cbmZ1bmN0aW9uIGJib3goKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIGdldCBiYm94IGlzIGdldEJCb3goKVxuICBjb25zdCBnZXRCQm94ID0gbm9kZSA9PiBub2RlLmdldEJCb3goKTsgLy8gVGFrZSBhbGwgbWVhc3VyZXMgc28gdGhhdCBhIHN0dXBpZCBicm93c2VyIHJlbmRlcnMgdGhlIGVsZW1lbnRcbiAgLy8gc28gd2UgY2FuIGdldCB0aGUgYmJveCBmcm9tIGl0IHdoZW4gd2UgdHJ5IGFnYWluXG5cblxuICBjb25zdCByZXRyeSA9IGVsID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2xvbmUgPSBlbC5jbG9uZSgpLmFkZFRvKHBhcnNlcigpLnN2Zykuc2hvdygpO1xuICAgICAgY29uc3QgYm94ID0gY2xvbmUubm9kZS5nZXRCQm94KCk7XG4gICAgICBjbG9uZS5yZW1vdmUoKTtcbiAgICAgIHJldHVybiBib3g7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gV2UgZ2l2ZSB1cC4uLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBHZXR0aW5nIGJib3ggb2YgZWxlbWVudCBcIiR7ZWwubm9kZS5ub2RlTmFtZX1cIiBpcyBub3QgcG9zc2libGU6ICR7ZS50b1N0cmluZygpfWApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBib3ggPSBnZXRCb3godGhpcywgZ2V0QkJveCwgcmV0cnkpO1xuICBjb25zdCBiYm94ID0gbmV3IEJveChib3gpO1xuICByZXR1cm4gYmJveDtcbn1cbmZ1bmN0aW9uIHJib3goZWwpIHtcbiAgY29uc3QgZ2V0UkJveCA9IG5vZGUgPT4gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBjb25zdCByZXRyeSA9IGVsID0+IHtcbiAgICAvLyBUaGVyZSBpcyBubyBwb2ludCBpbiB0cnlpbmcgdHJpY2tzIGhlcmUgYmVjYXVzZSBpZiB3ZSBpbnNlcnQgdGhlIGVsZW1lbnQgaW50byB0aGUgZG9tIG91cnNlbHZlc1xuICAgIC8vIGl0IG9idmlvdXNseSB3aWxsIGJlIGF0IHRoZSB3cm9uZyBwb3NpdGlvblxuICAgIHRocm93IG5ldyBFcnJvcihgR2V0dGluZyByYm94IG9mIGVsZW1lbnQgXCIke2VsLm5vZGUubm9kZU5hbWV9XCIgaXMgbm90IHBvc3NpYmxlYCk7XG4gIH07XG5cbiAgY29uc3QgYm94ID0gZ2V0Qm94KHRoaXMsIGdldFJCb3gsIHJldHJ5KTtcbiAgY29uc3QgcmJveCA9IG5ldyBCb3goYm94KTsgLy8gSWYgYW4gZWxlbWVudCB3YXMgcGFzc2VkLCB3ZSB3YW50IHRoZSBiYm94IGluIHRoZSBjb29yZGluYXRlIHN5c3RlbSBvZiB0aGF0IGVsZW1lbnRcblxuICBpZiAoZWwpIHtcbiAgICByZXR1cm4gcmJveC50cmFuc2Zvcm0oZWwuc2NyZWVuQ1RNKCkuaW52ZXJzZU8oKSk7XG4gIH0gLy8gRWxzZSB3ZSB3YW50IGl0IGluIGFic29sdXRlIHNjcmVlbiBjb29yZGluYXRlc1xuICAvLyBUaGVyZWZvcmUgd2UgbmVlZCB0byBhZGQgdGhlIHNjcm9sbE9mZnNldFxuXG5cbiAgcmV0dXJuIHJib3guYWRkT2Zmc2V0KCk7XG59IC8vIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBwb2ludCBpcyBpbnNpZGUgdGhlIGJvdW5kaW5nIGJveFxuXG5mdW5jdGlvbiBpbnNpZGUoeCwgeSkge1xuICBjb25zdCBib3ggPSB0aGlzLmJib3goKTtcbiAgcmV0dXJuIHggPiBib3gueCAmJiB5ID4gYm94LnkgJiYgeCA8IGJveC54ICsgYm94LndpZHRoICYmIHkgPCBib3gueSArIGJveC5oZWlnaHQ7XG59XG5yZWdpc3Rlck1ldGhvZHMoe1xuICB2aWV3Ym94OiB7XG4gICAgdmlld2JveCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAvLyBhY3QgYXMgZ2V0dGVyXG4gICAgICBpZiAoeCA9PSBudWxsKSByZXR1cm4gbmV3IEJveCh0aGlzLmF0dHIoJ3ZpZXdCb3gnKSk7IC8vIGFjdCBhcyBzZXR0ZXJcblxuICAgICAgcmV0dXJuIHRoaXMuYXR0cigndmlld0JveCcsIG5ldyBCb3goeCwgeSwgd2lkdGgsIGhlaWdodCkpO1xuICAgIH0sXG5cbiAgICB6b29tKGxldmVsLCBwb2ludCkge1xuICAgICAgLy8gSXRzIGJlc3QgdG8gcmVseSBvbiB0aGUgYXR0cmlidXRlcyBoZXJlIGFuZCBoZXJlIGlzIHdoeTpcbiAgICAgIC8vIGNsaWVudFhZWjogRG9lc24ndCB3b3JrIG9uIG5vbi1yb290IHN2Z3MgYmVjYXVzZSB0aGV5IGRvbnQgaGF2ZSBhIENTU0JveCAoc2lsbHkhKVxuICAgICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiBEb2Vzbid0IHdvcmsgYmVjYXVzZSBDaHJvbWUganVzdCBpZ25vcmVzIHdpZHRoIGFuZCBoZWlnaHQgb2YgbmVzdGVkIHN2Z3MgY29tcGxldGVseVxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICB0aGF0IG1lYW5zLCB0aGVpciBjbGllbnRSZWN0IGlzIGFsd2F5cyBhcyBiaWcgYXMgdGhlIGNvbnRlbnQuXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIEZ1cnRoZXJtb3JlIHRoaXMgc2l6ZSBpcyBpbmNvcnJlY3QgaWYgdGhlIGVsZW1lbnQgaXMgZnVydGhlciB0cmFuc2Zvcm1lZCBieSBpdHMgcGFyZW50c1xuICAgICAgLy8gY29tcHV0ZWRTdHlsZTogT25seSByZXR1cm5zIG1lYW5pbmdmdWwgdmFsdWVzIGlmIGNzcyB3YXMgdXNlZCB3aXRoIHB4LiBXZSBkb250IGdvIHRoaXMgcm91dGUgaGVyZSFcbiAgICAgIC8vIGdldEJCb3g6IHJldHVybnMgdGhlIGJvdW5kaW5nIGJveCBvZiBpdHMgY29udGVudCAtIHRoYXQgZG9lc250IGhlbHAhXG4gICAgICBsZXQge1xuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgICB9ID0gdGhpcy5hdHRyKFsnd2lkdGgnLCAnaGVpZ2h0J10pOyAvLyBXaWR0aCBhbmQgaGVpZ2h0IGlzIGEgc3RyaW5nIHdoZW4gYSBudW1iZXIgd2l0aCBhIHVuaXQgaXMgcHJlc2VudCB3aGljaCB3ZSBjYW4ndCB1c2VcbiAgICAgIC8vIFNvIHdlIHRyeSBjbGllbnRYWVpcblxuICAgICAgaWYgKCF3aWR0aCAmJiAhaGVpZ2h0IHx8IHR5cGVvZiB3aWR0aCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGhlaWdodCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgd2lkdGggPSB0aGlzLm5vZGUuY2xpZW50V2lkdGg7XG4gICAgICAgIGhlaWdodCA9IHRoaXMubm9kZS5jbGllbnRIZWlnaHQ7XG4gICAgICB9IC8vIEdpdmluZyB1cC4uLlxuXG5cbiAgICAgIGlmICghd2lkdGggfHwgIWhlaWdodCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ltcG9zc2libGUgdG8gZ2V0IGFic29sdXRlIHdpZHRoIGFuZCBoZWlnaHQuIFBsZWFzZSBwcm92aWRlIGFuIGFic29sdXRlIHdpZHRoIGFuZCBoZWlnaHQgYXR0cmlidXRlIG9uIHRoZSB6b29taW5nIGVsZW1lbnQnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdiA9IHRoaXMudmlld2JveCgpO1xuICAgICAgY29uc3Qgem9vbVggPSB3aWR0aCAvIHYud2lkdGg7XG4gICAgICBjb25zdCB6b29tWSA9IGhlaWdodCAvIHYuaGVpZ2h0O1xuICAgICAgY29uc3Qgem9vbSA9IE1hdGgubWluKHpvb21YLCB6b29tWSk7XG5cbiAgICAgIGlmIChsZXZlbCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB6b29tO1xuICAgICAgfVxuXG4gICAgICBsZXQgem9vbUFtb3VudCA9IHpvb20gLyBsZXZlbDsgLy8gU2V0IHRoZSB6b29tQW1vdW50IHRvIHRoZSBoaWdoZXN0IHZhbHVlIHdoaWNoIGlzIHNhZmUgdG8gcHJvY2VzcyBhbmQgcmVjb3ZlciBmcm9tXG4gICAgICAvLyBUaGUgKiAxMDAgaXMgYSBiaXQgb2Ygd2lnZ2xlIHJvb20gZm9yIHRoZSBtYXRyaXggdHJhbnNmb3JtYXRpb25cblxuICAgICAgaWYgKHpvb21BbW91bnQgPT09IEluZmluaXR5KSB6b29tQW1vdW50ID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLyAxMDA7XG4gICAgICBwb2ludCA9IHBvaW50IHx8IG5ldyBQb2ludCh3aWR0aCAvIDIgLyB6b29tWCArIHYueCwgaGVpZ2h0IC8gMiAvIHpvb21ZICsgdi55KTtcbiAgICAgIGNvbnN0IGJveCA9IG5ldyBCb3godikudHJhbnNmb3JtKG5ldyBNYXRyaXgoe1xuICAgICAgICBzY2FsZTogem9vbUFtb3VudCxcbiAgICAgICAgb3JpZ2luOiBwb2ludFxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIHRoaXMudmlld2JveChib3gpO1xuICAgIH1cblxuICB9XG59KTtcbnJlZ2lzdGVyKEJveCwgJ0JveCcpO1xuXG5jbGFzcyBMaXN0IGV4dGVuZHMgQXJyYXkge1xuICBjb25zdHJ1Y3RvcihhcnIgPSBbXSwgLi4uYXJncykge1xuICAgIHN1cGVyKGFyciwgLi4uYXJncyk7XG4gICAgaWYgKHR5cGVvZiBhcnIgPT09ICdudW1iZXInKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5wdXNoKC4uLmFycik7XG4gIH1cblxufVxuZXh0ZW5kKFtMaXN0XSwge1xuICBlYWNoKGZuT3JNZXRob2ROYW1lLCAuLi5hcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBmbk9yTWV0aG9kTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRoaXMubWFwKChlbCwgaSwgYXJyKSA9PiB7XG4gICAgICAgIHJldHVybiBmbk9yTWV0aG9kTmFtZS5jYWxsKGVsLCBlbCwgaSwgYXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoZWwgPT4ge1xuICAgICAgICByZXR1cm4gZWxbZm5Pck1ldGhvZE5hbWVdKC4uLmFyZ3MpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHRvQXJyYXkoKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIHRoaXMpO1xuICB9XG5cbn0pO1xuY29uc3QgcmVzZXJ2ZWQgPSBbJ3RvQXJyYXknLCAnY29uc3RydWN0b3InLCAnZWFjaCddO1xuXG5MaXN0LmV4dGVuZCA9IGZ1bmN0aW9uIChtZXRob2RzKSB7XG4gIG1ldGhvZHMgPSBtZXRob2RzLnJlZHVjZSgob2JqLCBuYW1lKSA9PiB7XG4gICAgLy8gRG9uJ3Qgb3ZlcndyaXRlIG93biBtZXRob2RzXG4gICAgaWYgKHJlc2VydmVkLmluY2x1ZGVzKG5hbWUpKSByZXR1cm4gb2JqOyAvLyBEb24ndCBhZGQgcHJpdmF0ZSBtZXRob2RzXG5cbiAgICBpZiAobmFtZVswXSA9PT0gJ18nKSByZXR1cm4gb2JqOyAvLyBSZWxheSBldmVyeSBjYWxsIHRvIGVhY2goKVxuXG4gICAgb2JqW25hbWVdID0gZnVuY3Rpb24gKC4uLmF0dHJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKG5hbWUsIC4uLmF0dHJzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xuICBleHRlbmQoW0xpc3RdLCBtZXRob2RzKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VGaW5kKHF1ZXJ5LCBwYXJlbnQpIHtcbiAgcmV0dXJuIG5ldyBMaXN0KG1hcCgocGFyZW50IHx8IGdsb2JhbHMuZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIHJldHVybiBhZG9wdChub2RlKTtcbiAgfSkpO1xufSAvLyBTY29wZWQgZmluZCBtZXRob2RcblxuZnVuY3Rpb24gZmluZChxdWVyeSkge1xuICByZXR1cm4gYmFzZUZpbmQocXVlcnksIHRoaXMubm9kZSk7XG59XG5mdW5jdGlvbiBmaW5kT25lKHF1ZXJ5KSB7XG4gIHJldHVybiBhZG9wdCh0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihxdWVyeSkpO1xufVxuXG5sZXQgbGlzdGVuZXJJZCA9IDA7XG5jb25zdCB3aW5kb3dFdmVudHMgPSB7fTtcbmZ1bmN0aW9uIGdldEV2ZW50cyhpbnN0YW5jZSkge1xuICBsZXQgbiA9IGluc3RhbmNlLmdldEV2ZW50SG9sZGVyKCk7IC8vIFdlIGRvbnQgd2FudCB0byBzYXZlIGV2ZW50cyBpbiBnbG9iYWwgc3BhY2VcblxuICBpZiAobiA9PT0gZ2xvYmFscy53aW5kb3cpIG4gPSB3aW5kb3dFdmVudHM7XG4gIGlmICghbi5ldmVudHMpIG4uZXZlbnRzID0ge307XG4gIHJldHVybiBuLmV2ZW50cztcbn1cbmZ1bmN0aW9uIGdldEV2ZW50VGFyZ2V0KGluc3RhbmNlKSB7XG4gIHJldHVybiBpbnN0YW5jZS5nZXRFdmVudFRhcmdldCgpO1xufVxuZnVuY3Rpb24gY2xlYXJFdmVudHMoaW5zdGFuY2UpIHtcbiAgbGV0IG4gPSBpbnN0YW5jZS5nZXRFdmVudEhvbGRlcigpO1xuICBpZiAobiA9PT0gZ2xvYmFscy53aW5kb3cpIG4gPSB3aW5kb3dFdmVudHM7XG4gIGlmIChuLmV2ZW50cykgbi5ldmVudHMgPSB7fTtcbn0gLy8gQWRkIGV2ZW50IGJpbmRlciBpbiB0aGUgU1ZHIG5hbWVzcGFjZVxuXG5mdW5jdGlvbiBvbihub2RlLCBldmVudHMsIGxpc3RlbmVyLCBiaW5kaW5nLCBvcHRpb25zKSB7XG4gIGNvbnN0IGwgPSBsaXN0ZW5lci5iaW5kKGJpbmRpbmcgfHwgbm9kZSk7XG4gIGNvbnN0IGluc3RhbmNlID0gbWFrZUluc3RhbmNlKG5vZGUpO1xuICBjb25zdCBiYWcgPSBnZXRFdmVudHMoaW5zdGFuY2UpO1xuICBjb25zdCBuID0gZ2V0RXZlbnRUYXJnZXQoaW5zdGFuY2UpOyAvLyBldmVudHMgY2FuIGJlIGFuIGFycmF5IG9mIGV2ZW50cyBvciBhIHN0cmluZyBvZiBldmVudHNcblxuICBldmVudHMgPSBBcnJheS5pc0FycmF5KGV2ZW50cykgPyBldmVudHMgOiBldmVudHMuc3BsaXQoZGVsaW1pdGVyKTsgLy8gYWRkIGlkIHRvIGxpc3RlbmVyXG5cbiAgaWYgKCFsaXN0ZW5lci5fc3ZnanNMaXN0ZW5lcklkKSB7XG4gICAgbGlzdGVuZXIuX3N2Z2pzTGlzdGVuZXJJZCA9ICsrbGlzdGVuZXJJZDtcbiAgfVxuXG4gIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IGV2ID0gZXZlbnQuc3BsaXQoJy4nKVswXTtcbiAgICBjb25zdCBucyA9IGV2ZW50LnNwbGl0KCcuJylbMV0gfHwgJyonOyAvLyBlbnN1cmUgdmFsaWQgb2JqZWN0XG5cbiAgICBiYWdbZXZdID0gYmFnW2V2XSB8fCB7fTtcbiAgICBiYWdbZXZdW25zXSA9IGJhZ1tldl1bbnNdIHx8IHt9OyAvLyByZWZlcmVuY2UgbGlzdGVuZXJcblxuICAgIGJhZ1tldl1bbnNdW2xpc3RlbmVyLl9zdmdqc0xpc3RlbmVySWRdID0gbDsgLy8gYWRkIGxpc3RlbmVyXG5cbiAgICBuLmFkZEV2ZW50TGlzdGVuZXIoZXYsIGwsIG9wdGlvbnMgfHwgZmFsc2UpO1xuICB9KTtcbn0gLy8gQWRkIGV2ZW50IHVuYmluZGVyIGluIHRoZSBTVkcgbmFtZXNwYWNlXG5cbmZ1bmN0aW9uIG9mZihub2RlLCBldmVudHMsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gbWFrZUluc3RhbmNlKG5vZGUpO1xuICBjb25zdCBiYWcgPSBnZXRFdmVudHMoaW5zdGFuY2UpO1xuICBjb25zdCBuID0gZ2V0RXZlbnRUYXJnZXQoaW5zdGFuY2UpOyAvLyBsaXN0ZW5lciBjYW4gYmUgYSBmdW5jdGlvbiBvciBhIG51bWJlclxuXG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLl9zdmdqc0xpc3RlbmVySWQ7XG4gICAgaWYgKCFsaXN0ZW5lcikgcmV0dXJuO1xuICB9IC8vIGV2ZW50cyBjYW4gYmUgYW4gYXJyYXkgb2YgZXZlbnRzIG9yIGEgc3RyaW5nIG9yIHVuZGVmaW5lZFxuXG5cbiAgZXZlbnRzID0gQXJyYXkuaXNBcnJheShldmVudHMpID8gZXZlbnRzIDogKGV2ZW50cyB8fCAnJykuc3BsaXQoZGVsaW1pdGVyKTtcbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgZXYgPSBldmVudCAmJiBldmVudC5zcGxpdCgnLicpWzBdO1xuICAgIGNvbnN0IG5zID0gZXZlbnQgJiYgZXZlbnQuc3BsaXQoJy4nKVsxXTtcbiAgICBsZXQgbmFtZXNwYWNlLCBsO1xuXG4gICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAvLyByZW1vdmUgbGlzdGVuZXIgcmVmZXJlbmNlXG4gICAgICBpZiAoYmFnW2V2XSAmJiBiYWdbZXZdW25zIHx8ICcqJ10pIHtcbiAgICAgICAgLy8gcmVtb3ZlTGlzdGVuZXJcbiAgICAgICAgbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2LCBiYWdbZXZdW25zIHx8ICcqJ11bbGlzdGVuZXJdLCBvcHRpb25zIHx8IGZhbHNlKTtcbiAgICAgICAgZGVsZXRlIGJhZ1tldl1bbnMgfHwgJyonXVtsaXN0ZW5lcl07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChldiAmJiBucykge1xuICAgICAgLy8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yIGEgbmFtZXNwYWNlZCBldmVudFxuICAgICAgaWYgKGJhZ1tldl0gJiYgYmFnW2V2XVtuc10pIHtcbiAgICAgICAgZm9yIChsIGluIGJhZ1tldl1bbnNdKSB7XG4gICAgICAgICAgb2ZmKG4sIFtldiwgbnNdLmpvaW4oJy4nKSwgbCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgYmFnW2V2XVtuc107XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChucykge1xuICAgICAgLy8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yIGEgc3BlY2lmaWMgbmFtZXNwYWNlXG4gICAgICBmb3IgKGV2ZW50IGluIGJhZykge1xuICAgICAgICBmb3IgKG5hbWVzcGFjZSBpbiBiYWdbZXZlbnRdKSB7XG4gICAgICAgICAgaWYgKG5zID09PSBuYW1lc3BhY2UpIHtcbiAgICAgICAgICAgIG9mZihuLCBbZXZlbnQsIG5zXS5qb2luKCcuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXYpIHtcbiAgICAgIC8vIHJlbW92ZSBhbGwgbGlzdGVuZXJzIGZvciB0aGUgZXZlbnRcbiAgICAgIGlmIChiYWdbZXZdKSB7XG4gICAgICAgIGZvciAobmFtZXNwYWNlIGluIGJhZ1tldl0pIHtcbiAgICAgICAgICBvZmYobiwgW2V2LCBuYW1lc3BhY2VdLmpvaW4oJy4nKSk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgYmFnW2V2XTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgb24gYSBnaXZlbiBub2RlXG4gICAgICBmb3IgKGV2ZW50IGluIGJhZykge1xuICAgICAgICBvZmYobiwgZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBjbGVhckV2ZW50cyhpbnN0YW5jZSk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGV2ZW50LCBkYXRhLCBvcHRpb25zKSB7XG4gIGNvbnN0IG4gPSBnZXRFdmVudFRhcmdldChub2RlKTsgLy8gRGlzcGF0Y2ggZXZlbnRcblxuICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBnbG9iYWxzLndpbmRvdy5FdmVudCkge1xuICAgIG4uZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnQgPSBuZXcgZ2xvYmFscy53aW5kb3cuQ3VzdG9tRXZlbnQoZXZlbnQsIHtcbiAgICAgIGRldGFpbDogZGF0YSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfSk7XG4gICAgbi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIHJldHVybiBldmVudDtcbn1cblxuY2xhc3MgRXZlbnRUYXJnZXQgZXh0ZW5kcyBCYXNlIHtcbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHt9XG5cbiAgZGlzcGF0Y2goZXZlbnQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2godGhpcywgZXZlbnQsIGRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgZGlzcGF0Y2hFdmVudChldmVudCkge1xuICAgIGNvbnN0IGJhZyA9IHRoaXMuZ2V0RXZlbnRIb2xkZXIoKS5ldmVudHM7XG4gICAgaWYgKCFiYWcpIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IGV2ZW50cyA9IGJhZ1tldmVudC50eXBlXTtcblxuICAgIGZvciAoY29uc3QgaSBpbiBldmVudHMpIHtcbiAgICAgIGZvciAoY29uc3QgaiBpbiBldmVudHNbaV0pIHtcbiAgICAgICAgZXZlbnRzW2ldW2pdKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XG4gIH0gLy8gRmlyZSBnaXZlbiBldmVudFxuXG5cbiAgZmlyZShldmVudCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHRoaXMuZGlzcGF0Y2goZXZlbnQsIGRhdGEsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0RXZlbnRIb2xkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRFdmVudFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBVbmJpbmQgZXZlbnQgZnJvbSBsaXN0ZW5lclxuXG5cbiAgb2ZmKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucykge1xuICAgIG9mZih0aGlzLCBldmVudCwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIEJpbmQgZ2l2ZW4gZXZlbnQgdG8gbGlzdGVuZXJcblxuXG4gIG9uKGV2ZW50LCBsaXN0ZW5lciwgYmluZGluZywgb3B0aW9ucykge1xuICAgIG9uKHRoaXMsIGV2ZW50LCBsaXN0ZW5lciwgYmluZGluZywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyKCkge31cblxufVxucmVnaXN0ZXIoRXZlbnRUYXJnZXQsICdFdmVudFRhcmdldCcpO1xuXG5mdW5jdGlvbiBub29wKCkge30gLy8gRGVmYXVsdCBhbmltYXRpb24gdmFsdWVzXG5cbmNvbnN0IHRpbWVsaW5lID0ge1xuICBkdXJhdGlvbjogNDAwLFxuICBlYXNlOiAnPicsXG4gIGRlbGF5OiAwXG59OyAvLyBEZWZhdWx0IGF0dHJpYnV0ZSB2YWx1ZXNcblxuY29uc3QgYXR0cnMgPSB7XG4gIC8vIGZpbGwgYW5kIHN0cm9rZVxuICAnZmlsbC1vcGFjaXR5JzogMSxcbiAgJ3N0cm9rZS1vcGFjaXR5JzogMSxcbiAgJ3N0cm9rZS13aWR0aCc6IDAsXG4gICdzdHJva2UtbGluZWpvaW4nOiAnbWl0ZXInLFxuICAnc3Ryb2tlLWxpbmVjYXAnOiAnYnV0dCcsXG4gIGZpbGw6ICcjMDAwMDAwJyxcbiAgc3Ryb2tlOiAnIzAwMDAwMCcsXG4gIG9wYWNpdHk6IDEsXG4gIC8vIHBvc2l0aW9uXG4gIHg6IDAsXG4gIHk6IDAsXG4gIGN4OiAwLFxuICBjeTogMCxcbiAgLy8gc2l6ZVxuICB3aWR0aDogMCxcbiAgaGVpZ2h0OiAwLFxuICAvLyByYWRpdXNcbiAgcjogMCxcbiAgcng6IDAsXG4gIHJ5OiAwLFxuICAvLyBncmFkaWVudFxuICBvZmZzZXQ6IDAsXG4gICdzdG9wLW9wYWNpdHknOiAxLFxuICAnc3RvcC1jb2xvcic6ICcjMDAwMDAwJyxcbiAgLy8gdGV4dFxuICAndGV4dC1hbmNob3InOiAnc3RhcnQnXG59O1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgbm9vcDogbm9vcCxcbiAgdGltZWxpbmU6IHRpbWVsaW5lLFxuICBhdHRyczogYXR0cnNcbn07XG5cbmNsYXNzIFNWR0FycmF5IGV4dGVuZHMgQXJyYXkge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5pbml0KC4uLmFyZ3MpO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMpO1xuICB9XG5cbiAgaW5pdChhcnIpIHtcbiAgICAvLyBUaGlzIGNhdGNoZXMgdGhlIGNhc2UsIHRoYXQgbmF0aXZlIG1hcCB0cmllcyB0byBjcmVhdGUgYW4gYXJyYXkgd2l0aCBuZXcgQXJyYXkoMSlcbiAgICBpZiAodHlwZW9mIGFyciA9PT0gJ251bWJlcicpIHJldHVybiB0aGlzO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLnB1c2goLi4udGhpcy5wYXJzZShhcnIpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBQYXJzZSB3aGl0ZXNwYWNlIHNlcGFyYXRlZCBzdHJpbmdcblxuXG4gIHBhcnNlKGFycmF5ID0gW10pIHtcbiAgICAvLyBJZiBhbHJlYWR5IGlzIGFuIGFycmF5LCBubyBuZWVkIHRvIHBhcnNlIGl0XG4gICAgaWYgKGFycmF5IGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiBhcnJheTtcbiAgICByZXR1cm4gYXJyYXkudHJpbSgpLnNwbGl0KGRlbGltaXRlcikubWFwKHBhcnNlRmxvYXQpO1xuICB9XG5cbiAgdG9BcnJheSgpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgdGhpcyk7XG4gIH1cblxuICB0b1NldCgpIHtcbiAgICByZXR1cm4gbmV3IFNldCh0aGlzKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmpvaW4oJyAnKTtcbiAgfSAvLyBGbGF0dGVucyB0aGUgYXJyYXkgaWYgbmVlZGVkXG5cblxuICB2YWx1ZU9mKCkge1xuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIHJldC5wdXNoKC4uLnRoaXMpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxufVxuXG5jbGFzcyBTVkdOdW1iZXIge1xuICAvLyBJbml0aWFsaXplXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICB0aGlzLmluaXQoLi4uYXJncyk7XG4gIH1cblxuICBjb252ZXJ0KHVuaXQpIHtcbiAgICByZXR1cm4gbmV3IFNWR051bWJlcih0aGlzLnZhbHVlLCB1bml0KTtcbiAgfSAvLyBEaXZpZGUgbnVtYmVyXG5cblxuICBkaXZpZGUobnVtYmVyKSB7XG4gICAgbnVtYmVyID0gbmV3IFNWR051bWJlcihudW1iZXIpO1xuICAgIHJldHVybiBuZXcgU1ZHTnVtYmVyKHRoaXMgLyBudW1iZXIsIHRoaXMudW5pdCB8fCBudW1iZXIudW5pdCk7XG4gIH1cblxuICBpbml0KHZhbHVlLCB1bml0KSB7XG4gICAgdW5pdCA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWVbMV0gOiB1bml0O1xuICAgIHZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZVswXSA6IHZhbHVlOyAvLyBpbml0aWFsaXplIGRlZmF1bHRzXG5cbiAgICB0aGlzLnZhbHVlID0gMDtcbiAgICB0aGlzLnVuaXQgPSB1bml0IHx8ICcnOyAvLyBwYXJzZSB2YWx1ZVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIC8vIGVuc3VyZSBhIHZhbGlkIG51bWVyaWMgdmFsdWVcbiAgICAgIHRoaXMudmFsdWUgPSBpc05hTih2YWx1ZSkgPyAwIDogIWlzRmluaXRlKHZhbHVlKSA/IHZhbHVlIDwgMCA/IC0zLjRlKzM4IDogKzMuNGUrMzggOiB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVuaXQgPSB2YWx1ZS5tYXRjaChudW1iZXJBbmRVbml0KTtcblxuICAgICAgaWYgKHVuaXQpIHtcbiAgICAgICAgLy8gbWFrZSB2YWx1ZSBudW1lcmljXG4gICAgICAgIHRoaXMudmFsdWUgPSBwYXJzZUZsb2F0KHVuaXRbMV0pOyAvLyBub3JtYWxpemVcblxuICAgICAgICBpZiAodW5pdFs1XSA9PT0gJyUnKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSAvPSAxMDA7XG4gICAgICAgIH0gZWxzZSBpZiAodW5pdFs1XSA9PT0gJ3MnKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSAqPSAxMDAwO1xuICAgICAgICB9IC8vIHN0b3JlIHVuaXRcblxuXG4gICAgICAgIHRoaXMudW5pdCA9IHVuaXRbNV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFNWR051bWJlcikge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICB0aGlzLnVuaXQgPSB2YWx1ZS51bml0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFN1YnRyYWN0IG51bWJlclxuXG5cbiAgbWludXMobnVtYmVyKSB7XG4gICAgbnVtYmVyID0gbmV3IFNWR051bWJlcihudW1iZXIpO1xuICAgIHJldHVybiBuZXcgU1ZHTnVtYmVyKHRoaXMgLSBudW1iZXIsIHRoaXMudW5pdCB8fCBudW1iZXIudW5pdCk7XG4gIH0gLy8gQWRkIG51bWJlclxuXG5cbiAgcGx1cyhudW1iZXIpIHtcbiAgICBudW1iZXIgPSBuZXcgU1ZHTnVtYmVyKG51bWJlcik7XG4gICAgcmV0dXJuIG5ldyBTVkdOdW1iZXIodGhpcyArIG51bWJlciwgdGhpcy51bml0IHx8IG51bWJlci51bml0KTtcbiAgfSAvLyBNdWx0aXBseSBudW1iZXJcblxuXG4gIHRpbWVzKG51bWJlcikge1xuICAgIG51bWJlciA9IG5ldyBTVkdOdW1iZXIobnVtYmVyKTtcbiAgICByZXR1cm4gbmV3IFNWR051bWJlcih0aGlzICogbnVtYmVyLCB0aGlzLnVuaXQgfHwgbnVtYmVyLnVuaXQpO1xuICB9XG5cbiAgdG9BcnJheSgpIHtcbiAgICByZXR1cm4gW3RoaXMudmFsdWUsIHRoaXMudW5pdF07XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAodGhpcy51bml0ID09PSAnJScgPyB+fih0aGlzLnZhbHVlICogMWU4KSAvIDFlNiA6IHRoaXMudW5pdCA9PT0gJ3MnID8gdGhpcy52YWx1ZSAvIDFlMyA6IHRoaXMudmFsdWUpICsgdGhpcy51bml0O1xuICB9XG5cbiAgdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG59XG5cbmNvbnN0IGhvb2tzID0gW107XG5mdW5jdGlvbiByZWdpc3RlckF0dHJIb29rKGZuKSB7XG4gIGhvb2tzLnB1c2goZm4pO1xufSAvLyBTZXQgc3ZnIGVsZW1lbnQgYXR0cmlidXRlXG5cbmZ1bmN0aW9uIGF0dHIoYXR0ciwgdmFsLCBucykge1xuICAvLyBhY3QgYXMgZnVsbCBnZXR0ZXJcbiAgaWYgKGF0dHIgPT0gbnVsbCkge1xuICAgIC8vIGdldCBhbiBvYmplY3Qgb2YgYXR0cmlidXRlc1xuICAgIGF0dHIgPSB7fTtcbiAgICB2YWwgPSB0aGlzLm5vZGUuYXR0cmlidXRlcztcblxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiB2YWwpIHtcbiAgICAgIGF0dHJbbm9kZS5ub2RlTmFtZV0gPSBpc051bWJlci50ZXN0KG5vZGUubm9kZVZhbHVlKSA/IHBhcnNlRmxvYXQobm9kZS5ub2RlVmFsdWUpIDogbm9kZS5ub2RlVmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHI7XG4gIH0gZWxzZSBpZiAoYXR0ciBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgLy8gbG9vcCB0aHJvdWdoIGFycmF5IGFuZCBnZXQgYWxsIHZhbHVlc1xuICAgIHJldHVybiBhdHRyLnJlZHVjZSgobGFzdCwgY3VycikgPT4ge1xuICAgICAgbGFzdFtjdXJyXSA9IHRoaXMuYXR0cihjdXJyKTtcbiAgICAgIHJldHVybiBsYXN0O1xuICAgIH0sIHt9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXR0ciA9PT0gJ29iamVjdCcgJiYgYXR0ci5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgLy8gYXBwbHkgZXZlcnkgYXR0cmlidXRlIGluZGl2aWR1YWxseSBpZiBhbiBvYmplY3QgaXMgcGFzc2VkXG4gICAgZm9yICh2YWwgaW4gYXR0cikgdGhpcy5hdHRyKHZhbCwgYXR0clt2YWxdKTtcbiAgfSBlbHNlIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAvLyByZW1vdmUgdmFsdWVcbiAgICB0aGlzLm5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICB9IGVsc2UgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgLy8gYWN0IGFzIGEgZ2V0dGVyIGlmIHRoZSBmaXJzdCBhbmQgb25seSBhcmd1bWVudCBpcyBub3QgYW4gb2JqZWN0XG4gICAgdmFsID0gdGhpcy5ub2RlLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICByZXR1cm4gdmFsID09IG51bGwgPyBhdHRyc1thdHRyXSA6IGlzTnVtYmVyLnRlc3QodmFsKSA/IHBhcnNlRmxvYXQodmFsKSA6IHZhbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBMb29wIHRocm91Z2ggaG9va3MgYW5kIGV4ZWN1dGUgdGhlbSB0byBjb252ZXJ0IHZhbHVlXG4gICAgdmFsID0gaG9va3MucmVkdWNlKChfdmFsLCBob29rKSA9PiB7XG4gICAgICByZXR1cm4gaG9vayhhdHRyLCBfdmFsLCB0aGlzKTtcbiAgICB9LCB2YWwpOyAvLyBlbnN1cmUgY29ycmVjdCBudW1lcmljIHZhbHVlcyAoYWxzbyBhY2NlcHRzIE5hTiBhbmQgSW5maW5pdHkpXG5cbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbCA9IG5ldyBTVkdOdW1iZXIodmFsKTtcbiAgICB9IGVsc2UgaWYgKENvbG9yLmlzQ29sb3IodmFsKSkge1xuICAgICAgLy8gZW5zdXJlIGZ1bGwgaGV4IGNvbG9yXG4gICAgICB2YWwgPSBuZXcgQ29sb3IodmFsKTtcbiAgICB9IGVsc2UgaWYgKHZhbC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgIC8vIENoZWNrIGZvciBwbGFpbiBhcnJheXMgYW5kIHBhcnNlIGFycmF5IHZhbHVlc1xuICAgICAgdmFsID0gbmV3IFNWR0FycmF5KHZhbCk7XG4gICAgfSAvLyBpZiB0aGUgcGFzc2VkIGF0dHJpYnV0ZSBpcyBsZWFkaW5nLi4uXG5cblxuICAgIGlmIChhdHRyID09PSAnbGVhZGluZycpIHtcbiAgICAgIC8vIC4uLiBjYWxsIHRoZSBsZWFkaW5nIG1ldGhvZCBpbnN0ZWFkXG4gICAgICBpZiAodGhpcy5sZWFkaW5nKSB7XG4gICAgICAgIHRoaXMubGVhZGluZyh2YWwpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXQgZ2l2ZW4gYXR0cmlidXRlIG9uIG5vZGVcbiAgICAgIHR5cGVvZiBucyA9PT0gJ3N0cmluZycgPyB0aGlzLm5vZGUuc2V0QXR0cmlidXRlTlMobnMsIGF0dHIsIHZhbC50b1N0cmluZygpKSA6IHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsLnRvU3RyaW5nKCkpO1xuICAgIH0gLy8gcmVidWlsZCBpZiByZXF1aXJlZFxuXG5cbiAgICBpZiAodGhpcy5yZWJ1aWxkICYmIChhdHRyID09PSAnZm9udC1zaXplJyB8fCBhdHRyID09PSAneCcpKSB7XG4gICAgICB0aGlzLnJlYnVpbGQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuY2xhc3MgRG9tIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGUgPSBub2RlLm5vZGVOYW1lO1xuXG4gICAgaWYgKGF0dHJzICYmIG5vZGUgIT09IGF0dHJzKSB7XG4gICAgICB0aGlzLmF0dHIoYXR0cnMpO1xuICAgIH1cbiAgfSAvLyBBZGQgZ2l2ZW4gZWxlbWVudCBhdCBhIHBvc2l0aW9uXG5cblxuICBhZGQoZWxlbWVudCwgaSkge1xuICAgIGVsZW1lbnQgPSBtYWtlSW5zdGFuY2UoZWxlbWVudCk7IC8vIElmIG5vbi1yb290IHN2ZyBub2RlcyBhcmUgYWRkZWQgd2UgaGF2ZSB0byByZW1vdmUgdGhlaXIgbmFtZXNwYWNlc1xuXG4gICAgaWYgKGVsZW1lbnQucmVtb3ZlTmFtZXNwYWNlICYmIHRoaXMubm9kZSBpbnN0YW5jZW9mIGdsb2JhbHMud2luZG93LlNWR0VsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlTmFtZXNwYWNlKCk7XG4gICAgfVxuXG4gICAgaWYgKGkgPT0gbnVsbCkge1xuICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQubm9kZSk7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50Lm5vZGUgIT09IHRoaXMubm9kZS5jaGlsZE5vZGVzW2ldKSB7XG4gICAgICB0aGlzLm5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQubm9kZSwgdGhpcy5ub2RlLmNoaWxkTm9kZXNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIEFkZCBlbGVtZW50IHRvIGdpdmVuIGNvbnRhaW5lciBhbmQgcmV0dXJuIHNlbGZcblxuXG4gIGFkZFRvKHBhcmVudCwgaSkge1xuICAgIHJldHVybiBtYWtlSW5zdGFuY2UocGFyZW50KS5wdXQodGhpcywgaSk7XG4gIH0gLy8gUmV0dXJucyBhbGwgY2hpbGQgZWxlbWVudHNcblxuXG4gIGNoaWxkcmVuKCkge1xuICAgIHJldHVybiBuZXcgTGlzdChtYXAodGhpcy5ub2RlLmNoaWxkcmVuLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgcmV0dXJuIGFkb3B0KG5vZGUpO1xuICAgIH0pKTtcbiAgfSAvLyBSZW1vdmUgYWxsIGVsZW1lbnRzIGluIHRoaXMgY29udGFpbmVyXG5cblxuICBjbGVhcigpIHtcbiAgICAvLyByZW1vdmUgY2hpbGRyZW5cbiAgICB3aGlsZSAodGhpcy5ub2RlLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZS5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIENsb25lIGVsZW1lbnRcblxuXG4gIGNsb25lKGRlZXAgPSB0cnVlKSB7XG4gICAgLy8gd3JpdGUgZG9tIGRhdGEgdG8gdGhlIGRvbSBzbyB0aGUgY2xvbmUgY2FuIHBpY2t1cCB0aGUgZGF0YVxuICAgIHRoaXMud3JpdGVEYXRhVG9Eb20oKTsgLy8gY2xvbmUgZWxlbWVudCBhbmQgYXNzaWduIG5ldyBpZFxuXG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKGFzc2lnbk5ld0lkKHRoaXMubm9kZS5jbG9uZU5vZGUoZGVlcCkpKTtcbiAgfSAvLyBJdGVyYXRlcyBvdmVyIGFsbCBjaGlsZHJlbiBhbmQgaW52b2tlcyBhIGdpdmVuIGJsb2NrXG5cblxuICBlYWNoKGJsb2NrLCBkZWVwKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCk7XG4gICAgbGV0IGksIGlsO1xuXG4gICAgZm9yIChpID0gMCwgaWwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICBibG9jay5hcHBseShjaGlsZHJlbltpXSwgW2ksIGNoaWxkcmVuXSk7XG5cbiAgICAgIGlmIChkZWVwKSB7XG4gICAgICAgIGNoaWxkcmVuW2ldLmVhY2goYmxvY2ssIGRlZXApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZWxlbWVudChub2RlTmFtZSwgYXR0cnMpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQobmV3IERvbShjcmVhdGUobm9kZU5hbWUpLCBhdHRycykpO1xuICB9IC8vIEdldCBmaXJzdCBjaGlsZFxuXG5cbiAgZmlyc3QoKSB7XG4gICAgcmV0dXJuIGFkb3B0KHRoaXMubm9kZS5maXJzdENoaWxkKTtcbiAgfSAvLyBHZXQgYSBlbGVtZW50IGF0IHRoZSBnaXZlbiBpbmRleFxuXG5cbiAgZ2V0KGkpIHtcbiAgICByZXR1cm4gYWRvcHQodGhpcy5ub2RlLmNoaWxkTm9kZXNbaV0pO1xuICB9XG5cbiAgZ2V0RXZlbnRIb2xkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldEV2ZW50VGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH0gLy8gQ2hlY2tzIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGEgY2hpbGRcblxuXG4gIGhhcyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXgoZWxlbWVudCkgPj0gMDtcbiAgfVxuXG4gIGh0bWwoaHRtbE9yRm4sIG91dGVySFRNTCkge1xuICAgIHJldHVybiB0aGlzLnhtbChodG1sT3JGbiwgb3V0ZXJIVE1MLCBodG1sKTtcbiAgfSAvLyBHZXQgLyBzZXQgaWRcblxuXG4gIGlkKGlkKSB7XG4gICAgLy8gZ2VuZXJhdGUgbmV3IGlkIGlmIG5vIGlkIHNldFxuICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnICYmICF0aGlzLm5vZGUuaWQpIHtcbiAgICAgIHRoaXMubm9kZS5pZCA9IGVpZCh0aGlzLnR5cGUpO1xuICAgIH0gLy8gZG9uJ3Qgc2V0IGRpcmVjdGx5IHdpdGggdGhpcy5ub2RlLmlkIHRvIG1ha2UgYG51bGxgIHdvcmsgY29ycmVjdGx5XG5cblxuICAgIHJldHVybiB0aGlzLmF0dHIoJ2lkJywgaWQpO1xuICB9IC8vIEdldHMgaW5kZXggb2YgZ2l2ZW4gZWxlbWVudFxuXG5cbiAgaW5kZXgoZWxlbWVudCkge1xuICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHRoaXMubm9kZS5jaGlsZE5vZGVzKS5pbmRleE9mKGVsZW1lbnQubm9kZSk7XG4gIH0gLy8gR2V0IHRoZSBsYXN0IGNoaWxkXG5cblxuICBsYXN0KCkge1xuICAgIHJldHVybiBhZG9wdCh0aGlzLm5vZGUubGFzdENoaWxkKTtcbiAgfSAvLyBtYXRjaGVzIHRoZSBlbGVtZW50IHZzIGEgY3NzIHNlbGVjdG9yXG5cblxuICBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLm5vZGU7XG4gICAgY29uc3QgbWF0Y2hlciA9IGVsLm1hdGNoZXMgfHwgZWwubWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWwub01hdGNoZXNTZWxlY3RvciB8fCBudWxsO1xuICAgIHJldHVybiBtYXRjaGVyICYmIG1hdGNoZXIuY2FsbChlbCwgc2VsZWN0b3IpO1xuICB9IC8vIFJldHVybnMgdGhlIHBhcmVudCBlbGVtZW50IGluc3RhbmNlXG5cblxuICBwYXJlbnQodHlwZSkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzOyAvLyBjaGVjayBmb3IgcGFyZW50XG5cbiAgICBpZiAoIXBhcmVudC5ub2RlLnBhcmVudE5vZGUpIHJldHVybiBudWxsOyAvLyBnZXQgcGFyZW50IGVsZW1lbnRcblxuICAgIHBhcmVudCA9IGFkb3B0KHBhcmVudC5ub2RlLnBhcmVudE5vZGUpO1xuICAgIGlmICghdHlwZSkgcmV0dXJuIHBhcmVudDsgLy8gbG9vcCB0cm91Z2ggYW5jZXN0b3JzIGlmIHR5cGUgaXMgZ2l2ZW5cblxuICAgIGRvIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnQubWF0Y2hlcyh0eXBlKSA6IHBhcmVudCBpbnN0YW5jZW9mIHR5cGUpIHJldHVybiBwYXJlbnQ7XG4gICAgfSB3aGlsZSAocGFyZW50ID0gYWRvcHQocGFyZW50Lm5vZGUucGFyZW50Tm9kZSkpO1xuXG4gICAgcmV0dXJuIHBhcmVudDtcbiAgfSAvLyBCYXNpY2FsbHkgZG9lcyB0aGUgc2FtZSBhcyBgYWRkKClgIGJ1dCByZXR1cm5zIHRoZSBhZGRlZCBlbGVtZW50IGluc3RlYWRcblxuXG4gIHB1dChlbGVtZW50LCBpKSB7XG4gICAgZWxlbWVudCA9IG1ha2VJbnN0YW5jZShlbGVtZW50KTtcbiAgICB0aGlzLmFkZChlbGVtZW50LCBpKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBBZGQgZWxlbWVudCB0byBnaXZlbiBjb250YWluZXIgYW5kIHJldHVybiBjb250YWluZXJcblxuXG4gIHB1dEluKHBhcmVudCwgaSkge1xuICAgIHJldHVybiBtYWtlSW5zdGFuY2UocGFyZW50KS5hZGQodGhpcywgaSk7XG4gIH0gLy8gUmVtb3ZlIGVsZW1lbnRcblxuXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5wYXJlbnQoKSkge1xuICAgICAgdGhpcy5wYXJlbnQoKS5yZW1vdmVFbGVtZW50KHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFJlbW92ZSBhIGdpdmVuIGNoaWxkXG5cblxuICByZW1vdmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudC5ub2RlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBSZXBsYWNlIHRoaXMgd2l0aCBlbGVtZW50XG5cblxuICByZXBsYWNlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID0gbWFrZUluc3RhbmNlKGVsZW1lbnQpO1xuXG4gICAgaWYgKHRoaXMubm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZWxlbWVudC5ub2RlLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcm91bmQocHJlY2lzaW9uID0gMiwgbWFwID0gbnVsbCkge1xuICAgIGNvbnN0IGZhY3RvciA9IDEwICoqIHByZWNpc2lvbjtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuYXR0cihtYXApO1xuXG4gICAgZm9yIChjb25zdCBpIGluIGF0dHJzKSB7XG4gICAgICBpZiAodHlwZW9mIGF0dHJzW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICBhdHRyc1tpXSA9IE1hdGgucm91bmQoYXR0cnNbaV0gKiBmYWN0b3IpIC8gZmFjdG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXR0cihhdHRycyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gSW1wb3J0IC8gRXhwb3J0IHJhdyBzdmdcblxuXG4gIHN2ZyhzdmdPckZuLCBvdXRlclNWRykge1xuICAgIHJldHVybiB0aGlzLnhtbChzdmdPckZuLCBvdXRlclNWRywgc3ZnKTtcbiAgfSAvLyBSZXR1cm4gaWQgb24gc3RyaW5nIGNvbnZlcnNpb25cblxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmlkKCk7XG4gIH1cblxuICB3b3Jkcyh0ZXh0KSB7XG4gICAgLy8gVGhpcyBpcyBmYXN0ZXIgdGhhbiByZW1vdmluZyBhbGwgY2hpbGRyZW4gYW5kIGFkZGluZyBhIG5ldyBvbmVcbiAgICB0aGlzLm5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd3JhcChub2RlKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTtcblxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRUbyhub2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcmVudC5pbmRleCh0aGlzKTtcbiAgICByZXR1cm4gcGFyZW50LnB1dChub2RlLCBwb3NpdGlvbikucHV0KHRoaXMpO1xuICB9IC8vIHdyaXRlIHN2Z2pzIGRhdGEgdG8gdGhlIGRvbVxuXG5cbiAgd3JpdGVEYXRhVG9Eb20oKSB7XG4gICAgLy8gZHVtcCB2YXJpYWJsZXMgcmVjdXJzaXZlbHlcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy53cml0ZURhdGFUb0RvbSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIEltcG9ydCAvIEV4cG9ydCByYXcgc3ZnXG5cblxuICB4bWwoeG1sT3JGbiwgb3V0ZXJYTUwsIG5zKSB7XG4gICAgaWYgKHR5cGVvZiB4bWxPckZuID09PSAnYm9vbGVhbicpIHtcbiAgICAgIG5zID0gb3V0ZXJYTUw7XG4gICAgICBvdXRlclhNTCA9IHhtbE9yRm47XG4gICAgICB4bWxPckZuID0gbnVsbDtcbiAgICB9IC8vIGFjdCBhcyBnZXR0ZXIgaWYgbm8gc3ZnIHN0cmluZyBpcyBnaXZlblxuXG5cbiAgICBpZiAoeG1sT3JGbiA9PSBudWxsIHx8IHR5cGVvZiB4bWxPckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBUaGUgZGVmYXVsdCBmb3IgZXhwb3J0cyBpcywgdGhhdCB0aGUgb3V0ZXJOb2RlIGlzIGluY2x1ZGVkXG4gICAgICBvdXRlclhNTCA9IG91dGVyWE1MID09IG51bGwgPyB0cnVlIDogb3V0ZXJYTUw7IC8vIHdyaXRlIHN2Z2pzIGRhdGEgdG8gdGhlIGRvbVxuXG4gICAgICB0aGlzLndyaXRlRGF0YVRvRG9tKCk7XG4gICAgICBsZXQgY3VycmVudCA9IHRoaXM7IC8vIEFuIGV4cG9ydCBtb2RpZmllciB3YXMgcGFzc2VkXG5cbiAgICAgIGlmICh4bWxPckZuICE9IG51bGwpIHtcbiAgICAgICAgY3VycmVudCA9IGFkb3B0KGN1cnJlbnQubm9kZS5jbG9uZU5vZGUodHJ1ZSkpOyAvLyBJZiB0aGUgdXNlciB3YW50cyBvdXRlckhUTUwgd2UgbmVlZCB0byBwcm9jZXNzIHRoaXMgbm9kZSwgdG9vXG5cbiAgICAgICAgaWYgKG91dGVyWE1MKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0geG1sT3JGbihjdXJyZW50KTtcbiAgICAgICAgICBjdXJyZW50ID0gcmVzdWx0IHx8IGN1cnJlbnQ7IC8vIFRoZSB1c2VyIGRvZXMgbm90IHdhbnQgdGhpcyBub2RlPyBXZWxsLCB0aGVuIGhlIGdldHMgbm90aGluZ1xuXG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHJldHVybiAnJztcbiAgICAgICAgfSAvLyBEZWVwIGxvb3AgdGhyb3VnaCBhbGwgY2hpbGRyZW4gYW5kIGFwcGx5IG1vZGlmaWVyXG5cblxuICAgICAgICBjdXJyZW50LmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHhtbE9yRm4odGhpcyk7XG5cbiAgICAgICAgICBjb25zdCBfdGhpcyA9IHJlc3VsdCB8fCB0aGlzOyAvLyBJZiBtb2RpZmllciByZXR1cm5zIGZhbHNlLCBkaXNjYXJkIG5vZGVcblxuXG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7IC8vIElmIG1vZGlmaWVyIHJldHVybnMgbmV3IG5vZGUsIHVzZSBpdFxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ICYmIHRoaXMgIT09IF90aGlzKSB7XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UoX3RoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICB9IC8vIFJldHVybiBvdXRlciBvciBpbm5lciBjb250ZW50XG5cblxuICAgICAgcmV0dXJuIG91dGVyWE1MID8gY3VycmVudC5ub2RlLm91dGVySFRNTCA6IGN1cnJlbnQubm9kZS5pbm5lckhUTUw7XG4gICAgfSAvLyBBY3QgYXMgc2V0dGVyIGlmIHdlIGdvdCBhIHN0cmluZ1xuICAgIC8vIFRoZSBkZWZhdWx0IGZvciBpbXBvcnQgaXMsIHRoYXQgdGhlIGN1cnJlbnQgbm9kZSBpcyBub3QgcmVwbGFjZWRcblxuXG4gICAgb3V0ZXJYTUwgPSBvdXRlclhNTCA9PSBudWxsID8gZmFsc2UgOiBvdXRlclhNTDsgLy8gQ3JlYXRlIHRlbXBvcmFyeSBob2xkZXJcblxuICAgIGNvbnN0IHdlbGwgPSBjcmVhdGUoJ3dyYXBwZXInLCBucyk7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBnbG9iYWxzLmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTsgLy8gRHVtcCByYXcgc3ZnXG5cbiAgICB3ZWxsLmlubmVySFRNTCA9IHhtbE9yRm47IC8vIFRyYW5zcGxhbnQgbm9kZXMgaW50byB0aGUgZnJhZ21lbnRcblxuICAgIGZvciAobGV0IGxlbiA9IHdlbGwuY2hpbGRyZW4ubGVuZ3RoOyBsZW4tLTspIHtcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHdlbGwuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50KCk7IC8vIEFkZCB0aGUgd2hvbGUgZnJhZ21lbnQgYXQgb25jZVxuXG4gICAgcmV0dXJuIG91dGVyWE1MID8gdGhpcy5yZXBsYWNlKGZyYWdtZW50KSAmJiBwYXJlbnQgOiB0aGlzLmFkZChmcmFnbWVudCk7XG4gIH1cblxufVxuZXh0ZW5kKERvbSwge1xuICBhdHRyLFxuICBmaW5kLFxuICBmaW5kT25lXG59KTtcbnJlZ2lzdGVyKERvbSwgJ0RvbScpO1xuXG5jbGFzcyBFbGVtZW50IGV4dGVuZHMgRG9tIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMpIHtcbiAgICBzdXBlcihub2RlLCBhdHRycyk7IC8vIGluaXRpYWxpemUgZGF0YSBvYmplY3RcblxuICAgIHRoaXMuZG9tID0ge307IC8vIGNyZWF0ZSBjaXJjdWxhciByZWZlcmVuY2VcblxuICAgIHRoaXMubm9kZS5pbnN0YW5jZSA9IHRoaXM7XG5cbiAgICBpZiAobm9kZS5oYXNBdHRyaWJ1dGUoJ3N2Z2pzOmRhdGEnKSkge1xuICAgICAgLy8gcHVsbCBzdmdqcyBkYXRhIGZyb20gdGhlIGRvbSAoZ2V0QXR0cmlidXRlTlMgZG9lc24ndCB3b3JrIGluIGh0bWw1KVxuICAgICAgdGhpcy5zZXREYXRhKEpTT04ucGFyc2Uobm9kZS5nZXRBdHRyaWJ1dGUoJ3N2Z2pzOmRhdGEnKSkgfHwge30pO1xuICAgIH1cbiAgfSAvLyBNb3ZlIGVsZW1lbnQgYnkgaXRzIGNlbnRlclxuXG5cbiAgY2VudGVyKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5jeCh4KS5jeSh5KTtcbiAgfSAvLyBNb3ZlIGJ5IGNlbnRlciBvdmVyIHgtYXhpc1xuXG5cbiAgY3goeCkge1xuICAgIHJldHVybiB4ID09IG51bGwgPyB0aGlzLngoKSArIHRoaXMud2lkdGgoKSAvIDIgOiB0aGlzLngoeCAtIHRoaXMud2lkdGgoKSAvIDIpO1xuICB9IC8vIE1vdmUgYnkgY2VudGVyIG92ZXIgeS1heGlzXG5cblxuICBjeSh5KSB7XG4gICAgcmV0dXJuIHkgPT0gbnVsbCA/IHRoaXMueSgpICsgdGhpcy5oZWlnaHQoKSAvIDIgOiB0aGlzLnkoeSAtIHRoaXMuaGVpZ2h0KCkgLyAyKTtcbiAgfSAvLyBHZXQgZGVmc1xuXG5cbiAgZGVmcygpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5yb290KCk7XG4gICAgcmV0dXJuIHJvb3QgJiYgcm9vdC5kZWZzKCk7XG4gIH0gLy8gUmVsYXRpdmUgbW92ZSBvdmVyIHggYW5kIHkgYXhlc1xuXG5cbiAgZG1vdmUoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmR4KHgpLmR5KHkpO1xuICB9IC8vIFJlbGF0aXZlIG1vdmUgb3ZlciB4IGF4aXNcblxuXG4gIGR4KHggPSAwKSB7XG4gICAgcmV0dXJuIHRoaXMueChuZXcgU1ZHTnVtYmVyKHgpLnBsdXModGhpcy54KCkpKTtcbiAgfSAvLyBSZWxhdGl2ZSBtb3ZlIG92ZXIgeSBheGlzXG5cblxuICBkeSh5ID0gMCkge1xuICAgIHJldHVybiB0aGlzLnkobmV3IFNWR051bWJlcih5KS5wbHVzKHRoaXMueSgpKSk7XG4gIH1cblxuICBnZXRFdmVudEhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBTZXQgaGVpZ2h0IG9mIGVsZW1lbnRcblxuXG4gIGhlaWdodChoZWlnaHQpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpO1xuICB9IC8vIE1vdmUgZWxlbWVudCB0byBnaXZlbiB4IGFuZCB5IHZhbHVlc1xuXG5cbiAgbW92ZSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMueCh4KS55KHkpO1xuICB9IC8vIHJldHVybiBhcnJheSBvZiBhbGwgYW5jZXN0b3JzIG9mIGdpdmVuIHR5cGUgdXAgdG8gdGhlIHJvb3Qgc3ZnXG5cblxuICBwYXJlbnRzKHVudGlsID0gdGhpcy5yb290KCkpIHtcbiAgICBjb25zdCBpc1NlbGVjdG9yID0gdHlwZW9mIHVudGlsID09PSAnc3RyaW5nJztcblxuICAgIGlmICghaXNTZWxlY3Rvcikge1xuICAgICAgdW50aWwgPSBtYWtlSW5zdGFuY2UodW50aWwpO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudHMgPSBuZXcgTGlzdCgpO1xuICAgIGxldCBwYXJlbnQgPSB0aGlzO1xuXG4gICAgd2hpbGUgKChwYXJlbnQgPSBwYXJlbnQucGFyZW50KCkpICYmIHBhcmVudC5ub2RlICE9PSBnbG9iYWxzLmRvY3VtZW50ICYmIHBhcmVudC5ub2RlTmFtZSAhPT0gJyNkb2N1bWVudC1mcmFnbWVudCcpIHtcbiAgICAgIHBhcmVudHMucHVzaChwYXJlbnQpO1xuXG4gICAgICBpZiAoIWlzU2VsZWN0b3IgJiYgcGFyZW50Lm5vZGUgPT09IHVudGlsLm5vZGUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1NlbGVjdG9yICYmIHBhcmVudC5tYXRjaGVzKHVudGlsKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmVudC5ub2RlID09PSB0aGlzLnJvb3QoKS5ub2RlKSB7XG4gICAgICAgIC8vIFdlIHdvcmtlZCBvdXIgd2F5IHRvIHRoZSByb290IGFuZCBkaWRuJ3QgbWF0Y2ggYHVudGlsYFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50cztcbiAgfSAvLyBHZXQgcmVmZXJlbmNlZCBlbGVtZW50IGZvcm0gYXR0cmlidXRlIHZhbHVlXG5cblxuICByZWZlcmVuY2UoYXR0cikge1xuICAgIGF0dHIgPSB0aGlzLmF0dHIoYXR0cik7XG4gICAgaWYgKCFhdHRyKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtID0gKGF0dHIgKyAnJykubWF0Y2gocmVmZXJlbmNlKTtcbiAgICByZXR1cm4gbSA/IG1ha2VJbnN0YW5jZShtWzFdKSA6IG51bGw7XG4gIH0gLy8gR2V0IHBhcmVudCBkb2N1bWVudFxuXG5cbiAgcm9vdCgpIHtcbiAgICBjb25zdCBwID0gdGhpcy5wYXJlbnQoZ2V0Q2xhc3Mocm9vdCkpO1xuICAgIHJldHVybiBwICYmIHAucm9vdCgpO1xuICB9IC8vIHNldCBnaXZlbiBkYXRhIHRvIHRoZSBlbGVtZW50cyBkYXRhIHByb3BlcnR5XG5cblxuICBzZXREYXRhKG8pIHtcbiAgICB0aGlzLmRvbSA9IG87XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gU2V0IGVsZW1lbnQgc2l6ZSB0byBnaXZlbiB3aWR0aCBhbmQgaGVpZ2h0XG5cblxuICBzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBwID0gcHJvcG9ydGlvbmFsU2l6ZSh0aGlzLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICByZXR1cm4gdGhpcy53aWR0aChuZXcgU1ZHTnVtYmVyKHAud2lkdGgpKS5oZWlnaHQobmV3IFNWR051bWJlcihwLmhlaWdodCkpO1xuICB9IC8vIFNldCB3aWR0aCBvZiBlbGVtZW50XG5cblxuICB3aWR0aCh3aWR0aCkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ3dpZHRoJywgd2lkdGgpO1xuICB9IC8vIHdyaXRlIHN2Z2pzIGRhdGEgdG8gdGhlIGRvbVxuXG5cbiAgd3JpdGVEYXRhVG9Eb20oKSB7XG4gICAgLy8gcmVtb3ZlIHByZXZpb3VzbHkgc2V0IGRhdGFcbiAgICB0aGlzLm5vZGUucmVtb3ZlQXR0cmlidXRlKCdzdmdqczpkYXRhJyk7XG5cbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kb20pLmxlbmd0aCkge1xuICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnc3ZnanM6ZGF0YScsIEpTT04uc3RyaW5naWZ5KHRoaXMuZG9tKSk7IC8vIHNlZSAjNDI4XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLndyaXRlRGF0YVRvRG9tKCk7XG4gIH0gLy8gTW92ZSBvdmVyIHgtYXhpc1xuXG5cbiAgeCh4KSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cigneCcsIHgpO1xuICB9IC8vIE1vdmUgb3ZlciB5LWF4aXNcblxuXG4gIHkoeSkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ3knLCB5KTtcbiAgfVxuXG59XG5leHRlbmQoRWxlbWVudCwge1xuICBiYm94LFxuICByYm94LFxuICBpbnNpZGUsXG4gIHBvaW50LFxuICBjdG0sXG4gIHNjcmVlbkNUTVxufSk7XG5yZWdpc3RlcihFbGVtZW50LCAnRWxlbWVudCcpO1xuXG5jb25zdCBzdWdhciA9IHtcbiAgc3Ryb2tlOiBbJ2NvbG9yJywgJ3dpZHRoJywgJ29wYWNpdHknLCAnbGluZWNhcCcsICdsaW5lam9pbicsICdtaXRlcmxpbWl0JywgJ2Rhc2hhcnJheScsICdkYXNob2Zmc2V0J10sXG4gIGZpbGw6IFsnY29sb3InLCAnb3BhY2l0eScsICdydWxlJ10sXG4gIHByZWZpeDogZnVuY3Rpb24gKHQsIGEpIHtcbiAgICByZXR1cm4gYSA9PT0gJ2NvbG9yJyA/IHQgOiB0ICsgJy0nICsgYTtcbiAgfVxufSAvLyBBZGQgc3VnYXIgZm9yIGZpbGwgYW5kIHN0cm9rZVxuO1xuWydmaWxsJywgJ3N0cm9rZSddLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgY29uc3QgZXh0ZW5zaW9uID0ge307XG4gIGxldCBpO1xuXG4gIGV4dGVuc2lvblttXSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgaWYgKHR5cGVvZiBvID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRoaXMuYXR0cihtKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG8gPT09ICdzdHJpbmcnIHx8IG8gaW5zdGFuY2VvZiBDb2xvciB8fCBDb2xvci5pc1JnYihvKSB8fCBvIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgdGhpcy5hdHRyKG0sIG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXQgYWxsIGF0dHJpYnV0ZXMgZnJvbSBzdWdhci5maWxsIGFuZCBzdWdhci5zdHJva2UgbGlzdFxuICAgICAgZm9yIChpID0gc3VnYXJbbV0ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKG9bc3VnYXJbbV1baV1dICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmF0dHIoc3VnYXIucHJlZml4KG0sIHN1Z2FyW21dW2ldKSwgb1tzdWdhclttXVtpXV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmVnaXN0ZXJNZXRob2RzKFsnRWxlbWVudCcsICdSdW5uZXInXSwgZXh0ZW5zaW9uKTtcbn0pO1xucmVnaXN0ZXJNZXRob2RzKFsnRWxlbWVudCcsICdSdW5uZXInXSwge1xuICAvLyBMZXQgdGhlIHVzZXIgc2V0IHRoZSBtYXRyaXggZGlyZWN0bHlcbiAgbWF0cml4OiBmdW5jdGlvbiAobWF0LCBiLCBjLCBkLCBlLCBmKSB7XG4gICAgLy8gQWN0IGFzIGEgZ2V0dGVyXG4gICAgaWYgKG1hdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IE1hdHJpeCh0aGlzKTtcbiAgICB9IC8vIEFjdCBhcyBhIHNldHRlciwgdGhlIHVzZXIgY2FuIHBhc3MgYSBtYXRyaXggb3IgYSBzZXQgb2YgbnVtYmVyc1xuXG5cbiAgICByZXR1cm4gdGhpcy5hdHRyKCd0cmFuc2Zvcm0nLCBuZXcgTWF0cml4KG1hdCwgYiwgYywgZCwgZSwgZikpO1xuICB9LFxuICAvLyBNYXAgcm90YXRpb24gdG8gdHJhbnNmb3JtXG4gIHJvdGF0ZTogZnVuY3Rpb24gKGFuZ2xlLCBjeCwgY3kpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0oe1xuICAgICAgcm90YXRlOiBhbmdsZSxcbiAgICAgIG94OiBjeCxcbiAgICAgIG95OiBjeVxuICAgIH0sIHRydWUpO1xuICB9LFxuICAvLyBNYXAgc2tldyB0byB0cmFuc2Zvcm1cbiAgc2tldzogZnVuY3Rpb24gKHgsIHksIGN4LCBjeSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDMgPyB0aGlzLnRyYW5zZm9ybSh7XG4gICAgICBza2V3OiB4LFxuICAgICAgb3g6IHksXG4gICAgICBveTogY3hcbiAgICB9LCB0cnVlKSA6IHRoaXMudHJhbnNmb3JtKHtcbiAgICAgIHNrZXc6IFt4LCB5XSxcbiAgICAgIG94OiBjeCxcbiAgICAgIG95OiBjeVxuICAgIH0sIHRydWUpO1xuICB9LFxuICBzaGVhcjogZnVuY3Rpb24gKGxhbSwgY3gsIGN5KSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKHtcbiAgICAgIHNoZWFyOiBsYW0sXG4gICAgICBveDogY3gsXG4gICAgICBveTogY3lcbiAgICB9LCB0cnVlKTtcbiAgfSxcbiAgLy8gTWFwIHNjYWxlIHRvIHRyYW5zZm9ybVxuICBzY2FsZTogZnVuY3Rpb24gKHgsIHksIGN4LCBjeSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDMgPyB0aGlzLnRyYW5zZm9ybSh7XG4gICAgICBzY2FsZTogeCxcbiAgICAgIG94OiB5LFxuICAgICAgb3k6IGN4XG4gICAgfSwgdHJ1ZSkgOiB0aGlzLnRyYW5zZm9ybSh7XG4gICAgICBzY2FsZTogW3gsIHldLFxuICAgICAgb3g6IGN4LFxuICAgICAgb3k6IGN5XG4gICAgfSwgdHJ1ZSk7XG4gIH0sXG4gIC8vIE1hcCB0cmFuc2xhdGUgdG8gdHJhbnNmb3JtXG4gIHRyYW5zbGF0ZTogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0oe1xuICAgICAgdHJhbnNsYXRlOiBbeCwgeV1cbiAgICB9LCB0cnVlKTtcbiAgfSxcbiAgLy8gTWFwIHJlbGF0aXZlIHRyYW5zbGF0aW9ucyB0byB0cmFuc2Zvcm1cbiAgcmVsYXRpdmU6IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKHtcbiAgICAgIHJlbGF0aXZlOiBbeCwgeV1cbiAgICB9LCB0cnVlKTtcbiAgfSxcbiAgLy8gTWFwIGZsaXAgdG8gdHJhbnNmb3JtXG4gIGZsaXA6IGZ1bmN0aW9uIChkaXJlY3Rpb24gPSAnYm90aCcsIG9yaWdpbiA9ICdjZW50ZXInKSB7XG4gICAgaWYgKCd4eWJvdGh0cnVlJy5pbmRleE9mKGRpcmVjdGlvbikgPT09IC0xKSB7XG4gICAgICBvcmlnaW4gPSBkaXJlY3Rpb247XG4gICAgICBkaXJlY3Rpb24gPSAnYm90aCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKHtcbiAgICAgIGZsaXA6IGRpcmVjdGlvbixcbiAgICAgIG9yaWdpbjogb3JpZ2luXG4gICAgfSwgdHJ1ZSk7XG4gIH0sXG4gIC8vIE9wYWNpdHlcbiAgb3BhY2l0eTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignb3BhY2l0eScsIHZhbHVlKTtcbiAgfVxufSk7XG5yZWdpc3Rlck1ldGhvZHMoJ3JhZGl1cycsIHtcbiAgLy8gQWRkIHggYW5kIHkgcmFkaXVzXG4gIHJhZGl1czogZnVuY3Rpb24gKHgsIHkgPSB4KSB7XG4gICAgY29uc3QgdHlwZSA9ICh0aGlzLl9lbGVtZW50IHx8IHRoaXMpLnR5cGU7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdyYWRpYWxHcmFkaWVudCcgPyB0aGlzLmF0dHIoJ3InLCBuZXcgU1ZHTnVtYmVyKHgpKSA6IHRoaXMucngoeCkucnkoeSk7XG4gIH1cbn0pO1xucmVnaXN0ZXJNZXRob2RzKCdQYXRoJywge1xuICAvLyBHZXQgcGF0aCBsZW5ndGhcbiAgbGVuZ3RoOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZS5nZXRUb3RhbExlbmd0aCgpO1xuICB9LFxuICAvLyBHZXQgcG9pbnQgYXQgbGVuZ3RoXG4gIHBvaW50QXQ6IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMubm9kZS5nZXRQb2ludEF0TGVuZ3RoKGxlbmd0aCkpO1xuICB9XG59KTtcbnJlZ2lzdGVyTWV0aG9kcyhbJ0VsZW1lbnQnLCAnUnVubmVyJ10sIHtcbiAgLy8gU2V0IGZvbnRcbiAgZm9udDogZnVuY3Rpb24gKGEsIHYpIHtcbiAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKHYgaW4gYSkgdGhpcy5mb250KHYsIGFbdl0pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gYSA9PT0gJ2xlYWRpbmcnID8gdGhpcy5sZWFkaW5nKHYpIDogYSA9PT0gJ2FuY2hvcicgPyB0aGlzLmF0dHIoJ3RleHQtYW5jaG9yJywgdikgOiBhID09PSAnc2l6ZScgfHwgYSA9PT0gJ2ZhbWlseScgfHwgYSA9PT0gJ3dlaWdodCcgfHwgYSA9PT0gJ3N0cmV0Y2gnIHx8IGEgPT09ICd2YXJpYW50JyB8fCBhID09PSAnc3R5bGUnID8gdGhpcy5hdHRyKCdmb250LScgKyBhLCB2KSA6IHRoaXMuYXR0cihhLCB2KTtcbiAgfVxufSk7IC8vIEFkZCBldmVudHMgdG8gZWxlbWVudHNcblxuY29uc3QgbWV0aG9kcyA9IFsnY2xpY2snLCAnZGJsY2xpY2snLCAnbW91c2Vkb3duJywgJ21vdXNldXAnLCAnbW91c2VvdmVyJywgJ21vdXNlb3V0JywgJ21vdXNlbW92ZScsICdtb3VzZWVudGVyJywgJ21vdXNlbGVhdmUnLCAndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hsZWF2ZScsICd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCddLnJlZHVjZShmdW5jdGlvbiAobGFzdCwgZXZlbnQpIHtcbiAgLy8gYWRkIGV2ZW50IHRvIEVsZW1lbnRcbiAgY29uc3QgZm4gPSBmdW5jdGlvbiAoZikge1xuICAgIGlmIChmID09PSBudWxsKSB7XG4gICAgICB0aGlzLm9mZihldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub24oZXZlbnQsIGYpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIGxhc3RbZXZlbnRdID0gZm47XG4gIHJldHVybiBsYXN0O1xufSwge30pO1xucmVnaXN0ZXJNZXRob2RzKCdFbGVtZW50JywgbWV0aG9kcyk7XG5cbmZ1bmN0aW9uIHVudHJhbnNmb3JtKCkge1xuICByZXR1cm4gdGhpcy5hdHRyKCd0cmFuc2Zvcm0nLCBudWxsKTtcbn0gLy8gbWVyZ2UgdGhlIHdob2xlIHRyYW5zZm9ybWF0aW9uIGNoYWluIGludG8gb25lIG1hdHJpeCBhbmQgcmV0dXJucyBpdFxuXG5mdW5jdGlvbiBtYXRyaXhpZnkoKSB7XG4gIGNvbnN0IG1hdHJpeCA9ICh0aGlzLmF0dHIoJ3RyYW5zZm9ybScpIHx8ICcnIC8vIHNwbGl0IHRyYW5zZm9ybWF0aW9uc1xuICApLnNwbGl0KHRyYW5zZm9ybXMpLnNsaWNlKDAsIC0xKS5tYXAoZnVuY3Rpb24gKHN0cikge1xuICAgIC8vIGdlbmVyYXRlIGtleSA9PiB2YWx1ZSBwYWlyc1xuICAgIGNvbnN0IGt2ID0gc3RyLnRyaW0oKS5zcGxpdCgnKCcpO1xuICAgIHJldHVybiBba3ZbMF0sIGt2WzFdLnNwbGl0KGRlbGltaXRlcikubWFwKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cik7XG4gICAgfSldO1xuICB9KS5yZXZlcnNlKCkgLy8gbWVyZ2UgZXZlcnkgdHJhbnNmb3JtYXRpb24gaW50byBvbmUgbWF0cml4XG4gIC5yZWR1Y2UoZnVuY3Rpb24gKG1hdHJpeCwgdHJhbnNmb3JtKSB7XG4gICAgaWYgKHRyYW5zZm9ybVswXSA9PT0gJ21hdHJpeCcpIHtcbiAgICAgIHJldHVybiBtYXRyaXgubG11bHRpcGx5KE1hdHJpeC5mcm9tQXJyYXkodHJhbnNmb3JtWzFdKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdHJpeFt0cmFuc2Zvcm1bMF1dLmFwcGx5KG1hdHJpeCwgdHJhbnNmb3JtWzFdKTtcbiAgfSwgbmV3IE1hdHJpeCgpKTtcbiAgcmV0dXJuIG1hdHJpeDtcbn0gLy8gYWRkIGFuIGVsZW1lbnQgdG8gYW5vdGhlciBwYXJlbnQgd2l0aG91dCBjaGFuZ2luZyB0aGUgdmlzdWFsIHJlcHJlc2VudGF0aW9uIG9uIHRoZSBzY3JlZW5cblxuZnVuY3Rpb24gdG9QYXJlbnQocGFyZW50LCBpKSB7XG4gIGlmICh0aGlzID09PSBwYXJlbnQpIHJldHVybiB0aGlzO1xuICBjb25zdCBjdG0gPSB0aGlzLnNjcmVlbkNUTSgpO1xuICBjb25zdCBwQ3RtID0gcGFyZW50LnNjcmVlbkNUTSgpLmludmVyc2UoKTtcbiAgdGhpcy5hZGRUbyhwYXJlbnQsIGkpLnVudHJhbnNmb3JtKCkudHJhbnNmb3JtKHBDdG0ubXVsdGlwbHkoY3RtKSk7XG4gIHJldHVybiB0aGlzO1xufSAvLyBzYW1lIGFzIGFib3ZlIHdpdGggcGFyZW50IGVxdWFscyByb290LXN2Z1xuXG5mdW5jdGlvbiB0b1Jvb3QoaSkge1xuICByZXR1cm4gdGhpcy50b1BhcmVudCh0aGlzLnJvb3QoKSwgaSk7XG59IC8vIEFkZCB0cmFuc2Zvcm1hdGlvbnNcblxuZnVuY3Rpb24gdHJhbnNmb3JtKG8sIHJlbGF0aXZlKSB7XG4gIC8vIEFjdCBhcyBhIGdldHRlciBpZiBubyBvYmplY3Qgd2FzIHBhc3NlZFxuICBpZiAobyA9PSBudWxsIHx8IHR5cGVvZiBvID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGRlY29tcG9zZWQgPSBuZXcgTWF0cml4KHRoaXMpLmRlY29tcG9zZSgpO1xuICAgIHJldHVybiBvID09IG51bGwgPyBkZWNvbXBvc2VkIDogZGVjb21wb3NlZFtvXTtcbiAgfVxuXG4gIGlmICghTWF0cml4LmlzTWF0cml4TGlrZShvKSkge1xuICAgIC8vIFNldCB0aGUgb3JpZ2luIGFjY29yZGluZyB0byB0aGUgZGVmaW5lZCB0cmFuc2Zvcm1cbiAgICBvID0geyAuLi5vLFxuICAgICAgb3JpZ2luOiBnZXRPcmlnaW4obywgdGhpcylcbiAgICB9O1xuICB9IC8vIFRoZSB1c2VyIGNhbiBwYXNzIGEgYm9vbGVhbiwgYW4gRWxlbWVudCBvciBhbiBNYXRyaXggb3Igbm90aGluZ1xuXG5cbiAgY29uc3QgY2xlYW5SZWxhdGl2ZSA9IHJlbGF0aXZlID09PSB0cnVlID8gdGhpcyA6IHJlbGF0aXZlIHx8IGZhbHNlO1xuICBjb25zdCByZXN1bHQgPSBuZXcgTWF0cml4KGNsZWFuUmVsYXRpdmUpLnRyYW5zZm9ybShvKTtcbiAgcmV0dXJuIHRoaXMuYXR0cigndHJhbnNmb3JtJywgcmVzdWx0KTtcbn1cbnJlZ2lzdGVyTWV0aG9kcygnRWxlbWVudCcsIHtcbiAgdW50cmFuc2Zvcm0sXG4gIG1hdHJpeGlmeSxcbiAgdG9QYXJlbnQsXG4gIHRvUm9vdCxcbiAgdHJhbnNmb3JtXG59KTtcblxuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGZsYXR0ZW4ocGFyZW50ID0gdGhpcywgaW5kZXgpIHtcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDb250YWluZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmxhdHRlbigpLnVuZ3JvdXAoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVuZ3JvdXAocGFyZW50ID0gdGhpcy5wYXJlbnQoKSwgaW5kZXggPSBwYXJlbnQuaW5kZXgodGhpcykpIHtcbiAgICAvLyB3aGVuIHBhcmVudCAhPSB0aGlzLCB3ZSB3YW50IGFwcGVuZCBhbGwgZWxlbWVudHMgdG8gdGhlIGVuZFxuICAgIGluZGV4ID0gaW5kZXggPT09IC0xID8gcGFyZW50LmNoaWxkcmVuKCkubGVuZ3RoIDogaW5kZXg7XG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpLCBjaGlsZHJlbikge1xuICAgICAgLy8gcmV2ZXJzZSBlYWNoXG4gICAgICByZXR1cm4gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gaSAtIDFdLnRvUGFyZW50KHBhcmVudCwgaW5kZXgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJlbW92ZSgpO1xuICB9XG5cbn1cbnJlZ2lzdGVyKENvbnRhaW5lciwgJ0NvbnRhaW5lcicpO1xuXG5jbGFzcyBEZWZzIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdkZWZzJywgbm9kZSksIGF0dHJzKTtcbiAgfVxuXG4gIGZsYXR0ZW4oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bmdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbnJlZ2lzdGVyKERlZnMsICdEZWZzJyk7XG5cbmNsYXNzIFNoYXBlIGV4dGVuZHMgRWxlbWVudCB7fVxucmVnaXN0ZXIoU2hhcGUsICdTaGFwZScpO1xuXG5mdW5jdGlvbiByeChyeCkge1xuICByZXR1cm4gdGhpcy5hdHRyKCdyeCcsIHJ4KTtcbn0gLy8gUmFkaXVzIHkgdmFsdWVcblxuZnVuY3Rpb24gcnkocnkpIHtcbiAgcmV0dXJuIHRoaXMuYXR0cigncnknLCByeSk7XG59IC8vIE1vdmUgb3ZlciB4LWF4aXNcblxuZnVuY3Rpb24geCQzKHgpIHtcbiAgcmV0dXJuIHggPT0gbnVsbCA/IHRoaXMuY3goKSAtIHRoaXMucngoKSA6IHRoaXMuY3goeCArIHRoaXMucngoKSk7XG59IC8vIE1vdmUgb3ZlciB5LWF4aXNcblxuZnVuY3Rpb24geSQzKHkpIHtcbiAgcmV0dXJuIHkgPT0gbnVsbCA/IHRoaXMuY3koKSAtIHRoaXMucnkoKSA6IHRoaXMuY3koeSArIHRoaXMucnkoKSk7XG59IC8vIE1vdmUgYnkgY2VudGVyIG92ZXIgeC1heGlzXG5cbmZ1bmN0aW9uIGN4JDEoeCkge1xuICByZXR1cm4gdGhpcy5hdHRyKCdjeCcsIHgpO1xufSAvLyBNb3ZlIGJ5IGNlbnRlciBvdmVyIHktYXhpc1xuXG5mdW5jdGlvbiBjeSQxKHkpIHtcbiAgcmV0dXJuIHRoaXMuYXR0cignY3knLCB5KTtcbn0gLy8gU2V0IHdpZHRoIG9mIGVsZW1lbnRcblxuZnVuY3Rpb24gd2lkdGgkMih3aWR0aCkge1xuICByZXR1cm4gd2lkdGggPT0gbnVsbCA/IHRoaXMucngoKSAqIDIgOiB0aGlzLnJ4KG5ldyBTVkdOdW1iZXIod2lkdGgpLmRpdmlkZSgyKSk7XG59IC8vIFNldCBoZWlnaHQgb2YgZWxlbWVudFxuXG5mdW5jdGlvbiBoZWlnaHQkMihoZWlnaHQpIHtcbiAgcmV0dXJuIGhlaWdodCA9PSBudWxsID8gdGhpcy5yeSgpICogMiA6IHRoaXMucnkobmV3IFNWR051bWJlcihoZWlnaHQpLmRpdmlkZSgyKSk7XG59XG5cbnZhciBjaXJjbGVkID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIHJ4OiByeCxcbiAgcnk6IHJ5LFxuICB4OiB4JDMsXG4gIHk6IHkkMyxcbiAgY3g6IGN4JDEsXG4gIGN5OiBjeSQxLFxuICB3aWR0aDogd2lkdGgkMixcbiAgaGVpZ2h0OiBoZWlnaHQkMlxufTtcblxuY2xhc3MgRWxsaXBzZSBleHRlbmRzIFNoYXBlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdlbGxpcHNlJywgbm9kZSksIGF0dHJzKTtcbiAgfVxuXG4gIHNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHAgPSBwcm9wb3J0aW9uYWxTaXplKHRoaXMsIHdpZHRoLCBoZWlnaHQpO1xuICAgIHJldHVybiB0aGlzLnJ4KG5ldyBTVkdOdW1iZXIocC53aWR0aCkuZGl2aWRlKDIpKS5yeShuZXcgU1ZHTnVtYmVyKHAuaGVpZ2h0KS5kaXZpZGUoMikpO1xuICB9XG5cbn1cbmV4dGVuZChFbGxpcHNlLCBjaXJjbGVkKTtcbnJlZ2lzdGVyTWV0aG9kcygnQ29udGFpbmVyJywge1xuICAvLyBDcmVhdGUgYW4gZWxsaXBzZVxuICBlbGxpcHNlOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAod2lkdGggPSAwLCBoZWlnaHQgPSB3aWR0aCkge1xuICAgIHJldHVybiB0aGlzLnB1dChuZXcgRWxsaXBzZSgpKS5zaXplKHdpZHRoLCBoZWlnaHQpLm1vdmUoMCwgMCk7XG4gIH0pXG59KTtcbnJlZ2lzdGVyKEVsbGlwc2UsICdFbGxpcHNlJyk7XG5cbmNsYXNzIEZyYWdtZW50IGV4dGVuZHMgRG9tIHtcbiAgY29uc3RydWN0b3Iobm9kZSA9IGdsb2JhbHMuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpKSB7XG4gICAgc3VwZXIobm9kZSk7XG4gIH0gLy8gSW1wb3J0IC8gRXhwb3J0IHJhdyB4bWxcblxuXG4gIHhtbCh4bWxPckZuLCBvdXRlclhNTCwgbnMpIHtcbiAgICBpZiAodHlwZW9mIHhtbE9yRm4gPT09ICdib29sZWFuJykge1xuICAgICAgbnMgPSBvdXRlclhNTDtcbiAgICAgIG91dGVyWE1MID0geG1sT3JGbjtcbiAgICAgIHhtbE9yRm4gPSBudWxsO1xuICAgIH0gLy8gYmVjYXVzZSB0aGlzIGlzIGEgZnJhZ21lbnQgd2UgaGF2ZSB0byBwdXQgYWxsIGVsZW1lbnRzIGludG8gYSB3cmFwcGVyIGZpcnN0XG4gICAgLy8gYmVmb3JlIHdlIGNhbiBnZXQgdGhlIGlubmVyWE1MIGZyb20gaXRcblxuXG4gICAgaWYgKHhtbE9yRm4gPT0gbnVsbCB8fCB0eXBlb2YgeG1sT3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBEb20oY3JlYXRlKCd3cmFwcGVyJywgbnMpKTtcbiAgICAgIHdyYXBwZXIuYWRkKHRoaXMubm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgcmV0dXJuIHdyYXBwZXIueG1sKGZhbHNlLCBucyk7XG4gICAgfSAvLyBBY3QgYXMgc2V0dGVyIGlmIHdlIGdvdCBhIHN0cmluZ1xuXG5cbiAgICByZXR1cm4gc3VwZXIueG1sKHhtbE9yRm4sIGZhbHNlLCBucyk7XG4gIH1cblxufVxuXG5yZWdpc3RlcihGcmFnbWVudCwgJ0ZyYWdtZW50Jyk7XG5cbmZ1bmN0aW9uIGZyb20oeCwgeSkge1xuICByZXR1cm4gKHRoaXMuX2VsZW1lbnQgfHwgdGhpcykudHlwZSA9PT0gJ3JhZGlhbEdyYWRpZW50JyA/IHRoaXMuYXR0cih7XG4gICAgZng6IG5ldyBTVkdOdW1iZXIoeCksXG4gICAgZnk6IG5ldyBTVkdOdW1iZXIoeSlcbiAgfSkgOiB0aGlzLmF0dHIoe1xuICAgIHgxOiBuZXcgU1ZHTnVtYmVyKHgpLFxuICAgIHkxOiBuZXcgU1ZHTnVtYmVyKHkpXG4gIH0pO1xufVxuZnVuY3Rpb24gdG8oeCwgeSkge1xuICByZXR1cm4gKHRoaXMuX2VsZW1lbnQgfHwgdGhpcykudHlwZSA9PT0gJ3JhZGlhbEdyYWRpZW50JyA/IHRoaXMuYXR0cih7XG4gICAgY3g6IG5ldyBTVkdOdW1iZXIoeCksXG4gICAgY3k6IG5ldyBTVkdOdW1iZXIoeSlcbiAgfSkgOiB0aGlzLmF0dHIoe1xuICAgIHgyOiBuZXcgU1ZHTnVtYmVyKHgpLFxuICAgIHkyOiBuZXcgU1ZHTnVtYmVyKHkpXG4gIH0pO1xufVxuXG52YXIgZ3JhZGllbnRlZCA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBmcm9tOiBmcm9tLFxuICB0bzogdG9cbn07XG5cbmNsYXNzIEdyYWRpZW50IGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IodHlwZSwgYXR0cnMpIHtcbiAgICBzdXBlcihub2RlT3JOZXcodHlwZSArICdHcmFkaWVudCcsIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IG51bGwgOiB0eXBlKSwgYXR0cnMpO1xuICB9IC8vIGN1c3RvbSBhdHRyIHRvIGhhbmRsZSB0cmFuc2Zvcm1cblxuXG4gIGF0dHIoYSwgYiwgYykge1xuICAgIGlmIChhID09PSAndHJhbnNmb3JtJykgYSA9ICdncmFkaWVudFRyYW5zZm9ybSc7XG4gICAgcmV0dXJuIHN1cGVyLmF0dHIoYSwgYiwgYyk7XG4gIH1cblxuICBiYm94KCkge1xuICAgIHJldHVybiBuZXcgQm94KCk7XG4gIH1cblxuICB0YXJnZXRzKCkge1xuICAgIHJldHVybiBiYXNlRmluZCgnc3ZnIFtmaWxsKj1cIicgKyB0aGlzLmlkKCkgKyAnXCJdJyk7XG4gIH0gLy8gQWxpYXMgc3RyaW5nIGNvbnZlcnNpb24gdG8gZmlsbFxuXG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsKCk7XG4gIH0gLy8gVXBkYXRlIGdyYWRpZW50XG5cblxuICB1cGRhdGUoYmxvY2spIHtcbiAgICAvLyByZW1vdmUgYWxsIHN0b3BzXG4gICAgdGhpcy5jbGVhcigpOyAvLyBpbnZva2UgcGFzc2VkIGJsb2NrXG5cbiAgICBpZiAodHlwZW9mIGJsb2NrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBibG9jay5jYWxsKHRoaXMsIHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFJldHVybiB0aGUgZmlsbCBpZFxuXG5cbiAgdXJsKCkge1xuICAgIHJldHVybiAndXJsKFwiIycgKyB0aGlzLmlkKCkgKyAnXCIpJztcbiAgfVxuXG59XG5leHRlbmQoR3JhZGllbnQsIGdyYWRpZW50ZWQpO1xucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgLy8gQ3JlYXRlIGdyYWRpZW50IGVsZW1lbnQgaW4gZGVmc1xuICAgIGdyYWRpZW50KC4uLmFyZ3MpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZnMoKS5ncmFkaWVudCguLi5hcmdzKTtcbiAgICB9XG5cbiAgfSxcbiAgLy8gZGVmaW5lIGdyYWRpZW50XG4gIERlZnM6IHtcbiAgICBncmFkaWVudDogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHR5cGUsIGJsb2NrKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IEdyYWRpZW50KHR5cGUpKS51cGRhdGUoYmxvY2spO1xuICAgIH0pXG4gIH1cbn0pO1xucmVnaXN0ZXIoR3JhZGllbnQsICdHcmFkaWVudCcpO1xuXG5jbGFzcyBQYXR0ZXJuIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygncGF0dGVybicsIG5vZGUpLCBhdHRycyk7XG4gIH0gLy8gY3VzdG9tIGF0dHIgdG8gaGFuZGxlIHRyYW5zZm9ybVxuXG5cbiAgYXR0cihhLCBiLCBjKSB7XG4gICAgaWYgKGEgPT09ICd0cmFuc2Zvcm0nKSBhID0gJ3BhdHRlcm5UcmFuc2Zvcm0nO1xuICAgIHJldHVybiBzdXBlci5hdHRyKGEsIGIsIGMpO1xuICB9XG5cbiAgYmJveCgpIHtcbiAgICByZXR1cm4gbmV3IEJveCgpO1xuICB9XG5cbiAgdGFyZ2V0cygpIHtcbiAgICByZXR1cm4gYmFzZUZpbmQoJ3N2ZyBbZmlsbCo9XCInICsgdGhpcy5pZCgpICsgJ1wiXScpO1xuICB9IC8vIEFsaWFzIHN0cmluZyBjb252ZXJzaW9uIHRvIGZpbGxcblxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnVybCgpO1xuICB9IC8vIFVwZGF0ZSBwYXR0ZXJuIGJ5IHJlYnVpbGRpbmdcblxuXG4gIHVwZGF0ZShibG9jaykge1xuICAgIC8vIHJlbW92ZSBjb250ZW50XG4gICAgdGhpcy5jbGVhcigpOyAvLyBpbnZva2UgcGFzc2VkIGJsb2NrXG5cbiAgICBpZiAodHlwZW9mIGJsb2NrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBibG9jay5jYWxsKHRoaXMsIHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFJldHVybiB0aGUgZmlsbCBpZFxuXG5cbiAgdXJsKCkge1xuICAgIHJldHVybiAndXJsKFwiIycgKyB0aGlzLmlkKCkgKyAnXCIpJztcbiAgfVxuXG59XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICAvLyBDcmVhdGUgcGF0dGVybiBlbGVtZW50IGluIGRlZnNcbiAgICBwYXR0ZXJuKC4uLmFyZ3MpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZnMoKS5wYXR0ZXJuKC4uLmFyZ3MpO1xuICAgIH1cblxuICB9LFxuICBEZWZzOiB7XG4gICAgcGF0dGVybjogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIGJsb2NrKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFBhdHRlcm4oKSkudXBkYXRlKGJsb2NrKS5hdHRyKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgcGF0dGVyblVuaXRzOiAndXNlclNwYWNlT25Vc2UnXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG59KTtcbnJlZ2lzdGVyKFBhdHRlcm4sICdQYXR0ZXJuJyk7XG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgU2hhcGUge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ2ltYWdlJywgbm9kZSksIGF0dHJzKTtcbiAgfSAvLyAocmUpbG9hZCBpbWFnZVxuXG5cbiAgbG9hZCh1cmwsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCF1cmwpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IGltZyA9IG5ldyBnbG9iYWxzLndpbmRvdy5JbWFnZSgpO1xuICAgIG9uKGltZywgJ2xvYWQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3QgcCA9IHRoaXMucGFyZW50KFBhdHRlcm4pOyAvLyBlbnN1cmUgaW1hZ2Ugc2l6ZVxuXG4gICAgICBpZiAodGhpcy53aWR0aCgpID09PSAwICYmIHRoaXMuaGVpZ2h0KCkgPT09IDApIHtcbiAgICAgICAgdGhpcy5zaXplKGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwIGluc3RhbmNlb2YgUGF0dGVybikge1xuICAgICAgICAvLyBlbnN1cmUgcGF0dGVybiBzaXplIGlmIG5vdCBzZXRcbiAgICAgICAgaWYgKHAud2lkdGgoKSA9PT0gMCAmJiBwLmhlaWdodCgpID09PSAwKSB7XG4gICAgICAgICAgcC5zaXplKHRoaXMud2lkdGgoKSwgdGhpcy5oZWlnaHQoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGUpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICAgIG9uKGltZywgJ2xvYWQgZXJyb3InLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBkb250IGZvcmdldCB0byB1bmJpbmQgbWVtb3J5IGxlYWtpbmcgZXZlbnRzXG4gICAgICBvZmYoaW1nKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdocmVmJywgaW1nLnNyYyA9IHVybCwgeGxpbmspO1xuICB9XG5cbn1cbnJlZ2lzdGVyQXR0ckhvb2soZnVuY3Rpb24gKGF0dHIsIHZhbCwgX3RoaXMpIHtcbiAgLy8gY29udmVydCBpbWFnZSBmaWxsIGFuZCBzdHJva2UgdG8gcGF0dGVybnNcbiAgaWYgKGF0dHIgPT09ICdmaWxsJyB8fCBhdHRyID09PSAnc3Ryb2tlJykge1xuICAgIGlmIChpc0ltYWdlLnRlc3QodmFsKSkge1xuICAgICAgdmFsID0gX3RoaXMucm9vdCgpLmRlZnMoKS5pbWFnZSh2YWwpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh2YWwgaW5zdGFuY2VvZiBJbWFnZSkge1xuICAgIHZhbCA9IF90aGlzLnJvb3QoKS5kZWZzKCkucGF0dGVybigwLCAwLCBwYXR0ZXJuID0+IHtcbiAgICAgIHBhdHRlcm4uYWRkKHZhbCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufSk7XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICAvLyBjcmVhdGUgaW1hZ2UgZWxlbWVudCwgbG9hZCBpbWFnZSBhbmQgc2V0IGl0cyBzaXplXG4gICAgaW1hZ2U6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uIChzb3VyY2UsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IEltYWdlKCkpLnNpemUoMCwgMCkubG9hZChzb3VyY2UsIGNhbGxiYWNrKTtcbiAgICB9KVxuICB9XG59KTtcbnJlZ2lzdGVyKEltYWdlLCAnSW1hZ2UnKTtcblxuY2xhc3MgUG9pbnRBcnJheSBleHRlbmRzIFNWR0FycmF5IHtcbiAgLy8gR2V0IGJvdW5kaW5nIGJveCBvZiBwb2ludHNcbiAgYmJveCgpIHtcbiAgICBsZXQgbWF4WCA9IC1JbmZpbml0eTtcbiAgICBsZXQgbWF4WSA9IC1JbmZpbml0eTtcbiAgICBsZXQgbWluWCA9IEluZmluaXR5O1xuICAgIGxldCBtaW5ZID0gSW5maW5pdHk7XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgbWF4WCA9IE1hdGgubWF4KGVsWzBdLCBtYXhYKTtcbiAgICAgIG1heFkgPSBNYXRoLm1heChlbFsxXSwgbWF4WSk7XG4gICAgICBtaW5YID0gTWF0aC5taW4oZWxbMF0sIG1pblgpO1xuICAgICAgbWluWSA9IE1hdGgubWluKGVsWzFdLCBtaW5ZKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IEJveChtaW5YLCBtaW5ZLCBtYXhYIC0gbWluWCwgbWF4WSAtIG1pblkpO1xuICB9IC8vIE1vdmUgcG9pbnQgc3RyaW5nXG5cblxuICBtb3ZlKHgsIHkpIHtcbiAgICBjb25zdCBib3ggPSB0aGlzLmJib3goKTsgLy8gZ2V0IHJlbGF0aXZlIG9mZnNldFxuXG4gICAgeCAtPSBib3gueDtcbiAgICB5IC09IGJveC55OyAvLyBtb3ZlIGV2ZXJ5IHBvaW50XG5cbiAgICBpZiAoIWlzTmFOKHgpICYmICFpc05hTih5KSkge1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdGhpc1tpXSA9IFt0aGlzW2ldWzBdICsgeCwgdGhpc1tpXVsxXSArIHldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFBhcnNlIHBvaW50IHN0cmluZyBhbmQgZmxhdCBhcnJheVxuXG5cbiAgcGFyc2UoYXJyYXkgPSBbMCwgMF0pIHtcbiAgICBjb25zdCBwb2ludHMgPSBbXTsgLy8gaWYgaXQgaXMgYW4gYXJyYXksIHdlIGZsYXR0ZW4gaXQgYW5kIHRoZXJlZm9yZSBjbG9uZSBpdCB0byAxIGRlcHRoc1xuXG4gICAgaWYgKGFycmF5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGFycmF5ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBFbHNlLCBpdCBpcyBjb25zaWRlcmVkIGFzIGEgc3RyaW5nXG4gICAgICAvLyBwYXJzZSBwb2ludHNcbiAgICAgIGFycmF5ID0gYXJyYXkudHJpbSgpLnNwbGl0KGRlbGltaXRlcikubWFwKHBhcnNlRmxvYXQpO1xuICAgIH0gLy8gdmFsaWRhdGUgcG9pbnRzIC0gaHR0cHM6Ly9zdmd3Zy5vcmcvc3ZnMi1kcmFmdC9zaGFwZXMuaHRtbCNEYXRhVHlwZVBvaW50c1xuICAgIC8vIE9kZCBudW1iZXIgb2YgY29vcmRpbmF0ZXMgaXMgYW4gZXJyb3IuIEluIHN1Y2ggY2FzZXMsIGRyb3AgdGhlIGxhc3Qgb2RkIGNvb3JkaW5hdGUuXG5cblxuICAgIGlmIChhcnJheS5sZW5ndGggJSAyICE9PSAwKSBhcnJheS5wb3AoKTsgLy8gd3JhcCBwb2ludHMgaW4gdHdvLXR1cGxlc1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSA9IGkgKyAyKSB7XG4gICAgICBwb2ludHMucHVzaChbYXJyYXlbaV0sIGFycmF5W2kgKyAxXV0pO1xuICAgIH1cblxuICAgIHJldHVybiBwb2ludHM7XG4gIH0gLy8gUmVzaXplIHBvbHkgc3RyaW5nXG5cblxuICBzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBsZXQgaTtcbiAgICBjb25zdCBib3ggPSB0aGlzLmJib3goKTsgLy8gcmVjYWxjdWxhdGUgcG9zaXRpb24gb2YgYWxsIHBvaW50cyBhY2NvcmRpbmcgdG8gbmV3IHNpemVcblxuICAgIGZvciAoaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmIChib3gud2lkdGgpIHRoaXNbaV1bMF0gPSAodGhpc1tpXVswXSAtIGJveC54KSAqIHdpZHRoIC8gYm94LndpZHRoICsgYm94Lng7XG4gICAgICBpZiAoYm94LmhlaWdodCkgdGhpc1tpXVsxXSA9ICh0aGlzW2ldWzFdIC0gYm94LnkpICogaGVpZ2h0IC8gYm94LmhlaWdodCArIGJveC55O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIENvbnZlcnQgYXJyYXkgdG8gbGluZSBvYmplY3RcblxuXG4gIHRvTGluZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDE6IHRoaXNbMF1bMF0sXG4gICAgICB5MTogdGhpc1swXVsxXSxcbiAgICAgIHgyOiB0aGlzWzFdWzBdLFxuICAgICAgeTI6IHRoaXNbMV1bMV1cbiAgICB9O1xuICB9IC8vIENvbnZlcnQgYXJyYXkgdG8gc3RyaW5nXG5cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdOyAvLyBjb252ZXJ0IHRvIGEgcG9seSBwb2ludCBzdHJpbmdcblxuICAgIGZvciAobGV0IGkgPSAwLCBpbCA9IHRoaXMubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuICAgICAgYXJyYXkucHVzaCh0aGlzW2ldLmpvaW4oJywnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5LmpvaW4oJyAnKTtcbiAgfVxuXG4gIHRyYW5zZm9ybShtKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS50cmFuc2Zvcm1PKG0pO1xuICB9IC8vIHRyYW5zZm9ybSBwb2ludHMgd2l0aCBtYXRyaXggKHNpbWlsYXIgdG8gUG9pbnQudHJhbnNmb3JtKVxuXG5cbiAgdHJhbnNmb3JtTyhtKSB7XG4gICAgaWYgKCFNYXRyaXguaXNNYXRyaXhMaWtlKG0pKSB7XG4gICAgICBtID0gbmV3IE1hdHJpeChtKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGg7IGktLTspIHtcbiAgICAgIC8vIFBlcmZvcm0gdGhlIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgICAgY29uc3QgW3gsIHldID0gdGhpc1tpXTtcbiAgICAgIHRoaXNbaV1bMF0gPSBtLmEgKiB4ICsgbS5jICogeSArIG0uZTtcbiAgICAgIHRoaXNbaV1bMV0gPSBtLmIgKiB4ICsgbS5kICogeSArIG0uZjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cbmNvbnN0IE1vcnBoQXJyYXkgPSBQb2ludEFycmF5OyAvLyBNb3ZlIGJ5IGxlZnQgdG9wIGNvcm5lciBvdmVyIHgtYXhpc1xuXG5mdW5jdGlvbiB4JDIoeCkge1xuICByZXR1cm4geCA9PSBudWxsID8gdGhpcy5iYm94KCkueCA6IHRoaXMubW92ZSh4LCB0aGlzLmJib3goKS55KTtcbn0gLy8gTW92ZSBieSBsZWZ0IHRvcCBjb3JuZXIgb3ZlciB5LWF4aXNcblxuZnVuY3Rpb24geSQyKHkpIHtcbiAgcmV0dXJuIHkgPT0gbnVsbCA/IHRoaXMuYmJveCgpLnkgOiB0aGlzLm1vdmUodGhpcy5iYm94KCkueCwgeSk7XG59IC8vIFNldCB3aWR0aCBvZiBlbGVtZW50XG5cbmZ1bmN0aW9uIHdpZHRoJDEod2lkdGgpIHtcbiAgY29uc3QgYiA9IHRoaXMuYmJveCgpO1xuICByZXR1cm4gd2lkdGggPT0gbnVsbCA/IGIud2lkdGggOiB0aGlzLnNpemUod2lkdGgsIGIuaGVpZ2h0KTtcbn0gLy8gU2V0IGhlaWdodCBvZiBlbGVtZW50XG5cbmZ1bmN0aW9uIGhlaWdodCQxKGhlaWdodCkge1xuICBjb25zdCBiID0gdGhpcy5iYm94KCk7XG4gIHJldHVybiBoZWlnaHQgPT0gbnVsbCA/IGIuaGVpZ2h0IDogdGhpcy5zaXplKGIud2lkdGgsIGhlaWdodCk7XG59XG5cbnZhciBwb2ludGVkID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIE1vcnBoQXJyYXk6IE1vcnBoQXJyYXksXG4gIHg6IHgkMixcbiAgeTogeSQyLFxuICB3aWR0aDogd2lkdGgkMSxcbiAgaGVpZ2h0OiBoZWlnaHQkMVxufTtcblxuY2xhc3MgTGluZSBleHRlbmRzIFNoYXBlIHtcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygnbGluZScsIG5vZGUpLCBhdHRycyk7XG4gIH0gLy8gR2V0IGFycmF5XG5cblxuICBhcnJheSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50QXJyYXkoW1t0aGlzLmF0dHIoJ3gxJyksIHRoaXMuYXR0cigneTEnKV0sIFt0aGlzLmF0dHIoJ3gyJyksIHRoaXMuYXR0cigneTInKV1dKTtcbiAgfSAvLyBNb3ZlIGJ5IGxlZnQgdG9wIGNvcm5lclxuXG5cbiAgbW92ZSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cih0aGlzLmFycmF5KCkubW92ZSh4LCB5KS50b0xpbmUoKSk7XG4gIH0gLy8gT3ZlcndyaXRlIG5hdGl2ZSBwbG90KCkgbWV0aG9kXG5cblxuICBwbG90KHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgaWYgKHgxID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmFycmF5KCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgeTEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB4MSA9IHtcbiAgICAgICAgeDEsXG4gICAgICAgIHkxLFxuICAgICAgICB4MixcbiAgICAgICAgeTJcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHgxID0gbmV3IFBvaW50QXJyYXkoeDEpLnRvTGluZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmF0dHIoeDEpO1xuICB9IC8vIFNldCBlbGVtZW50IHNpemUgdG8gZ2l2ZW4gd2lkdGggYW5kIGhlaWdodFxuXG5cbiAgc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgcCA9IHByb3BvcnRpb25hbFNpemUodGhpcywgd2lkdGgsIGhlaWdodCk7XG4gICAgcmV0dXJuIHRoaXMuYXR0cih0aGlzLmFycmF5KCkuc2l6ZShwLndpZHRoLCBwLmhlaWdodCkudG9MaW5lKCkpO1xuICB9XG5cbn1cbmV4dGVuZChMaW5lLCBwb2ludGVkKTtcbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIC8vIENyZWF0ZSBhIGxpbmUgZWxlbWVudFxuICAgIGxpbmU6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgcGxvdCBpcyBjYWxsZWQgYXMgYSBzZXR0ZXJcbiAgICAgIC8vIHgxIGlzIG5vdCBuZWNlc3NhcmlseSBhIG51bWJlciwgaXQgY2FuIGFsc28gYmUgYW4gYXJyYXksIGEgc3RyaW5nIGFuZCBhIFBvaW50QXJyYXlcbiAgICAgIHJldHVybiBMaW5lLnByb3RvdHlwZS5wbG90LmFwcGx5KHRoaXMucHV0KG5ldyBMaW5lKCkpLCBhcmdzWzBdICE9IG51bGwgPyBhcmdzIDogWzAsIDAsIDAsIDBdKTtcbiAgICB9KVxuICB9XG59KTtcbnJlZ2lzdGVyKExpbmUsICdMaW5lJyk7XG5cbmNsYXNzIE1hcmtlciBleHRlbmRzIENvbnRhaW5lciB7XG4gIC8vIEluaXRpYWxpemUgbm9kZVxuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ21hcmtlcicsIG5vZGUpLCBhdHRycyk7XG4gIH0gLy8gU2V0IGhlaWdodCBvZiBlbGVtZW50XG5cblxuICBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignbWFya2VySGVpZ2h0JywgaGVpZ2h0KTtcbiAgfVxuXG4gIG9yaWVudChvcmllbnQpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdvcmllbnQnLCBvcmllbnQpO1xuICB9IC8vIFNldCBtYXJrZXIgcmVmWCBhbmQgcmVmWVxuXG5cbiAgcmVmKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdyZWZYJywgeCkuYXR0cigncmVmWScsIHkpO1xuICB9IC8vIFJldHVybiB0aGUgZmlsbCBpZFxuXG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICd1cmwoIycgKyB0aGlzLmlkKCkgKyAnKSc7XG4gIH0gLy8gVXBkYXRlIG1hcmtlclxuXG5cbiAgdXBkYXRlKGJsb2NrKSB7XG4gICAgLy8gcmVtb3ZlIGFsbCBjb250ZW50XG4gICAgdGhpcy5jbGVhcigpOyAvLyBpbnZva2UgcGFzc2VkIGJsb2NrXG5cbiAgICBpZiAodHlwZW9mIGJsb2NrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBibG9jay5jYWxsKHRoaXMsIHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFNldCB3aWR0aCBvZiBlbGVtZW50XG5cblxuICB3aWR0aCh3aWR0aCkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ21hcmtlcldpZHRoJywgd2lkdGgpO1xuICB9XG5cbn1cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIG1hcmtlciguLi5hcmdzKSB7XG4gICAgICAvLyBDcmVhdGUgbWFya2VyIGVsZW1lbnQgaW4gZGVmc1xuICAgICAgcmV0dXJuIHRoaXMuZGVmcygpLm1hcmtlciguLi5hcmdzKTtcbiAgICB9XG5cbiAgfSxcbiAgRGVmczoge1xuICAgIC8vIENyZWF0ZSBtYXJrZXJcbiAgICBtYXJrZXI6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCBibG9jaykge1xuICAgICAgLy8gU2V0IGRlZmF1bHQgdmlld2JveCB0byBtYXRjaCB0aGUgd2lkdGggYW5kIGhlaWdodCwgc2V0IHJlZiB0byBjeCBhbmQgY3kgYW5kIHNldCBvcmllbnQgdG8gYXV0b1xuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBNYXJrZXIoKSkuc2l6ZSh3aWR0aCwgaGVpZ2h0KS5yZWYod2lkdGggLyAyLCBoZWlnaHQgLyAyKS52aWV3Ym94KDAsIDAsIHdpZHRoLCBoZWlnaHQpLmF0dHIoJ29yaWVudCcsICdhdXRvJykudXBkYXRlKGJsb2NrKTtcbiAgICB9KVxuICB9LFxuICBtYXJrZXI6IHtcbiAgICAvLyBDcmVhdGUgYW5kIGF0dGFjaCBtYXJrZXJzXG4gICAgbWFya2VyKG1hcmtlciwgd2lkdGgsIGhlaWdodCwgYmxvY2spIHtcbiAgICAgIGxldCBhdHRyID0gWydtYXJrZXInXTsgLy8gQnVpbGQgYXR0cmlidXRlIG5hbWVcblxuICAgICAgaWYgKG1hcmtlciAhPT0gJ2FsbCcpIGF0dHIucHVzaChtYXJrZXIpO1xuICAgICAgYXR0ciA9IGF0dHIuam9pbignLScpOyAvLyBTZXQgbWFya2VyIGF0dHJpYnV0ZVxuXG4gICAgICBtYXJrZXIgPSBhcmd1bWVudHNbMV0gaW5zdGFuY2VvZiBNYXJrZXIgPyBhcmd1bWVudHNbMV0gOiB0aGlzLmRlZnMoKS5tYXJrZXIod2lkdGgsIGhlaWdodCwgYmxvY2spO1xuICAgICAgcmV0dXJuIHRoaXMuYXR0cihhdHRyLCBtYXJrZXIpO1xuICAgIH1cblxuICB9XG59KTtcbnJlZ2lzdGVyKE1hcmtlciwgJ01hcmtlcicpO1xuXG4vKioqXHJcbkJhc2UgQ2xhc3NcclxuPT09PT09PT09PVxyXG5UaGUgYmFzZSBzdGVwcGVyIGNsYXNzIHRoYXQgd2lsbCBiZVxyXG4qKiovXG5cbmZ1bmN0aW9uIG1ha2VTZXR0ZXJHZXR0ZXIoaywgZikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBpZiAodiA9PSBudWxsKSByZXR1cm4gdGhpc1trXTtcbiAgICB0aGlzW2tdID0gdjtcbiAgICBpZiAoZikgZi5jYWxsKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xufVxuXG5jb25zdCBlYXNpbmcgPSB7XG4gICctJzogZnVuY3Rpb24gKHBvcykge1xuICAgIHJldHVybiBwb3M7XG4gIH0sXG4gICc8Pic6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICByZXR1cm4gLU1hdGguY29zKHBvcyAqIE1hdGguUEkpIC8gMiArIDAuNTtcbiAgfSxcbiAgJz4nOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgcmV0dXJuIE1hdGguc2luKHBvcyAqIE1hdGguUEkgLyAyKTtcbiAgfSxcbiAgJzwnOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgcmV0dXJuIC1NYXRoLmNvcyhwb3MgKiBNYXRoLlBJIC8gMikgKyAxO1xuICB9LFxuICBiZXppZXI6IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5Mikge1xuICAgIC8vIHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLWVhc2luZy0xLyNjdWJpYy1iZXppZXItYWxnb1xuICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgaWYgKHQgPCAwKSB7XG4gICAgICAgIGlmICh4MSA+IDApIHtcbiAgICAgICAgICByZXR1cm4geTEgLyB4MSAqIHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoeDIgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHkyIC8geDIgKiB0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHQgPiAxKSB7XG4gICAgICAgIGlmICh4MiA8IDEpIHtcbiAgICAgICAgICByZXR1cm4gKDEgLSB5MikgLyAoMSAtIHgyKSAqIHQgKyAoeTIgLSB4MikgLyAoMSAtIHgyKTtcbiAgICAgICAgfSBlbHNlIGlmICh4MSA8IDEpIHtcbiAgICAgICAgICByZXR1cm4gKDEgLSB5MSkgLyAoMSAtIHgxKSAqIHQgKyAoeTEgLSB4MSkgLyAoMSAtIHgxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDMgKiB0ICogKDEgLSB0KSAqKiAyICogeTEgKyAzICogdCAqKiAyICogKDEgLSB0KSAqIHkyICsgdCAqKiAzO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIC8vIHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLWVhc2luZy0xLyNzdGVwLXRpbWluZy1mdW5jdGlvbi1hbGdvXG4gIHN0ZXBzOiBmdW5jdGlvbiAoc3RlcHMsIHN0ZXBQb3NpdGlvbiA9ICdlbmQnKSB7XG4gICAgLy8gZGVhbCB3aXRoIFwianVtcC1cIiBwcmVmaXhcbiAgICBzdGVwUG9zaXRpb24gPSBzdGVwUG9zaXRpb24uc3BsaXQoJy0nKS5yZXZlcnNlKClbMF07XG4gICAgbGV0IGp1bXBzID0gc3RlcHM7XG5cbiAgICBpZiAoc3RlcFBvc2l0aW9uID09PSAnbm9uZScpIHtcbiAgICAgIC0tanVtcHM7XG4gICAgfSBlbHNlIGlmIChzdGVwUG9zaXRpb24gPT09ICdib3RoJykge1xuICAgICAgKytqdW1wcztcbiAgICB9IC8vIFRoZSBiZWZvcmVGbGFnIGlzIGVzc2VudGlhbGx5IHVzZWxlc3NcblxuXG4gICAgcmV0dXJuICh0LCBiZWZvcmVGbGFnID0gZmFsc2UpID0+IHtcbiAgICAgIC8vIFN0ZXAgaXMgY2FsbGVkIGN1cnJlbnRTdGVwIGluIHJlZmVyZW5jZWQgdXJsXG4gICAgICBsZXQgc3RlcCA9IE1hdGguZmxvb3IodCAqIHN0ZXBzKTtcbiAgICAgIGNvbnN0IGp1bXBpbmcgPSB0ICogc3RlcCAlIDEgPT09IDA7XG5cbiAgICAgIGlmIChzdGVwUG9zaXRpb24gPT09ICdzdGFydCcgfHwgc3RlcFBvc2l0aW9uID09PSAnYm90aCcpIHtcbiAgICAgICAgKytzdGVwO1xuICAgICAgfVxuXG4gICAgICBpZiAoYmVmb3JlRmxhZyAmJiBqdW1waW5nKSB7XG4gICAgICAgIC0tc3RlcDtcbiAgICAgIH1cblxuICAgICAgaWYgKHQgPj0gMCAmJiBzdGVwIDwgMCkge1xuICAgICAgICBzdGVwID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHQgPD0gMSAmJiBzdGVwID4ganVtcHMpIHtcbiAgICAgICAgc3RlcCA9IGp1bXBzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RlcCAvIGp1bXBzO1xuICAgIH07XG4gIH1cbn07XG5jbGFzcyBTdGVwcGVyIHtcbiAgZG9uZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuLyoqKlxyXG5FYXNpbmcgRnVuY3Rpb25zXHJcbj09PT09PT09PT09PT09PT1cclxuKioqL1xuXG5jbGFzcyBFYXNlIGV4dGVuZHMgU3RlcHBlciB7XG4gIGNvbnN0cnVjdG9yKGZuID0gdGltZWxpbmUuZWFzZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lYXNlID0gZWFzaW5nW2ZuXSB8fCBmbjtcbiAgfVxuXG4gIHN0ZXAoZnJvbSwgdG8sIHBvcykge1xuICAgIGlmICh0eXBlb2YgZnJvbSAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBwb3MgPCAxID8gZnJvbSA6IHRvO1xuICAgIH1cblxuICAgIHJldHVybiBmcm9tICsgKHRvIC0gZnJvbSkgKiB0aGlzLmVhc2UocG9zKTtcbiAgfVxuXG59XG4vKioqXHJcbkNvbnRyb2xsZXIgVHlwZXNcclxuPT09PT09PT09PT09PT09PVxyXG4qKiovXG5cbmNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBTdGVwcGVyIHtcbiAgY29uc3RydWN0b3IoZm4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RlcHBlciA9IGZuO1xuICB9XG5cbiAgZG9uZShjKSB7XG4gICAgcmV0dXJuIGMuZG9uZTtcbiAgfVxuXG4gIHN0ZXAoY3VycmVudCwgdGFyZ2V0LCBkdCwgYykge1xuICAgIHJldHVybiB0aGlzLnN0ZXBwZXIoY3VycmVudCwgdGFyZ2V0LCBkdCwgYyk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiByZWNhbGN1bGF0ZSgpIHtcbiAgLy8gQXBwbHkgdGhlIGRlZmF1bHQgcGFyYW1ldGVyc1xuICBjb25zdCBkdXJhdGlvbiA9ICh0aGlzLl9kdXJhdGlvbiB8fCA1MDApIC8gMTAwMDtcbiAgY29uc3Qgb3ZlcnNob290ID0gdGhpcy5fb3ZlcnNob290IHx8IDA7IC8vIENhbGN1bGF0ZSB0aGUgUElEIG5hdHVyYWwgcmVzcG9uc2VcblxuICBjb25zdCBlcHMgPSAxZS0xMDtcbiAgY29uc3QgcGkgPSBNYXRoLlBJO1xuICBjb25zdCBvcyA9IE1hdGgubG9nKG92ZXJzaG9vdCAvIDEwMCArIGVwcyk7XG4gIGNvbnN0IHpldGEgPSAtb3MgLyBNYXRoLnNxcnQocGkgKiBwaSArIG9zICogb3MpO1xuICBjb25zdCB3biA9IDMuOSAvICh6ZXRhICogZHVyYXRpb24pOyAvLyBDYWxjdWxhdGUgdGhlIFNwcmluZyB2YWx1ZXNcblxuICB0aGlzLmQgPSAyICogemV0YSAqIHduO1xuICB0aGlzLmsgPSB3biAqIHduO1xufVxuXG5jbGFzcyBTcHJpbmcgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoZHVyYXRpb24gPSA1MDAsIG92ZXJzaG9vdCA9IDApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZHVyYXRpb24oZHVyYXRpb24pLm92ZXJzaG9vdChvdmVyc2hvb3QpO1xuICB9XG5cbiAgc3RlcChjdXJyZW50LCB0YXJnZXQsIGR0LCBjKSB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnc3RyaW5nJykgcmV0dXJuIGN1cnJlbnQ7XG4gICAgYy5kb25lID0gZHQgPT09IEluZmluaXR5O1xuICAgIGlmIChkdCA9PT0gSW5maW5pdHkpIHJldHVybiB0YXJnZXQ7XG4gICAgaWYgKGR0ID09PSAwKSByZXR1cm4gY3VycmVudDtcbiAgICBpZiAoZHQgPiAxMDApIGR0ID0gMTY7XG4gICAgZHQgLz0gMTAwMDsgLy8gR2V0IHRoZSBwcmV2aW91cyB2ZWxvY2l0eVxuXG4gICAgY29uc3QgdmVsb2NpdHkgPSBjLnZlbG9jaXR5IHx8IDA7IC8vIEFwcGx5IHRoZSBjb250cm9sIHRvIGdldCB0aGUgbmV3IHBvc2l0aW9uIGFuZCBzdG9yZSBpdFxuXG4gICAgY29uc3QgYWNjZWxlcmF0aW9uID0gLXRoaXMuZCAqIHZlbG9jaXR5IC0gdGhpcy5rICogKGN1cnJlbnQgLSB0YXJnZXQpO1xuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3VycmVudCArIHZlbG9jaXR5ICogZHQgKyBhY2NlbGVyYXRpb24gKiBkdCAqIGR0IC8gMjsgLy8gU3RvcmUgdGhlIHZlbG9jaXR5XG5cbiAgICBjLnZlbG9jaXR5ID0gdmVsb2NpdHkgKyBhY2NlbGVyYXRpb24gKiBkdDsgLy8gRmlndXJlIG91dCBpZiB3ZSBoYXZlIGNvbnZlcmdlZCwgYW5kIGlmIHNvLCBwYXNzIHRoZSB2YWx1ZVxuXG4gICAgYy5kb25lID0gTWF0aC5hYnModGFyZ2V0IC0gbmV3UG9zaXRpb24pICsgTWF0aC5hYnModmVsb2NpdHkpIDwgMC4wMDI7XG4gICAgcmV0dXJuIGMuZG9uZSA/IHRhcmdldCA6IG5ld1Bvc2l0aW9uO1xuICB9XG5cbn1cbmV4dGVuZChTcHJpbmcsIHtcbiAgZHVyYXRpb246IG1ha2VTZXR0ZXJHZXR0ZXIoJ19kdXJhdGlvbicsIHJlY2FsY3VsYXRlKSxcbiAgb3ZlcnNob290OiBtYWtlU2V0dGVyR2V0dGVyKCdfb3ZlcnNob290JywgcmVjYWxjdWxhdGUpXG59KTtcbmNsYXNzIFBJRCBleHRlbmRzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihwID0gMC4xLCBpID0gMC4wMSwgZCA9IDAsIHdpbmR1cCA9IDEwMDApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucChwKS5pKGkpLmQoZCkud2luZHVwKHdpbmR1cCk7XG4gIH1cblxuICBzdGVwKGN1cnJlbnQsIHRhcmdldCwgZHQsIGMpIHtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdzdHJpbmcnKSByZXR1cm4gY3VycmVudDtcbiAgICBjLmRvbmUgPSBkdCA9PT0gSW5maW5pdHk7XG4gICAgaWYgKGR0ID09PSBJbmZpbml0eSkgcmV0dXJuIHRhcmdldDtcbiAgICBpZiAoZHQgPT09IDApIHJldHVybiBjdXJyZW50O1xuICAgIGNvbnN0IHAgPSB0YXJnZXQgLSBjdXJyZW50O1xuICAgIGxldCBpID0gKGMuaW50ZWdyYWwgfHwgMCkgKyBwICogZHQ7XG4gICAgY29uc3QgZCA9IChwIC0gKGMuZXJyb3IgfHwgMCkpIC8gZHQ7XG4gICAgY29uc3Qgd2luZHVwID0gdGhpcy5fd2luZHVwOyAvLyBhbnRpd2luZHVwXG5cbiAgICBpZiAod2luZHVwICE9PSBmYWxzZSkge1xuICAgICAgaSA9IE1hdGgubWF4KC13aW5kdXAsIE1hdGgubWluKGksIHdpbmR1cCkpO1xuICAgIH1cblxuICAgIGMuZXJyb3IgPSBwO1xuICAgIGMuaW50ZWdyYWwgPSBpO1xuICAgIGMuZG9uZSA9IE1hdGguYWJzKHApIDwgMC4wMDE7XG4gICAgcmV0dXJuIGMuZG9uZSA/IHRhcmdldCA6IGN1cnJlbnQgKyAodGhpcy5QICogcCArIHRoaXMuSSAqIGkgKyB0aGlzLkQgKiBkKTtcbiAgfVxuXG59XG5leHRlbmQoUElELCB7XG4gIHdpbmR1cDogbWFrZVNldHRlckdldHRlcignX3dpbmR1cCcpLFxuICBwOiBtYWtlU2V0dGVyR2V0dGVyKCdQJyksXG4gIGk6IG1ha2VTZXR0ZXJHZXR0ZXIoJ0knKSxcbiAgZDogbWFrZVNldHRlckdldHRlcignRCcpXG59KTtcblxuY29uc3Qgc2VnbWVudFBhcmFtZXRlcnMgPSB7XG4gIE06IDIsXG4gIEw6IDIsXG4gIEg6IDEsXG4gIFY6IDEsXG4gIEM6IDYsXG4gIFM6IDQsXG4gIFE6IDQsXG4gIFQ6IDIsXG4gIEE6IDcsXG4gIFo6IDBcbn07XG5jb25zdCBwYXRoSGFuZGxlcnMgPSB7XG4gIE06IGZ1bmN0aW9uIChjLCBwLCBwMCkge1xuICAgIHAueCA9IHAwLnggPSBjWzBdO1xuICAgIHAueSA9IHAwLnkgPSBjWzFdO1xuICAgIHJldHVybiBbJ00nLCBwLngsIHAueV07XG4gIH0sXG4gIEw6IGZ1bmN0aW9uIChjLCBwKSB7XG4gICAgcC54ID0gY1swXTtcbiAgICBwLnkgPSBjWzFdO1xuICAgIHJldHVybiBbJ0wnLCBjWzBdLCBjWzFdXTtcbiAgfSxcbiAgSDogZnVuY3Rpb24gKGMsIHApIHtcbiAgICBwLnggPSBjWzBdO1xuICAgIHJldHVybiBbJ0gnLCBjWzBdXTtcbiAgfSxcbiAgVjogZnVuY3Rpb24gKGMsIHApIHtcbiAgICBwLnkgPSBjWzBdO1xuICAgIHJldHVybiBbJ1YnLCBjWzBdXTtcbiAgfSxcbiAgQzogZnVuY3Rpb24gKGMsIHApIHtcbiAgICBwLnggPSBjWzRdO1xuICAgIHAueSA9IGNbNV07XG4gICAgcmV0dXJuIFsnQycsIGNbMF0sIGNbMV0sIGNbMl0sIGNbM10sIGNbNF0sIGNbNV1dO1xuICB9LFxuICBTOiBmdW5jdGlvbiAoYywgcCkge1xuICAgIHAueCA9IGNbMl07XG4gICAgcC55ID0gY1szXTtcbiAgICByZXR1cm4gWydTJywgY1swXSwgY1sxXSwgY1syXSwgY1szXV07XG4gIH0sXG4gIFE6IGZ1bmN0aW9uIChjLCBwKSB7XG4gICAgcC54ID0gY1syXTtcbiAgICBwLnkgPSBjWzNdO1xuICAgIHJldHVybiBbJ1EnLCBjWzBdLCBjWzFdLCBjWzJdLCBjWzNdXTtcbiAgfSxcbiAgVDogZnVuY3Rpb24gKGMsIHApIHtcbiAgICBwLnggPSBjWzBdO1xuICAgIHAueSA9IGNbMV07XG4gICAgcmV0dXJuIFsnVCcsIGNbMF0sIGNbMV1dO1xuICB9LFxuICBaOiBmdW5jdGlvbiAoYywgcCwgcDApIHtcbiAgICBwLnggPSBwMC54O1xuICAgIHAueSA9IHAwLnk7XG4gICAgcmV0dXJuIFsnWiddO1xuICB9LFxuICBBOiBmdW5jdGlvbiAoYywgcCkge1xuICAgIHAueCA9IGNbNV07XG4gICAgcC55ID0gY1s2XTtcbiAgICByZXR1cm4gWydBJywgY1swXSwgY1sxXSwgY1syXSwgY1szXSwgY1s0XSwgY1s1XSwgY1s2XV07XG4gIH1cbn07XG5jb25zdCBtbGh2cXRjc2F6ID0gJ21saHZxdGNzYXonLnNwbGl0KCcnKTtcblxuZm9yIChsZXQgaSA9IDAsIGlsID0gbWxodnF0Y3Nhei5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gIHBhdGhIYW5kbGVyc1ttbGh2cXRjc2F6W2ldXSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjLCBwLCBwMCkge1xuICAgICAgaWYgKGkgPT09ICdIJykgY1swXSA9IGNbMF0gKyBwLng7ZWxzZSBpZiAoaSA9PT0gJ1YnKSBjWzBdID0gY1swXSArIHAueTtlbHNlIGlmIChpID09PSAnQScpIHtcbiAgICAgICAgY1s1XSA9IGNbNV0gKyBwLng7XG4gICAgICAgIGNbNl0gPSBjWzZdICsgcC55O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDAsIGpsID0gYy5sZW5ndGg7IGogPCBqbDsgKytqKSB7XG4gICAgICAgICAgY1tqXSA9IGNbal0gKyAoaiAlIDIgPyBwLnkgOiBwLngpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcGF0aEhhbmRsZXJzW2ldKGMsIHAsIHAwKTtcbiAgICB9O1xuICB9KG1saHZxdGNzYXpbaV0udG9VcHBlckNhc2UoKSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VBYnNvbHV0KHBhcnNlcikge1xuICBjb25zdCBjb21tYW5kID0gcGFyc2VyLnNlZ21lbnRbMF07XG4gIHJldHVybiBwYXRoSGFuZGxlcnNbY29tbWFuZF0ocGFyc2VyLnNlZ21lbnQuc2xpY2UoMSksIHBhcnNlci5wLCBwYXJzZXIucDApO1xufVxuXG5mdW5jdGlvbiBzZWdtZW50Q29tcGxldGUocGFyc2VyKSB7XG4gIHJldHVybiBwYXJzZXIuc2VnbWVudC5sZW5ndGggJiYgcGFyc2VyLnNlZ21lbnQubGVuZ3RoIC0gMSA9PT0gc2VnbWVudFBhcmFtZXRlcnNbcGFyc2VyLnNlZ21lbnRbMF0udG9VcHBlckNhc2UoKV07XG59XG5cbmZ1bmN0aW9uIHN0YXJ0TmV3U2VnbWVudChwYXJzZXIsIHRva2VuKSB7XG4gIHBhcnNlci5pbk51bWJlciAmJiBmaW5hbGl6ZU51bWJlcihwYXJzZXIsIGZhbHNlKTtcbiAgY29uc3QgcGF0aExldHRlciA9IGlzUGF0aExldHRlci50ZXN0KHRva2VuKTtcblxuICBpZiAocGF0aExldHRlcikge1xuICAgIHBhcnNlci5zZWdtZW50ID0gW3Rva2VuXTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXN0Q29tbWFuZCA9IHBhcnNlci5sYXN0Q29tbWFuZDtcbiAgICBjb25zdCBzbWFsbCA9IGxhc3RDb21tYW5kLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgaXNTbWFsbCA9IGxhc3RDb21tYW5kID09PSBzbWFsbDtcbiAgICBwYXJzZXIuc2VnbWVudCA9IFtzbWFsbCA9PT0gJ20nID8gaXNTbWFsbCA/ICdsJyA6ICdMJyA6IGxhc3RDb21tYW5kXTtcbiAgfVxuXG4gIHBhcnNlci5pblNlZ21lbnQgPSB0cnVlO1xuICBwYXJzZXIubGFzdENvbW1hbmQgPSBwYXJzZXIuc2VnbWVudFswXTtcbiAgcmV0dXJuIHBhdGhMZXR0ZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmFsaXplTnVtYmVyKHBhcnNlciwgaW5OdW1iZXIpIHtcbiAgaWYgKCFwYXJzZXIuaW5OdW1iZXIpIHRocm93IG5ldyBFcnJvcignUGFyc2VyIEVycm9yJyk7XG4gIHBhcnNlci5udW1iZXIgJiYgcGFyc2VyLnNlZ21lbnQucHVzaChwYXJzZUZsb2F0KHBhcnNlci5udW1iZXIpKTtcbiAgcGFyc2VyLmluTnVtYmVyID0gaW5OdW1iZXI7XG4gIHBhcnNlci5udW1iZXIgPSAnJztcbiAgcGFyc2VyLnBvaW50U2VlbiA9IGZhbHNlO1xuICBwYXJzZXIuaGFzRXhwb25lbnQgPSBmYWxzZTtcblxuICBpZiAoc2VnbWVudENvbXBsZXRlKHBhcnNlcikpIHtcbiAgICBmaW5hbGl6ZVNlZ21lbnQocGFyc2VyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5hbGl6ZVNlZ21lbnQocGFyc2VyKSB7XG4gIHBhcnNlci5pblNlZ21lbnQgPSBmYWxzZTtcblxuICBpZiAocGFyc2VyLmFic29sdXRlKSB7XG4gICAgcGFyc2VyLnNlZ21lbnQgPSBtYWtlQWJzb2x1dChwYXJzZXIpO1xuICB9XG5cbiAgcGFyc2VyLnNlZ21lbnRzLnB1c2gocGFyc2VyLnNlZ21lbnQpO1xufVxuXG5mdW5jdGlvbiBpc0FyY0ZsYWcocGFyc2VyKSB7XG4gIGlmICghcGFyc2VyLnNlZ21lbnQubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGlzQXJjID0gcGFyc2VyLnNlZ21lbnRbMF0udG9VcHBlckNhc2UoKSA9PT0gJ0EnO1xuICBjb25zdCBsZW5ndGggPSBwYXJzZXIuc2VnbWVudC5sZW5ndGg7XG4gIHJldHVybiBpc0FyYyAmJiAobGVuZ3RoID09PSA0IHx8IGxlbmd0aCA9PT0gNSk7XG59XG5cbmZ1bmN0aW9uIGlzRXhwb25lbnRpYWwocGFyc2VyKSB7XG4gIHJldHVybiBwYXJzZXIubGFzdFRva2VuLnRvVXBwZXJDYXNlKCkgPT09ICdFJztcbn1cblxuZnVuY3Rpb24gcGF0aFBhcnNlcihkLCB0b0Fic29sdXRlID0gdHJ1ZSkge1xuICBsZXQgaW5kZXggPSAwO1xuICBsZXQgdG9rZW4gPSAnJztcbiAgY29uc3QgcGFyc2VyID0ge1xuICAgIHNlZ21lbnQ6IFtdLFxuICAgIGluTnVtYmVyOiBmYWxzZSxcbiAgICBudW1iZXI6ICcnLFxuICAgIGxhc3RUb2tlbjogJycsXG4gICAgaW5TZWdtZW50OiBmYWxzZSxcbiAgICBzZWdtZW50czogW10sXG4gICAgcG9pbnRTZWVuOiBmYWxzZSxcbiAgICBoYXNFeHBvbmVudDogZmFsc2UsXG4gICAgYWJzb2x1dGU6IHRvQWJzb2x1dGUsXG4gICAgcDA6IG5ldyBQb2ludCgpLFxuICAgIHA6IG5ldyBQb2ludCgpXG4gIH07XG5cbiAgd2hpbGUgKHBhcnNlci5sYXN0VG9rZW4gPSB0b2tlbiwgdG9rZW4gPSBkLmNoYXJBdChpbmRleCsrKSkge1xuICAgIGlmICghcGFyc2VyLmluU2VnbWVudCkge1xuICAgICAgaWYgKHN0YXJ0TmV3U2VnbWVudChwYXJzZXIsIHRva2VuKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9rZW4gPT09ICcuJykge1xuICAgICAgaWYgKHBhcnNlci5wb2ludFNlZW4gfHwgcGFyc2VyLmhhc0V4cG9uZW50KSB7XG4gICAgICAgIGZpbmFsaXplTnVtYmVyKHBhcnNlciwgZmFsc2UpO1xuICAgICAgICAtLWluZGV4O1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VyLmluTnVtYmVyID0gdHJ1ZTtcbiAgICAgIHBhcnNlci5wb2ludFNlZW4gPSB0cnVlO1xuICAgICAgcGFyc2VyLm51bWJlciArPSB0b2tlbjtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghaXNOYU4ocGFyc2VJbnQodG9rZW4pKSkge1xuICAgICAgaWYgKHBhcnNlci5udW1iZXIgPT09ICcwJyB8fCBpc0FyY0ZsYWcocGFyc2VyKSkge1xuICAgICAgICBwYXJzZXIuaW5OdW1iZXIgPSB0cnVlO1xuICAgICAgICBwYXJzZXIubnVtYmVyID0gdG9rZW47XG4gICAgICAgIGZpbmFsaXplTnVtYmVyKHBhcnNlciwgdHJ1ZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwYXJzZXIuaW5OdW1iZXIgPSB0cnVlO1xuICAgICAgcGFyc2VyLm51bWJlciArPSB0b2tlbjtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh0b2tlbiA9PT0gJyAnIHx8IHRva2VuID09PSAnLCcpIHtcbiAgICAgIGlmIChwYXJzZXIuaW5OdW1iZXIpIHtcbiAgICAgICAgZmluYWxpemVOdW1iZXIocGFyc2VyLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh0b2tlbiA9PT0gJy0nKSB7XG4gICAgICBpZiAocGFyc2VyLmluTnVtYmVyICYmICFpc0V4cG9uZW50aWFsKHBhcnNlcikpIHtcbiAgICAgICAgZmluYWxpemVOdW1iZXIocGFyc2VyLCBmYWxzZSk7XG4gICAgICAgIC0taW5kZXg7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwYXJzZXIubnVtYmVyICs9IHRva2VuO1xuICAgICAgcGFyc2VyLmluTnVtYmVyID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh0b2tlbi50b1VwcGVyQ2FzZSgpID09PSAnRScpIHtcbiAgICAgIHBhcnNlci5udW1iZXIgKz0gdG9rZW47XG4gICAgICBwYXJzZXIuaGFzRXhwb25lbnQgPSB0cnVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGlzUGF0aExldHRlci50ZXN0KHRva2VuKSkge1xuICAgICAgaWYgKHBhcnNlci5pbk51bWJlcikge1xuICAgICAgICBmaW5hbGl6ZU51bWJlcihwYXJzZXIsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAoIXNlZ21lbnRDb21wbGV0ZShwYXJzZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncGFyc2VyIEVycm9yJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaW5hbGl6ZVNlZ21lbnQocGFyc2VyKTtcbiAgICAgIH1cblxuICAgICAgLS1pbmRleDtcbiAgICB9XG4gIH1cblxuICBpZiAocGFyc2VyLmluTnVtYmVyKSB7XG4gICAgZmluYWxpemVOdW1iZXIocGFyc2VyLCBmYWxzZSk7XG4gIH1cblxuICBpZiAocGFyc2VyLmluU2VnbWVudCAmJiBzZWdtZW50Q29tcGxldGUocGFyc2VyKSkge1xuICAgIGZpbmFsaXplU2VnbWVudChwYXJzZXIpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlci5zZWdtZW50cztcbn1cblxuZnVuY3Rpb24gYXJyYXlUb1N0cmluZyhhKSB7XG4gIGxldCBzID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGlsID0gYS5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG4gICAgcyArPSBhW2ldWzBdO1xuXG4gICAgaWYgKGFbaV1bMV0gIT0gbnVsbCkge1xuICAgICAgcyArPSBhW2ldWzFdO1xuXG4gICAgICBpZiAoYVtpXVsyXSAhPSBudWxsKSB7XG4gICAgICAgIHMgKz0gJyAnO1xuICAgICAgICBzICs9IGFbaV1bMl07XG5cbiAgICAgICAgaWYgKGFbaV1bM10gIT0gbnVsbCkge1xuICAgICAgICAgIHMgKz0gJyAnO1xuICAgICAgICAgIHMgKz0gYVtpXVszXTtcbiAgICAgICAgICBzICs9ICcgJztcbiAgICAgICAgICBzICs9IGFbaV1bNF07XG5cbiAgICAgICAgICBpZiAoYVtpXVs1XSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzICs9ICcgJztcbiAgICAgICAgICAgIHMgKz0gYVtpXVs1XTtcbiAgICAgICAgICAgIHMgKz0gJyAnO1xuICAgICAgICAgICAgcyArPSBhW2ldWzZdO1xuXG4gICAgICAgICAgICBpZiAoYVtpXVs3XSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIHMgKz0gJyAnO1xuICAgICAgICAgICAgICBzICs9IGFbaV1bN107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHMgKyAnICc7XG59XG5cbmNsYXNzIFBhdGhBcnJheSBleHRlbmRzIFNWR0FycmF5IHtcbiAgLy8gR2V0IGJvdW5kaW5nIGJveCBvZiBwYXRoXG4gIGJib3goKSB7XG4gICAgcGFyc2VyKCkucGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCB0aGlzLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiBuZXcgQm94KHBhcnNlci5ub2Rlcy5wYXRoLmdldEJCb3goKSk7XG4gIH0gLy8gTW92ZSBwYXRoIHN0cmluZ1xuXG5cbiAgbW92ZSh4LCB5KSB7XG4gICAgLy8gZ2V0IGJvdW5kaW5nIGJveCBvZiBjdXJyZW50IHNpdHVhdGlvblxuICAgIGNvbnN0IGJveCA9IHRoaXMuYmJveCgpOyAvLyBnZXQgcmVsYXRpdmUgb2Zmc2V0XG5cbiAgICB4IC09IGJveC54O1xuICAgIHkgLT0gYm94Lnk7XG5cbiAgICBpZiAoIWlzTmFOKHgpICYmICFpc05hTih5KSkge1xuICAgICAgLy8gbW92ZSBldmVyeSBwb2ludFxuICAgICAgZm9yIChsZXQgbCwgaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGwgPT09ICdNJyB8fCBsID09PSAnTCcgfHwgbCA9PT0gJ1QnKSB7XG4gICAgICAgICAgdGhpc1tpXVsxXSArPSB4O1xuICAgICAgICAgIHRoaXNbaV1bMl0gKz0geTtcbiAgICAgICAgfSBlbHNlIGlmIChsID09PSAnSCcpIHtcbiAgICAgICAgICB0aGlzW2ldWzFdICs9IHg7XG4gICAgICAgIH0gZWxzZSBpZiAobCA9PT0gJ1YnKSB7XG4gICAgICAgICAgdGhpc1tpXVsxXSArPSB5O1xuICAgICAgICB9IGVsc2UgaWYgKGwgPT09ICdDJyB8fCBsID09PSAnUycgfHwgbCA9PT0gJ1EnKSB7XG4gICAgICAgICAgdGhpc1tpXVsxXSArPSB4O1xuICAgICAgICAgIHRoaXNbaV1bMl0gKz0geTtcbiAgICAgICAgICB0aGlzW2ldWzNdICs9IHg7XG4gICAgICAgICAgdGhpc1tpXVs0XSArPSB5O1xuXG4gICAgICAgICAgaWYgKGwgPT09ICdDJykge1xuICAgICAgICAgICAgdGhpc1tpXVs1XSArPSB4O1xuICAgICAgICAgICAgdGhpc1tpXVs2XSArPSB5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsID09PSAnQScpIHtcbiAgICAgICAgICB0aGlzW2ldWzZdICs9IHg7XG4gICAgICAgICAgdGhpc1tpXVs3XSArPSB5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gQWJzb2x1dGl6ZSBhbmQgcGFyc2UgcGF0aCB0byBhcnJheVxuXG5cbiAgcGFyc2UoZCA9ICdNMCAwJykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGQpKSB7XG4gICAgICBkID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgZCkudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aFBhcnNlcihkKTtcbiAgfSAvLyBSZXNpemUgcGF0aCBzdHJpbmdcblxuXG4gIHNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIC8vIGdldCBib3VuZGluZyBib3ggb2YgY3VycmVudCBzaXR1YXRpb25cbiAgICBjb25zdCBib3ggPSB0aGlzLmJib3goKTtcbiAgICBsZXQgaSwgbDsgLy8gSWYgdGhlIGJveCB3aWR0aCBvciBoZWlnaHQgaXMgMCB0aGVuIHdlIGlnbm9yZVxuICAgIC8vIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgcmVzcGVjdGl2ZSBheGlzXG5cbiAgICBib3gud2lkdGggPSBib3gud2lkdGggPT09IDAgPyAxIDogYm94LndpZHRoO1xuICAgIGJveC5oZWlnaHQgPSBib3guaGVpZ2h0ID09PSAwID8gMSA6IGJveC5oZWlnaHQ7IC8vIHJlY2FsY3VsYXRlIHBvc2l0aW9uIG9mIGFsbCBwb2ludHMgYWNjb3JkaW5nIHRvIG5ldyBzaXplXG5cbiAgICBmb3IgKGkgPSB0aGlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGwgPT09ICdNJyB8fCBsID09PSAnTCcgfHwgbCA9PT0gJ1QnKSB7XG4gICAgICAgIHRoaXNbaV1bMV0gPSAodGhpc1tpXVsxXSAtIGJveC54KSAqIHdpZHRoIC8gYm94LndpZHRoICsgYm94Lng7XG4gICAgICAgIHRoaXNbaV1bMl0gPSAodGhpc1tpXVsyXSAtIGJveC55KSAqIGhlaWdodCAvIGJveC5oZWlnaHQgKyBib3gueTtcbiAgICAgIH0gZWxzZSBpZiAobCA9PT0gJ0gnKSB7XG4gICAgICAgIHRoaXNbaV1bMV0gPSAodGhpc1tpXVsxXSAtIGJveC54KSAqIHdpZHRoIC8gYm94LndpZHRoICsgYm94Lng7XG4gICAgICB9IGVsc2UgaWYgKGwgPT09ICdWJykge1xuICAgICAgICB0aGlzW2ldWzFdID0gKHRoaXNbaV1bMV0gLSBib3gueSkgKiBoZWlnaHQgLyBib3guaGVpZ2h0ICsgYm94Lnk7XG4gICAgICB9IGVsc2UgaWYgKGwgPT09ICdDJyB8fCBsID09PSAnUycgfHwgbCA9PT0gJ1EnKSB7XG4gICAgICAgIHRoaXNbaV1bMV0gPSAodGhpc1tpXVsxXSAtIGJveC54KSAqIHdpZHRoIC8gYm94LndpZHRoICsgYm94Lng7XG4gICAgICAgIHRoaXNbaV1bMl0gPSAodGhpc1tpXVsyXSAtIGJveC55KSAqIGhlaWdodCAvIGJveC5oZWlnaHQgKyBib3gueTtcbiAgICAgICAgdGhpc1tpXVszXSA9ICh0aGlzW2ldWzNdIC0gYm94LngpICogd2lkdGggLyBib3gud2lkdGggKyBib3gueDtcbiAgICAgICAgdGhpc1tpXVs0XSA9ICh0aGlzW2ldWzRdIC0gYm94LnkpICogaGVpZ2h0IC8gYm94LmhlaWdodCArIGJveC55O1xuXG4gICAgICAgIGlmIChsID09PSAnQycpIHtcbiAgICAgICAgICB0aGlzW2ldWzVdID0gKHRoaXNbaV1bNV0gLSBib3gueCkgKiB3aWR0aCAvIGJveC53aWR0aCArIGJveC54O1xuICAgICAgICAgIHRoaXNbaV1bNl0gPSAodGhpc1tpXVs2XSAtIGJveC55KSAqIGhlaWdodCAvIGJveC5oZWlnaHQgKyBib3gueTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsID09PSAnQScpIHtcbiAgICAgICAgLy8gcmVzaXplIHJhZGlpXG4gICAgICAgIHRoaXNbaV1bMV0gPSB0aGlzW2ldWzFdICogd2lkdGggLyBib3gud2lkdGg7XG4gICAgICAgIHRoaXNbaV1bMl0gPSB0aGlzW2ldWzJdICogaGVpZ2h0IC8gYm94LmhlaWdodDsgLy8gbW92ZSBwb3NpdGlvbiB2YWx1ZXNcblxuICAgICAgICB0aGlzW2ldWzZdID0gKHRoaXNbaV1bNl0gLSBib3gueCkgKiB3aWR0aCAvIGJveC53aWR0aCArIGJveC54O1xuICAgICAgICB0aGlzW2ldWzddID0gKHRoaXNbaV1bN10gLSBib3gueSkgKiBoZWlnaHQgLyBib3guaGVpZ2h0ICsgYm94Lnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gQ29udmVydCBhcnJheSB0byBzdHJpbmdcblxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBhcnJheVRvU3RyaW5nKHRoaXMpO1xuICB9XG5cbn1cblxuY29uc3QgZ2V0Q2xhc3NGb3JUeXBlID0gdmFsdWUgPT4ge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBTVkdOdW1iZXI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoQ29sb3IuaXNDb2xvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBDb2xvcjtcbiAgICB9IGVsc2UgaWYgKGRlbGltaXRlci50ZXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGlzUGF0aExldHRlci50ZXN0KHZhbHVlKSA/IFBhdGhBcnJheSA6IFNWR0FycmF5O1xuICAgIH0gZWxzZSBpZiAobnVtYmVyQW5kVW5pdC50ZXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFNWR051bWJlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE5vbk1vcnBoYWJsZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobW9ycGhhYmxlVHlwZXMuaW5kZXhPZih2YWx1ZS5jb25zdHJ1Y3RvcikgPiAtMSkge1xuICAgIHJldHVybiB2YWx1ZS5jb25zdHJ1Y3RvcjtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBTVkdBcnJheTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3RCYWc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE5vbk1vcnBoYWJsZTtcbiAgfVxufTtcblxuY2xhc3MgTW9ycGhhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RlcHBlcikge1xuICAgIHRoaXMuX3N0ZXBwZXIgPSBzdGVwcGVyIHx8IG5ldyBFYXNlKCctJyk7XG4gICAgdGhpcy5fZnJvbSA9IG51bGw7XG4gICAgdGhpcy5fdG8gPSBudWxsO1xuICAgIHRoaXMuX3R5cGUgPSBudWxsO1xuICAgIHRoaXMuX2NvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuX21vcnBoT2JqID0gbnVsbDtcbiAgfVxuXG4gIGF0KHBvcykge1xuICAgIHJldHVybiB0aGlzLl9tb3JwaE9iai5tb3JwaCh0aGlzLl9mcm9tLCB0aGlzLl90bywgcG9zLCB0aGlzLl9zdGVwcGVyLCB0aGlzLl9jb250ZXh0KTtcbiAgfVxuXG4gIGRvbmUoKSB7XG4gICAgY29uc3QgY29tcGxldGUgPSB0aGlzLl9jb250ZXh0Lm1hcCh0aGlzLl9zdGVwcGVyLmRvbmUpLnJlZHVjZShmdW5jdGlvbiAobGFzdCwgY3Vycikge1xuICAgICAgcmV0dXJuIGxhc3QgJiYgY3VycjtcbiAgICB9LCB0cnVlKTtcblxuICAgIHJldHVybiBjb21wbGV0ZTtcbiAgfVxuXG4gIGZyb20odmFsKSB7XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZnJvbTtcbiAgICB9XG5cbiAgICB0aGlzLl9mcm9tID0gdGhpcy5fc2V0KHZhbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGVwcGVyKHN0ZXBwZXIpIHtcbiAgICBpZiAoc3RlcHBlciA9PSBudWxsKSByZXR1cm4gdGhpcy5fc3RlcHBlcjtcbiAgICB0aGlzLl9zdGVwcGVyID0gc3RlcHBlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRvKHZhbCkge1xuICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RvO1xuICAgIH1cblxuICAgIHRoaXMuX3RvID0gdGhpcy5fc2V0KHZhbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0eXBlKHR5cGUpIHtcbiAgICAvLyBnZXR0ZXJcbiAgICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9IC8vIHNldHRlclxuXG5cbiAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9zZXQodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuX3R5cGUpIHtcbiAgICAgIHRoaXMudHlwZShnZXRDbGFzc0ZvclR5cGUodmFsdWUpKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gbmV3IHRoaXMuX3R5cGUodmFsdWUpO1xuXG4gICAgaWYgKHRoaXMuX3R5cGUgPT09IENvbG9yKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLl90byA/IHJlc3VsdFt0aGlzLl90b1s0XV0oKSA6IHRoaXMuX2Zyb20gPyByZXN1bHRbdGhpcy5fZnJvbVs0XV0oKSA6IHJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdHlwZSA9PT0gT2JqZWN0QmFnKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLl90byA/IHJlc3VsdC5hbGlnbih0aGlzLl90bykgOiB0aGlzLl9mcm9tID8gcmVzdWx0LmFsaWduKHRoaXMuX2Zyb20pIDogcmVzdWx0O1xuICAgIH1cblxuICAgIHJlc3VsdCA9IHJlc3VsdC50b0NvbnN1bWFibGUoKTtcbiAgICB0aGlzLl9tb3JwaE9iaiA9IHRoaXMuX21vcnBoT2JqIHx8IG5ldyB0aGlzLl90eXBlKCk7XG4gICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NvbnRleHQgfHwgQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkocmVzdWx0Lmxlbmd0aCkpLm1hcChPYmplY3QpLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgby5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBvO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxufVxuY2xhc3MgTm9uTW9ycGhhYmxlIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHRoaXMuaW5pdCguLi5hcmdzKTtcbiAgfVxuXG4gIGluaXQodmFsKSB7XG4gICAgdmFsID0gQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsWzBdIDogdmFsO1xuICAgIHRoaXMudmFsdWUgPSB2YWw7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b0FycmF5KCkge1xuICAgIHJldHVybiBbdGhpcy52YWx1ZV07XG4gIH1cblxuICB2YWx1ZU9mKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbn1cbmNsYXNzIFRyYW5zZm9ybUJhZyB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICB0aGlzLmluaXQoLi4uYXJncyk7XG4gIH1cblxuICBpbml0KG9iaikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgc2NhbGVYOiBvYmpbMF0sXG4gICAgICAgIHNjYWxlWTogb2JqWzFdLFxuICAgICAgICBzaGVhcjogb2JqWzJdLFxuICAgICAgICByb3RhdGU6IG9ialszXSxcbiAgICAgICAgdHJhbnNsYXRlWDogb2JqWzRdLFxuICAgICAgICB0cmFuc2xhdGVZOiBvYmpbNV0sXG4gICAgICAgIG9yaWdpblg6IG9ials2XSxcbiAgICAgICAgb3JpZ2luWTogb2JqWzddXG4gICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgVHJhbnNmb3JtQmFnLmRlZmF1bHRzLCBvYmopO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG9BcnJheSgpIHtcbiAgICBjb25zdCB2ID0gdGhpcztcbiAgICByZXR1cm4gW3Yuc2NhbGVYLCB2LnNjYWxlWSwgdi5zaGVhciwgdi5yb3RhdGUsIHYudHJhbnNsYXRlWCwgdi50cmFuc2xhdGVZLCB2Lm9yaWdpblgsIHYub3JpZ2luWV07XG4gIH1cblxufVxuVHJhbnNmb3JtQmFnLmRlZmF1bHRzID0ge1xuICBzY2FsZVg6IDEsXG4gIHNjYWxlWTogMSxcbiAgc2hlYXI6IDAsXG4gIHJvdGF0ZTogMCxcbiAgdHJhbnNsYXRlWDogMCxcbiAgdHJhbnNsYXRlWTogMCxcbiAgb3JpZ2luWDogMCxcbiAgb3JpZ2luWTogMFxufTtcblxuY29uc3Qgc29ydEJ5S2V5ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIGFbMF0gPCBiWzBdID8gLTEgOiBhWzBdID4gYlswXSA/IDEgOiAwO1xufTtcblxuY2xhc3MgT2JqZWN0QmFnIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHRoaXMuaW5pdCguLi5hcmdzKTtcbiAgfVxuXG4gIGFsaWduKG90aGVyKSB7XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgaWwgPSB2YWx1ZXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgLy8gSWYgdGhlIHR5cGUgaXMgdGhlIHNhbWUgd2Ugb25seSBuZWVkIHRvIGNoZWNrIGlmIHRoZSBjb2xvciBpcyBpbiB0aGUgY29ycmVjdCBmb3JtYXRcbiAgICAgIGlmICh2YWx1ZXNbaSArIDFdID09PSBvdGhlcltpICsgMV0pIHtcbiAgICAgICAgaWYgKHZhbHVlc1tpICsgMV0gPT09IENvbG9yICYmIG90aGVyW2kgKyA3XSAhPT0gdmFsdWVzW2kgKyA3XSkge1xuICAgICAgICAgIGNvbnN0IHNwYWNlID0gb3RoZXJbaSArIDddO1xuICAgICAgICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKHRoaXMudmFsdWVzLnNwbGljZShpICsgMywgNSkpW3NwYWNlXSgpLnRvQXJyYXkoKTtcbiAgICAgICAgICB0aGlzLnZhbHVlcy5zcGxpY2UoaSArIDMsIDAsIC4uLmNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgKz0gdmFsdWVzW2kgKyAyXSArIDI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW90aGVyW2kgKyAxXSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0gLy8gVGhlIHR5cGVzIGRpZmZlciwgc28gd2Ugb3ZlcndyaXRlIHRoZSBuZXcgdHlwZSB3aXRoIHRoZSBvbGQgb25lXG4gICAgICAvLyBBbmQgaW5pdGlhbGl6ZSBpdCB3aXRoIHRoZSB0eXBlcyBkZWZhdWx0IChlLmcuIGJsYWNrIGZvciBjb2xvciBvciAwIGZvciBudW1iZXIpXG5cblxuICAgICAgY29uc3QgZGVmYXVsdE9iamVjdCA9IG5ldyBvdGhlcltpICsgMV0oKS50b0FycmF5KCk7IC8vIFRoYW4gd2UgZml4IHRoZSB2YWx1ZXMgYXJyYXlcblxuICAgICAgY29uc3QgdG9EZWxldGUgPSB2YWx1ZXNbaSArIDJdICsgMztcbiAgICAgIHZhbHVlcy5zcGxpY2UoaSwgdG9EZWxldGUsIG90aGVyW2ldLCBvdGhlcltpICsgMV0sIG90aGVyW2kgKyAyXSwgLi4uZGVmYXVsdE9iamVjdCk7XG4gICAgICBpICs9IHZhbHVlc1tpICsgMl0gKyAyO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaW5pdChvYmpPckFycikge1xuICAgIHRoaXMudmFsdWVzID0gW107XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpPckFycikpIHtcbiAgICAgIHRoaXMudmFsdWVzID0gb2JqT3JBcnIuc2xpY2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvYmpPckFyciA9IG9iak9yQXJyIHx8IHt9O1xuICAgIGNvbnN0IGVudHJpZXMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgaSBpbiBvYmpPckFycikge1xuICAgICAgY29uc3QgVHlwZSA9IGdldENsYXNzRm9yVHlwZShvYmpPckFycltpXSk7XG4gICAgICBjb25zdCB2YWwgPSBuZXcgVHlwZShvYmpPckFycltpXSkudG9BcnJheSgpO1xuICAgICAgZW50cmllcy5wdXNoKFtpLCBUeXBlLCB2YWwubGVuZ3RoLCAuLi52YWxdKTtcbiAgICB9XG5cbiAgICBlbnRyaWVzLnNvcnQoc29ydEJ5S2V5KTtcbiAgICB0aGlzLnZhbHVlcyA9IGVudHJpZXMucmVkdWNlKChsYXN0LCBjdXJyKSA9PiBsYXN0LmNvbmNhdChjdXJyKSwgW10pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG9BcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gIH1cblxuICB2YWx1ZU9mKCkge1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIGNvbnN0IGFyciA9IHRoaXMudmFsdWVzOyAvLyBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAyKSB7XG5cbiAgICB3aGlsZSAoYXJyLmxlbmd0aCkge1xuICAgICAgY29uc3Qga2V5ID0gYXJyLnNoaWZ0KCk7XG4gICAgICBjb25zdCBUeXBlID0gYXJyLnNoaWZ0KCk7XG4gICAgICBjb25zdCBudW0gPSBhcnIuc2hpZnQoKTtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGFyci5zcGxpY2UoMCwgbnVtKTtcbiAgICAgIG9ialtrZXldID0gbmV3IFR5cGUodmFsdWVzKTsgLy8gLnZhbHVlT2YoKVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxufVxuY29uc3QgbW9ycGhhYmxlVHlwZXMgPSBbTm9uTW9ycGhhYmxlLCBUcmFuc2Zvcm1CYWcsIE9iamVjdEJhZ107XG5mdW5jdGlvbiByZWdpc3Rlck1vcnBoYWJsZVR5cGUodHlwZSA9IFtdKSB7XG4gIG1vcnBoYWJsZVR5cGVzLnB1c2goLi4uW10uY29uY2F0KHR5cGUpKTtcbn1cbmZ1bmN0aW9uIG1ha2VNb3JwaGFibGUoKSB7XG4gIGV4dGVuZChtb3JwaGFibGVUeXBlcywge1xuICAgIHRvKHZhbCkge1xuICAgICAgcmV0dXJuIG5ldyBNb3JwaGFibGUoKS50eXBlKHRoaXMuY29uc3RydWN0b3IpLmZyb20odGhpcy50b0FycmF5KCkpIC8vIHRoaXMudmFsdWVPZigpKVxuICAgICAgLnRvKHZhbCk7XG4gICAgfSxcblxuICAgIGZyb21BcnJheShhcnIpIHtcbiAgICAgIHRoaXMuaW5pdChhcnIpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHRvQ29uc3VtYWJsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvQXJyYXkoKTtcbiAgICB9LFxuXG4gICAgbW9ycGgoZnJvbSwgdG8sIHBvcywgc3RlcHBlciwgY29udGV4dCkge1xuICAgICAgY29uc3QgbWFwcGVyID0gZnVuY3Rpb24gKGksIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBzdGVwcGVyLnN0ZXAoaSwgdG9baW5kZXhdLCBwb3MsIGNvbnRleHRbaW5kZXhdLCBjb250ZXh0KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB0aGlzLmZyb21BcnJheShmcm9tLm1hcChtYXBwZXIpKTtcbiAgICB9XG5cbiAgfSk7XG59XG5cbmNsYXNzIFBhdGggZXh0ZW5kcyBTaGFwZSB7XG4gIC8vIEluaXRpYWxpemUgbm9kZVxuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ3BhdGgnLCBub2RlKSwgYXR0cnMpO1xuICB9IC8vIEdldCBhcnJheVxuXG5cbiAgYXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FycmF5IHx8ICh0aGlzLl9hcnJheSA9IG5ldyBQYXRoQXJyYXkodGhpcy5hdHRyKCdkJykpKTtcbiAgfSAvLyBDbGVhciBhcnJheSBjYWNoZVxuXG5cbiAgY2xlYXIoKSB7XG4gICAgZGVsZXRlIHRoaXMuX2FycmF5O1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFNldCBoZWlnaHQgb2YgZWxlbWVudFxuXG5cbiAgaGVpZ2h0KGhlaWdodCkge1xuICAgIHJldHVybiBoZWlnaHQgPT0gbnVsbCA/IHRoaXMuYmJveCgpLmhlaWdodCA6IHRoaXMuc2l6ZSh0aGlzLmJib3goKS53aWR0aCwgaGVpZ2h0KTtcbiAgfSAvLyBNb3ZlIGJ5IGxlZnQgdG9wIGNvcm5lclxuXG5cbiAgbW92ZSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignZCcsIHRoaXMuYXJyYXkoKS5tb3ZlKHgsIHkpKTtcbiAgfSAvLyBQbG90IG5ldyBwYXRoXG5cblxuICBwbG90KGQpIHtcbiAgICByZXR1cm4gZCA9PSBudWxsID8gdGhpcy5hcnJheSgpIDogdGhpcy5jbGVhcigpLmF0dHIoJ2QnLCB0eXBlb2YgZCA9PT0gJ3N0cmluZycgPyBkIDogdGhpcy5fYXJyYXkgPSBuZXcgUGF0aEFycmF5KGQpKTtcbiAgfSAvLyBTZXQgZWxlbWVudCBzaXplIHRvIGdpdmVuIHdpZHRoIGFuZCBoZWlnaHRcblxuXG4gIHNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHAgPSBwcm9wb3J0aW9uYWxTaXplKHRoaXMsIHdpZHRoLCBoZWlnaHQpO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2QnLCB0aGlzLmFycmF5KCkuc2l6ZShwLndpZHRoLCBwLmhlaWdodCkpO1xuICB9IC8vIFNldCB3aWR0aCBvZiBlbGVtZW50XG5cblxuICB3aWR0aCh3aWR0aCkge1xuICAgIHJldHVybiB3aWR0aCA9PSBudWxsID8gdGhpcy5iYm94KCkud2lkdGggOiB0aGlzLnNpemUod2lkdGgsIHRoaXMuYmJveCgpLmhlaWdodCk7XG4gIH0gLy8gTW92ZSBieSBsZWZ0IHRvcCBjb3JuZXIgb3ZlciB4LWF4aXNcblxuXG4gIHgoeCkge1xuICAgIHJldHVybiB4ID09IG51bGwgPyB0aGlzLmJib3goKS54IDogdGhpcy5tb3ZlKHgsIHRoaXMuYmJveCgpLnkpO1xuICB9IC8vIE1vdmUgYnkgbGVmdCB0b3AgY29ybmVyIG92ZXIgeS1heGlzXG5cblxuICB5KHkpIHtcbiAgICByZXR1cm4geSA9PSBudWxsID8gdGhpcy5iYm94KCkueSA6IHRoaXMubW92ZSh0aGlzLmJib3goKS54LCB5KTtcbiAgfVxuXG59IC8vIERlZmluZSBtb3JwaGFibGUgYXJyYXlcblxuUGF0aC5wcm90b3R5cGUuTW9ycGhBcnJheSA9IFBhdGhBcnJheTsgLy8gQWRkIHBhcmVudCBtZXRob2RcblxucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgLy8gQ3JlYXRlIGEgd3JhcHBlZCBwYXRoIGVsZW1lbnRcbiAgICBwYXRoOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAoZCkge1xuICAgICAgLy8gbWFrZSBzdXJlIHBsb3QgaXMgY2FsbGVkIGFzIGEgc2V0dGVyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFBhdGgoKSkucGxvdChkIHx8IG5ldyBQYXRoQXJyYXkoKSk7XG4gICAgfSlcbiAgfVxufSk7XG5yZWdpc3RlcihQYXRoLCAnUGF0aCcpO1xuXG5mdW5jdGlvbiBhcnJheSgpIHtcbiAgcmV0dXJuIHRoaXMuX2FycmF5IHx8ICh0aGlzLl9hcnJheSA9IG5ldyBQb2ludEFycmF5KHRoaXMuYXR0cigncG9pbnRzJykpKTtcbn0gLy8gQ2xlYXIgYXJyYXkgY2FjaGVcblxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGRlbGV0ZSB0aGlzLl9hcnJheTtcbiAgcmV0dXJuIHRoaXM7XG59IC8vIE1vdmUgYnkgbGVmdCB0b3AgY29ybmVyXG5cbmZ1bmN0aW9uIG1vdmUkMih4LCB5KSB7XG4gIHJldHVybiB0aGlzLmF0dHIoJ3BvaW50cycsIHRoaXMuYXJyYXkoKS5tb3ZlKHgsIHkpKTtcbn0gLy8gUGxvdCBuZXcgcGF0aFxuXG5mdW5jdGlvbiBwbG90KHApIHtcbiAgcmV0dXJuIHAgPT0gbnVsbCA/IHRoaXMuYXJyYXkoKSA6IHRoaXMuY2xlYXIoKS5hdHRyKCdwb2ludHMnLCB0eXBlb2YgcCA9PT0gJ3N0cmluZycgPyBwIDogdGhpcy5fYXJyYXkgPSBuZXcgUG9pbnRBcnJheShwKSk7XG59IC8vIFNldCBlbGVtZW50IHNpemUgdG8gZ2l2ZW4gd2lkdGggYW5kIGhlaWdodFxuXG5mdW5jdGlvbiBzaXplJDEod2lkdGgsIGhlaWdodCkge1xuICBjb25zdCBwID0gcHJvcG9ydGlvbmFsU2l6ZSh0aGlzLCB3aWR0aCwgaGVpZ2h0KTtcbiAgcmV0dXJuIHRoaXMuYXR0cigncG9pbnRzJywgdGhpcy5hcnJheSgpLnNpemUocC53aWR0aCwgcC5oZWlnaHQpKTtcbn1cblxudmFyIHBvbHkgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgYXJyYXk6IGFycmF5LFxuICBjbGVhcjogY2xlYXIsXG4gIG1vdmU6IG1vdmUkMixcbiAgcGxvdDogcGxvdCxcbiAgc2l6ZTogc2l6ZSQxXG59O1xuXG5jbGFzcyBQb2x5Z29uIGV4dGVuZHMgU2hhcGUge1xuICAvLyBJbml0aWFsaXplIG5vZGVcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdwb2x5Z29uJywgbm9kZSksIGF0dHJzKTtcbiAgfVxuXG59XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICAvLyBDcmVhdGUgYSB3cmFwcGVkIHBvbHlnb24gZWxlbWVudFxuICAgIHBvbHlnb246IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uIChwKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgcGxvdCBpcyBjYWxsZWQgYXMgYSBzZXR0ZXJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgUG9seWdvbigpKS5wbG90KHAgfHwgbmV3IFBvaW50QXJyYXkoKSk7XG4gICAgfSlcbiAgfVxufSk7XG5leHRlbmQoUG9seWdvbiwgcG9pbnRlZCk7XG5leHRlbmQoUG9seWdvbiwgcG9seSk7XG5yZWdpc3RlcihQb2x5Z29uLCAnUG9seWdvbicpO1xuXG5jbGFzcyBQb2x5bGluZSBleHRlbmRzIFNoYXBlIHtcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygncG9seWxpbmUnLCBub2RlKSwgYXR0cnMpO1xuICB9XG5cbn1cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIC8vIENyZWF0ZSBhIHdyYXBwZWQgcG9seWdvbiBlbGVtZW50XG4gICAgcG9seWxpbmU6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uIChwKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgcGxvdCBpcyBjYWxsZWQgYXMgYSBzZXR0ZXJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgUG9seWxpbmUoKSkucGxvdChwIHx8IG5ldyBQb2ludEFycmF5KCkpO1xuICAgIH0pXG4gIH1cbn0pO1xuZXh0ZW5kKFBvbHlsaW5lLCBwb2ludGVkKTtcbmV4dGVuZChQb2x5bGluZSwgcG9seSk7XG5yZWdpc3RlcihQb2x5bGluZSwgJ1BvbHlsaW5lJyk7XG5cbmNsYXNzIFJlY3QgZXh0ZW5kcyBTaGFwZSB7XG4gIC8vIEluaXRpYWxpemUgbm9kZVxuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ3JlY3QnLCBub2RlKSwgYXR0cnMpO1xuICB9XG5cbn1cbmV4dGVuZChSZWN0LCB7XG4gIHJ4LFxuICByeVxufSk7XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICAvLyBDcmVhdGUgYSByZWN0IGVsZW1lbnRcbiAgICByZWN0OiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBSZWN0KCkpLnNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgfSlcbiAgfVxufSk7XG5yZWdpc3RlcihSZWN0LCAnUmVjdCcpO1xuXG5jbGFzcyBRdWV1ZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2ZpcnN0ID0gbnVsbDtcbiAgICB0aGlzLl9sYXN0ID0gbnVsbDtcbiAgfSAvLyBTaG93cyB1cyB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdFxuXG5cbiAgZmlyc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpcnN0ICYmIHRoaXMuX2ZpcnN0LnZhbHVlO1xuICB9IC8vIFNob3dzIHVzIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3RcblxuXG4gIGxhc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3QgJiYgdGhpcy5fbGFzdC52YWx1ZTtcbiAgfVxuXG4gIHB1c2godmFsdWUpIHtcbiAgICAvLyBBbiBpdGVtIHN0b3JlcyBhbiBpZCBhbmQgdGhlIHByb3ZpZGVkIHZhbHVlXG4gICAgY29uc3QgaXRlbSA9IHR5cGVvZiB2YWx1ZS5uZXh0ICE9PSAndW5kZWZpbmVkJyA/IHZhbHVlIDoge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgbmV4dDogbnVsbCxcbiAgICAgIHByZXY6IG51bGxcbiAgICB9OyAvLyBEZWFsIHdpdGggdGhlIHF1ZXVlIGJlaW5nIGVtcHR5IG9yIHBvcHVsYXRlZFxuXG4gICAgaWYgKHRoaXMuX2xhc3QpIHtcbiAgICAgIGl0ZW0ucHJldiA9IHRoaXMuX2xhc3Q7XG4gICAgICB0aGlzLl9sYXN0Lm5leHQgPSBpdGVtO1xuICAgICAgdGhpcy5fbGFzdCA9IGl0ZW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xhc3QgPSBpdGVtO1xuICAgICAgdGhpcy5fZmlyc3QgPSBpdGVtO1xuICAgIH0gLy8gUmV0dXJuIHRoZSBjdXJyZW50IGl0ZW1cblxuXG4gICAgcmV0dXJuIGl0ZW07XG4gIH0gLy8gUmVtb3ZlcyB0aGUgaXRlbSB0aGF0IHdhcyByZXR1cm5lZCBmcm9tIHRoZSBwdXNoXG5cblxuICByZW1vdmUoaXRlbSkge1xuICAgIC8vIFJlbGluayB0aGUgcHJldmlvdXMgaXRlbVxuICAgIGlmIChpdGVtLnByZXYpIGl0ZW0ucHJldi5uZXh0ID0gaXRlbS5uZXh0O1xuICAgIGlmIChpdGVtLm5leHQpIGl0ZW0ubmV4dC5wcmV2ID0gaXRlbS5wcmV2O1xuICAgIGlmIChpdGVtID09PSB0aGlzLl9sYXN0KSB0aGlzLl9sYXN0ID0gaXRlbS5wcmV2O1xuICAgIGlmIChpdGVtID09PSB0aGlzLl9maXJzdCkgdGhpcy5fZmlyc3QgPSBpdGVtLm5leHQ7IC8vIEludmFsaWRhdGUgaXRlbVxuXG4gICAgaXRlbS5wcmV2ID0gbnVsbDtcbiAgICBpdGVtLm5leHQgPSBudWxsO1xuICB9XG5cbiAgc2hpZnQoKSB7XG4gICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhIHZhbHVlXG4gICAgY29uc3QgcmVtb3ZlID0gdGhpcy5fZmlyc3Q7XG4gICAgaWYgKCFyZW1vdmUpIHJldHVybiBudWxsOyAvLyBJZiB3ZSBkbywgcmVtb3ZlIGl0IGFuZCByZWxpbmsgdGhpbmdzXG5cbiAgICB0aGlzLl9maXJzdCA9IHJlbW92ZS5uZXh0O1xuICAgIGlmICh0aGlzLl9maXJzdCkgdGhpcy5fZmlyc3QucHJldiA9IG51bGw7XG4gICAgdGhpcy5fbGFzdCA9IHRoaXMuX2ZpcnN0ID8gdGhpcy5fbGFzdCA6IG51bGw7XG4gICAgcmV0dXJuIHJlbW92ZS52YWx1ZTtcbiAgfVxuXG59XG5cbmNvbnN0IEFuaW1hdG9yID0ge1xuICBuZXh0RHJhdzogbnVsbCxcbiAgZnJhbWVzOiBuZXcgUXVldWUoKSxcbiAgdGltZW91dHM6IG5ldyBRdWV1ZSgpLFxuICBpbW1lZGlhdGVzOiBuZXcgUXVldWUoKSxcbiAgdGltZXI6ICgpID0+IGdsb2JhbHMud2luZG93LnBlcmZvcm1hbmNlIHx8IGdsb2JhbHMud2luZG93LkRhdGUsXG4gIHRyYW5zZm9ybXM6IFtdLFxuXG4gIGZyYW1lKGZuKSB7XG4gICAgLy8gU3RvcmUgdGhlIG5vZGVcbiAgICBjb25zdCBub2RlID0gQW5pbWF0b3IuZnJhbWVzLnB1c2goe1xuICAgICAgcnVuOiBmblxuICAgIH0pOyAvLyBSZXF1ZXN0IGFuIGFuaW1hdGlvbiBmcmFtZSBpZiB3ZSBkb24ndCBoYXZlIG9uZVxuXG4gICAgaWYgKEFuaW1hdG9yLm5leHREcmF3ID09PSBudWxsKSB7XG4gICAgICBBbmltYXRvci5uZXh0RHJhdyA9IGdsb2JhbHMud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShBbmltYXRvci5fZHJhdyk7XG4gICAgfSAvLyBSZXR1cm4gdGhlIG5vZGUgc28gd2UgY2FuIHJlbW92ZSBpdCBlYXNpbHlcblxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG5cbiAgdGltZW91dChmbiwgZGVsYXkpIHtcbiAgICBkZWxheSA9IGRlbGF5IHx8IDA7IC8vIFdvcmsgb3V0IHdoZW4gdGhlIGV2ZW50IHNob3VsZCBmaXJlXG5cbiAgICBjb25zdCB0aW1lID0gQW5pbWF0b3IudGltZXIoKS5ub3coKSArIGRlbGF5OyAvLyBBZGQgdGhlIHRpbWVvdXQgdG8gdGhlIGVuZCBvZiB0aGUgcXVldWVcblxuICAgIGNvbnN0IG5vZGUgPSBBbmltYXRvci50aW1lb3V0cy5wdXNoKHtcbiAgICAgIHJ1bjogZm4sXG4gICAgICB0aW1lOiB0aW1lXG4gICAgfSk7IC8vIFJlcXVlc3QgYW5vdGhlciBhbmltYXRpb24gZnJhbWUgaWYgd2UgbmVlZCBvbmVcblxuICAgIGlmIChBbmltYXRvci5uZXh0RHJhdyA9PT0gbnVsbCkge1xuICAgICAgQW5pbWF0b3IubmV4dERyYXcgPSBnbG9iYWxzLndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoQW5pbWF0b3IuX2RyYXcpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9LFxuXG4gIGltbWVkaWF0ZShmbikge1xuICAgIC8vIEFkZCB0aGUgaW1tZWRpYXRlIGZuIHRvIHRoZSBlbmQgb2YgdGhlIHF1ZXVlXG4gICAgY29uc3Qgbm9kZSA9IEFuaW1hdG9yLmltbWVkaWF0ZXMucHVzaChmbik7IC8vIFJlcXVlc3QgYW5vdGhlciBhbmltYXRpb24gZnJhbWUgaWYgd2UgbmVlZCBvbmVcblxuICAgIGlmIChBbmltYXRvci5uZXh0RHJhdyA9PT0gbnVsbCkge1xuICAgICAgQW5pbWF0b3IubmV4dERyYXcgPSBnbG9iYWxzLndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoQW5pbWF0b3IuX2RyYXcpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9LFxuXG4gIGNhbmNlbEZyYW1lKG5vZGUpIHtcbiAgICBub2RlICE9IG51bGwgJiYgQW5pbWF0b3IuZnJhbWVzLnJlbW92ZShub2RlKTtcbiAgfSxcblxuICBjbGVhclRpbWVvdXQobm9kZSkge1xuICAgIG5vZGUgIT0gbnVsbCAmJiBBbmltYXRvci50aW1lb3V0cy5yZW1vdmUobm9kZSk7XG4gIH0sXG5cbiAgY2FuY2VsSW1tZWRpYXRlKG5vZGUpIHtcbiAgICBub2RlICE9IG51bGwgJiYgQW5pbWF0b3IuaW1tZWRpYXRlcy5yZW1vdmUobm9kZSk7XG4gIH0sXG5cbiAgX2RyYXcobm93KSB7XG4gICAgLy8gUnVuIGFsbCB0aGUgdGltZW91dHMgd2UgY2FuIHJ1biwgaWYgdGhleSBhcmUgbm90IHJlYWR5IHlldCwgYWRkIHRoZW1cbiAgICAvLyB0byB0aGUgZW5kIG9mIHRoZSBxdWV1ZSBpbW1lZGlhdGVseSEgKGJhZCB0aW1lb3V0cyEhISBbc2FyY2FzbV0pXG4gICAgbGV0IG5leHRUaW1lb3V0ID0gbnVsbDtcbiAgICBjb25zdCBsYXN0VGltZW91dCA9IEFuaW1hdG9yLnRpbWVvdXRzLmxhc3QoKTtcblxuICAgIHdoaWxlIChuZXh0VGltZW91dCA9IEFuaW1hdG9yLnRpbWVvdXRzLnNoaWZ0KCkpIHtcbiAgICAgIC8vIFJ1biB0aGUgdGltZW91dCBpZiBpdHMgdGltZSwgb3IgcHVzaCBpdCB0byB0aGUgZW5kXG4gICAgICBpZiAobm93ID49IG5leHRUaW1lb3V0LnRpbWUpIHtcbiAgICAgICAgbmV4dFRpbWVvdXQucnVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBBbmltYXRvci50aW1lb3V0cy5wdXNoKG5leHRUaW1lb3V0KTtcbiAgICAgIH0gLy8gSWYgd2UgaGl0IHRoZSBsYXN0IGl0ZW0sIHdlIHNob3VsZCBzdG9wIHNoaWZ0aW5nIG91dCBtb3JlIGl0ZW1zXG5cblxuICAgICAgaWYgKG5leHRUaW1lb3V0ID09PSBsYXN0VGltZW91dCkgYnJlYWs7XG4gICAgfSAvLyBSdW4gYWxsIG9mIHRoZSBhbmltYXRpb24gZnJhbWVzXG5cblxuICAgIGxldCBuZXh0RnJhbWUgPSBudWxsO1xuICAgIGNvbnN0IGxhc3RGcmFtZSA9IEFuaW1hdG9yLmZyYW1lcy5sYXN0KCk7XG5cbiAgICB3aGlsZSAobmV4dEZyYW1lICE9PSBsYXN0RnJhbWUgJiYgKG5leHRGcmFtZSA9IEFuaW1hdG9yLmZyYW1lcy5zaGlmdCgpKSkge1xuICAgICAgbmV4dEZyYW1lLnJ1bihub3cpO1xuICAgIH1cblxuICAgIGxldCBuZXh0SW1tZWRpYXRlID0gbnVsbDtcblxuICAgIHdoaWxlIChuZXh0SW1tZWRpYXRlID0gQW5pbWF0b3IuaW1tZWRpYXRlcy5zaGlmdCgpKSB7XG4gICAgICBuZXh0SW1tZWRpYXRlKCk7XG4gICAgfSAvLyBJZiB3ZSBoYXZlIHJlbWFpbmluZyB0aW1lb3V0cyBvciBmcmFtZXMsIGRyYXcgdW50aWwgd2UgZG9uJ3QgYW55bW9yZVxuXG5cbiAgICBBbmltYXRvci5uZXh0RHJhdyA9IEFuaW1hdG9yLnRpbWVvdXRzLmZpcnN0KCkgfHwgQW5pbWF0b3IuZnJhbWVzLmZpcnN0KCkgPyBnbG9iYWxzLndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoQW5pbWF0b3IuX2RyYXcpIDogbnVsbDtcbiAgfVxuXG59O1xuXG5jb25zdCBtYWtlU2NoZWR1bGUgPSBmdW5jdGlvbiAocnVubmVySW5mbykge1xuICBjb25zdCBzdGFydCA9IHJ1bm5lckluZm8uc3RhcnQ7XG4gIGNvbnN0IGR1cmF0aW9uID0gcnVubmVySW5mby5ydW5uZXIuZHVyYXRpb24oKTtcbiAgY29uc3QgZW5kID0gc3RhcnQgKyBkdXJhdGlvbjtcbiAgcmV0dXJuIHtcbiAgICBzdGFydDogc3RhcnQsXG4gICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgIGVuZDogZW5kLFxuICAgIHJ1bm5lcjogcnVubmVySW5mby5ydW5uZXJcbiAgfTtcbn07XG5cbmNvbnN0IGRlZmF1bHRTb3VyY2UgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHcgPSBnbG9iYWxzLndpbmRvdztcbiAgcmV0dXJuICh3LnBlcmZvcm1hbmNlIHx8IHcuRGF0ZSkubm93KCk7XG59O1xuXG5jbGFzcyBUaW1lbGluZSBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgLy8gQ29uc3RydWN0IGEgbmV3IHRpbWVsaW5lIG9uIHRoZSBnaXZlbiBlbGVtZW50XG4gIGNvbnN0cnVjdG9yKHRpbWVTb3VyY2UgPSBkZWZhdWx0U291cmNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl90aW1lU291cmNlID0gdGltZVNvdXJjZTsgLy8gU3RvcmUgdGhlIHRpbWluZyB2YXJpYWJsZXNcblxuICAgIHRoaXMuX3N0YXJ0VGltZSA9IDA7XG4gICAgdGhpcy5fc3BlZWQgPSAxLjA7IC8vIERldGVybWluZXMgaG93IGxvbmcgYSBydW5uZXIgaXMgaG9sZCBpbiBtZW1vcnkuIENhbiBiZSBhIGR0IG9yIHRydWUvZmFsc2VcblxuICAgIHRoaXMuX3BlcnNpc3QgPSAwOyAvLyBLZWVwIHRyYWNrIG9mIHRoZSBydW5uaW5nIGFuaW1hdGlvbnMgYW5kIHRoZWlyIHN0YXJ0aW5nIHBhcmFtZXRlcnNcblxuICAgIHRoaXMuX25leHRGcmFtZSA9IG51bGw7XG4gICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9ydW5uZXJzID0gW107XG4gICAgdGhpcy5fcnVubmVySWRzID0gW107XG4gICAgdGhpcy5fbGFzdFJ1bm5lcklkID0gLTE7XG4gICAgdGhpcy5fdGltZSA9IDA7XG4gICAgdGhpcy5fbGFzdFNvdXJjZVRpbWUgPSAwO1xuICAgIHRoaXMuX2xhc3RTdGVwVGltZSA9IDA7IC8vIE1ha2Ugc3VyZSB0aGF0IHN0ZXAgaXMgYWx3YXlzIGNhbGxlZCBpbiBjbGFzcyBjb250ZXh0XG5cbiAgICB0aGlzLl9zdGVwID0gdGhpcy5fc3RlcEZuLmJpbmQodGhpcywgZmFsc2UpO1xuICAgIHRoaXMuX3N0ZXBJbW1lZGlhdGUgPSB0aGlzLl9zdGVwRm4uYmluZCh0aGlzLCB0cnVlKTtcbiAgfVxuXG4gIGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gISF0aGlzLl9uZXh0RnJhbWU7XG4gIH1cblxuICBmaW5pc2goKSB7XG4gICAgLy8gR28gdG8gZW5kIGFuZCBwYXVzZVxuICAgIHRoaXMudGltZSh0aGlzLmdldEVuZFRpbWVPZlRpbWVsaW5lKCkgKyAxKTtcbiAgICByZXR1cm4gdGhpcy5wYXVzZSgpO1xuICB9IC8vIENhbGN1bGF0ZXMgdGhlIGVuZCBvZiB0aGUgdGltZWxpbmVcblxuXG4gIGdldEVuZFRpbWUoKSB7XG4gICAgY29uc3QgbGFzdFJ1bm5lckluZm8gPSB0aGlzLmdldExhc3RSdW5uZXJJbmZvKCk7XG4gICAgY29uc3QgbGFzdER1cmF0aW9uID0gbGFzdFJ1bm5lckluZm8gPyBsYXN0UnVubmVySW5mby5ydW5uZXIuZHVyYXRpb24oKSA6IDA7XG4gICAgY29uc3QgbGFzdFN0YXJ0VGltZSA9IGxhc3RSdW5uZXJJbmZvID8gbGFzdFJ1bm5lckluZm8uc3RhcnQgOiB0aGlzLl90aW1lO1xuICAgIHJldHVybiBsYXN0U3RhcnRUaW1lICsgbGFzdER1cmF0aW9uO1xuICB9XG5cbiAgZ2V0RW5kVGltZU9mVGltZWxpbmUoKSB7XG4gICAgY29uc3QgZW5kVGltZXMgPSB0aGlzLl9ydW5uZXJzLm1hcChpID0+IGkuc3RhcnQgKyBpLnJ1bm5lci5kdXJhdGlvbigpKTtcblxuICAgIHJldHVybiBNYXRoLm1heCgwLCAuLi5lbmRUaW1lcyk7XG4gIH1cblxuICBnZXRMYXN0UnVubmVySW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSdW5uZXJJbmZvQnlJZCh0aGlzLl9sYXN0UnVubmVySWQpO1xuICB9XG5cbiAgZ2V0UnVubmVySW5mb0J5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVubmVyc1t0aGlzLl9ydW5uZXJJZHMuaW5kZXhPZihpZCldIHx8IG51bGw7XG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICB0aGlzLl9wYXVzZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLl9jb250aW51ZSgpO1xuICB9XG5cbiAgcGVyc2lzdChkdE9yRm9yZXZlcikge1xuICAgIGlmIChkdE9yRm9yZXZlciA9PSBudWxsKSByZXR1cm4gdGhpcy5fcGVyc2lzdDtcbiAgICB0aGlzLl9wZXJzaXN0ID0gZHRPckZvcmV2ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIC8vIE5vdyBtYWtlIHN1cmUgd2UgYXJlIG5vdCBwYXVzZWQgYW5kIGNvbnRpbnVlIHRoZSBhbmltYXRpb25cbiAgICB0aGlzLl9wYXVzZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVUaW1lKCkuX2NvbnRpbnVlKCk7XG4gIH1cblxuICByZXZlcnNlKHllcykge1xuICAgIGNvbnN0IGN1cnJlbnRTcGVlZCA9IHRoaXMuc3BlZWQoKTtcbiAgICBpZiAoeWVzID09IG51bGwpIHJldHVybiB0aGlzLnNwZWVkKC1jdXJyZW50U3BlZWQpO1xuICAgIGNvbnN0IHBvc2l0aXZlID0gTWF0aC5hYnMoY3VycmVudFNwZWVkKTtcbiAgICByZXR1cm4gdGhpcy5zcGVlZCh5ZXMgPyAtcG9zaXRpdmUgOiBwb3NpdGl2ZSk7XG4gIH0gLy8gc2NoZWR1bGVzIGEgcnVubmVyIG9uIHRoZSB0aW1lbGluZVxuXG5cbiAgc2NoZWR1bGUocnVubmVyLCBkZWxheSwgd2hlbikge1xuICAgIGlmIChydW5uZXIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3J1bm5lcnMubWFwKG1ha2VTY2hlZHVsZSk7XG4gICAgfSAvLyBUaGUgc3RhcnQgdGltZSBmb3IgdGhlIG5leHQgYW5pbWF0aW9uIGNhbiBlaXRoZXIgYmUgZ2l2ZW4gZXhwbGljaXRseSxcbiAgICAvLyBkZXJpdmVkIGZyb20gdGhlIGN1cnJlbnQgdGltZWxpbmUgdGltZSBvciBpdCBjYW4gYmUgcmVsYXRpdmUgdG8gdGhlXG4gICAgLy8gbGFzdCBzdGFydCB0aW1lIHRvIGNoYWluIGFuaW1hdGlvbnMgZGlyZWN0bHlcblxuXG4gICAgbGV0IGFic29sdXRlU3RhcnRUaW1lID0gMDtcbiAgICBjb25zdCBlbmRUaW1lID0gdGhpcy5nZXRFbmRUaW1lKCk7XG4gICAgZGVsYXkgPSBkZWxheSB8fCAwOyAvLyBXb3JrIG91dCB3aGVuIHRvIHN0YXJ0IHRoZSBhbmltYXRpb25cblxuICAgIGlmICh3aGVuID09IG51bGwgfHwgd2hlbiA9PT0gJ2xhc3QnIHx8IHdoZW4gPT09ICdhZnRlcicpIHtcbiAgICAgIC8vIFRha2UgdGhlIGxhc3QgdGltZSBhbmQgaW5jcmVtZW50XG4gICAgICBhYnNvbHV0ZVN0YXJ0VGltZSA9IGVuZFRpbWU7XG4gICAgfSBlbHNlIGlmICh3aGVuID09PSAnYWJzb2x1dGUnIHx8IHdoZW4gPT09ICdzdGFydCcpIHtcbiAgICAgIGFic29sdXRlU3RhcnRUaW1lID0gZGVsYXk7XG4gICAgICBkZWxheSA9IDA7XG4gICAgfSBlbHNlIGlmICh3aGVuID09PSAnbm93Jykge1xuICAgICAgYWJzb2x1dGVTdGFydFRpbWUgPSB0aGlzLl90aW1lO1xuICAgIH0gZWxzZSBpZiAod2hlbiA9PT0gJ3JlbGF0aXZlJykge1xuICAgICAgY29uc3QgcnVubmVySW5mbyA9IHRoaXMuZ2V0UnVubmVySW5mb0J5SWQocnVubmVyLmlkKTtcblxuICAgICAgaWYgKHJ1bm5lckluZm8pIHtcbiAgICAgICAgYWJzb2x1dGVTdGFydFRpbWUgPSBydW5uZXJJbmZvLnN0YXJ0ICsgZGVsYXk7XG4gICAgICAgIGRlbGF5ID0gMDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHdoZW4gPT09ICd3aXRoLWxhc3QnKSB7XG4gICAgICBjb25zdCBsYXN0UnVubmVySW5mbyA9IHRoaXMuZ2V0TGFzdFJ1bm5lckluZm8oKTtcbiAgICAgIGNvbnN0IGxhc3RTdGFydFRpbWUgPSBsYXN0UnVubmVySW5mbyA/IGxhc3RSdW5uZXJJbmZvLnN0YXJ0IDogdGhpcy5fdGltZTtcbiAgICAgIGFic29sdXRlU3RhcnRUaW1lID0gbGFzdFN0YXJ0VGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZhbHVlIGZvciB0aGUgXCJ3aGVuXCIgcGFyYW1ldGVyJyk7XG4gICAgfSAvLyBNYW5hZ2UgcnVubmVyXG5cblxuICAgIHJ1bm5lci51bnNjaGVkdWxlKCk7XG4gICAgcnVubmVyLnRpbWVsaW5lKHRoaXMpO1xuICAgIGNvbnN0IHBlcnNpc3QgPSBydW5uZXIucGVyc2lzdCgpO1xuICAgIGNvbnN0IHJ1bm5lckluZm8gPSB7XG4gICAgICBwZXJzaXN0OiBwZXJzaXN0ID09PSBudWxsID8gdGhpcy5fcGVyc2lzdCA6IHBlcnNpc3QsXG4gICAgICBzdGFydDogYWJzb2x1dGVTdGFydFRpbWUgKyBkZWxheSxcbiAgICAgIHJ1bm5lclxuICAgIH07XG4gICAgdGhpcy5fbGFzdFJ1bm5lcklkID0gcnVubmVyLmlkO1xuXG4gICAgdGhpcy5fcnVubmVycy5wdXNoKHJ1bm5lckluZm8pO1xuXG4gICAgdGhpcy5fcnVubmVycy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0IC0gYi5zdGFydCk7XG5cbiAgICB0aGlzLl9ydW5uZXJJZHMgPSB0aGlzLl9ydW5uZXJzLm1hcChpbmZvID0+IGluZm8ucnVubmVyLmlkKTtcblxuICAgIHRoaXMudXBkYXRlVGltZSgpLl9jb250aW51ZSgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZWVrKGR0KSB7XG4gICAgcmV0dXJuIHRoaXMudGltZSh0aGlzLl90aW1lICsgZHQpO1xuICB9XG5cbiAgc291cmNlKGZuKSB7XG4gICAgaWYgKGZuID09IG51bGwpIHJldHVybiB0aGlzLl90aW1lU291cmNlO1xuICAgIHRoaXMuX3RpbWVTb3VyY2UgPSBmbjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNwZWVkKHNwZWVkKSB7XG4gICAgaWYgKHNwZWVkID09IG51bGwpIHJldHVybiB0aGlzLl9zcGVlZDtcbiAgICB0aGlzLl9zcGVlZCA9IHNwZWVkO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICAvLyBHbyB0byBzdGFydCBhbmQgcGF1c2VcbiAgICB0aGlzLnRpbWUoMCk7XG4gICAgcmV0dXJuIHRoaXMucGF1c2UoKTtcbiAgfVxuXG4gIHRpbWUodGltZSkge1xuICAgIGlmICh0aW1lID09IG51bGwpIHJldHVybiB0aGlzLl90aW1lO1xuICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuICAgIHJldHVybiB0aGlzLl9jb250aW51ZSh0cnVlKTtcbiAgfSAvLyBSZW1vdmUgdGhlIHJ1bm5lciBmcm9tIHRoaXMgdGltZWxpbmVcblxuXG4gIHVuc2NoZWR1bGUocnVubmVyKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9ydW5uZXJJZHMuaW5kZXhPZihydW5uZXIuaWQpO1xuXG4gICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIHRoaXM7XG5cbiAgICB0aGlzLl9ydW5uZXJzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICB0aGlzLl9ydW5uZXJJZHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIHJ1bm5lci50aW1lbGluZShudWxsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBNYWtlcyBzdXJlLCB0aGF0IGFmdGVyIHBhdXNpbmcgdGhlIHRpbWUgZG9lc24ndCBqdW1wXG5cblxuICB1cGRhdGVUaW1lKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmUoKSkge1xuICAgICAgdGhpcy5fbGFzdFNvdXJjZVRpbWUgPSB0aGlzLl90aW1lU291cmNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gQ2hlY2tzIGlmIHdlIGFyZSBydW5uaW5nIGFuZCBjb250aW51ZXMgdGhlIGFuaW1hdGlvblxuXG5cbiAgX2NvbnRpbnVlKGltbWVkaWF0ZVN0ZXAgPSBmYWxzZSkge1xuICAgIEFuaW1hdG9yLmNhbmNlbEZyYW1lKHRoaXMuX25leHRGcmFtZSk7XG4gICAgdGhpcy5fbmV4dEZyYW1lID0gbnVsbDtcbiAgICBpZiAoaW1tZWRpYXRlU3RlcCkgcmV0dXJuIHRoaXMuX3N0ZXBJbW1lZGlhdGUoKTtcbiAgICBpZiAodGhpcy5fcGF1c2VkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLl9uZXh0RnJhbWUgPSBBbmltYXRvci5mcmFtZSh0aGlzLl9zdGVwKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9zdGVwRm4oaW1tZWRpYXRlU3RlcCA9IGZhbHNlKSB7XG4gICAgLy8gR2V0IHRoZSB0aW1lIGRlbHRhIGZyb20gdGhlIGxhc3QgdGltZSBhbmQgdXBkYXRlIHRoZSB0aW1lXG4gICAgY29uc3QgdGltZSA9IHRoaXMuX3RpbWVTb3VyY2UoKTtcblxuICAgIGxldCBkdFNvdXJjZSA9IHRpbWUgLSB0aGlzLl9sYXN0U291cmNlVGltZTtcbiAgICBpZiAoaW1tZWRpYXRlU3RlcCkgZHRTb3VyY2UgPSAwO1xuICAgIGNvbnN0IGR0VGltZSA9IHRoaXMuX3NwZWVkICogZHRTb3VyY2UgKyAodGhpcy5fdGltZSAtIHRoaXMuX2xhc3RTdGVwVGltZSk7XG4gICAgdGhpcy5fbGFzdFNvdXJjZVRpbWUgPSB0aW1lOyAvLyBPbmx5IHVwZGF0ZSB0aGUgdGltZSBpZiB3ZSB1c2UgdGhlIHRpbWVTb3VyY2UuXG4gICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgY3VycmVudCB0aW1lXG5cbiAgICBpZiAoIWltbWVkaWF0ZVN0ZXApIHtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgdGltZVxuICAgICAgdGhpcy5fdGltZSArPSBkdFRpbWU7XG4gICAgICB0aGlzLl90aW1lID0gdGhpcy5fdGltZSA8IDAgPyAwIDogdGhpcy5fdGltZTtcbiAgICB9XG5cbiAgICB0aGlzLl9sYXN0U3RlcFRpbWUgPSB0aGlzLl90aW1lO1xuICAgIHRoaXMuZmlyZSgndGltZScsIHRoaXMuX3RpbWUpOyAvLyBUaGlzIGlzIGZvciB0aGUgY2FzZSB0aGF0IHRoZSB0aW1lbGluZSB3YXMgc2Vla2VkIHNvIHRoYXQgdGhlIHRpbWVcbiAgICAvLyBpcyBub3cgYmVmb3JlIHRoZSBzdGFydFRpbWUgb2YgdGhlIHJ1bm5lci4gVGhhdHMgd2h5IHdlIG5lZWQgdG8gc2V0XG4gICAgLy8gdGhlIHJ1bm5lciB0byBwb3NpdGlvbiAwXG4gICAgLy8gRklYTUU6XG4gICAgLy8gSG93ZXZlciwgcmVzZXRpbmcgaW4gaW5zZXJ0aW9uIG9yZGVyIGxlYWRzIHRvIGJ1Z3MuIENvbnNpZGVyaW5nIHRoZSBjYXNlLFxuICAgIC8vIHdoZXJlIDIgcnVubmVycyBjaGFuZ2UgdGhlIHNhbWUgYXR0cmlidXRlIGJ1dCBpbiBkaWZmZXJlbnQgdGltZXMsXG4gICAgLy8gcmVzZXRpbmcgYm90aCBvZiB0aGVtIHdpbGwgbGVhZCB0byB0aGUgY2FzZSB3aGVyZSB0aGUgbGF0ZXIgZGVmaW5lZFxuICAgIC8vIHJ1bm5lciBhbHdheXMgd2lucyB0aGUgcmVzZXQgZXZlbiBpZiB0aGUgb3RoZXIgcnVubmVyIHN0YXJ0ZWQgZWFybGllclxuICAgIC8vIGFuZCB0aGVyZWZvcmUgc2hvdWxkIHdpbiB0aGUgYXR0cmlidXRlIGJhdHRsZVxuICAgIC8vIHRoaXMgY2FuIGJlIHNvbHZlZCBieSByZXNldGluZyB0aGVtIGJhY2t3YXJkc1xuXG4gICAgZm9yIChsZXQgayA9IHRoaXMuX3J1bm5lcnMubGVuZ3RoOyBrLS07KSB7XG4gICAgICAvLyBHZXQgYW5kIHJ1biB0aGUgY3VycmVudCBydW5uZXIgYW5kIGlnbm9yZSBpdCBpZiBpdHMgaW5hY3RpdmVcbiAgICAgIGNvbnN0IHJ1bm5lckluZm8gPSB0aGlzLl9ydW5uZXJzW2tdO1xuICAgICAgY29uc3QgcnVubmVyID0gcnVubmVySW5mby5ydW5uZXI7IC8vIE1ha2Ugc3VyZSB0aGF0IHdlIGdpdmUgdGhlIGFjdHVhbCBkaWZmZXJlbmNlXG4gICAgICAvLyBiZXR3ZWVuIHJ1bm5lciBzdGFydCB0aW1lIGFuZCBub3dcblxuICAgICAgY29uc3QgZHRUb1N0YXJ0ID0gdGhpcy5fdGltZSAtIHJ1bm5lckluZm8uc3RhcnQ7IC8vIERvbnQgcnVuIHJ1bm5lciBpZiBub3Qgc3RhcnRlZCB5ZXRcbiAgICAgIC8vIGFuZCB0cnkgdG8gcmVzZXQgaXRcblxuICAgICAgaWYgKGR0VG9TdGFydCA8PSAwKSB7XG4gICAgICAgIHJ1bm5lci5yZXNldCgpO1xuICAgICAgfVxuICAgIH0gLy8gUnVuIGFsbCBvZiB0aGUgcnVubmVycyBkaXJlY3RseVxuXG5cbiAgICBsZXQgcnVubmVyc0xlZnQgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9ydW5uZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAvLyBHZXQgYW5kIHJ1biB0aGUgY3VycmVudCBydW5uZXIgYW5kIGlnbm9yZSBpdCBpZiBpdHMgaW5hY3RpdmVcbiAgICAgIGNvbnN0IHJ1bm5lckluZm8gPSB0aGlzLl9ydW5uZXJzW2ldO1xuICAgICAgY29uc3QgcnVubmVyID0gcnVubmVySW5mby5ydW5uZXI7XG4gICAgICBsZXQgZHQgPSBkdFRpbWU7IC8vIE1ha2Ugc3VyZSB0aGF0IHdlIGdpdmUgdGhlIGFjdHVhbCBkaWZmZXJlbmNlXG4gICAgICAvLyBiZXR3ZWVuIHJ1bm5lciBzdGFydCB0aW1lIGFuZCBub3dcblxuICAgICAgY29uc3QgZHRUb1N0YXJ0ID0gdGhpcy5fdGltZSAtIHJ1bm5lckluZm8uc3RhcnQ7IC8vIERvbnQgcnVuIHJ1bm5lciBpZiBub3Qgc3RhcnRlZCB5ZXRcblxuICAgICAgaWYgKGR0VG9TdGFydCA8PSAwKSB7XG4gICAgICAgIHJ1bm5lcnNMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKGR0VG9TdGFydCA8IGR0KSB7XG4gICAgICAgIC8vIEFkanVzdCBkdCB0byBtYWtlIHN1cmUgdGhhdCBhbmltYXRpb24gaXMgb24gcG9pbnRcbiAgICAgICAgZHQgPSBkdFRvU3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIGlmICghcnVubmVyLmFjdGl2ZSgpKSBjb250aW51ZTsgLy8gSWYgdGhpcyBydW5uZXIgaXMgc3RpbGwgZ29pbmcsIHNpZ25hbCB0aGF0IHdlIG5lZWQgYW5vdGhlciBhbmltYXRpb25cbiAgICAgIC8vIGZyYW1lLCBvdGhlcndpc2UsIHJlbW92ZSB0aGUgY29tcGxldGVkIHJ1bm5lclxuXG4gICAgICBjb25zdCBmaW5pc2hlZCA9IHJ1bm5lci5zdGVwKGR0KS5kb25lO1xuXG4gICAgICBpZiAoIWZpbmlzaGVkKSB7XG4gICAgICAgIHJ1bm5lcnNMZWZ0ID0gdHJ1ZTsgLy8gY29udGludWVcbiAgICAgIH0gZWxzZSBpZiAocnVubmVySW5mby5wZXJzaXN0ICE9PSB0cnVlKSB7XG4gICAgICAgIC8vIHJ1bm5lciBpcyBmaW5pc2hlZC4gQW5kIHJ1bm5lciBtaWdodCBnZXQgcmVtb3ZlZFxuICAgICAgICBjb25zdCBlbmRUaW1lID0gcnVubmVyLmR1cmF0aW9uKCkgLSBydW5uZXIudGltZSgpICsgdGhpcy5fdGltZTtcblxuICAgICAgICBpZiAoZW5kVGltZSArIHJ1bm5lckluZm8ucGVyc2lzdCA8IHRoaXMuX3RpbWUpIHtcbiAgICAgICAgICAvLyBEZWxldGUgcnVubmVyIGFuZCBjb3JyZWN0IGluZGV4XG4gICAgICAgICAgcnVubmVyLnVuc2NoZWR1bGUoKTtcbiAgICAgICAgICAtLWk7XG4gICAgICAgICAgLS1sZW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIEJhc2ljYWxseTogd2UgY29udGludWUgd2hlbiB0aGVyZSBhcmUgcnVubmVycyByaWdodCBmcm9tIHVzIGluIHRpbWVcbiAgICAvLyB3aGVuIC0tPiwgYW5kIHdoZW4gcnVubmVycyBhcmUgbGVmdCBmcm9tIHVzIHdoZW4gPC0tXG5cblxuICAgIGlmIChydW5uZXJzTGVmdCAmJiAhKHRoaXMuX3NwZWVkIDwgMCAmJiB0aGlzLl90aW1lID09PSAwKSB8fCB0aGlzLl9ydW5uZXJJZHMubGVuZ3RoICYmIHRoaXMuX3NwZWVkIDwgMCAmJiB0aGlzLl90aW1lID4gMCkge1xuICAgICAgdGhpcy5fY29udGludWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgdGhpcy5maXJlKCdmaW5pc2hlZCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIEVsZW1lbnQ6IHtcbiAgICB0aW1lbGluZTogZnVuY3Rpb24gKHRpbWVsaW5lKSB7XG4gICAgICBpZiAodGltZWxpbmUgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl90aW1lbGluZSA9IHRoaXMuX3RpbWVsaW5lIHx8IG5ldyBUaW1lbGluZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdGltZWxpbmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90aW1lbGluZSA9IHRpbWVsaW5lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5jbGFzcyBSdW5uZXIgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpOyAvLyBTdG9yZSBhIHVuaXF1ZSBpZCBvbiB0aGUgcnVubmVyLCBzbyB0aGF0IHdlIGNhbiBpZGVudGlmeSBpdCBsYXRlclxuXG4gICAgdGhpcy5pZCA9IFJ1bm5lci5pZCsrOyAvLyBFbnN1cmUgYSBkZWZhdWx0IHZhbHVlXG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyA9PSBudWxsID8gdGltZWxpbmUuZHVyYXRpb24gOiBvcHRpb25zOyAvLyBFbnN1cmUgdGhhdCB3ZSBnZXQgYSBjb250cm9sbGVyXG5cbiAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicgPyBuZXcgQ29udHJvbGxlcihvcHRpb25zKSA6IG9wdGlvbnM7IC8vIERlY2xhcmUgYWxsIG9mIHRoZSB2YXJpYWJsZXNcblxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuX3RpbWVsaW5lID0gbnVsbDtcbiAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICB0aGlzLl9xdWV1ZSA9IFtdOyAvLyBXb3JrIG91dCB0aGUgc3RlcHBlciBhbmQgdGhlIGR1cmF0aW9uXG5cbiAgICB0aGlzLl9kdXJhdGlvbiA9IHR5cGVvZiBvcHRpb25zID09PSAnbnVtYmVyJyAmJiBvcHRpb25zO1xuICAgIHRoaXMuX2lzRGVjbGFyYXRpdmUgPSBvcHRpb25zIGluc3RhbmNlb2YgQ29udHJvbGxlcjtcbiAgICB0aGlzLl9zdGVwcGVyID0gdGhpcy5faXNEZWNsYXJhdGl2ZSA/IG9wdGlvbnMgOiBuZXcgRWFzZSgpOyAvLyBXZSBjb3B5IHRoZSBjdXJyZW50IHZhbHVlcyBmcm9tIHRoZSB0aW1lbGluZSBiZWNhdXNlIHRoZXkgY2FuIGNoYW5nZVxuXG4gICAgdGhpcy5faGlzdG9yeSA9IHt9OyAvLyBTdG9yZSB0aGUgc3RhdGUgb2YgdGhlIHJ1bm5lclxuXG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLl90aW1lID0gMDtcbiAgICB0aGlzLl9sYXN0VGltZSA9IDA7IC8vIEF0IGNyZWF0aW9uLCB0aGUgcnVubmVyIGlzIGluIHJlc2V0ZWQgc3RhdGVcblxuICAgIHRoaXMuX3Jlc2V0ZWQgPSB0cnVlOyAvLyBTYXZlIHRyYW5zZm9ybXMgYXBwbGllZCB0byB0aGlzIHJ1bm5lclxuXG4gICAgdGhpcy50cmFuc2Zvcm1zID0gbmV3IE1hdHJpeCgpO1xuICAgIHRoaXMudHJhbnNmb3JtSWQgPSAxOyAvLyBMb29waW5nIHZhcmlhYmxlc1xuXG4gICAgdGhpcy5faGF2ZVJldmVyc2VkID0gZmFsc2U7XG4gICAgdGhpcy5fcmV2ZXJzZSA9IGZhbHNlO1xuICAgIHRoaXMuX2xvb3BzRG9uZSA9IDA7XG4gICAgdGhpcy5fc3dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl93YWl0ID0gMDtcbiAgICB0aGlzLl90aW1lcyA9IDE7XG4gICAgdGhpcy5fZnJhbWVJZCA9IG51bGw7IC8vIFN0b3JlcyBob3cgbG9uZyBhIHJ1bm5lciBpcyBzdG9yZWQgYWZ0ZXIgYmVlaW5nIGRvbmVcblxuICAgIHRoaXMuX3BlcnNpc3QgPSB0aGlzLl9pc0RlY2xhcmF0aXZlID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICBzdGF0aWMgc2FuaXRpc2UoZHVyYXRpb24sIGRlbGF5LCB3aGVuKSB7XG4gICAgLy8gSW5pdGlhbGlzZSB0aGUgZGVmYXVsdCBwYXJhbWV0ZXJzXG4gICAgbGV0IHRpbWVzID0gMTtcbiAgICBsZXQgc3dpbmcgPSBmYWxzZTtcbiAgICBsZXQgd2FpdCA9IDA7XG4gICAgZHVyYXRpb24gPSBkdXJhdGlvbiB8fCB0aW1lbGluZS5kdXJhdGlvbjtcbiAgICBkZWxheSA9IGRlbGF5IHx8IHRpbWVsaW5lLmRlbGF5O1xuICAgIHdoZW4gPSB3aGVuIHx8ICdsYXN0JzsgLy8gSWYgd2UgaGF2ZSBhbiBvYmplY3QsIHVucGFjayB0aGUgdmFsdWVzXG5cbiAgICBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnb2JqZWN0JyAmJiAhKGR1cmF0aW9uIGluc3RhbmNlb2YgU3RlcHBlcikpIHtcbiAgICAgIGRlbGF5ID0gZHVyYXRpb24uZGVsYXkgfHwgZGVsYXk7XG4gICAgICB3aGVuID0gZHVyYXRpb24ud2hlbiB8fCB3aGVuO1xuICAgICAgc3dpbmcgPSBkdXJhdGlvbi5zd2luZyB8fCBzd2luZztcbiAgICAgIHRpbWVzID0gZHVyYXRpb24udGltZXMgfHwgdGltZXM7XG4gICAgICB3YWl0ID0gZHVyYXRpb24ud2FpdCB8fCB3YWl0O1xuICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbi5kdXJhdGlvbiB8fCB0aW1lbGluZS5kdXJhdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgc3dpbmc6IHN3aW5nLFxuICAgICAgdGltZXM6IHRpbWVzLFxuICAgICAgd2FpdDogd2FpdCxcbiAgICAgIHdoZW46IHdoZW5cbiAgICB9O1xuICB9XG5cbiAgYWN0aXZlKGVuYWJsZWQpIHtcbiAgICBpZiAoZW5hYmxlZCA9PSBudWxsKSByZXR1cm4gdGhpcy5lbmFibGVkO1xuICAgIHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLypcclxuICBQcml2YXRlIE1ldGhvZHNcclxuICA9PT09PT09PT09PT09PT1cclxuICBNZXRob2RzIHRoYXQgc2hvdWxkbid0IGJlIHVzZWQgZXh0ZXJuYWxseVxyXG4gICovXG5cblxuICBhZGRUcmFuc2Zvcm0odHJhbnNmb3JtLCBpbmRleCkge1xuICAgIHRoaXMudHJhbnNmb3Jtcy5sbXVsdGlwbHlPKHRyYW5zZm9ybSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZnRlcihmbikge1xuICAgIHJldHVybiB0aGlzLm9uKCdmaW5pc2hlZCcsIGZuKTtcbiAgfVxuXG4gIGFuaW1hdGUoZHVyYXRpb24sIGRlbGF5LCB3aGVuKSB7XG4gICAgY29uc3QgbyA9IFJ1bm5lci5zYW5pdGlzZShkdXJhdGlvbiwgZGVsYXksIHdoZW4pO1xuICAgIGNvbnN0IHJ1bm5lciA9IG5ldyBSdW5uZXIoby5kdXJhdGlvbik7XG4gICAgaWYgKHRoaXMuX3RpbWVsaW5lKSBydW5uZXIudGltZWxpbmUodGhpcy5fdGltZWxpbmUpO1xuICAgIGlmICh0aGlzLl9lbGVtZW50KSBydW5uZXIuZWxlbWVudCh0aGlzLl9lbGVtZW50KTtcbiAgICByZXR1cm4gcnVubmVyLmxvb3Aobykuc2NoZWR1bGUoby5kZWxheSwgby53aGVuKTtcbiAgfVxuXG4gIGNsZWFyVHJhbnNmb3JtKCkge1xuICAgIHRoaXMudHJhbnNmb3JtcyA9IG5ldyBNYXRyaXgoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBUT0RPOiBLZWVwIHRyYWNrIG9mIGFsbCB0cmFuc2Zvcm1hdGlvbnMgc28gdGhhdCBkZWxldGlvbiBpcyBmYXN0ZXJcblxuXG4gIGNsZWFyVHJhbnNmb3Jtc0Zyb21RdWV1ZSgpIHtcbiAgICBpZiAoIXRoaXMuZG9uZSB8fCAhdGhpcy5fdGltZWxpbmUgfHwgIXRoaXMuX3RpbWVsaW5lLl9ydW5uZXJJZHMuaW5jbHVkZXModGhpcy5pZCkpIHtcbiAgICAgIHRoaXMuX3F1ZXVlID0gdGhpcy5fcXVldWUuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gIWl0ZW0uaXNUcmFuc2Zvcm07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZWxheShkZWxheSkge1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGUoMCwgZGVsYXkpO1xuICB9XG5cbiAgZHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVzICogKHRoaXMuX3dhaXQgKyB0aGlzLl9kdXJhdGlvbikgLSB0aGlzLl93YWl0O1xuICB9XG5cbiAgZHVyaW5nKGZuKSB7XG4gICAgcmV0dXJuIHRoaXMucXVldWUobnVsbCwgZm4pO1xuICB9XG5cbiAgZWFzZShmbikge1xuICAgIHRoaXMuX3N0ZXBwZXIgPSBuZXcgRWFzZShmbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLypcclxuICBSdW5uZXIgRGVmaW5pdGlvbnNcclxuICA9PT09PT09PT09PT09PT09PT1cclxuICBUaGVzZSBtZXRob2RzIGhlbHAgdXMgZGVmaW5lIHRoZSBydW50aW1lIGJlaGF2aW91ciBvZiB0aGUgUnVubmVyIG9yIHRoZXlcclxuICBoZWxwIHVzIG1ha2UgbmV3IHJ1bm5lcnMgZnJvbSB0aGUgY3VycmVudCBydW5uZXJcclxuICAqL1xuXG5cbiAgZWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICBlbGVtZW50Ll9wcmVwYXJlUnVubmVyKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZpbmlzaCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwKEluZmluaXR5KTtcbiAgfVxuXG4gIGxvb3AodGltZXMsIHN3aW5nLCB3YWl0KSB7XG4gICAgLy8gRGVhbCB3aXRoIHRoZSB1c2VyIHBhc3NpbmcgaW4gYW4gb2JqZWN0XG4gICAgaWYgKHR5cGVvZiB0aW1lcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHN3aW5nID0gdGltZXMuc3dpbmc7XG4gICAgICB3YWl0ID0gdGltZXMud2FpdDtcbiAgICAgIHRpbWVzID0gdGltZXMudGltZXM7XG4gICAgfSAvLyBTYW5pdGlzZSB0aGUgdmFsdWVzIGFuZCBzdG9yZSB0aGVtXG5cblxuICAgIHRoaXMuX3RpbWVzID0gdGltZXMgfHwgSW5maW5pdHk7XG4gICAgdGhpcy5fc3dpbmcgPSBzd2luZyB8fCBmYWxzZTtcbiAgICB0aGlzLl93YWl0ID0gd2FpdCB8fCAwOyAvLyBBbGxvdyB0cnVlIHRvIGJlIHBhc3NlZFxuXG4gICAgaWYgKHRoaXMuX3RpbWVzID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl90aW1lcyA9IEluZmluaXR5O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG9vcHMocCkge1xuICAgIGNvbnN0IGxvb3BEdXJhdGlvbiA9IHRoaXMuX2R1cmF0aW9uICsgdGhpcy5fd2FpdDtcblxuICAgIGlmIChwID09IG51bGwpIHtcbiAgICAgIGNvbnN0IGxvb3BzRG9uZSA9IE1hdGguZmxvb3IodGhpcy5fdGltZSAvIGxvb3BEdXJhdGlvbik7XG4gICAgICBjb25zdCByZWxhdGl2ZVRpbWUgPSB0aGlzLl90aW1lIC0gbG9vcHNEb25lICogbG9vcER1cmF0aW9uO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSByZWxhdGl2ZVRpbWUgLyB0aGlzLl9kdXJhdGlvbjtcbiAgICAgIHJldHVybiBNYXRoLm1pbihsb29wc0RvbmUgKyBwb3NpdGlvbiwgdGhpcy5fdGltZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IHdob2xlID0gTWF0aC5mbG9vcihwKTtcbiAgICBjb25zdCBwYXJ0aWFsID0gcCAlIDE7XG4gICAgY29uc3QgdGltZSA9IGxvb3BEdXJhdGlvbiAqIHdob2xlICsgdGhpcy5fZHVyYXRpb24gKiBwYXJ0aWFsO1xuICAgIHJldHVybiB0aGlzLnRpbWUodGltZSk7XG4gIH1cblxuICBwZXJzaXN0KGR0T3JGb3JldmVyKSB7XG4gICAgaWYgKGR0T3JGb3JldmVyID09IG51bGwpIHJldHVybiB0aGlzLl9wZXJzaXN0O1xuICAgIHRoaXMuX3BlcnNpc3QgPSBkdE9yRm9yZXZlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBvc2l0aW9uKHApIHtcbiAgICAvLyBHZXQgYWxsIG9mIHRoZSB2YXJpYWJsZXMgd2UgbmVlZFxuICAgIGNvbnN0IHggPSB0aGlzLl90aW1lO1xuICAgIGNvbnN0IGQgPSB0aGlzLl9kdXJhdGlvbjtcbiAgICBjb25zdCB3ID0gdGhpcy5fd2FpdDtcbiAgICBjb25zdCB0ID0gdGhpcy5fdGltZXM7XG4gICAgY29uc3QgcyA9IHRoaXMuX3N3aW5nO1xuICAgIGNvbnN0IHIgPSB0aGlzLl9yZXZlcnNlO1xuICAgIGxldCBwb3NpdGlvbjtcblxuICAgIGlmIChwID09IG51bGwpIHtcbiAgICAgIC8qXHJcbiAgICAgIFRoaXMgZnVuY3Rpb24gY29udmVydHMgYSB0aW1lIHRvIGEgcG9zaXRpb24gaW4gdGhlIHJhbmdlIFswLCAxXVxyXG4gICAgICBUaGUgZnVsbCBleHBsYW5hdGlvbiBjYW4gYmUgZm91bmQgaW4gdGhpcyBkZXNtb3MgZGVtb25zdHJhdGlvblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmRlc21vcy5jb20vY2FsY3VsYXRvci91NGZiYXZnY2hlXHJcbiAgICAgIFRoZSBsb2dpYyBpcyBzbGlnaHRseSBzaW1wbGlmaWVkIGhlcmUgYmVjYXVzZSB3ZSBjYW4gdXNlIGJvb2xlYW5zXHJcbiAgICAgICovXG4gICAgICAvLyBGaWd1cmUgb3V0IHRoZSB2YWx1ZSB3aXRob3V0IHRoaW5raW5nIGFib3V0IHRoZSBzdGFydCBvciBlbmQgdGltZVxuICAgICAgY29uc3QgZiA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGNvbnN0IHN3aW5naW5nID0gcyAqIE1hdGguZmxvb3IoeCAlICgyICogKHcgKyBkKSkgLyAodyArIGQpKTtcbiAgICAgICAgY29uc3QgYmFja3dhcmRzID0gc3dpbmdpbmcgJiYgIXIgfHwgIXN3aW5naW5nICYmIHI7XG4gICAgICAgIGNvbnN0IHVuY2xpcGVkID0gTWF0aC5wb3coLTEsIGJhY2t3YXJkcykgKiAoeCAlICh3ICsgZCkpIC8gZCArIGJhY2t3YXJkcztcbiAgICAgICAgY29uc3QgY2xpcHBlZCA9IE1hdGgubWF4KE1hdGgubWluKHVuY2xpcGVkLCAxKSwgMCk7XG4gICAgICAgIHJldHVybiBjbGlwcGVkO1xuICAgICAgfTsgLy8gRmlndXJlIG91dCB0aGUgdmFsdWUgYnkgaW5jb3Jwb3JhdGluZyB0aGUgc3RhcnQgdGltZVxuXG5cbiAgICAgIGNvbnN0IGVuZFRpbWUgPSB0ICogKHcgKyBkKSAtIHc7XG4gICAgICBwb3NpdGlvbiA9IHggPD0gMCA/IE1hdGgucm91bmQoZigxZS01KSkgOiB4IDwgZW5kVGltZSA/IGYoeCkgOiBNYXRoLnJvdW5kKGYoZW5kVGltZSAtIDFlLTUpKTtcbiAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9IC8vIFdvcmsgb3V0IHRoZSBsb29wcyBkb25lIGFuZCBhZGQgdGhlIHBvc2l0aW9uIHRvIHRoZSBsb29wcyBkb25lXG5cblxuICAgIGNvbnN0IGxvb3BzRG9uZSA9IE1hdGguZmxvb3IodGhpcy5sb29wcygpKTtcbiAgICBjb25zdCBzd2luZ0ZvcndhcmQgPSBzICYmIGxvb3BzRG9uZSAlIDIgPT09IDA7XG4gICAgY29uc3QgZm9yd2FyZHMgPSBzd2luZ0ZvcndhcmQgJiYgIXIgfHwgciAmJiBzd2luZ0ZvcndhcmQ7XG4gICAgcG9zaXRpb24gPSBsb29wc0RvbmUgKyAoZm9yd2FyZHMgPyBwIDogMSAtIHApO1xuICAgIHJldHVybiB0aGlzLmxvb3BzKHBvc2l0aW9uKTtcbiAgfVxuXG4gIHByb2dyZXNzKHApIHtcbiAgICBpZiAocCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4oMSwgdGhpcy5fdGltZSAvIHRoaXMuZHVyYXRpb24oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGltZShwICogdGhpcy5kdXJhdGlvbigpKTtcbiAgfVxuICAvKlxyXG4gIEJhc2ljIEZ1bmN0aW9uYWxpdHlcclxuICA9PT09PT09PT09PT09PT09PT09XHJcbiAgVGhlc2UgbWV0aG9kcyBhbGxvdyB1cyB0byBhdHRhY2ggYmFzaWMgZnVuY3Rpb25zIHRvIHRoZSBydW5uZXIgZGlyZWN0bHlcclxuICAqL1xuXG5cbiAgcXVldWUoaW5pdEZuLCBydW5GbiwgcmV0YXJnZXRGbiwgaXNUcmFuc2Zvcm0pIHtcbiAgICB0aGlzLl9xdWV1ZS5wdXNoKHtcbiAgICAgIGluaXRpYWxpc2VyOiBpbml0Rm4gfHwgbm9vcCxcbiAgICAgIHJ1bm5lcjogcnVuRm4gfHwgbm9vcCxcbiAgICAgIHJldGFyZ2V0OiByZXRhcmdldEZuLFxuICAgICAgaXNUcmFuc2Zvcm06IGlzVHJhbnNmb3JtLFxuICAgICAgaW5pdGlhbGlzZWQ6IGZhbHNlLFxuICAgICAgZmluaXNoZWQ6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBjb25zdCB0aW1lbGluZSA9IHRoaXMudGltZWxpbmUoKTtcbiAgICB0aW1lbGluZSAmJiB0aGlzLnRpbWVsaW5lKCkuX2NvbnRpbnVlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBpZiAodGhpcy5fcmVzZXRlZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy50aW1lKDApO1xuICAgIHRoaXMuX3Jlc2V0ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmV2ZXJzZShyZXZlcnNlKSB7XG4gICAgdGhpcy5fcmV2ZXJzZSA9IHJldmVyc2UgPT0gbnVsbCA/ICF0aGlzLl9yZXZlcnNlIDogcmV2ZXJzZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNjaGVkdWxlKHRpbWVsaW5lLCBkZWxheSwgd2hlbikge1xuICAgIC8vIFRoZSB1c2VyIGRvZXNuJ3QgbmVlZCB0byBwYXNzIGEgdGltZWxpbmUgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxuICAgIGlmICghKHRpbWVsaW5lIGluc3RhbmNlb2YgVGltZWxpbmUpKSB7XG4gICAgICB3aGVuID0gZGVsYXk7XG4gICAgICBkZWxheSA9IHRpbWVsaW5lO1xuICAgICAgdGltZWxpbmUgPSB0aGlzLnRpbWVsaW5lKCk7XG4gICAgfSAvLyBJZiB0aGVyZSBpcyBubyB0aW1lbGluZSwgeWVsbCBhdCB0aGUgdXNlci4uLlxuXG5cbiAgICBpZiAoIXRpbWVsaW5lKSB7XG4gICAgICB0aHJvdyBFcnJvcignUnVubmVyIGNhbm5vdCBiZSBzY2hlZHVsZWQgd2l0aG91dCB0aW1lbGluZScpO1xuICAgIH0gLy8gU2NoZWR1bGUgdGhlIHJ1bm5lciBvbiB0aGUgdGltZWxpbmUgcHJvdmlkZWRcblxuXG4gICAgdGltZWxpbmUuc2NoZWR1bGUodGhpcywgZGVsYXksIHdoZW4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RlcChkdCkge1xuICAgIC8vIElmIHdlIGFyZSBpbmFjdGl2ZSwgdGhpcyBzdGVwcGVyIGp1c3QgZ2V0cyBza2lwcGVkXG4gICAgaWYgKCF0aGlzLmVuYWJsZWQpIHJldHVybiB0aGlzOyAvLyBVcGRhdGUgdGhlIHRpbWUgYW5kIGdldCB0aGUgbmV3IHBvc2l0aW9uXG5cbiAgICBkdCA9IGR0ID09IG51bGwgPyAxNiA6IGR0O1xuICAgIHRoaXMuX3RpbWUgKz0gZHQ7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uKCk7IC8vIEZpZ3VyZSBvdXQgaWYgd2UgbmVlZCB0byBydW4gdGhlIHN0ZXBwZXIgaW4gdGhpcyBmcmFtZVxuXG4gICAgY29uc3QgcnVubmluZyA9IHRoaXMuX2xhc3RQb3NpdGlvbiAhPT0gcG9zaXRpb24gJiYgdGhpcy5fdGltZSA+PSAwO1xuICAgIHRoaXMuX2xhc3RQb3NpdGlvbiA9IHBvc2l0aW9uOyAvLyBGaWd1cmUgb3V0IGlmIHdlIGp1c3Qgc3RhcnRlZFxuXG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uKCk7XG4gICAgY29uc3QganVzdFN0YXJ0ZWQgPSB0aGlzLl9sYXN0VGltZSA8PSAwICYmIHRoaXMuX3RpbWUgPiAwO1xuICAgIGNvbnN0IGp1c3RGaW5pc2hlZCA9IHRoaXMuX2xhc3RUaW1lIDwgZHVyYXRpb24gJiYgdGhpcy5fdGltZSA+PSBkdXJhdGlvbjtcbiAgICB0aGlzLl9sYXN0VGltZSA9IHRoaXMuX3RpbWU7XG5cbiAgICBpZiAoanVzdFN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMuZmlyZSgnc3RhcnQnLCB0aGlzKTtcbiAgICB9IC8vIFdvcmsgb3V0IGlmIHRoZSBydW5uZXIgaXMgZmluaXNoZWQgc2V0IHRoZSBkb25lIGZsYWcgaGVyZSBzbyBhbmltYXRpb25zXG4gICAgLy8ga25vdywgdGhhdCB0aGV5IGFyZSBydW5uaW5nIGluIHRoZSBsYXN0IHN0ZXAgKHRoaXMgaXMgZ29vZCBmb3JcbiAgICAvLyB0cmFuc2Zvcm1hdGlvbnMgd2hpY2ggY2FuIGJlIG1lcmdlZClcblxuXG4gICAgY29uc3QgZGVjbGFyYXRpdmUgPSB0aGlzLl9pc0RlY2xhcmF0aXZlO1xuICAgIHRoaXMuZG9uZSA9ICFkZWNsYXJhdGl2ZSAmJiAhanVzdEZpbmlzaGVkICYmIHRoaXMuX3RpbWUgPj0gZHVyYXRpb247IC8vIFJ1bm5lciBpcyBydW5uaW5nLiBTbyBpdHMgbm90IGluIHJlc2V0ZWQgc3RhdGUgYW55bW9yZVxuXG4gICAgdGhpcy5fcmVzZXRlZCA9IGZhbHNlO1xuICAgIGxldCBjb252ZXJnZWQgPSBmYWxzZTsgLy8gQ2FsbCBpbml0aWFsaXNlIGFuZCB0aGUgcnVuIGZ1bmN0aW9uXG5cbiAgICBpZiAocnVubmluZyB8fCBkZWNsYXJhdGl2ZSkge1xuICAgICAgdGhpcy5faW5pdGlhbGlzZShydW5uaW5nKTsgLy8gY2xlYXIgdGhlIHRyYW5zZm9ybXMgb24gdGhpcyBydW5uZXIgc28gdGhleSBkb250IGdldCBhZGRlZCBhZ2FpbiBhbmQgYWdhaW5cblxuXG4gICAgICB0aGlzLnRyYW5zZm9ybXMgPSBuZXcgTWF0cml4KCk7XG4gICAgICBjb252ZXJnZWQgPSB0aGlzLl9ydW4oZGVjbGFyYXRpdmUgPyBkdCA6IHBvc2l0aW9uKTtcbiAgICAgIHRoaXMuZmlyZSgnc3RlcCcsIHRoaXMpO1xuICAgIH0gLy8gY29ycmVjdCB0aGUgZG9uZSBmbGFnIGhlcmVcbiAgICAvLyBkZWNsYXJpdGl2ZSBhbmltYXRpb25zIGl0c2VsZiBrbm93IHdoZW4gdGhleSBjb252ZXJnZWRcblxuXG4gICAgdGhpcy5kb25lID0gdGhpcy5kb25lIHx8IGNvbnZlcmdlZCAmJiBkZWNsYXJhdGl2ZTtcblxuICAgIGlmIChqdXN0RmluaXNoZWQpIHtcbiAgICAgIHRoaXMuZmlyZSgnZmluaXNoZWQnLCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKlxyXG4gIFJ1bm5lciBhbmltYXRpb24gbWV0aG9kc1xyXG4gID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIENvbnRyb2wgaG93IHRoZSBhbmltYXRpb24gcGxheXNcclxuICAqL1xuXG5cbiAgdGltZSh0aW1lKSB7XG4gICAgaWYgKHRpbWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgY29uc3QgZHQgPSB0aW1lIC0gdGhpcy5fdGltZTtcbiAgICB0aGlzLnN0ZXAoZHQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGltZWxpbmUodGltZWxpbmUpIHtcbiAgICAvLyBjaGVjayBleHBsaWNpdGx5IGZvciB1bmRlZmluZWQgc28gd2UgY2FuIHNldCB0aGUgdGltZWxpbmUgdG8gbnVsbFxuICAgIGlmICh0eXBlb2YgdGltZWxpbmUgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpcy5fdGltZWxpbmU7XG4gICAgdGhpcy5fdGltZWxpbmUgPSB0aW1lbGluZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVuc2NoZWR1bGUoKSB7XG4gICAgY29uc3QgdGltZWxpbmUgPSB0aGlzLnRpbWVsaW5lKCk7XG4gICAgdGltZWxpbmUgJiYgdGltZWxpbmUudW5zY2hlZHVsZSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBSdW4gZWFjaCBpbml0aWFsaXNlIGZ1bmN0aW9uIGluIHRoZSBydW5uZXIgaWYgcmVxdWlyZWRcblxuXG4gIF9pbml0aWFsaXNlKHJ1bm5pbmcpIHtcbiAgICAvLyBJZiB3ZSBhcmVuJ3QgcnVubmluZywgd2Ugc2hvdWxkbid0IGluaXRpYWxpc2Ugd2hlbiBub3QgZGVjbGFyYXRpdmVcbiAgICBpZiAoIXJ1bm5pbmcgJiYgIXRoaXMuX2lzRGVjbGFyYXRpdmUpIHJldHVybjsgLy8gTG9vcCB0aHJvdWdoIGFsbCBvZiB0aGUgaW5pdGlhbGlzZXJzXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5fcXVldWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIC8vIEdldCB0aGUgY3VycmVudCBpbml0aWFsaXNlclxuICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuX3F1ZXVlW2ldOyAvLyBEZXRlcm1pbmUgd2hldGhlciB3ZSBuZWVkIHRvIGluaXRpYWxpc2VcblxuICAgICAgY29uc3QgbmVlZHNJdCA9IHRoaXMuX2lzRGVjbGFyYXRpdmUgfHwgIWN1cnJlbnQuaW5pdGlhbGlzZWQgJiYgcnVubmluZztcbiAgICAgIHJ1bm5pbmcgPSAhY3VycmVudC5maW5pc2hlZDsgLy8gQ2FsbCB0aGUgaW5pdGlhbGlzZXIgaWYgd2UgbmVlZCB0b1xuXG4gICAgICBpZiAobmVlZHNJdCAmJiBydW5uaW5nKSB7XG4gICAgICAgIGN1cnJlbnQuaW5pdGlhbGlzZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgY3VycmVudC5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIFNhdmUgYSBtb3JwaGVyIHRvIHRoZSBtb3JwaGVyIGxpc3Qgc28gdGhhdCB3ZSBjYW4gcmV0YXJnZXQgaXQgbGF0ZXJcblxuXG4gIF9yZW1lbWJlck1vcnBoZXIobWV0aG9kLCBtb3JwaGVyKSB7XG4gICAgdGhpcy5faGlzdG9yeVttZXRob2RdID0ge1xuICAgICAgbW9ycGhlcjogbW9ycGhlcixcbiAgICAgIGNhbGxlcjogdGhpcy5fcXVldWVbdGhpcy5fcXVldWUubGVuZ3RoIC0gMV1cbiAgICB9OyAvLyBXZSBoYXZlIHRvIHJlc3VtZSB0aGUgdGltZWxpbmUgaW4gY2FzZSBhIGNvbnRyb2xsZXJcbiAgICAvLyBpcyBhbHJlYWR5IGRvbmUgd2l0aG91dCBiZWluZyBldmVyIHJ1blxuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiB3aGVuIGUuZy4gdGhpcyBpcyBkb25lOlxuICAgIC8vICAgIGFuaW0gPSBlbC5hbmltYXRlKG5ldyBTVkcuU3ByaW5nKVxuICAgIC8vIGFuZCBsYXRlclxuICAgIC8vICAgIGFuaW0ubW92ZSguLi4pXG5cbiAgICBpZiAodGhpcy5faXNEZWNsYXJhdGl2ZSkge1xuICAgICAgY29uc3QgdGltZWxpbmUgPSB0aGlzLnRpbWVsaW5lKCk7XG4gICAgICB0aW1lbGluZSAmJiB0aW1lbGluZS5wbGF5KCk7XG4gICAgfVxuICB9IC8vIFRyeSB0byBzZXQgdGhlIHRhcmdldCBmb3IgYSBtb3JwaGVyIGlmIHRoZSBtb3JwaGVyIGV4aXN0cywgb3RoZXJ3aXNlXG4gIC8vIFJ1biBlYWNoIHJ1biBmdW5jdGlvbiBmb3IgdGhlIHBvc2l0aW9uIG9yIGR0IGdpdmVuXG5cblxuICBfcnVuKHBvc2l0aW9uT3JEdCkge1xuICAgIC8vIFJ1biBhbGwgb2YgdGhlIF9xdWV1ZSBkaXJlY3RseVxuICAgIGxldCBhbGxmaW5pc2hlZCA9IHRydWU7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5fcXVldWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIC8vIEdldCB0aGUgY3VycmVudCBmdW5jdGlvbiB0byBydW5cbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLl9xdWV1ZVtpXTsgLy8gUnVuIHRoZSBmdW5jdGlvbiBpZiBpdHMgbm90IGZpbmlzaGVkLCB3ZSBrZWVwIHRyYWNrIG9mIHRoZSBmaW5pc2hlZFxuICAgICAgLy8gZmxhZyBmb3IgdGhlIHNha2Ugb2YgZGVjbGFyYXRpdmUgX3F1ZXVlXG5cbiAgICAgIGNvbnN0IGNvbnZlcmdlZCA9IGN1cnJlbnQucnVubmVyLmNhbGwodGhpcywgcG9zaXRpb25PckR0KTtcbiAgICAgIGN1cnJlbnQuZmluaXNoZWQgPSBjdXJyZW50LmZpbmlzaGVkIHx8IGNvbnZlcmdlZCA9PT0gdHJ1ZTtcbiAgICAgIGFsbGZpbmlzaGVkID0gYWxsZmluaXNoZWQgJiYgY3VycmVudC5maW5pc2hlZDtcbiAgICB9IC8vIFdlIHJlcG9ydCB3aGVuIGFsbCBvZiB0aGUgY29uc3RydWN0b3JzIGFyZSBmaW5pc2hlZFxuXG5cbiAgICByZXR1cm4gYWxsZmluaXNoZWQ7XG4gIH0gLy8gZG8gbm90aGluZyBhbmQgcmV0dXJuIGZhbHNlXG5cblxuICBfdHJ5UmV0YXJnZXQobWV0aG9kLCB0YXJnZXQsIGV4dHJhKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnlbbWV0aG9kXSkge1xuICAgICAgLy8gaWYgdGhlIGxhc3QgbWV0aG9kIHdhc250IGV2ZW4gaW5pdGlhbGlzZWQsIHRocm93IGl0IGF3YXlcbiAgICAgIGlmICghdGhpcy5faGlzdG9yeVttZXRob2RdLmNhbGxlci5pbml0aWFsaXNlZCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3F1ZXVlLmluZGV4T2YodGhpcy5faGlzdG9yeVttZXRob2RdLmNhbGxlcik7XG5cbiAgICAgICAgdGhpcy5fcXVldWUuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IC8vIGZvciB0aGUgY2FzZSBvZiB0cmFuc2Zvcm1hdGlvbnMsIHdlIHVzZSB0aGUgc3BlY2lhbCByZXRhcmdldCBmdW5jdGlvblxuICAgICAgLy8gd2hpY2ggaGFzIGFjY2VzcyB0byB0aGUgb3V0ZXIgc2NvcGVcblxuXG4gICAgICBpZiAodGhpcy5faGlzdG9yeVttZXRob2RdLmNhbGxlci5yZXRhcmdldCkge1xuICAgICAgICB0aGlzLl9oaXN0b3J5W21ldGhvZF0uY2FsbGVyLnJldGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBleHRyYSk7IC8vIGZvciBldmVyeXRoaW5nIGVsc2UgYSBzaW1wbGUgbW9ycGhlciBjaGFuZ2UgaXMgc3VmZmljaWVudFxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oaXN0b3J5W21ldGhvZF0ubW9ycGhlci50byh0YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9oaXN0b3J5W21ldGhvZF0uY2FsbGVyLmZpbmlzaGVkID0gZmFsc2U7XG4gICAgICBjb25zdCB0aW1lbGluZSA9IHRoaXMudGltZWxpbmUoKTtcbiAgICAgIHRpbWVsaW5lICYmIHRpbWVsaW5lLnBsYXkoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG5SdW5uZXIuaWQgPSAwO1xuY2xhc3MgRmFrZVJ1bm5lciB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybXMgPSBuZXcgTWF0cml4KCksIGlkID0gLTEsIGRvbmUgPSB0cnVlKSB7XG4gICAgdGhpcy50cmFuc2Zvcm1zID0gdHJhbnNmb3JtcztcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5kb25lID0gZG9uZTtcbiAgfVxuXG4gIGNsZWFyVHJhbnNmb3Jtc0Zyb21RdWV1ZSgpIHt9XG5cbn1cbmV4dGVuZChbUnVubmVyLCBGYWtlUnVubmVyXSwge1xuICBtZXJnZVdpdGgocnVubmVyKSB7XG4gICAgcmV0dXJuIG5ldyBGYWtlUnVubmVyKHJ1bm5lci50cmFuc2Zvcm1zLmxtdWx0aXBseSh0aGlzLnRyYW5zZm9ybXMpLCBydW5uZXIuaWQpO1xuICB9XG5cbn0pOyAvLyBGYWtlUnVubmVyLmVtcHR5UnVubmVyID0gbmV3IEZha2VSdW5uZXIoKVxuXG5jb25zdCBsbXVsdGlwbHkgPSAobGFzdCwgY3VycikgPT4gbGFzdC5sbXVsdGlwbHlPKGN1cnIpO1xuXG5jb25zdCBnZXRSdW5uZXJUcmFuc2Zvcm0gPSBydW5uZXIgPT4gcnVubmVyLnRyYW5zZm9ybXM7XG5cbmZ1bmN0aW9uIG1lcmdlVHJhbnNmb3JtcygpIHtcbiAgLy8gRmluZCB0aGUgbWF0cml4IHRvIGFwcGx5IHRvIHRoZSBlbGVtZW50IGFuZCBhcHBseSBpdFxuICBjb25zdCBydW5uZXJzID0gdGhpcy5fdHJhbnNmb3JtYXRpb25SdW5uZXJzLnJ1bm5lcnM7XG4gIGNvbnN0IG5ldFRyYW5zZm9ybSA9IHJ1bm5lcnMubWFwKGdldFJ1bm5lclRyYW5zZm9ybSkucmVkdWNlKGxtdWx0aXBseSwgbmV3IE1hdHJpeCgpKTtcbiAgdGhpcy50cmFuc2Zvcm0obmV0VHJhbnNmb3JtKTtcblxuICB0aGlzLl90cmFuc2Zvcm1hdGlvblJ1bm5lcnMubWVyZ2UoKTtcblxuICBpZiAodGhpcy5fdHJhbnNmb3JtYXRpb25SdW5uZXJzLmxlbmd0aCgpID09PSAxKSB7XG4gICAgdGhpcy5fZnJhbWVJZCA9IG51bGw7XG4gIH1cbn1cblxuY2xhc3MgUnVubmVyQXJyYXkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJ1bm5lcnMgPSBbXTtcbiAgICB0aGlzLmlkcyA9IFtdO1xuICB9XG5cbiAgYWRkKHJ1bm5lcikge1xuICAgIGlmICh0aGlzLnJ1bm5lcnMuaW5jbHVkZXMocnVubmVyKSkgcmV0dXJuO1xuICAgIGNvbnN0IGlkID0gcnVubmVyLmlkICsgMTtcbiAgICB0aGlzLnJ1bm5lcnMucHVzaChydW5uZXIpO1xuICAgIHRoaXMuaWRzLnB1c2goaWQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2xlYXJCZWZvcmUoaWQpIHtcbiAgICBjb25zdCBkZWxldGVDbnQgPSB0aGlzLmlkcy5pbmRleE9mKGlkICsgMSkgfHwgMTtcbiAgICB0aGlzLmlkcy5zcGxpY2UoMCwgZGVsZXRlQ250LCAwKTtcbiAgICB0aGlzLnJ1bm5lcnMuc3BsaWNlKDAsIGRlbGV0ZUNudCwgbmV3IEZha2VSdW5uZXIoKSkuZm9yRWFjaChyID0+IHIuY2xlYXJUcmFuc2Zvcm1zRnJvbVF1ZXVlKCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZWRpdChpZCwgbmV3UnVubmVyKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlkcy5pbmRleE9mKGlkICsgMSk7XG4gICAgdGhpcy5pZHMuc3BsaWNlKGluZGV4LCAxLCBpZCArIDEpO1xuICAgIHRoaXMucnVubmVycy5zcGxpY2UoaW5kZXgsIDEsIG5ld1J1bm5lcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRCeUlEKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMucnVubmVyc1t0aGlzLmlkcy5pbmRleE9mKGlkICsgMSldO1xuICB9XG5cbiAgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmlkcy5sZW5ndGg7XG4gIH1cblxuICBtZXJnZSgpIHtcbiAgICBsZXQgbGFzdFJ1bm5lciA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucnVubmVycy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgcnVubmVyID0gdGhpcy5ydW5uZXJzW2ldO1xuICAgICAgY29uc3QgY29uZGl0aW9uID0gbGFzdFJ1bm5lciAmJiBydW5uZXIuZG9uZSAmJiBsYXN0UnVubmVyLmRvbmUgLy8gZG9uJ3QgbWVyZ2UgcnVubmVyIHdoZW4gcGVyc2lzdGVkIG9uIHRpbWVsaW5lXG4gICAgICAmJiAoIXJ1bm5lci5fdGltZWxpbmUgfHwgIXJ1bm5lci5fdGltZWxpbmUuX3J1bm5lcklkcy5pbmNsdWRlcyhydW5uZXIuaWQpKSAmJiAoIWxhc3RSdW5uZXIuX3RpbWVsaW5lIHx8ICFsYXN0UnVubmVyLl90aW1lbGluZS5fcnVubmVySWRzLmluY2x1ZGVzKGxhc3RSdW5uZXIuaWQpKTtcblxuICAgICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgICAvLyB0aGUgKzEgaGFwcGVucyBpbiB0aGUgZnVuY3Rpb25cbiAgICAgICAgdGhpcy5yZW1vdmUocnVubmVyLmlkKTtcbiAgICAgICAgY29uc3QgbmV3UnVubmVyID0gcnVubmVyLm1lcmdlV2l0aChsYXN0UnVubmVyKTtcbiAgICAgICAgdGhpcy5lZGl0KGxhc3RSdW5uZXIuaWQsIG5ld1J1bm5lcik7XG4gICAgICAgIGxhc3RSdW5uZXIgPSBuZXdSdW5uZXI7XG4gICAgICAgIC0taTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhc3RSdW5uZXIgPSBydW5uZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW1vdmUoaWQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaWRzLmluZGV4T2YoaWQgKyAxKTtcbiAgICB0aGlzLmlkcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMucnVubmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIEVsZW1lbnQ6IHtcbiAgICBhbmltYXRlKGR1cmF0aW9uLCBkZWxheSwgd2hlbikge1xuICAgICAgY29uc3QgbyA9IFJ1bm5lci5zYW5pdGlzZShkdXJhdGlvbiwgZGVsYXksIHdoZW4pO1xuICAgICAgY29uc3QgdGltZWxpbmUgPSB0aGlzLnRpbWVsaW5lKCk7XG4gICAgICByZXR1cm4gbmV3IFJ1bm5lcihvLmR1cmF0aW9uKS5sb29wKG8pLmVsZW1lbnQodGhpcykudGltZWxpbmUodGltZWxpbmUucGxheSgpKS5zY2hlZHVsZShvLmRlbGF5LCBvLndoZW4pO1xuICAgIH0sXG5cbiAgICBkZWxheShieSwgd2hlbikge1xuICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0ZSgwLCBieSwgd2hlbik7XG4gICAgfSxcblxuICAgIC8vIHRoaXMgZnVuY3Rpb24gc2VhcmNoZXMgZm9yIGFsbCBydW5uZXJzIG9uIHRoZSBlbGVtZW50IGFuZCBkZWxldGVzIHRoZSBvbmVzXG4gICAgLy8gd2hpY2ggcnVuIGJlZm9yZSB0aGUgY3VycmVudCBvbmUuIFRoaXMgaXMgYmVjYXVzZSBhYnNvbHV0ZSB0cmFuc2Zvcm1hdGlvbnNcbiAgICAvLyBvdmVyd2ZyaXRlIGFueXRoaW5nIGFueXdheSBzbyB0aGVyZSBpcyBubyBuZWVkIHRvIHdhc3RlIHRpbWUgY29tcHV0aW5nXG4gICAgLy8gb3RoZXIgcnVubmVyc1xuICAgIF9jbGVhclRyYW5zZm9ybVJ1bm5lcnNCZWZvcmUoY3VycmVudFJ1bm5lcikge1xuICAgICAgdGhpcy5fdHJhbnNmb3JtYXRpb25SdW5uZXJzLmNsZWFyQmVmb3JlKGN1cnJlbnRSdW5uZXIuaWQpO1xuICAgIH0sXG5cbiAgICBfY3VycmVudFRyYW5zZm9ybShjdXJyZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtYXRpb25SdW5uZXJzLnJ1bm5lcnMgLy8gd2UgbmVlZCB0aGUgZXF1YWwgc2lnbiBoZXJlIHRvIG1ha2Ugc3VyZSwgdGhhdCBhbHNvIHRyYW5zZm9ybWF0aW9uc1xuICAgICAgLy8gb24gdGhlIHNhbWUgcnVubmVyIHdoaWNoIGV4ZWN1dGUgYmVmb3JlIHRoZSBjdXJyZW50IHRyYW5zZm9ybWF0aW9uIGFyZVxuICAgICAgLy8gdGFrZW4gaW50byBhY2NvdW50XG4gICAgICAuZmlsdGVyKHJ1bm5lciA9PiBydW5uZXIuaWQgPD0gY3VycmVudC5pZCkubWFwKGdldFJ1bm5lclRyYW5zZm9ybSkucmVkdWNlKGxtdWx0aXBseSwgbmV3IE1hdHJpeCgpKTtcbiAgICB9LFxuXG4gICAgX2FkZFJ1bm5lcihydW5uZXIpIHtcbiAgICAgIHRoaXMuX3RyYW5zZm9ybWF0aW9uUnVubmVycy5hZGQocnVubmVyKTsgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHJ1bm5lciBtZXJnZSBpcyBleGVjdXRlZCBhdCB0aGUgdmVyeSBlbmQgb2ZcbiAgICAgIC8vIGFsbCBBbmltYXRvciBmdW5jdGlvbnMuIFRoYXRzIHdoeSB3ZSB1c2UgaW1tZWRpYXRlIGhlcmUgdG8gZXhlY3V0ZVxuICAgICAgLy8gdGhlIG1lcmdlIHJpZ2h0IGFmdGVyIGFsbCBmcmFtZXMgYXJlIHJ1blxuXG5cbiAgICAgIEFuaW1hdG9yLmNhbmNlbEltbWVkaWF0ZSh0aGlzLl9mcmFtZUlkKTtcbiAgICAgIHRoaXMuX2ZyYW1lSWQgPSBBbmltYXRvci5pbW1lZGlhdGUobWVyZ2VUcmFuc2Zvcm1zLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBfcHJlcGFyZVJ1bm5lcigpIHtcbiAgICAgIGlmICh0aGlzLl9mcmFtZUlkID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtYXRpb25SdW5uZXJzID0gbmV3IFJ1bm5lckFycmF5KCkuYWRkKG5ldyBGYWtlUnVubmVyKG5ldyBNYXRyaXgodGhpcykpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufSk7IC8vIFdpbGwgb3V0cHV0IHRoZSBlbGVtZW50cyBmcm9tIGFycmF5IEEgdGhhdCBhcmUgbm90IGluIHRoZSBhcnJheSBCXG5cbmNvbnN0IGRpZmZlcmVuY2UgPSAoYSwgYikgPT4gYS5maWx0ZXIoeCA9PiAhYi5pbmNsdWRlcyh4KSk7XG5cbmV4dGVuZChSdW5uZXIsIHtcbiAgYXR0cihhLCB2KSB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGVBdHRyKCdhdHRyJywgYSwgdik7XG4gIH0sXG5cbiAgLy8gQWRkIGFuaW1hdGFibGUgc3R5bGVzXG4gIGNzcyhzLCB2KSB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGVBdHRyKCdjc3MnLCBzLCB2KTtcbiAgfSxcblxuICBzdHlsZUF0dHIodHlwZSwgbmFtZU9yQXR0cnMsIHZhbCkge1xuICAgIGlmICh0eXBlb2YgbmFtZU9yQXR0cnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHlsZUF0dHIodHlwZSwge1xuICAgICAgICBbbmFtZU9yQXR0cnNdOiB2YWxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBhdHRycyA9IG5hbWVPckF0dHJzO1xuICAgIGlmICh0aGlzLl90cnlSZXRhcmdldCh0eXBlLCBhdHRycykpIHJldHVybiB0aGlzO1xuICAgIGxldCBtb3JwaGVyID0gbmV3IE1vcnBoYWJsZSh0aGlzLl9zdGVwcGVyKS50byhhdHRycyk7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhhdHRycyk7XG4gICAgdGhpcy5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICBtb3JwaGVyID0gbW9ycGhlci5mcm9tKHRoaXMuZWxlbWVudCgpW3R5cGVdKGtleXMpKTtcbiAgICB9LCBmdW5jdGlvbiAocG9zKSB7XG4gICAgICB0aGlzLmVsZW1lbnQoKVt0eXBlXShtb3JwaGVyLmF0KHBvcykudmFsdWVPZigpKTtcbiAgICAgIHJldHVybiBtb3JwaGVyLmRvbmUoKTtcbiAgICB9LCBmdW5jdGlvbiAobmV3VG9BdHRycykge1xuICAgICAgLy8gQ2hlY2sgaWYgYW55IG5ldyBrZXlzIHdlcmUgYWRkZWRcbiAgICAgIGNvbnN0IG5ld0tleXMgPSBPYmplY3Qua2V5cyhuZXdUb0F0dHJzKTtcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2VzID0gZGlmZmVyZW5jZShuZXdLZXlzLCBrZXlzKTsgLy8gSWYgdGhlaXIgYXJlIG5ldyBrZXlzLCBpbml0aWFsaXplIHRoZW0gYW5kIGFkZCB0aGVtIHRvIG1vcnBoZXJcblxuICAgICAgaWYgKGRpZmZlcmVuY2VzLmxlbmd0aCkge1xuICAgICAgICAvLyBHZXQgdGhlIHZhbHVlc1xuICAgICAgICBjb25zdCBhZGRlZEZyb21BdHRycyA9IHRoaXMuZWxlbWVudCgpW3R5cGVdKGRpZmZlcmVuY2VzKTsgLy8gR2V0IHRoZSBhbHJlYWR5IGluaXRpYWxpemVkIHZhbHVlc1xuXG4gICAgICAgIGNvbnN0IG9sZEZyb21BdHRycyA9IG5ldyBPYmplY3RCYWcobW9ycGhlci5mcm9tKCkpLnZhbHVlT2YoKTsgLy8gTWVyZ2Ugb2xkIGFuZCBuZXdcblxuICAgICAgICBPYmplY3QuYXNzaWduKG9sZEZyb21BdHRycywgYWRkZWRGcm9tQXR0cnMpO1xuICAgICAgICBtb3JwaGVyLmZyb20ob2xkRnJvbUF0dHJzKTtcbiAgICAgIH0gLy8gR2V0IHRoZSBvYmplY3QgZnJvbSB0aGUgbW9ycGhlclxuXG5cbiAgICAgIGNvbnN0IG9sZFRvQXR0cnMgPSBuZXcgT2JqZWN0QmFnKG1vcnBoZXIudG8oKSkudmFsdWVPZigpOyAvLyBNZXJnZSBpbiBuZXcgYXR0cmlidXRlc1xuXG4gICAgICBPYmplY3QuYXNzaWduKG9sZFRvQXR0cnMsIG5ld1RvQXR0cnMpOyAvLyBDaGFuZ2UgbW9ycGhlciB0YXJnZXRcblxuICAgICAgbW9ycGhlci50byhvbGRUb0F0dHJzKTsgLy8gTWFrZSBzdXJlIHRoYXQgd2Ugc2F2ZSB0aGUgd29yayB3ZSBkaWQgc28gd2UgZG9uJ3QgbmVlZCBpdCB0byBkbyBhZ2FpblxuXG4gICAgICBrZXlzID0gbmV3S2V5cztcbiAgICAgIGF0dHJzID0gbmV3VG9BdHRycztcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbWVtYmVyTW9ycGhlcih0eXBlLCBtb3JwaGVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIHpvb20obGV2ZWwsIHBvaW50KSB7XG4gICAgaWYgKHRoaXMuX3RyeVJldGFyZ2V0KCd6b29tJywgbGV2ZWwsIHBvaW50KSkgcmV0dXJuIHRoaXM7XG4gICAgbGV0IG1vcnBoZXIgPSBuZXcgTW9ycGhhYmxlKHRoaXMuX3N0ZXBwZXIpLnRvKG5ldyBTVkdOdW1iZXIobGV2ZWwpKTtcbiAgICB0aGlzLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vcnBoZXIgPSBtb3JwaGVyLmZyb20odGhpcy5lbGVtZW50KCkuem9vbSgpKTtcbiAgICB9LCBmdW5jdGlvbiAocG9zKSB7XG4gICAgICB0aGlzLmVsZW1lbnQoKS56b29tKG1vcnBoZXIuYXQocG9zKSwgcG9pbnQpO1xuICAgICAgcmV0dXJuIG1vcnBoZXIuZG9uZSgpO1xuICAgIH0sIGZ1bmN0aW9uIChuZXdMZXZlbCwgbmV3UG9pbnQpIHtcbiAgICAgIHBvaW50ID0gbmV3UG9pbnQ7XG4gICAgICBtb3JwaGVyLnRvKG5ld0xldmVsKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbWVtYmVyTW9ycGhlcignem9vbScsIG1vcnBoZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICoqIGFic29sdXRlIHRyYW5zZm9ybWF0aW9uc1xyXG4gICAqKi9cbiAgLy9cbiAgLy8gTSB2IC0tLS0tfC0tLS0tKEQgTSB2ID0gRiB2KS0tLS0tLXwtLS0tLT4gIFQgdlxuICAvL1xuICAvLyAxLiBkZWZpbmUgdGhlIGZpbmFsIHN0YXRlIChUKSBhbmQgZGVjb21wb3NlIGl0IChvbmNlKVxuICAvLyAgICB0ID0gW3R4LCB0eSwgdGhlLCBsYW0sIHN5LCBzeF1cbiAgLy8gMi4gb24gZXZlcnkgZnJhbWU6IHB1bGwgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYWxsIHByZXZpb3VzIHRyYW5zZm9ybXNcbiAgLy8gICAgKE0gLSBtIGNhbiBjaGFuZ2UpXG4gIC8vICAgYW5kIHRoZW4gd3JpdGUgdGhpcyBhcyBtID0gW3R4MCwgdHkwLCB0aGUwLCBsYW0wLCBzeTAsIHN4MF1cbiAgLy8gMy4gRmluZCB0aGUgaW50ZXJwb2xhdGVkIG1hdHJpeCBGKHBvcykgPSBtICsgcG9zICogKHQgLSBtKVxuICAvLyAgIC0gTm90ZSBGKDApID0gTVxuICAvLyAgIC0gTm90ZSBGKDEpID0gVFxuICAvLyA0LiBOb3cgeW91IGdldCB0aGUgZGVsdGEgbWF0cml4IGFzIGEgcmVzdWx0OiBEID0gRiAqIGludihNKVxuICB0cmFuc2Zvcm0odHJhbnNmb3JtcywgcmVsYXRpdmUsIGFmZmluZSkge1xuICAgIC8vIElmIHdlIGhhdmUgYSBkZWNsYXJhdGl2ZSBmdW5jdGlvbiwgd2Ugc2hvdWxkIHJldGFyZ2V0IGl0IGlmIHBvc3NpYmxlXG4gICAgcmVsYXRpdmUgPSB0cmFuc2Zvcm1zLnJlbGF0aXZlIHx8IHJlbGF0aXZlO1xuXG4gICAgaWYgKHRoaXMuX2lzRGVjbGFyYXRpdmUgJiYgIXJlbGF0aXZlICYmIHRoaXMuX3RyeVJldGFyZ2V0KCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm1zKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSAvLyBQYXJzZSB0aGUgcGFyYW1ldGVyc1xuXG5cbiAgICBjb25zdCBpc01hdHJpeCA9IE1hdHJpeC5pc01hdHJpeExpa2UodHJhbnNmb3Jtcyk7XG4gICAgYWZmaW5lID0gdHJhbnNmb3Jtcy5hZmZpbmUgIT0gbnVsbCA/IHRyYW5zZm9ybXMuYWZmaW5lIDogYWZmaW5lICE9IG51bGwgPyBhZmZpbmUgOiAhaXNNYXRyaXg7IC8vIENyZWF0ZSBhIG1vcmVwaGVyIGFuZCBzZXQgaXRzIHR5cGVcblxuICAgIGNvbnN0IG1vcnBoZXIgPSBuZXcgTW9ycGhhYmxlKHRoaXMuX3N0ZXBwZXIpLnR5cGUoYWZmaW5lID8gVHJhbnNmb3JtQmFnIDogTWF0cml4KTtcbiAgICBsZXQgb3JpZ2luO1xuICAgIGxldCBlbGVtZW50O1xuICAgIGxldCBjdXJyZW50O1xuICAgIGxldCBjdXJyZW50QW5nbGU7XG4gICAgbGV0IHN0YXJ0VHJhbnNmb3JtO1xuXG4gICAgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgZWxlbWVudCBhbmQgb3JpZ2luIGlzIGRlZmluZWRcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuZWxlbWVudCgpO1xuICAgICAgb3JpZ2luID0gb3JpZ2luIHx8IGdldE9yaWdpbih0cmFuc2Zvcm1zLCBlbGVtZW50KTtcbiAgICAgIHN0YXJ0VHJhbnNmb3JtID0gbmV3IE1hdHJpeChyZWxhdGl2ZSA/IHVuZGVmaW5lZCA6IGVsZW1lbnQpOyAvLyBhZGQgdGhlIHJ1bm5lciB0byB0aGUgZWxlbWVudCBzbyBpdCBjYW4gbWVyZ2UgdHJhbnNmb3JtYXRpb25zXG5cbiAgICAgIGVsZW1lbnQuX2FkZFJ1bm5lcih0aGlzKTsgLy8gRGVhY3RpdmF0ZSBhbGwgdHJhbnNmb3JtcyB0aGF0IGhhdmUgcnVuIHNvIGZhciBpZiB3ZSBhcmUgYWJzb2x1dGVcblxuXG4gICAgICBpZiAoIXJlbGF0aXZlKSB7XG4gICAgICAgIGVsZW1lbnQuX2NsZWFyVHJhbnNmb3JtUnVubmVyc0JlZm9yZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4ocG9zKSB7XG4gICAgICAvLyBjbGVhciBhbGwgb3RoZXIgdHJhbnNmb3JtcyBiZWZvcmUgdGhpcyBpbiBjYXNlIHNvbWV0aGluZyBpcyBzYXZlZFxuICAgICAgLy8gb24gdGhpcyBydW5uZXIuIFdlIGFyZSBhYnNvbHV0ZS4gV2UgZG9udCBuZWVkIHRoZXNlIVxuICAgICAgaWYgKCFyZWxhdGl2ZSkgdGhpcy5jbGVhclRyYW5zZm9ybSgpO1xuICAgICAgY29uc3Qge1xuICAgICAgICB4LFxuICAgICAgICB5XG4gICAgICB9ID0gbmV3IFBvaW50KG9yaWdpbikudHJhbnNmb3JtKGVsZW1lbnQuX2N1cnJlbnRUcmFuc2Zvcm0odGhpcykpO1xuICAgICAgbGV0IHRhcmdldCA9IG5ldyBNYXRyaXgoeyAuLi50cmFuc2Zvcm1zLFxuICAgICAgICBvcmlnaW46IFt4LCB5XVxuICAgICAgfSk7XG4gICAgICBsZXQgc3RhcnQgPSB0aGlzLl9pc0RlY2xhcmF0aXZlICYmIGN1cnJlbnQgPyBjdXJyZW50IDogc3RhcnRUcmFuc2Zvcm07XG5cbiAgICAgIGlmIChhZmZpbmUpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LmRlY29tcG9zZSh4LCB5KTtcbiAgICAgICAgc3RhcnQgPSBzdGFydC5kZWNvbXBvc2UoeCwgeSk7IC8vIEdldCB0aGUgY3VycmVudCBhbmQgdGFyZ2V0IGFuZ2xlIGFzIGl0IHdhcyBzZXRcblxuICAgICAgICBjb25zdCByVGFyZ2V0ID0gdGFyZ2V0LnJvdGF0ZTtcbiAgICAgICAgY29uc3QgckN1cnJlbnQgPSBzdGFydC5yb3RhdGU7IC8vIEZpZ3VyZSBvdXQgdGhlIHNob3J0ZXN0IHBhdGggdG8gcm90YXRlIGRpcmVjdGx5XG5cbiAgICAgICAgY29uc3QgcG9zc2liaWxpdGllcyA9IFtyVGFyZ2V0IC0gMzYwLCByVGFyZ2V0LCByVGFyZ2V0ICsgMzYwXTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2VzID0gcG9zc2liaWxpdGllcy5tYXAoYSA9PiBNYXRoLmFicyhhIC0gckN1cnJlbnQpKTtcbiAgICAgICAgY29uc3Qgc2hvcnRlc3QgPSBNYXRoLm1pbiguLi5kaXN0YW5jZXMpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGRpc3RhbmNlcy5pbmRleE9mKHNob3J0ZXN0KTtcbiAgICAgICAgdGFyZ2V0LnJvdGF0ZSA9IHBvc3NpYmlsaXRpZXNbaW5kZXhdO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVsYXRpdmUpIHtcbiAgICAgICAgLy8gd2UgaGF2ZSB0byBiZSBjYXJlZnVsIGhlcmUgbm90IHRvIG92ZXJ3cml0ZSB0aGUgcm90YXRpb25cbiAgICAgICAgLy8gd2l0aCB0aGUgcm90YXRlIG1ldGhvZCBvZiBNYXRyaXhcbiAgICAgICAgaWYgKCFpc01hdHJpeCkge1xuICAgICAgICAgIHRhcmdldC5yb3RhdGUgPSB0cmFuc2Zvcm1zLnJvdGF0ZSB8fCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzRGVjbGFyYXRpdmUgJiYgY3VycmVudEFuZ2xlKSB7XG4gICAgICAgICAgc3RhcnQucm90YXRlID0gY3VycmVudEFuZ2xlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1vcnBoZXIuZnJvbShzdGFydCk7XG4gICAgICBtb3JwaGVyLnRvKHRhcmdldCk7XG4gICAgICBjb25zdCBhZmZpbmVQYXJhbWV0ZXJzID0gbW9ycGhlci5hdChwb3MpO1xuICAgICAgY3VycmVudEFuZ2xlID0gYWZmaW5lUGFyYW1ldGVycy5yb3RhdGU7XG4gICAgICBjdXJyZW50ID0gbmV3IE1hdHJpeChhZmZpbmVQYXJhbWV0ZXJzKTtcbiAgICAgIHRoaXMuYWRkVHJhbnNmb3JtKGN1cnJlbnQpO1xuXG4gICAgICBlbGVtZW50Ll9hZGRSdW5uZXIodGhpcyk7XG5cbiAgICAgIHJldHVybiBtb3JwaGVyLmRvbmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXRhcmdldChuZXdUcmFuc2Zvcm1zKSB7XG4gICAgICAvLyBvbmx5IGdldCBhIG5ldyBvcmlnaW4gaWYgaXQgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBjYWxsXG4gICAgICBpZiAoKG5ld1RyYW5zZm9ybXMub3JpZ2luIHx8ICdjZW50ZXInKS50b1N0cmluZygpICE9PSAodHJhbnNmb3Jtcy5vcmlnaW4gfHwgJ2NlbnRlcicpLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgb3JpZ2luID0gZ2V0T3JpZ2luKG5ld1RyYW5zZm9ybXMsIGVsZW1lbnQpO1xuICAgICAgfSAvLyBvdmVyd3JpdGUgdGhlIG9sZCB0cmFuc2Zvcm1hdGlvbnMgd2l0aCB0aGUgbmV3IG9uZXNcblxuXG4gICAgICB0cmFuc2Zvcm1zID0geyAuLi5uZXdUcmFuc2Zvcm1zLFxuICAgICAgICBvcmlnaW5cbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5xdWV1ZShzZXR1cCwgcnVuLCByZXRhcmdldCwgdHJ1ZSk7XG4gICAgdGhpcy5faXNEZWNsYXJhdGl2ZSAmJiB0aGlzLl9yZW1lbWJlck1vcnBoZXIoJ3RyYW5zZm9ybScsIG1vcnBoZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8vIEFuaW1hdGFibGUgeC1heGlzXG4gIHgoeCwgcmVsYXRpdmUpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVldWVOdW1iZXIoJ3gnLCB4KTtcbiAgfSxcblxuICAvLyBBbmltYXRhYmxlIHktYXhpc1xuICB5KHkpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVldWVOdW1iZXIoJ3knLCB5KTtcbiAgfSxcblxuICBkeCh4ID0gMCkge1xuICAgIHJldHVybiB0aGlzLl9xdWV1ZU51bWJlckRlbHRhKCd4JywgeCk7XG4gIH0sXG5cbiAgZHkoeSA9IDApIHtcbiAgICByZXR1cm4gdGhpcy5fcXVldWVOdW1iZXJEZWx0YSgneScsIHkpO1xuICB9LFxuXG4gIGRtb3ZlKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5keCh4KS5keSh5KTtcbiAgfSxcblxuICBfcXVldWVOdW1iZXJEZWx0YShtZXRob2QsIHRvKSB7XG4gICAgdG8gPSBuZXcgU1ZHTnVtYmVyKHRvKTsgLy8gVHJ5IHRvIGNoYW5nZSB0aGUgdGFyZ2V0IGlmIHdlIGhhdmUgdGhpcyBtZXRob2QgYWxyZWFkeSByZWdpc3RlcmRcblxuICAgIGlmICh0aGlzLl90cnlSZXRhcmdldChtZXRob2QsIHRvKSkgcmV0dXJuIHRoaXM7IC8vIE1ha2UgYSBtb3JwaGVyIGFuZCBxdWV1ZSB0aGUgYW5pbWF0aW9uXG5cbiAgICBjb25zdCBtb3JwaGVyID0gbmV3IE1vcnBoYWJsZSh0aGlzLl9zdGVwcGVyKS50byh0byk7XG4gICAgbGV0IGZyb20gPSBudWxsO1xuICAgIHRoaXMucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgZnJvbSA9IHRoaXMuZWxlbWVudCgpW21ldGhvZF0oKTtcbiAgICAgIG1vcnBoZXIuZnJvbShmcm9tKTtcbiAgICAgIG1vcnBoZXIudG8oZnJvbSArIHRvKTtcbiAgICB9LCBmdW5jdGlvbiAocG9zKSB7XG4gICAgICB0aGlzLmVsZW1lbnQoKVttZXRob2RdKG1vcnBoZXIuYXQocG9zKSk7XG4gICAgICByZXR1cm4gbW9ycGhlci5kb25lKCk7XG4gICAgfSwgZnVuY3Rpb24gKG5ld1RvKSB7XG4gICAgICBtb3JwaGVyLnRvKGZyb20gKyBuZXcgU1ZHTnVtYmVyKG5ld1RvKSk7XG4gICAgfSk7IC8vIFJlZ2lzdGVyIHRoZSBtb3JwaGVyIHNvIHRoYXQgaWYgaXQgaXMgY2hhbmdlZCBhZ2Fpbiwgd2UgY2FuIHJldGFyZ2V0IGl0XG5cbiAgICB0aGlzLl9yZW1lbWJlck1vcnBoZXIobWV0aG9kLCBtb3JwaGVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIF9xdWV1ZU9iamVjdChtZXRob2QsIHRvKSB7XG4gICAgLy8gVHJ5IHRvIGNoYW5nZSB0aGUgdGFyZ2V0IGlmIHdlIGhhdmUgdGhpcyBtZXRob2QgYWxyZWFkeSByZWdpc3RlcmRcbiAgICBpZiAodGhpcy5fdHJ5UmV0YXJnZXQobWV0aG9kLCB0bykpIHJldHVybiB0aGlzOyAvLyBNYWtlIGEgbW9ycGhlciBhbmQgcXVldWUgdGhlIGFuaW1hdGlvblxuXG4gICAgY29uc3QgbW9ycGhlciA9IG5ldyBNb3JwaGFibGUodGhpcy5fc3RlcHBlcikudG8odG8pO1xuICAgIHRoaXMucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgbW9ycGhlci5mcm9tKHRoaXMuZWxlbWVudCgpW21ldGhvZF0oKSk7XG4gICAgfSwgZnVuY3Rpb24gKHBvcykge1xuICAgICAgdGhpcy5lbGVtZW50KClbbWV0aG9kXShtb3JwaGVyLmF0KHBvcykpO1xuICAgICAgcmV0dXJuIG1vcnBoZXIuZG9uZSgpO1xuICAgIH0pOyAvLyBSZWdpc3RlciB0aGUgbW9ycGhlciBzbyB0aGF0IGlmIGl0IGlzIGNoYW5nZWQgYWdhaW4sIHdlIGNhbiByZXRhcmdldCBpdFxuXG4gICAgdGhpcy5fcmVtZW1iZXJNb3JwaGVyKG1ldGhvZCwgbW9ycGhlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBfcXVldWVOdW1iZXIobWV0aG9kLCB2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLl9xdWV1ZU9iamVjdChtZXRob2QsIG5ldyBTVkdOdW1iZXIodmFsdWUpKTtcbiAgfSxcblxuICAvLyBBbmltYXRhYmxlIGNlbnRlciB4LWF4aXNcbiAgY3goeCkge1xuICAgIHJldHVybiB0aGlzLl9xdWV1ZU51bWJlcignY3gnLCB4KTtcbiAgfSxcblxuICAvLyBBbmltYXRhYmxlIGNlbnRlciB5LWF4aXNcbiAgY3koeSkge1xuICAgIHJldHVybiB0aGlzLl9xdWV1ZU51bWJlcignY3knLCB5KTtcbiAgfSxcblxuICAvLyBBZGQgYW5pbWF0YWJsZSBtb3ZlXG4gIG1vdmUoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLngoeCkueSh5KTtcbiAgfSxcblxuICAvLyBBZGQgYW5pbWF0YWJsZSBjZW50ZXJcbiAgY2VudGVyKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5jeCh4KS5jeSh5KTtcbiAgfSxcblxuICAvLyBBZGQgYW5pbWF0YWJsZSBzaXplXG4gIHNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIC8vIGFuaW1hdGUgYmJveCBiYXNlZCBzaXplIGZvciBhbGwgb3RoZXIgZWxlbWVudHNcbiAgICBsZXQgYm94O1xuXG4gICAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XG4gICAgICBib3ggPSB0aGlzLl9lbGVtZW50LmJib3goKTtcbiAgICB9XG5cbiAgICBpZiAoIXdpZHRoKSB7XG4gICAgICB3aWR0aCA9IGJveC53aWR0aCAvIGJveC5oZWlnaHQgKiBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgIGhlaWdodCA9IGJveC5oZWlnaHQgLyBib3gud2lkdGggKiB3aWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy53aWR0aCh3aWR0aCkuaGVpZ2h0KGhlaWdodCk7XG4gIH0sXG5cbiAgLy8gQWRkIGFuaW1hdGFibGUgd2lkdGhcbiAgd2lkdGgod2lkdGgpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVldWVOdW1iZXIoJ3dpZHRoJywgd2lkdGgpO1xuICB9LFxuXG4gIC8vIEFkZCBhbmltYXRhYmxlIGhlaWdodFxuICBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlTnVtYmVyKCdoZWlnaHQnLCBoZWlnaHQpO1xuICB9LFxuXG4gIC8vIEFkZCBhbmltYXRhYmxlIHBsb3RcbiAgcGxvdChhLCBiLCBjLCBkKSB7XG4gICAgLy8gTGluZXMgY2FuIGJlIHBsb3R0ZWQgd2l0aCA0IGFyZ3VtZW50c1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA0KSB7XG4gICAgICByZXR1cm4gdGhpcy5wbG90KFthLCBiLCBjLCBkXSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RyeVJldGFyZ2V0KCdwbG90JywgYSkpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IG1vcnBoZXIgPSBuZXcgTW9ycGhhYmxlKHRoaXMuX3N0ZXBwZXIpLnR5cGUodGhpcy5fZWxlbWVudC5Nb3JwaEFycmF5KS50byhhKTtcbiAgICB0aGlzLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vcnBoZXIuZnJvbSh0aGlzLl9lbGVtZW50LmFycmF5KCkpO1xuICAgIH0sIGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQucGxvdChtb3JwaGVyLmF0KHBvcykpO1xuXG4gICAgICByZXR1cm4gbW9ycGhlci5kb25lKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yZW1lbWJlck1vcnBoZXIoJ3Bsb3QnLCBtb3JwaGVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8vIEFkZCBsZWFkaW5nIG1ldGhvZFxuICBsZWFkaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlTnVtYmVyKCdsZWFkaW5nJywgdmFsdWUpO1xuICB9LFxuXG4gIC8vIEFkZCBhbmltYXRhYmxlIHZpZXdib3hcbiAgdmlld2JveCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlT2JqZWN0KCd2aWV3Ym94JywgbmV3IEJveCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSk7XG4gIH0sXG5cbiAgdXBkYXRlKG8pIHtcbiAgICBpZiAodHlwZW9mIG8gIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy51cGRhdGUoe1xuICAgICAgICBvZmZzZXQ6IGFyZ3VtZW50c1swXSxcbiAgICAgICAgY29sb3I6IGFyZ3VtZW50c1sxXSxcbiAgICAgICAgb3BhY2l0eTogYXJndW1lbnRzWzJdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoby5vcGFjaXR5ICE9IG51bGwpIHRoaXMuYXR0cignc3RvcC1vcGFjaXR5Jywgby5vcGFjaXR5KTtcbiAgICBpZiAoby5jb2xvciAhPSBudWxsKSB0aGlzLmF0dHIoJ3N0b3AtY29sb3InLCBvLmNvbG9yKTtcbiAgICBpZiAoby5vZmZzZXQgIT0gbnVsbCkgdGhpcy5hdHRyKCdvZmZzZXQnLCBvLm9mZnNldCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufSk7XG5leHRlbmQoUnVubmVyLCB7XG4gIHJ4LFxuICByeSxcbiAgZnJvbSxcbiAgdG9cbn0pO1xucmVnaXN0ZXIoUnVubmVyLCAnUnVubmVyJyk7XG5cbmNsYXNzIFN2ZyBleHRlbmRzIENvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygnc3ZnJywgbm9kZSksIGF0dHJzKTtcbiAgICB0aGlzLm5hbWVzcGFjZSgpO1xuICB9IC8vIENyZWF0ZXMgYW5kIHJldHVybnMgZGVmcyBlbGVtZW50XG5cblxuICBkZWZzKCkge1xuICAgIGlmICghdGhpcy5pc1Jvb3QoKSkgcmV0dXJuIHRoaXMucm9vdCgpLmRlZnMoKTtcbiAgICByZXR1cm4gYWRvcHQodGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJ2RlZnMnKSkgfHwgdGhpcy5wdXQobmV3IERlZnMoKSk7XG4gIH1cblxuICBpc1Jvb3QoKSB7XG4gICAgcmV0dXJuICF0aGlzLm5vZGUucGFyZW50Tm9kZSB8fCAhKHRoaXMubm9kZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgZ2xvYmFscy53aW5kb3cuU1ZHRWxlbWVudCkgJiYgdGhpcy5ub2RlLnBhcmVudE5vZGUubm9kZU5hbWUgIT09ICcjZG9jdW1lbnQtZnJhZ21lbnQnO1xuICB9IC8vIEFkZCBuYW1lc3BhY2VzXG5cblxuICBuYW1lc3BhY2UoKSB7XG4gICAgaWYgKCF0aGlzLmlzUm9vdCgpKSByZXR1cm4gdGhpcy5yb290KCkubmFtZXNwYWNlKCk7XG4gICAgcmV0dXJuIHRoaXMuYXR0cih7XG4gICAgICB4bWxuczogc3ZnLFxuICAgICAgdmVyc2lvbjogJzEuMSdcbiAgICB9KS5hdHRyKCd4bWxuczp4bGluaycsIHhsaW5rLCB4bWxucykuYXR0cigneG1sbnM6c3ZnanMnLCBzdmdqcywgeG1sbnMpO1xuICB9XG5cbiAgcmVtb3ZlTmFtZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoe1xuICAgICAgeG1sbnM6IG51bGwsXG4gICAgICB2ZXJzaW9uOiBudWxsXG4gICAgfSkuYXR0cigneG1sbnM6eGxpbmsnLCBudWxsLCB4bWxucykuYXR0cigneG1sbnM6c3ZnanMnLCBudWxsLCB4bWxucyk7XG4gIH0gLy8gQ2hlY2sgaWYgdGhpcyBpcyBhIHJvb3Qgc3ZnXG4gIC8vIElmIG5vdCwgY2FsbCByb290KCkgZnJvbSB0aGlzIGVsZW1lbnRcblxuXG4gIHJvb3QoKSB7XG4gICAgaWYgKHRoaXMuaXNSb290KCkpIHJldHVybiB0aGlzO1xuICAgIHJldHVybiBzdXBlci5yb290KCk7XG4gIH1cblxufVxucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgLy8gQ3JlYXRlIG5lc3RlZCBzdmcgZG9jdW1lbnRcbiAgICBuZXN0ZWQ6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU3ZnKCkpO1xuICAgIH0pXG4gIH1cbn0pO1xucmVnaXN0ZXIoU3ZnLCAnU3ZnJywgdHJ1ZSk7XG5cbmNsYXNzIFN5bWJvbCBleHRlbmRzIENvbnRhaW5lciB7XG4gIC8vIEluaXRpYWxpemUgbm9kZVxuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ3N5bWJvbCcsIG5vZGUpLCBhdHRycyk7XG4gIH1cblxufVxucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgc3ltYm9sOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFN5bWJvbCgpKTtcbiAgICB9KVxuICB9XG59KTtcbnJlZ2lzdGVyKFN5bWJvbCwgJ1N5bWJvbCcpO1xuXG5mdW5jdGlvbiBwbGFpbih0ZXh0KSB7XG4gIC8vIGNsZWFyIGlmIGJ1aWxkIG1vZGUgaXMgZGlzYWJsZWRcbiAgaWYgKHRoaXMuX2J1aWxkID09PSBmYWxzZSkge1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgfSAvLyBjcmVhdGUgdGV4dCBub2RlXG5cblxuICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZ2xvYmFscy5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSk7XG4gIHJldHVybiB0aGlzO1xufSAvLyBHZXQgbGVuZ3RoIG9mIHRleHQgZWxlbWVudFxuXG5mdW5jdGlvbiBsZW5ndGgoKSB7XG4gIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCk7XG59IC8vIE1vdmUgb3ZlciB4LWF4aXNcbi8vIFRleHQgaXMgbW92ZWQgYnkgaXRzIGJvdW5kaW5nIGJveFxuLy8gdGV4dC1hbmNob3IgZG9lcyBOT1QgbWF0dGVyXG5cbmZ1bmN0aW9uIHgkMSh4LCBib3ggPSB0aGlzLmJib3goKSkge1xuICBpZiAoeCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGJveC54O1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuYXR0cigneCcsIHRoaXMuYXR0cigneCcpICsgeCAtIGJveC54KTtcbn0gLy8gTW92ZSBvdmVyIHktYXhpc1xuXG5mdW5jdGlvbiB5JDEoeSwgYm94ID0gdGhpcy5iYm94KCkpIHtcbiAgaWYgKHkgPT0gbnVsbCkge1xuICAgIHJldHVybiBib3gueTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmF0dHIoJ3knLCB0aGlzLmF0dHIoJ3knKSArIHkgLSBib3gueSk7XG59XG5mdW5jdGlvbiBtb3ZlJDEoeCwgeSwgYm94ID0gdGhpcy5iYm94KCkpIHtcbiAgcmV0dXJuIHRoaXMueCh4LCBib3gpLnkoeSwgYm94KTtcbn0gLy8gTW92ZSBjZW50ZXIgb3ZlciB4LWF4aXNcblxuZnVuY3Rpb24gY3goeCwgYm94ID0gdGhpcy5iYm94KCkpIHtcbiAgaWYgKHggPT0gbnVsbCkge1xuICAgIHJldHVybiBib3guY3g7XG4gIH1cblxuICByZXR1cm4gdGhpcy5hdHRyKCd4JywgdGhpcy5hdHRyKCd4JykgKyB4IC0gYm94LmN4KTtcbn0gLy8gTW92ZSBjZW50ZXIgb3ZlciB5LWF4aXNcblxuZnVuY3Rpb24gY3koeSwgYm94ID0gdGhpcy5iYm94KCkpIHtcbiAgaWYgKHkgPT0gbnVsbCkge1xuICAgIHJldHVybiBib3guY3k7XG4gIH1cblxuICByZXR1cm4gdGhpcy5hdHRyKCd5JywgdGhpcy5hdHRyKCd5JykgKyB5IC0gYm94LmN5KTtcbn1cbmZ1bmN0aW9uIGNlbnRlcih4LCB5LCBib3ggPSB0aGlzLmJib3goKSkge1xuICByZXR1cm4gdGhpcy5jeCh4LCBib3gpLmN5KHksIGJveCk7XG59XG5mdW5jdGlvbiBheCh4KSB7XG4gIHJldHVybiB0aGlzLmF0dHIoJ3gnLCB4KTtcbn1cbmZ1bmN0aW9uIGF5KHkpIHtcbiAgcmV0dXJuIHRoaXMuYXR0cigneScsIHkpO1xufVxuZnVuY3Rpb24gYW1vdmUoeCwgeSkge1xuICByZXR1cm4gdGhpcy5heCh4KS5heSh5KTtcbn0gLy8gRW5hYmxlIC8gZGlzYWJsZSBidWlsZCBtb2RlXG5cbmZ1bmN0aW9uIGJ1aWxkKGJ1aWxkKSB7XG4gIHRoaXMuX2J1aWxkID0gISFidWlsZDtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbnZhciB0ZXh0YWJsZSA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBwbGFpbjogcGxhaW4sXG4gIGxlbmd0aDogbGVuZ3RoLFxuICB4OiB4JDEsXG4gIHk6IHkkMSxcbiAgbW92ZTogbW92ZSQxLFxuICBjeDogY3gsXG4gIGN5OiBjeSxcbiAgY2VudGVyOiBjZW50ZXIsXG4gIGF4OiBheCxcbiAgYXk6IGF5LFxuICBhbW92ZTogYW1vdmUsXG4gIGJ1aWxkOiBidWlsZFxufTtcblxuY2xhc3MgVGV4dCBleHRlbmRzIFNoYXBlIHtcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygndGV4dCcsIG5vZGUpLCBhdHRycyk7XG4gICAgdGhpcy5kb20ubGVhZGluZyA9IG5ldyBTVkdOdW1iZXIoMS4zKTsgLy8gc3RvcmUgbGVhZGluZyB2YWx1ZSBmb3IgcmVidWlsZGluZ1xuXG4gICAgdGhpcy5fcmVidWlsZCA9IHRydWU7IC8vIGVuYWJsZSBhdXRvbWF0aWMgdXBkYXRpbmcgb2YgZHkgdmFsdWVzXG5cbiAgICB0aGlzLl9idWlsZCA9IGZhbHNlOyAvLyBkaXNhYmxlIGJ1aWxkIG1vZGUgZm9yIGFkZGluZyBtdWx0aXBsZSBsaW5lc1xuICB9IC8vIFNldCAvIGdldCBsZWFkaW5nXG5cblxuICBsZWFkaW5nKHZhbHVlKSB7XG4gICAgLy8gYWN0IGFzIGdldHRlclxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5kb20ubGVhZGluZztcbiAgICB9IC8vIGFjdCBhcyBzZXR0ZXJcblxuXG4gICAgdGhpcy5kb20ubGVhZGluZyA9IG5ldyBTVkdOdW1iZXIodmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnJlYnVpbGQoKTtcbiAgfSAvLyBSZWJ1aWxkIGFwcGVhcmFuY2UgdHlwZVxuXG5cbiAgcmVidWlsZChyZWJ1aWxkKSB7XG4gICAgLy8gc3RvcmUgbmV3IHJlYnVpbGQgZmxhZyBpZiBnaXZlblxuICAgIGlmICh0eXBlb2YgcmVidWlsZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLl9yZWJ1aWxkID0gcmVidWlsZDtcbiAgICB9IC8vIGRlZmluZSBwb3NpdGlvbiBvZiBhbGwgbGluZXNcblxuXG4gICAgaWYgKHRoaXMuX3JlYnVpbGQpIHtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IGJsYW5rTGluZU9mZnNldCA9IDA7XG4gICAgICBjb25zdCBsZWFkaW5nID0gdGhpcy5kb20ubGVhZGluZztcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICBjb25zdCBmb250U2l6ZSA9IGdsb2JhbHMud2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5ub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXNpemUnKTtcbiAgICAgICAgY29uc3QgZHkgPSBsZWFkaW5nICogbmV3IFNWR051bWJlcihmb250U2l6ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZG9tLm5ld0xpbmVkKSB7XG4gICAgICAgICAgdGhpcy5hdHRyKCd4Jywgc2VsZi5hdHRyKCd4JykpO1xuXG4gICAgICAgICAgaWYgKHRoaXMudGV4dCgpID09PSAnXFxuJykge1xuICAgICAgICAgICAgYmxhbmtMaW5lT2Zmc2V0ICs9IGR5O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmF0dHIoJ2R5JywgaSA/IGR5ICsgYmxhbmtMaW5lT2Zmc2V0IDogMCk7XG4gICAgICAgICAgICBibGFua0xpbmVPZmZzZXQgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmZpcmUoJ3JlYnVpbGQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBvdmVyd3JpdGUgbWV0aG9kIGZyb20gcGFyZW50IHRvIHNldCBkYXRhIHByb3Blcmx5XG5cblxuICBzZXREYXRhKG8pIHtcbiAgICB0aGlzLmRvbSA9IG87XG4gICAgdGhpcy5kb20ubGVhZGluZyA9IG5ldyBTVkdOdW1iZXIoby5sZWFkaW5nIHx8IDEuMyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gU2V0IHRoZSB0ZXh0IGNvbnRlbnRcblxuXG4gIHRleHQodGV4dCkge1xuICAgIC8vIGFjdCBhcyBnZXR0ZXJcbiAgICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMubm9kZS5jaGlsZE5vZGVzO1xuICAgICAgbGV0IGZpcnN0TGluZSA9IDA7XG4gICAgICB0ZXh0ID0gJyc7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAvLyBza2lwIHRleHRQYXRocyAtIHRoZXkgYXJlIG5vIGxpbmVzXG4gICAgICAgIGlmIChjaGlsZHJlbltpXS5ub2RlTmFtZSA9PT0gJ3RleHRQYXRoJykge1xuICAgICAgICAgIGlmIChpID09PSAwKSBmaXJzdExpbmUgPSAxO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IC8vIGFkZCBuZXdsaW5lIGlmIGl0cyBub3QgdGhlIGZpcnN0IGNoaWxkIGFuZCBuZXdMaW5lZCBpcyBzZXQgdG8gdHJ1ZVxuXG5cbiAgICAgICAgaWYgKGkgIT09IGZpcnN0TGluZSAmJiBjaGlsZHJlbltpXS5ub2RlVHlwZSAhPT0gMyAmJiBhZG9wdChjaGlsZHJlbltpXSkuZG9tLm5ld0xpbmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgdGV4dCArPSAnXFxuJztcbiAgICAgICAgfSAvLyBhZGQgY29udGVudCBvZiB0aGlzIG5vZGVcblxuXG4gICAgICAgIHRleHQgKz0gY2hpbGRyZW5baV0udGV4dENvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH0gLy8gcmVtb3ZlIGV4aXN0aW5nIGNvbnRlbnRcblxuXG4gICAgdGhpcy5jbGVhcigpLmJ1aWxkKHRydWUpO1xuXG4gICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBjYWxsIGJsb2NrXG4gICAgICB0ZXh0LmNhbGwodGhpcywgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHN0b3JlIHRleHQgYW5kIG1ha2Ugc3VyZSB0ZXh0IGlzIG5vdCBibGFua1xuICAgICAgdGV4dCA9ICh0ZXh0ICsgJycpLnNwbGl0KCdcXG4nKTsgLy8gYnVpbGQgbmV3IGxpbmVzXG5cbiAgICAgIGZvciAobGV0IGogPSAwLCBqbCA9IHRleHQubGVuZ3RoOyBqIDwgamw7IGorKykge1xuICAgICAgICB0aGlzLm5ld0xpbmUodGV4dFtqXSk7XG4gICAgICB9XG4gICAgfSAvLyBkaXNhYmxlIGJ1aWxkIG1vZGUgYW5kIHJlYnVpbGQgbGluZXNcblxuXG4gICAgcmV0dXJuIHRoaXMuYnVpbGQoZmFsc2UpLnJlYnVpbGQoKTtcbiAgfVxuXG59XG5leHRlbmQoVGV4dCwgdGV4dGFibGUpO1xucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgLy8gQ3JlYXRlIHRleHQgZWxlbWVudFxuICAgIHRleHQ6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICh0ZXh0ID0gJycpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgVGV4dCgpKS50ZXh0KHRleHQpO1xuICAgIH0pLFxuICAgIC8vIENyZWF0ZSBwbGFpbiB0ZXh0IGVsZW1lbnRcbiAgICBwbGFpbjogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHRleHQgPSAnJykge1xuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBUZXh0KCkpLnBsYWluKHRleHQpO1xuICAgIH0pXG4gIH1cbn0pO1xucmVnaXN0ZXIoVGV4dCwgJ1RleHQnKTtcblxuY2xhc3MgVHNwYW4gZXh0ZW5kcyBTaGFwZSB7XG4gIC8vIEluaXRpYWxpemUgbm9kZVxuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ3RzcGFuJywgbm9kZSksIGF0dHJzKTtcbiAgICB0aGlzLl9idWlsZCA9IGZhbHNlOyAvLyBkaXNhYmxlIGJ1aWxkIG1vZGUgZm9yIGFkZGluZyBtdWx0aXBsZSBsaW5lc1xuICB9IC8vIFNob3J0Y3V0IGR4XG5cblxuICBkeChkeCkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2R4JywgZHgpO1xuICB9IC8vIFNob3J0Y3V0IGR5XG5cblxuICBkeShkeSkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2R5JywgZHkpO1xuICB9IC8vIENyZWF0ZSBuZXcgbGluZVxuXG5cbiAgbmV3TGluZSgpIHtcbiAgICAvLyBtYXJrIG5ldyBsaW5lXG4gICAgdGhpcy5kb20ubmV3TGluZWQgPSB0cnVlOyAvLyBmZXRjaCBwYXJlbnRcblxuICAgIGNvbnN0IHRleHQgPSB0aGlzLnBhcmVudCgpOyAvLyBlYXJseSByZXR1cm4gaW4gY2FzZSB3ZSBhcmUgbm90IGluIGEgdGV4dCBlbGVtZW50XG5cbiAgICBpZiAoISh0ZXh0IGluc3RhbmNlb2YgVGV4dCkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbnN0IGkgPSB0ZXh0LmluZGV4KHRoaXMpO1xuICAgIGNvbnN0IGZvbnRTaXplID0gZ2xvYmFscy53aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLm5vZGUpLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtc2l6ZScpO1xuICAgIGNvbnN0IGR5ID0gdGV4dC5kb20ubGVhZGluZyAqIG5ldyBTVkdOdW1iZXIoZm9udFNpemUpOyAvLyBhcHBseSBuZXcgcG9zaXRpb25cblxuICAgIHJldHVybiB0aGlzLmR5KGkgPyBkeSA6IDApLmF0dHIoJ3gnLCB0ZXh0LngoKSk7XG4gIH0gLy8gU2V0IHRleHQgY29udGVudFxuXG5cbiAgdGV4dCh0ZXh0KSB7XG4gICAgaWYgKHRleHQgPT0gbnVsbCkgcmV0dXJuIHRoaXMubm9kZS50ZXh0Q29udGVudCArICh0aGlzLmRvbS5uZXdMaW5lZCA/ICdcXG4nIDogJycpO1xuXG4gICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmNsZWFyKCkuYnVpbGQodHJ1ZSk7XG4gICAgICB0ZXh0LmNhbGwodGhpcywgdGhpcyk7XG4gICAgICB0aGlzLmJ1aWxkKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGFpbih0ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5leHRlbmQoVHNwYW4sIHRleHRhYmxlKTtcbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIFRzcGFuOiB7XG4gICAgdHNwYW46IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICh0ZXh0ID0gJycpIHtcbiAgICAgIGNvbnN0IHRzcGFuID0gbmV3IFRzcGFuKCk7IC8vIGNsZWFyIGlmIGJ1aWxkIG1vZGUgaXMgZGlzYWJsZWRcblxuICAgICAgaWYgKCF0aGlzLl9idWlsZCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB9IC8vIGFkZCBuZXcgdHNwYW5cblxuXG4gICAgICByZXR1cm4gdGhpcy5wdXQodHNwYW4pLnRleHQodGV4dCk7XG4gICAgfSlcbiAgfSxcbiAgVGV4dDoge1xuICAgIG5ld0xpbmU6IGZ1bmN0aW9uICh0ZXh0ID0gJycpIHtcbiAgICAgIHJldHVybiB0aGlzLnRzcGFuKHRleHQpLm5ld0xpbmUoKTtcbiAgICB9XG4gIH1cbn0pO1xucmVnaXN0ZXIoVHNwYW4sICdUc3BhbicpO1xuXG5jbGFzcyBDaXJjbGUgZXh0ZW5kcyBTaGFwZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygnY2lyY2xlJywgbm9kZSksIGF0dHJzKTtcbiAgfVxuXG4gIHJhZGl1cyhyKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cigncicsIHIpO1xuICB9IC8vIFJhZGl1cyB4IHZhbHVlXG5cblxuICByeChyeCkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ3InLCByeCk7XG4gIH0gLy8gQWxpYXMgcmFkaXVzIHggdmFsdWVcblxuXG4gIHJ5KHJ5KSB7XG4gICAgcmV0dXJuIHRoaXMucngocnkpO1xuICB9XG5cbiAgc2l6ZShzaXplKSB7XG4gICAgcmV0dXJuIHRoaXMucmFkaXVzKG5ldyBTVkdOdW1iZXIoc2l6ZSkuZGl2aWRlKDIpKTtcbiAgfVxuXG59XG5leHRlbmQoQ2lyY2xlLCB7XG4gIHg6IHgkMyxcbiAgeTogeSQzLFxuICBjeDogY3gkMSxcbiAgY3k6IGN5JDEsXG4gIHdpZHRoOiB3aWR0aCQyLFxuICBoZWlnaHQ6IGhlaWdodCQyXG59KTtcbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIC8vIENyZWF0ZSBjaXJjbGUgZWxlbWVudFxuICAgIGNpcmNsZTogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHNpemUgPSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IENpcmNsZSgpKS5zaXplKHNpemUpLm1vdmUoMCwgMCk7XG4gICAgfSlcbiAgfVxufSk7XG5yZWdpc3RlcihDaXJjbGUsICdDaXJjbGUnKTtcblxuY2xhc3MgQ2xpcFBhdGggZXh0ZW5kcyBDb250YWluZXIge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ2NsaXBQYXRoJywgbm9kZSksIGF0dHJzKTtcbiAgfSAvLyBVbmNsaXAgYWxsIGNsaXBwZWQgZWxlbWVudHMgYW5kIHJlbW92ZSBpdHNlbGZcblxuXG4gIHJlbW92ZSgpIHtcbiAgICAvLyB1bmNsaXAgYWxsIHRhcmdldHNcbiAgICB0aGlzLnRhcmdldHMoKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgZWwudW5jbGlwKCk7XG4gICAgfSk7IC8vIHJlbW92ZSBjbGlwUGF0aCBmcm9tIHBhcmVudFxuXG4gICAgcmV0dXJuIHN1cGVyLnJlbW92ZSgpO1xuICB9XG5cbiAgdGFyZ2V0cygpIHtcbiAgICByZXR1cm4gYmFzZUZpbmQoJ3N2ZyBbY2xpcC1wYXRoKj1cIicgKyB0aGlzLmlkKCkgKyAnXCJdJyk7XG4gIH1cblxufVxucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgLy8gQ3JlYXRlIGNsaXBwaW5nIGVsZW1lbnRcbiAgICBjbGlwOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZzKCkucHV0KG5ldyBDbGlwUGF0aCgpKTtcbiAgICB9KVxuICB9LFxuICBFbGVtZW50OiB7XG4gICAgLy8gRGlzdHJpYnV0ZSBjbGlwUGF0aCB0byBzdmcgZWxlbWVudFxuICAgIGNsaXBwZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2UoJ2NsaXAtcGF0aCcpO1xuICAgIH0sXG5cbiAgICBjbGlwV2l0aChlbGVtZW50KSB7XG4gICAgICAvLyB1c2UgZ2l2ZW4gY2xpcCBvciBjcmVhdGUgYSBuZXcgb25lXG4gICAgICBjb25zdCBjbGlwcGVyID0gZWxlbWVudCBpbnN0YW5jZW9mIENsaXBQYXRoID8gZWxlbWVudCA6IHRoaXMucGFyZW50KCkuY2xpcCgpLmFkZChlbGVtZW50KTsgLy8gYXBwbHkgbWFza1xuXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdjbGlwLXBhdGgnLCAndXJsKFwiIycgKyBjbGlwcGVyLmlkKCkgKyAnXCIpJyk7XG4gICAgfSxcblxuICAgIC8vIFVuY2xpcCBlbGVtZW50XG4gICAgdW5jbGlwKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXR0cignY2xpcC1wYXRoJywgbnVsbCk7XG4gICAgfVxuXG4gIH1cbn0pO1xucmVnaXN0ZXIoQ2xpcFBhdGgsICdDbGlwUGF0aCcpO1xuXG5jbGFzcyBGb3JlaWduT2JqZWN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygnZm9yZWlnbk9iamVjdCcsIG5vZGUpLCBhdHRycyk7XG4gIH1cblxufVxucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgZm9yZWlnbk9iamVjdDogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgRm9yZWlnbk9iamVjdCgpKS5zaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIH0pXG4gIH1cbn0pO1xucmVnaXN0ZXIoRm9yZWlnbk9iamVjdCwgJ0ZvcmVpZ25PYmplY3QnKTtcblxuZnVuY3Rpb24gZG1vdmUoZHgsIGR5KSB7XG4gIHRoaXMuY2hpbGRyZW4oKS5mb3JFYWNoKChjaGlsZCwgaSkgPT4ge1xuICAgIGxldCBiYm94OyAvLyBXZSBoYXZlIHRvIHdyYXAgdGhpcyBmb3IgZWxlbWVudHMgdGhhdCBkb250IGhhdmUgYSBiYm94XG4gICAgLy8gZS5nLiB0aXRsZSBhbmQgb3RoZXIgZGVzY3JpcHRpdmUgZWxlbWVudHNcblxuICAgIHRyeSB7XG4gICAgICAvLyBHZXQgdGhlIGNoaWxkcyBiYm94XG4gICAgICBiYm94ID0gY2hpbGQuYmJveCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEdldCBjaGlsZHMgbWF0cml4XG5cblxuICAgIGNvbnN0IG0gPSBuZXcgTWF0cml4KGNoaWxkKTsgLy8gVHJhbnNsYXRlIGNoaWxkcyBtYXRyaXggYnkgYW1vdW50IGFuZFxuICAgIC8vIHRyYW5zZm9ybSBpdCBiYWNrIGludG8gcGFyZW50cyBzcGFjZVxuXG4gICAgY29uc3QgbWF0cml4ID0gbS50cmFuc2xhdGUoZHgsIGR5KS50cmFuc2Zvcm0obS5pbnZlcnNlKCkpOyAvLyBDYWxjdWxhdGUgbmV3IHggYW5kIHkgZnJvbSBvbGQgYm94XG5cbiAgICBjb25zdCBwID0gbmV3IFBvaW50KGJib3gueCwgYmJveC55KS50cmFuc2Zvcm0obWF0cml4KTsgLy8gTW92ZSBlbGVtZW50XG5cbiAgICBjaGlsZC5tb3ZlKHAueCwgcC55KTtcbiAgfSk7XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gZHgoZHgpIHtcbiAgcmV0dXJuIHRoaXMuZG1vdmUoZHgsIDApO1xufVxuZnVuY3Rpb24gZHkoZHkpIHtcbiAgcmV0dXJuIHRoaXMuZG1vdmUoMCwgZHkpO1xufVxuZnVuY3Rpb24gaGVpZ2h0KGhlaWdodCwgYm94ID0gdGhpcy5iYm94KCkpIHtcbiAgaWYgKGhlaWdodCA9PSBudWxsKSByZXR1cm4gYm94LmhlaWdodDtcbiAgcmV0dXJuIHRoaXMuc2l6ZShib3gud2lkdGgsIGhlaWdodCwgYm94KTtcbn1cbmZ1bmN0aW9uIG1vdmUoeCA9IDAsIHkgPSAwLCBib3ggPSB0aGlzLmJib3goKSkge1xuICBjb25zdCBkeCA9IHggLSBib3gueDtcbiAgY29uc3QgZHkgPSB5IC0gYm94Lnk7XG4gIHJldHVybiB0aGlzLmRtb3ZlKGR4LCBkeSk7XG59XG5mdW5jdGlvbiBzaXplKHdpZHRoLCBoZWlnaHQsIGJveCA9IHRoaXMuYmJveCgpKSB7XG4gIGNvbnN0IHAgPSBwcm9wb3J0aW9uYWxTaXplKHRoaXMsIHdpZHRoLCBoZWlnaHQsIGJveCk7XG4gIGNvbnN0IHNjYWxlWCA9IHAud2lkdGggLyBib3gud2lkdGg7XG4gIGNvbnN0IHNjYWxlWSA9IHAuaGVpZ2h0IC8gYm94LmhlaWdodDtcbiAgdGhpcy5jaGlsZHJlbigpLmZvckVhY2goKGNoaWxkLCBpKSA9PiB7XG4gICAgY29uc3QgbyA9IG5ldyBQb2ludChib3gpLnRyYW5zZm9ybShuZXcgTWF0cml4KGNoaWxkKS5pbnZlcnNlKCkpO1xuICAgIGNoaWxkLnNjYWxlKHNjYWxlWCwgc2NhbGVZLCBvLngsIG8ueSk7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHdpZHRoKHdpZHRoLCBib3ggPSB0aGlzLmJib3goKSkge1xuICBpZiAod2lkdGggPT0gbnVsbCkgcmV0dXJuIGJveC53aWR0aDtcbiAgcmV0dXJuIHRoaXMuc2l6ZSh3aWR0aCwgYm94LmhlaWdodCwgYm94KTtcbn1cbmZ1bmN0aW9uIHgoeCwgYm94ID0gdGhpcy5iYm94KCkpIHtcbiAgaWYgKHggPT0gbnVsbCkgcmV0dXJuIGJveC54O1xuICByZXR1cm4gdGhpcy5tb3ZlKHgsIGJveC55LCBib3gpO1xufVxuZnVuY3Rpb24geSh5LCBib3ggPSB0aGlzLmJib3goKSkge1xuICBpZiAoeSA9PSBudWxsKSByZXR1cm4gYm94Lnk7XG4gIHJldHVybiB0aGlzLm1vdmUoYm94LngsIHksIGJveCk7XG59XG5cbnZhciBjb250YWluZXJHZW9tZXRyeSA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkbW92ZTogZG1vdmUsXG4gIGR4OiBkeCxcbiAgZHk6IGR5LFxuICBoZWlnaHQ6IGhlaWdodCxcbiAgbW92ZTogbW92ZSxcbiAgc2l6ZTogc2l6ZSxcbiAgd2lkdGg6IHdpZHRoLFxuICB4OiB4LFxuICB5OiB5XG59O1xuXG5jbGFzcyBHIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdnJywgbm9kZSksIGF0dHJzKTtcbiAgfVxuXG59XG5leHRlbmQoRywgY29udGFpbmVyR2VvbWV0cnkpO1xucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgLy8gQ3JlYXRlIGEgZ3JvdXAgZWxlbWVudFxuICAgIGdyb3VwOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IEcoKSk7XG4gICAgfSlcbiAgfVxufSk7XG5yZWdpc3RlcihHLCAnRycpO1xuXG5jbGFzcyBBIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdhJywgbm9kZSksIGF0dHJzKTtcbiAgfSAvLyBMaW5rIHRhcmdldCBhdHRyaWJ1dGVcblxuXG4gIHRhcmdldCh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCd0YXJnZXQnLCB0YXJnZXQpO1xuICB9IC8vIExpbmsgdXJsXG5cblxuICB0byh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdocmVmJywgdXJsLCB4bGluayk7XG4gIH1cblxufVxuZXh0ZW5kKEEsIGNvbnRhaW5lckdlb21ldHJ5KTtcbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIC8vIENyZWF0ZSBhIGh5cGVybGluayBlbGVtZW50XG4gICAgbGluazogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHVybCkge1xuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBBKCkpLnRvKHVybCk7XG4gICAgfSlcbiAgfSxcbiAgRWxlbWVudDoge1xuICAgIHVubGluaygpIHtcbiAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmxpbmtlcigpO1xuICAgICAgaWYgKCFsaW5rKSByZXR1cm4gdGhpcztcbiAgICAgIGNvbnN0IHBhcmVudCA9IGxpbmsucGFyZW50KCk7XG5cbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbmRleCA9IHBhcmVudC5pbmRleChsaW5rKTtcbiAgICAgIHBhcmVudC5hZGQodGhpcywgaW5kZXgpO1xuICAgICAgbGluay5yZW1vdmUoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBsaW5rVG8odXJsKSB7XG4gICAgICAvLyByZXVzZSBvbGQgbGluayBpZiBwb3NzaWJsZVxuICAgICAgbGV0IGxpbmsgPSB0aGlzLmxpbmtlcigpO1xuXG4gICAgICBpZiAoIWxpbmspIHtcbiAgICAgICAgbGluayA9IG5ldyBBKCk7XG4gICAgICAgIHRoaXMud3JhcChsaW5rKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdXJsLmNhbGwobGluaywgbGluayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5rLnRvKHVybCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBsaW5rZXIoKSB7XG4gICAgICBjb25zdCBsaW5rID0gdGhpcy5wYXJlbnQoKTtcblxuICAgICAgaWYgKGxpbmsgJiYgbGluay5ub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJykge1xuICAgICAgICByZXR1cm4gbGluaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gIH1cbn0pO1xucmVnaXN0ZXIoQSwgJ0EnKTtcblxuY2xhc3MgTWFzayBleHRlbmRzIENvbnRhaW5lciB7XG4gIC8vIEluaXRpYWxpemUgbm9kZVxuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ21hc2snLCBub2RlKSwgYXR0cnMpO1xuICB9IC8vIFVubWFzayBhbGwgbWFza2VkIGVsZW1lbnRzIGFuZCByZW1vdmUgaXRzZWxmXG5cblxuICByZW1vdmUoKSB7XG4gICAgLy8gdW5tYXNrIGFsbCB0YXJnZXRzXG4gICAgdGhpcy50YXJnZXRzKCkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLnVubWFzaygpO1xuICAgIH0pOyAvLyByZW1vdmUgbWFzayBmcm9tIHBhcmVudFxuXG4gICAgcmV0dXJuIHN1cGVyLnJlbW92ZSgpO1xuICB9XG5cbiAgdGFyZ2V0cygpIHtcbiAgICByZXR1cm4gYmFzZUZpbmQoJ3N2ZyBbbWFzayo9XCInICsgdGhpcy5pZCgpICsgJ1wiXScpO1xuICB9XG5cbn1cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIG1hc2s6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZnMoKS5wdXQobmV3IE1hc2soKSk7XG4gICAgfSlcbiAgfSxcbiAgRWxlbWVudDoge1xuICAgIC8vIERpc3RyaWJ1dGUgbWFzayB0byBzdmcgZWxlbWVudFxuICAgIG1hc2tlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZSgnbWFzaycpO1xuICAgIH0sXG5cbiAgICBtYXNrV2l0aChlbGVtZW50KSB7XG4gICAgICAvLyB1c2UgZ2l2ZW4gbWFzayBvciBjcmVhdGUgYSBuZXcgb25lXG4gICAgICBjb25zdCBtYXNrZXIgPSBlbGVtZW50IGluc3RhbmNlb2YgTWFzayA/IGVsZW1lbnQgOiB0aGlzLnBhcmVudCgpLm1hc2soKS5hZGQoZWxlbWVudCk7IC8vIGFwcGx5IG1hc2tcblxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignbWFzaycsICd1cmwoXCIjJyArIG1hc2tlci5pZCgpICsgJ1wiKScpO1xuICAgIH0sXG5cbiAgICAvLyBVbm1hc2sgZWxlbWVudFxuICAgIHVubWFzaygpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ21hc2snLCBudWxsKTtcbiAgICB9XG5cbiAgfVxufSk7XG5yZWdpc3RlcihNYXNrLCAnTWFzaycpO1xuXG5jbGFzcyBTdG9wIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygnc3RvcCcsIG5vZGUpLCBhdHRycyk7XG4gIH0gLy8gYWRkIGNvbG9yIHN0b3BzXG5cblxuICB1cGRhdGUobykge1xuICAgIGlmICh0eXBlb2YgbyA9PT0gJ251bWJlcicgfHwgbyBpbnN0YW5jZW9mIFNWR051bWJlcikge1xuICAgICAgbyA9IHtcbiAgICAgICAgb2Zmc2V0OiBhcmd1bWVudHNbMF0sXG4gICAgICAgIGNvbG9yOiBhcmd1bWVudHNbMV0sXG4gICAgICAgIG9wYWNpdHk6IGFyZ3VtZW50c1syXVxuICAgICAgfTtcbiAgICB9IC8vIHNldCBhdHRyaWJ1dGVzXG5cblxuICAgIGlmIChvLm9wYWNpdHkgIT0gbnVsbCkgdGhpcy5hdHRyKCdzdG9wLW9wYWNpdHknLCBvLm9wYWNpdHkpO1xuICAgIGlmIChvLmNvbG9yICE9IG51bGwpIHRoaXMuYXR0cignc3RvcC1jb2xvcicsIG8uY29sb3IpO1xuICAgIGlmIChvLm9mZnNldCAhPSBudWxsKSB0aGlzLmF0dHIoJ29mZnNldCcsIG5ldyBTVkdOdW1iZXIoby5vZmZzZXQpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBHcmFkaWVudDoge1xuICAgIC8vIEFkZCBhIGNvbG9yIHN0b3BcbiAgICBzdG9wOiBmdW5jdGlvbiAob2Zmc2V0LCBjb2xvciwgb3BhY2l0eSkge1xuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTdG9wKCkpLnVwZGF0ZShvZmZzZXQsIGNvbG9yLCBvcGFjaXR5KTtcbiAgICB9XG4gIH1cbn0pO1xucmVnaXN0ZXIoU3RvcCwgJ1N0b3AnKTtcblxuZnVuY3Rpb24gY3NzUnVsZShzZWxlY3RvciwgcnVsZSkge1xuICBpZiAoIXNlbGVjdG9yKSByZXR1cm4gJyc7XG4gIGlmICghcnVsZSkgcmV0dXJuIHNlbGVjdG9yO1xuICBsZXQgcmV0ID0gc2VsZWN0b3IgKyAneyc7XG5cbiAgZm9yIChjb25zdCBpIGluIHJ1bGUpIHtcbiAgICByZXQgKz0gdW5DYW1lbENhc2UoaSkgKyAnOicgKyBydWxlW2ldICsgJzsnO1xuICB9XG5cbiAgcmV0ICs9ICd9JztcbiAgcmV0dXJuIHJldDtcbn1cblxuY2xhc3MgU3R5bGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdzdHlsZScsIG5vZGUpLCBhdHRycyk7XG4gIH1cblxuICBhZGRUZXh0KHcgPSAnJykge1xuICAgIHRoaXMubm9kZS50ZXh0Q29udGVudCArPSB3O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZm9udChuYW1lLCBzcmMsIHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZSgnQGZvbnQtZmFjZScsIHtcbiAgICAgIGZvbnRGYW1pbHk6IG5hbWUsXG4gICAgICBzcmM6IHNyYyxcbiAgICAgIC4uLnBhcmFtc1xuICAgIH0pO1xuICB9XG5cbiAgcnVsZShzZWxlY3Rvciwgb2JqKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkVGV4dChjc3NSdWxlKHNlbGVjdG9yLCBvYmopKTtcbiAgfVxuXG59XG5yZWdpc3Rlck1ldGhvZHMoJ0RvbScsIHtcbiAgc3R5bGUoc2VsZWN0b3IsIG9iaikge1xuICAgIHJldHVybiB0aGlzLnB1dChuZXcgU3R5bGUoKSkucnVsZShzZWxlY3Rvciwgb2JqKTtcbiAgfSxcblxuICBmb250ZmFjZShuYW1lLCBzcmMsIHBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnB1dChuZXcgU3R5bGUoKSkuZm9udChuYW1lLCBzcmMsIHBhcmFtcyk7XG4gIH1cblxufSk7XG5yZWdpc3RlcihTdHlsZSwgJ1N0eWxlJyk7XG5cbmNsYXNzIFRleHRQYXRoIGV4dGVuZHMgVGV4dCB7XG4gIC8vIEluaXRpYWxpemUgbm9kZVxuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ3RleHRQYXRoJywgbm9kZSksIGF0dHJzKTtcbiAgfSAvLyByZXR1cm4gdGhlIGFycmF5IG9mIHRoZSBwYXRoIHRyYWNrIGVsZW1lbnRcblxuXG4gIGFycmF5KCkge1xuICAgIGNvbnN0IHRyYWNrID0gdGhpcy50cmFjaygpO1xuICAgIHJldHVybiB0cmFjayA/IHRyYWNrLmFycmF5KCkgOiBudWxsO1xuICB9IC8vIFBsb3QgcGF0aCBpZiBhbnlcblxuXG4gIHBsb3QoZCkge1xuICAgIGNvbnN0IHRyYWNrID0gdGhpcy50cmFjaygpO1xuICAgIGxldCBwYXRoQXJyYXkgPSBudWxsO1xuXG4gICAgaWYgKHRyYWNrKSB7XG4gICAgICBwYXRoQXJyYXkgPSB0cmFjay5wbG90KGQpO1xuICAgIH1cblxuICAgIHJldHVybiBkID09IG51bGwgPyBwYXRoQXJyYXkgOiB0aGlzO1xuICB9IC8vIEdldCB0aGUgcGF0aCBlbGVtZW50XG5cblxuICB0cmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2UoJ2hyZWYnKTtcbiAgfVxuXG59XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICB0ZXh0UGF0aDogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHRleHQsIHBhdGgpIHtcbiAgICAgIC8vIENvbnZlcnQgdGV4dCB0byBpbnN0YW5jZSBpZiBuZWVkZWRcbiAgICAgIGlmICghKHRleHQgaW5zdGFuY2VvZiBUZXh0KSkge1xuICAgICAgICB0ZXh0ID0gdGhpcy50ZXh0KHRleHQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGV4dC5wYXRoKHBhdGgpO1xuICAgIH0pXG4gIH0sXG4gIFRleHQ6IHtcbiAgICAvLyBDcmVhdGUgcGF0aCBmb3IgdGV4dCB0byBydW4gb25cbiAgICBwYXRoOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAodHJhY2ssIGltcG9ydE5vZGVzID0gdHJ1ZSkge1xuICAgICAgY29uc3QgdGV4dFBhdGggPSBuZXcgVGV4dFBhdGgoKTsgLy8gaWYgdHJhY2sgaXMgYSBwYXRoLCByZXVzZSBpdFxuXG4gICAgICBpZiAoISh0cmFjayBpbnN0YW5jZW9mIFBhdGgpKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBwYXRoIGVsZW1lbnRcbiAgICAgICAgdHJhY2sgPSB0aGlzLmRlZnMoKS5wYXRoKHRyYWNrKTtcbiAgICAgIH0gLy8gbGluayB0ZXh0UGF0aCB0byBwYXRoIGFuZCBhZGQgY29udGVudFxuXG5cbiAgICAgIHRleHRQYXRoLmF0dHIoJ2hyZWYnLCAnIycgKyB0cmFjaywgeGxpbmspOyAvLyBUcmFuc3BsYW50IGFsbCBub2RlcyBmcm9tIHRleHQgdG8gdGV4dFBhdGhcblxuICAgICAgbGV0IG5vZGU7XG5cbiAgICAgIGlmIChpbXBvcnROb2Rlcykge1xuICAgICAgICB3aGlsZSAobm9kZSA9IHRoaXMubm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgdGV4dFBhdGgubm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBhZGQgdGV4dFBhdGggZWxlbWVudCBhcyBjaGlsZCBub2RlIGFuZCByZXR1cm4gdGV4dFBhdGhcblxuXG4gICAgICByZXR1cm4gdGhpcy5wdXQodGV4dFBhdGgpO1xuICAgIH0pLFxuXG4gICAgLy8gR2V0IHRoZSB0ZXh0UGF0aCBjaGlsZHJlblxuICAgIHRleHRQYXRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZE9uZSgndGV4dFBhdGgnKTtcbiAgICB9XG5cbiAgfSxcbiAgUGF0aDoge1xuICAgIC8vIGNyZWF0ZXMgYSB0ZXh0UGF0aCBmcm9tIHRoaXMgcGF0aFxuICAgIHRleHQ6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAvLyBDb252ZXJ0IHRleHQgdG8gaW5zdGFuY2UgaWYgbmVlZGVkXG4gICAgICBpZiAoISh0ZXh0IGluc3RhbmNlb2YgVGV4dCkpIHtcbiAgICAgICAgdGV4dCA9IG5ldyBUZXh0KCkuYWRkVG8odGhpcy5wYXJlbnQoKSkudGV4dCh0ZXh0KTtcbiAgICAgIH0gLy8gQ3JlYXRlIHRleHRQYXRoIGZyb20gdGV4dCBhbmQgcGF0aCBhbmQgcmV0dXJuXG5cblxuICAgICAgcmV0dXJuIHRleHQucGF0aCh0aGlzKTtcbiAgICB9KSxcblxuICAgIHRhcmdldHMoKSB7XG4gICAgICByZXR1cm4gYmFzZUZpbmQoJ3N2ZyB0ZXh0UGF0aCcpLmZpbHRlcihub2RlID0+IHtcbiAgICAgICAgcmV0dXJuIChub2RlLmF0dHIoJ2hyZWYnKSB8fCAnJykuaW5jbHVkZXModGhpcy5pZCgpKTtcbiAgICAgIH0pOyAvLyBEb2VzIG5vdCB3b3JrIGluIElFMTEuIFVzZSB3aGVuIElFIHN1cHBvcnQgaXMgZHJvcHBlZFxuICAgICAgLy8gcmV0dXJuIGJhc2VGaW5kKCdzdmcgdGV4dFBhdGhbKnxocmVmKj1cIicgKyB0aGlzLmlkKCkgKyAnXCJdJylcbiAgICB9XG5cbiAgfVxufSk7XG5UZXh0UGF0aC5wcm90b3R5cGUuTW9ycGhBcnJheSA9IFBhdGhBcnJheTtcbnJlZ2lzdGVyKFRleHRQYXRoLCAnVGV4dFBhdGgnKTtcblxuY2xhc3MgVXNlIGV4dGVuZHMgU2hhcGUge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ3VzZScsIG5vZGUpLCBhdHRycyk7XG4gIH0gLy8gVXNlIGVsZW1lbnQgYXMgYSByZWZlcmVuY2VcblxuXG4gIHVzZShlbGVtZW50LCBmaWxlKSB7XG4gICAgLy8gU2V0IGxpbmVkIGVsZW1lbnRcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdocmVmJywgKGZpbGUgfHwgJycpICsgJyMnICsgZWxlbWVudCwgeGxpbmspO1xuICB9XG5cbn1cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIC8vIENyZWF0ZSBhIHVzZSBlbGVtZW50XG4gICAgdXNlOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAoZWxlbWVudCwgZmlsZSkge1xuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBVc2UoKSkudXNlKGVsZW1lbnQsIGZpbGUpO1xuICAgIH0pXG4gIH1cbn0pO1xucmVnaXN0ZXIoVXNlLCAnVXNlJyk7XG5cbi8qIE9wdGlvbmFsIE1vZHVsZXMgKi9cbmNvbnN0IFNWRyA9IG1ha2VJbnN0YW5jZTtcbmV4dGVuZChbU3ZnLCBTeW1ib2wsIEltYWdlLCBQYXR0ZXJuLCBNYXJrZXJdLCBnZXRNZXRob2RzRm9yKCd2aWV3Ym94JykpO1xuZXh0ZW5kKFtMaW5lLCBQb2x5bGluZSwgUG9seWdvbiwgUGF0aF0sIGdldE1ldGhvZHNGb3IoJ21hcmtlcicpKTtcbmV4dGVuZChUZXh0LCBnZXRNZXRob2RzRm9yKCdUZXh0JykpO1xuZXh0ZW5kKFBhdGgsIGdldE1ldGhvZHNGb3IoJ1BhdGgnKSk7XG5leHRlbmQoRGVmcywgZ2V0TWV0aG9kc0ZvcignRGVmcycpKTtcbmV4dGVuZChbVGV4dCwgVHNwYW5dLCBnZXRNZXRob2RzRm9yKCdUc3BhbicpKTtcbmV4dGVuZChbUmVjdCwgRWxsaXBzZSwgR3JhZGllbnQsIFJ1bm5lcl0sIGdldE1ldGhvZHNGb3IoJ3JhZGl1cycpKTtcbmV4dGVuZChFdmVudFRhcmdldCwgZ2V0TWV0aG9kc0ZvcignRXZlbnRUYXJnZXQnKSk7XG5leHRlbmQoRG9tLCBnZXRNZXRob2RzRm9yKCdEb20nKSk7XG5leHRlbmQoRWxlbWVudCwgZ2V0TWV0aG9kc0ZvcignRWxlbWVudCcpKTtcbmV4dGVuZChTaGFwZSwgZ2V0TWV0aG9kc0ZvcignU2hhcGUnKSk7XG5leHRlbmQoW0NvbnRhaW5lciwgRnJhZ21lbnRdLCBnZXRNZXRob2RzRm9yKCdDb250YWluZXInKSk7XG5leHRlbmQoR3JhZGllbnQsIGdldE1ldGhvZHNGb3IoJ0dyYWRpZW50JykpO1xuZXh0ZW5kKFJ1bm5lciwgZ2V0TWV0aG9kc0ZvcignUnVubmVyJykpO1xuTGlzdC5leHRlbmQoZ2V0TWV0aG9kTmFtZXMoKSk7XG5yZWdpc3Rlck1vcnBoYWJsZVR5cGUoW1NWR051bWJlciwgQ29sb3IsIEJveCwgTWF0cml4LCBTVkdBcnJheSwgUG9pbnRBcnJheSwgUGF0aEFycmF5LCBQb2ludF0pO1xubWFrZU1vcnBoYWJsZSgpO1xuXG5leHBvcnQgeyBBLCBBbmltYXRvciwgU1ZHQXJyYXkgYXMgQXJyYXksIEJveCwgQ2lyY2xlLCBDbGlwUGF0aCwgQ29sb3IsIENvbnRhaW5lciwgQ29udHJvbGxlciwgRGVmcywgRG9tLCBFYXNlLCBFbGVtZW50LCBFbGxpcHNlLCBFdmVudFRhcmdldCwgRm9yZWlnbk9iamVjdCwgRnJhZ21lbnQsIEcsIEdyYWRpZW50LCBJbWFnZSwgTGluZSwgTGlzdCwgTWFya2VyLCBNYXNrLCBNYXRyaXgsIE1vcnBoYWJsZSwgTm9uTW9ycGhhYmxlLCBTVkdOdW1iZXIgYXMgTnVtYmVyLCBPYmplY3RCYWcsIFBJRCwgUGF0aCwgUGF0aEFycmF5LCBQYXR0ZXJuLCBQb2ludCwgUG9pbnRBcnJheSwgUG9seWdvbiwgUG9seWxpbmUsIFF1ZXVlLCBSZWN0LCBSdW5uZXIsIFNWRywgU2hhcGUsIFNwcmluZywgU3RvcCwgU3R5bGUsIFN2ZywgU3ltYm9sLCBUZXh0LCBUZXh0UGF0aCwgVGltZWxpbmUsIFRyYW5zZm9ybUJhZywgVHNwYW4sIFVzZSwgYWRvcHQsIGFzc2lnbk5ld0lkLCBjbGVhckV2ZW50cywgY3JlYXRlLCBkZWZhdWx0cywgZGlzcGF0Y2gsIGVhc2luZywgZWlkLCBleHRlbmQsIGJhc2VGaW5kIGFzIGZpbmQsIGdldENsYXNzLCBnZXRFdmVudFRhcmdldCwgZ2V0RXZlbnRzLCBnZXRXaW5kb3csIG1ha2VJbnN0YW5jZSwgbWFrZU1vcnBoYWJsZSwgbW9ja0Fkb3B0LCBuYW1lc3BhY2VzLCBub2RlT3JOZXcsIG9mZiwgb24sIHBhcnNlciwgcmVnZXgsIHJlZ2lzdGVyLCByZWdpc3Rlck1vcnBoYWJsZVR5cGUsIHJlZ2lzdGVyV2luZG93LCByZXN0b3JlV2luZG93LCByb290LCBzYXZlV2luZG93LCB1dGlscywgd2luZG93RXZlbnRzLCB3aXRoV2luZG93LCB3cmFwV2l0aEF0dHJDaGVjayB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3ZnLmVzbS5qcy5tYXBcbiIsImltcG9ydCB7IFNWRywgU3ZnLCBHLCBDb250YWluZXIsIFJlY3QsIFRleHQsIEJveCwgQ2lyY2xlLCBOdW1iZXIsIEEgfSBmcm9tICdAc3ZnZG90anMvc3ZnLmpzJ1xuXG5lbnVtIFJvbGVUeXBlIHtcbiAgICBidXR0b24gPSBcImJ1dHRvblwiLFxuICAgIGdyb3VwID0gXCJncm91cFwiLFxuICAgIGhlYWRpbmcgPSBcImhlYWRpbmdcIixcbiAgICBub25lID0gXCJub25lXCIsXG4gICAgc2Nyb2xsYmFyID0gXCJzY3JvbGxiYXJcIixcbiAgICB3aW5kb3cgPSBcIndpbmRvd1wiLFxufVxuXG5pbnRlcmZhY2UgSUFjY2Vzc2liaWxpdHkge1xuICAgIHNldCByb2xlKHJvbGU6IFJvbGVUeXBlKTtcbiAgICBnZXQgcm9sZSgpOiBSb2xlVHlwZTtcbn1cblxuaW50ZXJmYWNlIFdpZGdldFN0YXRlIHtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSB3aWRnZXQgZW50ZXIgZXZlbnQuXG4gICAgICogXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCBUaGUgd2lkZ2V0IGJlaW5nIGludGVyYWN0ZWQgd2l0aC5cbiAgICAgKi9cbiAgICBvbkVudGVyKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIHdpZGdldCBsZWF2ZSBldmVudC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSB3aWRnZXQgYmVpbmcgaW50ZXJhY3RlZCB3aXRoLlxuICAgICAqL1xuICAgIG9uTGVhdmUoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgd2lkZ2V0IHByZXNzIGV2ZW50LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIHdpZGdldCBiZWluZyBpbnRlcmFjdGVkIHdpdGguXG4gICAgICovXG4gICAgb25QcmVzcyhjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSB3aWRnZXQgcmVsZWFzZSBldmVudC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSB3aWRnZXQgYmVpbmcgaW50ZXJhY3RlZCB3aXRoLlxuICAgICAqL1xuICAgIG9uUmVsZWFzZShjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBtb3VzZSBtb3ZlIHdpdGhpbiB3aWRnZXQgZXZlbnQuXG4gICAgICogXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCBUaGUgd2lkZ2V0IGJlaW5nIGludGVyYWN0ZWQgd2l0aC5cbiAgICAgKi9cbiAgICBvbk1vdmUoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUga2V5dXAgZXZlbnQuXG4gICAgICogXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCBUaGUgd2lkZ2V0IGJlaW5nIGludGVyYWN0ZWQgd2l0aC5cbiAgICAgKi9cbiAgICBvbktleXVwKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZDtcbn1cblxuY2xhc3MgSWRsZVVwV2lkZ2V0U3RhdGUgaW1wbGVtZW50cyBXaWRnZXRTdGF0ZSB7XG5cbiAgICBwdWJsaWMgb25FbnRlcihjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoY29tcG9uZW50LnBhcmVudC5nZXRTdGF0ZSgpIGluc3RhbmNlb2YgSWRsZURvd25XaWRnZXRTdGF0ZSl7XG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUobmV3IEhvdmVyUHJlc3NlZFdpZGdldFN0YXRlKCkpO1xuICAgICAgICAgICAgY29tcG9uZW50LmhvdmVyUHJlc3NlZFN0YXRlKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKG5ldyBIb3ZlcldpZGdldFN0YXRlKCkpO1xuICAgICAgICAgICAgY29tcG9uZW50LmhvdmVyU3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkxlYXZlKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7IH1cblxuICAgIHB1YmxpYyBvblByZXNzKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShuZXcgSWRsZURvd25XaWRnZXRTdGF0ZSgpKTtcbiAgICAgICAgY29tcG9uZW50LmlkbGVkb3duU3RhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25SZWxlYXNlKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7IH1cblxuICAgIHB1YmxpYyBvbk1vdmUoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHtcbiAgICB9XG4gICAgcHVibGljIG9uS2V5dXAoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHtcbiAgICAgICAgY29tcG9uZW50LmtleXVwU3RhdGUoKTtcbiAgICB9XG59XG5cbmNsYXNzIElkbGVEb3duV2lkZ2V0U3RhdGUgaW1wbGVtZW50cyBXaWRnZXRTdGF0ZSB7XG5cbiAgICBwdWJsaWMgb25FbnRlcihjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQgeyB9XG4gICAgcHVibGljIG9uTGVhdmUoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHsgfVxuICAgIHB1YmxpYyBvblByZXNzKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7IH1cblxuICAgIHB1YmxpYyBvblJlbGVhc2UoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHtcbiAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKG5ldyBJZGxlVXBXaWRnZXRTdGF0ZSgpKTtcbiAgICAgICAgY29tcG9uZW50LmlkbGV1cFN0YXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTW92ZShjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICBjb21wb25lbnQubW92ZVN0YXRlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBvbktleXVwKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7XG4gICAgfVxufVxuXG5jbGFzcyBIb3ZlcldpZGdldFN0YXRlIGltcGxlbWVudHMgV2lkZ2V0U3RhdGUge1xuXG4gICAgcHVibGljIG9uRW50ZXIoY29tcG9uZW50OiBDb21wb25lbnQpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25MZWF2ZShjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUobmV3IElkbGVVcFdpZGdldFN0YXRlKCkpO1xuICAgICAgICBjb21wb25lbnQuaWRsZXVwU3RhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25QcmVzcyhjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUobmV3IFByZXNzZWRXaWRnZXRTdGF0ZSgpKTtcbiAgICAgICAgY29tcG9uZW50LnByZXNzZWRTdGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblJlbGVhc2UoY29tcG9uZW50OiBDb21wb25lbnQpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Nb3ZlKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7IH1cbiAgICBwdWJsaWMgb25LZXl1cChjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQge1xuICAgIH1cbn1cblxuY2xhc3MgSG92ZXJQcmVzc2VkV2lkZ2V0U3RhdGUgaW1wbGVtZW50cyBXaWRnZXRTdGF0ZSB7XG5cbiAgICBwdWJsaWMgb25FbnRlcihjb21wb25lbnQ6IENvbXBvbmVudCkgeyB9XG5cbiAgICBwdWJsaWMgb25MZWF2ZShjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUobmV3IElkbGVVcFdpZGdldFN0YXRlKCkpO1xuICAgICAgICBjb21wb25lbnQuaWRsZXVwU3RhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25QcmVzcyhjb21wb25lbnQ6IENvbXBvbmVudCkgeyB9XG5cbiAgICBwdWJsaWMgb25SZWxlYXNlKGNvbXBvbmVudDogQ29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShuZXcgSG92ZXJXaWRnZXRTdGF0ZSgpKTtcbiAgICAgICAgY29tcG9uZW50LmhvdmVyU3RhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Nb3ZlKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7IH1cbiAgICBwdWJsaWMgb25LZXl1cChjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQge1xuICAgIH1cbn1cblxuY2xhc3MgUHJlc3NlZFdpZGdldFN0YXRlIGltcGxlbWVudHMgV2lkZ2V0U3RhdGUge1xuXG4gICAgcHVibGljIG9uRW50ZXIoY29tcG9uZW50OiBDb21wb25lbnQpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25MZWF2ZShjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUobmV3IFByZXNzZWRPdXRXaWRnZXRTdGF0ZSgpKTtcbiAgICAgICAgY29tcG9uZW50LnByZXNzZWRvdXRTdGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblByZXNzKGNvbXBvbmVudDogQ29tcG9uZW50KSB7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVsZWFzZShjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUobmV3IEhvdmVyV2lkZ2V0U3RhdGUoKSk7XG4gICAgICAgIGNvbXBvbmVudC5wcmVzc1JlbGVhc2VTdGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1vdmUoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5pc0RyYWdnYWJsZSl7XG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUobmV3IERyYWdXaW5kb3dTdGF0ZSgpKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5tb3ZlU3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgb25LZXl1cChjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQge1xuXG4gICAgfVxufVxuXG5jbGFzcyBQcmVzc2VkT3V0V2lkZ2V0U3RhdGUgaW1wbGVtZW50cyBXaWRnZXRTdGF0ZSB7XG5cbiAgICBwdWJsaWMgb25FbnRlcihjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUobmV3IFByZXNzZWRXaWRnZXRTdGF0ZSgpKTtcbiAgICAgICAgY29tcG9uZW50LnByZXNzZWRTdGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxlYXZlKGNvbXBvbmVudDogQ29tcG9uZW50KSB7IH1cblxuICAgIHB1YmxpYyBvblByZXNzKGNvbXBvbmVudDogQ29tcG9uZW50KSB7IH1cblxuICAgIHB1YmxpYyBvblJlbGVhc2UoY29tcG9uZW50OiBDb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKG5ldyBJZGxlVXBXaWRnZXRTdGF0ZSgpKTtcbiAgICAgICAgY29tcG9uZW50LmlkbGV1cFN0YXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTW92ZShjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoY29tcG9uZW50LmlzRHJhZ2dhYmxlKXtcbiAgICAgICAgICAgIGNvbXBvbmVudC5tb3ZlU3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgb25LZXl1cChjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQge1xuICAgIH1cbn1cblxuY2xhc3MgRHJhZ1dpbmRvd1N0YXRlIGltcGxlbWVudHMgV2lkZ2V0U3RhdGUge1xuICAgIG9uRW50ZXIoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHsgfVxuXG4gICAgb25MZWF2ZShjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUobmV3IFByZXNzZWRPdXRXaWRnZXRTdGF0ZSgpKVxuICAgICAgICBjb21wb25lbnQucHJlc3NlZG91dFN0YXRlKCk7XG4gICAgfVxuICAgIG9uUHJlc3MoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHsgfVxuXG4gICAgb25SZWxlYXNlKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShuZXcgSG92ZXJXaWRnZXRTdGF0ZSgpKTtcbiAgICAgICAgY29tcG9uZW50LmhvdmVyU3RhdGUoKTtcbiAgICB9XG4gICAgb25Nb3ZlKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIGNvbXBvbmVudC5tb3ZlU3RhdGUoKTsgICAgICAgIFxuICAgIH1cbiAgICBvbktleXVwKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7IH1cbn1cblxuY2xhc3MgS2V5cHJlc3NXaWRnZXRTdGF0ZSBpbXBsZW1lbnRzIFdpZGdldFN0YXRle1xuICAgIG9uRW50ZXIoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHsgfVxuICAgIG9uTGVhdmUoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHsgfVxuICAgIG9uUHJlc3MoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHsgfVxuICAgIG9uUmVsZWFzZShjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQgeyB9XG4gICAgb25Nb3ZlKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7IH1cbiAgICBvbktleXVwKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIGNvbXBvbmVudC5rZXl1cFN0YXRlKCk7XG4gICAgfVxufVxuLyoqXG4gKiBBIHNpbXBsZSBjbGFzcyBmb3IgcGFzc2luZyBldmVudCBhcmd1bWVudHMgY29udGFpbmluZyBhbiBvYmplY3QsIGV2ZW50LCBhbmQgYW4gb3B0aW9uYWwgaXRlbSByZWZlcmVuY2UuXG4gKi9cbmNsYXNzIEV2ZW50QXJncyB7XG4gICAgcHJpdmF0ZSBfZXZlbnQ6IGFueTtcbiAgICBwcml2YXRlIF9vYmo6IENvbXBvbmVudDtcbiAgICBwcml2YXRlIF9pdGVtUmVmOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IEV2ZW50QXJncyBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudC5cbiAgICAgKiBAcGFyYW0gZXZlbnQgKE9wdGlvbmFsKSBUaGUgZXZlbnQgdGhhdCBvY2N1cnJlZC5cbiAgICAgKiBAcGFyYW0gaXRlbVJlZiAoT3B0aW9uYWwpIEEgcmVmZXJlbmNlIHRvIHRoZSBpdGVtIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob2JqOiBDb21wb25lbnQsIGV2ZW50PzogYW55LCBpdGVtUmVmPzogYW55KSB7XG4gICAgICAgIHRoaXMuX2V2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMuX29iaiA9IG9iajtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtUmVmICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5faXRlbVJlZiA9IGl0ZW1SZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhlIEV2ZW50QXJncyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBnZXQgZXZlbnQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIEV2ZW50QXJncyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBnZXQgb2JqKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vYmo7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaXRlbSByZWZlcmVuY2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBFdmVudEFyZ3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZ2V0IGl0ZW1SZWYoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1SZWY7XG4gICAgfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBDb21wb25lbnQgaW1wbGVtZW50cyBJQWNjZXNzaWJpbGl0eSB7XG4gICAgcHVibGljIHRhYmluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2hhbmRsZXJzOiBNYXA8V2lkZ2V0U3RhdGUsIChlOiBFdmVudEFyZ3MpPT52b2lkPiA9IG5ldyBNYXA8V2lkZ2V0U3RhdGUsIChlOiBFdmVudEFyZ3MpPT52b2lkPigpO1xuICAgIHByb3RlY3RlZCBfaXNzZWxlY3RhYmxlOiBib29sZWFuO1xuICAgIHByb3RlY3RlZCBzdGF0ZTogV2lkZ2V0U3RhdGU7XG5cbiAgICBwdWJsaWMgcHJldmlvdXNTdGF0ZTogV2lkZ2V0U3RhdGUgfCBudWxsID0gbnVsbDtcbiAgICBwdWJsaWMgcGFyZW50OiBDb21wb25lbnQ7XG4gICAgcHVibGljIG91dGVyU3ZnOiBDb250YWluZXI7XG5cbiAgICAvKipcbiAgICAgKiBmbGFnIHRydWUgaWYgd2lkZ2V0IG5lZWRzIHRvIHN1cHBvcnQgYSBkcmFnZ2FibGUgc3RhdGUgZS5nLiwgc2Nyb2xsYmFyXG4gICAgICovXG4gICAgcHVibGljIGlzRHJhZ2dhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKiBhY2Nlc3NpYmlsaXR5IHByb3BlcnRpZXMgKi9cbiAgICBwcm90ZWN0ZWQgX3JvbGU6IFJvbGVUeXBlID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbiAgICAvKlxuICAgICAgICBBY2Nlc3NpYmlsaXR5IGlzIG9waW5pb25hdGVkLiBJZiByb2xlIGlzIG5vdCBzZXQsIHRocm93IGVycm9yLlxuICAgICovXG4gICAgc2V0IHJvbGUocm9sZTogUm9sZVR5cGUpIHtcbiAgICAgICAgdGhpcy5fcm9sZSA9IHJvbGU7XG4gICAgfVxuICAgIGdldCByb2xlKCk6IFJvbGVUeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvbGU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU2VsZWN0YWJsZSBpcyBhIGZsYWcgdG8gY29udHJvbCB3aGV0aGVyIG9yIG5vdCBhIHdpZGdldCBnZXRzIHNlbGVjdGVkIG9uIGEgYnJvd3NlciBkcmFnIGFjdGlvbi5cbiAgICAgICAgR2VuZXJhbGx5LCB0aGlzIHNob3VsZCBiZSBzZXQgdG8gZmFsc2UgZm9yIHdpZGdldHMgbGlrZSBhIGJ1dHRvbiwgYnV0IHRydWUgZm9yIHdpZGdldHMgdGhhdCBzdXBwb3J0XG4gICAgICAgIHRleHQgaW5wdXRcbiAgICAqL1xuICAgIHNldCBzZWxlY3RhYmxlKHZhbDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc3NlbGVjdGFibGUgPSB2YWw7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc3NlbGVjdGFibGU7XG4gICAgfVxuXG4gICAgYXR0YWNoKGhhbmRsZXI6IHsgKGU6IEV2ZW50QXJncyk6IHZvaWQgfSwgc3RhdGU/OiBXaWRnZXRTdGF0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9oYW5kbGVycy5zZXQoc3RhdGUsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHJhaXNlKGV2ZW50OiBFdmVudEFyZ3MsIHN0YXRlPzogV2lkZ2V0U3RhdGUpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMuZm9yRWFjaCgoZSxzKT0+e1xuICAgICAgICAgICAgLy9pZiBzdGF0ZSBjYW4gYmUgZm91bmQsIHJhaXNlLCBvdGhlcndpc2UgcmFpc2UgZXZlcnl0aGluZyAoZm9yIGJhY2t3YXJkcyBjb21wYXQpXG4gICAgICAgICAgICBpZiAoc3RhdGUgJiYgcyBpbnN0YW5jZW9mIHN0YXRlLmNvbnN0cnVjdG9yKSAge1xuICAgICAgICAgICAgICAgIGUoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBzIGlzIHVuZGVmaW5lZCwgYXNzdW1lIG9ubHkgb25lIGV2ZW50IGF0dGFjaGVkLCBzbyByYWlzZVxuICAgICAgICAgICAgaWYgKHMgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBlKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW92ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5vdXRlclN2ZyAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5vdXRlclN2Zy5tb3ZlKHgsIHkpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0U3RhdGUoc3RhdGU6IFdpZGdldFN0YXRlKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICAvKiBvdmVycmlkZSB0byBoYW5kbGUgZ3JhcGhpY2FsIHVwZGF0ZXMgaW4gZGVyaXZlZCB3aWRnZXRzICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucm9sZSAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5vdXRlclN2Zy5hdHRyKHtcbiAgICAgICAgICAgICAgICByb2xlOiB0aGlzLnJvbGUsXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg6IHRoaXMudGFiaW5kZXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyaWEgUm9sZSBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgaWRsZXVwU3RhdGUoKTogdm9pZDtcbiAgICBhYnN0cmFjdCBpZGxlZG93blN0YXRlKCk6IHZvaWQ7XG4gICAgYWJzdHJhY3QgcHJlc3NlZFN0YXRlKCk6IHZvaWQ7XG4gICAgYWJzdHJhY3QgcHJlc3NSZWxlYXNlU3RhdGUoKTogdm9pZDtcbiAgICBhYnN0cmFjdCBob3ZlclN0YXRlKCk6IHZvaWQ7XG4gICAgYWJzdHJhY3QgaG92ZXJQcmVzc2VkU3RhdGUoKTogdm9pZDtcbiAgICBhYnN0cmFjdCBwcmVzc2Vkb3V0U3RhdGUoKTogdm9pZDtcbiAgICBhYnN0cmFjdCBtb3ZlU3RhdGUoKTogdm9pZDtcbiAgICBhYnN0cmFjdCBrZXl1cFN0YXRlKGtleUV2ZW50PzogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG59XG5cbmNsYXNzIFdpbmRvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfd2luZG93OiBTdmc7XG4gICAgcHJpdmF0ZSBvYnNlcnZlcnM6IEFycmF5PChzdGF0ZTpXaWRnZXRTdGF0ZSkgPT4gdm9pZD47XG4gICAgcHVibGljIGtleUV2ZW50OiBLZXlib2FyZEV2ZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihoZWlnaHQ6IGFueSwgd2lkdGg6IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsZXQgYm9keSA9IFNWRygpLmFkZFRvKCdib2R5Jykuc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgbGV0IHJlY3QgPSBib2R5LnJlY3Qod2lkdGgsIGhlaWdodCkuZmlsbChcIndoaXRlXCIpLnN0cm9rZShcImJsYWNrXCIpXG4gICAgICAgICAgLmF0dHIoeyAnc3Ryb2tlLXdpZHRoJzogMyB9KTtcbiAgICAgICAgdGhpcy5fd2luZG93ID0gU1ZHKCkuYWRkVG8oYm9keSk7XG4gICAgICAgIHRoaXMub3V0ZXJTdmcgPSB0aGlzLl93aW5kb3c7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudChib2R5KTtcbiAgICAgICAgLy8gc2V0IEFyaWEgcm9sZVxuICAgICAgICB0aGlzLnJvbGUgPSBSb2xlVHlwZS53aW5kb3c7XG4gICAgICAgIC8vIHNldCBkZWZhdWx0IHN0YXRlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3IElkbGVVcFdpZGdldFN0YXRlKCkpO1xuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRPYnNlcnZlcihvYnNlcnZlcjogKHN0YXRlOldpZGdldFN0YXRlKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVPYnNlcnZlcihvYnNlcnZlcjogKHN0YXRlOldpZGdldFN0YXRlKSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBub3RpZnlPYnNlcnZlcnMoc3RhdGU6V2lkZ2V0U3RhdGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBvYnNlcnZlciBvZiB0aGlzLm9ic2VydmVycykge1xuICAgICAgICAgICAgb2JzZXJ2ZXIoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyRXZlbnQob2JqOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgU1ZHKHdpbmRvdykub24oJ2tleXVwJywgKGV2ZW50KT0+e1xuICAgICAgICAgICAgdGhpcy5rZXlFdmVudCA9IGV2ZW50IGFzIEtleWJvYXJkRXZlbnRcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25LZXl1cCh0aGlzKTtcbiAgICAgICAgfSwgd2luZG93KTtcbiAgICAgICAgU1ZHKHdpbmRvdykub24oJ3NlbGVjdGlvbmNoYW5nZScsIChldmVudCk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpKVxuICAgICAgICB9LCB3aW5kb3cpO1xuICAgICAgICBvYmoubW91c2V1cCgoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vblJlbGVhc2UodGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBvYmoubW91c2Vkb3duKChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgICAgIC8vIHByZXZlbnRzIGRyYWdnYWJsZSB0ZXh0IHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uUHJlc3ModGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBvYmoubW91c2VvdmVyKChldmVudDogYW55KSA9PiB7XG4gICAgICAgIH0pO1xuICAgICAgICBvYmoubW91c2VvdXQoKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgfSk7XG4gICAgICAgIG9iai5tb3VzZW1vdmUoKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25Nb3ZlKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgd2luZG93KCk6IFN2ZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl93aW5kb3c7XG4gICAgfVxuXG4gICAgaWRsZXVwU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKHRoaXMuZ2V0U3RhdGUoKSk7XG4gICAgfVxuXG4gICAgaWRsZWRvd25TdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcy5nZXRTdGF0ZSgpKTtcbiAgICB9XG5cbiAgICBtb3ZlU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKHRoaXMuZ2V0U3RhdGUoKSk7XG4gICAgfVxuICAgIFxuICAgIGtleXVwU3RhdGUoKTogdm9pZCB7IFxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyhuZXcgS2V5cHJlc3NXaWRnZXRTdGF0ZSgpKTtcbiAgICB9XG5cbiAgICAvL3JlcXVpcmVkIHRvIGZ1bGZpbGwgaW5oZXJpdGFuY2UgcmVxdWlyZW1lbnRzXG4gICAgLy9idXQgbm90IGltcGxlbWVudGVkIGZvciB0aGUgd2luZG93IGNvbXBvbmVudFxuICAgIHByZXNzZWRTdGF0ZSgpOiB2b2lkIHsgfVxuICAgIHByZXNzUmVsZWFzZVN0YXRlKCk6IHZvaWQgeyB9XG4gICAgaG92ZXJTdGF0ZSgpOiB2b2lkIHsgfVxuICAgIGhvdmVyUHJlc3NlZFN0YXRlKCk6IHZvaWQgeyB9XG4gICAgcHJlc3NlZG91dFN0YXRlKCk6IHZvaWQgeyB9XG59XG5cbmFic3RyYWN0IGNsYXNzIFdpZGdldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHdpZHRoOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGhlaWdodDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfZm9yZWNvbG9yOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIF9iYWNrY29sb3I6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgX2dyb3VwOiBHO1xuICAgIHByb3RlY3RlZCBfYmFzZTogU3ZnO1xuICAgIHByb3RlY3RlZCByYXdFdmVudDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBXaW5kb3cpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuc2VsZWN0YWJsZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlcldpbmRvd0V2ZW50cygpO1xuICAgIH1cblxuICAgIFxuICAgIHByb3RlY3RlZCByZWdpc3RlcldpbmRvd0V2ZW50cygpOiB2b2lke1xuICAgICAgICAodGhpcy5wYXJlbnQgYXMgV2luZG93KS5hZGRPYnNlcnZlcigoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIC8vV2Ugb25seSB3YW50IHRvIG1vZGlmeSB3aWRnZXQgc3RhdGUgb3V0c2lkZSBvZiB0aGUgXG4gICAgICAgICAgICAvL3dpZGdldCBmb3Igc3RhdGUgdHJhbnNpdGlvbnMgdGhhdCBvY2N1ciBvdXRzaWRlIG9mXG4gICAgICAgICAgICAvL3RoZSB3aWRnZXQncyBib3VuZHMuXG4gICAgICAgICAgICBpZiAoc3RhdGUgaW5zdGFuY2VvZiBJZGxlVXBXaWRnZXRTdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3RhdGUoKSBpbnN0YW5jZW9mIFByZXNzZWRPdXRXaWRnZXRTdGF0ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXcgSWRsZVVwV2lkZ2V0U3RhdGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZSBpbnN0YW5jZW9mIElkbGVEb3duV2lkZ2V0U3RhdGUpe1xuICAgICAgICAgICAgICAgIHRoaXMuaWRsZWRvd25TdGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlIGluc3RhbmNlb2YgS2V5cHJlc3NXaWRnZXRTdGF0ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXl1cFN0YXRlKCh0aGlzLnBhcmVudCBhcyBXaW5kb3cpLmtleUV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlIGluc3RhbmNlb2YgRHJhZ1dpbmRvd1N0YXRlKXtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTdGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgU1ZHLmpzIGV2ZW50IGhhbmRsZXJzIGZvciB0aGUgZ2l2ZW4gb2JqZWN0LlxuICAgICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byByZWdpc3RlciBldmVudCBoYW5kbGVycyBmb3IuXG4gICAgICogQHJldHVybnMgdm9pZC5cbiAgICAgKiBcbiAgICAgKiBAZGVzY3JpcHRpb24gcmVnaXN0ZXJFdmVudCBzZXJ2ZXMgYXMgYSBjb3VwbGluZyBtZXRob2RcbiAgICAgKiBiZXR3ZWVuIHRoZSBTVkcuanMgbGlicmFyeSBldmVudCBoYW5kbGVycyBhbmQgdGhlIHN0YXRlXG4gICAgICogYW5kIG9ic2VydmVyIHBhdHRlcm5zIHVzZWQgYnkgdGhlIHRvb2xraXQuIFRvIGdhaW4gYWNjZXNzXG4gICAgICogdG8gdGhlIHNvdXJjZSBldmVudCBkYXRhIHNpbXBseSBhc3NpZ24gdGhlIGV2ZW50IHBhcmFtZXRlciBcbiAgICAgKiB0byB0aGUgY3VycmVudCBvYmplY3QgdXNpbmcgdGhpcyBhbmQgdGhlIHJhd0V2ZW50IHByb3BlcnR5LlxuICAgICAqL1xuICAgIHByb3RlY3RlZCByZWdpc3RlckV2ZW50KG9iajogYW55KTogdm9pZCB7XG4gICAgICAgIG9iai5tb3VzZXVwKChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uUmVsZWFzZSh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9iai5tb3VzZWRvd24oKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICAgICAgLy8gcHJldmVudHMgZHJhZ2dhYmxlIHRleHQgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25QcmVzcyh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9iai5tb3VzZW92ZXIoKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25FbnRlcih0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9iai5tb3VzZW91dCgoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vbkxlYXZlKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgb2JqLm1vdXNlbW92ZSgoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy9tb3VzZSBtb3ZlIGV2ZW50cyBnZW5lcmF0ZSBwb3NpdGlvbmFsIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAvL2Fib3V0IHRoZSBjdXJzb3IsIGxpa2VseSBuZWVkZWQgZm9yIHdpZGdldHMgdGhhdCB0cmFja1xuICAgICAgICAgICAgLy9jdXJzb3IgbW92ZW1lbnQuXG4gICAgICAgICAgICB0aGlzLnJhd0V2ZW50ID0gZXZlbnQ7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uTW92ZSh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0IGJhY2tjb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2JhY2tjb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGdldCBiYWNrY29sb3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JhY2tjb2xvcjtcbiAgICB9XG5cbiAgICBzZXQgZm9yZWNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZm9yZWNvbG9yID0gY29sb3I7XG4gICAgfVxuXG4gICAgZ2V0IGZvcmVjb2xvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9yZWNvbG9yO1xuICAgIH1cblxuICAgIGFic3RyYWN0IHJlbmRlcigpOiB2b2lkO1xufVxuXG4vLyBsb2NhbFxuZXhwb3J0IHsgV2luZG93LCBXaWRnZXQsIENvbXBvbmVudCwgSUFjY2Vzc2liaWxpdHksIFJvbGVUeXBlLCBFdmVudEFyZ3MgfVxuZXhwb3J0IHsgSWRsZVVwV2lkZ2V0U3RhdGUsIElkbGVEb3duV2lkZ2V0U3RhdGUsIEhvdmVyV2lkZ2V0U3RhdGUsIEhvdmVyUHJlc3NlZFdpZGdldFN0YXRlLCBQcmVzc2VkV2lkZ2V0U3RhdGUsIFByZXNzZWRPdXRXaWRnZXRTdGF0ZSwgRHJhZ1dpbmRvd1N0YXRlIH07XG4vLyBmcm9tIHN2Zy5qc1xuZXhwb3J0IHsgU1ZHLCBTdmcsIEcsIFJlY3QsIENvbnRhaW5lciwgVGV4dCwgQm94LCBDaXJjbGUsIE51bWJlciB9OyIsIi8vIGltcG9ydGluZyBsb2NhbCBjb2RlLCBjb2RlIHdlIGhhdmUgd3JpdHRlblxuaW1wb3J0IHtJZGxlVXBXaWRnZXRTdGF0ZSwgUHJlc3NlZFdpZGdldFN0YXRlIH0gZnJvbSBcIi4uL2NvcmUvdWlcIjtcbmltcG9ydCB7V2luZG93LCBXaWRnZXQsIFJvbGVUeXBlLCBFdmVudEFyZ3N9IGZyb20gXCIuLi9jb3JlL3VpXCI7XG4vLyBpbXBvcnRpbmcgY29kZSBmcm9tIFNWRy5qcyBsaWJyYXJ5XG5pbXBvcnQge1JlY3QsIFRleHQsIEJveH0gZnJvbSBcIi4uL2NvcmUvdWlcIjtcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgV2lkZ2V0e1xuICAgIHByaXZhdGUgX3JlY3Q6IFJlY3Q7XG4gICAgcHJpdmF0ZSBfdGV4dDogVGV4dDtcbiAgICBwcml2YXRlIF9pbnB1dDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2ZvbnRTaXplOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfdGV4dF95OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfdGV4dF94OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBkZWZhdWx0VGV4dDogc3RyaW5nPSBcIkNsaWNrIGhlcmVcIjtcbiAgICBwcml2YXRlIGRlZmF1bHRGb250U2l6ZTogbnVtYmVyID0gMTg7XG4gICAgcHJpdmF0ZSBkZWZhdWx0V2lkdGg6IG51bWJlciA9IDgwO1xuICAgIHByaXZhdGUgZGVmYXVsdEhlaWdodDogbnVtYmVyID0gMzA7XG4gICAgcHJpdmF0ZSBldmVudHJlY3Q6IFJlY3Q7XG4gICAgLy8gcHJpdmF0ZSBpc0NoZWNrZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6V2luZG93KXtcbiAgICAgICAgc3VwZXIocGFyZW50KTtcbiAgICAgICAgLy8gc2V0IGRlZmF1bHRzXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kZWZhdWx0SGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5kZWZhdWx0V2lkdGg7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5kZWZhdWx0VGV4dDtcbiAgICAgICAgdGhpcy5fZm9udFNpemUgPSB0aGlzLmRlZmF1bHRGb250U2l6ZTtcbiAgICAgICAgLy8gc2V0IEFyaWEgcm9sZVxuICAgICAgICB0aGlzLnJvbGUgPSBSb2xlVHlwZS5idXR0b247XG4gICAgICAgIC8vIHJlbmRlciB3aWRnZXRcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgb3Igc3RhcnRpbmcgc3RhdGVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXcgSWRsZVVwV2lkZ2V0U3RhdGUoKSk7XG4gICAgICAgIC8vIHByZXZlbnQgdGV4dCBzZWxlY3Rpb25cbiAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0IGZvbnRTaXplKHNpemU6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5fZm9udFNpemU9IHNpemU7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3NpdGlvblRleHQoKXtcbiAgICAgICAgbGV0IGJveDpCb3ggPSB0aGlzLl90ZXh0LmJib3goKTtcbiAgICAgICAgLy8gaW4gVFMsIHRoZSBwcmVwZW5kaW5nIHdpdGggKyBwZXJmb3JtcyBhIHR5cGUgY29udmVyc2lvbiBmcm9tIHN0cmluZyB0byBudW1iZXJcbiAgICAgICAgdGhpcy5fdGV4dF95ID0gKCt0aGlzLl9yZWN0LnkoKSArICgoK3RoaXMuX3JlY3QuaGVpZ2h0KCkvMikpIC0gKGJveC5oZWlnaHQvMikpO1xuICAgICAgICB0aGlzLl90ZXh0LngoK3RoaXMuX3JlY3QueCgpICsgNCk7XG4gICAgICAgIGlmICh0aGlzLl90ZXh0X3kgPiAwKXtcbiAgICAgICAgICAgIHRoaXMuX3RleHQueSh0aGlzLl90ZXh0X3kpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZ3JvdXAgPSAodGhpcy5wYXJlbnQgYXMgV2luZG93KS53aW5kb3cuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5fcmVjdCA9IHRoaXMuX2dyb3VwLnJlY3QodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLl9yZWN0LnN0cm9rZShcImJsYWNrXCIpO1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZ3JvdXAudGV4dCh0aGlzLl9pbnB1dCk7XG4gICAgICAgIC8vIFNldCB0aGUgb3V0ZXIgc3ZnIGVsZW1lbnQgXG4gICAgICAgIHRoaXMub3V0ZXJTdmcgPSB0aGlzLl9ncm91cDtcbiAgICAgICAgLy8gQWRkIGEgdHJhbnNwYXJlbnQgcmVjdCBvbiB0b3Agb2YgdGV4dCB0byBcbiAgICAgICAgLy8gcHJldmVudCBzZWxlY3Rpb24gY3Vyc29yIGFuZCB0byBoYW5kbGUgbW91c2UgZXZlbnRzXG4gICAgICAgIHRoaXMuZXZlbnRyZWN0ID0gdGhpcy5fZ3JvdXAucmVjdCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkub3BhY2l0eSgwKS5hdHRyKCdpZCcsIDApO1xuXG4gICAgICAgIC8vIHJlZ2lzdGVyIG9iamVjdHMgdGhhdCBzaG91bGQgcmVjZWl2ZSBldmVudCBub3RpZmljYXRpb25zLlxuICAgICAgICAvLyBmb3IgdGhpcyB3aWRnZXQsIHdlIHdhbnQgdG8ga25vdyB3aGVuIHRoZSBncm91cCBvciByZWN0IG9iamVjdHNcbiAgICAgICAgLy8gcmVjZWl2ZSBldmVudHNcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuZXZlbnRyZWN0KTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSB1cGRhdGUoKTogdm9pZCB7XG5cbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuX3RleHQgIT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuX3RleHQuZm9udCgnc2l6ZScsIHRoaXMuX2ZvbnRTaXplKTtcbiAgICAgICAgICAgIHRoaXMuX3RleHQudGV4dCh0aGlzLl9pbnB1dCk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uVGV4dCgpO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5fcmVjdCAhPSBudWxsKVxuICAgICAgICAgICAgLy8gdGhpcy5fcmVjdCA9IHRoaXMuX2dyb3VwLnJlY3QodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5fcmVjdC5maWxsKHRoaXMuYmFja2NvbG9yKTtcblxuICAgICAgICBpZih0aGlzLmhlaWdodCAhPSB0aGlzLmRlZmF1bHRIZWlnaHQpXG4gICAgICAgICAgICB0aGlzLl9yZWN0LndpZHRoKHRoaXMud2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5fcmVjdC5oZWlnaHQodGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5ldmVudHJlY3Qud2lkdGgodGhpcy53aWR0aCk7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cmVjdC5oZWlnaHQodGhpcy5oZWlnaHQpO1xuICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5ldmVudHJlY3QpO1xuICAgICAgICBzdXBlci51cGRhdGUoKTtcbiAgICB9XG4gICAgXG4gICAgcHJlc3NSZWxlYXNlU3RhdGUoKTogdm9pZHtcblxuICAgICAgICBpZiAodGhpcy5wcmV2aW91c1N0YXRlIGluc3RhbmNlb2YgUHJlc3NlZFdpZGdldFN0YXRlKVxuICAgICAgICAgICAgdGhpcy5yYWlzZShuZXcgRXZlbnRBcmdzKHRoaXMpKTtcbiAgICB9XG4gICAgaGVhZGVyU3RyaW5nOiBzdHJpbmcgPSAnQnV0dG9uIGhhcyBOT1QgYmVlbiBjbGlja2VkJztcbiAgICAvL1RPRE86IGltcGxlbWVudCB0aGUgb25DbGljayBldmVudCB1c2luZyBhIGNhbGxiYWNrIHBhc3NlZCBhcyBhIHBhcmFtZXRlclxuICAgIG9uQ2xpY2soY2FsbGJhY2s6IHsoZXZlbnQ/OmFueSk6IHZvaWR9KTp2b2lke1xuICAgICAgICB0aGlzLmF0dGFjaChjYWxsYmFjayk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcbiAgICB9XG4gICAgXG4gICAgLy9UT0RPOiBnaXZlIHRoZSBzdGF0ZXMgc29tZXRoaW5nIHRvIGRvISBVc2UgdGhlc2UgbWV0aG9kcyB0byBjb250cm9sIHRoZSB2aXN1YWwgYXBwZWFyYW5jZSBvZiB5b3VyXG4gICAgLy93aWRnZXRcbiAgICBcbiAgICBpZGxldXBTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYWNrY29sb3IgPSBcImdyYXlcIjtcbiAgICB9XG4gICAgaWRsZWRvd25TdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJZGxlIGRvd25cIik7XG5cbiAgICB9XG4gICAgcHJlc3NlZFN0YXRlKGNhbGxiYWNrPzogKGV2ZW50OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmVzc2VkXCIpO1xuICAgICAgICB0aGlzLmJ0bkxhYmVsID0gXCIrMVwiO1xuICAgIH1cbiAgICBob3ZlclN0YXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1vdXNlIGhvdmVyIHRyaWdnZXJlZFwiKTtcbiAgICAgICAgdGhpcy5iYWNrY29sb3IgPSAnc2lsdmVyJztcbiAgICB9XG4gICAgaG92ZXJQcmVzc2VkU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwcmVzc2Vkb3V0U3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBtb3ZlU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBrZXl1cFN0YXRlKGtleUV2ZW50PzogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICBzZXQgYnRuSGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdGdldCBidG5IZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGVpZ2h0O1xuXHR9XG5cbiAgICBzZXQgYnRuV2lkdGgod2lkdGg6IG51bWJlcikge1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0Z2V0IGJ0bldpZHRoKCkge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cbiAgICBzZXQgYnRuTGFiZWwobGFiZWw6IHN0cmluZykge1xuXHRcdHRoaXMuX2lucHV0ID0gbGFiZWw7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdGdldCBidG5MYWJlbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5faW5wdXQ7XG5cdH1cbn1cblxuZXhwb3J0IHtCdXR0b259IiwiLy8gaW1wb3J0aW5nIGxvY2FsIGNvZGUsIGNvZGUgd2UgaGF2ZSB3cml0dGVuXG5pbXBvcnQge0lkbGVVcFdpZGdldFN0YXRlLCBQcmVzc2VkV2lkZ2V0U3RhdGUgfSBmcm9tIFwiLi4vY29yZS91aVwiO1xuaW1wb3J0IHtXaW5kb3csIFdpZGdldCwgUm9sZVR5cGUsIEV2ZW50QXJnc30gZnJvbSBcIi4uL2NvcmUvdWlcIjtcbi8vIGltcG9ydGluZyBjb2RlIGZyb20gU1ZHLmpzIGxpYnJhcnlcbmltcG9ydCB7UmVjdCwgVGV4dCwgQm94fSBmcm9tIFwiLi4vY29yZS91aVwiO1xuXG5jbGFzcyBDaGVja0JveCBleHRlbmRzIFdpZGdldCB7XG4gICAgcHJpdmF0ZSBfcmVjdDogUmVjdDtcbiAgICBwcml2YXRlIF90ZXh0OiBUZXh0O1xuICAgIHByaXZhdGUgX2lucHV0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZm9udFNpemU6IG51bWJlcjtcbiAgICBwcml2YXRlIF90ZXh0X3k6IG51bWJlcjtcbiAgICBwcml2YXRlIF90ZXh0X3g6IG51bWJlcjtcbiAgICBwcml2YXRlIGRlZmF1bHRUZXh0OiBzdHJpbmcgPSBcIiBcIjtcbiAgICBwcml2YXRlIGRlZmF1bHRGb250U2l6ZTogbnVtYmVyID0gMTg7XG4gICAgcHJpdmF0ZSBkZWZhdWx0V2lkdGg6IG51bWJlciA9IDIxO1xuICAgIHByaXZhdGUgZGVmYXVsdEhlaWdodDogbnVtYmVyID0gMjI7XG4gICAgcHJpdmF0ZSBldmVudHJlY3Q6IFJlY3Q7XG4gICAgcHJpdmF0ZSBib3hUZXh0OiBUZXh0O1xuICAgIHByaXZhdGUgYm94RmlsbDogc3RyaW5nO1xuICAgIHByaXZhdGUgaXNDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6V2luZG93KXtcbiAgICAgICAgc3VwZXIocGFyZW50KTtcbiAgICAgICAgLy8gc2V0IGRlZmF1bHRzXG4gICAgICAgIHRoaXMuX2JhY2tjb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kZWZhdWx0SGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5kZWZhdWx0V2lkdGg7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5kZWZhdWx0VGV4dDtcbiAgICAgICAgdGhpcy5ib3hGaWxsID0gXCIgXCI7XG4gICAgICAgIHRoaXMuX2ZvbnRTaXplID0gdGhpcy5kZWZhdWx0Rm9udFNpemU7XG4gICAgICAgIC8vIHNldCBBcmlhIHJvbGVcbiAgICAgICAgdGhpcy5yb2xlID0gUm9sZVR5cGUuYnV0dG9uO1xuICAgICAgICAvLyByZW5kZXIgd2lkZ2V0XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIC8vIHNldCBkZWZhdWx0IG9yIHN0YXJ0aW5nIHN0YXRlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3IElkbGVVcFdpZGdldFN0YXRlKCkpO1xuICAgICAgICAvLyBwcmV2ZW50IHRleHQgc2VsZWN0aW9uXG4gICAgICAgIHRoaXMuc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgfVxuICAgICAgICBzZXQgZm9udFNpemUoc2l6ZTpudW1iZXIpe1xuICAgICAgICAgICAgdGhpcy5fZm9udFNpemU9IHNpemU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHByaXZhdGUgcG9zaXRpb25UZXh0KCl7XG4gICAgICAgICAgICBsZXQgYm94OkJveCA9IHRoaXMuX3RleHQuYmJveCgpO1xuICAgICAgICAgICAgLy8gaW4gVFMsIHRoZSBwcmVwZW5kaW5nIHdpdGggKyBwZXJmb3JtcyBhIHR5cGUgY29udmVyc2lvbiBmcm9tIHN0cmluZyB0byBudW1iZXJcbiAgICAgICAgICAgIHRoaXMuX3RleHRfeSA9ICgrdGhpcy5fcmVjdC55KCkgKyAoKCt0aGlzLl9yZWN0LmhlaWdodCgpLzIpKSAtIChib3guaGVpZ2h0LzIpKTtcbiAgICAgICAgICAgIHRoaXMuX3RleHQueCgrdGhpcy5fcmVjdC54KCkgKyA0ICk7XG4gICAgICAgICAgICBpZiAodGhpcy5fdGV4dF95ID4gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGV4dC55KHRoaXMuX3RleHRfeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIHBvc2l0aW9uRmlsbCgpe1xuICAgICAgICAgICAgbGV0IGJveDpCb3ggPSB0aGlzLmJveFRleHQuYmJveCgpO1xuICAgICAgICAgICAgdGhpcy5fdGV4dF95ID0gKCt0aGlzLl9yZWN0LnkoKSArICgoK3RoaXMuX3JlY3QuaGVpZ2h0KCkvMikpIC0gKGJveC5oZWlnaHQvMikpO1xuICAgICAgICAgICAgdGhpcy5ib3hUZXh0LngoK3RoaXMuX3JlY3QueCgpICsgNCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fdGV4dF95ID4gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGV4dC55KHRoaXMuX3RleHRfeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwID0gKHRoaXMucGFyZW50IGFzIFdpbmRvdykud2luZG93Lmdyb3VwKCk7XG4gICAgICAgICAgICB0aGlzLl9yZWN0ID0gdGhpcy5fZ3JvdXAucmVjdCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLl9yZWN0LnN0cm9rZShcImJsYWNrXCIpO1xuICAgICAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2dyb3VwLnRleHQodGhpcy5faW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5ib3hUZXh0ID0gdGhpcy5fZ3JvdXAudGV4dCh0aGlzLmJveEZpbGwpO1xuICAgICAgICAgICAgLy8gdGhpcy5yaWdodExhYmVsID0gdGhpcy5fZ3JvdXAudGV4dCh0aGlzLnJpZ2h0VGV4dCk7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIG91dGVyIHN2ZyBlbGVtZW50IFxuICAgICAgICAgICAgdGhpcy5vdXRlclN2ZyA9IHRoaXMuX2dyb3VwO1xuICAgICAgICAgICAgLy8gQWRkIGEgdHJhbnNwYXJlbnQgcmVjdCBvbiB0b3Agb2YgdGV4dCB0byBcbiAgICAgICAgICAgIC8vIHByZXZlbnQgc2VsZWN0aW9uIGN1cnNvciBhbmQgdG8gaGFuZGxlIG1vdXNlIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5ldmVudHJlY3QgPSB0aGlzLl9ncm91cC5yZWN0KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KS5vcGFjaXR5KDApLmF0dHIoJ2lkJywgMCk7XG4gICAgXG4gICAgICAgICAgICAvLyByZWdpc3RlciBvYmplY3RzIHRoYXQgc2hvdWxkIHJlY2VpdmUgZXZlbnQgbm90aWZpY2F0aW9ucy5cbiAgICAgICAgICAgIC8vIGZvciB0aGlzIHdpZGdldCwgd2Ugd2FudCB0byBrbm93IHdoZW4gdGhlIGdyb3VwIG9yIHJlY3Qgb2JqZWN0c1xuICAgICAgICAgICAgLy8gcmVjZWl2ZSBldmVudHNcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmV2ZW50cmVjdCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgb3ZlcnJpZGUgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICAgICAgLy8gaWYodGhpcy5ib3hGaWxsICE9IG51bGwpIFxuICAgICAgICAgICAgLy8gdGhpcy5ib3hUZXh0LnRleHQodGhpcy5ib3hGaWxsKTtcbiAgICAgICAgICAgIC8vIHRoaXMucG9zaXRpb25GaWxsKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMuX3RleHQgIT0gbnVsbClcbiAgICAgICAgICAgICAgICB0aGlzLl90ZXh0LmZvbnQoJ3NpemUnLCB0aGlzLl9mb250U2l6ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGV4dC50ZXh0KHRoaXMuX2lucHV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uVGV4dCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy5fcmVjdCAhPSBudWxsKVxuICAgICAgICAgICAgICAgIC8vIHRoaXMuX3JlY3QgPSB0aGlzLl9ncm91cC5yZWN0KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWN0LmZpbGwodGhpcy5iYWNrY29sb3IpO1xuICAgIFxuICAgICAgICAgICAgaWYodGhpcy5oZWlnaHQgIT0gdGhpcy5kZWZhdWx0SGVpZ2h0KVxuICAgICAgICAgICAgICAgIHRoaXMuX3JlY3Qud2lkdGgodGhpcy53aWR0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjdC5oZWlnaHQodGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRyZWN0LndpZHRoKHRoaXMud2lkdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRyZWN0LmhlaWdodCh0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5ldmVudHJlY3QpO1xuICAgICAgICAgICAgc3VwZXIudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHByZXNzUmVsZWFzZVN0YXRlKCk6IHZvaWR7XG4gICAgXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aW91c1N0YXRlIGluc3RhbmNlb2YgUHJlc3NlZFdpZGdldFN0YXRlKVxuICAgICAgICAgICAgICAgIHRoaXMucmFpc2UobmV3IEV2ZW50QXJncyh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVyU3RyaW5nOiBzdHJpbmcgPSAnQnV0dG9uIGhhcyBOT1QgYmVlbiBjbGlja2VkJztcbiAgICAgICAgLy9UT0RPOiBpbXBsZW1lbnQgdGhlIG9uQ2xpY2sgZXZlbnQgdXNpbmcgYSBjYWxsYmFjayBwYXNzZWQgYXMgYSBwYXJhbWV0ZXJcbiAgICAgICAgb25DbGljayhjYWxsYmFjazogeyhldmVudD86YW55KTogdm9pZH0pOnZvaWR7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaChjYWxsYmFjayk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgICAgIC8vIGlmKHRoaXMuaXNDaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmNoZWNrYm94RmlsbCA9IFwiIFwiO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5idG5MYWJlbCA9IFwibm90IGNoZWNrZWRcIjtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuY2hlY2tib3hGaWxsID0gXCLinJNcIjtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5idG5MYWJlbCA9IFwiY2hlY2tlZFwiO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL1RPRE86IGdpdmUgdGhlIHN0YXRlcyBzb21ldGhpbmcgdG8gZG8hIFVzZSB0aGVzZSBtZXRob2RzIHRvIGNvbnRyb2wgdGhlIHZpc3VhbCBhcHBlYXJhbmNlIG9mIHlvdXJcbiAgICAgICAgLy93aWRnZXRcbiAgICAgICAgXG4gICAgICAgIGlkbGV1cFN0YXRlKCk6IHZvaWQge1xuICAgICAgICAgICAgdGhpcy5iYWNrY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWRsZWRvd25TdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSWRsZSBkb3duXCIpO1xuICAgICAgICB9XG4gICAgICAgIHByZXNzZWRTdGF0ZShjYWxsYmFjaz86IChldmVudDogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByZXNzZWRcIik7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaChjYWxsYmFjayk7XG4gICAgICAgICAgICAvLyB0aGlzLmJhY2tjb2xvciA9IFwiZ3JheVwiO1xuICAgICAgICAgICAgLy8gdGhpcy5idG5MYWJlbCA9IFwiKzFcIjtcbiAgICAgICAgfVxuICAgICAgICBob3ZlclN0YXRlKCk6IHZvaWQge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb3VzZSBob3ZlciB0cmlnZ2VyZWRcIik7XG4gICAgICAgICAgICAvLyB0aGlzLmJhY2tjb2xvciA9ICdzaWx2ZXInO1xuICAgICAgICB9XG4gICAgICAgIGhvdmVyUHJlc3NlZFN0YXRlKCk6IHZvaWQge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcHJlc3NlZG91dFN0YXRlKCk6IHZvaWQge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgbW92ZVN0YXRlKCk6IHZvaWQge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAga2V5dXBTdGF0ZShrZXlFdmVudD86IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHNldCBidG5IZWlnaHQoaGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBnZXQgYnRuSGVpZ2h0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHNldCBidG5XaWR0aCh3aWR0aDogbnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGdldCBidG5XaWR0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpZHRoO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHNldCBidG5MYWJlbChsYWJlbDogc3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dCA9IGxhYmVsO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBnZXQgYnRuTGFiZWwoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgY2hlY2tMYWJlbCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuX2lucHV0ID0gdGV4dDtcbiAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBnZXQgY2hlY2tMYWJlbCgpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLl9pbnB1dDtcbiAgICAgICAgLy8gfVxuICAgICAgICBzZXQgY2hlY2tib3hGaWxsKHRleHQ6IHN0cmluZykgeyBcbiAgICAgICAgICAgIHRoaXMuYm94RmlsbCA9IHRleHQ7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0IGNoZWNrYm94RmlsbCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJveEZpbGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZXhwb3J0IHtDaGVja0JveH0iLCIvLyBpbXBvcnRpbmcgbG9jYWwgY29kZSwgY29kZSB3ZSBoYXZlIHdyaXR0ZW5cbmltcG9ydCB7V2luZG93LCBXaWRnZXQsIFJvbGVUeXBlLCBJZGxlVXBXaWRnZXRTdGF0ZX0gZnJvbSBcIi4uL2NvcmUvdWlcIjtcbi8vIGltcG9ydGluZyBjb2RlIGZyb20gU1ZHLmpzIGxpYnJhcnlcbmltcG9ydCB7UmVjdCwgVGV4dCwgQm94fSBmcm9tIFwiLi4vY29yZS91aVwiO1xuXG5jbGFzcyBIZWFkaW5nIGV4dGVuZHMgV2lkZ2V0e1xuICAgIHByaXZhdGUgX3JlY3Q6IFJlY3Q7XG4gICAgcHJpdmF0ZSBfdGV4dDogVGV4dDtcbiAgICBwcml2YXRlIF9pbnB1dDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2ZvbnRTaXplOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfdGV4dF95OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfdGV4dF94OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBkZWZhdWx0VGV4dDogc3RyaW5nPSBcIkhlYWRpbmdcIjtcbiAgICBwcml2YXRlIGRlZmF1bHRGb250U2l6ZTogbnVtYmVyID0gMTg7XG4gICAgcHJpdmF0ZSBkZWZhdWx0V2lkdGg6IG51bWJlciA9IDgwO1xuICAgIHByaXZhdGUgZGVmYXVsdEhlaWdodDogbnVtYmVyID0gMzA7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6V2luZG93KXtcbiAgICAgICAgc3VwZXIocGFyZW50KTtcbiAgICAgICAgLy8gc2V0IGRlZmF1bHRzXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kZWZhdWx0SGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5kZWZhdWx0V2lkdGg7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5kZWZhdWx0VGV4dDtcbiAgICAgICAgdGhpcy5fZm9udFNpemUgPSB0aGlzLmRlZmF1bHRGb250U2l6ZTtcbiAgICAgICAgLyogYXJpYSAqL1xuICAgICAgICB0aGlzLnJvbGUgPSBSb2xlVHlwZS5oZWFkaW5nO1xuICAgICAgICAvLyByZW5kZXIgd2lkZ2V0XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIC8vIHNldCBkZWZhdWx0IG9yIHN0YXJ0aW5nIHN0YXRlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3IElkbGVVcFdpZGdldFN0YXRlKCkpO1xuICAgICAgICAvLyBwcmV2ZW50IHRleHQgc2VsZWN0aW9uXG4gICAgICAgIHRoaXMuc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhY2tjb2xvciA9IFwid2hpdGVcIjtcbiAgICB9XG5cbiAgICBzZXQgdGV4dCh0ZXh0OnN0cmluZyl7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGV4dDtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBnZXQgdGV4dCgpOnN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0O1xuICAgIH1cblxuICAgIHNldCBmb250U2l6ZShzaXplOm51bWJlcil7XG4gICAgICAgIHRoaXMuX2ZvbnRTaXplPSBzaXplO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcG9zaXRpb25UZXh0KCl7XG4gICAgICAgIGxldCBib3g6Qm94ID0gdGhpcy5fdGV4dC5iYm94KCk7XG4gICAgICAgIC8vIGluIFRTLCB0aGUgcHJlcGVuZGluZyB3aXRoICsgcGVyZm9ybXMgYSB0eXBlIGNvbnZlcnNpb24gZnJvbSBzdHJpbmcgdG8gbnVtYmVyXG4gICAgICAgIHRoaXMuX3RleHRfeSA9ICgrdGhpcy5fcmVjdC55KCkgKyAoKCt0aGlzLl9yZWN0LmhlaWdodCgpLzIpKSAtIChib3guaGVpZ2h0LzIpKTtcbiAgICAgICAgdGhpcy5fdGV4dC54KCt0aGlzLl9yZWN0LngoKSArIDQpO1xuICAgICAgICBpZiAodGhpcy5fdGV4dF95ID4gMCl7XG4gICAgICAgICAgICB0aGlzLl90ZXh0LnkodGhpcy5fdGV4dF95KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlc2l6ZSBjb250YWluZXIgcmVjdCB0byBtYXRjaCBmb250U2l6ZVxuICAgICAgICB0aGlzLl9yZWN0LndpZHRoKGJveC53aWR0aCk7XG4gICAgICAgIHRoaXMuX3JlY3QuaGVpZ2h0KGJveC5oZWlnaHQpO1xuICAgIH1cblxuICAgIG1vdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5fZ3JvdXAgIT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwLm1vdmUoeCx5KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ncm91cCA9ICh0aGlzLnBhcmVudCBhcyBXaW5kb3cpLndpbmRvdy5ncm91cCgpO1xuICAgICAgICB0aGlzLl9yZWN0ID0gdGhpcy5fZ3JvdXAucmVjdCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9ncm91cC50ZXh0KHRoaXMuX2lucHV0KTtcblxuICAgICAgICB0aGlzLm91dGVyU3ZnID0gdGhpcy5fZ3JvdXA7XG4gICAgICAgIC8vIHJlZ2lzdGVyIG9iamVjdHMgdGhhdCBzaG91bGQgcmVjZWl2ZSBldmVudCBub3RpZmljYXRpb25zLlxuICAgICAgICAvLyBmb3IgdGhpcyB3aWRnZXQsIHdlIHdhbnQgdG8ga25vdyB3aGVuIHRoZSBncm91cCBvciByZWN0IG9iamVjdHNcbiAgICAgICAgLy8gcmVjZWl2ZSBldmVudHNcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuX2dyb3VwKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuX3JlY3QpO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5fdGV4dCAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5fdGV4dC5mb250KCdzaXplJywgdGhpcy5fZm9udFNpemUpO1xuICAgICAgICAgICAgdGhpcy5fdGV4dC50ZXh0KHRoaXMuX2lucHV0KTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25UZXh0KCk7XG5cbiAgICAgICAgaWYodGhpcy5fcmVjdCAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5fcmVjdC5maWxsKHRoaXMuYmFja2NvbG9yKTtcbiAgICAgICAgXG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGlkbGV1cFN0YXRlKCk6IHZvaWQge1xuICAgIH1cbiAgICBpZGxlZG93blN0YXRlKCk6IHZvaWQge1xuICAgIH1cbiAgICBwcmVzc2VkU3RhdGUoKTogdm9pZCB7XG4gICAgfVxuICAgIHByZXNzUmVsZWFzZVN0YXRlKCk6IHZvaWQge1xuICAgIH1cbiAgICBob3ZlclN0YXRlKCk6IHZvaWQge1xuICAgIH1cbiAgICBob3ZlclByZXNzZWRTdGF0ZSgpOiB2b2lkIHtcbiAgICB9XG4gICAgcHJlc3NlZG91dFN0YXRlKCk6IHZvaWQge1xuICAgIH1cbiAgICBtb3ZlU3RhdGUoKTogdm9pZCB7IH1cbiAgICBrZXl1cFN0YXRlKCk6IHZvaWQgeyB9XG5cbn0gICBcblxuZXhwb3J0IHtIZWFkaW5nfSIsIi8vIGltcG9ydGluZyBsb2NhbCBjb2RlLCBjb2RlIHdlIGhhdmUgd3JpdHRlblxuaW1wb3J0IHtJZGxlVXBXaWRnZXRTdGF0ZSwgUHJlc3NlZFdpZGdldFN0YXRlIH0gZnJvbSBcIi4uL2NvcmUvdWlcIjtcbmltcG9ydCB7V2luZG93LCBXaWRnZXQsIFJvbGVUeXBlLCBFdmVudEFyZ3N9IGZyb20gXCIuLi9jb3JlL3VpXCI7XG4vLyBpbXBvcnRpbmcgY29kZSBmcm9tIFNWRy5qcyBsaWJyYXJ5XG5pbXBvcnQge1JlY3QsIFRleHQsIEJveH0gZnJvbSBcIi4uL2NvcmUvdWlcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL2J1dHRvblwiO1xuXG5jbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIFdpZGdldHtcbiAgICBwcml2YXRlIF9yZWN0OiBSZWN0O1xuICAgIHByaXZhdGUgX3RleHQ6IFRleHQ7XG4gICAgcHJpdmF0ZSBfaW5wdXQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9mb250U2l6ZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX3RleHRfeTogbnVtYmVyO1xuICAgIHByaXZhdGUgX3RleHRfeDogbnVtYmVyO1xuICAgIHByaXZhdGUgZGVmYXVsdFRleHQ6IHN0cmluZz0gXCJcIjtcbiAgICBwcml2YXRlIGRlZmF1bHRGb250U2l6ZTogbnVtYmVyID0gMTg7XG4gICAgcHJpdmF0ZSBkZWZhdWx0V2lkdGg6IG51bWJlciA9IDIxO1xuICAgIHByaXZhdGUgZGVmYXVsdEhlaWdodDogbnVtYmVyID0gMjE7XG4gICAgcHJpdmF0ZSBldmVudHJlY3Q6IFJlY3Q7XG4gICAgcHJpdmF0ZSByYWRpb0FycmF5OiBBcnJheTxSYWRpb0J1dHRvbj47XG4gICAgLy8gcHJpdmF0ZSBpc0NoZWNrZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6V2luZG93KXtcbiAgICAgICAgc3VwZXIocGFyZW50KTtcbiAgICAgICAgLy8gc2V0IGRlZmF1bHRzXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kZWZhdWx0SGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5kZWZhdWx0V2lkdGg7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5kZWZhdWx0VGV4dDtcbiAgICAgICAgdGhpcy5fZm9udFNpemUgPSB0aGlzLmRlZmF1bHRGb250U2l6ZTtcbiAgICAgICAgLy8gc2V0IEFyaWEgcm9sZVxuICAgICAgICB0aGlzLnJvbGUgPSBSb2xlVHlwZS5idXR0b247XG4gICAgICAgIC8vIHJlbmRlciB3aWRnZXRcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgb3Igc3RhcnRpbmcgc3RhdGVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXcgSWRsZVVwV2lkZ2V0U3RhdGUoKSk7XG4gICAgICAgIC8vIHByZXZlbnQgdGV4dCBzZWxlY3Rpb25cbiAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0IGZvbnRTaXplKHNpemU6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5fZm9udFNpemU9IHNpemU7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3NpdGlvblRleHQoKXtcbiAgICAgICAgbGV0IGJveDpCb3ggPSB0aGlzLl90ZXh0LmJib3goKTtcbiAgICAgICAgLy8gaW4gVFMsIHRoZSBwcmVwZW5kaW5nIHdpdGggKyBwZXJmb3JtcyBhIHR5cGUgY29udmVyc2lvbiBmcm9tIHN0cmluZyB0byBudW1iZXJcbiAgICAgICAgdGhpcy5fdGV4dF95ID0gKCt0aGlzLl9yZWN0LnkoKSArICgoK3RoaXMuX3JlY3QuaGVpZ2h0KCkvMikpIC0gKGJveC5oZWlnaHQvMikpO1xuICAgICAgICB0aGlzLl90ZXh0LngoK3RoaXMuX3JlY3QueCgpICsgNCk7XG4gICAgICAgIGlmICh0aGlzLl90ZXh0X3kgPiAwKXtcbiAgICAgICAgICAgIHRoaXMuX3RleHQueSh0aGlzLl90ZXh0X3kpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBhZGRSYWRpbygpe1xuICAgICAgICBsZXQgbmV3UmFkaW86UmVjdCA9IHRoaXMuX2dyb3VwLnJlY3QodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLnJhZGl1cygzMCk7XG4gICAgICAgIG5ld1JhZGlvLm1vdmUoNTAsMjAwKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dyb3VwID0gKHRoaXMucGFyZW50IGFzIFdpbmRvdykud2luZG93Lmdyb3VwKCk7XG4gICAgICAgIHRoaXMuX3JlY3QgPSB0aGlzLl9ncm91cC5yZWN0KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KS5yYWRpdXMoMzApO1xuICAgICAgICB0aGlzLl9yZWN0LmZpbGwoXCJ3aGl0ZVwiKTtcbiAgICAgICAgdGhpcy5fcmVjdC5zdHJva2UoXCJibGFja1wiKTtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2dyb3VwLnRleHQodGhpcy5faW5wdXQpO1xuICAgICAgICAvLyBTZXQgdGhlIG91dGVyIHN2ZyBlbGVtZW50IFxuICAgICAgICB0aGlzLm91dGVyU3ZnID0gdGhpcy5fZ3JvdXA7XG4gICAgICAgIC8vIEFkZCBhIHRyYW5zcGFyZW50IHJlY3Qgb24gdG9wIG9mIHRleHQgdG8gXG4gICAgICAgIC8vIHByZXZlbnQgc2VsZWN0aW9uIGN1cnNvciBhbmQgdG8gaGFuZGxlIG1vdXNlIGV2ZW50c1xuICAgICAgICB0aGlzLmV2ZW50cmVjdCA9IHRoaXMuX2dyb3VwLnJlY3QodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLm9wYWNpdHkoMCkuYXR0cignaWQnLCAwKTtcblxuICAgICAgICAvLyByZWdpc3RlciBvYmplY3RzIHRoYXQgc2hvdWxkIHJlY2VpdmUgZXZlbnQgbm90aWZpY2F0aW9ucy5cbiAgICAgICAgLy8gZm9yIHRoaXMgd2lkZ2V0LCB3ZSB3YW50IHRvIGtub3cgd2hlbiB0aGUgZ3JvdXAgb3IgcmVjdCBvYmplY3RzXG4gICAgICAgIC8vIHJlY2VpdmUgZXZlbnRzXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmV2ZW50cmVjdCk7XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgdXBkYXRlKCk6IHZvaWQge1xuXG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLl90ZXh0ICE9IG51bGwpXG4gICAgICAgICAgICB0aGlzLl90ZXh0LmZvbnQoJ3NpemUnLCB0aGlzLl9mb250U2l6ZSk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0LnRleHQodGhpcy5faW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblRleHQoKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuX3JlY3QgIT0gbnVsbClcbiAgICAgICAgICAgIC8vIHRoaXMuX3JlY3QgPSB0aGlzLl9ncm91cC5yZWN0KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuX3JlY3QuZmlsbCh0aGlzLmJhY2tjb2xvcik7XG5cbiAgICAgICAgaWYodGhpcy5oZWlnaHQgIT0gdGhpcy5kZWZhdWx0SGVpZ2h0KVxuICAgICAgICAgICAgdGhpcy5fcmVjdC53aWR0aCh0aGlzLndpZHRoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlY3QuaGVpZ2h0KHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRyZWN0LndpZHRoKHRoaXMud2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5ldmVudHJlY3QuaGVpZ2h0KHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuZXZlbnRyZWN0KTtcbiAgICAgICAgc3VwZXIudXBkYXRlKCk7XG4gICAgfVxuICAgIFxuICAgIHByZXNzUmVsZWFzZVN0YXRlKCk6IHZvaWR7XG5cbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNTdGF0ZSBpbnN0YW5jZW9mIFByZXNzZWRXaWRnZXRTdGF0ZSlcbiAgICAgICAgICAgIHRoaXMucmFpc2UobmV3IEV2ZW50QXJncyh0aGlzKSk7XG4gICAgfVxuICAgIGhlYWRlclN0cmluZzogc3RyaW5nID0gJ0J1dHRvbiBoYXMgTk9UIGJlZW4gY2xpY2tlZCc7XG4gICAgLy9UT0RPOiBpbXBsZW1lbnQgdGhlIG9uQ2xpY2sgZXZlbnQgdXNpbmcgYSBjYWxsYmFjayBwYXNzZWQgYXMgYSBwYXJhbWV0ZXJcbiAgICBvbkNsaWNrKGNhbGxiYWNrOiB7KGV2ZW50PzphbnkpOiB2b2lkfSk6dm9pZHtcbiAgICAgICAgdGhpcy5hdHRhY2goY2FsbGJhY2spO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gICAgfVxuICAgIFxuICAgIC8vVE9ETzogZ2l2ZSB0aGUgc3RhdGVzIHNvbWV0aGluZyB0byBkbyEgVXNlIHRoZXNlIG1ldGhvZHMgdG8gY29udHJvbCB0aGUgdmlzdWFsIGFwcGVhcmFuY2Ugb2YgeW91clxuICAgIC8vd2lkZ2V0XG4gICAgXG4gICAgaWRsZXVwU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFja2NvbG9yID0gJ3doaXRlJztcbiAgICB9XG4gICAgaWRsZWRvd25TdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJZGxlIGRvd25cIik7XG5cbiAgICB9XG4gICAgcHJlc3NlZFN0YXRlKGNhbGxiYWNrPzogKGV2ZW50OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmVzc2VkXCIpO1xuICAgICAgICB0aGlzLmJhY2tjb2xvciA9ICdzaWx2ZXInO1xuICAgIH1cbiAgICBob3ZlclN0YXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1vdXNlIGhvdmVyIHRyaWdnZXJlZFwiKTtcbiAgICAgICAgdGhpcy5iYWNrY29sb3IgPSAnc2lsdmVyJztcbiAgICB9XG4gICAgaG92ZXJQcmVzc2VkU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwcmVzc2Vkb3V0U3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBtb3ZlU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBrZXl1cFN0YXRlKGtleUV2ZW50PzogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICBzZXQgYnRuSGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdGdldCBidG5IZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGVpZ2h0O1xuXHR9XG5cbiAgICBzZXQgYnRuV2lkdGgod2lkdGg6IG51bWJlcikge1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0Z2V0IGJ0bldpZHRoKCkge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cbiAgICBzZXQgYnRuTGFiZWwobGFiZWw6IHN0cmluZykge1xuXHRcdHRoaXMuX2lucHV0ID0gbGFiZWw7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdGdldCBidG5MYWJlbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5faW5wdXQ7XG5cdH1cbn1cblxuZXhwb3J0IHtSYWRpb0J1dHRvbn0iLCIvLyBpbXBvcnRpbmcgbG9jYWwgY29kZSwgY29kZSB3ZSBoYXZlIHdyaXR0ZW5cbmltcG9ydCB7SWRsZVVwV2lkZ2V0U3RhdGUsIFByZXNzZWRXaWRnZXRTdGF0ZSB9IGZyb20gXCIuLi9jb3JlL3VpXCI7XG5pbXBvcnQge1dpbmRvdywgV2lkZ2V0LCBSb2xlVHlwZSwgRXZlbnRBcmdzfSBmcm9tIFwiLi4vY29yZS91aVwiO1xuLy8gaW1wb3J0aW5nIGNvZGUgZnJvbSBTVkcuanMgbGlicmFyeVxuaW1wb3J0IHtSZWN0LCBUZXh0LCBCb3h9IGZyb20gXCIuLi9jb3JlL3VpXCI7XG5cbmNsYXNzIFNjcm9sbEJhciBleHRlbmRzIFdpZGdldHtcbiAgICBwcml2YXRlIF9yZWN0OiBSZWN0O1xuICAgIHByaXZhdGUgX3RleHQ6IFRleHQ7XG4gICAgcHJpdmF0ZSBfaW5wdXQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9mb250U2l6ZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX3RleHRfeTogbnVtYmVyO1xuICAgIHByaXZhdGUgX3RleHRfeDogbnVtYmVyO1xuICAgIHByaXZhdGUgZGVmYXVsdFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBkZWZhdWx0Rm9udFNpemU6IG51bWJlciA9IDE4O1xuICAgIHByaXZhdGUgZGVmYXVsdFdpZHRoOiBudW1iZXIgPSAxOTtcbiAgICBwcml2YXRlIGRlZmF1bHRIZWlnaHQ6IG51bWJlciA9IDE1MDtcbiAgICBwcml2YXRlIGV2ZW50cmVjdDogUmVjdDtcbiAgICBwcml2YXRlIHRodW1iOiBSZWN0O1xuICAgIC8vIHByaXZhdGUgaXNDaGVja2VkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50OldpbmRvdyl7XG4gICAgICAgIHN1cGVyKHBhcmVudCk7XG4gICAgICAgIC8vIHNldCBkZWZhdWx0c1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZGVmYXVsdEhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZGVmYXVsdFdpZHRoO1xuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuZGVmYXVsdFRleHQ7XG4gICAgICAgIHRoaXMuX2ZvbnRTaXplID0gdGhpcy5kZWZhdWx0Rm9udFNpemU7XG4gICAgICAgIC8vIHNldCBBcmlhIHJvbGVcbiAgICAgICAgdGhpcy5yb2xlID0gUm9sZVR5cGUuYnV0dG9uO1xuICAgICAgICAvLyByZW5kZXIgd2lkZ2V0XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIC8vIHNldCBkZWZhdWx0IG9yIHN0YXJ0aW5nIHN0YXRlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3IElkbGVVcFdpZGdldFN0YXRlKCkpO1xuICAgICAgICAvLyBwcmV2ZW50IHRleHQgc2VsZWN0aW9uXG4gICAgICAgIHRoaXMuc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldCBmb250U2l6ZShzaXplOm51bWJlcil7XG4gICAgICAgIHRoaXMuX2ZvbnRTaXplPSBzaXplO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcG9zaXRpb25UZXh0KCl7XG4gICAgICAgIGxldCBib3g6Qm94ID0gdGhpcy5fdGV4dC5iYm94KCk7XG4gICAgICAgIC8vIGluIFRTLCB0aGUgcHJlcGVuZGluZyB3aXRoICsgcGVyZm9ybXMgYSB0eXBlIGNvbnZlcnNpb24gZnJvbSBzdHJpbmcgdG8gbnVtYmVyXG4gICAgICAgIHRoaXMuX3RleHRfeSA9ICgrdGhpcy5fcmVjdC55KCkpO1xuICAgICAgICB0aGlzLl90ZXh0LngoK3RoaXMuX3JlY3QueCgpICsgNCk7XG4gICAgICAgIGlmICh0aGlzLl90ZXh0X3kgPiAwKXtcbiAgICAgICAgICAgIHRoaXMuX3RleHQueSh0aGlzLl90ZXh0X3kpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZ3JvdXAgPSAodGhpcy5wYXJlbnQgYXMgV2luZG93KS53aW5kb3cuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5fcmVjdCA9IHRoaXMuX2dyb3VwLnJlY3QodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnRodW1iID0gdGhpcy5fZ3JvdXAucmVjdCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodC8zKTtcbiAgICAgICAgdGhpcy5fcmVjdC5zdHJva2UoXCJibGFja1wiKTtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2dyb3VwLnRleHQodGhpcy5faW5wdXQpO1xuICAgICAgICAvLyBTZXQgdGhlIG91dGVyIHN2ZyBlbGVtZW50IFxuICAgICAgICB0aGlzLm91dGVyU3ZnID0gdGhpcy5fZ3JvdXA7XG4gICAgICAgIC8vIEFkZCBhIHRyYW5zcGFyZW50IHJlY3Qgb24gdG9wIG9mIHRleHQgdG8gXG4gICAgICAgIC8vIHByZXZlbnQgc2VsZWN0aW9uIGN1cnNvciBhbmQgdG8gaGFuZGxlIG1vdXNlIGV2ZW50c1xuICAgICAgICB0aGlzLmV2ZW50cmVjdCA9IHRoaXMuX2dyb3VwLnJlY3QodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLm9wYWNpdHkoMCkuYXR0cignaWQnLCAwKTtcblxuICAgICAgICAvLyByZWdpc3RlciBvYmplY3RzIHRoYXQgc2hvdWxkIHJlY2VpdmUgZXZlbnQgbm90aWZpY2F0aW9ucy5cbiAgICAgICAgLy8gZm9yIHRoaXMgd2lkZ2V0LCB3ZSB3YW50IHRvIGtub3cgd2hlbiB0aGUgZ3JvdXAgb3IgcmVjdCBvYmplY3RzXG4gICAgICAgIC8vIHJlY2VpdmUgZXZlbnRzXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmV2ZW50cmVjdCk7XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgdXBkYXRlKCk6IHZvaWQge1xuXG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLl90ZXh0ICE9IG51bGwpXG4gICAgICAgICAgICB0aGlzLl90ZXh0LmZvbnQoJ3NpemUnLCB0aGlzLl9mb250U2l6ZSk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0LnRleHQodGhpcy5faW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblRleHQoKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuX3JlY3QgIT0gbnVsbClcbiAgICAgICAgICAgIC8vIHRoaXMuX3JlY3QgPSB0aGlzLl9ncm91cC5yZWN0KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuX3JlY3QuZmlsbCh0aGlzLmJhY2tjb2xvcik7XG4gICAgICAgICAgICB0aGlzLnRodW1iLmZpbGwoXCJncmF5XCIpO1xuXG4gICAgICAgIGlmKHRoaXMuaGVpZ2h0ICE9IHRoaXMuZGVmYXVsdEhlaWdodClcbiAgICAgICAgICAgIHRoaXMuX3JlY3Qud2lkdGgodGhpcy53aWR0aCk7XG4gICAgICAgICAgICB0aGlzLl9yZWN0LmhlaWdodCh0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cmVjdC53aWR0aCh0aGlzLndpZHRoKTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRyZWN0LmhlaWdodCh0aGlzLmhlaWdodCk7XG4gICAgICAgIC8vIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmV2ZW50cmVjdCk7XG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBcbiAgICBwcmVzc1JlbGVhc2VTdGF0ZSgpOiB2b2lke1xuXG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzU3RhdGUgaW5zdGFuY2VvZiBQcmVzc2VkV2lkZ2V0U3RhdGUpXG4gICAgICAgICAgICB0aGlzLnJhaXNlKG5ldyBFdmVudEFyZ3ModGhpcykpO1xuICAgIH1cbiAgICBoZWFkZXJTdHJpbmc6IHN0cmluZyA9ICdCdXR0b24gaGFzIE5PVCBiZWVuIGNsaWNrZWQnO1xuICAgIC8vVE9ETzogaW1wbGVtZW50IHRoZSBvbkNsaWNrIGV2ZW50IHVzaW5nIGEgY2FsbGJhY2sgcGFzc2VkIGFzIGEgcGFyYW1ldGVyXG4gICAgb25DbGljayhjYWxsYmFjazogeyhldmVudD86YW55KTogdm9pZH0pOnZvaWR7XG4gICAgICAgIHRoaXMuYXR0YWNoKGNhbGxiYWNrKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xuICAgIH1cbiAgICBcbiAgICAvL1RPRE86IGdpdmUgdGhlIHN0YXRlcyBzb21ldGhpbmcgdG8gZG8hIFVzZSB0aGVzZSBtZXRob2RzIHRvIGNvbnRyb2wgdGhlIHZpc3VhbCBhcHBlYXJhbmNlIG9mIHlvdXJcbiAgICAvL3dpZGdldFxuICAgIFxuICAgIGlkbGV1cFN0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhY2tjb2xvciA9IFwid2hpdGVcIjtcbiAgICB9XG4gICAgaWRsZWRvd25TdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJZGxlIGRvd25cIik7XG5cbiAgICB9XG4gICAgcHJlc3NlZFN0YXRlKGNhbGxiYWNrPzogKGV2ZW50OiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmVzc2VkXCIpO1xuICAgIH1cbiAgICBob3ZlclN0YXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1vdXNlIGhvdmVyIHRyaWdnZXJlZFwiKTtcblxuICAgIH1cbiAgICBob3ZlclByZXNzZWRTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHByZXNzZWRvdXRTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIG1vdmVTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIGtleXVwU3RhdGUoa2V5RXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuICAgIHNldCBidG5IZWlnaHQoaGVpZ2h0OiBudW1iZXIpIHtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0Z2V0IGJ0bkhlaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy5oZWlnaHQ7XG5cdH1cblxuICAgIHNldCBidG5XaWR0aCh3aWR0aDogbnVtYmVyKSB7XG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdH1cblxuXHRnZXQgYnRuV2lkdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdH1cblxuICAgIHNldCBidG5MYWJlbChsYWJlbDogc3RyaW5nKSB7XG5cdFx0dGhpcy5faW5wdXQgPSBsYWJlbDtcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0Z2V0IGJ0bkxhYmVsKCkge1xuXHRcdHJldHVybiB0aGlzLl9pbnB1dDtcblx0fVxufVxuXG5leHBvcnQge1Njcm9sbEJhcn0iLCIvLyBpbXBvcnRpbmcgbG9jYWwgY29kZSwgY29kZSB3ZSBoYXZlIHdyaXR0ZW5cbmltcG9ydCB7SWRsZVVwV2lkZ2V0U3RhdGUsIFByZXNzZWRXaWRnZXRTdGF0ZSB9IGZyb20gXCIuLi9jb3JlL3VpXCI7XG5pbXBvcnQge1dpbmRvdywgV2lkZ2V0LCBSb2xlVHlwZSwgRXZlbnRBcmdzfSBmcm9tIFwiLi4vY29yZS91aVwiO1xuLy8gaW1wb3J0aW5nIGNvZGUgZnJvbSBTVkcuanMgbGlicmFyeVxuaW1wb3J0IHtSZWN0LCBUZXh0LCBCb3h9IGZyb20gXCIuLi9jb3JlL3VpXCI7XG5cbmNsYXNzIFRleHRCb3ggZXh0ZW5kcyBXaWRnZXR7XG4gICAgcHJpdmF0ZSBfcmVjdDogUmVjdDtcbiAgICBwcml2YXRlIF90ZXh0OiBUZXh0O1xuICAgIHByaXZhdGUgX2lucHV0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZm9udFNpemU6IG51bWJlcjtcbiAgICBwcml2YXRlIF90ZXh0X3k6IG51bWJlcjtcbiAgICBwcml2YXRlIF90ZXh0X3g6IG51bWJlcjtcbiAgICBwcml2YXRlIGRlZmF1bHRUZXh0OiBzdHJpbmcgPSBcInxcIjtcbiAgICBwcml2YXRlIGRlZmF1bHRGb250U2l6ZTogbnVtYmVyID0gMTg7XG4gICAgcHJpdmF0ZSBkZWZhdWx0V2lkdGg6IG51bWJlciA9IDMwMDtcbiAgICBwcml2YXRlIGRlZmF1bHRIZWlnaHQ6IG51bWJlciA9IDE1MDtcbiAgICBwcml2YXRlIGV2ZW50cmVjdDogUmVjdDtcbiAgICAvLyBwcml2YXRlIGlzQ2hlY2tlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDpXaW5kb3cpe1xuICAgICAgICBzdXBlcihwYXJlbnQpO1xuICAgICAgICAvLyBzZXQgZGVmYXVsdHNcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmRlZmF1bHRIZWlnaHQ7XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmRlZmF1bHRXaWR0aDtcbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLmRlZmF1bHRUZXh0O1xuICAgICAgICB0aGlzLl9mb250U2l6ZSA9IHRoaXMuZGVmYXVsdEZvbnRTaXplO1xuICAgICAgICAvLyBzZXQgQXJpYSByb2xlXG4gICAgICAgIHRoaXMucm9sZSA9IFJvbGVUeXBlLmJ1dHRvbjtcbiAgICAgICAgLy8gcmVuZGVyIHdpZGdldFxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAvLyBzZXQgZGVmYXVsdCBvciBzdGFydGluZyBzdGF0ZVxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ldyBJZGxlVXBXaWRnZXRTdGF0ZSgpKTtcbiAgICAgICAgLy8gcHJldmVudCB0ZXh0IHNlbGVjdGlvblxuICAgICAgICB0aGlzLnNlbGVjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXQgZm9udFNpemUoc2l6ZTpudW1iZXIpe1xuICAgICAgICB0aGlzLl9mb250U2l6ZT0gc2l6ZTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBvc2l0aW9uVGV4dCgpe1xuICAgICAgICBsZXQgYm94OkJveCA9IHRoaXMuX3RleHQuYmJveCgpO1xuICAgICAgICAvLyBpbiBUUywgdGhlIHByZXBlbmRpbmcgd2l0aCArIHBlcmZvcm1zIGEgdHlwZSBjb252ZXJzaW9uIGZyb20gc3RyaW5nIHRvIG51bWJlclxuICAgICAgICB0aGlzLl90ZXh0X3kgPSAoK3RoaXMuX3JlY3QueSgpKTtcbiAgICAgICAgdGhpcy5fdGV4dC54KCt0aGlzLl9yZWN0LngoKSArIDQpO1xuICAgICAgICBpZiAodGhpcy5fdGV4dF95ID4gMCl7XG4gICAgICAgICAgICB0aGlzLl90ZXh0LnkodGhpcy5fdGV4dF95KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2dyb3VwID0gKHRoaXMucGFyZW50IGFzIFdpbmRvdykud2luZG93Lmdyb3VwKCk7XG4gICAgICAgIHRoaXMuX3JlY3QgPSB0aGlzLl9ncm91cC5yZWN0KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fcmVjdC5zdHJva2UoXCJibGFja1wiKTtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2dyb3VwLnRleHQodGhpcy5faW5wdXQpO1xuICAgICAgICAvLyBTZXQgdGhlIG91dGVyIHN2ZyBlbGVtZW50IFxuICAgICAgICB0aGlzLm91dGVyU3ZnID0gdGhpcy5fZ3JvdXA7XG4gICAgICAgIC8vIEFkZCBhIHRyYW5zcGFyZW50IHJlY3Qgb24gdG9wIG9mIHRleHQgdG8gXG4gICAgICAgIC8vIHByZXZlbnQgc2VsZWN0aW9uIGN1cnNvciBhbmQgdG8gaGFuZGxlIG1vdXNlIGV2ZW50c1xuICAgICAgICB0aGlzLmV2ZW50cmVjdCA9IHRoaXMuX2dyb3VwLnJlY3QodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLm9wYWNpdHkoMCkuYXR0cignaWQnLCAwKTtcblxuICAgICAgICAvLyByZWdpc3RlciBvYmplY3RzIHRoYXQgc2hvdWxkIHJlY2VpdmUgZXZlbnQgbm90aWZpY2F0aW9ucy5cbiAgICAgICAgLy8gZm9yIHRoaXMgd2lkZ2V0LCB3ZSB3YW50IHRvIGtub3cgd2hlbiB0aGUgZ3JvdXAgb3IgcmVjdCBvYmplY3RzXG4gICAgICAgIC8vIHJlY2VpdmUgZXZlbnRzXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmV2ZW50cmVjdCk7XG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgdXBkYXRlKCk6IHZvaWQge1xuXG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLl90ZXh0ICE9IG51bGwpXG4gICAgICAgICAgICB0aGlzLl90ZXh0LmZvbnQoJ3NpemUnLCB0aGlzLl9mb250U2l6ZSk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0LnRleHQodGhpcy5faW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblRleHQoKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuX3JlY3QgIT0gbnVsbClcbiAgICAgICAgICAgIC8vIHRoaXMuX3JlY3QgPSB0aGlzLl9ncm91cC5yZWN0KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuX3JlY3QuZmlsbCh0aGlzLmJhY2tjb2xvcik7XG5cbiAgICAgICAgaWYodGhpcy5oZWlnaHQgIT0gdGhpcy5kZWZhdWx0SGVpZ2h0KVxuICAgICAgICAgICAgdGhpcy5fcmVjdC53aWR0aCh0aGlzLndpZHRoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlY3QuaGVpZ2h0KHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRyZWN0LndpZHRoKHRoaXMud2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5ldmVudHJlY3QuaGVpZ2h0KHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gdGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuZXZlbnRyZWN0KTtcbiAgICAgICAgc3VwZXIudXBkYXRlKCk7XG4gICAgfVxuICAgIFxuICAgIHByZXNzUmVsZWFzZVN0YXRlKCk6IHZvaWR7XG5cbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNTdGF0ZSBpbnN0YW5jZW9mIFByZXNzZWRXaWRnZXRTdGF0ZSlcbiAgICAgICAgICAgIHRoaXMucmFpc2UobmV3IEV2ZW50QXJncyh0aGlzKSk7XG4gICAgfVxuICAgIGhlYWRlclN0cmluZzogc3RyaW5nID0gJ0J1dHRvbiBoYXMgTk9UIGJlZW4gY2xpY2tlZCc7XG4gICAgLy9UT0RPOiBpbXBsZW1lbnQgdGhlIG9uQ2xpY2sgZXZlbnQgdXNpbmcgYSBjYWxsYmFjayBwYXNzZWQgYXMgYSBwYXJhbWV0ZXJcbiAgICBvbkNsaWNrKGNhbGxiYWNrOiB7KGV2ZW50PzphbnkpOiB2b2lkfSk6dm9pZHtcbiAgICAgICAgdGhpcy5hdHRhY2goY2FsbGJhY2spO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gICAgfVxuICAgIFxuICAgIC8vVE9ETzogZ2l2ZSB0aGUgc3RhdGVzIHNvbWV0aGluZyB0byBkbyEgVXNlIHRoZXNlIG1ldGhvZHMgdG8gY29udHJvbCB0aGUgdmlzdWFsIGFwcGVhcmFuY2Ugb2YgeW91clxuICAgIC8vd2lkZ2V0XG4gICAgXG4gICAgaWRsZXVwU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFja2NvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIH1cbiAgICBpZGxlZG93blN0YXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklkbGUgZG93blwiKTtcblxuICAgIH1cbiAgICBwcmVzc2VkU3RhdGUoY2FsbGJhY2s/OiAoZXZlbnQ6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcInByZXNzZWRcIik7XG4gICAgfVxuICAgIGhvdmVyU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW91c2UgaG92ZXIgdHJpZ2dlcmVkXCIpO1xuXG4gICAgfVxuICAgIGhvdmVyUHJlc3NlZFN0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHJlc3NlZG91dFN0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgbW92ZVN0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAga2V5dXBTdGF0ZShrZXlFdmVudD86IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuXG4gICAgc2V0IGJ0bkhlaWdodChoZWlnaHQ6IG51bWJlcikge1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdH1cblxuXHRnZXQgYnRuSGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmhlaWdodDtcblx0fVxuXG4gICAgc2V0IGJ0bldpZHRoKHdpZHRoOiBudW1iZXIpIHtcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXG5cdGdldCBidG5XaWR0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG4gICAgc2V0IGJ0bkxhYmVsKGxhYmVsOiBzdHJpbmcpIHtcblx0XHR0aGlzLl9pbnB1dCA9IGxhYmVsO1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdH1cblxuXHRnZXQgYnRuTGFiZWwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lucHV0O1xuXHR9XG59XG5cbmV4cG9ydCB7VGV4dEJveH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7V2luZG93fSBmcm9tIFwiLi9jb3JlL3VpXCJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi93aWRnZXRzL2J1dHRvblwiXG5pbXBvcnQgeyBDaGVja0JveCB9IGZyb20gXCIuL3dpZGdldHMvY2hlY2tib3hcIjtcbmltcG9ydCB7SGVhZGluZ30gZnJvbSBcIi4vd2lkZ2V0cy9oZWFkaW5nXCJcbmltcG9ydCB7IFRleHRCb3ggfSBmcm9tIFwiLi93aWRnZXRzL3RleHRib3hcIjtcbmltcG9ydCB7IFNjcm9sbEJhciB9IGZyb20gXCIuL3dpZGdldHMvc2Nyb2xsYmFyXCI7XG5pbXBvcnQgeyBSYWRpb0J1dHRvbiB9IGZyb20gXCIuL3dpZGdldHMvcmFkaW9idXR0b25cIjtcblxubGV0IHcgPSBuZXcgV2luZG93KHdpbmRvdy5pbm5lckhlaWdodC0xMCwnMTAwJScpO1xuXG5sZXQgbGJsMSA9IG5ldyBIZWFkaW5nKHcpO1xubGJsMS50ZXh0ID0gXCJWaXN1YWxseSBkaXN0aW5jdCAoZnJvbSBkZWZhdWx0KSBidXR0b24hXCI7XG5sYmwxLnRhYmluZGV4ID0gMTtcbmxibDEuZm9udFNpemUgPSAxNDtcbmxibDEubW92ZSgxMCwyMCk7XG5cbmxldCBidG4gPSBuZXcgQnV0dG9uKHcpO1xuYnRuLnRhYmluZGV4ID0gMjtcbmJ0bi5mb250U2l6ZSA9IDE2O1xuYnRuLmJhY2tjb2xvciA9ICdncmF5JztcbmJ0bi5tb3ZlKDEyLCA1MCk7XG5cblxubGV0IG4gPSAwO1xubGV0IGNhbGxiYWNrID0gZnVuY3Rpb24oZXZlbnQ6YW55KSB7XG4gICAgYnRuLmJhY2tjb2xvciA9ICdhcXVhJztcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gICAgbGJsMS50ZXh0ID0gXCJCdXR0b24gaGFzIGJlZW4gY2xpY2tlZCFcIjtcbiAgICBuKys7XG4gICAgYnRuLmJ0bkxhYmVsID0gbiArIFwiIHRpbWUocylcIjtcbn1cbmJ0bi5vbkNsaWNrKGNhbGxiYWNrKTtcblxubGV0IGxibDIgPSBuZXcgSGVhZGluZyh3KTtcbmxibDIudGV4dCA9IFwiQ2hlY2tib3hcIjtcbmxibDIudGFiaW5kZXggPSAxO1xubGJsMi5mb250U2l6ZSA9IDE0O1xubGJsMi5tb3ZlKDEwLDEwMCk7XG5cbmxldCBsYmwyXzUgPSBuZXcgSGVhZGluZyh3KTtcbmxibDJfNS50ZXh0ID0gXCJub3QgY2hlY2tlZFwiO1xubGJsMl81LnRhYmluZGV4ID0gMTtcbmxibDJfNS5mb250U2l6ZSA9IDE0O1xubGJsMl81Lm1vdmUoNDAsMTM1KTtcblxubGV0IGNoZWNrYm94ID0gbmV3IENoZWNrQm94KHcpO1xuY2hlY2tib3gubW92ZSgxMiwgMTMwKTtcbmxldCBpc0NoZWNrZWQgPSBmYWxzZTtcbmxldCBjYWxsYmFjazIgPSBmdW5jdGlvbihldmVudD86YW55KSB7XG4gICAgaWYoaXNDaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgY2hlY2tib3guYnRuTGFiZWwgPSBcIiBcIjtcbiAgICAgICAgaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGxibDJfNS50ZXh0ID0gXCJub3QgY2hlY2tlZFwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2hlY2tib3guYnRuTGFiZWwgPSBcIlhcIjtcbiAgICAgICAgaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgbGJsMl81LnRleHQgPSBcImNoZWNrZWRcIjtcbiAgICB9XG59XG5jaGVja2JveC5vbkNsaWNrKGNhbGxiYWNrMik7XG5cbmxldCBsYmwzID0gbmV3IEhlYWRpbmcodyk7XG5sYmwzLnRleHQgPSBcIlJhZGlvIEJ1dHRvblwiO1xubGJsMy50YWJpbmRleCA9IDE7XG5sYmwzLmZvbnRTaXplID0gMTQ7XG5sYmwzLm1vdmUoMTIsMTcwKTtcblxubGV0IHJhZGlvQnV0dG9uID0gbmV3IFJhZGlvQnV0dG9uKHcpO1xucmFkaW9CdXR0b24ubW92ZSgxMiwyMDApO1xucmFkaW9CdXR0b24uYWRkUmFkaW8oKTtcblxubGV0IGxibDUgPSBuZXcgSGVhZGluZyh3KTtcbmxibDUudGV4dCA9IFwiVGV4dCBCb3hcIjtcbmxibDUudGFiaW5kZXggPSAxO1xubGJsNS5mb250U2l6ZSA9IDE0O1xubGJsNS5tb3ZlKDEyLDI0MCk7XG5cbmxldCB0ZXh0Ym94ID0gbmV3IFRleHRCb3godyk7XG50ZXh0Ym94LmJhY2tjb2xvciA9IFwid2hpdGVcIjtcbnRleHRib3gubW92ZSgxMiwyNTUpO1xuXG5cbmxldCBsYmw2ID0gbmV3IEhlYWRpbmcodyk7XG5sYmw2LnRleHQgPSBcIlNjcm9sbCBCYXJcIjtcbmxibDYudGFiaW5kZXggPSAxO1xubGJsNi5mb250U2l6ZSA9IDE0O1xubGJsNi5tb3ZlKDEyLDQzNSk7XG5cbmxldCBzY3JvbGxiYXIgPSBuZXcgU2Nyb2xsQmFyKHcpO1xuc2Nyb2xsYmFyLmJhY2tjb2xvciA9IFwid2hpdGVcIjtcbnNjcm9sbGJhci5tb3ZlKDEyLDQ2MCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9