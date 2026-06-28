# Release Rules
<!-- last-analyzed: 2026-06-27T00:00:00Z -->

This repo is a **Claude Code plugin marketplace** (`ai-investment-analyst`) that also
publishes installable `.skill` bundles for Claude.ai. It contains two products, each
versioned independently with its own semver:

- `ag-capital-analyst` (currently 1.6.4)
- `ppm-risk-review` (currently 1.4.0)

A **repo-level git tag `vX.Y.Z`** (latest `v1.5.0`) is the GitHub Release that hosts the
`.skill` download assets. This repo tag is a unified release counter for the marketplace —
it is NOT tied to either plugin's semver. README download links point both `.skill`
bundles at the latest repo tag.

## Version Sources
Per plugin (must stay in sync):
- `<plugin>/.claude-plugin/plugin.json` → `"version"` field
- `.claude-plugin/marketplace.json` → that plugin's `"version"` field (and `"description"` if it changed)
- `<plugin>.skill` (root) → ZIP bundle, must be rebuilt so its contents match the source
  - SKILL.md frontmatter has NO version field — nothing to bump there.

`.skill` bundle internal layout (match each bundle's EXISTING structure exactly):
- `ag-capital-analyst.skill`: top-level `ag-capital-analyst/` containing `SKILL.md` + `references/*.md`.
  Source lives at `ag-capital-analyst/skills/ag-capital-analyst/` (the bundle drops the `skills/` layer).
  NOTE: this bundle does NOT include plugin.json.
- `ppm-risk-review.skill`: top-level `ppm-risk-review/` containing `SKILL.md`, `.claude-plugin/plugin.json`,
  `references/*`, `scripts/*`. Source lives at `ppm-risk-review/` directly.

README download links to update on every release (point to new tag):
- `README.md` ag-capital-analyst link (`releases/download/<tag>/ag-capital-analyst.skill`)
- `README.md` ppm-risk-review link (`releases/download/<tag>/ppm-risk-review.skill`)

## Release Trigger
Manual. There is NO release CI. Process (established pattern, see notes/rubric-v2.3-merged-plan.md):
branch → bump plugin version + marketplace.json + descriptions → rebuild `.skill` → update README →
PR → merge to main → annotated tag `vX.Y.Z` → `gh release create` with `.skill` assets.

## Test Gate
No automated test suite. Sanity checks before release:
- `node -e "JSON.parse(require('fs').readFileSync('.claude-plugin/marketplace.json'))"` (+ each plugin.json) — valid JSON.
- Rebuilt `.skill` unzips cleanly and contains the latest source (grep the new content).
- Plugin version matches in plugin.json AND marketplace.json.

## Registry / Distribution
- Claude Code plugin marketplace: consumed directly from the repo via `.claude-plugin/marketplace.json` (no publish step).
- Claude.ai skills: users download the `.skill` asset from the GitHub Release and upload it manually.
- No npm/PyPI/Docker publishing. The `ppm-risk-review/package.json` (docx dep) is only for local Word-doc generation, not distribution.

## Release Notes Strategy
GitHub Release body, hand-written. Conventional-ish commit subjects (`feat(...)`, `fix:`, `chore(release):`).
Lead with what changed for users of the affected plugin.

## CI Workflow Files
- `.github/workflows/claude.yml` — Claude Code GitHub action only. NOT a release workflow.

## First-Time Setup Gaps
- No release automation workflow (manual `gh release create` each time) — acceptable for this manual,
  asset-upload-based flow; could be scaffolded later if desired.
- `.gitignore` should keep local working artifacts out of releases: `ppm-risk-review/node_modules/`,
  `ppm-risk-review/package-lock.json`, and the untracked deal-specific `ppm-risk-review/scripts/build_dlp_*.js`
  / `build_usaf_*.js` are local-only and must NOT be committed as part of a release.
