var __getOwnPropNames = Object.getOwnPropertyNames;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// ../../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs
var require_interop_require_default = __commonJS({
  "../../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs"(exports) {
    "use strict";
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports._ = _interop_require_default;
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js
var require_app_router_context_shared_runtime = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js"(exports) {
    "use strict";
    "use client";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      AppRouterContext: function() {
        return AppRouterContext;
      },
      GlobalLayoutRouterContext: function() {
        return GlobalLayoutRouterContext;
      },
      LayoutRouterContext: function() {
        return LayoutRouterContext;
      },
      MissingSlotContext: function() {
        return MissingSlotContext;
      },
      TemplateContext: function() {
        return TemplateContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var AppRouterContext = _react.default.createContext(null);
    var LayoutRouterContext = _react.default.createContext(null);
    var GlobalLayoutRouterContext = _react.default.createContext(null);
    var TemplateContext = _react.default.createContext(null);
    if (process.env.NODE_ENV !== "production") {
      AppRouterContext.displayName = "AppRouterContext";
      LayoutRouterContext.displayName = "LayoutRouterContext";
      GlobalLayoutRouterContext.displayName = "GlobalLayoutRouterContext";
      TemplateContext.displayName = "TemplateContext";
    }
    var MissingSlotContext = _react.default.createContext(/* @__PURE__ */ new Set());
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js
var require_hooks_client_context_shared_runtime = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js"(exports) {
    "use strict";
    "use client";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      PathParamsContext: function() {
        return PathParamsContext;
      },
      PathnameContext: function() {
        return PathnameContext;
      },
      SearchParamsContext: function() {
        return SearchParamsContext;
      }
    });
    var _react = __require("react");
    var SearchParamsContext = (0, _react.createContext)(null);
    var PathnameContext = (0, _react.createContext)(null);
    var PathParamsContext = (0, _react.createContext)(null);
    if (process.env.NODE_ENV !== "production") {
      SearchParamsContext.displayName = "SearchParamsContext";
      PathnameContext.displayName = "PathnameContext";
      PathParamsContext.displayName = "PathParamsContext";
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js
var require_get_segment_value = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getSegmentValue", {
      enumerable: true,
      get: function() {
        return getSegmentValue;
      }
    });
    function getSegmentValue(segment) {
      return Array.isArray(segment) ? segment[1] : segment;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/segment.js
var require_segment = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/segment.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
      },
      PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
      },
      addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
      },
      isGroupSegment: function() {
        return isGroupSegment;
      },
      isParallelRouteSegment: function() {
        return isParallelRouteSegment;
      }
    });
    function isGroupSegment(segment) {
      return segment[0] === "(" && segment.endsWith(")");
    }
    function isParallelRouteSegment(segment) {
      return segment.startsWith("@") && segment !== "@children";
    }
    function addSearchParamsIfPageSegment(segment, searchParams) {
      const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
      if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== "{}" ? PAGE_SEGMENT_KEY + "?" + stringifiedQuery : PAGE_SEGMENT_KEY;
      }
      return segment;
    }
    var PAGE_SEGMENT_KEY = "__PAGE__";
    var DEFAULT_SEGMENT_KEY = "__DEFAULT__";
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect-status-code.js
var require_redirect_status_code = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect-status-code.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "RedirectStatusCode", {
      enumerable: true,
      get: function() {
        return RedirectStatusCode;
      }
    });
    var RedirectStatusCode = /* @__PURE__ */ (function(RedirectStatusCode2) {
      RedirectStatusCode2[RedirectStatusCode2["SeeOther"] = 303] = "SeeOther";
      RedirectStatusCode2[RedirectStatusCode2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
      RedirectStatusCode2[RedirectStatusCode2["PermanentRedirect"] = 308] = "PermanentRedirect";
      return RedirectStatusCode2;
    })({});
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect-error.js
var require_redirect_error = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect-error.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
      },
      RedirectType: function() {
        return RedirectType;
      },
      isRedirectError: function() {
        return isRedirectError;
      }
    });
    var _redirectstatuscode = require_redirect_status_code();
    var REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
    var RedirectType = /* @__PURE__ */ (function(RedirectType2) {
      RedirectType2["push"] = "push";
      RedirectType2["replace"] = "replace";
      return RedirectType2;
    })({});
    function isRedirectError(error) {
      if (typeof error !== "object" || error === null || !("digest" in error) || typeof error.digest !== "string") {
        return false;
      }
      const digest = error.digest.split(";");
      const [errorCode, type] = digest;
      const destination = digest.slice(2, -2).join(";");
      const status = digest.at(-2);
      const statusCode = Number(status);
      return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string" && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/async-local-storage.js
var require_async_local_storage = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/async-local-storage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      bindSnapshot: function() {
        return bindSnapshot;
      },
      createAsyncLocalStorage: function() {
        return createAsyncLocalStorage;
      },
      createSnapshot: function() {
        return createSnapshot;
      }
    });
    var sharedAsyncLocalStorageNotAvailableError = Object.defineProperty(new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
      value: "E504",
      enumerable: false,
      configurable: true
    });
    var FakeAsyncLocalStorage = class {
      disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      getStore() {
        return void 0;
      }
      run() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      static bind(fn) {
        return fn;
      }
    };
    var maybeGlobalAsyncLocalStorage = typeof globalThis !== "undefined" && globalThis.AsyncLocalStorage;
    function createAsyncLocalStorage() {
      if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
      }
      return new FakeAsyncLocalStorage();
    }
    function bindSnapshot(fn) {
      if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.bind(fn);
      }
      return FakeAsyncLocalStorage.bind(fn);
    }
    function createSnapshot() {
      if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.snapshot();
      }
      return function(fn, ...args) {
        return fn(...args);
      };
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/action-async-storage-instance.js
var require_action_async_storage_instance = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/action-async-storage-instance.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "actionAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return actionAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var actionAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/action-async-storage.external.js
var require_action_async_storage_external = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/action-async-storage.external.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "actionAsyncStorage", {
      enumerable: true,
      get: function() {
        return _actionasyncstorageinstance.actionAsyncStorageInstance;
      }
    });
    var _actionasyncstorageinstance = require_action_async_storage_instance();
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect.js
var require_redirect = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/redirect.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      getRedirectError: function() {
        return getRedirectError;
      },
      getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
      },
      getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
      },
      getURLFromRedirectError: function() {
        return getURLFromRedirectError;
      },
      permanentRedirect: function() {
        return permanentRedirect;
      },
      redirect: function() {
        return redirect;
      }
    });
    var _redirectstatuscode = require_redirect_status_code();
    var _redirecterror = require_redirect_error();
    var actionAsyncStorage = typeof window === "undefined" ? require_action_async_storage_external().actionAsyncStorage : void 0;
    function getRedirectError(url, type, statusCode) {
      if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
      const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = _redirecterror.REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
      return error;
    }
    function redirect(url, type) {
      var _actionAsyncStorage_getStore;
      type != null ? type : type = (actionAsyncStorage == null ? void 0 : (_actionAsyncStorage_getStore = actionAsyncStorage.getStore()) == null ? void 0 : _actionAsyncStorage_getStore.isAction) ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
      throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
    }
    function permanentRedirect(url, type) {
      if (type === void 0) type = _redirecterror.RedirectType.replace;
      throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
    }
    function getURLFromRedirectError(error) {
      if (!(0, _redirecterror.isRedirectError)(error)) return null;
      return error.digest.split(";").slice(2, -2).join(";");
    }
    function getRedirectTypeFromError(error) {
      if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
          value: "E260",
          enumerable: false,
          configurable: true
        });
      }
      return error.digest.split(";", 2)[1];
    }
    function getRedirectStatusCodeFromError(error) {
      if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
          value: "E260",
          enumerable: false,
          configurable: true
        });
      }
      return Number(error.digest.split(";").at(-2));
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js
var require_http_access_fallback = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
      },
      HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
      },
      getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
      },
      getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
      },
      isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
      }
    });
    var HTTPAccessErrorStatus = {
      NOT_FOUND: 404,
      FORBIDDEN: 403,
      UNAUTHORIZED: 401
    };
    var ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
    var HTTP_ERROR_FALLBACK_ERROR_CODE = "NEXT_HTTP_ERROR_FALLBACK";
    function isHTTPAccessFallbackError(error) {
      if (typeof error !== "object" || error === null || !("digest" in error) || typeof error.digest !== "string") {
        return false;
      }
      const [prefix, httpStatus] = error.digest.split(";");
      return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
    }
    function getAccessFallbackHTTPStatus(error) {
      const httpStatus = error.digest.split(";")[1];
      return Number(httpStatus);
    }
    function getAccessFallbackErrorTypeByStatus(status) {
      switch (status) {
        case 401:
          return "unauthorized";
        case 403:
          return "forbidden";
        case 404:
          return "not-found";
        default:
          return;
      }
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/not-found.js
var require_not_found = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/not-found.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "notFound", {
      enumerable: true,
      get: function() {
        return notFound;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
    function notFound() {
      const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = DIGEST;
      throw error;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/forbidden.js
var require_forbidden = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/forbidden.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "forbidden", {
      enumerable: true,
      get: function() {
        return forbidden;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
    function forbidden() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
          value: "E488",
          enumerable: false,
          configurable: true
        });
      }
      const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = DIGEST;
      throw error;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unauthorized.js
var require_unauthorized = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unauthorized.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "unauthorized", {
      enumerable: true,
      get: function() {
        return unauthorized;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
    function unauthorized() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
          value: "E411",
          enumerable: false,
          configurable: true
        });
      }
      const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = DIGEST;
      throw error;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/dynamic-rendering-utils.js
var require_dynamic_rendering_utils = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/dynamic-rendering-utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
      },
      makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
      },
      makeHangingPromise: function() {
        return makeHangingPromise;
      }
    });
    function isHangingPromiseRejectionError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
      }
      return err.digest === HANGING_PROMISE_REJECTION;
    }
    var HANGING_PROMISE_REJECTION = "HANGING_PROMISE_REJECTION";
    var HangingPromiseRejectionError = class extends Error {
      constructor(route, expression) {
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
      }
    };
    var abortListenersBySignal = /* @__PURE__ */ new WeakMap();
    function makeHangingPromise(signal, route, expression) {
      if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
      } else {
        const hangingPromise = new Promise((_, reject) => {
          const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
          let currentListeners = abortListenersBySignal.get(signal);
          if (currentListeners) {
            currentListeners.push(boundRejection);
          } else {
            const listeners = [
              boundRejection
            ];
            abortListenersBySignal.set(signal, listeners);
            signal.addEventListener("abort", () => {
              for (let i = 0; i < listeners.length; i++) {
                listeners[i]();
              }
            }, {
              once: true
            });
          }
        });
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
      }
    }
    function ignoreReject() {
    }
    function makeDevtoolsIOAwarePromise(underlying) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(underlying);
        }, 0);
      });
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/lib/router-utils/is-postpone.js
var require_is_postpone = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/lib/router-utils/is-postpone.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "isPostpone", {
      enumerable: true,
      get: function() {
        return isPostpone;
      }
    });
    var REACT_POSTPONE_TYPE = Symbol.for("react.postpone");
    function isPostpone(error) {
      return typeof error === "object" && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js
var require_bailout_to_csr = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      BailoutToCSRError: function() {
        return BailoutToCSRError;
      },
      isBailoutToCSRError: function() {
        return isBailoutToCSRError;
      }
    });
    var BAILOUT_TO_CSR = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
    var BailoutToCSRError = class extends Error {
      constructor(reason) {
        super("Bail out to client-side rendering: " + reason), this.reason = reason, this.digest = BAILOUT_TO_CSR;
      }
    };
    function isBailoutToCSRError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
      }
      return err.digest === BAILOUT_TO_CSR;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/is-next-router-error.js
