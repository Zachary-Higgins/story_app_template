import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { storyEditorServer, storyEnginePlugin } from 'story-engine/plugin';  // Separate entry!

export default defineConfig(({ command }) => ({
  base: process.env.GITHUB_PAGES ? '/story_app_template/' : '/',
  plugins: [
    react(),
    storyEnginePlugin(),
    ...(command === 'serve' ? [storyEditorServer()] : []),
  ],
  publicDir: 'content',
}));
