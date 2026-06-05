# The WISP Handbook

**[wisphandbook.com](https://wisphandbook.com)** — everything it takes to start
a wireless internet service provider from absolute scratch, and grow it from
your first customer to your thousandth.

US-first. Sequential journey stages + maintained reference material. Every page
carries a `lastReviewed` date and an honest depth badge.

## Contributing corrections

This industry moves — hardware lineups, spectrum rules, and prices all rot.
Corrections are the most valuable contribution:

- **Edit this page** links on every page open a PR against the source file.
- **Report outdated info** links pre-fill an issue with the page slug.

## Development

```sh
npm install
npm run dev      # local preview at localhost:4321
npm run build    # production build (fails if any page is missing required frontmatter)
```

Built with [Astro Starlight](https://starlight.astro.build/). Journey pages
under `src/content/docs/journey/`, reference under
`src/content/docs/reference/`. Required frontmatter on every page:
`lastReviewed`, `depth`, `jurisdiction` — see `src/content.config.ts`.

Architecture decisions are recorded in [`docs/decisions/`](docs/decisions/).

## License

Content (`src/content/`): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
Site code: MIT. See [LICENSE](LICENSE).
