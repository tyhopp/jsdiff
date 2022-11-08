import { convertChangesToDMP } from "../../src/convert/dmp.js";
import { diffWords } from "../../src/diff/word.js";

import { describe, it } from "node:test";
import { expect } from "chai";

describe("convertToDMP", function () {
  it("should output diff-match-patch format", function () {
    const diffResult = diffWords("New Value  ", "New  ValueMoreData ");

    expect(convertChangesToDMP(diffResult)).to.eql([
      [0, "New  "],
      [-1, "Value"],
      [1, "ValueMoreData"],
      [0, " "],
    ]);
  });
});
