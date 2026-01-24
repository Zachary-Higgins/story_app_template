import { StoryEngine } from 'story-engine';
import 'story-engine/dist/story-engine.css';

export default function App() {
  return <StoryEngine editorEnabled={import.meta.env.DEV} />;
}
