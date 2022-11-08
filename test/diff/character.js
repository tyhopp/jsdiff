import { diffChars } from "../../src/diff/character.js";
import { convertChangesToXML } from "../../src/convert/xml.js";

import { describe, it } from "node:test";
import { expect } from "chai";

describe("diff/character", function () {
  describe("#diffChars", function () {
    it("Should diff chars", function () {
      const diffResult = diffChars("New Value.", "New ValueMoreData.");
      expect(convertChangesToXML(diffResult)).to.equal(
        "New Value<ins>MoreData</ins>."
      );
    });

    describe("case insensitivity", function () {
      it("is considered when there's no difference", function () {
        const diffResult = diffChars("New Value.", "New value.", {
          ignoreCase: true,
        });
        expect(convertChangesToXML(diffResult)).to.equal("New value.");
      });

      it("is considered when there's a difference", function () {
        const diffResult = diffChars("New Values.", "New value.", {
          ignoreCase: true,
        });
        expect(convertChangesToXML(diffResult)).to.equal(
          "New value<del>s</del>."
        );
      });
    });
  });
});
