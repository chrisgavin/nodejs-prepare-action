import * as fs from "fs";
import * as inputs from "./inputs";

export async function getNodeVersion():Promise<string> {
	const contents = await fs.promises.readFile(inputs.get()["node-version-path"], "utf8");
	return contents.trim();
}
