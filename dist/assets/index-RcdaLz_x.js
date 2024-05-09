var fT = Object.defineProperty;
var hT = (e, t, n) =>
  t in e ? fT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var lg = (e, t, n) => (hT(e, typeof t != 'symbol' ? t + '' : t, n), n),
  cd = (e, t, n) => {
    if (!t.has(e)) throw TypeError('Cannot ' + n);
  };
var R = (e, t, n) => (cd(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
  oe = (e, t, n) => {
    if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  re = (e, t, n, r) => (cd(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n);
var Ul = (e, t, n, r) => ({
    set _(i) {
      re(e, t, i, n);
    },
    get _() {
      return R(e, t, r);
    },
  }),
  Ee = (e, t, n) => (cd(e, t, 'access private method'), n);
function $0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s && Object.defineProperty(e, i, s.get ? s : { enumerable: !0, get: () => r[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === 'childList')
        for (const o of s.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function rp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var H0 = { exports: {} },
  Lc = {},
  W0 = { exports: {} },
  we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ml = Symbol.for('react.element'),
  pT = Symbol.for('react.portal'),
  mT = Symbol.for('react.fragment'),
  gT = Symbol.for('react.strict_mode'),
  vT = Symbol.for('react.profiler'),
  yT = Symbol.for('react.provider'),
  xT = Symbol.for('react.context'),
  wT = Symbol.for('react.forward_ref'),
  ST = Symbol.for('react.suspense'),
  ET = Symbol.for('react.memo'),
  TT = Symbol.for('react.lazy'),
  ug = Symbol.iterator;
function bT(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ug && e[ug]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var G0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  q0 = Object.assign,
  K0 = {};
function So(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = K0), (this.updater = n || G0);
}
So.prototype.isReactComponent = {};
So.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
So.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Z0() {}
Z0.prototype = So.prototype;
function ip(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = K0), (this.updater = n || G0);
}
var sp = (ip.prototype = new Z0());
sp.constructor = ip;
q0(sp, So.prototype);
sp.isPureReactComponent = !0;
var cg = Array.isArray,
  Q0 = Object.prototype.hasOwnProperty,
  op = { current: null },
  Y0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function X0(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = '' + t.key), t))
      Q0.call(t, r) && !Y0.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: ml, type: e, key: s, ref: o, props: i, _owner: op.current };
}
function CT(e, t) {
  return { $$typeof: ml, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ap(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ml;
}
function _T(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var dg = /\/+/g;
function dd(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? _T('' + e.key) : t.toString(36);
}
function pu(e, t, n, r, i) {
  var s = typeof e;
  (s === 'undefined' || s === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ml:
          case pT:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === '' ? '.' + dd(o, 0) : r),
      cg(i)
        ? ((n = ''),
          e != null && (n = e.replace(dg, '$&/') + '/'),
          pu(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (ap(i) &&
            (i = CT(
              i,
              n +
                (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(dg, '$&/') + '/') +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), cg(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + dd(s, a);
      o += pu(s, t, n, l, i);
    }
  else if (((l = bT(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + dd(s, a++)), (o += pu(s, t, n, l, i));
  else if (s === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return o;
}
function $l(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    pu(e, r, '', '', function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function PT(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Bt = { current: null },
  mu = { transition: null },
  kT = { ReactCurrentDispatcher: Bt, ReactCurrentBatchConfig: mu, ReactCurrentOwner: op };
function J0() {
  throw Error('act(...) is not supported in production builds of React.');
}
we.Children = {
  map: $l,
  forEach: function (e, t, n) {
    $l(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      $l(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      $l(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ap(e))
      throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
we.Component = So;
we.Fragment = mT;
we.Profiler = vT;
we.PureComponent = ip;
we.StrictMode = gT;
we.Suspense = ST;
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kT;
we.act = J0;
we.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.',
    );
  var r = q0({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = op.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Q0.call(t, l) &&
        !Y0.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ml, type: e.type, key: i, ref: s, props: r, _owner: o };
};
we.createContext = function (e) {
  return (
    (e = {
      $$typeof: xT,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: yT, _context: e }),
    (e.Consumer = e)
  );
};
we.createElement = X0;
we.createFactory = function (e) {
  var t = X0.bind(null, e);
  return (t.type = e), t;
};
we.createRef = function () {
  return { current: null };
};
we.forwardRef = function (e) {
  return { $$typeof: wT, render: e };
};
we.isValidElement = ap;
we.lazy = function (e) {
  return { $$typeof: TT, _payload: { _status: -1, _result: e }, _init: PT };
};
we.memo = function (e, t) {
  return { $$typeof: ET, type: e, compare: t === void 0 ? null : t };
};
we.startTransition = function (e) {
  var t = mu.transition;
  mu.transition = {};
  try {
    e();
  } finally {
    mu.transition = t;
  }
};
we.unstable_act = J0;
we.useCallback = function (e, t) {
  return Bt.current.useCallback(e, t);
};
we.useContext = function (e) {
  return Bt.current.useContext(e);
};
we.useDebugValue = function () {};
we.useDeferredValue = function (e) {
  return Bt.current.useDeferredValue(e);
};
we.useEffect = function (e, t) {
  return Bt.current.useEffect(e, t);
};
we.useId = function () {
  return Bt.current.useId();
};
we.useImperativeHandle = function (e, t, n) {
  return Bt.current.useImperativeHandle(e, t, n);
};
we.useInsertionEffect = function (e, t) {
  return Bt.current.useInsertionEffect(e, t);
};
we.useLayoutEffect = function (e, t) {
  return Bt.current.useLayoutEffect(e, t);
};
we.useMemo = function (e, t) {
  return Bt.current.useMemo(e, t);
};
we.useReducer = function (e, t, n) {
  return Bt.current.useReducer(e, t, n);
};
we.useRef = function (e) {
  return Bt.current.useRef(e);
};
we.useState = function (e) {
  return Bt.current.useState(e);
};
we.useSyncExternalStore = function (e, t, n) {
  return Bt.current.useSyncExternalStore(e, t, n);
};
we.useTransition = function () {
  return Bt.current.useTransition();
};
we.version = '18.3.1';
W0.exports = we;
var _ = W0.exports;
const Te = rp(_),
  RT = $0({ __proto__: null, default: Te }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var LT = _,
  AT = Symbol.for('react.element'),
  OT = Symbol.for('react.fragment'),
  MT = Object.prototype.hasOwnProperty,
  DT = LT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  NT = { key: !0, ref: !0, __self: !0, __source: !0 };
function ex(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = '' + n),
    t.key !== void 0 && (s = '' + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) MT.call(t, r) && !NT.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: AT, type: e, key: s, ref: o, props: i, _owner: DT.current };
}
Lc.Fragment = OT;
Lc.jsx = ex;
Lc.jsxs = ex;
H0.exports = Lc;
var E = H0.exports,
  xf = {},
  tx = { exports: {} },
  an = {},
  nx = { exports: {} },
  rx = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, q) {
    var K = D.length;
    D.push(q);
    e: for (; 0 < K; ) {
      var ye = (K - 1) >>> 1,
        Se = D[ye];
      if (0 < i(Se, q)) (D[ye] = q), (D[K] = Se), (K = ye);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var q = D[0],
      K = D.pop();
    if (K !== q) {
      D[0] = K;
      e: for (var ye = 0, Se = D.length, Qt = Se >>> 1; ye < Qt; ) {
        var wt = 2 * (ye + 1) - 1,
          Rt = D[wt],
          et = wt + 1,
          Lt = D[et];
        if (0 > i(Rt, K))
          et < Se && 0 > i(Lt, Rt)
            ? ((D[ye] = Lt), (D[et] = K), (ye = et))
            : ((D[ye] = Rt), (D[wt] = K), (ye = wt));
        else if (et < Se && 0 > i(Lt, K)) (D[ye] = Lt), (D[et] = K), (ye = et);
        else break e;
      }
    }
    return q;
  }
  function i(D, q) {
    var K = D.sortIndex - q.sortIndex;
    return K !== 0 ? K : D.id - q.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    m = !1,
    v = !1,
    y = !1,
    w = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(D) {
    for (var q = n(u); q !== null; ) {
      if (q.callback === null) r(u);
      else if (q.startTime <= D) r(u), (q.sortIndex = q.expirationTime), t(l, q);
      else break;
      q = n(u);
    }
  }
  function x(D) {
    if (((y = !1), g(D), !v))
      if (n(l) !== null) (v = !0), he(T);
      else {
        var q = n(u);
        q !== null && Re(x, q.startTime - D);
      }
  }
  function T(D, q) {
    (v = !1), y && ((y = !1), h(b), (b = -1)), (m = !0);
    var K = f;
    try {
      for (g(q), d = n(l); d !== null && (!(d.expirationTime > q) || (D && !z())); ) {
        var ye = d.callback;
        if (typeof ye == 'function') {
          (d.callback = null), (f = d.priorityLevel);
          var Se = ye(d.expirationTime <= q);
          (q = e.unstable_now()),
            typeof Se == 'function' ? (d.callback = Se) : d === n(l) && r(l),
            g(q);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Qt = !0;
      else {
        var wt = n(u);
        wt !== null && Re(x, wt.startTime - q), (Qt = !1);
      }
      return Qt;
    } finally {
      (d = null), (f = K), (m = !1);
    }
  }
  var A = !1,
    S = null,
    b = -1,
    L = 5,
    P = -1;
  function z() {
    return !(e.unstable_now() - P < L);
  }
  function N() {
    if (S !== null) {
      var D = e.unstable_now();
      P = D;
      var q = !0;
      try {
        q = S(!0, D);
      } finally {
        q ? j() : ((A = !1), (S = null));
      }
    } else A = !1;
  }
  var j;
  if (typeof p == 'function')
    j = function () {
      p(N);
    };
  else if (typeof MessageChannel < 'u') {
    var G = new MessageChannel(),
      Q = G.port2;
    (G.port1.onmessage = N),
      (j = function () {
        Q.postMessage(null);
      });
  } else
    j = function () {
      w(N, 0);
    };
  function he(D) {
    (S = D), A || ((A = !0), j());
  }
  function Re(D, q) {
    b = w(function () {
      D(e.unstable_now());
    }, q);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || m || ((v = !0), he(T));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (L = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (D) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = f;
      }
      var K = f;
      f = q;
      try {
        return D();
      } finally {
        f = K;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, q) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var K = f;
      f = D;
      try {
        return q();
      } finally {
        f = K;
      }
    }),
    (e.unstable_scheduleCallback = function (D, q, K) {
      var ye = e.unstable_now();
      switch (
        (typeof K == 'object' && K !== null
          ? ((K = K.delay), (K = typeof K == 'number' && 0 < K ? ye + K : ye))
          : (K = ye),
        D)
      ) {
        case 1:
          var Se = -1;
          break;
        case 2:
          Se = 250;
          break;
        case 5:
          Se = 1073741823;
          break;
        case 4:
          Se = 1e4;
          break;
        default:
          Se = 5e3;
      }
      return (
        (Se = K + Se),
        (D = {
          id: c++,
          callback: q,
          priorityLevel: D,
          startTime: K,
          expirationTime: Se,
          sortIndex: -1,
        }),
        K > ye
          ? ((D.sortIndex = K),
            t(u, D),
            n(l) === null && D === n(u) && (y ? (h(b), (b = -1)) : (y = !0), Re(x, K - ye)))
          : ((D.sortIndex = Se), t(l, D), v || m || ((v = !0), he(T))),
        D
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (D) {
      var q = f;
      return function () {
        var K = f;
        f = q;
        try {
          return D.apply(this, arguments);
        } finally {
          f = K;
        }
      };
    });
})(rx);
nx.exports = rx;
var jT = nx.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var IT = _,
  sn = jT;
function B(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var ix = new Set(),
  va = {};
function as(e, t) {
  so(e, t), so(e + 'Capture', t);
}
function so(e, t) {
  for (va[e] = t, e = 0; e < t.length; e++) ix.add(t[e]);
}
var br = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  wf = Object.prototype.hasOwnProperty,
  FT =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fg = {},
  hg = {};
function VT(e) {
  return wf.call(hg, e) ? !0 : wf.call(fg, e) ? !1 : FT.test(e) ? (hg[e] = !0) : ((fg[e] = !0), !1);
}
function zT(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function BT(e, t, n, r) {
  if (t === null || typeof t > 'u' || zT(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ut(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var xt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    xt[e] = new Ut(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  xt[t] = new Ut(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  xt[e] = new Ut(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  xt[e] = new Ut(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    xt[e] = new Ut(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  xt[e] = new Ut(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  xt[e] = new Ut(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  xt[e] = new Ut(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  xt[e] = new Ut(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var lp = /[\-:]([a-z])/g;
function up(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(lp, up);
    xt[t] = new Ut(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(lp, up);
    xt[t] = new Ut(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(lp, up);
  xt[t] = new Ut(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  xt[e] = new Ut(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xt.xlinkHref = new Ut('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  xt[e] = new Ut(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cp(e, t, n, r) {
  var i = xt.hasOwnProperty(t) ? xt[t] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (BT(t, n, i, r) && (n = null),
    r || i === null
      ? VT(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Rr = IT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Hl = Symbol.for('react.element'),
  xs = Symbol.for('react.portal'),
  ws = Symbol.for('react.fragment'),
  dp = Symbol.for('react.strict_mode'),
  Sf = Symbol.for('react.profiler'),
  sx = Symbol.for('react.provider'),
  ox = Symbol.for('react.context'),
  fp = Symbol.for('react.forward_ref'),
  Ef = Symbol.for('react.suspense'),
  Tf = Symbol.for('react.suspense_list'),
  hp = Symbol.for('react.memo'),
  Fr = Symbol.for('react.lazy'),
  ax = Symbol.for('react.offscreen'),
  pg = Symbol.iterator;
function Oo(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (pg && e[pg]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Ge = Object.assign,
  fd;
function qo(e) {
  if (fd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      fd = (t && t[1]) || '';
    }
  return (
    `
` +
    fd +
    e
  );
}
var hd = !1;
function pd(e, t) {
  if (!e || hd) return '';
  hd = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (hd = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? qo(e) : '';
}
function UT(e) {
  switch (e.tag) {
    case 5:
      return qo(e.type);
    case 16:
      return qo('Lazy');
    case 13:
      return qo('Suspense');
    case 19:
      return qo('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = pd(e.type, !1)), e;
    case 11:
      return (e = pd(e.type.render, !1)), e;
    case 1:
      return (e = pd(e.type, !0)), e;
    default:
      return '';
  }
}
function bf(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case ws:
      return 'Fragment';
    case xs:
      return 'Portal';
    case Sf:
      return 'Profiler';
    case dp:
      return 'StrictMode';
    case Ef:
      return 'Suspense';
    case Tf:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case ox:
        return (e.displayName || 'Context') + '.Consumer';
      case sx:
        return (e._context.displayName || 'Context') + '.Provider';
      case fp:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case hp:
        return (t = e.displayName || null), t !== null ? t : bf(e.type) || 'Memo';
      case Fr:
        (t = e._payload), (e = e._init);
        try {
          return bf(e(t));
        } catch {}
    }
  return null;
}
function $T(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return bf(t);
    case 8:
      return t === dp ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function ci(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function lx(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function HT(e) {
  var t = lx(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = '' + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Wl(e) {
  e._valueTracker || (e._valueTracker = HT(e));
}
function ux(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = lx(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Mu(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Cf(e, t) {
  var n = t.checked;
  return Ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function mg(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ci(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function cx(e, t) {
  (t = t.checked), t != null && cp(e, 'checked', t, !1);
}
function _f(e, t) {
  cx(e, t);
  var n = ci(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Pf(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Pf(e, t.type, ci(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function gg(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Pf(e, t, n) {
  (t !== 'number' || Mu(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Ko = Array.isArray;
function Fs(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + ci(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function kf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(B(91));
  return Ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function vg(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(B(92));
      if (Ko(n)) {
        if (1 < n.length) throw Error(B(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: ci(n) };
}
function dx(e, t) {
  var n = ci(t.value),
    r = ci(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function yg(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function fx(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Rf(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? fx(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Gl,
  hx = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        Gl = Gl || document.createElement('div'),
          Gl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Gl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ya(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ta = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  WT = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(ta).forEach(function (e) {
  WT.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ta[t] = ta[e]);
  });
});
function px(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (ta.hasOwnProperty(e) && ta[e])
    ? ('' + t).trim()
    : t + 'px';
}
function mx(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = px(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var GT = Ge(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Lf(e, t) {
  if (t) {
    if (GT[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(B(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(B(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(B(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(B(62));
  }
}
function Af(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Of = null;
function pp(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Mf = null,
  Vs = null,
  zs = null;
function xg(e) {
  if ((e = yl(e))) {
    if (typeof Mf != 'function') throw Error(B(280));
    var t = e.stateNode;
    t && ((t = Nc(t)), Mf(e.stateNode, e.type, t));
  }
}
function gx(e) {
  Vs ? (zs ? zs.push(e) : (zs = [e])) : (Vs = e);
}
function vx() {
  if (Vs) {
    var e = Vs,
      t = zs;
    if (((zs = Vs = null), xg(e), t)) for (e = 0; e < t.length; e++) xg(t[e]);
  }
}
function yx(e, t) {
  return e(t);
}
function xx() {}
var md = !1;
function wx(e, t, n) {
  if (md) return e(t, n);
  md = !0;
  try {
    return yx(e, t, n);
  } finally {
    (md = !1), (Vs !== null || zs !== null) && (xx(), vx());
  }
}
function xa(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Nc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(B(231, t, typeof n));
  return n;
}
var Df = !1;
if (br)
  try {
    var Mo = {};
    Object.defineProperty(Mo, 'passive', {
      get: function () {
        Df = !0;
      },
    }),
      window.addEventListener('test', Mo, Mo),
      window.removeEventListener('test', Mo, Mo);
  } catch {
    Df = !1;
  }
function qT(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var na = !1,
  Du = null,
  Nu = !1,
  Nf = null,
  KT = {
    onError: function (e) {
      (na = !0), (Du = e);
    },
  };
function ZT(e, t, n, r, i, s, o, a, l) {
  (na = !1), (Du = null), qT.apply(KT, arguments);
}
function QT(e, t, n, r, i, s, o, a, l) {
  if ((ZT.apply(this, arguments), na)) {
    if (na) {
      var u = Du;
      (na = !1), (Du = null);
    } else throw Error(B(198));
    Nu || ((Nu = !0), (Nf = u));
  }
}
function ls(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Sx(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function wg(e) {
  if (ls(e) !== e) throw Error(B(188));
}
function YT(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ls(e)), t === null)) throw Error(B(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return wg(i), e;
        if (s === r) return wg(i), t;
        s = s.sibling;
      }
      throw Error(B(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(B(189));
      }
    }
    if (n.alternate !== r) throw Error(B(190));
  }
  if (n.tag !== 3) throw Error(B(188));
  return n.stateNode.current === n ? e : t;
}
function Ex(e) {
  return (e = YT(e)), e !== null ? Tx(e) : null;
}
function Tx(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Tx(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var bx = sn.unstable_scheduleCallback,
  Sg = sn.unstable_cancelCallback,
  XT = sn.unstable_shouldYield,
  JT = sn.unstable_requestPaint,
  Ye = sn.unstable_now,
  eb = sn.unstable_getCurrentPriorityLevel,
  mp = sn.unstable_ImmediatePriority,
  Cx = sn.unstable_UserBlockingPriority,
  ju = sn.unstable_NormalPriority,
  tb = sn.unstable_LowPriority,
  _x = sn.unstable_IdlePriority,
  Ac = null,
  er = null;
function nb(e) {
  if (er && typeof er.onCommitFiberRoot == 'function')
    try {
      er.onCommitFiberRoot(Ac, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var In = Math.clz32 ? Math.clz32 : sb,
  rb = Math.log,
  ib = Math.LN2;
function sb(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((rb(e) / ib) | 0)) | 0;
}
var ql = 64,
  Kl = 4194304;
function Zo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Iu(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = Zo(a)) : ((s &= o), s !== 0 && (r = Zo(s)));
  } else (o = n & ~i), o !== 0 ? (r = Zo(o)) : s !== 0 && (r = Zo(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - In(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function ob(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ab(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - In(s),
      a = 1 << o,
      l = i[o];
    l === -1 ? (!(a & n) || a & r) && (i[o] = ob(a, t)) : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function jf(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Px() {
  var e = ql;
  return (ql <<= 1), !(ql & 4194240) && (ql = 64), e;
}
function gd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function gl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - In(t)),
    (e[t] = n);
}
function lb(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - In(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function gp(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - In(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Le = 0;
function kx(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rx,
  vp,
  Lx,
  Ax,
  Ox,
  If = !1,
  Zl = [],
  ei = null,
  ti = null,
  ni = null,
  wa = new Map(),
  Sa = new Map(),
  Br = [],
  ub =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Eg(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ei = null;
      break;
    case 'dragenter':
    case 'dragleave':
      ti = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ni = null;
      break;
    case 'pointerover':
    case 'pointerout':
      wa.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Sa.delete(t.pointerId);
  }
}
function Do(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = yl(t)), t !== null && vp(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function cb(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (ei = Do(ei, e, t, n, r, i)), !0;
    case 'dragenter':
      return (ti = Do(ti, e, t, n, r, i)), !0;
    case 'mouseover':
      return (ni = Do(ni, e, t, n, r, i)), !0;
    case 'pointerover':
      var s = i.pointerId;
      return wa.set(s, Do(wa.get(s) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (s = i.pointerId), Sa.set(s, Do(Sa.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Mx(e) {
  var t = Oi(e.target);
  if (t !== null) {
    var n = ls(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Sx(n)), t !== null)) {
          (e.blockedOn = t),
            Ox(e.priority, function () {
              Lx(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function gu(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ff(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Of = r), n.target.dispatchEvent(r), (Of = null);
    } else return (t = yl(n)), t !== null && vp(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Tg(e, t, n) {
  gu(e) && n.delete(t);
}
function db() {
  (If = !1),
    ei !== null && gu(ei) && (ei = null),
    ti !== null && gu(ti) && (ti = null),
    ni !== null && gu(ni) && (ni = null),
    wa.forEach(Tg),
    Sa.forEach(Tg);
}
function No(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    If || ((If = !0), sn.unstable_scheduleCallback(sn.unstable_NormalPriority, db)));
}
function Ea(e) {
  function t(i) {
    return No(i, e);
  }
  if (0 < Zl.length) {
    No(Zl[0], e);
    for (var n = 1; n < Zl.length; n++) {
      var r = Zl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ei !== null && No(ei, e),
      ti !== null && No(ti, e),
      ni !== null && No(ni, e),
      wa.forEach(t),
      Sa.forEach(t),
      n = 0;
    n < Br.length;
    n++
  )
    (r = Br[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Br.length && ((n = Br[0]), n.blockedOn === null); )
    Mx(n), n.blockedOn === null && Br.shift();
}
var Bs = Rr.ReactCurrentBatchConfig,
  Fu = !0;
function fb(e, t, n, r) {
  var i = Le,
    s = Bs.transition;
  Bs.transition = null;
  try {
    (Le = 1), yp(e, t, n, r);
  } finally {
    (Le = i), (Bs.transition = s);
  }
}
function hb(e, t, n, r) {
  var i = Le,
    s = Bs.transition;
  Bs.transition = null;
  try {
    (Le = 4), yp(e, t, n, r);
  } finally {
    (Le = i), (Bs.transition = s);
  }
}
function yp(e, t, n, r) {
  if (Fu) {
    var i = Ff(e, t, n, r);
    if (i === null) _d(e, t, r, Vu, n), Eg(e, r);
    else if (cb(i, e, t, n, r)) r.stopPropagation();
    else if ((Eg(e, r), t & 4 && -1 < ub.indexOf(e))) {
      for (; i !== null; ) {
        var s = yl(i);
        if ((s !== null && Rx(s), (s = Ff(e, t, n, r)), s === null && _d(e, t, r, Vu, n), s === i))
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else _d(e, t, r, null, n);
  }
}
var Vu = null;
function Ff(e, t, n, r) {
  if (((Vu = null), (e = pp(r)), (e = Oi(e)), e !== null))
    if (((t = ls(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Sx(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Vu = e), null;
}
function Dx(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (eb()) {
        case mp:
          return 1;
        case Cx:
          return 4;
        case ju:
        case tb:
          return 16;
        case _x:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qr = null,
  xp = null,
  vu = null;
function Nx() {
  if (vu) return vu;
  var e,
    t = xp,
    n = t.length,
    r,
    i = 'value' in Qr ? Qr.value : Qr.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (vu = i.slice(e, 1 < r ? 1 - r : void 0));
}
function yu(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ql() {
  return !0;
}
function bg() {
  return !1;
}
function ln(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ql
        : bg),
      (this.isPropagationStopped = bg),
      this
    );
  }
  return (
    Ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ql));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ql));
      },
      persist: function () {},
      isPersistent: Ql,
    }),
    t
  );
}
var Eo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  wp = ln(Eo),
  vl = Ge({}, Eo, { view: 0, detail: 0 }),
  pb = ln(vl),
  vd,
  yd,
  jo,
  Oc = Ge({}, vl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Sp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== jo &&
            (jo && e.type === 'mousemove'
              ? ((vd = e.screenX - jo.screenX), (yd = e.screenY - jo.screenY))
              : (yd = vd = 0),
            (jo = e)),
          vd);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : yd;
    },
  }),
  Cg = ln(Oc),
  mb = Ge({}, Oc, { dataTransfer: 0 }),
  gb = ln(mb),
  vb = Ge({}, vl, { relatedTarget: 0 }),
  xd = ln(vb),
  yb = Ge({}, Eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xb = ln(yb),
  wb = Ge({}, Eo, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Sb = ln(wb),
  Eb = Ge({}, Eo, { data: 0 }),
  _g = ln(Eb),
  Tb = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  bb = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Cb = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function _b(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cb[e]) ? !!t[e] : !1;
}
function Sp() {
  return _b;
}
var Pb = Ge({}, vl, {
    key: function (e) {
      if (e.key) {
        var t = Tb[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = yu(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? bb[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Sp,
    charCode: function (e) {
      return e.type === 'keypress' ? yu(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? yu(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  kb = ln(Pb),
  Rb = Ge({}, Oc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Pg = ln(Rb),
  Lb = Ge({}, vl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sp,
  }),
  Ab = ln(Lb),
  Ob = Ge({}, Eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mb = ln(Ob),
  Db = Ge({}, Oc, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Nb = ln(Db),
  jb = [9, 13, 27, 32],
  Ep = br && 'CompositionEvent' in window,
  ra = null;
br && 'documentMode' in document && (ra = document.documentMode);
var Ib = br && 'TextEvent' in window && !ra,
  jx = br && (!Ep || (ra && 8 < ra && 11 >= ra)),
  kg = ' ',
  Rg = !1;
function Ix(e, t) {
  switch (e) {
    case 'keyup':
      return jb.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Fx(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Ss = !1;
function Fb(e, t) {
  switch (e) {
    case 'compositionend':
      return Fx(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Rg = !0), kg);
    case 'textInput':
      return (e = t.data), e === kg && Rg ? null : e;
    default:
      return null;
  }
}
function Vb(e, t) {
  if (Ss)
    return e === 'compositionend' || (!Ep && Ix(e, t))
      ? ((e = Nx()), (vu = xp = Qr = null), (Ss = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return jx && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var zb = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Lg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!zb[e.type] : t === 'textarea';
}
function Vx(e, t, n, r) {
  gx(r),
    (t = zu(t, 'onChange')),
    0 < t.length &&
      ((n = new wp('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var ia = null,
  Ta = null;
function Bb(e) {
  Qx(e, 0);
}
function Mc(e) {
  var t = bs(e);
  if (ux(t)) return e;
}
function Ub(e, t) {
  if (e === 'change') return t;
}
var zx = !1;
if (br) {
  var wd;
  if (br) {
    var Sd = 'oninput' in document;
    if (!Sd) {
      var Ag = document.createElement('div');
      Ag.setAttribute('oninput', 'return;'), (Sd = typeof Ag.oninput == 'function');
    }
    wd = Sd;
  } else wd = !1;
  zx = wd && (!document.documentMode || 9 < document.documentMode);
}
function Og() {
  ia && (ia.detachEvent('onpropertychange', Bx), (Ta = ia = null));
}
function Bx(e) {
  if (e.propertyName === 'value' && Mc(Ta)) {
    var t = [];
    Vx(t, Ta, e, pp(e)), wx(Bb, t);
  }
}
function $b(e, t, n) {
  e === 'focusin'
    ? (Og(), (ia = t), (Ta = n), ia.attachEvent('onpropertychange', Bx))
    : e === 'focusout' && Og();
}
function Hb(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Mc(Ta);
}
function Wb(e, t) {
  if (e === 'click') return Mc(t);
}
function Gb(e, t) {
  if (e === 'input' || e === 'change') return Mc(t);
}
function qb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var zn = typeof Object.is == 'function' ? Object.is : qb;
function ba(e, t) {
  if (zn(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!wf.call(t, i) || !zn(e[i], t[i])) return !1;
  }
  return !0;
}
function Mg(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Dg(e, t) {
  var n = Mg(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Mg(n);
  }
}
function Ux(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ux(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function $x() {
  for (var e = window, t = Mu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Mu(e.document);
  }
  return t;
}
function Tp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Kb(e) {
  var t = $x(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ux(n.ownerDocument.documentElement, n)) {
    if (r !== null && Tp(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Dg(n, s));
        var o = Dg(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Zb = br && 'documentMode' in document && 11 >= document.documentMode,
  Es = null,
  Vf = null,
  sa = null,
  zf = !1;
function Ng(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zf ||
    Es == null ||
    Es !== Mu(r) ||
    ((r = Es),
    'selectionStart' in r && Tp(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (sa && ba(sa, r)) ||
      ((sa = r),
      (r = zu(Vf, 'onSelect')),
      0 < r.length &&
        ((t = new wp('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Es))));
}
function Yl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Ts = {
    animationend: Yl('Animation', 'AnimationEnd'),
    animationiteration: Yl('Animation', 'AnimationIteration'),
    animationstart: Yl('Animation', 'AnimationStart'),
    transitionend: Yl('Transition', 'TransitionEnd'),
  },
  Ed = {},
  Hx = {};
br &&
  ((Hx = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ts.animationend.animation,
    delete Ts.animationiteration.animation,
    delete Ts.animationstart.animation),
  'TransitionEvent' in window || delete Ts.transitionend.transition);
function Dc(e) {
  if (Ed[e]) return Ed[e];
  if (!Ts[e]) return e;
  var t = Ts[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Hx) return (Ed[e] = t[n]);
  return e;
}
var Wx = Dc('animationend'),
  Gx = Dc('animationiteration'),
  qx = Dc('animationstart'),
  Kx = Dc('transitionend'),
  Zx = new Map(),
  jg =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function xi(e, t) {
  Zx.set(e, t), as(t, [e]);
}
for (var Td = 0; Td < jg.length; Td++) {
  var bd = jg[Td],
    Qb = bd.toLowerCase(),
    Yb = bd[0].toUpperCase() + bd.slice(1);
  xi(Qb, 'on' + Yb);
}
xi(Wx, 'onAnimationEnd');
xi(Gx, 'onAnimationIteration');
xi(qx, 'onAnimationStart');
xi('dblclick', 'onDoubleClick');
xi('focusin', 'onFocus');
xi('focusout', 'onBlur');
xi(Kx, 'onTransitionEnd');
so('onMouseEnter', ['mouseout', 'mouseover']);
so('onMouseLeave', ['mouseout', 'mouseover']);
so('onPointerEnter', ['pointerout', 'pointerover']);
so('onPointerLeave', ['pointerout', 'pointerover']);
as('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
as(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '),
);
as('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
as('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
as('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
as('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Qo =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Xb = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Qo));
function Ig(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), QT(r, t, void 0, e), (e.currentTarget = null);
}
function Qx(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          Ig(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          Ig(i, a, u), (s = l);
        }
    }
  }
  if (Nu) throw ((e = Nf), (Nu = !1), (Nf = null), e);
}
function Ne(e, t) {
  var n = t[Wf];
  n === void 0 && (n = t[Wf] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Yx(t, e, 2, !1), n.add(r));
}
function Cd(e, t, n) {
  var r = 0;
  t && (r |= 4), Yx(n, e, r, t);
}
var Xl = '_reactListening' + Math.random().toString(36).slice(2);
function Ca(e) {
  if (!e[Xl]) {
    (e[Xl] = !0),
      ix.forEach(function (n) {
        n !== 'selectionchange' && (Xb.has(n) || Cd(n, !1, e), Cd(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xl] || ((t[Xl] = !0), Cd('selectionchange', !1, t));
  }
}
function Yx(e, t, n, r) {
  switch (Dx(t)) {
    case 1:
      var i = fb;
      break;
    case 4:
      i = hb;
      break;
    default:
      i = yp;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Df || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function _d(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo), l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Oi(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  wx(function () {
    var u = s,
      c = pp(n),
      d = [];
    e: {
      var f = Zx.get(e);
      if (f !== void 0) {
        var m = wp,
          v = e;
        switch (e) {
          case 'keypress':
            if (yu(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = kb;
            break;
          case 'focusin':
            (v = 'focus'), (m = xd);
            break;
          case 'focusout':
            (v = 'blur'), (m = xd);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = xd;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = Cg;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = gb;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = Ab;
            break;
          case Wx:
          case Gx:
          case qx:
            m = xb;
            break;
          case Kx:
            m = Mb;
            break;
          case 'scroll':
            m = pb;
            break;
          case 'wheel':
            m = Nb;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = Sb;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = Pg;
        }
        var y = (t & 4) !== 0,
          w = !y && e === 'scroll',
          h = y ? (f !== null ? f + 'Capture' : null) : f;
        y = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var x = g.stateNode;
          if (
            (g.tag === 5 &&
              x !== null &&
              ((g = x), h !== null && ((x = xa(p, h)), x != null && y.push(_a(p, x, g)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < y.length && ((f = new m(f, v, null, n, c)), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (m = e === 'mouseout' || e === 'pointerout'),
          f && n !== Of && (v = n.relatedTarget || n.fromElement) && (Oi(v) || v[Cr]))
        )
          break e;
        if (
          (m || f) &&
          ((f =
            c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window),
          m
            ? ((v = n.relatedTarget || n.toElement),
              (m = u),
              (v = v ? Oi(v) : null),
              v !== null && ((w = ls(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) && (v = null))
            : ((m = null), (v = u)),
          m !== v)
        ) {
          if (
            ((y = Cg),
            (x = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = Pg), (x = 'onPointerLeave'), (h = 'onPointerEnter'), (p = 'pointer')),
            (w = m == null ? f : bs(m)),
            (g = v == null ? f : bs(v)),
            (f = new y(x, p + 'leave', m, n, c)),
            (f.target = w),
            (f.relatedTarget = g),
            (x = null),
            Oi(c) === u &&
              ((y = new y(h, p + 'enter', v, n, c)),
              (y.target = g),
              (y.relatedTarget = w),
              (x = y)),
            (w = x),
            m && v)
          )
            t: {
              for (y = m, h = v, p = 0, g = y; g; g = ms(g)) p++;
              for (g = 0, x = h; x; x = ms(x)) g++;
              for (; 0 < p - g; ) (y = ms(y)), p--;
              for (; 0 < g - p; ) (h = ms(h)), g--;
              for (; p--; ) {
                if (y === h || (h !== null && y === h.alternate)) break t;
                (y = ms(y)), (h = ms(h));
              }
              y = null;
            }
          else y = null;
          m !== null && Fg(d, f, m, y, !1), v !== null && w !== null && Fg(d, w, v, y, !0);
        }
      }
      e: {
        if (
          ((f = u ? bs(u) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && f.type === 'file'))
        )
          var T = Ub;
        else if (Lg(f))
          if (zx) T = Gb;
          else {
            T = Hb;
            var A = $b;
          }
        else
          (m = f.nodeName) &&
            m.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (T = Wb);
        if (T && (T = T(e, u))) {
          Vx(d, T, n, c);
          break e;
        }
        A && A(e, f, u),
          e === 'focusout' &&
            (A = f._wrapperState) &&
            A.controlled &&
            f.type === 'number' &&
            Pf(f, 'number', f.value);
      }
      switch (((A = u ? bs(u) : window), e)) {
        case 'focusin':
          (Lg(A) || A.contentEditable === 'true') && ((Es = A), (Vf = u), (sa = null));
          break;
        case 'focusout':
          sa = Vf = Es = null;
          break;
        case 'mousedown':
          zf = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (zf = !1), Ng(d, n, c);
          break;
        case 'selectionchange':
          if (Zb) break;
        case 'keydown':
        case 'keyup':
          Ng(d, n, c);
      }
      var S;
      if (Ep)
        e: {
          switch (e) {
            case 'compositionstart':
              var b = 'onCompositionStart';
              break e;
            case 'compositionend':
              b = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              b = 'onCompositionUpdate';
              break e;
          }
          b = void 0;
        }
      else
        Ss
          ? Ix(e, n) && (b = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (b = 'onCompositionStart');
      b &&
        (jx &&
          n.locale !== 'ko' &&
          (Ss || b !== 'onCompositionStart'
            ? b === 'onCompositionEnd' && Ss && (S = Nx())
            : ((Qr = c), (xp = 'value' in Qr ? Qr.value : Qr.textContent), (Ss = !0))),
        (A = zu(u, b)),
        0 < A.length &&
          ((b = new _g(b, e, null, n, c)),
          d.push({ event: b, listeners: A }),
          S ? (b.data = S) : ((S = Fx(n)), S !== null && (b.data = S)))),
        (S = Ib ? Fb(e, n) : Vb(e, n)) &&
          ((u = zu(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new _g('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = S)));
    }
    Qx(d, t);
  });
}
function _a(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function zu(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = xa(e, n)),
      s != null && r.unshift(_a(e, s, i)),
      (s = xa(e, t)),
      s != null && r.push(_a(e, s, i))),
      (e = e.return);
  }
  return r;
}
function ms(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Fg(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = xa(n, s)), l != null && o.unshift(_a(n, l, a)))
        : i || ((l = xa(n, s)), l != null && o.push(_a(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Jb = /\r\n?/g,
  eC = /\u0000|\uFFFD/g;
function Vg(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Jb,
      `
`,
    )
    .replace(eC, '');
}
function Jl(e, t, n) {
  if (((t = Vg(t)), Vg(e) !== t && n)) throw Error(B(425));
}
function Bu() {}
var Bf = null,
  Uf = null;
function $f(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Hf = typeof setTimeout == 'function' ? setTimeout : void 0,
  tC = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  zg = typeof Promise == 'function' ? Promise : void 0,
  nC =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof zg < 'u'
      ? function (e) {
          return zg.resolve(null).then(e).catch(rC);
        }
      : Hf;
function rC(e) {
  setTimeout(function () {
    throw e;
  });
}
function Pd(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Ea(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Ea(t);
}
function ri(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Bg(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var To = Math.random().toString(36).slice(2),
  Qn = '__reactFiber$' + To,
  Pa = '__reactProps$' + To,
  Cr = '__reactContainer$' + To,
  Wf = '__reactEvents$' + To,
  iC = '__reactListeners$' + To,
  sC = '__reactHandles$' + To;
function Oi(e) {
  var t = e[Qn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Cr] || n[Qn])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Bg(e); e !== null; ) {
          if ((n = e[Qn])) return n;
          e = Bg(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function yl(e) {
  return (
    (e = e[Qn] || e[Cr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function bs(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(B(33));
}
function Nc(e) {
  return e[Pa] || null;
}
var Gf = [],
  Cs = -1;
function wi(e) {
  return { current: e };
}
function je(e) {
  0 > Cs || ((e.current = Gf[Cs]), (Gf[Cs] = null), Cs--);
}
function De(e, t) {
  Cs++, (Gf[Cs] = e.current), (e.current = t);
}
var di = {},
  Pt = wi(di),
  qt = wi(!1),
  Xi = di;
function oo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return di;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Kt(e) {
  return (e = e.childContextTypes), e != null;
}
function Uu() {
  je(qt), je(Pt);
}
function Ug(e, t, n) {
  if (Pt.current !== di) throw Error(B(168));
  De(Pt, t), De(qt, n);
}
function Xx(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(B(108, $T(e) || 'Unknown', i));
  return Ge({}, n, r);
}
function $u(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || di),
    (Xi = Pt.current),
    De(Pt, e),
    De(qt, qt.current),
    !0
  );
}
function $g(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(B(169));
  n
    ? ((e = Xx(e, t, Xi)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      je(qt),
      je(Pt),
      De(Pt, e))
    : je(qt),
    De(qt, n);
}
var hr = null,
  jc = !1,
  kd = !1;
function Jx(e) {
  hr === null ? (hr = [e]) : hr.push(e);
}
function oC(e) {
  (jc = !0), Jx(e);
}
function Si() {
  if (!kd && hr !== null) {
    kd = !0;
    var e = 0,
      t = Le;
    try {
      var n = hr;
      for (Le = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (hr = null), (jc = !1);
    } catch (i) {
      throw (hr !== null && (hr = hr.slice(e + 1)), bx(mp, Si), i);
    } finally {
      (Le = t), (kd = !1);
    }
  }
  return null;
}
var _s = [],
  Ps = 0,
  Hu = null,
  Wu = 0,
  yn = [],
  xn = 0,
  Ji = null,
  mr = 1,
  gr = '';
function Pi(e, t) {
  (_s[Ps++] = Wu), (_s[Ps++] = Hu), (Hu = e), (Wu = t);
}
function ew(e, t, n) {
  (yn[xn++] = mr), (yn[xn++] = gr), (yn[xn++] = Ji), (Ji = e);
  var r = mr;
  e = gr;
  var i = 32 - In(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - In(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (mr = (1 << (32 - In(t) + i)) | (n << i) | r),
      (gr = s + e);
  } else (mr = (1 << s) | (n << i) | r), (gr = e);
}
function bp(e) {
  e.return !== null && (Pi(e, 1), ew(e, 1, 0));
}
function Cp(e) {
  for (; e === Hu; ) (Hu = _s[--Ps]), (_s[Ps] = null), (Wu = _s[--Ps]), (_s[Ps] = null);
  for (; e === Ji; )
    (Ji = yn[--xn]),
      (yn[xn] = null),
      (gr = yn[--xn]),
      (yn[xn] = null),
      (mr = yn[--xn]),
      (yn[xn] = null);
}
var nn = null,
  tn = null,
  Ve = !1,
  Mn = null;
function tw(e, t) {
  var n = Sn(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Hg(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (nn = e), (tn = ri(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (nn = e), (tn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ji !== null ? { id: mr, overflow: gr } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Sn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (nn = e),
            (tn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function qf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Kf(e) {
  if (Ve) {
    var t = tn;
    if (t) {
      var n = t;
      if (!Hg(e, t)) {
        if (qf(e)) throw Error(B(418));
        t = ri(n.nextSibling);
        var r = nn;
        t && Hg(e, t) ? tw(r, n) : ((e.flags = (e.flags & -4097) | 2), (Ve = !1), (nn = e));
      }
    } else {
      if (qf(e)) throw Error(B(418));
      (e.flags = (e.flags & -4097) | 2), (Ve = !1), (nn = e);
    }
  }
}
function Wg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  nn = e;
}
function eu(e) {
  if (e !== nn) return !1;
  if (!Ve) return Wg(e), (Ve = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !$f(e.type, e.memoizedProps))),
    t && (t = tn))
  ) {
    if (qf(e)) throw (nw(), Error(B(418)));
    for (; t; ) tw(e, t), (t = ri(t.nextSibling));
  }
  if ((Wg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(B(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              tn = ri(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      tn = null;
    }
  } else tn = nn ? ri(e.stateNode.nextSibling) : null;
  return !0;
}
function nw() {
  for (var e = tn; e; ) e = ri(e.nextSibling);
}
function ao() {
  (tn = nn = null), (Ve = !1);
}
function _p(e) {
  Mn === null ? (Mn = [e]) : Mn.push(e);
}
var aC = Rr.ReactCurrentBatchConfig;
function Io(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(B(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(B(147, e));
      var i = r,
        s = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != 'string') throw Error(B(284));
    if (!n._owner) throw Error(B(290, e));
  }
  return e;
}
function tu(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      B(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e),
    ))
  );
}
function Gg(e) {
  var t = e._init;
  return t(e._payload);
}
function rw(e) {
  function t(h, p) {
    if (e) {
      var g = h.deletions;
      g === null ? ((h.deletions = [p]), (h.flags |= 16)) : g.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function i(h, p) {
    return (h = ai(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function s(h, p, g) {
    return (
      (h.index = g),
      e
        ? ((g = h.alternate),
          g !== null ? ((g = g.index), g < p ? ((h.flags |= 2), p) : g) : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, p, g, x) {
    return p === null || p.tag !== 6
      ? ((p = Nd(g, h.mode, x)), (p.return = h), p)
      : ((p = i(p, g)), (p.return = h), p);
  }
  function l(h, p, g, x) {
    var T = g.type;
    return T === ws
      ? c(h, p, g.props.children, x, g.key)
      : p !== null &&
        (p.elementType === T ||
          (typeof T == 'object' && T !== null && T.$$typeof === Fr && Gg(T) === p.type))
      ? ((x = i(p, g.props)), (x.ref = Io(h, p, g)), (x.return = h), x)
      : ((x = Cu(g.type, g.key, g.props, null, h.mode, x)),
        (x.ref = Io(h, p, g)),
        (x.return = h),
        x);
  }
  function u(h, p, g, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = jd(g, h.mode, x)), (p.return = h), p)
      : ((p = i(p, g.children || [])), (p.return = h), p);
  }
  function c(h, p, g, x, T) {
    return p === null || p.tag !== 7
      ? ((p = Ki(g, h.mode, x, T)), (p.return = h), p)
      : ((p = i(p, g)), (p.return = h), p);
  }
  function d(h, p, g) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Nd('' + p, h.mode, g)), (p.return = h), p;
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Hl:
          return (
            (g = Cu(p.type, p.key, p.props, null, h.mode, g)),
            (g.ref = Io(h, null, p)),
            (g.return = h),
            g
          );
        case xs:
          return (p = jd(p, h.mode, g)), (p.return = h), p;
        case Fr:
          var x = p._init;
          return d(h, x(p._payload), g);
      }
      if (Ko(p) || Oo(p)) return (p = Ki(p, h.mode, g, null)), (p.return = h), p;
      tu(h, p);
    }
    return null;
  }
  function f(h, p, g, x) {
    var T = p !== null ? p.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return T !== null ? null : a(h, p, '' + g, x);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Hl:
          return g.key === T ? l(h, p, g, x) : null;
        case xs:
          return g.key === T ? u(h, p, g, x) : null;
        case Fr:
          return (T = g._init), f(h, p, T(g._payload), x);
      }
      if (Ko(g) || Oo(g)) return T !== null ? null : c(h, p, g, x, null);
      tu(h, g);
    }
    return null;
  }
  function m(h, p, g, x, T) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (h = h.get(g) || null), a(p, h, '' + x, T);
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case Hl:
          return (h = h.get(x.key === null ? g : x.key) || null), l(p, h, x, T);
        case xs:
          return (h = h.get(x.key === null ? g : x.key) || null), u(p, h, x, T);
        case Fr:
          var A = x._init;
          return m(h, p, g, A(x._payload), T);
      }
      if (Ko(x) || Oo(x)) return (h = h.get(g) || null), c(p, h, x, T, null);
      tu(p, x);
    }
    return null;
  }
  function v(h, p, g, x) {
    for (var T = null, A = null, S = p, b = (p = 0), L = null; S !== null && b < g.length; b++) {
      S.index > b ? ((L = S), (S = null)) : (L = S.sibling);
      var P = f(h, S, g[b], x);
      if (P === null) {
        S === null && (S = L);
        break;
      }
      e && S && P.alternate === null && t(h, S),
        (p = s(P, p, b)),
        A === null ? (T = P) : (A.sibling = P),
        (A = P),
        (S = L);
    }
    if (b === g.length) return n(h, S), Ve && Pi(h, b), T;
    if (S === null) {
      for (; b < g.length; b++)
        (S = d(h, g[b], x)),
          S !== null && ((p = s(S, p, b)), A === null ? (T = S) : (A.sibling = S), (A = S));
      return Ve && Pi(h, b), T;
    }
    for (S = r(h, S); b < g.length; b++)
      (L = m(S, h, b, g[b], x)),
        L !== null &&
          (e && L.alternate !== null && S.delete(L.key === null ? b : L.key),
          (p = s(L, p, b)),
          A === null ? (T = L) : (A.sibling = L),
          (A = L));
    return (
      e &&
        S.forEach(function (z) {
          return t(h, z);
        }),
      Ve && Pi(h, b),
      T
    );
  }
  function y(h, p, g, x) {
    var T = Oo(g);
    if (typeof T != 'function') throw Error(B(150));
    if (((g = T.call(g)), g == null)) throw Error(B(151));
    for (
      var A = (T = null), S = p, b = (p = 0), L = null, P = g.next();
      S !== null && !P.done;
      b++, P = g.next()
    ) {
      S.index > b ? ((L = S), (S = null)) : (L = S.sibling);
      var z = f(h, S, P.value, x);
      if (z === null) {
        S === null && (S = L);
        break;
      }
      e && S && z.alternate === null && t(h, S),
        (p = s(z, p, b)),
        A === null ? (T = z) : (A.sibling = z),
        (A = z),
        (S = L);
    }
    if (P.done) return n(h, S), Ve && Pi(h, b), T;
    if (S === null) {
      for (; !P.done; b++, P = g.next())
        (P = d(h, P.value, x)),
          P !== null && ((p = s(P, p, b)), A === null ? (T = P) : (A.sibling = P), (A = P));
      return Ve && Pi(h, b), T;
    }
    for (S = r(h, S); !P.done; b++, P = g.next())
      (P = m(S, h, b, P.value, x)),
        P !== null &&
          (e && P.alternate !== null && S.delete(P.key === null ? b : P.key),
          (p = s(P, p, b)),
          A === null ? (T = P) : (A.sibling = P),
          (A = P));
    return (
      e &&
        S.forEach(function (N) {
          return t(h, N);
        }),
      Ve && Pi(h, b),
      T
    );
  }
  function w(h, p, g, x) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === ws &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case Hl:
          e: {
            for (var T = g.key, A = p; A !== null; ) {
              if (A.key === T) {
                if (((T = g.type), T === ws)) {
                  if (A.tag === 7) {
                    n(h, A.sibling), (p = i(A, g.props.children)), (p.return = h), (h = p);
                    break e;
                  }
                } else if (
                  A.elementType === T ||
                  (typeof T == 'object' && T !== null && T.$$typeof === Fr && Gg(T) === A.type)
                ) {
                  n(h, A.sibling),
                    (p = i(A, g.props)),
                    (p.ref = Io(h, A, g)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, A);
                break;
              } else t(h, A);
              A = A.sibling;
            }
            g.type === ws
              ? ((p = Ki(g.props.children, h.mode, x, g.key)), (p.return = h), (h = p))
              : ((x = Cu(g.type, g.key, g.props, null, h.mode, x)),
                (x.ref = Io(h, p, g)),
                (x.return = h),
                (h = x));
          }
          return o(h);
        case xs:
          e: {
            for (A = g.key; p !== null; ) {
              if (p.key === A)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(h, p.sibling), (p = i(p, g.children || [])), (p.return = h), (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = jd(g, h.mode, x)), (p.return = h), (h = p);
          }
          return o(h);
        case Fr:
          return (A = g._init), w(h, p, A(g._payload), x);
      }
      if (Ko(g)) return v(h, p, g, x);
      if (Oo(g)) return y(h, p, g, x);
      tu(h, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = i(p, g)), (p.return = h), (h = p))
          : (n(h, p), (p = Nd(g, h.mode, x)), (p.return = h), (h = p)),
        o(h))
      : n(h, p);
  }
  return w;
}
var lo = rw(!0),
  iw = rw(!1),
  Gu = wi(null),
  qu = null,
  ks = null,
  Pp = null;
function kp() {
  Pp = ks = qu = null;
}
function Rp(e) {
  var t = Gu.current;
  je(Gu), (e._currentValue = t);
}
function Zf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Us(e, t) {
  (qu = e),
    (Pp = ks = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Wt = !0), (e.firstContext = null));
}
function _n(e) {
  var t = e._currentValue;
  if (Pp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ks === null)) {
      if (qu === null) throw Error(B(308));
      (ks = e), (qu.dependencies = { lanes: 0, firstContext: e });
    } else ks = ks.next = e;
  return t;
}
var Mi = null;
function Lp(e) {
  Mi === null ? (Mi = [e]) : Mi.push(e);
}
function sw(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Lp(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    _r(e, r)
  );
}
function _r(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Vr = !1;
function Ap(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ow(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function yr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ii(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ke & 2)) {
    var i = r.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), _r(e, n);
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Lp(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    _r(e, n)
  );
}
function xu(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gp(e, n);
  }
}
function qg(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ku(e, t, n, r) {
  var i = e.updateQueue;
  Vr = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var f = a.lane,
        m = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            y = a;
          switch (((f = t), (m = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == 'function')) {
                d = v.call(m, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (((v = y.payload), (f = typeof v == 'function' ? v.call(m, d, f) : v), f == null))
                break e;
              d = Ge({}, d, f);
              break e;
            case 2:
              Vr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (f = i.effects), f === null ? (i.effects = [a]) : f.push(a));
      } else
        (m = {
          eventTime: m,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = d)) : (c = c.next = m),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a), (a = f.next), (f.next = null), (i.lastBaseUpdate = f), (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (ts |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function Kg(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(B(191, i));
        i.call(r);
      }
    }
}
var xl = {},
  tr = wi(xl),
  ka = wi(xl),
  Ra = wi(xl);
function Di(e) {
  if (e === xl) throw Error(B(174));
  return e;
}
function Op(e, t) {
  switch ((De(Ra, t), De(ka, e), De(tr, xl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Rf(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Rf(t, e));
  }
  je(tr), De(tr, t);
}
function uo() {
  je(tr), je(ka), je(Ra);
}
function aw(e) {
  Di(Ra.current);
  var t = Di(tr.current),
    n = Rf(t, e.type);
  t !== n && (De(ka, e), De(tr, n));
}
function Mp(e) {
  ka.current === e && (je(tr), je(ka));
}
var Ue = wi(0);
function Zu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Rd = [];
function Dp() {
  for (var e = 0; e < Rd.length; e++) Rd[e]._workInProgressVersionPrimary = null;
  Rd.length = 0;
}
var wu = Rr.ReactCurrentDispatcher,
  Ld = Rr.ReactCurrentBatchConfig,
  es = 0,
  We = null,
  rt = null,
  lt = null,
  Qu = !1,
  oa = !1,
  La = 0,
  lC = 0;
function St() {
  throw Error(B(321));
}
function Np(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!zn(e[n], t[n])) return !1;
  return !0;
}
function jp(e, t, n, r, i, s) {
  if (
    ((es = s),
    (We = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (wu.current = e === null || e.memoizedState === null ? fC : hC),
    (e = n(r, i)),
    oa)
  ) {
    s = 0;
    do {
      if (((oa = !1), (La = 0), 25 <= s)) throw Error(B(301));
      (s += 1), (lt = rt = null), (t.updateQueue = null), (wu.current = pC), (e = n(r, i));
    } while (oa);
  }
  if (
    ((wu.current = Yu),
    (t = rt !== null && rt.next !== null),
    (es = 0),
    (lt = rt = We = null),
    (Qu = !1),
    t)
  )
    throw Error(B(300));
  return e;
}
function Ip() {
  var e = La !== 0;
  return (La = 0), e;
}
function Wn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return lt === null ? (We.memoizedState = lt = e) : (lt = lt.next = e), lt;
}
function Pn() {
  if (rt === null) {
    var e = We.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = rt.next;
  var t = lt === null ? We.memoizedState : lt.next;
  if (t !== null) (lt = t), (rt = e);
  else {
    if (e === null) throw Error(B(310));
    (rt = e),
      (e = {
        memoizedState: rt.memoizedState,
        baseState: rt.baseState,
        baseQueue: rt.baseQueue,
        queue: rt.queue,
        next: null,
      }),
      lt === null ? (We.memoizedState = lt = e) : (lt = lt.next = e);
  }
  return lt;
}
function Aa(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Ad(e) {
  var t = Pn(),
    n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = rt,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((es & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = r)) : (l = l.next = d), (We.lanes |= c), (ts |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      zn(r, t.memoizedState) || (Wt = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (We.lanes |= s), (ts |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Od(e) {
  var t = Pn(),
    n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    zn(s, t.memoizedState) || (Wt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function lw() {}
function uw(e, t) {
  var n = We,
    r = Pn(),
    i = t(),
    s = !zn(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Wt = !0)),
    (r = r.queue),
    Fp(fw.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (lt !== null && lt.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Oa(9, dw.bind(null, n, r, i, t), void 0, null), ut === null))
      throw Error(B(349));
    es & 30 || cw(n, t, i);
  }
  return i;
}
function cw(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = We.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (We.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function dw(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), hw(t) && pw(e);
}
function fw(e, t, n) {
  return n(function () {
    hw(t) && pw(e);
  });
}
function hw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !zn(e, n);
  } catch {
    return !0;
  }
}
function pw(e) {
  var t = _r(e, 1);
  t !== null && Fn(t, e, 1, -1);
}
function Zg(e) {
  var t = Wn();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Aa,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = dC.bind(null, We, e)),
    [t.memoizedState, e]
  );
}
function Oa(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = We.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (We.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function mw() {
  return Pn().memoizedState;
}
function Su(e, t, n, r) {
  var i = Wn();
  (We.flags |= e), (i.memoizedState = Oa(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ic(e, t, n, r) {
  var i = Pn();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (rt !== null) {
    var o = rt.memoizedState;
    if (((s = o.destroy), r !== null && Np(r, o.deps))) {
      i.memoizedState = Oa(t, n, s, r);
      return;
    }
  }
  (We.flags |= e), (i.memoizedState = Oa(1 | t, n, s, r));
}
function Qg(e, t) {
  return Su(8390656, 8, e, t);
}
function Fp(e, t) {
  return Ic(2048, 8, e, t);
}
function gw(e, t) {
  return Ic(4, 2, e, t);
}
function vw(e, t) {
  return Ic(4, 4, e, t);
}
function yw(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function xw(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Ic(4, 4, yw.bind(null, t, e), n);
}
function Vp() {}
function ww(e, t) {
  var n = Pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Np(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Sw(e, t) {
  var n = Pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Np(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ew(e, t, n) {
  return es & 21
    ? (zn(n, t) || ((n = Px()), (We.lanes |= n), (ts |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Wt = !0)), (e.memoizedState = n));
}
function uC(e, t) {
  var n = Le;
  (Le = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ld.transition;
  Ld.transition = {};
  try {
    e(!1), t();
  } finally {
    (Le = n), (Ld.transition = r);
  }
}
function Tw() {
  return Pn().memoizedState;
}
function cC(e, t, n) {
  var r = oi(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), bw(e)))
    Cw(t, n);
  else if (((n = sw(e, t, n, r)), n !== null)) {
    var i = Ft();
    Fn(n, e, r, i), _w(n, t, r);
  }
}
function dC(e, t, n) {
  var r = oi(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bw(e)) Cw(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && ((s = t.lastRenderedReducer), s !== null))
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), zn(a, o))) {
          var l = t.interleaved;
          l === null ? ((i.next = i), Lp(t)) : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = sw(e, t, i, r)), n !== null && ((i = Ft()), Fn(n, e, r, i), _w(n, t, r));
  }
}
function bw(e) {
  var t = e.alternate;
  return e === We || (t !== null && t === We);
}
function Cw(e, t) {
  oa = Qu = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function _w(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gp(e, n);
  }
}
var Yu = {
    readContext: _n,
    useCallback: St,
    useContext: St,
    useEffect: St,
    useImperativeHandle: St,
    useInsertionEffect: St,
    useLayoutEffect: St,
    useMemo: St,
    useReducer: St,
    useRef: St,
    useState: St,
    useDebugValue: St,
    useDeferredValue: St,
    useTransition: St,
    useMutableSource: St,
    useSyncExternalStore: St,
    useId: St,
    unstable_isNewReconciler: !1,
  },
  fC = {
    readContext: _n,
    useCallback: function (e, t) {
      return (Wn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _n,
    useEffect: Qg,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Su(4194308, 4, yw.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Su(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Su(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Wn();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Wn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = cC.bind(null, We, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Wn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Zg,
    useDebugValue: Vp,
    useDeferredValue: function (e) {
      return (Wn().memoizedState = e);
    },
    useTransition: function () {
      var e = Zg(!1),
        t = e[0];
      return (e = uC.bind(null, e[1])), (Wn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = We,
        i = Wn();
      if (Ve) {
        if (n === void 0) throw Error(B(407));
        n = n();
      } else {
        if (((n = t()), ut === null)) throw Error(B(349));
        es & 30 || cw(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Qg(fw.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Oa(9, dw.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Wn(),
        t = ut.identifierPrefix;
      if (Ve) {
        var n = gr,
          r = mr;
        (n = (r & ~(1 << (32 - In(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = La++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = lC++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  hC = {
    readContext: _n,
    useCallback: ww,
    useContext: _n,
    useEffect: Fp,
    useImperativeHandle: xw,
    useInsertionEffect: gw,
    useLayoutEffect: vw,
    useMemo: Sw,
    useReducer: Ad,
    useRef: mw,
    useState: function () {
      return Ad(Aa);
    },
    useDebugValue: Vp,
    useDeferredValue: function (e) {
      var t = Pn();
      return Ew(t, rt.memoizedState, e);
    },
    useTransition: function () {
      var e = Ad(Aa)[0],
        t = Pn().memoizedState;
      return [e, t];
    },
    useMutableSource: lw,
    useSyncExternalStore: uw,
    useId: Tw,
    unstable_isNewReconciler: !1,
  },
  pC = {
    readContext: _n,
    useCallback: ww,
    useContext: _n,
    useEffect: Fp,
    useImperativeHandle: xw,
    useInsertionEffect: gw,
    useLayoutEffect: vw,
    useMemo: Sw,
    useReducer: Od,
    useRef: mw,
    useState: function () {
      return Od(Aa);
    },
    useDebugValue: Vp,
    useDeferredValue: function (e) {
      var t = Pn();
      return rt === null ? (t.memoizedState = e) : Ew(t, rt.memoizedState, e);
    },
    useTransition: function () {
      var e = Od(Aa)[0],
        t = Pn().memoizedState;
      return [e, t];
    },
    useMutableSource: lw,
    useSyncExternalStore: uw,
    useId: Tw,
    unstable_isNewReconciler: !1,
  };
function Rn(e, t) {
  if (e && e.defaultProps) {
    (t = Ge({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Qf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ge({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Fc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ls(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ft(),
      i = oi(e),
      s = yr(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = ii(e, s, i)),
      t !== null && (Fn(t, e, i, r), xu(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ft(),
      i = oi(e),
      s = yr(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = ii(e, s, i)),
      t !== null && (Fn(t, e, i, r), xu(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ft(),
      r = oi(e),
      i = yr(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = ii(e, i, r)),
      t !== null && (Fn(t, e, r, n), xu(t, e, r));
  },
};
function Yg(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ba(n, r) || !ba(i, s)
      : !0
  );
}
function Pw(e, t, n) {
  var r = !1,
    i = di,
    s = t.contextType;
  return (
    typeof s == 'object' && s !== null
      ? (s = _n(s))
      : ((i = Kt(t) ? Xi : Pt.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? oo(e, i) : di)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Fc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Xg(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Fc.enqueueReplaceState(t, t.state, null);
}
function Yf(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ap(e);
  var s = t.contextType;
  typeof s == 'object' && s !== null
    ? (i.context = _n(s))
    : ((s = Kt(t) ? Xi : Pt.current), (i.context = oo(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == 'function' && (Qf(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && Fc.enqueueReplaceState(i, i.state, null),
      Ku(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function co(e, t) {
  try {
    var n = '',
      r = t;
    do (n += UT(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Md(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var mC = typeof WeakMap == 'function' ? WeakMap : Map;
function kw(e, t, n) {
  (n = yr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ju || ((Ju = !0), (lh = r)), Xf(e, t);
    }),
    n
  );
}
function Rw(e, t, n) {
  (n = yr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Xf(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        Xf(e, t), typeof r != 'function' && (si === null ? (si = new Set([this])) : si.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
      }),
    n
  );
}
function Jg(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mC();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = RC.bind(null, e, t, n)), t.then(e, e));
}
function ev(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function tv(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = yr(-1, 1)), (t.tag = 2), ii(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var gC = Rr.ReactCurrentOwner,
  Wt = !1;
function jt(e, t, n, r) {
  t.child = e === null ? iw(t, null, n, r) : lo(t, e.child, n, r);
}
function nv(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Us(t, i),
    (r = jp(e, t, n, r, s, i)),
    (n = Ip()),
    e !== null && !Wt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Pr(e, t, i))
      : (Ve && n && bp(t), (t.flags |= 1), jt(e, t, r, i), t.child)
  );
}
function rv(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == 'function' &&
      !qp(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Lw(e, t, s, r, i))
      : ((e = Cu(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : ba), n(o, r) && e.ref === t.ref))
      return Pr(e, t, i);
  }
  return (t.flags |= 1), (e = ai(s, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Lw(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ba(s, r) && e.ref === t.ref)
      if (((Wt = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0)) e.flags & 131072 && (Wt = !0);
      else return (t.lanes = e.lanes), Pr(e, t, i);
  }
  return Jf(e, t, n, r, i);
}
function Aw(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        De(Ls, Jt),
        (Jt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          De(Ls, Jt),
          (Jt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        De(Ls, Jt),
        (Jt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n), De(Ls, Jt), (Jt |= r);
  return jt(e, t, i, n), t.child;
}
function Ow(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Jf(e, t, n, r, i) {
  var s = Kt(n) ? Xi : Pt.current;
  return (
    (s = oo(t, s)),
    Us(t, i),
    (n = jp(e, t, n, r, s, i)),
    (r = Ip()),
    e !== null && !Wt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Pr(e, t, i))
      : (Ve && r && bp(t), (t.flags |= 1), jt(e, t, n, i), t.child)
  );
}
function iv(e, t, n, r, i) {
  if (Kt(n)) {
    var s = !0;
    $u(t);
  } else s = !1;
  if ((Us(t, i), t.stateNode === null)) Eu(e, t), Pw(t, n, r), Yf(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = _n(u))
      : ((u = Kt(n) ? Xi : Pt.current), (u = oo(t, u)));
    var c = n.getDerivedStateFromProps,
      d = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && Xg(t, o, r, u)),
      (Vr = !1);
    var f = t.memoizedState;
    (o.state = f),
      Ku(t, r, o, i),
      (l = t.memoizedState),
      a !== r || f !== l || qt.current || Vr
        ? (typeof c == 'function' && (Qf(t, n, c, r), (l = t.memoizedState)),
          (a = Vr || Yg(t, n, a, r, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (o = t.stateNode),
      ow(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Rn(t.type, a)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = _n(l))
        : ((l = Kt(n) ? Xi : Pt.current), (l = oo(t, l)));
    var m = n.getDerivedStateFromProps;
    (c = typeof m == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== d || f !== l) && Xg(t, o, r, l)),
      (Vr = !1),
      (f = t.memoizedState),
      (o.state = f),
      Ku(t, r, o, i);
    var v = t.memoizedState;
    a !== d || f !== v || qt.current || Vr
      ? (typeof m == 'function' && (Qf(t, n, m, r), (v = t.memoizedState)),
        (u = Vr || Yg(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return eh(e, t, n, r, s, i);
}
function eh(e, t, n, r, i, s) {
  Ow(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && $g(t, n, !1), Pr(e, t, s);
  (r = t.stateNode), (gC.current = t);
  var a = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = lo(t, e.child, null, s)), (t.child = lo(t, null, a, s)))
      : jt(e, t, a, s),
    (t.memoizedState = r.state),
    i && $g(t, n, !0),
    t.child
  );
}
function Mw(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ug(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ug(e, t.context, !1),
    Op(e, t.containerInfo);
}
function sv(e, t, n, r, i) {
  return ao(), _p(i), (t.flags |= 256), jt(e, t, n, r), t.child;
}
var th = { dehydrated: null, treeContext: null, retryLane: 0 };
function nh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dw(e, t, n) {
  var r = t.pendingProps,
    i = Ue.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? ((s = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    De(Ue, i & 1),
    e === null)
  )
    return (
      Kf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Bc(o, r, 0, null)),
              (e = Ki(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = nh(n)),
              (t.memoizedState = th),
              e)
            : zp(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return vC(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
        : ((r = ai(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = ai(a, s)) : ((s = Ki(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? nh(n)
          : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = th),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = ai(s, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function zp(e, t) {
  return (t = Bc({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function nu(e, t, n, r) {
  return (
    r !== null && _p(r),
    lo(t, e.child, null, n),
    (e = zp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vC(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Md(Error(B(422)))), nu(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Bc({ mode: 'visible', children: r.children }, i, 0, null)),
        (s = Ki(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && lo(t, e.child, null, o),
        (t.child.memoizedState = nh(o)),
        (t.memoizedState = th),
        s);
  if (!(t.mode & 1)) return nu(e, t, o, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(B(419))), (r = Md(s, r, void 0)), nu(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Wt || a)) {
    if (((r = ut), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 && i !== s.retryLane && ((s.retryLane = i), _r(e, i), Fn(r, e, i, -1));
    }
    return Gp(), (r = Md(Error(B(421)))), nu(e, t, o, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = LC.bind(null, e)), (i._reactRetry = t), null)
    : ((e = s.treeContext),
      (tn = ri(i.nextSibling)),
      (nn = t),
      (Ve = !0),
      (Mn = null),
      e !== null &&
        ((yn[xn++] = mr),
        (yn[xn++] = gr),
        (yn[xn++] = Ji),
        (mr = e.id),
        (gr = e.overflow),
        (Ji = t)),
      (t = zp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ov(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zf(e.return, t, n);
}
function Dd(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Nw(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((jt(e, t, r.children, n), (r = Ue.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ov(e, n, t);
        else if (e.tag === 19) ov(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((De(Ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && Zu(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Dd(t, !1, i, n, s);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Zu(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Dd(t, !0, n, null, s);
        break;
      case 'together':
        Dd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Eu(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Pr(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (ts |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(B(153));
  if (t.child !== null) {
    for (e = t.child, n = ai(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = ai(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function yC(e, t, n) {
  switch (t.tag) {
    case 3:
      Mw(t), ao();
      break;
    case 5:
      aw(t);
      break;
    case 1:
      Kt(t.type) && $u(t);
      break;
    case 4:
      Op(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      De(Gu, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (De(Ue, Ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Dw(e, t, n)
          : (De(Ue, Ue.current & 1), (e = Pr(e, t, n)), e !== null ? e.sibling : null);
      De(Ue, Ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Nw(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        De(Ue, Ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Aw(e, t, n);
  }
  return Pr(e, t, n);
}
var jw, rh, Iw, Fw;
jw = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
rh = function () {};
Iw = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Di(tr.current);
    var s = null;
    switch (n) {
      case 'input':
        (i = Cf(e, i)), (r = Cf(e, r)), (s = []);
        break;
      case 'select':
        (i = Ge({}, i, { value: void 0 })), (r = Ge({}, r, { value: void 0 })), (s = []);
        break;
      case 'textarea':
        (i = kf(e, i)), (r = kf(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Bu);
    }
    Lf(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (va.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) || (l && l.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''));
            for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === 'children'
            ? (typeof l != 'string' && typeof l != 'number') || (s = s || []).push(u, '' + l)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (va.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && Ne('scroll', e), s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push('style', n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Fw = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fo(e, t) {
  if (!Ve)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Et(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function xC(e, t, n) {
  var r = t.pendingProps;
  switch ((Cp(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Et(t), null;
    case 1:
      return Kt(t.type) && Uu(), Et(t), null;
    case 3:
      return (
        (r = t.stateNode),
        uo(),
        je(qt),
        je(Pt),
        Dp(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (eu(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Mn !== null && (dh(Mn), (Mn = null)))),
        rh(e, t),
        Et(t),
        null
      );
    case 5:
      Mp(t);
      var i = Di(Ra.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Iw(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(B(166));
          return Et(t), null;
        }
        if (((e = Di(tr.current)), eu(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Qn] = t), (r[Pa] = s), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Ne('cancel', r), Ne('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Ne('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Qo.length; i++) Ne(Qo[i], r);
              break;
            case 'source':
              Ne('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Ne('error', r), Ne('load', r);
              break;
            case 'details':
              Ne('toggle', r);
              break;
            case 'input':
              mg(r, s), Ne('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!s.multiple }), Ne('invalid', r);
              break;
            case 'textarea':
              vg(r, s), Ne('invalid', r);
          }
          Lf(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 && Jl(r.textContent, a, e),
                    (i = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (s.suppressHydrationWarning !== !0 && Jl(r.textContent, a, e),
                    (i = ['children', '' + a]))
                : va.hasOwnProperty(o) && a != null && o === 'onScroll' && Ne('scroll', r);
            }
          switch (n) {
            case 'input':
              Wl(r), gg(r, s, !0);
              break;
            case 'textarea':
              Wl(r), yg(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof s.onClick == 'function' && (r.onclick = Bu);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = fx(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' &&
                    ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Qn] = t),
            (e[Pa] = r),
            jw(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Af(n, r)), n)) {
              case 'dialog':
                Ne('cancel', e), Ne('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Ne('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < Qo.length; i++) Ne(Qo[i], e);
                i = r;
                break;
              case 'source':
                Ne('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                Ne('error', e), Ne('load', e), (i = r);
                break;
              case 'details':
                Ne('toggle', e), (i = r);
                break;
              case 'input':
                mg(e, r), (i = Cf(e, r)), Ne('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ge({}, r, { value: void 0 })),
                  Ne('invalid', e);
                break;
              case 'textarea':
                vg(e, r), (i = kf(e, r)), Ne('invalid', e);
                break;
              default:
                i = r;
            }
            Lf(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === 'style'
                  ? mx(e, l)
                  : s === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && hx(e, l))
                  : s === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && ya(e, l)
                    : typeof l == 'number' && ya(e, '' + l)
                  : s !== 'suppressContentEditableWarning' &&
                    s !== 'suppressHydrationWarning' &&
                    s !== 'autoFocus' &&
                    (va.hasOwnProperty(s)
                      ? l != null && s === 'onScroll' && Ne('scroll', e)
                      : l != null && cp(e, s, l, o));
              }
            switch (n) {
              case 'input':
                Wl(e), gg(e, r, !1);
                break;
              case 'textarea':
                Wl(e), yg(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + ci(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Fs(e, !!r.multiple, s, !1)
                    : r.defaultValue != null && Fs(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = Bu);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Et(t), null;
    case 6:
      if (e && t.stateNode != null) Fw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(B(166));
        if (((n = Di(Ra.current)), Di(tr.current), eu(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Qn] = t),
            (s = r.nodeValue !== n) && ((e = nn), e !== null))
          )
            switch (e.tag) {
              case 3:
                Jl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Jl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Qn] = t),
            (t.stateNode = r);
      }
      return Et(t), null;
    case 13:
      if (
        (je(Ue),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ve && tn !== null && t.mode & 1 && !(t.flags & 128))
          nw(), ao(), (t.flags |= 98560), (s = !1);
        else if (((s = eu(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(B(318));
            if (((s = t.memoizedState), (s = s !== null ? s.dehydrated : null), !s))
              throw Error(B(317));
            s[Qn] = t;
          } else ao(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Et(t), (s = !1);
        } else Mn !== null && (dh(Mn), (Mn = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || Ue.current & 1 ? it === 0 && (it = 3) : Gp())),
          t.updateQueue !== null && (t.flags |= 4),
          Et(t),
          null);
    case 4:
      return uo(), rh(e, t), e === null && Ca(t.stateNode.containerInfo), Et(t), null;
    case 10:
      return Rp(t.type._context), Et(t), null;
    case 17:
      return Kt(t.type) && Uu(), Et(t), null;
    case 19:
      if ((je(Ue), (s = t.memoizedState), s === null)) return Et(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Fo(s, !1);
        else {
          if (it !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Zu(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Fo(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return De(Ue, (Ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Ye() > fo &&
            ((t.flags |= 128), (r = !0), Fo(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Zu(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fo(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !o.alternate && !Ve)
            )
              return Et(t), null;
          } else
            2 * Ye() - s.renderingStartTime > fo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Fo(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last), n !== null ? (n.sibling = o) : (t.child = o), (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Ye()),
          (t.sibling = null),
          (n = Ue.current),
          De(Ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Et(t), null);
    case 22:
    case 23:
      return (
        Wp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Jt & 1073741824 && (Et(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Et(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(B(156, t.tag));
}
function wC(e, t) {
  switch ((Cp(t), t.tag)) {
    case 1:
      return (
        Kt(t.type) && Uu(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        uo(),
        je(qt),
        je(Pt),
        Dp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Mp(t), null;
    case 13:
      if ((je(Ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(B(340));
        ao();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return je(Ue), null;
    case 4:
      return uo(), null;
    case 10:
      return Rp(t.type._context), null;
    case 22:
    case 23:
      return Wp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ru = !1,
  bt = !1,
  SC = typeof WeakSet == 'function' ? WeakSet : Set,
  J = null;
function Rs(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Ke(e, t, r);
      }
    else n.current = null;
}
function ih(e, t, n) {
  try {
    n();
  } catch (r) {
    Ke(e, t, r);
  }
}
var av = !1;
function EC(e, t) {
  if (((Bf = Fu), (e = $x()), Tp(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var m;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (m = d.firstChild) !== null;

            )
              (f = d), (d = m);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (a = o),
                f === s && ++c === r && (l = o),
                (m = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Uf = { focusedElem: e, selectionRange: n }, Fu = !1, J = t; J !== null; )
    if (((t = J), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (J = e);
    else
      for (; J !== null; ) {
        t = J;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    w = v.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Rn(t.type, y), w);
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = '')
                  : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(B(163));
            }
        } catch (x) {
          Ke(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (J = e);
          break;
        }
        J = t.return;
      }
  return (v = av), (av = !1), v;
}
function aa(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && ih(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Vc(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function sh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Vw(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Vw(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[Qn], delete t[Pa], delete t[Wf], delete t[iC], delete t[sC])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function zw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lv(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || zw(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function oh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Bu));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oh(e, t, n), e = e.sibling; e !== null; ) oh(e, t, n), (e = e.sibling);
}
function ah(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ah(e, t, n), e = e.sibling; e !== null; ) ah(e, t, n), (e = e.sibling);
}
var mt = null,
  An = !1;
function Mr(e, t, n) {
  for (n = n.child; n !== null; ) Bw(e, t, n), (n = n.sibling);
}
function Bw(e, t, n) {
  if (er && typeof er.onCommitFiberUnmount == 'function')
    try {
      er.onCommitFiberUnmount(Ac, n);
    } catch {}
  switch (n.tag) {
    case 5:
      bt || Rs(n, t);
    case 6:
      var r = mt,
        i = An;
      (mt = null),
        Mr(e, t, n),
        (mt = r),
        (An = i),
        mt !== null &&
          (An
            ? ((e = mt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : mt.removeChild(n.stateNode));
      break;
    case 18:
      mt !== null &&
        (An
          ? ((e = mt),
            (n = n.stateNode),
            e.nodeType === 8 ? Pd(e.parentNode, n) : e.nodeType === 1 && Pd(e, n),
            Ea(e))
          : Pd(mt, n.stateNode));
      break;
    case 4:
      (r = mt),
        (i = An),
        (mt = n.stateNode.containerInfo),
        (An = !0),
        Mr(e, t, n),
        (mt = r),
        (An = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!bt && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag), o !== void 0 && (s & 2 || s & 4) && ih(n, t, o), (i = i.next);
        } while (i !== r);
      }
      Mr(e, t, n);
      break;
    case 1:
      if (!bt && (Rs(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          Ke(n, t, a);
        }
      Mr(e, t, n);
      break;
    case 21:
      Mr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((bt = (r = bt) || n.memoizedState !== null), Mr(e, t, n), (bt = r))
        : Mr(e, t, n);
      break;
    default:
      Mr(e, t, n);
  }
}
function uv(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new SC()),
      t.forEach(function (r) {
        var i = AC.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function kn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (mt = a.stateNode), (An = !1);
              break e;
            case 3:
              (mt = a.stateNode.containerInfo), (An = !0);
              break e;
            case 4:
              (mt = a.stateNode.containerInfo), (An = !0);
              break e;
          }
          a = a.return;
        }
        if (mt === null) throw Error(B(160));
        Bw(s, o, i), (mt = null), (An = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Ke(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Uw(t, e), (t = t.sibling);
}
function Uw(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((kn(t, e), $n(e), r & 4)) {
        try {
          aa(3, e, e.return), Vc(3, e);
        } catch (y) {
          Ke(e, e.return, y);
        }
        try {
          aa(5, e, e.return);
        } catch (y) {
          Ke(e, e.return, y);
        }
      }
      break;
    case 1:
      kn(t, e), $n(e), r & 512 && n !== null && Rs(n, n.return);
      break;
    case 5:
      if ((kn(t, e), $n(e), r & 512 && n !== null && Rs(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          ya(i, '');
        } catch (y) {
          Ke(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === 'input' && s.type === 'radio' && s.name != null && cx(i, s), Af(a, o);
            var u = Af(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === 'style'
                ? mx(i, d)
                : c === 'dangerouslySetInnerHTML'
                ? hx(i, d)
                : c === 'children'
                ? ya(i, d)
                : cp(i, c, d, u);
            }
            switch (a) {
              case 'input':
                _f(i, s);
                break;
              case 'textarea':
                dx(i, s);
                break;
              case 'select':
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var m = s.value;
                m != null
                  ? Fs(i, !!s.multiple, m, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Fs(i, !!s.multiple, s.defaultValue, !0)
                      : Fs(i, !!s.multiple, s.multiple ? [] : '', !1));
            }
            i[Pa] = s;
          } catch (y) {
            Ke(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((kn(t, e), $n(e), r & 4)) {
        if (e.stateNode === null) throw Error(B(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (y) {
          Ke(e, e.return, y);
        }
      }
      break;
    case 3:
      if ((kn(t, e), $n(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Ea(t.containerInfo);
        } catch (y) {
          Ke(e, e.return, y);
        }
      break;
    case 4:
      kn(t, e), $n(e);
      break;
    case 13:
      kn(t, e),
        $n(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s || (i.alternate !== null && i.alternate.memoizedState !== null) || ($p = Ye())),
        r & 4 && uv(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((bt = (u = bt) || c), kn(t, e), (bt = u)) : kn(t, e),
        $n(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (J = e, c = e.child; c !== null; ) {
            for (d = J = c; J !== null; ) {
              switch (((f = J), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  aa(4, f, f.return);
                  break;
                case 1:
                  Rs(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      Ke(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Rs(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    dv(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (J = m)) : dv(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o = l != null && l.hasOwnProperty('display') ? l.display : null),
                      (a.style.display = px('display', o)));
              } catch (y) {
                Ke(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps;
              } catch (y) {
                Ke(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      kn(t, e), $n(e), r & 4 && uv(e);
      break;
    case 21:
      break;
    default:
      kn(t, e), $n(e);
  }
}
function $n(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zw(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(B(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ya(i, ''), (r.flags &= -33));
          var s = lv(e);
          ah(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = lv(e);
          oh(e, a, o);
          break;
        default:
          throw Error(B(161));
      }
    } catch (l) {
      Ke(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function TC(e, t, n) {
  (J = e), $w(e);
}
function $w(e, t, n) {
  for (var r = (e.mode & 1) !== 0; J !== null; ) {
    var i = J,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ru;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || bt;
        a = ru;
        var u = bt;
        if (((ru = o), (bt = l) && !u))
          for (J = i; J !== null; )
            (o = J),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? fv(i)
                : l !== null
                ? ((l.return = o), (J = l))
                : fv(i);
        for (; s !== null; ) (J = s), $w(s), (s = s.sibling);
        (J = i), (ru = a), (bt = u);
      }
      cv(e);
    } else i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (J = s)) : cv(e);
  }
}
function cv(e) {
  for (; J !== null; ) {
    var t = J;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              bt || Vc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !bt)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : Rn(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var s = t.updateQueue;
              s !== null && Kg(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Kg(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Ea(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(B(163));
          }
        bt || (t.flags & 512 && sh(t));
      } catch (f) {
        Ke(t, t.return, f);
      }
    }
    if (t === e) {
      J = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (J = n);
      break;
    }
    J = t.return;
  }
}
function dv(e) {
  for (; J !== null; ) {
    var t = J;
    if (t === e) {
      J = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (J = n);
      break;
    }
    J = t.return;
  }
}
function fv(e) {
  for (; J !== null; ) {
    var t = J;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vc(4, t);
          } catch (l) {
            Ke(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ke(t, i, l);
            }
          }
          var s = t.return;
          try {
            sh(t);
          } catch (l) {
            Ke(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            sh(t);
          } catch (l) {
            Ke(t, o, l);
          }
      }
    } catch (l) {
      Ke(t, t.return, l);
    }
    if (t === e) {
      J = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (J = a);
      break;
    }
    J = t.return;
  }
}
var bC = Math.ceil,
  Xu = Rr.ReactCurrentDispatcher,
  Bp = Rr.ReactCurrentOwner,
  En = Rr.ReactCurrentBatchConfig,
  ke = 0,
  ut = null,
  Je = null,
  yt = 0,
  Jt = 0,
  Ls = wi(0),
  it = 0,
  Ma = null,
  ts = 0,
  zc = 0,
  Up = 0,
  la = null,
  Ht = null,
  $p = 0,
  fo = 1 / 0,
  fr = null,
  Ju = !1,
  lh = null,
  si = null,
  iu = !1,
  Yr = null,
  ec = 0,
  ua = 0,
  uh = null,
  Tu = -1,
  bu = 0;
function Ft() {
  return ke & 6 ? Ye() : Tu !== -1 ? Tu : (Tu = Ye());
}
function oi(e) {
  return e.mode & 1
    ? ke & 2 && yt !== 0
      ? yt & -yt
      : aC.transition !== null
      ? (bu === 0 && (bu = Px()), bu)
      : ((e = Le), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Dx(e.type))), e)
    : 1;
}
function Fn(e, t, n, r) {
  if (50 < ua) throw ((ua = 0), (uh = null), Error(B(185)));
  gl(e, n, r),
    (!(ke & 2) || e !== ut) &&
      (e === ut && (!(ke & 2) && (zc |= n), it === 4 && Ur(e, yt)),
      Zt(e, r),
      n === 1 && ke === 0 && !(t.mode & 1) && ((fo = Ye() + 500), jc && Si()));
}
function Zt(e, t) {
  var n = e.callbackNode;
  ab(e, t);
  var r = Iu(e, e === ut ? yt : 0);
  if (r === 0) n !== null && Sg(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Sg(n), t === 1))
      e.tag === 0 ? oC(hv.bind(null, e)) : Jx(hv.bind(null, e)),
        nC(function () {
          !(ke & 6) && Si();
        }),
        (n = null);
    else {
      switch (kx(r)) {
        case 1:
          n = mp;
          break;
        case 4:
          n = Cx;
          break;
        case 16:
          n = ju;
          break;
        case 536870912:
          n = _x;
          break;
        default:
          n = ju;
      }
      n = Yw(n, Hw.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Hw(e, t) {
  if (((Tu = -1), (bu = 0), ke & 6)) throw Error(B(327));
  var n = e.callbackNode;
  if ($s() && e.callbackNode !== n) return null;
  var r = Iu(e, e === ut ? yt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = tc(e, r);
  else {
    t = r;
    var i = ke;
    ke |= 2;
    var s = Gw();
    (ut !== e || yt !== t) && ((fr = null), (fo = Ye() + 500), qi(e, t));
    do
      try {
        PC();
        break;
      } catch (a) {
        Ww(e, a);
      }
    while (!0);
    kp(), (Xu.current = s), (ke = i), Je !== null ? (t = 0) : ((ut = null), (yt = 0), (t = it));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = jf(e)), i !== 0 && ((r = i), (t = ch(e, i)))), t === 1))
      throw ((n = Ma), qi(e, 0), Ur(e, r), Zt(e, Ye()), n);
    if (t === 6) Ur(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !CC(i) &&
          ((t = tc(e, r)), t === 2 && ((s = jf(e)), s !== 0 && ((r = s), (t = ch(e, s)))), t === 1))
      )
        throw ((n = Ma), qi(e, 0), Ur(e, r), Zt(e, Ye()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(B(345));
        case 2:
          ki(e, Ht, fr);
          break;
        case 3:
          if ((Ur(e, r), (r & 130023424) === r && ((t = $p + 500 - Ye()), 10 < t))) {
            if (Iu(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ft(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Hf(ki.bind(null, e, Ht, fr), t);
            break;
          }
          ki(e, Ht, fr);
          break;
        case 4:
          if ((Ur(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - In(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Ye() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * bC(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Hf(ki.bind(null, e, Ht, fr), r);
            break;
          }
          ki(e, Ht, fr);
          break;
        case 5:
          ki(e, Ht, fr);
          break;
        default:
          throw Error(B(329));
      }
    }
  }
  return Zt(e, Ye()), e.callbackNode === n ? Hw.bind(null, e) : null;
}
function ch(e, t) {
  var n = la;
  return (
    e.current.memoizedState.isDehydrated && (qi(e, t).flags |= 256),
    (e = tc(e, t)),
    e !== 2 && ((t = Ht), (Ht = n), t !== null && dh(t)),
    e
  );
}
function dh(e) {
  Ht === null ? (Ht = e) : Ht.push.apply(Ht, e);
}
function CC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!zn(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ur(e, t) {
  for (
    t &= ~Up, t &= ~zc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - In(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function hv(e) {
  if (ke & 6) throw Error(B(327));
  $s();
  var t = Iu(e, 0);
  if (!(t & 1)) return Zt(e, Ye()), null;
  var n = tc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = jf(e);
    r !== 0 && ((t = r), (n = ch(e, r)));
  }
  if (n === 1) throw ((n = Ma), qi(e, 0), Ur(e, t), Zt(e, Ye()), n);
  if (n === 6) throw Error(B(345));
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), ki(e, Ht, fr), Zt(e, Ye()), null
  );
}
function Hp(e, t) {
  var n = ke;
  ke |= 1;
  try {
    return e(t);
  } finally {
    (ke = n), ke === 0 && ((fo = Ye() + 500), jc && Si());
  }
}
function ns(e) {
  Yr !== null && Yr.tag === 0 && !(ke & 6) && $s();
  var t = ke;
  ke |= 1;
  var n = En.transition,
    r = Le;
  try {
    if (((En.transition = null), (Le = 1), e)) return e();
  } finally {
    (Le = r), (En.transition = n), (ke = t), !(ke & 6) && Si();
  }
}
function Wp() {
  (Jt = Ls.current), je(Ls);
}
function qi(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tC(n)), Je !== null))
    for (n = Je.return; n !== null; ) {
      var r = n;
      switch ((Cp(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Uu();
          break;
        case 3:
          uo(), je(qt), je(Pt), Dp();
          break;
        case 5:
          Mp(r);
          break;
        case 4:
          uo();
          break;
        case 13:
          je(Ue);
          break;
        case 19:
          je(Ue);
          break;
        case 10:
          Rp(r.type._context);
          break;
        case 22:
        case 23:
          Wp();
      }
      n = n.return;
    }
  if (
    ((ut = e),
    (Je = e = ai(e.current, null)),
    (yt = Jt = t),
    (it = 0),
    (Ma = null),
    (Up = zc = ts = 0),
    (Ht = la = null),
    Mi !== null)
  ) {
    for (t = 0; t < Mi.length; t++)
      if (((n = Mi[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Mi = null;
  }
  return e;
}
function Ww(e, t) {
  do {
    var n = Je;
    try {
      if ((kp(), (wu.current = Yu), Qu)) {
        for (var r = We.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Qu = !1;
      }
      if (
        ((es = 0),
        (lt = rt = We = null),
        (oa = !1),
        (La = 0),
        (Bp.current = null),
        n === null || n.return === null)
      ) {
        (it = 1), (Ma = t), (Je = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = yt),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = ev(o);
          if (m !== null) {
            (m.flags &= -257), tv(m, o, a, s, t), m.mode & 1 && Jg(s, u, t), (t = m), (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Jg(s, u, t), Gp();
              break e;
            }
            l = Error(B(426));
          }
        } else if (Ve && a.mode & 1) {
          var w = ev(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), tv(w, o, a, s, t), _p(co(l, a));
            break e;
          }
        }
        (s = l = co(l, a)), it !== 4 && (it = 2), la === null ? (la = [s]) : la.push(s), (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var h = kw(s, l, t);
              qg(s, h);
              break e;
            case 1:
              a = l;
              var p = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (si === null || !si.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var x = Rw(s, a, t);
                qg(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Kw(n);
    } catch (T) {
      (t = T), Je === n && n !== null && (Je = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Gw() {
  var e = Xu.current;
  return (Xu.current = Yu), e === null ? Yu : e;
}
function Gp() {
  (it === 0 || it === 3 || it === 2) && (it = 4),
    ut === null || (!(ts & 268435455) && !(zc & 268435455)) || Ur(ut, yt);
}
function tc(e, t) {
  var n = ke;
  ke |= 2;
  var r = Gw();
  (ut !== e || yt !== t) && ((fr = null), qi(e, t));
  do
    try {
      _C();
      break;
    } catch (i) {
      Ww(e, i);
    }
  while (!0);
  if ((kp(), (ke = n), (Xu.current = r), Je !== null)) throw Error(B(261));
  return (ut = null), (yt = 0), it;
}
function _C() {
  for (; Je !== null; ) qw(Je);
}
function PC() {
  for (; Je !== null && !XT(); ) qw(Je);
}
function qw(e) {
  var t = Qw(e.alternate, e, Jt);
  (e.memoizedProps = e.pendingProps), t === null ? Kw(e) : (Je = t), (Bp.current = null);
}
function Kw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = wC(n, t)), n !== null)) {
        (n.flags &= 32767), (Je = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (it = 6), (Je = null);
        return;
      }
    } else if (((n = xC(n, t, Jt)), n !== null)) {
      Je = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Je = t;
      return;
    }
    Je = t = e;
  } while (t !== null);
  it === 0 && (it = 5);
}
function ki(e, t, n) {
  var r = Le,
    i = En.transition;
  try {
    (En.transition = null), (Le = 1), kC(e, t, n, r);
  } finally {
    (En.transition = i), (Le = r);
  }
  return null;
}
function kC(e, t, n, r) {
  do $s();
  while (Yr !== null);
  if (ke & 6) throw Error(B(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(B(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (lb(e, s),
    e === ut && ((Je = ut = null), (yt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      iu ||
      ((iu = !0),
      Yw(ju, function () {
        return $s(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = En.transition), (En.transition = null);
    var o = Le;
    Le = 1;
    var a = ke;
    (ke |= 4),
      (Bp.current = null),
      EC(e, n),
      Uw(n, e),
      Kb(Uf),
      (Fu = !!Bf),
      (Uf = Bf = null),
      (e.current = n),
      TC(n),
      JT(),
      (ke = a),
      (Le = o),
      (En.transition = s);
  } else e.current = n;
  if (
    (iu && ((iu = !1), (Yr = e), (ec = i)),
    (s = e.pendingLanes),
    s === 0 && (si = null),
    nb(n.stateNode),
    Zt(e, Ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ju) throw ((Ju = !1), (e = lh), (lh = null), e);
  return (
    ec & 1 && e.tag !== 0 && $s(),
    (s = e.pendingLanes),
    s & 1 ? (e === uh ? ua++ : ((ua = 0), (uh = e))) : (ua = 0),
    Si(),
    null
  );
}
function $s() {
  if (Yr !== null) {
    var e = kx(ec),
      t = En.transition,
      n = Le;
    try {
      if (((En.transition = null), (Le = 16 > e ? 16 : e), Yr === null)) var r = !1;
      else {
        if (((e = Yr), (Yr = null), (ec = 0), ke & 6)) throw Error(B(331));
        var i = ke;
        for (ke |= 4, J = e.current; J !== null; ) {
          var s = J,
            o = s.child;
          if (J.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (J = u; J !== null; ) {
                  var c = J;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      aa(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (J = d);
                  else
                    for (; J !== null; ) {
                      c = J;
                      var f = c.sibling,
                        m = c.return;
                      if ((Vw(c), c === u)) {
                        J = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (J = f);
                        break;
                      }
                      J = m;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var w = y.sibling;
                    (y.sibling = null), (y = w);
                  } while (y !== null);
                }
              }
              J = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (J = o);
          else
            e: for (; J !== null; ) {
              if (((s = J), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    aa(9, s, s.return);
                }
              var h = s.sibling;
              if (h !== null) {
                (h.return = s.return), (J = h);
                break e;
              }
              J = s.return;
            }
        }
        var p = e.current;
        for (J = p; J !== null; ) {
          o = J;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (J = g);
          else
            e: for (o = p; J !== null; ) {
              if (((a = J), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vc(9, a);
                  }
                } catch (T) {
                  Ke(a, a.return, T);
                }
              if (a === o) {
                J = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                (x.return = a.return), (J = x);
                break e;
              }
              J = a.return;
            }
        }
        if (((ke = i), Si(), er && typeof er.onPostCommitFiberRoot == 'function'))
          try {
            er.onPostCommitFiberRoot(Ac, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Le = n), (En.transition = t);
    }
  }
  return !1;
}
function pv(e, t, n) {
  (t = co(n, t)),
    (t = kw(e, t, 1)),
    (e = ii(e, t, 1)),
    (t = Ft()),
    e !== null && (gl(e, 1, t), Zt(e, t));
}
function Ke(e, t, n) {
  if (e.tag === 3) pv(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        pv(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (si === null || !si.has(r)))
        ) {
          (e = co(n, e)),
            (e = Rw(t, e, 1)),
            (t = ii(t, e, 1)),
            (e = Ft()),
            t !== null && (gl(t, 1, e), Zt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function RC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ft()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ut === e &&
      (yt & n) === n &&
      (it === 4 || (it === 3 && (yt & 130023424) === yt && 500 > Ye() - $p) ? qi(e, 0) : (Up |= n)),
    Zt(e, t);
}
function Zw(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Kl), (Kl <<= 1), !(Kl & 130023424) && (Kl = 4194304)) : (t = 1));
  var n = Ft();
  (e = _r(e, t)), e !== null && (gl(e, t, n), Zt(e, n));
}
function LC(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Zw(e, n);
}
function AC(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(B(314));
  }
  r !== null && r.delete(t), Zw(e, n);
}
var Qw;
Qw = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || qt.current) Wt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Wt = !1), yC(e, t, n);
      Wt = !!(e.flags & 131072);
    }
  else (Wt = !1), Ve && t.flags & 1048576 && ew(t, Wu, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Eu(e, t), (e = t.pendingProps);
      var i = oo(t, Pt.current);
      Us(t, n), (i = jp(null, t, r, e, i, n));
      var s = Ip();
      return (
        (t.flags |= 1),
        typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Kt(r) ? ((s = !0), $u(t)) : (s = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            Ap(t),
            (i.updater = Fc),
            (t.stateNode = i),
            (i._reactInternals = t),
            Yf(t, r, e, n),
            (t = eh(null, t, r, !0, s, n)))
          : ((t.tag = 0), Ve && s && bp(t), jt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Eu(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = MC(r)),
          (e = Rn(r, e)),
          i)
        ) {
          case 0:
            t = Jf(null, t, r, e, n);
            break e;
          case 1:
            t = iv(null, t, r, e, n);
            break e;
          case 11:
            t = nv(null, t, r, e, n);
            break e;
          case 14:
            t = rv(null, t, r, Rn(r.type, e), n);
            break e;
        }
        throw Error(B(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Rn(r, i)),
        Jf(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Rn(r, i)),
        iv(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Mw(t), e === null)) throw Error(B(387));
        (r = t.pendingProps), (s = t.memoizedState), (i = s.element), ow(e, t), Ku(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = co(Error(B(423)), t)), (t = sv(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = co(Error(B(424)), t)), (t = sv(e, t, r, n, i));
            break e;
          } else
            for (
              tn = ri(t.stateNode.containerInfo.firstChild),
                nn = t,
                Ve = !0,
                Mn = null,
                n = iw(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ao(), r === i)) {
            t = Pr(e, t, n);
            break e;
          }
          jt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        aw(t),
        e === null && Kf(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        $f(r, i) ? (o = null) : s !== null && $f(r, s) && (t.flags |= 32),
        Ow(e, t),
        jt(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Kf(t), null;
    case 13:
      return Dw(e, t, n);
    case 4:
      return (
        Op(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = lo(t, null, r, n)) : jt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Rn(r, i)),
        nv(e, t, r, i, n)
      );
    case 7:
      return jt(e, t, t.pendingProps, n), t.child;
    case 8:
      return jt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return jt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          De(Gu, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (zn(s.value, o)) {
            if (s.children === i.children && !qt.current) {
              t = Pr(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = yr(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Zf(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(B(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Zf(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        jt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Us(t, n),
        (i = _n(i)),
        (r = r(i)),
        (t.flags |= 1),
        jt(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (i = Rn(r, t.pendingProps)), (i = Rn(r.type, i)), rv(e, t, r, i, n);
    case 15:
      return Lw(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Rn(r, i)),
        Eu(e, t),
        (t.tag = 1),
        Kt(r) ? ((e = !0), $u(t)) : (e = !1),
        Us(t, n),
        Pw(t, r, i),
        Yf(t, r, i, n),
        eh(null, t, r, !0, e, n)
      );
    case 19:
      return Nw(e, t, n);
    case 22:
      return Aw(e, t, n);
  }
  throw Error(B(156, t.tag));
};
function Yw(e, t) {
  return bx(e, t);
}
function OC(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Sn(e, t, n, r) {
  return new OC(e, t, n, r);
}
function qp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function MC(e) {
  if (typeof e == 'function') return qp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === fp)) return 11;
    if (e === hp) return 14;
  }
  return 2;
}
function ai(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Sn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Cu(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == 'function')) qp(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case ws:
        return Ki(n.children, i, s, t);
      case dp:
        (o = 8), (i |= 8);
        break;
      case Sf:
        return (e = Sn(12, n, t, i | 2)), (e.elementType = Sf), (e.lanes = s), e;
      case Ef:
        return (e = Sn(13, n, t, i)), (e.elementType = Ef), (e.lanes = s), e;
      case Tf:
        return (e = Sn(19, n, t, i)), (e.elementType = Tf), (e.lanes = s), e;
      case ax:
        return Bc(n, i, s, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case sx:
              o = 10;
              break e;
            case ox:
              o = 9;
              break e;
            case fp:
              o = 11;
              break e;
            case hp:
              o = 14;
              break e;
            case Fr:
              (o = 16), (r = null);
              break e;
          }
        throw Error(B(130, e == null ? e : typeof e, ''));
    }
  return (t = Sn(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t;
}
function Ki(e, t, n, r) {
  return (e = Sn(7, e, r, t)), (e.lanes = n), e;
}
function Bc(e, t, n, r) {
  return (
    (e = Sn(22, e, r, t)), (e.elementType = ax), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
  );
}
function Nd(e, t, n) {
  return (e = Sn(6, e, null, t)), (e.lanes = n), e;
}
function jd(e, t, n) {
  return (
    (t = Sn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function DC(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = gd(0)),
    (this.expirationTimes = gd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = gd(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Kp(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new DC(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Sn(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ap(s),
    e
  );
}
function NC(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xs,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Xw(e) {
  if (!e) return di;
  e = e._reactInternals;
  e: {
    if (ls(e) !== e || e.tag !== 1) throw Error(B(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Kt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(B(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Kt(n)) return Xx(e, n, t);
  }
  return t;
}
function Jw(e, t, n, r, i, s, o, a, l) {
  return (
    (e = Kp(n, r, !0, e, i, s, o, a, l)),
    (e.context = Xw(null)),
    (n = e.current),
    (r = Ft()),
    (i = oi(n)),
    (s = yr(r, i)),
    (s.callback = t ?? null),
    ii(n, s, i),
    (e.current.lanes = i),
    gl(e, i, r),
    Zt(e, r),
    e
  );
}
function Uc(e, t, n, r) {
  var i = t.current,
    s = Ft(),
    o = oi(i);
  return (
    (n = Xw(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yr(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ii(i, t, o)),
    e !== null && (Fn(e, i, o, s), xu(e, i, o)),
    o
  );
}
function nc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mv(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zp(e, t) {
  mv(e, t), (e = e.alternate) && mv(e, t);
}
function jC() {
  return null;
}
var eS =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Qp(e) {
  this._internalRoot = e;
}
$c.prototype.render = Qp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(B(409));
  Uc(e, t, null, null);
};
$c.prototype.unmount = Qp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ns(function () {
      Uc(null, e, null, null);
    }),
      (t[Cr] = null);
  }
};
function $c(e) {
  this._internalRoot = e;
}
$c.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ax();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Br.length && t !== 0 && t < Br[n].priority; n++);
    Br.splice(n, 0, e), n === 0 && Mx(e);
  }
};
function Yp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Hc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function gv() {}
function IC(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var s = r;
      r = function () {
        var u = nc(o);
        s.call(u);
      };
    }
    var o = Jw(t, r, e, 0, null, !1, !1, '', gv);
    return (
      (e._reactRootContainer = o),
      (e[Cr] = o.current),
      Ca(e.nodeType === 8 ? e.parentNode : e),
      ns(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = nc(l);
      a.call(u);
    };
  }
  var l = Kp(e, 0, !1, null, null, !1, !1, '', gv);
  return (
    (e._reactRootContainer = l),
    (e[Cr] = l.current),
    Ca(e.nodeType === 8 ? e.parentNode : e),
    ns(function () {
      Uc(t, l, n, r);
    }),
    l
  );
}
function Wc(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == 'function') {
      var a = i;
      i = function () {
        var l = nc(o);
        a.call(l);
      };
    }
    Uc(t, o, e, i);
  } else o = IC(n, t, e, i, r);
  return nc(o);
}
Rx = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zo(t.pendingLanes);
        n !== 0 && (gp(t, n | 1), Zt(t, Ye()), !(ke & 6) && ((fo = Ye() + 500), Si()));
      }
      break;
    case 13:
      ns(function () {
        var r = _r(e, 1);
        if (r !== null) {
          var i = Ft();
          Fn(r, e, 1, i);
        }
      }),
        Zp(e, 1);
  }
};
vp = function (e) {
  if (e.tag === 13) {
    var t = _r(e, 134217728);
    if (t !== null) {
      var n = Ft();
      Fn(t, e, 134217728, n);
    }
    Zp(e, 134217728);
  }
};
Lx = function (e) {
  if (e.tag === 13) {
    var t = oi(e),
      n = _r(e, t);
    if (n !== null) {
      var r = Ft();
      Fn(n, e, t, r);
    }
    Zp(e, t);
  }
};
Ax = function () {
  return Le;
};
Ox = function (e, t) {
  var n = Le;
  try {
    return (Le = e), t();
  } finally {
    Le = n;
  }
};
Mf = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((_f(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Nc(r);
            if (!i) throw Error(B(90));
            ux(r), _f(r, i);
          }
        }
      }
      break;
    case 'textarea':
      dx(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Fs(e, !!n.multiple, t, !1);
  }
};
yx = Hp;
xx = ns;
var FC = { usingClientEntryPoint: !1, Events: [yl, bs, Nc, gx, vx, Hp] },
  Vo = {
    findFiberByHostInstance: Oi,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  VC = {
    bundleType: Vo.bundleType,
    version: Vo.version,
    rendererPackageName: Vo.rendererPackageName,
    rendererConfig: Vo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Rr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ex(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vo.findFiberByHostInstance || jC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!su.isDisabled && su.supportsFiber)
    try {
      (Ac = su.inject(VC)), (er = su);
    } catch {}
}
an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = FC;
an.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yp(t)) throw Error(B(200));
  return NC(e, t, null, n);
};
an.createRoot = function (e, t) {
  if (!Yp(e)) throw Error(B(299));
  var n = !1,
    r = '',
    i = eS;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Kp(e, 1, !1, null, null, n, !1, r, i)),
    (e[Cr] = t.current),
    Ca(e.nodeType === 8 ? e.parentNode : e),
    new Qp(t)
  );
};
an.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(B(188))
      : ((e = Object.keys(e).join(',')), Error(B(268, e)));
  return (e = Ex(t)), (e = e === null ? null : e.stateNode), e;
};
an.flushSync = function (e) {
  return ns(e);
};
an.hydrate = function (e, t, n) {
  if (!Hc(t)) throw Error(B(200));
  return Wc(null, e, t, !0, n);
};
an.hydrateRoot = function (e, t, n) {
  if (!Yp(e)) throw Error(B(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = '',
    o = eS;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Jw(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[Cr] = t.current),
    Ca(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new $c(t);
};
an.render = function (e, t, n) {
  if (!Hc(t)) throw Error(B(200));
  return Wc(null, e, t, !1, n);
};
an.unmountComponentAtNode = function (e) {
  if (!Hc(e)) throw Error(B(40));
  return e._reactRootContainer
    ? (ns(function () {
        Wc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Cr] = null);
        });
      }),
      !0)
    : !1;
};
an.unstable_batchedUpdates = Hp;
an.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Hc(n)) throw Error(B(200));
  if (e == null || e._reactInternals === void 0) throw Error(B(38));
  return Wc(e, t, n, !1, r);
};
an.version = '18.3.1-next-f1338f8080-20240426';
function tS() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tS);
    } catch (e) {
      console.error(e);
    }
}
tS(), (tx.exports = an);
var Xp = tx.exports;
const zC = rp(Xp),
  BC = $0({ __proto__: null, default: zC }, [Xp]);
var vv = Xp;
(xf.createRoot = vv.createRoot), (xf.hydrateRoot = vv.hydrateRoot);
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Be() {
  return (
    (Be = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Be.apply(this, arguments)
  );
}
var Xe;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Xe || (Xe = {}));
const yv = 'popstate';
function UC(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return Da(
      '',
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default',
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : rs(i);
  }
  return HC(t, n, null, e);
}
function xe(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function ho(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function $C() {
  return Math.random().toString(36).substr(2, 8);
}
function xv(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Da(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Be(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Ei(t) : t,
      { state: n, key: (t && t.key) || r || $C() },
    )
  );
}
function rs(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Ei(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function HC(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = Xe.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(Be({}, o.state, { idx: u }), ''));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = Xe.Pop;
    let w = c(),
      h = w == null ? null : w - u;
    (u = w), l && l({ action: a, location: y.location, delta: h });
  }
  function f(w, h) {
    a = Xe.Push;
    let p = Da(y.location, w, h);
    u = c() + 1;
    let g = xv(p, u),
      x = y.createHref(p);
    try {
      o.pushState(g, '', x);
    } catch (T) {
      if (T instanceof DOMException && T.name === 'DataCloneError') throw T;
      i.location.assign(x);
    }
    s && l && l({ action: a, location: y.location, delta: 1 });
  }
  function m(w, h) {
    a = Xe.Replace;
    let p = Da(y.location, w, h);
    u = c();
    let g = xv(p, u),
      x = y.createHref(p);
    o.replaceState(g, '', x), s && l && l({ action: a, location: y.location, delta: 0 });
  }
  function v(w) {
    let h = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      p = typeof w == 'string' ? w : rs(w);
    return (
      (p = p.replace(/ $/, '%20')),
      xe(h, 'No window.location.(origin|href) available to create URL for href: ' + p),
      new URL(p, h)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(w) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(yv, d),
        (l = w),
        () => {
          i.removeEventListener(yv, d), (l = null);
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: v,
    encodeLocation(w) {
      let h = v(w);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: f,
    replace: m,
    go(w) {
      return o.go(w);
    },
  };
  return y;
}
var Fe;
(function (e) {
  (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(Fe || (Fe = {}));
const WC = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function GC(e) {
  return e.index === !0;
}
function fh(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, s) => {
      let o = [...n, s],
        a = typeof i.id == 'string' ? i.id : o.join('-');
      if (
        (xe(i.index !== !0 || !i.children, 'Cannot specify children on an index route'),
        xe(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        GC(i))
      ) {
        let l = Be({}, i, t(i), { id: a });
        return (r[a] = l), l;
      } else {
        let l = Be({}, i, t(i), { id: a, children: void 0 });
        return (r[a] = l), i.children && (l.children = fh(i.children, t, o, r)), l;
      }
    })
  );
}
function As(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Ei(t) : t,
    i = bo(r.pathname || '/', n);
  if (i == null) return null;
  let s = nS(e);
  KC(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) {
    let l = o_(i);
    o = r_(s[a], l);
  }
  return o;
}
function qC(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function nS(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || '' : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith('/') &&
      (xe(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = xr([r, l.relativePath]),
      c = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (xe(
        s.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".'),
      ),
      nS(s.children, t, c, u)),
      !(s.path == null && !s.index) && t.push({ path: u, score: t_(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === '' || !((a = s.path) != null && a.includes('?'))) i(s, o);
      else for (let l of rS(s.path)) i(s, o, l);
    }),
    t
  );
}
function rS(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith('?'),
    s = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [s, ''] : [s];
  let o = rS(r.join('/')),
    a = [];
  return (
    a.push(...o.map((l) => (l === '' ? s : [s, l].join('/')))),
    i && a.push(...o),
    a.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function KC(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : n_(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const ZC = /^:[\w-]+$/,
  QC = 3,
  YC = 2,
  XC = 1,
  JC = 10,
  e_ = -2,
  wv = (e) => e === '*';
function t_(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(wv) && (r += e_),
    t && (r += YC),
    n.filter((i) => !wv(i)).reduce((i, s) => i + (ZC.test(s) ? QC : s === '' ? XC : JC), r)
  );
}
function n_(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function r_(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      l = o === n.length - 1,
      u = i === '/' ? t : t.slice(i.length) || '/',
      c = i_({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, u);
    if (!c) return null;
    Object.assign(r, c.params);
    let d = a.route;
    s.push({
      params: r,
      pathname: xr([i, c.pathname]),
      pathnameBase: u_(xr([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== '/' && (i = xr([i, c.pathnameBase]));
  }
  return s;
}
function i_(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = s_(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, '$1'),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: m } = c;
      if (f === '*') {
        let y = a[d] || '';
        o = s.slice(0, s.length - y.length).replace(/(.)\/+$/, '$1');
      }
      const v = a[d];
      return m && !v ? (u[f] = void 0) : (u[f] = (v || '').replace(/%2F/g, '/')), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function s_(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ho(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }), l ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }), (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (i += '\\/*$')
      : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  );
}
function o_(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      ho(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function bo(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function a_(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: i = '' } = typeof e == 'string' ? Ei(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : l_(n, t)) : t, search: c_(r), hash: d_(i) };
}
function l_(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Id(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function iS(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function Jp(e, t) {
  let n = iS(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function em(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == 'string'
    ? (i = Ei(e))
    : ((i = Be({}, e)),
      xe(!i.pathname || !i.pathname.includes('?'), Id('?', 'pathname', 'search', i)),
      xe(!i.pathname || !i.pathname.includes('#'), Id('#', 'pathname', 'hash', i)),
      xe(!i.search || !i.search.includes('#'), Id('#', 'search', 'hash', i)));
  let s = e === '' || i.pathname === '',
    o = s ? '/' : i.pathname,
    a;
  if (o == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith('..')) {
      let f = o.split('/');
      for (; f[0] === '..'; ) f.shift(), (d -= 1);
      i.pathname = f.join('/');
    }
    a = d >= 0 ? t[d] : '/';
  }
  let l = a_(i, a),
    u = o && o !== '/' && o.endsWith('/'),
    c = (s || o === '.') && n.endsWith('/');
  return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l;
}
const xr = (e) => e.join('/').replace(/\/\/+/g, '/'),
  u_ = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  c_ = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  d_ = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class tm {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = i),
      r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
  }
}
function nm(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const sS = ['post', 'put', 'patch', 'delete'],
  f_ = new Set(sS),
  h_ = ['get', ...sS],
  p_ = new Set(h_),
  m_ = new Set([301, 302, 303, 307, 308]),
  g_ = new Set([307, 308]),
  Fd = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  v_ = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  zo = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  rm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  y_ = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  oS = 'remix-router-transitions';
function x_(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n = typeof t < 'u' && typeof t.document < 'u' && typeof t.document.createElement < 'u',
    r = !n;
  xe(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let k = e.detectErrorBoundary;
    i = (M) => ({ hasErrorBoundary: k(M) });
  } else i = y_;
  let s = {},
    o = fh(e.routes, i, void 0, s),
    a,
    l = e.basename || '/',
    u = e.unstable_dataStrategy || T_,
    c = Be(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    d = null,
    f = new Set(),
    m = null,
    v = null,
    y = null,
    w = e.hydrationData != null,
    h = As(o, e.history.location, l),
    p = null;
  if (h == null) {
    let k = gn(404, { pathname: e.history.location.pathname }),
      { matches: M, route: F } = Lv(o);
    (h = M), (p = { [F.id]: k });
  }
  let g,
    x = h.some((k) => k.route.lazy),
    T = h.some((k) => k.route.loader);
  if (x) g = !1;
  else if (!T) g = !0;
  else if (c.v7_partialHydration) {
    let k = e.hydrationData ? e.hydrationData.loaderData : null,
      M = e.hydrationData ? e.hydrationData.errors : null,
      F = (H) =>
        H.route.loader
          ? typeof H.route.loader == 'function' && H.route.loader.hydrate === !0
            ? !1
            : (k && k[H.route.id] !== void 0) || (M && M[H.route.id] !== void 0)
          : !0;
    if (M) {
      let H = h.findIndex((ee) => M[ee.route.id] !== void 0);
      g = h.slice(0, H + 1).every(F);
    } else g = h.every(F);
  } else g = e.hydrationData != null;
  let A,
    S = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: h,
      initialized: g,
      navigation: Fd,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || p,
      fetchers: new Map(),
      blockers: new Map(),
    },
    b = Xe.Pop,
    L = !1,
    P,
    z = !1,
    N = new Map(),
    j = null,
    G = !1,
    Q = !1,
    he = [],
    Re = [],
    D = new Map(),
    q = 0,
    K = -1,
    ye = new Map(),
    Se = new Set(),
    Qt = new Map(),
    wt = new Map(),
    Rt = new Set(),
    et = new Map(),
    Lt = new Map(),
    Ci = !1;
  function Ml() {
    if (
      ((d = e.history.listen((k) => {
        let { action: M, location: F, delta: H } = k;
        if (Ci) {
          Ci = !1;
          return;
        }
        ho(
          Lt.size === 0 || H != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        );
        let ee = ig({ currentLocation: S.location, nextLocation: F, historyAction: M });
        if (ee && H != null) {
          (Ci = !0),
            e.history.go(H * -1),
            Fl(ee, {
              state: 'blocked',
              location: F,
              proceed() {
                Fl(ee, { state: 'proceeding', proceed: void 0, reset: void 0, location: F }),
                  e.history.go(H);
              },
              reset() {
                let pe = new Map(S.blockers);
                pe.set(ee, zo), At({ blockers: pe });
              },
            });
          return;
        }
        return Ar(M, F);
      })),
      n)
    ) {
      N_(t, N);
      let k = () => j_(t, N);
      t.addEventListener('pagehide', k), (j = () => t.removeEventListener('pagehide', k));
    }
    return S.initialized || Ar(Xe.Pop, S.location, { initialHydration: !0 }), A;
  }
  function ld() {
    d && d(),
      j && j(),
      f.clear(),
      P && P.abort(),
      S.fetchers.forEach((k, M) => ds(M)),
      S.blockers.forEach((k, M) => rg(M));
  }
  function Dl(k) {
    return f.add(k), () => f.delete(k);
  }
  function At(k, M) {
    M === void 0 && (M = {}), (S = Be({}, S, k));
    let F = [],
      H = [];
    c.v7_fetcherPersist &&
      S.fetchers.forEach((ee, pe) => {
        ee.state === 'idle' && (Rt.has(pe) ? H.push(pe) : F.push(pe));
      }),
      [...f].forEach((ee) =>
        ee(S, {
          deletedFetchers: H,
          unstable_viewTransitionOpts: M.viewTransitionOpts,
          unstable_flushSync: M.flushSync === !0,
        }),
      ),
      c.v7_fetcherPersist && (F.forEach((ee) => S.fetchers.delete(ee)), H.forEach((ee) => ds(ee)));
  }
  function Lr(k, M, F) {
    var H, ee;
    let { flushSync: pe } = F === void 0 ? {} : F,
      ae =
        S.actionData != null &&
        S.navigation.formMethod != null &&
        On(S.navigation.formMethod) &&
        S.navigation.state === 'loading' &&
        ((H = k.state) == null ? void 0 : H._isRedirect) !== !0,
      ne;
    M.actionData
      ? Object.keys(M.actionData).length > 0
        ? (ne = M.actionData)
        : (ne = null)
      : ae
      ? (ne = S.actionData)
      : (ne = null);
    let ge = M.loaderData
        ? kv(S.loaderData, M.loaderData, M.matches || [], M.errors)
        : S.loaderData,
      fe = S.blockers;
    fe.size > 0 && ((fe = new Map(fe)), fe.forEach((de, Ie) => fe.set(Ie, zo)));
    let dt =
      L === !0 ||
      (S.navigation.formMethod != null &&
        On(S.navigation.formMethod) &&
        ((ee = k.state) == null ? void 0 : ee._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      G ||
        b === Xe.Pop ||
        (b === Xe.Push
          ? e.history.push(k, k.state)
          : b === Xe.Replace && e.history.replace(k, k.state));
    let ft;
    if (b === Xe.Pop) {
      let de = N.get(S.location.pathname);
      de && de.has(k.pathname)
        ? (ft = { currentLocation: S.location, nextLocation: k })
        : N.has(k.pathname) && (ft = { currentLocation: k, nextLocation: S.location });
    } else if (z) {
      let de = N.get(S.location.pathname);
      de ? de.add(k.pathname) : ((de = new Set([k.pathname])), N.set(S.location.pathname, de)),
        (ft = { currentLocation: S.location, nextLocation: k });
    }
    At(
      Be({}, M, {
        actionData: ne,
        loaderData: ge,
        historyAction: b,
        location: k,
        initialized: !0,
        navigation: Fd,
        revalidation: 'idle',
        restoreScrollPosition: og(k, M.matches || S.matches),
        preventScrollReset: dt,
        blockers: fe,
      }),
      { viewTransitionOpts: ft, flushSync: pe === !0 },
    ),
      (b = Xe.Pop),
      (L = !1),
      (z = !1),
      (G = !1),
      (Q = !1),
      (he = []),
      (Re = []);
  }
  async function Po(k, M) {
    if (typeof k == 'number') {
      e.history.go(k);
      return;
    }
    let F = hh(
        S.location,
        S.matches,
        l,
        c.v7_prependBasename,
        k,
        c.v7_relativeSplatPath,
        M == null ? void 0 : M.fromRouteId,
        M == null ? void 0 : M.relative,
      ),
      { path: H, submission: ee, error: pe } = Sv(c.v7_normalizeFormMethod, !1, F, M),
      ae = S.location,
      ne = Da(S.location, H, M && M.state);
    ne = Be({}, ne, e.history.encodeLocation(ne));
    let ge = M && M.replace != null ? M.replace : void 0,
      fe = Xe.Push;
    ge === !0
      ? (fe = Xe.Replace)
      : ge === !1 ||
        (ee != null &&
          On(ee.formMethod) &&
          ee.formAction === S.location.pathname + S.location.search &&
          (fe = Xe.Replace));
    let dt = M && 'preventScrollReset' in M ? M.preventScrollReset === !0 : void 0,
      ft = (M && M.unstable_flushSync) === !0,
      de = ig({ currentLocation: ae, nextLocation: ne, historyAction: fe });
    if (de) {
      Fl(de, {
        state: 'blocked',
        location: ne,
        proceed() {
          Fl(de, { state: 'proceeding', proceed: void 0, reset: void 0, location: ne }), Po(k, M);
        },
        reset() {
          let Ie = new Map(S.blockers);
          Ie.set(de, zo), At({ blockers: Ie });
        },
      });
      return;
    }
    return await Ar(fe, ne, {
      submission: ee,
      pendingError: pe,
      preventScrollReset: dt,
      replace: M && M.replace,
      enableViewTransition: M && M.unstable_viewTransition,
      flushSync: ft,
    });
  }
  function tg() {
    if ((Pe(), At({ revalidation: 'loading' }), S.navigation.state !== 'submitting')) {
      if (S.navigation.state === 'idle') {
        Ar(S.historyAction, S.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Ar(b || S.historyAction, S.navigation.location, { overrideNavigation: S.navigation });
    }
  }
  async function Ar(k, M, F) {
    P && P.abort(),
      (P = null),
      (b = k),
      (G = (F && F.startUninterruptedRevalidation) === !0),
      uT(S.location, S.matches),
      (L = (F && F.preventScrollReset) === !0),
      (z = (F && F.enableViewTransition) === !0);
    let H = a || o,
      ee = F && F.overrideNavigation,
      pe = As(H, M, l),
      ae = (F && F.flushSync) === !0;
    if (!pe) {
      let de = gn(404, { pathname: M.pathname }),
        { matches: Ie, route: ot } = Lv(H);
      ud(), Lr(M, { matches: Ie, loaderData: {}, errors: { [ot.id]: de } }, { flushSync: ae });
      return;
    }
    if (
      S.initialized &&
      !Q &&
      R_(S.location, M) &&
      !(F && F.submission && On(F.submission.formMethod))
    ) {
      Lr(M, { matches: pe }, { flushSync: ae });
      return;
    }
    P = new AbortController();
    let ne = gs(e.history, M, P.signal, F && F.submission),
      ge;
    if (F && F.pendingError) ge = [ca(pe).route.id, { type: Fe.error, error: F.pendingError }];
    else if (F && F.submission && On(F.submission.formMethod)) {
      let de = await ng(ne, M, F.submission, pe, { replace: F.replace, flushSync: ae });
      if (de.shortCircuited) return;
      (ge = de.pendingActionResult),
        (ee = Vd(M, F.submission)),
        (ae = !1),
        (ne = gs(e.history, ne.url, ne.signal));
    }
    let {
      shortCircuited: fe,
      loaderData: dt,
      errors: ft,
    } = await C(
      ne,
      M,
      pe,
      ee,
      F && F.submission,
      F && F.fetcherSubmission,
      F && F.replace,
      F && F.initialHydration === !0,
      ae,
      ge,
    );
    fe || ((P = null), Lr(M, Be({ matches: pe }, Rv(ge), { loaderData: dt, errors: ft })));
  }
  async function ng(k, M, F, H, ee) {
    ee === void 0 && (ee = {}), Pe();
    let pe = M_(M, F);
    At({ navigation: pe }, { flushSync: ee.flushSync === !0 });
    let ae,
      ne = mh(H, M);
    if (!ne.route.action && !ne.route.lazy)
      ae = {
        type: Fe.error,
        error: gn(405, { method: k.method, pathname: M.pathname, routeId: ne.route.id }),
      };
    else if (((ae = (await $('action', k, [ne], H))[0]), k.signal.aborted))
      return { shortCircuited: !0 };
    if (ji(ae)) {
      let ge;
      return (
        ee && ee.replace != null
          ? (ge = ee.replace)
          : (ge =
              Cv(ae.response.headers.get('Location'), new URL(k.url), l) ===
              S.location.pathname + S.location.search),
        await W(k, ae, { submission: F, replace: ge }),
        { shortCircuited: !0 }
      );
    }
    if (Ni(ae)) throw gn(400, { type: 'defer-action' });
    if (wn(ae)) {
      let ge = ca(H, ne.route.id);
      return (ee && ee.replace) !== !0 && (b = Xe.Push), { pendingActionResult: [ge.route.id, ae] };
    }
    return { pendingActionResult: [ne.route.id, ae] };
  }
  async function C(k, M, F, H, ee, pe, ae, ne, ge, fe) {
    let dt = H || Vd(M, ee),
      ft = ee || pe || Mv(dt),
      de = a || o,
      [Ie, ot] = Ev(
        e.history,
        S,
        F,
        ft,
        M,
        c.v7_partialHydration && ne === !0,
        c.unstable_skipActionErrorRevalidation,
        Q,
        he,
        Re,
        Rt,
        Qt,
        Se,
        de,
        l,
        fe,
      );
    if (
      (ud(
        (be) =>
          !(F && F.some((Ot) => Ot.route.id === be)) || (Ie && Ie.some((Ot) => Ot.route.id === be)),
      ),
      (K = ++q),
      Ie.length === 0 && ot.length === 0)
    ) {
      let be = Ro();
      return (
        Lr(
          M,
          Be(
            {
              matches: F,
              loaderData: {},
              errors: fe && wn(fe[1]) ? { [fe[0]]: fe[1].error } : null,
            },
            Rv(fe),
            be ? { fetchers: new Map(S.fetchers) } : {},
          ),
          { flushSync: ge },
        ),
        { shortCircuited: !0 }
      );
    }
    if (!G && (!c.v7_partialHydration || !ne)) {
      ot.forEach((Ot) => {
        let dn = S.fetchers.get(Ot.key),
          ht = Bo(void 0, dn ? dn.data : void 0);
        S.fetchers.set(Ot.key, ht);
      });
      let be;
      fe && !wn(fe[1])
        ? (be = { [fe[0]]: fe[1].data })
        : S.actionData &&
          (Object.keys(S.actionData).length === 0 ? (be = null) : (be = S.actionData)),
        At(
          Be(
            { navigation: dt },
            be !== void 0 ? { actionData: be } : {},
            ot.length > 0 ? { fetchers: new Map(S.fetchers) } : {},
          ),
          { flushSync: ge },
        );
    }
    ot.forEach((be) => {
      D.has(be.key) && cn(be.key), be.controller && D.set(be.key, be.controller);
    });
    let Lo = () => ot.forEach((be) => cn(be.key));
    P && P.signal.addEventListener('abort', Lo);
    let { loaderResults: Or, fetcherResults: fs } = await ie(S.matches, F, Ie, ot, k);
    if (k.signal.aborted) return { shortCircuited: !0 };
    P && P.signal.removeEventListener('abort', Lo), ot.forEach((be) => D.delete(be.key));
    let hs = Av([...Or, ...fs]);
    if (hs) {
      if (hs.idx >= Ie.length) {
        let be = ot[hs.idx - Ie.length].key;
        Se.add(be);
      }
      return await W(k, hs.result, { replace: ae }), { shortCircuited: !0 };
    }
    let { loaderData: ps, errors: Un } = Pv(S, F, Ie, Or, fe, ot, fs, et);
    et.forEach((be, Ot) => {
      be.subscribe((dn) => {
        (dn || be.done) && et.delete(Ot);
      });
    }),
      c.v7_partialHydration &&
        ne &&
        S.errors &&
        Object.entries(S.errors)
          .filter((be) => {
            let [Ot] = be;
            return !Ie.some((dn) => dn.route.id === Ot);
          })
          .forEach((be) => {
            let [Ot, dn] = be;
            Un = Object.assign(Un || {}, { [Ot]: dn });
          });
    let Vl = Ro(),
      zl = jl(K),
      Bl = Vl || zl || ot.length > 0;
    return Be({ loaderData: ps, errors: Un }, Bl ? { fetchers: new Map(S.fetchers) } : {});
  }
  function O(k, M, F, H) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    D.has(k) && cn(k);
    let ee = (H && H.unstable_flushSync) === !0,
      pe = a || o,
      ae = hh(
        S.location,
        S.matches,
        l,
        c.v7_prependBasename,
        F,
        c.v7_relativeSplatPath,
        M,
        H == null ? void 0 : H.relative,
      ),
      ne = As(pe, ae, l);
    if (!ne) {
      tt(k, M, gn(404, { pathname: ae }), { flushSync: ee });
      return;
    }
    let { path: ge, submission: fe, error: dt } = Sv(c.v7_normalizeFormMethod, !0, ae, H);
    if (dt) {
      tt(k, M, dt, { flushSync: ee });
      return;
    }
    let ft = mh(ne, ge);
    if (((L = (H && H.preventScrollReset) === !0), fe && On(fe.formMethod))) {
      I(k, M, ge, ft, ne, ee, fe);
      return;
    }
    Qt.set(k, { routeId: M, path: ge }), Y(k, M, ge, ft, ne, ee, fe);
  }
  async function I(k, M, F, H, ee, pe, ae) {
    if ((Pe(), Qt.delete(k), !H.route.action && !H.route.lazy)) {
      let ht = gn(405, { method: ae.formMethod, pathname: F, routeId: M });
      tt(k, M, ht, { flushSync: pe });
      return;
    }
    let ne = S.fetchers.get(k);
    Oe(k, D_(ae, ne), { flushSync: pe });
    let ge = new AbortController(),
      fe = gs(e.history, F, ge.signal, ae);
    D.set(k, ge);
    let dt = q,
      de = (await $('action', fe, [H], ee))[0];
    if (fe.signal.aborted) {
      D.get(k) === ge && D.delete(k);
      return;
    }
    if (c.v7_fetcherPersist && Rt.has(k)) {
      if (ji(de) || wn(de)) {
        Oe(k, Nr(void 0));
        return;
      }
    } else {
      if (ji(de))
        if ((D.delete(k), K > dt)) {
          Oe(k, Nr(void 0));
          return;
        } else return Se.add(k), Oe(k, Bo(ae)), W(fe, de, { fetcherSubmission: ae });
      if (wn(de)) {
        tt(k, M, de.error);
        return;
      }
    }
    if (Ni(de)) throw gn(400, { type: 'defer-action' });
    let Ie = S.navigation.location || S.location,
      ot = gs(e.history, Ie, ge.signal),
      Lo = a || o,
      Or = S.navigation.state !== 'idle' ? As(Lo, S.navigation.location, l) : S.matches;
    xe(Or, "Didn't find any matches after fetcher action");
    let fs = ++q;
    ye.set(k, fs);
    let hs = Bo(ae, de.data);
    S.fetchers.set(k, hs);
    let [ps, Un] = Ev(
      e.history,
      S,
      Or,
      ae,
      Ie,
      !1,
      c.unstable_skipActionErrorRevalidation,
      Q,
      he,
      Re,
      Rt,
      Qt,
      Se,
      Lo,
      l,
      [H.route.id, de],
    );
    Un.filter((ht) => ht.key !== k).forEach((ht) => {
      let Ao = ht.key,
        ag = S.fetchers.get(Ao),
        dT = Bo(void 0, ag ? ag.data : void 0);
      S.fetchers.set(Ao, dT), D.has(Ao) && cn(Ao), ht.controller && D.set(Ao, ht.controller);
    }),
      At({ fetchers: new Map(S.fetchers) });
    let Vl = () => Un.forEach((ht) => cn(ht.key));
    ge.signal.addEventListener('abort', Vl);
    let { loaderResults: zl, fetcherResults: Bl } = await ie(S.matches, Or, ps, Un, ot);
    if (ge.signal.aborted) return;
    ge.signal.removeEventListener('abort', Vl),
      ye.delete(k),
      D.delete(k),
      Un.forEach((ht) => D.delete(ht.key));
    let be = Av([...zl, ...Bl]);
    if (be) {
      if (be.idx >= ps.length) {
        let ht = Un[be.idx - ps.length].key;
        Se.add(ht);
      }
      return W(ot, be.result);
    }
    let { loaderData: Ot, errors: dn } = Pv(S, S.matches, ps, zl, void 0, Un, Bl, et);
    if (S.fetchers.has(k)) {
      let ht = Nr(de.data);
      S.fetchers.set(k, ht);
    }
    jl(fs),
      S.navigation.state === 'loading' && fs > K
        ? (xe(b, 'Expected pending action'),
          P && P.abort(),
          Lr(S.navigation.location, {
            matches: Or,
            loaderData: Ot,
            errors: dn,
            fetchers: new Map(S.fetchers),
          }))
        : (At({
            errors: dn,
            loaderData: kv(S.loaderData, Ot, Or, dn),
            fetchers: new Map(S.fetchers),
          }),
          (Q = !1));
  }
  async function Y(k, M, F, H, ee, pe, ae) {
    let ne = S.fetchers.get(k);
    Oe(k, Bo(ae, ne ? ne.data : void 0), { flushSync: pe });
    let ge = new AbortController(),
      fe = gs(e.history, F, ge.signal);
    D.set(k, ge);
    let dt = q,
      de = (await $('loader', fe, [H], ee))[0];
    if (
      (Ni(de) && (de = (await cS(de, fe.signal, !0)) || de),
      D.get(k) === ge && D.delete(k),
      !fe.signal.aborted)
    ) {
      if (Rt.has(k)) {
        Oe(k, Nr(void 0));
        return;
      }
      if (ji(de))
        if (K > dt) {
          Oe(k, Nr(void 0));
          return;
        } else {
          Se.add(k), await W(fe, de);
          return;
        }
      if (wn(de)) {
        tt(k, M, de.error);
        return;
      }
      xe(!Ni(de), 'Unhandled fetcher deferred data'), Oe(k, Nr(de.data));
    }
  }
  async function W(k, M, F) {
    let { submission: H, fetcherSubmission: ee, replace: pe } = F === void 0 ? {} : F;
    M.response.headers.has('X-Remix-Revalidate') && (Q = !0);
    let ae = M.response.headers.get('Location');
    xe(ae, 'Expected a Location header on the redirect Response'), (ae = Cv(ae, new URL(k.url), l));
    let ne = Da(S.location, ae, { _isRedirect: !0 });
    if (n) {
      let Ie = !1;
      if (M.response.headers.has('X-Remix-Reload-Document')) Ie = !0;
      else if (rm.test(ae)) {
        const ot = e.history.createURL(ae);
        Ie = ot.origin !== t.location.origin || bo(ot.pathname, l) == null;
      }
      if (Ie) {
        pe ? t.location.replace(ae) : t.location.assign(ae);
        return;
      }
    }
    P = null;
    let ge = pe === !0 ? Xe.Replace : Xe.Push,
      { formMethod: fe, formAction: dt, formEncType: ft } = S.navigation;
    !H && !ee && fe && dt && ft && (H = Mv(S.navigation));
    let de = H || ee;
    if (g_.has(M.response.status) && de && On(de.formMethod))
      await Ar(ge, ne, { submission: Be({}, de, { formAction: ae }), preventScrollReset: L });
    else {
      let Ie = Vd(ne, H);
      await Ar(ge, ne, { overrideNavigation: Ie, fetcherSubmission: ee, preventScrollReset: L });
    }
  }
  async function $(k, M, F, H) {
    try {
      let ee = await b_(u, k, M, F, H, s, i);
      return await Promise.all(
        ee.map((pe, ae) => {
          if (L_(pe)) {
            let ne = pe.result;
            return {
              type: Fe.redirect,
              response: P_(ne, M, F[ae].route.id, H, l, c.v7_relativeSplatPath),
            };
          }
          return __(pe);
        }),
      );
    } catch (ee) {
      return F.map(() => ({ type: Fe.error, error: ee }));
    }
  }
  async function ie(k, M, F, H, ee) {
    let [pe, ...ae] = await Promise.all([
      F.length ? $('loader', ee, F, M) : [],
      ...H.map((ne) => {
        if (ne.matches && ne.match && ne.controller) {
          let ge = gs(e.history, ne.path, ne.controller.signal);
          return $('loader', ge, [ne.match], ne.matches).then((fe) => fe[0]);
        } else return Promise.resolve({ type: Fe.error, error: gn(404, { pathname: ne.path }) });
      }),
    ]);
    return (
      await Promise.all([
        Ov(
          k,
          F,
          pe,
          pe.map(() => ee.signal),
          !1,
          S.loaderData,
        ),
        Ov(
          k,
          H.map((ne) => ne.match),
          ae,
          H.map((ne) => (ne.controller ? ne.controller.signal : null)),
          !0,
        ),
      ]),
      { loaderResults: pe, fetcherResults: ae }
    );
  }
  function Pe() {
    (Q = !0),
      he.push(...ud()),
      Qt.forEach((k, M) => {
        D.has(M) && (Re.push(M), cn(M));
      });
  }
  function Oe(k, M, F) {
    F === void 0 && (F = {}),
      S.fetchers.set(k, M),
      At({ fetchers: new Map(S.fetchers) }, { flushSync: (F && F.flushSync) === !0 });
  }
  function tt(k, M, F, H) {
    H === void 0 && (H = {});
    let ee = ca(S.matches, M);
    ds(k),
      At(
        { errors: { [ee.route.id]: F }, fetchers: new Map(S.fetchers) },
        { flushSync: (H && H.flushSync) === !0 },
      );
  }
  function ar(k) {
    return (
      c.v7_fetcherPersist && (wt.set(k, (wt.get(k) || 0) + 1), Rt.has(k) && Rt.delete(k)),
      S.fetchers.get(k) || v_
    );
  }
  function ds(k) {
    let M = S.fetchers.get(k);
    D.has(k) && !(M && M.state === 'loading' && ye.has(k)) && cn(k),
      Qt.delete(k),
      ye.delete(k),
      Se.delete(k),
      Rt.delete(k),
      S.fetchers.delete(k);
  }
  function ko(k) {
    if (c.v7_fetcherPersist) {
      let M = (wt.get(k) || 0) - 1;
      M <= 0 ? (wt.delete(k), Rt.add(k)) : wt.set(k, M);
    } else ds(k);
    At({ fetchers: new Map(S.fetchers) });
  }
  function cn(k) {
    let M = D.get(k);
    xe(M, 'Expected fetch controller: ' + k), M.abort(), D.delete(k);
  }
  function Nl(k) {
    for (let M of k) {
      let F = ar(M),
        H = Nr(F.data);
      S.fetchers.set(M, H);
    }
  }
  function Ro() {
    let k = [],
      M = !1;
    for (let F of Se) {
      let H = S.fetchers.get(F);
      xe(H, 'Expected fetcher: ' + F), H.state === 'loading' && (Se.delete(F), k.push(F), (M = !0));
    }
    return Nl(k), M;
  }
  function jl(k) {
    let M = [];
    for (let [F, H] of ye)
      if (H < k) {
        let ee = S.fetchers.get(F);
        xe(ee, 'Expected fetcher: ' + F),
          ee.state === 'loading' && (cn(F), ye.delete(F), M.push(F));
      }
    return Nl(M), M.length > 0;
  }
  function Il(k, M) {
    let F = S.blockers.get(k) || zo;
    return Lt.get(k) !== M && Lt.set(k, M), F;
  }
  function rg(k) {
    S.blockers.delete(k), Lt.delete(k);
  }
  function Fl(k, M) {
    let F = S.blockers.get(k) || zo;
    xe(
      (F.state === 'unblocked' && M.state === 'blocked') ||
        (F.state === 'blocked' && M.state === 'blocked') ||
        (F.state === 'blocked' && M.state === 'proceeding') ||
        (F.state === 'blocked' && M.state === 'unblocked') ||
        (F.state === 'proceeding' && M.state === 'unblocked'),
      'Invalid blocker state transition: ' + F.state + ' -> ' + M.state,
    );
    let H = new Map(S.blockers);
    H.set(k, M), At({ blockers: H });
  }
  function ig(k) {
    let { currentLocation: M, nextLocation: F, historyAction: H } = k;
    if (Lt.size === 0) return;
    Lt.size > 1 && ho(!1, 'A router only supports one blocker at a time');
    let ee = Array.from(Lt.entries()),
      [pe, ae] = ee[ee.length - 1],
      ne = S.blockers.get(pe);
    if (
      !(ne && ne.state === 'proceeding') &&
      ae({ currentLocation: M, nextLocation: F, historyAction: H })
    )
      return pe;
  }
  function ud(k) {
    let M = [];
    return (
      et.forEach((F, H) => {
        (!k || k(H)) && (F.cancel(), M.push(H), et.delete(H));
      }),
      M
    );
  }
  function lT(k, M, F) {
    if (((m = k), (y = M), (v = F || null), !w && S.navigation === Fd)) {
      w = !0;
      let H = og(S.location, S.matches);
      H != null && At({ restoreScrollPosition: H });
    }
    return () => {
      (m = null), (y = null), (v = null);
    };
  }
  function sg(k, M) {
    return (
      (v &&
        v(
          k,
          M.map((H) => qC(H, S.loaderData)),
        )) ||
      k.key
    );
  }
  function uT(k, M) {
    if (m && y) {
      let F = sg(k, M);
      m[F] = y();
    }
  }
  function og(k, M) {
    if (m) {
      let F = sg(k, M),
        H = m[F];
      if (typeof H == 'number') return H;
    }
    return null;
  }
  function cT(k) {
    (s = {}), (a = fh(k, i, void 0, s));
  }
  return (
    (A = {
      get basename() {
        return l;
      },
      get future() {
        return c;
      },
      get state() {
        return S;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: Ml,
      subscribe: Dl,
      enableScrollRestoration: lT,
      navigate: Po,
      fetch: O,
      revalidate: tg,
      createHref: (k) => e.history.createHref(k),
      encodeLocation: (k) => e.history.encodeLocation(k),
      getFetcher: ar,
      deleteFetcher: ko,
      dispose: ld,
      getBlocker: Il,
      deleteBlocker: rg,
      _internalFetchControllers: D,
      _internalActiveDeferreds: et,
      _internalSetRoutes: cT,
    }),
    A
  );
}
function w_(e) {
  return (
    e != null && (('formData' in e && e.formData != null) || ('body' in e && e.body !== void 0))
  );
}
function hh(e, t, n, r, i, s, o, a) {
  let l, u;
  if (o) {
    l = [];
    for (let d of t)
      if ((l.push(d), d.route.id === o)) {
        u = d;
        break;
      }
  } else (l = t), (u = t[t.length - 1]);
  let c = em(i || '.', Jp(l, s), bo(e.pathname, n) || e.pathname, a === 'path');
  return (
    i == null && ((c.search = e.search), (c.hash = e.hash)),
    (i == null || i === '' || i === '.') &&
      u &&
      u.route.index &&
      !im(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, '?index&') : '?index'),
    r && n !== '/' && (c.pathname = c.pathname === '/' ? n : xr([n, c.pathname])),
    rs(c)
  );
}
function Sv(e, t, n, r) {
  if (!r || !w_(r)) return { path: n };
  if (r.formMethod && !O_(r.formMethod))
    return { path: n, error: gn(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: gn(400, { type: 'invalid-body' }) }),
    s = r.formMethod || 'get',
    o = e ? s.toUpperCase() : s.toLowerCase(),
    a = lS(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!On(o)) return i();
      let f =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((m, v) => {
              let [y, w] = v;
              return (
                '' +
                m +
                y +
                '=' +
                w +
                `
`
              );
            }, '')
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: f,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!On(o)) return i();
      try {
        let f = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: f,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  xe(typeof FormData == 'function', 'FormData is not available in this environment');
  let l, u;
  if (r.formData) (l = ph(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (l = ph(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (l = r.body), (u = _v(l));
  else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
  else
    try {
      (l = new URLSearchParams(r.body)), (u = _v(l));
    } catch {
      return i();
    }
  let c = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (On(c.formMethod)) return { path: n, submission: c };
  let d = Ei(n);
  return (
    t && d.search && im(d.search) && l.append('index', ''),
    (d.search = '?' + l),
    { path: rs(d), submission: c }
  );
}
function S_(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Ev(e, t, n, r, i, s, o, a, l, u, c, d, f, m, v, y) {
  let w = y ? (wn(y[1]) ? y[1].error : y[1].data) : void 0,
    h = e.createURL(t.location),
    p = e.createURL(i),
    g = y && wn(y[1]) ? y[0] : void 0,
    x = g ? S_(n, g) : n,
    T = y ? y[1].statusCode : void 0,
    A = o && T && T >= 400,
    S = x.filter((L, P) => {
      let { route: z } = L;
      if (z.lazy) return !0;
      if (z.loader == null) return !1;
      if (s)
        return typeof z.loader != 'function' || z.loader.hydrate
          ? !0
          : t.loaderData[z.id] === void 0 && (!t.errors || t.errors[z.id] === void 0);
      if (E_(t.loaderData, t.matches[P], L) || l.some((G) => G === L.route.id)) return !0;
      let N = t.matches[P],
        j = L;
      return Tv(
        L,
        Be({ currentUrl: h, currentParams: N.params, nextUrl: p, nextParams: j.params }, r, {
          actionResult: w,
          unstable_actionStatus: T,
          defaultShouldRevalidate: A
            ? !1
            : a ||
              h.pathname + h.search === p.pathname + p.search ||
              h.search !== p.search ||
              aS(N, j),
        }),
      );
    }),
    b = [];
  return (
    d.forEach((L, P) => {
      if (s || !n.some((Q) => Q.route.id === L.routeId) || c.has(P)) return;
      let z = As(m, L.path, v);
      if (!z) {
        b.push({
          key: P,
          routeId: L.routeId,
          path: L.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let N = t.fetchers.get(P),
        j = mh(z, L.path),
        G = !1;
      f.has(P)
        ? (G = !1)
        : u.includes(P)
        ? (G = !0)
        : N && N.state !== 'idle' && N.data === void 0
        ? (G = a)
        : (G = Tv(
            j,
            Be(
              {
                currentUrl: h,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: p,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: w, unstable_actionStatus: T, defaultShouldRevalidate: A ? !1 : a },
            ),
          )),
        G &&
          b.push({
            key: P,
            routeId: L.routeId,
            path: L.path,
            matches: z,
            match: j,
            controller: new AbortController(),
          });
    }),
    [S, b]
  );
}
function E_(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function aS(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname || (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Tv(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function bv(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  xe(i, 'No route found in manifest');
  let s = {};
  for (let o in r) {
    let l = i[o] !== void 0 && o !== 'hasErrorBoundary';
    ho(
      !l,
      'Route "' +
        i.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.'),
    ),
      !l && !WC.has(o) && (s[o] = r[o]);
  }
  Object.assign(i, s), Object.assign(i, Be({}, t(i), { lazy: void 0 }));
}
function T_(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function b_(e, t, n, r, i, s, o, a) {
  let l = r.reduce((d, f) => d.add(f.route.id), new Set()),
    u = new Set(),
    c = await e({
      matches: i.map((d) => {
        let f = l.has(d.route.id);
        return Be({}, d, {
          shouldLoad: f,
          resolve: (v) => (
            u.add(d.route.id),
            f ? C_(t, n, d, s, o, v, a) : Promise.resolve({ type: Fe.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: i[0].params,
      context: a,
    });
  return (
    i.forEach((d) =>
      xe(
        u.has(d.route.id),
        '`match.resolve()` was not called for route id "' +
          d.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
      ),
    ),
    c.filter((d, f) => l.has(i[f].route.id))
  );
}
async function C_(e, t, n, r, i, s, o) {
  let a,
    l,
    u = (c) => {
      let d,
        f = new Promise((y, w) => (d = w));
      (l = () => d()), t.signal.addEventListener('abort', l);
      let m = (y) =>
          typeof c != 'function'
            ? Promise.reject(
                new Error(
                  'You cannot call the handler for a route which defines a boolean ' +
                    ('"' + e + '" [routeId: ' + n.route.id + ']'),
                ),
              )
            : c({ request: t, params: n.params, context: o }, ...(y !== void 0 ? [y] : [])),
        v;
      return (
        s
          ? (v = s((y) => m(y)))
          : (v = (async () => {
              try {
                return { type: 'data', result: await m() };
              } catch (y) {
                return { type: 'error', result: y };
              }
            })()),
        Promise.race([v, f])
      );
    };
  try {
    let c = n.route[e];
    if (n.route.lazy)
      if (c) {
        let d,
          [f] = await Promise.all([
            u(c).catch((m) => {
              d = m;
            }),
            bv(n.route, i, r),
          ]);
        if (d !== void 0) throw d;
        a = f;
      } else if ((await bv(n.route, i, r), (c = n.route[e]), c)) a = await u(c);
      else if (e === 'action') {
        let d = new URL(t.url),
          f = d.pathname + d.search;
        throw gn(405, { method: t.method, pathname: f, routeId: n.route.id });
      } else return { type: Fe.data, result: void 0 };
    else if (c) a = await u(c);
    else {
      let d = new URL(t.url),
        f = d.pathname + d.search;
      throw gn(404, { pathname: f });
    }
    xe(
      a.result !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' + n.route.id + '" but didn\'t return anything from your `' + e + '` ') +
        'function. Please return a value or `null`.',
    );
  } catch (c) {
    return { type: Fe.error, result: c };
  } finally {
    l && t.signal.removeEventListener('abort', l);
  }
  return a;
}
async function __(e) {
  let { result: t, type: n, status: r } = e;
  if (uS(t)) {
    let o;
    try {
      let a = t.headers.get('Content-Type');
      a && /\bapplication\/json\b/.test(a)
        ? t.body == null
          ? (o = null)
          : (o = await t.json())
        : (o = await t.text());
    } catch (a) {
      return { type: Fe.error, error: a };
    }
    return n === Fe.error
      ? {
          type: Fe.error,
          error: new tm(t.status, t.statusText, o),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: Fe.data, data: o, statusCode: t.status, headers: t.headers };
  }
  if (n === Fe.error) return { type: Fe.error, error: t, statusCode: nm(t) ? t.status : r };
  if (A_(t)) {
    var i, s;
    return {
      type: Fe.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers: ((s = t.init) == null ? void 0 : s.headers) && new Headers(t.init.headers),
    };
  }
  return { type: Fe.data, data: t, statusCode: r };
}
function P_(e, t, n, r, i, s) {
  let o = e.headers.get('Location');
  if (
    (xe(o, 'Redirects returned/thrown from loaders/actions must have a Location header'),
    !rm.test(o))
  ) {
    let a = r.slice(0, r.findIndex((l) => l.route.id === n) + 1);
    (o = hh(new URL(t.url), a, i, !0, o, s)), e.headers.set('Location', o);
  }
  return e;
}
function Cv(e, t, n) {
  if (rm.test(e)) {
    let r = e,
      i = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
      s = bo(i.pathname, n) != null;
    if (i.origin === t.origin && s) return i.pathname + i.search + i.hash;
  }
  return e;
}
function gs(e, t, n, r) {
  let i = e.createURL(lS(t)).toString(),
    s = { signal: n };
  if (r && On(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (s.method = o.toUpperCase()),
      a === 'application/json'
        ? ((s.headers = new Headers({ 'Content-Type': a })), (s.body = JSON.stringify(r.json)))
        : a === 'text/plain'
        ? (s.body = r.text)
        : a === 'application/x-www-form-urlencoded' && r.formData
        ? (s.body = ph(r.formData))
        : (s.body = r.formData);
  }
  return new Request(i, s);
}
function ph(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function _v(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function k_(e, t, n, r, i, s) {
  let o = {},
    a = null,
    l,
    u = !1,
    c = {},
    d = r && wn(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((f, m) => {
      let v = t[m].route.id;
      if ((xe(!ji(f), 'Cannot handle redirect results in processLoaderData'), wn(f))) {
        let y = f.error;
        d !== void 0 && ((y = d), (d = void 0)), (a = a || {});
        {
          let w = ca(e, v);
          a[w.route.id] == null && (a[w.route.id] = y);
        }
        (o[v] = void 0),
          u || ((u = !0), (l = nm(f.error) ? f.error.status : 500)),
          f.headers && (c[v] = f.headers);
      } else
        Ni(f)
          ? (i.set(v, f.deferredData),
            (o[v] = f.deferredData.data),
            f.statusCode != null && f.statusCode !== 200 && !u && (l = f.statusCode),
            f.headers && (c[v] = f.headers))
          : ((o[v] = f.data),
            f.statusCode && f.statusCode !== 200 && !u && (l = f.statusCode),
            f.headers && (c[v] = f.headers));
    }),
    d !== void 0 && r && ((a = { [r[0]]: d }), (o[r[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: l || 200, loaderHeaders: c }
  );
}
function Pv(e, t, n, r, i, s, o, a) {
  let { loaderData: l, errors: u } = k_(t, n, r, i, a);
  for (let c = 0; c < s.length; c++) {
    let { key: d, match: f, controller: m } = s[c];
    xe(o !== void 0 && o[c] !== void 0, 'Did not find corresponding fetcher result');
    let v = o[c];
    if (!(m && m.signal.aborted))
      if (wn(v)) {
        let y = ca(e.matches, f == null ? void 0 : f.route.id);
        (u && u[y.route.id]) || (u = Be({}, u, { [y.route.id]: v.error })), e.fetchers.delete(d);
      } else if (ji(v)) xe(!1, 'Unhandled fetcher revalidation redirect');
      else if (Ni(v)) xe(!1, 'Unhandled fetcher deferred data');
      else {
        let y = Nr(v.data);
        e.fetchers.set(d, y);
      }
  }
  return { loaderData: l, errors: u };
}
function kv(e, t, n, r) {
  let i = Be({}, t);
  for (let s of n) {
    let o = s.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (i[o] = t[o])
        : e[o] !== void 0 && s.route.loader && (i[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return i;
}
function Rv(e) {
  return e ? (wn(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } }) : {};
}
function ca(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Lv(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || { id: '__shim-error-route__' };
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t };
}
function gn(e, t) {
  let { pathname: n, routeId: r, method: i, type: s } = t === void 0 ? {} : t,
    o = 'Unknown Server Error',
    a = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((o = 'Bad Request'),
        i && n && r
          ? (a =
              'You made a ' +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : s === 'defer-action'
          ? (a = 'defer() is not supported in actions')
          : s === 'invalid-body' && (a = 'Unable to encode submission body'))
      : e === 403
      ? ((o = 'Forbidden'), (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = 'Not Found'), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = 'Method Not Allowed'),
        i && n && r
          ? (a =
              'You made a ' +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
    new tm(e || 500, o, new Error(a), !0)
  );
}
function Av(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (ji(n)) return { result: n, idx: t };
  }
}
function lS(e) {
  let t = typeof e == 'string' ? Ei(e) : e;
  return rs(Be({}, t, { hash: '' }));
}
function R_(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== '';
}
function L_(e) {
  return uS(e.result) && m_.has(e.result.status);
}
function Ni(e) {
  return e.type === Fe.deferred;
}
function wn(e) {
  return e.type === Fe.error;
}
function ji(e) {
  return (e && e.type) === Fe.redirect;
}
function A_(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function uS(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function O_(e) {
  return p_.has(e.toLowerCase());
}
function On(e) {
  return f_.has(e.toLowerCase());
}
async function Ov(e, t, n, r, i, s) {
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      l = t[o];
    if (!l) continue;
    let u = e.find((d) => d.route.id === l.route.id),
      c = u != null && !aS(u, l) && (s && s[l.route.id]) !== void 0;
    if (Ni(a) && (i || c)) {
      let d = r[o];
      xe(d, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await cS(a, d, i).then((f) => {
          f && (n[o] = f || n[o]);
        });
    }
  }
}
async function cS(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Fe.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: Fe.error, error: i };
      }
    return { type: Fe.data, data: e.deferredData.data };
  }
}
function im(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function mh(e, t) {
  let n = typeof t == 'string' ? Ei(t).search : t.search;
  if (e[e.length - 1].route.index && im(n || '')) return e[e.length - 1];
  let r = iS(e);
  return r[r.length - 1];
}
function Mv(e) {
  let { formMethod: t, formAction: n, formEncType: r, text: i, formData: s, json: o } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (s != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: s,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function Vd(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function M_(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Bo(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function D_(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Nr(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function N_(e, t) {
  try {
    let n = e.sessionStorage.getItem(oS);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, s] of Object.entries(r || {}))
        s && Array.isArray(s) && t.set(i, new Set(s || []));
    }
  } catch {}
}
function j_(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(oS, JSON.stringify(n));
    } catch (r) {
      ho(!1, 'Failed to save applied view transitions in sessionStorage (' + r + ').');
    }
  }
}
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rc() {
  return (
    (rc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rc.apply(this, arguments)
  );
}
const Gc = _.createContext(null),
  dS = _.createContext(null),
  us = _.createContext(null),
  sm = _.createContext(null),
  Ti = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  fS = _.createContext(null);
function I_(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  wl() || xe(!1);
  let { basename: r, navigator: i } = _.useContext(us),
    { hash: s, pathname: o, search: a } = pS(e, { relative: n }),
    l = o;
  return (
    r !== '/' && (l = o === '/' ? r : xr([r, o])), i.createHref({ pathname: l, search: a, hash: s })
  );
}
function wl() {
  return _.useContext(sm) != null;
}
function Sl() {
  return wl() || xe(!1), _.useContext(sm).location;
}
function hS(e) {
  _.useContext(us).static || _.useLayoutEffect(e);
}
function F_() {
  let { isDataRoute: e } = _.useContext(Ti);
  return e ? X_() : V_();
}
function V_() {
  wl() || xe(!1);
  let e = _.useContext(Gc),
    { basename: t, future: n, navigator: r } = _.useContext(us),
    { matches: i } = _.useContext(Ti),
    { pathname: s } = Sl(),
    o = JSON.stringify(Jp(i, n.v7_relativeSplatPath)),
    a = _.useRef(!1);
  return (
    hS(() => {
      a.current = !0;
    }),
    _.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let d = em(u, JSON.parse(o), s, c.relative === 'path');
        e == null && t !== '/' && (d.pathname = d.pathname === '/' ? t : xr([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, o, s, e],
    )
  );
}
const z_ = _.createContext(null);
function B_(e) {
  let t = _.useContext(Ti).outlet;
  return t && _.createElement(z_.Provider, { value: e }, t);
}
function pS(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = _.useContext(us),
    { matches: i } = _.useContext(Ti),
    { pathname: s } = Sl(),
    o = JSON.stringify(Jp(i, r.v7_relativeSplatPath));
  return _.useMemo(() => em(e, JSON.parse(o), s, n === 'path'), [e, o, s, n]);
}
function U_(e, t, n, r) {
  wl() || xe(!1);
  let { navigator: i } = _.useContext(us),
    { matches: s } = _.useContext(Ti),
    o = s[s.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : '/';
  o && o.route;
  let u = Sl(),
    c;
  c = u;
  let d = c.pathname || '/',
    f = d;
  if (l !== '/') {
    let y = l.replace(/^\//, '').split('/');
    f = '/' + d.replace(/^\//, '').split('/').slice(y.length).join('/');
  }
  let m = As(e, { pathname: f });
  return q_(
    m &&
      m.map((y) =>
        Object.assign({}, y, {
          params: Object.assign({}, a, y.params),
          pathname: xr([l, i.encodeLocation ? i.encodeLocation(y.pathname).pathname : y.pathname]),
          pathnameBase:
            y.pathnameBase === '/'
              ? l
              : xr([
                  l,
                  i.encodeLocation ? i.encodeLocation(y.pathnameBase).pathname : y.pathnameBase,
                ]),
        }),
      ),
    s,
    n,
    r,
  );
}
function $_() {
  let e = Y_(),
    t = nm(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return _.createElement(
    _.Fragment,
    null,
    _.createElement('h2', null, 'Unexpected Application Error!'),
    _.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? _.createElement('pre', { style: i }, n) : null,
    null,
  );
}
const H_ = _.createElement($_, null);
class W_ extends _.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error !== void 0
      ? _.createElement(
          Ti.Provider,
          { value: this.props.routeContext },
          _.createElement(fS.Provider, { value: this.state.error, children: this.props.component }),
        )
      : this.props.children;
  }
}
function G_(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = _.useContext(Gc);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(Ti.Provider, { value: t }, r)
  );
}
function q_(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let o = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = o.findIndex((d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
    c >= 0 || xe(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let d = o[c];
      if (((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c), d.route.id)) {
        let { loaderData: f, errors: m } = n,
          v = d.route.loader && f[d.route.id] === void 0 && (!m || m[d.route.id] === void 0);
        if (d.route.lazy || v) {
          (l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, d, f) => {
    let m,
      v = !1,
      y = null,
      w = null;
    n &&
      ((m = a && d.route.id ? a[d.route.id] : void 0),
      (y = d.route.errorElement || H_),
      l &&
        (u < 0 && f === 0
          ? (J_('route-fallback'), (v = !0), (w = null))
          : u === f && ((v = !0), (w = d.route.hydrateFallbackElement || null))));
    let h = t.concat(o.slice(0, f + 1)),
      p = () => {
        let g;
        return (
          m
            ? (g = y)
            : v
            ? (g = w)
            : d.route.Component
            ? (g = _.createElement(d.route.Component, null))
            : d.route.element
            ? (g = d.route.element)
            : (g = c),
          _.createElement(G_, {
            match: d,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? _.createElement(W_, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: m,
          children: p(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var mS = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(mS || {}),
  ic = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(ic || {});
function K_(e) {
  let t = _.useContext(Gc);
  return t || xe(!1), t;
}
function Z_(e) {
  let t = _.useContext(dS);
  return t || xe(!1), t;
}
function Q_(e) {
  let t = _.useContext(Ti);
  return t || xe(!1), t;
}
function gS(e) {
  let t = Q_(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || xe(!1), n.route.id;
}
function Y_() {
  var e;
  let t = _.useContext(fS),
    n = Z_(ic.UseRouteError),
    r = gS(ic.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function X_() {
  let { router: e } = K_(mS.UseNavigateStable),
    t = gS(ic.UseNavigateStable),
    n = _.useRef(!1);
  return (
    hS(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == 'number' ? e.navigate(i) : e.navigate(i, rc({ fromRouteId: t }, s)));
      },
      [e, t],
    )
  );
}
const Dv = {};
function J_(e, t, n) {
  Dv[e] || (Dv[e] = !0);
}
function eP(e) {
  return B_(e.context);
}
function tP(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = Xe.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = e;
  wl() && xe(!1);
  let l = t.replace(/^\/*/, '/'),
    u = _.useMemo(
      () => ({ basename: l, navigator: s, static: o, future: rc({ v7_relativeSplatPath: !1 }, a) }),
      [l, a, s, o],
    );
  typeof r == 'string' && (r = Ei(r));
  let { pathname: c = '/', search: d = '', hash: f = '', state: m = null, key: v = 'default' } = r,
    y = _.useMemo(() => {
      let w = bo(c, l);
      return w == null
        ? null
        : { location: { pathname: w, search: d, hash: f, state: m, key: v }, navigationType: i };
    }, [l, c, d, f, m, v, i]);
  return y == null
    ? null
    : _.createElement(
        us.Provider,
        { value: u },
        _.createElement(sm.Provider, { children: n, value: y }),
      );
}
new Promise(() => {});
function nP(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
  return (
    e.Component && Object.assign(t, { element: _.createElement(e.Component), Component: void 0 }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: _.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, { errorElement: _.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
    t
  );
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Na() {
  return (
    (Na = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Na.apply(this, arguments)
  );
}
function rP(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function iP(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function sP(e, t) {
  return e.button === 0 && (!t || t === '_self') && !iP(e);
}
const oP = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  aP = '6';
try {
  window.__reactRouterVersion = aP;
} catch {}
function lP(e, t) {
  return x_({
    basename: void 0,
    future: Na({}, void 0, { v7_prependBasename: !0 }),
    history: UC({ window: void 0 }),
    hydrationData: uP(),
    routes: e,
    mapRouteProperties: nP,
    unstable_dataStrategy: void 0,
    window: void 0,
  }).initialize();
}
function uP() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Na({}, t, { errors: cP(t.errors) })), t;
}
function cP(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === 'RouteErrorResponse')
      n[r] = new tm(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === 'Error') {
      if (i.__subType) {
        let s = window[i.__subType];
        if (typeof s == 'function')
          try {
            let o = new s(i.message);
            (o.stack = ''), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let s = new Error(i.message);
        (s.stack = ''), (n[r] = s);
      }
    } else n[r] = i;
  return n;
}
const dP = _.createContext({ isTransitioning: !1 }),
  fP = _.createContext(new Map()),
  hP = 'startTransition',
  Nv = RT[hP],
  pP = 'flushSync',
  jv = BC[pP];
function mP(e) {
  Nv ? Nv(e) : e();
}
function Uo(e) {
  jv ? jv(e) : e();
}
class gP {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
}
function vP(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, s] = _.useState(n.state),
    [o, a] = _.useState(),
    [l, u] = _.useState({ isTransitioning: !1 }),
    [c, d] = _.useState(),
    [f, m] = _.useState(),
    [v, y] = _.useState(),
    w = _.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    p = _.useCallback(
      (S) => {
        h ? mP(S) : S();
      },
      [h],
    ),
    g = _.useCallback(
      (S, b) => {
        let { deletedFetchers: L, unstable_flushSync: P, unstable_viewTransitionOpts: z } = b;
        L.forEach((j) => w.current.delete(j)),
          S.fetchers.forEach((j, G) => {
            j.data !== void 0 && w.current.set(G, j.data);
          });
        let N = n.window == null || typeof n.window.document.startViewTransition != 'function';
        if (!z || N) {
          P ? Uo(() => s(S)) : p(() => s(S));
          return;
        }
        if (P) {
          Uo(() => {
            f && (c && c.resolve(), f.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: z.currentLocation,
                nextLocation: z.nextLocation,
              });
          });
          let j = n.window.document.startViewTransition(() => {
            Uo(() => s(S));
          });
          j.finished.finally(() => {
            Uo(() => {
              d(void 0), m(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            Uo(() => m(j));
          return;
        }
        f
          ? (c && c.resolve(),
            f.skipTransition(),
            y({ state: S, currentLocation: z.currentLocation, nextLocation: z.nextLocation }))
          : (a(S),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: z.currentLocation,
              nextLocation: z.nextLocation,
            }));
      },
      [n.window, f, c, w, p],
    );
  _.useLayoutEffect(() => n.subscribe(g), [n, g]),
    _.useEffect(() => {
      l.isTransitioning && !l.flushSync && d(new gP());
    }, [l]),
    _.useEffect(() => {
      if (c && o && n.window) {
        let S = o,
          b = c.promise,
          L = n.window.document.startViewTransition(async () => {
            p(() => s(S)), await b;
          });
        L.finished.finally(() => {
          d(void 0), m(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          m(L);
      }
    }, [p, o, c, n.window]),
    _.useEffect(() => {
      c && o && i.location.key === o.location.key && c.resolve();
    }, [c, f, i.location, o]),
    _.useEffect(() => {
      !l.isTransitioning &&
        v &&
        (a(v.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: v.currentLocation,
          nextLocation: v.nextLocation,
        }),
        y(void 0));
    }, [l.isTransitioning, v]),
    _.useEffect(() => {}, []);
  let x = _.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (S) => n.navigate(S),
        push: (S, b, L) =>
          n.navigate(S, {
            state: b,
            preventScrollReset: L == null ? void 0 : L.preventScrollReset,
          }),
        replace: (S, b, L) =>
          n.navigate(S, {
            replace: !0,
            state: b,
            preventScrollReset: L == null ? void 0 : L.preventScrollReset,
          }),
      }),
      [n],
    ),
    T = n.basename || '/',
    A = _.useMemo(() => ({ router: n, navigator: x, static: !1, basename: T }), [n, x, T]);
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(
      Gc.Provider,
      { value: A },
      _.createElement(
        dS.Provider,
        { value: i },
        _.createElement(
          fP.Provider,
          { value: w.current },
          _.createElement(
            dP.Provider,
            { value: l },
            _.createElement(
              tP,
              {
                basename: T,
                location: i.location,
                navigationType: i.historyAction,
                navigator: x,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              i.initialized || n.future.v7_partialHydration
                ? _.createElement(yP, { routes: n.routes, future: n.future, state: i })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function yP(e) {
  let { routes: t, future: n, state: r } = e;
  return U_(t, void 0, r, n);
}
const xP =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  wP = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Tn = _.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      f = rP(t, oP),
      { basename: m } = _.useContext(us),
      v,
      y = !1;
    if (typeof u == 'string' && wP.test(u) && ((v = u), xP))
      try {
        let g = new URL(window.location.href),
          x = u.startsWith('//') ? new URL(g.protocol + u) : new URL(u),
          T = bo(x.pathname, m);
        x.origin === g.origin && T != null ? (u = T + x.search + x.hash) : (y = !0);
      } catch {}
    let w = I_(u, { relative: i }),
      h = SP(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: d,
      });
    function p(g) {
      r && r(g), g.defaultPrevented || h(g);
    }
    return _.createElement(
      'a',
      Na({}, f, { href: v || w, onClick: y || s ? r : p, ref: n, target: l }),
    );
  });
var Iv;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Iv || (Iv = {}));
var Fv;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Fv || (Fv = {}));
function SP(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = F_(),
    u = Sl(),
    c = pS(e, { relative: o });
  return _.useCallback(
    (d) => {
      if (sP(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : rs(u) === rs(c);
        l(e, {
          replace: f,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [u, l, c, r, i, n, e, s, o, a],
  );
}
function vS(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = vS(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function Gt() {
  for (var e, t, n = 0, r = '', i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = vS(e)) && (r && (r += ' '), (r += t));
  return r;
}
let ou;
const EP = new Uint8Array(16);
function TP() {
  if (
    !ou &&
    ((ou = typeof crypto < 'u' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)),
    !ou)
  )
    throw new Error(
      'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
    );
  return ou(EP);
}
const pt = [];
for (let e = 0; e < 256; ++e) pt.push((e + 256).toString(16).slice(1));
function bP(e, t = 0) {
  return (
    pt[e[t + 0]] +
    pt[e[t + 1]] +
    pt[e[t + 2]] +
    pt[e[t + 3]] +
    '-' +
    pt[e[t + 4]] +
    pt[e[t + 5]] +
    '-' +
    pt[e[t + 6]] +
    pt[e[t + 7]] +
    '-' +
    pt[e[t + 8]] +
    pt[e[t + 9]] +
    '-' +
    pt[e[t + 10]] +
    pt[e[t + 11]] +
    pt[e[t + 12]] +
    pt[e[t + 13]] +
    pt[e[t + 14]] +
    pt[e[t + 15]]
  );
}
const CP = typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  Vv = { randomUUID: CP };
function Nn(e, t, n) {
  if (Vv.randomUUID && !t && !e) return Vv.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || TP)();
  return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), bP(r);
}
const om = _.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: 'never' }),
  qc = _.createContext({}),
  Kc = _.createContext(null),
  am = typeof document < 'u',
  lm = am ? _.useLayoutEffect : _.useEffect,
  yS = _.createContext({ strict: !1 }),
  um = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  _P = 'framerAppearId',
  xS = 'data-' + um(_P),
  PP = { skipAnimations: !1, useManualTiming: !1 };
class zv {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function kP(e) {
  let t = new zv(),
    n = new zv(),
    r = 0,
    i = !1,
    s = !1;
  const o = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && i,
          f = d ? t : n;
        return u && o.add(l), f.add(l) && d && i && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), o.delete(l);
      },
      process: (l) => {
        if (i) {
          s = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            o.has(c) && (a.schedule(c), e()), c(l);
          }
        (i = !1), s && ((s = !1), a.process(l));
      },
    };
  return a;
}
const au = ['read', 'resolveKeyframes', 'update', 'preRender', 'render', 'postRender'],
  RP = 40;
function wS(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = au.reduce((d, f) => ((d[f] = kP(() => (n = !0))), d), {}),
    o = (d) => {
      s[d].process(i);
    },
    a = () => {
      const d = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, RP), 1)),
        (i.timestamp = d),
        (i.isProcessing = !0),
        au.forEach(o),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(a);
    };
  return {
    schedule: au.reduce((d, f) => {
      const m = s[f];
      return (d[f] = (v, y = !1, w = !1) => (n || l(), m.schedule(v, y, w))), d;
    }, {}),
    cancel: (d) => au.forEach((f) => s[f].cancel(d)),
    state: i,
    steps: s,
  };
}
const { schedule: cm, cancel: VI } = wS(queueMicrotask, !1);
function LP(e, t, n, r) {
  const { visualElement: i } = _.useContext(qc),
    s = _.useContext(yS),
    o = _.useContext(Kc),
    a = _.useContext(om).reducedMotion,
    l = _.useRef();
  (r = r || s.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  _.useInsertionEffect(() => {
    u && u.update(n, o);
  });
  const c = _.useRef(!!(n[xS] && !window.HandoffComplete));
  return (
    lm(() => {
      u &&
        (cm.postRender(u.render),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    _.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function Os(e) {
  return e && typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current');
}
function AP(e, t, n) {
  return _.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == 'function' ? n(r) : Os(n) && (n.current = r));
    },
    [t],
  );
}
function ja(e) {
  return typeof e == 'string' || Array.isArray(e);
}
function Zc(e) {
  return e !== null && typeof e == 'object' && typeof e.start == 'function';
}
const dm = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
  fm = ['initial', ...dm];
function Qc(e) {
  return Zc(e.animate) || fm.some((t) => ja(e[t]));
}
function SS(e) {
  return !!(Qc(e) || e.variants);
}
function OP(e, t) {
  if (Qc(e)) {
    const { initial: n, animate: r } = e;
    return { initial: n === !1 || ja(n) ? n : void 0, animate: ja(r) ? r : void 0 };
  }
  return e.inherit !== !1 ? t : {};
}
function MP(e) {
  const { initial: t, animate: n } = OP(e, _.useContext(qc));
  return _.useMemo(() => ({ initial: t, animate: n }), [Bv(t), Bv(n)]);
}
function Bv(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
const Uv = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  Ia = {};
for (const e in Uv) Ia[e] = { isEnabled: (t) => Uv[e].some((n) => !!t[n]) };
function DP(e) {
  for (const t in e) Ia[t] = { ...Ia[t], ...e[t] };
}
const hm = _.createContext({}),
  ES = _.createContext({}),
  NP = Symbol.for('motionComponentSymbol');
function jP({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && DP(e);
  function s(a, l) {
    let u;
    const c = { ..._.useContext(om), ...a, layoutId: IP(a) },
      { isStatic: d } = c,
      f = MP(a),
      m = r(a, d);
    if (!d && am) {
      f.visualElement = LP(i, m, c, t);
      const v = _.useContext(ES),
        y = _.useContext(yS).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, y, e, v));
    }
    return E.jsxs(qc.Provider, {
      value: f,
      children: [
        u && f.visualElement ? E.jsx(u, { visualElement: f.visualElement, ...c }) : null,
        n(i, a, AP(m, f.visualElement, l), m, d, f.visualElement),
      ],
    });
  }
  const o = _.forwardRef(s);
  return (o[NP] = i), o;
}
function IP({ layoutId: e }) {
  const t = _.useContext(hm).id;
  return t && e !== void 0 ? t + '-' + e : e;
}
function FP(e) {
  function t(r, i = {}) {
    return jP(e(r, i));
  }
  if (typeof Proxy > 'u') return t;
  const n = new Map();
  return new Proxy(t, { get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)) });
}
const VP = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function pm(e) {
  return typeof e != 'string' || e.includes('-') ? !1 : !!(VP.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const sc = {};
function zP(e) {
  Object.assign(sc, e);
}
const El = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  cs = new Set(El);
function TS(e, { layout: t, layoutId: n }) {
  return (
    cs.has(e) || e.startsWith('origin') || ((t || n !== void 0) && (!!sc[e] || e === 'opacity'))
  );
}
const Ct = (e) => !!(e && e.getVelocity),
  BP = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
  UP = El.length;
function $P(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
  let s = '';
  for (let o = 0; o < UP; o++) {
    const a = El[o];
    if (e[a] !== void 0) {
      const l = BP[a] || a;
      s += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (s += 'translateZ(0)'),
    (s = s.trim()),
    i ? (s = i(e, r ? '' : s)) : n && r && (s = 'none'),
    s
  );
}
const bS = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  CS = bS('--'),
  HP = bS('var(--'),
  mm = (e) => (HP(e) ? WP.test(e.split('/*')[0].trim()) : !1),
  WP = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  GP = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  fi = (e, t, n) => (n > t ? t : n < e ? e : n),
  Co = { test: (e) => typeof e == 'number', parse: parseFloat, transform: (e) => e },
  da = { ...Co, transform: (e) => fi(0, 1, e) },
  lu = { ...Co, default: 1 },
  fa = (e) => Math.round(e * 1e5) / 1e5,
  gm = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  qP =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  KP =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Tl(e) {
  return typeof e == 'string';
}
const bl = (e) => ({
    test: (t) => Tl(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  jr = bl('deg'),
  nr = bl('%'),
  le = bl('px'),
  ZP = bl('vh'),
  QP = bl('vw'),
  $v = { ...nr, parse: (e) => nr.parse(e) / 100, transform: (e) => nr.transform(e * 100) },
  Hv = { ...Co, transform: Math.round },
  _S = {
    borderWidth: le,
    borderTopWidth: le,
    borderRightWidth: le,
    borderBottomWidth: le,
    borderLeftWidth: le,
    borderRadius: le,
    radius: le,
    borderTopLeftRadius: le,
    borderTopRightRadius: le,
    borderBottomRightRadius: le,
    borderBottomLeftRadius: le,
    width: le,
    maxWidth: le,
    height: le,
    maxHeight: le,
    size: le,
    top: le,
    right: le,
    bottom: le,
    left: le,
    padding: le,
    paddingTop: le,
    paddingRight: le,
    paddingBottom: le,
    paddingLeft: le,
    margin: le,
    marginTop: le,
    marginRight: le,
    marginBottom: le,
    marginLeft: le,
    rotate: jr,
    rotateX: jr,
    rotateY: jr,
    rotateZ: jr,
    scale: lu,
    scaleX: lu,
    scaleY: lu,
    scaleZ: lu,
    skew: jr,
    skewX: jr,
    skewY: jr,
    distance: le,
    translateX: le,
    translateY: le,
    translateZ: le,
    x: le,
    y: le,
    z: le,
    perspective: le,
    transformPerspective: le,
    opacity: da,
    originX: $v,
    originY: $v,
    originZ: le,
    zIndex: Hv,
    backgroundPositionX: le,
    backgroundPositionY: le,
    fillOpacity: da,
    strokeOpacity: da,
    numOctaves: Hv,
  };
function vm(e, t, n, r) {
  const { style: i, vars: s, transform: o, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (CS(d)) {
      s[d] = f;
      continue;
    }
    const m = _S[d],
      v = GP(f, m);
    if (cs.has(d)) {
      if (((l = !0), (o[d] = v), !c)) continue;
      f !== (m.default || 0) && (c = !1);
    } else d.startsWith('origin') ? ((u = !0), (a[d] = v)) : (i[d] = v);
  }
  if (
    (t.transform ||
      (l || r ? (i.transform = $P(e.transform, n, c, r)) : i.transform && (i.transform = 'none')),
    u)
  ) {
    const { originX: d = '50%', originY: f = '50%', originZ: m = 0 } = a;
    i.transformOrigin = `${d} ${f} ${m}`;
  }
}
const ym = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function PS(e, t, n) {
  for (const r in t) !Ct(t[r]) && !TS(r, n) && (e[r] = t[r]);
}
function YP({ transformTemplate: e }, t, n) {
  return _.useMemo(() => {
    const r = ym();
    return vm(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function XP(e, t, n) {
  const r = e.style || {},
    i = {};
  return PS(i, r, e), Object.assign(i, YP(e, t, n)), i;
}
function JP(e, t, n) {
  const r = {},
    i = XP(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = 'none'),
      (i.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const ek = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport',
]);
function oc(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    e.startsWith('onLayout') ||
    ek.has(e)
  );
}
let kS = (e) => !oc(e);
function tk(e) {
  e && (kS = (t) => (t.startsWith('on') ? !oc(t) : e(t)));
}
try {
  tk(require('@emotion/is-prop-valid').default);
} catch {}
function nk(e, t, n) {
  const r = {};
  for (const i in e)
    (i === 'values' && typeof e.values == 'object') ||
      ((kS(i) ||
        (n === !0 && oc(i)) ||
        (!t && !oc(i)) ||
        (e.draggable && i.startsWith('onDrag'))) &&
        (r[i] = e[i]));
  return r;
}
function Wv(e, t, n) {
  return typeof e == 'string' ? e : le.transform(t + n * e);
}
function rk(e, t, n) {
  const r = Wv(t, e.x, e.width),
    i = Wv(n, e.y, e.height);
  return `${r} ${i}`;
}
const ik = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  sk = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function ok(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? ik : sk;
  e[s.offset] = le.transform(-r);
  const o = le.transform(t),
    a = le.transform(n);
  e[s.array] = `${o} ${a}`;
}
function xm(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f,
) {
  if ((vm(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: v, dimensions: y } = e;
  m.transform && (y && (v.transform = m.transform), delete m.transform),
    y &&
      (i !== void 0 || s !== void 0 || v.transform) &&
      (v.transformOrigin = rk(y, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    o !== void 0 && ok(m, o, a, l, !1);
}
const RS = () => ({ ...ym(), attrs: {} }),
  wm = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function ak(e, t, n, r) {
  const i = _.useMemo(() => {
    const s = RS();
    return (
      xm(s, t, { enableHardwareAcceleration: !1 }, wm(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    PS(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function lk(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (pm(n) ? ak : JP)(r, s, o, n),
      u = nk(r, typeof n == 'string', e),
      c = n !== _.Fragment ? { ...u, ...l, ref: i } : {},
      { children: d } = r,
      f = _.useMemo(() => (Ct(d) ? d.get() : d), [d]);
    return _.createElement(n, { ...c, children: f });
  };
}
function LS(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const AS = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
]);
function OS(e, t, n, r) {
  LS(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(AS.has(i) ? i : um(i), t.attrs[i]);
}
function Sm(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (Ct(i[o]) ||
      (t.style && Ct(t.style[o])) ||
      TS(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !==
        void 0) &&
      (s[o] = i[o]);
  return s;
}
function MS(e, t, n) {
  const r = Sm(e, t, n);
  for (const i in e)
    if (Ct(e[i]) || Ct(t[i])) {
      const s = El.indexOf(i) !== -1 ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[s] = e[i];
    }
  return r;
}
function Em(e, t, n, r = {}, i = {}) {
  return (
    typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function DS(e) {
  const t = _.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const gh = (e) => Array.isArray(e),
  uk = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  ck = (e) => (gh(e) ? e[e.length - 1] || 0 : e);
function _u(e) {
  const t = Ct(e) ? e.get() : e;
  return uk(t) ? t.toValue() : t;
}
function dk({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, s) {
  const o = { latestValues: fk(r, i, s, e), renderState: t() };
  return n && (o.mount = (a) => n(r, a, o)), o;
}
const NS = (e) => (t, n) => {
  const r = _.useContext(qc),
    i = _.useContext(Kc),
    s = () => dk(e, t, r, i);
  return n ? s() : DS(s);
};
function fk(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const f in s) i[f] = _u(s[f]);
  let { initial: o, animate: a } = e;
  const l = Qc(e),
    u = SS(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? a : o;
  return (
    d &&
      typeof d != 'boolean' &&
      !Zc(d) &&
      (Array.isArray(d) ? d : [d]).forEach((m) => {
        const v = Em(e, m);
        if (!v) return;
        const { transitionEnd: y, transition: w, ...h } = v;
        for (const p in h) {
          let g = h[p];
          if (Array.isArray(g)) {
            const x = c ? g.length - 1 : 0;
            g = g[x];
          }
          g !== null && (i[p] = g);
        }
        for (const p in y) i[p] = y[p];
      }),
    i
  );
}
const _t = (e) => e,
  {
    schedule: ct,
    cancel: hi,
    state: gt,
    steps: zd,
  } = wS(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : _t, !0),
  hk = {
    useVisualState: NS({
      scrapeMotionValuesFromProps: MS,
      createRenderState: RS,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        ct.read(() => {
          try {
            n.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          ct.render(() => {
            xm(n, r, { enableHardwareAcceleration: !1 }, wm(t.tagName), e.transformTemplate),
              OS(t, n);
          });
      },
    }),
  },
  pk = { useVisualState: NS({ scrapeMotionValuesFromProps: Sm, createRenderState: ym }) };
function mk(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(pm(e) ? hk : pk),
    preloadedFeatures: n,
    useRender: lk(t),
    createVisualElement: r,
    Component: e,
  };
}
function vr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const jS = (e) =>
  e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1;
function Yc(e, t = 'page') {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const gk = (e) => (t) => jS(t) && e(t, Yc(t));
function wr(e, t, n, r) {
  return vr(e, t, gk(n), r);
}
const vk = (e, t) => (n) => t(e(n)),
  Sr = (...e) => e.reduce(vk);
function IS(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Gv = IS('dragHorizontal'),
  qv = IS('dragVertical');
function FS(e) {
  let t = !1;
  if (e === 'y') t = qv();
  else if (e === 'x') t = Gv();
  else {
    const n = Gv(),
      r = qv();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function VS() {
  const e = FS(!0);
  return e ? (e(), !1) : !0;
}
class bi {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Kv(e, t) {
  const n = t ? 'pointerenter' : 'pointerleave',
    r = t ? 'onHoverStart' : 'onHoverEnd',
    i = (s, o) => {
      if (s.pointerType === 'touch' || VS()) return;
      const a = e.getProps();
      e.animationState && a.whileHover && e.animationState.setActive('whileHover', t);
      const l = a[r];
      l && l(s, o);
    };
  return wr(e.current, n, i, { passive: !e.getProps()[r] });
}
class yk extends bi {
  mount() {
    this.unmount = Sr(Kv(this.node, !0), Kv(this.node, !1));
  }
  unmount() {}
}
class xk extends bi {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(':focus-visible');
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = Sr(
      vr(this.node.current, 'focus', () => this.onFocus()),
      vr(this.node.current, 'blur', () => this.onBlur()),
    );
  }
  unmount() {}
}
const zS = (e, t) => (t ? (e === t ? !0 : zS(e, t.parentElement)) : !1);
function Bd(e, t) {
  if (!t) return;
  const n = new PointerEvent('pointer' + e);
  t(n, Yc(n));
}
class wk extends bi {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = _t),
      (this.removeEndListeners = _t),
      (this.removeAccessibleListeners = _t),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          s = wr(
            window,
            'pointerup',
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c, globalTapTarget: d } = this.node.getProps();
              !d && !zS(this.node.current, a.target) ? c && c(a, l) : u && u(a, l);
            },
            { passive: !(r.onTap || r.onPointerUp) },
          ),
          o = wr(window, 'pointercancel', (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Sr(s, o)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (s) => {
            if (s.key !== 'Enter' || this.isPressing) return;
            const o = (a) => {
              a.key !== 'Enter' ||
                !this.checkPressEnd() ||
                Bd('up', (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && c(l, u);
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = vr(this.node.current, 'keyup', o)),
              Bd('down', (a, l) => {
                this.startPress(a, l);
              });
          },
          n = vr(this.node.current, 'keydown', t),
          r = () => {
            this.isPressing && Bd('cancel', (s, o) => this.cancelPress(s, o));
          },
          i = vr(this.node.current, 'blur', r);
        this.removeAccessibleListeners = Sr(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
      r && r(t, n);
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !VS()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && r(t, n);
  }
  mount() {
    const t = this.node.getProps(),
      n = wr(
        t.globalTapTarget ? window : this.node.current,
        'pointerdown',
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) },
      ),
      r = vr(this.node.current, 'focus', this.startAccessiblePress);
    this.removeStartListeners = Sr(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const vh = new WeakMap(),
  Ud = new WeakMap(),
  Sk = (e) => {
    const t = vh.get(e.target);
    t && t(e);
  },
  Ek = (e) => {
    e.forEach(Sk);
  };
function Tk({ root: e, ...t }) {
  const n = e || document;
  Ud.has(n) || Ud.set(n, {});
  const r = Ud.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Ek, { root: e, ...t })), r[i];
}
function bk(e, t, n) {
  const r = Tk(t);
  return (
    vh.set(e, n),
    r.observe(e),
    () => {
      vh.delete(e), r.unobserve(e);
    }
  );
}
const Ck = { some: 0, all: 1 };
class _k extends bi {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = 'some', once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == 'number' ? i : Ck[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || ((this.isInView = u), s && !u && this.hasEnteredView)) return;
        u && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive('whileInView', u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return bk(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: t, prevProps: n } = this.node;
    ['amount', 'margin', 'root'].some(Pk(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Pk({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const kk = {
  inView: { Feature: _k },
  tap: { Feature: wk },
  focus: { Feature: xk },
  hover: { Feature: yk },
};
function BS(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Rk(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function Lk(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Xc(e, t, n) {
  const r = e.getProps();
  return Em(r, t, n !== void 0 ? n : r.custom, Rk(e), Lk(e));
}
const li = (e) => e * 1e3,
  Er = (e) => e / 1e3,
  Ak = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  Ok = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Mk = { type: 'keyframes', duration: 0.8 },
  Dk = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Nk = (e, { keyframes: t }) =>
    t.length > 2 ? Mk : cs.has(e) ? (e.startsWith('scale') ? Ok(t[1]) : Ak) : Dk;
function jk({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Tm(e, t) {
  return e[t] || e.default || e;
}
const Ik = (e) => e !== null;
function Jc(e, { repeat: t, repeatType: n = 'loop' }, r) {
  const i = e.filter(Ik),
    s = t && n !== 'loop' && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
let Pu;
function Fk() {
  Pu = void 0;
}
const ui = {
    now: () => (
      Pu === void 0 &&
        ui.set(gt.isProcessing || PP.useManualTiming ? gt.timestamp : performance.now()),
      Pu
    ),
    set: (e) => {
      (Pu = e), queueMicrotask(Fk);
    },
  },
  US = (e) => /^0[^.\s]+$/u.test(e);
function Vk(e) {
  return typeof e == 'number' ? e === 0 : e !== null ? e === 'none' || e === '0' || US(e) : !0;
}
let yh = _t;
const $S = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  zk = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Bk(e) {
  const t = zk.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function HS(e, t, n = 1) {
  const [r, i] = Bk(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return $S(o) ? parseFloat(o) : o;
  }
  return mm(i) ? HS(i, t, n + 1) : i;
}
const Uk = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
    'translateX',
    'translateY',
  ]),
  Zv = (e) => e === Co || e === le,
  Qv = (e, t) => parseFloat(e.split(', ')[t]),
  Yv =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === 'none' || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Qv(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Qv(s[1], e) : 0;
      }
    },
  $k = new Set(['x', 'y', 'z']),
  Hk = El.filter((e) => !$k.has(e));
function Wk(e) {
  const t = [];
  return (
    Hk.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
    }),
    t
  );
}
const po = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Yv(4, 13),
  y: Yv(5, 14),
};
po.translateX = po.x;
po.translateY = po.y;
const WS = (e) => (t) => t.test(e),
  Gk = { test: (e) => e === 'auto', parse: (e) => e },
  GS = [Co, le, nr, jr, QP, ZP, Gk],
  Xv = (e) => GS.find(WS(e)),
  Zi = new Set();
let xh = !1,
  wh = !1;
function qS() {
  if (wh) {
    const e = Array.from(Zi).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = Wk(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (wh = !1), (xh = !1), Zi.forEach((e) => e.complete()), Zi.clear();
}
function KS() {
  Zi.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (wh = !0);
  });
}
function qk() {
  KS(), qS();
}
class bm {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Zi.add(this), xh || ((xh = !0), ct.read(KS), ct.resolveKeyframes(qS)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Zi.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Zi.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Cm = (e, t) => (n) =>
    !!(
      (Tl(n) && KP.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  ZS = (e, t, n) => (r) => {
    if (!Tl(r)) return r;
    const [i, s, o, a] = r.match(gm);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Kk = (e) => fi(0, 255, e),
  $d = { ...Co, transform: (e) => Math.round(Kk(e)) },
  Ii = {
    test: Cm('rgb', 'red'),
    parse: ZS('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      'rgba(' +
      $d.transform(e) +
      ', ' +
      $d.transform(t) +
      ', ' +
      $d.transform(n) +
      ', ' +
      fa(da.transform(r)) +
      ')',
  };
function Zk(e) {
  let t = '',
    n = '',
    r = '',
    i = '';
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Sh = { test: Cm('#'), parse: Zk, transform: Ii.transform },
  Ms = {
    test: Cm('hsl', 'hue'),
    parse: ZS('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      nr.transform(fa(t)) +
      ', ' +
      nr.transform(fa(n)) +
      ', ' +
      fa(da.transform(r)) +
      ')',
  },
  Tt = {
    test: (e) => Ii.test(e) || Sh.test(e) || Ms.test(e),
    parse: (e) => (Ii.test(e) ? Ii.parse(e) : Ms.test(e) ? Ms.parse(e) : Sh.parse(e)),
    transform: (e) => (Tl(e) ? e : e.hasOwnProperty('red') ? Ii.transform(e) : Ms.transform(e)),
  };
function Qk(e) {
  var t, n;
  return (
    isNaN(e) &&
    Tl(e) &&
    (((t = e.match(gm)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(qP)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const QS = 'number',
  YS = 'color',
  Yk = 'var',
  Xk = 'var(',
  Jv = '${}',
  Jk =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ac(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      Jk,
      (l) => (
        Tt.test(l)
          ? (r.color.push(s), i.push(YS), n.push(Tt.parse(l)))
          : l.startsWith(Xk)
          ? (r.var.push(s), i.push(Yk), n.push(l))
          : (r.number.push(s), i.push(QS), n.push(parseFloat(l))),
        ++s,
        Jv
      ),
    )
    .split(Jv);
  return { values: n, split: a, indexes: r, types: i };
}
function XS(e) {
  return ac(e).values;
}
function JS(e) {
  const { split: t, types: n } = ac(e),
    r = t.length;
  return (i) => {
    let s = '';
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === QS ? (s += fa(i[o])) : a === YS ? (s += Tt.transform(i[o])) : (s += i[o]);
      }
    return s;
  };
}
const eR = (e) => (typeof e == 'number' ? 0 : e);
function tR(e) {
  const t = XS(e);
  return JS(e)(t.map(eR));
}
const pi = { test: Qk, parse: XS, createTransformer: JS, getAnimatableNone: tR },
  nR = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function rR(e) {
  const [t, n] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  const [r] = n.match(gm) || [];
  if (!r) return e;
  const i = n.replace(r, '');
  let s = nR.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + '(' + s + i + ')';
}
const iR = /\b([a-z-]*)\(.*?\)/gu,
  Eh = {
    ...pi,
    getAnimatableNone: (e) => {
      const t = e.match(iR);
      return t ? t.map(rR).join(' ') : e;
    },
  },
  sR = {
    ..._S,
    color: Tt,
    backgroundColor: Tt,
    outlineColor: Tt,
    fill: Tt,
    stroke: Tt,
    borderColor: Tt,
    borderTopColor: Tt,
    borderRightColor: Tt,
    borderBottomColor: Tt,
    borderLeftColor: Tt,
    filter: Eh,
    WebkitFilter: Eh,
  },
  _m = (e) => sR[e];
function e1(e, t) {
  let n = _m(e);
  return n !== Eh && (n = pi), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
function oR(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; )
    typeof e[r] == 'string' && e[r] !== 'none' && e[r] !== '0' && (i = e[r]), r++;
  if (i && n) for (const s of t) e[s] = e1(n, i);
}
class t1 extends bm {
  constructor(t, n, r, i) {
    super(t, n, r, i, i == null ? void 0 : i.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      const u = t[l];
      if (typeof u == 'string' && mm(u)) {
        const c = HS(u, n.current);
        c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (!Uk.has(r) || t.length !== 2) return this.resolveNoneKeyframes();
    const [i, s] = t,
      o = Xv(i),
      a = Xv(s);
    if (o !== a)
      if (Zv(o) && Zv(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == 'string' && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) Vk(t[i]) && r.push(i);
    r.length && oR(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current) return;
    r === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = po[r](t.measureViewportBox(), window.getComputedStyle(t.current))),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    (i[o] = po[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function aR(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const ey = (e, t) =>
  t === 'zIndex'
    ? !1
    : !!(
        typeof e == 'number' ||
        Array.isArray(e) ||
        (typeof e == 'string' && (pi.test(e) || e === '0') && !e.startsWith('url('))
      );
function lR(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function uR(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  const s = e[e.length - 1],
    o = ey(i, t),
    a = ey(s, t);
  return !o || !a ? !1 : lR(e) || (n === 'spring' && r);
}
class n1 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = 'keyframes',
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = 'loop',
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && qk(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !uR(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        l == null || l(Jc(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }), this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function r1(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const cR = 5;
function i1(e, t, n) {
  const r = Math.max(t - cR, 0);
  return r1(n - e(r), t - r);
}
const Hd = 0.001,
  dR = 0.01,
  fR = 10,
  hR = 0.05,
  pR = 1;
function mR({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let i,
    s,
    o = 1 - t;
  (o = fi(hR, pR, o)),
    (e = fi(dR, fR, Er(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            d = c * e,
            f = c - n,
            m = Th(u, o),
            v = Math.exp(-d);
          return Hd - (f / m) * v;
        }),
        (s = (u) => {
          const d = u * o * e,
            f = d * n + n,
            m = Math.pow(o, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            y = Th(Math.pow(u, 2), o);
          return ((-i(u) + Hd > 0 ? -1 : 1) * ((f - m) * v)) / y;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Hd + c * d;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = vR(i, s, a);
  if (((e = li(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const gR = 12;
function vR(e, t, n) {
  let r = n;
  for (let i = 1; i < gR; i++) r = r - e(r) / t(r);
  return r;
}
function Th(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const yR = ['duration', 'bounce'],
  xR = ['stiffness', 'damping', 'mass'];
function ty(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function wR(e) {
  let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
  if (!ty(e, xR) && ty(e, yR)) {
    const n = mR(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function s1({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    s = e[e.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = wR({ ...r, velocity: -Er(r.velocity || 0) }),
    m = d || 0,
    v = l / (2 * Math.sqrt(a * u)),
    y = s - i,
    w = Er(Math.sqrt(a / u)),
    h = Math.abs(y) < 5;
  n || (n = h ? 0.01 : 2), t || (t = h ? 0.005 : 0.5);
  let p;
  if (v < 1) {
    const g = Th(w, v);
    p = (x) => {
      const T = Math.exp(-v * w * x);
      return s - T * (((m + v * w * y) / g) * Math.sin(g * x) + y * Math.cos(g * x));
    };
  } else if (v === 1) p = (g) => s - Math.exp(-w * g) * (y + (m + w * y) * g);
  else {
    const g = w * Math.sqrt(v * v - 1);
    p = (x) => {
      const T = Math.exp(-v * w * x),
        A = Math.min(g * x, 300);
      return s - (T * ((m + v * w * y) * Math.sinh(A) + g * y * Math.cosh(A))) / g;
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (g) => {
      const x = p(g);
      if (f) o.done = g >= c;
      else {
        let T = m;
        g !== 0 && (v < 1 ? (T = i1(p, g, x)) : (T = 0));
        const A = Math.abs(T) <= n,
          S = Math.abs(s - x) <= t;
        o.done = A && S;
      }
      return (o.value = o.done ? s : x), o;
    },
  };
}
function ny({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    m = (b) => (a !== void 0 && b < a) || (l !== void 0 && b > l),
    v = (b) => (a === void 0 ? l : l === void 0 || Math.abs(a - b) < Math.abs(l - b) ? a : l);
  let y = n * t;
  const w = d + y,
    h = o === void 0 ? w : o(w);
  h !== w && (y = h - d);
  const p = (b) => -y * Math.exp(-b / r),
    g = (b) => h + p(b),
    x = (b) => {
      const L = p(b),
        P = g(b);
      (f.done = Math.abs(L) <= u), (f.value = f.done ? h : P);
    };
  let T, A;
  const S = (b) => {
    m(f.value) &&
      ((T = b),
      (A = s1({
        keyframes: [f.value, v(f.value)],
        velocity: i1(g, b, f.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    S(0),
    {
      calculatedDuration: null,
      next: (b) => {
        let L = !1;
        return (
          !A && T === void 0 && ((L = !0), x(b), S(b)),
          T !== void 0 && b >= T ? A.next(b - T) : (!L && x(b), f)
        );
      },
    }
  );
}
const o1 = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  SR = 1e-7,
  ER = 12;
function TR(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = o1(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > SR && ++a < ER);
  return o;
}
function Cl(e, t, n, r) {
  if (e === t && n === r) return _t;
  const i = (s) => TR(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : o1(i(s), t, r));
}
const bR = Cl(0.42, 0, 1, 1),
  CR = Cl(0, 0, 0.58, 1),
  a1 = Cl(0.42, 0, 0.58, 1),
  _R = (e) => Array.isArray(e) && typeof e[0] != 'number',
  l1 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  u1 = (e) => (t) => 1 - e(1 - t),
  Pm = (e) => 1 - Math.sin(Math.acos(e)),
  c1 = u1(Pm),
  PR = l1(Pm),
  d1 = Cl(0.33, 1.53, 0.69, 0.99),
  km = u1(d1),
  kR = l1(km),
  RR = (e) => ((e *= 2) < 1 ? 0.5 * km(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  ry = {
    linear: _t,
    easeIn: bR,
    easeInOut: a1,
    easeOut: CR,
    circIn: Pm,
    circInOut: PR,
    circOut: c1,
    backIn: km,
    backInOut: kR,
    backOut: d1,
    anticipate: RR,
  },
  iy = (e) => {
    if (Array.isArray(e)) {
      yh(e.length === 4);
      const [t, n, r, i] = e;
      return Cl(t, n, r, i);
    } else if (typeof e == 'string') return yh(ry[e] !== void 0), ry[e];
    return e;
  },
  Fa = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  $e = (e, t, n) => e + (t - e) * n;
function Wd(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function LR({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Wd(l, a, e + 1 / 3)), (s = Wd(l, a, e)), (o = Wd(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
const Gd = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  AR = [Sh, Ii, Ms],
  OR = (e) => AR.find((t) => t.test(e));
function sy(e) {
  const t = OR(e);
  let n = t.parse(e);
  return t === Ms && (n = LR(n)), n;
}
const oy = (e, t) => {
  const n = sy(e),
    r = sy(t),
    i = { ...n };
  return (s) => (
    (i.red = Gd(n.red, r.red, s)),
    (i.green = Gd(n.green, r.green, s)),
    (i.blue = Gd(n.blue, r.blue, s)),
    (i.alpha = $e(n.alpha, r.alpha, s)),
    Ii.transform(i)
  );
};
function bh(e, t) {
  return (n) => (n > 0 ? t : e);
}
function MR(e, t) {
  return (n) => $e(e, t, n);
}
function Rm(e) {
  return typeof e == 'number'
    ? MR
    : typeof e == 'string'
    ? mm(e)
      ? bh
      : Tt.test(e)
      ? oy
      : jR
    : Array.isArray(e)
    ? f1
    : typeof e == 'object'
    ? Tt.test(e)
      ? oy
      : DR
    : bh;
}
function f1(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => Rm(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function DR(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Rm(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function NR(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][i[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[s] = l), i[o]++;
  }
  return r;
}
const jR = (e, t) => {
  const n = pi.createTransformer(t),
    r = ac(e),
    i = ac(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? Sr(f1(NR(r, i), i.values), n)
    : bh(e, t);
};
function h1(e, t, n) {
  return typeof e == 'number' && typeof t == 'number' && typeof n == 'number'
    ? $e(e, t, n)
    : Rm(e)(e, t);
}
function IR(e, t, n) {
  const r = [],
    i = n || h1,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || _t : t;
      a = Sr(l, a);
    }
    r.push(a);
  }
  return r;
}
function FR(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((yh(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = IR(t, r, i),
    a = o.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Fa(e[c], e[c + 1], u);
      return o[c](d);
    };
  return n ? (u) => l(fi(e[0], e[s - 1], u)) : l;
}
function VR(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Fa(0, t, r);
    e.push($e(n, 1, i));
  }
}
function zR(e) {
  const t = [0];
  return VR(t, e.length - 1), t;
}
function BR(e, t) {
  return e.map((n) => n * t);
}
function UR(e, t) {
  return e.map(() => t || a1).splice(0, e.length - 1);
}
function lc({ duration: e = 300, keyframes: t, times: n, ease: r = 'easeInOut' }) {
  const i = _R(r) ? r.map(iy) : iy(r),
    s = { done: !1, value: t[0] },
    o = BR(n && n.length === t.length ? n : zR(t), e),
    a = FR(o, t, { ease: Array.isArray(i) ? i : UR(t, i) });
  return { calculatedDuration: e, next: (l) => ((s.value = a(l)), (s.done = l >= e), s) };
}
const ay = 2e4;
function $R(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < ay; ) (t += n), (r = e.next(t));
  return t >= ay ? 1 / 0 : t;
}
const HR = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ct.update(t, !0),
      stop: () => hi(t),
      now: () => (gt.isProcessing ? gt.timestamp : ui.now()),
    };
  },
  WR = { decay: ny, inertia: ny, tween: lc, keyframes: lc, spring: s1 },
  GR = (e) => e / 100;
class Lm extends n1 {
  constructor({ KeyframeResolver: t = bm, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = 'running'),
      (this.state = 'idle'),
      (this.stop = () => {
        if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')) return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: r, motionValue: i, keyframes: s } = this.options,
      o = (a, l) => this.onKeyframesResolved(a, l);
    r && i && i.owner
      ? (this.resolver = i.owner.resolveKeyframes(s, o, r, i))
      : (this.resolver = new t(s, o, r, i)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = 'keyframes',
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      a = WR[n] || lc;
    let l, u;
    a !== lc && typeof t[0] != 'number' && ((l = Sr(GR, h1(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    s === 'mirror' && (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = $R(c));
    const { calculatedDuration: d } = c,
      f = d + i,
      m = f * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: m,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === 'paused' || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: b } = this.options;
      return { done: !0, value: b[b.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return s.next(0);
    const { delay: f, repeat: m, repeatType: v, repeatDelay: y, onUpdate: w } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const h = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? h < 0 : h > c;
    (this.currentTime = Math.max(h, 0)),
      this.state === 'finished' && this.holdTime === null && (this.currentTime = c);
    let g = this.currentTime,
      x = s;
    if (m) {
      const b = Math.min(this.currentTime, c) / d;
      let L = Math.floor(b),
        P = b % 1;
      !P && b >= 1 && (P = 1),
        P === 1 && L--,
        (L = Math.min(L, m + 1)),
        !!(L % 2) &&
          (v === 'reverse' ? ((P = 1 - P), y && (P -= y / d)) : v === 'mirror' && (x = o)),
        (g = fi(0, 1, P) * d);
    }
    const T = p ? { done: !1, value: l[0] } : x.next(g);
    a && (T.value = a(T.value));
    let { done: A } = T;
    !p && u !== null && (A = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const S =
      this.holdTime === null && (this.state === 'finished' || (this.state === 'running' && A));
    return (
      S && i !== void 0 && (T.value = Jc(l, this.options, i)),
      w && w(T.value),
      S && this.finish(),
      T
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Er(t.calculatedDuration) : 0;
  }
  get time() {
    return Er(this.currentTime);
  }
  set time(t) {
    (t = li(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Er(this.currentTime));
  }
  play() {
    if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
      this.pendingPlayState = 'running';
      return;
    }
    if (this.isStopped) return;
    const { driver: t = HR, onPlay: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === 'finished') && (this.startTime = r),
      this.state === 'finished' && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = 'paused';
      return;
    }
    (this.state = 'paused'),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== 'running' && this.play(),
      (this.pendingPlayState = this.state = 'finished'),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = 'finished');
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = 'idle'),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const p1 = (e) => Array.isArray(e) && typeof e[0] == 'number';
function m1(e) {
  return !!(!e || (typeof e == 'string' && e in Am) || p1(e) || (Array.isArray(e) && e.every(m1)));
}
const Yo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Am = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: Yo([0, 0.65, 0.55, 1]),
    circOut: Yo([0.55, 0, 1, 0.45]),
    backIn: Yo([0.31, 0.01, 0.66, -0.59]),
    backOut: Yo([0.33, 1.53, 0.69, 0.99]),
  };
function qR(e) {
  return g1(e) || Am.easeOut;
}
function g1(e) {
  if (e) return p1(e) ? Yo(e) : Array.isArray(e) ? e.map(qR) : Am[e];
}
function KR(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = 'loop',
    ease: a,
    times: l,
  } = {},
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = g1(a);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? 'linear' : c,
      fill: 'both',
      iterations: s + 1,
      direction: o === 'reverse' ? 'alternate' : 'normal',
    })
  );
}
const ZR = aR(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  QR = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  uc = 10,
  YR = 2e4;
function XR(e) {
  return e.type === 'spring' || e.name === 'backgroundColor' || !m1(e.ease);
}
function JR(e, t) {
  const n = new Lm({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < YR; ) (r = n.sample(s)), i.push(r.value), (s += uc);
  return { times: void 0, keyframes: i, duration: s - uc, ease: 'linear' };
}
class ly extends n1 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: i } = this.options;
    (this.resolver = new t1(i, (s, o) => this.onKeyframesResolved(s, o), n, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let { duration: i = 300, times: s, ease: o, type: a, motionValue: l, name: u } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (XR(this.options)) {
      const { onComplete: d, onUpdate: f, motionValue: m, ...v } = this.options,
        y = JR(t, v);
      (t = y.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = y.duration),
        (s = y.times),
        (o = y.ease),
        (a = 'keyframes');
    }
    const c = KR(l.owner.current, u, t, { ...this.options, duration: i, times: s, ease: o });
    return (
      (c.startTime = ui.now()),
      this.pendingTimeline
        ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(Jc(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
          }),
      { animation: c, duration: i, times: s, type: a, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Er(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Er(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = li(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return 'idle';
    const { animation: n } = t;
    return n.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return _t;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return _t;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === 'finished' && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n, keyframes: r, duration: i, type: s, ease: o, times: a } = t;
    if (!(n.playState === 'idle' || n.playState === 'finished')) {
      if (this.time) {
        const { motionValue: l, onUpdate: u, onComplete: c, ...d } = this.options,
          f = new Lm({
            ...d,
            keyframes: r,
            duration: i,
            type: s,
            ease: o,
            times: a,
            isGenerator: !0,
          }),
          m = li(this.time);
        l.setWithVelocity(f.sample(m - uc).value, f.sample(m).value, uc);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: i, repeatType: s, damping: o, type: a } = t;
    return (
      ZR() &&
      r &&
      QR.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== 'mirror' &&
      o !== 0 &&
      a !== 'inertia'
    );
  }
}
const Om =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const a = Tm(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - li(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: 'easeOut',
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        o(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    jk(a) || (c = { ...c, ...Nk(e, c) }),
      c.duration && (c.duration = li(c.duration)),
      c.repeatDelay && (c.repeatDelay = li(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (d = !0)),
      d && !s && t.get() !== void 0)
    ) {
      const f = Jc(c.keyframes, a);
      if (f !== void 0) {
        ct.update(() => {
          c.onUpdate(f), c.onComplete();
        });
        return;
      }
    }
    return !s && ly.supports(c) ? new ly(c) : new Lm(c);
  };
function cc(e) {
  return !!(Ct(e) && e.add);
}
function Mm(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Dm(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Nm {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Mm(this.subscriptions, t), () => Dm(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const uy = 30,
  eL = (e) => !isNaN(parseFloat(e));
class tL {
  constructor(t, n = {}) {
    (this.version = '11.1.7'),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = ui.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.canTrackVelocity = eL(this.current)),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t), (this.updatedAt = ui.now());
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on('change', t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Nm());
    const r = this.events[t].add(n);
    return t === 'change'
      ? () => {
          r(),
            ct.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = ui.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > uy)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, uy);
    return r1(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Va(e, t) {
  return new tL(e, t);
}
function nL(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Va(n));
}
function rL(e, t) {
  const n = Xc(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = ck(s[o]);
    nL(e, o, a);
  }
}
function iL({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function v1(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  const u = e.getValue('willChange');
  r && (o = r);
  const c = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const m = e.getValue(f, (s = e.latestValues[f]) !== null && s !== void 0 ? s : null),
      v = l[f];
    if (v === void 0 || (d && iL(d, f))) continue;
    const y = { delay: n, elapsed: 0, ...Tm(o || {}, f) };
    let w = !1;
    if (window.HandoffAppearAnimations) {
      const g = e.getProps()[xS];
      if (g) {
        const x = window.HandoffAppearAnimations(g, f);
        x !== null && ((y.elapsed = x), (w = !0));
      }
    }
    m.start(Om(f, m, v, e.shouldReduceMotion && cs.has(f) ? { type: !1 } : y, e, w));
    const h = m.animation;
    h && (cc(u) && (u.add(f), h.then(() => u.remove(f))), c.push(h));
  }
  return (
    a &&
      Promise.all(c).then(() => {
        ct.update(() => {
          a && rL(e, a);
        });
      }),
    c
  );
}
function Ch(e, t, n = {}) {
  var r;
  const i = Xc(
    e,
    t,
    n.type === 'exit'
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(v1(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const { delayChildren: c = 0, staggerChildren: d, staggerDirection: f } = s;
            return sL(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [u, c] = l === 'beforeChildren' ? [o, a] : [a, o];
    return u().then(() => c());
  } else return Promise.all([o(), a(n.delay)]);
}
function sL(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(oL)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          o.push(Ch(u, t, { ...s, delay: n + l(c) }).then(() => u.notify('AnimationComplete', t)));
      }),
    Promise.all(o)
  );
}
function oL(e, t) {
  return e.sortNodePosition(t);
}
function aL(e, t, n = {}) {
  e.notify('AnimationStart', t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Ch(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == 'string') r = Ch(e, t, n);
  else {
    const i = typeof t == 'function' ? Xc(e, t, n.custom) : t;
    r = Promise.all(v1(e, i, n));
  }
  return r.then(() => {
    ct.postRender(() => {
      e.notify('AnimationComplete', t);
    });
  });
}
const lL = [...dm].reverse(),
  uL = dm.length;
function cL(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => aL(e, n, r)));
}
function dL(e) {
  let t = cL(e);
  const n = hL();
  let r = !0;
  const i = (l) => (u, c) => {
    var d;
    const f = Xc(
      e,
      c,
      l === 'exit'
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0,
    );
    if (f) {
      const { transition: m, transitionEnd: v, ...y } = f;
      u = { ...u, ...y, ...v };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const u = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      f = new Set();
    let m = {},
      v = 1 / 0;
    for (let w = 0; w < uL; w++) {
      const h = lL[w],
        p = n[h],
        g = u[h] !== void 0 ? u[h] : c[h],
        x = ja(g),
        T = h === l ? p.isActive : null;
      T === !1 && (v = w);
      let A = g === c[h] && g !== u[h] && x;
      if (
        (A && r && e.manuallyAnimateOnMount && (A = !1),
        (p.protectedKeys = { ...m }),
        (!p.isActive && T === null) || (!g && !p.prevProp) || Zc(g) || typeof g == 'boolean')
      )
        continue;
      let b = fL(p.prevProp, g) || (h === l && p.isActive && !A && x) || (w > v && x),
        L = !1;
      const P = Array.isArray(g) ? g : [g];
      let z = P.reduce(i(h), {});
      T === !1 && (z = {});
      const { prevResolvedValues: N = {} } = p,
        j = { ...N, ...z },
        G = (Q) => {
          (b = !0), f.has(Q) && ((L = !0), f.delete(Q)), (p.needsAnimating[Q] = !0);
          const he = e.getValue(Q);
          he && (he.liveStyle = !1);
        };
      for (const Q in j) {
        const he = z[Q],
          Re = N[Q];
        if (m.hasOwnProperty(Q)) continue;
        let D = !1;
        gh(he) && gh(Re) ? (D = !BS(he, Re)) : (D = he !== Re),
          D
            ? he != null
              ? G(Q)
              : f.add(Q)
            : he !== void 0 && f.has(Q)
            ? G(Q)
            : (p.protectedKeys[Q] = !0);
      }
      (p.prevProp = g),
        (p.prevResolvedValues = z),
        p.isActive && (m = { ...m, ...z }),
        r && e.blockInitialAnimation && (b = !1),
        b && (!A || L) && d.push(...P.map((Q) => ({ animation: Q, options: { type: h } })));
    }
    if (f.size) {
      const w = {};
      f.forEach((h) => {
        const p = e.getBaseTarget(h),
          g = e.getValue(h);
        g && (g.liveStyle = !0), (w[h] = p ?? null);
      }),
        d.push({ animation: w });
    }
    let y = !!d.length;
    return (
      r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (y = !1),
      (r = !1),
      y ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var m;
        return (m = f.animationState) === null || m === void 0 ? void 0 : m.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = o(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return { animateChanges: o, setActive: a, setAnimateFunction: s, getState: () => n };
}
function fL(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !BS(t, e) : !1;
}
function _i(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function hL() {
  return {
    animate: _i(!0),
    whileInView: _i(),
    whileHover: _i(),
    whileTap: _i(),
    whileDrag: _i(),
    whileFocus: _i(),
    exit: _i(),
  };
}
class pL extends bi {
  constructor(t) {
    super(t), t.animationState || (t.animationState = dL(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Zc(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let mL = 0;
class gL extends bi {
  constructor() {
    super(...arguments), (this.id = mL++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive('exit', !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const vL = { animation: { Feature: pL }, exit: { Feature: gL } },
  cy = (e, t) => Math.abs(e - t);
function yL(e, t) {
  const n = cy(e.x, t.x),
    r = cy(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class y1 {
  constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Kd(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          m = yL(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !m) return;
        const { point: v } = d,
          { timestamp: y } = gt;
        this.history.push({ ...v, timestamp: y });
        const { onStart: w, onMove: h } = this.handlers;
        f || (w && w(this.lastMoveEvent, d), (this.startEvent = this.lastMoveEvent)),
          h && h(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = qd(f, this.transformPagePoint)),
          ct.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: m, onSessionEnd: v, resumeAnimation: y } = this.handlers;
        if ((this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const w = Kd(
          d.type === 'pointercancel' ? this.lastMoveEventInfo : qd(f, this.transformPagePoint),
          this.history,
        );
        this.startEvent && m && m(d, w), v && v(d, w);
      }),
      !jS(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = Yc(t),
      a = qd(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = gt;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Kd(a, this.history)),
      (this.removeListeners = Sr(
        wr(this.contextWindow, 'pointermove', this.handlePointerMove),
        wr(this.contextWindow, 'pointerup', this.handlePointerUp),
        wr(this.contextWindow, 'pointercancel', this.handlePointerUp),
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), hi(this.updatePoint);
  }
}
function qd(e, t) {
  return t ? { point: t(e.point) } : e;
}
function dy(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Kd({ point: e }, t) {
  return { point: e, delta: dy(e, x1(t)), offset: dy(e, xL(t)), velocity: wL(t, 0.1) };
}
function xL(e) {
  return e[0];
}
function x1(e) {
  return e[e.length - 1];
}
function wL(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = x1(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > li(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = Er(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function on(e) {
  return e.max - e.min;
}
function _h(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function fy(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = $e(t.min, t.max, e.origin)),
    (e.scale = on(n) / on(t)),
    (_h(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = $e(n.min, n.max, e.origin) - e.originPoint),
    (_h(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ha(e, t, n, r) {
  fy(e.x, t.x, n.x, r ? r.originX : void 0), fy(e.y, t.y, n.y, r ? r.originY : void 0);
}
function hy(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + on(t));
}
function SL(e, t, n) {
  hy(e.x, t.x, n.x), hy(e.y, t.y, n.y);
}
function py(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + on(t));
}
function pa(e, t, n) {
  py(e.x, t.x, n.x), py(e.y, t.y, n.y);
}
function EL(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? $e(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? $e(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function my(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function TL(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: my(e.x, n, i), y: my(e.y, t, r) };
}
function gy(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function bL(e, t) {
  return { x: gy(e.x, t.x), y: gy(e.y, t.y) };
}
function CL(e, t) {
  let n = 0.5;
  const r = on(e),
    i = on(t);
  return (
    i > r ? (n = Fa(t.min, t.max - r, e.min)) : r > i && (n = Fa(e.min, e.max - i, t.min)),
    fi(0, 1, n)
  );
}
function _L(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
  );
}
const Ph = 0.35;
function PL(e = Ph) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ph),
    { x: vy(e, 'left', 'right'), y: vy(e, 'top', 'bottom') }
  );
}
function vy(e, t, n) {
  return { min: yy(e, t), max: yy(e, n) };
}
function yy(e, t) {
  return typeof e == 'number' ? e : e[t] || 0;
}
const xy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ds = () => ({ x: xy(), y: xy() }),
  wy = () => ({ min: 0, max: 0 }),
  Ze = () => ({ x: wy(), y: wy() });
function pn(e) {
  return [e('x'), e('y')];
}
function w1({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function kL({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function RL(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Zd(e) {
  return e === void 0 || e === 1;
}
function kh({ scale: e, scaleX: t, scaleY: n }) {
  return !Zd(e) || !Zd(t) || !Zd(n);
}
function Ri(e) {
  return kh(e) || S1(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function S1(e) {
  return Sy(e.x) || Sy(e.y);
}
function Sy(e) {
  return e && e !== '0%';
}
function dc(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Ey(e, t, n, r, i) {
  return i !== void 0 && (e = dc(e, i, r)), dc(e, n, r) + t;
}
function Rh(e, t = 0, n = 1, r, i) {
  (e.min = Ey(e.min, t, n, r, i)), (e.max = Ey(e.max, t, n, r, i));
}
function E1(e, { x: t, y: n }) {
  Rh(e.x, t.translate, t.scale, t.originPoint), Rh(e.y, n.translate, n.scale, n.originPoint);
}
function LL(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const l = s.instance;
    (l && l.style && l.style.display === 'contents') ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Ns(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), E1(e, o)),
      r && Ri(s.latestValues) && Ns(e, s.latestValues));
  }
  (t.x = Ty(t.x)), (t.y = Ty(t.y));
}
function Ty(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function zr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function by(e, t, [n, r, i]) {
  const s = t[i] !== void 0 ? t[i] : 0.5,
    o = $e(e.min, e.max, s);
  Rh(e, t[n], t[r], o, t.scale);
}
const AL = ['x', 'scaleX', 'originX'],
  OL = ['y', 'scaleY', 'originY'];
function Ns(e, t) {
  by(e.x, t, AL), by(e.y, t, OL);
}
function T1(e, t) {
  return w1(RL(e.getBoundingClientRect(), t));
}
function ML(e, t, n) {
  const r = T1(e, n),
    { scroll: i } = t;
  return i && (zr(r.x, i.offset.x), zr(r.y, i.offset.y)), r;
}
const b1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  DL = new WeakMap();
class NL {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ze()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Yc(c, 'page').point);
      },
      s = (c, d) => {
        const { drag: f, dragPropagation: m, onDragStart: v } = this.getProps();
        if (
          f &&
          !m &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = FS(f)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          pn((w) => {
            let h = this.getAxisMotionValue(w).get() || 0;
            if (nr.test(h)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const g = p.layout.layoutBox[w];
                g && (h = on(g) * (parseFloat(h) / 100));
              }
            }
            this.originPoint[w] = h;
          }),
          v && v(c, d);
        const { animationState: y } = this.visualElement;
        y && y.setActive('whileDrag', !0);
      },
      o = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: m,
          onDirectionLock: v,
          onDrag: y,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: w } = d;
        if (m && this.currentDirection === null) {
          (this.currentDirection = jL(w)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis('x', d.point, w),
          this.updateAxis('y', d.point, w),
          this.visualElement.render(),
          y && y(c, d);
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        pn((c) => {
          var d;
          return (
            this.getAnimationState(c) === 'paused' &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new y1(
      t,
      { onSessionStart: i, onStart: s, onMove: o, onSessionEnd: a, resumeAnimation: l },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: b1(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && s(t, n);
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive('whileDrag', !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !uu(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (o = EL(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && Os(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = TL(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = PL(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        pn((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = _L(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Os(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = ML(r, i.root, this.visualElement.getTransformPagePoint());
    let o = bL(i.layout.layoutBox, s);
    if (n) {
      const a = n(kL(o));
      (this.hasMutatedConstraints = !!a), a && (o = w1(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = pn((c) => {
        if (!uu(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        o && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          m = i ? 40 : 1e7,
          v = {
            type: 'inertia',
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Om(t, r, 0, n, this.visualElement));
  }
  stopAnimation() {
    pn((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    pn((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    pn((n) => {
      const { drag: r } = this.getProps();
      if (!uu(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - $e(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Os(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    pn((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = CL({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, '') : 'none'),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      pn((o) => {
        if (!uu(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set($e(l, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    DL.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = wr(t, 'pointerdown', (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Os(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener('measure', r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const o = vr(window, 'resize', () => this.scalePositionWithinConstraints()),
      a = i.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging &&
          u &&
          (pn((c) => {
            const d = this.getAxisMotionValue(c);
            d && ((this.originPoint[c] += l[c].translate), d.set(d.get() + l[c].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Ph,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function uu(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function jL(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n;
}
class IL extends bi {
  constructor(t) {
    super(t),
      (this.removeGroupControls = _t),
      (this.removeListeners = _t),
      (this.controls = new NL(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || _t);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Cy = (e) => (t, n) => {
  e && e(t, n);
};
class FL extends bi {
  constructor() {
    super(...arguments), (this.removePointerDownListener = _t);
  }
  onPointerDown(t) {
    this.session = new y1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: b1(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Cy(t),
      onStart: Cy(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && i(s, o);
      },
    };
  }
  mount() {
    this.removePointerDownListener = wr(this.node.current, 'pointerdown', (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function VL() {
  const e = _.useContext(Kc);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = _.useId();
  return _.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const ku = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function _y(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const $o = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == 'string')
        if (le.test(e)) e = parseFloat(e);
        else return e;
      const n = _y(e, t.target.x),
        r = _y(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  zL = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = pi.parse(e);
      if (i.length > 5) return r;
      const s = pi.createTransformer(e),
        o = typeof i[0] != 'number' ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const u = $e(a, l, 0.5);
      return (
        typeof i[2 + o] == 'number' && (i[2 + o] /= u),
        typeof i[3 + o] == 'number' && (i[3 + o] /= u),
        s(i)
      );
    },
  };
class BL extends _.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props,
      { projection: s } = t;
    zP(UL),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        s.setOptions({ ...s.options, onExitComplete: () => this.safeToRemove() })),
      (ku.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: s } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              ct.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      cm.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function C1(e) {
  const [t, n] = VL(),
    r = _.useContext(hm);
  return E.jsx(BL, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: _.useContext(ES),
    isPresent: t,
    safeToRemove: n,
  });
}
const UL = {
    borderRadius: {
      ...$o,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: $o,
    borderTopRightRadius: $o,
    borderBottomLeftRadius: $o,
    borderBottomRightRadius: $o,
    boxShadow: zL,
  },
  _1 = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  $L = _1.length,
  Py = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  ky = (e) => typeof e == 'number' || le.test(e);
function HL(e, t, n, r, i, s) {
  i
    ? ((e.opacity = $e(0, n.opacity !== void 0 ? n.opacity : 1, WL(r))),
      (e.opacityExit = $e(t.opacity !== void 0 ? t.opacity : 1, 0, GL(r))))
    : s &&
      (e.opacity = $e(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let o = 0; o < $L; o++) {
    const a = `border${_1[o]}Radius`;
    let l = Ry(t, a),
      u = Ry(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || ky(l) === ky(u)
        ? ((e[a] = Math.max($e(Py(l), Py(u), r), 0)), (nr.test(u) || nr.test(l)) && (e[a] += '%'))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = $e(t.rotate || 0, n.rotate || 0, r));
}
function Ry(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const WL = P1(0, 0.5, c1),
  GL = P1(0.5, 0.95, _t);
function P1(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Fa(e, t, r)));
}
function Ly(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function fn(e, t) {
  Ly(e.x, t.x), Ly(e.y, t.y);
}
function Ay(e, t, n, r, i) {
  return (e -= t), (e = dc(e, 1 / n, r)), i !== void 0 && (e = dc(e, 1 / i, r)), e;
}
function qL(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (nr.test(t) && ((t = parseFloat(t)), (t = $e(o.min, o.max, t / 100) - o.min)),
    typeof t != 'number')
  )
    return;
  let a = $e(s.min, s.max, r);
  e === s && (a -= t), (e.min = Ay(e.min, t, n, a, i)), (e.max = Ay(e.max, t, n, a, i));
}
function Oy(e, t, [n, r, i], s, o) {
  qL(e, t[n], t[r], t[i], t.scale, s, o);
}
const KL = ['x', 'scaleX', 'originX'],
  ZL = ['y', 'scaleY', 'originY'];
function My(e, t, n, r) {
  Oy(e.x, t, KL, n ? n.x : void 0, r ? r.x : void 0),
    Oy(e.y, t, ZL, n ? n.y : void 0, r ? r.y : void 0);
}
function Dy(e) {
  return e.translate === 0 && e.scale === 1;
}
function k1(e) {
  return Dy(e.x) && Dy(e.y);
}
function QL(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function R1(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Ny(e) {
  return on(e.x) / on(e.y);
}
class YL {
  constructor() {
    this.members = [];
  }
  add(t) {
    Mm(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if ((Dm(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function jy(e, t, n) {
  let r = '';
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: m, skewY: v } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      m && (r += `skewX(${m}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || 'none';
}
const XL = (e, t) => e.depth - t.depth;
class JL {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Mm(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Dm(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(XL), (this.isDirty = !1), this.children.forEach(t);
  }
}
function eA(e, t) {
  const n = ui.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (hi(r), e(s - t));
    };
  return ct.read(r, !0), () => hi(r);
}
function tA(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function nA(e) {
  return e instanceof SVGElement && e.tagName !== 'svg';
}
function rA(e, t, n) {
  const r = Ct(e) ? e : Va(e);
  return r.start(Om('', r, t, n)), r.animation;
}
const Qd = ['', 'X', 'Y', 'Z'],
  iA = { visibility: 'hidden' },
  Iy = 1e3;
let sA = 0;
const Li = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Yd(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function L1({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = sA++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (Li.totalNodes = Li.resolvedTargetDeltas = Li.recalculatedProjection = 0),
            this.nodes.forEach(lA),
            this.nodes.forEach(hA),
            this.nodes.forEach(pA),
            this.nodes.forEach(uA),
            tA(Li);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new JL());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Nm()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = nA(o)), (this.instance = o);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = eA(f, 250)),
            ku.hasAnimatedSinceResize && ((ku.hasAnimatedSinceResize = !1), this.nodes.forEach(Vy));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            'didUpdate',
            ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: m, layout: v }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const y = this.options.transition || c.getDefaultTransition() || xA,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: h } = c.getProps(),
                p = !this.targetLayout || !R1(this.targetLayout, v) || m,
                g = !f && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g);
                const x = { ...Tm(y, 'layout'), onPlay: w, onComplete: h };
                (c.shouldReduceMotion || this.options.layoutRoot) && ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                f || Vy(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = v;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        hi(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(mA), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll('snapshot'),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners('willUpdate');
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Fy);
        return;
      }
      this.isUpdating || this.nodes.forEach(dA),
        (this.isUpdating = !1),
        window.HandoffCancelAllAnimations && window.HandoffCancelAllAnimations(),
        this.nodes.forEach(fA),
        this.nodes.forEach(oA),
        this.nodes.forEach(aA),
        this.clearAllSnapshots();
      const a = ui.now();
      (gt.delta = fi(0, 1e3 / 60, a - gt.timestamp)),
        (gt.timestamp = a),
        (gt.isProcessing = !0),
        zd.update.process(gt),
        zd.preRender.process(gt),
        zd.render.process(gt),
        (gt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), cm.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(cA), this.sharedNodes.forEach(gA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), ct.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ct.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ze()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify('LayoutMeasure', this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = 'measure') {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === o &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: o,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const o = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !k1(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (a || Ri(this.latestValues) || c) &&
        (i(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        wA(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o) return Ze();
      const a = o.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (zr(a.x, l.offset.x), zr(a.y, l.offset.y)), a;
    }
    removeElementScroll(o) {
      const a = Ze();
      fn(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            fn(a, o);
            const { scroll: f } = this.root;
            f && (zr(a.x, -f.offset.x), zr(a.y, -f.offset.y));
          }
          zr(a.x, c.offset.x), zr(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = Ze();
      fn(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Ns(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Ri(c.latestValues) && Ns(l, c.latestValues);
      }
      return Ri(this.latestValues) && Ns(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = Ze();
      fn(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Ri(u.latestValues)) continue;
        kh(u.latestValues) && u.updateSnapshot();
        const c = Ze(),
          d = u.measurePageBox();
        fn(c, d), My(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Ri(this.latestValues) && My(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== gt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) && a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = gt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ze()),
              (this.relativeTargetOrigin = Ze()),
              pa(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox),
              fn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = Ze()), (this.targetWithTransforms = Ze())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                SL(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : fn(this.target, this.layout.layoutBox),
                E1(this.target, this.targetDelta))
              : fn(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Ze()),
                (this.relativeTargetOrigin = Ze()),
                pa(this.relativeTargetOrigin, this.target, m.target),
                fn(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Li.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || kh(this.parent.latestValues) || S1(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) && o.isProjectionDirty)) &&
          (u = !1),
        l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
        this.resolvedRelativeTargetAt === gt.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      fn(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        m = this.treeScale.y;
      LL(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Ze()));
      const { target: v } = a;
      if (!v) {
        this.projectionTransform &&
          ((this.projectionDelta = Ds()),
          (this.projectionTransform = 'none'),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Ds()), (this.projectionDeltaWithTransform = Ds()));
      const y = this.projectionTransform;
      ha(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.projectionTransform = jy(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== y || this.treeScale.x !== f || this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', v)),
        Li.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), o)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Ds();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Ze(),
        m = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        y = m !== v,
        w = this.getStack(),
        h = !w || w.members.length <= 1,
        p = !!(y && !h && this.options.crossfade === !0 && !this.path.some(yA));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (x) => {
        const T = x / 1e3;
        zy(d.x, o.x, T),
          zy(d.y, o.y, T),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (pa(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            vA(this.relativeTarget, this.relativeTargetOrigin, f, T),
            g && QL(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Ze()),
            fn(g, this.relativeTarget)),
          y && ((this.animationValues = c), HL(c, u, this.latestValues, T, p, h)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = T);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation && (hi(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ct.update(() => {
          (ku.hasAnimatedSinceResize = !0),
            (this.currentAnimation = rA(0, Iy, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners('animationComplete');
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Iy), this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          A1(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Ze();
          const d = on(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
          const f = on(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + f);
        }
        fn(a, l), Ns(a, c), ha(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new YL()), this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Yd('z', o, u, this.animationValues);
      for (let c = 0; c < Qd.length; c++)
        Yd(`rotate${Qd[c]}`, o, u, this.animationValues),
          Yd(`skew${Qd[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return iA;
      const u = { visibility: '' },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ''),
          (u.pointerEvents = _u(o == null ? void 0 : o.pointerEvents) || ''),
          (u.transform = c ? c(this.latestValues, '') : 'none'),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (y.pointerEvents = _u(o == null ? void 0 : o.pointerEvents) || '')),
          this.hasProjected &&
            !Ri(this.latestValues) &&
            ((y.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          y
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = jy(this.projectionDeltaWithTransform, this.treeScale, f)),
        c && (u.transform = c(f, u.transform));
      const { x: m, y: v } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${v.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !==
                    null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ''
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const y in sc) {
        if (f[y] === void 0) continue;
        const { correct: w, applyTo: h } = sc[y],
          p = u.transform === 'none' ? f[y] : w(f[y], d);
        if (h) {
          const g = h.length;
          for (let x = 0; x < g; x++) u[h[x]] = p;
        } else u[y] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? _u(o == null ? void 0 : o.pointerEvents) || '' : 'none'),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Fy),
        this.root.sharedNodes.clear();
    }
  };
}
function oA(e) {
  e.updateLayout();
}
function aA(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === 'size'
      ? pn((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            m = on(f);
          (f.min = r[d].min), (f.max = f.min + m);
        })
      : A1(s, n.layoutBox, r) &&
        pn((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            m = on(r[d]);
          (f.max = f.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0), (e.relativeTarget[d].max = e.relativeTarget[d].min + m));
        });
    const a = Ds();
    ha(a, r, n.layoutBox);
    const l = Ds();
    o ? ha(l, e.applyTransform(i, !0), n.measuredBox) : ha(l, r, n.layoutBox);
    const u = !k1(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: m } = d;
        if (f && m) {
          const v = Ze();
          pa(v, n.layoutBox, f.layoutBox);
          const y = Ze();
          pa(y, r, m.layoutBox),
            R1(v, y) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = y), (e.relativeTargetOrigin = v), (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function lA(e) {
  Li.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function uA(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function cA(e) {
  e.clearSnapshot();
}
function Fy(e) {
  e.clearMeasurements();
}
function dA(e) {
  e.isLayoutDirty = !1;
}
function fA(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform();
}
function Vy(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function hA(e) {
  e.resolveTargetDelta();
}
function pA(e) {
  e.calcProjection();
}
function mA(e) {
  e.resetSkewAndRotation();
}
function gA(e) {
  e.removeLeadSnapshot();
}
function zy(e, t, n) {
  (e.translate = $e(t.translate, 0, n)),
    (e.scale = $e(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function By(e, t, n, r) {
  (e.min = $e(t.min, n.min, r)), (e.max = $e(t.max, n.max, r));
}
function vA(e, t, n, r) {
  By(e.x, t.x, n.x, r), By(e.y, t.y, n.y, r);
}
function yA(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const xA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Uy = (e) =>
    typeof navigator < 'u' && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
  $y = Uy('applewebkit/') && !Uy('chrome/') ? Math.round : _t;
function Hy(e) {
  (e.min = $y(e.min)), (e.max = $y(e.max));
}
function wA(e) {
  Hy(e.x), Hy(e.y);
}
function A1(e, t, n) {
  return e === 'position' || (e === 'preserve-aspect' && !_h(Ny(t), Ny(n), 0.2));
}
const SA = L1({
    attachResizeListener: (e, t) => vr(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Xd = { current: void 0 },
  O1 = L1({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Xd.current) {
        const e = new SA({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Xd.current = e);
      }
      return Xd.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none';
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
  }),
  EA = { pan: { Feature: FL }, drag: { Feature: IL, ProjectionNode: O1, MeasureLayout: C1 } },
  Lh = { current: null },
  M1 = { current: !1 };
function TA() {
  if (((M1.current = !0), !!am))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (Lh.current = e.matches);
      e.addListener(t), t();
    } else Lh.current = !1;
}
function bA(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const s = t[i],
      o = n[i];
    if (Ct(s)) e.addValue(i, s), cc(r) && r.add(i);
    else if (Ct(o)) e.addValue(i, Va(s, { owner: e })), cc(r) && r.remove(i);
    else if (o !== s)
      if (e.hasValue(i)) {
        const a = e.getValue(i);
        a.liveStyle === !0 ? a.jump(s) : a.hasAnimated || a.set(s);
      } else {
        const a = e.getStaticValue(i);
        e.addValue(i, Va(a !== void 0 ? a : s, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const Wy = new WeakMap(),
  CA = [...GS, Tt, pi],
  _A = (e) => CA.find(WS(e)),
  D1 = Object.keys(Ia),
  PA = D1.length,
  Gy = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ],
  kA = fm.length;
function N1(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : N1(e.parent);
}
class RA {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {},
  ) {
    (this.resolveKeyframes = (f, m, v, y) => new this.KeyframeResolver(f, m, v, y, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = bm),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.scheduleRender = () => ct.render(this.render, !1, !0));
    const { latestValues: l, renderState: u } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Qc(n)),
      (this.isVariantNode = SS(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in d) {
      const m = d[f];
      l[f] !== void 0 && Ct(m) && (m.set(l[f], !1), cc(c) && c.add(f));
    }
  }
  mount(t) {
    (this.current = t),
      Wy.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      M1.current || TA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : Lh.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    Wy.delete(this.current),
      this.projection && this.projection.unmount(),
      hi(this.notifyUpdate),
      hi(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) (t = this.features[n]) === null || t === void 0 || t.unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = cs.has(t),
      i = n.on('change', (o) => {
        (this.latestValues[t] = o),
          this.props.onUpdate && ct.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on('renderRequest', this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, s) {
    let o, a;
    for (let l = 0; l < PA; l++) {
      const u = D1[l],
        { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: m } = Ia[u];
      f && (o = f),
        c(n) && (!this.features[u] && d && (this.features[u] = new d(this)), m && (a = m));
    }
    if ((this.type === 'html' || this.type === 'svg') && !this.projection && o) {
      this.projection = new o(this.latestValues, N1(this.parent));
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: m,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && Os(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == 'string' ? u : 'both',
        initialPromotionConfig: s,
        layoutScroll: f,
        layoutRoot: m,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ze();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Gy.length; r++) {
      const i = Gy[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const s = 'on' + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = bA(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
    }
    const n = {};
    for (let r = 0; r < kA; r++) {
      const i = fm[r],
        s = this.props[i];
      (ja(s) || s === !1) && (n[i] = s);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Va(n === null ? void 0 : n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == 'string' && ($S(i) || US(i))
          ? (i = parseFloat(i))
          : !_A(i) && pi.test(n) && (i = e1(t, n)),
        this.setBaseTarget(t, Ct(i) ? i.get() : i)),
      Ct(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == 'string' || typeof r == 'object') {
      const o = Em(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Ct(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Nm()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class j1 extends RA {
  constructor() {
    super(...arguments), (this.KeyframeResolver = t1);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function LA(e) {
  return window.getComputedStyle(e);
}
class AA extends j1 {
  constructor() {
    super(...arguments), (this.type = 'html');
  }
  readValueFromInstance(t, n) {
    if (cs.has(n)) {
      const r = _m(n);
      return (r && r.default) || 0;
    } else {
      const r = LA(t),
        i = (CS(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == 'string' ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return T1(t, n);
  }
  build(t, n, r, i) {
    vm(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Sm(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ct(t) &&
      (this.childSubscription = t.on('change', (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    LS(t, n, r, i);
  }
}
class OA extends j1 {
  constructor() {
    super(...arguments), (this.type = 'svg'), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (cs.has(n)) {
      const r = _m(n);
      return (r && r.default) || 0;
    }
    return (n = AS.has(n) ? n : um(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Ze();
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return MS(t, n, r);
  }
  build(t, n, r, i) {
    xm(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    OS(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = wm(t.tagName)), super.mount(t);
  }
}
const MA = (e, t) =>
    pm(e)
      ? new OA(t, { enableHardwareAcceleration: !1 })
      : new AA(t, { allowProjection: e !== _.Fragment, enableHardwareAcceleration: !0 }),
  DA = { layout: { ProjectionNode: O1, MeasureLayout: C1 } },
  NA = { ...vL, ...kk, ...EA, ...DA },
  I1 = FP((e, t) => mk(e, t, NA, MA));
function F1() {
  const e = _.useRef(!1);
  return (
    lm(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
function jA() {
  const e = F1(),
    [t, n] = _.useState(0),
    r = _.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [_.useCallback(() => ct.postRender(r), [r]), t];
}
class IA extends _.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function FA({ children: e, isPresent: t }) {
  const n = _.useId(),
    r = _.useRef(null),
    i = _.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: s } = _.useContext(om);
  return (
    _.useInsertionEffect(() => {
      const { width: o, height: a, top: l, left: u } = i.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement('style');
      return (
        s && (c.nonce = s),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    E.jsx(IA, { isPresent: t, childRef: r, sizeRef: i, children: _.cloneElement(e, { ref: r }) })
  );
}
const Jd = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const a = DS(VA),
    l = _.useId(),
    u = _.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          a.set(c, !0);
          for (const d of a.values()) if (!d) return;
          r && r();
        },
        register: (c) => (a.set(c, !1), () => a.delete(c)),
      }),
      s ? [Math.random()] : [n],
    );
  return (
    _.useMemo(() => {
      a.forEach((c, d) => a.set(d, !1));
    }, [n]),
    _.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === 'popLayout' && (e = E.jsx(FA, { isPresent: n, children: e })),
    E.jsx(Kc.Provider, { value: u, children: e })
  );
};
function VA() {
  return new Map();
}
function zA(e) {
  return _.useEffect(() => () => e(), []);
}
const Ai = (e) => e.key || '';
function BA(e, t) {
  e.forEach((n) => {
    const r = Ai(n);
    t.set(r, n);
  });
}
function UA(e) {
  const t = [];
  return (
    _.Children.forEach(e, (n) => {
      _.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const V1 = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: s = !0,
  mode: o = 'sync',
}) => {
  const a = _.useContext(hm).forceRender || jA()[0],
    l = F1(),
    u = UA(e);
  let c = u;
  const d = _.useRef(new Map()).current,
    f = _.useRef(c),
    m = _.useRef(new Map()).current,
    v = _.useRef(!0);
  if (
    (lm(() => {
      (v.current = !1), BA(u, m), (f.current = c);
    }),
    zA(() => {
      (v.current = !0), m.clear(), d.clear();
    }),
    v.current)
  )
    return E.jsx(E.Fragment, {
      children: c.map((p) =>
        E.jsx(
          Jd,
          {
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: s,
            mode: o,
            children: p,
          },
          Ai(p),
        ),
      ),
    });
  c = [...c];
  const y = f.current.map(Ai),
    w = u.map(Ai),
    h = y.length;
  for (let p = 0; p < h; p++) {
    const g = y[p];
    w.indexOf(g) === -1 && !d.has(g) && d.set(g, void 0);
  }
  return (
    o === 'wait' && d.size && (c = []),
    d.forEach((p, g) => {
      if (w.indexOf(g) !== -1) return;
      const x = m.get(g);
      if (!x) return;
      const T = y.indexOf(g);
      let A = p;
      if (!A) {
        const S = () => {
          d.delete(g);
          const b = Array.from(m.keys()).filter((L) => !w.includes(L));
          if (
            (b.forEach((L) => m.delete(L)),
            (f.current = u.filter((L) => {
              const P = Ai(L);
              return P === g || b.includes(P);
            })),
            !d.size)
          ) {
            if (l.current === !1) return;
            a(), r && r();
          }
        };
        (A = E.jsx(
          Jd,
          {
            isPresent: !1,
            onExitComplete: S,
            custom: t,
            presenceAffectsLayout: s,
            mode: o,
            children: x,
          },
          Ai(x),
        )),
          d.set(g, A);
      }
      c.splice(T, 0, A);
    }),
    (c = c.map((p) => {
      const g = p.key;
      return d.has(g)
        ? p
        : E.jsx(Jd, { isPresent: !0, presenceAffectsLayout: s, mode: o, children: p }, Ai(p));
    })),
    E.jsx(E.Fragment, { children: d.size ? c : c.map((p) => _.cloneElement(p)) })
  );
};
var $A = { BASE_URL: '/', MODE: 'production', DEV: !1, PROD: !0, SSR: !1 };
const qy = (e) => {
    let t;
    const n = new Set(),
      r = (c, d) => {
        const f = typeof c == 'function' ? c(t) : c;
        if (!Object.is(f, t)) {
          const m = t;
          (t = d ?? (typeof f != 'object' || f === null) ? f : Object.assign({}, t, f)),
            n.forEach((v) => v(t, m));
        }
      },
      i = () => t,
      l = {
        setState: r,
        getState: i,
        getInitialState: () => u,
        subscribe: (c) => (n.add(c), () => n.delete(c)),
        destroy: () => {
          ($A ? 'production' : void 0) !== 'production' &&
            console.warn(
              '[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.',
            ),
            n.clear();
        },
      },
      u = (t = e(r, i, l));
    return l;
  },
  HA = (e) => (e ? qy(e) : qy);
var z1 = { exports: {} },
  B1 = {},
  U1 = { exports: {} },
  $1 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mo = _;
function WA(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var GA = typeof Object.is == 'function' ? Object.is : WA,
  qA = mo.useState,
  KA = mo.useEffect,
  ZA = mo.useLayoutEffect,
  QA = mo.useDebugValue;
function YA(e, t) {
  var n = t(),
    r = qA({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    s = r[1];
  return (
    ZA(
      function () {
        (i.value = n), (i.getSnapshot = t), ef(i) && s({ inst: i });
      },
      [e, n, t],
    ),
    KA(
      function () {
        return (
          ef(i) && s({ inst: i }),
          e(function () {
            ef(i) && s({ inst: i });
          })
        );
      },
      [e],
    ),
    QA(n),
    n
  );
}
function ef(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !GA(e, n);
  } catch {
    return !0;
  }
}
function XA(e, t) {
  return t();
}
var JA =
  typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'
    ? XA
    : YA;
$1.useSyncExternalStore = mo.useSyncExternalStore !== void 0 ? mo.useSyncExternalStore : JA;
U1.exports = $1;
var eO = U1.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed = _,
  tO = eO;
function nO(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rO = typeof Object.is == 'function' ? Object.is : nO,
  iO = tO.useSyncExternalStore,
  sO = ed.useRef,
  oO = ed.useEffect,
  aO = ed.useMemo,
  lO = ed.useDebugValue;
B1.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var s = sO(null);
  if (s.current === null) {
    var o = { hasValue: !1, value: null };
    s.current = o;
  } else o = s.current;
  s = aO(
    function () {
      function l(m) {
        if (!u) {
          if (((u = !0), (c = m), (m = r(m)), i !== void 0 && o.hasValue)) {
            var v = o.value;
            if (i(v, m)) return (d = v);
          }
          return (d = m);
        }
        if (((v = d), rO(c, m))) return v;
        var y = r(m);
        return i !== void 0 && i(v, y) ? v : ((c = m), (d = y));
      }
      var u = !1,
        c,
        d,
        f = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        f === null
          ? void 0
          : function () {
              return l(f());
            },
      ];
    },
    [t, n, r, i],
  );
  var a = iO(e, s[0], s[1]);
  return (
    oO(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a],
    ),
    lO(a),
    a
  );
};
z1.exports = B1;
var uO = z1.exports;
const cO = rp(uO);
var H1 = { BASE_URL: '/', MODE: 'production', DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: dO } = Te,
  { useSyncExternalStoreWithSelector: fO } = cO;
let Ky = !1;
const hO = (e) => e;
function pO(e, t = hO, n) {
  (H1 ? 'production' : void 0) !== 'production' &&
    n &&
    !Ky &&
    (console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937",
    ),
    (Ky = !0));
  const r = fO(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
  return dO(r), r;
}
const Zy = (e) => {
    (H1 ? 'production' : void 0) !== 'production' &&
      typeof e != 'function' &&
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.",
      );
    const t = typeof e == 'function' ? HA(e) : e,
      n = (r, i) => pO(t, r, i);
    return Object.assign(n, t), n;
  },
  jm = (e) => (e ? Zy(e) : Zy),
  Vt = jm((e) => ({
    activeLang: { title: 'Ру', localization: 'ru' },
    setLang: (t) => {
      e((n) => ({ activeLang: (n.activeLang = t) }));
    },
  })),
  mO = [
    { title: 'Ру', localization: 'ru' },
    { title: 'En', localization: 'en' },
  ],
  gO = () => {
    const [e, t] = _.useState(!1),
      [n, r] = _.useState(!1),
      i = _.useRef(null),
      s = Vt((l) => l.activeLang),
      o = Vt((l) => l.setLang),
      a = (l) => {
        t(!1), o(l);
      };
    return (
      Te.useEffect(() => {
        const l = (u) => {
          i.current && !i.current.contains(u.target) && (t(!1), r(!1));
        };
        return (
          document.addEventListener('click', l), () => document.removeEventListener('click', l)
        );
      }, []),
      E.jsxs('div', {
        ref: i,
        className: 'relative cursor-pointer flex items-center gap-x-[20px]',
        onClick: () => {
          t(!e), r(!n);
        },
        children: [
          E.jsxs('div', {
            className: 'flex items-center px-[12px]',
            children: [
              E.jsx('p', { className: 'text-[16px]', children: s.title }),
              E.jsx('img', {
                src: '../assets/icons/drop-icon.svg',
                alt: '',
                className: Gt('transition-rotate duration-300 img-auto', { 'rotate-180': n }),
              }),
            ],
          }),
          E.jsx(V1, {
            children:
              e &&
              E.jsx(I1.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.2 },
                className:
                  'absolute overflow-hidden z-10 flex flex-col top-[28px] bg-purple transition-all duration-300',
                children: mO
                  .filter((l) => l.title !== s.title)
                  .map((l) =>
                    E.jsx(
                      'div',
                      {
                        onClick: () => a(l),
                        className: Gt('p-3 text-[16px] pr-[22px] transition-all', {
                          'hover:bg-[#704B95]': l.title === l.title,
                        }),
                        children: l.title,
                      },
                      Nn(),
                    ),
                  ),
              }),
          }),
        ],
      })
    );
  },
  W1 = [
    { title: 'Новости', titleEn: 'News', link: '/' },
    { title: 'FAQ', titleEn: 'FAQ', link: '/' },
    { title: 'Контакты', titleEn: 'Contacts', link: '/' },
    { en: !0, title: 'News', link: '/' },
    { en: !0, title: 'FAQ', link: '/' },
    { en: !0, title: 'Contacts', link: '/' },
  ],
  G1 = [
    { title: 'Выставка', link: '/about-exhibition' },
    { title: 'Участникам', link: '/participants-apply' },
    { title: 'Посетителям', link: '/' },
    { en: !0, title: 'Exhibition', link: '/about-exhibition' },
    { en: !0, title: 'Participants', link: '/participants-apply' },
    { en: !0, title: 'For visitors', link: '/' },
  ],
  vO = () => {
    const e = Vt((n) => n.activeLang.localization),
      t = (n, r) => (e === 'en' ? n : r);
    return E.jsxs('header', {
      className: 'relative z-[3000] flex-col',
      children: [
        E.jsx('div', {
          className:
            'hidden tab:flex items-center bg-purple text-white py-[12px] font-regular text-extraSm',
          children: E.jsxs('div', {
            className: 'container flex items-center justify-between',
            children: [
              E.jsx('p', {
                className: 'text-[13px] leading-[115%]',
                children: t('Phone: +99363006200', 'Тел.: +99362006200'),
              }),
              E.jsxs('div', {
                className: 'flex items-center gap-[6px]',
                children: [
                  E.jsx('div', {
                    className: 'hidden tab:flex items-center gap-x-[20px]',
                    children: W1.filter((n) => (e === 'en' ? n.en : !n.en)).map((n) =>
                      E.jsx(
                        'div',
                        {
                          children: E.jsx(Tn, {
                            to: '',
                            className: Gt(
                              'after:transition-all cursor-pointer duration-1000 relative leading-[130%]',
                              {
                                'hover:link-border-bottom text-[16px] hover:after:bg-[#738799]':
                                  n.title === n.title,
                              },
                            ),
                            children: n.title,
                          }),
                        },
                        n.link,
                      ),
                    ),
                  }),
                  E.jsx('div', { className: 'flex gap-[10px]', children: E.jsx(gO, {}) }),
                ],
              }),
            ],
          }),
        }),
        E.jsx('div', {
          className: 'bg-white text-black drop-shadow-headerShadow',
          children: E.jsxs('div', {
            className: 'container py-[5px] flex items-center justify-between',
            children: [
              E.jsxs(Tn, {
                to: '/',
                className: 'flex',
                children: [
                  E.jsx('img', {
                    src: '/assets/icons/flower-toy.svg',
                    width: 65,
                    height: 65,
                    alt: 'logo',
                    className: 'mr-[5px]',
                  }),
                  E.jsxs('div', {
                    className: '',
                    children: [
                      E.jsx('p', {
                        className: 'text-#050505 font-bold text-[12px]',
                        children: t('19-22 August, 2024', '19–22 августа 2024'),
                      }),
                      E.jsx('img', { src: '/assets/icons/kids-expo.svg', alt: '' }),
                    ],
                  }),
                ],
              }),
              E.jsx('div', {
                className: 'hidden tab:flex text-[16px] items-center gap-x-[20px] font-medium',
                children: G1.filter((n) => (e === 'en' ? n.en : !n.en)).map((n) =>
                  E.jsx(Tn, { to: n.link, className: 'cursor-pointer', children: n.title }, n.link),
                ),
              }),
              E.jsxs('div', {
                className:
                  'flex flex-col tab:hidden cursor-pointer h-8 w-8 p-1 justify-between items-center',
                children: [
                  E.jsx('span', {
                    className: Gt('block transition-all rounded-full bg-purple w-6 h-[2px]', {}),
                  }),
                  E.jsx('span', {
                    className: Gt('block transition-all rounded-full bg-purple w-6 h-[2px]', {}),
                  }),
                  E.jsx('span', {
                    className: Gt(
                      'block transition-all duration-300 rounded-full bg-purple w-6 h-[2px]',
                      {},
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  yO = () => {
    const e = Vt((n) => n.activeLang.localization),
      t = (n, r) => (e === 'en' ? n : r);
    return E.jsx('footer', {
      className: 'bg-purple text-white2',
      children: E.jsxs('div', {
        className: 'container py-10',
        children: [
          E.jsxs('div', {
            className: 'flex sm:flex-row flex-col justify-between mb-[60px]',
            children: [
              E.jsxs('div', {
                className: 'text-[14px] font-medium mb-10 md:mb-0',
                children: [
                  E.jsx('p', { className: 'mb-5', children: t('Organizers: ', 'Организаторы: ') }),
                  E.jsx('img', {
                    src: '../assets/icons/text-logo.svg',
                    className: 'mb-[10px]',
                    alt: '',
                  }),
                  E.jsxs('div', {
                    className: 'flex items-center gap-[10px] w-[260px]',
                    children: [
                      E.jsx('img', { src: '../assets/icons/footer-logo.png', alt: '' }),
                      E.jsx('p', {
                        className: 'leading-[120%] font-medium',
                        children: t(
                          'The Chamber of Commerce and Industry of Turkmenistan',
                          'Торгово-промышленная палата Туркменистана',
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              E.jsx('div', {
                className: 'w-full mb-10 md:mb-0 max-w-[290px] flex flex-col gap-[10px]',
                children: G1.filter((n) => (e === 'en' ? n.en : !n.en)).map((n) =>
                  E.jsx(Tn, { to: n.link, children: n.title }, n.link),
                ),
              }),
              E.jsx('div', {
                className: 'w-full max-w-[290px] flex flex-col gap-[10px]',
                children: W1.filter((n) => (e === 'en' ? n.en : !n.en)).map((n) =>
                  E.jsx(Tn, { to: n.link, children: n.title }, n.link),
                ),
              }),
            ],
          }),
          E.jsx('hr', { className: 'w-full border-[1px] border-[#AAAAAA] mb-[17px]' }),
          E.jsx('p', {
            className: 'text-center text-white text-[12px]',
            children: t('©2024 IE «TurkmenExpo» ', '© 2024 ИП “ТуркменЭкспо”'),
          }),
        ],
      }),
    });
  },
  xO = () =>
    E.jsxs('div', {
      className: 'overflow-x-hidden h-full',
      children: [E.jsx(vO, {}), E.jsx(eP, {}), E.jsx(yO, {})],
    });
var _l = class {
    constructor() {
      (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  go = typeof window > 'u' || 'Deno' in globalThis;
function vn() {}
function wO(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Ah(e) {
  return typeof e == 'number' && e >= 0 && e !== 1 / 0;
}
function q1(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Qy(e, t) {
  const { type: n = 'all', exact: r, fetchStatus: i, predicate: s, queryKey: o, stale: a } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Im(o, t.options)) return !1;
    } else if (!Ba(t.queryKey, o)) return !1;
  }
  if (n !== 'all') {
    const l = t.isActive();
    if ((n === 'active' && !l) || (n === 'inactive' && l)) return !1;
  }
  return !(
    (typeof a == 'boolean' && t.isStale() !== a) ||
    (i && i !== t.state.fetchStatus) ||
    (s && !s(t))
  );
}
function Yy(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (za(t.options.mutationKey) !== za(s)) return !1;
    } else if (!Ba(t.options.mutationKey, s)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function Im(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || za)(e);
}
function za(e) {
  return JSON.stringify(e, (t, n) =>
    Mh(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n,
  );
}
function Ba(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == 'object' && typeof t == 'object'
    ? !Object.keys(t).some((n) => !Ba(e[n], t[n]))
    : !1;
}
function K1(e, t) {
  if (e === t) return e;
  const n = Xy(e) && Xy(t);
  if (n || (Mh(e) && Mh(t))) {
    const r = n ? e : Object.keys(e),
      i = r.length,
      s = n ? t : Object.keys(t),
      o = s.length,
      a = n ? [] : {};
    let l = 0;
    for (let u = 0; u < o; u++) {
      const c = n ? u : s[u];
      !n && e[c] === void 0 && t[c] === void 0 && r.includes(c)
        ? ((a[c] = void 0), l++)
        : ((a[c] = K1(e[c], t[c])), a[c] === e[c] && e[c] !== void 0 && l++);
    }
    return i === o && l === i ? e : a;
  }
  return t;
}
function Oh(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Xy(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Mh(e) {
  if (!Jy(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(!Jy(n) || !n.hasOwnProperty('isPrototypeOf'));
}
function Jy(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function SO(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Dh(e, t, n) {
  return typeof n.structuralSharing == 'function'
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? K1(e, t)
    : t;
}
function EO(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function TO(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Fm = Symbol(),
  Vi,
  Hr,
  Gs,
  D0,
  bO =
    ((D0 = class extends _l {
      constructor() {
        super();
        oe(this, Vi, void 0);
        oe(this, Hr, void 0);
        oe(this, Gs, void 0);
        re(this, Gs, (t) => {
          if (!go && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener('visibilitychange', n, !1),
              () => {
                window.removeEventListener('visibilitychange', n);
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, Hr) || this.setEventListener(R(this, Gs));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = R(this, Hr)) == null || t.call(this), re(this, Hr, void 0));
      }
      setEventListener(t) {
        var n;
        re(this, Gs, t),
          (n = R(this, Hr)) == null || n.call(this),
          re(
            this,
            Hr,
            t((r) => {
              typeof r == 'boolean' ? this.setFocused(r) : this.onFocus();
            }),
          );
      }
      setFocused(t) {
        R(this, Vi) !== t && (re(this, Vi, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof R(this, Vi) == 'boolean'
          ? R(this, Vi)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== 'hidden';
      }
    }),
    (Vi = new WeakMap()),
    (Hr = new WeakMap()),
    (Gs = new WeakMap()),
    D0),
  Vm = new bO(),
  qs,
  Wr,
  Ks,
  N0,
  CO =
    ((N0 = class extends _l {
      constructor() {
        super();
        oe(this, qs, !0);
        oe(this, Wr, void 0);
        oe(this, Ks, void 0);
        re(this, Ks, (t) => {
          if (!go && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener('online', n, !1),
              window.addEventListener('offline', r, !1),
              () => {
                window.removeEventListener('online', n), window.removeEventListener('offline', r);
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, Wr) || this.setEventListener(R(this, Ks));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = R(this, Wr)) == null || t.call(this), re(this, Wr, void 0));
      }
      setEventListener(t) {
        var n;
        re(this, Ks, t),
          (n = R(this, Wr)) == null || n.call(this),
          re(this, Wr, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        R(this, qs) !== t &&
          (re(this, qs, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return R(this, qs);
      }
    }),
    (qs = new WeakMap()),
    (Wr = new WeakMap()),
    (Ks = new WeakMap()),
    N0),
  fc = new CO();
function _O(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Z1(e) {
  return (e ?? 'online') === 'online' ? fc.isOnline() : !0;
}
var Q1 = class {
  constructor(e) {
    (this.revert = e == null ? void 0 : e.revert), (this.silent = e == null ? void 0 : e.silent);
  }
};
function tf(e) {
  return e instanceof Q1;
}
function Y1(e) {
  let t = !1,
    n = 0,
    r = !1,
    i,
    s,
    o;
  const a = new Promise((h, p) => {
      (s = h), (o = p);
    }),
    l = (h) => {
      var p;
      r || (v(new Q1(h)), (p = e.abort) == null || p.call(e));
    },
    u = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    d = () => Vm.isFocused() && (e.networkMode === 'always' || fc.isOnline()) && e.canRun(),
    f = () => Z1(e.networkMode) && e.canRun(),
    m = (h) => {
      var p;
      r || ((r = !0), (p = e.onSuccess) == null || p.call(e, h), i == null || i(), s(h));
    },
    v = (h) => {
      var p;
      r || ((r = !0), (p = e.onError) == null || p.call(e, h), i == null || i(), o(h));
    },
    y = () =>
      new Promise((h) => {
        var p;
        (i = (g) => {
          (r || d()) && h(g);
        }),
          (p = e.onPause) == null || p.call(e);
      }).then(() => {
        var h;
        (i = void 0), r || (h = e.onContinue) == null || h.call(e);
      }),
    w = () => {
      if (r) return;
      let h;
      try {
        h = e.fn();
      } catch (p) {
        h = Promise.reject(p);
      }
      Promise.resolve(h)
        .then(m)
        .catch((p) => {
          var S;
          if (r) return;
          const g = e.retry ?? (go ? 0 : 3),
            x = e.retryDelay ?? _O,
            T = typeof x == 'function' ? x(n, p) : x,
            A = g === !0 || (typeof g == 'number' && n < g) || (typeof g == 'function' && g(n, p));
          if (t || !A) {
            v(p);
            return;
          }
          n++,
            (S = e.onFail) == null || S.call(e, n, p),
            SO(T)
              .then(() => (d() ? void 0 : y()))
              .then(() => {
                t ? v(p) : w();
              });
        });
    };
  return {
    promise: a,
    cancel: l,
    continue: () => (i == null || i(), a),
    cancelRetry: u,
    continueRetry: c,
    canStart: f,
    start: () => (f() ? w() : y().then(w), a),
  };
}
function PO() {
  let e = [],
    t = 0,
    n = (f) => {
      f();
    },
    r = (f) => {
      f();
    },
    i = (f) => setTimeout(f, 0);
  const s = (f) => {
      i = f;
    },
    o = (f) => {
      let m;
      t++;
      try {
        m = f();
      } finally {
        t--, t || u();
      }
      return m;
    },
    a = (f) => {
      t
        ? e.push(f)
        : i(() => {
            n(f);
          });
    },
    l =
      (f) =>
      (...m) => {
        a(() => {
          f(...m);
        });
      },
    u = () => {
      const f = e;
      (e = []),
        f.length &&
          i(() => {
            r(() => {
              f.forEach((m) => {
                n(m);
              });
            });
          });
    };
  return {
    batch: o,
    batchCalls: l,
    schedule: a,
    setNotifyFunction: (f) => {
      n = f;
    },
    setBatchNotifyFunction: (f) => {
      r = f;
    },
    setScheduler: s,
  };
}
var vt = PO(),
  zi,
  j0,
  X1 =
    ((j0 = class {
      constructor() {
        oe(this, zi, void 0);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Ah(this.gcTime) &&
            re(
              this,
              zi,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (go ? 1 / 0 : 5 * 60 * 1e3));
      }
      clearGcTimeout() {
        R(this, zi) && (clearTimeout(R(this, zi)), re(this, zi, void 0));
      }
    }),
    (zi = new WeakMap()),
    j0),
  Zs,
  Qs,
  mn,
  Mt,
  il,
  Bi,
  Ln,
  ur,
  I0,
  kO =
    ((I0 = class extends X1 {
      constructor(t) {
        super();
        oe(this, Ln);
        oe(this, Zs, void 0);
        oe(this, Qs, void 0);
        oe(this, mn, void 0);
        oe(this, Mt, void 0);
        oe(this, il, void 0);
        oe(this, Bi, void 0);
        re(this, Bi, !1),
          re(this, il, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          re(this, mn, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          re(this, Zs, t.state || RO(this.options)),
          (this.state = R(this, Zs)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      setOptions(t) {
        (this.options = { ...R(this, il), ...t }), this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length && this.state.fetchStatus === 'idle' && R(this, mn).remove(this);
      }
      setData(t, n) {
        const r = Dh(this.state.data, t, this.options);
        return (
          Ee(this, Ln, ur).call(this, {
            data: r,
            type: 'success',
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Ee(this, Ln, ur).call(this, { type: 'setState', state: t, setStateOptions: n });
      }
      cancel(t) {
        var r, i;
        const n = (r = R(this, Mt)) == null ? void 0 : r.promise;
        return (
          (i = R(this, Mt)) == null || i.cancel(t), n ? n.then(vn).catch(vn) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(R(this, Zs));
      }
      isActive() {
        return this.observers.some((t) => t.options.enabled !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive();
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated || this.state.data === void 0 || !q1(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }), (n = R(this, Mt)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }), (n = R(this, Mt)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          R(this, mn).notify({ type: 'observerAdded', query: this, observer: t }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (R(this, Mt) &&
              (R(this, Bi) ? R(this, Mt).cancel({ revert: !0 }) : R(this, Mt).cancelRetry()),
            this.scheduleGc()),
          R(this, mn).notify({ type: 'observerRemoved', query: this, observer: t }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated || Ee(this, Ln, ur).call(this, { type: 'invalidate' });
      }
      fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== 'idle') {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (R(this, Mt)) return R(this, Mt).continueRetry(), R(this, Mt).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((m) => m.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          i = { queryKey: this.queryKey, meta: this.meta },
          s = (f) => {
            Object.defineProperty(f, 'signal', {
              enumerable: !0,
              get: () => (re(this, Bi, !0), r.signal),
            });
          };
        s(i);
        const o = () =>
            !this.options.queryFn || this.options.queryFn === Fm
              ? Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`))
              : (re(this, Bi, !1),
                this.options.persister
                  ? this.options.persister(this.options.queryFn, i, this)
                  : this.options.queryFn(i)),
          a = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: o,
          };
        s(a),
          (u = this.options.behavior) == null || u.onFetch(a, this),
          re(this, Qs, this.state),
          (this.state.fetchStatus === 'idle' ||
            this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            Ee(this, Ln, ur).call(this, {
              type: 'fetch',
              meta: (d = a.fetchOptions) == null ? void 0 : d.meta,
            });
        const l = (f) => {
          var m, v, y, w;
          (tf(f) && f.silent) || Ee(this, Ln, ur).call(this, { type: 'error', error: f }),
            tf(f) ||
              ((v = (m = R(this, mn).config).onError) == null || v.call(m, f, this),
              (w = (y = R(this, mn).config).onSettled) == null ||
                w.call(y, this.state.data, f, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        };
        return (
          re(
            this,
            Mt,
            Y1({
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var m, v, y, w;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                this.setData(f),
                  (v = (m = R(this, mn).config).onSuccess) == null || v.call(m, f, this),
                  (w = (y = R(this, mn).config).onSettled) == null ||
                    w.call(y, f, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: l,
              onFail: (f, m) => {
                Ee(this, Ln, ur).call(this, { type: 'failed', failureCount: f, error: m });
              },
              onPause: () => {
                Ee(this, Ln, ur).call(this, { type: 'pause' });
              },
              onContinue: () => {
                Ee(this, Ln, ur).call(this, { type: 'continue' });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            }),
          ),
          R(this, Mt).start()
        );
      }
    }),
    (Zs = new WeakMap()),
    (Qs = new WeakMap()),
    (mn = new WeakMap()),
    (Mt = new WeakMap()),
    (il = new WeakMap()),
    (Bi = new WeakMap()),
    (Ln = new WeakSet()),
    (ur = function (t) {
      const n = (r) => {
        switch (t.type) {
          case 'failed':
            return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
          case 'pause':
            return { ...r, fetchStatus: 'paused' };
          case 'continue':
            return { ...r, fetchStatus: 'fetching' };
          case 'fetch':
            return { ...r, ...J1(r.data, this.options), fetchMeta: t.meta ?? null };
          case 'success':
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: 'success',
              ...(!t.manual && {
                fetchStatus: 'idle',
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case 'error':
            const i = t.error;
            return tf(i) && i.revert && R(this, Qs)
              ? { ...R(this, Qs), fetchStatus: 'idle' }
              : {
                  ...r,
                  error: i,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: 'idle',
                  status: 'error',
                };
          case 'invalidate':
            return { ...r, isInvalidated: !0 };
          case 'setState':
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        vt.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            R(this, mn).notify({ query: this, type: 'updated', action: t });
        });
    }),
    I0);
function J1(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Z1(t.networkMode) ? 'fetching' : 'paused',
    ...(e === void 0 && { error: null, status: 'pending' }),
  };
}
function RO(e) {
  const t = typeof e.initialData == 'function' ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == 'function'
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? 'success' : 'pending',
    fetchStatus: 'idle',
  };
}
var Gn,
  F0,
  LO =
    ((F0 = class extends _l {
      constructor(t = {}) {
        super();
        oe(this, Gn, void 0);
        (this.config = t), re(this, Gn, new Map());
      }
      build(t, n, r) {
        const i = n.queryKey,
          s = n.queryHash ?? Im(i, n);
        let o = this.get(s);
        return (
          o ||
            ((o = new kO({
              cache: this,
              queryKey: i,
              queryHash: s,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(i),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        R(this, Gn).has(t.queryHash) ||
          (R(this, Gn).set(t.queryHash, t), this.notify({ type: 'added', query: t }));
      }
      remove(t) {
        const n = R(this, Gn).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && R(this, Gn).delete(t.queryHash),
          this.notify({ type: 'removed', query: t }));
      }
      clear() {
        vt.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return R(this, Gn).get(t);
      }
      getAll() {
        return [...R(this, Gn).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Qy(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Qy(t, r)) : n;
      }
      notify(t) {
        vt.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        vt.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        vt.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Gn = new WeakMap()),
    F0),
  qn,
  Dt,
  Ui,
  Kn,
  Ir,
  V0,
  AO =
    ((V0 = class extends X1 {
      constructor(t) {
        super();
        oe(this, Kn);
        oe(this, qn, void 0);
        oe(this, Dt, void 0);
        oe(this, Ui, void 0);
        (this.mutationId = t.mutationId),
          re(this, Dt, t.mutationCache),
          re(this, qn, []),
          (this.state = t.state || OO()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        R(this, qn).includes(t) ||
          (R(this, qn).push(t),
          this.clearGcTimeout(),
          R(this, Dt).notify({ type: 'observerAdded', mutation: this, observer: t }));
      }
      removeObserver(t) {
        re(
          this,
          qn,
          R(this, qn).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          R(this, Dt).notify({ type: 'observerRemoved', mutation: this, observer: t });
      }
      optionalRemove() {
        R(this, qn).length ||
          (this.state.status === 'pending' ? this.scheduleGc() : R(this, Dt).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = R(this, Ui)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, o, a, l, u, c, d, f, m, v, y, w, h, p, g, x, T, A, S;
        re(
          this,
          Ui,
          Y1({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (b, L) => {
              Ee(this, Kn, Ir).call(this, { type: 'failed', failureCount: b, error: L });
            },
            onPause: () => {
              Ee(this, Kn, Ir).call(this, { type: 'pause' });
            },
            onContinue: () => {
              Ee(this, Kn, Ir).call(this, { type: 'continue' });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => R(this, Dt).canRun(this),
          }),
        );
        const n = this.state.status === 'pending',
          r = !R(this, Ui).canStart();
        try {
          if (!n) {
            Ee(this, Kn, Ir).call(this, { type: 'pending', variables: t, isPaused: r }),
              await ((s = (i = R(this, Dt).config).onMutate) == null ? void 0 : s.call(i, t, this));
            const L = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, t));
            L !== this.state.context &&
              Ee(this, Kn, Ir).call(this, {
                type: 'pending',
                context: L,
                variables: t,
                isPaused: r,
              });
          }
          const b = await R(this, Ui).start();
          return (
            await ((u = (l = R(this, Dt).config).onSuccess) == null
              ? void 0
              : u.call(l, b, t, this.state.context, this)),
            await ((d = (c = this.options).onSuccess) == null
              ? void 0
              : d.call(c, b, t, this.state.context)),
            await ((m = (f = R(this, Dt).config).onSettled) == null
              ? void 0
              : m.call(f, b, null, this.state.variables, this.state.context, this)),
            await ((y = (v = this.options).onSettled) == null
              ? void 0
              : y.call(v, b, null, t, this.state.context)),
            Ee(this, Kn, Ir).call(this, { type: 'success', data: b }),
            b
          );
        } catch (b) {
          try {
            throw (
              (await ((h = (w = R(this, Dt).config).onError) == null
                ? void 0
                : h.call(w, b, t, this.state.context, this)),
              await ((g = (p = this.options).onError) == null
                ? void 0
                : g.call(p, b, t, this.state.context)),
              await ((T = (x = R(this, Dt).config).onSettled) == null
                ? void 0
                : T.call(x, void 0, b, this.state.variables, this.state.context, this)),
              await ((S = (A = this.options).onSettled) == null
                ? void 0
                : S.call(A, void 0, b, t, this.state.context)),
              b)
            );
          } finally {
            Ee(this, Kn, Ir).call(this, { type: 'error', error: b });
          }
        } finally {
          R(this, Dt).runNext(this);
        }
      }
    }),
    (qn = new WeakMap()),
    (Dt = new WeakMap()),
    (Ui = new WeakMap()),
    (Kn = new WeakSet()),
    (Ir = function (t) {
      const n = (r) => {
        switch (t.type) {
          case 'failed':
            return { ...r, failureCount: t.failureCount, failureReason: t.error };
          case 'pause':
            return { ...r, isPaused: !0 };
          case 'continue':
            return { ...r, isPaused: !1 };
          case 'pending':
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: 'pending',
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case 'success':
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: 'success',
              isPaused: !1,
            };
          case 'error':
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: 'error',
            };
        }
      };
      (this.state = n(this.state)),
        vt.batch(() => {
          R(this, qn).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            R(this, Dt).notify({ mutation: this, type: 'updated', action: t });
        });
    }),
    V0);
function OO() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: 'idle',
    variables: void 0,
    submittedAt: 0,
  };
}
var Yt,
  sl,
  z0,
  MO =
    ((z0 = class extends _l {
      constructor(t = {}) {
        super();
        oe(this, Yt, void 0);
        oe(this, sl, void 0);
        (this.config = t), re(this, Yt, new Map()), re(this, sl, Date.now());
      }
      build(t, n, r) {
        const i = new AO({
          mutationCache: this,
          mutationId: ++Ul(this, sl)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(i), i;
      }
      add(t) {
        const n = cu(t),
          r = R(this, Yt).get(n) ?? [];
        r.push(t), R(this, Yt).set(n, r), this.notify({ type: 'added', mutation: t });
      }
      remove(t) {
        var r;
        const n = cu(t);
        if (R(this, Yt).has(n)) {
          const i = (r = R(this, Yt).get(n)) == null ? void 0 : r.filter((s) => s !== t);
          i && (i.length === 0 ? R(this, Yt).delete(n) : R(this, Yt).set(n, i));
        }
        this.notify({ type: 'removed', mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = R(this, Yt).get(cu(t))) == null
            ? void 0
            : r.find((i) => i.state.status === 'pending');
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = R(this, Yt).get(cu(t))) == null
            ? void 0
            : r.find((i) => i !== t && i.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        vt.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...R(this, Yt).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Yy(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Yy(t, n));
      }
      notify(t) {
        vt.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return vt.batch(() => Promise.all(t.map((n) => n.continue().catch(vn))));
      }
    }),
    (Yt = new WeakMap()),
    (sl = new WeakMap()),
    z0);
function cu(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function DO(e) {
  return {
    onFetch: (t, n) => {
      const r = async () => {
        var v, y, w, h, p;
        const i = t.options,
          s =
            (w =
              (y = (v = t.fetchOptions) == null ? void 0 : v.meta) == null
                ? void 0
                : y.fetchMore) == null
              ? void 0
              : w.direction,
          o = ((h = t.state.data) == null ? void 0 : h.pages) || [],
          a = ((p = t.state.data) == null ? void 0 : p.pageParams) || [],
          l = { pages: [], pageParams: [] };
        let u = !1;
        const c = (g) => {
            Object.defineProperty(g, 'signal', {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (u = !0)
                  : t.signal.addEventListener('abort', () => {
                      u = !0;
                    }),
                t.signal
              ),
            });
          },
          d =
            t.options.queryFn && t.options.queryFn !== Fm
              ? t.options.queryFn
              : () => Promise.reject(new Error(`Missing queryFn: '${t.options.queryHash}'`)),
          f = async (g, x, T) => {
            if (u) return Promise.reject();
            if (x == null && g.pages.length) return Promise.resolve(g);
            const A = {
              queryKey: t.queryKey,
              pageParam: x,
              direction: T ? 'backward' : 'forward',
              meta: t.options.meta,
            };
            c(A);
            const S = await d(A),
              { maxPages: b } = t.options,
              L = T ? TO : EO;
            return { pages: L(g.pages, S, b), pageParams: L(g.pageParams, x, b) };
          };
        let m;
        if (s && o.length) {
          const g = s === 'backward',
            x = g ? NO : e0,
            T = { pages: o, pageParams: a },
            A = x(i, T);
          m = await f(T, A, g);
        } else {
          m = await f(l, a[0] ?? i.initialPageParam);
          const g = e ?? o.length;
          for (let x = 1; x < g; x++) {
            const T = e0(i, m);
            m = await f(m, T);
          }
        }
        return m;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var i, s;
            return (s = (i = t.options).persister) == null
              ? void 0
              : s.call(i, r, { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal }, n);
          })
        : (t.fetchFn = r);
    },
  };
}
function e0(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return e.getNextPageParam(t[r], t, n[r], n);
}
function NO(e, { pages: t, pageParams: n }) {
  var r;
  return (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n);
}
var qe,
  Gr,
  qr,
  Ys,
  Xs,
  Kr,
  Js,
  eo,
  B0,
  jO =
    ((B0 = class {
      constructor(e = {}) {
        oe(this, qe, void 0);
        oe(this, Gr, void 0);
        oe(this, qr, void 0);
        oe(this, Ys, void 0);
        oe(this, Xs, void 0);
        oe(this, Kr, void 0);
        oe(this, Js, void 0);
        oe(this, eo, void 0);
        re(this, qe, e.queryCache || new LO()),
          re(this, Gr, e.mutationCache || new MO()),
          re(this, qr, e.defaultOptions || {}),
          re(this, Ys, new Map()),
          re(this, Xs, new Map()),
          re(this, Kr, 0);
      }
      mount() {
        Ul(this, Kr)._++,
          R(this, Kr) === 1 &&
            (re(
              this,
              Js,
              Vm.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), R(this, qe).onFocus());
              }),
            ),
            re(
              this,
              eo,
              fc.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), R(this, qe).onOnline());
              }),
            ));
      }
      unmount() {
        var e, t;
        Ul(this, Kr)._--,
          R(this, Kr) === 0 &&
            ((e = R(this, Js)) == null || e.call(this),
            re(this, Js, void 0),
            (t = R(this, eo)) == null || t.call(this),
            re(this, eo, void 0));
      }
      isFetching(e) {
        return R(this, qe).findAll({ ...e, fetchStatus: 'fetching' }).length;
      }
      isMutating(e) {
        return R(this, Gr).findAll({ ...e, status: 'pending' }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = R(this, qe).get(t.queryHash)) == null ? void 0 : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = R(this, qe).build(this, n);
          return (
            e.revalidateIfStale && r.isStaleByTime(n.staleTime) && this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return R(this, qe)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          i = R(this, qe).get(r.queryHash),
          s = i == null ? void 0 : i.state.data,
          o = wO(t, s);
        if (o !== void 0)
          return R(this, qe)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return vt.batch(() =>
          R(this, qe)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = R(this, qe).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = R(this, qe);
        vt.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = R(this, qe),
          r = { type: 'active', ...e };
        return vt.batch(
          () => (
            n.findAll(e).forEach((i) => {
              i.reset();
            }),
            this.refetchQueries(r, t)
          ),
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = vt.batch(() =>
            R(this, qe)
              .findAll(e)
              .map((i) => i.cancel(n)),
          );
        return Promise.all(r).then(vn).catch(vn);
      }
      invalidateQueries(e = {}, t = {}) {
        return vt.batch(() => {
          if (
            (R(this, qe)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === 'none')
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? 'active' };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = { ...t, cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0 },
          r = vt.batch(() =>
            R(this, qe)
              .findAll(e)
              .filter((i) => !i.isDisabled())
              .map((i) => {
                let s = i.fetch(void 0, n);
                return (
                  n.throwOnError || (s = s.catch(vn)),
                  i.state.fetchStatus === 'paused' ? Promise.resolve() : s
                );
              }),
          );
        return Promise.all(r).then(vn);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = R(this, qe).build(this, t);
        return n.isStaleByTime(t.staleTime) ? n.fetch(t) : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(vn).catch(vn);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = DO(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(vn).catch(vn);
      }
      resumePausedMutations() {
        return fc.isOnline() ? R(this, Gr).resumePausedMutations() : Promise.resolve();
      }
      getQueryCache() {
        return R(this, qe);
      }
      getMutationCache() {
        return R(this, Gr);
      }
      getDefaultOptions() {
        return R(this, qr);
      }
      setDefaultOptions(e) {
        re(this, qr, e);
      }
      setQueryDefaults(e, t) {
        R(this, Ys).set(za(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...R(this, Ys).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Ba(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        R(this, Xs).set(za(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...R(this, Xs).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Ba(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...R(this, qr).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Im(t.queryKey, t)),
          t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== 'always'),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
          t.enabled !== !0 && t.queryFn === Fm && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...R(this, qr).mutations,
              ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        R(this, qe).clear(), R(this, Gr).clear();
      }
    }),
    (qe = new WeakMap()),
    (Gr = new WeakMap()),
    (qr = new WeakMap()),
    (Ys = new WeakMap()),
    (Xs = new WeakMap()),
    (Kr = new WeakMap()),
    (Js = new WeakMap()),
    (eo = new WeakMap()),
    B0),
  $t,
  Me,
  ol,
  Nt,
  $i,
  to,
  Zn,
  al,
  no,
  ro,
  Hi,
  Wi,
  Zr,
  io,
  Gi,
  Xo,
  ll,
  Nh,
  ul,
  jh,
  cl,
  Ih,
  dl,
  Fh,
  fl,
  Vh,
  hl,
  zh,
  pl,
  Bh,
  Rc,
  eE,
  U0,
  IO =
    ((U0 = class extends _l {
      constructor(t, n) {
        super();
        oe(this, Gi);
        oe(this, ll);
        oe(this, ul);
        oe(this, cl);
        oe(this, dl);
        oe(this, fl);
        oe(this, hl);
        oe(this, pl);
        oe(this, Rc);
        oe(this, $t, void 0);
        oe(this, Me, void 0);
        oe(this, ol, void 0);
        oe(this, Nt, void 0);
        oe(this, $i, void 0);
        oe(this, to, void 0);
        oe(this, Zn, void 0);
        oe(this, al, void 0);
        oe(this, no, void 0);
        oe(this, ro, void 0);
        oe(this, Hi, void 0);
        oe(this, Wi, void 0);
        oe(this, Zr, void 0);
        oe(this, io, new Set());
        (this.options = n),
          re(this, $t, t),
          re(this, Zn, null),
          this.bindMethods(),
          this.setOptions(n);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (R(this, Me).addObserver(this),
          t0(R(this, Me), this.options) ? Ee(this, Gi, Xo).call(this) : this.updateResult(),
          Ee(this, dl, Fh).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Uh(R(this, Me), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Uh(R(this, Me), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          Ee(this, fl, Vh).call(this),
          Ee(this, hl, zh).call(this),
          R(this, Me).removeObserver(this);
      }
      setOptions(t, n) {
        const r = this.options,
          i = R(this, Me);
        if (
          ((this.options = R(this, $t).defaultQueryOptions(t)),
          this.options.enabled !== void 0 && typeof this.options.enabled != 'boolean')
        )
          throw new Error('Expected enabled to be a boolean');
        Ee(this, pl, Bh).call(this),
          R(this, Me).setOptions(this.options),
          r._defaulted &&
            !Oh(this.options, r) &&
            R(this, $t)
              .getQueryCache()
              .notify({ type: 'observerOptionsUpdated', query: R(this, Me), observer: this });
        const s = this.hasListeners();
        s && n0(R(this, Me), i, this.options, r) && Ee(this, Gi, Xo).call(this),
          this.updateResult(n),
          s &&
            (R(this, Me) !== i ||
              this.options.enabled !== r.enabled ||
              this.options.staleTime !== r.staleTime) &&
            Ee(this, ll, Nh).call(this);
        const o = Ee(this, ul, jh).call(this);
        s &&
          (R(this, Me) !== i || this.options.enabled !== r.enabled || o !== R(this, Zr)) &&
          Ee(this, cl, Ih).call(this, o);
      }
      getOptimisticResult(t) {
        const n = R(this, $t).getQueryCache().build(R(this, $t), t),
          r = this.createResult(n, t);
        return (
          VO(this, r) &&
            (re(this, Nt, r), re(this, to, this.options), re(this, $i, R(this, Me).state)),
          r
        );
      }
      getCurrentResult() {
        return R(this, Nt);
      }
      trackResult(t, n) {
        const r = {};
        return (
          Object.keys(t).forEach((i) => {
            Object.defineProperty(r, i, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(i), n == null || n(i), t[i]),
            });
          }),
          r
        );
      }
      trackProp(t) {
        R(this, io).add(t);
      }
      getCurrentQuery() {
        return R(this, Me);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const n = R(this, $t).defaultQueryOptions(t),
          r = R(this, $t).getQueryCache().build(R(this, $t), n);
        return (r.isFetchingOptimistic = !0), r.fetch().then(() => this.createResult(r, n));
      }
      fetch(t) {
        return Ee(this, Gi, Xo)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), R(this, Nt)));
      }
      createResult(t, n) {
        var S;
        const r = R(this, Me),
          i = this.options,
          s = R(this, Nt),
          o = R(this, $i),
          a = R(this, to),
          u = t !== r ? t.state : R(this, ol),
          { state: c } = t;
        let d = { ...c },
          f = !1,
          m;
        if (n._optimisticResults) {
          const b = this.hasListeners(),
            L = !b && t0(t, n),
            P = b && n0(t, r, n, i);
          (L || P) && (d = { ...d, ...J1(c.data, t.options) }),
            n._optimisticResults === 'isRestoring' && (d.fetchStatus = 'idle');
        }
        let { error: v, errorUpdatedAt: y, status: w } = d;
        if (n.select && d.data !== void 0)
          if (s && d.data === (o == null ? void 0 : o.data) && n.select === R(this, al))
            m = R(this, no);
          else
            try {
              re(this, al, n.select),
                (m = n.select(d.data)),
                (m = Dh(s == null ? void 0 : s.data, m, n)),
                re(this, no, m),
                re(this, Zn, null);
            } catch (b) {
              re(this, Zn, b);
            }
        else m = d.data;
        if (n.placeholderData !== void 0 && m === void 0 && w === 'pending') {
          let b;
          if (
            s != null &&
            s.isPlaceholderData &&
            n.placeholderData === (a == null ? void 0 : a.placeholderData)
          )
            b = s.data;
          else if (
            ((b =
              typeof n.placeholderData == 'function'
                ? n.placeholderData((S = R(this, ro)) == null ? void 0 : S.state.data, R(this, ro))
                : n.placeholderData),
            n.select && b !== void 0)
          )
            try {
              (b = n.select(b)), re(this, Zn, null);
            } catch (L) {
              re(this, Zn, L);
            }
          b !== void 0 && ((w = 'success'), (m = Dh(s == null ? void 0 : s.data, b, n)), (f = !0));
        }
        R(this, Zn) && ((v = R(this, Zn)), (m = R(this, no)), (y = Date.now()), (w = 'error'));
        const h = d.fetchStatus === 'fetching',
          p = w === 'pending',
          g = w === 'error',
          x = p && h,
          T = m !== void 0;
        return {
          status: w,
          fetchStatus: d.fetchStatus,
          isPending: p,
          isSuccess: w === 'success',
          isError: g,
          isInitialLoading: x,
          isLoading: x,
          data: m,
          dataUpdatedAt: d.dataUpdatedAt,
          error: v,
          errorUpdatedAt: y,
          failureCount: d.fetchFailureCount,
          failureReason: d.fetchFailureReason,
          errorUpdateCount: d.errorUpdateCount,
          isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
          isFetchedAfterMount:
            d.dataUpdateCount > u.dataUpdateCount || d.errorUpdateCount > u.errorUpdateCount,
          isFetching: h,
          isRefetching: h && !p,
          isLoadingError: g && !T,
          isPaused: d.fetchStatus === 'paused',
          isPlaceholderData: f,
          isRefetchError: g && T,
          isStale: zm(t, n),
          refetch: this.refetch,
        };
      }
      updateResult(t) {
        const n = R(this, Nt),
          r = this.createResult(R(this, Me), this.options);
        if (
          (re(this, $i, R(this, Me).state),
          re(this, to, this.options),
          R(this, $i).data !== void 0 && re(this, ro, R(this, Me)),
          Oh(r, n))
        )
          return;
        re(this, Nt, r);
        const i = {},
          s = () => {
            if (!n) return !0;
            const { notifyOnChangeProps: o } = this.options,
              a = typeof o == 'function' ? o() : o;
            if (a === 'all' || (!a && !R(this, io).size)) return !0;
            const l = new Set(a ?? R(this, io));
            return (
              this.options.throwOnError && l.add('error'),
              Object.keys(R(this, Nt)).some((u) => {
                const c = u;
                return R(this, Nt)[c] !== n[c] && l.has(c);
              })
            );
          };
        (t == null ? void 0 : t.listeners) !== !1 && s() && (i.listeners = !0),
          Ee(this, Rc, eE).call(this, { ...i, ...t });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && Ee(this, dl, Fh).call(this);
      }
    }),
    ($t = new WeakMap()),
    (Me = new WeakMap()),
    (ol = new WeakMap()),
    (Nt = new WeakMap()),
    ($i = new WeakMap()),
    (to = new WeakMap()),
    (Zn = new WeakMap()),
    (al = new WeakMap()),
    (no = new WeakMap()),
    (ro = new WeakMap()),
    (Hi = new WeakMap()),
    (Wi = new WeakMap()),
    (Zr = new WeakMap()),
    (io = new WeakMap()),
    (Gi = new WeakSet()),
    (Xo = function (t) {
      Ee(this, pl, Bh).call(this);
      let n = R(this, Me).fetch(this.options, t);
      return (t != null && t.throwOnError) || (n = n.catch(vn)), n;
    }),
    (ll = new WeakSet()),
    (Nh = function () {
      if ((Ee(this, fl, Vh).call(this), go || R(this, Nt).isStale || !Ah(this.options.staleTime)))
        return;
      const n = q1(R(this, Nt).dataUpdatedAt, this.options.staleTime) + 1;
      re(
        this,
        Hi,
        setTimeout(() => {
          R(this, Nt).isStale || this.updateResult();
        }, n),
      );
    }),
    (ul = new WeakSet()),
    (jh = function () {
      return (
        (typeof this.options.refetchInterval == 'function'
          ? this.options.refetchInterval(R(this, Me))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (cl = new WeakSet()),
    (Ih = function (t) {
      Ee(this, hl, zh).call(this),
        re(this, Zr, t),
        !(go || this.options.enabled === !1 || !Ah(R(this, Zr)) || R(this, Zr) === 0) &&
          re(
            this,
            Wi,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || Vm.isFocused()) &&
                Ee(this, Gi, Xo).call(this);
            }, R(this, Zr)),
          );
    }),
    (dl = new WeakSet()),
    (Fh = function () {
      Ee(this, ll, Nh).call(this), Ee(this, cl, Ih).call(this, Ee(this, ul, jh).call(this));
    }),
    (fl = new WeakSet()),
    (Vh = function () {
      R(this, Hi) && (clearTimeout(R(this, Hi)), re(this, Hi, void 0));
    }),
    (hl = new WeakSet()),
    (zh = function () {
      R(this, Wi) && (clearInterval(R(this, Wi)), re(this, Wi, void 0));
    }),
    (pl = new WeakSet()),
    (Bh = function () {
      const t = R(this, $t).getQueryCache().build(R(this, $t), this.options);
      if (t === R(this, Me)) return;
      const n = R(this, Me);
      re(this, Me, t),
        re(this, ol, t.state),
        this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
    }),
    (Rc = new WeakSet()),
    (eE = function (t) {
      vt.batch(() => {
        t.listeners &&
          this.listeners.forEach((n) => {
            n(R(this, Nt));
          }),
          R(this, $t)
            .getQueryCache()
            .notify({ query: R(this, Me), type: 'observerResultsUpdated' });
      });
    }),
    U0);
function FO(e, t) {
  return (
    t.enabled !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === 'error' && t.retryOnMount === !1)
  );
}
function t0(e, t) {
  return FO(e, t) || (e.state.data !== void 0 && Uh(e, t, t.refetchOnMount));
}
function Uh(e, t, n) {
  if (t.enabled !== !1) {
    const r = typeof n == 'function' ? n(e) : n;
    return r === 'always' || (r !== !1 && zm(e, t));
  }
  return !1;
}
function n0(e, t, n, r) {
  return (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== 'error') && zm(e, n);
}
function zm(e, t) {
  return t.enabled !== !1 && e.isStaleByTime(t.staleTime);
}
function VO(e, t) {
  return !Oh(e.getCurrentResult(), t);
}
var tE = _.createContext(void 0),
  zO = (e) => {
    const t = _.useContext(tE);
    if (!t) throw new Error('No QueryClient set, use QueryClientProvider to set one');
    return t;
  },
  BO = ({ client: e, children: t }) => (
    _.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    E.jsx(tE.Provider, { value: e, children: t })
  ),
  nE = _.createContext(!1),
  UO = () => _.useContext(nE);
nE.Provider;
function $O() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var HO = _.createContext($O()),
  WO = () => _.useContext(HO);
function GO(e, t) {
  return typeof e == 'function' ? e(...t) : !!e;
}
var qO = (e, t) => {
    (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
  },
  KO = (e) => {
    _.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  ZO = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r }) =>
    e.isError && !t.isReset() && !e.isFetching && r && GO(n, [e.error, r]),
  QO = (e) => {
    e.suspense && typeof e.staleTime != 'number' && (e.staleTime = 1e3);
  },
  YO = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  XO = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function JO(e, t, n) {
  const r = zO(),
    i = UO(),
    s = WO(),
    o = r.defaultQueryOptions(e);
  (o._optimisticResults = i ? 'isRestoring' : 'optimistic'), QO(o), qO(o, s), KO(s);
  const [a] = _.useState(() => new t(r, o)),
    l = a.getOptimisticResult(o);
  if (
    (_.useSyncExternalStore(
      _.useCallback(
        (u) => {
          const c = i ? () => {} : a.subscribe(vt.batchCalls(u));
          return a.updateResult(), c;
        },
        [a, i],
      ),
      () => a.getCurrentResult(),
      () => a.getCurrentResult(),
    ),
    _.useEffect(() => {
      a.setOptions(o, { listeners: !1 });
    }, [o, a]),
    YO(o, l))
  )
    throw XO(o, a, s);
  if (
    ZO({
      result: l,
      errorResetBoundary: s,
      throwOnError: o.throwOnError,
      query: r.getQueryCache().get(o.queryHash),
    })
  )
    throw l.error;
  return o.notifyOnChangeProps ? l : a.trackResult(l);
}
function Bm(e, t) {
  return JO(e, IO);
}
const Um = ({ second: e, third: t, path: n }) => {
    const r = Vt((s) => s.activeLang.localization),
      i = (s, o) => (r === 'en' ? s : o);
    return E.jsxs('div', {
      className: 'text-[12px] text-[#8C8C8C] flex items-center mob:mb-6 mb-5',
      children: [
        E.jsx(Tn, { to: '/', children: i('Home', 'Главная') }),
        E.jsx('p', { className: 'px-1', children: '/' }),
        t ? E.jsx(Tn, { to: n || '', children: e }) : E.jsx('p', { children: e }),
        t && E.jsx('p', { className: 'px-1', children: '/' }),
        t && E.jsx('p', { children: t }),
      ],
    });
  },
  rE = jm((e) => ({
    activeRadio: 'Все',
    filter: (t) => {
      e((n) => ({ activeRadio: (n.activeRadio = t) }));
    },
  })),
  eM = ({ name: e, active: t }) => {
    const n = rE((r) => r.filter);
    return E.jsx('div', {
      onClick: () => n(e),
      className: 'flex items-center gap-[10px] cursor-pointer',
      children: E.jsxs('div', {
        className: 'flex items-center gap-[10px]',
        children: [
          E.jsx('div', {
            className: 'border-[1px] h-3 w-3 p-[2px] rounded-full border-black1',
            children: E.jsx('div', {
              className: Gt('bg-purple transition-all rounded-full opacity-0 w-full h-full', {
                'opacity-100': t,
              }),
            }),
          }),
          E.jsx('p', { children: e }),
        ],
      }),
    });
  },
  td = ({ title: e, mb24: t, mb32: n }) =>
    E.jsx('h1', {
      className: Gt('text-[34px] font-semibold leading-[100%] text-black1', {
        'mb-6': t,
        'mb-8': n,
      }),
      children: e,
    }),
  tM = [{ name: 'Все' }, { name: 'Посетителям' }, { name: 'Участники' }];
function nM() {
  const e = rE((t) => t.activeRadio);
  return (
    console.log(e),
    E.jsx('div', {
      className: 'bg-white2 pt-5',
      children: E.jsxs('div', {
        className: 'container',
        children: [
          E.jsx(Um, { second: 'FAQ' }),
          E.jsx(td, { title: '«Вопросы-ответы»' }),
          E.jsx('div', {
            className: 'flex items-center gap-6 mb-11 mt-6',
            children: tM.map((t) => E.jsx(eM, { ...t, active: e === t.name }, Nn())),
          }),
          E.jsx('section', {}),
        ],
      }),
    })
  );
}
const r0 = ({ title: e, path: t, rect: n = !1 }) =>
    E.jsxs('div', {
      className: Gt('bg-white rounded-[10px] drop-shadow-cardShadow', {
        'px-5 pt-5 h-[156px] pb-[50px] gap-[10px] flex flex-col items-center bg-white rounded-[10px] drop-shadow-cardShadow':
          !n,
        'px-10 flex items-center gap-5 w-[350px] py-5': n,
      }),
      children: [
        E.jsx('img', { src: t, alt: '' }),
        E.jsx('h3', {
          className: Gt('leading-[130%]', {
            'text-[16px] font-normal text-black1': n,
            'text-center text-[24px] font-light text-black2': !n,
          }),
          children: e,
        }),
      ],
    }),
  rM = ({ path: e, text: t }) =>
    E.jsxs(Tn, {
      to: e,
      className: 'flex items-center text-[14px] gap-[10px] text-orange',
      children: [
        E.jsx('p', { children: t }),
        E.jsx('img', { src: '../assets/icons/link-arrow.png', alt: 'arrow' }),
      ],
    }),
  iM = [
    { path: '/assets/icons/card-icon.svg', title: 'Брошюра' },
    { path: '/assets/icons/card-icon2.svg', title: 'Программа' },
    { path: '/assets/icons/card-icon3.svg', title: 'Зарегистрироваться' },
    { path: '/assets/icons/card-icon4.svg', title: 'Гид по поездке и проживанию' },
    { en: !0, path: '/assets/icons/card-icon.svg', title: 'Brochure' },
    { en: !0, path: '/assets/icons/card-icon2.svg', title: 'Program' },
    { en: !0, path: '/assets/icons/card-icon3.svg', title: 'Register' },
    { en: !0, path: '/assets/icons/card-icon4.svg', title: 'Travel and accommodation guide' },
  ],
  sM = [
    { path: '/assets/icons/rect-icon.svg', title: 'Участники' },
    { path: '/assets/icons/rect-icon2.svg', title: 'Тематика выставки' },
    { path: '/assets/icons/rect-icon3.svg', title: 'Преимущества участия' },
    { en: !0, path: '/assets/icons/rect-icon.svg', title: 'Participants' },
    { en: !0, path: '/assets/icons/rect-icon2.svg', title: 'Exhibition theme' },
    { en: !0, path: '/assets/icons/rect-icon3.svg', title: 'Benefits of participation' },
  ];
function i0(e) {
  return e !== null && typeof e == 'object' && 'constructor' in e && e.constructor === Object;
}
function $m(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > 'u'
        ? (e[n] = t[n])
        : i0(t[n]) && i0(e[n]) && Object.keys(t[n]).length > 0 && $m(e[n], t[n]);
    });
}
const iE = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
};
function Tr() {
  const e = typeof document < 'u' ? document : {};
  return $m(e, iE), e;
}
const oM = {
  document: iE,
  navigator: { userAgent: '' },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > 'u' || clearTimeout(e);
  },
};
function un() {
  const e = typeof window < 'u' ? window : {};
  return $m(e, oM), e;
}
function aM(e) {
  return (
    e === void 0 && (e = ''),
    e
      .trim()
      .split(' ')
      .filter((t) => !!t.trim())
  );
}
function lM(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function $h(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function hc() {
  return Date.now();
}
function uM(e) {
  const t = un();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function cM(e, t) {
  t === void 0 && (t = 'x');
  const n = un();
  let r, i, s;
  const o = uM(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(',').length > 6 &&
          (i = i
            .split(', ')
            .map((a) => a.replace(',', '.'))
            .join(', ')),
        (s = new n.WebKitCSSMatrix(i === 'none' ? '' : i)))
      : ((s =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
        (r = s.toString().split(','))),
    t === 'x' &&
      (n.WebKitCSSMatrix
        ? (i = s.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === 'y' &&
      (n.WebKitCSSMatrix
        ? (i = s.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function du(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object'
  );
}
function dM(e) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function en() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ['__proto__', 'constructor', 'prototype'];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !dM(r)) {
      const i = Object.keys(Object(r)).filter((s) => t.indexOf(s) < 0);
      for (let s = 0, o = i.length; s < o; s += 1) {
        const a = i[s],
          l = Object.getOwnPropertyDescriptor(r, a);
        l !== void 0 &&
          l.enumerable &&
          (du(e[a]) && du(r[a])
            ? r[a].__swiper__
              ? (e[a] = r[a])
              : en(e[a], r[a])
            : !du(e[a]) && du(r[a])
            ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : en(e[a], r[a]))
            : (e[a] = r[a]));
      }
    }
  }
  return e;
}
function fu(e, t, n) {
  e.style.setProperty(t, n);
}
function sE(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = un(),
    s = -t.translate;
  let o = null,
    a;
  const l = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = 'none'), i.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > s ? 'next' : 'prev',
    c = (f, m) => (u === 'next' && f >= m) || (u === 'prev' && f <= m),
    d = () => {
      (a = new Date().getTime()), o === null && (o = a);
      const f = Math.max(Math.min((a - o) / l, 1), 0),
        m = 0.5 - Math.cos(f * Math.PI) / 2;
      let v = s + m * (n - s);
      if ((c(v, n) && (v = n), t.wrapperEl.scrollTo({ [r]: v }), c(v, n))) {
        (t.wrapperEl.style.overflow = 'hidden'),
          (t.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [r]: v });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(d);
    };
  d();
}
function Yn(e, t) {
  return t === void 0 && (t = ''), [...e.children].filter((n) => n.matches(t));
}
function pc(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function mc(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : aM(t))), n;
}
function fM(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function hM(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function Xr(e, t) {
  return un().getComputedStyle(e, null).getPropertyValue(t);
}
function gc(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1);
    return n;
  }
}
function oE(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function Hh(e, t, n) {
  const r = un();
  return (
    e[t === 'width' ? 'offsetWidth' : 'offsetHeight'] +
    parseFloat(
      r.getComputedStyle(e, null).getPropertyValue(t === 'width' ? 'margin-right' : 'margin-top'),
    ) +
    parseFloat(
      r.getComputedStyle(e, null).getPropertyValue(t === 'width' ? 'margin-left' : 'margin-bottom'),
    )
  );
}
function at(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
let nf;
function pM() {
  const e = un(),
    t = Tr();
  return {
    smoothScroll:
      t.documentElement && t.documentElement.style && 'scrollBehavior' in t.documentElement.style,
    touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
  };
}
function aE() {
  return nf || (nf = pM()), nf;
}
let rf;
function mM(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = aE(),
    r = un(),
    i = r.navigator.platform,
    s = t || r.navigator.userAgent,
    o = { ios: !1, android: !1 },
    a = r.screen.width,
    l = r.screen.height,
    u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = s.match(/(iPad).*OS\s([\d_]+)/);
  const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    m = i === 'Win32';
  let v = i === 'MacIntel';
  const y = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810',
  ];
  return (
    !c &&
      v &&
      n.touch &&
      y.indexOf(`${a}x${l}`) >= 0 &&
      ((c = s.match(/(Version)\/([\d.]+)/)), c || (c = [0, 1, '13_0_0']), (v = !1)),
    u && !m && ((o.os = 'android'), (o.android = !0)),
    (c || f || d) && ((o.os = 'ios'), (o.ios = !0)),
    o
  );
}
function lE(e) {
  return e === void 0 && (e = {}), rf || (rf = mM(e)), rf;
}
let sf;
function gM() {
  const e = un(),
    t = lE();
  let n = !1;
  function r() {
    const a = e.navigator.userAgent.toLowerCase();
    return a.indexOf('safari') >= 0 && a.indexOf('chrome') < 0 && a.indexOf('android') < 0;
  }
  if (r()) {
    const a = String(e.navigator.userAgent);
    if (a.includes('Version/')) {
      const [l, u] = a
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((c) => Number(c));
      n = l < 16 || (l === 16 && u < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
    s = r(),
    o = s || (i && t.ios);
  return { isSafari: n || s, needPerspectiveFix: n, need3dFix: o, isWebView: i };
}
function vM() {
  return sf || (sf = gM()), sf;
}
function yM(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = un();
  let s = null,
    o = null;
  const a = () => {
      !t || t.destroyed || !t.initialized || (r('beforeResize'), r('resize'));
    },
    l = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((s = new ResizeObserver((d) => {
          o = i.requestAnimationFrame(() => {
            const { width: f, height: m } = t;
            let v = f,
              y = m;
            d.forEach((w) => {
              let { contentBoxSize: h, contentRect: p, target: g } = w;
              (g && g !== t.el) ||
                ((v = p ? p.width : (h[0] || h).inlineSize),
                (y = p ? p.height : (h[0] || h).blockSize));
            }),
              (v !== f || y !== m) && a();
          });
        })),
        s.observe(t.el));
    },
    u = () => {
      o && i.cancelAnimationFrame(o), s && s.unobserve && t.el && (s.unobserve(t.el), (s = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || r('orientationchange');
    };
  n('init', () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < 'u') {
      l();
      return;
    }
    i.addEventListener('resize', a), i.addEventListener('orientationchange', c);
  }),
    n('destroy', () => {
      u(), i.removeEventListener('resize', a), i.removeEventListener('orientationchange', c);
    });
}
function xM(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = [],
    o = un(),
    a = function (c, d) {
      d === void 0 && (d = {});
      const f = o.MutationObserver || o.WebkitMutationObserver,
        m = new f((v) => {
          if (t.__preventObserver__) return;
          if (v.length === 1) {
            i('observerUpdate', v[0]);
            return;
          }
          const y = function () {
            i('observerUpdate', v[0]);
          };
          o.requestAnimationFrame ? o.requestAnimationFrame(y) : o.setTimeout(y, 0);
        });
      m.observe(c, {
        attributes: typeof d.attributes > 'u' ? !0 : d.attributes,
        childList: typeof d.childList > 'u' ? !0 : d.childList,
        characterData: typeof d.characterData > 'u' ? !0 : d.characterData,
      }),
        s.push(m);
    },
    l = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = oE(t.hostEl);
          for (let d = 0; d < c.length; d += 1) a(c[d]);
        }
        a(t.hostEl, { childList: t.params.observeSlideChildren }),
          a(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      s.forEach((c) => {
        c.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), r('init', l), r('destroy', u);
}
var wM = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r;
    const i = n ? 'unshift' : 'push';
    return (
      e.split(' ').forEach((s) => {
        r.eventsListeners[s] || (r.eventsListeners[s] = []), r.eventsListeners[s][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++) o[a] = arguments[a];
      t.apply(r, o);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != 'function') return n;
    const r = t ? 'unshift' : 'push';
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(' ').forEach((r) => {
          typeof t > 'u'
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, s) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(s, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++) s[o] = arguments[o];
    return (
      typeof s[0] == 'string' || Array.isArray(s[0])
        ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
        : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(' ')).forEach((l) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(r, [l, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[l] &&
            e.eventsListeners[l].forEach((u) => {
              u.apply(r, n);
            });
      }),
      e
    );
  },
};
function SM() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < 'u' && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < 'u' && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t - parseInt(Xr(r, 'padding-left') || 0, 10) - parseInt(Xr(r, 'padding-right') || 0, 10)),
      (n =
        n - parseInt(Xr(r, 'padding-top') || 0, 10) - parseInt(Xr(r, 'padding-bottom') || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }));
}
function EM() {
  const e = this;
  function t(P, z) {
    return parseFloat(P.getPropertyValue(e.getDirectionLabel(z)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: s, rtlTranslate: o, wrongRTL: a } = e,
    l = e.virtual && n.virtual.enabled,
    u = l ? e.virtual.slides.length : e.slides.length,
    c = Yn(i, `.${e.params.slideClass}, swiper-slide`),
    d = l ? e.virtual.slides.length : c.length;
  let f = [];
  const m = [],
    v = [];
  let y = n.slidesOffsetBefore;
  typeof y == 'function' && (y = n.slidesOffsetBefore.call(e));
  let w = n.slidesOffsetAfter;
  typeof w == 'function' && (w = n.slidesOffsetAfter.call(e));
  const h = e.snapGrid.length,
    p = e.slidesGrid.length;
  let g = n.spaceBetween,
    x = -y,
    T = 0,
    A = 0;
  if (typeof s > 'u') return;
  typeof g == 'string' && g.indexOf('%') >= 0
    ? (g = (parseFloat(g.replace('%', '')) / 100) * s)
    : typeof g == 'string' && (g = parseFloat(g)),
    (e.virtualSize = -g),
    c.forEach((P) => {
      o ? (P.style.marginLeft = '') : (P.style.marginRight = ''),
        (P.style.marginBottom = ''),
        (P.style.marginTop = '');
    }),
    n.centeredSlides &&
      n.cssMode &&
      (fu(r, '--swiper-centered-offset-before', ''), fu(r, '--swiper-centered-offset-after', ''));
  const S = n.grid && n.grid.rows > 1 && e.grid;
  S ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
  let b;
  const L =
    n.slidesPerView === 'auto' &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter((P) => typeof n.breakpoints[P].slidesPerView < 'u').length >
      0;
  for (let P = 0; P < d; P += 1) {
    b = 0;
    let z;
    if (
      (c[P] && (z = c[P]), S && e.grid.updateSlide(P, z, c), !(c[P] && Xr(z, 'display') === 'none'))
    ) {
      if (n.slidesPerView === 'auto') {
        L && (c[P].style[e.getDirectionLabel('width')] = '');
        const N = getComputedStyle(z),
          j = z.style.transform,
          G = z.style.webkitTransform;
        if (
          (j && (z.style.transform = 'none'),
          G && (z.style.webkitTransform = 'none'),
          n.roundLengths)
        )
          b = e.isHorizontal() ? Hh(z, 'width') : Hh(z, 'height');
        else {
          const Q = t(N, 'width'),
            he = t(N, 'padding-left'),
            Re = t(N, 'padding-right'),
            D = t(N, 'margin-left'),
            q = t(N, 'margin-right'),
            K = N.getPropertyValue('box-sizing');
          if (K && K === 'border-box') b = Q + D + q;
          else {
            const { clientWidth: ye, offsetWidth: Se } = z;
            b = Q + he + Re + D + q + (Se - ye);
          }
        }
        j && (z.style.transform = j),
          G && (z.style.webkitTransform = G),
          n.roundLengths && (b = Math.floor(b));
      } else
        (b = (s - (n.slidesPerView - 1) * g) / n.slidesPerView),
          n.roundLengths && (b = Math.floor(b)),
          c[P] && (c[P].style[e.getDirectionLabel('width')] = `${b}px`);
      c[P] && (c[P].swiperSlideSize = b),
        v.push(b),
        n.centeredSlides
          ? ((x = x + b / 2 + T / 2 + g),
            T === 0 && P !== 0 && (x = x - s / 2 - g),
            P === 0 && (x = x - s / 2 - g),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            n.roundLengths && (x = Math.floor(x)),
            A % n.slidesPerGroup === 0 && f.push(x),
            m.push(x))
          : (n.roundLengths && (x = Math.floor(x)),
            (A - Math.min(e.params.slidesPerGroupSkip, A)) % e.params.slidesPerGroup === 0 &&
              f.push(x),
            m.push(x),
            (x = x + b + g)),
        (e.virtualSize += b + g),
        (T = b),
        (A += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + w),
    o &&
      a &&
      (n.effect === 'slide' || n.effect === 'coverflow') &&
      (r.style.width = `${e.virtualSize + g}px`),
    n.setWrapperSize && (r.style[e.getDirectionLabel('width')] = `${e.virtualSize + g}px`),
    S && e.grid.updateWrapperSize(b, f),
    !n.centeredSlides)
  ) {
    const P = [];
    for (let z = 0; z < f.length; z += 1) {
      let N = f[z];
      n.roundLengths && (N = Math.floor(N)), f[z] <= e.virtualSize - s && P.push(N);
    }
    (f = P),
      Math.floor(e.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - s);
  }
  if (l && n.loop) {
    const P = v[0] + g;
    if (n.slidesPerGroup > 1) {
      const z = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
        N = P * n.slidesPerGroup;
      for (let j = 0; j < z; j += 1) f.push(f[f.length - 1] + N);
    }
    for (let z = 0; z < e.virtual.slidesBefore + e.virtual.slidesAfter; z += 1)
      n.slidesPerGroup === 1 && f.push(f[f.length - 1] + P),
        m.push(m[m.length - 1] + P),
        (e.virtualSize += P);
  }
  if ((f.length === 0 && (f = [0]), g !== 0)) {
    const P = e.isHorizontal() && o ? 'marginLeft' : e.getDirectionLabel('marginRight');
    c.filter((z, N) => (!n.cssMode || n.loop ? !0 : N !== c.length - 1)).forEach((z) => {
      z.style[P] = `${g}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let P = 0;
    v.forEach((N) => {
      P += N + (g || 0);
    }),
      (P -= g);
    const z = P - s;
    f = f.map((N) => (N <= 0 ? -y : N > z ? z + w : N));
  }
  if (n.centerInsufficientSlides) {
    let P = 0;
    if (
      (v.forEach((z) => {
        P += z + (g || 0);
      }),
      (P -= g),
      P < s)
    ) {
      const z = (s - P) / 2;
      f.forEach((N, j) => {
        f[j] = N - z;
      }),
        m.forEach((N, j) => {
          m[j] = N + z;
        });
    }
  }
  if (
    (Object.assign(e, { slides: c, snapGrid: f, slidesGrid: m, slidesSizesGrid: v }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    fu(r, '--swiper-centered-offset-before', `${-f[0]}px`),
      fu(r, '--swiper-centered-offset-after', `${e.size / 2 - v[v.length - 1] / 2}px`);
    const P = -e.snapGrid[0],
      z = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((N) => N + P)), (e.slidesGrid = e.slidesGrid.map((N) => N + z));
  }
  if (
    (d !== u && e.emit('slidesLengthChange'),
    f.length !== h && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
    m.length !== p && e.emit('slidesGridLengthChange'),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit('slidesUpdated'),
    !l && !n.cssMode && (n.effect === 'slide' || n.effect === 'fade'))
  ) {
    const P = `${n.containerModifierClass}backface-hidden`,
      z = e.el.classList.contains(P);
    d <= n.maxBackfaceHiddenSlides ? z || e.el.classList.add(P) : z && e.el.classList.remove(P);
  }
}
function TM(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    s;
  typeof e == 'number' ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const o = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
  if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
        const a = t.activeIndex + s;
        if (a > t.slides.length && !r) break;
        n.push(o(a));
      }
  else n.push(o(t.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < 'u') {
      const a = n[s].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function bM() {
  const e = this,
    t = e.slides,
    n = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment();
}
function CM(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: s } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > 'u' && t.updateSlidesOffset();
  let o = -e;
  i && (o = e),
    r.forEach((l) => {
      l.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let a = n.spaceBetween;
  typeof a == 'string' && a.indexOf('%') >= 0
    ? (a = (parseFloat(a.replace('%', '')) / 100) * t.size)
    : typeof a == 'string' && (a = parseFloat(a));
  for (let l = 0; l < r.length; l += 1) {
    const u = r[l];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
    const d = (o + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + a),
      f = (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + a),
      m = -(o - c),
      v = m + t.slidesSizesGrid[l],
      y = m >= 0 && m <= t.size - t.slidesSizesGrid[l];
    ((m >= 0 && m < t.size - 1) || (v > 1 && v <= t.size) || (m <= 0 && v >= t.size)) &&
      (t.visibleSlides.push(u),
      t.visibleSlidesIndexes.push(l),
      r[l].classList.add(n.slideVisibleClass)),
      y && r[l].classList.add(n.slideFullyVisibleClass),
      (u.progress = i ? -d : d),
      (u.originalProgress = i ? -f : f);
  }
}
function _M(e) {
  const t = this;
  if (typeof e > 'u') {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: s, isEnd: o, progressLoop: a } = t;
  const l = s,
    u = o;
  if (r === 0) (i = 0), (s = !0), (o = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const c = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1;
    (s = c || i <= 0), (o = d || i >= 1), c && (i = 0), d && (i = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      f = t.slidesGrid[c],
      m = t.slidesGrid[d],
      v = t.slidesGrid[t.slidesGrid.length - 1],
      y = Math.abs(e);
    y >= f ? (a = (y - f) / v) : (a = (y + v - m) / v), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: a, isBeginning: s, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) && t.updateSlidesProgress(e),
    s && !l && t.emit('reachBeginning toEdge'),
    o && !u && t.emit('reachEnd toEdge'),
    ((l && !s) || (u && !o)) && t.emit('fromEdge'),
    t.emit('progress', i);
}
const of = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function PM() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    s = e.virtual && n.virtual.enabled,
    o = e.grid && n.grid && n.grid.rows > 1,
    a = (d) => Yn(r, `.${n.slideClass}${d}, swiper-slide${d}`)[0];
  let l, u, c;
  if (s)
    if (n.loop) {
      let d = i - e.virtual.slidesBefore;
      d < 0 && (d = e.virtual.slides.length + d),
        d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
        (l = a(`[data-swiper-slide-index="${d}"]`));
    } else l = a(`[data-swiper-slide-index="${i}"]`);
  else
    o
      ? ((l = t.filter((d) => d.column === i)[0]),
        (c = t.filter((d) => d.column === i + 1)[0]),
        (u = t.filter((d) => d.column === i - 1)[0]))
      : (l = t[i]);
  l &&
    (o ||
      ((c = hM(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = t[0]),
      (u = fM(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((d) => {
      of(d, d === l, n.slideActiveClass),
        of(d, d === c, n.slideNextClass),
        of(d, d === u, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const Ru = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  af = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute('loading');
  },
  Wh = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === 'auto'
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const o = i,
        a = [o - t];
      a.push(...Array.from({ length: t }).map((l, u) => o + r + u)),
        e.slides.forEach((l, u) => {
          a.includes(l.column) && af(e, u);
        });
      return;
    }
    const s = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let o = i - t; o <= s + t; o += 1) {
        const a = ((o % n) + n) % n;
        (a < i || a > s) && af(e, a);
      }
    else
      for (let o = Math.max(i - t, 0); o <= Math.min(s + t, n - 1); o += 1)
        o !== i && (o > s || o < i) && af(e, o);
  };
function kM(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let s = 0; s < t.length; s += 1)
    typeof t[s + 1] < 'u'
      ? r >= t[s] && r < t[s + 1] - (t[s + 1] - t[s]) / 2
        ? (i = s)
        : r >= t[s] && r < t[s + 1] && (i = s + 1)
      : r >= t[s] && (i = s);
  return n.normalizeSlideIndex && (i < 0 || typeof i > 'u') && (i = 0), i;
}
function RM(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: s, realIndex: o, snapIndex: a } = t;
  let l = e,
    u;
  const c = (m) => {
    let v = m - t.virtual.slidesBefore;
    return (
      v < 0 && (v = t.virtual.slides.length + v),
      v >= t.virtual.slides.length && (v -= t.virtual.slides.length),
      v
    );
  };
  if ((typeof l > 'u' && (l = kM(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
  else {
    const m = Math.min(i.slidesPerGroupSkip, l);
    u = m + Math.floor((l - m) / i.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), l === s && !t.params.loop)) {
    u !== a && ((t.snapIndex = u), t.emit('snapIndexChange'));
    return;
  }
  if (l === s && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(l);
    return;
  }
  const d = t.grid && i.grid && i.grid.rows > 1;
  let f;
  if (t.virtual && i.virtual.enabled && i.loop) f = c(l);
  else if (d) {
    const m = t.slides.filter((y) => y.column === l)[0];
    let v = parseInt(m.getAttribute('data-swiper-slide-index'), 10);
    Number.isNaN(v) && (v = Math.max(t.slides.indexOf(m), 0)), (f = Math.floor(v / i.grid.rows));
  } else if (t.slides[l]) {
    const m = t.slides[l].getAttribute('data-swiper-slide-index');
    m ? (f = parseInt(m, 10)) : (f = l);
  } else f = l;
  Object.assign(t, {
    previousSnapIndex: a,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: f,
    previousIndex: s,
    activeIndex: l,
  }),
    t.initialized && Wh(t),
    t.emit('activeIndexChange'),
    t.emit('snapIndexChange'),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== f && t.emit('realIndexChange'), t.emit('slideChange'));
}
function LM(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
      !i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a);
    });
  let s = !1,
    o;
  if (i) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === i) {
        (s = !0), (o = a);
        break;
      }
  }
  if (i && s)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(i.getAttribute('data-swiper-slide-index'), 10))
        : (n.clickedIndex = o);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var AM = {
  updateSize: SM,
  updateSlides: EM,
  updateAutoHeight: TM,
  updateSlidesOffset: bM,
  updateSlidesProgress: CM,
  updateProgress: _M,
  updateSlidesClasses: PM,
  updateActiveIndex: RM,
  updateClickedSlide: LM,
};
function OM(e) {
  e === void 0 && (e = this.isHorizontal() ? 'x' : 'y');
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: s } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let o = cM(s, e);
  return (o += t.cssOverflowAdjustment()), r && (o = -o), o || 0;
}
function MM(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: s, progress: o } = n;
  let a = 0,
    l = 0;
  const u = 0;
  n.isHorizontal() ? (a = r ? -e : e) : (l = e),
    i.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : l),
    i.cssMode
      ? (s[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal() ? -a : -l)
      : i.virtualTranslate ||
        (n.isHorizontal() ? (a -= n.cssOverflowAdjustment()) : (l -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`));
  let c;
  const d = n.maxTranslate() - n.minTranslate();
  d === 0 ? (c = 0) : (c = (e - n.minTranslate()) / d),
    c !== o && n.updateProgress(e),
    n.emit('setTranslate', n.translate, t);
}
function DM() {
  return -this.snapGrid[0];
}
function NM() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function jM(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const s = this,
    { params: o, wrapperEl: a } = s;
  if (s.animating && o.preventInteractionOnTransition) return !1;
  const l = s.minTranslate(),
    u = s.maxTranslate();
  let c;
  if ((r && e > l ? (c = l) : r && e < u ? (c = u) : (c = e), s.updateProgress(c), o.cssMode)) {
    const d = s.isHorizontal();
    if (t === 0) a[d ? 'scrollLeft' : 'scrollTop'] = -c;
    else {
      if (!s.support.smoothScroll)
        return sE({ swiper: s, targetPosition: -c, side: d ? 'left' : 'top' }), !0;
      a.scrollTo({ [d ? 'left' : 'top']: -c, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    t === 0
      ? (s.setTransition(0),
        s.setTranslate(c),
        n && (s.emit('beforeTransitionStart', t, i), s.emit('transitionEnd')))
      : (s.setTransition(t),
        s.setTranslate(c),
        n && (s.emit('beforeTransitionStart', t, i), s.emit('transitionStart')),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (f) {
              !s ||
                s.destroyed ||
                (f.target === this &&
                  (s.wrapperEl.removeEventListener(
                    'transitionend',
                    s.onTranslateToWrapperTransitionEnd,
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  (s.animating = !1),
                  n && s.emit('transitionEnd')));
            }),
          s.wrapperEl.addEventListener('transitionend', s.onTranslateToWrapperTransitionEnd))),
    !0
  );
}
var IM = {
  getTranslate: OM,
  setTranslate: MM,
  minTranslate: DM,
  maxTranslate: NM,
  translateTo: jM,
};
function FM(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? '0ms' : '')),
    n.emit('setTransition', e, t);
}
function uE(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: s, previousIndex: o } = t;
  let a = r;
  if (
    (a || (s > o ? (a = 'next') : s < o ? (a = 'prev') : (a = 'reset')),
    t.emit(`transition${i}`),
    n && s !== o)
  ) {
    if (a === 'reset') {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      a === 'next' ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
  }
}
function VM(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    uE({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }));
}
function zM(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0), uE({ swiper: n, runCallbacks: e, direction: t, step: 'End' }));
}
var BM = { setTransition: FM, transitionStart: VM, transitionEnd: zM };
function UM(e, t, n, r, i) {
  e === void 0 && (e = 0), n === void 0 && (n = !0), typeof e == 'string' && (e = parseInt(e, 10));
  const s = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: m,
    enabled: v,
  } = s;
  if ((!v && !r && !i) || s.destroyed || (s.animating && a.preventInteractionOnTransition))
    return !1;
  typeof t > 'u' && (t = s.params.speed);
  const y = Math.min(s.params.slidesPerGroupSkip, o);
  let w = y + Math.floor((o - y) / s.params.slidesPerGroup);
  w >= l.length && (w = l.length - 1);
  const h = -l[w];
  if (a.normalizeSlideIndex)
    for (let g = 0; g < u.length; g += 1) {
      const x = -Math.floor(h * 100),
        T = Math.floor(u[g] * 100),
        A = Math.floor(u[g + 1] * 100);
      typeof u[g + 1] < 'u'
        ? x >= T && x < A - (A - T) / 2
          ? (o = g)
          : x >= T && x < A && (o = g + 1)
        : x >= T && (o = g);
    }
  if (
    s.initialized &&
    o !== d &&
    ((!s.allowSlideNext &&
      (f ? h > s.translate && h > s.minTranslate() : h < s.translate && h < s.minTranslate())) ||
      (!s.allowSlidePrev && h > s.translate && h > s.maxTranslate() && (d || 0) !== o))
  )
    return !1;
  o !== (c || 0) && n && s.emit('beforeSlideChangeStart'), s.updateProgress(h);
  let p;
  if (
    (o > d ? (p = 'next') : o < d ? (p = 'prev') : (p = 'reset'),
    (f && -h === s.translate) || (!f && h === s.translate))
  )
    return (
      s.updateActiveIndex(o),
      a.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      a.effect !== 'slide' && s.setTranslate(h),
      p !== 'reset' && (s.transitionStart(n, p), s.transitionEnd(n, p)),
      !1
    );
  if (a.cssMode) {
    const g = s.isHorizontal(),
      x = f ? h : -h;
    if (t === 0) {
      const T = s.virtual && s.params.virtual.enabled;
      T && ((s.wrapperEl.style.scrollSnapType = 'none'), (s._immediateVirtual = !0)),
        T && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              m[g ? 'scrollLeft' : 'scrollTop'] = x;
            }))
          : (m[g ? 'scrollLeft' : 'scrollTop'] = x),
        T &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ''), (s._immediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return sE({ swiper: s, targetPosition: x, side: g ? 'left' : 'top' }), !0;
      m.scrollTo({ [g ? 'left' : 'top']: x, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    s.setTransition(t),
    s.setTranslate(h),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit('beforeTransitionStart', t, r),
    s.transitionStart(n, p),
    t === 0
      ? s.transitionEnd(n, p)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (x) {
            !s ||
              s.destroyed ||
              (x.target === this &&
                (s.wrapperEl.removeEventListener('transitionend', s.onSlideToWrapperTransitionEnd),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, p)));
          }),
        s.wrapperEl.addEventListener('transitionend', s.onSlideToWrapperTransitionEnd)),
    !0
  );
}
function $M(e, t, n, r) {
  e === void 0 && (e = 0), n === void 0 && (n = !0), typeof e == 'string' && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > 'u' && (t = i.params.speed);
  const s = i.grid && i.params.grid && i.params.grid.rows > 1;
  let o = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) o = o + i.virtual.slidesBefore;
    else {
      let a;
      if (s) {
        const f = o * i.params.grid.rows;
        a = i.slides.filter((m) => m.getAttribute('data-swiper-slide-index') * 1 === f)[0].column;
      } else a = i.getSlideIndexByData(o);
      const l = s ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
        { centeredSlides: u } = i.params;
      let c = i.params.slidesPerView;
      c === 'auto'
        ? (c = i.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          u && c % 2 === 0 && (c = c + 1));
      let d = l - a < c;
      if (
        (u && (d = d || a < Math.ceil(c / 2)),
        r && u && i.params.slidesPerView !== 'auto' && !s && (d = !1),
        d)
      ) {
        const f = u
          ? a < i.activeIndex
            ? 'prev'
            : 'next'
          : a - i.activeIndex - 1 < i.params.slidesPerView
          ? 'next'
          : 'prev';
        i.loopFix({
          direction: f,
          slideTo: !0,
          activeSlideIndex: f === 'next' ? a + 1 : a - l + 1,
          slideRealIndex: f === 'next' ? i.realIndex : void 0,
        });
      }
      if (s) {
        const f = o * i.params.grid.rows;
        o = i.slides.filter((m) => m.getAttribute('data-swiper-slide-index') * 1 === f)[0].column;
      } else o = i.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(o, t, n, r);
    }),
    i
  );
}
function HM(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: s, animating: o } = r;
  if (!i || r.destroyed) return r;
  typeof e > 'u' && (e = r.params.speed);
  let a = s.slidesPerGroup;
  s.slidesPerView === 'auto' &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic('current', !0), 1));
  const l = r.activeIndex < s.slidesPerGroupSkip ? 1 : a,
    u = r.virtual && s.virtual.enabled;
  if (s.loop) {
    if (o && !u && s.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: 'next' }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && s.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + l, e, t, n);
        }),
        !0
      );
  }
  return s.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + l, e, t, n);
}
function WM(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { params: i, snapGrid: s, slidesGrid: o, rtlTranslate: a, enabled: l, animating: u } = r;
  if (!l || r.destroyed) return r;
  typeof e > 'u' && (e = r.params.speed);
  const c = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: 'prev' }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const d = a ? r.translate : -r.translate;
  function f(h) {
    return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h);
  }
  const m = f(d),
    v = s.map((h) => f(h));
  let y = s[v.indexOf(m) - 1];
  if (typeof y > 'u' && i.cssMode) {
    let h;
    s.forEach((p, g) => {
      m >= p && (h = g);
    }),
      typeof h < 'u' && (y = s[h > 0 ? h - 1 : h]);
  }
  let w = 0;
  if (
    (typeof y < 'u' &&
      ((w = o.indexOf(y)),
      w < 0 && (w = r.activeIndex - 1),
      i.slidesPerView === 'auto' &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((w = w - r.slidesPerViewDynamic('previous', !0) + 1), (w = Math.max(w, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const h =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(h, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(w, e, t, n);
      }),
      !0
    );
  return r.slideTo(w, e, t, n);
}
function GM(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed)
    return typeof e > 'u' && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n);
}
function qM(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > 'u' && (e = i.params.speed);
  let s = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, s),
    a = o + Math.floor((s - o) / i.params.slidesPerGroup),
    l = i.rtlTranslate ? i.translate : -i.translate;
  if (l >= i.snapGrid[a]) {
    const u = i.snapGrid[a],
      c = i.snapGrid[a + 1];
    l - u > (c - u) * r && (s += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[a - 1],
      c = i.snapGrid[a];
    l - u <= (c - u) * r && (s -= i.params.slidesPerGroup);
  }
  return (s = Math.max(s, 0)), (s = Math.min(s, i.slidesGrid.length - 1)), i.slideTo(s, e, t, n);
}
function KM() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    s;
  const o = e.isElement ? 'swiper-slide' : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (s = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 || i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(Yn(n, `${o}[data-swiper-slide-index="${s}"]`)[0])),
            $h(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(Yn(n, `${o}[data-swiper-slide-index="${s}"]`)[0])),
          $h(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var ZM = {
  slideTo: UM,
  slideToLoop: $M,
  slideNext: HM,
  slidePrev: WM,
  slideReset: GM,
  slideToClosest: qM,
  slideToClickedSlide: KM,
};
function QM(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      Yn(r, `.${n.slideClass}, swiper-slide`).forEach((d, f) => {
        d.setAttribute('data-swiper-slide-index', f);
      });
    },
    s = t.grid && n.grid && n.grid.rows > 1,
    o = n.slidesPerGroup * (s ? n.grid.rows : 1),
    a = t.slides.length % o !== 0,
    l = s && t.slides.length % n.grid.rows !== 0,
    u = (c) => {
      for (let d = 0; d < c; d += 1) {
        const f = t.isElement
          ? mc('swiper-slide', [n.slideBlankClass])
          : mc('div', [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(f);
      }
    };
  if (a) {
    if (n.loopAddBlankSlides) {
      const c = o - (t.slides.length % o);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      pc(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)',
      );
    i();
  } else if (l) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      pc(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)',
      );
    i();
  } else i();
  t.loopFix({ slideRealIndex: e, direction: n.centeredSlides ? void 0 : 'next' });
}
function YM(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: s,
    byController: o,
    byMousewheel: a,
  } = e === void 0 ? {} : e;
  const l = this;
  if (!l.params.loop) return;
  l.emit('beforeLoopFix');
  const { slides: u, allowSlidePrev: c, allowSlideNext: d, slidesEl: f, params: m } = l,
    { centeredSlides: v } = m;
  if (((l.allowSlidePrev = !0), (l.allowSlideNext = !0), l.virtual && m.virtual.enabled)) {
    n &&
      (!m.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : m.centeredSlides && l.snapIndex < m.slidesPerView
        ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
        : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = c),
      (l.allowSlideNext = d),
      l.emit('loopFix');
    return;
  }
  let y = m.slidesPerView;
  y === 'auto'
    ? (y = l.slidesPerViewDynamic())
    : ((y = Math.ceil(parseFloat(m.slidesPerView, 10))), v && y % 2 === 0 && (y = y + 1));
  const w = m.slidesPerGroupAuto ? y : m.slidesPerGroup;
  let h = w;
  h % w !== 0 && (h += w - (h % w)), (h += m.loopAdditionalSlides), (l.loopedSlides = h);
  const p = l.grid && m.grid && m.grid.rows > 1;
  u.length < y + h
    ? pc(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters',
      )
    : p &&
      m.grid.fill === 'row' &&
      pc('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
  const g = [],
    x = [];
  let T = l.activeIndex;
  typeof s > 'u'
    ? (s = l.getSlideIndex(u.filter((j) => j.classList.contains(m.slideActiveClass))[0]))
    : (T = s);
  const A = r === 'next' || !r,
    S = r === 'prev' || !r;
  let b = 0,
    L = 0;
  const P = p ? Math.ceil(u.length / m.grid.rows) : u.length,
    N = (p ? u[s].column : s) + (v && typeof i > 'u' ? -y / 2 + 0.5 : 0);
  if (N < h) {
    b = Math.max(h - N, w);
    for (let j = 0; j < h - N; j += 1) {
      const G = j - Math.floor(j / P) * P;
      if (p) {
        const Q = P - G - 1;
        for (let he = u.length - 1; he >= 0; he -= 1) u[he].column === Q && g.push(he);
      } else g.push(P - G - 1);
    }
  } else if (N + y > P - h) {
    L = Math.max(N - (P - h * 2), w);
    for (let j = 0; j < L; j += 1) {
      const G = j - Math.floor(j / P) * P;
      p
        ? u.forEach((Q, he) => {
            Q.column === G && x.push(he);
          })
        : x.push(G);
    }
  }
  if (
    ((l.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      l.__preventObserver__ = !1;
    }),
    S &&
      g.forEach((j) => {
        (u[j].swiperLoopMoveDOM = !0), f.prepend(u[j]), (u[j].swiperLoopMoveDOM = !1);
      }),
    A &&
      x.forEach((j) => {
        (u[j].swiperLoopMoveDOM = !0), f.append(u[j]), (u[j].swiperLoopMoveDOM = !1);
      }),
    l.recalcSlides(),
    m.slidesPerView === 'auto'
      ? l.updateSlides()
      : p &&
        ((g.length > 0 && S) || (x.length > 0 && A)) &&
        l.slides.forEach((j, G) => {
          l.grid.updateSlide(G, j, l.slides);
        }),
    m.watchSlidesProgress && l.updateSlidesOffset(),
    n)
  ) {
    if (g.length > 0 && S) {
      if (typeof t > 'u') {
        const j = l.slidesGrid[T],
          Q = l.slidesGrid[T + b] - j;
        a
          ? l.setTranslate(l.translate - Q)
          : (l.slideTo(T + Math.ceil(b), 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - Q),
              (l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - Q)));
      } else if (i) {
        const j = p ? g.length / m.grid.rows : g.length;
        l.slideTo(l.activeIndex + j, 0, !1, !0), (l.touchEventsData.currentTranslate = l.translate);
      }
    } else if (x.length > 0 && A)
      if (typeof t > 'u') {
        const j = l.slidesGrid[T],
          Q = l.slidesGrid[T - L] - j;
        a
          ? l.setTranslate(l.translate - Q)
          : (l.slideTo(T - L, 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - Q),
              (l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - Q)));
      } else {
        const j = p ? x.length / m.grid.rows : x.length;
        l.slideTo(l.activeIndex - j, 0, !1, !0);
      }
  }
  if (
    ((l.allowSlidePrev = c), (l.allowSlideNext = d), l.controller && l.controller.control && !o)
  ) {
    const j = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(l.controller.control)
      ? l.controller.control.forEach((G) => {
          !G.destroyed &&
            G.params.loop &&
            G.loopFix({ ...j, slideTo: G.params.slidesPerView === m.slidesPerView ? n : !1 });
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix({
          ...j,
          slideTo: l.controller.control.params.slidesPerView === m.slidesPerView ? n : !1,
        });
  }
  l.emit('loopFix');
}
function XM() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const s =
      typeof i.swiperSlideIndex > 'u'
        ? i.getAttribute('data-swiper-slide-index') * 1
        : i.swiperSlideIndex;
    r[s] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute('data-swiper-slide-index');
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var JM = { loopCreate: QM, loopFix: YM, loopDestroy: XM };
function eD(e) {
  const t = this;
  if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
  const n = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = 'move'),
    (n.style.cursor = e ? 'grabbing' : 'grab'),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function tD() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var nD = { setGrabCursor: eD, unsetGrabCursor: tD };
function rD(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === Tr() || r === un()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function s0(e, t, n) {
  const r = un(),
    { params: i } = e,
    s = i.edgeSwipeDetection,
    o = i.edgeSwipeThreshold;
  return s && (n <= o || n >= r.innerWidth - o)
    ? s === 'prevent'
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function iD(e) {
  const t = this,
    n = Tr();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === 'pointerdown') {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === 'touchstart' &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === 'touchstart') {
    s0(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: s, touches: o, enabled: a } = t;
  if (
    !a ||
    (!s.simulateTouch && r.pointerType === 'mouse') ||
    (t.animating && s.preventInteractionOnTransition)
  )
    return;
  !t.animating && s.cssMode && s.loop && t.loopFix();
  let l = r.target;
  if (
    (s.touchEventsTarget === 'wrapper' && !t.wrapperEl.contains(l)) ||
    ('which' in r && r.which === 3) ||
    ('button' in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const u = !!s.noSwipingClass && s.noSwipingClass !== '',
    c = r.composedPath ? r.composedPath() : r.path;
  u && r.target && r.target.shadowRoot && c && (l = c[0]);
  const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    f = !!(r.target && r.target.shadowRoot);
  if (s.noSwiping && (f ? rD(d, l) : l.closest(d))) {
    t.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
  (o.currentX = r.pageX), (o.currentY = r.pageY);
  const m = o.currentX,
    v = o.currentY;
  if (!s0(t, r, m)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = m),
    (o.startY = v),
    (i.touchStartTime = hc()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    s.threshold > 0 && (i.allowThresholdMove = !1);
  let y = !0;
  l.matches(i.focusableElements) && ((y = !1), l.nodeName === 'SELECT' && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== l &&
      n.activeElement.blur();
  const w = y && t.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || w) && !l.isContentEditable && r.preventDefault(),
    s.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !s.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit('touchStart', r);
}
function sD(e) {
  const t = Tr(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: s, rtlTranslate: o, enabled: a } = n;
  if (!a || (!i.simulateTouch && e.pointerType === 'mouse')) return;
  let l = e;
  if (
    (l.originalEvent && (l = l.originalEvent),
    l.type === 'pointermove' && (r.touchId !== null || l.pointerId !== r.pointerId))
  )
    return;
  let u;
  if (l.type === 'touchmove') {
    if (
      ((u = [...l.changedTouches].filter((A) => A.identifier === r.touchId)[0]),
      !u || u.identifier !== r.touchId)
    )
      return;
  } else u = l;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit('touchMoveOpposite', l);
    return;
  }
  const c = u.pageX,
    d = u.pageY;
  if (l.preventedByNestedSwiper) {
    (s.startX = c), (s.startY = d);
    return;
  }
  if (!n.allowTouchMove) {
    l.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(s, { startX: c, startY: d, currentX: c, currentY: d }),
        (r.touchStartTime = hc()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (d < s.startY && n.translate <= n.maxTranslate()) ||
        (d > s.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (c < s.startX && n.translate <= n.maxTranslate()) ||
      (c > s.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (t.activeElement && l.target === t.activeElement && l.target.matches(r.focusableElements)) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit('touchMove', l),
    (s.previousX = s.currentX),
    (s.previousY = s.currentY),
    (s.currentX = c),
    (s.currentY = d);
  const f = s.currentX - s.startX,
    m = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(f ** 2 + m ** 2) < n.params.threshold) return;
  if (typeof r.isScrolling > 'u') {
    let A;
    (n.isHorizontal() && s.currentY === s.startY) || (n.isVertical() && s.currentX === s.startX)
      ? (r.isScrolling = !1)
      : f * f + m * m >= 25 &&
        ((A = (Math.atan2(Math.abs(m), Math.abs(f)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal() ? A > i.touchAngle : 90 - A > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit('touchMoveOpposite', l),
    typeof r.startMoving > 'u' &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (r.startMoving = !0),
    r.isScrolling || (l.type === 'touchmove' && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && l.cancelable && l.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && l.stopPropagation();
  let v = n.isHorizontal() ? f : m,
    y = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  i.oneWayMovement && ((v = Math.abs(v) * (o ? 1 : -1)), (y = Math.abs(y) * (o ? 1 : -1))),
    (s.diff = v),
    (v *= i.touchRatio),
    o && ((v = -v), (y = -y));
  const w = n.touchesDirection;
  (n.swipeDirection = v > 0 ? 'prev' : 'next'), (n.touchesDirection = y > 0 ? 'prev' : 'next');
  const h = n.params.loop && !i.cssMode,
    p =
      (n.touchesDirection === 'next' && n.allowSlideNext) ||
      (n.touchesDirection === 'prev' && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (h && p && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const A = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
      n.wrapperEl.dispatchEvent(A);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0),
      n.emit('sliderFirstMove', l);
  }
  let g;
  if (
    (new Date().getTime(),
    r.isMoved && r.allowThresholdMove && w !== n.touchesDirection && h && p && Math.abs(v) >= 1)
  ) {
    Object.assign(s, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit('sliderMove', l), (r.isMoved = !0), (r.currentTranslate = v + r.startTranslate);
  let x = !0,
    T = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (T = 0),
    v > 0
      ? (h &&
          p &&
          !g &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
        r.currentTranslate > n.minTranslate() &&
          ((x = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + v) ** T)))
      : v < 0 &&
        (h &&
          p &&
          !g &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() + n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === 'auto'
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((x = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - v) ** T))),
    x && (l.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === 'next' &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === 'prev' &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev && !n.allowSlideNext && (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(v) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          (s.diff = n.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) || i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function oD(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === 'touchend' || r.type === 'touchcancel') {
    if (
      ((i = [...r.changedTouches].filter((T) => T.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(r.type) &&
    !(
      ['pointercancel', 'contextmenu'].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const { params: o, touches: a, rtlTranslate: l, slidesGrid: u, enabled: c } = t;
  if (!c || (!o.simulateTouch && r.pointerType === 'mouse')) return;
  if (
    (n.allowTouchCallbacks && t.emit('touchEnd', r), (n.allowTouchCallbacks = !1), !n.isTouched)
  ) {
    n.isMoved && o.grabCursor && t.setGrabCursor(!1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  o.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const d = hc(),
    f = d - n.touchStartTime;
  if (t.allowClick) {
    const T = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((T && T[0]) || r.target, T),
      t.emit('tap click', r),
      f < 300 && d - n.lastClickTime < 300 && t.emit('doubleTap doubleClick', r);
  }
  if (
    ((n.lastClickTime = hc()),
    $h(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (a.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let m;
  if (
    (o.followFinger ? (m = l ? t.translate : -t.translate) : (m = -n.currentTranslate), o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: m });
    return;
  }
  const v = m >= -t.maxTranslate() && !t.params.loop;
  let y = 0,
    w = t.slidesSizesGrid[0];
  for (let T = 0; T < u.length; T += T < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
    const A = T < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[T + A] < 'u'
      ? (v || (m >= u[T] && m < u[T + A])) && ((y = T), (w = u[T + A] - u[T]))
      : (v || m >= u[T]) && ((y = T), (w = u[u.length - 1] - u[u.length - 2]));
  }
  let h = null,
    p = null;
  o.rewind &&
    (t.isBeginning
      ? (p =
          o.virtual && o.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (h = 0));
  const g = (m - u[y]) / w,
    x = y < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (f > o.longSwipesMs) {
    if (!o.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === 'next' &&
      (g >= o.longSwipesRatio ? t.slideTo(o.rewind && t.isEnd ? h : y + x) : t.slideTo(y)),
      t.swipeDirection === 'prev' &&
        (g > 1 - o.longSwipesRatio
          ? t.slideTo(y + x)
          : p !== null && g < 0 && Math.abs(g) > o.longSwipesRatio
          ? t.slideTo(p)
          : t.slideTo(y));
  } else {
    if (!o.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(y + x)
        : t.slideTo(y)
      : (t.swipeDirection === 'next' && t.slideTo(h !== null ? h : y + x),
        t.swipeDirection === 'prev' && t.slideTo(p !== null ? p : y));
  }
}
function o0() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e,
    o = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const a = o && t.loop;
  (t.slidesPerView === 'auto' || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
}
function aD(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function lD() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const s = e.maxTranslate() - e.minTranslate();
  s === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / s),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit('setTranslate', e.translate, !1);
}
function uD(e) {
  const t = this;
  Ru(t, e.target),
    !(t.params.cssMode || (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)) &&
      t.update();
}
function cD() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'));
}
const cE = (e, t) => {
  const n = Tr(),
    { params: r, el: i, wrapperEl: s, device: o } = e,
    a = !!r.nested,
    l = t === 'on' ? 'addEventListener' : 'removeEventListener',
    u = t;
  n[l]('touchstart', e.onDocumentTouchStart, { passive: !1, capture: a }),
    i[l]('touchstart', e.onTouchStart, { passive: !1 }),
    i[l]('pointerdown', e.onTouchStart, { passive: !1 }),
    n[l]('touchmove', e.onTouchMove, { passive: !1, capture: a }),
    n[l]('pointermove', e.onTouchMove, { passive: !1, capture: a }),
    n[l]('touchend', e.onTouchEnd, { passive: !0 }),
    n[l]('pointerup', e.onTouchEnd, { passive: !0 }),
    n[l]('pointercancel', e.onTouchEnd, { passive: !0 }),
    n[l]('touchcancel', e.onTouchEnd, { passive: !0 }),
    n[l]('pointerout', e.onTouchEnd, { passive: !0 }),
    n[l]('pointerleave', e.onTouchEnd, { passive: !0 }),
    n[l]('contextmenu', e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) && i[l]('click', e.onClick, !0),
    r.cssMode && s[l]('scroll', e.onScroll),
    r.updateOnWindowResize
      ? e[u](
          o.ios || o.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate',
          o0,
          !0,
        )
      : e[u]('observerUpdate', o0, !0),
    i[l]('load', e.onLoad, { capture: !0 });
};
function dD() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = iD.bind(e)),
    (e.onTouchMove = sD.bind(e)),
    (e.onTouchEnd = oD.bind(e)),
    (e.onDocumentTouchStart = cD.bind(e)),
    t.cssMode && (e.onScroll = lD.bind(e)),
    (e.onClick = aD.bind(e)),
    (e.onLoad = uD.bind(e)),
    cE(e, 'on');
}
function fD() {
  cE(this, 'off');
}
var hD = { attachEvents: dD, detachEvents: fD };
const a0 = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function pD() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    s = r.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const o = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
  if (!o || e.currentBreakpoint === o) return;
  const l = (o in s ? s[o] : void 0) || e.originalParams,
    u = a0(e, r),
    c = a0(e, l),
    d = e.params.grabCursor,
    f = l.grabCursor,
    m = r.enabled;
  u && !c
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((l.grid.fill && l.grid.fill === 'column') || (!l.grid.fill && r.grid.fill === 'column')) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    d && !f ? e.unsetGrabCursor() : !d && f && e.setGrabCursor(),
    ['navigation', 'pagination', 'scrollbar'].forEach((g) => {
      if (typeof l[g] > 'u') return;
      const x = r[g] && r[g].enabled,
        T = l[g] && l[g].enabled;
      x && !T && e[g].disable(), !x && T && e[g].enable();
    });
  const v = l.direction && l.direction !== r.direction,
    y = r.loop && (l.slidesPerView !== r.slidesPerView || v),
    w = r.loop;
  v && n && e.changeDirection(), en(e.params, l);
  const h = e.params.enabled,
    p = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    m && !h ? e.disable() : !m && h && e.enable(),
    (e.currentBreakpoint = o),
    e.emit('_beforeBreakpoint', l),
    n &&
      (y
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !w && p
        ? (e.loopCreate(t), e.updateSlides())
        : w && !p && e.loopDestroy()),
    e.emit('breakpoint', l);
}
function mD(e, t, n) {
  if ((t === void 0 && (t = 'window'), !e || (t === 'container' && !n))) return;
  let r = !1;
  const i = un(),
    s = t === 'window' ? i.innerHeight : n.clientHeight,
    o = Object.keys(e).map((a) => {
      if (typeof a == 'string' && a.indexOf('@') === 0) {
        const l = parseFloat(a.substr(1));
        return { value: s * l, point: a };
      }
      return { value: a, point: a };
    });
  o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < o.length; a += 1) {
    const { point: l, value: u } = o[a];
    t === 'window'
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = l)
      : u <= n.clientWidth && (r = l);
  }
  return r || 'max';
}
var gD = { setBreakpoint: pD, getBreakpoint: mD };
function vD(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == 'object'
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == 'string' && n.push(t + r);
    }),
    n
  );
}
function yD() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: s } = e,
    o = vD(
      [
        'initialized',
        n.direction,
        { 'free-mode': e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        { 'grid-column': n.grid && n.grid.rows > 1 && n.grid.fill === 'column' },
        { android: s.android },
        { ios: s.ios },
        { 'css-mode': n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { 'watch-progress': n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    );
  t.push(...o), i.classList.add(...t), e.emitContainerClasses();
}
function xD() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var wD = { addClasses: yD, removeClasses: xD };
function SD() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > s;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
}
var ED = { checkOverflow: SD },
  Gh = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    swiperElementNodeName: 'SWIPER-CONTAINER',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: 'swiper',
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function TD(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      s = r[i];
    if (typeof s != 'object' || s === null) {
      en(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === 'navigation' &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ['pagination', 'scrollbar'].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && 'enabled' in s))
    ) {
      en(t, r);
      return;
    }
    typeof e[i] == 'object' && !('enabled' in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      en(t, r);
  };
}
const lf = {
    eventsEmitter: wM,
    update: AM,
    translate: IM,
    transition: BM,
    slide: ZM,
    loop: JM,
    grabCursor: nD,
    events: hD,
    breakpoints: gD,
    checkOverflow: ED,
    classes: wD,
  },
  uf = {};
let Hm = class cr {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === 'Object'
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = en({}, n)),
      t && !n.el && (n.el = t);
    const o = Tr();
    if (n.el && typeof n.el == 'string' && o.querySelectorAll(n.el).length > 1) {
      const c = [];
      return (
        o.querySelectorAll(n.el).forEach((d) => {
          const f = en({}, n, { el: d });
          c.push(new cr(f));
        }),
        c
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = aE()),
      (a.device = lE({ userAgent: n.userAgent })),
      (a.browser = vM()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const l = {};
    a.modules.forEach((c) => {
      c({
        params: n,
        swiper: a,
        extendParams: TD(n, l),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const u = en({}, Gh, l);
    return (
      (a.params = en({}, u, uf, n)),
      (a.originalParams = en({}, a.params)),
      (a.passedParams = en({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((c) => {
          a.on(c, a.params.on[c]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === 'horizontal';
        },
        isVertical() {
          return a.params.direction === 'vertical';
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit('_swiper'),
      a.params.init && a.init(),
      a
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom',
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = Yn(n, `.${r.slideClass}, swiper-slide`),
      s = gc(i[0]);
    return gc(t) - s;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter((n) => n.getAttribute('data-swiper-slide-index') * 1 === t)[0],
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = Yn(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled || ((t.enabled = !0), t.params.grabCursor && t.setGrabCursor(), t.emit('enable'));
  }
  disable() {
    const t = this;
    t.enabled && ((t.enabled = !1), t.params.grabCursor && t.unsetGrabCursor(), t.emit('disable'));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      o = (r.maxTranslate() - i) * t + i;
    r.translateTo(o, typeof n > 'u' ? 0 : n), r.updateActiveIndex(), r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(' ')
      .filter((r) => r.indexOf('swiper') === 0 || r.indexOf(t.params.containerModifierClass) === 0);
    t.emit('_containerClasses', n.join(' '));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ''
      : t.className
          .split(' ')
          .filter((r) => r.indexOf('swiper-slide') === 0 || r.indexOf(n.params.slideClass) === 0)
          .join(' ');
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit('_slideClass', r, i);
    }),
      t.emit('_slideClasses', n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = 'current'), n === void 0 && (n = !1);
    const r = this,
      { params: i, slides: s, slidesGrid: o, slidesSizesGrid: a, size: l, activeIndex: u } = r;
    let c = 1;
    if (typeof i.slidesPerView == 'number') return i.slidesPerView;
    if (i.centeredSlides) {
      let d = s[u] ? Math.ceil(s[u].swiperSlideSize) : 0,
        f;
      for (let m = u + 1; m < s.length; m += 1)
        s[m] && !f && ((d += Math.ceil(s[m].swiperSlideSize)), (c += 1), d > l && (f = !0));
      for (let m = u - 1; m >= 0; m -= 1)
        s[m] && !f && ((d += s[m].swiperSlideSize), (c += 1), d > l && (f = !0));
    } else if (t === 'current')
      for (let d = u + 1; d < s.length; d += 1)
        (n ? o[d] + a[d] - o[u] < l : o[d] - o[u] < l) && (c += 1);
    else for (let d = u - 1; d >= 0; d -= 1) o[u] - o[d] < l && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && Ru(t, o);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let s;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode) i(), r.autoHeight && t.updateAutoHeight();
    else {
      if ((r.slidesPerView === 'auto' || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
        const o = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        s = t.slideTo(o.length - 1, 0, !1, !0);
      } else s = t.slideTo(t.activeIndex, 0, !1, !0);
      s || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit('update');
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === 'horizontal' ? 'vertical' : 'horizontal'),
      t === i ||
        (t !== 'horizontal' && t !== 'vertical') ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((s) => {
          t === 'vertical' ? (s.style.width = '') : (s.style.height = '');
        }),
        r.emit('changeDirection'),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === 'rtl') ||
      (!n.rtl && t === 'ltr') ||
      ((n.rtl = t === 'rtl'),
      (n.rtlTranslate = n.params.direction === 'horizontal' && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`), (n.el.dir = 'rtl'))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`), (n.el.dir = 'ltr')),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == 'string' && (r = document.querySelector(r)), !r)) return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName === n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () => `.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`;
    let o =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : Yn(r, i())[0];
    return (
      !o &&
        n.params.createElements &&
        ((o = mc('div', n.params.wrapperClass)),
        r.append(o),
        Yn(r, `.${n.params.slideClass}`).forEach((a) => {
          o.append(a);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: o,
        slidesEl: n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === 'rtl' || Xr(r, 'direction') === 'rtl',
        rtlTranslate:
          n.params.direction === 'horizontal' &&
          (r.dir.toLowerCase() === 'rtl' || Xr(r, 'direction') === 'rtl'),
        wrongRTL: Xr(o, 'display') === '-webkit-box',
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit('beforeInit'),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          )
        : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((s) => {
        s.complete
          ? Ru(n, s)
          : s.addEventListener('load', (o) => {
              Ru(n, o.target);
            });
      }),
      Wh(n),
      (n.initialized = !0),
      Wh(n),
      n.emit('init'),
      n.emit('afterInit'),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: s, wrapperEl: o, slides: a } = r;
    return (
      typeof r.params > 'u' ||
        r.destroyed ||
        (r.emit('beforeDestroy'),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          s.removeAttribute('style'),
          o.removeAttribute('style'),
          a &&
            a.length &&
            a.forEach((l) => {
              l.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass,
              ),
                l.removeAttribute('style'),
                l.removeAttribute('data-swiper-slide-index');
            })),
        r.emit('destroy'),
        Object.keys(r.eventsListeners).forEach((l) => {
          r.off(l);
        }),
        t !== !1 && ((r.el.swiper = null), lM(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    en(uf, t);
  }
  static get extendedDefaults() {
    return uf;
  }
  static get defaults() {
    return Gh;
  }
  static installModule(t) {
    cr.prototype.__modules__ || (cr.prototype.__modules__ = []);
    const n = cr.prototype.__modules__;
    typeof t == 'function' && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => cr.installModule(n)), cr)
      : (cr.installModule(t), cr);
  }
};
Object.keys(lf).forEach((e) => {
  Object.keys(lf[e]).forEach((t) => {
    Hm.prototype[t] = lf[e][t];
  });
});
Hm.use([yM, xM]);
const dE = [
  'eventsPrefix',
  'injectStyles',
  'injectStylesUrls',
  'modules',
  'init',
  '_direction',
  'oneWayMovement',
  'swiperElementNodeName',
  'touchEventsTarget',
  'initialSlide',
  '_speed',
  'cssMode',
  'updateOnWindowResize',
  'resizeObserver',
  'nested',
  'focusableElements',
  '_enabled',
  '_width',
  '_height',
  'preventInteractionOnTransition',
  'userAgent',
  'url',
  '_edgeSwipeDetection',
  '_edgeSwipeThreshold',
  '_freeMode',
  '_autoHeight',
  'setWrapperSize',
  'virtualTranslate',
  '_effect',
  'breakpoints',
  'breakpointsBase',
  '_spaceBetween',
  '_slidesPerView',
  'maxBackfaceHiddenSlides',
  '_grid',
  '_slidesPerGroup',
  '_slidesPerGroupSkip',
  '_slidesPerGroupAuto',
  '_centeredSlides',
  '_centeredSlidesBounds',
  '_slidesOffsetBefore',
  '_slidesOffsetAfter',
  'normalizeSlideIndex',
  '_centerInsufficientSlides',
  '_watchOverflow',
  'roundLengths',
  'touchRatio',
  'touchAngle',
  'simulateTouch',
  '_shortSwipes',
  '_longSwipes',
  'longSwipesRatio',
  'longSwipesMs',
  '_followFinger',
  'allowTouchMove',
  '_threshold',
  'touchMoveStopPropagation',
  'touchStartPreventDefault',
  'touchStartForcePreventDefault',
  'touchReleaseOnEdges',
  'uniqueNavElements',
  '_resistance',
  '_resistanceRatio',
  '_watchSlidesProgress',
  '_grabCursor',
  'preventClicks',
  'preventClicksPropagation',
  '_slideToClickedSlide',
  '_loop',
  'loopAdditionalSlides',
  'loopAddBlankSlides',
  'loopPreventsSliding',
  '_rewind',
  '_allowSlidePrev',
  '_allowSlideNext',
  '_swipeHandler',
  '_noSwiping',
  'noSwipingClass',
  'noSwipingSelector',
  'passiveListeners',
  'containerModifierClass',
  'slideClass',
  'slideActiveClass',
  'slideVisibleClass',
  'slideFullyVisibleClass',
  'slideNextClass',
  'slidePrevClass',
  'slideBlankClass',
  'wrapperClass',
  'lazyPreloaderClass',
  'lazyPreloadPrevNext',
  'runCallbacksOnInit',
  'observer',
  'observeParents',
  'observeSlideChildren',
  'a11y',
  '_autoplay',
  '_controller',
  'coverflowEffect',
  'cubeEffect',
  'fadeEffect',
  'flipEffect',
  'creativeEffect',
  'cardsEffect',
  'hashNavigation',
  'history',
  'keyboard',
  'mousewheel',
  '_navigation',
  '_pagination',
  'parallax',
  '_scrollbar',
  '_thumbs',
  'virtual',
  'zoom',
  'control',
];
function is(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object' &&
    !e.__swiper__
  );
}
function Hs(e, t) {
  const n = ['__proto__', 'constructor', 'prototype'];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > 'u'
        ? (e[r] = t[r])
        : is(t[r]) && is(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : Hs(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function fE(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation && typeof e.navigation.nextEl > 'u' && typeof e.navigation.prevEl > 'u'
  );
}
function hE(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > 'u';
}
function pE(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > 'u';
}
function mE(e) {
  e === void 0 && (e = '');
  const t = e
      .split(' ')
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(' ')
  );
}
function bD(e) {
  return (
    e === void 0 && (e = ''),
    e ? (e.includes('swiper-wrapper') ? e : `swiper-wrapper ${e}`) : 'swiper-wrapper'
  );
}
function CD(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: s,
    prevEl: o,
    scrollbarEl: a,
    paginationEl: l,
  } = e;
  const u = i.filter((L) => L !== 'children' && L !== 'direction' && L !== 'wrapperClass'),
    { params: c, pagination: d, navigation: f, scrollbar: m, virtual: v, thumbs: y } = t;
  let w, h, p, g, x, T, A, S;
  i.includes('thumbs') && r.thumbs && r.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (w = !0),
    i.includes('controller') &&
      r.controller &&
      r.controller.control &&
      c.controller &&
      !c.controller.control &&
      (h = !0),
    i.includes('pagination') &&
      r.pagination &&
      (r.pagination.el || l) &&
      (c.pagination || c.pagination === !1) &&
      d &&
      !d.el &&
      (p = !0),
    i.includes('scrollbar') &&
      r.scrollbar &&
      (r.scrollbar.el || a) &&
      (c.scrollbar || c.scrollbar === !1) &&
      m &&
      !m.el &&
      (g = !0),
    i.includes('navigation') &&
      r.navigation &&
      (r.navigation.prevEl || o) &&
      (r.navigation.nextEl || s) &&
      (c.navigation || c.navigation === !1) &&
      f &&
      !f.prevEl &&
      !f.nextEl &&
      (x = !0);
  const b = (L) => {
    t[L] &&
      (t[L].destroy(),
      L === 'navigation'
        ? (t.isElement && (t[L].prevEl.remove(), t[L].nextEl.remove()),
          (c[L].prevEl = void 0),
          (c[L].nextEl = void 0),
          (t[L].prevEl = void 0),
          (t[L].nextEl = void 0))
        : (t.isElement && t[L].el.remove(), (c[L].el = void 0), (t[L].el = void 0)));
  };
  i.includes('loop') &&
    t.isElement &&
    (c.loop && !r.loop ? (T = !0) : !c.loop && r.loop ? (A = !0) : (S = !0)),
    u.forEach((L) => {
      if (is(c[L]) && is(r[L]))
        Object.assign(c[L], r[L]),
          (L === 'navigation' || L === 'pagination' || L === 'scrollbar') &&
            'enabled' in r[L] &&
            !r[L].enabled &&
            b(L);
      else {
        const P = r[L];
        (P === !0 || P === !1) && (L === 'navigation' || L === 'pagination' || L === 'scrollbar')
          ? P === !1 && b(L)
          : (c[L] = r[L]);
      }
    }),
    u.includes('controller') &&
      !h &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    i.includes('children') && n && v && c.virtual.enabled
      ? ((v.slides = n), v.update(!0))
      : i.includes('virtual') && v && c.virtual.enabled && (n && (v.slides = n), v.update(!0)),
    i.includes('children') && n && c.loop && (S = !0),
    w && y.init() && y.update(!0),
    h && (t.controller.control = c.controller.control),
    p &&
      (t.isElement &&
        (!l || typeof l == 'string') &&
        ((l = document.createElement('div')),
        l.classList.add('swiper-pagination'),
        l.part.add('pagination'),
        t.el.appendChild(l)),
      l && (c.pagination.el = l),
      d.init(),
      d.render(),
      d.update()),
    g &&
      (t.isElement &&
        (!a || typeof a == 'string') &&
        ((a = document.createElement('div')),
        a.classList.add('swiper-scrollbar'),
        a.part.add('scrollbar'),
        t.el.appendChild(a)),
      a && (c.scrollbar.el = a),
      m.init(),
      m.updateSize(),
      m.setTranslate()),
    x &&
      (t.isElement &&
        ((!s || typeof s == 'string') &&
          ((s = document.createElement('div')),
          s.classList.add('swiper-button-next'),
          (s.innerHTML = t.hostEl.constructor.nextButtonSvg),
          s.part.add('button-next'),
          t.el.appendChild(s)),
        (!o || typeof o == 'string') &&
          ((o = document.createElement('div')),
          o.classList.add('swiper-button-prev'),
          (o.innerHTML = t.hostEl.constructor.prevButtonSvg),
          o.part.add('button-prev'),
          t.el.appendChild(o))),
      s && (c.navigation.nextEl = s),
      o && (c.navigation.prevEl = o),
      f.init(),
      f.update()),
    i.includes('allowSlideNext') && (t.allowSlideNext = r.allowSlideNext),
    i.includes('allowSlidePrev') && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes('direction') && t.changeDirection(r.direction, !1),
    (T || S) && t.loopDestroy(),
    (A || S) && t.loopCreate(),
    t.update();
}
function _D(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  Hs(n, Gh), (n._emitClasses = !0), (n.init = !1);
  const s = {},
    o = dE.map((l) => l.replace(/_/, '')),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((l) => {
      typeof e[l] > 'u' ||
        (o.indexOf(l) >= 0
          ? is(e[l])
            ? ((n[l] = {}), (i[l] = {}), Hs(n[l], e[l]), Hs(i[l], e[l]))
            : ((n[l] = e[l]), (i[l] = e[l]))
          : l.search(/on[A-Z]/) === 0 && typeof e[l] == 'function'
          ? t
            ? (r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
            : (n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
          : (s[l] = e[l]));
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((l) => {
      n[l] === !0 && (n[l] = {}), n[l] === !1 && delete n[l];
    }),
    { params: n, passedParams: i, rest: s, events: r }
  );
}
function PD(e, t) {
  let { el: n, nextEl: r, prevEl: i, paginationEl: s, scrollbarEl: o, swiper: a } = e;
  fE(t) &&
    r &&
    i &&
    ((a.params.navigation.nextEl = r),
    (a.originalParams.navigation.nextEl = r),
    (a.params.navigation.prevEl = i),
    (a.originalParams.navigation.prevEl = i)),
    hE(t) && s && ((a.params.pagination.el = s), (a.originalParams.pagination.el = s)),
    pE(t) && o && ((a.params.scrollbar.el = o), (a.originalParams.scrollbar.el = o)),
    a.init(n);
}
function kD(e, t, n, r, i) {
  const s = [];
  if (!t) return s;
  const o = (l) => {
    s.indexOf(l) < 0 && s.push(l);
  };
  if (n && r) {
    const l = r.map(i),
      u = n.map(i);
    l.join('') !== u.join('') && o('children'), r.length !== n.length && o('children');
  }
  return (
    dE
      .filter((l) => l[0] === '_')
      .map((l) => l.replace(/_/, ''))
      .forEach((l) => {
        if (l in e && l in t)
          if (is(e[l]) && is(t[l])) {
            const u = Object.keys(e[l]),
              c = Object.keys(t[l]);
            u.length !== c.length
              ? o(l)
              : (u.forEach((d) => {
                  e[l][d] !== t[l][d] && o(l);
                }),
                c.forEach((d) => {
                  e[l][d] !== t[l][d] && o(l);
                }));
          } else e[l] !== t[l] && o(l);
      }),
    s
  );
}
const RD = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
};
function vc() {
  return (
    (vc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vc.apply(this, arguments)
  );
}
function gE(e) {
  return e.type && e.type.displayName && e.type.displayName.includes('SwiperSlide');
}
function vE(e) {
  const t = [];
  return (
    Te.Children.toArray(e).forEach((n) => {
      gE(n)
        ? t.push(n)
        : n.props && n.props.children && vE(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function LD(e) {
  const t = [],
    n = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] };
  return (
    Te.Children.toArray(e).forEach((r) => {
      if (gE(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot]) n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = vE(r.props.children);
        i.length > 0 ? i.forEach((s) => t.push(s)) : n['container-end'].push(r);
      } else n['container-end'].push(r);
    }),
    { slides: t, slots: n }
  );
}
function AD(e, t, n) {
  if (!n) return null;
  const r = (c) => {
      let d = c;
      return c < 0 ? (d = t.length + c) : d >= t.length && (d = d - t.length), d;
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? 'right' : 'left']: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: s, to: o } = n,
    a = e.params.loop ? -t.length : 0,
    l = e.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = a; c < l; c += 1) c >= s && c <= o && u.push(t[r(c)]);
  return u.map((c, d) =>
    Te.cloneElement(c, { swiper: e, style: i, key: c.props.virtualIndex || c.key || `slide-${d}` }),
  );
}
function ma(e, t) {
  return typeof window > 'u' ? _.useEffect(e, t) : _.useLayoutEffect(e, t);
}
const l0 = _.createContext(null),
  OD = _.createContext(null),
  Wm = _.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = 'div',
        wrapperTag: i = 'div',
        children: s,
        onSwiper: o,
        ...a
      } = e === void 0 ? {} : e,
      l = !1;
    const [u, c] = _.useState('swiper'),
      [d, f] = _.useState(null),
      [m, v] = _.useState(!1),
      y = _.useRef(!1),
      w = _.useRef(null),
      h = _.useRef(null),
      p = _.useRef(null),
      g = _.useRef(null),
      x = _.useRef(null),
      T = _.useRef(null),
      A = _.useRef(null),
      S = _.useRef(null),
      { params: b, passedParams: L, rest: P, events: z } = _D(a),
      { slides: N, slots: j } = LD(s),
      G = () => {
        v(!m);
      };
    Object.assign(b.on, {
      _containerClasses(q, K) {
        c(K);
      },
    });
    const Q = () => {
      Object.assign(b.on, z), (l = !0);
      const q = { ...b };
      if (
        (delete q.wrapperClass,
        (h.current = new Hm(q)),
        h.current.virtual && h.current.params.virtual.enabled)
      ) {
        h.current.virtual.slides = N;
        const K = { cache: !1, slides: N, renderExternal: f, renderExternalUpdate: !1 };
        Hs(h.current.params.virtual, K), Hs(h.current.originalParams.virtual, K);
      }
    };
    w.current || Q(), h.current && h.current.on('_beforeBreakpoint', G);
    const he = () => {
        l ||
          !z ||
          !h.current ||
          Object.keys(z).forEach((q) => {
            h.current.on(q, z[q]);
          });
      },
      Re = () => {
        !z ||
          !h.current ||
          Object.keys(z).forEach((q) => {
            h.current.off(q, z[q]);
          });
      };
    _.useEffect(() => () => {
      h.current && h.current.off('_beforeBreakpoint', G);
    }),
      _.useEffect(() => {
        !y.current && h.current && (h.current.emitSlidesClasses(), (y.current = !0));
      }),
      ma(() => {
        if ((t && (t.current = w.current), !!w.current))
          return (
            h.current.destroyed && Q(),
            PD(
              {
                el: w.current,
                nextEl: x.current,
                prevEl: T.current,
                paginationEl: A.current,
                scrollbarEl: S.current,
                swiper: h.current,
              },
              b,
            ),
            o && !h.current.destroyed && o(h.current),
            () => {
              h.current && !h.current.destroyed && h.current.destroy(!0, !1);
            }
          );
      }, []),
      ma(() => {
        he();
        const q = kD(L, p.current, N, g.current, (K) => K.key);
        return (
          (p.current = L),
          (g.current = N),
          q.length &&
            h.current &&
            !h.current.destroyed &&
            CD({
              swiper: h.current,
              slides: N,
              passedParams: L,
              changedParams: q,
              nextEl: x.current,
              prevEl: T.current,
              scrollbarEl: S.current,
              paginationEl: A.current,
            }),
          () => {
            Re();
          }
        );
      }),
      ma(() => {
        RD(h.current);
      }, [d]);
    function D() {
      return b.virtual
        ? AD(h.current, N, d)
        : N.map((q, K) => Te.cloneElement(q, { swiper: h.current, swiperSlideIndex: K }));
    }
    return Te.createElement(
      r,
      vc({ ref: w, className: mE(`${u}${n ? ` ${n}` : ''}`) }, P),
      Te.createElement(
        OD.Provider,
        { value: h.current },
        j['container-start'],
        Te.createElement(
          i,
          { className: bD(b.wrapperClass) },
          j['wrapper-start'],
          D(),
          j['wrapper-end'],
        ),
        fE(b) &&
          Te.createElement(
            Te.Fragment,
            null,
            Te.createElement('div', { ref: T, className: 'swiper-button-prev' }),
            Te.createElement('div', { ref: x, className: 'swiper-button-next' }),
          ),
        pE(b) && Te.createElement('div', { ref: S, className: 'swiper-scrollbar' }),
        hE(b) && Te.createElement('div', { ref: A, className: 'swiper-pagination' }),
        j['container-end'],
      ),
    );
  });
Wm.displayName = 'Swiper';
const Ua = _.forwardRef(function (e, t) {
  let {
    tag: n = 'div',
    children: r,
    className: i = '',
    swiper: s,
    zoom: o,
    lazy: a,
    virtualIndex: l,
    swiperSlideIndex: u,
    ...c
  } = e === void 0 ? {} : e;
  const d = _.useRef(null),
    [f, m] = _.useState('swiper-slide'),
    [v, y] = _.useState(!1);
  function w(x, T, A) {
    T === d.current && m(A);
  }
  ma(() => {
    if (
      (typeof u < 'u' && (d.current.swiperSlideIndex = u),
      t && (t.current = d.current),
      !(!d.current || !s))
    ) {
      if (s.destroyed) {
        f !== 'swiper-slide' && m('swiper-slide');
        return;
      }
      return (
        s.on('_slideClass', w),
        () => {
          s && s.off('_slideClass', w);
        }
      );
    }
  }),
    ma(() => {
      s && d.current && !s.destroyed && m(s.getSlideClasses(d.current));
    }, [s]);
  const h = {
      isActive: f.indexOf('swiper-slide-active') >= 0,
      isVisible: f.indexOf('swiper-slide-visible') >= 0,
      isPrev: f.indexOf('swiper-slide-prev') >= 0,
      isNext: f.indexOf('swiper-slide-next') >= 0,
    },
    p = () => (typeof r == 'function' ? r(h) : r),
    g = () => {
      y(!0);
    };
  return Te.createElement(
    n,
    vc(
      { ref: d, className: mE(`${f}${i ? ` ${i}` : ''}`), 'data-swiper-slide-index': l, onLoad: g },
      c,
    ),
    o &&
      Te.createElement(
        l0.Provider,
        { value: h },
        Te.createElement(
          'div',
          {
            className: 'swiper-zoom-container',
            'data-swiper-zoom': typeof o == 'number' ? o : void 0,
          },
          p(),
          a && !v && Te.createElement('div', { className: 'swiper-lazy-preloader' }),
        ),
      ),
    !o &&
      Te.createElement(
        l0.Provider,
        { value: h },
        p(),
        a && !v && Te.createElement('div', { className: 'swiper-lazy-preloader' }),
      ),
  );
});
Ua.displayName = 'SwiperSlide';
function yE(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let s = Yn(e.el, `.${r[i]}`)[0];
          s || ((s = mc('div', r[i])), (s.className = r[i]), e.el.append(s)),
            (n[i] = s),
            (t[i] = s);
        }
      }),
    n
  );
}
function xE(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled',
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null });
  function s(v) {
    let y;
    return v && typeof v == 'string' && t.isElement && ((y = t.el.querySelector(v)), y)
      ? y
      : (v &&
          (typeof v == 'string' && (y = [...document.querySelectorAll(v)]),
          t.params.uniqueNavElements &&
          typeof v == 'string' &&
          y &&
          y.length > 1 &&
          t.el.querySelectorAll(v).length === 1
            ? (y = t.el.querySelector(v))
            : y && y.length === 1 && (y = y[0])),
        v && !y ? v : y);
  }
  function o(v, y) {
    const w = t.params.navigation;
    (v = at(v)),
      v.forEach((h) => {
        h &&
          (h.classList[y ? 'add' : 'remove'](...w.disabledClass.split(' ')),
          h.tagName === 'BUTTON' && (h.disabled = y),
          t.params.watchOverflow &&
            t.enabled &&
            h.classList[t.isLocked ? 'add' : 'remove'](w.lockClass));
      });
  }
  function a() {
    const { nextEl: v, prevEl: y } = t.navigation;
    if (t.params.loop) {
      o(y, !1), o(v, !1);
      return;
    }
    o(y, t.isBeginning && !t.params.rewind), o(v, t.isEnd && !t.params.rewind);
  }
  function l(v) {
    v.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i('navigationPrev'));
  }
  function u(v) {
    v.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), i('navigationNext'));
  }
  function c() {
    const v = t.params.navigation;
    if (
      ((t.params.navigation = yE(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',
      })),
      !(v.nextEl || v.prevEl))
    )
      return;
    let y = s(v.nextEl),
      w = s(v.prevEl);
    Object.assign(t.navigation, { nextEl: y, prevEl: w }), (y = at(y)), (w = at(w));
    const h = (p, g) => {
      p && p.addEventListener('click', g === 'next' ? u : l),
        !t.enabled && p && p.classList.add(...v.lockClass.split(' '));
    };
    y.forEach((p) => h(p, 'next')), w.forEach((p) => h(p, 'prev'));
  }
  function d() {
    let { nextEl: v, prevEl: y } = t.navigation;
    (v = at(v)), (y = at(y));
    const w = (h, p) => {
      h.removeEventListener('click', p === 'next' ? u : l),
        h.classList.remove(...t.params.navigation.disabledClass.split(' '));
    };
    v.forEach((h) => w(h, 'next')), y.forEach((h) => w(h, 'prev'));
  }
  r('init', () => {
    t.params.navigation.enabled === !1 ? m() : (c(), a());
  }),
    r('toEdge fromEdge lock unlock', () => {
      a();
    }),
    r('destroy', () => {
      d();
    }),
    r('enable disable', () => {
      let { nextEl: v, prevEl: y } = t.navigation;
      if (((v = at(v)), (y = at(y)), t.enabled)) {
        a();
        return;
      }
      [...v, ...y]
        .filter((w) => !!w)
        .forEach((w) => w.classList.add(t.params.navigation.lockClass));
    }),
    r('click', (v, y) => {
      let { nextEl: w, prevEl: h } = t.navigation;
      (w = at(w)), (h = at(h));
      const p = y.target;
      if (t.params.navigation.hideOnClick && !h.includes(p) && !w.includes(p)) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === p || t.pagination.el.contains(p))
        )
          return;
        let g;
        w.length
          ? (g = w[0].classList.contains(t.params.navigation.hiddenClass))
          : h.length && (g = h[0].classList.contains(t.params.navigation.hiddenClass)),
          i(g === !0 ? 'navigationShow' : 'navigationHide'),
          [...w, ...h]
            .filter((x) => !!x)
            .forEach((x) => x.classList.toggle(t.params.navigation.hiddenClass));
      }
    });
  const f = () => {
      t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(' ')), c(), a();
    },
    m = () => {
      t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(' ')), d();
    };
  Object.assign(t.navigation, { enable: f, disable: m, update: a, init: c, destroy: d });
}
function Ho(e) {
  return (
    e === void 0 && (e = ''),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, '\\$1')
      .replace(/ /g, '.')}`
  );
}
function MD(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = 'swiper-pagination';
  n({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: 'bullets',
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (h) => h,
      formatFractionTotal: (h) => h,
      bulletClass: `${s}-bullet`,
      bulletActiveClass: `${s}-bullet-active`,
      modifierClass: `${s}-`,
      currentClass: `${s}-current`,
      totalClass: `${s}-total`,
      hiddenClass: `${s}-hidden`,
      progressbarFillClass: `${s}-progressbar-fill`,
      progressbarOppositeClass: `${s}-progressbar-opposite`,
      clickableClass: `${s}-clickable`,
      lockClass: `${s}-lock`,
      horizontalClass: `${s}-horizontal`,
      verticalClass: `${s}-vertical`,
      paginationDisabledClass: `${s}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let o,
    a = 0;
  function l() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function u(h, p) {
    const { bulletActiveClass: g } = t.params.pagination;
    h &&
      ((h = h[`${p === 'prev' ? 'previous' : 'next'}ElementSibling`]),
      h &&
        (h.classList.add(`${g}-${p}`),
        (h = h[`${p === 'prev' ? 'previous' : 'next'}ElementSibling`]),
        h && h.classList.add(`${g}-${p}-${p}`)));
  }
  function c(h) {
    const p = h.target.closest(Ho(t.params.pagination.bulletClass));
    if (!p) return;
    h.preventDefault();
    const g = gc(p) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === g) return;
      t.slideToLoop(g);
    } else t.slideTo(g);
  }
  function d() {
    const h = t.rtl,
      p = t.params.pagination;
    if (l()) return;
    let g = t.pagination.el;
    g = at(g);
    let x, T;
    const A = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
      S = t.params.loop ? Math.ceil(A / t.params.slidesPerGroup) : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((T = t.previousRealIndex || 0),
          (x =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < 'u'
        ? ((x = t.snapIndex), (T = t.previousSnapIndex))
        : ((T = t.previousIndex || 0), (x = t.activeIndex || 0)),
      p.type === 'bullets' && t.pagination.bullets && t.pagination.bullets.length > 0)
    ) {
      const b = t.pagination.bullets;
      let L, P, z;
      if (
        (p.dynamicBullets &&
          ((o = Hh(b[0], t.isHorizontal() ? 'width' : 'height')),
          g.forEach((N) => {
            N.style[t.isHorizontal() ? 'width' : 'height'] = `${o * (p.dynamicMainBullets + 4)}px`;
          }),
          p.dynamicMainBullets > 1 &&
            T !== void 0 &&
            ((a += x - (T || 0)),
            a > p.dynamicMainBullets - 1 ? (a = p.dynamicMainBullets - 1) : a < 0 && (a = 0)),
          (L = Math.max(x - a, 0)),
          (P = L + (Math.min(b.length, p.dynamicMainBullets) - 1)),
          (z = (P + L) / 2)),
        b.forEach((N) => {
          const j = [
            ...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(
              (G) => `${p.bulletActiveClass}${G}`,
            ),
          ]
            .map((G) => (typeof G == 'string' && G.includes(' ') ? G.split(' ') : G))
            .flat();
          N.classList.remove(...j);
        }),
        g.length > 1)
      )
        b.forEach((N) => {
          const j = gc(N);
          j === x
            ? N.classList.add(...p.bulletActiveClass.split(' '))
            : t.isElement && N.setAttribute('part', 'bullet'),
            p.dynamicBullets &&
              (j >= L && j <= P && N.classList.add(...`${p.bulletActiveClass}-main`.split(' ')),
              j === L && u(N, 'prev'),
              j === P && u(N, 'next'));
        });
      else {
        const N = b[x];
        if (
          (N && N.classList.add(...p.bulletActiveClass.split(' ')),
          t.isElement &&
            b.forEach((j, G) => {
              j.setAttribute('part', G === x ? 'bullet-active' : 'bullet');
            }),
          p.dynamicBullets)
        ) {
          const j = b[L],
            G = b[P];
          for (let Q = L; Q <= P; Q += 1)
            b[Q] && b[Q].classList.add(...`${p.bulletActiveClass}-main`.split(' '));
          u(j, 'prev'), u(G, 'next');
        }
      }
      if (p.dynamicBullets) {
        const N = Math.min(b.length, p.dynamicMainBullets + 4),
          j = (o * N - o) / 2 - z * o,
          G = h ? 'right' : 'left';
        b.forEach((Q) => {
          Q.style[t.isHorizontal() ? G : 'top'] = `${j}px`;
        });
      }
    }
    g.forEach((b, L) => {
      if (
        (p.type === 'fraction' &&
          (b.querySelectorAll(Ho(p.currentClass)).forEach((P) => {
            P.textContent = p.formatFractionCurrent(x + 1);
          }),
          b.querySelectorAll(Ho(p.totalClass)).forEach((P) => {
            P.textContent = p.formatFractionTotal(S);
          })),
        p.type === 'progressbar')
      ) {
        let P;
        p.progressbarOpposite
          ? (P = t.isHorizontal() ? 'vertical' : 'horizontal')
          : (P = t.isHorizontal() ? 'horizontal' : 'vertical');
        const z = (x + 1) / S;
        let N = 1,
          j = 1;
        P === 'horizontal' ? (N = z) : (j = z),
          b.querySelectorAll(Ho(p.progressbarFillClass)).forEach((G) => {
            (G.style.transform = `translate3d(0,0,0) scaleX(${N}) scaleY(${j})`),
              (G.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      p.type === 'custom' && p.renderCustom
        ? ((b.innerHTML = p.renderCustom(t, x + 1, S)), L === 0 && i('paginationRender', b))
        : (L === 0 && i('paginationRender', b), i('paginationUpdate', b)),
        t.params.watchOverflow &&
          t.enabled &&
          b.classList[t.isLocked ? 'add' : 'remove'](p.lockClass);
    });
  }
  function f() {
    const h = t.params.pagination;
    if (l()) return;
    const p =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
        ? t.slides.length / Math.ceil(t.params.grid.rows)
        : t.slides.length;
    let g = t.pagination.el;
    g = at(g);
    let x = '';
    if (h.type === 'bullets') {
      let T = t.params.loop ? Math.ceil(p / t.params.slidesPerGroup) : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && T > p && (T = p);
      for (let A = 0; A < T; A += 1)
        h.renderBullet
          ? (x += h.renderBullet.call(t, A, h.bulletClass))
          : (x += `<${h.bulletElement} ${t.isElement ? 'part="bullet"' : ''} class="${
              h.bulletClass
            }"></${h.bulletElement}>`);
    }
    h.type === 'fraction' &&
      (h.renderFraction
        ? (x = h.renderFraction.call(t, h.currentClass, h.totalClass))
        : (x = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`)),
      h.type === 'progressbar' &&
        (h.renderProgressbar
          ? (x = h.renderProgressbar.call(t, h.progressbarFillClass))
          : (x = `<span class="${h.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      g.forEach((T) => {
        h.type !== 'custom' && (T.innerHTML = x || ''),
          h.type === 'bullets' &&
            t.pagination.bullets.push(...T.querySelectorAll(Ho(h.bulletClass)));
      }),
      h.type !== 'custom' && i('paginationRender', g[0]);
  }
  function m() {
    t.params.pagination = yE(t, t.originalParams.pagination, t.params.pagination, {
      el: 'swiper-pagination',
    });
    const h = t.params.pagination;
    if (!h.el) return;
    let p;
    typeof h.el == 'string' && t.isElement && (p = t.el.querySelector(h.el)),
      !p && typeof h.el == 'string' && (p = [...document.querySelectorAll(h.el)]),
      p || (p = h.el),
      !(!p || p.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof h.el == 'string' &&
          Array.isArray(p) &&
          p.length > 1 &&
          ((p = [...t.el.querySelectorAll(h.el)]),
          p.length > 1 && (p = p.filter((g) => oE(g, '.swiper')[0] === t.el)[0])),
        Array.isArray(p) && p.length === 1 && (p = p[0]),
        Object.assign(t.pagination, { el: p }),
        (p = at(p)),
        p.forEach((g) => {
          h.type === 'bullets' &&
            h.clickable &&
            g.classList.add(...(h.clickableClass || '').split(' ')),
            g.classList.add(h.modifierClass + h.type),
            g.classList.add(t.isHorizontal() ? h.horizontalClass : h.verticalClass),
            h.type === 'bullets' &&
              h.dynamicBullets &&
              (g.classList.add(`${h.modifierClass}${h.type}-dynamic`),
              (a = 0),
              h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
            h.type === 'progressbar' &&
              h.progressbarOpposite &&
              g.classList.add(h.progressbarOppositeClass),
            h.clickable && g.addEventListener('click', c),
            t.enabled || g.classList.add(h.lockClass);
        }));
  }
  function v() {
    const h = t.params.pagination;
    if (l()) return;
    let p = t.pagination.el;
    p &&
      ((p = at(p)),
      p.forEach((g) => {
        g.classList.remove(h.hiddenClass),
          g.classList.remove(h.modifierClass + h.type),
          g.classList.remove(t.isHorizontal() ? h.horizontalClass : h.verticalClass),
          h.clickable &&
            (g.classList.remove(...(h.clickableClass || '').split(' ')),
            g.removeEventListener('click', c));
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((g) => g.classList.remove(...h.bulletActiveClass.split(' ')));
  }
  r('changeDirection', () => {
    if (!t.pagination || !t.pagination.el) return;
    const h = t.params.pagination;
    let { el: p } = t.pagination;
    (p = at(p)),
      p.forEach((g) => {
        g.classList.remove(h.horizontalClass, h.verticalClass),
          g.classList.add(t.isHorizontal() ? h.horizontalClass : h.verticalClass);
      });
  }),
    r('init', () => {
      t.params.pagination.enabled === !1 ? w() : (m(), f(), d());
    }),
    r('activeIndexChange', () => {
      typeof t.snapIndex > 'u' && d();
    }),
    r('snapIndexChange', () => {
      d();
    }),
    r('snapGridLengthChange', () => {
      f(), d();
    }),
    r('destroy', () => {
      v();
    }),
    r('enable disable', () => {
      let { el: h } = t.pagination;
      h &&
        ((h = at(h)),
        h.forEach((p) => p.classList[t.enabled ? 'remove' : 'add'](t.params.pagination.lockClass)));
    }),
    r('lock unlock', () => {
      d();
    }),
    r('click', (h, p) => {
      const g = p.target,
        x = at(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        x &&
        x.length > 0 &&
        !g.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && g === t.navigation.nextEl) ||
            (t.navigation.prevEl && g === t.navigation.prevEl))
        )
          return;
        const T = x[0].classList.contains(t.params.pagination.hiddenClass);
        i(T === !0 ? 'paginationShow' : 'paginationHide'),
          x.forEach((A) => A.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
  const y = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: h } = t.pagination;
      h &&
        ((h = at(h)),
        h.forEach((p) => p.classList.remove(t.params.pagination.paginationDisabledClass))),
        m(),
        f(),
        d();
    },
    w = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: h } = t.pagination;
      h &&
        ((h = at(h)),
        h.forEach((p) => p.classList.add(t.params.pagination.paginationDisabledClass))),
        v();
    };
  Object.assign(t.pagination, { enable: y, disable: w, render: f, update: d, init: m, destroy: v });
}
function DD(e) {
  let { swiper: t, extendParams: n, on: r, emit: i, params: s } = e;
  (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let o,
    a,
    l = s && s.autoplay ? s.autoplay.delay : 3e3,
    u = s && s.autoplay ? s.autoplay.delay : 3e3,
    c,
    d = new Date().getTime(),
    f,
    m,
    v,
    y,
    w,
    h,
    p;
  function g(D) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (D.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener('transitionend', g), !p && P()));
  }
  const x = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? (f = !0) : f && ((u = c), (f = !1));
      const D = t.autoplay.paused ? c : d + u - new Date().getTime();
      (t.autoplay.timeLeft = D),
        i('autoplayTimeLeft', D, D / l),
        (a = requestAnimationFrame(() => {
          x();
        }));
    },
    T = () => {
      let D;
      return (
        t.virtual && t.params.virtual.enabled
          ? (D = t.slides.filter((K) => K.classList.contains('swiper-slide-active'))[0])
          : (D = t.slides[t.activeIndex]),
        D ? parseInt(D.getAttribute('data-swiper-autoplay'), 10) : void 0
      );
    },
    A = (D) => {
      if (t.destroyed || !t.autoplay.running) return;
      cancelAnimationFrame(a), x();
      let q = typeof D > 'u' ? t.params.autoplay.delay : D;
      (l = t.params.autoplay.delay), (u = t.params.autoplay.delay);
      const K = T();
      !Number.isNaN(K) && K > 0 && typeof D > 'u' && ((q = K), (l = K), (u = K)), (c = q);
      const ye = t.params.speed,
        Se = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(ye, !0, !0), i('autoplay'))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, ye, !0, !0), i('autoplay'))
              : !t.isEnd || t.params.loop || t.params.rewind
              ? (t.slideNext(ye, !0, !0), i('autoplay'))
              : t.params.autoplay.stopOnLastSlide || (t.slideTo(0, ye, !0, !0), i('autoplay')),
            t.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                A();
              })));
        };
      return (
        q > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              Se();
            }, q)))
          : requestAnimationFrame(() => {
              Se();
            }),
        q
      );
    },
    S = () => {
      (d = new Date().getTime()), (t.autoplay.running = !0), A(), i('autoplayStart');
    },
    b = () => {
      (t.autoplay.running = !1), clearTimeout(o), cancelAnimationFrame(a), i('autoplayStop');
    },
    L = (D, q) => {
      if (t.destroyed || !t.autoplay.running) return;
      clearTimeout(o), D || (h = !0);
      const K = () => {
        i('autoplayPause'),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener('transitionend', g)
            : P();
      };
      if (((t.autoplay.paused = !0), q)) {
        w && (c = t.params.autoplay.delay), (w = !1), K();
        return;
      }
      (c = (c || t.params.autoplay.delay) - (new Date().getTime() - d)),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), K());
    },
    P = () => {
      (t.isEnd && c < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((d = new Date().getTime()),
        h ? ((h = !1), A(c)) : A(),
        (t.autoplay.paused = !1),
        i('autoplayResume'));
    },
    z = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const D = Tr();
      D.visibilityState === 'hidden' && ((h = !0), L(!0)), D.visibilityState === 'visible' && P();
    },
    N = (D) => {
      D.pointerType === 'mouse' &&
        ((h = !0), (p = !0), !(t.animating || t.autoplay.paused) && L(!0));
    },
    j = (D) => {
      D.pointerType === 'mouse' && ((p = !1), t.autoplay.paused && P());
    },
    G = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener('pointerenter', N), t.el.addEventListener('pointerleave', j));
    },
    Q = () => {
      t.el.removeEventListener('pointerenter', N), t.el.removeEventListener('pointerleave', j);
    },
    he = () => {
      Tr().addEventListener('visibilitychange', z);
    },
    Re = () => {
      Tr().removeEventListener('visibilitychange', z);
    };
  r('init', () => {
    t.params.autoplay.enabled && (G(), he(), S());
  }),
    r('destroy', () => {
      Q(), Re(), t.autoplay.running && b();
    }),
    r('_freeModeStaticRelease', () => {
      (v || h) && P();
    }),
    r('_freeModeNoMomentumRelease', () => {
      t.params.autoplay.disableOnInteraction ? b() : L(!0, !0);
    }),
    r('beforeTransitionStart', (D, q, K) => {
      t.destroyed ||
        !t.autoplay.running ||
        (K || !t.params.autoplay.disableOnInteraction ? L(!0, !0) : b());
    }),
    r('sliderFirstMove', () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          b();
          return;
        }
        (m = !0),
          (v = !1),
          (h = !1),
          (y = setTimeout(() => {
            (h = !0), (v = !0), L(!0);
          }, 200));
      }
    }),
    r('touchEnd', () => {
      if (!(t.destroyed || !t.autoplay.running || !m)) {
        if ((clearTimeout(y), clearTimeout(o), t.params.autoplay.disableOnInteraction)) {
          (v = !1), (m = !1);
          return;
        }
        v && t.params.cssMode && P(), (v = !1), (m = !1);
      }
    }),
    r('slideChange', () => {
      t.destroyed || !t.autoplay.running || (w = !0);
    }),
    Object.assign(t.autoplay, { start: S, stop: b, pause: L, resume: P });
}
function wE(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: ND } = Object.prototype,
  { getPrototypeOf: Gm } = Object,
  nd = ((e) => (t) => {
    const n = ND.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  or = (e) => ((e = e.toLowerCase()), (t) => nd(t) === e),
  rd = (e) => (t) => typeof t === e,
  { isArray: _o } = Array,
  $a = rd('undefined');
function jD(e) {
  return (
    e !== null &&
    !$a(e) &&
    e.constructor !== null &&
    !$a(e.constructor) &&
    bn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const SE = or('ArrayBuffer');
function ID(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && SE(e.buffer)),
    t
  );
}
const FD = rd('string'),
  bn = rd('function'),
  EE = rd('number'),
  id = (e) => e !== null && typeof e == 'object',
  VD = (e) => e === !0 || e === !1,
  Lu = (e) => {
    if (nd(e) !== 'object') return !1;
    const t = Gm(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  zD = or('Date'),
  BD = or('File'),
  UD = or('Blob'),
  $D = or('FileList'),
  HD = (e) => id(e) && bn(e.pipe),
  WD = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (bn(e.append) &&
          ((t = nd(e)) === 'formdata' ||
            (t === 'object' && bn(e.toString) && e.toString() === '[object FormData]'))))
    );
  },
  GD = or('URLSearchParams'),
  qD = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function Pl(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, i;
  if ((typeof e != 'object' && (e = [e]), _o(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = s.length;
    let a;
    for (r = 0; r < o; r++) (a = s[r]), t.call(null, e[a], a, e);
  }
}
function TE(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const bE =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global,
  CE = (e) => !$a(e) && e !== bE;
function qh() {
  const { caseless: e } = (CE(this) && this) || {},
    t = {},
    n = (r, i) => {
      const s = (e && TE(t, i)) || i;
      Lu(t[s]) && Lu(r)
        ? (t[s] = qh(t[s], r))
        : Lu(r)
        ? (t[s] = qh({}, r))
        : _o(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && Pl(arguments[r], n);
  return t;
}
const KD = (e, t, n, { allOwnKeys: r } = {}) => (
    Pl(
      t,
      (i, s) => {
        n && bn(i) ? (e[s] = wE(i, n)) : (e[s] = i);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  ZD = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  QD = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  YD = (e, t, n, r) => {
    let i, s, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        (o = i[s]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && Gm(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  XD = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  JD = (e) => {
    if (!e) return null;
    if (_o(e)) return e;
    let t = e.length;
    if (!EE(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  eN = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Gm(Uint8Array)),
  tN = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  },
  nN = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  rN = or('HTMLFormElement'),
  iN = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  u0 = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  sN = or('RegExp'),
  _E = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Pl(n, (i, s) => {
      let o;
      (o = t(i, s, e)) !== !1 && (r[s] = o || i);
    }),
      Object.defineProperties(e, r);
  },
  oN = (e) => {
    _E(e, (t, n) => {
      if (bn(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1;
      const r = e[n];
      if (bn(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  aN = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return _o(e) ? r(e) : r(String(e).split(t)), n;
  },
  lN = () => {},
  uN = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  cf = 'abcdefghijklmnopqrstuvwxyz',
  c0 = '0123456789',
  PE = { DIGIT: c0, ALPHA: cf, ALPHA_DIGIT: cf + cf.toUpperCase() + c0 },
  cN = (e = 16, t = PE.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function dN(e) {
  return !!(e && bn(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator]);
}
const fN = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (id(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[i] = r;
            const s = _o(r) ? [] : {};
            return (
              Pl(r, (o, a) => {
                const l = n(o, i + 1);
                !$a(l) && (s[a] = l);
              }),
              (t[i] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  hN = or('AsyncFunction'),
  pN = (e) => e && (id(e) || bn(e)) && bn(e.then) && bn(e.catch),
  V = {
    isArray: _o,
    isArrayBuffer: SE,
    isBuffer: jD,
    isFormData: WD,
    isArrayBufferView: ID,
    isString: FD,
    isNumber: EE,
    isBoolean: VD,
    isObject: id,
    isPlainObject: Lu,
    isUndefined: $a,
    isDate: zD,
    isFile: BD,
    isBlob: UD,
    isRegExp: sN,
    isFunction: bn,
    isStream: HD,
    isURLSearchParams: GD,
    isTypedArray: eN,
    isFileList: $D,
    forEach: Pl,
    merge: qh,
    extend: KD,
    trim: qD,
    stripBOM: ZD,
    inherits: QD,
    toFlatObject: YD,
    kindOf: nd,
    kindOfTest: or,
    endsWith: XD,
    toArray: JD,
    forEachEntry: tN,
    matchAll: nN,
    isHTMLForm: rN,
    hasOwnProperty: u0,
    hasOwnProp: u0,
    reduceDescriptors: _E,
    freezeMethods: oN,
    toObjectSet: aN,
    toCamelCase: iN,
    noop: lN,
    toFiniteNumber: uN,
    findKey: TE,
    global: bE,
    isContextDefined: CE,
    ALPHABET: PE,
    generateString: cN,
    isSpecCompliantForm: dN,
    toJSONObject: fN,
    isAsyncFn: hN,
    isThenable: pN,
  };
function Ce(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
V.inherits(Ce, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: V.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null,
    };
  },
});
const kE = Ce.prototype,
  RE = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  RE[e] = { value: e };
});
Object.defineProperties(Ce, RE);
Object.defineProperty(kE, 'isAxiosError', { value: !0 });
Ce.from = (e, t, n, r, i, s) => {
  const o = Object.create(kE);
  return (
    V.toFlatObject(
      e,
      o,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== 'isAxiosError',
    ),
    Ce.call(o, e.message, t, n, r, i),
    (o.cause = e),
    (o.name = e.name),
    s && Object.assign(o, s),
    o
  );
};
const mN = null;
function Kh(e) {
  return V.isPlainObject(e) || V.isArray(e);
}
function LE(e) {
  return V.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function d0(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return (i = LE(i)), !n && s ? '[' + i + ']' : i;
        })
        .join(n ? '.' : '')
    : t;
}
function gN(e) {
  return V.isArray(e) && !e.some(Kh);
}
const vN = V.toFlatObject(V, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function sd(e, t, n) {
  if (!V.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = V.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (y, w) {
      return !V.isUndefined(w[y]);
    }));
  const r = n.metaTokens,
    i = n.visitor || c,
    s = n.dots,
    o = n.indexes,
    l = (n.Blob || (typeof Blob < 'u' && Blob)) && V.isSpecCompliantForm(t);
  if (!V.isFunction(i)) throw new TypeError('visitor must be a function');
  function u(v) {
    if (v === null) return '';
    if (V.isDate(v)) return v.toISOString();
    if (!l && V.isBlob(v)) throw new Ce('Blob is not supported. Use a Buffer instead.');
    return V.isArrayBuffer(v) || V.isTypedArray(v)
      ? l && typeof Blob == 'function'
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function c(v, y, w) {
    let h = v;
    if (v && !w && typeof v == 'object') {
      if (V.endsWith(y, '{}')) (y = r ? y : y.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (V.isArray(v) && gN(v)) ||
        ((V.isFileList(v) || V.endsWith(y, '[]')) && (h = V.toArray(v)))
      )
        return (
          (y = LE(y)),
          h.forEach(function (g, x) {
            !(V.isUndefined(g) || g === null) &&
              t.append(o === !0 ? d0([y], x, s) : o === null ? y : y + '[]', u(g));
          }),
          !1
        );
    }
    return Kh(v) ? !0 : (t.append(d0(w, y, s), u(v)), !1);
  }
  const d = [],
    f = Object.assign(vN, { defaultVisitor: c, convertValue: u, isVisitable: Kh });
  function m(v, y) {
    if (!V.isUndefined(v)) {
      if (d.indexOf(v) !== -1) throw Error('Circular reference detected in ' + y.join('.'));
      d.push(v),
        V.forEach(v, function (h, p) {
          (!(V.isUndefined(h) || h === null) &&
            i.call(t, h, V.isString(p) ? p.trim() : p, y, f)) === !0 && m(h, y ? y.concat(p) : [p]);
        }),
        d.pop();
    }
  }
  if (!V.isObject(e)) throw new TypeError('data must be an object');
  return m(e), t;
}
function f0(e) {
  const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function qm(e, t) {
  (this._pairs = []), e && sd(e, this, t);
}
const AE = qm.prototype;
AE.append = function (t, n) {
  this._pairs.push([t, n]);
};
AE.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, f0);
      }
    : f0;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + '=' + n(i[1]);
    }, '')
    .join('&');
};
function yN(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function OE(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || yN,
    i = n && n.serialize;
  let s;
  if (
    (i ? (s = i(t, n)) : (s = V.isURLSearchParams(t) ? t.toString() : new qm(t, n).toString(r)), s)
  ) {
    const o = e.indexOf('#');
    o !== -1 && (e = e.slice(0, o)), (e += (e.indexOf('?') === -1 ? '?' : '&') + s);
  }
  return e;
}
class h0 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    V.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const ME = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  xN = typeof URLSearchParams < 'u' ? URLSearchParams : qm,
  wN = typeof FormData < 'u' ? FormData : null,
  SN = typeof Blob < 'u' ? Blob : null,
  EN = {
    isBrowser: !0,
    classes: { URLSearchParams: xN, FormData: wN, Blob: SN },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  DE = typeof window < 'u' && typeof document < 'u',
  TN = ((e) => DE && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product,
  ),
  bN =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  CN = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: DE,
        hasStandardBrowserEnv: TN,
        hasStandardBrowserWebWorkerEnv: bN,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Xn = { ...CN, ...EN };
function _N(e, t) {
  return sd(
    e,
    new Xn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, s) {
          return Xn.isNode && V.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function PN(e) {
  return V.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function kN(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function NE(e) {
  function t(n, r, i, s) {
    let o = n[s++];
    if (o === '__proto__') return !0;
    const a = Number.isFinite(+o),
      l = s >= n.length;
    return (
      (o = !o && V.isArray(i) ? i.length : o),
      l
        ? (V.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !a)
        : ((!i[o] || !V.isObject(i[o])) && (i[o] = []),
          t(n, r, i[o], s) && V.isArray(i[o]) && (i[o] = kN(i[o])),
          !a)
    );
  }
  if (V.isFormData(e) && V.isFunction(e.entries)) {
    const n = {};
    return (
      V.forEachEntry(e, (r, i) => {
        t(PN(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function RN(e, t, n) {
  if (V.isString(e))
    try {
      return (t || JSON.parse)(e), V.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const kl = {
  transitional: ME,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        i = r.indexOf('application/json') > -1,
        s = V.isObject(t);
      if ((s && V.isHTMLForm(t) && (t = new FormData(t)), V.isFormData(t)))
        return i ? JSON.stringify(NE(t)) : t;
      if (V.isArrayBuffer(t) || V.isBuffer(t) || V.isStream(t) || V.isFile(t) || V.isBlob(t))
        return t;
      if (V.isArrayBufferView(t)) return t.buffer;
      if (V.isURLSearchParams(t))
        return (
          n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString()
        );
      let a;
      if (s) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return _N(t, this.formSerializer).toString();
        if ((a = V.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData;
          return sd(a ? { 'files[]': t } : t, l && new l(), this.formSerializer);
        }
      }
      return s || i ? (n.setContentType('application/json', !1), RN(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || kl.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === 'json';
      if (t && V.isString(t) && ((r && !this.responseType) || i)) {
        const o = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === 'SyntaxError'
              ? Ce.from(a, Ce.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Xn.classes.FormData, Blob: Xn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } },
};
V.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  kl.headers[e] = {};
});
const LN = V.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  AN = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (o) {
            (i = o.indexOf(':')),
              (n = o.substring(0, i).trim().toLowerCase()),
              (r = o.substring(i + 1).trim()),
              !(!n || (t[n] && LN[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  p0 = Symbol('internals');
function Wo(e) {
  return e && String(e).trim().toLowerCase();
}
function Au(e) {
  return e === !1 || e == null ? e : V.isArray(e) ? e.map(Au) : String(e);
}
function ON(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const MN = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function df(e, t, n, r, i) {
  if (V.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!V.isString(t))) {
    if (V.isString(r)) return t.indexOf(r) !== -1;
    if (V.isRegExp(r)) return r.test(t);
  }
}
function DN(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function NN(e, t) {
  const n = V.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, s, o) {
        return this[r].call(this, t, i, s, o);
      },
      configurable: !0,
    });
  });
}
class Cn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(a, l, u) {
      const c = Wo(l);
      if (!c) throw new Error('header name must be a non-empty string');
      const d = V.findKey(i, c);
      (!d || i[d] === void 0 || u === !0 || (u === void 0 && i[d] !== !1)) && (i[d || l] = Au(a));
    }
    const o = (a, l) => V.forEach(a, (u, c) => s(u, c, l));
    return (
      V.isPlainObject(t) || t instanceof this.constructor
        ? o(t, n)
        : V.isString(t) && (t = t.trim()) && !MN(t)
        ? o(AN(t), n)
        : t != null && s(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Wo(t)), t)) {
      const r = V.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return ON(i);
        if (V.isFunction(n)) return n.call(this, i, r);
        if (V.isRegExp(n)) return n.exec(i);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = Wo(t)), t)) {
      const r = V.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || df(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (((o = Wo(o)), o)) {
        const a = V.findKey(r, o);
        a && (!n || df(r, r[a], a, n)) && (delete r[a], (i = !0));
      }
    }
    return V.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || df(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      V.forEach(this, (i, s) => {
        const o = V.findKey(r, s);
        if (o) {
          (n[o] = Au(i)), delete n[s];
          return;
        }
        const a = t ? DN(s) : String(s).trim();
        a !== s && delete n[s], (n[a] = Au(i)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      V.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && V.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[p0] = this[p0] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(o) {
      const a = Wo(o);
      r[a] || (NN(i, o), (r[a] = !0));
    }
    return V.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Cn.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
V.reduceDescriptors(Cn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
V.freezeMethods(Cn);
function ff(e, t) {
  const n = this || kl,
    r = t || n,
    i = Cn.from(r.headers);
  let s = r.data;
  return (
    V.forEach(e, function (a) {
      s = a.call(n, s, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function jE(e) {
  return !!(e && e.__CANCEL__);
}
function Rl(e, t, n) {
  Ce.call(this, e ?? 'canceled', Ce.ERR_CANCELED, t, n), (this.name = 'CanceledError');
}
V.inherits(Rl, Ce, { __CANCEL__: !0 });
function jN(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new Ce(
          'Request failed with status code ' + n.status,
          [Ce.ERR_BAD_REQUEST, Ce.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n,
        ),
      );
}
const IN = Xn.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, i, s) {
        const o = [e + '=' + encodeURIComponent(t)];
        V.isNumber(n) && o.push('expires=' + new Date(n).toGMTString()),
          V.isString(r) && o.push('path=' + r),
          V.isString(i) && o.push('domain=' + i),
          s === !0 && o.push('secure'),
          (document.cookie = o.join('; '));
      },
      read(e) {
        const t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, '', Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function FN(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function VN(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function IE(e, t) {
  return e && !FN(t) ? VN(e, t) : t;
}
const zN = Xn.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a');
      let r;
      function i(s) {
        let o = s;
        return (
          t && (n.setAttribute('href', o), (o = n.href)),
          n.setAttribute('href', o),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (o) {
          const a = V.isString(o) ? i(o) : o;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function BN(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function UN(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    s = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[s];
      o || (o = u), (n[i] = l), (r[i] = u);
      let d = s,
        f = 0;
      for (; d !== i; ) (f += n[d++]), (d = d % e);
      if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), u - o < t)) return;
      const m = c && u - c;
      return m ? Math.round((f * 1e3) / m) : void 0;
    }
  );
}
function m0(e, t) {
  let n = 0;
  const r = UN(50, 250);
  return (i) => {
    const s = i.loaded,
      o = i.lengthComputable ? i.total : void 0,
      a = s - n,
      l = r(a),
      u = s <= o;
    n = s;
    const c = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && o && u ? (o - s) / l : void 0,
      event: i,
    };
    (c[t ? 'download' : 'upload'] = !0), e(c);
  };
}
const $N = typeof XMLHttpRequest < 'u',
  HN =
    $N &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const s = Cn.from(e.headers).normalize();
        let { responseType: o, withXSRFToken: a } = e,
          l;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener('abort', l);
        }
        let c;
        if (V.isFormData(i)) {
          if (Xn.hasStandardBrowserEnv || Xn.hasStandardBrowserWebWorkerEnv) s.setContentType(!1);
          else if ((c = s.getContentType()) !== !1) {
            const [y, ...w] = c
              ? c
                  .split(';')
                  .map((h) => h.trim())
                  .filter(Boolean)
              : [];
            s.setContentType([y || 'multipart/form-data', ...w].join('; '));
          }
        }
        let d = new XMLHttpRequest();
        if (e.auth) {
          const y = e.auth.username || '',
            w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : '';
          s.set('Authorization', 'Basic ' + btoa(y + ':' + w));
        }
        const f = IE(e.baseURL, e.url);
        d.open(e.method.toUpperCase(), OE(f, e.params, e.paramsSerializer), !0),
          (d.timeout = e.timeout);
        function m() {
          if (!d) return;
          const y = Cn.from('getAllResponseHeaders' in d && d.getAllResponseHeaders()),
            h = {
              data: !o || o === 'text' || o === 'json' ? d.responseText : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: y,
              config: e,
              request: d,
            };
          jN(
            function (g) {
              n(g), u();
            },
            function (g) {
              r(g), u();
            },
            h,
          ),
            (d = null);
        }
        if (
          ('onloadend' in d
            ? (d.onloadend = m)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 && !(d.responseURL && d.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(m);
              }),
          (d.onabort = function () {
            d && (r(new Ce('Request aborted', Ce.ECONNABORTED, e, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new Ce('Network Error', Ce.ERR_NETWORK, e, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let w = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded';
            const h = e.transitional || ME;
            e.timeoutErrorMessage && (w = e.timeoutErrorMessage),
              r(new Ce(w, h.clarifyTimeoutError ? Ce.ETIMEDOUT : Ce.ECONNABORTED, e, d)),
              (d = null);
          }),
          Xn.hasStandardBrowserEnv &&
            (a && V.isFunction(a) && (a = a(e)), a || (a !== !1 && zN(f))))
        ) {
          const y = e.xsrfHeaderName && e.xsrfCookieName && IN.read(e.xsrfCookieName);
          y && s.set(e.xsrfHeaderName, y);
        }
        i === void 0 && s.setContentType(null),
          'setRequestHeader' in d &&
            V.forEach(s.toJSON(), function (w, h) {
              d.setRequestHeader(h, w);
            }),
          V.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials),
          o && o !== 'json' && (d.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            d.addEventListener('progress', m0(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            d.upload &&
            d.upload.addEventListener('progress', m0(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (y) => {
              d && (r(!y || y.type ? new Rl(null, e, d) : y), d.abort(), (d = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal && (e.signal.aborted ? l() : e.signal.addEventListener('abort', l)));
        const v = BN(f);
        if (v && Xn.protocols.indexOf(v) === -1) {
          r(new Ce('Unsupported protocol ' + v + ':', Ce.ERR_BAD_REQUEST, e));
          return;
        }
        d.send(i || null);
      });
    },
  Zh = { http: mN, xhr: HN };
V.forEach(Zh, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const g0 = (e) => `- ${e}`,
  WN = (e) => V.isFunction(e) || e === null || e === !1,
  FE = {
    getAdapter: (e) => {
      e = V.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let o;
        if (((r = n), !WN(n) && ((r = Zh[(o = String(n)).toLowerCase()]), r === void 0)))
          throw new Ce(`Unknown adapter '${o}'`);
        if (r) break;
        i[o || '#' + s] = r;
      }
      if (!r) {
        const s = Object.entries(i).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1 ? 'is not supported by the environment' : 'is not available in the build'),
        );
        let o = t
          ? s.length > 1
            ? `since :
` +
              s.map(g0).join(`
`)
            : ' ' + g0(s[0])
          : 'as no adapter specified';
        throw new Ce(
          'There is no suitable adapter to dispatch the request ' + o,
          'ERR_NOT_SUPPORT',
        );
      }
      return r;
    },
    adapters: Zh,
  };
function hf(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
    throw new Rl(null, e);
}
function v0(e) {
  return (
    hf(e),
    (e.headers = Cn.from(e.headers)),
    (e.data = ff.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    FE.getAdapter(e.adapter || kl.adapter)(e).then(
      function (r) {
        return (
          hf(e), (r.data = ff.call(e, e.transformResponse, r)), (r.headers = Cn.from(r.headers)), r
        );
      },
      function (r) {
        return (
          jE(r) ||
            (hf(e),
            r &&
              r.response &&
              ((r.response.data = ff.call(e, e.transformResponse, r.response)),
              (r.response.headers = Cn.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const y0 = (e) => (e instanceof Cn ? { ...e } : e);
function vo(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return V.isPlainObject(u) && V.isPlainObject(c)
      ? V.merge.call({ caseless: d }, u, c)
      : V.isPlainObject(c)
      ? V.merge({}, c)
      : V.isArray(c)
      ? c.slice()
      : c;
  }
  function i(u, c, d) {
    if (V.isUndefined(c)) {
      if (!V.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function s(u, c) {
    if (!V.isUndefined(c)) return r(void 0, c);
  }
  function o(u, c) {
    if (V.isUndefined(c)) {
      if (!V.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (u, c) => i(y0(u), y0(c), !0),
  };
  return (
    V.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = l[c] || i,
        f = d(e[c], t[c], c);
      (V.isUndefined(f) && d !== a) || (n[c] = f);
    }),
    n
  );
}
const VE = '1.6.8',
  Km = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  Km[e] = function (r) {
    return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
  };
});
const x0 = {};
Km.transitional = function (t, n, r) {
  function i(s, o) {
    return '[Axios v' + VE + "] Transitional option '" + s + "'" + o + (r ? '. ' + r : '');
  }
  return (s, o, a) => {
    if (t === !1)
      throw new Ce(i(o, ' has been removed' + (n ? ' in ' + n : '')), Ce.ERR_DEPRECATED);
    return (
      n &&
        !x0[o] &&
        ((x0[o] = !0),
        console.warn(
          i(o, ' has been deprecated since v' + n + ' and will be removed in the near future'),
        )),
      t ? t(s, o, a) : !0
    );
  };
};
function GN(e, t, n) {
  if (typeof e != 'object') throw new Ce('options must be an object', Ce.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      o = t[s];
    if (o) {
      const a = e[s],
        l = a === void 0 || o(a, s, e);
      if (l !== !0) throw new Ce('option ' + s + ' must be ' + l, Ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Ce('Unknown option ' + s, Ce.ERR_BAD_OPTION);
  }
}
const Qh = { assertOptions: GN, validators: Km },
  Dr = Qh.validators;
class Qi {
  constructor(t) {
    (this.defaults = t), (this.interceptors = { request: new h0(), response: new h0() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace ? Error.captureStackTrace((i = {})) : (i = new Error());
        const s = i.stack ? i.stack.replace(/^.+\n/, '') : '';
        r.stack
          ? s &&
            !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, '')) &&
            (r.stack +=
              `
` + s)
          : (r.stack = s);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = vo(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 &&
      Qh.assertOptions(
        r,
        {
          silentJSONParsing: Dr.transitional(Dr.boolean),
          forcedJSONParsing: Dr.transitional(Dr.boolean),
          clarifyTimeoutError: Dr.transitional(Dr.boolean),
        },
        !1,
      ),
      i != null &&
        (V.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : Qh.assertOptions(i, { encode: Dr.function, serialize: Dr.function }, !0)),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let o = s && V.merge(s.common, s[n.method]);
    s &&
      V.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (v) => {
        delete s[v];
      }),
      (n.headers = Cn.concat(o, s));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == 'function' && y.runWhen(n) === !1) ||
        ((l = l && y.synchronous), a.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (y) {
      u.push(y.fulfilled, y.rejected);
    });
    let c,
      d = 0,
      f;
    if (!l) {
      const v = [v0.bind(this), void 0];
      for (v.unshift.apply(v, a), v.push.apply(v, u), f = v.length, c = Promise.resolve(n); d < f; )
        c = c.then(v[d++], v[d++]);
      return c;
    }
    f = a.length;
    let m = n;
    for (d = 0; d < f; ) {
      const v = a[d++],
        y = a[d++];
      try {
        m = v(m);
      } catch (w) {
        y.call(this, w);
        break;
      }
    }
    try {
      c = v0.call(this, m);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, f = u.length; d < f; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = vo(this.defaults, t);
    const n = IE(t.baseURL, t.url);
    return OE(n, t.params, t.paramsSerializer);
  }
}
V.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Qi.prototype[t] = function (n, r) {
    return this.request(vo(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
V.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (s, o, a) {
      return this.request(
        vo(a || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: s,
          data: o,
        }),
      );
    };
  }
  (Qi.prototype[t] = n()), (Qi.prototype[t + 'Form'] = n(!0));
});
class Zm {
  constructor(t) {
    if (typeof t != 'function') throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const o = new Promise((a) => {
          r.subscribe(a), (s = a);
        }).then(i);
        return (
          (o.cancel = function () {
            r.unsubscribe(s);
          }),
          o
        );
      }),
      t(function (s, o, a) {
        r.reason || ((r.reason = new Rl(s, o, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Zm(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
function qN(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function KN(e) {
  return V.isObject(e) && e.isAxiosError === !0;
}
const Yh = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Yh).forEach(([e, t]) => {
  Yh[t] = e;
});
function zE(e) {
  const t = new Qi(e),
    n = wE(Qi.prototype.request, t);
  return (
    V.extend(n, Qi.prototype, t, { allOwnKeys: !0 }),
    V.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return zE(vo(e, i));
    }),
    n
  );
}
const He = zE(kl);
He.Axios = Qi;
He.CanceledError = Rl;
He.CancelToken = Zm;
He.isCancel = jE;
He.VERSION = VE;
He.toFormData = sd;
He.AxiosError = Ce;
He.Cancel = He.CanceledError;
He.all = function (t) {
  return Promise.all(t);
};
He.spread = qN;
He.isAxiosError = KN;
He.mergeConfig = vo;
He.AxiosHeaders = Cn;
He.formToJSON = (e) => NE(V.isHTMLForm(e) ? new FormData(e) : e);
He.getAdapter = FE.getAdapter;
He.HttpStatusCode = Yh;
He.default = He;
class ZN {
  constructor() {
    lg(this, 'URL', 'https://editor.turkmenexpo.com/api/v1');
  }
  async getBanners(t) {
    return await He.get(`${this.URL}/banners`, { headers: { 'Accept-Language': t } });
  }
  async getNews(t) {
    return await He.get(`${this.URL}/news`, { headers: { 'Accept-Language': t } });
  }
  async getAboutExhibition(t) {
    return await He.get(`${this.URL}/settings/about_us`, { headers: { 'Accept-Language': t } });
  }
  async postParticipantForm({
    company_name: t,
    phone: n,
    email: r,
    area: i,
    response_method: s,
    contact_person: o,
    area_is_equipped: a,
    what_demonstrated: l,
    web_site: u,
  }) {
    return await He.post('https://turkmenexpo.com/app/api/v1/applications', {
      event_id: 3,
      company_name: t,
      phone: n,
      email: r,
      area: i,
      response_method: s,
      contact_person: o,
      area_is_requipped: a,
      what_demonstrated: l,
      web_site: u,
    });
  }
}
const od = new ZN(),
  QN = () => {
    const e = Vt((s) => s.activeLang.localization),
      {
        isError: t,
        isLoading: n,
        data: r,
        isSuccess: i,
      } = Bm({
        queryKey: ['bannersData', e],
        queryFn: () => od.getBanners(e),
        select: ({ data: s }) => s.data,
      });
    return { bannersIsError: t, bannersIsLoading: n, bannersData: r, bannersIsSuccess: i };
  },
  YN = () => {
    const { bannersIsError: e, bannersIsLoading: t, bannersData: n, bannersIsSuccess: r } = QN(),
      i = Vt((s) => s.activeLang.localization);
    if (r)
      return E.jsx(Wm, {
        modules: [MD, DD, xE],
        slidesPerView: 1,
        loop: !0,
        speed: 1500,
        autoplay: { delay: 5e3 },
        children:
          i === 'en'
            ? E.jsx(
                Ua,
                {
                  children: E.jsx(Tn, {
                    to: '',
                    children: E.jsx('div', {
                      className: 'h-[490px] w-full',
                      children: E.jsx('img', {
                        src: '/assets/images/banner-en.png',
                        alt: 'banner',
                        className: 'h-full w-full object-cover object-center',
                      }),
                    }),
                  }),
                },
                Nn(),
              )
            : n
            ? n.map((s) =>
                s.code.includes('main-banner')
                  ? E.jsx(
                      Ua,
                      {
                        children: E.jsx(Tn, {
                          to: '',
                          children: E.jsx('div', {
                            className: 'h-[490px] w-full',
                            children: E.jsx('img', {
                              src: s.banner_items[0].image,
                              alt: s.banner_items[0].title,
                              className: 'h-full w-full object-cover object-center',
                            }),
                          }),
                        }),
                      },
                      Nn(),
                    )
                  : null,
              )
            : E.jsx('div', { className: 'h-[490px] w-full' }),
      });
  },
  XN = ({ text: e, news: t, little: n }) =>
    E.jsx('div', {
      className: Gt(
        'cursor-pointer w-fit font-medium mx-auto py-[17px] text-[14px] text-purple border-[1px] border-purple rounded-sm hover:text-white hover:bg-purple transition-all',
        { 'mt-10': t, 'px-[16px]': n, 'px-[50px]': !n },
      ),
      children: e,
    }),
  w0 = ({ left: e = !1, onNext: t, onPrev: n }) => {
    const r = _.useRef(null);
    return E.jsx('button', {
      ref: r,
      className: `${e ? 'prev-btn' : 'next-btn'} `,
      onClick: e ? n : t,
      children: E.jsx('img', {
        src: '../assets/icons/nav-btn.svg',
        alt: 'arrow',
        className: Gt('img-auto', { 'rotate-180': e }),
      }),
    });
  },
  S0 = ({ title: e, published_at: t, path: n }) =>
    E.jsx('div', {
      className:
        'bg-bgWhite rounded-sm mx-auto sm:max-w-[290px] w-full transition-all hover:hover-shadow cursor-pointer h-full',
      children: E.jsxs(Tn, {
        to: '',
        className: 'h-full',
        children: [
          E.jsx('img', {
            src: n,
            alt: 'photo',
            className: 'h-[160px] w-full object-cover mb-[25px]',
          }),
          E.jsxs('div', {
            className: '',
            children: [
              E.jsx('p', {
                className: 'font-bold leading-[125%] text-[16px] news-text mb-[10px]',
                children: e,
              }),
              E.jsx('p', {
                className: 'text-extraSm leading-[125%] text-gray news-text',
                children: t,
              }),
            ],
          }),
        ],
      }),
    }),
  JN = () => {
    const e = Vt((s) => s.activeLang.localization),
      {
        isError: t,
        isLoading: n,
        data: r,
        isSuccess: i,
      } = Bm({
        queryKey: ['newsData', e],
        queryFn: () => od.getNews(e),
        select: ({ data: s }) => s,
      });
    return { newsIsError: t, newsIsLoading: n, newsData: r, newsIsSuccess: i };
  },
  ej = [
    {
      path: '/assets/images/news.png',
      title:
        'Popular goods and novelties – an exhibition of a shopping complex is being held in Ashgabat',
      published_at: '4/3/2024',
    },
    {
      path: '/assets/images/news2.png',
      title:
        'The exhibition of the shopping complex of Turkmenistan will present brands and trends of the commercial market',
      published_at: '3/30/2024',
    },
    {
      path: '/assets/images/news3.png',
      title:
        'Exhibition at the Chamber of Commerce and Industry: what Afghan producers brought to Ashgabat',
      published_at: '3/4/2024',
    },
    {
      path: '/assets/images/news4.png',
      title: 'The exhibition “Agro-Pak Turkmenistan-2023” is being held in Ashgabat',
      published_at: '11/28/2023',
    },
  ],
  tj = () => {
    const { newsIsError: e, newsIsLoading: t, newsData: n, newsIsSuccess: r } = JN(),
      i = Vt((o) => o.activeLang.localization),
      s = (o, a) => (i === 'en' ? o : a);
    if (r)
      return E.jsxs('section', {
        className: 'container pt-[100px] pb-[50px]',
        children: [
          E.jsxs('div', {
            className: 'flex items-center justify-between mb-10',
            children: [
              E.jsx(td, { title: s('News', 'Новости') }),
              E.jsxs('div', {
                className: 'flex gap-5',
                children: [E.jsx(w0, { left: !0 }), E.jsx(w0, {})],
              }),
            ],
          }),
          E.jsx(Wm, {
            modules: [xE],
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: { nextEl: '.next-btn', prevEl: '.prev-btn' },
            breakpoints: {
              1024: { slidesPerView: 4 },
              850: { slidesPerView: 3.5 },
              640: { slidesPerView: 2.5 },
              440: { slidesPerView: 1.5 },
            },
            children:
              i === 'en'
                ? ej.map((o) =>
                    E.jsx(
                      Ua,
                      {
                        children: E.jsx(
                          S0,
                          { path: o.path, title: o.title, published_at: o.published_at },
                          Nn(),
                        ),
                      },
                      Nn(),
                    ),
                  )
                : n
                ? n.data.map((o) =>
                    E.jsx(
                      Ua,
                      {
                        children: E.jsx(
                          S0,
                          {
                            path: o.featured_images[0].path,
                            title: o.title,
                            published_at: o.published_at,
                          },
                          Nn(),
                        ),
                      },
                      Nn(),
                    ),
                  )
                : E.jsx('div', { children: 'Loading news...' }),
          }),
          E.jsx(XN, { news: !0, text: s('All news', 'Все новости') }),
        ],
      });
  };
function nj() {
  const e = Vt((n) => n.activeLang.localization),
    t = (n, r) => (e === 'en' ? n : r);
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx('section', { children: E.jsx(YN, {}) }),
      E.jsx('section', {
        className: 'pb-10 bg-white2 relative z-10',
        children: E.jsxs('div', {
          className: 'container',
          children: [
            E.jsx('div', {
              className:
                'grid translate-y-[-50px] gap-y-3 grid-cols-1 tab:grid-cols-4 gap-5 tab:gap-[30px]',
              children: iM
                .filter((n) => (e === 'en' ? n.en : !n.en))
                .map((n) => _.createElement(r0, { ...n, key: n.path })),
            }),
            E.jsxs('div', {
              className: 'flex tab:flex-row flex-col-reverse gap-[30px]',
              children: [
                E.jsx('div', {
                  className: 'flex tab:flex-col flex-wrap gap-3',
                  children: sM
                    .filter((n) => (e === 'en' ? n.en : !n.en))
                    .map((n) => _.createElement(r0, { ...n, rect: !0, key: n.path })),
                }),
                E.jsxs('div', {
                  className: 'flex flex-col tab:items-end justify-between',
                  children: [
                    E.jsx('p', {
                      className:
                        'text-[20px] md:text-[24px] leading-[130%] font-light tab:mb-0 mb-8',
                      children: t(
                        `“Everything for Children”
                  is the largest congress and exhibition B2B event in the
                  field of children's goods industry in Turkmenistan,
                  Central Asia and the CIS countries, uniting
                  professionals who produce and
                  purchase quality products.`,
                        `«Все для детей» - крупнейшее конгресно-выставочное В2В-мероприятие в сфере индустрии
                  детских товаров на территории Туркменистана, стран ЦА и СНГ, объединяющее
                  профессионалов, производящих и закупающих качественную продукцию.`,
                      ),
                    }),
                    E.jsx(rM, { text: t('To learn more', 'Узнать больше'), path: '' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      E.jsx(tj, {}),
      E.jsx('section', {
        className: 'relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] mb-[50px]',
        children: E.jsx('iframe', {
          src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.67827952586!2d58.29659607507902!3d37.8912058554459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7003944259cb1d%3A0xafc893357e4b0d2!2z0KLQvtGA0LPQvtCy0L4t0L_RgNC-0LzRi9GI0LvQtdC90L3QsNGPINC_0LDQu9Cw0YLQsCDQotGD0YDQutC80LXQvdC40YHRgtCw0L3QsA!5e0!3m2!1sru!2s!4v1713164734635!5m2!1sru!2s',
          className: 'absolute inset-0 w-full h-full ',
          style: { border: 0 },
          allowFullScreen: !0,
          loading: 'lazy',
        }),
      }),
    ],
  });
}
const rj = [
    {
      exhibition: !0,
      pathname: 'Выставка',
      pathnameEn: 'About',
      info: [
        { title: 'О выставке', link: '' },
        { en: !0, title: 'About', link: '/about-exhibition' },
      ],
    },
    {
      members: !0,
      pathname: 'Участникам',
      pathnameEn: 'Participants',
      info: [
        { title: 'Заявка на участие', link: '/participants-apply' },
        { en: !0, title: 'Application for participation', link: '/participants-apply' },
      ],
    },
    { news: !0, pathname: 'Новости', info: [{ title: 'Новости', link: '/news' }] },
  ],
  ij = () => {
    const e = Sl().pathname,
      t = Vt((n) => n.activeLang.localization);
    return E.jsx('aside', {
      className:
        'flex flex-col items-start gap-y-[12px] py-[20px] sticky top-0 left-0 overflow-hidden min-w-[230px]',
      children: rj
        .filter(
          (n) =>
            (e === '/about-exhibition' && n.exhibition) ||
            (e === '/participants-apply' && n.members),
        )
        .map((n) =>
          E.jsxs(
            'div',
            {
              children: [
                E.jsx('p', {
                  className: 'text-bgWhite mb-[16px] text-[16px] font-bold leading-[1.5]',
                  children: t === 'en' ? n.pathnameEn : n.pathname,
                }),
                E.jsx('div', {
                  className: 'flex flex-col items-start gap-y-[8px]',
                  children: E.jsx('div', {
                    className: 'flex flex-col gap-[10px] px-[16px]',
                    children: n.info
                      .filter((r) => (t === 'en' ? r.en : !r.en))
                      .map((r) =>
                        E.jsx(
                          Tn,
                          {
                            to: r.link,
                            className: Gt(
                              'cursor-pointer py-1 leading-[130%] text-[14px] transition-all hover:text-purple',
                              {
                                'hover:text-purple text-purple hover:cursor-default': r.link === e,
                              },
                            ),
                            children: r.title,
                          },
                          Nn(),
                        ),
                      ),
                  }),
                }),
              ],
            },
            Nn(),
          ),
        ),
    });
  },
  BE = ({ children: e }) =>
    E.jsx('section', {
      className: 'tab:bg-blueBg bg-navyBlueBg h-full',
      children: E.jsx('div', {
        className: 'container h-full section-mb',
        children: E.jsxs('div', {
          className: 'flex w-full h-full gap-[100px]',
          children: [
            E.jsx(ij, {}),
            E.jsx('div', {
              className:
                'bg-white py-[20px] lg:pl-10 md:pl-6 pl-0 lg:w-[75%] w-full relative main-abs-bg min-h-full',
              children: e,
            }),
          ],
        }),
      }),
    }),
  sj = () => {
    const e = Vt((s) => s.activeLang.localization),
      {
        isError: t,
        isLoading: n,
        data: r,
        isSuccess: i,
      } = Bm({ queryKey: ['aboutExhibitionData', e], queryFn: () => od.getAboutExhibition(e) });
    return {
      aboutExhibitionIsError: t,
      aboutExhibitionIsLoading: n,
      aboutExhibitionData: r,
      aboutExhibitionIsSuccess: i,
    };
  },
  oj = () => {
    const e = Vt((o) => o.activeLang.localization),
      t = (o, a) => (e === 'en' ? o : a),
      {
        aboutExhibitionData: n,
        aboutExhibitionIsError: r,
        aboutExhibitionIsLoading: i,
        aboutExhibitionIsSuccess: s,
      } = sj();
    if (s)
      return E.jsx(BE, {
        children: E.jsxs('div', {
          className: 'w-full',
          children: [
            E.jsx(Um, { second: t('About', 'О Выставке') }),
            E.jsx(td, { title: t('About', 'О выставке'), mb24: !0 }),
            e === 'en'
              ? E.jsxs('div', {
                  className: 'flex flex-col gap-6',
                  children: [
                    E.jsxs('p', {
                      className: 'text-[22px] font-light leading-[150%]',
                      children: [
                        "For the first time in history, from August 19 to 22, 2024, the International Universal Exhibition-Fair “Kids Expo: Everything for Children” will be held in Ashgabat. This event promises to be a key moment in the children's products and services industry, providing a unique opportunity for companies to contribute to the development of this market segment.",
                        ' ',
                      ],
                    }),
                    E.jsx('img', {
                      src: 'https://turkmenexpo.com/app/storage/app/media/uploaded-files/about.aa68485e.png',
                      alt: '',
                    }),
                    E.jsx('p', {
                      className: 'leading-[150%]',
                      children:
                        "Exhibitors are invited to attend the trade fair which is a platform where companies working in the field of children's services can present their innovative products and services, enriching the market with new opportunities. “Kids Expo” will not only provide a platform for enterprises, but will also become an open window to the market of Turkmenistan. The exhibition's exposition is aimed at attracting the attention of international partners, investors and representatives of the children's industry from all over the world. It’s an event focused on the area kids goods to find appropriate business partners for the Central Asian market or present own products and look for a new clients. More than 90 exhibitors and 1500 visitors are expected.",
                    }),
                    E.jsxs('div', {
                      className: 'flex flex-col gap-5 leading-[150%]',
                      children: [
                        E.jsxs('p', {
                          children: [
                            E.jsx('span', { className: 'text-purple', children: 'ORGANIZER: ' }),
                            'Chamber of Commerce and Industry of Turkmenistan',
                            ' ',
                          ],
                        }),
                        E.jsxs('p', {
                          children: [
                            E.jsx('span', { className: 'text-purple', children: 'СO-ORGANIZER: ' }),
                            'Turkmen Expo company',
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : n
              ? E.jsx('div', {
                  className: 'flex flex-col gap-6 exibition-about-wrapper',
                  dangerouslySetInnerHTML: { __html: n.data },
                })
              : null,
          ],
        }),
      });
  };
var Ll = (e) => e.type === 'checkbox',
  js = (e) => e instanceof Date,
  It = (e) => e == null;
const UE = (e) => typeof e == 'object';
var st = (e) => !It(e) && !Array.isArray(e) && UE(e) && !js(e),
  aj = (e) => (st(e) && e.target ? (Ll(e.target) ? e.target.checked : e.target.value) : e),
  lj = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  uj = (e, t) => e.has(lj(t)),
  cj = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return st(t) && t.hasOwnProperty('isPrototypeOf');
  },
  Qm = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function hn(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(Qm && (e instanceof Blob || e instanceof FileList)) && (n || st(e)))
    if (((t = n ? [] : {}), !n && !cj(e))) t = e;
    else for (const r in e) e.hasOwnProperty(r) && (t[r] = hn(e[r]));
  else return e;
  return t;
}
var Al = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Qe = (e) => e === void 0,
  te = (e, t, n) => {
    if (!t || !st(e)) return n;
    const r = Al(t.split(/[,[\].]+?/)).reduce((i, s) => (It(i) ? i : i[s]), e);
    return Qe(r) || r === e ? (Qe(e[t]) ? n : e[t]) : r;
  },
  pr = (e) => typeof e == 'boolean';
const E0 = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  Dn = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  lr = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  };
Te.createContext(null);
var dj = (e, t, n, r = !0) => {
    const i = { defaultValues: t._defaultValues };
    for (const s in e)
      Object.defineProperty(i, s, {
        get: () => {
          const o = s;
          return t._proxyFormState[o] !== Dn.all && (t._proxyFormState[o] = !r || Dn.all), e[o];
        },
      });
    return i;
  },
  Xt = (e) => st(e) && !Object.keys(e).length,
  fj = (e, t, n, r) => {
    n(e);
    const { name: i, ...s } = e;
    return (
      Xt(s) ||
      Object.keys(s).length >= Object.keys(t).length ||
      Object.keys(s).find((o) => t[o] === Dn.all)
    );
  },
  pf = (e) => (Array.isArray(e) ? e : [e]);
function hj(e) {
  const t = Te.useRef(e);
  (t.current = e),
    Te.useEffect(() => {
      const n =
        !e.disabled && t.current.subject && t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
var Jn = (e) => typeof e == 'string',
  pj = (e, t, n, r, i) =>
    Jn(e)
      ? (r && t.watch.add(e), te(n, e, i))
      : Array.isArray(e)
      ? e.map((s) => (r && t.watch.add(s), te(n, s)))
      : (r && (t.watchAll = !0), n),
  Ym = (e) => /^\w*$/.test(e),
  $E = (e) => Al(e.replace(/["|']|\]/g, '').split(/\.|\[/)),
  Ae = (e, t, n) => {
    let r = -1;
    const i = Ym(t) ? [t] : $E(t),
      s = i.length,
      o = s - 1;
    for (; ++r < s; ) {
      const a = i[r];
      let l = n;
      if (r !== o) {
        const u = e[a];
        l = st(u) || Array.isArray(u) ? u : isNaN(+i[r + 1]) ? {} : [];
      }
      (e[a] = l), (e = e[a]);
    }
    return e;
  },
  HE = (e, t, n, r, i) =>
    t ? { ...n[e], types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: i || !0 } } : {},
  T0 = (e) => ({
    isOnSubmit: !e || e === Dn.onSubmit,
    isOnBlur: e === Dn.onBlur,
    isOnChange: e === Dn.onChange,
    isOnAll: e === Dn.all,
    isOnTouch: e === Dn.onTouched,
  }),
  b0 = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const ga = (e, t, n, r) => {
  for (const i of n || Object.keys(e)) {
    const s = te(e, i);
    if (s) {
      const { _f: o, ...a } = s;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], i) && !r) break;
        if (o.ref && t(o.ref, o.name) && !r) break;
        ga(a, t);
      } else st(a) && ga(a, t);
    }
  }
};
var mj = (e, t, n) => {
    const r = Al(te(e, n));
    return Ae(r, 'root', t[n]), Ae(e, n, r), e;
  },
  Xm = (e) => e.type === 'file',
  Jr = (e) => typeof e == 'function',
  yc = (e) => {
    if (!Qm) return !1;
    const t = e ? e.ownerDocument : 0;
    return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
  },
  Ou = (e) => Jn(e),
  Jm = (e) => e.type === 'radio',
  xc = (e) => e instanceof RegExp;
const C0 = { value: !1, isValid: !1 },
  _0 = { value: !0, isValid: !0 };
var WE = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !Qe(e[0].attributes.value)
        ? Qe(e[0].value) || e[0].value === ''
          ? _0
          : { value: e[0].value, isValid: !0 }
        : _0
      : C0;
  }
  return C0;
};
const P0 = { isValid: !1, value: null };
var GE = (e) =>
  Array.isArray(e)
    ? e.reduce((t, n) => (n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t), P0)
    : P0;
function k0(e, t, n = 'validate') {
  if (Ou(e) || (Array.isArray(e) && e.every(Ou)) || (pr(e) && !e))
    return { type: n, message: Ou(e) ? e : '', ref: t };
}
var vs = (e) => (st(e) && !xc(e) ? e : { value: e, message: '' }),
  R0 = async (e, t, n, r, i) => {
    const {
        ref: s,
        refs: o,
        required: a,
        maxLength: l,
        minLength: u,
        min: c,
        max: d,
        pattern: f,
        validate: m,
        name: v,
        valueAsNumber: y,
        mount: w,
        disabled: h,
      } = e._f,
      p = te(t, v);
    if (!w || h) return {};
    const g = o ? o[0] : s,
      x = (N) => {
        r && g.reportValidity && (g.setCustomValidity(pr(N) ? '' : N || ''), g.reportValidity());
      },
      T = {},
      A = Jm(s),
      S = Ll(s),
      b = A || S,
      L =
        ((y || Xm(s)) && Qe(s.value) && Qe(p)) ||
        (yc(s) && s.value === '') ||
        p === '' ||
        (Array.isArray(p) && !p.length),
      P = HE.bind(null, v, n, T),
      z = (N, j, G, Q = lr.maxLength, he = lr.minLength) => {
        const Re = N ? j : G;
        T[v] = { type: N ? Q : he, message: Re, ref: s, ...P(N ? Q : he, Re) };
      };
    if (
      i
        ? !Array.isArray(p) || !p.length
        : a &&
          ((!b && (L || It(p))) || (pr(p) && !p) || (S && !WE(o).isValid) || (A && !GE(o).isValid))
    ) {
      const { value: N, message: j } = Ou(a) ? { value: !!a, message: a } : vs(a);
      if (N && ((T[v] = { type: lr.required, message: j, ref: g, ...P(lr.required, j) }), !n))
        return x(j), T;
    }
    if (!L && (!It(c) || !It(d))) {
      let N, j;
      const G = vs(d),
        Q = vs(c);
      if (!It(p) && !isNaN(p)) {
        const he = s.valueAsNumber || (p && +p);
        It(G.value) || (N = he > G.value), It(Q.value) || (j = he < Q.value);
      } else {
        const he = s.valueAsDate || new Date(p),
          Re = (K) => new Date(new Date().toDateString() + ' ' + K),
          D = s.type == 'time',
          q = s.type == 'week';
        Jn(G.value) &&
          p &&
          (N = D ? Re(p) > Re(G.value) : q ? p > G.value : he > new Date(G.value)),
          Jn(Q.value) &&
            p &&
            (j = D ? Re(p) < Re(Q.value) : q ? p < Q.value : he < new Date(Q.value));
      }
      if ((N || j) && (z(!!N, G.message, Q.message, lr.max, lr.min), !n)) return x(T[v].message), T;
    }
    if ((l || u) && !L && (Jn(p) || (i && Array.isArray(p)))) {
      const N = vs(l),
        j = vs(u),
        G = !It(N.value) && p.length > +N.value,
        Q = !It(j.value) && p.length < +j.value;
      if ((G || Q) && (z(G, N.message, j.message), !n)) return x(T[v].message), T;
    }
    if (f && !L && Jn(p)) {
      const { value: N, message: j } = vs(f);
      if (
        xc(N) &&
        !p.match(N) &&
        ((T[v] = { type: lr.pattern, message: j, ref: s, ...P(lr.pattern, j) }), !n)
      )
        return x(j), T;
    }
    if (m) {
      if (Jr(m)) {
        const N = await m(p, t),
          j = k0(N, g);
        if (j && ((T[v] = { ...j, ...P(lr.validate, j.message) }), !n)) return x(j.message), T;
      } else if (st(m)) {
        let N = {};
        for (const j in m) {
          if (!Xt(N) && !n) break;
          const G = k0(await m[j](p, t), g, j);
          G && ((N = { ...G, ...P(j, G.message) }), x(G.message), n && (T[v] = N));
        }
        if (!Xt(N) && ((T[v] = { ref: g, ...N }), !n)) return T;
      }
    }
    return x(!0), T;
  };
function gj(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = Qe(e) ? r++ : e[t[r++]];
  return e;
}
function vj(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Qe(e[t])) return !1;
  return !0;
}
function nt(e, t) {
  const n = Array.isArray(t) ? t : Ym(t) ? [t] : $E(t),
    r = n.length === 1 ? e : gj(e, n),
    i = n.length - 1,
    s = n[i];
  return (
    r && delete r[s],
    i !== 0 && ((st(r) && Xt(r)) || (Array.isArray(r) && vj(r))) && nt(e, n.slice(0, -1)),
    e
  );
}
var mf = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (i) => {
        for (const s of e) s.next && s.next(i);
      },
      subscribe: (i) => (
        e.push(i),
        {
          unsubscribe: () => {
            e = e.filter((s) => s !== i);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  wc = (e) => It(e) || !UE(e);
function Fi(e, t) {
  if (wc(e) || wc(t)) return e === t;
  if (js(e) && js(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const i of n) {
    const s = e[i];
    if (!r.includes(i)) return !1;
    if (i !== 'ref') {
      const o = t[i];
      if (
        (js(s) && js(o)) || (st(s) && st(o)) || (Array.isArray(s) && Array.isArray(o))
          ? !Fi(s, o)
          : s !== o
      )
        return !1;
    }
  }
  return !0;
}
var qE = (e) => e.type === 'select-multiple',
  yj = (e) => Jm(e) || Ll(e),
  gf = (e) => yc(e) && e.isConnected,
  KE = (e) => {
    for (const t in e) if (Jr(e[t])) return !0;
    return !1;
  };
function Sc(e, t = {}) {
  const n = Array.isArray(e);
  if (st(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (st(e[r]) && !KE(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), Sc(e[r], t[r]))
        : It(e[r]) || (t[r] = !0);
  return t;
}
function ZE(e, t, n) {
  const r = Array.isArray(e);
  if (st(e) || r)
    for (const i in e)
      Array.isArray(e[i]) || (st(e[i]) && !KE(e[i]))
        ? Qe(t) || wc(n[i])
          ? (n[i] = Array.isArray(e[i]) ? Sc(e[i], []) : { ...Sc(e[i]) })
          : ZE(e[i], It(t) ? {} : t[i], n[i])
        : (n[i] = !Fi(e[i], t[i]));
  return n;
}
var hu = (e, t) => ZE(e, t, Sc(t)),
  QE = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    Qe(e) ? e : t ? (e === '' ? NaN : e && +e) : n && Jn(e) ? new Date(e) : r ? r(e) : e;
function vf(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return Xm(t)
      ? t.files
      : Jm(t)
      ? GE(e.refs).value
      : qE(t)
      ? [...t.selectedOptions].map(({ value: n }) => n)
      : Ll(t)
      ? WE(e.refs).value
      : QE(Qe(t.value) ? e.ref.value : t.value, e);
}
var xj = (e, t, n, r) => {
    const i = {};
    for (const s of e) {
      const o = te(t, s);
      o && Ae(i, s, o._f);
    }
    return { criteriaMode: n, names: [...e], fields: i, shouldUseNativeValidation: r };
  },
  Go = (e) => (Qe(e) ? e : xc(e) ? e.source : st(e) ? (xc(e.value) ? e.value.source : e.value) : e),
  wj = (e) =>
    e.mount &&
    (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function L0(e, t, n) {
  const r = te(e, n);
  if (r || Ym(n)) return { error: r, name: n };
  const i = n.split('.');
  for (; i.length; ) {
    const s = i.join('.'),
      o = te(t, s),
      a = te(e, s);
    if (o && !Array.isArray(o) && n !== s) return { name: n };
    if (a && a.type) return { name: s, error: a };
    i.pop();
  }
  return { name: n };
}
var Sj = (e, t, n, r, i) =>
    i.isOnAll
      ? !1
      : !n && i.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : i.isOnBlur)
      ? !e
      : (n ? r.isOnChange : i.isOnChange)
      ? e
      : !0,
  Ej = (e, t) => !Al(te(e, t)).length && nt(e, t);
const Tj = { mode: Dn.onSubmit, reValidateMode: Dn.onChange, shouldFocusError: !0 };
function bj(e = {}) {
  let t = { ...Tj, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Jr(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    i = st(t.defaultValues) || st(t.values) ? hn(t.defaultValues || t.values) || {} : {},
    s = t.shouldUnregister ? {} : hn(i),
    o = { action: !1, mount: !1, watch: !1 },
    a = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
    l,
    u = 0;
  const c = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    d = { values: mf(), array: mf(), state: mf() },
    f = T0(t.mode),
    m = T0(t.reValidateMode),
    v = t.criteriaMode === Dn.all,
    y = (C) => (O) => {
      clearTimeout(u), (u = setTimeout(C, O));
    },
    w = async (C) => {
      if (c.isValid || C) {
        const O = t.resolver ? Xt((await b()).errors) : await P(r, !0);
        O !== n.isValid && d.state.next({ isValid: O });
      }
    },
    h = (C, O) => {
      (c.isValidating || c.validatingFields) &&
        ((C || Array.from(a.mount)).forEach((I) => {
          I && (O ? Ae(n.validatingFields, I, O) : nt(n.validatingFields, I));
        }),
        d.state.next({
          validatingFields: n.validatingFields,
          isValidating: !Xt(n.validatingFields),
        }));
    },
    p = (C, O = [], I, Y, W = !0, $ = !0) => {
      if (Y && I) {
        if (((o.action = !0), $ && Array.isArray(te(r, C)))) {
          const ie = I(te(r, C), Y.argA, Y.argB);
          W && Ae(r, C, ie);
        }
        if ($ && Array.isArray(te(n.errors, C))) {
          const ie = I(te(n.errors, C), Y.argA, Y.argB);
          W && Ae(n.errors, C, ie), Ej(n.errors, C);
        }
        if (c.touchedFields && $ && Array.isArray(te(n.touchedFields, C))) {
          const ie = I(te(n.touchedFields, C), Y.argA, Y.argB);
          W && Ae(n.touchedFields, C, ie);
        }
        c.dirtyFields && (n.dirtyFields = hu(i, s)),
          d.state.next({
            name: C,
            isDirty: N(C, O),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else Ae(s, C, O);
    },
    g = (C, O) => {
      Ae(n.errors, C, O), d.state.next({ errors: n.errors });
    },
    x = (C) => {
      (n.errors = C), d.state.next({ errors: n.errors, isValid: !1 });
    },
    T = (C, O, I, Y) => {
      const W = te(r, C);
      if (W) {
        const $ = te(s, C, Qe(I) ? te(i, C) : I);
        Qe($) || (Y && Y.defaultChecked) || O ? Ae(s, C, O ? $ : vf(W._f)) : Q(C, $),
          o.mount && w();
      }
    },
    A = (C, O, I, Y, W) => {
      let $ = !1,
        ie = !1;
      const Pe = { name: C },
        Oe = !!(te(r, C) && te(r, C)._f.disabled);
      if (!I || Y) {
        c.isDirty && ((ie = n.isDirty), (n.isDirty = Pe.isDirty = N()), ($ = ie !== Pe.isDirty));
        const tt = Oe || Fi(te(i, C), O);
        (ie = !!(!Oe && te(n.dirtyFields, C))),
          tt || Oe ? nt(n.dirtyFields, C) : Ae(n.dirtyFields, C, !0),
          (Pe.dirtyFields = n.dirtyFields),
          ($ = $ || (c.dirtyFields && ie !== !tt));
      }
      if (I) {
        const tt = te(n.touchedFields, C);
        tt ||
          (Ae(n.touchedFields, C, I),
          (Pe.touchedFields = n.touchedFields),
          ($ = $ || (c.touchedFields && tt !== I)));
      }
      return $ && W && d.state.next(Pe), $ ? Pe : {};
    },
    S = (C, O, I, Y) => {
      const W = te(n.errors, C),
        $ = c.isValid && pr(O) && n.isValid !== O;
      if (
        (e.delayError && I
          ? ((l = y(() => g(C, I))), l(e.delayError))
          : (clearTimeout(u), (l = null), I ? Ae(n.errors, C, I) : nt(n.errors, C)),
        (I ? !Fi(W, I) : W) || !Xt(Y) || $)
      ) {
        const ie = { ...Y, ...($ && pr(O) ? { isValid: O } : {}), errors: n.errors, name: C };
        (n = { ...n, ...ie }), d.state.next(ie);
      }
    },
    b = async (C) => {
      h(C, !0);
      const O = await t.resolver(
        s,
        t.context,
        xj(C || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation),
      );
      return h(C), O;
    },
    L = async (C) => {
      const { errors: O } = await b(C);
      if (C)
        for (const I of C) {
          const Y = te(O, I);
          Y ? Ae(n.errors, I, Y) : nt(n.errors, I);
        }
      else n.errors = O;
      return O;
    },
    P = async (C, O, I = { valid: !0 }) => {
      for (const Y in C) {
        const W = C[Y];
        if (W) {
          const { _f: $, ...ie } = W;
          if ($) {
            const Pe = a.array.has($.name);
            h([Y], !0);
            const Oe = await R0(W, s, v, t.shouldUseNativeValidation && !O, Pe);
            if ((h([Y]), Oe[$.name] && ((I.valid = !1), O))) break;
            !O &&
              (te(Oe, $.name)
                ? Pe
                  ? mj(n.errors, Oe, $.name)
                  : Ae(n.errors, $.name, Oe[$.name])
                : nt(n.errors, $.name));
          }
          ie && (await P(ie, O, I));
        }
      }
      return I.valid;
    },
    z = () => {
      for (const C of a.unMount) {
        const O = te(r, C);
        O && (O._f.refs ? O._f.refs.every((I) => !gf(I)) : !gf(O._f.ref)) && et(C);
      }
      a.unMount = new Set();
    },
    N = (C, O) => (C && O && Ae(s, C, O), !Fi(ye(), i)),
    j = (C, O, I) => pj(C, a, { ...(o.mount ? s : Qe(O) ? i : Jn(C) ? { [C]: O } : O) }, I, O),
    G = (C) => Al(te(o.mount ? s : i, C, e.shouldUnregister ? te(i, C, []) : [])),
    Q = (C, O, I = {}) => {
      const Y = te(r, C);
      let W = O;
      if (Y) {
        const $ = Y._f;
        $ &&
          (!$.disabled && Ae(s, C, QE(O, $)),
          (W = yc($.ref) && It(O) ? '' : O),
          qE($.ref)
            ? [...$.ref.options].forEach((ie) => (ie.selected = W.includes(ie.value)))
            : $.refs
            ? Ll($.ref)
              ? $.refs.length > 1
                ? $.refs.forEach(
                    (ie) =>
                      (!ie.defaultChecked || !ie.disabled) &&
                      (ie.checked = Array.isArray(W)
                        ? !!W.find((Pe) => Pe === ie.value)
                        : W === ie.value),
                  )
                : $.refs[0] && ($.refs[0].checked = !!W)
              : $.refs.forEach((ie) => (ie.checked = ie.value === W))
            : Xm($.ref)
            ? ($.ref.value = '')
            : (($.ref.value = W), $.ref.type || d.values.next({ name: C, values: { ...s } })));
      }
      (I.shouldDirty || I.shouldTouch) && A(C, W, I.shouldTouch, I.shouldDirty, !0),
        I.shouldValidate && K(C);
    },
    he = (C, O, I) => {
      for (const Y in O) {
        const W = O[Y],
          $ = `${C}.${Y}`,
          ie = te(r, $);
        (a.array.has(C) || !wc(W) || (ie && !ie._f)) && !js(W) ? he($, W, I) : Q($, W, I);
      }
    },
    Re = (C, O, I = {}) => {
      const Y = te(r, C),
        W = a.array.has(C),
        $ = hn(O);
      Ae(s, C, $),
        W
          ? (d.array.next({ name: C, values: { ...s } }),
            (c.isDirty || c.dirtyFields) &&
              I.shouldDirty &&
              d.state.next({ name: C, dirtyFields: hu(i, s), isDirty: N(C, $) }))
          : Y && !Y._f && !It($)
          ? he(C, $, I)
          : Q(C, $, I),
        b0(C, a) && d.state.next({ ...n }),
        d.values.next({ name: o.mount ? C : void 0, values: { ...s } });
    },
    D = async (C) => {
      o.mount = !0;
      const O = C.target;
      let I = O.name,
        Y = !0;
      const W = te(r, I),
        $ = () => (O.type ? vf(W._f) : aj(C)),
        ie = (Pe) => {
          Y = Number.isNaN(Pe) || Pe === te(s, I, Pe);
        };
      if (W) {
        let Pe, Oe;
        const tt = $(),
          ar = C.type === E0.BLUR || C.type === E0.FOCUS_OUT,
          ds =
            (!wj(W._f) && !t.resolver && !te(n.errors, I) && !W._f.deps) ||
            Sj(ar, te(n.touchedFields, I), n.isSubmitted, m, f),
          ko = b0(I, a, ar);
        Ae(s, I, tt),
          ar ? (W._f.onBlur && W._f.onBlur(C), l && l(0)) : W._f.onChange && W._f.onChange(C);
        const cn = A(I, tt, ar, !1),
          Nl = !Xt(cn) || ko;
        if ((!ar && d.values.next({ name: I, type: C.type, values: { ...s } }), ds))
          return c.isValid && w(), Nl && d.state.next({ name: I, ...(ko ? {} : cn) });
        if ((!ar && ko && d.state.next({ ...n }), t.resolver)) {
          const { errors: Ro } = await b([I]);
          if ((ie(tt), Y)) {
            const jl = L0(n.errors, r, I),
              Il = L0(Ro, r, jl.name || I);
            (Pe = Il.error), (I = Il.name), (Oe = Xt(Ro));
          }
        } else
          h([I], !0),
            (Pe = (await R0(W, s, v, t.shouldUseNativeValidation))[I]),
            h([I]),
            ie(tt),
            Y && (Pe ? (Oe = !1) : c.isValid && (Oe = await P(r, !0)));
        Y && (W._f.deps && K(W._f.deps), S(I, Oe, Pe, cn));
      }
    },
    q = (C, O) => {
      if (te(n.errors, O) && C.focus) return C.focus(), 1;
    },
    K = async (C, O = {}) => {
      let I, Y;
      const W = pf(C);
      if (t.resolver) {
        const $ = await L(Qe(C) ? C : W);
        (I = Xt($)), (Y = C ? !W.some((ie) => te($, ie)) : I);
      } else
        C
          ? ((Y = (
              await Promise.all(
                W.map(async ($) => {
                  const ie = te(r, $);
                  return await P(ie && ie._f ? { [$]: ie } : ie);
                }),
              )
            ).every(Boolean)),
            !(!Y && !n.isValid) && w())
          : (Y = I = await P(r));
      return (
        d.state.next({
          ...(!Jn(C) || (c.isValid && I !== n.isValid) ? {} : { name: C }),
          ...(t.resolver || !C ? { isValid: I } : {}),
          errors: n.errors,
        }),
        O.shouldFocus && !Y && ga(r, q, C ? W : a.mount),
        Y
      );
    },
    ye = (C) => {
      const O = { ...(o.mount ? s : i) };
      return Qe(C) ? O : Jn(C) ? te(O, C) : C.map((I) => te(O, I));
    },
    Se = (C, O) => ({
      invalid: !!te((O || n).errors, C),
      isDirty: !!te((O || n).dirtyFields, C),
      isTouched: !!te((O || n).touchedFields, C),
      isValidating: !!te((O || n).validatingFields, C),
      error: te((O || n).errors, C),
    }),
    Qt = (C) => {
      C && pf(C).forEach((O) => nt(n.errors, O)), d.state.next({ errors: C ? n.errors : {} });
    },
    wt = (C, O, I) => {
      const Y = (te(r, C, { _f: {} })._f || {}).ref;
      Ae(n.errors, C, { ...O, ref: Y }),
        d.state.next({ name: C, errors: n.errors, isValid: !1 }),
        I && I.shouldFocus && Y && Y.focus && Y.focus();
    },
    Rt = (C, O) => (Jr(C) ? d.values.subscribe({ next: (I) => C(j(void 0, O), I) }) : j(C, O, !0)),
    et = (C, O = {}) => {
      for (const I of C ? pf(C) : a.mount)
        a.mount.delete(I),
          a.array.delete(I),
          O.keepValue || (nt(r, I), nt(s, I)),
          !O.keepError && nt(n.errors, I),
          !O.keepDirty && nt(n.dirtyFields, I),
          !O.keepTouched && nt(n.touchedFields, I),
          !O.keepIsValidating && nt(n.validatingFields, I),
          !t.shouldUnregister && !O.keepDefaultValue && nt(i, I);
      d.values.next({ values: { ...s } }),
        d.state.next({ ...n, ...(O.keepDirty ? { isDirty: N() } : {}) }),
        !O.keepIsValid && w();
    },
    Lt = ({ disabled: C, name: O, field: I, fields: Y, value: W }) => {
      if (pr(C)) {
        const $ = C ? void 0 : Qe(W) ? vf(I ? I._f : te(Y, O)._f) : W;
        Ae(s, O, $), A(O, $, !1, !1, !0);
      }
    },
    Ci = (C, O = {}) => {
      let I = te(r, C);
      const Y = pr(O.disabled);
      return (
        Ae(r, C, {
          ...(I || {}),
          _f: { ...(I && I._f ? I._f : { ref: { name: C } }), name: C, mount: !0, ...O },
        }),
        a.mount.add(C),
        I ? Lt({ field: I, disabled: O.disabled, name: C, value: O.value }) : T(C, !0, O.value),
        {
          ...(Y ? { disabled: O.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!O.required,
                min: Go(O.min),
                max: Go(O.max),
                minLength: Go(O.minLength),
                maxLength: Go(O.maxLength),
                pattern: Go(O.pattern),
              }
            : {}),
          name: C,
          onChange: D,
          onBlur: D,
          ref: (W) => {
            if (W) {
              Ci(C, O), (I = te(r, C));
              const $ =
                  (Qe(W.value) &&
                    W.querySelectorAll &&
                    W.querySelectorAll('input,select,textarea')[0]) ||
                  W,
                ie = yj($),
                Pe = I._f.refs || [];
              if (ie ? Pe.find((Oe) => Oe === $) : $ === I._f.ref) return;
              Ae(r, C, {
                _f: {
                  ...I._f,
                  ...(ie
                    ? {
                        refs: [...Pe.filter(gf), $, ...(Array.isArray(te(i, C)) ? [{}] : [])],
                        ref: { type: $.type, name: C },
                      }
                    : { ref: $ }),
                },
              }),
                T(C, !1, void 0, $);
            } else
              (I = te(r, C, {})),
                I._f && (I._f.mount = !1),
                (t.shouldUnregister || O.shouldUnregister) &&
                  !(uj(a.array, C) && o.action) &&
                  a.unMount.add(C);
          },
        }
      );
    },
    Ml = () => t.shouldFocusError && ga(r, q, a.mount),
    ld = (C) => {
      pr(C) &&
        (d.state.next({ disabled: C }),
        ga(
          r,
          (O, I) => {
            let Y = C;
            const W = te(r, I);
            W && pr(W._f.disabled) && (Y || (Y = W._f.disabled)), (O.disabled = Y);
          },
          0,
          !1,
        ));
    },
    Dl = (C, O) => async (I) => {
      let Y;
      I && (I.preventDefault && I.preventDefault(), I.persist && I.persist());
      let W = hn(s);
      if ((d.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: $, values: ie } = await b();
        (n.errors = $), (W = ie);
      } else await P(r);
      if ((nt(n.errors, 'root'), Xt(n.errors))) {
        d.state.next({ errors: {} });
        try {
          await C(W, I);
        } catch ($) {
          Y = $;
        }
      } else O && (await O({ ...n.errors }, I)), Ml(), setTimeout(Ml);
      if (
        (d.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Xt(n.errors) && !Y,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        Y)
      )
        throw Y;
    },
    At = (C, O = {}) => {
      te(r, C) &&
        (Qe(O.defaultValue)
          ? Re(C, hn(te(i, C)))
          : (Re(C, O.defaultValue), Ae(i, C, hn(O.defaultValue))),
        O.keepTouched || nt(n.touchedFields, C),
        O.keepDirty ||
          (nt(n.dirtyFields, C), (n.isDirty = O.defaultValue ? N(C, hn(te(i, C))) : N())),
        O.keepError || (nt(n.errors, C), c.isValid && w()),
        d.state.next({ ...n }));
    },
    Lr = (C, O = {}) => {
      const I = C ? hn(C) : i,
        Y = hn(I),
        W = Xt(C),
        $ = W ? i : Y;
      if ((O.keepDefaultValues || (i = I), !O.keepValues)) {
        if (O.keepDirtyValues)
          for (const ie of a.mount)
            te(n.dirtyFields, ie) ? Ae($, ie, te(s, ie)) : Re(ie, te($, ie));
        else {
          if (Qm && Qe(C))
            for (const ie of a.mount) {
              const Pe = te(r, ie);
              if (Pe && Pe._f) {
                const Oe = Array.isArray(Pe._f.refs) ? Pe._f.refs[0] : Pe._f.ref;
                if (yc(Oe)) {
                  const tt = Oe.closest('form');
                  if (tt) {
                    tt.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (s = e.shouldUnregister ? (O.keepDefaultValues ? hn(i) : {}) : hn($)),
          d.array.next({ values: { ...$ } }),
          d.values.next({ values: { ...$ } });
      }
      (a = {
        mount: O.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (o.mount = !c.isValid || !!O.keepIsValid || !!O.keepDirtyValues),
        (o.watch = !!e.shouldUnregister),
        d.state.next({
          submitCount: O.keepSubmitCount ? n.submitCount : 0,
          isDirty: W ? !1 : O.keepDirty ? n.isDirty : !!(O.keepDefaultValues && !Fi(C, i)),
          isSubmitted: O.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: W
            ? []
            : O.keepDirtyValues
            ? O.keepDefaultValues && s
              ? hu(i, s)
              : n.dirtyFields
            : O.keepDefaultValues && C
            ? hu(i, C)
            : {},
          touchedFields: O.keepTouched ? n.touchedFields : {},
          errors: O.keepErrors ? n.errors : {},
          isSubmitSuccessful: O.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
          isSubmitting: !1,
        });
    },
    Po = (C, O) => Lr(Jr(C) ? C(s) : C, O);
  return {
    control: {
      register: Ci,
      unregister: et,
      getFieldState: Se,
      handleSubmit: Dl,
      setError: wt,
      _executeSchema: b,
      _getWatch: j,
      _getDirty: N,
      _updateValid: w,
      _removeUnmounted: z,
      _updateFieldArray: p,
      _updateDisabledField: Lt,
      _getFieldArray: G,
      _reset: Lr,
      _resetDefaultValues: () =>
        Jr(t.defaultValues) &&
        t.defaultValues().then((C) => {
          Po(C, t.resetOptions), d.state.next({ isLoading: !1 });
        }),
      _updateFormState: (C) => {
        n = { ...n, ...C };
      },
      _disableForm: ld,
      _subjects: d,
      _proxyFormState: c,
      _setErrors: x,
      get _fields() {
        return r;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return o;
      },
      set _state(C) {
        o = C;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return a;
      },
      set _names(C) {
        a = C;
      },
      get _formState() {
        return n;
      },
      set _formState(C) {
        n = C;
      },
      get _options() {
        return t;
      },
      set _options(C) {
        t = { ...t, ...C };
      },
    },
    trigger: K,
    register: Ci,
    handleSubmit: Dl,
    watch: Rt,
    setValue: Re,
    getValues: ye,
    reset: Po,
    resetField: At,
    clearErrors: Qt,
    unregister: et,
    setError: wt,
    setFocus: (C, O = {}) => {
      const I = te(r, C),
        Y = I && I._f;
      if (Y) {
        const W = Y.refs ? Y.refs[0] : Y.ref;
        W.focus && (W.focus(), O.shouldSelect && W.select());
      }
    },
    getFieldState: Se,
  };
}
function Cj(e = {}) {
  const t = Te.useRef(),
    n = Te.useRef(),
    [r, i] = Te.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Jr(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: Jr(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...bj(e), formState: r });
  const s = t.current.control;
  return (
    (s._options = e),
    hj({
      subject: s._subjects.state,
      next: (o) => {
        fj(o, s._proxyFormState, s._updateFormState) && i({ ...s._formState });
      },
    }),
    Te.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]),
    Te.useEffect(() => {
      if (s._proxyFormState.isDirty) {
        const o = s._getDirty();
        o !== r.isDirty && s._subjects.state.next({ isDirty: o });
      }
    }, [s, r.isDirty]),
    Te.useEffect(() => {
      e.values && !Fi(e.values, n.current)
        ? (s._reset(e.values, s._options.resetOptions),
          (n.current = e.values),
          i((o) => ({ ...o })))
        : s._resetDefaultValues();
    }, [e.values, s]),
    Te.useEffect(() => {
      e.errors && s._setErrors(e.errors);
    }, [e.errors, s]),
    Te.useEffect(() => {
      s._state.mount || (s._updateValid(), (s._state.mount = !0)),
        s._state.watch && ((s._state.watch = !1), s._subjects.state.next({ ...s._formState })),
        s._removeUnmounted();
    }),
    Te.useEffect(() => {
      e.shouldUnregister && s._subjects.values.next({ values: s._getWatch() });
    }, [e.shouldUnregister, s]),
    (t.current.formState = dj(r, s)),
    t.current
  );
}
var _e;
(function (e) {
  e.assertEqual = (i) => i;
  function t(i) {}
  e.assertIs = t;
  function n(i) {
    throw new Error();
  }
  (e.assertNever = n),
    (e.arrayToEnum = (i) => {
      const s = {};
      for (const o of i) s[o] = o;
      return s;
    }),
    (e.getValidEnumValues = (i) => {
      const s = e.objectKeys(i).filter((a) => typeof i[i[a]] != 'number'),
        o = {};
      for (const a of s) o[a] = i[a];
      return e.objectValues(o);
    }),
    (e.objectValues = (i) =>
      e.objectKeys(i).map(function (s) {
        return i[s];
      })),
    (e.objectKeys =
      typeof Object.keys == 'function'
        ? (i) => Object.keys(i)
        : (i) => {
            const s = [];
            for (const o in i) Object.prototype.hasOwnProperty.call(i, o) && s.push(o);
            return s;
          }),
    (e.find = (i, s) => {
      for (const o of i) if (s(o)) return o;
    }),
    (e.isInteger =
      typeof Number.isInteger == 'function'
        ? (i) => Number.isInteger(i)
        : (i) => typeof i == 'number' && isFinite(i) && Math.floor(i) === i);
  function r(i, s = ' | ') {
    return i.map((o) => (typeof o == 'string' ? `'${o}'` : o)).join(s);
  }
  (e.joinValues = r),
    (e.jsonStringifyReplacer = (i, s) => (typeof s == 'bigint' ? s.toString() : s));
})(_e || (_e = {}));
var Xh;
(function (e) {
  e.mergeShapes = (t, n) => ({ ...t, ...n });
})(Xh || (Xh = {}));
const X = _e.arrayToEnum([
    'string',
    'nan',
    'number',
    'integer',
    'float',
    'boolean',
    'date',
    'bigint',
    'symbol',
    'function',
    'undefined',
    'null',
    'array',
    'object',
    'unknown',
    'promise',
    'void',
    'never',
    'map',
    'set',
  ]),
  $r = (e) => {
    switch (typeof e) {
      case 'undefined':
        return X.undefined;
      case 'string':
        return X.string;
      case 'number':
        return isNaN(e) ? X.nan : X.number;
      case 'boolean':
        return X.boolean;
      case 'function':
        return X.function;
      case 'bigint':
        return X.bigint;
      case 'symbol':
        return X.symbol;
      case 'object':
        return Array.isArray(e)
          ? X.array
          : e === null
          ? X.null
          : e.then && typeof e.then == 'function' && e.catch && typeof e.catch == 'function'
          ? X.promise
          : typeof Map < 'u' && e instanceof Map
          ? X.map
          : typeof Set < 'u' && e instanceof Set
          ? X.set
          : typeof Date < 'u' && e instanceof Date
          ? X.date
          : X.object;
      default:
        return X.unknown;
    }
  },
  U = _e.arrayToEnum([
    'invalid_type',
    'invalid_literal',
    'custom',
    'invalid_union',
    'invalid_union_discriminator',
    'invalid_enum_value',
    'unrecognized_keys',
    'invalid_arguments',
    'invalid_return_type',
    'invalid_date',
    'invalid_string',
    'too_small',
    'too_big',
    'invalid_intersection_types',
    'not_multiple_of',
    'not_finite',
  ]),
  _j = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, '$1:');
class rn extends Error {
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (r) => {
        this.issues = [...this.issues, r];
      }),
      (this.addIssues = (r = []) => {
        this.issues = [...this.issues, ...r];
      });
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : (this.__proto__ = n),
      (this.name = 'ZodError'),
      (this.issues = t);
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n =
        t ||
        function (s) {
          return s.message;
        },
      r = { _errors: [] },
      i = (s) => {
        for (const o of s.issues)
          if (o.code === 'invalid_union') o.unionErrors.map(i);
          else if (o.code === 'invalid_return_type') i(o.returnTypeError);
          else if (o.code === 'invalid_arguments') i(o.argumentsError);
          else if (o.path.length === 0) r._errors.push(n(o));
          else {
            let a = r,
              l = 0;
            for (; l < o.path.length; ) {
              const u = o.path[l];
              l === o.path.length - 1
                ? ((a[u] = a[u] || { _errors: [] }), a[u]._errors.push(n(o)))
                : (a[u] = a[u] || { _errors: [] }),
                (a = a[u]),
                l++;
            }
          }
      };
    return i(this), r;
  }
  static assert(t) {
    if (!(t instanceof rn)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, _e.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {},
      r = [];
    for (const i of this.issues)
      i.path.length > 0
        ? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(t(i)))
        : r.push(t(i));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
rn.create = (e) => new rn(e);
const yo = (e, t) => {
  let n;
  switch (e.code) {
    case U.invalid_type:
      e.received === X.undefined
        ? (n = 'Required')
        : (n = `Expected ${e.expected}, received ${e.received}`);
      break;
    case U.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, _e.jsonStringifyReplacer)}`;
      break;
    case U.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${_e.joinValues(e.keys, ', ')}`;
      break;
    case U.invalid_union:
      n = 'Invalid input';
      break;
    case U.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${_e.joinValues(e.options)}`;
      break;
    case U.invalid_enum_value:
      n = `Invalid enum value. Expected ${_e.joinValues(e.options)}, received '${e.received}'`;
      break;
    case U.invalid_arguments:
      n = 'Invalid function arguments';
      break;
    case U.invalid_return_type:
      n = 'Invalid function return type';
      break;
    case U.invalid_date:
      n = 'Invalid date';
      break;
    case U.invalid_string:
      typeof e.validation == 'object'
        ? 'includes' in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == 'number' &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : 'startsWith' in e.validation
          ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
          : 'endsWith' in e.validation
          ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
          : _e.assertNever(e.validation)
        : e.validation !== 'regex'
        ? (n = `Invalid ${e.validation}`)
        : (n = 'Invalid');
      break;
    case U.too_small:
      e.type === 'array'
        ? (n = `Array must contain ${
            e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'
          } ${e.minimum} element(s)`)
        : e.type === 'string'
        ? (n = `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'} ${
            e.minimum
          } character(s)`)
        : e.type === 'number'
        ? (n = `Number must be ${
            e.exact
              ? 'exactly equal to '
              : e.inclusive
              ? 'greater than or equal to '
              : 'greater than '
          }${e.minimum}`)
        : e.type === 'date'
        ? (n = `Date must be ${
            e.exact
              ? 'exactly equal to '
              : e.inclusive
              ? 'greater than or equal to '
              : 'greater than '
          }${new Date(Number(e.minimum))}`)
        : (n = 'Invalid input');
      break;
    case U.too_big:
      e.type === 'array'
        ? (n = `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than'} ${
            e.maximum
          } element(s)`)
        : e.type === 'string'
        ? (n = `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under'} ${
            e.maximum
          } character(s)`)
        : e.type === 'number'
        ? (n = `Number must be ${
            e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'
          } ${e.maximum}`)
        : e.type === 'bigint'
        ? (n = `BigInt must be ${
            e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'
          } ${e.maximum}`)
        : e.type === 'date'
        ? (n = `Date must be ${
            e.exact ? 'exactly' : e.inclusive ? 'smaller than or equal to' : 'smaller than'
          } ${new Date(Number(e.maximum))}`)
        : (n = 'Invalid input');
      break;
    case U.custom:
      n = 'Invalid input';
      break;
    case U.invalid_intersection_types:
      n = 'Intersection results could not be merged';
      break;
    case U.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case U.not_finite:
      n = 'Number must be finite';
      break;
    default:
      (n = t.defaultError), _e.assertNever(e);
  }
  return { message: n };
};
let YE = yo;
function Pj(e) {
  YE = e;
}
function Ec() {
  return YE;
}
const Tc = (e) => {
    const { data: t, path: n, errorMaps: r, issueData: i } = e,
      s = [...n, ...(i.path || [])],
      o = { ...i, path: s };
    if (i.message !== void 0) return { ...i, path: s, message: i.message };
    let a = '';
    const l = r
      .filter((u) => !!u)
      .slice()
      .reverse();
    for (const u of l) a = u(o, { data: t, defaultError: a }).message;
    return { ...i, path: s, message: a };
  },
  kj = [];
function Z(e, t) {
  const n = Ec(),
    r = Tc({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === yo ? void 0 : yo].filter(
        (i) => !!i,
      ),
    });
  e.common.issues.push(r);
}
class kt {
  constructor() {
    this.value = 'valid';
  }
  dirty() {
    this.value === 'valid' && (this.value = 'dirty');
  }
  abort() {
    this.value !== 'aborted' && (this.value = 'aborted');
  }
  static mergeArray(t, n) {
    const r = [];
    for (const i of n) {
      if (i.status === 'aborted') return ce;
      i.status === 'dirty' && t.dirty(), r.push(i.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const i of n) {
      const s = await i.key,
        o = await i.value;
      r.push({ key: s, value: o });
    }
    return kt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const i of n) {
      const { key: s, value: o } = i;
      if (s.status === 'aborted' || o.status === 'aborted') return ce;
      s.status === 'dirty' && t.dirty(),
        o.status === 'dirty' && t.dirty(),
        s.value !== '__proto__' && (typeof o.value < 'u' || i.alwaysSet) && (r[s.value] = o.value);
    }
    return { status: t.value, value: r };
  }
}
const ce = Object.freeze({ status: 'aborted' }),
  Is = (e) => ({ status: 'dirty', value: e }),
  zt = (e) => ({ status: 'valid', value: e }),
  Jh = (e) => e.status === 'aborted',
  ep = (e) => e.status === 'dirty',
  Ha = (e) => e.status === 'valid',
  Wa = (e) => typeof Promise < 'u' && e instanceof Promise;
function bc(e, t, n, r) {
  if (typeof t == 'function' ? e !== t || !r : !t.has(e))
    throw new TypeError('Cannot read private member from an object whose class did not declare it');
  return t.get(e);
}
function XE(e, t, n, r, i) {
  if (typeof t == 'function' ? e !== t || !i : !t.has(e))
    throw new TypeError('Cannot write private member to an object whose class did not declare it');
  return t.set(e, n), n;
}
var se;
(function (e) {
  (e.errToObj = (t) => (typeof t == 'string' ? { message: t } : t || {})),
    (e.toString = (t) => (typeof t == 'string' ? t : t == null ? void 0 : t.message));
})(se || (se = {}));
var Jo, ea;
class ir {
  constructor(t, n, r, i) {
    (this._cachedPath = []), (this.parent = t), (this.data = n), (this._path = r), (this._key = i);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const A0 = (e, t) => {
  if (Ha(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length) throw new Error('Validation failed but no issues detected.');
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new rn(e.common.issues);
      return (this._error = n), this._error;
    },
  };
};
function me(e) {
  if (!e) return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
  if (t && (n || r))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return t
    ? { errorMap: t, description: i }
    : {
        errorMap: (o, a) => {
          var l, u;
          const { message: c } = e;
          return o.code === 'invalid_enum_value'
            ? { message: c ?? a.defaultError }
            : typeof a.data > 'u'
            ? { message: (l = c ?? r) !== null && l !== void 0 ? l : a.defaultError }
            : o.code !== 'invalid_type'
            ? { message: a.defaultError }
            : { message: (u = c ?? n) !== null && u !== void 0 ? u : a.defaultError };
        },
        description: i,
      };
}
class ve {
  constructor(t) {
    (this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this));
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return $r(t.data);
  }
  _getOrReturnCtx(t, n) {
    return (
      n || {
        common: t.parent.common,
        data: t.data,
        parsedType: $r(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new kt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: $r(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Wa(n)) throw new Error('Synchronous parse encountered promise.');
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const i = {
        common: {
          issues: [],
          async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: $r(t),
      },
      s = this._parseSync({ data: t, path: i.path, parent: i });
    return A0(i, s);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
        common: { issues: [], contextualErrorMap: n == null ? void 0 : n.errorMap, async: !0 },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: $r(t),
      },
      i = this._parse({ data: t, path: r.path, parent: r }),
      s = await (Wa(i) ? i : Promise.resolve(i));
    return A0(r, s);
  }
  refine(t, n) {
    const r = (i) =>
      typeof n == 'string' || typeof n > 'u' ? { message: n } : typeof n == 'function' ? n(i) : n;
    return this._refinement((i, s) => {
      const o = t(i),
        a = () => s.addIssue({ code: U.custom, ...r(i) });
      return typeof Promise < 'u' && o instanceof Promise
        ? o.then((l) => (l ? !0 : (a(), !1)))
        : o
        ? !0
        : (a(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, i) =>
      t(r) ? !0 : (i.addIssue(typeof n == 'function' ? n(r, i) : n), !1),
    );
  }
  _refinement(t) {
    return new Bn({
      schema: this,
      typeName: ue.ZodEffects,
      effect: { type: 'refinement', refinement: t },
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return rr.create(this, this._def);
  }
  nullable() {
    return yi.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Vn.create(this, this._def);
  }
  promise() {
    return wo.create(this, this._def);
  }
  or(t) {
    return Za.create([this, t], this._def);
  }
  and(t) {
    return Qa.create(this, t, this._def);
  }
  transform(t) {
    return new Bn({
      ...me(this._def),
      schema: this,
      typeName: ue.ZodEffects,
      effect: { type: 'transform', transform: t },
    });
  }
  default(t) {
    const n = typeof t == 'function' ? t : () => t;
    return new tl({ ...me(this._def), innerType: this, defaultValue: n, typeName: ue.ZodDefault });
  }
  brand() {
    return new eg({ typeName: ue.ZodBranded, type: this, ...me(this._def) });
  }
  catch(t) {
    const n = typeof t == 'function' ? t : () => t;
    return new nl({ ...me(this._def), innerType: this, catchValue: n, typeName: ue.ZodCatch });
  }
  describe(t) {
    const n = this.constructor;
    return new n({ ...this._def, description: t });
  }
  pipe(t) {
    return Ol.create(this, t);
  }
  readonly() {
    return rl.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Rj = /^c[^\s-]{8,}$/i,
  Lj = /^[0-9a-z]+$/,
  Aj = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  Oj = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Mj = /^[a-z0-9_-]{21}$/i,
  Dj =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Nj = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  jj = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$';
let yf;
const Ij =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Fj =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  Vj = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  JE =
    '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
  zj = new RegExp(`^${JE}$`);
function eT(e) {
  let t = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function Bj(e) {
  return new RegExp(`^${eT(e)}$`);
}
function tT(e) {
  let t = `${JE}T${eT(e)}`;
  const n = [];
  return (
    n.push(e.local ? 'Z?' : 'Z'),
    e.offset && n.push('([+-]\\d{2}:?\\d{2})'),
    (t = `${t}(${n.join('|')})`),
    new RegExp(`^${t}$`)
  );
}
function Uj(e, t) {
  return !!(((t === 'v4' || !t) && Ij.test(e)) || ((t === 'v6' || !t) && Fj.test(e)));
}
class jn extends ve {
  _parse(t) {
    if ((this._def.coerce && (t.data = String(t.data)), this._getType(t) !== X.string)) {
      const s = this._getOrReturnCtx(t);
      return Z(s, { code: U.invalid_type, expected: X.string, received: s.parsedType }), ce;
    }
    const r = new kt();
    let i;
    for (const s of this._def.checks)
      if (s.kind === 'min')
        t.data.length < s.value &&
          ((i = this._getOrReturnCtx(t, i)),
          Z(i, {
            code: U.too_small,
            minimum: s.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === 'max')
        t.data.length > s.value &&
          ((i = this._getOrReturnCtx(t, i)),
          Z(i, {
            code: U.too_big,
            maximum: s.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === 'length') {
        const o = t.data.length > s.value,
          a = t.data.length < s.value;
        (o || a) &&
          ((i = this._getOrReturnCtx(t, i)),
          o
            ? Z(i, {
                code: U.too_big,
                maximum: s.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: s.message,
              })
            : a &&
              Z(i, {
                code: U.too_small,
                minimum: s.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: s.message,
              }),
          r.dirty());
      } else if (s.kind === 'email')
        Nj.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          Z(i, { validation: 'email', code: U.invalid_string, message: s.message }),
          r.dirty());
      else if (s.kind === 'emoji')
        yf || (yf = new RegExp(jj, 'u')),
          yf.test(t.data) ||
            ((i = this._getOrReturnCtx(t, i)),
            Z(i, { validation: 'emoji', code: U.invalid_string, message: s.message }),
            r.dirty());
      else if (s.kind === 'uuid')
        Oj.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          Z(i, { validation: 'uuid', code: U.invalid_string, message: s.message }),
          r.dirty());
      else if (s.kind === 'nanoid')
        Mj.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          Z(i, { validation: 'nanoid', code: U.invalid_string, message: s.message }),
          r.dirty());
      else if (s.kind === 'cuid')
        Rj.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          Z(i, { validation: 'cuid', code: U.invalid_string, message: s.message }),
          r.dirty());
      else if (s.kind === 'cuid2')
        Lj.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          Z(i, { validation: 'cuid2', code: U.invalid_string, message: s.message }),
          r.dirty());
      else if (s.kind === 'ulid')
        Aj.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          Z(i, { validation: 'ulid', code: U.invalid_string, message: s.message }),
          r.dirty());
      else if (s.kind === 'url')
        try {
          new URL(t.data);
        } catch {
          (i = this._getOrReturnCtx(t, i)),
            Z(i, { validation: 'url', code: U.invalid_string, message: s.message }),
            r.dirty();
        }
      else
        s.kind === 'regex'
          ? ((s.regex.lastIndex = 0),
            s.regex.test(t.data) ||
              ((i = this._getOrReturnCtx(t, i)),
              Z(i, { validation: 'regex', code: U.invalid_string, message: s.message }),
              r.dirty()))
          : s.kind === 'trim'
          ? (t.data = t.data.trim())
          : s.kind === 'includes'
          ? t.data.includes(s.value, s.position) ||
            ((i = this._getOrReturnCtx(t, i)),
            Z(i, {
              code: U.invalid_string,
              validation: { includes: s.value, position: s.position },
              message: s.message,
            }),
            r.dirty())
          : s.kind === 'toLowerCase'
          ? (t.data = t.data.toLowerCase())
          : s.kind === 'toUpperCase'
          ? (t.data = t.data.toUpperCase())
          : s.kind === 'startsWith'
          ? t.data.startsWith(s.value) ||
            ((i = this._getOrReturnCtx(t, i)),
            Z(i, {
              code: U.invalid_string,
              validation: { startsWith: s.value },
              message: s.message,
            }),
            r.dirty())
          : s.kind === 'endsWith'
          ? t.data.endsWith(s.value) ||
            ((i = this._getOrReturnCtx(t, i)),
            Z(i, { code: U.invalid_string, validation: { endsWith: s.value }, message: s.message }),
            r.dirty())
          : s.kind === 'datetime'
          ? tT(s).test(t.data) ||
            ((i = this._getOrReturnCtx(t, i)),
            Z(i, { code: U.invalid_string, validation: 'datetime', message: s.message }),
            r.dirty())
          : s.kind === 'date'
          ? zj.test(t.data) ||
            ((i = this._getOrReturnCtx(t, i)),
            Z(i, { code: U.invalid_string, validation: 'date', message: s.message }),
            r.dirty())
          : s.kind === 'time'
          ? Bj(s).test(t.data) ||
            ((i = this._getOrReturnCtx(t, i)),
            Z(i, { code: U.invalid_string, validation: 'time', message: s.message }),
            r.dirty())
          : s.kind === 'duration'
          ? Dj.test(t.data) ||
            ((i = this._getOrReturnCtx(t, i)),
            Z(i, { validation: 'duration', code: U.invalid_string, message: s.message }),
            r.dirty())
          : s.kind === 'ip'
          ? Uj(t.data, s.version) ||
            ((i = this._getOrReturnCtx(t, i)),
            Z(i, { validation: 'ip', code: U.invalid_string, message: s.message }),
            r.dirty())
          : s.kind === 'base64'
          ? Vj.test(t.data) ||
            ((i = this._getOrReturnCtx(t, i)),
            Z(i, { validation: 'base64', code: U.invalid_string, message: s.message }),
            r.dirty())
          : _e.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((i) => t.test(i), {
      validation: n,
      code: U.invalid_string,
      ...se.errToObj(r),
    });
  }
  _addCheck(t) {
    return new jn({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: 'email', ...se.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: 'url', ...se.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: 'emoji', ...se.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: 'uuid', ...se.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: 'nanoid', ...se.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: 'cuid', ...se.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: 'cuid2', ...se.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: 'ulid', ...se.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: 'base64', ...se.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: 'ip', ...se.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == 'string'
      ? this._addCheck({ kind: 'datetime', precision: null, offset: !1, local: !1, message: t })
      : this._addCheck({
          kind: 'datetime',
          precision:
            typeof (t == null ? void 0 : t.precision) > 'u'
              ? null
              : t == null
              ? void 0
              : t.precision,
          offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
          local: (r = t == null ? void 0 : t.local) !== null && r !== void 0 ? r : !1,
          ...se.errToObj(t == null ? void 0 : t.message),
        });
  }
  date(t) {
    return this._addCheck({ kind: 'date', message: t });
  }
  time(t) {
    return typeof t == 'string'
      ? this._addCheck({ kind: 'time', precision: null, message: t })
      : this._addCheck({
          kind: 'time',
          precision:
            typeof (t == null ? void 0 : t.precision) > 'u'
              ? null
              : t == null
              ? void 0
              : t.precision,
          ...se.errToObj(t == null ? void 0 : t.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: 'duration', ...se.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({ kind: 'regex', regex: t, ...se.errToObj(n) });
  }
  includes(t, n) {
    return this._addCheck({
      kind: 'includes',
      value: t,
      position: n == null ? void 0 : n.position,
      ...se.errToObj(n == null ? void 0 : n.message),
    });
  }
  startsWith(t, n) {
    return this._addCheck({ kind: 'startsWith', value: t, ...se.errToObj(n) });
  }
  endsWith(t, n) {
    return this._addCheck({ kind: 'endsWith', value: t, ...se.errToObj(n) });
  }
  min(t, n) {
    return this._addCheck({ kind: 'min', value: t, ...se.errToObj(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: 'max', value: t, ...se.errToObj(n) });
  }
  length(t, n) {
    return this._addCheck({ kind: 'length', value: t, ...se.errToObj(n) });
  }
  nonempty(t) {
    return this.min(1, se.errToObj(t));
  }
  trim() {
    return new jn({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] });
  }
  toLowerCase() {
    return new jn({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] });
  }
  toUpperCase() {
    return new jn({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === 'datetime');
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === 'date');
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === 'time');
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === 'duration');
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === 'email');
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === 'url');
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === 'emoji');
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === 'uuid');
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === 'nanoid');
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === 'cuid');
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === 'cuid2');
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === 'ulid');
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === 'ip');
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === 'base64');
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'min' && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'max' && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
jn.create = (e) => {
  var t;
  return new jn({
    checks: [],
    typeName: ue.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...me(e),
  });
};
function $j(e, t) {
  const n = (e.toString().split('.')[1] || '').length,
    r = (t.toString().split('.')[1] || '').length,
    i = n > r ? n : r,
    s = parseInt(e.toFixed(i).replace('.', '')),
    o = parseInt(t.toFixed(i).replace('.', ''));
  return (s % o) / Math.pow(10, i);
}
class mi extends ve {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if ((this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== X.number)) {
      const s = this._getOrReturnCtx(t);
      return Z(s, { code: U.invalid_type, expected: X.number, received: s.parsedType }), ce;
    }
    let r;
    const i = new kt();
    for (const s of this._def.checks)
      s.kind === 'int'
        ? _e.isInteger(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          Z(r, {
            code: U.invalid_type,
            expected: 'integer',
            received: 'float',
            message: s.message,
          }),
          i.dirty())
        : s.kind === 'min'
        ? (s.inclusive ? t.data < s.value : t.data <= s.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          Z(r, {
            code: U.too_small,
            minimum: s.value,
            type: 'number',
            inclusive: s.inclusive,
            exact: !1,
            message: s.message,
          }),
          i.dirty())
        : s.kind === 'max'
        ? (s.inclusive ? t.data > s.value : t.data >= s.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          Z(r, {
            code: U.too_big,
            maximum: s.value,
            type: 'number',
            inclusive: s.inclusive,
            exact: !1,
            message: s.message,
          }),
          i.dirty())
        : s.kind === 'multipleOf'
        ? $j(t.data, s.value) !== 0 &&
          ((r = this._getOrReturnCtx(t, r)),
          Z(r, { code: U.not_multiple_of, multipleOf: s.value, message: s.message }),
          i.dirty())
        : s.kind === 'finite'
        ? Number.isFinite(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          Z(r, { code: U.not_finite, message: s.message }),
          i.dirty())
        : _e.assertNever(s);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit('min', t, !0, se.toString(n));
  }
  gt(t, n) {
    return this.setLimit('min', t, !1, se.toString(n));
  }
  lte(t, n) {
    return this.setLimit('max', t, !0, se.toString(n));
  }
  lt(t, n) {
    return this.setLimit('max', t, !1, se.toString(n));
  }
  setLimit(t, n, r, i) {
    return new mi({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: n, inclusive: r, message: se.toString(i) }],
    });
  }
  _addCheck(t) {
    return new mi({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: 'int', message: se.toString(t) });
  }
  positive(t) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !1, message: se.toString(t) });
  }
  negative(t) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !1, message: se.toString(t) });
  }
  nonpositive(t) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !0, message: se.toString(t) });
  }
  nonnegative(t) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !0, message: se.toString(t) });
  }
  multipleOf(t, n) {
    return this._addCheck({ kind: 'multipleOf', value: t, message: se.toString(n) });
  }
  finite(t) {
    return this._addCheck({ kind: 'finite', message: se.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: 'min',
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: se.toString(t),
    })._addCheck({
      kind: 'max',
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: se.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'min' && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'max' && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) => t.kind === 'int' || (t.kind === 'multipleOf' && _e.isInteger(t.value)),
    );
  }
  get isFinite() {
    let t = null,
      n = null;
    for (const r of this._def.checks) {
      if (r.kind === 'finite' || r.kind === 'int' || r.kind === 'multipleOf') return !0;
      r.kind === 'min'
        ? (n === null || r.value > n) && (n = r.value)
        : r.kind === 'max' && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
mi.create = (e) =>
  new mi({
    checks: [],
    typeName: ue.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...me(e),
  });
class gi extends ve {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(t) {
    if ((this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== X.bigint)) {
      const s = this._getOrReturnCtx(t);
      return Z(s, { code: U.invalid_type, expected: X.bigint, received: s.parsedType }), ce;
    }
    let r;
    const i = new kt();
    for (const s of this._def.checks)
      s.kind === 'min'
        ? (s.inclusive ? t.data < s.value : t.data <= s.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          Z(r, {
            code: U.too_small,
            type: 'bigint',
            minimum: s.value,
            inclusive: s.inclusive,
            message: s.message,
          }),
          i.dirty())
        : s.kind === 'max'
        ? (s.inclusive ? t.data > s.value : t.data >= s.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          Z(r, {
            code: U.too_big,
            type: 'bigint',
            maximum: s.value,
            inclusive: s.inclusive,
            message: s.message,
          }),
          i.dirty())
        : s.kind === 'multipleOf'
        ? t.data % s.value !== BigInt(0) &&
          ((r = this._getOrReturnCtx(t, r)),
          Z(r, { code: U.not_multiple_of, multipleOf: s.value, message: s.message }),
          i.dirty())
        : _e.assertNever(s);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit('min', t, !0, se.toString(n));
  }
  gt(t, n) {
    return this.setLimit('min', t, !1, se.toString(n));
  }
  lte(t, n) {
    return this.setLimit('max', t, !0, se.toString(n));
  }
  lt(t, n) {
    return this.setLimit('max', t, !1, se.toString(n));
  }
  setLimit(t, n, r, i) {
    return new gi({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: n, inclusive: r, message: se.toString(i) }],
    });
  }
  _addCheck(t) {
    return new gi({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !1,
      message: se.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !1,
      message: se.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !0,
      message: se.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !0,
      message: se.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({ kind: 'multipleOf', value: t, message: se.toString(n) });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'min' && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'max' && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
gi.create = (e) => {
  var t;
  return new gi({
    checks: [],
    typeName: ue.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...me(e),
  });
};
class Ga extends ve {
  _parse(t) {
    if ((this._def.coerce && (t.data = !!t.data), this._getType(t) !== X.boolean)) {
      const r = this._getOrReturnCtx(t);
      return Z(r, { code: U.invalid_type, expected: X.boolean, received: r.parsedType }), ce;
    }
    return zt(t.data);
  }
}
Ga.create = (e) =>
  new Ga({ typeName: ue.ZodBoolean, coerce: (e == null ? void 0 : e.coerce) || !1, ...me(e) });
class ss extends ve {
  _parse(t) {
    if ((this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== X.date)) {
      const s = this._getOrReturnCtx(t);
      return Z(s, { code: U.invalid_type, expected: X.date, received: s.parsedType }), ce;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return Z(s, { code: U.invalid_date }), ce;
    }
    const r = new kt();
    let i;
    for (const s of this._def.checks)
      s.kind === 'min'
        ? t.data.getTime() < s.value &&
          ((i = this._getOrReturnCtx(t, i)),
          Z(i, {
            code: U.too_small,
            message: s.message,
            inclusive: !0,
            exact: !1,
            minimum: s.value,
            type: 'date',
          }),
          r.dirty())
        : s.kind === 'max'
        ? t.data.getTime() > s.value &&
          ((i = this._getOrReturnCtx(t, i)),
          Z(i, {
            code: U.too_big,
            message: s.message,
            inclusive: !0,
            exact: !1,
            maximum: s.value,
            type: 'date',
          }),
          r.dirty())
        : _e.assertNever(s);
    return { status: r.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new ss({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, n) {
    return this._addCheck({ kind: 'min', value: t.getTime(), message: se.toString(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: 'max', value: t.getTime(), message: se.toString(n) });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'min' && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'max' && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
ss.create = (e) =>
  new ss({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: ue.ZodDate,
    ...me(e),
  });
class Cc extends ve {
  _parse(t) {
    if (this._getType(t) !== X.symbol) {
      const r = this._getOrReturnCtx(t);
      return Z(r, { code: U.invalid_type, expected: X.symbol, received: r.parsedType }), ce;
    }
    return zt(t.data);
  }
}
Cc.create = (e) => new Cc({ typeName: ue.ZodSymbol, ...me(e) });
class qa extends ve {
  _parse(t) {
    if (this._getType(t) !== X.undefined) {
      const r = this._getOrReturnCtx(t);
      return Z(r, { code: U.invalid_type, expected: X.undefined, received: r.parsedType }), ce;
    }
    return zt(t.data);
  }
}
qa.create = (e) => new qa({ typeName: ue.ZodUndefined, ...me(e) });
class Ka extends ve {
  _parse(t) {
    if (this._getType(t) !== X.null) {
      const r = this._getOrReturnCtx(t);
      return Z(r, { code: U.invalid_type, expected: X.null, received: r.parsedType }), ce;
    }
    return zt(t.data);
  }
}
Ka.create = (e) => new Ka({ typeName: ue.ZodNull, ...me(e) });
class xo extends ve {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return zt(t.data);
  }
}
xo.create = (e) => new xo({ typeName: ue.ZodAny, ...me(e) });
class Yi extends ve {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return zt(t.data);
  }
}
Yi.create = (e) => new Yi({ typeName: ue.ZodUnknown, ...me(e) });
class kr extends ve {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return Z(n, { code: U.invalid_type, expected: X.never, received: n.parsedType }), ce;
  }
}
kr.create = (e) => new kr({ typeName: ue.ZodNever, ...me(e) });
class _c extends ve {
  _parse(t) {
    if (this._getType(t) !== X.undefined) {
      const r = this._getOrReturnCtx(t);
      return Z(r, { code: U.invalid_type, expected: X.void, received: r.parsedType }), ce;
    }
    return zt(t.data);
  }
}
_c.create = (e) => new _c({ typeName: ue.ZodVoid, ...me(e) });
class Vn extends ve {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t),
      i = this._def;
    if (n.parsedType !== X.array)
      return Z(n, { code: U.invalid_type, expected: X.array, received: n.parsedType }), ce;
    if (i.exactLength !== null) {
      const o = n.data.length > i.exactLength.value,
        a = n.data.length < i.exactLength.value;
      (o || a) &&
        (Z(n, {
          code: o ? U.too_big : U.too_small,
          minimum: a ? i.exactLength.value : void 0,
          maximum: o ? i.exactLength.value : void 0,
          type: 'array',
          inclusive: !0,
          exact: !0,
          message: i.exactLength.message,
        }),
        r.dirty());
    }
    if (
      (i.minLength !== null &&
        n.data.length < i.minLength.value &&
        (Z(n, {
          code: U.too_small,
          minimum: i.minLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: i.minLength.message,
        }),
        r.dirty()),
      i.maxLength !== null &&
        n.data.length > i.maxLength.value &&
        (Z(n, {
          code: U.too_big,
          maximum: i.maxLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: i.maxLength.message,
        }),
        r.dirty()),
      n.common.async)
    )
      return Promise.all(
        [...n.data].map((o, a) => i.type._parseAsync(new ir(n, o, n.path, a))),
      ).then((o) => kt.mergeArray(r, o));
    const s = [...n.data].map((o, a) => i.type._parseSync(new ir(n, o, n.path, a)));
    return kt.mergeArray(r, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Vn({ ...this._def, minLength: { value: t, message: se.toString(n) } });
  }
  max(t, n) {
    return new Vn({ ...this._def, maxLength: { value: t, message: se.toString(n) } });
  }
  length(t, n) {
    return new Vn({ ...this._def, exactLength: { value: t, message: se.toString(n) } });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Vn.create = (e, t) =>
  new Vn({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ue.ZodArray,
    ...me(t),
  });
function ys(e) {
  if (e instanceof ze) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = rr.create(ys(r));
    }
    return new ze({ ...e._def, shape: () => t });
  } else
    return e instanceof Vn
      ? new Vn({ ...e._def, type: ys(e.element) })
      : e instanceof rr
      ? rr.create(ys(e.unwrap()))
      : e instanceof yi
      ? yi.create(ys(e.unwrap()))
      : e instanceof sr
      ? sr.create(e.items.map((t) => ys(t)))
      : e;
}
class ze extends ve {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      n = _e.objectKeys(t);
    return (this._cached = { shape: t, keys: n });
  }
  _parse(t) {
    if (this._getType(t) !== X.object) {
      const u = this._getOrReturnCtx(t);
      return Z(u, { code: U.invalid_type, expected: X.object, received: u.parsedType }), ce;
    }
    const { status: r, ctx: i } = this._processInputParams(t),
      { shape: s, keys: o } = this._getCached(),
      a = [];
    if (!(this._def.catchall instanceof kr && this._def.unknownKeys === 'strip'))
      for (const u in i.data) o.includes(u) || a.push(u);
    const l = [];
    for (const u of o) {
      const c = s[u],
        d = i.data[u];
      l.push({
        key: { status: 'valid', value: u },
        value: c._parse(new ir(i, d, i.path, u)),
        alwaysSet: u in i.data,
      });
    }
    if (this._def.catchall instanceof kr) {
      const u = this._def.unknownKeys;
      if (u === 'passthrough')
        for (const c of a)
          l.push({
            key: { status: 'valid', value: c },
            value: { status: 'valid', value: i.data[c] },
          });
      else if (u === 'strict')
        a.length > 0 && (Z(i, { code: U.unrecognized_keys, keys: a }), r.dirty());
      else if (u !== 'strip')
        throw new Error('Internal ZodObject error: invalid unknownKeys value.');
    } else {
      const u = this._def.catchall;
      for (const c of a) {
        const d = i.data[c];
        l.push({
          key: { status: 'valid', value: c },
          value: u._parse(new ir(i, d, i.path, c)),
          alwaysSet: c in i.data,
        });
      }
    }
    return i.common.async
      ? Promise.resolve()
          .then(async () => {
            const u = [];
            for (const c of l) {
              const d = await c.key,
                f = await c.value;
              u.push({ key: d, value: f, alwaysSet: c.alwaysSet });
            }
            return u;
          })
          .then((u) => kt.mergeObjectSync(r, u))
      : kt.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      se.errToObj,
      new ze({
        ...this._def,
        unknownKeys: 'strict',
        ...(t !== void 0
          ? {
              errorMap: (n, r) => {
                var i, s, o, a;
                const l =
                  (o =
                    (s = (i = this._def).errorMap) === null || s === void 0
                      ? void 0
                      : s.call(i, n, r).message) !== null && o !== void 0
                    ? o
                    : r.defaultError;
                return n.code === 'unrecognized_keys'
                  ? { message: (a = se.errToObj(t).message) !== null && a !== void 0 ? a : l }
                  : { message: l };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new ze({ ...this._def, unknownKeys: 'strip' });
  }
  passthrough() {
    return new ze({ ...this._def, unknownKeys: 'passthrough' });
  }
  extend(t) {
    return new ze({ ...this._def, shape: () => ({ ...this._def.shape(), ...t }) });
  }
  merge(t) {
    return new ze({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: ue.ZodObject,
    });
  }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  catchall(t) {
    return new ze({ ...this._def, catchall: t });
  }
  pick(t) {
    const n = {};
    return (
      _e.objectKeys(t).forEach((r) => {
        t[r] && this.shape[r] && (n[r] = this.shape[r]);
      }),
      new ze({ ...this._def, shape: () => n })
    );
  }
  omit(t) {
    const n = {};
    return (
      _e.objectKeys(this.shape).forEach((r) => {
        t[r] || (n[r] = this.shape[r]);
      }),
      new ze({ ...this._def, shape: () => n })
    );
  }
  deepPartial() {
    return ys(this);
  }
  partial(t) {
    const n = {};
    return (
      _e.objectKeys(this.shape).forEach((r) => {
        const i = this.shape[r];
        t && !t[r] ? (n[r] = i) : (n[r] = i.optional());
      }),
      new ze({ ...this._def, shape: () => n })
    );
  }
  required(t) {
    const n = {};
    return (
      _e.objectKeys(this.shape).forEach((r) => {
        if (t && !t[r]) n[r] = this.shape[r];
        else {
          let s = this.shape[r];
          for (; s instanceof rr; ) s = s._def.innerType;
          n[r] = s;
        }
      }),
      new ze({ ...this._def, shape: () => n })
    );
  }
  keyof() {
    return nT(_e.objectKeys(this.shape));
  }
}
ze.create = (e, t) =>
  new ze({
    shape: () => e,
    unknownKeys: 'strip',
    catchall: kr.create(),
    typeName: ue.ZodObject,
    ...me(t),
  });
ze.strictCreate = (e, t) =>
  new ze({
    shape: () => e,
    unknownKeys: 'strict',
    catchall: kr.create(),
    typeName: ue.ZodObject,
    ...me(t),
  });
ze.lazycreate = (e, t) =>
  new ze({
    shape: e,
    unknownKeys: 'strip',
    catchall: kr.create(),
    typeName: ue.ZodObject,
    ...me(t),
  });
class Za extends ve {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = this._def.options;
    function i(s) {
      for (const a of s) if (a.result.status === 'valid') return a.result;
      for (const a of s)
        if (a.result.status === 'dirty')
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = s.map((a) => new rn(a.ctx.common.issues));
      return Z(n, { code: U.invalid_union, unionErrors: o }), ce;
    }
    if (n.common.async)
      return Promise.all(
        r.map(async (s) => {
          const o = { ...n, common: { ...n.common, issues: [] }, parent: null };
          return { result: await s._parseAsync({ data: n.data, path: n.path, parent: o }), ctx: o };
        }),
      ).then(i);
    {
      let s;
      const o = [];
      for (const l of r) {
        const u = { ...n, common: { ...n.common, issues: [] }, parent: null },
          c = l._parseSync({ data: n.data, path: n.path, parent: u });
        if (c.status === 'valid') return c;
        c.status === 'dirty' && !s && (s = { result: c, ctx: u }),
          u.common.issues.length && o.push(u.common.issues);
      }
      if (s) return n.common.issues.push(...s.ctx.common.issues), s.result;
      const a = o.map((l) => new rn(l));
      return Z(n, { code: U.invalid_union, unionErrors: a }), ce;
    }
  }
  get options() {
    return this._def.options;
  }
}
Za.create = (e, t) => new Za({ options: e, typeName: ue.ZodUnion, ...me(t) });
const dr = (e) =>
  e instanceof Xa
    ? dr(e.schema)
    : e instanceof Bn
    ? dr(e.innerType())
    : e instanceof Ja
    ? [e.value]
    : e instanceof vi
    ? e.options
    : e instanceof el
    ? _e.objectValues(e.enum)
    : e instanceof tl
    ? dr(e._def.innerType)
    : e instanceof qa
    ? [void 0]
    : e instanceof Ka
    ? [null]
    : e instanceof rr
    ? [void 0, ...dr(e.unwrap())]
    : e instanceof yi
    ? [null, ...dr(e.unwrap())]
    : e instanceof eg || e instanceof rl
    ? dr(e.unwrap())
    : e instanceof nl
    ? dr(e._def.innerType)
    : [];
class ad extends ve {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== X.object)
      return Z(n, { code: U.invalid_type, expected: X.object, received: n.parsedType }), ce;
    const r = this.discriminator,
      i = n.data[r],
      s = this.optionsMap.get(i);
    return s
      ? n.common.async
        ? s._parseAsync({ data: n.data, path: n.path, parent: n })
        : s._parseSync({ data: n.data, path: n.path, parent: n })
      : (Z(n, {
          code: U.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [r],
        }),
        ce);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(t, n, r) {
    const i = new Map();
    for (const s of n) {
      const o = dr(s.shape[t]);
      if (!o.length)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`,
        );
      for (const a of o) {
        if (i.has(a))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);
        i.set(a, s);
      }
    }
    return new ad({
      typeName: ue.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: i,
      ...me(r),
    });
  }
}
function tp(e, t) {
  const n = $r(e),
    r = $r(t);
  if (e === t) return { valid: !0, data: e };
  if (n === X.object && r === X.object) {
    const i = _e.objectKeys(t),
      s = _e.objectKeys(e).filter((a) => i.indexOf(a) !== -1),
      o = { ...e, ...t };
    for (const a of s) {
      const l = tp(e[a], t[a]);
      if (!l.valid) return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (n === X.array && r === X.array) {
    if (e.length !== t.length) return { valid: !1 };
    const i = [];
    for (let s = 0; s < e.length; s++) {
      const o = e[s],
        a = t[s],
        l = tp(o, a);
      if (!l.valid) return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return n === X.date && r === X.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Qa extends ve {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      i = (s, o) => {
        if (Jh(s) || Jh(o)) return ce;
        const a = tp(s.value, o.value);
        return a.valid
          ? ((ep(s) || ep(o)) && n.dirty(), { status: n.value, value: a.data })
          : (Z(r, { code: U.invalid_intersection_types }), ce);
      };
    return r.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseAsync({ data: r.data, path: r.path, parent: r }),
        ]).then(([s, o]) => i(s, o))
      : i(
          this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseSync({ data: r.data, path: r.path, parent: r }),
        );
  }
}
Qa.create = (e, t, n) => new Qa({ left: e, right: t, typeName: ue.ZodIntersection, ...me(n) });
class sr extends ve {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== X.array)
      return Z(r, { code: U.invalid_type, expected: X.array, received: r.parsedType }), ce;
    if (r.data.length < this._def.items.length)
      return (
        Z(r, {
          code: U.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: 'array',
        }),
        ce
      );
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      (Z(r, {
        code: U.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: 'array',
      }),
      n.dirty());
    const s = [...r.data]
      .map((o, a) => {
        const l = this._def.items[a] || this._def.rest;
        return l ? l._parse(new ir(r, o, r.path, a)) : null;
      })
      .filter((o) => !!o);
    return r.common.async ? Promise.all(s).then((o) => kt.mergeArray(n, o)) : kt.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new sr({ ...this._def, rest: t });
  }
}
sr.create = (e, t) => {
  if (!Array.isArray(e)) throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
  return new sr({ items: e, typeName: ue.ZodTuple, rest: null, ...me(t) });
};
class Ya extends ve {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== X.object)
      return Z(r, { code: U.invalid_type, expected: X.object, received: r.parsedType }), ce;
    const i = [],
      s = this._def.keyType,
      o = this._def.valueType;
    for (const a in r.data)
      i.push({
        key: s._parse(new ir(r, a, r.path, a)),
        value: o._parse(new ir(r, r.data[a], r.path, a)),
        alwaysSet: a in r.data,
      });
    return r.common.async ? kt.mergeObjectAsync(n, i) : kt.mergeObjectSync(n, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof ve
      ? new Ya({ keyType: t, valueType: n, typeName: ue.ZodRecord, ...me(r) })
      : new Ya({ keyType: jn.create(), valueType: t, typeName: ue.ZodRecord, ...me(n) });
  }
}
class Pc extends ve {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== X.map)
      return Z(r, { code: U.invalid_type, expected: X.map, received: r.parsedType }), ce;
    const i = this._def.keyType,
      s = this._def.valueType,
      o = [...r.data.entries()].map(([a, l], u) => ({
        key: i._parse(new ir(r, a, r.path, [u, 'key'])),
        value: s._parse(new ir(r, l, r.path, [u, 'value'])),
      }));
    if (r.common.async) {
      const a = new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const u = await l.key,
            c = await l.value;
          if (u.status === 'aborted' || c.status === 'aborted') return ce;
          (u.status === 'dirty' || c.status === 'dirty') && n.dirty(), a.set(u.value, c.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = new Map();
      for (const l of o) {
        const u = l.key,
          c = l.value;
        if (u.status === 'aborted' || c.status === 'aborted') return ce;
        (u.status === 'dirty' || c.status === 'dirty') && n.dirty(), a.set(u.value, c.value);
      }
      return { status: n.value, value: a };
    }
  }
}
Pc.create = (e, t, n) => new Pc({ valueType: t, keyType: e, typeName: ue.ZodMap, ...me(n) });
class os extends ve {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== X.set)
      return Z(r, { code: U.invalid_type, expected: X.set, received: r.parsedType }), ce;
    const i = this._def;
    i.minSize !== null &&
      r.data.size < i.minSize.value &&
      (Z(r, {
        code: U.too_small,
        minimum: i.minSize.value,
        type: 'set',
        inclusive: !0,
        exact: !1,
        message: i.minSize.message,
      }),
      n.dirty()),
      i.maxSize !== null &&
        r.data.size > i.maxSize.value &&
        (Z(r, {
          code: U.too_big,
          maximum: i.maxSize.value,
          type: 'set',
          inclusive: !0,
          exact: !1,
          message: i.maxSize.message,
        }),
        n.dirty());
    const s = this._def.valueType;
    function o(l) {
      const u = new Set();
      for (const c of l) {
        if (c.status === 'aborted') return ce;
        c.status === 'dirty' && n.dirty(), u.add(c.value);
      }
      return { status: n.value, value: u };
    }
    const a = [...r.data.values()].map((l, u) => s._parse(new ir(r, l, r.path, u)));
    return r.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(t, n) {
    return new os({ ...this._def, minSize: { value: t, message: se.toString(n) } });
  }
  max(t, n) {
    return new os({ ...this._def, maxSize: { value: t, message: se.toString(n) } });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
os.create = (e, t) =>
  new os({ valueType: e, minSize: null, maxSize: null, typeName: ue.ZodSet, ...me(t) });
class Ws extends ve {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== X.function)
      return Z(n, { code: U.invalid_type, expected: X.function, received: n.parsedType }), ce;
    function r(a, l) {
      return Tc({
        data: a,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Ec(), yo].filter((u) => !!u),
        issueData: { code: U.invalid_arguments, argumentsError: l },
      });
    }
    function i(a, l) {
      return Tc({
        data: a,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Ec(), yo].filter((u) => !!u),
        issueData: { code: U.invalid_return_type, returnTypeError: l },
      });
    }
    const s = { errorMap: n.common.contextualErrorMap },
      o = n.data;
    if (this._def.returns instanceof wo) {
      const a = this;
      return zt(async function (...l) {
        const u = new rn([]),
          c = await a._def.args.parseAsync(l, s).catch((m) => {
            throw (u.addIssue(r(l, m)), u);
          }),
          d = await Reflect.apply(o, this, c);
        return await a._def.returns._def.type.parseAsync(d, s).catch((m) => {
          throw (u.addIssue(i(d, m)), u);
        });
      });
    } else {
      const a = this;
      return zt(function (...l) {
        const u = a._def.args.safeParse(l, s);
        if (!u.success) throw new rn([r(l, u.error)]);
        const c = Reflect.apply(o, this, u.data),
          d = a._def.returns.safeParse(c, s);
        if (!d.success) throw new rn([i(c, d.error)]);
        return d.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Ws({ ...this._def, args: sr.create(t).rest(Yi.create()) });
  }
  returns(t) {
    return new Ws({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new Ws({
      args: t || sr.create([]).rest(Yi.create()),
      returns: n || Yi.create(),
      typeName: ue.ZodFunction,
      ...me(r),
    });
  }
}
class Xa extends ve {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Xa.create = (e, t) => new Xa({ getter: e, typeName: ue.ZodLazy, ...me(t) });
class Ja extends ve {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return Z(n, { received: n.data, code: U.invalid_literal, expected: this._def.value }), ce;
    }
    return { status: 'valid', value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Ja.create = (e, t) => new Ja({ value: e, typeName: ue.ZodLiteral, ...me(t) });
function nT(e, t) {
  return new vi({ values: e, typeName: ue.ZodEnum, ...me(t) });
}
class vi extends ve {
  constructor() {
    super(...arguments), Jo.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != 'string') {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return Z(n, { expected: _e.joinValues(r), received: n.parsedType, code: U.invalid_type }), ce;
    }
    if ((bc(this, Jo) || XE(this, Jo, new Set(this._def.values)), !bc(this, Jo).has(t.data))) {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return Z(n, { received: n.data, code: U.invalid_enum_value, options: r }), ce;
    }
    return zt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return vi.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return vi.create(
      this.options.filter((r) => !t.includes(r)),
      { ...this._def, ...n },
    );
  }
}
Jo = new WeakMap();
vi.create = nT;
class el extends ve {
  constructor() {
    super(...arguments), ea.set(this, void 0);
  }
  _parse(t) {
    const n = _e.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== X.string && r.parsedType !== X.number) {
      const i = _e.objectValues(n);
      return Z(r, { expected: _e.joinValues(i), received: r.parsedType, code: U.invalid_type }), ce;
    }
    if (
      (bc(this, ea) || XE(this, ea, new Set(_e.getValidEnumValues(this._def.values))),
      !bc(this, ea).has(t.data))
    ) {
      const i = _e.objectValues(n);
      return Z(r, { received: r.data, code: U.invalid_enum_value, options: i }), ce;
    }
    return zt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
ea = new WeakMap();
el.create = (e, t) => new el({ values: e, typeName: ue.ZodNativeEnum, ...me(t) });
class wo extends ve {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== X.promise && n.common.async === !1)
      return Z(n, { code: U.invalid_type, expected: X.promise, received: n.parsedType }), ce;
    const r = n.parsedType === X.promise ? n.data : Promise.resolve(n.data);
    return zt(
      r.then((i) =>
        this._def.type.parseAsync(i, { path: n.path, errorMap: n.common.contextualErrorMap }),
      ),
    );
  }
}
wo.create = (e, t) => new wo({ type: e, typeName: ue.ZodPromise, ...me(t) });
class Bn extends ve {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ue.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      i = this._def.effect || null,
      s = {
        addIssue: (o) => {
          Z(r, o), o.fatal ? n.abort() : n.dirty();
        },
        get path() {
          return r.path;
        },
      };
    if (((s.addIssue = s.addIssue.bind(s)), i.type === 'preprocess')) {
      const o = i.transform(r.data, s);
      if (r.common.async)
        return Promise.resolve(o).then(async (a) => {
          if (n.value === 'aborted') return ce;
          const l = await this._def.schema._parseAsync({ data: a, path: r.path, parent: r });
          return l.status === 'aborted'
            ? ce
            : l.status === 'dirty' || n.value === 'dirty'
            ? Is(l.value)
            : l;
        });
      {
        if (n.value === 'aborted') return ce;
        const a = this._def.schema._parseSync({ data: o, path: r.path, parent: r });
        return a.status === 'aborted'
          ? ce
          : a.status === 'dirty' || n.value === 'dirty'
          ? Is(a.value)
          : a;
      }
    }
    if (i.type === 'refinement') {
      const o = (a) => {
        const l = i.refinement(a, s);
        if (r.common.async) return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error(
            'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.',
          );
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({ data: r.data, path: r.path, parent: r });
        return a.status === 'aborted'
          ? ce
          : (a.status === 'dirty' && n.dirty(), o(a.value), { status: n.value, value: a.value });
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((a) =>
            a.status === 'aborted'
              ? ce
              : (a.status === 'dirty' && n.dirty(),
                o(a.value).then(() => ({ status: n.value, value: a.value }))),
          );
    }
    if (i.type === 'transform')
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({ data: r.data, path: r.path, parent: r });
        if (!Ha(o)) return o;
        const a = i.transform(o.value, s);
        if (a instanceof Promise)
          throw new Error(
            'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.',
          );
        return { status: n.value, value: a };
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((o) =>
            Ha(o)
              ? Promise.resolve(i.transform(o.value, s)).then((a) => ({
                  status: n.value,
                  value: a,
                }))
              : o,
          );
    _e.assertNever(i);
  }
}
Bn.create = (e, t, n) => new Bn({ schema: e, typeName: ue.ZodEffects, effect: t, ...me(n) });
Bn.createWithPreprocess = (e, t, n) =>
  new Bn({
    schema: t,
    effect: { type: 'preprocess', transform: e },
    typeName: ue.ZodEffects,
    ...me(n),
  });
class rr extends ve {
  _parse(t) {
    return this._getType(t) === X.undefined ? zt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
rr.create = (e, t) => new rr({ innerType: e, typeName: ue.ZodOptional, ...me(t) });
class yi extends ve {
  _parse(t) {
    return this._getType(t) === X.null ? zt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
yi.create = (e, t) => new yi({ innerType: e, typeName: ue.ZodNullable, ...me(t) });
class tl extends ve {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return (
      n.parsedType === X.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
tl.create = (e, t) =>
  new tl({
    innerType: e,
    typeName: ue.ZodDefault,
    defaultValue: typeof t.default == 'function' ? t.default : () => t.default,
    ...me(t),
  });
class nl extends ve {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = { ...n, common: { ...n.common, issues: [] } },
      i = this._def.innerType._parse({ data: r.data, path: r.path, parent: { ...r } });
    return Wa(i)
      ? i.then((s) => ({
          status: 'valid',
          value:
            s.status === 'valid'
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new rn(r.common.issues);
                  },
                  input: r.data,
                }),
        }))
      : {
          status: 'valid',
          value:
            i.status === 'valid'
              ? i.value
              : this._def.catchValue({
                  get error() {
                    return new rn(r.common.issues);
                  },
                  input: r.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
nl.create = (e, t) =>
  new nl({
    innerType: e,
    typeName: ue.ZodCatch,
    catchValue: typeof t.catch == 'function' ? t.catch : () => t.catch,
    ...me(t),
  });
class kc extends ve {
  _parse(t) {
    if (this._getType(t) !== X.nan) {
      const r = this._getOrReturnCtx(t);
      return Z(r, { code: U.invalid_type, expected: X.nan, received: r.parsedType }), ce;
    }
    return { status: 'valid', value: t.data };
  }
}
kc.create = (e) => new kc({ typeName: ue.ZodNaN, ...me(e) });
const Hj = Symbol('zod_brand');
class eg extends ve {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = n.data;
    return this._def.type._parse({ data: r, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class Ol extends ve {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({ data: r.data, path: r.path, parent: r });
        return s.status === 'aborted'
          ? ce
          : s.status === 'dirty'
          ? (n.dirty(), Is(s.value))
          : this._def.out._parseAsync({ data: s.value, path: r.path, parent: r });
      })();
    {
      const i = this._def.in._parseSync({ data: r.data, path: r.path, parent: r });
      return i.status === 'aborted'
        ? ce
        : i.status === 'dirty'
        ? (n.dirty(), { status: 'dirty', value: i.value })
        : this._def.out._parseSync({ data: i.value, path: r.path, parent: r });
    }
  }
  static create(t, n) {
    return new Ol({ in: t, out: n, typeName: ue.ZodPipeline });
  }
}
class rl extends ve {
  _parse(t) {
    const n = this._def.innerType._parse(t),
      r = (i) => (Ha(i) && (i.value = Object.freeze(i.value)), i);
    return Wa(n) ? n.then((i) => r(i)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
rl.create = (e, t) => new rl({ innerType: e, typeName: ue.ZodReadonly, ...me(t) });
function rT(e, t = {}, n) {
  return e
    ? xo.create().superRefine((r, i) => {
        var s, o;
        if (!e(r)) {
          const a = typeof t == 'function' ? t(r) : typeof t == 'string' ? { message: t } : t,
            l =
              (o = (s = a.fatal) !== null && s !== void 0 ? s : n) !== null && o !== void 0
                ? o
                : !0,
            u = typeof a == 'string' ? { message: a } : a;
          i.addIssue({ code: 'custom', ...u, fatal: l });
        }
      })
    : xo.create();
}
const Wj = { object: ze.lazycreate };
var ue;
(function (e) {
  (e.ZodString = 'ZodString'),
    (e.ZodNumber = 'ZodNumber'),
    (e.ZodNaN = 'ZodNaN'),
    (e.ZodBigInt = 'ZodBigInt'),
    (e.ZodBoolean = 'ZodBoolean'),
    (e.ZodDate = 'ZodDate'),
    (e.ZodSymbol = 'ZodSymbol'),
    (e.ZodUndefined = 'ZodUndefined'),
    (e.ZodNull = 'ZodNull'),
    (e.ZodAny = 'ZodAny'),
    (e.ZodUnknown = 'ZodUnknown'),
    (e.ZodNever = 'ZodNever'),
    (e.ZodVoid = 'ZodVoid'),
    (e.ZodArray = 'ZodArray'),
    (e.ZodObject = 'ZodObject'),
    (e.ZodUnion = 'ZodUnion'),
    (e.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
    (e.ZodIntersection = 'ZodIntersection'),
    (e.ZodTuple = 'ZodTuple'),
    (e.ZodRecord = 'ZodRecord'),
    (e.ZodMap = 'ZodMap'),
    (e.ZodSet = 'ZodSet'),
    (e.ZodFunction = 'ZodFunction'),
    (e.ZodLazy = 'ZodLazy'),
    (e.ZodLiteral = 'ZodLiteral'),
    (e.ZodEnum = 'ZodEnum'),
    (e.ZodEffects = 'ZodEffects'),
    (e.ZodNativeEnum = 'ZodNativeEnum'),
    (e.ZodOptional = 'ZodOptional'),
    (e.ZodNullable = 'ZodNullable'),
    (e.ZodDefault = 'ZodDefault'),
    (e.ZodCatch = 'ZodCatch'),
    (e.ZodPromise = 'ZodPromise'),
    (e.ZodBranded = 'ZodBranded'),
    (e.ZodPipeline = 'ZodPipeline'),
    (e.ZodReadonly = 'ZodReadonly');
})(ue || (ue = {}));
const Gj = (e, t = { message: `Input not instance of ${e.name}` }) => rT((n) => n instanceof e, t),
  iT = jn.create,
  sT = mi.create,
  qj = kc.create,
  Kj = gi.create,
  oT = Ga.create,
  Zj = ss.create,
  Qj = Cc.create,
  Yj = qa.create,
  Xj = Ka.create,
  Jj = xo.create,
  eI = Yi.create,
  tI = kr.create,
  nI = _c.create,
  rI = Vn.create,
  iI = ze.create,
  sI = ze.strictCreate,
  oI = Za.create,
  aI = ad.create,
  lI = Qa.create,
  uI = sr.create,
  cI = Ya.create,
  dI = Pc.create,
  fI = os.create,
  hI = Ws.create,
  pI = Xa.create,
  mI = Ja.create,
  gI = vi.create,
  vI = el.create,
  yI = wo.create,
  O0 = Bn.create,
  xI = rr.create,
  wI = yi.create,
  SI = Bn.createWithPreprocess,
  EI = Ol.create,
  TI = () => iT().optional(),
  bI = () => sT().optional(),
  CI = () => oT().optional(),
  _I = {
    string: (e) => jn.create({ ...e, coerce: !0 }),
    number: (e) => mi.create({ ...e, coerce: !0 }),
    boolean: (e) => Ga.create({ ...e, coerce: !0 }),
    bigint: (e) => gi.create({ ...e, coerce: !0 }),
    date: (e) => ss.create({ ...e, coerce: !0 }),
  },
  PI = ce;
var Hn = Object.freeze({
    __proto__: null,
    defaultErrorMap: yo,
    setErrorMap: Pj,
    getErrorMap: Ec,
    makeIssue: Tc,
    EMPTY_PATH: kj,
    addIssueToContext: Z,
    ParseStatus: kt,
    INVALID: ce,
    DIRTY: Is,
    OK: zt,
    isAborted: Jh,
    isDirty: ep,
    isValid: Ha,
    isAsync: Wa,
    get util() {
      return _e;
    },
    get objectUtil() {
      return Xh;
    },
    ZodParsedType: X,
    getParsedType: $r,
    ZodType: ve,
    datetimeRegex: tT,
    ZodString: jn,
    ZodNumber: mi,
    ZodBigInt: gi,
    ZodBoolean: Ga,
    ZodDate: ss,
    ZodSymbol: Cc,
    ZodUndefined: qa,
    ZodNull: Ka,
    ZodAny: xo,
    ZodUnknown: Yi,
    ZodNever: kr,
    ZodVoid: _c,
    ZodArray: Vn,
    ZodObject: ze,
    ZodUnion: Za,
    ZodDiscriminatedUnion: ad,
    ZodIntersection: Qa,
    ZodTuple: sr,
    ZodRecord: Ya,
    ZodMap: Pc,
    ZodSet: os,
    ZodFunction: Ws,
    ZodLazy: Xa,
    ZodLiteral: Ja,
    ZodEnum: vi,
    ZodNativeEnum: el,
    ZodPromise: wo,
    ZodEffects: Bn,
    ZodTransformer: Bn,
    ZodOptional: rr,
    ZodNullable: yi,
    ZodDefault: tl,
    ZodCatch: nl,
    ZodNaN: kc,
    BRAND: Hj,
    ZodBranded: eg,
    ZodPipeline: Ol,
    ZodReadonly: rl,
    custom: rT,
    Schema: ve,
    ZodSchema: ve,
    late: Wj,
    get ZodFirstPartyTypeKind() {
      return ue;
    },
    coerce: _I,
    any: Jj,
    array: rI,
    bigint: Kj,
    boolean: oT,
    date: Zj,
    discriminatedUnion: aI,
    effect: O0,
    enum: gI,
    function: hI,
    instanceof: Gj,
    intersection: lI,
    lazy: pI,
    literal: mI,
    map: dI,
    nan: qj,
    nativeEnum: vI,
    never: tI,
    null: Xj,
    nullable: wI,
    number: sT,
    object: iI,
    oboolean: CI,
    onumber: bI,
    optional: xI,
    ostring: TI,
    pipeline: EI,
    preprocess: SI,
    promise: yI,
    record: cI,
    set: fI,
    strictObject: sI,
    string: iT,
    symbol: Qj,
    transformer: O0,
    tuple: uI,
    undefined: Yj,
    union: oI,
    unknown: eI,
    void: nI,
    NEVER: PI,
    ZodIssueCode: U,
    quotelessJson: _j,
    ZodError: rn,
  }),
  M0 = function (e, t, n) {
    if (e && 'reportValidity' in e) {
      var r = te(n, t);
      e.setCustomValidity((r && r.message) || ''), e.reportValidity();
    }
  },
  aT = function (e, t) {
    var n = function (i) {
      var s = t.fields[i];
      s && s.ref && 'reportValidity' in s.ref
        ? M0(s.ref, i, e)
        : s.refs &&
          s.refs.forEach(function (o) {
            return M0(o, i, e);
          });
    };
    for (var r in t.fields) n(r);
  },
  kI = function (e, t) {
    t.shouldUseNativeValidation && aT(e, t);
    var n = {};
    for (var r in e) {
      var i = te(t.fields, r),
        s = Object.assign(e[r] || {}, { ref: i && i.ref });
      if (RI(t.names || Object.keys(e), r)) {
        var o = Object.assign({}, te(n, r));
        Ae(o, 'root', s), Ae(n, r, o);
      } else Ae(n, r, s);
    }
    return n;
  },
  RI = function (e, t) {
    return e.some(function (n) {
      return n.startsWith(t + '.');
    });
  },
  LI = function (e, t) {
    for (var n = {}; e.length; ) {
      var r = e[0],
        i = r.code,
        s = r.message,
        o = r.path.join('.');
      if (!n[o])
        if ('unionErrors' in r) {
          var a = r.unionErrors[0].errors[0];
          n[o] = { message: a.message, type: a.code };
        } else n[o] = { message: s, type: i };
      if (
        ('unionErrors' in r &&
          r.unionErrors.forEach(function (c) {
            return c.errors.forEach(function (d) {
              return e.push(d);
            });
          }),
        t)
      ) {
        var l = n[o].types,
          u = l && l[r.code];
        n[o] = HE(o, t, n, i, u ? [].concat(u, r.message) : r.message);
      }
      e.shift();
    }
    return n;
  },
  AI = function (e, t, n) {
    return (
      n === void 0 && (n = {}),
      function (r, i, s) {
        try {
          return Promise.resolve(
            (function (o, a) {
              try {
                var l = Promise.resolve(e[n.mode === 'sync' ? 'parse' : 'parseAsync'](r, t)).then(
                  function (u) {
                    return (
                      s.shouldUseNativeValidation && aT({}, s),
                      { errors: {}, values: n.raw ? r : u }
                    );
                  },
                );
              } catch (u) {
                return a(u);
              }
              return l && l.then ? l.then(void 0, a) : l;
            })(0, function (o) {
              if (
                (function (a) {
                  return a.errors != null;
                })(o)
              )
                return {
                  values: {},
                  errors: kI(
                    LI(o.errors, !s.shouldUseNativeValidation && s.criteriaMode === 'all'),
                    s,
                  ),
                };
              throw o;
            }),
          );
        } catch (o) {
          return Promise.reject(o);
        }
      }
    );
  };
const np = jm((e) => ({
    activeMethod: { title: 'телефон', titleEn: 'phone', id: 1 },
    setActiveMethod: (t) => {
      e((n) => ({ activeMethod: (n.activeMethod = t) }));
    },
  })),
  OI = () => {
    const [e, t] = _.useState(!1),
      n = Vt((o) => o.activeLang.localization),
      { title: r, titleEn: i } = np((o) => o.activeMethod),
      s = np((o) => o.setActiveMethod);
    return E.jsxs('div', {
      className: 'flex flex-col',
      children: [
        E.jsx('div', {
          onClick: () => {
            t(!e);
          },
          className: 'h-[43px] flex cursor-pointer items-center justify-between bid-drop py-[15px]',
          children: E.jsx('div', {
            className: 'form-input w-full flex items-center justify-between',
            children: E.jsx('div', { className: '', children: n === 'en' ? i : r }),
          }),
        }),
        E.jsx('div', {
          className: 'relative',
          children: E.jsx(V1, {
            children:
              e &&
              E.jsx(I1.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.25 },
                className: 'bg-white rounded-sm flex flex-col absolute w-full shadow-lg',
                children: MI.map((o) =>
                  E.jsx(
                    'div',
                    {
                      onClick: () => {
                        s(o), t(!1);
                      },
                      className: Gt(
                        'cursor-pointer py-[15px] px-[12px] text-[14px] font-regular leading-[125%] transition-all',
                        { 'hover:bg-purple rounded-sm hover:text-white': o.title === o.title },
                      ),
                      children: n === 'en' ? o.titleEn : o.title,
                    },
                    Nn(),
                  ),
                ),
              }),
          }),
        }),
      ],
    });
  },
  MI = [
    { title: 'телефон', titleEn: 'phone', id: 1 },
    { title: 'E-mail', titleEn: 'E-mail', id: 2 },
  ],
  DI = /^\+\d{11}$/,
  NI = () => {
    const e = Hn.object({
        company_name: Hn.string({ required_error: 'Заполните поле!' }).min(
          2,
          'Минимальная длина 2 символа',
        ),
        web_site: Hn.string().optional(),
        what_demonstrated: Hn.string().optional(),
        area: Hn.string().refine((u) => (u === '' ? !0 : /^-?\d+(\.\d+)?$/.test(u)), {
          message: 'Площадь должна быть указана в цифрах',
        }),
        phone: Hn.string({ message: 'Заполните поле!' }).refine((u) => DI.test(u), {
          message: 'Неверный формат номера телефона',
        }),
        email: Hn.string().email('Недействительный адрес электронной почты'),
        contact_person: Hn.string({ message: 'Заполните поле!' }).min(
          5,
          'Минимальная длина 5 символов',
        ),
        equipment: Hn.enum(['not-equipment', 'equipment'], {
          message: 'Выберите один из параметров',
        }),
        agree: Hn.boolean().refine((u) => u === !0, {
          message: 'Вы должны принять условия использования',
        }),
      }),
      {
        register: t,
        reset: n,
        handleSubmit: r,
        formState: { errors: i },
      } = Cj({ resolver: AI(e) }),
      s = (u, c) => (o === 'en' ? u : c),
      o = Vt((u) => u.activeLang.localization),
      a = np((u) => u.activeMethod.id),
      l = (u) => {
        console.log(u),
          od.postParticipantForm({
            company_name: u.company_name,
            phone: u.phone,
            email: u.email,
            area: u.area ? parseFloat(u.area) : 0,
            response_method: a,
            contact_person: u.contact_person,
            area_is_equipped: u.equipment === 'equipment',
            what_demonstrated: u.what_demonstrated ? u.what_demonstrated : '',
            web_site: u.web_site ? u.web_site : '',
          }),
          n();
      };
    return E.jsxs(BE, {
      children: [
        E.jsx(Um, {
          second: s('Participants', 'Участникам'),
          third: s('Application for participation', 'Заявка на участие'),
        }),
        E.jsx(td, { title: s('Application for participation', 'Заявка на участие'), mb32: !0 }),
        E.jsxs('form', {
          onSubmit: r(l),
          className: 'flex flex-col gap-6 w-[540px]',
          children: [
            E.jsxs('div', {
              className: 'flex flex-col gap-4',
              children: [
                E.jsxs('label', {
                  htmlFor: 'company_name',
                  className: 'form-label',
                  children: [
                    s('Company name', 'Название фирмы'),
                    E.jsx('span', { className: 'text-lightRed', children: '*' }),
                  ],
                }),
                E.jsx('input', {
                  ...t('company_name'),
                  name: 'company_name',
                  id: 'company_name',
                  type: 'text',
                  className: 'form-input',
                }),
                i.company_name &&
                  E.jsx('span', { className: 'text-lightRed', children: i.company_name.message }),
              ],
            }),
            E.jsxs('div', {
              className: 'flex flex-col gap-4',
              children: [
                E.jsx('label', {
                  htmlFor: 'web_site',
                  className: 'form-label',
                  children: s('Web site', 'Сайт'),
                }),
                E.jsx('input', {
                  ...t('web_site'),
                  name: 'web_site',
                  id: 'web_site',
                  type: 'text',
                  className: 'form-input',
                }),
                i.web_site &&
                  E.jsx('span', { className: 'text-lightRed', children: i.web_site.message }),
              ],
            }),
            E.jsxs('div', {
              className: 'flex flex-col gap-4',
              children: [
                E.jsxs('label', {
                  htmlFor: 'phone',
                  className: 'form-label',
                  children: [
                    s('Phone', 'Телефон'),
                    E.jsx('span', { className: 'text-lightRed', children: '*' }),
                  ],
                }),
                E.jsx('input', {
                  ...t('phone'),
                  name: 'phone',
                  id: 'phone',
                  type: 'text',
                  className: 'form-input',
                }),
                i.phone && E.jsx('span', { className: 'text-lightRed', children: i.phone.message }),
              ],
            }),
            E.jsxs('div', {
              className: 'flex flex-col gap-4',
              children: [
                E.jsxs('label', {
                  htmlFor: 'email',
                  className: 'form-label',
                  children: [
                    'E-mail:',
                    E.jsx('span', { className: 'text-lightRed', children: '*' }),
                  ],
                }),
                E.jsx('input', {
                  ...t('email'),
                  name: 'email',
                  id: 'email',
                  type: 'text',
                  className: 'form-input',
                }),
                i.email && E.jsx('span', { className: 'text-lightRed', children: i.email.message }),
              ],
            }),
            E.jsxs('div', {
              className: 'flex flex-col gap-4',
              children: [
                E.jsx('label', {
                  htmlFor: 'area',
                  className: 'form-label',
                  children: s('Required area, m2', 'Требуемая площадь, м2'),
                }),
                E.jsx('input', {
                  ...t('area'),
                  name: 'area',
                  id: 'area',
                  type: 'string',
                  className: 'form-input',
                }),
                i.area && E.jsx('span', { className: 'text-lightRed', children: i.area.message }),
              ],
            }),
            E.jsxs('div', {
              className: 'flex flex-col gap-4',
              children: [
                E.jsx('label', {
                  htmlFor: 'what_demonstrated',
                  className: 'form-label',
                  children: s(
                    'Products  /equipment / services demonstrated',
                    'Демонстрируемая продукция / оборудование / услуги',
                  ),
                }),
                E.jsx('textarea', {
                  ...t('what_demonstrated'),
                  rows: 7,
                  name: 'what_demonstrated',
                  id: 'what_demonstrated',
                  className: 'form-input',
                }),
                i.what_demonstrated &&
                  E.jsx('span', {
                    className: 'text-lightRed',
                    children: i.what_demonstrated.message,
                  }),
              ],
            }),
            E.jsxs('div', {
              className: 'flex flex-col gap-4',
              children: [
                E.jsxs('label', {
                  htmlFor: 'contact_person',
                  className: 'form-label',
                  children: [
                    s('Contact person (full name):', 'Контактное лицо (Ф.И.О.):'),
                    E.jsx('span', { className: 'text-lightRed', children: '*' }),
                  ],
                }),
                E.jsx('input', {
                  ...t('contact_person'),
                  name: 'contact_person',
                  type: 'text',
                  id: 'contact_person',
                  className: 'form-input',
                }),
                i.contact_person &&
                  E.jsx('span', { className: 'text-lightRed', children: i.contact_person.message }),
              ],
            }),
            E.jsx(OI, {}),
            E.jsxs('div', {
              className: 'flex flex-col gap-4',
              children: [
                E.jsx('p', {
                  className: 'text-[14px] leading-[140%] w-full',
                  children: s(
                    'Products  /equipment / services demonstrated',
                    'Демонстрируемая продукция / оборудование / услуги',
                  ),
                }),
                E.jsxs('div', {
                  className: 'flex items-center gap-[10px]',
                  children: [
                    E.jsx('input', {
                      ...t('equipment'),
                      name: 'equipment',
                      type: 'radio',
                      id: 'equipment',
                      className: 'form-input cursor-pointer',
                      value: 'equipment',
                    }),
                    E.jsx('label', {
                      htmlFor: 'equipment',
                      className: 'text-[13px] cursor-pointer',
                      children: s('Equipped', 'Оборудованная'),
                    }),
                  ],
                }),
                E.jsxs('div', {
                  className: 'flex items-center gap-[10px]',
                  children: [
                    E.jsx('input', {
                      ...t('equipment'),
                      name: 'equipment',
                      type: 'radio',
                      id: 'not-equipment',
                      className: 'form-input cursor-pointer',
                      value: 'not-equipment',
                    }),
                    E.jsx('label', {
                      htmlFor: 'not-equipment',
                      className: 'text-[13px] cursor-pointer',
                      children: s('unequipped', 'необорудованная'),
                    }),
                  ],
                }),
                i.equipment &&
                  E.jsx('span', { className: 'text-lightRed', children: i.equipment.message }),
              ],
            }),
            E.jsxs('div', {
              className: 'flex flex-col gap-4',
              children: [
                E.jsxs('div', {
                  className: 'flex items-center gap-4',
                  children: [
                    E.jsx('input', {
                      ...t('agree'),
                      name: 'agree',
                      id: 'agree',
                      type: 'checkbox',
                      className: 'form-input cursor-pointer',
                    }),
                    E.jsx('label', {
                      htmlFor: 'agree',
                      className: 'text-[13px] cursor-pointer',
                      children: s(
                        'I agree to the processing of my data',
                        'Даю согласие на обработку своих данных',
                      ),
                    }),
                  ],
                }),
                i.agree && E.jsx('p', { className: 'text-lightRed', children: i.agree.message }),
              ],
            }),
            E.jsx('button', {
              className: 'w-full py-[17px] bg-purple text-white',
              children: s('Send', 'Отправить'),
            }),
          ],
        }),
      ],
    });
  },
  jI = lP([
    {
      path: '/',
      element: E.jsx(xO, {}),
      children: [
        { path: '/', element: E.jsx(nj, {}) },
        { path: '/faq', element: E.jsx(nM, {}) },
        { path: '/about-exhibition', element: E.jsx(oj, {}) },
        { path: '/participants-apply', element: E.jsx(NI, {}) },
      ],
    },
  ]),
  II = new jO();
xf.createRoot(document.getElementById('root')).render(
  E.jsx(Te.StrictMode, {
    children: E.jsx(BO, { client: II, children: E.jsx(vP, { router: jI }) }),
  }),
);
