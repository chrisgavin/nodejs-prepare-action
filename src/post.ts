import * as core from "@actions/core";
import * as cache from "./cache.js";
import * as nodeVersion from "./nodeVersion.js";
import sourceMapSupport from "source-map-support";

async function main() {
	sourceMapSupport.install();
	await cache.saveCache(await nodeVersion.getNodeVersion());
}

main().catch(error => core.setFailed(error.stack || error));
