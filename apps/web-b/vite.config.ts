import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { mockApiPlugin } from '@my/utils/mockApiPlugin';

export default defineConfig({
  plugins: [react(), mockApiPlugin()]
});
