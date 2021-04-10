import * as inputs from "./../src/inputs";
import * as nodeVersion from "./../src/nodeVersion";

class TestInputs implements inputs.Inputs {
	"node-version-path" = "./tests/fixtures/node-version.txt";
}

describe("test getNodeVersion(...)", () => {
	it("should return the correct NodeJS version", async () => {
		spyOn(inputs, "get").and.returnValue(new TestInputs());
		await nodeVersion.getNodeVersion();
		expect(await nodeVersion.getNodeVersion()).toEqual("12.21.0");
	});
});
