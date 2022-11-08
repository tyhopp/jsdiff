# jsdiff

Fork of [kpdecker/jsdiff](https://github.com/kpdecker/jsdiff) with these changes:

- Bundle only the `createPatch` and `applyPatch` exports
- Bundle with [`rollup-plugin-terser`](https://github.com/TrySound/rollup-plugin-terser)
- Make Node 18 minimum version
- Use built-in Node test runner for tests
- Run tests in CI via GitHub Actions

Intended for vendored use in [patch-files](https://github.com/tyhopp/patch-files).