var require_is_next_router_error = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/is-next-router-error.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "isNextRouterError", {
      enumerable: true,
      get: function() {
        return isNextRouterError;
      }
    });
    var _httpaccessfallback = require_http_access_fallback();
    var _redirecterror = require_redirect_error();
    function isNextRouterError(error) {
      return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/hooks-server-context.js
var require_hooks_server_context = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/hooks-server-context.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      DynamicServerError: function() {
        return DynamicServerError;
      },
      isDynamicServerError: function() {
        return isDynamicServerError;
      }
    });
    var DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
    var DynamicServerError = class extends Error {
      constructor(description) {
        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
      }
    };
    function isDynamicServerError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err) || typeof err.digest !== "string") {
        return false;
      }
      return err.digest === DYNAMIC_ERROR_CODE;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/static-generation-bailout.js
var require_static_generation_bailout = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/static-generation-bailout.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      StaticGenBailoutError: function() {
        return StaticGenBailoutError;
      },
      isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
      }
    });
    var NEXT_STATIC_GEN_BAILOUT = "NEXT_STATIC_GEN_BAILOUT";
    var StaticGenBailoutError = class extends Error {
      constructor(...args) {
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
      }
    };
    function isStaticGenBailoutError(error) {
      if (typeof error !== "object" || error === null || !("code" in error)) {
        return false;
      }
      return error.code === NEXT_STATIC_GEN_BAILOUT;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js
var require_work_unit_async_storage_instance = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "workUnitAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return workUnitAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var workUnitAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router-headers.js
var require_app_router_headers = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router-headers.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      ACTION_HEADER: function() {
        return ACTION_HEADER;
      },
      FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
      },
      NEXT_ACTION_NOT_FOUND_HEADER: function() {
        return NEXT_ACTION_NOT_FOUND_HEADER;
      },
      NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
      },
      NEXT_HMR_REFRESH_HASH_COOKIE: function() {
        return NEXT_HMR_REFRESH_HASH_COOKIE;
      },
      NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
      },
      NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
      },
      NEXT_REWRITTEN_PATH_HEADER: function() {
        return NEXT_REWRITTEN_PATH_HEADER;
      },
      NEXT_REWRITTEN_QUERY_HEADER: function() {
        return NEXT_REWRITTEN_QUERY_HEADER;
      },
      NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
      },
      NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
      },
      NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
      },
      NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
      },
      NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
      },
      NEXT_URL: function() {
        return NEXT_URL;
      },
      RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
      },
      RSC_HEADER: function() {
        return RSC_HEADER;
      }
    });
    var RSC_HEADER = "rsc";
    var ACTION_HEADER = "next-action";
    var NEXT_ROUTER_STATE_TREE_HEADER = "next-router-state-tree";
    var NEXT_ROUTER_PREFETCH_HEADER = "next-router-prefetch";
    var NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = "next-router-segment-prefetch";
    var NEXT_HMR_REFRESH_HEADER = "next-hmr-refresh";
    var NEXT_HMR_REFRESH_HASH_COOKIE = "__next_hmr_refresh_hash__";
    var NEXT_URL = "next-url";
    var RSC_CONTENT_TYPE_HEADER = "text/x-component";
    var FLIGHT_HEADERS = [
      RSC_HEADER,
      NEXT_ROUTER_STATE_TREE_HEADER,
      NEXT_ROUTER_PREFETCH_HEADER,
      NEXT_HMR_REFRESH_HEADER,
      NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
    ];
    var NEXT_RSC_UNION_QUERY = "_rsc";
    var NEXT_ROUTER_STALE_TIME_HEADER = "x-nextjs-stale-time";
    var NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed";
    var NEXT_REWRITTEN_PATH_HEADER = "x-nextjs-rewritten-path";
    var NEXT_REWRITTEN_QUERY_HEADER = "x-nextjs-rewritten-query";
    var NEXT_IS_PRERENDER_HEADER = "x-nextjs-prerender";
    var NEXT_ACTION_NOT_FOUND_HEADER = "x-nextjs-action-not-found";
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/invariant-error.js
var require_invariant_error = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/invariant-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "InvariantError", {
      enumerable: true,
      get: function() {
        return InvariantError;
      }
    });
    var InvariantError = class extends Error {
      constructor(message, options) {
        super("Invariant: " + (message.endsWith(".") ? message : message + ".") + " This is a bug in Next.js.", options);
        this.name = "InvariantError";
      }
    };
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js
var require_work_unit_async_storage_external = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      getCacheSignal: function() {
        return getCacheSignal;
      },
      getDraftModeProviderForCacheScope: function() {
        return getDraftModeProviderForCacheScope;
      },
      getHmrRefreshHash: function() {
        return getHmrRefreshHash;
      },
      getPrerenderResumeDataCache: function() {
        return getPrerenderResumeDataCache;
      },
      getRenderResumeDataCache: function() {
        return getRenderResumeDataCache;
      },
      getRuntimeStagePromise: function() {
        return getRuntimeStagePromise;
      },
      getServerComponentsHmrCache: function() {
        return getServerComponentsHmrCache;
      },
      isHmrRefresh: function() {
        return isHmrRefresh;
      },
      throwForMissingRequestStore: function() {
        return throwForMissingRequestStore;
      },
      throwInvariantForMissingStore: function() {
        return throwInvariantForMissingStore;
      },
      workUnitAsyncStorage: function() {
        return _workunitasyncstorageinstance.workUnitAsyncStorageInstance;
      }
    });
    var _workunitasyncstorageinstance = require_work_unit_async_storage_instance();
    var _approuterheaders = require_app_router_headers();
    var _invarianterror = require_invariant_error();
    function throwForMissingRequestStore(callingExpression) {
      throw Object.defineProperty(new Error(`\`${callingExpression}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
        value: "E251",
        enumerable: false,
        configurable: true
      });
    }
    function throwInvariantForMissingStore() {
      throw Object.defineProperty(new _invarianterror.InvariantError("Expected workUnitAsyncStorage to have a store."), "__NEXT_ERROR_CODE", {
        value: "E696",
        enumerable: false,
        configurable: true
      });
    }
    function getPrerenderResumeDataCache(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender":
        case "prerender-runtime":
        case "prerender-ppr":
          return workUnitStore.prerenderResumeDataCache;
        case "prerender-client":
          return workUnitStore.prerenderResumeDataCache;
        case "prerender-legacy":
        case "request":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return null;
        default:
          return workUnitStore;
      }
    }
    function getRenderResumeDataCache(workUnitStore) {
      switch (workUnitStore.type) {
        case "request":
          return workUnitStore.renderResumeDataCache;
        case "prerender":
        case "prerender-runtime":
        case "prerender-client":
          if (workUnitStore.renderResumeDataCache) {
            return workUnitStore.renderResumeDataCache;
          }
        // fallthrough
        case "prerender-ppr":
          return workUnitStore.prerenderResumeDataCache;
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "prerender-legacy":
          return null;
        default:
          return workUnitStore;
      }
    }
    function getHmrRefreshHash(workStore, workUnitStore) {
      if (workStore.dev) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "prerender":
          case "prerender-runtime":
            return workUnitStore.hmrRefreshHash;
          case "request":
            var _workUnitStore_cookies_get;
            return (_workUnitStore_cookies_get = workUnitStore.cookies.get(_approuterheaders.NEXT_HMR_REFRESH_HASH_COOKIE)) == null ? void 0 : _workUnitStore_cookies_get.value;
          case "prerender-client":
          case "prerender-ppr":
          case "prerender-legacy":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
      return void 0;
    }
    function isHmrRefresh(workStore, workUnitStore) {
      if (workStore.dev) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "request":
            return workUnitStore.isHmrRefresh ?? false;
          case "prerender":
          case "prerender-client":
          case "prerender-runtime":
          case "prerender-ppr":
          case "prerender-legacy":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
      return false;
    }
    function getServerComponentsHmrCache(workStore, workUnitStore) {
      if (workStore.dev) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "request":
            return workUnitStore.serverComponentsHmrCache;
          case "prerender":
          case "prerender-client":
          case "prerender-runtime":
          case "prerender-ppr":
          case "prerender-legacy":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
      return void 0;
    }
    function getDraftModeProviderForCacheScope(workStore, workUnitStore) {
      if (workStore.isDraftMode) {
        switch (workUnitStore.type) {
          case "cache":
          case "private-cache":
          case "unstable-cache":
          case "prerender-runtime":
          case "request":
            return workUnitStore.draftMode;
          case "prerender":
          case "prerender-client":
          case "prerender-ppr":
          case "prerender-legacy":
            break;
          default:
            workUnitStore;
        }
      }
      return void 0;
    }
    function getCacheSignal(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender":
        case "prerender-client":
        case "prerender-runtime":
          return workUnitStore.cacheSignal;
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return null;
        default:
          return workUnitStore;
      }
    }
    function getRuntimeStagePromise(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender-runtime":
        case "private-cache":
          return workUnitStore.runtimeStagePromise;
        case "prerender":
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "cache":
        case "unstable-cache":
          return null;
        default:
          return workUnitStore;
      }
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/work-async-storage-instance.js
var require_work_async_storage_instance = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/work-async-storage-instance.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "workAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return workAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var workAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/work-async-storage.external.js
var require_work_async_storage_external = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/work-async-storage.external.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "workAsyncStorage", {
      enumerable: true,
      get: function() {
        return _workasyncstorageinstance.workAsyncStorageInstance;
      }
    });
    var _workasyncstorageinstance = require_work_async_storage_instance();
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/lib/framework/boundary-constants.js
var require_boundary_constants = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/lib/framework/boundary-constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
      },
      OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
      },
      ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
      },
      VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
      }
    });
    var METADATA_BOUNDARY_NAME = "__next_metadata_boundary__";
    var VIEWPORT_BOUNDARY_NAME = "__next_viewport_boundary__";
    var OUTLET_BOUNDARY_NAME = "__next_outlet_boundary__";
    var ROOT_LAYOUT_BOUNDARY_NAME = "__next_root_layout_boundary__";
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/lib/scheduler.js
var require_scheduler = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/lib/scheduler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      atLeastOneTask: function() {
        return atLeastOneTask;
      },
      scheduleImmediate: function() {
        return scheduleImmediate;
      },
      scheduleOnNextTick: function() {
        return scheduleOnNextTick;
      },
      waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
      }
    });
    var scheduleOnNextTick = (cb) => {
      Promise.resolve().then(() => {
        if (process.env.NEXT_RUNTIME === "edge") {
          setTimeout(cb, 0);
        } else {
          process.nextTick(cb);
        }
      });
    };
    var scheduleImmediate = (cb) => {
      if (process.env.NEXT_RUNTIME === "edge") {
        setTimeout(cb, 0);
      } else {
        setImmediate(cb);
      }
    };
    function atLeastOneTask() {
      return new Promise((resolve) => scheduleImmediate(resolve));
    }
    function waitAtLeastOneReactRenderTask() {
      if (process.env.NEXT_RUNTIME === "edge") {
        return new Promise((r) => setTimeout(r, 0));
      } else {
        return new Promise((r) => setImmediate(r));
      }
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/dynamic-rendering.js
var require_dynamic_rendering = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/app-render/dynamic-rendering.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      Postpone: function() {
        return Postpone;
      },
      PreludeState: function() {
        return PreludeState;
      },
      abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
      },
      abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
      },
      accessedDynamicData: function() {
        return accessedDynamicData;
      },
      annotateDynamicAccess: function() {
        return annotateDynamicAccess;
      },
      consumeDynamicAccess: function() {
        return consumeDynamicAccess;
      },
      createDynamicTrackingState: function() {
        return createDynamicTrackingState;
      },
      createDynamicValidationState: function() {
        return createDynamicValidationState;
      },
      createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
      },
      createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
      },
      delayUntilRuntimeStage: function() {
        return delayUntilRuntimeStage;
      },
      formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
      },
      getFirstDynamicReason: function() {
        return getFirstDynamicReason;
      },
      isDynamicPostpone: function() {
        return isDynamicPostpone;
      },
      isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
      },
      logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
      },
      markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
      },
      postponeWithTracking: function() {
        return postponeWithTracking;
      },
      throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
      },
      throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
      },
      trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
      },
      trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
      },
      trackSynchronousPlatformIOAccessInDev: function() {
        return trackSynchronousPlatformIOAccessInDev;
      },
      trackSynchronousRequestDataAccessInDev: function() {
        return trackSynchronousRequestDataAccessInDev;
      },
      useDynamicRouteParams: function() {
        return useDynamicRouteParams;
      },
      warnOnSyncDynamicError: function() {
        return warnOnSyncDynamicError;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(__require("react"));
    var _hooksservercontext = require_hooks_server_context();
    var _staticgenerationbailout = require_static_generation_bailout();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _boundaryconstants = require_boundary_constants();
    var _scheduler = require_scheduler();
    var _bailouttocsr = require_bailout_to_csr();
    var _invarianterror = require_invariant_error();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var hasPostpone = typeof _react.default.unstable_postpone === "function";
    function createDynamicTrackingState(isDebugDynamicAccesses) {
      return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
      };
    }
    function createDynamicValidationState() {
      return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
      };
    }
    function getFirstDynamicReason(trackingState) {
      var _trackingState_dynamicAccesses_;
      return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
    }
    function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "cache":
          case "unstable-cache":
            return;
          case "private-cache":
            return;
          case "prerender-legacy":
          case "prerender-ppr":
          case "request":
            break;
          default:
            workUnitStore;
        }
      }
      if (store.forceDynamic || store.forceStatic) return;
      if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
          value: "E553",
          enumerable: false,
          configurable: true
        });
      }
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "prerender-ppr":
            return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
          case "prerender-legacy":
            workUnitStore.revalidate = 0;
            const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
              value: "E550",
              enumerable: false,
              configurable: true
            });
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
          case "request":
            if (process.env.NODE_ENV !== "production") {
              workUnitStore.usedDynamic = true;
            }
            break;
          default:
            workUnitStore;
        }
      }
    }
    function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
      const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
      });
      prerenderStore.revalidate = 0;
      store.dynamicUsageDescription = expression;
      store.dynamicUsageStack = err.stack;
      throw err;
    }
    function trackDynamicDataInDynamicRender(workUnitStore) {
      switch (workUnitStore.type) {
        case "cache":
        case "unstable-cache":
          return;
        case "private-cache":
          return;
        case "prerender":
        case "prerender-runtime":
        case "prerender-legacy":
        case "prerender-ppr":
        case "prerender-client":
          break;
        case "request":
          if (process.env.NODE_ENV !== "production") {
            workUnitStore.usedDynamic = true;
          }
          break;
        default:
          workUnitStore;
      }
    }
    function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
      const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
      const error = createPrerenderInterruptedError(reason);
      prerenderStore.controller.abort(error);
      const dynamicTracking = prerenderStore.dynamicTracking;
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          // When we aren't debugging, we don't need to create another error for the
          // stack trace.
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
    }
    function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
      const dynamicTracking = prerenderStore.dynamicTracking;
      abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
      if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
          dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
      }
    }
    function trackSynchronousPlatformIOAccessInDev(requestStore) {
      requestStore.prerenderPhase = false;
    }
    function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
      const prerenderSignal = prerenderStore.controller.signal;
      if (prerenderSignal.aborted === false) {
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
          if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
          }
        }
      }
      throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
    }
    function warnOnSyncDynamicError(dynamicTracking) {
      if (dynamicTracking.syncDynamicErrorWithStack) {
        console.error(dynamicTracking.syncDynamicErrorWithStack);
      }
    }
    var trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
    function Postpone({ reason, route }) {
      const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      const dynamicTracking = prerenderStore && prerenderStore.type === "prerender-ppr" ? prerenderStore.dynamicTracking : null;
      postponeWithTracking(route, reason, dynamicTracking);
    }
    function postponeWithTracking(route, expression, dynamicTracking) {
      assertPostpone();
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          // When we aren't debugging, we don't need to create another error for the
          // stack trace.
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
      _react.default.unstable_postpone(createPostponeReason(route, expression));
    }
    function createPostponeReason(route, expression) {
      return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
    }
    function isDynamicPostpone(err) {
      if (typeof err === "object" && err !== null && typeof err.message === "string") {
        return isDynamicPostponeReason(err.message);
      }
      return false;
    }
    function isDynamicPostponeReason(reason) {
      return reason.includes("needs to bail out of prerendering at this point because it used") && reason.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
    }
    if (isDynamicPostponeReason(createPostponeReason("%%%", "^^^")) === false) {
      throw Object.defineProperty(new Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
      });
    }
    var NEXT_PRERENDER_INTERRUPTED = "NEXT_PRERENDER_INTERRUPTED";
    function createPrerenderInterruptedError(message) {
      const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = NEXT_PRERENDER_INTERRUPTED;
      return error;
    }
    function isPrerenderInterruptedError(error) {
      return typeof error === "object" && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && "name" in error && "message" in error && error instanceof Error;
    }
    function accessedDynamicData(dynamicAccesses) {
      return dynamicAccesses.length > 0;
    }
    function consumeDynamicAccess(serverDynamic, clientDynamic) {
      serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
      return serverDynamic.dynamicAccesses;
    }
    function formatDynamicAPIAccesses(dynamicAccesses) {
      return dynamicAccesses.filter((access) => typeof access.stack === "string" && access.stack.length > 0).map(({ expression, stack }) => {
        stack = stack.split("\n").slice(4).filter((line) => {
          if (line.includes("node_modules/next/")) {
            return false;
          }
          if (line.includes(" (<anonymous>)")) {
            return false;
          }
          if (line.includes(" (node:")) {
            return false;
          }
          return true;
        }).join("\n");
        return `Dynamic API Usage Debug - ${expression}:
${stack}`;
      });
    }
    function assertPostpone() {
      if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
          value: "E224",
          enumerable: false,
          configurable: true
        });
      }
    }
    function createRenderInBrowserAbortSignal() {
      const controller = new AbortController();
      controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError("Render in Browser"), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
      }));
      return controller.signal;
    }
    function createHangingInputAbortSignal(workUnitStore) {
      switch (workUnitStore.type) {
        case "prerender":
        case "prerender-runtime":
          const controller = new AbortController();
          if (workUnitStore.cacheSignal) {
            workUnitStore.cacheSignal.inputReady().then(() => {
              controller.abort();
            });
          } else {
            const runtimeStagePromise = (0, _workunitasyncstorageexternal.getRuntimeStagePromise)(workUnitStore);
            if (runtimeStagePromise) {
              runtimeStagePromise.then(() => (0, _scheduler.scheduleOnNextTick)(() => controller.abort()));
            } else {
              (0, _scheduler.scheduleOnNextTick)(() => controller.abort());
            }
          }
          return controller.signal;
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return void 0;
        default:
          workUnitStore;
      }
    }
    function annotateDynamicAccess(expression, prerenderStore) {
      const dynamicTracking = prerenderStore.dynamicTracking;
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
    }
    function useDynamicRouteParams(expression) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore && workUnitStore) {
        switch (workUnitStore.type) {
          case "prerender-client":
          case "prerender": {
            const fallbackParams = workUnitStore.fallbackRouteParams;
            if (fallbackParams && fallbackParams.size > 0) {
              _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
            }
            break;
          }
          case "prerender-ppr": {
            const fallbackParams = workUnitStore.fallbackRouteParams;
            if (fallbackParams && fallbackParams.size > 0) {
              return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
            }
            break;
          }
          case "prerender-runtime":
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E771",
              enumerable: false,
              configurable: true
            });
          case "cache":
          case "private-cache":
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E745",
              enumerable: false,
              configurable: true
            });
          case "prerender-legacy":
          case "request":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
    }
    var hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
    var bodyAndImplicitTags = "body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6";
    var hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
    var hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
    var hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
    var hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
    function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
      if (hasOutletRegex.test(componentStack)) {
        return;
      } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
      } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
      } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
      } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        return;
      } else if (clientDynamic.syncDynamicErrorWithStack) {
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
      } else {
        const message = `Route "${workStore.route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
      }
    }
    function createErrorWithComponentOrOwnerStack(message, componentStack) {
      const ownerStack = process.env.NODE_ENV !== "production" && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
      const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.stack = error.name + ": " + message + (ownerStack ?? componentStack);
      return error;
    }
    var PreludeState = /* @__PURE__ */ (function(PreludeState2) {
      PreludeState2[PreludeState2["Full"] = 0] = "Full";
      PreludeState2[PreludeState2["Empty"] = 1] = "Empty";
      PreludeState2[PreludeState2["Errored"] = 2] = "Errored";
      return PreludeState2;
    })({});
    function logDisallowedDynamicError(workStore, error) {
      console.error(error);
      if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
          console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
          console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
      }
    }
    function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
      if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
          return;
        }
        if (serverDynamic.syncDynamicErrorWithStack) {
          logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
          for (let i = 0; i < dynamicErrors.length; i++) {
            logDisallowedDynamicError(workStore, dynamicErrors[i]);
          }
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (dynamicValidation.hasDynamicViewport) {
          console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
          console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
      } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
          console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
      }
    }
    function delayUntilRuntimeStage(prerenderStore, result) {
      if (prerenderStore.runtimeStagePromise) {
        return prerenderStore.runtimeStagePromise.then(() => result);
      }
      return result;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unstable-rethrow.server.js
var require_unstable_rethrow_server = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unstable-rethrow.server.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "unstable_rethrow", {
      enumerable: true,
      get: function() {
        return unstable_rethrow;
      }
    });
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _ispostpone = require_is_postpone();
    var _bailouttocsr = require_bailout_to_csr();
    var _isnextroutererror = require_is_next_router_error();
    var _dynamicrendering = require_dynamic_rendering();
    var _hooksservercontext = require_hooks_server_context();
    function unstable_rethrow(error) {
      if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error)) {
        throw error;
      }
      if (error instanceof Error && "cause" in error) {
        unstable_rethrow(error.cause);
      }
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unstable-rethrow.browser.js
var require_unstable_rethrow_browser = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unstable-rethrow.browser.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "unstable_rethrow", {
      enumerable: true,
      get: function() {
        return unstable_rethrow;
      }
    });
    var _bailouttocsr = require_bailout_to_csr();
    var _isnextroutererror = require_is_next_router_error();
    function unstable_rethrow(error) {
      if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error)) {
        throw error;
      }
      if (error instanceof Error && "cause" in error) {
        unstable_rethrow(error.cause);
      }
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unstable-rethrow.js
var require_unstable_rethrow = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unstable-rethrow.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "unstable_rethrow", {
      enumerable: true,
      get: function() {
        return unstable_rethrow;
      }
    });
    var unstable_rethrow = typeof window === "undefined" ? require_unstable_rethrow_server().unstable_rethrow : require_unstable_rethrow_browser().unstable_rethrow;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation.react-server.js
