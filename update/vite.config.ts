import react from '@vitejs/plugin-react'
// eslint-disable-next-line import/order
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// TODO
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      // name: 'TODO_NAME',
      // fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
  plugins: [react(), dts({ include: ['lib'], rollupTypes: true })],
})
