import { createPatch, applyPatch } from "../src/index.js";

import { describe, it } from "node:test";
import { expect } from "chai";

describe("root exports", function () {
  it("should export APIs", function () {
    expect(createPatch).to.exist;
    expect(applyPatch).to.exist;
  });
});