var require_navigation_react_server = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation.react-server.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
      },
      RedirectType: function() {
        return _redirecterror.RedirectType;
      },
      forbidden: function() {
        return _forbidden.forbidden;
      },
      notFound: function() {
        return _notfound.notFound;
      },
      permanentRedirect: function() {
        return _redirect.permanentRedirect;
      },
      redirect: function() {
        return _redirect.redirect;
      },
      unauthorized: function() {
        return _unauthorized.unauthorized;
      },
      unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
      },
      unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
      }
    });
    var _redirect = require_redirect();
    var _redirecterror = require_redirect_error();
    var _notfound = require_not_found();
    var _forbidden = require_forbidden();
    var _unauthorized = require_unauthorized();
    var _unstablerethrow = require_unstable_rethrow();
    var ReadonlyURLSearchParamsError = class extends Error {
      constructor() {
        super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
      }
    };
    var ReadonlyURLSearchParams = class extends URLSearchParams {
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      append() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      delete() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      set() {
        throw new ReadonlyURLSearchParamsError();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      sort() {
        throw new ReadonlyURLSearchParamsError();
      }
    };
    function unstable_isUnrecognizedActionError() {
      throw Object.defineProperty(new Error("`unstable_isUnrecognizedActionError` can only be used on the client."), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
      });
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs
var require_interop_require_wildcard = __commonJS({
  "../../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs"(exports) {
    "use strict";
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interop_require_wildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) return obj;
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = { __proto__: null };
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
          else newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      if (cache) cache.set(obj, newObj);
      return newObj;
    }
    exports._ = _interop_require_wildcard;
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js
var require_server_inserted_html_shared_runtime = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js"(exports) {
    "use strict";
    "use client";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      ServerInsertedHTMLContext: function() {
        return ServerInsertedHTMLContext;
      },
      useServerInsertedHTML: function() {
        return useServerInsertedHTML;
      }
    });
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _react = /* @__PURE__ */ _interop_require_wildcard._(__require("react"));
    var ServerInsertedHTMLContext = /* @__PURE__ */ _react.default.createContext(null);
    function useServerInsertedHTML(callback) {
      const addInsertedServerHTMLCallback = (0, _react.useContext)(ServerInsertedHTMLContext);
      if (addInsertedServerHTMLCallback) {
        addInsertedServerHTMLCallback(callback);
      }
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unrecognized-action-error.js
var require_unrecognized_action_error = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/unrecognized-action-error.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      UnrecognizedActionError: function() {
        return UnrecognizedActionError;
      },
      unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
      }
    });
    var UnrecognizedActionError = class extends Error {
      constructor(...args) {
        super(...args);
        this.name = "UnrecognizedActionError";
      }
    };
    function unstable_isUnrecognizedActionError(error) {
      return !!(error && typeof error === "object" && error instanceof UnrecognizedActionError);
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/bailout-to-client-rendering.js
var require_bailout_to_client_rendering = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/bailout-to-client-rendering.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "bailoutToClientRendering", {
      enumerable: true,
      get: function() {
        return bailoutToClientRendering;
      }
    });
    var _bailouttocsr = require_bailout_to_csr();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    function bailoutToClientRendering(reason) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      if (workStore == null ? void 0 : workStore.forceStatic) return;
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workUnitStore) {
        switch (workUnitStore.type) {
          case "prerender":
          case "prerender-runtime":
          case "prerender-client":
          case "prerender-ppr":
          case "prerender-legacy":
            throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
              value: "E394",
              enumerable: false,
              configurable: true
            });
          case "request":
          case "cache":
          case "private-cache":
          case "unstable-cache":
            break;
          default:
            workUnitStore;
        }
      }
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation.js
var require_navigation = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
      },
      RedirectType: function() {
        return _navigationreactserver.RedirectType;
      },
      ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
      },
      forbidden: function() {
        return _navigationreactserver.forbidden;
      },
      notFound: function() {
        return _navigationreactserver.notFound;
      },
      permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
      },
      redirect: function() {
        return _navigationreactserver.redirect;
      },
      unauthorized: function() {
        return _navigationreactserver.unauthorized;
      },
      unstable_isUnrecognizedActionError: function() {
        return _unrecognizedactionerror.unstable_isUnrecognizedActionError;
      },
      unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
      },
      useParams: function() {
        return useParams;
      },
      usePathname: function() {
        return usePathname;
      },
      useRouter: function() {
        return useRouter;
      },
      useSearchParams: function() {
        return useSearchParams;
      },
      useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
      },
      useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
      },
      useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
      }
    });
    var _react = __require("react");
    var _approutercontextsharedruntime = require_app_router_context_shared_runtime();
    var _hooksclientcontextsharedruntime = require_hooks_client_context_shared_runtime();
    var _getsegmentvalue = require_get_segment_value();
    var _segment = require_segment();
    var _navigationreactserver = require_navigation_react_server();
    var _serverinsertedhtmlsharedruntime = require_server_inserted_html_shared_runtime();
    var _unrecognizedactionerror = require_unrecognized_action_error();
    var useDynamicRouteParams = typeof window === "undefined" ? require_dynamic_rendering().useDynamicRouteParams : void 0;
    function useSearchParams() {
      const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
      const readonlySearchParams = (0, _react.useMemo)(() => {
        if (!searchParams) {
          return null;
        }
        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
      }, [
        searchParams
      ]);
      if (typeof window === "undefined") {
        const { bailoutToClientRendering } = require_bailout_to_client_rendering();
        bailoutToClientRendering("useSearchParams()");
      }
      return readonlySearchParams;
    }
    function usePathname() {
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("usePathname()");
      return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
    }
    function useRouter() {
      const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
      if (router === null) {
        throw Object.defineProperty(new Error("invariant expected app router to be mounted"), "__NEXT_ERROR_CODE", {
          value: "E238",
          enumerable: false,
          configurable: true
        });
      }
      return router;
    }
    function useParams() {
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("useParams()");
      return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
    }
    function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
      if (first === void 0) first = true;
      if (segmentPath === void 0) segmentPath = [];
      let node;
      if (first) {
        node = tree[1][parallelRouteKey];
      } else {
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
      }
      if (!node) return segmentPath;
      const segment = node[0];
      let segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
      if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return segmentPath;
      }
      segmentPath.push(segmentValue);
      return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
    }
    function useSelectedLayoutSegments(parallelRouteKey) {
      if (parallelRouteKey === void 0) parallelRouteKey = "children";
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("useSelectedLayoutSegments()");
      const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
      if (!context) return null;
      return getSelectedLayoutSegmentPath(context.parentTree, parallelRouteKey);
    }
    function useSelectedLayoutSegment(parallelRouteKey) {
      if (parallelRouteKey === void 0) parallelRouteKey = "children";
      useDynamicRouteParams == null ? void 0 : useDynamicRouteParams("useSelectedLayoutSegment()");
      const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
      if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
        return null;
      }
      const selectedLayoutSegment = parallelRouteKey === "children" ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
      return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js
