import { diffSentences } from "../../src/diff/sentence.js";
import { convertChangesToXML } from "../../src/convert/xml.js";

import { describe, it } from "node:test";
import { expect } from "chai";

describe("diff/sentence", function () {
  describe("#diffSentences", function () {
    it("Should diff Sentences", function () {
      const diffResult = diffSentences("New Value.", "New ValueMoreData.");
      expect(convertChangesToXML(diffResult)).to.equal(
        "<del>New Value.</del><ins>New ValueMoreData.</ins>"
      );
    });

    it("should diff only the last sentence", function () {
      const diffResult = diffSentences(
        "Here im. Rock you like old man.",
        "Here im. Rock you like hurricane."
      );
      expect(convertChangesToXML(diffResult)).to.equal(
        "Here im. <del>Rock you like old man.</del><ins>Rock you like hurricane.</ins>"
      );
    });
  });
});
