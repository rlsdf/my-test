import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { mockApiPlugin } from '@my/utils';

export default defineConfig({
  plugins: [react(), mockApiPlugin()]
});