var require_navigation2 = __commonJS({
  "../../node_modules/.pnpm/next@15.5.6_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js"(exports, module) {
    "use strict";
    module.exports = require_navigation();
  }
});

// src/FeedbackProvider.tsx
import { useEffect as useEffect3, useMemo, useState as useState2 } from "react";
import { ConvexProvider as ConvexProvider2, ConvexReactClient as ConvexReactClient2 } from "convex/react";

// src/FeedbackOverlayManager.tsx
import React2, { useEffect as useEffect2, useRef as useRef2 } from "react";
import ReactDOM from "react-dom/client";
import { ConvexProvider, ConvexReactClient } from "convex/react";

// src/FeedbackOverlay.tsx
import React, { useState, useRef, useCallback, useEffect } from "react";
import { useMutation } from "convex/react";

// src/utils/pii-redaction.ts
var REDACTION_CLASS = "feedback-widget-redact";
function applyPIIRedaction() {
  const redactedElements = [];
  const hiddenElements = [];
  const seen = /* @__PURE__ */ new Set();
  const markHidden = (element) => {
    if (seen.has(element)) return;
    seen.add(element);
    hiddenElements.push({
      element,
      previousHidden: element.getAttribute("data-feedback-widget-hidden")
    });
    element.setAttribute("data-feedback-widget-hidden", "true");
  };
  const markRedacted = (element) => {
    if (seen.has(element)) return;
    seen.add(element);
    element.classList.add(REDACTION_CLASS);
    redactedElements.push(element);
  };
  SENSITIVE_FIELD_SELECTORS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node) => {
      const element = node;
      if (element.dataset.noCapture === "true") {
        markHidden(element);
        return;
      }
      if (element.tagName.toLowerCase() === "input" && element.getAttribute("type") === "password") {
        markRedacted(element);
        return;
      }
      if (element.matches(".sensitive-data") || element.dataset.sensitive === "true") {
        markRedacted(element);
        return;
      }
      if (element.getAttribute("autocomplete")?.startsWith("cc-")) {
        markRedacted(element);
        return;
      }
      markRedacted(element);
    });
  });
  return () => {
    redactedElements.forEach((element) => {
      element.classList.remove(REDACTION_CLASS);
    });
    hiddenElements.forEach(({ element, previousHidden }) => {
      if (previousHidden !== null) {
        element.setAttribute("data-feedback-widget-hidden", previousHidden);
      } else {
        element.removeAttribute("data-feedback-widget-hidden");
      }
    });
  };
}
var SENSITIVE_FIELD_SELECTORS = [
  'input[type="password"]',
  'input[autocomplete^="cc-"]',
  'input[autocomplete="current-password"]',
  'input[autocomplete="new-password"]',
  '[data-sensitive="true"]',
  '[data-no-capture="true"]',
  ".sensitive-data"
];

