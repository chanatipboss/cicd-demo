# cicd-demo

Small Node.js API for practicing a CI/CD pipeline with GitHub Actions.

## Run locally

```bash
npm test
npm start   # http://localhost:3000/health , /add?a=2&b=3
```

## Pipeline (`.github/workflows/ci.yml`)

`lint → test (Node 20/22) → build Docker image → ghcr.io → staging → production`

- Pull requests: lint + test only.
- Push to `main`: full pipeline.
- `production` job: add required reviewers under Settings → Environments for a manual approval gate.
