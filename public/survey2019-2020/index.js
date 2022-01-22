var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a6, b10) => {
  for (var prop in b10 || (b10 = {}))
    if (__hasOwnProp.call(b10, prop))
      __defNormalProp(a6, prop, b10[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b10)) {
      if (__propIsEnum.call(b10, prop))
        __defNormalProp(a6, prop, b10[prop]);
    }
  return a6;
};
var __spreadProps = (a6, b10) => __defProps(a6, __getOwnPropDescs(b10));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module, temp) => {
    return cache && cache.get(module) || (temp = __reExport(__markAsModule({}), module, 1), cache && cache.set(module, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e3) {
        reject(e3);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e3) {
        reject(e3);
      }
    };
    var step = (x6) => x6.done ? resolve(x6.value) : Promise.resolve(x6.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/preact/dist/preact.module.js
function a(n2, l4) {
  for (var u4 in l4)
    n2[u4] = l4[u4];
  return n2;
}
function h(n2) {
  var l4 = n2.parentNode;
  l4 && l4.removeChild(n2);
}
function v(l4, u4, i4) {
  var t4, r4, o4, f4 = {};
  for (o4 in u4)
    o4 == "key" ? t4 = u4[o4] : o4 == "ref" ? r4 = u4[o4] : f4[o4] = u4[o4];
  if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : i4), typeof l4 == "function" && l4.defaultProps != null)
    for (o4 in l4.defaultProps)
      f4[o4] === void 0 && (f4[o4] = l4.defaultProps[o4]);
  return y(l4, f4, t4, r4, null);
}
function y(n2, i4, t4, r4, o4) {
  var f4 = { type: n2, props: i4, key: t4, ref: r4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o4 == null ? ++u : o4 };
  return o4 == null && l.vnode != null && l.vnode(f4), f4;
}
function d(n2) {
  return n2.children;
}
function _(n2, l4) {
  this.props = n2, this.context = l4;
}
function k(n2, l4) {
  if (l4 == null)
    return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u4; l4 < n2.__k.length; l4++)
    if ((u4 = n2.__k[l4]) != null && u4.__e != null)
      return u4.__e;
  return typeof n2.type == "function" ? k(n2) : null;
}
function b(n2) {
  var l4, u4;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l4 = 0; l4 < n2.__k.length; l4++)
      if ((u4 = n2.__k[l4]) != null && u4.__e != null) {
        n2.__e = n2.__c.base = u4.__e;
        break;
      }
    return b(n2);
  }
}
function m(n2) {
  (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(g);
}
function g() {
  for (var n2; g.__r = t.length; )
    n2 = t.sort(function(n3, l4) {
      return n3.__v.__b - l4.__v.__b;
    }), t = [], n2.some(function(n3) {
      var l4, u4, i4, t4, r4, o4;
      n3.__d && (r4 = (t4 = (l4 = n3).__v).__e, (o4 = l4.__P) && (u4 = [], (i4 = a({}, t4)).__v = t4.__v + 1, j(o4, t4, i4, l4.__n, o4.ownerSVGElement !== void 0, t4.__h != null ? [r4] : null, u4, r4 == null ? k(t4) : r4, t4.__h), z(u4, t4), t4.__e != r4 && b(t4)));
    });
}
function w(n2, l4, u4, i4, t4, r4, o4, f4, s5, a6) {
  var h3, v3, p3, _2, b10, m4, g3, w3 = i4 && i4.__k || c, A5 = w3.length;
  for (u4.__k = [], h3 = 0; h3 < l4.length; h3++)
    if ((_2 = u4.__k[h3] = (_2 = l4[h3]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y(null, _2, null, null, _2) : Array.isArray(_2) ? y(d, { children: _2 }, null, null, null) : _2.__b > 0 ? y(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
      if (_2.__ = u4, _2.__b = u4.__b + 1, (p3 = w3[h3]) === null || p3 && _2.key == p3.key && _2.type === p3.type)
        w3[h3] = void 0;
      else
        for (v3 = 0; v3 < A5; v3++) {
          if ((p3 = w3[v3]) && _2.key == p3.key && _2.type === p3.type) {
            w3[v3] = void 0;
            break;
          }
          p3 = null;
        }
      j(n2, _2, p3 = p3 || e, t4, r4, o4, f4, s5, a6), b10 = _2.__e, (v3 = _2.ref) && p3.ref != v3 && (g3 || (g3 = []), p3.ref && g3.push(p3.ref, null, _2), g3.push(v3, _2.__c || b10, _2)), b10 != null ? (m4 == null && (m4 = b10), typeof _2.type == "function" && _2.__k === p3.__k ? _2.__d = s5 = x(_2, s5, n2) : s5 = P(n2, _2, p3, w3, b10, s5), typeof u4.type == "function" && (u4.__d = s5)) : s5 && p3.__e == s5 && s5.parentNode != n2 && (s5 = k(p3));
    }
  for (u4.__e = m4, h3 = A5; h3--; )
    w3[h3] != null && (typeof u4.type == "function" && w3[h3].__e != null && w3[h3].__e == u4.__d && (u4.__d = k(i4, h3 + 1)), N(w3[h3], w3[h3]));
  if (g3)
    for (h3 = 0; h3 < g3.length; h3++)
      M(g3[h3], g3[++h3], g3[++h3]);
}
function x(n2, l4, u4) {
  for (var i4, t4 = n2.__k, r4 = 0; t4 && r4 < t4.length; r4++)
    (i4 = t4[r4]) && (i4.__ = n2, l4 = typeof i4.type == "function" ? x(i4, l4, u4) : P(u4, i4, i4, t4, i4.__e, l4));
  return l4;
}
function P(n2, l4, u4, i4, t4, r4) {
  var o4, f4, e3;
  if (l4.__d !== void 0)
    o4 = l4.__d, l4.__d = void 0;
  else if (u4 == null || t4 != r4 || t4.parentNode == null)
    n:
      if (r4 == null || r4.parentNode !== n2)
        n2.appendChild(t4), o4 = null;
      else {
        for (f4 = r4, e3 = 0; (f4 = f4.nextSibling) && e3 < i4.length; e3 += 2)
          if (f4 == t4)
            break n;
        n2.insertBefore(t4, r4), o4 = r4;
      }
  return o4 !== void 0 ? o4 : t4.nextSibling;
}
function C(n2, l4, u4, i4, t4) {
  var r4;
  for (r4 in u4)
    r4 === "children" || r4 === "key" || r4 in l4 || H(n2, r4, null, u4[r4], i4);
  for (r4 in l4)
    t4 && typeof l4[r4] != "function" || r4 === "children" || r4 === "key" || r4 === "value" || r4 === "checked" || u4[r4] === l4[r4] || H(n2, r4, l4[r4], u4[r4], i4);
}
function $(n2, l4, u4) {
  l4[0] === "-" ? n2.setProperty(l4, u4) : n2[l4] = u4 == null ? "" : typeof u4 != "number" || s.test(l4) ? u4 : u4 + "px";
}
function H(n2, l4, u4, i4, t4) {
  var r4;
  n:
    if (l4 === "style")
      if (typeof u4 == "string")
        n2.style.cssText = u4;
      else {
        if (typeof i4 == "string" && (n2.style.cssText = i4 = ""), i4)
          for (l4 in i4)
            u4 && l4 in u4 || $(n2.style, l4, "");
        if (u4)
          for (l4 in u4)
            i4 && u4[l4] === i4[l4] || $(n2.style, l4, u4[l4]);
      }
    else if (l4[0] === "o" && l4[1] === "n")
      r4 = l4 !== (l4 = l4.replace(/Capture$/, "")), l4 = l4.toLowerCase() in n2 ? l4.toLowerCase().slice(2) : l4.slice(2), n2.l || (n2.l = {}), n2.l[l4 + r4] = u4, u4 ? i4 || n2.addEventListener(l4, r4 ? T : I, r4) : n2.removeEventListener(l4, r4 ? T : I, r4);
    else if (l4 !== "dangerouslySetInnerHTML") {
      if (t4)
        l4 = l4.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (l4 !== "href" && l4 !== "list" && l4 !== "form" && l4 !== "tabIndex" && l4 !== "download" && l4 in n2)
        try {
          n2[l4] = u4 == null ? "" : u4;
          break n;
        } catch (n3) {
        }
      typeof u4 == "function" || (u4 != null && (u4 !== false || l4[0] === "a" && l4[1] === "r") ? n2.setAttribute(l4, u4) : n2.removeAttribute(l4));
    }
}
function I(n2) {
  this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function j(n2, u4, i4, t4, r4, o4, f4, e3, c8) {
  var s5, h3, v3, y7, p3, k4, b10, m4, g3, x6, A5, P2 = u4.type;
  if (u4.constructor !== void 0)
    return null;
  i4.__h != null && (c8 = i4.__h, e3 = u4.__e = i4.__e, u4.__h = null, o4 = [e3]), (s5 = l.__b) && s5(u4);
  try {
    n:
      if (typeof P2 == "function") {
        if (m4 = u4.props, g3 = (s5 = P2.contextType) && t4[s5.__c], x6 = s5 ? g3 ? g3.props.value : s5.__ : t4, i4.__c ? b10 = (h3 = u4.__c = i4.__c).__ = h3.__E : ("prototype" in P2 && P2.prototype.render ? u4.__c = h3 = new P2(m4, x6) : (u4.__c = h3 = new _(m4, x6), h3.constructor = P2, h3.render = O), g3 && g3.sub(h3), h3.props = m4, h3.state || (h3.state = {}), h3.context = x6, h3.__n = t4, v3 = h3.__d = true, h3.__h = []), h3.__s == null && (h3.__s = h3.state), P2.getDerivedStateFromProps != null && (h3.__s == h3.state && (h3.__s = a({}, h3.__s)), a(h3.__s, P2.getDerivedStateFromProps(m4, h3.__s))), y7 = h3.props, p3 = h3.state, v3)
          P2.getDerivedStateFromProps == null && h3.componentWillMount != null && h3.componentWillMount(), h3.componentDidMount != null && h3.__h.push(h3.componentDidMount);
        else {
          if (P2.getDerivedStateFromProps == null && m4 !== y7 && h3.componentWillReceiveProps != null && h3.componentWillReceiveProps(m4, x6), !h3.__e && h3.shouldComponentUpdate != null && h3.shouldComponentUpdate(m4, h3.__s, x6) === false || u4.__v === i4.__v) {
            h3.props = m4, h3.state = h3.__s, u4.__v !== i4.__v && (h3.__d = false), h3.__v = u4, u4.__e = i4.__e, u4.__k = i4.__k, u4.__k.forEach(function(n3) {
              n3 && (n3.__ = u4);
            }), h3.__h.length && f4.push(h3);
            break n;
          }
          h3.componentWillUpdate != null && h3.componentWillUpdate(m4, h3.__s, x6), h3.componentDidUpdate != null && h3.__h.push(function() {
            h3.componentDidUpdate(y7, p3, k4);
          });
        }
        h3.context = x6, h3.props = m4, h3.state = h3.__s, (s5 = l.__r) && s5(u4), h3.__d = false, h3.__v = u4, h3.__P = n2, s5 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s, h3.getChildContext != null && (t4 = a(a({}, t4), h3.getChildContext())), v3 || h3.getSnapshotBeforeUpdate == null || (k4 = h3.getSnapshotBeforeUpdate(y7, p3)), A5 = s5 != null && s5.type === d && s5.key == null ? s5.props.children : s5, w(n2, Array.isArray(A5) ? A5 : [A5], u4, i4, t4, r4, o4, f4, e3, c8), h3.base = u4.__e, u4.__h = null, h3.__h.length && f4.push(h3), b10 && (h3.__E = h3.__ = null), h3.__e = false;
      } else
        o4 == null && u4.__v === i4.__v ? (u4.__k = i4.__k, u4.__e = i4.__e) : u4.__e = L(i4.__e, u4, i4, t4, r4, o4, f4, c8);
    (s5 = l.diffed) && s5(u4);
  } catch (n3) {
    u4.__v = null, (c8 || o4 != null) && (u4.__e = e3, u4.__h = !!c8, o4[o4.indexOf(e3)] = null), l.__e(n3, u4, i4);
  }
}
function z(n2, u4) {
  l.__c && l.__c(u4, n2), n2.some(function(u5) {
    try {
      n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
        n3.call(u5);
      });
    } catch (n3) {
      l.__e(n3, u5.__v);
    }
  });
}
function L(l4, u4, i4, t4, r4, o4, f4, c8) {
  var s5, a6, v3, y7 = i4.props, p3 = u4.props, d4 = u4.type, _2 = 0;
  if (d4 === "svg" && (r4 = true), o4 != null) {
    for (; _2 < o4.length; _2++)
      if ((s5 = o4[_2]) && "setAttribute" in s5 == !!d4 && (d4 ? s5.localName === d4 : s5.nodeType === 3)) {
        l4 = s5, o4[_2] = null;
        break;
      }
  }
  if (l4 == null) {
    if (d4 === null)
      return document.createTextNode(p3);
    l4 = r4 ? document.createElementNS("http://www.w3.org/2000/svg", d4) : document.createElement(d4, p3.is && p3), o4 = null, c8 = false;
  }
  if (d4 === null)
    y7 === p3 || c8 && l4.data === p3 || (l4.data = p3);
  else {
    if (o4 = o4 && n.call(l4.childNodes), a6 = (y7 = i4.props || e).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c8) {
      if (o4 != null)
        for (y7 = {}, _2 = 0; _2 < l4.attributes.length; _2++)
          y7[l4.attributes[_2].name] = l4.attributes[_2].value;
      (v3 || a6) && (v3 && (a6 && v3.__html == a6.__html || v3.__html === l4.innerHTML) || (l4.innerHTML = v3 && v3.__html || ""));
    }
    if (C(l4, p3, y7, r4, c8), v3)
      u4.__k = [];
    else if (_2 = u4.props.children, w(l4, Array.isArray(_2) ? _2 : [_2], u4, i4, t4, r4 && d4 !== "foreignObject", o4, f4, o4 ? o4[0] : i4.__k && k(i4, 0), c8), o4 != null)
      for (_2 = o4.length; _2--; )
        o4[_2] != null && h(o4[_2]);
    c8 || ("value" in p3 && (_2 = p3.value) !== void 0 && (_2 !== y7.value || _2 !== l4.value || d4 === "progress" && !_2) && H(l4, "value", _2, y7.value, false), "checked" in p3 && (_2 = p3.checked) !== void 0 && _2 !== l4.checked && H(l4, "checked", _2, y7.checked, false));
  }
  return l4;
}
function M(n2, u4, i4) {
  try {
    typeof n2 == "function" ? n2(u4) : n2.current = u4;
  } catch (n3) {
    l.__e(n3, i4);
  }
}
function N(n2, u4, i4) {
  var t4, r4;
  if (l.unmount && l.unmount(n2), (t4 = n2.ref) && (t4.current && t4.current !== n2.__e || M(t4, null, u4)), (t4 = n2.__c) != null) {
    if (t4.componentWillUnmount)
      try {
        t4.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u4);
      }
    t4.base = t4.__P = null;
  }
  if (t4 = n2.__k)
    for (r4 = 0; r4 < t4.length; r4++)
      t4[r4] && N(t4[r4], u4, typeof n2.type != "function");
  i4 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
}
function O(n2, l4, u4) {
  return this.constructor(n2, u4);
}
function S(u4, i4, t4) {
  var r4, o4, f4;
  l.__ && l.__(u4, i4), o4 = (r4 = typeof t4 == "function") ? null : t4 && t4.__k || i4.__k, f4 = [], j(i4, u4 = (!r4 && t4 || i4).__k = v(d, null, [u4]), o4 || e, e, i4.ownerSVGElement !== void 0, !r4 && t4 ? [t4] : o4 ? null : i4.firstChild ? n.call(i4.childNodes) : null, f4, !r4 && t4 ? t4 : o4 ? o4.__e : i4.firstChild, r4), z(f4, u4);
}
function B(l4, u4, i4) {
  var t4, r4, o4, f4 = a({}, l4.props);
  for (o4 in u4)
    o4 == "key" ? t4 = u4[o4] : o4 == "ref" ? r4 = u4[o4] : f4[o4] = u4[o4];
  return arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : i4), y(l4.type, f4, t4 || l4.key, r4 || l4.ref, null);
}
function D(n2, l4) {
  var u4 = { __c: l4 = "__cC" + f++, __: n2, Consumer: function(n3, l5) {
    return n3.children(l5);
  }, Provider: function(n3) {
    var u5, i4;
    return this.getChildContext || (u5 = [], (i4 = {})[l4] = this, this.getChildContext = function() {
      return i4;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u5.some(m);
    }, this.sub = function(n4) {
      u5.push(n4);
      var l5 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u5.splice(u5.indexOf(n4), 1), l5 && l5.call(n4);
      };
    }), n3.children;
  } };
  return u4.Provider.__ = u4.Consumer.contextType = u4;
}
var n, l, u, i, t, r, o, f, e, c, s;
var init_preact_module = __esm({
  "node_modules/preact/dist/preact.module.js"() {
    e = {};
    c = [];
    s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    n = c.slice, l = { __e: function(n2, l4) {
      for (var u4, i4, t4; l4 = l4.__; )
        if ((u4 = l4.__c) && !u4.__)
          try {
            if ((i4 = u4.constructor) && i4.getDerivedStateFromError != null && (u4.setState(i4.getDerivedStateFromError(n2)), t4 = u4.__d), u4.componentDidCatch != null && (u4.componentDidCatch(n2), t4 = u4.__d), t4)
              return u4.__E = u4;
          } catch (l5) {
            n2 = l5;
          }
      throw n2;
    } }, u = 0, i = function(n2) {
      return n2 != null && n2.constructor === void 0;
    }, _.prototype.setState = function(n2, l4) {
      var u4;
      u4 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u4), this.props)), n2 && a(u4, n2), n2 != null && this.__v && (l4 && this.__h.push(l4), m(this));
    }, _.prototype.forceUpdate = function(n2) {
      this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
    }, _.prototype.render = d, t = [], r = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;
  }
});

// node_modules/dlv/dist/dlv.umd.js
var require_dlv_umd = __commonJS({
  "node_modules/dlv/dist/dlv.umd.js"(exports, module) {
    !function(t4, n2) {
      typeof exports == "object" && typeof module != "undefined" ? module.exports = function(t5, n3, e3, i4, o4) {
        for (n3 = n3.split ? n3.split(".") : n3, i4 = 0; i4 < n3.length; i4++)
          t5 = t5 ? t5[n3[i4]] : o4;
        return t5 === o4 ? e3 : t5;
      } : typeof define == "function" && define.amd ? define(function() {
        return function(t5, n3, e3, i4, o4) {
          for (n3 = n3.split ? n3.split(".") : n3, i4 = 0; i4 < n3.length; i4++)
            t5 = t5 ? t5[n3[i4]] : o4;
          return t5 === o4 ? e3 : t5;
        };
      }) : t4.dlv = function(t5, n3, e3, i4, o4) {
        for (n3 = n3.split ? n3.split(".") : n3, i4 = 0; i4 < n3.length; i4++)
          t5 = t5 ? t5[n3[i4]] : o4;
        return t5 === o4 ? e3 : t5;
      };
    }(exports);
  }
});

// node_modules/lodash.clonedeep/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.clonedeep/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reFlags = /\w*$/;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root3 = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    function addMapEntry(map4, pair2) {
      map4.set(pair2[0], pair2[1]);
      return map4;
    }
    function addSetEntry(set4, value) {
      set4.add(value);
      return set4;
    }
    function arrayEach(array3, iteratee) {
      var index3 = -1, length3 = array3 ? array3.length : 0;
      while (++index3 < length3) {
        if (iteratee(array3[index3], index3, array3) === false) {
          break;
        }
      }
      return array3;
    }
    function arrayPush(array3, values) {
      var index3 = -1, length3 = values.length, offset = array3.length;
      while (++index3 < length3) {
        array3[offset + index3] = values[index3];
      }
      return array3;
    }
    function arrayReduce(array3, iteratee, accumulator, initAccum) {
      var index3 = -1, length3 = array3 ? array3.length : 0;
      if (initAccum && length3) {
        accumulator = array3[++index3];
      }
      while (++index3 < length3) {
        accumulator = iteratee(accumulator, array3[index3], index3, array3);
      }
      return accumulator;
    }
    function baseTimes(n2, iteratee) {
      var index3 = -1, result = Array(n2);
      while (++index3 < n2) {
        result[index3] = iteratee(index3);
      }
      return result;
    }
    function getValue(object2, key) {
      return object2 == null ? void 0 : object2[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e3) {
        }
      }
      return result;
    }
    function mapToArray(map4) {
      var index3 = -1, result = Array(map4.size);
      map4.forEach(function(value, key) {
        result[++index3] = [key, value];
      });
      return result;
    }
    function overArg(func, transform2) {
      return function(arg) {
        return func(transform2(arg));
      };
    }
    function setToArray(set4) {
      var index3 = -1, result = Array(set4.size);
      set4.forEach(function(value) {
        result[++index3] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root3["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var Buffer2 = moduleExports ? root3.Buffer : void 0;
    var Symbol2 = root3.Symbol;
    var Uint8Array2 = root3.Uint8Array;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    var objectCreate = Object.create;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView2 = getNative(root3, "DataView");
    var Map2 = getNative(root3, "Map");
    var Promise2 = getNative(root3, "Promise");
    var Set2 = getNative(root3, "Set");
    var WeakMap2 = getNative(root3, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index3 = -1, length3 = entries ? entries.length : 0;
      this.clear();
      while (++index3 < length3) {
        var entry = entries[index3];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index3 = -1, length3 = entries ? entries.length : 0;
      this.clear();
      while (++index3 < length3) {
        var entry = entries[index3];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index3 = assocIndexOf(data, key);
      if (index3 < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index3 == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index3, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index3 = assocIndexOf(data, key);
      return index3 < 0 ? void 0 : data[index3][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index3 = assocIndexOf(data, key);
      if (index3 < 0) {
        data.push([key, value]);
      } else {
        data[index3][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index3 = -1, length3 = entries ? entries.length : 0;
      this.clear();
      while (++index3 < length3) {
        var entry = entries[index3];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack(entries) {
      this.__data__ = new ListCache(entries);
    }
    function stackClear() {
      this.__data__ = new ListCache();
    }
    function stackDelete(key) {
      return this.__data__["delete"](key);
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var cache = this.__data__;
      if (cache instanceof ListCache) {
        var pairs2 = cache.__data__;
        if (!Map2 || pairs2.length < LARGE_ARRAY_SIZE - 1) {
          pairs2.push([key, value]);
          return this;
        }
        cache = this.__data__ = new MapCache(pairs2);
      }
      cache.set(key, value);
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length3 = result.length, skipIndexes = !!length3;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length3)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignValue(object2, key, value) {
      var objValue = object2[key];
      if (!(hasOwnProperty.call(object2, key) && eq(objValue, value)) || value === void 0 && !(key in object2)) {
        object2[key] = value;
      }
    }
    function assocIndexOf(array3, key) {
      var length3 = array3.length;
      while (length3--) {
        if (eq(array3[length3][0], key)) {
          return length3;
        }
      }
      return -1;
    }
    function baseAssign(object2, source) {
      return object2 && copyObject(source, keys(source), object2);
    }
    function baseClone(value, isDeep, isFull, customizer, key, object2, stack) {
      var result;
      if (customizer) {
        result = object2 ? customizer(value, key, object2, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object2) {
          if (isHostObject(value)) {
            return object2 ? value : {};
          }
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) {
            return copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object2 ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (!isArr) {
        var props = isFull ? getAllKeys(value) : keys(value);
      }
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value, stack));
      });
      return result;
    }
    function baseCreate(proto) {
      return isObject(proto) ? objectCreate(proto) : {};
    }
    function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
      var result = keysFunc(object2);
      return isArray(object2) ? result : arrayPush(result, symbolsFunc(object2));
    }
    function baseGetTag(value) {
      return objectToString.call(value);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseKeys(object2) {
      if (!isPrototype(object2)) {
        return nativeKeys(object2);
      }
      var result = [];
      for (var key in Object(object2)) {
        if (hasOwnProperty.call(object2, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var result = new buffer.constructor(buffer.length);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    function cloneMap(map4, isDeep, cloneFunc) {
      var array3 = isDeep ? cloneFunc(mapToArray(map4), true) : mapToArray(map4);
      return arrayReduce(array3, addMapEntry, new map4.constructor());
    }
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    function cloneSet(set4, isDeep, cloneFunc) {
      var array3 = isDeep ? cloneFunc(setToArray(set4), true) : setToArray(set4);
      return arrayReduce(array3, addSetEntry, new set4.constructor());
    }
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array3) {
      var index3 = -1, length3 = source.length;
      array3 || (array3 = Array(length3));
      while (++index3 < length3) {
        array3[index3] = source[index3];
      }
      return array3;
    }
    function copyObject(source, props, object2, customizer) {
      object2 || (object2 = {});
      var index3 = -1, length3 = props.length;
      while (++index3 < length3) {
        var key = props[index3];
        var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
        assignValue(object2, key, newValue === void 0 ? source[key] : newValue);
      }
      return object2;
    }
    function copySymbols(source, object2) {
      return copyObject(source, getSymbols(source), object2);
    }
    function getAllKeys(object2) {
      return baseGetAllKeys(object2, keys, getSymbols);
    }
    function getMapData(map4, key) {
      var data = map4.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object2, key) {
      var value = getValue(object2, key);
      return baseIsNative(value) ? value : void 0;
    }
    var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
    var getTag = baseGetTag;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value) {
        var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function initCloneArray(array3) {
      var length3 = array3.length, result = array3.constructor(length3);
      if (length3 && typeof array3[0] == "string" && hasOwnProperty.call(array3, "index")) {
        result.index = array3.index;
        result.input = array3.input;
      }
      return result;
    }
    function initCloneObject(object2) {
      return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
    }
    function initCloneByTag(object2, tag, cloneFunc, isDeep) {
      var Ctor = object2.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object2);
        case boolTag:
        case dateTag:
          return new Ctor(+object2);
        case dataViewTag:
          return cloneDataView(object2, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object2, isDeep);
        case mapTag:
          return cloneMap(object2, isDeep, cloneFunc);
        case numberTag:
        case stringTag:
          return new Ctor(object2);
        case regexpTag:
          return cloneRegExp(object2);
        case setTag:
          return cloneSet(object2, isDeep, cloneFunc);
        case symbolTag:
          return cloneSymbol(object2);
      }
    }
    function isIndex(value, length3) {
      length3 = length3 == null ? MAX_SAFE_INTEGER : length3;
      return !!length3 && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length3);
    }
    function isKeyable(value) {
      var type2 = typeof value;
      return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e3) {
        }
        try {
          return func + "";
        } catch (e3) {
        }
      }
      return "";
    }
    function cloneDeep4(value) {
      return baseClone(value, true, true);
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type2 = typeof value;
      return !!value && (type2 == "object" || type2 == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function keys(object2) {
      return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module.exports = cloneDeep4;
  }
});

// node_modules/lodash.assign/index.js
var require_lodash2 = __commonJS({
  "node_modules/lodash.assign/index.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function baseTimes(n2, iteratee) {
      var index3 = -1, result = Array(n2);
      while (++index3 < n2) {
        result[index3] = iteratee(index3);
      }
      return result;
    }
    function overArg(func, transform2) {
      return function(arg) {
        return func(transform2(arg));
      };
    }
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeKeys = overArg(Object.keys, Object);
    var nativeMax = Math.max;
    var nonEnumShadows = !propertyIsEnumerable.call({ "valueOf": 1 }, "valueOf");
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length3 = result.length, skipIndexes = !!length3;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length3)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignValue(object2, key, value) {
      var objValue = object2[key];
      if (!(hasOwnProperty.call(object2, key) && eq(objValue, value)) || value === void 0 && !(key in object2)) {
        object2[key] = value;
      }
    }
    function baseKeys(object2) {
      if (!isPrototype(object2)) {
        return nativeKeys(object2);
      }
      var result = [];
      for (var key in Object(object2)) {
        if (hasOwnProperty.call(object2, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function baseRest(func, start2) {
      start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
      return function() {
        var args = arguments, index3 = -1, length3 = nativeMax(args.length - start2, 0), array3 = Array(length3);
        while (++index3 < length3) {
          array3[index3] = args[start2 + index3];
        }
        index3 = -1;
        var otherArgs = Array(start2 + 1);
        while (++index3 < start2) {
          otherArgs[index3] = args[index3];
        }
        otherArgs[start2] = array3;
        return apply(func, this, otherArgs);
      };
    }
    function copyObject(source, props, object2, customizer) {
      object2 || (object2 = {});
      var index3 = -1, length3 = props.length;
      while (++index3 < length3) {
        var key = props[index3];
        var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
        assignValue(object2, key, newValue === void 0 ? source[key] : newValue);
      }
      return object2;
    }
    function createAssigner(assigner) {
      return baseRest(function(object2, sources) {
        var index3 = -1, length3 = sources.length, customizer = length3 > 1 ? sources[length3 - 1] : void 0, guard = length3 > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length3--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length3 < 3 ? void 0 : customizer;
          length3 = 1;
        }
        object2 = Object(object2);
        while (++index3 < length3) {
          var source = sources[index3];
          if (source) {
            assigner(object2, source, index3, customizer);
          }
        }
        return object2;
      });
    }
    function isIndex(value, length3) {
      length3 = length3 == null ? MAX_SAFE_INTEGER : length3;
      return !!length3 && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length3);
    }
    function isIterateeCall(value, index3, object2) {
      if (!isObject(object2)) {
        return false;
      }
      var type2 = typeof index3;
      if (type2 == "number" ? isArrayLike(object2) && isIndex(index3, object2.length) : type2 == "string" && index3 in object2) {
        return eq(object2[index3], value);
      }
      return false;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type2 = typeof value;
      return !!value && (type2 == "object" || type2 == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    var assign3 = createAssigner(function(object2, source) {
      if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object2);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object2, key, source[key]);
        }
      }
    });
    function keys(object2) {
      return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
    }
    module.exports = assign3;
  }
});

// node_modules/preact/devtools/dist/devtools.module.js
var init_devtools_module = __esm({
  "node_modules/preact/devtools/dist/devtools.module.js"() {
    init_preact_module();
    typeof window != "undefined" && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.6.4", l, { Fragment: d, Component: _ });
  }
});

// node_modules/preact/debug/dist/debug.module.js
var debug_module_exports = {};
__export(debug_module_exports, {
  resetPropWarnings: () => r3
});
function r3() {
  o3 = {};
}
function a5(n2) {
  return n2.type === d ? "Fragment" : typeof n2.type == "function" ? n2.type.displayName || n2.type.name : typeof n2.type == "string" ? n2.type : "#text";
}
function c7() {
  return i3.length > 0 ? i3[i3.length - 1] : null;
}
function u3(n2) {
  return typeof n2.type == "function" && n2.type != d;
}
function f3(n2) {
  for (var t4 = [n2], e3 = n2; e3.__o != null; )
    t4.push(e3.__o), e3 = e3.__o;
  return t4.reduce(function(n3, t5) {
    n3 += "  in " + a5(t5);
    var e4 = t5.__source;
    return e4 ? n3 += " (at " + e4.fileName + ":" + e4.lineNumber + ")" : l3 || (l3 = true, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n3 + "\n";
  }, "");
}
function y6(n2) {
  var t4 = n2.props, e3 = a5(n2), o4 = "";
  for (var r4 in t4)
    if (t4.hasOwnProperty(r4) && r4 !== "children") {
      var i4 = t4[r4];
      typeof i4 == "function" && (i4 = "function " + (i4.displayName || i4.name) + "() {}"), i4 = Object(i4) !== i4 || i4.toString ? i4 + "" : Object.prototype.toString.call(i4), o4 += " " + r4 + "=" + JSON.stringify(i4);
    }
  var s5 = t4.children;
  return "<" + e3 + o4 + (s5 && s5.length ? ">..</" + e3 + ">" : " />");
}
var o3, i3, s4, l3, p2, d3, h2;
var init_debug_module = __esm({
  "node_modules/preact/debug/dist/debug.module.js"() {
    init_preact_module();
    init_devtools_module();
    o3 = {};
    i3 = [];
    s4 = [];
    l3 = false;
    p2 = typeof WeakMap == "function";
    d3 = _.prototype.setState;
    _.prototype.setState = function(n2, t4) {
      return this.__v == null ? this.state == null && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + f3(c7())) : this.__P == null && console.warn(`Can't call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + f3(this.__v)), d3.call(this, n2, t4);
    };
    h2 = _.prototype.forceUpdate;
    _.prototype.forceUpdate = function(n2) {
      return this.__v == null ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f3(c7())) : this.__P == null && console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + f3(this.__v)), h2.call(this, n2);
    }, function() {
      !function() {
        var t5 = l.__b, e4 = l.diffed, o4 = l.__, r5 = l.vnode, a6 = l.__r;
        l.diffed = function(n2) {
          u3(n2) && s4.pop(), i3.pop(), e4 && e4(n2);
        }, l.__b = function(n2) {
          u3(n2) && i3.push(n2), t5 && t5(n2);
        }, l.__ = function(n2, t6) {
          s4 = [], o4 && o4(n2, t6);
        }, l.vnode = function(n2) {
          n2.__o = s4.length > 0 ? s4[s4.length - 1] : null, r5 && r5(n2);
        }, l.__r = function(n2) {
          u3(n2) && s4.push(n2), a6 && a6(n2);
        };
      }();
      var t4 = false, e3 = l.__b, r4 = l.diffed, c8 = l.vnode, l4 = l.__e, d4 = l.__, h3 = l.__h, m4 = p2 ? { useEffect: /* @__PURE__ */ new WeakMap(), useLayoutEffect: /* @__PURE__ */ new WeakMap(), lazyPropTypes: /* @__PURE__ */ new WeakMap() } : null, v3 = [];
      l.__e = function(n2, t5, e4) {
        if (t5 && t5.__c && typeof n2.then == "function") {
          var o4 = n2;
          n2 = new Error("Missing Suspense. The throwing component was: " + a5(t5));
          for (var r5 = t5; r5; r5 = r5.__)
            if (r5.__c && r5.__c.__c) {
              n2 = o4;
              break;
            }
          if (n2 instanceof Error)
            throw n2;
        }
        try {
          l4(n2, t5, e4), typeof n2.then != "function" && setTimeout(function() {
            throw n2;
          });
        } catch (n3) {
          throw n3;
        }
      }, l.__ = function(n2, t5) {
        if (!t5)
          throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
        var e4;
        switch (t5.nodeType) {
          case 1:
          case 11:
          case 9:
            e4 = true;
            break;
          default:
            e4 = false;
        }
        if (!e4) {
          var o4 = a5(n2);
          throw new Error("Expected a valid HTML node as a second argument to render.	Received " + t5 + " instead: render(<" + o4 + " />, " + t5 + ");");
        }
        d4 && d4(n2, t5);
      }, l.__b = function(n2) {
        var r5 = n2.type, i4 = function n3(t5) {
          return t5 ? typeof t5.type == "function" ? n3(t5.__) : t5 : {};
        }(n2.__);
        if (t4 = true, r5 === void 0)
          throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + y6(n2) + "\n\n" + f3(n2));
        if (r5 != null && typeof r5 == "object") {
          if (r5.__k !== void 0 && r5.__e !== void 0)
            throw new Error("Invalid type passed to createElement(): " + r5 + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + a5(n2) + " = " + y6(r5) + ";\n  let vnode = <My" + a5(n2) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + f3(n2));
          throw new Error("Invalid type passed to createElement(): " + (Array.isArray(r5) ? "array" : r5));
        }
        if (r5 !== "thead" && r5 !== "tfoot" && r5 !== "tbody" || i4.type === "table" ? r5 === "tr" && i4.type !== "thead" && i4.type !== "tfoot" && i4.type !== "tbody" && i4.type !== "table" ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + y6(n2) + "\n\n" + f3(n2)) : r5 === "td" && i4.type !== "tr" ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + y6(n2) + "\n\n" + f3(n2)) : r5 === "th" && i4.type !== "tr" && console.error("Improper nesting of table. Your <th> should have a <tr>." + y6(n2) + "\n\n" + f3(n2)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + y6(n2) + "\n\n" + f3(n2)), n2.ref !== void 0 && typeof n2.ref != "function" && typeof n2.ref != "object" && !("$$typeof" in n2))
          throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [` + typeof n2.ref + "] instead\n" + y6(n2) + "\n\n" + f3(n2));
        if (typeof n2.type == "string") {
          for (var s5 in n2.props)
            if (s5[0] === "o" && s5[1] === "n" && typeof n2.props[s5] != "function" && n2.props[s5] != null)
              throw new Error(`Component's "` + s5 + '" property should be a function, but got [' + typeof n2.props[s5] + "] instead\n" + y6(n2) + "\n\n" + f3(n2));
        }
        if (typeof n2.type == "function" && n2.type.propTypes) {
          if (n2.type.displayName === "Lazy" && m4 && !m4.lazyPropTypes.has(n2.type)) {
            var c9 = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
            try {
              var l5 = n2.type();
              m4.lazyPropTypes.set(n2.type, true), console.warn(c9 + "Component wrapped in lazy() is " + a5(l5));
            } catch (n3) {
              console.warn(c9 + "We will log the wrapped component's name once it is loaded.");
            }
          }
          var u4 = n2.props;
          n2.type.__f && delete (u4 = function(n3, t5) {
            for (var e4 in t5)
              n3[e4] = t5[e4];
            return n3;
          }({}, u4)).ref, function(n3, t5, e4, r6, a6) {
            Object.keys(n3).forEach(function(e6) {
              var i5;
              try {
                i5 = n3[e6](t5, e6, r6, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (n4) {
                i5 = n4;
              }
              !i5 || i5.message in o3 || (o3[i5.message] = true, console.error("Failed prop type: " + i5.message + (a6 && "\n" + a6() || "")));
            });
          }(n2.type.propTypes, u4, 0, a5(n2), function() {
            return f3(n2);
          });
        }
        e3 && e3(n2);
      }, l.__h = function(n2, e4, o4) {
        if (!n2 || !t4)
          throw new Error("Hook can only be invoked from render methods.");
        h3 && h3(n2, e4, o4);
      };
      var b10 = function(n2, t5) {
        return { get: function() {
          var e4 = "get" + n2 + t5;
          v3 && v3.indexOf(e4) < 0 && (v3.push(e4), console.warn("getting vnode." + n2 + " is deprecated, " + t5));
        }, set: function() {
          var e4 = "set" + n2 + t5;
          v3 && v3.indexOf(e4) < 0 && (v3.push(e4), console.warn("setting vnode." + n2 + " is not allowed, " + t5));
        } };
      }, w3 = { nodeName: b10("nodeName", "use vnode.type"), attributes: b10("attributes", "use vnode.props"), children: b10("children", "use vnode.props.children") }, g3 = Object.create({}, w3);
      l.vnode = function(n2) {
        var t5 = n2.props;
        if (n2.type !== null && t5 != null && ("__source" in t5 || "__self" in t5)) {
          var e4 = n2.props = {};
          for (var o4 in t5) {
            var r5 = t5[o4];
            o4 === "__source" ? n2.__source = r5 : o4 === "__self" ? n2.__self = r5 : e4[o4] = r5;
          }
        }
        n2.__proto__ = g3, c8 && c8(n2);
      }, l.diffed = function(n2) {
        if (n2.__k && n2.__k.forEach(function(t5) {
          if (t5 && t5.type === void 0) {
            delete t5.__, delete t5.__b;
            var e6 = Object.keys(t5).join(",");
            throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + e6 + "}.\n\n" + f3(n2));
          }
        }), t4 = false, r4 && r4(n2), n2.__k != null)
          for (var e4 = [], o4 = 0; o4 < n2.__k.length; o4++) {
            var a6 = n2.__k[o4];
            if (a6 && a6.key != null) {
              var i4 = a6.key;
              if (e4.indexOf(i4) !== -1) {
                console.error('Following component has two or more children with the same key attribute: "' + i4 + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + y6(n2) + "\n\n" + f3(n2));
                break;
              }
              e4.push(i4);
            }
          }
      };
    }();
  }
});

// packages/results2019-2020/src/index.jsx
init_preact_module();

// packages/results2019-2020/src/context/language-context.jsx
init_preact_module();

// node_modules/preact/hooks/dist/hooks.module.js
init_preact_module();
var t2;
var u2;
var r2;
var o2 = 0;
var i2 = [];
var c2 = l.__b;
var f2 = l.__r;
var e2 = l.diffed;
var a2 = l.__c;
var v2 = l.unmount;
function m2(t4, r4) {
  l.__h && l.__h(u2, t4, o2 || r4), o2 = 0;
  var i4 = u2.__H || (u2.__H = { __: [], __h: [] });
  return t4 >= i4.__.length && i4.__.push({}), i4.__[t4];
}
function l2(n2) {
  return o2 = 1, p(w2, n2);
}
function p(n2, r4, o4) {
  var i4 = m2(t2++, 2);
  return i4.t = n2, i4.__c || (i4.__ = [o4 ? o4(r4) : w2(void 0, r4), function(n3) {
    var t4 = i4.t(i4.__[0], n3);
    i4.__[0] !== t4 && (i4.__ = [t4, i4.__[1]], i4.__c.setState({}));
  }], i4.__c = u2), i4.__;
}
function y2(r4, o4) {
  var i4 = m2(t2++, 3);
  !l.__s && k2(i4.__H, o4) && (i4.__ = r4, i4.__H = o4, u2.__H.__h.push(i4));
}
function s2(n2) {
  return o2 = 5, d2(function() {
    return { current: n2 };
  }, []);
}
function d2(n2, u4) {
  var r4 = m2(t2++, 7);
  return k2(r4.__H, u4) && (r4.__ = n2(), r4.__H = u4, r4.__h = n2), r4.__;
}
function A(n2, t4) {
  return o2 = 8, d2(function() {
    return n2;
  }, t4);
}
function F(n2) {
  var r4 = u2.context[n2.__c], o4 = m2(t2++, 9);
  return o4.c = n2, r4 ? (o4.__ == null && (o4.__ = true, r4.sub(u2)), r4.props.value) : n2.__;
}
function x2() {
  var t4;
  for (i2.sort(function(n2, t5) {
    return n2.__v.__b - t5.__v.__b;
  }); t4 = i2.pop(); )
    if (t4.__P)
      try {
        t4.__H.__h.forEach(g2), t4.__H.__h.forEach(j2), t4.__H.__h = [];
      } catch (u4) {
        t4.__H.__h = [], l.__e(u4, t4.__v);
      }
}
l.__b = function(n2) {
  u2 = null, c2 && c2(n2);
}, l.__r = function(n2) {
  f2 && f2(n2), t2 = 0;
  var r4 = (u2 = n2.__c).__H;
  r4 && (r4.__h.forEach(g2), r4.__h.forEach(j2), r4.__h = []);
}, l.diffed = function(t4) {
  e2 && e2(t4);
  var o4 = t4.__c;
  o4 && o4.__H && o4.__H.__h.length && (i2.push(o4) !== 1 && r2 === l.requestAnimationFrame || ((r2 = l.requestAnimationFrame) || function(n2) {
    var t5, u4 = function() {
      clearTimeout(r4), b2 && cancelAnimationFrame(t5), setTimeout(n2);
    }, r4 = setTimeout(u4, 100);
    b2 && (t5 = requestAnimationFrame(u4));
  })(x2)), u2 = null;
}, l.__c = function(t4, u4) {
  u4.some(function(t5) {
    try {
      t5.__h.forEach(g2), t5.__h = t5.__h.filter(function(n2) {
        return !n2.__ || j2(n2);
      });
    } catch (r4) {
      u4.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), u4 = [], l.__e(r4, t5.__v);
    }
  }), a2 && a2(t4, u4);
}, l.unmount = function(t4) {
  v2 && v2(t4);
  var u4, r4 = t4.__c;
  r4 && r4.__H && (r4.__H.__.forEach(function(n2) {
    try {
      g2(n2);
    } catch (n3) {
      u4 = n3;
    }
  }), u4 && l.__e(u4, r4.__v));
};
var b2 = typeof requestAnimationFrame == "function";
function g2(n2) {
  var t4 = u2, r4 = n2.__c;
  typeof r4 == "function" && (n2.__c = void 0, r4()), u2 = t4;
}
function j2(n2) {
  var t4 = u2;
  n2.__c = n2.__(), u2 = t4;
}
function k2(n2, t4) {
  return !n2 || n2.length !== t4.length || t4.some(function(t5, u4) {
    return t5 !== n2[u4];
  });
}
function w2(n2, t4) {
  return typeof t4 == "function" ? t4(n2) : t4;
}

// node_modules/preact-i18n/dist/preact-i18n.esm.js
init_preact_module();
var import_dlv = __toESM(require_dlv_umd());
var IntlContext = D({ intl: {} });
function defined(obj) {
  return obj !== null && obj !== void 0;
}
function assign(obj, props) {
  for (var i4 in props) {
    obj[i4] = props[i4];
  }
  return obj;
}
function deepAssign(target, source) {
  var out = assign({}, target);
  for (var i4 in source) {
    if (source.hasOwnProperty(i4)) {
      if (target[i4] && source[i4] && typeof target[i4] === "object" && typeof source[i4] === "object") {
        out[i4] = deepAssign(target[i4], source[i4]);
      } else {
        out[i4] = target[i4] || source[i4];
      }
    }
  }
  return out;
}
function select(properties) {
  properties = properties || {};
  if (typeof properties === "string") {
    properties = properties.split(",");
  }
  if ("join" in properties) {
    var selected = {};
    for (var i4 = 0; i4 < properties.length; i4++) {
      var val = properties[i4].trim();
      if (val) {
        selected[val.split(".").pop()] = val;
      }
    }
    return selected;
  }
  return properties;
}
function objectWithoutProperties(obj, exclude) {
  var target = {};
  for (var k4 in obj)
    if (Object.prototype.hasOwnProperty.call(obj, k4) && exclude.indexOf(k4) === -1)
      target[k4] = obj[k4];
  return target;
}
var URL_FLAG = /[?&#]intl=show/;
function IntlProvider(ref) {
  var scope = ref.scope;
  var mark = ref.mark;
  var definition = ref.definition;
  var rest = objectWithoutProperties(ref, ["scope", "mark", "definition"]);
  var props = rest;
  var ref$1 = F(IntlContext);
  var parentIntl = ref$1.intl;
  var intl2 = assign({}, parentIntl || {});
  if (scope) {
    intl2.scope = scope;
  }
  if (definition) {
    intl2.dictionary = deepAssign(intl2.dictionary || {}, definition);
  }
  if (mark || typeof location !== "undefined" && String(location).match(URL_FLAG)) {
    intl2.mark = true;
  }
  return v(IntlContext.Provider, { value: { intl: intl2 } }, props.children);
}
function intl(Child, options) {
  if (arguments.length < 2) {
    options = Child;
    return function(Child2) {
      return intl(Child2, options);
    };
  }
  function IntlProviderWrapper(props) {
    return v(IntlProvider, options || {}, v(Child, props));
  }
  IntlProviderWrapper.getWrappedComponent = Child && Child.getWrappedComponent || function() {
    return Child;
  };
  return IntlProviderWrapper;
}
var EMPTY = {};
function template(template2, fields, scope, dictionary) {
  return template2 && template2.replace(/\{\{([\w.-]+)\}\}/g, replacer.bind(null, fields || EMPTY, scope, dictionary));
}
function replacer(currentFields, scope, dictionary, s5, field) {
  var parts = field.split("."), v3 = currentFields;
  for (var i4 = 0; i4 < parts.length; i4++) {
    v3 = v3[parts[i4]];
    if (v3 == null) {
      return "";
    }
    if (v3 && v3.type === Text) {
      return translate(v3.props.id, scope, dictionary, v3.props.fields, v3.props.plural, v3.props.fallback);
    }
  }
  if (typeof v3 === "string" && v3.match(/\{\{/)) {
    v3 = template(v3, currentFields);
  }
  return v3;
}
function translate(id2, scope, dictionary, fields, plural, fallback) {
  if (scope) {
    id2 = scope + "." + id2;
  }
  var value = dictionary && (0, import_dlv.default)(dictionary, id2);
  if ((plural || plural === 0) && value && typeof value === "object") {
    if (value.splice) {
      value = value[plural] || value[0];
    } else if (plural === 0 && defined(value.none)) {
      value = value.none;
    } else if (plural === 1 && defined(value.one || value.singular)) {
      value = value.one || value.singular;
    } else {
      value = value.some || value.many || value.plural || value.other || value;
    }
  }
  return value && template(value, fields, scope, dictionary) || fallback || null;
}
function HighlightI18N(ref) {
  var value = ref.value;
  var id2 = ref.id;
  var ref$1 = F(IntlContext);
  var intl2 = ref$1.intl;
  if (intl2 && intl2.mark) {
    var dictionaryKey = "dictionary" + (intl2 && intl2.scope ? "." + intl2.scope : "") + "." + id2;
    return v("mark", {
      style: {
        background: value ? (0, import_dlv.default)(intl2, dictionaryKey) ? "rgba(119,231,117,.5)" : "rgba(229,226,41,.5)" : "rgba(228,147,51,.5)"
      },
      title: id2
    }, value);
  }
  return value;
}
function Text(ref) {
  var id2 = ref.id;
  var fallback = ref.children;
  var plural = ref.plural;
  var fields = ref.fields;
  var ref$1 = F(IntlContext);
  var intl2 = ref$1.intl;
  var value = translate(id2, intl2 && intl2.scope, intl2 && intl2.dictionary, fields, plural, fallback);
  return v(HighlightI18N, { id: id2, value });
}
function translateMapping(props, intl2, onlyTextNodes) {
  var out = {};
  intl2 = intl2 || {};
  props = select(props);
  for (var name in props) {
    if (props.hasOwnProperty(name) && props[name]) {
      var def = props[name];
      if (!onlyTextNodes && typeof def === "string") {
        out[name] = translate(def, intl2.scope, intl2.dictionary);
      } else if (def.type === Text) {
        def = assign({
          fallback: def.props.children
        }, def.props);
        out[name] = translate(def.id, intl2.scope, intl2.dictionary, def.fields, def.plural, def.fallback);
      }
    }
  }
  return out;
}
function Localizer(ref) {
  var children2 = ref.children;
  var ref$1 = F(IntlContext);
  var intl2 = ref$1.intl;
  return children2 && children2.length ? children2.map(function(child) {
    return B(child, translateMapping(child.props, intl2, true));
  }) : children2 && B(children2, translateMapping(children2.props, intl2, true));
}
function MarkupText(props) {
  return v(Localizer, null, v(Html, { html: v(Text, props), id: props.id }));
}
function Html(ref) {
  var html2 = ref.html;
  var id2 = ref.id;
  var value = !html2 ? html2 : typeof html2 === "string" ? v("span", { dangerouslySetInnerHTML: { __html: html2 } }) : v("span", null, html2);
  return v(HighlightI18N, { id: id2, value });
}
function withText(mapping) {
  return function withTextWrapper(Child) {
    function WithTextWrapper(props, context) {
      var ref = F(IntlContext);
      var intl2 = ref.intl;
      var map4 = typeof mapping === "function" ? mapping(props, { intl: intl2 }) : mapping;
      var translations = translateMapping(map4, intl2);
      return v(Child, assign(assign({}, props), translations));
    }
    WithTextWrapper.getWrappedComponent = Child && Child.getWrappedComponent || function() {
      return Child;
    };
    return WithTextWrapper;
  };
}
function useText(mapping) {
  var ref = F(IntlContext);
  var intl2 = ref.intl;
  return translateMapping(typeof mapping === "function" ? mapping({ intl: intl2 }) : mapping, intl2);
}
intl.intl = intl;
intl.IntlContext = IntlContext;
intl.IntlProvider = IntlProvider;
intl.Text = Text;
intl.MarkupText = MarkupText;
intl.Localizer = Localizer;
intl.withText = withText;
intl.useText = useText;
intl.translate = translate;

// packages/results2019-2020/src/i18n/fr.json
var language = "English";
var header = {
  title: "Recensement Cartographique",
  home: "Accueil",
  results: "R\xE9sultats",
  form: "Formulaire",
  lang: "English"
};
var home = {
  title: "Page d'accueil",
  content: "Pr\xE9sentation du projet..."
};
var results = {
  title: "R\xE9sultats",
  content: "Pr\xE9sentation des r\xE9sultats...",
  knobs: {
    title: "Options de visualisation",
    graphtype: "Type de graphique:",
    scatterplot: "nuage de points",
    density: "nuage de points avec courbe de densit\xE9",
    contourScatter: "nuage de points avec topographie",
    contour: "contour",
    colorContour: "topographie",
    heatmap: "heatmap",
    numbers: "d\xE9comptes",
    percentage: "pourcentage",
    revColor: "invers\xE9?",
    dotsize: "Taille des points",
    dotopacity: "Opacit\xE9 des points",
    colormid: "Courbe de couleur",
    color: "Coloration",
    chooseRespondents: "Afficher les r\xE9pondant.e.s provenants de...",
    selected: "s\xE9lectionn\xE9.e.s",
    custom: "Combiner des questions en un diagramme sur mesure",
    horizontal: "Axe horizontal",
    vertical: "Axe vertical",
    z: "3i\xE8me dimension",
    option: "choisissez une option",
    showdata: "Afficher les r\xE9ponses de",
    aga: "Sobey Art Award Exhibition, Art Gallery of Alberta, Edmonton, 5 octobre 2019 au 5 janvier 2020",
    ba: 'Expo "Positions", Galerie Bradley Ertaskiran, Montr\xE9al, 24 janvier au 7 mars 2020',
    engforms: "Formulaires anglais",
    frforms: "Formulaires fran\xE7ais",
    respondents: "r\xE9pondant.e.s",
    reset: "R\xE9initialiser",
    clickto: "Cliquez pour afficher / cacher",
    show: "afficher",
    hide: "cacher",
    questions: {
      "0": "D\xE9but / fin de ma vie",
      "1": "C'est facile / dur d'exister dans ce monde",
      "2": "La vie n'est que la vie / besoin de signification",
      "3": "Normes sociales universelles / culturelles",
      "4": "Jamais quitt\xE9 / me d\xE9place constamment",
      "5": "Profonde connexion / ne pense pas territoire",
      "6": "R\xE9alit\xE9 concr\xE8te / grandes abstractions",
      "7": "Je crois / ne crois pas l\xE9gitimit\xE9 ordre mondial",
      "8": "D\xE9finis identit\xE9 moi-m\xEAme / avec groupes",
      "9": "S'exposer m\xE8ne \xE0 tol\xE9rance / confrontation",
      "10": "Nous allons vers autodestruction / progr\xE8s",
      "11": "Impact cosmologique / aucun impact",
      "12": "D\xE9fendre l'\xE9conomie / prot\xE9ger la plan\xE8te",
      "13": "Donner ma vie / indiff\xE9rent.e",
      "14": "J'ai le pouvoir de changer / impuissant.e",
      "15": "Pragmatisme / id\xE9alisme",
      "16": "Questions biais\xE9es / \xE9quilibr\xE9es",
      "17": "Repr\xE9sente ma position / n'importe quoi"
    }
  },
  "back-to-top": "Remonter ",
  intro: "<h1>Enjeux existentiels:<br/>Exercice de cartographie</h1><p>Dans deux de mes r\xE9centes expositions, j'ai invit\xE9 les personnes pr\xE9sentes \xE0 prendre quelques minutes pour remplir un questionnaire comprenant une vari\xE9t\xE9 de questions existentielles. Les participant\xB7e\xB7s devaient indiquer leur position en tra\xE7ant un point sur une s\xE9rie de diagrammes.</p><h1>R\xE9sultats</h1><p>Au total, 1222 personnes ont rempli le questionnaire : 941 lors de l'exposition du \xABSobey Art Award Exhibition\xBB \xE0 la Art Gallery of Alberta, Edmonton (5 octobre 2019 au 5 janvier 2020) et 281 lors de mon exposition solo \xABPositions\xBB \xE0 la Galerie Bradley Ertaskiran, Montr\xE9al (24 janvier au 7 mars 2020).</p><p>Dans les graphiques en nuage de points ci-dessous, chaque point correspond \xE0 la r\xE9ponse d'un\xB7e participant\xB7e. Les questions apparaissent exactement comme sur le questionnaire original.</p>",
  "intro--link-p1": "Vous trouverez plus d\u2019informations sous les graphiques, ",
  "intro--link-p2": "en bas de la page",
  analysis: {
    graph1: "<p>Graphique 1</p><ul><li><strong>La plupart des r\xE9pondant\xB7e\xB7s se situent dans la premi\xE8re moiti\xE9 de leur vie et trouvent qu'il est plut\xF4t \xABfacile d'exister dans ce monde\xBB.</strong><li>Dans l'ensemble, environ un tiers (360 r\xE9pondants, soit 32%) trouvent qu\u2019il est plut\xF4t \xABdifficile d'exister dans ce monde\xBB.</ul>",
    graph2: "<h3>Graphique 2</h3><ul><li><strong>La grande majorit\xE9 des personnes interrog\xE9es</strong> (782 personnes, soit 66%) <strong>souhaitent que leur vie ait une signification au-del\xE0 de leur petite existence. </strong>Parmi ceux-ci, une majorit\xE9 pense que la moralit\xE9 et les normes sociales sont universelles.<li>Cependant, <strong>il n\u2019y a aucun consensus quant \xE0 la question de la moralit\xE9 et des normes sociales, \xE0 savoir si celles-ci sont \xABuniverselles\xBB ou \xABsubjectives et culturelles\xBB. </strong>Une tr\xE8s mince majorit\xE9 de r\xE9pondant\xB7e\xB7s (535, soit 45%) pensent que la moralit\xE9 est subjective et culturelle plut\xF4t qu'universelle (486, ou 41%), et une proportion significative est neutre ou ambivalente (146, ou 13%).</ul>",
    graph3: "<h3>Graphique 3</h3><ul><li>Il y a une forte concentration dans le quadrant sup\xE9rieur droit, o\xF9 <strong>une majorit\xE9 de r\xE9pondant\xB7e\xB7s</strong> (657, soit 56%) <strong>indiquent qu\u2019ils\xB7elles ressentent une profonde connexion avec le monde physique, et se d\xE9placent fr\xE9quemment sur de grandes distances.</strong></ul>",
    graph4: "<h3>Graphique 4</h3><ul><li><strong>Une nette majorit\xE9 de r\xE9pondant\xB7e\xB7s</strong> (665, soit 57%) <strong>n'accepte pas la l\xE9gitimit\xE9 de l'ordre mondial actuel.</strong> Parmi ce groupe, la plupart des r\xE9pondant\xB7e\xB7s (371) indiquent se soucier davantage des grandes questions et abstractions que de la r\xE9alit\xE9 tangible de la vie.<li>Dans l'ensemble, les r\xE9ponses sont dispers\xE9es sur tous les quadrants, et une grande proportion (332, soit 28%) est neutre ou ambivalente entre se soucier davantage de la \xABr\xE9alit\xE9 tangible de la vie\xBB ou des \xABgrandes questions et abstractions\xBB.</ul>",
    graph5: "<h3>Graphique 5</h3><ul><li><strong>Il y a une unanimit\xE9 quasi totale</strong> (1049 r\xE9pondant\xB7e\xB7s, soit 92%): <strong>s\u2019exposer \xE0 diff\xE9rents des syst\xE8mes de valeurs et croyances m\xE8ne \xE0 une plus grande tol\xE9rance et compr\xE9hension mutuelle.</strong><li>Une majorit\xE9 de r\xE9pondant\xB7e\xB7s (589 ou 51%) affirment d\xE9finir leur identit\xE9 et leurs convictions eux-m\xEAmes, mais beaucoup se d\xE9finissent aussi en rapport avec leurs groupes d\u2019appartenance (380, ou 33%), et une bonne proportion est neutre ou ambivalente (182 ou 16%).</ul>",
    graph6: "<h3>Graphique 6</h3><ul><li><strong>Il y a un fort consensus</strong> (938 r\xE9pondant\xB7e\xB7s, soit 83%): <strong>nous, humains vivant aujourd'hui, aurons un impact d'importance cosmologique pour l'avenir de l'humanit\xE9.</strong><li><strong>Une forte majorit\xE9</strong> (653 r\xE9pondant\xB7e\xB7s, soit 57%) <strong>estime que \xABnous allons vers l'autodestruction\xBB</strong>, tandis qu'une petite minorit\xE9 (266, soit 23%) estime que nous progressons constamment, et presque autant de r\xE9pondant\xB7e\xB7s (223, soit 20%) sont neutres ou ambivalent\xB7e\xB7s.</ul>",
    graph7: "<h3>Graphique 7</h3><ul><li><strong>Une forte majorit\xE9</strong> (847 r\xE9pondant\xB7e\xB7s, soit 75%) <strong>veut prot\xE9ger la plan\xE8te et r\xE9inventer un monde plus \xE9galitaire et, parmi cette majorit\xE9, la plupart des r\xE9pondant\xB7e\xB7s se disent pr\xEAt\xB7e\xB7s s \xE0 se consacrer \xE0 la cause.</strong><li>Une infime minorit\xE9 affirme \xEAtre fortement d\xE9termin\xE9e \xE0 d\xE9fendre \xABla propri\xE9t\xE9 priv\xE9e, l'\xE9conomie de libre march\xE9 et la libert\xE9 de l'individu\xBB (70 r\xE9pondant\xB7e\xB7s soit 6%). Une proportion plus importante est neutre ou ambivalente (161 r\xE9pondant\xB7e\xB7s, soit 15%).</ul>",
    graph8: "<h3>Graphique 8</h3><ul><li><strong>Les r\xE9ponses sont dispers\xE9es sur les quatre quadrants.</strong><li><strong>Une petite majorit\xE9 de personnes</strong> (586 r\xE9pondant\xB7e\xB7s, soit 51%) <strong>estime avoir le pouvoir de changer les choses au niveau structurel</strong>, alors qu\u2019environ un tiers se sent impuissant (386, soit 34%).<li>Une petite majorit\xE9 pense que l'id\xE9alisme est plus important que le pragmatisme, et un tiers de tous les r\xE9pondant\xB7e\xB7s (351, soit 31%) sont neutres ou ambivalent\xB7e\xB7s.</ul>",
    graph9: "<h3>Graphique 9</h3><ul><li>Heureusement, <strong>il y a un fort consensus parmi les r\xE9pondant\xB7e\xB7s</strong> (871, soit 76%): <strong>ils\xB7elles jugent que les questions \xE9taient plut\xF4t bien \xE9quilibr\xE9es et pertinentes, et que leurs r\xE9ponses repr\xE9sentent vraiment leur position face \xE0 ces enjeux.</strong><li>Une petite proportion de r\xE9pondant\xB7e\xB7s (100, soit 8%) juge les questions plut\xF4t biais\xE9es et / ou moralisatrices et / ou irritantes.<li>Une infime proportion affirme que leurs r\xE9ponses au questionnaire ne sont pas significatives (19 r\xE9pondant\xB7e\xB7s, soit moins de 2%).</ul>"
  },
  footer: {
    select: "Selectionner et suivre des r\xE9pondant\xB7e\xB7s",
    "select--body": "Vous pouvez dessiner un rectangle pour s\xE9lectionner certains r\xE9pondants et suivre leurs r\xE9ponses d'un graphique \xE0 l'autre. (Cette fonction n'est pas disponible sur les \xE9crans tactiles.)",
    analysis: "Analyse",
    "analysis--body": "<p>(Analyse des donn\xE9es par Group Leger Analytics, interpr\xE9tation compl\xE9mentaire et commentaires de Nicolas Grenier.)<h2>PARTIE I - VOUS</h2><h3>Graphique 1</h3><ul><li><strong>La plupart des r\xE9pondant\xB7e\xB7s se situent dans la premi\xE8re moiti\xE9 de leur vie et trouvent qu'il est plut\xF4t \xABfacile d'exister dans ce monde\xBB.</strong><li>Dans l'ensemble, environ un tiers (360 r\xE9pondants, soit 32%) trouvent qu\u2019il est plut\xF4t \xABdifficile d'exister dans ce monde\xBB.</ul><h3>Graphique 2</h3><ul><li><strong>La grande majorit\xE9 des personnes interrog\xE9es</strong> (782 personnes, soit 66%) <strong>souhaitent que leur vie ait une signification au-del\xE0 de leur petite existence. </strong>Parmi ceux-ci, une majorit\xE9 pense que la moralit\xE9 et les normes sociales sont universelles.<li>Cependant, <strong>il n\u2019y a aucun consensus quant \xE0 la question de la moralit\xE9 et des normes sociales, \xE0 savoir si celles-ci sont \xABuniverselles\xBB ou \xABsubjectives et culturelles\xBB. </strong>Une tr\xE8s mince majorit\xE9 de r\xE9pondant\xB7e\xB7s (535, soit 45%) pensent que la moralit\xE9 est subjective et culturelle plut\xF4t qu'universelle (486, ou 41%), et une proportion significative est neutre ou ambivalente (146, ou 13%).</ul><h2>PARTIE II - VOUS ET LE MONDE</h2><h3>Graphique 3</h3><ul><li>Il y a une forte concentration dans le quadrant sup\xE9rieur droit, o\xF9 <strong>une majorit\xE9 de r\xE9pondant\xB7e\xB7s</strong> (657, soit 56%) <strong>indiquent qu\u2019ils\xB7elles ressentent une profonde connexion avec le monde physique, et se d\xE9placent fr\xE9quemment sur de grandes distances.</strong></ul><h3>Graphique 4</h3><ul><li><strong>Une nette majorit\xE9 de r\xE9pondant\xB7e\xB7s</strong> (665, soit 57%) <strong>n'accepte pas la l\xE9gitimit\xE9 de l'ordre mondial actuel.</strong> Parmi ce groupe, la plupart des r\xE9pondant\xB7e\xB7s (371) indiquent se soucier davantage des grandes questions et abstractions que de la r\xE9alit\xE9 tangible de la vie.<li>Dans l'ensemble, les r\xE9ponses sont dispers\xE9es sur tous les quadrants, et une grande proportion (332, soit 28%) est neutre ou ambivalente entre se soucier davantage de la \xABr\xE9alit\xE9 tangible de la vie\xBB ou des \xABgrandes questions et abstractions\xBB.</ul><h3>Graphique 5</h3><ul><li><strong>Il y a une unanimit\xE9 quasi totale</strong> (1049 r\xE9pondant\xB7e\xB7s, soit 92%): <strong>s\u2019exposer \xE0 diff\xE9rents des syst\xE8mes de valeurs et croyances m\xE8ne \xE0 une plus grande tol\xE9rance et compr\xE9hension mutuelle.</strong><li>Une majorit\xE9 de r\xE9pondant\xB7e\xB7s (589 ou 51%) affirment d\xE9finir leur identit\xE9 et leurs convictions eux-m\xEAmes, mais beaucoup se d\xE9finissent aussi en rapport avec leurs groupes d\u2019appartenance (380, ou 33%), et une bonne proportion est neutre ou ambivalente (182 ou 16%).</ul><h2>PARTIE III - VOUS ET LE FUTURE</h2><h3>Graphique 6</h3><ul><li><strong>Il y a un fort consensus</strong> (938 r\xE9pondant\xB7e\xB7s, soit 83%): <strong>nous, humains vivant aujourd'hui, aurons un impact d'importance cosmologique pour l'avenir de l'humanit\xE9.</strong><li><strong>Une forte majorit\xE9</strong> (653 r\xE9pondant\xB7e\xB7s, soit 57%) <strong>estime que \xABnous allons vers l'autodestruction\xBB</strong>, tandis qu'une petite minorit\xE9 (266, soit 23%) estime que nous progressons constamment, et presque autant de r\xE9pondant\xB7e\xB7s (223, soit 20%) sont neutres ou ambivalent\xB7e\xB7s.</ul><h3>Graphique 7</h3><ul><li><strong>Une forte majorit\xE9</strong> (847 r\xE9pondant\xB7e\xB7s, soit 75%) <strong>veut prot\xE9ger la plan\xE8te et r\xE9inventer un monde plus \xE9galitaire et, parmi cette majorit\xE9, la plupart des r\xE9pondant\xB7e\xB7s se disent pr\xEAt\xB7e\xB7s s \xE0 se consacrer \xE0 la cause.</strong><li>Une infime minorit\xE9 affirme \xEAtre fortement d\xE9termin\xE9e \xE0 d\xE9fendre \xABla propri\xE9t\xE9 priv\xE9e, l'\xE9conomie de libre march\xE9 et la libert\xE9 de l'individu\xBB (70 r\xE9pondant\xB7e\xB7s soit 6%). Une proportion plus importante est neutre ou ambivalente (161 r\xE9pondant\xB7e\xB7s, soit 15%).</ul><h3>Graphique 8</h3><ul><li><strong>Les r\xE9ponses sont dispers\xE9es sur les quatre quadrants.</strong><li><strong>Une petite majorit\xE9 de personnes</strong> (586 r\xE9pondant\xB7e\xB7s, soit 51%) <strong>estime avoir le pouvoir de changer les choses au niveau structurel </strong>, alors qu\u2019environ un tiers se sent impuissant (386, soit 34%).<li>Une petite majorit\xE9 pense que l'id\xE9alisme est plus important que le pragmatisme, et un tiers de tous les r\xE9pondant\xB7e\xB7s (351, soit 31%) sont neutres ou ambivalent\xB7e\xB7s.</ul><h2>VOUS ET CET EXERCICE</h2><h3>Graphique 9</h3><ul><li>Heureusement, <strong>il y a un fort consensus parmi les r\xE9pondant\xB7e\xB7s</strong> (871, soit 76%): <strong>ils\xB7elles jugent que les questions \xE9taient plut\xF4t bien \xE9quilibr\xE9es et pertinentes, et que leurs r\xE9ponses repr\xE9sentent vraiment leur position face \xE0 ces enjeux.</strong><li>Une petite proportion de r\xE9pondant\xB7e\xB7s (100, soit 8%) juge les questions plut\xF4t biais\xE9es et / ou moralisatrices et / ou irritantes.<li>Une infime proportion affirme que leurs r\xE9ponses au questionnaire ne sont pas significatives (19 r\xE9pondant\xB7e\xB7s, soit moins de 2%).</ul>",
    objectives: "Objectifs",
    "objectives--body": "<p>L\u2019objectif de ce projet n\u2019\xE9tait pas d\u2019obtenir des r\xE9sultats pour les publier, mais plut\xF4t d\u2019inclure comme partie int\xE9grante des expositions une exp\xE9rience active de questionnement.</p><p>La structure sch\xE9matique du questionnaire refl\xE8te certaines de mes peintures. Je voulais cr\xE9er une exp\xE9rience dans laquelle les visiteurs\xB7euses pourraient se plonger dans les \u0153uvres non seulement en regardant, mais aussi en se positionnant par rapport aux m\xEAmes enjeux existentiels que j\u2019aborde dans mon travail. Prendre position implique de choisir ceci plut\xF4t que cela, ce qui n\xE9cessite une forme de mesure. Mais un cadre quantitatif est intrins\xE8quement inappropri\xE9 pour m\xE9diter sur des notions qualitatives telles que la moralit\xE9 ou le progr\xE8s. J\u2019ai donc utilis\xE9 un plan cart\xE9sien avec axes X et Y (pour la simplicit\xE9 et familiarit\xE9), mais d\xE9lib\xE9r\xE9ment \xE9vit\xE9 de pr\xE9senter des grilles, chiffres ou m\xE9triques pr\xE9cis. Je ne voulais pas que l\u2019accent soit mis sur la quantification, mais sur la navigation \u2014 je voulais que les participants naviguent \xE0 travers diff\xE9rents enjeux mis en relation les uns avec les autres et trouvent leur propre position aussi intuitivement que possible. C'est pourquoi ce questionnaire, contrairement \xE0 la plupart des sondages ou enqu\xEAtes, \xE9vitait d\xE9lib\xE9r\xE9ment tout ce qui peut \xEAtre mesur\xE9 objectivement, comme l'\xE2ge, le revenu, l'origine ethnique, et toute question \xE0 laquelle on peut r\xE9pondre par oui ou non. Le but \xE9tait d'essayer de concr\xE9tiser, m\xEAme modestement, la structure dans laquelle nous consid\xE9rons les grandes questions existentielles. Plonger les r\xE9pondant\xB7e\xB7s dans cette exp\xE9rience \xE9tait l'essence m\xEAme du projet.</p><p>Bien s\xFBr, des critiques l\xE9gitimes peuvent \xEAtre formul\xE9es sur plusieurs aspects du projet : la nature binaire des questions, le choix des th\xE8mes, mes propres pr\xE9jug\xE9s en tant qu'homme blanc, la difficult\xE9 \xE0 aborder de si grands enjeux avec honn\xEAtet\xE9, et la tendance de ces questions \xE0 ramener les vieux pi\xE8ges de l'universalisme. Malgr\xE9 ces d\xE9fauts, beaucoup plus de personnes que je ne le pensais ont pris le temps de compl\xE9ter le questionnaire et m\u2019ont transmis des commentaires positifs, ce qui, pour moi, indique que l'exp\xE9rience pourrait \xEAtre pouss\xE9e plus loin. J'esp\xE8re d\xE9velopper un questionnaire o\xF9 les r\xE9pondants pourraient donner des r\xE9ponses multidimensionnelles, exprimer des positions contradictoires, critiquer les questions, etc. Il me semble pertinent de d\xE9velopper des alternatives exp\xE9rimentales aux syst\xE8mes de mesure conventionnels et de voir ce que l'on peut faire avec de telles m\xE9thodes.</p>",
    comments: "Commentaires laiss\xE9s par les r\xE9pondant\xB7e\xB7s",
    "comments--body": "<p>Un espace \xE0 la fin du questionnaire permettait de laisser, de fa\xE7on optionnelle, des commentaires.</p><p>Environ 10 \xE0 15% des r\xE9pondants ont laiss\xE9 un commentaire. Voici une liste non-exhaustive des commentaires re\xE7us. Les commentaires les plus r\xE9p\xE9titifs (\xABtr\xE8s int\xE9ressant\xBB, \xABbravo pour la belle expo\xBB, etc.) ont \xE9t\xE9 enlev\xE9s, et certains commentaires ont \xE9t\xE9 condens\xE9s ou abr\xE9g\xE9s durant la transcription.</p>",
    "comments--montreal": "Montr\xE9al",
    considerations: "Consid\xE9rations",
    "considerations--body": "<h2>Extras : dessins, lignes et autres</h2><p>Environ 5 \xE0 10% des questionnaires comprenaient des marques autres que des points. Malheureusement, pour des raisons d\u2019un pragmatisme d\xE9solant (temps et budget), il est impossible de reproduire tout cela ici.<p>Dans la majorit\xE9 des cas, il s\u2019agit d\u2019un ou plusieurs points additionnels, d\u2019une ou plusieurs lignes, ou d\u2019une forme englobant une zone d\u2019une des cartes. Parfois (dans environ 1 ou 2 % des cas), il s\u2019agit d\u2019un dessin ou d\u2019une inscription. En g\xE9n\xE9ral, lorsque c\u2019\xE9tait possible, nous avons simplement consid\xE9r\xE9 l\u2019emplacement de ces marques sur le graphique comme s\u2019il s\u2019agissait d\u2019un point.<p>Dans presque tous les cas, ces marques expriment clairement la volont\xE9 de ne pas se limiter \xE0 la logique cart\xE9sienne et \xE0 une r\xE9ponse unique, qui appara\xEEt comme r\xE9ductrice. Cette critique revient \xE9galement dans les commentaires.<h2>Pourquoi y a-t-il autant de points au centre ?</h2><p>En moyenne, 5,5% de toutes les r\xE9ponses se trouvent au centre des graphiques (entre 3% et 11%, d\u2019un graphique \xE0 l\u2019autre), ce qui n\u2019est pas autant que ce qu\u2019on pourrait croire au premier coup d\u2019\u0153il. Toutefois, cela demeure significatif.<p>Compte tenu de la structure des graphiques avec un axe X / Y et de la nature existentielle des questions, le centre a probablement \xE9t\xE9 utilis\xE9 comme position par d\xE9faut pour exprimer la neutralit\xE9 et / ou l'ambivalence et / ou la position r\xE9elle dans laquelle les r\xE9pondants se per\xE7oivent et / ou une fa\xE7on d'exprimer \xABaucune de ces r\xE9ponses\xBB ou \xABtoutes ces r\xE9ponses\xBB. (Parmi les r\xE9pondant\xB7e\xB7s qui ont laiss\xE9 des commentaires dans le questionnaire, plusieurs ont \xE9crit qu'un seul point ne pouvait exprimer correctement leur position.)<h2>Cat\xE9gories de r\xE9pondants</h2><p><strong>Cette analyse est pour l\u2019ensemble des r\xE9pondant\xB7e\xB7s.</strong> Dans l\u2019ensemble, il n\u2019y a pas de diff\xE9rences majeures entre les r\xE9ponses des populations de Montr\xE9al et d\u2019Edmonton, ni entre les francophones et les anglophones. Toutefois, pour comparer les diff\xE9rentes cat\xE9gories de r\xE9pondant\xB7e\xB7s (Edmonton ou Montr\xE9al, questionnaires en fran\xE7ais ou en anglais), allez dans \xABOptions de visualisation\xBB, cliquez \xABAffichez les r\xE9pondant\xB7e\xB7s provenant de\u2026\xBB et choisissez les groupes que vous voulez.<p>Les personnes ayant rempli ce questionnaire sont des adeptes des mus\xE9es et des galeries et, \xE0 ce titre, ne sont pas n\xE9cessairement repr\xE9sentatifs de la population g\xE9n\xE9rale.<h2>P\xE9riode vis\xE9e</h2><p>Il faut noter que les derniers questionnaires furent d\xE9pos\xE9s le 7 mars 2020, tout juste une semaine avant que la pand\xE9mie ne change nos vies. (Dans quelle mesure les r\xE9ponses seraient-elles diff\xE9rentes si l'enqu\xEAte devait \xEAtre men\xE9e aujourd\u2019hui ? Compte tenu de la nature du questionnaire, la pand\xE9mie serait-elle davantage une distraction ou modifierait-elle fondamentalement la fa\xE7on dont les gens per\xE7oivent ces enjeux ?)<h2>Repr\xE9sentation des points</h2><p>Afin de mieux montrer chaque point sur les graphiques en nuage de points, un algorithme a \xE9t\xE9 appliqu\xE9 afin de s\xE9parer l\xE9g\xE8rement les points les uns des autres. (Par exemple, si 35 r\xE9pondant\xB7e\xB7s ont plac\xE9 un point exactement au centre, ces points sont ici pr\xE9sent\xE9s non pas comme un point unique mais comme un groupe de points.)<h2>Attention aux chiffres</h2><p>La raison d\u2019\xEAtre de ce questionnaire est avant tout d\u2019exister visuellement, et de remettre en question la fa\xE7on dont on consid\xE8re les enjeux de nature qualitative. Nous vivons dans un monde ax\xE9 sur les donn\xE9es, o\xF9 les chiffres sont souvent utilis\xE9s pour cr\xE9er un sentiment de connaissance, d\u2019expertise ou de pr\xE9visibilit\xE9 qui cache l'incertitude fondamentale et radicale qui d\xE9finit la condition humaine. Ici, nous avons essay\xE9 d'\xE9quilibrer l'utilisation des chiffres et des \xE9l\xE9ments visuels pour vous donner le meilleur portrait possible des r\xE9sultats. Mais les chiffres ne peuvent vous donner qu'un portrait simplifi\xE9 ; reportez-vous toujours aux graphiques en nuage de points pour interpr\xE9ter les chiffres.",
    contact: "Contact et commentaires",
    "contact--body": "Pour tout question, commentaire ou autre, merci de m'\xE9crire \xE0 grenier.nicolas@gmail.com",
    acknowledgements: "Remerciements",
    "acknowledgements--body": "<p>Le questionnaire a \xE9t\xE9 con\xE7u avec l'aide de <strong>Tyson Atkings, David Elliott</strong> et <strong>Chantal Gevrey</strong>.<p>Les questionnaires furent collect\xE9s gr\xE2ce \xE0 l\u2019\xE9quipe de la <strong>Art Gallery of Alberta</strong> (merci \xE0 la commissaire <strong>Lindsey Sharman</strong>) et \xE0 l\u2019\xE9quipe de la <strong>Galerie Bradley Ertaskiran</strong> (merci \xE0 <strong>Soad Carrier</strong>, <strong>C\xE9cile Bert\xE9vas</strong>, <strong>Mark Lowe</strong>, <strong>Russell Banx</strong>, <strong>Megan Bradley</strong> et <strong>Antoine Ertaskiran</strong>).<p>Les donn\xE9es re\xE7ues sur les questionnaires papier ont \xE9t\xE9 compil\xE9es par <strong>Loucas Braconnier</strong>, avec l'aide de <strong>William Sabourin</strong>, <strong>Sarah Boutin</strong> et <strong>Mathieu Reed</strong>.<p>L'analyse des donn\xE9es a \xE9t\xE9 r\xE9alis\xE9e par <strong>Bich Tran</strong> et <strong>Am\xE9lie B\xE9riault-Poirier</strong> du <strong>Group Leger Analytics</strong>.<p>Cette interface pour la visualisation des donn\xE9es a \xE9t\xE9 construite par <strong>Nicolas Epstein</strong>.<h1 style='margin-top: 3rem;'>Le projet a \xE9t\xE9 rendu possible gr\xE2ce au soutien de:<h1>"
  },
  customgraph: "Carte sur mesure",
  part: "Partie",
  part1: {
    title: "Vous"
  },
  part2: {
    title: "Vous et le monde",
    description: "<p>Pensez au territoire o\xF9 vous avez grandi. Pensez \xE0 ses propri\xE9t\xE9s physiques naturelles: montagnes, vall\xE9es, plaines, for\xEAts, milieux humides, rivi\xE8res, lacs, mer, d\xE9sert, etc. Imaginez ensuite ce territoire en rapport avec la totalit\xE9 des espaces physiques de la plan\xE8te.</p><p>Dans votre vie, jusqu'\xE0 quel point avez-vous appris \xE0 conna\xEEtre le monde physique?</p>"
  },
  part3: {
    title: "Vous et le futur",
    description: "<p>Essayez de vous repr\xE9senter la totalit\xE9 des activit\xE9s humaines se d\xE9roulant sur la plan\xE8te aujourd'hui.</p><p>Croyez-vous que l'humanit\xE9 dans son ensemble se dirige dans une bonne direction, align\xE9e sur une vision coh\xE9rente pour le futur?</p>"
  },
  part4: {
    title: "Vous et cet exercice"
  },
  savebtn: "T\xE9l\xE9charger l'image"
};
var form = {
  title: "Formulaire",
  presentation: "Cet exercice est une sorte de questionnaire dans lequel je vous demande d'indiquer votre position sur une s\xE9rie de diagrammes, en rapport avec une vari\xE9t\xE9 de questions subjectives. Je pr\xE9vois rassembler toutes les r\xE9ponses que je collecterai dans une publication. Vos r\xE9ponses seront anonymes.<br/>Dans chaque diagramme, tentez de voir o\xF9 vous vous situez sur les \xE9chelles verticales et horizontales. Indiquez le ou les endroits o\xF9 ces valeurs se croisent en tra\xE7ant un point.",
  "lang-select": "Langue",
  part: "Partie",
  demo: {
    description: "",
    top: "L'identit\xE9 de genre est une construction sociale \xE0 100%",
    bottom: "L'identit\xE9 de genre est biologique \xE0 100%",
    left: "Homme",
    right: "Femme"
  },
  submit: "Soumettre"
};
var graph = {
  instructions: "<ol><li>Indiquer votre position en mettant un point \xE0 l'intersection des axes X et Y qui correspond \xE0 votre position.</li><li>Si un point unique ne repr\xE9sente pas l'esprit de votre position, vous pouvez ajouter un ou plusieurs autres points afin d'exprimer autrement votre position.</li><li>Utilisez les curseurs situ\xE9s sous le graphique afin de nuancer davantage votre r\xE9ponse.</li><ol>",
  connectcheckbox: "Connecter les points?",
  confidenceslider: {
    before: "Ma position est floue",
    after: "Ma position est claire et nette"
  },
  fuckoffSlider: {
    before: "\xC7a va comme \xE7a",
    after: "Fuck cette question"
  },
  removepoint: "Retirer un point",
  reset: "R\xE9initialiser",
  position: "Position: x = {{x}}, y = {{y}}",
  size: "Taille"
};
var questions = {
  "Beginning / end of my life": {
    en: {
      start: "Beginning of my life",
      end: "End of my life"
    },
    fr: {
      start: "D\xE9but de ma vie",
      end: "Fin de ma vie"
    }
  },
  "It's easy / hard to live in this world": {
    en: {
      start: "It's hard for me to exist in the world",
      end: "It's easy for me to exist in this world"
    },
    fr: {
      start: "C'est dur pour moi d'exister dans ce monde",
      end: "C'est facile pour moi d'exister dans ce monde"
    }
  },
  "Life is just life / part of larger whole": {
    en: {
      start: "Life is just life, there is no greater meaning to be found",
      end: "I want my life to be part of a larger whole, of something that has meaning beyond my small existence"
    },
    fr: {
      start: "La vie n\u2019est que ce qu\u2019elle est, il n\u2019y a pas de signification transcendante \xE0 y chercher",
      end: "J\u2019ai besoin que ma vie soit reli\xE9e \xE0 quelque chose de plus grand, qui ait une signification au-del\xE0 de ma petite existence"
    }
  },
  "Morality is universal / subjective": {
    en: {
      start: "Nothing is inherently good or bad, morality is completely subjective and cultural",
      end: "Morality and social norms are human universals"
    },
    fr: {
      start: "Rien n'est fondamentalement bien ou mal, la moralit\xE9 est subjective et culturelle",
      end: "La moralit\xE9 et les normes sociales sont universelles"
    }
  },
  "I never left / I keep moving": {
    en: {
      start: "I never left the place where I was born",
      end: "I constantly keep moving far and wide"
    },
    fr: {
      start: "Je n'ai jamais quitt\xE9 mon lieu de naissance",
      end: "Je me d\xE9place constamment, sur de grandes distances"
    }
  },
  "Deep connection / never think about land": {
    en: {
      start: "I never even think about the land",
      end: "I have a deep connection with the land and I can feel the vastness of the physical world in my bones"
    },
    fr: {
      start: "Je n'ai jamais pens\xE9 au territoire physique o\xF9 je me trouve",
      end: "J'ai une profonde connexion avec le monde physique, j'en ressens l'immensit\xE9 dans mes tripes"
    }
  },
  "I care only about concrete / abstractions": {
    en: {
      start: "I care only about the concrete and tangible reality of life",
      end: "I care only about the larger questions and abstractions"
    },
    fr: {
      start: "Je me pr\xE9occupe exclusivement de la r\xE9alit\xE9 concr\xE8te et tangible de la vie",
      end: "Je me pr\xE9occupe exclusivement des grandes questions et abstractions"
    }
  },
  "I accept / I don't believe world order": {
    en: {
      start: "I don't believe in the legitimacy of the current world order",
      end: "I accept the legitimacy of the current world order, with its borders, states, nations, etc."
    },
    fr: {
      start: "Je ne crois pas en la l\xE9gitimit\xE9 de l'ordre mondial actuel",
      end: "J'accepte la l\xE9gitimit\xE9 de l'ordre mondial actuel, avec ses fronti\xE8res, \xE9tats, nations, etc."
    }
  },
  "I define myself / in relation to groups": {
    en: {
      start: "I define myself and my convictions on my own, not in relation to any group",
      end: "I define myself and my convictions in relation to groups with which I identify"
    },
    fr: {
      start: "Je d\xE9finis mon identit\xE9 et mes convictions par moi-m\xEAme",
      end: "Je d\xE9finis mon identit\xE9 et mes convictions en rapport avec les groupes auxquelles j'appartiens"
    }
  },
  "Exposure leads to tolerance / violence": {
    en: {
      start: "Exposure to different beliefs and value systems leads to confusion / confrontation / violence",
      end: "Exposure to different beliefs and value systems leads to increased tolerance and mutual understanding"
    },
    fr: {
      start: "S'exposer \xE0 diff\xE9remts syst\xE8mes de valeurs et croyance m\xE8ne \xE0 la confusion / confrontation / violence",
      end: "S'exposer \xE0 diff\xE9rents syst\xE8mes de valeurs et croyances m\xE8ne \xE0 une plus grande tol\xE9rance et \xE0 une compr\xE9hension mutuelle"
    }
  },
  "Going toward self-destruction / progress": {
    en: {
      start: "We're moving towards self-destruction",
      end: "We're making constant progress"
    },
    fr: {
      start: "Nous allons vers l'autodestruction",
      end: "Nous progressons constamment"
    }
  },
  "Impact on future of humanity / no impact": {
    en: {
      start: "We, humans living today, will have no impact whatsoever on the future of humanity",
      end: "We, humans living today, will have an impact of cosmological importance for the future of humanity"
    },
    fr: {
      start: "Nous, humains vivant aujourd'hui, n'aurons absolument aucun impact sur le futur de l'humanit\xE9",
      end: "Nous, humains vivant aujourd'hui, aurons un impact d'une importance cosmologique pour le futur de l'humanit\xE9"
    }
  },
  "We need individual / egalitarian world": {
    en: {
      start: "We need to fight the establishment and create a new vision to defend private property, the free market economy and the freedom of the individual",
      end: "We need to fight the establishment and create a radically new vision to protect our planet and reinvent a more egalitarian world"
    },
    fr: {
      start: "Nous devons combattre le pouvoir dominant et cr\xE9er une nouvelle vision pour d\xE9fendre la propri\xE9t\xE9 priv\xE9e, l'\xE9conomie de libre march\xE9 et la libert\xE9 de l'individu",
      end: "Nous devons combattre le pouvoir dominant et cr\xE9er une vision radicalement nouvelle afin de prot\xE9ger la plan\xE8te et de r\xE9inventer un monde plus \xE9galitaire"
    }
  },
  "I'm ready to give my life / I don't care": {
    en: {
      start: "I don't care",
      end: "I'm ready to give my life for this"
    },
    fr: {
      start: "Je suis totalement indiff\xE9rent.e",
      end: "Je suis pr\xEAt.e \xE0 donner ma vie pour la cause"
    }
  },
  "Pragmatism / Idealism": {
    en: {
      start: "Pragmatism is more important",
      end: "Idealism is more important"
    },
    fr: {
      start: "Le pragmatisme est plus important",
      end: "L'id\xE9alisme est plus important"
    }
  },
  "I have power / feel powerless": {
    en: {
      start: "I feel powerless",
      end: "I have the power to change things on a structural level"
    },
    fr: {
      start: "Je suis impuissant.e",
      end: "J'ai le pouvoir de changer les choses sur le plan structurel"
    }
  },
  "Questions annoying / well balanced": {
    en: {
      start: "I found the questions biased and/or moralizing and/or annoying",
      end: "I thought the questions were relevant and well balanced"
    },
    fr: {
      start: "J'ai trouv\xE9 les questions biais\xE9es et/ou moralisatrices et/ou irritantes",
      end: "J'ai trouv\xE9 les questions pertinentes et bien \xE9quilibr\xE9es"
    }
  },
  "My answers represent / it means nothing": {
    en: {
      start: "I answered randomly, it means nothing",
      end: "My answers truly represent how I feel about these issues"
    },
    fr: {
      start: "J'ai r\xE9pondu n'importe quoi, \xE7a ne veut rien dire",
      end: "Mes r\xE9ponses expriment parfaitement ma position face \xE0 ces enjeux"
    }
  }
};
var fr_default = {
  language,
  header,
  home,
  results,
  form,
  graph,
  questions
};

// packages/results2019-2020/src/context/language-context.jsx
function getDefinition(lang) {
  return lang === "fr" ? fr_default : {};
}
var userLang = typeof navigator !== "undefined" ? navigator.language.slice(0, 2) === "fr" ? "fr" : "en" : "en";
var Language = D();
function LanguageContextProvider({ children: children2 }) {
  let [definition, setDefinition] = l2(getDefinition(userLang));
  function swapLang(lang) {
    if (lang == null) {
      userLang = userLang === "en" ? "fr" : "en";
    } else {
      userLang = lang;
    }
    setDefinition(getDefinition(userLang));
  }
  return /* @__PURE__ */ v(IntlProvider, {
    definition
  }, /* @__PURE__ */ v(Language.Provider, {
    value: { userLang, swapLang }
  }, children2));
}
function useLanguageContext() {
  const context = F(Language);
  if (context == null) {
    throw new Error("useLanguageContext must be used with a LanguageContextProvider");
  }
  return context;
}

// packages/results2019-2020/src/context/mobile-context.jsx
init_preact_module();
var mobileCheck = function() {
  if (typeof navigator !== "undefined" && typeof window !== "undefined") {
    return function(a6) {
      return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a6) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a6.substr(0, 4));
    }(navigator.userAgent || navigator.vendor || window.opera);
  }
};
var MobileContext = D();
function MobileContextProvider({ children: children2 }) {
  const isMobileClient = mobileCheck();
  return /* @__PURE__ */ v(MobileContext.Provider, {
    value: isMobileClient
  }, children2);
}
function useMobileContext() {
  const context = F(MobileContext);
  if (context == null && typeof window !== "undefined")
    throw new Error("useMobileContext must be used with a MobileContextProvider");
  return context;
}

// packages/results2019-2020/src/components/results.jsx
init_preact_module();

// packages/results2019-2020/src/asyncReducer.js
var import_lodash2 = __toESM(require_lodash());
var import_lodash3 = __toESM(require_lodash2());

// node_modules/d3/index.js
var d3_exports = {};
__export(d3_exports, {
  Adder: () => Adder,
  Delaunay: () => Delaunay,
  FormatSpecifier: () => FormatSpecifier,
  InternMap: () => InternMap,
  InternSet: () => InternSet,
  Voronoi: () => Voronoi,
  active: () => active_default,
  arc: () => arc_default,
  area: () => area_default5,
  areaRadial: () => areaRadial_default,
  ascending: () => ascending_default,
  autoType: () => autoType,
  axisBottom: () => axisBottom,
  axisLeft: () => axisLeft,
  axisRight: () => axisRight,
  axisTop: () => axisTop,
  bin: () => bin_default,
  bisect: () => bisect_default,
  bisectCenter: () => bisectCenter,
  bisectLeft: () => bisectLeft,
  bisectRight: () => bisectRight,
  bisector: () => bisector_default,
  blob: () => blob_default,
  brush: () => brush_default,
  brushSelection: () => brushSelection,
  brushX: () => brushX,
  brushY: () => brushY,
  buffer: () => buffer_default,
  chord: () => chord_default,
  chordDirected: () => chordDirected,
  chordTranspose: () => chordTranspose,
  cluster: () => cluster_default,
  color: () => color,
  contourDensity: () => density_default,
  contours: () => contours_default,
  count: () => count,
  create: () => create_default,
  creator: () => creator_default,
  cross: () => cross,
  csv: () => csv2,
  csvFormat: () => csvFormat,
  csvFormatBody: () => csvFormatBody,
  csvFormatRow: () => csvFormatRow,
  csvFormatRows: () => csvFormatRows,
  csvFormatValue: () => csvFormatValue,
  csvParse: () => csvParse,
  csvParseRows: () => csvParseRows,
  cubehelix: () => cubehelix,
  cumsum: () => cumsum,
  curveBasis: () => basis_default2,
  curveBasisClosed: () => basisClosed_default2,
  curveBasisOpen: () => basisOpen_default,
  curveBumpX: () => bumpX,
  curveBumpY: () => bumpY,
  curveBundle: () => bundle_default,
  curveCardinal: () => cardinal_default,
  curveCardinalClosed: () => cardinalClosed_default,
  curveCardinalOpen: () => cardinalOpen_default,
  curveCatmullRom: () => catmullRom_default,
  curveCatmullRomClosed: () => catmullRomClosed_default,
  curveCatmullRomOpen: () => catmullRomOpen_default,
  curveLinear: () => linear_default,
  curveLinearClosed: () => linearClosed_default,
  curveMonotoneX: () => monotoneX,
  curveMonotoneY: () => monotoneY,
  curveNatural: () => natural_default,
  curveStep: () => step_default,
  curveStepAfter: () => stepAfter,
  curveStepBefore: () => stepBefore,
  descending: () => descending_default,
  deviation: () => deviation,
  difference: () => difference,
  disjoint: () => disjoint,
  dispatch: () => dispatch_default,
  drag: () => drag_default,
  dragDisable: () => nodrag_default,
  dragEnable: () => yesdrag,
  dsv: () => dsv,
  dsvFormat: () => dsv_default,
  easeBack: () => backInOut,
  easeBackIn: () => backIn,
  easeBackInOut: () => backInOut,
  easeBackOut: () => backOut,
  easeBounce: () => bounceOut,
  easeBounceIn: () => bounceIn,
  easeBounceInOut: () => bounceInOut,
  easeBounceOut: () => bounceOut,
  easeCircle: () => circleInOut,
  easeCircleIn: () => circleIn,
  easeCircleInOut: () => circleInOut,
  easeCircleOut: () => circleOut,
  easeCubic: () => cubicInOut,
  easeCubicIn: () => cubicIn,
  easeCubicInOut: () => cubicInOut,
  easeCubicOut: () => cubicOut,
  easeElastic: () => elasticOut,
  easeElasticIn: () => elasticIn,
  easeElasticInOut: () => elasticInOut,
  easeElasticOut: () => elasticOut,
  easeExp: () => expInOut,
  easeExpIn: () => expIn,
  easeExpInOut: () => expInOut,
  easeExpOut: () => expOut,
  easeLinear: () => linear2,
  easePoly: () => polyInOut,
  easePolyIn: () => polyIn,
  easePolyInOut: () => polyInOut,
  easePolyOut: () => polyOut,
  easeQuad: () => quadInOut,
  easeQuadIn: () => quadIn,
  easeQuadInOut: () => quadInOut,
  easeQuadOut: () => quadOut,
  easeSin: () => sinInOut,
  easeSinIn: () => sinIn,
  easeSinInOut: () => sinInOut,
  easeSinOut: () => sinOut,
  every: () => every,
  extent: () => extent_default,
  fcumsum: () => fcumsum,
  filter: () => filter,
  forceCenter: () => center_default,
  forceCollide: () => collide_default,
  forceLink: () => link_default,
  forceManyBody: () => manyBody_default,
  forceRadial: () => radial_default,
  forceSimulation: () => simulation_default,
  forceX: () => x_default2,
  forceY: () => y_default2,
  format: () => format,
  formatDefaultLocale: () => defaultLocale,
  formatLocale: () => locale_default,
  formatPrefix: () => formatPrefix,
  formatSpecifier: () => formatSpecifier,
  fsum: () => fsum,
  geoAlbers: () => albers_default,
  geoAlbersUsa: () => albersUsa_default,
  geoArea: () => area_default2,
  geoAzimuthalEqualArea: () => azimuthalEqualArea_default,
  geoAzimuthalEqualAreaRaw: () => azimuthalEqualAreaRaw,
  geoAzimuthalEquidistant: () => azimuthalEquidistant_default,
  geoAzimuthalEquidistantRaw: () => azimuthalEquidistantRaw,
  geoBounds: () => bounds_default,
  geoCentroid: () => centroid_default,
  geoCircle: () => circle_default,
  geoClipAntimeridian: () => antimeridian_default,
  geoClipCircle: () => circle_default2,
  geoClipExtent: () => extent_default3,
  geoClipRectangle: () => clipRectangle,
  geoConicConformal: () => conicConformal_default,
  geoConicConformalRaw: () => conicConformalRaw,
  geoConicEqualArea: () => conicEqualArea_default,
  geoConicEqualAreaRaw: () => conicEqualAreaRaw,
  geoConicEquidistant: () => conicEquidistant_default,
  geoConicEquidistantRaw: () => conicEquidistantRaw,
  geoContains: () => contains_default2,
  geoDistance: () => distance_default,
  geoEqualEarth: () => equalEarth_default,
  geoEqualEarthRaw: () => equalEarthRaw,
  geoEquirectangular: () => equirectangular_default,
  geoEquirectangularRaw: () => equirectangularRaw,
  geoGnomonic: () => gnomonic_default,
  geoGnomonicRaw: () => gnomonicRaw,
  geoGraticule: () => graticule,
  geoGraticule10: () => graticule10,
  geoIdentity: () => identity_default5,
  geoInterpolate: () => interpolate_default2,
  geoLength: () => length_default,
  geoMercator: () => mercator_default,
  geoMercatorRaw: () => mercatorRaw,
  geoNaturalEarth1: () => naturalEarth1_default,
  geoNaturalEarth1Raw: () => naturalEarth1Raw,
  geoOrthographic: () => orthographic_default,
  geoOrthographicRaw: () => orthographicRaw,
  geoPath: () => path_default2,
  geoProjection: () => projection,
  geoProjectionMutator: () => projectionMutator,
  geoRotation: () => rotation_default,
  geoStereographic: () => stereographic_default,
  geoStereographicRaw: () => stereographicRaw,
  geoStream: () => stream_default,
  geoTransform: () => transform_default,
  geoTransverseMercator: () => transverseMercator_default,
  geoTransverseMercatorRaw: () => transverseMercatorRaw,
  gray: () => gray,
  greatest: () => greatest,
  greatestIndex: () => greatestIndex,
  group: () => group,
  groupSort: () => groupSort,
  groups: () => groups,
  hcl: () => hcl,
  hierarchy: () => hierarchy,
  histogram: () => bin_default,
  hsl: () => hsl,
  html: () => html,
  image: () => image_default,
  index: () => index,
  indexes: () => indexes,
  interpolate: () => value_default,
  interpolateArray: () => array_default2,
  interpolateBasis: () => basis_default,
  interpolateBasisClosed: () => basisClosed_default,
  interpolateBlues: () => Blues_default,
  interpolateBrBG: () => BrBG_default,
  interpolateBuGn: () => BuGn_default,
  interpolateBuPu: () => BuPu_default,
  interpolateCividis: () => cividis_default,
  interpolateCool: () => cool,
  interpolateCubehelix: () => cubehelix_default,
  interpolateCubehelixDefault: () => cubehelix_default2,
  interpolateCubehelixLong: () => cubehelixLong,
  interpolateDate: () => date_default,
  interpolateDiscrete: () => discrete_default,
  interpolateGnBu: () => GnBu_default,
  interpolateGreens: () => Greens_default,
  interpolateGreys: () => Greys_default,
  interpolateHcl: () => hcl_default,
  interpolateHclLong: () => hclLong,
  interpolateHsl: () => hsl_default,
  interpolateHslLong: () => hslLong,
  interpolateHue: () => hue_default,
  interpolateInferno: () => inferno,
  interpolateLab: () => lab2,
  interpolateMagma: () => magma,
  interpolateNumber: () => number_default2,
  interpolateNumberArray: () => numberArray_default,
  interpolateObject: () => object_default,
  interpolateOrRd: () => OrRd_default,
  interpolateOranges: () => Oranges_default,
  interpolatePRGn: () => PRGn_default,
  interpolatePiYG: () => PiYG_default,
  interpolatePlasma: () => plasma,
  interpolatePuBu: () => PuBu_default,
  interpolatePuBuGn: () => PuBuGn_default,
  interpolatePuOr: () => PuOr_default,
  interpolatePuRd: () => PuRd_default,
  interpolatePurples: () => Purples_default,
  interpolateRainbow: () => rainbow_default,
  interpolateRdBu: () => RdBu_default,
  interpolateRdGy: () => RdGy_default,
  interpolateRdPu: () => RdPu_default,
  interpolateRdYlBu: () => RdYlBu_default,
  interpolateRdYlGn: () => RdYlGn_default,
  interpolateReds: () => Reds_default,
  interpolateRgb: () => rgb_default,
  interpolateRgbBasis: () => rgbBasis,
  interpolateRgbBasisClosed: () => rgbBasisClosed,
  interpolateRound: () => round_default,
  interpolateSinebow: () => sinebow_default,
  interpolateSpectral: () => Spectral_default,
  interpolateString: () => string_default,
  interpolateTransformCss: () => interpolateTransformCss,
  interpolateTransformSvg: () => interpolateTransformSvg,
  interpolateTurbo: () => turbo_default,
  interpolateViridis: () => viridis_default,
  interpolateWarm: () => warm,
  interpolateYlGn: () => YlGn_default,
  interpolateYlGnBu: () => YlGnBu_default,
  interpolateYlOrBr: () => YlOrBr_default,
  interpolateYlOrRd: () => YlOrRd_default,
  interpolateZoom: () => zoom_default,
  interrupt: () => interrupt_default,
  intersection: () => intersection,
  interval: () => interval_default,
  isoFormat: () => isoFormat_default,
  isoParse: () => isoParse_default,
  json: () => json_default,
  lab: () => lab,
  lch: () => lch,
  least: () => least,
  leastIndex: () => leastIndex,
  line: () => line_default2,
  lineRadial: () => lineRadial_default,
  linkHorizontal: () => linkHorizontal,
  linkRadial: () => linkRadial,
  linkVertical: () => linkVertical,
  local: () => local,
  map: () => map2,
  matcher: () => matcher_default,
  max: () => max,
  maxIndex: () => maxIndex,
  mean: () => mean,
  median: () => median_default,
  merge: () => merge,
  min: () => min,
  minIndex: () => minIndex,
  namespace: () => namespace_default,
  namespaces: () => namespaces_default,
  nice: () => nice,
  now: () => now,
  pack: () => pack_default,
  packEnclose: () => enclose_default,
  packSiblings: () => siblings_default,
  pairs: () => pairs,
  partition: () => partition_default,
  path: () => path_default,
  permute: () => permute_default,
  pie: () => pie_default,
  piecewise: () => piecewise,
  pointRadial: () => pointRadial_default,
  pointer: () => pointer_default,
  pointers: () => pointers_default,
  polygonArea: () => area_default4,
  polygonCentroid: () => centroid_default3,
  polygonContains: () => contains_default3,
  polygonHull: () => hull_default,
  polygonLength: () => length_default2,
  precisionFixed: () => precisionFixed_default,
  precisionPrefix: () => precisionPrefix_default,
  precisionRound: () => precisionRound_default,
  quadtree: () => quadtree,
  quantile: () => quantile,
  quantileSorted: () => quantileSorted,
  quantize: () => quantize_default,
  quickselect: () => quickselect,
  radialArea: () => areaRadial_default,
  radialLine: () => lineRadial_default,
  randomBates: () => bates_default,
  randomBernoulli: () => bernoulli_default,
  randomBeta: () => beta_default,
  randomBinomial: () => binomial_default,
  randomCauchy: () => cauchy_default,
  randomExponential: () => exponential_default,
  randomGamma: () => gamma_default,
  randomGeometric: () => geometric_default,
  randomInt: () => int_default,
  randomIrwinHall: () => irwinHall_default,
  randomLcg: () => lcg,
  randomLogNormal: () => logNormal_default,
  randomLogistic: () => logistic_default,
  randomNormal: () => normal_default,
  randomPareto: () => pareto_default,
  randomPoisson: () => poisson_default,
  randomUniform: () => uniform_default,
  randomWeibull: () => weibull_default,
  range: () => range_default,
  reduce: () => reduce,
  reverse: () => reverse,
  rgb: () => rgb,
  ribbon: () => ribbon_default,
  ribbonArrow: () => ribbonArrow,
  rollup: () => rollup,
  rollups: () => rollups,
  scaleBand: () => band,
  scaleDiverging: () => diverging,
  scaleDivergingLog: () => divergingLog,
  scaleDivergingPow: () => divergingPow,
  scaleDivergingSqrt: () => divergingSqrt,
  scaleDivergingSymlog: () => divergingSymlog,
  scaleIdentity: () => identity3,
  scaleImplicit: () => implicit,
  scaleLinear: () => linear3,
  scaleLog: () => log2,
  scaleOrdinal: () => ordinal,
  scalePoint: () => point,
  scalePow: () => pow3,
  scaleQuantile: () => quantile2,
  scaleQuantize: () => quantize,
  scaleRadial: () => radial,
  scaleSequential: () => sequential,
  scaleSequentialLog: () => sequentialLog,
  scaleSequentialPow: () => sequentialPow,
  scaleSequentialQuantile: () => sequentialQuantile,
  scaleSequentialSqrt: () => sequentialSqrt,
  scaleSequentialSymlog: () => sequentialSymlog,
  scaleSqrt: () => sqrt2,
  scaleSymlog: () => symlog,
  scaleThreshold: () => threshold,
  scaleTime: () => time,
  scaleUtc: () => utcTime,
  scan: () => scan,
  schemeAccent: () => Accent_default,
  schemeBlues: () => scheme22,
  schemeBrBG: () => scheme,
  schemeBuGn: () => scheme10,
  schemeBuPu: () => scheme11,
  schemeCategory10: () => category10_default,
  schemeDark2: () => Dark2_default,
  schemeGnBu: () => scheme12,
  schemeGreens: () => scheme23,
  schemeGreys: () => scheme24,
  schemeOrRd: () => scheme13,
  schemeOranges: () => scheme27,
  schemePRGn: () => scheme2,
  schemePaired: () => Paired_default,
  schemePastel1: () => Pastel1_default,
  schemePastel2: () => Pastel2_default,
  schemePiYG: () => scheme3,
  schemePuBu: () => scheme15,
  schemePuBuGn: () => scheme14,
  schemePuOr: () => scheme4,
  schemePuRd: () => scheme16,
  schemePurples: () => scheme25,
  schemeRdBu: () => scheme5,
  schemeRdGy: () => scheme6,
  schemeRdPu: () => scheme17,
  schemeRdYlBu: () => scheme7,
  schemeRdYlGn: () => scheme8,
  schemeReds: () => scheme26,
  schemeSet1: () => Set1_default,
  schemeSet2: () => Set2_default,
  schemeSet3: () => Set3_default,
  schemeSpectral: () => scheme9,
  schemeTableau10: () => Tableau10_default,
  schemeYlGn: () => scheme19,
  schemeYlGnBu: () => scheme18,
  schemeYlOrBr: () => scheme20,
  schemeYlOrRd: () => scheme21,
  select: () => select_default2,
  selectAll: () => selectAll_default2,
  selection: () => selection_default,
  selector: () => selector_default,
  selectorAll: () => selectorAll_default,
  shuffle: () => shuffle_default,
  shuffler: () => shuffler,
  some: () => some,
  sort: () => sort,
  stack: () => stack_default,
  stackOffsetDiverging: () => diverging_default,
  stackOffsetExpand: () => expand_default,
  stackOffsetNone: () => none_default,
  stackOffsetSilhouette: () => silhouette_default,
  stackOffsetWiggle: () => wiggle_default,
  stackOrderAppearance: () => appearance_default,
  stackOrderAscending: () => ascending_default3,
  stackOrderDescending: () => descending_default3,
  stackOrderInsideOut: () => insideOut_default,
  stackOrderNone: () => none_default2,
  stackOrderReverse: () => reverse_default,
  stratify: () => stratify_default,
  style: () => styleValue,
  subset: () => subset,
  sum: () => sum,
  superset: () => superset,
  svg: () => svg,
  symbol: () => symbol_default,
  symbolCircle: () => circle_default3,
  symbolCross: () => cross_default2,
  symbolDiamond: () => diamond_default,
  symbolSquare: () => square_default,
  symbolStar: () => star_default,
  symbolTriangle: () => triangle_default,
  symbolWye: () => wye_default,
  symbols: () => symbols,
  text: () => text_default3,
  thresholdFreedmanDiaconis: () => freedmanDiaconis_default,
  thresholdScott: () => scott_default,
  thresholdSturges: () => sturges_default,
  tickFormat: () => tickFormat,
  tickIncrement: () => tickIncrement,
  tickStep: () => tickStep,
  ticks: () => ticks_default,
  timeDay: () => day_default,
  timeDays: () => days,
  timeFormat: () => timeFormat,
  timeFormatDefaultLocale: () => defaultLocale2,
  timeFormatLocale: () => formatLocale,
  timeFriday: () => friday,
  timeFridays: () => fridays,
  timeHour: () => hour_default,
  timeHours: () => hours,
  timeInterval: () => newInterval,
  timeMillisecond: () => millisecond_default,
  timeMilliseconds: () => milliseconds,
  timeMinute: () => minute_default,
  timeMinutes: () => minutes,
  timeMonday: () => monday,
  timeMondays: () => mondays,
  timeMonth: () => month_default,
  timeMonths: () => months,
  timeParse: () => timeParse,
  timeSaturday: () => saturday,
  timeSaturdays: () => saturdays,
  timeSecond: () => second_default,
  timeSeconds: () => seconds,
  timeSunday: () => sunday,
  timeSundays: () => sundays,
  timeThursday: () => thursday,
  timeThursdays: () => thursdays,
  timeTickInterval: () => timeTickInterval,
  timeTicks: () => timeTicks,
  timeTuesday: () => tuesday,
  timeTuesdays: () => tuesdays,
  timeWednesday: () => wednesday,
  timeWednesdays: () => wednesdays,
  timeWeek: () => sunday,
  timeWeeks: () => sundays,
  timeYear: () => year_default,
  timeYears: () => years,
  timeout: () => timeout_default,
  timer: () => timer,
  timerFlush: () => timerFlush,
  transition: () => transition,
  transpose: () => transpose_default,
  tree: () => tree_default,
  treemap: () => treemap_default,
  treemapBinary: () => binary_default,
  treemapDice: () => dice_default,
  treemapResquarify: () => resquarify_default,
  treemapSlice: () => slice_default,
  treemapSliceDice: () => sliceDice_default,
  treemapSquarify: () => squarify_default,
  tsv: () => tsv2,
  tsvFormat: () => tsvFormat,
  tsvFormatBody: () => tsvFormatBody,
  tsvFormatRow: () => tsvFormatRow,
  tsvFormatRows: () => tsvFormatRows,
  tsvFormatValue: () => tsvFormatValue,
  tsvParse: () => tsvParse,
  tsvParseRows: () => tsvParseRows,
  union: () => union,
  utcDay: () => utcDay_default,
  utcDays: () => utcDays,
  utcFormat: () => utcFormat,
  utcFriday: () => utcFriday,
  utcFridays: () => utcFridays,
  utcHour: () => utcHour_default,
  utcHours: () => utcHours,
  utcMillisecond: () => millisecond_default,
  utcMilliseconds: () => milliseconds,
  utcMinute: () => utcMinute_default,
  utcMinutes: () => utcMinutes,
  utcMonday: () => utcMonday,
  utcMondays: () => utcMondays,
  utcMonth: () => utcMonth_default,
  utcMonths: () => utcMonths,
  utcParse: () => utcParse,
  utcSaturday: () => utcSaturday,
  utcSaturdays: () => utcSaturdays,
  utcSecond: () => second_default,
  utcSeconds: () => seconds,
  utcSunday: () => utcSunday,
  utcSundays: () => utcSundays,
  utcThursday: () => utcThursday,
  utcThursdays: () => utcThursdays,
  utcTickInterval: () => utcTickInterval,
  utcTicks: () => utcTicks,
  utcTuesday: () => utcTuesday,
  utcTuesdays: () => utcTuesdays,
  utcWednesday: () => utcWednesday,
  utcWednesdays: () => utcWednesdays,
  utcWeek: () => utcSunday,
  utcWeeks: () => utcSundays,
  utcYear: () => utcYear_default,
  utcYears: () => utcYears,
  variance: () => variance,
  version: () => version,
  window: () => window_default,
  xml: () => xml_default,
  zip: () => zip_default,
  zoom: () => zoom_default2,
  zoomIdentity: () => identity4,
  zoomTransform: () => transform
});

// node_modules/d3/dist/package.js
var version = "6.7.0";

// node_modules/d3-array/src/ascending.js
function ascending_default(a6, b10) {
  return a6 < b10 ? -1 : a6 > b10 ? 1 : a6 >= b10 ? 0 : NaN;
}

// node_modules/d3-array/src/bisector.js
function bisector_default(f4) {
  let delta = f4;
  let compare = f4;
  if (f4.length === 1) {
    delta = (d4, x6) => f4(d4) - x6;
    compare = ascendingComparator(f4);
  }
  function left2(a6, x6, lo, hi) {
    if (lo == null)
      lo = 0;
    if (hi == null)
      hi = a6.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a6[mid], x6) < 0)
        lo = mid + 1;
      else
        hi = mid;
    }
    return lo;
  }
  function right2(a6, x6, lo, hi) {
    if (lo == null)
      lo = 0;
    if (hi == null)
      hi = a6.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a6[mid], x6) > 0)
        hi = mid;
      else
        lo = mid + 1;
    }
    return lo;
  }
  function center2(a6, x6, lo, hi) {
    if (lo == null)
      lo = 0;
    if (hi == null)
      hi = a6.length;
    const i4 = left2(a6, x6, lo, hi - 1);
    return i4 > lo && delta(a6[i4 - 1], x6) > -delta(a6[i4], x6) ? i4 - 1 : i4;
  }
  return { left: left2, center: center2, right: right2 };
}
function ascendingComparator(f4) {
  return (d4, x6) => ascending_default(f4(d4), x6);
}

// node_modules/d3-array/src/number.js
function number_default(x6) {
  return x6 === null ? NaN : +x6;
}
function* numbers(values, valueof) {
  if (valueof === void 0) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index3 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index3, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

// node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector_default(ascending_default);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector_default(number_default).center;
var bisect_default = bisectRight;

// node_modules/d3-array/src/count.js
function count(values, valueof) {
  let count3 = 0;
  if (valueof === void 0) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count3;
      }
    }
  } else {
    let index3 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index3, values)) != null && (value = +value) >= value) {
        ++count3;
      }
    }
  }
  return count3;
}

// node_modules/d3-array/src/cross.js
function length(array3) {
  return array3.length | 0;
}
function empty(length3) {
  return !(length3 > 0);
}
function arrayify(values) {
  return typeof values !== "object" || "length" in values ? values : Array.from(values);
}
function reducer(reduce2) {
  return (values) => reduce2(...values);
}
function cross(...values) {
  const reduce2 = typeof values[values.length - 1] === "function" && reducer(values.pop());
  values = values.map(arrayify);
  const lengths = values.map(length);
  const j3 = values.length - 1;
  const index3 = new Array(j3 + 1).fill(0);
  const product = [];
  if (j3 < 0 || lengths.some(empty))
    return product;
  while (true) {
    product.push(index3.map((j4, i5) => values[i5][j4]));
    let i4 = j3;
    while (++index3[i4] === lengths[i4]) {
      if (i4 === 0)
        return reduce2 ? product.map(reduce2) : product;
      index3[i4--] = 0;
    }
  }
}

// node_modules/d3-array/src/cumsum.js
function cumsum(values, valueof) {
  var sum3 = 0, index3 = 0;
  return Float64Array.from(values, valueof === void 0 ? (v3) => sum3 += +v3 || 0 : (v3) => sum3 += +valueof(v3, index3++, values) || 0);
}

// node_modules/d3-array/src/descending.js
function descending_default(a6, b10) {
  return b10 < a6 ? -1 : b10 > a6 ? 1 : b10 >= a6 ? 0 : NaN;
}

// node_modules/d3-array/src/variance.js
function variance(values, valueof) {
  let count3 = 0;
  let delta;
  let mean2 = 0;
  let sum3 = 0;
  if (valueof === void 0) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        delta = value - mean2;
        mean2 += delta / ++count3;
        sum3 += delta * (value - mean2);
      }
    }
  } else {
    let index3 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index3, values)) != null && (value = +value) >= value) {
        delta = value - mean2;
        mean2 += delta / ++count3;
        sum3 += delta * (value - mean2);
      }
    }
  }
  if (count3 > 1)
    return sum3 / (count3 - 1);
}

// node_modules/d3-array/src/deviation.js
function deviation(values, valueof) {
  const v3 = variance(values, valueof);
  return v3 ? Math.sqrt(v3) : v3;
}

// node_modules/d3-array/src/extent.js
function extent_default(values, valueof) {
  let min4;
  let max5;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null) {
        if (min4 === void 0) {
          if (value >= value)
            min4 = max5 = value;
        } else {
          if (min4 > value)
            min4 = value;
          if (max5 < value)
            max5 = value;
        }
      }
    }
  } else {
    let index3 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index3, values)) != null) {
        if (min4 === void 0) {
          if (value >= value)
            min4 = max5 = value;
        } else {
          if (min4 > value)
            min4 = value;
          if (max5 < value)
            max5 = value;
        }
      }
    }
  }
  return [min4, max5];
}

// node_modules/d3-array/src/fsum.js
var Adder = class {
  constructor() {
    this._partials = new Float64Array(32);
    this._n = 0;
  }
  add(x6) {
    const p3 = this._partials;
    let i4 = 0;
    for (let j3 = 0; j3 < this._n && j3 < 32; j3++) {
      const y7 = p3[j3], hi = x6 + y7, lo = Math.abs(x6) < Math.abs(y7) ? x6 - (hi - y7) : y7 - (hi - x6);
      if (lo)
        p3[i4++] = lo;
      x6 = hi;
    }
    p3[i4] = x6;
    this._n = i4 + 1;
    return this;
  }
  valueOf() {
    const p3 = this._partials;
    let n2 = this._n, x6, y7, lo, hi = 0;
    if (n2 > 0) {
      hi = p3[--n2];
      while (n2 > 0) {
        x6 = hi;
        y7 = p3[--n2];
        hi = x6 + y7;
        lo = y7 - (hi - x6);
        if (lo)
          break;
      }
      if (n2 > 0 && (lo < 0 && p3[n2 - 1] < 0 || lo > 0 && p3[n2 - 1] > 0)) {
        y7 = lo * 2;
        x6 = hi + y7;
        if (y7 == x6 - hi)
          hi = x6;
      }
    }
    return hi;
  }
};
function fsum(values, valueof) {
  const adder = new Adder();
  if (valueof === void 0) {
    for (let value of values) {
      if (value = +value) {
        adder.add(value);
      }
    }
  } else {
    let index3 = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index3, values)) {
        adder.add(value);
      }
    }
  }
  return +adder;
}
function fcumsum(values, valueof) {
  const adder = new Adder();
  let index3 = -1;
  return Float64Array.from(values, valueof === void 0 ? (v3) => adder.add(+v3 || 0) : (v3) => adder.add(+valueof(v3, ++index3, values) || 0));
}

// node_modules/internmap/src/index.js
var InternMap = class extends Map {
  constructor(entries, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
    if (entries != null)
      for (const [key2, value] of entries)
        this.set(key2, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
};
var InternSet = class extends Set {
  constructor(values, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
    if (values != null)
      for (const value of values)
        this.add(value);
  }
  has(value) {
    return super.has(intern_get(this, value));
  }
  add(value) {
    return super.add(intern_set(this, value));
  }
  delete(value) {
    return super.delete(intern_delete(this, value));
  }
};
function intern_get({ _intern, _key }, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key))
    return _intern.get(key);
  _intern.set(key, value);
  return value;
}
function intern_delete({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(value);
    _intern.delete(key);
  }
  return value;
}
function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}

// node_modules/d3-array/src/identity.js
function identity_default(x6) {
  return x6;
}

// node_modules/d3-array/src/group.js
function group(values, ...keys) {
  return nest(values, identity_default, identity_default, keys);
}
function groups(values, ...keys) {
  return nest(values, Array.from, identity_default, keys);
}
function rollup(values, reduce2, ...keys) {
  return nest(values, identity_default, reduce2, keys);
}
function rollups(values, reduce2, ...keys) {
  return nest(values, Array.from, reduce2, keys);
}
function index(values, ...keys) {
  return nest(values, identity_default, unique, keys);
}
function indexes(values, ...keys) {
  return nest(values, Array.from, unique, keys);
}
function unique(values) {
  if (values.length !== 1)
    throw new Error("duplicate key");
  return values[0];
}
function nest(values, map4, reduce2, keys) {
  return function regroup(values2, i4) {
    if (i4 >= keys.length)
      return reduce2(values2);
    const groups2 = new InternMap();
    const keyof2 = keys[i4++];
    let index3 = -1;
    for (const value of values2) {
      const key = keyof2(value, ++index3, values2);
      const group2 = groups2.get(key);
      if (group2)
        group2.push(value);
      else
        groups2.set(key, [value]);
    }
    for (const [key, values3] of groups2) {
      groups2.set(key, regroup(values3, i4));
    }
    return map4(groups2);
  }(values, 0);
}

// node_modules/d3-array/src/permute.js
function permute_default(source, keys) {
  return Array.from(keys, (key) => source[key]);
}

// node_modules/d3-array/src/sort.js
function sort(values, ...F2) {
  if (typeof values[Symbol.iterator] !== "function")
    throw new TypeError("values is not iterable");
  values = Array.from(values);
  let [f4 = ascending_default] = F2;
  if (f4.length === 1 || F2.length > 1) {
    const index3 = Uint32Array.from(values, (d4, i4) => i4);
    if (F2.length > 1) {
      F2 = F2.map((f5) => values.map(f5));
      index3.sort((i4, j3) => {
        for (const f5 of F2) {
          const c8 = ascending_default(f5[i4], f5[j3]);
          if (c8)
            return c8;
        }
      });
    } else {
      f4 = values.map(f4);
      index3.sort((i4, j3) => ascending_default(f4[i4], f4[j3]));
    }
    return permute_default(values, index3);
  }
  return values.sort(f4);
}

// node_modules/d3-array/src/groupSort.js
function groupSort(values, reduce2, key) {
  return (reduce2.length === 1 ? sort(rollup(values, reduce2, key), ([ak, av], [bk, bv]) => ascending_default(av, bv) || ascending_default(ak, bk)) : sort(group(values, key), ([ak, av], [bk, bv]) => reduce2(av, bv) || ascending_default(ak, bk))).map(([key2]) => key2);
}

// node_modules/d3-array/src/array.js
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

// node_modules/d3-array/src/constant.js
function constant_default(x6) {
  return function() {
    return x6;
  };
}

// node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e22 = Math.sqrt(2);
function ticks_default(start2, stop, count3) {
  var reverse2, i4 = -1, n2, ticks, step;
  stop = +stop, start2 = +start2, count3 = +count3;
  if (start2 === stop && count3 > 0)
    return [start2];
  if (reverse2 = stop < start2)
    n2 = start2, start2 = stop, stop = n2;
  if ((step = tickIncrement(start2, stop, count3)) === 0 || !isFinite(step))
    return [];
  if (step > 0) {
    let r0 = Math.round(start2 / step), r1 = Math.round(stop / step);
    if (r0 * step < start2)
      ++r0;
    if (r1 * step > stop)
      --r1;
    ticks = new Array(n2 = r1 - r0 + 1);
    while (++i4 < n2)
      ticks[i4] = (r0 + i4) * step;
  } else {
    step = -step;
    let r0 = Math.round(start2 * step), r1 = Math.round(stop * step);
    if (r0 / step < start2)
      ++r0;
    if (r1 / step > stop)
      --r1;
    ticks = new Array(n2 = r1 - r0 + 1);
    while (++i4 < n2)
      ticks[i4] = (r0 + i4) / step;
  }
  if (reverse2)
    ticks.reverse();
  return ticks;
}
function tickIncrement(start2, stop, count3) {
  var step = (stop - start2) / Math.max(0, count3), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e22 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e22 ? 2 : 1);
}
function tickStep(start2, stop, count3) {
  var step0 = Math.abs(stop - start2) / Math.max(0, count3), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
  if (error >= e10)
    step1 *= 10;
  else if (error >= e5)
    step1 *= 5;
  else if (error >= e22)
    step1 *= 2;
  return stop < start2 ? -step1 : step1;
}

// node_modules/d3-array/src/nice.js
function nice(start2, stop, count3) {
  let prestep;
  while (true) {
    const step = tickIncrement(start2, stop, count3);
    if (step === prestep || step === 0 || !isFinite(step)) {
      return [start2, stop];
    } else if (step > 0) {
      start2 = Math.floor(start2 / step) * step;
      stop = Math.ceil(stop / step) * step;
    } else if (step < 0) {
      start2 = Math.ceil(start2 * step) / step;
      stop = Math.floor(stop * step) / step;
    }
    prestep = step;
  }
}

// node_modules/d3-array/src/threshold/sturges.js
function sturges_default(values) {
  return Math.ceil(Math.log(count(values)) / Math.LN2) + 1;
}

// node_modules/d3-array/src/bin.js
function bin_default() {
  var value = identity_default, domain = extent_default, threshold2 = sturges_default;
  function histogram(data) {
    if (!Array.isArray(data))
      data = Array.from(data);
    var i4, n2 = data.length, x6, values = new Array(n2);
    for (i4 = 0; i4 < n2; ++i4) {
      values[i4] = value(data[i4], i4, data);
    }
    var xz = domain(values), x06 = xz[0], x12 = xz[1], tz = threshold2(values, x06, x12);
    if (!Array.isArray(tz)) {
      const max5 = x12, tn = +tz;
      if (domain === extent_default)
        [x06, x12] = nice(x06, x12, tn);
      tz = ticks_default(x06, x12, tn);
      if (tz[tz.length - 1] >= x12) {
        if (max5 >= x12 && domain === extent_default) {
          const step = tickIncrement(x06, x12, tn);
          if (isFinite(step)) {
            if (step > 0) {
              x12 = (Math.floor(x12 / step) + 1) * step;
            } else if (step < 0) {
              x12 = (Math.ceil(x12 * -step) + 1) / -step;
            }
          }
        } else {
          tz.pop();
        }
      }
    }
    var m4 = tz.length;
    while (tz[0] <= x06)
      tz.shift(), --m4;
    while (tz[m4 - 1] > x12)
      tz.pop(), --m4;
    var bins = new Array(m4 + 1), bin;
    for (i4 = 0; i4 <= m4; ++i4) {
      bin = bins[i4] = [];
      bin.x0 = i4 > 0 ? tz[i4 - 1] : x06;
      bin.x1 = i4 < m4 ? tz[i4] : x12;
    }
    for (i4 = 0; i4 < n2; ++i4) {
      x6 = values[i4];
      if (x06 <= x6 && x6 <= x12) {
        bins[bisect_default(tz, x6, 0, m4)].push(data[i4]);
      }
    }
    return bins;
  }
  histogram.value = function(_2) {
    return arguments.length ? (value = typeof _2 === "function" ? _2 : constant_default(_2), histogram) : value;
  };
  histogram.domain = function(_2) {
    return arguments.length ? (domain = typeof _2 === "function" ? _2 : constant_default([_2[0], _2[1]]), histogram) : domain;
  };
  histogram.thresholds = function(_2) {
    return arguments.length ? (threshold2 = typeof _2 === "function" ? _2 : Array.isArray(_2) ? constant_default(slice.call(_2)) : constant_default(_2), histogram) : threshold2;
  };
  return histogram;
}

// node_modules/d3-array/src/max.js
function max(values, valueof) {
  let max5;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null && (max5 < value || max5 === void 0 && value >= value)) {
        max5 = value;
      }
    }
  } else {
    let index3 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index3, values)) != null && (max5 < value || max5 === void 0 && value >= value)) {
        max5 = value;
      }
    }
  }
  return max5;
}

// node_modules/d3-array/src/min.js
function min(values, valueof) {
  let min4;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null && (min4 > value || min4 === void 0 && value >= value)) {
        min4 = value;
      }
    }
  } else {
    let index3 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index3, values)) != null && (min4 > value || min4 === void 0 && value >= value)) {
        min4 = value;
      }
    }
  }
  return min4;
}

// node_modules/d3-array/src/quickselect.js
function quickselect(array3, k4, left2 = 0, right2 = array3.length - 1, compare = ascending_default) {
  while (right2 > left2) {
    if (right2 - left2 > 600) {
      const n2 = right2 - left2 + 1;
      const m4 = k4 - left2 + 1;
      const z2 = Math.log(n2);
      const s5 = 0.5 * Math.exp(2 * z2 / 3);
      const sd = 0.5 * Math.sqrt(z2 * s5 * (n2 - s5) / n2) * (m4 - n2 / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left2, Math.floor(k4 - m4 * s5 / n2 + sd));
      const newRight = Math.min(right2, Math.floor(k4 + (n2 - m4) * s5 / n2 + sd));
      quickselect(array3, k4, newLeft, newRight, compare);
    }
    const t4 = array3[k4];
    let i4 = left2;
    let j3 = right2;
    swap(array3, left2, k4);
    if (compare(array3[right2], t4) > 0)
      swap(array3, left2, right2);
    while (i4 < j3) {
      swap(array3, i4, j3), ++i4, --j3;
      while (compare(array3[i4], t4) < 0)
        ++i4;
      while (compare(array3[j3], t4) > 0)
        --j3;
    }
    if (compare(array3[left2], t4) === 0)
      swap(array3, left2, j3);
    else
      ++j3, swap(array3, j3, right2);
    if (j3 <= k4)
      left2 = j3 + 1;
    if (k4 <= j3)
      right2 = j3 - 1;
  }
  return array3;
}
function swap(array3, i4, j3) {
  const t4 = array3[i4];
  array3[i4] = array3[j3];
  array3[j3] = t4;
}

// node_modules/d3-array/src/quantile.js
function quantile(values, p3, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!(n2 = values.length))
    return;
  if ((p3 = +p3) <= 0 || n2 < 2)
    return min(values);
  if (p3 >= 1)
    return max(values);
  var n2, i4 = (n2 - 1) * p3, i0 = Math.floor(i4), value0 = max(quickselect(values, i0).subarray(0, i0 + 1)), value1 = min(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i4 - i0);
}
function quantileSorted(values, p3, valueof = number_default) {
  if (!(n2 = values.length))
    return;
  if ((p3 = +p3) <= 0 || n2 < 2)
    return +valueof(values[0], 0, values);
  if (p3 >= 1)
    return +valueof(values[n2 - 1], n2 - 1, values);
  var n2, i4 = (n2 - 1) * p3, i0 = Math.floor(i4), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i4 - i0);
}

// node_modules/d3-array/src/threshold/freedmanDiaconis.js
function freedmanDiaconis_default(values, min4, max5) {
  return Math.ceil((max5 - min4) / (2 * (quantile(values, 0.75) - quantile(values, 0.25)) * Math.pow(count(values), -1 / 3)));
}

// node_modules/d3-array/src/threshold/scott.js
function scott_default(values, min4, max5) {
  return Math.ceil((max5 - min4) / (3.5 * deviation(values) * Math.pow(count(values), -1 / 3)));
}

// node_modules/d3-array/src/maxIndex.js
function maxIndex(values, valueof) {
  let max5;
  let maxIndex2 = -1;
  let index3 = -1;
  if (valueof === void 0) {
    for (const value of values) {
      ++index3;
      if (value != null && (max5 < value || max5 === void 0 && value >= value)) {
        max5 = value, maxIndex2 = index3;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index3, values)) != null && (max5 < value || max5 === void 0 && value >= value)) {
        max5 = value, maxIndex2 = index3;
      }
    }
  }
  return maxIndex2;
}

// node_modules/d3-array/src/mean.js
function mean(values, valueof) {
  let count3 = 0;
  let sum3 = 0;
  if (valueof === void 0) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count3, sum3 += value;
      }
    }
  } else {
    let index3 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index3, values)) != null && (value = +value) >= value) {
        ++count3, sum3 += value;
      }
    }
  }
  if (count3)
    return sum3 / count3;
}

// node_modules/d3-array/src/median.js
function median_default(values, valueof) {
  return quantile(values, 0.5, valueof);
}

// node_modules/d3-array/src/merge.js
function* flatten(arrays) {
  for (const array3 of arrays) {
    yield* array3;
  }
}
function merge(arrays) {
  return Array.from(flatten(arrays));
}

// node_modules/d3-array/src/minIndex.js
function minIndex(values, valueof) {
  let min4;
  let minIndex2 = -1;
  let index3 = -1;
  if (valueof === void 0) {
    for (const value of values) {
      ++index3;
      if (value != null && (min4 > value || min4 === void 0 && value >= value)) {
        min4 = value, minIndex2 = index3;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index3, values)) != null && (min4 > value || min4 === void 0 && value >= value)) {
        min4 = value, minIndex2 = index3;
      }
    }
  }
  return minIndex2;
}

// node_modules/d3-array/src/pairs.js
function pairs(values, pairof = pair) {
  const pairs2 = [];
  let previous;
  let first = false;
  for (const value of values) {
    if (first)
      pairs2.push(pairof(previous, value));
    previous = value;
    first = true;
  }
  return pairs2;
}
function pair(a6, b10) {
  return [a6, b10];
}

// node_modules/d3-array/src/range.js
function range_default(start2, stop, step) {
  start2 = +start2, stop = +stop, step = (n2 = arguments.length) < 2 ? (stop = start2, start2 = 0, 1) : n2 < 3 ? 1 : +step;
  var i4 = -1, n2 = Math.max(0, Math.ceil((stop - start2) / step)) | 0, range3 = new Array(n2);
  while (++i4 < n2) {
    range3[i4] = start2 + i4 * step;
  }
  return range3;
}

// node_modules/d3-array/src/least.js
function least(values, compare = ascending_default) {
  let min4;
  let defined2 = false;
  if (compare.length === 1) {
    let minValue;
    for (const element of values) {
      const value = compare(element);
      if (defined2 ? ascending_default(value, minValue) < 0 : ascending_default(value, value) === 0) {
        min4 = element;
        minValue = value;
        defined2 = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined2 ? compare(value, min4) < 0 : compare(value, value) === 0) {
        min4 = value;
        defined2 = true;
      }
    }
  }
  return min4;
}

// node_modules/d3-array/src/leastIndex.js
function leastIndex(values, compare = ascending_default) {
  if (compare.length === 1)
    return minIndex(values, compare);
  let minValue;
  let min4 = -1;
  let index3 = -1;
  for (const value of values) {
    ++index3;
    if (min4 < 0 ? compare(value, value) === 0 : compare(value, minValue) < 0) {
      minValue = value;
      min4 = index3;
    }
  }
  return min4;
}

// node_modules/d3-array/src/greatest.js
function greatest(values, compare = ascending_default) {
  let max5;
  let defined2 = false;
  if (compare.length === 1) {
    let maxValue;
    for (const element of values) {
      const value = compare(element);
      if (defined2 ? ascending_default(value, maxValue) > 0 : ascending_default(value, value) === 0) {
        max5 = element;
        maxValue = value;
        defined2 = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined2 ? compare(value, max5) > 0 : compare(value, value) === 0) {
        max5 = value;
        defined2 = true;
      }
    }
  }
  return max5;
}

// node_modules/d3-array/src/greatestIndex.js
function greatestIndex(values, compare = ascending_default) {
  if (compare.length === 1)
    return maxIndex(values, compare);
  let maxValue;
  let max5 = -1;
  let index3 = -1;
  for (const value of values) {
    ++index3;
    if (max5 < 0 ? compare(value, value) === 0 : compare(value, maxValue) > 0) {
      maxValue = value;
      max5 = index3;
    }
  }
  return max5;
}

// node_modules/d3-array/src/scan.js
function scan(values, compare) {
  const index3 = leastIndex(values, compare);
  return index3 < 0 ? void 0 : index3;
}

// node_modules/d3-array/src/shuffle.js
var shuffle_default = shuffler(Math.random);
function shuffler(random) {
  return function shuffle2(array3, i0 = 0, i1 = array3.length) {
    let m4 = i1 - (i0 = +i0);
    while (m4) {
      const i4 = random() * m4-- | 0, t4 = array3[m4 + i0];
      array3[m4 + i0] = array3[i4 + i0];
      array3[i4 + i0] = t4;
    }
    return array3;
  };
}

// node_modules/d3-array/src/sum.js
function sum(values, valueof) {
  let sum3 = 0;
  if (valueof === void 0) {
    for (let value of values) {
      if (value = +value) {
        sum3 += value;
      }
    }
  } else {
    let index3 = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index3, values)) {
        sum3 += value;
      }
    }
  }
  return sum3;
}

// node_modules/d3-array/src/transpose.js
function transpose_default(matrix) {
  if (!(n2 = matrix.length))
    return [];
  for (var i4 = -1, m4 = min(matrix, length2), transpose = new Array(m4); ++i4 < m4; ) {
    for (var j3 = -1, n2, row = transpose[i4] = new Array(n2); ++j3 < n2; ) {
      row[j3] = matrix[j3][i4];
    }
  }
  return transpose;
}
function length2(d4) {
  return d4.length;
}

// node_modules/d3-array/src/zip.js
function zip_default() {
  return transpose_default(arguments);
}

// node_modules/d3-array/src/every.js
function every(values, test) {
  if (typeof test !== "function")
    throw new TypeError("test is not a function");
  let index3 = -1;
  for (const value of values) {
    if (!test(value, ++index3, values)) {
      return false;
    }
  }
  return true;
}

// node_modules/d3-array/src/some.js
function some(values, test) {
  if (typeof test !== "function")
    throw new TypeError("test is not a function");
  let index3 = -1;
  for (const value of values) {
    if (test(value, ++index3, values)) {
      return true;
    }
  }
  return false;
}

// node_modules/d3-array/src/filter.js
function filter(values, test) {
  if (typeof test !== "function")
    throw new TypeError("test is not a function");
  const array3 = [];
  let index3 = -1;
  for (const value of values) {
    if (test(value, ++index3, values)) {
      array3.push(value);
    }
  }
  return array3;
}

// node_modules/d3-array/src/map.js
function map2(values, mapper) {
  if (typeof values[Symbol.iterator] !== "function")
    throw new TypeError("values is not iterable");
  if (typeof mapper !== "function")
    throw new TypeError("mapper is not a function");
  return Array.from(values, (value, index3) => mapper(value, index3, values));
}

// node_modules/d3-array/src/reduce.js
function reduce(values, reducer3, value) {
  if (typeof reducer3 !== "function")
    throw new TypeError("reducer is not a function");
  const iterator = values[Symbol.iterator]();
  let done, next, index3 = -1;
  if (arguments.length < 3) {
    ({ done, value } = iterator.next());
    if (done)
      return;
    ++index3;
  }
  while ({ done, value: next } = iterator.next(), !done) {
    value = reducer3(value, next, ++index3, values);
  }
  return value;
}

// node_modules/d3-array/src/reverse.js
function reverse(values) {
  if (typeof values[Symbol.iterator] !== "function")
    throw new TypeError("values is not iterable");
  return Array.from(values).reverse();
}

// node_modules/d3-array/src/difference.js
function difference(values, ...others) {
  values = new Set(values);
  for (const other of others) {
    for (const value of other) {
      values.delete(value);
    }
  }
  return values;
}

// node_modules/d3-array/src/disjoint.js
function disjoint(values, other) {
  const iterator = other[Symbol.iterator](), set4 = /* @__PURE__ */ new Set();
  for (const v3 of values) {
    if (set4.has(v3))
      return false;
    let value, done;
    while ({ value, done } = iterator.next()) {
      if (done)
        break;
      if (Object.is(v3, value))
        return false;
      set4.add(value);
    }
  }
  return true;
}

// node_modules/d3-array/src/set.js
function set(values) {
  return values instanceof Set ? values : new Set(values);
}

// node_modules/d3-array/src/intersection.js
function intersection(values, ...others) {
  values = new Set(values);
  others = others.map(set);
  out:
    for (const value of values) {
      for (const other of others) {
        if (!other.has(value)) {
          values.delete(value);
          continue out;
        }
      }
    }
  return values;
}

// node_modules/d3-array/src/superset.js
function superset(values, other) {
  const iterator = values[Symbol.iterator](), set4 = /* @__PURE__ */ new Set();
  for (const o4 of other) {
    if (set4.has(o4))
      continue;
    let value, done;
    while ({ value, done } = iterator.next()) {
      if (done)
        return false;
      set4.add(value);
      if (Object.is(o4, value))
        break;
    }
  }
  return true;
}

// node_modules/d3-array/src/subset.js
function subset(values, other) {
  return superset(other, values);
}

// node_modules/d3-array/src/union.js
function union(...others) {
  const set4 = /* @__PURE__ */ new Set();
  for (const other of others) {
    for (const o4 of other) {
      set4.add(o4);
    }
  }
  return set4;
}

// node_modules/d3-axis/src/array.js
var slice2 = Array.prototype.slice;

// node_modules/d3-axis/src/identity.js
function identity_default2(x6) {
  return x6;
}

// node_modules/d3-axis/src/axis.js
var top = 1;
var right = 2;
var bottom = 3;
var left = 4;
var epsilon = 1e-6;
function translateX(x6) {
  return "translate(" + x6 + ",0)";
}
function translateY(y7) {
  return "translate(0," + y7 + ")";
}
function number(scale) {
  return (d4) => +scale(d4);
}
function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round())
    offset = Math.round(offset);
  return (d4) => +scale(d4) + offset;
}
function entering() {
  return !this.__axis;
}
function axis(orient2, scale) {
  var tickArguments = [], tickValues = null, tickFormat2 = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k4 = orient2 === top || orient2 === left ? -1 : 1, x6 = orient2 === left || orient2 === right ? "x" : "y", transform2 = orient2 === top || orient2 === bottom ? translateX : translateY;
  function axis2(context) {
    var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format2 = tickFormat2 == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity_default2 : tickFormat2, spacing = Math.max(tickSizeInner, 0) + tickPadding, range3 = scale.range(), range0 = +range3[0] + offset, range1 = +range3[range3.length - 1] + offset, position = (scale.bandwidth ? center : number)(scale.copy(), offset), selection2 = context.selection ? context.selection() : context, path2 = selection2.selectAll(".domain").data([null]), tick = selection2.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
    path2 = path2.merge(path2.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
    tick = tick.merge(tickEnter);
    line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x6 + "2", k4 * tickSizeInner));
    text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x6, k4 * spacing).attr("dy", orient2 === top ? "0em" : orient2 === bottom ? "0.71em" : "0.32em"));
    if (context !== selection2) {
      path2 = path2.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);
      tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d4) {
        return isFinite(d4 = position(d4)) ? transform2(d4 + offset) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon).attr("transform", function(d4) {
        var p3 = this.parentNode.__axis;
        return transform2((p3 && isFinite(p3 = p3(d4)) ? p3 : position(d4)) + offset);
      });
    }
    tickExit.remove();
    path2.attr("d", orient2 === left || orient2 === right ? tickSizeOuter ? "M" + k4 * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k4 * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k4 * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k4 * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
    tick.attr("opacity", 1).attr("transform", function(d4) {
      return transform2(position(d4) + offset);
    });
    line.attr(x6 + "2", k4 * tickSizeInner);
    text.attr(x6, k4 * spacing).text(format2);
    selection2.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient2 === right ? "start" : orient2 === left ? "end" : "middle");
    selection2.each(function() {
      this.__axis = position;
    });
  }
  axis2.scale = function(_2) {
    return arguments.length ? (scale = _2, axis2) : scale;
  };
  axis2.ticks = function() {
    return tickArguments = slice2.call(arguments), axis2;
  };
  axis2.tickArguments = function(_2) {
    return arguments.length ? (tickArguments = _2 == null ? [] : slice2.call(_2), axis2) : tickArguments.slice();
  };
  axis2.tickValues = function(_2) {
    return arguments.length ? (tickValues = _2 == null ? null : slice2.call(_2), axis2) : tickValues && tickValues.slice();
  };
  axis2.tickFormat = function(_2) {
    return arguments.length ? (tickFormat2 = _2, axis2) : tickFormat2;
  };
  axis2.tickSize = function(_2) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_2, axis2) : tickSizeInner;
  };
  axis2.tickSizeInner = function(_2) {
    return arguments.length ? (tickSizeInner = +_2, axis2) : tickSizeInner;
  };
  axis2.tickSizeOuter = function(_2) {
    return arguments.length ? (tickSizeOuter = +_2, axis2) : tickSizeOuter;
  };
  axis2.tickPadding = function(_2) {
    return arguments.length ? (tickPadding = +_2, axis2) : tickPadding;
  };
  axis2.offset = function(_2) {
    return arguments.length ? (offset = +_2, axis2) : offset;
  };
  return axis2;
}
function axisTop(scale) {
  return axis(top, scale);
}
function axisRight(scale) {
  return axis(right, scale);
}
function axisBottom(scale) {
  return axis(bottom, scale);
}
function axisLeft(scale) {
  return axis(left, scale);
}

// node_modules/d3-dispatch/src/dispatch.js
var noop = { value: () => {
} };
function dispatch() {
  for (var i4 = 0, n2 = arguments.length, _2 = {}, t4; i4 < n2; ++i4) {
    if (!(t4 = arguments[i4] + "") || t4 in _2 || /[\s.]/.test(t4))
      throw new Error("illegal type: " + t4);
    _2[t4] = [];
  }
  return new Dispatch(_2);
}
function Dispatch(_2) {
  this._ = _2;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t4) {
    var name = "", i4 = t4.indexOf(".");
    if (i4 >= 0)
      name = t4.slice(i4 + 1), t4 = t4.slice(0, i4);
    if (t4 && !types.hasOwnProperty(t4))
      throw new Error("unknown type: " + t4);
    return { type: t4, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _2 = this._, T2 = parseTypenames(typename + "", _2), t4, i4 = -1, n2 = T2.length;
    if (arguments.length < 2) {
      while (++i4 < n2)
        if ((t4 = (typename = T2[i4]).type) && (t4 = get(_2[t4], typename.name)))
          return t4;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i4 < n2) {
      if (t4 = (typename = T2[i4]).type)
        _2[t4] = set2(_2[t4], typename.name, callback);
      else if (callback == null)
        for (t4 in _2)
          _2[t4] = set2(_2[t4], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy3 = {}, _2 = this._;
    for (var t4 in _2)
      copy3[t4] = _2[t4].slice();
    return new Dispatch(copy3);
  },
  call: function(type2, that) {
    if ((n2 = arguments.length - 2) > 0)
      for (var args = new Array(n2), i4 = 0, n2, t4; i4 < n2; ++i4)
        args[i4] = arguments[i4 + 2];
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (t4 = this._[type2], i4 = 0, n2 = t4.length; i4 < n2; ++i4)
      t4[i4].value.apply(that, args);
  },
  apply: function(type2, that, args) {
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (var t4 = this._[type2], i4 = 0, n2 = t4.length; i4 < n2; ++i4)
      t4[i4].value.apply(that, args);
  }
};
function get(type2, name) {
  for (var i4 = 0, n2 = type2.length, c8; i4 < n2; ++i4) {
    if ((c8 = type2[i4]).name === name) {
      return c8.value;
    }
  }
}
function set2(type2, name, callback) {
  for (var i4 = 0, n2 = type2.length; i4 < n2; ++i4) {
    if (type2[i4].name === name) {
      type2[i4] = noop, type2 = type2.slice(0, i4).concat(type2.slice(i4 + 1));
      break;
    }
  }
  if (callback != null)
    type2.push({ name, value: callback });
  return type2;
}
var dispatch_default = dispatch;

// node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i4 = prefix.indexOf(":");
  if (i4 >= 0 && (prefix = name.slice(0, i4)) !== "xmlns")
    name = name.slice(i4 + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// node_modules/d3-selection/src/selection/select.js
function select_default(select2) {
  if (typeof select2 !== "function")
    select2 = selector_default(select2);
  for (var groups2 = this._groups, m4 = groups2.length, subgroups = new Array(m4), j3 = 0; j3 < m4; ++j3) {
    for (var group2 = groups2[j3], n2 = group2.length, subgroup = subgroups[j3] = new Array(n2), node, subnode, i4 = 0; i4 < n2; ++i4) {
      if ((node = group2[i4]) && (subnode = select2.call(node, node.__data__, i4, group2))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i4] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/array.js
function array_default(x6) {
  return typeof x6 === "object" && "length" in x6 ? x6 : Array.from(x6);
}

// node_modules/d3-selection/src/selectorAll.js
function empty2() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty2 : function() {
    return this.querySelectorAll(selector);
  };
}

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select2) {
  return function() {
    var group2 = select2.apply(this, arguments);
    return group2 == null ? [] : array_default(group2);
  };
}
function selectAll_default(select2) {
  if (typeof select2 === "function")
    select2 = arrayAll(select2);
  else
    select2 = selectorAll_default(select2);
  for (var groups2 = this._groups, m4 = groups2.length, subgroups = [], parents = [], j3 = 0; j3 < m4; ++j3) {
    for (var group2 = groups2[j3], n2 = group2.length, node, i4 = 0; i4 < n2; ++i4) {
      if (node = group2[i4]) {
        subgroups.push(select2.call(node, node.__data__, i4, group2));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

// node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/selectChildren.js
var filter2 = Array.prototype.filter;
function children() {
  return this.children;
}
function childrenFilter(match) {
  return function() {
    return filter2.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function")
    match = matcher_default(match);
  for (var groups2 = this._groups, m4 = groups2.length, subgroups = new Array(m4), j3 = 0; j3 < m4; ++j3) {
    for (var group2 = groups2[j3], n2 = group2.length, subgroup = subgroups[j3] = [], node, i4 = 0; i4 < n2; ++i4) {
      if ((node = group2[i4]) && match.call(node, node.__data__, i4, group2)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// node_modules/d3-selection/src/constant.js
function constant_default2(x6) {
  return function() {
    return x6;
  };
}

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group2, enter, update, exit, data) {
  var i4 = 0, node, groupLength = group2.length, dataLength = data.length;
  for (; i4 < dataLength; ++i4) {
    if (node = group2[i4]) {
      node.__data__ = data[i4];
      update[i4] = node;
    } else {
      enter[i4] = new EnterNode(parent, data[i4]);
    }
  }
  for (; i4 < groupLength; ++i4) {
    if (node = group2[i4]) {
      exit[i4] = node;
    }
  }
}
function bindKey(parent, group2, enter, update, exit, data, key) {
  var i4, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group2.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i4 = 0; i4 < groupLength; ++i4) {
    if (node = group2[i4]) {
      keyValues[i4] = keyValue = key.call(node, node.__data__, i4, group2) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i4] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i4 = 0; i4 < dataLength; ++i4) {
    keyValue = key.call(parent, data[i4], i4, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i4] = node;
      node.__data__ = data[i4];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i4] = new EnterNode(parent, data[i4]);
    }
  }
  for (i4 = 0; i4 < groupLength; ++i4) {
    if ((node = group2[i4]) && nodeByKeyValue.get(keyValues[i4]) === node) {
      exit[i4] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length)
    return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups2 = this._groups;
  if (typeof value !== "function")
    value = constant_default2(value);
  for (var m4 = groups2.length, update = new Array(m4), enter = new Array(m4), exit = new Array(m4), j3 = 0; j3 < m4; ++j3) {
    var parent = parents[j3], group2 = groups2[j3], groupLength = group2.length, data = array_default(value.call(parent, parent && parent.__data__, j3, parents)), dataLength = data.length, enterGroup = enter[j3] = new Array(dataLength), updateGroup = update[j3] = new Array(dataLength), exitGroup = exit[j3] = new Array(groupLength);
    bind(parent, group2, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null)
    update = onupdate(update);
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

// node_modules/d3-selection/src/selection/merge.js
function merge_default(selection2) {
  if (!(selection2 instanceof Selection))
    throw new Error("invalid merge");
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m4 = Math.min(m0, m1), merges = new Array(m0), j3 = 0; j3 < m4; ++j3) {
    for (var group0 = groups0[j3], group1 = groups1[j3], n2 = group0.length, merge2 = merges[j3] = new Array(n2), node, i4 = 0; i4 < n2; ++i4) {
      if (node = group0[i4] || group1[i4]) {
        merge2[i4] = node;
      }
    }
  }
  for (; j3 < m0; ++j3) {
    merges[j3] = groups0[j3];
  }
  return new Selection(merges, this._parents);
}

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups2 = this._groups, j3 = -1, m4 = groups2.length; ++j3 < m4; ) {
    for (var group2 = groups2[j3], i4 = group2.length - 1, next = group2[i4], node; --i4 >= 0; ) {
      if (node = group2[i4]) {
        if (next && node.compareDocumentPosition(next) ^ 4)
          next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare)
    compare = ascending;
  function compareNode(a6, b10) {
    return a6 && b10 ? compare(a6.__data__, b10.__data__) : !a6 - !b10;
  }
  for (var groups2 = this._groups, m4 = groups2.length, sortgroups = new Array(m4), j3 = 0; j3 < m4; ++j3) {
    for (var group2 = groups2[j3], n2 = group2.length, sortgroup = sortgroups[j3] = new Array(n2), node, i4 = 0; i4 < n2; ++i4) {
      if (node = group2[i4]) {
        sortgroup[i4] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a6, b10) {
  return a6 < b10 ? -1 : a6 > b10 ? 1 : a6 >= b10 ? 0 : NaN;
}

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups2 = this._groups, j3 = 0, m4 = groups2.length; j3 < m4; ++j3) {
    for (var group2 = groups2[j3], i4 = 0, n2 = group2.length; i4 < n2; ++i4) {
      var node = group2[i4];
      if (node)
        return node;
    }
  }
  return null;
}

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size = 0;
  for (const node of this)
    ++size;
  return size;
}

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups2 = this._groups, j3 = 0, m4 = groups2.length; j3 < m4; ++j3) {
    for (var group2 = groups2[j3], i4 = 0, n2 = group2.length, node; i4 < n2; ++i4) {
      if (node = group2[i4])
        callback.call(node, node.__data__, i4, group2);
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v3 = value.apply(this, arguments);
    if (v3 == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v3);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v3 = value.apply(this, arguments);
    if (v3 == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v3);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v3 = value.apply(this, arguments);
    if (v3 == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v3, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v3 = value.apply(this, arguments);
    if (v3 == null)
      delete this[name];
    else
      this[name] = v3;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i4 = this._names.indexOf(name);
    if (i4 < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i4 = this._names.indexOf(name);
    if (i4 >= 0) {
      this._names.splice(i4, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i4 = -1, n2 = names.length;
  while (++i4 < n2)
    list.add(names[i4]);
}
function classedRemove(node, names) {
  var list = classList(node), i4 = -1, n2 = names.length;
  while (++i4 < n2)
    list.remove(names[i4]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i4 = -1, n2 = names.length;
    while (++i4 < n2)
      if (!list.contains(names[i4]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v3 = value.apply(this, arguments);
    this.textContent = v3 == null ? "" : v3;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v3 = value.apply(this, arguments);
    this.innerHTML = v3 == null ? "" : v3;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create2 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create2 = typeof name === "function" ? name : creator_default(name), select2 = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select2.apply(this, arguments) || null);
  });
}

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames2(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t4) {
    var name = "", i4 = t4.indexOf(".");
    if (i4 >= 0)
      name = t4.slice(i4 + 1), t4 = t4.slice(0, i4);
    return { type: t4, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on)
      return;
    for (var j3 = 0, i4 = -1, m4 = on.length, o4; j3 < m4; ++j3) {
      if (o4 = on[j3], (!typename.type || o4.type === typename.type) && o4.name === typename.name) {
        this.removeEventListener(o4.type, o4.listener, o4.options);
      } else {
        on[++i4] = o4;
      }
    }
    if (++i4)
      on.length = i4;
    else
      delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o4, listener = contextListener(value);
    if (on)
      for (var j3 = 0, m4 = on.length; j3 < m4; ++j3) {
        if ((o4 = on[j3]).type === typename.type && o4.name === typename.name) {
          this.removeEventListener(o4.type, o4.listener, o4.options);
          this.addEventListener(o4.type, o4.listener = listener, o4.options = options);
          o4.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options);
    o4 = { type: typename.type, name: typename.name, value, listener, options };
    if (!on)
      this.__on = [o4];
    else
      on.push(o4);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames2(typename + ""), i4, n2 = typenames.length, t4;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on)
      for (var j3 = 0, m4 = on.length, o4; j3 < m4; ++j3) {
        for (i4 = 0, o4 = on[j3]; i4 < n2; ++i4) {
          if ((t4 = typenames[i4]).type === o4.type && t4.name === o4.name) {
            return o4.value;
          }
        }
      }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i4 = 0; i4 < n2; ++i4)
    this.each(on(typenames[i4], value, options));
  return this;
}

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type2, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type2, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type2, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params);
  };
}
function dispatchFunction(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params.apply(this, arguments));
  };
}
function dispatch_default2(type2, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
}

// node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups2 = this._groups, j3 = 0, m4 = groups2.length; j3 < m4; ++j3) {
    for (var group2 = groups2[j3], i4 = 0, n2 = group2.length, node; i4 < n2; ++i4) {
      if (node = group2[i4])
        yield node;
    }
  }
}

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups2, parents) {
  this._groups = groups2;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default2,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// node_modules/d3-selection/src/create.js
function create_default(name) {
  return select_default2(creator_default(name).call(document.documentElement));
}

// node_modules/d3-selection/src/local.js
var nextId = 0;
function local() {
  return new Local();
}
function Local() {
  this._ = "@" + (++nextId).toString(36);
}
Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id2 = this._;
    while (!(id2 in node))
      if (!(node = node.parentNode))
        return;
    return node[id2];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};

// node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent)
    event = sourceEvent;
  return event;
}

// node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
  event = sourceEvent_default(event);
  if (node === void 0)
    node = event.currentTarget;
  if (node) {
    var svg2 = node.ownerSVGElement || node;
    if (svg2.createSVGPoint) {
      var point6 = svg2.createSVGPoint();
      point6.x = event.clientX, point6.y = event.clientY;
      point6 = point6.matrixTransform(node.getScreenCTM().inverse());
      return [point6.x, point6.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

// node_modules/d3-selection/src/pointers.js
function pointers_default(events, node) {
  if (events.target) {
    events = sourceEvent_default(events);
    if (node === void 0)
      node = events.currentTarget;
    events = events.touches || [events];
  }
  return Array.from(events, (event) => pointer_default(event, node));
}

// node_modules/d3-selection/src/selectAll.js
function selectAll_default2(selector) {
  return typeof selector === "string" ? new Selection([document.querySelectorAll(selector)], [document.documentElement]) : new Selection([selector == null ? [] : array_default(selector)], root);
}

// node_modules/d3-drag/src/noevent.js
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent_default(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root3 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, true);
  if ("onselectstart" in root3) {
    selection2.on("selectstart.drag", noevent_default, true);
  } else {
    root3.__noselect = root3.style.MozUserSelect;
    root3.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root3 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, true);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root3) {
    selection2.on("selectstart.drag", null);
  } else {
    root3.style.MozUserSelect = root3.__noselect;
    delete root3.__noselect;
  }
}

// node_modules/d3-drag/src/constant.js
var constant_default3 = (x6) => () => x6;

// node_modules/d3-drag/src/event.js
function DragEvent(type2, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x: x6,
  y: y7,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type2, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x6, enumerable: true, configurable: true },
    y: { value: y7, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// node_modules/d3-drag/src/drag.js
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(event, d4) {
  return d4 == null ? { x: event.x, y: event.y } : d4;
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag_default() {
  var filter3 = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch_default("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event, d4) {
    if (touchending || !filter3.call(this, event, d4))
      return;
    var gesture = beforestart(this, container.call(this, event, d4), event, d4, "mouse");
    if (!gesture)
      return;
    select_default2(event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    nodrag_default(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  function mousemoved(event) {
    noevent_default(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  function mouseupped(event) {
    select_default2(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent_default(event);
    gestures.mouse("end", event);
  }
  function touchstarted(event, d4) {
    if (!filter3.call(this, event, d4))
      return;
    var touches = event.changedTouches, c8 = container.call(this, event, d4), n2 = touches.length, i4, gesture;
    for (i4 = 0; i4 < n2; ++i4) {
      if (gesture = beforestart(this, c8, event, d4, touches[i4].identifier, touches[i4])) {
        nopropagation(event);
        gesture("start", event, touches[i4]);
      }
    }
  }
  function touchmoved(event) {
    var touches = event.changedTouches, n2 = touches.length, i4, gesture;
    for (i4 = 0; i4 < n2; ++i4) {
      if (gesture = gestures[touches[i4].identifier]) {
        noevent_default(event);
        gesture("drag", event, touches[i4]);
      }
    }
  }
  function touchended(event) {
    var touches = event.changedTouches, n2 = touches.length, i4, gesture;
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i4 = 0; i4 < n2; ++i4) {
      if (gesture = gestures[touches[i4].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i4]);
      }
    }
  }
  function beforestart(that, container2, event, d4, identifier, touch) {
    var dispatch2 = listeners.copy(), p3 = pointer_default(touch || event, container2), dx, dy, s5;
    if ((s5 = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag,
      identifier,
      active,
      x: p3[0],
      y: p3[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch2
    }), d4)) == null)
      return;
    dx = s5.x - p3[0] || 0;
    dy = s5.y - p3[1] || 0;
    return function gesture(type2, event2, touch2) {
      var p02 = p3, n2;
      switch (type2) {
        case "start":
          gestures[identifier] = gesture, n2 = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        case "drag":
          p3 = pointer_default(touch2 || event2, container2), n2 = active;
          break;
      }
      dispatch2.call(type2, that, new DragEvent(type2, {
        sourceEvent: event2,
        subject: s5,
        target: drag,
        identifier,
        active: n2,
        x: p3[0] + dx,
        y: p3[1] + dy,
        dx: p3[0] - p02[0],
        dy: p3[1] - p02[1],
        dispatch: dispatch2
      }), d4);
    };
  }
  drag.filter = function(_2) {
    return arguments.length ? (filter3 = typeof _2 === "function" ? _2 : constant_default3(!!_2), drag) : filter3;
  };
  drag.container = function(_2) {
    return arguments.length ? (container = typeof _2 === "function" ? _2 : constant_default3(_2), drag) : container;
  };
  drag.subject = function(_2) {
    return arguments.length ? (subject = typeof _2 === "function" ? _2 : constant_default3(_2), drag) : subject;
  };
  drag.touchable = function(_2) {
    return arguments.length ? (touchable = typeof _2 === "function" ? _2 : constant_default3(!!_2), drag) : touchable;
  };
  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };
  drag.clickDistance = function(_2) {
    return arguments.length ? (clickDistance2 = (_2 = +_2) * _2, drag) : Math.sqrt(clickDistance2);
  };
  return drag;
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$");
var reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$");
var reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$");
var reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$");
var reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$");
var reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m4, l4;
  format2 = (format2 + "").trim().toLowerCase();
  return (m4 = reHex.exec(format2)) ? (l4 = m4[1].length, m4 = parseInt(m4[1], 16), l4 === 6 ? rgbn(m4) : l4 === 3 ? new Rgb(m4 >> 8 & 15 | m4 >> 4 & 240, m4 >> 4 & 15 | m4 & 240, (m4 & 15) << 4 | m4 & 15, 1) : l4 === 8 ? rgba(m4 >> 24 & 255, m4 >> 16 & 255, m4 >> 8 & 255, (m4 & 255) / 255) : l4 === 4 ? rgba(m4 >> 12 & 15 | m4 >> 8 & 240, m4 >> 8 & 15 | m4 >> 4 & 240, m4 >> 4 & 15 | m4 & 240, ((m4 & 15) << 4 | m4 & 15) / 255) : null) : (m4 = reRgbInteger.exec(format2)) ? new Rgb(m4[1], m4[2], m4[3], 1) : (m4 = reRgbPercent.exec(format2)) ? new Rgb(m4[1] * 255 / 100, m4[2] * 255 / 100, m4[3] * 255 / 100, 1) : (m4 = reRgbaInteger.exec(format2)) ? rgba(m4[1], m4[2], m4[3], m4[4]) : (m4 = reRgbaPercent.exec(format2)) ? rgba(m4[1] * 255 / 100, m4[2] * 255 / 100, m4[3] * 255 / 100, m4[4]) : (m4 = reHslPercent.exec(format2)) ? hsla(m4[1], m4[2] / 100, m4[3] / 100, 1) : (m4 = reHslaPercent.exec(format2)) ? hsla(m4[1], m4[2] / 100, m4[3] / 100, m4[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n2) {
  return new Rgb(n2 >> 16 & 255, n2 >> 8 & 255, n2 & 255, 1);
}
function rgba(r4, g3, b10, a6) {
  if (a6 <= 0)
    r4 = g3 = b10 = NaN;
  return new Rgb(r4, g3, b10, a6);
}
function rgbConvert(o4) {
  if (!(o4 instanceof Color))
    o4 = color(o4);
  if (!o4)
    return new Rgb();
  o4 = o4.rgb();
  return new Rgb(o4.r, o4.g, o4.b, o4.opacity);
}
function rgb(r4, g3, b10, opacity) {
  return arguments.length === 1 ? rgbConvert(r4) : new Rgb(r4, g3, b10, opacity == null ? 1 : opacity);
}
function Rgb(r4, g3, b10, opacity) {
  this.r = +r4;
  this.g = +g3;
  this.b = +b10;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter: function(k4) {
    k4 = k4 == null ? brighter : Math.pow(brighter, k4);
    return new Rgb(this.r * k4, this.g * k4, this.b * k4, this.opacity);
  },
  darker: function(k4) {
    k4 = k4 == null ? darker : Math.pow(darker, k4);
    return new Rgb(this.r * k4, this.g * k4, this.b * k4, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
  var a6 = this.opacity;
  a6 = isNaN(a6) ? 1 : Math.max(0, Math.min(1, a6));
  return (a6 === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a6 === 1 ? ")" : ", " + a6 + ")");
}
function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h3, s5, l4, a6) {
  if (a6 <= 0)
    h3 = s5 = l4 = NaN;
  else if (l4 <= 0 || l4 >= 1)
    h3 = s5 = NaN;
  else if (s5 <= 0)
    h3 = NaN;
  return new Hsl(h3, s5, l4, a6);
}
function hslConvert(o4) {
  if (o4 instanceof Hsl)
    return new Hsl(o4.h, o4.s, o4.l, o4.opacity);
  if (!(o4 instanceof Color))
    o4 = color(o4);
  if (!o4)
    return new Hsl();
  if (o4 instanceof Hsl)
    return o4;
  o4 = o4.rgb();
  var r4 = o4.r / 255, g3 = o4.g / 255, b10 = o4.b / 255, min4 = Math.min(r4, g3, b10), max5 = Math.max(r4, g3, b10), h3 = NaN, s5 = max5 - min4, l4 = (max5 + min4) / 2;
  if (s5) {
    if (r4 === max5)
      h3 = (g3 - b10) / s5 + (g3 < b10) * 6;
    else if (g3 === max5)
      h3 = (b10 - r4) / s5 + 2;
    else
      h3 = (r4 - g3) / s5 + 4;
    s5 /= l4 < 0.5 ? max5 + min4 : 2 - max5 - min4;
    h3 *= 60;
  } else {
    s5 = l4 > 0 && l4 < 1 ? 0 : h3;
  }
  return new Hsl(h3, s5, l4, o4.opacity);
}
function hsl(h3, s5, l4, opacity) {
  return arguments.length === 1 ? hslConvert(h3) : new Hsl(h3, s5, l4, opacity == null ? 1 : opacity);
}
function Hsl(h3, s5, l4, opacity) {
  this.h = +h3;
  this.s = +s5;
  this.l = +l4;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter: function(k4) {
    k4 = k4 == null ? brighter : Math.pow(brighter, k4);
    return new Hsl(this.h, this.s, this.l * k4, this.opacity);
  },
  darker: function(k4) {
    k4 = k4 == null ? darker : Math.pow(darker, k4);
    return new Hsl(this.h, this.s, this.l * k4, this.opacity);
  },
  rgb: function() {
    var h3 = this.h % 360 + (this.h < 0) * 360, s5 = isNaN(h3) || isNaN(this.s) ? 0 : this.s, l4 = this.l, m22 = l4 + (l4 < 0.5 ? l4 : 1 - l4) * s5, m1 = 2 * l4 - m22;
    return new Rgb(hsl2rgb(h3 >= 240 ? h3 - 240 : h3 + 120, m1, m22), hsl2rgb(h3, m1, m22), hsl2rgb(h3 < 120 ? h3 + 240 : h3 - 120, m1, m22), this.opacity);
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a6 = this.opacity;
    a6 = isNaN(a6) ? 1 : Math.max(0, Math.min(1, a6));
    return (a6 === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a6 === 1 ? ")" : ", " + a6 + ")");
  }
}));
function hsl2rgb(h3, m1, m22) {
  return (h3 < 60 ? m1 + (m22 - m1) * h3 / 60 : h3 < 180 ? m22 : h3 < 240 ? m1 + (m22 - m1) * (240 - h3) / 60 : m1) * 255;
}

// node_modules/d3-color/src/math.js
var radians = Math.PI / 180;
var degrees = 180 / Math.PI;

// node_modules/d3-color/src/lab.js
var K = 18;
var Xn = 0.96422;
var Yn = 1;
var Zn = 0.82521;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t22 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;
function labConvert(o4) {
  if (o4 instanceof Lab)
    return new Lab(o4.l, o4.a, o4.b, o4.opacity);
  if (o4 instanceof Hcl)
    return hcl2lab(o4);
  if (!(o4 instanceof Rgb))
    o4 = rgbConvert(o4);
  var r4 = rgb2lrgb(o4.r), g3 = rgb2lrgb(o4.g), b10 = rgb2lrgb(o4.b), y7 = xyz2lab((0.2225045 * r4 + 0.7168786 * g3 + 0.0606169 * b10) / Yn), x6, z2;
  if (r4 === g3 && g3 === b10)
    x6 = z2 = y7;
  else {
    x6 = xyz2lab((0.4360747 * r4 + 0.3850649 * g3 + 0.1430804 * b10) / Xn);
    z2 = xyz2lab((0.0139322 * r4 + 0.0971045 * g3 + 0.7141733 * b10) / Zn);
  }
  return new Lab(116 * y7 - 16, 500 * (x6 - y7), 200 * (y7 - z2), o4.opacity);
}
function gray(l4, opacity) {
  return new Lab(l4, 0, 0, opacity == null ? 1 : opacity);
}
function lab(l4, a6, b10, opacity) {
  return arguments.length === 1 ? labConvert(l4) : new Lab(l4, a6, b10, opacity == null ? 1 : opacity);
}
function Lab(l4, a6, b10, opacity) {
  this.l = +l4;
  this.a = +a6;
  this.b = +b10;
  this.opacity = +opacity;
}
define_default(Lab, lab, extend(Color, {
  brighter: function(k4) {
    return new Lab(this.l + K * (k4 == null ? 1 : k4), this.a, this.b, this.opacity);
  },
  darker: function(k4) {
    return new Lab(this.l - K * (k4 == null ? 1 : k4), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y7 = (this.l + 16) / 116, x6 = isNaN(this.a) ? y7 : y7 + this.a / 500, z2 = isNaN(this.b) ? y7 : y7 - this.b / 200;
    x6 = Xn * lab2xyz(x6);
    y7 = Yn * lab2xyz(y7);
    z2 = Zn * lab2xyz(z2);
    return new Rgb(lrgb2rgb(3.1338561 * x6 - 1.6168667 * y7 - 0.4906146 * z2), lrgb2rgb(-0.9787684 * x6 + 1.9161415 * y7 + 0.033454 * z2), lrgb2rgb(0.0719453 * x6 - 0.2289914 * y7 + 1.4052427 * z2), this.opacity);
  }
}));
function xyz2lab(t4) {
  return t4 > t3 ? Math.pow(t4, 1 / 3) : t4 / t22 + t0;
}
function lab2xyz(t4) {
  return t4 > t1 ? t4 * t4 * t4 : t22 * (t4 - t0);
}
function lrgb2rgb(x6) {
  return 255 * (x6 <= 31308e-7 ? 12.92 * x6 : 1.055 * Math.pow(x6, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x6) {
  return (x6 /= 255) <= 0.04045 ? x6 / 12.92 : Math.pow((x6 + 0.055) / 1.055, 2.4);
}
function hclConvert(o4) {
  if (o4 instanceof Hcl)
    return new Hcl(o4.h, o4.c, o4.l, o4.opacity);
  if (!(o4 instanceof Lab))
    o4 = labConvert(o4);
  if (o4.a === 0 && o4.b === 0)
    return new Hcl(NaN, 0 < o4.l && o4.l < 100 ? 0 : NaN, o4.l, o4.opacity);
  var h3 = Math.atan2(o4.b, o4.a) * degrees;
  return new Hcl(h3 < 0 ? h3 + 360 : h3, Math.sqrt(o4.a * o4.a + o4.b * o4.b), o4.l, o4.opacity);
}
function lch(l4, c8, h3, opacity) {
  return arguments.length === 1 ? hclConvert(l4) : new Hcl(h3, c8, l4, opacity == null ? 1 : opacity);
}
function hcl(h3, c8, l4, opacity) {
  return arguments.length === 1 ? hclConvert(h3) : new Hcl(h3, c8, l4, opacity == null ? 1 : opacity);
}
function Hcl(h3, c8, l4, opacity) {
  this.h = +h3;
  this.c = +c8;
  this.l = +l4;
  this.opacity = +opacity;
}
function hcl2lab(o4) {
  if (isNaN(o4.h))
    return new Lab(o4.l, 0, 0, o4.opacity);
  var h3 = o4.h * radians;
  return new Lab(o4.l, Math.cos(h3) * o4.c, Math.sin(h3) * o4.c, o4.opacity);
}
define_default(Hcl, hcl, extend(Color, {
  brighter: function(k4) {
    return new Hcl(this.h, this.c, this.l + K * (k4 == null ? 1 : k4), this.opacity);
  },
  darker: function(k4) {
    return new Hcl(this.h, this.c, this.l - K * (k4 == null ? 1 : k4), this.opacity);
  },
  rgb: function() {
    return hcl2lab(this).rgb();
  }
}));

// node_modules/d3-color/src/cubehelix.js
var A2 = -0.14861;
var B2 = 1.78277;
var C2 = -0.29227;
var D2 = -0.90649;
var E = 1.97294;
var ED = E * D2;
var EB = E * B2;
var BC_DA = B2 * C2 - D2 * A2;
function cubehelixConvert(o4) {
  if (o4 instanceof Cubehelix)
    return new Cubehelix(o4.h, o4.s, o4.l, o4.opacity);
  if (!(o4 instanceof Rgb))
    o4 = rgbConvert(o4);
  var r4 = o4.r / 255, g3 = o4.g / 255, b10 = o4.b / 255, l4 = (BC_DA * b10 + ED * r4 - EB * g3) / (BC_DA + ED - EB), bl = b10 - l4, k4 = (E * (g3 - l4) - C2 * bl) / D2, s5 = Math.sqrt(k4 * k4 + bl * bl) / (E * l4 * (1 - l4)), h3 = s5 ? Math.atan2(k4, bl) * degrees - 120 : NaN;
  return new Cubehelix(h3 < 0 ? h3 + 360 : h3, s5, l4, o4.opacity);
}
function cubehelix(h3, s5, l4, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h3) : new Cubehelix(h3, s5, l4, opacity == null ? 1 : opacity);
}
function Cubehelix(h3, s5, l4, opacity) {
  this.h = +h3;
  this.s = +s5;
  this.l = +l4;
  this.opacity = +opacity;
}
define_default(Cubehelix, cubehelix, extend(Color, {
  brighter: function(k4) {
    k4 = k4 == null ? brighter : Math.pow(brighter, k4);
    return new Cubehelix(this.h, this.s, this.l * k4, this.opacity);
  },
  darker: function(k4) {
    k4 = k4 == null ? darker : Math.pow(darker, k4);
    return new Cubehelix(this.h, this.s, this.l * k4, this.opacity);
  },
  rgb: function() {
    var h3 = isNaN(this.h) ? 0 : (this.h + 120) * radians, l4 = +this.l, a6 = isNaN(this.s) ? 0 : this.s * l4 * (1 - l4), cosh2 = Math.cos(h3), sinh2 = Math.sin(h3);
    return new Rgb(255 * (l4 + a6 * (A2 * cosh2 + B2 * sinh2)), 255 * (l4 + a6 * (C2 * cosh2 + D2 * sinh2)), 255 * (l4 + a6 * (E * cosh2)), this.opacity);
  }
}));

// node_modules/d3-interpolate/src/basis.js
function basis(t13, v0, v1, v22, v3) {
  var t23 = t13 * t13, t32 = t23 * t13;
  return ((1 - 3 * t13 + 3 * t23 - t32) * v0 + (4 - 6 * t23 + 3 * t32) * v1 + (1 + 3 * t13 + 3 * t23 - 3 * t32) * v22 + t32 * v3) / 6;
}
function basis_default(values) {
  var n2 = values.length - 1;
  return function(t4) {
    var i4 = t4 <= 0 ? t4 = 0 : t4 >= 1 ? (t4 = 1, n2 - 1) : Math.floor(t4 * n2), v1 = values[i4], v22 = values[i4 + 1], v0 = i4 > 0 ? values[i4 - 1] : 2 * v1 - v22, v3 = i4 < n2 - 1 ? values[i4 + 2] : 2 * v22 - v1;
    return basis((t4 - i4 / n2) * n2, v0, v1, v22, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n2 = values.length;
  return function(t4) {
    var i4 = Math.floor(((t4 %= 1) < 0 ? ++t4 : t4) * n2), v0 = values[(i4 + n2 - 1) % n2], v1 = values[i4 % n2], v22 = values[(i4 + 1) % n2], v3 = values[(i4 + 2) % n2];
    return basis((t4 - i4 / n2) * n2, v0, v1, v22, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default4 = (x6) => () => x6;

// node_modules/d3-interpolate/src/color.js
function linear(a6, d4) {
  return function(t4) {
    return a6 + t4 * d4;
  };
}
function exponential(a6, b10, y7) {
  return a6 = Math.pow(a6, y7), b10 = Math.pow(b10, y7) - a6, y7 = 1 / y7, function(t4) {
    return Math.pow(a6 + t4 * b10, y7);
  };
}
function hue(a6, b10) {
  var d4 = b10 - a6;
  return d4 ? linear(a6, d4 > 180 || d4 < -180 ? d4 - 360 * Math.round(d4 / 360) : d4) : constant_default4(isNaN(a6) ? b10 : a6);
}
function gamma(y7) {
  return (y7 = +y7) === 1 ? nogamma : function(a6, b10) {
    return b10 - a6 ? exponential(a6, b10, y7) : constant_default4(isNaN(a6) ? b10 : a6);
  };
}
function nogamma(a6, b10) {
  var d4 = b10 - a6;
  return d4 ? linear(a6, d4) : constant_default4(isNaN(a6) ? b10 : a6);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y7) {
  var color2 = gamma(y7);
  function rgb2(start2, end) {
    var r4 = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g3 = color2(start2.g, end.g), b10 = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t4) {
      start2.r = r4(t4);
      start2.g = g3(t4);
      start2.b = b10(t4);
      start2.opacity = opacity(t4);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n2 = colors.length, r4 = new Array(n2), g3 = new Array(n2), b10 = new Array(n2), i4, color2;
    for (i4 = 0; i4 < n2; ++i4) {
      color2 = rgb(colors[i4]);
      r4[i4] = color2.r || 0;
      g3[i4] = color2.g || 0;
      b10[i4] = color2.b || 0;
    }
    r4 = spline(r4);
    g3 = spline(g3);
    b10 = spline(b10);
    color2.opacity = 1;
    return function(t4) {
      color2.r = r4(t4);
      color2.g = g3(t4);
      color2.b = b10(t4);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a6, b10) {
  if (!b10)
    b10 = [];
  var n2 = a6 ? Math.min(b10.length, a6.length) : 0, c8 = b10.slice(), i4;
  return function(t4) {
    for (i4 = 0; i4 < n2; ++i4)
      c8[i4] = a6[i4] * (1 - t4) + b10[i4] * t4;
    return c8;
  };
}
function isNumberArray(x6) {
  return ArrayBuffer.isView(x6) && !(x6 instanceof DataView);
}

// node_modules/d3-interpolate/src/array.js
function array_default2(a6, b10) {
  return (isNumberArray(b10) ? numberArray_default : genericArray)(a6, b10);
}
function genericArray(a6, b10) {
  var nb = b10 ? b10.length : 0, na = a6 ? Math.min(nb, a6.length) : 0, x6 = new Array(na), c8 = new Array(nb), i4;
  for (i4 = 0; i4 < na; ++i4)
    x6[i4] = value_default(a6[i4], b10[i4]);
  for (; i4 < nb; ++i4)
    c8[i4] = b10[i4];
  return function(t4) {
    for (i4 = 0; i4 < na; ++i4)
      c8[i4] = x6[i4](t4);
    return c8;
  };
}

// node_modules/d3-interpolate/src/date.js
function date_default(a6, b10) {
  var d4 = new Date();
  return a6 = +a6, b10 = +b10, function(t4) {
    return d4.setTime(a6 * (1 - t4) + b10 * t4), d4;
  };
}

// node_modules/d3-interpolate/src/number.js
function number_default2(a6, b10) {
  return a6 = +a6, b10 = +b10, function(t4) {
    return a6 * (1 - t4) + b10 * t4;
  };
}

// node_modules/d3-interpolate/src/object.js
function object_default(a6, b10) {
  var i4 = {}, c8 = {}, k4;
  if (a6 === null || typeof a6 !== "object")
    a6 = {};
  if (b10 === null || typeof b10 !== "object")
    b10 = {};
  for (k4 in b10) {
    if (k4 in a6) {
      i4[k4] = value_default(a6[k4], b10[k4]);
    } else {
      c8[k4] = b10[k4];
    }
  }
  return function(t4) {
    for (k4 in i4)
      c8[k4] = i4[k4](t4);
    return c8;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b10) {
  return function() {
    return b10;
  };
}
function one(b10) {
  return function(t4) {
    return b10(t4) + "";
  };
}
function string_default(a6, b10) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i4 = -1, s5 = [], q = [];
  a6 = a6 + "", b10 = b10 + "";
  while ((am = reA.exec(a6)) && (bm = reB.exec(b10))) {
    if ((bs = bm.index) > bi) {
      bs = b10.slice(bi, bs);
      if (s5[i4])
        s5[i4] += bs;
      else
        s5[++i4] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s5[i4])
        s5[i4] += bm;
      else
        s5[++i4] = bm;
    } else {
      s5[++i4] = null;
      q.push({ i: i4, x: number_default2(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b10.length) {
    bs = b10.slice(bi);
    if (s5[i4])
      s5[i4] += bs;
    else
      s5[++i4] = bs;
  }
  return s5.length < 2 ? q[0] ? one(q[0].x) : zero(b10) : (b10 = q.length, function(t4) {
    for (var i5 = 0, o4; i5 < b10; ++i5)
      s5[(o4 = q[i5]).i] = o4.x(t4);
    return s5.join("");
  });
}

// node_modules/d3-interpolate/src/value.js
function value_default(a6, b10) {
  var t4 = typeof b10, c8;
  return b10 == null || t4 === "boolean" ? constant_default4(b10) : (t4 === "number" ? number_default2 : t4 === "string" ? (c8 = color(b10)) ? (b10 = c8, rgb_default) : string_default : b10 instanceof color ? rgb_default : b10 instanceof Date ? date_default : isNumberArray(b10) ? numberArray_default : Array.isArray(b10) ? genericArray : typeof b10.valueOf !== "function" && typeof b10.toString !== "function" || isNaN(b10) ? object_default : number_default2)(a6, b10);
}

// node_modules/d3-interpolate/src/discrete.js
function discrete_default(range3) {
  var n2 = range3.length;
  return function(t4) {
    return range3[Math.max(0, Math.min(n2 - 1, Math.floor(t4 * n2)))];
  };
}

// node_modules/d3-interpolate/src/hue.js
function hue_default(a6, b10) {
  var i4 = hue(+a6, +b10);
  return function(t4) {
    var x6 = i4(t4);
    return x6 - 360 * Math.floor(x6 / 360);
  };
}

// node_modules/d3-interpolate/src/round.js
function round_default(a6, b10) {
  return a6 = +a6, b10 = +b10, function(t4) {
    return Math.round(a6 * (1 - t4) + b10 * t4);
  };
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees2 = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a6, b10, c8, d4, e3, f4) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a6 * a6 + b10 * b10))
    a6 /= scaleX, b10 /= scaleX;
  if (skewX = a6 * c8 + b10 * d4)
    c8 -= a6 * skewX, d4 -= b10 * skewX;
  if (scaleY = Math.sqrt(c8 * c8 + d4 * d4))
    c8 /= scaleY, d4 /= scaleY, skewX /= scaleY;
  if (a6 * d4 < b10 * c8)
    a6 = -a6, b10 = -b10, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e3,
    translateY: f4,
    rotate: Math.atan2(b10, a6) * degrees2,
    skewX: Math.atan(skewX) * degrees2,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m4 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m4.isIdentity ? identity : decompose_default(m4.a, m4.b, m4.c, m4.d, m4.e, m4.f);
}
function parseSvg(value) {
  if (value == null)
    return identity;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s5) {
    return s5.length ? s5.pop() + " " : "";
  }
  function translate2(xa, ya, xb, yb, s5, q) {
    if (xa !== xb || ya !== yb) {
      var i4 = s5.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i4 - 4, x: number_default2(xa, xb) }, { i: i4 - 2, x: number_default2(ya, yb) });
    } else if (xb || yb) {
      s5.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a6, b10, s5, q) {
    if (a6 !== b10) {
      if (a6 - b10 > 180)
        b10 += 360;
      else if (b10 - a6 > 180)
        a6 += 360;
      q.push({ i: s5.push(pop(s5) + "rotate(", null, degParen) - 2, x: number_default2(a6, b10) });
    } else if (b10) {
      s5.push(pop(s5) + "rotate(" + b10 + degParen);
    }
  }
  function skewX(a6, b10, s5, q) {
    if (a6 !== b10) {
      q.push({ i: s5.push(pop(s5) + "skewX(", null, degParen) - 2, x: number_default2(a6, b10) });
    } else if (b10) {
      s5.push(pop(s5) + "skewX(" + b10 + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s5, q) {
    if (xa !== xb || ya !== yb) {
      var i4 = s5.push(pop(s5) + "scale(", null, ",", null, ")");
      q.push({ i: i4 - 4, x: number_default2(xa, xb) }, { i: i4 - 2, x: number_default2(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s5.push(pop(s5) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a6, b10) {
    var s5 = [], q = [];
    a6 = parse(a6), b10 = parse(b10);
    translate2(a6.translateX, a6.translateY, b10.translateX, b10.translateY, s5, q);
    rotate(a6.rotate, b10.rotate, s5, q);
    skewX(a6.skewX, b10.skewX, s5, q);
    scale(a6.scaleX, a6.scaleY, b10.scaleX, b10.scaleY, s5, q);
    a6 = b10 = null;
    return function(t4) {
      var i4 = -1, n2 = q.length, o4;
      while (++i4 < n2)
        s5[(o4 = q[i4]).i] = o4.x(t4);
      return s5.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x6) {
  return ((x6 = Math.exp(x6)) + 1 / x6) / 2;
}
function sinh(x6) {
  return ((x6 = Math.exp(x6)) - 1 / x6) / 2;
}
function tanh(x6) {
  return ((x6 = Math.exp(2 * x6)) - 1) / (x6 + 1);
}
var zoom_default = function zoomRho(rho, rho2, rho4) {
  function zoom(p02, p1) {
    var ux0 = p02[0], uy0 = p02[1], w0 = p02[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d22 = dx * dx + dy * dy, i4, S2;
    if (d22 < epsilon2) {
      S2 = Math.log(w1 / w0) / rho;
      i4 = function(t4) {
        return [
          ux0 + t4 * dx,
          uy0 + t4 * dy,
          w0 * Math.exp(rho * t4 * S2)
        ];
      };
    } else {
      var d1 = Math.sqrt(d22), b02 = (w1 * w1 - w0 * w0 + rho4 * d22) / (2 * w0 * rho2 * d1), b12 = (w1 * w1 - w0 * w0 - rho4 * d22) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b02 * b02 + 1) - b02), r1 = Math.log(Math.sqrt(b12 * b12 + 1) - b12);
      S2 = (r1 - r0) / rho;
      i4 = function(t4) {
        var s5 = t4 * S2, coshr0 = cosh(r0), u4 = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s5 + r0) - sinh(r0));
        return [
          ux0 + u4 * dx,
          uy0 + u4 * dy,
          w0 * coshr0 / cosh(rho * s5 + r0)
        ];
      };
    }
    i4.duration = S2 * 1e3 * rho / Math.SQRT2;
    return i4;
  }
  zoom.rho = function(_2) {
    var _1 = Math.max(1e-3, +_2), _22 = _1 * _1, _4 = _22 * _22;
    return zoomRho(_1, _22, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/d3-interpolate/src/hsl.js
function hsl2(hue2) {
  return function(start2, end) {
    var h3 = hue2((start2 = hsl(start2)).h, (end = hsl(end)).h), s5 = nogamma(start2.s, end.s), l4 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t4) {
      start2.h = h3(t4);
      start2.s = s5(t4);
      start2.l = l4(t4);
      start2.opacity = opacity(t4);
      return start2 + "";
    };
  };
}
var hsl_default = hsl2(hue);
var hslLong = hsl2(nogamma);

// node_modules/d3-interpolate/src/lab.js
function lab2(start2, end) {
  var l4 = nogamma((start2 = lab(start2)).l, (end = lab(end)).l), a6 = nogamma(start2.a, end.a), b10 = nogamma(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
  return function(t4) {
    start2.l = l4(t4);
    start2.a = a6(t4);
    start2.b = b10(t4);
    start2.opacity = opacity(t4);
    return start2 + "";
  };
}

// node_modules/d3-interpolate/src/hcl.js
function hcl2(hue2) {
  return function(start2, end) {
    var h3 = hue2((start2 = hcl(start2)).h, (end = hcl(end)).h), c8 = nogamma(start2.c, end.c), l4 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t4) {
      start2.h = h3(t4);
      start2.c = c8(t4);
      start2.l = l4(t4);
      start2.opacity = opacity(t4);
      return start2 + "";
    };
  };
}
var hcl_default = hcl2(hue);
var hclLong = hcl2(nogamma);

// node_modules/d3-interpolate/src/cubehelix.js
function cubehelix2(hue2) {
  return function cubehelixGamma(y7) {
    y7 = +y7;
    function cubehelix3(start2, end) {
      var h3 = hue2((start2 = cubehelix(start2)).h, (end = cubehelix(end)).h), s5 = nogamma(start2.s, end.s), l4 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
      return function(t4) {
        start2.h = h3(t4);
        start2.s = s5(t4);
        start2.l = l4(Math.pow(t4, y7));
        start2.opacity = opacity(t4);
        return start2 + "";
      };
    }
    cubehelix3.gamma = cubehelixGamma;
    return cubehelix3;
  }(1);
}
var cubehelix_default = cubehelix2(hue);
var cubehelixLong = cubehelix2(nogamma);

// node_modules/d3-interpolate/src/piecewise.js
function piecewise(interpolate, values) {
  if (values === void 0)
    values = interpolate, interpolate = value_default;
  var i4 = 0, n2 = values.length - 1, v3 = values[0], I2 = new Array(n2 < 0 ? 0 : n2);
  while (i4 < n2)
    I2[i4] = interpolate(v3, v3 = values[++i4]);
  return function(t4) {
    var i5 = Math.max(0, Math.min(n2 - 1, Math.floor(t4 *= n2)));
    return I2[i5](t4 - i5);
  };
}

// node_modules/d3-interpolate/src/quantize.js
function quantize_default(interpolator, n2) {
  var samples = new Array(n2);
  for (var i4 = 0; i4 < n2; ++i4)
    samples[i4] = interpolator(i4 / (n2 - 1));
  return samples;
}

// node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f4) {
  setTimeout(f4, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time2) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time2 = (time2 == null ? now() : +time2) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail)
        taskTail._next = this;
      else
        taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time2;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time2) {
  var t4 = new Timer();
  t4.restart(callback, delay, time2);
  return t4;
}
function timerFlush() {
  now();
  ++frame;
  var t4 = taskHead, e3;
  while (t4) {
    if ((e3 = clockNow - t4._time) >= 0)
      t4._call.call(null, e3);
    t4 = t4._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay)
    clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t03, t13 = taskHead, t23, time2 = Infinity;
  while (t13) {
    if (t13._call) {
      if (time2 > t13._time)
        time2 = t13._time;
      t03 = t13, t13 = t13._next;
    } else {
      t23 = t13._next, t13._next = null;
      t13 = t03 ? t03._next = t23 : taskHead = t23;
    }
  }
  taskTail = t03;
  sleep(time2);
}
function sleep(time2) {
  if (frame)
    return;
  if (timeout)
    timeout = clearTimeout(timeout);
  var delay = time2 - clockNow;
  if (delay > 24) {
    if (time2 < Infinity)
      timeout = setTimeout(wake, time2 - clock.now() - clockSkew);
    if (interval)
      interval = clearInterval(interval);
  } else {
    if (!interval)
      clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time2) {
  var t4 = new Timer();
  delay = delay == null ? 0 : +delay;
  t4.restart((elapsed) => {
    t4.stop();
    callback(elapsed + delay);
  }, delay, time2);
  return t4;
}

// node_modules/d3-timer/src/interval.js
function interval_default(callback, delay, time2) {
  var t4 = new Timer(), total = delay;
  if (delay == null)
    return t4.restart(callback, delay, time2), t4;
  t4._restart = t4.restart;
  t4.restart = function(callback2, delay2, time3) {
    delay2 = +delay2, time3 = time3 == null ? now() : +time3;
    t4._restart(function tick(elapsed) {
      elapsed += total;
      t4._restart(tick, total += delay2, time3);
      callback2(elapsed);
    }, delay2, time3);
  };
  t4.restart(callback, delay, time2);
  return t4;
}

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index3, group2, timing) {
  var schedules = node.__transition;
  if (!schedules)
    node.__transition = {};
  else if (id2 in schedules)
    return;
  create(node, id2, {
    name,
    index: index3,
    group: group2,
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED)
    throw new Error("too late; already scheduled");
  return schedule;
}
function set3(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED)
    throw new Error("too late; already running");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2]))
    throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self2) {
  var schedules = node.__transition, tween;
  schedules[id2] = self2;
  self2.timer = timer(schedule, 0, self2.time);
  function schedule(elapsed) {
    self2.state = SCHEDULED;
    self2.timer.restart(start2, self2.delay, self2.time);
    if (self2.delay <= elapsed)
      start2(elapsed - self2.delay);
  }
  function start2(elapsed) {
    var i4, j3, n2, o4;
    if (self2.state !== SCHEDULED)
      return stop();
    for (i4 in schedules) {
      o4 = schedules[i4];
      if (o4.name !== self2.name)
        continue;
      if (o4.state === STARTED)
        return timeout_default(start2);
      if (o4.state === RUNNING) {
        o4.state = ENDED;
        o4.timer.stop();
        o4.on.call("interrupt", node, node.__data__, o4.index, o4.group);
        delete schedules[i4];
      } else if (+i4 < id2) {
        o4.state = ENDED;
        o4.timer.stop();
        o4.on.call("cancel", node, node.__data__, o4.index, o4.group);
        delete schedules[i4];
      }
    }
    timeout_default(function() {
      if (self2.state === STARTED) {
        self2.state = RUNNING;
        self2.timer.restart(tick, self2.delay, self2.time);
        tick(elapsed);
      }
    });
    self2.state = STARTING;
    self2.on.call("start", node, node.__data__, self2.index, self2.group);
    if (self2.state !== STARTING)
      return;
    self2.state = STARTED;
    tween = new Array(n2 = self2.tween.length);
    for (i4 = 0, j3 = -1; i4 < n2; ++i4) {
      if (o4 = self2.tween[i4].value.call(node, node.__data__, self2.index, self2.group)) {
        tween[++j3] = o4;
      }
    }
    tween.length = j3 + 1;
  }
  function tick(elapsed) {
    var t4 = elapsed < self2.duration ? self2.ease.call(null, elapsed / self2.duration) : (self2.timer.restart(stop), self2.state = ENDING, 1), i4 = -1, n2 = tween.length;
    while (++i4 < n2) {
      tween[i4].call(node, t4);
    }
    if (self2.state === ENDING) {
      self2.on.call("end", node, node.__data__, self2.index, self2.group);
      stop();
    }
  }
  function stop() {
    self2.state = ENDED;
    self2.timer.stop();
    delete schedules[id2];
    for (var i4 in schedules)
      return;
    delete node.__transition;
  }
}

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty4 = true, i4;
  if (!schedules)
    return;
  name = name == null ? null : name + "";
  for (i4 in schedules) {
    if ((schedule = schedules[i4]).name !== name) {
      empty4 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i4];
  }
  if (empty4)
    delete node.__transition;
}

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set3(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i4 = 0, n2 = tween1.length; i4 < n2; ++i4) {
        if (tween1[i4].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i4, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule = set3(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t4 = { name, value }, i4 = 0, n2 = tween1.length; i4 < n2; ++i4) {
        if (tween1[i4].name === name) {
          tween1[i4] = t4;
          break;
        }
      }
      if (i4 === n2)
        tween1.push(t4);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i4 = 0, n2 = tween.length, t4; i4 < n2; ++i4) {
      if ((t4 = tween[i4]).name === name) {
        return t4.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set3(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a6, b10) {
  var c8;
  return (typeof b10 === "number" ? number_default2 : b10 instanceof color ? rgb_default : (c8 = color(b10)) ? (b10 = c8, rgb_default) : string_default)(a6, b10);
}

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i4 = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i4, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i4, value));
}

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i4) {
  return function(t4) {
    this.setAttribute(name, i4.call(this, t4));
  };
}
function attrInterpolateNS(fullname, i4) {
  return function(t4) {
    this.setAttributeNS(fullname.space, fullname.local, i4.call(this, t4));
  };
}
function attrTweenNS(fullname, value) {
  var t03, i0;
  function tween() {
    var i4 = value.apply(this, arguments);
    if (i4 !== i0)
      t03 = (i0 = i4) && attrInterpolateNS(fullname, i4);
    return t03;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t03, i0;
  function tween() {
    var i4 = value.apply(this, arguments);
    if (i4 !== i0)
      t03 = (i0 = i4) && attrInterpolate(name, i4);
    return t03;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set3(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set3(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set3(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}

// node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id2, value) {
  return function() {
    var v3 = value.apply(this, arguments);
    if (typeof v3 !== "function")
      throw new Error();
    set3(this, id2).ease = v3;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function")
    throw new Error();
  return this.each(easeVarying(this._id, value));
}

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function")
    match = matcher_default(match);
  for (var groups2 = this._groups, m4 = groups2.length, subgroups = new Array(m4), j3 = 0; j3 < m4; ++j3) {
    for (var group2 = groups2[j3], n2 = group2.length, subgroup = subgroups[j3] = [], node, i4 = 0; i4 < n2; ++i4) {
      if ((node = group2[i4]) && match.call(node, node.__data__, i4, group2)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/merge.js
function merge_default2(transition2) {
  if (transition2._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m4 = Math.min(m0, m1), merges = new Array(m0), j3 = 0; j3 < m4; ++j3) {
    for (var group0 = groups0[j3], group1 = groups1[j3], n2 = group0.length, merge2 = merges[j3] = new Array(n2), node, i4 = 0; i4 < n2; ++i4) {
      if (node = group0[i4] || group1[i4]) {
        merge2[i4] = node;
      }
    }
  }
  for (; j3 < m0; ++j3) {
    merges[j3] = groups0[j3];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t4) {
    var i4 = t4.indexOf(".");
    if (i4 >= 0)
      t4 = t4.slice(0, i4);
    return !t4 || t4 === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set3;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0)
      (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i4 in this.__transition)
      if (+i4 !== id2)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}

// node_modules/d3-transition/src/transition/select.js
function select_default3(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selector_default(select2);
  for (var groups2 = this._groups, m4 = groups2.length, subgroups = new Array(m4), j3 = 0; j3 < m4; ++j3) {
    for (var group2 = groups2[j3], n2 = group2.length, subgroup = subgroups[j3] = new Array(n2), node, subnode, i4 = 0; i4 < n2; ++i4) {
      if ((node = group2[i4]) && (subnode = select2.call(node, node.__data__, i4, group2))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i4] = subnode;
        schedule_default(subgroup[i4], name, id2, i4, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default3(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selectorAll_default(select2);
  for (var groups2 = this._groups, m4 = groups2.length, subgroups = [], parents = [], j3 = 0; j3 < m4; ++j3) {
    for (var group2 = groups2[j3], n2 = group2.length, node, i4 = 0; i4 < n2; ++i4) {
      if (node = group2[i4]) {
        for (var children2 = select2.call(node, node.__data__, i4, group2), child, inherit2 = get2(node, id2), k4 = 0, l4 = children2.length; k4 < l4; ++k4) {
          if (child = children2[k4]) {
            schedule_default(child, name, id2, k4, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}

// node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set3(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener)
      (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i4 = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i4)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i4, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i4, value), priority).on("end.style." + name, null);
}

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i4, priority) {
  return function(t4) {
    this.style.setProperty(name, i4.call(this, t4), priority);
  };
}
function styleTween(name, value, priority) {
  var t4, i0;
  function tween() {
    var i4 = value.apply(this, arguments);
    if (i4 !== i0)
      t4 = (i0 = i4) && styleInterpolate(name, i4, priority);
    return t4;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i4) {
  return function(t4) {
    this.textContent = i4.call(this, t4);
  };
}
function textTween(value) {
  var t03, i0;
  function tween() {
    var i4 = value.apply(this, arguments);
    if (i4 !== i0)
      t03 = (i0 = i4) && textInterpolate(i4);
    return t03;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween(value));
}

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups2 = this._groups, m4 = groups2.length, j3 = 0; j3 < m4; ++j3) {
    for (var group2 = groups2[j3], n2 = group2.length, node, i4 = 0; i4 < n2; ++i4) {
      if (node = group2[i4]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i4, group2, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups2, this._parents, name, id1);
}

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0)
        resolve();
    } };
    that.each(function() {
      var schedule = set3(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0)
      resolve();
  });
}

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups2, parents, name, id2) {
  this._groups = groups2;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default3,
  filter: filter_default2,
  merge: merge_default2,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// node_modules/d3-ease/src/linear.js
var linear2 = (t4) => +t4;

// node_modules/d3-ease/src/quad.js
function quadIn(t4) {
  return t4 * t4;
}
function quadOut(t4) {
  return t4 * (2 - t4);
}
function quadInOut(t4) {
  return ((t4 *= 2) <= 1 ? t4 * t4 : --t4 * (2 - t4) + 1) / 2;
}

// node_modules/d3-ease/src/cubic.js
function cubicIn(t4) {
  return t4 * t4 * t4;
}
function cubicOut(t4) {
  return --t4 * t4 * t4 + 1;
}
function cubicInOut(t4) {
  return ((t4 *= 2) <= 1 ? t4 * t4 * t4 : (t4 -= 2) * t4 * t4 + 2) / 2;
}

// node_modules/d3-ease/src/poly.js
var exponent = 3;
var polyIn = function custom(e3) {
  e3 = +e3;
  function polyIn2(t4) {
    return Math.pow(t4, e3);
  }
  polyIn2.exponent = custom;
  return polyIn2;
}(exponent);
var polyOut = function custom2(e3) {
  e3 = +e3;
  function polyOut2(t4) {
    return 1 - Math.pow(1 - t4, e3);
  }
  polyOut2.exponent = custom2;
  return polyOut2;
}(exponent);
var polyInOut = function custom3(e3) {
  e3 = +e3;
  function polyInOut2(t4) {
    return ((t4 *= 2) <= 1 ? Math.pow(t4, e3) : 2 - Math.pow(2 - t4, e3)) / 2;
  }
  polyInOut2.exponent = custom3;
  return polyInOut2;
}(exponent);

// node_modules/d3-ease/src/sin.js
var pi = Math.PI;
var halfPi = pi / 2;
function sinIn(t4) {
  return +t4 === 1 ? 1 : 1 - Math.cos(t4 * halfPi);
}
function sinOut(t4) {
  return Math.sin(t4 * halfPi);
}
function sinInOut(t4) {
  return (1 - Math.cos(pi * t4)) / 2;
}

// node_modules/d3-ease/src/math.js
function tpmt(x6) {
  return (Math.pow(2, -10 * x6) - 9765625e-10) * 1.0009775171065494;
}

// node_modules/d3-ease/src/exp.js
function expIn(t4) {
  return tpmt(1 - +t4);
}
function expOut(t4) {
  return 1 - tpmt(t4);
}
function expInOut(t4) {
  return ((t4 *= 2) <= 1 ? tpmt(1 - t4) : 2 - tpmt(t4 - 1)) / 2;
}

// node_modules/d3-ease/src/circle.js
function circleIn(t4) {
  return 1 - Math.sqrt(1 - t4 * t4);
}
function circleOut(t4) {
  return Math.sqrt(1 - --t4 * t4);
}
function circleInOut(t4) {
  return ((t4 *= 2) <= 1 ? 1 - Math.sqrt(1 - t4 * t4) : Math.sqrt(1 - (t4 -= 2) * t4) + 1) / 2;
}

// node_modules/d3-ease/src/bounce.js
var b1 = 4 / 11;
var b22 = 6 / 11;
var b3 = 8 / 11;
var b4 = 3 / 4;
var b5 = 9 / 11;
var b6 = 10 / 11;
var b7 = 15 / 16;
var b8 = 21 / 22;
var b9 = 63 / 64;
var b0 = 1 / b1 / b1;
function bounceIn(t4) {
  return 1 - bounceOut(1 - t4);
}
function bounceOut(t4) {
  return (t4 = +t4) < b1 ? b0 * t4 * t4 : t4 < b3 ? b0 * (t4 -= b22) * t4 + b4 : t4 < b6 ? b0 * (t4 -= b5) * t4 + b7 : b0 * (t4 -= b8) * t4 + b9;
}
function bounceInOut(t4) {
  return ((t4 *= 2) <= 1 ? 1 - bounceOut(1 - t4) : bounceOut(t4 - 1) + 1) / 2;
}

// node_modules/d3-ease/src/back.js
var overshoot = 1.70158;
var backIn = function custom4(s5) {
  s5 = +s5;
  function backIn2(t4) {
    return (t4 = +t4) * t4 * (s5 * (t4 - 1) + t4);
  }
  backIn2.overshoot = custom4;
  return backIn2;
}(overshoot);
var backOut = function custom5(s5) {
  s5 = +s5;
  function backOut2(t4) {
    return --t4 * t4 * ((t4 + 1) * s5 + t4) + 1;
  }
  backOut2.overshoot = custom5;
  return backOut2;
}(overshoot);
var backInOut = function custom6(s5) {
  s5 = +s5;
  function backInOut2(t4) {
    return ((t4 *= 2) < 1 ? t4 * t4 * ((s5 + 1) * t4 - s5) : (t4 -= 2) * t4 * ((s5 + 1) * t4 + s5) + 2) / 2;
  }
  backInOut2.overshoot = custom6;
  return backInOut2;
}(overshoot);

// node_modules/d3-ease/src/elastic.js
var tau = 2 * Math.PI;
var amplitude = 1;
var period = 0.3;
var elasticIn = function custom7(a6, p3) {
  var s5 = Math.asin(1 / (a6 = Math.max(1, a6))) * (p3 /= tau);
  function elasticIn2(t4) {
    return a6 * tpmt(- --t4) * Math.sin((s5 - t4) / p3);
  }
  elasticIn2.amplitude = function(a7) {
    return custom7(a7, p3 * tau);
  };
  elasticIn2.period = function(p4) {
    return custom7(a6, p4);
  };
  return elasticIn2;
}(amplitude, period);
var elasticOut = function custom8(a6, p3) {
  var s5 = Math.asin(1 / (a6 = Math.max(1, a6))) * (p3 /= tau);
  function elasticOut2(t4) {
    return 1 - a6 * tpmt(t4 = +t4) * Math.sin((t4 + s5) / p3);
  }
  elasticOut2.amplitude = function(a7) {
    return custom8(a7, p3 * tau);
  };
  elasticOut2.period = function(p4) {
    return custom8(a6, p4);
  };
  return elasticOut2;
}(amplitude, period);
var elasticInOut = function custom9(a6, p3) {
  var s5 = Math.asin(1 / (a6 = Math.max(1, a6))) * (p3 /= tau);
  function elasticInOut2(t4) {
    return ((t4 = t4 * 2 - 1) < 0 ? a6 * tpmt(-t4) * Math.sin((s5 - t4) / p3) : 2 - a6 * tpmt(t4) * Math.sin((s5 + t4) / p3)) / 2;
  }
  elasticInOut2.amplitude = function(a7) {
    return custom9(a7, p3 * tau);
  };
  elasticInOut2.period = function(p4) {
    return custom9(a6, p4);
  };
  return elasticInOut2;
}(amplitude, period);

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups2 = this._groups, m4 = groups2.length, j3 = 0; j3 < m4; ++j3) {
    for (var group2 = groups2[j3], n2 = group2.length, node, i4 = 0; i4 < n2; ++i4) {
      if (node = group2[i4]) {
        schedule_default(node, name, id2, i4, group2, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups2, this._parents, name, id2);
}

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-transition/src/active.js
var root2 = [null];
function active_default(node, name) {
  var schedules = node.__transition, schedule, i4;
  if (schedules) {
    name = name == null ? null : name + "";
    for (i4 in schedules) {
      if ((schedule = schedules[i4]).state > SCHEDULED && schedule.name === name) {
        return new Transition([[node]], root2, name, +i4);
      }
    }
  }
  return null;
}

// node_modules/d3-brush/src/constant.js
var constant_default5 = (x6) => () => x6;

// node_modules/d3-brush/src/event.js
function BrushEvent(type2, {
  sourceEvent,
  target,
  selection: selection2,
  mode,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type2, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    selection: { value: selection2, enumerable: true, configurable: true },
    mode: { value: mode, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}

// node_modules/d3-brush/src/noevent.js
function nopropagation2(event) {
  event.stopImmediatePropagation();
}
function noevent_default2(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-brush/src/brush.js
var MODE_DRAG = { name: "drag" };
var MODE_SPACE = { name: "space" };
var MODE_HANDLE = { name: "handle" };
var MODE_CENTER = { name: "center" };
var { abs, max: max2, min: min2 } = Math;
function number1(e3) {
  return [+e3[0], +e3[1]];
}
function number2(e3) {
  return [number1(e3[0]), number1(e3[1])];
}
var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x6, e3) {
    return x6 == null ? null : [[+x6[0], e3[0][1]], [+x6[1], e3[1][1]]];
  },
  output: function(xy) {
    return xy && [xy[0][0], xy[1][0]];
  }
};
var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y7, e3) {
    return y7 == null ? null : [[e3[0][0], +y7[0]], [e3[1][0], +y7[1]]];
  },
  output: function(xy) {
    return xy && [xy[0][1], xy[1][1]];
  }
};
var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) {
    return xy == null ? null : number2(xy);
  },
  output: function(xy) {
    return xy;
  }
};
var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};
var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};
var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};
var signsX = {
  overlay: 1,
  selection: 1,
  n: null,
  e: 1,
  s: null,
  w: -1,
  nw: -1,
  ne: 1,
  se: 1,
  sw: -1
};
var signsY = {
  overlay: 1,
  selection: 1,
  n: -1,
  e: null,
  s: 1,
  w: null,
  nw: -1,
  ne: -1,
  se: 1,
  sw: 1
};
function type(t4) {
  return { type: t4 };
}
function defaultFilter2(event) {
  return !event.ctrlKey && !event.button;
}
function defaultExtent() {
  var svg2 = this.ownerSVGElement || this;
  if (svg2.hasAttribute("viewBox")) {
    svg2 = svg2.viewBox.baseVal;
    return [[svg2.x, svg2.y], [svg2.x + svg2.width, svg2.y + svg2.height]];
  }
  return [[0, 0], [svg2.width.baseVal.value, svg2.height.baseVal.value]];
}
function defaultTouchable2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function local2(node) {
  while (!node.__brush)
    if (!(node = node.parentNode))
      return;
  return node.__brush;
}
function empty3(extent) {
  return extent[0][0] === extent[1][0] || extent[0][1] === extent[1][1];
}
function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}
function brushX() {
  return brush(X);
}
function brushY() {
  return brush(Y);
}
function brush_default() {
  return brush(XY);
}
function brush(dim) {
  var extent = defaultExtent, filter3 = defaultFilter2, touchable = defaultTouchable2, keys = true, listeners = dispatch_default("start", "brush", "end"), handleSize = 6, touchending;
  function brush2(group2) {
    var overlay = group2.property("__brush", initialize).selectAll(".overlay").data([type("overlay")]);
    overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", cursors.overlay).merge(overlay).each(function() {
      var extent2 = local2(this).extent;
      select_default2(this).attr("x", extent2[0][0]).attr("y", extent2[0][1]).attr("width", extent2[1][0] - extent2[0][0]).attr("height", extent2[1][1] - extent2[0][1]);
    });
    group2.selectAll(".selection").data([type("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
    var handle = group2.selectAll(".handle").data(dim.handles, function(d4) {
      return d4.type;
    });
    handle.exit().remove();
    handle.enter().append("rect").attr("class", function(d4) {
      return "handle handle--" + d4.type;
    }).attr("cursor", function(d4) {
      return cursors[d4.type];
    });
    group2.each(redraw).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", started).filter(touchable).on("touchstart.brush", started).on("touchmove.brush", touchmoved).on("touchend.brush touchcancel.brush", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  brush2.move = function(group2, selection2) {
    if (group2.tween) {
      group2.on("start.brush", function(event) {
        emitter(this, arguments).beforestart().start(event);
      }).on("interrupt.brush end.brush", function(event) {
        emitter(this, arguments).end(event);
      }).tween("brush", function() {
        var that = this, state = that.__brush, emit = emitter(that, arguments), selection0 = state.selection, selection1 = dim.input(typeof selection2 === "function" ? selection2.apply(this, arguments) : selection2, state.extent), i4 = value_default(selection0, selection1);
        function tween(t4) {
          state.selection = t4 === 1 && selection1 === null ? null : i4(t4);
          redraw.call(that);
          emit.brush();
        }
        return selection0 !== null && selection1 !== null ? tween : tween(1);
      });
    } else {
      group2.each(function() {
        var that = this, args = arguments, state = that.__brush, selection1 = dim.input(typeof selection2 === "function" ? selection2.apply(that, args) : selection2, state.extent), emit = emitter(that, args).beforestart();
        interrupt_default(that);
        state.selection = selection1 === null ? null : selection1;
        redraw.call(that);
        emit.start().brush().end();
      });
    }
  };
  brush2.clear = function(group2) {
    brush2.move(group2, null);
  };
  function redraw() {
    var group2 = select_default2(this), selection2 = local2(this).selection;
    if (selection2) {
      group2.selectAll(".selection").style("display", null).attr("x", selection2[0][0]).attr("y", selection2[0][1]).attr("width", selection2[1][0] - selection2[0][0]).attr("height", selection2[1][1] - selection2[0][1]);
      group2.selectAll(".handle").style("display", null).attr("x", function(d4) {
        return d4.type[d4.type.length - 1] === "e" ? selection2[1][0] - handleSize / 2 : selection2[0][0] - handleSize / 2;
      }).attr("y", function(d4) {
        return d4.type[0] === "s" ? selection2[1][1] - handleSize / 2 : selection2[0][1] - handleSize / 2;
      }).attr("width", function(d4) {
        return d4.type === "n" || d4.type === "s" ? selection2[1][0] - selection2[0][0] + handleSize : handleSize;
      }).attr("height", function(d4) {
        return d4.type === "e" || d4.type === "w" ? selection2[1][1] - selection2[0][1] + handleSize : handleSize;
      });
    } else {
      group2.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
    }
  }
  function emitter(that, args, clean) {
    var emit = that.__brush.emitter;
    return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
  }
  function Emitter(that, args, clean) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
    this.clean = clean;
  }
  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1)
        this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function(event, mode) {
      if (this.starting)
        this.starting = false, this.emit("start", event, mode);
      else
        this.emit("brush", event);
      return this;
    },
    brush: function(event, mode) {
      this.emit("brush", event, mode);
      return this;
    },
    end: function(event, mode) {
      if (--this.active === 0)
        delete this.state.emitter, this.emit("end", event, mode);
      return this;
    },
    emit: function(type2, event, mode) {
      var d4 = select_default2(this.that).datum();
      listeners.call(type2, this.that, new BrushEvent(type2, {
        sourceEvent: event,
        target: brush2,
        selection: dim.output(this.state.selection),
        mode,
        dispatch: listeners
      }), d4);
    }
  };
  function started(event) {
    if (touchending && !event.touches)
      return;
    if (!filter3.apply(this, arguments))
      return;
    var that = this, type2 = event.target.__data__.type, mode = (keys && event.metaKey ? type2 = "overlay" : type2) === "selection" ? MODE_DRAG : keys && event.altKey ? MODE_CENTER : MODE_HANDLE, signX = dim === Y ? null : signsX[type2], signY = dim === X ? null : signsY[type2], state = local2(that), extent2 = state.extent, selection2 = state.selection, W = extent2[0][0], w0, w1, N2 = extent2[0][1], n0, n1, E2 = extent2[1][0], e0, e1, S2 = extent2[1][1], s0, s1, dx = 0, dy = 0, moving, shifting = signX && signY && keys && event.shiftKey, lockX, lockY, points = Array.from(event.touches || [event], (t4) => {
      const i4 = t4.identifier;
      t4 = pointer_default(t4, that);
      t4.point0 = t4.slice();
      t4.identifier = i4;
      return t4;
    });
    if (type2 === "overlay") {
      if (selection2)
        moving = true;
      const pts = [points[0], points[1] || points[0]];
      state.selection = selection2 = [[
        w0 = dim === Y ? W : min2(pts[0][0], pts[1][0]),
        n0 = dim === X ? N2 : min2(pts[0][1], pts[1][1])
      ], [
        e0 = dim === Y ? E2 : max2(pts[0][0], pts[1][0]),
        s0 = dim === X ? S2 : max2(pts[0][1], pts[1][1])
      ]];
      if (points.length > 1)
        move();
    } else {
      w0 = selection2[0][0];
      n0 = selection2[0][1];
      e0 = selection2[1][0];
      s0 = selection2[1][1];
    }
    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;
    var group2 = select_default2(that).attr("pointer-events", "none");
    var overlay = group2.selectAll(".overlay").attr("cursor", cursors[type2]);
    interrupt_default(that);
    var emit = emitter(that, arguments, true).beforestart();
    if (event.touches) {
      emit.moved = moved;
      emit.ended = ended;
    } else {
      var view = select_default2(event.view).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
      if (keys)
        view.on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true);
      nodrag_default(event.view);
    }
    redraw.call(that);
    emit.start(event, mode.name);
    function moved(event2) {
      for (const p3 of event2.changedTouches || [event2]) {
        for (const d4 of points)
          if (d4.identifier === p3.identifier)
            d4.cur = pointer_default(p3, that);
      }
      if (shifting && !lockX && !lockY && points.length === 1) {
        const point6 = points[0];
        if (abs(point6.cur[0] - point6[0]) > abs(point6.cur[1] - point6[1]))
          lockY = true;
        else
          lockX = true;
      }
      for (const point6 of points)
        if (point6.cur)
          point6[0] = point6.cur[0], point6[1] = point6.cur[1];
      moving = true;
      noevent_default2(event2);
      move(event2);
    }
    function move(event2) {
      const point6 = points[0], point0 = point6.point0;
      var t4;
      dx = point6[0] - point0[0];
      dy = point6[1] - point0[1];
      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX)
            dx = max2(W - w0, min2(E2 - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY)
            dy = max2(N2 - n0, min2(S2 - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (points[1]) {
            if (signX)
              w1 = max2(W, min2(E2, points[0][0])), e1 = max2(W, min2(E2, points[1][0])), signX = 1;
            if (signY)
              n1 = max2(N2, min2(S2, points[0][1])), s1 = max2(N2, min2(S2, points[1][1])), signY = 1;
          } else {
            if (signX < 0)
              dx = max2(W - w0, min2(E2 - w0, dx)), w1 = w0 + dx, e1 = e0;
            else if (signX > 0)
              dx = max2(W - e0, min2(E2 - e0, dx)), w1 = w0, e1 = e0 + dx;
            if (signY < 0)
              dy = max2(N2 - n0, min2(S2 - n0, dy)), n1 = n0 + dy, s1 = s0;
            else if (signY > 0)
              dy = max2(N2 - s0, min2(S2 - s0, dy)), n1 = n0, s1 = s0 + dy;
          }
          break;
        }
        case MODE_CENTER: {
          if (signX)
            w1 = max2(W, min2(E2, w0 - dx * signX)), e1 = max2(W, min2(E2, e0 + dx * signX));
          if (signY)
            n1 = max2(N2, min2(S2, n0 - dy * signY)), s1 = max2(N2, min2(S2, s0 + dy * signY));
          break;
        }
      }
      if (e1 < w1) {
        signX *= -1;
        t4 = w0, w0 = e0, e0 = t4;
        t4 = w1, w1 = e1, e1 = t4;
        if (type2 in flipX)
          overlay.attr("cursor", cursors[type2 = flipX[type2]]);
      }
      if (s1 < n1) {
        signY *= -1;
        t4 = n0, n0 = s0, s0 = t4;
        t4 = n1, n1 = s1, s1 = t4;
        if (type2 in flipY)
          overlay.attr("cursor", cursors[type2 = flipY[type2]]);
      }
      if (state.selection)
        selection2 = state.selection;
      if (lockX)
        w1 = selection2[0][0], e1 = selection2[1][0];
      if (lockY)
        n1 = selection2[0][1], s1 = selection2[1][1];
      if (selection2[0][0] !== w1 || selection2[0][1] !== n1 || selection2[1][0] !== e1 || selection2[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush(event2, mode.name);
      }
    }
    function ended(event2) {
      nopropagation2(event2);
      if (event2.touches) {
        if (event2.touches.length)
          return;
        if (touchending)
          clearTimeout(touchending);
        touchending = setTimeout(function() {
          touchending = null;
        }, 500);
      } else {
        yesdrag(event2.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group2.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection)
        selection2 = state.selection;
      if (empty3(selection2))
        state.selection = null, redraw.call(that);
      emit.end(event2, mode.name);
    }
    function keydowned(event2) {
      switch (event2.keyCode) {
        case 16: {
          shifting = signX && signY;
          break;
        }
        case 18: {
          if (mode === MODE_HANDLE) {
            if (signX)
              e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY)
              s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move();
          }
          break;
        }
        case 32: {
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0)
              e0 = e1 - dx;
            else if (signX > 0)
              w0 = w1 - dx;
            if (signY < 0)
              s0 = s1 - dy;
            else if (signY > 0)
              n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move();
          }
          break;
        }
        default:
          return;
      }
      noevent_default2(event2);
    }
    function keyupped(event2) {
      switch (event2.keyCode) {
        case 16: {
          if (shifting) {
            lockX = lockY = shifting = false;
            move();
          }
          break;
        }
        case 18: {
          if (mode === MODE_CENTER) {
            if (signX < 0)
              e0 = e1;
            else if (signX > 0)
              w0 = w1;
            if (signY < 0)
              s0 = s1;
            else if (signY > 0)
              n0 = n1;
            mode = MODE_HANDLE;
            move();
          }
          break;
        }
        case 32: {
          if (mode === MODE_SPACE) {
            if (event2.altKey) {
              if (signX)
                e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY)
                s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0)
                e0 = e1;
              else if (signX > 0)
                w0 = w1;
              if (signY < 0)
                s0 = s1;
              else if (signY > 0)
                n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type2]);
            move();
          }
          break;
        }
        default:
          return;
      }
      noevent_default2(event2);
    }
  }
  function touchmoved(event) {
    emitter(this, arguments).moved(event);
  }
  function touchended(event) {
    emitter(this, arguments).ended(event);
  }
  function initialize() {
    var state = this.__brush || { selection: null };
    state.extent = number2(extent.apply(this, arguments));
    state.dim = dim;
    return state;
  }
  brush2.extent = function(_2) {
    return arguments.length ? (extent = typeof _2 === "function" ? _2 : constant_default5(number2(_2)), brush2) : extent;
  };
  brush2.filter = function(_2) {
    return arguments.length ? (filter3 = typeof _2 === "function" ? _2 : constant_default5(!!_2), brush2) : filter3;
  };
  brush2.touchable = function(_2) {
    return arguments.length ? (touchable = typeof _2 === "function" ? _2 : constant_default5(!!_2), brush2) : touchable;
  };
  brush2.handleSize = function(_2) {
    return arguments.length ? (handleSize = +_2, brush2) : handleSize;
  };
  brush2.keyModifiers = function(_2) {
    return arguments.length ? (keys = !!_2, brush2) : keys;
  };
  brush2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush2 : value;
  };
  return brush2;
}

// node_modules/d3-chord/src/math.js
var abs2 = Math.abs;
var cos = Math.cos;
var sin = Math.sin;
var pi2 = Math.PI;
var halfPi2 = pi2 / 2;
var tau2 = pi2 * 2;
var max3 = Math.max;
var epsilon3 = 1e-12;

// node_modules/d3-chord/src/chord.js
function range(i4, j3) {
  return Array.from({ length: j3 - i4 }, (_2, k4) => i4 + k4);
}
function compareValue(compare) {
  return function(a6, b10) {
    return compare(a6.source.value + a6.target.value, b10.source.value + b10.target.value);
  };
}
function chord_default() {
  return chord(false, false);
}
function chordTranspose() {
  return chord(false, true);
}
function chordDirected() {
  return chord(true, false);
}
function chord(directed, transpose) {
  var padAngle = 0, sortGroups = null, sortSubgroups = null, sortChords = null;
  function chord2(matrix) {
    var n2 = matrix.length, groupSums = new Array(n2), groupIndex = range(0, n2), chords = new Array(n2 * n2), groups2 = new Array(n2), k4 = 0, dx;
    matrix = Float64Array.from({ length: n2 * n2 }, transpose ? (_2, i4) => matrix[i4 % n2][i4 / n2 | 0] : (_2, i4) => matrix[i4 / n2 | 0][i4 % n2]);
    for (let i4 = 0; i4 < n2; ++i4) {
      let x6 = 0;
      for (let j3 = 0; j3 < n2; ++j3)
        x6 += matrix[i4 * n2 + j3] + directed * matrix[j3 * n2 + i4];
      k4 += groupSums[i4] = x6;
    }
    k4 = max3(0, tau2 - padAngle * n2) / k4;
    dx = k4 ? padAngle : tau2 / n2;
    {
      let x6 = 0;
      if (sortGroups)
        groupIndex.sort((a6, b10) => sortGroups(groupSums[a6], groupSums[b10]));
      for (const i4 of groupIndex) {
        const x06 = x6;
        if (directed) {
          const subgroupIndex = range(~n2 + 1, n2).filter((j3) => j3 < 0 ? matrix[~j3 * n2 + i4] : matrix[i4 * n2 + j3]);
          if (sortSubgroups)
            subgroupIndex.sort((a6, b10) => sortSubgroups(a6 < 0 ? -matrix[~a6 * n2 + i4] : matrix[i4 * n2 + a6], b10 < 0 ? -matrix[~b10 * n2 + i4] : matrix[i4 * n2 + b10]));
          for (const j3 of subgroupIndex) {
            if (j3 < 0) {
              const chord3 = chords[~j3 * n2 + i4] || (chords[~j3 * n2 + i4] = { source: null, target: null });
              chord3.target = { index: i4, startAngle: x6, endAngle: x6 += matrix[~j3 * n2 + i4] * k4, value: matrix[~j3 * n2 + i4] };
            } else {
              const chord3 = chords[i4 * n2 + j3] || (chords[i4 * n2 + j3] = { source: null, target: null });
              chord3.source = { index: i4, startAngle: x6, endAngle: x6 += matrix[i4 * n2 + j3] * k4, value: matrix[i4 * n2 + j3] };
            }
          }
          groups2[i4] = { index: i4, startAngle: x06, endAngle: x6, value: groupSums[i4] };
        } else {
          const subgroupIndex = range(0, n2).filter((j3) => matrix[i4 * n2 + j3] || matrix[j3 * n2 + i4]);
          if (sortSubgroups)
            subgroupIndex.sort((a6, b10) => sortSubgroups(matrix[i4 * n2 + a6], matrix[i4 * n2 + b10]));
          for (const j3 of subgroupIndex) {
            let chord3;
            if (i4 < j3) {
              chord3 = chords[i4 * n2 + j3] || (chords[i4 * n2 + j3] = { source: null, target: null });
              chord3.source = { index: i4, startAngle: x6, endAngle: x6 += matrix[i4 * n2 + j3] * k4, value: matrix[i4 * n2 + j3] };
            } else {
              chord3 = chords[j3 * n2 + i4] || (chords[j3 * n2 + i4] = { source: null, target: null });
              chord3.target = { index: i4, startAngle: x6, endAngle: x6 += matrix[i4 * n2 + j3] * k4, value: matrix[i4 * n2 + j3] };
              if (i4 === j3)
                chord3.source = chord3.target;
            }
            if (chord3.source && chord3.target && chord3.source.value < chord3.target.value) {
              const source = chord3.source;
              chord3.source = chord3.target;
              chord3.target = source;
            }
          }
          groups2[i4] = { index: i4, startAngle: x06, endAngle: x6, value: groupSums[i4] };
        }
        x6 += dx;
      }
    }
    chords = Object.values(chords);
    chords.groups = groups2;
    return sortChords ? chords.sort(sortChords) : chords;
  }
  chord2.padAngle = function(_2) {
    return arguments.length ? (padAngle = max3(0, _2), chord2) : padAngle;
  };
  chord2.sortGroups = function(_2) {
    return arguments.length ? (sortGroups = _2, chord2) : sortGroups;
  };
  chord2.sortSubgroups = function(_2) {
    return arguments.length ? (sortSubgroups = _2, chord2) : sortSubgroups;
  };
  chord2.sortChords = function(_2) {
    return arguments.length ? (_2 == null ? sortChords = null : (sortChords = compareValue(_2))._ = _2, chord2) : sortChords && sortChords._;
  };
  return chord2;
}

// node_modules/d3-path/src/path.js
var pi3 = Math.PI;
var tau3 = 2 * pi3;
var epsilon4 = 1e-6;
var tauEpsilon = tau3 - epsilon4;
function Path() {
  this._x0 = this._y0 = this._x1 = this._y1 = null;
  this._ = "";
}
function path() {
  return new Path();
}
Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x6, y7) {
    this._ += "M" + (this._x0 = this._x1 = +x6) + "," + (this._y0 = this._y1 = +y7);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x6, y7) {
    this._ += "L" + (this._x1 = +x6) + "," + (this._y1 = +y7);
  },
  quadraticCurveTo: function(x12, y12, x6, y7) {
    this._ += "Q" + +x12 + "," + +y12 + "," + (this._x1 = +x6) + "," + (this._y1 = +y7);
  },
  bezierCurveTo: function(x12, y12, x22, y22, x6, y7) {
    this._ += "C" + +x12 + "," + +y12 + "," + +x22 + "," + +y22 + "," + (this._x1 = +x6) + "," + (this._y1 = +y7);
  },
  arcTo: function(x12, y12, x22, y22, r4) {
    x12 = +x12, y12 = +y12, x22 = +x22, y22 = +y22, r4 = +r4;
    var x06 = this._x1, y06 = this._y1, x21 = x22 - x12, y21 = y22 - y12, x01 = x06 - x12, y01 = y06 - y12, l01_2 = x01 * x01 + y01 * y01;
    if (r4 < 0)
      throw new Error("negative radius: " + r4);
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x12) + "," + (this._y1 = y12);
    } else if (!(l01_2 > epsilon4))
      ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon4) || !r4) {
      this._ += "L" + (this._x1 = x12) + "," + (this._y1 = y12);
    } else {
      var x20 = x22 - x06, y20 = y22 - y06, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l4 = r4 * Math.tan((pi3 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l4 / l01, t21 = l4 / l21;
      if (Math.abs(t01 - 1) > epsilon4) {
        this._ += "L" + (x12 + t01 * x01) + "," + (y12 + t01 * y01);
      }
      this._ += "A" + r4 + "," + r4 + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x12 + t21 * x21) + "," + (this._y1 = y12 + t21 * y21);
    }
  },
  arc: function(x6, y7, r4, a0, a1, ccw) {
    x6 = +x6, y7 = +y7, r4 = +r4, ccw = !!ccw;
    var dx = r4 * Math.cos(a0), dy = r4 * Math.sin(a0), x06 = x6 + dx, y06 = y7 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (r4 < 0)
      throw new Error("negative radius: " + r4);
    if (this._x1 === null) {
      this._ += "M" + x06 + "," + y06;
    } else if (Math.abs(this._x1 - x06) > epsilon4 || Math.abs(this._y1 - y06) > epsilon4) {
      this._ += "L" + x06 + "," + y06;
    }
    if (!r4)
      return;
    if (da < 0)
      da = da % tau3 + tau3;
    if (da > tauEpsilon) {
      this._ += "A" + r4 + "," + r4 + ",0,1," + cw + "," + (x6 - dx) + "," + (y7 - dy) + "A" + r4 + "," + r4 + ",0,1," + cw + "," + (this._x1 = x06) + "," + (this._y1 = y06);
    } else if (da > epsilon4) {
      this._ += "A" + r4 + "," + r4 + ",0," + +(da >= pi3) + "," + cw + "," + (this._x1 = x6 + r4 * Math.cos(a1)) + "," + (this._y1 = y7 + r4 * Math.sin(a1));
    }
  },
  rect: function(x6, y7, w3, h3) {
    this._ += "M" + (this._x0 = this._x1 = +x6) + "," + (this._y0 = this._y1 = +y7) + "h" + +w3 + "v" + +h3 + "h" + -w3 + "Z";
  },
  toString: function() {
    return this._;
  }
};
var path_default = path;

// node_modules/d3-chord/src/array.js
var slice3 = Array.prototype.slice;

// node_modules/d3-chord/src/constant.js
function constant_default6(x6) {
  return function() {
    return x6;
  };
}

// node_modules/d3-chord/src/ribbon.js
function defaultSource(d4) {
  return d4.source;
}
function defaultTarget(d4) {
  return d4.target;
}
function defaultRadius(d4) {
  return d4.radius;
}
function defaultStartAngle(d4) {
  return d4.startAngle;
}
function defaultEndAngle(d4) {
  return d4.endAngle;
}
function defaultPadAngle() {
  return 0;
}
function defaultArrowheadRadius() {
  return 10;
}
function ribbon(headRadius) {
  var source = defaultSource, target = defaultTarget, sourceRadius = defaultRadius, targetRadius = defaultRadius, startAngle = defaultStartAngle, endAngle = defaultEndAngle, padAngle = defaultPadAngle, context = null;
  function ribbon2() {
    var buffer, s5 = source.apply(this, arguments), t4 = target.apply(this, arguments), ap = padAngle.apply(this, arguments) / 2, argv = slice3.call(arguments), sr = +sourceRadius.apply(this, (argv[0] = s5, argv)), sa0 = startAngle.apply(this, argv) - halfPi2, sa1 = endAngle.apply(this, argv) - halfPi2, tr = +targetRadius.apply(this, (argv[0] = t4, argv)), ta0 = startAngle.apply(this, argv) - halfPi2, ta1 = endAngle.apply(this, argv) - halfPi2;
    if (!context)
      context = buffer = path_default();
    if (ap > epsilon3) {
      if (abs2(sa1 - sa0) > ap * 2 + epsilon3)
        sa1 > sa0 ? (sa0 += ap, sa1 -= ap) : (sa0 -= ap, sa1 += ap);
      else
        sa0 = sa1 = (sa0 + sa1) / 2;
      if (abs2(ta1 - ta0) > ap * 2 + epsilon3)
        ta1 > ta0 ? (ta0 += ap, ta1 -= ap) : (ta0 -= ap, ta1 += ap);
      else
        ta0 = ta1 = (ta0 + ta1) / 2;
    }
    context.moveTo(sr * cos(sa0), sr * sin(sa0));
    context.arc(0, 0, sr, sa0, sa1);
    if (sa0 !== ta0 || sa1 !== ta1) {
      if (headRadius) {
        var hr = +headRadius.apply(this, arguments), tr2 = tr - hr, ta2 = (ta0 + ta1) / 2;
        context.quadraticCurveTo(0, 0, tr2 * cos(ta0), tr2 * sin(ta0));
        context.lineTo(tr * cos(ta2), tr * sin(ta2));
        context.lineTo(tr2 * cos(ta1), tr2 * sin(ta1));
      } else {
        context.quadraticCurveTo(0, 0, tr * cos(ta0), tr * sin(ta0));
        context.arc(0, 0, tr, ta0, ta1);
      }
    }
    context.quadraticCurveTo(0, 0, sr * cos(sa0), sr * sin(sa0));
    context.closePath();
    if (buffer)
      return context = null, buffer + "" || null;
  }
  if (headRadius)
    ribbon2.headRadius = function(_2) {
      return arguments.length ? (headRadius = typeof _2 === "function" ? _2 : constant_default6(+_2), ribbon2) : headRadius;
    };
  ribbon2.radius = function(_2) {
    return arguments.length ? (sourceRadius = targetRadius = typeof _2 === "function" ? _2 : constant_default6(+_2), ribbon2) : sourceRadius;
  };
  ribbon2.sourceRadius = function(_2) {
    return arguments.length ? (sourceRadius = typeof _2 === "function" ? _2 : constant_default6(+_2), ribbon2) : sourceRadius;
  };
  ribbon2.targetRadius = function(_2) {
    return arguments.length ? (targetRadius = typeof _2 === "function" ? _2 : constant_default6(+_2), ribbon2) : targetRadius;
  };
  ribbon2.startAngle = function(_2) {
    return arguments.length ? (startAngle = typeof _2 === "function" ? _2 : constant_default6(+_2), ribbon2) : startAngle;
  };
  ribbon2.endAngle = function(_2) {
    return arguments.length ? (endAngle = typeof _2 === "function" ? _2 : constant_default6(+_2), ribbon2) : endAngle;
  };
  ribbon2.padAngle = function(_2) {
    return arguments.length ? (padAngle = typeof _2 === "function" ? _2 : constant_default6(+_2), ribbon2) : padAngle;
  };
  ribbon2.source = function(_2) {
    return arguments.length ? (source = _2, ribbon2) : source;
  };
  ribbon2.target = function(_2) {
    return arguments.length ? (target = _2, ribbon2) : target;
  };
  ribbon2.context = function(_2) {
    return arguments.length ? (context = _2 == null ? null : _2, ribbon2) : context;
  };
  return ribbon2;
}
function ribbon_default() {
  return ribbon();
}
function ribbonArrow() {
  return ribbon(defaultArrowheadRadius);
}

// node_modules/d3-contour/src/array.js
var array2 = Array.prototype;
var slice4 = array2.slice;

// node_modules/d3-contour/src/ascending.js
function ascending_default2(a6, b10) {
  return a6 - b10;
}

// node_modules/d3-contour/src/area.js
function area_default(ring) {
  var i4 = 0, n2 = ring.length, area = ring[n2 - 1][1] * ring[0][0] - ring[n2 - 1][0] * ring[0][1];
  while (++i4 < n2)
    area += ring[i4 - 1][1] * ring[i4][0] - ring[i4 - 1][0] * ring[i4][1];
  return area;
}

// node_modules/d3-contour/src/constant.js
var constant_default7 = (x6) => () => x6;

// node_modules/d3-contour/src/contains.js
function contains_default(ring, hole) {
  var i4 = -1, n2 = hole.length, c8;
  while (++i4 < n2)
    if (c8 = ringContains(ring, hole[i4]))
      return c8;
  return 0;
}
function ringContains(ring, point6) {
  var x6 = point6[0], y7 = point6[1], contains = -1;
  for (var i4 = 0, n2 = ring.length, j3 = n2 - 1; i4 < n2; j3 = i4++) {
    var pi6 = ring[i4], xi = pi6[0], yi = pi6[1], pj = ring[j3], xj = pj[0], yj = pj[1];
    if (segmentContains(pi6, pj, point6))
      return 0;
    if (yi > y7 !== yj > y7 && x6 < (xj - xi) * (y7 - yi) / (yj - yi) + xi)
      contains = -contains;
  }
  return contains;
}
function segmentContains(a6, b10, c8) {
  var i4;
  return collinear(a6, b10, c8) && within(a6[i4 = +(a6[0] === b10[0])], c8[i4], b10[i4]);
}
function collinear(a6, b10, c8) {
  return (b10[0] - a6[0]) * (c8[1] - a6[1]) === (c8[0] - a6[0]) * (b10[1] - a6[1]);
}
function within(p3, q, r4) {
  return p3 <= q && q <= r4 || r4 <= q && q <= p3;
}

// node_modules/d3-contour/src/noop.js
function noop_default() {
}

// node_modules/d3-contour/src/contours.js
var cases = [
  [],
  [[[1, 1.5], [0.5, 1]]],
  [[[1.5, 1], [1, 1.5]]],
  [[[1.5, 1], [0.5, 1]]],
  [[[1, 0.5], [1.5, 1]]],
  [[[1, 1.5], [0.5, 1]], [[1, 0.5], [1.5, 1]]],
  [[[1, 0.5], [1, 1.5]]],
  [[[1, 0.5], [0.5, 1]]],
  [[[0.5, 1], [1, 0.5]]],
  [[[1, 1.5], [1, 0.5]]],
  [[[0.5, 1], [1, 0.5]], [[1.5, 1], [1, 1.5]]],
  [[[1.5, 1], [1, 0.5]]],
  [[[0.5, 1], [1.5, 1]]],
  [[[1, 1.5], [1.5, 1]]],
  [[[0.5, 1], [1, 1.5]]],
  []
];
function contours_default() {
  var dx = 1, dy = 1, threshold2 = sturges_default, smooth = smoothLinear;
  function contours(values) {
    var tz = threshold2(values);
    if (!Array.isArray(tz)) {
      var domain = extent_default(values), start2 = domain[0], stop = domain[1];
      tz = tickStep(start2, stop, tz);
      tz = range_default(Math.floor(start2 / tz) * tz, Math.floor(stop / tz) * tz, tz);
    } else {
      tz = tz.slice().sort(ascending_default2);
    }
    return tz.map(function(value) {
      return contour(values, value);
    });
  }
  function contour(values, value) {
    var polygons = [], holes = [];
    isorings(values, value, function(ring) {
      smooth(ring, values, value);
      if (area_default(ring) > 0)
        polygons.push([ring]);
      else
        holes.push(ring);
    });
    holes.forEach(function(hole) {
      for (var i4 = 0, n2 = polygons.length, polygon; i4 < n2; ++i4) {
        if (contains_default((polygon = polygons[i4])[0], hole) !== -1) {
          polygon.push(hole);
          return;
        }
      }
    });
    return {
      type: "MultiPolygon",
      value,
      coordinates: polygons
    };
  }
  function isorings(values, value, callback) {
    var fragmentByStart = new Array(), fragmentByEnd = new Array(), x6, y7, t03, t13, t23, t32;
    x6 = y7 = -1;
    t13 = values[0] >= value;
    cases[t13 << 1].forEach(stitch);
    while (++x6 < dx - 1) {
      t03 = t13, t13 = values[x6 + 1] >= value;
      cases[t03 | t13 << 1].forEach(stitch);
    }
    cases[t13 << 0].forEach(stitch);
    while (++y7 < dy - 1) {
      x6 = -1;
      t13 = values[y7 * dx + dx] >= value;
      t23 = values[y7 * dx] >= value;
      cases[t13 << 1 | t23 << 2].forEach(stitch);
      while (++x6 < dx - 1) {
        t03 = t13, t13 = values[y7 * dx + dx + x6 + 1] >= value;
        t32 = t23, t23 = values[y7 * dx + x6 + 1] >= value;
        cases[t03 | t13 << 1 | t23 << 2 | t32 << 3].forEach(stitch);
      }
      cases[t13 | t23 << 3].forEach(stitch);
    }
    x6 = -1;
    t23 = values[y7 * dx] >= value;
    cases[t23 << 2].forEach(stitch);
    while (++x6 < dx - 1) {
      t32 = t23, t23 = values[y7 * dx + x6 + 1] >= value;
      cases[t23 << 2 | t32 << 3].forEach(stitch);
    }
    cases[t23 << 3].forEach(stitch);
    function stitch(line) {
      var start2 = [line[0][0] + x6, line[0][1] + y7], end = [line[1][0] + x6, line[1][1] + y7], startIndex = index3(start2), endIndex = index3(end), f4, g3;
      if (f4 = fragmentByEnd[startIndex]) {
        if (g3 = fragmentByStart[endIndex]) {
          delete fragmentByEnd[f4.end];
          delete fragmentByStart[g3.start];
          if (f4 === g3) {
            f4.ring.push(end);
            callback(f4.ring);
          } else {
            fragmentByStart[f4.start] = fragmentByEnd[g3.end] = { start: f4.start, end: g3.end, ring: f4.ring.concat(g3.ring) };
          }
        } else {
          delete fragmentByEnd[f4.end];
          f4.ring.push(end);
          fragmentByEnd[f4.end = endIndex] = f4;
        }
      } else if (f4 = fragmentByStart[endIndex]) {
        if (g3 = fragmentByEnd[startIndex]) {
          delete fragmentByStart[f4.start];
          delete fragmentByEnd[g3.end];
          if (f4 === g3) {
            f4.ring.push(end);
            callback(f4.ring);
          } else {
            fragmentByStart[g3.start] = fragmentByEnd[f4.end] = { start: g3.start, end: f4.end, ring: g3.ring.concat(f4.ring) };
          }
        } else {
          delete fragmentByStart[f4.start];
          f4.ring.unshift(start2);
          fragmentByStart[f4.start = startIndex] = f4;
        }
      } else {
        fragmentByStart[startIndex] = fragmentByEnd[endIndex] = { start: startIndex, end: endIndex, ring: [start2, end] };
      }
    }
  }
  function index3(point6) {
    return point6[0] * 2 + point6[1] * (dx + 1) * 4;
  }
  function smoothLinear(ring, values, value) {
    ring.forEach(function(point6) {
      var x6 = point6[0], y7 = point6[1], xt = x6 | 0, yt = y7 | 0, v0, v1 = values[yt * dx + xt];
      if (x6 > 0 && x6 < dx && xt === x6) {
        v0 = values[yt * dx + xt - 1];
        point6[0] = x6 + (value - v0) / (v1 - v0) - 0.5;
      }
      if (y7 > 0 && y7 < dy && yt === y7) {
        v0 = values[(yt - 1) * dx + xt];
        point6[1] = y7 + (value - v0) / (v1 - v0) - 0.5;
      }
    });
  }
  contours.contour = contour;
  contours.size = function(_2) {
    if (!arguments.length)
      return [dx, dy];
    var _0 = Math.floor(_2[0]), _1 = Math.floor(_2[1]);
    if (!(_0 >= 0 && _1 >= 0))
      throw new Error("invalid size");
    return dx = _0, dy = _1, contours;
  };
  contours.thresholds = function(_2) {
    return arguments.length ? (threshold2 = typeof _2 === "function" ? _2 : Array.isArray(_2) ? constant_default7(slice4.call(_2)) : constant_default7(_2), contours) : threshold2;
  };
  contours.smooth = function(_2) {
    return arguments.length ? (smooth = _2 ? smoothLinear : noop_default, contours) : smooth === smoothLinear;
  };
  return contours;
}

// node_modules/d3-contour/src/blur.js
function blurX(source, target, r4) {
  var n2 = source.width, m4 = source.height, w3 = (r4 << 1) + 1;
  for (var j3 = 0; j3 < m4; ++j3) {
    for (var i4 = 0, sr = 0; i4 < n2 + r4; ++i4) {
      if (i4 < n2) {
        sr += source.data[i4 + j3 * n2];
      }
      if (i4 >= r4) {
        if (i4 >= w3) {
          sr -= source.data[i4 - w3 + j3 * n2];
        }
        target.data[i4 - r4 + j3 * n2] = sr / Math.min(i4 + 1, n2 - 1 + w3 - i4, w3);
      }
    }
  }
}
function blurY(source, target, r4) {
  var n2 = source.width, m4 = source.height, w3 = (r4 << 1) + 1;
  for (var i4 = 0; i4 < n2; ++i4) {
    for (var j3 = 0, sr = 0; j3 < m4 + r4; ++j3) {
      if (j3 < m4) {
        sr += source.data[i4 + j3 * n2];
      }
      if (j3 >= r4) {
        if (j3 >= w3) {
          sr -= source.data[i4 + (j3 - w3) * n2];
        }
        target.data[i4 + (j3 - r4) * n2] = sr / Math.min(j3 + 1, m4 - 1 + w3 - j3, w3);
      }
    }
  }
}

// node_modules/d3-contour/src/density.js
function defaultX(d4) {
  return d4[0];
}
function defaultY(d4) {
  return d4[1];
}
function defaultWeight() {
  return 1;
}
function density_default() {
  var x6 = defaultX, y7 = defaultY, weight = defaultWeight, dx = 960, dy = 500, r4 = 20, k4 = 2, o4 = r4 * 3, n2 = dx + o4 * 2 >> k4, m4 = dy + o4 * 2 >> k4, threshold2 = constant_default7(20);
  function density(data) {
    var values0 = new Float32Array(n2 * m4), values1 = new Float32Array(n2 * m4);
    data.forEach(function(d4, i4, data2) {
      var xi = +x6(d4, i4, data2) + o4 >> k4, yi = +y7(d4, i4, data2) + o4 >> k4, wi = +weight(d4, i4, data2);
      if (xi >= 0 && xi < n2 && yi >= 0 && yi < m4) {
        values0[xi + yi * n2] += wi;
      }
    });
    blurX({ width: n2, height: m4, data: values0 }, { width: n2, height: m4, data: values1 }, r4 >> k4);
    blurY({ width: n2, height: m4, data: values1 }, { width: n2, height: m4, data: values0 }, r4 >> k4);
    blurX({ width: n2, height: m4, data: values0 }, { width: n2, height: m4, data: values1 }, r4 >> k4);
    blurY({ width: n2, height: m4, data: values1 }, { width: n2, height: m4, data: values0 }, r4 >> k4);
    blurX({ width: n2, height: m4, data: values0 }, { width: n2, height: m4, data: values1 }, r4 >> k4);
    blurY({ width: n2, height: m4, data: values1 }, { width: n2, height: m4, data: values0 }, r4 >> k4);
    var tz = threshold2(values0);
    if (!Array.isArray(tz)) {
      var stop = max(values0);
      tz = tickStep(0, stop, tz);
      tz = range_default(0, Math.floor(stop / tz) * tz, tz);
      tz.shift();
    }
    return contours_default().thresholds(tz).size([n2, m4])(values0).map(transform2);
  }
  function transform2(geometry) {
    geometry.value *= Math.pow(2, -2 * k4);
    geometry.coordinates.forEach(transformPolygon);
    return geometry;
  }
  function transformPolygon(coordinates2) {
    coordinates2.forEach(transformRing);
  }
  function transformRing(coordinates2) {
    coordinates2.forEach(transformPoint);
  }
  function transformPoint(coordinates2) {
    coordinates2[0] = coordinates2[0] * Math.pow(2, k4) - o4;
    coordinates2[1] = coordinates2[1] * Math.pow(2, k4) - o4;
  }
  function resize() {
    o4 = r4 * 3;
    n2 = dx + o4 * 2 >> k4;
    m4 = dy + o4 * 2 >> k4;
    return density;
  }
  density.x = function(_2) {
    return arguments.length ? (x6 = typeof _2 === "function" ? _2 : constant_default7(+_2), density) : x6;
  };
  density.y = function(_2) {
    return arguments.length ? (y7 = typeof _2 === "function" ? _2 : constant_default7(+_2), density) : y7;
  };
  density.weight = function(_2) {
    return arguments.length ? (weight = typeof _2 === "function" ? _2 : constant_default7(+_2), density) : weight;
  };
  density.size = function(_2) {
    if (!arguments.length)
      return [dx, dy];
    var _0 = +_2[0], _1 = +_2[1];
    if (!(_0 >= 0 && _1 >= 0))
      throw new Error("invalid size");
    return dx = _0, dy = _1, resize();
  };
  density.cellSize = function(_2) {
    if (!arguments.length)
      return 1 << k4;
    if (!((_2 = +_2) >= 1))
      throw new Error("invalid cell size");
    return k4 = Math.floor(Math.log(_2) / Math.LN2), resize();
  };
  density.thresholds = function(_2) {
    return arguments.length ? (threshold2 = typeof _2 === "function" ? _2 : Array.isArray(_2) ? constant_default7(slice4.call(_2)) : constant_default7(_2), density) : threshold2;
  };
  density.bandwidth = function(_2) {
    if (!arguments.length)
      return Math.sqrt(r4 * (r4 + 1));
    if (!((_2 = +_2) >= 0))
      throw new Error("invalid bandwidth");
    return r4 = Math.round((Math.sqrt(4 * _2 * _2 + 1) - 1) / 2), resize();
  };
  return density;
}

// node_modules/delaunator/index.js
var EPSILON = Math.pow(2, -52);
var EDGE_STACK = new Uint32Array(512);
var Delaunator = class {
  static from(points, getX = defaultGetX, getY = defaultGetY) {
    const n2 = points.length;
    const coords = new Float64Array(n2 * 2);
    for (let i4 = 0; i4 < n2; i4++) {
      const p3 = points[i4];
      coords[2 * i4] = getX(p3);
      coords[2 * i4 + 1] = getY(p3);
    }
    return new Delaunator(coords);
  }
  constructor(coords) {
    const n2 = coords.length >> 1;
    if (n2 > 0 && typeof coords[0] !== "number")
      throw new Error("Expected coords to contain numbers.");
    this.coords = coords;
    const maxTriangles = Math.max(2 * n2 - 5, 0);
    this._triangles = new Uint32Array(maxTriangles * 3);
    this._halfedges = new Int32Array(maxTriangles * 3);
    this._hashSize = Math.ceil(Math.sqrt(n2));
    this._hullPrev = new Uint32Array(n2);
    this._hullNext = new Uint32Array(n2);
    this._hullTri = new Uint32Array(n2);
    this._hullHash = new Int32Array(this._hashSize).fill(-1);
    this._ids = new Uint32Array(n2);
    this._dists = new Float64Array(n2);
    this.update();
  }
  update() {
    const { coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash } = this;
    const n2 = coords.length >> 1;
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY2 = -Infinity;
    for (let i4 = 0; i4 < n2; i4++) {
      const x6 = coords[2 * i4];
      const y7 = coords[2 * i4 + 1];
      if (x6 < minX)
        minX = x6;
      if (y7 < minY)
        minY = y7;
      if (x6 > maxX)
        maxX = x6;
      if (y7 > maxY2)
        maxY2 = y7;
      this._ids[i4] = i4;
    }
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY2) / 2;
    let minDist = Infinity;
    let i0, i1, i22;
    for (let i4 = 0; i4 < n2; i4++) {
      const d4 = dist(cx, cy, coords[2 * i4], coords[2 * i4 + 1]);
      if (d4 < minDist) {
        i0 = i4;
        minDist = d4;
      }
    }
    const i0x = coords[2 * i0];
    const i0y = coords[2 * i0 + 1];
    minDist = Infinity;
    for (let i4 = 0; i4 < n2; i4++) {
      if (i4 === i0)
        continue;
      const d4 = dist(i0x, i0y, coords[2 * i4], coords[2 * i4 + 1]);
      if (d4 < minDist && d4 > 0) {
        i1 = i4;
        minDist = d4;
      }
    }
    let i1x = coords[2 * i1];
    let i1y = coords[2 * i1 + 1];
    let minRadius = Infinity;
    for (let i4 = 0; i4 < n2; i4++) {
      if (i4 === i0 || i4 === i1)
        continue;
      const r4 = circumradius(i0x, i0y, i1x, i1y, coords[2 * i4], coords[2 * i4 + 1]);
      if (r4 < minRadius) {
        i22 = i4;
        minRadius = r4;
      }
    }
    let i2x = coords[2 * i22];
    let i2y = coords[2 * i22 + 1];
    if (minRadius === Infinity) {
      for (let i4 = 0; i4 < n2; i4++) {
        this._dists[i4] = coords[2 * i4] - coords[0] || coords[2 * i4 + 1] - coords[1];
      }
      quicksort(this._ids, this._dists, 0, n2 - 1);
      const hull = new Uint32Array(n2);
      let j3 = 0;
      for (let i4 = 0, d0 = -Infinity; i4 < n2; i4++) {
        const id2 = this._ids[i4];
        if (this._dists[id2] > d0) {
          hull[j3++] = id2;
          d0 = this._dists[id2];
        }
      }
      this.hull = hull.subarray(0, j3);
      this.triangles = new Uint32Array(0);
      this.halfedges = new Uint32Array(0);
      return;
    }
    if (orient(i0x, i0y, i1x, i1y, i2x, i2y)) {
      const i4 = i1;
      const x6 = i1x;
      const y7 = i1y;
      i1 = i22;
      i1x = i2x;
      i1y = i2y;
      i22 = i4;
      i2x = x6;
      i2y = y7;
    }
    const center2 = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
    this._cx = center2.x;
    this._cy = center2.y;
    for (let i4 = 0; i4 < n2; i4++) {
      this._dists[i4] = dist(coords[2 * i4], coords[2 * i4 + 1], center2.x, center2.y);
    }
    quicksort(this._ids, this._dists, 0, n2 - 1);
    this._hullStart = i0;
    let hullSize = 3;
    hullNext[i0] = hullPrev[i22] = i1;
    hullNext[i1] = hullPrev[i0] = i22;
    hullNext[i22] = hullPrev[i1] = i0;
    hullTri[i0] = 0;
    hullTri[i1] = 1;
    hullTri[i22] = 2;
    hullHash.fill(-1);
    hullHash[this._hashKey(i0x, i0y)] = i0;
    hullHash[this._hashKey(i1x, i1y)] = i1;
    hullHash[this._hashKey(i2x, i2y)] = i22;
    this.trianglesLen = 0;
    this._addTriangle(i0, i1, i22, -1, -1, -1);
    for (let k4 = 0, xp, yp; k4 < this._ids.length; k4++) {
      const i4 = this._ids[k4];
      const x6 = coords[2 * i4];
      const y7 = coords[2 * i4 + 1];
      if (k4 > 0 && Math.abs(x6 - xp) <= EPSILON && Math.abs(y7 - yp) <= EPSILON)
        continue;
      xp = x6;
      yp = y7;
      if (i4 === i0 || i4 === i1 || i4 === i22)
        continue;
      let start2 = 0;
      for (let j3 = 0, key = this._hashKey(x6, y7); j3 < this._hashSize; j3++) {
        start2 = hullHash[(key + j3) % this._hashSize];
        if (start2 !== -1 && start2 !== hullNext[start2])
          break;
      }
      start2 = hullPrev[start2];
      let e3 = start2, q;
      while (q = hullNext[e3], !orient(x6, y7, coords[2 * e3], coords[2 * e3 + 1], coords[2 * q], coords[2 * q + 1])) {
        e3 = q;
        if (e3 === start2) {
          e3 = -1;
          break;
        }
      }
      if (e3 === -1)
        continue;
      let t4 = this._addTriangle(e3, i4, hullNext[e3], -1, -1, hullTri[e3]);
      hullTri[i4] = this._legalize(t4 + 2);
      hullTri[e3] = t4;
      hullSize++;
      let n3 = hullNext[e3];
      while (q = hullNext[n3], orient(x6, y7, coords[2 * n3], coords[2 * n3 + 1], coords[2 * q], coords[2 * q + 1])) {
        t4 = this._addTriangle(n3, i4, q, hullTri[i4], -1, hullTri[n3]);
        hullTri[i4] = this._legalize(t4 + 2);
        hullNext[n3] = n3;
        hullSize--;
        n3 = q;
      }
      if (e3 === start2) {
        while (q = hullPrev[e3], orient(x6, y7, coords[2 * q], coords[2 * q + 1], coords[2 * e3], coords[2 * e3 + 1])) {
          t4 = this._addTriangle(q, i4, e3, -1, hullTri[e3], hullTri[q]);
          this._legalize(t4 + 2);
          hullTri[q] = t4;
          hullNext[e3] = e3;
          hullSize--;
          e3 = q;
        }
      }
      this._hullStart = hullPrev[i4] = e3;
      hullNext[e3] = hullPrev[n3] = i4;
      hullNext[i4] = n3;
      hullHash[this._hashKey(x6, y7)] = i4;
      hullHash[this._hashKey(coords[2 * e3], coords[2 * e3 + 1])] = e3;
    }
    this.hull = new Uint32Array(hullSize);
    for (let i4 = 0, e3 = this._hullStart; i4 < hullSize; i4++) {
      this.hull[i4] = e3;
      e3 = hullNext[e3];
    }
    this.triangles = this._triangles.subarray(0, this.trianglesLen);
    this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(x6, y7) {
    return Math.floor(pseudoAngle(x6 - this._cx, y7 - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(a6) {
    const { _triangles: triangles, _halfedges: halfedges, coords } = this;
    let i4 = 0;
    let ar = 0;
    while (true) {
      const b10 = halfedges[a6];
      const a0 = a6 - a6 % 3;
      ar = a0 + (a6 + 2) % 3;
      if (b10 === -1) {
        if (i4 === 0)
          break;
        a6 = EDGE_STACK[--i4];
        continue;
      }
      const b02 = b10 - b10 % 3;
      const al = a0 + (a6 + 1) % 3;
      const bl = b02 + (b10 + 2) % 3;
      const p02 = triangles[ar];
      const pr = triangles[a6];
      const pl = triangles[al];
      const p1 = triangles[bl];
      const illegal = inCircle(coords[2 * p02], coords[2 * p02 + 1], coords[2 * pr], coords[2 * pr + 1], coords[2 * pl], coords[2 * pl + 1], coords[2 * p1], coords[2 * p1 + 1]);
      if (illegal) {
        triangles[a6] = p1;
        triangles[b10] = p02;
        const hbl = halfedges[bl];
        if (hbl === -1) {
          let e3 = this._hullStart;
          do {
            if (this._hullTri[e3] === bl) {
              this._hullTri[e3] = a6;
              break;
            }
            e3 = this._hullPrev[e3];
          } while (e3 !== this._hullStart);
        }
        this._link(a6, hbl);
        this._link(b10, halfedges[ar]);
        this._link(ar, bl);
        const br = b02 + (b10 + 1) % 3;
        if (i4 < EDGE_STACK.length) {
          EDGE_STACK[i4++] = br;
        }
      } else {
        if (i4 === 0)
          break;
        a6 = EDGE_STACK[--i4];
      }
    }
    return ar;
  }
  _link(a6, b10) {
    this._halfedges[a6] = b10;
    if (b10 !== -1)
      this._halfedges[b10] = a6;
  }
  _addTriangle(i0, i1, i22, a6, b10, c8) {
    const t4 = this.trianglesLen;
    this._triangles[t4] = i0;
    this._triangles[t4 + 1] = i1;
    this._triangles[t4 + 2] = i22;
    this._link(t4, a6);
    this._link(t4 + 1, b10);
    this._link(t4 + 2, c8);
    this.trianglesLen += 3;
    return t4;
  }
};
function pseudoAngle(dx, dy) {
  const p3 = dx / (Math.abs(dx) + Math.abs(dy));
  return (dy > 0 ? 3 - p3 : 1 + p3) / 4;
}
function dist(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}
function orientIfSure(px, py, rx, ry, qx, qy) {
  const l4 = (ry - py) * (qx - px);
  const r4 = (rx - px) * (qy - py);
  return Math.abs(l4 - r4) >= 33306690738754716e-32 * Math.abs(l4 + r4) ? l4 - r4 : 0;
}
function orient(rx, ry, qx, qy, px, py) {
  const sign3 = orientIfSure(px, py, rx, ry, qx, qy) || orientIfSure(rx, ry, qx, qy, px, py) || orientIfSure(qx, qy, px, py, rx, ry);
  return sign3 < 0;
}
function inCircle(ax, ay, bx, by, cx, cy, px, py) {
  const dx = ax - px;
  const dy = ay - py;
  const ex = bx - px;
  const ey = by - py;
  const fx = cx - px;
  const fy = cy - py;
  const ap = dx * dx + dy * dy;
  const bp = ex * ex + ey * ey;
  const cp = fx * fx + fy * fy;
  return dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx) < 0;
}
function circumradius(ax, ay, bx, by, cx, cy) {
  const dx = bx - ax;
  const dy = by - ay;
  const ex = cx - ax;
  const ey = cy - ay;
  const bl = dx * dx + dy * dy;
  const cl = ex * ex + ey * ey;
  const d4 = 0.5 / (dx * ey - dy * ex);
  const x6 = (ey * bl - dy * cl) * d4;
  const y7 = (dx * cl - ex * bl) * d4;
  return x6 * x6 + y7 * y7;
}
function circumcenter(ax, ay, bx, by, cx, cy) {
  const dx = bx - ax;
  const dy = by - ay;
  const ex = cx - ax;
  const ey = cy - ay;
  const bl = dx * dx + dy * dy;
  const cl = ex * ex + ey * ey;
  const d4 = 0.5 / (dx * ey - dy * ex);
  const x6 = ax + (ey * bl - dy * cl) * d4;
  const y7 = ay + (dx * cl - ex * bl) * d4;
  return { x: x6, y: y7 };
}
function quicksort(ids, dists, left2, right2) {
  if (right2 - left2 <= 20) {
    for (let i4 = left2 + 1; i4 <= right2; i4++) {
      const temp = ids[i4];
      const tempDist = dists[temp];
      let j3 = i4 - 1;
      while (j3 >= left2 && dists[ids[j3]] > tempDist)
        ids[j3 + 1] = ids[j3--];
      ids[j3 + 1] = temp;
    }
  } else {
    const median = left2 + right2 >> 1;
    let i4 = left2 + 1;
    let j3 = right2;
    swap2(ids, median, i4);
    if (dists[ids[left2]] > dists[ids[right2]])
      swap2(ids, left2, right2);
    if (dists[ids[i4]] > dists[ids[right2]])
      swap2(ids, i4, right2);
    if (dists[ids[left2]] > dists[ids[i4]])
      swap2(ids, left2, i4);
    const temp = ids[i4];
    const tempDist = dists[temp];
    while (true) {
      do
        i4++;
      while (dists[ids[i4]] < tempDist);
      do
        j3--;
      while (dists[ids[j3]] > tempDist);
      if (j3 < i4)
        break;
      swap2(ids, i4, j3);
    }
    ids[left2 + 1] = ids[j3];
    ids[j3] = temp;
    if (right2 - i4 + 1 >= j3 - left2) {
      quicksort(ids, dists, i4, right2);
      quicksort(ids, dists, left2, j3 - 1);
    } else {
      quicksort(ids, dists, left2, j3 - 1);
      quicksort(ids, dists, i4, right2);
    }
  }
}
function swap2(arr, i4, j3) {
  const tmp = arr[i4];
  arr[i4] = arr[j3];
  arr[j3] = tmp;
}
function defaultGetX(p3) {
  return p3[0];
}
function defaultGetY(p3) {
  return p3[1];
}

// node_modules/d3-delaunay/src/path.js
var epsilon5 = 1e-6;
var Path2 = class {
  constructor() {
    this._x0 = this._y0 = this._x1 = this._y1 = null;
    this._ = "";
  }
  moveTo(x6, y7) {
    this._ += `M${this._x0 = this._x1 = +x6},${this._y0 = this._y1 = +y7}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  }
  lineTo(x6, y7) {
    this._ += `L${this._x1 = +x6},${this._y1 = +y7}`;
  }
  arc(x6, y7, r4) {
    x6 = +x6, y7 = +y7, r4 = +r4;
    const x06 = x6 + r4;
    const y06 = y7;
    if (r4 < 0)
      throw new Error("negative radius");
    if (this._x1 === null)
      this._ += `M${x06},${y06}`;
    else if (Math.abs(this._x1 - x06) > epsilon5 || Math.abs(this._y1 - y06) > epsilon5)
      this._ += "L" + x06 + "," + y06;
    if (!r4)
      return;
    this._ += `A${r4},${r4},0,1,1,${x6 - r4},${y7}A${r4},${r4},0,1,1,${this._x1 = x06},${this._y1 = y06}`;
  }
  rect(x6, y7, w3, h3) {
    this._ += `M${this._x0 = this._x1 = +x6},${this._y0 = this._y1 = +y7}h${+w3}v${+h3}h${-w3}Z`;
  }
  value() {
    return this._ || null;
  }
};

// node_modules/d3-delaunay/src/polygon.js
var Polygon = class {
  constructor() {
    this._ = [];
  }
  moveTo(x6, y7) {
    this._.push([x6, y7]);
  }
  closePath() {
    this._.push(this._[0].slice());
  }
  lineTo(x6, y7) {
    this._.push([x6, y7]);
  }
  value() {
    return this._.length ? this._ : null;
  }
};

// node_modules/d3-delaunay/src/voronoi.js
var Voronoi = class {
  constructor(delaunay, [xmin, ymin, xmax, ymax] = [0, 0, 960, 500]) {
    if (!((xmax = +xmax) >= (xmin = +xmin)) || !((ymax = +ymax) >= (ymin = +ymin)))
      throw new Error("invalid bounds");
    this.delaunay = delaunay;
    this._circumcenters = new Float64Array(delaunay.points.length * 2);
    this.vectors = new Float64Array(delaunay.points.length * 2);
    this.xmax = xmax, this.xmin = xmin;
    this.ymax = ymax, this.ymin = ymin;
    this._init();
  }
  update() {
    this.delaunay.update();
    this._init();
    return this;
  }
  _init() {
    const { delaunay: { points, hull, triangles }, vectors } = this;
    const circumcenters = this.circumcenters = this._circumcenters.subarray(0, triangles.length / 3 * 2);
    for (let i4 = 0, j3 = 0, n2 = triangles.length, x6, y7; i4 < n2; i4 += 3, j3 += 2) {
      const t13 = triangles[i4] * 2;
      const t23 = triangles[i4 + 1] * 2;
      const t32 = triangles[i4 + 2] * 2;
      const x13 = points[t13];
      const y13 = points[t13 + 1];
      const x22 = points[t23];
      const y22 = points[t23 + 1];
      const x32 = points[t32];
      const y32 = points[t32 + 1];
      const dx = x22 - x13;
      const dy = y22 - y13;
      const ex = x32 - x13;
      const ey = y32 - y13;
      const bl = dx * dx + dy * dy;
      const cl = ex * ex + ey * ey;
      const ab = (dx * ey - dy * ex) * 2;
      if (!ab) {
        x6 = (x13 + x32) / 2 - 1e8 * ey;
        y7 = (y13 + y32) / 2 + 1e8 * ex;
      } else if (Math.abs(ab) < 1e-8) {
        x6 = (x13 + x32) / 2;
        y7 = (y13 + y32) / 2;
      } else {
        const d4 = 1 / ab;
        x6 = x13 + (ey * bl - dy * cl) * d4;
        y7 = y13 + (dx * cl - ex * bl) * d4;
      }
      circumcenters[j3] = x6;
      circumcenters[j3 + 1] = y7;
    }
    let h3 = hull[hull.length - 1];
    let p02, p1 = h3 * 4;
    let x06, x12 = points[2 * h3];
    let y06, y12 = points[2 * h3 + 1];
    vectors.fill(0);
    for (let i4 = 0; i4 < hull.length; ++i4) {
      h3 = hull[i4];
      p02 = p1, x06 = x12, y06 = y12;
      p1 = h3 * 4, x12 = points[2 * h3], y12 = points[2 * h3 + 1];
      vectors[p02 + 2] = vectors[p1] = y06 - y12;
      vectors[p02 + 3] = vectors[p1 + 1] = x12 - x06;
    }
  }
  render(context) {
    const buffer = context == null ? context = new Path2() : void 0;
    const { delaunay: { halfedges, inedges, hull }, circumcenters, vectors } = this;
    if (hull.length <= 1)
      return null;
    for (let i4 = 0, n2 = halfedges.length; i4 < n2; ++i4) {
      const j3 = halfedges[i4];
      if (j3 < i4)
        continue;
      const ti = Math.floor(i4 / 3) * 2;
      const tj = Math.floor(j3 / 3) * 2;
      const xi = circumcenters[ti];
      const yi = circumcenters[ti + 1];
      const xj = circumcenters[tj];
      const yj = circumcenters[tj + 1];
      this._renderSegment(xi, yi, xj, yj, context);
    }
    let h0, h1 = hull[hull.length - 1];
    for (let i4 = 0; i4 < hull.length; ++i4) {
      h0 = h1, h1 = hull[i4];
      const t4 = Math.floor(inedges[h1] / 3) * 2;
      const x6 = circumcenters[t4];
      const y7 = circumcenters[t4 + 1];
      const v3 = h0 * 4;
      const p3 = this._project(x6, y7, vectors[v3 + 2], vectors[v3 + 3]);
      if (p3)
        this._renderSegment(x6, y7, p3[0], p3[1], context);
    }
    return buffer && buffer.value();
  }
  renderBounds(context) {
    const buffer = context == null ? context = new Path2() : void 0;
    context.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
    return buffer && buffer.value();
  }
  renderCell(i4, context) {
    const buffer = context == null ? context = new Path2() : void 0;
    const points = this._clip(i4);
    if (points === null || !points.length)
      return;
    context.moveTo(points[0], points[1]);
    let n2 = points.length;
    while (points[0] === points[n2 - 2] && points[1] === points[n2 - 1] && n2 > 1)
      n2 -= 2;
    for (let i5 = 2; i5 < n2; i5 += 2) {
      if (points[i5] !== points[i5 - 2] || points[i5 + 1] !== points[i5 - 1])
        context.lineTo(points[i5], points[i5 + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  *cellPolygons() {
    const { delaunay: { points } } = this;
    for (let i4 = 0, n2 = points.length / 2; i4 < n2; ++i4) {
      const cell = this.cellPolygon(i4);
      if (cell)
        cell.index = i4, yield cell;
    }
  }
  cellPolygon(i4) {
    const polygon = new Polygon();
    this.renderCell(i4, polygon);
    return polygon.value();
  }
  _renderSegment(x06, y06, x12, y12, context) {
    let S2;
    const c0 = this._regioncode(x06, y06);
    const c1 = this._regioncode(x12, y12);
    if (c0 === 0 && c1 === 0) {
      context.moveTo(x06, y06);
      context.lineTo(x12, y12);
    } else if (S2 = this._clipSegment(x06, y06, x12, y12, c0, c1)) {
      context.moveTo(S2[0], S2[1]);
      context.lineTo(S2[2], S2[3]);
    }
  }
  contains(i4, x6, y7) {
    if ((x6 = +x6, x6 !== x6) || (y7 = +y7, y7 !== y7))
      return false;
    return this.delaunay._step(i4, x6, y7) === i4;
  }
  *neighbors(i4) {
    const ci = this._clip(i4);
    if (ci)
      for (const j3 of this.delaunay.neighbors(i4)) {
        const cj = this._clip(j3);
        if (cj)
          loop:
            for (let ai = 0, li = ci.length; ai < li; ai += 2) {
              for (let aj = 0, lj = cj.length; aj < lj; aj += 2) {
                if (ci[ai] == cj[aj] && ci[ai + 1] == cj[aj + 1] && ci[(ai + 2) % li] == cj[(aj + lj - 2) % lj] && ci[(ai + 3) % li] == cj[(aj + lj - 1) % lj]) {
                  yield j3;
                  break loop;
                }
              }
            }
      }
  }
  _cell(i4) {
    const { circumcenters, delaunay: { inedges, halfedges, triangles } } = this;
    const e0 = inedges[i4];
    if (e0 === -1)
      return null;
    const points = [];
    let e3 = e0;
    do {
      const t4 = Math.floor(e3 / 3);
      points.push(circumcenters[t4 * 2], circumcenters[t4 * 2 + 1]);
      e3 = e3 % 3 === 2 ? e3 - 2 : e3 + 1;
      if (triangles[e3] !== i4)
        break;
      e3 = halfedges[e3];
    } while (e3 !== e0 && e3 !== -1);
    return points;
  }
  _clip(i4) {
    if (i4 === 0 && this.delaunay.hull.length === 1) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    const points = this._cell(i4);
    if (points === null)
      return null;
    const { vectors: V } = this;
    const v3 = i4 * 4;
    return V[v3] || V[v3 + 1] ? this._clipInfinite(i4, points, V[v3], V[v3 + 1], V[v3 + 2], V[v3 + 3]) : this._clipFinite(i4, points);
  }
  _clipFinite(i4, points) {
    const n2 = points.length;
    let P2 = null;
    let x06, y06, x12 = points[n2 - 2], y12 = points[n2 - 1];
    let c0, c1 = this._regioncode(x12, y12);
    let e0, e1;
    for (let j3 = 0; j3 < n2; j3 += 2) {
      x06 = x12, y06 = y12, x12 = points[j3], y12 = points[j3 + 1];
      c0 = c1, c1 = this._regioncode(x12, y12);
      if (c0 === 0 && c1 === 0) {
        e0 = e1, e1 = 0;
        if (P2)
          P2.push(x12, y12);
        else
          P2 = [x12, y12];
      } else {
        let S2, sx0, sy0, sx1, sy1;
        if (c0 === 0) {
          if ((S2 = this._clipSegment(x06, y06, x12, y12, c0, c1)) === null)
            continue;
          [sx0, sy0, sx1, sy1] = S2;
        } else {
          if ((S2 = this._clipSegment(x12, y12, x06, y06, c1, c0)) === null)
            continue;
          [sx1, sy1, sx0, sy0] = S2;
          e0 = e1, e1 = this._edgecode(sx0, sy0);
          if (e0 && e1)
            this._edge(i4, e0, e1, P2, P2.length);
          if (P2)
            P2.push(sx0, sy0);
          else
            P2 = [sx0, sy0];
        }
        e0 = e1, e1 = this._edgecode(sx1, sy1);
        if (e0 && e1)
          this._edge(i4, e0, e1, P2, P2.length);
        if (P2)
          P2.push(sx1, sy1);
        else
          P2 = [sx1, sy1];
      }
    }
    if (P2) {
      e0 = e1, e1 = this._edgecode(P2[0], P2[1]);
      if (e0 && e1)
        this._edge(i4, e0, e1, P2, P2.length);
    } else if (this.contains(i4, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    return P2;
  }
  _clipSegment(x06, y06, x12, y12, c0, c1) {
    while (true) {
      if (c0 === 0 && c1 === 0)
        return [x06, y06, x12, y12];
      if (c0 & c1)
        return null;
      let x6, y7, c8 = c0 || c1;
      if (c8 & 8)
        x6 = x06 + (x12 - x06) * (this.ymax - y06) / (y12 - y06), y7 = this.ymax;
      else if (c8 & 4)
        x6 = x06 + (x12 - x06) * (this.ymin - y06) / (y12 - y06), y7 = this.ymin;
      else if (c8 & 2)
        y7 = y06 + (y12 - y06) * (this.xmax - x06) / (x12 - x06), x6 = this.xmax;
      else
        y7 = y06 + (y12 - y06) * (this.xmin - x06) / (x12 - x06), x6 = this.xmin;
      if (c0)
        x06 = x6, y06 = y7, c0 = this._regioncode(x06, y06);
      else
        x12 = x6, y12 = y7, c1 = this._regioncode(x12, y12);
    }
  }
  _clipInfinite(i4, points, vx0, vy0, vxn, vyn) {
    let P2 = Array.from(points), p3;
    if (p3 = this._project(P2[0], P2[1], vx0, vy0))
      P2.unshift(p3[0], p3[1]);
    if (p3 = this._project(P2[P2.length - 2], P2[P2.length - 1], vxn, vyn))
      P2.push(p3[0], p3[1]);
    if (P2 = this._clipFinite(i4, P2)) {
      for (let j3 = 0, n2 = P2.length, c0, c1 = this._edgecode(P2[n2 - 2], P2[n2 - 1]); j3 < n2; j3 += 2) {
        c0 = c1, c1 = this._edgecode(P2[j3], P2[j3 + 1]);
        if (c0 && c1)
          j3 = this._edge(i4, c0, c1, P2, j3), n2 = P2.length;
      }
    } else if (this.contains(i4, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      P2 = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax];
    }
    return P2;
  }
  _edge(i4, e0, e1, P2, j3) {
    while (e0 !== e1) {
      let x6, y7;
      switch (e0) {
        case 5:
          e0 = 4;
          continue;
        case 4:
          e0 = 6, x6 = this.xmax, y7 = this.ymin;
          break;
        case 6:
          e0 = 2;
          continue;
        case 2:
          e0 = 10, x6 = this.xmax, y7 = this.ymax;
          break;
        case 10:
          e0 = 8;
          continue;
        case 8:
          e0 = 9, x6 = this.xmin, y7 = this.ymax;
          break;
        case 9:
          e0 = 1;
          continue;
        case 1:
          e0 = 5, x6 = this.xmin, y7 = this.ymin;
          break;
      }
      if ((P2[j3] !== x6 || P2[j3 + 1] !== y7) && this.contains(i4, x6, y7)) {
        P2.splice(j3, 0, x6, y7), j3 += 2;
      }
    }
    if (P2.length > 4) {
      for (let i5 = 0; i5 < P2.length; i5 += 2) {
        const j4 = (i5 + 2) % P2.length, k4 = (i5 + 4) % P2.length;
        if (P2[i5] === P2[j4] && P2[j4] === P2[k4] || P2[i5 + 1] === P2[j4 + 1] && P2[j4 + 1] === P2[k4 + 1])
          P2.splice(j4, 2), i5 -= 2;
      }
    }
    return j3;
  }
  _project(x06, y06, vx, vy) {
    let t4 = Infinity, c8, x6, y7;
    if (vy < 0) {
      if (y06 <= this.ymin)
        return null;
      if ((c8 = (this.ymin - y06) / vy) < t4)
        y7 = this.ymin, x6 = x06 + (t4 = c8) * vx;
    } else if (vy > 0) {
      if (y06 >= this.ymax)
        return null;
      if ((c8 = (this.ymax - y06) / vy) < t4)
        y7 = this.ymax, x6 = x06 + (t4 = c8) * vx;
    }
    if (vx > 0) {
      if (x06 >= this.xmax)
        return null;
      if ((c8 = (this.xmax - x06) / vx) < t4)
        x6 = this.xmax, y7 = y06 + (t4 = c8) * vy;
    } else if (vx < 0) {
      if (x06 <= this.xmin)
        return null;
      if ((c8 = (this.xmin - x06) / vx) < t4)
        x6 = this.xmin, y7 = y06 + (t4 = c8) * vy;
    }
    return [x6, y7];
  }
  _edgecode(x6, y7) {
    return (x6 === this.xmin ? 1 : x6 === this.xmax ? 2 : 0) | (y7 === this.ymin ? 4 : y7 === this.ymax ? 8 : 0);
  }
  _regioncode(x6, y7) {
    return (x6 < this.xmin ? 1 : x6 > this.xmax ? 2 : 0) | (y7 < this.ymin ? 4 : y7 > this.ymax ? 8 : 0);
  }
};

// node_modules/d3-delaunay/src/delaunay.js
var tau4 = 2 * Math.PI;
var pow = Math.pow;
function pointX(p3) {
  return p3[0];
}
function pointY(p3) {
  return p3[1];
}
function collinear2(d4) {
  const { triangles, coords } = d4;
  for (let i4 = 0; i4 < triangles.length; i4 += 3) {
    const a6 = 2 * triangles[i4], b10 = 2 * triangles[i4 + 1], c8 = 2 * triangles[i4 + 2], cross2 = (coords[c8] - coords[a6]) * (coords[b10 + 1] - coords[a6 + 1]) - (coords[b10] - coords[a6]) * (coords[c8 + 1] - coords[a6 + 1]);
    if (cross2 > 1e-10)
      return false;
  }
  return true;
}
function jitter(x6, y7, r4) {
  return [x6 + Math.sin(x6 + y7) * r4, y7 + Math.cos(x6 - y7) * r4];
}
var Delaunay = class {
  static from(points, fx = pointX, fy = pointY, that) {
    return new Delaunay("length" in points ? flatArray(points, fx, fy, that) : Float64Array.from(flatIterable(points, fx, fy, that)));
  }
  constructor(points) {
    this._delaunator = new Delaunator(points);
    this.inedges = new Int32Array(points.length / 2);
    this._hullIndex = new Int32Array(points.length / 2);
    this.points = this._delaunator.coords;
    this._init();
  }
  update() {
    this._delaunator.update();
    this._init();
    return this;
  }
  _init() {
    const d4 = this._delaunator, points = this.points;
    if (d4.hull && d4.hull.length > 2 && collinear2(d4)) {
      this.collinear = Int32Array.from({ length: points.length / 2 }, (_2, i4) => i4).sort((i4, j3) => points[2 * i4] - points[2 * j3] || points[2 * i4 + 1] - points[2 * j3 + 1]);
      const e3 = this.collinear[0], f4 = this.collinear[this.collinear.length - 1], bounds = [points[2 * e3], points[2 * e3 + 1], points[2 * f4], points[2 * f4 + 1]], r4 = 1e-8 * Math.hypot(bounds[3] - bounds[1], bounds[2] - bounds[0]);
      for (let i4 = 0, n2 = points.length / 2; i4 < n2; ++i4) {
        const p3 = jitter(points[2 * i4], points[2 * i4 + 1], r4);
        points[2 * i4] = p3[0];
        points[2 * i4 + 1] = p3[1];
      }
      this._delaunator = new Delaunator(points);
    } else {
      delete this.collinear;
    }
    const halfedges = this.halfedges = this._delaunator.halfedges;
    const hull = this.hull = this._delaunator.hull;
    const triangles = this.triangles = this._delaunator.triangles;
    const inedges = this.inedges.fill(-1);
    const hullIndex = this._hullIndex.fill(-1);
    for (let e3 = 0, n2 = halfedges.length; e3 < n2; ++e3) {
      const p3 = triangles[e3 % 3 === 2 ? e3 - 2 : e3 + 1];
      if (halfedges[e3] === -1 || inedges[p3] === -1)
        inedges[p3] = e3;
    }
    for (let i4 = 0, n2 = hull.length; i4 < n2; ++i4) {
      hullIndex[hull[i4]] = i4;
    }
    if (hull.length <= 2 && hull.length > 0) {
      this.triangles = new Int32Array(3).fill(-1);
      this.halfedges = new Int32Array(3).fill(-1);
      this.triangles[0] = hull[0];
      this.triangles[1] = hull[1];
      this.triangles[2] = hull[1];
      inedges[hull[0]] = 1;
      if (hull.length === 2)
        inedges[hull[1]] = 0;
    }
  }
  voronoi(bounds) {
    return new Voronoi(this, bounds);
  }
  *neighbors(i4) {
    const { inedges, hull, _hullIndex, halfedges, triangles, collinear: collinear3 } = this;
    if (collinear3) {
      const l4 = collinear3.indexOf(i4);
      if (l4 > 0)
        yield collinear3[l4 - 1];
      if (l4 < collinear3.length - 1)
        yield collinear3[l4 + 1];
      return;
    }
    const e0 = inedges[i4];
    if (e0 === -1)
      return;
    let e3 = e0, p02 = -1;
    do {
      yield p02 = triangles[e3];
      e3 = e3 % 3 === 2 ? e3 - 2 : e3 + 1;
      if (triangles[e3] !== i4)
        return;
      e3 = halfedges[e3];
      if (e3 === -1) {
        const p3 = hull[(_hullIndex[i4] + 1) % hull.length];
        if (p3 !== p02)
          yield p3;
        return;
      }
    } while (e3 !== e0);
  }
  find(x6, y7, i4 = 0) {
    if ((x6 = +x6, x6 !== x6) || (y7 = +y7, y7 !== y7))
      return -1;
    const i0 = i4;
    let c8;
    while ((c8 = this._step(i4, x6, y7)) >= 0 && c8 !== i4 && c8 !== i0)
      i4 = c8;
    return c8;
  }
  _step(i4, x6, y7) {
    const { inedges, hull, _hullIndex, halfedges, triangles, points } = this;
    if (inedges[i4] === -1 || !points.length)
      return (i4 + 1) % (points.length >> 1);
    let c8 = i4;
    let dc = pow(x6 - points[i4 * 2], 2) + pow(y7 - points[i4 * 2 + 1], 2);
    const e0 = inedges[i4];
    let e3 = e0;
    do {
      let t4 = triangles[e3];
      const dt = pow(x6 - points[t4 * 2], 2) + pow(y7 - points[t4 * 2 + 1], 2);
      if (dt < dc)
        dc = dt, c8 = t4;
      e3 = e3 % 3 === 2 ? e3 - 2 : e3 + 1;
      if (triangles[e3] !== i4)
        break;
      e3 = halfedges[e3];
      if (e3 === -1) {
        e3 = hull[(_hullIndex[i4] + 1) % hull.length];
        if (e3 !== t4) {
          if (pow(x6 - points[e3 * 2], 2) + pow(y7 - points[e3 * 2 + 1], 2) < dc)
            return e3;
        }
        break;
      }
    } while (e3 !== e0);
    return c8;
  }
  render(context) {
    const buffer = context == null ? context = new Path2() : void 0;
    const { points, halfedges, triangles } = this;
    for (let i4 = 0, n2 = halfedges.length; i4 < n2; ++i4) {
      const j3 = halfedges[i4];
      if (j3 < i4)
        continue;
      const ti = triangles[i4] * 2;
      const tj = triangles[j3] * 2;
      context.moveTo(points[ti], points[ti + 1]);
      context.lineTo(points[tj], points[tj + 1]);
    }
    this.renderHull(context);
    return buffer && buffer.value();
  }
  renderPoints(context, r4 = 2) {
    const buffer = context == null ? context = new Path2() : void 0;
    const { points } = this;
    for (let i4 = 0, n2 = points.length; i4 < n2; i4 += 2) {
      const x6 = points[i4], y7 = points[i4 + 1];
      context.moveTo(x6 + r4, y7);
      context.arc(x6, y7, r4, 0, tau4);
    }
    return buffer && buffer.value();
  }
  renderHull(context) {
    const buffer = context == null ? context = new Path2() : void 0;
    const { hull, points } = this;
    const h3 = hull[0] * 2, n2 = hull.length;
    context.moveTo(points[h3], points[h3 + 1]);
    for (let i4 = 1; i4 < n2; ++i4) {
      const h4 = 2 * hull[i4];
      context.lineTo(points[h4], points[h4 + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  hullPolygon() {
    const polygon = new Polygon();
    this.renderHull(polygon);
    return polygon.value();
  }
  renderTriangle(i4, context) {
    const buffer = context == null ? context = new Path2() : void 0;
    const { points, triangles } = this;
    const t03 = triangles[i4 *= 3] * 2;
    const t13 = triangles[i4 + 1] * 2;
    const t23 = triangles[i4 + 2] * 2;
    context.moveTo(points[t03], points[t03 + 1]);
    context.lineTo(points[t13], points[t13 + 1]);
    context.lineTo(points[t23], points[t23 + 1]);
    context.closePath();
    return buffer && buffer.value();
  }
  *trianglePolygons() {
    const { triangles } = this;
    for (let i4 = 0, n2 = triangles.length / 3; i4 < n2; ++i4) {
      yield this.trianglePolygon(i4);
    }
  }
  trianglePolygon(i4) {
    const polygon = new Polygon();
    this.renderTriangle(i4, polygon);
    return polygon.value();
  }
};
function flatArray(points, fx, fy, that) {
  const n2 = points.length;
  const array3 = new Float64Array(n2 * 2);
  for (let i4 = 0; i4 < n2; ++i4) {
    const p3 = points[i4];
    array3[i4 * 2] = fx.call(that, p3, i4, points);
    array3[i4 * 2 + 1] = fy.call(that, p3, i4, points);
  }
  return array3;
}
function* flatIterable(points, fx, fy, that) {
  let i4 = 0;
  for (const p3 of points) {
    yield fx.call(that, p3, i4, points);
    yield fy.call(that, p3, i4, points);
    ++i4;
  }
}

// node_modules/d3/node_modules/d3-dsv/src/dsv.js
var EOL = {};
var EOF = {};
var QUOTE = 34;
var NEWLINE = 10;
var RETURN = 13;
function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i4) {
    return JSON.stringify(name) + ": d[" + i4 + '] || ""';
  }).join(",") + "}");
}
function customConverter(columns, f4) {
  var object2 = objectConverter(columns);
  return function(row, i4) {
    return f4(object2(row), i4, columns);
  };
}
function inferColumns(rows) {
  var columnSet = /* @__PURE__ */ Object.create(null), columns = [];
  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });
  return columns;
}
function pad(value, width) {
  var s5 = value + "", length3 = s5.length;
  return length3 < width ? new Array(width - length3 + 1).join(0) + s5 : s5;
}
function formatYear(year2) {
  return year2 < 0 ? "-" + pad(-year2, 6) : year2 > 9999 ? "+" + pad(year2, 6) : pad(year2, 4);
}
function formatDate(date2) {
  var hours2 = date2.getUTCHours(), minutes2 = date2.getUTCMinutes(), seconds2 = date2.getUTCSeconds(), milliseconds2 = date2.getUTCMilliseconds();
  return isNaN(date2) ? "Invalid Date" : formatYear(date2.getUTCFullYear(), 4) + "-" + pad(date2.getUTCMonth() + 1, 2) + "-" + pad(date2.getUTCDate(), 2) + (milliseconds2 ? "T" + pad(hours2, 2) + ":" + pad(minutes2, 2) + ":" + pad(seconds2, 2) + "." + pad(milliseconds2, 3) + "Z" : seconds2 ? "T" + pad(hours2, 2) + ":" + pad(minutes2, 2) + ":" + pad(seconds2, 2) + "Z" : minutes2 || hours2 ? "T" + pad(hours2, 2) + ":" + pad(minutes2, 2) + "Z" : "");
}
function dsv_default(delimiter) {
  var reFormat = new RegExp('["' + delimiter + "\n\r]"), DELIMITER = delimiter.charCodeAt(0);
  function parse(text, f4) {
    var convert, columns, rows = parseRows(text, function(row, i4) {
      if (convert)
        return convert(row, i4 - 1);
      columns = row, convert = f4 ? customConverter(row, f4) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }
  function parseRows(text, f4) {
    var rows = [], N2 = text.length, I2 = 0, n2 = 0, t4, eof = N2 <= 0, eol = false;
    if (text.charCodeAt(N2 - 1) === NEWLINE)
      --N2;
    if (text.charCodeAt(N2 - 1) === RETURN)
      --N2;
    function token() {
      if (eof)
        return EOF;
      if (eol)
        return eol = false, EOL;
      var i4, j3 = I2, c8;
      if (text.charCodeAt(j3) === QUOTE) {
        while (I2++ < N2 && text.charCodeAt(I2) !== QUOTE || text.charCodeAt(++I2) === QUOTE)
          ;
        if ((i4 = I2) >= N2)
          eof = true;
        else if ((c8 = text.charCodeAt(I2++)) === NEWLINE)
          eol = true;
        else if (c8 === RETURN) {
          eol = true;
          if (text.charCodeAt(I2) === NEWLINE)
            ++I2;
        }
        return text.slice(j3 + 1, i4 - 1).replace(/""/g, '"');
      }
      while (I2 < N2) {
        if ((c8 = text.charCodeAt(i4 = I2++)) === NEWLINE)
          eol = true;
        else if (c8 === RETURN) {
          eol = true;
          if (text.charCodeAt(I2) === NEWLINE)
            ++I2;
        } else if (c8 !== DELIMITER)
          continue;
        return text.slice(j3, i4);
      }
      return eof = true, text.slice(j3, N2);
    }
    while ((t4 = token()) !== EOF) {
      var row = [];
      while (t4 !== EOL && t4 !== EOF)
        row.push(t4), t4 = token();
      if (f4 && (row = f4(row, n2++)) == null)
        continue;
      rows.push(row);
    }
    return rows;
  }
  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }
  function format2(rows, columns) {
    if (columns == null)
      columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }
  function formatBody(rows, columns) {
    if (columns == null)
      columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }
  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }
  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }
  function formatValue(value) {
    return value == null ? "" : value instanceof Date ? formatDate(value) : reFormat.test(value += "") ? '"' + value.replace(/"/g, '""') + '"' : value;
  }
  return {
    parse,
    parseRows,
    format: format2,
    formatBody,
    formatRows,
    formatRow,
    formatValue
  };
}

// node_modules/d3/node_modules/d3-dsv/src/csv.js
var csv = dsv_default(",");
var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatBody = csv.formatBody;
var csvFormatRows = csv.formatRows;
var csvFormatRow = csv.formatRow;
var csvFormatValue = csv.formatValue;

// node_modules/d3/node_modules/d3-dsv/src/tsv.js
var tsv = dsv_default("	");
var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatBody = tsv.formatBody;
var tsvFormatRows = tsv.formatRows;
var tsvFormatRow = tsv.formatRow;
var tsvFormatValue = tsv.formatValue;

// node_modules/d3/node_modules/d3-dsv/src/autoType.js
function autoType(object2) {
  for (var key in object2) {
    var value = object2[key].trim(), number5, m4;
    if (!value)
      value = null;
    else if (value === "true")
      value = true;
    else if (value === "false")
      value = false;
    else if (value === "NaN")
      value = NaN;
    else if (!isNaN(number5 = +value))
      value = number5;
    else if (m4 = value.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)) {
      if (fixtz && !!m4[4] && !m4[7])
        value = value.replace(/-/g, "/").replace(/T/, " ");
      value = new Date(value);
    } else
      continue;
    object2[key] = value;
  }
  return object2;
}
var fixtz = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();

// node_modules/d3/node_modules/d3-fetch/src/blob.js
function responseBlob(response) {
  if (!response.ok)
    throw new Error(response.status + " " + response.statusText);
  return response.blob();
}
function blob_default(input, init2) {
  return fetch(input, init2).then(responseBlob);
}

// node_modules/d3/node_modules/d3-fetch/src/buffer.js
function responseArrayBuffer(response) {
  if (!response.ok)
    throw new Error(response.status + " " + response.statusText);
  return response.arrayBuffer();
}
function buffer_default(input, init2) {
  return fetch(input, init2).then(responseArrayBuffer);
}

// node_modules/d3/node_modules/d3-fetch/src/text.js
function responseText(response) {
  if (!response.ok)
    throw new Error(response.status + " " + response.statusText);
  return response.text();
}
function text_default3(input, init2) {
  return fetch(input, init2).then(responseText);
}

// node_modules/d3/node_modules/d3-fetch/src/dsv.js
function dsvParse(parse) {
  return function(input, init2, row) {
    if (arguments.length === 2 && typeof init2 === "function")
      row = init2, init2 = void 0;
    return text_default3(input, init2).then(function(response) {
      return parse(response, row);
    });
  };
}
function dsv(delimiter, input, init2, row) {
  if (arguments.length === 3 && typeof init2 === "function")
    row = init2, init2 = void 0;
  var format2 = dsv_default(delimiter);
  return text_default3(input, init2).then(function(response) {
    return format2.parse(response, row);
  });
}
var csv2 = dsvParse(csvParse);
var tsv2 = dsvParse(tsvParse);

// node_modules/d3/node_modules/d3-fetch/src/image.js
function image_default(input, init2) {
  return new Promise(function(resolve, reject) {
    var image = new Image();
    for (var key in init2)
      image[key] = init2[key];
    image.onerror = reject;
    image.onload = function() {
      resolve(image);
    };
    image.src = input;
  });
}

// node_modules/d3/node_modules/d3-fetch/src/json.js
function responseJson(response) {
  if (!response.ok)
    throw new Error(response.status + " " + response.statusText);
  if (response.status === 204 || response.status === 205)
    return;
  return response.json();
}
function json_default(input, init2) {
  return fetch(input, init2).then(responseJson);
}

// node_modules/d3/node_modules/d3-fetch/src/xml.js
function parser(type2) {
  return (input, init2) => text_default3(input, init2).then((text) => new DOMParser().parseFromString(text, type2));
}
var xml_default = parser("application/xml");
var html = parser("text/html");
var svg = parser("image/svg+xml");

// node_modules/d3-force/src/center.js
function center_default(x6, y7) {
  var nodes, strength = 1;
  if (x6 == null)
    x6 = 0;
  if (y7 == null)
    y7 = 0;
  function force() {
    var i4, n2 = nodes.length, node, sx = 0, sy = 0;
    for (i4 = 0; i4 < n2; ++i4) {
      node = nodes[i4], sx += node.x, sy += node.y;
    }
    for (sx = (sx / n2 - x6) * strength, sy = (sy / n2 - y7) * strength, i4 = 0; i4 < n2; ++i4) {
      node = nodes[i4], node.x -= sx, node.y -= sy;
    }
  }
  force.initialize = function(_2) {
    nodes = _2;
  };
  force.x = function(_2) {
    return arguments.length ? (x6 = +_2, force) : x6;
  };
  force.y = function(_2) {
    return arguments.length ? (y7 = +_2, force) : y7;
  };
  force.strength = function(_2) {
    return arguments.length ? (strength = +_2, force) : strength;
  };
  return force;
}

// node_modules/d3-quadtree/src/add.js
function add_default(d4) {
  const x6 = +this._x.call(null, d4), y7 = +this._y.call(null, d4);
  return add(this.cover(x6, y7), x6, y7, d4);
}
function add(tree, x6, y7, d4) {
  if (isNaN(x6) || isNaN(y7))
    return tree;
  var parent, node = tree._root, leaf = { data: d4 }, x06 = tree._x0, y06 = tree._y0, x12 = tree._x1, y12 = tree._y1, xm, ym, xp, yp, right2, bottom2, i4, j3;
  if (!node)
    return tree._root = leaf, tree;
  while (node.length) {
    if (right2 = x6 >= (xm = (x06 + x12) / 2))
      x06 = xm;
    else
      x12 = xm;
    if (bottom2 = y7 >= (ym = (y06 + y12) / 2))
      y06 = ym;
    else
      y12 = ym;
    if (parent = node, !(node = node[i4 = bottom2 << 1 | right2]))
      return parent[i4] = leaf, tree;
  }
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x6 === xp && y7 === yp)
    return leaf.next = node, parent ? parent[i4] = leaf : tree._root = leaf, tree;
  do {
    parent = parent ? parent[i4] = new Array(4) : tree._root = new Array(4);
    if (right2 = x6 >= (xm = (x06 + x12) / 2))
      x06 = xm;
    else
      x12 = xm;
    if (bottom2 = y7 >= (ym = (y06 + y12) / 2))
      y06 = ym;
    else
      y12 = ym;
  } while ((i4 = bottom2 << 1 | right2) === (j3 = (yp >= ym) << 1 | xp >= xm));
  return parent[j3] = node, parent[i4] = leaf, tree;
}
function addAll(data) {
  var d4, i4, n2 = data.length, x6, y7, xz = new Array(n2), yz = new Array(n2), x06 = Infinity, y06 = Infinity, x12 = -Infinity, y12 = -Infinity;
  for (i4 = 0; i4 < n2; ++i4) {
    if (isNaN(x6 = +this._x.call(null, d4 = data[i4])) || isNaN(y7 = +this._y.call(null, d4)))
      continue;
    xz[i4] = x6;
    yz[i4] = y7;
    if (x6 < x06)
      x06 = x6;
    if (x6 > x12)
      x12 = x6;
    if (y7 < y06)
      y06 = y7;
    if (y7 > y12)
      y12 = y7;
  }
  if (x06 > x12 || y06 > y12)
    return this;
  this.cover(x06, y06).cover(x12, y12);
  for (i4 = 0; i4 < n2; ++i4) {
    add(this, xz[i4], yz[i4], data[i4]);
  }
  return this;
}

// node_modules/d3-quadtree/src/cover.js
function cover_default(x6, y7) {
  if (isNaN(x6 = +x6) || isNaN(y7 = +y7))
    return this;
  var x06 = this._x0, y06 = this._y0, x12 = this._x1, y12 = this._y1;
  if (isNaN(x06)) {
    x12 = (x06 = Math.floor(x6)) + 1;
    y12 = (y06 = Math.floor(y7)) + 1;
  } else {
    var z2 = x12 - x06 || 1, node = this._root, parent, i4;
    while (x06 > x6 || x6 >= x12 || y06 > y7 || y7 >= y12) {
      i4 = (y7 < y06) << 1 | x6 < x06;
      parent = new Array(4), parent[i4] = node, node = parent, z2 *= 2;
      switch (i4) {
        case 0:
          x12 = x06 + z2, y12 = y06 + z2;
          break;
        case 1:
          x06 = x12 - z2, y12 = y06 + z2;
          break;
        case 2:
          x12 = x06 + z2, y06 = y12 - z2;
          break;
        case 3:
          x06 = x12 - z2, y06 = y12 - z2;
          break;
      }
    }
    if (this._root && this._root.length)
      this._root = node;
  }
  this._x0 = x06;
  this._y0 = y06;
  this._x1 = x12;
  this._y1 = y12;
  return this;
}

// node_modules/d3-quadtree/src/data.js
function data_default2() {
  var data = [];
  this.visit(function(node) {
    if (!node.length)
      do
        data.push(node.data);
      while (node = node.next);
  });
  return data;
}

// node_modules/d3-quadtree/src/extent.js
function extent_default2(_2) {
  return arguments.length ? this.cover(+_2[0][0], +_2[0][1]).cover(+_2[1][0], +_2[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}

// node_modules/d3-quadtree/src/quad.js
function quad_default(node, x06, y06, x12, y12) {
  this.node = node;
  this.x0 = x06;
  this.y0 = y06;
  this.x1 = x12;
  this.y1 = y12;
}

// node_modules/d3-quadtree/src/find.js
function find_default(x6, y7, radius) {
  var data, x06 = this._x0, y06 = this._y0, x12, y12, x22, y22, x32 = this._x1, y32 = this._y1, quads = [], node = this._root, q, i4;
  if (node)
    quads.push(new quad_default(node, x06, y06, x32, y32));
  if (radius == null)
    radius = Infinity;
  else {
    x06 = x6 - radius, y06 = y7 - radius;
    x32 = x6 + radius, y32 = y7 + radius;
    radius *= radius;
  }
  while (q = quads.pop()) {
    if (!(node = q.node) || (x12 = q.x0) > x32 || (y12 = q.y0) > y32 || (x22 = q.x1) < x06 || (y22 = q.y1) < y06)
      continue;
    if (node.length) {
      var xm = (x12 + x22) / 2, ym = (y12 + y22) / 2;
      quads.push(new quad_default(node[3], xm, ym, x22, y22), new quad_default(node[2], x12, ym, xm, y22), new quad_default(node[1], xm, y12, x22, ym), new quad_default(node[0], x12, y12, xm, ym));
      if (i4 = (y7 >= ym) << 1 | x6 >= xm) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i4];
        quads[quads.length - 1 - i4] = q;
      }
    } else {
      var dx = x6 - +this._x.call(null, node.data), dy = y7 - +this._y.call(null, node.data), d22 = dx * dx + dy * dy;
      if (d22 < radius) {
        var d4 = Math.sqrt(radius = d22);
        x06 = x6 - d4, y06 = y7 - d4;
        x32 = x6 + d4, y32 = y7 + d4;
        data = node.data;
      }
    }
  }
  return data;
}

// node_modules/d3-quadtree/src/remove.js
function remove_default3(d4) {
  if (isNaN(x6 = +this._x.call(null, d4)) || isNaN(y7 = +this._y.call(null, d4)))
    return this;
  var parent, node = this._root, retainer, previous, next, x06 = this._x0, y06 = this._y0, x12 = this._x1, y12 = this._y1, x6, y7, xm, ym, right2, bottom2, i4, j3;
  if (!node)
    return this;
  if (node.length)
    while (true) {
      if (right2 = x6 >= (xm = (x06 + x12) / 2))
        x06 = xm;
      else
        x12 = xm;
      if (bottom2 = y7 >= (ym = (y06 + y12) / 2))
        y06 = ym;
      else
        y12 = ym;
      if (!(parent = node, node = node[i4 = bottom2 << 1 | right2]))
        return this;
      if (!node.length)
        break;
      if (parent[i4 + 1 & 3] || parent[i4 + 2 & 3] || parent[i4 + 3 & 3])
        retainer = parent, j3 = i4;
    }
  while (node.data !== d4)
    if (!(previous = node, node = node.next))
      return this;
  if (next = node.next)
    delete node.next;
  if (previous)
    return next ? previous.next = next : delete previous.next, this;
  if (!parent)
    return this._root = next, this;
  next ? parent[i4] = next : delete parent[i4];
  if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
    if (retainer)
      retainer[j3] = node;
    else
      this._root = node;
  }
  return this;
}
function removeAll(data) {
  for (var i4 = 0, n2 = data.length; i4 < n2; ++i4)
    this.remove(data[i4]);
  return this;
}

// node_modules/d3-quadtree/src/root.js
function root_default() {
  return this._root;
}

// node_modules/d3-quadtree/src/size.js
function size_default2() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length)
      do
        ++size;
      while (node = node.next);
  });
  return size;
}

// node_modules/d3-quadtree/src/visit.js
function visit_default(callback) {
  var quads = [], q, node = this._root, child, x06, y06, x12, y12;
  if (node)
    quads.push(new quad_default(node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x06 = q.x0, y06 = q.y0, x12 = q.x1, y12 = q.y1) && node.length) {
      var xm = (x06 + x12) / 2, ym = (y06 + y12) / 2;
      if (child = node[3])
        quads.push(new quad_default(child, xm, ym, x12, y12));
      if (child = node[2])
        quads.push(new quad_default(child, x06, ym, xm, y12));
      if (child = node[1])
        quads.push(new quad_default(child, xm, y06, x12, ym));
      if (child = node[0])
        quads.push(new quad_default(child, x06, y06, xm, ym));
    }
  }
  return this;
}

// node_modules/d3-quadtree/src/visitAfter.js
function visitAfter_default(callback) {
  var quads = [], next = [], q;
  if (this._root)
    quads.push(new quad_default(this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x06 = q.x0, y06 = q.y0, x12 = q.x1, y12 = q.y1, xm = (x06 + x12) / 2, ym = (y06 + y12) / 2;
      if (child = node[0])
        quads.push(new quad_default(child, x06, y06, xm, ym));
      if (child = node[1])
        quads.push(new quad_default(child, xm, y06, x12, ym));
      if (child = node[2])
        quads.push(new quad_default(child, x06, ym, xm, y12));
      if (child = node[3])
        quads.push(new quad_default(child, xm, ym, x12, y12));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
}

// node_modules/d3-quadtree/src/x.js
function defaultX2(d4) {
  return d4[0];
}
function x_default(_2) {
  return arguments.length ? (this._x = _2, this) : this._x;
}

// node_modules/d3-quadtree/src/y.js
function defaultY2(d4) {
  return d4[1];
}
function y_default(_2) {
  return arguments.length ? (this._y = _2, this) : this._y;
}

// node_modules/d3-quadtree/src/quadtree.js
function quadtree(nodes, x6, y7) {
  var tree = new Quadtree(x6 == null ? defaultX2 : x6, y7 == null ? defaultY2 : y7, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}
function Quadtree(x6, y7, x06, y06, x12, y12) {
  this._x = x6;
  this._y = y7;
  this._x0 = x06;
  this._y0 = y06;
  this._x1 = x12;
  this._y1 = y12;
  this._root = void 0;
}
function leaf_copy(leaf) {
  var copy3 = { data: leaf.data }, next = copy3;
  while (leaf = leaf.next)
    next = next.next = { data: leaf.data };
  return copy3;
}
var treeProto = quadtree.prototype = Quadtree.prototype;
treeProto.copy = function() {
  var copy3 = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
  if (!node)
    return copy3;
  if (!node.length)
    return copy3._root = leaf_copy(node), copy3;
  nodes = [{ source: node, target: copy3._root = new Array(4) }];
  while (node = nodes.pop()) {
    for (var i4 = 0; i4 < 4; ++i4) {
      if (child = node.source[i4]) {
        if (child.length)
          nodes.push({ source: child, target: node.target[i4] = new Array(4) });
        else
          node.target[i4] = leaf_copy(child);
      }
    }
  }
  return copy3;
};
treeProto.add = add_default;
treeProto.addAll = addAll;
treeProto.cover = cover_default;
treeProto.data = data_default2;
treeProto.extent = extent_default2;
treeProto.find = find_default;
treeProto.remove = remove_default3;
treeProto.removeAll = removeAll;
treeProto.root = root_default;
treeProto.size = size_default2;
treeProto.visit = visit_default;
treeProto.visitAfter = visitAfter_default;
treeProto.x = x_default;
treeProto.y = y_default;

// node_modules/d3-force/src/constant.js
function constant_default8(x6) {
  return function() {
    return x6;
  };
}

// node_modules/d3-force/src/jiggle.js
function jiggle_default(random) {
  return (random() - 0.5) * 1e-6;
}

// node_modules/d3-force/src/collide.js
function x3(d4) {
  return d4.x + d4.vx;
}
function y3(d4) {
  return d4.y + d4.vy;
}
function collide_default(radius) {
  var nodes, radii, random, strength = 1, iterations2 = 1;
  if (typeof radius !== "function")
    radius = constant_default8(radius == null ? 1 : +radius);
  function force() {
    var i4, n2 = nodes.length, tree, node, xi, yi, ri, ri2;
    for (var k4 = 0; k4 < iterations2; ++k4) {
      tree = quadtree(nodes, x3, y3).visitAfter(prepare);
      for (i4 = 0; i4 < n2; ++i4) {
        node = nodes[i4];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }
    function apply(quad, x06, y06, x12, y12) {
      var data = quad.data, rj = quad.r, r4 = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x6 = xi - data.x - data.vx, y7 = yi - data.y - data.vy, l4 = x6 * x6 + y7 * y7;
          if (l4 < r4 * r4) {
            if (x6 === 0)
              x6 = jiggle_default(random), l4 += x6 * x6;
            if (y7 === 0)
              y7 = jiggle_default(random), l4 += y7 * y7;
            l4 = (r4 - (l4 = Math.sqrt(l4))) / l4 * strength;
            node.vx += (x6 *= l4) * (r4 = (rj *= rj) / (ri2 + rj));
            node.vy += (y7 *= l4) * r4;
            data.vx -= x6 * (r4 = 1 - r4);
            data.vy -= y7 * r4;
          }
        }
        return;
      }
      return x06 > xi + r4 || x12 < xi - r4 || y06 > yi + r4 || y12 < yi - r4;
    }
  }
  function prepare(quad) {
    if (quad.data)
      return quad.r = radii[quad.data.index];
    for (var i4 = quad.r = 0; i4 < 4; ++i4) {
      if (quad[i4] && quad[i4].r > quad.r) {
        quad.r = quad[i4].r;
      }
    }
  }
  function initialize() {
    if (!nodes)
      return;
    var i4, n2 = nodes.length, node;
    radii = new Array(n2);
    for (i4 = 0; i4 < n2; ++i4)
      node = nodes[i4], radii[node.index] = +radius(node, i4, nodes);
  }
  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.iterations = function(_2) {
    return arguments.length ? (iterations2 = +_2, force) : iterations2;
  };
  force.strength = function(_2) {
    return arguments.length ? (strength = +_2, force) : strength;
  };
  force.radius = function(_2) {
    return arguments.length ? (radius = typeof _2 === "function" ? _2 : constant_default8(+_2), initialize(), force) : radius;
  };
  return force;
}

// node_modules/d3-force/src/link.js
function index2(d4) {
  return d4.index;
}
function find2(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node)
    throw new Error("node not found: " + nodeId);
  return node;
}
function link_default(links) {
  var id2 = index2, strength = defaultStrength, strengths, distance = constant_default8(30), distances, nodes, count3, bias, random, iterations2 = 1;
  if (links == null)
    links = [];
  function defaultStrength(link3) {
    return 1 / Math.min(count3[link3.source.index], count3[link3.target.index]);
  }
  function force(alpha) {
    for (var k4 = 0, n2 = links.length; k4 < iterations2; ++k4) {
      for (var i4 = 0, link3, source, target, x6, y7, l4, b10; i4 < n2; ++i4) {
        link3 = links[i4], source = link3.source, target = link3.target;
        x6 = target.x + target.vx - source.x - source.vx || jiggle_default(random);
        y7 = target.y + target.vy - source.y - source.vy || jiggle_default(random);
        l4 = Math.sqrt(x6 * x6 + y7 * y7);
        l4 = (l4 - distances[i4]) / l4 * alpha * strengths[i4];
        x6 *= l4, y7 *= l4;
        target.vx -= x6 * (b10 = bias[i4]);
        target.vy -= y7 * b10;
        source.vx += x6 * (b10 = 1 - b10);
        source.vy += y7 * b10;
      }
    }
  }
  function initialize() {
    if (!nodes)
      return;
    var i4, n2 = nodes.length, m4 = links.length, nodeById = new Map(nodes.map((d4, i5) => [id2(d4, i5, nodes), d4])), link3;
    for (i4 = 0, count3 = new Array(n2); i4 < m4; ++i4) {
      link3 = links[i4], link3.index = i4;
      if (typeof link3.source !== "object")
        link3.source = find2(nodeById, link3.source);
      if (typeof link3.target !== "object")
        link3.target = find2(nodeById, link3.target);
      count3[link3.source.index] = (count3[link3.source.index] || 0) + 1;
      count3[link3.target.index] = (count3[link3.target.index] || 0) + 1;
    }
    for (i4 = 0, bias = new Array(m4); i4 < m4; ++i4) {
      link3 = links[i4], bias[i4] = count3[link3.source.index] / (count3[link3.source.index] + count3[link3.target.index]);
    }
    strengths = new Array(m4), initializeStrength();
    distances = new Array(m4), initializeDistance();
  }
  function initializeStrength() {
    if (!nodes)
      return;
    for (var i4 = 0, n2 = links.length; i4 < n2; ++i4) {
      strengths[i4] = +strength(links[i4], i4, links);
    }
  }
  function initializeDistance() {
    if (!nodes)
      return;
    for (var i4 = 0, n2 = links.length; i4 < n2; ++i4) {
      distances[i4] = +distance(links[i4], i4, links);
    }
  }
  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.links = function(_2) {
    return arguments.length ? (links = _2, initialize(), force) : links;
  };
  force.id = function(_2) {
    return arguments.length ? (id2 = _2, force) : id2;
  };
  force.iterations = function(_2) {
    return arguments.length ? (iterations2 = +_2, force) : iterations2;
  };
  force.strength = function(_2) {
    return arguments.length ? (strength = typeof _2 === "function" ? _2 : constant_default8(+_2), initializeStrength(), force) : strength;
  };
  force.distance = function(_2) {
    return arguments.length ? (distance = typeof _2 === "function" ? _2 : constant_default8(+_2), initializeDistance(), force) : distance;
  };
  return force;
}

// node_modules/d3-force/src/lcg.js
var a3 = 1664525;
var c3 = 1013904223;
var m3 = 4294967296;
function lcg_default() {
  let s5 = 1;
  return () => (s5 = (a3 * s5 + c3) % m3) / m3;
}

// node_modules/d3-force/src/simulation.js
function x4(d4) {
  return d4.x;
}
function y4(d4) {
  return d4.y;
}
var initialRadius = 10;
var initialAngle = Math.PI * (3 - Math.sqrt(5));
function simulation_default(nodes) {
  var simulation, alpha = 1, alphaMin = 1e-3, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = /* @__PURE__ */ new Map(), stepper = timer(step), event = dispatch_default("tick", "end"), random = lcg_default();
  if (nodes == null)
    nodes = [];
  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }
  function tick(iterations2) {
    var i4, n2 = nodes.length, node;
    if (iterations2 === void 0)
      iterations2 = 1;
    for (var k4 = 0; k4 < iterations2; ++k4) {
      alpha += (alphaTarget - alpha) * alphaDecay;
      forces.forEach(function(force) {
        force(alpha);
      });
      for (i4 = 0; i4 < n2; ++i4) {
        node = nodes[i4];
        if (node.fx == null)
          node.x += node.vx *= velocityDecay;
        else
          node.x = node.fx, node.vx = 0;
        if (node.fy == null)
          node.y += node.vy *= velocityDecay;
        else
          node.y = node.fy, node.vy = 0;
      }
    }
    return simulation;
  }
  function initializeNodes() {
    for (var i4 = 0, n2 = nodes.length, node; i4 < n2; ++i4) {
      node = nodes[i4], node.index = i4;
      if (node.fx != null)
        node.x = node.fx;
      if (node.fy != null)
        node.y = node.fy;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(0.5 + i4), angle2 = i4 * initialAngle;
        node.x = radius * Math.cos(angle2);
        node.y = radius * Math.sin(angle2);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }
  function initializeForce(force) {
    if (force.initialize)
      force.initialize(nodes, random);
    return force;
  }
  initializeNodes();
  return simulation = {
    tick,
    restart: function() {
      return stepper.restart(step), simulation;
    },
    stop: function() {
      return stepper.stop(), simulation;
    },
    nodes: function(_2) {
      return arguments.length ? (nodes = _2, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
    },
    alpha: function(_2) {
      return arguments.length ? (alpha = +_2, simulation) : alpha;
    },
    alphaMin: function(_2) {
      return arguments.length ? (alphaMin = +_2, simulation) : alphaMin;
    },
    alphaDecay: function(_2) {
      return arguments.length ? (alphaDecay = +_2, simulation) : +alphaDecay;
    },
    alphaTarget: function(_2) {
      return arguments.length ? (alphaTarget = +_2, simulation) : alphaTarget;
    },
    velocityDecay: function(_2) {
      return arguments.length ? (velocityDecay = 1 - _2, simulation) : 1 - velocityDecay;
    },
    randomSource: function(_2) {
      return arguments.length ? (random = _2, forces.forEach(initializeForce), simulation) : random;
    },
    force: function(name, _2) {
      return arguments.length > 1 ? (_2 == null ? forces.delete(name) : forces.set(name, initializeForce(_2)), simulation) : forces.get(name);
    },
    find: function(x6, y7, radius) {
      var i4 = 0, n2 = nodes.length, dx, dy, d22, node, closest;
      if (radius == null)
        radius = Infinity;
      else
        radius *= radius;
      for (i4 = 0; i4 < n2; ++i4) {
        node = nodes[i4];
        dx = x6 - node.x;
        dy = y7 - node.y;
        d22 = dx * dx + dy * dy;
        if (d22 < radius)
          closest = node, radius = d22;
      }
      return closest;
    },
    on: function(name, _2) {
      return arguments.length > 1 ? (event.on(name, _2), simulation) : event.on(name);
    }
  };
}

// node_modules/d3-force/src/manyBody.js
function manyBody_default() {
  var nodes, node, random, alpha, strength = constant_default8(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
  function force(_2) {
    var i4, n2 = nodes.length, tree = quadtree(nodes, x4, y4).visitAfter(accumulate);
    for (alpha = _2, i4 = 0; i4 < n2; ++i4)
      node = nodes[i4], tree.visit(apply);
  }
  function initialize() {
    if (!nodes)
      return;
    var i4, n2 = nodes.length, node2;
    strengths = new Array(n2);
    for (i4 = 0; i4 < n2; ++i4)
      node2 = nodes[i4], strengths[node2.index] = +strength(node2, i4, nodes);
  }
  function accumulate(quad) {
    var strength2 = 0, q, c8, weight = 0, x6, y7, i4;
    if (quad.length) {
      for (x6 = y7 = i4 = 0; i4 < 4; ++i4) {
        if ((q = quad[i4]) && (c8 = Math.abs(q.value))) {
          strength2 += q.value, weight += c8, x6 += c8 * q.x, y7 += c8 * q.y;
        }
      }
      quad.x = x6 / weight;
      quad.y = y7 / weight;
    } else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;
      do
        strength2 += strengths[q.data.index];
      while (q = q.next);
    }
    quad.value = strength2;
  }
  function apply(quad, x12, _2, x22) {
    if (!quad.value)
      return true;
    var x6 = quad.x - node.x, y7 = quad.y - node.y, w3 = x22 - x12, l4 = x6 * x6 + y7 * y7;
    if (w3 * w3 / theta2 < l4) {
      if (l4 < distanceMax2) {
        if (x6 === 0)
          x6 = jiggle_default(random), l4 += x6 * x6;
        if (y7 === 0)
          y7 = jiggle_default(random), l4 += y7 * y7;
        if (l4 < distanceMin2)
          l4 = Math.sqrt(distanceMin2 * l4);
        node.vx += x6 * quad.value * alpha / l4;
        node.vy += y7 * quad.value * alpha / l4;
      }
      return true;
    } else if (quad.length || l4 >= distanceMax2)
      return;
    if (quad.data !== node || quad.next) {
      if (x6 === 0)
        x6 = jiggle_default(random), l4 += x6 * x6;
      if (y7 === 0)
        y7 = jiggle_default(random), l4 += y7 * y7;
      if (l4 < distanceMin2)
        l4 = Math.sqrt(distanceMin2 * l4);
    }
    do
      if (quad.data !== node) {
        w3 = strengths[quad.data.index] * alpha / l4;
        node.vx += x6 * w3;
        node.vy += y7 * w3;
      }
    while (quad = quad.next);
  }
  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.strength = function(_2) {
    return arguments.length ? (strength = typeof _2 === "function" ? _2 : constant_default8(+_2), initialize(), force) : strength;
  };
  force.distanceMin = function(_2) {
    return arguments.length ? (distanceMin2 = _2 * _2, force) : Math.sqrt(distanceMin2);
  };
  force.distanceMax = function(_2) {
    return arguments.length ? (distanceMax2 = _2 * _2, force) : Math.sqrt(distanceMax2);
  };
  force.theta = function(_2) {
    return arguments.length ? (theta2 = _2 * _2, force) : Math.sqrt(theta2);
  };
  return force;
}

// node_modules/d3-force/src/radial.js
function radial_default(radius, x6, y7) {
  var nodes, strength = constant_default8(0.1), strengths, radiuses;
  if (typeof radius !== "function")
    radius = constant_default8(+radius);
  if (x6 == null)
    x6 = 0;
  if (y7 == null)
    y7 = 0;
  function force(alpha) {
    for (var i4 = 0, n2 = nodes.length; i4 < n2; ++i4) {
      var node = nodes[i4], dx = node.x - x6 || 1e-6, dy = node.y - y7 || 1e-6, r4 = Math.sqrt(dx * dx + dy * dy), k4 = (radiuses[i4] - r4) * strengths[i4] * alpha / r4;
      node.vx += dx * k4;
      node.vy += dy * k4;
    }
  }
  function initialize() {
    if (!nodes)
      return;
    var i4, n2 = nodes.length;
    strengths = new Array(n2);
    radiuses = new Array(n2);
    for (i4 = 0; i4 < n2; ++i4) {
      radiuses[i4] = +radius(nodes[i4], i4, nodes);
      strengths[i4] = isNaN(radiuses[i4]) ? 0 : +strength(nodes[i4], i4, nodes);
    }
  }
  force.initialize = function(_2) {
    nodes = _2, initialize();
  };
  force.strength = function(_2) {
    return arguments.length ? (strength = typeof _2 === "function" ? _2 : constant_default8(+_2), initialize(), force) : strength;
  };
  force.radius = function(_2) {
    return arguments.length ? (radius = typeof _2 === "function" ? _2 : constant_default8(+_2), initialize(), force) : radius;
  };
  force.x = function(_2) {
    return arguments.length ? (x6 = +_2, force) : x6;
  };
  force.y = function(_2) {
    return arguments.length ? (y7 = +_2, force) : y7;
  };
  return force;
}

// node_modules/d3-force/src/x.js
function x_default2(x6) {
  var strength = constant_default8(0.1), nodes, strengths, xz;
  if (typeof x6 !== "function")
    x6 = constant_default8(x6 == null ? 0 : +x6);
  function force(alpha) {
    for (var i4 = 0, n2 = nodes.length, node; i4 < n2; ++i4) {
      node = nodes[i4], node.vx += (xz[i4] - node.x) * strengths[i4] * alpha;
    }
  }
  function initialize() {
    if (!nodes)
      return;
    var i4, n2 = nodes.length;
    strengths = new Array(n2);
    xz = new Array(n2);
    for (i4 = 0; i4 < n2; ++i4) {
      strengths[i4] = isNaN(xz[i4] = +x6(nodes[i4], i4, nodes)) ? 0 : +strength(nodes[i4], i4, nodes);
    }
  }
  force.initialize = function(_2) {
    nodes = _2;
    initialize();
  };
  force.strength = function(_2) {
    return arguments.length ? (strength = typeof _2 === "function" ? _2 : constant_default8(+_2), initialize(), force) : strength;
  };
  force.x = function(_2) {
    return arguments.length ? (x6 = typeof _2 === "function" ? _2 : constant_default8(+_2), initialize(), force) : x6;
  };
  return force;
}

// node_modules/d3-force/src/y.js
function y_default2(y7) {
  var strength = constant_default8(0.1), nodes, strengths, yz;
  if (typeof y7 !== "function")
    y7 = constant_default8(y7 == null ? 0 : +y7);
  function force(alpha) {
    for (var i4 = 0, n2 = nodes.length, node; i4 < n2; ++i4) {
      node = nodes[i4], node.vy += (yz[i4] - node.y) * strengths[i4] * alpha;
    }
  }
  function initialize() {
    if (!nodes)
      return;
    var i4, n2 = nodes.length;
    strengths = new Array(n2);
    yz = new Array(n2);
    for (i4 = 0; i4 < n2; ++i4) {
      strengths[i4] = isNaN(yz[i4] = +y7(nodes[i4], i4, nodes)) ? 0 : +strength(nodes[i4], i4, nodes);
    }
  }
  force.initialize = function(_2) {
    nodes = _2;
    initialize();
  };
  force.strength = function(_2) {
    return arguments.length ? (strength = typeof _2 === "function" ? _2 : constant_default8(+_2), initialize(), force) : strength;
  };
  force.y = function(_2) {
    return arguments.length ? (y7 = typeof _2 === "function" ? _2 : constant_default8(+_2), initialize(), force) : y7;
  };
  return force;
}

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x6) {
  return Math.abs(x6 = Math.round(x6)) >= 1e21 ? x6.toLocaleString("en").replace(/,/g, "") : x6.toString(10);
}
function formatDecimalParts(x6, p3) {
  if ((i4 = (x6 = p3 ? x6.toExponential(p3 - 1) : x6.toExponential()).indexOf("e")) < 0)
    return null;
  var i4, coefficient = x6.slice(0, i4);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x6.slice(i4 + 1)
  ];
}

// node_modules/d3-format/src/exponent.js
function exponent_default(x6) {
  return x6 = formatDecimalParts(Math.abs(x6)), x6 ? x6[1] : NaN;
}

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i4 = value.length, t4 = [], j3 = 0, g3 = grouping[0], length3 = 0;
    while (i4 > 0 && g3 > 0) {
      if (length3 + g3 + 1 > width)
        g3 = Math.max(1, width - length3);
      t4.push(value.substring(i4 -= g3, i4 + g3));
      if ((length3 += g3 + 1) > width)
        break;
      g3 = grouping[j3 = (j3 + 1) % grouping.length];
    }
    return t4.reverse().join(thousands);
  };
}

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i4) {
      return numerals[+i4];
    });
  };
}

// node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s5) {
  out:
    for (var n2 = s5.length, i4 = 1, i0 = -1, i1; i4 < n2; ++i4) {
      switch (s5[i4]) {
        case ".":
          i0 = i1 = i4;
          break;
        case "0":
          if (i0 === 0)
            i0 = i4;
          i1 = i4;
          break;
        default:
          if (!+s5[i4])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s5.slice(0, i0) + s5.slice(i1 + 1) : s5;
}

// node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x6, p3) {
  var d4 = formatDecimalParts(x6, p3);
  if (!d4)
    return x6 + "";
  var coefficient = d4[0], exponent2 = d4[1], i4 = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n2 = coefficient.length;
  return i4 === n2 ? coefficient : i4 > n2 ? coefficient + new Array(i4 - n2 + 1).join("0") : i4 > 0 ? coefficient.slice(0, i4) + "." + coefficient.slice(i4) : "0." + new Array(1 - i4).join("0") + formatDecimalParts(x6, Math.max(0, p3 + i4 - 1))[0];
}

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x6, p3) {
  var d4 = formatDecimalParts(x6, p3);
  if (!d4)
    return x6 + "";
  var coefficient = d4[0], exponent2 = d4[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": (x6, p3) => (x6 * 100).toFixed(p3),
  "b": (x6) => Math.round(x6).toString(2),
  "c": (x6) => x6 + "",
  "d": formatDecimal_default,
  "e": (x6, p3) => x6.toExponential(p3),
  "f": (x6, p3) => x6.toFixed(p3),
  "g": (x6, p3) => x6.toPrecision(p3),
  "o": (x6) => Math.round(x6).toString(8),
  "p": (x6, p3) => formatRounded_default(x6 * 100, p3),
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": (x6) => Math.round(x6).toString(16).toUpperCase(),
  "x": (x6) => Math.round(x6).toString(16)
};

// node_modules/d3-format/src/identity.js
function identity_default3(x6) {
  return x6;
}

// node_modules/d3-format/src/locale.js
var map3 = Array.prototype.map;
var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group2 = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default3 : formatGroup_default(map3.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default3 : formatNumerals_default(map3.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "\u2212" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign3 = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type2 = specifier.type;
    if (type2 === "n")
      comma = true, type2 = "g";
    else if (!formatTypes_default[type2])
      precision === void 0 && (precision = 12), trim = true, type2 = "g";
    if (zero2 || fill === "0" && align === "=")
      zero2 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type2) ? "0" + type2.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type2) ? percent : "";
    var formatType = formatTypes_default[type2], maybeSuffix = /[defgprs%]/.test(type2);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type2) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i4, n2, c8;
      if (type2 === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign3 !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign3 === "(" ? sign3 : minus : sign3 === "-" || sign3 === "(" ? "" : sign3) + valuePrefix;
        valueSuffix = (type2 === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign3 === "(" ? ")" : "");
        if (maybeSuffix) {
          i4 = -1, n2 = value.length;
          while (++i4 < n2) {
            if (c8 = value.charCodeAt(i4), 48 > c8 || c8 > 57) {
              valueSuffix = (c8 === 46 ? decimal + value.slice(i4 + 1) : value.slice(i4)) + valueSuffix;
              value = value.slice(0, i4);
              break;
            }
          }
        }
      }
      if (comma && !zero2)
        value = group2(value, Infinity);
      var length3 = valuePrefix.length + value.length + valueSuffix.length, padding = length3 < width ? new Array(width - length3 + 1).join(fill) : "";
      if (comma && zero2)
        value = group2(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length3 = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length3);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f4 = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e3 = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k4 = Math.pow(10, -e3), prefix = prefixes[8 + e3 / 3];
    return function(value2) {
      return f4(k4 * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max5) {
  step = Math.abs(step), max5 = Math.abs(max5) - step;
  return Math.max(0, exponent_default(max5) - exponent_default(step)) + 1;
}

// node_modules/d3-geo/src/math.js
var epsilon6 = 1e-6;
var epsilon22 = 1e-12;
var pi4 = Math.PI;
var halfPi3 = pi4 / 2;
var quarterPi = pi4 / 4;
var tau5 = pi4 * 2;
var degrees3 = 180 / pi4;
var radians2 = pi4 / 180;
var abs3 = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos2 = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var hypot = Math.hypot;
var log = Math.log;
var pow2 = Math.pow;
var sin2 = Math.sin;
var sign = Math.sign || function(x6) {
  return x6 > 0 ? 1 : x6 < 0 ? -1 : 0;
};
var sqrt = Math.sqrt;
var tan = Math.tan;
function acos(x6) {
  return x6 > 1 ? 0 : x6 < -1 ? pi4 : Math.acos(x6);
}
function asin(x6) {
  return x6 > 1 ? halfPi3 : x6 < -1 ? -halfPi3 : Math.asin(x6);
}
function haversin(x6) {
  return (x6 = sin2(x6 / 2)) * x6;
}

// node_modules/d3-geo/src/noop.js
function noop2() {
}

// node_modules/d3-geo/src/stream.js
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}
var streamObjectType = {
  Feature: function(object2, stream) {
    streamGeometry(object2.geometry, stream);
  },
  FeatureCollection: function(object2, stream) {
    var features = object2.features, i4 = -1, n2 = features.length;
    while (++i4 < n2)
      streamGeometry(features[i4].geometry, stream);
  }
};
var streamGeometryType = {
  Sphere: function(object2, stream) {
    stream.sphere();
  },
  Point: function(object2, stream) {
    object2 = object2.coordinates;
    stream.point(object2[0], object2[1], object2[2]);
  },
  MultiPoint: function(object2, stream) {
    var coordinates2 = object2.coordinates, i4 = -1, n2 = coordinates2.length;
    while (++i4 < n2)
      object2 = coordinates2[i4], stream.point(object2[0], object2[1], object2[2]);
  },
  LineString: function(object2, stream) {
    streamLine(object2.coordinates, stream, 0);
  },
  MultiLineString: function(object2, stream) {
    var coordinates2 = object2.coordinates, i4 = -1, n2 = coordinates2.length;
    while (++i4 < n2)
      streamLine(coordinates2[i4], stream, 0);
  },
  Polygon: function(object2, stream) {
    streamPolygon(object2.coordinates, stream);
  },
  MultiPolygon: function(object2, stream) {
    var coordinates2 = object2.coordinates, i4 = -1, n2 = coordinates2.length;
    while (++i4 < n2)
      streamPolygon(coordinates2[i4], stream);
  },
  GeometryCollection: function(object2, stream) {
    var geometries = object2.geometries, i4 = -1, n2 = geometries.length;
    while (++i4 < n2)
      streamGeometry(geometries[i4], stream);
  }
};
function streamLine(coordinates2, stream, closed) {
  var i4 = -1, n2 = coordinates2.length - closed, coordinate;
  stream.lineStart();
  while (++i4 < n2)
    coordinate = coordinates2[i4], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}
function streamPolygon(coordinates2, stream) {
  var i4 = -1, n2 = coordinates2.length;
  stream.polygonStart();
  while (++i4 < n2)
    streamLine(coordinates2[i4], stream, 1);
  stream.polygonEnd();
}
function stream_default(object2, stream) {
  if (object2 && streamObjectType.hasOwnProperty(object2.type)) {
    streamObjectType[object2.type](object2, stream);
  } else {
    streamGeometry(object2, stream);
  }
}

// node_modules/d3-geo/src/area.js
var areaRingSum = new Adder();
var areaSum = new Adder();
var lambda00;
var phi00;
var lambda0;
var cosPhi0;
var sinPhi0;
var areaStream = {
  point: noop2,
  lineStart: noop2,
  lineEnd: noop2,
  polygonStart: function() {
    areaRingSum = new Adder();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? tau5 + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = noop2;
  },
  sphere: function() {
    areaSum.add(tau5);
  }
};
function areaRingStart() {
  areaStream.point = areaPointFirst;
}
function areaRingEnd() {
  areaPoint(lambda00, phi00);
}
function areaPointFirst(lambda, phi2) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi2;
  lambda *= radians2, phi2 *= radians2;
  lambda0 = lambda, cosPhi0 = cos2(phi2 = phi2 / 2 + quarterPi), sinPhi0 = sin2(phi2);
}
function areaPoint(lambda, phi2) {
  lambda *= radians2, phi2 *= radians2;
  phi2 = phi2 / 2 + quarterPi;
  var dLambda = lambda - lambda0, sdLambda = dLambda >= 0 ? 1 : -1, adLambda = sdLambda * dLambda, cosPhi = cos2(phi2), sinPhi = sin2(phi2), k4 = sinPhi0 * sinPhi, u4 = cosPhi0 * cosPhi + k4 * cos2(adLambda), v3 = k4 * sdLambda * sin2(adLambda);
  areaRingSum.add(atan2(v3, u4));
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}
function area_default2(object2) {
  areaSum = new Adder();
  stream_default(object2, areaStream);
  return areaSum * 2;
}

// node_modules/d3-geo/src/cartesian.js
function spherical(cartesian2) {
  return [atan2(cartesian2[1], cartesian2[0]), asin(cartesian2[2])];
}
function cartesian(spherical2) {
  var lambda = spherical2[0], phi2 = spherical2[1], cosPhi = cos2(phi2);
  return [cosPhi * cos2(lambda), cosPhi * sin2(lambda), sin2(phi2)];
}
function cartesianDot(a6, b10) {
  return a6[0] * b10[0] + a6[1] * b10[1] + a6[2] * b10[2];
}
function cartesianCross(a6, b10) {
  return [a6[1] * b10[2] - a6[2] * b10[1], a6[2] * b10[0] - a6[0] * b10[2], a6[0] * b10[1] - a6[1] * b10[0]];
}
function cartesianAddInPlace(a6, b10) {
  a6[0] += b10[0], a6[1] += b10[1], a6[2] += b10[2];
}
function cartesianScale(vector, k4) {
  return [vector[0] * k4, vector[1] * k4, vector[2] * k4];
}
function cartesianNormalizeInPlace(d4) {
  var l4 = sqrt(d4[0] * d4[0] + d4[1] * d4[1] + d4[2] * d4[2]);
  d4[0] /= l4, d4[1] /= l4, d4[2] /= l4;
}

// node_modules/d3-geo/src/bounds.js
var lambda02;
var phi0;
var lambda1;
var phi1;
var lambda2;
var lambda002;
var phi002;
var p0;
var deltaSum;
var ranges;
var range2;
var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum = new Adder();
    areaStream.polygonStart();
  },
  polygonEnd: function() {
    areaStream.polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (areaRingSum < 0)
      lambda02 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    else if (deltaSum > epsilon6)
      phi1 = 90;
    else if (deltaSum < -epsilon6)
      phi0 = -90;
    range2[0] = lambda02, range2[1] = lambda1;
  },
  sphere: function() {
    lambda02 = -(lambda1 = 180), phi0 = -(phi1 = 90);
  }
};
function boundsPoint(lambda, phi2) {
  ranges.push(range2 = [lambda02 = lambda, lambda1 = lambda]);
  if (phi2 < phi0)
    phi0 = phi2;
  if (phi2 > phi1)
    phi1 = phi2;
}
function linePoint(lambda, phi2) {
  var p3 = cartesian([lambda * radians2, phi2 * radians2]);
  if (p0) {
    var normal = cartesianCross(p0, p3), equatorial = [normal[1], -normal[0], 0], inflection = cartesianCross(equatorial, normal);
    cartesianNormalizeInPlace(inflection);
    inflection = spherical(inflection);
    var delta = lambda - lambda2, sign3 = delta > 0 ? 1 : -1, lambdai = inflection[0] * degrees3 * sign3, phii, antimeridian = abs3(delta) > 180;
    if (antimeridian ^ (sign3 * lambda2 < lambdai && lambdai < sign3 * lambda)) {
      phii = inflection[1] * degrees3;
      if (phii > phi1)
        phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign3 * lambda2 < lambdai && lambdai < sign3 * lambda)) {
      phii = -inflection[1] * degrees3;
      if (phii < phi0)
        phi0 = phii;
    } else {
      if (phi2 < phi0)
        phi0 = phi2;
      if (phi2 > phi1)
        phi1 = phi2;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda02, lambda) > angle(lambda02, lambda1))
          lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda02, lambda1))
          lambda02 = lambda;
      }
    } else {
      if (lambda1 >= lambda02) {
        if (lambda < lambda02)
          lambda02 = lambda;
        if (lambda > lambda1)
          lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda02, lambda) > angle(lambda02, lambda1))
            lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda02, lambda1))
            lambda02 = lambda;
        }
      }
    }
  } else {
    ranges.push(range2 = [lambda02 = lambda, lambda1 = lambda]);
  }
  if (phi2 < phi0)
    phi0 = phi2;
  if (phi2 > phi1)
    phi1 = phi2;
  p0 = p3, lambda2 = lambda;
}
function boundsLineStart() {
  boundsStream.point = linePoint;
}
function boundsLineEnd() {
  range2[0] = lambda02, range2[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}
function boundsRingPoint(lambda, phi2) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(abs3(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda002 = lambda, phi002 = phi2;
  }
  areaStream.point(lambda, phi2);
  linePoint(lambda, phi2);
}
function boundsRingStart() {
  areaStream.lineStart();
}
function boundsRingEnd() {
  boundsRingPoint(lambda002, phi002);
  areaStream.lineEnd();
  if (abs3(deltaSum) > epsilon6)
    lambda02 = -(lambda1 = 180);
  range2[0] = lambda02, range2[1] = lambda1;
  p0 = null;
}
function angle(lambda04, lambda12) {
  return (lambda12 -= lambda04) < 0 ? lambda12 + 360 : lambda12;
}
function rangeCompare(a6, b10) {
  return a6[0] - b10[0];
}
function rangeContains(range3, x6) {
  return range3[0] <= range3[1] ? range3[0] <= x6 && x6 <= range3[1] : x6 < range3[0] || range3[1] < x6;
}
function bounds_default(feature) {
  var i4, n2, a6, b10, merged, deltaMax, delta;
  phi1 = lambda1 = -(lambda02 = phi0 = Infinity);
  ranges = [];
  stream_default(feature, boundsStream);
  if (n2 = ranges.length) {
    ranges.sort(rangeCompare);
    for (i4 = 1, a6 = ranges[0], merged = [a6]; i4 < n2; ++i4) {
      b10 = ranges[i4];
      if (rangeContains(a6, b10[0]) || rangeContains(a6, b10[1])) {
        if (angle(a6[0], b10[1]) > angle(a6[0], a6[1]))
          a6[1] = b10[1];
        if (angle(b10[0], a6[1]) > angle(a6[0], a6[1]))
          a6[0] = b10[0];
      } else {
        merged.push(a6 = b10);
      }
    }
    for (deltaMax = -Infinity, n2 = merged.length - 1, i4 = 0, a6 = merged[n2]; i4 <= n2; a6 = b10, ++i4) {
      b10 = merged[i4];
      if ((delta = angle(a6[1], b10[0])) > deltaMax)
        deltaMax = delta, lambda02 = b10[0], lambda1 = a6[1];
    }
  }
  ranges = range2 = null;
  return lambda02 === Infinity || phi0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[lambda02, phi0], [lambda1, phi1]];
}

// node_modules/d3-geo/src/centroid.js
var W0;
var W1;
var X0;
var Y0;
var Z0;
var X1;
var Y1;
var Z1;
var X2;
var Y2;
var Z2;
var lambda003;
var phi003;
var x0;
var y0;
var z0;
var centroidStream = {
  sphere: noop2,
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};
function centroidPoint(lambda, phi2) {
  lambda *= radians2, phi2 *= radians2;
  var cosPhi = cos2(phi2);
  centroidPointCartesian(cosPhi * cos2(lambda), cosPhi * sin2(lambda), sin2(phi2));
}
function centroidPointCartesian(x6, y7, z2) {
  ++W0;
  X0 += (x6 - X0) / W0;
  Y0 += (y7 - Y0) / W0;
  Z0 += (z2 - Z0) / W0;
}
function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}
function centroidLinePointFirst(lambda, phi2) {
  lambda *= radians2, phi2 *= radians2;
  var cosPhi = cos2(phi2);
  x0 = cosPhi * cos2(lambda);
  y0 = cosPhi * sin2(lambda);
  z0 = sin2(phi2);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}
function centroidLinePoint(lambda, phi2) {
  lambda *= radians2, phi2 *= radians2;
  var cosPhi = cos2(phi2), x6 = cosPhi * cos2(lambda), y7 = cosPhi * sin2(lambda), z2 = sin2(phi2), w3 = atan2(sqrt((w3 = y0 * z2 - z0 * y7) * w3 + (w3 = z0 * x6 - x0 * z2) * w3 + (w3 = x0 * y7 - y0 * x6) * w3), x0 * x6 + y0 * y7 + z0 * z2);
  W1 += w3;
  X1 += w3 * (x0 + (x0 = x6));
  Y1 += w3 * (y0 + (y0 = y7));
  Z1 += w3 * (z0 + (z0 = z2));
  centroidPointCartesian(x0, y0, z0);
}
function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}
function centroidRingEnd() {
  centroidRingPoint(lambda003, phi003);
  centroidStream.point = centroidPoint;
}
function centroidRingPointFirst(lambda, phi2) {
  lambda003 = lambda, phi003 = phi2;
  lambda *= radians2, phi2 *= radians2;
  centroidStream.point = centroidRingPoint;
  var cosPhi = cos2(phi2);
  x0 = cosPhi * cos2(lambda);
  y0 = cosPhi * sin2(lambda);
  z0 = sin2(phi2);
  centroidPointCartesian(x0, y0, z0);
}
function centroidRingPoint(lambda, phi2) {
  lambda *= radians2, phi2 *= radians2;
  var cosPhi = cos2(phi2), x6 = cosPhi * cos2(lambda), y7 = cosPhi * sin2(lambda), z2 = sin2(phi2), cx = y0 * z2 - z0 * y7, cy = z0 * x6 - x0 * z2, cz = x0 * y7 - y0 * x6, m4 = hypot(cx, cy, cz), w3 = asin(m4), v3 = m4 && -w3 / m4;
  X2.add(v3 * cx);
  Y2.add(v3 * cy);
  Z2.add(v3 * cz);
  W1 += w3;
  X1 += w3 * (x0 + (x0 = x6));
  Y1 += w3 * (y0 + (y0 = y7));
  Z1 += w3 * (z0 + (z0 = z2));
  centroidPointCartesian(x0, y0, z0);
}
function centroid_default(object2) {
  W0 = W1 = X0 = Y0 = Z0 = X1 = Y1 = Z1 = 0;
  X2 = new Adder();
  Y2 = new Adder();
  Z2 = new Adder();
  stream_default(object2, centroidStream);
  var x6 = +X2, y7 = +Y2, z2 = +Z2, m4 = hypot(x6, y7, z2);
  if (m4 < epsilon22) {
    x6 = X1, y7 = Y1, z2 = Z1;
    if (W1 < epsilon6)
      x6 = X0, y7 = Y0, z2 = Z0;
    m4 = hypot(x6, y7, z2);
    if (m4 < epsilon22)
      return [NaN, NaN];
  }
  return [atan2(y7, x6) * degrees3, asin(z2 / m4) * degrees3];
}

// node_modules/d3-geo/src/constant.js
function constant_default9(x6) {
  return function() {
    return x6;
  };
}

// node_modules/d3-geo/src/compose.js
function compose_default(a6, b10) {
  function compose(x6, y7) {
    return x6 = a6(x6, y7), b10(x6[0], x6[1]);
  }
  if (a6.invert && b10.invert)
    compose.invert = function(x6, y7) {
      return x6 = b10.invert(x6, y7), x6 && a6.invert(x6[0], x6[1]);
    };
  return compose;
}

// node_modules/d3-geo/src/rotation.js
function rotationIdentity(lambda, phi2) {
  return [abs3(lambda) > pi4 ? lambda + Math.round(-lambda / tau5) * tau5 : lambda, phi2];
}
rotationIdentity.invert = rotationIdentity;
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= tau5) ? deltaPhi || deltaGamma ? compose_default(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi2) {
    return lambda += deltaLambda, [lambda > pi4 ? lambda - tau5 : lambda < -pi4 ? lambda + tau5 : lambda, phi2];
  };
}
function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = cos2(deltaPhi), sinDeltaPhi = sin2(deltaPhi), cosDeltaGamma = cos2(deltaGamma), sinDeltaGamma = sin2(deltaGamma);
  function rotation(lambda, phi2) {
    var cosPhi = cos2(phi2), x6 = cos2(lambda) * cosPhi, y7 = sin2(lambda) * cosPhi, z2 = sin2(phi2), k4 = z2 * cosDeltaPhi + x6 * sinDeltaPhi;
    return [
      atan2(y7 * cosDeltaGamma - k4 * sinDeltaGamma, x6 * cosDeltaPhi - z2 * sinDeltaPhi),
      asin(k4 * cosDeltaGamma + y7 * sinDeltaGamma)
    ];
  }
  rotation.invert = function(lambda, phi2) {
    var cosPhi = cos2(phi2), x6 = cos2(lambda) * cosPhi, y7 = sin2(lambda) * cosPhi, z2 = sin2(phi2), k4 = z2 * cosDeltaGamma - y7 * sinDeltaGamma;
    return [
      atan2(y7 * cosDeltaGamma + z2 * sinDeltaGamma, x6 * cosDeltaPhi + k4 * sinDeltaPhi),
      asin(k4 * cosDeltaPhi - x6 * sinDeltaPhi)
    ];
  };
  return rotation;
}
function rotation_default(rotate) {
  rotate = rotateRadians(rotate[0] * radians2, rotate[1] * radians2, rotate.length > 2 ? rotate[2] * radians2 : 0);
  function forward(coordinates2) {
    coordinates2 = rotate(coordinates2[0] * radians2, coordinates2[1] * radians2);
    return coordinates2[0] *= degrees3, coordinates2[1] *= degrees3, coordinates2;
  }
  forward.invert = function(coordinates2) {
    coordinates2 = rotate.invert(coordinates2[0] * radians2, coordinates2[1] * radians2);
    return coordinates2[0] *= degrees3, coordinates2[1] *= degrees3, coordinates2;
  };
  return forward;
}

// node_modules/d3-geo/src/circle.js
function circleStream(stream, radius, delta, direction, t03, t13) {
  if (!delta)
    return;
  var cosRadius = cos2(radius), sinRadius = sin2(radius), step = direction * delta;
  if (t03 == null) {
    t03 = radius + direction * tau5;
    t13 = radius - step / 2;
  } else {
    t03 = circleRadius(cosRadius, t03);
    t13 = circleRadius(cosRadius, t13);
    if (direction > 0 ? t03 < t13 : t03 > t13)
      t03 += direction * tau5;
  }
  for (var point6, t4 = t03; direction > 0 ? t4 > t13 : t4 < t13; t4 -= step) {
    point6 = spherical([cosRadius, -sinRadius * cos2(t4), -sinRadius * sin2(t4)]);
    stream.point(point6[0], point6[1]);
  }
}
function circleRadius(cosRadius, point6) {
  point6 = cartesian(point6), point6[0] -= cosRadius;
  cartesianNormalizeInPlace(point6);
  var radius = acos(-point6[1]);
  return ((-point6[2] < 0 ? -radius : radius) + tau5 - epsilon6) % tau5;
}
function circle_default() {
  var center2 = constant_default9([0, 0]), radius = constant_default9(90), precision = constant_default9(6), ring, rotate, stream = { point: point6 };
  function point6(x6, y7) {
    ring.push(x6 = rotate(x6, y7));
    x6[0] *= degrees3, x6[1] *= degrees3;
  }
  function circle2() {
    var c8 = center2.apply(this, arguments), r4 = radius.apply(this, arguments) * radians2, p3 = precision.apply(this, arguments) * radians2;
    ring = [];
    rotate = rotateRadians(-c8[0] * radians2, -c8[1] * radians2, 0).invert;
    circleStream(stream, r4, p3, 1);
    c8 = { type: "Polygon", coordinates: [ring] };
    ring = rotate = null;
    return c8;
  }
  circle2.center = function(_2) {
    return arguments.length ? (center2 = typeof _2 === "function" ? _2 : constant_default9([+_2[0], +_2[1]]), circle2) : center2;
  };
  circle2.radius = function(_2) {
    return arguments.length ? (radius = typeof _2 === "function" ? _2 : constant_default9(+_2), circle2) : radius;
  };
  circle2.precision = function(_2) {
    return arguments.length ? (precision = typeof _2 === "function" ? _2 : constant_default9(+_2), circle2) : precision;
  };
  return circle2;
}

// node_modules/d3-geo/src/clip/buffer.js
function buffer_default2() {
  var lines = [], line;
  return {
    point: function(x6, y7, m4) {
      line.push([x6, y7, m4]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: noop2,
    rejoin: function() {
      if (lines.length > 1)
        lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
}

// node_modules/d3-geo/src/pointEqual.js
function pointEqual_default(a6, b10) {
  return abs3(a6[0] - b10[0]) < epsilon6 && abs3(a6[1] - b10[1]) < epsilon6;
}

// node_modules/d3-geo/src/clip/rejoin.js
function Intersection(point6, points, other, entry) {
  this.x = point6;
  this.z = points;
  this.o = other;
  this.e = entry;
  this.v = false;
  this.n = this.p = null;
}
function rejoin_default(segments, compareIntersection2, startInside, interpolate, stream) {
  var subject = [], clip = [], i4, n2;
  segments.forEach(function(segment) {
    if ((n3 = segment.length - 1) <= 0)
      return;
    var n3, p02 = segment[0], p1 = segment[n3], x6;
    if (pointEqual_default(p02, p1)) {
      if (!p02[2] && !p1[2]) {
        stream.lineStart();
        for (i4 = 0; i4 < n3; ++i4)
          stream.point((p02 = segment[i4])[0], p02[1]);
        stream.lineEnd();
        return;
      }
      p1[0] += 2 * epsilon6;
    }
    subject.push(x6 = new Intersection(p02, segment, null, true));
    clip.push(x6.o = new Intersection(p02, null, x6, false));
    subject.push(x6 = new Intersection(p1, segment, null, false));
    clip.push(x6.o = new Intersection(p1, null, x6, true));
  });
  if (!subject.length)
    return;
  clip.sort(compareIntersection2);
  link(subject);
  link(clip);
  for (i4 = 0, n2 = clip.length; i4 < n2; ++i4) {
    clip[i4].e = startInside = !startInside;
  }
  var start2 = subject[0], points, point6;
  while (1) {
    var current = start2, isSubject = true;
    while (current.v)
      if ((current = current.n) === start2)
        return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i4 = 0, n2 = points.length; i4 < n2; ++i4)
            stream.point((point6 = points[i4])[0], point6[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i4 = points.length - 1; i4 >= 0; --i4)
            stream.point((point6 = points[i4])[0], point6[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
}
function link(array3) {
  if (!(n2 = array3.length))
    return;
  var n2, i4 = 0, a6 = array3[0], b10;
  while (++i4 < n2) {
    a6.n = b10 = array3[i4];
    b10.p = a6;
    a6 = b10;
  }
  a6.n = b10 = array3[0];
  b10.p = a6;
}

// node_modules/d3-geo/src/polygonContains.js
function longitude(point6) {
  if (abs3(point6[0]) <= pi4)
    return point6[0];
  else
    return sign(point6[0]) * ((abs3(point6[0]) + pi4) % tau5 - pi4);
}
function polygonContains_default(polygon, point6) {
  var lambda = longitude(point6), phi2 = point6[1], sinPhi = sin2(phi2), normal = [sin2(lambda), -cos2(lambda), 0], angle2 = 0, winding = 0;
  var sum3 = new Adder();
  if (sinPhi === 1)
    phi2 = halfPi3 + epsilon6;
  else if (sinPhi === -1)
    phi2 = -halfPi3 - epsilon6;
  for (var i4 = 0, n2 = polygon.length; i4 < n2; ++i4) {
    if (!(m4 = (ring = polygon[i4]).length))
      continue;
    var ring, m4, point0 = ring[m4 - 1], lambda04 = longitude(point0), phi02 = point0[1] / 2 + quarterPi, sinPhi03 = sin2(phi02), cosPhi03 = cos2(phi02);
    for (var j3 = 0; j3 < m4; ++j3, lambda04 = lambda12, sinPhi03 = sinPhi1, cosPhi03 = cosPhi1, point0 = point1) {
      var point1 = ring[j3], lambda12 = longitude(point1), phi12 = point1[1] / 2 + quarterPi, sinPhi1 = sin2(phi12), cosPhi1 = cos2(phi12), delta = lambda12 - lambda04, sign3 = delta >= 0 ? 1 : -1, absDelta = sign3 * delta, antimeridian = absDelta > pi4, k4 = sinPhi03 * sinPhi1;
      sum3.add(atan2(k4 * sign3 * sin2(absDelta), cosPhi03 * cosPhi1 + k4 * cos2(absDelta)));
      angle2 += antimeridian ? delta + sign3 * tau5 : delta;
      if (antimeridian ^ lambda04 >= lambda ^ lambda12 >= lambda) {
        var arc = cartesianCross(cartesian(point0), cartesian(point1));
        cartesianNormalizeInPlace(arc);
        var intersection2 = cartesianCross(normal, arc);
        cartesianNormalizeInPlace(intersection2);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection2[2]);
        if (phi2 > phiArc || phi2 === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }
  return (angle2 < -epsilon6 || angle2 < epsilon6 && sum3 < -epsilon22) ^ winding & 1;
}

// node_modules/d3-geo/src/clip/index.js
function clip_default(pointVisible, clipLine, interpolate, start2) {
  return function(sink) {
    var line = clipLine(sink), ringBuffer = buffer_default2(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
    var clip = {
      point: point6,
      lineStart,
      lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point6;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = merge(segments);
        var startInside = polygonContains_default(polygon, start2);
        if (segments.length) {
          if (!polygonStarted)
            sink.polygonStart(), polygonStarted = true;
          rejoin_default(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted)
            sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted)
          sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };
    function point6(lambda, phi2) {
      if (pointVisible(lambda, phi2))
        sink.point(lambda, phi2);
    }
    function pointLine(lambda, phi2) {
      line.point(lambda, phi2);
    }
    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }
    function lineEnd() {
      clip.point = point6;
      line.lineEnd();
    }
    function pointRing(lambda, phi2) {
      ring.push([lambda, phi2]);
      ringSink.point(lambda, phi2);
    }
    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }
    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();
      var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i4, n2 = ringSegments.length, m4, segment, point7;
      ring.pop();
      polygon.push(ring);
      ring = null;
      if (!n2)
        return;
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m4 = segment.length - 1) > 0) {
          if (!polygonStarted)
            sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i4 = 0; i4 < m4; ++i4)
            sink.point((point7 = segment[i4])[0], point7[1]);
          sink.lineEnd();
        }
        return;
      }
      if (n2 > 1 && clean & 2)
        ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
      segments.push(ringSegments.filter(validSegment));
    }
    return clip;
  };
}
function validSegment(segment) {
  return segment.length > 1;
}
function compareIntersection(a6, b10) {
  return ((a6 = a6.x)[0] < 0 ? a6[1] - halfPi3 - epsilon6 : halfPi3 - a6[1]) - ((b10 = b10.x)[0] < 0 ? b10[1] - halfPi3 - epsilon6 : halfPi3 - b10[1]);
}

// node_modules/d3-geo/src/clip/antimeridian.js
var antimeridian_default = clip_default(function() {
  return true;
}, clipAntimeridianLine, clipAntimeridianInterpolate, [-pi4, -halfPi3]);
function clipAntimeridianLine(stream) {
  var lambda04 = NaN, phi02 = NaN, sign0 = NaN, clean;
  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda12, phi12) {
      var sign1 = lambda12 > 0 ? pi4 : -pi4, delta = abs3(lambda12 - lambda04);
      if (abs3(delta - pi4) < epsilon6) {
        stream.point(lambda04, phi02 = (phi02 + phi12) / 2 > 0 ? halfPi3 : -halfPi3);
        stream.point(sign0, phi02);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi02);
        stream.point(lambda12, phi02);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= pi4) {
        if (abs3(lambda04 - sign0) < epsilon6)
          lambda04 -= sign0 * epsilon6;
        if (abs3(lambda12 - sign1) < epsilon6)
          lambda12 -= sign1 * epsilon6;
        phi02 = clipAntimeridianIntersect(lambda04, phi02, lambda12, phi12);
        stream.point(sign0, phi02);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi02);
        clean = 0;
      }
      stream.point(lambda04 = lambda12, phi02 = phi12);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda04 = phi02 = NaN;
    },
    clean: function() {
      return 2 - clean;
    }
  };
}
function clipAntimeridianIntersect(lambda04, phi02, lambda12, phi12) {
  var cosPhi03, cosPhi1, sinLambda0Lambda1 = sin2(lambda04 - lambda12);
  return abs3(sinLambda0Lambda1) > epsilon6 ? atan((sin2(phi02) * (cosPhi1 = cos2(phi12)) * sin2(lambda12) - sin2(phi12) * (cosPhi03 = cos2(phi02)) * sin2(lambda04)) / (cosPhi03 * cosPhi1 * sinLambda0Lambda1)) : (phi02 + phi12) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi2;
  if (from == null) {
    phi2 = direction * halfPi3;
    stream.point(-pi4, phi2);
    stream.point(0, phi2);
    stream.point(pi4, phi2);
    stream.point(pi4, 0);
    stream.point(pi4, -phi2);
    stream.point(0, -phi2);
    stream.point(-pi4, -phi2);
    stream.point(-pi4, 0);
    stream.point(-pi4, phi2);
  } else if (abs3(from[0] - to[0]) > epsilon6) {
    var lambda = from[0] < to[0] ? pi4 : -pi4;
    phi2 = direction * lambda / 2;
    stream.point(-lambda, phi2);
    stream.point(0, phi2);
    stream.point(lambda, phi2);
  } else {
    stream.point(to[0], to[1]);
  }
}

// node_modules/d3-geo/src/clip/circle.js
function circle_default2(radius) {
  var cr = cos2(radius), delta = 6 * radians2, smallRadius = cr > 0, notHemisphere = abs3(cr) > epsilon6;
  function interpolate(from, to, direction, stream) {
    circleStream(stream, radius, delta, direction, from, to);
  }
  function visible(lambda, phi2) {
    return cos2(lambda) * cos2(phi2) > cr;
  }
  function clipLine(stream) {
    var point0, c0, v0, v00, clean;
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi2) {
        var point1 = [lambda, phi2], point22, v3 = visible(lambda, phi2), c8 = smallRadius ? v3 ? 0 : code(lambda, phi2) : v3 ? code(lambda + (lambda < 0 ? pi4 : -pi4), phi2) : 0;
        if (!point0 && (v00 = v0 = v3))
          stream.lineStart();
        if (v3 !== v0) {
          point22 = intersect2(point0, point1);
          if (!point22 || pointEqual_default(point0, point22) || pointEqual_default(point1, point22))
            point1[2] = 1;
        }
        if (v3 !== v0) {
          clean = 0;
          if (v3) {
            stream.lineStart();
            point22 = intersect2(point1, point0);
            stream.point(point22[0], point22[1]);
          } else {
            point22 = intersect2(point0, point1);
            stream.point(point22[0], point22[1], 2);
            stream.lineEnd();
          }
          point0 = point22;
        } else if (notHemisphere && point0 && smallRadius ^ v3) {
          var t4;
          if (!(c8 & c0) && (t4 = intersect2(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t4[0][0], t4[0][1]);
              stream.point(t4[1][0], t4[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t4[1][0], t4[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t4[0][0], t4[0][1], 3);
            }
          }
        }
        if (v3 && (!point0 || !pointEqual_default(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v3, c0 = c8;
      },
      lineEnd: function() {
        if (v0)
          stream.lineEnd();
        point0 = null;
      },
      clean: function() {
        return clean | (v00 && v0) << 1;
      }
    };
  }
  function intersect2(a6, b10, two) {
    var pa = cartesian(a6), pb = cartesian(b10);
    var n1 = [1, 0, 0], n2 = cartesianCross(pa, pb), n2n2 = cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
    if (!determinant)
      return !two && a6;
    var c1 = cr * n2n2 / determinant, c22 = -cr * n1n2 / determinant, n1xn2 = cartesianCross(n1, n2), A5 = cartesianScale(n1, c1), B3 = cartesianScale(n2, c22);
    cartesianAddInPlace(A5, B3);
    var u4 = n1xn2, w3 = cartesianDot(A5, u4), uu = cartesianDot(u4, u4), t23 = w3 * w3 - uu * (cartesianDot(A5, A5) - 1);
    if (t23 < 0)
      return;
    var t4 = sqrt(t23), q = cartesianScale(u4, (-w3 - t4) / uu);
    cartesianAddInPlace(q, A5);
    q = spherical(q);
    if (!two)
      return q;
    var lambda04 = a6[0], lambda12 = b10[0], phi02 = a6[1], phi12 = b10[1], z2;
    if (lambda12 < lambda04)
      z2 = lambda04, lambda04 = lambda12, lambda12 = z2;
    var delta2 = lambda12 - lambda04, polar = abs3(delta2 - pi4) < epsilon6, meridian = polar || delta2 < epsilon6;
    if (!polar && phi12 < phi02)
      z2 = phi02, phi02 = phi12, phi12 = z2;
    if (meridian ? polar ? phi02 + phi12 > 0 ^ q[1] < (abs3(q[0] - lambda04) < epsilon6 ? phi02 : phi12) : phi02 <= q[1] && q[1] <= phi12 : delta2 > pi4 ^ (lambda04 <= q[0] && q[0] <= lambda12)) {
      var q1 = cartesianScale(u4, (-w3 + t4) / uu);
      cartesianAddInPlace(q1, A5);
      return [q, spherical(q1)];
    }
  }
  function code(lambda, phi2) {
    var r4 = smallRadius ? radius : pi4 - radius, code2 = 0;
    if (lambda < -r4)
      code2 |= 1;
    else if (lambda > r4)
      code2 |= 2;
    if (phi2 < -r4)
      code2 |= 4;
    else if (phi2 > r4)
      code2 |= 8;
    return code2;
  }
  return clip_default(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi4, radius - pi4]);
}

// node_modules/d3-geo/src/clip/line.js
function line_default(a6, b10, x06, y06, x12, y12) {
  var ax = a6[0], ay = a6[1], bx = b10[0], by = b10[1], t03 = 0, t13 = 1, dx = bx - ax, dy = by - ay, r4;
  r4 = x06 - ax;
  if (!dx && r4 > 0)
    return;
  r4 /= dx;
  if (dx < 0) {
    if (r4 < t03)
      return;
    if (r4 < t13)
      t13 = r4;
  } else if (dx > 0) {
    if (r4 > t13)
      return;
    if (r4 > t03)
      t03 = r4;
  }
  r4 = x12 - ax;
  if (!dx && r4 < 0)
    return;
  r4 /= dx;
  if (dx < 0) {
    if (r4 > t13)
      return;
    if (r4 > t03)
      t03 = r4;
  } else if (dx > 0) {
    if (r4 < t03)
      return;
    if (r4 < t13)
      t13 = r4;
  }
  r4 = y06 - ay;
  if (!dy && r4 > 0)
    return;
  r4 /= dy;
  if (dy < 0) {
    if (r4 < t03)
      return;
    if (r4 < t13)
      t13 = r4;
  } else if (dy > 0) {
    if (r4 > t13)
      return;
    if (r4 > t03)
      t03 = r4;
  }
  r4 = y12 - ay;
  if (!dy && r4 < 0)
    return;
  r4 /= dy;
  if (dy < 0) {
    if (r4 > t13)
      return;
    if (r4 > t03)
      t03 = r4;
  } else if (dy > 0) {
    if (r4 < t03)
      return;
    if (r4 < t13)
      t13 = r4;
  }
  if (t03 > 0)
    a6[0] = ax + t03 * dx, a6[1] = ay + t03 * dy;
  if (t13 < 1)
    b10[0] = ax + t13 * dx, b10[1] = ay + t13 * dy;
  return true;
}

// node_modules/d3-geo/src/clip/rectangle.js
var clipMax = 1e9;
var clipMin = -clipMax;
function clipRectangle(x06, y06, x12, y12) {
  function visible(x6, y7) {
    return x06 <= x6 && x6 <= x12 && y06 <= y7 && y7 <= y12;
  }
  function interpolate(from, to, direction, stream) {
    var a6 = 0, a1 = 0;
    if (from == null || (a6 = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
      do
        stream.point(a6 === 0 || a6 === 3 ? x06 : x12, a6 > 1 ? y12 : y06);
      while ((a6 = (a6 + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }
  function corner(p3, direction) {
    return abs3(p3[0] - x06) < epsilon6 ? direction > 0 ? 0 : 3 : abs3(p3[0] - x12) < epsilon6 ? direction > 0 ? 2 : 1 : abs3(p3[1] - y06) < epsilon6 ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
  }
  function compareIntersection2(a6, b10) {
    return comparePoint(a6.x, b10.x);
  }
  function comparePoint(a6, b10) {
    var ca = corner(a6, 1), cb = corner(b10, 1);
    return ca !== cb ? ca - cb : ca === 0 ? b10[1] - a6[1] : ca === 1 ? a6[0] - b10[0] : ca === 2 ? a6[1] - b10[1] : b10[0] - a6[0];
  }
  return function(stream) {
    var activeStream = stream, bufferStream = buffer_default2(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean;
    var clipStream = {
      point: point6,
      lineStart,
      lineEnd,
      polygonStart,
      polygonEnd
    };
    function point6(x6, y7) {
      if (visible(x6, y7))
        activeStream.point(x6, y7);
    }
    function polygonInside() {
      var winding = 0;
      for (var i4 = 0, n2 = polygon.length; i4 < n2; ++i4) {
        for (var ring2 = polygon[i4], j3 = 1, m4 = ring2.length, point7 = ring2[0], a0, a1, b02 = point7[0], b12 = point7[1]; j3 < m4; ++j3) {
          a0 = b02, a1 = b12, point7 = ring2[j3], b02 = point7[0], b12 = point7[1];
          if (a1 <= y12) {
            if (b12 > y12 && (b02 - a0) * (y12 - a1) > (b12 - a1) * (x06 - a0))
              ++winding;
          } else {
            if (b12 <= y12 && (b02 - a0) * (y12 - a1) < (b12 - a1) * (x06 - a0))
              --winding;
          }
        }
      }
      return winding;
    }
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }
    function polygonEnd() {
      var startInside = polygonInside(), cleanInside = clean && startInside, visible2 = (segments = merge(segments)).length;
      if (cleanInside || visible2) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible2) {
          rejoin_default(segments, compareIntersection2, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }
    function lineStart() {
      clipStream.point = linePoint2;
      if (polygon)
        polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }
    function lineEnd() {
      if (segments) {
        linePoint2(x__, y__);
        if (v__ && v_)
          bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point6;
      if (v_)
        activeStream.lineEnd();
    }
    function linePoint2(x6, y7) {
      var v3 = visible(x6, y7);
      if (polygon)
        ring.push([x6, y7]);
      if (first) {
        x__ = x6, y__ = y7, v__ = v3;
        first = false;
        if (v3) {
          activeStream.lineStart();
          activeStream.point(x6, y7);
        }
      } else {
        if (v3 && v_)
          activeStream.point(x6, y7);
        else {
          var a6 = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))], b10 = [x6 = Math.max(clipMin, Math.min(clipMax, x6)), y7 = Math.max(clipMin, Math.min(clipMax, y7))];
          if (line_default(a6, b10, x06, y06, x12, y12)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a6[0], a6[1]);
            }
            activeStream.point(b10[0], b10[1]);
            if (!v3)
              activeStream.lineEnd();
            clean = false;
          } else if (v3) {
            activeStream.lineStart();
            activeStream.point(x6, y7);
            clean = false;
          }
        }
      }
      x_ = x6, y_ = y7, v_ = v3;
    }
    return clipStream;
  };
}

// node_modules/d3-geo/src/clip/extent.js
function extent_default3() {
  var x06 = 0, y06 = 0, x12 = 960, y12 = 500, cache, cacheStream, clip;
  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = clipRectangle(x06, y06, x12, y12)(cacheStream = stream);
    },
    extent: function(_2) {
      return arguments.length ? (x06 = +_2[0][0], y06 = +_2[0][1], x12 = +_2[1][0], y12 = +_2[1][1], cache = cacheStream = null, clip) : [[x06, y06], [x12, y12]];
    }
  };
}

// node_modules/d3-geo/src/length.js
var lengthSum;
var lambda03;
var sinPhi02;
var cosPhi02;
var lengthStream = {
  sphere: noop2,
  point: noop2,
  lineStart: lengthLineStart,
  lineEnd: noop2,
  polygonStart: noop2,
  polygonEnd: noop2
};
function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}
function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = noop2;
}
function lengthPointFirst(lambda, phi2) {
  lambda *= radians2, phi2 *= radians2;
  lambda03 = lambda, sinPhi02 = sin2(phi2), cosPhi02 = cos2(phi2);
  lengthStream.point = lengthPoint;
}
function lengthPoint(lambda, phi2) {
  lambda *= radians2, phi2 *= radians2;
  var sinPhi = sin2(phi2), cosPhi = cos2(phi2), delta = abs3(lambda - lambda03), cosDelta = cos2(delta), sinDelta = sin2(delta), x6 = cosPhi * sinDelta, y7 = cosPhi02 * sinPhi - sinPhi02 * cosPhi * cosDelta, z2 = sinPhi02 * sinPhi + cosPhi02 * cosPhi * cosDelta;
  lengthSum.add(atan2(sqrt(x6 * x6 + y7 * y7), z2));
  lambda03 = lambda, sinPhi02 = sinPhi, cosPhi02 = cosPhi;
}
function length_default(object2) {
  lengthSum = new Adder();
  stream_default(object2, lengthStream);
  return +lengthSum;
}

// node_modules/d3-geo/src/distance.js
var coordinates = [null, null];
var object = { type: "LineString", coordinates };
function distance_default(a6, b10) {
  coordinates[0] = a6;
  coordinates[1] = b10;
  return length_default(object);
}

// node_modules/d3-geo/src/contains.js
var containsObjectType = {
  Feature: function(object2, point6) {
    return containsGeometry(object2.geometry, point6);
  },
  FeatureCollection: function(object2, point6) {
    var features = object2.features, i4 = -1, n2 = features.length;
    while (++i4 < n2)
      if (containsGeometry(features[i4].geometry, point6))
        return true;
    return false;
  }
};
var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object2, point6) {
    return containsPoint(object2.coordinates, point6);
  },
  MultiPoint: function(object2, point6) {
    var coordinates2 = object2.coordinates, i4 = -1, n2 = coordinates2.length;
    while (++i4 < n2)
      if (containsPoint(coordinates2[i4], point6))
        return true;
    return false;
  },
  LineString: function(object2, point6) {
    return containsLine(object2.coordinates, point6);
  },
  MultiLineString: function(object2, point6) {
    var coordinates2 = object2.coordinates, i4 = -1, n2 = coordinates2.length;
    while (++i4 < n2)
      if (containsLine(coordinates2[i4], point6))
        return true;
    return false;
  },
  Polygon: function(object2, point6) {
    return containsPolygon(object2.coordinates, point6);
  },
  MultiPolygon: function(object2, point6) {
    var coordinates2 = object2.coordinates, i4 = -1, n2 = coordinates2.length;
    while (++i4 < n2)
      if (containsPolygon(coordinates2[i4], point6))
        return true;
    return false;
  },
  GeometryCollection: function(object2, point6) {
    var geometries = object2.geometries, i4 = -1, n2 = geometries.length;
    while (++i4 < n2)
      if (containsGeometry(geometries[i4], point6))
        return true;
    return false;
  }
};
function containsGeometry(geometry, point6) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type) ? containsGeometryType[geometry.type](geometry, point6) : false;
}
function containsPoint(coordinates2, point6) {
  return distance_default(coordinates2, point6) === 0;
}
function containsLine(coordinates2, point6) {
  var ao, bo, ab;
  for (var i4 = 0, n2 = coordinates2.length; i4 < n2; i4++) {
    bo = distance_default(coordinates2[i4], point6);
    if (bo === 0)
      return true;
    if (i4 > 0) {
      ab = distance_default(coordinates2[i4], coordinates2[i4 - 1]);
      if (ab > 0 && ao <= ab && bo <= ab && (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < epsilon22 * ab)
        return true;
    }
    ao = bo;
  }
  return false;
}
function containsPolygon(coordinates2, point6) {
  return !!polygonContains_default(coordinates2.map(ringRadians), pointRadians(point6));
}
function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}
function pointRadians(point6) {
  return [point6[0] * radians2, point6[1] * radians2];
}
function contains_default2(object2, point6) {
  return (object2 && containsObjectType.hasOwnProperty(object2.type) ? containsObjectType[object2.type] : containsGeometry)(object2, point6);
}

// node_modules/d3-geo/src/graticule.js
function graticuleX(y06, y12, dy) {
  var y7 = range_default(y06, y12 - epsilon6, dy).concat(y12);
  return function(x6) {
    return y7.map(function(y8) {
      return [x6, y8];
    });
  };
}
function graticuleY(x06, x12, dx) {
  var x6 = range_default(x06, x12 - epsilon6, dx).concat(x12);
  return function(y7) {
    return x6.map(function(x7) {
      return [x7, y7];
    });
  };
}
function graticule() {
  var x12, x06, X13, X03, y12, y06, Y13, Y03, dx = 10, dy = dx, DX = 90, DY = 360, x6, y7, X3, Y3, precision = 2.5;
  function graticule2() {
    return { type: "MultiLineString", coordinates: lines() };
  }
  function lines() {
    return range_default(ceil(X03 / DX) * DX, X13, DX).map(X3).concat(range_default(ceil(Y03 / DY) * DY, Y13, DY).map(Y3)).concat(range_default(ceil(x06 / dx) * dx, x12, dx).filter(function(x7) {
      return abs3(x7 % DX) > epsilon6;
    }).map(x6)).concat(range_default(ceil(y06 / dy) * dy, y12, dy).filter(function(y8) {
      return abs3(y8 % DY) > epsilon6;
    }).map(y7));
  }
  graticule2.lines = function() {
    return lines().map(function(coordinates2) {
      return { type: "LineString", coordinates: coordinates2 };
    });
  };
  graticule2.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X3(X03).concat(Y3(Y13).slice(1), X3(X13).reverse().slice(1), Y3(Y03).reverse().slice(1))
      ]
    };
  };
  graticule2.extent = function(_2) {
    if (!arguments.length)
      return graticule2.extentMinor();
    return graticule2.extentMajor(_2).extentMinor(_2);
  };
  graticule2.extentMajor = function(_2) {
    if (!arguments.length)
      return [[X03, Y03], [X13, Y13]];
    X03 = +_2[0][0], X13 = +_2[1][0];
    Y03 = +_2[0][1], Y13 = +_2[1][1];
    if (X03 > X13)
      _2 = X03, X03 = X13, X13 = _2;
    if (Y03 > Y13)
      _2 = Y03, Y03 = Y13, Y13 = _2;
    return graticule2.precision(precision);
  };
  graticule2.extentMinor = function(_2) {
    if (!arguments.length)
      return [[x06, y06], [x12, y12]];
    x06 = +_2[0][0], x12 = +_2[1][0];
    y06 = +_2[0][1], y12 = +_2[1][1];
    if (x06 > x12)
      _2 = x06, x06 = x12, x12 = _2;
    if (y06 > y12)
      _2 = y06, y06 = y12, y12 = _2;
    return graticule2.precision(precision);
  };
  graticule2.step = function(_2) {
    if (!arguments.length)
      return graticule2.stepMinor();
    return graticule2.stepMajor(_2).stepMinor(_2);
  };
  graticule2.stepMajor = function(_2) {
    if (!arguments.length)
      return [DX, DY];
    DX = +_2[0], DY = +_2[1];
    return graticule2;
  };
  graticule2.stepMinor = function(_2) {
    if (!arguments.length)
      return [dx, dy];
    dx = +_2[0], dy = +_2[1];
    return graticule2;
  };
  graticule2.precision = function(_2) {
    if (!arguments.length)
      return precision;
    precision = +_2;
    x6 = graticuleX(y06, y12, 90);
    y7 = graticuleY(x06, x12, precision);
    X3 = graticuleX(Y03, Y13, 90);
    Y3 = graticuleY(X03, X13, precision);
    return graticule2;
  };
  return graticule2.extentMajor([[-180, -90 + epsilon6], [180, 90 - epsilon6]]).extentMinor([[-180, -80 - epsilon6], [180, 80 + epsilon6]]);
}
function graticule10() {
  return graticule()();
}

// node_modules/d3-geo/src/interpolate.js
function interpolate_default2(a6, b10) {
  var x06 = a6[0] * radians2, y06 = a6[1] * radians2, x12 = b10[0] * radians2, y12 = b10[1] * radians2, cy0 = cos2(y06), sy0 = sin2(y06), cy1 = cos2(y12), sy1 = sin2(y12), kx0 = cy0 * cos2(x06), ky0 = cy0 * sin2(x06), kx1 = cy1 * cos2(x12), ky1 = cy1 * sin2(x12), d4 = 2 * asin(sqrt(haversin(y12 - y06) + cy0 * cy1 * haversin(x12 - x06))), k4 = sin2(d4);
  var interpolate = d4 ? function(t4) {
    var B3 = sin2(t4 *= d4) / k4, A5 = sin2(d4 - t4) / k4, x6 = A5 * kx0 + B3 * kx1, y7 = A5 * ky0 + B3 * ky1, z2 = A5 * sy0 + B3 * sy1;
    return [
      atan2(y7, x6) * degrees3,
      atan2(z2, sqrt(x6 * x6 + y7 * y7)) * degrees3
    ];
  } : function() {
    return [x06 * degrees3, y06 * degrees3];
  };
  interpolate.distance = d4;
  return interpolate;
}

// node_modules/d3-geo/src/identity.js
var identity_default4 = (x6) => x6;

// node_modules/d3-geo/src/path/area.js
var areaSum2 = new Adder();
var areaRingSum2 = new Adder();
var x00;
var y00;
var x02;
var y02;
var areaStream2 = {
  point: noop2,
  lineStart: noop2,
  lineEnd: noop2,
  polygonStart: function() {
    areaStream2.lineStart = areaRingStart2;
    areaStream2.lineEnd = areaRingEnd2;
  },
  polygonEnd: function() {
    areaStream2.lineStart = areaStream2.lineEnd = areaStream2.point = noop2;
    areaSum2.add(abs3(areaRingSum2));
    areaRingSum2 = new Adder();
  },
  result: function() {
    var area = areaSum2 / 2;
    areaSum2 = new Adder();
    return area;
  }
};
function areaRingStart2() {
  areaStream2.point = areaPointFirst2;
}
function areaPointFirst2(x6, y7) {
  areaStream2.point = areaPoint2;
  x00 = x02 = x6, y00 = y02 = y7;
}
function areaPoint2(x6, y7) {
  areaRingSum2.add(y02 * x6 - x02 * y7);
  x02 = x6, y02 = y7;
}
function areaRingEnd2() {
  areaPoint2(x00, y00);
}
var area_default3 = areaStream2;

// node_modules/d3-geo/src/path/bounds.js
var x03 = Infinity;
var y03 = x03;
var x1 = -x03;
var y1 = x1;
var boundsStream2 = {
  point: boundsPoint2,
  lineStart: noop2,
  lineEnd: noop2,
  polygonStart: noop2,
  polygonEnd: noop2,
  result: function() {
    var bounds = [[x03, y03], [x1, y1]];
    x1 = y1 = -(y03 = x03 = Infinity);
    return bounds;
  }
};
function boundsPoint2(x6, y7) {
  if (x6 < x03)
    x03 = x6;
  if (x6 > x1)
    x1 = x6;
  if (y7 < y03)
    y03 = y7;
  if (y7 > y1)
    y1 = y7;
}
var bounds_default2 = boundsStream2;

// node_modules/d3-geo/src/path/centroid.js
var X02 = 0;
var Y02 = 0;
var Z02 = 0;
var X12 = 0;
var Y12 = 0;
var Z12 = 0;
var X22 = 0;
var Y22 = 0;
var Z22 = 0;
var x002;
var y002;
var x04;
var y04;
var centroidStream2 = {
  point: centroidPoint2,
  lineStart: centroidLineStart2,
  lineEnd: centroidLineEnd2,
  polygonStart: function() {
    centroidStream2.lineStart = centroidRingStart2;
    centroidStream2.lineEnd = centroidRingEnd2;
  },
  polygonEnd: function() {
    centroidStream2.point = centroidPoint2;
    centroidStream2.lineStart = centroidLineStart2;
    centroidStream2.lineEnd = centroidLineEnd2;
  },
  result: function() {
    var centroid = Z22 ? [X22 / Z22, Y22 / Z22] : Z12 ? [X12 / Z12, Y12 / Z12] : Z02 ? [X02 / Z02, Y02 / Z02] : [NaN, NaN];
    X02 = Y02 = Z02 = X12 = Y12 = Z12 = X22 = Y22 = Z22 = 0;
    return centroid;
  }
};
function centroidPoint2(x6, y7) {
  X02 += x6;
  Y02 += y7;
  ++Z02;
}
function centroidLineStart2() {
  centroidStream2.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x6, y7) {
  centroidStream2.point = centroidPointLine;
  centroidPoint2(x04 = x6, y04 = y7);
}
function centroidPointLine(x6, y7) {
  var dx = x6 - x04, dy = y7 - y04, z2 = sqrt(dx * dx + dy * dy);
  X12 += z2 * (x04 + x6) / 2;
  Y12 += z2 * (y04 + y7) / 2;
  Z12 += z2;
  centroidPoint2(x04 = x6, y04 = y7);
}
function centroidLineEnd2() {
  centroidStream2.point = centroidPoint2;
}
function centroidRingStart2() {
  centroidStream2.point = centroidPointFirstRing;
}
function centroidRingEnd2() {
  centroidPointRing(x002, y002);
}
function centroidPointFirstRing(x6, y7) {
  centroidStream2.point = centroidPointRing;
  centroidPoint2(x002 = x04 = x6, y002 = y04 = y7);
}
function centroidPointRing(x6, y7) {
  var dx = x6 - x04, dy = y7 - y04, z2 = sqrt(dx * dx + dy * dy);
  X12 += z2 * (x04 + x6) / 2;
  Y12 += z2 * (y04 + y7) / 2;
  Z12 += z2;
  z2 = y04 * x6 - x04 * y7;
  X22 += z2 * (x04 + x6);
  Y22 += z2 * (y04 + y7);
  Z22 += z2 * 3;
  centroidPoint2(x04 = x6, y04 = y7);
}
var centroid_default2 = centroidStream2;

// node_modules/d3-geo/src/path/context.js
function PathContext(context) {
  this._context = context;
}
PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_2) {
    return this._radius = _2, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0)
      this._context.closePath();
    this._point = NaN;
  },
  point: function(x6, y7) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x6, y7);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x6, y7);
        break;
      }
      default: {
        this._context.moveTo(x6 + this._radius, y7);
        this._context.arc(x6, y7, this._radius, 0, tau5);
        break;
      }
    }
  },
  result: noop2
};

// node_modules/d3-geo/src/path/measure.js
var lengthSum2 = new Adder();
var lengthRing;
var x003;
var y003;
var x05;
var y05;
var lengthStream2 = {
  point: noop2,
  lineStart: function() {
    lengthStream2.point = lengthPointFirst2;
  },
  lineEnd: function() {
    if (lengthRing)
      lengthPoint2(x003, y003);
    lengthStream2.point = noop2;
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length3 = +lengthSum2;
    lengthSum2 = new Adder();
    return length3;
  }
};
function lengthPointFirst2(x6, y7) {
  lengthStream2.point = lengthPoint2;
  x003 = x05 = x6, y003 = y05 = y7;
}
function lengthPoint2(x6, y7) {
  x05 -= x6, y05 -= y7;
  lengthSum2.add(sqrt(x05 * x05 + y05 * y05));
  x05 = x6, y05 = y7;
}
var measure_default = lengthStream2;

// node_modules/d3-geo/src/path/string.js
function PathString() {
  this._string = [];
}
PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function(_2) {
    if ((_2 = +_2) !== this._radius)
      this._radius = _2, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0)
      this._string.push("Z");
    this._point = NaN;
  },
  point: function(x6, y7) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x6, ",", y7);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x6, ",", y7);
        break;
      }
      default: {
        if (this._circle == null)
          this._circle = circle(this._radius);
        this._string.push("M", x6, ",", y7, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};
function circle(radius) {
  return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
}

// node_modules/d3-geo/src/path/index.js
function path_default2(projection2, context) {
  var pointRadius = 4.5, projectionStream, contextStream;
  function path2(object2) {
    if (object2) {
      if (typeof pointRadius === "function")
        contextStream.pointRadius(+pointRadius.apply(this, arguments));
      stream_default(object2, projectionStream(contextStream));
    }
    return contextStream.result();
  }
  path2.area = function(object2) {
    stream_default(object2, projectionStream(area_default3));
    return area_default3.result();
  };
  path2.measure = function(object2) {
    stream_default(object2, projectionStream(measure_default));
    return measure_default.result();
  };
  path2.bounds = function(object2) {
    stream_default(object2, projectionStream(bounds_default2));
    return bounds_default2.result();
  };
  path2.centroid = function(object2) {
    stream_default(object2, projectionStream(centroid_default2));
    return centroid_default2.result();
  };
  path2.projection = function(_2) {
    return arguments.length ? (projectionStream = _2 == null ? (projection2 = null, identity_default4) : (projection2 = _2).stream, path2) : projection2;
  };
  path2.context = function(_2) {
    if (!arguments.length)
      return context;
    contextStream = _2 == null ? (context = null, new PathString()) : new PathContext(context = _2);
    if (typeof pointRadius !== "function")
      contextStream.pointRadius(pointRadius);
    return path2;
  };
  path2.pointRadius = function(_2) {
    if (!arguments.length)
      return pointRadius;
    pointRadius = typeof _2 === "function" ? _2 : (contextStream.pointRadius(+_2), +_2);
    return path2;
  };
  return path2.projection(projection2).context(context);
}

// node_modules/d3-geo/src/transform.js
function transform_default(methods) {
  return {
    stream: transformer(methods)
  };
}
function transformer(methods) {
  return function(stream) {
    var s5 = new TransformStream();
    for (var key in methods)
      s5[key] = methods[key];
    s5.stream = stream;
    return s5;
  };
}
function TransformStream() {
}
TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x6, y7) {
    this.stream.point(x6, y7);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};

// node_modules/d3-geo/src/projection/fit.js
function fit(projection2, fitBounds, object2) {
  var clip = projection2.clipExtent && projection2.clipExtent();
  projection2.scale(150).translate([0, 0]);
  if (clip != null)
    projection2.clipExtent(null);
  stream_default(object2, projection2.stream(bounds_default2));
  fitBounds(bounds_default2.result());
  if (clip != null)
    projection2.clipExtent(clip);
  return projection2;
}
function fitExtent(projection2, extent, object2) {
  return fit(projection2, function(b10) {
    var w3 = extent[1][0] - extent[0][0], h3 = extent[1][1] - extent[0][1], k4 = Math.min(w3 / (b10[1][0] - b10[0][0]), h3 / (b10[1][1] - b10[0][1])), x6 = +extent[0][0] + (w3 - k4 * (b10[1][0] + b10[0][0])) / 2, y7 = +extent[0][1] + (h3 - k4 * (b10[1][1] + b10[0][1])) / 2;
    projection2.scale(150 * k4).translate([x6, y7]);
  }, object2);
}
function fitSize(projection2, size, object2) {
  return fitExtent(projection2, [[0, 0], size], object2);
}
function fitWidth(projection2, width, object2) {
  return fit(projection2, function(b10) {
    var w3 = +width, k4 = w3 / (b10[1][0] - b10[0][0]), x6 = (w3 - k4 * (b10[1][0] + b10[0][0])) / 2, y7 = -k4 * b10[0][1];
    projection2.scale(150 * k4).translate([x6, y7]);
  }, object2);
}
function fitHeight(projection2, height, object2) {
  return fit(projection2, function(b10) {
    var h3 = +height, k4 = h3 / (b10[1][1] - b10[0][1]), x6 = -k4 * b10[0][0], y7 = (h3 - k4 * (b10[1][1] + b10[0][1])) / 2;
    projection2.scale(150 * k4).translate([x6, y7]);
  }, object2);
}

// node_modules/d3-geo/src/projection/resample.js
var maxDepth = 16;
var cosMinDistance = cos2(30 * radians2);
function resample_default(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
}
function resampleNone(project) {
  return transformer({
    point: function(x6, y7) {
      x6 = project(x6, y7);
      this.stream.point(x6[0], x6[1]);
    }
  });
}
function resample(project, delta2) {
  function resampleLineTo(x06, y06, lambda04, a0, b02, c0, x12, y12, lambda12, a1, b12, c1, depth, stream) {
    var dx = x12 - x06, dy = y12 - y06, d22 = dx * dx + dy * dy;
    if (d22 > 4 * delta2 && depth--) {
      var a6 = a0 + a1, b10 = b02 + b12, c8 = c0 + c1, m4 = sqrt(a6 * a6 + b10 * b10 + c8 * c8), phi2 = asin(c8 /= m4), lambda22 = abs3(abs3(c8) - 1) < epsilon6 || abs3(lambda04 - lambda12) < epsilon6 ? (lambda04 + lambda12) / 2 : atan2(b10, a6), p3 = project(lambda22, phi2), x22 = p3[0], y22 = p3[1], dx2 = x22 - x06, dy2 = y22 - y06, dz = dy * dx2 - dx * dy2;
      if (dz * dz / d22 > delta2 || abs3((dx * dx2 + dy * dy2) / d22 - 0.5) > 0.3 || a0 * a1 + b02 * b12 + c0 * c1 < cosMinDistance) {
        resampleLineTo(x06, y06, lambda04, a0, b02, c0, x22, y22, lambda22, a6 /= m4, b10 /= m4, c8, depth, stream);
        stream.point(x22, y22);
        resampleLineTo(x22, y22, lambda22, a6, b10, c8, x12, y12, lambda12, a1, b12, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda004, x004, y004, a00, b00, c00, lambda04, x06, y06, a0, b02, c0;
    var resampleStream = {
      point: point6,
      lineStart,
      lineEnd,
      polygonStart: function() {
        stream.polygonStart();
        resampleStream.lineStart = ringStart;
      },
      polygonEnd: function() {
        stream.polygonEnd();
        resampleStream.lineStart = lineStart;
      }
    };
    function point6(x6, y7) {
      x6 = project(x6, y7);
      stream.point(x6[0], x6[1]);
    }
    function lineStart() {
      x06 = NaN;
      resampleStream.point = linePoint2;
      stream.lineStart();
    }
    function linePoint2(lambda, phi2) {
      var c8 = cartesian([lambda, phi2]), p3 = project(lambda, phi2);
      resampleLineTo(x06, y06, lambda04, a0, b02, c0, x06 = p3[0], y06 = p3[1], lambda04 = lambda, a0 = c8[0], b02 = c8[1], c0 = c8[2], maxDepth, stream);
      stream.point(x06, y06);
    }
    function lineEnd() {
      resampleStream.point = point6;
      stream.lineEnd();
    }
    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }
    function ringPoint(lambda, phi2) {
      linePoint2(lambda004 = lambda, phi2), x004 = x06, y004 = y06, a00 = a0, b00 = b02, c00 = c0;
      resampleStream.point = linePoint2;
    }
    function ringEnd() {
      resampleLineTo(x06, y06, lambda04, a0, b02, c0, x004, y004, lambda004, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }
    return resampleStream;
  };
}

// node_modules/d3-geo/src/projection/index.js
var transformRadians = transformer({
  point: function(x6, y7) {
    this.stream.point(x6 * radians2, y7 * radians2);
  }
});
function transformRotate(rotate) {
  return transformer({
    point: function(x6, y7) {
      var r4 = rotate(x6, y7);
      return this.stream.point(r4[0], r4[1]);
    }
  });
}
function scaleTranslate(k4, dx, dy, sx, sy) {
  function transform2(x6, y7) {
    x6 *= sx;
    y7 *= sy;
    return [dx + k4 * x6, dy - k4 * y7];
  }
  transform2.invert = function(x6, y7) {
    return [(x6 - dx) / k4 * sx, (dy - y7) / k4 * sy];
  };
  return transform2;
}
function scaleTranslateRotate(k4, dx, dy, sx, sy, alpha) {
  if (!alpha)
    return scaleTranslate(k4, dx, dy, sx, sy);
  var cosAlpha = cos2(alpha), sinAlpha = sin2(alpha), a6 = cosAlpha * k4, b10 = sinAlpha * k4, ai = cosAlpha / k4, bi = sinAlpha / k4, ci = (sinAlpha * dy - cosAlpha * dx) / k4, fi = (sinAlpha * dx + cosAlpha * dy) / k4;
  function transform2(x6, y7) {
    x6 *= sx;
    y7 *= sy;
    return [a6 * x6 - b10 * y7 + dx, dy - b10 * x6 - a6 * y7];
  }
  transform2.invert = function(x6, y7) {
    return [sx * (ai * x6 - bi * y7 + ci), sy * (fi - bi * x6 - ai * y7)];
  };
  return transform2;
}
function projection(project) {
  return projectionMutator(function() {
    return project;
  })();
}
function projectionMutator(projectAt) {
  var project, k4 = 150, x6 = 480, y7 = 250, lambda = 0, phi2 = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = antimeridian_default, x06 = null, y06, x12, y12, postclip = identity_default4, delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
  function projection2(point6) {
    return projectRotateTransform(point6[0] * radians2, point6[1] * radians2);
  }
  function invert(point6) {
    point6 = projectRotateTransform.invert(point6[0], point6[1]);
    return point6 && [point6[0] * degrees3, point6[1] * degrees3];
  }
  projection2.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };
  projection2.preclip = function(_2) {
    return arguments.length ? (preclip = _2, theta = void 0, reset()) : preclip;
  };
  projection2.postclip = function(_2) {
    return arguments.length ? (postclip = _2, x06 = y06 = x12 = y12 = null, reset()) : postclip;
  };
  projection2.clipAngle = function(_2) {
    return arguments.length ? (preclip = +_2 ? circle_default2(theta = _2 * radians2) : (theta = null, antimeridian_default), reset()) : theta * degrees3;
  };
  projection2.clipExtent = function(_2) {
    return arguments.length ? (postclip = _2 == null ? (x06 = y06 = x12 = y12 = null, identity_default4) : clipRectangle(x06 = +_2[0][0], y06 = +_2[0][1], x12 = +_2[1][0], y12 = +_2[1][1]), reset()) : x06 == null ? null : [[x06, y06], [x12, y12]];
  };
  projection2.scale = function(_2) {
    return arguments.length ? (k4 = +_2, recenter()) : k4;
  };
  projection2.translate = function(_2) {
    return arguments.length ? (x6 = +_2[0], y7 = +_2[1], recenter()) : [x6, y7];
  };
  projection2.center = function(_2) {
    return arguments.length ? (lambda = _2[0] % 360 * radians2, phi2 = _2[1] % 360 * radians2, recenter()) : [lambda * degrees3, phi2 * degrees3];
  };
  projection2.rotate = function(_2) {
    return arguments.length ? (deltaLambda = _2[0] % 360 * radians2, deltaPhi = _2[1] % 360 * radians2, deltaGamma = _2.length > 2 ? _2[2] % 360 * radians2 : 0, recenter()) : [deltaLambda * degrees3, deltaPhi * degrees3, deltaGamma * degrees3];
  };
  projection2.angle = function(_2) {
    return arguments.length ? (alpha = _2 % 360 * radians2, recenter()) : alpha * degrees3;
  };
  projection2.reflectX = function(_2) {
    return arguments.length ? (sx = _2 ? -1 : 1, recenter()) : sx < 0;
  };
  projection2.reflectY = function(_2) {
    return arguments.length ? (sy = _2 ? -1 : 1, recenter()) : sy < 0;
  };
  projection2.precision = function(_2) {
    return arguments.length ? (projectResample = resample_default(projectTransform, delta2 = _2 * _2), reset()) : sqrt(delta2);
  };
  projection2.fitExtent = function(extent, object2) {
    return fitExtent(projection2, extent, object2);
  };
  projection2.fitSize = function(size, object2) {
    return fitSize(projection2, size, object2);
  };
  projection2.fitWidth = function(width, object2) {
    return fitWidth(projection2, width, object2);
  };
  projection2.fitHeight = function(height, object2) {
    return fitHeight(projection2, height, object2);
  };
  function recenter() {
    var center2 = scaleTranslateRotate(k4, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi2)), transform2 = scaleTranslateRotate(k4, x6 - center2[0], y7 - center2[1], sx, sy, alpha);
    rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = compose_default(project, transform2);
    projectRotateTransform = compose_default(rotate, projectTransform);
    projectResample = resample_default(projectTransform, delta2);
    return reset();
  }
  function reset() {
    cache = cacheStream = null;
    return projection2;
  }
  return function() {
    project = projectAt.apply(this, arguments);
    projection2.invert = project.invert && invert;
    return recenter();
  };
}

// node_modules/d3-geo/src/projection/conic.js
function conicProjection(projectAt) {
  var phi02 = 0, phi12 = pi4 / 3, m4 = projectionMutator(projectAt), p3 = m4(phi02, phi12);
  p3.parallels = function(_2) {
    return arguments.length ? m4(phi02 = _2[0] * radians2, phi12 = _2[1] * radians2) : [phi02 * degrees3, phi12 * degrees3];
  };
  return p3;
}

// node_modules/d3-geo/src/projection/cylindricalEqualArea.js
function cylindricalEqualAreaRaw(phi02) {
  var cosPhi03 = cos2(phi02);
  function forward(lambda, phi2) {
    return [lambda * cosPhi03, sin2(phi2) / cosPhi03];
  }
  forward.invert = function(x6, y7) {
    return [x6 / cosPhi03, asin(y7 * cosPhi03)];
  };
  return forward;
}

// node_modules/d3-geo/src/projection/conicEqualArea.js
function conicEqualAreaRaw(y06, y12) {
  var sy0 = sin2(y06), n2 = (sy0 + sin2(y12)) / 2;
  if (abs3(n2) < epsilon6)
    return cylindricalEqualAreaRaw(y06);
  var c8 = 1 + sy0 * (2 * n2 - sy0), r0 = sqrt(c8) / n2;
  function project(x6, y7) {
    var r4 = sqrt(c8 - 2 * n2 * sin2(y7)) / n2;
    return [r4 * sin2(x6 *= n2), r0 - r4 * cos2(x6)];
  }
  project.invert = function(x6, y7) {
    var r0y = r0 - y7, l4 = atan2(x6, abs3(r0y)) * sign(r0y);
    if (r0y * n2 < 0)
      l4 -= pi4 * sign(x6) * sign(r0y);
    return [l4 / n2, asin((c8 - (x6 * x6 + r0y * r0y) * n2 * n2) / (2 * n2))];
  };
  return project;
}
function conicEqualArea_default() {
  return conicProjection(conicEqualAreaRaw).scale(155.424).center([0, 33.6442]);
}

// node_modules/d3-geo/src/projection/albers.js
function albers_default() {
  return conicEqualArea_default().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}

// node_modules/d3-geo/src/projection/albersUsa.js
function multiplex(streams) {
  var n2 = streams.length;
  return {
    point: function(x6, y7) {
      var i4 = -1;
      while (++i4 < n2)
        streams[i4].point(x6, y7);
    },
    sphere: function() {
      var i4 = -1;
      while (++i4 < n2)
        streams[i4].sphere();
    },
    lineStart: function() {
      var i4 = -1;
      while (++i4 < n2)
        streams[i4].lineStart();
    },
    lineEnd: function() {
      var i4 = -1;
      while (++i4 < n2)
        streams[i4].lineEnd();
    },
    polygonStart: function() {
      var i4 = -1;
      while (++i4 < n2)
        streams[i4].polygonStart();
    },
    polygonEnd: function() {
      var i4 = -1;
      while (++i4 < n2)
        streams[i4].polygonEnd();
    }
  };
}
function albersUsa_default() {
  var cache, cacheStream, lower48 = albers_default(), lower48Point, alaska = conicEqualArea_default().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, hawaii = conicEqualArea_default().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, point6, pointStream = { point: function(x6, y7) {
    point6 = [x6, y7];
  } };
  function albersUsa(coordinates2) {
    var x6 = coordinates2[0], y7 = coordinates2[1];
    return point6 = null, (lower48Point.point(x6, y7), point6) || (alaskaPoint.point(x6, y7), point6) || (hawaiiPoint.point(x6, y7), point6);
  }
  albersUsa.invert = function(coordinates2) {
    var k4 = lower48.scale(), t4 = lower48.translate(), x6 = (coordinates2[0] - t4[0]) / k4, y7 = (coordinates2[1] - t4[1]) / k4;
    return (y7 >= 0.12 && y7 < 0.234 && x6 >= -0.425 && x6 < -0.214 ? alaska : y7 >= 0.166 && y7 < 0.234 && x6 >= -0.214 && x6 < -0.115 ? hawaii : lower48).invert(coordinates2);
  };
  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };
  albersUsa.precision = function(_2) {
    if (!arguments.length)
      return lower48.precision();
    lower48.precision(_2), alaska.precision(_2), hawaii.precision(_2);
    return reset();
  };
  albersUsa.scale = function(_2) {
    if (!arguments.length)
      return lower48.scale();
    lower48.scale(_2), alaska.scale(_2 * 0.35), hawaii.scale(_2);
    return albersUsa.translate(lower48.translate());
  };
  albersUsa.translate = function(_2) {
    if (!arguments.length)
      return lower48.translate();
    var k4 = lower48.scale(), x6 = +_2[0], y7 = +_2[1];
    lower48Point = lower48.translate(_2).clipExtent([[x6 - 0.455 * k4, y7 - 0.238 * k4], [x6 + 0.455 * k4, y7 + 0.238 * k4]]).stream(pointStream);
    alaskaPoint = alaska.translate([x6 - 0.307 * k4, y7 + 0.201 * k4]).clipExtent([[x6 - 0.425 * k4 + epsilon6, y7 + 0.12 * k4 + epsilon6], [x6 - 0.214 * k4 - epsilon6, y7 + 0.234 * k4 - epsilon6]]).stream(pointStream);
    hawaiiPoint = hawaii.translate([x6 - 0.205 * k4, y7 + 0.212 * k4]).clipExtent([[x6 - 0.214 * k4 + epsilon6, y7 + 0.166 * k4 + epsilon6], [x6 - 0.115 * k4 - epsilon6, y7 + 0.234 * k4 - epsilon6]]).stream(pointStream);
    return reset();
  };
  albersUsa.fitExtent = function(extent, object2) {
    return fitExtent(albersUsa, extent, object2);
  };
  albersUsa.fitSize = function(size, object2) {
    return fitSize(albersUsa, size, object2);
  };
  albersUsa.fitWidth = function(width, object2) {
    return fitWidth(albersUsa, width, object2);
  };
  albersUsa.fitHeight = function(height, object2) {
    return fitHeight(albersUsa, height, object2);
  };
  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }
  return albersUsa.scale(1070);
}

// node_modules/d3-geo/src/projection/azimuthal.js
function azimuthalRaw(scale) {
  return function(x6, y7) {
    var cx = cos2(x6), cy = cos2(y7), k4 = scale(cx * cy);
    if (k4 === Infinity)
      return [2, 0];
    return [
      k4 * cy * sin2(x6),
      k4 * sin2(y7)
    ];
  };
}
function azimuthalInvert(angle2) {
  return function(x6, y7) {
    var z2 = sqrt(x6 * x6 + y7 * y7), c8 = angle2(z2), sc = sin2(c8), cc = cos2(c8);
    return [
      atan2(x6 * sc, z2 * cc),
      asin(z2 && y7 * sc / z2)
    ];
  };
}

// node_modules/d3-geo/src/projection/azimuthalEqualArea.js
var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
  return sqrt(2 / (1 + cxcy));
});
azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z2) {
  return 2 * asin(z2 / 2);
});
function azimuthalEqualArea_default() {
  return projection(azimuthalEqualAreaRaw).scale(124.75).clipAngle(180 - 1e-3);
}

// node_modules/d3-geo/src/projection/azimuthalEquidistant.js
var azimuthalEquidistantRaw = azimuthalRaw(function(c8) {
  return (c8 = acos(c8)) && c8 / sin2(c8);
});
azimuthalEquidistantRaw.invert = azimuthalInvert(function(z2) {
  return z2;
});
function azimuthalEquidistant_default() {
  return projection(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
}

// node_modules/d3-geo/src/projection/mercator.js
function mercatorRaw(lambda, phi2) {
  return [lambda, log(tan((halfPi3 + phi2) / 2))];
}
mercatorRaw.invert = function(x6, y7) {
  return [x6, 2 * atan(exp(y7)) - halfPi3];
};
function mercator_default() {
  return mercatorProjection(mercatorRaw).scale(961 / tau5);
}
function mercatorProjection(project) {
  var m4 = projection(project), center2 = m4.center, scale = m4.scale, translate2 = m4.translate, clipExtent = m4.clipExtent, x06 = null, y06, x12, y12;
  m4.scale = function(_2) {
    return arguments.length ? (scale(_2), reclip()) : scale();
  };
  m4.translate = function(_2) {
    return arguments.length ? (translate2(_2), reclip()) : translate2();
  };
  m4.center = function(_2) {
    return arguments.length ? (center2(_2), reclip()) : center2();
  };
  m4.clipExtent = function(_2) {
    return arguments.length ? (_2 == null ? x06 = y06 = x12 = y12 = null : (x06 = +_2[0][0], y06 = +_2[0][1], x12 = +_2[1][0], y12 = +_2[1][1]), reclip()) : x06 == null ? null : [[x06, y06], [x12, y12]];
  };
  function reclip() {
    var k4 = pi4 * scale(), t4 = m4(rotation_default(m4.rotate()).invert([0, 0]));
    return clipExtent(x06 == null ? [[t4[0] - k4, t4[1] - k4], [t4[0] + k4, t4[1] + k4]] : project === mercatorRaw ? [[Math.max(t4[0] - k4, x06), y06], [Math.min(t4[0] + k4, x12), y12]] : [[x06, Math.max(t4[1] - k4, y06)], [x12, Math.min(t4[1] + k4, y12)]]);
  }
  return reclip();
}

// node_modules/d3-geo/src/projection/conicConformal.js
function tany(y7) {
  return tan((halfPi3 + y7) / 2);
}
function conicConformalRaw(y06, y12) {
  var cy0 = cos2(y06), n2 = y06 === y12 ? sin2(y06) : log(cy0 / cos2(y12)) / log(tany(y12) / tany(y06)), f4 = cy0 * pow2(tany(y06), n2) / n2;
  if (!n2)
    return mercatorRaw;
  function project(x6, y7) {
    if (f4 > 0) {
      if (y7 < -halfPi3 + epsilon6)
        y7 = -halfPi3 + epsilon6;
    } else {
      if (y7 > halfPi3 - epsilon6)
        y7 = halfPi3 - epsilon6;
    }
    var r4 = f4 / pow2(tany(y7), n2);
    return [r4 * sin2(n2 * x6), f4 - r4 * cos2(n2 * x6)];
  }
  project.invert = function(x6, y7) {
    var fy = f4 - y7, r4 = sign(n2) * sqrt(x6 * x6 + fy * fy), l4 = atan2(x6, abs3(fy)) * sign(fy);
    if (fy * n2 < 0)
      l4 -= pi4 * sign(x6) * sign(fy);
    return [l4 / n2, 2 * atan(pow2(f4 / r4, 1 / n2)) - halfPi3];
  };
  return project;
}
function conicConformal_default() {
  return conicProjection(conicConformalRaw).scale(109.5).parallels([30, 30]);
}

// node_modules/d3-geo/src/projection/equirectangular.js
function equirectangularRaw(lambda, phi2) {
  return [lambda, phi2];
}
equirectangularRaw.invert = equirectangularRaw;
function equirectangular_default() {
  return projection(equirectangularRaw).scale(152.63);
}

// node_modules/d3-geo/src/projection/conicEquidistant.js
function conicEquidistantRaw(y06, y12) {
  var cy0 = cos2(y06), n2 = y06 === y12 ? sin2(y06) : (cy0 - cos2(y12)) / (y12 - y06), g3 = cy0 / n2 + y06;
  if (abs3(n2) < epsilon6)
    return equirectangularRaw;
  function project(x6, y7) {
    var gy = g3 - y7, nx = n2 * x6;
    return [gy * sin2(nx), g3 - gy * cos2(nx)];
  }
  project.invert = function(x6, y7) {
    var gy = g3 - y7, l4 = atan2(x6, abs3(gy)) * sign(gy);
    if (gy * n2 < 0)
      l4 -= pi4 * sign(x6) * sign(gy);
    return [l4 / n2, g3 - sign(n2) * sqrt(x6 * x6 + gy * gy)];
  };
  return project;
}
function conicEquidistant_default() {
  return conicProjection(conicEquidistantRaw).scale(131.154).center([0, 13.9389]);
}

// node_modules/d3-geo/src/projection/equalEarth.js
var A1 = 1.340264;
var A22 = -0.081106;
var A3 = 893e-6;
var A4 = 3796e-6;
var M2 = sqrt(3) / 2;
var iterations = 12;
function equalEarthRaw(lambda, phi2) {
  var l4 = asin(M2 * sin2(phi2)), l22 = l4 * l4, l6 = l22 * l22 * l22;
  return [
    lambda * cos2(l4) / (M2 * (A1 + 3 * A22 * l22 + l6 * (7 * A3 + 9 * A4 * l22))),
    l4 * (A1 + A22 * l22 + l6 * (A3 + A4 * l22))
  ];
}
equalEarthRaw.invert = function(x6, y7) {
  var l4 = y7, l22 = l4 * l4, l6 = l22 * l22 * l22;
  for (var i4 = 0, delta, fy, fpy; i4 < iterations; ++i4) {
    fy = l4 * (A1 + A22 * l22 + l6 * (A3 + A4 * l22)) - y7;
    fpy = A1 + 3 * A22 * l22 + l6 * (7 * A3 + 9 * A4 * l22);
    l4 -= delta = fy / fpy, l22 = l4 * l4, l6 = l22 * l22 * l22;
    if (abs3(delta) < epsilon22)
      break;
  }
  return [
    M2 * x6 * (A1 + 3 * A22 * l22 + l6 * (7 * A3 + 9 * A4 * l22)) / cos2(l4),
    asin(sin2(l4) / M2)
  ];
};
function equalEarth_default() {
  return projection(equalEarthRaw).scale(177.158);
}

// node_modules/d3-geo/src/projection/gnomonic.js
function gnomonicRaw(x6, y7) {
  var cy = cos2(y7), k4 = cos2(x6) * cy;
  return [cy * sin2(x6) / k4, sin2(y7) / k4];
}
gnomonicRaw.invert = azimuthalInvert(atan);
function gnomonic_default() {
  return projection(gnomonicRaw).scale(144.049).clipAngle(60);
}

// node_modules/d3-geo/src/projection/identity.js
function identity_default5() {
  var k4 = 1, tx = 0, ty = 0, sx = 1, sy = 1, alpha = 0, ca, sa, x06 = null, y06, x12, y12, kx2 = 1, ky2 = 1, transform2 = transformer({
    point: function(x6, y7) {
      var p3 = projection2([x6, y7]);
      this.stream.point(p3[0], p3[1]);
    }
  }), postclip = identity_default4, cache, cacheStream;
  function reset() {
    kx2 = k4 * sx;
    ky2 = k4 * sy;
    cache = cacheStream = null;
    return projection2;
  }
  function projection2(p3) {
    var x6 = p3[0] * kx2, y7 = p3[1] * ky2;
    if (alpha) {
      var t4 = y7 * ca - x6 * sa;
      x6 = x6 * ca + y7 * sa;
      y7 = t4;
    }
    return [x6 + tx, y7 + ty];
  }
  projection2.invert = function(p3) {
    var x6 = p3[0] - tx, y7 = p3[1] - ty;
    if (alpha) {
      var t4 = y7 * ca + x6 * sa;
      x6 = x6 * ca - y7 * sa;
      y7 = t4;
    }
    return [x6 / kx2, y7 / ky2];
  };
  projection2.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transform2(postclip(cacheStream = stream));
  };
  projection2.postclip = function(_2) {
    return arguments.length ? (postclip = _2, x06 = y06 = x12 = y12 = null, reset()) : postclip;
  };
  projection2.clipExtent = function(_2) {
    return arguments.length ? (postclip = _2 == null ? (x06 = y06 = x12 = y12 = null, identity_default4) : clipRectangle(x06 = +_2[0][0], y06 = +_2[0][1], x12 = +_2[1][0], y12 = +_2[1][1]), reset()) : x06 == null ? null : [[x06, y06], [x12, y12]];
  };
  projection2.scale = function(_2) {
    return arguments.length ? (k4 = +_2, reset()) : k4;
  };
  projection2.translate = function(_2) {
    return arguments.length ? (tx = +_2[0], ty = +_2[1], reset()) : [tx, ty];
  };
  projection2.angle = function(_2) {
    return arguments.length ? (alpha = _2 % 360 * radians2, sa = sin2(alpha), ca = cos2(alpha), reset()) : alpha * degrees3;
  };
  projection2.reflectX = function(_2) {
    return arguments.length ? (sx = _2 ? -1 : 1, reset()) : sx < 0;
  };
  projection2.reflectY = function(_2) {
    return arguments.length ? (sy = _2 ? -1 : 1, reset()) : sy < 0;
  };
  projection2.fitExtent = function(extent, object2) {
    return fitExtent(projection2, extent, object2);
  };
  projection2.fitSize = function(size, object2) {
    return fitSize(projection2, size, object2);
  };
  projection2.fitWidth = function(width, object2) {
    return fitWidth(projection2, width, object2);
  };
  projection2.fitHeight = function(height, object2) {
    return fitHeight(projection2, height, object2);
  };
  return projection2;
}

// node_modules/d3-geo/src/projection/naturalEarth1.js
function naturalEarth1Raw(lambda, phi2) {
  var phi22 = phi2 * phi2, phi4 = phi22 * phi22;
  return [
    lambda * (0.8707 - 0.131979 * phi22 + phi4 * (-0.013791 + phi4 * (3971e-6 * phi22 - 1529e-6 * phi4))),
    phi2 * (1.007226 + phi22 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi22 - 5916e-6 * phi4)))
  ];
}
naturalEarth1Raw.invert = function(x6, y7) {
  var phi2 = y7, i4 = 25, delta;
  do {
    var phi22 = phi2 * phi2, phi4 = phi22 * phi22;
    phi2 -= delta = (phi2 * (1.007226 + phi22 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi22 - 5916e-6 * phi4))) - y7) / (1.007226 + phi22 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi22 - 5916e-6 * 11 * phi4)));
  } while (abs3(delta) > epsilon6 && --i4 > 0);
  return [
    x6 / (0.8707 + (phi22 = phi2 * phi2) * (-0.131979 + phi22 * (-0.013791 + phi22 * phi22 * phi22 * (3971e-6 - 1529e-6 * phi22)))),
    phi2
  ];
};
function naturalEarth1_default() {
  return projection(naturalEarth1Raw).scale(175.295);
}

// node_modules/d3-geo/src/projection/orthographic.js
function orthographicRaw(x6, y7) {
  return [cos2(y7) * sin2(x6), sin2(y7)];
}
orthographicRaw.invert = azimuthalInvert(asin);
function orthographic_default() {
  return projection(orthographicRaw).scale(249.5).clipAngle(90 + epsilon6);
}

// node_modules/d3-geo/src/projection/stereographic.js
function stereographicRaw(x6, y7) {
  var cy = cos2(y7), k4 = 1 + cos2(x6) * cy;
  return [cy * sin2(x6) / k4, sin2(y7) / k4];
}
stereographicRaw.invert = azimuthalInvert(function(z2) {
  return 2 * atan(z2);
});
function stereographic_default() {
  return projection(stereographicRaw).scale(250).clipAngle(142);
}

// node_modules/d3-geo/src/projection/transverseMercator.js
function transverseMercatorRaw(lambda, phi2) {
  return [log(tan((halfPi3 + phi2) / 2)), -lambda];
}
transverseMercatorRaw.invert = function(x6, y7) {
  return [-y7, 2 * atan(exp(x6)) - halfPi3];
};
function transverseMercator_default() {
  var m4 = mercatorProjection(transverseMercatorRaw), center2 = m4.center, rotate = m4.rotate;
  m4.center = function(_2) {
    return arguments.length ? center2([-_2[1], _2[0]]) : (_2 = center2(), [_2[1], -_2[0]]);
  };
  m4.rotate = function(_2) {
    return arguments.length ? rotate([_2[0], _2[1], _2.length > 2 ? _2[2] + 90 : 90]) : (_2 = rotate(), [_2[0], _2[1], _2[2] - 90]);
  };
  return rotate([0, 0, 90]).scale(159.155);
}

// node_modules/d3-hierarchy/src/cluster.js
function defaultSeparation(a6, b10) {
  return a6.parent === b10.parent ? 1 : 2;
}
function meanX(children2) {
  return children2.reduce(meanXReduce, 0) / children2.length;
}
function meanXReduce(x6, c8) {
  return x6 + c8.x;
}
function maxY(children2) {
  return 1 + children2.reduce(maxYReduce, 0);
}
function maxYReduce(y7, c8) {
  return Math.max(y7, c8.y);
}
function leafLeft(node) {
  var children2;
  while (children2 = node.children)
    node = children2[0];
  return node;
}
function leafRight(node) {
  var children2;
  while (children2 = node.children)
    node = children2[children2.length - 1];
  return node;
}
function cluster_default() {
  var separation = defaultSeparation, dx = 1, dy = 1, nodeSize = false;
  function cluster(root3) {
    var previousNode, x6 = 0;
    root3.eachAfter(function(node) {
      var children2 = node.children;
      if (children2) {
        node.x = meanX(children2);
        node.y = maxY(children2);
      } else {
        node.x = previousNode ? x6 += separation(node, previousNode) : 0;
        node.y = 0;
        previousNode = node;
      }
    });
    var left2 = leafLeft(root3), right2 = leafRight(root3), x06 = left2.x - separation(left2, right2) / 2, x12 = right2.x + separation(right2, left2) / 2;
    return root3.eachAfter(nodeSize ? function(node) {
      node.x = (node.x - root3.x) * dx;
      node.y = (root3.y - node.y) * dy;
    } : function(node) {
      node.x = (node.x - x06) / (x12 - x06) * dx;
      node.y = (1 - (root3.y ? node.y / root3.y : 1)) * dy;
    });
  }
  cluster.separation = function(x6) {
    return arguments.length ? (separation = x6, cluster) : separation;
  };
  cluster.size = function(x6) {
    return arguments.length ? (nodeSize = false, dx = +x6[0], dy = +x6[1], cluster) : nodeSize ? null : [dx, dy];
  };
  cluster.nodeSize = function(x6) {
    return arguments.length ? (nodeSize = true, dx = +x6[0], dy = +x6[1], cluster) : nodeSize ? [dx, dy] : null;
  };
  return cluster;
}

// node_modules/d3-hierarchy/src/hierarchy/count.js
function count2(node) {
  var sum3 = 0, children2 = node.children, i4 = children2 && children2.length;
  if (!i4)
    sum3 = 1;
  else
    while (--i4 >= 0)
      sum3 += children2[i4].value;
  node.value = sum3;
}
function count_default() {
  return this.eachAfter(count2);
}

// node_modules/d3-hierarchy/src/hierarchy/each.js
function each_default2(callback, that) {
  let index3 = -1;
  for (const node of this) {
    callback.call(that, node, ++index3, this);
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function eachBefore_default(callback, that) {
  var node = this, nodes = [node], children2, i4, index3 = -1;
  while (node = nodes.pop()) {
    callback.call(that, node, ++index3, this);
    if (children2 = node.children) {
      for (i4 = children2.length - 1; i4 >= 0; --i4) {
        nodes.push(children2[i4]);
      }
    }
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function eachAfter_default(callback, that) {
  var node = this, nodes = [node], next = [], children2, i4, n2, index3 = -1;
  while (node = nodes.pop()) {
    next.push(node);
    if (children2 = node.children) {
      for (i4 = 0, n2 = children2.length; i4 < n2; ++i4) {
        nodes.push(children2[i4]);
      }
    }
  }
  while (node = next.pop()) {
    callback.call(that, node, ++index3, this);
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/find.js
function find_default2(callback, that) {
  let index3 = -1;
  for (const node of this) {
    if (callback.call(that, node, ++index3, this)) {
      return node;
    }
  }
}

// node_modules/d3-hierarchy/src/hierarchy/sum.js
function sum_default(value) {
  return this.eachAfter(function(node) {
    var sum3 = +value(node.data) || 0, children2 = node.children, i4 = children2 && children2.length;
    while (--i4 >= 0)
      sum3 += children2[i4].value;
    node.value = sum3;
  });
}

// node_modules/d3-hierarchy/src/hierarchy/sort.js
function sort_default2(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

// node_modules/d3-hierarchy/src/hierarchy/path.js
function path_default3(end) {
  var start2 = this, ancestor = leastCommonAncestor(start2, end), nodes = [start2];
  while (start2 !== ancestor) {
    start2 = start2.parent;
    nodes.push(start2);
  }
  var k4 = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k4, 0, end);
    end = end.parent;
  }
  return nodes;
}
function leastCommonAncestor(a6, b10) {
  if (a6 === b10)
    return a6;
  var aNodes = a6.ancestors(), bNodes = b10.ancestors(), c8 = null;
  a6 = aNodes.pop();
  b10 = bNodes.pop();
  while (a6 === b10) {
    c8 = a6;
    a6 = aNodes.pop();
    b10 = bNodes.pop();
  }
  return c8;
}

// node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function ancestors_default() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

// node_modules/d3-hierarchy/src/hierarchy/descendants.js
function descendants_default() {
  return Array.from(this);
}

// node_modules/d3-hierarchy/src/hierarchy/leaves.js
function leaves_default() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

// node_modules/d3-hierarchy/src/hierarchy/links.js
function links_default() {
  var root3 = this, links = [];
  root3.each(function(node) {
    if (node !== root3) {
      links.push({ source: node.parent, target: node });
    }
  });
  return links;
}

// node_modules/d3-hierarchy/src/hierarchy/iterator.js
function* iterator_default2() {
  var node = this, current, next = [node], children2, i4, n2;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      yield node;
      if (children2 = node.children) {
        for (i4 = 0, n2 = children2.length; i4 < n2; ++i4) {
          next.push(children2[i4]);
        }
      }
    }
  } while (next.length);
}

// node_modules/d3-hierarchy/src/hierarchy/index.js
function hierarchy(data, children2) {
  if (data instanceof Map) {
    data = [void 0, data];
    if (children2 === void 0)
      children2 = mapChildren;
  } else if (children2 === void 0) {
    children2 = objectChildren;
  }
  var root3 = new Node(data), node, nodes = [root3], child, childs, i4, n2;
  while (node = nodes.pop()) {
    if ((childs = children2(node.data)) && (n2 = (childs = Array.from(childs)).length)) {
      node.children = childs;
      for (i4 = n2 - 1; i4 >= 0; --i4) {
        nodes.push(child = childs[i4] = new Node(childs[i4]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }
  return root3.eachBefore(computeHeight);
}
function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}
function objectChildren(d4) {
  return d4.children;
}
function mapChildren(d4) {
  return Array.isArray(d4) ? d4[1] : null;
}
function copyData(node) {
  if (node.data.value !== void 0)
    node.value = node.data.value;
  node.data = node.data.data;
}
function computeHeight(node) {
  var height = 0;
  do
    node.height = height;
  while ((node = node.parent) && node.height < ++height);
}
function Node(data) {
  this.data = data;
  this.depth = this.height = 0;
  this.parent = null;
}
Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: count_default,
  each: each_default2,
  eachAfter: eachAfter_default,
  eachBefore: eachBefore_default,
  find: find_default2,
  sum: sum_default,
  sort: sort_default2,
  path: path_default3,
  ancestors: ancestors_default,
  descendants: descendants_default,
  leaves: leaves_default,
  links: links_default,
  copy: node_copy,
  [Symbol.iterator]: iterator_default2
};

// node_modules/d3-hierarchy/src/array.js
function array_default3(x6) {
  return typeof x6 === "object" && "length" in x6 ? x6 : Array.from(x6);
}
function shuffle(array3) {
  var m4 = array3.length, t4, i4;
  while (m4) {
    i4 = Math.random() * m4-- | 0;
    t4 = array3[m4];
    array3[m4] = array3[i4];
    array3[i4] = t4;
  }
  return array3;
}

// node_modules/d3-hierarchy/src/pack/enclose.js
function enclose_default(circles) {
  var i4 = 0, n2 = (circles = shuffle(Array.from(circles))).length, B3 = [], p3, e3;
  while (i4 < n2) {
    p3 = circles[i4];
    if (e3 && enclosesWeak(e3, p3))
      ++i4;
    else
      e3 = encloseBasis(B3 = extendBasis(B3, p3)), i4 = 0;
  }
  return e3;
}
function extendBasis(B3, p3) {
  var i4, j3;
  if (enclosesWeakAll(p3, B3))
    return [p3];
  for (i4 = 0; i4 < B3.length; ++i4) {
    if (enclosesNot(p3, B3[i4]) && enclosesWeakAll(encloseBasis2(B3[i4], p3), B3)) {
      return [B3[i4], p3];
    }
  }
  for (i4 = 0; i4 < B3.length - 1; ++i4) {
    for (j3 = i4 + 1; j3 < B3.length; ++j3) {
      if (enclosesNot(encloseBasis2(B3[i4], B3[j3]), p3) && enclosesNot(encloseBasis2(B3[i4], p3), B3[j3]) && enclosesNot(encloseBasis2(B3[j3], p3), B3[i4]) && enclosesWeakAll(encloseBasis3(B3[i4], B3[j3], p3), B3)) {
        return [B3[i4], B3[j3], p3];
      }
    }
  }
  throw new Error();
}
function enclosesNot(a6, b10) {
  var dr = a6.r - b10.r, dx = b10.x - a6.x, dy = b10.y - a6.y;
  return dr < 0 || dr * dr < dx * dx + dy * dy;
}
function enclosesWeak(a6, b10) {
  var dr = a6.r - b10.r + Math.max(a6.r, b10.r, 1) * 1e-9, dx = b10.x - a6.x, dy = b10.y - a6.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function enclosesWeakAll(a6, B3) {
  for (var i4 = 0; i4 < B3.length; ++i4) {
    if (!enclosesWeak(a6, B3[i4])) {
      return false;
    }
  }
  return true;
}
function encloseBasis(B3) {
  switch (B3.length) {
    case 1:
      return encloseBasis1(B3[0]);
    case 2:
      return encloseBasis2(B3[0], B3[1]);
    case 3:
      return encloseBasis3(B3[0], B3[1], B3[2]);
  }
}
function encloseBasis1(a6) {
  return {
    x: a6.x,
    y: a6.y,
    r: a6.r
  };
}
function encloseBasis2(a6, b10) {
  var x12 = a6.x, y12 = a6.y, r1 = a6.r, x22 = b10.x, y22 = b10.y, r22 = b10.r, x21 = x22 - x12, y21 = y22 - y12, r21 = r22 - r1, l4 = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x12 + x22 + x21 / l4 * r21) / 2,
    y: (y12 + y22 + y21 / l4 * r21) / 2,
    r: (l4 + r1 + r22) / 2
  };
}
function encloseBasis3(a6, b10, c8) {
  var x12 = a6.x, y12 = a6.y, r1 = a6.r, x22 = b10.x, y22 = b10.y, r22 = b10.r, x32 = c8.x, y32 = c8.y, r32 = c8.r, a22 = x12 - x22, a32 = x12 - x32, b23 = y12 - y22, b32 = y12 - y32, c22 = r22 - r1, c32 = r32 - r1, d1 = x12 * x12 + y12 * y12 - r1 * r1, d22 = d1 - x22 * x22 - y22 * y22 + r22 * r22, d32 = d1 - x32 * x32 - y32 * y32 + r32 * r32, ab = a32 * b23 - a22 * b32, xa = (b23 * d32 - b32 * d22) / (ab * 2) - x12, xb = (b32 * c22 - b23 * c32) / ab, ya = (a32 * d22 - a22 * d32) / (ab * 2) - y12, yb = (a22 * c32 - a32 * c22) / ab, A5 = xb * xb + yb * yb - 1, B3 = 2 * (r1 + xa * xb + ya * yb), C3 = xa * xa + ya * ya - r1 * r1, r4 = -(A5 ? (B3 + Math.sqrt(B3 * B3 - 4 * A5 * C3)) / (2 * A5) : C3 / B3);
  return {
    x: x12 + xa + xb * r4,
    y: y12 + ya + yb * r4,
    r: r4
  };
}

// node_modules/d3-hierarchy/src/pack/siblings.js
function place(b10, a6, c8) {
  var dx = b10.x - a6.x, x6, a22, dy = b10.y - a6.y, y7, b23, d22 = dx * dx + dy * dy;
  if (d22) {
    a22 = a6.r + c8.r, a22 *= a22;
    b23 = b10.r + c8.r, b23 *= b23;
    if (a22 > b23) {
      x6 = (d22 + b23 - a22) / (2 * d22);
      y7 = Math.sqrt(Math.max(0, b23 / d22 - x6 * x6));
      c8.x = b10.x - x6 * dx - y7 * dy;
      c8.y = b10.y - x6 * dy + y7 * dx;
    } else {
      x6 = (d22 + a22 - b23) / (2 * d22);
      y7 = Math.sqrt(Math.max(0, a22 / d22 - x6 * x6));
      c8.x = a6.x + x6 * dx - y7 * dy;
      c8.y = a6.y + x6 * dy + y7 * dx;
    }
  } else {
    c8.x = a6.x + c8.r;
    c8.y = a6.y;
  }
}
function intersects(a6, b10) {
  var dr = a6.r + b10.r - 1e-6, dx = b10.x - a6.x, dy = b10.y - a6.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function score(node) {
  var a6 = node._, b10 = node.next._, ab = a6.r + b10.r, dx = (a6.x * b10.r + b10.x * a6.r) / ab, dy = (a6.y * b10.r + b10.y * a6.r) / ab;
  return dx * dx + dy * dy;
}
function Node2(circle2) {
  this._ = circle2;
  this.next = null;
  this.previous = null;
}
function packEnclose(circles) {
  if (!(n2 = (circles = array_default3(circles)).length))
    return 0;
  var a6, b10, c8, n2, aa, ca, i4, j3, k4, sj, sk;
  a6 = circles[0], a6.x = 0, a6.y = 0;
  if (!(n2 > 1))
    return a6.r;
  b10 = circles[1], a6.x = -b10.r, b10.x = a6.r, b10.y = 0;
  if (!(n2 > 2))
    return a6.r + b10.r;
  place(b10, a6, c8 = circles[2]);
  a6 = new Node2(a6), b10 = new Node2(b10), c8 = new Node2(c8);
  a6.next = c8.previous = b10;
  b10.next = a6.previous = c8;
  c8.next = b10.previous = a6;
  pack:
    for (i4 = 3; i4 < n2; ++i4) {
      place(a6._, b10._, c8 = circles[i4]), c8 = new Node2(c8);
      j3 = b10.next, k4 = a6.previous, sj = b10._.r, sk = a6._.r;
      do {
        if (sj <= sk) {
          if (intersects(j3._, c8._)) {
            b10 = j3, a6.next = b10, b10.previous = a6, --i4;
            continue pack;
          }
          sj += j3._.r, j3 = j3.next;
        } else {
          if (intersects(k4._, c8._)) {
            a6 = k4, a6.next = b10, b10.previous = a6, --i4;
            continue pack;
          }
          sk += k4._.r, k4 = k4.previous;
        }
      } while (j3 !== k4.next);
      c8.previous = a6, c8.next = b10, a6.next = b10.previous = b10 = c8;
      aa = score(a6);
      while ((c8 = c8.next) !== b10) {
        if ((ca = score(c8)) < aa) {
          a6 = c8, aa = ca;
        }
      }
      b10 = a6.next;
    }
  a6 = [b10._], c8 = b10;
  while ((c8 = c8.next) !== b10)
    a6.push(c8._);
  c8 = enclose_default(a6);
  for (i4 = 0; i4 < n2; ++i4)
    a6 = circles[i4], a6.x -= c8.x, a6.y -= c8.y;
  return c8.r;
}
function siblings_default(circles) {
  packEnclose(circles);
  return circles;
}

// node_modules/d3-hierarchy/src/accessors.js
function optional(f4) {
  return f4 == null ? null : required(f4);
}
function required(f4) {
  if (typeof f4 !== "function")
    throw new Error();
  return f4;
}

// node_modules/d3-hierarchy/src/constant.js
function constantZero() {
  return 0;
}
function constant_default10(x6) {
  return function() {
    return x6;
  };
}

// node_modules/d3-hierarchy/src/pack/index.js
function defaultRadius2(d4) {
  return Math.sqrt(d4.value);
}
function pack_default() {
  var radius = null, dx = 1, dy = 1, padding = constantZero;
  function pack(root3) {
    root3.x = dx / 2, root3.y = dy / 2;
    if (radius) {
      root3.eachBefore(radiusLeaf(radius)).eachAfter(packChildren(padding, 0.5)).eachBefore(translateChild(1));
    } else {
      root3.eachBefore(radiusLeaf(defaultRadius2)).eachAfter(packChildren(constantZero, 1)).eachAfter(packChildren(padding, root3.r / Math.min(dx, dy))).eachBefore(translateChild(Math.min(dx, dy) / (2 * root3.r)));
    }
    return root3;
  }
  pack.radius = function(x6) {
    return arguments.length ? (radius = optional(x6), pack) : radius;
  };
  pack.size = function(x6) {
    return arguments.length ? (dx = +x6[0], dy = +x6[1], pack) : [dx, dy];
  };
  pack.padding = function(x6) {
    return arguments.length ? (padding = typeof x6 === "function" ? x6 : constant_default10(+x6), pack) : padding;
  };
  return pack;
}
function radiusLeaf(radius) {
  return function(node) {
    if (!node.children) {
      node.r = Math.max(0, +radius(node) || 0);
    }
  };
}
function packChildren(padding, k4) {
  return function(node) {
    if (children2 = node.children) {
      var children2, i4, n2 = children2.length, r4 = padding(node) * k4 || 0, e3;
      if (r4)
        for (i4 = 0; i4 < n2; ++i4)
          children2[i4].r += r4;
      e3 = packEnclose(children2);
      if (r4)
        for (i4 = 0; i4 < n2; ++i4)
          children2[i4].r -= r4;
      node.r = e3 + r4;
    }
  };
}
function translateChild(k4) {
  return function(node) {
    var parent = node.parent;
    node.r *= k4;
    if (parent) {
      node.x = parent.x + k4 * node.x;
      node.y = parent.y + k4 * node.y;
    }
  };
}

// node_modules/d3-hierarchy/src/treemap/round.js
function round_default2(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
}

// node_modules/d3-hierarchy/src/treemap/dice.js
function dice_default(parent, x06, y06, x12, y12) {
  var nodes = parent.children, node, i4 = -1, n2 = nodes.length, k4 = parent.value && (x12 - x06) / parent.value;
  while (++i4 < n2) {
    node = nodes[i4], node.y0 = y06, node.y1 = y12;
    node.x0 = x06, node.x1 = x06 += node.value * k4;
  }
}

// node_modules/d3-hierarchy/src/partition.js
function partition_default() {
  var dx = 1, dy = 1, padding = 0, round = false;
  function partition(root3) {
    var n2 = root3.height + 1;
    root3.x0 = root3.y0 = padding;
    root3.x1 = dx;
    root3.y1 = dy / n2;
    root3.eachBefore(positionNode(dy, n2));
    if (round)
      root3.eachBefore(round_default2);
    return root3;
  }
  function positionNode(dy2, n2) {
    return function(node) {
      if (node.children) {
        dice_default(node, node.x0, dy2 * (node.depth + 1) / n2, node.x1, dy2 * (node.depth + 2) / n2);
      }
      var x06 = node.x0, y06 = node.y0, x12 = node.x1 - padding, y12 = node.y1 - padding;
      if (x12 < x06)
        x06 = x12 = (x06 + x12) / 2;
      if (y12 < y06)
        y06 = y12 = (y06 + y12) / 2;
      node.x0 = x06;
      node.y0 = y06;
      node.x1 = x12;
      node.y1 = y12;
    };
  }
  partition.round = function(x6) {
    return arguments.length ? (round = !!x6, partition) : round;
  };
  partition.size = function(x6) {
    return arguments.length ? (dx = +x6[0], dy = +x6[1], partition) : [dx, dy];
  };
  partition.padding = function(x6) {
    return arguments.length ? (padding = +x6, partition) : padding;
  };
  return partition;
}

// node_modules/d3-hierarchy/src/stratify.js
var preroot = { depth: -1 };
var ambiguous = {};
function defaultId(d4) {
  return d4.id;
}
function defaultParentId(d4) {
  return d4.parentId;
}
function stratify_default() {
  var id2 = defaultId, parentId = defaultParentId;
  function stratify(data) {
    var nodes = Array.from(data), n2 = nodes.length, d4, i4, root3, parent, node, nodeId, nodeKey, nodeByKey = /* @__PURE__ */ new Map();
    for (i4 = 0; i4 < n2; ++i4) {
      d4 = nodes[i4], node = nodes[i4] = new Node(d4);
      if ((nodeId = id2(d4, i4, data)) != null && (nodeId += "")) {
        nodeKey = node.id = nodeId;
        nodeByKey.set(nodeKey, nodeByKey.has(nodeKey) ? ambiguous : node);
      }
      if ((nodeId = parentId(d4, i4, data)) != null && (nodeId += "")) {
        node.parent = nodeId;
      }
    }
    for (i4 = 0; i4 < n2; ++i4) {
      node = nodes[i4];
      if (nodeId = node.parent) {
        parent = nodeByKey.get(nodeId);
        if (!parent)
          throw new Error("missing: " + nodeId);
        if (parent === ambiguous)
          throw new Error("ambiguous: " + nodeId);
        if (parent.children)
          parent.children.push(node);
        else
          parent.children = [node];
        node.parent = parent;
      } else {
        if (root3)
          throw new Error("multiple roots");
        root3 = node;
      }
    }
    if (!root3)
      throw new Error("no root");
    root3.parent = preroot;
    root3.eachBefore(function(node2) {
      node2.depth = node2.parent.depth + 1;
      --n2;
    }).eachBefore(computeHeight);
    root3.parent = null;
    if (n2 > 0)
      throw new Error("cycle");
    return root3;
  }
  stratify.id = function(x6) {
    return arguments.length ? (id2 = required(x6), stratify) : id2;
  };
  stratify.parentId = function(x6) {
    return arguments.length ? (parentId = required(x6), stratify) : parentId;
  };
  return stratify;
}

// node_modules/d3-hierarchy/src/tree.js
function defaultSeparation2(a6, b10) {
  return a6.parent === b10.parent ? 1 : 2;
}
function nextLeft(v3) {
  var children2 = v3.children;
  return children2 ? children2[0] : v3.t;
}
function nextRight(v3) {
  var children2 = v3.children;
  return children2 ? children2[children2.length - 1] : v3.t;
}
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}
function executeShifts(v3) {
  var shift = 0, change = 0, children2 = v3.children, i4 = children2.length, w3;
  while (--i4 >= 0) {
    w3 = children2[i4];
    w3.z += shift;
    w3.m += shift;
    shift += w3.s + (change += w3.c);
  }
}
function nextAncestor(vim, v3, ancestor) {
  return vim.a.parent === v3.parent ? vim.a : ancestor;
}
function TreeNode(node, i4) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null;
  this.a = this;
  this.z = 0;
  this.m = 0;
  this.c = 0;
  this.s = 0;
  this.t = null;
  this.i = i4;
}
TreeNode.prototype = Object.create(Node.prototype);
function treeRoot(root3) {
  var tree = new TreeNode(root3, 0), node, nodes = [tree], child, children2, i4, n2;
  while (node = nodes.pop()) {
    if (children2 = node._.children) {
      node.children = new Array(n2 = children2.length);
      for (i4 = n2 - 1; i4 >= 0; --i4) {
        nodes.push(child = node.children[i4] = new TreeNode(children2[i4], i4));
        child.parent = node;
      }
    }
  }
  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}
function tree_default() {
  var separation = defaultSeparation2, dx = 1, dy = 1, nodeSize = null;
  function tree(root3) {
    var t4 = treeRoot(root3);
    t4.eachAfter(firstWalk), t4.parent.m = -t4.z;
    t4.eachBefore(secondWalk);
    if (nodeSize)
      root3.eachBefore(sizeNode);
    else {
      var left2 = root3, right2 = root3, bottom2 = root3;
      root3.eachBefore(function(node) {
        if (node.x < left2.x)
          left2 = node;
        if (node.x > right2.x)
          right2 = node;
        if (node.depth > bottom2.depth)
          bottom2 = node;
      });
      var s5 = left2 === right2 ? 1 : separation(left2, right2) / 2, tx = s5 - left2.x, kx2 = dx / (right2.x + s5 + tx), ky2 = dy / (bottom2.depth || 1);
      root3.eachBefore(function(node) {
        node.x = (node.x + tx) * kx2;
        node.y = node.depth * ky2;
      });
    }
    return root3;
  }
  function firstWalk(v3) {
    var children2 = v3.children, siblings = v3.parent.children, w3 = v3.i ? siblings[v3.i - 1] : null;
    if (children2) {
      executeShifts(v3);
      var midpoint = (children2[0].z + children2[children2.length - 1].z) / 2;
      if (w3) {
        v3.z = w3.z + separation(v3._, w3._);
        v3.m = v3.z - midpoint;
      } else {
        v3.z = midpoint;
      }
    } else if (w3) {
      v3.z = w3.z + separation(v3._, w3._);
    }
    v3.parent.A = apportion(v3, w3, v3.parent.A || siblings[0]);
  }
  function secondWalk(v3) {
    v3._.x = v3.z + v3.parent.m;
    v3.m += v3.parent.m;
  }
  function apportion(v3, w3, ancestor) {
    if (w3) {
      var vip = v3, vop = v3, vim = w3, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v3;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v3, ancestor), v3, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v3;
      }
    }
    return ancestor;
  }
  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }
  tree.separation = function(x6) {
    return arguments.length ? (separation = x6, tree) : separation;
  };
  tree.size = function(x6) {
    return arguments.length ? (nodeSize = false, dx = +x6[0], dy = +x6[1], tree) : nodeSize ? null : [dx, dy];
  };
  tree.nodeSize = function(x6) {
    return arguments.length ? (nodeSize = true, dx = +x6[0], dy = +x6[1], tree) : nodeSize ? [dx, dy] : null;
  };
  return tree;
}

// node_modules/d3-hierarchy/src/treemap/slice.js
function slice_default(parent, x06, y06, x12, y12) {
  var nodes = parent.children, node, i4 = -1, n2 = nodes.length, k4 = parent.value && (y12 - y06) / parent.value;
  while (++i4 < n2) {
    node = nodes[i4], node.x0 = x06, node.x1 = x12;
    node.y0 = y06, node.y1 = y06 += node.value * k4;
  }
}

// node_modules/d3-hierarchy/src/treemap/squarify.js
var phi = (1 + Math.sqrt(5)) / 2;
function squarifyRatio(ratio, parent, x06, y06, x12, y12) {
  var rows = [], nodes = parent.children, row, nodeValue, i0 = 0, i1 = 0, n2 = nodes.length, dx, dy, value = parent.value, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta;
  while (i0 < n2) {
    dx = x12 - x06, dy = y12 - y06;
    do
      sumValue = nodes[i1++].value;
    while (!sumValue && i1 < n2);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);
    for (; i1 < n2; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue)
        minValue = nodeValue;
      if (nodeValue > maxValue)
        maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) {
        sumValue -= nodeValue;
        break;
      }
      minRatio = newRatio;
    }
    rows.push(row = { value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1) });
    if (row.dice)
      dice_default(row, x06, y06, x12, value ? y06 += dy * sumValue / value : y12);
    else
      slice_default(row, x06, y06, value ? x06 += dx * sumValue / value : x12, y12);
    value -= sumValue, i0 = i1;
  }
  return rows;
}
var squarify_default = function custom10(ratio) {
  function squarify(parent, x06, y06, x12, y12) {
    squarifyRatio(ratio, parent, x06, y06, x12, y12);
  }
  squarify.ratio = function(x6) {
    return custom10((x6 = +x6) > 1 ? x6 : 1);
  };
  return squarify;
}(phi);

// node_modules/d3-hierarchy/src/treemap/index.js
function treemap_default() {
  var tile = squarify_default, round = false, dx = 1, dy = 1, paddingStack = [0], paddingInner = constantZero, paddingTop = constantZero, paddingRight = constantZero, paddingBottom = constantZero, paddingLeft = constantZero;
  function treemap(root3) {
    root3.x0 = root3.y0 = 0;
    root3.x1 = dx;
    root3.y1 = dy;
    root3.eachBefore(positionNode);
    paddingStack = [0];
    if (round)
      root3.eachBefore(round_default2);
    return root3;
  }
  function positionNode(node) {
    var p3 = paddingStack[node.depth], x06 = node.x0 + p3, y06 = node.y0 + p3, x12 = node.x1 - p3, y12 = node.y1 - p3;
    if (x12 < x06)
      x06 = x12 = (x06 + x12) / 2;
    if (y12 < y06)
      y06 = y12 = (y06 + y12) / 2;
    node.x0 = x06;
    node.y0 = y06;
    node.x1 = x12;
    node.y1 = y12;
    if (node.children) {
      p3 = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x06 += paddingLeft(node) - p3;
      y06 += paddingTop(node) - p3;
      x12 -= paddingRight(node) - p3;
      y12 -= paddingBottom(node) - p3;
      if (x12 < x06)
        x06 = x12 = (x06 + x12) / 2;
      if (y12 < y06)
        y06 = y12 = (y06 + y12) / 2;
      tile(node, x06, y06, x12, y12);
    }
  }
  treemap.round = function(x6) {
    return arguments.length ? (round = !!x6, treemap) : round;
  };
  treemap.size = function(x6) {
    return arguments.length ? (dx = +x6[0], dy = +x6[1], treemap) : [dx, dy];
  };
  treemap.tile = function(x6) {
    return arguments.length ? (tile = required(x6), treemap) : tile;
  };
  treemap.padding = function(x6) {
    return arguments.length ? treemap.paddingInner(x6).paddingOuter(x6) : treemap.paddingInner();
  };
  treemap.paddingInner = function(x6) {
    return arguments.length ? (paddingInner = typeof x6 === "function" ? x6 : constant_default10(+x6), treemap) : paddingInner;
  };
  treemap.paddingOuter = function(x6) {
    return arguments.length ? treemap.paddingTop(x6).paddingRight(x6).paddingBottom(x6).paddingLeft(x6) : treemap.paddingTop();
  };
  treemap.paddingTop = function(x6) {
    return arguments.length ? (paddingTop = typeof x6 === "function" ? x6 : constant_default10(+x6), treemap) : paddingTop;
  };
  treemap.paddingRight = function(x6) {
    return arguments.length ? (paddingRight = typeof x6 === "function" ? x6 : constant_default10(+x6), treemap) : paddingRight;
  };
  treemap.paddingBottom = function(x6) {
    return arguments.length ? (paddingBottom = typeof x6 === "function" ? x6 : constant_default10(+x6), treemap) : paddingBottom;
  };
  treemap.paddingLeft = function(x6) {
    return arguments.length ? (paddingLeft = typeof x6 === "function" ? x6 : constant_default10(+x6), treemap) : paddingLeft;
  };
  return treemap;
}

// node_modules/d3-hierarchy/src/treemap/binary.js
function binary_default(parent, x06, y06, x12, y12) {
  var nodes = parent.children, i4, n2 = nodes.length, sum3, sums = new Array(n2 + 1);
  for (sums[0] = sum3 = i4 = 0; i4 < n2; ++i4) {
    sums[i4 + 1] = sum3 += nodes[i4].value;
  }
  partition(0, n2, parent.value, x06, y06, x12, y12);
  function partition(i5, j3, value, x07, y07, x13, y13) {
    if (i5 >= j3 - 1) {
      var node = nodes[i5];
      node.x0 = x07, node.y0 = y07;
      node.x1 = x13, node.y1 = y13;
      return;
    }
    var valueOffset = sums[i5], valueTarget = value / 2 + valueOffset, k4 = i5 + 1, hi = j3 - 1;
    while (k4 < hi) {
      var mid = k4 + hi >>> 1;
      if (sums[mid] < valueTarget)
        k4 = mid + 1;
      else
        hi = mid;
    }
    if (valueTarget - sums[k4 - 1] < sums[k4] - valueTarget && i5 + 1 < k4)
      --k4;
    var valueLeft = sums[k4] - valueOffset, valueRight = value - valueLeft;
    if (x13 - x07 > y13 - y07) {
      var xk = value ? (x07 * valueRight + x13 * valueLeft) / value : x13;
      partition(i5, k4, valueLeft, x07, y07, xk, y13);
      partition(k4, j3, valueRight, xk, y07, x13, y13);
    } else {
      var yk = value ? (y07 * valueRight + y13 * valueLeft) / value : y13;
      partition(i5, k4, valueLeft, x07, y07, x13, yk);
      partition(k4, j3, valueRight, x07, yk, x13, y13);
    }
  }
}

// node_modules/d3-hierarchy/src/treemap/sliceDice.js
function sliceDice_default(parent, x06, y06, x12, y12) {
  (parent.depth & 1 ? slice_default : dice_default)(parent, x06, y06, x12, y12);
}

// node_modules/d3-hierarchy/src/treemap/resquarify.js
var resquarify_default = function custom11(ratio) {
  function resquarify(parent, x06, y06, x12, y12) {
    if ((rows = parent._squarify) && rows.ratio === ratio) {
      var rows, row, nodes, i4, j3 = -1, n2, m4 = rows.length, value = parent.value;
      while (++j3 < m4) {
        row = rows[j3], nodes = row.children;
        for (i4 = row.value = 0, n2 = nodes.length; i4 < n2; ++i4)
          row.value += nodes[i4].value;
        if (row.dice)
          dice_default(row, x06, y06, x12, value ? y06 += (y12 - y06) * row.value / value : y12);
        else
          slice_default(row, x06, y06, value ? x06 += (x12 - x06) * row.value / value : x12, y12);
        value -= row.value;
      }
    } else {
      parent._squarify = rows = squarifyRatio(ratio, parent, x06, y06, x12, y12);
      rows.ratio = ratio;
    }
  }
  resquarify.ratio = function(x6) {
    return custom11((x6 = +x6) > 1 ? x6 : 1);
  };
  return resquarify;
}(phi);

// node_modules/d3-polygon/src/area.js
function area_default4(polygon) {
  var i4 = -1, n2 = polygon.length, a6, b10 = polygon[n2 - 1], area = 0;
  while (++i4 < n2) {
    a6 = b10;
    b10 = polygon[i4];
    area += a6[1] * b10[0] - a6[0] * b10[1];
  }
  return area / 2;
}

// node_modules/d3-polygon/src/centroid.js
function centroid_default3(polygon) {
  var i4 = -1, n2 = polygon.length, x6 = 0, y7 = 0, a6, b10 = polygon[n2 - 1], c8, k4 = 0;
  while (++i4 < n2) {
    a6 = b10;
    b10 = polygon[i4];
    k4 += c8 = a6[0] * b10[1] - b10[0] * a6[1];
    x6 += (a6[0] + b10[0]) * c8;
    y7 += (a6[1] + b10[1]) * c8;
  }
  return k4 *= 3, [x6 / k4, y7 / k4];
}

// node_modules/d3-polygon/src/cross.js
function cross_default(a6, b10, c8) {
  return (b10[0] - a6[0]) * (c8[1] - a6[1]) - (b10[1] - a6[1]) * (c8[0] - a6[0]);
}

// node_modules/d3-polygon/src/hull.js
function lexicographicOrder(a6, b10) {
  return a6[0] - b10[0] || a6[1] - b10[1];
}
function computeUpperHullIndexes(points) {
  const n2 = points.length, indexes2 = [0, 1];
  let size = 2, i4;
  for (i4 = 2; i4 < n2; ++i4) {
    while (size > 1 && cross_default(points[indexes2[size - 2]], points[indexes2[size - 1]], points[i4]) <= 0)
      --size;
    indexes2[size++] = i4;
  }
  return indexes2.slice(0, size);
}
function hull_default(points) {
  if ((n2 = points.length) < 3)
    return null;
  var i4, n2, sortedPoints = new Array(n2), flippedPoints = new Array(n2);
  for (i4 = 0; i4 < n2; ++i4)
    sortedPoints[i4] = [+points[i4][0], +points[i4][1], i4];
  sortedPoints.sort(lexicographicOrder);
  for (i4 = 0; i4 < n2; ++i4)
    flippedPoints[i4] = [sortedPoints[i4][0], -sortedPoints[i4][1]];
  var upperIndexes = computeUpperHullIndexes(sortedPoints), lowerIndexes = computeUpperHullIndexes(flippedPoints);
  var skipLeft = lowerIndexes[0] === upperIndexes[0], skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1], hull = [];
  for (i4 = upperIndexes.length - 1; i4 >= 0; --i4)
    hull.push(points[sortedPoints[upperIndexes[i4]][2]]);
  for (i4 = +skipLeft; i4 < lowerIndexes.length - skipRight; ++i4)
    hull.push(points[sortedPoints[lowerIndexes[i4]][2]]);
  return hull;
}

// node_modules/d3-polygon/src/contains.js
function contains_default3(polygon, point6) {
  var n2 = polygon.length, p3 = polygon[n2 - 1], x6 = point6[0], y7 = point6[1], x06 = p3[0], y06 = p3[1], x12, y12, inside = false;
  for (var i4 = 0; i4 < n2; ++i4) {
    p3 = polygon[i4], x12 = p3[0], y12 = p3[1];
    if (y12 > y7 !== y06 > y7 && x6 < (x06 - x12) * (y7 - y12) / (y06 - y12) + x12)
      inside = !inside;
    x06 = x12, y06 = y12;
  }
  return inside;
}

// node_modules/d3-polygon/src/length.js
function length_default2(polygon) {
  var i4 = -1, n2 = polygon.length, b10 = polygon[n2 - 1], xa, ya, xb = b10[0], yb = b10[1], perimeter = 0;
  while (++i4 < n2) {
    xa = xb;
    ya = yb;
    b10 = polygon[i4];
    xb = b10[0];
    yb = b10[1];
    xa -= xb;
    ya -= yb;
    perimeter += Math.hypot(xa, ya);
  }
  return perimeter;
}

// node_modules/d3-random/src/defaultSource.js
var defaultSource_default = Math.random;

// node_modules/d3-random/src/uniform.js
var uniform_default = function sourceRandomUniform(source) {
  function randomUniform(min4, max5) {
    min4 = min4 == null ? 0 : +min4;
    max5 = max5 == null ? 1 : +max5;
    if (arguments.length === 1)
      max5 = min4, min4 = 0;
    else
      max5 -= min4;
    return function() {
      return source() * max5 + min4;
    };
  }
  randomUniform.source = sourceRandomUniform;
  return randomUniform;
}(defaultSource_default);

// node_modules/d3-random/src/int.js
var int_default = function sourceRandomInt(source) {
  function randomInt(min4, max5) {
    if (arguments.length < 2)
      max5 = min4, min4 = 0;
    min4 = Math.floor(min4);
    max5 = Math.floor(max5) - min4;
    return function() {
      return Math.floor(source() * max5 + min4);
    };
  }
  randomInt.source = sourceRandomInt;
  return randomInt;
}(defaultSource_default);

// node_modules/d3-random/src/normal.js
var normal_default = function sourceRandomNormal(source) {
  function randomNormal(mu, sigma) {
    var x6, r4;
    mu = mu == null ? 0 : +mu;
    sigma = sigma == null ? 1 : +sigma;
    return function() {
      var y7;
      if (x6 != null)
        y7 = x6, x6 = null;
      else
        do {
          x6 = source() * 2 - 1;
          y7 = source() * 2 - 1;
          r4 = x6 * x6 + y7 * y7;
        } while (!r4 || r4 > 1);
      return mu + sigma * y7 * Math.sqrt(-2 * Math.log(r4) / r4);
    };
  }
  randomNormal.source = sourceRandomNormal;
  return randomNormal;
}(defaultSource_default);

// node_modules/d3-random/src/logNormal.js
var logNormal_default = function sourceRandomLogNormal(source) {
  var N2 = normal_default.source(source);
  function randomLogNormal() {
    var randomNormal = N2.apply(this, arguments);
    return function() {
      return Math.exp(randomNormal());
    };
  }
  randomLogNormal.source = sourceRandomLogNormal;
  return randomLogNormal;
}(defaultSource_default);

// node_modules/d3-random/src/irwinHall.js
var irwinHall_default = function sourceRandomIrwinHall(source) {
  function randomIrwinHall(n2) {
    if ((n2 = +n2) <= 0)
      return () => 0;
    return function() {
      for (var sum3 = 0, i4 = n2; i4 > 1; --i4)
        sum3 += source();
      return sum3 + i4 * source();
    };
  }
  randomIrwinHall.source = sourceRandomIrwinHall;
  return randomIrwinHall;
}(defaultSource_default);

// node_modules/d3-random/src/bates.js
var bates_default = function sourceRandomBates(source) {
  var I2 = irwinHall_default.source(source);
  function randomBates(n2) {
    if ((n2 = +n2) === 0)
      return source;
    var randomIrwinHall = I2(n2);
    return function() {
      return randomIrwinHall() / n2;
    };
  }
  randomBates.source = sourceRandomBates;
  return randomBates;
}(defaultSource_default);

// node_modules/d3-random/src/exponential.js
var exponential_default = function sourceRandomExponential(source) {
  function randomExponential(lambda) {
    return function() {
      return -Math.log1p(-source()) / lambda;
    };
  }
  randomExponential.source = sourceRandomExponential;
  return randomExponential;
}(defaultSource_default);

// node_modules/d3-random/src/pareto.js
var pareto_default = function sourceRandomPareto(source) {
  function randomPareto(alpha) {
    if ((alpha = +alpha) < 0)
      throw new RangeError("invalid alpha");
    alpha = 1 / -alpha;
    return function() {
      return Math.pow(1 - source(), alpha);
    };
  }
  randomPareto.source = sourceRandomPareto;
  return randomPareto;
}(defaultSource_default);

// node_modules/d3-random/src/bernoulli.js
var bernoulli_default = function sourceRandomBernoulli(source) {
  function randomBernoulli(p3) {
    if ((p3 = +p3) < 0 || p3 > 1)
      throw new RangeError("invalid p");
    return function() {
      return Math.floor(source() + p3);
    };
  }
  randomBernoulli.source = sourceRandomBernoulli;
  return randomBernoulli;
}(defaultSource_default);

// node_modules/d3-random/src/geometric.js
var geometric_default = function sourceRandomGeometric(source) {
  function randomGeometric(p3) {
    if ((p3 = +p3) < 0 || p3 > 1)
      throw new RangeError("invalid p");
    if (p3 === 0)
      return () => Infinity;
    if (p3 === 1)
      return () => 1;
    p3 = Math.log1p(-p3);
    return function() {
      return 1 + Math.floor(Math.log1p(-source()) / p3);
    };
  }
  randomGeometric.source = sourceRandomGeometric;
  return randomGeometric;
}(defaultSource_default);

// node_modules/d3-random/src/gamma.js
var gamma_default = function sourceRandomGamma(source) {
  var randomNormal = normal_default.source(source)();
  function randomGamma(k4, theta) {
    if ((k4 = +k4) < 0)
      throw new RangeError("invalid k");
    if (k4 === 0)
      return () => 0;
    theta = theta == null ? 1 : +theta;
    if (k4 === 1)
      return () => -Math.log1p(-source()) * theta;
    var d4 = (k4 < 1 ? k4 + 1 : k4) - 1 / 3, c8 = 1 / (3 * Math.sqrt(d4)), multiplier = k4 < 1 ? () => Math.pow(source(), 1 / k4) : () => 1;
    return function() {
      do {
        do {
          var x6 = randomNormal(), v3 = 1 + c8 * x6;
        } while (v3 <= 0);
        v3 *= v3 * v3;
        var u4 = 1 - source();
      } while (u4 >= 1 - 0.0331 * x6 * x6 * x6 * x6 && Math.log(u4) >= 0.5 * x6 * x6 + d4 * (1 - v3 + Math.log(v3)));
      return d4 * v3 * multiplier() * theta;
    };
  }
  randomGamma.source = sourceRandomGamma;
  return randomGamma;
}(defaultSource_default);

// node_modules/d3-random/src/beta.js
var beta_default = function sourceRandomBeta(source) {
  var G = gamma_default.source(source);
  function randomBeta(alpha, beta) {
    var X3 = G(alpha), Y3 = G(beta);
    return function() {
      var x6 = X3();
      return x6 === 0 ? 0 : x6 / (x6 + Y3());
    };
  }
  randomBeta.source = sourceRandomBeta;
  return randomBeta;
}(defaultSource_default);

// node_modules/d3-random/src/binomial.js
var binomial_default = function sourceRandomBinomial(source) {
  var G = geometric_default.source(source), B3 = beta_default.source(source);
  function randomBinomial(n2, p3) {
    n2 = +n2;
    if ((p3 = +p3) >= 1)
      return () => n2;
    if (p3 <= 0)
      return () => 0;
    return function() {
      var acc = 0, nn = n2, pp = p3;
      while (nn * pp > 16 && nn * (1 - pp) > 16) {
        var i4 = Math.floor((nn + 1) * pp), y7 = B3(i4, nn - i4 + 1)();
        if (y7 <= pp) {
          acc += i4;
          nn -= i4;
          pp = (pp - y7) / (1 - y7);
        } else {
          nn = i4 - 1;
          pp /= y7;
        }
      }
      var sign3 = pp < 0.5, pFinal = sign3 ? pp : 1 - pp, g3 = G(pFinal);
      for (var s5 = g3(), k4 = 0; s5 <= nn; ++k4)
        s5 += g3();
      return acc + (sign3 ? k4 : nn - k4);
    };
  }
  randomBinomial.source = sourceRandomBinomial;
  return randomBinomial;
}(defaultSource_default);

// node_modules/d3-random/src/weibull.js
var weibull_default = function sourceRandomWeibull(source) {
  function randomWeibull(k4, a6, b10) {
    var outerFunc;
    if ((k4 = +k4) === 0) {
      outerFunc = (x6) => -Math.log(x6);
    } else {
      k4 = 1 / k4;
      outerFunc = (x6) => Math.pow(x6, k4);
    }
    a6 = a6 == null ? 0 : +a6;
    b10 = b10 == null ? 1 : +b10;
    return function() {
      return a6 + b10 * outerFunc(-Math.log1p(-source()));
    };
  }
  randomWeibull.source = sourceRandomWeibull;
  return randomWeibull;
}(defaultSource_default);

// node_modules/d3-random/src/cauchy.js
var cauchy_default = function sourceRandomCauchy(source) {
  function randomCauchy(a6, b10) {
    a6 = a6 == null ? 0 : +a6;
    b10 = b10 == null ? 1 : +b10;
    return function() {
      return a6 + b10 * Math.tan(Math.PI * source());
    };
  }
  randomCauchy.source = sourceRandomCauchy;
  return randomCauchy;
}(defaultSource_default);

// node_modules/d3-random/src/logistic.js
var logistic_default = function sourceRandomLogistic(source) {
  function randomLogistic(a6, b10) {
    a6 = a6 == null ? 0 : +a6;
    b10 = b10 == null ? 1 : +b10;
    return function() {
      var u4 = source();
      return a6 + b10 * Math.log(u4 / (1 - u4));
    };
  }
  randomLogistic.source = sourceRandomLogistic;
  return randomLogistic;
}(defaultSource_default);

// node_modules/d3-random/src/poisson.js
var poisson_default = function sourceRandomPoisson(source) {
  var G = gamma_default.source(source), B3 = binomial_default.source(source);
  function randomPoisson(lambda) {
    return function() {
      var acc = 0, l4 = lambda;
      while (l4 > 16) {
        var n2 = Math.floor(0.875 * l4), t4 = G(n2)();
        if (t4 > l4)
          return acc + B3(n2 - 1, l4 / t4)();
        acc += n2;
        l4 -= t4;
      }
      for (var s5 = -Math.log1p(-source()), k4 = 0; s5 <= l4; ++k4)
        s5 -= Math.log1p(-source());
      return acc + k4;
    };
  }
  randomPoisson.source = sourceRandomPoisson;
  return randomPoisson;
}(defaultSource_default);

// node_modules/d3-random/src/lcg.js
var mul = 1664525;
var inc = 1013904223;
var eps = 1 / 4294967296;
function lcg(seed = Math.random()) {
  let state = (0 <= seed && seed < 1 ? seed / eps : Math.abs(seed)) | 0;
  return () => (state = mul * state + inc | 0, eps * (state >>> 0));
}

// node_modules/d3-scale/src/init.js
function initRange(domain, range3) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range3).domain(domain);
      break;
  }
  return this;
}
function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      if (typeof domain === "function")
        this.interpolator(domain);
      else
        this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function")
        this.interpolator(interpolator);
      else
        this.range(interpolator);
      break;
    }
  }
  return this;
}

// node_modules/d3-scale/src/ordinal.js
var implicit = Symbol("implicit");
function ordinal() {
  var index3 = /* @__PURE__ */ new Map(), domain = [], range3 = [], unknown = implicit;
  function scale(d4) {
    var key = d4 + "", i4 = index3.get(key);
    if (!i4) {
      if (unknown !== implicit)
        return unknown;
      index3.set(key, i4 = domain.push(d4));
    }
    return range3[(i4 - 1) % range3.length];
  }
  scale.domain = function(_2) {
    if (!arguments.length)
      return domain.slice();
    domain = [], index3 = /* @__PURE__ */ new Map();
    for (const value of _2) {
      const key = value + "";
      if (index3.has(key))
        continue;
      index3.set(key, domain.push(value));
    }
    return scale;
  };
  scale.range = function(_2) {
    return arguments.length ? (range3 = Array.from(_2), scale) : range3.slice();
  };
  scale.unknown = function(_2) {
    return arguments.length ? (unknown = _2, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range3).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/band.js
function band() {
  var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n2 = domain().length, reverse2 = r1 < r0, start2 = reverse2 ? r1 : r0, stop = reverse2 ? r0 : r1;
    step = (stop - start2) / Math.max(1, n2 - paddingInner + paddingOuter * 2);
    if (round)
      step = Math.floor(step);
    start2 += (stop - start2 - step * (n2 - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round)
      start2 = Math.round(start2), bandwidth = Math.round(bandwidth);
    var values = range_default(n2).map(function(i4) {
      return start2 + step * i4;
    });
    return ordinalRange(reverse2 ? values.reverse() : values);
  }
  scale.domain = function(_2) {
    return arguments.length ? (domain(_2), rescale()) : domain();
  };
  scale.range = function(_2) {
    return arguments.length ? ([r0, r1] = _2, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };
  scale.rangeRound = function(_2) {
    return [r0, r1] = _2, r0 = +r0, r1 = +r1, round = true, rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_2) {
    return arguments.length ? (round = !!_2, rescale()) : round;
  };
  scale.padding = function(_2) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_2), rescale()) : paddingInner;
  };
  scale.paddingInner = function(_2) {
    return arguments.length ? (paddingInner = Math.min(1, _2), rescale()) : paddingInner;
  };
  scale.paddingOuter = function(_2) {
    return arguments.length ? (paddingOuter = +_2, rescale()) : paddingOuter;
  };
  scale.align = function(_2) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _2)), rescale()) : align;
  };
  scale.copy = function() {
    return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}
function pointish(scale) {
  var copy3 = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;
  scale.copy = function() {
    return pointish(copy3());
  };
  return scale;
}
function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

// node_modules/d3-scale/src/constant.js
function constants(x6) {
  return function() {
    return x6;
  };
}

// node_modules/d3-scale/src/number.js
function number3(x6) {
  return +x6;
}

// node_modules/d3-scale/src/continuous.js
var unit = [0, 1];
function identity2(x6) {
  return x6;
}
function normalize(a6, b10) {
  return (b10 -= a6 = +a6) ? function(x6) {
    return (x6 - a6) / b10;
  } : constants(isNaN(b10) ? NaN : 0.5);
}
function clamper(a6, b10) {
  var t4;
  if (a6 > b10)
    t4 = a6, a6 = b10, b10 = t4;
  return function(x6) {
    return Math.max(a6, Math.min(b10, x6));
  };
}
function bimap(domain, range3, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range3[0], r1 = range3[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x6) {
    return r0(d0(x6));
  };
}
function polymap(domain, range3, interpolate) {
  var j3 = Math.min(domain.length, range3.length) - 1, d4 = new Array(j3), r4 = new Array(j3), i4 = -1;
  if (domain[j3] < domain[0]) {
    domain = domain.slice().reverse();
    range3 = range3.slice().reverse();
  }
  while (++i4 < j3) {
    d4[i4] = normalize(domain[i4], domain[i4 + 1]);
    r4[i4] = interpolate(range3[i4], range3[i4 + 1]);
  }
  return function(x6) {
    var i5 = bisect_default(domain, x6, 1, j3) - 1;
    return r4[i5](d4[i5](x6));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer2() {
  var domain = unit, range3 = unit, interpolate = value_default, transform2, untransform, unknown, clamp = identity2, piecewise2, output, input;
  function rescale() {
    var n2 = Math.min(domain.length, range3.length);
    if (clamp !== identity2)
      clamp = clamper(domain[0], domain[n2 - 1]);
    piecewise2 = n2 > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x6) {
    return x6 == null || isNaN(x6 = +x6) ? unknown : (output || (output = piecewise2(domain.map(transform2), range3, interpolate)))(transform2(clamp(x6)));
  }
  scale.invert = function(y7) {
    return clamp(untransform((input || (input = piecewise2(range3, domain.map(transform2), number_default2)))(y7)));
  };
  scale.domain = function(_2) {
    return arguments.length ? (domain = Array.from(_2, number3), rescale()) : domain.slice();
  };
  scale.range = function(_2) {
    return arguments.length ? (range3 = Array.from(_2), rescale()) : range3.slice();
  };
  scale.rangeRound = function(_2) {
    return range3 = Array.from(_2), interpolate = round_default, rescale();
  };
  scale.clamp = function(_2) {
    return arguments.length ? (clamp = _2 ? true : identity2, rescale()) : clamp !== identity2;
  };
  scale.interpolate = function(_2) {
    return arguments.length ? (interpolate = _2, rescale()) : interpolate;
  };
  scale.unknown = function(_2) {
    return arguments.length ? (unknown = _2, scale) : unknown;
  };
  return function(t4, u4) {
    transform2 = t4, untransform = u4;
    return rescale();
  };
}
function continuous() {
  return transformer2()(identity2, identity2);
}

// node_modules/d3-scale/src/tickFormat.js
function tickFormat(start2, stop, count3, specifier) {
  var step = tickStep(start2, stop, count3), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start2), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value)))
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start2), Math.abs(stop)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

// node_modules/d3-scale/src/linear.js
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count3) {
    var d4 = domain();
    return ticks_default(d4[0], d4[d4.length - 1], count3 == null ? 10 : count3);
  };
  scale.tickFormat = function(count3, specifier) {
    var d4 = domain();
    return tickFormat(d4[0], d4[d4.length - 1], count3 == null ? 10 : count3, specifier);
  };
  scale.nice = function(count3) {
    if (count3 == null)
      count3 = 10;
    var d4 = domain();
    var i0 = 0;
    var i1 = d4.length - 1;
    var start2 = d4[i0];
    var stop = d4[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start2) {
      step = start2, start2 = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start2, stop, count3);
      if (step === prestep) {
        d4[i0] = start2;
        d4[i1] = stop;
        return domain(d4);
      } else if (step > 0) {
        start2 = Math.floor(start2 / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start2 = Math.ceil(start2 * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear3() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear3());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

// node_modules/d3-scale/src/identity.js
function identity3(domain) {
  var unknown;
  function scale(x6) {
    return x6 == null || isNaN(x6 = +x6) ? unknown : x6;
  }
  scale.invert = scale;
  scale.domain = scale.range = function(_2) {
    return arguments.length ? (domain = Array.from(_2, number3), scale) : domain.slice();
  };
  scale.unknown = function(_2) {
    return arguments.length ? (unknown = _2, scale) : unknown;
  };
  scale.copy = function() {
    return identity3(domain).unknown(unknown);
  };
  domain = arguments.length ? Array.from(domain, number3) : [0, 1];
  return linearish(scale);
}

// node_modules/d3-scale/src/nice.js
function nice2(domain, interval2) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x06 = domain[i0], x12 = domain[i1], t4;
  if (x12 < x06) {
    t4 = i0, i0 = i1, i1 = t4;
    t4 = x06, x06 = x12, x12 = t4;
  }
  domain[i0] = interval2.floor(x06);
  domain[i1] = interval2.ceil(x12);
  return domain;
}

// node_modules/d3-scale/src/log.js
function transformLog(x6) {
  return Math.log(x6);
}
function transformExp(x6) {
  return Math.exp(x6);
}
function transformLogn(x6) {
  return -Math.log(-x6);
}
function transformExpn(x6) {
  return -Math.exp(-x6);
}
function pow10(x6) {
  return isFinite(x6) ? +("1e" + x6) : x6 < 0 ? 0 : x6;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : function(x6) {
    return Math.pow(base, x6);
  };
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function(x6) {
    return Math.log(x6) / base;
  });
}
function reflect(f4) {
  return function(x6) {
    return -f4(-x6);
  };
}
function loggish(transform2) {
  var scale = transform2(transformLog, transformExp), domain = scale.domain, base = 10, logs, pows;
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform2(transformLogn, transformExpn);
    } else {
      transform2(transformLog, transformExp);
    }
    return scale;
  }
  scale.base = function(_2) {
    return arguments.length ? (base = +_2, rescale()) : base;
  };
  scale.domain = function(_2) {
    return arguments.length ? (domain(_2), rescale()) : domain();
  };
  scale.ticks = function(count3) {
    var d4 = domain(), u4 = d4[0], v3 = d4[d4.length - 1], r4;
    if (r4 = v3 < u4)
      i4 = u4, u4 = v3, v3 = i4;
    var i4 = logs(u4), j3 = logs(v3), p3, k4, t4, n2 = count3 == null ? 10 : +count3, z2 = [];
    if (!(base % 1) && j3 - i4 < n2) {
      i4 = Math.floor(i4), j3 = Math.ceil(j3);
      if (u4 > 0)
        for (; i4 <= j3; ++i4) {
          for (k4 = 1, p3 = pows(i4); k4 < base; ++k4) {
            t4 = p3 * k4;
            if (t4 < u4)
              continue;
            if (t4 > v3)
              break;
            z2.push(t4);
          }
        }
      else
        for (; i4 <= j3; ++i4) {
          for (k4 = base - 1, p3 = pows(i4); k4 >= 1; --k4) {
            t4 = p3 * k4;
            if (t4 < u4)
              continue;
            if (t4 > v3)
              break;
            z2.push(t4);
          }
        }
      if (z2.length * 2 < n2)
        z2 = ticks_default(u4, v3, n2);
    } else {
      z2 = ticks_default(i4, j3, Math.min(j3 - i4, n2)).map(pows);
    }
    return r4 ? z2.reverse() : z2;
  };
  scale.tickFormat = function(count3, specifier) {
    if (specifier == null)
      specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function")
      specifier = format(specifier);
    if (count3 === Infinity)
      return specifier;
    if (count3 == null)
      count3 = 10;
    var k4 = Math.max(1, base * count3 / scale.ticks().length);
    return function(d4) {
      var i4 = d4 / pows(Math.round(logs(d4)));
      if (i4 * base < base - 0.5)
        i4 *= base;
      return i4 <= k4 ? specifier(d4) : "";
    };
  };
  scale.nice = function() {
    return domain(nice2(domain(), {
      floor: function(x6) {
        return pows(Math.floor(logs(x6)));
      },
      ceil: function(x6) {
        return pows(Math.ceil(logs(x6)));
      }
    }));
  };
  return scale;
}
function log2() {
  var scale = loggish(transformer2()).domain([1, 10]);
  scale.copy = function() {
    return copy(scale, log2()).base(scale.base());
  };
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/symlog.js
function transformSymlog(c8) {
  return function(x6) {
    return Math.sign(x6) * Math.log1p(Math.abs(x6 / c8));
  };
}
function transformSymexp(c8) {
  return function(x6) {
    return Math.sign(x6) * Math.expm1(Math.abs(x6)) * c8;
  };
}
function symlogish(transform2) {
  var c8 = 1, scale = transform2(transformSymlog(c8), transformSymexp(c8));
  scale.constant = function(_2) {
    return arguments.length ? transform2(transformSymlog(c8 = +_2), transformSymexp(c8)) : c8;
  };
  return linearish(scale);
}
function symlog() {
  var scale = symlogish(transformer2());
  scale.copy = function() {
    return copy(scale, symlog()).constant(scale.constant());
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-scale/src/pow.js
function transformPow(exponent2) {
  return function(x6) {
    return x6 < 0 ? -Math.pow(-x6, exponent2) : Math.pow(x6, exponent2);
  };
}
function transformSqrt(x6) {
  return x6 < 0 ? -Math.sqrt(-x6) : Math.sqrt(x6);
}
function transformSquare(x6) {
  return x6 < 0 ? -x6 * x6 : x6 * x6;
}
function powish(transform2) {
  var scale = transform2(identity2, identity2), exponent2 = 1;
  function rescale() {
    return exponent2 === 1 ? transform2(identity2, identity2) : exponent2 === 0.5 ? transform2(transformSqrt, transformSquare) : transform2(transformPow(exponent2), transformPow(1 / exponent2));
  }
  scale.exponent = function(_2) {
    return arguments.length ? (exponent2 = +_2, rescale()) : exponent2;
  };
  return linearish(scale);
}
function pow3() {
  var scale = powish(transformer2());
  scale.copy = function() {
    return copy(scale, pow3()).exponent(scale.exponent());
  };
  initRange.apply(scale, arguments);
  return scale;
}
function sqrt2() {
  return pow3.apply(null, arguments).exponent(0.5);
}

// node_modules/d3-scale/src/radial.js
function square(x6) {
  return Math.sign(x6) * x6 * x6;
}
function unsquare(x6) {
  return Math.sign(x6) * Math.sqrt(Math.abs(x6));
}
function radial() {
  var squared = continuous(), range3 = [0, 1], round = false, unknown;
  function scale(x6) {
    var y7 = unsquare(squared(x6));
    return isNaN(y7) ? unknown : round ? Math.round(y7) : y7;
  }
  scale.invert = function(y7) {
    return squared.invert(square(y7));
  };
  scale.domain = function(_2) {
    return arguments.length ? (squared.domain(_2), scale) : squared.domain();
  };
  scale.range = function(_2) {
    return arguments.length ? (squared.range((range3 = Array.from(_2, number3)).map(square)), scale) : range3.slice();
  };
  scale.rangeRound = function(_2) {
    return scale.range(_2).round(true);
  };
  scale.round = function(_2) {
    return arguments.length ? (round = !!_2, scale) : round;
  };
  scale.clamp = function(_2) {
    return arguments.length ? (squared.clamp(_2), scale) : squared.clamp();
  };
  scale.unknown = function(_2) {
    return arguments.length ? (unknown = _2, scale) : unknown;
  };
  scale.copy = function() {
    return radial(squared.domain(), range3).round(round).clamp(squared.clamp()).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

// node_modules/d3-scale/src/quantile.js
function quantile2() {
  var domain = [], range3 = [], thresholds = [], unknown;
  function rescale() {
    var i4 = 0, n2 = Math.max(1, range3.length);
    thresholds = new Array(n2 - 1);
    while (++i4 < n2)
      thresholds[i4 - 1] = quantileSorted(domain, i4 / n2);
    return scale;
  }
  function scale(x6) {
    return x6 == null || isNaN(x6 = +x6) ? unknown : range3[bisect_default(thresholds, x6)];
  }
  scale.invertExtent = function(y7) {
    var i4 = range3.indexOf(y7);
    return i4 < 0 ? [NaN, NaN] : [
      i4 > 0 ? thresholds[i4 - 1] : domain[0],
      i4 < thresholds.length ? thresholds[i4] : domain[domain.length - 1]
    ];
  };
  scale.domain = function(_2) {
    if (!arguments.length)
      return domain.slice();
    domain = [];
    for (let d4 of _2)
      if (d4 != null && !isNaN(d4 = +d4))
        domain.push(d4);
    domain.sort(ascending_default);
    return rescale();
  };
  scale.range = function(_2) {
    return arguments.length ? (range3 = Array.from(_2), rescale()) : range3.slice();
  };
  scale.unknown = function(_2) {
    return arguments.length ? (unknown = _2, scale) : unknown;
  };
  scale.quantiles = function() {
    return thresholds.slice();
  };
  scale.copy = function() {
    return quantile2().domain(domain).range(range3).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-scale/src/quantize.js
function quantize() {
  var x06 = 0, x12 = 1, n2 = 1, domain = [0.5], range3 = [0, 1], unknown;
  function scale(x6) {
    return x6 != null && x6 <= x6 ? range3[bisect_default(domain, x6, 0, n2)] : unknown;
  }
  function rescale() {
    var i4 = -1;
    domain = new Array(n2);
    while (++i4 < n2)
      domain[i4] = ((i4 + 1) * x12 - (i4 - n2) * x06) / (n2 + 1);
    return scale;
  }
  scale.domain = function(_2) {
    return arguments.length ? ([x06, x12] = _2, x06 = +x06, x12 = +x12, rescale()) : [x06, x12];
  };
  scale.range = function(_2) {
    return arguments.length ? (n2 = (range3 = Array.from(_2)).length - 1, rescale()) : range3.slice();
  };
  scale.invertExtent = function(y7) {
    var i4 = range3.indexOf(y7);
    return i4 < 0 ? [NaN, NaN] : i4 < 1 ? [x06, domain[0]] : i4 >= n2 ? [domain[n2 - 1], x12] : [domain[i4 - 1], domain[i4]];
  };
  scale.unknown = function(_2) {
    return arguments.length ? (unknown = _2, scale) : scale;
  };
  scale.thresholds = function() {
    return domain.slice();
  };
  scale.copy = function() {
    return quantize().domain([x06, x12]).range(range3).unknown(unknown);
  };
  return initRange.apply(linearish(scale), arguments);
}

// node_modules/d3-scale/src/threshold.js
function threshold() {
  var domain = [0.5], range3 = [0, 1], unknown, n2 = 1;
  function scale(x6) {
    return x6 != null && x6 <= x6 ? range3[bisect_default(domain, x6, 0, n2)] : unknown;
  }
  scale.domain = function(_2) {
    return arguments.length ? (domain = Array.from(_2), n2 = Math.min(domain.length, range3.length - 1), scale) : domain.slice();
  };
  scale.range = function(_2) {
    return arguments.length ? (range3 = Array.from(_2), n2 = Math.min(domain.length, range3.length - 1), scale) : range3.slice();
  };
  scale.invertExtent = function(y7) {
    var i4 = range3.indexOf(y7);
    return [domain[i4 - 1], domain[i4]];
  };
  scale.unknown = function(_2) {
    return arguments.length ? (unknown = _2, scale) : unknown;
  };
  scale.copy = function() {
    return threshold().domain(domain).range(range3).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-time/src/interval.js
var t02 = new Date();
var t12 = new Date();
function newInterval(floori, offseti, count3, field) {
  function interval2(date2) {
    return floori(date2 = arguments.length === 0 ? new Date() : new Date(+date2)), date2;
  }
  interval2.floor = function(date2) {
    return floori(date2 = new Date(+date2)), date2;
  };
  interval2.ceil = function(date2) {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval2.round = function(date2) {
    var d0 = interval2(date2), d1 = interval2.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval2.offset = function(date2, step) {
    return offseti(date2 = new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval2.range = function(start2, stop, step) {
    var range3 = [], previous;
    start2 = interval2.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop) || !(step > 0))
      return range3;
    do
      range3.push(previous = new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop);
    return range3;
  };
  interval2.filter = function(test) {
    return newInterval(function(date2) {
      if (date2 >= date2)
        while (floori(date2), !test(date2))
          date2.setTime(date2 - 1);
    }, function(date2, step) {
      if (date2 >= date2) {
        if (step < 0)
          while (++step <= 0) {
            while (offseti(date2, -1), !test(date2)) {
            }
          }
        else
          while (--step >= 0) {
            while (offseti(date2, 1), !test(date2)) {
            }
          }
      }
    });
  };
  if (count3) {
    interval2.count = function(start2, end) {
      t02.setTime(+start2), t12.setTime(+end);
      floori(t02), floori(t12);
      return Math.floor(count3(t02, t12));
    };
    interval2.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval2 : interval2.filter(field ? function(d4) {
        return field(d4) % step === 0;
      } : function(d4) {
        return interval2.count(0, d4) % step === 0;
      });
    };
  }
  return interval2;
}

// node_modules/d3-time/src/millisecond.js
var millisecond = newInterval(function() {
}, function(date2, step) {
  date2.setTime(+date2 + step);
}, function(start2, end) {
  return end - start2;
});
millisecond.every = function(k4) {
  k4 = Math.floor(k4);
  if (!isFinite(k4) || !(k4 > 0))
    return null;
  if (!(k4 > 1))
    return millisecond;
  return newInterval(function(date2) {
    date2.setTime(Math.floor(date2 / k4) * k4);
  }, function(date2, step) {
    date2.setTime(+date2 + step * k4);
  }, function(start2, end) {
    return (end - start2) / k4;
  });
};
var millisecond_default = millisecond;
var milliseconds = millisecond.range;

// node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

// node_modules/d3-time/src/second.js
var second = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds());
}, function(date2, step) {
  date2.setTime(+date2 + step * durationSecond);
}, function(start2, end) {
  return (end - start2) / durationSecond;
}, function(date2) {
  return date2.getUTCSeconds();
});
var second_default = second;
var seconds = second.range;

// node_modules/d3-time/src/minute.js
var minute = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute);
}, function(start2, end) {
  return (end - start2) / durationMinute;
}, function(date2) {
  return date2.getMinutes();
});
var minute_default = minute;
var minutes = minute.range;

// node_modules/d3-time/src/hour.js
var hour = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour);
}, function(start2, end) {
  return (end - start2) / durationHour;
}, function(date2) {
  return date2.getHours();
});
var hour_default = hour;
var hours = hour.range;

// node_modules/d3-time/src/day.js
var day = newInterval((date2) => date2.setHours(0, 0, 0, 0), (date2, step) => date2.setDate(date2.getDate() + step), (start2, end) => (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationDay, (date2) => date2.getDate() - 1);
var day_default = day;
var days = day.range;

// node_modules/d3-time/src/week.js
function weekday(i4) {
  return newInterval(function(date2) {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i4) % 7);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setDate(date2.getDate() + step * 7);
  }, function(start2, end) {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);
var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

// node_modules/d3-time/src/month.js
var month = newInterval(function(date2) {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setMonth(date2.getMonth() + step);
}, function(start2, end) {
  return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
}, function(date2) {
  return date2.getMonth();
});
var month_default = month;
var months = month.range;

// node_modules/d3-time/src/year.js
var year = newInterval(function(date2) {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setFullYear(date2.getFullYear() + step);
}, function(start2, end) {
  return end.getFullYear() - start2.getFullYear();
}, function(date2) {
  return date2.getFullYear();
});
year.every = function(k4) {
  return !isFinite(k4 = Math.floor(k4)) || !(k4 > 0) ? null : newInterval(function(date2) {
    date2.setFullYear(Math.floor(date2.getFullYear() / k4) * k4);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setFullYear(date2.getFullYear() + step * k4);
  });
};
var year_default = year;
var years = year.range;

// node_modules/d3-time/src/utcMinute.js
var utcMinute = newInterval(function(date2) {
  date2.setUTCSeconds(0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute);
}, function(start2, end) {
  return (end - start2) / durationMinute;
}, function(date2) {
  return date2.getUTCMinutes();
});
var utcMinute_default = utcMinute;
var utcMinutes = utcMinute.range;

// node_modules/d3-time/src/utcHour.js
var utcHour = newInterval(function(date2) {
  date2.setUTCMinutes(0, 0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour);
}, function(start2, end) {
  return (end - start2) / durationHour;
}, function(date2) {
  return date2.getUTCHours();
});
var utcHour_default = utcHour;
var utcHours = utcHour.range;

// node_modules/d3-time/src/utcDay.js
var utcDay = newInterval(function(date2) {
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCDate(date2.getUTCDate() + step);
}, function(start2, end) {
  return (end - start2) / durationDay;
}, function(date2) {
  return date2.getUTCDate() - 1;
});
var utcDay_default = utcDay;
var utcDays = utcDay.range;

// node_modules/d3-time/src/utcWeek.js
function utcWeekday(i4) {
  return newInterval(function(date2) {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i4) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, function(start2, end) {
    return (end - start2) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// node_modules/d3-time/src/utcMonth.js
var utcMonth = newInterval(function(date2) {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, function(start2, end) {
  return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, function(date2) {
  return date2.getUTCMonth();
});
var utcMonth_default = utcMonth;
var utcMonths = utcMonth.range;

// node_modules/d3-time/src/utcYear.js
var utcYear = newInterval(function(date2) {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, function(start2, end) {
  return end.getUTCFullYear() - start2.getUTCFullYear();
}, function(date2) {
  return date2.getUTCFullYear();
});
utcYear.every = function(k4) {
  return !isFinite(k4 = Math.floor(k4)) || !(k4 > 0) ? null : newInterval(function(date2) {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k4) * k4);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k4);
  });
};
var utcYear_default = utcYear;
var utcYears = utcYear.range;

// node_modules/d3-time/src/ticks.js
function ticker(year2, month2, week, day2, hour2, minute2) {
  const tickIntervals = [
    [second_default, 1, durationSecond],
    [second_default, 5, 5 * durationSecond],
    [second_default, 15, 15 * durationSecond],
    [second_default, 30, 30 * durationSecond],
    [minute2, 1, durationMinute],
    [minute2, 5, 5 * durationMinute],
    [minute2, 15, 15 * durationMinute],
    [minute2, 30, 30 * durationMinute],
    [hour2, 1, durationHour],
    [hour2, 3, 3 * durationHour],
    [hour2, 6, 6 * durationHour],
    [hour2, 12, 12 * durationHour],
    [day2, 1, durationDay],
    [day2, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month2, 1, durationMonth],
    [month2, 3, 3 * durationMonth],
    [year2, 1, durationYear]
  ];
  function ticks(start2, stop, count3) {
    const reverse2 = stop < start2;
    if (reverse2)
      [start2, stop] = [stop, start2];
    const interval2 = count3 && typeof count3.range === "function" ? count3 : tickInterval(start2, stop, count3);
    const ticks2 = interval2 ? interval2.range(start2, +stop + 1) : [];
    return reverse2 ? ticks2.reverse() : ticks2;
  }
  function tickInterval(start2, stop, count3) {
    const target = Math.abs(stop - start2) / count3;
    const i4 = bisector_default(([, , step2]) => step2).right(tickIntervals, target);
    if (i4 === tickIntervals.length)
      return year2.every(tickStep(start2 / durationYear, stop / durationYear, count3));
    if (i4 === 0)
      return millisecond_default.every(Math.max(tickStep(start2, stop, count3), 1));
    const [t4, step] = tickIntervals[target / tickIntervals[i4 - 1][2] < tickIntervals[i4][2] / target ? i4 - 1 : i4];
    return t4.every(step);
  }
  return [ticks, tickInterval];
}
var [utcTicks, utcTickInterval] = ticker(utcYear_default, utcMonth_default, utcSunday, utcDay_default, utcHour_default, utcMinute_default);
var [timeTicks, timeTickInterval] = ticker(year_default, month_default, sunday, day_default, hour_default, minute_default);

// node_modules/d3-time-format/src/locale.js
function localDate(d4) {
  if (0 <= d4.y && d4.y < 100) {
    var date2 = new Date(-1, d4.m, d4.d, d4.H, d4.M, d4.S, d4.L);
    date2.setFullYear(d4.y);
    return date2;
  }
  return new Date(d4.y, d4.m, d4.d, d4.H, d4.M, d4.S, d4.L);
}
function utcDate(d4) {
  if (0 <= d4.y && d4.y < 100) {
    var date2 = new Date(Date.UTC(-1, d4.m, d4.d, d4.H, d4.M, d4.S, d4.L));
    date2.setUTCFullYear(d4.y);
    return date2;
  }
  return new Date(Date.UTC(d4.y, d4.m, d4.d, d4.H, d4.M, d4.S, d4.L));
}
function newDate(y7, m4, d4) {
  return { y: y7, m: m4, d: d4, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear2,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i4 = -1, j3 = 0, n2 = specifier.length, c8, pad4, format2;
      if (!(date2 instanceof Date))
        date2 = new Date(+date2);
      while (++i4 < n2) {
        if (specifier.charCodeAt(i4) === 37) {
          string.push(specifier.slice(j3, i4));
          if ((pad4 = pads[c8 = specifier.charAt(++i4)]) != null)
            c8 = specifier.charAt(++i4);
          else
            pad4 = c8 === "e" ? " " : "0";
          if (format2 = formats2[c8])
            c8 = format2(date2, pad4);
          string.push(c8);
          j3 = i4 + 1;
        }
      }
      string.push(specifier.slice(j3, i4));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d4 = newDate(1900, void 0, 1), i4 = parseSpecifier(d4, specifier, string += "", 0), week, day2;
      if (i4 != string.length)
        return null;
      if ("Q" in d4)
        return new Date(d4.Q);
      if ("s" in d4)
        return new Date(d4.s * 1e3 + ("L" in d4 ? d4.L : 0));
      if (Z && !("Z" in d4))
        d4.Z = 0;
      if ("p" in d4)
        d4.H = d4.H % 12 + d4.p * 12;
      if (d4.m === void 0)
        d4.m = "q" in d4 ? d4.q : 0;
      if ("V" in d4) {
        if (d4.V < 1 || d4.V > 53)
          return null;
        if (!("w" in d4))
          d4.w = 1;
        if ("Z" in d4) {
          week = utcDate(newDate(d4.y, 0, 1)), day2 = week.getUTCDay();
          week = day2 > 4 || day2 === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay_default.offset(week, (d4.V - 1) * 7);
          d4.y = week.getUTCFullYear();
          d4.m = week.getUTCMonth();
          d4.d = week.getUTCDate() + (d4.w + 6) % 7;
        } else {
          week = localDate(newDate(d4.y, 0, 1)), day2 = week.getDay();
          week = day2 > 4 || day2 === 0 ? monday.ceil(week) : monday(week);
          week = day_default.offset(week, (d4.V - 1) * 7);
          d4.y = week.getFullYear();
          d4.m = week.getMonth();
          d4.d = week.getDate() + (d4.w + 6) % 7;
        }
      } else if ("W" in d4 || "U" in d4) {
        if (!("w" in d4))
          d4.w = "u" in d4 ? d4.u % 7 : "W" in d4 ? 1 : 0;
        day2 = "Z" in d4 ? utcDate(newDate(d4.y, 0, 1)).getUTCDay() : localDate(newDate(d4.y, 0, 1)).getDay();
        d4.m = 0;
        d4.d = "W" in d4 ? (d4.w + 6) % 7 + d4.W * 7 - (day2 + 5) % 7 : d4.w + d4.U * 7 - (day2 + 6) % 7;
      }
      if ("Z" in d4) {
        d4.H += d4.Z / 100 | 0;
        d4.M += d4.Z % 100;
        return utcDate(d4);
      }
      return localDate(d4);
    };
  }
  function parseSpecifier(d4, specifier, string, j3) {
    var i4 = 0, n2 = specifier.length, m4 = string.length, c8, parse;
    while (i4 < n2) {
      if (j3 >= m4)
        return -1;
      c8 = specifier.charCodeAt(i4++);
      if (c8 === 37) {
        c8 = specifier.charAt(i4++);
        parse = parses[c8 in pads ? specifier.charAt(i4++) : c8];
        if (!parse || (j3 = parse(d4, string, j3)) < 0)
          return -1;
      } else if (c8 != string.charCodeAt(j3++)) {
        return -1;
      }
    }
    return j3;
  }
  function parsePeriod(d4, string, i4) {
    var n2 = periodRe.exec(string.slice(i4));
    return n2 ? (d4.p = periodLookup.get(n2[0].toLowerCase()), i4 + n2[0].length) : -1;
  }
  function parseShortWeekday(d4, string, i4) {
    var n2 = shortWeekdayRe.exec(string.slice(i4));
    return n2 ? (d4.w = shortWeekdayLookup.get(n2[0].toLowerCase()), i4 + n2[0].length) : -1;
  }
  function parseWeekday(d4, string, i4) {
    var n2 = weekdayRe.exec(string.slice(i4));
    return n2 ? (d4.w = weekdayLookup.get(n2[0].toLowerCase()), i4 + n2[0].length) : -1;
  }
  function parseShortMonth(d4, string, i4) {
    var n2 = shortMonthRe.exec(string.slice(i4));
    return n2 ? (d4.m = shortMonthLookup.get(n2[0].toLowerCase()), i4 + n2[0].length) : -1;
  }
  function parseMonth(d4, string, i4) {
    var n2 = monthRe.exec(string.slice(i4));
    return n2 ? (d4.m = monthLookup.get(n2[0].toLowerCase()), i4 + n2[0].length) : -1;
  }
  function parseLocaleDateTime(d4, string, i4) {
    return parseSpecifier(d4, locale_dateTime, string, i4);
  }
  function parseLocaleDate(d4, string, i4) {
    return parseSpecifier(d4, locale_date, string, i4);
  }
  function parseLocaleTime(d4, string, i4) {
    return parseSpecifier(d4, locale_time, string, i4);
  }
  function formatShortWeekday(d4) {
    return locale_shortWeekdays[d4.getDay()];
  }
  function formatWeekday(d4) {
    return locale_weekdays[d4.getDay()];
  }
  function formatShortMonth(d4) {
    return locale_shortMonths[d4.getMonth()];
  }
  function formatMonth(d4) {
    return locale_months[d4.getMonth()];
  }
  function formatPeriod(d4) {
    return locale_periods[+(d4.getHours() >= 12)];
  }
  function formatQuarter(d4) {
    return 1 + ~~(d4.getMonth() / 3);
  }
  function formatUTCShortWeekday(d4) {
    return locale_shortWeekdays[d4.getUTCDay()];
  }
  function formatUTCWeekday(d4) {
    return locale_weekdays[d4.getUTCDay()];
  }
  function formatUTCShortMonth(d4) {
    return locale_shortMonths[d4.getUTCMonth()];
  }
  function formatUTCMonth(d4) {
    return locale_months[d4.getUTCMonth()];
  }
  function formatUTCPeriod(d4) {
    return locale_periods[+(d4.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d4) {
    return 1 + ~~(d4.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f4 = newFormat(specifier += "", formats);
      f4.toString = function() {
        return specifier;
      };
      return f4;
    },
    parse: function(specifier) {
      var p3 = newParse(specifier += "", false);
      p3.toString = function() {
        return specifier;
      };
      return p3;
    },
    utcFormat: function(specifier) {
      var f4 = newFormat(specifier += "", utcFormats);
      f4.toString = function() {
        return specifier;
      };
      return f4;
    },
    utcParse: function(specifier) {
      var p3 = newParse(specifier += "", true);
      p3.toString = function() {
        return specifier;
      };
      return p3;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" };
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad2(value, fill, width) {
  var sign3 = value < 0 ? "-" : "", string = (sign3 ? -value : value) + "", length3 = string.length;
  return sign3 + (length3 < width ? new Array(width - length3 + 1).join(fill) + string : string);
}
function requote(s5) {
  return s5.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i4) => [name.toLowerCase(), i4]));
}
function parseWeekdayNumberSunday(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 1));
  return n2 ? (d4.w = +n2[0], i4 + n2[0].length) : -1;
}
function parseWeekdayNumberMonday(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 1));
  return n2 ? (d4.u = +n2[0], i4 + n2[0].length) : -1;
}
function parseWeekNumberSunday(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 2));
  return n2 ? (d4.U = +n2[0], i4 + n2[0].length) : -1;
}
function parseWeekNumberISO(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 2));
  return n2 ? (d4.V = +n2[0], i4 + n2[0].length) : -1;
}
function parseWeekNumberMonday(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 2));
  return n2 ? (d4.W = +n2[0], i4 + n2[0].length) : -1;
}
function parseFullYear(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 4));
  return n2 ? (d4.y = +n2[0], i4 + n2[0].length) : -1;
}
function parseYear(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 2));
  return n2 ? (d4.y = +n2[0] + (+n2[0] > 68 ? 1900 : 2e3), i4 + n2[0].length) : -1;
}
function parseZone(d4, string, i4) {
  var n2 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i4, i4 + 6));
  return n2 ? (d4.Z = n2[1] ? 0 : -(n2[2] + (n2[3] || "00")), i4 + n2[0].length) : -1;
}
function parseQuarter(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 1));
  return n2 ? (d4.q = n2[0] * 3 - 3, i4 + n2[0].length) : -1;
}
function parseMonthNumber(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 2));
  return n2 ? (d4.m = n2[0] - 1, i4 + n2[0].length) : -1;
}
function parseDayOfMonth(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 2));
  return n2 ? (d4.d = +n2[0], i4 + n2[0].length) : -1;
}
function parseDayOfYear(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 3));
  return n2 ? (d4.m = 0, d4.d = +n2[0], i4 + n2[0].length) : -1;
}
function parseHour24(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 2));
  return n2 ? (d4.H = +n2[0], i4 + n2[0].length) : -1;
}
function parseMinutes(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 2));
  return n2 ? (d4.M = +n2[0], i4 + n2[0].length) : -1;
}
function parseSeconds(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 2));
  return n2 ? (d4.S = +n2[0], i4 + n2[0].length) : -1;
}
function parseMilliseconds(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 3));
  return n2 ? (d4.L = +n2[0], i4 + n2[0].length) : -1;
}
function parseMicroseconds(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4, i4 + 6));
  return n2 ? (d4.L = Math.floor(n2[0] / 1e3), i4 + n2[0].length) : -1;
}
function parseLiteralPercent(d4, string, i4) {
  var n2 = percentRe.exec(string.slice(i4, i4 + 1));
  return n2 ? i4 + n2[0].length : -1;
}
function parseUnixTimestamp(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4));
  return n2 ? (d4.Q = +n2[0], i4 + n2[0].length) : -1;
}
function parseUnixTimestampSeconds(d4, string, i4) {
  var n2 = numberRe.exec(string.slice(i4));
  return n2 ? (d4.s = +n2[0], i4 + n2[0].length) : -1;
}
function formatDayOfMonth(d4, p3) {
  return pad2(d4.getDate(), p3, 2);
}
function formatHour24(d4, p3) {
  return pad2(d4.getHours(), p3, 2);
}
function formatHour12(d4, p3) {
  return pad2(d4.getHours() % 12 || 12, p3, 2);
}
function formatDayOfYear(d4, p3) {
  return pad2(1 + day_default.count(year_default(d4), d4), p3, 3);
}
function formatMilliseconds(d4, p3) {
  return pad2(d4.getMilliseconds(), p3, 3);
}
function formatMicroseconds(d4, p3) {
  return formatMilliseconds(d4, p3) + "000";
}
function formatMonthNumber(d4, p3) {
  return pad2(d4.getMonth() + 1, p3, 2);
}
function formatMinutes(d4, p3) {
  return pad2(d4.getMinutes(), p3, 2);
}
function formatSeconds(d4, p3) {
  return pad2(d4.getSeconds(), p3, 2);
}
function formatWeekdayNumberMonday(d4) {
  var day2 = d4.getDay();
  return day2 === 0 ? 7 : day2;
}
function formatWeekNumberSunday(d4, p3) {
  return pad2(sunday.count(year_default(d4) - 1, d4), p3, 2);
}
function dISO(d4) {
  var day2 = d4.getDay();
  return day2 >= 4 || day2 === 0 ? thursday(d4) : thursday.ceil(d4);
}
function formatWeekNumberISO(d4, p3) {
  d4 = dISO(d4);
  return pad2(thursday.count(year_default(d4), d4) + (year_default(d4).getDay() === 4), p3, 2);
}
function formatWeekdayNumberSunday(d4) {
  return d4.getDay();
}
function formatWeekNumberMonday(d4, p3) {
  return pad2(monday.count(year_default(d4) - 1, d4), p3, 2);
}
function formatYear2(d4, p3) {
  return pad2(d4.getFullYear() % 100, p3, 2);
}
function formatYearISO(d4, p3) {
  d4 = dISO(d4);
  return pad2(d4.getFullYear() % 100, p3, 2);
}
function formatFullYear(d4, p3) {
  return pad2(d4.getFullYear() % 1e4, p3, 4);
}
function formatFullYearISO(d4, p3) {
  var day2 = d4.getDay();
  d4 = day2 >= 4 || day2 === 0 ? thursday(d4) : thursday.ceil(d4);
  return pad2(d4.getFullYear() % 1e4, p3, 4);
}
function formatZone(d4) {
  var z2 = d4.getTimezoneOffset();
  return (z2 > 0 ? "-" : (z2 *= -1, "+")) + pad2(z2 / 60 | 0, "0", 2) + pad2(z2 % 60, "0", 2);
}
function formatUTCDayOfMonth(d4, p3) {
  return pad2(d4.getUTCDate(), p3, 2);
}
function formatUTCHour24(d4, p3) {
  return pad2(d4.getUTCHours(), p3, 2);
}
function formatUTCHour12(d4, p3) {
  return pad2(d4.getUTCHours() % 12 || 12, p3, 2);
}
function formatUTCDayOfYear(d4, p3) {
  return pad2(1 + utcDay_default.count(utcYear_default(d4), d4), p3, 3);
}
function formatUTCMilliseconds(d4, p3) {
  return pad2(d4.getUTCMilliseconds(), p3, 3);
}
function formatUTCMicroseconds(d4, p3) {
  return formatUTCMilliseconds(d4, p3) + "000";
}
function formatUTCMonthNumber(d4, p3) {
  return pad2(d4.getUTCMonth() + 1, p3, 2);
}
function formatUTCMinutes(d4, p3) {
  return pad2(d4.getUTCMinutes(), p3, 2);
}
function formatUTCSeconds(d4, p3) {
  return pad2(d4.getUTCSeconds(), p3, 2);
}
function formatUTCWeekdayNumberMonday(d4) {
  var dow = d4.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d4, p3) {
  return pad2(utcSunday.count(utcYear_default(d4) - 1, d4), p3, 2);
}
function UTCdISO(d4) {
  var day2 = d4.getUTCDay();
  return day2 >= 4 || day2 === 0 ? utcThursday(d4) : utcThursday.ceil(d4);
}
function formatUTCWeekNumberISO(d4, p3) {
  d4 = UTCdISO(d4);
  return pad2(utcThursday.count(utcYear_default(d4), d4) + (utcYear_default(d4).getUTCDay() === 4), p3, 2);
}
function formatUTCWeekdayNumberSunday(d4) {
  return d4.getUTCDay();
}
function formatUTCWeekNumberMonday(d4, p3) {
  return pad2(utcMonday.count(utcYear_default(d4) - 1, d4), p3, 2);
}
function formatUTCYear(d4, p3) {
  return pad2(d4.getUTCFullYear() % 100, p3, 2);
}
function formatUTCYearISO(d4, p3) {
  d4 = UTCdISO(d4);
  return pad2(d4.getUTCFullYear() % 100, p3, 2);
}
function formatUTCFullYear(d4, p3) {
  return pad2(d4.getUTCFullYear() % 1e4, p3, 4);
}
function formatUTCFullYearISO(d4, p3) {
  var day2 = d4.getUTCDay();
  d4 = day2 >= 4 || day2 === 0 ? utcThursday(d4) : utcThursday.ceil(d4);
  return pad2(d4.getUTCFullYear() % 1e4, p3, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d4) {
  return +d4;
}
function formatUnixTimestampSeconds(d4) {
  return Math.floor(+d4 / 1e3);
}

// node_modules/d3-time-format/src/defaultLocale.js
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// node_modules/d3-time-format/src/isoFormat.js
var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
function formatIsoNative(date2) {
  return date2.toISOString();
}
var formatIso = Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);
var isoFormat_default = formatIso;

// node_modules/d3-time-format/src/isoParse.js
function parseIsoNative(string) {
  var date2 = new Date(string);
  return isNaN(date2) ? null : date2;
}
var parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);
var isoParse_default = parseIso;

// node_modules/d3-scale/src/time.js
function date(t4) {
  return new Date(t4);
}
function number4(t4) {
  return t4 instanceof Date ? +t4 : +new Date(+t4);
}
function calendar(ticks, tickInterval, year2, month2, week, day2, hour2, minute2, second2, format2) {
  var scale = continuous(), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear4 = format2("%Y");
  function tickFormat2(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute2(date2) < date2 ? formatSecond : hour2(date2) < date2 ? formatMinute : day2(date2) < date2 ? formatHour : month2(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year2(date2) < date2 ? formatMonth : formatYear4)(date2);
  }
  scale.invert = function(y7) {
    return new Date(invert(y7));
  };
  scale.domain = function(_2) {
    return arguments.length ? domain(Array.from(_2, number4)) : domain().map(date);
  };
  scale.ticks = function(interval2) {
    var d4 = domain();
    return ticks(d4[0], d4[d4.length - 1], interval2 == null ? 10 : interval2);
  };
  scale.tickFormat = function(count3, specifier) {
    return specifier == null ? tickFormat2 : format2(specifier);
  };
  scale.nice = function(interval2) {
    var d4 = domain();
    if (!interval2 || typeof interval2.range !== "function")
      interval2 = tickInterval(d4[0], d4[d4.length - 1], interval2 == null ? 10 : interval2);
    return interval2 ? domain(nice2(d4, interval2)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(ticks, tickInterval, year2, month2, week, day2, hour2, minute2, second2, format2));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, year_default, month_default, sunday, day_default, hour_default, minute_default, second_default, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}

// node_modules/d3-scale/src/utcTime.js
function utcTime() {
  return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear_default, utcMonth_default, utcSunday, utcDay_default, utcHour_default, utcMinute_default, second_default, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}

// node_modules/d3-scale/src/sequential.js
function transformer3() {
  var x06 = 0, x12 = 1, t03, t13, k10, transform2, interpolator = identity2, clamp = false, unknown;
  function scale(x6) {
    return x6 == null || isNaN(x6 = +x6) ? unknown : interpolator(k10 === 0 ? 0.5 : (x6 = (transform2(x6) - t03) * k10, clamp ? Math.max(0, Math.min(1, x6)) : x6));
  }
  scale.domain = function(_2) {
    return arguments.length ? ([x06, x12] = _2, t03 = transform2(x06 = +x06), t13 = transform2(x12 = +x12), k10 = t03 === t13 ? 0 : 1 / (t13 - t03), scale) : [x06, x12];
  };
  scale.clamp = function(_2) {
    return arguments.length ? (clamp = !!_2, scale) : clamp;
  };
  scale.interpolator = function(_2) {
    return arguments.length ? (interpolator = _2, scale) : interpolator;
  };
  function range3(interpolate) {
    return function(_2) {
      var r0, r1;
      return arguments.length ? ([r0, r1] = _2, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
    };
  }
  scale.range = range3(value_default);
  scale.rangeRound = range3(round_default);
  scale.unknown = function(_2) {
    return arguments.length ? (unknown = _2, scale) : unknown;
  };
  return function(t4) {
    transform2 = t4, t03 = t4(x06), t13 = t4(x12), k10 = t03 === t13 ? 0 : 1 / (t13 - t03);
    return scale;
  };
}
function copy2(source, target) {
  return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
  var scale = linearish(transformer3()(identity2));
  scale.copy = function() {
    return copy2(scale, sequential());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialLog() {
  var scale = loggish(transformer3()).domain([1, 10]);
  scale.copy = function() {
    return copy2(scale, sequentialLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialSymlog() {
  var scale = symlogish(transformer3());
  scale.copy = function() {
    return copy2(scale, sequentialSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialPow() {
  var scale = powish(transformer3());
  scale.copy = function() {
    return copy2(scale, sequentialPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}

// node_modules/d3-scale/src/sequentialQuantile.js
function sequentialQuantile() {
  var domain = [], interpolator = identity2;
  function scale(x6) {
    if (x6 != null && !isNaN(x6 = +x6))
      return interpolator((bisect_default(domain, x6, 1) - 1) / (domain.length - 1));
  }
  scale.domain = function(_2) {
    if (!arguments.length)
      return domain.slice();
    domain = [];
    for (let d4 of _2)
      if (d4 != null && !isNaN(d4 = +d4))
        domain.push(d4);
    domain.sort(ascending_default);
    return scale;
  };
  scale.interpolator = function(_2) {
    return arguments.length ? (interpolator = _2, scale) : interpolator;
  };
  scale.range = function() {
    return domain.map((d4, i4) => interpolator(i4 / (domain.length - 1)));
  };
  scale.quantiles = function(n2) {
    return Array.from({ length: n2 + 1 }, (_2, i4) => quantile(domain, i4 / n2));
  };
  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };
  return initInterpolator.apply(scale, arguments);
}

// node_modules/d3-scale/src/diverging.js
function transformer4() {
  var x06 = 0, x12 = 0.5, x22 = 1, s5 = 1, t03, t13, t23, k10, k21, interpolator = identity2, transform2, clamp = false, unknown;
  function scale(x6) {
    return isNaN(x6 = +x6) ? unknown : (x6 = 0.5 + ((x6 = +transform2(x6)) - t13) * (s5 * x6 < s5 * t13 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x6)) : x6));
  }
  scale.domain = function(_2) {
    return arguments.length ? ([x06, x12, x22] = _2, t03 = transform2(x06 = +x06), t13 = transform2(x12 = +x12), t23 = transform2(x22 = +x22), k10 = t03 === t13 ? 0 : 0.5 / (t13 - t03), k21 = t13 === t23 ? 0 : 0.5 / (t23 - t13), s5 = t13 < t03 ? -1 : 1, scale) : [x06, x12, x22];
  };
  scale.clamp = function(_2) {
    return arguments.length ? (clamp = !!_2, scale) : clamp;
  };
  scale.interpolator = function(_2) {
    return arguments.length ? (interpolator = _2, scale) : interpolator;
  };
  function range3(interpolate) {
    return function(_2) {
      var r0, r1, r22;
      return arguments.length ? ([r0, r1, r22] = _2, interpolator = piecewise(interpolate, [r0, r1, r22]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }
  scale.range = range3(value_default);
  scale.rangeRound = range3(round_default);
  scale.unknown = function(_2) {
    return arguments.length ? (unknown = _2, scale) : unknown;
  };
  return function(t4) {
    transform2 = t4, t03 = t4(x06), t13 = t4(x12), t23 = t4(x22), k10 = t03 === t13 ? 0 : 0.5 / (t13 - t03), k21 = t13 === t23 ? 0 : 0.5 / (t23 - t13), s5 = t13 < t03 ? -1 : 1;
    return scale;
  };
}
function diverging() {
  var scale = linearish(transformer4()(identity2));
  scale.copy = function() {
    return copy2(scale, diverging());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingLog() {
  var scale = loggish(transformer4()).domain([0.1, 1, 10]);
  scale.copy = function() {
    return copy2(scale, divergingLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSymlog() {
  var scale = symlogish(transformer4());
  scale.copy = function() {
    return copy2(scale, divergingSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingPow() {
  var scale = powish(transformer4());
  scale.copy = function() {
    return copy2(scale, divergingPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}

// node_modules/d3-scale-chromatic/src/colors.js
function colors_default(specifier) {
  var n2 = specifier.length / 6 | 0, colors = new Array(n2), i4 = 0;
  while (i4 < n2)
    colors[i4] = "#" + specifier.slice(i4 * 6, ++i4 * 6);
  return colors;
}

// node_modules/d3-scale-chromatic/src/categorical/category10.js
var category10_default = colors_default("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

// node_modules/d3-scale-chromatic/src/categorical/Accent.js
var Accent_default = colors_default("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

// node_modules/d3-scale-chromatic/src/categorical/Dark2.js
var Dark2_default = colors_default("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

// node_modules/d3-scale-chromatic/src/categorical/Paired.js
var Paired_default = colors_default("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

// node_modules/d3-scale-chromatic/src/categorical/Pastel1.js
var Pastel1_default = colors_default("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

// node_modules/d3-scale-chromatic/src/categorical/Pastel2.js
var Pastel2_default = colors_default("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

// node_modules/d3-scale-chromatic/src/categorical/Set1.js
var Set1_default = colors_default("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

// node_modules/d3-scale-chromatic/src/categorical/Set2.js
var Set2_default = colors_default("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

// node_modules/d3-scale-chromatic/src/categorical/Set3.js
var Set3_default = colors_default("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

// node_modules/d3-scale-chromatic/src/categorical/Tableau10.js
var Tableau10_default = colors_default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

// node_modules/d3-scale-chromatic/src/ramp.js
var ramp_default = (scheme28) => rgbBasis(scheme28[scheme28.length - 1]);

// node_modules/d3-scale-chromatic/src/diverging/BrBG.js
var scheme = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(colors_default);
var BrBG_default = ramp_default(scheme);

// node_modules/d3-scale-chromatic/src/diverging/PRGn.js
var scheme2 = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(colors_default);
var PRGn_default = ramp_default(scheme2);

// node_modules/d3-scale-chromatic/src/diverging/PiYG.js
var scheme3 = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(colors_default);
var PiYG_default = ramp_default(scheme3);

// node_modules/d3-scale-chromatic/src/diverging/PuOr.js
var scheme4 = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(colors_default);
var PuOr_default = ramp_default(scheme4);

// node_modules/d3-scale-chromatic/src/diverging/RdBu.js
var scheme5 = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(colors_default);
var RdBu_default = ramp_default(scheme5);

// node_modules/d3-scale-chromatic/src/diverging/RdGy.js
var scheme6 = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(colors_default);
var RdGy_default = ramp_default(scheme6);

// node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js
var scheme7 = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(colors_default);
var RdYlBu_default = ramp_default(scheme7);

// node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js
var scheme8 = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(colors_default);
var RdYlGn_default = ramp_default(scheme8);

// node_modules/d3-scale-chromatic/src/diverging/Spectral.js
var scheme9 = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(colors_default);
var Spectral_default = ramp_default(scheme9);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js
var scheme10 = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(colors_default);
var BuGn_default = ramp_default(scheme10);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js
var scheme11 = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(colors_default);
var BuPu_default = ramp_default(scheme11);

// node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js
var scheme12 = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(colors_default);
var GnBu_default = ramp_default(scheme12);

// node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js
var scheme13 = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(colors_default);
var OrRd_default = ramp_default(scheme13);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js
var scheme14 = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(colors_default);
var PuBuGn_default = ramp_default(scheme14);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js
var scheme15 = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(colors_default);
var PuBu_default = ramp_default(scheme15);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js
var scheme16 = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(colors_default);
var PuRd_default = ramp_default(scheme16);

// node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js
var scheme17 = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(colors_default);
var RdPu_default = ramp_default(scheme17);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js
var scheme18 = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(colors_default);
var YlGnBu_default = ramp_default(scheme18);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js
var scheme19 = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(colors_default);
var YlGn_default = ramp_default(scheme19);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js
var scheme20 = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(colors_default);
var YlOrBr_default = ramp_default(scheme20);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js
var scheme21 = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(colors_default);
var YlOrRd_default = ramp_default(scheme21);

// node_modules/d3-scale-chromatic/src/sequential-single/Blues.js
var scheme22 = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(colors_default);
var Blues_default = ramp_default(scheme22);

// node_modules/d3-scale-chromatic/src/sequential-single/Greens.js
var scheme23 = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(colors_default);
var Greens_default = ramp_default(scheme23);

// node_modules/d3-scale-chromatic/src/sequential-single/Greys.js
var scheme24 = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(colors_default);
var Greys_default = ramp_default(scheme24);

// node_modules/d3-scale-chromatic/src/sequential-single/Purples.js
var scheme25 = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(colors_default);
var Purples_default = ramp_default(scheme25);

// node_modules/d3-scale-chromatic/src/sequential-single/Reds.js
var scheme26 = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(colors_default);
var Reds_default = ramp_default(scheme26);

// node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js
var scheme27 = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(colors_default);
var Oranges_default = ramp_default(scheme27);

// node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
function cividis_default(t4) {
  t4 = Math.max(0, Math.min(1, t4));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t4 * (35.34 - t4 * (2381.73 - t4 * (6402.7 - t4 * (7024.72 - t4 * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t4 * (170.73 + t4 * (52.82 - t4 * (131.46 - t4 * (176.58 - t4 * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t4 * (442.36 - t4 * (2482.43 - t4 * (6167.24 - t4 * (6614.94 - t4 * 2475.67))))))) + ")";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var cubehelix_default2 = cubehelixLong(cubehelix(300, 0.5, 0), cubehelix(-240, 0.5, 1));

// node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js
var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var c4 = cubehelix();
function rainbow_default(t4) {
  if (t4 < 0 || t4 > 1)
    t4 -= Math.floor(t4);
  var ts = Math.abs(t4 - 0.5);
  c4.h = 360 * t4 - 100;
  c4.s = 1.5 - 1.5 * ts;
  c4.l = 0.8 - 0.9 * ts;
  return c4 + "";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var c5 = rgb();
var pi_1_3 = Math.PI / 3;
var pi_2_3 = Math.PI * 2 / 3;
function sinebow_default(t4) {
  var x6;
  t4 = (0.5 - t4) * Math.PI;
  c5.r = 255 * (x6 = Math.sin(t4)) * x6;
  c5.g = 255 * (x6 = Math.sin(t4 + pi_1_3)) * x6;
  c5.b = 255 * (x6 = Math.sin(t4 + pi_2_3)) * x6;
  return c5 + "";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
function turbo_default(t4) {
  t4 = Math.max(0, Math.min(1, t4));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t4 * (1172.33 - t4 * (10793.56 - t4 * (33300.12 - t4 * (38394.49 - t4 * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t4 * (557.33 + t4 * (1225.33 - t4 * (3574.96 - t4 * (1073.77 + t4 * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t4 * (3211.1 - t4 * (15327.97 - t4 * (27814 - t4 * (22569.18 - t4 * 6838.66))))))) + ")";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function ramp(range3) {
  var n2 = range3.length;
  return function(t4) {
    return range3[Math.max(0, Math.min(n2 - 1, Math.floor(t4 * n2)))];
  };
}
var viridis_default = ramp(colors_default("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp(colors_default("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp(colors_default("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp(colors_default("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

// node_modules/d3-shape/src/constant.js
function constant_default11(x6) {
  return function constant() {
    return x6;
  };
}

// node_modules/d3-shape/src/math.js
var abs4 = Math.abs;
var atan22 = Math.atan2;
var cos3 = Math.cos;
var max4 = Math.max;
var min3 = Math.min;
var sin3 = Math.sin;
var sqrt3 = Math.sqrt;
var epsilon7 = 1e-12;
var pi5 = Math.PI;
var halfPi4 = pi5 / 2;
var tau6 = 2 * pi5;
function acos2(x6) {
  return x6 > 1 ? 0 : x6 < -1 ? pi5 : Math.acos(x6);
}
function asin2(x6) {
  return x6 >= 1 ? halfPi4 : x6 <= -1 ? -halfPi4 : Math.asin(x6);
}

// node_modules/d3-shape/src/arc.js
function arcInnerRadius(d4) {
  return d4.innerRadius;
}
function arcOuterRadius(d4) {
  return d4.outerRadius;
}
function arcStartAngle(d4) {
  return d4.startAngle;
}
function arcEndAngle(d4) {
  return d4.endAngle;
}
function arcPadAngle(d4) {
  return d4 && d4.padAngle;
}
function intersect(x06, y06, x12, y12, x22, y22, x32, y32) {
  var x10 = x12 - x06, y10 = y12 - y06, x322 = x32 - x22, y322 = y32 - y22, t4 = y322 * x10 - x322 * y10;
  if (t4 * t4 < epsilon7)
    return;
  t4 = (x322 * (y06 - y22) - y322 * (x06 - x22)) / t4;
  return [x06 + t4 * x10, y06 + t4 * y10];
}
function cornerTangents(x06, y06, x12, y12, r1, rc, cw) {
  var x01 = x06 - x12, y01 = y06 - y12, lo = (cw ? rc : -rc) / sqrt3(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x06 + ox, y11 = y06 + oy, x10 = x12 + ox, y10 = y12 + oy, x004 = (x11 + x10) / 2, y004 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d22 = dx * dx + dy * dy, r4 = r1 - rc, D3 = x11 * y10 - x10 * y11, d4 = (dy < 0 ? -1 : 1) * sqrt3(max4(0, r4 * r4 * d22 - D3 * D3)), cx0 = (D3 * dy - dx * d4) / d22, cy0 = (-D3 * dx - dy * d4) / d22, cx1 = (D3 * dy + dx * d4) / d22, cy1 = (-D3 * dx + dy * d4) / d22, dx0 = cx0 - x004, dy0 = cy0 - y004, dx1 = cx1 - x004, dy1 = cy1 - y004;
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1)
    cx0 = cx1, cy0 = cy1;
  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r4 - 1),
    y11: cy0 * (r1 / r4 - 1)
  };
}
function arc_default() {
  var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant_default11(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null;
  function arc() {
    var buffer, r4, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi4, a1 = endAngle.apply(this, arguments) - halfPi4, da = abs4(a1 - a0), cw = a1 > a0;
    if (!context)
      context = buffer = path_default();
    if (r1 < r0)
      r4 = r1, r1 = r0, r0 = r4;
    if (!(r1 > epsilon7))
      context.moveTo(0, 0);
    else if (da > tau6 - epsilon7) {
      context.moveTo(r1 * cos3(a0), r1 * sin3(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon7) {
        context.moveTo(r0 * cos3(a1), r0 * sin3(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    } else {
      var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon7 && (padRadius ? +padRadius.apply(this, arguments) : sqrt3(r0 * r0 + r1 * r1)), rc = min3(abs4(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t03, t13;
      if (rp > epsilon7) {
        var p02 = asin2(rp / r0 * sin3(ap)), p1 = asin2(rp / r1 * sin3(ap));
        if ((da0 -= p02 * 2) > epsilon7)
          p02 *= cw ? 1 : -1, a00 += p02, a10 -= p02;
        else
          da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon7)
          p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
        else
          da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }
      var x01 = r1 * cos3(a01), y01 = r1 * sin3(a01), x10 = r0 * cos3(a10), y10 = r0 * sin3(a10);
      if (rc > epsilon7) {
        var x11 = r1 * cos3(a11), y11 = r1 * sin3(a11), x004 = r0 * cos3(a00), y004 = r0 * sin3(a00), oc;
        if (da < pi5 && (oc = intersect(x01, y01, x004, y004, x11, y11, x10, y10))) {
          var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin3(acos2((ax * bx + ay * by) / (sqrt3(ax * ax + ay * ay) * sqrt3(bx * bx + by * by))) / 2), lc = sqrt3(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = min3(rc, (r0 - lc) / (kc - 1));
          rc1 = min3(rc, (r1 - lc) / (kc + 1));
        }
      }
      if (!(da1 > epsilon7))
        context.moveTo(x01, y01);
      else if (rc1 > epsilon7) {
        t03 = cornerTangents(x004, y004, x01, y01, r1, rc1, cw);
        t13 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
        context.moveTo(t03.cx + t03.x01, t03.cy + t03.y01);
        if (rc1 < rc)
          context.arc(t03.cx, t03.cy, rc1, atan22(t03.y01, t03.x01), atan22(t13.y01, t13.x01), !cw);
        else {
          context.arc(t03.cx, t03.cy, rc1, atan22(t03.y01, t03.x01), atan22(t03.y11, t03.x11), !cw);
          context.arc(0, 0, r1, atan22(t03.cy + t03.y11, t03.cx + t03.x11), atan22(t13.cy + t13.y11, t13.cx + t13.x11), !cw);
          context.arc(t13.cx, t13.cy, rc1, atan22(t13.y11, t13.x11), atan22(t13.y01, t13.x01), !cw);
        }
      } else
        context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
      if (!(r0 > epsilon7) || !(da0 > epsilon7))
        context.lineTo(x10, y10);
      else if (rc0 > epsilon7) {
        t03 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t13 = cornerTangents(x01, y01, x004, y004, r0, -rc0, cw);
        context.lineTo(t03.cx + t03.x01, t03.cy + t03.y01);
        if (rc0 < rc)
          context.arc(t03.cx, t03.cy, rc0, atan22(t03.y01, t03.x01), atan22(t13.y01, t13.x01), !cw);
        else {
          context.arc(t03.cx, t03.cy, rc0, atan22(t03.y01, t03.x01), atan22(t03.y11, t03.x11), !cw);
          context.arc(0, 0, r0, atan22(t03.cy + t03.y11, t03.cx + t03.x11), atan22(t13.cy + t13.y11, t13.cx + t13.x11), cw);
          context.arc(t13.cx, t13.cy, rc0, atan22(t13.y11, t13.x11), atan22(t13.y01, t13.x01), !cw);
        }
      } else
        context.arc(0, 0, r0, a10, a00, cw);
    }
    context.closePath();
    if (buffer)
      return context = null, buffer + "" || null;
  }
  arc.centroid = function() {
    var r4 = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a6 = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi5 / 2;
    return [cos3(a6) * r4, sin3(a6) * r4];
  };
  arc.innerRadius = function(_2) {
    return arguments.length ? (innerRadius = typeof _2 === "function" ? _2 : constant_default11(+_2), arc) : innerRadius;
  };
  arc.outerRadius = function(_2) {
    return arguments.length ? (outerRadius = typeof _2 === "function" ? _2 : constant_default11(+_2), arc) : outerRadius;
  };
  arc.cornerRadius = function(_2) {
    return arguments.length ? (cornerRadius = typeof _2 === "function" ? _2 : constant_default11(+_2), arc) : cornerRadius;
  };
  arc.padRadius = function(_2) {
    return arguments.length ? (padRadius = _2 == null ? null : typeof _2 === "function" ? _2 : constant_default11(+_2), arc) : padRadius;
  };
  arc.startAngle = function(_2) {
    return arguments.length ? (startAngle = typeof _2 === "function" ? _2 : constant_default11(+_2), arc) : startAngle;
  };
  arc.endAngle = function(_2) {
    return arguments.length ? (endAngle = typeof _2 === "function" ? _2 : constant_default11(+_2), arc) : endAngle;
  };
  arc.padAngle = function(_2) {
    return arguments.length ? (padAngle = typeof _2 === "function" ? _2 : constant_default11(+_2), arc) : padAngle;
  };
  arc.context = function(_2) {
    return arguments.length ? (context = _2 == null ? null : _2, arc) : context;
  };
  return arc;
}

// node_modules/d3-shape/src/array.js
var slice5 = Array.prototype.slice;
function array_default4(x6) {
  return typeof x6 === "object" && "length" in x6 ? x6 : Array.from(x6);
}

// node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y7) {
    x6 = +x6, y7 = +y7;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x6, y7) : this._context.moveTo(x6, y7);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x6, y7);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// node_modules/d3-shape/src/point.js
function x5(p3) {
  return p3[0];
}
function y5(p3) {
  return p3[1];
}

// node_modules/d3-shape/src/line.js
function line_default2(x6, y7) {
  var defined2 = constant_default11(true), context = null, curve = linear_default, output = null;
  x6 = typeof x6 === "function" ? x6 : x6 === void 0 ? x5 : constant_default11(x6);
  y7 = typeof y7 === "function" ? y7 : y7 === void 0 ? y5 : constant_default11(y7);
  function line(data) {
    var i4, n2 = (data = array_default4(data)).length, d4, defined0 = false, buffer;
    if (context == null)
      output = curve(buffer = path_default());
    for (i4 = 0; i4 <= n2; ++i4) {
      if (!(i4 < n2 && defined2(d4 = data[i4], i4, data)) === defined0) {
        if (defined0 = !defined0)
          output.lineStart();
        else
          output.lineEnd();
      }
      if (defined0)
        output.point(+x6(d4, i4, data), +y7(d4, i4, data));
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  line.x = function(_2) {
    return arguments.length ? (x6 = typeof _2 === "function" ? _2 : constant_default11(+_2), line) : x6;
  };
  line.y = function(_2) {
    return arguments.length ? (y7 = typeof _2 === "function" ? _2 : constant_default11(+_2), line) : y7;
  };
  line.defined = function(_2) {
    return arguments.length ? (defined2 = typeof _2 === "function" ? _2 : constant_default11(!!_2), line) : defined2;
  };
  line.curve = function(_2) {
    return arguments.length ? (curve = _2, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_2) {
    return arguments.length ? (_2 == null ? context = output = null : output = curve(context = _2), line) : context;
  };
  return line;
}

// node_modules/d3-shape/src/area.js
function area_default5(x06, y06, y12) {
  var x12 = null, defined2 = constant_default11(true), context = null, curve = linear_default, output = null;
  x06 = typeof x06 === "function" ? x06 : x06 === void 0 ? x5 : constant_default11(+x06);
  y06 = typeof y06 === "function" ? y06 : y06 === void 0 ? constant_default11(0) : constant_default11(+y06);
  y12 = typeof y12 === "function" ? y12 : y12 === void 0 ? y5 : constant_default11(+y12);
  function area(data) {
    var i4, j3, k4, n2 = (data = array_default4(data)).length, d4, defined0 = false, buffer, x0z = new Array(n2), y0z = new Array(n2);
    if (context == null)
      output = curve(buffer = path_default());
    for (i4 = 0; i4 <= n2; ++i4) {
      if (!(i4 < n2 && defined2(d4 = data[i4], i4, data)) === defined0) {
        if (defined0 = !defined0) {
          j3 = i4;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k4 = i4 - 1; k4 >= j3; --k4) {
            output.point(x0z[k4], y0z[k4]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i4] = +x06(d4, i4, data), y0z[i4] = +y06(d4, i4, data);
        output.point(x12 ? +x12(d4, i4, data) : x0z[i4], y12 ? +y12(d4, i4, data) : y0z[i4]);
      }
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  function arealine() {
    return line_default2().defined(defined2).curve(curve).context(context);
  }
  area.x = function(_2) {
    return arguments.length ? (x06 = typeof _2 === "function" ? _2 : constant_default11(+_2), x12 = null, area) : x06;
  };
  area.x0 = function(_2) {
    return arguments.length ? (x06 = typeof _2 === "function" ? _2 : constant_default11(+_2), area) : x06;
  };
  area.x1 = function(_2) {
    return arguments.length ? (x12 = _2 == null ? null : typeof _2 === "function" ? _2 : constant_default11(+_2), area) : x12;
  };
  area.y = function(_2) {
    return arguments.length ? (y06 = typeof _2 === "function" ? _2 : constant_default11(+_2), y12 = null, area) : y06;
  };
  area.y0 = function(_2) {
    return arguments.length ? (y06 = typeof _2 === "function" ? _2 : constant_default11(+_2), area) : y06;
  };
  area.y1 = function(_2) {
    return arguments.length ? (y12 = _2 == null ? null : typeof _2 === "function" ? _2 : constant_default11(+_2), area) : y12;
  };
  area.lineX0 = area.lineY0 = function() {
    return arealine().x(x06).y(y06);
  };
  area.lineY1 = function() {
    return arealine().x(x06).y(y12);
  };
  area.lineX1 = function() {
    return arealine().x(x12).y(y06);
  };
  area.defined = function(_2) {
    return arguments.length ? (defined2 = typeof _2 === "function" ? _2 : constant_default11(!!_2), area) : defined2;
  };
  area.curve = function(_2) {
    return arguments.length ? (curve = _2, context != null && (output = curve(context)), area) : curve;
  };
  area.context = function(_2) {
    return arguments.length ? (_2 == null ? context = output = null : output = curve(context = _2), area) : context;
  };
  return area;
}

// node_modules/d3-shape/src/descending.js
function descending_default2(a6, b10) {
  return b10 < a6 ? -1 : b10 > a6 ? 1 : b10 >= a6 ? 0 : NaN;
}

// node_modules/d3-shape/src/identity.js
function identity_default6(d4) {
  return d4;
}

// node_modules/d3-shape/src/pie.js
function pie_default() {
  var value = identity_default6, sortValues = descending_default2, sort2 = null, startAngle = constant_default11(0), endAngle = constant_default11(tau6), padAngle = constant_default11(0);
  function pie(data) {
    var i4, n2 = (data = array_default4(data)).length, j3, k4, sum3 = 0, index3 = new Array(n2), arcs = new Array(n2), a0 = +startAngle.apply(this, arguments), da = Math.min(tau6, Math.max(-tau6, endAngle.apply(this, arguments) - a0)), a1, p3 = Math.min(Math.abs(da) / n2, padAngle.apply(this, arguments)), pa = p3 * (da < 0 ? -1 : 1), v3;
    for (i4 = 0; i4 < n2; ++i4) {
      if ((v3 = arcs[index3[i4] = i4] = +value(data[i4], i4, data)) > 0) {
        sum3 += v3;
      }
    }
    if (sortValues != null)
      index3.sort(function(i5, j4) {
        return sortValues(arcs[i5], arcs[j4]);
      });
    else if (sort2 != null)
      index3.sort(function(i5, j4) {
        return sort2(data[i5], data[j4]);
      });
    for (i4 = 0, k4 = sum3 ? (da - n2 * pa) / sum3 : 0; i4 < n2; ++i4, a0 = a1) {
      j3 = index3[i4], v3 = arcs[j3], a1 = a0 + (v3 > 0 ? v3 * k4 : 0) + pa, arcs[j3] = {
        data: data[j3],
        index: i4,
        value: v3,
        startAngle: a0,
        endAngle: a1,
        padAngle: p3
      };
    }
    return arcs;
  }
  pie.value = function(_2) {
    return arguments.length ? (value = typeof _2 === "function" ? _2 : constant_default11(+_2), pie) : value;
  };
  pie.sortValues = function(_2) {
    return arguments.length ? (sortValues = _2, sort2 = null, pie) : sortValues;
  };
  pie.sort = function(_2) {
    return arguments.length ? (sort2 = _2, sortValues = null, pie) : sort2;
  };
  pie.startAngle = function(_2) {
    return arguments.length ? (startAngle = typeof _2 === "function" ? _2 : constant_default11(+_2), pie) : startAngle;
  };
  pie.endAngle = function(_2) {
    return arguments.length ? (endAngle = typeof _2 === "function" ? _2 : constant_default11(+_2), pie) : endAngle;
  };
  pie.padAngle = function(_2) {
    return arguments.length ? (padAngle = typeof _2 === "function" ? _2 : constant_default11(+_2), pie) : padAngle;
  };
  return pie;
}

// node_modules/d3-shape/src/curve/radial.js
var curveRadialLinear = curveRadial(linear_default);
function Radial(curve) {
  this._curve = curve;
}
Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a6, r4) {
    this._curve.point(r4 * Math.sin(a6), r4 * -Math.cos(a6));
  }
};
function curveRadial(curve) {
  function radial2(context) {
    return new Radial(curve(context));
  }
  radial2._curve = curve;
  return radial2;
}

// node_modules/d3-shape/src/lineRadial.js
function lineRadial(l4) {
  var c8 = l4.curve;
  l4.angle = l4.x, delete l4.x;
  l4.radius = l4.y, delete l4.y;
  l4.curve = function(_2) {
    return arguments.length ? c8(curveRadial(_2)) : c8()._curve;
  };
  return l4;
}
function lineRadial_default() {
  return lineRadial(line_default2().curve(curveRadialLinear));
}

// node_modules/d3-shape/src/areaRadial.js
function areaRadial_default() {
  var a6 = area_default5().curve(curveRadialLinear), c8 = a6.curve, x06 = a6.lineX0, x12 = a6.lineX1, y06 = a6.lineY0, y12 = a6.lineY1;
  a6.angle = a6.x, delete a6.x;
  a6.startAngle = a6.x0, delete a6.x0;
  a6.endAngle = a6.x1, delete a6.x1;
  a6.radius = a6.y, delete a6.y;
  a6.innerRadius = a6.y0, delete a6.y0;
  a6.outerRadius = a6.y1, delete a6.y1;
  a6.lineStartAngle = function() {
    return lineRadial(x06());
  }, delete a6.lineX0;
  a6.lineEndAngle = function() {
    return lineRadial(x12());
  }, delete a6.lineX1;
  a6.lineInnerRadius = function() {
    return lineRadial(y06());
  }, delete a6.lineY0;
  a6.lineOuterRadius = function() {
    return lineRadial(y12());
  }, delete a6.lineY1;
  a6.curve = function(_2) {
    return arguments.length ? c8(curveRadial(_2)) : c8()._curve;
  };
  return a6;
}

// node_modules/d3-shape/src/pointRadial.js
function pointRadial_default(x6, y7) {
  return [(y7 = +y7) * Math.cos(x6 -= Math.PI / 2), y7 * Math.sin(x6)];
}

// node_modules/d3-shape/src/link/index.js
function linkSource(d4) {
  return d4.source;
}
function linkTarget(d4) {
  return d4.target;
}
function link2(curve) {
  var source = linkSource, target = linkTarget, x6 = x5, y7 = y5, context = null;
  function link3() {
    var buffer, argv = slice5.call(arguments), s5 = source.apply(this, argv), t4 = target.apply(this, argv);
    if (!context)
      context = buffer = path_default();
    curve(context, +x6.apply(this, (argv[0] = s5, argv)), +y7.apply(this, argv), +x6.apply(this, (argv[0] = t4, argv)), +y7.apply(this, argv));
    if (buffer)
      return context = null, buffer + "" || null;
  }
  link3.source = function(_2) {
    return arguments.length ? (source = _2, link3) : source;
  };
  link3.target = function(_2) {
    return arguments.length ? (target = _2, link3) : target;
  };
  link3.x = function(_2) {
    return arguments.length ? (x6 = typeof _2 === "function" ? _2 : constant_default11(+_2), link3) : x6;
  };
  link3.y = function(_2) {
    return arguments.length ? (y7 = typeof _2 === "function" ? _2 : constant_default11(+_2), link3) : y7;
  };
  link3.context = function(_2) {
    return arguments.length ? (context = _2 == null ? null : _2, link3) : context;
  };
  return link3;
}
function curveHorizontal(context, x06, y06, x12, y12) {
  context.moveTo(x06, y06);
  context.bezierCurveTo(x06 = (x06 + x12) / 2, y06, x06, y12, x12, y12);
}
function curveVertical(context, x06, y06, x12, y12) {
  context.moveTo(x06, y06);
  context.bezierCurveTo(x06, y06 = (y06 + y12) / 2, x12, y06, x12, y12);
}
function curveRadial2(context, x06, y06, x12, y12) {
  var p02 = pointRadial_default(x06, y06), p1 = pointRadial_default(x06, y06 = (y06 + y12) / 2), p22 = pointRadial_default(x12, y06), p3 = pointRadial_default(x12, y12);
  context.moveTo(p02[0], p02[1]);
  context.bezierCurveTo(p1[0], p1[1], p22[0], p22[1], p3[0], p3[1]);
}
function linkHorizontal() {
  return link2(curveHorizontal);
}
function linkVertical() {
  return link2(curveVertical);
}
function linkRadial() {
  var l4 = link2(curveRadial2);
  l4.angle = l4.x, delete l4.x;
  l4.radius = l4.y, delete l4.y;
  return l4;
}

// node_modules/d3-shape/src/symbol/circle.js
var circle_default3 = {
  draw: function(context, size) {
    var r4 = Math.sqrt(size / pi5);
    context.moveTo(r4, 0);
    context.arc(0, 0, r4, 0, tau6);
  }
};

// node_modules/d3-shape/src/symbol/cross.js
var cross_default2 = {
  draw: function(context, size) {
    var r4 = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r4, -r4);
    context.lineTo(-r4, -r4);
    context.lineTo(-r4, -3 * r4);
    context.lineTo(r4, -3 * r4);
    context.lineTo(r4, -r4);
    context.lineTo(3 * r4, -r4);
    context.lineTo(3 * r4, r4);
    context.lineTo(r4, r4);
    context.lineTo(r4, 3 * r4);
    context.lineTo(-r4, 3 * r4);
    context.lineTo(-r4, r4);
    context.lineTo(-3 * r4, r4);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/diamond.js
var tan30 = Math.sqrt(1 / 3);
var tan30_2 = tan30 * 2;
var diamond_default = {
  draw: function(context, size) {
    var y7 = Math.sqrt(size / tan30_2), x6 = y7 * tan30;
    context.moveTo(0, -y7);
    context.lineTo(x6, 0);
    context.lineTo(0, y7);
    context.lineTo(-x6, 0);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/star.js
var ka = 0.8908130915292852;
var kr = Math.sin(pi5 / 10) / Math.sin(7 * pi5 / 10);
var kx = Math.sin(tau6 / 10) * kr;
var ky = -Math.cos(tau6 / 10) * kr;
var star_default = {
  draw: function(context, size) {
    var r4 = Math.sqrt(size * ka), x6 = kx * r4, y7 = ky * r4;
    context.moveTo(0, -r4);
    context.lineTo(x6, y7);
    for (var i4 = 1; i4 < 5; ++i4) {
      var a6 = tau6 * i4 / 5, c8 = Math.cos(a6), s5 = Math.sin(a6);
      context.lineTo(s5 * r4, -c8 * r4);
      context.lineTo(c8 * x6 - s5 * y7, s5 * x6 + c8 * y7);
    }
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/square.js
var square_default = {
  draw: function(context, size) {
    var w3 = Math.sqrt(size), x6 = -w3 / 2;
    context.rect(x6, x6, w3, w3);
  }
};

// node_modules/d3-shape/src/symbol/triangle.js
var sqrt32 = Math.sqrt(3);
var triangle_default = {
  draw: function(context, size) {
    var y7 = -Math.sqrt(size / (sqrt32 * 3));
    context.moveTo(0, y7 * 2);
    context.lineTo(-sqrt32 * y7, -y7);
    context.lineTo(sqrt32 * y7, -y7);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/wye.js
var c6 = -0.5;
var s3 = Math.sqrt(3) / 2;
var k3 = 1 / Math.sqrt(12);
var a4 = (k3 / 2 + 1) * 3;
var wye_default = {
  draw: function(context, size) {
    var r4 = Math.sqrt(size / a4), x06 = r4 / 2, y06 = r4 * k3, x12 = x06, y12 = r4 * k3 + r4, x22 = -x12, y22 = y12;
    context.moveTo(x06, y06);
    context.lineTo(x12, y12);
    context.lineTo(x22, y22);
    context.lineTo(c6 * x06 - s3 * y06, s3 * x06 + c6 * y06);
    context.lineTo(c6 * x12 - s3 * y12, s3 * x12 + c6 * y12);
    context.lineTo(c6 * x22 - s3 * y22, s3 * x22 + c6 * y22);
    context.lineTo(c6 * x06 + s3 * y06, c6 * y06 - s3 * x06);
    context.lineTo(c6 * x12 + s3 * y12, c6 * y12 - s3 * x12);
    context.lineTo(c6 * x22 + s3 * y22, c6 * y22 - s3 * x22);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol.js
var symbols = [
  circle_default3,
  cross_default2,
  diamond_default,
  square_default,
  star_default,
  triangle_default,
  wye_default
];
function symbol_default(type2, size) {
  var context = null;
  type2 = typeof type2 === "function" ? type2 : constant_default11(type2 || circle_default3);
  size = typeof size === "function" ? size : constant_default11(size === void 0 ? 64 : +size);
  function symbol() {
    var buffer;
    if (!context)
      context = buffer = path_default();
    type2.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer)
      return context = null, buffer + "" || null;
  }
  symbol.type = function(_2) {
    return arguments.length ? (type2 = typeof _2 === "function" ? _2 : constant_default11(_2), symbol) : type2;
  };
  symbol.size = function(_2) {
    return arguments.length ? (size = typeof _2 === "function" ? _2 : constant_default11(+_2), symbol) : size;
  };
  symbol.context = function(_2) {
    return arguments.length ? (context = _2 == null ? null : _2, symbol) : context;
  };
  return symbol;
}

// node_modules/d3-shape/src/noop.js
function noop_default2() {
}

// node_modules/d3-shape/src/curve/basis.js
function point2(that, x6, y7) {
  that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x6) / 6, (that._y0 + 4 * that._y1 + y7) / 6);
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point2(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y7) {
    x6 = +x6, y7 = +y7;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x6, y7) : this._context.moveTo(x6, y7);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        point2(this, x6, y7);
        break;
    }
    this._x0 = this._x1, this._x1 = x6;
    this._y0 = this._y1, this._y1 = y7;
  }
};
function basis_default2(context) {
  return new Basis(context);
}

// node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x6, y7) {
    x6 = +x6, y7 = +y7;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x6, this._y2 = y7;
        break;
      case 1:
        this._point = 2;
        this._x3 = x6, this._y3 = y7;
        break;
      case 2:
        this._point = 3;
        this._x4 = x6, this._y4 = y7;
        this._context.moveTo((this._x0 + 4 * this._x1 + x6) / 6, (this._y0 + 4 * this._y1 + y7) / 6);
        break;
      default:
        point2(this, x6, y7);
        break;
    }
    this._x0 = this._x1, this._x1 = x6;
    this._y0 = this._y1, this._y1 = y7;
  }
};
function basisClosed_default2(context) {
  return new BasisClosed(context);
}

// node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y7) {
    x6 = +x6, y7 = +y7;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x06 = (this._x0 + 4 * this._x1 + x6) / 6, y06 = (this._y0 + 4 * this._y1 + y7) / 6;
        this._line ? this._context.lineTo(x06, y06) : this._context.moveTo(x06, y06);
        break;
      case 3:
        this._point = 4;
      default:
        point2(this, x6, y7);
        break;
    }
    this._x0 = this._x1, this._x1 = x6;
    this._y0 = this._y1, this._y1 = y7;
  }
};
function basisOpen_default(context) {
  return new BasisOpen(context);
}

// node_modules/d3-shape/src/curve/bump.js
var Bump = class {
  constructor(context, x6) {
    this._context = context;
    this._x = x6;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x6, y7) {
    x6 = +x6, y7 = +y7;
    switch (this._point) {
      case 0: {
        this._point = 1;
        if (this._line)
          this._context.lineTo(x6, y7);
        else
          this._context.moveTo(x6, y7);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        if (this._x)
          this._context.bezierCurveTo(this._x0 = (this._x0 + x6) / 2, this._y0, this._x0, y7, x6, y7);
        else
          this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y7) / 2, x6, this._y0, x6, y7);
        break;
      }
    }
    this._x0 = x6, this._y0 = y7;
  }
};
function bumpX(context) {
  return new Bump(context, true);
}
function bumpY(context) {
  return new Bump(context, false);
}

// node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x6 = this._x, y7 = this._y, j3 = x6.length - 1;
    if (j3 > 0) {
      var x06 = x6[0], y06 = y7[0], dx = x6[j3] - x06, dy = y7[j3] - y06, i4 = -1, t4;
      while (++i4 <= j3) {
        t4 = i4 / j3;
        this._basis.point(this._beta * x6[i4] + (1 - this._beta) * (x06 + t4 * dx), this._beta * y7[i4] + (1 - this._beta) * (y06 + t4 * dy));
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x6, y7) {
    this._x.push(+x6);
    this._y.push(+y7);
  }
};
var bundle_default = function custom12(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom12(+beta2);
  };
  return bundle;
}(0.85);

// node_modules/d3-shape/src/curve/cardinal.js
function point3(that, x6, y7) {
  that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x6), that._y2 + that._k * (that._y1 - y7), that._x2, that._y2);
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point3(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y7) {
    x6 = +x6, y7 = +y7;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x6, y7) : this._context.moveTo(x6, y7);
        break;
      case 1:
        this._point = 2;
        this._x1 = x6, this._y1 = y7;
        break;
      case 2:
        this._point = 3;
      default:
        point3(this, x6, y7);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y7;
  }
};
var cardinal_default = function custom13(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom13(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x6, y7) {
    x6 = +x6, y7 = +y7;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x6, this._y3 = y7;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x6, this._y4 = y7);
        break;
      case 2:
        this._point = 3;
        this._x5 = x6, this._y5 = y7;
        break;
      default:
        point3(this, x6, y7);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y7;
  }
};
var cardinalClosed_default = function custom14(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom14(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y7) {
    x6 = +x6, y7 = +y7;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point3(this, x6, y7);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y7;
  }
};
var cardinalOpen_default = function custom15(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom15(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/catmullRom.js
function point4(that, x6, y7) {
  var x12 = that._x1, y12 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon7) {
    var a6 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n2 = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x12 = (x12 * a6 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n2;
    y12 = (y12 * a6 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n2;
  }
  if (that._l23_a > epsilon7) {
    var b10 = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m4 = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b10 + that._x1 * that._l23_2a - x6 * that._l12_2a) / m4;
    y22 = (y22 * b10 + that._y1 * that._l23_2a - y7 * that._l12_2a) / m4;
  }
  that._context.bezierCurveTo(x12, y12, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y7) {
    x6 = +x6, y7 = +y7;
    if (this._point) {
      var x23 = this._x2 - x6, y23 = this._y2 - y7;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x6, y7) : this._context.moveTo(x6, y7);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        point4(this, x6, y7);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y7;
  }
};
var catmullRom_default = function custom16(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom16(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x6, y7) {
    x6 = +x6, y7 = +y7;
    if (this._point) {
      var x23 = this._x2 - x6, y23 = this._y2 - y7;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x6, this._y3 = y7;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x6, this._y4 = y7);
        break;
      case 2:
        this._point = 3;
        this._x5 = x6, this._y5 = y7;
        break;
      default:
        point4(this, x6, y7);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y7;
  }
};
var catmullRomClosed_default = function custom17(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom17(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y7) {
    x6 = +x6, y7 = +y7;
    if (this._point) {
      var x23 = this._x2 - x6, y23 = this._y2 - y7;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point4(this, x6, y7);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y7;
  }
};
var catmullRomOpen_default = function custom18(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom18(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point)
      this._context.closePath();
  },
  point: function(x6, y7) {
    x6 = +x6, y7 = +y7;
    if (this._point)
      this._context.lineTo(x6, y7);
    else
      this._point = 1, this._context.moveTo(x6, y7);
  }
};
function linearClosed_default(context) {
  return new LinearClosed(context);
}

// node_modules/d3-shape/src/curve/monotone.js
function sign2(x6) {
  return x6 < 0 ? -1 : 1;
}
function slope3(that, x22, y22) {
  var h0 = that._x1 - that._x0, h1 = x22 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y22 - that._y1) / (h1 || h0 < 0 && -0), p3 = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign2(s0) + sign2(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p3)) || 0;
}
function slope2(that, t4) {
  var h3 = that._x1 - that._x0;
  return h3 ? (3 * (that._y1 - that._y0) / h3 - t4) / 2 : t4;
}
function point5(that, t03, t13) {
  var x06 = that._x0, y06 = that._y0, x12 = that._x1, y12 = that._y1, dx = (x12 - x06) / 3;
  that._context.bezierCurveTo(x06 + dx, y06 + dx * t03, x12 - dx, y12 - dx * t13, x12, y12);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point5(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y7) {
    var t13 = NaN;
    x6 = +x6, y7 = +y7;
    if (x6 === this._x1 && y7 === this._y1)
      return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x6, y7) : this._context.moveTo(x6, y7);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point5(this, slope2(this, t13 = slope3(this, x6, y7)), t13);
        break;
      default:
        point5(this, this._t0, t13 = slope3(this, x6, y7));
        break;
    }
    this._x0 = this._x1, this._x1 = x6;
    this._y0 = this._y1, this._y1 = y7;
    this._t0 = t13;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x6, y7) {
  MonotoneX.prototype.point.call(this, y7, x6);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x6, y7) {
    this._context.moveTo(y7, x6);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x6, y7) {
    this._context.lineTo(y7, x6);
  },
  bezierCurveTo: function(x12, y12, x22, y22, x6, y7) {
    this._context.bezierCurveTo(y12, x12, y22, x22, y7, x6);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}

// node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x6 = this._x, y7 = this._y, n2 = x6.length;
    if (n2) {
      this._line ? this._context.lineTo(x6[0], y7[0]) : this._context.moveTo(x6[0], y7[0]);
      if (n2 === 2) {
        this._context.lineTo(x6[1], y7[1]);
      } else {
        var px = controlPoints(x6), py = controlPoints(y7);
        for (var i0 = 0, i1 = 1; i1 < n2; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x6[i1], y7[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n2 === 1)
      this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x6, y7) {
    this._x.push(+x6);
    this._y.push(+y7);
  }
};
function controlPoints(x6) {
  var i4, n2 = x6.length - 1, m4, a6 = new Array(n2), b10 = new Array(n2), r4 = new Array(n2);
  a6[0] = 0, b10[0] = 2, r4[0] = x6[0] + 2 * x6[1];
  for (i4 = 1; i4 < n2 - 1; ++i4)
    a6[i4] = 1, b10[i4] = 4, r4[i4] = 4 * x6[i4] + 2 * x6[i4 + 1];
  a6[n2 - 1] = 2, b10[n2 - 1] = 7, r4[n2 - 1] = 8 * x6[n2 - 1] + x6[n2];
  for (i4 = 1; i4 < n2; ++i4)
    m4 = a6[i4] / b10[i4 - 1], b10[i4] -= m4, r4[i4] -= m4 * r4[i4 - 1];
  a6[n2 - 1] = r4[n2 - 1] / b10[n2 - 1];
  for (i4 = n2 - 2; i4 >= 0; --i4)
    a6[i4] = (r4[i4] - a6[i4 + 1]) / b10[i4];
  b10[n2 - 1] = (x6[n2] + a6[n2 - 1]) / 2;
  for (i4 = 0; i4 < n2 - 1; ++i4)
    b10[i4] = 2 * x6[i4 + 1] - a6[i4 + 1];
  return [a6, b10];
}
function natural_default(context) {
  return new Natural(context);
}

// node_modules/d3-shape/src/curve/step.js
function Step(context, t4) {
  this._context = context;
  this._t = t4;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2)
      this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    if (this._line >= 0)
      this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x6, y7) {
    x6 = +x6, y7 = +y7;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x6, y7) : this._context.moveTo(x6, y7);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y7);
          this._context.lineTo(x6, y7);
        } else {
          var x12 = this._x * (1 - this._t) + x6 * this._t;
          this._context.lineTo(x12, this._y);
          this._context.lineTo(x12, y7);
        }
        break;
      }
    }
    this._x = x6, this._y = y7;
  }
};
function step_default(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}

// node_modules/d3-shape/src/offset/none.js
function none_default(series, order) {
  if (!((n2 = series.length) > 1))
    return;
  for (var i4 = 1, j3, s0, s1 = series[order[0]], n2, m4 = s1.length; i4 < n2; ++i4) {
    s0 = s1, s1 = series[order[i4]];
    for (j3 = 0; j3 < m4; ++j3) {
      s1[j3][1] += s1[j3][0] = isNaN(s0[j3][1]) ? s0[j3][0] : s0[j3][1];
    }
  }
}

// node_modules/d3-shape/src/order/none.js
function none_default2(series) {
  var n2 = series.length, o4 = new Array(n2);
  while (--n2 >= 0)
    o4[n2] = n2;
  return o4;
}

// node_modules/d3-shape/src/stack.js
function stackValue(d4, key) {
  return d4[key];
}
function stackSeries(key) {
  const series = [];
  series.key = key;
  return series;
}
function stack_default() {
  var keys = constant_default11([]), order = none_default2, offset = none_default, value = stackValue;
  function stack(data) {
    var sz = Array.from(keys.apply(this, arguments), stackSeries), i4, n2 = sz.length, j3 = -1, oz;
    for (const d4 of data) {
      for (i4 = 0, ++j3; i4 < n2; ++i4) {
        (sz[i4][j3] = [0, +value(d4, sz[i4].key, j3, data)]).data = d4;
      }
    }
    for (i4 = 0, oz = array_default4(order(sz)); i4 < n2; ++i4) {
      sz[oz[i4]].index = i4;
    }
    offset(sz, oz);
    return sz;
  }
  stack.keys = function(_2) {
    return arguments.length ? (keys = typeof _2 === "function" ? _2 : constant_default11(Array.from(_2)), stack) : keys;
  };
  stack.value = function(_2) {
    return arguments.length ? (value = typeof _2 === "function" ? _2 : constant_default11(+_2), stack) : value;
  };
  stack.order = function(_2) {
    return arguments.length ? (order = _2 == null ? none_default2 : typeof _2 === "function" ? _2 : constant_default11(Array.from(_2)), stack) : order;
  };
  stack.offset = function(_2) {
    return arguments.length ? (offset = _2 == null ? none_default : _2, stack) : offset;
  };
  return stack;
}

// node_modules/d3-shape/src/offset/expand.js
function expand_default(series, order) {
  if (!((n2 = series.length) > 0))
    return;
  for (var i4, n2, j3 = 0, m4 = series[0].length, y7; j3 < m4; ++j3) {
    for (y7 = i4 = 0; i4 < n2; ++i4)
      y7 += series[i4][j3][1] || 0;
    if (y7)
      for (i4 = 0; i4 < n2; ++i4)
        series[i4][j3][1] /= y7;
  }
  none_default(series, order);
}

// node_modules/d3-shape/src/offset/diverging.js
function diverging_default(series, order) {
  if (!((n2 = series.length) > 0))
    return;
  for (var i4, j3 = 0, d4, dy, yp, yn, n2, m4 = series[order[0]].length; j3 < m4; ++j3) {
    for (yp = yn = 0, i4 = 0; i4 < n2; ++i4) {
      if ((dy = (d4 = series[order[i4]][j3])[1] - d4[0]) > 0) {
        d4[0] = yp, d4[1] = yp += dy;
      } else if (dy < 0) {
        d4[1] = yn, d4[0] = yn += dy;
      } else {
        d4[0] = 0, d4[1] = dy;
      }
    }
  }
}

// node_modules/d3-shape/src/offset/silhouette.js
function silhouette_default(series, order) {
  if (!((n2 = series.length) > 0))
    return;
  for (var j3 = 0, s0 = series[order[0]], n2, m4 = s0.length; j3 < m4; ++j3) {
    for (var i4 = 0, y7 = 0; i4 < n2; ++i4)
      y7 += series[i4][j3][1] || 0;
    s0[j3][1] += s0[j3][0] = -y7 / 2;
  }
  none_default(series, order);
}

// node_modules/d3-shape/src/offset/wiggle.js
function wiggle_default(series, order) {
  if (!((n2 = series.length) > 0) || !((m4 = (s0 = series[order[0]]).length) > 0))
    return;
  for (var y7 = 0, j3 = 1, s0, m4, n2; j3 < m4; ++j3) {
    for (var i4 = 0, s1 = 0, s22 = 0; i4 < n2; ++i4) {
      var si = series[order[i4]], sij0 = si[j3][1] || 0, sij1 = si[j3 - 1][1] || 0, s32 = (sij0 - sij1) / 2;
      for (var k4 = 0; k4 < i4; ++k4) {
        var sk = series[order[k4]], skj0 = sk[j3][1] || 0, skj1 = sk[j3 - 1][1] || 0;
        s32 += skj0 - skj1;
      }
      s1 += sij0, s22 += s32 * sij0;
    }
    s0[j3 - 1][1] += s0[j3 - 1][0] = y7;
    if (s1)
      y7 -= s22 / s1;
  }
  s0[j3 - 1][1] += s0[j3 - 1][0] = y7;
  none_default(series, order);
}

// node_modules/d3-shape/src/order/appearance.js
function appearance_default(series) {
  var peaks = series.map(peak);
  return none_default2(series).sort(function(a6, b10) {
    return peaks[a6] - peaks[b10];
  });
}
function peak(series) {
  var i4 = -1, j3 = 0, n2 = series.length, vi, vj = -Infinity;
  while (++i4 < n2)
    if ((vi = +series[i4][1]) > vj)
      vj = vi, j3 = i4;
  return j3;
}

// node_modules/d3-shape/src/order/ascending.js
function ascending_default3(series) {
  var sums = series.map(sum2);
  return none_default2(series).sort(function(a6, b10) {
    return sums[a6] - sums[b10];
  });
}
function sum2(series) {
  var s5 = 0, i4 = -1, n2 = series.length, v3;
  while (++i4 < n2)
    if (v3 = +series[i4][1])
      s5 += v3;
  return s5;
}

// node_modules/d3-shape/src/order/descending.js
function descending_default3(series) {
  return ascending_default3(series).reverse();
}

// node_modules/d3-shape/src/order/insideOut.js
function insideOut_default(series) {
  var n2 = series.length, i4, j3, sums = series.map(sum2), order = appearance_default(series), top2 = 0, bottom2 = 0, tops = [], bottoms = [];
  for (i4 = 0; i4 < n2; ++i4) {
    j3 = order[i4];
    if (top2 < bottom2) {
      top2 += sums[j3];
      tops.push(j3);
    } else {
      bottom2 += sums[j3];
      bottoms.push(j3);
    }
  }
  return bottoms.reverse().concat(tops);
}

// node_modules/d3-shape/src/order/reverse.js
function reverse_default(series) {
  return none_default2(series).reverse();
}

// node_modules/d3-zoom/src/constant.js
var constant_default12 = (x6) => () => x6;

// node_modules/d3-zoom/src/event.js
function ZoomEvent(type2, {
  sourceEvent,
  target,
  transform: transform2,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type2, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform2, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}

// node_modules/d3-zoom/src/transform.js
function Transform(k4, x6, y7) {
  this.k = k4;
  this.x = x6;
  this.y = y7;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k4) {
    return k4 === 1 ? this : new Transform(this.k * k4, this.x, this.y);
  },
  translate: function(x6, y7) {
    return x6 === 0 & y7 === 0 ? this : new Transform(this.k, this.x + this.k * x6, this.y + this.k * y7);
  },
  apply: function(point6) {
    return [point6[0] * this.k + this.x, point6[1] * this.k + this.y];
  },
  applyX: function(x6) {
    return x6 * this.k + this.x;
  },
  applyY: function(y7) {
    return y7 * this.k + this.y;
  },
  invert: function(location2) {
    return [(location2[0] - this.x) / this.k, (location2[1] - this.y) / this.k];
  },
  invertX: function(x6) {
    return (x6 - this.x) / this.k;
  },
  invertY: function(y7) {
    return (y7 - this.y) / this.k;
  },
  rescaleX: function(x6) {
    return x6.copy().domain(x6.range().map(this.invertX, this).map(x6.invert, x6));
  },
  rescaleY: function(y7) {
    return y7.copy().domain(y7.range().map(this.invertY, this).map(y7.invert, y7));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity4 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom)
    if (!(node = node.parentNode))
      return identity4;
  return node.__zoom;
}

// node_modules/d3-zoom/src/noevent.js
function nopropagation3(event) {
  event.stopImmediatePropagation();
}
function noevent_default3(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-zoom/src/zoom.js
function defaultFilter3(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent2() {
  var e3 = this;
  if (e3 instanceof SVGElement) {
    e3 = e3.ownerSVGElement || e3;
    if (e3.hasAttribute("viewBox")) {
      e3 = e3.viewBox.baseVal;
      return [[e3.x, e3.y], [e3.x + e3.width, e3.y + e3.height]];
    }
    return [[0, 0], [e3.width.baseVal.value, e3.height.baseVal.value]];
  }
  return [[0, 0], [e3.clientWidth, e3.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity4;
}
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable3() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform2, extent, translateExtent) {
  var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
  return transform2.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function zoom_default2() {
  var filter3 = defaultFilter3, extent = defaultExtent2, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable3, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom.transform = function(collection, transform2, point6, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule(collection, transform2, point6, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom.scaleBy = function(selection2, k4, p3, event) {
    zoom.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k4 === "function" ? k4.apply(this, arguments) : k4;
      return k0 * k1;
    }, p3, event);
  };
  zoom.scaleTo = function(selection2, k4, p3, event) {
    zoom.transform(selection2, function() {
      var e3 = extent.apply(this, arguments), t03 = this.__zoom, p02 = p3 == null ? centroid(e3) : typeof p3 === "function" ? p3.apply(this, arguments) : p3, p1 = t03.invert(p02), k1 = typeof k4 === "function" ? k4.apply(this, arguments) : k4;
      return constrain(translate2(scale(t03, k1), p02, p1), e3, translateExtent);
    }, p3, event);
  };
  zoom.translateBy = function(selection2, x6, y7, event) {
    zoom.transform(selection2, function() {
      return constrain(this.__zoom.translate(typeof x6 === "function" ? x6.apply(this, arguments) : x6, typeof y7 === "function" ? y7.apply(this, arguments) : y7), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom.translateTo = function(selection2, x6, y7, p3, event) {
    zoom.transform(selection2, function() {
      var e3 = extent.apply(this, arguments), t4 = this.__zoom, p02 = p3 == null ? centroid(e3) : typeof p3 === "function" ? p3.apply(this, arguments) : p3;
      return constrain(identity4.translate(p02[0], p02[1]).scale(t4.k).translate(typeof x6 === "function" ? -x6.apply(this, arguments) : -x6, typeof y7 === "function" ? -y7.apply(this, arguments) : -y7), e3, translateExtent);
    }, p3, event);
  };
  function scale(transform2, k4) {
    k4 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k4));
    return k4 === transform2.k ? transform2 : new Transform(k4, transform2.x, transform2.y);
  }
  function translate2(transform2, p02, p1) {
    var x6 = p02[0] - p1[0] * transform2.k, y7 = p02[1] - p1[1] * transform2.k;
    return x6 === transform2.x && y7 === transform2.y ? transform2 : new Transform(transform2.k, x6, y7);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule(transition2, transform2, point6, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g3 = gesture(that, args).event(event), e3 = extent.apply(that, args), p3 = point6 == null ? centroid(e3) : typeof point6 === "function" ? point6.apply(that, args) : point6, w3 = Math.max(e3[1][0] - e3[0][0], e3[1][1] - e3[0][1]), a6 = that.__zoom, b10 = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i4 = interpolate(a6.invert(p3).concat(w3 / a6.k), b10.invert(p3).concat(w3 / b10.k));
      return function(t4) {
        if (t4 === 1)
          t4 = b10;
        else {
          var l4 = i4(t4), k4 = w3 / l4[2];
          t4 = new Transform(k4, p3[0] - l4[0] * k4, p3[1] - l4[1] * k4);
        }
        g3.zoom(null, t4);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event)
        this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform2) {
      if (this.mouse && key !== "mouse")
        this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch")
        this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch")
        this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type2) {
      var d4 = select_default2(this.that).datum();
      listeners.call(type2, this.that, new ZoomEvent(type2, {
        sourceEvent: this.sourceEvent,
        target: zoom,
        type: type2,
        transform: this.that.__zoom,
        dispatch: listeners
      }), d4);
    }
  };
  function wheeled(event, ...args) {
    if (!filter3.apply(this, arguments))
      return;
    var g3 = gesture(this, args).event(event), t4 = this.__zoom, k4 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t4.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p3 = pointer_default(event);
    if (g3.wheel) {
      if (g3.mouse[0][0] !== p3[0] || g3.mouse[0][1] !== p3[1]) {
        g3.mouse[1] = t4.invert(g3.mouse[0] = p3);
      }
      clearTimeout(g3.wheel);
    } else if (t4.k === k4)
      return;
    else {
      g3.mouse = [p3, t4.invert(p3)];
      interrupt_default(this);
      g3.start();
    }
    noevent_default3(event);
    g3.wheel = setTimeout(wheelidled, wheelDelay);
    g3.zoom("mouse", constrain(translate2(scale(t4, k4), g3.mouse[0], g3.mouse[1]), g3.extent, translateExtent));
    function wheelidled() {
      g3.wheel = null;
      g3.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter3.apply(this, arguments))
      return;
    var g3 = gesture(this, args, true).event(event), v3 = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p3 = pointer_default(event, currentTarget), currentTarget = event.currentTarget, x06 = event.clientX, y06 = event.clientY;
    nodrag_default(event.view);
    nopropagation3(event);
    g3.mouse = [p3, this.__zoom.invert(p3)];
    interrupt_default(this);
    g3.start();
    function mousemoved(event2) {
      noevent_default3(event2);
      if (!g3.moved) {
        var dx = event2.clientX - x06, dy = event2.clientY - y06;
        g3.moved = dx * dx + dy * dy > clickDistance2;
      }
      g3.event(event2).zoom("mouse", constrain(translate2(g3.that.__zoom, g3.mouse[0] = pointer_default(event2, currentTarget), g3.mouse[1]), g3.extent, translateExtent));
    }
    function mouseupped(event2) {
      v3.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event2.view, g3.moved);
      noevent_default3(event2);
      g3.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter3.apply(this, arguments))
      return;
    var t03 = this.__zoom, p02 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t03.invert(p02), k1 = t03.k * (event.shiftKey ? 0.5 : 2), t13 = constrain(translate2(scale(t03, k1), p02, p1), extent.apply(this, args), translateExtent);
    noevent_default3(event);
    if (duration > 0)
      select_default2(this).transition().duration(duration).call(schedule, t13, p02, event);
    else
      select_default2(this).call(zoom.transform, t13, p02, event);
  }
  function touchstarted(event, ...args) {
    if (!filter3.apply(this, arguments))
      return;
    var touches = event.touches, n2 = touches.length, g3 = gesture(this, args, event.changedTouches.length === n2).event(event), started, i4, t4, p3;
    nopropagation3(event);
    for (i4 = 0; i4 < n2; ++i4) {
      t4 = touches[i4], p3 = pointer_default(t4, this);
      p3 = [p3, this.__zoom.invert(p3), t4.identifier];
      if (!g3.touch0)
        g3.touch0 = p3, started = true, g3.taps = 1 + !!touchstarting;
      else if (!g3.touch1 && g3.touch0[2] !== p3[2])
        g3.touch1 = p3, g3.taps = 0;
    }
    if (touchstarting)
      touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g3.taps < 2)
        touchfirst = p3[0], touchstarting = setTimeout(function() {
          touchstarting = null;
        }, touchDelay);
      interrupt_default(this);
      g3.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming)
      return;
    var g3 = gesture(this, args).event(event), touches = event.changedTouches, n2 = touches.length, i4, t4, p3, l4;
    noevent_default3(event);
    for (i4 = 0; i4 < n2; ++i4) {
      t4 = touches[i4], p3 = pointer_default(t4, this);
      if (g3.touch0 && g3.touch0[2] === t4.identifier)
        g3.touch0[0] = p3;
      else if (g3.touch1 && g3.touch1[2] === t4.identifier)
        g3.touch1[0] = p3;
    }
    t4 = g3.that.__zoom;
    if (g3.touch1) {
      var p02 = g3.touch0[0], l0 = g3.touch0[1], p1 = g3.touch1[0], l1 = g3.touch1[1], dp = (dp = p1[0] - p02[0]) * dp + (dp = p1[1] - p02[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t4 = scale(t4, Math.sqrt(dp / dl));
      p3 = [(p02[0] + p1[0]) / 2, (p02[1] + p1[1]) / 2];
      l4 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g3.touch0)
      p3 = g3.touch0[0], l4 = g3.touch0[1];
    else
      return;
    g3.zoom("touch", constrain(translate2(t4, p3, l4), g3.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming)
      return;
    var g3 = gesture(this, args).event(event), touches = event.changedTouches, n2 = touches.length, i4, t4;
    nopropagation3(event);
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i4 = 0; i4 < n2; ++i4) {
      t4 = touches[i4];
      if (g3.touch0 && g3.touch0[2] === t4.identifier)
        delete g3.touch0;
      else if (g3.touch1 && g3.touch1[2] === t4.identifier)
        delete g3.touch1;
    }
    if (g3.touch1 && !g3.touch0)
      g3.touch0 = g3.touch1, delete g3.touch1;
    if (g3.touch0)
      g3.touch0[1] = this.__zoom.invert(g3.touch0[0]);
    else {
      g3.end();
      if (g3.taps === 2) {
        t4 = pointer_default(t4, this);
        if (Math.hypot(touchfirst[0] - t4[0], touchfirst[1] - t4[1]) < tapDistance) {
          var p3 = select_default2(this).on("dblclick.zoom");
          if (p3)
            p3.apply(this, arguments);
        }
      }
    }
  }
  zoom.wheelDelta = function(_2) {
    return arguments.length ? (wheelDelta = typeof _2 === "function" ? _2 : constant_default12(+_2), zoom) : wheelDelta;
  };
  zoom.filter = function(_2) {
    return arguments.length ? (filter3 = typeof _2 === "function" ? _2 : constant_default12(!!_2), zoom) : filter3;
  };
  zoom.touchable = function(_2) {
    return arguments.length ? (touchable = typeof _2 === "function" ? _2 : constant_default12(!!_2), zoom) : touchable;
  };
  zoom.extent = function(_2) {
    return arguments.length ? (extent = typeof _2 === "function" ? _2 : constant_default12([[+_2[0][0], +_2[0][1]], [+_2[1][0], +_2[1][1]]]), zoom) : extent;
  };
  zoom.scaleExtent = function(_2) {
    return arguments.length ? (scaleExtent[0] = +_2[0], scaleExtent[1] = +_2[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom.translateExtent = function(_2) {
    return arguments.length ? (translateExtent[0][0] = +_2[0][0], translateExtent[1][0] = +_2[1][0], translateExtent[0][1] = +_2[0][1], translateExtent[1][1] = +_2[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom.constrain = function(_2) {
    return arguments.length ? (constrain = _2, zoom) : constrain;
  };
  zoom.duration = function(_2) {
    return arguments.length ? (duration = +_2, zoom) : duration;
  };
  zoom.interpolate = function(_2) {
    return arguments.length ? (interpolate = _2, zoom) : interpolate;
  };
  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };
  zoom.clickDistance = function(_2) {
    return arguments.length ? (clickDistance2 = (_2 = +_2) * _2, zoom) : Math.sqrt(clickDistance2);
  };
  zoom.tapDistance = function(_2) {
    return arguments.length ? (tapDistance = +_2, zoom) : tapDistance;
  };
  return zoom;
}

// packages/results2019-2020/src/constants.js
var NA_SYMBOL = "NA";
var GRAPH_TYPE = {
  scatterplot: "scatterplot",
  heatmap: "heatmap",
  density: "density scatterplot",
  contour: "contour",
  colorContour: "color contour",
  contourScatterplot: "contour scatterplot",
  numbers: "numbers",
  proportions: "proportions"
};
var COLOR_SCHEME = {
  greyscale: "interpolateGreys",
  viridis: "interpolateViridis",
  plasma: "interpolatePlasma",
  warm: "interpolateWarm",
  cividis: "interpolateCividis",
  coolwarm: "coolwarm",
  nicolas: "nicolas",
  nicolas2: "nicolas2",
  nicolas3: "nicolas3",
  nicolas4: "nicolas4"
};
var CUSTOM_COLORS = {
  coolwarm: rgbBasis(["CornflowerBlue", "DimGray", "IndianRed"]),
  nicolas: rgbBasis([
    "#de0000",
    "#b9001e",
    "#a5013c",
    "#920e64",
    "#782793",
    "#694dc6",
    "#4e6ee3",
    "#1e83ff",
    "#03a2ff"
  ]),
  nicolas2: rgbBasis(["#efddff", "#e6abe6", "#d65da4", "#d65da4", "#640700"]),
  nicolas3: rgbBasis(["#eeeeee", "#272727"]),
  nicolas4: rgbBasis([
    "#e2e2e2",
    "#c4c4c4",
    "#a1a1a1",
    "#7c7c7c",
    "#5f5f5f",
    "#4a4a4a",
    "#3b3b3b",
    "#2d2d2d"
  ])
};
var DEFAULT_COLOR_SCHEME = COLOR_SCHEME.nicolas4;
var DEFAULT_GRAPH_TYPE = GRAPH_TYPE.scatterplot;
var DEFAULT_DOT_SIZE = 22;
var DEFAULT_DOT_OPACITY = 0.28;
var DEFAULT_COLOR_MID = 1;
var DEFAULT_CANVAS_WIDTH = 1e3;
var DEFAULT_CANVAS_HEIGHT = 1e3;
var DEFAULT_CANVAS_MARGIN = {
  top: 30,
  bottom: 30,
  right: 100,
  left: 100
};
var DATASETS = {
  language: ["en", "fr"],
  form: ["aga", "ba"]
};
var MARGIN = DEFAULT_CANVAS_MARGIN;
var UNCERTAINTY = 0.5;
var DOMAIN = [-15, 15];
var AXES_DOMAIN = [-10, 10];
function rangeDiscreet(range3) {
  const min4 = Math.min(...range3), max5 = Math.max(...range3);
  return new Array(max5 - min4 + 1).fill(0).map((_2, i4) => i4 + min4);
}
var DOMAIN_DISCREET = rangeDiscreet(DOMAIN);
var AXES_DOMAIN_DISCREET = rangeDiscreet(AXES_DOMAIN);
var ORIGIN = {
  x: MARGIN.left + DEFAULT_CANVAS_WIDTH / 2,
  y: MARGIN.top + DEFAULT_CANVAS_HEIGHT / 2
};
var VIEWBOX = [
  0,
  0,
  MARGIN.left + DEFAULT_CANVAS_WIDTH + MARGIN.right,
  MARGIN.top + DEFAULT_CANVAS_HEIGHT + MARGIN.bottom
];
var INITIAL_STATE = {
  data: null,
  filteredDataset: null,
  standardRegionCounts: null,
  questions: null,
  vizColumns: [],
  standardColumnSet: [],
  customViz: false,
  userAxes: {
    x: "",
    y: ""
  },
  brushMap: {},
  colorScale: () => {
  },
  options: {
    reverseColor: false,
    size: DEFAULT_DOT_SIZE,
    opacity: DEFAULT_DOT_OPACITY,
    contourBandwidth: 25,
    graph: DEFAULT_GRAPH_TYPE,
    color: DEFAULT_COLOR_SCHEME,
    k: DEFAULT_COLOR_MID,
    dataset: {
      aga: true,
      ba: true,
      en: true,
      fr: true
    }
  }
};

// node_modules/d3-dsv/src/dsv.js
var EOL2 = {};
var EOF2 = {};
var QUOTE2 = 34;
var NEWLINE2 = 10;
var RETURN2 = 13;
function objectConverter2(columns) {
  return new Function("d", "return {" + columns.map(function(name, i4) {
    return JSON.stringify(name) + ": d[" + i4 + '] || ""';
  }).join(",") + "}");
}
function customConverter2(columns, f4) {
  var object2 = objectConverter2(columns);
  return function(row, i4) {
    return f4(object2(row), i4, columns);
  };
}
function inferColumns2(rows) {
  var columnSet = /* @__PURE__ */ Object.create(null), columns = [];
  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });
  return columns;
}
function pad3(value, width) {
  var s5 = value + "", length3 = s5.length;
  return length3 < width ? new Array(width - length3 + 1).join(0) + s5 : s5;
}
function formatYear3(year2) {
  return year2 < 0 ? "-" + pad3(-year2, 6) : year2 > 9999 ? "+" + pad3(year2, 6) : pad3(year2, 4);
}
function formatDate2(date2) {
  var hours2 = date2.getUTCHours(), minutes2 = date2.getUTCMinutes(), seconds2 = date2.getUTCSeconds(), milliseconds2 = date2.getUTCMilliseconds();
  return isNaN(date2) ? "Invalid Date" : formatYear3(date2.getUTCFullYear(), 4) + "-" + pad3(date2.getUTCMonth() + 1, 2) + "-" + pad3(date2.getUTCDate(), 2) + (milliseconds2 ? "T" + pad3(hours2, 2) + ":" + pad3(minutes2, 2) + ":" + pad3(seconds2, 2) + "." + pad3(milliseconds2, 3) + "Z" : seconds2 ? "T" + pad3(hours2, 2) + ":" + pad3(minutes2, 2) + ":" + pad3(seconds2, 2) + "Z" : minutes2 || hours2 ? "T" + pad3(hours2, 2) + ":" + pad3(minutes2, 2) + "Z" : "");
}
function dsv_default2(delimiter) {
  var reFormat = new RegExp('["' + delimiter + "\n\r]"), DELIMITER = delimiter.charCodeAt(0);
  function parse(text, f4) {
    var convert, columns, rows = parseRows(text, function(row, i4) {
      if (convert)
        return convert(row, i4 - 1);
      columns = row, convert = f4 ? customConverter2(row, f4) : objectConverter2(row);
    });
    rows.columns = columns || [];
    return rows;
  }
  function parseRows(text, f4) {
    var rows = [], N2 = text.length, I2 = 0, n2 = 0, t4, eof = N2 <= 0, eol = false;
    if (text.charCodeAt(N2 - 1) === NEWLINE2)
      --N2;
    if (text.charCodeAt(N2 - 1) === RETURN2)
      --N2;
    function token() {
      if (eof)
        return EOF2;
      if (eol)
        return eol = false, EOL2;
      var i4, j3 = I2, c8;
      if (text.charCodeAt(j3) === QUOTE2) {
        while (I2++ < N2 && text.charCodeAt(I2) !== QUOTE2 || text.charCodeAt(++I2) === QUOTE2)
          ;
        if ((i4 = I2) >= N2)
          eof = true;
        else if ((c8 = text.charCodeAt(I2++)) === NEWLINE2)
          eol = true;
        else if (c8 === RETURN2) {
          eol = true;
          if (text.charCodeAt(I2) === NEWLINE2)
            ++I2;
        }
        return text.slice(j3 + 1, i4 - 1).replace(/""/g, '"');
      }
      while (I2 < N2) {
        if ((c8 = text.charCodeAt(i4 = I2++)) === NEWLINE2)
          eol = true;
        else if (c8 === RETURN2) {
          eol = true;
          if (text.charCodeAt(I2) === NEWLINE2)
            ++I2;
        } else if (c8 !== DELIMITER)
          continue;
        return text.slice(j3, i4);
      }
      return eof = true, text.slice(j3, N2);
    }
    while ((t4 = token()) !== EOF2) {
      var row = [];
      while (t4 !== EOL2 && t4 !== EOF2)
        row.push(t4), t4 = token();
      if (f4 && (row = f4(row, n2++)) == null)
        continue;
      rows.push(row);
    }
    return rows;
  }
  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }
  function format2(rows, columns) {
    if (columns == null)
      columns = inferColumns2(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }
  function formatBody(rows, columns) {
    if (columns == null)
      columns = inferColumns2(rows);
    return preformatBody(rows, columns).join("\n");
  }
  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }
  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }
  function formatValue(value) {
    return value == null ? "" : value instanceof Date ? formatDate2(value) : reFormat.test(value += "") ? '"' + value.replace(/"/g, '""') + '"' : value;
  }
  return {
    parse,
    parseRows,
    format: format2,
    formatBody,
    formatRows,
    formatRow,
    formatValue
  };
}

// node_modules/d3-dsv/src/csv.js
var csv3 = dsv_default2(",");
var csvParse2 = csv3.parse;
var csvParseRows2 = csv3.parseRows;
var csvFormat2 = csv3.format;
var csvFormatBody2 = csv3.formatBody;
var csvFormatRows2 = csv3.formatRows;
var csvFormatRow2 = csv3.formatRow;
var csvFormatValue2 = csv3.formatValue;

// node_modules/d3-dsv/src/tsv.js
var tsv3 = dsv_default2("	");
var tsvParse2 = tsv3.parse;
var tsvParseRows2 = tsv3.parseRows;
var tsvFormat2 = tsv3.format;
var tsvFormatBody2 = tsv3.formatBody;
var tsvFormatRows2 = tsv3.formatRows;
var tsvFormatRow2 = tsv3.formatRow;
var tsvFormatValue2 = tsv3.formatValue;

// node_modules/d3-fetch/src/text.js
function responseText2(response) {
  if (!response.ok)
    throw new Error(response.status + " " + response.statusText);
  return response.text();
}
function text_default4(input, init2) {
  return fetch(input, init2).then(responseText2);
}

// node_modules/d3-fetch/src/dsv.js
function dsvParse2(parse) {
  return function(input, init2, row) {
    if (arguments.length === 2 && typeof init2 === "function")
      row = init2, init2 = void 0;
    return text_default4(input, init2).then(function(response) {
      return parse(response, row);
    });
  };
}
var csv4 = dsvParse2(csvParse2);
var tsv4 = dsvParse2(tsvParse2);

// packages/results2019-2020/src/fetch/parseLocalCSV.js
function parseLocalCSV(path2) {
  return __async(this, null, function* () {
    return yield csv4(path2, (d4) => {
      const row = d4;
      for (let col in row) {
        if (col !== "poll" && col != "Language" && row[col] !== NA_SYMBOL) {
          row[col] = +row[col];
        }
      }
      return row;
    }).then((data) => {
      data.forEach((d4, i4) => d4.id = i4);
      return data;
    });
  });
}

// packages/results2019-2020/src/lib/data-manipulation.js
var import_lodash = __toESM(require_lodash());

// packages/results2019-2020/src/fetch/jitter.js
function jitter_default(k4) {
  return Math.random() * k4 * 2 - k4;
}

// packages/results2019-2020/src/lib/misc.jsx
init_preact_module();

// packages/results2019-2020/src/components/viz/color-contour.jsx
init_preact_module();

// packages/results2019-2020/src/hooks/useD3.js
var useD3 = (renderChartFn, dependencies) => {
  const ref = s2();
  y2(() => {
    renderChartFn(select_default2(ref.current));
    return () => {
    };
  }, [renderChartFn, ...dependencies]);
  return ref;
};

// packages/results2019-2020/src/components/viz/scatterplot-axes.jsx
init_preact_module();

// packages/results2019-2020/src/lib/scales.js
var xScale = linear3().domain(DOMAIN).range([MARGIN.left, MARGIN.left + DEFAULT_CANVAS_WIDTH]);
var yScale = linear3().domain(DOMAIN).range([MARGIN.top + DEFAULT_CANVAS_HEIGHT, MARGIN.top]);
var xBand = band().domain(DOMAIN_DISCREET).range([MARGIN.left, MARGIN.left + DEFAULT_CANVAS_WIDTH]);
var yBand = band().domain(DOMAIN_DISCREET).range([MARGIN.top + DEFAULT_CANVAS_HEIGHT, MARGIN.top]);

// packages/results2019-2020/src/components/viz/scatterplot-axes.jsx
var xAxisScale = linear3(AXES_DOMAIN).range([xScale(AXES_DOMAIN[0]), xScale(AXES_DOMAIN[1])]);
var yAxisScale = linear3(AXES_DOMAIN).range([yScale(AXES_DOMAIN[1]), yScale(AXES_DOMAIN[0])]);
var xAxis = (g3) => g3.attr("transform", `translate(0, ${ORIGIN.y})`).attr("class", "axis").call(axisBottom(xAxisScale).ticks("").tickSizeOuter(0));
var yAxis = (g3) => g3.attr("transform", `translate(${ORIGIN.x}, 0)`).attr("class", "axis").call(axisLeft(yAxisScale).ticks("").tickSizeOuter(0));
var ARROW_LENGTH = 24;
var ARROW_FEATHER_SIZE = 8;
var CARDINAL_MATRICES = [
  [
    [
      [1, 0],
      [0, 1]
    ],
    [
      [-1, 0],
      [0, 1]
    ]
  ],
  [
    [
      [0, -1],
      [1, 0]
    ],
    [
      [0, -1],
      [-1, 0]
    ]
  ],
  [
    [
      [-1, 0],
      [0, -1]
    ],
    [
      [1, 0],
      [0, -1]
    ]
  ],
  [
    [
      [0, 1],
      [-1, 0]
    ],
    [
      [0, 1],
      [1, 0]
    ]
  ]
];
var scaledArrowTips = [
  [ORIGIN.x, yScale(AXES_DOMAIN[1]) - ARROW_LENGTH],
  [xScale(AXES_DOMAIN[1]) + ARROW_LENGTH, ORIGIN.y],
  [ORIGIN.x, yScale(AXES_DOMAIN[0]) + ARROW_LENGTH],
  [xScale(AXES_DOMAIN[0]) - ARROW_LENGTH, ORIGIN.y]
];
var ARROW_PATHS = scaledArrowTips.map((arrow, i4) => {
  let v1, v22;
  const translate2 = (n2) => (p3, j3) => p3 + CARDINAL_MATRICES[i4][n2][j3][0] * ARROW_FEATHER_SIZE + CARDINAL_MATRICES[i4][n2][j3][1] * ARROW_LENGTH;
  v1 = arrow.map(translate2(0));
  v22 = arrow.map(translate2(1));
  return [...arrow, ...v1, ...v22];
});
var arrowheads = (g3) => {
  g3.attr("class", "arrowhead").selectAll("path").data(ARROW_PATHS).join("path").attr("d", (d4) => `M${d4[0]} ${d4[1]} L ${d4[2]} ${d4[3]} L ${d4[4]} ${d4[5]} Z`);
};
function appendAxes(svg2) {
  svg2.append("g").call(xAxis);
  svg2.append("g").call(yAxis);
  svg2.append("g").call(arrowheads);
}

// packages/results2019-2020/src/components/viz/color-contour.jsx
function ColorContour({ data, columns: columns2d, options }) {
  const ref = useD3((svg2) => {
    svg2.selectAll("*").remove();
    const densityData = computeDensity(data, options.contourBandwidth, columns2d);
    const color2 = getColorScale(options.color, [Math.min(...densityData.map((d4) => d4.value)), Math.max(...densityData.map((d4) => d4.value))], options.reverseColor);
    svg2.append("g").selectAll("path").data(densityData).enter().append("path").attr("class", "coutourPath").attr("d", path_default2()).attr("fill", (d4) => color2(d4.value));
    appendAxes(svg2);
  }, [data, columns2d, options.color, options.contourBandwidth, options.reverseColor]);
  return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("svg", {
    ref,
    viewBox: VIEWBOX.join(","),
    width: VIEWBOX[2],
    height: VIEWBOX[3],
    style: "width: 100%; height: auto;"
  }));
}

// packages/results2019-2020/src/components/viz/contour.jsx
init_preact_module();
function ContourChart({ data, columns, options }) {
  const ref = useD3((svg2) => {
    svg2.selectAll("*").remove();
    const densityData = computeDensity(data, options.contourBandwidth, columns);
    svg2.append("g").selectAll("path").data(densityData).enter().append("path").attr("class", "contourPath").attr("d", path_default2());
    appendAxes(svg2);
  }, [data, columns, options.contourBandwidth]);
  return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("svg", {
    ref,
    viewBox: VIEWBOX.join(","),
    width: VIEWBOX[2],
    height: VIEWBOX[3],
    style: "width: 100%; height: auto;"
  }));
}

// packages/results2019-2020/src/components/viz/contour-scatterplot.jsx
init_preact_module();
function ContourScatterplot({ data, columns, options, brushMap, callback }) {
  let [x6, y7] = columns;
  const isMobile = useMobileContext();
  const hasBrushing = Object.keys(brushMap).length > 0;
  function getClasses(d4) {
    let classes = "dot";
    if (hasBrushing) {
      classes += brushMap[d4.id] ? " brushed" : " notbrushed";
    }
    return classes;
  }
  const ref = useD3((svg2) => {
    svg2.selectAll("*").remove();
    svg2.append("g").selectAll("path").data(data.map((d4, i4) => brushMap[i4] ? __spreadProps(__spreadValues({}, d4), { brushed: true }) : d4).filter((d4) => isValidDatum(d4, columns))).join("path").attr("stroke-width", options.size).attr("stroke-opacity", options.opacity).attr("class", getClasses).attr("d", (d4) => `M${xScale(d4[x6])}, ${yScale(d4[y7])}h0`);
    const densityData = computeDensity(data, options.contourBandwidth, columns);
    svg2.append("g").selectAll("path").data(densityData).enter().append("path").attr("class", "contourPath").attr("d", path_default2());
    appendAxes(svg2);
    if (!isMobile)
      svg2.append("g").call(makeBrushTool(brushFn(data, columns, callback)));
  }, [data, columns, brushMap, options.size, options.opacity, options.contourBandwidth]);
  return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("svg", {
    id: "dataviz_scatterplot",
    class: "viz",
    ref,
    viewBox: `0, 0, ${DEFAULT_CANVAS_WIDTH}, ${DEFAULT_CANVAS_HEIGHT}`,
    width: DEFAULT_CANVAS_WIDTH,
    height: DEFAULT_CANVAS_HEIGHT
  }));
}

// packages/results2019-2020/src/components/viz/density-scatterplot.jsx
init_preact_module();
function DensityScatterplot({ data, columns, options, brushMap, callback }) {
  let [x6, y7] = columns;
  const isMobile = useMobileContext();
  const hasBrushing = Object.keys(brushMap).length > 0;
  function getClasses(d4) {
    let classes = "dot";
    if (hasBrushing) {
      classes += brushMap[d4.id] ? " brushed" : " notbrushed";
    }
    return classes;
  }
  const ref = useD3((svg2) => {
    svg2.selectAll("*").remove();
    svg2.append("g").selectAll("path").data(data.filter((d4) => isValidDatum(d4, columns))).join("path").attr("stroke-width", options.size).attr("stroke-opacity", options.opacity).attr("class", getClasses).attr("d", (d4) => `M${xScale(d4[x6])}, ${yScale(d4[y7])}h0`);
    appendAxes(svg2);
    if (!isMobile)
      svg2.append("g").call(makeBrushTool(brushFn(data, columns, callback)));
    function calcDensity(column, range3) {
      const obj = {};
      data.filter((d4) => isValidDatum(d4, column)).map((d4) => symFloor(d4[column])).filter((n2) => inRange(n2, range3)).forEach((n2) => {
        if (obj[n2] == null)
          obj[n2] = 1;
        else
          obj[n2] += 1;
      });
      for (let i4 = range3[0]; i4 <= range3[1]; i4++) {
        if (obj[i4] == null)
          obj[i4] = 0;
      }
      return Object.entries(obj).sort(([a6, _2], [b10, __]) => a6 - b10).map(([a6, b10]) => [+a6, b10]);
    }
    const hDensity = calcDensity(x6, AXES_DOMAIN);
    const vDensity = calcDensity(y7, AXES_DOMAIN);
    const max5 = (d4) => Math.max(...d4.map(([_2, d5]) => d5));
    const hMax = max5(hDensity);
    const vMax = max5(vDensity);
    function dScale(max6, scl, range3) {
      return linear3().domain([0, max6]).range([scl(range3[0]), scl(range3[1])]);
    }
    const hScale = dScale(hMax, yScale, [AXES_DOMAIN[1], DOMAIN[1]]);
    const vScale = dScale(vMax, xScale, [AXES_DOMAIN[1], DOMAIN[1]]);
    const curveFn = cardinal_default;
    const hLine = line_default2().x(([n2, _2]) => xScale(n2)).y(([_2, d4]) => hScale(d4)).curve(curveFn);
    const vLine = line_default2().x(([_2, d4]) => vScale(d4)).y(([n2, _2]) => yScale(n2)).curve(curveFn);
    svg2.append("path").attr("class", "densityline").datum(hDensity).attr("d", hLine);
    svg2.append("path").attr("class", "densityline").datum(vDensity).attr("d", vLine);
    appendAxes(svg2);
  }, [data, columns, brushMap, options.size, options.opacity, options.k]);
  function isBrushed2(extent, x7, y8) {
    const x06 = extent[0][0], y06 = extent[0][1], x12 = extent[1][0], y12 = extent[1][1];
    return x06 <= x7 && x7 <= x12 && y06 <= y8 && y8 <= y12;
  }
  return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("svg", {
    id: "dataviz_scatterplot",
    class: "viz",
    ref,
    viewBox: `0, 0, ${DEFAULT_CANVAS_WIDTH}, ${DEFAULT_CANVAS_HEIGHT}`,
    width: DEFAULT_CANVAS_WIDTH,
    height: DEFAULT_CANVAS_HEIGHT
  }));
}

// packages/results2019-2020/src/components/viz/heatmap.jsx
init_preact_module();
function Heatmap({ data, columns, options }) {
  const ref = useD3((svg2) => {
    const heatmap = calcHeatmap(data, columns);
    let min4 = Infinity, max5 = -Infinity;
    for (let { value } of heatmap) {
      let n2 = value;
      min4 = n2 < min4 ? n2 : min4;
      max5 = n2 > max5 ? n2 : max5;
    }
    const average = heatmap.map(({ value }) => value).reduce((sum3, v3) => {
      return v3 + sum3;
    }, 0) / heatmap.length;
    max5 = average + (max5 - average) * 0.4;
    const colorScale = getColorScale(options.color, [min4, max5], options.reverseColor);
    svg2.selectAll("*").remove();
    svg2.append("g").selectAll("rect").data(heatmap).join("rect").attr("class", "rect graphcontent").attr("stroke", "none").attr("rx", "4").attr("ry", `${4 * yBand.bandwidth() / xBand.bandwidth()}`).attr("y", (d4) => yScale(d4.y + UNCERTAINTY)).attr("x", (d4) => xScale(d4.x - UNCERTAINTY)).attr("width", xBand.bandwidth()).attr("height", yBand.bandwidth()).attr("fill", (d4) => colorScale(d4.value));
    appendAxes(svg2);
  }, [data, columns, options.color, options.reverseColor]);
  return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("svg", {
    ref,
    viewBox: VIEWBOX.join(","),
    width: VIEWBOX[2],
    height: VIEWBOX[3],
    style: "width: 100%; height: auto;"
  }));
}

// packages/results2019-2020/src/components/viz/scatterplot.jsx
init_preact_module();
function Scatterplot({ data, columns, options, brushMap, dispatch: dispatch2 }) {
  let [x6, y7] = columns;
  const isMobile = useMobileContext();
  const hasBrushing = Object.keys(brushMap).length > 0;
  function getClasses(d4) {
    let classes = "dot";
    if (hasBrushing) {
      classes += brushMap[d4.id] ? " brushed" : " notbrushed";
    }
    return classes;
  }
  const ref = useD3((svg2) => {
    svg2.selectAll("*").remove();
    svg2.append("g").selectAll("path").data(data.filter((d4) => isValidDatum(d4, columns))).join("path").attr("stroke-width", options.size).attr("stroke-opacity", options.opacity).attr("class", getClasses).attr("d", (d4) => `M${xScale(d4[x6])}, ${yScale(d4[y7])}h0`);
    appendAxes(svg2);
    if (!isMobile)
      svg2.append("g").call(makeBrushTool(brushFn(data, columns, dispatch2)));
  }, [data, columns, brushMap, options.size, options.opacity]);
  return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("svg", {
    ref,
    viewBox: VIEWBOX.join(","),
    width: VIEWBOX[2],
    height: VIEWBOX[3],
    style: "width: 100%; height: auto;"
  }));
}

// packages/results2019-2020/src/components/viz/numbers.jsx
init_preact_module();

// packages/results2019-2020/src/components/viz/labels.js
function appendLabel(svg2, textContent, x6, y7) {
  const label = svg2.append("g").attr("transform", `translate(${xScale(x6)}, ${yScale(y7)})`);
  label.append("text").text(textContent).style("stroke", "white").style("stroke-width", "20px");
  label.append("text").text(textContent).style("fill", "black");
}

// packages/results2019-2020/src/components/viz/numbers.jsx
function Numbers({ state, columns }) {
  let [x6, y7] = columns;
  let counts;
  if (inStandardColumnSet(state.standardColumnSet, columns))
    counts = state.standardRegionCounts[x6];
  else
    counts = countGraphRegions(state.processedRawData, columns);
  const ref = useD3((svg2) => {
    svg2.selectAll("*").remove();
    appendAxes(svg2);
    appendLabel(svg2, counts.origin, 0, 0);
    const getQuadrantTotal = (quadrant) => counts.quadrants[quadrant] + counts.outerQuadrants[quadrant];
    const nw = getQuadrantTotal("nw");
    const ne = getQuadrantTotal("ne");
    const se = getQuadrantTotal("se");
    const sw = getQuadrantTotal("sw");
    appendLabel(svg2, nw, -5, 5);
    appendLabel(svg2, ne, 5, 5);
    appendLabel(svg2, se, 5, -5);
    appendLabel(svg2, sw, -5, -5);
    const getAxisTotal = (cardinal) => counts.axes[cardinal] + counts.outerAxes[cardinal];
    const n2 = getAxisTotal("n");
    const e3 = getAxisTotal("e");
    const s5 = getAxisTotal("s");
    const w3 = getAxisTotal("w");
    appendLabel(svg2, n2, 0, 5);
    appendLabel(svg2, e3, 5, 0);
    appendLabel(svg2, s5, 0, -5);
    appendLabel(svg2, w3, -5, 0);
  }, [state.standardRegionCounts, columns]);
  return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("svg", {
    ref,
    viewBox: VIEWBOX.join(","),
    width: VIEWBOX[2],
    height: VIEWBOX[3],
    style: "width: 100%; height: auto;"
  }));
}

// packages/results2019-2020/src/components/viz/proportions.jsx
init_preact_module();
function Proportions({ state, columns }) {
  let [x6, y7] = columns;
  let proportions;
  if (inStandardColumnSet(state.standardColumnSet, columns))
    proportions = state.standardProportions[x6];
  else
    proportions = countGraphRegionProportions(state.processedRawData, columns);
  const ref = useD3((svg2) => {
    svg2.selectAll("*").remove();
    appendAxes(svg2);
    appendLabel(svg2, `${proportions.origin}%`, 0, 0);
    const { nw, ne, se, sw } = proportions.quadrants;
    appendLabel(svg2, `${ne}%`, 5, 5);
    appendLabel(svg2, `${nw}%`, -5, 5);
    appendLabel(svg2, `${se}%`, 5, -5);
    appendLabel(svg2, `${sw}%`, -5, -5);
    const { n: n2, e: e3, s: s5, w: w3 } = proportions.axes;
    appendLabel(svg2, `${n2}%`, 0, 5);
    appendLabel(svg2, `${e3}%`, 5, 0);
    appendLabel(svg2, `${s5}%`, 0, -5);
    appendLabel(svg2, `${w3}%`, -5, 0);
  }, [state.standardProportions, columns]);
  return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("svg", {
    ref,
    viewBox: VIEWBOX.join(","),
    width: VIEWBOX[2],
    height: VIEWBOX[3],
    style: "width: 100%; height: auto;"
  }));
}

// packages/results2019-2020/src/lib/misc.jsx
var isChosenAxis = (a6) => a6 != "";
var hasXAxis = ({ x: x6 }) => isChosenAxis(x6);
var hasXYAxes = ({ x: x6, y: y7 }) => isChosenAxis(x6) && isChosenAxis(y7);
var canShowCustomViz = (axes) => hasXYAxes(axes);
function symFloor(n2) {
  return n2 / Math.abs(n2) * Math.floor(Math.abs(n2));
}
function rangeSize(range3) {
  return Math.abs(Math.max(...range3) - Math.min(...range3));
}
function graphType2Component(graphType) {
  switch (graphType) {
    case GRAPH_TYPE.heatmap:
      return Heatmap;
    case GRAPH_TYPE.scatterplot:
      return Scatterplot;
    case GRAPH_TYPE.contourScatterplot:
      return ContourScatterplot;
    case GRAPH_TYPE.density:
      return DensityScatterplot;
    case GRAPH_TYPE.contour:
      return ContourChart;
    case GRAPH_TYPE.colorContour:
      return ColorContour;
    case GRAPH_TYPE.numbers:
      return Numbers;
    case GRAPH_TYPE.proportions:
      return Proportions;
    default: {
      const Fallback = () => /* @__PURE__ */ v("span", null, "nothing to display");
      return Fallback;
    }
  }
}

// packages/results2019-2020/src/lib/viztools.js
function isValidDatum(datum2, columns) {
  if (columns instanceof Array !== true)
    columns = [columns];
  return columns.every((c8) => datum2[c8] !== NA_SYMBOL);
}
function getColorScale(color2, domain, rev = false) {
  if (rev)
    domain = [domain[1], domain[0]];
  let colorScale;
  if (CUSTOM_COLORS[color2] == null)
    colorScale = sequential(d3_exports[color2]).domain(domain);
  else
    colorScale = sequential(CUSTOM_COLORS[color2]).domain(domain);
  return colorScale;
}
function calcHeatmap(data, columns) {
  const heatmap = [];
  const totals = {};
  const toPairStr = (x6, y7) => `${x6},${y7}`;
  for (let datum2 of data) {
    if (!isValidDatum(datum2, columns))
      continue;
    const xValue = symFloor(datum2[columns[0]]);
    const yValue = symFloor(datum2[columns[1]]);
    const pair2 = toPairStr(xValue, yValue);
    if (totals[pair2] == null)
      totals[pair2] = 0;
    else
      totals[pair2] += 1;
  }
  for (let pair2 in totals) {
    const [x6, y7] = pair2.split(",").map((t4) => +t4);
    heatmap.push({ x: x6, y: y7, value: totals[pair2] });
  }
  return heatmap;
}
function makeBrushTool(emit) {
  return brush_default().extent([
    [0, 0],
    [VIEWBOX[2], VIEWBOX[3]]
  ]).on("end", emit);
}
function brushFn(data, columns, cb) {
  return function(BrushEvent2) {
    const { selection: selection2 } = BrushEvent2;
    if (!BrushEvent2.sourceEvent || selection2 == null) {
      cb({ type: "BRUSH", payload: {} });
      return;
    }
    const extent = selection2;
    const brushed = data.reduce((map4, d4) => isValidDatum(d4, columns) && isBrushed(extent, xScale(d4[columns[0]]), yScale(d4[columns[1]])) ? __spreadProps(__spreadValues({}, map4), { [d4.id]: true }) : map4, {});
    cb({ type: "BRUSH", payload: brushed });
  };
}
function isBrushed(extent, x6, y7) {
  const x06 = extent[0][0], y06 = extent[0][1], x12 = extent[1][0], y12 = extent[1][1];
  return x06 <= x6 && x6 <= x12 && y06 <= y7 && y7 <= y12;
}
function computeDensity(data, bandwidth, columns2d) {
  const [x6, y7] = columns2d;
  return density_default().x((d4) => xScale(d4[x6])).y((d4) => yScale(d4[y7])).size([rangeSize(xScale.range()), rangeSize(yScale.range())]).cellSize(2).thresholds(20).bandwidth(bandwidth)(data);
}

// packages/results2019-2020/src/lib/data-manipulation.js
function cleanQuestions(data) {
  return Object.keys(data[0]).filter((q) => q != "poll" && q != "Language" && q != "id");
}
function getPairwiseColumns(questions2) {
  let pairs2 = [];
  for (let idx = 0; idx < questions2.length; idx += 2) {
    const columns = [questions2[idx], questions2[idx + 1]];
    pairs2.push(columns);
  }
  return pairs2;
}
function getCustomColumns(questions2, axes) {
  return Object.values(axes).filter((a6) => a6 !== "").map((a6) => questions2[a6]);
}
function filterDataByDataset(data, dataset) {
  return data.filter((d4) => {
    for (let condition in dataset) {
      if (d4.Language === condition && !dataset[condition])
        return false;
      if (d4.poll.toLowerCase() === condition && !dataset[condition])
        return false;
    }
    return true;
  });
}
function inRange(n2, range3) {
  if (isNaN(n2))
    return false;
  return range3[0] <= n2 && n2 <= range3[1];
}
function inStandardColumnSet(columnSet, columns) {
  return columnSet.find((pair2) => pair2[0] === columns[0] && pair2[1] === columns[1]) != null;
}
function applyJitter(data) {
  const dataCopy = (0, import_lodash.default)(data);
  for (const row of dataCopy) {
    for (const key in row) {
      if (typeof row[key] === "number")
        row[key] += jitter_default(UNCERTAINTY);
    }
  }
  return dataCopy;
}
function sumRegionCounts(region) {
  const sumProps = (obj) => Object.keys(obj).reduce((sum3, key) => sum3 + obj[key], 0);
  return region.origin + sumProps(region.axes) + sumProps(region.outerAxes) + sumProps(region.quadrants) + sumProps(region.outerQuadrants);
}
function roundProps(obj) {
  for (let key in obj) {
    obj[key] = Math.round(obj[key]);
  }
  return obj;
}
function countGraphRegionProportions(data, columns, count3 = null) {
  if (count3 == null)
    count3 = countGraphRegions(data, columns);
  const total = sumRegionCounts(count3);
  const proportions = {
    origin: count3.origin / total * 100,
    quadrants: {
      nw: (count3.quadrants.nw + count3.outerQuadrants.nw) / total * 100,
      ne: (count3.quadrants.ne + count3.outerQuadrants.ne) / total * 100,
      se: (count3.quadrants.se + count3.outerQuadrants.se) / total * 100,
      sw: (count3.quadrants.sw + count3.outerQuadrants.sw) / total * 100
    },
    axes: {
      n: (count3.axes.n + count3.outerAxes.n) / total * 100,
      e: (count3.axes.e + count3.outerAxes.e) / total * 100,
      s: (count3.axes.s + count3.outerAxes.s) / total * 100,
      w: (count3.axes.w + count3.outerAxes.w) / total * 100
    }
  };
  proportions.origin = Math.round(proportions.origin);
  proportions.quadrants = roundProps(proportions.quadrants);
  proportions.axes = roundProps(proportions.axes);
  return proportions;
}
function countGraphRegions(data, columns) {
  const [a6, b10] = columns;
  const region = {
    origin: 0,
    quadrants: { nw: 0, ne: 0, se: 0, sw: 0 },
    outerQuadrants: { nw: 0, ne: 0, se: 0, sw: 0 },
    axes: { n: 0, e: 0, s: 0, w: 0 },
    outerAxes: { n: 0, e: 0, s: 0, w: 0 }
  };
  data.forEach((respondent) => {
    let x6 = respondent[a6], y7 = respondent[b10];
    if (typeof x6 === "number" && typeof y7 === "number") {
      if (x6 === 0 && y7 === 0) {
        region.origin++;
      } else if ([x6, y7].every((n2) => n2 >= -10 && n2 <= 10 && n2 !== 0)) {
        if (x6 < 0 && y7 < 0) {
          region.quadrants.sw++;
        } else if (x6 > 0 && y7 < 0) {
          region.quadrants.se++;
        } else if (x6 > 0 && y7 > 0) {
          region.quadrants.ne++;
        } else if (x6 < 0 && y7 > 0) {
          region.quadrants.nw++;
        }
      } else if (x6 === 0) {
        if (y7 < -10) {
          region.outerAxes.s++;
        } else if (y7 > 10) {
          region.outerAxes.n++;
        } else if (y7 < 0) {
          region.axes.s++;
        } else if (y7 > 0) {
          region.axes.n++;
        }
      } else if (y7 === 0) {
        if (x6 < -10) {
          region.outerAxes.w++;
        } else if (x6 > 10) {
          region.outerAxes.e++;
        } else if (x6 < 0) {
          region.axes.w++;
        } else if (x6 > 0) {
          region.axes.e++;
        }
      } else if ([x6, y7].every((n2) => n2 < -10 || n2 > 10)) {
        if (x6 < -10 && y7 < -10) {
          region.outerQuadrants.sw++;
        } else if (x6 > 10 && y7 < -10) {
          region.outerQuadrants.se++;
        } else if (x6 > 10 && y7 > 10) {
          region.outerQuadrants.ne++;
        } else if (x6 < -10 && y7 > 10) {
          region.outerQuadrants.nw++;
        }
      }
    }
  });
  return region;
}
function countStandardSetGraphRegions(data, header2) {
  const counts = {};
  for (let i4 = 0; i4 < header2.length; i4 += 2) {
    const a6 = header2[i4], b10 = header2[i4 + 1];
    counts[a6] = counts[b10] = countGraphRegions(data, [a6, b10]);
  }
  return counts;
}

// packages/results2019-2020/src/asyncReducer.js
var CSV_PATH = "./assets/data/all_maps.csv";
var jitteryData;
function reducer2(state, action) {
  return __async(this, null, function* () {
    switch (action.type) {
      case "RESET":
        return (0, import_lodash2.default)(INITIAL_STATE);
      case "FETCH_DATA": {
        let rawData = state.rawData;
        if (state.data == null) {
          const data = yield parseLocalCSV(CSV_PATH);
          rawData = data;
          jitteryData = applyJitter(rawData);
        }
        const questions2 = cleanQuestions(jitteryData);
        const standardRegionCounts = countStandardSetGraphRegions(rawData, questions2);
        const standardColumnSet = getPairwiseColumns(questions2);
        const standardProportions = standardColumnSet.reduce((obj, pair2) => {
          obj[pair2[0]] = countGraphRegionProportions(null, null, standardRegionCounts[pair2[0]]);
          return obj;
        }, {});
        const colorScale = getColorScale(state.options.color, DOMAIN);
        const vizColumns = standardColumnSet;
        return (0, import_lodash3.default)(__spreadValues({}, state), {
          data: jitteryData,
          rawData,
          processedRawData: rawData,
          standardRegionCounts,
          standardProportions,
          questions: questions2,
          vizColumns,
          colorScale,
          standardColumnSet
        });
      }
      case "FILTER_DATASET": {
        const options = __spreadValues({}, state.options);
        options.dataset = action.payload.dataset;
        const filteredData = filterDataByDataset(state.rawData, options.dataset);
        const jittery = applyJitter(filteredData);
        const standardRegionCounts = countStandardSetGraphRegions(filteredData, state.questions);
        const standardProportions = state.standardColumnSet.reduce((obj, pair2) => {
          obj[pair2[0]] = countGraphRegionProportions(null, null, standardRegionCounts[pair2[0]]);
          return obj;
        }, {});
        return (0, import_lodash3.default)(__spreadValues({}, state), {
          data: jittery,
          processedRawData: filteredData,
          standardRegionCounts,
          standardProportions,
          options
        });
      }
      case "TOGGLE_REV_COLOR": {
        const options = (0, import_lodash3.default)(state.options, {
          reverseColor: !state.options.reverseColor
        });
        const colorScale = getColorScale(options.color, AXES_DOMAIN, options.reverseColor);
        return (0, import_lodash3.default)(__spreadValues({}, state), { options, colorScale });
      }
      case "CHANGE_COLOR_SCHEME": {
        const options = (0, import_lodash3.default)(state.options, action.payload);
        const colorScale = getColorScale(options.color, AXES_DOMAIN, options.reverseColor);
        return (0, import_lodash3.default)(__spreadValues({}, state), { options, colorScale });
      }
      case "CHANGE_GRAPH_TYPE":
      case "CHANGE_DOT_OPACITY":
      case "CHANGE_DOT_SIZE":
      case "CHANGE_CONTOUR_BANDWIDTH": {
        const options = (0, import_lodash3.default)(state.options, action.payload);
        return (0, import_lodash3.default)(__spreadValues({}, state), { options });
      }
      case "TOGGLE_CUSTOM": {
        const customViz = !state.customViz;
        return (0, import_lodash3.default)(__spreadValues({}, state), { customViz });
      }
      case "SET_X_AXIS":
      case "SET_Y_AXIS": {
        const userAxes = (0, import_lodash3.default)(__spreadValues({}, state.userAxes), action.payload);
        const vizColumns = getCustomColumns(state.questions, userAxes);
        return (0, import_lodash3.default)(__spreadValues({}, state), { userAxes, vizColumns });
      }
      case "BRUSH": {
        const brushMap = action.payload;
        return (0, import_lodash3.default)(__spreadValues({}, state), { brushMap });
      }
      case "OLDBRUSH": {
        return (0, import_lodash3.default)(__spreadValues({}, state), { newBrushing: 0 });
      }
      default:
        throw new ReferenceError(`unknown action: '${action.type}' received`);
    }
  });
}

// packages/results2019-2020/src/components/viz/viz.jsx
init_preact_module();
function Viz({ state, columns, dispatch: dispatch2 }) {
  const { data, colorScale, options, brushMap } = state;
  if (columns == null)
    return;
  let [x6, y7] = columns;
  const SVG = graphType2Component(options.graph);
  return /* @__PURE__ */ v("div", {
    class: "vizContainer"
  }, /* @__PURE__ */ v("div", {
    class: "viz"
  }, /* @__PURE__ */ v(SVG, {
    state,
    data,
    columns,
    colorScale,
    options,
    brushMap,
    dispatch: dispatch2
  })), /* @__PURE__ */ v("div", {
    class: "label right"
  }, /* @__PURE__ */ v(Text, {
    id: `questions.${x6}.fr.end`
  }, questions[x6].en.end)), /* @__PURE__ */ v("div", {
    class: "label left"
  }, /* @__PURE__ */ v(Text, {
    id: `questions.${x6}.fr.start`
  }, questions[x6].en.start)), /* @__PURE__ */ v("div", {
    class: "label bottom"
  }, /* @__PURE__ */ v(Text, {
    id: `questions.${y7}.fr.start`
  }, questions[y7].en.start)), /* @__PURE__ */ v("div", {
    class: "label top"
  }, /* @__PURE__ */ v(Text, {
    id: `questions.${y7}.fr.end`
  }, questions[y7].en.end)));
}

// packages/results2019-2020/src/components/knobs.jsx
init_preact_module();
function Knobs(props) {
  var _a;
  const { state, dispatch: dispatch2 } = props.reducer;
  let [shouldShowKnobs, setShouldShowKnobs] = l2(false);
  function handleShowHideClick() {
    setShouldShowKnobs(!shouldShowKnobs);
  }
  let [wantsChooseRespondents, setWantsChooseRespondents] = l2(false);
  const totalRespondents = (_a = state.data) == null ? void 0 : _a.length;
  const graphType = state.options.graph;
  const isScatterplot = graphType === GRAPH_TYPE.scatterplot;
  const isHeatmap = graphType === GRAPH_TYPE.heatmap;
  const isNumbers = graphType === GRAPH_TYPE.numbers;
  const isProportions = graphType === GRAPH_TYPE.proportions;
  const isContour = graphType === GRAPH_TYPE.contour;
  const isColorContour = graphType === GRAPH_TYPE.colorContour;
  const hasDots = graphType === GRAPH_TYPE.scatterplot || graphType === GRAPH_TYPE.contourScatterplot || graphType === GRAPH_TYPE.density;
  const shouldDisableDotSize = !isScatterplot;
  const shouldDisableDotOpacity = shouldDisableDotSize;
  const shouldDisableXAxisSelect = !state.customViz;
  const shouldDisableYAxisSelect = !state.customViz || !hasXAxis(state.userAxes);
  const handleSettingChange = (type2, prop, callback = null) => (event) => {
    dispatch2({ type: type2, payload: { [prop]: event.target.value } });
    if (callback != null && typeof callback === "function")
      callback();
  };
  const handleGraphTypeChange = handleSettingChange("CHANGE_GRAPH_TYPE", "graph");
  const handleDotSizeChange = handleSettingChange("CHANGE_DOT_SIZE", "size");
  const handleDotOpacityChange = handleSettingChange("CHANGE_DOT_OPACITY", "opacity");
  const handleWantsCustomGraphClick = handleSettingChange("TOGGLE_CUSTOM");
  const handleXSelectChange = handleSettingChange("SET_X_AXIS", "x");
  const handleYSelectChange = handleSettingChange("SET_Y_AXIS", "y");
  const handleDatasetChange = (event) => {
    const clicked = event.target.value;
    let other, dataset = __spreadValues({}, state.options.dataset);
    if (DATASETS.form.includes(clicked))
      other = clicked === "aga" ? "ba" : "aga";
    else if (DATASETS.language.includes(clicked))
      other = clicked === "en" ? "fr" : "en";
    dataset[clicked] = !dataset[clicked];
    if (!dataset[clicked] && !dataset[other]) {
      dataset[other] = true;
    }
    dispatch2({ type: "FILTER_DATASET", payload: { dataset } });
  };
  const handleResetClick = () => dispatch2({ type: "RESET" });
  const axesOptions = state.questions != null && state.questions.map((option, idx) => /* @__PURE__ */ v("option", {
    key: idx,
    value: `${idx}`
  }, /* @__PURE__ */ v(Text, {
    id: `results.knobs.questions.${idx}`
  }, option)));
  return /* @__PURE__ */ v("div", {
    class: "knobs",
    style: props.visible ? "" : "opacity: 0;pointer-events: none;"
  }, /* @__PURE__ */ v("div", {
    style: "display: flex; justify-content: space-between; align-items: center"
  }, /* @__PURE__ */ v("h1", {
    class: "title",
    style: "cursor: pointer",
    onClick: handleShowHideClick
  }, "Options"), /* @__PURE__ */ v("div", {
    class: "show-hide",
    onClick: handleShowHideClick
  }, /* @__PURE__ */ v("h1", {
    style: "margin: 0 2rem 0 0;"
  }, /* @__PURE__ */ v("strong", null, shouldShowKnobs ? "\u2212" : "+")))), shouldShowKnobs && /* @__PURE__ */ v("div", {
    class: "grid-container"
  }, /* @__PURE__ */ v("div", {
    class: "knob"
  }, /* @__PURE__ */ v("div", {
    class: "labeled-input"
  }, /* @__PURE__ */ v("label", {
    for: "graphselect"
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.graphtype"
  }, "Graph type")), /* @__PURE__ */ v("select", {
    id: "graphselect",
    name: "graphselect",
    onchange: handleGraphTypeChange
  }, /* @__PURE__ */ v("option", {
    selected: isScatterplot,
    value: GRAPH_TYPE.scatterplot
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.scatterplot"
  }, "scatterplot")), /* @__PURE__ */ v("option", {
    selected: isHeatmap,
    value: GRAPH_TYPE.heatmap
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.heatmap"
  }, "heatmap")), /* @__PURE__ */ v("option", {
    selected: isNumbers,
    value: GRAPH_TYPE.numbers
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.numbers"
  }, "numbers")), /* @__PURE__ */ v("option", {
    selected: isProportions,
    value: GRAPH_TYPE.proportions
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.percentage"
  }, "percentage")), /* @__PURE__ */ v("option", {
    selected: isContour,
    value: GRAPH_TYPE.contour
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.contour"
  }, "contour")), /* @__PURE__ */ v("option", {
    selected: isColorContour,
    value: GRAPH_TYPE.colorContour
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.colorContour"
  }, "topography"))))), /* @__PURE__ */ v("div", {
    class: "subknob"
  }, /* @__PURE__ */ v("div", {
    class: "labeled-input",
    style: hasDots ? "" : "display: none"
  }, /* @__PURE__ */ v("label", {
    for: "dotsize"
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.dotsize"
  }, "Dot size")), /* @__PURE__ */ v("input", {
    type: "range",
    id: "dotsize",
    min: "1",
    max: "90",
    step: "0.1",
    name: "size",
    value: state.options.size,
    onchange: handleDotSizeChange,
    disabled: shouldDisableDotSize
  })), /* @__PURE__ */ v("div", {
    class: "labeled-input",
    style: hasDots ? "" : "display: none"
  }, /* @__PURE__ */ v("label", {
    for: "dotopacity"
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.dotopacity"
  }, "Dot opacity")), /* @__PURE__ */ v("input", {
    type: "range",
    id: "dotopacity",
    min: "0.01",
    max: "1",
    step: "0.01",
    name: "opacity",
    value: state.options.opacity,
    onchange: handleDotOpacityChange,
    disabled: shouldDisableDotOpacity
  }))), /* @__PURE__ */ v("div", {
    class: "knob"
  }, /* @__PURE__ */ v("input", {
    type: "checkbox",
    id: "dataselectors-checkbox",
    checked: wantsChooseRespondents,
    onclick: () => setWantsChooseRespondents(!wantsChooseRespondents)
  }), /* @__PURE__ */ v("label", {
    for: "dataselectors-checkbox"
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.chooseRespondents"
  }, "Show respondents from..."))), /* @__PURE__ */ v("div", {
    id: "dataselectors",
    class: "subknob",
    style: wantsChooseRespondents ? "" : "display: none"
  }, /* @__PURE__ */ v("div", {
    class: "labeled-checkbox"
  }, /* @__PURE__ */ v("input", {
    type: "checkbox",
    id: "aga",
    name: "aga",
    value: "aga",
    checked: state.options.dataset.aga,
    onclick: handleDatasetChange
  }), /* @__PURE__ */ v("label", {
    for: "aga"
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.aga"
  }, "Sobey Art Award Exhibition, Art Gallery of Alberta, Edmonton, October 5, 2019 - January 5, 2020"))), /* @__PURE__ */ v("div", {
    class: "labeled-checkbox"
  }, /* @__PURE__ */ v("input", {
    type: "checkbox",
    id: "ba",
    name: "ba",
    value: "ba",
    checked: state.options.dataset.ba,
    onclick: handleDatasetChange
  }), /* @__PURE__ */ v("label", {
    for: "ba"
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.ba"
  }, 'Exhibition "Positions", Galerie Bradley Ertaskiran, Montreal, January 24 - March 7, 2020'))), /* @__PURE__ */ v("div", {
    class: "labeled-checkbox"
  }, /* @__PURE__ */ v("input", {
    type: "checkbox",
    id: "enforms",
    name: "en",
    value: "en",
    checked: state.options.dataset.en,
    onclick: handleDatasetChange
  }), /* @__PURE__ */ v("label", {
    for: "enforms"
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.engforms"
  }, "English questionnaires"))), /* @__PURE__ */ v("div", {
    class: "labeled-checkbox"
  }, /* @__PURE__ */ v("input", {
    type: "checkbox",
    id: "frforms",
    name: "fr",
    value: "fr",
    checked: state.options.dataset.fr,
    onclick: handleDatasetChange
  }), /* @__PURE__ */ v("label", {
    for: "frforms"
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.frforms"
  }, "French questionnaires")))), /* @__PURE__ */ v("div", {
    class: "knob"
  }, /* @__PURE__ */ v("input", {
    type: "checkbox",
    id: "customgraphcheckbox",
    value: "custom",
    checked: state.customViz,
    onclick: handleWantsCustomGraphClick
  }), /* @__PURE__ */ v("label", {
    for: "customgraphcheckbox"
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.custom"
  }, "Combine questions into a custom diagram..."))), /* @__PURE__ */ v("div", {
    id: "axesselectors",
    class: "subknob",
    style: state.customViz ? "" : "display: none"
  }, /* @__PURE__ */ v("div", {
    class: "labeled-input"
  }, /* @__PURE__ */ v("label", {
    for: "xselect"
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.horizontal"
  }, "Horizontal axis")), /* @__PURE__ */ v("select", {
    id: "xselect",
    onchange: handleXSelectChange,
    disabled: shouldDisableXAxisSelect
  }, /* @__PURE__ */ v("option", {
    value: ""
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.option"
  }, "choose an option")), axesOptions)), /* @__PURE__ */ v("div", {
    class: "labeled-input"
  }, /* @__PURE__ */ v("label", {
    for: "yselect"
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.vertical"
  }, "Vertical axis")), /* @__PURE__ */ v("select", {
    id: "yselect",
    onchange: handleYSelectChange,
    disabled: shouldDisableYAxisSelect
  }, /* @__PURE__ */ v("option", {
    value: ""
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.option"
  }, "choose an option")), axesOptions))), /* @__PURE__ */ v("div", {
    class: "knob"
  }, "Total = ", totalRespondents, " ", /* @__PURE__ */ v(Text, {
    id: "results.knobs.respondents"
  }, "respondents"), props.selected > 0 && /* @__PURE__ */ v("span", null, "\xA0(", props.selected, "\xA0", /* @__PURE__ */ v(Text, {
    id: "results.knobs.selected"
  }, "selected"), ")")), /* @__PURE__ */ v("div", {
    class: "reset-btn"
  }, /* @__PURE__ */ v("button", {
    type: "button",
    onclick: handleResetClick
  }, /* @__PURE__ */ v(Text, {
    id: "results.knobs.reset"
  }, "Reset")))));
}

// packages/results2019-2020/src/components/notify.jsx
init_preact_module();
function Notify(props) {
  if (!props.visible)
    return;
  return /* @__PURE__ */ v("div", {
    class: "notif"
  }, props.children);
}

// packages/results2019-2020/src/components/results.jsx
var import_lodash4 = __toESM(require_lodash());

// packages/results2019-2020/src/components/collapsible-section.jsx
init_preact_module();
function CollapsibleSection({ children: children2, title, cb, isOpen }) {
  return /* @__PURE__ */ v("section", {
    class: isOpen ? "open" : "collapsed"
  }, /* @__PURE__ */ v("div", {
    class: "title",
    onclick: cb
  }, /* @__PURE__ */ v("h1", null, title), /* @__PURE__ */ v("h1", null, /* @__PURE__ */ v("strong", null, !isOpen ? "+" : "\u2212"))), isOpen && children2, isOpen && /* @__PURE__ */ v("h1", {
    style: "text-align: right; cursor: pointer;",
    onclick: cb
  }, /* @__PURE__ */ v("strong", null, "\u2212")));
}

// packages/results2019-2020/src/components/site-menu.jsx
init_preact_module();
function SiteMenu(props) {
  return /* @__PURE__ */ v("div", {
    class: "site-menu",
    style: props.style
  }, /* @__PURE__ */ v("h1", null, "Nicolas Grenier"), /* @__PURE__ */ v("h3", null, /* @__PURE__ */ v("a", {
    href: "https://nicolasgrenier.com/Exhibitions-Projects"
  }, "Exhibitions & Projects /"), /* @__PURE__ */ v("a", {
    href: "https://nicolasgrenier.com/Paintings"
  }, "/ Paintings /"), /* @__PURE__ */ v("a", {
    href: "https://nicolasgrenier.com/Research"
  }, "/ Research /"), /* @__PURE__ */ v("a", {
    href: "https://nicolasgrenier.com/About"
  }, "/ About\xA0")));
}

// packages/results2019-2020/src/components/results.jsx
function useAsyncReducer(reducer3, initState) {
  const [state, setState] = l2(initState), dispatchState = (action) => __async(this, null, function* () {
    return setState(yield reducer3(state, action));
  });
  return [state, dispatchState];
}
function Results() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const [state, dispatch2] = useAsyncReducer(reducer2, (0, import_lodash4.default)(INITIAL_STATE));
  const [shouldShowKnobs, setShouldShowKnobs] = l2(true);
  const { swapLang } = useLanguageContext();
  y2(() => {
    if (state.data == null)
      dispatch2({ type: "FETCH_DATA" });
  });
  const shouldShowCustomViz = state.customViz && canShowCustomViz(state.userAxes);
  let [notification, setNotification] = l2(null);
  const getLatestCount = A(() => state.brushMap != null ? Object.keys(state.brushMap).length : 0, [state.brushMap]);
  y2(() => {
    const latestCount = getLatestCount();
    if (latestCount !== 0) {
      setNotification(null);
      setTimeout(() => setNotification(/* @__PURE__ */ v(Notify, {
        visible: shouldShowKnobs
      }, /* @__PURE__ */ v("span", null, latestCount, "\xA0", /* @__PURE__ */ v(Text, {
        id: "results.knobs.selected"
      }, "selected")))), 1);
    } else {
      setNotification(null);
    }
  }, [state.brushMap, shouldShowKnobs, getLatestCount]);
  y2(() => {
    if (shouldShowCustomViz && introRef.current != null) {
      const y7 = introRef.current.getBoundingClientRect().bottom;
      window.scrollBy(0, y7);
    }
  }, [shouldShowCustomViz, state.userAxes]);
  const introRef = s2();
  const mapsRef = s2();
  const footerRef = s2();
  let [showBackToTop, setShowBackToTop] = l2(false);
  let [footerSectionsState, setFooterSectionsState] = l2(0);
  const footerSection = {
    COMMENTS: 1,
    ANALYSIS: 2,
    CONSIDERATIONS: 4,
    ABOUT: 8,
    CONTACT: 16
  };
  function footerSectionIsOpen(section) {
    return (footerSectionsState & section) !== 0;
  }
  function toggleFooterSectionOpenClose(section) {
    setFooterSectionsState(footerSectionsState ^= section);
  }
  function collapseFooterSections() {
    setFooterSectionsState(0);
  }
  function handleToBottomClick() {
    const footerY = footerRef.current.getBoundingClientRect().top - 20;
    window.scrollTo(0, footerY);
  }
  function handleBackToTopClick() {
    const mapsY = mapsRef.current.getBoundingClientRect().bottom;
    if (mapsY < -1) {
      window.scrollTo(0, window.pageYOffset + mapsY - 20);
      collapseFooterSections();
      return;
    }
    const introY = introRef.current.getBoundingClientRect().bottom;
    if (introY < -1) {
      window.scrollTo(0, window.pageYOffset + introY + 1);
      return;
    }
    window.scrollTo(0, 0);
  }
  y2(() => {
    document.onscroll = () => {
      if (mapsRef.current != null) {
        const height = mapsRef.current.getBoundingClientRect().bottom;
        if (height < window.innerHeight / 2)
          setShouldShowKnobs(false);
        else {
          setShouldShowKnobs(true);
        }
      }
      if (introRef.current != null) {
        const thresholdY = introRef.current.getBoundingClientRect().bottom - 10;
        if (thresholdY < 0) {
          setShowBackToTop(true);
        } else if (thresholdY > 0) {
          setShowBackToTop(false);
        }
      }
    };
  }, []);
  return /* @__PURE__ */ v("div", {
    className: "results"
  }, /* @__PURE__ */ v("div", {
    className: "back-to-top",
    onClick: handleBackToTopClick,
    style: showBackToTop ? "opacity: 1;" : "opacity: 0; pointer-events: none; cursor: default;"
  }, /* @__PURE__ */ v(Text, {
    id: "results.back-to-top"
  }, "Go up "), /* @__PURE__ */ v("img", {
    style: "max-height: 1em; padding-top: 0.2em",
    src: "/images/up-arrow.svg"
  })), /* @__PURE__ */ v("div", {
    ref: introRef,
    className: "intro"
  }, /* @__PURE__ */ v(SiteMenu, {
    style: "margin-top: 0;"
  }), /* @__PURE__ */ v("div", {
    className: "en-fr"
  }, /* @__PURE__ */ v("span", {
    onClick: () => swapLang("en")
  }, "English"), "\xA0/\xA0", /* @__PURE__ */ v("span", {
    onClick: () => swapLang("fr")
  }, "Fran\xE7ais")), /* @__PURE__ */ v(MarkupText, {
    id: "results.intro"
  }, /* @__PURE__ */ v("h1", null, "Existential Issues:", /* @__PURE__ */ v("br", null), "A Mapping Exercise"), /* @__PURE__ */ v("p", null, "In two of my recent exhibitions, I invited visitors to participate in a \u201CMapping Exercise\u201D by taking a few minutes to fill out a questionnaire comprising a variety of existential questions. Participants were asked to mark their position with a dot on a series of diagrams."), /* @__PURE__ */ v("h1", null, "Results"), /* @__PURE__ */ v("p", null, "In total, 1222 people completed the questionnaire: 941 during the Sobey Art Award Exhibition at the Art Gallery of Alberta in Edmonton (October 5, 2019 to January 5, 2020), and 281 during my solo exhibition at Galerie Bradley Ertaskiran in Montreal (January 24 to March 7, 2020)."), /* @__PURE__ */ v("p", null, "In the scatterplot graphs below, each dot corresponds to the answer of one participant. The questions appear exactly as on the original questionnaire.")), /* @__PURE__ */ v("p", null, /* @__PURE__ */ v(Text, {
    id: "results.intro--link-p1"
  }, "You will find more information under the graphs, at "), /* @__PURE__ */ v("a", {
    href: "#null",
    onClick: handleToBottomClick
  }, /* @__PURE__ */ v(Text, {
    id: "results.intro--link-p2"
  }, "the bottom of the page")), ".")), /* @__PURE__ */ v(Knobs, {
    reducer: { state, dispatch: dispatch2 },
    selected: getLatestCount(),
    visible: shouldShowKnobs
  }), notification, /* @__PURE__ */ v("div", {
    ref: mapsRef,
    className: "maps"
  }, shouldShowCustomViz && /* @__PURE__ */ v("div", {
    className: "map"
  }, /* @__PURE__ */ v("div", {
    className: "maptitle"
  }, /* @__PURE__ */ v(Text, {
    id: "results.customgraph"
  }, "Custom graph")), /* @__PURE__ */ v("div", {
    className: "graph"
  }, /* @__PURE__ */ v(Viz, {
    state,
    columns: state.vizColumns,
    dispatch: dispatch2
  }))), /* @__PURE__ */ v("div", {
    className: "map"
  }, /* @__PURE__ */ v("div", {
    className: "maptitle"
  }, /* @__PURE__ */ v("div", null, /* @__PURE__ */ v(Text, {
    id: "results.part"
  }, "PART"), " I"), /* @__PURE__ */ v("div", null, /* @__PURE__ */ v(Text, {
    id: "results.part1.title"
  }, "YOU"))), /* @__PURE__ */ v("div", {
    className: "graph"
  }, /* @__PURE__ */ v(Viz, {
    state,
    columns: (_a = state.standardColumnSet) == null ? void 0 : _a[0],
    dispatch: dispatch2
  })), /* @__PURE__ */ v("div", {
    className: "graph"
  }, /* @__PURE__ */ v(Viz, {
    state,
    columns: (_b = state.standardColumnSet) == null ? void 0 : _b[1],
    dispatch: dispatch2
  }))), /* @__PURE__ */ v("div", {
    className: "map"
  }, /* @__PURE__ */ v("div", {
    className: "maptitle"
  }, /* @__PURE__ */ v("div", null, /* @__PURE__ */ v(Text, {
    id: "results.part"
  }, "Part"), " II"), /* @__PURE__ */ v("div", null, /* @__PURE__ */ v(Text, {
    id: "results.part2.title"
  }, "You and the world"))), /* @__PURE__ */ v("div", {
    className: "mapdescription"
  }, /* @__PURE__ */ v(MarkupText, {
    id: "results.part2.description"
  }, /* @__PURE__ */ v("p", null, "Think of the land where you grew up. Think of its natural physical properties, such as mountains, valleys, plains, forests, wetlands, rivers, lakes, sea, desert, etc. Then try to imagine this land in relation to the totality of physical spaces all across the globe."), /* @__PURE__ */ v("p", null, "In your life, how much did you get to know the physical world?"))), /* @__PURE__ */ v("div", {
    className: "graph"
  }, /* @__PURE__ */ v(Viz, {
    state,
    columns: (_c = state.standardColumnSet) == null ? void 0 : _c[2],
    dispatch: dispatch2
  })), /* @__PURE__ */ v("div", {
    className: "graph"
  }, /* @__PURE__ */ v(Viz, {
    state,
    columns: (_d = state.standardColumnSet) == null ? void 0 : _d[3],
    dispatch: dispatch2
  })), /* @__PURE__ */ v("div", {
    className: "graph"
  }, /* @__PURE__ */ v(Viz, {
    state,
    columns: (_e = state.standardColumnSet) == null ? void 0 : _e[4],
    dispatch: dispatch2
  }))), /* @__PURE__ */ v("div", {
    className: "map"
  }, /* @__PURE__ */ v("div", {
    className: "maptitle"
  }, /* @__PURE__ */ v("div", null, /* @__PURE__ */ v(Text, {
    id: "results.part"
  }, "Part"), " III"), /* @__PURE__ */ v("div", null, /* @__PURE__ */ v(Text, {
    id: "results.part3.title"
  }, "You and the future"))), /* @__PURE__ */ v("div", {
    className: "mapdescription"
  }, /* @__PURE__ */ v(MarkupText, {
    id: "results.part3.description"
  }, /* @__PURE__ */ v("p", null, "Try to picture the totality of human activities taking place on the planet today."), /* @__PURE__ */ v("p", null, "Do you think that humanity as a whole is moving in a good direction, aligned with a coherent vision for the future?"))), /* @__PURE__ */ v("div", {
    className: "graph"
  }, /* @__PURE__ */ v(Viz, {
    state,
    columns: (_f = state.standardColumnSet) == null ? void 0 : _f[5],
    dispatch: dispatch2
  })), /* @__PURE__ */ v("div", {
    className: "graph"
  }, /* @__PURE__ */ v(Viz, {
    state,
    columns: (_g = state.standardColumnSet) == null ? void 0 : _g[6],
    dispatch: dispatch2
  })), /* @__PURE__ */ v("div", {
    className: "graph"
  }, /* @__PURE__ */ v(Viz, {
    state,
    columns: (_h = state.standardColumnSet) == null ? void 0 : _h[7],
    dispatch: dispatch2
  }))), /* @__PURE__ */ v("div", {
    className: "map"
  }, /* @__PURE__ */ v("div", {
    className: "maptitle"
  }, /* @__PURE__ */ v("div", null), /* @__PURE__ */ v("div", null, /* @__PURE__ */ v(Text, {
    id: "results.part4.title"
  }, "You and this exercise"))), /* @__PURE__ */ v("div", {
    className: "graph"
  }, /* @__PURE__ */ v(Viz, {
    state,
    columns: (_i = state.standardColumnSet) == null ? void 0 : _i[8],
    dispatch: dispatch2
  })), /* @__PURE__ */ v("aside", {
    className: "empty-after"
  }, /* @__PURE__ */ v("p", null, /* @__PURE__ */ v("strong", null, /* @__PURE__ */ v(Text, {
    id: "results.footer.select"
  }, "Select & Follow Respondents"))), /* @__PURE__ */ v("p", null, /* @__PURE__ */ v(Text, {
    id: "results.footer.select--body"
  }, "You can draw a rectangle to select specific respondents and follow their answers from one graph to the next. (This function is not available on touchscreens.)")), /* @__PURE__ */ v("img", {
    style: "display: block; max-width: min(80vw, 400px); margin: 2rem auto 6rem;",
    src: "/images/transparency_select_blue.png",
    alt: "an example of a mouse pointer selecting a rectangular section of points from a scatterplot"
  })))), /* @__PURE__ */ v("footer", {
    id: "footer",
    ref: footerRef
  }, /* @__PURE__ */ v(CollapsibleSection, {
    title: /* @__PURE__ */ v(Text, {
      id: "results.footer.comments"
    }, "Comments left by respondents"),
    cb: () => toggleFooterSectionOpenClose(footerSection.COMMENTS),
    isOpen: footerSectionIsOpen(footerSection.COMMENTS)
  }, /* @__PURE__ */ v(MarkupText, {
    id: "results.footer.comments--body"
  }, /* @__PURE__ */ v("p", null, "A space at the end of the questionnaire allowed those who wanted to leave comments."), /* @__PURE__ */ v("p", null, 'About 10-15% of respondents left a comment. Here is a non-exhaustive list of comments received. The most repetitive comments ("very interesting," "congrats for the great show," etc.) have been removed, and some comments were condensed or shortened during transcription..')), /* @__PURE__ */ v("h2", null, "Edmonton:"), /* @__PURE__ */ v("table", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "please love me")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, 'Not sure "cosmological" was the right word.')), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "the human experiment")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "CLIMATE CHANGE IS REAL")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "ok boomer...")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "looking forward to the results,")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "beautiful show, very grounding")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "thank you for asking these questions")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "thank you for confronting us to our more realistic feeling & position about global issues")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "keep playing")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "<3")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "the axis is a western way of looking at the world")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "purpose test see people background and how they feel about past")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "you are wonderful love cherry pie")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, 'you might find "factfulness" interesting')), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "its very relaxing to write with a pencil")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "democracy is not = capitalism, this exercise is biased?")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "first question makes me sad, life is so hard")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "favorite part of the show, listened to the audio many times")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "I'm 65 years old, age is relevant")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "very confronting")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "good initiative, would love to continue")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "#bernie 2020")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "a certain worldview / fun exercise")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "egalitarian environmental passion aren't mutually inclusive")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Spectrum")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "merci")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "my 9 years old daughter and i thought about the questions a lot")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "the artist is not sociologist. your work is technically skilled but does not solve anything")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "i struggle with the questions")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "questions addressed were more relevant than I expected when done")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "my info aggregated for external use")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "super cool / question my values as a person and now society and the people")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "interesting big picture exercise")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "many supposed opposites in the questions")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "exercise is interesting as per spatial reasoning")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "made me question my life and my existence in my world")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "some concepts are tough to represent with a small dot")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Feel fucking depressed after this")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "great piece")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "did i did it right?")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "very thoughtful exercise")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "? on legitimacy because different meanings. interesting = thank you.")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "took lots of effort, free labour.")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "felt interesting to put emotions in grid, ppl do not understand issues of the world")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "doing this was hard in the environment, overstimulating, good luck.")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "i am new media..23yo...insecure future...")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "thank you for sharing practice, exercise is curious compared to other exhibition.")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "you blew my mind")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "great exercise understand where we are as person-society.")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "this art is sick")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "joe mama")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "great art-thought please notify me")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "how did I read this ?!")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "doesnt represent a wide demographic...")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "doesnt represent whole society, interesting study.")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "interesting, provoking, irrelevant, relevant, difficult exercise")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "cant wait to cry in bed all night long")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "what inspired you to make this art and this survey ?")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "I really loved this")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "fun exercise, chuckled out loud at last question.")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "makes it less cold, great exhibition")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "ne rigole pas, tres interessant et cool.")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "i feel depressed")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "deeply conflicted, question on my mind all the time...")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "thought provoking exercise")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "11 years old")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "deeep questions")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "good eye opener, seems longs")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "existentialism, good")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "thought provoking, would love to see what others have to sya")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "this is brilliant you\u2019re not alone")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "makes me feel bad, collective achievement")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "awesome, had fun")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "some questions made me thin")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "i like your art")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "don't like quadrants, too scientific")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "your paintings are meticulously crafted, waiting on news")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "intrigued, pessimistic")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "i appreciate provocation")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "axis are too western specific")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "makes me feel sad")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "this was great and important")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "suggestion: add grid")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Doesn\u2019t feel like tangible and abstraction are opposite")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Don\u2019t now difference between idealism and pragmatism")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "almost uncomfortable with the broadness of thought")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "made me thin, need to write about a piece for school project")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "excited to see how it turned out")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "seemed odd at first then I understood")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "love amalgamation of tech+visuals")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "super thought provoking")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "i find that some axis are not opposites")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "difficult and thought provoking")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "don't understand a thing")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "i am 54")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "interactive art like this makes me question my own beliefs")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "thanks, very relevant")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "good for reflection, not for science")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "very cool but very left thinking")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "pple kept saying it was too much work, but i think they're nuts. this is worth it")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "i complete the exercise in the views of my lover")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "question will be in my mind for awhile")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "interview ai clever. exercise helped me think about state of things")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "question insightful, unique, fruitful discussion, thks")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "hard question but important. is it better to be neutral or extreme?")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "too uncomfortable to take a stand, wants to know more about study"))), /* @__PURE__ */ v("h2", null, /* @__PURE__ */ v(Text, {
    id: "results.footer.comments--montreal"
  }, "Montreal"), ":"), /* @__PURE__ */ v("table", null, /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Certaines formulations dans les questions sont ambigu\xEBs, voire contradictoires. E.g. impact cosmologique de l'humanit\xE9")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "It's too cold in here!! My friend made me leave cause she's going to catch a flu")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Lovely, thoughtful exercise. Have you read any James Bridle?")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Didn't expect to statuate on my world changing beliefs at an art expo. Good work!")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "?")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Merci pour les r\xE9flexions pos\xE9es par tes oeuvres.")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Exp\xE9rience pertinente \xE0 la modernit\xE9. apr\xE8s on veut voir la cartographie!")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "I found this an important exercise, making sense of what we think of each day but rarely put on paper.")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Like zenkoans they were unanswerable but nice to meditate on")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "G\xE9nial, bravo :)")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "\xE0 20 ans on veut tout changer, \xE0 40 ans on observe le changement, \xE0 60 ans on se rend compte que rien ne change vraiment, \xE0 80 ans mon futur est derri\xE8re moi - good luck")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "L'important, c'est \xE7a qui compte")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Your sample is biased and way too small. trying to find a trend in a biased and elitist circle only shows the emptiness of this form")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "it was interesting to fill this out around other people, to see them thinking about their answers, erasing")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "This was a welcome change from the usual gallery experience")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "J'esp\xE8re vraiment gagner!")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "more questions, please... excellent work. keep up the research... and painting...")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Le dualisme cart\xE9sien est d\xE9pass\xE9. Il faut s'ouvrir au monde quantique (les choix de r\xE9ponse peuvent \xEAtre \xE0 la fois vrai et faux selon les cas).")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Thanks for being thoughtful + encouraging us to think")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Merci pour l'expo. Questionnaire cool. \xC0 bient\xF4t.")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "certaines questions m'ont emb\xEAt\xE9es... c'\xE9tait difficile!")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Data has the answers, it knows me better than I will ever know myself. Congrats on this amazing show my friend")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Bonne id\xE9e! J'ai h\xE2te de voir la publication. Ces questions font r\xE9fl\xE9chir")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "it was difficult to answer honestly. most questions are things I would need more time to think about... they really ask you to dig deep")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Je devine une fois encore, que je ne suis que tout noir ou tout blanc. Est-ce que le monde est une zone grise, et je suis en dehors?")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "It feels most of the questions/statements tend to push me think about those issues in rather binary point of view; I do understand this kind of mapping/survey exercise has to be polarized for its better & easier efficiency, but I've found some difficult to 'position' myself")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "I am having similar thoughts on technology and what it is truly doing to society, to our communities and our basic needs for connections and family")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "wonderful, inspiring.. thank you!")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Je me sentais observ\xE9 par moi-m\xEAme. je ne suis pas certain d'avoir \xE9t\xE9 100% honn\xEAte peut-\xEAtre 50-60% 70%")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "vraiment int\xE9ressant de se questionner dans le cadre de l'exposition. sets the mood & tone")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Parfois, il faut ??? une chose et une autre et son oppos\xE9 pour avancer")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "Congrats great show ps I like the exercise but I keep wanting to 3D it...")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "This has been a great exercise. The diagram, once I became comfortable with it did assist me in considering how it was that I actually felt. I wonder how it would look if I were to do it a second time. Thank you. I loved it")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "difficile de se positionner sans chiffres")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "difficile de se positionner exactement, enjeux compexes")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "merci pour la reflexion")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "jai 31 ans")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "bonjour j\u2019aime beaucoup")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "as an artist i did this for you, but basically wtf?")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "le monde libert\xE9 economique est different de la liberte artistique + poeme")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "when we will be able to live as one...")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "strong magnetic reaction to the exhibition")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "nice stepback from chaotic world")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "question well thought, age is irelevant")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "very engaging")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "accuracy of responses will shift")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "int\xE9ressant et pertinent - perception artiste")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "J\u2019ai pass\xE9 un tr\xE8s bon moement")), /* @__PURE__ */ v("tr", null, /* @__PURE__ */ v("td", null, "ensemble nous vaincrons le futur")))), /* @__PURE__ */ v(CollapsibleSection, {
    title: /* @__PURE__ */ v(Text, {
      id: "results.footer.analysis"
    }, "Analysis"),
    cb: () => toggleFooterSectionOpenClose(footerSection.ANALYSIS),
    isOpen: footerSectionIsOpen(footerSection.ANALYSIS)
  }, /* @__PURE__ */ v(MarkupText, {
    id: "results.footer.analysis--body"
  }, /* @__PURE__ */ v("p", null, "(Data analysis by Group Leger Analytics, with further interpretation and comments by Nicolas Grenier.)"), /* @__PURE__ */ v("h2", null, "PART I - YOU"), /* @__PURE__ */ v("h3", null, "Graph 1"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("strong", null, "Most respondents situate themselves in the first half of their life and find it rather \u201Ceasy to exist in this world.\u201D")), /* @__PURE__ */ v("li", null, "Overall, about a third (360 respondents, or 32%) find it rather \u201Chard to exist in this world.\u201D")), /* @__PURE__ */ v("h3", null, "Graph 2"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("strong", null, "The vast majority of respondents"), " (782 individuals, or 66%)", " ", /* @__PURE__ */ v("strong", null, "want their life to have greater meaning beyond their small existence. "), "Among these, a majority believes that morality and social norms are human universals."), /* @__PURE__ */ v("li", null, "However,", /* @__PURE__ */ v("strong", null, " there is no overall consensus as to whether morality is universal or cultural. "), "Slightly more respondents (535, or 45%) believe that morality is subjective and cultural rather than human universals (486, or 41%), and a significant proportion are neutral or ambivalent (146, or 13%).")), /* @__PURE__ */ v("h2", null, "PART II - YOU AND THE WORLD"), /* @__PURE__ */ v("h3", null, "Graph 3"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "There is a strong concentration in the top right quadrant, where", /* @__PURE__ */ v("strong", null, "a majority of respondents"), " (657, or 56%)", /* @__PURE__ */ v("strong", null, " ", "indicate that they both feel a deep connexion to the land and keep moving far and wide."))), /* @__PURE__ */ v("h3", null, "Graph 4"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("strong", null, "A clear majority of respondents"), " (665, or 57%)", /* @__PURE__ */ v("strong", null, " does not accept the legitimacy of the current world order."), " Among these, most respondents (371) indicate that they care more about larger questions and abstractions than the tangible reality of life."), /* @__PURE__ */ v("li", null, "Overall, answers are scattered on all quadrants, and a large proportion (332, or 28%) is neutral or ambivalent when given the choice between caring more about the \u201Ctangible reality of life\u201D or \u201Clarger questions and abstractions.\u201D")), /* @__PURE__ */ v("h3", null, "Graph 5"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("strong", null, "There is almost complete unanimity"), " (1049 respondents, or 92%):", /* @__PURE__ */ v("strong", null, " ", "exposure to different beliefs and value systems leads to increased tolerance and mutual understanding.")), /* @__PURE__ */ v("li", null, "A majority of respondents (589 or 51%) indicate that they define themselves and their convictions on their own, but many also define themselves in relation to groups with whom they belong (380, or 33%) and a good proportion is neutral or ambivalent (182, or 16%).")), /* @__PURE__ */ v("h2", null, "PART III - YOU AND THE FUTURE"), /* @__PURE__ */ v("h3", null, "Graph 6"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("strong", null, "There is a very strong consensus"), " (938 respondents, or 83%)", /* @__PURE__ */ v("strong", null, " ", "that we, humans living today, will have an impact of cosmological importance for the future of humanity.")), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("strong", null, "A strong majority"), " (653 respondents, or 57%)", /* @__PURE__ */ v("strong", null, " believes that \u201Cwe\u2019re going toward self-destruction,\u201D"), " while a small minority (266, or 23%) believes that we\u2019re making constant progress, and almost as many (223, or 20%) are neutral or ambivalent.")), /* @__PURE__ */ v("h3", null, "Graph 7"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("strong", null, "A strong majority"), " (847 respondents, or 75%)", /* @__PURE__ */ v("strong", null, " wants to protect the planet and reinvent a more egalitarian world"), ", and withink this majority most respondents", /* @__PURE__ */ v("strong", null, " are willing to dedicate themselves to the cause. ")), /* @__PURE__ */ v("li", null, "By contrast, a tiny minority affirms being strongly committed to defending \u201Cprivate property, the free market economy, and the freedom of the individual\u201D (70 respondents or 6%). A more significant proportion is neutral or ambivalent (161 respondents, or 15%).")), /* @__PURE__ */ v("h3", null, "Graph 8"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("strong", null, " Answers are scattered across all four quadrants. ")), /* @__PURE__ */ v("li", null, /* @__PURE__ */ v("strong", null, "A small majority of people"), " (586 respondents, or 51%)", /* @__PURE__ */ v("strong", null, " feel that they have the power to change things on a structural level"), ", while about one third feels powerless (386, or 34%)."), /* @__PURE__ */ v("li", null, "A small majority believes that idealism is more important than pragmatism, and a third of all respondents (351, or 31%) are neutral or ambivalent.")), /* @__PURE__ */ v("h2", null, "YOU AND THIS EXERCISE"), /* @__PURE__ */ v("h3", null, "Graph 9"), /* @__PURE__ */ v("ul", null, /* @__PURE__ */ v("li", null, "Thankfully,", /* @__PURE__ */ v("strong", null, " there is a strong consensus among respondents "), "(871, or 76%):", /* @__PURE__ */ v("strong", null, "they estimate that the questions were well-balanced and relevant, and that their answers truly represent how they feel.")), /* @__PURE__ */ v("li", null, "A small proportion of respondents (100, or 8%) consider the questions rather biased and / or moralizing and / or annoying."), /* @__PURE__ */ v("li", null, "A tiny proportion affirms that their answers to the questionnaire are rather meaningless (19 respondents, or less than 2%).")))), /* @__PURE__ */ v(CollapsibleSection, {
    title: /* @__PURE__ */ v(Text, {
      id: "results.footer.considerations"
    }, "Considerations"),
    cb: () => toggleFooterSectionOpenClose(footerSection.CONSIDERATIONS),
    isOpen: footerSectionIsOpen(footerSection.CONSIDERATIONS)
  }, /* @__PURE__ */ v(MarkupText, {
    id: "results.footer.considerations--body"
  }, /* @__PURE__ */ v("h2", null, "Extras: drawings, lines and other"), /* @__PURE__ */ v("p", null, "About 5-10% of the questionnaires included marks other than dots. Unfortunately, due to the most boring pragmatic limitations (time and budget), it is impossible to reproduce all of this here."), /* @__PURE__ */ v("p", null, "In the majority of cases, the marks consist in one or more additional dots, one or several lines, or a shape enclosing an area of a graph. Sometimes (in about 1 or 2% of cases), it is a drawing or an inscription. Usually, when possible, we simply considered the location of these marks on the graph as if it was a dot."), /* @__PURE__ */ v("p", null, "In almost all cases, these marks express a clear desire not to be limited to Cartesian logic and to a single response \u2014 which of course can be reductive. This critique comes up in the comments as well."), /* @__PURE__ */ v("h2", null, "Why are there so many dots in the center?"), /* @__PURE__ */ v("p", null, "On average, 5.5% of all answers are found at the center of the graphs (it oscillates between 3% and 11% from one graph to the next), which is not as much as it may seem. Still, it remains significant."), /* @__PURE__ */ v("p", null, "Given the X/Y-axis structure of the graphs and the existential nature of the questions, the center was probably used as the default position whenever someone wanted to express neutrality and/or ambivalence, and/or the actual position where respondents see themselves, and/or a way to express \u201Cnone of the above\u201D or \u201Call of the above.\u201D (Among the respondents who left comments in the questionnaire, several wrote that only one dot could not adequately express their position.)"), /* @__PURE__ */ v("h2", null, "Respondent categories"), /* @__PURE__ */ v("p", null, /* @__PURE__ */ v("strong", null, "This analysis considers all respondents together. "), "Overall, there are no major differences between the responses of the populations of Montreal and Edmonton, nor between Francophones and Anglophones. However, to compare the different categories of respondents (Edmonton or Montreal, questionnaires in French or in English), go to \u201CVisualization options,\u201D click \u201CShow respondents from\u2026\u201D and pick the groups you want. In \u201CGraph type\u201D you can select percentage to make it easier to compare."), /* @__PURE__ */ v("p", null, "The respondents are museum and gallery goers, and as such are not necessarily representative of the general population."), /* @__PURE__ */ v("h2", null, "Dates"), /* @__PURE__ */ v("p", null, "It must be noted that the last questionnaires were handed on March 7, 2020, just one week before the pandemic changed our lives. (How different would the answers be if the survey was to be conducted today? Given the nature of the questionnaire, would the pandemic be more of a distraction, or would it fundamentally alter how people think about these issues?)"), /* @__PURE__ */ v("h2", null, "Representation of the dots"), /* @__PURE__ */ v("p", null, "In order to better show each individual dot on the scatterplot graphs, an algorithm was applied to slightly separate the dots from one another. (For example, if 35 respondents placed a dot exactly in the center, these dots are here presented not as a single dot but as a cluster of dots.)"), /* @__PURE__ */ v("h2", null, "Beware of numbers"), /* @__PURE__ */ v("p", null, "The raison d'\xEAtre of this questionnaire is above all to exist visually, and to question the way in which we consider issues of a qualitative nature. We live in a data-driven world, and numbers are often used to create a sense of knowledge, expertise, and predictability that hides the fundamental and radical uncertainty that defines the human condition. Here, we tried to balance the use of numbers and visuals to give you the best possible portrait of the results. But numbers can only give you the simplified portrait; always refer to the scatterplot graphs to interpret the numbers."))), /* @__PURE__ */ v(CollapsibleSection, {
    title: /* @__PURE__ */ v(Text, {
      id: "results.footer.objectives"
    }, "Objectives"),
    cb: () => toggleFooterSectionOpenClose(footerSection.ABOUT),
    isOpen: footerSectionIsOpen(footerSection.ABOUT)
  }, /* @__PURE__ */ v(MarkupText, {
    id: "results.footer.objectives--body"
  }, /* @__PURE__ */ v("p", null, "The goal of this project was not to collect data with the aim of publishing it, but rather to include an active experience of questioning as an integral part of the exhibitions."), /* @__PURE__ */ v("p", null, "This questionnaire was originally designed as part of my installation for the Sobey Art Award Exhibition, which took place at the Art Gallery of Alberta, Edmonton, Canada from October 5, 2019 to January 5, 2020."), /* @__PURE__ */ v("p", null, "The diagrammatic structure of the questionnaire mirrors some of my paintings. I wanted to create an experience in which visitors could immerse themselves in the works not only by looking, but also by positioning themselves in relation to the same existential issues that I address in my work. Taking a position involves choosing this over that, which is to say, it implies a form of measurement. But a quantitative framework is inherently inappropriate to ponder on qualitative notions such as morality or progress. So I used a cartesian plane with X and Y axes (for its simplicity and familiarity), but I deliberately avoided presenting participants with precise grids, numbers and metrics. I didn\u2019t want the focus to be on quantification, but on navigation \u2014 I wanted participants to navigate through different sets of issues put in relation with one another and find their own position as intuitively as possible. That is why this questionnaire, as opposed to most polls or surveys, deliberately avoided anything that can be measured objectively, such as age, income, ethnicity, and any question that can be answered by yes or no. The goal was to try to concretize, however modestly, the structure within which we consider big existential questions.", /* @__PURE__ */ v("br", null), "To make visitors engage in this experience was the essence of the project."), /* @__PURE__ */ v("p", null, "Of course, legitimate criticism can be made about several aspects of the project \u2014 the binary nature of the questions, the choice of issues, my own biases as a white man, the loftiness inherent in asking big questions, and the tendency of such questions to bring back the old pitfalls of universalism. Despite these shortcomings, many more people than I expected took the time to complete the questionnaire and provided positive feedback, which signals that it might be worth pushing the experience further. I hope to develop a funkier questionnaire, where respondents could give multidimensional answers, express contradicting positions, critique the questions, etc. It seems relevant to develop experimental alternatives to conventional measurement systems and see what can be done with such methods."))), /* @__PURE__ */ v(CollapsibleSection, {
    title: /* @__PURE__ */ v(Text, {
      id: "results.footer.contact"
    }, "Contact & Feedback"),
    cb: () => toggleFooterSectionOpenClose(footerSection.CONTACT),
    isOpen: footerSectionIsOpen(footerSection.CONTACT)
  }, /* @__PURE__ */ v("p", null, /* @__PURE__ */ v(Text, {
    id: "results.footer.contact--body"
  }, "For any questions, comments or other, feel free to contact me at grenier.nicolas@gmail.com"))), /* @__PURE__ */ v("section", {
    className: "acknowledgements"
  }, /* @__PURE__ */ v("h1", {
    lang: "en"
  }, /* @__PURE__ */ v(Text, {
    id: "results.footer.acknowledgements"
  }, "Acknowledge\xADments")), /* @__PURE__ */ v(MarkupText, {
    id: "results.footer.acknowledgements--body"
  }, /* @__PURE__ */ v("p", null, "The questionnaire was conceived with help from", /* @__PURE__ */ v("strong", null, " Tyson Atkings, David Elliott"), ", and", /* @__PURE__ */ v("strong", null, " Chantal Gevrey"), "."), /* @__PURE__ */ v("p", null, "The paper questionnaires were collected by the team at the", /* @__PURE__ */ v("strong", null, " Art Gallery of Alberta"), " (thanks to curator", /* @__PURE__ */ v("strong", null, " Lindsey Sharman"), ") and by the team at", /* @__PURE__ */ v("strong", null, " Galerie Bradley Ertaskiran"), " (thanks to", /* @__PURE__ */ v("strong", null, " Soad Carrier"), ", ", /* @__PURE__ */ v("strong", null, " C\xE9cile Bert\xE9vas"), ",", /* @__PURE__ */ v("strong", null, " Mark Lowe"), ",", " ", /* @__PURE__ */ v("strong", null, " Russell Banx"), ", ", /* @__PURE__ */ v("strong", null, "Megan Bradley"), " and ", /* @__PURE__ */ v("strong", null, "Antoine Ertaskiran"), ")."), /* @__PURE__ */ v("p", null, "Data from the paper questionnaires were compiled by", /* @__PURE__ */ v("strong", null, " Loucas Braconnier"), ", with help from", /* @__PURE__ */ v("strong", null, " William Sabourin"), ", ", /* @__PURE__ */ v("strong", null, " Sarah Boutin"), ", and", /* @__PURE__ */ v("strong", null, " Mathieu Reed"), "."), /* @__PURE__ */ v("p", null, "The data analysis was conducted by ", /* @__PURE__ */ v("strong", null, " Bich Tran"), " and", /* @__PURE__ */ v("strong", null, " Am\xE9lie B\xE9riault-Poirier"), " from", /* @__PURE__ */ v("strong", null, " Group Leger Analytics"), "."), /* @__PURE__ */ v("p", null, "This interface for data visualisation was built by", /* @__PURE__ */ v("strong", null, " ", /* @__PURE__ */ v("a", {
    style: "background: inherit; color: inherit;",
    href: "https://nilueps.net"
  }, "Nicolas\xA0Epstein")), "."), /* @__PURE__ */ v("h1", {
    style: "margin-top: 3rem;"
  }, "The project was made possible thanks to the support of:")), /* @__PURE__ */ v("img", {
    src: "/images/logo-conseil-des-arts-du-canada.png",
    alt: "logo of the canada council for the arts"
  }), /* @__PURE__ */ v("img", {
    src: "/images/national-gallery-of-canada-logo-vector.png",
    alt: "logo of the national art gallery of canada"
  }), /* @__PURE__ */ v("img", {
    src: "/images/AGA_BW_Vrt.jpg",
    alt: "logo of the art gallery of alberta"
  }), /* @__PURE__ */ v("img", {
    src: "/images/hero-text-sobeys-en_0.png",
    alt: "logo of the sobey art award"
  })), /* @__PURE__ */ v("section", {
    style: "border: none; background: white; padding-bottom: 0"
  }, /* @__PURE__ */ v(SiteMenu, {
    style: "padding-bottom: 2.5rem; margin-bottom: 0"
  }))));
}

// packages/results2019-2020/src/index.jsx
if (true) {
  init_debug_module();
}
function App() {
  return /* @__PURE__ */ v(LanguageContextProvider, null, /* @__PURE__ */ v(MobileContextProvider, null, /* @__PURE__ */ v(Results, null)));
}
S(/* @__PURE__ */ v(App, null), document.body);
//# sourceMappingURL=https://www.pluralism.xyz/survey2019-2020/index.js.map