// src/utils/screenshot.ts
import { toBlob } from "html-to-image";
async function captureScreenshot(targetElement = document.body, options = {}) {
  const mergedOptions = {
    ...DEFAULT_SCREENSHOT_OPTIONS,
    ...options
  };
  const {
    pixelRatio = 1,
    quality = 0.92,
    backgroundColor = null
  } = mergedOptions;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;
  const blob = await toBlob(targetElement, {
    pixelRatio,
    quality,
    backgroundColor: backgroundColor || void 0,
    // null -> undefined for proper transparency
    cacheBust: true,
    // Prevent CORS caching issues
    // Constrain output to viewport dimensions
    width: viewportWidth,
    height: viewportHeight,
    // Offset the element to capture the visible viewport area
    style: {
      margin: "0",
      padding: "0",
      transform: `translate(-${scrollX}px, -${scrollY}px)`
    }
  });
  if (!blob) {
    throw new Error("Failed to create screenshot blob. This may be caused by CORS issues with external resources.");
  }
  return blob;
}
var DEFAULT_SCREENSHOT_OPTIONS = {
  pixelRatio: 1,
  quality: 0.92,
  backgroundColor: null
  // Transparent background
};

// src/FeedbackOverlay.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var ExcalidrawComponent = null;
function deriveSubmissionPath(metadata) {
  if (metadata?.path && metadata.path.trim().length > 0) {
    return metadata.path;
  }
  if (metadata?.route && metadata.route.trim().length > 0) {
    return `route:${metadata.route}`;
  }
  if (metadata?.project && metadata.project.trim().length > 0) {
    return `project:${metadata.project}`;
  }
  return "unmapped-feedback";
}
function Toast({ message, type = "success", onClose }) {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 5e3);
    return () => clearTimeout(timer);
  }, [onClose]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `feedback-widget-toast${type === "error" ? " feedback-widget-toast--error" : ""}`,
      role: "status",
      children: message
    }
  );
}
function LoadingSpinner() {
  return /* @__PURE__ */ jsx("div", { className: "feedback-widget-loading-spinner", "aria-hidden": "true" });
}
function hideInterfaceElements(toolbar, extraSelectors) {
  const hiddenElements = [];
  const hide = (element) => {
    if (!element) return;
    hiddenElements.push({
      element,
      previousDisplay: element.style.display
    });
    element.style.display = "none";
  };
  if (toolbar) {
    hide(toolbar);
  }
  const selectorList = extraSelectors ?? [];
  if (selectorList.length > 0) {
    document.querySelectorAll(selectorList.join(",")).forEach((node) => {
      hide(node);
    });
  }
  return () => {
    hiddenElements.forEach(({ element, previousDisplay }) => {
      element.style.display = previousDisplay;
    });
  };
}
function FeedbackOverlay({ onClose, metadata }) {
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [viewportHeight, setViewportHeight] = useState(() => window.innerHeight);
  const [toolbarPosition, setToolbarPosition] = useState("top-left");
  const [isExcalidrawLoaded, setIsExcalidrawLoaded] = useState(false);
  const excalidrawAPIRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined" && !ExcalidrawComponent) {
      import("@excalidraw/excalidraw").then((mod) => {
        ExcalidrawComponent = mod.Excalidraw;
        setIsExcalidrawLoaded(true);
      }).catch((err) => {
        console.error("Failed to load Excalidraw:", err);
        setToast({ message: "Failed to load drawing tools", type: "error" });
      });
    } else if (ExcalidrawComponent) {
      setIsExcalidrawLoaded(true);
    }
  }, []);
  const generateUploadUrl = useMutation("feedback:generateUploadUrl");
  const submitFeedback = useMutation("feedback:submit");
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleSubmit = useCallback(async () => {
    if (!excalidrawAPIRef.current) {
      setToast({ message: "Drawing canvas not ready", type: "error" });
      return;
    }
    const submissionPath = deriveSubmissionPath(metadata);
    if (!submissionPath) {
      setToast({ message: "Callback metadata missing path/route", type: "error" });
      return;
    }
    setIsSubmitting(true);
    const sceneElements = excalidrawAPIRef.current.getSceneElements();
    const overlayJSON = JSON.stringify(sceneElements);
    const toolbar = document.getElementById("feedback-toolbar");
    const toggleButton = document.getElementById("feedback-toggle-button");
    const hideUI = hideInterfaceElements(toolbar, [
      ".App-menu",
      ".layer-ui__wrapper",
      ".zen-mode-transition",
      ".zoom-actions",
      ".Stack_vertical.App-menu_top__left",
      '[class*="layer-ui__wrapper"]',
      ".undo-redo-buttons",
      '[class*="undo-redo"]'
    ]);
    if (toggleButton) {
      toggleButton.style.display = "none";
    }
    const restorePII = applyPIIRedaction();
    try {
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
      const screenshotBlob = await captureScreenshot(document.body, {
        ...DEFAULT_SCREENSHOT_OPTIONS,
        backgroundColor: null
      });
      const uploadUrl = await generateUploadUrl();
      const uploadResponse = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": "image/png" },
        body: screenshotBlob
      });
      if (!uploadResponse.ok) {
        throw new Error(`Upload failed: ${uploadResponse.statusText}`);
      }
      const { storageId } = await uploadResponse.json();
      const trimmedNote = note.trim();
      const submissionMetadata = {
        ...metadata ?? {}
      };
      if (!submissionMetadata.path) {
        submissionMetadata.path = submissionPath;
      }
      const submitArgs = {
        url: window.location.href,
        path: submissionPath,
        note: trimmedNote.length > 0 ? trimmedNote : void 0,
        overlayJSON,
        screenshot: storageId,
        ua: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        },
        // Universal widget fields (top-level, not nested in metadata)
        route: submissionMetadata.route,
        releaseId: submissionMetadata.releaseId,
        env: submissionMetadata.env,
        userHash: submissionMetadata.userHash,
        flags: submissionMetadata.flags,
        project: submissionMetadata.project
      };
      await submitFeedback(submitArgs);
      setToast({ message: "Feedback submitted successfully!", type: "success" });
      setNote("");
      if (excalidrawAPIRef.current) {
        const appState = excalidrawAPIRef.current.getAppState();
        excalidrawAPIRef.current.updateScene({
          elements: [],
          appState
        });
      }
    } catch (error) {
      console.error("[FeedbackOverlay] Submission failed:", error);
      setToast({
        message: error instanceof Error ? error.message : "Failed to submit feedback",
        type: "error"
      });
    } finally {
      hideUI();
      restorePII();
      if (toggleButton) {
        toggleButton.style.display = "";
      }
      setIsSubmitting(false);
    }
  }, [metadata, note, onClose, generateUploadUrl, submitFeedback]);
  const handleReset = useCallback(() => {
    setNote("");
    if (excalidrawAPIRef.current) {
      const appState = excalidrawAPIRef.current.getAppState();
      excalidrawAPIRef.current.updateScene({
        elements: [],
        appState
      });
    }
  }, []);
  const cycleToolbarPosition = useCallback(() => {
    setToolbarPosition((prev) => {
      const positions = ["top-left", "top-right", "bottom-right", "bottom-left"];
      const currentIndex = positions.indexOf(prev);
      const nextIndex = (currentIndex + 1) % positions.length;
      return positions[nextIndex] || "top-right";
    });
  }, []);
  useEffect(() => {
    const handleWheel = (event) => {
      const target = event.target;
      if (target.closest(".excalidraw") && !target.closest(".App-menu")) {
        event.preventDefault();
        event.stopPropagation();
        window.scrollBy({
          top: event.deltaY,
          left: event.deltaX,
          behavior: "auto"
        });
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });
    return () => {
      window.removeEventListener("wheel", handleWheel, { capture: true });
    };
  }, []);
  const TOOLBAR_HEIGHT = 60;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: `
        .Stack.Stack_vertical.App-menu_top__left {
          display: none !important;
        }

        .layer-ui__wrapper__top-right.zen-mode-transition {
          display: none !important;
        }

        .Stack.Stack_vertical.zoom-actions {
          display: none !important;
        }

        .excalidraw-toolbar-top-left .App-menu_top {
          position: fixed !important;
          display: block !important;
          top: ${TOOLBAR_HEIGHT + 10}px !important;
          left: 10px !important;
          right: auto !important;
          bottom: auto !important;
        }

        .excalidraw-toolbar-top-right .App-menu_top {
          position: fixed !important;
          display: block !important;
          top: ${TOOLBAR_HEIGHT + 10}px !important;
          right: 10px !important;
          left: auto !important;
          bottom: auto !important;
        }

        .excalidraw-toolbar-bottom-left .App-menu_top {
          position: fixed !important;
          display: block !important;
          bottom: 10px !important;
          left: 10px !important;
          top: auto !important;
          right: auto !important;
        }

        .excalidraw-toolbar-bottom-right .App-menu_top {
          position: fixed !important;
          display: block !important;
          bottom: 10px !important;
          right: 10px !important;
          top: auto !important;
          left: auto !important;
        }
      ` }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        id: "feedback-toolbar",
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: `${TOOLBAR_HEIGHT}px`,
          zIndex: 1e4,
          background: "white",
          borderBottom: "1px solid #e5e7eb",
          padding: "12px 16px",
          display: "flex",
          gap: "12px",
          alignItems: "center",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          boxSizing: "border-box",
          pointerEvents: "auto"
        },
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                fontSize: "14px",
                fontWeight: 600,
                color: "#374151",
                fontFamily: "system-ui, -apple-system, sans-serif"
              },
              children: "Feedback Mode"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: note,
              onChange: (event) => setNote(event.target.value),
              placeholder: "Describe your change request",
              maxLength: 2e3,
              disabled: isSubmitting,
              style: {
                flex: 1,
                padding: "8px 12px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "13px",
                fontFamily: "system-ui, -apple-system, sans-serif",
                outline: "none",
                transition: "border-color 0.2s"
              },
              onFocus: (event) => {
                event.target.style.borderColor = "#3b82f6";
              },
              onBlur: (event) => {
                event.target.style.borderColor = "#d1d5db";
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: cycleToolbarPosition,
              disabled: isSubmitting,
              title: `Tools: ${toolbarPosition}`,
              style: {
                padding: "8px 12px",
                fontSize: "13px",
                fontWeight: 500,
                color: "#374151",
                background: "white",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                fontFamily: "system-ui, -apple-system, sans-serif",
                opacity: isSubmitting ? 0.5 : 1,
                transition: "all 0.2s",
                whiteSpace: "nowrap"
              },
              onMouseEnter: (event) => {
                if (!isSubmitting) {
                  event.currentTarget.style.background = "#f9fafb";
                }
              },
              onMouseLeave: (event) => {
                event.currentTarget.style.background = "white";
              },
              children: "\u{1F4CD}"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleReset,
              disabled: isSubmitting,
              style: {
                padding: "8px 16px",
                fontSize: "13px",
                fontWeight: 500,
                color: "#374151",
                background: "white",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                fontFamily: "system-ui, -apple-system, sans-serif",
                opacity: isSubmitting ? 0.5 : 1,
                transition: "all 0.2s",
                whiteSpace: "nowrap"
              },
              onMouseEnter: (event) => {
                if (!isSubmitting) {
                  event.currentTarget.style.background = "#f9fafb";
                }
              },
              onMouseLeave: (event) => {
                event.currentTarget.style.background = "white";
              },
              children: "Reset"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => void handleSubmit(),
              disabled: isSubmitting,
              style: {
                padding: "8px 16px",
                fontSize: "13px",
                fontWeight: 500,
                color: "white",
                background: isSubmitting ? "#9ca3af" : "#3b82f6",
                border: "none",
                borderRadius: "6px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                fontFamily: "system-ui, -apple-system, sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.2s",
                whiteSpace: "nowrap"
              },
              onMouseEnter: (event) => {
                if (!isSubmitting) {
                  event.currentTarget.style.background = "#2563eb";
                }
              },
              onMouseLeave: (event) => {
                if (!isSubmitting) {
                  event.currentTarget.style.background = "#3b82f6";
                }
              },
              children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(LoadingSpinner, {}),
                "Submitting..."
              ] }) : "Submit"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `excalidraw-toolbar-${toolbarPosition}`,
        style: {
          position: "fixed",
          top: `${TOOLBAR_HEIGHT}px`,
          left: 0,
          width: "100vw",
          height: `${viewportHeight - TOOLBAR_HEIGHT}px`,
          zIndex: 9999,
          overflow: "hidden",
          pointerEvents: "auto"
        },
        children: isExcalidrawLoaded && ExcalidrawComponent ? /* @__PURE__ */ jsx(
          ExcalidrawComponent,
          {
            excalidrawAPI: (api) => {
              excalidrawAPIRef.current = api;
            },
            initialData: {
              appState: {
                viewBackgroundColor: "transparent",
                currentItemStrokeColor: "#ff0000"
                // Red stroke for visibility
              }
            }
          }
        ) : /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              fontSize: "16px",
              color: "#6b7280",
              fontFamily: "system-ui, -apple-system, sans-serif"
            },
            children: "Loading drawing tools..."
          }
        )
      }
    ),
    toast && /* @__PURE__ */ jsx(
      Toast,
      {
        message: toast.message,
        type: toast.type,
        onClose: () => setToast(null)
      }
    )
  ] });
}

