"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const cache = __importStar(require("./cache"));
const outputs = __importStar(require("./outputs"));
const nodeVersion = __importStar(require("./nodeVersion"));
const source_map_support_1 = __importDefault(require("source-map-support"));
async function main() {
    source_map_support_1.default.install();
    const requiredNodeVersion = await nodeVersion.getNodeVersion();
    core.info(`NodeJS version is ${requiredNodeVersion}.`);
    outputs.set({ "node-version": requiredNodeVersion });
    await cache.restoreCache(requiredNodeVersion);
}
main().catch(error => core.setFailed(error.stack || error));
//# sourceMappingURL=index.js.map