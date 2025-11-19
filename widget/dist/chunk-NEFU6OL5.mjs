import {
  __require
} from "./chunk-XGB3TDIC.mjs";

// node_modules/.pnpm/@excalidraw+excalidraw@0.18.0_@types+react-dom@19.2.2_@types+react@19.2.2__@types+react_a87f86c497bab0352f8bc4c61c9a3047/node_modules/@excalidraw/excalidraw/dist/prod/chunk-SRAX5OIU.js
var d = Object.defineProperty;
var e = (b, a, c) => a in b ? d(b, a, { enumerable: true, configurable: true, writable: true, value: c }) : b[a] = c;
var f = ((b) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(b, { get: (a, c) => (typeof __require < "u" ? __require : a)[c] }) : b)(function(b) {
  if (typeof __require < "u") return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + b + '" is not supported');
});
var g = (b) => (a) => {
  var c = b[a];
  if (c) return c();
  throw new Error("Module not found in bundle: " + a);
};
var h = (b, a) => {
  for (var c in a) d(b, c, { get: a[c], enumerable: true });
};
var i = (b, a, c) => (e(b, typeof a != "symbol" ? a + "" : a, c), c);

export {
  f,
  g,
  h,
  i
};