// src/FeedbackOverlayManager.tsx
import { Fragment as Fragment2, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function OverlayController({
  onCloseRef,
  onToggleRef,
  metadataRef,
  showButton
}) {
  const [isVisible, setIsVisible] = React2.useState(persistentVisibilityState);
  const [buttonVisible, setButtonVisible] = React2.useState(showButton);
  useEffect2(() => {
    const handleToggle = (event) => {
      const customEvent = event;
      const newVisibility = customEvent.detail.enabled;
      setIsVisible(newVisibility);
      persistentVisibilityState = newVisibility;
      if (customEvent.detail.showButton !== void 0) {
        setButtonVisible(customEvent.detail.showButton);
      }
    };
    const handleToggleRequest = (event) => {
      const customEvent = event;
      if (customEvent.detail.toggle) {
        const newVisibility = !isVisible;
        setIsVisible(newVisibility);
        persistentVisibilityState = newVisibility;
        if (newVisibility) {
          onToggleRef.current?.();
        } else {
          onCloseRef.current?.();
        }
      }
    };
    window.addEventListener("feedback-overlay-toggle", handleToggle);
    window.addEventListener("feedback-overlay-toggle-request", handleToggleRequest);
    return () => {
      window.removeEventListener("feedback-overlay-toggle", handleToggle);
      window.removeEventListener("feedback-overlay-toggle-request", handleToggleRequest);
    };
  }, [isVisible]);
  return /* @__PURE__ */ jsxs2(Fragment2, { children: [
    buttonVisible && /* @__PURE__ */ jsx2(
      "button",
      {
        id: "feedback-toggle-button",
        onClick: () => {
          window.dispatchEvent(
            new CustomEvent("feedback-overlay-toggle-request", {
              detail: { toggle: true }
            })
          );
        },
        style: {
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 2147483647,
          backgroundColor: isVisible ? "#8b5cf6" : "#6366f1",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          transition: "all 0.2s ease",
          pointerEvents: "auto"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.2)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
        },
        title: isVisible ? "Close Feedback (Alt+F)" : "Give Feedback (Alt+F)",
        "aria-label": isVisible ? "Close Feedback" : "Give Feedback",
        children: isVisible ? "\u2715" : "\u{1F4AC}"
      }
    ),
    isVisible && /* @__PURE__ */ jsx2(
      FeedbackOverlay,
      {
        onClose: () => onCloseRef.current?.(),
        metadata: metadataRef.current
      }
    )
  ] });
}
var overlayRoot = null;
var overlayContainer = null;
var currentConvexClient = null;
var persistentVisibilityState = false;
function FeedbackOverlayManager({
  enabled,
  onClose,
  onToggle,
  metadata,
  convexUrl,
  showButton = false
}) {
  const onCloseRef = useRef2(onClose);
  const onToggleRef = useRef2(onToggle);
  const metadataRef = useRef2(metadata);
  useEffect2(() => {
    onCloseRef.current = onClose;
  }, [onClose]);
  useEffect2(() => {
    onToggleRef.current = onToggle;
  }, [onToggle]);
  useEffect2(() => {
    metadataRef.current = metadata;
  }, [metadata]);
  useEffect2(() => {
    if (!convexUrl) {
      console.warn("[FeedbackWidget] convexUrl not provided");
      return;
    }
    if (!currentConvexClient) {
      currentConvexClient = new ConvexReactClient(convexUrl);
    }
    if (!overlayContainer) {
      overlayContainer = document.createElement("div");
      overlayContainer.id = "feedback-overlay-root";
      document.body.appendChild(overlayContainer);
      overlayRoot = ReactDOM.createRoot(overlayContainer);
      overlayRoot.render(
        /* @__PURE__ */ jsx2(ConvexProvider, { client: currentConvexClient, children: /* @__PURE__ */ jsx2(
          OverlayController,
          {
            onCloseRef,
            onToggleRef,
            metadataRef,
            showButton
          }
        ) })
      );
      persistentVisibilityState = enabled;
      window.dispatchEvent(
        new CustomEvent("feedback-overlay-toggle", {
          detail: { enabled, showButton }
        })
      );
    } else {
      window.dispatchEvent(
        new CustomEvent("feedback-overlay-toggle", {
          detail: { enabled: persistentVisibilityState, showButton }
        })
      );
    }
  }, [enabled, convexUrl, showButton]);
  return null;
}

