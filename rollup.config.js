import { terser } from "rollup-plugin-terser";

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

export default config;
