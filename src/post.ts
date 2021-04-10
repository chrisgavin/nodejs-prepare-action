import * as core from "@actions/core";
import * as cache from "./cache";
import * as nodeVersion from "./nodeVersion";
import sourceMapSupport from "source-map-support";

async function main() {
	sourceMapSupport.install();
	await cache.saveCache(await nodeVersion.getNodeVersion());
}

main().catch(error => core.setFailed(error.stack || error));
