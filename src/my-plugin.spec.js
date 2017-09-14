/* globals describe, it */
import assert from "assert";
import handler from "./my-plugin";

describe("myhandler binding handler", () => {
	it("should provide an init function", () => {
		assert.equal(typeof handler.init, "function");
	});

	it("should provide an update function", () => {
		assert.equal(typeof handler.update, "function");
	});
});
