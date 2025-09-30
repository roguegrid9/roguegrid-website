# RogueGrid9 Website

Official marketing website for RogueGrid9 - Collaborative compute for developers and gamers.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Animations:** Framer Motion
- **Hosting:** Cloudflare Pages
- **Version Control:** GitHub

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
Deployment Flow
Local Development (~/dev/roguegrid9-site)
    ↓
    git add .
    git commit -m "Your changes"
    git push
    ↓
GitHub Repository (roguegrid9/roguegrid-website)
    ↓ [automatic trigger]
Cloudflare Pages Build System
    ↓ [runs: npm install && npm run build]
Production (https://roguegrid9.com)
Automatic deployment on every push to main branch.
Build Configuration
Cloudflare Pages automatically builds and deploys when code is pushed to GitHub:

Build command: npm run build
Build output directory: dist
Production branch: main
Framework: Vite (auto-detected)

Making Changes

Edit code locally
Test with npm run dev
Commit changes:

bash   git add .
   git commit -m "Description of changes"
   git push

Cloudflare Pages automatically deploys in ~2 minutes
Check https://roguegrid9.com

Project Structure
roguegrid9-site/
├── src/
│   ├── components/       # Reusable UI components
│   ├── routes/          # Page components
│   ├── shell/           # App layout/navigation
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── public/              # Static assets
│   ├── favicon.svg      # Browser tab icon
│   ├── og-image.png     # Social media preview
│   └── logo1.svg        # Logo
├── dist/                # Build output (gitignored)
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.ts       # Vite configuration
└── tailwind.config.cjs  # Tailwind configuration
Links

Live Site: https://roguegrid9.com
GitHub Repo: https://github.com/roguegrid9/roguegrid-website
Cloudflare Dashboard: https://dash.cloudflare.com (Workers & Pages > roguegrid-website)

Quick Commands
bash# Check git status
git status

# See deployment history
# Visit: https://dash.cloudflare.com → Workers & Pages → roguegrid-website → Deployments

# Rollback to previous version
# Via Cloudflare Dashboard: Deployments tab → Click on old deployment → "Rollback to this deployment"
Notes

Every push to main triggers automatic deployment
Preview deployments available for other branches
Build logs available in Cloudflare Dashboard
Custom domain configured via Cloudflare DNS


Save that as your README.md, then:
```bash
git add README.md
git commit -m "Update README with deployment workflow"
git push
