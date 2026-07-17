import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/',  // make sure this is correct
  plugins: [react()],
});
