import * as core from "@actions/core";
import * as cache from "./cache.js";
import * as outputs from "./outputs.js";
import * as nodeVersion from "./nodeVersion.js";
import sourceMapSupport from "source-map-support";

async function main() {
	sourceMapSupport.install();

	const requiredNodeVersion = await nodeVersion.getNodeVersion();
	core.info(`NodeJS version is ${requiredNodeVersion}.`);
	outputs.set({"node-version": requiredNodeVersion});

	await cache.restoreCache(requiredNodeVersion);
}

main().catch(error => core.setFailed(error.stack || error));