// src/FeedbackProvider.tsx
import { Fragment as Fragment3, jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var singletonConvexClient = null;
function getConvexClient(convexUrl) {
  if (!singletonConvexClient) {
    singletonConvexClient = new ConvexReactClient2(convexUrl);
  }
  return singletonConvexClient;
}
var cachedUsePathname;
function resolveUsePathname() {
  if (cachedUsePathname !== void 0) {
    return cachedUsePathname ?? null;
  }
  try {
    const navigation = require_navigation2();
    cachedUsePathname = navigation?.usePathname ?? navigation?.default?.usePathname ?? null;
  } catch {
    cachedUsePathname = null;
  }
  return cachedUsePathname ?? null;
}
function useRoute() {
  const usePathnameHook = resolveUsePathname();
  if (usePathnameHook) {
    const pathname = usePathnameHook();
    if (pathname) {
      return pathname;
    }
  }
  const [route, setRoute] = useState2(
    typeof window !== "undefined" ? window.location.pathname : ""
  );
  useEffect3(() => {
    const handleRouteChange = () => {
      setRoute(window.location.pathname);
    };
    handleRouteChange();
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);
  return route;
}
function parseHotkey(hotkey) {
  const parts = hotkey.split("+").map((p) => p.trim());
  const key = (parts[parts.length - 1] || "").toLowerCase();
  return {
    altKey: parts.some((p) => p.toLowerCase() === "alt"),
    ctrlKey: parts.some((p) => p.toLowerCase() === "ctrl"),
    shiftKey: parts.some((p) => p.toLowerCase() === "shift"),
    key
  };
}
function FeedbackProvider({
  convexUrl,
  project,
  enabled,
  hotkey = "Alt+F",
  showButton = false,
  getContext,
  children
}) {
  const [isOpen, setIsOpen] = useState2(false);
  const route = useRoute();
  useEffect3(() => {
    if (!convexUrl) {
      console.warn("[FeedbackWidget] convexUrl not provided - widget will not function correctly");
    }
  }, [convexUrl]);
  useEffect3(() => {
    if (!enabled) return;
    const hotkeyConfig = parseHotkey(hotkey);
    const handleKeyDown = (e) => {
      const modifiersMatch = (hotkeyConfig.altKey ? e.altKey : !e.altKey) && (hotkeyConfig.ctrlKey ? e.ctrlKey : !e.ctrlKey) && (hotkeyConfig.shiftKey ? e.shiftKey : !e.shiftKey);
      const keyMatches = e.key.toLowerCase() === hotkeyConfig.key;
      if (modifiersMatch && keyMatches) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, hotkey]);
  const convexClient = useMemo(() => {
    if (!convexUrl) return null;
    return getConvexClient(convexUrl);
  }, [convexUrl]);
  const metadata = useMemo(() => {
    const globalRoute = typeof globalThis !== "undefined" && globalThis.__FEEDBACK_WIDGET_ROUTE__;
    const normalizedRoute = route && route.length > 0 ? route : typeof globalRoute === "string" && globalRoute.length > 0 ? globalRoute : typeof window !== "undefined" ? window.location.pathname || "/" : "/";
    let contextData = {};
    try {
      const result = getContext?.();
      if (result) {
        contextData = result;
      }
    } catch (error) {
      console.error("[FeedbackWidget] Error in getContext callback:", error);
    }
    return {
      route: normalizedRoute,
      url: typeof window !== "undefined" ? window.location.href : void 0,
      project,
      ...contextData
    };
  }, [route, project, getContext]);
  if (!convexClient) {
    return /* @__PURE__ */ jsx3(Fragment3, { children });
  }
  return /* @__PURE__ */ jsxs3(Fragment3, { children: [
    children,
    enabled && /* @__PURE__ */ jsx3(ConvexProvider2, { client: convexClient, children: /* @__PURE__ */ jsx3(
      FeedbackOverlayManager,
      {
        enabled: isOpen,
        onClose: () => setIsOpen(false),
        onToggle: () => setIsOpen((prev) => !prev),
        metadata,
        convexUrl,
        showButton
      }
    ) })
  ] });
}

// src/utils/metadata.ts
function getViewportDimensions() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}
function getUserAgent() {
  return window.navigator.userAgent;
}
function generateUserHash(userId) {
  if (!userId) return void 0;
  throw new Error("generateUserHash not yet implemented");
}
function gatherMetadata(additionalContext) {
  return {
    ...additionalContext
    // Add more automatic detection:
    // - route from window.location.pathname
    // - env from process.env or window.__ENV__
    // etc.
  };
}
export {
  DEFAULT_SCREENSHOT_OPTIONS,
  FeedbackOverlay,
  FeedbackOverlayManager,
  FeedbackProvider,
  SENSITIVE_FIELD_SELECTORS,
  applyPIIRedaction,
  captureScreenshot,
  gatherMetadata,
  generateUserHash,
  getUserAgent,
  getViewportDimensions
};
