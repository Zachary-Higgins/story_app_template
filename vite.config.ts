import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { storyEnginePlugin } from 'story-engine/plugin';  // Separate entry!

export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/story_app_template/' : '/',
  plugins: [react(), storyEnginePlugin()],
  publicDir: 'content',
});
