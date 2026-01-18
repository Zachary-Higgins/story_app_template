import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { storyEnginePlugin } from 'story-engine/plugin';  // Separate entry!

export default defineConfig({
  plugins: [react(), storyEnginePlugin()],
  publicDir: 'content',
});