# stephen-bradley.com

Source for my personal site and blog at https://www.stephen-bradley.com,
built with Gatsby 5, React 18 and MDX.

## Development

Requires Node 22 (see `.nvmrc`).

```shell
nvm use
npm install
npm run develop   # http://localhost:8000
```

Other scripts: `npm run build`, `npm run serve` (preview the production build),
`npm run clean`, `npm run format`.

## Writing posts

Posts live in `posts/<year>/<month>/<slug>/index.mdx` with frontmatter:
`title`, `date`, `published`, `tags`, `teaser`, `featuredImage`.
Only posts with `published: true` are listed on the site.

## Deployment

Netlify builds from `netlify.toml`:

- `master` deploys to production
- `dev` deploys to a branch preview (`dev--<site>.netlify.app`)
- pull requests get deploy previews
