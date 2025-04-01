import * as core from "@actions/core";
export class Inputs {
    "node-version-path" = core.getInput("node-version-path", { required: true });
}
export function get() {
    return new Inputs();
}
//# sourceMappingURL=inputs.js.map