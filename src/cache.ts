import * as cache from "@actions/cache";
import * as crypto from "crypto";
import * as fs from "fs";
import * as os from "os";
import * as core from "@actions/core";

const packageLockPath = "./package-lock.json";
const npmCachePath = "~/.npm/";

async function cacheKey(nodeJSVersion:string) {
	const hash = crypto.createHash("sha256");	
	hash.update(await fs.promises.readFile(packageLockPath));
	return `npm-cache-${os.type()}-${hash.digest("hex")}-${nodeJSVersion}`;
}

export async function restoreCache(nodeJSVersion:string):Promise<void> {
	const key = await cacheKey(nodeJSVersion);
	core.info(`Restoring cache with key ${key}.`);
	await cache.restoreCache([npmCachePath], key);
}

export async function saveCache(nodeJSVersion:string):Promise<void> {
	const key = await cacheKey(nodeJSVersion);
	core.info(`Saving cache with key ${key}.`);
	try {
		await cache.saveCache([npmCachePath], key);
	}
	catch (e) {
		if (e instanceof cache.ReserveCacheError) {
			core.warning(e);
		}
		else {
			throw e;
		}
	}
}
