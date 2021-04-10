import * as core from "@actions/core";

export class Inputs {
	"node-version-path" = core.getInput("node-version-path", {required: true});
}

export function get():Inputs {
	return new Inputs();
}
