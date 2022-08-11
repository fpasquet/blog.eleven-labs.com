import * as path from 'path';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: path.resolve(__dirname, 'dist/dts/index.d.ts'),
    output: [
      { file: path.resolve(__dirname, 'dist/index.d.ts'), format: 'es' }
    ],
    plugins: [dts()],
    external: [/\.scss$/]
  }
];
