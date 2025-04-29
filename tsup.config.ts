import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  tsconfig: 'tsconfig.json',
  external: ['react'],
  sourcemap: true,
  clean: true,
  dts: true,
})
