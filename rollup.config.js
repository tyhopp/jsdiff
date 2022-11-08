const { terser } = require(`rollup-plugin-terser`);

const config = [
  {
    input: `src/index.js`,
    output: [
      {
        format: `es`,
        dir: `dist`,
      },
    ],
    plugins: [terser()],
  },
];

module.exports = config;
