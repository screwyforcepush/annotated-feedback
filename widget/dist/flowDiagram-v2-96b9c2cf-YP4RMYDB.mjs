import {
  flowRendererV2,
  flowStyles
} from "./chunk-DWMUYTRU.mjs";
import "./chunk-WMIDFCVF.mjs";
import {
  flowDb,
  parser$1
} from "./chunk-7YBHPXD7.mjs";
import "./chunk-QVPU43JF.mjs";
import "./chunk-QISWMYZR.mjs";
import "./chunk-QHIQDD7G.mjs";
import "./chunk-OPGA5GKS.mjs";
import {
  require_dayjs_min,
  setConfig
} from "./chunk-TUP34UAG.mjs";
import {
  require_dist
} from "./chunk-OFZITTM6.mjs";
import {
  __toESM
} from "./chunk-XGB3TDIC.mjs";

// node_modules/.pnpm/mermaid@10.9.3/node_modules/mermaid/dist/flowDiagram-v2-96b9c2cf.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
