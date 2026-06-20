# GitHub Pages Deployment

This project deploys the static waitlist page from `site/` through GitHub Actions.

## One-Time Repository Setup

GitHub Pages must be enabled once by a repository admin:

1. Open `https://github.com/Zhuanmala/scented_candle/settings/pages`.
2. In **Build and deployment**, set **Source** to **GitHub Actions**.
3. Save the setting if GitHub shows a save button.
4. Re-run the latest **Deploy waitlist site** workflow, or push a new commit that changes `site/` or `.github/workflows/pages.yml`.

Expected public URL after a successful deployment:

```text
https://zhuanmala.github.io/scented_candle/
```

## Workflow

- Workflow file: `.github/workflows/pages.yml`
- Published directory: `site/`
- Trigger: push to `main` when `site/**` or the workflow file changes, plus manual `workflow_dispatch`

## Known Failure

If the workflow fails at `actions/configure-pages` with `Get Pages site failed`, the repository Pages site is not enabled or not configured to use GitHub Actions as the source.
