import {
  CB,
  NQ
} from "./chunk-2QNAOZLC.mjs";
import "./chunk-XAGCP35M.mjs";
import "./chunk-NEFU6OL5.mjs";
import "./chunk-XGB3TDIC.mjs";

// node_modules/.pnpm/@excalidraw+excalidraw@0.18.0_@types+react-dom@19.2.2_@types+react@19.2.2__@types+react_a87f86c497bab0352f8bc4c61c9a3047/node_modules/@excalidraw/excalidraw/dist/prod/subset-worker.chunk.js
var s = import.meta.url ? new URL(import.meta.url) : void 0;
typeof window > "u" && typeof self < "u" && (self.onmessage = async (e) => {
  switch (e.data.command) {
    case CB.Subset:
      let a = await NQ(e.data.arrayBuffer, e.data.codePoints);
      self.postMessage(a, { transfer: [a] });
      break;
  }
});
export {
  s as WorkerUrl
};
