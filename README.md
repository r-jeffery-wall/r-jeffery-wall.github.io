# Rowan's Portfolio Page

This is the source code for my portfolio page where I showcase my skills, projects, and contributions.

## Project Details
The current iteration of this project is implemented using React, Redux, and TypeScript, with Vite as the build tool and Tailwind CSS for styling. The site is frontend-only: all content (skills, projects, and socials) is defined in `frontend/src/features/config.json`, and GitHub contribution data is pulled from the public GitHub API.

## Development
From the `frontend` directory:
- `npm install` — install dependencies
- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run lint` — lint the codebase

## Deployment
- `npm run deploy` — build and publish to GitHub Pages (via `gh-pages`)
- Or connect the repo to Vercel; Vite is auto-detected.

## Next Steps
- Flesh out the terminal-style design language
- Add additional features to the site
