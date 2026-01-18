# Story App Template

A minimal React template for building immersive storytelling experiences with **Story Engine**.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Creating Stories

Add JSON files to `content/stories/`:

```json
{
  "theme": "dark-cinematic",
  "title": "My Story",
  "description": "A brief description",
  "publishedAt": "2026-01-18T00:00:00Z",
  "pages": [
    {
      "id": "opening",
      "title": "The Beginning",
      "layout": "hero",
      "body": ["Your story text here."],
      "background": {
        "type": "image",
        "src": "/images/hero.jpg"
      }
    }
  ]
}
```

## Content Structure

```
content/
├── home.json
├── about.json
├── social.json
├── stories/
│   ├── my-story.json
│   └── another-story.json
├── images/
├── audio/
└── videos/
```

## Available Scripts

```bash
npm run dev      # Dev server
npm run build    # Production build
npm run lint     # Lint code
npm run preview  # Preview build
```

## Documentation

- [docs/STORIES.md](docs/STORIES.md) - Story JSON schema & layouts
- [docs/CONTENT.md](docs/CONTENT.md) - Home, about, social config
- [docs/INTEGRATION.md](docs/INTEGRATION.md) - Advanced setup