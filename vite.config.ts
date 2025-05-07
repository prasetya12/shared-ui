import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts';
import yaml from '@rollup/plugin-yaml';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),dts(),yaml()],
  build:{
    lib:{
      entry: './src/index.ts',
      name: 'NavbarPlexicus',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions:{
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    }
  }
})
