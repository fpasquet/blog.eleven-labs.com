import esbuild from 'rollup-plugin-esbuild';

export default [
  {
    input: 'src/assets/scripts/main.tsx',
    output: {
      file: 'dist/js/main.min.js',
      format: 'iife'
    },
    plugins: [
      esbuild({
        minify: true,
        optimizeDeps: {
          include: [
            'react',
            'react-dom/client',
            'algoliasearch',
            '@eleven-labs/blog-ui'
          ]
        }
      })
    ]
  }
];
