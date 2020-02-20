/**
 ART19 Web Player v0.0.48
 (C) 2017 ART19
 https://www.art19.com/
 **/
(function(define, require, requirejs) {

  /*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
  ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
      if (!a.document) throw new Error("jQuery requires a window with a document");
      return b(a)
    } : b(a)
  }("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
      d = c.slice,
      e = c.concat,
      f = c.push,
      g = c.indexOf,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = {},
      l = a.document,
      m = "2.1.4",
      n = function(a, b) {
        return new n.fn.init(a, b)
      },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function(a, b) {
        return b.toUpperCase()
      };
    n.fn = n.prototype = {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function() {
        return d.call(this)
      },
      get: function(a) {
        return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
      },
      pushStack: function(a) {
        var b = n.merge(this.constructor(), a);
        return b.prevObject = this, b.context = this.context, b
      },
      each: function(a, b) {
        return n.each(this, a, b)
      },
      map: function(a) {
        return this.pushStack(n.map(this, function(b, c) {
          return a.call(b, c, b)
        }))
      },
      slice: function() {
        return this.pushStack(d.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor(null)
      },
      push: f,
      sort: c.sort,
      splice: c.splice
    }, n.extend = n.fn.extend = function() {
      var a, b, c, d, e, f, g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
      for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
        if (null != (a = arguments[h]))
          for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      return g
    }, n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(a) {
        throw new Error(a)
      },
      noop: function() {},
      isFunction: function(a) {
        return "function" === n.type(a)
      },
      isArray: Array.isArray,
      isWindow: function(a) {
        return null != a && a === a.window
      },
      isNumeric: function(a) {
        return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
      },
      isPlainObject: function(a) {
        return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
      },
      isEmptyObject: function(a) {
        var b;
        for (b in a) return !1;
        return !0
      },
      type: function(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
      },
      globalEval: function(a) {
        var b, c = eval;
        a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
      },
      camelCase: function(a) {
        return a.replace(p, "ms-").replace(q, r)
      },
      nodeName: function(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
      },
      each: function(a, b, c) {
        var d, e = 0,
          f = a.length,
          g = s(a);
        if (c) {
          if (g) {
            for (; f > e; e++)
              if (d = b.apply(a[e], c), d === !1) break
          } else
            for (e in a)
              if (d = b.apply(a[e], c), d === !1) break
        } else if (g) {
          for (; f > e; e++)
            if (d = b.call(a[e], e, a[e]), d === !1) break
        } else
          for (e in a)
            if (d = b.call(a[e], e, a[e]), d === !1) break; return a
      },
      trim: function(a) {
        return null == a ? "" : (a + "").replace(o, "")
      },
      makeArray: function(a, b) {
        var c = b || [];
        return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
      },
      inArray: function(a, b, c) {
        return null == b ? -1 : g.call(b, a, c)
      },
      merge: function(a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return a.length = e, a
      },
      grep: function(a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
        return e
      },
      map: function(a, b, c) {
        var d, f = 0,
          g = a.length,
          h = s(a),
          i = [];
        if (h)
          for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
        else
          for (f in a) d = b(a[f], f, c), null != d && i.push(d);
        return e.apply([], i)
      },
      guid: 1,
      proxy: function(a, b) {
        var c, e, f;
        return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
          return a.apply(b || this, e.concat(d.call(arguments)))
        }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
      },
      now: Date.now,
      support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
      h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
      var b = "length" in a && a.length,
        c = n.type(a);
      return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
      var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function(a, b) {
          return a === b && (l = !0), 0
        },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function(a, b) {
          for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b) return c;
          return -1
        },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = M.replace("w", "w#"),
        O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
        P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
        Q = new RegExp(L + "+", "g"),
        R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        S = new RegExp("^" + L + "*," + L + "*"),
        T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        V = new RegExp(P),
        W = new RegExp("^" + N + "$"),
        X = {
          ID: new RegExp("^#(" + M + ")"),
          CLASS: new RegExp("^\\.(" + M + ")"),
          TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + O),
          PSEUDO: new RegExp("^" + P),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + K + ")$", "i"),
          needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        },
        Y = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        $ = /^[^{]+\{\s*\[native \w/,
        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        aa = /[+~]/,
        ba = /'|\\/g,
        ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        da = function(a, b, c) {
          var d = "0x" + b - 65536;
          return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        },
        ea = function() {
          m()
        };
      try {
        H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
      } catch (fa) {
        H = {
          apply: E.length ? function(a, b) {
            G.apply(a, I.call(b))
          } : function(a, b) {
            var c = a.length,
              d = 0;
            while (a[c++] = b[d++]);
            a.length = c - 1
          }
        }
      }

      function ga(a, b, d, e) {
        var f, h, j, k, l, o, r, s, w, x;
        if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
        if (!e && p) {
          if (11 !== k && (f = _.exec(a)))
            if (j = f[1]) {
              if (9 === k) {
                if (h = b.getElementById(j), !h || !h.parentNode) return d;
                if (h.id === j) return d.push(h), d
              } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
            } else {
              if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
              if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
            }
          if (c.qsa && (!q || !q.test(a))) {
            if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
              o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
              while (l--) o[l] = s + ra(o[l]);
              w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
            }
            if (x) try {
              return H.apply(d, w.querySelectorAll(x)), d
            } catch (y) {} finally {
              r || b.removeAttribute("id")
            }
          }
        }
        return i(a.replace(R, "$1"), b, d, e)
      }

      function ha() {
        var a = [];

        function b(c, e) {
          return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
        }
        return b
      }

      function ia(a) {
        return a[u] = !0, a
      }

      function ja(a) {
        var b = n.createElement("div");
        try {
          return !!a(b)
        } catch (c) {
          return !1
        } finally {
          b.parentNode && b.parentNode.removeChild(b), b = null
        }
      }

      function ka(a, b) {
        var c = a.split("|"),
          e = a.length;
        while (e--) d.attrHandle[c[e]] = b
      }

      function la(a, b) {
        var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
        if (d) return d;
        if (c)
          while (c = c.nextSibling)
            if (c === b) return -1;
        return a ? 1 : -1
      }

      function ma(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a
        }
      }

      function na(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a
        }
      }

      function oa(a) {
        return ia(function(b) {
          return b = +b, ia(function(c, d) {
            var e, f = a([], c.length, b),
              g = f.length;
            while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
          })
        })
      }

      function pa(a) {
        return a && "undefined" != typeof a.getElementsByTagName && a
      }
      c = ga.support = {}, f = ga.isXML = function(a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return b ? "HTML" !== b.nodeName : !1
      }, m = ga.setDocument = function(a) {
        var b, e, g = a ? a.ownerDocument || a : v;
        return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function(a) {
          return a.className = "i", !a.getAttribute("className")
        }), c.getElementsByTagName = ja(function(a) {
          return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
        }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
          return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
        }), c.getById ? (d.find.ID = function(a, b) {
          if ("undefined" != typeof b.getElementById && p) {
            var c = b.getElementById(a);
            return c && c.parentNode ? [c] : []
          }
        }, d.filter.ID = function(a) {
          var b = a.replace(ca, da);
          return function(a) {
            return a.getAttribute("id") === b
          }
        }) : (delete d.find.ID, d.filter.ID = function(a) {
          var b = a.replace(ca, da);
          return function(a) {
            var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
            return c && c.value === b
          }
        }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
          return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
        } : function(a, b) {
          var c, d = [],
            e = 0,
            f = b.getElementsByTagName(a);
          if ("*" === a) {
            while (c = f[e++]) 1 === c.nodeType && d.push(c);
            return d
          }
          return f
        }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
            return p ? b.getElementsByClassName(a) : void 0
          }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
          o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
        }), ja(function(a) {
          var b = g.createElement("input");
          b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
        })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
          c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
        }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
          var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
          return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
        } : function(a, b) {
          if (b)
            while (b = b.parentNode)
              if (b === a) return !0;
          return !1
        }, B = b ? function(a, b) {
          if (a === b) return l = !0, 0;
          var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
          return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
        } : function(a, b) {
          if (a === b) return l = !0, 0;
          var c, d = 0,
            e = a.parentNode,
            f = b.parentNode,
            h = [a],
            i = [b];
          if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
          if (e === f) return la(a, b);
          c = a;
          while (c = c.parentNode) h.unshift(c);
          c = b;
          while (c = c.parentNode) i.unshift(c);
          while (h[d] === i[d]) d++;
          return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
        }, g) : n
      }, ga.matches = function(a, b) {
        return ga(a, null, null, b)
      }, ga.matchesSelector = function(a, b) {
        if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
          var d = s.call(a, b);
          if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
        } catch (e) {}
        return ga(b, n, null, [a]).length > 0
      }, ga.contains = function(a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b)
      }, ga.attr = function(a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
      }, ga.error = function(a) {
        throw new Error("Syntax error, unrecognized expression: " + a)
      }, ga.uniqueSort = function(a) {
        var b, d = [],
          e = 0,
          f = 0;
        if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
          while (b = a[f++]) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1)
        }
        return k = null, a
      }, e = ga.getText = function(a) {
        var b, c = "",
          d = 0,
          f = a.nodeType;
        if (f) {
          if (1 === f || 9 === f || 11 === f) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
          } else if (3 === f || 4 === f) return a.nodeValue
        } else
          while (b = a[d++]) c += e(b);
        return c
      }, d = ga.selectors = {
        cacheLength: 50,
        createPseudo: ia,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(a) {
            return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
          },
          CHILD: function(a) {
            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
          },
          PSEUDO: function(a) {
            var b, c = !a[6] && a[2];
            return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
          }
        },
        filter: {
          TAG: function(a) {
            var b = a.replace(ca, da).toLowerCase();
            return "*" === a ? function() {
              return !0
            } : function(a) {
              return a.nodeName && a.nodeName.toLowerCase() === b
            }
          },
          CLASS: function(a) {
            var b = y[a + " "];
            return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
              })
          },
          ATTR: function(a, b, c) {
            return function(d) {
              var e = ga.attr(d, a);
              return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
            }
          },
          CHILD: function(a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === d && 0 === e ? function(a) {
              return !!a.parentNode
            } : function(b, c, i) {
              var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h;
              if (q) {
                if (f) {
                  while (p) {
                    l = b;
                    while (l = l[p])
                      if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                    o = p = "only" === a && !o && "nextSibling"
                  }
                  return !0
                }
                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                  k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                  while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                    if (1 === l.nodeType && ++m && l === b) {
                      k[a] = [w, n, m];
                      break
                    }
                } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                else
                  while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
              }
            }
          },
          PSEUDO: function(a, b) {
            var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
            return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
              var d, f = e(a, b),
                g = f.length;
              while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
            }) : function(a) {
              return e(a, 0, c)
            }) : e
          }
        },
        pseudos: {
          not: ia(function(a) {
            var b = [],
              c = [],
              d = h(a.replace(R, "$1"));
            return d[u] ? ia(function(a, b, c, e) {
              var f, g = d(a, null, e, []),
                h = a.length;
              while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
            }) : function(a, e, f) {
              return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
            }
          }),
          has: ia(function(a) {
            return function(b) {
              return ga(a, b).length > 0
            }
          }),
          contains: ia(function(a) {
            return a = a.replace(ca, da),
              function(b) {
                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
              }
          }),
          lang: ia(function(a) {
            return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
              function(b) {
                var c;
                do
                  if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                while ((b = b.parentNode) && 1 === b.nodeType);
                return !1
              }
          }),
          target: function(b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id
          },
          root: function(a) {
            return a === o
          },
          focus: function(a) {
            return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
          },
          enabled: function(a) {
            return a.disabled === !1
          },
          disabled: function(a) {
            return a.disabled === !0
          },
          checked: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && !!a.checked || "option" === b && !!a.selected
          },
          selected: function(a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
          },
          empty: function(a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1;
            return !0
          },
          parent: function(a) {
            return !d.pseudos.empty(a)
          },
          header: function(a) {
            return Z.test(a.nodeName)
          },
          input: function(a) {
            return Y.test(a.nodeName)
          },
          button: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && "button" === a.type || "button" === b
          },
          text: function(a) {
            var b;
            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
          },
          first: oa(function() {
            return [0]
          }),
          last: oa(function(a, b) {
            return [b - 1]
          }),
          eq: oa(function(a, b, c) {
            return [0 > c ? c + b : c]
          }),
          even: oa(function(a, b) {
            for (var c = 0; b > c; c += 2) a.push(c);
            return a
          }),
          odd: oa(function(a, b) {
            for (var c = 1; b > c; c += 2) a.push(c);
            return a
          }),
          lt: oa(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
            return a
          }),
          gt: oa(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
            return a
          })
        }
      }, d.pseudos.nth = d.pseudos.eq;
      for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = ma(b);
      for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = na(b);

      function qa() {}
      qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {
        var c, e, f, g, h, i, j, k = z[a + " "];
        if (k) return b ? 0 : k.slice(0);
        h = a, i = [], j = d.preFilter;
        while (h) {
          (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
            value: c,
            type: e[0].replace(R, " ")
          }), h = h.slice(c.length));
          for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
            value: c,
            type: g,
            matches: e
          }), h = h.slice(c.length));
          if (!c) break
        }
        return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
      };

      function ra(a) {
        for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
        return d
      }

      function sa(a, b, c) {
        var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;
        return b.first ? function(b, c, f) {
          while (b = b[d])
            if (1 === b.nodeType || e) return a(b, c, f)
        } : function(b, c, g) {
          var h, i, j = [w, f];
          if (g) {
            while (b = b[d])
              if ((1 === b.nodeType || e) && a(b, c, g)) return !0
          } else
            while (b = b[d])
              if (1 === b.nodeType || e) {
                if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                if (i[d] = j, j[2] = a(b, c, g)) return !0
              }
        }
      }

      function ta(a) {
        return a.length > 1 ? function(b, c, d) {
          var e = a.length;
          while (e--)
            if (!a[e](b, c, d)) return !1;
          return !0
        } : a[0]
      }

      function ua(a, b, c) {
        for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
        return c
      }

      function va(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        return g
      }

      function wa(a, b, c, d, e, f) {
        return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
          var j, k, l, m = [],
            n = [],
            o = g.length,
            p = f || ua(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : va(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;
          if (c && c(q, r, h, i), d) {
            j = va(r, n), d(j, [], h, i), k = j.length;
            while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
          }
          if (f) {
            if (e || a) {
              if (e) {
                j = [], k = r.length;
                while (k--)(l = r[k]) && j.push(q[k] = l);
                e(null, r = [], j, i)
              }
              k = r.length;
              while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
            }
          } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
        })
      }

      function xa(a) {
        for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
          return a === b
        }, h, !0), l = sa(function(a) {
          return J(b, a) > -1
        }, h, !0), m = [function(a, c, d) {
          var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
          return b = null, e
        }]; f > i; i++)
          if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
          else {
            if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
              for (e = ++i; f > e; e++)
                if (d.relative[a[e].type]) break;
              return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                  value: " " === a[i - 2].type ? "*" : ""
                })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
            }
            m.push(c)
          }
        return ta(m)
      }

      function ya(a, b) {
        var c = b.length > 0,
          e = a.length > 0,
          f = function(f, g, h, i, k) {
            var l, m, o, p = 0,
              q = "0",
              r = f && [],
              s = [],
              t = j,
              u = f || e && d.find.TAG("*", k),
              v = w += null == t ? 1 : Math.random() || .1,
              x = u.length;
            for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
              if (e && l) {
                m = 0;
                while (o = a[m++])
                  if (o(l, g, h)) {
                    i.push(l);
                    break
                  }
                k && (w = v)
              }
              c && ((l = !o && l) && p--, f && r.push(l))
            }
            if (p += q, c && q !== p) {
              m = 0;
              while (o = b[m++]) o(r, s, g, h);
              if (f) {
                if (p > 0)
                  while (q--) r[q] || s[q] || (s[q] = F.call(i));
                s = va(s)
              }
              H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
            }
            return k && (w = v, j = t), r
          };
        return c ? ia(f) : f
      }
      return h = ga.compile = function(a, b) {
        var c, d = [],
          e = [],
          f = A[a + " "];
        if (!f) {
          b || (b = g(a)), c = b.length;
          while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
          f = A(a, ya(e, d)), f.selector = a
        }
        return f
      }, i = ga.select = function(a, b, e, f) {
        var i, j, k, l, m, n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);
        if (e = e || [], 1 === o.length) {
          if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
            if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
            n && (b = b.parentNode), a = a.slice(j.shift().value.length)
          }
          i = X.needsContext.test(a) ? 0 : j.length;
          while (i--) {
            if (k = j[i], d.relative[l = k.type]) break;
            if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
              if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
              break
            }
          }
        }
        return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
      }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"))
      }), ja(function(a) {
        return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
      }) || ka("type|href|height|width", function(a, b, c) {
        return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
      }), c.attributes && ja(function(a) {
        return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
      }) || ka("value", function(a, b, c) {
        return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
      }), ja(function(a) {
        return null == a.getAttribute("disabled")
      }) || ka(K, function(a, b, c) {
        var d;
        return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
      }), ga
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
      v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
      if (n.isFunction(b)) return n.grep(a, function(a, d) {
        return !!b.call(a, d, a) !== c
      });
      if (b.nodeType) return n.grep(a, function(a) {
        return a === b !== c
      });
      if ("string" == typeof b) {
        if (w.test(b)) return n.filter(b, a, c);
        b = n.filter(b, a)
      }
      return n.grep(a, function(a) {
        return g.call(b, a) >= 0 !== c
      })
    }
    n.filter = function(a, b, c) {
      var d = b[0];
      return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
        return 1 === a.nodeType
      }))
    }, n.fn.extend({
      find: function(a) {
        var b, c = this.length,
          d = [],
          e = this;
        if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
          for (b = 0; c > b; b++)
            if (n.contains(e[b], this)) return !0
        }));
        for (b = 0; c > b; b++) n.find(a, e[b], d);
        return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
      },
      filter: function(a) {
        return this.pushStack(x(this, a || [], !1))
      },
      not: function(a) {
        return this.pushStack(x(this, a || [], !0))
      },
      is: function(a) {
        return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
      }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      A = n.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
          if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
          if (c[1]) {
            if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
              for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
            return this
          }
          return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
      };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/,
      C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    n.extend({
      dir: function(a, b, c) {
        var d = [],
          e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
          if (1 === a.nodeType) {
            if (e && n(a).is(c)) break;
            d.push(a)
          }
        return d
      },
      sibling: function(a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c
      }
    }), n.fn.extend({
      has: function(a) {
        var b = n(a, this),
          c = b.length;
        return this.filter(function() {
          for (var a = 0; c > a; a++)
            if (n.contains(this, b[a])) return !0
        })
      },
      closest: function(a, b) {
        for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
              f.push(c);
              break
            }
        return this.pushStack(f.length > 1 ? n.unique(f) : f)
      },
      index: function(a) {
        return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(a, b) {
        return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
      },
      addBack: function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
      }
    });

    function D(a, b) {
      while ((a = a[b]) && 1 !== a.nodeType);
      return a
    }
    n.each({
      parent: function(a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null
      },
      parents: function(a) {
        return n.dir(a, "parentNode")
      },
      parentsUntil: function(a, b, c) {
        return n.dir(a, "parentNode", c)
      },
      next: function(a) {
        return D(a, "nextSibling")
      },
      prev: function(a) {
        return D(a, "previousSibling")
      },
      nextAll: function(a) {
        return n.dir(a, "nextSibling")
      },
      prevAll: function(a) {
        return n.dir(a, "previousSibling")
      },
      nextUntil: function(a, b, c) {
        return n.dir(a, "nextSibling", c)
      },
      prevUntil: function(a, b, c) {
        return n.dir(a, "previousSibling", c)
      },
      siblings: function(a) {
        return n.sibling((a.parentNode || {}).firstChild, a)
      },
      children: function(a) {
        return n.sibling(a.firstChild)
      },
      contents: function(a) {
        return a.contentDocument || n.merge([], a.childNodes)
      }
    }, function(a, b) {
      n.fn[a] = function(c, d) {
        var e = n.map(this, b, c);
        return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
      }
    });
    var E = /\S+/g,
      F = {};

    function G(a) {
      var b = F[a] = {};
      return n.each(a.match(E) || [], function(a, c) {
        b[c] = !0
      }), b
    }
    n.Callbacks = function(a) {
      a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
      var b, c, d, e, f, g, h = [],
        i = !a.once && [],
        j = function(l) {
          for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
            if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
              b = !1;
              break
            }
          d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        },
        k = {
          add: function() {
            if (h) {
              var c = h.length;
              ! function g(b) {
                n.each(b, function(b, c) {
                  var d = n.type(c);
                  "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                })
              }(arguments), d ? f = h.length : b && (e = c, j(b))
            }
            return this
          },
          remove: function() {
            return h && n.each(arguments, function(a, b) {
              var c;
              while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
            }), this
          },
          has: function(a) {
            return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
          },
          empty: function() {
            return h = [], f = 0, this
          },
          disable: function() {
            return h = i = b = void 0, this
          },
          disabled: function() {
            return !h
          },
          lock: function() {
            return i = void 0, b || k.disable(), this
          },
          locked: function() {
            return !i
          },
          fireWith: function(a, b) {
            return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
          },
          fire: function() {
            return k.fireWith(this, arguments), this
          },
          fired: function() {
            return !!c
          }
        };
      return k
    }, n.extend({
      Deferred: function(a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")]
          ],
          c = "pending",
          d = {
            state: function() {
              return c
            },
            always: function() {
              return e.done(arguments).fail(arguments), this
            },
            then: function() {
              var a = arguments;
              return n.Deferred(function(c) {
                n.each(b, function(b, f) {
                  var g = n.isFunction(a[b]) && a[b];
                  e[f[1]](function() {
                    var a = g && g.apply(this, arguments);
                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                  })
                }), a = null
              }).promise()
            },
            promise: function(a) {
              return null != a ? n.extend(a, d) : d
            }
          },
          e = {};
        return d.pipe = d.then, n.each(b, function(a, f) {
          var g = f[2],
            h = f[3];
          d[f[1]] = g.add, h && g.add(function() {
            c = h
          }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
            return e[f[0] + "With"](this === e ? d : this, arguments), this
          }, e[f[0] + "With"] = g.fireWith
        }), d.promise(e), a && a.call(e, e), e
      },
      when: function(a) {
        var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function(a, b, c) {
            return function(e) {
              b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
            }
          },
          i, j, k;
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
        return f || g.resolveWith(k, c), g.promise()
      }
    });
    var H;
    n.fn.ready = function(a) {
      return n.ready.promise().done(a), this
    }, n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(a) {
        a ? n.readyWait++ : n.ready(!0)
      },
      ready: function(a) {
        (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
      }
    });

    function I() {
      l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }
    n.ready.promise = function(b) {
      return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) n.access(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
          return j.call(n(a), c)
        })), b))
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function(a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function K() {
      Object.defineProperty(this.cache = {}, 0, {
        get: function() {
          return {}
        }
      }), this.expando = n.expando + K.uid++
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
      key: function(a) {
        if (!K.accepts(a)) return 0;
        var b = {},
          c = a[this.expando];
        if (!c) {
          c = K.uid++;
          try {
            b[this.expando] = {
              value: c
            }, Object.defineProperties(a, b)
          } catch (d) {
            b[this.expando] = c, n.extend(a, b)
          }
        }
        return this.cache[c] || (this.cache[c] = {}), c
      },
      set: function(a, b, c) {
        var d, e = this.key(a),
          f = this.cache[e];
        if ("string" == typeof b) f[b] = c;
        else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
        else
          for (d in b) f[d] = b[d];
        return f
      },
      get: function(a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b]
      },
      access: function(a, b, c) {
        var d;
        return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
      },
      remove: function(a, b) {
        var c, d, e, f = this.key(a),
          g = this.cache[f];
        if (void 0 === b) this.cache[f] = {};
        else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
          while (c--) delete g[d[c]]
        }
      },
      hasData: function(a) {
        return !n.isEmptyObject(this.cache[a[this.expando]] || {})
      },
      discard: function(a) {
        a[this.expando] && delete this.cache[a[this.expando]]
      }
    };
    var L = new K,
      M = new K,
      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;

    function P(a, b, c) {
      var d;
      if (void 0 === c && 1 === a.nodeType)
        if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
          try {
            c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
          } catch (e) {}
          M.set(a, b, c)
        } else c = void 0;
      return c
    }
    n.extend({
      hasData: function(a) {
        return M.hasData(a) || L.hasData(a)
      },
      data: function(a, b, c) {
        return M.access(a, b, c)
      },
      removeData: function(a, b) {
        M.remove(a, b)
      },
      _data: function(a, b, c) {
        return L.access(a, b, c)
      },
      _removeData: function(a, b) {
        L.remove(a, b)
      }
    }), n.fn.extend({
      data: function(a, b) {
        var c, d, e, f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
            c = g.length;
            while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
            L.set(f, "hasDataAttrs", !0)
          }
          return e
        }
        return "object" == typeof a ? this.each(function() {
          M.set(this, a)
        }) : J(this, function(b) {
          var c, d = n.camelCase(a);
          if (f && void 0 === b) {
            if (c = M.get(f, a), void 0 !== c) return c;
            if (c = M.get(f, d), void 0 !== c) return c;
            if (c = P(f, d, void 0), void 0 !== c) return c
          } else this.each(function() {
            var c = M.get(this, d);
            M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
          })
        }, null, b, arguments.length > 1, null, !0)
      },
      removeData: function(a) {
        return this.each(function() {
          M.remove(this, a)
        })
      }
    }), n.extend({
      queue: function(a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
      },
      dequeue: function(a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function() {
            n.dequeue(a, b)
          };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
      },
      _queueHooks: function(a, b) {
        var c = b + "queueHooks";
        return L.get(a, c) || L.access(a, c, {
            empty: n.Callbacks("once memory").add(function() {
              L.remove(a, [b + "queue", c])
            })
          })
      }
    }), n.fn.extend({
      queue: function(a, b) {
        var c = 2;
        return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
          var c = n.queue(this, a, b);
          n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
        })
      },
      dequeue: function(a) {
        return this.each(function() {
          n.dequeue(this, a)
        })
      },
      clearQueue: function(a) {
        return this.queue(a || "fx", [])
      },
      promise: function(a, b) {
        var c, d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function() {
            --d || e.resolveWith(f, [f])
          };
        "string" != typeof a && (b = a, a = void 0), a = a || "fx";
        while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b)
      }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      R = ["Top", "Right", "Bottom", "Left"],
      S = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      },
      T = /^(?:checkbox|radio)$/i;
    ! function() {
      var a = l.createDocumentFragment(),
        b = a.appendChild(l.createElement("div")),
        c = l.createElement("input");
      c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
      W = /^(?:mouse|pointer|contextmenu)|click/,
      X = /^(?:focusinfocus|focusoutblur)$/,
      Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
      return !0
    }

    function $() {
      return !1
    }

    function _() {
      try {
        return l.activeElement
      } catch (a) {}
    }
    n.event = {
      global: {},
      add: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
        if (r) {
          c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
            return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
          }), b = (b || "").match(E) || [""], j = b.length;
          while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
            type: o,
            origType: q,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && n.expr.match.needsContext.test(e),
            namespace: p.join(".")
          }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
        }
      },
      remove: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
        if (r && (i = r.events)) {
          b = (b || "").match(E) || [""], j = b.length;
          while (j--)
            if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
              l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
              while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
              g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
            } else
              for (o in i) n.event.remove(a, o + b[j], c, d, !0);
          n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
        }
      },
      trigger: function(b, c, d, e) {
        var f, g, h, i, k, m, o, p = [d || l],
          q = j.call(b, "type") ? b.type : b,
          r = j.call(b, "namespace") ? b.namespace.split(".") : [];
        if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
          if (!e && !o.noBubble && !n.isWindow(d)) {
            for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
            h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
          }
          f = 0;
          while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
          return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
        }
      },
      dispatch: function(a) {
        a = n.event.fix(a);
        var b, c, e, f, g, h = [],
          i = d.call(arguments),
          j = (L.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};
        if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
          h = n.event.handlers.call(this, a, j), b = 0;
          while ((f = h[b++]) && !a.isPropagationStopped()) {
            a.currentTarget = f.elem, c = 0;
            while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
          }
          return k.postDispatch && k.postDispatch.call(this, a), a.result
        }
      },
      handlers: function(a, b) {
        var c, d, e, f, g = [],
          h = b.delegateCount,
          i = a.target;
        if (h && i.nodeType && (!a.button || "click" !== a.type))
          for (; i !== this; i = i.parentNode || this)
            if (i.disabled !== !0 || "click" !== a.type) {
              for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
              d.length && g.push({
                elem: i,
                handlers: d
              })
            }
        return h < b.length && g.push({
          elem: this,
          handlers: b.slice(h)
        }), g
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(a, b) {
          return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(a, b) {
          var c, d, e, f = b.button;
          return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
        }
      },
      fix: function(a) {
        if (a[n.expando]) return a;
        var b, c, d, e = a.type,
          f = a,
          g = this.fixHooks[e];
        g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
        while (b--) c = d[b], a[c] = f[c];
        return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            return this !== _() && this.focus ? (this.focus(), !1) : void 0
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === _() && this.blur ? (this.blur(), !1) : void 0
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
          },
          _default: function(a) {
            return n.nodeName(a.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(a) {
            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
          }
        }
      },
      simulate: function(a, b, c, d) {
        var e = n.extend(new n.Event, c, {
          type: a,
          isSimulated: !0,
          originalEvent: {}
        });
        d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
      }
    }, n.removeEvent = function(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function(a, b) {
      return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
      isDefaultPrevented: $,
      isPropagationStopped: $,
      isImmediatePropagationStopped: $,
      preventDefault: function() {
        var a = this.originalEvent;
        this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
      },
      stopPropagation: function() {
        var a = this.originalEvent;
        this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var a = this.originalEvent;
        this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
      }
    }, n.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(a, b) {
      n.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function(a) {
          var c, d = this,
            e = a.relatedTarget,
            f = a.handleObj;
          return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
        }
      }
    }), k.focusinBubbles || n.each({
      focus: "focusin",
      blur: "focusout"
    }, function(a, b) {
      var c = function(a) {
        n.event.simulate(b, a.target, n.event.fix(a), !0)
      };
      n.event.special[b] = {
        setup: function() {
          var d = this.ownerDocument || this,
            e = L.access(d, b);
          e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
        },
        teardown: function() {
          var d = this.ownerDocument || this,
            e = L.access(d, b) - 1;
          e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
        }
      }
    }), n.fn.extend({
      on: function(a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && (c = c || b, b = void 0);
          for (g in a) this.on(g, b, c, a[g], e);
          return this
        }
        if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
        else if (!d) return this;
        return 1 === e && (f = d, d = function(a) {
          return n().off(a), f.apply(this, arguments)
        }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
          n.event.add(this, a, d, c, b)
        })
      },
      one: function(a, b, c, d) {
        return this.on(a, b, c, d, 1)
      },
      off: function(a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this
        }
        return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
          n.event.remove(this, a, c, b)
        })
      },
      trigger: function(a, b) {
        return this.each(function() {
          n.event.trigger(a, b, this)
        })
      },
      triggerHandler: function(a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0
      }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ba = /<([\w:]+)/,
      ca = /<|&#?\w+;/,
      da = /<(?:script|style|link)/i,
      ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
      fa = /^$|\/(?:java|ecma)script/i,
      ga = /^true\/(.*)/,
      ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      ia = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

    function ja(a, b) {
      return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function ka(a) {
      return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function la(a) {
      var b = ga.exec(a.type);
      return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function ma(a, b) {
      for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function na(a, b) {
      var c, d, e, f, g, h, i, j;
      if (1 === b.nodeType) {
        if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
          delete g.handle, g.events = {};
          for (e in j)
            for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
        }
        M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
      }
    }

    function oa(a, b) {
      var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
      return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pa(a, b) {
      var c = b.nodeName.toLowerCase();
      "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    n.extend({
      clone: function(a, b, c) {
        var d, e, f, g, h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);
        if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
          for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
        if (b)
          if (c)
            for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);
          else na(a, h);
        return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
      },
      buildFragment: function(a, b, c, d) {
        for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
          if (e = a[m], e || 0 === e)
            if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
            else if (ca.test(e)) {
              f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
              while (j--) f = f.lastChild;
              n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
        k.textContent = "", m = 0;
        while (e = l[m++])
          if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
            j = 0;
            while (e = f[j++]) fa.test(e.type || "") && c.push(e)
          }
        return k
      },
      cleanData: function(a) {
        for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
          if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
            if (b.events)
              for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            L.cache[e] && delete L.cache[e]
          }
          delete M.cache[c[M.expando]]
        }
      }
    }), n.fn.extend({
      text: function(a) {
        return J(this, function(a) {
          return void 0 === a ? n.text(this) : this.empty().each(function() {
            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
          })
        }, null, a, arguments.length)
      },
      append: function() {
        return this.domManip(arguments, function(a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = ja(this, a);
            b.appendChild(a)
          }
        })
      },
      prepend: function() {
        return this.domManip(arguments, function(a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = ja(this, a);
            b.insertBefore(a, b.firstChild)
          }
        })
      },
      before: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this)
        })
      },
      after: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
        })
      },
      remove: function(a, b) {
        for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
        return this
      },
      empty: function() {
        for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
        return this
      },
      clone: function(a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
          return n.clone(this, a, b)
        })
      },
      html: function(a) {
        return J(this, function(a) {
          var b = this[0] || {},
            c = 0,
            d = this.length;
          if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
          if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
            a = a.replace(aa, "<$1></$2>");
            try {
              for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
              b = 0
            } catch (e) {}
          }
          b && this.empty().append(a)
        }, null, a, arguments.length)
      },
      replaceWith: function() {
        var a = arguments[0];
        return this.domManip(arguments, function(b) {
          a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
        }), a && (a.length || a.nodeType) ? this : this.remove()
      },
      detach: function(a) {
        return this.remove(a, !0)
      },
      domManip: function(a, b) {
        a = e.apply([], a);
        var c, d, f, g, h, i, j = 0,
          l = this.length,
          m = this,
          o = l - 1,
          p = a[0],
          q = n.isFunction(p);
        if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function(c) {
          var d = m.eq(c);
          q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
        });
        if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
          for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
          if (g)
            for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
        }
        return this
      }
    }), n.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(a, b) {
      n.fn[a] = function(a) {
        for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
        return this.pushStack(d)
      }
    });
    var qa, ra = {};

    function sa(b, c) {
      var d, e = n(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
      return e.detach(), f
    }

    function ta(a) {
      var b = l,
        c = ra[a];
      return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
    }
    var ua = /^margin/,
      va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
      wa = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
      };

    function xa(a, b, c) {
      var d, e, f, g, h = a.style;
      return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function ya(a, b) {
      return {
        get: function() {
          return a() ? void delete this.get : (this.get = b).apply(this, arguments)
        }
      }
    }! function() {
      var b, c, d = l.documentElement,
        e = l.createElement("div"),
        f = l.createElement("div");
      if (f.style) {
        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

        function g() {
          f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
          var g = a.getComputedStyle(f, null);
          b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
        }
        a.getComputedStyle && n.extend(k, {
          pixelPosition: function() {
            return g(), b
          },
          boxSizingReliable: function() {
            return null == c && g(), c
          },
          reliableMarginRight: function() {
            var b, c = f.appendChild(l.createElement("div"));
            return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
          }
        })
      }
    }(), n.swap = function(a, b, c, d) {
      var e, f, g = {};
      for (f in b) g[f] = a.style[f], a.style[f] = b[f];
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e
    };
    var za = /^(none|table(?!-c[ea]).+)/,
      Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
      Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
      Ca = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      Da = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      Ea = ["Webkit", "O", "Moz", "ms"];

    function Fa(a, b) {
      if (b in a) return b;
      var c = b[0].toUpperCase() + b.slice(1),
        d = b,
        e = Ea.length;
      while (e--)
        if (b = Ea[e] + c, b in a) return b;
      return d
    }

    function Ga(a, b, c) {
      var d = Aa.exec(b);
      return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Ha(a, b, c, d, e) {
      for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
      return g
    }

    function Ia(a, b, c) {
      var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = wa(a),
        g = "border-box" === n.css(a, "boxSizing", !1, f);
      if (0 >= e || null == e) {
        if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
        d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
      }
      return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Ja(a, b) {
      for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
      for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
      return a
    }
    n.extend({
      cssHooks: {
        opacity: {
          get: function(a, b) {
            if (b) {
              var c = xa(a, "opacity");
              return "" === c ? "1" : c
            }
          }
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        "float": "cssFloat"
      },
      style: function(a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var e, f, g, h = n.camelCase(b),
            i = a.style;
          return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
        }
      },
      css: function(a, b, c, d) {
        var e, f, g, h = n.camelCase(b);
        return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
      }
    }), n.each(["height", "width"], function(a, b) {
      n.cssHooks[b] = {
        get: function(a, c, d) {
          return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
            return Ia(a, b, d)
          }) : Ia(a, b, d) : void 0
        },
        set: function(a, c, d) {
          var e = d && wa(a);
          return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
        }
      }
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
      return b ? n.swap(a, {
        display: "inline-block"
      }, xa, [a, "marginRight"]) : void 0
    }), n.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(a, b) {
      n.cssHooks[a + b] = {
        expand: function(c) {
          for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
          return e
        }
      }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
    }), n.fn.extend({
      css: function(a, b) {
        return J(this, function(a, b, c) {
          var d, e, f = {},
            g = 0;
          if (n.isArray(b)) {
            for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
            return f
          }
          return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
        }, a, b, arguments.length > 1)
      },
      show: function() {
        return Ja(this, !0)
      },
      hide: function() {
        return Ja(this)
      },
      toggle: function(a) {
        return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
          S(this) ? n(this).show() : n(this).hide()
        })
      }
    });

    function Ka(a, b, c, d, e) {
      return new Ka.prototype.init(a, b, c, d, e)
    }
    n.Tween = Ka, Ka.prototype = {
      constructor: Ka,
      init: function(a, b, c, d, e, f) {
        this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
      },
      cur: function() {
        var a = Ka.propHooks[this.prop];
        return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
      },
      run: function(a) {
        var b, c = Ka.propHooks[this.prop];
        return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
      }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
      _default: {
        get: function(a) {
          var b;
          return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
        },
        set: function(a) {
          n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
        }
      }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
      set: function(a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
      }
    }, n.easing = {
      linear: function(a) {
        return a
      },
      swing: function(a) {
        return .5 - Math.cos(a * Math.PI) / 2
      }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/,
      Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
      Pa = /queueHooks$/,
      Qa = [Va],
      Ra = {
        "*": [function(a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = Oa.exec(b),
            f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
            g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            f = f || g[3], e = e || [], g = +d || 1;
            do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
          }
          return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
        }]
      };

    function Sa() {
      return setTimeout(function() {
        La = void 0
      }), La = n.now()
    }

    function Ta(a, b) {
      var c, d = 0,
        e = {
          height: a
        };
      for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
      return b && (e.opacity = e.width = a), e
    }

    function Ua(a, b, c) {
      for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
        if (d = e[f].call(c, b, a)) return d
    }

    function Va(a, b, c) {
      var d, e, f, g, h, i, j, k, l = this,
        m = {},
        o = a.style,
        p = a.nodeType && S(a),
        q = L.get(a, "fxshow");
      c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
        h.unqueued || i()
      }), h.unqueued++, l.always(function() {
        l.always(function() {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
        })
      })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
      }));
      for (d in b)
        if (e = b[d], Na.exec(e)) {
          if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
            if ("show" !== e || !q || void 0 === q[d]) continue;
            p = !0
          }
          m[d] = q && q[d] || n.style(a, d)
        } else j = void 0;
      if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
      else {
        q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
          n(a).hide()
        }), l.done(function() {
          var b;
          L.remove(a, "fxshow");
          for (b in m) n.style(a, b, m[b])
        });
        for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
      }
    }

    function Wa(a, b) {
      var c, d, e, f, g;
      for (c in a)
        if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
          f = g.expand(f), delete a[d];
          for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function Xa(a, b, c) {
      var d, e, f = 0,
        g = Qa.length,
        h = n.Deferred().always(function() {
          delete i.elem
        }),
        i = function() {
          if (e) return !1;
          for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
          return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        },
        j = h.promise({
          elem: a,
          props: n.extend({}, b),
          opts: n.extend(!0, {
            specialEasing: {}
          }, c),
          originalProperties: b,
          originalOptions: c,
          startTime: La || Sa(),
          duration: c.duration,
          tweens: [],
          createTween: function(b, c) {
            var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
            return j.tweens.push(d), d
          },
          stop: function(b) {
            var c = 0,
              d = b ? j.tweens.length : 0;
            if (e) return this;
            for (e = !0; d > c; c++) j.tweens[c].run(1);
            return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
          }
        }),
        k = j.props;
      for (Wa(k, j.opts.specialEasing); g > f; f++)
        if (d = Qa[f].call(j, a, k, j.opts)) return d;
      return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
        elem: a,
        anim: j,
        queue: j.opts.queue
      })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(Xa, {
      tweener: function(a, b) {
        n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
      },
      prefilter: function(a, b) {
        b ? Qa.unshift(a) : Qa.push(a)
      }
    }), n.speed = function(a, b, c) {
      var d = a && "object" == typeof a ? n.extend({}, a) : {
        complete: c || !c && b || n.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !n.isFunction(b) && b
      };
      return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
        n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
      }, d
    }, n.fn.extend({
      fadeTo: function(a, b, c, d) {
        return this.filter(S).css("opacity", 0).show().end().animate({
          opacity: b
        }, a, c, d)
      },
      animate: function(a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function() {
            var b = Xa(this, n.extend({}, a), f);
            (e || L.get(this, "finish")) && b.stop(!0)
          };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function(a, b, c) {
        var d = function(a) {
          var b = a.stop;
          delete a.stop, b(c)
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
          var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = L.get(this);
          if (e) g[e] && g[e].stop && d(g[e]);
          else
            for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
          for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          (b || !c) && n.dequeue(this, a)
        })
      },
      finish: function(a) {
        return a !== !1 && (a = a || "fx"), this.each(function() {
          var b, c = L.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;
          for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish
        })
      }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
      var c = n.fn[b];
      n.fn[b] = function(a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
      }
    }), n.each({
      slideDown: Ta("show"),
      slideUp: Ta("hide"),
      slideToggle: Ta("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(a, b) {
      n.fn[a] = function(a, c, d) {
        return this.animate(b, a, c, d)
      }
    }), n.timers = [], n.fx.tick = function() {
      var a, b = 0,
        c = n.timers;
      for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), La = void 0
    }, n.fx.timer = function(a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
      Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
      clearInterval(Ma), Ma = null
    }, n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, n.fn.delay = function(a, b) {
      return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
        var d = setTimeout(b, a);
        c.stop = function() {
          clearTimeout(d)
        }
      })
    },
      function() {
        var a = l.createElement("input"),
          b = l.createElement("select"),
          c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
      }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
      attr: function(a, b) {
        return J(this, n.attr, a, b, arguments.length > 1)
      },
      removeAttr: function(a) {
        return this.each(function() {
          n.removeAttr(this, a)
        })
      }
    }), n.extend({
      attr: function(a, b, c) {
        var d, e, f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
          void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
      },
      removeAttr: function(a, b) {
        var c, d, e = 0,
          f = b && b.match(E);
        if (f && 1 === a.nodeType)
          while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
      },
      attrHooks: {
        type: {
          set: function(a, b) {
            if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b
            }
          }
        }
      }
    }), Za = {
      set: function(a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
      }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
      var c = $a[b] || n.find.attr;
      $a[b] = function(a, b, d) {
        var e, f;
        return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
      }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
      prop: function(a, b) {
        return J(this, n.prop, a, b, arguments.length > 1)
      },
      removeProp: function(a) {
        return this.each(function() {
          delete this[n.propFix[a] || a]
        })
      }
    }), n.extend({
      propFix: {
        "for": "htmlFor",
        "class": "className"
      },
      prop: function(a, b, c) {
        var d, e, f, g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
      },
      propHooks: {
        tabIndex: {
          get: function(a) {
            return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
          }
        }
      }
    }), k.optSelected || (n.propHooks.selected = {
      get: function(a) {
        var b = a.parentNode;
        return b && b.parentNode && b.parentNode.selectedIndex, null
      }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
      addClass: function(a) {
        var b, c, d, e, f, g, h = "string" == typeof a && a,
          i = 0,
          j = this.length;
        if (n.isFunction(a)) return this.each(function(b) {
          n(this).addClass(a.call(this, b, this.className))
        });
        if (h)
          for (b = (a || "").match(E) || []; j > i; i++)
            if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
              f = 0;
              while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
              g = n.trim(d), c.className !== g && (c.className = g)
            }
        return this
      },
      removeClass: function(a) {
        var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
          i = 0,
          j = this.length;
        if (n.isFunction(a)) return this.each(function(b) {
          n(this).removeClass(a.call(this, b, this.className))
        });
        if (h)
          for (b = (a || "").match(E) || []; j > i; i++)
            if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
              f = 0;
              while (e = b[f++])
                while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
              g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
            }
        return this
      },
      toggleClass: function(a, b) {
        var c = typeof a;
        return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
          n(this).toggleClass(a.call(this, c, this.className, b), b)
        } : function() {
          if ("string" === c) {
            var b, d = 0,
              e = n(this),
              f = a.match(E) || [];
            while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
          } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
        })
      },
      hasClass: function(a) {
        for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
          if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
        return !1
      }
    });
    var bb = /\r/g;
    n.fn.extend({
      val: function(a) {
        var b, c, d, e = this[0]; {
          if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
            var e;
            1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                return null == a ? "" : a + ""
              })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
          });
          if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
        }
      }
    }), n.extend({
      valHooks: {
        option: {
          get: function(a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a))
          }
        },
        select: {
          get: function(a) {
            for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
              if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                if (b = n(c).val(), f) return b;
                g.push(b)
              }
            return g
          },
          set: function(a, b) {
            var c, d, e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
            return c || (a.selectedIndex = -1), f
          }
        }
      }
    }), n.each(["radio", "checkbox"], function() {
      n.valHooks[this] = {
        set: function(a, b) {
          return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
        }
      }, k.checkOn || (n.valHooks[this].get = function(a) {
        return null === a.getAttribute("value") ? "on" : a.value
      })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
      n.fn[b] = function(a, c) {
        return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
      }
    }), n.fn.extend({
      hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a)
      },
      bind: function(a, b, c) {
        return this.on(a, null, b, c)
      },
      unbind: function(a, b) {
        return this.off(a, null, b)
      },
      delegate: function(a, b, c, d) {
        return this.on(b, a, c, d)
      },
      undelegate: function(a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
      }
    });
    var cb = n.now(),
      db = /\?/;
    n.parseJSON = function(a) {
      return JSON.parse(a + "")
    }, n.parseXML = function(a) {
      var b, c;
      if (!a || "string" != typeof a) return null;
      try {
        c = new DOMParser, b = c.parseFromString(a, "text/xml")
      } catch (d) {
        b = void 0
      }
      return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var eb = /#.*$/,
      fb = /([?&])_=[^&]*/,
      gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      ib = /^(?:GET|HEAD)$/,
      jb = /^\/\//,
      kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      lb = {},
      mb = {},
      nb = "*/".concat("*"),
      ob = a.location.href,
      pb = kb.exec(ob.toLowerCase()) || [];

    function qb(a) {
      return function(b, c) {
        "string" != typeof b && (c = b, b = "*");
        var d, e = 0,
          f = b.toLowerCase().match(E) || [];
        if (n.isFunction(c))
          while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
      }
    }

    function rb(a, b, c, d) {
      var e = {},
        f = a === mb;

      function g(h) {
        var i;
        return e[h] = !0, n.each(a[h] || [], function(a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
        }), i
      }
      return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sb(a, b) {
      var c, d, e = n.ajaxSettings.flatOptions || {};
      for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
      return d && n.extend(!0, a, d), a
    }

    function tb(a, b, c) {
      var d, e, f, g, h = a.contents,
        i = a.dataTypes;
      while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
      if (d)
        for (e in h)
          if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
          }
      if (i[0] in c) f = i[0];
      else {
        for (e in c) {
          if (!i[0] || a.converters[e + " " + i[0]]) {
            f = e;
            break
          }
          g || (g = e)
        }
        f = f || g
      }
      return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function ub(a, b, c, d) {
      var e, f, g, h, i, j = {},
        k = a.dataTypes.slice();
      if (k[1])
        for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
      f = k.shift();
      while (f)
        if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
          if ("*" === f) f = i;
          else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
              for (e in j)
                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                  g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                  break
                }
            if (g !== !0)
              if (g && a["throws"]) b = g(b);
              else try {
                b = g(b)
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f
                }
              }
          }
      return {
        state: "success",
        data: b
      }
    }
    n.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ob,
        type: "GET",
        isLocal: hb.test(pb[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": nb,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": n.parseJSON,
          "text xml": n.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(a, b) {
        return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
      },
      ajaxPrefilter: qb(lb),
      ajaxTransport: qb(mb),
      ajax: function(a, b) {
        "object" == typeof a && (b = a, a = void 0), b = b || {};
        var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
          l = k.context || k,
          m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
          o = n.Deferred(),
          p = n.Callbacks("once memory"),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = {
            readyState: 0,
            getResponseHeader: function(a) {
              var b;
              if (2 === t) {
                if (!f) {
                  f = {};
                  while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
                }
                b = f[a.toLowerCase()]
              }
              return null == b ? null : b
            },
            getAllResponseHeaders: function() {
              return 2 === t ? e : null
            },
            setRequestHeader: function(a, b) {
              var c = a.toLowerCase();
              return t || (a = s[c] = s[c] || a, r[a] = b), this
            },
            overrideMimeType: function(a) {
              return t || (k.mimeType = a), this
            },
            statusCode: function(a) {
              var b;
              if (a)
                if (2 > t)
                  for (b in a) q[b] = [q[b], a[b]];
                else v.always(a[v.status]);
              return this
            },
            abort: function(a) {
              var b = a || u;
              return c && c.abort(b), x(0, b), this
            }
          };
        if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
        i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
        for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
        if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
        u = "abort";
        for (j in {
          success: 1,
          error: 1,
          complete: 1
        }) v[j](k[j]);
        if (c = rb(mb, k, b, v)) {
          v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
            v.abort("timeout")
          }, k.timeout));
          try {
            t = 1, c.send(r, x)
          } catch (w) {
            if (!(2 > t)) throw w;
            x(-1, w)
          }
        } else x(-1, "No Transport");

        function x(a, b, f, h) {
          var j, r, s, u, w, x = b;
          2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
        }
        return v
      },
      getJSON: function(a, b, c) {
        return n.get(a, b, c, "json")
      },
      getScript: function(a, b) {
        return n.get(a, void 0, b, "script")
      }
    }), n.each(["get", "post"], function(a, b) {
      n[b] = function(a, c, d, e) {
        return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
          url: a,
          type: b,
          dataType: e,
          data: c,
          success: d
        })
      }
    }), n._evalUrl = function(a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      })
    }, n.fn.extend({
      wrapAll: function(a) {
        var b;
        return n.isFunction(a) ? this.each(function(b) {
          n(this).wrapAll(a.call(this, b))
        }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
          var a = this;
          while (a.firstElementChild) a = a.firstElementChild;
          return a
        }).append(this)), this)
      },
      wrapInner: function(a) {
        return this.each(n.isFunction(a) ? function(b) {
          n(this).wrapInner(a.call(this, b))
        } : function() {
          var b = n(this),
            c = b.contents();
          c.length ? c.wrapAll(a) : b.append(a)
        })
      },
      wrap: function(a) {
        var b = n.isFunction(a);
        return this.each(function(c) {
          n(this).wrapAll(b ? a.call(this, c) : a)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
        }).end()
      }
    }), n.expr.filters.hidden = function(a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function(a) {
      return !n.expr.filters.hidden(a)
    };
    var vb = /%20/g,
      wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
      var e;
      if (n.isArray(b)) n.each(b, function(b, e) {
        c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
      });
      else if (c || "object" !== n.type(b)) d(a, b);
      else
        for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
      var c, d = [],
        e = function(a, b) {
          b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
      if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
        e(this.name, this.value)
      });
      else
        for (c in a) Ab(c, a[c], b, e);
      return d.join("&").replace(vb, "+")
    }, n.fn.extend({
      serialize: function() {
        return n.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this
        }).filter(function() {
          var a = this.type;
          return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
        }).map(function(a, b) {
          var c = n(this).val();
          return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
            return {
              name: b.name,
              value: a.replace(xb, "\r\n")
            }
          }) : {
            name: b.name,
            value: c.replace(xb, "\r\n")
          }
        }).get()
      }
    }), n.ajaxSettings.xhr = function() {
      try {
        return new XMLHttpRequest
      } catch (a) {}
    };
    var Bb = 0,
      Cb = {},
      Db = {
        0: 200,
        1223: 204
      },
      Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
      for (var a in Cb) Cb[a]()
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function(a) {
      var b;
      return k.cors || Eb && !a.crossDomain ? {
        send: function(c, d) {
          var e, f = a.xhr(),
            g = ++Bb;
          if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
            for (e in a.xhrFields) f[e] = a.xhrFields[e];
          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
          for (e in c) f.setRequestHeader(e, c[e]);
          b = function(a) {
            return function() {
              b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                text: f.responseText
              } : void 0, f.getAllResponseHeaders()))
            }
          }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
          try {
            f.send(a.hasContent && a.data || null)
          } catch (h) {
            if (b) throw h
          }
        },
        abort: function() {
          b && b()
        }
      } : void 0
    }), n.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /(?:java|ecma)script/
      },
      converters: {
        "text script": function(a) {
          return n.globalEval(a), a
        }
      }
    }), n.ajaxPrefilter("script", function(a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function(d, e) {
            b = n("<script>").prop({
              async: !0,
              charset: a.scriptCharset,
              src: a.url
            }).on("load error", c = function(a) {
              b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
            }), l.head.appendChild(b[0])
          },
          abort: function() {
            c && c()
          }
        }
      }
    });
    var Fb = [],
      Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var a = Fb.pop() || n.expando + "_" + cb++;
        return this[a] = !0, a
      }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
      var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
      return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
        return g || n.error(e + " was not called"), g[0]
      }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
        g = arguments
      }, d.always(function() {
        a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
      }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && (c = b, b = !1), b = b || l;
      var d = v.exec(a),
        e = !c && [];
      return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hb = n.fn.load;
    n.fn.load = function(a, b, c) {
      if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
      var d, e, f, g = this,
        h = a.indexOf(" ");
      return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
        url: a,
        type: e,
        dataType: "html",
        data: b
      }).done(function(a) {
        f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
      }).complete(c && function(a, b) {
          g.each(c, f || [a.responseText, b, a])
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
      n.fn[b] = function(a) {
        return this.on(b, a)
      }
    }), n.expr.filters.animated = function(a) {
      return n.grep(n.timers, function(b) {
        return a === b.elem
      }).length
    };
    var Ib = a.document.documentElement;

    function Jb(a) {
      return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
      setOffset: function(a, b, c) {
        var d, e, f, g, h, i, j, k = n.css(a, "position"),
          l = n(a),
          m = {};
        "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
      }
    }, n.fn.extend({
      offset: function(a) {
        if (arguments.length) return void 0 === a ? this : this.each(function(b) {
          n.offset.setOffset(this, a, b)
        });
        var b, c, d = this[0],
          e = {
            top: 0,
            left: 0
          },
          f = d && d.ownerDocument;
        if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
          top: e.top + c.pageYOffset - b.clientTop,
          left: e.left + c.pageXOffset - b.clientLeft
        }) : e
      },
      position: function() {
        if (this[0]) {
          var a, b, c = this[0],
            d = {
              top: 0,
              left: 0
            };
          return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
            top: b.top - d.top - n.css(c, "marginTop", !0),
            left: b.left - d.left - n.css(c, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          var a = this.offsetParent || Ib;
          while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
          return a || Ib
        })
      }
    }), n.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(b, c) {
      var d = "pageYOffset" === c;
      n.fn[b] = function(e) {
        return J(this, function(b, e, f) {
          var g = Jb(b);
          return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
        }, b, e, arguments.length, null)
      }
    }), n.each(["top", "left"], function(a, b) {
      n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
        return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
      })
    }), n.each({
      Height: "height",
      Width: "width"
    }, function(a, b) {
      n.each({
        padding: "inner" + a,
        content: b,
        "": "outer" + a
      }, function(c, d) {
        n.fn[d] = function(d, e) {
          var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
          return J(this, function(b, c, d) {
            var e;
            return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
          }, b, f ? d : void 0, f, null)
        }
      })
    }), n.fn.size = function() {
      return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return n
    });
    var Kb = a.jQuery,
      Lb = a.$;
    return n.noConflict = function(b) {
      return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
  });

  /*! jQuery UI - v1.11.4 - 2015-03-13
   * http://jqueryui.com
   * Copyright jQuery Foundation and other contributors; Licensed MIT */
  (function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
  })(function(t) {
    function e(e, i) {
      var r, o, u, s = e.nodeName.toLowerCase();
      return "area" === s ? (r = e.parentNode, o = r.name, e.href && o && "map" === r.nodeName.toLowerCase() ? (u = t("img[usemap='#" + o + "']")[0], !!u && n(u)) : !1) : (/^(input|select|textarea|button|object)$/.test(s) ? !e.disabled : "a" === s ? e.href || i : i) && n(e)
    }

    function n(e) {
      return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
          return "hidden" === t.css(this, "visibility")
        }).length
    }
    t.ui = t.ui || {}, t.extend(t.ui, {
      version: "1.11.4",
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
      }
    }), t.fn.extend({
      scrollParent: function(e) {
        var n = this.css("position"),
          i = "absolute" === n,
          r = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          o = this.parents().filter(function() {
            var e = t(this);
            return i && "static" === e.css("position") ? !1 : r.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
          }).eq(0);
        return "fixed" !== n && o.length ? o : t(this[0].ownerDocument || document)
      },
      uniqueId: function() {
        var t = 0;
        return function() {
          return this.each(function() {
            this.id || (this.id = "ui-id-" + ++t)
          })
        }
      }(),
      removeUniqueId: function() {
        return this.each(function() {
          /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
        })
      }
    }), t.extend(t.expr[":"], {
      data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
        return function(n) {
          return !!t.data(n, e)
        }
      }) : function(e, n, i) {
        return !!t.data(e, i[3])
      },
      focusable: function(n) {
        return e(n, !isNaN(t.attr(n, "tabindex")))
      },
      tabbable: function(n) {
        var i = t.attr(n, "tabindex"),
          r = isNaN(i);
        return (r || i >= 0) && e(n, !r)
      }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, n) {
      function i(e, n, i, o) {
        return t.each(r, function() {
          n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (n -= parseFloat(t.css(e, "margin" + this)) || 0)
        }), n
      }
      var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
        o = n.toLowerCase(),
        u = {
          innerWidth: t.fn.innerWidth,
          innerHeight: t.fn.innerHeight,
          outerWidth: t.fn.outerWidth,
          outerHeight: t.fn.outerHeight
        };
      t.fn["inner" + n] = function(e) {
        return void 0 === e ? u["inner" + n].call(this) : this.each(function() {
          t(this).css(o, i(this, e) + "px")
        })
      }, t.fn["outer" + n] = function(e, r) {
        return "number" != typeof e ? u["outer" + n].call(this, e) : this.each(function() {
          t(this).css(o, i(this, e, !0, r) + "px")
        })
      }
    }), t.fn.addBack || (t.fn.addBack = function(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
      return function(n) {
        return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this)
      }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
      focus: function(e) {
        return function(n, i) {
          return "number" == typeof n ? this.each(function() {
            var e = this;
            setTimeout(function() {
              t(e).focus(), i && i.call(e)
            }, n)
          }) : e.apply(this, arguments)
        }
      }(t.fn.focus),
      disableSelection: function() {
        var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
        return function() {
          return this.bind(t + ".ui-disableSelection", function(t) {
            t.preventDefault()
          })
        }
      }(),
      enableSelection: function() {
        return this.unbind(".ui-disableSelection")
      },
      zIndex: function(e) {
        if (void 0 !== e) return this.css("zIndex", e);
        if (this.length)
          for (var n, i, r = t(this[0]); r.length && r[0] !== document;) {
            if (n = r.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (i = parseInt(r.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            r = r.parent()
          }
        return 0
      }
    }), t.ui.plugin = {
      add: function(e, n, i) {
        var r, o = t.ui[e].prototype;
        for (r in i) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([n, i[r]])
      },
      call: function(t, e, n, i) {
        var r, o = t.plugins[e];
        if (o && (i || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
          for (r = 0; o.length > r; r++) t.options[o[r][0]] && o[r][1].apply(t.element, n)
      }
    }
  });
  /*! jQuery UI - v1.11.4 - 2015-03-13
   * http://jqueryui.com
   * Copyright jQuery Foundation and other contributors; Licensed MIT */
  (function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
  })(function(t) {
    var e = 0,
      i = Array.prototype.slice;
    return t.cleanData = function(e) {
      return function(i) {
        var n, s, o;
        for (o = 0; null != (s = i[o]); o++) try {
          n = t._data(s, "events"), n && n.remove && t(s).triggerHandler("remove")
        } catch (r) {}
        e(i)
      }
    }(t.cleanData), t.widget = function(e, i, n) {
      var s, o, r, a, u = {},
        d = e.split(".")[0];
      return e = e.split(".")[1], s = d + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function(e) {
        return !!t.data(e, s)
      }, t[d] = t[d] || {}, o = t[d][e], r = t[d][e] = function(t, e) {
        return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new r(t, e)
      }, t.extend(r, o, {
        version: n.version,
        _proto: t.extend({}, n),
        _childConstructors: []
      }), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function(e, n) {
        return t.isFunction(n) ? (u[e] = function() {
          var t = function() {
              return i.prototype[e].apply(this, arguments)
            },
            s = function(t) {
              return i.prototype[e].apply(this, t)
            };
          return function() {
            var e, i = this._super,
              o = this._superApply;
            return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
          }
        }(), void 0) : (u[e] = n, void 0)
      }), r.prototype = t.widget.extend(a, {
        widgetEventPrefix: o ? a.widgetEventPrefix || e : e
      }, u, {
        constructor: r,
        namespace: d,
        widgetName: e,
        widgetFullName: s
      }), o ? (t.each(o._childConstructors, function(e, i) {
        var n = i.prototype;
        t.widget(n.namespace + "." + n.widgetName, r, i._proto)
      }), delete o._childConstructors) : i._childConstructors.push(r), t.widget.bridge(e, r), r
    }, t.widget.extend = function(e) {
      for (var n, s, o = i.call(arguments, 1), r = 0, a = o.length; a > r; r++)
        for (n in o[r]) s = o[r][n], o[r].hasOwnProperty(n) && void 0 !== s && (e[n] = t.isPlainObject(s) ? t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], s) : t.widget.extend({}, s) : s);
      return e
    }, t.widget.bridge = function(e, n) {
      var s = n.prototype.widgetFullName || e;
      t.fn[e] = function(o) {
        var r = "string" == typeof o,
          a = i.call(arguments, 1),
          u = this;
        return r ? this.each(function() {
          var i, n = t.data(this, s);
          return "instance" === o ? (u = n, !1) : n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, a), i !== n && void 0 !== i ? (u = i && i.jquery ? u.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + o + "'")
        }) : (a.length && (o = t.widget.extend.apply(null, [o].concat(a))), this.each(function() {
          var e = t.data(this, s);
          e ? (e.option(o || {}), e._init && e._init()) : t.data(this, s, new n(o, this))
        })), u
      }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: {
        disabled: !1,
        create: null
      },
      _createWidget: function(i, n) {
        n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
          remove: function(t) {
            t.target === n && this.destroy()
          }
        }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
      },
      _getCreateOptions: t.noop,
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function() {
        this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
      },
      _destroy: t.noop,
      widget: function() {
        return this.element
      },
      option: function(e, i) {
        var n, s, o, r = e;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ("string" == typeof e)
          if (r = {}, n = e.split("."), e = n.shift(), n.length) {
            for (s = r[e] = t.widget.extend({}, this.options[e]), o = 0; n.length - 1 > o; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
            if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
            s[e] = i
          } else {
            if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
            r[e] = i
          }
        return this._setOptions(r), this
      },
      _setOptions: function(t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this
      },
      _setOption: function(t, e) {
        return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
      },
      enable: function() {
        return this._setOptions({
          disabled: !1
        })
      },
      disable: function() {
        return this._setOptions({
          disabled: !0
        })
      },
      _on: function(e, i, n) {
        var s, o = this;
        "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, r) {
          function a() {
            return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0
          }
          "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
          var u = n.match(/^([\w:-]*)\s*(.*)$/),
            d = u[1] + o.eventNamespace,
            c = u[2];
          c ? s.delegate(c, d, a) : i.bind(d, a)
        })
      },
      _off: function(e, i) {
        i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
      },
      _delay: function(t, e) {
        function i() {
          return ("string" == typeof t ? n[t] : t).apply(n, arguments)
        }
        var n = this;
        return setTimeout(i, e || 0)
      },
      _hoverable: function(e) {
        this.hoverable = this.hoverable.add(e), this._on(e, {
          mouseenter: function(e) {
            t(e.currentTarget).addClass("ui-state-hover")
          },
          mouseleave: function(e) {
            t(e.currentTarget).removeClass("ui-state-hover")
          }
        })
      },
      _focusable: function(e) {
        this.focusable = this.focusable.add(e), this._on(e, {
          focusin: function(e) {
            t(e.currentTarget).addClass("ui-state-focus")
          },
          focusout: function(e) {
            t(e.currentTarget).removeClass("ui-state-focus")
          }
        })
      },
      _trigger: function(e, i, n) {
        var s, o, r = this.options[e];
        if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
          for (s in o) s in i || (i[s] = o[s]);
        return this.element.trigger(i, n), !(t.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
      }
    }, t.each({
      show: "fadeIn",
      hide: "fadeOut"
    }, function(e, i) {
      t.Widget.prototype["_" + e] = function(n, s, o) {
        "string" == typeof s && (s = {
          effect: s
        });
        var r, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
        s = s || {}, "number" == typeof s && (s = {
          duration: s
        }), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) {
          t(this)[e](), o && o.call(n[0]), i()
        })
      }
    }), t.widget
  });
  /*! jQuery UI - v1.11.4 - 2015-03-13
   * http://jqueryui.com
   * Copyright jQuery Foundation and other contributors; Licensed MIT */
  (function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "./widget"], t) : t(jQuery)
  })(function(t) {
    var e = !1;
    return t(document).mouseup(function() {
      e = !1
    }), t.widget("ui.mouse", {
      version: "1.11.4",
      options: {
        cancel: "input,textarea,button,select,option",
        distance: 1,
        delay: 0
      },
      _mouseInit: function() {
        var e = this;
        this.element.bind("mousedown." + this.widgetName, function(t) {
          return e._mouseDown(t)
        }).bind("click." + this.widgetName, function(i) {
          return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
        }), this.started = !1
      },
      _mouseDestroy: function() {
        this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
      },
      _mouseDown: function(i) {
        if (!e) {
          this._mouseMoved = !1, this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
          var n = this,
            s = 1 === i.which,
            o = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
          return s && !o && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
            n.mouseDelayMet = !0
          }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
            return n._mouseMove(t)
          }, this._mouseUpDelegate = function(t) {
            return n._mouseUp(t)
          }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
        }
      },
      _mouseMove: function(e) {
        if (this._mouseMoved) {
          if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
          if (!e.which) return this._mouseUp(e)
        }
        return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
      },
      _mouseUp: function(i) {
        return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, i.target === this._mouseDownEvent.target && t.data(i.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(i)), e = !1, !1
      },
      _mouseDistanceMet: function(t) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
      },
      _mouseDelayMet: function() {
        return this.mouseDelayMet
      },
      _mouseStart: function() {},
      _mouseDrag: function() {},
      _mouseStop: function() {},
      _mouseCapture: function() {
        return !0
      }
    })
  });
  /*! jQuery UI - v1.11.4 - 2015-03-13
   * http://jqueryui.com
   * Copyright jQuery Foundation and other contributors; Licensed MIT */
  (function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
  })(function(t) {
    return t.widget("ui.slider", t.ui.mouse, {
      version: "1.11.4",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null
      },
      numPages: 5,
      _create: function() {
        this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
      },
      _refresh: function() {
        this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
      },
      _createHandles: function() {
        var e, i, s = this.options,
          n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
          o = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
          a = [];
        for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) a.push(o);
        this.handles = n.add(t(a.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
          t(this).data("ui-slider-handle-index", e)
        })
      },
      _createRange: function() {
        var e = this.options,
          i = "";
        e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
          left: "",
          bottom: ""
        }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
      },
      _setupEvents: function() {
        this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
      },
      _destroy: function() {
        this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
      },
      _mouseCapture: function(e) {
        var i, s, n, o, a, r, h, l, u = this,
          c = this.options;
        return c.disabled ? !1 : (this.elementSize = {
          width: this.element.outerWidth(),
          height: this.element.outerHeight()
        }, this.elementOffset = this.element.offset(), i = {
          x: e.pageX,
          y: e.pageY
        }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
          var i = Math.abs(s - u.values(e));
          (n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i, o = t(this), a = e)
        }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, o.addClass("ui-state-active").focus(), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
          left: 0,
          top: 0
        } : {
          left: e.pageX - h.left - o.width() / 2,
          top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
        }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
      },
      _mouseStart: function() {
        return !0
      },
      _mouseDrag: function(t) {
        var e = {
            x: t.pageX,
            y: t.pageY
          },
          i = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, i), !1
      },
      _mouseStop: function(t) {
        return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
      },
      _detectOrientation: function() {
        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
      },
      _normValueFromMouse: function(t) {
        var e, i, s, n, o;
        return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
      },
      _start: function(t, e) {
        var i = {
          handle: this.handles[e],
          value: this.value()
        };
        return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
      },
      _slide: function(t, e, i) {
        var s, n, o;
        this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, o = this._trigger("slide", t, {
          handle: this.handles[e],
          value: i,
          values: n
        }), s = this.values(e ? 0 : 1), o !== !1 && this.values(e, i))) : i !== this.value() && (o = this._trigger("slide", t, {
            handle: this.handles[e],
            value: i
          }), o !== !1 && this.value(i))
      },
      _stop: function(t, e) {
        var i = {
          handle: this.handles[e],
          value: this.value()
        };
        this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
      },
      _change: function(t, e) {
        if (!this._keySliding && !this._mouseSliding) {
          var i = {
            handle: this.handles[e],
            value: this.value()
          };
          this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
        }
      },
      value: function(t) {
        return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value()
      },
      values: function(e, i) {
        var s, n, o;
        if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
        if (!arguments.length) return this._values();
        if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
        for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
        this._refreshValue()
      },
      _setOption: function(e, i) {
        var s, n = 0;
        switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!i), this._super(e, i), e) {
          case "orientation":
            this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
            break;
          case "value":
            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
            break;
          case "values":
            for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
            this._animateOff = !1;
            break;
          case "step":
          case "min":
          case "max":
            this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
            break;
          case "range":
            this._animateOff = !0, this._refresh(), this._animateOff = !1
        }
      },
      _value: function() {
        var t = this.options.value;
        return t = this._trimAlignValue(t)
      },
      _values: function(t) {
        var e, i, s;
        if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
        if (this.options.values && this.options.values.length) {
          for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
          return i
        }
        return []
      },
      _trimAlignValue: function(t) {
        if (this._valueMin() >= t) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          s = t - i;
        return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
      },
      _calculateNewMax: function() {
        var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step,
          s = Math.floor(+(t - e).toFixed(this._precision()) / i) * i;
        t = s + e, this.max = parseFloat(t.toFixed(this._precision()))
      },
      _precision: function() {
        var t = this._precisionOf(this.options.step);
        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
      },
      _precisionOf: function(t) {
        var e = "" + t,
          i = e.indexOf(".");
        return -1 === i ? 0 : e.length - i - 1
      },
      _valueMin: function() {
        return this.options.min
      },
      _valueMax: function() {
        return this.max
      },
      _refreshValue: function() {
        var e, i, s, n, o, a = this.options.range,
          r = this.options,
          h = this,
          l = this._animateOff ? !1 : r.animate,
          u = {};
        this.options.values && this.options.values.length ? this.handles.each(function(s) {
          i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
            left: i + "%"
          }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
            width: i - e + "%"
          }, {
            queue: !1,
            duration: r.animate
          })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
            bottom: i + "%"
          }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
            height: i - e + "%"
          }, {
            queue: !1,
            duration: r.animate
          }))), e = i
        }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
          width: i + "%"
        }, r.animate), "max" === a && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
          width: 100 - i + "%"
        }, {
          queue: !1,
          duration: r.animate
        }), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
          height: i + "%"
        }, r.animate), "max" === a && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
          height: 100 - i + "%"
        }, {
          queue: !1,
          duration: r.animate
        }))
      },
      _handleEvents: {
        keydown: function(e) {
          var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
          switch (e.keyCode) {
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_UP:
            case t.ui.keyCode.PAGE_DOWN:
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), i = this._start(e, a), i === !1)) return
          }
          switch (o = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(a) : this.value(), e.keyCode) {
            case t.ui.keyCode.HOME:
              n = this._valueMin();
              break;
            case t.ui.keyCode.END:
              n = this._valueMax();
              break;
            case t.ui.keyCode.PAGE_UP:
              n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case t.ui.keyCode.PAGE_DOWN:
              n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
              if (s === this._valueMax()) return;
              n = this._trimAlignValue(s + o);
              break;
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (s === this._valueMin()) return;
              n = this._trimAlignValue(s - o)
          }
          this._slide(e, a, n)
        },
        keyup: function(e) {
          var i = t(e.target).data("ui-slider-handle-index");
          this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
        }
      }
    })
  });
  //! moment.js
  //! version : 2.10.6
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  ! function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
  }(this, function() {
    "use strict";

    function a() {
      return Hc.apply(null, arguments)
    }

    function b(a) {
      Hc = a
    }

    function c(a) {
      return "[object Array]" === Object.prototype.toString.call(a)
    }

    function d(a) {
      return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    }

    function e(a, b) {
      var c, d = [];
      for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
      return d
    }

    function f(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b)
    }

    function g(a, b) {
      for (var c in b) f(b, c) && (a[c] = b[c]);
      return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function h(a, b, c, d) {
      return Ca(a, b, c, d, !0).utc()
    }

    function i() {
      return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1
      }
    }

    function j(a) {
      return null == a._pf && (a._pf = i()), a._pf
    }

    function k(a) {
      if (null == a._isValid) {
        var b = j(a);
        a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
      }
      return a._isValid
    }

    function l(a) {
      var b = h(NaN);
      return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
    }

    function m(a, b) {
      var c, d, e;
      if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = j(b)), "undefined" != typeof b._locale && (a._locale = b._locale), Jc.length > 0)
        for (c in Jc) d = Jc[c], e = b[d], "undefined" != typeof e && (a[d] = e);
      return a
    }

    function n(b) {
      m(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), Kc === !1 && (Kc = !0, a.updateOffset(this), Kc = !1)
    }

    function o(a) {
      return a instanceof n || null != a && null != a._isAMomentObject
    }

    function p(a) {
      return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function q(a) {
      var b = +a,
        c = 0;
      return 0 !== b && isFinite(b) && (c = p(b)), c
    }

    function r(a, b, c) {
      var d, e = Math.min(a.length, b.length),
        f = Math.abs(a.length - b.length),
        g = 0;
      for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && q(a[d]) !== q(b[d])) && g++;
      return g + f
    }

    function s() {}

    function t(a) {
      return a ? a.toLowerCase().replace("_", "-") : a
    }

    function u(a) {
      for (var b, c, d, e, f = 0; f < a.length;) {
        for (e = t(a[f]).split("-"), b = e.length, c = t(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
          if (d = v(e.slice(0, b).join("-"))) return d;
          if (c && c.length >= b && r(e, c, !0) >= b - 1) break;
          b--
        }
        f++
      }
      return null
    }

    function v(a) {
      var b = null;
      if (!Lc[a] && "undefined" != typeof module && module && module.exports) try {
        b = Ic._abbr, require("./locale/" + a), w(b)
      } catch (c) {}
      return Lc[a]
    }

    function w(a, b) {
      var c;
      return a && (c = "undefined" == typeof b ? y(a) : x(a, b), c && (Ic = c)), Ic._abbr
    }

    function x(a, b) {
      return null !== b ? (b.abbr = a, Lc[a] = Lc[a] || new s, Lc[a].set(b), w(a), Lc[a]) : (delete Lc[a], null)
    }

    function y(a) {
      var b;
      if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Ic;
      if (!c(a)) {
        if (b = v(a)) return b;
        a = [a]
      }
      return u(a)
    }

    function z(a, b) {
      var c = a.toLowerCase();
      Mc[c] = Mc[c + "s"] = Mc[b] = a
    }

    function A(a) {
      return "string" == typeof a ? Mc[a] || Mc[a.toLowerCase()] : void 0
    }

    function B(a) {
      var b, c, d = {};
      for (c in a) f(a, c) && (b = A(c), b && (d[b] = a[c]));
      return d
    }

    function C(b, c) {
      return function(d) {
        return null != d ? (E(this, b, d), a.updateOffset(this, c), this) : D(this, b)
      }
    }

    function D(a, b) {
      return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
    }

    function E(a, b, c) {
      return a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function F(a, b) {
      var c;
      if ("object" == typeof a)
        for (c in a) this.set(c, a[c]);
      else if (a = A(a), "function" == typeof this[a]) return this[a](b);
      return this
    }

    function G(a, b, c) {
      var d = "" + Math.abs(a),
        e = b - d.length,
        f = a >= 0;
      return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
    }

    function H(a, b, c, d) {
      var e = d;
      "string" == typeof d && (e = function() {
        return this[d]()
      }), a && (Qc[a] = e), b && (Qc[b[0]] = function() {
        return G(e.apply(this, arguments), b[1], b[2])
      }), c && (Qc[c] = function() {
        return this.localeData().ordinal(e.apply(this, arguments), a)
      })
    }

    function I(a) {
      return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function J(a) {
      var b, c, d = a.match(Nc);
      for (b = 0, c = d.length; c > b; b++) Qc[d[b]] ? d[b] = Qc[d[b]] : d[b] = I(d[b]);
      return function(e) {
        var f = "";
        for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
        return f
      }
    }

    function K(a, b) {
      return a.isValid() ? (b = L(b, a.localeData()), Pc[b] = Pc[b] || J(b), Pc[b](a)) : a.localeData().invalidDate()
    }

    function L(a, b) {
      function c(a) {
        return b.longDateFormat(a) || a
      }
      var d = 5;
      for (Oc.lastIndex = 0; d >= 0 && Oc.test(a);) a = a.replace(Oc, c), Oc.lastIndex = 0, d -= 1;
      return a
    }

    function M(a) {
      return "function" == typeof a && "[object Function]" === Object.prototype.toString.call(a)
    }

    function N(a, b, c) {
      dd[a] = M(b) ? b : function(a) {
        return a && c ? c : b
      }
    }

    function O(a, b) {
      return f(dd, a) ? dd[a](b._strict, b._locale) : new RegExp(P(a))
    }

    function P(a) {
      return a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
        return b || c || d || e
      }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function Q(a, b) {
      var c, d = b;
      for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function(a, c) {
        c[b] = q(a)
      }), c = 0; c < a.length; c++) ed[a[c]] = d
    }

    function R(a, b) {
      Q(a, function(a, c, d, e) {
        d._w = d._w || {}, b(a, d._w, d, e)
      })
    }

    function S(a, b, c) {
      null != b && f(ed, a) && ed[a](b, c._a, c, a)
    }

    function T(a, b) {
      return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function U(a) {
      return this._months[a.month()]
    }

    function V(a) {
      return this._monthsShort[a.month()]
    }

    function W(a, b, c) {
      var d, e, f;
      for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
        if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
        if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
        if (!c && this._monthsParse[d].test(a)) return d
      }
    }

    function X(a, b) {
      var c;
      return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), T(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
    }

    function Y(b) {
      return null != b ? (X(this, b), a.updateOffset(this, !0), this) : D(this, "Month")
    }

    function Z() {
      return T(this.year(), this.month())
    }

    function $(a) {
      var b, c = a._a;
      return c && -2 === j(a).overflow && (b = c[gd] < 0 || c[gd] > 11 ? gd : c[hd] < 1 || c[hd] > T(c[fd], c[gd]) ? hd : c[id] < 0 || c[id] > 24 || 24 === c[id] && (0 !== c[jd] || 0 !== c[kd] || 0 !== c[ld]) ? id : c[jd] < 0 || c[jd] > 59 ? jd : c[kd] < 0 || c[kd] > 59 ? kd : c[ld] < 0 || c[ld] > 999 ? ld : -1, j(a)._overflowDayOfYear && (fd > b || b > hd) && (b = hd), j(a).overflow = b), a
    }

    function _(b) {
      a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
    }

    function aa(a, b) {
      var c = !0;
      return g(function() {
        return c && (_(a + "\n" + (new Error).stack), c = !1), b.apply(this, arguments)
      }, b)
    }

    function ba(a, b) {
      od[a] || (_(b), od[a] = !0)
    }

    function ca(a) {
      var b, c, d = a._i,
        e = pd.exec(d);
      if (e) {
        for (j(a).iso = !0, b = 0, c = qd.length; c > b; b++)
          if (qd[b][1].exec(d)) {
            a._f = qd[b][0];
            break
          }
        for (b = 0, c = rd.length; c > b; b++)
          if (rd[b][1].exec(d)) {
            a._f += (e[6] || " ") + rd[b][0];
            break
          }
        d.match(ad) && (a._f += "Z"), va(a)
      } else a._isValid = !1
    }

    function da(b) {
      var c = sd.exec(b._i);
      return null !== c ? void(b._d = new Date(+c[1])) : (ca(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
    }

    function ea(a, b, c, d, e, f, g) {
      var h = new Date(a, b, c, d, e, f, g);
      return 1970 > a && h.setFullYear(a), h
    }

    function fa(a) {
      var b = new Date(Date.UTC.apply(null, arguments));
      return 1970 > a && b.setUTCFullYear(a), b
    }

    function ga(a) {
      return ha(a) ? 366 : 365
    }

    function ha(a) {
      return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function ia() {
      return ha(this.year())
    }

    function ja(a, b, c) {
      var d, e = c - b,
        f = c - a.day();
      return f > e && (f -= 7), e - 7 > f && (f += 7), d = Da(a).add(f, "d"), {
        week: Math.ceil(d.dayOfYear() / 7),
        year: d.year()
      }
    }

    function ka(a) {
      return ja(a, this._week.dow, this._week.doy).week
    }

    function la() {
      return this._week.dow
    }

    function ma() {
      return this._week.doy
    }

    function na(a) {
      var b = this.localeData().week(this);
      return null == a ? b : this.add(7 * (a - b), "d")
    }

    function oa(a) {
      var b = ja(this, 1, 4).week;
      return null == a ? b : this.add(7 * (a - b), "d")
    }

    function pa(a, b, c, d, e) {
      var f, g = 6 + e - d,
        h = fa(a, 0, 1 + g),
        i = h.getUTCDay();
      return e > i && (i += 7), c = null != c ? 1 * c : e, f = 1 + g + 7 * (b - 1) - i + c, {
        year: f > 0 ? a : a - 1,
        dayOfYear: f > 0 ? f : ga(a - 1) + f
      }
    }

    function qa(a) {
      var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
      return null == a ? b : this.add(a - b, "d")
    }

    function ra(a, b, c) {
      return null != a ? a : null != b ? b : c
    }

    function sa(a) {
      var b = new Date;
      return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }

    function ta(a) {
      var b, c, d, e, f = [];
      if (!a._d) {
        for (d = sa(a), a._w && null == a._a[hd] && null == a._a[gd] && ua(a), a._dayOfYear && (e = ra(a._a[fd], d[fd]), a._dayOfYear > ga(e) && (j(a)._overflowDayOfYear = !0), c = fa(e, 0, a._dayOfYear), a._a[gd] = c.getUTCMonth(), a._a[hd] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
        for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
        24 === a._a[id] && 0 === a._a[jd] && 0 === a._a[kd] && 0 === a._a[ld] && (a._nextDay = !0, a._a[id] = 0), a._d = (a._useUTC ? fa : ea).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[id] = 24)
      }
    }

    function ua(a) {
      var b, c, d, e, f, g, h;
      b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = ra(b.GG, a._a[fd], ja(Da(), 1, 4).year), d = ra(b.W, 1), e = ra(b.E, 1)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = ra(b.gg, a._a[fd], ja(Da(), f, g).year), d = ra(b.w, 1), null != b.d ? (e = b.d, f > e && ++d) : e = null != b.e ? b.e + f : f), h = pa(c, d, e, g, f), a._a[fd] = h.year, a._dayOfYear = h.dayOfYear
    }

    function va(b) {
      if (b._f === a.ISO_8601) return void ca(b);
      b._a = [], j(b).empty = !0;
      var c, d, e, f, g, h = "" + b._i,
        i = h.length,
        k = 0;
      for (e = L(b._f, b._locale).match(Nc) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(O(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), Qc[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), S(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
      j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[id] <= 12 && b._a[id] > 0 && (j(b).bigHour = void 0), b._a[id] = wa(b._locale, b._a[id], b._meridiem), ta(b), $(b)
    }

    function wa(a, b, c) {
      var d;
      return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
    }

    function xa(a) {
      var b, c, d, e, f;
      if (0 === a._f.length) return j(a).invalidFormat = !0, void(a._d = new Date(NaN));
      for (e = 0; e < a._f.length; e++) f = 0, b = m({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], va(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
      g(a, c || b)
    }

    function ya(a) {
      if (!a._d) {
        var b = B(a._i);
        a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], ta(a)
      }
    }

    function za(a) {
      var b = new n($(Aa(a)));
      return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
    }

    function Aa(a) {
      var b = a._i,
        e = a._f;
      return a._locale = a._locale || y(a._l), null === b || void 0 === e && "" === b ? l({
        nullInput: !0
      }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), o(b) ? new n($(b)) : (c(e) ? xa(a) : e ? va(a) : d(b) ? a._d = b : Ba(a), a))
    }

    function Ba(b) {
      var f = b._i;
      void 0 === f ? b._d = new Date : d(f) ? b._d = new Date(+f) : "string" == typeof f ? da(b) : c(f) ? (b._a = e(f.slice(0), function(a) {
        return parseInt(a, 10)
      }), ta(b)) : "object" == typeof f ? ya(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
    }

    function Ca(a, b, c, d, e) {
      var f = {};
      return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, za(f)
    }

    function Da(a, b, c, d) {
      return Ca(a, b, c, d, !1)
    }

    function Ea(a, b) {
      var d, e;
      if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Da();
      for (d = b[0], e = 1; e < b.length; ++e)(!b[e].isValid() || b[e][a](d)) && (d = b[e]);
      return d
    }

    function Fa() {
      var a = [].slice.call(arguments, 0);
      return Ea("isBefore", a)
    }

    function Ga() {
      var a = [].slice.call(arguments, 0);
      return Ea("isAfter", a)
    }

    function Ha(a) {
      var b = B(a),
        c = b.year || 0,
        d = b.quarter || 0,
        e = b.month || 0,
        f = b.week || 0,
        g = b.day || 0,
        h = b.hour || 0,
        i = b.minute || 0,
        j = b.second || 0,
        k = b.millisecond || 0;
      this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = y(), this._bubble()
    }

    function Ia(a) {
      return a instanceof Ha
    }

    function Ja(a, b) {
      H(a, 0, 0, function() {
        var a = this.utcOffset(),
          c = "+";
        return 0 > a && (a = -a, c = "-"), c + G(~~(a / 60), 2) + b + G(~~a % 60, 2)
      })
    }

    function Ka(a) {
      var b = (a || "").match(ad) || [],
        c = b[b.length - 1] || [],
        d = (c + "").match(xd) || ["-", 0, 0],
        e = +(60 * d[1]) + q(d[2]);
      return "+" === d[0] ? e : -e
    }

    function La(b, c) {
      var e, f;
      return c._isUTC ? (e = c.clone(), f = (o(b) || d(b) ? +b : +Da(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Da(b).local()
    }

    function Ma(a) {
      return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
    }

    function Na(b, c) {
      var d, e = this._offset || 0;
      return null != b ? ("string" == typeof b && (b = Ka(b)), Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Ma(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? bb(this, Ya(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ma(this)
    }

    function Oa(a, b) {
      return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
    }

    function Pa(a) {
      return this.utcOffset(0, a)
    }

    function Qa(a) {
      return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ma(this), "m")), this
    }

    function Ra() {
      return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ka(this._i)), this
    }

    function Sa(a) {
      return a = a ? Da(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0
    }

    function Ta() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ua() {
      if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted;
      var a = {};
      if (m(a, this), a = Aa(a), a._a) {
        var b = a._isUTC ? h(a._a) : Da(a._a);
        this._isDSTShifted = this.isValid() && r(a._a, b.toArray()) > 0
      } else this._isDSTShifted = !1;
      return this._isDSTShifted
    }

    function Va() {
      return !this._isUTC
    }

    function Wa() {
      return this._isUTC
    }

    function Xa() {
      return this._isUTC && 0 === this._offset
    }

    function Ya(a, b) {
      var c, d, e, g = a,
        h = null;
      return Ia(a) ? g = {
        ms: a._milliseconds,
        d: a._days,
        M: a._months
      } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = yd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
        y: 0,
        d: q(h[hd]) * c,
        h: q(h[id]) * c,
        m: q(h[jd]) * c,
        s: q(h[kd]) * c,
        ms: q(h[ld]) * c
      }) : (h = zd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
        y: Za(h[2], c),
        M: Za(h[3], c),
        d: Za(h[4], c),
        h: Za(h[5], c),
        m: Za(h[6], c),
        s: Za(h[7], c),
        w: Za(h[8], c)
      }) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = _a(Da(g.from), Da(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ha(g), Ia(a) && f(a, "_locale") && (d._locale = a._locale), d
    }

    function Za(a, b) {
      var c = a && parseFloat(a.replace(",", "."));
      return (isNaN(c) ? 0 : c) * b
    }

    function $a(a, b) {
      var c = {
        milliseconds: 0,
        months: 0
      };
      return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function _a(a, b) {
      var c;
      return b = La(b, a), a.isBefore(b) ? c = $a(a, b) : (c = $a(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
    }

    function ab(a, b) {
      return function(c, d) {
        var e, f;
        return null === d || isNaN(+d) || (ba(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Ya(c, d), bb(this, e, a), this
      }
    }

    function bb(b, c, d, e) {
      var f = c._milliseconds,
        g = c._days,
        h = c._months;
      e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && E(b, "Date", D(b, "Date") + g * d), h && X(b, D(b, "Month") + h * d), e && a.updateOffset(b, g || h)
    }

    function cb(a, b) {
      var c = a || Da(),
        d = La(c, this).startOf("day"),
        e = this.diff(d, "days", !0),
        f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse";
      return this.format(b && b[f] || this.localeData().calendar(f, this, Da(c)))
    }

    function db() {
      return new n(this)
    }

    function eb(a, b) {
      var c;
      return b = A("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Da(a), +this > +a) : (c = o(a) ? +a : +Da(a), c < +this.clone().startOf(b))
    }

    function fb(a, b) {
      var c;
      return b = A("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Da(a), +a > +this) : (c = o(a) ? +a : +Da(a), +this.clone().endOf(b) < c)
    }

    function gb(a, b, c) {
      return this.isAfter(a, c) && this.isBefore(b, c)
    }

    function hb(a, b) {
      var c;
      return b = A(b || "millisecond"), "millisecond" === b ? (a = o(a) ? a : Da(a), +this === +a) : (c = +Da(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
    }

    function ib(a, b, c) {
      var d, e, f = La(a, this),
        g = 6e4 * (f.utcOffset() - this.utcOffset());
      return b = A(b), "year" === b || "month" === b || "quarter" === b ? (e = jb(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : p(e)
    }

    function jb(a, b) {
      var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
        f = a.clone().add(e, "months");
      return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
    }

    function kb() {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function lb() {
      var a = this.clone().utc();
      return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : K(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : K(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function mb(b) {
      var c = K(this, b || a.defaultFormat);
      return this.localeData().postformat(c)
    }

    function nb(a, b) {
      return this.isValid() ? Ya({
        to: this,
        from: a
      }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function ob(a) {
      return this.from(Da(), a)
    }

    function pb(a, b) {
      return this.isValid() ? Ya({
        from: this,
        to: a
      }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function qb(a) {
      return this.to(Da(), a)
    }

    function rb(a) {
      var b;
      return void 0 === a ? this._locale._abbr : (b = y(a), null != b && (this._locale = b), this)
    }

    function sb() {
      return this._locale
    }

    function tb(a) {
      switch (a = A(a)) {
        case "year":
          this.month(0);
        case "quarter":
        case "month":
          this.date(1);
        case "week":
        case "isoWeek":
        case "day":
          this.hours(0);
        case "hour":
          this.minutes(0);
        case "minute":
          this.seconds(0);
        case "second":
          this.milliseconds(0)
      }
      return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function ub(a) {
      return a = A(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
    }

    function vb() {
      return +this._d - 6e4 * (this._offset || 0)
    }

    function wb() {
      return Math.floor(+this / 1e3)
    }

    function xb() {
      return this._offset ? new Date(+this) : this._d
    }

    function yb() {
      var a = this;
      return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
    }

    function zb() {
      var a = this;
      return {
        years: a.year(),
        months: a.month(),
        date: a.date(),
        hours: a.hours(),
        minutes: a.minutes(),
        seconds: a.seconds(),
        milliseconds: a.milliseconds()
      }
    }

    function Ab() {
      return k(this)
    }

    function Bb() {
      return g({}, j(this))
    }

    function Cb() {
      return j(this).overflow
    }

    function Db(a, b) {
      H(0, [a, a.length], 0, b)
    }

    function Eb(a, b, c) {
      return ja(Da([a, 11, 31 + b - c]), b, c).week
    }

    function Fb(a) {
      var b = ja(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
      return null == a ? b : this.add(a - b, "y")
    }

    function Gb(a) {
      var b = ja(this, 1, 4).year;
      return null == a ? b : this.add(a - b, "y")
    }

    function Hb() {
      return Eb(this.year(), 1, 4)
    }

    function Ib() {
      var a = this.localeData()._week;
      return Eb(this.year(), a.dow, a.doy)
    }

    function Jb(a) {
      return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }

    function Kb(a, b) {
      return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
    }

    function Lb(a) {
      return this._weekdays[a.day()]
    }

    function Mb(a) {
      return this._weekdaysShort[a.day()]
    }

    function Nb(a) {
      return this._weekdaysMin[a.day()]
    }

    function Ob(a) {
      var b, c, d;
      for (this._weekdaysParse = this._weekdaysParse || [], b = 0; 7 > b; b++)
        if (this._weekdaysParse[b] || (c = Da([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
    }

    function Pb(a) {
      var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != a ? (a = Kb(a, this.localeData()), this.add(a - b, "d")) : b
    }

    function Qb(a) {
      var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == a ? b : this.add(a - b, "d")
    }

    function Rb(a) {
      return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
    }

    function Sb(a, b) {
      H(a, 0, 0, function() {
        return this.localeData().meridiem(this.hours(), this.minutes(), b)
      })
    }

    function Tb(a, b) {
      return b._meridiemParse
    }

    function Ub(a) {
      return "p" === (a + "").toLowerCase().charAt(0)
    }

    function Vb(a, b, c) {
      return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }

    function Wb(a, b) {
      b[ld] = q(1e3 * ("0." + a))
    }

    function Xb() {
      return this._isUTC ? "UTC" : ""
    }

    function Yb() {
      return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Zb(a) {
      return Da(1e3 * a)
    }

    function $b() {
      return Da.apply(null, arguments).parseZone()
    }

    function _b(a, b, c) {
      var d = this._calendar[a];
      return "function" == typeof d ? d.call(b, c) : d
    }

    function ac(a) {
      var b = this._longDateFormat[a],
        c = this._longDateFormat[a.toUpperCase()];
      return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
        return a.slice(1)
      }), this._longDateFormat[a])
    }

    function bc() {
      return this._invalidDate
    }

    function cc(a) {
      return this._ordinal.replace("%d", a)
    }

    function dc(a) {
      return a
    }

    function ec(a, b, c, d) {
      var e = this._relativeTime[c];
      return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
    }

    function fc(a, b) {
      var c = this._relativeTime[a > 0 ? "future" : "past"];
      return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
    }

    function gc(a) {
      var b, c;
      for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
      this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function hc(a, b, c, d) {
      var e = y(),
        f = h().set(d, b);
      return e[c](f, a)
    }

    function ic(a, b, c, d, e) {
      if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return hc(a, b, c, e);
      var f, g = [];
      for (f = 0; d > f; f++) g[f] = hc(a, f, c, e);
      return g
    }

    function jc(a, b) {
      return ic(a, b, "months", 12, "month")
    }

    function kc(a, b) {
      return ic(a, b, "monthsShort", 12, "month")
    }

    function lc(a, b) {
      return ic(a, b, "weekdays", 7, "day")
    }

    function mc(a, b) {
      return ic(a, b, "weekdaysShort", 7, "day")
    }

    function nc(a, b) {
      return ic(a, b, "weekdaysMin", 7, "day")
    }

    function oc() {
      var a = this._data;
      return this._milliseconds = Wd(this._milliseconds), this._days = Wd(this._days), this._months = Wd(this._months), a.milliseconds = Wd(a.milliseconds), a.seconds = Wd(a.seconds), a.minutes = Wd(a.minutes), a.hours = Wd(a.hours), a.months = Wd(a.months), a.years = Wd(a.years), this
    }

    function pc(a, b, c, d) {
      var e = Ya(b, c);
      return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
    }

    function qc(a, b) {
      return pc(this, a, b, 1)
    }

    function rc(a, b) {
      return pc(this, a, b, -1)
    }

    function sc(a) {
      return 0 > a ? Math.floor(a) : Math.ceil(a)
    }

    function tc() {
      var a, b, c, d, e, f = this._milliseconds,
        g = this._days,
        h = this._months,
        i = this._data;
      return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * sc(vc(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = p(f / 1e3), i.seconds = a % 60, b = p(a / 60), i.minutes = b % 60, c = p(b / 60), i.hours = c % 24, g += p(c / 24), e = p(uc(g)), h += e, g -= sc(vc(e)), d = p(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
    }

    function uc(a) {
      return 4800 * a / 146097
    }

    function vc(a) {
      return 146097 * a / 4800
    }

    function wc(a) {
      var b, c, d = this._milliseconds;
      if (a = A(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + uc(b), "month" === a ? c : c / 12;
      switch (b = this._days + Math.round(vc(this._months)), a) {
        case "week":
          return b / 7 + d / 6048e5;
        case "day":
          return b + d / 864e5;
        case "hour":
          return 24 * b + d / 36e5;
        case "minute":
          return 1440 * b + d / 6e4;
        case "second":
          return 86400 * b + d / 1e3;
        case "millisecond":
          return Math.floor(864e5 * b) + d;
        default:
          throw new Error("Unknown unit " + a)
      }
    }

    function xc() {
      return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * q(this._months / 12)
    }

    function yc(a) {
      return function() {
        return this.as(a)
      }
    }

    function zc(a) {
      return a = A(a), this[a + "s"]()
    }

    function Ac(a) {
      return function() {
        return this._data[a]
      }
    }

    function Bc() {
      return p(this.days() / 7)
    }

    function Cc(a, b, c, d, e) {
      return e.relativeTime(b || 1, !!c, a, d)
    }

    function Dc(a, b, c) {
      var d = Ya(a).abs(),
        e = ke(d.as("s")),
        f = ke(d.as("m")),
        g = ke(d.as("h")),
        h = ke(d.as("d")),
        i = ke(d.as("M")),
        j = ke(d.as("y")),
        k = e < le.s && ["s", e] || 1 === f && ["m"] || f < le.m && ["mm", f] || 1 === g && ["h"] || g < le.h && ["hh", g] || 1 === h && ["d"] || h < le.d && ["dd", h] || 1 === i && ["M"] || i < le.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
      return k[2] = b, k[3] = +a > 0, k[4] = c, Cc.apply(null, k)
    }

    function Ec(a, b) {
      return void 0 === le[a] ? !1 : void 0 === b ? le[a] : (le[a] = b, !0)
    }

    function Fc(a) {
      var b = this.localeData(),
        c = Dc(this, !a, b);
      return a && (c = b.pastFuture(+this, c)), b.postformat(c)
    }

    function Gc() {
      var a, b, c, d = me(this._milliseconds) / 1e3,
        e = me(this._days),
        f = me(this._months);
      a = p(d / 60), b = p(a / 60), d %= 60, a %= 60, c = p(f / 12), f %= 12;
      var g = c,
        h = f,
        i = e,
        j = b,
        k = a,
        l = d,
        m = this.asSeconds();
      return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
    }
    var Hc, Ic, Jc = a.momentProperties = [],
      Kc = !1,
      Lc = {},
      Mc = {},
      Nc = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      Oc = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      Pc = {},
      Qc = {},
      Rc = /\d/,
      Sc = /\d\d/,
      Tc = /\d{3}/,
      Uc = /\d{4}/,
      Vc = /[+-]?\d{6}/,
      Wc = /\d\d?/,
      Xc = /\d{1,3}/,
      Yc = /\d{1,4}/,
      Zc = /[+-]?\d{1,6}/,
      $c = /\d+/,
      _c = /[+-]?\d+/,
      ad = /Z|[+-]\d\d:?\d\d/gi,
      bd = /[+-]?\d+(\.\d{1,3})?/,
      cd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
      dd = {},
      ed = {},
      fd = 0,
      gd = 1,
      hd = 2,
      id = 3,
      jd = 4,
      kd = 5,
      ld = 6;
    H("M", ["MM", 2], "Mo", function() {
      return this.month() + 1
    }), H("MMM", 0, 0, function(a) {
      return this.localeData().monthsShort(this, a)
    }), H("MMMM", 0, 0, function(a) {
      return this.localeData().months(this, a)
    }), z("month", "M"), N("M", Wc), N("MM", Wc, Sc), N("MMM", cd), N("MMMM", cd), Q(["M", "MM"], function(a, b) {
      b[gd] = q(a) - 1
    }), Q(["MMM", "MMMM"], function(a, b, c, d) {
      var e = c._locale.monthsParse(a, d, c._strict);
      null != e ? b[gd] = e : j(c).invalidMonth = a
    });
    var md = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      nd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      od = {};
    a.suppressDeprecationWarnings = !1;
    var pd = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      qd = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
        ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
        ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d{2}/],
        ["YYYY-DDD", /\d{4}-\d{3}/]
      ],
      rd = [
        ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
      ],
      sd = /^\/?Date\((\-?\d+)/i;
    a.createFromInputFallback = aa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
      a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }), H(0, ["YY", 2], 0, function() {
      return this.year() % 100
    }), H(0, ["YYYY", 4], 0, "year"), H(0, ["YYYYY", 5], 0, "year"), H(0, ["YYYYYY", 6, !0], 0, "year"), z("year", "y"), N("Y", _c), N("YY", Wc, Sc), N("YYYY", Yc, Uc), N("YYYYY", Zc, Vc), N("YYYYYY", Zc, Vc), Q(["YYYYY", "YYYYYY"], fd), Q("YYYY", function(b, c) {
      c[fd] = 2 === b.length ? a.parseTwoDigitYear(b) : q(b)
    }), Q("YY", function(b, c) {
      c[fd] = a.parseTwoDigitYear(b)
    }), a.parseTwoDigitYear = function(a) {
      return q(a) + (q(a) > 68 ? 1900 : 2e3)
    };
    var td = C("FullYear", !1);
    H("w", ["ww", 2], "wo", "week"), H("W", ["WW", 2], "Wo", "isoWeek"), z("week", "w"), z("isoWeek", "W"), N("w", Wc), N("ww", Wc, Sc), N("W", Wc), N("WW", Wc, Sc), R(["w", "ww", "W", "WW"], function(a, b, c, d) {
      b[d.substr(0, 1)] = q(a)
    });
    var ud = {
      dow: 0,
      doy: 6
    };
    H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), z("dayOfYear", "DDD"), N("DDD", Xc), N("DDDD", Tc), Q(["DDD", "DDDD"], function(a, b, c) {
      c._dayOfYear = q(a)
    }), a.ISO_8601 = function() {};
    var vd = aa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
        var a = Da.apply(null, arguments);
        return this > a ? this : a
      }),
      wd = aa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
        var a = Da.apply(null, arguments);
        return a > this ? this : a
      });
    Ja("Z", ":"), Ja("ZZ", ""), N("Z", ad), N("ZZ", ad), Q(["Z", "ZZ"], function(a, b, c) {
      c._useUTC = !0, c._tzm = Ka(a)
    });
    var xd = /([\+\-]|\d\d)/gi;
    a.updateOffset = function() {};
    var yd = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
      zd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Ya.fn = Ha.prototype;
    var Ad = ab(1, "add"),
      Bd = ab(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Cd = aa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
      return void 0 === a ? this.localeData() : this.locale(a)
    });
    H(0, ["gg", 2], 0, function() {
      return this.weekYear() % 100
    }), H(0, ["GG", 2], 0, function() {
      return this.isoWeekYear() % 100
    }), Db("gggg", "weekYear"), Db("ggggg", "weekYear"), Db("GGGG", "isoWeekYear"), Db("GGGGG", "isoWeekYear"), z("weekYear", "gg"), z("isoWeekYear", "GG"), N("G", _c), N("g", _c), N("GG", Wc, Sc), N("gg", Wc, Sc), N("GGGG", Yc, Uc), N("gggg", Yc, Uc), N("GGGGG", Zc, Vc), N("ggggg", Zc, Vc), R(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
      b[d.substr(0, 2)] = q(a)
    }), R(["gg", "GG"], function(b, c, d, e) {
      c[e] = a.parseTwoDigitYear(b)
    }), H("Q", 0, 0, "quarter"), z("quarter", "Q"), N("Q", Rc), Q("Q", function(a, b) {
      b[gd] = 3 * (q(a) - 1)
    }), H("D", ["DD", 2], "Do", "date"), z("date", "D"), N("D", Wc), N("DD", Wc, Sc), N("Do", function(a, b) {
      return a ? b._ordinalParse : b._ordinalParseLenient
    }), Q(["D", "DD"], hd), Q("Do", function(a, b) {
      b[hd] = q(a.match(Wc)[0], 10)
    });
    var Dd = C("Date", !0);
    H("d", 0, "do", "day"), H("dd", 0, 0, function(a) {
      return this.localeData().weekdaysMin(this, a)
    }), H("ddd", 0, 0, function(a) {
      return this.localeData().weekdaysShort(this, a)
    }), H("dddd", 0, 0, function(a) {
      return this.localeData().weekdays(this, a)
    }), H("e", 0, 0, "weekday"), H("E", 0, 0, "isoWeekday"), z("day", "d"), z("weekday", "e"), z("isoWeekday", "E"), N("d", Wc), N("e", Wc), N("E", Wc), N("dd", cd), N("ddd", cd), N("dddd", cd), R(["dd", "ddd", "dddd"], function(a, b, c) {
      var d = c._locale.weekdaysParse(a);
      null != d ? b.d = d : j(c).invalidWeekday = a
    }), R(["d", "e", "E"], function(a, b, c, d) {
      b[d] = q(a)
    });
    var Ed = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      Fd = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      Gd = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    H("H", ["HH", 2], 0, "hour"), H("h", ["hh", 2], 0, function() {
      return this.hours() % 12 || 12
    }), Sb("a", !0), Sb("A", !1), z("hour", "h"), N("a", Tb), N("A", Tb), N("H", Wc), N("h", Wc), N("HH", Wc, Sc), N("hh", Wc, Sc), Q(["H", "HH"], id), Q(["a", "A"], function(a, b, c) {
      c._isPm = c._locale.isPM(a), c._meridiem = a
    }), Q(["h", "hh"], function(a, b, c) {
      b[id] = q(a), j(c).bigHour = !0
    });
    var Hd = /[ap]\.?m?\.?/i,
      Id = C("Hours", !0);
    H("m", ["mm", 2], 0, "minute"), z("minute", "m"), N("m", Wc), N("mm", Wc, Sc), Q(["m", "mm"], jd);
    var Jd = C("Minutes", !1);
    H("s", ["ss", 2], 0, "second"), z("second", "s"), N("s", Wc), N("ss", Wc, Sc), Q(["s", "ss"], kd);
    var Kd = C("Seconds", !1);
    H("S", 0, 0, function() {
      return ~~(this.millisecond() / 100)
    }), H(0, ["SS", 2], 0, function() {
      return ~~(this.millisecond() / 10)
    }), H(0, ["SSS", 3], 0, "millisecond"), H(0, ["SSSS", 4], 0, function() {
      return 10 * this.millisecond()
    }), H(0, ["SSSSS", 5], 0, function() {
      return 100 * this.millisecond()
    }), H(0, ["SSSSSS", 6], 0, function() {
      return 1e3 * this.millisecond()
    }), H(0, ["SSSSSSS", 7], 0, function() {
      return 1e4 * this.millisecond()
    }), H(0, ["SSSSSSSS", 8], 0, function() {
      return 1e5 * this.millisecond()
    }), H(0, ["SSSSSSSSS", 9], 0, function() {
      return 1e6 * this.millisecond()
    }), z("millisecond", "ms"), N("S", Xc, Rc), N("SS", Xc, Sc), N("SSS", Xc, Tc);
    var Ld;
    for (Ld = "SSSS"; Ld.length <= 9; Ld += "S") N(Ld, $c);
    for (Ld = "S"; Ld.length <= 9; Ld += "S") Q(Ld, Wb);
    var Md = C("Milliseconds", !1);
    H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
    var Nd = n.prototype;
    Nd.add = Ad, Nd.calendar = cb, Nd.clone = db, Nd.diff = ib, Nd.endOf = ub, Nd.format = mb, Nd.from = nb, Nd.fromNow = ob, Nd.to = pb, Nd.toNow = qb, Nd.get = F, Nd.invalidAt = Cb, Nd.isAfter = eb, Nd.isBefore = fb, Nd.isBetween = gb, Nd.isSame = hb, Nd.isValid = Ab, Nd.lang = Cd, Nd.locale = rb, Nd.localeData = sb, Nd.max = wd, Nd.min = vd, Nd.parsingFlags = Bb, Nd.set = F, Nd.startOf = tb, Nd.subtract = Bd, Nd.toArray = yb, Nd.toObject = zb, Nd.toDate = xb, Nd.toISOString = lb, Nd.toJSON = lb, Nd.toString = kb, Nd.unix = wb, Nd.valueOf = vb, Nd.year = td, Nd.isLeapYear = ia, Nd.weekYear = Fb, Nd.isoWeekYear = Gb, Nd.quarter = Nd.quarters = Jb, Nd.month = Y, Nd.daysInMonth = Z, Nd.week = Nd.weeks = na, Nd.isoWeek = Nd.isoWeeks = oa, Nd.weeksInYear = Ib, Nd.isoWeeksInYear = Hb, Nd.date = Dd, Nd.day = Nd.days = Pb, Nd.weekday = Qb, Nd.isoWeekday = Rb, Nd.dayOfYear = qa, Nd.hour = Nd.hours = Id, Nd.minute = Nd.minutes = Jd, Nd.second = Nd.seconds = Kd,
      Nd.millisecond = Nd.milliseconds = Md, Nd.utcOffset = Na, Nd.utc = Pa, Nd.local = Qa, Nd.parseZone = Ra, Nd.hasAlignedHourOffset = Sa, Nd.isDST = Ta, Nd.isDSTShifted = Ua, Nd.isLocal = Va, Nd.isUtcOffset = Wa, Nd.isUtc = Xa, Nd.isUTC = Xa, Nd.zoneAbbr = Xb, Nd.zoneName = Yb, Nd.dates = aa("dates accessor is deprecated. Use date instead.", Dd), Nd.months = aa("months accessor is deprecated. Use month instead", Y), Nd.years = aa("years accessor is deprecated. Use year instead", td), Nd.zone = aa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Oa);
    var Od = Nd,
      Pd = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      Qd = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      },
      Rd = "Invalid date",
      Sd = "%d",
      Td = /\d{1,2}/,
      Ud = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      Vd = s.prototype;
    Vd._calendar = Pd, Vd.calendar = _b, Vd._longDateFormat = Qd, Vd.longDateFormat = ac, Vd._invalidDate = Rd, Vd.invalidDate = bc, Vd._ordinal = Sd, Vd.ordinal = cc, Vd._ordinalParse = Td, Vd.preparse = dc, Vd.postformat = dc, Vd._relativeTime = Ud, Vd.relativeTime = ec, Vd.pastFuture = fc, Vd.set = gc, Vd.months = U, Vd._months = md, Vd.monthsShort = V, Vd._monthsShort = nd, Vd.monthsParse = W, Vd.week = ka, Vd._week = ud, Vd.firstDayOfYear = ma, Vd.firstDayOfWeek = la, Vd.weekdays = Lb, Vd._weekdays = Ed, Vd.weekdaysMin = Nb, Vd._weekdaysMin = Gd, Vd.weekdaysShort = Mb, Vd._weekdaysShort = Fd, Vd.weekdaysParse = Ob, Vd.isPM = Ub, Vd._meridiemParse = Hd, Vd.meridiem = Vb, w("en", {
      ordinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(a) {
        var b = a % 10,
          c = 1 === q(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
        return a + c
      }
    }), a.lang = aa("moment.lang is deprecated. Use moment.locale instead.", w), a.langData = aa("moment.langData is deprecated. Use moment.localeData instead.", y);
    var Wd = Math.abs,
      Xd = yc("ms"),
      Yd = yc("s"),
      Zd = yc("m"),
      $d = yc("h"),
      _d = yc("d"),
      ae = yc("w"),
      be = yc("M"),
      ce = yc("y"),
      de = Ac("milliseconds"),
      ee = Ac("seconds"),
      fe = Ac("minutes"),
      ge = Ac("hours"),
      he = Ac("days"),
      ie = Ac("months"),
      je = Ac("years"),
      ke = Math.round,
      le = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
      },
      me = Math.abs,
      ne = Ha.prototype;
    ne.abs = oc, ne.add = qc, ne.subtract = rc, ne.as = wc, ne.asMilliseconds = Xd, ne.asSeconds = Yd, ne.asMinutes = Zd, ne.asHours = $d, ne.asDays = _d, ne.asWeeks = ae, ne.asMonths = be, ne.asYears = ce, ne.valueOf = xc, ne._bubble = tc, ne.get = zc, ne.milliseconds = de, ne.seconds = ee, ne.minutes = fe, ne.hours = ge, ne.days = he, ne.weeks = Bc, ne.months = ie, ne.years = je, ne.humanize = Fc, ne.toISOString = Gc, ne.toString = Gc, ne.toJSON = Gc, ne.locale = rb, ne.localeData = sb, ne.toIsoString = aa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Gc), ne.lang = Cd, H("X", 0, 0, "unix"), H("x", 0, 0, "valueOf"), N("x", _c), N("X", bd), Q("X", function(a, b, c) {
      c._d = new Date(1e3 * parseFloat(a, 10))
    }), Q("x", function(a, b, c) {
      c._d = new Date(q(a))
    }), a.version = "2.10.6", b(Da), a.fn = Od, a.min = Fa, a.max = Ga, a.utc = h, a.unix = Zb, a.months = jc, a.isDate = d, a.locale = w, a.invalid = l, a.duration = Ya, a.isMoment = o, a.weekdays = lc, a.parseZone = $b, a.localeData = y, a.isDuration = Ia, a.monthsShort = kc, a.weekdaysMin = nc, a.defineLocale = x, a.weekdaysShort = mc, a.normalizeUnits = A, a.relativeTimeThreshold = Ec;
    var oe = a;
    return oe
  });
  'use strict';

  //
  // We store our EE objects in a plain object whose properties are event names.
  // If `Object.create(null)` is not supported we prefix the event names with a
  // `~` to make sure that the built-in object properties are not overridden or
  // used as an attack vector.
  // We also assume that `Object.create(null)` is available when the event name
  // is an ES6 Symbol.
  //
  var prefix = typeof Object.create !== 'function' ? '~' : false;

  /**
   * Representation of a single EventEmitter function.
   *
   * @param {Function} fn Event handler to be called.
   * @param {Mixed} context Context for function execution.
   * @param {Boolean} once Only emit once
   * @api private
   */
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }

  /**
   * Minimal EventEmitter interface that is molded against the Node.js
   * EventEmitter interface.
   *
   * @constructor
   * @api public
   */
  function EventEmitter() { /* Nothing to set */ }

  /**
   * Holds the assigned EventEmitters by name.
   *
   * @type {Object}
   * @private
   */
  EventEmitter.prototype._events = undefined;

  /**
   * Return a list of assigned event listeners.
   *
   * @param {String} event The events that should be listed.
   * @param {Boolean} exists We only need to know if there are listeners.
   * @returns {Array|Boolean}
   * @api public
   */
  EventEmitter.prototype.listeners = function listeners(event, exists) {
    var evt = prefix ? prefix + event : event,
      available = this._events && this._events[evt];

    if (exists) return !!available;
    if (!available) return [];
    if (available.fn) return [available.fn];

    for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
      ee[i] = available[i].fn;
    }

    return ee;
  };

  /**
   * Emit an event to all registered event listeners.
   *
   * @param {String} event The name of the event.
   * @returns {Boolean} Indication if we've emitted an event.
   * @api public
   */
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;

    if (!this._events || !this._events[evt]) return false;

    var listeners = this._events[evt],
      len = arguments.length,
      args, i;

    if ('function' === typeof listeners.fn) {
      if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }

      for (i = 1, args = new Array(len - 1); i < len; i++) {
        args[i - 1] = arguments[i];
      }

      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length,
        j;

      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);
            break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);
            break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);
            break;
          default:
            if (!args)
              for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }

            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }

    return true;
  };

  /**
   * Register a new EventListener for the given event.
   *
   * @param {String} event Name of the event.
   * @param {Functon} fn Callback function.
   * @param {Mixed} context The context of the function.
   * @api public
   */
  EventEmitter.prototype.on = function on(event, fn, context) {
    var listener = new EE(fn, context || this),
      evt = prefix ? prefix + event : event;

    if (!this._events) this._events = prefix ? {} : Object.create(null);
    if (!this._events[evt]) this._events[evt] = listener;
    else {
      if (!this._events[evt].fn) this._events[evt].push(listener);
      else this._events[evt] = [
        this._events[evt], listener
      ];
    }

    return this;
  };

  /**
   * Add an EventListener that's only called once.
   *
   * @param {String} event Name of the event.
   * @param {Function} fn Callback function.
   * @param {Mixed} context The context of the function.
   * @api public
   */
  EventEmitter.prototype.once = function once(event, fn, context) {
    var listener = new EE(fn, context || this, true),
      evt = prefix ? prefix + event : event;

    if (!this._events) this._events = prefix ? {} : Object.create(null);
    if (!this._events[evt]) this._events[evt] = listener;
    else {
      if (!this._events[evt].fn) this._events[evt].push(listener);
      else this._events[evt] = [
        this._events[evt], listener
      ];
    }

    return this;
  };

  /**
   * Remove event listeners.
   *
   * @param {String} event The event we want to remove.
   * @param {Function} fn The listener that we need to find.
   * @param {Mixed} context Only remove listeners matching this context.
   * @param {Boolean} once Only remove once listeners.
   * @api public
   */
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;

    if (!this._events || !this._events[evt]) return this;

    var listeners = this._events[evt],
      events = [];

    if (fn) {
      if (listeners.fn) {
        if (
          listeners.fn !== fn || (once && !listeners.once) || (context && listeners.context !== context)
        ) {
          events.push(listeners);
        }
      } else {
        for (var i = 0, length = listeners.length; i < length; i++) {
          if (
            listeners[i].fn !== fn || (once && !listeners[i].once) || (context && listeners[i].context !== context)
          ) {
            events.push(listeners[i]);
          }
        }
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) {
      this._events[evt] = events.length === 1 ? events[0] : events;
    } else {
      delete this._events[evt];
    }

    return this;
  };

  /**
   * Remove all listeners or only the listeners for the specified event.
   *
   * @param {String} event The event want to remove all listeners for.
   * @api public
   */
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    if (!this._events) return this;

    if (event) delete this._events[prefix ? prefix + event : event];
    else this._events = prefix ? {} : Object.create(null);

    return this;
  };

  //
  // Alias methods names because people roll like that.
  //
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  //
  // This function doesn't apply anymore.
  //
  EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
    return this;
  };

  //
  // Expose the prefix.
  //
  EventEmitter.prefixed = prefix;

  //
  // Expose the module.
  //
  if ('undefined' !== typeof module) {
    module.exports = EventEmitter;
  }

  (function(e) {
    function q() {
      if (p) {
        var b = [];
        if (f.querySelectorAll) b = f.querySelectorAll("[data-squery]");
        else
          for (var a = f.getElementsByTagName("*"), c = 0, m = a.length; c < m; ++c) a[c].getAttribute("data-squery") && b.push(a[c]);
        c = 0;
        for (m = b.length; c < m; ++c) {
          for (var a = b[c], d = [], e = a.getAttribute("data-squery").split(" "), g = 0, i = e.length; g < i; ++g) {
            var h = /(.*):([0-9]*)(px|em)=(.*)/.exec(e[g]);
            h && d.push(h)
          }
          a.cq_rules = a.cq_rules || [];
          a.cq_rules = a.cq_rules.concat(d);
          j.push(a)
        }
      }
    }

    function k() {
      for (var b = 0, a = j.length; b < a; ++b) {
        el =
          j[b];
        for (var c = 0, e = el.cq_rules.length; c < e; ++c) {
          var d = el.cq_rules[c],
            f = parseInt(d[2]);
          "em" === d[3] && (f = n(parseFloat(d[2]), el));
          var g = el,
            i = d[4],
            h = g.cloneNode(!0);
          h.className = (" " + h.className + " ").replace(" " + i + " ", " ");
          h.style.height = 0;
          h.style.visibility = "hidden";
          h.style.overflow = "hidden";
          h.style.clear = "both";
          i = g.parentNode;
          i.insertBefore(h, g);
          g = h.offsetWidth;
          i.removeChild(h);
          r[d[1]](g, f) ? 0 > el.className.indexOf(d[4]) && (el.className += " " + d[4]) : (d = el.className.replace(RegExp("(^| )" + d[4] + "( |$)"), "$1"),
            d = d.replace(/ $/, ""), el.className = d)
        }
      }
    }

    function l() {
      if (!o) {
        o = !0;
        q();
        k();
        e.addEventListener && e.addEventListener("resize", k, !1);
        var b = n(1, f.body);
        e.setInterval(function() {
          var a = n(1, f.body);
          a !== b && (k(), b = a)
        }, 100)
      }
    }
    var f = e.document,
      j = [],
      p = !0,
      o = !1,
      r = {
        "min-width": function(b, a) {
          return b > a
        },
        "max-width": function(b, a) {
          return b < a
        }
      },
      n = function(b) {
        return function() {
          var a = Array.prototype.slice.call(arguments);
          b.memoize = b.memoize || {};
          return a in b.memoize ? b.memoize[a] : b.memoize[a] = b.apply(this, a)
        }
      }(function(b, a) {
        var c =
          f.createElement("div");
        c.style.fontSize = "1em";
        c.style.margin = "0";
        c.style.padding = "0";
        c.style.border = "none";
        c.style.width = "1em";
        a.appendChild(c);
        var e = c.offsetWidth;
        a.removeChild(c);
        return Math.round(e * b)
      });
    f.addEventListener ? (f.addEventListener("DOMContentLoaded", l, !1), e.addEventListener("load", l, !1)) : f.attachEvent && (f.attachEvent("onreadystatechange", l), e.attachEvent("onload", l));
    e.SelectorQueries = {
      add: function(b, a, c, e) {
        for (var c = /([0-9]*)(px|em)/.exec(c), d = 0, f = b.length; d < f; ++d) {
          var g = b[d];
          g.cq_rules =
            g.cq_rules || [];
          g.cq_rules.push([null, a, c[1], c[2], e]);
          j.push(g)
        }
        o && k()
      },
      ignoreDataAttributes: function() {
        p = !1
      }
    }
  })(this);

  (function(global, undefined) {
    "use strict";

    if (global.setImmediate) {
      return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = {
        callback: callback,
        args: args
      };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
      delete tasksByHandle[handle];
    }

    function run(task) {
      var callback = task.callback;
      var args = task.args;
      switch (args.length) {
        case 0:
          callback();
          break;
        case 1:
          callback(args[0]);
          break;
        case 2:
          callback(args[0], args[1]);
          break;
        case 3:
          callback(args[0], args[1], args[2]);
          break;
        default:
          callback.apply(undefined, args);
          break;
      }
    }

    function runIfPresent(handle) {
      // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
      // So if we're currently running a task, we'll need to delay this invocation.
      if (currentlyRunningATask) {
        // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
        // "too much recursion" error.
        setTimeout(runIfPresent, 0, handle);
      } else {
        var task = tasksByHandle[handle];
        if (task) {
          currentlyRunningATask = true;
          try {
            run(task);
          } finally {
            clearImmediate(handle);
            currentlyRunningATask = false;
          }
        }
      }
    }

    function installNextTickImplementation() {
      registerImmediate = function(handle) {
        process.nextTick(function() {
          runIfPresent(handle);
        });
      };
    }

    function canUsePostMessage() {
      // The test against `importScripts` prevents this implementation from being installed inside a web worker,
      // where `global.postMessage` means something completely different and can't be used for this purpose.
      if (global.postMessage && !global.importScripts) {
        var postMessageIsAsynchronous = true;
        var oldOnMessage = global.onmessage;
        global.onmessage = function() {
          postMessageIsAsynchronous = false;
        };
        global.postMessage("", "*");
        global.onmessage = oldOnMessage;
        return postMessageIsAsynchronous;
      }
    }

    function installPostMessageImplementation() {
      // Installs an event handler on `global` for the `message` event: see
      // * https://developer.mozilla.org/en/DOM/window.postMessage
      // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

      var messagePrefix = "setImmediate$" + Math.random() + "$";
      var onGlobalMessage = function(event) {
        if (event.source === global &&
          typeof event.data === "string" &&
          event.data.indexOf(messagePrefix) === 0) {
          runIfPresent(+event.data.slice(messagePrefix.length));
        }
      };

      if (global.addEventListener) {
        global.addEventListener("message", onGlobalMessage, false);
      } else {
        global.attachEvent("onmessage", onGlobalMessage);
      }

      registerImmediate = function(handle) {
        global.postMessage(messagePrefix + handle, "*");
      };
    }

    function installMessageChannelImplementation() {
      var channel = new MessageChannel();
      channel.port1.onmessage = function(event) {
        var handle = event.data;
        runIfPresent(handle);
      };

      registerImmediate = function(handle) {
        channel.port2.postMessage(handle);
      };
    }

    function installReadyStateChangeImplementation() {
      var html = doc.documentElement;
      registerImmediate = function(handle) {
        // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
        // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
        var script = doc.createElement("script");
        script.onreadystatechange = function() {
          runIfPresent(handle);
          script.onreadystatechange = null;
          html.removeChild(script);
          script = null;
        };
        html.appendChild(script);
      };
    }

    function installSetTimeoutImplementation() {
      registerImmediate = function(handle) {
        setTimeout(runIfPresent, 0, handle);
      };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
      // For Node.js before 0.9
      installNextTickImplementation();

    } else if (canUsePostMessage()) {
      // For non-IE10 modern browsers
      installPostMessageImplementation();

    } else if (global.MessageChannel) {
      // For web workers, where supported
      installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
      // For IE 6–8
      installReadyStateChangeImplementation();

    } else {
      // For older browsers
      installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
  }(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

  /*!
   * clipboard.js v1.5.9
   * https://zenorocha.github.io/clipboard.js
   *
   * Licensed MIT © Zeno Rocha
   */
  ! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
      var e;
      e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Clipboard = t()
    }
  }(function() {
    var t, e, n;
    return function t(e, n, o) {
      function r(c, s) {
        if (!n[c]) {
          if (!e[c]) {
            var a = "function" == typeof require && require;
            if (!s && a) return a(c, !0);
            if (i) return i(c, !0);
            var l = new Error("Cannot find module '" + c + "'");
            throw l.code = "MODULE_NOT_FOUND", l
          }
          var u = n[c] = {
            exports: {}
          };
          e[c][0].call(u.exports, function(t) {
            var n = e[c][1][t];
            return r(n ? n : t)
          }, u, u.exports, t, e, n, o)
        }
        return n[c].exports
      }
      for (var i = "function" == typeof require && require, c = 0; c < o.length; c++) r(o[c]);
      return r
    }({
      1: [function(t, e, n) {
        var o = t("matches-selector");
        e.exports = function(t, e, n) {
          for (var r = n ? t : t.parentNode; r && r !== document;) {
            if (o(r, e)) return r;
            r = r.parentNode
          }
        }
      }, {
        "matches-selector": 5
      }],
      2: [function(t, e, n) {
        function o(t, e, n, o, i) {
          var c = r.apply(this, arguments);
          return t.addEventListener(n, c, i), {
            destroy: function() {
              t.removeEventListener(n, c, i)
            }
          }
        }

        function r(t, e, n, o) {
          return function(n) {
            n.delegateTarget = i(n.target, e, !0), n.delegateTarget && o.call(t, n)
          }
        }
        var i = t("closest");
        e.exports = o
      }, {
        closest: 1
      }],
      3: [function(t, e, n) {
        n.node = function(t) {
          return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
        }, n.nodeList = function(t) {
          var e = Object.prototype.toString.call(t);
          return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
        }, n.string = function(t) {
          return "string" == typeof t || t instanceof String
        }, n.fn = function(t) {
          var e = Object.prototype.toString.call(t);
          return "[object Function]" === e
        }
      }, {}],
      4: [function(t, e, n) {
        function o(t, e, n) {
          if (!t && !e && !n) throw new Error("Missing required arguments");
          if (!s.string(e)) throw new TypeError("Second argument must be a String");
          if (!s.fn(n)) throw new TypeError("Third argument must be a Function");
          if (s.node(t)) return r(t, e, n);
          if (s.nodeList(t)) return i(t, e, n);
          if (s.string(t)) return c(t, e, n);
          throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
        }

        function r(t, e, n) {
          return t.addEventListener(e, n), {
            destroy: function() {
              t.removeEventListener(e, n)
            }
          }
        }

        function i(t, e, n) {
          return Array.prototype.forEach.call(t, function(t) {
            t.addEventListener(e, n)
          }), {
            destroy: function() {
              Array.prototype.forEach.call(t, function(t) {
                t.removeEventListener(e, n)
              })
            }
          }
        }

        function c(t, e, n) {
          return a(document.body, t, e, n)
        }
        var s = t("./is"),
          a = t("delegate");
        e.exports = o
      }, {
        "./is": 3,
        delegate: 2
      }],
      5: [function(t, e, n) {
        function o(t, e) {
          if (i) return i.call(t, e);
          for (var n = t.parentNode.querySelectorAll(e), o = 0; o < n.length; ++o)
            if (n[o] == t) return !0;
          return !1
        }
        var r = Element.prototype,
          i = r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector;
        e.exports = o
      }, {}],
      6: [function(t, e, n) {
        function o(t) {
          var e;
          if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) t.focus(), t.setSelectionRange(0, t.value.length), e = t.value;
          else {
            t.hasAttribute("contenteditable") && t.focus();
            var n = window.getSelection(),
              o = document.createRange();
            o.selectNodeContents(t), n.removeAllRanges(), n.addRange(o), e = n.toString()
          }
          return e
        }
        e.exports = o
      }, {}],
      7: [function(t, e, n) {
        function o() {}
        o.prototype = {
          on: function(t, e, n) {
            var o = this.e || (this.e = {});
            return (o[t] || (o[t] = [])).push({
              fn: e,
              ctx: n
            }), this
          },
          once: function(t, e, n) {
            function o() {
              r.off(t, o), e.apply(n, arguments)
            }
            var r = this;
            return o._ = e, this.on(t, o, n)
          },
          emit: function(t) {
            var e = [].slice.call(arguments, 1),
              n = ((this.e || (this.e = {}))[t] || []).slice(),
              o = 0,
              r = n.length;
            for (o; r > o; o++) n[o].fn.apply(n[o].ctx, e);
            return this
          },
          off: function(t, e) {
            var n = this.e || (this.e = {}),
              o = n[t],
              r = [];
            if (o && e)
              for (var i = 0, c = o.length; c > i; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
            return r.length ? n[t] = r : delete n[t], this
          }
        }, e.exports = o
      }, {}],
      8: [function(e, n, o) {
        ! function(r, i) {
          if ("function" == typeof t && t.amd) t(["module", "select"], i);
          else if ("undefined" != typeof o) i(n, e("select"));
          else {
            var c = {
              exports: {}
            };
            i(c, r.select), r.clipboardAction = c.exports
          }
        }(this, function(t, e) {
          "use strict";

          function n(t) {
            return t && t.__esModule ? t : {
              "default": t
            }
          }

          function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }
          var r = n(e),
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            } : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            },
            c = function() {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var o = e[n];
                  o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
              }
              return function(e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
              }
            }(),
            s = function() {
              function t(e) {
                o(this, t), this.resolveOptions(e), this.initSelection()
              }
              return t.prototype.resolveOptions = function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                this.action = e.action, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
              }, t.prototype.initSelection = function t() {
                if (this.text && this.target) throw new Error('Multiple attributes declared, use either "target" or "text"');
                if (this.text) this.selectFake();
                else {
                  if (!this.target) throw new Error('Missing required attributes, use either "target" or "text"');
                  this.selectTarget()
                }
              }, t.prototype.selectFake = function t() {
                var e = this,
                  n = "rtl" == document.documentElement.getAttribute("dir");
                this.removeFake(), this.fakeHandler = document.body.addEventListener("click", function() {
                  return e.removeFake()
                }), this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "fixed", this.fakeElem.style[n ? "right" : "left"] = "-9999px", this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, r.default)(this.fakeElem), this.copyText()
              }, t.prototype.removeFake = function t() {
                this.fakeHandler && (document.body.removeEventListener("click"), this.fakeHandler = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
              }, t.prototype.selectTarget = function t() {
                this.selectedText = (0, r.default)(this.target), this.copyText()
              }, t.prototype.copyText = function t() {
                var e = void 0;
                try {
                  e = document.execCommand(this.action)
                } catch (n) {
                  e = !1
                }
                this.handleResult(e)
              }, t.prototype.handleResult = function t(e) {
                e ? this.emitter.emit("success", {
                  action: this.action,
                  text: this.selectedText,
                  trigger: this.trigger,
                  clearSelection: this.clearSelection.bind(this)
                }) : this.emitter.emit("error", {
                  action: this.action,
                  trigger: this.trigger,
                  clearSelection: this.clearSelection.bind(this)
                })
              }, t.prototype.clearSelection = function t() {
                this.target && this.target.blur(), window.getSelection().removeAllRanges()
              }, t.prototype.destroy = function t() {
                this.removeFake()
              }, c(t, [{
                key: "action",
                set: function t() {
                  var e = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
                  if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                },
                get: function t() {
                  return this._action
                }
              }, {
                key: "target",
                set: function t(e) {
                  if (void 0 !== e) {
                    if (!e || "object" !== ("undefined" == typeof e ? "undefined" : i(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                    this._target = e
                  }
                },
                get: function t() {
                  return this._target
                }
              }]), t
            }();
          t.exports = s
        })
      }, {
        select: 6
      }],
      9: [function(e, n, o) {
        ! function(r, i) {
          if ("function" == typeof t && t.amd) t(["module", "./clipboard-action", "tiny-emitter", "good-listener"], i);
          else if ("undefined" != typeof o) i(n, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));
          else {
            var c = {
              exports: {}
            };
            i(c, r.clipboardAction, r.tinyEmitter, r.goodListener), r.clipboard = c.exports
          }
        }(this, function(t, e, n, o) {
          "use strict";

          function r(t) {
            return t && t.__esModule ? t : {
              "default": t
            }
          }

          function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }

          function c(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
          }

          function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }

          function a(t, e) {
            var n = "data-clipboard-" + t;
            if (e.hasAttribute(n)) return e.getAttribute(n)
          }
          var l = r(e),
            u = r(n),
            f = r(o),
            d = function(t) {
              function e(n, o) {
                i(this, e);
                var r = c(this, t.call(this));
                return r.resolveOptions(o), r.listenClick(n), r
              }
              return s(e, t), e.prototype.resolveOptions = function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText
              }, e.prototype.listenClick = function t(e) {
                var n = this;
                this.listener = (0, f.default)(e, "click", function(t) {
                  return n.onClick(t)
                })
              }, e.prototype.onClick = function t(e) {
                var n = e.delegateTarget || e.currentTarget;
                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l.default({
                  action: this.action(n),
                  target: this.target(n),
                  text: this.text(n),
                  trigger: n,
                  emitter: this
                })
              }, e.prototype.defaultAction = function t(e) {
                return a("action", e)
              }, e.prototype.defaultTarget = function t(e) {
                var n = a("target", e);
                return n ? document.querySelector(n) : void 0
              }, e.prototype.defaultText = function t(e) {
                return a("text", e)
              }, e.prototype.destroy = function t() {
                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
              }, e
            }(u.default);
          t.exports = d
        })
      }, {
        "./clipboard-action": 8,
        "good-listener": 4,
        "tiny-emitter": 7
      }]
    }, {}, [9])(9)
  });
  ! function(a, b) {
    function c(a) {
      return function() {
        var b = {
            method: a
          },
          c = Array.prototype.slice.call(arguments);
        /^get/.test(a) ? (d.assert(c.length > 0, "Get methods require a callback."), c.unshift(b)) : (/^set/.test(a) && (d.assert(0 !== c.length, "Set methods require a value."), b.value = c[0]), c = [b]), this.send.apply(this, c)
      }
    }
    var d = {};
    d.DEBUG = !1, d.VERSION = "0.0.11", d.CONTEXT = "player.js", d.POST_MESSAGE = !!a.postMessage, d.origin = function(b) {
      return "//" === b.substr(0, 2) && (b = a.location.protocol + b), b.split("/").slice(0, 3).join("/")
    }, d.addEvent = function(a, b, c) {
      a && (a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c)
    }, d.log = function() {
      d.log.history = d.log.history || [], d.log.history.push(arguments), a.console && d.DEBUG && a.console.log(Array.prototype.slice.call(arguments))
    }, d.isString = function(a) {
      return "[object String]" === Object.prototype.toString.call(a)
    }, d.isObject = function(a) {
      return "[object Object]" === Object.prototype.toString.call(a)
    }, d.isArray = function(a) {
      return "[object Array]" === Object.prototype.toString.call(a)
    }, d.isNone = function(a) {
      return null === a || void 0 === a
    }, d.has = function(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b)
    }, d.indexOf = function(a, b) {
      if (null == a) return -1;
      var c = 0,
        d = a.length;
      if (Array.prototype.IndexOf && a.indexOf === Array.prototype.IndexOf) return a.indexOf(b);
      for (; d > c; c++)
        if (a[c] === b) return c;
      return -1
    }, d.assert = function(a, b) {
      if (!a) throw b || "Player.js Assert Failed"
    }, d.Keeper = function() {
      this.init()
    }, d.Keeper.prototype.init = function() {
      this.data = {}
    }, d.Keeper.prototype.getUUID = function() {
      return "listener-xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(a) {
        var b = 16 * Math.random() | 0,
          c = "x" === a ? b : 3 & b | 8;
        return c.toString(16)
      })
    }, d.Keeper.prototype.has = function(a, b) {
      if (!this.data.hasOwnProperty(a)) return !1;
      if (d.isNone(b)) return !0;
      for (var c = this.data[a], e = 0; e < c.length; e++)
        if (c[e].id === b) return !0;
      return !1
    }, d.Keeper.prototype.add = function(a, b, c, d, e) {
      var f = {
        id: a,
        event: b,
        cb: c,
        ctx: d,
        one: e
      };
      this.has(b) ? this.data[b].push(f) : this.data[b] = [f]
    }, d.Keeper.prototype.execute = function(a, b, c, e) {
      if (!this.has(a, b)) return !1;
      for (var f = [], g = [], h = 0; h < this.data[a].length; h++) {
        var i = this.data[a][h];
        d.isNone(b) || !d.isNone(b) && i.id === b ? (g.push({
          cb: i.cb,
          ctx: i.ctx ? i.ctx : e,
          data: c
        }), i.one === !1 && f.push(i)) : f.push(i)
      }
      0 === f.length ? delete this.data[a] : this.data[a] = f;
      for (var j = 0; j < g.length; j++) {
        var k = g[j];
        k.cb.call(k.ctx, k.data)
      }
    }, d.Keeper.prototype.on = function(a, b, c, d) {
      this.add(a, b, c, d, !1)
    }, d.Keeper.prototype.one = function(a, b, c, d) {
      this.add(a, b, c, d, !0)
    }, d.Keeper.prototype.off = function(a, b) {
      var c = [];
      if (!this.data.hasOwnProperty(a)) return c;
      for (var e = [], f = 0; f < this.data[a].length; f++) {
        var g = this.data[a][f];
        d.isNone(b) || g.cb === b ? d.isNone(g.id) || c.push(g.id) : e.push(g)
      }
      return 0 === e.length ? delete this.data[a] : this.data[a] = e, c
    }, d.Player = function(a, b) {
      return this instanceof d.Player ? void this.init(a, b) : new d.Player(a, b)
    }, d.EVENTS = {
      READY: "ready",
      PLAY: "play",
      PAUSE: "pause",
      ENDED: "ended",
      TIMEUPDATE: "timeupdate",
      PROGRESS: "progress",
      ERROR: "error"
    }, d.EVENTS.all = function() {
      var a = [];
      for (var b in d.EVENTS) d.has(d.EVENTS, b) && d.isString(d.EVENTS[b]) && a.push(d.EVENTS[b]);
      return a
    }, d.METHODS = {
      PLAY: "play",
      PAUSE: "pause",
      GETPAUSED: "getPaused",
      MUTE: "mute",
      UNMUTE: "unmute",
      GETMUTED: "getMuted",
      SETVOLUME: "setVolume",
      GETVOLUME: "getVolume",
      GETDURATION: "getDuration",
      SETCURRENTTIME: "setCurrentTime",
      GETCURRENTTIME: "getCurrentTime",
      SETLOOP: "setLoop",
      GETLOOP: "getLoop",
      REMOVEEVENTLISTENER: "removeEventListener",
      ADDEVENTLISTENER: "addEventListener"
    }, d.METHODS.all = function() {
      var a = [];
      for (var b in d.METHODS) d.has(d.METHODS, b) && d.isString(d.METHODS[b]) && a.push(d.METHODS[b]);
      return a
    }, d.READIED = [], d.Player.prototype.init = function(c, e) {
      var f = this;
      d.isString(c) && (c = b.getElementById(c)), this.elem = c, this.origin = d.origin(c.src), this.keeper = new d.Keeper, this.isReady = !1, this.queue = [], this.events = d.EVENTS.all(), this.methods = d.METHODS.all(), d.POST_MESSAGE ? d.addEvent(a, "message", function(a) {
        f.receive(a)
      }) : d.log("Post Message is not Available."), d.indexOf(d.READIED, c.src) > -1 ? f.loaded = !0 : this.elem.onload = function() {
        f.loaded = !0
      }
    }, d.Player.prototype.send = function(a, b, c) {
      if (a.context = d.CONTEXT, a.version = d.VERSION, b) {
        var e = this.keeper.getUUID();
        a.listener = e, this.keeper.one(e, a.method, b, c)
      }
      return this.isReady || "ready" === a.value ? (d.log("Player.send", a, this.origin), this.loaded === !0 && this.elem.contentWindow.postMessage(JSON.stringify(a), this.origin), !0) : (d.log("Player.queue", a), this.queue.push(a), !1)
    }, d.Player.prototype.receive = function(a) {
      if (d.log("Player.receive", a), a.origin !== this.origin) return !1;
      var b;
      try {
        b = JSON.parse(a.data)
      } catch (c) {
        return !1
      }
      return b.context !== d.CONTEXT ? !1 : ("ready" === b.event && b.value && b.value.src === this.elem.src && this.ready(b), void(this.keeper.has(b.event, b.listener) && this.keeper.execute(b.event, b.listener, b.value, this)))
    }, d.Player.prototype.ready = function(a) {
      if (this.isReady === !0) return !1;
      a.value.events && (this.events = a.value.events), a.value.methods && (this.methods = a.value.methods), this.isReady = !0, this.loaded = !0;
      for (var b = 0; b < this.queue.length; b++) {
        var c = this.queue[b];
        d.log("Player.dequeue", c), "ready" === a.event && this.keeper.execute(c.event, c.listener, !0, this), this.send(c)
      }
      this.queue = []
    }, d.Player.prototype.on = function(a, b, c) {
      var d = this.keeper.getUUID();
      return "ready" === a ? this.keeper.one(d, a, b, c) : this.keeper.on(d, a, b, c), this.send({
        method: "addEventListener",
        value: a,
        listener: d
      }), !0
    }, d.Player.prototype.off = function(a, b) {
      var c = this.keeper.off(a, b);
      if (d.log("Player.off", c), c.length > 0)
        for (var e in c) return this.send({
          method: "removeEventListener",
          value: a,
          listener: c[e]
        }), !0;
      return !1
    }, d.Player.prototype.supports = function(a, b) {
      d.assert(d.indexOf(["method", "event"], a) > -1, 'evtOrMethod needs to be either "event" or "method" got ' + a), b = d.isArray(b) ? b : [b];
      for (var c = "event" === a ? this.events : this.methods, e = 0; e < b.length; e++)
        if (-1 === d.indexOf(c, b[e])) return !1;
      return !0
    };
    for (var e = 0, f = d.METHODS.all().length; f > e; e++) {
      var g = d.METHODS.all()[e];
      d.Player.prototype.hasOwnProperty(g) || (d.Player.prototype[g] = c(g))
    }
    a.playerjs = d, d.addEvent(a, "message", function(a) {
      var b;
      try {
        b = JSON.parse(a.data)
      } catch (c) {
        return !1
      }
      return b.context !== d.CONTEXT ? !1 : void("ready" === b.event && b.value && b.value.src && d.READIED.push(b.value.src))
    }), d.Receiver = function(a, b) {
      this.init(a, b)
    }, d.Receiver.prototype.init = function(c, e) {
      var f = this;
      this.isReady = !1, this.origin = d.origin(b.referrer), this.methods = {}, this.supported = {
        events: c ? c : d.EVENTS.all(),
        methods: e ? e : d.METHODS.all()
      }, this.eventListeners = {}, this.reject = !(a.self !== a.top && d.POST_MESSAGE), this.reject || d.addEvent(a, "message", function(a) {
        f.receive(a)
      })
    }, d.Receiver.prototype.receive = function(b) {
      if (b.origin !== this.origin) return !1;
      var c = {};
      if (d.isObject(b.data)) c = b.data;
      else try {
        c = a.JSON.parse(b.data)
      } catch (e) {
        d.log("JSON Parse Error", e)
      }
      if (d.log("Receiver.receive", b, c), !c.method) return !1;
      if (c.context !== d.CONTEXT) return !1;
      if (-1 === d.indexOf(d.METHODS.all(), c.method)) return this.emit("error", {
        code: 2,
        msg: 'Invalid Method "' + c.method + '"'
      }), !1;
      var f = d.isNone(c.listener) ? null : c.listener;
      if ("addEventListener" === c.method) this.eventListeners.hasOwnProperty(c.value) ? -1 === d.indexOf(this.eventListeners[c.value], f) && this.eventListeners[c.value].push(f) : this.eventListeners[c.value] = [f], "ready" === c.value && this.isReady && this.ready();
      else if ("removeEventListener" === c.method) {
        if (this.eventListeners.hasOwnProperty(c.value)) {
          var g = d.indexOf(this.eventListeners[c.value], f);
          g > -1 && this.eventListeners[c.value].splice(g, 1), 0 === this.eventListeners[c.value].length && delete this.eventListeners[c.value]
        }
      } else this.get(c.method, c.value, f)
    }, d.Receiver.prototype.get = function(a, b, c) {
      var d = this;
      if (!this.methods.hasOwnProperty(a)) return this.emit("error", {
        code: 3,
        msg: 'Method Not Supported"' + a + '"'
      }), !1;
      var e = this.methods[a];
      if ("get" === a.substr(0, 3)) {
        var f = function(b) {
          d.send(a, b, c)
        };
        e.call(this, f)
      } else e.call(this, b)
    }, d.Receiver.prototype.on = function(a, b) {
      this.methods[a] = b
    }, d.Receiver.prototype.send = function(b, c, e) {
      if (d.log("Receiver.send", b, c, e), this.reject) return d.log("Receiver.send.reject", b, c, e), !1;
      var f = {
        context: d.CONTEXT,
        version: d.VERSION,
        event: b
      };
      d.isNone(c) || (f.value = c), d.isNone(e) || (f.listener = e);
      var g = JSON.stringify(f);
      a.parent.postMessage(g, "" === this.origin ? "*" : this.origin)
    }, d.Receiver.prototype.emit = function(a, b) {
      if (!this.eventListeners.hasOwnProperty(a)) return !1;
      d.log("Instance.emit", a, b, this.eventListeners[a]);
      for (var c = 0; c < this.eventListeners[a].length; c++) {
        var e = this.eventListeners[a][c];
        this.send(a, b, e)
      }
      return !0
    }, d.Receiver.prototype.ready = function() {
      d.log("Receiver.ready"), this.isReady = !0;
      var b = {
        src: a.location.toString(),
        events: this.supported.events,
        methods: this.supported.methods
      };
      this.emit("ready", b) || this.send("ready", b)
    }, d.HTML5Adapter = function(a) {
      return this instanceof d.HTML5Adapter ? void this.init(a) : new d.HTML5Adapter(a)
    }, d.HTML5Adapter.prototype.init = function(a) {
      d.assert(a, "playerjs.VideoJSReceiver requires a video element");
      var b = this.receiver = new d.Receiver;
      a.addEventListener("playing", function() {
        b.emit("play")
      }), a.addEventListener("pause", function() {
        b.emit("pause")
      }), a.addEventListener("ended", function() {
        b.emit("ended")
      }), a.addEventListener("timeupdate", function() {
        b.emit("timeupdate", {
          seconds: a.currentTime,
          duration: a.duration
        })
      }), a.addEventListener("progress", function() {
        b.emit("buffered", {
          percent: a.buffered.length
        })
      }), b.on("play", function() {
        a.play()
      }), b.on("pause", function() {
        a.pause()
      }), b.on("getPaused", function(b) {
        b(a.paused)
      }), b.on("getCurrentTime", function(b) {
        b(a.currentTime)
      }), b.on("setCurrentTime", function(b) {
        a.currentTime = b
      }), b.on("getDuration", function(b) {
        b(a.duration)
      }), b.on("getVolume", function(b) {
        b(100 * a.volume)
      }), b.on("setVolume", function(b) {
        a.volume = b / 100
      }), b.on("mute", function() {
        a.muted = !0
      }), b.on("unmute", function() {
        a.muted = !1
      }), b.on("getMuted", function(b) {
        b(a.muted)
      }), b.on("getLoop", function(b) {
        b(a.loop)
      }), b.on("setLoop", function(b) {
        a.loop = b
      })
    }, d.HTML5Adapter.prototype.ready = function() {
      this.receiver.ready()
    }, d.JWPlayerAdapter = function(a) {
      return this instanceof d.JWPlayerAdapter ? void this.init(a) : new d.JWPlayerAdapter(a)
    }, d.JWPlayerAdapter.prototype.init = function(a) {
      d.assert(a, "playerjs.JWPlayerAdapter requires a player object");
      var b = this.receiver = new d.Receiver;
      this.looped = !1, a.onPause(function() {
        b.emit("pause")
      }), a.onPlay(function() {
        b.emit("play")
      }), a.onTime(function(a) {
        var c = a.position,
          d = a.duration;
        if (!c || !d) return !1;
        var e = {
          seconds: c,
          duration: d
        };
        b.emit("timeupdate", e)
      });
      var c = this;
      a.onComplete(function() {
        c.looped === !0 ? a.seek(0) : b.emit("ended")
      }), a.onError(function() {
        b.emit("error")
      }), b.on("play", function() {
        a.play(!0)
      }), b.on("pause", function() {
        a.pause(!0)
      }), b.on("getPaused", function(b) {
        b("PLAYING" !== a.getState())
      }), b.on("getCurrentTime", function(b) {
        b(a.getPosition())
      }), b.on("setCurrentTime", function(b) {
        a.seek(b)
      }), b.on("getDuration", function(b) {
        b(a.getDuration())
      }), b.on("getVolume", function(b) {
        b(a.getVolume())
      }), b.on("setVolume", function(b) {
        a.setVolume(b)
      }), b.on("mute", function() {
        a.setMute(!0)
      }), b.on("unmute", function() {
        a.setMute(!1)
      }), b.on("getMuted", function(b) {
        b(a.getMute() === !0)
      }), b.on("getLoop", function(a) {
        a(this.looped)
      }, this), b.on("setLoop", function(a) {
        this.looped = a
      }, this)
    }, d.JWPlayerAdapter.prototype.ready = function() {
      this.receiver.ready()
    }, d.MockAdapter = function() {
      return this instanceof d.MockAdapter ? void this.init() : new d.MockAdapter
    }, d.MockAdapter.prototype.init = function() {
      var a = {
          duration: 20,
          currentTime: 0,
          interval: null,
          timeupdate: function() {},
          volume: 100,
          mute: !1,
          playing: !1,
          loop: !1,
          play: function() {
            a.interval = setInterval(function() {
              a.currentTime += .25, a.timeupdate({
                seconds: a.currentTime,
                duration: a.duration
              })
            }, 250), a.playing = !0
          },
          pause: function() {
            clearInterval(a.interval), a.playing = !1
          }
        },
        b = this.receiver = new d.Receiver;
      b.on("play", function() {
        var b = this;
        a.play(), this.emit("play"), a.timeupdate = function(a) {
          b.emit("timeupdate", a)
        }
      }), b.on("pause", function() {
        a.pause(), this.emit("pause")
      }), b.on("getPaused", function(b) {
        b(!a.playing)
      }), b.on("getCurrentTime", function(b) {
        b(a.currentTime)
      }), b.on("setCurrentTime", function(b) {
        a.currentTime = b
      }), b.on("getDuration", function(b) {
        b(a.duration)
      }), b.on("getVolume", function(b) {
        b(a.volume)
      }), b.on("setVolume", function(b) {
        a.volume = b
      }), b.on("mute", function() {
        a.mute = !0
      }), b.on("unmute", function() {
        a.mute = !1
      }), b.on("getMuted", function(b) {
        b(a.mute)
      }), b.on("getLoop", function(b) {
        b(a.loop)
      }), b.on("setLoop", function(b) {
        a.loop = b
      })
    }, d.MockAdapter.prototype.ready = function() {
      this.receiver.ready()
    }, d.SublimeAdapter = function(a) {
      return this instanceof d.SublimeAdapter ? void this.init(a) : new d.SublimeAdapter(a)
    }, d.SublimeAdapter.prototype.events = [d.EVENTS.READY, d.EVENTS.PLAY, d.EVENTS.PAUSE, d.EVENTS.ENDED, d.EVENTS.TIMEUPDATE, d.EVENTS.ERROR], d.SublimeAdapter.prototype.methods = [d.METHODS.PLAY, d.METHODS.PAUSE, d.METHODS.GETDURATION, d.METHODS.SETCURRENTTIME, d.METHODS.GETCURRENTTIME, d.METHODS.REMOVEEVENTLISTENER, d.METHODS.ADDEVENTLISTENER], d.SublimeAdapter.prototype.init = function(a) {
      d.assert(a, "playerjs.SublimeAdapter requires a player object");
      var b = this.receiver = new d.Receiver(this.events, this.methods);
      a.on("pause", function() {
        b.emit("pause")
      }), a.on("play", function() {
        b.emit("play")
      }), a.on("timeUpdate", function(a, c) {
        var d = a.duration();
        if (!c || !d) return !1;
        var e = {
          seconds: c,
          duration: d
        };
        b.emit("timeupdate", e)
      }), a.on("end", function() {
        b.emit("ended")
      }), b.on("play", function() {
        a.play()
      }), b.on("pause", function() {
        a.pause()
      }), b.on("getCurrentTime", function(b) {
        b(a.playbackTime())
      }), b.on("setCurrentTime", function(b) {
        a.seekTo(b)
      }), b.on("getDuration", function(b) {
        b(a.duration())
      })
    }, d.SublimeAdapter.prototype.ready = function() {
      this.receiver.ready()
    }, d.VideoJSAdapter = function(a) {
      return this instanceof d.VideoJSAdapter ? void this.init(a) : new d.VideoJSAdapter(a)
    }, d.VideoJSAdapter.prototype.init = function(a) {
      d.assert(a, "playerjs.VideoJSReceiver requires a player object");
      var b = this.receiver = new d.Receiver;
      a.on("pause", function() {
        b.emit("pause")
      }), a.on("play", function() {
        b.emit("play")
      }), a.on("timeupdate", function(c) {
        var d = a.currentTime(),
          e = a.duration();
        if (!d || !e) return !1;
        var f = {
          seconds: d,
          duration: e
        };
        b.emit("timeupdate", f)
      }), a.on("ended", function() {
        b.emit("ended")
      }), a.on("error", function() {
        b.emit("error")
      }), b.on("play", function() {
        a.play()
      }), b.on("pause", function() {
        a.pause()
      }), b.on("getPaused", function(b) {
        b(a.paused())
      }), b.on("getCurrentTime", function(b) {
        b(a.currentTime())
      }), b.on("setCurrentTime", function(b) {
        a.currentTime(b)
      }), b.on("getDuration", function(b) {
        b(a.duration())
      }), b.on("getVolume", function(b) {
        b(100 * a.volume())
      }), b.on("setVolume", function(b) {
        a.volume(b / 100)
      }), b.on("mute", function() {
        a.volume(0)
      }), b.on("unmute", function() {
        a.volume(1)
      }), b.on("getMuted", function(b) {
        b(0 === a.volume())
      }), b.on("getLoop", function(b) {
        b(a.loop())
      }), b.on("setLoop", function(b) {
        a.loop(b)
      })
    }, d.VideoJSAdapter.prototype.ready = function() {
      this.receiver.ready()
    }
  }(window, document);

  /*!

   handlebars v2.0.0

   Copyright (C) 2011-2014 by Yehuda Katz

   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE.

   @license
   */
  ! function(a, b) {
    "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? module.exports = b() : a.Handlebars = a.Handlebars || b()
  }(this, function() {
    var a = function() {
        "use strict";

        function a(a) {
          this.string = a
        }
        var b;
        return a.prototype.toString = function() {
          return "" + this.string
        }, b = a
      }(),
      b = function(a) {
        "use strict";

        function b(a) {
          return i[a]
        }

        function c(a) {
          for (var b = 1; b < arguments.length; b++)
            for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
          return a
        }

        function d(a) {
          return a instanceof h ? a.toString() : null == a ? "" : a ? (a = "" + a, k.test(a) ? a.replace(j, b) : a) : a + ""
        }

        function e(a) {
          return a || 0 === a ? n(a) && 0 === a.length ? !0 : !1 : !0
        }

        function f(a, b) {
          return (a ? a + "." : "") + b
        }
        var g = {},
          h = a,
          i = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
          },
          j = /[&<>"'`]/g,
          k = /[&<>"'`]/;
        g.extend = c;
        var l = Object.prototype.toString;
        g.toString = l;
        var m = function(a) {
          return "function" == typeof a
        };
        m(/x/) && (m = function(a) {
          return "function" == typeof a && "[object Function]" === l.call(a)
        });
        var m;
        g.isFunction = m;
        var n = Array.isArray || function(a) {
            return a && "object" == typeof a ? "[object Array]" === l.call(a) : !1
          };
        return g.isArray = n, g.escapeExpression = d, g.isEmpty = e, g.appendContextPath = f, g
      }(a),
      c = function() {
        "use strict";

        function a(a, b) {
          var d;
          b && b.firstLine && (d = b.firstLine, a += " - " + d + ":" + b.firstColumn);
          for (var e = Error.prototype.constructor.call(this, a), f = 0; f < c.length; f++) this[c[f]] = e[c[f]];
          d && (this.lineNumber = d, this.column = b.firstColumn)
        }
        var b, c = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        return a.prototype = new Error, b = a
      }(),
      d = function(a, b) {
        "use strict";

        function c(a, b) {
          this.helpers = a || {}, this.partials = b || {}, d(this)
        }

        function d(a) {
          a.registerHelper("helperMissing", function() {
            if (1 === arguments.length) return void 0;
            throw new g("Missing helper: '" + arguments[arguments.length - 1].name + "'")
          }), a.registerHelper("blockHelperMissing", function(b, c) {
            var d = c.inverse,
              e = c.fn;
            if (b === !0) return e(this);
            if (b === !1 || null == b) return d(this);
            if (k(b)) return b.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c)) : d(this);
            if (c.data && c.ids) {
              var g = q(c.data);
              g.contextPath = f.appendContextPath(c.data.contextPath, c.name), c = {
                data: g
              }
            }
            return e(b, c)
          }), a.registerHelper("each", function(a, b) {
            if (!b) throw new g("Must pass iterator to #each");
            var c, d, e = b.fn,
              h = b.inverse,
              i = 0,
              j = "";
            if (b.data && b.ids && (d = f.appendContextPath(b.data.contextPath, b.ids[0]) + "."), l(a) && (a = a.call(this)), b.data && (c = q(b.data)), a && "object" == typeof a)
              if (k(a))
                for (var m = a.length; m > i; i++) c && (c.index = i, c.first = 0 === i, c.last = i === a.length - 1, d && (c.contextPath = d + i)), j += e(a[i], {
                  data: c
                });
              else
                for (var n in a) a.hasOwnProperty(n) && (c && (c.key = n, c.index = i, c.first = 0 === i, d && (c.contextPath = d + n)), j += e(a[n], {
                  data: c
                }), i++);
            return 0 === i && (j = h(this)), j
          }), a.registerHelper("if", function(a, b) {
            return l(a) && (a = a.call(this)), !b.hash.includeZero && !a || f.isEmpty(a) ? b.inverse(this) : b.fn(this)
          }), a.registerHelper("unless", function(b, c) {
            return a.helpers["if"].call(this, b, {
              fn: c.inverse,
              inverse: c.fn,
              hash: c.hash
            })
          }), a.registerHelper("with", function(a, b) {
            l(a) && (a = a.call(this));
            var c = b.fn;
            if (f.isEmpty(a)) return b.inverse(this);
            if (b.data && b.ids) {
              var d = q(b.data);
              d.contextPath = f.appendContextPath(b.data.contextPath, b.ids[0]), b = {
                data: d
              }
            }
            return c(a, b)
          }), a.registerHelper("log", function(b, c) {
            var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
            a.log(d, b)
          }), a.registerHelper("lookup", function(a, b) {
            return a && a[b]
          })
        }
        var e = {},
          f = a,
          g = b,
          h = "2.0.0";
        e.VERSION = h;
        var i = 6;
        e.COMPILER_REVISION = i;
        var j = {
          1: "<= 1.0.rc.2",
          2: "== 1.0.0-rc.3",
          3: "== 1.0.0-rc.4",
          4: "== 1.x.x",
          5: "== 2.0.0-alpha.x",
          6: ">= 2.0.0-beta.1"
        };
        e.REVISION_CHANGES = j;
        var k = f.isArray,
          l = f.isFunction,
          m = f.toString,
          n = "[object Object]";
        e.HandlebarsEnvironment = c, c.prototype = {
          constructor: c,
          logger: o,
          log: p,
          registerHelper: function(a, b) {
            if (m.call(a) === n) {
              if (b) throw new g("Arg not supported with multiple helpers");
              f.extend(this.helpers, a)
            } else this.helpers[a] = b
          },
          unregisterHelper: function(a) {
            delete this.helpers[a]
          },
          registerPartial: function(a, b) {
            m.call(a) === n ? f.extend(this.partials, a) : this.partials[a] = b
          },
          unregisterPartial: function(a) {
            delete this.partials[a]
          }
        };
        var o = {
          methodMap: {
            0: "debug",
            1: "info",
            2: "warn",
            3: "error"
          },
          DEBUG: 0,
          INFO: 1,
          WARN: 2,
          ERROR: 3,
          level: 3,
          log: function(a, b) {
            if (o.level <= a) {
              var c = o.methodMap[a];
              "undefined" != typeof console && console[c] && console[c].call(console, b)
            }
          }
        };
        e.logger = o;
        var p = o.log;
        e.log = p;
        var q = function(a) {
          var b = f.extend({}, a);
          return b._parent = a, b
        };
        return e.createFrame = q, e
      }(b, c),
      e = function(a, b, c) {
        "use strict";

        function d(a) {
          var b = a && a[0] || 1,
            c = m;
          if (b !== c) {
            if (c > b) {
              var d = n[c],
                e = n[b];
              throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
            }
            throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
          }
        }

        function e(a, b) {
          if (!b) throw new l("No environment passed to template");
          if (!a || !a.main) throw new l("Unknown template object: " + typeof a);
          b.VM.checkRevision(a.compiler);
          var c = function(c, d, e, f, g, h, i, j, m) {
              g && (f = k.extend({}, f, g));
              var n = b.VM.invokePartial.call(this, c, e, f, h, i, j, m);
              if (null == n && b.compile) {
                var o = {
                  helpers: h,
                  partials: i,
                  data: j,
                  depths: m
                };
                i[e] = b.compile(c, {
                  data: void 0 !== j,
                  compat: a.compat
                }, b), n = i[e](f, o)
              }
              if (null != n) {
                if (d) {
                  for (var p = n.split("\n"), q = 0, r = p.length; r > q && (p[q] || q + 1 !== r); q++) p[q] = d + p[q];
                  n = p.join("\n")
                }
                return n
              }
              throw new l("The partial " + e + " could not be compiled when running in runtime-only mode")
            },
            d = {
              lookup: function(a, b) {
                for (var c = a.length, d = 0; c > d; d++)
                  if (a[d] && null != a[d][b]) return a[d][b]
              },
              lambda: function(a, b) {
                return "function" == typeof a ? a.call(b) : a
              },
              escapeExpression: k.escapeExpression,
              invokePartial: c,
              fn: function(b) {
                return a[b]
              },
              programs: [],
              program: function(a, b, c) {
                var d = this.programs[a],
                  e = this.fn(a);
                return b || c ? d = f(this, a, e, b, c) : d || (d = this.programs[a] = f(this, a, e)), d
              },
              data: function(a, b) {
                for (; a && b--;) a = a._parent;
                return a
              },
              merge: function(a, b) {
                var c = a || b;
                return a && b && a !== b && (c = k.extend({}, b, a)), c
              },
              noop: b.VM.noop,
              compilerInfo: a.compiler
            },
            e = function(b, c) {
              c = c || {};
              var f = c.data;
              e._setup(c), !c.partial && a.useData && (f = i(b, f));
              var g;
              return a.useDepths && (g = c.depths ? [b].concat(c.depths) : [b]), a.main.call(d, b, d.helpers, d.partials, f, g)
            };
          return e.isTop = !0, e._setup = function(c) {
            c.partial ? (d.helpers = c.helpers, d.partials = c.partials) : (d.helpers = d.merge(c.helpers, b.helpers), a.usePartial && (d.partials = d.merge(c.partials, b.partials)))
          }, e._child = function(b, c, e) {
            if (a.useDepths && !e) throw new l("must pass parent depths");
            return f(d, b, a[b], c, e)
          }, e
        }

        function f(a, b, c, d, e) {
          var f = function(b, f) {
            return f = f || {}, c.call(a, b, a.helpers, a.partials, f.data || d, e && [b].concat(e))
          };
          return f.program = b, f.depth = e ? e.length : 0, f
        }

        function g(a, b, c, d, e, f, g) {
          var h = {
            partial: !0,
            helpers: d,
            partials: e,
            data: f,
            depths: g
          };
          if (void 0 === a) throw new l("The partial " + b + " could not be found");
          return a instanceof Function ? a(c, h) : void 0
        }

        function h() {
          return ""
        }

        function i(a, b) {
          return b && "root" in b || (b = b ? o(b) : {}, b.root = a), b
        }
        var j = {},
          k = a,
          l = b,
          m = c.COMPILER_REVISION,
          n = c.REVISION_CHANGES,
          o = c.createFrame;
        return j.checkRevision = d, j.template = e, j.program = f, j.invokePartial = g, j.noop = h, j
      }(b, c, d),
      f = function(a, b, c, d, e) {
        "use strict";
        var f, g = a,
          h = b,
          i = c,
          j = d,
          k = e,
          l = function() {
            var a = new g.HandlebarsEnvironment;
            return j.extend(a, g), a.SafeString = h, a.Exception = i, a.Utils = j, a.escapeExpression = j.escapeExpression, a.VM = k, a.template = function(b) {
              return k.template(b, a)
            }, a
          },
          m = l();
        return m.create = l, m["default"] = m, f = m
      }(d, a, c, b, e);
    return f
  });
  (function() {

    /**
     * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
     * Available via the MIT or new BSD license.
     * see: http://github.com/jrburke/almond for details
     */
    //Going sloppy to avoid 'use strict' string cost, but strict practices should
    //be followed.
    /*jslint sloppy: true */
    /*global setTimeout: false */

    var requirejs, require, define;
    (function(undef) {
      var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

      function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
      }

      /**
       * Given a relative module name, like ./something, normalize it to
       * a real name that can be mapped to a path.
       * @param {String} name the relative name
       * @param {String} baseName a real name that the name arg is relative
       * to.
       * @returns {String} normalized name
       */
      function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
          foundI, foundStarMap, starI, i, j, part,
          baseParts = baseName && baseName.split("/"),
          map = config.map,
          starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
          //If have a base name, try to normalize against it,
          //otherwise, assume it is a top-level require that will
          //be relative to baseUrl in the end.
          if (baseName) {
            name = name.split('/');
            lastIndex = name.length - 1;

            // Node .js allowance:
            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
              name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
            }

            //Lop off the last part of baseParts, so that . matches the
            //"directory" and not name of the baseName's module. For instance,
            //baseName of "one/two/three", maps to "one/two/three.js", but we
            //want the directory, "one/two" for this normalization.
            name = baseParts.slice(0, baseParts.length - 1).concat(name);

            //start trimDots
            for (i = 0; i < name.length; i += 1) {
              part = name[i];
              if (part === ".") {
                name.splice(i, 1);
                i -= 1;
              } else if (part === "..") {
                if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                  //End of the line. Keep at least one non-dot
                  //path segment at the front so it can be mapped
                  //correctly to disk. Otherwise, there is likely
                  //no path mapping for a path starting with '..'.
                  //This can still fail, but catches the most reasonable
                  //uses of ..
                  break;
                } else if (i > 0) {
                  name.splice(i - 1, 2);
                  i -= 2;
                }
              }
            }
            //end trimDots

            name = name.join("/");
          } else if (name.indexOf('./') === 0) {
            // No baseName, so this is ID is resolved relative
            // to baseUrl, pull off the leading dot.
            name = name.substring(2);
          }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
          nameParts = name.split('/');

          for (i = nameParts.length; i > 0; i -= 1) {
            nameSegment = nameParts.slice(0, i).join("/");

            if (baseParts) {
              //Find the longest baseName segment match in the config.
              //So, do joins on the biggest to smallest lengths of baseParts.
              for (j = baseParts.length; j > 0; j -= 1) {
                mapValue = map[baseParts.slice(0, j).join('/')];

                //baseName segment has  config, find if it has one for
                //this name.
                if (mapValue) {
                  mapValue = mapValue[nameSegment];
                  if (mapValue) {
                    //Match, update name to the new value.
                    foundMap = mapValue;
                    foundI = i;
                    break;
                  }
                }
              }
            }

            if (foundMap) {
              break;
            }

            //Check for a star map match, but just hold on to it,
            //if there is a shorter segment match later in a matching
            //config, then favor over this star map.
            if (!foundStarMap && starMap && starMap[nameSegment]) {
              foundStarMap = starMap[nameSegment];
              starI = i;
            }
          }

          if (!foundMap && foundStarMap) {
            foundMap = foundStarMap;
            foundI = starI;
          }

          if (foundMap) {
            nameParts.splice(0, foundI, foundMap);
            name = nameParts.join('/');
          }
        }

        return name;
      }

      function makeRequire(relName, forceSync) {
        return function() {
          //A version of a require function that passes a moduleName
          //value for items that may need to
          //look up paths relative to the moduleName
          var args = aps.call(arguments, 0);

          //If first arg is not require('string'), and there is only
          //one arg, it is the array form without a callback. Insert
          //a null so that the following concat is correct.
          if (typeof args[0] !== 'string' && args.length === 1) {
            args.push(null);
          }
          return req.apply(undef, args.concat([relName, forceSync]));
        };
      }

      function makeNormalize(relName) {
        return function(name) {
          return normalize(name, relName);
        };
      }

      function makeLoad(depName) {
        return function(value) {
          defined[depName] = value;
        };
      }

      function callDep(name) {
        if (hasProp(waiting, name)) {
          var args = waiting[name];
          delete waiting[name];
          defining[name] = true;
          main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
          throw new Error('No ' + name);
        }
        return defined[name];
      }

      //Turns a plugin!resource to [plugin, resource]
      //with the plugin being undefined if the name
      //did not have a plugin prefix.
      function splitPrefix(name) {
        var prefix,
          index = name ? name.indexOf('!') : -1;
        if (index > -1) {
          prefix = name.substring(0, index);
          name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
      }

      /**
       * Makes a name map, normalizing the name, and using a plugin
       * for normalization if necessary. Grabs a ref to plugin
       * too, as an optimization.
       */
      makeMap = function(name, relName) {
        var plugin,
          parts = splitPrefix(name),
          prefix = parts[0];

        name = parts[1];

        if (prefix) {
          prefix = normalize(prefix, relName);
          plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
          if (plugin && plugin.normalize) {
            name = plugin.normalize(name, makeNormalize(relName));
          } else {
            name = normalize(name, relName);
          }
        } else {
          name = normalize(name, relName);
          parts = splitPrefix(name);
          prefix = parts[0];
          name = parts[1];
          if (prefix) {
            plugin = callDep(prefix);
          }
        }

        //Using ridiculous property names for space reasons
        return {
          f: prefix ? prefix + '!' + name : name, //fullName
          n: name,
          pr: prefix,
          p: plugin
        };
      };

      function makeConfig(name) {
        return function() {
          return (config && config.config && config.config[name]) || {};
        };
      }

      handlers = {
        require: function(name) {
          return makeRequire(name);
        },
        exports: function(name) {
          var e = defined[name];
          if (typeof e !== 'undefined') {
            return e;
          } else {
            return (defined[name] = {});
          }
        },
        module: function(name) {
          return {
            id: name,
            uri: '',
            exports: defined[name],
            config: makeConfig(name)
          };
        }
      };

      main = function(name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
          args = [],
          callbackType = typeof callback,
          usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
          //Pull out the defined dependencies and pass the ordered
          //values to the callback.
          //Default to [require, exports, module] if no deps
          deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
          for (i = 0; i < deps.length; i += 1) {
            map = makeMap(deps[i], relName);
            depName = map.f;

            //Fast path CommonJS standard dependencies.
            if (depName === "require") {
              args[i] = handlers.require(name);
            } else if (depName === "exports") {
              //CommonJS module spec 1.1
              args[i] = handlers.exports(name);
              usingExports = true;
            } else if (depName === "module") {
              //CommonJS module spec 1.1
              cjsModule = args[i] = handlers.module(name);
            } else if (hasProp(defined, depName) ||
              hasProp(waiting, depName) ||
              hasProp(defining, depName)) {
              args[i] = callDep(depName);
            } else if (map.p) {
              map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
              args[i] = defined[depName];
            } else {
              throw new Error(name + ' missing ' + depName);
            }
          }

          ret = callback ? callback.apply(defined[name], args) : undefined;

          if (name) {
            //If setting exports via "module" is in play,
            //favor that over return value and exports. After that,
            //favor a non-undefined return value over exports use.
            if (cjsModule && cjsModule.exports !== undef &&
              cjsModule.exports !== defined[name]) {
              defined[name] = cjsModule.exports;
            } else if (ret !== undef || !usingExports) {
              //Use the return value from the function.
              defined[name] = ret;
            }
          }
        } else if (name) {
          //May just be an object definition for the module. Only
          //worry about defining if have a module name.
          defined[name] = callback;
        }
      };

      requirejs = require = req = function(deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
          if (handlers[deps]) {
            //callback in this case is really relName
            return handlers[deps](callback);
          }
          //Just return the module wanted. In this scenario, the
          //deps arg is the module name, and second arg (if passed)
          //is just the relName.
          //Normalize module name, if it contains . or ..
          return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
          //deps is a config object, not an array.
          config = deps;
          if (config.deps) {
            req(config.deps, config.callback);
          }
          if (!callback) {
            return;
          }

          if (callback.splice) {
            //callback is an array, which means it is a dependency list.
            //Adjust args if there are dependencies
            deps = callback;
            callback = relName;
            relName = null;
          } else {
            deps = undef;
          }
        }

        //Support require(['a'])
        callback = callback || function() {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
          relName = forceSync;
          forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
          main(undef, deps, callback, relName);
        } else {
          //Using a non-zero value because of concern for what old browsers
          //do, and latest browsers "upgrade" to 4 if lower value is used:
          //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
          //If want a value immediately, use require('id') instead -- something
          //that works in almond on the global level, but not guaranteed and
          //unlikely to work in other AMD implementations.
          setTimeout(function() {
            main(undef, deps, callback, relName);
          }, 4);
        }

        return req;
      };

      /**
       * Just drops the config on the floor, but returns req in case
       * the config return value is used.
       */
      req.config = function(cfg) {
        return req(cfg);
      };

      /**
       * Expose module registry for debugging and tooling
       */
      requirejs._defined = defined;

      define = function(name, deps, callback) {
        if (typeof name !== 'string') {
          throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
          //deps is not an array, so probably means
          //an object literal or factory function for
          //the value. Adjust args.
          callback = deps;
          deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
          waiting[name] = [name, deps, callback];
        }
      };

      define.amd = {
        jQuery: true
      };
    }());

    /**
     * request-frame-es2015 - requestAnimationFrame & cancelAnimationFrame polyfill for optimal cross-browser development as a ES2015 module.
     * @version v1.4.3
     * @license MIT
     * Copyright Julien Etienne
     */
    define("request-frame", ["exports"], function(e) {
      "use strict";

      function n(e) {
        function n() {
          function e(e, n, t) {
            return !(!e && !n) && (console.warn(t), !0)
          }

          function n() {
            return !!w && e(t, i, u)
          }
          var t = window.webkitRequestAnimationFrame,
            i = window.requestAnimationFrame,
            r = screen.width <= 768,
            o = !(t && i),
            a = !window.performance,
            u = "setTimeout is being used as a substitiue forrequestAnimationFrame due to a bug within iOS 6 builds",
            w = o && r && a;
          return n()
        }

        function t(e) {
          clearTimeout(e)
        }

        function i(e) {
          var n = Date.now(),
            t = Math.max(p + 16, n);
          return setTimeout(function() {
            e(p = t)
          }, t - n)
        }

        function r() {
          return Array.prototype.filter ? (c = window["request" + d] || window[f.filter(function(e) {
              if (void 0 !== window[e + l]) return e
            }) + l] || i, n() ? i : c) : i
        }

        function o() {
          function e(e, n) {
            for (var t; n < e.length; n++)
              if (window[e[n]]) {
                t = window[e[n]];
                break
              }
            return t
          }
          var i = [];
          return Array.prototype.map ? (f.map(function(e) {
            return ["Cancel", "CancelRequest"].map(function(n) {
              i.push(e + n + d)
            })
          }), m = window["cancel" + d] || e(i, 0) || t, n() ? t : m) : t
        }

        function a() {
          return b ? i : r()
        }

        function u() {
          return o()
        }

        function w() {
          b ? (window.requestAnimationFrame = i, window.cancelAnimationFrame = t) : (window.requestAnimationFrame = r(), window.cancelAnimationFrame = o())
        }
        var c, m, s, f = ["moz", "webkit"],
          d = "AnimationFrame",
          l = "Request" + d,
          p = 0,
          q = window.mozRequestAnimationFrame,
          A = window.mozCancelAnimationFrame,
          b = q && !A;
        switch (Date.now || (Date.now = function() {
          return (new Date).getTime()
        }), e) {
          case "request":
          case "":
            s = a();
            break;
          case "cancel":
            s = u();
            break;
          case "native":
            w();
            break;
          default:
            throw new Error("RequestFrame parameter is not a type.")
        }
        return s
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = n
    });
    define("art19-web-player/ad-pod", ["exports", "module", "art19-web-player/advertisement"], function(t, e, i) {
      "use strict";
      var r, n = function(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }(i),
        s = function(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        };
      r = function() {
        function t(t, e) {
          this.player = t, this.pod = e, this.skipCurrentAd = s(this.skipCurrentAd, this), this.runNextItem = s(this.runNextItem, this), this.prepare = s(this.prepare, this), this.podPlaybackComplete = s(this.podPlaybackComplete, this), this.play = s(this.play, this), this.advertisementStarted = s(this.advertisementStarted, this), this.advertisementEnded = s(this.advertisementEnded, this), this.podId = this.player.audioContextId + "-" + this.pod.id, this.startPosition = this.pod.start_position, this.emitter = new EventEmitter, this.isPreRoll = 0 === this.startPosition, this.isPostRoll = null === this.startPosition, this.prepare()
        }
        return t.prototype.advertisementEnded = function(t, e) {
          return this.currentAdvertisement = null, this.emitter.emit("ad-ended", this, t, e), this.player.playerApi.sendTelemetry("ended", e, t.ad.tracking_url), this.runNextItem(t)
        }, t.prototype.advertisementStarted = function(t, e) {
          return this.currentAdvertisement = t, this.emitter.emit("ad-play", this, t, e), this.player.playerApi.sendTelemetry("play", e, t.ad.tracking_url)
        }, t.prototype.play = function() {
          this.emitter.emit("play", this), this.ads.length ? this.ads[0].play() : this.podPlaybackComplete()
        }, t.prototype.podPlaybackComplete = function() {
          this.emitter.emit("ended", this)
        }, t.prototype.prepare = function() {
          var t, e, i, r, s, a;
          for (this.ads = [], this.duration = 0, a = this.pod.ads, i = e = 0, s = a.length; e < s; i = ++e) t = a[i], r = new n.default(t, this.player.awpContainer, this.duration, i + 1, this.player.audioPlayback), r.emitter.on("timeupdate", function(t) {
            return function(e, i) {
              return t.emitter.emit("ad-timeupdate", t, e, i)
            }
          }(this)), r.emitter.on("play", function(t) {
            return function(e, i) {
              return t.advertisementStarted(e, i)
            }
          }(this)), r.emitter.on("pause", function(t) {
            return function(e, i) {
              return t.emitter.emit("ad-paused", t, e, i), t.player.playerApi.sendTelemetry("pause", i, e.ad.tracking_url)
            }
          }(this)), r.emitter.on("ended", function(t) {
            return function(e, i) {
              return t.advertisementEnded(e, i)
            }
          }(this)), r.emitter.on("skipped", function(t) {
            return function(e) {
              return t.runNextItem(e)
            }
          }(this)), this.duration += r.duration, this.ads.push(r)
        }, t.prototype.runNextItem = function(t) {
          var e, i;
          return e = this.ads.indexOf(t), e !== this.ads.length - 1 ? (i = this.ads[e + 1], i.play()) : this.podPlaybackComplete()
        }, t.prototype.skipCurrentAd = function() {
          if (this.currentAdvertisement) return this.runNextItem(this.currentAdvertisement)
        }, t
      }(), e.exports = r
    });
    define("art19-web-player/advertisement", ["exports", "module"], function(t, i) {
      "use strict";
      var e, s = function(t, i) {
        return function() {
          return t.apply(i, arguments)
        }
      };
      e = function() {
        function t(t, i, e, n, a) {
          var o, h, u, d, r, l;
          for (this.ad = t, this.container = i, this.startAt = e, this.podPosition = n, this.audioPlayback = a, this.onTimeUpdate = s(this.onTimeUpdate, this), this.onEnded = s(this.onEnded, this), this.onPause = s(this.onPause, this), this.onPlay = s(this.onPlay, this), this.play = s(this.play, this), this.baseId = this.ad.id + "-" + (new Date).getTime() + "-" + Math.floor(1e4 * Math.random()), this.id = this.ad.id, this.emitter = new EventEmitter, this.audioSequence = [], this.duration = 0, this.firstContextId = void 0, this.offsets = {}, this.audioUrls = {}, u = this.ad.segments, o = 0, h = u.length; o < h; o++) d = u[o], null != (l = this.audioPlayback.firstUsableMediaUrl(null != d ? d.media : void 0)) && (r = this.baseId + "-" + d.id, this.offsets[r] = this.duration, this.duration += d.duration, this.audioUrls[r] = l, this.audioSequence.push(r), this.firstContextId || (this.firstContextId = r));
          this.audioPlayback.emitter.on("play", this.onPlay), this.audioPlayback.emitter.on("pause", this.onPause), this.audioPlayback.emitter.on("ended", this.onEnded), this.audioPlayback.emitter.on("timeupdate", this.onTimeUpdate)
        }
        return t.prototype.play = function() {
          var t;
          return 0 === this.audioSequence.length ? this.emitter.emit("skipped", this) : this.currentSegment ? this.audioPlayback.play() : (t = this.audioSequence[0], this.audioPlayback.playFile(this.audioUrls[t], 0, t))
        }, t.prototype.onPlay = function(t, i, e) {
          -1 !== this.audioSequence.indexOf(i) && (this.emitter.emit("play", this, this.offsets[i] + e.target.currentTime), this.currentSegment = i)
        }, t.prototype.onPause = function(t, i, e) {
          -1 !== this.audioSequence.indexOf(i) && this.emitter.emit("pause", this, this.offsets[i] + e.target.currentTime)
        }, t.prototype.onEnded = function(t, i, e) {
          var s, n;
          if (-1 !== this.audioSequence.indexOf(i)) return this.currentSegment = null, s = this.audioSequence.indexOf(i), s === this.audioSequence.length - 1 ? this.emitter.emit("ended", this, this.offsets[i] + e.target.currentTime) : -1 !== s ? (n = this.audioSequence[s + 1], this.audioPlayback.playFile(this.audioUrls[n], 0, n)) : void 0
        }, t.prototype.onTimeUpdate = function(t, i, e) {
          if (-1 !== this.audioSequence.indexOf(i)) return this.emitter.emit("timeupdate", this, this.offsets[i] + e.target.currentTime)
        }, t
      }(), i.exports = e
    });
    define("art19-web-player/art19-artwork-player", ["exports", "module", "art19-web-player/art19-base-player", "art19-web-player/templates/art19-artwork-player", "request-frame"], function(t, e, i, n, r) {
      "use strict";

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      var s, a = o(i),
        l = o(n),
        p = o(r),
        u = (0, p.default)("request"),
        c = function(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        },
        h = function(t, e) {
          function i() {
            this.constructor = t
          }
          for (var n in e) d.call(e, n) && (t[n] = e[n]);
          return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
        },
        d = {}.hasOwnProperty;
      s = function(t) {
        function e() {
          return this.usableCoverImage = c(this.usableCoverImage, this), this.updatePlayheadPosition = c(this.updatePlayheadPosition, this), this.stopOnHittingAnAdPod = c(this.stopOnHittingAnAdPod, this), this.setEpisodeDescription = c(this.setEpisodeDescription, this), this.configurePlayerWithResponse = c(this.configurePlayerWithResponse, this), this.afterTemplate = c(this.afterTemplate, this), e.__super__.constructor.apply(this, arguments)
        }
        return h(e, t), e.prototype.afterTemplate = function(t) {
          this.awpTop = $(".awp-content-top", this.awpContainer), this.awpTotalTime = $(".awp-total-time", this.awpContainer), this.awpCurrentTime = $(".awp-current-time", this.awpContainer), this.awpCurrentAd = $(".awp-current-ad", this.awpContainer), this.awpAdPodSize = $(".awp-ad-pod-size", this.awpContainer)
        }, e.prototype.configurePlayerWithResponse = function() {
          var t, i, n, r, o, s, a, l, p;
          e.__super__.configurePlayerWithResponse.call(this), t = this.usableCoverImage(), i = null != (o = this.currentPlayerInstructions.content) ? o.episode_description : void 0, n = null != (s = this.currentPlayerInstructions.content) ? s.episode_description_is_html : void 0, r = null != (a = this.currentPlayerInstructions.content) ? a.episode_title : void 0, p = null != (l = this.currentPlayerInstructions.content) ? l.series_title : void 0, u(function(e) {
            return function() {
              var o, s;
              if (e.setSeriesTitle(p), e.setEpisodeTitle(r), e.setEpisodeDescription(i, n), t) return s = $(".awp-thumbnail-background", e.awpContainer), s.length > 0 ? s.prop("src", t) : (o = $('<img alt="Cover Image" class="awp-thumbnail-background">'), o.prop("src", t), e.awpContainer.prepend(o))
            }
          }(this))
        }, e.prototype.setEpisodeDescription = function(t, e) {
          var i;
          i = e ? t : this.simpleFormat(t), $(".awp-overlay-episode-description", this.awpContainer).html(i), (null != i ? i.length : void 0) > 0 ? $(".awp-media-description-btn", this.awpContainer).addClass("awp-show") : $(".awp-media-description-btn", this.awpContainer).removeClass("awp-show")
        }, e.prototype.stopOnHittingAnAdPod = function() {
          return !this.scrubbing
        }, e.prototype.template = Handlebars.template(l.default), e.prototype.updatePlayheadPosition = function() {
          var t;
          t = this.audioPlayback.currentTime, this.awpCurrentTime.text(this.secondsToTimecode(t)), this.awpTotalTime.text(this.secondsToTimecode(this.currentPlayerInstructions.content.duration)), this.scrubbing || this.awpEpisodeProgress.slider("option", "value", t)
        }, e.prototype.usableCoverImage = function() {
          var t, e, i, n, r, o, s, a, l, p, u, c, h, d, w, y;
          if (null != this.currentPlayerInstructions.content) {
            if (o = null, null != (s = this.currentPlayerInstructions.content) && null != (a = s.artwork) ? a.episode : void 0)
              if (this.config.rootNode.hasClass("awp-fullscreen"))
                for (u = null != (l = this.currentPlayerInstructions.content) && null != (p = l.artwork) ? p.episode : void 0, t = 0, n = u.length; t < n; t++) e = u[t], (null != e ? e.width : void 0) > 0 && (null != e ? e.height : void 0) > 0 && (null != e ? e.url : void 0) && (null === o || o.width < e.width) && (o = e);
              else
                for (d = null != (c = this.currentPlayerInstructions.content) && null != (h = c.artwork) ? h.episode : void 0, i = 0, r = d.length; i < r; i++) e = d[i], (null != e ? e.width : void 0) >= 640 && (null != e ? e.height : void 0) > 0 && (null != e ? e.url : void 0) && (null === o || e.width < o.width) && (o = e);
            return o ? o.url : (null != (w = this.currentPlayerInstructions.content) ? w.cover_image : void 0) && null != (y = this.currentPlayerInstructions.content) ? y.cover_image : void 0
          }
        }, e
      }(a.default), e.exports = s
    });
    define("art19-web-player/art19-audio-playback", ["exports", "module"], function(t, i) {
      "use strict";
      var e, s = function(t, i) {
        return function() {
          return t.apply(i, arguments)
        }
      };
      e = function() {
        function t(t) {
          if (this.audioTagId = t, this.setVolume = s(this.setVolume, this), this.setMuted = s(this.setMuted, this), this.setCurrentTimeInEventuallyLoadedFile = s(this.setCurrentTimeInEventuallyLoadedFile, this), this.setCurrentTime = s(this.setCurrentTime, this), this.resetContext = s(this.resetContext, this), this.playFile = s(this.playFile, this), this.play = s(this.play, this), this.pause = s(this.pause, this), this.onTimeUpdate = s(this.onTimeUpdate, this), this.onSeeked = s(this.onSeeked, this), this.onSeeking = s(this.onSeeking, this), this.onProgress = s(this.onProgress, this), this.onPlay = s(this.onPlay, this), this.onPause = s(this.onPause, this), this.onEnded = s(this.onEnded, this), this.onCanPlayAudio = s(this.onCanPlayAudio, this), this.loadFile = s(this.loadFile, this), this.getVolume = s(this.getVolume, this), this.getMuted = s(this.getMuted, this), this.firstUsableMediaUrl = s(this.firstUsableMediaUrl, this), this.detectSupportedTypes = s(this.detectSupportedTypes, this), this.emitter = new EventEmitter, this.$audio = $("audio#" + this.audioTagId), !this.$audio.length) throw new Error("Cannot find audio tag " + this.audioTagId);
          this.resetContext(), this.audio = this.$audio.get(0), this.$audio.on("canplay", this.onCanPlayAudio), this.$audio.on("ended", this.onEnded), this.$audio.on("pause", this.onPause), this.$audio.on("play", this.onPlay), this.$audio.on("progress", this.onProgress), this.$audio.on("seeked", this.onSeeked), this.$audio.on("seeking", this.onSeeking), this.$audio.on("timeupdate", this.onTimeUpdate), this.supportedTypes = this.detectSupportedTypes()
        }
        return t.prototype.detectSupportedTypes = function() {
          var t;
          t = {};
          try {
            this.audio.canPlayType && (t.ogg = this.audio.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = this.audio.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""))
          } catch (t) {
            t
          }
          return t
        }, t.prototype.firstUsableMediaUrl = function(t) {
          var i, e, s, o;
          if (null != t) {
            if (i = null != (s = t.mp3) ? s.url : void 0, e = null != (o = t.ogg) ? o.url : void 0, null != i && this.supportedTypes.mp3) return i;
            if (null != e && this.supportedTypes.ogg) return e
          }
        }, t.prototype.getMuted = function() {
          var t;
          return !0 === (null != (t = this.audio) ? t.muted : void 0)
        }, t.prototype.getVolume = function() {
          var t;
          return null != (t = this.audio) ? t.volume : void 0
        }, t.prototype.loadFile = function(t, i) {
          return (i !== this.contextId || t !== this.currentUrl) && (this.preparing = !0, this.currentUrl = t, this.contextId = i, this.hasFile = !0, this.paused = !0, this.emitter.emit("preparing", this, this.contextId), this.$audio.prop("src", this.currentUrl), this.audio.load(), !0)
        }, t.prototype.onCanPlayAudio = function() {
          if (this.preparing = !1, this.emitter.emit("prepared", this, this.contextId), this.targetPosition) return setTimeout(function(t) {
            return function() {
              if (t.preparing = !0, t.audio.currentTime = t.targetPosition, t.targetPosition = void 0, t.audio.paused) return t.audio.play()
            }
          }(this), 0)
        }, t.prototype.onEnded = function(t) {
          this.paused = !0, this.emitter.emit("ended", this, this.contextId, t)
        }, t.prototype.onPause = function(t) {
          this.paused = !0, this.emitter.emit("pause", this, this.contextId, t)
        }, t.prototype.onPlay = function(t) {
          this.paused = !1, this.preparing = !1, this.emitter.emit("play", this, this.contextId, t)
        }, t.prototype.onProgress = function(t) {
          var i, e, s, o, n, r, h;
          if ((null != (r = this.audio) ? r.duration : void 0) > 0) {
            for (i = this.audio.buffered, e = this.audio.duration, h = 0, s = 0, o = i.length; s < o;) h += i.end(s) - i.start(s), s++;
            return n = h / e * 100, n < 0 && (n = 0), n > 100 && (n = 100), this.emitter.emit("progress", this, this.contextId, {
              percent: n,
              total: h,
              duration: e
            })
          }
        }, t.prototype.onSeeking = function(t) {
          this.preparing || this.emitter.emit("seeking", this, this.contextId, t)
        }, t.prototype.onSeeked = function(t) {
          this.preparing || this.emitter.emit("seeked", this, this.contextId, t)
        }, t.prototype.onTimeUpdate = function(t) {
          return this.currentTime = t.target.currentTime, this.emitter.emit("timeupdate", this, this.contextId, t)
        }, t.prototype.pause = function() {
          return !!this.audio && (!this.audio.paused && (this.audio.pause(), !0))
        }, t.prototype.play = function() {
          return !!this.audio && (!!this.audio.paused && (this.audio.play(), !0))
        }, t.prototype.playFile = function(t, i, e) {
          this.loadFile(t, e) ? this.targetPosition = i : (this.targetPosition = void 0, this.audio.currentTime = i), this.emitter.emit("preparing", this, this.contextId), this.targetPosition > 0 || this.audio.play()
        }, t.prototype.resetContext = function() {
          this.currentUrl = void 0, this.hasFile = !1, this.currentTime = 0, this.paused = !0, this.contextId = void 0, this.preparing = !1
        }, t.prototype.setCurrentTime = function(t) {
          this.currentTime = t, this.hasFile && (this.audio.currentTime = t)
        }, t.prototype.setCurrentTimeInEventuallyLoadedFile = function(t, i, e) {
          this.targetPosition = e, this.loadFile(t, i) || (this.targetPosition = void 0, this.setCurrentTime(e))
        }, t.prototype.setMuted = function(t) {
          this.audio && (this.audio.muted = t)
        }, t.prototype.setVolume = function(t) {
          t < 0 && (t = 0), t > 1 && (t = 1), this.audio && (this.audio.volume = t)
        }, t
      }(), i.exports = e
    });
    define("art19-web-player/art19-base-player", ["exports", "module", "art19-web-player/ad-pod", "art19-web-player/art19-audio-playback", "art19-web-player/art19-event-dispatcher", "art19-web-player/art19-player-api", "art19-web-player/templates/shared/description-overlay", "art19-web-player/templates/shared/embed", "art19-web-player/templates/shared/player-share-overlay", "art19-web-player/templates/playlist-module", "art19-web-player/templates/shared/playlist-items", "art19-web-player/templates/shared/share-flyout", "art19-web-player/templates/shared/subscribe-flyout", "art19-web-player/templates/custom-styles", "art19-web-player/util", "request-frame"], function(t, e, i, n, a, r, o, s, l, u, p, d, c, h, f, y) {
      "use strict";

      function m(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      var w, g = m(i),
        P = m(n),
        v = m(a),
        b = m(r),
        C = m(o),
        k = m(s),
        I = m(l),
        T = m(u),
        S = m(p),
        A = m(d),
        E = m(c),
        M = m(h),
        D = m(f),
        U = m(y),
        x = (0, U.default)("request"),
        R = "https://d2nx6ydw3e5y5d.cloudfront.net/assets/silence",
        O = function(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        };
      w = function() {
        function t(t, e) {
          this.config = t, this.currentPlayerInstructions = e, this.windowResized = O(this.windowResized, this), this.useProperBrandImage = O(this.useProperBrandImage, this), this.usableCoverImage = O(this.usableCoverImage, this), this.updateAdvertisementPlayback = O(this.updateAdvertisementPlayback, this), this.updateProgressSliders = O(this.updateProgressSliders, this), this.triggerPostRoll = O(this.triggerPostRoll, this), this.togglePlayback = O(this.togglePlayback, this), this.toggleMute = O(this.toggleMute, this), this.startPreRoll = O(this.startPreRoll, this), this.shutUp = O(this.shutUp, this), this.showWaitSpinner = O(this.showWaitSpinner, this), this.showErrorMessage = O(this.showErrorMessage, this), this.setVolume = O(this.setVolume, this), this.showPlayerShareOverlay = O(this.showPlayerShareOverlay, this), this.shareViaLinkedIn = O(this.shareViaLinkedIn, this), this.shareViaFacebook = O(this.shareViaFacebook, this), this.shareViaTwitter = O(this.shareViaTwitter, this), this.setupMarqueeElement = O(this.setupMarqueeElement, this), this.setupClipboardjs = O(this.setupClipboardjs, this), this.setupProgressSliders = O(this.setupProgressSliders, this), this.setupPlayerJsReceiver = O(this.setupPlayerJsReceiver, this), this.setupPlayerAPI = O(this.setupPlayerAPI, this), this.resetEpisodeVersion = O(this.resetEpisodeVersion, this), this.resetAllMarqueeElements = O(this.resetAllMarqueeElements, this), this.reportEpisodeTelemetry = O(this.reportEpisodeTelemetry, this), this.reachedPodPosition = O(this.reachedPodPosition, this), this.postSetupAction = O(this.postSetupAction, this), this.podPlaybackStarted = O(this.podPlaybackStarted, this), this.podPlaybackEnded = O(this.podPlaybackEnded, this), this.podcastSubscriptionUrl = O(this.podcastSubscriptionUrl, this), this.playlistWasScrolled = O(this.playlistWasScrolled, this), this.playlistFailed = O(this.playlistFailed, this), this.playlistAvailable = O(this.playlistAvailable, this), this.playlistLoading = O(this.playlistLoading, this), this.playUnlessPlaying = O(this.playUnlessPlaying, this), this.pauseUnlessPaused = O(this.pauseUnlessPaused, this), this.pauseAllOtherAudioSources = O(this.pauseAllOtherAudioSources, this), this.instructionsFailed = O(this.instructionsFailed, this), this.instructionsAvailable = O(this.instructionsAvailable, this), this.instructionsLoading = O(this.instructionsLoading, this), this.initializeEpisode = O(this.initializeEpisode, this), this.holdingMusic = O(this.holdingMusic, this), this.hideWaitSpinner = O(this.hideWaitSpinner, this), this.grabNextPlaylistPage = O(this.grabNextPlaylistPage, this), this.generateAudioContextId = O(this.generateAudioContextId, this), this.getShareConfiguration = O(this.getShareConfiguration, this), this.freezePlayerAt = O(this.freezePlayerAt, this), this.findPlaylistItem = O(this.findPlaylistItem, this), this.establishEventListeners = O(this.establishEventListeners, this), this.episodeAudioTimeUpdate = O(this.episodeAudioTimeUpdate, this), this.defrostPlayer = O(this.defrostPlayer, this), this.configureSubscribe = O(this.configureSubscribe, this), this.configureShareOptions = O(this.configureShareOptions, this), this.configurePlayerWithResponse = O(this.configurePlayerWithResponse, this), this.configureLinksAndControls = O(this.configureLinksAndControls, this), this.configureEmbedCodeFlyout = O(this.configureEmbedCodeFlyout, this), this.configureDownloadLink = O(this.configureDownloadLink, this), this.configureAudioPlayback = O(this.configureAudioPlayback, this), this.createPlaylistModule = O(this.createPlaylistModule, this), this.createMarkupForPlayerShareOverlay = O(this.createMarkupForPlayerShareOverlay, this), this.createInitialMarkup = O(this.createInitialMarkup, this), this.createAudioElement = O(this.createAudioElement, this), this.createCustomStylesheets = O(this.createCustomStylesheets, this), this.contextPlayerInstructions = O(this.contextPlayerInstructions, this), this.buildTemplate = O(this.buildTemplate, this), this.bindToWindowResize = O(this.bindToWindowResize, this), this.bindToWindowLoad = O(this.bindToWindowLoad, this), this.bindRootNodeTriggers = O(this.bindRootNodeTriggers, this), this.bindAudioPlaybackEventListeners = O(this.bindAudioPlaybackEventListeners, this), this.appendPlayListItems = O(this.appendPlayListItems, this), this.advertisementStarted = O(this.advertisementStarted, this), this.advertisementEnded = O(this.advertisementEnded, this), this.bindRootNodeTriggers(), this.bindToWindowResize(), this.bindToWindowLoad(), this.configureEventDispatcher(), this.audioControllers = {}, this.setupPlayerAPI(), this.registerPartials(), this.createInitialMarkup()
        }
        return t.prototype.afterTemplate = function(t) {
          throw new Error("You must implement #afterTemplate")
        }, t.prototype.advertisementEnded = function(t, e, i) {
          var n, a, r;
          !0 === this.config.logging && "undefined" != typeof console && null !== console && "function" == typeof console.log && console.log("Ad Playback Complete", "Advertisement ID = " + e.id, "AdPod ID = " + t.pod.id), n = e.id, a = this.secondsToTimecode(this.audioPlayback.currentTime), r = this.secondsToTimecode(this.currentPlayerInstructions.content.duration), x(function(t) {
            return function() {
              return t.awpTotalTime.text(r), t.awpCurrentTime.text(a)
            }
          }(this)), setImmediate(function(t) {
            return function() {
              return t.eventDispatcher.ended({
                advertisementId: n
              })
            }
          }(this))
        }, t.prototype.advertisementStarted = function(t, e, i) {
          var n, a, r, o, s;
          !0 === this.config.logging && "undefined" != typeof console && null !== console && "function" == typeof console.log && console.log("Ad Playback Started", "Advertisement ID = " + e.id, "AdPod ID = " + t.pod.id), n = e.id, a = t.ads.indexOf(e), r = e.duration, o = this.secondsToTimecode(r), s = t.ads.length, x(function(t) {
            return function() {
              return t.awpTotalTime.text(o), t.awpCurrentTime.text("00:00"), t.awpAdProgress.slider("option", "max", r), t.awpAdProgress.slider("option", "value", 0), t.awpCurrentAd.text(a + 1), t.awpAdPodSize.text(s)
            }
          }(this)), setImmediate(function(t) {
            return function() {
              return t.eventDispatcher.play({
                advertisementId: n
              })
            }
          }(this))
        }, t.prototype.applyCustomization = function() {}, t.prototype.appendPlayListItems = function(t, e) {
          var i, n;
          return $(".awp-playlist-item-load-more", this.awpPlaylist).remove(), i = {
            list: t.map(function(t) {
              return t.released_at && (t.releasedAtFormatted = moment(t.released_at).format("ll")), t
            }),
            hasMore: (null != e ? e.next_page : void 0) > 0
          }, n = this.playlistItemsTemplate(i), this.awpPlaylist.append($(n))
        }, t.prototype.awpContainer = void 0, t.prototype.bindAudioPlaybackEventListeners = function(t, e) {
          t && (t.emitter.on("timeupdate", function(t) {
            return function(e, i, n) {
              if (i === t.audioContextId) return t.episodeAudioTimeUpdate()
            }
          }(this)), t.emitter.on("play", function(t) {
            return function(i, n, a) {
              var r, o, s, l, u, p, d;
              if (n === t.audioContextId && x(function() {
                  var e;
                  return t.awpContainer.removeClass("awp-paused").addClass("awp-playing"), null != (e = t.currentPlaylistItem) && e.addClass("awp-playlist-item-playing"), $('[data-action="playback-toggle"]', t.awpContainer).attr("title", "Pause").attr("aria-label", "Pause")
                }), n === e) return r = a.target.currentTime, o = a.target.duration, s = null != (l = t.currentPlayerInstructions) && null != (u = l.content) ? u.duration : void 0, d = null != (p = t.contextPlayerInstructions(n)) ? p.tracking_url : void 0, setImmediate(function() {
                return t.reportEpisodeTelemetry("play", r, d), t.eventDispatcher.play({
                  position: r,
                  duration: o || s
                })
              })
            }
          }(this)), t.emitter.on("pause", function(t) {
            return function(i, n, a, r) {
              var o, s, l, u;
              if (n === t.audioContextId && x(function() {
                  return t.awpContainer.removeClass("awp-playing").addClass("awp-paused"), t.awpPlaylistModule && $(".awp-playlist-item", t.awpPlaylistModule).removeClass("awp-playlist-item-playing"), $('[data-action="playback-toggle"]', t.awpContainer).attr("title", "Play").attr("aria-label", "Play")
                }), n === e) return o = a.target.currentTime, s = a.target.duration, u = null != (l = t.contextPlayerInstructions(n)) ? l.tracking_url : void 0, setImmediate(function() {
                return t.reportEpisodeTelemetry("pause", o, u), t.eventDispatcher.pause({
                  position: o,
                  duration: s
                })
              })
            }
          }(this)), t.emitter.on("ended", function(t) {
            return function(i, n, a, r) {
              var o, s, l;
              if (x(function() {
                  if (t.awpContainer.removeClass("awp-playing").addClass("awp-paused"), t.awpPlaylistModule) return $(".awp-playlist-item", t.awpPlaylistModule).removeClass("awp-playlist-item-playing")
                }), n === e && (o = a.target.currentTime, a.target.duration, l = null != (s = t.contextPlayerInstructions(n)) ? s.tracking_url : void 0, setImmediate(function() {
                  return t.reportEpisodeTelemetry("ended", o, l)
                })), n === t.audioContextId) return t.triggerPostRoll()
            }
          }(this)), t.emitter.on("seeking", function(t) {
            return function(i, n, a) {
              var r, o, s;
              if (t.showWaitSpinner(), n === e && !0 !== t.blockSeekTriggers) return t.frozen ? void 0 : (r = a.target.currentTime, a.target.duration, s = null != (o = t.contextPlayerInstructions(n)) ? o.tracking_url : void 0, setImmediate(function() {
                return t.reportEpisodeTelemetry("seeking", r, s), t.eventDispatcher.seeking({
                  position: r
                })
              }))
            }
          }(this)), t.emitter.on("seeked", function(t) {
            return function(i, n, a) {
              var r, o, s;
              if (t.hideWaitSpinner(), n === e) return !0 === t.blockSeekTriggers ? t.blockSeekTriggers = !1 : t.frozen ? void 0 : (r = a.target.currentTime, a.target.duration, s = null != (o = t.contextPlayerInstructions(n)) ? o.tracking_url : void 0, setImmediate(function() {
                return t.reportEpisodeTelemetry("seeked", r, s), t.eventDispatcher.seeked({
                  position: r
                })
              }))
            }
          }(this)), t.emitter.on("progress", function(t) {
            return function(e, i, n, a) {
              var r, o, s;
              if (i === t.audioContextId) return x(function() {
                return t.episodeBufferUpdate(e, i, n)
              }), r = n.duration, o = n.percent, s = n.total, setImmediate(function() {
                return t.eventDispatcher.progress({
                  percent: o,
                  seconds: s,
                  duration: r
                })
              })
            }
          }(this)), t.emitter.on("preparing", function(t) {
            return function(i, n, a) {
              if (n === e) return t.showWaitSpinner()
            }
          }(this)), t.emitter.on("prepared", function(t) {
            return function(i, n, a) {
              if (n === e) return t.hideWaitSpinner()
            }
          }(this)))
        }, t.prototype.bindRootNodeTriggers = function() {
          return this.config.rootNode.on("play", function(t) {
            return function(e) {
              return t.shutUp(), t.togglePlayback()
            }
          }(this)), this.config.rootNode.on("shut-up", function(t) {
            return function(e) {
              return t.shutUp()
            }
          }(this))
        }, t.prototype.bindToWindowLoad = function() {
          $(window).on("load", function(t) {
            return function() {
              return t.postMessageIframeResize()
            }
          }(this))
        }, t.prototype.bindToWindowResize = function() {
          $(window).on("resize", function(t) {
            return function() {
              return t.windowResized()
            }
          }(this))
        }, t.prototype.buildTemplate = function(t) {
          var e;
          this.config.requireTemplate ? window.require([this.config.requireTemplate], function(e) {
            return function(i) {
              var n, a;
              return n = Handlebars.template(i), a = n(e.config), e.awpContainer = $(a), e.afterTemplate(a), t()
            }
          }(this), function(t) {
            return function(e) {
              return "undefined" != typeof console && null !== console && "function" == typeof console.error ? console.error("ART19 Web Player failed because the template `" + t.config.requireTemplate + "` could not be required.", e) : void 0
            }
          }(this)) : (e = this.template(this.config), this.awpContainer = $(e), this.afterTemplate(e), t())
        }, t.prototype.configureAdSkip = function() {
          var t, e, i;
          !1 === (null != (t = this.currentPlayerInstructions) && null != (e = t.content) && null != (i = e.series_configuration) ? i.skip_ad_enabled : void 0) && $(".awp-ad-skip-wrapper", this.awpContainer).addClass("awp-hide")
        }, t.prototype.configureEventDispatcher = function() {
          this.setupPlayerJsReceiver(), this.eventDispatcher = new v.default(this.config, this.playerjsReceiver)
        }, t.prototype.configureTooltips = function() {
          $("[data-awp-tooltip]").on({
            mouseenter: function() {
              if (!("ontouchstart" in document.documentElement)) return $(this).addClass("hover")
            },
            mouseleave: function() {
              if (!("ontouchend" in document.documentElement)) return $(this).removeClass("hover")
            }
          })
        }, t.prototype.contextPlayerInstructions = function(t) {
          var e;
          return null != (e = this.audioControllers[t]) ? e.playerInstructions : void 0
        }, t.prototype.createCustomStylesheets = function() {
          var t;
          this.customStylesheet = $('head style[type="text/css"]:first'), 0 === this.customStylesheet.length && ($("head").append('<style type="text/css"></style>'), this.customStylesheet = $('head style[type="text/css"]:first')), t = this.customStyleSheetTemplate(this.config).trim(), t.length > 0 && this.customStylesheet.append("/* ART19 Customization for player-node " + this.config.nodeId + " */\n" + t)
        }, t.prototype.createAudioElement = function(t) {
          var e, i, n, a, r, o, s;
          return null == t && (t = this.config.episodeId), null == t && (t = "initial"), n = this.generateAudioContextId(t), i = "ART19-" + this.config.nodeId + "-EPISODE-" + t, r = null != (o = this.currentPlayerInstructions) && null != (s = o.content) ? s.episode_title : void 0, null != this.audioControllers[n] ? this.audioControllers[n] : ($("audio#" + i).length > 0 || (e = $('<audio preload="none"></audio>'), e.attr("id", i), e.prop("title", r), this.awpContainer.append(e), a = new P.default(i), this.audioControllers[n] = {
            controller: a,
            audioTagId: i,
            contextId: n
          }, this.bindAudioPlaybackEventListeners(a, n)), this.audioControllers[n])
        }, t.prototype.createInitialMarkup = function() {
          var t;
          return t = function(t) {
            return function() {
              return t.awpDescriptionOverlay = $(".awp-description-overlay", t.awpContainer), "playlist" === t.config.pickFromSeries && t.createPlaylistModule(), t.useProperBrandImage(), t.config.responsive && t.awpContainer.addClass("awp-responsive"), t.config.rootNode.empty().append(t.awpContainer), t.awpPlaylistModule && (t.config.rootNode.append(t.awpPlaylistModule), t.awpPlaylistContainer.scroll(function(e) {
                return t.playlistWasScrolled(e)
              })), t.createMarkupForPlayerShareOverlay(), t.setupClipboardjs(), t.createCustomStylesheets(), t.setupProgressSliders(), t.establishEventListeners(), t.postSetupAction()
            }
          }(this), this.buildTemplate(t)
        }, t.prototype.createMarkupForPlayerShareOverlay = function() {
          this.awpPlayerShareOverlay = $(".awp-share-overlay", this.awpContainer)
        }, t.prototype.createPlaylistModule = function() {
          var t;
          t = this.playlistModuleTemplate(this.config), this.awpPlaylistModule = $(t), this.awpPlaylistContainer = $(".awp-playlist-container", this.awpPlaylistModule), this.awpPlaylist = $("ul.awp-playlist", this.awpPlaylistModule)
        }, t.prototype.configureAudioPlayback = function() {
          var t;
          null == this.currentPlaybackData && (this.currentPlaybackData = this.createAudioElement(this.config.episodeId)), this.currentPlaybackData.playerInstructions = this.currentPlayerInstructions, this.currentPlaybackData.episodeId = this.config.episodeId, this.audioPlayback = this.currentPlaybackData.controller, this.audioContextId = this.currentPlaybackData.contextId, this.audioPlayback.pause(), this.audioPlayback.resetContext(), this.frozen = !1, this.canPickup = !0, this.episodeMediaUrl = this.audioPlayback.firstUsableMediaUrl(null != (t = this.currentPlayerInstructions.content) ? t.media : void 0)
        }, t.prototype.configureDownloadLink = function() {
          var t, e, i, n;
          this.config.episodeId ? (t = this.config.apiUrl + "/episodes/" + this.config.episodeId + ".mp3", (e = null != (i = this.currentPlayerInstructions) && null != (n = i.content) ? n.episode_title : void 0) || (e = this.config.episodeId)) : (t = "#", e = ""), $('[data-action="download"]', this.awpContainer).prop({
            href: t,
            download: e + ".mp3"
          })
        }, t.prototype.configureEmbedCodeFlyout = function(t) {
          var e, i, n, a;
          t ? (a = {}, i = 200, this.config.rootNode.hasClass("awp-micro") && (a.type = "micro", i = 40), this.config.rootNode.hasClass("awp-medium-alt") && (a.type = "medium-alt"), this.config.rootNode.hasClass("awp-artwork") && (a.type = "artwork", i = 320), this.config.rootNode.attr("class").split(" ").forEach(function(t, e) {
            if (0 === t.indexOf("awp-theme")) return a.theme = t.replace(/^awp-theme-/, "")
          }), n = $.param(a), n.length > 0 && (t = t + "?" + n), e = '<iframe src="' + D.default.escapeHtml(t) + '" style="width: 100%; height: ' + i + 'px; border: 0 none;" scrolling="no"></iframe>', x(function(t) {
            return function() {
              return $(".awp-iframe-player-code-input-container .iframe-source", t.awpContainer).text(e), $(".awp-social-button.awp-embed-code-share", t.awpContainer).addClass("awp-show"), $(".awp-embed-popover-container", t.awpContainer).addClass("awp-show")
            }
          }(this))) : x(function(t) {
            return function() {
              return $(".awp-social-button.awp-embed-code-share", t.awpContainer).removeClass("awp-show"), $(".awp-embed-popover-container", t.awpContainer).removeClass("awp-show")
            }
          }(this))
        }, t.prototype.configureLinksAndControls = function() {
          var t, e, i, n;
          this.configureSubscribe(), this.configureDownloadLink(), this.awpPlaylistModule && (e = null != (i = this.currentPlayerInstructions) && null != (n = i.content) ? n.series_show_page : void 0, t = $('[data-action="public-page"]', this.awpPlaylistModule), e && this.config.linkSeriesPage ? t.addClass("awp-show").prop({
            href: e,
            target: "_blank"
          }) : t.removeClass("awp-show").prop({
            href: "#",
            target: "_self"
          }))
        }, t.prototype.configurePlayerWithResponse = function() {
          var t;
          this.configureAudioPlayback(), this.configureLinksAndControls(), this.configureShareOptions(), this.updateProgressSliders(), this.currentPlaylistItem = this.findPlaylistItem(this.config.episodeId), this.initializeEpisode(), this.configureTooltips(), this.configureAdSkip(), this.adPods = this.currentPlayerInstructions.ad_pods.map(function(t) {
            return function(e, i) {
              var n;
              return n = new g.default(t, e), n.emitter.on("play", function(e) {
                return t.podPlaybackStarted(e)
              }), n.emitter.on("ended", function(e) {
                return t.podPlaybackEnded(e)
              }), n.emitter.on("ad-play", function(e, i, n) {
                return x(function() {
                  var e;
                  return t.awpContainer.addClass("awp-playing").removeClass("awp-paused"), null != (e = t.currentPlaylistItem) ? e.addClass("awp-playlist-item-playing") : void 0
                }), t.advertisementStarted(e, i, n)
              }), n.emitter.on("ad-paused", function(e, i, n) {
                return x(function() {
                  if (t.awpContainer.removeClass("awp-playing").addClass("awp-paused"), t.awpPlaylistModule) return $(".awp-playlist-item", t.awpPlaylistModule).removeClass("awp-playlist-item-playing")
                })
              }), n.emitter.on("ad-ended", function(e, i, n) {
                return t.advertisementEnded(e, i, n)
              }), n.emitter.on("ad-timeupdate", function(e, i, n) {
                return t.updateAdvertisementPlayback(e, i, n)
              }), n
            }
          }(this)), null != (t = this.playerjsReceiver) && t.ready()
        }, t.prototype.configureShareOptions = function() {
          var t, e, i, n, a, r, o;
          if (o = this.getShareConfiguration("EmailShareConfiguration"), n = $(".awp-media-share-container", this.awpContainer), !o) return void n.removeClass("awp-show");
          n.addClass("awp-show"), encodeURIComponent(this.config.apiUrl + "/close_window.html"), i = encodeURIComponent(o.title), e = encodeURIComponent(o.body + "\n").concat(o.encodedUrl), this.popupFeatures(), t = "mailto:?subject=" + i + "&body=" + e, $(".awp-social-button.awp-email-share", this.awpContainer).prop({
            href: t,
            target: "_blank"
          }), this.configureEmbedCodeFlyout(null != (a = this.currentPlayerInstructions) && null != (r = a.content) ? r.episode_embed_url : void 0)
        }, t.prototype.configureSubscribe = function() {
          x(function(t) {
            return function() {
              var e, i, n, a, r, o, s, l;
              if (e = null != (o = t.currentPlayerInstructions) ? o.content : void 0, l = {
                  itunes: null != e ? e.itunes_subscription_url : void 0,
                  rss: t.podcastSubscriptionUrl(),
                  stitcher: null != e ? e.stitcher_subscription_url : void 0
                }, !l.rss || l.itunes || l.stitcher) {
                if (l.itunes || l.stitcher) {
                  for ($('[data-action="subscribe-rss"].awp-media-subscribe', t.awpContainer).click(function(t) {
                    return t.preventDefault()
                  }), a = ["itunes", "rss", "stitcher"], i = 0, r = a.length; i < r; i++) n = a[i], s = '[data-action="subscribe-' + n + '"]:not(.awp-media-subscribe)', l[n] ? $(s, t.awpContainer).prop({
                    href: l[n],
                    target: "_blank"
                  }).addClass("awp-show") : $(s, t.awpContainer).removeClass("awp-show");
                  return $('[data-action="subscribe"]', t.awpContainer).addClass("awp-popover-container awp-show").prop({
                    "aria-haspopup": !0
                  })
                }
                return $('[data-action="subscribe"]', t.awpContainer).prop({
                  "aria-haspopup": !1
                }).removeClass("awp-show")
              }
              return $('[data-action="subscribe-rss"]', t.awpContainer).prop({
                href: l.rss,
                target: "_blank"
              }), $('[data-action="subscribe"]', t.awpContainer).removeClass("awp-popover-container").prop({
                "aria-haspopup": !1
              }).addClass("awp-show")
            }
          }(this))
        }, t.prototype.customStyleSheetTemplate = Handlebars.template(M.default), t.prototype.defrostPlayer = function(t) {
          var e;
          e = this.freezeAt || 0, this.freezeAt = null, this.frozen = !1, t ? (this.audioPlayback.playFile(this.episodeMediaUrl, e, this.audioContextId), x(function(t) {
            return function() {
              return t.awpEpisodeProgress.slider("option", "disabled", !1)
            }
          }(this))) : (this.audioPlayback.loadFile(this.episodeMediaUrl, this.audioContextId), this.audioPlayback.setCurrentTime(0), this.freezePositionAt = null, x(function(t) {
            return function() {
              return t.awpEpisodeProgress.slider("option", "disabled", !1), t.awpContainer.removeClass("awp-playing").addClass("awp-paused"), t.awpPlaylistModule && $(".awp-playlist-item", t.awpPlaylistModule).removeClass("awp-playlist-item-playing"), t.updatePlayheadPosition()
            }
          }(this)))
        }, t.prototype.descriptionOverlayTemplate = Handlebars.template(C.default), t.prototype.embedTemplate = Handlebars.template(k.default), t.prototype.episodeAudioTimeUpdate = function() {
          var t, e, i, n, a, r, o, s;
          if (!this.frozen) {
            for (t = this.audioPlayback.currentTime, e = null != (r = this.currentPlayerInstructions) && null != (o = r.content) ? o.duration : void 0, s = this.adPods, i = 0, n = s.length; i < n && (a = s[i], a.isPostRoll || !this.reachedPodPosition(a, t)); i++);
            this.lastPosition = t, x(function(t) {
              return function() {
                return t.updatePlayheadPosition()
              }
            }(this)), setImmediate(function(t) {
              return function() {
                return t.eventDispatcher.timeupdate({
                  seconds: t.awpEpisodeProgress.slider("option", "value"),
                  duration: e
                })
              }
            }(this))
          }
        }, t.prototype.episodeBufferUpdate = function(t, e, i) {
          isNaN(Number(null != i ? i.percent : void 0)) || this.awpEpisodeBuffer.css({
            width: i.percent + "%"
          })
        }, t.prototype.establishEventListeners = function() {
          $('[data-action="playback-toggle"]', this.awpContainer).on("click", function(t) {
            return function(e) {
              return e.preventDefault(), t.togglePlayback()
            }
          }(this)), $('[data-action="download"]', this.awpContainer).on("click", function(t) {
            return function(e) {
              var i, n;
              return t.config.episodeId ? (i = t.config.episodeId, n = e.currentTarget.href, setImmediate(function() {
                return t.eventDispatcher.download({
                  episodeId: i,
                  url: n
                })
              })) : e.preventDefault()
            }
          }(this)), $('[data-action="fetch-data"]', this.awpContainer).on("click", function(t) {
            return function(e) {
              return e.preventDefault(), t.currentPlayerInstructions ? t.togglePlayback() : (t.holdingMusic(t.config.episodeId), t.playerApi.getPlaylist({
                initial: !0,
                autoPlay: !0
              }))
            }
          }(this)), $('[data-action="previous-episode"]', this.awpContainer).on("click", function(t) {
            return function(e) {
              if (e.preventDefault(), !t.frozen && null != t.audioPlayback) return t.audioPlayback.pause(), t.audioPlayback.currentTime < 15 ? t.config.rootNode.trigger("previous-episode", t.config.episodeId) : t.audioPlayback.setCurrentTime(0)
            }
          }(this)), $('[data-action="next-episode"]', this.awpContainer).on("click", function(t) {
            return function(e) {
              return e.preventDefault(), t.shutUp(), t.config.rootNode.trigger("next-episode", t.config.episodeId)
            }
          }(this)), this.awpSkipAdButton = $('[data-action="skip-ad"]', this.awpContainer).on("click", function(t) {
            return function(e) {
              if (e.preventDefault(), t.currentAdPod) return t.currentAdPod.skipCurrentAd()
            }
          }(this)), this.awpPlaylistModule && (this.awpPlaylistModule.on("click", '[data-action="switch-to-episode"]', function(t) {
            return function(e) {
              var i, n;
              return e.preventDefault(), i = $(e.currentTarget), !i.hasClass("awp-playlist-item-loading") && (!!(n = i.data("episode-id")) && (t.config.episodeId !== n ? (t.holdingMusic(n), t.playerApi.getInstructions(n, {
                playlist: !0,
                autoPlay: !0
              })) : t.togglePlayback()))
            }
          }(this)), this.awpPlaylistModule.on("click", '[data-action="load-next-page"]', function(t) {
            return function(e) {
              if (e.preventDefault(), !$(e.currentTarget).hasClass("awp-playlist-item-loading")) return t.grabNextPlaylistPage()
            }
          }(this))), this.awpVolumeButtons = $('[data-action="set-volume"]', this.awpContainer).on("click", function(t) {
            return function(e) {
              return e.preventDefault(), t.setVolume($(e.currentTarget).data("value"))
            }
          }(this)), this.awpMuteToggle = $('[data-action="mute-toggle"]', this.awpContainer).on("click", function(t) {
            return function(e) {
              return e.preventDefault(), t.toggleMute()
            }
          }(this)), this.awpVolumeSlider = $(".awp-volume-slider", this.awpContainer).slider({
            min: 0,
            max: 100,
            value: 100,
            range: "min",
            stop: function(t) {
              return function(e, i) {
                if (t.setVolume(i.value), t.awpVolumeSlider.hasClass("muted")) return t.toggleMute()
              }
            }(this)
          }), this.awpDescriptionOverlay.length && (this.awpShowDescriptionButton = $('[data-action="show-description"]', this.awpContainer).on("click", function(t) {
            return function(e) {
              return e.preventDefault(), t.awpDescriptionOverlay.attr("aria-hidden", !1).addClass("awp-show"), t.awpCloseDescriptionButton.focus(), !1
            }
          }(this)), this.awpCloseDescriptionButton = $('[data-action="close-description"]', this.awpContainer).on("click", function(t) {
            return function(e) {
              return e.preventDefault(), t.awpDescriptionOverlay.attr("aria-hidden", !0).removeClass("awp-show"), t.awpShowDescriptionButton.focus(), !1
            }
          }(this))), $(".awp-media-share", this.awpContainer).on("click", function(t) {
            return t.preventDefault()
          }), $(".awp-social-button.awp-twitter-share", this.awpContainer).on("click", function(t) {
            return function(e) {
              return e.preventDefault(), t.shareViaTwitter(), !1
            }
          }(this)), $(".awp-social-button.awp-facebook-share", this.awpContainer).on("click", function(t) {
            return function(e) {
              return e.preventDefault(), t.shareViaFacebook(), !1
            }
          }(this)), $(".awp-social-button.awp-linkedin-share", this.awpContainer).on("click", function(t) {
            return function(e) {
              return e.preventDefault(), t.shareViaLinkedIn(), !1
            }
          }(this)), $(".awp-social-button.awp-email-share", this.awpContainer).on("click", function(t) {
            return function(e) {
              var i;
              return i = t.config.episodeId, setImmediate(function() {
                return t.eventDispatcher.share({
                  episodeId: i,
                  channel: "Email"
                })
              }), !0
            }
          }(this)), $('[data-action="subscribe"]', this.awpContainer).on("click", function(t) {
            return function(e) {
              var i, n;
              return i = t.config.episodeId, n = t.podcastSubscriptionUrl(), setImmediate(function() {
                return t.eventDispatcher.subscribe({
                  episodeId: i,
                  url: n
                })
              }), !0
            }
          }(this)), $(".awp-social-button.awp-embed-code-share", this.awpContainer).on("click", function(t) {
            return function(e) {
              var i, n;
              return e.preventDefault(), (null != (i = t.currentPlayerInstructions) && null != (n = i.content) ? n.episode_embed_url : void 0) && t.showPlayerShareOverlay(), !1
            }
          }(this)), $('[data-action="close-player-share"]', this.awpContainer).on("click", function(t) {
            return function(e) {
              var i, n;
              return e.preventDefault(), (null != (i = t.currentPlayerInstructions) && null != (n = i.content) ? n.episode_embed_url : void 0) && (t.awpPlayerShareOverlay.removeClass("awp-show"), $(".awp-media-share-container", t.awpContainer).removeClass("awp-disable")), !1
            }
          }(this))
        }, t.prototype.findPlaylistItem = function(t) {
          return this.awpPlaylistModule ? $(".awp-playlist-item[data-episode-id='" + t + "']", this.awpPlaylistModule) : null
        }, t.prototype.freezePlayerAt = function(t) {
          this.freezeAt = t, this.audioPlayback.hasFile && (this.audioPlayback.paused || this.audioPlayback.pause(), this.audioPlayback.currentTime !== this.freezeAt && this.audioPlayback.setCurrentTime(this.freezeAt)), this.frozen = !0, x(function(t) {
            return function() {
              return t.awpEpisodeProgress.slider("option", "disabled", !0), t.updatePlayheadPosition()
            }
          }(this))
        }, t.prototype.getShareConfiguration = function(t) {
          var e, i, n, a, r, o, s, l, u, p, d, c, h, f, y;
          if (f = null != (a = this.currentPlayerInstructions) && null != (r = a.content) ? r.episode_share_url : void 0) {
            if (c = void 0, i = encodeURIComponent(f), h = null != (o = this.currentPlayerInstructions) && null != (s = o.content) ? s.episode_share_configurations : void 0, h && (c = $.grep(h, function(e) {
                return e.type === t
              })[0]), c) c.encodedUrl = i;
            else {
              switch (y = e = void 0, n = null != (l = this.currentPlayerInstructions) && null != (u = l.content) ? u.episode_title : void 0, t) {
                case "TwitterShareConfiguration":
                  e = n.substring(0, 116);
                  break;
                case "LinkedInShareConfiguration":
                case "EmailShareConfiguration":
                  y = n, e = (null != (p = this.currentPlayerInstructions) && null != (d = p.content) ? d.episode_description_plain : void 0) || ""
              }
              c = {
                title: y,
                body: e,
                encodedUrl: i
              }
            }
            return c
          }
        }, t.prototype.generateAudioContextId = function(t) {
          return this.config.nodeId + "-" + t
        }, t.prototype.grabNextPlaylistPage = function() {
          this.playerApi.getPlaylist({
            playlist: !0
          })
        }, t.prototype.hideWaitSpinner = function() {
          x(function(t) {
            return function() {
              return t.awpContainer.removeClass("awp-skipping")
            }
          }(this))
        }, t.prototype.holdingMusic = function(t) {
          var e, i, n;
          null != this.audioPlayback && this.audioPlayback.pause(), this.currentPlaybackData = this.createAudioElement(t), e = null != (i = this.currentPlaybackData) ? i.controller : void 0, n = e.firstUsableMediaUrl({
            mp3: {
              url: R + ".mp3"
            },
            ogg: {
              url: R + ".ogg"
            }
          }), e.playFile(n, 0, "holding-music")
        }, t.prototype.initializeEpisode = function() {
          this.awpTotalTime.text(this.secondsToTimecode(this.currentPlayerInstructions.content.duration)), this.awpCurrentTime.text("00:00"), this.awpCurrentAd.text(""), this.awpAdPodSize.text(""), this.awpEpisodeProgress.slider("option", "value", 0), this.applyCustomization()
        }, t.prototype.instructionsLoading = function(t, e) {
          x(function(i) {
            return function() {
              var n;
              if ((null != e ? e.initial : void 0) && (i.awpContainer.removeClass("awp-error"), i.awpContainer.addClass("awp-loading")), n = i.findPlaylistItem(t), (null != n ? n.length : void 0) > 0) return n.removeClass("awp-playlist-item-error"), n.addClass("awp-playlist-item-loading")
            }
          }(this))
        }, t.prototype.instructionsAvailable = function(t, e, i) {
          var n;
          return i.initial && (this.awpContainer.removeClass("awp-info"), this.awpContainer.removeClass("awp-loading")), n = this.findPlaylistItem(e), (null != n ? n.length : void 0) > 0 && x(function(t) {
            return function() {
              return $(".awp-playlist-item-current", t.awpPlaylistContainer).removeClass("awp-playlist-item-current"), n.removeClass("awp-playlist-item-loading awp-playlist-item-error").addClass("awp-playlist-item-current")
            }
          }(this)), this.shutUp(), setTimeout(function(n) {
            return function() {
              if (n.resetEpisodeVersion(e), n.currentPlayerInstructions = t, n.configurePlayerWithResponse(), x(function() {
                  return n.resetAllMarqueeElements()
                }), null != i ? i.autoPlay : void 0) return n.togglePlayback()
            }
          }(this), 250)
        }, t.prototype.instructionsFailed = function(t, e, i, n, a) {
          var r;
          return r = i || e, x(function(e) {
            return function() {
              var i, o;
              if (a.initial && (e.awpContainer.removeClass("awp-info"), e.awpContainer.removeClass("awp-loading"), i = "Unable to load episode", 404 !== t.status && (i = i + ": " + r), e.showErrorMessage(i), e.resetAllMarqueeElements()), o = e.findPlaylistItem(n), (null != o ? o.length : void 0) > 0) return o.removeClass("awp-playlist-item-loading"), o.addClass("awp-playlist-item-error"), $(".awp-playlist-item-error-message", o).text("Unable to load episode: " + i)
            }
          }(this))
        }, t.prototype.latePickup = function() {
          if ("true" === this.config.logging) return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log("This is late pickup for player") : void 0
        }, t.prototype.padNumber = function(t, e) {
          var i;
          if (i = void 0, t = t.toString(), t.length < e) {
            for (i = ""; i.length + t.length < e;) i = i.concat("0");
            return "" + i + t
          }
          return t
        }, t.prototype.pauseAllOtherAudioSources = function() {
          var t, e, i, n;
          for (n = $(".art19-web-player[data-episode-id], .art19-web-player[data-series-id]"), e = 0, i = n.length; e < i; e++) t = n[e], $(t) !== this.config.rootNode && $(t).trigger("shut-up")
        }, t.prototype.pauseUnlessPaused = function() {
          if (this.audioPlayback && !this.audioPlayback.paused)
            if (this.frozen) {
              if (!this.currentAdPod) return;
              this.audioPlayback.pause()
            } else this.audioPlayback.pause()
        }, t.prototype.playlistItemsTemplate = Handlebars.template(S.default), t.prototype.playlistModuleTemplate = Handlebars.template(T.default), t.prototype.playerShareOverlayTemplate = Handlebars.template(I.default), t.prototype.playUnlessPlaying = function() {
          if (this.audioPlayback && this.audioPlayback.paused)
            if (this.frozen) {
              if (!this.currentAdPod) return;
              this.pauseAllOtherAudioSources(), this.audioPlayback.play()
            } else this.pauseAllOtherAudioSources(), this.startPreRoll() || (this.audioPlayback.hasFile ? this.audioPlayback.play() : this.audioPlayback.playFile(this.episodeMediaUrl, 0, this.audioContextId))
        }, t.prototype.playlistLoading = function(t) {
          null != this.awpPlaylistModule && (this.awpPlaylistModule.removeClass("awp-playlist-module-error awp-playlist-module-empty"), this.awpContainer.removeClass("awp-playlist-module-hidden"),
            $(".awp-playlist-item-load-more", this.awpPlaylist).removeClass("awp-playlist-item-error").addClass("awp-playlist-item-loading").find("span").text("Loading…")), this.awpContainer && (null != t ? t.initial : void 0) && (this.awpContainer.removeClass("awp-error"), this.awpContainer.addClass("awp-loading"))
        }, t.prototype.playlistAvailable = function(t, e, i) {
          this.awpContainer && (i.initial && t.length > 0 && this.playerApi.getInstructions(t[0].id, i), x(function(n) {
            return function() {
              if (i.initial && (n.awpContainer.removeClass("awp-info"), n.awpContainer.removeClass("awp-loading")), n.awpPlaylistModule && t.length > 0) return n.appendPlayListItems(t, e)
            }
          }(this)))
        }, t.prototype.playlistFailed = function(t, e, i, n) {
          this.awpContainer && x(function(a) {
            return function() {
              var r, o;
              if (null != a.awpPlaylistModule && (a.awpPlaylistModule.addClass("awp-playlist-module-error"), $(".awp-playlist-item", a.awpPlaylist).length > 0 || (a.awpPlaylistModule.addClass("awp-playlist-module-empty"), a.awpContainer.addClass("awp-playlist-module-hidden")), $(".awp-playlist-item-load-more", a.awpPlaylist).addClass("awp-playlist-item-error").removeClass("awp-playlist-item-loading").find("span").text("Load failed")), null != n ? n.initial : void 0) return a.awpContainer.removeClass("awp-info"), a.awpContainer.removeClass("awp-loading"), o = i || e, r = "Unable to load playlist", 404 !== t.status && (r = r + ": " + o), a.showErrorMessage(r), a.resetAllMarqueeElements()
            }
          }(this))
        }, t.prototype.playlistWasScrolled = function(t) {
          var e, i, n, a, r;
          if (n = $(".awp-playlist-item-load-more", this.awpPlaylist).not(".awp-playlist-item-loading"), n.length > 0) return r = this.awpPlaylistContainer.offset().top, a = r + this.awpPlaylistContainer.height(), i = n.offset().top, e = i + n.height(), r <= i && a >= e && (x(function() {
            return n.addClass("awp-playlist-item-loading")
          }), this.grabNextPlaylistPage()), !1
        }, t.prototype.podcastSubscriptionUrl = function() {
          var t, e, i, n, a, r, o;
          return r = null != (e = this.currentPlayerInstructions) && null != (i = e.content) ? i.podcast_subscription_url : void 0, r || (t = this.config.apiUrl.replace(/^.*?:/, ""), o = null != (n = this.currentPlayerInstructions) && null != (a = n.content) ? a.series_slug : void 0, t && o && (r = "pcast:" + t + "/" + o)), r
        }, t.prototype.podPlaybackEnded = function(t) {
          this.currentAdPod = null, x(function(t) {
            return function() {
              if (t.awpContainer.removeClass("awp-ad-playing").removeClass("awp-playing").removeClass("awp-paused"), t.awpPlaylistModule) return $(".awp-playlist-item", t.awpPlaylistModule).removeClass("awp-playlist-item-playing")
            }
          }(this)), this.defrostPlayer(!t.isPostRoll), t.isPostRoll && setImmediate(function(t) {
            return function() {
              return t.eventDispatcher.ended()
            }
          }(this))
        }, t.prototype.podPlaybackStarted = function(t) {
          var e, i, n;
          this.currentAdPod = t, -1 !== this.adPods.indexOf(t) && (this.usedPods.push(t), this.adPods.splice(this.adPods.indexOf(t), 1)), t.isPostRoll ? this.freezePositionAt = (null != (e = this.currentPlayerInstructions) && null != (i = e.content) ? i.duration : void 0) || 0 : this.freezePositionAt || (this.freezePositionAt = t.startPosition), this.freezePlayerAt(this.freezePositionAt), this.awpContainer.addClass("awp-ad-playing").removeClass("awp-paused").addClass("awp-playing"), null != (n = this.currentPlaylistItem) && n.addClass("awp-playlist-item-playing")
        }, t.prototype.popupFeatures = function() {
          var t, e, i, n, a, r;
          return r = 600, t = 400, n = window.screenLeft ? window.screenLeft : window.screenX, a = window.screenTop ? window.screenTop : window.screenY, e = n + window.innerWidth / 2 - r / 2, i = a + window.innerHeight / 2 - t / 2, "resizable,scrollbars,status,left=" + e + ",top=" + i + ",width=" + r + ",height=" + t
        }, t.prototype.postMessageIframeResize = function() {
          var t;
          window.parent !== window && (t = {
            context: "iframe.resize",
            src: window.location.toString(),
            height: $(".art19-web-player:first").height()
          }, window.parent.postMessage(JSON.stringify(t), "*"))
        }, t.prototype.postSetupAction = function() {
          this.playerApi.getPlaylist({
            initial: !0
          })
        }, t.prototype.reachedPodPosition = function(t, e) {
          return !!this.stopOnHittingAnAdPod() && (!!(e >= t.startPosition && (!this.lastPosition || this.lastPosition < t.startPosition) && this.canPickup) && (this.freezePositionAt = e, this.canPickup = !1, this.audioPlayback.pause(), setTimeout(function(e) {
              return function() {
                return t.play(), e.canPickup = !0
              }
            }(this), 0), !0))
        }, t.prototype.registerPartials = function() {
          Handlebars.registerPartial("descriptionOverlay", this.descriptionOverlayTemplate), Handlebars.registerPartial("embed", this.embedTemplate), Handlebars.registerPartial("playerShareOverlay", this.playerShareOverlayTemplate), Handlebars.registerPartial("playlistItems", this.playlistItemsTemplate), Handlebars.registerPartial("shareFlyout", this.shareFlyoutTemplate), Handlebars.registerPartial("subscribeFlyout", this.subscribeFlyoutTemplate)
        }, t.prototype.reportEpisodeTelemetry = function(t, e, i) {
          var n;
          this.currentPlayerInstructions && (e, isNaN(e) && (e = this.audioPlayback.currentTime), n = i || this.currentPlayerInstructions.tracking_url, this.playerApi.sendTelemetry(t, e, n))
        }, t.prototype.resetAllMarqueeElements = function() {
          return $(".awp-marquee", this.awpContainer).each(function(t) {
            return function(e, i) {
              if (!$(i).is(":empty")) return t.setupMarqueeElement(i)
            }
          }(this))
        }, t.prototype.resetEpisodeVersion = function(t) {
          this.awpContainer.removeClass("awp-ad-playing"), t && (this.config.episodeId = t, this.currentPlayerInstructions = void 0, this.freezePositionAt = void 0), this.usedPods = [], this.adPods = []
        }, t.prototype.secondsToTimecode = function(t) {
          var e, i, n, a;
          return e = moment.duration(1e3 * t), i = this.padNumber(e.get("hours"), 2), n = this.padNumber(e.get("minutes"), 2), a = this.padNumber(e.get("seconds"), 2), "00" !== i ? i + ":" + n + ":" + a : n + ":" + a
        }, t.prototype.setEpisodeDescription = function(t) {
          if ("true" === this.config.logging) return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log("Descendants might implement") : void 0
        }, t.prototype.setEpisodeTitle = function(t) {
          $(".awp-episode-title-content", this.awpContainer).text(t)
        }, t.prototype.setSeriesTitle = function(t) {
          $(".awp-series-title-content", this.awpContainer).text(t)
        }, t.prototype.setupPlayerAPI = function() {
          this.playerApi = new b.default(this.config), this.playerApi.emitter.on("playlist-loading", this.playlistLoading), this.playerApi.emitter.on("playlist-available", this.playlistAvailable), this.playerApi.emitter.on("playlist-failed", this.playlistFailed), this.playerApi.emitter.on("instructions-loading", this.instructionsLoading), this.playerApi.emitter.on("instructions-available", this.instructionsAvailable), this.playerApi.emitter.on("instructions-failed", this.instructionsFailed)
        }, t.prototype.setupPlayerJsReceiver = function() {
          var t, e, i, n, a;
          if ("undefined" != typeof playerjs && null !== playerjs) {
            for (n = [], a = playerjs.METHODS.all(), e = 0, i = a.length; e < i; e++) t = a[e], -1 === [playerjs.METHODS.SETLOOP, playerjs.METHODS.GETLOOP].indexOf(t) && n.push(t);
            this.playerjsReceiver = new playerjs.Receiver(null, n), this.playerjsReceiver.on(playerjs.METHODS.PLAY, function(t) {
              return function() {
                return t.playUnlessPlaying()
              }
            }(this)), this.playerjsReceiver.on(playerjs.METHODS.PAUSE, function(t) {
              return function() {
                return t.pauseUnlessPaused()
              }
            }(this)), this.playerjsReceiver.on(playerjs.METHODS.MUTE, function(t) {
              return function() {
                var e;
                if (!(null != (e = t.audioPlayback) ? e.getMuted() : void 0)) return t.toggleMute()
              }
            }(this)), this.playerjsReceiver.on(playerjs.METHODS.UNMUTE, function(t) {
              return function() {
                var e;
                if (null != (e = t.audioPlayback) ? e.getMuted() : void 0) return t.toggleMute()
              }
            }(this)), this.playerjsReceiver.on(playerjs.METHODS.GETCURRENTTIME, function(t) {
              return function(e) {
                var i, n;
                return n = t.frozen ? t.awpAdProgress.slider("option", "value") : t.awpEpisodeProgress.slider("option", "value"), isNaN(n) && (n = null != (i = t.audioPlayback) ? i.currentTime : void 0), e(n)
              }
            }(this)), this.playerjsReceiver.on(playerjs.METHODS.SETCURRENTTIME, function(t) {
              return function(e) {
                var i;
                if (!isNaN(e)) return null != (i = t.audioPlayback) ? i.setCurrentTime(Number(e)) : void 0
              }
            }(this)), this.playerjsReceiver.on(playerjs.METHODS.GETDURATION, function(t) {
              return function(e) {
                var i, n, a;
                return i = null != (n = t.currentPlayerInstructions) && null != (a = n.content) ? a.duration : void 0, e(i)
              }
            }(this)), this.playerjsReceiver.on(playerjs.METHODS.GETMUTED, function(t) {
              return function(e) {
                var i;
                return e(null != (i = t.audioPlayback) ? i.getMuted() : void 0)
              }
            }(this)), this.playerjsReceiver.on(playerjs.METHODS.GETPAUSED, function(t) {
              return function(e) {
                var i, n;
                return n = !0 === (null != (i = t.audioPlayback) ? i.paused : void 0), e(n)
              }
            }(this)), this.playerjsReceiver.on(playerjs.METHODS.GETVOLUME, function(t) {
              return function(e) {
                var i, n;
                return n = null != (i = t.audioPlayback) ? i.getVolume() : void 0, e(n ? 100 * n : n)
              }
            }(this)), this.playerjsReceiver.on(playerjs.METHODS.SETVOLUME, function(t) {
              return function(e) {
                var i;
                if (!isNaN(e)) return i = Number(e), t.setVolume(i), t.awpVolumeSlider.slider("option", "value", i)
              }
            }(this))
          }
        }, t.prototype.setupProgressSliders = function() {
          this.awpEpisodeProgress = $(".awp-progress-container .awp-progress", this.awpContainer).slider({
            min: 0,
            max: 0,
            range: "min",
            step: .01,
            start: function(t) {
              return function(e, i) {
                return t.scrubbing = !0
              }
            }(this),
            stop: function(t) {
              return function(e, i) {
                var n;
                return t.audioPlayback && (n = t.audioPlayback.paused, n || t.reportEpisodeTelemetry("pause"), t.stopOnHittingAnAdPod() || (t.lastPosition = i.value), t.audioPlayback.setCurrentTimeInEventuallyLoadedFile(t.episodeMediaUrl, t.audioContextId, i.value), n || t.reportEpisodeTelemetry("play")), t.scrubbing = !1
              }
            }(this)
          }), this.awpAdProgress = $(".awp-ad-progress-container .awp-ad-progress", this.awpContainer).slider({
            min: 0,
            max: 0,
            step: .01,
            range: "min"
          }).slider("disable"), this.awpEpisodeBuffer = $(".awp-progress-container .awp-buffered", this.awpContainer)
        }, t.prototype.setupClipboardjs = function() {
          var t, e, i, n, a;
          this.config.embedEnabled && (t = $(".awp-iframe-player-code-input-container .awp-standard-btn", this.awpContainer), e = $(".awp-iframe-player-code-input-container .awp-input", this.awpContainer), i = $(".awp-clipboard-copy-tooltip", this.awpContainer), a = 2500, n = new Clipboard(t.get(0), {
            target: function() {
              return e.get(0)
            }
          }), n.on("success", function() {
            return i.text("Copied!").addClass("awp-show").delay(a).fadeOut()
          }), n.on("error", function() {
            return i.text("Press ⌘+C/Ctrl+C to copy").addClass("awp-show").delay(a).fadeOut()
          }))
        }, t.prototype.setupMarqueeElement = function(t) {
          var e, i, n, a, r, o, s, l, u, p, d, c, h;
          u = this.config.marqueeDelay, l = this.config.marqueeSpeed, p = this.config.marqueeGap, n = $(t), a = n.find(".awp-marquee-inner"), o = a.find(".awp-marquee-scroll-element"), e = o.find("span"), r = o.find("span:first-child"), i = o.find(".awp-marquee-duplicate"), h = r[0].scrollWidth, s = n.innerWidth(), e.css("padding-right", p), i.hide(!1), o.css("animation-play-state", "paused"), o.removeClass("animate"), o.offsetWidth, h > s && (i.css("display", "inline-block"), o.addClass("animate"), this.startMarquee({
            element: o,
            delay: u,
            speed: h / l
          })), d = function(t) {
            if (t.preventDefault(), t.data.sW > t.data.cW) return o.css("animation-play-state", "paused")
          }, c = function(t) {
            if (t.preventDefault(), t.data.sW > t.data.cW) return o.css("animation-play-state", "running")
          }, a.off("mouseenter touchstart"), a.off("mouseleave touchend"), a.on("mouseenter touchstart", {
            sW: h,
            cW: s
          }, d), a.on("mouseleave touchend", {
            sW: h,
            cW: s
          }, c)
        }, t.prototype.shareFlyoutTemplate = Handlebars.template(A.default), t.prototype.shareViaTwitter = function() {
          var t, e, i, n, a;
          (n = this.getShareConfiguration("TwitterShareConfiguration")) && (encodeURIComponent(this.config.apiUrl + "/close_window.html"), t = encodeURIComponent(n.body), i = this.popupFeatures(), a = "".concat("https://twitter.com/intent/tweet?", "url=" + n.encodedUrl, "&text=" + t), e = this.config.episodeId, setImmediate(function(t) {
            return function() {
              return t.eventDispatcher.share({
                episodeId: e,
                channel: "Twitter",
                url: a
              })
            }
          }(this)), window.open(a, "TwitterShare", i))
        }, t.prototype.shareViaFacebook = function() {
          var t, e, i, n, a, r, o, s, l, u;
          t = null != (o = this.currentPlayerInstructions) && null != (s = o.content) ? s.facebook_app_id : void 0, l = this.getShareConfiguration("FacebookShareConfiguration"), t && l && (e = encodeURIComponent(this.config.apiUrl + "/close_window.html"), n = this.popupFeatures(), r = l.body ? "&quote=" + encodeURIComponent(l.body) : "", a = l.hashtag ? "&hashtag=" + encodeURIComponent(l.hashtag) : "", u = "".concat("https://www.facebook.com/v2.9/dialog/share?", "app_id=" + t, "&display=popup", "&href=" + l.encodedUrl, "&redirect_uri=" + e, r, a), i = this.config.episodeId, setImmediate(function(t) {
            return function() {
              return t.eventDispatcher.share({
                episodeId: i,
                channel: "Facebook",
                url: u
              })
            }
          }(this)), window.open(u, "FacebookShare", n))
        }, t.prototype.shareViaLinkedIn = function() {
          var t, e, i, n, a, r;
          (a = this.getShareConfiguration("LinkedInShareConfiguration")) && (encodeURIComponent(this.config.apiUrl + "/close_window.html"), e = encodeURIComponent(a.title), t = encodeURIComponent(a.body), n = this.popupFeatures(), r = "".concat("https://www.linkedin.com/shareArticle?", "&url=" + a.encodedUrl, "&title=" + e, "&summary=" + t), i = this.config.episodeId, setImmediate(function(t) {
            return function() {
              return t.eventDispatcher.share({
                episodeId: i,
                channel: "LinkedIn",
                url: r
              })
            }
          }(this)), window.open(r, "LinkedInShare", n))
        }, t.prototype.showPlayerShareOverlay = function() {
          $(".awp-media-share-container", this.awpContainer).addClass("awp-disable"), this.awpPlayerShareOverlay.addClass("awp-show")
        }, t.prototype.simpleFormat = function(t, e) {
          var i, n, a, r, o, s, l, u, p, d;
          if (d = (null != e ? e.wrapperTag : void 0) || "p", null != t && String(t).trim().length > 0) {
            for (l = [], u = String(t).replace(/\r\n?/, "\n").split(/\n\n+/), i = 0, a = u.length; i < a; i++) o = u[i], l.push(Handlebars.escapeExpression(o).replace(/([^\n]\n)(?=[^\n])/, "$1<br />"));
            if (0 === l.length) return "<" + d + "></" + d + ">";
            for (p = [], n = 0, r = l.length; n < r; n++) s = l[n], p.push("<" + d + ">" + s + "</" + d + ">");
            return p.join("\n\n")
          }
        }, t.prototype.startMarquee = function(t) {
          $(t.element).hasClass("animate") && $(t.element).css({
            "animation-delay": t.delay + "s",
            "animation-duration": t.speed / 2 + "s",
            "animation-play-state": "running"
          })
        }, t.prototype.setVolume = function(t) {
          this.audioPlayback && (this.audioPlayback.setVolume(t / 100), this.awpVolumeButtons.each(function(e) {
            return $(this).data("value") <= t ? $(this).addClass("active") : $(this).removeClass("active")
          }))
        }, t.prototype.showErrorMessage = function(t) {
          this.awpContainer.addClass("awp-error").removeClass("awp-loading"), $(".awp-error-message", this.awpContainer).attr("title", t), $(".awp-error-message-content", this.awpContainer).text(t), this.setSeriesTitle("Not Available"), this.setEpisodeTitle("Not Available")
        }, t.prototype.showWaitSpinner = function() {
          x(function(t) {
            return function() {
              return t.awpContainer.addClass("awp-skipping")
            }
          }(this))
        }, t.prototype.shutUp = function() {
          this.audioPlayback && (this.audioPlayback.paused || this.audioPlayback.pause())
        }, t.prototype.startPreRoll = function() {
          var t;
          return !(0 === this.adPods.length || this.audioPlayback.currentTime > 0) && (t = this.adPods[0].isPreRoll, t && this.adPods[0].play(), t)
        }, t.prototype.stopOnHittingAnAdPod = function() {
          return !0
        }, t.prototype.subscribeFlyoutTemplate = Handlebars.template(E.default), t.prototype.template = function() {
          throw new Error("You must implement #template()")
        }, t.prototype.toggleMute = function() {
          var t;
          this.audioPlayback && (t = !this.awpMuteToggle.hasClass("muted"), this.audioPlayback.setMuted(t), x(t ? function(t) {
            return function() {
              return t.awpMuteToggle.addClass("muted"), t.awpVolumeButtons.addClass("muted"), t.awpVolumeSlider.addClass("muted")
            }
          }(this) : function(t) {
            return function() {
              return t.awpVolumeButtons.removeClass("muted"), t.awpMuteToggle.removeClass("muted"), t.awpVolumeSlider.removeClass("muted")
            }
          }(this)))
        }, t.prototype.togglePlayback = function() {
          this.audioPlayback && (this.audioPlayback.paused ? this.playUnlessPlaying() : this.pauseUnlessPaused())
        }, t.prototype.triggerPostRoll = function() {
          var t, e;
          return e = function() {
            var e, i, n, a;
            for (n = this.adPods, a = [], e = 0, i = n.length; e < i; e++) t = n[e], t.isPostRoll && a.push(t);
            return a
          }.call(this), (null != e ? e.length : void 0) > 0 ? e[0].play() : (this.blockSeekTriggers = !0, this.audioPlayback.setCurrentTime(0), setImmediate(function(t) {
            return function() {
              return t.eventDispatcher.ended()
            }
          }(this)))
        }, t.prototype.updateProgressSliders = function() {
          this.awpEpisodeProgress.slider("option", "max", this.currentPlayerInstructions.content.duration)
        }, t.prototype.updateAdvertisementPlayback = function(t, e, i) {
          var n, a, r;
          n = e.duration, a = e.id, r = this.secondsToTimecode(i), x(function(t) {
            return function() {
              return t.awpCurrentTime.text(r), t.awpAdProgress.slider("option", "value", i)
            }
          }(this)), e && setImmediate(function(t) {
            return function() {
              return t.eventDispatcher.timeupdate({
                advertisementId: a,
                seconds: i,
                duration: n
              })
            }
          }(this))
        }, t.prototype.usableCoverImage = function() {
          var t, e, i, n, a, r, o, s, l, u, p, d;
          if (null != this.currentPlayerInstructions.content) {
            if (n = null, null != (a = this.currentPlayerInstructions.content) && null != (r = a.artwork) ? r.episode : void 0)
              for (d = this.config.rootNode.width() < 444 ? 888 : 400, l = null != (o = this.currentPlayerInstructions.content) && null != (s = o.artwork) ? s.episode : void 0, e = 0, i = l.length; e < i; e++) t = l[e], "image/jpeg" === (null != t ? t.content_type : void 0) && (null != t ? t.width : void 0) >= d && (null != t ? t.height : void 0) > 0 && (null != t ? t.url : void 0) && (null === n || t.width < n.width) && (n = t);
            return n ? n.url : (null != (u = this.currentPlayerInstructions.content) ? u.cover_image : void 0) && null != (p = this.currentPlayerInstructions.content) ? p.cover_image : void 0
          }
        }, t.prototype.useProperBrandImage = function() {
          var t;
          t = $("<img />"), t.prop({
            src: this.config.logoUrl,
            alt: "ART19"
          }), this.awpContainer.find(".awp-brand-logo").empty().append(t)
        }, t.prototype.windowResized = function() {
          this.postMessageIframeResize(), x(function(t) {
            return function() {
              var e, i;
              if (t.resetAllMarqueeElements(), t.coverImageNode) return e = t.usableCoverImage(), i = t.coverImageNode.prop("src"), e && i !== e ? t.coverImageNode.prop("src", e) : void 0
            }
          }(this))
        }, t
      }(), e.exports = w
    });
    define("art19-web-player/art19-consumer-page-player", ["exports", "module", "art19-web-player/art19-base-player", "art19-web-player/templates/art19-consumer-page-player", "request-frame"], function(t, e, i, n, r) {
      "use strict";

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      var a, s = o(i),
        p = o(n),
        c = o(r),
        u = (0, c.default)("request"),
        f = function(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        },
        l = function(t, e) {
          function i() {
            this.constructor = t
          }
          for (var n in e) h.call(e, n) && (t[n] = e[n]);
          return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
        },
        h = {}.hasOwnProperty;
      a = function(t) {
        function e(t, i) {
          this.config = t, this.currentPlayerInstructions = i, this.updatePlayheadPosition = f(this.updatePlayheadPosition, this), this.stopOnHittingAnAdPod = f(this.stopOnHittingAnAdPod, this), this.setupProgressSliders = f(this.setupProgressSliders, this), this.postSetupAction = f(this.postSetupAction, this), this.latePickup = f(this.latePickup, this), this.configurePlayerWithResponse = f(this.configurePlayerWithResponse, this), this.afterTemplate = f(this.afterTemplate, this), e.__super__.constructor.call(this, this.config, this.currentPlayerInstructions), this.startPlaybackAfterFetch = !0, this.config.rootNode.on("episode-id-changed", function(t) {
            return function(e, i, n) {
              return t.playerApi.getInstructions(i, {
                initial: !0,
                autoPlay: n
              })
            }
          }(this))
        }
        return l(e, t), e.prototype.afterTemplate = function(t) {
          this.iconSet(), t = this.template({
            icons: this.iconSet()
          }), this.awpContainer = $(t), this.awpTotalTime = $(".cp-total-time", this.awpContainer), this.awpCurrentTime = $(".cp-current-time", this.awpContainer), this.awpCurrentAd = $(".cp-current-ad", this.awpContainer), this.awpAdPodSize = $(".cp-ad-pod-size", this.awpContainer)
        }, e.prototype.configurePlayerWithResponse = function() {
          var t, i, n;
          e.__super__.configurePlayerWithResponse.call(this), t = [], (null != (i = this.currentPlayerInstructions.content) ? i.series_title : void 0) && t.push(this.currentPlayerInstructions.content.series_title), (null != (n = this.currentPlayerInstructions.content) ? n.episode_title : void 0) && t.push(this.currentPlayerInstructions.content.episode_title), u(function(e) {
            return function() {
              return $(".cp-episode-details", e.awpContainer).text(t.join(" | "))
            }
          }(this))
        }, e.prototype.iconSet = function() {
          return this.config.rootNode.data("debug") ? {
            fbw: "awp-icon awp-icon-fast-bw",
            ffw: "awp-icon awp-icon-fast-fw",
            fpl: "awp-icon awp-icon-play fa-play awp-icon-2x",
            fpa: "awp-icon awp-icon-pause fa-pause awp-icon-2x",
            fsp: "awp-icon awp-icon-spinner awp-icon-rotate awp-icon-2x",
            fer: "awp-icon awp-icon-attention awp-icon-2x",
            mute: "awp-icon awp-icon-volume-off"
          } : {
            fbw: "fa fa-fast-backward",
            ffw: "fa fa-fast-forward",
            fpl: "fa fa-play fa-2x",
            fpa: "fa fa-pause fa-2x",
            fsp: "fa fa-spinner fa-spin fa-2x",
            fer: "fa fa-warning fa-2x",
            mute: "fa fa-volume-off"
          }
        }, e.prototype.latePickup = function() {
          this.startPlaybackAfterFetch = !1, this.config.episodeId && this.playerApi.getPlaylist({
            initial: !0
          })
        }, e.prototype.postSetupAction = function() {}, e.prototype.setupProgressSliders = function() {
          this.awpEpisodeProgress = $(".cp-progress-container .cp-progress", this.awpContainer).slider({
            min: 0,
            max: 0,
            range: "min",
            step: .01,
            start: function(t) {
              return function(e, i) {
                return t.scrubbing = !0
              }
            }(this),
            stop: function(t) {
              return function(e, i) {
                var n;
                return n = t.audioPlayback.paused, n || t.reportEpisodeTelemetry("pause"), t.stopOnHittingAnAdPod() || (t.lastPosition = i.value), t.audioPlayback.setCurrentTimeInEventuallyLoadedFile(t.episodeMediaUrl, t.audioContextId, i.value), n || t.reportEpisodeTelemetry("play"), t.scrubbing = !1
              }
            }(this)
          }), this.awpAdProgress = $(".cp-ad-progress-container .cp-ad-progress", this.awpContainer).slider({
            min: 0,
            max: 0,
            step: .01,
            range: "min"
          }).slider("disable"), this.awpEpisodeBuffer = $(".cp-progress-container .cp-buffered", this.awpContainer)
        }, e.prototype.stopOnHittingAnAdPod = function() {
          return !this.scrubbing
        }, e.prototype.template = Handlebars.template(p.default), e.prototype.updatePlayheadPosition = function() {
          var t;
          t = this.audioPlayback.currentTime, this.awpCurrentTime.text(this.secondsToTimecode(t)), this.awpTotalTime.text(this.secondsToTimecode(this.currentPlayerInstructions.content.duration)), this.scrubbing || this.awpEpisodeProgress.slider("option", "value", t)
        }, e.prototype.useProperBrandImage = function() {}, e
      }(s.default), e.exports = a
    });
    define("art19-web-player/art19-event-dispatcher", ["exports", "module"], function(t, e) {
      "use strict";
      var i, o = function(t, e) {
        return function() {
          return t.apply(e, arguments)
        }
      };
      i = function() {
        function t(t, e) {
          var i;
          this.config = t, this.playerjsReceiver = e, this.timeupdate = o(this.timeupdate, this), this.subscribe = o(this.subscribe, this), this.share = o(this.share, this), this.seeking = o(this.seeking, this), this.seeked = o(this.seeked, this), this.progress = o(this.progress, this), this.play = o(this.play, this), this.pause = o(this.pause, this), this.ended = o(this.ended, this), this.emitToRootNode = o(this.emitToRootNode, this), this.emitToPlayerJs = o(this.emitToPlayerJs, this), this.download = o(this.download, this), this.emitter = new EventEmitter, this.config.rootNode[0].art19Events = this.emitter, this.emitLocal = !0 === this.config.rootNode.data("emit-events"), this.emitPlayerJs = !1 === (null != (i = this.playerjsReceiver) ? i.reject : void 0)
        }
        return t.prototype.download = function(t) {
          this.emitToRootNode("download", {
            episodeId: t.episodeId,
            url: t.url
          })
        }, t.prototype.emitToPlayerJs = function(t, e) {
          return !!this.emitPlayerJs && (this.playerjsReceiver.emit(t, e), !0)
        }, t.prototype.emitToRootNode = function(t, e) {
          return !!this.emitLocal && (this.emitter.emit(t, e), !0)
        }, t.prototype.ended = function(t) {
          null != t && t.advertisementId || this.emitToPlayerJs(playerjs.EVENTS.ENDED) || this.emitToRootNode("ended", t)
        }, t.prototype.pause = function(t) {
          null != t && t.advertisementId || this.emitToPlayerJs(playerjs.EVENTS.PAUSE) || this.emitToRootNode("pause", t)
        }, t.prototype.play = function(t) {
          null != t && t.advertisementId || this.emitToPlayerJs(playerjs.EVENTS.PLAY) || this.emitToRootNode("play", t)
        }, t.prototype.progress = function(t) {
          var e;
          null != t && t.advertisementId || (e = {
            percent: t.percent,
            seconds: t.total,
            duration: t.duration
          }, this.emitToPlayerJs(playerjs.EVENTS.PROGRESS, e) || this.emitToRootNode("progress", e))
        }, t.prototype.seeked = function(t) {
          this.emitToRootNode("seeked", t)
        }, t.prototype.seeking = function(t) {
          this.emitToRootNode("seeking", t)
        }, t.prototype.share = function(t) {
          this.emitToRootNode("share", t)
        }, t.prototype.subscribe = function(t) {
          this.emitToRootNode("subscribe", t)
        }, t.prototype.timeupdate = function(t) {
          if (!(null != t && t.advertisementId || this.emitToPlayerJs(playerjs.EVENTS.TIMEUPDATE, {
              seconds: t.seconds,
              duration: t.duration
            }))) return this.emitToRootNode("timeupdate", {
            seconds: t.seconds,
            duration: t.duration
          })
        }, t
      }(), e.exports = i
    });
    define("art19-web-player/art19-medium-player", ["exports", "module", "art19-web-player/art19-base-player", "art19-web-player/templates/art19-medium-player", "request-frame"], function(t, e, i, o, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      var a, s = r(i),
        p = r(o),
        u = r(n),
        l = (0, u.default)("request"),
        h = function(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        },
        d = function(t, e) {
          function i() {
            this.constructor = t
          }
          for (var o in e) c.call(e, o) && (t[o] = e[o]);
          return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
        },
        c = {}.hasOwnProperty;
      a = function(t) {
        function e() {
          return this.updatePlayheadPosition = h(this.updatePlayheadPosition, this), this.stopOnHittingAnAdPod = h(this.stopOnHittingAnAdPod, this), this.setEpisodeDescription = h(this.setEpisodeDescription, this), this.configurePlayerWithResponse = h(this.configurePlayerWithResponse, this), this.afterTemplate = h(this.afterTemplate, this), this.applyCustomization = h(this.applyCustomization, this), e.__super__.constructor.apply(this, arguments)
        }
        return d(e, t), e.prototype.applyCustomization = function() {
          this.awpContainer.find(".awp-waveform-overlay-not-supported").length || $(".awp-waveform-overlay", this.awpContainer).addClass("awp-show").css({
            backgroundPositionX: this.waveformOverlayPosition
          })
        }, e.prototype.afterTemplate = function(t) {
          this.awpLeft = $(".awp-left", this.awpContainer), this.awpRight = $(".awp-right", this.awpContainer), this.awpAdTrtTime = $(".awp-ad-trt .awp-ad-time-left", this.awpContainer), this.awpTotalTime = $(".awp-total-time", this.awpContainer), this.awpCurrentTime = $(".awp-current-time", this.awpContainer), this.awpCurrentAd = $(".awp-current-ad", this.awpContainer), this.awpAdPodSize = $(".awp-ad-pod-size", this.awpContainer)
        }, e.prototype.configurePlayerWithResponse = function() {
          var t, i, o, n, r, a, s, p, u;
          e.__super__.configurePlayerWithResponse.call(this), t = this.usableCoverImage(), i = null != (r = this.currentPlayerInstructions.content) ? r.episode_description : void 0, o = null != (a = this.currentPlayerInstructions.content) ? a.episode_description_is_html : void 0, n = null != (s = this.currentPlayerInstructions.content) ? s.episode_title : void 0, u = null != (p = this.currentPlayerInstructions.content) ? p.series_title : void 0, l(function(e) {
            return function() {
              var r, a;
              return e.setSeriesTitle(u), e.setEpisodeTitle(n), e.setEpisodeDescription(i, o), t && (a = $(".awp-thumbnail", e.awpLeft), a.length > 0 ? a.prop("src", t) : (r = $('<img alt="Cover Image" class="awp-thumbnail">'), r.prop("src", t), e.awpLeft.append(r))), e.coverImageNode = $(".awp-thumbnail", e.awpLeft)
            }
          }(this))
        }, e.prototype.setEpisodeDescription = function(t, e) {
          var i;
          i = e ? t : this.simpleFormat(t), $(".awp-overlay-episode-description", this.awpContainer).html(i), (null != i ? i.length : void 0) > 0 ? $(".awp-media-description-btn", this.awpContainer).addClass("awp-show") : $(".awp-media-description-btn", this.awpContainer).removeClass("awp-show")
        }, e.prototype.stopOnHittingAnAdPod = function() {
          return !this.scrubbing
        }, e.prototype.template = Handlebars.template(p.default), e.prototype.updatePlayheadPosition = function() {
          var t;
          t = this.audioPlayback.currentTime, this.awpCurrentTime.text(this.secondsToTimecode(t)), this.awpTotalTime.text(this.secondsToTimecode(this.currentPlayerInstructions.content.duration)), this.scrubbing || this.awpEpisodeProgress.slider("option", "value", t)
        }, e.prototype.waveformOverlayPosition = function() {
          return Math.floor(273 * Math.random() + 1)
        }, e
      }(s.default), e.exports = a
    });
    define("art19-web-player/art19-micro-player", ["exports", "module", "art19-web-player/art19-base-player", "art19-web-player/templates/art19-micro-player"], function(t, e, i, o) {
      "use strict";

      function n(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      var r, s = n(i),
        a = n(o),
        p = function(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        },
        u = function(t, e) {
          function i() {
            this.constructor = t
          }
          for (var o in e) c.call(e, o) && (t[o] = e[o]);
          return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
        },
        c = {}.hasOwnProperty;
      r = function(t) {
        function e() {
          return this.updatePlayheadPosition = p(this.updatePlayheadPosition, this), this.postSetupAction = p(this.postSetupAction, this), this.stopOnHittingAnAdPod = p(this.stopOnHittingAnAdPod, this), this.configurePlayerWithResponse = p(this.configurePlayerWithResponse, this), this.afterTemplate = p(this.afterTemplate, this), e.__super__.constructor.apply(this, arguments)
        }
        return u(e, t), e.prototype.afterTemplate = function(t) {
          this.awpTotalTime = $(".awp-total-time", this.awpContainer), this.awpCurrentTime = $(".awp-current-time", this.awpContainer), this.awpCurrentAd = $(".awp-current-ad", this.awpContainer), this.awpAdPodSize = $(".awp-ad-pod-size", this.awpContainer)
        }, e.prototype.configurePlayerWithResponse = function() {
          e.__super__.configurePlayerWithResponse.call(this), this.currentPlayerInstructions.content.duration >= 3600 && $(".awp-right", this.awpContainer).addClass("awp-right-lg"), this.awpContainer.removeClass("awp-not-loaded")
        }, e.prototype.stopOnHittingAnAdPod = function() {
          return !this.scrubbing
        }, e.prototype.template = Handlebars.template(a.default), e.prototype.postSetupAction = function() {
          var t;
          this.config.preload ? e.__super__.postSetupAction.call(this) : (this.configureDownloadLink(), this.config.customSlug && this.config.episodeId ? (t = this.config.apiUrl.replace("//rss.", "//") + "/shows/" + this.config.customSlug + "/episodes/" + this.config.episodeId + "/embed", t = t.replace(/^http:/, "https:"), this.configureEmbedCodeFlyout(t)) : this.configureEmbedCodeFlyout(void 0), this.config.customDuration ? requestAnimationFrame(function(t) {
            return function() {
              return t.awpTotalTime.text(t.config.customDuration)
            }
          }(this)) : requestAnimationFrame(function(t) {
            return function() {
              return t.awpContainer.addClass("awp-not-loaded")
            }
          }(this)))
        }, e.prototype.updatePlayheadPosition = function() {
          var t;
          t = this.audioPlayback.currentTime, this.awpCurrentTime.text(this.secondsToTimecode(t)), this.awpTotalTime.text(this.secondsToTimecode(this.currentPlayerInstructions.content.duration)), this.scrubbing || this.awpEpisodeProgress.slider("option", "value", t)
        }, e
      }(s.default), e.exports = r
    });
    define("art19-web-player/art19-player-api", ["exports", "module"], function(t, e) {
      "use strict";
      var i, n = function(t, e) {
        return function() {
          return t.apply(e, arguments)
        }
      };
      i = function() {
        function t(t) {
          this.config = t, this.sendTelemetry = n(this.sendTelemetry, this), this.getInstructions = n(this.getInstructions, this), this.getPlaylist = n(this.getPlaylist, this), this.emitter = new EventEmitter, this.nextPage = 1, this.remotePlaylist = this.config.seriesId && ["latest", "playlist"].indexOf(this.config.pickFromSeries) > -1
        }
        return t.prototype.getPlaylist = function(t) {
          var e, i, n;
          this.emitter.emit("playlist-loading", t), e = (null != t ? t.pageSize : void 0) || this.config.playlistRows || 7, this.remotePlaylist ? (i = {
            series_id: this.config.seriesId,
            page: {
              number: this.nextPage,
              size: e
            }
          }, "latest" === this.config.pickFromSeries && (i.latest = !0), n = this.config.apiUrl + "/episodes?" + $.param(i), this.config.mock_playlist_json_url && (n = this.config.mock_playlist_json_url), $.ajax(n, {
            type: "GET",
            dataType: "json",
            beforeSend: function(t) {
              return t.setRequestHeader("Accept", "application/json")
            },
            success: function(e) {
              return function(i) {
                var n;
                return e.nextPage = null != i && null != (n = i.meta) ? n.next_page : void 0, e.emitter.emit("playlist-available", i.episodes, i.meta, t)
              }
            }(this),
            error: function(e) {
              return function(i, n, s) {
                return e.emitter.emit("playlist-failed", i, n, s, t)
              }
            }(this)
          })) : this.emitter.emit("playlist-available", [{
            id: this.config.episodeId
          }], void 0, t)
        }, t.prototype.getInstructions = function(t, e) {
          var i;
          i = this.config.apiUrl + "/episodes/" + t, this.config.mock_json_url && (i = this.config.mock_json_url), $.ajax(i, {
            type: "GET",
            dataType: "json",
            beforeSend: function(i) {
              return function(n) {
                return i.emitter.emit("instructions-loading", t, e), n.setRequestHeader("Accept", "application/json")
              }
            }(this),
            success: function(i) {
              return function(n) {
                return i.emitter.emit("instructions-available", n, t, e)
              }
            }(this),
            error: function(i) {
              return function(n, s, r) {
                return i.emitter.emit("instructions-failed", n, s, r, t, e)
              }
            }(this)
          })
        }, t.prototype.sendTelemetry = function(t, e, i) {
          if (isNaN(Number(e))) throw new Error("Position must be a number");
          if (!i) throw new Error("TrackingUrl must be provided");
          return $.ajax(i, {
            type: "PUT",
            data: {
              event: t,
              position: Number(e),
              api_client: this.config.apiClient,
              api_client_info: this.config.apiClientInfo,
              api_client_version: this.config.apiClientVersion
            },
            error: function(t, e, i) {
              return "undefined" != typeof console && null !== console && "function" == typeof console.error ? console.error("Unable to send telemetry details:", t.status, e, i) : void 0
            }
          })
        }, t
      }(), e.exports = i
    });
    define("art19-web-player", ["exports", "module", "art19-web-player/ad-pod", "art19-web-player/art19-artwork-player", "art19-web-player/art19-consumer-page-player", "art19-web-player/art19-medium-player", "art19-web-player/art19-micro-player", "art19-web-player/util"], function(e, t, i, o, a, s, r, d) {
      "use strict";

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var h, p = (n(i), n(o)),
        l = n(a),
        c = n(s),
        u = n(r),
        m = n(d),
        w = ["localhost", "nytimes.com"],
        g = function(e, t) {
          return function() {
            return e.apply(t, arguments)
          }
        };
      h = function() {
        function e(e) {
          this.rootNode = e, this.instantiatePlayer = g(this.instantiatePlayer, this), this.playerType = g(this.playerType, this), this.setCustomizationDefaults = g(this.setCustomizationDefaults, this), this.episodeIdChanged = g(this.episodeIdChanged, this), this.applyResponsiveQueries = g(this.applyResponsiveQueries, this), this.instance = void 0, this.episodeId = this.rootNode.data("episode-id"), this.seriesId = this.rootNode.data("series-id"), this.pickFromSeries = this.rootNode.data("pick-from-series"), this.apiUrl = this.rootNode.data("api-url") || window.location.protocol + "//rss.art19.com", this.setCustomizationDefaults(), this.rootNode.on("episode-id-changed", this.episodeIdChanged), (this.episodeId || this.seriesId) && this.instantiatePlayer()
        }
        return e.prototype.applyResponsiveQueries = function() {
          var e;
          if (!this.rootNode.attr("data-squery")) {
            switch (this.playerType()) {
              case "medium":
              case "medium-alt":
                e = "max-width:274px=awp-size-1 max-width:284px=awp-size-2 max-width:374px=awp-size-3 max-width:444px=awp-size-4 max-width:484px=awp-size-5 max-width:574px=awp-size-6 max-width:594px=awp-size-7 max-width:644px=awp-size-8 max-width:114px=awp-size-1-iframe max-width:184px=awp-size-2-iframe max-width:214px=awp-size-3-iframe max-width:324px=awp-size-4-iframe max-width:444px=awp-size-5-iframe";
                break;
              case "micro":
                e = "max-width:200px=awp-size-1 max-width:314px=awp-size-2 max-width:404px=awp-size-3 max-width:528px=awp-size-4";
                break;
              case "artwork":
                e = "max-width:388px=awp-size-1";
                break;
              default:
                e = void 0
            }
            this.rootNode.attr("data-squery", e)
          }
        }, e.prototype.episodeIdChanged = function(e, t, i) {
          if (this.rootNode.off("episode-id-changed", this.episodeIdChanged), this.episodeId = t, this.setCustomizationDefaults(), !this.instance) return this.instantiatePlayer(), this.instance.latePickup()
        }, e.prototype.setCustomizationDefaults = function() {
          var t, i, o;
          if (t = m.default.detectHost(), this.config = {
              adProgressColor: this.rootNode.data("ad-progress-color"),
              apiClient: "com.art19.web-player",
              apiClientInfo: t,
              apiClientVersion: e.VERSION || "0.0.48",
              apiUrl: this.apiUrl,
              backgroundColor: this.rootNode.data("background-color"),
              brandLogo: {
                disabled: !1 === this.rootNode.data("brand-logo-enabled"),
                positionRight: "right" === this.rootNode.data("brand-logo-position")
              },
              customDuration: this.rootNode.data("duration"),
              customSlug: this.rootNode.data("slug"),
              downloadEnabled: void 0 === this.rootNode.data("download-enabled") || !0 === this.rootNode.data("download-enabled"),
              episodeId: this.episodeId,
              loadFromSeries: void 0 !== this.seriesId && void 0 === this.episodeId,
              linkSeriesPage: !0 === this.rootNode.data("link-series-page"),
              logging: !0 === this.rootNode.data("logging") || "true" === this.rootNode.data("logging"),
              logoUrl: "https://web-player.art19.com/assets/art19-logo-white-9e1752d20ef73f2aa943a8a855df75da.png",
              marqueeSpeed: 10,
              marqueeDelay: 4,
              marqueeGap: 50,
              mock_json_url: this.rootNode.data("mock-json-url"),
              mock_playlist_json_url: this.rootNode.data("mock-playlist-json-url"),
              nodeId: this.seriesId + "-" + this.episodeId + "-" + this.pickFromSeries + "-" + (new Date).getTime() + "-" + Math.floor(1e5 * Math.random()),
              pickFromSeries: this.pickFromSeries,
              playerHeight: this.rootNode.data("player-height") || 200,
              playerWidth: this.rootNode.data("player-width") || 720,
              preload: void 0 === this.rootNode.data("preload") || !0 === this.rootNode.data("preload"),
              primaryColor: this.rootNode.data("primary-color") || void 0,
              progressColor: this.rootNode.data("progress-color") || this.rootNode.data("primaryColor"),
              responsive: this.rootNode.data("responsive") || !0,
              requireTemplate: this.rootNode.data("require-template") || !1,
              rootNode: this.rootNode,
              seriesId: this.seriesId,
              shareEnabled: void 0 === this.rootNode.data("share-enabled") || !0 === this.rootNode.data("share-enabled"),
              seriesConfiguration: {
                skipAdEnabled: void 0 === this.rootNode.data("skip-ad-enabled") || this.rootNode.data("skip-ad-enabled")
              },
              textColor: this.rootNode.data("text-color") || "white",
              waveformBgColor: "rgba(255, 255, 255, 0.2)"
            }, this.config.requireTemplate && !window.require) throw new Error("Cannot require template `" + this.config.requireTemplate + "` because window.require is not defined.");
          if (this.config.embedEnabled = function() {
              switch (this.playerType()) {
                case "micro":
                case "consumer":
                  return !0 === this.rootNode.data("embed-enabled");
                default:
                  return void 0 === this.rootNode.data("embed-enabled") || !0 === this.rootNode.data("embed-enabled")
              }
            }.call(this), o = this.rootNode.data("playlist-rows"), isNaN(o) || (this.config.playlistRows = Number(o), this.config.playlistRows > 30 && (this.config.playlistRows = 30), this.config.playlistRows < 3 && (this.config.playlistRows = 3), this.config.playlistRowsHeight = 40 * this.config.playlistRows), this.rootNode.attr("data-node-id", this.config.nodeId), this.rootNode.is('[class*="awp-theme-light"]') && (this.config.logoUrl = "https://web-player.art19.com/assets/art19-logo-dark-bd0c7b70b5236d01e33c5094b6c21dae.png", this.config.waveformBgColor = "rgba(0, 0, 0, 0.2)"), i = w.filter(function(e) {
              return new RegExp(e + "$").test(t)
            }), 0 === i.length) return this.config.brandLogo.disabled = !1
        }, e.prototype.playerType = function() {
          return this.rootNode.hasClass("awp-medium") ? "medium" : this.rootNode.hasClass("awp-artwork") ? "artwork" : this.rootNode.hasClass("awp-consumer-page") ? "consumer" : this.rootNode.hasClass("awp-medium-alt") ? "medium-alt" : "micro"
        }, e.prototype.instantiatePlayer = function() {
          switch (this.applyResponsiveQueries(), this.playerType()) {
            case "medium":
            case "medium-alt":
              return this.config.apiClient = this.config.apiClient + ".medium", this.instance = new c.default(this.config);
            case "micro":
              return this.config.apiClient = this.config.apiClient + ".micro", this.instance = new u.default(this.config);
            case "artwork":
              return this.config.apiClient = this.config.apiClient + ".artwork", this.instance = new p.default(this.config);
            case "consumer":
              return this.config.apiClient = this.config.apiClient + ".public-page", this.instance = new l.default(this.config);
            default:
              return this.instance = void 0, "undefined" != typeof console && null !== console && "function" == typeof console.error ? console.error("We do not have that player type") : void 0
          }
        }, e
      }(), t.exports = h
    });
    /**
     *  request-frame-es2015 - requestAnimationFrame & cancelAnimationFrame polyfill for optimal cross-browser development as a ES2015 module.
     *    Version:  v1.4.3
     *     License:  MIT
     *      Copyright Julien Etienne
     *        github:  https://github.com/art19/request-frame-es2015
     *‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
     */
    define('request-frame', ['exports'], function(exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = requestFrame;
      /**
       * @param  {String} type - request | cancel | native.
       * @return {Function} Timing function.
       */
      function requestFrame(type) {
        // The only vendor prefixes required.
        var vendors = ['moz', 'webkit'],

          // Disassembled timing function abbreviations.
          aF = 'AnimationFrame',
          rqAF = 'Request' + aF,

          // Final assigned functions.
          assignedRequestAnimationFrame,
          assignedCancelAnimationFrame,

          // Initial time of the timing lapse.
          previousTime = 0,
          mozRAF = window.mozRequestAnimationFrame,
          mozCAF = window.mozCancelAnimationFrame,

          // Checks for firefox 4 - 10 function pair mismatch.
          hasMozMismatch = mozRAF && !mozCAF,
          func;

        // Date.now polyfill, mainly for legacy IE versions.
        if (!Date.now) {
          Date.now = function() {
            return new Date().getTime();
          };
        }

        /**
         * hasIOS6RequestAnimationFrameBug.
         * @See {@Link https://gist.github.com/julienetie/86ac394ec41f1271ff0a}
         * - for Commentary.
         * @Copyright 2015 - Julien Etienne.
         * @License: MIT.
         */
        function hasIOS6RequestAnimationFrameBug() {
          var webkitRAF = window.webkitRequestAnimationFrame,
            rAF = window.requestAnimationFrame,

            // CSS/ Device with max for iOS6 Devices.
            hasMobileDeviceWidth = screen.width <= 768 ? true : false,

            // Only supports webkit prefixed requestAnimtionFrane.
            requiresWebkitprefix = !(webkitRAF && rAF),

            // iOS6 webkit browsers don't support performance now.
            hasNoNavigationTiming = window.performance ? false : true,
            iOS6Notice = 'setTimeout is being used as a substitiue for' + 'requestAnimationFrame due to a bug within iOS 6 builds',
            hasIOS6Bug = requiresWebkitprefix && hasMobileDeviceWidth && hasNoNavigationTiming;

          function bugCheckresults(timingFnA, timingFnB, notice) {
            if (timingFnA || timingFnB) {
              console.warn(notice);
              return true;
            } else {
              return false;
            }
          }

          function displayResults() {
            if (hasIOS6Bug) {
              return bugCheckresults(webkitRAF, rAF, iOS6Notice);
            } else {
              return false;
            }
          }

          return displayResults();
        }

        /**
         * Native clearTimeout function.
         * @return {Function}
         */
        function clearTimeoutWithId(id) {
          clearTimeout(id);
        }

        /**
         * Based on a polyfill by Erik, introduced by Paul Irish &
         * further improved by Darius Bacon.
         * @see  {@link http://www.paulirish.com/2011/
                 * requestanimationframe-for-smart-animating}
         * @see  {@link https://github.com/darius/requestAnimationFrame/blob/
                 * master/requestAnimationFrame.js}
         * @callback {Number} Timestamp.
         * @return {Function} setTimeout Function.
         */
        function setTimeoutWithTimestamp(callback) {
          var immediateTime = Date.now(),
            lapsedTime = Math.max(previousTime + 16, immediateTime);
          return setTimeout(function() {
            callback(previousTime = lapsedTime);
          }, lapsedTime - immediateTime);
        }

        /**
         * Queries the native function, prefixed function
         * or use the setTimeoutWithTimestamp function.
         * @return {Function}
         */
        function queryRequestAnimationFrame() {
          if (Array.prototype.filter) {
            assignedRequestAnimationFrame = window['request' + aF] || window[vendors.filter(function(vendor) {
                if (window[vendor + rqAF] !== undefined) return vendor;
              }) + rqAF] || setTimeoutWithTimestamp;
          } else {
            return setTimeoutWithTimestamp;
          }
          if (!hasIOS6RequestAnimationFrameBug()) {
            return assignedRequestAnimationFrame;
          } else {
            return setTimeoutWithTimestamp;
          }
        }

        /**
         * Queries the native function, prefixed function
         * or use the clearTimeoutWithId function.
         * @return {Function}
         */
        function queryCancelAnimationFrame() {
          var cancellationNames = [];
          if (Array.prototype.map) {
            vendors.map(function(vendor) {
              return ['Cancel', 'CancelRequest'].map(function(cancellationNamePrefix) {
                cancellationNames.push(vendor + cancellationNamePrefix + aF);
              });
            });
          } else {
            return clearTimeoutWithId;
          }

          /**
           * Checks for the prefixed cancelAnimationFrame implementation.
           * @param  {Array} prefixedNames - An array of the prefixed names.
           * @param  {Number} i - Iteration start point.
           * @return {Function} prefixed cancelAnimationFrame function.
           */
          function prefixedCancelAnimationFrame(prefixedNames, i) {
            var cancellationFunction;
            for (; i < prefixedNames.length; i++) {
              if (window[prefixedNames[i]]) {
                cancellationFunction = window[prefixedNames[i]];
                break;
              }
            }
            return cancellationFunction;
          }

          // Use truthly function
          assignedCancelAnimationFrame = window['cancel' + aF] || prefixedCancelAnimationFrame(cancellationNames, 0) || clearTimeoutWithId;

          // Check for iOS 6 bug
          if (!hasIOS6RequestAnimationFrameBug()) {
            return assignedCancelAnimationFrame;
          } else {
            return clearTimeoutWithId;
          }
        }

        function getRequestFn() {
          if (hasMozMismatch) {
            return setTimeoutWithTimestamp;
          } else {
            return queryRequestAnimationFrame();
          }
        }

        function getCancelFn() {
          return queryCancelAnimationFrame();
        }

        function setNativeFn() {
          if (hasMozMismatch) {
            window.requestAnimationFrame = setTimeoutWithTimestamp;
            window.cancelAnimationFrame = clearTimeoutWithId;
          } else {
            window.requestAnimationFrame = queryRequestAnimationFrame();
            window.cancelAnimationFrame = queryCancelAnimationFrame();
          }
        }

        /**
         * The type value "request" singles out firefox 4 - 10 and
         * assigns the setTimeout function if plausible.
         */

        switch (type) {
          case 'request':
          case '':
            func = getRequestFn();
            break;

          case 'cancel':
            func = getCancelFn();
            break;

          case 'native':
            setNativeFn();
            break;
          default:
            throw new Error('RequestFrame parameter is not a type.');
        }
        return func;
      }
    });
    define("art19-web-player/templates/art19-artwork-player", ["exports", "module"], function(a, n) {
      "use strict";
      n.exports = {
        1: function(a, n, i, s) {
          var e, l = "";
          return e = this.invokePartial(i.shareFlyout, "              ", "shareFlyout", a, {
            embedEnabled: null != a ? a.embedEnabled : a
          }, n, i, s), null != e && (l += e), l
        },
        3: function(a, n, i, s) {
          return '              <li><a aria-label="Download" class="awp-media-download" data-action="download" href="#" target="_blank" data-awp-tooltip="Download">\n                <i class="awp-icon awp-icon-download-cloud"></i><span> Download </span>\n              </a></li>\n'
        },
        5: function(a, n, i, s) {
          return '            <div class="awp-ad-skip-wrapper">\n              <span class="awp-ad-text-separator">|</span>\n              <a class="awp-ad-skip" data-action="skip-ad" href="#" aria-label="Skip Advertisement">Skip</a>\n            </div>\n'
        },
        7: function(a, n, i, s) {
          var e, l = "";
          return e = this.invokePartial(i.playerShareOverlay, "    ", "playerShareOverlay", a, {
            embedRows: 5
          }, n, i, s), null != e && (l += e), l
        },
        compiler: [6, ">= 2.0.0-beta.1"],
        main: function(a, n, i, s) {
          var e, l = '<div class="awp awp-container awp-artwork">\n  <div class="awp-thumbnail-background-fade"></div>\n  <div class="awp-thumbnail-background-overlay"></div>\n  <div class="awp-artwork-wrapper">\n    <div class="awp-error-container">\n      <div class="awp-error-content-wrapper">\n        <div class="awp-warning-icon">\n          <i class="awp-icon awp-icon-attention"></i>\n        </div>\n        <div class="awp-error-message"><span class="awp-error-message-content"></span></div>\n      </div>\n    </div>\n    <div class="awp-content-container">\n      <div class="awp-brand-logo"></div>\n      <div class="awp-content-top">\n        <div class="awp-media-description">\n          <div class="awp-series-name-container">\n            <div class="awp-series-name awp-marquee">\n              <div class=\'awp-marquee-inner\'>\n                <span class=\'awp-marquee-scroll-element\'>\n                  <span class="awp-series-title-content"></span><span class=\'awp-series-title-content awp-marquee-duplicate\'></span>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class="awp-episode-name awp-marquee">\n            <div class=\'awp-marquee-inner\'>\n              <span class=\'awp-marquee-scroll-element\'>\n                <span class="awp-episode-title-content"></span><span class=\'awp-episode-title-content awp-marquee-duplicate\'></span>\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class="awp-media-actions">\n          <ul>\n';
          return e = n.if.call(a, null != a ? a.shareEnabled : a, {
            name: "if",
            hash: {},
            fn: this.program(1, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), e = this.invokePartial(i.subscribeFlyout, "            ", "subscribeFlyout", a, void 0, n, i, s), null != e && (l += e), l += '            \x3c!--\n            <li><a class="awp-media-like" href="#">\n              <i class="awp-icon awp-icon-heart"></i>\n            </a></li>\n            <li><a class="awp-media-comment" href="#">\n              <i class="awp-icon awp-icon-comment"></i>\n            </a></li>\n            --\x3e\n', e = n.if.call(a, null != a ? a.downloadEnabled : a, {
            name: "if",
            hash: {},
            fn: this.program(3, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), l += '            <li><a aria-label="Description" class="awp-media-description-btn" data-action="show-description" href="#" data-awp-tooltip="Description">\n              <i class="awp-icon awp-icon-align-left"></i><span> Description </span>\n            </a></li>\n          </ul>\n        </div>\n      </div>\n      <div class="awp-content-center">\n        <div class="awp-loading-icon">\n          <i class="awp-icon awp-icon-spinner awp-icon-rotate"></i>\n        </div>\n        <button class="awp-play-toggle awp-control" data-action="playback-toggle" aria-label="Play" title="Play">\n          <i class="awp-icon awp-icon-play"></i>\n          <i class="awp-icon awp-icon-pause"></i>\n        </button>\n      </div>\n      <div class="awp-content-bottom">\n        <div class="awp-content-bottom-text">\n          <div class="awp-ad-label">\n            Advertising\n            <span class="awp-current-ad">0</span>\n            /\n            <span class="awp-ad-pod-size">0</span>\n          </div>\n', e = n.if.call(a, null != (e = null != a ? a.seriesConfiguration : a) ? e.skipAdEnabled : e, {
            name: "if",
            hash: {},
            fn: this.program(5, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), l += '          <div class="awp-trt">\n            <span class="awp-current-time">00:00</span>\n            /\n            <span class="awp-total-time">00:00</span>\n          </div>\n        </div>\n        <div class="awp-content-bottom-progresses">\n          <div class="awp-progress-container">\n            <div class="awp-buffered" style="width: 0%"></div>\n            <div class="awp-progress"></div>\n          </div>\n          <div class="awp-ad-progress-container">\n            <div class="awp-ad-buffered" style="width: 0%"></div>\n            <div class="awp-ad-progress"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n', e = this.invokePartial(i.descriptionOverlay, "  ", "descriptionOverlay", a, void 0, n, i, s), null != e && (l += e), e = n.if.call(a, null != a ? a.embedEnabled : a, {
            name: "if",
            hash: {},
            fn: this.program(7, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), l + "</div>\n"
        },
        usePartial: !0,
        useData: !0
      }
    });
    define("art19-web-player/templates/art19-consumer-page-player", ["exports", "module"], function(s, a) {
      "use strict";
      a.exports = {
        compiler: [6, ">= 2.0.0-beta.1"],
        main: function(s, a, i, n) {
          var l, c = this.lambda,
            e = this.escapeExpression;
          return "<div class='art19-consumer-player container'>\n  <div class='cp-left'><a aria-label='Previous Episode' class='cp-previous cp-control' data-action='previous-episode'><i class=\"" + e(c(null != (l = null != s ? s.icons : s) ? l.fbw : l, s)) + "\"></i></a><div class='cp-loading-icon'><i class='" + e(c(null != (l = null != s ? s.icons : s) ? l.fsp : l, s)) + "'></i></div><div class='cp-warning-icon'><i class='" + e(c(null != (l = null != s ? s.icons : s) ? l.fer : l, s)) + "'></i></div><a aria-label='Toggle Play' class='cp-play-toggle cp-control' data-action='fetch-data'><i class='" + e(c(null != (l = null != s ? s.icons : s) ? l.fpl : l, s)) + "'></i><i class='" + e(c(null != (l = null != s ? s.icons : s) ? l.fpa : l, s)) + "'></i></a><a aria-label='Next Episode' class='cp-next cp-control' data-action='next-episode'><i class='" + e(c(null != (l = null != s ? s.icons : s) ? l.ffw : l, s)) + "'></i></a></div>\n  <div class='cp-middle'>\n    <div class='cp-middle-top'>\n      <div class='cp-middle-top-left'>\n        <div class='cp-episode-details'></div>\n        <div class='cp-ad-details'>\n          Advertising <span class='cp-current-ad'>0</span>/<span class='cp-ad-pod-size'>0</span>\n          <span class=\"awp-ad-skip-wrapper\">\n            |\n            <a class='cp-ad-skip' data-action='skip-ad'>Skip</a>\n          </span>\n        </div>\n        <div class='cp-error-details awp-error-message'><span></span></div>\n      </div>\n\n      <div class='cp-middle-top-right'>\n        <div class='cp-ad-trt'>\n          <span class='cp-current-time'>00:00</span> / <span class='cp-total-time'>00:00</span>\n        </div>\n        <div class='cp-trt'>\n          <span class='cp-current-time'>00:00</span> / <span class='cp-total-time'>00:00</span>\n        </div>\n      </div>\n    </div>\n\n    <div class='cp-middle-bottom'>\n      <div class='cp-progress-container'>\n        <div style='width: 0%' class='cp-buffered'></div>\n        <div class='cp-progress'></div>\n      </div>\n      <div class='cp-ad-progress-container'>\n        <div style='width: 0%' class='cp-ad-buffered'></div>\n        <div class='cp-ad-progress'></div>\n      </div>\n    </div>\n  </div>\n\n  <div class='cp-right'>\n    <div class='cp-volume-control'>\n      <a aria-label='Toggle mute' class='cp-mute' data-action='mute-toggle'><i class='" + e(c(null != (l = null != s ? s.icons : s) ? l.mute : l, s)) + "'></i>\n        <span class='times'>&times;</span>\n      </a>\n    </div>\n  </div>\n</div>\n"
        },
        useData: !0
      }
    });
    define("art19-web-player/templates/art19-medium-player", ["exports", "module"], function(a, n) {
      "use strict";
      n.exports = {
        1: function(a, n, i, s) {
          var e, l = n.helperMissing;
          return 'style="width: ' + (0, this.escapeExpression)((e = null != (e = n.playerWidth || (null != a ? a.playerWidth : a)) ? e : l, "function" == typeof e ? e.call(a, {
              name: "playerWidth",
              hash: {},
              data: s
            }) : e)) + 'px;"'
        },
        3: function(a, n, i, s) {
          var e, l = "";
          return e = this.invokePartial(i.shareFlyout, "            ", "shareFlyout", a, {
            embedEnabled: null != a ? a.embedEnabled : a
          }, n, i, s), null != e && (l += e), l
        },
        5: function(a, n, i, s) {
          return '            <li><a aria-label="Download" class="awp-media-download" data-action="download" href="#" target="_blank" data-awp-tooltip="Download">\n              <i class="awp-icon awp-icon-download-cloud"></i><span> Download </span>\n            </a></li>\n'
        },
        7: function(a, n, i, s) {
          return '            <div class="awp-ad-skip-wrapper">\n              <span class="awp-ad-text-separator">|</span>\n              <a class="awp-ad-skip" data-action="skip-ad" href="#" aria-label="Skip Advertisement">Skip</a>\n            </div>\n'
        },
        9: function(a, n, i, s) {
          var e, l = "";
          return e = this.invokePartial(i.playerShareOverlay, "    ", "playerShareOverlay", a, {
            embedRows: 3
          }, n, i, s), null != e && (l += e), l
        },
        compiler: [6, ">= 2.0.0-beta.1"],
        main: function(a, n, i, s) {
          var e, l = "<div class='awp awp-medium awp-container' ";
          return e = n.unless.call(a, null != a ? a.responsive : a, {
            name: "unless",
            hash: {},
            fn: this.program(1, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), l += ">\n  <div class='awp-medium-table-wrapper'>\n    <div class='awp-error-container'>\n      <div class='awp-warning-icon'><i class='awp-icon awp-icon-attention'></i></div>\n      <div class='awp-error-message'><span class=\"awp-error-message-content\"></span></div>\n    </div>\n    <div class='awp-left'></div>\n    <div class='awp-right'>\n      <div class='awp-brand-logo'></div>\n      <div class='awp-media-description'>\n        <div class='awp-series-name-container'>\n          <div class='awp-series-name awp-marquee'>\n            <div class='awp-marquee-inner'>\n              <span class='awp-marquee-scroll-element'>\n                <span class=\"awp-series-title-content\"></span><span class='awp-series-title-content awp-marquee-duplicate'></span>\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class='awp-episode-name awp-marquee'>\n          <div class='awp-marquee-inner'>\n            <span class='awp-marquee-scroll-element'>\n              <span class=\"awp-episode-title-content\"></span><span class='awp-episode-title-content awp-marquee-duplicate'></span>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class='awp-media-actions'>\n        <ul>\n", e = n.if.call(a, null != a ? a.shareEnabled : a, {
            name: "if",
            hash: {},
            fn: this.program(3, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), e = this.invokePartial(i.subscribeFlyout, "          ", "subscribeFlyout", a, void 0, n, i, s), null != e && (l += e), l += '          \x3c!--\n            <li><a aria-label="Like" class="awp-media-like" href="#">\n             <i class="awp-icon awp-icon-heart"></i><span> Like </span>\n            </a></li>\n            <li><a aria-label="Comment" class="awp-media-comment" href="#">\n             <i class="awp-icon awp-icon-comment"></i><span> Comment </span>\n            </a></li>\n          --\x3e\n', e = n.if.call(a, null != a ? a.downloadEnabled : a, {
            name: "if",
            hash: {},
            fn: this.program(5, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), l += '          <li>\n            <a aria-label="Description" class="awp-media-description-btn" data-action="show-description" href="#" data-awp-tooltip="Description">\n              <i class="awp-icon awp-icon-align-left"></i><span> Description </span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\'awp-media-controls\'>\n        <div class="awp-media-controls-left">\n          <div class="awp-loading-icon">\n            <i class="awp-icon awp-icon-spinner awp-icon-rotate"></i>\n          </div>\n          <button class="awp-play-toggle awp-control" data-action="playback-toggle" aria-label="Play" title="Play">\n            <i class="awp-icon awp-icon-play"></i>\n            <i class="awp-icon awp-icon-pause"></i>\n          </button>\n          <button class="awp-next awp-control">\n            <i class="awp-icon awp-icon-to-end-alt"></i>\n          </button>\n        </div>\n        <div class="awp-media-controls-right">\n          <div class="awp-progress-container">\n            <div class="awp-buffered" style="width: 0%"></div>\n            <div class="awp-progress"></div>\n            \x3c!--[if lt IE 11]><div class="awp-waveform-overlay-not-supported"></div><![endif]--\x3e\n            <div class="awp-waveform-overlay"></div>\n          </div>\n          <div class="awp-ad-progress-container">\n            <div class="awp-ad-buffered" style="width: 0%"></div>\n            <div class="awp-ad-progress"></div>\n          </div>\n          <div class="awp-ad-label">\n            Advertising\n            <span class="awp-current-ad">0</span>\n            /\n            <span class="awp-ad-pod-size">0</span>\n          </div>\n          <span class="awp-ad-text-separator">|</span>\n          <div class="awp-trt">\n            <span class="awp-current-time">00:00</span>\n            /\n            <span class="awp-total-time">00:00</span>\n          </div>\n', e = n.if.call(a, null != (e = null != a ? a.seriesConfiguration : a) ? e.skipAdEnabled : e, {
            name: "if",
            hash: {},
            fn: this.program(7, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), l += '          <div class="awp-volume-control">\n            <a aria-label="Toggle mute" class="awp-mute" data-action="mute-toggle">\n              <i class="awp-icon awp-icon-volume-off"></i>\n              <span class="times">&times;</span>\n            </a>\n            <div class="awp-volume-slider"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\'awp-loading-overlay\'>\n      <div class=\'awp-loading-icon\'>\n        <i class=\'awp-icon awp-icon-spinner awp-icon-rotate\'></i>\n      </div>\n    </div>\n  </div>\n', e = this.invokePartial(i.descriptionOverlay, "  ", "descriptionOverlay", a, void 0, n, i, s), null != e && (l += e), e = n.if.call(a, null != a ? a.embedEnabled : a, {
            name: "if",
            hash: {},
            fn: this.program(9, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), l + "</div>\n"
        },
        usePartial: !0,
        useData: !0
      }
    });
    define("art19-web-player/templates/art19-micro-player", ["exports", "module"], function(a, n) {
      "use strict";
      n.exports = {
        1: function(a, n, i, s) {
          var e, l = "";
          return e = n.unless.call(a, null != (e = null != a ? a.brandLogo : a) ? e.positionRight : e, {
            name: "unless",
            hash: {},
            fn: this.program(2, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), l
        },
        2: function(a, n, i, s) {
          return '          <div class="awp-brand-logo"></div>\n'
        },
        4: function(a, n, i, s) {
          return '          <div class="awp-middle-right awp-ad-skip-wrapper">\n            <a class="awp-ad-skip" data-action="skip-ad" href="#" aria-label="Skip Advertisement">Skip</a>\n          </div>\n'
        },
        6: function(a, n, i, s) {
          return '        <a href="#" class="awp-download-button" data-action="download" aria-label="Download" title="Download" target="_blank">\n          <i class="awp-icon awp-icon-download-cloud"></i>\n        </a>\n'
        },
        8: function(a, n, i, s) {
          var e, l = "";
          return e = n.if.call(a, null != (e = null != a ? a.brandLogo : a) ? e.positionRight : e, {
            name: "if",
            hash: {},
            fn: this.program(2, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), l
        },
        10: function(a, n, i, s) {
          var e, l = '        <div class="awp-embed-popover-container awp-popover-container" aria-haspopup="true">\n          <span class="awp-embed-button" aria-label="Embed" title="Embed" target="_blank">\n            <i class="awp-icon awp-icon-code"></i>\n          </span>\n          <div class="awp-embed-popover awp-popover" aria-hidden="true">\n            <div class="awp-embed-container">\n              <div class="awp-embed-popover-title">Embed</div>\n';
          return e = this.invokePartial(i.embed, "              ", "embed", a, {
            rows: 1
          }, n, i, s), null != e && (l += e), l + "            </div>\n          </div>\n        </div>\n"
        },
        compiler: [6, ">= 2.0.0-beta.1"],
        main: function(a, n, i, s) {
          var e, l = '<div class="awp awp-container awp-micro">\n  <div class="awp-micro-table-wrapper">\n    <div class="awp-left">\n      <div class="awp-left-control-container">\n        <div class="awp-loading-icon">\n          <i class="awp-icon awp-icon-spinner awp-icon-rotate"></i>\n        </div>\n        <div class="awp-warning-icon">\n          <i class="awp-icon awp-icon-attention"></i>\n        </div>\n        <button class="awp-play-toggle awp-control" data-action="fetch-data" aria-label="Play" title="Play">\n          <i class="awp-icon awp-icon-play"></i>\n          <i class="awp-icon awp-icon-pause"></i>\n        </button>\n      </div>\n';
          return e = n.unless.call(a, null != (e = null != a ? a.brandLogo : a) ? e.disabled : e, {
            name: "unless",
            hash: {},
            fn: this.program(1, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), l += '    </div>\n    <div class="awp-middle">\n      <div class="awp-middle-inner">\n        <div class="awp-middle-left">\n          <div class="awp-ad-label">\n            Advertising\n            <span class="awp-current-ad">0</span>\n            /\n            <span class="awp-ad-pod-size">0</span>\n          </div>\n        </div>\n        <div class="awp-middle-middle">\n          <div class="awp-progress-container">\n            <div class="awp-buffered" style="width: 0%"></div>\n            <div class="awp-progress"></div>\n          </div>\n          <div class="awp-error-message awp-marquee">\n            <div class=\'awp-marquee-inner\'>\n              <span class=\'awp-marquee-scroll-element\'>\n                <span class="awp-error-message-content"></span><span class=\'awp-error-message-content awp-marquee-duplicate\'></span>\n              </span>\n            </div>\n          </div>\n          <div class="awp-ad-progress-container">\n            <div class="awp-ad-buffered" style="width: 0%"></div>\n            <div class="awp-ad-progress"></div>\n          </div>\n        </div>\n', e = n.if.call(a, null != (e = null != a ? a.seriesConfiguration : a) ? e.skipAdEnabled : e, {
            name: "if",
            hash: {},
            fn: this.program(4, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), l += '      </div>\n    </div>\n    <div class="awp-right">\n      <div class="awp-trt">\n        <span class="awp-current-time">00:00</span>\n        /\n        <span class="awp-total-time">00:00</span>\n      </div>\n      <div class="awp-volume-control">\n        <a aria-label="Toggle mute" class="awp-mute" data-action="mute-toggle">\n          <i class="awp-icon awp-icon-volume-off"></i>\n          <span class="times">&times;</span>\n        </a>\n        <div class="awp-volume-slider"></div>\n      </div>\n', e = n.if.call(a, null != a ? a.downloadEnabled : a, {
            name: "if",
            hash: {},
            fn: this.program(6, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), l += "\n", e = n.unless.call(a, null != (e = null != a ? a.brandLogo : a) ? e.disabled : e, {
            name: "unless",
            hash: {},
            fn: this.program(8, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), l += "\n", e = n.if.call(a, null != a ? a.embedEnabled : a, {
            name: "if",
            hash: {},
            fn: this.program(10, s),
            inverse: this.noop,
            data: s
          }), null != e && (l += e), l + "    </div>\n  </div>\n</div>\n"
        },
        usePartial: !0,
        useData: !0
      }
    });
    define("art19-web-player/templates/custom-styles", ["exports", "module"], function(n, a) {
      "use strict";
      a.exports = {
        1: function(n, a, o, l) {
          var e, r = a.helperMissing,
            t = this.escapeExpression;
          return '  .art19-web-player[data-node-id="' + t((e = null != (e = a.nodeId || (null != n ? n.nodeId : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "nodeId",
              hash: {},
              data: l
            }) : e)) + '"] .awp-control {\n    color: ' + t((e = null != (e = a.primaryColor || (null != n ? n.primaryColor : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "primaryColor",
              hash: {},
              data: l
            }) : e)) + ' !important;\n  }\n  .art19-web-player[data-node-id="' + t((e = null != (e = a.nodeId || (null != n ? n.nodeId : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "nodeId",
              hash: {},
              data: l
            }) : e)) + '"] .awp-overlay-episode-description a {\n    color: ' + t((e = null != (e = a.primaryColor || (null != n ? n.primaryColor : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "primaryColor",
              hash: {},
              data: l
            }) : e)) + ' !important;\n  }\n  .art19-web-player[data-node-id="' + t((e = null != (e = a.nodeId || (null != n ? n.nodeId : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "nodeId",
              hash: {},
              data: l
            }) : e)) + '"] .awp-volume-slider .ui-slider-range {\n     background: ' + t((e = null != (e = a.primaryColor || (null != n ? n.primaryColor : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "primaryColor",
              hash: {},
              data: l
            }) : e)) + " !important;\n  }"
        },
        3: function(n, a, o, l) {
          var e, r = a.helperMissing,
            t = this.escapeExpression;
          return '  .art19-web-player[data-node-id="' + t((e = null != (e = a.nodeId || (null != n ? n.nodeId : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "nodeId",
              hash: {},
              data: l
            }) : e)) + '"] .awp-progress .ui-slider-range {\n     background: ' + t((e = null != (e = a.progressColor || (null != n ? n.progressColor : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "progressColor",
              hash: {},
              data: l
            }) : e)) + " !important;\n  }"
        },
        5: function(n, a, o, l) {
          var e, r = a.helperMissing,
            t = this.escapeExpression;
          return '  .art19-web-player[data-node-id="' + t((e = null != (e = a.nodeId || (null != n ? n.nodeId : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "nodeId",
              hash: {},
              data: l
            }) : e)) + '"] .awp-playlist-module,\n  .art19-web-player[data-node-id="' + t((e = null != (e = a.nodeId || (null != n ? n.nodeId : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "nodeId",
              hash: {},
              data: l
            }) : e)) + '"] .awp {\n    background-color: ' + t((e = null != (e = a.backgroundColor || (null != n ? n.backgroundColor : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "backgroundColor",
              hash: {},
              data: l
            }) : e)) + ";\n  }"
        },
        7: function(n, a, o, l) {
          var e, r = a.helperMissing,
            t = this.escapeExpression;
          return '  .art19-web-player[data-node-id="' + t((e = null != (e = a.nodeId || (null != n ? n.nodeId : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "nodeId",
              hash: {},
              data: l
            }) : e)) + '"] .awp-playlist-container {\n    height: ' + t((e = null != (e = a.playlistRowsHeight || (null != n ? n.playlistRowsHeight : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "playlistRowsHeight",
              hash: {},
              data: l
            }) : e)) + "px !important;\n    max-height: none !important;\n  }"
        },
        9: function(n, a, o, l) {
          var e, r = a.helperMissing,
            t = this.escapeExpression;
          return '  div.art19-web-player[data-node-id="' + t((e = null != (e = a.nodeId || (null != n ? n.nodeId : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "nodeId",
              hash: {},
              data: l
            }) : e)) + '"] .awp .awp-ad-progress .ui-slider-range {\n    background: ' + t((e = null != (e = a.adProgressColor || (null != n ? n.adProgressColor : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "adProgressColor",
              hash: {},
              data: l
            }) : e)) + ' !important;\n  }\n  div.art19-web-player[data-node-id="' + t((e = null != (e = a.nodeId || (null != n ? n.nodeId : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "nodeId",
              hash: {},
              data: l
            }) : e)) + '"] .awp .awp-ad-skip {\n    color: ' + t((e = null != (e = a.adProgressColor || (null != n ? n.adProgressColor : n)) ? e : r, "function" == typeof e ? e.call(n, {
              name: "adProgressColor",
              hash: {},
              data: l
            }) : e)) + " !important;\n  }"
        },
        compiler: [6, ">= 2.0.0-beta.1"],
        main: function(n, a, o, l) {
          var e, r = "";
          return e = a.if.call(n, null != n ? n.primaryColor : n, {
            name: "if",
            hash: {},
            fn: this.program(1, l),
            inverse: this.noop,
            data: l
          }), null != e && (r += e), e = a.if.call(n, null != n ? n.progressColor : n, {
            name: "if",
            hash: {},
            fn: this.program(3, l),
            inverse: this.noop,
            data: l
          }), null != e && (r += e), e = a.if.call(n, null != n ? n.backgroundColor : n, {
            name: "if",
            hash: {},
            fn: this.program(5, l),
            inverse: this.noop,
            data: l
          }), null != e && (r += e), e = a.if.call(n, null != n ? n.playlistRows : n, {
            name: "if",
            hash: {},
            fn: this.program(7, l),
            inverse: this.noop,
            data: l
          }), null != e && (r += e), e = a.if.call(n, null != n ? n.adProgressColor : n, {
            name: "if",
            hash: {},
            fn: this.program(9, l),
            inverse: this.noop,
            data: l
          }), null != e && (r += e), r
        },
        useData: !0
      }
    });
    define("art19-web-player/templates/playlist-module", ["exports", "module"], function(a, l) {
      "use strict";
      l.exports = {
        compiler: [6, ">= 2.0.0-beta.1"],
        main: function(a, l, i, s) {
          return "<div class='awp-playlist-module'>\n  <div class='awp-playlist-header'>\n    <a href='#' aria-label='View all on ART19' data-action='public-page' class='awp-playlist-view-all-btn'><i class='awp-icon awp-icon-link-ext'></i>View all on ART19</a>\n    <div class='awp-playlist-heading'>Playlist</div>\n  </div>\n  <div class='awp-playlist-container'>\n    <ul class='awp-playlist'></ul>\n  </div>\n  <div class='awp-playlist-footer'></div>\n</div>\n"
        },
        useData: !0
      }
    });
    define("art19-web-player/templates/shared/description-overlay", ["exports", "module"], function(a, e) {
      "use strict";
      e.exports = {
        compiler: [6, ">= 2.0.0-beta.1"],
        main: function(a, e, s, i) {
          return '<div role="dialog" aria-hidden="true" class="awp-description-overlay awp-overlay-container">\n  <a aria-label="Close dialog" class="awp-overlay-close-btn" data-action="close-description" href="#"><i class="awp-icon-cancel"></i></a>\n  <div class="awp-overlay-content">\n    <div class="awp-overlay-series-name"><span class="awp-series-title-content"></span></div>\n    <div class="awp-overlay-episode-name"><span class="awp-episode-title-content"></span></div>\n    <div class="awp-overlay-episode-description"></div>\n  </div>\n</div>\n'
        },
        useData: !0
      }
    });
    define("art19-web-player/templates/shared/embed", ["exports", "module"], function(a, e) {
      "use strict";
      e.exports = {
        compiler: [6, ">= 2.0.0-beta.1"],
        main: function(a, e, t, n) {
          var s, p = e.helperMissing;
          return '<div class="awp-iframe-player-code-input-container">\n  <div class="awp-input-group">\n    <textarea class="awp-input iframe-source" readonly rows="' + (0, this.escapeExpression)((s = null != (s = e.rows || (null != a ? a.rows : a)) ? s : p, "function" == typeof s ? s.call(a, {
              name: "rows",
              hash: {},
              data: n
            }) : s)) + '"></textarea>\n    <span class="awp-btn-group">\n      <button class="awp-standard-btn" type="button" label="Copy" title="">Copy</button>\n    </span>\n  </div>\n  <div class="awp-clipboard-copy-tooltip"></div>\n</div>\n'
        },
        useData: !0
      }
    });
    define("art19-web-player/templates/shared/player-share-overlay", ["exports", "module"], function(e, a) {
      "use strict";
      a.exports = {
        compiler: [6, ">= 2.0.0-beta.1"],
        main: function(e, a, l, s) {
          var r, n = '<div class="awp-share-overlay awp-overlay-container">\n  <a class="awp-overlay-close-btn" data-action="close-player-share" href="#">\n    <i class="awp-icon-cancel"></i>\n  </a>\n  <div class="awp-overlay-content">\n    <div class="awp-overlay-title">&lt;iframe&gt; Player Code</div>\n    <div class="awp-overlay-player-code-instructions">Embed this player on your website using the snippet below</div>\n';
          return r = this.invokePartial(l.embed, "    ", "embed", e, {
            rows: null != e ? e.embedRows : e
          }, a, l, s), null != r && (n += r), n + "  </div>\n</div>\n"
        },
        usePartial: !0,
        useData: !0
      }
    });
    define("art19-web-player/templates/shared/playlist-items", ["exports", "module"], function(a, i) {
      "use strict";
      i.exports = {
        1: function(a, i, n, t) {
          var l, e = i.helperMissing,
            s = this.escapeExpression;
          return '  <li class="awp-playlist-item" data-episode-id="' + s((l = null != (l = i.id || (null != a ? a.id : a)) ? l : e, "function" == typeof l ? l.call(a, {
              name: "id",
              hash: {},
              data: t
            }) : l)) + '" data-action="switch-to-episode">\n    <a href="#">\n      <div class="awp-playlist-item-progress-container"></div>\n      <div class="awp-playlist-item-content">\n        <div class="awp-playlist-item-left">\n          <div class="awp-playlist-item-play-toggle">\n            <i class="awp-icon awp-icon-play"></i>\n            <i class="awp-icon awp-icon-pause"></i>\n            <i class="awp-icon awp-icon-spinner"></i>\n            <i class="awp-icon awp-icon-attention"></i>\n          </div>\n        </div>\n        <div class="awp-playlist-item-right">' + s((l = null != (l = i.releasedAtFormatted || (null != a ? a.releasedAtFormatted : a)) ? l : e, "function" == typeof l ? l.call(a, {
              name: "releasedAtFormatted",
              hash: {},
              data: t
            }) : l)) + '</div>\n        <div class="awp-playlist-item-title">' + s((l = null != (l = i.title || (null != a ? a.title : a)) ? l : e, "function" == typeof l ? l.call(a, {
              name: "title",
              hash: {},
              data: t
            }) : l)) + '</div>\n        <div class="awp-playlist-item-error-message"></div>\n      </div>\n    </a>\n  </li>\n'
        },
        3: function(a, i, n, t) {
          return '  <li class="awp-playlist-item awp-playlist-item-load-more" data-state="available" data-action="load-next-page">\n    <a href="#">\n      <i class="awp-icon awp-icon-spinner"></i>\n      <i class="awp-icon awp-icon-attention"></i>\n      <span>Load more…</span>\n    </a>\n  </li>\n'
        },
        compiler: [6, ">= 2.0.0-beta.1"],
        main: function(a, i, n, t) {
          var l, e = "";
          return l = i.each.call(a, null != a ? a.list : a, {
            name: "each",
            hash: {},
            fn: this.program(1, t),
            inverse: this.noop,
            data: t
          }), null != l && (e += l), l = i.if.call(a, null != a ? a.hasMore : a, {
            name: "if",
            hash: {},
            fn: this.program(3, t),
            inverse: this.noop,
            data: t
          }), null != l && (e += l), e
        },
        useData: !0
      }
    });
    define("art19-web-player/templates/shared/share-flyout", ["exports", "module"], function(a, i) {
      "use strict";
      i.exports = {
        1: function(a, i, e, l) {
          return '        <li><a aria-label="Embed" class="awp-bg-color-green awp-embed-code-share awp-social-button" href="#"><i class="awp-icon awp-icon-code"></i></a></li>\n'
        },
        compiler: [6, ">= 2.0.0-beta.1"],
        main: function(a, i, e, l) {
          var o, n = '<li class="awp-media-share-container awp-popover-container" aria-haspopup="true">\n  <a aria-label="Share" class="awp-media-share" href="#"><i class="awp-icon awp-icon-export"></i><span>Share</span></a>\n  <div class="awp-social-share-popover awp-popover" aria-hidden="true">\n    <ul class="awp-social-buttons">\n      <li class="awp-popover-title">Share</li>\n      <li><a aria-label="Twitter" class="awp-bg-color-twitter awp-twitter-share awp-social-button" href="#"><i class="awp-icon awp-icon-twitter"></i></a></li>\n      <li><a aria-label="Facebook" class="awp-bg-color-facebook awp-facebook-share awp-social-button" href="#"><i class="awp-icon awp-icon-facebook"></i></a></li>\n      <li><a aria-label="LinkedIn" class="awp-bg-color-linkedin awp-linkedin-share awp-social-button" href="#"><i class="awp-icon awp-icon-linkedin"></i></a></li>\n      <li><a aria-label="Email" class="awp-bg-color-orange awp-email-share awp-social-button" href="#"><i class="awp-icon awp-icon-mail"></i></a></li>\n';
          return o = i.if.call(a, null != a ? a.embedEnabled : a, {
            name: "if",
            hash: {},
            fn: this.program(1, l),
            inverse: this.noop,
            data: l
          }), null != o && (n += o), n + "    </ul>\n  </div>\n</li>\n"
        },
        useData: !0
      }
    });
    define("art19-web-player/templates/shared/subscribe-flyout", ["exports", "module"], function(s, a) {
      "use strict";
      a.exports = {
        compiler: [6, ">= 2.0.0-beta.1"],
        main: function(s, a, i, e) {
          return '<li aria-haspopup="true" class="awp-media-subscribe-container awp-popover-container" data-action="subscribe">\n  <a aria-label="Subscribe" class="awp-media-subscribe" data-action="subscribe-rss" href="#" data-awp-tooltip="Subscribe"><i class="awp-icon awp-icon-rss"></i><span> Subscribe </span></a>\n  <div class="awp-subscribe-popover awp-popover" aria-hidden="true">\n    <ul>\n      <li class="awp-popover-title">Subscribe</li>\n      <li><a aria-label="Apple Podcasts" data-action="subscribe-itunes" href="#">\n        <img class="awp-image-icon" src="https://web-player.art19.com/assets/icons/apple-d75595a59d5969f3e92a7b90d9760513.png" srcset="https://web-player.art19.com/assets/icons/apple-2x-d29e767f4e6a474a39c160bce396ba88.png 2x" alt="" />\n        <span>Apple Podcasts</span>\n      </a></li>\n      <li><a aria-label="Stitcher" data-action="subscribe-stitcher" href="#">\n        <img class="awp-image-icon" src="https://web-player.art19.com/assets/icons/stitcher-11b3ef8d6547e2dfeb97e584e3b3fd6f.png" srcset="https://web-player.art19.com/assets/icons/stitcher-2x-631e090ec72871195b82bce4b3efe30b.png 2x" alt="" />\n        <span>Stitcher</span>\n      </a></li>\n      <li><a aria-label="RSS" data-action="subscribe-rss" href="#">\n        <img class="awp-image-icon" src="https://web-player.art19.com/assets/icons/rss-e8a5acabeaf61b47225079eb6b09161a.png" srcset="https://web-player.art19.com/assets/icons/rss-2x-f1d17899e4509f4028c4c6a339421d41.png 2x" alt="" />\n        <span>RSS</span>\n      </a></li>\n    </ul>\n  </div>\n</li>\n'
        },
        useData: !0
      }
    });
    define("art19-web-player/util", ["exports", "module"], function(e, r) {
      "use strict";
      var o;
      o = function() {
        function e() {}
        return e.detectHost = function() {
          var r, o;
          return r = window.location.hostname, window.top !== window && (o = e.parseUri(window.location.href).queryKey.referrer, r = null != o ? e.parseUri(decodeURIComponent(o)).host : e.parseUri(document.referrer).host), r
        }, e.escapeHtml = function(e) {
          return document.createElement("div").appendChild(document.createTextNode(e)).parentNode.innerHTML
        }, e.parseUri = function(e, r) {
          var o, t, n, i, a;
          for (null == e && (e = window.location.href), null == r && (r = !1), i = {
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
              name: "queryKey",
              parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
              strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
              loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
          }, n = r ? "strict" : "loose", t = i.parser[n].exec(e), a = {}, o = 14; o--;) a[i.key[o]] = t[o] || "";
          return a[i.q.name] = {}, a[i.key[12]].replace(i.q.parser, function(e, r, o) {
            if (r) return a[i.q.name][r] = o
          }), a
        }, e
      }(), r.exports = o
    });
    /** Bootstrap ART19 Web Player using jQuery **/
    var $ = jQuery.noConflict(true);
    $(document).ready(function() {
      var Art19WebPlayer = require('art19-web-player');
      Art19WebPlayer.VERSION = "0.0.48";
      $('.art19-web-player[data-episode-id], .art19-web-player[data-series-id]').each(function() {
        new Art19WebPlayer($(this));
      });

    });

    (function($) {
      $.fn.reloadPodcastPlayers = function(data) {
        var Art19WebPlayer = require('art19-web-player');
        Art19WebPlayer.VERSION = "0.0.48";
        $('.art19-web-player[data-episode-id], .art19-web-player[data-series-id]').each(function() {
          new Art19WebPlayer($(this));
        });
      };
    })(jQuery);

  }());

}());